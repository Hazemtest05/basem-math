/* =============================================================================
   Function grapher. Type an expression in x (see mathexpr.ts for the grammar)
   and it draws the curve on a graph-paper stage: adaptive grid + numbered axes,
   auto-fitted y-range, zoom controls, and a crosshair readout that reports
   f(x) at the cursor. Up to three curves at once, separated by ";".

   Pure client-side, progressive, reduced-motion-safe (all motion user-driven).
   SVG children are created here and styled with inline CSS-var strings, mirroring
   src/lib/interactives.ts so the stage inherits the site's ink/accent palette.
   ============================================================================= */

import { compile, type CompiledFn } from './mathexpr';

const NS = 'http://www.w3.org/2000/svg';
const VW = 600, VH = 380, PAD = 40;
const CLAMP = 1e4; // ignore samples beyond this when auto-fitting / drawing
const COLORS = ['var(--accent)', 'var(--ink)', 'var(--ok)'];

interface View { xmin: number; xmax: number; ymin: number; ymax: number; }
interface Map2 { X: (x: number) => number; Y: (y: number) => number; invX: (px: number) => number; }

function svgEl<K extends keyof SVGElementTagNameMap>(
  tag: K, attrs: Record<string, string | number> = {}, style: Partial<CSSStyleDeclaration> = {}
): SVGElementTagNameMap[K] {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, String(attrs[k]));
  Object.assign(e.style, style);
  return e;
}

function mapper(v: View): Map2 {
  const sx = (VW - 2 * PAD) / (v.xmax - v.xmin);
  const sy = (VH - 2 * PAD) / (v.ymax - v.ymin);
  return {
    X: (x: number): number => PAD + (x - v.xmin) * sx,
    Y: (y: number): number => VH - PAD - (y - v.ymin) * sy,
    invX: (px: number): number => v.xmin + (px - PAD) / sx,
  };
}

function niceStep(range: number, target = 8): number {
  const raw = range / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10;
  return step * mag;
}

function fmt(n: number): string {
  if (!isFinite(n)) return n > 0 ? '∞' : '−∞';
  const r = Math.round(n * 1000) / 1000;
  return Object.is(r, -0) ? '0' : String(r);
}

function autoFitY(fns: CompiledFn[], xmin: number, xmax: number): [number, number] {
  let lo = Infinity, hi = -Infinity;
  const N = 300;
  for (const f of fns) {
    for (let i = 0; i <= N; i++) {
      const x = xmin + (xmax - xmin) * (i / N);
      const y = f(x);
      if (isFinite(y) && Math.abs(y) <= CLAMP) { if (y < lo) lo = y; if (y > hi) hi = y; }
    }
  }
  if (!isFinite(lo) || !isFinite(hi)) return [-10, 10];
  if (Math.abs(hi - lo) < 1e-9) { lo -= 1; hi += 1; }
  const pad = (hi - lo) * 0.12;
  lo -= pad; hi += pad;
  // pull the x-axis into view when the curve sits just above / below it
  if (lo > 0 && lo < (hi - lo)) lo = 0;
  if (hi < 0 && -hi < (hi - lo)) hi = 0;
  return [lo, hi];
}

function fnPath(f: CompiledFn, m: Map2, v: View): string {
  let d = '', pen = false;
  const samples = VW; // ~1px resolution
  const lo = v.ymin - (v.ymax - v.ymin), hi = v.ymax + (v.ymax - v.ymin);
  for (let i = 0; i <= samples; i++) {
    const x = v.xmin + (v.xmax - v.xmin) * (i / samples);
    const y = f(x);
    if (isFinite(y) && y >= lo && y <= hi) {
      d += (pen ? 'L' : 'M') + m.X(x).toFixed(1) + ' ' + m.Y(y).toFixed(1) + ' ';
      pen = true;
    } else {
      pen = false; // discontinuity / asymptote / off-screen → lift the pen
    }
  }
  return d;
}

function mountGrapher(root: HTMLElement): void {
  const svg = root.querySelector<SVGSVGElement>('[data-grapher-svg]');
  const input = root.querySelector<HTMLInputElement>('[data-grapher-input]');
  const readout = root.querySelector<HTMLElement>('[data-grapher-readout]');
  const errEl = root.querySelector<HTMLElement>('[data-grapher-error]');
  if (!svg || !input || !readout || !errEl) return;

  const gGrid = svgEl('g');
  const gPlot = svgEl('g');
  const gCross = svgEl('g');
  svg.append(gGrid, gPlot, gCross);

  let view: View = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };
  let fns: CompiledFn[] = [];

  const drawGridAxes = (m: Map2): void => {
    gGrid.replaceChildren();
    const stepX = niceStep(view.xmax - view.xmin);
    const stepY = niceStep(view.ymax - view.ymin);
    const axisY = view.ymin <= 0 && view.ymax >= 0 ? m.Y(0) : VH - PAD; // where x-axis labels sit
    const axisX = view.xmin <= 0 && view.xmax >= 0 ? m.X(0) : PAD;      // where y-axis labels sit

    for (let x = Math.ceil(view.xmin / stepX) * stepX; x <= view.xmax + 1e-9; x += stepX) {
      const px = m.X(x);
      gGrid.appendChild(svgEl('line', { x1: px, y1: PAD, x2: px, y2: VH - PAD }, { stroke: 'var(--grid)', strokeWidth: '1' }));
      if (Math.abs(x) > 1e-9) {
        const t = svgEl('text', { x: px, y: axisY + 14, 'text-anchor': 'middle', 'font-size': 10, dir: 'ltr' }, { fill: 'var(--ink-3)', fontFamily: 'var(--font)' });
        t.textContent = fmt(x);
        gGrid.appendChild(t);
      }
    }
    for (let y = Math.ceil(view.ymin / stepY) * stepY; y <= view.ymax + 1e-9; y += stepY) {
      const py = m.Y(y);
      gGrid.appendChild(svgEl('line', { x1: PAD, y1: py, x2: VW - PAD, y2: py }, { stroke: 'var(--grid)', strokeWidth: '1' }));
      if (Math.abs(y) > 1e-9) {
        const t = svgEl('text', { x: axisX - 6, y: py + 3.5, 'text-anchor': 'end', 'font-size': 10, dir: 'ltr' }, { fill: 'var(--ink-3)', fontFamily: 'var(--font)' });
        t.textContent = fmt(y);
        gGrid.appendChild(t);
      }
    }
    // bold axes through the origin
    if (view.ymin <= 0 && view.ymax >= 0)
      gGrid.appendChild(svgEl('line', { x1: PAD, y1: m.Y(0), x2: VW - PAD, y2: m.Y(0) }, { stroke: 'var(--grid-major)', strokeWidth: '1.6' }));
    if (view.xmin <= 0 && view.xmax >= 0)
      gGrid.appendChild(svgEl('line', { x1: m.X(0), y1: PAD, x2: m.X(0), y2: VH - PAD }, { stroke: 'var(--grid-major)', strokeWidth: '1.6' }));
  };

  const drawPlot = (m: Map2): void => {
    gPlot.replaceChildren();
    fns.forEach((f, i) => {
      gPlot.appendChild(svgEl('path', { d: fnPath(f, m, view) }, { fill: 'none', stroke: COLORS[i % COLORS.length], strokeWidth: '2.4', strokeLinejoin: 'round', strokeLinecap: 'round' }));
    });
  };

  const redraw = (): void => {
    const m = mapper(view);
    drawGridAxes(m);
    drawPlot(m);
    gCross.replaceChildren();
  };

  const apply = (): void => {
    const parts = input.value.split(/[;\n]/).map((s) => s.trim()).filter(Boolean);
    const compiled: CompiledFn[] = [];
    let error = '';
    for (const p of parts) {
      try { compiled.push(compile(p)); }
      catch (e) { error = `تعذّر رسم «${p}» — ${(e as Error).message}`; }
    }
    fns = compiled.slice(0, 3);
    errEl.textContent = error;
    if (!fns.length) { redraw(); readout.textContent = ''; return; }
    const [lo, hi] = autoFitY(fns, view.xmin, view.xmax);
    view.ymin = lo; view.ymax = hi;
    redraw();
    readout.textContent = 'مرّر المؤشّر أو انقر فوق المنحني لقراءة قيمة f عند أيّ نقطة.';
  };

  const crosshair = (x: number): void => {
    if (!fns.length) return;
    const m = mapper(view);
    const cx = m.X(x);
    gCross.replaceChildren();
    gCross.appendChild(svgEl('line', { x1: cx, y1: PAD, x2: cx, y2: VH - PAD }, { stroke: 'var(--line-strong)', strokeWidth: '1', strokeDasharray: '3 3' }));
    const single = fns.length === 1;
    const readParts: string[] = [];
    fns.forEach((f, i) => {
      const y = f(x);
      if (isFinite(y) && y >= view.ymin && y <= view.ymax) {
        gCross.appendChild(svgEl('circle', { cx, cy: m.Y(y), r: 4 }, { fill: COLORS[i % COLORS.length], stroke: 'var(--paper)', strokeWidth: '1.5' }));
      }
      const name = single ? 'f' : `f${i + 1}`;
      readParts.push(`${name}(${fmt(x)}) = ${isFinite(y) ? fmt(y) : 'غير معرّف'}`);
    });
    readout.textContent = `x = ${fmt(x)}  ·  ${readParts.join('  ·  ')}`;
  };

  const pointerX = (e: PointerEvent): number => {
    const r = svg.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * VW;
    const x = mapper(view).invX(px);
    return Math.max(view.xmin, Math.min(view.xmax, x));
  };
  svg.addEventListener('pointermove', (e) => crosshair(pointerX(e)));
  svg.addEventListener('pointerdown', (e) => crosshair(pointerX(e)));
  svg.addEventListener('pointerleave', () => { gCross.replaceChildren(); });

  const zoom = (factor: number): void => {
    const c = (view.xmin + view.xmax) / 2;
    const half = ((view.xmax - view.xmin) / 2) * factor;
    view.xmin = c - half; view.xmax = c + half;
    apply();
  };
  root.querySelectorAll<HTMLButtonElement>('[data-grapher-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const a = btn.dataset.grapherAction;
      if (a === 'in') zoom(0.7);
      else if (a === 'out') zoom(1.4);
      else if (a === 'reset') { view = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 }; apply(); }
    });
  });

  let debounce: number | undefined;
  input.addEventListener('input', () => { clearTimeout(debounce); debounce = window.setTimeout(apply, 220); });
  input.addEventListener('change', apply);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { clearTimeout(debounce); apply(); } });

  apply();
}

export function initGraphers(): void {
  document.querySelectorAll<HTMLElement>('[data-grapher]').forEach((root) => {
    if (root.dataset.mounted) return;
    try { mountGrapher(root); root.dataset.mounted = '1'; } catch { /* leave static */ }
  });
}
