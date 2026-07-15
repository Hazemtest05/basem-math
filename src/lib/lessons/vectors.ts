/* =============================================================================
   vectors.ts — interactive SVG widgets for the vectors & 3D-geometry unit
   (Arabic / RTL). Each widget is a self-contained `(root) => void` built on
   svgkit primitives: 2D widgets draw a static grid once via axes() and swap a
   redraw layer with replaceChildren(); 3D widgets project through make3D().
   Controls mount into `ctl`, the live Arabic readout lives in `out`, and every
   drawing call works in PIXEL coordinates.
   ============================================================================= */

import {
  C, el, mapFor, fmt, line, dot, label, axes, arrow, parts, slider, segButton,
  makeDraggable, make3D,
} from '@/lib/svgkit';
import type { View, Map2 } from '@/lib/svgkit';

/* small helper: an RTL-safe hint paragraph under the controls. */
const hint = (ctl: HTMLElement, text: string): void => {
  const p = document.createElement('p');
  p.className = 'demo__hint';
  p.textContent = text;
  ctl.appendChild(p);
};

/* 1) vec-ops — parallelogram rule for u+v (2D). */
const vecOps = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -1, xmax: 6, ymin: -1, ymax: 6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const layer = el('g');
  svg.appendChild(layer);
  const ux = 3, uy = 1;
  const draw = (vx: number, vy: number): void => {
    const g = el('g');
    const O = { px: m.X(0), py: m.Y(0) };
    const uP = { px: m.X(ux), py: m.Y(uy) };
    const vP = { px: m.X(vx), py: m.Y(vy) };
    const sP = { px: m.X(ux + vx), py: m.Y(uy + vy) };
    g.appendChild(line(uP.px, uP.py, sP.px, sP.py, C.ink3, 1.4, '4 4'));
    g.appendChild(line(vP.px, vP.py, sP.px, sP.py, C.ink3, 1.4, '4 4'));
    g.appendChild(arrow(O.px, O.py, uP.px, uP.py, C.ink));
    g.appendChild(arrow(O.px, O.py, vP.px, vP.py, C.ink));
    g.appendChild(arrow(O.px, O.py, sP.px, sP.py, C.accent));
    layer.replaceChildren(g);
    out.textContent =
      `u=(3,1) ، v=(${fmt(vx)},${fmt(vy)}) ، u+v=(${fmt(ux + vx)},${fmt(uy + vy)}) هو قطر متوازي الأضلاع`;
  };
  const handle = makeDraggable(svg, m, view, { x: 1, y: 3 }, draw);
  svg.appendChild(handle.node);
  hint(ctl, 'اسحب المقبض الأحمر لتحريك v');
  draw(1, 3);
};

/* 2) vec-basis — linear dependence of two plane vectors. */
const vecBasis = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const layer = el('g');
  svg.appendChild(layer);
  const ux = 2, uy = 1;
  const draw = (vx: number, vy: number): void => {
    const g = el('g');
    const O = { px: m.X(0), py: m.Y(0) };
    const cross = ux * vy - uy * vx;
    g.appendChild(arrow(O.px, O.py, m.X(ux), m.Y(uy), C.ink));
    if (Math.abs(cross) < 0.3) {
      g.appendChild(line(m.X(-ux * 2), m.Y(-uy * 2), m.X(ux * 2), m.Y(uy * 2), C.accent, 1.6, '5 4'));
      out.textContent = 'الشعاعان مرتبطان خطّياً (على استقامة واحدة)';
      out.style.color = '';
    } else {
      out.textContent = 'الشعاعان يشكّلان أساساً للمستوي';
      out.style.color = C.ok;
    }
    g.appendChild(arrow(O.px, O.py, m.X(vx), m.Y(vy), C.accent));
    layer.replaceChildren(g);
  };
  const handle = makeDraggable(svg, m, view, { x: 1, y: 2 }, draw);
  svg.appendChild(handle.node);
  hint(ctl, 'اسحب v حتى يصير على استقامة u');
  draw(1, 2);
};

/* 3) vec-coords — coordinates of a point in space. */
const vecCoords = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const P3 = make3D(150, 175, 34);
  const layer = el('g');
  svg.appendChild(layer);
  const O = P3(0, 0, 0);
  const drawAxes = (g: SVGGElement): void => {
    const ends: [number, number, number, string][] = [[3.4, 0, 0, 'x'], [0, 3.2, 0, 'y'], [0, 0, 3.4, 'z']];
    for (const [x, y, z, name] of ends) {
      const e = P3(x, y, z);
      g.appendChild(line(O[0], O[1], e[0], e[1], C.ink, 1.4));
      g.appendChild(label(e[0], e[1] - 4, name, C.ink3, 10));
    }
  };
  const draw = (x: number, y: number, z: number): void => {
    const g = el('g') as SVGGElement;
    drawAxes(g);
    const a = P3(x, 0, 0), b = P3(x, y, 0), P = P3(x, y, z);
    for (const [p, q] of [[O, a], [a, b], [b, P]] as [number, number][][])
      g.appendChild(line(p[0], p[1], q[0], q[1], C.ink3, 1.2, '3 3'));
    g.appendChild(dot(P[0], P[1], 4.5, C.accent));
    layer.replaceChildren(g);
    out.textContent = `الإحداثيات (x,y,z)=(${fmt(x)},${fmt(y)},${fmt(z)}) في المُعلَم الفراغي`;
  };
  let sx = 2, sy = 2, sz = 1;
  slider(ctl, { min: 0, max: 3, step: 0.5, value: sx, label: 'x', on: (n) => { sx = n; draw(sx, sy, sz); } });
  slider(ctl, { min: 0, max: 3, step: 0.5, value: sy, label: 'y', on: (n) => { sy = n; draw(sx, sy, sz); } });
  slider(ctl, { min: 0, max: 3, step: 0.5, value: sz, label: 'z', on: (n) => { sz = n; draw(sx, sy, sz); } });
  draw(sx, sy, sz);
};

/* 4) vec-distance — distance between two points in space. */
const vecDistance = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const P3 = make3D(150, 175, 34);
  const layer = el('g');
  svg.appendChild(layer);
  const A = P3(0, 0, 0);
  const drawAxes = (g: SVGGElement): void => {
    const ends: [number, number, number, string][] = [[3.4, 0, 0, 'x'], [0, 3.2, 0, 'y'], [0, 0, 3.4, 'z']];
    for (const [x, y, z, name] of ends) {
      const e = P3(x, y, z);
      g.appendChild(line(A[0], A[1], e[0], e[1], C.ink, 1.4));
      g.appendChild(label(e[0], e[1] - 4, name, C.ink3, 10));
    }
  };
  const draw = (x: number, y: number, z: number): void => {
    const g = el('g') as SVGGElement;
    drawAxes(g);
    const B = P3(x, y, z);
    g.appendChild(line(A[0], A[1], B[0], B[1], C.accent, 2.4));
    g.appendChild(dot(A[0], A[1], 4, C.ink));
    g.appendChild(dot(B[0], B[1], 4.5, C.accent));
    layer.replaceChildren(g);
    const s = x * x + y * y + z * z, dist = Math.hypot(x, y, z);
    out.textContent = `AB = √(x²+y²+z²) = √(${fmt(s)}) = ${fmt(dist)}`;
  };
  let sx = 2, sy = 2, sz = 1;
  slider(ctl, { min: 0, max: 3, step: 0.5, value: sx, label: 'x', on: (n) => { sx = n; draw(sx, sy, sz); } });
  slider(ctl, { min: 0, max: 3, step: 0.5, value: sy, label: 'y', on: (n) => { sy = n; draw(sx, sy, sz); } });
  slider(ctl, { min: 0, max: 3, step: 0.5, value: sz, label: 'z', on: (n) => { sz = n; draw(sx, sy, sz); } });
  draw(sx, sy, sz);
};

/* 5) vec-barycenter — weighted centroid of a triangle (2D). */
const vecBarycenter = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -3, xmax: 3, ymin: -2, ymax: 3 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const A = { x: -2, y: -1 }, B = { x: 2, y: -1 }, Cc = { x: 0, y: 2.4 };
  const tri = el('g');
  tri.appendChild(el('path', {
    d: `M${m.X(A.x)} ${m.Y(A.y)} L${m.X(B.x)} ${m.Y(B.y)} L${m.X(Cc.x)} ${m.Y(Cc.y)} Z`,
  }, { fill: 'none', stroke: C.ink, strokeWidth: '1.8' }));
  tri.appendChild(label(m.X(A.x) - 8, m.Y(A.y) + 6, 'A', C.ink3, 11));
  tri.appendChild(label(m.X(B.x) + 8, m.Y(B.y) + 6, 'B', C.ink3, 11));
  tri.appendChild(label(m.X(Cc.x), m.Y(Cc.y) - 6, 'C', C.ink3, 11));
  svg.appendChild(tri);
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (al: number, be: number, ga: number): void => {
    const s = al + be + ga || 1;
    const gx = (al * A.x + be * B.x + ga * Cc.x) / s;
    const gy = (al * A.y + be * B.y + ga * Cc.y) / s;
    layer.replaceChildren(dot(m.X(gx), m.Y(gy), 5, C.accent));
    out.textContent =
      `G = (αA+βB+γC)/(α+β+γ) ، الأوزان (${fmt(al)},${fmt(be)},${fmt(ga)}) ⇒ G=(${fmt(gx)},${fmt(gy)}). يقترب من النقطة الأثقل`;
  };
  let al = 1, be = 1, ga = 1;
  slider(ctl, { min: 0, max: 3, step: 0.5, value: al, label: 'α (عند A)', on: (n) => { al = n; draw(al, be, ga); } });
  slider(ctl, { min: 0, max: 3, step: 0.5, value: be, label: 'β (عند B)', on: (n) => { be = n; draw(al, be, ga); } });
  slider(ctl, { min: 0, max: 3, step: 0.5, value: ga, label: 'γ (عند C)', on: (n) => { ga = n; draw(al, be, ga); } });
  draw(al, be, ga);
};

/* 6) dot-def — dot product and the angle between two plane vectors. */
const dotDef = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const layer = el('g');
  svg.appendChild(layer);
  const ux = 3, uy = 1;
  const draw = (vx: number, vy: number): void => {
    const g = el('g');
    const O = { px: m.X(0), py: m.Y(0) };
    g.appendChild(arrow(O.px, O.py, m.X(ux), m.Y(uy), C.ink));
    g.appendChild(arrow(O.px, O.py, m.X(vx), m.Y(vy), C.accent));
    layer.replaceChildren(g);
    const d = ux * vx + uy * vy;
    const ang = Math.acos(d / (Math.hypot(ux, uy) * Math.hypot(vx, vy) || 1)) * 180 / Math.PI;
    const perp = Math.abs(d) < 0.2;
    out.textContent =
      `u·v = 3·(${fmt(vx)}) + 1·(${fmt(vy)}) = ${fmt(d)} ، الزاوية ≈ ${fmt(ang)}°` +
      (perp ? ' ⇒ متعامدان (الجداء≈0)' : '');
    out.style.color = perp ? C.ok : '';
  };
  const handle = makeDraggable(svg, m, view, { x: 1, y: 2 }, draw);
  svg.appendChild(handle.node);
  hint(ctl, 'اسحب حتى يصير عمودياً على الأسود');
  draw(1, 2);
};

/* 7) dot-normal — a plane, its normal, and a rotatable scene (3D). */
const dotNormal = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const P3 = make3D(160, 150, 40);
  const layer = el('g');
  svg.appendChild(layer);
  type V3 = [number, number, number];
  const draw = (deg: number): void => {
    const g = el('g');
    const t = deg * Math.PI / 180, ct = Math.cos(t), st = Math.sin(t);
    const rot = (p: V3): V3 => [p[0], p[1] * ct - p[2] * st, p[1] * st + p[2] * ct];
    const pr = (p: V3): [number, number] => { const r = rot(p); return P3(r[0], r[1], r[2]); };
    const corners: V3[] = [[-1.4, -1.4, 0], [1.4, -1.4, 0], [1.4, 1.4, 0], [-1.4, 1.4, 0]];
    g.appendChild(el('polygon', { points: corners.map(pr).map(([x, y]) => `${x},${y}`).join(' ') },
      { fill: C.wash1, stroke: C.accentInk, strokeWidth: '1.6' }));
    const O = pr([0, 0, 0]);
    const e1 = pr([1.4, 0, 0]), e2 = pr([0, 1.4, 0]);
    g.appendChild(arrow(O[0], O[1], e1[0], e1[1], C.ink, 2));
    g.appendChild(arrow(O[0], O[1], e2[0], e2[1], C.ink, 2));
    const nn = pr([0, 0, 1.8]);
    g.appendChild(arrow(O[0], O[1], nn[0], nn[1], C.accent, 2.4));
    layer.replaceChildren(g);
    out.textContent =
      'الشعاع الناظم عمودٌ على المستوي كلّه: جداؤه السلّمي بأيّ شعاع في المستوي = 0. أدِر المشهد لرؤية التعامد';
  };
  slider(ctl, { min: 0, max: 80, step: 5, value: 30, label: 'أدِر المشهد θ°', on: draw });
  draw(30);
};

/* 8) dot-planedist — distance from a point to a line 3x+4y−12=0 (2D). */
const dotPlaneDist = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -2, xmax: 6, ymin: -2, ymax: 6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  svg.appendChild(line(m.X(0), m.Y(3), m.X(4), m.Y(0), C.ink, 2));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (mx: number, my: number): void => {
    const g = el('g');
    const t = (3 * mx + 4 * my - 12) / 25;
    const fx = mx - 3 * t, fy = my - 4 * t;
    const dist = Math.abs(3 * mx + 4 * my - 12) / 5;
    g.appendChild(line(m.X(mx), m.Y(my), m.X(fx), m.Y(fy), C.accent, 1.8, '4 4'));
    g.appendChild(dot(m.X(fx), m.Y(fy), 4, C.ink));
    g.appendChild(dot(m.X(mx), m.Y(my), 4.5, C.accent));
    layer.replaceChildren(g);
    out.textContent =
      `بُعد M(${fmt(mx)},${fmt(my)}) عن المستقيم 3x+4y−12=0 = |3x+4y−12|/√(3²+4²) = ${fmt(dist)}`;
  };
  const handle = makeDraggable(svg, m, view, { x: 1, y: 1 }, draw);
  svg.appendChild(handle.node);
  hint(ctl, 'اسحب النقطة M لتغيير بُعدها عن المستقيم');
  draw(1, 1);
};

/* 9) line-locus — a parametric line M = A + t·u (2D). */
const lineLocus = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const A = { x: -3, y: -2 }, u = { x: 2, y: 1 };
  svg.appendChild(line(
    m.X(A.x + u.x * -5), m.Y(A.y + u.y * -5),
    m.X(A.x + u.x * 5), m.Y(A.y + u.y * 5), C.ink3, 1.6));
  svg.appendChild(dot(m.X(A.x), m.Y(A.y), 3.5, C.ink));
  svg.appendChild(label(m.X(A.x) - 8, m.Y(A.y) + 12, 'A', C.ink3, 11));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (t: number): void => {
    const x = A.x + t * u.x, y = A.y + t * u.y;
    layer.replaceChildren(dot(m.X(x), m.Y(y), 5, C.accent));
    out.textContent =
      `M = A + t·u : x = −3+2t = ${fmt(x)} ، y = −2+t = ${fmt(y)} (عند t=${fmt(t)})`;
  };
  slider(ctl, { min: -4, max: 4, step: 0.1, value: 1.5, label: 'الوسيط t', on: draw });
  draw(1.5);
};

/* 10) param-repr — a parametric plane patch M = A + t·u + s·v (3D). */
const paramRepr = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const P3 = make3D(150, 165, 32);
  type V3 = [number, number, number];
  const A: V3 = [0, 0, 0], u: V3 = [2, 0, 0.4], v: V3 = [0, 2, 0.6];
  const axesG = el('g');
  const O = P3(0, 0, 0);
  const ends: V3[] = [[2.6, 0, 0], [0, 2.6, 0], [0, 0, 2.2]];
  for (const e of ends) { const p = P3(e[0], e[1], e[2]); axesG.appendChild(line(O[0], O[1], p[0], p[1], C.ink3, 1.2)); }
  const corner = (t: number, s: number): [number, number] =>
    P3(A[0] + t * u[0] + s * v[0], A[1] + t * u[1] + s * v[1], A[2] + t * u[2] + s * v[2]);
  const c00 = corner(0, 0), c10 = corner(1, 0), c11 = corner(1, 1), c01 = corner(0, 1);
  axesG.appendChild(el('polygon', {
    points: [c00, c10, c11, c01].map(([x, y]) => `${x},${y}`).join(' '),
  }, { fill: C.wash1, stroke: C.accentInk, strokeWidth: '1.2' }));
  svg.appendChild(axesG);
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (t: number, s: number): void => {
    const g = el('g');
    const tu = P3(A[0] + t * u[0], A[1] + t * u[1], A[2] + t * u[2]);
    const M = corner(t, s);
    g.appendChild(line(O[0], O[1], tu[0], tu[1], C.ink, 1.6));
    g.appendChild(line(tu[0], tu[1], M[0], M[1], C.ink, 1.6));
    g.appendChild(dot(M[0], M[1], 4.5, C.accent));
    layer.replaceChildren(g);
    const mx = A[0] + t * u[0] + s * v[0], my = A[1] + t * u[1] + s * v[1], mz = A[2] + t * u[2] + s * v[2];
    out.textContent =
      `M = A + t·u + s·v ، (t,s)=(${fmt(t)},${fmt(s)}) ⇒ M=(${fmt(mx)},${fmt(my)},${fmt(mz)}). الوسيطان يمسحان المستوي`;
  };
  let st = 0.5, ss = 0.5;
  slider(ctl, { min: 0, max: 1, step: 0.05, value: st, label: 't', on: (n) => { st = n; draw(st, ss); } });
  slider(ctl, { min: 0, max: 1, step: 0.05, value: ss, label: 's', on: (n) => { ss = n; draw(st, ss); } });
  draw(st, ss);
};

/* 11) line-positions — relative position of two plane lines. */
const linePositions = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  svg.appendChild(line(m.X(-5), m.Y(-5), m.X(5), m.Y(5), C.ink3, 1.8));
  const layer = el('g');
  svg.appendChild(layer);
  const yOf = (mm: number, c: number, x: number): number => mm * x + c;
  const draw = (mm: number, c: number): void => {
    const g = el('g');
    g.appendChild(line(m.X(-5), m.Y(yOf(mm, c, -5)), m.X(5), m.Y(yOf(mm, c, 5)), C.accent, 2));
    if (mm === 1 && c === 0) {
      out.textContent = 'المستقيمان منطبقان: لهما الميل والإزاحة نفسها';
    } else if (mm === 1 && c !== 0) {
      out.textContent = 'المستقيمان متوازيان: نفس الميل وإزاحة مختلفة، لا تقاطع';
    } else {
      const x = c / (1 - mm), y = x;
      g.appendChild(dot(m.X(x), m.Y(y), 5, C.accent));
      out.textContent = `المستقيمان متقاطعان عند (${fmt(x)},${fmt(y)})`;
    }
    layer.replaceChildren(g);
  };
  let mm = 0.5, c = 1;
  slider(ctl, { min: 0, max: 2, step: 0.25, value: mm, label: 'ميل الثاني m', on: (n) => { mm = n; draw(mm, c); } });
  slider(ctl, { min: -3, max: 3, step: 0.5, value: c, label: 'الإزاحة c', on: (n) => { c = n; draw(mm, c); } });
  draw(mm, c);
};

/* 12) three-planes — schematic of the intersection type of three planes. */
const threePlanes = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g');
  svg.appendChild(layer);
  svg.appendChild(label(190, 24, 'تمثيل تخطيطي للمستويات', C.ink3, 11));
  const cols = [C.ink, C.accent, C.ok];
  const draw = (key: string): void => {
    const g = el('g');
    if (key === 'point') {
      const cx = 190, cy = 150;
      const angs = [Math.PI / 2, Math.PI / 2 + Math.PI / 3, Math.PI / 2 + 2 * Math.PI / 3];
      angs.forEach((a, i) => {
        const dx = Math.cos(a) * 130, dy = Math.sin(a) * 90;
        g.appendChild(line(cx - dx, cy - dy, cx + dx, cy + dy, cols[i], 2.2));
      });
      g.appendChild(dot(cx, cy, 4.5, C.accentInk));
      out.textContent = 'حلٌّ وحيد: تتقاطع الثلاثة في نقطة واحدة';
    } else if (key === 'line') {
      for (let i = 0; i < 3; i++)
        g.appendChild(line(50, 150 + (i - 1) * 0.6, 330, 150 + (i - 1) * 0.6, cols[i], 2.2));
      out.textContent = 'حلٌّ غير منتهٍ: المستويات تشترك بمستقيم';
    } else {
      const tri: [number, number][] = [[190, 70], [90, 200], [290, 200]];
      const edges: [number, number][][] = [[tri[0], tri[1]], [tri[1], tri[2]], [tri[2], tri[0]]];
      edges.forEach((e, i) => {
        const [p, q] = e, ex = q[0] - p[0], ey = q[1] - p[1];
        g.appendChild(line(p[0] - ex * 0.25, p[1] - ey * 0.25, q[0] + ex * 0.25, q[1] + ey * 0.25, cols[i], 2.2));
      });
      out.textContent = 'لا حلّ: لا نقطة مشتركة للمستويات الثلاثة';
    }
    layer.replaceChildren(g);
  };
  segButton(ctl, [{ key: 'point', label: 'نقطة' }, { key: 'line', label: 'مستقيم' }, { key: 'none', label: 'لا حلّ' }], draw);
  draw('point');
};

export const vectors: Record<string, (root: HTMLElement) => void> = {
  'vec-ops': vecOps, 'vec-basis': vecBasis, 'vec-coords': vecCoords, 'vec-distance': vecDistance,
  'vec-barycenter': vecBarycenter, 'dot-def': dotDef, 'dot-normal': dotNormal, 'dot-planedist': dotPlaneDist,
  'line-locus': lineLocus, 'param-repr': paramRepr, 'line-positions': linePositions, 'three-planes': threePlanes,
};
