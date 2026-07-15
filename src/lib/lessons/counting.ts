/* =============================================================================
   counting — interactive widgets for the "العدّ والاحتمالات" lessons.

   Combinatorics (arrangements, combinations, Pascal's triangle) and probability
   (conditional / Bayes, random variables, independence, the binomial law). Every
   widget is self-contained: it builds its own SVG scene from the shared svgkit
   primitives, bakes in verified math, and writes a live Arabic explanation into
   the readout. No auto-animation — motion comes only from the learner's controls.
   These stages are non-Cartesian: shapes are placed directly in 380×270 pixels.
   ============================================================================= */

import {
  W, PAD, C, el, fmt, line, dot, label,
  parts, slider,
  factorial, binom, arrange,
} from '@/lib/svgkit';

/* Local stage constant (svgkit exports W=380, PAD=30; this is the mid-x). */
const W2 = 190;

/* 1) count-arrangements — A(n,p) = n!/(n−p)! ordered selection -------------- */
const countArrangements = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g'); svg.appendChild(layer);
  let n = 5, p = 3;

  const draw = (): void => {
    layer.replaceChildren();
    const pp = Math.min(p, n);
    const span = 320, x0 = 30;
    for (let i = 0; i < n; i++) {
      const cx = n === 1 ? W2 : x0 + (span * i) / (n - 1);
      layer.appendChild(dot(cx, 70, 12, C.wash, C.line));
      layer.appendChild(label(cx, 74, String(i + 1), C.ink2, 11));
    }
    for (let i = 0; i < pp; i++) {
      const sx = pp === 1 ? W2 - 18 : 60 + (260 * i) / (pp - 1) - 18;
      layer.appendChild(el('rect', { x: sx, y: 132, width: 36, height: 36, rx: 8 },
        { fill: C.wash1, stroke: C.accent, strokeWidth: '1.6' }));
      layer.appendChild(dot(sx + 18, 150, 12, C.accent, C.paper));
      layer.appendChild(label(sx + 18, 154, String(i + 1), C.accentInk, 11));
    }
    layer.appendChild(label(W2, 200, `n = ${String(n)} ، p = ${String(pp)}`, C.ink3, 11));
    out.textContent = `A(n,p) = n!/(n−p)! = ${String(arrange(n, pp))} ، الترتيب مهمّ (اختيار مرتّب لـ p من n)`;
  };

  slider(ctl, { min: 1, max: 8, step: 1, value: 5, label: 'العدد الكلّي n', fmt: (v) => fmt(v, 0), on: (v) => { n = v; draw(); } });
  slider(ctl, { min: 0, max: 8, step: 1, value: 3, label: 'المختار p', fmt: (v) => fmt(v, 0), on: (v) => { p = v; draw(); } });
  draw();
};

/* 2) count-combinations — C(n,p) = binom(n,p) unordered subset ------------- */
const countCombinations = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g'); svg.appendChild(layer);
  let n = 5, p = 2;

  const draw = (): void => {
    layer.replaceChildren();
    const pp = Math.min(p, n);
    const span = 320, x0 = 30;
    for (let i = 0; i < n; i++) {
      const cx = n === 1 ? W2 : x0 + (span * i) / (n - 1);
      const on = i < pp;
      layer.appendChild(dot(cx, 118, 13, on ? C.accent : C.wash, on ? C.paper : C.line));
      layer.appendChild(label(cx, 122, String(i + 1), on ? C.accentInk : C.ink2, 11));
    }
    layer.appendChild(label(W2, 175, `اختيار ${String(pp)} من ${String(n)} — دون ترتيب`, C.ink3, 11));
    out.textContent = `C(n,p) = n!/[p!(n−p)!] = ${String(binom(n, pp))} ، الترتيب غير مهمّ. C(n,p) = A(n,p)/p! = ${fmt(arrange(n, pp) / factorial(pp), 2)}`;
  };

  slider(ctl, { min: 1, max: 8, step: 1, value: 5, label: 'العدد الكلّي n', fmt: (v) => fmt(v, 0), on: (v) => { n = v; draw(); } });
  slider(ctl, { min: 0, max: 8, step: 1, value: 2, label: 'المختار p', fmt: (v) => fmt(v, 0), on: (v) => { p = v; draw(); } });
  draw();
};

/* 3) count-pascal — clickable Pascal triangle (rows 0..6) ------------------ */
const countPascal = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g'); svg.appendChild(layer);
  const ROWS = 7;
  let selN = 4, selK = 2;

  const cellX = (n: number, k: number): number => 190 + (k - n / 2) * 40;
  const cellY = (n: number): number => 24 + n * 34;

  const draw = (): void => {
    layer.replaceChildren();
    const parents = new Set<string>([`${String(selN - 1)},${String(selK - 1)}`, `${String(selN - 1)},${String(selK)}`]);
    for (let n = 0; n < ROWS; n++) {
      for (let k = 0; k <= n; k++) {
        const cx = cellX(n, k), cy = cellY(n);
        const sel = n === selN && k === selK;
        const par = parents.has(`${String(n)},${String(k)}`);
        const fill = sel ? C.accent : par ? C.ok : C.wash;
        const c = dot(cx, cy, 13, fill, C.line);
        c.style.cursor = 'pointer';
        c.addEventListener('click', () => { selN = n; selK = k; draw(); });
        layer.appendChild(c);
        layer.appendChild(label(cx, cy + 4, String(binom(n, k)), sel ? C.accentInk : C.ink2, 10));
      }
    }
    if (selK >= 1 && selK <= selN - 1) {
      const a = binom(selN - 1, selK - 1), b = binom(selN - 1, selK);
      out.textContent = `C(n,k) = C(n−1,k−1) + C(n−1,k) = ${String(a)} + ${String(b)} = ${String(a + b)} (قاعدة باسكال)`;
    } else {
      out.textContent = 'طرف المثلّث يساوي 1 دائماً';
    }
  };

  const hint = document.createElement('p');
  hint.className = 'demo__hint';
  hint.textContent = 'انقر خليةً لترى كيف تُبنى من الخليتين فوقها';
  ctl.appendChild(hint);
  draw();
};

/* 4) prob-conditional — two-level probability tree + Bayes ----------------- */
const probConditional = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g'); svg.appendChild(layer);
  let PA = 0.4, PBA = 0.7, PBAbar = 0.3;

  const draw = (): void => {
    layer.replaceChildren();
    const rx = 40, ry = 135, mx = 165, ty = 75, by = 195;
    const lx = 300;
    // root → A / Ā
    layer.appendChild(line(rx, ry, mx, ty, C.accent, 2));
    layer.appendChild(line(rx, ry, mx, by, C.ink3, 2));
    layer.appendChild(label((rx + mx) / 2, ty + 22, `P(A)=${fmt(PA, 2)}`, C.accentInk, 10));
    layer.appendChild(label((rx + mx) / 2, by - 12, `P(Ā)=${fmt(1 - PA, 2)}`, C.ink3, 10));
    // A → B / B̄
    layer.appendChild(line(mx, ty, lx, ty - 40, C.accent, 1.6));
    layer.appendChild(line(mx, ty, lx, ty + 40, C.ink3, 1.6));
    layer.appendChild(label((mx + lx) / 2, ty - 40, `B: ${fmt(PBA, 2)}`, C.accentInk, 10));
    layer.appendChild(label((mx + lx) / 2, ty + 30, `B̄: ${fmt(1 - PBA, 2)}`, C.ink3, 10));
    // Ā → B / B̄
    layer.appendChild(line(mx, by, lx, by - 40, C.accent, 1.6));
    layer.appendChild(line(mx, by, lx, by + 40, C.ink3, 1.6));
    layer.appendChild(label((mx + lx) / 2, by - 30, `B: ${fmt(PBAbar, 2)}`, C.accentInk, 10));
    layer.appendChild(label((mx + lx) / 2, by + 48, `B̄: ${fmt(1 - PBAbar, 2)}`, C.ink3, 10));
    // nodes
    layer.appendChild(dot(rx, ry, 5, C.ink2));
    layer.appendChild(dot(mx, ty, 5, C.accent, C.paper));
    layer.appendChild(dot(mx, by, 5, C.ink3, C.paper));
    layer.appendChild(label(mx, ty - 10, 'A', C.ink2, 11));
    layer.appendChild(label(mx, by + 20, 'Ā', C.ink2, 11));

    const PB = PA * PBA + (1 - PA) * PBAbar;
    const PAB = (PA * PBA) / PB;
    out.textContent = `P(B)=P(A)P(B|A)+P(Ā)P(B|Ā) = ${fmt(PB, 3)} ، وبقانون بايز P(A|B)=P(A)P(B|A)/P(B) = ${fmt(PAB, 3)}`;
  };

  slider(ctl, { min: 0.1, max: 0.9, step: 0.05, value: 0.4, label: 'P(A)', fmt: (v) => fmt(v, 2), on: (v) => { PA = v; draw(); } });
  slider(ctl, { min: 0, max: 1, step: 0.05, value: 0.7, label: 'P(B|A)', fmt: (v) => fmt(v, 2), on: (v) => { PBA = v; draw(); } });
  slider(ctl, { min: 0, max: 1, step: 0.05, value: 0.3, label: 'P(B|Ā)', fmt: (v) => fmt(v, 2), on: (v) => { PBAbar = v; draw(); } });
  draw();
};

/* 5) prob-randomvar — X∈{0,1,2} bar chart with mean line ------------------- */
const probRandomVar = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g'); svg.appendChild(layer);
  let s1 = 0.4, s2 = 0.3;

  const cols = [110, 190, 270];
  const baseY = 220, maxH = 150;

  const draw = (): void => {
    layer.replaceChildren();
    let p1 = s1, p2 = s2;
    if (p1 + p2 > 1) { const s = 1 / (p1 + p2); p1 *= s; p2 *= s; }
    const p0 = 1 - p1 - p2;
    const ps = [p0, p1, p2];
    layer.appendChild(line(70, baseY, 310, baseY, C.line, 1.6));
    for (let x = 0; x < 3; x++) {
      const h = ps[x] * maxH;
      layer.appendChild(el('rect', { x: cols[x] - 26, y: baseY - h, width: 52, height: h, rx: 3 },
        { fill: x === 1 ? C.accent : C.wash1, stroke: C.accent, strokeWidth: '1.4' }));
      layer.appendChild(label(cols[x], baseY - h - 6, fmt(ps[x], 2), C.ink2, 10));
      layer.appendChild(label(cols[x], baseY + 15, `X=${String(x)}`, C.ink3, 10));
    }
    const E = 0 * p0 + 1 * p1 + 2 * p2;
    const V = (0 * p0 + 1 * p1 + 4 * p2) - E * E;
    const ex = cols[0] + (E / 2) * (cols[2] - cols[0]);
    layer.appendChild(line(ex, baseY, ex, 40, C.accentInk, 1.8, '5 4'));
    layer.appendChild(label(ex, 34, `E=${fmt(E, 2)}`, C.accentInk, 10));
    out.textContent = `E(X)=Σ x·P(X=x) = ${fmt(E, 3)} ، V(X)=Σx²·P − E² = ${fmt(V, 3)}`;
  };

  slider(ctl, { min: 0, max: 1, step: 0.05, value: 0.4, label: 'P(X=1)', fmt: (v) => fmt(v, 2), on: (v) => { s1 = v; draw(); } });
  slider(ctl, { min: 0, max: 1, step: 0.05, value: 0.3, label: 'P(X=2)', fmt: (v) => fmt(v, 2), on: (v) => { s2 = v; draw(); } });
  draw();
};

/* 6) prob-independence — two events on a unit square ----------------------- */
const probIndependence = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g'); svg.appendChild(layer);
  let PA = 0.5, PB = 0.4, inter = 0.2;

  const S = 150, ox = 40, oy = 45;
  const draw = (): void => {
    layer.replaceChildren();
    const pi = Math.min(inter, PA, PB);
    const wA = PA * S, hB = PB * S;
    // event A: left vertical strip
    layer.appendChild(el('rect', { x: ox, y: oy, width: wA, height: S },
      { fill: C.wash1, stroke: 'none', opacity: '0.55' }));
    // event B: bottom horizontal strip
    layer.appendChild(el('rect', { x: ox, y: oy + S - hB, width: S, height: hB },
      { fill: C.okWash, stroke: 'none', opacity: '0.55' }));
    // intersection: area = pi, width wA, height (pi/PA)*S, in bottom-left corner
    const hI = (pi / PA) * S;
    layer.appendChild(el('rect', { x: ox, y: oy + S - hI, width: wA, height: hI },
      { fill: 'none', stroke: C.accent, strokeWidth: '2' }));
    layer.appendChild(el('rect', { x: ox, y: oy, width: S, height: S },
      { fill: 'none', stroke: C.line, strokeWidth: '1.6' }));
    layer.appendChild(label(ox + wA / 2, oy + 14, 'A', C.accentInk, 11));
    layer.appendChild(label(ox + S - 12, oy + S - hB / 2, 'B', C.ok, 11));
    layer.appendChild(label(ox + wA / 2, oy + S - hI / 2 + 4, 'A∩B', C.accentInk, 10));

    const independent = Math.abs(pi - PA * PB) < 0.01;
    out.textContent = `P(A)·P(B) = ${fmt(PA * PB, 3)} ، P(A∩B) = ${fmt(pi, 3)}` + (independent ? ' ⇒ مستقلّان ✔' : ' ⇒ غير مستقلّين');
    out.style.color = independent ? C.ok : '';
  };

  slider(ctl, { min: 0.1, max: 0.9, step: 0.05, value: 0.5, label: 'P(A)', fmt: (v) => fmt(v, 2), on: (v) => { PA = v; draw(); } });
  slider(ctl, { min: 0.1, max: 0.9, step: 0.05, value: 0.4, label: 'P(B)', fmt: (v) => fmt(v, 2), on: (v) => { PB = v; draw(); } });
  slider(ctl, { min: 0, max: 0.9, step: 0.05, value: 0.2, label: 'P(A∩B)', fmt: (v) => fmt(v, 2), on: (v) => { inter = v; draw(); } });
  draw();
};

/* 7) prob-binomial — binomial distribution bars ---------------------------- */
const probBinomial = (root: HTMLElement): void => {
  const { svg, ctl, out } = parts(root);
  const layer = el('g'); svg.appendChild(layer);
  let n = 10, p = 0.4;

  const baseY = 235, maxH = 180;
  const draw = (): void => {
    layer.replaceChildren();
    const bw = (W - 2 * PAD) / (n + 1);
    const probs: number[] = [];
    let mx = 0;
    for (let k = 0; k <= n; k++) {
      const pr = binom(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
      probs.push(pr);
      if (pr > mx) mx = pr;
    }
    layer.appendChild(line(PAD, baseY, W - PAD, baseY, C.line, 1.6));
    for (let k = 0; k <= n; k++) {
      const h = mx > 0 ? (probs[k] / mx) * maxH : 0;
      const bx = PAD + k * bw;
      layer.appendChild(el('rect', { x: bx + 1, y: baseY - h, width: Math.max(bw - 2, 1), height: h, rx: 1.5 },
        { fill: C.wash1, stroke: C.accent, strokeWidth: '1.2' }));
      if (n <= 12) layer.appendChild(label(bx + bw / 2, baseY + 12, String(k), C.ink3, 9));
    }
    const E = n * p;
    const ex = PAD + (E + 0.5) * bw;
    layer.appendChild(line(ex, baseY, ex, 30, C.accentInk, 1.8, '5 4'));
    layer.appendChild(label(ex, 24, 'E(X)', C.accentInk, 10));
    out.textContent = `توزيع حدّاني: n=${String(n)} ، p=${fmt(p, 2)} ، الأمل E(X)=np=${fmt(E, 2)} ، التباين V(X)=np(1−p)=${fmt(n * p * (1 - p), 2)}`;
  };

  slider(ctl, { min: 1, max: 15, step: 1, value: 10, label: 'عدد التجارب n', fmt: (v) => fmt(v, 0), on: (v) => { n = v; draw(); } });
  slider(ctl, { min: 0.05, max: 0.95, step: 0.05, value: 0.4, label: 'احتمال النجاح p', fmt: (v) => fmt(v, 2), on: (v) => { p = v; draw(); } });
  draw();
};

/* --------------------------------------------------------------------------
   Public registry — keys match the lesson `type` in src/data/lessonTools.ts.
   -------------------------------------------------------------------------- */
export const counting: Record<string, (root: HTMLElement) => void> = {
  'count-arrangements': countArrangements,
  'count-combinations': countCombinations,
  'count-pascal': countPascal,
  'prob-conditional': probConditional,
  'prob-randomvar': probRandomVar,
  'prob-independence': probIndependence,
  'prob-binomial': probBinomial,
};
