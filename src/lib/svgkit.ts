/* =============================================================================
   svgkit — shared SVG building blocks for the per-lesson interactives.

   A superset of the helpers used in src/lib/interactives.ts (kept separate so
   the original demos keep working untouched). Every lesson interactive is a
   function `(root, params) => void` built from these primitives, so the whole
   library shares one coordinate system, one control style, and the site palette.

   Stage is a fixed 380×270 viewBox; the host <svg> uses the same viewBox and
   scales to its container. All colors are CSS-var strings so the notebook theme
   flows through. Reduced-motion safe: nothing here auto-animates.
   ============================================================================= */

export const NS = 'http://www.w3.org/2000/svg';
export const W = 380, H = 270, PAD = 30;

export const C = {
  ink: 'var(--ink)', ink2: 'var(--ink-2)', ink3: 'var(--ink-3)',
  accent: 'var(--accent)', accentInk: 'var(--accent-ink)', accentBright: 'var(--accent-bright)',
  grid: 'var(--grid)', gridM: 'var(--grid-major)',
  ok: 'var(--ok)', okWash: 'var(--ok-wash)',
  wash: 'var(--accent-wash-2)', wash1: 'var(--accent-wash)',
  paper: 'var(--paper)', paper2: 'var(--paper-2)', line: 'var(--line-strong)', raised: 'var(--raised)',
};

export interface View { xmin: number; xmax: number; ymin: number; ymax: number; }
export interface Map2 { X: (x: number) => number; Y: (y: number) => number; invX: (p: number) => number; invY: (p: number) => number; }

export function el<K extends keyof SVGElementTagNameMap>(
  tag: K, attrs: Record<string, string | number> = {}, style: Partial<CSSStyleDeclaration> = {}
): SVGElementTagNameMap[K] {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, String(attrs[k]));
  Object.assign(e.style, style);
  return e;
}

export function mapFor(v: View): Map2 {
  const sx = (W - 2 * PAD) / (v.xmax - v.xmin);
  const sy = (H - 2 * PAD) / (v.ymax - v.ymin);
  return {
    X: (x: number): number => PAD + (x - v.xmin) * sx,
    Y: (y: number): number => H - PAD - (y - v.ymin) * sy,
    invX: (p: number): number => v.xmin + (p - PAD) / sx,
    invY: (p: number): number => v.ymin + (H - PAD - p) / sy,
  };
}

export const fmt = (n: number, d = 2): string => {
  if (!isFinite(n)) return n > 0 ? '∞' : '−∞';
  const r = Math.round(n * 10 ** d) / 10 ** d;
  return Object.is(r, -0) ? '0' : String(r);
};

export function niceStep(range: number, target = 8): number {
  const raw = range / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10;
  return step * mag;
}

export function line(x1: number, y1: number, x2: number, y2: number, stroke: string, width = 2, dash = ''): SVGLineElement {
  return el('line', { x1, y1, x2, y2, ...(dash ? { 'stroke-dasharray': dash } : {}) },
    { stroke, strokeWidth: String(width), strokeLinecap: 'round' });
}
export function dot(cx: number, cy: number, r: number, fill: string, stroke = ''): SVGCircleElement {
  return el('circle', { cx, cy, r }, { fill, ...(stroke ? { stroke, strokeWidth: '1.6' } : {}) });
}
export function label(x: number, y: number, text: string, fill: string, size = 11, anchor = 'middle'): SVGTextElement {
  const t = el('text', { x, y, 'text-anchor': anchor, 'font-size': size, dir: 'ltr' }, { fill, fontFamily: 'var(--font)' });
  t.textContent = text;
  return t;
}

/** Cartesian grid + optional numbered axes. */
export function axes(svg: SVGSVGElement, m: Map2, v: View, opts: { labels?: boolean } = {}): void {
  const g = el('g');
  const stepX = niceStep(v.xmax - v.xmin);
  const stepY = niceStep(v.ymax - v.ymin);
  for (let x = Math.ceil(v.xmin / stepX) * stepX; x <= v.xmax + 1e-9; x += stepX)
    g.appendChild(line(m.X(x), m.Y(v.ymin), m.X(x), m.Y(v.ymax), C.grid, 1));
  for (let y = Math.ceil(v.ymin / stepY) * stepY; y <= v.ymax + 1e-9; y += stepY)
    g.appendChild(line(m.X(v.xmin), m.Y(y), m.X(v.xmax), m.Y(y), C.grid, 1));
  const y0in = v.ymin <= 0 && v.ymax >= 0;
  const x0in = v.xmin <= 0 && v.xmax >= 0;
  if (y0in) g.appendChild(line(m.X(v.xmin), m.Y(0), m.X(v.xmax), m.Y(0), C.gridM, 1.4));
  if (x0in) g.appendChild(line(m.X(0), m.Y(v.ymin), m.X(0), m.Y(v.ymax), C.gridM, 1.4));
  if (opts.labels) {
    const ay = y0in ? m.Y(0) : H - PAD;
    const ax = x0in ? m.X(0) : PAD;
    for (let x = Math.ceil(v.xmin / stepX) * stepX; x <= v.xmax + 1e-9; x += stepX)
      if (Math.abs(x) > 1e-9) g.appendChild(label(m.X(x), ay + 13, fmt(x, 2), C.ink3, 9));
    for (let y = Math.ceil(v.ymin / stepY) * stepY; y <= v.ymax + 1e-9; y += stepY)
      if (Math.abs(y) > 1e-9) g.appendChild(label(ax - 5, m.Y(y) + 3, fmt(y, 2), C.ink3, 9, 'end'));
  }
  svg.appendChild(g);
}

/** Sample a function into an SVG path, lifting the pen on gaps / off-screen. */
export function fnPath(f: (x: number) => number, m: Map2, v: View, samples = W): string {
  let d = '', pen = false;
  const lo = v.ymin - (v.ymax - v.ymin), hi = v.ymax + (v.ymax - v.ymin);
  for (let i = 0; i <= samples; i++) {
    const x = v.xmin + (v.xmax - v.xmin) * (i / samples);
    const y = f(x);
    if (isFinite(y) && y >= lo && y <= hi) {
      d += (pen ? 'L' : 'M') + m.X(x).toFixed(1) + ' ' + m.Y(y).toFixed(1) + ' ';
      pen = true;
    } else pen = false;
  }
  return d;
}

/** An arrow (line + head) from (x1,y1) to (x2,y2) in PIXEL space. Returns a group. */
export function arrow(x1: number, y1: number, x2: number, y2: number, color: string, width = 2.4, headLen = 8): SVGGElement {
  const g = el('g') as SVGGElement;
  g.appendChild(line(x1, y1, x2, y2, color, width));
  const ang = Math.atan2(y2 - y1, x2 - x1);
  g.appendChild(el('path', {
    d: `M${x2} ${y2} L${x2 - headLen * Math.cos(ang - 0.42)} ${y2 - headLen * Math.sin(ang - 0.42)} ` +
       `L${x2 - headLen * Math.cos(ang + 0.42)} ${y2 - headLen * Math.sin(ang + 0.42)} Z`,
  }, { fill: color }));
  return g;
}

/* --------------------------------- controls ------------------------------- */

export function parts(root: HTMLElement): { svg: SVGSVGElement; ctl: HTMLElement; out: HTMLElement } {
  return {
    svg: root.querySelector('[data-demo-svg]') as SVGSVGElement,
    ctl: root.querySelector('[data-demo-controls]') as HTMLElement,
    out: root.querySelector('[data-demo-readout]') as HTMLElement,
  };
}

export function slider(
  ctl: HTMLElement,
  o: { min: number; max: number; step: number; value: number; label: string; fmt?: (n: number) => string; on: (n: number) => void }
): HTMLInputElement {
  const wrap = document.createElement('label');
  wrap.className = 'demo__ctl';
  const row = document.createElement('div');
  row.className = 'demo__ctl-row';
  const lab = document.createElement('span'); lab.textContent = o.label;
  const val = document.createElement('span'); val.className = 'demo__ctl-val num';
  row.append(lab, val);
  const input = document.createElement('input');
  input.type = 'range';
  input.min = String(o.min); input.max = String(o.max); input.step = String(o.step); input.value = String(o.value);
  input.setAttribute('aria-label', o.label);
  const upd = (): void => { val.textContent = o.fmt ? o.fmt(+input.value) : input.value; };
  input.addEventListener('input', () => { upd(); o.on(+input.value); });
  wrap.append(row, input);
  ctl.appendChild(wrap);
  upd();
  return input;
}

export function segButton(ctl: HTMLElement, options: { key: string; label: string }[], on: (key: string) => void): void {
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

export function pushBtn(ctl: HTMLElement, text: string, on: () => void): HTMLButtonElement {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'demo__btn';
  b.textContent = text;
  b.addEventListener('click', on);
  ctl.appendChild(b);
  return b;
}

export function checkbox(ctl: HTMLElement, labelText: string, checked: boolean, on: (v: boolean) => void): void {
  const wrap = document.createElement('label');
  wrap.className = 'demo__check';
  const input = document.createElement('input');
  input.type = 'checkbox'; input.checked = checked;
  const span = document.createElement('span'); span.textContent = labelText;
  input.addEventListener('change', () => on(input.checked));
  wrap.append(input, span);
  ctl.appendChild(wrap);
}

/** A prev/next stepper with a live "k / n" caption. Calls on(i) with 0-based i. */
export function stepper(ctl: HTMLElement, count: number, on: (i: number) => void, labelFor?: (i: number) => string): { set: (i: number) => void } {
  let i = 0;
  const wrap = document.createElement('div'); wrap.className = 'demo__stepper';
  const prev = document.createElement('button'); prev.type = 'button'; prev.className = 'demo__btn'; prev.textContent = '‹ السابق';
  const cap = document.createElement('span'); cap.className = 'demo__stepper-cap num';
  const next = document.createElement('button'); next.type = 'button'; next.className = 'demo__btn'; next.textContent = 'التالي ›';
  const set = (k: number): void => {
    i = Math.max(0, Math.min(count - 1, k));
    cap.textContent = labelFor ? labelFor(i) : `${i + 1} / ${count}`;
    prev.disabled = i === 0; next.disabled = i === count - 1;
    on(i);
  };
  prev.addEventListener('click', () => set(i - 1));
  next.addEventListener('click', () => set(i + 1));
  wrap.append(prev, cap, next);
  ctl.appendChild(wrap);
  set(0);
  return { set };
}

/* A draggable point with its own grab handle (touch-safe: touch-action:none only
   on the small handle, so a stray swipe still scrolls the page). */
export interface Handle { node: SVGGElement; set: (x: number, y: number) => void; get: () => { x: number; y: number }; }
export function makeDraggable(
  svg: SVGSVGElement, m: Map2, bounds: View,
  start: { x: number; y: number }, onMove: (x: number, y: number) => void
): Handle {
  const clamp = (x: number, y: number): { x: number; y: number } => ({
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
  const place = (): void => {
    for (const c of [halo, core, hit]) { c.setAttribute('cx', String(m.X(pos.x))); c.setAttribute('cy', String(m.Y(pos.y))); }
  };
  const toXY = (e: PointerEvent): [number, number] => {
    const r = svg.getBoundingClientRect();
    return [m.invX(((e.clientX - r.left) / r.width) * W), m.invY(((e.clientY - r.top) / r.height) * H)];
  };
  let dragging = false;
  const down = (e: PointerEvent): void => {
    dragging = true; g.style.cursor = 'grabbing';
    try { (e.currentTarget as Element)?.setPointerCapture?.(e.pointerId); } catch { /* best-effort */ }
    e.preventDefault();
    const [x, y] = toXY(e); pos = clamp(x, y); place(); onMove(pos.x, pos.y);
  };
  const move = (e: PointerEvent): void => { if (!dragging) return; e.preventDefault(); const [x, y] = toXY(e); pos = clamp(x, y); place(); onMove(pos.x, pos.y); };
  const up = (): void => { dragging = false; g.style.cursor = 'grab'; };
  hit.addEventListener('pointerdown', (e) => { e.stopPropagation(); down(e); });
  svg.addEventListener('pointerdown', (e) => { if (e.pointerType === 'mouse') down(e); });
  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerup', up);
  svg.addEventListener('pointercancel', up);
  place();
  return { node: g, set: (x, y) => { pos = clamp(x, y); place(); }, get: () => pos };
}

/* ------------------------------ math helpers ------------------------------ */

export function factorial(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}
export function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  k = Math.min(k, n - k);
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}
export function arrange(n: number, p: number): number {
  if (p < 0 || p > n) return 0;
  let r = 1;
  for (let i = 0; i < p; i++) r *= n - i;
  return r;
}

/* ------------------------- pseudo-3D projection --------------------------- */
/* A light cabinet/isometric projector for the "in space" geometry lessons.
   make3D returns P(x,y,z) → [px,py] in the stage's pixel space, plus a small
   set of axis endpoints so scenes share one look. */
export function make3D(cx: number, cy: number, scale: number): (x: number, y: number, z: number) => [number, number] {
  const a = Math.PI / 7;           // depth angle
  const dz = { x: Math.cos(a) * 0.62, y: Math.sin(a) * 0.62 };
  return (x: number, y: number, z: number): [number, number] => [
    cx + (x - z * dz.x) * scale,
    cy - (y - z * dz.y) * scale,
  ];
}
