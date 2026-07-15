/* =============================================================================
   calculus.ts — interactive SVG widgets for the calculus unit (Arabic / RTL).

   Each widget is a self-contained `(root) => void` built on svgkit primitives:
   a static grid drawn once via axes(), a redraw layer swapped with
   replaceChildren(), controls mounted into `ctl`, and a live Arabic readout in
   `out`. All drawing uses PIXEL coordinates through the Map2 helpers.
   ============================================================================= */

import { compile } from '@/lib/mathexpr';
import {
  C, type View, el, mapFor, fmt, line, dot, axes, fnPath, parts, slider, segButton,
} from '@/lib/svgkit';

/* 1) deriv-def — secant slope tends to the tangent slope as h → 0. */
const derivDef = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const f = compile('x^2-3*x');
  const a = 2, fa = f(a);
  const view: View = { xmin: -1, xmax: 5, ymin: -3, ymax: 4 };
  const m = mapFor(view);
  axes(svg, m, view, { labels: true });
  svg.appendChild(el('path', { d: fnPath(f, m, view) }, { fill: 'none', stroke: C.ink, strokeWidth: '2' }));
  const layer = el('g');
  svg.appendChild(layer);
  svg.appendChild(dot(m.X(a), m.Y(fa), 3.5, C.ink));
  const draw = (h: number): void => {
    const g = el('g');
    // faint dashed tangent (slope f'(2) = 1)
    const tan = (x: number): number => fa + 1 * (x - a);
    g.appendChild(line(m.X(view.xmin), m.Y(tan(view.xmin)), m.X(view.xmax), m.Y(tan(view.xmax)), C.ink3, 1.4, '4 4'));
    const fb = f(a + h);
    const slope = (fb - fa) / h;
    // secant through (a,f(a)) and (a+h,f(a+h))
    const sec = (x: number): number => fa + slope * (x - a);
    g.appendChild(line(m.X(view.xmin), m.Y(sec(view.xmin)), m.X(view.xmax), m.Y(sec(view.xmax)), C.accent, 2));
    g.appendChild(dot(m.X(a + h), m.Y(fb), 4, C.accent));
    layer.replaceChildren(g);
    out.textContent =
      `ميل الوتر = [f(2+h)−f(2)]/h = h+1 = ${fmt(slope)} . حين h→0 يؤول إلى 1 = f′(2) (ميل المماس)`;
  };
  slider(ctl, { min: 0.05, max: 2.5, step: 0.05, value: 2, label: 'h → 0', on: draw });
  draw(2);
};

/* 2) deriv-apps — monotonicity read from the sign of f'. */
const derivApps = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const f = compile('x^3-3*x'), f1 = compile('3*x^2-3');
  const view: View = { xmin: -2.4, xmax: 2.4, ymin: -3, ymax: 3 };
  const m = mapFor(view);
  axes(svg, m, view, { labels: true });
  const rect = (x0: number, x1: number, fill: string): SVGRectElement =>
    el('rect', { x: m.X(x0), y: m.Y(view.ymax), width: m.X(x1) - m.X(x0), height: m.Y(view.ymin) - m.Y(view.ymax) }, { fill });
  // increasing (f'>0): x<−1 and x>1 ; decreasing (f'<0): −1<x<1
  svg.appendChild(rect(view.xmin, -1, C.okWash));
  svg.appendChild(rect(-1, 1, C.wash1));
  svg.appendChild(rect(1, view.xmax, C.okWash));
  svg.appendChild(el('path', { d: fnPath(f, m, view) }, { fill: 'none', stroke: C.ink, strokeWidth: '2' }));
  svg.appendChild(dot(m.X(-1), m.Y(2), 3.5, C.accent));
  svg.appendChild(dot(m.X(1), m.Y(-2), 3.5, C.accent));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (x: number): void => {
    layer.replaceChildren(dot(m.X(x), m.Y(f(x)), 4, C.accent));
    out.textContent =
      `f′(x)=3x²−3 = ${fmt(f1(x))} . موجبة ⇒ تزايد، سالبة ⇒ تناقص. تنعدم عند x=±1 حيث القيم الحدّية`;
  };
  slider(ctl, { min: -2.4, max: 2.4, step: 0.05, value: -1.6, label: 'x', on: draw });
  draw(-1.6);
};

/* 3) chain-rule — tangent slope of sin(2x) is 2cos(2x). */
const chainRule = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const f = compile('sin(2*x)');
  const view: View = { xmin: -3.2, xmax: 3.2, ymin: -1.6, ymax: 1.6 };
  const m = mapFor(view);
  axes(svg, m, view, { labels: true });
  svg.appendChild(el('path', { d: fnPath(f, m, view) }, { fill: 'none', stroke: C.ink, strokeWidth: '2' }));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (a: number): void => {
    const g = el('g');
    const slope = 2 * Math.cos(2 * a), fa = f(a);
    const tan = (x: number): number => fa + slope * (x - a);
    g.appendChild(line(m.X(view.xmin), m.Y(tan(view.xmin)), m.X(view.xmax), m.Y(tan(view.xmax)), C.accent, 2));
    g.appendChild(dot(m.X(a), m.Y(fa), 4, C.accent));
    layer.replaceChildren(g);
    out.textContent =
      `f=sin(2x). حسب قاعدة السلسلة f′=cos(2x)·2 = 2cos(2x) = ${fmt(slope)} عند a=${fmt(a)} (مشتق الطبقة الخارجية × الداخلية)`;
  };
  slider(ctl, { min: -3, max: 3, step: 0.1, value: 0.6, label: 'النقطة a', on: draw });
  draw(0.6);
};

/* 4) higher-deriv — toggle between f, f′, f″ of x³−3x. */
const higherDeriv = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const f = compile('x^3-3*x'), f1 = compile('3*x^2-3'), f2 = compile('6*x');
  const view: View = { xmin: -2.4, xmax: 2.4, ymin: -6, ymax: 6 };
  const m = mapFor(view);
  axes(svg, m, view, { labels: true });
  const layer = el('g');
  svg.appendChild(layer);
  const texts: Record<string, string> = {
    f: 'التابع f=x³−3x',
    d1: 'المشتق الأول f′=3x²−3: إشارته تعطي تزايد/تناقص f',
    d2: 'المشتق الثاني f″=6x: موجب ⇒ تقعّر للأعلى، سالب ⇒ للأسفل، ونقطة الانعطاف عند x=0',
  };
  const fns: Record<string, (x: number) => number> = { f, d1: f1, d2: f2 };
  const draw = (key: string): void => {
    layer.replaceChildren(
      el('path', { d: fnPath(fns[key], m, view) }, { fill: 'none', stroke: C.accent, strokeWidth: '2.2' }),
    );
    out.textContent = texts[key];
  };
  segButton(ctl, [{ key: 'f', label: 'f' }, { key: 'd1', label: 'f′' }, { key: 'd2', label: 'f″' }], draw);
  draw('f');
};

/* 5) prim-def — the antiderivative family F(x)=x²+C for f=2x. */
const primDef = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const base = compile('x^2');
  const view: View = { xmin: -3, xmax: 3, ymin: -4, ymax: 8 };
  const m = mapFor(view);
  axes(svg, m, view, { labels: true });
  const layer = el('g');
  svg.appendChild(layer);
  const shifted = (c: number): ((x: number) => number) => (x: number): number => base(x) + c;
  const draw = (c: number): void => {
    const g = el('g');
    for (const d of [-2, 2])
      g.appendChild(el('path', { d: fnPath(shifted(c + d), m, view) }, { fill: 'none', stroke: C.ink3, strokeWidth: '1.4' }));
    g.appendChild(el('path', { d: fnPath(shifted(c), m, view) }, { fill: 'none', stroke: C.accent, strokeWidth: '2.4' }));
    layer.replaceChildren(g);
    out.textContent =
      `كل التوابع الأصلية لـ f(x)=2x هي F(x)=x²+C. تختلف بالإزاحة الشاقولية C فقط ولها الميل نفسه عند كل x. C = ${fmt(c)}`;
  };
  slider(ctl, { min: -3, max: 3, step: 0.5, value: 0, label: 'الثابت C', on: draw });
  draw(0);
};

/* 6) prim-rules — F=sin x is an antiderivative of f=cos x (F′=f). */
const primRules = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const F = compile('sin(x)'), f = compile('cos(x)');
  const view: View = { xmin: -3.4, xmax: 3.4, ymin: -1.6, ymax: 1.6 };
  const m = mapFor(view);
  axes(svg, m, view, { labels: true });
  svg.appendChild(el('path', { d: fnPath(F, m, view) }, { fill: 'none', stroke: C.ink, strokeWidth: '2' }));
  svg.appendChild(el('path', { d: fnPath(f, m, view) }, { fill: 'none', stroke: C.accent, strokeWidth: '2', strokeDasharray: '5 4' }));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (x: number): void => {
    const g = el('g');
    const slope = Math.cos(x), Fx = F(x), r = 0.7;
    const tan = (t: number): number => Fx + slope * (t - x);
    g.appendChild(line(m.X(x - r), m.Y(tan(x - r)), m.X(x + r), m.Y(tan(x + r)), C.accentBright, 2.4));
    g.appendChild(dot(m.X(x), m.Y(Fx), 4, C.ink));
    g.appendChild(dot(m.X(x), m.Y(f(x)), 4, C.accent));
    layer.replaceChildren(g);
    out.textContent =
      `F(x)=sin x تابعٌ أصليّ لـ f(x)=cos x لأنّ F′=cos x. ميل F عند x = f(x) = cos(x) = ${fmt(f(x))}`;
  };
  slider(ctl, { min: -3.2, max: 3.2, step: 0.1, value: 0.8, label: 'x', on: draw });
  draw(0.8);
};

/* 7) integral-def — midpoint Riemann sum for ∫₀³ x² dx = 9. */
const integralDef = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const f = compile('x^2');
  const view: View = { xmin: -0.4, xmax: 3.3, ymin: -0.6, ymax: 9.6 };
  const m = mapFor(view);
  axes(svg, m, view, { labels: true });
  svg.appendChild(el('path', { d: fnPath(f, m, view) }, { fill: 'none', stroke: C.ink, strokeWidth: '2' }));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (n: number): void => {
    const g = el('g');
    const dx = 3 / n;
    let sum = 0;
    const y0 = m.Y(0);
    for (let i = 0; i < n; i++) {
      const mid = (i + 0.5) * dx, h = f(mid);
      sum += h * dx;
      const top = m.Y(h);
      g.appendChild(el('rect',
        { x: m.X(i * dx), y: top, width: m.X((i + 1) * dx) - m.X(i * dx), height: y0 - top },
        { fill: C.wash1, stroke: C.accent, strokeWidth: '0.8' }));
    }
    layer.replaceChildren(g);
    out.textContent =
      `n=${fmt(n, 0)} ، المجموع ≈ ${fmt(sum)} ، القيمة الدقيقة ∫₀³x²dx = 9. كلّما زاد n اقترب المجموع من 9`;
  };
  slider(ctl, { min: 1, max: 40, step: 1, value: 6, label: 'عدد المستطيلات n', on: draw });
  draw(6);
};

/* 8) integral-area — area between y=2x (top) and y=x² (bottom) from 0 to b. */
const integralArea = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const top = compile('2*x'), bot = compile('x^2');
  const view: View = { xmin: -0.4, xmax: 2.6, ymin: -0.4, ymax: 4.4 };
  const m = mapFor(view);
  axes(svg, m, view, { labels: true });
  const layer = el('g');
  svg.appendChild(layer);
  svg.appendChild(el('path', { d: fnPath(top, m, view) }, { fill: 'none', stroke: C.ink, strokeWidth: '2' }));
  svg.appendChild(el('path', { d: fnPath(bot, m, view) }, { fill: 'none', stroke: C.ink, strokeWidth: '2' }));
  const draw = (b: number): void => {
    const N = 60;
    let d = '';
    for (let i = 0; i <= N; i++) {
      const x = (b * i) / N;
      d += (i === 0 ? 'M' : 'L') + m.X(x).toFixed(1) + ' ' + m.Y(top(x)).toFixed(1) + ' ';
    }
    for (let i = N; i >= 0; i--) {
      const x = (b * i) / N;
      d += 'L' + m.X(x).toFixed(1) + ' ' + m.Y(bot(x)).toFixed(1) + ' ';
    }
    const poly = el('path', { d: d + 'Z' }, { fill: C.wash1, stroke: 'none' });
    layer.replaceChildren(poly);
    const area = b * b - (b * b * b) / 3;
    out.textContent =
      `المساحة بين y=2x و y=x² من 0 إلى b = ∫₀^b(2x−x²)dx = b²−b³/3 = ${fmt(area)} . عند b=2 تساوي 4/3 ≈ 1.333`;
  };
  slider(ctl, { min: 0, max: 2, step: 0.05, value: 2, label: 'الحدّ الأعلى b', on: draw });
  draw(2);
};

export const calculus: Record<string, (root: HTMLElement) => void> = {
  'deriv-def': derivDef, 'deriv-apps': derivApps, 'chain-rule': chainRule, 'higher-deriv': higherDeriv,
  'prim-def': primDef, 'prim-rules': primRules, 'integral-def': integralDef, 'integral-area': integralArea,
};
