/* =============================================================================
   logexp — interactive widgets for the natural-log / exponential lessons.
   One self-contained SVG demo per function; RTL Arabic readouts.
   ============================================================================= */

import { compile } from '@/lib/mathexpr';
import type { View, Map2 } from '@/lib/svgkit';
import {
  C, el, mapFor, fmt, line, dot, axes, fnPath, parts, slider,
} from '@/lib/svgkit';

/* 1) ln-def — area under 1/t from 1 to x equals ln x. */
const lnDef = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: 0, xmax: 8.5, ymin: -0.2, ymax: 3 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const f = compile('1/x');
  svg.appendChild(el('path', { d: fnPath((t) => f(t), m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2.2' }));
  const layer = el('g'); svg.appendChild(layer);
  const draw = (x: number): void => {
    const lo = Math.min(1, x), hi = Math.max(1, x);
    let d = `M ${m.X(lo)} ${m.Y(0)} `;
    const n = 60;
    for (let i = 0; i <= n; i++) { const t = lo + (hi - lo) * (i / n); d += `L ${m.X(t)} ${m.Y(f(t))} `; }
    d += `L ${m.X(hi)} ${m.Y(0)} Z`;
    const poly = el('path', { d }, { fill: C.wash1, stroke: C.accent, strokeWidth: '1.4' });
    layer.replaceChildren(poly, line(m.X(x), m.Y(0), m.X(x), m.Y(f(x)), C.accent, 1.4, '4 3'));
    const neg = x < 1 ? ' (سالبة)' : '';
    out.textContent = `المساحة تحت 1/t من 1 إلى x تساوي ln(x). عند x=${fmt(x)} ⇒ ln(x)=${fmt(Math.log(x))}${neg}`;
  };
  slider(ctl, { min: 0.3, max: 8, step: 0.1, value: 3, label: 'x', on: draw });
  draw(3);
};

/* 2) ln-algebra — ln(a)+ln(b)=ln(ab). */
const lnAlgebra = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: 0, xmax: 9, ymin: -1.5, ymax: 2.6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const f = compile('ln(x)');
  svg.appendChild(el('path', { d: fnPath((x) => f(x), m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2.2' }));
  const layer = el('g'); svg.appendChild(layer);
  let a = 2, b = 3;
  const mark = (x: number, col: string): SVGGElement => {
    const g = el('g') as SVGGElement;
    g.appendChild(line(m.X(x), m.Y(0), m.X(x), m.Y(f(x)), col, 1.2, '3 3'));
    g.appendChild(dot(m.X(x), m.Y(f(x)), 4, col, C.paper));
    return g;
  };
  const draw = (): void => {
    const ab = a * b;
    layer.replaceChildren(mark(a, C.ink), mark(b, C.ink), mark(ab, C.accent));
    out.textContent = `ln(a)+ln(b) = ${fmt(Math.log(a))}+${fmt(Math.log(b))} = ln(a·b) = ln(${fmt(ab)}) = ${fmt(Math.log(ab))} . الجداء صار جمعاً`;
  };
  slider(ctl, { min: 1, max: 3, step: 0.5, value: 2, label: 'a', on: (n) => { a = n; draw(); } });
  slider(ctl, { min: 1, max: 3, step: 0.5, value: 3, label: 'b', on: (n) => { b = n; draw(); } });
  draw();
};

/* 3) ln-study — exp and ln are inverses, reflected over y=x. */
const lnStudy = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -3, xmax: 5, ymin: -3, ymax: 5 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const ex = compile('exp(x)'), lg = compile('ln(x)');
  svg.appendChild(el('path', { d: fnPath((x) => x, m, view), fill: 'none' }, { stroke: C.ink3, strokeWidth: '1.4', strokeDasharray: '5 4' }));
  svg.appendChild(el('path', { d: fnPath((x) => ex(x), m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2.2' }));
  svg.appendChild(el('path', { d: fnPath((x) => lg(x), m, view), fill: 'none' }, { stroke: C.accent, strokeWidth: '2.2' }));
  const layer = el('g'); svg.appendChild(layer);
  const draw = (t: number): void => {
    const et = Math.exp(t);
    layer.replaceChildren(
      line(m.X(t), m.Y(et), m.X(et), m.Y(t), C.accent, 1.2, '4 3'),
      dot(m.X(t), m.Y(et), 4.5, C.ink, C.paper),
      dot(m.X(et), m.Y(t), 4.5, C.accent, C.paper),
    );
    out.textContent = 'exp و ln متعاكسان: النقطة (t, eᵗ) على المنحني الأُسّي تنعكس حول y=x إلى (eᵗ, t) على منحني ln. e≈2.718';
  };
  slider(ctl, { min: -1.5, max: 1.5, step: 0.1, value: 0.5, label: 't', on: draw });
  draw(0.5);
};

/* 4) ln-deriv — tangent to ln, slope 1/x. */
const lnDeriv = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: 0, xmax: 7.5, ymin: -2, ymax: 2.5 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const f = compile('ln(x)');
  svg.appendChild(el('path', { d: fnPath((x) => f(x), m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2.2' }));
  const layer = el('g'); svg.appendChild(layer);
  const draw = (a: number): void => {
    const ya = Math.log(a), s = 1 / a;
    const tan = (x: number): number => ya + s * (x - a);
    layer.replaceChildren(
      el('path', { d: fnPath(tan, m, view), fill: 'none' }, { stroke: C.accent, strokeWidth: '1.8' }),
      dot(m.X(a), m.Y(ya), 4.5, C.accent, C.paper),
    );
    out.textContent = `(ln x)′ = 1/x. عند a=${fmt(a)} الميل = 1/a = ${fmt(s)}`;
  };
  slider(ctl, { min: 0.3, max: 7, step: 0.1, value: 2, label: 'a', on: draw });
  draw(2);
};

/* 5) exp-props — eˣ slope = value. */
const expProps = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -2.2, xmax: 2.2, ymin: -0.6, ymax: 6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const f = compile('exp(x)');
  svg.appendChild(el('path', { d: fnPath((x) => f(x), m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2.2' }));
  const layer = el('g'); svg.appendChild(layer);
  const draw = (x0: number): void => {
    const y0 = Math.exp(x0), s = y0;
    const tan = (x: number): number => y0 + s * (x - x0);
    layer.replaceChildren(
      el('path', { d: fnPath(tan, m, view), fill: 'none' }, { stroke: C.accent, strokeWidth: '1.8' }),
      dot(m.X(x0), m.Y(y0), 4.5, C.accent, C.paper),
    );
    out.textContent = `عند x=${fmt(x0)} : eˣ = ${fmt(y0)} والميل f′(x)=eˣ = ${fmt(s)} . القيمة تساوي الميل دائماً`;
  };
  slider(ctl, { min: -2, max: 2, step: 0.1, value: 0.5, label: 'x', on: draw });
  draw(0.5);
};

/* 6) exp-study — study f(x)=x·e^{−x}. */
const expStudy = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -0.5, xmax: 6, ymin: -0.5, ymax: 0.6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const f = compile('x*exp(-x)');
  svg.appendChild(el('path', { d: fnPath((x) => f(x), m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2.2' }));
  const maxG = el('g');
  maxG.appendChild(dot(m.X(1), m.Y(1 / Math.E), 4.5, C.accent, C.paper));
  svg.appendChild(maxG);
  const layer = el('g'); svg.appendChild(layer);
  const draw = (x: number): void => {
    layer.replaceChildren(dot(m.X(x), m.Y(f(x)), 4, C.accent, C.paper));
    out.textContent = `f(x)=x·e^−x: قيمة عظمى عند x=1 تساوي 1/e≈0.368، ثمّ f→0 حين x→+∞. f(x)=${fmt(f(x))}`;
  };
  slider(ctl, { min: -0.4, max: 6, step: 0.1, value: 1, label: 'x', on: draw });
  draw(1);
};

/* 7) exp-power — y=aˣ, slider a. */
const expPower = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -2.5, xmax: 2.5, ymin: -0.5, ymax: 6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  svg.appendChild(dot(m.X(0), m.Y(1), 4, C.ink, C.paper));
  const layer = el('g'); svg.appendChild(layer);
  const draw = (a: number): void => {
    const f = (x: number): number => Math.pow(a, x);
    layer.replaceChildren(el('path', { d: fnPath(f, m, view), fill: 'none' }, { stroke: C.accent, strokeWidth: '2.2' }));
    out.textContent = `y=aˣ: إن a>1 فمتزايد، إن a<1 فمتناقص، وإن a=1 فثابت. كلّها تمرّ بـ(0,1). a=${fmt(a)}`;
  };
  slider(ctl, { min: 0.3, max: 3, step: 0.1, value: 2, label: 'الأساس a', on: draw });
  draw(2);
};

/* 8) exp-diffeq — y=C·e^{kx} solving y'=k y. */
const expDiffeq = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -2, xmax: 2, ymin: -0.5, ymax: 6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const layer = el('g'); svg.appendChild(layer);
  let k = 0.5, cc = 1;
  const draw = (): void => {
    const f = (x: number): number => cc * Math.exp(k * x);
    layer.replaceChildren(el('path', { d: fnPath(f, m, view), fill: 'none' }, { stroke: C.accent, strokeWidth: '2.2' }));
    out.textContent = `الحلّ y=C·e^{kx} يحقّق y′=k·y. k>0 نموّ أُسّي، k<0 تلاشٍ. k=${fmt(k)} ، C=${fmt(cc)}`;
  };
  slider(ctl, { min: -1, max: 1, step: 0.25, value: 0.5, label: 'المعامل k', on: (n) => { k = n; draw(); } });
  slider(ctl, { min: 0.5, max: 3, step: 0.5, value: 1, label: 'الشرط C', on: (n) => { cc = n; draw(); } });
  draw();
};

export const logexp: Record<string, (root: HTMLElement) => void> = {
  'ln-def': lnDef, 'ln-algebra': lnAlgebra, 'ln-study': lnStudy, 'ln-deriv': lnDeriv,
  'exp-props': expProps, 'exp-study': expStudy, 'exp-power': expPower, 'exp-diffeq': expDiffeq,
};
