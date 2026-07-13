/* =============================================================================
   texlite — a tiny, build-time LaTeX-subset → HTML typesetter.

   WHY: the site may use only the two local Madika fonts. KaTeX / MathJax ship
   their own math fonts, which the brief forbids. The curriculum guide's math is
   simple enough (fractions, powers, roots, limits, integrals, vectors, Greek)
   to typeset with plain HTML + CSS, styled in Madika. This runs in Astro
   frontmatter (server side), so there is zero client JS cost.

   Scope: the exact command subset used across curriculum.ts / lessons.ts /
   problems.ts. Unknown commands degrade gracefully to upright text.
   Inputs are trusted, author-controlled strings (no user input) — but we still
   HTML-escape raw text so `<`, `>`, `&` render literally.
   ============================================================================= */

const SYMBOLS: Record<string, string> = {
  // relations
  le: '≤', leq: '≤', ge: '≥', geq: '≥', ne: '≠', neq: '≠', equiv: '≡',
  approx: '≈', sim: '∼', propto: '∝', cong: '≅',
  // arrows
  to: '→', rightarrow: '→', longrightarrow: '⟶', Rightarrow: '⇒',
  implies: '⇒', iff: '⇔', Leftrightarrow: '⇔', mapsto: '↦', gets: '←',
  // operators
  pm: '±', mp: '∓', cdot: '·', times: '×', div: '÷', ast: '∗', circ: '∘',
  cap: '∩', cup: '∪', setminus: '∖', in: '∈', notin: '∉', subset: '⊂',
  subseteq: '⊆', forall: '∀', exists: '∃', partial: '∂', nabla: '∇',
  // symbols
  infty: '∞', ell: 'ℓ', pi: 'π', theta: 'θ', alpha: 'α', beta: 'β',
  gamma: 'γ', delta: 'δ', Delta: 'Δ', lambda: 'λ', mu: 'μ', sigma: 'σ',
  Sigma: 'Σ', omega: 'ω', Omega: 'Ω', varphi: 'φ', phi: 'φ', rho: 'ρ',
  tau: 'τ', epsilon: 'ε', varepsilon: 'ε', Gamma: 'Γ', Pi: 'Π',
  // blackboard (when used bare, e.g. from \mathbb handled separately)
  // big operators / named
  int: '∫', iint: '∬', oint: '∮', sum: '∑', prod: '∏', lim: 'lim',
  ln: 'ln', log: 'log', exp: 'exp', cos: 'cos', sin: 'sin', tan: 'tan',
  arg: 'arg', min: 'min', max: 'max', dim: 'dim', deg: 'deg',
  arctan: 'arctan', arcsin: 'arcsin', arccos: 'arccos', ker: 'ker',
  // spacing / no-ops handled in normalize
  quad: ' ', qquad: '  ',
  // delimiters
  langle: '⟨', rangle: '⟩', lvert: '|', rvert: '|', lVert: '‖', rVert: '‖',
};

const BB: Record<string, string> = { R: 'ℝ', N: 'ℕ', Z: 'ℤ', Q: 'ℚ', C: 'ℂ', P: 'ℙ', E: '𝔼' };

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Read a `{...}` group or a single atom (command or char) starting at i. */
function readArg(s: string, i: number): { body: string; next: number } {
  while (i < s.length && s[i] === ' ') i++;
  if (s[i] === '{') {
    let depth = 1;
    let j = i + 1;
    while (j < s.length && depth > 0) {
      if (s[j] === '{') depth++;
      else if (s[j] === '}') depth--;
      if (depth === 0) break;
      j++;
    }
    return { body: s.slice(i + 1, j), next: j + 1 };
  }
  if (s[i] === '\\') {
    let j = i + 1;
    if (j < s.length && /[a-zA-Z]/.test(s[j])) {
      while (j < s.length && /[a-zA-Z]/.test(s[j])) j++;
    } else {
      j++;
    }
    return { body: s.slice(i, j), next: j };
  }
  return { body: s[i] ?? '', next: i + 1 };
}

function normalize(src: string): string {
  return src
    .replace(/^\s*\\\[|\\\]\s*$/g, '')
    .replace(/^\s*\\\(|\\\)\s*$/g, '')
    .replace(/\\displaystyle|\\limits|\\!|\\,|\\;|\\:|\\ /g, ' ')
    .replace(/\\left|\\right/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function parse(s: string): string {
  let out = '';
  let i = 0;
  while (i < s.length) {
    const c = s[i];

    if (c === '\\') {
      const { body: cmdRaw, next } = readArg(s, i);
      const cmd = cmdRaw.slice(1);
      i = next;

      if (cmd === 'frac' || cmd === 'dfrac' || cmd === 'tfrac') {
        const numG = readArgGroup(s, i);
        const denG = readArgGroup(s, numG.next);
        i = denG.next;
        out += `<span class="mfrac"><span class="mnum">${parse(numG.body)}</span><span class="mden">${parse(denG.body)}</span></span>`;
        continue;
      }
      if (cmd === 'binom' || cmd === 'dbinom' || cmd === 'tbinom') {
        const topG = readArgGroup(s, i);
        const botG = readArgGroup(s, topG.next);
        i = botG.next;
        out += `<span class="mbinom"><span class="mparen">(</span><span class="mbinom-col"><span>${parse(topG.body)}</span><span>${parse(botG.body)}</span></span><span class="mparen">)</span></span>`;
        continue;
      }
      if (cmd === 'sqrt') {
        // optional index [n] ignored for simplicity
        if (s[i] === '[') { const close = s.indexOf(']', i); if (close !== -1) i = close + 1; }
        const g = readArgGroup(s, i);
        i = g.next;
        out += `<span class="msqrt"><span class="mroot">√</span><span class="mrad">${parse(g.body)}</span></span>`;
        continue;
      }
      if (cmd === 'vec' || cmd === 'overrightarrow') {
        const g = readArgGroup(s, i); i = g.next;
        out += `<span class="mvec">${parse(g.body)}</span>`;
        continue;
      }
      if (cmd === 'bar' || cmd === 'overline' || cmd === 'widebar') {
        const g = readArgGroup(s, i); i = g.next;
        out += `<span class="mbar">${parse(g.body)}</span>`;
        continue;
      }
      if (cmd === 'hat' || cmd === 'widehat') {
        const g = readArgGroup(s, i); i = g.next;
        out += `<span class="mhat">${parse(g.body)}</span>`;
        continue;
      }
      if (cmd === 'text' || cmd === 'mathrm' || cmd === 'operatorname' || cmd === 'mbox' || cmd === 'textrm') {
        const g = readArgGroup(s, i); i = g.next;
        out += `<span class="mtext">${esc(g.body)}</span>`;
        continue;
      }
      if (cmd === 'mathbb' || cmd === 'mathbf' || cmd === 'mathcal') {
        const g = readArgGroup(s, i); i = g.next;
        out += cmd === 'mathbb' ? (BB[g.body.trim()] ?? esc(g.body)) : `<span class="mcal">${parse(g.body)}</span>`;
        continue;
      }
      if (cmd === 'boxed') {
        const g = readArgGroup(s, i); i = g.next;
        out += `<span class="mboxed">${parse(g.body)}</span>`;
        continue;
      }
      if (cmd === 'begin' || cmd === 'end') {
        const g = readArgGroup(s, i); i = g.next; // consume {cases} etc.
        if (cmd === 'begin' && g.body === 'cases') {
          const endIdx = s.indexOf('\\end{cases}', i);
          const inner = endIdx === -1 ? s.slice(i) : s.slice(i, endIdx);
          i = endIdx === -1 ? s.length : endIdx + '\\end{cases}'.length;
          const rows = inner.split('\\\\').map((r) => r.trim()).filter(Boolean);
          const cells = rows
            .map((r) => `<span class="mcase-row">${r.split('&').map((c) => `<span>${parse(c)}</span>`).join('')}</span>`)
            .join('');
          out += `<span class="mcases"><span class="mcases-brace">{</span><span class="mcases-rows">${cells}</span></span>`;
        }
        continue;
      }

      // symbol / named operator
      if (SYMBOLS[cmd] !== undefined) {
        const named = ['ln', 'log', 'exp', 'cos', 'sin', 'tan', 'arg', 'min', 'max', 'lim', 'arctan', 'arcsin', 'arccos', 'dim', 'deg', 'ker'];
        out += named.includes(cmd) ? `<span class="mop">${SYMBOLS[cmd]}</span>` : SYMBOLS[cmd];
        continue;
      }
      // unknown command → strip backslash, keep letters as upright text
      out += `<span class="mtext">${esc(cmd)}</span>`;
      continue;
    }

    if (c === '^' || c === '_') {
      const g = readArgGroup(s, i + 1);
      i = g.next;
      out += c === '^' ? `<sup>${parse(g.body)}</sup>` : `<sub>${parse(g.body)}</sub>`;
      continue;
    }

    if (c === '{' || c === '}') { i++; continue; }

    // literal char
    out += esc(c);
    i++;
  }
  return out;
}

/** readArg but always advancing past leading spaces; used for command args. */
function readArgGroup(s: string, i: number): { body: string; next: number } {
  return readArg(s, i);
}

/** Public: render an inline LaTeX-subset string to HTML. */
export function tex(src: string): string {
  return `<span class="math" dir="ltr">${parse(normalize(src))}</span>`;
}

/** Render as a centered display block. */
export function texBlock(src: string): string {
  return `<span class="math math--block" dir="ltr">${parse(normalize(src))}</span>`;
}

/* Arabic words for operators/relations read more naturally aloud than raw
   symbols. Anything not here falls back to the visual SYMBOLS map, then is
   dropped if still unknown, so a screen reader never hears "backslash dfrac". */
const SPEECH_WORDS: Record<string, string> = {
  times: ' ضرب ', cdot: ' ضرب ', div: ' على ', pm: ' زائد أو ناقص ', mp: ' ناقص أو زائد ',
  to: ' تسعى إلى ', infty: ' اللانهاية ', le: ' أصغر أو يساوي ', leq: ' أصغر أو يساوي ',
  ge: ' أكبر أو يساوي ', geq: ' أكبر أو يساوي ', ne: ' لا يساوي ', neq: ' لا يساوي ',
  Rightarrow: ' إذن ', implies: ' إذن ', iff: ' يكافئ ', Leftrightarrow: ' يكافئ ',
  cap: ' تقاطع ', cup: ' اتحاد ', in: ' ينتمي إلى ', notin: ' لا ينتمي إلى ',
  lim: ' نهاية ', sum: ' مجموع ', int: ' تكامل ', cdots: ' … ', ldots: ' … ', quad: ' ', qquad: ' ',
};

/** Public: a readable (Arabic) spoken form of a LaTeX-subset string, for use as
    an aria-label so assistive tech never announces raw LaTeX source. */
export function texToSpeech(src: string): string {
  let s = src;
  // environments, delimiters and spacing macros first, before any brace stripping
  s = s.replace(/\\left|\\right|\\displaystyle|\\limits|\\!|\\,|\\;|\\:|\\lvert|\\rvert|\\lVert|\\rVert|\\\||\\big[lr]?|\\Big[lr]?/g, ' ');
  s = s.replace(/\\begin\{[a-zA-Z*]*\}/g, ' ').replace(/\\end\{[a-zA-Z*]*\}/g, ' ');
  s = s.replace(/\\\\/g, ' ، ');
  // structural macros, innermost-first (repeat to resolve nesting)
  for (let i = 0; i < 8; i++) {
    const before = s;
    s = s
      .replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, ' $1 على $2 ')
      .replace(/\\binom\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, ' توافيق $1 من $2 ')
      .replace(/\\sqrt\s*\{([^{}]*)\}/g, ' جذر $1 ')
      .replace(/\\(?:vec|overrightarrow)\s*\{([^{}]*)\}/g, ' الشعاع $1 ')
      .replace(/\\bar\s*\{([^{}]*)\}/g, ' مرافق $1 ')
      .replace(/\\(?:mathbb|mathcal|mathrm|mathbf|operatorname|text)\s*\{([^{}]*)\}/g, ' $1 ')
      .replace(/\^\s*\{([^{}]*)\}/g, ' أُس $1 ')
      .replace(/_\s*\{([^{}]*)\}/g, ' دليل $1 ')
      .replace(/\{([^{}]*)\}/g, ' $1 ');
    if (s === before) break;
  }
  // single-character sup/sub without braces
  s = s.replace(/\^\s*([A-Za-z0-9])/g, ' أُس $1 ').replace(/_\s*([A-Za-z0-9])/g, ' دليل $1 ');
  // bare (brace-less) structural macros, e.g. \vec u, \bar z, \sqrt 2
  s = s
    .replace(/\\(?:vec|overrightarrow)\s+([A-Za-z])/g, ' الشعاع $1 ')
    .replace(/\\bar\s+([A-Za-z])/g, ' مرافق $1 ')
    .replace(/\\sqrt\s+([A-Za-z0-9])/g, ' جذر $1 ');
  // remaining commands: Arabic word, else visual symbol, else drop
  s = s.replace(/\\([a-zA-Z]+)/g, (_m, name) =>
    SPEECH_WORDS[name] ?? (SYMBOLS[name] ? ' ' + SYMBOLS[name] + ' ' : ' '));
  // nuke any stray delimiters/backslashes so no raw LaTeX ever reaches the label
  return s.replace(/[{}]/g, ' ').replace(/\\+/g, ' ').replace(/\s+/g, ' ').trim();
}
