/* =============================================================================
   complex.ts — interactive SVG widgets for the complex-numbers unit (Arabic/RTL).

   Every widget lives on the complex plane (المستوى العقدي): a fixed view
   [-4,4]×[-4,4], the grid drawn once via axes(), and a redraw layer swapped
   with replaceChildren(). Re/Im axis labels are placed once. Controls mount into
   `ctl`; the live Arabic readout goes to `out.textContent`. All drawing is in
   PIXEL coordinates through the Map2 helpers, and numbers pass through fmt().
   ============================================================================= */

import type { View, Map2 } from '@/lib/svgkit';
import {
  C, el, mapFor, fmt, line, dot, label, axes, arrow, parts, slider, segButton, makeDraggable,
} from '@/lib/svgkit';

const V: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };

/** Draw the shared plane (grid + Re/Im labels) and return its Map2. */
const plane = (svg: SVGSVGElement): Map2 => {
  const m: Map2 = mapFor(V);
  axes(svg, m, V);
  svg.appendChild(label(m.X(3.6), m.Y(-0.3), 'Re', C.ink3, 11));
  svg.appendChild(label(m.X(0.4), m.Y(3.7), 'Im', C.ink3, 11));
  return m;
};

/** SVG arc path between two angles (radians) on a circle of pixel radius R at (cx,cy). */
const arcPath = (cx: number, cy: number, R: number, a0: number, a1: number): string => {
  const large = Math.abs(a1 - a0) > Math.PI ? 1 : 0;
  const sweep = a1 > a0 ? 0 : 1; // screen-Y is flipped, so CCW math angle sweeps "0"
  return `M ${cx + R * Math.cos(-a0)} ${cy + R * Math.sin(-a0)} ` +
    `A ${R} ${R} 0 ${large} ${sweep} ${cx + R * Math.cos(-a1)} ${cy + R * Math.sin(-a1)}`;
};

/* 1) cx-algebraic — drag z, read the algebraic form a + i·b. */
const cxAlgebraic = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const m = plane(svg);
  const layer = el('g'); svg.appendChild(layer);
  const draw = (a: number, b: number): void => {
    const g = el('g');
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(a), m.Y(b), C.accent));
    g.appendChild(dot(m.X(a), m.Y(b), 4, C.accent, C.paper));
    layer.replaceChildren(g);
    out.textContent = `z = a + i·b = ${fmt(a)} + i·(${fmt(b)}) ، a=Re(z)=${fmt(a)}، b=Im(z)=${fmt(b)}`;
  };
  svg.appendChild(makeDraggable(svg, m, V, { x: 2, y: 1 }, draw).node);
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'اسحب النقطة';
  ctl.appendChild(hint);
  draw(2, 1);
};

/* 2) cx-conjugate — z and its conjugate z̄ = a − ib, mirrored over the real axis. */
const cxConjugate = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const m = plane(svg);
  const layer = el('g'); svg.appendChild(layer);
  const draw = (a: number, b: number): void => {
    const g = el('g');
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(a), m.Y(b), C.accent));
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(a), m.Y(-b), C.ink3));
    g.appendChild(line(m.X(a), m.Y(b), m.X(a), m.Y(-b), C.ink3, 1.4, '4 3'));
    g.appendChild(dot(m.X(a), m.Y(b), 4, C.accent, C.paper));
    g.appendChild(dot(m.X(a), m.Y(-b), 4, C.ink3, C.paper));
    layer.replaceChildren(g);
    out.textContent =
      `z = a+ib = ${fmt(a)}+i·(${fmt(b)}) ، ومرافقه z̄ = a−ib = ${fmt(a)}−i·(${fmt(b)}) (انعكاس حول المحور الحقيقي)`;
  };
  svg.appendChild(makeDraggable(svg, m, V, { x: 2, y: 1.5 }, draw).node);
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'اسحب النقطة';
  ctl.appendChild(hint);
  draw(2, 1.5);
};

/* 3) cx-modarg — modulus (circle radius) and argument (angle from +Re axis). */
const cxModArg = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const m = plane(svg);
  const layer = el('g'); svg.appendChild(layer);
  const draw = (a: number, b: number): void => {
    const g = el('g');
    const r = Math.hypot(a, b), th = Math.atan2(b, a);
    g.appendChild(el('circle', { cx: m.X(0), cy: m.Y(0), r: m.X(r) - m.X(0) }, { fill: 'none', stroke: C.grid, strokeWidth: '1.4' }));
    g.appendChild(el('path', { d: arcPath(m.X(0), m.Y(0), 26, 0, th) }, { fill: 'none', stroke: C.accentBright, strokeWidth: '2' }));
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(a), m.Y(b), C.accent));
    g.appendChild(dot(m.X(a), m.Y(b), 4, C.accent, C.paper));
    layer.replaceChildren(g);
    const deg = th * 180 / Math.PI;
    out.textContent =
      `|z| = √(a²+b²) = ${fmt(r)} ، arg(z) ≈ ${fmt(deg, 1)}° ، فالشكل المثلّثي z = r(cosθ + i·sinθ)`;
  };
  svg.appendChild(makeDraggable(svg, m, V, { x: 2, y: 2 }, draw).node);
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'اسحب النقطة';
  ctl.appendChild(hint);
  draw(2, 2);
};

/* 4) cx-demoivre — de Moivre: zⁿ has modulus rⁿ and argument n·θ. */
const cxDeMoivre = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const m = plane(svg);
  const r = 1.2, th0 = 30 * Math.PI / 180;
  const zx = r * Math.cos(th0), zy = r * Math.sin(th0);
  const layer = el('g'); svg.appendChild(layer);
  const draw = (n: number): void => {
    const g = el('g');
    const rn = r ** n, thn = n * th0;
    const wx = rn * Math.cos(thn), wy = rn * Math.sin(thn);
    g.appendChild(el('path', { d: arcPath(m.X(0), m.Y(0), 30, th0, thn) }, { fill: 'none', stroke: C.accentBright, strokeWidth: '2' }));
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(zx), m.Y(zy), C.ink));
    g.appendChild(dot(m.X(zx), m.Y(zy), 4, C.ink, C.paper));
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(wx), m.Y(wy), C.accent));
    g.appendChild(dot(m.X(wx), m.Y(wy), 4, C.accent, C.paper));
    layer.replaceChildren(g);
    out.textContent =
      `(دي موافر) zⁿ طويلتها rⁿ = ${fmt(rn)} وعمدتها n·θ = ${fmt(n * 30, 0)}° . n=${fmt(n, 0)}`;
  };
  slider(ctl, { min: 1, max: 6, step: 1, value: 2, label: 'الأُس n', on: draw });
  draw(2);
};

/* 5) cx-quadratic — z²−2z+c=0 with c>1 gives conjugate roots 1 ± i·√(c−1). */
const cxQuadratic = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const m = plane(svg);
  const layer = el('g'); svg.appendChild(layer);
  const draw = (c: number): void => {
    const g = el('g');
    const im = Math.sqrt(c - 1);
    g.appendChild(line(m.X(V.xmin), m.Y(0), m.X(V.xmax), m.Y(0), C.accentBright, 1.8, '6 4'));
    g.appendChild(line(m.X(1), m.Y(im), m.X(1), m.Y(-im), C.ink3, 1.4, '4 3'));
    g.appendChild(dot(m.X(1), m.Y(im), 4, C.accent, C.paper));
    g.appendChild(dot(m.X(1), m.Y(-im), 4, C.accent, C.paper));
    layer.replaceChildren(g);
    out.textContent =
      `Δ = 4−4c < 0 ⇒ جذران عقديّان مترافقان: z = 1 ± i·√(c−1) = 1 ± i·(${fmt(im)}). متناظران حول المحور الحقيقي`;
  };
  slider(ctl, { min: 1.2, max: 6, step: 0.2, value: 5, label: 'الحدّ c', on: draw });
  draw(5);
};

/* 6) cxg-affix — affix of the vector AB: z_B − z_A as a free vector from O. */
const cxgAffix = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const m = plane(svg);
  const ax = 1, ay = 0.5;
  const layer = el('g'); svg.appendChild(layer);
  svg.appendChild(dot(m.X(ax), m.Y(ay), 4, C.ink, C.paper));
  svg.appendChild(label(m.X(ax) - 10, m.Y(ay) - 8, 'A', C.ink, 11));
  const draw = (bx: number, by: number): void => {
    const g = el('g');
    const dx = bx - ax, dy = by - ay;
    g.appendChild(line(m.X(ax), m.Y(ay), m.X(bx), m.Y(by), C.ink, 1.8));
    g.appendChild(dot(m.X(bx), m.Y(by), 4, C.ink, C.paper));
    g.appendChild(label(m.X(bx) + 10, m.Y(by) - 8, 'B', C.ink, 11));
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(dx), m.Y(dy), C.accent));
    g.appendChild(dot(m.X(dx), m.Y(dy), 4, C.accent, C.paper));
    layer.replaceChildren(g);
    out.textContent = `لاحقة AB = z_B − z_A = (${fmt(dx)}) + i·(${fmt(dy)})`;
  };
  svg.appendChild(makeDraggable(svg, m, V, { x: 3, y: 2 }, draw).node);
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'اسحب B';
  ctl.appendChild(hint);
  draw(3, 2);
};

/* 7) cxg-distangle — distance AC and the oriented angle (AB,AC)=arg[(zC−zA)/(zB−zA)]. */
const cxgDistAngle = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const m = plane(svg);
  const ax = -1, ay = -0.5, bx = 2.5, by = -0.5;
  const layer = el('g'); svg.appendChild(layer);
  svg.appendChild(dot(m.X(ax), m.Y(ay), 4, C.ink, C.paper));
  svg.appendChild(label(m.X(ax) - 10, m.Y(ay) + 12, 'A', C.ink, 11));
  svg.appendChild(dot(m.X(bx), m.Y(by), 4, C.ink, C.paper));
  svg.appendChild(label(m.X(bx) + 10, m.Y(by) + 12, 'B', C.ink, 11));
  const draw = (cx: number, cy: number): void => {
    const g = el('g');
    g.appendChild(line(m.X(ax), m.Y(ay), m.X(bx), m.Y(by), C.ink, 1.8));
    g.appendChild(line(m.X(ax), m.Y(ay), m.X(cx), m.Y(cy), C.ink, 1.8));
    g.appendChild(line(m.X(bx), m.Y(by), m.X(cx), m.Y(cy), C.ink, 1.8));
    g.appendChild(dot(m.X(cx), m.Y(cy), 4, C.accent, C.paper));
    g.appendChild(label(m.X(cx) + 10, m.Y(cy) - 8, 'C', C.accent, 11));
    const nre = cx - ax, nim = cy - ay, dre = bx - ax, dim = by - ay;
    const den = dre * dre + dim * dim;
    const qre = (nre * dre + nim * dim) / den, qim = (nim * dre - nre * dim) / den;
    const ang = Math.atan2(qim, qre);
    const aB = Math.atan2(by - ay, bx - ax);
    g.appendChild(el('path', { d: arcPath(m.X(ax), m.Y(ay), 24, aB, aB + ang) }, { fill: 'none', stroke: C.accentBright, strokeWidth: '2' }));
    layer.replaceChildren(g);
    out.textContent =
      `AC = |z_C−z_A| = ${fmt(Math.hypot(cx - ax, cy - ay))} ، والزاوية الموجّهة (AB,AC) = arg[(z_C−z_A)/(z_B−z_A)] ≈ ${fmt(ang * 180 / Math.PI, 1)}°`;
  };
  svg.appendChild(makeDraggable(svg, m, V, { x: 0.5, y: 2 }, draw).node);
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'اسحب C';
  ctl.appendChild(hint);
  draw(0.5, 2);
};

/* 8) cxg-transforms — translation / homothety / rotation as complex operations. */
const cxgTransforms = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const m = plane(svg);
  const layer = el('g'); svg.appendChild(layer);
  let mode = 'trans';
  let zx = 2, zy = 1;
  const draw = (): void => {
    const g = el('g');
    let wx = zx, wy = zy, txt = '';
    if (mode === 'trans') {
      wx = zx + 1.5; wy = zy + 1;
      txt = `z′ = z + (1.5+i) (انسحاب) = ${fmt(wx)} + i·(${fmt(wy)})`;
    } else if (mode === 'homo') {
      wx = 1.6 * zx; wy = 1.6 * zy;
      txt = `z′ = 1.6·z (تحاكٍ مركزه O ونسبته 1.6) = ${fmt(wx)} + i·(${fmt(wy)})`;
    } else {
      wx = -zy; wy = zx;
      txt = `z′ = e^{iπ/2}·z (دوران 90°) = ${fmt(wx)} + i·(${fmt(wy)})`;
    }
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(zx), m.Y(zy), C.ink));
    g.appendChild(dot(m.X(zx), m.Y(zy), 4, C.ink, C.paper));
    g.appendChild(arrow(m.X(0), m.Y(0), m.X(wx), m.Y(wy), C.accent));
    g.appendChild(dot(m.X(wx), m.Y(wy), 4, C.accent, C.paper));
    g.appendChild(line(m.X(zx), m.Y(zy), m.X(wx), m.Y(wy), C.ink3, 1.4, '4 3'));
    if (mode === 'rot') {
      const R = Math.hypot(m.X(zx) - m.X(0), m.Y(zy) - m.Y(0));
      g.appendChild(el('path', { d: arcPath(m.X(0), m.Y(0), R, Math.atan2(zy, zx), Math.atan2(wy, wx)) }, { fill: 'none', stroke: C.accentBright, strokeWidth: '2' }));
    }
    layer.replaceChildren(g);
    out.textContent = txt;
  };
  segButton(ctl, [{ key: 'trans', label: 'انسحاب' }, { key: 'homo', label: 'تحاكٍ' }, { key: 'rot', label: 'دوران' }],
    (k: string): void => { mode = k; draw(); });
  svg.appendChild(makeDraggable(svg, m, V, { x: 2, y: 1 }, (x: number, y: number): void => { zx = x; zy = y; draw(); }).node);
  const hint = document.createElement('p'); hint.className = 'demo__hint'; hint.textContent = 'اسحب z وبدّل نوع التحويل';
  ctl.appendChild(hint);
  draw();
};

export const complexLessons: Record<string, (root: HTMLElement) => void> = {
  'cx-algebraic': cxAlgebraic, 'cx-conjugate': cxConjugate, 'cx-modarg': cxModArg, 'cx-demoivre': cxDeMoivre,
  'cx-quadratic': cxQuadratic, 'cxg-affix': cxgAffix, 'cxg-distangle': cxgDistAngle, 'cxg-transforms': cxgTransforms,
};
