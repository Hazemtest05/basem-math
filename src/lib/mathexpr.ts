/* =============================================================================
   mathexpr — a tiny, SAFE math-expression compiler.

   Compiles a string such as "x^2 - 3x", "sin(x)", "e^x" or "2(1+3)/4" into a
   plain JS function `(x: number) => number`. No `eval`, no `new Function`: a
   hand-written tokenizer + recursive-descent parser over a locked grammar, so
   user input can never execute arbitrary code.

   Shared by BOTH the function grapher (variable x) and the calculator (pure
   arithmetic — x is simply never referenced).

   Supported:
     · operators  + - * /  and  ^ (power, right-associative), unary + / -
     · implicit multiplication   2x · 3sin(x) · 2(x+1) · x sin(x)
     · grouping   ( … )
     · variable   x
     · constants  pi · e · tau
     · functions  sin cos tan · asin acos atan · sinh cosh tanh
                  sqrt cbrt abs · ln (natural) · log lg (base-10) · exp
                  sign floor ceil round
   Anything else raises a readable Arabic error, surfaced next to the input.
   ============================================================================= */

export type CompiledFn = (x: number) => number;

type TokType = 'num' | 'ident' | 'op' | 'lparen' | 'rparen';
interface Token {
  type: TokType;
  value: string;
  pos: number;
}

const FUNCS: Record<string, (a: number) => number> = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan,
  asin: Math.asin, acos: Math.acos, atan: Math.atan,
  sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
  sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs,
  ln: Math.log, log: Math.log10, lg: Math.log10, exp: Math.exp,
  sign: Math.sign, floor: Math.floor, ceil: Math.ceil, round: Math.round,
};

const CONSTS: Record<string, number> = {
  pi: Math.PI,
  e: Math.E,
  tau: Math.PI * 2,
};

/** Fold the friendly symbols a student might type into the plain grammar. */
export function normalizeExpr(src: string): string {
  return src
    .replace(/×/g, '*')
    .replace(/·/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-') // U+2212 minus sign
    .replace(/√/g, 'sqrt')
    .replace(/π/g, 'pi');
}

function tokenize(s: string): Token[] {
  const toks: Token[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === ' ' || c === '\t' || c === '\n' || c === '\r') { i++; continue; }
    if ((c >= '0' && c <= '9') || c === '.') {
      let j = i + 1;
      while (j < s.length && ((s[j] >= '0' && s[j] <= '9') || s[j] === '.')) j++;
      const value = s.slice(i, j);
      if ((value.match(/\./g)?.length ?? 0) > 1) throw new Error(`عدد غير صالح: "${value}"`);
      toks.push({ type: 'num', value, pos: i });
      i = j; continue;
    }
    if (/[a-zA-Z]/.test(c)) {
      let j = i + 1;
      while (j < s.length && /[a-zA-Z]/.test(s[j])) j++;
      toks.push({ type: 'ident', value: s.slice(i, j).toLowerCase(), pos: i });
      i = j; continue;
    }
    if (c === '(') { toks.push({ type: 'lparen', value: c, pos: i }); i++; continue; }
    if (c === ')') { toks.push({ type: 'rparen', value: c, pos: i }); i++; continue; }
    if (c === '+' || c === '-' || c === '*' || c === '/' || c === '^') {
      toks.push({ type: 'op', value: c, pos: i }); i++; continue;
    }
    throw new Error(`رمز غير متوقّع: "${c}"`);
  }
  return toks;
}

class Parser {
  private p = 0;
  constructor(private readonly toks: Token[]) {}

  private peek(): Token | undefined {
    return this.toks[this.p];
  }
  private next(): Token | undefined {
    return this.toks[this.p++];
  }

  parse(): CompiledFn {
    const fn = this.parseAddSub();
    if (this.p < this.toks.length) {
      throw new Error(`رمز زائد: "${this.toks[this.p].value}"`);
    }
    return fn;
  }

  // expr := term (('+' | '-') term)*
  private parseAddSub(): CompiledFn {
    let left = this.parseMulDiv();
    for (;;) {
      const t = this.peek();
      if (t && t.type === 'op' && (t.value === '+' || t.value === '-')) {
        this.next();
        const right = this.parseMulDiv();
        const l = left;
        left = t.value === '+'
          ? (x: number): number => l(x) + right(x)
          : (x: number): number => l(x) - right(x);
      } else break;
    }
    return left;
  }

  private startsFactor(t: Token | undefined): boolean {
    return !!t && (t.type === 'num' || t.type === 'ident' || t.type === 'lparen');
  }

  // term := factor (('*' | '/') factor | <implicit *> factor)*
  private parseMulDiv(): CompiledFn {
    let left = this.parseUnary();
    for (;;) {
      const t = this.peek();
      if (t && t.type === 'op' && (t.value === '*' || t.value === '/')) {
        this.next();
        const right = this.parseUnary();
        const l = left;
        left = t.value === '*'
          ? (x: number): number => l(x) * right(x)
          : (x: number): number => l(x) / right(x);
      } else if (this.startsFactor(t)) {
        // implicit multiplication: 2x, 2(x+1), x sin(x)
        const right = this.parseUnary();
        const l = left;
        left = (x: number): number => l(x) * right(x);
      } else break;
    }
    return left;
  }

  // unary := ('+' | '-') unary | power
  private parseUnary(): CompiledFn {
    const t = this.peek();
    if (t && t.type === 'op' && (t.value === '+' || t.value === '-')) {
      this.next();
      const operand = this.parseUnary();
      return t.value === '-' ? (x: number): number => -operand(x) : operand;
    }
    return this.parsePower();
  }

  // power := primary ('^' unary)?   (right-associative, exponent may be signed)
  private parsePower(): CompiledFn {
    const base = this.parsePrimary();
    const t = this.peek();
    if (t && t.type === 'op' && t.value === '^') {
      this.next();
      const exp = this.parseUnary();
      return (x: number): number => Math.pow(base(x), exp(x));
    }
    return base;
  }

  // primary := number | 'x' | const | func '(' expr ')' | '(' expr ')'
  private parsePrimary(): CompiledFn {
    const t = this.next();
    if (!t) throw new Error('نهاية غير متوقّعة للتعبير');

    if (t.type === 'num') {
      const v = parseFloat(t.value);
      if (!isFinite(v)) throw new Error(`عدد غير صالح: "${t.value}"`);
      return (): number => v;
    }

    if (t.type === 'lparen') {
      const inner = this.parseAddSub();
      const close = this.next();
      if (!close || close.type !== 'rparen') throw new Error('قوس ")" مفقود');
      return inner;
    }

    if (t.type === 'ident') {
      const name = t.value;
      if (name === 'x') return (x: number): number => x;
      if (name in CONSTS) {
        const v = CONSTS[name];
        return (): number => v;
      }
      if (name in FUNCS) {
        const fn = FUNCS[name];
        const open = this.next();
        if (!open || open.type !== 'lparen') throw new Error(`التابع "${name}" يحتاج قوساً: ${name}(...)`);
        const arg = this.parseAddSub();
        const close = this.next();
        if (!close || close.type !== 'rparen') throw new Error('قوس ")" مفقود');
        return (x: number): number => fn(arg(x));
      }
      throw new Error(`رمز غير معروف: "${name}"`);
    }

    throw new Error(`تعبير غير صالح عند "${t.value}"`);
  }
}

/** Compile a LaTeX-free expression string into `(x) => number`. Throws on error. */
export function compile(src: string): CompiledFn {
  const trimmed = normalizeExpr(src).trim();
  if (!trimmed) throw new Error('اكتب تعبيراً');
  const toks = tokenize(trimmed);
  if (!toks.length) throw new Error('اكتب تعبيراً');
  return new Parser(toks).parse();
}

/** Evaluate a constant (x-free) arithmetic expression to a number. Throws on error. */
export function evaluate(src: string): number {
  return compile(src)(0);
}
