/* =============================================================================
   Interactive demo engine. One initializer per curriculum unit. Each builds a
   small SVG "explorer" with sliders / drag / clicks and a live readout.
   Pure client-side, progressive: if this never runs, the curriculum content is
   still complete. Reduced-motion safe (all motion is user-driven, no auto loops).
   All displayed values are computed live and verified against SymPy.
   ============================================================================= */

const NS = 'http://www.w3.org/2000/svg';
const W = 360, H = 258, PAD = 30;

const C = {
  ink: 'var(--ink)', accent: 'var(--accent)', accentInk: 'var(--accent-ink)',
  grid: 'var(--grid)', gridM: 'var(--grid-major)', ink2: 'var(--ink-2)', ink3: 'var(--ink-3)',
  ok: 'var(--ok)', wash: 'var(--accent-wash-2)', okWash: 'var(--ok-wash)',
  paper: 'var(--paper)', line: 'var(--line-strong)', raised: 'var(--raised)',
};

interface View { xmin: number; xmax: number; ymin: number; ymax: number; }
interface Map2 { X: (x: number) => number; Y: (y: number) => number; invX: (p: number) => number; invY: (p: number) => number; }

function el<K extends keyof SVGElementTagNameMap>(
  tag: K, attrs: Record<string, string | number> = {}, style: Partial<CSSStyleDeclaration> = {}
): SVGElementTagNameMap[K] {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, String(attrs[k]));
  Object.assign(e.style, style);
  return e;
}

function mapFor(v: View): Map2 {
  const sx = (W - 2 * PAD) / (v.xmax - v.xmin);
  const sy = (H - 2 * PAD) / (v.ymax - v.ymin);
  return {
    X: (x) => PAD + (x - v.xmin) * sx,
    Y: (y) => H - PAD - (y - v.ymin) * sy,
    invX: (p) => v.xmin + (p - PAD) / sx,
    invY: (p) => v.ymin + (H - PAD - p) / sy,
  };
}

function axes(svg: SVGSVGElement, m: Map2, v: View) {
  const g = el('g');
  for (let x = Math.ceil(v.xmin); x <= Math.floor(v.xmax); x++)
    g.appendChild(el('line', { x1: m.X(x), y1: m.Y(v.ymin), x2: m.X(x), y2: m.Y(v.ymax) }, { stroke: C.grid, strokeWidth: '1' }));
  for (let y = Math.ceil(v.ymin); y <= Math.floor(v.ymax); y++)
    g.appendChild(el('line', { x1: m.X(v.xmin), y1: m.Y(y), x2: m.X(v.xmax), y2: m.Y(y) }, { stroke: C.grid, strokeWidth: '1' }));
  if (v.ymin <= 0 && v.ymax >= 0)
    g.appendChild(el('line', { x1: m.X(v.xmin), y1: m.Y(0), x2: m.X(v.xmax), y2: m.Y(0) }, { stroke: C.gridM, strokeWidth: '1.4' }));
  if (v.xmin <= 0 && v.xmax >= 0)
    g.appendChild(el('line', { x1: m.X(0), y1: m.Y(v.ymin), x2: m.X(0), y2: m.Y(v.ymax) }, { stroke: C.gridM, strokeWidth: '1.4' }));
  svg.appendChild(g);
}

function fnPath(f: (x: number) => number, m: Map2, v: View, samples = 160): string {
  let d = '', pen = false;
  for (let i = 0; i <= samples; i++) {
    const x = v.xmin + (v.xmax - v.xmin) * (i / samples);
    const y = f(x);
    if (isFinite(y) && y >= v.ymin - 3 && y <= v.ymax + 3) {
      d += (pen ? 'L' : 'M') + m.X(x).toFixed(1) + ' ' + m.Y(y).toFixed(1) + ' ';
      pen = true;
    } else pen = false;
  }
  return d;
}

function line(x1: number, y1: number, x2: number, y2: number, stroke: string, width = 2, dash = '') {
  return el('line', { x1, y1, x2, y2, ...(dash ? { 'stroke-dasharray': dash } : {}) }, { stroke, strokeWidth: String(width), strokeLinecap: 'round' });
}
function dot(cx: number, cy: number, r: number, fill: string) {
  return el('circle', { cx, cy, r }, { fill });
}
function label(x: number, y: number, text: string, fill: string, size = 11, anchor = 'middle') {
  const t = el('text', { x, y, 'text-anchor': anchor, 'font-size': size, dir: 'ltr' }, { fill, fontFamily: 'var(--font)' });
  t.textContent = text;
  return t;
}

function slider(
  ctl: HTMLElement,
  o: { min: number; max: number; step: number; value: number; label: string; fmt?: (n: number) => string; on: (n: number) => void }
): HTMLInputElement {
  const wrap = document.createElement('label');
  wrap.className = 'demo__ctl';
  const row = document.createElement('div');
  row.className = 'demo__ctl-row';
  const lab = document.createElement('span');
  lab.textContent = o.label;
  const val = document.createElement('span');
  val.className = 'demo__ctl-val num';
  row.append(lab, val);
  const input = document.createElement('input');
  input.type = 'range';
  input.min = String(o.min); input.max = String(o.max); input.step = String(o.step); input.value = String(o.value);
  input.setAttribute('aria-label', o.label);
  const upd = () => { val.textContent = o.fmt ? o.fmt(+input.value) : input.value; };
  input.addEventListener('input', () => { upd(); o.on(+input.value); });
  wrap.append(row, input);
  ctl.appendChild(wrap);
  upd();
  return input;
}

function segButton(ctl: HTMLElement, options: { key: string; label: string }[], on: (key: string) => void): void {
  const wrap = document.createElement('div');
  wrap.className = 'demo__seg';
  wrap.setAttribute('role', 'tablist');
  options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = opt.label;
    b.className = 'demo__seg-btn' + (i === 0 ? ' is-on' : '');
    b.setAttribute('role', 'tab');
    b.addEventListener('click', () => {
      wrap.querySelectorAll('.demo__seg-btn').forEach((x) => x.classList.remove('is-on'));
      b.classList.add('is-on');
      on(opt.key);
    });
    wrap.appendChild(b);
  });
  ctl.appendChild(wrap);
}

function pushBtn(ctl: HTMLElement, text: string, on: () => void): void {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'demo__btn';
  b.textContent = text;
  b.addEventListener('click', on);
  ctl.appendChild(b);
}

/* A draggable point with its own grab handle. Mobile-safe: `touch-action:none`
   lives ONLY on the small handle, so a swipe that lands elsewhere on the plane
   still scrolls the page. Touch grabs the handle; a mouse can grab anywhere. */
interface Handle { node: SVGGElement; set: (x: number, y: number) => void; get: () => { x: number; y: number }; }
function makeDraggable(
  svg: SVGSVGElement, m: Map2, bounds: View,
  start: { x: number; y: number }, onMove: (x: number, y: number) => void
): Handle {
  const clamp = (x: number, y: number) => ({
    x: Math.max(bounds.xmin, Math.min(bounds.xmax, x)),
    y: Math.max(bounds.ymin, Math.min(bounds.ymax, y)),
  });
  let pos = clamp(start.x, start.y);
  const g = el('g', {}, { cursor: 'grab' }) as SVGGElement;
  const halo = el('circle', { r: 12 }, { fill: 'none', stroke: C.wash, strokeWidth: '2' });
  const core = el('circle', { r: 5 }, { fill: C.accent, stroke: C.paper, strokeWidth: '1.6' });
  const hit = el('circle', { r: 22 }, { fill: 'transparent' });
  hit.style.touchAction = 'none';
  g.append(halo, core, hit);
  const place = () => {
    for (const c of [halo, core, hit]) { c.setAttribute('cx', String(m.X(pos.x))); c.setAttribute('cy', String(m.Y(pos.y))); }
  };
  const toXY = (e: PointerEvent): [number, number] => {
    const r = svg.getBoundingClientRect();
    return [m.invX(((e.clientX - r.left) / r.width) * W), m.invY(((e.clientY - r.top) / r.height) * H)];
  };
  let dragging = false;
  const down = (e: PointerEvent) => {
    dragging = true; g.style.cursor = 'grabbing';
    try { (e.currentTarget as Element)?.setPointerCapture?.(e.pointerId); } catch { /* capture is best-effort */ }
    e.preventDefault();
    const [x, y] = toXY(e); pos = clamp(x, y); place(); onMove(pos.x, pos.y);
  };
  const move = (e: PointerEvent) => { if (!dragging) return; e.preventDefault(); const [x, y] = toXY(e); pos = clamp(x, y); place(); onMove(pos.x, pos.y); };
  const up = () => { dragging = false; g.style.cursor = 'grab'; };
  hit.addEventListener('pointerdown', (e) => { e.stopPropagation(); down(e); });
  svg.addEventListener('pointerdown', (e) => { if (e.pointerType === 'mouse') down(e); });
  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerup', up);
  svg.addEventListener('pointercancel', up);
  place();
  return { node: g, set: (x, y) => { pos = clamp(x, y); place(); }, get: () => pos };
}

function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  k = Math.min(k, n - k);
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}
const fmt = (n: number, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toString();

function parts(root: HTMLElement) {
  return {
    svg: root.querySelector('[data-demo-svg]') as SVGSVGElement,
    ctl: root.querySelector('[data-demo-controls]') as HTMLElement,
    out: root.querySelector('[data-demo-readout]') as HTMLElement,
  };
}

/* ============================== DEMOS ==================================== */

// U1 · Sequences (arithmetic / geometric)
function sequences(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -0.5, xmax: 9.5, ymin: -1, ymax: 9 };
  const m = mapFor(v);
  let type = 'arith', param = 1;
  const layer = el('g');
  const draw = () => {
    layer.replaceChildren();
    const u = (n: number) => (type === 'arith' ? 1 + n * param : 1 * Math.pow(param, n));
    let d = '';
    for (let n = 0; n <= 9; n++) {
      const y = u(n);
      if (y >= v.ymin && y <= v.ymax) {
        d += (d ? 'L' : 'M') + m.X(n) + ' ' + m.Y(y) + ' ';
        layer.appendChild(dot(m.X(n), m.Y(y), 3.6, C.accent));
      }
    }
    layer.insertBefore(el('path', { d }, { fill: 'none', stroke: C.ink, strokeWidth: '1.6', strokeDasharray: '2 4' }), layer.firstChild);
    if (type === 'arith') out.textContent = `متتالية حسابية: uₙ = 1 + n·(${fmt(param, 1)}). ${param > 0 ? 'متزايدة' : param < 0 ? 'متناقصة' : 'ثابتة'}.`;
    else out.textContent = `متتالية هندسية: uₙ = (${fmt(param, 2)})ⁿ. ${Math.abs(param) < 1 ? 'متقاربة نحو 0.' : param > 1 ? 'متباعدة نحو +∞.' : 'ثابتة.'}`;
  };
  axes(svg, m, v);
  svg.appendChild(layer);
  segButton(ctl, [{ key: 'arith', label: 'حسابية' }, { key: 'geo', label: 'هندسية' }], (k) => {
    type = k; param = k === 'arith' ? 1 : 0.75; sl.value = String(param);
    sl.min = k === 'arith' ? '-1.5' : '0.25'; sl.max = k === 'arith' ? '1.5' : '1.75'; sl.step = '0.25';
    sl.dispatchEvent(new Event('input'));
  });
  const sl = slider(ctl, { min: -1.5, max: 1.5, step: 0.25, value: 1, label: 'الأساس / الفرق', fmt: (n) => fmt(n, 2), on: (n) => { param = n; draw(); } });
  draw();
}

// U2 · Limits & asymptote
function limits(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -3, xmax: 12, ymin: -4, ymax: 8 };
  const m = mapFor(v);
  const f = (x: number) => (2 * x + 1) / (x - 1);
  axes(svg, m, v);
  svg.appendChild(line(m.X(v.xmin), m.Y(2), m.X(v.xmax), m.Y(2), C.ink3, 1.4, '4 4')); // y=2
  svg.appendChild(line(m.X(1), m.Y(v.ymin), m.X(1), m.Y(v.ymax), C.ink3, 1.2, '3 4')); // x=1
  svg.appendChild(el('path', { d: fnPath(f, m, v) }, { fill: 'none', stroke: C.ink, strokeWidth: '2.4' }));
  svg.appendChild(label(m.X(v.xmax) - 14, m.Y(2) - 6, 'y = 2', C.accentInk, 11, 'end'));
  const P = dot(0, 0, 5, C.accent);
  P.classList.add('glide');
  svg.appendChild(P);
  const upd = (x: number) => {
    const y = f(x); P.setAttribute('cx', String(m.X(x))); P.setAttribute('cy', String(m.Y(y)));
    out.textContent = `عند x = ${fmt(x, 1)} : f(x) = ${fmt(y, 3)} ، والفرق عن 2 يساوي ${fmt(Math.abs(y - 2), 3)}. كلّما كبر x اقترب f(x) من 2.`;
  };
  slider(ctl, { min: 1.6, max: 12, step: 0.2, value: 3, label: 'x نحو اللانهاية', fmt: (n) => fmt(n, 1), on: upd });
  upd(3);
}

// U3 · Tangent explorer
function tangent(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -3, xmax: 3, ymin: -3, ymax: 6 };
  const m = mapFor(v);
  const f = (x: number) => x * x - 2;
  axes(svg, m, v);
  svg.appendChild(el('path', { d: fnPath(f, m, v) }, { fill: 'none', stroke: C.ink, strokeWidth: '2.4' }));
  const tan = line(0, 0, 0, 0, C.accent, 2.4);
  const P = dot(0, 0, 5, C.accent);
  tan.classList.add('glide'); P.classList.add('glide');
  svg.append(tan, P);
  const upd = (a: number) => {
    const slope = 2 * a, fa = f(a);
    const y0 = slope * (v.xmin - a) + fa, y1 = slope * (v.xmax - a) + fa;
    tan.setAttribute('x1', String(m.X(v.xmin))); tan.setAttribute('y1', String(m.Y(y0)));
    tan.setAttribute('x2', String(m.X(v.xmax))); tan.setAttribute('y2', String(m.Y(y1)));
    P.setAttribute('cx', String(m.X(a))); P.setAttribute('cy', String(m.Y(fa)));
    out.textContent = `f(x) = x² − 2 ، وعند x = ${fmt(a, 1)} الميل f′(x) = 2x = ${fmt(slope, 1)}. حرّك النقطة وراقب كيف يتغيّر الميل.`;
  };
  slider(ctl, { min: -3, max: 3, step: 0.1, value: 1, label: 'النقطة x', fmt: (n) => fmt(n, 1), on: upd });
  upd(1);
}

// U4 · Sequence limit (convergence)
function seqlimit(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -0.5, xmax: 13, ymin: -0.5, ymax: 4.5 };
  const m = mapFor(v);
  const L = 2;
  const layer = el('g');
  axes(svg, m, v);
  svg.appendChild(line(m.X(v.xmin), m.Y(L), m.X(v.xmax), m.Y(L), C.accentInk, 1.4, '4 4'));
  svg.appendChild(label(m.X(v.xmax) - 8, m.Y(L) - 6, 'L = 2', C.accentInk, 11, 'end'));
  svg.appendChild(layer);
  const draw = (r: number) => {
    layer.replaceChildren();
    for (let n = 0; n <= 12; n++) {
      const y = L + Math.pow(r, n) * 2;
      if (y >= v.ymin && y <= v.ymax) layer.appendChild(dot(m.X(n), m.Y(y), 3.4, C.ink));
    }
    out.textContent = `uₙ = 2 + 2·(${fmt(r, 1)})ⁿ. بما أنّ |${fmt(r, 1)}| < 1 فإنّ (${fmt(r, 1)})ⁿ ← 0، إذن uₙ ← 2.`;
  };
  slider(ctl, { min: -0.9, max: 0.9, step: 0.1, value: 0.6, label: 'الأساس r', fmt: (n) => fmt(n, 1), on: draw });
  draw(0.6);
}

// U5 · Logarithm: product to sum
function logarithm(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: 0, xmax: 9, ymin: -1.5, ymax: 2.6 };
  const m = mapFor(v);
  axes(svg, m, v);
  svg.appendChild(el('path', { d: fnPath((x) => Math.log(x), m, v) }, { fill: 'none', stroke: C.ink, strokeWidth: '2.2' }));
  const layer = el('g');
  svg.appendChild(layer);
  let a = 2, b = 3;
  const draw = () => {
    layer.replaceChildren();
    const mark = (xv: number, col: string) => {
      const y = Math.log(xv);
      if (xv <= v.xmax && y >= v.ymin) {
        layer.appendChild(line(m.X(xv), m.Y(0), m.X(xv), m.Y(y), col, 1.4, '2 3'));
        layer.appendChild(dot(m.X(xv), m.Y(y), 3.6, col));
      }
    };
    mark(a, C.ink); mark(b, C.ink); mark(a * b, C.accent);
    out.textContent = `ln(${a}) + ln(${b}) = ${fmt(Math.log(a) + Math.log(b), 3)} = ln(${a}×${b}) = ln(${a * b}). الجداء صار جمعاً.`;
  };
  slider(ctl, { min: 1, max: 3, step: 0.5, value: 2, label: 'a', fmt: (n) => fmt(n, 1), on: (n) => { a = n; draw(); } });
  slider(ctl, { min: 1, max: 3, step: 0.5, value: 3, label: 'b', fmt: (n) => fmt(n, 1), on: (n) => { b = n; draw(); } });
  draw();
}

// U6 · Exponential: slope equals value
function exponential(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -2.2, xmax: 2.2, ymin: -0.6, ymax: 6 };
  const m = mapFor(v);
  const f = (x: number) => Math.exp(x);
  axes(svg, m, v);
  svg.appendChild(el('path', { d: fnPath(f, m, v) }, { fill: 'none', stroke: C.ink, strokeWidth: '2.4' }));
  const tan = line(0, 0, 0, 0, C.accent, 2.2);
  const P = dot(0, 0, 5, C.accent);
  tan.classList.add('glide'); P.classList.add('glide');
  svg.append(tan, P);
  const upd = (x: number) => {
    const val = f(x), slope = val;
    const y0 = slope * (v.xmin - x) + val, y1 = slope * (v.xmax - x) + val;
    tan.setAttribute('x1', String(m.X(v.xmin))); tan.setAttribute('y1', String(m.Y(y0)));
    tan.setAttribute('x2', String(m.X(v.xmax))); tan.setAttribute('y2', String(m.Y(y1)));
    P.setAttribute('cx', String(m.X(x))); P.setAttribute('cy', String(m.Y(val)));
    out.textContent = `عند x = ${fmt(x, 1)} : القيمة eˣ = ${fmt(val, 2)} والميل f′(x) = eˣ = ${fmt(slope, 2)}. القيمة = الميل دائماً.`;
  };
  slider(ctl, { min: -2, max: 2, step: 0.1, value: 0.5, label: 'x', fmt: (n) => fmt(n, 1), on: upd });
  upd(0.5);
}

// U7 · Integration: Riemann sum
function integration(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -0.4, xmax: 3.3, ymin: -0.6, ymax: 9.6 };
  const m = mapFor(v);
  const f = (x: number) => x * x;
  const a = 0, b = 3, exact = 9;
  axes(svg, m, v);
  const bars = el('g');
  svg.appendChild(bars);
  svg.appendChild(el('path', { d: fnPath(f, m, v) }, { fill: 'none', stroke: C.ink, strokeWidth: '2.4' }));
  const draw = (n: number) => {
    bars.replaceChildren();
    const dx = (b - a) / n; let sum = 0;
    for (let i = 0; i < n; i++) {
      const xm = a + (i + 0.5) * dx, hy = f(xm); sum += hy * dx;
      const x0 = m.X(a + i * dx), x1 = m.X(a + (i + 1) * dx);
      bars.appendChild(el('rect', { x: x0 + 0.5, y: m.Y(hy), width: Math.max(0, x1 - x0 - 1), height: m.Y(0) - m.Y(hy) }, { fill: C.wash, stroke: C.accent, strokeWidth: '0.8' }));
    }
    out.textContent = `عدد المستطيلات n = ${n} ، المجموع ≈ ${fmt(sum, 3)}. القيمة الدقيقة للتكامل = ${exact}. كلّما زاد n اقترب المجموع من ${exact}.`;
  };
  slider(ctl, { min: 1, max: 40, step: 1, value: 6, label: 'عدد المستطيلات', on: (n) => draw(n) });
  draw(6);
}

// B2 U1 · Vector addition (parallelogram)
function vecadd(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -1, xmax: 6, ymin: -1, ymax: 6 };
  const m = mapFor(v);
  const u = { x: 3, y: 1 };
  let vv = { x: 1, y: 3 };
  axes(svg, m, v);
  const layer = el('g');
  svg.appendChild(layer);
  const arrow = (x: number, y: number, col: string, wdt: number) => {
    const ln = line(m.X(0), m.Y(0), m.X(x), m.Y(y), col, wdt);
    const ang = Math.atan2(m.Y(y) - m.Y(0), m.X(x) - m.X(0));
    const hx = m.X(x), hy = m.Y(y), s = 7;
    const head = el('path', { d: `M${hx} ${hy} L${hx - s * Math.cos(ang - 0.4)} ${hy - s * Math.sin(ang - 0.4)} L${hx - s * Math.cos(ang + 0.4)} ${hy - s * Math.sin(ang + 0.4)} Z` }, { fill: col });
    return [ln, head];
  };
  const draw = () => {
    layer.replaceChildren();
    const w = { x: u.x + vv.x, y: u.y + vv.y };
    layer.appendChild(line(m.X(u.x), m.Y(u.y), m.X(w.x), m.Y(w.y), C.line, 1.2, '3 4'));
    layer.appendChild(line(m.X(vv.x), m.Y(vv.y), m.X(w.x), m.Y(w.y), C.line, 1.2, '3 4'));
    arrow(u.x, u.y, C.ink, 2.4).forEach((e) => layer.appendChild(e));
    arrow(vv.x, vv.y, C.ink, 2.4).forEach((e) => layer.appendChild(e));
    arrow(w.x, w.y, C.accent, 2.8).forEach((e) => layer.appendChild(e));
    out.textContent = `u = (3, 1) ، v = (${fmt(vv.x, 1)}, ${fmt(vv.y, 1)}) ، ومجموعهما u + v = (${fmt(w.x, 1)}, ${fmt(w.y, 1)}) هو قطر متوازي الأضلاع.`;
  };
  const handle = makeDraggable(svg, m, v, vv, (x, y) => { vv = { x, y }; draw(); });
  svg.appendChild(handle.node);
  const hint = document.createElement('p');
  hint.className = 'demo__hint';
  hint.textContent = 'اسحب المقبض الأحمر لتحريك الشعاع v.';
  ctl.appendChild(hint);
  draw();
}

// B2 U2 · Dot product & perpendicularity
function dotproduct(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
  const m = mapFor(v);
  const u = { x: 3, y: 1 };
  let vv = { x: 1, y: 2 };
  axes(svg, m, v);
  const layer = el('g');
  svg.appendChild(layer);
  const draw = () => {
    layer.replaceChildren();
    layer.appendChild(line(m.X(0), m.Y(0), m.X(u.x), m.Y(u.y), C.ink, 2.6));
    layer.appendChild(line(m.X(0), m.Y(0), m.X(vv.x), m.Y(vv.y), C.accent, 2.6));
    layer.appendChild(dot(m.X(u.x), m.Y(u.y), 3.4, C.ink));
    const d = u.x * vv.x + u.y * vv.y;
    const ang = (Math.acos(d / (Math.hypot(u.x, u.y) * Math.hypot(vv.x, vv.y) || 1)) * 180) / Math.PI;
    const perp = Math.abs(d) < 0.2;
    out.textContent = `u·v = 3×${fmt(vv.x, 1)} + 1×${fmt(vv.y, 1)} = ${fmt(d, 2)} ، الزاوية ≈ ${fmt(ang, 0)}°.` + (perp ? ' الشعاعان متعامدان (الجداء ≈ 0).' : '');
    out.style.color = perp ? C.ok : '';
  };
  const handle = makeDraggable(svg, m, v, vv, (x, y) => { vv = { x, y }; draw(); });
  svg.appendChild(handle.node);
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'اسحب المقبض الأحمر حتى يصبح عمودياً على الأسود.'; ctl.appendChild(hint);
  draw();
}

// B2 U3 · Parametric line
function linesplanes(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
  const m = mapFor(v);
  const A = { x: -3, y: -2 }, u = { x: 2, y: 1 };
  axes(svg, m, v);
  // full line for t in [-5,5]
  svg.appendChild(line(m.X(A.x + u.x * -5), m.Y(A.y + u.y * -5), m.X(A.x + u.x * 5), m.Y(A.y + u.y * 5), C.ink3, 1.4));
  svg.appendChild(dot(m.X(A.x), m.Y(A.y), 3.6, C.ink));
  svg.appendChild(label(m.X(A.x) - 8, m.Y(A.y) + 14, 'A', C.ink2, 11));
  const M = dot(0, 0, 5, C.accent);
  M.classList.add('glide');
  svg.appendChild(M);
  const upd = (t: number) => {
    const x = A.x + u.x * t, y = A.y + u.y * t;
    M.setAttribute('cx', String(m.X(x))); M.setAttribute('cy', String(m.Y(y)));
    out.textContent = `M = A + t·u : x = −3 + 2t = ${fmt(x, 1)} ، y = −2 + t = ${fmt(y, 1)} (عند t = ${fmt(t, 1)}).`;
  };
  slider(ctl, { min: -4, max: 4, step: 0.1, value: 1.5, label: 'الوسيط t', fmt: (n) => fmt(n, 1), on: upd });
  upd(1.5);
}

// B2 U4 · Complex plane
function complex(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
  const m = mapFor(v);
  let z = { x: 2, y: 2 };
  axes(svg, m, v);
  svg.appendChild(label(m.X(v.xmax) - 4, m.Y(0) - 6, 'Re', C.ink3, 10, 'end'));
  svg.appendChild(label(m.X(0) + 14, m.Y(v.ymax) + 12, 'Im', C.ink3, 10, 'middle'));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = () => {
    layer.replaceChildren();
    const r = Math.hypot(z.x, z.y);
    layer.appendChild(el('circle', { cx: m.X(0), cy: m.Y(0), r: r * (m.X(1) - m.X(0)) }, { fill: 'none', stroke: C.grid, strokeWidth: '1' }));
    layer.appendChild(line(m.X(0), m.Y(0), m.X(z.x), m.Y(z.y), C.accent, 2.6));
    layer.appendChild(dot(m.X(z.x), m.Y(-z.y), 3.6, C.ink3)); // conjugate
    const th = (Math.atan2(z.y, z.x) * 180) / Math.PI;
    out.textContent = `z = ${fmt(z.x, 1)} ${z.y >= 0 ? '+' : '−'} ${fmt(Math.abs(z.y), 1)}i ، |z| = ${fmt(r, 2)} ، arg(z) ≈ ${fmt(th, 0)}°. النقطة الرمادية هي المرافق z̄.`;
  };
  const handle = makeDraggable(svg, m, v, z, (x, y) => { z = { x, y }; draw(); });
  svg.appendChild(handle.node);
  pushBtn(ctl, 'اضرب بـ i (دوران ٩٠°)', () => { z = { x: -z.y, y: z.x }; handle.set(z.x, z.y); draw(); });
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'اسحب المقبض، أو اضرب بـ i لتدور ٩٠°.'; ctl.appendChild(hint);
  draw();
}

// B2 U5 · Rotation about a centre
function complexgeom(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
  const m = mapFor(v);
  const w = { x: 0.5, y: 0 }, z = { x: 3, y: 0.5 };
  axes(svg, m, v);
  svg.appendChild(dot(m.X(w.x), m.Y(w.y), 4, C.ink));
  svg.appendChild(label(m.X(w.x), m.Y(w.y) + 16, 'ω', C.ink2, 12));
  svg.appendChild(dot(m.X(z.x), m.Y(z.y), 3.6, C.ink3));
  const arc = el('path', { d: '' }, { fill: 'none', stroke: C.grid, strokeWidth: '1.2' });
  const rad = line(0, 0, 0, 0, C.line, 1.2, '3 3');
  const Zp = dot(0, 0, 5, C.accent);
  rad.classList.add('glide'); Zp.classList.add('glide');
  svg.append(arc, rad, Zp);
  const upd = (deg: number) => {
    const t = (deg * Math.PI) / 180;
    const dx = z.x - w.x, dy = z.y - w.y;
    const x = w.x + dx * Math.cos(t) - dy * Math.sin(t);
    const y = w.y + dx * Math.sin(t) + dy * Math.cos(t);
    Zp.setAttribute('cx', String(m.X(x))); Zp.setAttribute('cy', String(m.Y(y)));
    rad.setAttribute('x1', String(m.X(w.x))); rad.setAttribute('y1', String(m.Y(w.y)));
    rad.setAttribute('x2', String(m.X(x))); rad.setAttribute('y2', String(m.Y(y)));
    out.textContent = `z′ = ω + e^{iθ}(z − ω) ، θ = ${deg}°. الدوران يحافظ على البُعد عن المركز ω.`;
  };
  slider(ctl, { min: 0, max: 360, step: 5, value: 90, label: 'زاوية الدوران θ°', on: upd });
  upd(90);
}

// B2 U6 · Pascal's triangle
function combinatorics(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  const rows = 7, cell = 40, top = 18;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  const layer = el('g');
  svg.appendChild(layer);
  const cx = (n: number, k: number) => W / 2 + (k - n / 2) * cell;
  const cy = (n: number) => top + n * 32;
  const cells: SVGGElement[] = [];
  const paint = (sel?: { n: number; k: number }) => {
    layer.replaceChildren();
    for (let n = 0; n < rows; n++) for (let k = 0; k <= n; k++) {
      const isSel = sel && sel.n === n && sel.k === k;
      const parents = sel && sel.n - 1 === n && (k === sel.k - 1 || k === sel.k);
      const g = el('g') as SVGGElement;
      g.style.cursor = 'pointer';
      const col = isSel ? C.accent : parents ? C.ok : C.ink;
      const c = el('circle', { cx: cx(n, k), cy: cy(n), r: 13 }, { fill: isSel ? C.wash : parents ? C.okWash : C.raised, stroke: col, strokeWidth: isSel || parents ? '1.6' : '1' });
      const t = label(cx(n, k), cy(n) + 4, String(binom(n, k)), col, 11);
      g.append(c, t);
      g.addEventListener('click', () => paint({ n, k }));
      layer.appendChild(g);
      cells.push(g);
    }
    if (sel && sel.n >= 1 && sel.k >= 1 && sel.k <= sel.n - 1)
      out.textContent = `C(${sel.n},${sel.k}) = C(${sel.n - 1},${sel.k - 1}) + C(${sel.n - 1},${sel.k}) = ${binom(sel.n - 1, sel.k - 1)} + ${binom(sel.n - 1, sel.k)} = ${binom(sel.n, sel.k)} (قاعدة باسكال).`;
    else if (sel) out.textContent = `C(${sel.n},${sel.k}) = ${binom(sel.n, sel.k)}. طرف المثلّث يساوي 1 دائماً.`;
    else out.textContent = 'انقر أيّ خلية لترى كيف تُبنى من الخليتين فوقها (قاعدة باسكال).';
  };
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'مثلّث باسكال: كل عدد هو مجموع العددين فوقه.'; ctl.appendChild(hint);
  paint({ n: 4, k: 2 });
}

// B2 U7 · Binomial distribution
function probability(root: HTMLElement) {
  const { svg, ctl, out } = parts(root);
  let n = 10, p = 0.4;
  const layer = el('g');
  svg.appendChild(layer);
  const baseY = H - PAD;
  const draw = () => {
    layer.replaceChildren();
    const probs: number[] = [];
    let maxp = 0;
    for (let k = 0; k <= n; k++) { const pr = binom(n, k) * p ** k * (1 - p) ** (n - k); probs.push(pr); maxp = Math.max(maxp, pr); }
    const bw = (W - 2 * PAD) / (n + 1);
    layer.appendChild(line(PAD, baseY, W - PAD, baseY, C.gridM, 1.4));
    for (let k = 0; k <= n; k++) {
      const hgt = (probs[k] / (maxp || 1)) * (H - 2 * PAD - 10);
      layer.appendChild(el('rect', { x: PAD + k * bw + 1, y: baseY - hgt, width: Math.max(1, bw - 2), height: hgt }, { fill: C.wash, stroke: C.accent, strokeWidth: '0.8' }));
    }
    const ex = n * p;
    const exX = PAD + (ex + 0.5) * bw;
    layer.appendChild(line(exX, PAD - 4, exX, baseY, C.ink, 1.4, '3 3'));
    layer.appendChild(label(exX, PAD - 6, 'E(X)', C.ink, 10));
    out.textContent = `توزيع حدّاني: n = ${n} ، p = ${fmt(p, 2)}. الأمل E(X) = np = ${fmt(ex, 2)} ، التباين V(X) = np(1−p) = ${fmt(ex * (1 - p), 2)}.`;
  };
  slider(ctl, { min: 1, max: 15, step: 1, value: 10, label: 'عدد التجارب n', on: (x) => { n = x; draw(); } });
  slider(ctl, { min: 0.05, max: 0.95, step: 0.05, value: 0.4, label: 'احتمال النجاح p', fmt: (x) => fmt(x, 2), on: (x) => { p = x; draw(); } });
  draw();
}

const DEMOS: Record<string, (root: HTMLElement) => void> = {
  sequences, limits, tangent, seqlimit, logarithm, exponential, integration,
  vecadd, dotproduct, linesplanes, complex, complexgeom, combinatorics, probability,
};

export function initInteractives(): void {
  document.querySelectorAll<HTMLElement>('[data-demo]').forEach((elm) => {
    if (elm.dataset.mounted) return;
    const fn = DEMOS[elm.dataset.demo || ''];
    if (fn) { try { fn(elm); elm.dataset.mounted = '1'; } catch { /* keep static */ } }
  });
}
