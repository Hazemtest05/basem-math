/* =============================================================================
   sequences — interactive widgets for the "المتتاليات ونهاياتها" lessons.

   Every widget is self-contained: it builds its own SVG scene from the shared
   svgkit primitives, bakes in verified example math, and writes a live Arabic
   explanation into the readout. No auto-animation — motion comes only from the
   learner's controls. Coordinate rule: data values are converted to pixels via
   m.X / m.Y before they touch line / dot / label / arrow.
   ============================================================================= */

import { compile } from '@/lib/mathexpr';
import {
  C, el, mapFor, fmt, line, dot, label, axes, fnPath,
  parts, slider, segButton, stepper,
  type View, type Map2,
} from '@/lib/svgkit';

/* 1) seq-basics — arithmetic / geometric dot plot ------------------------- */
const seqBasics = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -0.5, xmax: 9.5, ymin: -1, ymax: 9 };
  const m: Map2 = mapFor(v);
  axes(svg, m, v, { labels: true });
  const layer = el('g'); svg.appendChild(layer);

  let mode: 'arith' | 'geo' = 'arith';
  let p = 1;

  const term = (n: number): number => mode === 'arith' ? 1 + n * p : Math.pow(p, n);

  const draw = (): void => {
    layer.replaceChildren();
    const pts: { n: number; px: number; py: number }[] = [];
    for (let n = 0; n <= 9; n++) {
      const y = term(n);
      if (y < v.ymin || y > v.ymax) continue;
      pts.push({ n, px: m.X(n), py: m.Y(y) });
    }
    if (pts.length > 1) {
      const poly = el('polyline', {
        points: pts.map((q) => `${q.px},${q.py}`).join(' '),
        'stroke-dasharray': '4 4',
      }, { fill: 'none', stroke: C.ink3, strokeWidth: '1.6' });
      layer.appendChild(poly);
    }
    for (const q of pts) layer.appendChild(dot(q.px, q.py, 4, C.accent, C.paper));

    if (mode === 'arith') {
      const trend = p > 0 ? 'متزايدة' : p < 0 ? 'متناقصة' : 'ثابتة';
      out.textContent = `متتالية حسابية uₙ=1+n·(${fmt(p)}): ${trend}`;
    } else {
      const trend = Math.abs(p) < 1 ? 'متقاربة نحو 0 إن |r|<1' : p > 1 ? 'متباعدة إن r>1' : 'ثابتة إن r=1';
      out.textContent = `متتالية هندسية uₙ=(${fmt(p)})ⁿ: ${trend}`;
    }
  };

  const sld = slider(ctl, { min: -1.5, max: 1.5, step: 0.25, value: 1, label: 'الأساس / الفرق', fmt: (n) => fmt(n), on: (n) => { p = n; draw(); } });
  segButton(ctl, [{ key: 'arith', label: 'حسابية' }, { key: 'geo', label: 'هندسية' }], (k) => {
    mode = k as 'arith' | 'geo';
    if (mode === 'arith') { sld.min = '-1.5'; sld.max = '1.5'; sld.step = '0.25'; sld.value = '1'; }
    else { sld.min = '0.25'; sld.max = '1.75'; sld.step = '0.25'; sld.value = '0.75'; }
    sld.dispatchEvent(new Event('input'));
  });
  draw();
};

/* 2) induction — falling-domino proof of 1+2+…+n = n(n+1)/2 --------------- */
const induction = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g'); svg.appendChild(layer);

  const N = 8, k = 4;
  const baseY = 200, top = 80, w = 14;
  const gap = 34, x0 = 60;

  const draw = (step: number): void => {
    layer.replaceChildren();
    for (let i = 0; i < N; i++) {
      const cx = x0 + i * gap;
      // "fallen" when i is within the currently-toppled prefix.
      const fallen = step === 0 ? i === 0 : step === 1 ? i <= k - 1 : true;
      const fill = step === 0 && i === 0 ? C.accent
        : step === 1 && i === k - 1 ? C.accentInk
        : fallen ? C.accent : C.ink3;
      const rect = el('rect', {
        x: cx - w / 2, y: top, width: w, height: baseY - top, rx: 2,
      }, { fill, opacity: fallen ? '1' : '0.45' });
      if (fallen) rect.setAttribute('transform', `rotate(-58 ${cx - w / 2} ${baseY})`);
      layer.appendChild(rect);
      layer.appendChild(label(cx, baseY + 16, fmt(i + 1, 0), C.ink3, 10));
    }
    if (step === 0) out.textContent = 'خطوة الأساس: عند n=1: 1 = 1·2/2 = 1 ✔';
    else if (step === 1) out.textContent = 'الفرض: نفترض صحّتها عند n=k: 1+2+…+k = k(k+1)/2';
    else out.textContent = 'التوريث: نضيف (k+1): k(k+1)/2 + (k+1) = (k+1)(k+2)/2 ✔ ⇒ صحيحة لكل n';
  };

  stepper(ctl, 3, (i) => draw(i), (i) => ['١ الأساس', '٢ الفرض', '٣ التوريث'][i]);
};

/* 3) seqlim-recall — uₙ = 2 + 2·rⁿ converging to L = 2 -------------------- */
const seqlimRecall = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -0.5, xmax: 13, ymin: -0.5, ymax: 4.5 };
  const m: Map2 = mapFor(v);
  axes(svg, m, v, { labels: true });
  const layer = el('g'); svg.appendChild(layer);

  let r = 0.6;
  const draw = (): void => {
    layer.replaceChildren();
    layer.appendChild(line(m.X(v.xmin), m.Y(2), m.X(v.xmax), m.Y(2), C.accentInk, 1.6, '5 4'));
    layer.appendChild(label(m.X(v.xmax) - 22, m.Y(2) - 6, 'L = 2', C.accentInk, 11));
    for (let n = 0; n <= 12; n++) {
      const y = 2 + 2 * Math.pow(r, n);
      if (y < v.ymin || y > v.ymax) continue;
      layer.appendChild(dot(m.X(n), m.Y(y), 3.5, C.accent, C.paper));
    }
    out.textContent = `uₙ = 2 + 2·(${fmt(r)})ⁿ. بما أنّ |r|<1 فإنّ (${fmt(r)})ⁿ→0 ومنه uₙ→2`;
  };

  slider(ctl, { min: -0.9, max: 0.9, step: 0.1, value: 0.6, label: 'الأساس r', fmt: (n) => fmt(n), on: (n) => { r = n; draw(); } });
  draw();
};

/* 4) seqlim-theorems — reference null sequences --------------------------- */
const seqlimTheorems = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -0.3, xmax: 13, ymin: -0.15, ymax: 1.15 };
  const m: Map2 = mapFor(v);
  axes(svg, m, v, { labels: true });
  const layer = el('g'); svg.appendChild(layer);

  let mode: 'inv' | 'sq' | 'geo' = 'inv';
  const draw = (): void => {
    layer.replaceChildren();
    layer.appendChild(line(m.X(v.xmin), m.Y(0), m.X(v.xmax), m.Y(0), C.accentInk, 1.6, '5 4'));
    layer.appendChild(label(m.X(v.xmax) - 22, m.Y(0) - 6, 'L = 0', C.accentInk, 11));
    const start = mode === 'geo' ? 0 : 1;
    for (let n = start; n <= 12; n++) {
      const y = mode === 'inv' ? 1 / n : mode === 'sq' ? 1 / (n * n) : Math.pow(0.7, n);
      if (y < v.ymin || y > v.ymax) continue;
      layer.appendChild(dot(m.X(n), m.Y(y), 3.5, C.accent, C.paper));
    }
    out.textContent = mode === 'inv'
      ? '1/n → 0 عندما n→∞ (متتالية آيلة للصفر)'
      : mode === 'sq'
        ? '1/n² → 0، وهي تقترب أسرع من 1/n'
        : '(0.7)ⁿ → 0: متتالية هندسية آيلة للصفر لأنّ |r|<1';
  };

  segButton(ctl, [{ key: 'inv', label: '1/n' }, { key: 'sq', label: '1/n²' }, { key: 'geo', label: '(0.7)ⁿ' }], (kk) => { mode = kk as 'inv' | 'sq' | 'geo'; draw(); });
  draw();
};

/* 5) seqlim-monotone — uₙ = 3n/(n+1) increasing, bounded by 3, → 3 -------- */
const seqlimMonotone = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: -0.3, xmax: 13, ymin: -0.2, ymax: 3.6 };
  const m: Map2 = mapFor(v);
  axes(svg, m, v, { labels: true });
  const layer = el('g'); svg.appendChild(layer);

  const u = (n: number): number => (3 * n) / (n + 1);
  let cur = 6;
  const draw = (): void => {
    layer.replaceChildren();
    layer.appendChild(line(m.X(v.xmin), m.Y(3), m.X(v.xmax), m.Y(3), C.accentInk, 1.6, '5 4'));
    layer.appendChild(label(m.X(v.xmax) - 22, m.Y(3) - 6, 'M = 3', C.accentInk, 11));
    for (let n = 0; n <= cur; n++) {
      const hot = n === cur;
      layer.appendChild(dot(m.X(n), m.Y(u(n)), hot ? 5 : 3.5, hot ? C.accentInk : C.accent, C.paper));
    }
    out.textContent = `uₙ = 3n/(n+1): متزايدة ومحدودة من الأعلى بـ3 ⇒ متقاربة. u_${fmt(cur, 0)}=${fmt(u(cur))}، والفرق عن 3 = ${fmt(3 - u(cur))}`;
  };

  slider(ctl, { min: 0, max: 12, step: 1, value: 6, label: 'الدليل n', fmt: (n) => fmt(n, 0), on: (n) => { cur = n; draw(); } });
  draw();
};

/* 6) seqlim-recursive — cobweb for uₙ₊₁ = (uₙ + 2/uₙ)/2 → √2 ------------- */
const seqlimRecursive = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const v: View = { xmin: 0, xmax: 3, ymin: 0, ymax: 3 };
  const m: Map2 = mapFor(v);
  axes(svg, m, v, { labels: true });

  const f = compile('(x + 2/x)/2');
  // static: identity line y=x and the map y=f(x)
  const stat = el('g'); svg.appendChild(stat);
  stat.appendChild(el('path', { d: `M${m.X(0)} ${m.Y(0)} L${m.X(3)} ${m.Y(3)}`, 'stroke-dasharray': '5 4' }, { fill: 'none', stroke: C.ink3, strokeWidth: '1.6' }));
  stat.appendChild(el('path', { d: fnPath(f, m, v) }, { fill: 'none', stroke: C.accentInk, strokeWidth: '2' }));

  const web = el('g'); svg.appendChild(web);
  const u0 = 2;

  const draw = (iters: number): void => {
    web.replaceChildren();
    let x = u0;
    for (let i = 0; i < iters; i++) {
      const fx = f(x);
      // vertical: from (x, x) on y=x up/down to (x, f(x)) on the curve
      web.appendChild(line(m.X(x), m.Y(x), m.X(x), m.Y(fx), C.accent, 1.8));
      // horizontal: from (x, f(x)) across to (f(x), f(x)) on y=x
      web.appendChild(line(m.X(x), m.Y(fx), m.X(fx), m.Y(fx), C.accent, 1.8));
      x = fx;
    }
    web.appendChild(dot(m.X(x), m.Y(x), 4.5, C.accent, C.paper));
    out.textContent = `uₙ₊₁=(uₙ+2/uₙ)/2. u_${fmt(iters, 0)}=${fmt(x, 4)} → يقترب من النقطة الثابتة √2 ≈ 1.4142`;
  };

  stepper(ctl, 6, (i) => draw(i));
};

/* --------------------------------------------------------------------------
   Public registry — keys match the lesson `type` in src/data/lessonTools.ts.
   -------------------------------------------------------------------------- */
export const sequences: Record<string, (root: HTMLElement) => void> = {
  'seq-basics': seqBasics,
  'induction': induction,
  'seqlim-recall': seqlimRecall,
  'seqlim-theorems': seqlimTheorems,
  'seqlim-monotone': seqlimMonotone,
  'seqlim-recursive': seqlimRecursive,
};
