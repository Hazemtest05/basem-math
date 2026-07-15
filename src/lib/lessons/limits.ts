/* =============================================================================
   limits — interactive SVG widgets for the "limits & continuity" lessons.

   Every widget is self-contained: it bakes in its own verified example math,
   draws a static grid once via axes(), and redraws its live layer through a
   single group + replaceChildren(). Controls live in `ctl`, the live Arabic
   readout in `out.textContent`, and all numbers are formatted with fmt().
   ============================================================================= */

import { compile } from '@/lib/mathexpr';
import {
  C, type View, type Map2, el, mapFor, fmt, line, dot, label, axes, fnPath,
  parts, slider, stepper,
} from '@/lib/svgkit';

/* 1) lim-infinity — horizontal asymptote y=2, vertical asymptote x=1. */
const limInfinity = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -3, xmax: 12, ymin: -4, ymax: 8 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view);
  const f = compile('(2*x+1)/(x-1)');
  svg.appendChild(el('path', { d: fnPath(f, m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2' }));
  svg.appendChild(line(m.X(view.xmin), m.Y(2), m.X(view.xmax), m.Y(2), C.ink3, 1.5, '5 4'));
  svg.appendChild(line(m.X(1), m.Y(view.ymin), m.X(1), m.Y(view.ymax), C.ink3, 1.5, '5 4'));
  svg.appendChild(label(m.X(view.xmax) - 22, m.Y(2) - 6, 'y = 2', C.accentInk, 11, 'end'));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (x: number): void => {
    const y = f(x);
    layer.replaceChildren(dot(m.X(x), m.Y(y), 5, C.accent, C.paper));
    out.textContent = `عند x=${fmt(x)} : f(x)=${fmt(y)} ، والفرق عن 2 = ${fmt(y - 2)} . كلّما كبر x اقترب f(x) من 2`;
  };
  slider(ctl, { min: 1.6, max: 12, step: 0.2, value: 3, label: 'x نحو اللانهاية', on: draw });
  draw(3);
};

/* 2) lim-point — removable hole at (1,2): f(x)=(x²−1)/(x−1)=x+1 for x≠1. */
const limPoint = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -2, xmax: 4, ymin: -1, ymax: 5 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view);
  svg.appendChild(line(m.X(view.xmin), m.Y(view.xmin + 1), m.X(view.xmax), m.Y(view.xmax + 1), C.ink, 2));
  svg.appendChild(dot(m.X(1), m.Y(2), 4.5, C.paper, C.ink));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (raw: number): void => {
    const x = raw === 1 ? 1.0001 : raw;
    const y = x + 1;
    layer.replaceChildren(dot(m.X(x), m.Y(y), 5, C.accent, C.paper));
    out.textContent = `f(x)=(x²−1)/(x−1)=x+1 لكل x≠1. عند x=${fmt(x)} f(x)=${fmt(y)} . حين x→1 من الجهتين f(x)→2، مع أنّ f(1) غير معرّف (ثقب)`;
  };
  slider(ctl, { min: -1, max: 3, step: 0.05, value: 1.6, label: 'x يقترب من 1', on: draw });
  draw(1.6);
};

/* 3) lim-indeterminate — table-first 0/0: f(x)=(x²−4)/(x−2)=x+2, hole (2,4). */
const limIndeterminate = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: 0, xmax: 4, ymin: 2, ymax: 6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  svg.appendChild(line(m.X(view.xmin), m.Y(view.xmin + 2), m.X(view.xmax), m.Y(view.xmax + 2), C.ink, 2));
  svg.appendChild(dot(m.X(2), m.Y(4), 4.5, C.paper, C.ink));
  const table = document.createElement('table');
  table.className = 'demo__table';
  const caption = document.createElement('caption');
  caption.textContent = 'الاقتراب من x=2';
  table.appendChild(caption);
  const head = document.createElement('tr');
  const thX = document.createElement('th'); thX.textContent = 'x';
  const thF = document.createElement('th'); thF.textContent = 'f(x)';
  head.append(thX, thF);
  table.appendChild(head);
  const xs = [1.9, 1.99, 1.999, 2.001, 2.01, 2.1];
  for (const x of xs) {
    const tr = document.createElement('tr');
    if (x === 1.999 || x === 2.001) tr.className = 'is-hl';
    const tdX = document.createElement('td'); tdX.textContent = fmt(x, 3);
    const tdF = document.createElement('td'); tdF.textContent = fmt(x + 2, 3);
    tr.append(tdX, tdF);
    table.appendChild(tr);
  }
  ctl.appendChild(table);
  out.textContent = '0/0 شكل غير معيّن. بعد التبسيط: f(x)=(x−2)(x+2)/(x−2)=x+2 ⇒ النهاية = 4';
};

/* 4) lim-squeeze — −1/x ≤ sin(x)/x ≤ 1/x on x≥1, all → 0. */
const limSqueeze = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: 1, xmax: 16, ymin: -0.6, ymax: 0.6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view);
  const h = compile('1/x');
  const g = compile('-1/x');
  const f = compile('sin(x)/x');
  svg.appendChild(el('path', { d: fnPath(h, m, view), fill: 'none' }, { stroke: C.ink3, strokeWidth: '1.6' }));
  svg.appendChild(el('path', { d: fnPath(g, m, view), fill: 'none' }, { stroke: C.ink3, strokeWidth: '1.6' }));
  svg.appendChild(el('path', { d: fnPath(f, m, view), fill: 'none' }, { stroke: C.accent, strokeWidth: '2' }));
  svg.appendChild(line(m.X(view.xmin), m.Y(0), m.X(view.xmax), m.Y(0), C.ink3, 1.4, '5 4'));
  svg.appendChild(label(m.X(view.xmax) - 22, m.Y(0) - 6, 'L = 0', C.accentInk, 11, 'end'));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (x: number): void => {
    const y = f(x);
    layer.replaceChildren(dot(m.X(x), m.Y(y), 5, C.accent, C.paper));
    out.textContent = `g(x)=−1/x ≤ f(x)=sin x / x ≤ h(x)=1/x. الحدّان يؤولان إلى 0 ⇒ f→0 (مبرهنة الحصر). f(x)=${fmt(y)}`;
  };
  slider(ctl, { min: 1, max: 16, step: 0.2, value: 4, label: 'x', on: draw });
  draw(4);
};

/* 5) lim-composed — √(4x²+1)/x → 2 as x→∞ (inner 4+1/x²→4, outer √→2). */
const limComposed = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: 0.3, xmax: 12, ymin: 0, ymax: 6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view);
  const f = compile('sqrt(4*x^2+1)/x');
  svg.appendChild(el('path', { d: fnPath(f, m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2' }));
  svg.appendChild(line(m.X(view.xmin), m.Y(2), m.X(view.xmax), m.Y(2), C.ink3, 1.5, '5 4'));
  svg.appendChild(label(m.X(view.xmax) - 22, m.Y(2) - 6, 'y = 2', C.accentInk, 11, 'end'));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (x: number): void => {
    const y = f(x);
    layer.replaceChildren(dot(m.X(x), m.Y(y), 5, C.accent, C.paper));
    out.textContent = `المقدار الداخلي 4+1/x² → 4، ثمّ الجذر → 2. إذن f(x)=√(4x²+1)/x → 2 (نهاية تابع مركّب). f(x)=${fmt(y)}`;
  };
  slider(ctl, { min: 0.6, max: 12, step: 0.2, value: 3, label: 'x نحو اللانهاية', on: draw });
  draw(3);
};

/* 6) lim-oblique — f(x)=x+1/x, oblique asymptote y=x, vertical x=0. */
const limOblique = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view);
  const f = compile('x+1/x');
  svg.appendChild(el('path', { d: fnPath(f, m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2' }));
  svg.appendChild(line(m.X(view.xmin), m.Y(view.xmin), m.X(view.xmax), m.Y(view.xmax), C.ink3, 1.5, '5 4'));
  svg.appendChild(label(m.X(view.xmax) - 18, m.Y(view.xmax) + 14, 'y = x', C.accentInk, 11, 'end'));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (x: number): void => {
    const y = f(x);
    const grp = el('g');
    grp.appendChild(line(m.X(x), m.Y(x), m.X(x), m.Y(y), C.accentInk, 1.6));
    grp.appendChild(dot(m.X(x), m.Y(y), 5, C.accent, C.paper));
    layer.replaceChildren(grp);
    out.textContent = `المقارب المائل y=x. الفرق f(x)−x = 1/x = ${fmt(1 / x)} → 0 حين x→∞`;
  };
  slider(ctl, { min: 0.4, max: 6, step: 0.1, value: 2, label: 'x', on: draw });
  draw(2);
};

/* 7) continuity — piecewise jump: L(x)=x+1 on x≤1, R(x)=2x+j on x>1. */
const continuity = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: -1, xmax: 4, ymin: -1, ymax: 7 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view);
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (j: number): void => {
    const grp = el('g');
    grp.appendChild(line(m.X(-1), m.Y(0), m.X(1), m.Y(2), C.ink, 2));
    grp.appendChild(dot(m.X(1), m.Y(2), 4.5, C.ink, C.paper));
    const rL = 2 + j;
    const rR = 2 * 4 + j;
    grp.appendChild(line(m.X(1), m.Y(rL), m.X(4), m.Y(rR), C.ink, 2));
    grp.appendChild(dot(m.X(1), m.Y(rL), 4.5, C.paper, C.ink));
    layer.replaceChildren(grp);
    if (Math.abs(j) < 0.05) {
      out.style.color = C.ok;
      out.textContent = `القفزة عند x=1 تساوي j = ${fmt(j)} . مستمر ✔`;
    } else {
      out.style.color = '';
      out.textContent = `القفزة عند x=1 تساوي j = ${fmt(j)} . غير مستمر (قفزة). التابع مستمرٌّ عند 1 ⟺ j=0`;
    }
  };
  slider(ctl, { min: -2, max: 2, step: 0.1, value: 1, label: 'مقدار القفزة j', on: draw });
  draw(1);
};

/* 8) ivt — bisection for x³−x−2 on [1,2] (root ≈ 1.5214). */
const ivt = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const view: View = { xmin: 0.8, xmax: 2.2, ymin: -3, ymax: 5 };
  const m: Map2 = mapFor(view);
  axes(svg, m, view, { labels: true });
  const f = compile('x^3 - x - 2');
  svg.appendChild(el('path', { d: fnPath(f, m, view), fill: 'none' }, { stroke: C.ink, strokeWidth: '2' }));
  const layer = el('g');
  svg.appendChild(layer);
  const draw = (steps: number): void => {
    let a = 1, b = 2;
    for (let k = 0; k < steps; k++) {
      const mid = (a + b) / 2;
      if (f(a) * f(mid) <= 0) b = mid; else a = mid;
    }
    const mid = (a + b) / 2;
    const grp = el('g');
    grp.appendChild(el('rect', {
      x: m.X(a), y: m.Y(view.ymax), width: m.X(b) - m.X(a), height: m.Y(view.ymin) - m.Y(view.ymax),
    }, { fill: C.wash1 }));
    grp.appendChild(line(m.X(a), m.Y(view.ymin), m.X(a), m.Y(view.ymax), C.ink3, 1.4, '4 3'));
    grp.appendChild(line(m.X(b), m.Y(view.ymin), m.X(b), m.Y(view.ymax), C.ink3, 1.4, '4 3'));
    grp.appendChild(line(m.X(mid), m.Y(view.ymin), m.X(mid), m.Y(view.ymax), C.accentInk, 1.6));
    grp.appendChild(dot(m.X(a), m.Y(f(a)), 4.5, C.accent, C.paper));
    grp.appendChild(dot(m.X(b), m.Y(f(b)), 4.5, C.accent, C.paper));
    layer.replaceChildren(grp);
    const fm = f(mid);
    const sign = fm < 0 ? 'سالبة' : 'موجبة';
    out.textContent = `[a,b]=[${fmt(a, 3)},${fmt(b, 3)}] ، المنتصف m=${fmt(mid, 3)} ، f(m)=${fmt(fm, 3)} (إشارته ${sign}). نُبقي نصف المجال الذي تتغيّر فيه الإشارة`;
  };
  stepper(ctl, 7, draw, (i: number): string => `${i} خطوة`);
};

export const limits: Record<string, (root: HTMLElement) => void> = {
  'lim-infinity': limInfinity, 'lim-point': limPoint, 'lim-indeterminate': limIndeterminate,
  'lim-squeeze': limSqueeze, 'lim-composed': limComposed, 'lim-oblique': limOblique,
  'continuity': continuity, 'ivt': ivt,
};
