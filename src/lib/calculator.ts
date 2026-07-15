/* =============================================================================
   Calculator engine. A normal, keyboard-friendly calculator built on the safe
   `mathexpr` compiler (no eval). Progressive: if this never runs, the markup is
   still an inert, readable keypad.

   Hidden feature (kept a secret — no on-screen hint): pressing "=" on exactly
     1 + 1  → reveals the Book 1 download card
     2 + 2  → reveals the Book 2 download card
   Any other calculation hides the cards again.
   ============================================================================= */

import { compile } from './mathexpr';

/** Turn the internal ASCII expression into a nicely-typeset display string. */
function pretty(expr: string): string {
  return expr
    .replace(/\bsqrt\(/g, '√(')
    .replace(/\bpi\b/g, 'π')
    .replace(/\*/g, ' × ')
    .replace(/\//g, ' ÷ ')
    .replace(/-/g, ' − ')
    .replace(/\+/g, ' + ')
    .replace(/\s+/g, ' ')
    .trim();
}

function fmt(n: number): string {
  if (!isFinite(n)) return n > 0 ? '∞' : '−∞';
  const r = Math.round(n * 1e8) / 1e8;
  return Object.is(r, -0) ? '0' : String(r);
}

function mountCalc(root: HTMLElement): void {
  const exprEl = root.querySelector<HTMLElement>('[data-calc-expr]');
  const resEl = root.querySelector<HTMLElement>('[data-calc-result]');
  const booksWrap = root.querySelector<HTMLElement>('[data-calc-books]');
  if (!exprEl || !resEl) return;

  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-book]'));
  let expr = '';

  const hideBooks = (): void => {
    booksWrap?.setAttribute('hidden', '');
    cards.forEach((c) => { c.hidden = true; c.classList.remove('is-revealed'); });
  };
  const showBook = (id: string): void => {
    booksWrap?.removeAttribute('hidden');
    cards.forEach((c) => { c.hidden = c.dataset.book !== id; });
    const card = cards.find((c) => c.dataset.book === id);
    if (card) {
      // restart the reveal animation
      card.classList.remove('is-revealed');
      void card.offsetWidth;
      card.classList.add('is-revealed');
    }
    booksWrap?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const renderExpr = (): void => { exprEl.textContent = pretty(expr) || '0'; };

  const preview = (): void => {
    if (!expr) { resEl.textContent = ''; return; }
    try {
      const v = compile(expr)(0);
      resEl.textContent = isFinite(v) ? '= ' + fmt(v) : '';
    } catch {
      resEl.textContent = '';
    }
  };

  const insert = (s: string): void => { expr += s; renderExpr(); preview(); };

  const backspace = (): void => {
    if (expr.endsWith('sqrt(')) expr = expr.slice(0, -5);
    else if (expr.endsWith('pi')) expr = expr.slice(0, -2);
    else expr = expr.slice(0, -1);
    renderExpr();
    preview();
  };

  const clearAll = (): void => { expr = ''; renderExpr(); resEl.textContent = ''; hideBooks(); };

  const equals = (): void => {
    const norm = expr.replace(/\s+/g, '');
    // — the secret —
    if (norm === '1+1') { resEl.textContent = '= 2'; showBook('book-1'); return; }
    if (norm === '2+2') { resEl.textContent = '= 4'; showBook('book-2'); return; }
    hideBooks();
    if (!expr) { resEl.textContent = ''; return; }
    try {
      const v = compile(expr)(0);
      resEl.textContent = isFinite(v) ? '= ' + fmt(v) : 'غير معرّف';
    } catch {
      resEl.textContent = 'خطأ في التعبير';
    }
  };

  const run = (key: string): void => {
    if (key === 'clear') clearAll();
    else if (key === 'back') backspace();
    else if (key === 'equals') equals();
    else insert(key);
  };

  root.querySelectorAll<HTMLButtonElement>('[data-key]').forEach((btn) => {
    btn.addEventListener('click', () => run(btn.dataset.key ?? ''));
  });

  // physical keyboard — only while the calculator has focus, so it never hijacks
  // the page. The keypad wrapper is focusable (tabindex="0").
  root.addEventListener('keydown', (e: KeyboardEvent) => {
    const k = e.key;
    if (/^[0-9.]$/.test(k)) { insert(k); e.preventDefault(); }
    else if (k === '+' || k === '-' || k === '*' || k === '/' || k === '^' || k === '(' || k === ')') { insert(k); e.preventDefault(); }
    else if (k === 'Enter' || k === '=') { equals(); e.preventDefault(); }
    else if (k === 'Backspace') { backspace(); e.preventDefault(); }
    else if (k === 'Escape' || k === 'Delete') { clearAll(); e.preventDefault(); }
  });

  renderExpr();
}

export function initCalculators(): void {
  document.querySelectorAll<HTMLElement>('[data-calc]').forEach((root) => {
    if (root.dataset.mounted) return;
    try { mountCalc(root); root.dataset.mounted = '1'; } catch { /* keep static keypad */ }
  });
}
