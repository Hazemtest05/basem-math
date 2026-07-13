# Complete Guide to Syrian Scientific Baccalaureate Mathematics

> A complete, standalone study guide built on the two official mathematics textbooks for the third secondary year, Scientific track (the Scientific Baccalaureate), issued by the Ministry of Education of the Syrian Arab Republic — Part 1 (Analysis) and Part 2 (Space geometry, complex numbers, combinatorics and probability).

<a id="how-to-use"></a>
## How to Use This Guide

This guide does not replace the textbook; it organizes and explains it. It is designed so that you can:

- **Review the whole curriculum** through a clickable table of contents that jumps straight to any unit or lesson.
- **Understand the idea before the formula**: every lesson opens with a "Core idea" section explaining why the concept is needed and which mathematical problem it solves, before any formulas appear.
- **Know when to use each formula or theorem**: every result comes with its conditions of use, the cases where it does *not* apply, and the common mistakes tied to it.
- **Practise at the real exam level**: worked examples reflect the textbook's actual difficulty with page references, and show how much detail a student is expected to write.

**How to study a lesson:**

1. Read "Core idea" and "Prerequisite knowledge" first.
2. Study the "Definitions" and "Formulas & properties", focusing on the conditions.
3. Work through "Theorems & proofs", distinguishing what you must *prove* from what you only *apply*.
4. Solve the "Basic example" then the "Textbook-level example" with pen and paper before reading the solution.
5. Review the "Common mistake" and "Special cases".
6. Do the "Practice set", then check against "Practice solutions".
7. Finish with the "Lesson summary", and at the end of each chapter take the "Chapter review test".

**Callout blocks used in this guide:**

> **Warning:** something to watch so you do not fall into an error.

> **Common mistake:** a mistake many students make, with its correction.

> **Exam-style insight:** a note that raises your exam mark.

> **Special case:** a special situation needing different treatment.

> **Important condition:** a condition without which the formula or theorem is invalid.

<a id="sources"></a>
## Textbooks and Sources

| Label in guide | Title | File | Pages | General content |
|---|---|---|---|---|
| **Textbook 1** | Mathematics — Part 1, Third Secondary, Scientific track | `12-sci-math-1.pdf` | 232 | Analysis: sequences, limits & continuity, differentiation, limits of sequences, natural logarithm, exponential, integration |
| **Textbook 2** | Mathematics — Part 2, Third Secondary, Scientific track | `12-sci-math-2.pdf` | 196 | Vectors & scalar product in space, lines & planes, complex numbers and their geometry, combinatorics, probability |

- Publisher: Ministry of Education — Syrian Arab Republic (authorized edition 1447 AH / 2025–2026).
- Both books are scanned (page images) and were read visually, page by page.
- **Page mapping:** printed page number = PDF page number (no offset), so sources cite the printed page directly.
- Each book ends with an Arabic–English scientific-terminology glossary, which is the authoritative source for the English terminology used in this guide.

<a id="notation"></a>
## Symbols and Notation

| Symbol | Meaning |
|---|---|
| \(\mathbb{N},\ \mathbb{Z},\ \mathbb{Q},\ \mathbb{R},\ \mathbb{C}\) | natural, integer, rational, real, complex numbers |
| \(\mathbb{R}^*,\ \mathbb{R}_+,\ \mathbb{R}_+^*\) | reals without 0, non-negative reals, strictly positive reals |
| \([a,b],\ ]a,b[\) | closed interval, open interval |
| \(D_f\) | domain of the function \(f\) |
| \(\lim\limits_{x\to a} f(x)\) | limit of \(f\) at \(a\) |
| \(f'(x),\ f''(x),\ f^{(n)}(x)\) | first, second, \(n\)-th derivative |
| \((u_n)\) | a sequence with general term \(u_n\) |
| \(\ln x,\ e^x\) | natural logarithm, exponential function |
| \(\displaystyle\int_a^b f(x)\,dx\) | definite integral of \(f\) from \(a\) to \(b\) |
| \(\vec{u}\cdot\vec{v},\ \|\vec u\|\) | scalar (dot) product, norm of a vector |
| \(z=a+ib,\ \bar z,\ |z|,\ \arg(z)\) | complex number, conjugate, modulus, argument |
| \(n!,\ \binom{n}{r},\ A_n^r\) | factorial of \(n\), number of combinations, number of arrangements |
| \(P(A),\ P_B(A)=P(A\mid B)\) | probability of \(A\), probability conditioned on \(B\) |
| \(E(X),\ V(X),\ \sigma(X)\) | expected value, variance, standard deviation |

**Example and exercise numbering:** we use a stable ID, identical in the Arabic and English versions, of the form `B{book}-U{unit}-L{lesson}-E{n}` for an example and `-P{n}` for a practice problem, e.g. `B1-U2-L3-E01`. (Each numbered unit in the books forms a single chapter, so the chapter token is folded into the unit token.)

<a id="toc"></a>
## Complete Table of Contents

### Mathematics Textbook 1 — Analysis ([go](#book-1))
- **Unit 1: Sequences and Mathematical Induction** ([go](#b1-u1))
  - [Lesson 1: Sequences — monotonicity, arithmetic, geometric](#b1u1-l1)
  - [Lesson 2: Proof by mathematical induction](#b1u1-l2)
  - [Chapter summary & review test](#b1-u1-test)
- **Unit 2: Functions — Limits and Continuity** ([go](#b1-u2))
  - [Lesson 1: Limit of a function at infinity](#b1u2-l1)
  - [Lesson 2: Limit of a function at a real number](#b1u2-l2)
  - [Lesson 3: Operations on limits and indeterminate forms](#b1u2-l3)
  - [Lesson 4: Comparison theorems](#b1u2-l4)
  - [Lesson 5: Limit of a composite function](#b1u2-l5)
  - [Lesson 6: Oblique asymptote](#b1u2-l6)
  - [Lesson 7: Continuity](#b1u2-l7)
  - [Lesson 8: Continuous functions & solving equations (IVT)](#b1u2-l8)
  - [Chapter summary & review test](#b1-u2-test)
- **Unit 3: Functions — Differentiation** ([go](#b1-u3))
  - [Lesson 1: The derivative — definition & rules](#b1u3-l1)
  - [Lesson 2: Applications of differentiation (monotonicity, extrema, tangent)](#b1u3-l2)
  - [Lesson 3: Derivative of a composite function](#b1u3-l3)
  - [Lesson 4: Higher-order derivatives](#b1u3-l4)
  - [Chapter summary & review test](#b1-u3-test)
- **Unit 4: Limits of Sequences** ([go](#b1-u4))
  - [Lesson 1: Limit of a sequence — review](#b1u4-l1)
  - [Lesson 2: Theorems on limits of sequences](#b1u4-l2)
  - [Lesson 3: Convergence of monotonic bounded sequences](#b1u4-l3)
  - [Lesson 4: Adjacent sequences and recursive sequences](#b1u4-l4)
  - [Chapter summary & review test](#b1-u4-test)
- **Unit 5: The Natural Logarithm** ([go](#b1-u5))
  - [Lesson 1: Definition of \(\ln\)](#b1u5-l1)
  - [Lesson 2: Algebraic properties of the logarithm](#b1u5-l2)
  - [Lesson 3: Study of \(\ln\) and the number \(e\)](#b1u5-l3)
  - [Lesson 4: Derivative of \(\ln u\) and important limits](#b1u5-l4)
  - [Chapter summary & review test](#b1-u5-test)
- **Unit 6: The Exponential Function** ([go](#b1-u6))
  - [Lesson 1: The exponential function and its properties](#b1u6-l1)
  - [Lesson 2: Study of the exponential and its important limits](#b1u6-l2)
  - [Lesson 3: Functions of the form \(x\mapsto a^x\)](#b1u6-l3)
  - [Lesson 4: Simple differential equations](#b1u6-l4)
  - [Chapter summary & review test](#b1-u6-test)
- **Unit 7: Integration and Primitives** ([go](#b1-u7))
  - [Lesson 1: Primitive functions](#b1u7-l1)
  - [Lesson 2: Rules for computing primitives](#b1u7-l2)
  - [Lesson 3: The definite integral, its properties & integration by parts](#b1u7-l3)
  - [Lesson 4: Areas & volume of a solid of revolution](#b1u7-l4)
  - [Chapter summary & review test](#b1-u7-test)

### Mathematics Textbook 2 — Geometry, Complex Numbers & Probability ([go](#book-2))
- **Unit 1: Vectors in Space** ([go](#b2-u1))
  - [Lesson 1: Generalities and operations on vectors](#b2u1-l1)
  - [Lesson 2: Linear dependence of three vectors and a basis](#b2u1-l2)
  - [Lesson 3: Coordinate system and components in space](#b2u1-l3)
  - [Lesson 4: Distance in space](#b2u1-l4)
  - [Lesson 5: Barycenter](#b2u1-l5)
  - [Chapter summary & review test](#b2-u1-test)
- **Unit 2: Scalar Product in Space** ([go](#b2-u2))
  - [Lesson 1: The scalar product — definition & properties](#b2u2-l1)
  - [Lesson 2: Orthogonality and the normal vector](#b2u2-l2)
  - [Lesson 3: Cartesian equation of a plane and distance to it](#b2u2-l3)
  - [Chapter summary & review test](#b2-u2-test)
- **Unit 3: Lines and Planes in Space** ([go](#b2-u3))
  - [Lesson 1: Line and plane as sets of barycenters](#b2u3-l1)
  - [Lesson 2: Parametric representations](#b2u3-l2)
  - [Lesson 3: Intersections and relative positions](#b2u3-l3)
  - [Lesson 4: Three planes and systems of equations](#b2u3-l4)
  - [Chapter summary & review test](#b2-u3-test)
- **Unit 4: Complex Numbers** ([go](#b2-u4))
  - [Lesson 1: The set of complex numbers and algebraic form](#b2u4-l1)
  - [Lesson 2: Conjugate of a complex number](#b2u4-l2)
  - [Lesson 3: Modulus, argument and trigonometric form](#b2u4-l3)
  - [Lesson 4: Exponential form and de Moivre's theorem](#b2u4-l4)
  - [Lesson 5: Quadratic equations with real coefficients](#b2u4-l5)
  - [Chapter summary & review test](#b2-u4-test)
- **Unit 5: Applications of Complex Numbers in Geometry** ([go](#b2-u5))
  - [Lesson 1: Affix of a point and a vector](#b2u5-l1)
  - [Lesson 2: Distances, angles and the nature of figures](#b2u5-l2)
  - [Lesson 3: Complex form of geometric transformations](#b2u5-l3)
  - [Chapter summary & review test](#b2-u5-test)
- **Unit 6: Combinatorics** ([go](#b2-u6))
  - [Lesson 1: Lists, arrangements and permutations](#b2u6-l1)
  - [Lesson 2: Combinations](#b2u6-l2)
  - [Lesson 3: Properties of combinations & the binomial theorem](#b2u6-l3)
  - [Chapter summary & review test](#b2-u6-test)
- **Unit 7: Probability** ([go](#b2-u7))
  - [Lesson 1: Conditional probability](#b2u7-l1)
  - [Lesson 2: Random variables (expectation & variance)](#b2u7-l2)
  - [Lesson 3: Independence of random variables](#b2u7-l3)
  - [Lesson 4: The binomial random variable](#b2u7-l4)
  - [Chapter summary & review test](#b2-u7-test)

### Closing Sections
- [Complete Formula Index](#formula-index)
- [Theorem and Result Index](#theorem-index)
- [Problem-Type Index](#problem-type-index)
- [Composite Problem Strategies](#composite-strategies)
- [Common Mistakes Across the Curriculum](#common-mistakes)
- [Examination Solution Strategy](#exam-strategy)
- [Final Rapid Review](#rapid-review)
- [Self-Assessment Questions](#self-assessment)
- [Source Map](#source-map)

---

<a id="book-1"></a>
# Mathematics Textbook 1

**Visible title:** Mathematics — Part 1, Third Secondary, Scientific track.
**Filename:** `12-sci-math-1.pdf` — **Page count:** 232 pages (printed page = PDF page).
**Units:** seven units that together form the **Analysis** syllabus of the Scientific Baccalaureate.

**Where this book sits in the curriculum:** this is the backbone of Baccalaureate mathematics. It opens with a quick review of sequences and the tool of proof by induction, then builds, step by step, the concepts of **limit, continuity and differentiation**, returns to sequences to study their limits, introduces the two fundamental transcendental functions — the **natural logarithm and the exponential** — and culminates in **integration**, which ties everything together. Most final-exam "function study" problems rely entirely on this book.

**How the units connect:**

```text
Sequences + Induction (tools)
        │
        ▼
Limits & Continuity ─────► Differentiation ─────► Function study (graphing)
        │                       │
        ▼                       ▼
 Limit of a sequence     Logarithm ◄──► Exponential   (mutually inverse)
        │                       │
        └──────────► Integration & Primitives ◄────────┘
                 (inverse operation of differentiation + areas)
```

---

<a id="b1-u1"></a>
## Unit 1: Sequences and Mathematical Induction

> Source: Mathematics Textbook 1, pages 6–18.

### Unit overview

This unit assembles two tools that stay with you all year:

- **Sequences:** functions defined on the natural numbers, modelling discrete phenomena (a value each year, term after term…). You review their two most famous kinds — **arithmetic** and **geometric** — and the notion of **monotonicity**.
- **Mathematical induction:** a rigorous proof method for establishing a property that is true for *every* natural number.

**Why it matters:** limits of sequences (Unit 4), recursive sequences, and many problems in complex numbers and combinatorics all depend on mastering these two ideas. Induction is the *only* weapon for proving a formula "for all \(n\)".

**Prerequisites:** algebraic manipulation, solving equations, differentiating polynomials (to study monotonicity via the associated function).

**Main question types:** study the monotonicity of a sequence; prove a sequence is arithmetic or geometric; find the general term and a sum; prove a formula, a divisibility, or an inequality by induction.

### Unit concept map

```text
Sequences & Induction
├── Sequence (a function of the index n)
│   ├── Monotonicity: sign of u(n+1) − u(n)  or ratio vs 1 (for positive terms)
│   ├── Arithmetic: u(n+1) = u(n) + r   →   u(n) = u(0) + n·r ,  sum = n(a+ℓ)/2
│   └── Geometric: u(n+1) = q·u(n)       →   u(n) = u(0)·qⁿ ,  sum = a(1−qⁿ)/(1−q)
└── Induction on E(n)
    ├── Base case E(n₀)
    ├── Inductive step: E(p) ⇒ E(p+1)
    └── Conclusion: E(n) true for all n ≥ n₀
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(u_n=u_0+nr\) | \(r\) common difference | sequence is arithmetic | if the difference is not constant | \(u_m=u_p+(m-p)r\) is more general |
| \(S=\dfrac{n(a+\ell)}{2}\) | \(a\) first, \(\ell\) last, \(n\) count | arithmetic, \(n\) consecutive terms | if terms are out of order | \(1+2+\dots+n=\dfrac{n(n+1)}{2}\) |
| \(u_n=u_0\,q^{\,n}\) | \(q\) common ratio | sequence is geometric | if the ratio is not constant | \(u_m=u_p\,q^{\,m-p}\) |
| \(S=a\dfrac{1-q^{\,n}}{1-q}\) | \(a\) first, \(n\) count | geometric and \(q\neq1\) | at \(q=1\) the sum is \(na\) | mind the number of terms \(n\) |
| \(x^n-a^n=(x-a)\sum x^{\alpha}a^{\beta}\) | \(\alpha+\beta=n-1\) | \(n\in\mathbb{N}^*\) | — | useful identity justifying the geometric sum |
| Principle of induction | \(E(n)\) a property of \(n\) | prove base *and* step | if either step fails | cannot prove a property on \(\mathbb{R}\) |

### Unit learning checklist

- [ ] I can tell an arithmetic from a geometric sequence by its recursion.
- [ ] I study monotonicity by both the difference and the ratio methods.
- [ ] I find the general term and the sum in both cases.
- [ ] I apply all three steps of induction correctly.
- [ ] I prove a sum formula, a divisibility, and an inequality by induction.
- [ ] I convert a recursion \(u_{n+1}=au_n+b\) into a geometric sequence.

---

<a id="b1u1-l1"></a>
### Lesson 1: Sequences — monotonicity, arithmetic, geometric

#### Core idea

A sequence \((u_n)\) is nothing but a **function whose domain is the natural numbers**: instead of writing \(f(x)\) for every real \(x\), we write \(u_n\) for every natural index \(n\). This simple mental shift is the key to the whole unit: everything you know about functions (monotonicity, and later limits) carries over to sequences.

We need sequences because many problems are "discrete" by nature: the balance at the end of each year, the number of bacteria each hour, the \(n\)-th term of a repeated process. A sequence is defined in one of two ways:

1. **Explicitly** in terms of \(n\): e.g. \(u_n=n^2-1\).
2. **Recursively:** we give a first term and a relation \(u_{n+1}=f(u_n)\) that produces each term from the previous one.

**How does a student recognise this lesson?** When a symbol such as \(u_n\) or \(u_{n+1}\) appears, or the task says "study the monotonicity", "prove the sequence is arithmetic/geometric", or "find the sum of the terms". The usual point of confusion is the difference between "increasing" and "strictly increasing", and paying attention to the **starting index** \(n_0\).

#### Prerequisite knowledge
- The sign of an algebraic expression (to study the sign of \(u_{n+1}-u_n\)).
- Differentiating polynomials (to use the associated function \(f\) with \(u_n=f(n)\)).
- Powers: \(q^{n+1}=q\cdot q^{n}\).

#### Definitions

**Definition (recursively defined sequence).** If \(f\) is a function on a set \(D\) with \(f(x)\in D\) for every \(x\in D\), then giving a first term \(u_0\in D\) together with the relation \(u_{n+1}=f(u_n)\) defines a sequence \((u_n)_{n\ge0}\).

**Definition (monotonicity).** Let \((u_n)_{n\ge n_0}\). It is:
- **strictly increasing** if \(u_n<u_{n+1}\) for all \(n\ge n_0\); **strictly decreasing** if \(u_n>u_{n+1}\).
- **increasing** if \(u_n\le u_{n+1}\); **decreasing** if \(u_n\ge u_{n+1}\); **constant** if \(u_n=u_{n+1}\).

A sequence satisfying one of these is **monotone**. A non-monotone example: \(u_n=(-1)^n\).

**Definition (arithmetic).** \((u_n)\) is arithmetic if there is a real \(r\) (the common difference) with \(u_{n+1}=u_n+r\) for all \(n\): we pass from a term to the next by **adding the same number**.

**Definition (geometric).** \((u_n)\) is geometric if there is a real \(q\) (the common ratio) with \(u_{n+1}=q\,u_n\) for all \(n\): we pass from a term to the next by **multiplying by the same number** \(q\).

> Source: Mathematics Textbook 1, pages 7–9.

#### Formulas and properties

**Studying monotonicity — two methods:**
1. **Sign of the difference:** study the sign of \(u_{n+1}-u_n\). If it is strictly positive for all \(n\), the sequence is strictly increasing, and so on.
2. **Ratio versus 1:** if **all terms are strictly positive**, compare \(\dfrac{u_{n+1}}{u_n}\) with \(1\): if \(>1\) it is increasing, if \(<1\) it is decreasing.

> **Important condition:** the ratio method is valid *only* when the terms are strictly positive. For negative terms the inequality reverses when you multiply.

**Arithmetic:** general term \(\;u_n=u_0+nr\;\) (more generally \(u_m=u_p+(m-p)r\)). Sum of \(n\) consecutive terms with first \(a\) and last \(\ell\):
\[
S=\frac{n(a+\ell)}{2},\qquad\text{in particular}\qquad 1+2+\cdots+n=\frac{n(n+1)}{2}.
\]

**Geometric:** general term \(\;u_n=u_0\,q^{\,n}\;\) (more generally \(u_m=u_p\,q^{\,m-p}\)). Sum of \(n\) consecutive terms (\(q\neq1\)):
\[
S=a\,\frac{1-q^{\,n}}{1-q},\qquad 1+q+q^2+\cdots+q^{\,n-1}=\frac{1-q^{\,n}}{1-q}.
\]

**Useful identity:** \(\;x^n-a^n=(x-a)\left(x^{n-1}+x^{n-2}a+\cdots+a^{n-1}\right)\).

> **Warning:** in the geometric-sum formula, \(n\) is the **number of terms**, not the index of the last term. If the sum is \(u_0+u_1+\cdots+u_{n}\), the number of terms is \(n+1\).

#### Recognising the idea and the solution method
- **If you are given** \(u_{n+1}=u_n+(\text{constant})\) → arithmetic; \(u_{n+1}=(\text{constant})\cdot u_n\) → geometric.
- **If asked** "study the monotonicity" → start with \(u_{n+1}-u_n\) (or the ratio if the terms are positive).
- **If asked** "find \(u_n\) in terms of \(n\)" for a harder recursion → try to reveal an auxiliary arithmetic or geometric sequence (see the composite example).

**Standard algorithm for monotonicity:**
1. Fix the starting index \(n_0\) and the set of values.
2. Compute \(u_{n+1}-u_n\) and simplify to a form whose sign is visible.
3. Conclude the monotonicity, saying "strictly" when appropriate.
4. If instead you use the ratio, first check the terms are positive.

#### Basic example

**B1-U1-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Study the monotonicity of \((u_n)_{n\ge0}\) with \(u_n=n^2-4n\).

**Why this method applies.** The sequence is given explicitly and its terms may change sign, so the difference method is safest.

**Step-by-step solution.**
\[
u_{n+1}-u_n=\big[(n+1)^2-4(n+1)\big]-\big[n^2-4n\big]=(2n+1)-4=2n-3.
\]
Sign of \(2n-3\): negative at \(n=0,1\) (so \(u_1<u_0\), \(u_2<u_1\)), and positive for \(n\ge2\) (\(2n-3\ge1>0\)).

**Verification.** \(u_0=0,\ u_1=-3,\ u_2=-4,\ u_3=-3,\ u_4=0\): it decreases then increases, matching the sign.

**Answer.** Not monotone on \(\mathbb{N}\); but **strictly increasing from index \(n_0=2\)** onward.

**Main lesson.** Do not judge monotonicity before studying the sign of the difference over the whole index range; a sequence may be monotone "from some index" only.

> Source: example created in the style of the exercises on pages 8–10.

#### Textbook-level example

**B1-U1-L1-E02**

**Problem.** Study the monotonicity of \((w_n)_{n\ge0}\) with \(\;w_n=\left(\dfrac{2}{3}\right)^{n}\).

**Problem analysis.** Given a geometric sequence of ratio \(q=\tfrac23\); we want its monotonicity. The terms \(\left(\tfrac23\right)^n\) are strictly positive, so the ratio method is ideal.

**Step-by-step solution.** Since every term is strictly positive:
\[
\frac{w_{n+1}}{w_n}=\frac{(2/3)^{n+1}}{(2/3)^{n}}=\frac{2}{3}<1\quad\Rightarrow\quad w_{n+1}<w_n\ \ \forall n.
\]

**Final answer.** \((w_n)\) is **strictly decreasing**.

**Verification.** \(w_0=1,\ w_1=\tfrac23\approx0.67,\ w_2=\tfrac49\approx0.44\): decreasing indeed.

**What the student should learn.** For a positive geometric sequence, monotonicity is decided by comparing the ratio \(q\) with \(1\): \(q>1\) increasing, \(0<q<1\) decreasing.

> Source: Mathematics Textbook 1, page 10.

#### Harder / composite example

**B1-U1-L1-E03**

**Problem.** Let \((v_n)_{n\ge0}\) with \(v_0=8\) and \(v_{n+1}=\dfrac34 v_n+2\). Prove that \((t_n)\) defined by \(t_n=v_n-8\) is geometric, then find \(v_n\) in terms of \(n\) and study its monotonicity.

**Problem analysis.** A relation of the form \(v_{n+1}=av_n+b\) (affine recursion). The hidden idea: the **fixed point** \(x=\tfrac34 x+2\Rightarrow x=8\), which we subtract to reveal a geometric sequence.

**Step-by-step solution.**
\[
t_{n+1}=v_{n+1}-8=\Big(\tfrac34 v_n+2\Big)-8=\tfrac34 v_n-6=\tfrac34\big(v_n-8\big)=\tfrac34\,t_n .
\]
So \((t_n)\) is geometric with ratio \(q=\tfrac34\) and first term \(t_0=v_0-8=0\). Since \(t_0=0\), we get \(t_n=0\) for all \(n\), hence \(v_n=8\) (constant).

> **Warning:** here the auxiliary sequence's first term is zero, so \(v_n\) collapses to a constant. Had \(v_0\neq8\), we would get \(t_n=t_0\left(\tfrac34\right)^n\) and \(v_n=8+t_0\left(\tfrac34\right)^n\).

**Final answer.** \((t_n)\) is geometric of ratio \(\tfrac34\); and \(v_n=8\) for all \(n\) (constant sequence).

**What the student should learn.** To solve \(u_{n+1}=au_n+b\ (a\neq1)\): find the fixed point \(\ell=\dfrac{b}{1-a}\), and prove \(u_n-\ell\) is geometric of ratio \(a\).

> Source: Mathematics Textbook 1, page 10 (an exercise of the form \(u_{n+1}=\tfrac34u_n+2\)) and page 17 (Problem 9).

#### Common mistake

> **Common mistake:** using the ratio method \(\dfrac{u_{n+1}}{u_n}\) to study a sequence whose terms may be negative, such as \(u_n=-2^n\). Multiplying by \(u_n<0\) reverses the inequality, giving a wrong conclusion. **Correct approach:** either confirm the terms are positive before using the ratio, or use the sign of the difference \(u_{n+1}-u_n\), which is always safe.

#### Special cases
- **Non-monotone sequence:** the sign of \(u_{n+1}-u_n\) changes (e.g. \((-1)^n\)).
- **Monotone from an index:** a sequence may be monotone only for \(n\ge n_0\) (as in E01).
- **Geometric with negative ratio** \((q<0)\): terms alternate in sign, so it is not monotone.
- **Ratio \(q=1\)** in the sum: the formula \(a\frac{1-q^n}{1-q}\) is undefined, and the sum equals \(na\).

#### Practice set
1. **(B1-U1-L1-P01)** Show that \(u_n=-3n+1\) is arithmetic; give its common difference and monotonicity.
2. **(B1-U1-L1-P02)** Compute \(1+2+3+\cdots+100\).
3. **(B1-U1-L1-P03)** Study the monotonicity of \(u_n=\dfrac{n+1}{n+2}\). *(special case: positive terms)*
4. **(B1-U1-L1-P04)** A geometric sequence has \(u_0=5,\ q=2\). Find \(u_6\) and the sum of the first seven terms.
5. **(B1-U1-L1-P05)** *(near exam level)* \(u_0=1,\ u_{n+1}=2u_n+3\). Prove \(u_n+3\) is geometric, then find \(u_n\) and the sum \(u_0+\cdots+u_{n}\).

#### Practice solutions
1. \(u_{n+1}-u_n=-3\) constant, so arithmetic with \(r=-3<0\) ⇒ **strictly decreasing**.
2. Arithmetic sum: \(\dfrac{100(1+100)}{2}=50\times101=5050\).
3. \(u_{n+1}-u_n=\dfrac{n+2}{n+3}-\dfrac{n+1}{n+2}=\dfrac{(n+2)^2-(n+1)(n+3)}{(n+3)(n+2)}=\dfrac{1}{(n+3)(n+2)}>0\) ⇒ **strictly increasing**.
4. \(u_6=5\cdot2^6=320\); the sum \(=5\cdot\dfrac{1-2^{7}}{1-2}=5\cdot127=635\).
5. Fixed point \(\ell=\dfrac{3}{1-2}=-3\). \(u_{n+1}+3=2u_n+6=2(u_n+3)\) ⇒ geometric of ratio \(2\), first term \(u_0+3=4\), so \(u_n+3=4\cdot2^n\) and \(u_n=2^{n+2}-3\). The sum \(\sum_{k=0}^{n}u_k=4\cdot\dfrac{2^{n+1}-1}{2-1}-3(n+1)=2^{n+3}-3n-7\).

#### Lesson summary
- **Most important definition:** a sequence is a function on \(\mathbb{N}\); arithmetic (constant difference \(r\)), geometric (constant ratio \(q\)).
- **Most important formulas:** \(u_n=u_0+nr\) and \(u_n=u_0q^n\), with their sums.
- **Most important condition:** the ratio method requires strictly positive terms.
- **Most important pattern:** \(u_{n+1}=au_n+b\Rightarrow\) subtract the fixed point to reveal a geometric sequence.
- **Most common mistake:** confusing the number of terms with the index of the last term in a sum.
- **Quick self-check:** if \(u_{n+1}=\tfrac12 u_n\) and \(u_0=10\), what is \(u_3\)? *(Answer: \(10\cdot(1/2)^3=1.25\).)*

---

<a id="b1u1-l2"></a>
### Lesson 2: Proof by mathematical induction

#### Core idea

Many formulas in mathematics claim to hold **"for every natural number \(n\)"**, such as \(1+2+\cdots+n=\dfrac{n(n+1)}{2}\). Checking a few values is not enough, because there are infinitely many cases. **Mathematical induction** solves this elegantly: we prove the property is true at the starting point, and that it **transfers** from any number to the next; then it cascades, like dominoes, over all the numbers.

The mental image is a **ladder**: if you can stand on the first rung, and you can always step from one rung to the next, you can reach every rung.

**How does a student know induction is required?** When you see "prove that … for all \(n\in\mathbb{N}\)", especially with a dotted sum \(\cdots\), or a **divisibility** of \(a_n\) by a number, or an **inequality** depending on \(n\). The confusing part is stating \(E(n)\) precisely and writing the inductive step with the hypothesis shown explicitly.

#### Prerequisite knowledge
- Algebra and factoring.
- The meaning of "multiple of a number" (divisibility).
- Working with the factorial \(n!=n(n-1)\cdots1\), and \(0!=1\).

#### Definitions and the principle

**Principle of mathematical induction.** Let \(E(n)\) be a property of the natural number \(n\), to be proved for all \(n\ge n_0\). If:
1. **Base case:** \(E(n_0)\) is true, **and**
2. **Inductive step:** assuming \(E(p)\) for some \(p\ge n_0\), we deduce \(E(p+1)\),

then \(E(n)\) is true **for every natural number \(n\ge n_0\)**. Symbolically:
\[
\big[E(n_0)\big]\ \wedge\ \big[\forall p\ge n_0:\ E(p)\Rightarrow E(p+1)\big]\ \Longrightarrow\ \forall n\ge n_0:\ E(n).
\]

> Source: Mathematics Textbook 1, pages 12–13.

#### Recognising the idea and the solution method

**Standard algorithm for a proof by induction:**
1. **State:** write \(E(n)\) clearly and fix \(n_0\) (usually \(0\) or \(1\)).
2. **Base:** verify \(E(n_0)\) by direct computation.
3. **Hypothesis:** "assume \(E(p)\) is true for some \(p\ge n_0\)" — and write out what it means.
4. **Step:** start from one side of \(E(p+1)\), insert the induction hypothesis at the right place, and simplify until you reach \(E(p+1)\) fully.
5. **Conclusion:** write the closing sentence: "hence \(E(n)\) is true for all \(n\ge n_0\)".

> **Exam-style insight:** make it clear **where** you used the induction hypothesis (underline it or point to it). The grader looks for exactly this step.

#### Basic example

**B1-U1-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Prove by induction that \(\;1+2+3+\cdots+n=\dfrac{n(n+1)}{2}\;\) for all \(n\ge1\).

**Why this method applies.** A sum formula "for all \(n\)"; induction is the standard tool.

**Step-by-step solution.** \(E(n):\ 1+2+\cdots+n=\dfrac{n(n+1)}{2}\).
- **Base \(n=1\):** left side \(=1\), right side \(=\dfrac{1\cdot2}{2}=1\). ✔
- **Hypothesis:** assume \(1+2+\cdots+p=\dfrac{p(p+1)}{2}\).
- **Step:** \(\underbrace{1+2+\cdots+p}_{\text{hypothesis}}+(p+1)=\dfrac{p(p+1)}{2}+(p+1)=(p+1)\Big(\dfrac{p}{2}+1\Big)=\dfrac{(p+1)(p+2)}{2}\), which is \(E(p+1)\). ✔

**Verification.** At \(n=4\): \(1+2+3+4=10=\dfrac{4\cdot5}{2}\). ✔

**Main lesson.** The structure of the proof is fixed; the only creativity is in the "step", where you insert the new term and use the hypothesis.

> Source: Mathematics Textbook 1, page 14 (this formula is proposed as an induction exercise).

#### Textbook-level example

**B1-U1-L2-E02**

**Problem.** Prove that for every natural number \(n\): \(\;1^3+2^3+\cdots+n^3=\dfrac{n^2(n+1)^2}{4}\).

**Problem analysis.** Given a sum of cubes, find its closed form. The hidden idea: the result equals \((1+2+\cdots+n)^2\).

**Step-by-step solution.** \(E(n):\ 1^3+\cdots+n^3=\dfrac{n^2(n+1)^2}{4}\).
- **Base \(n=1\):** \(1^3=1=\dfrac{1^2\cdot2^2}{4}=1\). ✔
- **Hypothesis:** \(1^3+\cdots+p^3=\dfrac{p^2(p+1)^2}{4}\).
- **Step:**
\[
1^3+\cdots+p^3+(p+1)^3=\frac{p^2(p+1)^2}{4}+(p+1)^3=\frac{(p+1)^2}{4}\big(p^2+4(p+1)\big)=\frac{(p+1)^2(p+2)^2}{4}.
\]
This is \(E(p+1)\). ✔

**Final answer.** The formula holds for all \(n\), and also equals \(\big(1+2+\cdots+n\big)^2\).

**Verification.** \(n=3\): \(1+8+27=36=\Big(\dfrac{3\cdot4}{2}\Big)^2=6^2\). ✔

**What the student should learn.** At the crucial step, factor out \(\dfrac{(p+1)^2}{4}\) then simplify inside the bracket to a perfect square.

> Source: Mathematics Textbook 1, pages 12–13.

#### Harder / composite example

**B1-U1-L2-E03**

**Problem.** Prove that \(4^{n}+2\) is a multiple of \(3\) for every natural number \(n\).

**Problem analysis.** A **divisibility** problem. The idea: express \(4^{p+1}+2\) in terms of \(4^{p}+2\) to insert the hypothesis.

**Step-by-step solution.** \(E(n):\ 4^{n}+2\) is a multiple of \(3\).
- **Base \(n=0\):** \(4^{0}+2=3\) is a multiple of \(3\). ✔
- **Hypothesis:** \(4^{p}+2=3k\) for some integer \(k\).
- **Step:**
\[
4^{p+1}+2=4\cdot4^{p}+2=4(4^{p}+2)-8+2=4(4^{p}+2)-6=4(3k)-6=3(4k-2).
\]
So \(4^{p+1}+2\) is a multiple of \(3\). ✔

**Final answer.** \(4^{n}+2\) is a multiple of \(3\) for all \(n\in\mathbb{N}\).

**What the student should learn.** The divisibility trick: write the new term as \((\text{old term})\times(\text{number})+(\text{an explicit multiple})\).

> Source: Mathematics Textbook 1, pages 13–14.

#### Common mistake

> **Common mistake:** checking a few values (\(n=1,2,3\)) and then declaring the formula true "for all \(n\)". Numerical checking is **not a proof**; the expression \(n^2-n+41\) is prime for all \(n\) up to \(40\), then fails at \(n=41\). Only induction (with both steps) settles it.

> **Another common mistake:** forgetting the **base case**. Even if the inductive step holds, without a verified base the property may be entirely false (like "\(n=n+1\)", which "transfers" but is false to begin with).

#### Special cases
- **Shifting the starting index:** sometimes \(E(n)\) holds only for \(n\ge n_0\) with \(n_0>1\) (e.g. \(2^n>n^2\) true for \(n\ge5\)); verify the base at \(n_0\).
- **Inequalities:** in the step you may need to strengthen the hypothesis or use \(p\ge n_0\).
- **Strong induction (rare):** some problems need \(E(k)\) for all \(k\le p\), but the syllabus uses ordinary induction.

#### Practice set
1. **(B1-U1-L2-P01)** Prove \(1+3+5+\cdots+(2n-1)=n^2\) for all \(n\ge1\).
2. **(B1-U1-L2-P02)** Prove \(n^3+2n\) is a multiple of \(3\) for all \(n\in\mathbb{N}\).
3. **(B1-U1-L2-P03)** Prove \(2^{3n}-1\) is a multiple of \(7\) for all \(n\in\mathbb{N}\).
4. **(B1-U1-L2-P04)** *(inequality)* Prove \(n!\ge2^{\,n-1}\) for all \(n\ge1\).
5. **(B1-U1-L2-P05)** *(near exam level)* Prove \(1+2\cdot2!+3\cdot3!+\cdots+n\cdot n!=(n+1)!-1\).

#### Practice solutions
1. Base \(n=1\): \(1=1^2\)✔. Step: \(n^2+(2n+1)=(n+1)^2\)✔.
2. Base \(n=0\): \(0\) is a multiple of \(3\)✔. Step: \((n+1)^3+2(n+1)=(n^3+2n)+3(n^2+n+1)\), a sum of two multiples of \(3\)✔.
3. Base \(n=0\): \(2^0-1=0\)✔. Hypothesis \(2^{3n}-1=7k\). Step: \(2^{3(n+1)}-1=8\cdot2^{3n}-1=8(7k+1)-1=56k+7=7(8k+1)\)✔.
4. Base \(n=1\): \(1!\ge2^0=1\)✔. Hypothesis \(p!\ge2^{p-1}\). Step: \((p+1)!=(p+1)p!\ge(p+1)2^{p-1}\ge2\cdot2^{p-1}=2^{p}\) since \(p+1\ge2\)✔.
5. Base \(n=1\): \(1\cdot1!=1=2!-1\)✔. Step: \(\big[(p+1)!-1\big]+(p+1)(p+1)!=(p+1)!\big[1+(p+1)\big]-1=(p+2)!-1\)✔.

#### Lesson summary
- **Most important principle:** base + inductive step ⇒ truth for all \(n\ge n_0\).
- **Most important step:** show the induction hypothesis explicitly and use it in the step.
- **Most important condition:** never skip verifying the base case.
- **Most important pattern:** sum formulas, divisibility, inequalities.
- **Most common mistake:** treating numerical checking as a proof.
- **Quick self-check:** which two steps, without which the induction proof is incomplete?

---

<a id="b1-u1-test"></a>
### Chapter summary & review test — Unit 1

#### Chapter summary
The unit covered two tools: **sequences** (arithmetic/geometric, monotonicity, general term and sum) and **mathematical induction**. A sequence is a function on \(\mathbb{N}\); we study its monotonicity by the sign of the difference or by comparing the ratio with 1 (for positive terms). Induction proves properties "for all \(n\)" with exactly two steps.

#### Essential formulas
\[
u_n=u_0+nr,\quad S_{\text{arith}}=\frac{n(a+\ell)}{2},\quad u_n=u_0q^{n},\quad S_{\text{geom}}=a\frac{1-q^{n}}{1-q}.
\]

#### Essential theorems/results
- The two monotonicity methods (difference, ratio).
- The principle of mathematical induction.
- \(1+2+\cdots+n=\dfrac{n(n+1)}{2}\), \(\ 1^2+\cdots+n^2=\dfrac{n(n+1)(2n+1)}{6}\), \(\ 1^3+\cdots+n^3=\Big(\dfrac{n(n+1)}{2}\Big)^2\).

#### Main problem patterns
Monotonicity study; proving arithmetic/geometric character; computing a sum; converting \(u_{n+1}=au_n+b\) to geometric; induction proof (sum/divisibility/inequality).

#### Connections between the chapter's ideas
Monotonicity prepares limits of sequences (Unit 4); recursive sequences return in the study of \(u_{n+1}=f(u_n)\); induction is used throughout (complex numbers, combinatorics, \(n\)-th derivatives).

#### Recommended study order
Monotonicity ← arithmetic/geometric ← sums ← induction (sum, then divisibility, then inequality).

#### Chapter checklist
- [ ] I distinguish "increasing" from "strictly increasing".
- [ ] I use the general-term and sum formulas without miscounting terms.
- [ ] I write all three steps of an induction proof.

#### Chapter review test
1. Study the monotonicity of \(u_n=\dfrac{2n-1}{n+1}\).
2. A geometric sequence has \(u_1=3,\ u_4=24\). Find the ratio \(q\) then \(u_n\).
3. Compute \(S=2+4+8+\cdots+2^{10}\).
4. Prove by induction that \(1^2+2^2+\cdots+n^2=\dfrac{n(n+1)(2n+1)}{6}\).
5. \(u_0=1,\ u_{n+1}=3u_n-4\). Prove \(u_n-2\) is geometric, and find \(u_n\).
6. Prove that \(5^{n}-1\) is a multiple of \(4\) for all \(n\in\mathbb{N}\).

#### Model solutions for the chapter review test
1. \(u_{n+1}-u_n=\dfrac{2n+1}{n+2}-\dfrac{2n-1}{n+1}=\dfrac{(2n+1)(n+1)-(2n-1)(n+2)}{(n+2)(n+1)}=\dfrac{3}{(n+2)(n+1)}>0\) ⇒ **strictly increasing**.
2. \(u_4=u_1q^{3}\Rightarrow24=3q^3\Rightarrow q^3=8\Rightarrow q=2\); hence \(u_n=u_1q^{\,n-1}=3\cdot2^{\,n-1}\).
3. Geometric, first \(2\), ratio \(2\), \(10\) terms: \(S=2\cdot\dfrac{1-2^{10}}{1-2}=2(2^{10}-1)=2046\).
4. Base \(n=1\): \(1=\dfrac{1\cdot2\cdot3}{6}=1\)✔. Step: \(\dfrac{p(p+1)(2p+1)}{6}+(p+1)^2=\dfrac{(p+1)\big[p(2p+1)+6(p+1)\big]}{6}=\dfrac{(p+1)(2p^2+7p+6)}{6}=\dfrac{(p+1)(p+2)(2p+3)}{6}\)✔.
5. Fixed point \(\ell=\dfrac{-4}{1-3}=2\). \(u_{n+1}-2=3u_n-6=3(u_n-2)\) ⇒ geometric of ratio \(3\), first term \(u_0-2=-1\), so \(u_n-2=-3^{n}\) and \(u_n=2-3^{n}\).
6. Base \(n=0\): \(5^0-1=0\) is a multiple of \(4\)✔. Hypothesis \(5^{p}-1=4k\). Step: \(5^{p+1}-1=5\cdot5^{p}-1=5(4k+1)-1=20k+4=4(5k+1)\)✔.

---

<a id="b1-u2"></a>
## Unit 2: Functions: Limits and Continuity

> Source: Mathematics Textbook 1, pages 19–66.

### Unit overview

This is the single most important unit of the year for "function study" problems. It gives you the language and tools to describe how a function behaves near a point or towards infinity, and to guarantee the existence of solutions to equations you cannot solve by formula.

- **Limits:** what value \(f(x)\) approaches as \(x\) tends to \(\pm\infty\) or to a real number \(a\). This produces the two kinds of asymptotes (horizontal and vertical), the **operation rules** for combining limits, the four **indeterminate forms**, the **comparison (squeeze) theorems**, and limits of **composite** functions.
- **Oblique asymptote:** a slanted line the graph hugs at infinity, detected by \(\lim[f(x)-(ax+b)]=0\).
- **Continuity:** \(\lim_{x\to a}f(x)=f(a)\) — "the graph is drawn without lifting the pen." Continuity feeds the **Intermediate Value Theorem**, which proves an equation \(f(x)=0\) has a root, and (with strict monotonicity) that the root is unique.

**Why it matters:** every full function study — domain, limits, asymptotes, variation table, roots — draws on this unit. It is also the foundation for derivatives, the study of \(u_{n+1}=f(u_n)\), and integration later.

**Prerequisites:** algebraic manipulation, factoring, conjugate expressions, sign of a rational expression, differentiating polynomials (for variation tables), and the reference functions \(x^n,\sqrt{x},\sin,\cos\).

**Main question types:** compute a limit (finite/infinite, one-sided); lift an indeterminate form; find horizontal/vertical/oblique asymptotes and the graph's position; test continuity or find a parameter making \(f\) continuous; use the IVT to prove existence and uniqueness of a root and localise it.

### Unit concept map

```text
Functions: Limits & Continuity
├── Limit at infinity  (x → ±∞)
│   ├── Finite ℓ  → horizontal asymptote y = ℓ
│   ├── Infinite → infinite branch
│   └── Polynomials/rationals: keep the dominant (highest-degree) term
├── Limit at a real number a
│   ├── Infinite → vertical asymptote x = a
│   ├── Finite ℓ
│   └── One-sided:  lim(x→a⁻) = lim(x→a⁺) = ℓ  ⇔  lim(x→a) = ℓ
├── Operations on limits (sum / product / quotient tables)
│   └── Indeterminate forms:  ∞−∞ , 0×∞ , ∞/∞ , 0/0
├── Comparison theorems
│   ├── Squeeze:  g ≤ f ≤ k , lim g = lim k = ℓ  ⇒  lim f = ℓ
│   ├── |f−ℓ| ≤ g , lim g = 0  ⇒  lim f = ℓ
│   └── f ≥ g , lim g = +∞  ⇒  lim f = +∞
├── Composite limit  (change of variable X = h(x))
├── Oblique asymptote  y = ax+b :  a = lim f(x)/x , b = lim (f(x)−ax)
└── Continuity:  lim(x→a) f = f(a)
    ├── differentiable ⇒ continuous  (converse false)
    ├── usual & composite functions are continuous
    └── IVT ⇒ root of f(x)=0 ; strict monotonicity ⇒ unique root (bijection)
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(\lim\limits_{x\to+\infty}\frac1{x}=\lim\limits_{x\to+\infty}\frac1{x^2}=\lim\limits_{x\to+\infty}\frac1{\sqrt x}=0\) | reference limits | \(x\to+\infty\) | at a finite \(a\neq0\) these are ordinary values | building blocks for every rational limit |
| \(\lim\limits_{x\to\pm\infty}(a_nx^n+\dots)=\lim\limits_{x\to\pm\infty}a_nx^n\) | \(a_n\) leading coeff. | polynomial, \(x\to\pm\infty\) | not at a finite \(a\) | keep only the dominant term |
| \(\lim\limits_{x\to\pm\infty}\dfrac{a_nx^n+\dots}{b_mx^m+\dots}=\lim\limits_{x\to\pm\infty}\dfrac{a_nx^n}{b_mx^m}\) | ratio of leading terms | rational, \(x\to\pm\infty\) | not at a finite \(a\) (factor/simplify instead) | resolves the \(\frac{\infty}{\infty}\) form |
| Indeterminate forms | — | must be lifted case by case | never read off a table | \(\infty-\infty,\ 0\times\infty,\ \frac{\infty}{\infty},\ \frac00\) |
| \(\lim g=0^{+}\Rightarrow\lim\frac1g=+\infty\); \(0^{-}\Rightarrow-\infty\) | sign of \(g\to0\) | one-sided sign known | if the sign of \(g\) is not fixed | study left/right separately |
| \(\lim\limits_{x\to a}f=\ell\iff \lim\limits_{x\to a^-}f=\lim\limits_{x\to a^+}f=\ell\) | two-sided vs one-sided | \(a\in\mathbb{R}\) | if one side is missing from \(D_f\) | disagreeing sides ⇒ no limit |
| Squeeze: \(g\le f\le k,\ \lim g=\lim k=\ell\Rightarrow\lim f=\ell\) | \(f\) trapped | valid inequality on the range | if the two bounds differ | main tool for \(\sin,\cos,E(x)\) |
| \(|f-\ell|\le g,\ \lim g=0\Rightarrow\lim f=\ell\) | \(g\) controls the gap | \(g\ge0,\ g\to0\) | if \(g\not\to0\) | reduces to the squeeze |
| Composite: \(\lim\limits_{x\to a}h=b,\ \lim\limits_{t\to b}g=c\Rightarrow\lim\limits_{x\to a}g(h(x))=c\) | \(f=g\circ h\) | limits exist (finite or \(\pm\infty\)) | if inner limit is not reached | set \(X=h(x)\) |
| Oblique asymptote \(y=ax+b\): \(a=\lim\frac{f(x)}{x},\ b=\lim(f(x)-ax)\) | slope & intercept | both limits finite, \(a\neq0\) | if \(a=0\) (horizontal) or infinite | sign of \(f-(ax+b)\) gives position |
| Continuity at \(a\): \(\lim\limits_{x\to a}f(x)=f(a)\) | value = limit | \(a\in D_f\), limit finite | if \(f(a)\) undefined or limits disagree | differentiable ⇒ continuous |
| IVT: \(f\) cont. on \([a,b]\), \(f(a)f(b)<0\Rightarrow\exists c,\ f(c)=0\) | root exists | continuity + sign change | if \(f\) not continuous | strictly monotone ⇒ unique |

### Unit learning checklist

- [ ] I compute limits at \(\pm\infty\) of polynomials and rationals by the dominant-term rule.
- [ ] I find horizontal and vertical asymptotes and describe the graph's position.
- [ ] I recognise the four indeterminate forms and lift each (factor, conjugate, simplify).
- [ ] I decide a two-sided limit from the left and right one-sided limits.
- [ ] I apply the squeeze theorem and the \(|f-\ell|\le g\) theorem.
- [ ] I compute limits of composite functions by a change of variable.
- [ ] I find an oblique asymptote via \(a=\lim\frac{f}{x},\ b=\lim(f-ax)\) and study the position.
- [ ] I test continuity at a point and choose a parameter making \(f\) continuous.
- [ ] I use the IVT for existence, strict monotonicity for uniqueness, and localise a root.

---

<a id="b1u2-l1"></a>
### Lesson 1: Limit of a function at infinity

#### Core idea

When we let \(x\) grow beyond every bound (\(x\to+\infty\)) or fall below every bound (\(x\to-\infty\)), we ask a single question: **does \(f(x)\) settle towards a value, blow up, or neither?** Three answers are possible. If \(f(x)\) gets and stays as close as we wish to a fixed real number \(\ell\), we write \(\lim_{x\to+\infty}f(x)=\ell\) and the horizontal line \(y=\ell\) is a **horizontal asymptote** the graph hugs. If \(f(x)\) eventually exceeds every positive number, the limit is \(+\infty\) (similarly \(-\infty\)); the graph has an **infinite branch**. And some functions, like \(\sin x\), keep oscillating and have **no limit** at all.

**How does a student recognise this lesson?** The task says "compute \(\lim_{x\to+\infty}\)" or "find the horizontal asymptote", or asks about the graph's behaviour "far to the right/left". The usual confusion: forgetting that at \(-\infty\) an odd power \(x^n\) tends to \(-\infty\) while an even power tends to \(+\infty\); and thinking every function must have a limit (oscillating ones do not).

#### Prerequisite knowledge
- The reference behaviours \(\frac1x,\frac1{x^2},\frac1{\sqrt x}\to0\) and \(x^n,\sqrt x\to+\infty\).
- Factoring the highest power out of a polynomial.
- The bounds \(-1\le\sin x\le1\) and \(-1\le\cos x\le1\).

#### Definitions

**Definition (finite limit at \(+\infty\)).** \(f\) has the finite limit \(\ell\) at \(+\infty\), written \(\displaystyle\lim_{x\to+\infty}f(x)=\ell\), if \(f(x)\) can be made as close as we wish to \(\ell\) by taking \(x\) large enough. Then \(y=\ell\) is a **horizontal asymptote** to \(C_f\) at \(+\infty\). An analogous definition holds at \(-\infty\) (the domain must contain an interval \(]-\infty,a]\)).

**Definition (infinite limit at \(+\infty\)).** \(\displaystyle\lim_{x\to+\infty}f(x)=+\infty\) means: for every positive number \(M\) (however large), \(f(x)>M\) once \(x\) is large enough. Similarly \(\lim_{x\to+\infty}f(x)=-\infty\) means \(f(x)<-M\), and likewise at \(-\infty\).

> Source: Mathematics Textbook 1, pages 21–22.

#### Formulas and properties

**Reference limits at \(+\infty\)** (for \(n\in\mathbb{N}^*\)):
\[
\lim_{x\to+\infty}\frac1x=0,\quad \lim_{x\to+\infty}\frac{1}{x^2}=0,\quad \lim_{x\to+\infty}\frac{1}{\sqrt x}=0,\quad \lim_{x\to+\infty}x^n=+\infty,\quad \lim_{x\to+\infty}\sqrt x=+\infty.
\]

**Behaviour of \(x^n\) at \(-\infty\):**
\[
\lim_{x\to-\infty}x^n=\begin{cases}+\infty,& n\ \text{even},\\-\infty,& n\ \text{odd}.\end{cases}
\]

**Dominant-term rule.** At \(\pm\infty\), a **polynomial** has the same limit as its highest-degree term, and a **rational function** has the same limit as the ratio of the highest-degree terms of numerator and denominator. The justification is to factor out the leading power:
\[
a_nx^n+\dots+a_0=x^n\Big(a_n+\frac{a_{n-1}}{x}+\dots+\frac{a_0}{x^n}\Big),\qquad \text{the bracket}\to a_n .
\]

> **Important condition:** the dominant-term rule is only for \(x\to\pm\infty\). At a **finite** point you must substitute or factor/simplify — never "keep the highest degree".

> **Common mistake:** writing \(\lim_{x\to-\infty}x^3=+\infty\). An odd power tends to \(-\infty\) at \(-\infty\): \(\lim_{x\to-\infty}x^3=-\infty\).

#### Recognising the idea and the solution method
- **Polynomial** at \(\pm\infty\): keep only the leading term, then read its sign/parity.
- **Rational** at \(\pm\infty\): keep the ratio of leading terms; simplify \(\frac{a_nx^n}{b_mx^m}=\frac{a_n}{b_m}x^{n-m}\). If \(n<m\) the limit is \(0\); if \(n=m\) it is \(\frac{a_n}{b_m}\); if \(n>m\) it is \(\pm\infty\).
- **Trig without decay** (\(\sin x,\cos x\) alone): no limit at infinity.

**Standard algorithm.**
1. Identify the dominant term(s).
2. Factor the leading power out of numerator and denominator.
3. Send the small terms (\(1/x,1/x^2,\dots\)) to \(0\).
4. Read the surviving expression and, at \(-\infty\), watch the parity of the power.

#### Basic example

**B1-U2-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Compute \(\displaystyle\lim_{x\to-\infty}\big(-2x^3+5x^2-7\big)\).

**Why this method applies.** A polynomial at \(-\infty\): keep the dominant term \(-2x^3\).

**Step-by-step solution.**
\[
-2x^3+5x^2-7=x^3\Big(-2+\frac{5}{x}-\frac{7}{x^3}\Big).
\]
As \(x\to-\infty\): \(x^3\to-\infty\) (odd power) and the bracket \(\to-2\). Product of \((-\infty)\) and a negative number:
\[
\lim_{x\to-\infty}\big(-2x^3+5x^2-7\big)=(-\infty)\times(-2)=+\infty .
\]

**Final answer.** \(+\infty\).

**Verification.** At \(x=-100\): \(-2(-10^6)=2\times10^6\) dominates the smaller \(5\times10^4\); the value is large positive. ✓

**What the student should learn.** Only the leading term decides the limit; at \(-\infty\) combine the sign of its coefficient with the parity of the power.

> Source: example built in the style of the exercises on page 24.

#### Textbook-level example

**B1-U2-L1-E02**

**Problem.** Show that \(\displaystyle\lim_{x\to+\infty}\frac{4x-5}{2x+3}=2\), and identify the asymptote.

**Problem analysis.** A rational function with equal degrees (\(1\) and \(1\)); the dominant ratio is \(\frac{4x}{2x}=2\). The book verifies the definition by forcing \(f(x)\) into a band about \(2\).

**Step-by-step solution.**
\[
f(x)-2=\frac{4x-5}{2x+3}-2=\frac{4x-5-2(2x+3)}{2x+3}=\frac{-11}{2x+3}.
\]
For large \(x\), \(\dfrac{-11}{2x+3}\to0\), hence \(\displaystyle\lim_{x\to+\infty}f(x)=2\). Concretely, \(|f(x)-2|<0.05=\tfrac1{20}\iff|2x+3|>220\iff x>108.5\): beyond \(x=108.5\) the graph lies in a band of radius \(0.05\) about \(y=2\).

**Final answer.** \(\lim_{x\to+\infty}f(x)=2\); the line \(y=2\) is a horizontal asymptote (also at \(-\infty\)).

**Verification.** \(f(1000)=\frac{3995}{2003}\approx1.9945\), close to \(2\). ✓ The sign of \(f(x)-2=\frac{-11}{2x+3}\) is negative for \(x>-\frac32\), so \(C_f\) is just **below** \(y=2\) at \(+\infty\).

**What the student should learn.** For a rational function with equal degrees, the horizontal asymptote is the ratio of leading coefficients; the sign of \(f(x)-\ell\) fixes the graph's side.

> Source: Mathematics Textbook 1, pages 23–24.

#### Common mistake

> **Common mistake:** claiming "\(\sin x\to0\) or some value at \(+\infty\)". Since \(-1\le\sin x\le1\) and \(\sin x\) keeps oscillating, \(\displaystyle\lim_{x\to+\infty}\sin x\) **does not exist**. Only when \(\sin\) is multiplied by something tending to \(0\) (e.g. \(\frac{\sin x}{x}\)) can a limit appear — through the squeeze theorem, not by "plugging in".

#### Special cases
- **Equal degrees** in a rational function ⇒ horizontal asymptote \(=\) ratio of leading coefficients.
- **Numerator degree \(<\) denominator degree** ⇒ limit \(0\) (asymptote \(y=0\)).
- **Numerator degree \(>\) denominator degree** ⇒ infinite limit (no horizontal asymptote; possibly oblique — Lesson 6).
- **Constant function** \(f(x)=c\): \(\lim=c\) at both infinities.

#### Practice set
1. **(B1-U2-L1-P01)** \(\displaystyle\lim_{x\to+\infty}(3x^2-100x+1)\).
2. **(B1-U2-L1-P02)** \(\displaystyle\lim_{x\to-\infty}(x^3-x^2+x-1)\).
3. **(B1-U2-L1-P03)** \(\displaystyle\lim_{x\to+\infty}\frac{5x-1}{4x+3}\), and give the horizontal asymptote.
4. **(B1-U2-L1-P04)** \(\displaystyle\lim_{x\to-\infty}\frac{2x+6}{x^2-3x+1}\). *(unequal degrees)*
5. **(B1-U2-L1-P05)** *(near exam level)* \(\displaystyle\lim_{x\to+\infty}\frac{-2x^3+x}{x^2+1}\).

#### Practice solutions
1. Dominant term \(3x^2\): \(\lim_{x\to+\infty}3x^2=+\infty\). Answer: \(+\infty\).
2. Dominant term \(x^3\); at \(-\infty\), \(x^3\to-\infty\). Answer: \(-\infty\).
3. Equal degrees: \(\frac{5x}{4x}=\frac54\). Check: \(\frac{5x-1}{4x+3}=\frac{5-1/x}{4+3/x}\to\frac54\). Horizontal asymptote \(y=\frac54\).
4. Degrees \(1<2\): \(\frac{2x}{x^2}=\frac2x\to0\). More fully, \(\frac{2x(1+3/x)}{x^2(1-3/x+1/x^2)}=\frac2x\cdot\frac{1+3/x}{1-3/x+1/x^2}\to0\cdot1=0\). Answer: \(0\).
5. Degrees \(3>2\): dominant ratio \(\frac{-2x^3}{x^2}=-2x\); as \(x\to+\infty\), \(-2x\to-\infty\). Answer: \(-\infty\).

#### Lesson summary
- **Most important definition:** finite limit \(\ell\) at infinity ⇒ horizontal asymptote \(y=\ell\); infinite limit ⇒ infinite branch.
- **Most important rule:** at \(\pm\infty\), keep the dominant term (polynomial) or the ratio of dominant terms (rational).
- **Most important condition:** the dominant-term rule is for infinity only, never at a finite point.
- **Most important pattern:** equal degrees ⇒ finite horizontal asymptote; smaller top ⇒ \(0\); bigger top ⇒ \(\pm\infty\).
- **Most common mistake:** giving \(\sin x\) (or an odd power at \(-\infty\)) the wrong limit.
- **Quick self-check:** \(\displaystyle\lim_{x\to-\infty}\frac{x^2+1}{2x^2-3}\)? *(Answer: \(\frac12\).)*

---

<a id="b1u2-l2"></a>
### Lesson 2: Limit of a function at a real number (one-sided limits)

#### Core idea

Here \(x\) approaches a **fixed number** \(a\), not infinity. Two outcomes matter. If \(f(x)\) settles towards a real value \(\ell\), we write \(\lim_{x\to a}f(x)=\ell\); for functions built from the usual ones this is normally just \(f(a)\) — the interest begins where \(f(a)\) is **undefined** (a zero denominator, a boundary of the domain). If \(f(x)\) blows up, the limit is \(\pm\infty\) and the vertical line \(x=a\) is a **vertical asymptote**. Because a point can be approached from two sides, we distinguish the **right-hand limit** (\(x>a\), written \(x\to a^+\)) and the **left-hand limit** (\(x<a\), \(x\to a^-\)); the two-sided limit exists exactly when both agree.

**How does a student recognise this lesson?** A specific value \(a\) is targeted, often a point excluded from \(D_f\) (denominator zero), or a domain endpoint of a square root. The confusion: at a value where the denominator vanishes, the two sides can give \(+\infty\) on one side and \(-\infty\) on the other, so a two-sided limit may fail even though each one-sided limit exists.

#### Prerequisite knowledge
- Sign of an affine/quadratic expression on each side of a root.
- The reciprocal rule: \(g\to0^{+}\Rightarrow\frac1g\to+\infty\); \(g\to0^{-}\Rightarrow\frac1g\to-\infty\).
- Conjugate multiplication for expressions with square roots.

#### Definitions

**Definition (infinite limit at \(a\)).** \(\displaystyle\lim_{x\to a}f(x)=+\infty\) means \(f(x)\) exceeds every positive \(M\) as \(x\) gets sufficiently close to \(a\); similarly \(-\infty\). Then \(x=a\) is a **vertical asymptote** to \(C_f\).

**Definition (finite limit at \(a\)).** \(\displaystyle\lim_{x\to a}f(x)=\ell\) if \(f(x)\) can be made as close as we wish to \(\ell\) whenever \(x\) is sufficiently close to \(a\).

**Definition (one-sided limits).** \(\displaystyle\lim_{x\to a^{+}}f(x)\) uses only \(x>a\); \(\displaystyle\lim_{x\to a^{-}}f(x)\) uses only \(x<a\).

> Source: Mathematics Textbook 1, pages 25–28.

#### Formulas and properties

**Two-sided ⇔ one-sided.**
\[
\lim_{x\to a}f(x)=\ell \iff \lim_{x\to a^{-}}f(x)=\lim_{x\to a^{+}}f(x)=\ell .
\]

**Reciprocal near a real number.**
\[
\lim g=0^{+}\Rightarrow \lim\frac1g=+\infty,\qquad \lim g=0^{-}\Rightarrow \lim\frac1g=-\infty,\qquad \lim g=\ell\neq0\Rightarrow \lim\frac1g=\frac1\ell .
\]

> **Important condition:** to get the sign of an infinite limit at \(a\), you must know the **sign of the denominator on each side** of \(a\). Draw a small sign line for the denominator around \(a\).

> **Common mistake:** writing \(\lim_{x\to2}\frac1{x-2}=+\infty\) with no side specified. Here \(x-2\to0^{-}\) on the left (limit \(-\infty\)) and \(0^{+}\) on the right (limit \(+\infty\)); the two-sided limit **does not exist**.

#### Recognising the idea and the solution method
- **If \(f(a)\) is defined and \(f\) is built from usual functions**, then \(\lim_{x\to a}f=f(a)\) (see Lesson 7).
- **If the denominator vanishes at \(a\)** but the numerator does not: infinite limit; study the sign of the denominator on each side.
- **If both numerator and denominator vanish** (form \(\frac00\)): this is indeterminate — factor/simplify (Lesson 3).

**Standard algorithm at a finite \(a\).**
1. Try substituting \(x=a\). If it gives a real number, that is the limit.
2. If it gives \(\frac{k}{0}\) with \(k\neq0\): infinite limit; determine the sign on each side.
3. If it gives \(\frac00\): lift the indeterminacy by factoring or the conjugate.
4. State one-sided results and combine only if they agree.

#### Basic example

**B1-U2-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Study \(\displaystyle\lim_{x\to3}\frac{x+1}{x-3}\) (both sides), and give the vertical asymptote.

**Why this method applies.** Substituting \(x=3\) gives \(\frac{4}{0}\): an infinite limit whose sign depends on the side.

**Step-by-step solution.** Numerator \(\to4>0\). Denominator \(x-3\):
- On the right (\(x>3\)): \(x-3\to0^{+}\), so \(\frac{4}{0^{+}}=+\infty\).
- On the left (\(x<3\)): \(x-3\to0^{-}\), so \(\frac{4}{0^{-}}=-\infty\).

**Final answer.** \(\displaystyle\lim_{x\to3^{+}}f(x)=+\infty,\quad \lim_{x\to3^{-}}f(x)=-\infty\); no two-sided limit. The line \(x=3\) is a vertical asymptote.

**Verification.** \(f(3.1)=\frac{4.1}{0.1}=41>0\); \(f(2.9)=\frac{3.9}{-0.1}=-39<0\). ✓

**What the student should learn.** When only the denominator vanishes, the limit is infinite, and its **sign is read from the side**; disagreeing sides mean no two-sided limit.

> Source: example built in the style of the exercises on page 28.

#### Textbook-level example

**B1-U2-L2-E02**

**Problem.** Show that \(\displaystyle\lim_{x\to2}\sqrt{4x+1}=3\).

**Problem analysis.** \(f(2)=\sqrt{9}=3\) is defined, so we expect the limit \(3\); the book confirms it by bounding \(|f(x)-3|\) using the conjugate.

**Step-by-step solution.**
\[
\big|\sqrt{4x+1}-3\big|=\left|\frac{(4x+1)-9}{\sqrt{4x+1}+3}\right|=\frac{4|x-2|}{\sqrt{4x+1}+3}\le\frac{4|x-2|}{6}=\frac23|x-2|.
\]
As \(x\to2\), the right side \(\to0\), so \(|f(x)-3|\to0\), i.e. \(\displaystyle\lim_{x\to2}\sqrt{4x+1}=3\).

**Final answer.** \(\lim_{x\to2}\sqrt{4x+1}=3\).

**Verification.** \(f(2.01)=\sqrt{9.04}\approx3.0067\); \(f(1.99)=\sqrt{8.96}\approx2.9933\). ✓

**What the student should learn.** For a square root where the value is defined, the conjugate turns \(|\sqrt{u}-\ell|\) into \(\frac{|u-\ell^2|}{\sqrt u+\ell}\), making the limit transparent.

> Source: Mathematics Textbook 1, page 27.

#### Common mistake

> **Common mistake:** announcing a single two-sided limit at a value that excludes one side of the domain. For \(f(x)=\frac1{\sqrt x}\) at \(0\), only \(x>0\) is allowed, so only \(\lim_{x\to0^{+}}\frac1{\sqrt x}=+\infty\) makes sense; writing "\(\lim_{x\to0}\)" is meaningless because there is no left side.

#### Special cases
- **Denominator zero, numerator non-zero** ⇒ vertical asymptote; sign from each side.
- **One-sided domain** (e.g. \(\sqrt x\) at \(0\)) ⇒ only the relevant side exists.
- **Piecewise functions** ⇒ compute both sides separately; they may disagree.
- **Removable case** (\(\frac00\) simplifies to a finite value) ⇒ limit exists though \(f(a)\) is undefined (Lesson 3).

#### Practice set
1. **(B1-U2-L2-P01)** \(\displaystyle\lim_{x\to1}(x^2+2x-5)\).
2. **(B1-U2-L2-P02)** \(\displaystyle\lim_{x\to2^{+}}\frac{x^2+2}{x-2}\) and \(\displaystyle\lim_{x\to2^{-}}\frac{x^2+2}{x-2}\).
3. **(B1-U2-L2-P03)** \(\displaystyle\lim_{x\to(-1)}\frac{x-3}{(x+1)^2}\). *(square in the denominator)*
4. **(B1-U2-L2-P04)** \(\displaystyle\lim_{x\to0^{+}}\Big(x+\frac1x\Big)\) and \(\displaystyle\lim_{x\to0^{-}}\Big(x+\frac1x\Big)\).
5. **(B1-U2-L2-P05)** *(near exam level)* \(f(x)=\dfrac{5x+1}{2x+1}\); study the limit at \(a=-\tfrac12\) and the vertical asymptote.

#### Practice solutions
1. \(f\) is polynomial and \(a=1\) is in the domain: substitute, \(1+2-5=-2\). Answer: \(-2\).
2. Numerator \(\to6>0\). Right: \(x-2\to0^{+}\Rightarrow+\infty\). Left: \(x-2\to0^{-}\Rightarrow-\infty\). Vertical asymptote \(x=2\).
3. Numerator \(\to-4<0\); denominator \((x+1)^2\to0^{+}\) on **both** sides. So \(\frac{-4}{0^{+}}=-\infty\) on each side, hence \(\lim_{x\to-1}=-\infty\). (A square keeps the same sign both sides.)
4. \(x\to0\) is bounded; \(\frac1x\) dominates. Right: \(\frac1{0^{+}}=+\infty\). Left: \(\frac1{0^{-}}=-\infty\).
5. Numerator at \(-\frac12\): \(5(-\frac12)+1=-\frac32\neq0\); denominator \(2x+1\to0\). Right (\(x>-\frac12\)): \(2x+1\to0^{+}\Rightarrow\frac{-3/2}{0^{+}}=-\infty\). Left: \(2x+1\to0^{-}\Rightarrow+\infty\). Vertical asymptote \(x=-\frac12\); no two-sided limit.

#### Lesson summary
- **Most important definition:** finite limit \(\ell\) (usually \(f(a)\)); infinite limit ⇒ vertical asymptote \(x=a\).
- **Most important criterion:** two-sided limit exists ⇔ left \(=\) right.
- **Most important condition:** the sign of an infinite limit comes from the sign of the denominator on each side.
- **Most important pattern:** \(\frac{k}{0}\) (\(k\neq0\)) ⇒ infinite; \(\frac00\) ⇒ indeterminate (next lesson).
- **Most common mistake:** giving a single limit where the two sides disagree, or forcing a two-sided limit on a one-sided domain.
- **Quick self-check:** \(\displaystyle\lim_{x\to0^{-}}\frac1{x}\)? *(Answer: \(-\infty\).)*

---

<a id="b1u2-l3"></a>
### Lesson 3: Operations on limits and indeterminate forms

#### Core idea

Most limits are computed by breaking a function into simple pieces and combining their limits: the limit of a **sum** is the sum of the limits, of a **product** the product, of a **quotient** the quotient — provided the answer is not one of four ambiguous combinations. These four **indeterminate forms** — \(\dfrac00,\ \dfrac{\infty}{\infty},\ \infty-\infty,\ 0\times\infty\) — cannot be decided from the operation tables; the true value depends on the specific functions and must be found by **lifting the indeterminacy** (factoring, simplifying, or multiplying by the conjugate). This is the technical heart of the whole unit.

**How does a student recognise this lesson?** Any limit where a naive substitution produces one of the four forms. Recognising which form you face tells you the tool: \(\frac00\) at a finite point → factor the common root or use the conjugate; \(\frac{\infty}{\infty}\) → dominant terms; \(\infty-\infty\) → common denominator or conjugate; \(0\times\infty\) → rewrite as a quotient.

#### Prerequisite knowledge
- Factoring polynomials (common factor, difference of squares, \(ax^2+bx+c\)).
- Conjugate expressions: \((\sqrt A-\sqrt B)(\sqrt A+\sqrt B)=A-B\).
- The dominant-term rule (Lesson 1) and reciprocal rule (Lesson 2).

#### Definitions

**Definition (indeterminate form).** A combination of limits whose value is **not determined** by the operation tables — it can be any real number, \(\pm\infty\), or non-existent depending on the functions. The four forms are
\[
\frac00,\qquad \frac{\infty}{\infty},\qquad \infty-\infty,\qquad 0\times\infty .
\]

> Source: Mathematics Textbook 1, pages 29–30.

#### Formulas and properties

Let \(\lim f=\ell\) and \(\lim g=\ell'\) (finite or \(\pm\infty\)), at the same point \(a\in\mathbb{R}\) or \(\pm\infty\).

**Sum.** \(\lim(f+g)=\ell+\ell'\), except the cell \((+\infty)+(-\infty)\), which is indeterminate.

| \(f+g\) | \(\ell'\) finite | \(+\infty\) | \(-\infty\) |
|---|---|---|---|
| \(\ell\) finite | \(\ell+\ell'\) | \(+\infty\) | \(-\infty\) |
| \(+\infty\) | \(+\infty\) | \(+\infty\) | **indet.** |
| \(-\infty\) | \(-\infty\) | **indet.** | \(-\infty\) |

**Product.** \(\lim(f\cdot g)=\ell\cdot\ell'\), except \(0\times(\pm\infty)\), indeterminate.

| \(f\cdot g\) | \(\ell'>0\) | \(\ell'<0\) | \(+\infty\) | \(-\infty\) |
|---|---|---|---|---|
| \(\ell>0\) | \(\ell\ell'\) | \(\ell\ell'\) | \(+\infty\) | \(-\infty\) |
| \(\ell<0\) | \(\ell\ell'\) | \(\ell\ell'\) | \(-\infty\) | \(+\infty\) |
| \(\ell=0\) | \(0\) | \(0\) | **indet.** | **indet.** |
| \(+\infty\) | \(+\infty\) | \(-\infty\) | \(+\infty\) | \(-\infty\) |

**Quotient.** \(\lim\dfrac{f}{g}=\dfrac{\ell}{\ell'}\) when \(\ell'\neq0\); with the reciprocal rule for \(\ell'=0\); the cells \(\dfrac{\pm\infty}{\pm\infty}\) and \(\dfrac00\) are indeterminate. In particular: finite\(/\pm\infty=0\), and \(\pm\infty/\)finite \(=\pm\infty\) (sign by the rule).

> **Important condition:** these tables are **accepted without proof** at this level. What they never do is assign a value to the four indeterminate cells.

> **Common mistake:** "\(\infty-\infty=0\)". False. E.g. \((x^2)-(x)\to+\infty\) but \((x+1)-(x)\to1\) and \((x)-(x^2)\to-\infty\). The form must be lifted.

#### Recognising the idea and the solution method

| Form | Typical situation | Tool |
|---|---|---|
| \(\frac00\) at finite \(a\) | rational with common root \(a\) | factor \((x-a)\) and cancel |
| \(\frac00\) with roots | \(\frac{\sqrt{\ }-\ell}{x-a}\) | multiply by the conjugate |
| \(\frac{\infty}{\infty}\) | rational at \(\pm\infty\) | dominant terms |
| \(\infty-\infty\) | difference of fractions / roots | common denominator or conjugate |
| \(0\times\infty\) | product | rewrite as \(\frac{0}{0}\) or \(\frac{\infty}{\infty}\) |

**Standard algorithm.**
1. Substitute to detect the form.
2. If it is determinate, read the answer from the tables.
3. If indeterminate, pick the matching tool and rewrite \(f\).
4. Re-evaluate the simplified expression.

#### Basic example

**B1-U2-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Compute \(\displaystyle\lim_{x\to2}\frac{x^2-4}{x^2-3x+2}\).

**Why this method applies.** Substituting \(x=2\) gives \(\frac{0}{0}\); both numerator and denominator vanish at \(2\), so \((x-2)\) is a common factor.

**Step-by-step solution.**
\[
\frac{x^2-4}{x^2-3x+2}=\frac{(x-2)(x+2)}{(x-2)(x-1)}=\frac{x+2}{x-1}\quad(x\neq2).
\]
Now substitute \(x=2\): \(\dfrac{2+2}{2-1}=\dfrac41=4\).

**Final answer.** \(\displaystyle\lim_{x\to2}\frac{x^2-4}{x^2-3x+2}=4\).

**Verification.** \(x=2.01\): numerator \(=0.0401\), denominator \(=0.0101\), ratio \(\approx3.97\approx4\). ✓

**What the student should learn.** A \(\frac00\) at a finite point signals a **common factor** \((x-a)\); cancel it, then substitute.

> Source: example built in the style of the exercises on page 32.

#### Textbook-level example

**B1-U2-L3-E02**

**Problem.** Compute \(\displaystyle\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}\).

**Problem analysis.** Substituting \(x=0\) gives \(\frac{\sqrt1-1}{0}=\frac00\); the root suggests the **conjugate**.

**Step-by-step solution.**
\[
\frac{\sqrt{x+1}-1}{x}=\frac{(\sqrt{x+1}-1)(\sqrt{x+1}+1)}{x(\sqrt{x+1}+1)}=\frac{(x+1)-1}{x(\sqrt{x+1}+1)}=\frac{1}{\sqrt{x+1}+1}.
\]
As \(x\to0\): \(\dfrac{1}{\sqrt1+1}=\dfrac12\).

**Final answer.** \(\displaystyle\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}=\frac12\).

**Verification.** \(x=0.01\): \(\frac{\sqrt{1.01}-1}{0.01}=\frac{0.0049876}{0.01}\approx0.4988\approx0.5\). ✓

**What the student should learn.** A \(\frac00\) containing a square root is lifted by multiplying by the conjugate, which turns \(\sqrt{x+1}-1\) into \((x+1)-1=x\) and cancels the denominator's \(x\).

> Source: Mathematics Textbook 1, page 30.

#### Harder / composite example

**B1-U2-L3-E03**

**Problem.** Compute \(\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)\).

**Problem analysis.** As \(x\to+\infty\), \(\sqrt{x^2+x}\to+\infty\) and \(x\to+\infty\): the form is \(\infty-\infty\). Multiply by the conjugate to convert it to a manageable quotient.

**Step-by-step solution.**
\[
\sqrt{x^2+x}-x=\frac{(\sqrt{x^2+x}-x)(\sqrt{x^2+x}+x)}{\sqrt{x^2+x}+x}=\frac{(x^2+x)-x^2}{\sqrt{x^2+x}+x}=\frac{x}{\sqrt{x^2+x}+x}.
\]
For \(x>0\), factor \(x\) (note \(\sqrt{x^2}=x\)):
\[
=\frac{x}{x\Big(\sqrt{1+\tfrac1x}+1\Big)}=\frac{1}{\sqrt{1+\tfrac1x}+1}\xrightarrow[x\to+\infty]{}\frac{1}{\sqrt1+1}=\frac12 .
\]

**Final answer.** \(\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)=\frac12\).

**Verification.** \(x=100\): \(\sqrt{10100}-100\approx100.4988-100=0.4988\approx0.5\). ✓

**What the student should learn.** An \(\infty-\infty\) with a square root is lifted by the conjugate; then a \(\frac{\infty}{\infty}\) remains, resolved by factoring the dominant \(x\). Never write "\(\infty-\infty=0\)".

> Source: Mathematics Textbook 1, pages 30–31 (conjugate method for irrational forms).

#### Common mistake

> **Common mistake:** cancelling \(x\) inside \(\sqrt{x^2+x}\) as if \(\sqrt{x^2}=x\) for **all** \(x\). At \(-\infty\), \(\sqrt{x^2}=|x|=-x\), which flips the computation. Always track whether \(x>0\) or \(x<0\) before pulling \(x\) out of a square root.

#### Special cases
- **\(\frac00\) that does not simplify** to a finite value may hide an infinite limit — check after one factoring.
- **\(0\times\infty\):** rewrite \(f\cdot g=\dfrac{f}{1/g}\) to reach \(\frac00\) or \(\frac{\infty}{\infty}\).
- **\(\infty-\infty\) of two fractions:** put over a common denominator first.
- **At \(-\infty\) with roots:** replace \(\sqrt{x^2}\) by \(-x\).

#### Practice set
1. **(B1-U2-L3-P01)** \(\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}\).
2. **(B1-U2-L3-P02)** \(\displaystyle\lim_{x\to1}\frac{x^2-1}{x^2+x-2}\).
3. **(B1-U2-L3-P03)** \(\displaystyle\lim_{x\to+\infty}\frac{x+\sqrt x}{x+1}\). *(form \(\frac{\infty}{\infty}\))*
4. **(B1-U2-L3-P04)** \(\displaystyle\lim_{x\to0}\frac{\sqrt{4+x}-2}{x}\). *(conjugate)*
5. **(B1-U2-L3-P05)** *(near exam level)* \(\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+3x}-\sqrt{x^2+1}\big)\).

#### Practice solutions
1. \(\frac00\): \(\frac{(x-3)(x+3)}{x-3}=x+3\to6\). Answer: \(6\).
2. \(\frac00\): \(\frac{(x-1)(x+1)}{(x-1)(x+2)}=\frac{x+1}{x+2}\to\frac23\). Answer: \(\frac23\).
3. \(\frac{\infty}{\infty}\): \(\frac{x(1+\frac{1}{\sqrt x})}{x(1+\frac1x)}=\frac{1+1/\sqrt x}{1+1/x}\to\frac{1+0}{1+0}=1\). Answer: \(1\).
4. \(\frac00\): conjugate \(\frac{(\sqrt{4+x}-2)(\sqrt{4+x}+2)}{x(\sqrt{4+x}+2)}=\frac{x}{x(\sqrt{4+x}+2)}=\frac{1}{\sqrt{4+x}+2}\to\frac1{2+2}=\frac14\). Answer: \(\frac14\).
5. \(\infty-\infty\): conjugate gives \(\frac{(x^2+3x)-(x^2+1)}{\sqrt{x^2+3x}+\sqrt{x^2+1}}=\frac{3x-1}{\sqrt{x^2+3x}+\sqrt{x^2+1}}\). For \(x>0\) factor \(x\): numerator \(x(3-\frac1x)\), denominator \(x\big(\sqrt{1+\frac3x}+\sqrt{1+\frac1{x^2}}\big)\), ratio \(\to\frac{3}{1+1}=\frac32\). Answer: \(\frac32\).

#### Lesson summary
- **Most important definition:** the four indeterminate forms \(\frac00,\frac{\infty}{\infty},\infty-\infty,0\times\infty\).
- **Most important rule:** sum/product/quotient of limits combine termwise, except the indeterminate cells.
- **Most important condition:** never assign a value to an indeterminate form from the table.
- **Most important pattern:** \(\frac00\) at finite \(a\) ⇒ factor \((x-a)\) or conjugate; \(\frac{\infty}{\infty}\) ⇒ dominant terms.
- **Most common mistake:** "\(\infty-\infty=0\)" and mishandling \(\sqrt{x^2}\) at \(-\infty\).
- **Quick self-check:** \(\displaystyle\lim_{x\to1}\frac{x-1}{x^2-1}\)? *(Answer: \(\frac12\).)*

---

<a id="b1u2-l4"></a>
### Lesson 4: Comparison (squeeze) theorems

#### Core idea

Some functions cannot be handled by the operation rules because they contain an oscillating piece like \(\sin x\) or the floor \(E(x)\). The idea is indirect: **trap** the function between two others whose limits we know. If \(f\) is squeezed between \(g\) and \(k\) that share the same limit \(\ell\), then \(f\) is forced to \(\ell\) too (squeeze theorem). A companion result: if the **gap** \(|f-\ell|\) is controlled by some \(g\to0\), then \(f\to\ell\). And to prove a limit is **infinite**, it is enough to bound \(f\) below by something that already tends to \(+\infty\).

**How does a student recognise this lesson?** The function contains a bounded oscillation (\(\sin,\cos,E(x)\)) that blocks direct computation, and the phrase "using comparison" or a given double inequality appears. The confusion: forgetting that the two outer bounds must have the **same** limit for the squeeze to conclude.

#### Prerequisite knowledge
- The bounds \(-1\le\sin\theta\le1\), \(-1\le\cos\theta\le1\), and \(0\le|\sin\theta|\le1\).
- The floor property \(x-1<E(x)\le x\).
- Reference limits \(\frac1x\to0\), \(x\to+\infty\).

#### Theorems and proofs

**Theorem 1 (Squeeze / sandwich).** Let \(f,g,k\) be defined on \(I=[a,+\infty[\) and \(\ell\in\mathbb{R}\). If for all \(x\in I\),
\[
g(x)\le f(x)\le k(x)\quad\text{and}\quad \lim_{x\to+\infty}g(x)=\lim_{x\to+\infty}k(x)=\ell,
\]
then \(\displaystyle\lim_{x\to+\infty}f(x)=\ell\). *(The book gives the idea: for any band about \(\ell\), both \(g\) and \(k\) enter it eventually, so the trapped \(f\) does too. You apply it, not prove it.)*

**Theorem 2 (control of the gap → finite limit).** If for all \(x\in[a,+\infty[\), \(\ \big|f(x)-\ell\big|\le g(x)\ \) and \(\displaystyle\lim_{x\to+\infty}g(x)=0\), then \(\displaystyle\lim_{x\to+\infty}f(x)=\ell\). **Proof (shown in the book):** \(|f-\ell|\le g\) gives \(\ell-g(x)\le f(x)\le\ell+g(x)\); since \(g\to0\) both bounds \(\to\ell\), so Theorem 1 yields \(f\to\ell\).

**Theorem 3 (comparison → infinite limit).** On \(I=[a,+\infty[\): (1) if \(f(x)\ge g(x)\) and \(\lim g=+\infty\), then \(\lim f=+\infty\); (2) if \(f(x)\le g(x)\) and \(\lim g=-\infty\), then \(\lim f=-\infty\). **Proof idea (shown):** given any \(A>0\), beyond some stage \(g(x)>A\), hence \(f(x)\ge g(x)>A\); so \(f\to+\infty\).

> These statements hold identically at \(-\infty\) and at a real number \(a\), with the inequality valid near the target.

#### Recognising the idea and the solution method
- **Bounded factor divided by something large** (e.g. \(\frac{\sin x}{x}\)) ⇒ squeeze between \(\pm\frac1x\), or use \(|f|\le\frac1x\).
- **A large term plus a bounded one** (e.g. \(x+\cos x\)) ⇒ bound below by \(x-1\), use Theorem 3.
- **\(x\times(\text{bounded oscillation})\) near \(0\)** ⇒ \(|f|\le|x|\to0\), Theorem 2.

**Standard algorithm.**
1. Isolate the bounded part and write its inequality (\(-1\le\dots\le1\)).
2. Build the two bounds \(g\le f\le k\) (or \(|f-\ell|\le g\)).
3. Compute the bounds' limits.
4. Conclude by the matching theorem (1, 2, or 3).

#### Basic example

**B1-U2-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** Compute \(\displaystyle\lim_{x\to+\infty}\frac{\cos x}{x}\).

**Why this method applies.** \(\cos x\) has no limit, but it is bounded; dividing by \(x\to+\infty\) suggests a squeeze.

**Step-by-step solution.** For \(x>0\), from \(-1\le\cos x\le1\):
\[
-\frac1x\le\frac{\cos x}{x}\le\frac1x .
\]
Since \(\displaystyle\lim_{x\to+\infty}\Big(-\frac1x\Big)=\lim_{x\to+\infty}\frac1x=0\), the squeeze theorem gives \(\displaystyle\lim_{x\to+\infty}\frac{\cos x}{x}=0\).

**Final answer.** \(0\).

**Verification.** \(|\frac{\cos x}{x}|\le\frac1x\); at \(x=1000\) the value is at most \(0.001\). ✓

**What the student should learn.** A bounded numerator over a large denominator is squeezed to \(0\) between \(\pm\frac1x\).

> Source: example built in the style of the exercises on pages 33, 36.

#### Textbook-level example

**B1-U2-L4-E02**

**Problem.** Compute \(\displaystyle\lim_{x\to0}\ x\sin\frac1x\).

**Problem analysis.** \(\sin\frac1x\) oscillates wildly near \(0\), but it is bounded; the factor \(x\to0\) controls the gap, so Theorem 2 applies with \(\ell=0\).

**Step-by-step solution.** For \(x\neq0\), \(\left|\sin\frac1x\right|\le1\), hence
\[
\big|x\sin\tfrac1x-0\big|=|x|\cdot\left|\sin\tfrac1x\right|\le|x| .
\]
Since \(\displaystyle\lim_{x\to0}|x|=0\), Theorem 2 gives \(\displaystyle\lim_{x\to0}x\sin\frac1x=0\).

**Final answer.** \(0\).

**Verification.** The graph is trapped between \(y=|x|\) and \(y=-|x|\), both pinching to \(0\) at the origin. ✓

**What the student should learn.** \((\text{something}\to0)\times(\text{bounded})\to0\); the clean way to prove it is \(|f|\le|x|\).

> Source: Mathematics Textbook 1, page 35.

#### Harder / composite example

**B1-U2-L4-E03**

**Problem.** Compute \(\displaystyle\lim_{x\to+\infty}\big(x+\cos x\big)\), then study the behaviour of \(f(x)=\dfrac{x}{2}+2\sin x\) at \(+\infty\).

**Problem analysis.** Both mix a growing term with a bounded oscillation; Theorem 3 (bound below by something \(\to+\infty\)) settles them.

**Step-by-step solution.**
- Since \(\cos x\ge-1\), \(x+\cos x\ge x-1\), and \(\lim_{x\to+\infty}(x-1)=+\infty\); by Theorem 3, \(\displaystyle\lim_{x\to+\infty}(x+\cos x)=+\infty\).
- Since \(-1\le\sin x\le1\), \(-2\le2\sin x\le2\), so \(\dfrac{x}{2}-2\le f(x)\le\dfrac{x}{2}+2\). The lower bound \(\dfrac x2-2\to+\infty\), so by Theorem 3, \(\displaystyle\lim_{x\to+\infty}f(x)=+\infty\). Moreover \(f\) is trapped between the parallel lines \(y=\frac x2-2\) and \(y=\frac x2+2\), so its infinite branch stays in that band.

**Final answer.** \(\lim_{x\to+\infty}(x+\cos x)=+\infty\) and \(\lim_{x\to+\infty}\big(\frac x2+2\sin x\big)=+\infty\).

**Verification.** \(f(1000)=500+2\sin(1000)\in[498,502]\), large positive. ✓

**What the student should learn.** To force an infinite limit, discard the oscillation downward: bound \(f\) below by a line/curve that already tends to \(+\infty\).

> Source: Mathematics Textbook 1, pages 34–36.

#### Common mistake

> **Common mistake:** applying the squeeze with two bounds that do **not** share a limit, e.g. writing \(-1\le\sin x\le1\) and concluding something about \(\lim_{x\to+\infty}\sin x\). Here the bounds \(-1\) and \(1\) differ, so the theorem says nothing — and indeed the limit does not exist.

#### Special cases
- **Floor function:** \(x-1<E(x)\le x\) gives \(\frac{x-1}{x}\le\frac{E(x)}{x}\le1\), so \(\lim_{x\to+\infty}\frac{E(x)}{x}=1\).
- **At \(-\infty\):** the same theorems apply; keep the inequality valid for large negative \(x\).
- **One-sided at \(a\):** the squeeze works with inequalities holding only on one side of \(a\).

#### Practice set
1. **(B1-U2-L4-P01)** \(\displaystyle\lim_{x\to+\infty}\frac{\sin x}{x}\).
2. **(B1-U2-L4-P02)** \(\displaystyle\lim_{x\to+\infty}\frac{2x+\sin x}{x}\).
3. **(B1-U2-L4-P03)** \(\displaystyle\lim_{x\to+\infty}(x^2+\sin x)\). *(comparison → \(+\infty\))*
4. **(B1-U2-L4-P04)** \(\displaystyle\lim_{x\to0}\ x^2\cos\frac1x\).
5. **(B1-U2-L4-P05)** *(near exam level)* \(\displaystyle\lim_{x\to+\infty}\frac{E(x)}{x}\) where \(E\) is the floor function.

#### Practice solutions
1. \(-\frac1x\le\frac{\sin x}{x}\le\frac1x\) (for \(x>0\)); both bounds \(\to0\). Answer: \(0\).
2. \(\frac{2x+\sin x}{x}=2+\frac{\sin x}{x}\); by Q1 the second term \(\to0\). Answer: \(2\).
3. \(\sin x\ge-1\Rightarrow x^2+\sin x\ge x^2-1\to+\infty\); by Theorem 3. Answer: \(+\infty\).
4. \(|x^2\cos\frac1x|\le x^2\to0\); by Theorem 2. Answer: \(0\).
5. \(x-1<E(x)\le x\Rightarrow\frac{x-1}{x}\le\frac{E(x)}{x}\le1\); left bound \(=1-\frac1x\to1\), right bound \(=1\); squeeze. Answer: \(1\).

#### Lesson summary
- **Most important theorem:** squeeze — \(g\le f\le k\), \(\lim g=\lim k=\ell\Rightarrow\lim f=\ell\).
- **Most important companion:** \(|f-\ell|\le g,\ \lim g=0\Rightarrow\lim f=\ell\) (proved from the squeeze).
- **Most important condition:** the two bounds must have the **same** limit.
- **Most important pattern:** bounded\(/\)large \(\to0\); large\(+\)bounded \(\to\pm\infty\).
- **Most common mistake:** squeezing with unequal bounds.
- **Quick self-check:** \(\displaystyle\lim_{x\to+\infty}\frac{3+\sin x}{x}\)? *(Answer: \(0\).)*

---

<a id="b1u2-l5"></a>
### Lesson 5: Limit of a composite function

#### Core idea

Many functions are built by **chaining**: an inner function \(h\) feeds an outer function \(g\), giving \(f(x)=g(h(x))\). To find \(\lim_{x\to a}f\), we follow the chain in two stages: first see where \(h(x)\) goes as \(x\to a\) (call it \(b\)), then see where \(g\) goes as its input approaches \(b\). This is exactly the **change of variable** \(X=h(x)\): the limit "passes through" the intermediate value. The theorem works whether the intermediate quantities are finite or \(\pm\infty\).

**How does a student recognise this lesson?** The function is a root of an expression, a trig function of a fraction, a power of a fraction — anything of the form "outer applied to inner". The confusion: mixing up the two stages, or ignoring the **side** (\(0^+\) vs \(0^-\)) at which the inner limit lands.

#### Prerequisite knowledge
- Reading a function as \(g\circ h\) (identify inner and outer).
- All reference limits from Lessons 1–2 (for \(g\) and for \(h\)).
- One-sided limits (the intermediate value \(b\) may be one-sided).

#### Theorems and proofs

**Theorem 4 (limit of a composite).** Let \(f=g\circ h\), i.e. \(f(x)=g(h(x))\). If
\[
\lim_{x\to a}h(x)=b \qquad\text{and}\qquad \lim_{t\to b}g(t)=c,
\]
then \(\displaystyle\lim_{x\to a}g\big(h(x)\big)=c\), valid whether \(a,b,c\) are finite reals or \(\pm\infty\). **Proof:** accepted **without proof** (the book: "we accept the following theorem without proof").

**Practical method (change of variable).** Set \(X=h(x)\). Find \(b=\lim_{x\to a}h(x)\); then compute \(\lim_{X\to b}g(X)\). The answer is the limit of \(f\).

#### Recognising the idea and the solution method
- **Root:** \(f=\sqrt{u(x)}\) ⇒ inner \(u\), outer \(\sqrt{\ }\).
- **Trig of a fraction:** \(f=\sin(u(x))\) or \(\cos(u)\) ⇒ inner \(u\), outer trig.
- **Reciprocal root:** \(f=\frac1{\sqrt{u}}\) ⇒ watch \(u\to0^+\) giving \(+\infty\).

**Standard algorithm.**
1. Split \(f=g\circ h\).
2. Compute \(b=\lim_{x\to a}h(x)\) (with its side if \(0^\pm\)).
3. Compute \(c=\lim_{X\to b}g(X)\).
4. Conclude \(\lim_{x\to a}f=c\).

#### Basic example

**B1-U2-L5-E01** — *Original explanatory example created for this guide.*

**Problem.** Compute \(\displaystyle\lim_{x\to+\infty}\sqrt{\frac{3x+1}{x+2}}\).

**Why this method applies.** \(f=\sqrt{u}\) with \(u(x)=\frac{3x+1}{x+2}\); compute the inner limit, then apply \(\sqrt{\ }\).

**Step-by-step solution.** Inner: \(\displaystyle\lim_{x\to+\infty}\frac{3x+1}{x+2}=\frac{3x}{x}=3\) (equal degrees). Outer: \(\displaystyle\lim_{X\to3}\sqrt X=\sqrt3\). Therefore
\[
\lim_{x\to+\infty}\sqrt{\frac{3x+1}{x+2}}=\sqrt3 .
\]

**Final answer.** \(\sqrt3\).

**Verification.** At \(x=1000\): \(\frac{3001}{1002}\approx2.996\), \(\sqrt{2.996}\approx1.731\approx\sqrt3\). ✓

**What the student should learn.** Evaluate the inside first; then apply the outer function to that limit — the two stages of the chain.

> Source: example built in the style of the exercises on page 39.

#### Textbook-level example

**B1-U2-L5-E02**

**Problem.** Compute (1) \(\displaystyle\lim_{x\to+\infty}\sqrt{x^2-x+1}\) and (2) \(\displaystyle\lim_{x\to\frac13^{+}}\frac{1}{\sqrt{3x-1}}\).

**Problem analysis.** Both are composites; the second needs the **side** of the inner limit, since \(3x-1\to0^{+}\).

**Step-by-step solution.**
1. Inner \(h(x)=x^2-x+1\): \(\lim_{x\to+\infty}(x^2-x+1)=+\infty\) (dominant \(x^2\)). Outer \(\sqrt X\to+\infty\) as \(X\to+\infty\). Hence \(\displaystyle\lim_{x\to+\infty}\sqrt{x^2-x+1}=+\infty\).
2. Inner \(h(x)=3x-1\): as \(x\to\frac13^{+}\), \(3x-1\to0^{+}\). Outer \(g(X)=\frac1{\sqrt X}\): as \(X\to0^{+}\), \(\frac1{\sqrt X}\to+\infty\). Hence \(\displaystyle\lim_{x\to\frac13^{+}}\frac{1}{\sqrt{3x-1}}=+\infty\).

**Final answer.** (1) \(+\infty\); (2) \(+\infty\).

**Verification.** (2) At \(x=0.34\): \(3x-1=0.02\), \(\frac1{\sqrt{0.02}}\approx7.07\), growing as \(x\to\frac13^{+}\). ✓

**What the student should learn.** Track the **side** of the intermediate value: \(X\to0^{+}\) (not just \(0\)) is what forces \(\frac1{\sqrt X}\to+\infty\).

> Source: Mathematics Textbook 1, page 37.

#### Common mistake

> **Common mistake:** evaluating the outer function at the wrong intermediate value, e.g. computing \(\lim\sqrt{u}\) as \(\sqrt{\lim x}\) instead of \(\sqrt{\lim u}\). Always feed the outer function the **inner limit** \(b\), not \(x\) or \(a\).

#### Special cases
- **Inner \(\to0^{+}\) into \(\frac1{\sqrt X}\)** ⇒ \(+\infty\); into \(\sqrt X\) ⇒ \(0\).
- **Change of variable to \(0\):** to study a limit at \(a\), set \(X=x-a\) (then \(X\to0\)); at infinity, \(X=\frac1x\).
- **\(\frac{\sin(kx)}{x}\) at \(0\):** with \(X=kx\), \(\frac{\sin(kx)}{x}=k\cdot\frac{\sin X}{X}\to k\) (uses \(\lim_{X\to0}\frac{\sin X}{X}=1\)).

#### Practice set
1. **(B1-U2-L5-P01)** \(\displaystyle\lim_{x\to+\infty}\sqrt{x^2+1}\).
2. **(B1-U2-L5-P02)** \(\displaystyle\lim_{x\to1^{-}}\frac{1}{\sqrt{1-x^2}}\).
3. **(B1-U2-L5-P03)** \(\displaystyle\lim_{x\to+\infty}\sin\frac1{\sqrt x}\).
4. **(B1-U2-L5-P04)** \(\displaystyle\lim_{x\to0}\frac{\sin 3x}{x}\). *(change of variable \(X=3x\))*
5. **(B1-U2-L5-P05)** *(near exam level)* \(f(x)=\dfrac{x-3}{x+5}\) on \([-5,+\infty[\); compute \(\displaystyle\lim_{x\to+\infty}f(x)\) and deduce \(\displaystyle\lim_{x\to+\infty}f(f(x))\).

#### Practice solutions
1. Inner \(x^2+1\to+\infty\); outer \(\sqrt X\to+\infty\). Answer: \(+\infty\).
2. Inner \(1-x^2\to0^{+}\) (since \(x\to1^{-}\), \(x^2<1\)); outer \(\frac1{\sqrt X}\to+\infty\). Answer: \(+\infty\).
3. Inner \(\frac1{\sqrt x}\to0\); outer \(\sin X\to\sin0=0\). Answer: \(0\).
4. \(X=3x\to0\): \(\frac{\sin3x}{x}=3\cdot\frac{\sin3x}{3x}=3\cdot\frac{\sin X}{X}\to3\cdot1=3\). Answer: \(3\).
5. \(\lim_{x\to+\infty}\frac{x-3}{x+5}=1\) (equal degrees). Then \(f(f(x))\): inner \(f(x)\to1\), outer \(f\) at \(1\) is \(\frac{1-3}{1+5}=-\frac13\). So \(\lim_{x\to+\infty}f(f(x))=-\frac13\).

#### Lesson summary
- **Most important theorem:** \(\lim h=b,\ \lim g=c\Rightarrow\lim g(h(x))=c\).
- **Most important technique:** change of variable \(X=h(x)\), in two stages.
- **Most important condition:** feed the outer function the inner limit \(b\), with its side.
- **Most important pattern:** roots, trig of fractions, \(\frac1{\sqrt{u}}\).
- **Most common mistake:** applying the outer function to \(x\) instead of to \(b=\lim h\).
- **Quick self-check:** \(\displaystyle\lim_{x\to+\infty}\cos\frac1x\)? *(Answer: \(\cos0=1\).)*

---

<a id="b1u2-l6"></a>
### Lesson 6: Oblique asymptote

#### Core idea

When a graph runs off to infinity, sometimes it approaches not a horizontal line but a **slanted** line \(y=ax+b\) (with \(a\neq0\)). This is an **oblique (slant) asymptote**: the vertical gap \(f(x)-(ax+b)\) between the curve and the line shrinks to \(0\) at infinity. It appears typically when a rational function has numerator degree **exactly one more** than the denominator. Beyond finding the line, we read the **sign** of \(f(x)-(ax+b)\) to say whether the curve runs above or below the asymptote.

**How does a student recognise this lesson?** A rational function with top degree \(=\) bottom degree \(+1\), or a function written as "line \(+\) something tending to \(0\)". The confusion: an oblique asymptote requires \(a\neq0\); if \(a=0\) the line is horizontal, and if the difference does not tend to \(0\) there is no asymptote.

#### Prerequisite knowledge
- Limits at \(\pm\infty\) (Lesson 1) and lifting \(\frac{\infty}{\infty}\) (Lesson 3).
- Polynomial division / rewriting \(\frac{P}{Q}\) as quotient \(+\) remainder\(/Q\).
- Sign of a rational expression.

#### Definitions

**Definition (oblique asymptote).** The line \(\Delta:\ y=ax+b\) (with \(a\neq0\)) is an **oblique asymptote** to \(C_f\) at \(+\infty\) iff
\[
\lim_{x\to+\infty}\big[f(x)-(ax+b)\big]=0 ,
\]
and analogously at \(-\infty\). Geometrically the distance from \(M(x,f(x))\) to \(\Delta\) is \(\dfrac{|f(x)-(ax+b)|}{\sqrt{1+a^2}}\to0\).

> Source: Mathematics Textbook 1, pages 40–41.

#### Formulas and properties

**Finding the coefficients.** If an oblique asymptote exists at \(\pm\infty\), then
\[
a=\lim_{x\to\pm\infty}\frac{f(x)}{x},\qquad b=\lim_{x\to\pm\infty}\big(f(x)-ax\big),
\]
both limits finite with \(a\neq0\). (If \(f\) is already written as \(ax+b+\varepsilon(x)\) with \(\varepsilon(x)\to0\), the asymptote is read off directly.)

**Relative position.** The sign of \(f(x)-(ax+b)\) gives the side: \(>0\) ⇒ \(C_f\) above \(\Delta\); \(<0\) ⇒ below.

> **Important condition:** \(a\neq0\). If \(a=0\), the line is a **horizontal** asymptote (Lesson 1), not oblique.

> **Common mistake:** stopping after finding \(a\). You must also compute \(b=\lim(f(x)-ax)\); the pair \((a,b)\) together defines the line.

#### Recognising the idea and the solution method
- **Rational, top degree \(=\) bottom \(+1\):** perform the division, \(f(x)=ax+b+\frac{r(x)}{Q(x)}\); the last term \(\to0\).
- **A line is proposed:** verify \(\lim[f(x)-(ax+b)]=0\) directly.
- **No line proposed:** compute \(a=\lim\frac fx\), then \(b=\lim(f-ax)\).

**Standard algorithm.**
1. Either divide \(P\) by \(Q\), or compute \(a=\lim\frac fx\) and \(b=\lim(f-ax)\).
2. Confirm \(\lim[f(x)-(ax+b)]=0\).
3. Study the sign of \(f(x)-(ax+b)\) for the relative position.

#### Basic example

**B1-U2-L6-E01** — *Original explanatory example created for this guide.*

**Problem.** Show that \(C_f\) with \(f(x)=2x+3+\dfrac{10}{x+1}\) admits \(\Delta:\ y=2x+3\) as an oblique asymptote at \(\pm\infty\), and study the position.

**Why this method applies.** \(f\) is already "line \(+\) remainder"; the remainder \(\frac{10}{x+1}\to0\).

**Step-by-step solution.**
\[
f(x)-(2x+3)=\frac{10}{x+1}\xrightarrow[x\to\pm\infty]{}0 ,
\]
so \(\Delta:\ y=2x+3\) is an oblique asymptote at both ends. Sign of \(\frac{10}{x+1}\): same as \(x+1\). On \(]-1,+\infty[\) it is \(>0\) ⇒ \(C_f\) **above** \(\Delta\); on \(]-\infty,-1[\) it is \(<0\) ⇒ \(C_f\) **below** \(\Delta\).

**Final answer.** \(\Delta:\ y=2x+3\) is an oblique asymptote; \(C_f\) above for \(x>-1\), below for \(x<-1\).

**Verification.** \(f(9)-(2\cdot9+3)=\frac{10}{10}=1>0\) (above); \(f(-11)-(2(-11)+3)=\frac{10}{-10}=-1<0\) (below). ✓

**What the student should learn.** When \(f\) is written as line \(+\) a fraction tending to \(0\), the line is the asymptote and the fraction's sign gives the position.

> Source: example built in the style of the exercises on page 41.

#### Textbook-level example

**B1-U2-L6-E02**

**Problem.** For \(f(x)=\dfrac{x^2+3x+1}{x+2}\), show that \(\Delta:\ y=x+1\) is an oblique asymptote at \(\pm\infty\) and study the position of \(C_f\) relative to \(\Delta\).

**Problem analysis.** Rational with top degree \(2\), bottom \(1\) (difference \(1\)): expect an oblique asymptote. Compute the difference \(f(x)-(x+1)\).

**Step-by-step solution.**
\[
f(x)-(x+1)=\frac{x^2+3x+1-(x+1)(x+2)}{x+2}=\frac{x^2+3x+1-(x^2+3x+2)}{x+2}=\frac{-1}{x+2}.
\]
Then \(\displaystyle\lim_{x\to\pm\infty}\big[f(x)-(x+1)\big]=\lim_{x\to\pm\infty}\frac{-1}{x+2}=0\), so \(\Delta:\ y=x+1\) is an oblique asymptote. Sign of \(\frac{-1}{x+2}\) is opposite to \(x+2\):
- On \(]-2,+\infty[\): \(f(x)-(x+1)<0\) ⇒ \(C_f\) **below** \(\Delta\).
- On \(]-\infty,-2[\): \(f(x)-(x+1)>0\) ⇒ \(C_f\) **above** \(\Delta\).

**Final answer.** \(\Delta:\ y=x+1\); below for \(x>-2\), above for \(x<-2\).

**Verification.** \(f(8)-(8+1)=\frac{-1}{10}=-0.1<0\) (below); \(f(-12)-(-12+1)=\frac{-1}{-10}=0.1>0\) (above). ✓

**What the student should learn.** For a rational function, the difference \(f(x)-(ax+b)\) collapses to \(\frac{r}{Q}\); its limit \(0\) proves the asymptote and its sign gives the side.

> Source: Mathematics Textbook 1, pages 40–41.

#### Common mistake

> **Common mistake:** confusing a horizontal and an oblique asymptote. If \(\lim\frac{f(x)}{x}=0\), then \(a=0\): there is **no** oblique asymptote (look instead for a horizontal one). The oblique case requires \(a\) finite and \(a\neq0\).

#### Special cases
- **Irrational functions \(\sqrt{ax^2+bx+c}\):** the asymptote at \(+\infty\) can differ from the one at \(-\infty\) (because \(\sqrt{x^2}=|x|\)).
- **\(a=\lim\frac fx\) infinite** ⇒ no asymptote (e.g. a parabola).
- **Remainder with a bounded oscillation** (e.g. \(x+\frac{\sin x}{x}\)) still gives \(\Delta:y=x\) since \(\frac{\sin x}{x}\to0\).

#### Practice set
1. **(B1-U2-L6-P01)** Show \(y=-x+1\) is an oblique asymptote of \(f(x)=-x+1-\dfrac{1}{x^2}\) at \(\pm\infty\); give the position.
2. **(B1-U2-L6-P02)** For \(f(x)=\dfrac{2x^2-7x-3}{x-4}\), show \(y=2x+1\) is an oblique asymptote and study the position.
3. **(B1-U2-L6-P03)** Show \(y=x\) is an oblique asymptote of \(f(x)=x+\dfrac{\sin x}{x}\) at \(+\infty\).
4. **(B1-U2-L6-P04)** Find \(a,b\) so that \(y=ax+b\) is the oblique asymptote of \(f(x)=\dfrac{3x^2+1}{x}\).
5. **(B1-U2-L6-P05)** *(near exam level)* For \(f(x)=\dfrac{x^2-x+1}{x-1}\), find the oblique asymptote at \(\pm\infty\) and the relative position.

#### Practice solutions
1. \(f(x)-(-x+1)=-\frac1{x^2}\to0\); asymptote confirmed. Sign of \(-\frac1{x^2}\) is \(<0\) for all \(x\neq0\) ⇒ \(C_f\) **below** \(\Delta\) on both sides.
2. Divide: \(2x^2-7x-3=(x-4)(2x+1)+1\), so \(f(x)=2x+1+\frac{1}{x-4}\). Then \(f(x)-(2x+1)=\frac1{x-4}\to0\). Sign as \(x-4\): above for \(x>4\), below for \(x<4\).
3. \(f(x)-x=\frac{\sin x}{x}\); \(|\frac{\sin x}{x}|\le\frac1x\to0\), so \(\to0\). Hence \(y=x\) is an oblique asymptote at \(+\infty\).
4. \(f(x)=\frac{3x^2+1}{x}=3x+\frac1x\); so \(a=3,\ b=0\), asymptote \(y=3x\) (check: \(f-3x=\frac1x\to0\)).
5. Divide: \(x^2-x+1=(x-1)\cdot x+1\), so \(f(x)=x+\frac{1}{x-1}\); asymptote \(y=x\). Difference \(\frac1{x-1}\): above for \(x>1\), below for \(x<1\).

#### Lesson summary
- **Most important definition:** \(y=ax+b\) (\(a\neq0\)) is oblique iff \(\lim[f(x)-(ax+b)]=0\).
- **Most important formulas:** \(a=\lim\frac fx\), \(b=\lim(f-ax)\).
- **Most important condition:** \(a\neq0\) (else horizontal).
- **Most important pattern:** rational with top degree \(=\) bottom \(+1\); divide to get line \(+\) remainder.
- **Most common mistake:** stopping at \(a\), or confusing horizontal with oblique.
- **Quick self-check:** the oblique asymptote of \(f(x)=x+2+\frac1{x+1}\)? *(Answer: \(y=x+2\).)*

---

<a id="b1u2-l7"></a>
### Lesson 7: Continuity

#### Core idea

A function is **continuous at a point** \(a\) when its graph has no break there: the value \(f(a)\) equals the value \(f(x)\) is heading towards, i.e. \(\lim_{x\to a}f(x)=f(a)\). Intuitively, "you can draw the graph through \(a\) without lifting the pen." Continuity on an interval means continuity at each of its points. The great practical fact is that **all the usual functions** — polynomials, rational functions (on their domain), roots, \(\sin,\cos\) — are continuous, and continuity is preserved by sums, products, quotients (nonzero denominator), and composition. So the only points to worry about are where a formula changes or a denominator vanishes.

**How does a student recognise this lesson?** A piecewise function, or a function undefined at a point that is then assigned a value, or the request "find \(m\) so that \(f\) is continuous". The confusion: continuity requires **three** things at once — \(f(a)\) defined, the limit exists (and is finite), and they are equal; and continuity does **not** imply differentiability.

#### Prerequisite knowledge
- Computing \(\lim_{x\to a}f\), including one-sided (Lessons 2–3).
- The reference functions and their domains.
- Reading a piecewise definition.

#### Definitions

**Definition (continuity at a point).** Let \(a\in D_f\). \(f\) is **continuous at \(a\)** iff
\[
\lim_{x\to a}f(x)=f(a).
\]
This bundles three requirements: \(f(a)\) is defined, \(\lim_{x\to a}f(x)\) exists and is finite, and the two are equal.

**Definition (continuity on a set).** \(f\) is **continuous on \(D\subseteq D_f\)** iff it is continuous at every point of \(D\). At an endpoint of an interval one uses the appropriate one-sided limit.

> Source: Mathematics Textbook 1, pages 42–43.

#### Formulas and properties

**Continuity of usual functions.**
- Every **polynomial** is continuous on \(\mathbb{R}\).
- Every **rational** function is continuous on each interval of its domain.
- \(x\mapsto\sqrt x\) is continuous on \([0,+\infty[\); \(\sin,\cos\) are continuous on \(\mathbb{R}\).

**Operations.** The **sum, product, quotient** (denominator \(\neq0\)) and **composite** of continuous functions are continuous on the appropriate set.

> **Important condition:** to test continuity of a **piecewise** function at a junction \(a\), the left limit, the right limit, and \(f(a)\) must all be equal.

> **Common mistake:** believing continuity ⇒ differentiability. \(x\mapsto\sqrt x\) is continuous at \(0\) but not differentiable there (the difference quotient \(\frac{\sqrt x-0}{x-0}=\frac1{\sqrt x}\to+\infty\)); likewise \(x\mapsto|x|\) at \(0\).

#### Theorems and proofs

**Theorem 5 (differentiable ⇒ continuous).** If \(f\) is differentiable at \(a\), then \(f\) is continuous at \(a\); if differentiable on \(I\), then continuous on \(I\). **Proof (shown):** for \(x\neq a\) set \(g(x)=\frac{f(x)-f(a)}{x-a}\), so \(g(x)\to f'(a)\) (finite). Then \(f(x)=(x-a)g(x)+f(a)\), and
\[
\lim_{x\to a}f(x)=\big(\lim_{x\to a}(x-a)\big)\big(\lim_{x\to a}g(x)\big)+f(a)=0\cdot f'(a)+f(a)=f(a).
\]
Hence \(f\) is continuous at \(a\). The **converse is false** (see the common mistake). You may be asked to apply this or to reproduce this short proof.

#### Recognising the idea and the solution method
- **Function built from usual ones, \(a\) in the domain** ⇒ continuous; just state it.
- **Piecewise at a junction** ⇒ compute left limit, right limit, \(f(a)\); continuous iff all equal.
- **Parameter for continuity** ⇒ set \(\lim_{x\to a}f(x)=f(a)\) and solve for the parameter.

**Standard algorithm (piecewise / parameter).**
1. Identify the suspicious point \(a\) (junction or excluded value).
2. Compute \(\lim_{x\to a^{-}}f\) and \(\lim_{x\to a^{+}}f\).
3. Compare with \(f(a)\).
4. Continuous iff \(\lim_{x\to a^{-}}f=\lim_{x\to a^{+}}f=f(a)\); otherwise solve for the parameter that makes them equal.

#### Basic example

**B1-U2-L7-E01** — *Original explanatory example created for this guide.*

**Problem.** Is \(f(x)=\begin{cases}\dfrac{x^2-1}{x-1}, & x\neq1,\\ 2, & x=1,\end{cases}\) continuous at \(1\)?

**Why this method applies.** \(f\) is defined by a formula off \(1\) and a separate value at \(1\); test \(\lim_{x\to1}f(x)\) against \(f(1)\).

**Step-by-step solution.** For \(x\neq1\), \(\dfrac{x^2-1}{x-1}=\dfrac{(x-1)(x+1)}{x-1}=x+1\). So \(\displaystyle\lim_{x\to1}f(x)=\lim_{x\to1}(x+1)=2\). And \(f(1)=2\). Since \(\lim_{x\to1}f(x)=2=f(1)\), \(f\) is continuous at \(1\).

**Final answer.** Yes, \(f\) is continuous at \(1\).

**Verification.** \(f(0.99)=1.99\), \(f(1.01)=2.01\), both near \(2=f(1)\). ✓

**What the student should learn.** For a removable \(\frac00\), simplify to get the limit, then compare with the assigned value; equality means continuity.

> Source: example built in the style of the exercises on pages 42–43.

#### Textbook-level example

**B1-U2-L7-E02**

**Problem.** Study the continuity on \(\mathbb{R}\) of \(h(x)=\sqrt{x^2+4x+5}\).

**Problem analysis.** \(h=g\circ u\) with \(u(x)=x^2+4x+5\) and \(g(t)=\sqrt t\); use continuity of the composite, checking \(u\) stays in the domain of \(\sqrt{\ }\).

**Step-by-step solution.** \(u(x)=x^2+4x+5=(x+2)^2+1\ge1>0\) for all \(x\), and \(u\) (a polynomial) is continuous on \(\mathbb{R}\). \(g(t)=\sqrt t\) is continuous on \([0,+\infty[\), and \(u(\mathbb{R})\subseteq\,]0,+\infty[\). Hence the composite \(h=g\circ u\) is continuous on \(\mathbb{R}\).

**Final answer.** \(h\) is continuous on \(\mathbb{R}\).

**Verification.** \(u\ge1\) never reaches \(0\), so no square-root boundary issue arises anywhere. ✓

**What the student should learn.** For a root of a polynomial, confirm the inside is \(\ge0\) (here \(>0\)) and invoke continuity of the composite of continuous functions.

> Source: Mathematics Textbook 1, page 43.

#### Common mistake

> **Common mistake:** declaring a piecewise function continuous because "each piece is continuous". The pieces can be individually continuous yet disagree at the junction. You must check the **junction**: left limit \(=\) right limit \(=f(a)\).

#### Special cases
- **Removable discontinuity:** \(\frac00\) that simplifies to a finite limit; assigning that value makes \(f\) continuous.
- **Jump:** left and right limits are finite but unequal ⇒ not continuous, not removable.
- **Continuous, not differentiable:** \(\sqrt x\) and \(|x|\) at \(0\).
- **Floor \(E(x)\):** discontinuous at every integer (jumps by \(1\)).

#### Practice set
1. **(B1-U2-L7-P01)** Is \(f(x)=x^2-3x+1\) continuous at \(2\)? Justify.
2. **(B1-U2-L7-P02)** Study the continuity on \(\mathbb{R}\) of \(x\mapsto\sin x+\cos x\).
3. **(B1-U2-L7-P03)** Find \(m\) so that \(f(x)=\begin{cases}x^2+1,&x\le1,\\ 3x+m,&x>1,\end{cases}\) is continuous at \(1\).
4. **(B1-U2-L7-P04)** Is \(f(x)=\begin{cases}\dfrac{x^2-4}{x-2},&x\neq2,\\ 3,&x=2,\end{cases}\) continuous at \(2\)?
5. **(B1-U2-L7-P05)** *(near exam level)* Find \(m\) so that \(f(x)=\begin{cases}\dfrac{1-\sqrt{x^2+1}}{x},&x\neq0,\\ m,&x=0,\end{cases}\) is continuous on \(\mathbb{R}\).

#### Practice solutions
1. Polynomial, \(2\in\mathbb{R}\): \(\lim_{x\to2}f=f(2)=4-6+1=-1\). Continuous at \(2\).
2. Sum of \(\sin\) and \(\cos\), each continuous on \(\mathbb{R}\) ⇒ continuous on \(\mathbb{R}\).
3. Left limit \(=1^2+1=2\); right limit \(=3+m\); \(f(1)=2\). Continuity: \(3+m=2\Rightarrow m=-1\).
4. \(\frac{x^2-4}{x-2}=x+2\to4\) as \(x\to2\), but \(f(2)=3\neq4\). **Not** continuous (removable if we set \(f(2)=4\)).
5. Conjugate: \(\frac{1-\sqrt{x^2+1}}{x}=\frac{(1-\sqrt{x^2+1})(1+\sqrt{x^2+1})}{x(1+\sqrt{x^2+1})}=\frac{1-(x^2+1)}{x(1+\sqrt{x^2+1})}=\frac{-x^2}{x(1+\sqrt{x^2+1})}=\frac{-x}{1+\sqrt{x^2+1}}\). As \(x\to0\): \(\frac{0}{1+1}=0\). So \(m=0\).

#### Lesson summary
- **Most important definition:** continuous at \(a\) ⇔ \(\lim_{x\to a}f(x)=f(a)\) (three conditions bundled).
- **Most important fact:** usual functions and their sums/products/quotients/composites are continuous.
- **Most important condition:** at a piecewise junction, left \(=\) right \(=f(a)\).
- **Most important theorem:** differentiable ⇒ continuous (converse false).
- **Most common mistake:** assuming continuity ⇒ differentiability, or skipping the junction check.
- **Quick self-check:** is \(x\mapsto|x|\) continuous at \(0\)? differentiable at \(0\)? *(Answer: continuous yes, differentiable no.)*

---

<a id="b1u2-l8"></a>
### Lesson 8: Continuous functions and solving equations (Intermediate Value Theorem)

#### Core idea

Many equations \(f(x)=0\) cannot be solved by a formula. Continuity rescues us: if a continuous function is **negative somewhere and positive somewhere**, then in between it must hit every value, in particular \(0\) — so a root exists. This is the **Intermediate Value Theorem (IVT)** and its root-existence corollary. If, in addition, \(f\) is **strictly monotonic** (strictly increasing or strictly decreasing), the root is **unique**, and \(f\) realises a **bijection** from its interval onto the image interval. Practically, we then **localise** the root by repeatedly halving the interval where the sign changes.

**How does a student recognise this lesson?** "Show \(f(x)=0\) has a (unique) solution in \([a,b]\)", "prove the equation has a real root", "locate the root to within \(10^{-1}\)", or "show \(f\) is a bijection". The confusion: the IVT gives **existence** (at least one root) — uniqueness needs the extra **strict monotonicity** argument.

#### Prerequisite knowledge
- Continuity (Lesson 7) and its check at endpoints.
- Sign of a product \(f(a)\cdot f(b)\).
- Variation tables from the sign of \(f'\) (differentiation of polynomials).

#### Definitions

**Definition (bijection / inverse).** If \(f\) is continuous and **strictly monotonic** on an interval \(I\) with image \(J=f(I)\), then \(f\) is a **bijection** from \(I\) onto \(J\): every \(y\in J\) has a unique \(x\in I\) with \(y=f(x)\). The map \(J\to I,\ y\mapsto x\) is the **inverse function** \(f^{-1}\), with \(f^{-1}(y)=x\iff y=f(x)\). In an orthonormal frame, \(C_{f^{-1}}\) is the reflection of \(C_f\) in the line \(y=x\).

> Source: Mathematics Textbook 1, pages 45–50.

#### Theorems and proofs

**Theorem 6 (Intermediate Value Theorem).** If \(f\) is **continuous on \([a,b]\)**, then for every real \(y\) between \(f(a)\) and \(f(b)\), there exists **at least one** \(c\in[a,b]\) with \(f(c)=y\). **Proof:** accepted **without proof** (the book states it without proof). Equivalently, the image \(f([a,b])\) contains the whole interval \([f(a),f(b)]\).

**Theorem 7 (root existence and uniqueness).**
- **Existence:** if \(f\) is continuous on \([a,b]\) and \(f(a)\cdot f(b)<0\) (opposite signs), then \(f(x)=0\) has **at least one** solution in \(]a,b[\).
- **Uniqueness:** if moreover \(f\) is **strictly monotonic** on \([a,b]\), that solution is **unique**.

This is the workhorse: a continuous \(f\) that changes sign has a root; a continuous **strictly monotone** \(f\) realises a bijection from \([a,b]\) onto the interval with endpoints \(f(a),f(b)\), so the root is unique.

**Theorem 8 (image of an interval).** The **image of an interval under a continuous function is an interval**. For \(f\) continuous and strictly monotone, \(f(I)\) has endpoints given by the values or one-sided limits of \(f\) at the endpoints of \(I\) (e.g. \(f([a,b])=[f(a),f(b)]\) if \(f\) is increasing).

#### Recognising the idea and the solution method
- **"Has a solution"** ⇒ show \(f\) continuous and \(f(a)f(b)<0\); apply IVT/Theorem 7.
- **"Unique solution"** ⇒ add strict monotonicity (sign of \(f'\), or a variation table).
- **"Locate to within \(10^{-k}\)"** ⇒ bisect: keep the half where the sign changes until the interval is short enough.
- **"Bijection / \(f^{-1}\)"** ⇒ continuous \(+\) strictly monotone on \(I\); image is \(f(I)\).

**Standard algorithm (existence + uniqueness + localisation).**
1. State \(f\) is continuous on \([a,b]\) (usual function).
2. Compute \(f(a),f(b)\); check \(f(a)\cdot f(b)<0\) ⇒ a root exists.
3. Show \(f\) strictly monotone (sign of \(f'\)) ⇒ the root is unique.
4. Bisect \([a,b]\): evaluate at the midpoint, keep the sign-changing half; repeat to the required precision.

#### Basic example

**B1-U2-L8-E01** — *Original explanatory example created for this guide.*

**Problem.** Show that \(x^3+x-1=0\) has a unique real solution, and locate it to within \(0.5\).

**Why this method applies.** \(f(x)=x^3+x-1\) is a polynomial (continuous), and its derivative reveals strict monotonicity, giving existence **and** uniqueness.

**Step-by-step solution.**
- Continuity: \(f\) is a polynomial, continuous on \(\mathbb{R}\).
- Sign change: \(f(0)=-1<0\), \(f(1)=1+1-1=1>0\), so \(f(0)\cdot f(1)<0\) ⇒ a root in \(]0,1[\) (IVT/Theorem 7).
- Uniqueness: \(f'(x)=3x^2+1>0\) for all \(x\), so \(f\) is strictly increasing on \(\mathbb{R}\) ⇒ the root is unique.
- Localise: \(f(0.5)=0.125+0.5-1=-0.375<0\); combined with \(f(1)>0\), the root lies in \(]0.5,1[\), an interval of length \(0.5\).

**Final answer.** A unique real root \(\alpha\in\,]0.5,1[\).

**Verification.** \(f(0.68)\approx0.314+0.68-1=-0.006<0\) and \(f(0.69)\approx0.328+0.69-1=0.018>0\), so \(\alpha\approx0.68\), inside \(]0.5,1[\). ✓

**What the student should learn.** IVT gives existence via a sign change; the sign of \(f'\) gives uniqueness; bisection narrows the location.

> Source: example built in the style of the worked exercises on pages 47–48, 52.

#### Textbook-level example

**B1-U2-L8-E02**

**Problem.** Let \(f(x)=x^3-3x^2\). Build its variation table, then show \(f(x)=0\) has exactly three real roots, one of which lies in \([2,3]\).

**Problem analysis.** A cubic; the variation table (from \(f'\)) shows sign changes on three intervals, each giving one root by the IVT.

**Step-by-step solution.**
- \(f'(x)=3x^2-6x=3x(x-2)\); \(f'=0\) at \(x=0,2\). \(f(0)=0\) (local max), \(f(2)=8-12=-4\) (local min).
- Limits: \(\lim_{x\to-\infty}f=-\infty\), \(\lim_{x\to+\infty}f=+\infty\).

| \(x\) | \(-\infty\) | | \(0\) | | \(2\) | | \(+\infty\) |
|---|---|---|---|---|---|---|---|
| \(f'(x)\) | | \(+\) | \(0\) | \(-\) | \(0\) | \(+\) | |
| \(f(x)\) | \(-\infty\) | ↗ | \(0\) | ↘ | \(-4\) | ↗ | \(+\infty\) |

- Roots: factoring, \(f(x)=x^2(x-3)\), so the roots are \(x=0\) (double) and \(x=3\). On \([2,3]\): \(f(2)=-4<0\), \(f(3)=0\), and \(f\) is strictly increasing there ⇒ the root \(x=3\) is the unique root of \(f\) on \([2,3]\).

**Final answer.** The real roots are \(x=0\) (double) and \(x=3\); the root in \([2,3]\) is \(x=3\).

**Verification.** \(f(3)=27-27=0\) ✓; \(f(0)=0\) ✓; and \(x^2(x-3)=x^3-3x^2\) ✓.

**What the student should learn.** A variation table converts the sign of \(f'\) into the shape of \(f\); each interval where \(f\) crosses \(0\) monotonically carries exactly one root.

> Source: Mathematics Textbook 1, pages 47–48.

#### Harder / composite example

**B1-U2-L8-E03**

**Problem.** Show that every real polynomial of **odd degree** has at least one real root.

**Problem analysis.** For odd degree, the polynomial tends to opposite infinities at \(\pm\infty\); continuity plus a sign change gives a root by the IVT.

**Step-by-step solution.** Let \(P(x)=a_nx^n+\dots+a_0\) with \(n\) odd, \(a_n\neq0\); take \(a_n>0\) (else consider \(-P\)). Since \(n\) is odd,
\[
\lim_{x\to-\infty}P(x)=-\infty,\qquad \lim_{x\to+\infty}P(x)=+\infty .
\]
Hence there exist \(\alpha\) with \(P(\alpha)<0\) and \(\beta>\alpha\) with \(P(\beta)>0\). On \([\alpha,\beta]\), \(P\) is continuous (polynomial) and \(P(\alpha)\cdot P(\beta)<0\); by Theorem 7 there is \(c\in\,]\alpha,\beta[\) with \(P(c)=0\).

**Final answer.** Every odd-degree real polynomial has at least one real root.

**Verification.** Example \(P(x)=x^3+x-1\): degree \(3\) odd; indeed it has the root \(\alpha\approx0.68\) found in E01. ✓

**What the student should learn.** The IVT converts a **sign change forced by the limits at \(\pm\infty\)** into a guaranteed root — the standard existence argument for odd-degree polynomials.

> Source: Mathematics Textbook 1, page 52 ("I like to think how to solve it").

#### Common mistake

> **Common mistake:** using \(f(a)\cdot f(b)<0\) to claim the root is **unique**. The IVT gives only **existence**; a continuous function may cross \(0\) several times on \([a,b]\). Uniqueness needs strict monotonicity (e.g. \(f'\) of constant sign).

#### Special cases
- **\(f(a)\cdot f(b)>0\):** the IVT is silent — there may be zero or an even number of roots.
- **\(f(a)=0\) or \(f(b)=0\):** the root is an endpoint; check it directly.
- **Non-strict monotonicity** (\(f'\ge0\) with a flat piece) ⇒ existence still holds, uniqueness may fail.
- **Bijection:** continuous \(+\) strictly monotone on \(I\) ⇒ \(f:I\to f(I)\) invertible; \(C_{f^{-1}}\) is the mirror image of \(C_f\) in \(y=x\).

#### Practice set
1. **(B1-U2-L8-P01)** Show \(x^3+x-3=0\) has a solution in \([1,2]\).
2. **(B1-U2-L8-P02)** Show \(x^5+x-1=0\) has a **unique** real solution.
3. **(B1-U2-L8-P03)** Locate the root of \(x^3+x-1=0\) to within \(0.25\) inside \([0.5,1]\).
4. **(B1-U2-L8-P04)** Let \(f(x)=x^3-3x+1\). Using \(f(0)=1,\ f(1)=-1\), show a root lies in \(]0,1[\).
5. **(B1-U2-L8-P05)** *(near exam level)* Show \(f(x)=x^3+3x-2\) defines a bijection from \(\mathbb{R}\) onto \(\mathbb{R}\), and that \(f(x)=0\) has a unique solution in \(]0,1[\).

#### Practice solutions
1. \(f(x)=x^3+x-3\) is continuous; \(f(1)=1+1-3=-1<0\), \(f(2)=8+2-3=7>0\), so \(f(1)f(2)<0\) ⇒ a root in \(]1,2[\).
2. \(f(x)=x^5+x-1\) continuous; \(f(0)=-1<0\), \(f(1)=1>0\) ⇒ a root exists. \(f'(x)=5x^4+1>0\) ⇒ strictly increasing ⇒ unique.
3. \(f(0.75)=0.4219+0.75-1=0.1719>0\); with \(f(0.5)=-0.375<0\), the root is in \(]0.5,0.75[\), length \(0.25\).
4. \(f\) continuous; \(f(0)=1>0\), \(f(1)=1-3+1=-1<0\), so \(f(0)f(1)<0\) ⇒ a root in \(]0,1[\) by the IVT.
5. \(f'(x)=3x^2+3>0\) ⇒ strictly increasing on \(\mathbb{R}\); with \(\lim_{-\infty}f=-\infty\), \(\lim_{+\infty}f=+\infty\), the image is \(\mathbb{R}\), so \(f:\mathbb{R}\to\mathbb{R}\) is a bijection. Then \(f(0)=-2<0\), \(f(1)=1+3-2=2>0\), and strict monotonicity ⇒ a **unique** root in \(]0,1[\).

#### Lesson summary
- **Most important theorem:** IVT — continuous on \([a,b]\) ⇒ hits every value between \(f(a)\) and \(f(b)\).
- **Most important corollary:** \(f\) continuous, \(f(a)f(b)<0\) ⇒ a root; \(+\) strictly monotone ⇒ unique.
- **Most important condition:** existence needs continuity \(+\) sign change; uniqueness needs strict monotonicity.
- **Most important pattern:** state continuity → sign change → monotonicity → bisection to localise.
- **Most common mistake:** claiming uniqueness from a sign change alone.
- **Quick self-check:** does \(\cos x=x\) have a solution in \([0,1]\)? *(Answer: yes — \(g(x)=\cos x-x\) is continuous, \(g(0)=1>0\), \(g(1)=\cos1-1<0\).)*

---

<a id="b1-u2-test"></a>
### Chapter summary & review test — Unit 2

#### Chapter summary
The unit builds the machinery of **limits** and **continuity**. Limits describe behaviour at \(\pm\infty\) (dominant term; horizontal asymptote) and at a real number (one-sided limits; vertical asymptote). The **operation tables** combine limits except at the four **indeterminate forms** \(\frac00,\frac{\infty}{\infty},\infty-\infty,0\times\infty\), lifted by factoring, the conjugate, or dominant terms. The **comparison theorems** handle oscillating pieces, and the **composite** rule uses a change of variable. An **oblique asymptote** \(y=ax+b\) is found from \(a=\lim\frac fx,\ b=\lim(f-ax)\). **Continuity** (\(\lim_{x\to a}f=f(a)\)) makes the usual functions well-behaved and powers the **Intermediate Value Theorem**: a continuous sign-changing function has a root, unique when strictly monotone.

#### Essential formulas
\[
\lim_{x\to\pm\infty}\frac{a_nx^n+\dots}{b_mx^m+\dots}=\lim_{x\to\pm\infty}\frac{a_nx^n}{b_mx^m},\qquad
\lim_{x\to a}f=\ell\iff\lim_{x\to a^-}f=\lim_{x\to a^+}f=\ell,
\]
\[
a=\lim_{x\to\pm\infty}\frac{f(x)}{x},\quad b=\lim_{x\to\pm\infty}\big(f(x)-ax\big),\qquad
f\ \text{cont. at}\ a\iff\lim_{x\to a}f(x)=f(a).
\]

#### Essential theorems/results
- Squeeze: \(g\le f\le k,\ \lim g=\lim k=\ell\Rightarrow\lim f=\ell\); and \(|f-\ell|\le g,\ \lim g=0\Rightarrow\lim f=\ell\).
- Composite: \(\lim_{x\to a}h=b,\ \lim_{t\to b}g=c\Rightarrow\lim_{x\to a}g(h(x))=c\).
- Differentiable ⇒ continuous (converse false); usual/composite functions are continuous.
- IVT and its root corollary; strict monotonicity ⇒ uniqueness (bijection); image of an interval is an interval.

#### Main problem patterns
Compute a limit (finite/infinite, one-sided); lift an indeterminate form; find horizontal/vertical/oblique asymptotes and position; test continuity or fit a parameter; prove existence/uniqueness of a root and localise it; show a bijection and describe \(f^{-1}\).

#### Connections between the chapter's ideas
Limits define continuity; continuity gives the IVT; asymptotes summarise limit behaviour geometrically. The difference quotient \(\frac{f(x)-f(a)}{x-a}\to f'(a)\) links this unit to derivatives, and the IVT + monotonicity reappear in the full "function study" and in \(u_{n+1}=f(u_n)\).

#### Recommended study order
Limit at \(\infty\) → limit at a point (one-sided) → operations & indeterminate forms → comparison → composite → oblique asymptote → continuity → IVT & bijection.

#### Chapter checklist
- [ ] I lift each of the four indeterminate forms with the right tool.
- [ ] I find all asymptotes (horizontal, vertical, oblique) and the graph's position.
- [ ] I test continuity and use the IVT for existence and uniqueness of a root.

#### Chapter review test
1. Compute \(\displaystyle\lim_{x\to-\infty}\frac{3x^2-x+2}{1-2x^2}\).
2. Study both one-sided limits of \(\displaystyle\frac{x-3}{x+2}\) at \(a=-2\), and give the vertical asymptote.
3. Compute \(\displaystyle\lim_{x\to2}\frac{x^2-x-2}{x^2-4}\).
4. Compute \(\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+2x}-x\big)\).
5. Show that \(y=x-2\) is an oblique asymptote of \(f(x)=\dfrac{x^2-3x+1}{x-1}\) at \(\pm\infty\), and study the position.
6. Find \(m\) so that \(f(x)=\begin{cases}\dfrac{\sqrt{x+4}-2}{x},&x\neq0,\\ m,&x=0,\end{cases}\) is continuous at \(0\).
7. Show that \(x^3+2x-5=0\) has a unique real solution, and locate it to within \(0.5\).
8. Using the squeeze theorem, compute \(\displaystyle\lim_{x\to+\infty}\frac{2x+\cos x}{x+1}\).

#### Model solutions for the chapter review test
1. Equal degrees \(2\): ratio \(\frac{3x^2}{-2x^2}=-\frac32\). So \(\displaystyle\lim_{x\to-\infty}\frac{3x^2-x+2}{1-2x^2}=-\frac32\).
2. Numerator at \(-2\): \(-2-3=-5<0\). Denominator \(x+2\): right (\(x>-2\)) \(\to0^{+}\Rightarrow\frac{-5}{0^{+}}=-\infty\); left \(\to0^{-}\Rightarrow+\infty\). Vertical asymptote \(x=-2\); no two-sided limit.
3. \(\frac00\): \(\frac{x^2-x-2}{x^2-4}=\frac{(x-2)(x+1)}{(x-2)(x+2)}=\frac{x+1}{x+2}\to\frac{3}{4}\). Answer: \(\frac34\).
4. \(\infty-\infty\): conjugate \(\frac{(x^2+2x)-x^2}{\sqrt{x^2+2x}+x}=\frac{2x}{\sqrt{x^2+2x}+x}\); for \(x>0\), \(=\frac{2x}{x(\sqrt{1+2/x}+1)}=\frac{2}{\sqrt{1+2/x}+1}\to\frac{2}{2}=1\). Answer: \(1\).
5. Divide: \(x^2-3x+1=(x-1)(x-2)-1\), so \(f(x)=x-2-\frac{1}{x-1}\); hence \(f(x)-(x-2)=\frac{-1}{x-1}\to0\) ⇒ oblique asymptote \(y=x-2\). Sign of \(\frac{-1}{x-1}\) opposite to \(x-1\): below for \(x>1\), above for \(x<1\).
6. Conjugate: \(\frac{\sqrt{x+4}-2}{x}=\frac{(x+4)-4}{x(\sqrt{x+4}+2)}=\frac{1}{\sqrt{x+4}+2}\to\frac{1}{2+2}=\frac14\). So \(m=\frac14\).
7. \(f(x)=x^3+2x-5\) continuous; \(f(1)=1+2-5=-2<0\), \(f(2)=8+4-5=7>0\) ⇒ a root in \(]1,2[\). \(f'(x)=3x^2+2>0\) ⇒ strictly increasing ⇒ unique. Localise: \(f(1.5)=3.375+3-5=1.375>0\), so with \(f(1)<0\) the root is in \(]1,1.5[\), length \(0.5\).
8. For \(x>0\), \(-1\le\cos x\le1\Rightarrow\frac{2x-1}{x+1}\le\frac{2x+\cos x}{x+1}\le\frac{2x+1}{x+1}\). Both bounds \(\to2\) (equal degrees). By the squeeze theorem the limit is \(2\).

---

<a id="b1-u3"></a>
## Unit 3: Functions: Differentiation

> Source: Mathematics Textbook 1, pages 67–100.

### Unit overview

This unit builds the single most useful tool in all of analysis: the **derivative**. Everything in this course after it — curve sketching, optimisation, the study of limits and asymptotes, and later work in physics — leans on the ideas assembled here.

- **The derivative at a point** measures the *instantaneous rate of change* of a function, and geometrically it is the **slope of the tangent** to the graph. It is defined as a limit of average rates of change.
- **The derivative function** \(f'\) collects those slopes point by point, and a short **table of reference derivatives** plus a few **operation rules** (sum, product, quotient) let us differentiate almost any elementary function without returning to the limit.
- **Applications:** the sign of \(f'\) tells us where \(f\) increases or decreases (monotonicity), where it reaches **local extrema**, and — with continuity — how many solutions an equation \(f(x)=k\) has. All of this is organised in a **variation table**.
- **The chain rule** differentiates a **composite** function \(g\circ u\), and yields the practical formulas for \((u^n)'\), \((\sqrt u)'\) and \((1/u^n)'\).
- **Higher-order derivatives** \(f''\), \(f^{(n)}\) let us discuss concavity and prove general \(n\)-th-derivative formulas by induction.

**Why it matters:** differentiation is the gateway to the whole of calculus. A student who differentiates confidently and reads a variation table correctly controls curve-sketching, extremum, and equation-counting problems — the backbone of the baccalaureate exam.

**Prerequisites:** limits and continuity (previous unit), algebraic manipulation and factoring, trigonometry (\(\sin,\cos,\tan\)), and mathematical induction (Unit 1) for the \(n\)-th-derivative proofs.

**Main question types:** compute a derivative or a domain of differentiability; write a tangent line (at a point, parallel to a line, through an external point); study monotonicity and find extrema via a variation table; count/bracket the solutions of \(f(x)=k\); differentiate composites; compute \(f''\) or \(f^{(n)}\) and prove a general formula by induction.

### Unit concept map

```text
Differentiation
├── Derivative at a point a
│   ├── f'(a) = lim_{h→0} [f(a+h) − f(a)] / h   (= lim_{x→a} [f(x)−f(a)]/(x−a))
│   ├── Tangent at A(a, f(a)):  y = f'(a)(x − a) + f(a)
│   └── Local linear approximation:  f(a+h) ≈ f(a) + f'(a)h
├── Derivative function f'
│   ├── Reference table: (xⁿ)', (√x)', (1/x)', (sin)', (cos)', (tan)'
│   └── Operation rules: (u+v)', (ku)', (uv)', (1/v)', (u/v)'
├── Applications of f'
│   ├── Sign of f'  ⇒  monotonicity (variation table)
│   ├── f' changes sign at a  ⇒  local extremum at a
│   └── continuous + strictly monotone  ⇒  f(x)=k has a unique root
├── Chain rule:  (g∘u)' = g'(u)·u'
│   └── (uⁿ)' = n u' uⁿ⁻¹ ,  (√u)' = u'/(2√u) ,  (1/uⁿ)' = −n u'/uⁿ⁺¹
└── Higher-order derivatives:  f'' , … , f⁽ⁿ⁾ = (f⁽ⁿ⁻¹⁾)'
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(f'(a)=\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}\) | \(a\) point, \(h\) increment | \(f\) defined near \(a\); limit exists | if the limit is infinite or does not exist | equal form \(\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}\) |
| \(y=f'(a)(x-a)+f(a)\) | tangent at \(A(a,f(a))\) | \(f\) differentiable at \(a\) | if the tangent is vertical (\(f'(a)\) infinite) | slope of the tangent \(=f'(a)\) |
| \((x^n)'=nx^{n-1}\) | \(n\in\mathbb{N}^*\) | all \(x\) | — | \((c)'=0\), \((mx+p)'=m\) |
| \((\sqrt x)'=\dfrac{1}{2\sqrt x}\) | — | \(x>0\) | at \(x=0\) (vertical tangent) | \(\left(\dfrac{1}{x^n}\right)'=-\dfrac{n}{x^{n+1}}\) |
| \((\sin x)'=\cos x,\ (\cos x)'=-\sin x\) | — | all \(x\) | — | \((\tan x)'=\dfrac{1}{\cos^2x}=1+\tan^2x\) |
| \((uv)'=u'v+uv'\) | \(u,v\) differentiable | on \(D\) | — | \((ku)'=ku'\), \((u+v)'=u'+v'\) |
| \(\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}\) | quotient rule | \(v\neq0\) on \(D\) | where \(v=0\) | \(\left(\dfrac1v\right)'=-\dfrac{v'}{v^2}\) |
| \((g\circ u)'=g'(u)\cdot u'\) | \(u:I\to J\), \(g\) on \(J\) | both differentiable | if inner value leaves \(J\) | \((f(ax+b))'=a\,f'(ax+b)\) |
| \((u^n)'=nu'u^{n-1}\) | \(n\in\mathbb{N}^*\) | \(u\) differentiable | — | \(\left(\dfrac{1}{u^n}\right)'=-\dfrac{nu'}{u^{n+1}}\), \(u\neq0\) |
| \((\sqrt u)'=\dfrac{u'}{2\sqrt u}\) | — | \(u>0\) on \(I\) | where \(u=0\) | back to the limit if \(u=0\) |
| \(f'>0\) on \(I\Rightarrow f\nearrow\) | sign of \(f'\) | \(f\) differentiable, isolated zeros allowed | if \(f'\) changes sign inside \(I\) | \(f'<0\Rightarrow f\searrow\); \(f'=0\Rightarrow f\) constant |
| local extremum \(\Rightarrow f'(a)=0\) | necessary condition | \(I\) open, \(a\in I\) | \(f'(a)=0\) alone is not sufficient | extremum iff \(f'\) **changes sign** |
| \(f^{(n)}=(f^{(n-1)})'\) | \(n\)-th derivative | \(f\) is \(n\) times differentiable | — | \(f^{(0)}=f\), \(f^{(2)}=f''\) |

### Unit learning checklist

- [ ] I compute a derivative from the limit definition and I know the reference table by heart.
- [ ] I apply the product, quotient, and chain rules without dropping a factor.
- [ ] I write the tangent line at a point, and find tangents parallel to a given line.
- [ ] I build a variation table from the sign of \(f'\) and read off the extrema.
- [ ] I differentiate composites: \((u^n)'\), \((\sqrt u)'\), \((\sin u)'\), \((\tan u)'\).
- [ ] I compute \(f''\) and prove a formula for \(f^{(n)}\) by induction.

---

<a id="b1u3-l1"></a>
### Lesson 1: The derivative — definition and rules

#### Core idea

Take a function \(f\) and a point \(a\). Between \(a\) and a nearby point \(a+h\), the **average rate of change** is \(\dfrac{f(a+h)-f(a)}{h}\) — the slope of the chord joining the two points on the graph. As the second point slides toward the first (\(h\to0\)), that chord turns into the **tangent**, and its slope, *if the limit exists*, is the **derivative number** \(f'(a)\). So the derivative answers a very concrete question: *how fast is \(f\) changing right at \(a\)?* — and geometrically, *how steep is the curve there?*

Doing this at every point produces a new function, the **derivative function** \(f'\). We almost never compute it from the limit each time: a short **table of reference derivatives** together with a handful of **operation rules** (sum, scalar multiple, product, quotient) lets us differentiate any polynomial, rational, or basic trigonometric expression mechanically.

**How does a student recognise this lesson?** Any wording involving "derivative", "\(f'\)", "slope of the tangent", "rate of change", "equation of the tangent", or "differentiable at / on" belongs here. The usual points of confusion are: forgetting that differentiability can **fail** (a vertical tangent gives an infinite limit, e.g. \(\sqrt x\) at \(0\)); mixing up the product and quotient rules; and confusing the value \(f'(a)\) (a number, the slope) with the function \(f'\).

#### Prerequisite knowledge
- Limits, and the meaning of "the limit exists / is infinite".
- Slope of a line through two points, and the equation of a line through a point with a given slope.
- Algebra: expanding \((a+h)^2\), factoring, simplifying rational expressions.
- The values and identities of \(\sin,\cos,\tan\).

#### Definitions

**Definition (derivative number at a point).** Let \(f\) be defined on an interval \(I\) and let \(a\in I\). We say \(f\) is **differentiable at \(a\)** if the following limit exists and is finite; that limit is the **derivative number** \(f'(a)\):
\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.
\]

**Definition (derivative function).** If \(f\) is differentiable at every point of \(I\), the function \(f':a\mapsto f'(a)\) is the **derivative function** of \(f\) on \(I\). (It may be defined on a union of intervals — e.g. \(f(x)=1/x\) has \(f'(x)=-1/x^2\) on \(]-\infty,0[\cup]0,+\infty[\).)

**Definition (tangent and local linear approximation).** The **tangent** to the graph \(\mathcal{C}_f\) at \(A(a,f(a))\) is the line of slope \(f'(a)\) through \(A\); near \(A\) the curve is close to it, so \(f(a+h)\approx f(a)+f'(a)h\) for small \(h\).

> Source: Mathematics Textbook 1, pages 67–69.

#### Formulas and properties

**Tangent line at \(A(a,f(a))\):**
\[
\boxed{\,y=f'(a)(x-a)+f(a)\,}
\]

**Reference derivatives** (memorise these):
\[
(c)'=0,\quad (mx+p)'=m,\quad (x^n)'=nx^{n-1}\ (n\in\mathbb{N}^*),\quad \left(\frac{1}{x^n}\right)'=-\frac{n}{x^{n+1}}\ (x\neq0),
\]
\[
(\sqrt x)'=\frac{1}{2\sqrt x}\ (x>0),\quad (\sin x)'=\cos x,\quad (\cos x)'=-\sin x,\quad (\tan x)'=\frac{1}{\cos^2x}=1+\tan^2x.
\]

**Operation rules** (\(u,v\) differentiable on \(D\), \(k\in\mathbb{R}\)):
\[
(u+v)'=u'+v',\quad (ku)'=ku',\quad (uv)'=u'v+uv',
\]
\[
\left(\frac{1}{v}\right)'=-\frac{v'}{v^2},\quad \left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2}\qquad(v\neq0\text{ on }D).
\]

> **Important condition:** \((\sqrt x)'=\dfrac{1}{2\sqrt x}\) holds only for \(x>0\). At \(x=0\) the ratio \(\dfrac{\sqrt h}{h}=\dfrac{1}{\sqrt h}\to+\infty\), so \(\sqrt x\) is **not** differentiable at \(0\) (vertical tangent). A function can be continuous at a point yet not differentiable there.

> **Common mistake:** writing \((uv)'=u'v'\). The product rule is \((uv)'=u'v+uv'\) — two terms, each differentiating one factor and leaving the other alone.

#### Recognising the idea and the solution method
- **"Compute \(f'\)"** → identify the outer shape (sum? product? quotient?), apply the matching rule, and use the reference table for each piece.
- **"Is \(f\) differentiable at \(a\)?"** especially at an endpoint or where a root/denominator is delicate → go back to the limit \(\lim_{h\to0}\frac{f(a+h)-f(a)}{h}\).
- **"Write the tangent at \(x=a\)"** → compute \(f(a)\) and \(f'(a)\), then substitute into \(y=f'(a)(x-a)+f(a)\).

**Standard algorithm for a tangent line:**
1. Check \(f\) is differentiable at \(a\) and compute \(f'\).
2. Evaluate the slope \(m=f'(a)\) and the point \(f(a)\).
3. Write \(y=m(x-a)+f(a)\) and simplify to \(y=mx+p\).

#### Basic example

**B1-U3-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Let \(f(x)=x^2-3x\). Using the definition, compute \(f'(2)\), then write the tangent to \(\mathcal{C}_f\) at the point of abscissa \(2\).

**Why this method applies.** The phrase "using the definition" asks for the limit of the average rate of change; the tangent then uses \(f'(2)\) as its slope.

**Step-by-step solution.**
\[
\frac{f(2+h)-f(2)}{h}=\frac{\big[(2+h)^2-3(2+h)\big]-\big[4-6\big]}{h}=\frac{(4+4h+h^2-6-3h)+2}{h}=\frac{h^2+h}{h}=h+1.
\]
As \(h\to0\), this tends to \(1\), so \(f'(2)=1\). Also \(f(2)=4-6=-2\). Tangent:
\[
y=f'(2)(x-2)+f(2)=1\cdot(x-2)+(-2)=x-4.
\]

**Final answer.** \(f'(2)=1\); tangent \(y=x-4\).

**Verification.** By the table, \(f'(x)=2x-3\), so \(f'(2)=4-3=1\). ✔ The line \(y=x-4\) passes through \((2,-2)\): \(2-4=-2\). ✔

**What the student should learn.** The definition and the table agree; simplify the difference quotient until the \(h\) in the denominator cancels **before** letting \(h\to0\).

> Source: example created in the style of pages 67–68.

#### Textbook-level example

**B1-U3-L1-E02**

**Problem.** Give the domain and the derivative of each function:
\[
\text{(a) } f(x)=\frac{x^3-3x^2+x-1}{4},\qquad \text{(b) } g(x)=\frac{1}{x^2+x+1},\qquad \text{(c) } k(x)=x^3\cos x.
\]

**Problem analysis.** (a) is a polynomial (differentiate term by term), (b) is \(1/v\) with \(v=x^2+x+1\), (c) is a product \(uv\). We must first justify the domain of differentiability.

**Step-by-step solution.**
- **(a)** \(f=\tfrac14(x^3-3x^2+x-1)\) is a polynomial, differentiable on \(\mathbb{R}\):
\[
f'(x)=\tfrac14\big(3x^2-6x+1\big).
\]
- **(b)** The denominator \(v=x^2+x+1\) has discriminant \(\Delta=1-4=-3<0\), so \(v>0\) on \(\mathbb{R}\); \(g\) is differentiable on \(\mathbb{R}\). With \(\left(\dfrac1v\right)'=-\dfrac{v'}{v^2}\) and \(v'=2x+1\):
\[
g'(x)=-\frac{2x+1}{(x^2+x+1)^2}.
\]
- **(c)** \(k=uv\) with \(u=x^3\ (u'=3x^2)\) and \(v=\cos x\ (v'=-\sin x)\), differentiable on \(\mathbb{R}\):
\[
k'(x)=3x^2\cos x+x^3(-\sin x)=x^2(3\cos x-x\sin x).
\]

**Final answer.** \(f'(x)=\tfrac14(3x^2-6x+1)\); \(g'(x)=-\dfrac{2x+1}{(x^2+x+1)^2}\); \(k'(x)=x^2(3\cos x-x\sin x)\).

**Verification.** In (a), term-by-term: \((x^3)'=3x^2,\ (-3x^2)'=-6x,\ (x)'=1,\ (-1)'=0\), all divided by \(4\). ✔

**What the student should learn.** Always state *why* the function is differentiable (polynomial; non-vanishing denominator) before writing \(f'\), and pick the rule that matches the function's outer form.

> Source: Mathematics Textbook 1, page 70.

#### Common mistake

> **Common mistake:** applying the quotient rule "upside down", writing \(\left(\dfrac{u}{v}\right)'=\dfrac{uv'-u'v}{v^2}\). The correct numerator is \(u'v-uv'\) (derivative of the top times the bottom, **minus** top times derivative of the bottom). A quick check: \(\left(\dfrac{1}{v}\right)'\) must come out as \(-\dfrac{v'}{v^2}\); if your quotient rule gives \(+\dfrac{v'}{v^2}\), the order is wrong.

#### Special cases
- **Constant multiple that looks like a product:** if \(P(x)=c\cdot f(x)\) with \(c\) a **constant**, then \(P'=c\,f'\); do not apply the product rule (a constant's derivative is \(0\)).
- **Vertical tangent:** where the difference quotient tends to \(\pm\infty\) (e.g. \(\sqrt x\) at \(0\)), \(f\) is continuous but not differentiable.
- **Endpoint of a closed domain:** differentiability there means the corresponding **one-sided** limit exists.

#### Practice set
1. **(B1-U3-L1-P01)** For \(f(x)=x^3+1\), compute \(f'(2)\) from the reference table.
2. **(B1-U3-L1-P02)** Write the tangent to \(\mathcal{C}_f\) at \(x=3\) for \(f(x)=x^2\).
3. **(B1-U3-L1-P03)** Differentiate \(f(x)=x^2\sin x\) (product rule).
4. **(B1-U3-L1-P04)** Differentiate \(f(x)=\dfrac{x+1}{x-1}\) and give its domain of differentiability. *(quotient rule)*
5. **(B1-U3-L1-P05)** *(near exam level)* Write the tangent to \(f(x)=\sqrt x\) at \(x=4\), and explain why no tangent line (with finite slope) exists at \(x=0\).

#### Practice solutions
1. \(f'(x)=3x^2\), so \(f'(2)=3\cdot4=12\).
2. \(f'(x)=2x\Rightarrow f'(3)=6\), \(f(3)=9\); tangent \(y=6(x-3)+9=6x-9\).
3. \(u=x^2\ (u'=2x)\), \(v=\sin x\ (v'=\cos x)\): \(f'(x)=2x\sin x+x^2\cos x\).
4. \(u=x+1\ (u'=1)\), \(v=x-1\ (v'=1)\), \(v\neq0\) so domain \(\mathbb{R}\setminus\{1\}\): \(f'(x)=\dfrac{(1)(x-1)-(x+1)(1)}{(x-1)^2}=\dfrac{-2}{(x-1)^2}\).
5. \(f'(x)=\dfrac{1}{2\sqrt x}\Rightarrow f'(4)=\dfrac14\), \(f(4)=2\); tangent \(y=\tfrac14(x-4)+2=\tfrac14x+1\). At \(0\): \(\dfrac{f(h)-f(0)}{h}=\dfrac{\sqrt h}{h}=\dfrac{1}{\sqrt h}\to+\infty\), so the limit is infinite — the tangent is **vertical** and \(f\) is not differentiable at \(0\).

#### Lesson summary
- **Most important definition:** \(f'(a)=\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}\) is the slope of the tangent at \(a\).
- **Most important formulas:** the reference table plus \((uv)'=u'v+uv'\) and \(\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}\).
- **Most important formula (geometry):** tangent \(y=f'(a)(x-a)+f(a)\).
- **Most important condition:** \((\sqrt x)'\) needs \(x>0\); differentiability can fail (vertical tangent).
- **Most common mistake:** \((uv)'=u'v'\), or reversing the quotient-rule numerator.
- **Quick self-check:** what is the slope of the tangent to \(y=\dfrac1x\) at \(x=2\)? *(Answer: \(f'(x)=-\dfrac{1}{x^2}\Rightarrow f'(2)=-\dfrac14\).)*

---

<a id="b1u3-l2"></a>
### Lesson 2: Applications of differentiation (monotonicity, extrema, tangent)

#### Core idea

The derivative is a **sign detector for slope**. Where \(f'(x)>0\) the tangents point upward, so \(f\) **increases**; where \(f'(x)<0\) it **decreases**; where \(f'\) is zero the tangent is horizontal. This single observation turns curve-behaviour questions into sign-of-a-derivative questions, which we organise in a **variation table**: one row for the sign of \(f'\), one row for the arrows of \(f\).

Two consequences are constantly used. First, at a **local extremum** inside an open interval the tangent is horizontal, so \(f'(a)=0\) — but this is only a *necessary* condition; we get an actual extremum precisely when \(f'\) **changes sign** at \(a\). Second, if \(f\) is continuous and strictly monotone on \([a,b]\), it hits each value between \(f(a)\) and \(f(b)\) exactly once, so an equation \(f(x)=k\) has a **unique** solution there — which we can then bracket to any desired precision.

**How does a student recognise this lesson?** Wordings like "study the variation / monotonicity", "find the local extrema", "the tangent is horizontal", "how many solutions does \(f(x)=k\) have", or "bracket the root to \(10^{-1}\)". The classic trap is concluding an extremum from \(f'(a)=0\) alone (think of \(x^3\) at \(0\): \(f'(0)=0\) but no extremum, since \(f'=3x^2\ge0\) never changes sign).

#### Prerequisite knowledge
- Computing \(f'\) and factoring it to read its sign.
- Sign of a product/quotient and sign charts.
- Continuity and the intermediate-value idea (previous unit).

#### Definitions

**Definition (monotonicity via the derivative).** Let \(f\) be differentiable on an interval \(I\). If \(f'(x)>0\) on \(I\) (except possibly at finitely many points where it vanishes), \(f\) is **strictly increasing** on \(I\); if \(f'(x)<0\) similarly, \(f\) is **strictly decreasing**; if \(f'(x)=0\) on all of \(I\), \(f\) is **constant**.

**Definition (local extremum).** \(f\) has a **local maximum** \(f(a)\) at \(a\in I\) if \(f(x)\le f(a)\) for all \(x\) in some open interval around \(a\); a **local minimum** if \(f(x)\ge f(a)\) there. A local maximum or minimum value is a **local extreme value**.

> Source: Mathematics Textbook 1, pages 72–73.

#### Theorems and proofs

**Theorem (sign of the derivative and monotonicity).** For \(f\) differentiable on an interval \(I\):
\[
f'\ge0\text{ on }I\iff f\text{ increasing on }I,\qquad f'\le0\text{ on }I\iff f\text{ decreasing on }I.
\]
Strict positivity (with at most isolated zeros) gives strict monotonicity. *(Stated as a review result; the student applies it.)*

**Theorem (necessary condition for a local extremum).** Let \(f\) be differentiable on an **open** interval \(I\) and \(a\in I\).
1. If \(f\) has a local extreme value at \(a\), then \(f'(a)=0\).
2. If \(f'\) **changes sign** at \(a\), then \(f(a)\) is a local extreme value and the tangent at \((a,f(a))\) is horizontal.

> **Important condition:** \(f'(a)=0\) is **necessary but not sufficient**. The sign of \(f'\) must actually change across \(a\) for an extremum to occur.

**Theorem (unique solution of \(f(x)=k\)).** If \(f\) is **continuous and strictly monotone** on \([a,b]\) and \(k\) lies between \(f(a)\) and \(f(b)\), then \(f(x)=k\) has a **unique solution** in \([a,b]\). *(Bijection / intermediate-value theorem; applied, not proved here.)*

#### Recognising the idea and the solution method

**Standard algorithm for a variation study:**
1. State the domain \(D_f\); note any symmetry/periodicity that shrinks the study interval.
2. Compute \(f'\) and factor it.
3. Determine the **sign of \(f'\)** on each sub-interval (sign chart).
4. Fill the **variation table**: sign row for \(f'\), arrows for \(f\), and the values of \(f\) at the endpoints and at the zeros of \(f'\).
5. Read off monotonicity and **local extrema** (where \(f'\) changes sign).
6. If asked, use continuity + strict monotonicity to count/bracket solutions of \(f(x)=k\).

> **Exam-style insight:** an extremum earns marks only if you show the **sign change** of \(f'\), not merely \(f'(a)=0\). Put a clear \(+\)/\(-\) sign row in the table.

#### Basic example

**B1-U3-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Study the variation of \(f(x)=x^3-3x\) on \(\mathbb{R}\), find its local extrema, and build the variation table.

**Why this method applies.** A polynomial: compute \(f'\), factor, read the sign, then the table gives monotonicity and extrema directly.

**Step-by-step solution.** \(f\) is differentiable on \(\mathbb{R}\) and
\[
f'(x)=3x^2-3=3(x-1)(x+1).
\]
Sign of \(f'\): positive for \(x<-1\), negative for \(-1<x<1\), positive for \(x>1\). Values: \(f(-1)=(-1)^3-3(-1)=2\), \(f(1)=1-3=-2\).

| \(x\) | \(-\infty\) | | \(-1\) | | \(1\) | | \(+\infty\) |
|---|---|---|---|---|---|---|---|
| \(f'(x)\) | | \(+\) | \(0\) | \(-\) | \(0\) | \(+\) | |
| \(f(x)\) | | \(\nearrow\) | \(2\) | \(\searrow\) | \(-2\) | \(\nearrow\) | |

**Final answer.** \(f\) is increasing on \(]-\infty,-1]\), decreasing on \([-1,1]\), increasing on \([1,+\infty[\). **Local maximum** \(f(-1)=2\); **local minimum** \(f(1)=-2\).

**Verification.** \(f'\) changes from \(+\) to \(-\) at \(x=-1\) (maximum) and from \(-\) to \(+\) at \(x=1\) (minimum) — consistent. Numerically \(f(-2)=-2<2\) and \(f(0)=0<2\), confirming the local max at \(-1\). ✔

**What the student should learn.** Factor \(f'\) to see its sign at a glance; the extrema sit exactly where \(f'\) switches sign.

> Source: example created in the style of pages 72–74.

#### Textbook-level example

**B1-U3-L2-E02**

**Problem.** Study the full function \(f(x)=\tan x=\dfrac{\sin x}{\cos x}\): domain, parity, periodicity, monotonicity, behaviour near \(\tfrac\pi2\), variation table, and shape of the graph.

**Problem analysis.** A quotient of trigonometric functions. Parity and periodicity shrink the study interval; the derivative decides monotonicity; the limit near \(\tfrac\pi2\) reveals an asymptote.

**Step-by-step solution.**
1. **Domain.** \(\tan x\) needs \(\cos x\neq0\): \(D_f=\mathbb{R}\setminus\left\{\tfrac\pi2+k\pi:k\in\mathbb{Z}\right\}\).
2. **Parity (odd).** \(f(-x)=\dfrac{\sin(-x)}{\cos(-x)}=\dfrac{-\sin x}{\cos x}=-\tan x=-f(x)\): odd, so \(\mathcal{C}_f\) is symmetric about the origin.
3. **Periodicity.** \(f(x+\pi)=\dfrac{\sin(x+\pi)}{\cos(x+\pi)}=\dfrac{-\sin x}{-\cos x}=\tan x\): period \(\pi\). Study on \(\left]-\tfrac\pi2,\tfrac\pi2\right[\); by oddness it suffices to study \(\left[0,\tfrac\pi2\right[\).
4. **Behaviour near \(\tfrac\pi2\).** As \(x\to\tfrac\pi2^-\), \(\cos x\to0^+\) and \(\sin x\to1\), so \(\tan x\to+\infty\); the line \(x=\tfrac\pi2\) is a **vertical asymptote**.
5. **Derivative.** \(f\) is differentiable on \(D_f\) and, by the quotient rule,
\[
f'(x)=\frac{\cos x\cos x-\sin x(-\sin x)}{\cos^2x}=\frac{\cos^2x+\sin^2x}{\cos^2x}=\frac{1}{\cos^2x}=1+\tan^2x.
\]
Since \(f'(x)>0\) throughout \(D_f\), \(f\) is **strictly increasing** on \(\left]-\tfrac\pi2,\tfrac\pi2\right[\).
6. **Variation table** on \(\left[0,\tfrac\pi2\right[\):

| \(x\) | \(0\) | | \(\tfrac\pi2\) |
|---|---|---|---|
| \(f'(x)\) | | \(+\) | ‖ |
| \(f(x)\) | \(0\) | \(\nearrow\) | \(+\infty\) |

7. **Graph.** A branch through the origin, increasing to \(+\infty\) at \(x=\tfrac\pi2^-\); by oddness the mirror branch on \(\left]-\tfrac\pi2,0\right]\); by periodicity the whole picture repeats every \(\pi\), with vertical asymptotes at \(x=\tfrac\pi2+k\pi\).

**Final answer.** \(f'(x)=\dfrac{1}{\cos^2x}=1+\tan^2x>0\); \(\tan\) is odd, \(\pi\)-periodic, strictly increasing on each branch, with vertical asymptotes at \(x=\tfrac\pi2+k\pi\).

**Verification.** \(f(0)=0\), \(f(\tfrac\pi4)=1\), \(f(\tfrac\pi3)=\sqrt3\approx1.73\): increasing, as the table says. ✔

**What the student should learn.** Exploit parity and periodicity first (they shrink the work), then let the sign of \(f'\) drive the table. Record \((\tan x)'=\dfrac{1}{\cos^2x}=1+\tan^2x\) as a reference result.

> Source: Mathematics Textbook 1, pages 74–76.

#### Harder / composite example

**B1-U3-L2-E03**

**Problem.** Study \(f(x)=x/(x^2+1)\) on \(\mathbb{R}\): monotonicity, local extrema, and the number of solutions of \(f(x)=\tfrac13\).

**Problem analysis.** A quotient with a strictly positive denominator, so differentiable everywhere; the sign of \(f'\) reduces to the sign of its numerator; then monotonicity on each piece lets us count roots.

**Step-by-step solution.** With \(u=x\ (u'=1)\), \(v=x^2+1\ (v'=2x)\), \(v>0\) on \(\mathbb{R}\):
\[
f'(x)=\frac{u'v-uv'}{v^2}=\frac{(1)(x^2+1)-x(2x)}{(x^2+1)^2}=\frac{1-x^2}{(x^2+1)^2}=\frac{(1-x)(1+x)}{(x^2+1)^2}.
\]
The denominator is \(>0\), so \(\operatorname{sign}(f')=\operatorname{sign}(1-x^2)\): negative for \(x<-1\), positive for \(-1<x<1\), negative for \(x>1\). Values: \(f(-1)=\dfrac{-1}{2}\), \(f(1)=\dfrac12\).

| \(x\) | \(-\infty\) | | \(-1\) | | \(1\) | | \(+\infty\) |
|---|---|---|---|---|---|---|---|
| \(f'(x)\) | | \(-\) | \(0\) | \(+\) | \(0\) | \(-\) | |
| \(f(x)\) | | \(\searrow\) | \(-\tfrac12\) | \(\nearrow\) | \(\tfrac12\) | \(\searrow\) | |

**Local minimum** \(f(-1)=-\tfrac12\); **local maximum** \(f(1)=\tfrac12\). For \(f(x)=\tfrac13\): since \(\tfrac13\) lies strictly between the minimum \(-\tfrac12\) and the maximum \(\tfrac12\), and \(f\) is continuous with \(f\to0\) at \(\pm\infty\), the horizontal line \(y=\tfrac13\) meets the curve in exactly **two** points (once on the increasing branch \([-1,1]\), once on the decreasing branch \([1,+\infty[\), because \(f(1)=\tfrac12>\tfrac13>0=\lim_{+\infty}f\), while on \(]-\infty,-1]\) values stay \(\le-\tfrac12<\tfrac13\)).

**Final answer.** \(f'(x)=\dfrac{1-x^2}{(x^2+1)^2}\); local min \(-\tfrac12\) at \(x=-1\), local max \(\tfrac12\) at \(x=1\); \(f(x)=\tfrac13\) has exactly **two** solutions.

**Verification.** \(f'(0)=1>0\) (increasing between \(-1\) and \(1\)) and \(f'(2)=\dfrac{1-4}{25}=-\dfrac{3}{25}<0\) (decreasing after \(1\)): consistent with the table. ✔

**What the student should learn.** For a quotient with positive denominator, the sign of \(f'\) is the sign of its numerator; counting solutions of \(f(x)=k\) means comparing \(k\) with the extrema and the end-behaviour.

> Source: example created in the style of pages 73–76.

#### Common mistake

> **Common mistake:** declaring "\(a\) is a local extremum because \(f'(a)=0\)". This is false in general: for \(f(x)=x^3\), \(f'(x)=3x^2\) gives \(f'(0)=0\), yet \(f\) is strictly increasing and has **no** extremum at \(0\) because \(f'\) does **not** change sign. Always check the sign change.

#### Special cases
- **Horizontal inflection:** \(f'(a)=0\) with **no** sign change (e.g. \(x^3\) at \(0\)) — a horizontal tangent but no extremum.
- **Endpoint extrema:** on a closed interval, a maximum or minimum may occur at an endpoint even if \(f'\neq0\) there.
- **Strictly monotone \(\Rightarrow\) at most one root:** a strictly monotone continuous function meets any horizontal line at most once.

#### Practice set
1. **(B1-U3-L2-P01)** Study the variation of \(f(x)=x^3-12x\) and give its local extrema.
2. **(B1-U3-L2-P02)** Find the local extrema of \(f(x)=x^4-2x^2\). *(three critical points)*
3. **(B1-U3-L2-P03)** Write the tangent to \(f(x)=x^2-4x+3\) at \(x=1\), and say whether it is horizontal.
4. **(B1-U3-L2-P04)** Find the local extrema of \(f(x)=2x^3-3x^2+1\).
5. **(B1-U3-L2-P05)** *(near exam level)* For \(f(x)=x^3-3x\), use the variation table of E01 to determine how many solutions \(f(x)=1\) has.

#### Practice solutions
1. \(f'(x)=3x^2-12=3(x-2)(x+2)\): \(+,-,+\). **Local max** \(f(-2)=(-2)^3-12(-2)=-8+24=16\); **local min** \(f(2)=8-24=-16\).
2. \(f'(x)=4x^3-4x=4x(x-1)(x+1)\): sign \(-,+,-,+\) across \(-1,0,1\). **Local minima** \(f(\pm1)=1-2=-1\); **local maximum** \(f(0)=0\).
3. \(f'(x)=2x-4\Rightarrow f'(1)=-2\neq0\), \(f(1)=1-4+3=0\); tangent \(y=-2(x-1)+0=-2x+2\), **not** horizontal.
4. \(f'(x)=6x^2-6x=6x(x-1)\): \(+,-,+\). **Local max** \(f(0)=1\); **local min** \(f(1)=2-3+1=0\).
5. From the table, \(f\) rises to the local max \(2\) at \(x=-1\), falls to the local min \(-2\) at \(x=1\), then rises again. The line \(y=1\) lies between \(-2\) and \(2\), so it crosses on all three monotone pieces: **three** solutions.

#### Lesson summary
- **Most important definition:** sign of \(f'\) ⇒ monotonicity; extremum where \(f'\) changes sign.
- **Most important tool:** the variation table (sign row for \(f'\), arrows for \(f\)).
- **Most important condition:** \(f'(a)=0\) is necessary, not sufficient, for an extremum.
- **Most important pattern:** continuous + strictly monotone ⇒ \(f(x)=k\) has a unique root on the interval.
- **Most common mistake:** reading an extremum off \(f'(a)=0\) without checking the sign change.
- **Quick self-check:** does \(f(x)=x^3\) have an extremum at \(0\)? *(Answer: no — \(f'=3x^2\ge0\) never changes sign.)*

---

<a id="b1u3-l3"></a>
### Lesson 3: Derivative of a composite function (chain rule)

#### Core idea

Many functions are built by **nesting**: an outer function \(g\) applied to an inner function \(u\), giving \(g(u(x))\) — think \(\sin(x^2)\), \(\sqrt{x^2+1}\), or \((3x-2)^4\). The **chain rule** says: to differentiate a nested function, differentiate the outer function *at the inner value* and multiply by the derivative of the inner function:
\[
(g\circ u)'(x)=g'(u(x))\cdot u'(x).
\]
Intuitively, if \(u\) changes \(a\) times as fast as \(x\), and \(g\) changes \(b\) times as fast as its input, then \(g(u(x))\) changes \(a\cdot b\) times as fast as \(x\).

From this one rule flow the everyday formulas \((u^n)'=nu'u^{n-1}\), \((\sqrt u)'=\dfrac{u'}{2\sqrt u}\), \((1/u^n)'=-\dfrac{nu'}{u^{n+1}}\), and \((\sin u)'=u'\cos u\), \((\cos u)'=-u'\sin u\), \((\tan u)'=\dfrac{u'}{\cos^2u}\). The whole skill is: **spot the inner function \(u\), and never drop the factor \(u'\)**.

**How does a student recognise this lesson?** Whenever "something" sits inside a power, a root, a trig function, or a reciprocal — anything of the form (function of a function). The number-one mistake is forgetting \(u'\): writing \((\sin(x^2))'=\cos(x^2)\) instead of \(2x\cos(x^2)\).

#### Prerequisite knowledge
- The reference table and operation rules (Lesson 1).
- Recognising a composition and identifying the inner function \(u\).
- Domain conditions: \(\sqrt u\) needs \(u>0\); \(1/u^n\) needs \(u\neq0\).

#### Definitions

**Definition (composite function).** Given \(u:I\to J\) and \(g:J\to\mathbb{R}\), the **composite** \(g\circ u\) is defined on \(I\) by \((g\circ u)(x)=g(u(x))\). Here \(u\) is the **inner** function and \(g\) the **outer** function.

> Source: Mathematics Textbook 1, pages 78–80.

#### Theorems and proofs

**Theorem (chain rule).** Let \(u\) be differentiable on an interval \(I\) and \(g\) differentiable on an interval \(J\), with \(u(x)\in J\) for every \(x\in I\). Then \(f=g\circ u\) is differentiable on \(I\) and
\[
\boxed{\,(g\circ u)'(x)=g'\big(u(x)\big)\cdot u'(x)\,}
\]
(This remains valid when \(I\) or \(J\) is a union of intervals.)

**Proof (sketch, as the book presents it "for reading").** Fix \(a\in I\), put \(b=u(a)\), and define the continuous auxiliary functions
\[
\alpha(x)=\begin{cases}\dfrac{u(x)-u(a)}{x-a},&x\neq a\\ u'(a),&x=a\end{cases}
\qquad
\beta(y)=\begin{cases}\dfrac{g(y)-g(b)}{y-b},&y\neq b\\ g'(b),&y=b.\end{cases}
\]
For \(x\neq a\), \(\beta(u(x))\,\alpha(x)=\dfrac{g(u(x))-g(u(a))}{x-a}=\dfrac{f(x)-f(a)}{x-a}\). Since \(u\) is continuous (\(u(x)\to b\)), \(\alpha(x)\to u'(a)\) and \(\beta(u(x))\to g'(b)\), so the ratio tends to \(g'(b)\,u'(a)=g'(u(a))\,u'(a)\). \(\blacksquare\) *(The student applies the rule; the proof is read, not reproduced.)*

**Corollaries (constantly used).**
\[
(u^n)'=n\,u'\,u^{n-1}\ (n\in\mathbb{N}^*),\qquad (\sqrt u)'=\frac{u'}{2\sqrt u}\ (u>0),\qquad \left(\frac{1}{u^n}\right)'=-\frac{n\,u'}{u^{n+1}}\ (u\neq0),
\]
\[
(f(ax+b))'=a\,f'(ax+b),\quad (\sin u)'=u'\cos u,\quad (\cos u)'=-u'\sin u,\quad (\tan u)'=\frac{u'}{\cos^2u}.
\]

> **Important condition:** \((\sqrt u)'=\dfrac{u'}{2\sqrt u}\) requires \(u>0\). At a point where \(u=0\), the corollary does **not** apply — go back to the limit definition to test differentiability there.

#### Recognising the idea and the solution method

**Standard algorithm for the chain rule:**
1. Identify the **inner** function \(u\) and the **outer** function \(g\).
2. Compute \(u'\) and \(g'\) separately.
3. Assemble \(f'=g'(u)\cdot u'\), i.e. "outer-prime at the inside, times inside-prime".
4. State the domain of differentiability (watch \(u>0\) for roots, \(u\neq0\) for reciprocals).
5. Simplify.

> **Exam-style insight:** write the inner function \(u\) explicitly at the top of your work and box \(u'\). Graders penalise a missing \(u'\) more than an unsimplified answer.

#### Basic example

**B1-U3-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Differentiate \(f(x)=\sin(x^2+1)\) and \(g(x)=(2x-3)^4\).

**Why this method applies.** Each is a single composition: \(\sin(\text{inside})\) and \((\text{inside})^4\). The chain rule applies directly.

**Step-by-step solution.**
- For \(f\): inner \(u=x^2+1\), \(u'=2x\); outer \(\sin\), derivative \(\cos\). Then
\[
f'(x)=u'\cos u=2x\cos(x^2+1).
\]
- For \(g\): inner \(u=2x-3\), \(u'=2\); with \((u^n)'=nu'u^{n-1}\) and \(n=4\):
\[
g'(x)=4\cdot2\cdot(2x-3)^{3}=8(2x-3)^3.
\]

**Final answer.** \(f'(x)=2x\cos(x^2+1)\); \(g'(x)=8(2x-3)^3\).

**Verification.** For \(g\), the factor-\(a\) rule gives \((2x-3)^4\)'\(=2\cdot4(2x-3)^3=8(2x-3)^3\). ✔ For \(f\), dropping \(u'\) would (wrongly) give \(\cos(x^2+1)\); the correct extra factor is \(2x\). ✔

**What the student should learn.** Name the inside, differentiate it, and multiply — the missing \(u'\) is the single most common lost mark.

> Source: example created in the style of pages 78–79.

#### Textbook-level example

**B1-U3-L3-E02**

**Problem.** Give the domain of differentiability and the derivative:
\[
\text{(a) } f(x)=(x^3+3x+1)^5,\qquad \text{(b) } f(x)=\sqrt{x^2+2x+3},\qquad \text{(c) } f(x)=\frac{1}{(x^2+x+1)^4}.
\]

**Problem analysis.** (a) is \(u^5\); (b) is \(\sqrt u\); (c) is \(1/u^4\). We use the three corollaries, first checking the domain conditions.

**Step-by-step solution.**
- **(a)** \(u=x^3+3x+1\), \(u'=3x^2+3\), differentiable on \(\mathbb{R}\):
\[
f'(x)=5u'u^4=5(3x^2+3)(x^3+3x+1)^4=15(x^2+1)(x^3+3x+1)^4.
\]
- **(b)** \(u=x^2+2x+3=(x+1)^2+2>0\) on \(\mathbb{R}\), \(u'=2x+2\); by \((\sqrt u)'=\dfrac{u'}{2\sqrt u}\):
\[
f'(x)=\frac{2x+2}{2\sqrt{x^2+2x+3}}=\frac{x+1}{\sqrt{x^2+2x+3}}.
\]
- **(c)** \(u=x^2+x+1\) has \(\Delta=-3<0\), so \(u>0\) on \(\mathbb{R}\); \(u'=2x+1\); with \(\left(\dfrac{1}{u^n}\right)'=-\dfrac{nu'}{u^{n+1}}\), \(n=4\):
\[
f'(x)=-\frac{4(2x+1)}{(x^2+x+1)^5}.
\]

**Final answer.** \(f'(x)=15(x^2+1)(x^3+3x+1)^4\); \(\dfrac{x+1}{\sqrt{x^2+2x+3}}\); \(-\dfrac{4(2x+1)}{(x^2+x+1)^5}\).

**Verification.** In (b), \(u=(x+1)^2+2\ge2>0\), so the root is defined and differentiable on all of \(\mathbb{R}\); the numerator \(2x+2=2(x+1)\) halves against the \(2\). ✔

**What the student should learn.** Match the shape to its corollary — power, root, reciprocal-power — and justify the domain condition (\(u>0\), \(u\neq0\)) before differentiating.

> Source: Mathematics Textbook 1, page 80.

#### Harder / composite example

**B1-U3-L3-E03**

**Problem.** Differentiate \(f(x)=\left(\dfrac{x}{x+1}\right)^3\) (giving its domain), and differentiate \(g(x)=\tan^2 x\).

**Problem analysis.** \(f\) nests a **quotient** inside a cube — chain rule with the quotient rule for \(u'\). \(g=\tan^2\) nests \(\tan\) inside a square, using \((\tan x)'=1+\tan^2x\).

**Step-by-step solution.**
- For \(f\): inner \(u=\dfrac{x}{x+1}\) (defined for \(x\neq-1\)), \(u'=\dfrac{(1)(x+1)-x(1)}{(x+1)^2}=\dfrac{1}{(x+1)^2}\). With \((u^3)'=3u'u^2\):
\[
f'(x)=3\cdot\frac{1}{(x+1)^2}\cdot\left(\frac{x}{x+1}\right)^2=\frac{3x^2}{(x+1)^4},\qquad x\neq-1.
\]
- For \(g=\tan^2 x=(\tan x)^2\): inner \(u=\tan x\), \(u'=1+\tan^2x\); with \((u^2)'=2u'u\):
\[
g'(x)=2\tan x\,(1+\tan^2x)=\frac{2\tan x}{\cos^2x},\qquad x\neq\tfrac\pi2+k\pi.
\]

**Final answer.** \(f'(x)=\dfrac{3x^2}{(x+1)^4}\) (on \(\mathbb{R}\setminus\{-1\}\)); \(g'(x)=2\tan x\,(1+\tan^2x)\).

**Verification.** For \(f\), \(u'\cdot u^2=\dfrac{1}{(x+1)^2}\cdot\dfrac{x^2}{(x+1)^2}=\dfrac{x^2}{(x+1)^4}\); times \(3\) gives \(\dfrac{3x^2}{(x+1)^4}\). ✔ For \(g\), since \(1+\tan^2x=\dfrac{1}{\cos^2x}\), the two forms agree. ✔

**What the student should learn.** Compositions can nest a quotient or another trig function; compute the inner derivative fully (here with the quotient rule) before assembling.

> Source: example created in the style of pages 80–81.

#### Common mistake

> **Common mistake:** forgetting the inner derivative \(u'\). Writing \(\big(\cos(3x)\big)'=-\sin(3x)\) is wrong; the inner function is \(u=3x\) with \(u'=3\), so the correct answer is \(-3\sin(3x)\). Likewise \((f(ax+b))'=a\,f'(ax+b)\) — never drop the \(a\).

#### Special cases
- **Affine inner function:** \((f(ax+b))'=a\,f'(ax+b)\) (e.g. \((\sin(2x))'=2\cos(2x)\)).
- **Root where the inside vanishes:** \((\sqrt u)'=\dfrac{u'}{2\sqrt u}\) fails at points with \(u=0\); test differentiability from the definition (often a vertical tangent).
- **Reciprocal power \(n=1\):** \(\left(\dfrac1u\right)'=-\dfrac{u'}{u^2}\), the special case of \(\left(\dfrac{1}{u^n}\right)'\).

#### Practice set
1. **(B1-U3-L3-P01)** Differentiate \(f(x)=(3x-2)^5\).
2. **(B1-U3-L3-P02)** Differentiate \(f(x)=\sqrt{x^2+1}\) and give its domain of differentiability.
3. **(B1-U3-L3-P03)** Differentiate \(f(x)=\sin(3x)\).
4. **(B1-U3-L3-P04)** Differentiate \(f(x)=\dfrac{1}{(x^2+1)^3}\).
5. **(B1-U3-L3-P05)** *(near exam level)* Differentiate \(f(x)=\cos^2 x\) and write the answer as a single sine.

#### Practice solutions
1. \(u=3x-2\), \(u'=3\): \(f'(x)=5\cdot3\cdot(3x-2)^4=15(3x-2)^4\).
2. \(u=x^2+1>0\) on \(\mathbb{R}\), \(u'=2x\): \(f'(x)=\dfrac{2x}{2\sqrt{x^2+1}}=\dfrac{x}{\sqrt{x^2+1}}\); domain \(\mathbb{R}\).
3. \(u=3x\), \(u'=3\): \(f'(x)=3\cos(3x)\).
4. \(u=x^2+1\neq0\), \(u'=2x\), \(n=3\): \(f'(x)=-\dfrac{3\cdot2x}{(x^2+1)^4}=-\dfrac{6x}{(x^2+1)^4}\).
5. \(u=\cos x\), \(u'=-\sin x\): \(f'(x)=2\cos x(-\sin x)=-2\sin x\cos x=-\sin(2x)\).

#### Lesson summary
- **Most important formula:** \((g\circ u)'=g'(u)\cdot u'\) — outer-prime at the inside, times inside-prime.
- **Most important consequences:** \((u^n)'=nu'u^{n-1}\), \((\sqrt u)'=\dfrac{u'}{2\sqrt u}\), \((\sin u)'=u'\cos u\), \((\tan u)'=\dfrac{u'}{\cos^2u}\).
- **Most important condition:** \((\sqrt u)'\) needs \(u>0\); reciprocals need \(u\neq0\).
- **Most important pattern:** name the inside \(u\), compute \(u'\), multiply.
- **Most common mistake:** dropping the factor \(u'\).
- **Quick self-check:** differentiate \(\sin(5x)\). *(Answer: \(5\cos(5x)\).)*

---

<a id="b1u3-l4"></a>
### Lesson 4: Higher-order derivatives

#### Core idea

If a derivative \(f'\) is itself differentiable, we can differentiate again to get the **second derivative** \(f''\), and again to get \(f'''\), and so on. The **\(n\)-th derivative** is defined by repeating the operation:
\[
f^{(n)}=\big(f^{(n-1)}\big)',\qquad f^{(0)}=f,\ f^{(1)}=f',\ f^{(2)}=f''.
\]
The first derivative describes *slope* (increase/decrease); the second describes how the slope itself changes — the **concavity** of the curve, and points where concavity switches (inflection points, where \(f''\) changes sign). Higher derivatives also appear in physics (position → velocity \(f'\) → acceleration \(f''\)) and in polynomial/trigonometric identities.

A recurring exam task is to find a **closed formula for \(f^{(n)}\)** for a whole family of functions (like \(1/(1-x)\) or \(1/x\)) and to **prove it by induction** — which ties this lesson back to Unit 1.

**How does a student recognise this lesson?** Wordings like "compute \(f''\)", "the \(n\)-th derivative", "prove \(f^{(n)}(x)=\ldots\)", or a relation to verify such as "\(f''+f=0\)". The confusing part is bookkeeping: differentiating repeatedly without sign or coefficient errors, and setting up the induction cleanly.

#### Prerequisite knowledge
- All differentiation rules, especially the chain rule (each new derivative reuses it).
- Mathematical induction (Unit 1): base case + inductive step.
- Factorials: \(n!=n(n-1)\cdots1\), and \((n+1)!=(n+1)\,n!\).

#### Definitions

**Definition (higher-order derivatives).** Let \(f\) be differentiable on \(I\) with derivative \(f'=f^{(1)}\). If \(f'\) is differentiable, its derivative is the **second derivative** \(f''=f^{(2)}=(f')'\). In general, for \(n\ge2\), if \(f^{(n-1)}\) is differentiable, the **\(n\)-th derivative** is
\[
f^{(n)}=\big(f^{(n-1)}\big)',
\]
and we say \(f\) is \(n\) times differentiable on \(I\) (with the convention \(f^{(0)}=f\)).

> Source: Mathematics Textbook 1, page 82.

#### Formulas and properties

- Each order is just the derivative of the previous one; there is no shortcut except when a pattern emerges (then prove it by induction).
- **Second derivative and concavity:** where \(f''>0\) the curve is convex (holds water); where \(f''<0\) it is concave; a sign change of \(f''\) marks an **inflection point**.
- Useful landmark results (obtained by repeated differentiation):
\[
(\sin x)''=-\sin x,\qquad (\cos x)''=-\cos x,\qquad \left(\frac{1}{x}\right)^{(n)}=\frac{(-1)^n\,n!}{x^{n+1}}.
\]

> **Common mistake:** treating \(f''\) as \((f')^2\) or as \(f'\cdot f\). The second derivative is the derivative **of the derivative**, \((f')'\) — a further differentiation, not a product.

#### Recognising the idea and the solution method

**Standard algorithm for an \(n\)-th-derivative formula:**
1. Compute \(f',f'',f'''\) explicitly; watch the emerging pattern (sign \((-1)^n\)? factorial \(n!\)? power shifting?).
2. **Conjecture** a formula \(E(n)\) for \(f^{(n)}\).
3. **Prove by induction:** verify the base \(E(1)\); assume \(E(n)\); differentiate once (usually via the chain rule) to reach \(E(n+1)\).
4. Conclude the formula holds for all \(n\ge1\).

> **Exam-style insight:** compute at least the first three derivatives before conjecturing — one or two are not enough to reveal the factorial/sign pattern.

#### Basic example

**B1-U3-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** For \(f(x)=x^4-2x^3+5\), compute \(f'\), \(f''\), \(f'''\), and \(f^{(4)}\), and locate the point where \(f''\) vanishes.

**Why this method applies.** A polynomial: differentiate term by term repeatedly; the second derivative's zero flags a possible inflection.

**Step-by-step solution.**
\[
f'(x)=4x^3-6x^2,\quad f''(x)=12x^2-12x=12x(x-1),\quad f'''(x)=24x-12,\quad f^{(4)}(x)=24.
\]
\(f''(x)=0\iff 12x(x-1)=0\iff x=0\text{ or }x=1\).

**Final answer.** \(f'=4x^3-6x^2\), \(f''=12x(x-1)\), \(f'''=24x-12\), \(f^{(4)}=24\); \(f''\) vanishes at \(x=0\) and \(x=1\).

**Verification.** Differentiating \(f'''=24x-12\) once more gives \(24\), constant — correct, since a degree-4 polynomial has a constant \(4\)th derivative and zero beyond. ✔

**What the student should learn.** For a degree-\(d\) polynomial, each differentiation lowers the degree by one, so \(f^{(d)}\) is constant and \(f^{(d+1)}=0\); zeros of \(f''\) are candidate inflection points.

> Source: example created in the style of pages 82–83.

#### Textbook-level example

**B1-U3-L4-E02**

**Problem.** Let \(f(x)=\dfrac{1}{1-x}\) on \(\mathbb{R}\setminus\{1\}\). Prove by induction that for every integer \(n\ge1\),
\[
f^{(n)}(x)=\frac{n!}{(1-x)^{\,n+1}}.
\]

**Problem analysis.** A single reciprocal whose derivatives keep the same shape with a growing factorial and power. The chain rule with inner \(u=1-x\) (\(u'=-1\)) drives each step; induction packages all orders.

**Step-by-step solution.** Let \(E(n)\): \(f^{(n)}(x)=\dfrac{n!}{(1-x)^{n+1}}\).
- **Base \(E(1)\).** \(f(x)=(1-x)^{-1}\); with \(\left(\dfrac1u\right)'=-\dfrac{u'}{u^2}\), \(u=1-x\), \(u'=-1\):
\[
f'(x)=-\frac{-1}{(1-x)^2}=\frac{1}{(1-x)^2}=\frac{1!}{(1-x)^{2}}. \quad\checkmark
\]
- **Inductive step.** Assume \(E(n)\): \(f^{(n)}(x)=n!\,(1-x)^{-(n+1)}\). Differentiate (chain rule, \(u=1-x\), \(u'=-1\)):
\[
f^{(n+1)}(x)=n!\cdot\big(-(n+1)\big)(1-x)^{-(n+2)}\cdot(-1)=\frac{(n+1)\,n!}{(1-x)^{n+2}}=\frac{(n+1)!}{(1-x)^{(n+1)+1}}.
\]
This is \(E(n+1)\). \(\checkmark\)

By induction, \(E(n)\) holds for all \(n\ge1\). \(\blacksquare\)

**Final answer.** \(f^{(n)}(x)=\dfrac{n!}{(1-x)^{\,n+1}}\) for all \(n\ge1\).

**Verification.** \(n=2\): differentiating \(f'=(1-x)^{-2}\) gives \(f''=-2(1-x)^{-3}(-1)=\dfrac{2}{(1-x)^3}=\dfrac{2!}{(1-x)^3}\), matching the formula. ✔

**What the student should learn.** When derivatives repeat their shape, conjecture the pattern and confirm it by induction; the two \((-1)\) factors (from \(-(n+1)\) and from \(u'=-1\)) multiply to \(+(n+1)\), which is what promotes \(n!\) to \((n+1)!\).

> Source: Mathematics Textbook 1, page 82.

#### Harder / composite example

**B1-U3-L4-E03**

**Problem.** Let \(f(x)=x\sin x\) on \(\mathbb{R}\). Compute \(f''(x)\) and verify the relation \(f''(x)+f(x)=2\cos x\).

**Problem analysis.** A product; the second derivative needs the product rule twice. Verifying a differential relation is a standard higher-order task.

**Step-by-step solution.** With the product rule (\(u=x\), \(v=\sin x\)):
\[
f'(x)=(1)\sin x+x\cos x=\sin x+x\cos x.
\]
Differentiate again (product rule on \(x\cos x\)):
\[
f''(x)=\cos x+\big[(1)\cos x+x(-\sin x)\big]=\cos x+\cos x-x\sin x=2\cos x-x\sin x.
\]
Then
\[
f''(x)+f(x)=\big(2\cos x-x\sin x\big)+x\sin x=2\cos x.
\]

**Final answer.** \(f''(x)=2\cos x-x\sin x\), and indeed \(f''(x)+f(x)=2\cos x\).

**Verification.** At \(x=0\): \(f''(0)=2\cos0-0=2\), \(f(0)=0\), sum \(=2=2\cos0\). ✔

**What the student should learn.** For products, apply the product rule at each order carefully; the term \(-x\sin x\) in \(f''\) cancels the \(f=x\sin x\) term, leaving the clean relation.

> Source: example created in the style of pages 82–83 (a differential relation in the style of the exercises).

#### Common mistake

> **Common mistake:** stopping the product/quotient rule too early when taking a second derivative. Each order is a **fresh** differentiation of the whole previous expression; e.g. after \(f'=\sin x+x\cos x\), the term \(x\cos x\) must again be treated as a product — forgetting this loses the \(-x\sin x\) term.

#### Special cases
- **Polynomials:** for degree \(d\), \(f^{(d)}\) is a nonzero constant and \(f^{(n)}=0\) for \(n>d\).
- **Sine and cosine cycle with period 4:** \((\sin x)^{(4)}=\sin x\), and similarly for \(\cos\); the signs run \(+,+,-,-\) then repeat.
- **Inflection points:** where \(f''\) changes sign (not merely \(f''=0\)) the concavity switches.

#### Practice set
1. **(B1-U3-L4-P01)** For \(f(x)=x^5\), compute \(f''\) and \(f'''\).
2. **(B1-U3-L4-P02)** Show that \(f(x)=\cos x\) satisfies \(f''+f=0\).
3. **(B1-U3-L4-P03)** For \(f(x)=x^3-3x^2\), find where \(f''\) vanishes (the inflection abscissa).
4. **(B1-U3-L4-P04)** For \(f(x)=\sin(2x)\), compute \(f''\) and express it in terms of \(f\).
5. **(B1-U3-L4-P05)** *(near exam level)* For \(f(x)=\dfrac1x\) on \(\mathbb{R}^*\), conjecture \(f^{(n)}\) from \(f',f'',f'''\) and prove it by induction.

#### Practice solutions
1. \(f'(x)=5x^4\), \(f''(x)=20x^3\), \(f'''(x)=60x^2\).
2. \(f'(x)=-\sin x\), \(f''(x)=-\cos x\); then \(f''+f=-\cos x+\cos x=0\).
3. \(f'(x)=3x^2-6x\), \(f''(x)=6x-6=6(x-1)\); \(f''=0\iff x=1\) (and \(f''\) changes sign there, so \(x=1\) is an inflection abscissa).
4. \(f'(x)=2\cos(2x)\), \(f''(x)=-4\sin(2x)=-4f(x)\).
5. \(f'(x)=-x^{-2}=-\dfrac{1}{x^2}\), \(f''(x)=2x^{-3}=\dfrac{2}{x^3}\), \(f'''(x)=-6x^{-4}=-\dfrac{6}{x^4}\). Conjecture \(E(n)\): \(f^{(n)}(x)=\dfrac{(-1)^n\,n!}{x^{n+1}}\). **Base \(n=1\):** \(-\dfrac{1}{x^2}=\dfrac{(-1)^1\,1!}{x^2}\) ✔. **Step:** assume \(f^{(n)}=(-1)^n n!\,x^{-(n+1)}\); then \(f^{(n+1)}=(-1)^n n!\,\big(-(n+1)\big)x^{-(n+2)}=(-1)^{n+1}(n+1)!\,x^{-(n+2)}=\dfrac{(-1)^{n+1}(n+1)!}{x^{(n+1)+1}}\) ✔. Hence \(f^{(n)}(x)=\dfrac{(-1)^n\,n!}{x^{n+1}}\) for all \(n\ge1\).

#### Lesson summary
- **Most important definition:** \(f^{(n)}=(f^{(n-1)})'\), with \(f''=(f')'\).
- **Most important meaning:** \(f''\) governs concavity; a sign change of \(f''\) is an inflection.
- **Most important method:** compute \(f',f'',f'''\), conjecture \(f^{(n)}\), prove by induction.
- **Most important pattern:** factorial and \((-1)^n\) signs in reciprocal families.
- **Most common mistake:** cutting a product/quotient differentiation short at the second order.
- **Quick self-check:** what is \((\sin x)''\)? *(Answer: \(-\sin x\).)*

---

<a id="b1-u3-test"></a>
### Chapter summary & review test — Unit 3

#### Chapter summary
The unit developed the **derivative** from its limit definition \(f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}\) (the slope of the tangent), then the **derivative function** with a reference table and the operation rules (sum, product, quotient). Applications used the **sign of \(f'\)** for monotonicity, its **sign change** for local extrema, and continuity + strict monotonicity to count solutions of \(f(x)=k\), all organised in a **variation table**. The **chain rule** \((g\circ u)'=g'(u)\,u'\) yielded \((u^n)'\), \((\sqrt u)'\), \((1/u^n)'\) and the composite trig derivatives. Finally, **higher-order derivatives** \(f''\), \(f^{(n)}\) described concavity and supported \(n\)-th-derivative proofs by induction.

#### Essential formulas
\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h},\qquad y=f'(a)(x-a)+f(a),
\]
\[
(x^n)'=nx^{n-1},\quad (\sqrt x)'=\frac{1}{2\sqrt x},\quad \left(\frac1x\right)'=-\frac{1}{x^2},\quad (\sin x)'=\cos x,\quad (\cos x)'=-\sin x,\quad (\tan x)'=\frac{1}{\cos^2x},
\]
\[
(uv)'=u'v+uv',\quad \left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2},\quad (g\circ u)'=g'(u)\,u',\quad (u^n)'=nu'u^{n-1},\quad (\sqrt u)'=\frac{u'}{2\sqrt u}.
\]

#### Essential theorems/results
- Sign of \(f'\) ⇔ monotonicity of \(f\).
- Local extremum \(\Rightarrow f'(a)=0\); extremum **iff** \(f'\) changes sign at \(a\).
- Continuous + strictly monotone on \([a,b]\) ⇒ \(f(x)=k\) has a unique solution when \(k\) lies between \(f(a),f(b)\).
- Chain rule and its corollaries; \(f^{(n)}=(f^{(n-1)})'\).

#### Main problem patterns
Compute derivatives/domains; tangent lines (at a point, parallel to a line, through an external point); variation table with extrema; count/bracket roots of \(f(x)=k\); differentiate composites; compute \(f''\) or prove an \(f^{(n)}\) formula by induction.

#### Connections between the chapter's ideas
The derivative rests on **limits** (previous unit); the variation table feeds **curve sketching** and **optimisation**; the chain rule is reused everywhere; the \(n\)-th-derivative proofs reuse **induction** (Unit 1). The second derivative previews **concavity/inflection** studies.

#### Recommended study order
Definition & tangent ← reference table & operation rules ← chain rule and its corollaries ← applications (monotonicity, extrema, variation table, counting roots) ← higher-order derivatives and induction proofs.

#### Chapter checklist
- [ ] I differentiate any elementary function, stating its domain of differentiability.
- [ ] I write tangents and build correct variation tables with extrema.
- [ ] I apply the chain rule and prove \(n\)-th-derivative formulas by induction.

#### Chapter review test
1. Write the tangent to \(f(x)=x^3-2x\) at the point of abscissa \(1\).
2. Differentiate: (a) \(f(x)=x^4-3\sqrt x\); (b) \(f(x)=(2x^2+1)^3\); (c) \(f(x)=\sin(x^2)\).
3. Study the variation of \(f(x)=x^3-3x+2\) on \(\mathbb{R}\), give its local extrema, and build the variation table.
4. Give the domain of differentiability and the derivative of \(f(x)=\sqrt{x^2-2x+2}\).
5. For \(f(x)=x\sin x\), compute \(f''\) and verify \(f''(x)+f(x)=2\cos x\).
6. Prove by induction that the \(n\)-th derivative of \(f(x)=\dfrac{1}{x+1}\) (on \(\mathbb{R}\setminus\{-1\}\)) is \(f^{(n)}(x)=\dfrac{(-1)^n\,n!}{(x+1)^{n+1}}\).
7. Find the point of the parabola \(y=x^2\) at which the tangent is parallel to the line \(y=4x\), and write that tangent.

#### Model solutions for the chapter review test
1. \(f'(x)=3x^2-2\Rightarrow f'(1)=1\); \(f(1)=1-2=-1\). Tangent \(y=1\cdot(x-1)+(-1)=x-2\).
2. (a) \(f'(x)=4x^3-\dfrac{3}{2\sqrt x}\) (on \(x>0\)). (b) \(u=2x^2+1\), \(u'=4x\): \(f'(x)=3(4x)(2x^2+1)^2=12x(2x^2+1)^2\). (c) \(u=x^2\), \(u'=2x\): \(f'(x)=2x\cos(x^2)\).
3. \(f'(x)=3x^2-3=3(x-1)(x+1)\): sign \(+,-,+\). \(f(-1)=-1+3+2=4\) (local max), \(f(1)=1-3+2=0\) (local min).

| \(x\) | \(-\infty\) | | \(-1\) | | \(1\) | | \(+\infty\) |
|---|---|---|---|---|---|---|---|
| \(f'(x)\) | | \(+\) | \(0\) | \(-\) | \(0\) | \(+\) | |
| \(f(x)\) | | \(\nearrow\) | \(4\) | \(\searrow\) | \(0\) | \(\nearrow\) | |

So \(f\) increases on \(]-\infty,-1]\), decreases on \([-1,1]\), increases on \([1,+\infty[\); local max \(4\) at \(-1\), local min \(0\) at \(1\).
4. \(u=x^2-2x+2=(x-1)^2+1\ge1>0\) on \(\mathbb{R}\), \(u'=2x-2\); \(f\) differentiable on \(\mathbb{R}\): \(f'(x)=\dfrac{2x-2}{2\sqrt{x^2-2x+2}}=\dfrac{x-1}{\sqrt{x^2-2x+2}}\).
5. \(f'(x)=\sin x+x\cos x\); \(f''(x)=\cos x+\cos x-x\sin x=2\cos x-x\sin x\). Then \(f''+f=2\cos x-x\sin x+x\sin x=2\cos x\). ✔
6. \(E(n)\): \(f^{(n)}(x)=\dfrac{(-1)^n n!}{(x+1)^{n+1}}\). **Base \(n=1\):** \(f(x)=(x+1)^{-1}\Rightarrow f'(x)=-(x+1)^{-2}=\dfrac{(-1)^1 1!}{(x+1)^2}\) ✔. **Step:** assume \(f^{(n)}=(-1)^n n!\,(x+1)^{-(n+1)}\); then \(f^{(n+1)}=(-1)^n n!\,\big(-(n+1)\big)(x+1)^{-(n+2)}=(-1)^{n+1}(n+1)!\,(x+1)^{-(n+2)}=\dfrac{(-1)^{n+1}(n+1)!}{(x+1)^{(n+1)+1}}\) ✔. Hence the formula holds for all \(n\ge1\). \(\blacksquare\)
7. \(f'(x)=2x\); parallel to \(y=4x\) means slope \(4\): \(2x=4\Rightarrow x=2\), point \((2,4)\). Tangent \(y=4(x-2)+4=4x-4\).

---

<a id="b1-u4"></a>
## Unit 4: Limits of Sequences

> Source: Mathematics Textbook 1, pages 101–132.

### Unit overview

This unit crowns everything you learned about sequences in Unit 1: after knowing how a sequence is defined and how to study its monotonicity, you now ask the deeper question: **what happens to the terms \(u_n\) as the index \(n\) grows without bound?** Do the terms settle near a single number (we then say the sequence is **convergent**), or shoot off toward \(+\infty\) or \(-\infty\), or oscillate without settling (we say it is **divergent** or has no limit)?

- **A reminder of the limit concept:** the definition of a finite and an infinite limit, the reference sequences \(\dfrac{1}{n^k}\to0\), and the limit of the geometric sequence \(q^n\) according to the value of \(q\).
- **Theorems on limits:** operations on limits, the limit of a sequence of the form \(u_n=f(n)\) or \(u_n=f(v_n)\), and the squeeze (sandwich) theorems that trap a sequence between two others.
- **Convergence of monotonic bounded sequences:** the pivotal theorem "every monotonic bounded sequence converges", a tool that proves the **existence** of the limit without computing it.
- **Adjacent and recursive sequences:** two sequences, one increasing and one decreasing, whose difference tends to zero, so they meet at a common limit; and recursive sequences \(u_{n+1}=f(u_n)\) whose limit is solved by the equation \(f(x)=x\).

**Why it matters:** the limit concept is the cornerstone of all of analysis — continuity, differentiation, integration, and series — and you will meet it again in limits of functions. Recursive sequences appear in iterative modelling and numerical methods (like approximating \(\sqrt2\) or the golden ratio).

**Prerequisites:** monotonicity of a sequence and its terms (Unit 1), proof by induction, limits of functions at \(+\infty\), the sum of a geometric sequence.

**Main question types:** compute the limit of a rational or radical \(u_n=f(n)\); lift an indeterminate form; use the squeeze theorem for a sequence containing \(\sin\) or \(\cos\); prove monotonicity and boundedness then conclude by Theorem 8; prove adjacency and find the common limit; study a recursive sequence and solve \(f(x)=x\).

### Unit concept map

```text
Limit of a sequence
├── The limit concept (review)
│   ├── Finite limit ℓ: every open interval centered at ℓ contains all terms from some index
│   ├── Infinite limit ±∞: every interval ]A,+∞[ or ]−∞,A[ contains all terms from some index
│   ├── Reference sequences: 1/n , 1/n² , 1/√n → 0   and   n , n² , √n → +∞
│   └── Geometric sequence qⁿ: |q|<1→0 ,  q>1→+∞ ,  q≤−1 no limit ,  q=1→1
├── Theorems on limits
│   ├── Operations on limits (sum, product, quotient) + indeterminate forms
│   ├── uₙ=f(n): if lim(x→+∞)f(x)=ℓ then lim uₙ=ℓ
│   ├── uₙ=f(vₙ): if vₙ→b and f(x)→c at b then f(vₙ)→c
│   └── Squeeze theorems: wₙ≤uₙ≤vₙ  or  |uₙ−ℓ|≤eₙ→0
├── Monotonic sequences
│   ├── Boundedness (above / below / bounded)
│   ├── Monotonic + unbounded ⇒ ±∞  (Theorem 7)
│   └── Monotonic + bounded ⇒ convergent  (Theorem 8 — pivotal)
└── Adjacent & recursive
    ├── Adjacent: one ↑ and the other ↓ and (sₙ−tₙ)→0 ⇒ common limit (Theorem 9)
    └── Recursive uₙ₊₁=f(uₙ): if it converges and f continuous ⇒ ℓ=f(ℓ)
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(\lim q^n=0\) | \(q\) common ratio of a geometric sequence | \(-1<q<1\) | if \(q>1\) or \(q\le-1\) | \(q=1\Rightarrow\lim=1\) |
| \(\lim q^n=+\infty\) | — | \(q>1\) | if \(|q|\le1\) | — |
| \((q^n)\) has no limit | — | \(q\le-1\) | if \(q>-1\) | terms alternate in sign |
| \(\lim\dfrac{1}{n^k}=0\) | \(k\in\mathbb{N}^*\) | \(k\ge1\) | gives no rate of convergence | basic reference |
| \(u_n=f(n),\ \lim_{x\to+\infty}f(x)=\ell\Rightarrow\lim u_n=\ell\) | \(f\) defined on \([b,+\infty[\) | \(u_n=f(n)\) explicit | if \(u_n\) is recursive \(u_{n+1}=f(u_n)\) | turns a sequence limit into a function limit |
| Squeeze: \(w_n\le u_n\le v_n\) and \(\lim v_n=\lim w_n=\ell\Rightarrow\lim u_n=\ell\) | \(\ell\) real number | inequality holds from some index | if the two bounds have different limits | useful with \(\sin,\cos\) |
| \(|u_n-\ell|\le e_n\) and \(e_n\to0\Rightarrow u_n\to\ell\) | \(e_n\ge0\) | \(e_n\to0\) | if \(e_n\) does not tend to \(0\) | null-bound squeeze form |
| Monotonic + bounded \(\Rightarrow\) convergent | — | increasing & bounded above (or decreasing & bounded below) | it does not give the value | Theorem 8 — existence only |
| Adjacent \(\Rightarrow\) common limit | \((t_n)\uparrow,(s_n)\downarrow\) | \((s_n-t_n)\to0\) | if the difference does not tend to \(0\) | Theorem 9 |
| \(u_{n+1}=f(u_n)\) convergent & \(f\) continuous \(\Rightarrow\ell=f(\ell)\) | \(\ell\) the limit | convergence proved first & \(f\) continuous at \(\ell\) | it does not prove convergence by itself | solve via \(f(x)=x\) |

### Unit learning checklist

- [ ] I distinguish a convergent from a divergent sequence and describe its limit in interval language.
- [ ] I know the limit of \(q^n\) by the position of \(q\) relative to \(-1\) and \(1\).
- [ ] I use the reference sequences \(1/n^k\to0\) and \(n^k\to+\infty\).
- [ ] I lift the indeterminate forms \(\frac{\infty}{\infty},\infty-\infty\) by factoring and the dominant term.
- [ ] I apply the squeeze theorem to a sequence with a bounded trigonometric function.
- [ ] I prove an increasing bounded-above sequence converges, and recognise this gives no value.
- [ ] I prove two sequences are adjacent and find their common limit.
- [ ] I study a recursive sequence \(u_{n+1}=f(u_n)\) and find its limit by solving \(f(x)=x\).

---

<a id="b1u4-l1"></a>
### Lesson 1: Limit of a sequence — review

#### Core idea

The limit of a sequence answers a simple, deep question: **where do the terms \(u_n\) head as \(n\) grows without bound?** Sometimes the terms get closer and closer to a single real number \(\ell\), and we say the sequence is **convergent** with limit \(\ell\). Sometimes the terms grow past every ceiling toward \(+\infty\) (or fall toward \(-\infty\)), and we say it is **divergent**. Sometimes they neither settle nor take off — say, oscillating between two values — and then there is no limit at all.

The precise mental image is the **interval picture**: the number \(\ell\) is a limit of the sequence if **every open interval, however narrow, centered at \(\ell\), contains all terms of the sequence from a certain index onward** (that is, all but finitely many at the start). This definition translates "getting close" into an exact condition: however much precision \(\alpha>0\) you demand, you can find an index \(n_0\) so that every term after it lies inside \(]\ell-\alpha,\ell+\alpha[\).

**How does a student recognise this lesson?** When you are asked to "study the convergence of the sequence", "compute \(\lim u_n\)", or "find an index \(n_0\) such that…", or when a geometric sequence \(q^n\) appears. What most confuses beginners is mixing the limit of a sequence (only at \(n\to+\infty\), since the index is a natural number) with the limit of a function (at any value), and forgetting that \(q\le-1\) gives no limit but oscillation.

#### Prerequisite knowledge
- The notion of an open interval and absolute value as distance: \(|u_n-\ell|<\alpha\) means \(u_n\in\,]\ell-\alpha,\ell+\alpha[\).
- The geometric sequence: \(q^{n+1}=q\cdot q^n\), and the sum of its terms.
- Algebra to simplify \(u_n-\ell\) into a form whose sign and size are visible.

#### Definitions

**Definition (finite / real limit).** A real number \(\ell\) is the limit of the sequence \((u_n)_{n\ge0}\) if **every open interval centered at \(\ell\)** contains all terms of the sequence from a certain index onward (that is, all but finitely many). We write \(\displaystyle\lim_{n\to+\infty}u_n=\ell\), and say the sequence is **convergent** or **converges to \(\ell\)**.

**Definition (infinite limit).** \((u_n)\) tends to \(+\infty\) if every interval of the form \(]A,+\infty[\) contains all terms from a certain index onward; we write \(\lim u_n=+\infty\), and the sequence **diverges**. Likewise \((u_n)\to-\infty\) if every interval \(]-\infty,A[\) contains all terms from a certain index on.

**Reference sequences.** The general terms
\[ \frac{1}{n},\quad \frac{1}{n^2},\quad \frac{1}{n^3},\quad \frac{1}{\sqrt{n}} \]
all converge to \(0\); and the terms \(n,\ n^2,\ n^3,\ \sqrt{n}\) all tend to \(+\infty\).

> Source: Mathematics Textbook 1, pages 101–102.

#### Formulas and properties

**Limit of the geometric sequence \(q^n\) (reference result).** According to the position of the ratio \(q\):
\[
\lim_{n\to+\infty} q^n=
\begin{cases}
0, & -1<q<1,\\
1, & q=1,\\
+\infty, & q>1,\\
\text{no limit}, & q\le -1.
\end{cases}
\]

> **Important condition:** the decisive divide is the position of \(q\) relative to \(-1\) and \(1\). Note the asymmetry: for \(q>1\) it tends to \(+\infty\), but for \(q\le-1\) (like \(q=-2\)) the terms grow in size yet alternate in sign (\((-2)^n=+4,-8,+16,\dots\)), so they neither settle nor head one way, and therefore there is **no limit**.

> **Special case:** at \(q=1\), \(q^n=1\) is a constant sequence with limit \(1\); and at \(q=0\), \(q^n=0\) for all \(n\ge1\) with limit \(0\) (this falls under \(-1<q<1\)).

**Using absolute value as distance.** To prove \(\lim u_n=\ell\) from the definition, compute \(u_n-\ell\), then show \(|u_n-\ell|\) becomes smaller than any \(\alpha>0\) from an index depending on \(\alpha\).

#### Theorems and proofs

**Theorem 1 (limit of \(q^n\)).** This is the rule stated above, accepted as a result without proof in the book; the student is required to **apply** it, not prove it. Direct example: \(\left(\dfrac45\right)^n\to0\) because \(-1<\dfrac45<1\), whereas \(\left(\dfrac54\right)^n\to+\infty\) because \(\dfrac54>1\).

#### Recognising the idea and the solution method
- **If you see** a ratio raised to the power \(n\) → use the \(q^n\)-limit theorem after locating \(q\) relative to \(-1\) and \(1\).
- **If asked** to "find \(n_0\) such that \(u_n\in\,]\ell-\alpha,\ell+\alpha[\)" → compute \(|u_n-\ell|\) and solve the inequality \(|u_n-\ell|<\alpha\) in \(n\).
- **If** \(1/n^k\) or \(n^k\) appears → use the reference sequences directly.

**Standard algorithm to prove a limit from the definition:**
1. Write what is required: \(u_n\in\,]\ell-\alpha,\ell+\alpha[\), i.e. \(|u_n-\ell|<\alpha\).
2. Compute the difference \(u_n-\ell\) and simplify it to a fraction whose sign and size are visible.
3. Solve the inequality \(|u_n-\ell|<\alpha\) for \(n\) to get a condition of the form \(n>N(\alpha)\).
4. Conclude that \(n_0=\lfloor N(\alpha)\rfloor\) works, so \(\lim u_n=\ell\).

#### Basic example

**B1-U4-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Find the limit of \((u_n)_{n\ge1}\) where \(u_n=2+\left(\dfrac{1}{3}\right)^n\).

**Why this method applies.** The term is a constant \(2\) plus a term of a geometric sequence of ratio \(\frac13\), which lies in \(]-1,1[\), so we use the \(q^n\)-limit together with the linearity of the limit.

**Step-by-step solution.** Since \(-1<\dfrac13<1\), we have \(\left(\dfrac13\right)^n\to0\), and by adding limits:
\[
\lim_{n\to+\infty}u_n=2+\lim_{n\to+\infty}\left(\frac13\right)^n=2+0=2.
\]

**Final answer.** \(\displaystyle\lim_{n\to+\infty}u_n=2\), and the sequence is convergent.

**Verification.** \(u_1=2+\tfrac13\approx2.33\), \(u_2=2+\tfrac19\approx2.11\), \(u_3\approx2.037\): the terms approach \(2\) from above, matching the result.

**What the student should learn.** A constant plus a geometric sequence whose ratio lies in \(]-1,1[\) tends to that constant; the limit respects addition.

> Source: example created in the style of pages 102–103.

#### Textbook-level example

**B1-U4-L1-E02**

**Problem.** The sequence \((u_n)_{n\ge0}\) is defined by \(u_n=\dfrac{3n-1}{n+1}\). Find a natural number \(n_0\) such that if \(n>n_0\) then \(u_n\in\,]2.99,\,3.01[\), then deduce the limit.

**Problem analysis.** The interval \(]2.99,3.01[\) is centered at \(3\) with half-length \(0.01\), so what is really required is to solve \(|u_n-3|<0.01\). We compute the difference and solve the inequality in \(n\).

**Step-by-step solution.**
\[
u_n-3=\frac{3n-1}{n+1}-3=\frac{3n-1-3(n+1)}{n+1}=\frac{-4}{n+1},\qquad |u_n-3|=\frac{4}{n+1}.
\]
The condition \(|u_n-3|<0.01\) is equivalent to \(\dfrac{4}{n+1}<\dfrac{1}{100}\), i.e. \(n+1>400\), i.e. \(n>399\). So we take \(n_0=399\) (or any larger number).

**Final answer.** For every \(n>399\), \(u_n\) lies in \(]2.99,3.01[\); and since this holds for any half-length \(\alpha>0\) (by taking \(n+1>\frac{4}{\alpha}\)), we conclude \(\displaystyle\lim_{n\to+\infty}u_n=3\).

**Verification.** \(u_{399}=\dfrac{3(399)-1}{400}=\dfrac{1196}{400}=2.99\) exactly on the boundary, and \(u_{400}=\dfrac{1199}{401}\approx2.99003\) inside the interval; correct.

**What the student should learn.** To prove a limit from the definition: compute \(|u_n-\ell|\), then solve \(|u_n-\ell|<\alpha\) in \(n\); the fact that \(n_0\) can be found for any \(\alpha\) is the meaning of "every open interval centered at \(\ell\)".

> Source: Mathematics Textbook 1, pages 102–103.

#### Common mistake

> **Common mistake:** thinking that \((-1)^n\) or \((-2)^n\) has a limit because \(|q|\) is "known". Correct: for \(q\le-1\) the sign of the terms alternates, so they neither settle near a number nor head one way, hence no limit. Remember that the convergence condition on the absolute value is \(|q|<1\) **exactly**, and that both \(q=-1\) and \(q<-1\) give no limit.

#### Special cases
- **\(q=1\):** constant sequence \(=1\), limit \(1\).
- **\(q=-1\):** \((-1)^n\) alternates between \(1\) and \(-1\), no limit.
- **\(0<q<1\) with a very small ratio:** convergence to \(0\) is fast, but the limit is \(0\) itself however small \(q\) is.
- **Reference sequence:** \(1/n^k\to0\) for any \(k\ge1\), and convergence is faster the larger \(k\) is.

#### Practice set
1. **(B1-U4-L1-P01)** Compute \(\displaystyle\lim_{n\to+\infty}\left(\dfrac{2}{7}\right)^n\) and \(\displaystyle\lim_{n\to+\infty}\left(\dfrac{7}{2}\right)^n\).
2. **(B1-U4-L1-P02)** Compute \(\displaystyle\lim_{n\to+\infty}\left(5-\dfrac{1}{n^2}\right)\).
3. **(B1-U4-L1-P03)** Does the sequence \(u_n=(-3)^n\) have a limit? Justify.
4. **(B1-U4-L1-P04)** The sequence \(u_n=\dfrac{2n+1}{n}\). Find \(n_0\) such that \(|u_n-2|<0.001\) for all \(n>n_0\), and deduce the limit.
5. **(B1-U4-L1-P05)** *(near exam level)* Compute \(\displaystyle\lim_{n\to+\infty}\left(3\cdot\left(\dfrac{1}{2}\right)^n+\dfrac{4}{\sqrt{n}}\right)\).

#### Practice solutions
1. \(-1<\dfrac27<1\) so the first limit is \(0\); and \(\dfrac72>1\) so the second is \(+\infty\).
2. \(\dfrac{1}{n^2}\to0\) (reference sequence), so the limit is \(5-0=5\).
3. The ratio \(q=-3\le-1\), so the terms alternate in sign and grow in size (\(-3,9,-27,\dots\)), hence **no limit**.
4. \(u_n-2=\dfrac{2n+1}{n}-2=\dfrac1n\), so \(|u_n-2|=\dfrac1n<0.001\Leftrightarrow n>1000\). Take \(n_0=1000\), and the limit is \(2\).
5. \(\left(\dfrac12\right)^n\to0\) because \(-1<\dfrac12<1\), and \(\dfrac{4}{\sqrt n}\to0\) (reference), so the limit is \(3\cdot0+0=0\).

#### Lesson summary
- **Most important definition:** \(\ell\) is a limit of the sequence if every open interval centered at \(\ell\) contains all terms from some index.
- **Most important formula:** the limit of \(q^n\) by the position of \(q\) relative to \(-1\) and \(1\).
- **Most important condition:** convergence on the absolute value requires \(|q|<1\) exactly; \(q\le-1\) has no limit.
- **Most important pattern:** to prove a limit from the definition, solve \(|u_n-\ell|<\alpha\) in \(n\).
- **Most common mistake:** thinking \((-2)^n\) has a limit.
- **Quick self-check:** what is the limit of \(\left(\dfrac{-1}{2}\right)^n\)? *(Answer: \(0\), because \(\left|\dfrac{-1}{2}\right|=\dfrac12<1\).)*

---

<a id="b1u4-l2"></a>
### Lesson 2: Theorems on limits of sequences

#### Core idea

Once we know the meaning of a limit, we need **practical tools** to compute it without returning each time to the interval definition. These theorems fall into three kinds: (1) **operations on limits** — the limit of a sum is the sum of limits, of a product the product of limits, and so on — with care around **indeterminate forms** where the direct rule fails. (2) **Linking a sequence to a function**: if \(u_n=f(n)\), then the sequence's limit equals the function's limit at \(+\infty\), which unlocks all the techniques of function limits (dominant term, factoring, conjugate). (3) **Squeeze (sandwich) theorems**: when the limit is hard to compute directly, we trap the sequence between two others with the same limit, and it inherits that limit.

**How does a student recognise the idea?** When direct substitution leads to an indeterminate form (\(\frac{\infty}{\infty}\), \(\infty-\infty\), \(0\times\infty\)), or when a bounded trigonometric function like \(\sin n\) or \(\cos n\) appears (a hint for squeezing), or when you are asked to use the "\(f(n)\) theorem". What most confuses beginners is treating an indeterminate form as a final answer, when it is a signal that rewriting is required.

#### Prerequisite knowledge
- Limits of functions at \(+\infty\), especially the limit of a rational function (ratio of the leading coefficients).
- Indeterminate forms and how to lift them by the dominant term or by multiplying by the conjugate.
- Bounds of trigonometric functions: \(-1\le\sin n\le1\) and \(-1\le\cos n\le1\).

#### Definitions

**Indeterminate form.** A situation in which the operation rules do not determine the limit directly; its most prominent forms are
\[ \infty-\infty,\qquad 0\times\infty,\qquad \frac{0}{0},\qquad \frac{\infty}{\infty}. \]
When one appears, we rewrite \(u_n\) (factor, simplify, multiply by the conjugate) until it disappears.

> Source: Mathematics Textbook 1, pages 106, 120.

#### Formulas and properties

**Operations on limits.** If \(\lim u_n\) and \(\lim v_n\) exist (finite), then:
\[
\lim(u_n+v_n)=\lim u_n+\lim v_n,\quad \lim(u_n\cdot v_n)=\lim u_n\cdot\lim v_n,\quad \lim\frac{u_n}{v_n}=\frac{\lim u_n}{\lim v_n}\ (\lim v_n\ne0).
\]

> **Warning:** these rules fail at an indeterminate form. For instance, \(u_n=n\) and \(v_n=-n\) are both infinite yet \(u_n+v_n=0\); one may not write \(+\infty-\infty=0\) as a general rule — simplify first.

#### Theorems and proofs

**Theorem 2 (sequence of the form \(u_n=f(n)\)).** If \(f\) is a function defined on an interval \([b,+\infty[\) and \(u_n=f(n)\) from an index \(n_0\), and \(\displaystyle\lim_{x\to+\infty}f(x)=\ell\) (\(\ell\) real or \(\pm\infty\)), then \(\displaystyle\lim_{n\to+\infty}u_n=\ell\). *(Accepted without proof; the student applies it.)*

> **Important condition:** Theorem 2 applies to **explicit** sequences \(u_n=f(n)\) only, not to recursive ones \(u_{n+1}=f(u_n)\); confusing the two is a fundamental error (see Lesson 4).

**Theorem 3 (composite sequence \(u_n=f(v_n)\)).** If all terms of \((v_n)\) lie in an interval \(I\) and \(\lim v_n=b\) and \(\displaystyle\lim_{x\to b}f(x)=c\), then \(\displaystyle\lim_{n\to+\infty}f(v_n)=c\). *(Its proof mirrors the composite-function limit proof; it is applied, not proved.)* Example: \(u_n=\sqrt{\dfrac{3n+2}{n+1}}\); since \(v_n=\dfrac{3n+2}{n+1}\to3\) and \(\sqrt{x}\to\sqrt3\) as \(x\to3\), we get \(\lim u_n=\sqrt3\).

**Theorem 4 (squeeze with three sequences — sandwich).** If \(w_n\le u_n\le v_n\) for all \(n>n_0\) and \(\displaystyle\lim v_n=\lim w_n=\ell\) (a real number), then \(\displaystyle\lim u_n=\ell\). *(Accepted without proof.)*

**Theorem 5 (squeeze with a null bound).** If \(|u_n-\ell|\le e_n\) for all \(n>n_0\) and \(\displaystyle\lim e_n=0\), then \(\displaystyle\lim u_n=\ell\). This is a very practical form with trigonometric functions.

**Theorem 6 (comparison forcing \(\pm\infty\)).** If \(u_n\le v_n\) from some index: then \(\lim u_n=+\infty\Rightarrow\lim v_n=+\infty\), and \(\lim v_n=-\infty\Rightarrow\lim u_n=-\infty\).

#### Recognising the idea and the solution method
- **If substitution gives** \(\frac{\infty}{\infty}\) in a rational function → write \(u_n=f(n)\) and apply Theorem 2 (ratio of the leading coefficients).
- **If** \(\sin n\) or \(\cos n\) appears → squeeze: \(|\sin n|\le1\) then use Theorem 5.
- **If** you get \(\infty-\infty\) with a root → factor the dominant term or multiply by the conjugate.

**Standard algorithm for squeezing:**
1. Find an upper bound and a lower bound for \(u_n\) (or for \(|u_n-\ell|\)) from known inequalities.
2. Check that the two bounds have the same limit \(\ell\) (or that the null bound really tends to \(0\)).
3. Conclude by Theorem 4 or 5 that \(\lim u_n=\ell\).

#### Basic example

**B1-U4-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Compute \(\displaystyle\lim_{n\to+\infty}\dfrac{5n^2-3n+7}{n^2+n+1}\).

**Why this method applies.** Direct substitution gives \(\dfrac{+\infty}{+\infty}\) (an indeterminate form); but \(u_n=f(n)\) with \(f\) a rational function, so we use Theorem 2 and the function's limit at \(+\infty\).

**Step-by-step solution.** Divide numerator and denominator by the highest power \(n^2\):
\[
u_n=\frac{5-\dfrac{3}{n}+\dfrac{7}{n^2}}{1+\dfrac{1}{n}+\dfrac{1}{n^2}}\ \xrightarrow[n\to+\infty]{}\ \frac{5-0+0}{1+0+0}=5,
\]
since \(\dfrac1n\to0\) and \(\dfrac{1}{n^2}\to0\) (two reference sequences).

**Final answer.** \(\displaystyle\lim_{n\to+\infty}u_n=5\).

**Verification.** The limit equals the ratio of the leading coefficients \(\dfrac{5}{1}=5\); numerically \(u_{100}=\dfrac{50000-300+7}{10000+100+1}\approx4.921\), approaching \(5\).

**What the student should learn.** In a rational function of equal degree in numerator and denominator, the limit is the ratio of the leading coefficients; dividing by the highest power turns the lower terms into null reference sequences.

> Source: example in the style of page 106.

#### Textbook-level example

**B1-U4-L2-E02**

**Problem.** Study the limit of \((u_n)_{n\ge1}\) where \(u_n=\dfrac{\sin n}{n+1}\).

**Problem analysis.** We cannot compute \(\lim\sin n\) (it oscillates), but it is **bounded**; this signals a squeeze: we bound \(|u_n-0|\) by a null term and apply Theorem 5.

**Step-by-step solution.** For all \(n\), \(|\sin n|\le1\), so dividing by \(n+1>0\):
\[
|u_n-0|=\left|\frac{\sin n}{n+1}\right|=\frac{|\sin n|}{n+1}\le\frac{1}{n+1}.
\]
Since \(\displaystyle\lim_{n\to+\infty}\dfrac{1}{n+1}=0\), Theorem 5 gives:
\[
\lim_{n\to+\infty}u_n=0.
\]

**Final answer.** \(\displaystyle\lim_{n\to+\infty}\dfrac{\sin n}{n+1}=0\).

**Verification.** \(-\dfrac{1}{n+1}\le u_n\le\dfrac{1}{n+1}\), and both bounds tend to \(0\), so \(u_n\) is squeezed to \(0\).

**What the student should learn.** A trigonometric function in the numerator is handled by squeezing, not by direct computation; the key is \(|\sin n|\le1\) then a null term in the denominator.

> Source: Mathematics Textbook 1, pages 107–108.

#### Harder / composite example

**B1-U4-L2-E03**

**Problem.** Study the limit of \((u_n)_{n\ge1}\) where \(u_n=n-\sqrt{n}\).

**Problem analysis.** Both \(n\) and \(\sqrt n\) tend to \(+\infty\), so the form is \(\infty-\infty\) (indeterminate). We factor the dominant term \(n\) to reveal the behaviour.

**Step-by-step solution.** Factor out \(n\):
\[
u_n=n-\sqrt n=n\left(1-\frac{\sqrt n}{n}\right)=n\left(1-\frac{1}{\sqrt n}\right).
\]
Since \(\dfrac{1}{\sqrt n}\to0\), the bracket \(\to1\), and \(n\to+\infty\), so the product tends to \(+\infty\).

**Final answer.** \(\displaystyle\lim_{n\to+\infty}(n-\sqrt n)=+\infty\).

**Verification (by Theorem 6).** For all \(n\ge4\), \(\sqrt n\ge2\) so \(n\ge2\sqrt n\), i.e. \(u_n=n-\sqrt n\ge\sqrt n\); and since \(\sqrt n\to+\infty\), the comparison Theorem 6 gives \(u_n\to+\infty\), matching the result.

**What the student should learn.** To lift \(\infty-\infty\), factor the dominant term (or multiply by the conjugate); a "infinite \(\times\) positive number" product is \(+\infty\).

> Source: Mathematics Textbook 1, page 108.

#### Common mistake

> **Common mistake:** writing the answer straight from an indeterminate form, e.g. concluding that \(\dfrac{5n^2-3n+7}{n^2+n+1}\to\dfrac{\infty}{\infty}=1\) or \(=\infty\). An indeterminate form is not an answer, but a signal to rewrite (divide by the highest power, factor, or conjugate) before taking the limit.

#### Special cases
- **Rational function, degree of numerator < degree of denominator:** limit \(0\).
- **Degree of numerator > degree of denominator:** limit \(\pm\infty\) by the sign of the leading coefficients.
- **A bounded trigonometric function over a denominator tending to \(+\infty\):** limit \(0\) by squeezing.
- **\(\infty-\infty\) with roots:** usually lifted by multiplying by the conjugate \(\dfrac{(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)}{\sqrt a+\sqrt b}\).

#### Alternative methods
To lift \(\infty-\infty\) in something like \(\sqrt{n^2+n}-n\), one uses **multiplication by the conjugate** instead of factoring: \(\sqrt{n^2+n}-n=\dfrac{n}{\sqrt{n^2+n}+n}=\dfrac{1}{\sqrt{1+\frac1n}+1}\to\dfrac12\). This is equivalent to factoring the dominant term but is more suitable when a difference of two roots appears.

#### Practice set
1. **(B1-U4-L2-P01)** Compute \(\displaystyle\lim_{n\to+\infty}\dfrac{2n+3}{n+1}\).
2. **(B1-U4-L2-P02)** Compute \(\displaystyle\lim_{n\to+\infty}\dfrac{n+4}{n^2+1}\).
3. **(B1-U4-L2-P03)** Study \(\displaystyle\lim_{n\to+\infty}\dfrac{\cos n}{n^2}\) by squeezing.
4. **(B1-U4-L2-P04)** Compute \(\displaystyle\lim_{n\to+\infty}\left(\sqrt{n^2+n}-n\right)\).
5. **(B1-U4-L2-P05)** *(near exam level)* By squeezing, study \(\displaystyle\lim_{n\to+\infty}\dfrac{2n+\sin n}{n+1}\).

#### Practice solutions
1. \(u_n=f(n)\) of equal degree; the limit is the ratio of the leading coefficients \(\dfrac{2}{1}=2\). *(Dividing by \(n\): \(\dfrac{2+3/n}{1+1/n}\to2\).)*
2. Degree of numerator (1) is less than degree of denominator (2), so the limit is \(0\). *(Dividing by \(n^2\): \(\dfrac{1/n+4/n^2}{1+1/n^2}\to0\).)*
3. \(|\cos n|\le1\) so \(\left|\dfrac{\cos n}{n^2}\right|\le\dfrac{1}{n^2}\to0\); by Theorem 5 the limit is \(0\).
4. By the conjugate: \(\sqrt{n^2+n}-n=\dfrac{n}{\sqrt{n^2+n}+n}=\dfrac{1}{\sqrt{1+\frac1n}+1}\to\dfrac{1}{1+1}=\dfrac12\).
5. For all \(n\): \(2n-1\le 2n+\sin n\le 2n+1\), so dividing by \(n+1\): \(\dfrac{2n-1}{n+1}\le u_n\le\dfrac{2n+1}{n+1}\); both bounds tend to \(2\), so by Theorem 4 the limit is \(2\).

#### Lesson summary
- **Most important definition:** an indeterminate form is a situation requiring rewriting before taking the limit.
- **Most important formula:** operations on limits (sum/product/quotient) when the limits exist and there is no indeterminate form.
- **Most important theorem:** Theorem 2 (\(u_n=f(n)\Rightarrow\) the function's limit) and the squeeze Theorems 4 and 5.
- **Most important condition:** Theorem 2 is for explicit, not recursive, sequences.
- **Most common mistake:** treating \(\frac{\infty}{\infty}\) as a final answer.
- **Quick self-check:** what is \(\displaystyle\lim\dfrac{3n^2+1}{2n^2-n}\)? *(Answer: \(\dfrac32\), the ratio of the leading coefficients.)*

---

<a id="b1u4-l3"></a>
### Lesson 3: Convergence of monotonic bounded sequences

#### Core idea

Sometimes we need to **prove that a limit exists** for a sequence without knowing how to compute it explicitly — and here the unit's pivotal theorem appears: **every monotonic (increasing or decreasing) bounded sequence converges.** The intuition is simple: an increasing sequence cannot grow without bound as long as it has a ceiling (an upper bound); it is "hemmed in" between its monotonicity and its ceiling, so it has no choice but to settle at a number. That number is the least of its ceilings (**the supremum of the sequence**).

The powerful feature of this theorem is that it is an **existence theorem**: it guarantees the limit exists (a real number), but it **does not give its value**. So it is usually used in two stages: first prove existence by monotonicity and boundedness, then compute the value by another tool (like solving \(f(x)=x\) in Lesson 4).

**How does a student recognise the idea?** When you are asked to "prove the sequence converges" without being asked to compute the limit, or when a recursive sequence is given whose general term is hard to find. What most confuses beginners is thinking that proving existence gives the value, and forgetting that the theorem requires **both monotonicity and boundedness** (one alone is not enough).

#### Prerequisite knowledge
- Definitions of boundedness: bounded above (\(u_n\le M\)), below (\(m\le u_n\)), and bounded (both).
- Studying monotonicity by the sign of \(u_{n+1}-u_n\) or by induction.
- Techniques for bounding a sequence with inequalities (dropping positive terms, reversing the inequality on reciprocals).

#### Definitions

**Boundedness.** The sequence \((u_n)\) is:
- **bounded above** if there exists \(M\) with \(u_n\le M\) for all \(n\) (from some index); \(M\) is an upper bound.
- **bounded below** if there exists \(m\) with \(m\le u_n\) for all \(n\); \(m\) is a lower bound.
- **bounded** if it is bounded above and below.

**Monotonic.** The sequence is monotonic if it is increasing at every \(n\) (\(u_{n+1}\ge u_n\)) or decreasing at every \(n\) (\(u_{n+1}\le u_n\)).

> Source: Mathematics Textbook 1, page 110.

#### Formulas and properties

**How to bound a sequence (useful inequalities).**
- Dropping positive terms decreases: \(u_n=3n^2+n+1\ge3n^2\) for all \(n\ge0\).
- Reversing the inequality on reciprocals: if \(0<a\le b\) then \(\dfrac1a\ge\dfrac1b\).
- Monotonicity of the root: if \(0<a\le b\) then \(\sqrt a\le\sqrt b\); hence \(u_n=\sqrt{1+n^2}\) satisfies \(n\le u_n\le n+1\).

> **Important condition:** Theorem 8 requires **both conditions together**: monotonicity **and** boundedness on the matching side (a ceiling for an increasing sequence, a floor for a decreasing one). An increasing sequence unbounded above tends to \(+\infty\) (Theorem 7), and a bounded non-monotonic sequence may not converge at all (like \((-1)^n\)).

#### Theorems and proofs

**Theorem 7 (monotonic + unbounded \(\Rightarrow\pm\infty\)).** Every increasing sequence unbounded above tends to \(+\infty\); and every decreasing sequence unbounded below tends to \(-\infty\).

*Proof of part (1) (given in the book):* Let \((u_n)\) be increasing and unbounded above. Take any real number \(A\); since it is unbounded above there is an index \(N\) with \(u_N>A\). As the sequence is increasing, for every \(n>N\) we have \(u_n\ge u_N>A\), i.e. \(u_n\in\,]A,+\infty[\) for all \(n>N\). Since \(A\) was arbitrary, \(\lim u_n=+\infty\). Part (2) is analogous.

**Theorem 8 (monotonic + bounded \(\Rightarrow\) convergent) — the pivotal theorem.** Every increasing bounded-above sequence converges; and every decreasing bounded-below sequence converges.

*Proof:* **not proved** in the book; this is a deep property of the set of real numbers \(\mathbb{R}\), **accepted without proof**. The student applies it after checking its two conditions.

> **Warning:** Theorem 8 proves the **existence** of the limit only, not its value. The limit of an increasing bounded-above sequence is the **supremum of the sequence** (its least ceiling), and the limit of a decreasing bounded-below sequence is the **infimum of the sequence**. Note also that an increasing sequence bounded by \(M\) has limit \(\ell\le M\), not necessarily \(=M\).

#### Recognising the idea and the solution method
- **If asked** to "prove convergence" without computing → prove monotonicity then boundedness, and close with Theorem 8.
- **If** the sequence is recursive → prove by induction it is monotonic and bounded (see Lesson 4 to find the value).
- **If** an infinite behaviour with monotonicity is asked → check the absence of boundedness and use Theorem 7.

**Standard algorithm:**
1. Study the monotonicity of \((u_n)\): sign of \(u_{n+1}-u_n\), a ratio, or induction.
2. Prove boundedness on the matching side (a ceiling for an increasing sequence, a floor for a decreasing one), usually by induction or a bound.
3. Close with Theorem 8: the sequence converges (existence of the limit).
4. If the value is required, move to a computing tool (solve \(f(x)=x\) if recursive).

#### Basic example

**B1-U4-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** The sequence \((u_n)_{n\ge1}\) where \(u_n=2-\dfrac1n\). Prove it is increasing and bounded above, and deduce its convergence.

**Why this method applies.** The formula is explicit and simple, so computing \(u_{n+1}-u_n\) and finding a ceiling is easy; then we apply Theorem 8.

**Step-by-step solution.**
- **Monotonicity:** \(u_{n+1}-u_n=\left(2-\dfrac{1}{n+1}\right)-\left(2-\dfrac1n\right)=\dfrac1n-\dfrac{1}{n+1}=\dfrac{1}{n(n+1)}>0\), so \((u_n)\) is **increasing**.
- **Bounded above:** since \(\dfrac1n>0\), we have \(u_n=2-\dfrac1n<2\), so \(2\) is an upper bound.

**Final answer.** \((u_n)\) is increasing and bounded above by \(2\), so by Theorem 8 it **converges**. (Here one can check directly that its limit is \(2\).)

**Verification.** \(u_1=1,\ u_2=1.5,\ u_3\approx1.667,\ u_{10}=1.9\): it increases toward \(2\) without exceeding it, matching the conclusion.

**What the student should learn.** Proving convergence does not require knowing the limit in advance: monotonicity \(+\) a ceiling (or a floor) suffices. Note that the ceiling \(2\) is the least ceiling, and it is the limit.

> Source: example in the style of pages 110–111.

#### Textbook-level example

**B1-U4-L3-E02**

**Problem.** The sequence \((u_n)_{n\ge1}\) where \(u_n=\dfrac{3n^2+2n+1}{3n+2}\). Prove that \(\dfrac{3n}{5}\le u_n\le 2n\) for all \(n\ge1\), and deduce its behaviour at \(+\infty\).

**Problem analysis.** A squeeze between two sequences is required; the lower bound \(\dfrac{3n}{5}\to+\infty\), so by the comparison Theorem 6 we deduce \(u_n\to+\infty\).

**Step-by-step solution.**
- **Lower bound:** we show \(u_n\ge\dfrac{3n}{5}\), i.e. \(5(3n^2+2n+1)\ge3n(3n+2)\) (both denominators positive). The left side is \(15n^2+10n+5\), the right \(9n^2+6n\), and the difference is \(6n^2+4n+5>0\) for all \(n\ge1\). ✔
- **Upper bound:** we show \(u_n\le2n\), i.e. \(3n^2+2n+1\le2n(3n+2)=6n^2+4n\), and the difference \(6n^2+4n-(3n^2+2n+1)=3n^2+2n-1=(3n-1)(n+1)>0\) for all \(n\ge1\). ✔

**Final answer.** \(\dfrac{3n}{5}\le u_n\le2n\); and since \(\dfrac{3n}{5}\to+\infty\), Theorem 6 gives \(\displaystyle\lim_{n\to+\infty}u_n=+\infty\).

**Verification.** \(u_1=\dfrac{6}{5}=1.2\); the bounds \(\dfrac35=0.6\) and \(2\): indeed \(0.6\le1.2\le2\). Numerically \(u_{100}\approx99.6\), growing without bound. ✔

**What the student should learn.** When the limit is hard to compute directly, a bound by a single sequence tending to \(+\infty\) (Theorem 6) suffices to conclude the sequence tends to \(+\infty\).

> Source: Mathematics Textbook 1, page 113.

#### Harder / composite example

**B1-U4-L3-E03**

**Problem.** The sequence \((u_n)_{n\ge0}\) is defined by \(u_0=0\) and \(u_{n+1}=\dfrac{u_n+3}{2}\). Prove by induction that \((u_n)\) is increasing and bounded above by \(3\), and deduce its convergence.

**Problem analysis.** A recursive sequence; we study boundedness and monotonicity by induction, then apply Theorem 8 to prove existence (computing the value comes in Lesson 4).

**Step-by-step solution.**
- **Boundedness \(P(n):\ u_n\le3\).** Base: \(u_0=0\le3\) ✔. Hypothesis: \(u_p\le3\). Step: \(u_{p+1}=\dfrac{u_p+3}{2}\le\dfrac{3+3}{2}=3\) ✔. So \(u_n\le3\) for all \(n\).
- **Monotonicity.** \(u_{n+1}-u_n=\dfrac{u_n+3}{2}-u_n=\dfrac{3-u_n}{2}\ge0\) because \(u_n\le3\), so \((u_n)\) is **increasing**.

**Final answer.** \((u_n)\) is increasing and bounded above by \(3\), so by Theorem 8 it **converges**.

**Verification.** \(u_0=0,\ u_1=1.5,\ u_2=2.25,\ u_3=2.625,\ u_4\approx2.81\): it increases toward \(3\) without exceeding it. ✔ (Solving \(x=\dfrac{x+3}{2}\) gives the limit \(3\), a preview of Lesson 4.)

**What the student should learn.** In recursive sequences, prove boundedness first by induction, because it is used in the monotonicity step; then close with Theorem 8. The order matters.

> Source: Mathematics Textbook 1, pages 110–111 (in the style of the recursive-sequences application).

#### Common mistake

> **Common mistake:** deducing the value of the limit from Theorem 8 directly, saying "increasing and bounded by \(M\), so its limit is \(M\)". The theorem proves **existence only**; the limit is the least ceiling and may be \(\ell<M\). For instance \(u_n=2-\dfrac1n\) is also bounded by \(100\), yet its limit is \(2\), not \(100\).

#### Special cases
- **An increasing sequence unbounded above:** tends to \(+\infty\) (Theorem 7), does not converge.
- **A bounded non-monotonic sequence:** may not converge (\((-1)^n\) is bounded but has no limit).
- **A constant sequence:** monotonic and bounded, converges with limit its constant value.
- **Monotonicity from an index:** it suffices to be monotonic and bounded **from some index**; the first terms do not affect the limit.

#### Practice set
1. **(B1-U4-L3-P01)** Prove that \(u_n=1-\dfrac{1}{n+1}\) is increasing and bounded above, and deduce its convergence.
2. **(B1-U4-L3-P02)** Show that \(u_n=\dfrac{n}{n+1}\) is bounded (\(0\le u_n<1\)).
3. **(B1-U4-L3-P03)** Is \(u_n=(-1)^n\left(1+\dfrac1n\right)\) convergent? Justify in terms of monotonicity/boundedness.
4. **(B1-U4-L3-P04)** The sequence \(u_0=0,\ u_{n+1}=\dfrac{u_n+4}{2}\). Prove by induction it is increasing and bounded by \(4\), and deduce convergence.
5. **(B1-U4-L3-P05)** *(near exam level)* The sequence \(u_0=5,\ u_{n+1}=\dfrac{u_n}{2}+1\). Prove by induction that \(u_n\ge2\) and that it is decreasing, and deduce convergence.

#### Practice solutions
1. \(u_{n+1}-u_n=\dfrac{1}{n+1}-\dfrac{1}{n+2}=\dfrac{1}{(n+1)(n+2)}>0\) so increasing; and \(u_n=1-\dfrac{1}{n+1}<1\) so bounded above by \(1\); by Theorem 8 convergent.
2. \(u_n=\dfrac{n}{n+1}>0\) for all \(n\ge1\), and \(u_n=1-\dfrac{1}{n+1}<1\); so \(0<u_n<1\), bounded.
3. **No**: the even terms \(\to1^{+}\) and the odd ones \(\to-1^{-}\), and the sequence is not monotonic (its sign alternates), so it does not converge (it approaches two different values, so no single limit).
4. \(P(n):u_n\le4\): base \(u_0=0\le4\); step \(u_{p+1}=\dfrac{u_p+4}{2}\le\dfrac{4+4}{2}=4\). And monotonicity \(u_{n+1}-u_n=\dfrac{4-u_n}{2}\ge0\). So increasing and bounded by \(4\), convergent by Theorem 8.
5. \(P(n):u_n\ge2\): base \(u_0=5\ge2\); step \(u_{p+1}=\dfrac{u_p}{2}+1\ge\dfrac{2}{2}+1=2\). And monotonicity \(u_{n+1}-u_n=\dfrac{u_n}{2}+1-u_n=1-\dfrac{u_n}{2}\le0\) because \(u_n\ge2\); so decreasing and bounded below by \(2\), convergent by Theorem 8.

#### Lesson summary
- **Most important definition:** monotonic (increasing or decreasing), and bounded (a ceiling and a floor).
- **Most important theorem:** monotonic + bounded \(\Rightarrow\) convergent (Theorem 8), proving existence only.
- **Most important condition:** both conditions are needed; the limit of a sequence bounded by \(M\) may be \(\ell\le M\).
- **Most important pattern:** in a recursive sequence, prove boundedness by induction first, then monotonicity, then Theorem 8.
- **Most common mistake:** thinking the limit equals the ceiling \(M\).
- **Quick self-check:** does a decreasing bounded-below sequence converge? *(Answer: yes, by Theorem 8.)*

---

<a id="b1u4-l4"></a>
### Lesson 4: Adjacent sequences and recursive sequences

#### Core idea

This lesson combines two powerful applications of Theorem 8. The first is **adjacent sequences**: two sequences \((t_n)\) and \((s_n)\), one increasing and one decreasing, whose difference \((s_n-t_n)\) tends to zero. Then each is trapped between itself and the other, so they must meet at a single **common limit**, exactly like nested intervals \([t_n,s_n]\) whose length shrinks to zero, trapping a single point. This is a deep theoretical idea and a practical tool for approximating numbers like \(\sqrt2\).

The second is **recursive sequences** \(u_{n+1}=f(u_n)\): if we have proved they converge (by Theorem 8, say) and \(f\) is continuous at the limit \(\ell\), then \(\ell\) satisfies the **fixed-point equation \(f(x)=x\)**. This turns finding the limit into solving an algebraic equation.

**How does a student recognise the idea?** When two sequences are given and you are asked to prove they are adjacent and find their common limit, or when a recursive sequence \(u_{n+1}=f(u_n)\) is given and you are asked for its limit. What most confuses beginners are two errors: (1) thinking the direction of \(f\) (increasing/decreasing) forces the monotonicity of \((u_n)\) — false for recursive sequences; (2) solving \(f(x)=x\) **before** proving convergence — a wrong order, since the limit is meaningless before its existence is guaranteed.

#### Prerequisite knowledge
- Theorem 8 (monotonic + bounded \(\Rightarrow\) convergent) and operations on limits.
- Continuity of a function at a point, and solving equations (especially quadratics).
- Proof by induction to establish boundedness and monotonicity in recursive sequences.

#### Definitions

**Definition (adjacent sequences).** The sequences \((t_n)_{n\ge0}\) and \((s_n)_{n\ge0}\) are **adjacent** if and only if one is increasing and the other decreasing, and the sequence \((s_n-t_n)_{n\ge0}\) converges to zero.

The mental image: \(t_0\le t_1\le\cdots\le t_n<L<s_n\le\cdots\le s_1\le s_0\), so the nested intervals \([t_n,s_n]\) shrink in length to zero, trapping the point \(L\).

> Source: Mathematics Textbook 1, page 115.

#### Formulas and properties

**The two conditions of adjacency** (verified in order):
1. \((t_n)\) increasing and \((s_n)\) decreasing (or vice versa);
2. \(\displaystyle\lim_{n\to+\infty}(s_n-t_n)=0\).

> **Important condition:** it is not enough for the difference alone to tend to zero, nor for one to be increasing and the other decreasing alone; **both conditions together** are needed. A consequence of adjacency is that \(t_n\le\ell\le s_n\) for all \(n\), so each serves to approximate \(\ell\) with precision \(s_n-t_n\).

**Fixed-point result for a recursive sequence.** If \(u_{n+1}=f(u_n)\) converges to \(\ell\) (real) and \(f\) is continuous at \(\ell\), then \(\ell=f(\ell)\), i.e. \(\ell\) is a solution of the equation \(f(x)=x\).

#### Theorems and proofs

**Theorem 9 (convergence of adjacent sequences).** If \((t_n)\) and \((s_n)\) are adjacent, then they **both converge** and have the **same limit** (a common limit).

*Proof (given in the book):* Suppose \((t_n)\) increasing, \((s_n)\) decreasing, and \((s_n-t_n)\to0\). The sequence \((s_n-t_n)\) is decreasing (since \(t_n\) increases and \(s_n\) decreases) and tends to \(0\), so its terms are positive, i.e. \(s_n\ge t_n\). Therefore:
- \((t_n)\) is increasing and bounded above by \(s_0\) (since \(t_n\le s_n\le s_0\)), so by Theorem 8 it converges to \(\ell\).
- \((s_n)\) is decreasing and bounded below by \(t_0\) (since \(s_n\ge t_n\ge t_0\)), so by Theorem 8 it converges to \(\ell'\).

Taking the limit in the difference:
\[ \lim_{n\to+\infty}(s_n-t_n)=\lim s_n-\lim t_n=\ell'-\ell. \]
Since \((s_n-t_n)\to0\), we conclude \(\ell'-\ell=0\), i.e. \(\ell'=\ell\) (a common limit). It follows that \(t_n\le\ell\le s_n\) for all \(n\).

**Result for the recursive sequence \(u_{n+1}=f(u_n)\) (application).** *(Proof given, based on Theorem 3):* The sequences \((u_{n+1})_{n\ge0}\) and \((f(u_n))_{n\ge0}\) are equal term by term (since \(u_{n+1}=f(u_n)\) for all \(n\)), so they have the same limit. On one hand, \(\lim u_{n+1}=\ell\) (the same limit, by index shift). On the other, since \(f\) is continuous at \(\ell\) and \(u_n\to\ell\), Theorem 3 gives \(\lim f(u_n)=f(\ell)\). Equating the two limits: \(\ell=f(\ell)\).

> **Warning:** the fact that \(f\) is increasing (or decreasing) **does not force** the monotonicity of \((u_n)\) in the recursive case \(u_{n+1}=f(u_n)\), unlike the explicit case \(u_n=f(n)\). Likewise a convergent sequence need not be monotonic, and a sequence tending to \(+\infty\) need not be increasing.

#### Recognising the idea and the solution method
- **If** two sequences are given and you are asked to "prove they are adjacent" → prove the monotonicity of each (by the sign of the difference) then that \((s_n-t_n)\to0\), and close with Theorem 9.
- **If** \(u_{n+1}=f(u_n)\) is given and the limit is asked → prove convergence first (Theorem 8), then solve \(f(x)=x\) and choose the root matching the range.
- **A useful cue in adjacency:** often the difference \((s_n-t_n)\) is geometric or of the form \(1/n\), so proving it tends to zero is easy.

**Standard algorithm (adjacent):**
1. Compute \(t_{n+1}-t_n\) and \(s_{n+1}-s_n\) and determine their signs (one \(\ge0\), the other \(\le0\)).
2. Prove \(\lim(s_n-t_n)=0\).
3. Deduce by Theorem 9 that they converge to a common limit \(\ell\).
4. Find \(\ell\) by an extra tool (like an invariant quantity \(a\,t_n+b\,s_n\), or by solving an equation).

**Standard algorithm (recursive):**
1. Prove the terms stay in the range of \(f\) (by induction).
2. Prove monotonicity and boundedness, and close with Theorem 8 (convergence).
3. Solve \(f(x)=x\), and choose the matching root (by the sign/range of the terms).

#### Basic example

**B1-U4-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** Show that the sequences \((t_n)_{n\ge1}\) and \((s_n)_{n\ge1}\) where \(t_n=1-\dfrac1n\) and \(s_n=1+\dfrac1n\) are adjacent, and find their common limit.

**Why this method applies.** Both formulas are explicit, so computing the signs of the differences and the fact that \(s_n-t_n\to0\) is easy, and this is exactly the definition of adjacency.

**Step-by-step solution.**
- **Monotonicity of \((t_n)\):** \(t_{n+1}-t_n=\dfrac1n-\dfrac{1}{n+1}=\dfrac{1}{n(n+1)}>0\) → **increasing**.
- **Monotonicity of \((s_n)\):** \(s_{n+1}-s_n=\dfrac{1}{n+1}-\dfrac1n=-\dfrac{1}{n(n+1)}<0\) → **decreasing**.
- **Difference:** \(s_n-t_n=\left(1+\dfrac1n\right)-\left(1-\dfrac1n\right)=\dfrac2n\to0\).

**Final answer.** Both conditions hold, so the sequences are **adjacent**; and by Theorem 9 they have a common limit. Since \(t_n=1-\dfrac1n\to1\) and \(s_n=1+\dfrac1n\to1\), the common limit is \(\boxed{\ell=1}\).

**Verification.** \(t_1=0,\ s_1=2\); \(t_{10}=0.9,\ s_{10}=1.1\): the interval \([t_n,s_n]\) narrows around \(1\) with length \(\dfrac2n\to0\). ✔

**What the student should learn.** Adjacency is two conditions: opposite monotonicities \(+\) a difference tending to zero; the common limit is the point trapped by the nested intervals.

> Source: example in the style of page 115 (the model \(\tfrac{n}{n+1},\tfrac{n+1}{n}\)).

#### Textbook-level example

**B1-U4-L4-E02**

**Problem.** The sequence \((u_n)_{n\ge0}\) is defined by \(u_0=1\) and \(u_{n+1}=\sqrt{1+u_n}\). Study its convergence and find its limit.

**Problem analysis.** A recursive sequence \(u_{n+1}=f(u_n)\) with \(f(x)=\sqrt{1+x}\). We first prove convergence (monotonic and bounded → Theorem 8), then find the limit by solving \(f(x)=x\).

**Step-by-step solution.**
1. **Boundedness \(Q(n):\ 0\le u_n<2\).** Base: \(u_0=1\in[0,2[\) ✔. Hypothesis: \(0\le u_p<2\). Step: \(1\le1+u_p<3\), so taking the root \(1\le\sqrt{1+u_p}<\sqrt3<2\), i.e. \(0\le u_{p+1}<2\) ✔. So \(0\le u_n<2\) for all \(n\).
2. **Monotonicity.** We study the sign of \(u_{n+1}-u_n=\sqrt{1+u_n}-u_n\). By the conjugate: \(\dfrac{(1+u_n)-u_n^2}{\sqrt{1+u_n}+u_n}\), and its sign is that of the numerator \(1+u_n-u_n^2=-(u_n^2-u_n-1)\). The roots of \(x^2-x-1\) are \(\dfrac{1\pm\sqrt5}{2}\), the positive one \(\approx1.618\); and since \(0\le u_n<2\) and one checks \(u_n<1.618\) in this sequence (\(u_0=1<1.618\), and it stays so), the numerator is positive, i.e. \((u_n)\) is **increasing**. *(The book leaves this induction detail as an exercise and states the sequence is increasing and bounded above by \(2\).)*
3. **Convergence (Theorem 8).** \((u_n)\) is increasing and bounded above, so it **converges** to \(\ell\), with \(\ell>0\) (limit of a positive sequence).
4. **Finding \(\ell\) (fixed point).** \(f(x)=\sqrt{1+x}\) is continuous at \(\ell\), so \(\ell=f(\ell)\):
\[ \sqrt{1+\ell}=\ell\ \Rightarrow\ 1+\ell=\ell^2\ \Rightarrow\ \ell^2-\ell-1=0\ \Rightarrow\ \ell=\frac{1\pm\sqrt5}{2}. \]
We reject the negative root \(\dfrac{1-\sqrt5}{2}<0\) (since \(\ell>0\)) and keep the positive one.

**Final answer.**
\[ \boxed{\;\ell=\dfrac{1+\sqrt5}{2}\;}\quad(\text{the golden ratio}\approx1.618). \]

**Verification.** \(u_0=1,\ u_1=\sqrt2\approx1.414,\ u_2\approx1.554,\ u_3\approx1.598,\ u_4\approx1.611\): it increases toward \(1.618\) without exceeding it. ✔

**What the student should learn.** The order is compulsory: prove convergence (existence of \(\ell\)) before solving \(f(x)=x\); then choose the root matching the terms' properties (here \(\ell>0\)).

> Source: Mathematics Textbook 1, pages 111–112.

#### Harder / composite example

**B1-U4-L4-E03**

**Problem.** The sequences \((s_n)_{n\ge0}\) and \((t_n)_{n\ge0}\) where \(s_0=12,\ t_0=1\) and
\[ s_{n+1}=\frac{t_n+3s_n}{4},\qquad t_{n+1}=\frac{t_n+2s_n}{3}. \]
(1) Prove that \((s_n-t_n)\) is geometric and find its limit. (2) Prove that \((t_n)\) and \((s_n)\) are adjacent. (3) Prove that \(w_n=3t_n+8s_n\) is constant. (4) Deduce their convergence and find their common limit.

**Problem analysis.** A complete adjacency problem: the difference is geometric (tends to zero), the monotonicities are opposite (adjacency), and a constant linear quantity \(w_n\) passes an equation onto the limit to find its value.

**Step-by-step solution.**

**(1) The difference is geometric.**
\[
s_{n+1}-t_{n+1}=\frac{t_n+3s_n}{4}-\frac{t_n+2s_n}{3}=\frac{3(t_n+3s_n)-4(t_n+2s_n)}{12}=\frac{-t_n+s_n}{12}=\frac{1}{12}(s_n-t_n).
\]
So \((s_n-t_n)\) is geometric with ratio \(\dfrac{1}{12}\) and first term \(s_0-t_0=11\), hence \(s_n-t_n=11\left(\dfrac{1}{12}\right)^n\). Since \(\left|\dfrac{1}{12}\right|<1\), we have \(\displaystyle\lim_{n\to+\infty}(s_n-t_n)=0\).

**(2) Adjacency.**
\[
t_{n+1}-t_n=\frac{t_n+2s_n}{3}-t_n=\frac{2s_n-2t_n}{3}=\frac23(s_n-t_n)\ge0\ \Rightarrow\ (t_n)\ \text{increasing},
\]
\[
s_{n+1}-s_n=\frac{t_n+3s_n}{4}-s_n=\frac{t_n-s_n}{4}=-\frac14(s_n-t_n)\le0\ \Rightarrow\ (s_n)\ \text{decreasing},
\]
(since \(s_n-t_n=11\left(\tfrac{1}{12}\right)^n>0\)). Together with \((s_n-t_n)\to0\), the sequences are **adjacent**.

**(3) The invariant quantity.** We compute \(w_{n+1}=3t_{n+1}+8s_{n+1}\):
\[
3t_{n+1}=3\cdot\frac{t_n+2s_n}{3}=t_n+2s_n,\qquad 8s_{n+1}=8\cdot\frac{t_n+3s_n}{4}=2t_n+6s_n,
\]
\[
w_{n+1}=(t_n+2s_n)+(2t_n+6s_n)=3t_n+8s_n=w_n.
\]
So \(w_n\) is **constant** and equals \(w_0=3t_0+8s_0=3(1)+8(12)=99\).

**(4) The common limit.** By Theorem 9 (adjacency), \((t_n)\) and \((s_n)\) converge to a common limit \(\ell\). Taking the limit in \(99=3t_n+8s_n\) (by operations on limits, \(t_n\to\ell,\ s_n\to\ell\)):
\[ 99=3\ell+8\ell=11\ell\ \Rightarrow\ \ell=9. \]

**Final answer.** \((t_n)\) and \((s_n)\) converge to the common limit \(\boxed{\ell=9}\).

**Verification.** \(s_0=12,t_0=1\Rightarrow w_0=99\); \(s_1=\dfrac{1+36}{4}=9.25,\ t_1=\dfrac{1+24}{3}\approx8.333\); \(w_1=3(8.333)+8(9.25)=25+74=99\) ✔. And the terms approach \(9\): \(t_1\approx8.33<9<9.25=s_1\). ✔

**What the student should learn.** To find the common limit, look for a **constant linear quantity** \(a\,t_n+b\,s_n\) (unchanged with \(n\)), then pass the limit onto it: it gives a single equation in \(\ell\) that you solve directly.

> Source: Mathematics Textbook 1, pages 115–116.

#### Common mistake

> **Common mistake:** solving the fixed-point equation \(f(x)=x\) and declaring the root to be the limit **before** proving convergence. The fixed-point result is conditional on the sequence already being convergent and \(f\) being continuous; if you have not proved convergence (by Theorem 8, say), the sequence may have no limit, or you may overlook the condition of choosing the root matching the range.

#### Special cases
- **A geometric difference with ratio in \(]-1,1[\):** tends to zero automatically, making the second adjacency condition easy.
- **A fixed-point equation \(f(x)=x\) with two roots:** choose the root matching the sign/range of the terms (like the positive root in \(\sqrt{1+u_n}\)).
- **\(f\) decreasing:** \((u_n)\) may oscillate around \(\ell\) without being monotonic, so do not rely on the direction of \(f\) to judge monotonicity.
- **Two sequences with the same limit but a difference not tending to zero with opposite monotonicities:** they are not necessarily adjacent if one condition fails.

#### Practice set
1. **(B1-U4-L4-P01)** Show that \(t_n=-\dfrac1n\) and \(s_n=\dfrac1n\) (for \(n\ge1\)) are adjacent, and find their limit.
2. **(B1-U4-L4-P02)** The sequence \(u_0=0,\ u_{n+1}=\sqrt{2+u_n}\). Assuming it converges, find its limit by solving \(f(x)=x\).
3. **(B1-U4-L4-P03)** Show that \(t_n=\dfrac{n}{n+1}\) and \(s_n=\dfrac{n+1}{n}\) (for \(n\ge1\)) are adjacent, and find their limit.
4. **(B1-U4-L4-P04)** The sequence \(u_0=3,\ u_{n+1}=\dfrac{1}{2}u_n+1\). Assuming it converges, find its limit.
5. **(B1-U4-L4-P05)** *(near exam level)* The sequence \(u_0=6,\ u_{n+1}=\sqrt{4+3u_n}\) with \(f(x)=\sqrt{4+3x}\). (a) Find the coordinates of the intersection of \(C:y=f(x)\) with \(d:y=x\). (b) Assuming convergence, deduce the limit.

#### Practice solutions
1. \(t_{n+1}-t_n=\dfrac1n-\dfrac{1}{n+1}=\dfrac{1}{n(n+1)}>0\) (increasing), and \(s_{n+1}-s_n=-\dfrac{1}{n(n+1)}<0\) (decreasing), and \(s_n-t_n=\dfrac2n\to0\); so adjacent, with common limit \(0\) (\(t_n\to0,s_n\to0\)).
2. \(\sqrt{2+x}=x\Rightarrow2+x=x^2\Rightarrow x^2-x-2=0\Rightarrow(x-2)(x+1)=0\); the positive root \(x=2\) (reject \(-1\)), so the limit is \(2\).
3. \(t_n=\dfrac{n}{n+1}=1-\dfrac{1}{n+1}\) is increasing (its difference \(\dfrac{1}{(n+1)(n+2)}>0\)); and \(s_n=\dfrac{n+1}{n}=1+\dfrac1n\) is decreasing; and \(s_n-t_n=\dfrac{n+1}{n}-\dfrac{n}{n+1}=\dfrac{(n+1)^2-n^2}{n(n+1)}=\dfrac{2n+1}{n(n+1)}\to0\); so adjacent, with common limit \(1\).
4. \(\dfrac12x+1=x\Rightarrow1=\dfrac12x\Rightarrow x=2\), so the limit is \(2\).
5. (a) \(\sqrt{4+3x}=x\Rightarrow4+3x=x^2\Rightarrow x^2-3x-4=0\Rightarrow(x-4)(x+1)=0\); the intersection is at \(x=4\) (reject \(-1\) since the root is positive), so the point \((4,4)\). (b) Assuming convergence to \(\ell>0\) with \(f\) continuous, \(\ell=f(\ell)\Rightarrow\ell=4\).

#### Lesson summary
- **Most important definition:** adjacent: one increasing, one decreasing, and \((s_n-t_n)\to0\).
- **Most important theorem:** adjacent sequences converge to a common limit (Theorem 9); and a convergent recursive sequence satisfies \(\ell=f(\ell)\).
- **Most important condition:** do not solve \(f(x)=x\) before proving convergence; and the direction of \(f\) does not force the monotonicity of a recursive sequence.
- **Most important pattern:** in adjacency, look for a constant linear quantity to pass an equation onto the limit.
- **Most common mistake:** declaring a root of \(f(x)=x\) to be the limit without proving existence.
- **Quick self-check:** if \(u_{n+1}=\dfrac{u_n+9}{u_n+1}\) converges to \(\ell>0\), what is \(\ell\)? *(Answer: \(\ell=\dfrac{\ell+9}{\ell+1}\Rightarrow\ell^2+\ell=\ell+9\Rightarrow\ell^2=9\Rightarrow\ell=3\).)*

---

<a id="b1-u4-test"></a>
### Chapter summary & review test — Unit 4

#### Chapter summary
The unit covered the concept of the **limit of a sequence** and the tools to compute and prove it. A finite limit \(\ell\) means every open interval centered at \(\ell\) contains the terms from some index; an infinite limit means tending to \(\pm\infty\). Limits are computed by the operations, by linking the sequence to a function \(u_n=f(n)\), and by the squeeze theorems, with care around indeterminate forms. A limit is proved without computing it by the pivotal theorem "monotonic + bounded \(\Rightarrow\) convergent". These apply to **adjacent** sequences (a common limit) and to **recursive** ones \(u_{n+1}=f(u_n)\) (whose limit solves \(f(x)=x\)).

#### Essential formulas
\[
\lim q^n=\begin{cases}0,&-1<q<1\\1,&q=1\\+\infty,&q>1\\\text{no limit},&q\le-1\end{cases}\qquad
\lim\frac{1}{n^k}=0,\quad \lim n^k=+\infty\ (k\ge1).
\]
Operations on limits (sum/product/quotient with no indeterminate form); and the squeeze theorem \(w_n\le u_n\le v_n,\ \lim v_n=\lim w_n=\ell\Rightarrow\lim u_n=\ell\).

#### Essential theorems/results
- **Theorem 2:** \(u_n=f(n),\ \lim_{x\to+\infty}f(x)=\ell\Rightarrow\lim u_n=\ell\).
- **Squeeze Theorems 4, 5, 6.**
- **Theorem 7:** monotonic + unbounded \(\Rightarrow\pm\infty\).
- **Theorem 8 (pivotal):** monotonic + bounded \(\Rightarrow\) convergent (existence only).
- **Theorem 9:** adjacent \(\Rightarrow\) common limit.
- **Fixed point:** \(u_{n+1}=f(u_n)\) convergent and \(f\) continuous \(\Rightarrow\ell=f(\ell)\).

#### Main problem patterns
Compute the limit of a rational/radical \(u_n=f(n)\); lift an indeterminate form; squeeze with a trigonometric function; prove monotonicity and boundedness then Theorem 8; prove adjacency and find the common limit; study a recursive sequence and solve \(f(x)=x\).

#### Connections between the chapter's ideas
The unit builds on the monotonicity of sequences (Unit 1) and proof by induction. Reference sequences and the operations feed the squeeze theorems; and Theorem 8 proves the existence that the fixed-point result needs for recursive and adjacent sequences. All of this prepares limits of functions, continuity, and integration later.

#### Recommended study order
The limit concept and the limit of \(q^n\) ← the operations and the \(f(n)\) theorem ← squeezing ← boundedness, monotonicity, and Theorem 8 ← adjacent sequences ← recursive sequences \(u_{n+1}=f(u_n)\).

#### Chapter checklist
- [ ] I compute the limit of \(q^n\), \(1/n^k\), and rational functions.
- [ ] I lift \(\frac{\infty}{\infty}\) and \(\infty-\infty\) and use squeezing with \(\sin,\cos\).
- [ ] I prove convergence by monotonicity and boundedness (Theorem 8) without computing the value.
- [ ] I prove adjacency and find the common limit.
- [ ] I study a recursive sequence and find its limit by solving \(f(x)=x\) after proving convergence.

#### Chapter review test
1. Compute \(\displaystyle\lim_{n\to+\infty}\left(\dfrac35\right)^n\) and \(\displaystyle\lim_{n\to+\infty}\left(\dfrac53\right)^n\), and explain the case \(u_n=(-2)^n\).
2. Compute \(\displaystyle\lim_{n\to+\infty}\dfrac{4n^2-n+3}{2n^2+1}\).
3. By squeezing, compute \(\displaystyle\lim_{n\to+\infty}\dfrac{2+\cos n}{n}\).
4. Compute \(\displaystyle\lim_{n\to+\infty}\left(\sqrt{n^2+3n}-n\right)\).
5. The sequence \(u_0=1,\ u_{n+1}=\dfrac{u_n+2}{2}\). Prove by induction it is increasing and bounded above by \(2\), deduce its convergence, then find its limit.
6. Show that \(t_n=1-\dfrac{1}{n^2}\) and \(s_n=1+\dfrac1n\) (for \(n\ge1\)) are adjacent, and find their common limit.
7. The sequence \(u_0=2,\ u_{n+1}=\sqrt{6+u_n}\). Assuming it converges to \(\ell>0\), find \(\ell\).
8. The sequences \(s_0=10,\ t_0=1\), \(s_{n+1}=\dfrac{t_n+2s_n}{3},\ t_{n+1}=\dfrac{2t_n+s_n}{3}\). (a) Prove that \((s_n-t_n)\) is geometric with limit \(0\). (b) Prove adjacency. (c) Prove that \(t_n+s_n\) is constant, and deduce the common limit.

#### Model solutions for the chapter review test
1. \(-1<\dfrac35<1\Rightarrow\lim\left(\dfrac35\right)^n=0\); and \(\dfrac53>1\Rightarrow\lim\left(\dfrac53\right)^n=+\infty\); and \(u_n=(-2)^n\) has ratio \(-2\le-1\), so it alternates in sign and grows, **no limit**.
2. Equal degree in numerator and denominator, the limit is the ratio of the leading coefficients \(\dfrac{4}{2}=2\). *(Dividing by \(n^2\): \(\dfrac{4-1/n+3/n^2}{2+1/n^2}\to2\).)*
3. \(|\cos n|\le1\Rightarrow 1\le 2+\cos n\le3\), so \(\dfrac1n\le\dfrac{2+\cos n}{n}\le\dfrac3n\); both bounds tend to \(0\), so by Theorem 4 the limit is \(0\).
4. By the conjugate: \(\sqrt{n^2+3n}-n=\dfrac{3n}{\sqrt{n^2+3n}+n}=\dfrac{3}{\sqrt{1+3/n}+1}\to\dfrac{3}{1+1}=\dfrac32\).
5. **Boundedness \(P(n):u_n\le2\):** base \(u_0=1\le2\); step \(u_{p+1}=\dfrac{u_p+2}{2}\le\dfrac{2+2}{2}=2\) ✔. **Monotonicity:** \(u_{n+1}-u_n=\dfrac{u_n+2}{2}-u_n=\dfrac{2-u_n}{2}\ge0\) because \(u_n\le2\). So increasing and bounded by \(2\), convergent (Theorem 8). **Limit:** \(f(x)=\dfrac{x+2}{2}\) is continuous, \(\ell=\dfrac{\ell+2}{2}\Rightarrow2\ell=\ell+2\Rightarrow\ell=2\).
6. \(t_{n+1}-t_n=\dfrac{1}{n^2}-\dfrac{1}{(n+1)^2}>0\) (increasing); \(s_{n+1}-s_n=\dfrac{1}{n+1}-\dfrac1n<0\) (decreasing); \(s_n-t_n=\dfrac1n+\dfrac{1}{n^2}\to0\); so adjacent, with common limit \(1\) (\(t_n\to1,s_n\to1\)).
7. \(\sqrt{6+\ell}=\ell\Rightarrow6+\ell=\ell^2\Rightarrow\ell^2-\ell-6=0\Rightarrow(\ell-3)(\ell+2)=0\); the positive root \(\ell=3\) (reject \(-2\)).
8. (a) \(s_{n+1}-t_{n+1}=\dfrac{t_n+2s_n}{3}-\dfrac{2t_n+s_n}{3}=\dfrac{s_n-t_n}{3}\); geometric with ratio \(\dfrac13\), first term \(s_0-t_0=9\), so \(s_n-t_n=9\left(\dfrac13\right)^n\to0\). (b) \(t_{n+1}-t_n=\dfrac{2t_n+s_n}{3}-t_n=\dfrac{s_n-t_n}{3}\ge0\) (increasing), and \(s_{n+1}-s_n=\dfrac{t_n+2s_n}{3}-s_n=\dfrac{t_n-s_n}{3}\le0\) (decreasing), with \((s_n-t_n)\to0\): adjacent. (c) \((t_{n+1}+s_{n+1})=\dfrac{2t_n+s_n}{3}+\dfrac{t_n+2s_n}{3}=\dfrac{3t_n+3s_n}{3}=t_n+s_n\), constant \(=t_0+s_0=11\). By Theorem 9 a common limit \(\ell\), and taking the limit: \(2\ell=11\Rightarrow\ell=\dfrac{11}{2}=5.5\).

---

<a id="b1-u5"></a>
## Unit 5: The Natural Logarithm

> Source: Mathematics Textbook 1, pages 133–164.

### Unit overview

This unit introduces a brand-new function, the **natural (Napierian) logarithm** \(\ln\), and it is the gateway to every "growth and decay" model in the syllabus.

- **Origin:** merchants and astronomers of the 16th century wanted to replace tedious multiplications by easy additions. A function \(f\) with \(f(xy)=f(x)+f(y)\) does exactly that — it **turns a product into a sum**. Analysing that functional equation forces \(f'(x)=k/x\); fixing \(f'(1)=1\) singles out one function, which we call \(\ln\).
- **Definition by calculus:** \(\ln\) is defined as the **primitive (antiderivative) of \(x\mapsto 1/x\) on \(]0,+\infty[\) that vanishes at \(1\)**. From this single fact — \((\ln x)'=1/x\) and \(\ln 1=0\) — every algebraic and analytic property flows.
- **A new number:** because \(\ln\) is a bijection from \(]0,+\infty[\) onto \(\mathbb{R}\), the equation \(\ln x=1\) has a unique solution, the famous number \(e\approx 2.718\).

**Why it matters:** \(\ln\) is the tool for solving equations where the unknown sits in an exponent, for studying functions built from logarithms (domains, asymptotes, variation), and for the important limits that recur in every function-study problem. It also prepares the exponential function and integration.

**Prerequisites:** derivative of a composite function, sign of a rational expression, solving quadratics, variation tables, the squeeze theorem, and the notion of a bijection (Unit 2).

**Main question types:** solve a \(\ln\)-equation or \(\ln\)-inequation (minding the domain \(x>0\)); simplify a logarithmic expression; differentiate \(\ln(u)\); carry out a full function study with \(\ln\); compute a limit of the \(\dfrac{\ln x}{x}\) or \(x\ln x\) type.

### Unit concept map

```text
The natural logarithm ln
├── Definition: ln = primitive of 1/x on ]0,+∞[ with ln 1 = 0
│   ├── (ln x)' = 1/x > 0  →  ln strictly increasing
│   └── sign: ln x < 0 on ]0,1[ ,  ln x > 0 on ]1,+∞[
├── Algebraic properties (product → sum)
│   ├── ln(ab) = ln a + ln b ,  ln(a/b) = ln a − ln b
│   └── ln(aⁿ) = n ln a ,  ln√a = ½ ln a          (a, b > 0)
├── Study of ln & the number e
│   ├── limits: ln x → −∞ (x→0⁺) ,  ln x → +∞ (x→+∞)
│   ├── bijection ]0,+∞[ → ℝ  →  ln x = m ⇔ x = eᵐ
│   └── e : ln e = 1 , e ≈ 2.718 ; points A(1,0), B(e,1)
└── Derivative of ln u & key limits
    ├── (ln u)' = u'/u        (u differentiable, u > 0)
    └── ln x / x → 0 ,  x ln x → 0 ,  ln(1+x)/x → 1
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \((\ln x)'=\dfrac1x\) | derivative of \(\ln\) | \(x>0\) | outside \(]0,+\infty[\) | this is the *definition* of \(\ln\) |
| \(\ln(ab)=\ln a+\ln b\) | \(a,b\) positive | \(a>0\) and \(b>0\) | if \(a\) or \(b\le 0\) | product becomes a sum |
| \(\ln\dfrac{a}{b}=\ln a-\ln b\) | quotient rule | \(a>0,\ b>0\) | if a factor is \(\le 0\) | \(\ln\frac1b=-\ln b\) |
| \(\ln a^{n}=n\ln a\) | \(n\in\mathbb{N}^*\) | \(a>0\) | \(\ln(x^2)=2\ln x\) fails for \(x<0\) | use \(\ln x^2=2\ln|x|\) if sign unknown |
| \(\ln\sqrt{a}=\tfrac12\ln a\) | square-root rule | \(a>0\) | if \(a<0\) | from \(\ln b^2=2\ln b\) with \(b=\sqrt a\) |
| \(\ln x=m\iff x=e^{m}\) | \(m\) any real | none on \(m\) | — | \(\ln\) is a bijection onto \(\mathbb{R}\) |
| \((\ln u)'=\dfrac{u'}{u}\) | \(u\) a function | \(u\) differentiable, \(u>0\) | if \(u\le 0\) somewhere | \((\ln|u|)'=u'/u\) covers \(u<0\) |
| \(\lim\limits_{x\to+\infty}\dfrac{\ln x}{x}=0\) | growth comparison | \(x\to+\infty\) | — | "\(x\) beats \(\ln x\)" |
| \(\lim\limits_{x\to 0^+}x\ln x=0\) | product form | \(x\to 0^+\) | — | removes \(0\times\infty\) |
| \(\lim\limits_{x\to 0}\dfrac{\ln(1+x)}{x}=1\) | derivative at \(1\) | \(x\to 0\) | — | rate of change of \(\ln\) at \(1\) |

### Unit learning checklist

- [ ] I know \(\ln\) is the primitive of \(1/x\) on \(]0,+\infty[\) with \(\ln 1=0\).
- [ ] I set the domain \(x>0\) *before* touching any logarithm.
- [ ] I turn products, quotients, powers and roots into sums with the algebraic rules.
- [ ] I solve \(\ln\)-equations and \(\ln\)-inequations using injectivity and monotonicity.
- [ ] I recall the two end limits of \(\ln\) and the meaning of the number \(e\).
- [ ] I differentiate \(\ln(u)\) as \(u'/u\) and use it inside a full function study.
- [ ] I remove indeterminate forms with \(\dfrac{\ln x}{x}\to0\), \(x\ln x\to0\), \(\dfrac{\ln(1+x)}{x}\to1\).

---

<a id="b1u5-l1"></a>
### Lesson 1: Definition of \(\ln\)

#### Core idea

The natural logarithm is born from a very concrete wish: **to replace multiplication by addition**. If a function satisfies \(f(xy)=f(x)+f(y)\), then multiplying two numbers becomes adding their images — exactly what the old logarithm tables did. Working out that functional equation (put \(x=y=1\) to get \(f(1)=0\); differentiate to get \(f'(x)=k/x\)) shows there is essentially **one** such function once we normalise \(f'(1)=1\). We name it \(\ln\).

So \(\ln\) is not defined by a formula but by two calculus facts: **its derivative is \(1/x\)** and **it is zero at \(1\)**. Equivalently, \(\ln\) is *the* primitive of \(x\mapsto\dfrac1x\) on \(]0,+\infty[\) that vanishes at \(1\). Everything else — its sign, its monotonicity, its algebraic rules — is deduced from these two facts, so you never need to "memorise" \(\ln\); you *derive* its behaviour.

**How does a student recognise this lesson?** Whenever the symbol \(\ln\) appears, or a problem asks for the domain of an expression containing \(\ln\), or asks to solve a simple inequality like \(\ln(\text{something})>0\). The recurring source of confusion is the **domain**: \(\ln\) accepts only strictly positive numbers, so the very first move in any logarithm problem is to state where the expression exists.

#### Prerequisite knowledge
- The idea of a **primitive (antiderivative)**: \(F'=f\).
- A function with zero derivative on an interval is **constant** there.
- The sign of a first-degree or rational expression (to describe a domain).
- Strictly increasing functions preserve order and are injective.

#### Definitions

**Definition (the function \(\ln\)).** There exists a **unique** function, defined and differentiable on \(\mathbb{R}^*_+=\,]0,+\infty[\), whose value at \(1\) is \(0\) and whose derivative on \(]0,+\infty[\) is \(x\mapsto\dfrac1x\). This function is the **natural (Napierian) logarithm**, written \(\ln\). In short, \(\ln\) is the primitive of \(x\mapsto\dfrac1x\) on \(]0,+\infty[\) that satisfies \(\ln 1=0\).

**Numerical values.** Values of \(\ln\) come from the \(\boxed{\ln}\) key of a calculator, e.g. \(\ln 2\approx 0.693\) and \(\ln 3\approx 1.099\).

> Source: Mathematics Textbook 1, pages 135–136.

#### Formulas and properties

**Immediate consequences of the definition.**
- **Domain:** \(\ln\) is defined only on \(]0,+\infty[\); a negative number or \(0\) has no logarithm.
- **Basic value:** \(\ln 1=0\).
- **Derivative and continuity:** \(\ln'(x)=\dfrac1x\) for \(x>0\); being differentiable, \(\ln\) is continuous on \(]0,+\infty[\).

**Monotonicity.** Since \(\ln'(x)=\dfrac1x>0\) for every \(x>0\), \(\ln\) is **strictly increasing** on \(]0,+\infty[\). Its sign table is:

| \(x\) | \(0\) | | \(1\) | | \(+\infty\) |
|-----|-----|--|-----|--|-----------|
| \(\ln' x\) | | \(+\) | \(1\) | \(+\) | |
| \(\ln x\) | | \(\nearrow\) | \(0\) | \(\nearrow\) | |

**Sign of \(\ln\).** From strict increase together with \(\ln 1=0\):
\[
\ln x=0\iff x=1,\qquad \ln x<0\iff x\in\,]0,1[,\qquad \ln x>0\iff x\in\,]1,+\infty[.
\]

**Comparison of positive numbers.** For \(a>0\) and \(b>0\), because \(\ln\) is strictly increasing (hence injective and order-preserving):
\[
a=b\iff \ln a=\ln b,\qquad a<b\iff \ln a<\ln b,\qquad a>b\iff \ln a>\ln b.
\]
To compare two strictly positive numbers, you may compare their logarithms.

> **Important condition:** \(\ln\) exists **only** for strictly positive arguments. Before writing \(\ln(A)\) you must guarantee \(A>0\). This is the single most important reflex of the whole unit.

#### Theorems and proofs

**Theorem–Definition (existence and uniqueness of \(\ln\)).** There is exactly one function \(\ln\), differentiable on \(]0,+\infty[\), with \(\ln 1=0\) and \(\ln'(x)=1/x\).

*Uniqueness (the part the book justifies).* If two functions \(g_1,g_2\) both had derivative \(1/x\) on \(]0,+\infty[\) and both vanished at \(1\), then \((g_1-g_2)'=\dfrac1x-\dfrac1x=0\) on the interval, so \(g_1-g_2\) is constant; since \((g_1-g_2)(1)=0\), that constant is \(0\), hence \(g_1=g_2\). Existence is admitted at this level (it comes from the theory of primitives of continuous functions). **You must apply this result, not reprove existence.**

#### Recognising the idea and the solution method

- **If the task shows** \(\ln(\text{expression})\): first find where the expression is \(>0\) — that is the domain.
- **If asked** to solve \(\ln(A)>0\) or \(\ln(A)<0\): use \(\ln A>0\iff A>1\) and \(\ln A<0\iff 0<A<1\) (never forget \(A>0\)).
- **If asked** to compare positive numbers: apply \(\ln\) (order-preserving) or study the sign of a difference of logarithms.

**Standard algorithm for a "domain / simple sign" problem:**
1. Isolate every argument that sits under a \(\ln\).
2. Impose "argument \(>0\)" for each and solve the resulting inequalities.
3. Intersect all the conditions — this is the domain.
4. Only then translate \(\ln A\gtrless 0\) into \(A\gtrless 1\), staying inside the domain.

#### Basic example

**B1-U5-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Find the domain of \(f(x)=\ln(x-2)\) and solve \(\ln(x-2)>0\) and \(\ln(x-2)<0\).

**Why this method applies.** The argument \(x-2\) must be strictly positive for \(\ln\) to exist; then the sign of \(\ln\) is read off from the value of the argument relative to \(1\).

**Step-by-step solution.**
- **Domain:** \(x-2>0\iff x>2\), so \(D_f=\,]2,+\infty[\).
- **\(\ln(x-2)>0\):** on \(D_f\), \(\ln(x-2)>0\iff x-2>1\iff x>3\); solution \(]3,+\infty[\).
- **\(\ln(x-2)<0\):** \(\iff 0<x-2<1\iff 2<x<3\); solution \(]2,3[\).

**Final answer.** \(D_f=\,]2,+\infty[\); \(\ln(x-2)>0\) on \(]3,+\infty[\); \(\ln(x-2)<0\) on \(]2,3[\).

**Verification.** At \(x=4\): \(x-2=2>1\), \(\ln 2>0\) ✔. At \(x=2.5\): \(x-2=0.5\in]0,1[\), \(\ln 0.5<0\) ✔.

**What the student should learn.** The domain condition \(x-2>0\) is separate from the sign condition \(x-2>1\); handle them in that order.

> Source: adapted from the worked inequality on Mathematics Textbook 1, page 136.

#### Textbook-level example

**B1-U5-L1-E02**

**Problem.** Give the domain of definition of each of the following: \(u(x)=\ln(x^2-1)\), \(v(x)=\ln\!\Big(\dfrac{x}{1-x}\Big)\), \(w(x)=\ln|x^2+2x|\).

**Problem analysis.** Each domain is the set where the argument of \(\ln\) is strictly positive; for the absolute value, we need the inside to be non-zero.

**Step-by-step solution.**
- \(u\): \(x^2-1>0\iff x<-1\) or \(x>1\), so \(D_u=\,]-\infty,-1[\,\cup\,]1,+\infty[=\mathbb{R}\setminus[-1,1]\).
- \(v\): \(\dfrac{x}{1-x}>0\). Numerator and denominator have the same sign only on \(0<x<1\), so \(D_v=\,]0,1[\).
- \(w\): \(|x^2+2x|>0\iff x^2+2x\neq 0\iff x(x+2)\neq0\), so \(D_w=\mathbb{R}\setminus\{-2,0\}\).

**Final answer.** \(D_u=\mathbb{R}\setminus[-1,1]\), \(D_v=\,]0,1[\), \(D_w=\mathbb{R}\setminus\{-2,0\}\).

**Verification.** For \(v\) at \(x=\tfrac12\): \(\dfrac{1/2}{1/2}=1>0\) ✔; at \(x=2\): \(\dfrac{2}{-1}=-2<0\), excluded ✔.

**What the student should learn.** A quotient is positive when numerator and denominator share a sign; a squared/absolute argument only needs to be non-zero.

> Source: Mathematics Textbook 1, page 136.

#### Common mistake

> **Common mistake:** solving \(\ln(x-2)>0\) by writing "\(x-2>0\)" and stopping. That is only the **existence** condition. The inequality \(\ln(x-2)>0\) means the argument exceeds \(1\), i.e. \(x-2>1\). Confusing "\(>0\)" (domain) with "\(>1\)" (sign of \(\ln\)) is the classic error.

#### Special cases
- **Argument \(=1\):** \(\ln 1=0\) exactly; this is the boundary between the negative and positive parts of \(\ln\).
- **Square/absolute arguments:** \(\ln(x^2)\) or \(\ln|x|\) exists for all \(x\neq0\), a wider domain than \(\ln x\).
- **Composed condition:** for \(\ln(A)+\ln(B)\) you need \(A>0\) **and** \(B>0\) simultaneously — a stricter domain than \(\ln(AB)\).

#### Practice set
1. **(B1-U5-L1-P01)** Give the domain of \(f(x)=\ln(3-x)\).
2. **(B1-U5-L1-P02)** Solve \(\ln(2x-1)<0\). *(mind the domain)*
3. **(B1-U5-L1-P03)** Give the domain of \(g(x)=\ln\!\Big(\dfrac{x-1}{x+2}\Big)\).
4. **(B1-U5-L1-P04)** Using strict increase of \(\ln\), order \(\ln 2\), \(\ln 5\), \(\ln 1\), \(\ln\tfrac12\) from smallest to largest.
5. **(B1-U5-L1-P05)** *(near exam level)* Solve \(\ln(x+1)\ge \ln(2x-3)\), stating the domain first.

#### Practice solutions
1. \(3-x>0\iff x<3\), so \(D_f=\,]-\infty,3[\).
2. Domain: \(2x-1>0\iff x>\tfrac12\). Then \(\ln(2x-1)<0\iff 0<2x-1<1\iff \tfrac12<x<1\). Solution \(\big]\tfrac12,1\big[\).
3. \(\dfrac{x-1}{x+2}>0\): same sign of numerator/denominator gives \(x<-2\) or \(x>1\); so \(D_g=\,]-\infty,-2[\,\cup\,]1,+\infty[\).
4. Since \(\tfrac12<1<2<5\) and \(\ln\) is strictly increasing: \(\ln\tfrac12<\ln 1<\ln 2<\ln 5\) (numerically \(-0.693<0<0.693<1.609\)).
5. Domain: \(x+1>0\) and \(2x-3>0\Rightarrow x>\tfrac32\). On this domain \(\ln\) is increasing, so \(\ln(x+1)\ge\ln(2x-3)\iff x+1\ge 2x-3\iff x\le 4\). Intersecting: \(\big]\tfrac32,4\big]\).

#### Lesson summary
- **Most important definition:** \(\ln\) is the primitive of \(1/x\) on \(]0,+\infty[\) with \(\ln 1=0\).
- **Most important formula:** \((\ln x)'=1/x>0\), so \(\ln\) is strictly increasing.
- **Most important condition:** \(\ln A\) exists only when \(A>0\); set the domain first.
- **Most important pattern:** \(\ln A>0\iff A>1\); \(\ln A<0\iff 0<A<1\).
- **Most common mistake:** treating the existence condition (\(A>0\)) as the whole inequality (\(A>1\)).
- **Quick self-check:** solve \(\ln(x-1)>0\). *(Answer: \(x-1>1\Rightarrow x>2\).)*

---

<a id="b1u5-l2"></a>
### Lesson 2: Algebraic properties of the logarithm

#### Core idea

This lesson delivers the payoff promised by the definition: **\(\ln\) converts a product into a sum**. That single rule, \(\ln(ab)=\ln a+\ln b\), spawns the whole algebra of logarithms — quotients become differences, powers become multiples, roots become halves. These identities are what make logarithms so useful: a complicated product of factors collapses into a simple sum you can differentiate, compare, or solve.

The deep reason is the functional equation from Lesson 1. Because \(\ln\) is the unique differentiable solution of \(f(xy)=f(x)+f(y)\) with \(\ln 1=0\), the product rule is not an accident — it is the very identity that *defines* logarithms historically.

**How does a student recognise this lesson?** When an expression mixes products, quotients, powers, or square roots inside logarithms and the task says "simplify", "solve the equation", or "solve the inequation". The dangerous point is that these rules hold **only for strictly positive numbers**: \(\ln(x^2)=2\ln x\) is *false* when \(x<0\) (the correct statement is \(2\ln|x|\)). So the domain must be watched at every step.

#### Prerequisite knowledge
- Lesson 1: domain of \(\ln\), \(\ln 1=0\), strict increase and injectivity.
- Expanding \((a-b)^2\) and factoring quadratics.
- Solving quadratic equations and sign tables of \(\dfrac{P(x)}{Q(x)}\).

#### Definitions

No new object is defined here; we establish **properties** of the function \(\ln\) already defined in Lesson 1. The key phrase to keep in mind is "for strictly positive arguments".

> Source: Mathematics Textbook 1, pages 139–142.

#### Formulas and properties

For all \(a>0\), \(b>0\) and \(n\in\mathbb{N}^*\):
\[
\ln(ab)=\ln a+\ln b,\qquad \ln\!\Big(\frac1b\Big)=-\ln b,\qquad \ln\!\Big(\frac{a}{b}\Big)=\ln a-\ln b,
\]
\[
\ln(a^{n})=n\ln a,\qquad \ln\sqrt{a}=\tfrac12\ln a.
\]

> **Important condition:** each identity requires the numbers to be **strictly positive**. In particular \(\ln(a^n)=n\ln a\) needs \(a>0\). When the sign of \(x\) is unknown, use \(\ln(x^2)=2\ln|x|\), not \(2\ln x\).

> **Warning:** \(\ln(a+b)\) has **no** simplification — it is *not* \(\ln a+\ln b\). The sum rule applies to a **product** inside the logarithm, never to a sum inside it.

#### Theorems and proofs

**Theorem (logarithm of a product).** For \(a>0\), \(b>0\): \(\ln(ab)=\ln a+\ln b\).

*Proof (the book proves it).* Fix \(a>0\) and set, for \(x>0\), \(f(x)=\ln(ax)-\ln a-\ln x\). Then \(f\) is differentiable and by the chain rule
\[
f'(x)=a\cdot\frac{1}{ax}-\frac1x=\frac1x-\frac1x=0.
\]
Hence \(f\) is constant on \(]0,+\infty[\). Since \(f(1)=\ln a-\ln a-\ln 1=0\), that constant is \(0\), so \(f(x)=0\) for all \(x>0\), i.e. \(\ln(ax)=\ln a+\ln x\). Putting \(x=b\) gives the result.

**Consequences (proved from the theorem).**
- **Quotient:** since \(a=\dfrac{a}{b}\cdot b\), the product rule gives \(\ln a=\ln\dfrac{a}{b}+\ln b\), hence \(\ln\dfrac{a}{b}=\ln a-\ln b\). With \(a=1\): \(\ln\dfrac1b=-\ln b\).
- **Power:** taking \(a_1=\dots=a_n=a\) in \(\ln(a_1\cdots a_n)=\ln a_1+\dots+\ln a_n\) (itself proved by induction) gives \(\ln(a^n)=n\ln a\).
- **Square root:** for \(b>0\), \(\ln b^2=2\ln b\); put \(b=\sqrt a\) to get \(\ln a=2\ln\sqrt a\), i.e. \(\ln\sqrt a=\tfrac12\ln a\).

**You must be able to reproduce the product-rule proof**, as it is a model "constant-derivative" argument; the consequences you simply apply.

#### Recognising the idea and the solution method

- **If** you see a product/quotient/power/root inside a logarithm → expand it into a sum/difference of simpler logarithms.
- **If** the equation is \(\ln A=\ln B\) → after fixing the domain, use injectivity: \(A=B\).
- **If** the inequation is \(\ln A\ge\ln B\) → after fixing the domain, use monotonicity: \(A\ge B\) (same direction, since \(\ln\) increases).

**Standard algorithm for a \(\ln\)-equation / \(\ln\)-inequation:**
1. **Existence:** impose "argument \(>0\)" for every logarithm; intersect to get the domain \(D\).
2. **Reduce:** use the algebraic rules to write each side as a single \(\ln\).
3. **Strip the \(\ln\):** on \(D\), \(\ln A=\ln B\Rightarrow A=B\) (equation) or \(\ln A\ge\ln B\Rightarrow A\ge B\) (inequation).
4. **Solve** the resulting algebraic (in)equation.
5. **Keep only** the solutions lying in \(D\).

#### Basic example

**B1-U5-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Simplify \(A=\ln 12-\ln 3\) and \(B=2\ln 3+\ln 2\); then write \(\ln\sqrt{50}\) in terms of \(\ln 2\) and \(\ln 5\).

**Why this method applies.** Each expression is a combination of products, quotients, powers or roots, so the algebraic rules turn them into a single clean logarithm.

**Step-by-step solution.**
- \(A=\ln 12-\ln 3=\ln\dfrac{12}{3}=\ln 4=\ln 2^2=2\ln 2\).
- \(B=2\ln 3+\ln 2=\ln 3^2+\ln 2=\ln 9+\ln 2=\ln(9\cdot 2)=\ln 18\).
- \(\sqrt{50}=\sqrt{2\cdot 5^2}=5\sqrt2\), so \(\ln\sqrt{50}=\tfrac12\ln 50=\tfrac12\ln(2\cdot 5^2)=\tfrac12\big(\ln 2+2\ln 5\big)=\tfrac12\ln 2+\ln 5\).

**Final answer.** \(A=2\ln 2\); \(B=\ln 18\); \(\ln\sqrt{50}=\tfrac12\ln 2+\ln 5\).

**Verification.** Numerically \(A\approx 2(0.693)=1.386\) and \(\ln 12-\ln 3\approx 2.485-1.099=1.386\) ✔. \(\tfrac12\ln 2+\ln 5\approx 0.347+1.609=1.956\) and \(\tfrac12\ln 50\approx \tfrac12(3.912)=1.956\) ✔.

**Main lesson.** Break the number into prime factors first; then products become sums, powers become multiples, and roots become halves.

> Source: modelled on the identity-manipulation exercises of Mathematics Textbook 1, pages 139 and 155.

#### Textbook-level example

**B1-U5-L2-E02**

**Problem.** Solve the equation \((E):\ \ln\sqrt{2x-3}=\ln(6-x)-\tfrac12\ln x\).

**Problem analysis.** A \(\ln\)-equation with a root, a quotient-like term, and a half-logarithm. We fix the domain, collapse each side to a single \(\ln\), then use injectivity of \(\ln\).

**Step-by-step solution.**
- **Existence:** \(2x-3>0\), \(6-x>0\), \(x>0\) \(\Rightarrow \tfrac32<x<6\), so \(D=\,]\tfrac32,6[\).
- **Reduce** using \(\ln\sqrt{2x-3}=\tfrac12\ln(2x-3)\) and moving \(-\tfrac12\ln x\) across:
\[
\tfrac12\ln(2x-3)+\tfrac12\ln x=\ln(6-x)\iff \tfrac12\ln\big(x(2x-3)\big)=\ln(6-x).
\]
- Multiply by \(2\) and use \(2\ln(6-x)=\ln\big((6-x)^2\big)\):
\[
\ln\big(2x^2-3x\big)=\ln\big((6-x)^2\big).
\]
- **Strip the \(\ln\):** \(2x^2-3x=(6-x)^2=x^2-12x+36\), i.e. \(x^2+9x-36=0\).
- **Solve:** \(x=\dfrac{-9\pm\sqrt{81+144}}{2}=\dfrac{-9\pm15}{2}\Rightarrow x=3\) or \(x=-12\).

**Final answer.** Only \(x=3\in D\); the other root \(-12\notin D\). So \(\mathcal{S}_E=\{3\}\).

**Verification.** At \(x=3\): LHS \(=\ln\sqrt{3}=\tfrac12\ln 3\); RHS \(=\ln 3-\tfrac12\ln 3=\tfrac12\ln 3\) ✔.

**What the student should learn.** Convert every side into one logarithm, then drop the \(\ln\) by injectivity — but only accept roots that lie in the existence domain.

> Source: Mathematics Textbook 1, pages 140–141.

#### Harder / composite example

**B1-U5-L2-E03**

**Problem.** Solve the inequation \((I):\ \ln(x^2-3x)\ge 2\ln(6-x)\).

**Problem analysis.** A \(\ln\)-inequation. The right side needs the power rule; then monotonicity of \(\ln\) turns it into a polynomial inequality, valid only on the existence domain.

**Step-by-step solution.**
- **Existence:** \(x^2-3x>0\iff x<0\) or \(x>3\); and \(6-x>0\iff x<6\). So the existence set is \(\big(]-\infty,0[\,\cup\,]3,+\infty[\big)\cap\,]-\infty,6[=\,]-\infty,0[\,\cup\,]3,6[\).
- **Reduce:** \(2\ln(6-x)=\ln\big((6-x)^2\big)\), so \((I)\) becomes \(\ln(x^2-3x)\ge\ln\big((6-x)^2\big)\).
- **Strip the \(\ln\)** (increasing): \(x^2-3x\ge (6-x)^2=x^2-12x+36\iff 9x\ge 36\iff x\ge 4\).
- **Intersect** with the existence set \(]-\infty,0[\,\cup\,]3,6[\): only \([4,6[\) survives.

**Final answer.** \(\mathcal{S}_I=[4,6[\).

**Verification.** At \(x=5\): \(x^2-3x=10\), \((6-x)^2=1\); \(\ln 10\ge \ln 1=0\) ✔, and \(2\ln(6-5)=2\ln1=0\) ✔.

**What the student should learn.** For inequations the \(\ln\) is dropped **without flipping** the sign (because \(\ln\) increases), but the final answer must be intersected with the domain.

> Source: Mathematics Textbook 1, page 141.

#### Common mistake

> **Common mistake:** writing \(\ln(x^2)=2\ln x\) for every \(x\). This holds only for \(x>0\). If \(x<0\) then \(\ln(x^2)=2\ln(-x)=2\ln|x|\). Forgetting the absolute value produces a wrong domain and lost solutions.

> **Another common mistake:** treating \(\ln(a+b)\) as \(\ln a+\ln b\). There is no rule for the logarithm of a **sum**; only products simplify.

#### Special cases
- **Different domains, same values:** \(f(x)=\ln(x^2-1)\) has domain \(\mathbb{R}\setminus[-1,1]\), whereas \(g(x)=\ln(x-1)+\ln(x+1)\) has domain \(]1,+\infty[\); they agree only where both exist, on \(]1,+\infty[\).
- **Reciprocal:** \(\ln\dfrac1b=-\ln b\) flips the sign of the logarithm.
- **Absolute value:** \((\ln|u|)'=\dfrac{u'}{u}\) lets you differentiate even when \(u<0\) (Lesson 4).

#### Practice set
1. **(B1-U5-L2-P01)** Simplify \(\ln 8-\ln 2\).
2. **(B1-U5-L2-P02)** Write \(\ln 45\) using \(\ln 3\) and \(\ln 5\).
3. **(B1-U5-L2-P03)** Solve \(\ln(x)+\ln(x-3)=\ln 4\). *(mind the domain)*
4. **(B1-U5-L2-P04)** Solve \(\ln(2x)=\ln(x^2-1)\).
5. **(B1-U5-L2-P05)** *(near exam level)* Solve the inequation \(\ln(x)\le\ln(x^2-2x)\).

#### Practice solutions
1. \(\ln 8-\ln 2=\ln\dfrac82=\ln 4=2\ln 2\).
2. \(45=3^2\cdot 5\), so \(\ln 45=\ln 3^2+\ln 5=2\ln 3+\ln 5\).
3. Domain \(x>3\). Then \(\ln\big(x(x-3)\big)=\ln 4\Rightarrow x^2-3x=4\Rightarrow x^2-3x-4=0\Rightarrow (x-4)(x+1)=0\Rightarrow x=4\) or \(x=-1\). Only \(x=4>3\); so \(\mathcal{S}=\{4\}\).
4. Domain: \(2x>0\) and \(x^2-1>0\Rightarrow x>1\). Then \(2x=x^2-1\Rightarrow x^2-2x-1=0\Rightarrow x=1\pm\sqrt2\). Only \(x=1+\sqrt2\approx 2.414>1\); so \(\mathcal{S}=\{1+\sqrt2\}\).
5. Domain: \(x>0\) and \(x^2-2x>0\iff x>2\) (with \(x>0\)); so \(x>2\). On it, increase gives \(x\le x^2-2x\iff 0\le x^2-3x\iff x\ge 3\) (since \(x>0\)). Intersect: \([3,+\infty[\); so \(\mathcal{S}=[3,+\infty[\).

#### Lesson summary
- **Most important definition:** the algebra of \(\ln\) — product to sum, quotient to difference, power to multiple, root to half.
- **Most important formula:** \(\ln(ab)=\ln a+\ln b\) (all others follow).
- **Most important condition:** every rule requires strictly positive arguments; use \(\ln x^2=2\ln|x|\) when the sign is unknown.
- **Most important pattern:** fix the domain → collapse to one \(\ln\) → strip by injectivity/monotonicity → keep solutions in the domain.
- **Most common mistake:** \(\ln(x^2)=2\ln x\) for all \(x\), or \(\ln(a+b)=\ln a+\ln b\).
- **Quick self-check:** simplify \(\ln 2+\ln 5\). *(Answer: \(\ln 10\).)*

---

<a id="b1u5-l3"></a>
### Lesson 3: Study of \(\ln\) and the number \(e\)

#### Core idea

Having the algebra, we now study \(\ln\) as a function: its **behaviour at the two ends** of \(]0,+\infty[\). Since \(\ln\) is strictly increasing and continuous, its two limits — \(-\infty\) as \(x\to0^+\) and \(+\infty\) as \(x\to+\infty\) — tell us that \(\ln\) sweeps through **every** real value exactly once. In other words \(\ln\) is a **bijection** from \(]0,+\infty[\) onto \(\mathbb{R}\).

That bijection is what lets us *invert* \(\ln\): for any real \(m\), the equation \(\ln x=m\) has a **unique** solution, which we name \(e^m\). The special case \(m=1\) introduces the celebrated number \(e\) (with \(\ln e=1\), \(e\approx 2.718\)). This is the birthplace of the exponential notation and of a powerful method: to solve \(\ln x=m\), just write \(x=e^m\).

**How does a student recognise this lesson?** When a limit of \(\ln\) is asked at \(0^+\) or \(+\infty\); when the number \(e\) or the notation \(e^m\) appears; when an equation \(\ln x=m\) (with \(m\) a constant, not another logarithm) must be solved; or when the graph, its tangents, and the points \(A(1,0)\), \(B(e,1)\) are involved. The subtle point is that \(\ln\) grows to \(+\infty\) but **very slowly**.

#### Prerequisite knowledge
- Lessons 1–2: monotonicity, sign, algebraic rules.
- A strictly monotone continuous function on an interval is a **bijection** onto its image (Unit 2).
- The composite-limit theorem (substitution \(u=1/x\)).

#### Definitions

**Definition (the number \(e\)).** For any real \(m\), the unique solution of \(\ln x=m\) in \(]0,+\infty[\) is denoted \(e^m\); thus \(\ln(e^m)=m\) for every real \(m\). Taking \(m=1\) defines the **Napierian number** \(e\): the unique real with \(\ln e=1\), and \(e\approx 2.71828\). Since \(\ln 1=0\), we also have \(e^0=1\).

> Source: Mathematics Textbook 1, pages 143–145.

#### Formulas and properties

**Limits at the ends.**
\[
\lim_{x\to+\infty}\ln x=+\infty,\qquad \lim_{x\to 0^+}\ln x=-\infty.
\]

**Full variation table.**

| \(x\) | \(0\) | | \(1\) | | \(+\infty\) |
|-----|-----|--|-----|--|-----------|
| \(\ln' x\) | | \(+\) | \(1\) | \(+\) | |
| \(\ln x\) | \(-\infty\) | \(\nearrow\) | \(0\) | \(\nearrow\) | \(+\infty\) |

**Bijection and inversion.** \(\ln:\,]0,+\infty[\to\mathbb{R}\) is a bijection, so for every real \(m\):
\[
\ln x=m\iff x=e^{m},\qquad\text{and hence}\qquad \ln x>m\iff x>e^{m}\ (\ln\text{ increasing}).
\]

**Graph, points and tangents.** The curve \(\mathcal{C}\) of \(\ln\) passes through \(A(1,0)\) and \(B(e,1)\); the \(y\)-axis (\(x=0\)) is a vertical asymptote. The tangent at abscissa \(x_0\) has slope \(\dfrac{1}{x_0}\) and equation
\[
y=\ln(x_0)+\frac{1}{x_0}(x-x_0)=\frac{x}{x_0}+\ln(x_0)-1.
\]
In particular the tangent at \(A(1,0)\) is \(y=x-1\), and the tangent at \(B(e,1)\) is \(y=\dfrac{x}{e}\) (it passes through the origin).

> **Exam-style insight:** the equivalence \(\ln x=m\iff x=e^{m}\) is the fastest way to solve any equation of the form \(\ln(\text{expression})=\text{constant}\): set the inside equal to \(e^{\text{constant}}\).

#### Theorems and proofs

**Theorem (limits of \(\ln\)).** \(\displaystyle\lim_{x\to+\infty}\ln x=+\infty\) and \(\displaystyle\lim_{x\to 0^+}\ln x=-\infty\).

*Proof (the book proves it).*
- **At \(+\infty\):** given any \(M>0\), choose a natural \(n>\dfrac{M}{\ln 2}\); since \(\ln 2>0\), \(\ln 2^n=n\ln 2>M\). By strict increase, \(x>2^n\Rightarrow \ln x>\ln 2^n>M\). Hence \(\ln x\) exceeds every bound, i.e. \(\ln x\to+\infty\).
- **At \(0^+\):** substitute \(u=\dfrac1x\), so \(\ln x=-\ln u\) and \(u\to+\infty\) as \(x\to0^+\). Then \(\displaystyle\lim_{x\to0^+}\ln x=-\lim_{u\to+\infty}\ln u=-\infty\).

**Theorem (\(\ln\) is a bijection).** Being strictly increasing and continuous with limits \(-\infty\) and \(+\infty\), \(\ln\) maps \(]0,+\infty[\) onto all of \(\mathbb{R}\), one-to-one. Consequently \(\ln x=m\) has a unique solution \(e^m\) for each real \(m\). **You apply this; the bijection theorem itself is from Unit 2.**

#### Recognising the idea and the solution method

- **If** the equation is \(\ln(\text{expr})=c\) (constant) → the inside equals \(e^{c}\); then solve.
- **If** the inequation is \(\ln(\text{expr})\ge c\) → the inside is \(\ge e^{c}\) (same direction).
- **If** the unknown appears through \(\ln x=X\) in a polynomial → substitute \(X=\ln x\), solve for \(X\), then return via \(x=e^{X}\).

**Standard algorithm ("equation with \(e\)"):**
1. Fix the domain of every \(\ln\).
2. Isolate a single \(\ln(\text{expr})\) equal to a constant \(c\) (use algebra rules if needed).
3. Write \(\text{expr}=e^{c}\).
4. Solve and keep the solutions in the domain.

#### Basic example

**B1-U5-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Solve \(\ln(1-2x)=-2\) for \(x<\tfrac12\).

**Why this method applies.** The right side is a constant, so we invert \(\ln\) directly with \(\ln u=m\iff u=e^{m}\).

**Step-by-step solution.**
- **Existence:** \(1-2x>0\iff x<\tfrac12\) (already assumed).
- Set \(u=1-2x\); then \(\ln u=-2\iff u=e^{-2}\), so \(1-2x=e^{-2}\).
- Solve: \(2x=1-e^{-2}\Rightarrow x=\dfrac{1-e^{-2}}{2}\).

**Final answer.** \(x=\dfrac{1-e^{-2}}{2}\) (numerically \(x\approx\dfrac{1-0.135}{2}\approx 0.432<\tfrac12\), valid).

**Verification.** \(1-2x=e^{-2}>0\) ✔, and \(\ln(e^{-2})=-2\) ✔.

**What the student should learn.** An equation "\(\ln(\text{something})=\text{constant}\)" is solved in one line by setting the inside equal to \(e^{\text{constant}}\).

> Source: modelled on the worked example of Mathematics Textbook 1, page 145.

#### Textbook-level example

**B1-U5-L3-E02**

**Problem.** Solve \((\ln x+2)(\ln x-3)\le 0\) for \(x>0\).

**Problem analysis.** The unknown appears only through \(\ln x\); substitute \(z=\ln x\) to reduce to a quadratic inequality, then return to \(x\) with \(z=\ln x\iff x=e^{z}\).

**Step-by-step solution.**
- **Existence:** \(x>0\).
- Put \(z=\ln x\): the inequation becomes \((z+2)(z-3)\le 0\iff -2\le z\le 3\).
- Return: \(-2\le\ln x\le 3\iff \ln(e^{-2})\le\ln x\le\ln(e^{3})\).
- Since \(\ln\) is strictly increasing: \(e^{-2}\le x\le e^{3}\).

**Final answer.** \(\mathcal{S}=[\,e^{-2},\,e^{3}\,]\).

**Verification.** At \(x=1\) (\(\ln 1=0\), inside \([-2,3]\)): \((0+2)(0-3)=-6\le 0\) ✔.

**What the student should learn.** For a polynomial in \(\ln x\), substitute \(z=\ln x\), solve, then convert each bound \(z=k\) into \(x=e^{k}\).

> Source: Mathematics Textbook 1, page 145.

#### Harder / composite example

**B1-U5-L3-E03**

**Problem.** Study \(f(x)=2\sqrt{x}-\ln x\) on \(]0,+\infty[\) and deduce that \(\ln x<2\sqrt{x}\) for all \(x>0\).

**Problem analysis.** To compare \(\ln x\) with \(2\sqrt x\), study the sign of their difference \(f\). We differentiate, find the minimum, and show it is positive.

**Step-by-step solution.**
- \(f\) is differentiable on \(]0,+\infty[\) and
\[
f'(x)=\frac{1}{\sqrt{x}}-\frac1x=\frac{\sqrt{x}-1}{x}=\frac{x-1}{x(\sqrt{x}+1)}.
\]
- \(f'\) vanishes at \(x=1\); its sign is that of \(x-1\): negative on \(]0,1[\), positive on \(]1,+\infty[\).

| \(x\) | \(0\) | | \(1\) | | \(+\infty\) |
|-----|-----|--|-----|--|-----------|
| \(f'(x)\) | | \(-\) | \(0\) | \(+\) | |
| \(f(x)\) | | \(\searrow\) | \(2\) | \(\nearrow\) | |

- The minimum is \(f(1)=2\sqrt1-\ln 1=2\). Hence \(f(x)\ge 2>0\) for all \(x>0\).

**Final answer.** \(2\sqrt x-\ln x>0\), i.e. \(\boxed{\ln x<2\sqrt x}\) for all \(x>0\).

**Verification.** At \(x=4\): \(2\sqrt4=4\), \(\ln 4\approx 1.386<4\) ✔. At \(x=100\): \(2\sqrt{100}=20\), \(\ln 100\approx 4.605<20\) ✔.

**What the student should learn.** To prove an inequality between two functions, study the sign of their difference through its minimum; this exact result is reused in Lesson 4 to prove \(\dfrac{\ln x}{x}\to0\).

> Source: Mathematics Textbook 1, page 146.

#### Common mistake

> **Common mistake:** solving \(\ln x=m\) by "computing \(\ln\) of both sides" again, or writing \(x=\ln^{-1}(m)\) as if it were a calculator button. The correct inversion is \(\ln x=m\iff x=e^{m}\); the solution is the number \(e^m\), not "\(\ln\) of \(m\)".

#### Special cases
- **\(m=0\):** \(\ln x=0\iff x=e^0=1\).
- **\(m=1\):** \(\ln x=1\iff x=e\), the definition of \(e\).
- **Slow growth:** although \(\ln x\to+\infty\), on \([10,11]\) the graph looks almost flat because \(\ln\) increases extremely slowly.
- **Tangent through the origin:** the tangent at \(B(e,1)\) is \(y=x/e\), which passes through \(O\).

#### Practice set
1. **(B1-U5-L3-P01)** Solve \(\ln x=3\).
2. **(B1-U5-L3-P02)** Solve \(\ln(2x-1)=0\).
3. **(B1-U5-L3-P03)** Solve \((\ln x)^2-\ln x-2=0\). *(substitute \(X=\ln x\))*
4. **(B1-U5-L3-P04)** Write the equation of the tangent to \(y=\ln x\) at the point of abscissa \(x_0=2\).
5. **(B1-U5-L3-P05)** *(near exam level)* Solve the inequation \(\ln(x)\ge 1\), then \((\ln x-1)(\ln x+2)>0\).

#### Practice solutions
1. \(\ln x=3\iff x=e^{3}\); so \(\mathcal{S}=\{e^{3}\}\).
2. Domain \(x>\tfrac12\). \(\ln(2x-1)=0\iff 2x-1=e^{0}=1\iff x=1\); so \(\mathcal{S}=\{1\}\).
3. Put \(X=\ln x\): \(X^2-X-2=0\Rightarrow (X-2)(X+1)=0\Rightarrow X=2\) or \(X=-1\). Return: \(x=e^{2}\) or \(x=e^{-1}\); so \(\mathcal{S}=\{e^{-1},e^{2}\}\).
4. Slope \(\dfrac{1}{x_0}=\dfrac12\); point \((2,\ln 2)\). Tangent: \(y=\ln 2+\tfrac12(x-2)=\tfrac{x}{2}+\ln 2-1\).
5. \(\ln x\ge 1\iff x\ge e^{1}=e\), so \([e,+\infty[\). For the second: with \(X=\ln x\), \((X-1)(X+2)>0\iff X<-2\) or \(X>1\iff x<e^{-2}\) or \(x>e\); with \(x>0\): \(\mathcal{S}=\,]0,e^{-2}[\,\cup\,]e,+\infty[\).

#### Lesson summary
- **Most important definition:** \(e^m\) is the unique solution of \(\ln x=m\); \(e\) is the solution of \(\ln x=1\), \(e\approx 2.718\).
- **Most important formula:** \(\ln x=m\iff x=e^{m}\); limits \(\ln x\to-\infty\ (0^+)\), \(\ln x\to+\infty\ (+\infty)\).
- **Most important condition:** the bijection needs strict increase + continuity; the solution must lie in \(]0,+\infty[\).
- **Most important pattern:** substitute \(z=\ln x\) for polynomials in \(\ln x\); invert with \(e^{z}\).
- **Most common mistake:** confusing \(e^{m}\) (the solution) with "\(\ln m\)".
- **Quick self-check:** solve \(\ln x=-1\). *(Answer: \(x=e^{-1}=1/e\).)*

---

<a id="b1u5-l4"></a>
### Lesson 4: Derivative of \(\ln u\) and important limits

#### Core idea

This lesson is the engine room for every function study involving logarithms. Two tools live here. First, the **chain rule for \(\ln\)**: if \(u\) is differentiable and strictly positive, then \(\big(\ln u\big)'=\dfrac{u'}{u}\). This lets you differentiate any logarithm of a formula without expanding it. Second, three **important limits** that resolve the indeterminate forms produced by mixing \(\ln\) with powers:
\[
\lim_{x\to+\infty}\frac{\ln x}{x}=0,\qquad \lim_{x\to 0^+}x\ln x=0,\qquad \lim_{x\to 0}\frac{\ln(1+x)}{x}=1.
\]
The first two encode the same message — **\(\ln\) grows slower than any power of \(x\)** — so in a race between \(\ln x\) and \(x\), the power always wins. The third is simply the derivative of \(\ln\) at \(1\), read as a limit.

**How does a student recognise this lesson?** When a derivative of \(\ln(\text{formula})\) is requested; when a limit gives \(\dfrac{\infty}{\infty}\), \(0\times\infty\), or \(\dfrac00\) with a logarithm inside; or during a full function study where you must differentiate, tabulate, and find asymptotes. The confusing part is knowing **which** of the three limits to summon and how to reshape the expression (factor out \(x^n\), or substitute \(u=1/x\)) so the limit applies.

#### Prerequisite knowledge
- The composite-derivative theorem: \((f\circ u)'=(f'\circ u)\cdot u'\).
- The squeeze (sandwich) theorem.
- Lesson 3: \(\ln x<2\sqrt x\) (used to prove \(\dfrac{\ln x}{x}\to0\)).
- Factoring the dominant term out of a sum to lift indeterminacy.

#### Definitions

No new definition; we combine the composite-derivative rule with \(\ln'(x)=1/x\), and we establish three limits. Keep the strict-positivity condition \(u>0\) in view.

> Source: Mathematics Textbook 1, pages 147–154.

#### Formulas and properties

**Derivative of \(\ln u\).** If \(u\) is differentiable and strictly positive on an interval \(I\), then \(x\mapsto\ln(u(x))\) is differentiable on \(I\) and
\[
\big(\ln u\big)'=\frac{u'}{u}.
\]
More generally, whether \(u>0\) or \(u<0\), \(\big(\ln|u|\big)'=\dfrac{u'}{u}\).

**The three important limits.**
\[
\lim_{x\to+\infty}\frac{\ln x}{x}=0,\qquad \lim_{x\to 0^+}x\ln x=0,\qquad \lim_{x\to 0}\frac{\ln(1+x)}{x}=1.
\]

**Useful reciprocals/relatives** (all deduced from the above):
\[
\lim_{x\to 1}\frac{\ln x}{x-1}=1,\qquad \lim_{x\to+\infty}\frac{x}{\ln x}=+\infty,\qquad \lim_{x\to 0}\frac{x}{\ln(1+x)}=1.
\]

> **Important condition:** the formula \((\ln u)'=u'/u\) requires \(u>0\) on the whole interval (otherwise \(\ln u\) is not even defined). If \(u\) changes sign, split the interval or use \(\ln|u|\).

> **Exam-style insight:** for a limit at \(+\infty\) of \(x^{n}-\lambda\ln x\), **factor out \(x^{n}\)**: \(x^{n}\big(1-\lambda\frac{\ln x}{x^{n}}\big)\); the bracket \(\to1\) and \(x^n\to+\infty\).

#### Theorems and proofs

**Theorem (derivative of \(\ln u\)).** If \(u\) is differentiable and strictly positive on \(I\), then \((\ln u)'=\dfrac{u'}{u}\).

*Proof (the book proves it).* Apply the composite-derivative theorem to \(f=\ln\circ u\): \(f'(x)=\ln'(u(x))\cdot u'(x)=\dfrac{1}{u(x)}\cdot u'(x)=\dfrac{u'(x)}{u(x)}\).

**Theorem (the three limits).**
- **\(\displaystyle\lim_{x\to0}\frac{\ln(1+x)}{x}=1\):** this is the rate of change of \(\ln\) at \(1\): \(\dfrac{\ln(1+x)-\ln 1}{x}\to\ln'(1)=1\).
- **\(\displaystyle\lim_{x\to+\infty}\frac{\ln x}{x}=0\):** for \(x>1\), \(0<\ln x<2\sqrt x\) (Lesson 3), so \(0<\dfrac{\ln x}{x}<\dfrac{2}{\sqrt x}\); as \(\dfrac{2}{\sqrt x}\to0\), the squeeze theorem gives \(0\).
- **\(\displaystyle\lim_{x\to0^+}x\ln x=0\):** substitute \(u=\dfrac1x\); then \(x\ln x=-\dfrac{\ln u}{u}\to0\) using the previous limit as \(u\to+\infty\).

**You must be able to differentiate \(\ln u\)** and **apply** the three limits; the proofs are standard and may be asked.

#### Recognising the idea and the solution method

- **If** you must differentiate \(\ln(\text{formula})\) → write \(\dfrac{(\text{formula})'}{\text{formula}}\) directly.
- **If** a limit at \(+\infty\) mixes a power with \(\ln x\) → factor out the highest power of \(x\).
- **If** a limit at \(0^+\) has the form \(x\times\ln x\) (i.e. \(0\times\infty\)) → recall it is \(0\).
- **If** a limit at \(0\) has \(\dfrac{\ln(1+\square)}{\square}\) → it is \(1\) (possibly after a substitution to create the "\(1+\)").

**Standard algorithm for a limit with \(\ln\):**
1. Identify the indeterminate form.
2. Reshape: factor a dominant term, or substitute \(u=1/x\), or force a \(\dfrac{\ln(1+u)}{u}\) pattern.
3. Replace the standard piece by its known limit.
4. Combine the remaining factors.

#### Basic example

**B1-U5-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** Differentiate on \(]1,+\infty[\): (a) \(f(x)=\ln(x^2-1)\); (b) \(g(x)=\ln\!\Big(\dfrac{x-1}{x+1}\Big)\).

**Why this method applies.** Both are logarithms of strictly positive expressions on \(]1,+\infty[\), so \((\ln u)'=u'/u\) applies directly.

**Step-by-step solution.**
- (a) \(u=x^2-1>0\) on \(]1,+\infty[\), \(u'=2x\); so \(f'(x)=\dfrac{2x}{x^2-1}\).
- (b) Write \(g(x)=\ln(x-1)-\ln(x+1)\) (both arguments \(>0\) on \(]1,+\infty[\)); then
\[
g'(x)=\frac{1}{x-1}-\frac{1}{x+1}=\frac{(x+1)-(x-1)}{(x-1)(x+1)}=\frac{2}{x^2-1}.
\]

**Final answer.** \(f'(x)=\dfrac{2x}{x^2-1}\); \(g'(x)=\dfrac{2}{x^2-1}\).

**Verification.** For (b) directly with \(u=\dfrac{x-1}{x+1}\), \(u'=\dfrac{2}{(x+1)^2}\), so \(\dfrac{u'}{u}=\dfrac{2}{(x+1)^2}\cdot\dfrac{x+1}{x-1}=\dfrac{2}{(x+1)(x-1)}=\dfrac{2}{x^2-1}\) ✔.

**What the student should learn.** Splitting a logarithm of a quotient into a difference before differentiating is often faster than the quotient rule.

> Source: modelled on the derivative exercises of Mathematics Textbook 1, page 149.

#### Textbook-level example

**B1-U5-L4-E02**

**Problem.** Compute the limits: (①) \(f(x)=\dfrac1x+\ln x\) at \(0^+\); (②) \(g(x)=x\ln\!\Big(1+\dfrac1x\Big)\) at \(+\infty\); (③) \(h(x)=\ln(2x+1)-\ln(x+2)\) at \(+\infty\).

**Problem analysis.** Each is an indeterminate form: (①) \(+\infty-\infty\); (②) \(+\infty\times 0\); (③) \(+\infty-\infty\). We reshape each so a known limit applies.

**Step-by-step solution.**
- **①** Put over a common denominator: \(f(x)=\dfrac{1+x\ln x}{x}\). As \(x\to0^+\), \(x\ln x\to0\) so the numerator \(\to1\); the denominator \(\to0^+\). Hence \(\lim_{x\to0^+}f(x)=+\infty\).
- **②** Substitute \(u=\dfrac1x\to0^+\): \(g(x)=\dfrac{\ln(1+u)}{u}\to1\). So \(\lim_{x\to+\infty}g(x)=1\).
- **③** For \(x>0\), \(h(x)=\ln\!\Big(\dfrac{2x+1}{x+2}\Big)\); since \(\dfrac{2x+1}{x+2}\to2\) and \(\ln\) is continuous at \(2\), \(\lim_{x\to+\infty}h(x)=\ln 2\).

**Final answer.** \(\lim_{x\to0^+}f=+\infty\); \(\lim_{x\to+\infty}g=1\); \(\lim_{x\to+\infty}h=\ln 2\).

**Verification.** ② numerically at \(x=1000\): \(1000\ln(1.001)\approx1000(0.0009995)\approx0.9995\approx1\) ✔.

**What the student should learn.** Match the shape of the problem to a standard limit — common denominator for \(\infty-\infty\), the substitution \(u=1/x\) to create \(\dfrac{\ln(1+u)}{u}\), and combine logarithms for \(\ln-\ln\).

> Source: Mathematics Textbook 1, pages 148–149.

#### Harder / composite example

**B1-U5-L4-E03**

**Problem.** Study the function \(f(x)=\dfrac{\ln x}{x}\) on \(]0,+\infty[\): domain, limits at \(0^+\) and \(+\infty\), derivative, variation table, and its maximum.

**Problem analysis.** A quotient of \(\ln x\) by \(x\); we use the quotient-derivative rule and the important limit \(\dfrac{\ln x}{x}\to0\) at \(+\infty\).

**Step-by-step solution.**
- **Domain:** \(x>0\).
- **Limits:** as \(x\to0^+\), \(\ln x\to-\infty\) and \(x\to0^+\), so \(f(x)\to-\infty\). As \(x\to+\infty\), \(f(x)=\dfrac{\ln x}{x}\to0\) (important limit); the \(x\)-axis is a horizontal asymptote.
- **Derivative:** \(f'(x)=\dfrac{\frac1x\cdot x-\ln x\cdot 1}{x^2}=\dfrac{1-\ln x}{x^2}\). The sign of \(f'\) is that of \(1-\ln x\): positive for \(\ln x<1\) (i.e. \(x<e\)), negative for \(x>e\); \(f'(e)=0\).

| \(x\) | \(0\) | | \(e\) | | \(+\infty\) |
|-----|-----|--|-----|--|-----------|
| \(f'(x)\) | | \(+\) | \(0\) | \(-\) | |
| \(f(x)\) | \(-\infty\) | \(\nearrow\) | \(\tfrac1e\) | \(\searrow\) | \(0\) |

- **Maximum:** \(f(e)=\dfrac{\ln e}{e}=\dfrac1e\approx 0.368\), attained at \(x=e\).

**Final answer.** \(f\) increases on \(]0,e]\), decreases on \([e,+\infty[\), with maximum \(\dfrac1e\) at \(x=e\); \(\lim_{0^+}f=-\infty\), \(\lim_{+\infty}f=0\).

**Verification.** \(f(1)=0\) ✔ (since \(\ln 1=0\)); \(f(e^2)=\dfrac{2}{e^2}\approx0.271<\dfrac1e\), consistent with the decrease after \(e\) ✔.

**What the student should learn.** The full-study template: domain → end limits (using the important limit) → derivative and its sign → variation table → extremum. The maximum \(1/e\) at \(x=e\) is a classic result.

> Source: Mathematics Textbook 1, page 157 (problem 12) and page 162 (problem 30), which build on this function.

#### Common mistake

> **Common mistake:** differentiating \(\ln(u)\) as \(\dfrac1u\) and forgetting the factor \(u'\). The chain rule gives \(\dfrac{u'}{u}\), not \(\dfrac1u\). For example \(\big(\ln(x^2+1)\big)'=\dfrac{2x}{x^2+1}\), not \(\dfrac{1}{x^2+1}\).

> **Another common mistake:** declaring \(\dfrac{\ln x}{x}\to+\infty\) at \(+\infty\) because "both \(\ln x\) and \(x\to+\infty\)". In fact the power \(x\) dominates, so the limit is \(0\).

#### Special cases
- **\(u<0\):** \((\ln|u|)'=\dfrac{u'}{u}\) still holds; e.g. \(\big(\ln|x|\big)'=\dfrac1x\) for \(x\neq0\).
- **\(u=x\):** recovers \((\ln x)'=\dfrac1x\), the definition.
- **Power-times-log at \(+\infty\):** factor out the power; \(\lim_{x\to+\infty}(x^2-3\ln x)=+\infty\).
- **Very slow growth restated:** \(\dfrac{x}{\ln x}\to+\infty\), the reciprocal statement.

#### Practice set
1. **(B1-U5-L4-P01)** Differentiate \(f(x)=\ln(1+x^2)\) on \(\mathbb{R}\).
2. **(B1-U5-L4-P02)** Differentiate \(f(x)=x\ln x-x\) on \(]0,+\infty[\).
3. **(B1-U5-L4-P03)** Compute \(\displaystyle\lim_{x\to+\infty}\frac{\ln x}{\sqrt{x}}\).
4. **(B1-U5-L4-P04)** Compute \(\displaystyle\lim_{x\to 0^+}x^{2}\ln x\).
5. **(B1-U5-L4-P05)** *(near exam level)* Compute \(\displaystyle\lim_{x\to+\infty}\big(x-\ln x\big)\) and \(\displaystyle\lim_{x\to 0}\frac{\ln(1+3x)}{x}\).

#### Practice solutions
1. \(u=1+x^2>0\), \(u'=2x\); so \(f'(x)=\dfrac{2x}{1+x^2}\).
2. \(f'(x)=\big(x\ln x\big)'-1=\big(1\cdot\ln x+x\cdot\tfrac1x\big)-1=\ln x+1-1=\ln x\).
3. Write \(\dfrac{\ln x}{\sqrt x}=\dfrac{2\ln\sqrt x}{\sqrt x}=2\cdot\dfrac{\ln t}{t}\) with \(t=\sqrt x\to+\infty\). Since \(\dfrac{\ln t}{t}\to0\), the limit is \(0\).
4. \(x^2\ln x=x\cdot(x\ln x)\); as \(x\to0^+\), \(x\to0\) and \(x\ln x\to0\), so the product \(\to0\).
5. \(x-\ln x=x\Big(1-\dfrac{\ln x}{x}\Big)\); the bracket \(\to1\) and \(x\to+\infty\), so the limit is \(+\infty\). For the second, \(\dfrac{\ln(1+3x)}{x}=3\cdot\dfrac{\ln(1+3x)}{3x}\to3\cdot1=3\).

#### Lesson summary
- **Most important formula:** \((\ln u)'=\dfrac{u'}{u}\) (with \(u>0\)); and \((\ln|u|)'=\dfrac{u'}{u}\).
- **Most important limits:** \(\dfrac{\ln x}{x}\to0\), \(x\ln x\to0\), \(\dfrac{\ln(1+x)}{x}\to1\).
- **Most important condition:** \(u>0\) on the whole interval for \(\ln u\) to exist.
- **Most important pattern:** factor out the dominant power at \(+\infty\); substitute \(u=1/x\) near \(0\) or \(\infty\).
- **Most common mistake:** dropping the factor \(u'\); or thinking \(\dfrac{\ln x}{x}\to+\infty\).
- **Quick self-check:** differentiate \(\ln(3x+1)\) on \(]-\tfrac13,+\infty[\). *(Answer: \(\dfrac{3}{3x+1}\).)*

---

<a id="b1-u5-test"></a>
### Chapter summary & review test — Unit 5

#### Chapter summary
The unit built the **natural logarithm** \(\ln\) from a single idea — the primitive of \(1/x\) on \(]0,+\infty[\) with \(\ln 1=0\) — and unfolded its consequences. From \((\ln x)'=1/x>0\) came strict increase and the sign of \(\ln\); from the functional equation came the algebra (product to sum, quotient to difference, power to multiple, root to half); from the limits \(-\infty\) and \(+\infty\) came the **bijection** \(]0,+\infty[\to\mathbb{R}\), the number \(e\), and the inversion \(\ln x=m\iff x=e^m\). Finally, \((\ln u)'=u'/u\) and the three important limits equip you for full function studies.

#### Essential formulas
\[
(\ln x)'=\frac1x,\quad \ln(ab)=\ln a+\ln b,\quad \ln\frac{a}{b}=\ln a-\ln b,\quad \ln a^n=n\ln a,\quad \ln\sqrt a=\tfrac12\ln a,
\]
\[
\ln x=m\iff x=e^m,\quad (\ln u)'=\frac{u'}{u},\quad \lim_{x\to+\infty}\frac{\ln x}{x}=0,\quad \lim_{x\to0^+}x\ln x=0,\quad \lim_{x\to0}\frac{\ln(1+x)}{x}=1.
\]

#### Essential theorems/results
- \(\ln\) exists and is unique: the primitive of \(1/x\) vanishing at \(1\).
- Product rule (proved by the constant-derivative argument) and its consequences.
- Limits of \(\ln\) at \(0^+\) and \(+\infty\); \(\ln\) is a bijection onto \(\mathbb{R}\).
- \((\ln u)'=u'/u\); the three important limits; \(\ln x<2\sqrt x\) on \(]0,+\infty[\).

#### Main problem patterns
Domain of a \(\ln\)-expression; \(\ln\)-equation via injectivity; \(\ln\)-inequation via monotonicity; substitution \(z=\ln x\); inversion with \(e^m\); derivative \(\ln u\); full function study with \(\ln\); limits of \(\dfrac{\ln x}{x}\), \(x\ln x\), \(\dfrac{\ln(1+x)}{x}\) types.

#### Connections between the chapter's ideas
The definition \((\ln x)'=1/x\) drives the sign, the algebra, and every derivative here; the bijection prepares the **exponential** function (its inverse); the important limits recur in every later function-study and in integration; \(\ln x<2\sqrt x\) (Lesson 3) is the engine of \(\dfrac{\ln x}{x}\to0\) (Lesson 4).

#### Recommended study order
Definition & domain ← algebraic rules ← equations/inequations ← limits & the number \(e\) ← derivative \(\ln u\) ← full function studies.

#### Chapter checklist
- [ ] I set the domain \(x>0\) before every logarithmic step.
- [ ] I convert products/quotients/powers/roots and solve \(\ln\)-(in)equations correctly.
- [ ] I invert with \(e^m\), differentiate \(\ln u\), and use the three important limits.

#### Chapter review test
1. Give the domain of \(f(x)=\ln(x^2-4)\), and solve \(\ln(x^2-4)=\ln 5\).
2. Solve \(\ln(x-1)+\ln(x-2)=\ln 2\).
3. Solve the inequation \((\ln x)^2-2\ln x-3\ge 0\). *(hint: \(X=\ln x\))*
4. Differentiate \(f(x)=\ln\!\Big(\dfrac{2x+1}{x+2}\Big)\) on \(]-\tfrac12,+\infty[\) and simplify.
5. Compute \(\displaystyle\lim_{x\to+\infty}\big(x^{2}-3\ln x\big)\) and \(\displaystyle\lim_{x\to 1}\frac{\ln x}{x-1}\).
6. Full study of \(f(x)=x-\ln x\) on \(]0,+\infty[\): derivative, variation table, minimum; deduce that \(\ln x<x\) for all \(x>0\).
7. Write the tangent to \(y=\ln x\) at \(B(e,1)\) and verify it passes through the origin.

#### Model solutions for the chapter review test
1. **Domain:** \(x^2-4>0\iff x<-2\) or \(x>2\), i.e. \(\mathbb{R}\setminus[-2,2]\). **Equation:** \(\ln(x^2-4)=\ln 5\iff x^2-4=5\iff x^2=9\iff x=\pm3\); both \(\pm3\) lie in the domain, so \(\mathcal{S}=\{-3,3\}\).
2. **Domain:** \(x-1>0\) and \(x-2>0\Rightarrow x>2\). Then \(\ln\big((x-1)(x-2)\big)=\ln 2\Rightarrow (x-1)(x-2)=2\Rightarrow x^2-3x+2=2\Rightarrow x^2-3x=0\Rightarrow x=0\) or \(x=3\). Only \(x=3>2\); so \(\mathcal{S}=\{3\}\).
3. Put \(X=\ln x\) (domain \(x>0\)): \(X^2-2X-3\ge0\iff (X-3)(X+1)\ge0\iff X\le-1\) or \(X\ge3\). Return: \(\ln x\le-1\iff 0<x\le e^{-1}\), or \(\ln x\ge3\iff x\ge e^{3}\). So \(\mathcal{S}=\,]0,e^{-1}]\cup[e^{3},+\infty[\).
4. Write \(f(x)=\ln(2x+1)-\ln(x+2)\) (both \(>0\) on \(]-\tfrac12,+\infty[\)). Then
\[
f'(x)=\frac{2}{2x+1}-\frac{1}{x+2}=\frac{2(x+2)-(2x+1)}{(2x+1)(x+2)}=\frac{3}{(2x+1)(x+2)}.
\]
5. \(x^2-3\ln x=x^2\Big(1-3\dfrac{\ln x}{x^2}\Big)=x^2\Big(1-\dfrac3x\cdot\dfrac{\ln x}{x}\Big)\); the bracket \(\to1\) and \(x^2\to+\infty\), so the limit is \(+\infty\). And \(\dfrac{\ln x}{x-1}=\dfrac{\ln x-\ln 1}{x-1}\to\ln'(1)=1\).
6. \(f'(x)=1-\dfrac1x=\dfrac{x-1}{x}\); sign of \(x-1\): negative on \(]0,1[\), positive on \(]1,+\infty[\), zero at \(1\).

| \(x\) | \(0\) | | \(1\) | | \(+\infty\) |
|-----|-----|--|-----|--|-----------|
| \(f'(x)\) | | \(-\) | \(0\) | \(+\) | |
| \(f(x)\) | | \(\searrow\) | \(1\) | \(\nearrow\) | |

The minimum is \(f(1)=1-\ln 1=1>0\), so \(x-\ln x\ge1>0\) for all \(x>0\), hence \(\boxed{\ln x<x}\) for all \(x>0\).
7. Slope \(\ln'(e)=\dfrac1e\); point \(B(e,1)\). Tangent: \(y=1+\dfrac1e(x-e)=\dfrac{x}{e}\). At \(x=0\), \(y=0\), so it passes through the origin \(O\) ✔.

---

<a id="b1-u6"></a>
## Unit 6: The Exponential Function

> Source: Mathematics Textbook 1, pages 165–198.

### Unit overview

This unit crowns your study of the natural logarithm by introducing its "twin" and opposite: the **exponential function** \(\exp\), the inverse of \(\ln\). Once you grasp that \(\exp\) undoes what \(\ln\) does, every logarithm property flips into a matching exponential property: a product becomes an exponential of a sum, a quotient an exponential of a difference, a power an exponential of a product.

- **The exponential and its properties:** \(\exp\) defined as the inverse of \(\ln\), the notation \(e^x\), the algebraic rules \(e^{a+b}=e^ae^b\) and \(e^{-a}=1/e^a\), and solving exponential equations.
- **Study of the exponential and its limits:** strict monotonicity, the derivative \((e^x)'=e^x\), the limits at \(\pm\infty\), and the important limits that resolve "indeterminate" expressions.
- **Functions \(x\mapsto a^x\):** generalising the exponent to any positive base via \(a^x=e^{x\ln a}\).
- **Simple differential equations:** \(y'=ay\) and \(y'=ay+b\) — your first encounter with an equation whose unknown is a function.

**Why it matters:** the exponential is the cornerstone of modelling growth and decay (populations, radioactivity, capacitor discharge), an indispensable tool in integration (the following unit), and it returns in complex numbers through the exponential form.

**Prerequisites:** properties of \(\ln\) and solving its equations, differentiating composite functions, sign analysis of an expression, and solving quadratic equations and inequalities.

**Main question types:** solve an exponential equation or inequality; differentiate a function containing \(e^{u}\); compute a limit involving \(e^x\); carry out a full study of an exponential function with a variation table and asymptote; solve a differential equation with an initial condition.

### Unit concept map

```text
The exponential exp = inverse of ln
├── Definition: y = e^x  ⟺  x = ln y  (y > 0)
├── Algebraic rules
│   ├── e^{a+b} = e^a · e^b ,  e^{-a} = 1/e^a ,  (e^a)^n = e^{na}
│   └── ln(e^x) = x  ,  e^{ln x} = x  (x > 0)
├── Analytic study
│   ├── strictly increasing ,  e^x > 0 always
│   ├── derivative: (e^x)' = e^x ,  (e^u)' = u' e^u
│   ├── limits: e^x → 0 at -∞ ,  e^x → +∞ at +∞
│   └── important limits: e^x/x → +∞ ,  x e^x → 0 ,  (e^x−1)/x → 1
├── Base a > 0:  a^x = e^{x ln a} ,  (a^x)' = ln a · a^x
└── Differential equations
    ├── y' = ay        →   y = C e^{ax}
    └── y' = ay + b    →   y = C e^{ax} − b/a
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(y=e^{x}\iff x=\ln y\) | \(y\) the value, \(x\) the exponent | \(y>0\) | not applied to \(y\le0\) | \(\exp\) is the inverse of \(\ln\) |
| \(e^{a+b}=e^{a}e^{b}\) | \(a,b\) real | always | not \(e^{a}+e^{b}\) | the fundamental rule |
| \(e^{-a}=\dfrac{1}{e^{a}}\), \(e^{a-b}=\dfrac{e^{a}}{e^{b}}\) | — | always | — | follow from the fundamental rule |
| \((e^{a})^{n}=e^{na}\) | \(n\) an integer | always | do not confuse with \(e^{a^n}\) | — |
| \(\ln(e^{x})=x\), \(e^{\ln x}=x\) | — | the second needs \(x>0\) | \(e^{\ln x}\) undefined for \(x\le0\) | mutual inverses |
| \((e^{u})'=u'\,e^{u}\) | \(u\) differentiable | \(u\) differentiable | — | special case \((e^x)'=e^x\) |
| \(\lim_{x\to+\infty}\dfrac{e^{x}}{x}=+\infty\) | — | near \(+\infty\) | — | exp dominates powers |
| \(\lim_{x\to-\infty}xe^{x}=0\) | — | near \(-\infty\) | — | resolves \(0\cdot\infty\) |
| \(\lim_{x\to0}\dfrac{e^{x}-1}{x}=1\) | — | near \(0\) | — | basis of the derivative |
| \(a^{x}=e^{x\ln a}\) | \(a\) the base | \(a>0\) | negative base forbidden | \((a^x)'=\ln a\,a^x\) |
| \(y'=ay\Rightarrow y=Ce^{ax}\) | \(C\) an arbitrary constant | \(a\neq0\) | — | \(C\) fixed by an initial condition |
| \(y'=ay+b\Rightarrow y=Ce^{ax}-\dfrac{b}{a}\) | \(-b/a\) constant particular solution | \(a\neq0\) | — | \(-b/a\) is the constant solution |

### Unit learning checklist

- [ ] I know \(\exp\) is the inverse of \(\ln\), and I convert \(y=e^x\) into \(x=\ln y\).
- [ ] I apply \(e^{a+b}=e^ae^b\), \(e^{-a}=1/e^a\), and \((e^a)^n=e^{na}\) without confusing them with addition.
- [ ] I solve an exponential equation by the substitution \(t=e^x>0\) or by equating exponents.
- [ ] I differentiate \(e^{u}\) with the rule \((e^u)'=u'e^u\).
- [ ] I memorise the three important limits and use them to resolve indeterminate forms.
- [ ] I carry out a complete study of an exponential function (limits, derivative, table, asymptote, graph).
- [ ] I solve \(y'=ay\) and \(y'=ay+b\) and fix the constant with an initial condition.

---

<a id="b1u6-l1"></a>
### Lesson 1: The exponential function and its properties

#### Core idea

This lesson introduces the **Napierian exponential function** \(\exp\), which is simply the **inverse function** of the natural logarithm \(\ln\). Recall that \(\ln\) takes a positive number and returns its exponent; the exponential does the exact opposite: it takes the exponent and returns the number. So the two statements \(y=e^{x}\) and \(x=\ln y\) (with \(y>0\)) express the same fact from two sides. This inversion is the key to everything: every logarithm rule has a matching exponential rule.

We write \(\exp(x)=e^{x}\), where \(e\approx2.718\) is the number with \(\ln e=1\). A hallmark of the exponential is that it is **always strictly positive** (\(e^{x}>0\) for every \(x\)), and that its domain is all of \(\mathbb{R}\) while its range is \(]0,+\infty[\) — the exact mirror image of \(\ln\).

**How does a student recognise this lesson?** When the symbol \(e^{x}\) or \(\exp\) appears, or the task says "solve the equation/inequality" containing an exponential, or "simplify" an expression mixing \(e\) and \(\ln\). The usual point of confusion is that \(e^{\ln x}=x\) requires \(x>0\), whereas \(\ln(e^{x})=x\) is true for any \(x\).

#### Prerequisite knowledge
- Logarithm properties: \(\ln(ab)=\ln a+\ln b\), \(\ln(1)=0\), \(\ln e=1\).
- The notion of an inverse function, and that the two graphs are symmetric about the line \(y=x\).
- Solving quadratic equations and inequalities (discriminant, factoring).

#### Definitions

**Definition (the exponential function).** The Napierian exponential function, written \(\exp\), is the inverse function of \(\ln\). It is defined on \(\mathbb{R}\) with values in \(]0,+\infty[\), and for every real \(x\) and every \(y>0\):
\[
y=\exp(x)\iff \big(\ln y=x\ \text{and}\ y>0\big).
\]
We write \(\exp(x)=e^{x}\), where \(e\) is the unique number with \(\ln e=1\); hence \(e^{0}=1\) and \(e^{1}=e\).

> Source: Mathematics Textbook 1, page 165.

#### Formulas and properties

**Inverse identities (the heart of the lesson):**
\[
\ln(e^{x})=x\quad(\forall x\in\mathbb{R}),\qquad e^{\ln x}=x\quad(x>0).
\]

> **Important condition:** \(e^{\ln x}=x\) holds only for \(x>0\) (since \(\ln x\) is otherwise undefined); whereas \(\ln(e^{x})=x\) holds for any real \(x\), because \(e^{x}>0\) always.

**Algebraic rules.** For all reals \(a,b\) and every integer \(n\):
\[
e^{a+b}=e^{a}\,e^{b},\qquad e^{-a}=\frac{1}{e^{a}},\qquad e^{a-b}=\frac{e^{a}}{e^{b}},\qquad (e^{a})^{n}=e^{na}.
\]

> **Common mistake:** writing \(e^{a}+e^{b}=e^{a+b}\). This is **wrong**; the rule concerns the product, not the sum: \(e^{a}\cdot e^{b}=e^{a+b}\).

**Comparing numbers (Corollary 1).** Since \(\exp\) is strictly increasing, it preserves equality and order:
\[
a=b\iff e^{a}=e^{b},\qquad a<b\iff e^{a}<e^{b},\qquad a\le b\iff e^{a}\le e^{b}.
\]
These equivalences are the tool for solving exponential equations and inequalities.

#### Theorems and proofs

**Theorem (strict monotonicity).** The function \(\exp\) is strictly increasing on \(\mathbb{R}\).

**Proof (as in the book).** \(\exp\) is the inverse of \(\ln\), and the inverse of a strictly increasing function is strictly increasing. Directly: if \(u<v\), then applying the increasing map \(\ln\) to the positive sides \(e^u,e^v\) gives, conversely, \(e^u<e^v\); for if \(e^u\ge e^v\), then \(\ln\) would give \(u\ge v\), a contradiction. Hence \(a<b\iff e^a<e^b\). ∎

The student needs only to **apply** this result when solving equations, while knowing the idea of the proof.

#### Recognising the idea and the solution method
- **An equation or inequality of the form** \(e^{u(x)}=e^{v(x)}\) → set \(u(x)=v(x)\) directly (Corollary 1).
- **An equation with \(e^x\) and a constant on the other side** → write that side as an exponential: \(k=e^{\ln k}\) (for \(k>0\)).
- **A polynomial equation in \(e^x\)** (such as \(e^{2x}-5e^x+4=0\)) → substitute \(t=e^x\) with the condition \(t>0\), solve in \(t\), then \(x=\ln t\).

**Standard algorithm for solving an exponential equation:**
1. If possible, gather everything into the form \(e^{(\ldots)}=e^{(\ldots)}\) and equate the exponents.
2. Otherwise substitute \(t=e^{x}>0\) and turn the equation into one in \(t\).
3. Solve the equation in \(t\), and discard any root \(\le0\) (since \(t=e^x>0\)).
4. Return to \(x\) via \(x=\ln t\), and write the solution set \(S\).

#### Basic example

**B1-U6-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Solve in \(\mathbb{R}\) the equation \(\;e^{x^{2}+x}=e^{2}\).

**Why this method applies.** Both sides are exponentials with the same base, so we equate the exponents directly, since \(\exp\) is one-to-one (Corollary 1).

**Step-by-step solution.**
\[
e^{x^{2}+x}=e^{2}\iff x^{2}+x=2\iff x^{2}+x-2=0.
\]
Discriminant \(\Delta=1^{2}-4(1)(-2)=1+8=9>0\), and the two roots:
\[
x=\frac{-1-\sqrt{9}}{2}=\frac{-1-3}{2}=-2,\qquad x=\frac{-1+\sqrt{9}}{2}=\frac{-1+3}{2}=1.
\]

**Final answer.** \(S=\{-2,\ 1\}\).

**Verification.** At \(x=1\): \(x^2+x=2\), so the left side is \(e^2\) ✔. At \(x=-2\): \(x^2+x=4-2=2\), so it is \(e^2\) ✔.

**What the student should learn.** When the bases are equal, an exponential equation reduces to an ordinary equation between the exponents; no logarithm is needed here.

> Source: an example in the style of page 167.

#### Textbook-level example

**B1-U6-L1-E02**

**Problem.** Simplify the following numbers: \(A=e^{\ln 2}+e^{\ln 3}\), \(B=e^{2+\ln 8}\), and \(C=\ln\!\big(e^{-3}\big)+e^{\ln 5}\).

**Problem analysis.** Each is a direct application of the inverse identities \(e^{\ln x}=x\ (x>0)\) and \(\ln(e^x)=x\), and of the rule \(e^{a+b}=e^ae^b\).

**Step-by-step solution.**
\[
A=e^{\ln 2}+e^{\ln 3}=2+3=5.
\]
\[
B=e^{2+\ln 8}=e^{2}\cdot e^{\ln 8}=e^{2}\times 8=8e^{2}.
\]
\[
C=\ln\!\big(e^{-3}\big)+e^{\ln 5}=(-3)+5=2.
\]

**Final answer.** \(A=5\), \(B=8e^{2}\), \(C=2\).

**Verification.** \(\ln 2\approx0.693\Rightarrow e^{0.693}\approx2\) ✔; and \(e^{\ln 8}=8\) by definition ✔.

**What the student should learn.** Split the exponent into a product via \(e^{a+b}=e^ae^b\), then remove \(\ln\) by the inverse identity; this is the whole toolkit for simplifying any expression mixing \(e\) and \(\ln\).

> Source: Mathematics Textbook 1, page 169.

#### Harder / composite example

**B1-U6-L1-E03**

**Problem.** Solve in \(\mathbb{R}\) the equation \(\;e^{2x}-5e^{x}+4=0\).

**Problem analysis.** It is not of the form \(e^{\cdots}=e^{\cdots}\), but it is a **polynomial in \(e^x\)**, since \(e^{2x}=(e^x)^2\). The substitution \(t=e^x\) turns it into a quadratic.

**Step-by-step solution.** Put \(t=e^{x}\) with the condition \(t>0\). Since \(e^{2x}=(e^{x})^{2}=t^{2}\):
\[
t^{2}-5t+4=0\iff (t-1)(t-4)=0\iff t=1\ \text{or}\ t=4.
\]
Both roots are positive, so we keep them. Return to \(x\):
\[
t=1\Rightarrow e^{x}=1\Rightarrow x=\ln 1=0,\qquad t=4\Rightarrow e^{x}=4\Rightarrow x=\ln 4.
\]

**Final answer.** \(S=\{0,\ \ln 4\}\).

**Verification.** At \(x=0\): \(e^{0}-5e^{0}+4=1-5+4=0\) ✔. At \(x=\ln4\): \(e^{2\ln4}-5e^{\ln4}+4=16-20+4=0\) ✔.

> **Warning:** do not forget to discard any root \(t\le0\) after the substitution, since \(e^x\) can never equal a non-positive number. If one root had been \(-3\), say, it would be rejected.

**What the student should learn.** The substitution \(t=e^x>0\) is the standard tool for any equation containing \(e^{2x}\) and \(e^x\); solve in \(t\), discard non-positive roots, then return with \(x=\ln t\).

> Source: Mathematics Textbook 1, page 172 (practice exercise).

#### Common mistake

> **Common mistake:** after substituting \(t=e^x\) and solving in \(t\), the student writes the solution as \(x=t\) directly, or forgets that \(t\) must be positive. **Correct approach:** \(x=\ln t\), and a root is accepted only if \(t>0\).

#### Special cases
- **The equation \(e^{u(x)}=1\):** equivalent to \(u(x)=0\), since \(e^{x}=1\iff x=0\).
- **An inequality of the form** \(e^{u}<e^{v}\): equivalent to \(u<v\) with no sign reversal (because \(\exp\) is increasing).
- **An expression with \(e^{|\ln x|}\):** for \(x>0\) it equals \(\max\!\big(x,\tfrac1x\big)\) (it is \(x\) if \(x\ge1\), and \(\tfrac1x\) if \(0<x<1\)).

#### Practice set
1. **(B1-U6-L1-P01)** Simplify: \(A=e^{\ln 7}\), \(B=\ln\!\big(e^{5}\big)\), \(C=e^{-\ln 2}\).
2. **(B1-U6-L1-P02)** Solve the equation \(e^{3-x}=1\).
3. **(B1-U6-L1-P03)** Solve the inequality \(e^{x^{2}-2}\le e^{4-x}\).
4. **(B1-U6-L1-P04)** Solve the equation \(e^{2x}-e^{x}-6=0\).
5. **(B1-U6-L1-P05)** *(near exam level)* Solve the inequality \((e^{x}-1)(e^{x}-4)<0\), then deduce the solution of \(e^{2x}-5e^{x}+4<0\).

#### Practice solutions
1. \(A=e^{\ln 7}=7\) (since \(7>0\)); \(B=\ln(e^{5})=5\); \(C=e^{-\ln 2}=e^{\ln(1/2)}=\dfrac{1}{2}\).
2. \(e^{3-x}=1=e^{0}\iff 3-x=0\iff x=3\). Hence \(S=\{3\}\).
3. \(e^{x^{2}-2}\le e^{4-x}\iff x^{2}-2\le 4-x\iff x^{2}+x-6\le0\iff(x+3)(x-2)\le0\iff -3\le x\le2\). Hence \(S=[-3,\,2]\).
4. Put \(t=e^{x}>0\): \(t^{2}-t-6=0\iff(t-3)(t+2)=0\iff t=3\) or \(t=-2\). Reject \(t=-2<0\), leaving \(t=3\Rightarrow x=\ln 3\). Hence \(S=\{\ln 3\}\).
5. Put \(t=e^{x}>0\): \((t-1)(t-4)<0\iff 1<t<4\), i.e. \(1<e^{x}<4\iff 0<x<\ln 4\). Since \(e^{2x}-5e^{x}+4=(e^x-1)(e^x-4)\), the solution is the same: \(S=\,]0,\ \ln 4[\).

#### Lesson summary
- **Most important definition:** \(\exp\) is the inverse of \(\ln\); \(y=e^x\iff x=\ln y\) for \(y>0\).
- **Most important formulas:** \(e^{a+b}=e^ae^b\), \(e^{-a}=1/e^a\), \((e^a)^n=e^{na}\), and the inverses \(\ln(e^x)=x\), \(e^{\ln x}=x\).
- **Most important condition:** \(e^{\ln x}=x\) needs \(x>0\); and the substitution \(t=e^x\) needs \(t>0\).
- **Most important pattern:** a polynomial in \(e^x\) → substitute \(t=e^x>0\).
- **Most common mistake:** \(e^a+e^b=e^{a+b}\) (wrong), or forgetting the condition \(t>0\).
- **Quick self-check:** what is the solution of \(e^{x}=5\)? *(Answer: \(x=\ln 5\).)*

---

<a id="b1u6-l2"></a>
### Lesson 2: Study of the exponential and its important limits

#### Core idea

Having met \(\exp\) algebraically, we now study it **analytically**: its limits at the ends of its domain, its derivative, its variation table and graph. The striking result is that \(\exp\) **equals its own derivative** (\((e^x)'=e^x\)), a unique property that makes it central to everything about growth and decay.

The practically most important part is the **important limits**: \(\dfrac{e^x}{x}\to+\infty\), \(xe^x\to0\), and \(\dfrac{e^x-1}{x}\to1\). These three resolve "indeterminate" expressions of the form \(\infty-\infty\), \(0\cdot\infty\), or \(\frac00\), and they are exactly what is asked in the study of any exponential function. Their unifying idea: **the exponential beats any power of \(x\)** at \(+\infty\).

**How does a student recognise this lesson?** When asked to "compute the limit" or "study the function" \(f\) containing \(e^x\), or when an indeterminate form such as \(e^x-x^2\) appears at \(+\infty\). The confusing part is deciding which factor to pull out to break the indeterminacy (usually \(e^x\)).

#### Prerequisite knowledge
- Computing limits and resolving indeterminacy by factoring out a common term.
- The chain rule for composite functions.
- Sign analysis of an expression to determine monotonicity.
- The notion of a horizontal and an oblique asymptote.

#### Definitions

**Reminder (the preliminary important limit).** The most important limit of this lesson is
\[
\lim_{x\to0}\frac{e^{x}-1}{x}=1,
\]
from which the exponential is differentiated. It reads: near zero, \(e^x-1\) behaves like \(x\) itself.

> Source: Mathematics Textbook 1, page 173.

#### Formulas and properties

**Limits at \(\pm\infty\):**
\[
\lim_{x\to+\infty}e^{x}=+\infty,\qquad \lim_{x\to-\infty}e^{x}=0.
\]
At \(-\infty\) the graph approaches the \(x\)-axis, so the line \(y=0\) is a horizontal asymptote of the exponential at \(-\infty\).

**The derivative:**
\[
(e^{x})'=e^{x},\qquad \big(e^{u(x)}\big)'=u'(x)\,e^{u(x)}.
\]
Since \(e^{u}>0\) always, **the sign of the derivative of \(e^{u}\) is the sign of \(u'\)**; this observation saves a lot of work in variation tables.

**The three important limits:**
\[
\lim_{x\to+\infty}\frac{e^{x}}{x}=+\infty,\qquad \lim_{x\to-\infty}xe^{x}=0,\qquad \lim_{x\to0}\frac{e^{x}-1}{x}=1.
\]

> **Exam-style insight:** for an indeterminate expression containing \(e^x\) at \(+\infty\) (such as \(e^x-x^2\)), factor out \(e^x\): \(e^x\big(1-x^2e^{-x}\big)\), then use \(x^n e^{-x}\to0\). This always breaks the indeterminacy.

#### Theorems and proofs

**Theorem (derivative of the exponential).** The function \(\exp\) is differentiable on \(\mathbb{R}\) and equals its own derivative: \(\exp'=\exp\).

**Proof (as in the book).** Start from the difference quotient at \(x_0\):
\[
\frac{e^{x_0+h}-e^{x_0}}{h}=\frac{e^{x_0}\big(e^{h}-1\big)}{h}=e^{x_0}\cdot\frac{e^{h}-1}{h}.
\]
Since \(\dfrac{e^{h}-1}{h}\to1\) as \(h\to0\), the limit is \(e^{x_0}\cdot1=e^{x_0}\). Hence \(\exp'(x_0)=e^{x_0}\) for every \(x_0\). ∎

**Theorem (exp dominates powers).** For every natural number \(n\): \(\displaystyle\lim_{x\to+\infty}\dfrac{e^{x}}{x^{n}}=+\infty\), equivalently \(\displaystyle\lim_{x\to+\infty}x^{n}e^{-x}=0\).

**Proof (the book's idea, for \(n=1\)).** Since the graph of \(\exp\) lies above its tangent at \((0,1)\), which is \(y=x+1\), we have \(e^{x}\ge x+1\) for all \(x\), hence \(e^{t}\ge t\) for \(t\ge0\). Apply this to \(t=\tfrac{x}{2}\):
\[
e^{x}=\Big(e^{x/2}\Big)^{2}\ge\Big(\tfrac{x}{2}\Big)^{2}=\frac{x^{2}}{4}\ \Rightarrow\ \frac{e^{x}}{x}\ge\frac{x}{4}\xrightarrow[x\to+\infty]{}+\infty.
\]
By comparison \(\dfrac{e^x}{x}\to+\infty\). Then the substitution \(x\mapsto-x\) gives \(\lim_{x\to-\infty}xe^{x}=0\). ∎

The student needs only to **memorise and apply** the result; recalling the proof idea helps in theory questions.

#### Recognising the idea and the solution method
- **A limit containing \(e^x\) at \(+\infty\) with an indeterminate form** → factor out \(e^x\) and use \(x^n e^{-x}\to0\).
- **A limit of the form \(\frac00\) containing \(e^x-1\)** → reduce it to \(\dfrac{e^x-1}{x}\to1\).
- **Studying a function \(e^{u}\)** → the sign of \(f'\) is the sign of \(u'\); build the variation table on this.

**Standard algorithm for studying an exponential function:**
1. Determine the domain.
2. Compute the limits at the ends of the domain (breaking indeterminacy by factoring out \(e^x\)).
3. Compute \(f'\) with \((e^u)'=u'e^u\) and study its sign (= sign of \(u'\)).
4. Build the variation table, locate the maxima/minima and asymptotes.
5. Sketch the graph using the table and tangents.

#### Basic example

**B1-U6-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Compute \(\displaystyle\lim_{x\to+\infty}\big(x-e^{x}\big)\).

**Why this method applies.** At \(+\infty\), \(x\to+\infty\) and \(e^x\to+\infty\), so the expression is the indeterminate form \(\infty-\infty\); we break it by factoring out \(e^x\).

**Step-by-step solution.**
\[
x-e^{x}=e^{x}\!\left(\frac{x}{e^{x}}-1\right).
\]
Since \(\dfrac{x}{e^{x}}=\dfrac{1}{\,e^{x}/x\,}\to0\) (exp dominates), the bracket tends to \(0-1=-1\); and \(e^{x}\to+\infty\). So the product:
\[
\lim_{x\to+\infty}\big(x-e^{x}\big)=(+\infty)\times(-1)=-\infty.
\]

**Final answer.** \(\displaystyle\lim_{x\to+\infty}\big(x-e^{x}\big)=-\infty\).

**Verification.** Numerically at \(x=10\): \(x-e^x=10-e^{10}\approx10-22026=-22016\), a large negative number ✔.

**What the student should learn.** "The exponential wins": when \(e^x\) competes with any power of \(x\) at \(+\infty\), \(e^x\) imposes its sign and its limit.

> Source: an example in the style of pages 177–178.

#### Textbook-level example

**B1-U6-L2-E02**

**Problem.** Compute the limits of \(g(x)=\dfrac{2e^{x}+1}{1+e^{x}}\) at the ends of its domain.

**Problem analysis.** \(g\) is defined on \(\mathbb{R}\) since \(1+e^{x}>0\) always. We use \(e^x\to0\) at \(-\infty\), and divide by \(e^x\) at \(+\infty\).

**Step-by-step solution.**
At \(-\infty\): \(e^{x}\to0\), so \(g(x)\to\dfrac{2(0)+1}{1+0}=1\). The line \(y=1\) is a horizontal asymptote at \(-\infty\).

At \(+\infty\): divide numerator and denominator by \(e^{x}\):
\[
g(x)=\frac{2+e^{-x}}{e^{-x}+1}\xrightarrow[x\to+\infty]{}\frac{2+0}{0+1}=2.
\]
The line \(y=2\) is a horizontal asymptote at \(+\infty\).

**Final answer.** \(\lim_{x\to-\infty}g=1\) and \(\lim_{x\to+\infty}g=2\); horizontal asymptotes \(y=1\) and \(y=2\).

**Verification.** At \(x=0\): \(g(0)=\dfrac{2+1}{1+1}=\dfrac32\), which lies between \(1\) and \(2\) as expected ✔.

**What the student should learn.** In a ratio containing \(e^x\) in numerator and denominator, divide by the highest power of \(e^x\) at \(+\infty\), and use \(e^x\to0\) at \(-\infty\).

> Source: Mathematics Textbook 1, pages 178–179.

#### Harder / composite example

**B1-U6-L2-E03**

**Problem.** Study the function \(f(x)=e^{x}-x-2\) on \(\mathbb{R}\) completely (limits, derivative, variation table, asymptotes), and sketch its graph \(\mathcal{C}\).

**Problem analysis.** A function combining \(e^x\) with a linear term; we expect an oblique asymptote at \(-\infty\) (where \(e^x\to0\)) and a run to \(+\infty\) at \(+\infty\).

**Step-by-step solution.**
1. **Domain:** \(\mathbb{R}\).
2. **Limits.** At \(-\infty\): \(e^{x}\to0\), so \(f(x)=e^{x}-x-2\to0-(-\infty)-2=+\infty\). More precisely, \(f(x)-(-x-2)=e^{x}\to0\), so the line \(y=-x-2\) is an **oblique asymptote** at \(-\infty\).
   At \(+\infty\): factor out \(e^x\): \(f(x)=e^{x}\big(1-(x+2)e^{-x}\big)\); since \((x+2)e^{-x}\to0\), the bracket \(\to1\) and \(e^x\to+\infty\), so \(f(x)\to+\infty\).
3. **Derivative.** \(f'(x)=e^{x}-1\). Its sign: \(f'(x)=0\iff e^{x}=1\iff x=0\); and \(f'(x)<0\) for \(x<0\), \(f'(x)>0\) for \(x>0\).
4. **Minimum.** \(f(0)=e^{0}-0-2=1-2=-1\).

**Variation table:**

| \(x\) | \(-\infty\) \(\qquad\) \(0\) \(\qquad\) \(+\infty\) |
|---|---|
| \(f'(x)=e^{x}-1\) | \(-\quad 0\quad +\) |
| \(f(x)\) | \(+\infty\ \searrow\ -1\ \nearrow\ +\infty\) |

**Final answer.** \(f\) is strictly decreasing on \(]-\infty,0]\) and strictly increasing on \([0,+\infty[\), with an absolute minimum \(f(0)=-1\); an oblique asymptote \(y=-x-2\) at \(-\infty\), and a horizontal tangent \(y=-1\) at the point \((0,-1)\).

**Verification.** \(f(0)=-1\) is the minimum; check that \(f(1)=e-3\approx-0.28>-1\) and \(f(-1)=e^{-1}+1-2=e^{-1}-1\approx-0.63>-1\) ✔, so \(-1\) is indeed the lowest value.

> **Warning:** the oblique asymptote here appears only at \(-\infty\), because the \(e^x\) term vanishes there, leaving the linear part \(-x-2\). At \(+\infty\) there is no straight asymptote, since \(e^x\) dominates.

**What the student should learn.** If \(f(x)=e^{x}+(\text{linear function})\), look for an oblique asymptote at \(-\infty\) by computing \(f(x)-(\text{linear})=e^x\to0\).

> Source: Mathematics Textbook 1, page 179.

#### Harder / composite example (second)

**B1-U6-L2-E04**

**Problem.** Study the function \(f(x)=\exp\!\left(\dfrac{x}{x^{2}+1}\right)\) on \(\mathbb{R}\): limits, derivative, variation table, and extreme values.

**Problem analysis.** \(f=e^{u}\) with \(u(x)=\dfrac{x}{x^{2}+1}\). Since the sign of \(f'\) is the sign of \(u'\), it suffices to study \(u'\).

**Step-by-step solution.**
1. **Domain:** \(x^{2}+1\neq0\) always, so \(f\) is defined on \(\mathbb{R}\).
2. **Limits.** At \(\pm\infty\): \(u(x)=\dfrac{x}{x^{2}+1}\to0\), so \(f(x)\to e^{0}=1\). The line \(y=1\) is a horizontal asymptote on both sides.
3. **Derivative.** By the quotient rule:
\[
u'(x)=\frac{(x^{2}+1)-x(2x)}{(x^{2}+1)^{2}}=\frac{1-x^{2}}{(x^{2}+1)^{2}}.
\]
Hence \(f'(x)=u'(x)\,e^{u(x)}=\dfrac{1-x^{2}}{(x^{2}+1)^{2}}\,e^{\frac{x}{x^{2}+1}}\). Since \(e^{u}>0\) and \((x^2+1)^2>0\), the sign of \(f'\) is the sign of \(1-x^{2}=(1-x)(1+x)\): positive on \(]-1,1[\), negative outside.
4. **Extreme values.** \(f'(-1)=0\) gives a minimum \(f(-1)=e^{-1/2}=\dfrac{1}{\sqrt e}\); \(f'(1)=0\) gives a maximum \(f(1)=e^{1/2}=\sqrt e\).

**Variation table:**

| \(x\) | \(-\infty\)\(\ \)\(-1\)\(\ \)\(1\)\(\ \)\(+\infty\) |
|---|---|
| \(f'(x)\) | \(-\ \ 0\ +\ 0\ -\) |
| \(f(x)\) | \(1\ \searrow\ \frac{1}{\sqrt e}\ \nearrow\ \sqrt e\ \searrow\ 1\) |

**Final answer.** \(f\) is decreasing on \(]-\infty,-1]\), increasing on \([-1,1]\), decreasing on \([1,+\infty[\); absolute minimum \(\tfrac{1}{\sqrt e}\approx0.61\) at \(x=-1\), absolute maximum \(\sqrt e\approx1.65\) at \(x=1\); horizontal asymptote \(y=1\).

**Verification.** \(u(1)=\dfrac{1}{2}\Rightarrow f(1)=e^{1/2}\) ✔; and \(u(-1)=\dfrac{-1}{2}\Rightarrow f(-1)=e^{-1/2}\) ✔. The two values lie on either side of \(y=1\) as expected.

**What the student should learn.** To study \(e^{u}\), do not differentiate the exponential directly; study \(u'\) only, since the sign of \(f'\) is the sign of \(u'\), and the extreme values occur at the zeros of \(u'\).

> Source: Mathematics Textbook 1, pages 175–176.

#### Common mistake

> **Common mistake:** when computing \(\lim_{x\to+\infty}(e^{x}-x^{2})\), the student writes "\(\infty-\infty=0\)". This is **incorrect**; the expression is indeterminate. The correct approach is to factor out \(e^x\): \(e^{x}(1-x^{2}e^{-x})\to+\infty\) because \(x^{2}e^{-x}\to0\).

#### Special cases
- **\(\lim_{x\to0}\dfrac{e^{ax}-1}{x}=a\):** a generalisation of the preliminary limit (multiply and divide by \(a\)).
- **The function \(x\mapsto e^{-x^2}\):** even, with axis of symmetry the \(y\)-axis, and limit \(0\) at \(\pm\infty\).
- **\(\lim_{u\to+\infty}\big(1+\tfrac1u\big)^{u}=e\):** an important result, proved by writing the expression as \(e^{u\ln(1+1/u)}\).

#### Practice set
1. **(B1-U6-L2-P01)** Compute \(\lim_{x\to0}\dfrac{e^{x}-1}{x}\) and \(\lim_{x\to0}\dfrac{e^{3x}-1}{x}\).
2. **(B1-U6-L2-P02)** Compute \(\lim_{x\to-\infty}\big(xe^{x}\big)\) and \(\lim_{x\to+\infty}\dfrac{e^{x}}{x^{2}}\).
3. **(B1-U6-L2-P03)** Find the derivative of \(f(x)=e^{x^{2}-x}\) and \(g(x)=e^{3x^{3}-2x^{2}+7}\).
4. **(B1-U6-L2-P04)** Compute \(\lim_{x\to+\infty}\big(e^{2x}-e^{x}\big)\) by factoring out a suitable term.
5. **(B1-U6-L2-P05)** *(near exam level)* Study the function \(f(x)=(3-x)e^{x}\) on \(\mathbb{R}\): limits at \(\pm\infty\), derivative, variation table, and the maximum value.

#### Practice solutions
1. The first \(=1\) by definition. The second: \(\dfrac{e^{3x}-1}{x}=3\cdot\dfrac{e^{3x}-1}{3x}\to3\cdot1=3\).
2. \(\lim_{x\to-\infty}xe^{x}=0\) (Corollary 8). And \(\dfrac{e^{x}}{x^{2}}\to+\infty\) (exp dominates, \(n=2\)).
3. \(f'(x)=(2x-1)e^{x^{2}-x}\). And \(g'(x)=(9x^{2}-4x)e^{3x^{3}-2x^{2}+7}\) (since \(u'=9x^2-4x\)).
4. \(e^{2x}-e^{x}=e^{x}\big(e^{x}-1\big)\); at \(+\infty\): \(e^x\to+\infty\) and \(e^x-1\to+\infty\), so the limit is \(+\infty\).
5. **Domain** \(\mathbb{R}\). **Limits:** at \(-\infty\): \(f=(3-x)e^x\); as \(x\to-\infty\), \((3-x)\to+\infty\) and \(e^x\to0\), an \(\infty\cdot0\) form; write \(f(x)=3e^{x}-xe^{x}\to0-0=0\) (since \(xe^x\to0\)). At \(+\infty\): \((3-x)\to-\infty\) and \(e^x\to+\infty\), so the product \(\to-\infty\). **Derivative:** \(f'(x)=(-1)e^{x}+(3-x)e^{x}=(2-x)e^{x}\); its sign is the sign of \((2-x)\): positive for \(x<2\), negative for \(x>2\). **Maximum:** \(f(2)=(3-2)e^{2}=e^{2}\). Table: \(f\nearrow\) on \(]-\infty,2]\) from \(0\) to \(e^2\), then \(\searrow\) on \([2,+\infty[\) to \(-\infty\).

#### Lesson summary
- **Most important result:** \((e^x)'=e^x\), \((e^u)'=u'e^u\), and the sign of the derivative of \(e^u\) is the sign of \(u'\).
- **Most important limits:** \(e^x\to0\) at \(-\infty\), \(e^x\to+\infty\) at \(+\infty\), \(\dfrac{e^x}{x}\to+\infty\), \(xe^x\to0\), \(\dfrac{e^x-1}{x}\to1\).
- **Most important condition:** to break \(\infty-\infty\), factor out \(e^x\).
- **Most important pattern:** a complete study of an exponential function via the sign of \(u'\).
- **Most common mistake:** writing \(\infty-\infty=0\).
- **Quick self-check:** what is \(\lim_{x\to+\infty}xe^{-x}\)? *(Answer: \(0\).)*

---

<a id="b1u6-l3"></a>
### Lesson 3: Functions of the form \(x\mapsto a^{x}\)

#### Core idea

This lesson generalises the idea of an "exponent" from base \(e\) to **any positive base** \(a>0\). The central idea is simple and elegant: we define \(a^{x}\) through the natural exponential itself:
\[
a^{x}=e^{x\ln a}.
\]
With this definition, every property of \(a^x\) becomes a direct consequence of a property of \(\exp\). Most importantly, the **monotonicity** of \(x\mapsto a^x\) is governed by the sign of \(\ln a\): if \(a>1\) then \(\ln a>0\) and the function is increasing; if \(0<a<1\) then \(\ln a<0\) and it is decreasing; if \(a=1\) it is constant equal to \(1\).

**How does a student recognise this lesson?** When an exponent appears with a numerical base other than \(e\) (such as \(2^x\) or \(3^{x^2}\)), or the task asks to differentiate \(a^x\) or to solve an equation with \(2^x,4^x\). The confusing part is that the derivative of \(a^x\) is **not** \(x\,a^{x-1}\) but \(\ln a\cdot a^x\).

#### Prerequisite knowledge
- The definition of the exponential and its rules from Lessons 1–2.
- Logarithm properties, and the sign of \(\ln a\) (positive if \(a>1\), negative if \(0<a<1\)).
- The chain rule for \(e^{u}\).

#### Definitions

**Definition (real powers).** For a strictly positive real \(a\) and any real \(x\), we define:
\[
a^{x}=e^{x\ln a},\qquad\text{equivalently}\qquad \ln\!\big(a^{x}\big)=x\ln a.
\]
Two examples: \(2^{\sqrt2}=e^{\sqrt2\,\ln 2}\approx2.6651\), and \(\pi^{\pi}=e^{\pi\ln\pi}\approx36.4622\).

> Source: Mathematics Textbook 1, page 170.

#### Formulas and properties

**Rules of real powers.** For \(a,b>0\) and reals \(u,v\):
\[
a^{u}a^{v}=a^{u+v},\quad \frac{a^{u}}{a^{v}}=a^{u-v},\quad (a^{u})^{v}=a^{uv},\quad (ab)^{u}=a^{u}b^{u},\quad \left(\frac{a}{b}\right)^{u}=\frac{a^{u}}{b^{u}},\quad 1^{u}=1.
\]

**The derivative:**
\[
(a^{x})'=\ln a\cdot a^{x}.
\]

> **Common mistake:** applying the power rule to \(a^x\), writing \((a^x)'=x\,a^{x-1}\). This is **wrong**; the variable is in the exponent, not the base, and the correct derivative is \((a^x)'=\ln a\cdot a^x\).

> **Important condition:** the definition \(a^{x}=e^{x\ln a}\) requires \(a>0\); raising a negative number to a general real power is meaningless, e.g. \((-2)^{\pi}\).

#### Theorems and proofs

**Theorem (derivative of \(a^x\)).** For \(a>0\), the function \(x\mapsto a^{x}\) is differentiable on \(\mathbb{R}\) with derivative \(\ln a\cdot a^{x}\).

**Proof (as in the book).** Write \(a^{x}=e^{u(x)}\) with \(u(x)=x\ln a\), so \(u'(x)=\ln a\). By the chain rule:
\[
(a^{x})'=u'(x)\,e^{u(x)}=\ln a\cdot e^{x\ln a}=\ln a\cdot a^{x}. \qquad\blacksquare
\]
The sign of the derivative is the sign of \(\ln a\), from which the monotonicity follows. The student is **required to apply** this result, and may be asked for the short proof.

#### Recognising the idea and the solution method
- **Differentiating \(a^x\) or \(a^{v(x)}\)** → write it as \(e^{(\cdots)\ln a}\), then apply \((e^u)'=u'e^u\).
- **An equation with \(a^{2x}\) and \(a^x\)** (such as \(4^x+2^{x+1}-3=0\)) → note \(4^x=(2^x)^2\) and substitute \(t=2^x>0\).
- **Monotonicity of \(a^x\)** → look only at the sign of \(\ln a\).

**Standard algorithm:**
1. Convert every power to the same base (e.g. \(4^x=(2^x)^2\), \(2^{x+1}=2\cdot2^x\)).
2. Substitute \(t=(\text{base})^{x}>0\).
3. Solve the resulting equation in \(t\), and discard \(t\le0\).
4. Return to \(x\) via the appropriate \(\log\), or \(x\ln(\text{base})=\ln t\).

#### Basic example

**B1-U6-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Find the derivative of \(f(x)=3^{x^{2}}\).

**Why this method applies.** The base \(3>0\) and the exponent is a function of \(x\), so we write it as a natural exponential and then differentiate the composite.

**Step-by-step solution.** Write \(f(x)=3^{x^{2}}=e^{x^{2}\ln 3}\), which is \(e^{u}\) with \(u(x)=x^{2}\ln 3\) and \(u'(x)=2x\ln 3\). Hence:
\[
f'(x)=u'(x)\,e^{u(x)}=2x\ln 3\cdot e^{x^{2}\ln 3}=2x\ln 3\cdot 3^{x^{2}}.
\]

**Final answer.** \(f'(x)=2x\,(\ln 3)\,3^{x^{2}}\).

**Verification.** The special case \(u=x\) gives \((3^{x})'=\ln 3\cdot3^{x}\), the familiar rule ✔.

**What the student should learn.** Convert any \(a^{v(x)}\) to \(e^{v(x)\ln a}\) before differentiating; the factor \(\ln a\) always appears in the derivative.

> Source: an example in the style of the exercise on page 185.

#### Textbook-level example

**B1-U6-L3-E02**

**Problem.** Study the function \(f(x)=2^{1-x}\) on \(\mathbb{R}\): limits, derivative and monotonicity, asymptote, and sketch a picture of its graph.

**Problem analysis.** \(f(x)=2^{1-x}=e^{(1-x)\ln 2}\); the base \(2>1\) but the exponent \((1-x)\) is decreasing, so we expect a decreasing function.

**Step-by-step solution.**
1. **Domain:** \(\mathbb{R}\).
2. **Limits.** With \(u(x)=(1-x)\ln 2\): as \(x\to-\infty\), \(u\to+\infty\) so \(f\to+\infty\); as \(x\to+\infty\), \(u\to-\infty\) so \(f\to0\). The line \(y=0\) is a horizontal asymptote at \(+\infty\).
3. **Derivative.** \(f(x)=e^{(1-x)\ln 2}\), with \(u'(x)=-\ln 2\), so \(f'(x)=-\ln 2\cdot 2^{1-x}\). Since \(\ln 2>0\) and \(2^{1-x}>0\), we have \(f'(x)<0\): the function is **strictly decreasing**.
4. **Reference values.** \(f(0)=2^{1}=2\), and \(f(1)=2^{0}=1\).

**Variation table:**

| \(x\) | \(-\infty\) \(\qquad\qquad\) \(+\infty\) |
|---|---|
| \(f'(x)\) | \(-\) |
| \(f(x)\) | \(+\infty\ \searrow\ 0\) |

**Final answer.** \(f\) is strictly decreasing on \(\mathbb{R}\), from \(+\infty\) at \(-\infty\) to \(0^{+}\) at \(+\infty\); horizontal asymptote \(y=0\); the graph passes through \((0,2)\) and \((1,1)\).

**Verification.** \(f(2)=2^{-1}=\tfrac12<1=f(1)\) ✔, consistent with the decrease.

**What the student should learn.** The monotonicity of \(a^{v(x)}\) is governed by the product of the sign of \(\ln a\) and the sign of \(v'\); here \(\ln 2>0\) and \(v'=-1<0\), so the derivative is negative.

> Source: Mathematics Textbook 1, pages 183–184.

#### Common mistake

> **Common mistake:** thinking that \(x\mapsto 2^{1-x}\) is increasing because its base \(2>1\). The base alone is not enough; the exponent \((1-x)\) is decreasing, so the function is decreasing. Always decide by the sign of the exponent's derivative times the sign of \(\ln a\).

#### Special cases
- **\(a=1\):** \(1^{x}=1\) is a constant function with derivative \(0\).
- **Symmetry with the logarithm:** the function \(\log_a\) is the inverse of \(\exp_a\), and their graphs are symmetric about \(y=x\).
- **\(a^{\ln b}=b^{\ln a}\):** true for \(a,b>0\), since both equal \(e^{\ln a\,\ln b}\).

#### Practice set
1. **(B1-U6-L3-P01)** Simplify \(A=e^{\ln 3\cdot x}\) in terms of \(3^{x}\), then compute \(3^{0}\) and \(3^{-1}\).
2. **(B1-U6-L3-P02)** Find the derivative of \(f(x)=5^{x}\) and \(g(x)=\pi^{\ln x}\) (for \(x>0\)).
3. **(B1-U6-L3-P03)** Solve the inequality \(3^{x}>4\) in terms of \(\ln\).
4. **(B1-U6-L3-P04)** Solve the equation \(4^{x}+2^{x+1}-3=0\).
5. **(B1-U6-L3-P05)** *(near exam level)* Solve the equation \(2^{x+1}-10\times 2^{x}+12=0\).

#### Practice solutions
1. \(A=e^{x\ln 3}=3^{x}\); \(3^{0}=1\), \(3^{-1}=\tfrac13\).
2. \(f'(x)=\ln 5\cdot 5^{x}\). And \(g(x)=\pi^{\ln x}=e^{\ln x\cdot\ln\pi}\), so with \(u=\ln x\cdot\ln\pi\) and \(u'=\dfrac{\ln\pi}{x}\): \(g'(x)=\dfrac{\ln\pi}{x}\,\pi^{\ln x}\).
3. \(3^{x}>4\iff e^{x\ln 3}>4\iff x\ln 3>\ln 4\); since \(\ln 3>0\): \(x>\dfrac{\ln 4}{\ln 3}\). Hence \(S=\Big]\dfrac{\ln4}{\ln3},\,+\infty\Big[\).
4. \(4^{x}=(2^{x})^{2}\) and \(2^{x+1}=2\cdot2^{x}\). Put \(t=2^{x}>0\): \(t^{2}+2t-3=0\iff(t+3)(t-1)=0\iff t=-3\) (rejected) or \(t=1\). Hence \(2^{x}=1\Rightarrow x=0\), and \(S=\{0\}\).
5. \(2^{x+1}=2\cdot2^{x}\); put \(t=2^{x}>0\): \(2t-10t+12=0\iff -8t+12=0\iff t=\dfrac{12}{8}=\dfrac32\). Hence \(2^{x}=\dfrac32\Rightarrow x\ln 2=\ln\dfrac32\Rightarrow x=\dfrac{\ln(3/2)}{\ln 2}\). And \(S=\Big\{\dfrac{\ln(3/2)}{\ln2}\Big\}\).

#### Lesson summary
- **Most important definition:** \(a^{x}=e^{x\ln a}\) for \(a>0\).
- **Most important formula:** \((a^{x})'=\ln a\cdot a^{x}\).
- **Most important condition:** the base \(a>0\); no raising of a negative base.
- **Most important pattern:** an equation in \(a^{2x},a^{x}\) → substitute \(t=a^{x}>0\).
- **Most common mistake:** \((a^x)'=x\,a^{x-1}\) (wrong).
- **Quick self-check:** what is the derivative of \(2^{x}\)? *(Answer: \(\ln 2\cdot 2^{x}\).)*

---

<a id="b1u6-l4"></a>
### Lesson 4: Simple differential equations

#### Core idea

This is your first encounter with **an equation whose unknown is a function, not a number**. A differential equation is a relation linking a function \(y=f(x)\) to its derivative \(y'\), and "solving" it means finding all functions that satisfy it. The two types we study are the simplest and most important:
\[
y'=ay\qquad\text{and}\qquad y'=ay+b\quad(a\neq0).
\]
The essential result is that the solution of \(y'=ay\) is always \(y=Ce^{ax}\) (an exponential times a constant); the exponential is the **only** function (up to a multiplicative constant) whose derivative is proportional to its value. This is exactly what makes the exponential the language of growth and decay.

**How does a student recognise this lesson?** When a relation between \(y'\) and \(y\) appears (such as \(y'=3y\) or \(2y'+3y=0\)), or the task says "solve the differential equation" or "find the function whose derivative is…". The confusing part is the sign of the base \(a\) and finding the constant particular solution \(-b/a\) in the second type.

#### Prerequisite knowledge
- Differentiating \(e^{ax}\): \((e^{ax})'=a e^{ax}\).
- Differentiating a product of two functions (for the proof of the solution formula).
- That a function with zero derivative on an interval is constant.

#### Definitions

**Definition (differential equation).** A differential equation of the form \(y'=ay\) (with \(a\neq0\)) is a relation whose unknown is a differentiable function \(y=f(x)\); a **solution** on \(\mathbb{R}\) is any function \(f\) satisfying \(f'(x)=a\,f(x)\) for all \(x\). Likewise \(y'=ay+b\) (with \(a\neq0,\ b\in\mathbb{R}\)) has as unknown a function satisfying \(f'=af+b\).

> Source: Mathematics Textbook 1, page 186.

#### Formulas and properties

**Solving \(y'=ay\).** All solutions of \(y'=ay\) on \(\mathbb{R}\) are:
\[
y=C\,e^{ax},\qquad C\in\mathbb{R}\ \text{an arbitrary constant}.
\]

**Solving \(y'=ay+b\).** All solutions of \(y'=ay+b\) on \(\mathbb{R}\) are:
\[
y=C\,e^{ax}-\frac{b}{a},\qquad C\in\mathbb{R}.
\]
The term \(-\dfrac{b}{a}\) is the **constant particular solution** (found by setting \(y'=0\), i.e. \(0=ay+b\)).

> **Important condition:** we must have \(a\neq0\). If \(a=0\), the equation becomes \(y'=b\) with solution \(y=bx+C\) (a direct integration, not an exponential).

**Initial condition.** There is a **unique solution** satisfying an initial condition \(f(x_0)=y_0\); we fix \(C\) by substituting into the general formula. For \(y'=ay\) specifically: \(f(x)=y_0\,e^{a(x-x_0)}\).

#### Theorems and proofs

**Theorem (solving \(y'=ay\)).** The solutions of \(y'=ay\) (with \(a\neq0\)) on \(\mathbb{R}\) are exactly the functions \(x\mapsto Ce^{ax}\).

**Proof (as in the book).**
- **(Sufficiency)** Each \(g(x)=Ce^{ax}\) is a solution, since \(g'(x)=aCe^{ax}=a\,g(x)\).
- **(Necessity)** Let \(f\) be any solution and set \(\varphi(x)=f(x)e^{-ax}\). Then:
\[
\varphi'(x)=f'(x)e^{-ax}+f(x)(-a)e^{-ax}=e^{-ax}\big(f'(x)-af(x)\big)=e^{-ax}\cdot0=0.
\]
So \(\varphi\) is constant, \(\varphi(x)=C\), hence \(f(x)=Ce^{ax}\). ∎

**Theorem (solving \(y'=ay+b\)).** Its solutions are \(x\mapsto Ce^{ax}-\dfrac{b}{a}\).

**Proof (as in the book).** Let \(g\) be a solution and set \(f=g+\dfrac{b}{a}\). Then:
\[
f'=g'=ag+b=a\Big(f-\tfrac{b}{a}\Big)+b=af.
\]
So \(f\) solves \(y'=ay\), hence \(f=Ce^{ax}\) by the previous theorem, giving \(g=Ce^{ax}-\dfrac{b}{a}\). ∎

The student is **required to apply** both formulas and to find the constant with an initial condition; the proof (especially of \(y'=ay\)) may be asked.

#### Recognising the idea and the solution method
- **An equation of the form \(y'=ay\) or \(\alpha y'+\beta y=0\)** → rearrange to \(y'=ay\) (with \(a=-\beta/\alpha\)) and write \(y=Ce^{ax}\).
- **An equation \(y'=ay+b\) or \(\alpha y'+\beta y=\gamma\)** → the solution is \(y=Ce^{ax}-b/a\) with \(a,b\) identified.
- **A given initial condition** → substitute it into the general formula to find \(C\).

**Standard algorithm:**
1. Rearrange the equation to \(y'=ay\) or \(y'=ay+b\), and identify \(a\) and \(b\).
2. Write the general solution: \(Ce^{ax}\) or \(Ce^{ax}-b/a\).
3. If an initial condition \(f(x_0)=y_0\) is given, substitute it to find \(C\).
4. Write the unique solution explicitly.

#### Basic example

**B1-U6-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** Solve the differential equation \(2y'+3y=0\) on \(\mathbb{R}\).

**Why this method applies.** A homogeneous linear equation; we rearrange to \(y'=ay\) and apply the formula \(Ce^{ax}\).

**Step-by-step solution.**
\[
2y'+3y=0\iff y'=-\frac{3}{2}\,y.
\]
This is \(y'=ay\) with \(a=-\dfrac32\). Hence the general solution:
\[
y=C\,e^{-\frac{3}{2}x},\qquad C\in\mathbb{R}.
\]

**Final answer.** \(y=Ce^{-\frac{3}{2}x}\), \(C\) an arbitrary real constant.

**Verification.** \(y'=-\tfrac32 C e^{-\frac32 x}\), so \(2y'+3y=-3Ce^{-\frac32x}+3Ce^{-\frac32x}=0\) ✔.

**What the student should learn.** Always rearrange to \(y'=ay\) first; the base is \(a=-\dfrac{\beta}{\alpha}\) from \(\alpha y'+\beta y=0\).

> Source: an example in the style of the exercise on page 187.

#### Textbook-level example

**B1-U6-L4-E02**

**Problem.** Find the solution \(f\) of \(y'=2y\) satisfying the initial condition \(f(0)=1\).

**Problem analysis.** A homogeneous equation \(y'=ay\) with \(a=2\); the general solution is \(Ce^{2x}\), and we fix \(C\) with the condition.

**Step-by-step solution.** General solution: \(y=Ce^{2x}\). Impose the condition:
\[
f(0)=Ce^{0}=C=1\ \Rightarrow\ C=1.
\]
Hence \(f(x)=e^{2x}\). (By the direct formula: \(f(x)=y_0 e^{a(x-x_0)}=1\cdot e^{2(x-0)}=e^{2x}\).)

**Final answer.** \(f(x)=e^{2x}\).

**Verification.** \(f'(x)=2e^{2x}=2f(x)\) ✔, and \(f(0)=e^{0}=1\) ✔.

**What the student should learn.** The initial condition fixes the constant \(C\) uniquely, so the problem has exactly one solution instead of a family.

> Source: Mathematics Textbook 1, page 187 (practice exercise).

#### Harder / composite example

**B1-U6-L4-E03**

**Problem.** Solve the differential equation \(y'=2y+1\) on \(\mathbb{R}\), then find the solution whose graph passes through the point \(A(0,\ 2)\).

**Problem analysis.** Of the type \(y'=ay+b\) with \(a=2,\ b=1\). The general solution is \(Ce^{ax}-\dfrac{b}{a}\), then we fix \(C\) with the condition \(f(0)=2\).

**Step-by-step solution.** The constant particular solution: \(-\dfrac{b}{a}=-\dfrac{1}{2}\). So the general solution:
\[
y=C\,e^{2x}-\frac{1}{2},\qquad C\in\mathbb{R}.
\]
Impose the passage through \(A(0,2)\), i.e. \(f(0)=2\):
\[
Ce^{0}-\frac12=2\ \Rightarrow\ C-\frac12=2\ \Rightarrow\ C=\frac{5}{2}.
\]
Hence \(f(x)=\dfrac{5}{2}e^{2x}-\dfrac12\).

**Final answer.** General solution \(y=Ce^{2x}-\tfrac12\); the required solution \(f(x)=\dfrac{5}{2}e^{2x}-\dfrac{1}{2}\).

**Verification.** \(f'(x)=5e^{2x}\), and \(2f(x)+1=5e^{2x}-1+1=5e^{2x}\) ✔, so \(f'=2f+1\). And \(f(0)=\tfrac52-\tfrac12=2\) ✔.

> **Warning:** do not forget the constant term \(-\dfrac{b}{a}\) in the type \(y'=ay+b\); omitting it is the most common mistake. A quick way to find it: set \(y'=0\) in the equation, which gives \(0=ay+b\), hence \(y=-b/a\).

**What the student should learn.** The solution of \(y'=ay+b\) = (solution of the homogeneous \(Ce^{ax}\)) + (constant particular solution \(-b/a\)); then \(C\) is fixed by the initial condition.

> Source: Mathematics Textbook 1, pages 187–188.

#### Harder / composite example (second)

**B1-U6-L4-E04**

**Problem.** Let \((E):\ y'-3y=2e^{-x}\). (a) Show that \(h(x)=-\dfrac12 e^{-x}\) is a particular solution of \((E)\). (b) Show that \(f\) solves \((E)\) if and only if \(f-h\) solves the homogeneous equation \(y'-3y=0\). (c) Deduce the general solution of \((E)\).

**Problem analysis.** The right-hand side is not constant, so the formula \(-b/a\) does not apply directly; we use the "particular solution + homogeneous solution" technique.

**Step-by-step solution.**
**(a)** \(h(x)=-\tfrac12 e^{-x}\Rightarrow h'(x)=\tfrac12 e^{-x}\). Then:
\[
h'-3h=\tfrac12 e^{-x}-3\big(-\tfrac12 e^{-x}\big)=\tfrac12 e^{-x}+\tfrac32 e^{-x}=2e^{-x}.
\]
So \(h\) satisfies \((E)\). ✔

**(b)** For any function \(f\): \((f-h)'-3(f-h)=\big(f'-3f\big)-\big(h'-3h\big)=\big(f'-3f\big)-2e^{-x}\). Hence:
\[
f'-3f=2e^{-x}\iff (f-h)'-3(f-h)=0.
\]
That is, \(f\) solves \((E)\) \(\iff f-h\) solves the homogeneous equation.

**(c)** The solutions of the homogeneous \(y'-3y=0\) (i.e. \(y'=3y\)) are \(x\mapsto Ce^{3x}\). Hence \(f-h=Ce^{3x}\), giving:
\[
f(x)=Ce^{3x}+h(x)=Ce^{3x}-\frac12 e^{-x},\qquad C\in\mathbb{R}.
\]

**Final answer.** The general solution of \((E)\): \(f(x)=Ce^{3x}-\dfrac12 e^{-x}\).

**Verification.** \(f'(x)=3Ce^{3x}+\tfrac12 e^{-x}\), and \(3f(x)=3Ce^{3x}-\tfrac32 e^{-x}\), so \(f'-3f=\tfrac12 e^{-x}+\tfrac32 e^{-x}=2e^{-x}\) ✔.

**What the student should learn.** When the right-hand side is not constant, the general solution = (a given or guessed particular solution) + (the homogeneous solution \(Ce^{ax}\)). This generalises the idea of \(-b/a\).

> Source: Mathematics Textbook 1, page 197 (Problem 26, by the same method).

#### Common mistake

> **Common mistake:** writing the solution of \(y'=ay+b\) as \(Ce^{ax}+b\) or \(Ce^{ax}-b\), dropping the division by \(a\). The correct form is \(Ce^{ax}-\dfrac{b}{a}\); always check by setting \(y'=0\): it must give \(y=-b/a\).

#### Special cases
- **\(b=0\):** the second type reduces to the first: \(y=Ce^{ax}\).
- **\(a>0\):** the solution \(Ce^{ax}\) is exponential growth; **\(a<0\):** exponential decay toward \(-b/a\).
- **Non-constant right-hand side** (such as \(2e^{-x}\)): use "particular solution + homogeneous" (example E04).

#### Practice set
1. **(B1-U6-L4-P01)** Solve the equation \(y'=3y\) on \(\mathbb{R}\).
2. **(B1-U6-L4-P02)** Solve the equation \(3y'=5y\).
3. **(B1-U6-L4-P03)** Find the solution of \(y'+5y=0\) whose graph passes through the point \(A(-2,\ 1)\).
4. **(B1-U6-L4-P04)** Solve the equation \(2y'=y-1\) on \(\mathbb{R}\).
5. **(B1-U6-L4-P05)** *(near exam level)* Solve \(y'+2y=0\), then find the solution \(f\) whose graph has, at the point of abscissa \(-2\), a tangent of slope \(\dfrac12\).

#### Practice solutions
1. \(y'=3y\Rightarrow y=Ce^{3x}\).
2. \(3y'=5y\iff y'=\dfrac53 y\Rightarrow y=Ce^{\frac53 x}\).
3. \(y'+5y=0\iff y'=-5y\Rightarrow y=Ce^{-5x}\). Passage through \(A(-2,1)\): \(Ce^{10}=1\Rightarrow C=e^{-10}\). Hence \(f(x)=e^{-10}e^{-5x}=e^{-5x-10}=e^{-5(x+2)}\).
4. \(2y'=y-1\iff y'=\dfrac12 y-\dfrac12\), of type \(y'=ay+b\) with \(a=\dfrac12,\ b=-\dfrac12\). General solution \(y=Ce^{\frac12 x}-\dfrac{b}{a}=Ce^{\frac12 x}-\dfrac{-1/2}{1/2}=Ce^{\frac12 x}+1\).
5. \(y'+2y=0\iff y'=-2y\Rightarrow y=Ce^{-2x}\), with derivative \(y'=-2Ce^{-2x}\). The slope at abscissa \(-2\) is \(f'(-2)=-2Ce^{4}\), required \(=\dfrac12\): \(-2Ce^{4}=\dfrac12\Rightarrow C=-\dfrac{1}{4}e^{-4}\). Hence \(f(x)=-\dfrac14 e^{-4}e^{-2x}=-\dfrac14 e^{-2x-4}\).

#### Lesson summary
- **Most important definition:** a differential equation has as unknown a function satisfying a relation between \(y\) and \(y'\).
- **Most important formulas:** \(y'=ay\Rightarrow y=Ce^{ax}\); \(y'=ay+b\Rightarrow y=Ce^{ax}-\dfrac{b}{a}\).
- **Most important condition:** \(a\neq0\); and do not forget the term \(-b/a\).
- **Most important pattern:** rearrange to \(y'=ay(+b)\), then fix \(C\) with an initial condition.
- **Most common mistake:** dropping the division by \(a\) in \(-b/a\).
- **Quick self-check:** what is the solution of \(y'=-y\) with \(f(0)=3\)? *(Answer: \(f(x)=3e^{-x}\).)*

---

<a id="b1-u6-test"></a>
### Chapter summary & review test — Unit 6

#### Chapter summary
The unit introduced the **exponential function** \(\exp\) as the inverse of the natural logarithm, written \(e^x\). We studied it algebraically (the rules \(e^{a+b}=e^ae^b\), \(e^{-a}=1/e^a\), \((e^a)^n=e^{na}\), and the inverse relations with \(\ln\)), and analytically (strict monotonicity, \((e^x)'=e^x\), the limits at \(\pm\infty\), and the important limits \(\frac{e^x}{x}\to+\infty\), \(xe^x\to0\), \(\frac{e^x-1}{x}\to1\)). We then generalised the exponent to a positive base via \(a^x=e^{x\ln a}\) with derivative \(\ln a\cdot a^x\). Finally we solved the differential equations \(y'=ay\) (solution \(Ce^{ax}\)) and \(y'=ay+b\) (solution \(Ce^{ax}-b/a\)), fixing the constant with an initial condition.

#### Essential formulas
\[
e^{a+b}=e^{a}e^{b},\quad e^{-a}=\frac{1}{e^{a}},\quad (e^{a})^{n}=e^{na},\quad \ln(e^{x})=x,\quad e^{\ln x}=x\ (x>0).
\]
\[
(e^{x})'=e^{x},\quad (e^{u})'=u'e^{u},\quad a^{x}=e^{x\ln a},\quad (a^{x})'=\ln a\cdot a^{x}.
\]
\[
y'=ay\Rightarrow y=Ce^{ax},\qquad y'=ay+b\Rightarrow y=Ce^{ax}-\frac{b}{a}.
\]

#### Essential theorems/results
- \(\exp\) is strictly increasing; hence \(a<b\iff e^a<e^b\) (the tool for solving equations).
- \((e^x)'=e^x\) and \((e^u)'=u'e^u\).
- The three important limits, and exp domination: \(\lim_{x\to+\infty}\dfrac{e^x}{x^n}=+\infty\).
- The two theorems solving \(y'=ay\) and \(y'=ay+b\).

#### Main problem patterns
Solving an exponential equation/inequality (by equating exponents or substituting \(t=e^x>0\)); differentiating \(e^u\) and \(a^x\); computing a limit containing \(e^x\) by resolving indeterminacy; a full study of an exponential function with a table and asymptote; solving a differential equation with an initial condition.

#### Connections between the chapter's ideas
The inverse relation with \(\ln\) gives the algebraic rules; monotonicity gives the comparison and equation-solving tool; the derivative \((e^x)'=e^x\) leads to the important limits (via the tangent \(y=x+1\)) and to the differential equations (since \(y'\propto y\) forces the exponential); and the general base \(a^x=e^{x\ln a}\) unifies all bases under \(\exp\).

#### Recommended study order
Definition and rules ← monotonicity and equations ← derivative and important limits ← full study of functions ← \(a^x\) ← differential equations.

#### Chapter checklist
- [ ] I convert between \(y=e^x\) and \(x=\ln y\), and apply the exponential rules without confusing them with addition.
- [ ] I differentiate \(e^u\) and \(a^x\), and carry out a complete study of an exponential function.
- [ ] I memorise the important limits and use them to break indeterminacy.
- [ ] I solve \(y'=ay\) and \(y'=ay+b\) and fix the constant with an initial condition.

#### Chapter review test
1. Simplify: \(A=e^{3+\ln 2}\), \(B=\ln\!\big(e^{-4}\big)+e^{\ln 6}\).
2. Solve the equation \(e^{2x}-3e^{x}-4=0\).
3. Solve the inequality \(e^{x^{2}-1}\ge e^{x+1}\).
4. Find the derivative of \(f(x)=e^{-x^{2}}\), determine its sign, and deduce the monotonicity of \(f\).
5. Compute \(\lim_{x\to+\infty}\big(e^{x}-x^{3}\big)\) and \(\lim_{x\to-\infty}x^{2}e^{x}\).
6. Study the function \(f(x)=e^{x}-x-2\) on \(\mathbb{R}\) (limits, derivative, table, oblique asymptote).
7. Solve the differential equation \(y'=2y+3\), then find the solution \(f\) with \(f(0)=1\).
8. Find the derivative of \(f(x)=2^{x^{2}-2x}\), and determine the point where \(f'(x)=0\).

#### Model solutions for the chapter review test
1. \(A=e^{3+\ln 2}=e^{3}\cdot e^{\ln 2}=2e^{3}\). \(B=\ln(e^{-4})+e^{\ln 6}=-4+6=2\).
2. Put \(t=e^{x}>0\): \(t^{2}-3t-4=0\iff(t-4)(t+1)=0\iff t=4\) or \(t=-1\) (rejected). Hence \(e^{x}=4\Rightarrow x=\ln 4\), and \(S=\{\ln 4\}\).
3. \(e^{x^{2}-1}\ge e^{x+1}\iff x^{2}-1\ge x+1\iff x^{2}-x-2\ge0\iff(x-2)(x+1)\ge0\iff x\le-1\) or \(x\ge2\). Hence \(S=\,]-\infty,-1]\cup[2,+\infty[\).
4. \(f(x)=e^{-x^{2}}=e^{u}\) with \(u=-x^{2}\), \(u'=-2x\). So \(f'(x)=-2x\,e^{-x^{2}}\); its sign is the sign of \((-2x)\): positive for \(x<0\), negative for \(x>0\). So \(f\) is increasing on \(]-\infty,0]\) and decreasing on \([0,+\infty[\), with a maximum \(f(0)=1\).
5. \(e^{x}-x^{3}=e^{x}\big(1-x^{3}e^{-x}\big)\); since \(x^{3}e^{-x}\to0\), the bracket \(\to1\) and \(e^x\to+\infty\), so \(\lim=+\infty\). And \(\lim_{x\to-\infty}x^{2}e^{x}=0\) (Corollary 8).
6. **Limits:** at \(-\infty\): \(f\to+\infty\), and the line \(y=-x-2\) is an oblique asymptote since \(f(x)-(-x-2)=e^{x}\to0\). At \(+\infty\): \(f(x)=e^{x}(1-(x+2)e^{-x})\to+\infty\). **Derivative:** \(f'(x)=e^{x}-1\), vanishing at \(x=0\); negative for \(x<0\), positive for \(x>0\). **Minimum:** \(f(0)=-1\). Table: \(f\searrow\) on \(]-\infty,0]\) from \(+\infty\) to \(-1\), then \(\nearrow\) on \([0,+\infty[\) to \(+\infty\).
7. \(y'=2y+3\) of type \(y'=ay+b\) with \(a=2,\ b=3\); general solution \(y=Ce^{2x}-\dfrac{3}{2}\). Condition \(f(0)=1\): \(C-\dfrac32=1\Rightarrow C=\dfrac52\). Hence \(f(x)=\dfrac{5}{2}e^{2x}-\dfrac{3}{2}\).
8. \(f(x)=2^{x^{2}-2x}=e^{(x^{2}-2x)\ln 2}\); with \(u=(x^{2}-2x)\ln 2\), \(u'=(2x-2)\ln 2\). So \(f'(x)=(2x-2)\ln 2\cdot 2^{x^{2}-2x}\). \(f'\) vanishes at \(2x-2=0\), i.e. \(x=1\) (where \(f(1)=2^{-1}=\tfrac12\)).

---

<a id="b1-u7"></a>
## Unit 7: Integration and Primitives

> Source: Mathematics Textbook 1, pages 199–230.

### Unit overview

This unit builds the **inverse operation of differentiation** and turns it into a tool for measuring:

- **Primitives (antiderivatives):** given a function \(f\), we look for a function \(F\) whose derivative is \(f\) (that is, \(F'=f\)). This reverses everything you learned about derivatives.
- **The definite integral:** the number \(\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)\), which does **not** depend on which primitive \(F\) you pick, and which measures **areas** and **volumes**.

**Why it matters:** the definite integral is the single tool for computing the area under a curve, the area between two curves, and the volume of a solid of revolution. Integration by parts and the linearity/Chasles properties reappear in every later problem that involves an integral, and the connection "derivative ↔ primitive" underlies the whole of analysis.

**Prerequisites:** all the derivative rules (power, \(\ln\), \(e^x\), \(\sin\), \(\cos\), chain rule), factoring and polynomial division, and the basic trigonometric identities (double angle, product-to-sum).

**Main question types:** find a primitive (direct table or composite form); find the primitive satisfying an initial condition; compute a definite integral; compute an integral **by parts**; compute an area under a curve, between two curves, or a volume of revolution; prove an inequality using the positivity of the integral.

### Unit concept map

```text
Integration & Primitives
├── Primitive F of f  (F' = f on an interval I)
│   ├── Existence: f continuous ⇒ f has a primitive
│   ├── Family: all primitives are F + c  (differ by a constant)
│   └── Unique primitive through a point (x₀,y₀)
├── Computing primitives
│   ├── Table: xⁿ→xⁿ⁺¹/(n+1),  1/x→ln|x|,  eˣ→eˣ,  sin→−cos,  cos→sin
│   ├── Linearity: primitive of f+g is F+G,  of kf is kF
│   └── Composite: u'uⁿ→uⁿ⁺¹/(n+1),  u'/u→ln|u|,  u'eᵘ→eᵘ,  u'/√u→2√u
├── Definite integral  ∫ₐᵇ f = F(b) − F(a) = [F]ₐᵇ
│   ├── Linearity + sign swap ∫ᵦᵃ = −∫ₐᵇ,  ∫ₐᵃ = 0
│   ├── Chasles: ∫ₐᶜ + ∫ᶜᵇ = ∫ₐᵇ
│   ├── Positivity/order: f≥0 ⇒ ∫≥0;  f≥g ⇒ ∫f≥∫g
│   └── Integration by parts: ∫ₐᵇ u·v' = [uv]ₐᵇ − ∫ₐᵇ u'·v
└── Geometric applications
    ├── Area under Cf (f≥0): 𝒜 = ∫ₐᵇ f;  general: 𝒜 = ∫ₐᵇ|f|
    ├── Area between curves (f≥g): 𝒜 = ∫ₐᵇ(f−g)
    └── Volume of revolution about x-axis: V = π ∫ₐᵇ [f(x)]² dx
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(F'=f\Rightarrow F\) a primitive of \(f\) | \(F\) primitive, \(f\) the given function | on an interval \(I\) | if \(F\) is not differentiable | always check by differentiating \(F\) |
| every primitive is \(F+c\) | \(c\in\mathbb{R}\) a constant | \(I\) is an interval | not on a disconnected domain | two primitives differ by a constant |
| \(\displaystyle\int x^n\,dx=\dfrac{x^{n+1}}{n+1}\) | \(n\) integer | \(n\neq-1\) | at \(n=-1\) use \(\ln\lvert x\rvert\) | \(+c\) understood |
| \(\displaystyle\int\dfrac1x\,dx=\ln\lvert x\rvert\) | — | \(x\neq0\) | not at \(x=0\) | \(\ln x\) on \(]0,\infty[\), \(\ln(-x)\) on \(]-\infty,0[\) |
| \(\displaystyle\int u'u^n=\dfrac{u^{n+1}}{n+1}\) | \(u\) differentiable | \(n\neq-1\); if \(n<-1\) need \(u\neq0\) | if the factor \(u'\) is missing | recognise \(u'\) beside \(u^n\) |
| \(\displaystyle\int\dfrac{u'}{u}=\ln\lvert u\rvert\) | \(u\) differentiable | \(u\neq0\) on \(I\) | if \(u\) vanishes on \(I\) | numerator must be \(u'\) |
| \(\displaystyle\int u'e^{u}=e^{u}\) | \(u\) differentiable | — | if the factor \(u'\) is missing | e.g. \(\int 2xe^{x^2}=e^{x^2}\) |
| \(\displaystyle\int_a^b f=F(b)-F(a)\) | \(F\) any primitive of \(f\) | \(f\) continuous on \(I\), \(a,b\in I\) | if \(f\) is not continuous on \([a,b]\) | value independent of \(F\) |
| Chasles \(\displaystyle\int_a^c f+\int_c^b f=\int_a^b f\) | \(a,b,c\in I\) | \(f\) continuous | — | key for \(\lvert\cdot\rvert\) integrals |
| by parts \(\displaystyle\int_a^b uv'=[uv]_a^b-\int_a^b u'v\) | choose \(u\) (to differentiate), \(v'\) (to integrate) | \(u',v'\) continuous | if neither factor simplifies | for \(xe^x\), \(x\sin x\), \(\ln x\) |
| area \(\displaystyle\mathcal{A}=\int_a^b\lvert f\rvert\) | area units | \(f\) continuous, \(a\le b\) | if \(a>b\) swap first | \(=\int_a^b f\) when \(f\ge0\) |
| area between \(\displaystyle\mathcal{A}=\int_a^b(f-g)\) | \(f\) above \(g\) | \(f\ge g\) on \([a,b]\) | if \(f,g\) cross, split | use \(\lvert f-g\rvert\) in general |
| volume \(\displaystyle V=\pi\int_a^b [f(x)]^2\,dx\) | rotation about the \(x\)-axis | disks of radius \(f(x)\) | not for rotation about another axis | activity result, not a numbered theorem |

### Unit learning checklist

- [ ] I can decide whether a given \(F\) is a primitive of \(f\) by differentiating.
- [ ] I know the primitive table and the three composite rules (\(u'u^n\), \(u'/u\), \(u'e^u\)) by heart.
- [ ] I find the unique primitive satisfying an initial condition.
- [ ] I compute a definite integral and use Chasles to handle absolute values.
- [ ] I apply integration by parts and choose \(u\) and \(v'\) correctly.
- [ ] I compute the area under a curve, between two curves, and a volume of revolution.
- [ ] I use the positivity of the integral to prove an inequality.

---

<a id="b1u7-l1"></a>
### Lesson 1: Primitive functions

#### Core idea

Differentiation takes a function \(F\) and produces its derivative \(F'\). A **primitive** (or antiderivative) reverses this: starting from a function \(f\), we look for a function \(F\) whose derivative is exactly \(f\). So a primitive answers the question *"whose derivative is \(f\)?"* Because \((x^2)'=2x\), the function \(x^2\) is a primitive of \(2x\); because \((\sin x)'=\cos x\), \(\sin x\) is a primitive of \(\cos x\).

Two facts make the whole theory work. First, **every continuous function has a primitive** — so the search is never hopeless for the functions we meet. Second, a primitive is **not unique**: since the derivative of a constant is \(0\), adding any constant to a primitive gives another primitive. In fact on an interval *all* primitives of \(f\) form the single family \(F+c\); any two of them differ by a constant. This is why an initial condition (one point the curve must pass through) pins down exactly one primitive.

**How does a student recognise this lesson?** When the task says "find a function whose derivative is …", "verify that \(F\) is a primitive of \(f\)", or "find the primitive \(F\) with \(F(x_0)=y_0\)". The usual confusions are forgetting the constant \(+c\), and forgetting that the statement only holds on an **interval** (the domain must not be split).

#### Prerequisite knowledge
- All derivative rules: \((x^n)'=nx^{n-1}\), \((\ln x)'=\tfrac1x\), \((e^x)'=e^x\), \((\sin x)'=\cos x\), \((\cos x)'=-\sin x\).
- The chain rule \((F\circ u)'=u'\cdot(F'\circ u)\) — the engine behind composite primitives (Lesson 2).
- The fact that **a function with zero derivative on an interval is constant**.

#### Definitions

**Definition (primitive / antiderivative).** Let \(f\) be a function defined on an interval \(I\). We say \(F\) is a **primitive** of \(f\) on \(I\) if and only if \(F\) is differentiable on \(I\) and
\[
F'(x)=f(x)\qquad\text{for all } x\in I.
\]

**Examples from the definition.** \(x\mapsto x^2\) is a primitive of \(x\mapsto 2x\) on \(\mathbb{R}\); \(x\mapsto \tfrac1x\) is a primitive of \(x\mapsto -\tfrac{1}{x^2}\) on \(]0,+\infty[\); \(x\mapsto \ln x\) is a primitive of \(x\mapsto \tfrac1x\) on \(]0,+\infty[\); \(x\mapsto e^x\) is its own primitive on \(\mathbb{R}\).

> Source: Mathematics Textbook 1, pages 199–200.

#### Formulas and properties

**Theorem 1 (structure of the primitives).** Let \(F\) be a primitive of \(f\) on an interval \(I\). Then:

1. For every constant \(k\in\mathbb{R}\), the function \(G=F+k\) is also a primitive of \(f\) on \(I\); and conversely, **every** primitive of \(f\) on \(I\) has the form \(F+k\). Two primitives of the same function on an interval **differ by a constant**.
2. For any \(x_0\in I\) and \(y_0\in\mathbb{R}\), there is a **unique** primitive \(G\) with \(G(x_0)=y_0\); explicitly \(G(x)=F(x)-F(x_0)+y_0\).

> **Important condition:** part 1 needs \(I\) to be an **interval**. On a domain in two pieces (for example \(]-\infty,0[\cup]0,+\infty[\)) the "constant" may differ from piece to piece.

#### Theorems and proofs

**Theorem 2 (existence — the fundamental theorem).** If \(f\) is **continuous** on an interval \(I\), then \(f\) **has** a primitive on \(I\).

This existence result is stated in the book; its proof is deferred. The student only **applies** it: continuity guarantees that a primitive exists, even if we cannot always write it with elementary functions.

**Proof of Theorem 1 (the book proves this).**
- *If \(G=F+k\):* then \(G'=F'+0=f\), so \(G\) is a primitive.
- *Conversely,* if \(F,G\) are both primitives on \(I\), then \((G-F)'=G'-F'=f-f=0\) on the interval \(I\). A function with zero derivative on an interval is constant, so \(G-F=k\), i.e. \(G=F+k\).
- *Initial condition:* imposing \(G(x_0)=y_0\) on \(G=F+k\) gives \(F(x_0)+k=y_0\), so \(k=y_0-F(x_0)\) is determined uniquely.

> **Exam-style insight:** the surest way to prove "\(F\) is a primitive of \(f\)" is simply to **differentiate \(F\)** and check you get \(f\). You never need to integrate for that direction.

#### Recognising the idea and the solution method

- **If asked to verify** "\(F\) is a primitive of \(f\)": differentiate \(F\) and compare with \(f\); state the interval.
- **If asked to find the primitive through \((x_0,y_0)\):** find the general family \(F+c\), then solve \(F(x_0)+c=y_0\) for \(c\).

**Standard algorithm (primitive with an initial condition):**
1. Find one primitive \(F\) of \(f\) (table or composite rule).
2. Write the general primitive \(G(x)=F(x)+c\).
3. Impose \(G(x_0)=y_0\) and solve for \(c\).
4. Write the final \(G\), and check by differentiating.

#### Basic example

**B1-U7-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Verify that \(F(x)=x\ln x-x\) is a primitive of \(f(x)=\ln x\) on \(]0,+\infty[\).

**Why this method applies.** To confirm a primitive we differentiate \(F\); no integration is needed.

**Step-by-step solution.** Using the product rule on \(x\ln x\):
\[
F'(x)=\big(x\ln x\big)'-\big(x\big)'=\Big(1\cdot\ln x+x\cdot\tfrac1x\Big)-1=\ln x+1-1=\ln x=f(x).
\]

**Final answer.** \(F'(x)=\ln x=f(x)\) for all \(x>0\), so \(F\) is indeed a primitive of \(f\) on \(]0,+\infty[\).

**Verification.** The equality \(F'=f\) is the check itself; note \(x\ln x-x+7\) would also be a primitive (any constant).

**What the student should learn.** A "verify a primitive" task is a differentiation task in disguise. Any constant can be added, so the primitive is never unique.

> Source: example in the style of the "verify a primitive" practice on page 201.

#### Textbook-level example

**B1-U7-L1-E02**

**Problem.** Find the primitive \(F\) of \(f(x)=3x^2-2\) on \(\mathbb{R}\) such that \(F(1)=4\).

**Problem analysis.** We need one primitive of \(f\), then adjust the constant so the value at \(x=1\) is \(4\). This uses the uniqueness part of Theorem 1.

**Step-by-step solution.**
- A primitive of \(3x^2-2\) is \(x^3-2x\), so the general primitive is \(F(x)=x^3-2x+c\).
- Impose \(F(1)=4\): \(1-2+c=4\Rightarrow c=5\).
- Hence \(F(x)=x^3-2x+5\).

**Final answer.** \(F(x)=x^3-2x+5\).

**Verification.** \(F'(x)=3x^2-2=f(x)\) ✓, and \(F(1)=1-2+5=4\) ✓.

**What the student should learn.** The initial condition fixes the constant \(c\), turning a whole family into a single function.

> Source: Mathematics Textbook 1, page 200 (uniqueness of the primitive through a point).

#### Common mistake

> **Common mistake:** writing a primitive **without the constant** and treating it as unique — for instance saying "the primitive of \(2x\) is \(x^2\)". There are infinitely many: \(x^2+c\). The constant only disappears once an initial condition (or a definite integral) is imposed. Forgetting it loses the whole family and makes initial-condition problems impossible.

#### Special cases
- **\(f\equiv0\):** its primitives are exactly the constants \(F(x)=c\).
- **Split domain:** on \(]-\infty,0[\cup]0,+\infty[\), the constants on the two pieces can be chosen independently — Theorem 1 applies to each interval separately.
- **Continuity is sufficient, not necessary:** a discontinuous function can still have a primitive; but for every continuous function existence is guaranteed.

#### Practice set
1. **(B1-U7-L1-P01)** Verify that \(F(x)=x^3-x^2+x\) is a primitive of \(f(x)=3x^2-2x+1\) on \(\mathbb{R}\).
2. **(B1-U7-L1-P02)** Verify that \(F(x)=\tfrac12(\ln x)^2\) is a primitive of \(f(x)=\dfrac{\ln x}{x}\) on \(]0,+\infty[\).
3. **(B1-U7-L1-P03)** Find the general primitive of \(f(x)=4x^3-\dfrac{1}{x^2}\) on \(]0,+\infty[\).
4. **(B1-U7-L1-P04)** Find the primitive \(F\) of \(f(x)=e^x+2x\) on \(\mathbb{R}\) with \(F(0)=3\).
5. **(B1-U7-L1-P05)** *(near exam level)* Find the primitive \(F\) of \(f(x)=\cos x+\dfrac1x\) on \(]0,+\infty[\) such that \(F(\pi/2)=\pi\).

#### Practice solutions
1. \(F'(x)=3x^2-2x+1=f(x)\) for all \(x\); so \(F\) is a primitive on \(\mathbb{R}\). ✔
2. \(F'(x)=\tfrac12\cdot2\ln x\cdot\tfrac1x=\dfrac{\ln x}{x}=f(x)\) on \(]0,+\infty[\). ✔
3. A primitive of \(4x^3\) is \(x^4\); a primitive of \(-x^{-2}\) is \(x^{-1}=\tfrac1x\). General primitive: \(F(x)=x^4+\dfrac1x+c\).
4. A primitive of \(e^x+2x\) is \(e^x+x^2\), so \(F(x)=e^x+x^2+c\). Then \(F(0)=1+0+c=3\Rightarrow c=2\); hence \(F(x)=e^x+x^2+2\).
5. A primitive of \(\cos x+\tfrac1x\) is \(\sin x+\ln x\), so \(F(x)=\sin x+\ln x+c\). Then \(F(\pi/2)=\sin\tfrac{\pi}{2}+\ln\tfrac{\pi}{2}+c=1+\ln\tfrac{\pi}{2}+c=\pi\Rightarrow c=\pi-1-\ln\tfrac{\pi}{2}\). Hence \(F(x)=\sin x+\ln x+\pi-1-\ln\tfrac{\pi}{2}\).

#### Lesson summary
- **Most important definition:** \(F\) is a primitive of \(f\) on \(I\) iff \(F'=f\) on \(I\).
- **Most important result:** a continuous function has a primitive; all primitives form the family \(F+c\).
- **Most important condition:** the "differ by a constant" statement needs \(I\) to be an interval.
- **Most important pattern:** to fix the constant, impose an initial condition \(F(x_0)=y_0\).
- **Most common mistake:** dropping the constant \(+c\).
- **Quick self-check:** what is the primitive of \(x\mapsto \tfrac1x\) on \(]0,+\infty[\) that vanishes at \(x=1\)? *(Answer: \(\ln x\), since \(\ln 1=0\).)*

---

<a id="b1u7-l2"></a>
### Lesson 2: Rules for computing primitives

#### Core idea

Lesson 1 tells us primitives exist; this lesson tells us **how to write them down**. There are two layers. First, a **table** of primitives read straight off the derivative table in reverse: since \((\tfrac{x^{n+1}}{n+1})'=x^n\), a primitive of \(x^n\) is \(\tfrac{x^{n+1}}{n+1}\); since \((\ln\lvert x\rvert)'=\tfrac1x\), a primitive of \(\tfrac1x\) is \(\ln\lvert x\rvert\); and so on for \(e^x\), \(\sin x\), \(\cos x\). Second, **linearity** lets us take primitives term by term and pull out constants.

The powerful part is the **composite rules**, which reverse the chain rule. Whenever an integrand looks like *(something)′ times a function of that something*, we can integrate it directly. The three you must recognise instantly are
\[
\int u'u^{n}=\frac{u^{n+1}}{n+1},\qquad \int\frac{u'}{u}=\ln\lvert u\rvert,\qquad \int u'e^{u}=e^{u}.
\]
The skill is **spotting \(u\) and checking that its derivative \(u'\) is present** (up to a constant factor you can adjust).

**How does a student recognise this lesson?** When asked to "find a primitive of …" and the function is a polynomial, a simple quotient, or clearly a composite with the inner derivative visible (like \(2x\,e^{x^2}\), or \(\tfrac{2x}{x^2+1}\), or \((2x-4)(x^2-4x+5)^2\)). The confusion is forcing the composite rule when the factor \(u'\) is **not** there.

#### Prerequisite knowledge
- The primitive table below (memorised).
- The chain rule, read backwards.
- Basic trig identities to rewrite integrands: \(\sin x\cos x=\tfrac12\sin 2x\), \(\cos^2x=\tfrac12+\tfrac12\cos2x\), \(\tan^2x=\tfrac{1}{\cos^2x}-1\), product-to-sum.

#### Definitions

**Table of primitives (a constant \(+c\) is understood).**

| \(f(x)\) | Primitive \(F(x)\) | Interval |
|---|---|---|
| \(a\) (constant) | \(ax\) | \(\mathbb{R}\) |
| \(x^{n}\ (n\in\mathbb{N})\) | \(\dfrac{x^{n+1}}{n+1}\) | \(\mathbb{R}\) |
| \(x^{n}\ (n\text{ integer}<-1)\) | \(\dfrac{x^{n+1}}{n+1}\) | \(]0,\infty[\) or \(]-\infty,0[\) |
| \(\dfrac1x\) | \(\ln\lvert x\rvert\) | \(]0,\infty[\) or \(]-\infty,0[\) |
| \(e^{x}\) | \(e^{x}\) | \(\mathbb{R}\) |
| \(\sin x\) | \(-\cos x\) | \(\mathbb{R}\) |
| \(\cos x\) | \(\sin x\) | \(\mathbb{R}\) |
| \(\dfrac{1}{\cos^2x}\) | \(\tan x\) | \(]-\tfrac{\pi}{2}+k\pi,\tfrac{\pi}{2}+k\pi[\) |

> Source: Mathematics Textbook 1, page 203.

#### Formulas and properties

**Theorem 3 (linearity).** If \(F,G\) are primitives of \(f,g\) on \(I\) and \(k\in\mathbb{R}\), then \(F+G\) is a primitive of \(f+g\), and \(kF\) is a primitive of \(kf\). So primitives are taken **term by term**, and constants come out.

**Composite rules (reverse chain rule).** For \(u\) differentiable on \(I\):
\[
\int u'u^{n}=\frac{u^{n+1}}{n+1}\ (n\neq-1),\qquad
\int\frac{u'}{\sqrt{u}}=2\sqrt{u}\ (u>0),\qquad
\int\frac{u'}{u}=\ln\lvert u\rvert\ (u\neq0),\qquad
\int u'e^{u}=e^{u}.
\]
General principle: if \(F\) is a primitive of \(f\), then \(F\circ u\) is a primitive of \(u'\cdot(f\circ u)\), because \((F\circ u)'=u'\cdot(f'\circ u)=u'\cdot(f\circ u)\).

> **Important condition:** the factor \(u'\) must be present (possibly up to a numerical constant you can insert and compensate). For \(\dfrac{u'}{u}\to\ln\lvert u\rvert\) the numerator must be **exactly** the derivative of the denominator.

> **Warning:** \(\displaystyle\int\frac{u'}{u}=\ln\lvert u\rvert\), **not** \(\ln u\). Keep the absolute value unless you know \(u>0\) on the interval.

#### Recognising the idea and the solution method

- Polynomial or sum → use the **table + linearity**, term by term.
- A power of a bracket with its derivative outside → \(u'u^n\) rule.
- A quotient whose numerator is the derivative of the denominator → \(\tfrac{u'}{u}\) rule (gives \(\ln\lvert u\rvert\)).
- \(e^{(\text{something})}\) multiplied by that something's derivative → \(u'e^u\) rule.
- A product like \(\sin x\cos x\) or a power like \(\cos^2x\) → **rewrite with an identity first**, then use the table.

**Standard algorithm (find a primitive):**
1. Simplify/rewrite the integrand (expand, split a fraction, apply a trig identity).
2. Identify the pattern: table term, or a composite \(u'u^n\), \(u'/u\), \(u'e^u\), \(u'/\sqrt u\).
3. If a composite, name \(u\), compute \(u'\), and adjust a constant factor so that exactly \(u'\) appears.
4. Write \(F\); **differentiate it** to confirm you recover \(f\).

#### Basic example

**B1-U7-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Find a primitive of \(f(x)=6x^5-4x^3+2x-1\) on \(\mathbb{R}\).

**Why this method applies.** A polynomial: use the power rule on each term (linearity).

**Step-by-step solution.**
\[
\int 6x^5\,dx=x^6,\quad \int-4x^3\,dx=-x^4,\quad \int 2x\,dx=x^2,\quad \int-1\,dx=-x.
\]
Adding, \(F(x)=x^6-x^4+x^2-x\).

**Final answer.** \(F(x)=x^6-x^4+x^2-x\) (\(+c\)).

**Verification.** \(F'(x)=6x^5-4x^3+2x-1=f(x)\). ✓

**What the student should learn.** For polynomials, raise each exponent by one and divide by the new exponent; there is no need for the composite rules.

> Source: example in the style of the polynomial-primitive examples on page 203.

#### Textbook-level example

**B1-U7-L2-E02**

**Problem.** Find a primitive of \(f(x)=(x-2)\,(x^2-4x+5)^2\) on \(\mathbb{R}\).

**Problem analysis.** The bracket \(u=x^2-4x+5\) has derivative \(u'=2x-4=2(x-2)\). So the factor \(x-2\) outside is exactly \(\tfrac12 u'\): the integrand is \(\tfrac12 u'u^2\), a \(u'u^n\) form.

**Step-by-step solution.** Let \(u=x^2-4x+5\), so \(u'=2(x-2)\) and \(x-2=\tfrac12u'\):
\[
f=(x-2)u^2=\tfrac12u'\,u^2\ \Rightarrow\ F=\tfrac12\cdot\frac{u^{3}}{3}=\frac16\,(x^2-4x+5)^3.
\]

**Final answer.** \(F(x)=\dfrac16\,(x^2-4x+5)^3\).

**Verification.** \(F'(x)=\tfrac16\cdot3(x^2-4x+5)^2\cdot(2x-4)=(x^2-4x+5)^2\,(x-2)=f(x)\). ✓

**What the student should learn.** Adjust the constant so that **exactly \(u'\)** stands next to \(u^n\); here we supplied the missing factor \(\tfrac12\).

> Source: Mathematics Textbook 1, page 206.

#### Harder / composite example

**B1-U7-L2-E03**

**Problem.** Find a primitive of each on the stated interval: (a) \(f(x)=x\,e^{x^2}\) on \(\mathbb{R}\); (b) \(g(x)=\dfrac{2x+2}{\sqrt{x^2+2x+3}}\) on \(\mathbb{R}\); (c) \(h(x)=\dfrac{\ln x}{x}\) on \(]0,+\infty[\).

**Problem analysis.** Each is a composite with the inner derivative visible: (a) is \(u'e^u\) with \(u=x^2\) up to a constant; (b) is \(\tfrac{u'}{\sqrt u}\) with \(u=x^2+2x+3\); (c) is \(u'u\) (a \(u'u^n\) with \(n=1\)) with \(u=\ln x\).

**Step-by-step solution.**

(a) \(u=x^2\Rightarrow u'=2x\), so \(x\,e^{x^2}=\tfrac12(2x)e^{x^2}=\tfrac12u'e^u\), giving \(F(x)=\tfrac12e^{x^2}\).

(b) \(u=x^2+2x+3\Rightarrow u'=2x+2\), which is exactly the numerator, so \(g=\tfrac{u'}{\sqrt u}\) and \(G(x)=2\sqrt{x^2+2x+3}\). (Note \(u=(x+1)^2+2>0\), so the root is defined everywhere.)

(c) \(u=\ln x\Rightarrow u'=\tfrac1x\), so \(h=u'\,u=u'u^1\) and \(H(x)=\tfrac12(\ln x)^2\).

**Final answer.** \(F(x)=\tfrac12e^{x^2}\); \(G(x)=2\sqrt{x^2+2x+3}\); \(H(x)=\tfrac12(\ln x)^2\).

**Verification.** \(F'=\tfrac12e^{x^2}\cdot2x=xe^{x^2}\) ✓; \(G'=2\cdot\tfrac{2x+2}{2\sqrt{u}}=\tfrac{2x+2}{\sqrt u}\) ✓; \(H'=\tfrac12\cdot2\ln x\cdot\tfrac1x=\tfrac{\ln x}{x}\) ✓.

**What the student should learn.** Name \(u\), compute \(u'\), and match one of \(u'e^u\), \(\tfrac{u'}{\sqrt u}\), \(u'u^n\); insert a numerical constant when \(u'\) is off by a factor.

> Source: Mathematics Textbook 1, pages 205–206.

#### Common mistake

> **Common mistake:** applying \(\displaystyle\int u'u^n=\dfrac{u^{n+1}}{n+1}\) when the factor \(u'\) is **absent**. For example \(\displaystyle\int(x^2+1)^2\,dx\neq\dfrac{(x^2+1)^3}{3}\), because the derivative of \((x^2+1)^3/3\) is \((x^2+1)^2\cdot 2x\), and there is no \(2x\) in the integrand. Here you must **expand** first: \((x^2+1)^2=x^4+2x^2+1\), then integrate term by term.

#### Special cases
- **\(n=-1\) is excluded** from \(u'u^n\): \(\displaystyle\int\frac{u'}{u}=\ln\lvert u\rvert\) replaces it.
- **Sign of \(u\):** \(\displaystyle\int\frac{u'}{u}\) is \(\ln u\) where \(u>0\) and \(\ln(-u)\) where \(u<0\); on a single interval one sign holds.
- **Linear inner function:** \(\displaystyle\int f(ax+b)\,dx=\dfrac1a F(ax+b)\) with \(F\) a primitive of \(f\), e.g. \(\displaystyle\int\cos(2x)\,dx=\tfrac12\sin 2x\).
- **Trig powers/products:** rewrite by identity (\(\sin x\cos x=\tfrac12\sin2x\), \(\cos^2x=\tfrac12+\tfrac12\cos2x\)) before integrating.

#### Practice set
1. **(B1-U7-L2-P01)** Find a primitive of \(f(x)=8x^3+6x^2-2x+3\) on \(\mathbb{R}\).
2. **(B1-U7-L2-P02)** Find a primitive of \(f(x)=\dfrac{2x+1}{x^2+x+5}\) on \(\mathbb{R}\).
3. **(B1-U7-L2-P03)** Find a primitive of \(f(x)=3x^2\,e^{x^3}\) on \(\mathbb{R}\).
4. **(B1-U7-L2-P04)** Find a primitive of \(f(x)=\sin x\cos x\) on \(\mathbb{R}\). *(hint: an identity)*
5. **(B1-U7-L2-P05)** *(near exam level)* Find a primitive of \(f(x)=\dfrac{x}{(x^2+1)^2}\) on \(\mathbb{R}\).

#### Practice solutions
1. Term by term: \(F(x)=2x^4+2x^3-x^2+3x\). Check \(F'=8x^3+6x^2-2x+3\). ✔
2. With \(u=x^2+x+5\), \(u'=2x+1\) is the numerator, so \(f=\tfrac{u'}{u}\) and \(F(x)=\ln(x^2+x+5)\) (the bracket is always \(>0\), so no absolute value needed).
3. With \(u=x^3\), \(u'=3x^2\), so \(f=u'e^u\) and \(F(x)=e^{x^3}\). Check \(F'=e^{x^3}\cdot3x^2\). ✔
4. \(\sin x\cos x=\tfrac12\sin2x\); a primitive of \(\tfrac12\sin2x\) is \(-\tfrac14\cos2x\). So \(F(x)=-\tfrac14\cos2x\). (Equivalently \(\tfrac12\sin^2x\).)
5. Write \(f=\tfrac12\,(2x)(x^2+1)^{-2}=\tfrac12 u'u^{-2}\) with \(u=x^2+1\). Then \(F=\tfrac12\cdot\dfrac{u^{-1}}{-1}=-\dfrac{1}{2(x^2+1)}\). Check \(F'=-\tfrac12\cdot\dfrac{-(2x)}{(x^2+1)^2}=\dfrac{x}{(x^2+1)^2}\). ✔

#### Lesson summary
- **Most important formulas:** the primitive table and the three composite rules \(u'u^n\), \(u'/u\), \(u'e^u\) (plus \(u'/\sqrt u\to2\sqrt u\)).
- **Most important skill:** name \(u\), compute \(u'\), and check it appears next to the rest.
- **Most important condition:** \(u'\) must be present; for \(u'/u\) the numerator is exactly \(u'\).
- **Most important pattern:** rewrite trig products/powers by an identity before integrating.
- **Most common mistake:** using \(u'u^n\) with no \(u'\) factor — expand instead.
- **Quick self-check:** a primitive of \(\dfrac{2x}{x^2+1}\)? *(Answer: \(\ln(x^2+1)\).)*

---

<a id="b1u7-l3"></a>
### Lesson 3: The definite integral, its properties, and integration by parts

#### Core idea

Once we can find a primitive \(F\) of \(f\), we can attach a **number** to \(f\) between two bounds: the **definite integral**
\[
\int_a^b f(x)\,dx=F(b)-F(a)=\big[F(x)\big]_a^b.
\]
The remarkable point is that this number does **not depend on which primitive** \(F\) we use: if we replace \(F\) by \(F+c\), the constant cancels in \(F(b)-F(a)\). So "compute \(\int_a^b f\)" means: find any primitive, plug in \(b\), plug in \(a\), subtract.

The integral obeys three families of properties that make computation flexible: **linearity** (integrate a sum term by term, pull out constants) with the **sign swap** \(\int_b^a=-\int_a^b\); **Chasles' relation** \(\int_a^c+\int_c^b=\int_a^b\), which lets us split a range — essential for integrals with absolute values; and **order/positivity** (a non-negative function has a non-negative integral), which turns integrals into a tool for proving inequalities. Finally, **integration by parts** handles products (like \(xe^x\), \(x\sin x\), or \(\ln x\)) that no table entry covers, by trading the integral \(\int uv'\) for the usually easier \(\int u'v\).

**How does a student recognise this lesson?** Bounds \(a\) and \(b\) on the integral sign; a request to "compute \(\int_a^b\dots\)"; an absolute value inside (⇒ Chasles); a product of two different kinds of function (⇒ by parts); or "prove that \(\int\dots\ge\dots\)" (⇒ positivity). The confusions are sign errors in \([F]_a^b\), and choosing \(u\) and \(v'\) badly in the by-parts formula.

#### Prerequisite knowledge
- Finding primitives (Lessons 1–2).
- Values of \(\sin,\cos\) at standard angles; \(\ln1=0\), \(e^0=1\).
- Determining the sign of a simple expression (to remove an absolute value on each sub-interval).

#### Definitions

**Definition (definite integral).** Let \(f\) be **continuous** on an interval \(I\), and \(a,b\in I\). If \(F\) is any primitive of \(f\) on \(I\), then the number \(F(b)-F(a)\) does not depend on the choice of \(F\); it is the **definite integral** of \(f\) from \(a\) to \(b\):
\[
\int_a^b f(x)\,dx=\big[F(x)\big]_a^b=F(b)-F(a).
\]
The variable \(x\) is a **dummy** (bound) variable: \(\int_a^b f(x)\,dx=\int_a^b f(t)\,dt\).

> Source: Mathematics Textbook 1, page 208.

#### Formulas and properties

**Theorem 5 (linearity and sign swap).** For \(f,g\) continuous on \(I\), \(a,b\in I\), \(\lambda\in\mathbb{R}\):
\[
\int_a^b(f+g)=\int_a^b f+\int_a^b g,\qquad
\int_a^b(\lambda f)=\lambda\int_a^b f,\qquad
\int_b^a f=-\int_a^b f.
\]
In particular \(\displaystyle\int_a^a f=0\).

**Theorem 6 (Chasles' relation).** For \(f\) continuous on \(I\) and \(a,b,c\in I\):
\[
\int_a^c f+\int_c^b f=\int_a^b f.
\]

> **Exam-style insight:** to compute \(\int_a^b\lvert g\rvert\), first find where \(g\) changes sign inside \([a,b]\), then split by Chasles and drop the absolute value with the correct sign on each piece.

#### Theorems and proofs

**Theorem 7 (integration by parts).** Let \(u,v\) be differentiable on \(I\) with \(u',v'\) **continuous**. For \(a,b\in I\):
\[
\int_a^b u\,v'=\big[u\,v\big]_a^b-\int_a^b u'\,v.
\]

**Proof (the book proves this).** Since \((uv)'=u'v+uv'\), the product \(uv\) is a primitive of \(u'v+uv'\), so \(\int_a^b(uv'+u'v)=[uv]_a^b\). By linearity, \(\int_a^b uv'+\int_a^b u'v=[uv]_a^b\), and rearranging gives the formula.

**Proof of Chasles (Theorem 6).** With \(F\) a primitive of \(f\):
\[
\int_a^c f+\int_c^b f=(F(c)-F(a))+(F(b)-F(c))=F(b)-F(a)=\int_a^b f.
\]

> **Important condition:** for by parts, choose \(u\) to be the factor that gets **simpler when differentiated** (e.g. a polynomial, or \(\ln x\)) and \(v'\) the factor you can integrate. A poor choice makes \(\int u'v\) harder, not easier.

#### Recognising the idea and the solution method

- Simple integrand → primitive + \([F]_a^b\).
- Absolute value / a modulus that changes sign → **Chasles-split**.
- Product of "polynomial × (\(e^x\), \(\sin\), \(\cos\))" or a lone \(\ln x\) → **integration by parts**.
- \(\int e^x\sin x\) or \(\int e^x\cos x\) → by parts **twice**, then solve for the integral.

**Standard algorithm (definite integral):**
1. Simplify the integrand if possible.
2. Find a primitive \(F\) (using a composite rule or by parts as needed).
3. Evaluate \([F]_a^b=F(b)-F(a)\), watching signs.
4. Simplify; sanity-check the sign against the graph.

#### Basic example

**B1-U7-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Compute \(\displaystyle\int_{-1}^{2}(2x-1)\,dx\).

**Why this method applies.** A polynomial integrand: find a primitive and evaluate.

**Step-by-step solution.** A primitive of \(2x-1\) is \(x^2-x\):
\[
\int_{-1}^{2}(2x-1)\,dx=\big[x^2-x\big]_{-1}^{2}=(4-2)-(1-(-1))=2-2=0.
\]

**Final answer.** \(0\).

**Verification.** \(\big[x^2-x\big]_{-1}^2\): at \(x=2\), \(4-2=2\); at \(x=-1\), \(1+1=2\); difference \(0\). ✔

**What the student should learn.** Always subtract "value at \(b\)" minus "value at \(a\)"; a zero result simply means the signed area cancels.

> Source: Mathematics Textbook 1, page 208 (worked example).

#### Textbook-level example

**B1-U7-L3-E02**

**Problem.** Compute \(\displaystyle I=\int_{0}^{2}\lvert x^2-1\rvert\,dx\).

**Problem analysis.** The integrand has an absolute value; \(x^2-1\) changes sign at \(x=1\) inside \([0,2]\). Split by Chasles at \(x=1\), removing the modulus with the right sign on each piece: \(x^2-1\le0\) on \([0,1]\), \(\ge0\) on \([1,2]\).

**Step-by-step solution.**
\[
I=\int_0^1(1-x^2)\,dx+\int_1^2(x^2-1)\,dx
=\Big[x-\tfrac{x^3}{3}\Big]_0^1+\Big[\tfrac{x^3}{3}-x\Big]_1^2.
\]
First bracket: \(\big(1-\tfrac13\big)-0=\tfrac23\). Second bracket: \(\big(\tfrac83-2\big)-\big(\tfrac13-1\big)=\tfrac23-(-\tfrac23)=\tfrac43\).
\[
I=\tfrac23+\tfrac43=2.
\]

**Final answer.** \(I=2\).

**Verification.** Both pieces are positive (they are true areas), and \(\tfrac23+\tfrac43=2\). ✔

**What the student should learn.** For \(\int\lvert g\rvert\): locate the sign changes, split by Chasles, and integrate \(+g\) or \(-g\) accordingly so every piece is non-negative.

> Source: Mathematics Textbook 1, page 210 (absolute-value integral via Chasles).

#### Harder / composite example

**B1-U7-L3-E03**

**Problem.** Compute by parts (a) \(\displaystyle I=\int_{0}^{1}x\,e^{-x}\,dx\); and (b) find a primitive of \(\ln x\) on \(]0,+\infty[\), then compute \(\displaystyle J=\int_{1}^{e}\ln x\,dx\).

**Problem analysis.** (a) is a polynomial times \(e^{-x}\): take \(u=x\) (simplifies on differentiating), \(v'=e^{-x}\). (b) \(\ln x\) has no table primitive, so integrate by parts with \(u=\ln x\), \(v'=1\).

**Step-by-step solution.**

(a) \(u=x,\ v'=e^{-x}\Rightarrow u'=1,\ v=-e^{-x}\):
\[
I=\big[-x\,e^{-x}\big]_0^1-\int_0^1(-e^{-x})\,dx=\big[-x e^{-x}\big]_0^1+\int_0^1 e^{-x}\,dx
=-e^{-1}+\big[-e^{-x}\big]_0^1=-e^{-1}+(-e^{-1}+1)=1-\tfrac{2}{e}.
\]

(b) \(u=\ln x,\ v'=1\Rightarrow u'=\tfrac1x,\ v=x\):
\[
\int\ln x\,dx=x\ln x-\int x\cdot\tfrac1x\,dx=x\ln x-\int1\,dx=x\ln x-x.
\]
So \(x\mapsto x\ln x-x\) is a primitive. Hence
\[
J=\big[x\ln x-x\big]_1^e=(e\cdot1-e)-(1\cdot0-1)=0-(-1)=1.
\]

**Final answer.** \(I=1-\dfrac{2}{e}=\dfrac{e-2}{e}\approx0.264\); \(J=1\).

**Verification.** \(\big(x\ln x-x\big)'=\ln x\) ✓, so \(J=[\,\cdot\,]_1^e=1\). For \(I\): \(\big(-xe^{-x}-e^{-x}\big)'=-e^{-x}+xe^{-x}+e^{-x}=xe^{-x}\), and \([-xe^{-x}-e^{-x}]_0^1=(-2e^{-1})-(-1)=1-2/e\) ✓.

**What the student should learn.** Choose \(u\) to be the factor that simplifies (here \(x\) or \(\ln x\)); the lone \(\ln x\) is integrated by pairing it with \(v'=1\).

> Source: Mathematics Textbook 1, page 211 (\(\int_0^1 xe^{-x}\)) and page 215 (primitive of \(\ln x\)).

#### Common mistake

> **Common mistake:** in \(\int_a^b uv'=[uv]_a^b-\int_a^b u'v\), forgetting the **minus sign** in front of the remaining integral, or evaluating \([uv]_a^b\) with the bounds swapped. Also common: choosing \(u=e^{-x}\), \(v'=x\) in \(\int xe^{-x}\), which leads to \(\int \tfrac{x^2}{2}e^{-x}\) — **worse** than the original. Pick \(u\) so that \(u'\) is simpler.

#### Special cases
- **\(\int_a^a f=0\)** and **\(\int_b^a f=-\int_a^b f\):** direction matters.
- **\(\int e^x\sin x\), \(\int e^x\cos x\):** integrate by parts twice; you recover the original integral with a coefficient and solve algebraically.
- **Positivity:** if \(f\ge0\) on \([a,b]\) with \(a<b\), then \(\int_a^b f\ge0\); if \(f\ge g\), then \(\int_a^b f\ge\int_a^b g\) (Lesson 4, Theorem 8).
- **Dummy variable:** renaming \(x\) to \(t\) changes nothing.

#### Practice set
1. **(B1-U7-L3-P01)** Compute \(\displaystyle\int_{1}^{2}(3x^2-2x)\,dx\).
2. **(B1-U7-L3-P02)** Compute \(\displaystyle\int_{0}^{1}e^{2x}\,dx\).
3. **(B1-U7-L3-P03)** Compute \(\displaystyle\int_{1}^{2}\dfrac{2x}{x^2+1}\,dx\).
4. **(B1-U7-L3-P04)** Compute by parts \(\displaystyle\int_{0}^{1}(x+2)\,e^{x}\,dx\).
5. **(B1-U7-L3-P05)** *(near exam level)* Compute \(\displaystyle\int_{0}^{2}\dfrac{2x+1}{x^2+3x+2}\,dx\) using partial fractions.

#### Practice solutions
1. Primitive \(x^3-x^2\): \(\big[x^3-x^2\big]_1^2=(8-4)-(1-1)=4\).
2. Primitive \(\tfrac12e^{2x}\): \(\big[\tfrac12e^{2x}\big]_0^1=\tfrac12e^{2}-\tfrac12=\dfrac{e^2-1}{2}\).
3. The numerator \(2x\) is the derivative of \(x^2+1\), so a primitive is \(\ln(x^2+1)\): \(\big[\ln(x^2+1)\big]_1^2=\ln5-\ln2=\ln\tfrac52\).
4. \(u=x+2,\ v'=e^x\Rightarrow u'=1,\ v=e^x\): \(\big[(x+2)e^x\big]_0^1-\int_0^1 e^x\,dx=(3e-2)-\big[e^x\big]_0^1=(3e-2)-(e-1)=2e-1\).
5. Factor \(x^2+3x+2=(x+1)(x+2)\) and decompose \(\dfrac{2x+1}{(x+1)(x+2)}=\dfrac{-1}{x+1}+\dfrac{3}{x+2}\). Then \(\int_0^2\!\Big(\tfrac{3}{x+2}-\tfrac{1}{x+1}\Big)dx=\big[3\ln(x+2)-\ln(x+1)\big]_0^2=(3\ln4-\ln3)-(3\ln2-0)=3\ln2-\ln3=\ln\dfrac{8}{3}\). *(Check: \(3\ln4=6\ln2\), minus \(3\ln2\) gives \(3\ln2\); so \(\ln\tfrac{8}{3}\approx0.981\).)*

#### Lesson summary
- **Most important definition:** \(\int_a^b f=[F]_a^b=F(b)-F(a)\), independent of the primitive.
- **Most important formulas:** linearity, \(\int_b^a=-\int_a^b\), Chasles \(\int_a^c+\int_c^b=\int_a^b\), by parts \(\int uv'=[uv]-\int u'v\).
- **Most important condition:** \(f\) continuous on \([a,b]\); for by parts choose \(u\) that simplifies.
- **Most important pattern:** absolute value ⇒ split by Chasles; product ⇒ by parts.
- **Most common mistake:** sign error in \([F]_a^b\) or the minus in the by-parts formula.
- **Quick self-check:** \(\int_0^1 x e^x\,dx\)? *(Answer: \([xe^x]_0^1-\int_0^1 e^x=e-(e-1)=1\).)*

---

<a id="b1u7-l4"></a>
### Lesson 4: Areas and the volume of a solid of revolution

#### Core idea

This lesson gives the definite integral its geometric meaning. If \(f\ge0\) on \([a,b]\), the number \(\int_a^b f\) **is** the area of the region trapped between the curve \(C_f\), the \(x\)-axis, and the vertical lines \(x=a\), \(x=b\). The reason is elegant: the area function \(S(x)\) (area accumulated from \(a\) up to \(x\)) has derivative \(S'(x)=f(x)\), so \(S\) is the primitive of \(f\) vanishing at \(a\), and \(S(b)=\int_a^b f\).

Two extensions follow. When \(f\) may be **negative**, the integral gives a *signed* area, so the true geometric area is \(\int_a^b\lvert f\rvert\) (split at the sign changes). When two curves bound a region with \(f\) above \(g\), the area between them is \(\int_a^b(f-g)\). Finally, spinning the region under \(y=f(x)\) about the \(x\)-axis sweeps out a solid whose cross-section at \(x\) is a disk of radius \(f(x)\); adding the disk areas \(\pi f(x)^2\) gives the **volume of revolution** \(V=\pi\int_a^b f(x)^2\,dx\). (This last formula is presented in the book as an **activity/result**, not a numbered theorem.)

**How does a student recognise this lesson?** "Find the area of the region bounded by …", "the area between the curve and the \(x\)-axis", "the area between the two curves", or "the volume of the solid obtained by rotating … about the \(x\)-axis". The confusions are forgetting the absolute value when the curve dips below the axis, and getting the order \(f-g\) wrong (top minus bottom).

#### Prerequisite knowledge
- Computing definite integrals and using Chasles (Lesson 3).
- Finding where a curve meets the axis or where two curves intersect (solving \(f=0\) or \(f=g\)).
- Deciding which of two functions is larger on an interval.

#### Definitions

**Area, signed vs geometric.** For \(f\) continuous on \([a,b]\) (\(a\le b\)), \(\int_a^b f\) is the **signed area** (positive above the axis, negative below). The **geometric area** of the region between \(C_f\) and the \(x\)-axis is \(\int_a^b\lvert f\rvert\), measured in area units.

> Source: Mathematics Textbook 1, pages 217–220.

#### Formulas and properties

**Theorem 8 (positivity and order).** For \(f,g\) continuous on \([a,b]\), \(a<b\):
1. if \(f\ge0\) on \([a,b]\) then \(\displaystyle\int_a^b f\ge0\);
2. if \(f\ge g\) on \([a,b]\) then \(\displaystyle\int_a^b f\ge\int_a^b g\).

**Theorem 9 (area under a curve).** If \(f\ge0\) and continuous on \([a,b]\) (\(a\le b\)), the area of the region bounded by \(C_f\), the \(x\)-axis, and \(x=a\), \(x=b\) is
\[
\mathcal{A}=\int_a^b f(x)\,dx\qquad(\text{area units}).
\]

**Corollary 10 (curve below the axis).** If \(f\le0\) on \([a,b]\), the area is \(\displaystyle\mathcal{A}=-\int_a^b f=\int_a^b(-f)\). In general, over an interval where \(f\) changes sign, \(\displaystyle\mathcal{A}=\int_a^b\lvert f\rvert\) (split by Chasles at the sign changes).

**Corollary 11 (area between two curves).** If \(f\ge g\) on \([a,b]\), the area between \(C_f\), \(C_g\), and \(x=a\), \(x=b\) is
\[
\mathcal{A}=\int_a^b\big(f(x)-g(x)\big)\,dx.
\]

**Volume of a solid of revolution (activity result).** Rotating the region under \(y=f(x)\) (\(a\le x\le b\)) about the \(x\)-axis produces a solid of volume
\[
V=\pi\int_a^b\big[f(x)\big]^2\,dx.
\]

> **Important condition:** for "area between two curves" you must integrate **top minus bottom**. If \(f\) and \(g\) cross inside \([a,b]\), split the interval and use \(\lvert f-g\rvert\) on each piece.

#### Theorems and proofs

**Proof of Theorem 8 (the book proves this).** (1) A primitive \(F\) has \(F'=f\ge0\), so \(F\) is increasing on \([a,b]\); since \(a<b\), \(F(b)\ge F(a)\), i.e. \(\int_a^b f=F(b)-F(a)\ge0\). (2) Apply (1) to \(f-g\ge0\): \(\int_a^b(f-g)\ge0\), and by linearity \(\int_a^b f-\int_a^b g\ge0\).

**Proof of Theorem 9 (sketch, as in the book).** Let \(S(x)\) be the area under \(C_f\) from \(a\) to \(x\). Comparing with rectangles of height \(f\) on \([x,x+h]\) gives \(\dfrac{S(x+h)-S(x)}{h}\to f(x)\), so \(S'(x)=f(x)\); thus \(S\) is the primitive of \(f\) with \(S(a)=0\), and \(S(b)=\int_a^b f\).

> **Exam-style insight:** the positivity theorem is the standard route to prove an inequality like \(\sin b\le b\): write one side as an integral of a function bounded by the other, then integrate the inequality.

#### Recognising the idea and the solution method

- One curve, \(f\ge0\) on \([a,b]\) → \(\mathcal{A}=\int_a^b f\).
- One curve crossing the axis → find the roots, split, \(\mathcal{A}=\int\lvert f\rvert\).
- Two curves → find intersections and which is on top, \(\mathcal{A}=\int(f-g)\).
- Rotation about the \(x\)-axis → \(V=\pi\int_a^b f^2\).

**Standard algorithm (area / volume):**
1. Sketch or reason about the region; find the relevant bounds (roots of \(f\), or intersections \(f=g\)).
2. Decide the sign of \(f\) (or which of \(f,g\) is larger) on each sub-interval.
3. Set up \(\int f\), \(\int\lvert f\rvert\), \(\int(f-g)\), or \(\pi\int f^2\) accordingly.
4. Evaluate and give the result in area (or volume) units.

#### Basic example

**B1-U7-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** Find the area of the region bounded by the parabola \(y=4x(3-x)\), the \(x\)-axis, between its two \(x\)-intercepts.

**Why this method applies.** \(f(x)=4x(3-x)=12x-4x^2\) vanishes at \(x=0\) and \(x=3\), and \(f\ge0\) on \([0,3]\) (upward-opening region of a downward parabola). So Theorem 9 applies directly.

**Step-by-step solution.**
\[
\mathcal{A}=\int_0^3(12x-4x^2)\,dx=\Big[6x^2-\tfrac43x^3\Big]_0^3=\big(6\cdot9-\tfrac43\cdot27\big)-0=54-36=18.
\]

**Final answer.** \(\mathcal{A}=18\) area units.

**Verification.** \(\big(6x^2-\tfrac43x^3\big)'=12x-4x^2=f(x)\) ✓; \(f>0\) on \(]0,3[\), so the positive result is consistent.

**What the student should learn.** First find where the curve meets the axis (the bounds), confirm \(f\ge0\), then integrate.

> Source: Mathematics Textbook 1, page 218 (area under \(y=4x(3-x)\)).

#### Textbook-level example

**B1-U7-L4-E02**

**Problem.** Find the area of the region bounded by the two curves \(y=2x\) and \(y=x^2\).

**Problem analysis.** First find the intersections: \(2x=x^2\Rightarrow x^2-2x=0\Rightarrow x=0\) or \(x=2\). On \([0,2]\), which is on top? At \(x=1\): \(2\cdot1=2>1=1^2\), so the line \(f(x)=2x\) is above the parabola \(g(x)=x^2\). Use Corollary 11.

**Step-by-step solution.**
\[
\mathcal{A}=\int_0^2\big(2x-x^2\big)\,dx=\Big[x^2-\tfrac{x^3}{3}\Big]_0^2=\big(4-\tfrac83\big)-0=\tfrac{12-8}{3}=\tfrac43.
\]

**Final answer.** \(\mathcal{A}=\dfrac43\) area units.

**Verification.** \(\big(x^2-\tfrac{x^3}{3}\big)'=2x-x^2=f-g\ge0\) on \([0,2]\) ✓, so the area is positive as expected.

**What the student should learn.** For an area between curves: solve \(f=g\) for the bounds, test a point to see which is on top, then integrate top minus bottom.

> Source: Mathematics Textbook 1, page 220 (area between two curves, corollary 11).

#### Harder / composite example

**B1-U7-L4-E03**

**Problem.** (a) Find the volume of the solid obtained by rotating the region under \(y=\sqrt{x}\), \(0\le x\le4\), about the \(x\)-axis. (b) Using the positivity of the integral, prove that for every \(b\ge0\), \(\ \sin b\le b\).

**Problem analysis.** (a) Rotation about the \(x\)-axis: cross-sections are disks of radius \(f(x)=\sqrt x\); apply \(V=\pi\int_a^b f^2\). (b) Bound \(\cos t\le1\), then integrate from \(0\) to \(b\) using Theorem 8.

**Step-by-step solution.**

(a) \(f(x)=\sqrt x\Rightarrow f(x)^2=x\), so
\[
V=\pi\int_0^4\big(\sqrt x\big)^2\,dx=\pi\int_0^4 x\,dx=\pi\Big[\tfrac{x^2}{2}\Big]_0^4=\pi\cdot\tfrac{16}{2}=8\pi.
\]

(b) For all \(t\), \(\cos t\le1\). By positivity/order (Theorem 8), integrating on \([0,b]\) with \(b\ge0\):
\[
\int_0^b\cos t\,dt\le\int_0^b 1\,dt\ \Longrightarrow\ \big[\sin t\big]_0^b\le\big[t\big]_0^b\ \Longrightarrow\ \sin b\le b.
\]

**Final answer.** (a) \(V=8\pi\) volume units. (b) \(\sin b\le b\) for all \(b\ge0\).

**Verification.** (a) \(\int_0^4 x\,dx=8\), times \(\pi\) gives \(8\pi\) ✓. (b) at \(b=0\) both sides are \(0\); the inequality \(\sin b\le b\) is the classical bound. ✓

**What the student should learn.** Rotation about the \(x\)-axis ⇒ square the function inside \(\pi\int\). Inequalities: bound the integrand, then integrate the inequality between the same limits.

> Source: Mathematics Textbook 1, page 217 (inequality via positivity) and pages 222–223 (volume of revolution activity).

#### Common mistake

> **Common mistake:** computing an area as \(\int_a^b f\) when the curve goes **below** the axis, and getting a negative number or a wrong (too small) value. Area is never negative: use \(\int_a^b\lvert f\rvert\), splitting at the roots of \(f\). Likewise, for two curves, integrating \(g-f\) instead of \(f-g\) flips the sign — always subtract **bottom from top**.

#### Special cases
- **\(f\le0\) throughout:** \(\mathcal{A}=-\int_a^b f\).
- **\(f\) changes sign:** split at the roots; \(\mathcal{A}=\int_a^b\lvert f\rvert\).
- **Curves that cross inside \([a,b]\):** split where \(f=g\) and use \(\lvert f-g\rvert\) on each piece.
- **Volume about the \(x\)-axis only:** \(V=\pi\int f^2\) is for rotation about the \(x\)-axis; a different axis needs a different set-up.

#### Practice set
1. **(B1-U7-L4-P01)** Find the area under \(y=x^2\) between \(x=0\) and \(x=3\).
2. **(B1-U7-L4-P02)** Find the area between \(y=x\) and \(y=x^2\) on \([0,1]\).
3. **(B1-U7-L4-P03)** Find the area between \(y=\sqrt{x}\) and \(y=x^2\) on \([0,1]\).
4. **(B1-U7-L4-P04)** Find the volume of the solid obtained by rotating the region under \(y=x^2\), \(0\le x\le1\), about the \(x\)-axis.
5. **(B1-U7-L4-P05)** *(near exam level)* Find the total geometric area between \(y=x^3-x\) and the \(x\)-axis on \([-1,1]\). *(hint: the curve crosses the axis at \(x=0\))*

#### Practice solutions
1. \(\mathcal{A}=\int_0^3 x^2\,dx=\big[\tfrac{x^3}{3}\big]_0^3=\tfrac{27}{3}=9\) area units.
2. On \([0,1]\), \(x\ge x^2\), so \(\mathcal{A}=\int_0^1(x-x^2)\,dx=\big[\tfrac{x^2}{2}-\tfrac{x^3}{3}\big]_0^1=\tfrac12-\tfrac13=\tfrac16\).
3. On \([0,1]\), \(\sqrt x\ge x^2\), so \(\mathcal{A}=\int_0^1(\sqrt x-x^2)\,dx=\big[\tfrac23x^{3/2}-\tfrac{x^3}{3}\big]_0^1=\tfrac23-\tfrac13=\tfrac13\).
4. \(V=\pi\int_0^1(x^2)^2\,dx=\pi\int_0^1 x^4\,dx=\pi\big[\tfrac{x^5}{5}\big]_0^1=\dfrac{\pi}{5}\) volume units.
5. Let \(f(x)=x^3-x=x(x-1)(x+1)\). On \([-1,0]\), \(f\ge0\); on \([0,1]\), \(f\le0\). By symmetry the two lobes have equal area:
\[
\mathcal{A}=\int_{-1}^{0}(x^3-x)\,dx+\int_{0}^{1}\!\!\big(-(x^3-x)\big)\,dx.
\]
Compute \(\int_0^1(x-x^3)\,dx=\big[\tfrac{x^2}{2}-\tfrac{x^4}{4}\big]_0^1=\tfrac12-\tfrac14=\tfrac14\); the other lobe is also \(\tfrac14\). Hence \(\mathcal{A}=\tfrac14+\tfrac14=\tfrac12\) area units.

#### Lesson summary
- **Most important formulas:** \(\mathcal{A}=\int_a^b f\) (if \(f\ge0\)), \(\mathcal{A}=\int_a^b\lvert f\rvert\) (general), \(\mathcal{A}=\int_a^b(f-g)\) (\(f\ge g\)), \(V=\pi\int_a^b f^2\).
- **Most important results:** positivity/order (Theorem 8) and the area interpretation (Theorem 9).
- **Most important condition:** area needs \(\lvert\cdot\rvert\) when the curve dips below the axis; between curves, integrate top minus bottom.
- **Most important pattern:** find bounds by solving \(f=0\) or \(f=g\), decide the sign, then integrate.
- **Most common mistake:** forgetting the absolute value / wrong order \(f-g\).
- **Quick self-check:** the volume from rotating \(y=1\) on \([0,3]\) about the \(x\)-axis? *(Answer: \(\pi\int_0^3 1\,dx=3\pi\), a cylinder.)*

---

<a id="b1-u7-test"></a>
### Chapter summary & review test — Unit 7

#### Chapter summary
This unit reversed differentiation. A **primitive** \(F\) of \(f\) satisfies \(F'=f\); every continuous function has one, and all primitives form the family \(F+c\). We built a **table** of primitives and three **composite rules** (\(u'u^n\), \(u'/u\), \(u'e^u\)). The **definite integral** \(\int_a^b f=F(b)-F(a)\) is independent of the chosen primitive and obeys linearity, the sign swap, **Chasles**, positivity/order, and **integration by parts**. Geometrically, \(\int_a^b f\) (for \(f\ge0\)) is the area under a curve; \(\int_a^b\lvert f\rvert\) the general area; \(\int_a^b(f-g)\) the area between curves (\(f\ge g\)); and \(V=\pi\int_a^b f^2\) the volume of a solid of revolution about the \(x\)-axis.

#### Essential formulas
\[
\int x^n=\frac{x^{n+1}}{n+1},\quad \int\frac1x=\ln\lvert x\rvert,\quad \int e^x=e^x,\quad \int\sin x=-\cos x,\quad \int\cos x=\sin x,
\]
\[
\int u'u^n=\frac{u^{n+1}}{n+1},\quad \int\frac{u'}{u}=\ln\lvert u\rvert,\quad \int u'e^u=e^u,\quad \int_a^b f=\big[F\big]_a^b,
\]
\[
\int_a^c f+\int_c^b f=\int_a^b f,\quad \int_a^b uv'=[uv]_a^b-\int_a^b u'v,\quad \mathcal{A}=\int_a^b\lvert f\rvert,\quad V=\pi\int_a^b f^2.
\]

#### Essential theorems/results
- Existence: a continuous function has a primitive (Theorem 2); all primitives are \(F+c\) (Theorem 1).
- Linearity + Chasles (Theorems 5, 6); integration by parts (Theorem 7).
- Positivity/order of the integral (Theorem 8).
- Area under a curve (Theorem 9), below the axis (Corollary 10), between curves (Corollary 11); volume of revolution (activity).

#### Main problem patterns
Verify/compute a primitive; primitive through a point; definite integral; absolute-value integral (Chasles); integration by parts (incl. the double-IBP for \(e^x\sin x\)); area under/between curves; volume of revolution; inequality by positivity.

#### Connections between the chapter's ideas
Primitives (Lessons 1–2) feed the definite integral (Lesson 3), which powers the geometric applications (Lesson 4). The chain rule reversed gives the composite rules; the product rule reversed gives integration by parts; the sign of the derivative gives the positivity theorem, which in turn justifies the area interpretation.

#### Recommended study order
Primitives (definition, family \(F+c\)) ← table + composite rules ← definite integral + linearity/Chasles ← integration by parts ← areas ← volume of revolution ← inequalities via positivity.

#### Chapter checklist
- [ ] I find primitives by the table and the three composite rules, and check by differentiating.
- [ ] I compute definite integrals and split absolute values by Chasles.
- [ ] I apply integration by parts (including twice for \(e^x\sin x\)).
- [ ] I compute areas (one curve, between curves) and volumes of revolution.
- [ ] I prove an inequality using the positivity of the integral.

#### Chapter review test
1. Find the primitive \(F\) of \(f(x)=3x^2-4x+1\) on \(\mathbb{R}\) with \(F(0)=2\).
2. Find a primitive of \(f(x)=\dfrac{2x}{x^2+1}+e^{3x}\) on \(\mathbb{R}\).
3. Compute \(\displaystyle\int_{-1}^{2}(x^2-2x)\,dx\).
4. Compute \(\displaystyle\int_{0}^{2}\lvert x-1\rvert\,dx\) (split by Chasles).
5. Compute by parts \(\displaystyle\int_{0}^{1}x\,e^{2x}\,dx\).
6. Find the area of the region bounded by \(y=4-x^2\) and the \(x\)-axis.
7. Find the volume of the solid obtained by rotating the region under \(y=\sqrt{x}\), \(0\le x\le4\), about the \(x\)-axis.
8. Compute \(\displaystyle\int_{1}^{e}\dfrac{\ln x}{x^2}\,dx\) by parts.

#### Model solutions for the chapter review test
1. General primitive \(F(x)=x^3-2x^2+x+c\); \(F(0)=c=2\); so \(F(x)=x^3-2x^2+x+2\). Check \(F'=3x^2-4x+1\). ✔
2. \(\dfrac{2x}{x^2+1}=\dfrac{u'}{u}\) with \(u=x^2+1\Rightarrow\ln(x^2+1)\); and \(\int e^{3x}=\tfrac13e^{3x}\). So \(F(x)=\ln(x^2+1)+\tfrac13e^{3x}\).
3. Primitive \(\tfrac{x^3}{3}-x^2\): \(\big[\tfrac{x^3}{3}-x^2\big]_{-1}^{2}=\big(\tfrac83-4\big)-\big(-\tfrac13-1\big)=-\tfrac43-(-\tfrac43)=0\).
4. \(x-1\le0\) on \([0,1]\), \(\ge0\) on \([1,2]\): \(\int_0^1(1-x)\,dx+\int_1^2(x-1)\,dx=\big[x-\tfrac{x^2}{2}\big]_0^1+\big[\tfrac{x^2}{2}-x\big]_1^2=\tfrac12+\tfrac12=1\).
5. \(u=x,\ v'=e^{2x}\Rightarrow u'=1,\ v=\tfrac12e^{2x}\): \(\big[\tfrac{x}{2}e^{2x}\big]_0^1-\int_0^1\tfrac12e^{2x}\,dx=\tfrac12e^{2}-\big[\tfrac14e^{2x}\big]_0^1=\tfrac12e^2-\big(\tfrac14e^2-\tfrac14\big)=\tfrac14e^2+\tfrac14=\dfrac{e^2+1}{4}\).
6. \(y=4-x^2\) meets the axis at \(x=\pm2\), and \(4-x^2\ge0\) on \([-2,2]\): \(\mathcal{A}=\int_{-2}^{2}(4-x^2)\,dx=\big[4x-\tfrac{x^3}{3}\big]_{-2}^{2}=\big(8-\tfrac83\big)-\big(-8+\tfrac83\big)=\tfrac{16}{3}+\tfrac{16}{3}=\dfrac{32}{3}\) area units.
7. \(V=\pi\int_0^4(\sqrt x)^2\,dx=\pi\int_0^4 x\,dx=\pi\big[\tfrac{x^2}{2}\big]_0^4=8\pi\) volume units.
8. \(u=\ln x,\ v'=x^{-2}\Rightarrow u'=\tfrac1x,\ v=-\tfrac1x\): \(\int_1^e\dfrac{\ln x}{x^2}\,dx=\big[-\tfrac{\ln x}{x}\big]_1^e+\int_1^e\tfrac{1}{x^2}\,dx=\big(-\tfrac1e-0\big)+\big[-\tfrac1x\big]_1^e=-\tfrac1e+\big(-\tfrac1e+1\big)=1-\dfrac{2}{e}\).

---

<a id="book-2"></a>
# Mathematics Textbook 2

**Visible title:** Mathematics — Part 2, Third Secondary, Scientific track.
**Filename:** `12-sci-math-2.pdf` — **Page count:** 196 pages (printed page = PDF page).
**Units:** seven units covering **space geometry, complex numbers, combinatorics, and probability**, ending with **general exams** (pages 186–193).

**Where this book sits in the curriculum:** it complements the Analysis syllabus with relatively independent but exam-critical topics. It begins with geometry in space (vectors, scalar product, lines and planes), then introduces **complex numbers** and their elegant geometric applications, and moves on to **counting and probability** (combinatorics, then probability and random variables). The complex-numbers problem and the probability problem appear in nearly every exam session.

**How the units connect:**

```text
Vectors in space ─► Scalar product ─► Lines and planes (analytic space geometry)

Complex numbers ─► their applications in geometry (affixes, distances, angles, transformations)
   (relies on the trigonometric/exponential form using sine/cosine/exp from Book 1)

Combinatorics (counting) ─► Probability ─► the binomial random variable
```

---

<a id="b2-u1"></a>
## Unit 1: Vectors in Space

> Source: Mathematics Textbook 2, pages 6–37.

### Unit overview

This unit lifts everything you learned about plane vectors into the third dimension and turns geometry into computation:

- **Vectors in space:** the same operations (Chasles' relation, addition, multiplication by a scalar) now live in space. The genuinely new idea is **coplanarity**: three vectors may or may not lie in one plane.
- **Linear dependence and a basis:** three vectors are **linearly dependent exactly when they are coplanar**. Three vectors that are **not** coplanar form a **basis**, and every vector then has a **unique** triple of components \((x,y,z)\).
- **Frame and coordinates:** fixing an origin \(O\) with a basis \((\vec i,\vec j,\vec k)\) gives a **frame** \((O;\vec i,\vec j,\vec k)\); each point gets coordinates \(M(x,y,z)\), and \(\vec{AB}\) is read off by subtracting coordinates.
- **Distance:** in an **orthonormal** frame the norm and the distance \(AB\) come from a 3-D Pythagoras, which also gives the equation of a **sphere**.
- **Barycenter:** the weighted centre of a system of points; its coordinates are the **weighted average** of the coordinates. Reduction, homogeneity and associativity make it a powerful tool for collinearity, concurrency and locus problems.

**Why it matters:** the next units (analytic geometry of lines and planes, the scalar and cross products) are built entirely on components in a frame; the barycenter reappears in loci and in "centre of mass" style problems.

**Prerequisites:** plane vectors and Chasles' relation, solving \(2\times2\) and \(3\times3\) linear systems, the Pythagorean theorem, midpoint of a segment.

**Main question types:** decide whether three vectors are coplanar / form a basis; find components, a missing vertex of a parallelogram, a midpoint; compute a distance and the nature of a triangle or tetrahedron; write a sphere's equation; locate a barycenter and use it for collinearity or concurrency.

### Unit concept map

```text
Vectors in Space
├── Operations (Lesson 1)
│   ├── Chasles: AB + BC = AC
│   ├── addition & scalar multiple k·u
│   └── coplanar vectors (three vectors parallel to one plane)
├── Linear dependence & basis (Lesson 2)
│   ├── dependent  ⇔  coplanar  ⇔  w = x·u + y·v
│   ├── independent ⇔ not coplanar ⇔ (x u + y v + z w = 0 ⇒ x=y=z=0)
│   └── basis = 3 non-coplanar vectors ⇒ unique components (x,y,z)
├── Frame & coordinates (Lesson 3)
│   ├── frame (O; i, j, k),  M(x,y,z)
│   ├── AB = (xB−xA, yB−yA, zB−zA)
│   └── midpoint = average of endpoints
├── Distance (Lesson 4)  [orthonormal frame]
│   ├── ‖u‖ = √(a²+b²+c²)
│   ├── AB = √((xB−xA)²+(yB−yA)²+(zB−zA)²)
│   └── sphere: (x−a)²+(y−b)²+(z−c)² = R²
└── Barycenter (Lesson 5)
    ├── Σ αᵢ·GAᵢ = 0   (Σαᵢ ≠ 0)
    ├── coordinates = weighted average
    └── reduction · homogeneity · associativity · isobarycenter
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(\vec{AB}+\vec{BC}=\vec{AC}\) | Chasles' relation | any three points | — | works for any number of hops |
| \(\vec w=x\vec u+y\vec v\) | \(x,y\) real | \(\vec u,\vec v\) not collinear | if \(\vec u,\vec v\) collinear the plane is not fixed | this is the coplanarity/dependence test |
| \(\vec u=x\vec i+y\vec j+z\vec k\) | \((x,y,z)\) components | \((\vec i,\vec j,\vec k)\) a basis | if the three are coplanar | the triple is **unique** |
| \(\vec{AB}=(x_B-x_A,\,y_B-y_A,\,z_B-z_A)\) | coordinates of \(A,B\) | a frame is fixed | — | always "end minus start" |
| \(M\!\left(\dfrac{x_A+x_B}{2},\dfrac{y_A+y_B}{2},\dfrac{z_A+z_B}{2}\right)\) | \(M\) midpoint of \([AB]\) | a frame is fixed | — | isobarycenter of \(A,B\) |
| \(\|\vec u\|=\sqrt{a^2+b^2+c^2}\) | \(\vec u(a,b,c)\) | **orthonormal** frame | oblique/non-unit frame | needs \(\vec i\perp\vec j\perp\vec k\), all unit |
| \(AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}\) | distance | orthonormal frame | oblique frame | \(=\|\vec{AB}\|\) |
| \((x-a)^2+(y-b)^2+(z-c)^2=R^2\) | centre \((a,b,c)\), radius \(R\) | orthonormal frame, \(R>0\) | if \(R^2<0\) no sphere | locus of \(M\) with \(SM=R\) |
| \(x_G=\dfrac{\sum\alpha_i x_i}{\sum\alpha_i}\) (idem \(y,z\)) | \(\alpha_i\) weights | \(\sum\alpha_i\neq0\) | if \(\sum\alpha_i=0\) | coordinates = weighted average |
| \(\big(\sum\alpha_i\big)\vec{MG}=\sum\alpha_i\vec{MA_i}\) | any point \(M\) | \(\sum\alpha_i\neq0\) | if \(\sum\alpha_i=0\) | reduction formula |

### Unit learning checklist

- [ ] I can state Chasles' relation and add vectors in space.
- [ ] I decide whether three vectors are coplanar by solving \(\vec w=x\vec u+y\vec v\).
- [ ] I recognise that a basis = three non-coplanar vectors giving unique components.
- [ ] I find \(\vec{AB}\)'s components, a midpoint, and a missing parallelogram vertex.
- [ ] I compute distances and classify a triangle or tetrahedron.
- [ ] I write the equation of a sphere from its centre and radius (or a diameter).
- [ ] I find a barycenter's coordinates and use reduction / associativity.
- [ ] I never forget the condition \(\sum\alpha_i\neq0\), nor that the norm formula needs an orthonormal frame.

---

<a id="b2u1-l1"></a>
### Lesson 1: Generalities and operations on vectors

#### Core idea

A **vector in space** is exactly what it was in the plane, only free to point in any of three dimensions: it is fixed by a **direction** (its supporting line), a **sense**, and a **length** (its norm \(\|\vec{AB}\|\), equal to the distance \(AB\)). All the algebra you know survives unchanged — **Chasles' relation**, addition, and multiplication by a real number all read the same way. What is genuinely new appears only at the very end of the lesson and dominates the next one: three vectors in space need not lie in a single plane. This is the notion of **coplanar vectors**.

Why do we need this? Because a plane no longer "fills" space. In the plane, any two non-collinear vectors already reach every point; in space, you need a *third* independent direction. So the whole unit is about measuring how many independent directions a set of vectors spans — and coplanarity is the first test of that.

**How does a student recognise this lesson?** When the problem lives on a cube, a parallelepiped or a tetrahedron and asks you to "express \(\vec{AG}\) using the edges", "show two vectors are equal", or "simplify a sum of vectors". The usual confusion is mixing up **collinear** (same line) with **coplanar** (same plane): the first is about *two* vectors, the second only becomes a real condition for *three*.

#### Prerequisite knowledge
- Plane vectors: equality, sum, opposite, multiplication by a scalar.
- Chasles' relation in the plane and the parallelogram rule.
- The midpoint of a segment and its vector characterisation \(\vec{IA}+\vec{IB}=\vec0\).

#### Definitions

**Definition (vector in space).** For two points \(A,B\), the vector \(\vec{AB}\) is defined by its **support** (the line \((AB)\)), its **sense** (from \(A\) to \(B\)), and its **length** \(\|\vec{AB}\|=AB\). The **zero vector** is \(\vec0=\vec{AA}\), of length \(0\).

**Definition (equal vectors).** \(\vec{AB}=\vec{CD}\) means they have the same direction, sense and length; equivalently \(ABDC\) is a parallelogram (note the vertex order), equivalently \(\vec{AC}=\vec{BD}\).

**Definition (coplanar vectors).** Three vectors \(\vec u,\vec v,\vec w\) are **coplanar** (parallel to one plane) when, drawn from a common point \(A\) as \(\vec{AB},\vec{AC},\vec{AM}\), the points \(A,B,C,M\) lie in one plane. Any **two** vectors are always coplanar; coplanarity is a real restriction only from **three** vectors on.

> Source: Mathematics Textbook 2, pages 6–9.

#### Formulas and properties

**Chasles' relation.** For any three points \(A,B,C\):
\[
\vec{AB}+\vec{BC}=\vec{AC},\qquad\text{hence}\qquad \vec{AB}=-\vec{BA}.
\]
It telescopes over any chain: \(\vec{AB}+\vec{BC}+\vec{CD}=\vec{AD}\).

**Parallelogram / equalities.**
\[
\vec{AB}=\vec{DC}\iff ABCD\text{ is a parallelogram}\iff \vec{AD}=\vec{BC}.
\]

**Multiplication by a scalar.** For a real \(k\), \(k\vec{AB}\) is the vector with the same support, the same sense if \(k>0\) (opposite if \(k<0\)), and length \(|k|\cdot AB\). It is defined by the point \(M\) with \(\vec{AM}=k\vec{AB}\); the points \(A,B,M\) are then collinear.

**Midpoint.** \(I\) is the midpoint of \([AB]\) \(\iff \vec{IA}+\vec{IB}=\vec0 \iff \vec{AI}=\tfrac12\vec{AB}\); and for any point \(M\), \(\vec{MA}+\vec{MB}=2\vec{MI}\).

> **Important condition:** two vectors are **collinear** when \(\vec v=k\vec u\) for a single real \(k\) (one line). Three vectors being **coplanar** is a *different, weaker* condition (one plane). Never treat them as the same.

#### Recognising the idea and the solution method

- **If asked** to express \(\vec{AG}\) on a solid → walk from \(A\) to \(G\) through known edges with Chasles: \(\vec{AG}=\vec{AB}+\vec{BC}+\vec{CG}\), etc.
- **If asked** to prove an equality of vectors → reduce both sides to the same combination of a few base vectors and compare, or show the corresponding quadrilateral is a parallelogram.
- **If asked** about a midpoint → use \(\vec{MA}+\vec{MB}=2\vec{MI}\) to collapse two vectors into one.

**Standard algorithm (vector identity on a solid):**
1. Choose a convenient starting point (often \(A\)).
2. Rewrite every vector as a walk along known edges using Chasles.
3. Replace midpoints by \(\tfrac12(\dots)\) and collect like terms.
4. Compare with the target and conclude.

#### Basic example

**B2-U1-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** In the cube \(ABCDEFGH\) (top face \(EFGH\) directly above \(ABCD\), with \(\vec{AE}\) the vertical edge), express \(\vec{AG}\) in terms of \(\vec{AB},\vec{AD},\vec{AE}\).

**Why this method applies.** \(G\) is the vertex opposite \(A\); a Chasles walk along three mutually perpendicular edges reaches it directly.

**Step-by-step solution.** Going \(A\to B\to C\to G\):
\[
\vec{AG}=\vec{AB}+\vec{BC}+\vec{CG}.
\]
On the cube \(\vec{BC}=\vec{AD}\) (parallel equal edges) and \(\vec{CG}=\vec{AE}\) (both vertical edges of the same length and sense). Hence
\[
\vec{AG}=\vec{AB}+\vec{AD}+\vec{AE}.
\]

**Final answer.** \(\vec{AG}=\vec{AB}+\vec{AD}+\vec{AE}\).

**Verification.** \(\vec{AB},\vec{AD},\vec{AE}\) are the three edges from \(A\); their sum is the main diagonal \(\vec{AG}\) — the diagonal of the box built on the three edges, as expected.

**What the student should learn.** On a box, the space diagonal from a vertex is the sum of the three edges at that vertex; always convert unknown edges to edges at your base point.

> Source: created in the style of the cube exercises on pages 6–9.

#### Textbook-level example

**B2-U1-L1-E02**

**Problem.** Let \(ABCD\) be a tetrahedron and let \(I,J\) be the midpoints of \([AB]\) and \([CD]\). Prove that \(\vec{AC}+\vec{BD}=2\vec{IJ}\) and \(\vec{AD}+\vec{BC}=2\vec{IJ}\).

**Problem analysis.** We must turn \(\vec{IJ}\) into vectors involving the vertices. The key relations are the midpoint identities \(\vec{IA}+\vec{IB}=\vec0\) and \(\vec{JC}+\vec{JD}=\vec0\); Chasles does the rest.

**Step-by-step solution.** Insert \(I\) and \(J\) with Chasles in \(\vec{AC}\) and \(\vec{BD}\):
\[
\vec{AC}=\vec{AI}+\vec{IJ}+\vec{JC},\qquad \vec{BD}=\vec{BI}+\vec{IJ}+\vec{JD}.
\]
Adding,
\[
\vec{AC}+\vec{BD}=2\vec{IJ}+\underbrace{(\vec{AI}+\vec{BI})}_{=\,-(\vec{IA}+\vec{IB})=\vec0}+\underbrace{(\vec{JC}+\vec{JD})}_{=\vec0}=2\vec{IJ}.
\]
The same computation with \(\vec{AD}=\vec{AI}+\vec{IJ}+\vec{JD}\) and \(\vec{BC}=\vec{BI}+\vec{IJ}+\vec{JC}\) gives \(\vec{AD}+\vec{BC}=2\vec{IJ}\).

**Final answer.** \(\vec{AC}+\vec{BD}=\vec{AD}+\vec{BC}=2\vec{IJ}\).

**Verification.** Both results share the term \(2\vec{IJ}\); consistency demands \(\vec{AC}+\vec{BD}=\vec{AD}+\vec{BC}\), i.e. \(\vec{AC}-\vec{AD}=\vec{BC}-\vec{BD}\), i.e. \(\vec{DC}=\vec{DC}\). ✔

**What the student should learn.** To bring out a segment joining two midpoints, insert both midpoints by Chasles and let the two midpoint sums cancel.

> Source: Mathematics Textbook 2, pages 7–8 (midpoint/Chasles identities on a tetrahedron).

#### Common mistake

> **Common mistake:** writing \(\vec{AB}=\vec{CD}\Rightarrow ABCD\) is a parallelogram in that letter order. The correct reading is that \(ABDC\) is the parallelogram (the equal vectors are two **opposite** sides \(AB\) and \(DC\)). Getting the vertex order wrong produces a "crossed" (self-intersecting) quadrilateral and wrong later coordinates.

#### Special cases
- **Zero vector:** \(\vec{AA}=\vec0\) has no direction; it is collinear and coplanar with everything.
- **Collinear vectors:** if \(\vec v=k\vec u\), the two share a line — automatically coplanar with any third vector through that line's plane.
- **\(k=0\) or \(k=1\):** \(0\cdot\vec u=\vec0\) and \(1\cdot\vec u=\vec u\); a negative \(k\) reverses the sense.

#### Practice set
1. **(B2-U1-L1-P01)** In the cube \(ABCDEFGH\), simplify \(\vec{AB}+\vec{BF}+\vec{FG}\).
2. **(B2-U1-L1-P02)** Prove that for any four points, \(\vec{AB}+\vec{CD}=\vec{AD}+\vec{CB}\).
3. **(B2-U1-L1-P03)** Show that \(\vec u(2,-4,6)\) and \(\vec v(-1,2,-3)\) are collinear, and give the factor \(k\) with \(\vec v=k\vec u\). *(uses components, previewing Lesson 3)*
4. **(B2-U1-L1-P04)** In a tetrahedron \(ABCD\), \(I\) is the midpoint of \([BC]\). Express \(\vec{AI}\) in terms of \(\vec{AB}\) and \(\vec{AC}\).
5. **(B2-U1-L1-P05)** *(near exam level)* In the cube \(ABCDEFGH\), \(M\) is the midpoint of \([FG]\). Express \(\vec{AM}\) in terms of \(\vec{AB},\vec{AD},\vec{AE}\).

#### Practice solutions
1. Chasles telescopes: \(\vec{AB}+\vec{BF}+\vec{FG}=\vec{AG}\).
2. \(\vec{AB}+\vec{CD}=(\vec{AD}+\vec{DB})+(\vec{CB}+\vec{BD})=\vec{AD}+\vec{CB}+(\vec{DB}+\vec{BD})=\vec{AD}+\vec{CB}\), since \(\vec{DB}+\vec{BD}=\vec0\).
3. \(\vec v=-\tfrac12\vec u\): indeed \(-\tfrac12(2,-4,6)=(-1,2,-3)\). So they are collinear with \(k=-\tfrac12\).
4. \(I\) midpoint of \([BC]\Rightarrow \vec{AI}=\tfrac12(\vec{AB}+\vec{AC})\) (from \(\vec{AB}+\vec{AC}=2\vec{AI}\)).
5. Reach \(F\) first: \(\vec{AF}=\vec{AB}+\vec{AE}\). Then \(\vec{FG}=\vec{AD}\) (parallel equal edges), so \(\vec{FM}=\tfrac12\vec{FG}=\tfrac12\vec{AD}\). Hence \(\vec{AM}=\vec{AF}+\vec{FM}=\vec{AB}+\vec{AE}+\tfrac12\vec{AD}\).

#### Lesson summary
- **Most important definition:** a vector in space = direction + sense + length; three vectors are **coplanar** when they fit in one plane.
- **Most important formula:** Chasles \(\vec{AB}+\vec{BC}=\vec{AC}\), and \(\vec{MA}+\vec{MB}=2\vec{MI}\) for a midpoint.
- **Most important condition:** collinear (one line, two vectors) \(\neq\) coplanar (one plane, three vectors).
- **Most important pattern:** express any vector on a solid as a Chasles walk along known edges.
- **Most common mistake:** wrong vertex order in "\(\vec{AB}=\vec{DC}\Rightarrow\) parallelogram".
- **Quick self-check:** on the cube, what is \(\vec{AB}+\vec{AD}+\vec{AE}\)? *(Answer: the diagonal \(\vec{AG}\).)*

---

<a id="b2u1-l2"></a>
### Lesson 2: Linear dependence of three vectors and a basis

#### Core idea

This is the heart of the unit. In the plane, two non-collinear vectors are enough to build every other vector; in space you sometimes need a **third** direction, and sometimes you do not — it depends on whether the three vectors are squeezed into a single plane. Three vectors are **coplanar** precisely when one of them is a **linear combination** of the other two, and this is exactly the meaning of **linear dependence**. When the three vectors escape every common plane, they are **linearly independent** and form a **basis**: from then on, *every* vector of space has one and only one set of components \((x,y,z)\).

So the lesson answers two twin questions with one test: "Are these three vectors coplanar?" and "Do these three vectors form a basis?" — they are logical opposites.

**How does a student recognise this lesson?** Whenever you are asked "are \(\vec u,\vec v,\vec w\) coplanar?", "do they form a basis?", "is \(\vec{AD}\) a combination of \(\vec{AB},\vec{AC}\)?", or "are the points \(A,B,C,D\) coplanar?". The confusing part is that *dependence* is proved by finding a nonzero combination equal to \(\vec0\), while *independence* is proved by showing only the trivial combination works.

#### Prerequisite knowledge
- Coplanar vectors and collinear vectors from Lesson 1.
- Solving a \(2\times2\) linear system and checking a third equation for consistency.
- The idea of a plane through three points \(A,B,C\).

#### Definitions

**Definition (linear dependence).** Three vectors \(\vec u,\vec v,\vec w\) are **linearly dependent** when one of them is a linear combination of the other two, i.e. there exist reals \(x,y\) with
\[
\vec w=x\,\vec u+y\,\vec v .
\]
Equivalently, there exist reals \((x,y,z)\) **not all zero** with \(x\vec u+y\vec v+z\vec w=\vec0\).

**Definition (linear independence).** \(\vec u,\vec v,\vec w\) are **linearly independent** when the only way to get \(x\vec u+y\vec v+z\vec w=\vec0\) is \(x=y=z=0\). This is the exact negation of dependence.

**Definition (basis of space).** Three **linearly independent** (equivalently, **non-coplanar**) vectors form a **basis** of space, written \((\vec u,\vec v,\vec w)\) or \((\vec i,\vec j,\vec k)\).

> Source: Mathematics Textbook 2, pages 10–13.

#### Formulas and properties

**Coplanarity criterion.** With \(\vec u,\vec v\) **not collinear**, a vector \(\vec w\) is coplanar with them **iff** there is a (unique) pair \((x,y)\) with \(\vec w=x\vec u+y\vec v\). Geometrically, taking \(\vec{AB}=\vec u,\vec{AC}=\vec v,\vec{AM}=\vec w\): \(M\in(ABC)\iff \vec{AM}=x\vec{AB}+y\vec{AC}\).

**Chain of equivalences (three vectors).**
\[
\text{dependent}\iff\text{coplanar}\iff \vec w=x\vec u+y\vec v\iff \big(A,B,C,M\text{ coplanar}\big).
\]
\[
\text{independent}\iff\text{not coplanar}\iff\text{basis}\iff \big(x\vec u+y\vec v+z\vec w=\vec0\Rightarrow x=y=z=0\big).
\]

> **Important condition:** the criterion \(\vec w=x\vec u+y\vec v\) assumes \(\vec u,\vec v\) are **not collinear**. If \(\vec u,\vec v\) are themselves collinear, they already fail to fix a plane, and the three vectors are automatically dependent.

> **Warning:** "coplanar" is about a **plane**, not a line. Two vectors alone are *always* coplanar — the condition only bites for three vectors.

#### Theorems and proofs

**Theorem (existence and uniqueness of components).** If \((\vec i,\vec j,\vec k)\) is a basis of space, then every vector \(\vec u\) can be written **uniquely** as
\[
\vec u=x\,\vec i+y\,\vec j+z\,\vec k .
\]
The unique triple \((x,y,z)\) is called the **components** of \(\vec u\) in the basis.

*Proof of uniqueness (the student should know this).* Suppose \(\vec u=x\vec i+y\vec j+z\vec k=x'\vec i+y'\vec j+z'\vec k\). Subtracting,
\[
(x-x')\vec i+(y-y')\vec j+(z-z')\vec k=\vec0 .
\]
Because \((\vec i,\vec j,\vec k)\) is a basis, it is linearly independent, so every coefficient is zero: \(x=x',\,y=y',\,z=z'\). Hence the triple is unique. (Existence — that *some* triple works — is the defining property of a basis.)

#### Recognising the idea and the solution method

**Standard algorithm (are \(\vec u,\vec v,\vec w\) coplanar / a basis?):**
1. Check \(\vec u,\vec v\) are **not collinear** (their components are not proportional). If they are collinear, the three are dependent — stop.
2. Set up \(\vec w=x\vec u+y\vec v\); this is three scalar equations in the two unknowns \(x,y\).
3. Solve two of the equations for \(x,y\).
4. **Substitute** into the third equation:
   - if it **holds**, the system is consistent → the three are **coplanar / dependent**;
   - if it **fails**, no \((x,y)\) work → the three are **independent → a basis**.

> **Exam-style insight:** an over-determined system (3 equations, 2 unknowns) is the signature of a coplanarity test. The whole decision rests on that one substitution into the third equation.

#### Basic example

**B2-U1-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Are the vectors \(\vec u(1,2,-1)\), \(\vec v(2,-1,3)\), \(\vec w(4,3,1)\) coplanar? If not, do they form a basis?

**Why this method applies.** Three vectors given by components: apply the criterion \(\vec w=x\vec u+y\vec v\) and test the third equation.

**Step-by-step solution.** First, \(\vec u,\vec v\) are not collinear (\(1/2\neq2/(-1)\)). Write \(\vec w=x\vec u+y\vec v\):
\[
\begin{cases} x+2y=4 &(1)\\ 2x-y=3 &(2)\\ -x+3y=1 &(3)\end{cases}
\]
From (2), \(y=2x-3\). Substitute into (1): \(x+2(2x-3)=4\Rightarrow5x=10\Rightarrow x=2\), so \(y=1\).
Test (3): \(-x+3y=-2+3(1)=1\). ✔ It holds.

**Final answer.** The system is consistent (\(x=2,\,y=1\)), so \(\vec w=2\vec u+\vec v\): the three vectors are **coplanar / linearly dependent**, and therefore do **not** form a basis.

**Verification.** \(2\vec u+\vec v=2(1,2,-1)+(2,-1,3)=(4,3,-2+3)=(4,3,1)=\vec w\). ✔

**What the student should learn.** Solve two equations, then let the third equation be the judge: if it is satisfied, the vectors are coplanar.

> Source: created in the style of the coplanarity/basis tests on pages 10–13.

#### Textbook-level example

**B2-U1-L2-E02**

**Problem.** Show that \(\vec i(1,0,0)\), \(\vec j(0,1,0)\), \(\vec w(1,1,1)\) form a basis of space, then find the components of \(\vec a(3,-2,5)\) in this basis.

**Problem analysis.** To prove a basis, show the three are **not** coplanar (the criterion fails). Then "find the components" means solve \(\vec a=x\vec i+y\vec j+z\vec w\).

**Step-by-step solution.** *Basis:* try \(\vec w=x\vec i+y\vec j\). Coordinate-wise: \(1=x,\ 1=y,\ 1=0\). The third equation \(1=0\) is impossible, so \(\vec w\) is **not** a combination of \(\vec i,\vec j\): the three are not coplanar, hence a **basis**.

*Components of \(\vec a\):* solve \(\vec a=x\vec i+y\vec j+z\vec w\):
\[
\begin{cases} x+z=3\\ y+z=-2\\ z=5 \end{cases}\Rightarrow z=5,\ x=3-5=-2,\ y=-2-5=-7 .
\]

**Final answer.** \((\vec i,\vec j,\vec w)\) is a basis, and \(\vec a=-2\vec i-7\vec j+5\vec w\); its components are \((-2,-7,5)\).

**Verification.** \(-2(1,0,0)-7(0,1,0)+5(1,1,1)=(-2+5,\,-7+5,\,5)=(3,-2,5)=\vec a\). ✔

**What the student should learn.** A single impossible equation (\(1=0\)) already proves non-coplanarity, hence a basis; components are then recovered by back-substitution.

> Source: Mathematics Textbook 2, pages 11–13.

#### Common mistake

> **Common mistake:** concluding "not a basis" the moment the two chosen equations have a solution — without checking the **third** equation. Two equations in two unknowns almost always have a solution; the coplanarity verdict depends entirely on whether that solution *also* satisfies the third equation. Skipping it gives the wrong answer half the time.

#### Special cases
- **Two of the three are collinear** \(\Rightarrow\) the three are automatically coplanar (dependent).
- **One vector is \(\vec0\)** \(\Rightarrow\) dependent (take its coefficient \(=1\), the others \(0\)).
- **Coordinate basis** \((\vec i,\vec j,\vec k)\): the "natural" basis in which components are read directly.

#### Practice set
1. **(B2-U1-L2-P01)** Are \(\vec u(1,1,0)\), \(\vec v(0,1,1)\), \(\vec w(1,2,1)\) coplanar?
2. **(B2-U1-L2-P02)** Show that \(\vec u(1,-1,2)\), \(\vec v(2,0,1)\), \(\vec w(1,1,1)\) form a basis.
3. **(B2-U1-L2-P03)** For which real \(m\) are \(\vec u(1,0,1)\), \(\vec v(0,1,1)\), \(\vec w(1,1,m)\) coplanar?
4. **(B2-U1-L2-P04)** Show that \((\vec i,\vec j,\vec k)\) with \(\vec i(1,2,3),\vec j(0,1,4),\vec k(0,0,5)\) is a basis, then find the components of \(\vec a(1,3,13)\).
5. **(B2-U1-L2-P05)** *(near exam level)* The points \(A(1,0,0),B(0,1,0),C(0,0,1),D(1,1,1)\) — are they coplanar? *(Hint: test \(\vec{AD}=x\vec{AB}+y\vec{AC}\).)*

#### Practice solutions
1. \(\vec w=x\vec u+y\vec v\): \(x=1,\ x+y=2,\ y=1\Rightarrow x=y=1\), and \(x+y=2\) holds. **Coplanar** (\(\vec w=\vec u+\vec v\)).
2. Try \(\vec w=x\vec u+y\vec v\): from \(x+2y=1\) and \(-x=1\Rightarrow x=-1,\ y=1\); test the third \(2x+y=-2+1=-1\neq1\). Impossible ⇒ not coplanar ⇒ **basis**.
3. \(\vec w=x\vec u+y\vec v\): \(x=1,\ y=1\) (from first two coordinates \(x=1,y=1\)); third gives \(x+y=m\Rightarrow m=2\). **Coplanar iff \(m=2\)**.
4. Lower/upper-triangular independent columns: \(\vec k=x\vec i+y\vec j\) needs \(x=0\) (1st), \(2x+y=0\Rightarrow y=0\) (2nd), then \(3x+4y=5\Rightarrow0=5\) impossible ⇒ **basis**. Components of \(\vec a\): \(x\vec i+y\vec j+z\vec k=\vec a\) gives \(x=1,\ 2x+y=3\Rightarrow y=1,\ 3x+4y+5z=13\Rightarrow3+4+5z=13\Rightarrow z=\tfrac{6}{5}\). So \(\vec a=\vec i+\vec j+\tfrac65\vec k\), components \(\left(1,1,\tfrac65\right)\).
5. \(\vec{AB}=(-1,1,0),\ \vec{AC}=(-1,0,1),\ \vec{AD}=(0,1,1)\). Solve \(\vec{AD}=x\vec{AB}+y\vec{AC}\): \(-x-y=0,\ x=1,\ y=1\Rightarrow x=1,y=1\) but then \(-x-y=-2\neq0\). Impossible ⇒ \(A,B,C,D\) are **not coplanar** (they form a tetrahedron).

#### Lesson summary
- **Most important definition:** dependent \(\iff\) coplanar \(\iff\vec w=x\vec u+y\vec v\); independent \(\iff\) basis.
- **Most important theorem:** a basis gives every vector **unique** components \((x,y,z)\).
- **Most important condition:** the test needs \(\vec u,\vec v\) non-collinear; the verdict is the **third** equation.
- **Most important pattern:** solve two equations, substitute into the third.
- **Most common mistake:** forgetting to check the third equation.
- **Quick self-check:** if \(\vec w=2\vec u+3\vec v\), are \(\vec u,\vec v,\vec w\) a basis? *(Answer: no — they are coplanar/dependent.)*

---

<a id="b2u1-l3"></a>
### Lesson 3: Coordinate system and components in space

#### Core idea

A **frame** turns geometry into arithmetic. Fix an origin \(O\) and a basis \((\vec i,\vec j,\vec k)\); then every point \(M\) is pinned down by the unique components of \(\vec{OM}\), called its **coordinates** \(M(x,y,z)\). Once points have numbers, vectors between them are found by pure subtraction, sums and scalar multiples are done coordinate by coordinate, and geometric questions (collinearity, parallelograms, midpoints) become tidy algebra. This is the bridge from Lesson 2's abstract components to concrete calculation, and it underlies every later analytic-geometry topic.

**How does a student recognise this lesson?** When points are given as triples \((x,y,z)\) and the task is "find the components of \(\vec{AB}\)", "find the midpoint", "find \(D\) so that \(ABCD\) is a parallelogram", or "are these points collinear?". The classic confusion is the direction of subtraction: \(\vec{AB}\) is **B minus A**, never the reverse.

#### Prerequisite knowledge
- Basis and unique components (Lesson 2).
- Chasles' relation, to justify \(\vec{AB}=\vec{OB}-\vec{OA}\).
- Solving simple linear equations and reading proportional triples.

#### Definitions

**Definition (frame).** A **frame** of space is \((O;\vec i,\vec j,\vec k)\), where \(O\) is the **origin** and \((\vec i,\vec j,\vec k)\) is a basis. It is **orthogonal** if the three vectors are mutually perpendicular, and **orthonormal** if in addition they are unit vectors: \(\|\vec i\|=\|\vec j\|=\|\vec k\|=1\).

**Definition (coordinates of a point).** For a point \(M\) there is a unique triple \((x,y,z)\) with
\[
\vec{OM}=x\vec i+y\vec j+z\vec k ,
\]
written \(M(x,y,z)\): \(x\) the **abscissa**, \(y\) the **ordinate**, \(z\) the **applicate** (height).

> Source: Mathematics Textbook 2, pages 14–17.

#### Formulas and properties

**Components of \(\vec{AB}\).** If \(A(x_A,y_A,z_A)\) and \(B(x_B,y_B,z_B)\), then
\[
\vec{AB}=(x_B-x_A,\;y_B-y_A,\;z_B-z_A),
\]
because \(\vec{AB}=\vec{OB}-\vec{OA}\).

**Operations in components.** For \(\vec u(x,y,z)\), \(\vec v(x',y',z')\), real \(k\):
\[
\vec u+\vec v=(x+x',\,y+y',\,z+z'),\qquad k\vec u=(kx,ky,kz),\qquad \vec u=\vec v\iff x=x',\,y=y',\,z=z'.
\]

**Collinearity.** \(\vec u\) and \(\vec v\) are collinear \(\iff\) their components are proportional:
\[
\frac{x'}{x}=\frac{y'}{y}=\frac{z'}{z}\quad(=k),
\]
handling zero components by the cross-product form \(xy'=x'y,\ yz'=y'z,\ xz'=x'z\).

**Midpoint.** The midpoint \(M\) of \([AB]\) has coordinates
\[
M\!\left(\frac{x_A+x_B}{2},\;\frac{y_A+y_B}{2},\;\frac{z_A+z_B}{2}\right).
\]

> **Common mistake:** writing \(\vec{AB}=(x_A-x_B,\dots)\). The rule is always **coordinates of the tip minus coordinates of the tail**: \(\vec{AB}=(x_B-x_A,\dots)\).

#### Recognising the idea and the solution method

**Standard algorithm (missing vertex of a parallelogram \(ABCD\)):**
1. Recall the parallelogram condition \(\vec{AB}=\vec{DC}\).
2. Write \(\vec{DC}=(x_C-x_D,\dots)\) and set it equal to \(\vec{AB}\) coordinate-wise.
3. Solve for \(D\): \(x_D=x_C-(x_B-x_A)\), and similarly for \(y_D,z_D\).
4. Verify by checking \(\vec{AD}=\vec{BC}\).

**For collinearity of \(A,B,C\):** compute \(\vec{AB},\vec{AC}\); the points are collinear iff these are proportional.

#### Basic example

**B2-U1-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Given \(A(1,-2,3)\) and \(B(4,0,-1)\), find the components of \(\vec{AB}\) and the coordinates of the midpoint \(I\) of \([AB]\).

**Why this method applies.** Both tasks are direct applications of the coordinate formulas.

**Step-by-step solution.**
\[
\vec{AB}=(4-1,\;0-(-2),\;-1-3)=(3,\,2,\,-4).
\]
\[
I\!\left(\frac{1+4}{2},\;\frac{-2+0}{2},\;\frac{3+(-1)}{2}\right)=\left(\frac52,\,-1,\,1\right).
\]

**Final answer.** \(\vec{AB}=(3,2,-4)\); \(I\left(\tfrac52,-1,1\right)\).

**Verification.** \(\vec{AI}=\left(\tfrac52-1,\,-1+2,\,1-3\right)=\left(\tfrac32,1,-2\right)=\tfrac12(3,2,-4)=\tfrac12\vec{AB}\). ✔

**What the student should learn.** Components subtract (tip − tail); the midpoint averages. A quick check is \(\vec{AI}=\tfrac12\vec{AB}\).

> Source: created in the style of the coordinate examples on pages 14–17.

#### Textbook-level example

**B2-U1-L3-E02**

**Problem.** Given \(A(1,-2,3)\), \(B(4,0,-1)\), \(C(5,1,2)\), find the coordinates of \(D\) so that \(ABCD\) is a parallelogram.

**Problem analysis.** \(ABCD\) is a parallelogram \(\iff\vec{AB}=\vec{DC}\). We know \(A,B,C\); solve for \(D\).

**Step-by-step solution.** From E01, \(\vec{AB}=(3,2,-4)\). Now \(\vec{DC}=(5-x_D,\,1-y_D,\,2-z_D)\). Setting \(\vec{DC}=\vec{AB}\):
\[
5-x_D=3,\quad 1-y_D=2,\quad 2-z_D=-4\;\Rightarrow\; x_D=2,\ y_D=-1,\ z_D=6 .
\]

**Final answer.** \(D(2,-1,6)\).

**Verification.** \(\vec{AD}=(2-1,\,-1+2,\,6-3)=(1,1,3)\) and \(\vec{BC}=(5-4,\,1-0,\,2+1)=(1,1,3)\); since \(\vec{AD}=\vec{BC}\), \(ABCD\) is indeed a parallelogram. ✔

**What the student should learn.** For a parallelogram \(ABCD\), the equal opposite sides are \(\vec{AB}=\vec{DC}\); solving that vector equation locates the missing vertex, and \(\vec{AD}=\vec{BC}\) is the independent check.

> Source: Mathematics Textbook 2, pages 14–15.

#### Common mistake

> **Common mistake:** for a parallelogram \(ABCD\), setting \(\vec{AB}=\vec{CD}\) instead of \(\vec{AB}=\vec{DC}\). The sides in order are \(AB\) and \(DC\) (opposite sides, same sense); \(\vec{CD}=-\vec{DC}\), so the wrong equation places \(D\) on the wrong side and breaks the figure.

#### Special cases
- **A coordinate is \(0\):** proportionality of components must be read with the cross-product form \(xy'=x'y,\dots\) to avoid dividing by zero.
- **\(A=B\):** \(\vec{AB}=\vec0=(0,0,0)\).
- **Axis-aligned vector:** e.g. \(\vec u(0,0,z)\) is along \(\vec k\) (vertical).

#### Practice set
1. **(B2-U1-L3-P01)** Given \(A(2,1,-1)\), \(B(-1,3,0)\), find the components of \(\vec{AB}\) and \(\vec{BA}\).
2. **(B2-U1-L3-P02)** Find the midpoint of \([AB]\) for \(A(0,4,-2)\), \(B(6,-2,4)\).
3. **(B2-U1-L3-P03)** Are \(A(1,1,1)\), \(B(3,4,5)\), \(C(5,7,9)\) collinear?
4. **(B2-U1-L3-P04)** With \(A(1,0,2)\), \(B(3,-1,1)\), \(C(0,2,4)\), find \(D\) so that \(ABCD\) is a parallelogram.
5. **(B2-U1-L3-P05)** *(near exam level)* Compute \(\vec w=2\vec{AB}-\tfrac12\vec{CD}\) where \(A(1,0,0),B(0,1,0),C(2,2,2),D(2,0,4)\).

#### Practice solutions
1. \(\vec{AB}=(-1-2,\,3-1,\,0+1)=(-3,2,1)\); \(\vec{BA}=-\vec{AB}=(3,-2,-1)\).
2. \(\left(\tfrac{0+6}{2},\tfrac{4-2}{2},\tfrac{-2+4}{2}\right)=(3,1,1)\).
3. \(\vec{AB}=(2,3,4)\), \(\vec{AC}=(4,6,8)=2(2,3,4)=2\vec{AB}\). Proportional ⇒ **collinear**.
4. \(\vec{AB}=(2,-1,-1)\). \(\vec{DC}=\vec{AB}\Rightarrow D=C-\vec{AB}=(0-2,\,2+1,\,4+1)=(-2,3,5)\). Check \(\vec{AD}=(-3,3,3)=\vec{BC}=(-3,3,3)\). ✔ So \(D(-2,3,5)\).
5. \(\vec{AB}=(-1,1,0)\), \(\vec{CD}=(0,-2,2)\). \(2\vec{AB}=(-2,2,0)\), \(\tfrac12\vec{CD}=(0,-1,1)\). \(\vec w=(-2-0,\,2+1,\,0-1)=(-2,3,-1)\).

#### Lesson summary
- **Most important definition:** a frame \((O;\vec i,\vec j,\vec k)\) gives each point unique coordinates \((x,y,z)\).
- **Most important formula:** \(\vec{AB}=(x_B-x_A,y_B-y_A,z_B-z_A)\); midpoint = average.
- **Most important condition:** collinearity = proportional components.
- **Most important pattern:** missing parallelogram vertex from \(\vec{AB}=\vec{DC}\).
- **Most common mistake:** subtracting tail − tip, or using \(\vec{AB}=\vec{CD}\).
- **Quick self-check:** midpoint of \([A(0,0,0),B(2,4,6)]\)? *(Answer: \((1,2,3)\).)*

---

<a id="b2u1-l4"></a>
### Lesson 4: Distance in space

#### Core idea

Once a frame is **orthonormal**, lengths become computable. The norm of a vector is a **3-D Pythagoras**: \(\|\vec u\|=\sqrt{a^2+b^2+c^2}\), obtained by applying the plane Pythagorean theorem twice (once in a horizontal plane, once vertically). From it, the **distance** between two points is the norm of the joining vector, and the set of points at a fixed distance \(R\) from a centre \(S\) is a **sphere** with a clean equation. This is the measuring tool of the unit: it decides whether a triangle is isosceles or right, whether a tetrahedron is regular, and it produces sphere equations.

**How does a student recognise this lesson?** When the frame is called orthonormal and the task is "compute \(\|\vec u\|\)", "find the distance \(AB\)", "what is the nature of triangle/tetrahedron \(\dots\)", or "write the equation of the sphere". The pitfall is applying \(\sqrt{a^2+b^2+c^2}\) in a frame that is **not** orthonormal.

#### Prerequisite knowledge
- Components of a vector (Lesson 3).
- The Pythagorean theorem in the plane.
- The definition of an orthonormal frame.

#### Definitions

**Definition (norm in an orthonormal frame).** In an orthonormal frame, the **norm** of \(\vec u(a,b,c)\) is
\[
\|\vec u\|=\sqrt{a^{2}+b^{2}+c^{2}} .
\]

**Definition (distance).** The **distance** between \(A(x_A,y_A,z_A)\) and \(B(x_B,y_B,z_B)\) is
\[
AB=\|\vec{AB}\|=\sqrt{(x_B-x_A)^{2}+(y_B-y_A)^{2}+(z_B-z_A)^{2}} .
\]

> Source: Mathematics Textbook 2, pages 18–20.

#### Formulas and properties

**Sphere.** The sphere of centre \(S(a,b,c)\) and radius \(R\) is the set of points \(M(x,y,z)\) with \(SM=R\), i.e. \(SM^2=R^2\):
\[
(x-a)^{2}+(y-b)^{2}+(z-c)^{2}=R^{2}.
\]
Centred at the origin: \(x^2+y^2+z^2=R^2\). If \([AB]\) is a **diameter**, the centre is the midpoint of \([AB]\) and \(R=\tfrac12 AB\).

**Nature of a triangle / tetrahedron by distances.** Compute the squared side lengths and compare: equal squares ⇒ equal sides (isosceles / equilateral); a relation \(AB^2+BC^2=AC^2\) ⇒ a right angle at \(B\) (converse of Pythagoras).

> **Important condition:** the formulas \(\|\vec u\|=\sqrt{a^2+b^2+c^2}\) and the distance formula hold **only in an orthonormal frame**. In an oblique frame they are false.

#### Theorems and proofs

**Theorem (norm formula).** In an orthonormal frame, \(\|\vec u\|=\sqrt{a^2+b^2+c^2}\) for \(\vec u(a,b,c)\).

*Proof (the book proves it; the student should follow it).* Represent \(\vec u=\vec{OM}\) with \(M(a,b,c)\). Let \(N(a,b,0)\) be the projection of \(M\) on the plane \((O\vec i\vec j)\). In that plane, \(ON^2=a^2+b^2\) (plane Pythagoras). The segment \([NM]\) is vertical of length \(|c|\) and perpendicular to the plane, so triangle \(ONM\) is right-angled at \(N\):
\[
OM^2=ON^2+NM^2=(a^2+b^2)+c^2 .
\]
Taking square roots gives \(\|\vec u\|=OM=\sqrt{a^2+b^2+c^2}\). \(\blacksquare\)

#### Recognising the idea and the solution method

**Standard algorithm (nature of a tetrahedron \(ABCD\)):**
1. Compute the six squared edge lengths \(AB^2,AC^2,AD^2,BC^2,BD^2,CD^2\).
2. Compare them: which are equal? (isosceles faces, equilateral faces, regular tetrahedron if all six equal).
3. Test right angles with the converse of Pythagoras on each face if needed.
4. State the nature precisely.

#### Basic example

**B2-U1-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** In an orthonormal frame, compute \(\|\vec u\|\) for \(\vec u(2,-3,6)\), and the distance \(AB\) for \(A(1,0,2)\), \(B(3,-1,5)\).

**Why this method applies.** Direct use of the norm and distance formulas in an orthonormal frame.

**Step-by-step solution.**
\[
\|\vec u\|=\sqrt{2^2+(-3)^2+6^2}=\sqrt{4+9+36}=\sqrt{49}=7 .
\]
\[
\vec{AB}=(2,-1,3),\qquad AB=\sqrt{2^2+(-1)^2+3^2}=\sqrt{4+1+9}=\sqrt{14}.
\]

**Final answer.** \(\|\vec u\|=7\); \(AB=\sqrt{14}\).

**Verification.** \(4+9+36=49\) and \(\sqrt{49}=7\); \(4+1+9=14\). ✔

**What the student should learn.** Square each component, add, take the root — and only in an orthonormal frame.

> Source: created in the style of the norm examples on pages 18–19.

#### Textbook-level example

**B2-U1-L4-E02**

**Problem.** In an orthonormal frame, consider \(A(0,0,0)\), \(B(4,0,0)\), \(C(0,4,0)\), \(D(0,0,4)\). Show that \(ABCD\) is a tetrahedron and determine its nature.

**Problem analysis.** "Tetrahedron" means the four points are not coplanar; the "nature" comes from comparing the six edge lengths.

**Step-by-step solution.** The edges from \(A\):
\[
AB^2=4^2=16,\quad AC^2=16,\quad AD^2=16\;\Rightarrow\;AB=AC=AD=4 .
\]
The three "far" edges:
\[
BC^2=4^2+4^2=32,\quad BD^2=32,\quad CD^2=32\;\Rightarrow\;BC=BD=CD=4\sqrt2 .
\]
The points are not coplanar: \(\vec{AB}(4,0,0),\vec{AC}(0,4,0),\vec{AD}(0,0,4)\) are the (independent) coordinate directions, so \(ABCD\) is a genuine tetrahedron. Moreover, at \(A\),
\[
\vec{AB}\perp\vec{AC},\quad \vec{AC}\perp\vec{AD},\quad \vec{AB}\perp\vec{AD}
\]
(each pair has a zero dot product of components), so the three edges at \(A\) are mutually perpendicular.

**Final answer.** \(ABCD\) is a **trirectangular tetrahedron**: three equal edges \(AB=AC=AD=4\) meeting at right angles at \(A\), and an **equilateral** opposite face \(BCD\) with side \(4\sqrt2\).

**Verification.** Converse of Pythagoras on face \(ABC\): \(AB^2+AC^2=16+16=32=BC^2\), confirming the right angle at \(A\) — and by symmetry for the other two faces at \(A\). ✔

**What the student should learn.** Compute all six squared edges first; equalities reveal isosceles/equilateral features, and \(AB^2+AC^2=BC^2\) certifies the right angle. Three equal perpendicular edges at one vertex ⇒ trirectangular tetrahedron with an equilateral opposite face.

> Source: Mathematics Textbook 2, page 19 (nature-of-a-tetrahedron example).

#### Harder / composite example

**B2-U1-L4-E03**

**Problem.** In an orthonormal frame, write the equation of the sphere \((\Sigma)\) of centre \(S(1,-2,4)\) and radius \(R=5\). Then find the equation of the sphere \((\Sigma')\) centred at the origin and passing through \(P(2,-1,2)\).

**Problem analysis.** A point is on a sphere iff its distance to the centre equals the radius; square to remove the root. For \((\Sigma')\), the radius is \(OP\).

**Step-by-step solution.** For \((\Sigma)\): \(M(x,y,z)\in(\Sigma)\iff SM^2=R^2\):
\[
(x-1)^2+(y+2)^2+(z-4)^2=25 .
\]
For \((\Sigma')\): first \(R'^2=OP^2=2^2+(-1)^2+2^2=4+1+4=9\), so
\[
x^2+y^2+z^2=9 .
\]

**Final answer.** \((\Sigma):\,(x-1)^2+(y+2)^2+(z-4)^2=25\); \((\Sigma'):\,x^2+y^2+z^2=9\) (radius \(3\)).

**Verification.** \(P\) on \((\Sigma')\): \(4+1+4=9\). ✔ Centre of \((\Sigma)\) satisfies \(0=25\)? No — the centre is inside, not on, the sphere, as it should be.

**What the student should learn.** Build a sphere's equation from \(SM^2=R^2\); when only a point through which it passes is given, compute the radius as that distance first.

> Source: Mathematics Textbook 2, page 20 (sphere equations).

#### Common mistake

> **Common mistake:** using \(\|\vec u\|=\sqrt{a^2+b^2+c^2}\) in a frame that is **not orthonormal**. The formula relies on \(\vec i,\vec j,\vec k\) being mutually perpendicular unit vectors; in an oblique or non-unit frame it gives a wrong length. Always confirm the frame is orthonormal before computing distances.

#### Special cases
- **Diameter given:** centre = midpoint of \([AB]\), radius \(=\tfrac12 AB\).
- **Sphere through the origin, centre \(S\):** its equation \((x-a)^2+(y-b)^2+(z-c)^2=a^2+b^2+c^2\).
- **Degenerate "sphere":** if the right-hand side is \(0\), the locus is the single centre; if negative, it is empty.

#### Practice set
1. **(B2-U1-L4-P01)** Compute \(\|\vec u\|\) for \(\vec u(1,2,2)\) and \(\|\vec v\|\) for \(\vec v(2,-3,6)\).
2. **(B2-U1-L4-P02)** Find the distance \(AB\) for \(A(1,-1,0)\), \(B(3,2,6)\).
3. **(B2-U1-L4-P03)** Determine the nature of triangle \(ABC\): \(A(1,0,0)\), \(B(0,2,0)\), \(C(0,0,2)\).
4. **(B2-U1-L4-P04)** Write the equation of the sphere of centre \(S(0,3,-1)\) and radius \(2\).
5. **(B2-U1-L4-P05)** *(near exam level)* \([AB]\) is a diameter of a sphere, with \(A(1,2,3)\), \(B(5,-2,1)\). Find the centre, the radius, and the equation of the sphere.

#### Practice solutions
1. \(\|\vec u\|=\sqrt{1+4+4}=\sqrt9=3\); \(\|\vec v\|=\sqrt{4+9+36}=\sqrt{49}=7\).
2. \(\vec{AB}=(2,3,6)\), \(AB=\sqrt{4+9+36}=\sqrt{49}=7\).
3. \(AB^2=1+4=5\), \(AC^2=1+4=5\), \(BC^2=4+4=8\). Since \(AB=AC=\sqrt5\), the triangle is **isosceles** (apex \(A\)); it is not right (\(5+5\neq8\), \(5+8\neq5\)).
4. \(x^2+(y-3)^2+(z+1)^2=4\).
5. Centre \(=\) midpoint \(=\left(\tfrac{1+5}{2},\tfrac{2-2}{2},\tfrac{3+1}{2}\right)=(3,0,2)\). \(AB=\sqrt{4^2+(-4)^2+(-2)^2}=\sqrt{16+16+4}=\sqrt{36}=6\), so \(R=3\). Equation: \((x-3)^2+y^2+(z-2)^2=9\).

#### Lesson summary
- **Most important definition:** norm \(\|\vec u\|=\sqrt{a^2+b^2+c^2}\) in an orthonormal frame.
- **Most important formula:** distance \(AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}\); sphere \((x-a)^2+(y-b)^2+(z-c)^2=R^2\).
- **Most important condition:** the frame must be orthonormal.
- **Most important pattern:** classify a figure via squared edge lengths + converse of Pythagoras.
- **Most common mistake:** using the norm formula in a non-orthonormal frame.
- **Quick self-check:** distance from \(O\) to \(M(2,3,6)\)? *(Answer: \(\sqrt{4+9+36}=7\).)*

---

<a id="b2u1-l5"></a>
### Lesson 5: Barycenter

#### Core idea

The **barycenter** is the "balance point" of a system of weighted points \((A_1,\alpha_1),\dots,(A_n,\alpha_n)\): the unique point \(G\) that makes the weighted sum of the vectors \(\vec{GA_i}\) vanish. Its single most useful feature is that its **coordinates are the weighted average** of the points' coordinates — so a geometric centre becomes an arithmetic mean. Three tools make it powerful: **reduction** (rewrite \(\sum\alpha_i\vec{MA_i}\) as \((\sum\alpha_i)\vec{MG}\) for any point \(M\)), **homogeneity** (scaling all weights changes nothing), and **associativity** (replace part of the system by its own barycenter). When the weights are equal you get the **isobarycenter**: the midpoint of two points, the centroid of a triangle, the centre of a tetrahedron.

**How does a student recognise this lesson?** When you see weighted points, a relation like \(\alpha\vec{GA}+\beta\vec{GB}+\gamma\vec{GC}=\vec0\), a request to "construct \(G\)", to prove three points are **collinear** or three lines **concurrent**, or to find a **locus** as a coefficient varies. The recurring trap is forgetting the existence condition \(\sum\alpha_i\neq0\).

#### Prerequisite knowledge
- Chasles' relation and the midpoint identity.
- Coordinates and components (Lesson 3).
- Solving for a point from a vector equation.

#### Definitions

**Definition (barycenter).** Given weighted points \((A,\alpha),(B,\beta),(C,\gamma),(D,\delta)\) with
\[
\alpha+\beta+\gamma+\delta\neq0,
\]
the **barycenter** \(G\) is the unique point such that
\[
\alpha\,\vec{GA}+\beta\,\vec{GB}+\gamma\,\vec{GC}+\delta\,\vec{GD}=\vec0 .
\]
(For three points drop the \(D\)-term.) The weights need not be equal, and may be negative, as long as their sum is nonzero.

**Definition (isobarycenter).** When all weights are equal, \(G\) is the **isobarycenter** (equibarycenter): the midpoint of two points, the centroid of a triangle, the centre of a tetrahedron.

> Source: Mathematics Textbook 2, pages 21–27.

#### Formulas and properties

**Reduction (position formula).** For **any** point \(M\),
\[
\big(\alpha+\beta+\gamma+\delta\big)\,\vec{MG}=\alpha\,\vec{MA}+\beta\,\vec{MB}+\gamma\,\vec{MC}+\delta\,\vec{MD}.
\]

**Coordinates of \(G\).** Taking \(M=O\) (the origin), the coordinates are the weighted average:
\[
x_G=\frac{\alpha x_A+\beta x_B+\gamma x_C+\delta x_D}{\alpha+\beta+\gamma+\delta},\quad
y_G=\frac{\sum\alpha_i y_i}{\sum\alpha_i},\quad
z_G=\frac{\sum\alpha_i z_i}{\sum\alpha_i}.
\]

**Homogeneity.** Multiplying every weight by the same nonzero real \(k\) leaves \(G\) unchanged: \(G\{(A_i,\alpha_i)\}=G\{(A_i,k\alpha_i)\}\).

**Associativity.** A subgroup of points may be replaced by their partial barycenter carrying the **sum** of their weights. E.g. if \(G_1=\mathrm{bar}\{(A,\alpha),(B,\beta)\}\) with \(\alpha+\beta\neq0\), then
\[
\mathrm{bar}\{(A,\alpha),(B,\beta),(C,\gamma)\}=\mathrm{bar}\{(G_1,\alpha+\beta),(C,\gamma)\}.
\]

**Isobarycenter.** With all weights equal, \(\displaystyle \vec{MG}=\frac1n\sum_{i=1}^{n}\vec{MA_i}\); its coordinates are the plain average of the coordinates.

> **Important condition:** everything above requires \(\sum\alpha_i\neq0\). If the weights sum to zero, no barycenter exists (the vector \(\sum\alpha_i\vec{MA_i}\) is then independent of \(M\) and generally nonzero).

#### Theorems and proofs

**Theorem (existence, uniqueness and reduction).** If \(\sum\alpha_i\neq0\), the barycenter \(G\) exists, is unique, and satisfies \((\sum\alpha_i)\vec{MG}=\sum\alpha_i\vec{MA_i}\) for every \(M\).

*Proof (the student should know this derivation).* Start from \(\sum\alpha_i\vec{GA_i}=\vec0\) and insert \(M\) by Chasles, \(\vec{GA_i}=\vec{GM}+\vec{MA_i}\):
\[
\vec0=\sum\alpha_i\vec{GA_i}=\Big(\sum\alpha_i\Big)\vec{GM}+\sum\alpha_i\vec{MA_i}.
\]
Since \(\vec{GM}=-\vec{MG}\), this rearranges to \(\big(\sum\alpha_i\big)\vec{MG}=\sum\alpha_i\vec{MA_i}\). As \(\sum\alpha_i\neq0\), this determines \(\vec{MG}\) uniquely (hence \(G\) uniquely) for any chosen \(M\); taking \(M=O\) gives the coordinate formulas. \(\blacksquare\)

#### Recognising the idea and the solution method

**Standard algorithm (find / construct a barycenter):**
1. Check \(\sum\alpha_i\neq0\).
2. **Coordinates route:** apply \(x_G=\dfrac{\sum\alpha_i x_i}{\sum\alpha_i}\) (and \(y_G,z_G\)) directly.
3. **Vector/construction route:** use reduction with a convenient \(M\) (often one of the given points) to get \(\vec{AG}=\dfrac1{\sum\alpha_i}\sum\alpha_i\vec{AA_i}\), then place \(G\).
4. For several points, simplify with **associativity** (replace a subgroup by its partial barycenter).

#### Basic example

**B2-U1-L5-E01** — *Original explanatory example created for this guide.*

**Problem.** In an orthonormal frame, find the barycenter \(G\) of \((A,2),(B,1),(C,3)\) where \(A(1,0,2)\), \(B(4,-1,0)\), \(C(0,2,1)\).

**Why this method applies.** The sum of weights \(2+1+3=6\neq0\), so the coordinate (weighted-average) formula applies directly.

**Step-by-step solution.** Sum of weights \(=6\).
\[
x_G=\frac{2(1)+1(4)+3(0)}{6}=\frac{6}{6}=1,\quad
y_G=\frac{2(0)+1(-1)+3(2)}{6}=\frac{5}{6},\quad
z_G=\frac{2(2)+1(0)+3(1)}{6}=\frac{7}{6}.
\]

**Final answer.** \(G\left(1,\tfrac56,\tfrac76\right)\).

**Verification.** Check \(2\vec{GA}+\vec{GB}+3\vec{GC}=\vec0\) on the \(x\)-coordinate: \(2(1-1)+1(4-1)+3(0-1)=0+3-3=0\). ✔ (The \(y,z\) coordinates cancel likewise.)

**What the student should learn.** For coordinates, multiply each point by its weight, add, divide by the total weight — component by component.

> Source: created in the style of the barycenter examples on pages 21–23.

#### Textbook-level example

**B2-U1-L5-E02**

**Problem.** In an orthonormal frame, \(A(0,0,0)\), \(B(4,0,0)\), \(C(0,4,0)\), \(D(0,0,4)\). Find the isobarycenter \(G\) of \(A,B,C,D\), and verify with associativity that \(G\) lies on the segment joining \(A\) to the centroid \(G'\) of triangle \(BCD\), dividing it so that \(\vec{AG}=\tfrac34\vec{AG'}\).

**Problem analysis.** Equal weights ⇒ coordinates are the plain average. Associativity lets us replace \(\{B,C,D\}\) by their centroid \(G'\) (weight \(3\)) and combine with \((A,1)\).

**Step-by-step solution.** *Isobarycenter:*
\[
G\!\left(\frac{0+4+0+0}{4},\frac{0+0+4+0}{4},\frac{0+0+0+4}{4}\right)=G(1,1,1).
\]
*Associativity:* the centroid of \(BCD\) is
\[
G'\!\left(\frac{4+0+0}{3},\frac{0+4+0}{3},\frac{0+0+4}{3}\right)=G'\!\left(\tfrac43,\tfrac43,\tfrac43\right).
\]
By associativity, \(G=\mathrm{bar}\{(A,1),(G',3)\}\), so
\[
\vec{AG}=\frac{3}{1+3}\,\vec{AG'}=\frac34\vec{AG'} .
\]
Indeed \(\vec{AG'}=\left(\tfrac43,\tfrac43,\tfrac43\right)\) and \(\tfrac34\vec{AG'}=(1,1,1)=\vec{AG}\). ✔

**Final answer.** \(G(1,1,1)\); and \(\vec{AG}=\tfrac34\vec{AG'}\), so \(G\) sits three-quarters of the way from \(A\) to the centroid of the opposite face.

**Verification.** Direct average gives \(G(1,1,1)\); the associativity route gives the same point — the two methods agree.

**What the student should learn.** The centre of a tetrahedron lies on each segment from a vertex to the centroid of the opposite face, at ratio \(3:1\) from the vertex (\(\vec{AG}=\tfrac34\vec{AG'}\)). Associativity is what makes this fall out cleanly.

> Source: Mathematics Textbook 2, pages 22–23 (associativity / centre of a tetrahedron).

#### Common mistake

> **Common mistake:** applying the barycenter formulas when \(\sum\alpha_i=0\). For example \((A,1),(B,-1)\) has total weight \(0\): there is **no** barycenter, and \(\vec{GA}-\vec{GB}=\vec{BA}\) is a fixed nonzero vector, so no point \(G\) can satisfy the defining equation. Always check \(\sum\alpha_i\neq0\) first.

#### Special cases
- **Equal weights** ⇒ isobarycenter: two points → midpoint; three → triangle centroid; four → tetrahedron centre.
- **Homogeneity:** weights \((2,1,3)\) and \((4,2,6)\) give the same \(G\); scale to convenient integers.
- **A negative weight** is allowed (sum still nonzero); \(G\) may then lie outside the figure.
- **A weight \(=0\):** that point simply drops out of the system.

#### Practice set
1. **(B2-U1-L5-P01)** Find the barycenter of \((A,1),(B,3)\) with \(A(0,0,0)\), \(B(4,4,4)\).
2. **(B2-U1-L5-P02)** Find the centroid (isobarycenter) of \(A(1,2,3)\), \(B(3,0,-3)\), \(C(2,4,0)\).
3. **(B2-U1-L5-P03)** Find the barycenter of \((A,2),(B,-1)\) with \(A(1,2,3)\), \(B(3,1,0)\). *(negative weight)*
4. **(B2-U1-L5-P04)** Show that the barycenter of \((A,2),(B,1),(C,3)\) equals the barycenter of \((A,4),(B,2),(C,6)\). *(homogeneity)*
5. **(B2-U1-L5-P05)** *(near exam level)* \(A(2,0,0)\), \(B(0,2,0)\), \(C(0,0,2)\). Using associativity, find the barycenter \(G\) of \((A,1),(B,1),(C,2)\) by first reducing \((A,1),(B,1)\) to their midpoint \(I\), then combining \((I,2),(C,2)\).

#### Practice solutions
1. Sum \(=4\): \(G=\left(\tfrac{1\cdot0+3\cdot4}{4},\dots\right)=(3,3,3)\) (each coordinate \(\tfrac{12}{4}=3\)).
2. Average: \(\left(\tfrac{1+3+2}{3},\tfrac{2+0+4}{3},\tfrac{3-3+0}{3}\right)=(2,2,0)\).
3. Sum \(=1\): \(G=2A-B=(2\cdot1-3,\,2\cdot2-1,\,2\cdot3-0)=(-1,3,6)\).
4. Weights \((4,2,6)=2\cdot(2,1,3)\); by homogeneity the barycenter is unchanged. (Directly: \(\tfrac{4x_A+2x_B+6x_C}{12}=\tfrac{2x_A+x_B+3x_C}{6}\), identical formula.)
5. Midpoint \(I\) of \([AB]\): \(I(1,1,0)\), carrying weight \(2\). Then \(G=\mathrm{bar}\{(I,2),(C,2)\}=\) midpoint of \([IC]=\left(\tfrac{1+0}{2},\tfrac{1+0}{2},\tfrac{0+2}{2}\right)=\left(\tfrac12,\tfrac12,1\right)\). *(Check by direct formula, total weight \(4\): \(x_G=\tfrac{2+0+0}{4}=\tfrac12,\ y_G=\tfrac{0+2+0}{4}=\tfrac12,\ z_G=\tfrac{0+0+4}{4}=1\). ✔)*

#### Lesson summary
- **Most important definition:** \(G\) with \(\sum\alpha_i\vec{GA_i}=\vec0\), requiring \(\sum\alpha_i\neq0\).
- **Most important formula:** coordinates \(=\) weighted average \(x_G=\dfrac{\sum\alpha_i x_i}{\sum\alpha_i}\).
- **Most important condition:** \(\sum\alpha_i\neq0\).
- **Most important pattern:** reduction and associativity to construct \(G\) or prove collinearity/concurrency.
- **Most common mistake:** using the formulas when the weights sum to zero.
- **Quick self-check:** isobarycenter of \((0,0,0),(3,3,3)\)? *(Answer: the midpoint \(\left(\tfrac32,\tfrac32,\tfrac32\right)\).)*

---

<a id="b2-u1-test"></a>
### Chapter summary & review test — Unit 1

#### Chapter summary
This unit carried vectors into three dimensions. Operations (Chasles, addition, scalar multiple) are unchanged; the new idea is **coplanarity**. Three vectors are **linearly dependent \(\iff\) coplanar \(\iff\vec w=x\vec u+y\vec v\)**; three non-coplanar vectors form a **basis**, giving every vector **unique** components \((x,y,z)\). A **frame** \((O;\vec i,\vec j,\vec k)\) assigns coordinates to points; \(\vec{AB}\) subtracts them, and the midpoint averages them. In an **orthonormal** frame the norm and **distance** follow from a 3-D Pythagoras, and the **sphere** has equation \((x-a)^2+(y-b)^2+(z-c)^2=R^2\). Finally, the **barycenter** of weighted points has coordinates equal to the **weighted average**, with reduction, homogeneity and associativity as its working tools.

#### Essential formulas
\[
\vec{AB}=(x_B-x_A,y_B-y_A,z_B-z_A),\quad \vec w=x\vec u+y\vec v,\quad \|\vec u\|=\sqrt{a^2+b^2+c^2},
\]
\[
AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2},\quad (x-a)^2+(y-b)^2+(z-c)^2=R^2,\quad x_G=\frac{\sum\alpha_i x_i}{\sum\alpha_i}.
\]

#### Essential theorems/results
- Three vectors: dependent \(\iff\) coplanar \(\iff\) one is a combination of the other two.
- A basis gives **unique** components (uniqueness by linear independence).
- Norm formula in an orthonormal frame (Pythagoras twice).
- Barycenter existence/uniqueness and the reduction formula \((\sum\alpha_i)\vec{MG}=\sum\alpha_i\vec{MA_i}\); associativity and homogeneity.

#### Main problem patterns
Coplanarity/basis test from components; components, midpoint, missing parallelogram vertex; distance and nature of a triangle/tetrahedron; equation of a sphere (centre+radius, or diameter); barycenter coordinates and construction; collinearity/concurrency via barycenter.

#### Connections between the chapter's ideas
Coplanarity (L2) is the exact tool that decides whether three vectors are a basis (L2→L3); coordinates (L3) feed the distance and sphere formulas (L4) and the barycenter coordinates (L5). The barycenter’s reduction reuses Chasles from L1. Together they prepare the analytic geometry of lines, planes, and the scalar/cross products in later units.

#### Recommended study order
Operations & coplanarity (L1) ← linear dependence & basis (L2) ← frame & coordinates (L3) ← distance & sphere (L4) ← barycenter (L5), practising a coplanarity test, a distance/tetrahedron problem, and a barycenter computation.

#### Chapter checklist
- [ ] I decide coplanarity/basis by the third-equation test.
- [ ] I find components, midpoints, and missing parallelogram vertices.
- [ ] I compute distances and classify triangles/tetrahedra.
- [ ] I write sphere equations and find barycenters (checking \(\sum\alpha_i\neq0\)).

#### Chapter review test
1. Simplify \(\vec{AB}+\vec{BC}+\vec{CD}+\vec{DA}\) for any four points.
2. Are \(\vec u(1,2,-1)\), \(\vec v(2,-1,3)\), \(\vec w(0,5,-5)\) coplanar? If so, express \(\vec w\).
3. Given \(A(1,-1,2)\), \(B(3,0,-1)\), \(C(4,2,1)\), find \(D\) so that \(ABCD\) is a parallelogram, then the midpoint of the diagonal \([AC]\).
4. In an orthonormal frame, determine the nature of the tetrahedron \(A(1,1,0)\), \(B(1,0,1)\), \(C(0,1,1)\), \(D(0,0,0)\).
5. Write the equation of the sphere with \([AB]\) as diameter, \(A(2,0,1)\), \(B(0,4,3)\).
6. Find the barycenter \(G\) of \((A,1),(B,2),(C,1)\) with \(A(2,0,1)\), \(B(-1,3,2)\), \(C(1,1,0)\).
7. In a cube \(ABCDEFGH\) (bottom face \(ABCD\), top face \(EFGH\) with \(E,F,G,H\) above \(A,B,C,D\)), the segments \([AG]\) and \([BH]\) are two space diagonals. Let \(M\) be the isobarycenter of \(A,G,B,H\). Using associativity, prove that \(M\) is at once the midpoint of \([AG]\) and of \([BH]\) (so the two diagonals bisect each other).

#### Model solutions for the chapter review test
1. Chasles telescopes around the loop: \(\vec{AB}+\vec{BC}+\vec{CD}+\vec{DA}=\vec{AA}=\vec0\).
2. \(\vec w=x\vec u+y\vec v\): \(x+2y=0,\ 2x-y=5,\ -x+3y=-5\). From the first two, \(x=2,\ y=-1\); check the third: \(-2+3(-1)=-5\). ✔ So **coplanar**, \(\vec w=2\vec u-\vec v\). (Check: \(2(1,2,-1)-(2,-1,3)=(0,5,-5)\). ✔)
3. \(\vec{AB}=(2,1,-3)\). \(\vec{DC}=\vec{AB}\Rightarrow D=C-\vec{AB}=(4-2,\,2-1,\,1+3)=(2,1,4)\). Midpoint of \([AC]=\left(\tfrac{1+4}{2},\tfrac{-1+2}{2},\tfrac{2+1}{2}\right)=\left(\tfrac52,\tfrac12,\tfrac32\right)\).
4. Edges: \(AB^2=(0)^2+(1)^2+(-1)^2=2\); likewise \(AC^2=2\), \(BC^2=2\), \(DA^2=1+1+0=2\), \(DB^2=2\), \(DC^2=2\). All six edges equal \(\sqrt2\): a **regular tetrahedron** (side \(\sqrt2\)).
5. Centre \(=\) midpoint of \([AB]=\left(\tfrac{2+0}{2},\tfrac{0+4}{2},\tfrac{1+3}{2}\right)=(1,2,2)\). \(AB=\sqrt{(-2)^2+4^2+2^2}=\sqrt{4+16+4}=\sqrt{24}=2\sqrt6\), so \(R=\sqrt6\). Equation: \((x-1)^2+(y-2)^2+(z-2)^2=6\).
6. Sum of weights \(=4\). \(x_G=\tfrac{1(2)+2(-1)+1(1)}{4}=\tfrac{1}{4}\); \(y_G=\tfrac{0+6+1}{4}=\tfrac74\); \(z_G=\tfrac{1+4+0}{4}=\tfrac54\). So \(G\left(\tfrac14,\tfrac74,\tfrac54\right)\).
7. By associativity, group the four equal weights two ways. Grouping \((A,1),(G,1)\) into their midpoint \(I=\mathrm{mid}[AG]\) (weight \(2\)) and \((B,1),(H,1)\) into their midpoint \(J=\mathrm{mid}[BH]\) (weight \(2\)) gives \(M=\mathrm{bar}\{(I,2),(J,2)\}=\mathrm{mid}[IJ]\). Now compute both midpoints (take \(A\) as origin, edges \(\vec{AB},\vec{AD},\vec{AE}\)): \(\vec{AG}=\vec{AB}+\vec{AD}+\vec{AE}\Rightarrow \vec{AI}=\tfrac12(\vec{AB}+\vec{AD}+\vec{AE})\); and \(\vec{AH}=\vec{AD}+\vec{AE}\), \(\vec{AB}=\vec{AB}\), so \(\vec{AJ}=\tfrac12(\vec{AB}+\vec{AH})=\tfrac12(\vec{AB}+\vec{AD}+\vec{AE})\). Hence \(I=J\): the two midpoints coincide (both equal the cube's centre). Therefore \(M=\mathrm{mid}[IJ]=I=J\), i.e. \(M\) is **simultaneously the midpoint of \([AG]\) and of \([BH]\)** — the two space diagonals bisect each other. (Check with \(A(0,0,0),B(1,0,0),H(0,1,1),G(1,1,1)\): all give \(M\left(\tfrac12,\tfrac12,\tfrac12\right)\).)

---

<a id="b2-u2"></a>
## Unit 2: Scalar Product in Space

> Source: Mathematics Textbook 2, pages 38–63.

### Unit overview

This unit extends one of the most powerful tools of plane geometry — the **scalar (dot) product** — into three-dimensional space, and then uses it to describe **planes** by equations and to measure **distances**.

- **Scalar product in space:** the same number \(\vec u\cdot\vec v\) you met in the plane, now for two vectors of space. Its coordinate form \(xx'+yy'+zz'\) turns geometric questions (lengths, angles, perpendicularity) into pure algebra.
- **Orthogonality and the normal vector:** two vectors are perpendicular exactly when their scalar product is zero. A **normal vector** \(\vec n\) to a plane is perpendicular to every vector lying in that plane; it is the key that unlocks the plane's equation.
- **Cartesian equation of a plane and distance to it:** a plane is fixed by one point and a normal vector, giving the equation \(ax+by+cz+d=0\); and the distance from a point to that plane is a single clean formula.

**Why it matters:** almost every spatial problem — the angle between two edges of a solid, whether a line is perpendicular to a face, the radius of a circumscribed sphere, the position of two planes — reduces, through the scalar product, to routine arithmetic "without effort" (as the textbook puts it).

**Prerequisites:** the scalar product in the plane; vectors and their coordinates in an orthonormal frame; square roots and the cosine of an angle.

**Main question types:** compute a scalar product (with or without coordinates); find the angle between two vectors; prove two vectors or two lines are orthogonal; find a normal vector to a plane; write the Cartesian equation of a plane from a point and a normal; compute the distance from a point to a plane; decide the relative position of two planes.

### Unit concept map

```text
Scalar Product in Space
├── Scalar product  u·v
│   ├── Norm form:   u·v = ½(‖u+v‖² − ‖u‖² − ‖v‖²)
│   ├── Cosine form: u·v = ‖u‖‖v‖cosθ           → angle between vectors
│   ├── Analytic:    u·v = xx′ + yy′ + zz′        (orthonormal frame)
│   └── Properties:  symmetry + bilinearity, u·u = ‖u‖²
├── Orthogonality
│   ├── u ⊥ v ⇔ u·v = 0 ⇔ xx′+yy′+zz′ = 0
│   └── Normal vector n to a plane P (⊥ every vector of P)
│       └── enough that n ⊥ two non-collinear vectors of P
└── Plane in space
    ├── Through A with normal n(a,b,c):  a(x−xA)+b(y−yA)+c(z−zA)=0
    ├── General equation:  ax+by+cz+d = 0 ,  (a,b,c)≠(0,0,0)
    ├── Distance point→plane:  |ax₀+by₀+cz₀+d| / √(a²+b²+c²)
    └── Two planes: parallel ⇔ n‖n′ ; perpendicular ⇔ n·n′=0
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta\) | \(\theta\) angle between \(\vec u,\vec v\) | \(\vec u,\vec v\) non-zero | if a vector is \(\vec 0\) (angle undefined) | gives the angle: \(\cos\theta=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}\) |
| \(\vec u\cdot\vec v=xx'+yy'+zz'\) | \(\vec u(x,y,z),\ \vec v(x',y',z')\) | **orthonormal** frame | in a non-orthonormal frame | the everyday computing formula |
| \(\|\vec u\|=\sqrt{x^2+y^2+z^2}\) | length of \(\vec u\) | orthonormal frame | non-orthonormal frame | \(\vec u\cdot\vec u=\|\vec u\|^2\) |
| \(\vec u\perp\vec v\iff\vec u\cdot\vec v=0\) | perpendicularity test | always | — | in coords: \(xx'+yy'+zz'=0\) |
| \(a(x-x_A)+b(y-y_A)+c(z-z_A)=0\) | plane through \(A\), normal \(\vec n(a,b,c)\) | \((a,b,c)\neq(0,0,0)\) | if \(\vec n=\vec 0\) | expands to \(ax+by+cz+d=0\) |
| \(ax+by+cz+d=0\) | Cartesian equation of a plane | \((a,b,c)\neq(0,0,0)\) | \(a=b=c=0\) is not a plane | \(\vec n(a,b,c)\) is normal; \(O\in\mathcal P\iff d=0\) |
| \(\operatorname{dist}(M_0,\mathcal P)=\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\) | distance from \(M_0(x_0,y_0,z_0)\) | plane written \(ax+by+cz+d=0\) | if \((a,b,c)=(0,0,0)\) | numerator uses the plane's own \(d\) |

### Unit learning checklist

- [ ] I compute a scalar product both geometrically (\(\|\vec u\|\|\vec v\|\cos\theta\)) and by coordinates (\(xx'+yy'+zz'\)).
- [ ] I find the angle between two vectors from their scalar product and norms.
- [ ] I use symmetry and bilinearity to expand expressions like \((\vec u+\vec v)\cdot(\vec u-\vec v)\).
- [ ] I test orthogonality of two vectors, and of two lines, with \(\vec u\cdot\vec v=0\).
- [ ] I recognise a normal vector to a plane and check it against two spanning vectors.
- [ ] I write the Cartesian equation of a plane from a point and a normal vector.
- [ ] I compute the distance from a point to a plane, and decide the relative position of two planes.

---

<a id="b2u2-l1"></a>
### Lesson 1: The scalar product — definition and properties

#### Core idea

In the plane you already met the **scalar product** of two vectors: a single real number, written \(\vec u\cdot\vec v\), that quietly stores both the lengths of the vectors and the angle between them. This lesson carries that same object into **space**. The remarkable fact is that *nothing new has to be invented*: if you take a point \(A\) and draw \(\overrightarrow{AB}=\vec u\) and \(\overrightarrow{AC}=\vec v\), the three points \(A,B,C\) always lie in one plane, and inside that plane every rule you know still holds. So the scalar product in space obeys the very same formulas.

Three faces of the same number are useful in different situations:

1. the **cosine form** \(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta\), best when you know lengths and an angle (or want to *find* the angle);
2. the **analytic form** \(\vec u\cdot\vec v=xx'+yy'+zz'\), best when you have coordinates — it reduces everything to arithmetic;
3. the **norm form** \(\vec u\cdot\vec v=\tfrac12(\|\vec u+\vec v\|^2-\|\vec u\|^2-\|\vec v\|^2)\), which is the defining relation and is handy when only norms are given.

**How does a student recognise this lesson?** Whenever a dot appears between two vectors, whenever an **angle** between vectors or edges of a solid is wanted, or whenever a problem gives norms and asks about \(\|\vec u+\vec v\|\). The usual confusion is that the scalar product is a **number**, not a vector, and that the coordinate formula \(xx'+yy'+zz'\) is valid **only in an orthonormal frame**.

#### Prerequisite knowledge
- The scalar product in the plane and its four expressions.
- Coordinates of a vector in an orthonormal frame \((O;\vec i,\vec j,\vec k)\), and of \(\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A,\ z_B-z_A)\).
- The cosine of the usual angles (\(\cos\frac{\pi}{3}=\frac12\), etc.) and square roots.

#### Definitions

**Definition (scalar product in space).** For two vectors \(\vec u\) and \(\vec v\) of space, the **scalar (dot) product** is the real number
\[
\vec u\cdot\vec v=\tfrac12\Big(\|\vec u+\vec v\|^2-\|\vec u\|^2-\|\vec v\|^2\Big).
\]
Choosing a point \(A\) with \(\overrightarrow{AB}=\vec u\) and \(\overrightarrow{AC}=\vec v\) places \(\vec u\) and \(\vec v\) in the plane \((ABC)\), so all planar expressions of the scalar product remain valid in space.

**Consequences (the two working forms).** For non-zero \(\vec u,\vec v\) making a geometric angle \(\theta\),
\[
\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta\qquad(\text{cosine form});
\]
and in an orthonormal frame with \(\vec u(x,y,z)\), \(\vec v(x',y',z')\),
\[
\vec u\cdot\vec v=xx'+yy'+zz'\qquad(\text{analytic form}).
\]

> Source: Mathematics Textbook 2, pages 42–43.

#### Formulas and properties

**Self scalar product and norm.** Taking \(\vec v=\vec u\) gives
\[
\vec u\cdot\vec u=\|\vec u\|^2=x^2+y^2+z^2,\qquad\text{so}\qquad \|\vec u\|=\sqrt{x^2+y^2+z^2}.
\]

**Symmetry and bilinearity (Theorem 4).** For all vectors \(\vec u,\vec v,\vec w\) and all reals \(a,b\):
\[
\vec u\cdot\vec v=\vec v\cdot\vec u,\quad
\vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w,\quad
(a\vec u)\cdot(b\vec v)=ab\,(\vec u\cdot\vec v).
\]

**Two identities that follow immediately** (expand using bilinearity, exactly as with real numbers):
\[
\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2+2\,\vec u\cdot\vec v,\qquad
(\vec u+\vec v)\cdot(\vec u-\vec v)=\|\vec u\|^2-\|\vec v\|^2.
\]

> **Important condition:** the formula \(\vec u\cdot\vec v=xx'+yy'+zz'\) holds **only in an orthonormal frame**. If the frame is not orthonormal, this expression is false; use the cosine or norm form instead.

> **Exam-style insight:** to find an **angle**, always isolate \(\cos\theta=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}\). Compute the scalar product and the two norms separately, then divide.

#### Recognising the idea and the solution method
- **If coordinates are given** → use \(xx'+yy'+zz'\) directly.
- **If lengths and an angle are given** (a cube, a tetrahedron, a triangle) → use \(\|\vec u\|\,\|\vec v\|\cos\theta\); decompose awkward vectors along known edges first, e.g. \(\overrightarrow{CD}=\overrightarrow{AD}-\overrightarrow{AC}\).
- **If only norms** of \(\vec u\), \(\vec v\), \(\vec u+\vec v\) are given → use \(\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2+2\,\vec u\cdot\vec v\) to extract \(\vec u\cdot\vec v\).

**Standard algorithm to find the angle between two vectors (with coordinates):**
1. Read off (or compute) the components of \(\vec u\) and \(\vec v\).
2. Compute the scalar product \(\vec u\cdot\vec v=xx'+yy'+zz'\).
3. Compute the norms \(\|\vec u\|=\sqrt{x^2+y^2+z^2}\) and \(\|\vec v\|\).
4. Form \(\cos\theta=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}\), then deduce \(\theta\).

#### Basic example

**B2-U2-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** In an orthonormal frame, let \(\vec u(2,-1,2)\) and \(\vec v(1,2,2)\). Compute \(\vec u\cdot\vec v\), then find the angle \(\theta\) between \(\vec u\) and \(\vec v\).

**Why this method applies.** Both vectors are given by coordinates in an orthonormal frame, so the analytic form \(xx'+yy'+zz'\) applies, and the cosine form then delivers the angle.

**Step-by-step solution.**
\[
\vec u\cdot\vec v=(2)(1)+(-1)(2)+(2)(2)=2-2+4=4.
\]
\[
\|\vec u\|=\sqrt{2^2+(-1)^2+2^2}=\sqrt{9}=3,\qquad \|\vec v\|=\sqrt{1^2+2^2+2^2}=\sqrt{9}=3.
\]
\[
\cos\theta=\frac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}=\frac{4}{3\cdot3}=\frac{4}{9}\approx0.444\ \Rightarrow\ \theta\approx63.6^\circ.
\]

**Final answer.** \(\vec u\cdot\vec v=4\), and \(\theta=\arccos\dfrac{4}{9}\approx63.6^\circ\).

**Verification.** Both norms are positive and \(\left|\tfrac49\right|\le1\), so the value is a legitimate cosine; the vectors are neither parallel (\(\cos\theta\neq\pm1\)) nor perpendicular (\(\vec u\cdot\vec v\neq0\)).

**What the student should learn.** The angle is never read directly: compute the scalar product and the two norms, then divide to get \(\cos\theta\).

> Source: example created in the style of the "with a frame" example on page 44.

#### Textbook-level example

**B2-U2-L1-E02**

**Problem.** In an orthonormal frame, consider \(A(1,0,0)\), \(B(0,3,0)\), \(C(0,0,3)\), \(D(3,2,0)\). Compute \(\overrightarrow{AB}\cdot\overrightarrow{AC}\) and \(\overrightarrow{AB}\cdot\overrightarrow{AD}\).

**Problem analysis.** We are given points, not vectors, so first form the component vectors by subtracting coordinates, then apply \(xx'+yy'+zz'\).

**Step-by-step solution.**
\[
\overrightarrow{AB}=(0-1,\,3-0,\,0-0)=(-1,3,0),\quad
\overrightarrow{AC}=(-1,0,3),\quad
\overrightarrow{AD}=(2,2,0).
\]
\[
\overrightarrow{AB}\cdot\overrightarrow{AC}=(-1)(-1)+(3)(0)+(0)(3)=1.
\]
\[
\overrightarrow{AB}\cdot\overrightarrow{AD}=(-1)(2)+(3)(2)+(0)(0)=-2+6=4.
\]

**Final answer.** \(\overrightarrow{AB}\cdot\overrightarrow{AC}=1\) and \(\overrightarrow{AB}\cdot\overrightarrow{AD}=4\).

**Verification.** Recomputing \(\overrightarrow{AB}\cdot\overrightarrow{AD}\) by pairing terms in the other order gives the same \(2\cdot(-1)+2\cdot3+0\cdot0=4\); symmetry of the scalar product is respected.

**What the student should learn.** With points, the first move is always \(\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A,\ z_B-z_A)\); a sign slip here corrupts every later step.

> Source: Mathematics Textbook 2, page 44.

#### Harder / composite example

**B2-U2-L1-E03**

**Problem.** \(ABCDEFGH\) is a cube of edge \(a\), with \(ABCD\) the bottom face and \(EFGH\) the top face directly above it (\(\overrightarrow{AE}=\overrightarrow{BF}=\overrightarrow{CG}=\overrightarrow{DH}\), all vertical of length \(a\)). Compute \(\overrightarrow{AE}\cdot\overrightarrow{AF}\), \(\overrightarrow{AE}\cdot\overrightarrow{AG}\), and \(\overrightarrow{AB}\cdot\overrightarrow{CD}\), **without a frame**.

**Problem analysis.** No coordinates are given, so we use the cosine/geometric form together with edge orthogonality: the three edges \(\overrightarrow{AB},\overrightarrow{AD},\overrightarrow{AE}\) are mutually perpendicular, so their pairwise scalar products are \(0\), while each edge dotted with itself gives \(a^2\). We decompose the diagonals along these edges.

**Step-by-step solution.**
Write \(\overrightarrow{AF}=\overrightarrow{AB}+\overrightarrow{AE}\) (face diagonal of the front face) and \(\overrightarrow{AG}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AE}\) (space diagonal). Using \(\overrightarrow{AE}\cdot\overrightarrow{AB}=\overrightarrow{AE}\cdot\overrightarrow{AD}=0\) and \(\overrightarrow{AE}\cdot\overrightarrow{AE}=a^2\):
\[
\overrightarrow{AE}\cdot\overrightarrow{AF}=\overrightarrow{AE}\cdot(\overrightarrow{AB}+\overrightarrow{AE})=0+a^2=a^2 .
\]

> **Correction of a natural guess.** One might expect \(\overrightarrow{AE}\cdot\overrightarrow{AF}=0\) because the picture "looks" slanted, but \(\overrightarrow{AF}\) has a genuine vertical component \(\overrightarrow{AE}\); only \(\overrightarrow{AE}\perp\overrightarrow{AB}\) is zero.

\[
\overrightarrow{AE}\cdot\overrightarrow{AG}=\overrightarrow{AE}\cdot(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AE})=0+0+a^2=a^2 .
\]
For the last one, \(\overrightarrow{CD}=\overrightarrow{AD}-\overrightarrow{AC}\) is not simplest; instead note \(\overrightarrow{CD}=-\overrightarrow{AB}\) is **false** for a cube (\(\overrightarrow{DC}=\overrightarrow{AB}\), so \(\overrightarrow{CD}=-\overrightarrow{AB}\) **is** true here since \(ABCD\) is a square). Hence
\[
\overrightarrow{AB}\cdot\overrightarrow{CD}=\overrightarrow{AB}\cdot(-\overrightarrow{AB})=-\|\overrightarrow{AB}\|^2=-a^2 .
\]

**Final answer.** \(\overrightarrow{AE}\cdot\overrightarrow{AF}=a^2\), \(\ \overrightarrow{AE}\cdot\overrightarrow{AG}=a^2\), \(\ \overrightarrow{AB}\cdot\overrightarrow{CD}=-a^2\).

**Verification (with a frame).** Put \(A\) at the origin, \(\overrightarrow{AB}=a\vec i\), \(\overrightarrow{AD}=a\vec j\), \(\overrightarrow{AE}=a\vec k\). Then \(\overrightarrow{AE}=(0,0,a)\), \(\overrightarrow{AF}=(a,0,a)\), \(\overrightarrow{AG}=(a,a,a)\), \(\overrightarrow{CD}=(-a,0,0)\). Indeed \(\overrightarrow{AE}\cdot\overrightarrow{AF}=a^2\), \(\overrightarrow{AE}\cdot\overrightarrow{AG}=a^2\), \(\overrightarrow{AB}\cdot\overrightarrow{CD}=-a^2\). ✓

**What the student should learn.** In a solid, decompose every awkward vector along a set of edges whose pairwise scalar products you already know; perpendicular edges contribute \(0\), an edge with itself contributes its length squared.

> Source: Mathematics Textbook 2, page 43 (cube dot-product example, part 2).

#### Common mistake

> **Common mistake:** treating the scalar product as if it produced a vector, or applying \(xx'+yy'+zz'\) in a frame that is **not** orthonormal. The scalar product is always a **real number**, and the coordinate formula is valid only when \((O;\vec i,\vec j,\vec k)\) is orthonormal. In a slanted frame you must return to \(\|\vec u\|\,\|\vec v\|\cos\theta\).

#### Special cases
- **Perpendicular vectors:** \(\theta=\dfrac{\pi}{2}\Rightarrow\cos\theta=0\Rightarrow\vec u\cdot\vec v=0\).
- **Same direction:** \(\theta=0\Rightarrow\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\) (maximum value).
- **Opposite directions:** \(\theta=\pi\Rightarrow\vec u\cdot\vec v=-\|\vec u\|\,\|\vec v\|\) (minimum value).
- **The zero vector:** \(\vec u\cdot\vec 0=0\) for every \(\vec u\); the angle is then undefined.

#### Practice set
1. **(B2-U2-L1-P01)** Compute \(\vec u\cdot\vec v\) for \(\vec u(1,-2,3)\) and \(\vec v(2,2,1)\).
2. **(B2-U2-L1-P02)** Find \(\|\vec w\|\) for \(\vec w(2,-1,2)\), and give a unit vector with the same direction.
3. **(B2-U2-L1-P03)** For \(\vec u(3,1,-2)\) and \(\vec v(1,-4,2)\), expand and evaluate \((\vec u+\vec v)\cdot(\vec u-\vec v)\). *(use the identity, then check by coordinates)*
4. **(B2-U2-L1-P04)** \(A(1,1,0)\), \(B(2,1,1)\), \(C(1,2,1)\). Find the angle \(\widehat{BAC}\).
5. **(B2-U2-L1-P05)** *(near exam level)* Vectors \(\vec u,\vec v\) have \(\|\vec u\|=6\), \(\|\vec v\|=8\) and \(\|\vec u+\vec v\|=10\). Compute \(\vec u\cdot\vec v\) and deduce the angle between them.

#### Practice solutions
1. \(\vec u\cdot\vec v=(1)(2)+(-2)(2)+(3)(1)=2-4+3=1.\)
2. \(\|\vec w\|=\sqrt{2^2+(-1)^2+2^2}=\sqrt{9}=3\); a unit vector is \(\dfrac{1}{3}\vec w=\left(\dfrac23,-\dfrac13,\dfrac23\right)\).
3. Identity: \((\vec u+\vec v)\cdot(\vec u-\vec v)=\|\vec u\|^2-\|\vec v\|^2=(9+1+4)-(1+16+4)=14-21=-7.\) Check by coordinates: \(\vec u+\vec v=(4,-3,0)\), \(\vec u-\vec v=(2,5,-4)\), and \((4)(2)+(-3)(5)+(0)(-4)=8-15+0=-7.\) ✓
4. \(\overrightarrow{AB}=(1,0,1)\), \(\overrightarrow{AC}=(0,1,1)\); \(\overrightarrow{AB}\cdot\overrightarrow{AC}=0+0+1=1\); \(\|\overrightarrow{AB}\|=\|\overrightarrow{AC}\|=\sqrt2\); \(\cos\widehat{BAC}=\dfrac{1}{\sqrt2\cdot\sqrt2}=\dfrac12\Rightarrow\widehat{BAC}=\dfrac{\pi}{3}=60^\circ.\)
5. From \(\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2+2\,\vec u\cdot\vec v\): \(100=36+64+2\,\vec u\cdot\vec v\Rightarrow2\,\vec u\cdot\vec v=0\Rightarrow\vec u\cdot\vec v=0\). Hence the vectors are **perpendicular**, angle \(\dfrac{\pi}{2}\) (this is the space version of the \(6,8,10\) right triangle).

#### Lesson summary
- **Most important definition:** \(\vec u\cdot\vec v\) is a real number; \(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta=xx'+yy'+zz'\).
- **Most important formula:** \(\|\vec u\|=\sqrt{x^2+y^2+z^2}\) and \(\cos\theta=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}\).
- **Most important condition:** the coordinate formula requires an **orthonormal** frame.
- **Most important pattern:** decompose awkward vectors along known edges; use symmetry and bilinearity to expand.
- **Most common mistake:** thinking the result is a vector, or using coordinates in a non-orthonormal frame.
- **Quick self-check:** if \(\vec u(1,2,2)\) and \(\vec v(2,-1,0)\), what is \(\vec u\cdot\vec v\)? *(Answer: \(2-2+0=0\), so they are perpendicular.)*

---

<a id="b2u2-l2"></a>
### Lesson 2: Orthogonality and the normal vector

#### Core idea

Perpendicularity is the workhorse of spatial geometry, and the scalar product measures it with a single test: **two vectors are orthogonal exactly when their scalar product is zero**. In coordinates this is the equation \(xx'+yy'+zz'=0\) — no picture, no protractor.

Building on this, the lesson introduces the star object of the whole unit: the **normal vector to a plane**. A plane in space has infinitely many directions lying inside it, but only one direction (up to length and sign) sticking straight out of it. A non-zero vector \(\vec n\) pointing in that perpendicular direction is called a **normal vector**: it is orthogonal to *every* vector of the plane. The decisive practical fact is that you do **not** have to check infinitely many vectors — it is enough that \(\vec n\) be orthogonal to **two non-collinear** vectors of the plane, because every vector of the plane is a combination of those two.

**How does a student recognise this lesson?** When a task says "show that these vectors/lines/edges are perpendicular", "find the parameter making them orthogonal", or "show that \(\vec n\) is normal to the plane / that a line is perpendicular to a plane". The confusing point is that orthogonality of a *line* to a *plane* is proved by testing the direction vector against **two** spanning directions, not just one.

#### Prerequisite knowledge
- The scalar product and its coordinate form (Lesson 1).
- What it means for two vectors to be collinear (proportional components).
- A line has a **direction vector**; a plane is spanned by two non-collinear vectors.

#### Definitions

**Definition (orthogonal vectors).** In space, two vectors \(\vec u\) and \(\vec v\) are **orthogonal**, written \(\vec u\perp\vec v\), if and only if
\[
\vec u\cdot\vec v=0.
\]
By convention the zero vector \(\vec 0\) is orthogonal to every vector (since \(\vec u\cdot\vec 0=0\)). In an orthonormal frame the test reads \(xx'+yy'+zz'=0\).

**Definition (normal vector to a plane).** A **normal vector** to a plane \(\mathcal P\) is a **non-zero** vector \(\vec n\) that is orthogonal to every vector lying in \(\mathcal P\).

> Source: Mathematics Textbook 2, pages 45–47.

#### Formulas and properties

**Orthogonality of two lines.** Two lines are perpendicular in direction iff any direction vector of one is orthogonal to any direction vector of the other: \(\vec u\cdot\vec v=0\).

**Finding a parameter for orthogonality.** If a component depends on a parameter \(\alpha\), impose \(\vec u\cdot\vec v=0\) and solve the resulting linear equation for \(\alpha\).

> **Important condition:** to prove \(\vec n\) is normal to a plane it is **not** enough that \(\vec n\) be perpendicular to one vector of the plane — that only makes it perpendicular to a single line. You must check **two non-collinear** vectors of the plane.

> **Warning:** "orthogonal" for vectors does not require the vectors to meet; it is a condition on directions only. Two edges of a solid that never intersect can still be orthogonal.

#### Theorems and proofs

**Theorem (characterisation of a plane by a normal vector).** Let \(\mathcal P\) be a plane, \(A\in\mathcal P\), and \(\vec n\neq\vec 0\). Then \(\vec n\) is normal to \(\mathcal P\) if and only if, for every point \(M\) of space,
\[
M\in\mathcal P\iff \overrightarrow{AM}\cdot\vec n=0.
\]

*Proof (as in the textbook).* If \(M\in\mathcal P\) then \(\overrightarrow{AM}\) lies in \(\mathcal P\), and since \(\vec n\) is normal, \(\overrightarrow{AM}\cdot\vec n=0\). Conversely, suppose \(\vec n\) is orthogonal to two non-collinear vectors \(\vec{a},\vec{b}\) of \(\mathcal P\). Any vector of \(\mathcal P\) can be written \(\lambda\vec a+\mu\vec b\); by bilinearity
\[
\vec n\cdot(\lambda\vec a+\mu\vec b)=\lambda(\vec n\cdot\vec a)+\mu(\vec n\cdot\vec b)=0,
\]
so \(\vec n\) is orthogonal to every vector of \(\mathcal P\), i.e. \(\vec n\) is normal. Hence membership in \(\mathcal P\) is exactly the condition \(\overrightarrow{AM}\cdot\vec n=0\). \(\blacksquare\)

**Consequence (test to use in practice).** A non-zero vector is normal to a plane **iff** it is orthogonal to two non-collinear vectors of that plane. The student is expected to **apply** this theorem (the short proof above is the one the book gives).

#### Recognising the idea and the solution method
- **If asked** "are \(\vec u,\vec v\) orthogonal?" → compute \(\vec u\cdot\vec v\); zero means yes.
- **If asked** "for which \(\alpha\)…?" → set \(\vec u\cdot\vec v=0\) and solve for \(\alpha\).
- **If asked** "show \(\vec n\) is normal to plane \(\mathcal P\)" → find two non-collinear vectors in \(\mathcal P\) (often two edges through one vertex) and show \(\vec n\) is orthogonal to **both**.

**Standard algorithm (show a vector is normal to a plane):**
1. Pick two vectors \(\vec a,\vec b\) that lie in the plane and are not collinear.
2. Compute \(\vec n\cdot\vec a\) and \(\vec n\cdot\vec b\).
3. If **both** are \(0\), conclude \(\vec n\) is normal (hence the corresponding line is perpendicular to the plane).

#### Basic example

**B2-U2-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** In an orthonormal frame, let \(\vec u(2,-1,3)\) and \(\vec v(1,\alpha,-1)\). Find the value of \(\alpha\) for which \(\vec u\) and \(\vec v\) are orthogonal.

**Why this method applies.** Orthogonality is exactly \(\vec u\cdot\vec v=0\); with a parameter this becomes one linear equation in \(\alpha\).

**Step-by-step solution.**
\[
\vec u\cdot\vec v=(2)(1)+(-1)(\alpha)+(3)(-1)=2-\alpha-3=-\alpha-1.
\]
Setting \(\vec u\cdot\vec v=0\): \(-\alpha-1=0\Rightarrow\alpha=-1\).

**Final answer.** \(\alpha=-1\).

**Verification.** With \(\alpha=-1\), \(\vec v(1,-1,-1)\) and \(\vec u\cdot\vec v=2+1-3=0\). ✓

**What the student should learn.** A single orthogonality condition gives a single linear equation; solve it like any equation in one unknown.

> Source: example created in the style of the parameter practice on page 47.

#### Textbook-level example

**B2-U2-L2-E02**

**Problem.** In an orthonormal frame, let \(A(2,-5,1)\), \(B(0,2,6)\), and let \(d\) be a line with direction vector \(\vec u(-4,1,-3)\). Prove that \(\vec u\) is perpendicular to the line \((AB)\).

**Problem analysis.** Two lines are perpendicular in direction iff a direction vector of one is orthogonal to a direction vector of the other. A direction vector of \((AB)\) is \(\overrightarrow{AB}\); test \(\vec u\cdot\overrightarrow{AB}=0\).

**Step-by-step solution.**
\[
\overrightarrow{AB}=(0-2,\ 2-(-5),\ 6-1)=(-2,7,5).
\]
\[
\vec u\cdot\overrightarrow{AB}=(-4)(-2)+(1)(7)+(-3)(5)=8+7-15=0.
\]
Since the scalar product is zero, \(\vec u\perp\overrightarrow{AB}\), so \(\vec u\) is perpendicular to the line \((AB)\).

**Final answer.** \(\vec u\cdot\overrightarrow{AB}=0\), hence \(\vec u\) is perpendicular to \((AB)\).

**Verification.** Re-adding: \(8+7=15\), \(15-15=0\). ✓

**What the student should learn.** Perpendicularity of a direction to a line is one scalar-product check against the line's direction vector \(\overrightarrow{AB}\).

> Source: Mathematics Textbook 2, page 47 (practice: prove \(\vec u\) perpendicular to \((AB)\)).

#### Common mistake

> **Common mistake:** concluding that a vector is **normal to a plane** after checking it against only **one** vector of the plane. Being orthogonal to a single direction makes \(\vec n\) perpendicular to just that line, not to the whole plane. You must verify orthogonality to **two non-collinear** vectors of the plane.

#### Special cases
- **Zero vector:** \(\vec 0\) is orthogonal to every vector but is **never** a normal vector (a normal must be non-zero).
- **Deducing perpendicularity of a line to a plane:** if a line's direction is normal to the plane, the line is perpendicular to the plane (and to every line of it).
- **Coordinate axes:** \(\vec i,\vec j,\vec k\) are pairwise orthogonal, so e.g. \(\vec k\) is normal to the plane \((O;\vec i,\vec j)\), i.e. the plane \(z=0\).

#### Practice set
1. **(B2-U2-L2-P01)** Are \(\vec u(1,2,2)\) and \(\vec v(2,-3,2)\) orthogonal? Justify.
2. **(B2-U2-L2-P02)** Find \(\alpha\) so that \(\vec u(1,\alpha,3)\) and \(\vec v(2,-2,1)\) are orthogonal.
3. **(B2-U2-L2-P03)** Find \(\alpha\) so that \(\vec u(\alpha,2,-1)\) and \(\vec v(3,\alpha,5)\) are orthogonal.
4. **(B2-U2-L2-P04)** Let \(A(1,0,0)\), \(B(1,1,0)\), \(C(1,0,1)\) span a plane \(\mathcal P\). Show that \(\vec n(1,0,0)\) is normal to \(\mathcal P\).
5. **(B2-U2-L2-P05)** *(near exam level)* Given that \(\vec u+\vec v\) and \(\vec u-\vec v\) are orthogonal, prove that \(\|\vec u\|=\|\vec v\|\).

#### Practice solutions
1. \(\vec u\cdot\vec v=(1)(2)+(2)(-3)+(2)(2)=2-6+4=0\); the scalar product is zero, so **yes, they are orthogonal**.
2. \(\vec u\cdot\vec v=(1)(2)+(\alpha)(-2)+(3)(1)=2-2\alpha+3=5-2\alpha\); set \(=0\Rightarrow\alpha=\dfrac{5}{2}\).
3. \(\vec u\cdot\vec v=(\alpha)(3)+(2)(\alpha)+(-1)(5)=3\alpha+2\alpha-5=5\alpha-5\); set \(=0\Rightarrow\alpha=1\).
4. Two non-collinear vectors of \(\mathcal P\): \(\overrightarrow{AB}=(0,1,0)\) and \(\overrightarrow{AC}=(0,0,1)\). Then \(\vec n\cdot\overrightarrow{AB}=0\) and \(\vec n\cdot\overrightarrow{AC}=0\); since \(\vec n\) is orthogonal to two non-collinear vectors of \(\mathcal P\), it is **normal** to \(\mathcal P\) (indeed \(\mathcal P\) is the plane \(x=1\)).
5. \((\vec u+\vec v)\cdot(\vec u-\vec v)=0\). But \((\vec u+\vec v)\cdot(\vec u-\vec v)=\|\vec u\|^2-\|\vec v\|^2\), so \(\|\vec u\|^2=\|\vec v\|^2\), hence \(\|\vec u\|=\|\vec v\|\) (norms are non-negative).

#### Lesson summary
- **Most important definition:** \(\vec u\perp\vec v\iff\vec u\cdot\vec v=0\); a normal vector is a non-zero vector perpendicular to a whole plane.
- **Most important formula:** in coordinates, orthogonality is \(xx'+yy'+zz'=0\).
- **Most important condition:** normal to a plane = orthogonal to **two non-collinear** vectors of it.
- **Most important pattern:** parameter problems become one linear equation \(\vec u\cdot\vec v=0\).
- **Most common mistake:** declaring a vector normal after only one orthogonality check.
- **Quick self-check:** is \(\vec n(0,0,1)\) normal to the plane \(z=0\)? *(Answer: yes — it is orthogonal to \(\vec i\) and \(\vec j\), two non-collinear vectors of that plane.)*

---

<a id="b2u2-l3"></a>
### Lesson 3: Cartesian equation of a plane and distance to it

#### Core idea

This lesson is where the scalar product pays off spectacularly. A plane in space is completely fixed by **one point on it** and **one normal vector**. From just these two data, the condition \(\overrightarrow{AM}\cdot\vec n=0\) — "the vector from the point to a general point of the plane is perpendicular to the normal" — expands into a linear equation
\[
ax+by+cz+d=0,
\]
the **Cartesian equation of the plane**. Conversely, any such equation (with \(a,b,c\) not all zero) is a plane whose normal vector you can read straight off the coefficients: \(\vec n(a,b,c)\). This dictionary between *equations* and *geometry* is the heart of the unit.

The second result measures **distance**: how far a point \(M_0\) is from a plane. The answer is a single formula, proved by projecting \(M_0\) onto the plane along the normal direction. It is the exact three-dimensional twin of the point-to-line distance you saw in the plane.

**How does a student recognise this lesson?** When asked to "find the equation of the plane through … with normal …", "find a normal vector of a plane given by an equation", "find the distance from a point to a plane", or "decide whether two planes are parallel / perpendicular". The confusing points are getting the sign of \(d\) right and remembering that the numerator of the distance uses the plane's own constant term \(d\).

#### Prerequisite knowledge
- The normal-vector characterisation \(M\in\mathcal P\iff\overrightarrow{AM}\cdot\vec n=0\) (Lesson 2).
- Coordinates of \(\overrightarrow{AM}\) and the scalar-product form \(xx'+yy'+zz'\).
- The point-to-line distance formula in the plane, whose proof is mirrored here.

#### Definitions

**Definition (Cartesian equation of a plane).** In an orthonormal frame, a **Cartesian equation of a plane** \(\mathcal P\) is a relation
\[
ax+by+cz+d=0,\qquad (a,b,c)\neq(0,0,0),
\]
satisfied by the coordinates \((x,y,z)\) of a point exactly when that point lies on \(\mathcal P\); the vector \(\vec n(a,b,c)\) is then a normal vector to \(\mathcal P\).

> Source: Mathematics Textbook 2, pages 48–51.

#### Formulas and properties

**Plane through a point with a given normal.** The plane through \(A(x_A,y_A,z_A)\) with normal \(\vec n(a,b,c)\) has equation
\[
a(x-x_A)+b(y-y_A)+c(z-z_A)=0,
\]
which expands to \(ax+by+cz+d=0\) with \(d=-(ax_A+by_A+cz_A)\).

**Distance from a point to a plane.** For \(\mathcal P:\ ax+by+cz+d=0\) and a point \(M_0(x_0,y_0,z_0)\),
\[
\operatorname{dist}(M_0,\mathcal P)=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}.
\]

**Relative position of two planes** with normals \(\vec n,\vec n'\):
- **parallel** \(\iff\vec n\parallel\vec n'\) (normals collinear, i.e. proportional coefficients);
- **perpendicular** \(\iff\vec n\cdot\vec n'=0\);
- otherwise they **intersect** along a line.

> **Important condition:** the distance formula requires the plane written as \(ax+by+cz+d=0\) (right-hand side \(0\)) and an **orthonormal** frame. The numerator is the left-hand side evaluated at \(M_0\), taken in absolute value.

> **Special case:** the origin \(O(0,0,0)\) lies on \(\mathcal P\) iff \(d=0\). So a plane passes through the origin exactly when its equation has no constant term.

#### Theorems and proofs

**Theorem (existence of the Cartesian equation).** In an orthonormal frame:
1. every plane \(\mathcal P\) admits an equation \(ax+by+cz+d=0\) with \((a,b,c)\neq(0,0,0)\), and \(\vec n(a,b,c)\) is normal to \(\mathcal P\);
2. conversely, for reals \(a,b,c,d\) with \((a,b,c)\neq(0,0,0)\), the set of points \(M(x,y,z)\) satisfying \(ax+by+cz+d=0\) is a plane with normal \(\vec n(a,b,c)\).

*Proof.* Choose a normal \(\vec n(a,b,c)\) and a point \(A(x_A,y_A,z_A)\in\mathcal P\). Then
\[
M(x,y,z)\in\mathcal P\iff\overrightarrow{AM}\cdot\vec n=0\iff a(x-x_A)+b(y-y_A)+c(z-z_A)=0,
\]
which rearranges to \(ax+by+cz+d=0\) with \(d=-(ax_A+by_A+cz_A)\). Conversely, given the equation, pick any particular solution \(A(x_A,y_A,z_A)\) (possible since \((a,b,c)\neq(0,0,0)\)); subtracting \(ax_A+by_A+cz_A+d=0\) returns \(a(x-x_A)+b(y-y_A)+c(z-z_A)=0\), i.e. \(\overrightarrow{AM}\cdot\vec n=0\), the plane through \(A\) normal to \(\vec n\). \(\blacksquare\)

**Theorem (distance from a point to a plane).** With \(\mathcal P:\ ax+by+cz+d=0\) and \(M_0(x_0,y_0,z_0)\), the distance is \(\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\).

*Proof.* Let \(H\) be the orthogonal projection of \(M_0\) onto \(\mathcal P\), so \(\operatorname{dist}(M_0,\mathcal P)=M_0H\), and \(\overrightarrow{M_0H}\) is collinear with the normal \(\vec n(a,b,c)\). Hence
\[
\big|\vec n\cdot\overrightarrow{M_0H}\big|=\|\vec n\|\,M_0H=\sqrt{a^2+b^2+c^2}\;M_0H.\tag{$*$}
\]
Writing \(H(x_H,y_H,z_H)\),
\[
\vec n\cdot\overrightarrow{M_0H}=a(x_H-x_0)+b(y_H-y_0)+c(z_H-z_0)=\underbrace{(ax_H+by_H+cz_H)}_{=-d\ (H\in\mathcal P)}-(ax_0+by_0+cz_0),
\]
which equals \(-(ax_0+by_0+cz_0+d)\). Substituting into \((*)\),
\[
M_0H=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}. \qquad\blacksquare
\]
The student is expected to **apply** both theorems; the distance proof is the same "project along the normal" template used for the point-to-line distance in the plane.

#### Recognising the idea and the solution method
- **Given a point and a normal** → write \(a(x-x_A)+b(y-y_A)+c(z-z_A)=0\) and expand.
- **Given an equation** \(ax+by+cz+d=0\) → the normal is \(\vec n(a,b,c)\); read it off immediately.
- **Distance wanted** → plug \(M_0\) into the left-hand side, take \(|\cdot|\), divide by \(\sqrt{a^2+b^2+c^2}\).
- **Two planes** → compare normals: proportional ⇒ parallel; \(\vec n\cdot\vec n'=0\) ⇒ perpendicular.

**Standard algorithm (equation of a plane from a point and a normal):**
1. Identify \(A(x_A,y_A,z_A)\) and \(\vec n(a,b,c)\).
2. Write \(a(x-x_A)+b(y-y_A)+c(z-z_A)=0\).
3. Expand and collect into \(ax+by+cz+d=0\).
4. Check by substituting \(A\): the equation must give \(0\).

#### Basic example

**B2-U2-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** In an orthonormal frame, find a Cartesian equation of the plane \(\mathcal P\) through \(A(3,2,-1)\) with normal vector \(\vec n(1,1,1)\).

**Why this method applies.** A point and a normal fully determine a plane through \(\overrightarrow{AM}\cdot\vec n=0\).

**Step-by-step solution.**
\[
M(x,y,z)\in\mathcal P\iff \overrightarrow{AM}\cdot\vec n=0\iff 1(x-3)+1(y-2)+1(z+1)=0.
\]
Expanding: \(x-3+y-2+z+1=0\Rightarrow x+y+z-4=0\).

**Final answer.** \(\mathcal P:\ x+y+z-4=0\).

**Verification.** Substitute \(A(3,2,-1)\): \(3+2-1-4=0\). ✓ The coefficients \((1,1,1)\) reproduce \(\vec n\).

**What the student should learn.** The normal's components become the coefficients of \(x,y,z\); the constant \(d\) is fixed by forcing the given point to satisfy the equation.

> Source: example created in the style of the practice on page 50 (\(\vec n(1,1,1)\), \(A(3,2,-1)\)).

#### Textbook-level example

**B2-U2-L3-E02**

**Problem.** In an orthonormal frame, give an equation of the plane \(\mathcal P\) passing through \(A(2,1,-3)\) and admitting \(\vec n(1,1,2)\) as a normal vector.

**Problem analysis.** Identical structure to the standard algorithm; watch the sign at \(z\) since \(z_A=-3\).

**Step-by-step solution.**
\[
M(x,y,z)\in\mathcal P\iff \overrightarrow{AM}\cdot\vec n=0\iff 1\cdot(x-2)+1\cdot(y-1)+2\cdot(z-(-3))=0.
\]
\[
(x-2)+(y-1)+2(z+3)=0\ \Rightarrow\ x-2+y-1+2z+6=0\ \Rightarrow\ x+y+2z+3=0.
\]

**Final answer.** \(\mathcal P:\ x+y+2z+3=0\).

**Verification.** Substitute \(A(2,1,-3)\): \(2+1+2(-3)+3=2+1-6+3=0\). ✓

**What the student should learn.** The term \(z-(-3)=z+3\) is the classic sign trap; always write \(z-z_A\) before simplifying.

> Source: Mathematics Textbook 2, page 49 (worked example: \(A(2,1,-3)\), \(\vec n(1,1,2)\)).

#### Harder / composite example

**B2-U2-L3-E03**

**Problem.** In an orthonormal frame, let \(\mathcal P:\ 2x-2y+3z-5=0\).
(a) Compute the distance from \(A(1,-3,4)\) to \(\mathcal P\).
(b) Decide the relative position of \(\mathcal P\) and \(\mathcal Q:\ x-2y+2z-1=0\), and if they are not parallel find the distance from \(B(2,2,5)\) to \(\mathcal Q\).

**Problem analysis.** Part (a) is a direct distance computation. Part (b) compares normals \(\vec n(2,-2,3)\) and \(\vec n'(1,-2,2)\): test proportionality (parallel?) and their scalar product (perpendicular?), then a second distance.

**Step-by-step solution.**
(a) With \(a=2,b=-2,c=3,d=-5\) and \(M_0=A(1,-3,4)\):
\[
ax_0+by_0+cz_0+d=2(1)-2(-3)+3(4)-5=2+6+12-5=15,
\]
\[
\sqrt{a^2+b^2+c^2}=\sqrt{4+4+9}=\sqrt{17},\qquad
\operatorname{dist}(A,\mathcal P)=\frac{|15|}{\sqrt{17}}=\frac{15}{\sqrt{17}}=\frac{15\sqrt{17}}{17}\approx3.64.
\]

(b) Normals \(\vec n(2,-2,3)\), \(\vec n'(1,-2,2)\). They are **not proportional** (\(\tfrac{2}{1}=2\) but \(\tfrac{-2}{-2}=1\)), so the planes are **not parallel**; and \(\vec n\cdot\vec n'=2\cdot1+(-2)(-2)+3\cdot2=2+4+6=12\neq0\), so they are **not perpendicular**. Hence \(\mathcal P\) and \(\mathcal Q\) **intersect along a line**. Distance from \(B(2,2,5)\) to \(\mathcal Q:\ x-2y+2z-1=0\):
\[
\frac{|1(2)-2(2)+2(5)-1|}{\sqrt{1+4+4}}=\frac{|2-4+10-1|}{3}=\frac{7}{3}\approx2.33.
\]

**Final answer.** (a) \(\dfrac{15}{\sqrt{17}}=\dfrac{15\sqrt{17}}{17}\approx3.64\). (b) The planes intersect along a line (neither parallel nor perpendicular); \(\operatorname{dist}(B,\mathcal Q)=\dfrac{7}{3}\).

**Verification.** (a) \(15^2=225\) and \((\sqrt{17})^2=17\), so the distance squared is \(225/17\approx13.24\); positive and finite, as required. (b) \(\vec n\cdot\vec n'=12>0\) confirms the planes are not perpendicular; the coefficients \(2,-2\) vs \(1,-2\) confirm non-parallel.

**What the student should learn.** Two independent skills: the distance formula uses the plane's own \(d\); the relative position of two planes is entirely decided by their normal vectors.

> Source: Mathematics Textbook 2, page 50 (distance from \(A(1,-3,4)\) to \(2x-2y+3z-5=0\); relative-position practice).

#### Common mistake

> **Common mistake:** dropping the constant \(d\) from the numerator of the distance, i.e. computing \(\dfrac{|ax_0+by_0+cz_0|}{\sqrt{a^2+b^2+c^2}}\). The numerator must be the **whole** left-hand side of \(ax+by+cz+d=0\) evaluated at the point, **including** \(d\). Also, always rewrite the equation with \(0\) on the right first; a form like \(ax+by+cz=k\) must become \(ax+by+cz-k=0\).

#### Special cases
- **Plane through the origin:** \(d=0\), e.g. \(2x-y+z=0\).
- **Coordinate planes:** \(z=0\) (normal \(\vec k\)), \(y=0\) (normal \(\vec j\)), \(x=0\) (normal \(\vec i\)).
- **Planes parallel to a coordinate plane:** e.g. \(z=3\) is parallel to \(z=0\), normal \(\vec k\).
- **Perpendicular-bisector plane** of a segment \([AB]\): passes through the midpoint of \([AB]\) with normal \(\overrightarrow{AB}\); every point on it is equidistant from \(A\) and \(B\).

#### Practice set
1. **(B2-U2-L3-P01)** Give a Cartesian equation of the plane through \(A(2,3,-1)\) with normal \(\vec n(-1,2,-1)\).
2. **(B2-U2-L3-P02)** Give a Cartesian equation of the plane through \(A(2,0,1)\) with normal \(\vec n(2,-1,1)\), and write down a normal vector to the plane \(3x-y+4z+7=0\).
3. **(B2-U2-L3-P03)** Compute the distance from the origin \(O\) to the plane \(x+y+2z+3=0\).
4. **(B2-U2-L3-P04)** Decide the relative position of \(\mathcal P:\ x+3z-1=0\) and \(\mathcal Q:\ 2x-4y-6z+1=0\). *(compare normals)*
5. **(B2-U2-L3-P05)** *(near exam level)* Find a Cartesian equation of the perpendicular-bisector plane of \([AB]\) where \(A(1,2,3)\), \(B(3,4,5)\), and verify that \(A\) and \(B\) are equidistant from it.

#### Practice solutions
1. \(-1(x-2)+2(y-3)-1(z+1)=0\Rightarrow -x+2+2y-6-z-1=0\Rightarrow -x+2y-z-5=0\) (equivalently \(x-2y+z+5=0\)). Check at \(A\): \(-2+6+1-5=0\). ✓
2. \(2(x-2)-1(y-0)+1(z-1)=0\Rightarrow 2x-4-y+z-1=0\Rightarrow 2x-y+z-5=0\). A normal to \(3x-y+4z+7=0\) is \(\vec n(3,-1,4)\) (read off the coefficients).
3. \(\dfrac{|0+0+0+3|}{\sqrt{1+1+4}}=\dfrac{3}{\sqrt{6}}=\dfrac{3\sqrt6}{6}=\dfrac{\sqrt6}{2}\approx1.22.\)
4. Normals \(\vec n(1,0,3)\), \(\vec n'(2,-4,-6)\). Not proportional (\(\tfrac{2}{1}=2\) but the \(y\)-component of \(\vec n\) is \(0\) while \(\vec n'\) has \(-4\neq0\)); and \(\vec n\cdot\vec n'=1\cdot2+0\cdot(-4)+3\cdot(-6)=2-18=-16\neq0\). So the planes are **neither parallel nor perpendicular**: they **intersect along a line**.
5. Midpoint \(I=\left(\tfrac{1+3}{2},\tfrac{2+4}{2},\tfrac{3+5}{2}\right)=(2,3,4)\); normal \(\overrightarrow{AB}=(2,2,2)\), simplify to \(\vec n(1,1,1)\). Plane: \(1(x-2)+1(y-3)+1(z-4)=0\Rightarrow x+y+z-9=0\). Distances: \(\operatorname{dist}(A)=\dfrac{|1+2+3-9|}{\sqrt3}=\dfrac{3}{\sqrt3}=\sqrt3\) and \(\operatorname{dist}(B)=\dfrac{|3+4+5-9|}{\sqrt3}=\dfrac{3}{\sqrt3}=\sqrt3\); equal, as required. ✓

#### Lesson summary
- **Most important definition:** a Cartesian equation of a plane is \(ax+by+cz+d=0\) with \((a,b,c)\neq(0,0,0)\), normal \(\vec n(a,b,c)\).
- **Most important formulas:** plane through \(A\) with normal \(\vec n\): \(a(x-x_A)+b(y-y_A)+c(z-z_A)=0\); distance \(\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\).
- **Most important condition:** the distance numerator includes \(d\); equation must have \(0\) on the right; frame orthonormal.
- **Most important pattern:** coefficients of \(x,y,z\) are the normal; two planes are compared through their normals.
- **Most common mistake:** forgetting \(d\) in the distance, or a sign error in \(z-z_A\).
- **Quick self-check:** what is a normal vector of the plane \(2x-y+5z-1=0\)? *(Answer: \(\vec n(2,-1,5)\).)*

---

<a id="b2-u2-test"></a>
### Chapter summary & review test — Unit 2

#### Chapter summary
The unit lifts the **scalar product** into space: \(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta=xx'+yy'+zz'\) (orthonormal frame), with \(\|\vec u\|=\sqrt{x^2+y^2+z^2}\), symmetry and bilinearity. Orthogonality is the test \(\vec u\cdot\vec v=0\); a **normal vector** to a plane is a non-zero vector orthogonal to two non-collinear vectors of it. A plane is then encoded by a **Cartesian equation** \(ax+by+cz+d=0\) whose coefficients form a normal \(\vec n(a,b,c)\), and the **distance** from a point to the plane is \(\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\).

#### Essential formulas
\[
\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta=xx'+yy'+zz',\qquad \|\vec u\|=\sqrt{x^2+y^2+z^2},
\]
\[
\vec u\perp\vec v\iff\vec u\cdot\vec v=0,\qquad
\mathcal P:\ a(x-x_A)+b(y-y_A)+c(z-z_A)=0\ \Longleftrightarrow\ ax+by+cz+d=0,
\]
\[
\operatorname{dist}(M_0,\mathcal P)=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}.
\]

#### Essential theorems/results
- \(\vec u\cdot\vec u=\|\vec u\|^2\); \(\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2+2\,\vec u\cdot\vec v\); \((\vec u+\vec v)\cdot(\vec u-\vec v)=\|\vec u\|^2-\|\vec v\|^2\).
- \(M\in\mathcal P\iff\overrightarrow{AM}\cdot\vec n=0\); a vector is normal to a plane iff orthogonal to two non-collinear vectors of it.
- Existence of a Cartesian equation for every plane, with normal \(\vec n(a,b,c)\); the point-to-plane distance formula.
- Two planes: parallel \(\iff\vec n\parallel\vec n'\); perpendicular \(\iff\vec n\cdot\vec n'=0\); \(O\in\mathcal P\iff d=0\).

#### Main problem patterns
Compute a scalar product / angle; expand norm identities; test orthogonality of vectors or lines; find a parameter for orthogonality; show a vector is normal to a plane; write a plane's equation from a point and a normal; compute a point-to-plane distance; classify two planes; find a perpendicular-bisector plane / sphere data.

#### Connections between the chapter's ideas
The scalar product is the single engine: it defines the **angle** (Lesson 1), the **orthogonality** and normal vector (Lesson 2), and through \(\overrightarrow{AM}\cdot\vec n=0\) the **plane equation** and **distance** (Lesson 3). Perpendicular-bisector planes lead directly to spheres and circumscribed-sphere problems in the exercises.

#### Recommended study order
Scalar product & its three forms ← norms and the expansion identities ← orthogonality test ← normal vector to a plane ← Cartesian equation from a point + normal ← distance to a plane ← relative position of two planes.

#### Chapter checklist
- [ ] I compute \(\vec u\cdot\vec v\) and the angle between two vectors.
- [ ] I test orthogonality and prove a vector is normal to a plane (two non-collinear vectors).
- [ ] I write a plane's Cartesian equation and read its normal off the coefficients.
- [ ] I compute the distance from a point to a plane, remembering \(d\) in the numerator.

#### Chapter review test
1. For \(\vec u(1,2,2)\) and \(\vec v(2,2,1)\), compute \(\vec u\cdot\vec v\) and the angle between them.
2. \(A(2,-5,1)\), \(B(0,2,6)\), \(\vec u(-4,1,-3)\). Show that \(\vec u\perp(AB)\).
3. Find \(\alpha\) so that \(\vec u(\alpha,2,-1)\) and \(\vec v(3,\alpha,5)\) are orthogonal.
4. Give a Cartesian equation of the plane through \(A(2,1,-3)\) with normal \(\vec n(1,1,2)\), then find a normal vector of the plane \(4x-3y+z-2=0\).
5. Compute the distance from \(M(3,1,-2)\) to the plane \(2x-2y+z+6=0\).
6. Decide the relative position of \(\mathcal P:\ 2x-3y+5z+4=0\) and \(\mathcal Q:\ 6x-11y-5z-7=0\).
7. Find a Cartesian equation of the perpendicular-bisector plane of \([AB]\) with \(A(1,2,3)\), \(B(3,4,5)\).
8. Show that \(x^2+y^2+z^2-2x+4y-2z-3=0\) is the equation of a sphere; give its centre and radius.

#### Model solutions for the chapter review test
1. \(\vec u\cdot\vec v=(1)(2)+(2)(2)+(2)(1)=2+4+2=8\); \(\|\vec u\|=\|\vec v\|=\sqrt{1+4+4}=3\); \(\cos\theta=\dfrac{8}{3\cdot3}=\dfrac{8}{9}\Rightarrow\theta=\arccos\dfrac{8}{9}\approx27.3^\circ\).
2. \(\overrightarrow{AB}=(-2,7,5)\); \(\vec u\cdot\overrightarrow{AB}=(-4)(-2)+(1)(7)+(-3)(5)=8+7-15=0\), so \(\vec u\perp(AB)\).
3. \(\vec u\cdot\vec v=3\alpha+2\alpha-5=5\alpha-5=0\Rightarrow\alpha=1\).
4. \(1(x-2)+1(y-1)+2(z+3)=0\Rightarrow x+y+2z+3=0\). A normal of \(4x-3y+z-2=0\) is \(\vec n(4,-3,1)\).
5. \(\dfrac{|2(3)-2(1)+(-2)+6|}{\sqrt{4+4+1}}=\dfrac{|6-2-2+6|}{3}=\dfrac{8}{3}\approx2.67\).
6. Normals \(\vec n(2,-3,5)\), \(\vec n'(6,-11,-5)\). Not proportional (\(\tfrac{6}{2}=3\) but \(\tfrac{-11}{-3}\neq3\)), so not parallel; \(\vec n\cdot\vec n'=12+33-25=20\neq0\), so not perpendicular. Hence \(\mathcal P\) and \(\mathcal Q\) **intersect along a line**.
7. Midpoint \(I=(2,3,4)\), normal \(\overrightarrow{AB}=(2,2,2)\sim(1,1,1)\); plane \(1(x-2)+1(y-3)+1(z-4)=0\Rightarrow x+y+z-9=0\).
8. Complete the square: \((x^2-2x)+(y^2+4y)+(z^2-2z)=3\Rightarrow (x-1)^2-1+(y+2)^2-4+(z-1)^2-1=3\Rightarrow (x-1)^2+(y+2)^2+(z-1)^2=9\). This is a sphere with **centre** \((1,-2,1)\) and **radius** \(3\).

---

<a id="b2-u3"></a>
## Unit 3: Lines and Planes in Space

> Source: Mathematics Textbook 2, pages 64–87.

### Unit overview

This unit turns the vectors and coordinate frame of the previous unit into a working machine for describing **lines** and **planes** in three-dimensional space, and for answering the central question: *where do two of these objects meet?*

- **Barycentric description:** a line is exactly the set of **barycenters** of two weighted points, and a plane the set of barycenters of three non-collinear weighted points. This viewpoint makes concurrency proofs almost mechanical.
- **Parametric representations:** a point runs along a line as \(M=A+t\vec u\), and sweeps a plane as \(M=A+t\vec u+s\vec v\). One free parameter for a line, two for a plane — that count is the whole idea.
- **Intersections:** every relative-position question (two planes, a line and a plane, three planes) becomes a **linear system**. The *number and nature* of its solutions — one point, a line, a plane, or nothing — reads off directly as the geometry.

**Why it matters:** solving \(3\times3\) linear systems and reading their solution sets geometrically is a recurring exam skill, and it feeds directly into analytic geometry, the scalar product on planes, and later coordinate proofs.

**Prerequisites:** vectors in space and collinearity/coplanarity (Unit 1), the coordinate frame \((O,\vec i,\vec j,\vec k)\), and solving linear systems by substitution and elimination.

**Main question types:** write a parametric representation of a line or plane; convert between Cartesian and parametric; find where a line cuts a plane; decide whether two planes are secant/parallel/coincident and find their common line; classify three planes by solving a \(3\times3\) system; prove concurrency by barycenters.

### Unit concept map

```text
Lines & Planes in Space
├── Barycenters
│   ├── Line (AB) = barycenters of (A,1−t),(B,t),  t∈ℝ   (segment: t∈[0,1])
│   └── Plane (ABC) = barycenters of (A,1−x−y),(B,x),(C,y)
├── Parametric representations
│   ├── Line: M = A + t·u        (one parameter, direction vector u)
│   └── Plane: M = A + t·u + s·v  (two parameters, u,v non-collinear)
├── Cartesian ↔ parametric
│   └── Plane: a x + b y + c z + d = 0,  normal n(a,b,c)
└── Intersections = linear systems
    ├── two planes (2×3): line / none / coincident
    ├── line ∩ plane: sub into eqn → (u·n)t + k = 0 → point / none / line⊂plane
    └── three planes (3×3): point / line / plane / none
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \((1-t)\overrightarrow{MA}+t\overrightarrow{MB}=\vec0\) | \(M\) barycenter of \((A,1-t),(B,t)\) | \(A\neq B\) | if the two weights sum to \(0\) | describes the line \((AB)\); segment for \(t\in[0,1]\) |
| \(M=A+t\vec u\) | \(\vec u(a,b,c)\) direction vector | \(\vec u\neq\vec0\) | if \(\vec u=\vec0\) (no direction) | line; \(t\in[0,1]\) segment, \(t\ge0\) ray |
| \(\begin{cases}x=x_0+ta\\y=y_0+tb\\z=z_0+tc\end{cases}\) | \(A(x_0,y_0,z_0)\), one parameter \(t\) | \((a,b,c)\neq(0,0,0)\) | to describe a plane (needs 2 params) | componentwise form of \(M=A+t\vec u\) |
| \(M=A+t\vec u+s\vec v\) | \(\vec u,\vec v\) two directions | \(\vec u,\vec v\) non-collinear | if \(\vec u\parallel\vec v\) (gives a line) | plane; two free parameters \(t,s\) |
| \(ax+by+cz+d=0\) | \(\vec n(a,b,c)\) normal vector | \((a,b,c)\neq(0,0,0)\) | for a line in space (a line needs two such) | Cartesian equation of a plane |
| \((\vec u\cdot\vec n)\,t+k=0\) | line \(A+t\vec u\) into plane | — | — | one point if \(\vec u\cdot\vec n\neq0\); else none or line\(\subset\)plane |
| \(3\times3\) system \((S)\) | three planes' equations | — | — | one point / a line / a plane / no point |

### Unit learning checklist

- [ ] I can write a point on a line/segment as a barycenter of the endpoints.
- [ ] I write the parametric representation of a line from a point and a direction vector.
- [ ] I write the parametric representation of a plane from a point and two directions.
- [ ] I convert a plane between its parametric and Cartesian forms.
- [ ] I find the intersection point of a line and a plane, or show they are parallel/contained.
- [ ] I decide whether two planes are secant, parallel, or coincident, and find the common line.
- [ ] I classify three planes by solving and discussing a \(3\times3\) system.

---

<a id="b2u3-l1"></a>
### Lesson 1: Line and plane as sets of barycenters

#### Core idea

A **barycenter** (centre of mass) of weighted points is the single point that "balances" them. The surprising fact of this lesson is that the *line* through \(A\) and \(B\), and the *plane* through three non-collinear points \(A,B,C\), are nothing other than **sets of barycenters** of those points as the weights vary.

Start with two points. Saying \(M\) lies on line \((AB)\) means \(\overrightarrow{AM}=t\,\overrightarrow{AB}\) for some real \(t\). Rewriting this with Chasles' relation turns it into a *balance condition* \((1-t)\overrightarrow{MA}+t\overrightarrow{MB}=\vec0\): so \(M\) is the barycenter of \((A,1-t)\) and \((B,t)\), two weights that always **sum to \(1\)**. Let \(t\) run over all reals and \(M\) sweeps the whole line; restrict \(t\in[0,1]\) and \(M\) stays on the segment \([AB]\).

**How does a student recognise this lesson?** When you see weighted-point relations such as \(\alpha\overrightarrow{MA}+\beta\overrightarrow{MB}=\vec0\), or a request to *prove three lines are concurrent* or *three points collinear*, or to *locate a point defined by weights*. The recurring confusion is forgetting that the weights must **sum to a nonzero constant** for a barycenter to exist, and mixing up \(\overrightarrow{MA}\) (from \(M\) to \(A\)) with \(\overrightarrow{AM}\).

#### Prerequisite knowledge
- Chasles' relation \(\overrightarrow{AB}=\overrightarrow{AM}+\overrightarrow{MB}\) and vector algebra in space.
- Collinearity of vectors: \(\vec u,\vec v\) collinear \(\Leftrightarrow \vec u=\lambda\vec v\).
- The meaning of a coordinate frame \((O,\vec i,\vec j,\vec k)\).

#### Definitions

**Definition (weighted point and barycenter).** A *weighted point* \((A,\alpha)\) is a point \(A\) carrying a real coefficient (mass) \(\alpha\). Given weighted points \((A,\alpha),(B,\beta),\dots\) with \(\alpha+\beta+\cdots\neq0\), their **barycenter** is the unique point \(G\) satisfying \(\alpha\overrightarrow{GA}+\beta\overrightarrow{GB}+\cdots=\vec0\).

**Definition (line/segment as barycenters).** For \(A\neq B\), the point \(M\) with \(\overrightarrow{AM}=t\,\overrightarrow{AB}\) is the barycenter of \((A,1-t)\) and \((B,t)\). As \(t\) ranges over \(\mathbb{R}\), \(M\) describes the **line** \((AB)\); for \(t\in[0,1]\), \(M\) describes the **segment** \([AB]\).

**Definition (plane as barycenters).** For \(A,B,C\) non-collinear, \(M\in(ABC)\) \(\Leftrightarrow\) there exist reals \(x,y\) with \(\overrightarrow{AM}=x\,\overrightarrow{AB}+y\,\overrightarrow{AC}\); equivalently \(M\) is the barycenter of \((A,1-x-y),(B,x),(C,y)\).

> Source: Mathematics Textbook 2, pages 67–68.

#### Formulas and properties

**Line/segment.** From \(\overrightarrow{AM}=t\,\overrightarrow{AB}\) and \(\overrightarrow{AB}=\overrightarrow{AM}+\overrightarrow{MB}\):
\[
\overrightarrow{AM}=t\big(\overrightarrow{AM}+\overrightarrow{MB}\big)\ \Longrightarrow\ (1-t)\,\overrightarrow{MA}+t\,\overrightarrow{MB}=\vec0 .
\]
The two weights \(1-t\) and \(t\) always sum to \(1\).

**Plane.** Expanding \(\overrightarrow{AM}=x\,\overrightarrow{AB}+y\,\overrightarrow{AC}\) the same way,
\[
(1-x-y)\,\overrightarrow{MA}+x\,\overrightarrow{MB}+y\,\overrightarrow{MC}=\vec0,
\]
so the weights \(1-x-y,\ x,\ y\) sum to \(1\).

> **Important condition:** a barycenter exists **only** when the sum of weights is nonzero. If \(\alpha+\beta=0\) (e.g. \(\overrightarrow{MA}-\overrightarrow{MB}=\vec0\)) there is no barycenter; the relation instead expresses a *fixed vector* (\(\overrightarrow{BA}\)) independent of \(M\).

> **Warning:** multiplying all weights by the same nonzero number does not move the barycenter. So \((A,2),(B,1)\) and \((A,4),(B,2)\) define the **same** point. Only the *ratios* matter.

#### Theorems and proofs

**Theorem (plane as barycenters).** Let \(A,B,C\) be non-collinear. Then \(M\in(ABC)\) if and only if \(\overrightarrow{AM}=x\,\overrightarrow{AB}+y\,\overrightarrow{AC}\) for some reals \(x,y\), i.e. \(M\) is the barycenter of \((A,1-x-y),(B,x),(C,y)\).

*Proof (the book proves it; you should be able to reproduce it).* If \(M\in(ABC)\), then \(\overrightarrow{AM}\) lies in the plane spanned by the non-collinear \(\overrightarrow{AB},\overrightarrow{AC}\), so unique reals \(x,y\) give \(\overrightarrow{AM}=x\overrightarrow{AB}+y\overrightarrow{AC}\). Replace \(\overrightarrow{AB}=\overrightarrow{AM}+\overrightarrow{MB}\) and \(\overrightarrow{AC}=\overrightarrow{AM}+\overrightarrow{MC}\):
\[
\overrightarrow{AM}=x(\overrightarrow{AM}+\overrightarrow{MB})+y(\overrightarrow{AM}+\overrightarrow{MC}).
\]
Grouping, \((1-x-y)\overrightarrow{AM}=x\overrightarrow{MB}+y\overrightarrow{MC}\), and since \(\overrightarrow{AM}=-\overrightarrow{MA}\),
\[
(1-x-y)\overrightarrow{MA}+x\overrightarrow{MB}+y\overrightarrow{MC}=\vec0 .
\]
Conversely, any \((x,y)\) yields a point of the plane by the same identity. \(\blacksquare\)

#### Recognising the idea and the solution method
- **If you are given** a relation \(\alpha\overrightarrow{MA}+\beta\overrightarrow{MB}(+\gamma\overrightarrow{MC})=\vec0\) → read off the barycenter with those weights.
- **If asked** to prove lines/cevians are concurrent → show a single point is a common barycenter of the relevant vertices (with one fixed total weight).
- **If asked** to locate \(M\) on \((AB)\) at ratio → convert \(\overrightarrow{AM}=t\overrightarrow{AB}\) to weights \((1-t,t)\).

**Standard algorithm (find/verify a barycenter):**
1. Check the weights sum to a nonzero number \(s\).
2. Pick a convenient origin \(P\) (often \(A\)); rewrite each \(\overrightarrow{GX}=\overrightarrow{GP}+\overrightarrow{PX}\).
3. Solve for \(\overrightarrow{PG}=\dfrac1s\big(\alpha\overrightarrow{PA}+\beta\overrightarrow{PB}+\cdots\big)\).
4. Read the position (or, for concurrency, check two constructions give equal barycentric data).

#### Basic example

**B2-U3-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Point \(M\) on line \((AB)\) satisfies \(\overrightarrow{AM}=\tfrac13\overrightarrow{AB}\). Express \(M\) as a barycenter of \(A\) and \(B\), and state whether \(M\) is on the segment \([AB]\).

**Why this method applies.** A point given by \(\overrightarrow{AM}=t\overrightarrow{AB}\) is, by definition, the barycenter of \((A,1-t),(B,t)\).

**Step-by-step solution.** Here \(t=\tfrac13\), so the weights are \(1-t=\tfrac23\) and \(t=\tfrac13\):
\[
\tfrac23\,\overrightarrow{MA}+\tfrac13\,\overrightarrow{MB}=\vec0\quad\Longleftrightarrow\quad 2\,\overrightarrow{MA}+\overrightarrow{MB}=\vec0 .
\]
So \(M\) is the barycenter of \((A,2),(B,1)\).

**Final answer.** \(M\) = barycenter of \((A,2),(B,1)\); since \(t=\tfrac13\in[0,1]\), \(M\) **is** on the segment \([AB]\).

**Verification.** From \(2\overrightarrow{MA}+\overrightarrow{MB}=\vec0\): \(\overrightarrow{AM}=\tfrac{1}{2+1}\overrightarrow{AB}=\tfrac13\overrightarrow{AB}\). ✔

**What the student should learn.** Weights \((1-t,t)\) can be scaled to whole numbers; the fraction \(t\) is exactly the "distance ratio" \(AM/AB\).

> Source: example in the style of the exercises on pages 69–70.

#### Textbook-level example

**B2-U3-L1-E02**

**Problem.** In triangle \(ABC\), let \(G\) be the barycenter of \((A,2),(B,3),(C,1)\). Express \(\overrightarrow{AG}\) in terms of \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\), and confirm \(G\) lies in the plane \((ABC)\).

**Problem analysis.** The total weight is \(2+3+1=6\neq0\), so \(G\) exists. Taking \(A\) as origin isolates \(\overrightarrow{AG}\).

**Step-by-step solution.** By definition \(2\overrightarrow{GA}+3\overrightarrow{GB}+\overrightarrow{GC}=\vec0\). Write each vector from \(A\): \(\overrightarrow{GA}=-\overrightarrow{AG}\), \(\overrightarrow{GB}=\overrightarrow{AB}-\overrightarrow{AG}\), \(\overrightarrow{GC}=\overrightarrow{AC}-\overrightarrow{AG}\). Then
\[
-2\overrightarrow{AG}+3(\overrightarrow{AB}-\overrightarrow{AG})+(\overrightarrow{AC}-\overrightarrow{AG})=\vec0
\ \Longrightarrow\ -6\overrightarrow{AG}+3\overrightarrow{AB}+\overrightarrow{AC}=\vec0 .
\]
Hence
\[
\overrightarrow{AG}=\tfrac12\,\overrightarrow{AB}+\tfrac16\,\overrightarrow{AC}.
\]

**Final answer.** \(\overrightarrow{AG}=\tfrac12\overrightarrow{AB}+\tfrac16\overrightarrow{AC}\).

**Verification.** This is exactly \(\overrightarrow{AG}=x\overrightarrow{AB}+y\overrightarrow{AC}\) with \(x=\tfrac12,\ y=\tfrac16\); by the theorem \(G\in(ABC)\), and the barycentric weights \((1-x-y,x,y)=(\tfrac13,\tfrac12,\tfrac16)\) scale to \((2,3,1)\). ✔

**What the student should learn.** For weights \((A,\alpha),(B,\beta),(C,\gamma)\) with sum \(s\), \(\overrightarrow{AG}=\tfrac{\beta}{s}\overrightarrow{AB}+\tfrac{\gamma}{s}\overrightarrow{AC}\).

> Source: Mathematics Textbook 2, pages 68–70.

#### Common mistake

> **Common mistake:** treating \(\overrightarrow{MA}-\overrightarrow{MB}=\vec0\) (weights \(1\) and \(-1\), sum \(0\)) as if it defined a barycenter. It does not: \(\overrightarrow{MA}-\overrightarrow{MB}=\overrightarrow{BA}\) is a **fixed** vector, so either \(A=B\) or no such \(M\) balancing them exists. Always check \(\alpha+\beta+\cdots\neq0\) *first*.

#### Special cases
- **Midpoint:** weights \((A,1),(B,1)\) give \(t=\tfrac12\), the midpoint of \([AB]\).
- **Endpoints:** \(t=0\) gives \(A\); \(t=1\) gives \(B\).
- **Centroid of a triangle:** equal weights \((A,1),(B,1),(C,1)\) give the centroid, \(\overrightarrow{AG}=\tfrac13\overrightarrow{AB}+\tfrac13\overrightarrow{AC}\).
- **Outside the segment:** \(t<0\) or \(t>1\) still lies on the line \((AB)\) but outside \([AB]\).

#### Practice set
1. **(B2-U3-L1-P01)** \(M\) satisfies \(\overrightarrow{AM}=\tfrac14\overrightarrow{AB}\). Give the barycentric weights of \(A,B\) and say if \(M\in[AB]\).
2. **(B2-U3-L1-P02)** Identify the point defined by \(\overrightarrow{MA}+3\overrightarrow{MB}=\vec0\); express \(\overrightarrow{AM}\) as a multiple of \(\overrightarrow{AB}\).
3. **(B2-U3-L1-P03)** In triangle \(ABC\), \(G\) is the barycenter of \((A,1),(B,2),(C,3)\). Find \(\overrightarrow{AG}\) in terms of \(\overrightarrow{AB},\overrightarrow{AC}\).
4. **(B2-U3-L1-P04)** Show that \(\overrightarrow{MA}-\overrightarrow{MB}=\vec0\) has no solution point \(M\) when \(A\neq B\), and explain why.
5. **(B2-U3-L1-P05)** *(near exam level)* In triangle \(ABC\), \(G\) is the barycenter of \((A,1),(B,1),(C,1)\) and \(I\) the midpoint of \([BC]\). Prove \(A,G,I\) are collinear with \(\overrightarrow{AG}=\tfrac23\overrightarrow{AI}\).

#### Practice solutions
1. \(t=\tfrac14\), weights \((A,1-\tfrac14),(B,\tfrac14)=(A,\tfrac34),(B,\tfrac14)\), scaling to \((A,3),(B,1)\). Since \(\tfrac14\in[0,1]\), \(M\in[AB]\).
2. Weights \((A,1),(B,3)\), sum \(4\neq0\), so \(M\) is their barycenter; \(\overrightarrow{AM}=\tfrac{3}{4}\overrightarrow{AB}\) (from \(\overrightarrow{AM}=\tfrac{\beta}{s}\overrightarrow{AB}\)).
3. Sum \(s=6\); \(\overrightarrow{AG}=\tfrac{2}{6}\overrightarrow{AB}+\tfrac{3}{6}\overrightarrow{AC}=\tfrac13\overrightarrow{AB}+\tfrac12\overrightarrow{AC}\).
4. \(\overrightarrow{MA}-\overrightarrow{MB}=\overrightarrow{MA}+\overrightarrow{BM}=\overrightarrow{BA}\), which is a fixed nonzero vector when \(A\neq B\); it can never equal \(\vec0\), so no \(M\) works. The sum of weights is \(1+(-1)=0\), so no barycenter exists.
5. \(I\) midpoint: \(\overrightarrow{AI}=\tfrac12(\overrightarrow{AB}+\overrightarrow{AC})\). Centroid: \(\overrightarrow{AG}=\tfrac13(\overrightarrow{AB}+\overrightarrow{AC})=\tfrac23\cdot\tfrac12(\overrightarrow{AB}+\overrightarrow{AC})=\tfrac23\overrightarrow{AI}\). Since \(\overrightarrow{AG}\) is a multiple of \(\overrightarrow{AI}\), \(A,G,I\) are collinear. ✔

#### Lesson summary
- **Most important definition:** the barycenter of \((A,\alpha),(B,\beta),\dots\) with \(\alpha+\beta+\cdots\neq0\) satisfies \(\alpha\overrightarrow{GA}+\beta\overrightarrow{GB}+\cdots=\vec0\).
- **Most important formulas:** line \((AB)\) = barycenters of \((A,1-t),(B,t)\); plane \((ABC)\) = barycenters of \((A,1-x-y),(B,x),(C,y)\).
- **Most important condition:** the weights must sum to a nonzero number.
- **Most important pattern:** \(\overrightarrow{AG}=\tfrac{\beta}{s}\overrightarrow{AB}+\tfrac{\gamma}{s}\overrightarrow{AC}\) with \(s=\alpha+\beta+\gamma\).
- **Most common mistake:** treating a zero-sum weight relation as a barycenter.
- **Quick self-check:** the barycenter of \((A,1),(B,3)\) sits where on \([AB]\)? *(Answer: \(\overrightarrow{AM}=\tfrac34\overrightarrow{AB}\), three-quarters of the way from \(A\) to \(B\).)*

---

<a id="b2u3-l2"></a>
### Lesson 2: Parametric representations

#### Core idea

A single point cannot pin down a line or a plane, but a point **plus a direction** can. The parametric idea is to describe *every* point of the object by letting a parameter run: on a line, one number \(t\) suffices, so \(M=A+t\vec u\); on a plane you need two independent directions and two numbers, \(M=A+t\vec u+s\vec v\). The number of free parameters — one versus two — is precisely what distinguishes a line from a plane.

Reading the components, a line becomes three equations \(x=x_0+ta,\ y=y_0+tb,\ z=z_0+tc\), all sharing the *same* parameter \(t\); a plane becomes three equations sharing two parameters. Restricting the parameter's range carves out pieces: \(t\in[0,1]\) gives a segment, \(t\ge0\) gives a ray.

**How does a student recognise this lesson?** When asked to "write a parametric representation", to build a line/plane "through given points", or to "convert to/from Cartesian". A frequent confusion is that the **same** geometric line has *infinitely many* parametric representations (any nonzero multiple of \(\vec u\), and any starting point on the line all work); a second is mixing the single-parameter line with the two-parameter plane.

#### Prerequisite knowledge
- Direction vector of a line as \(\overrightarrow{AB}\) between two of its points.
- Collinearity (for a line's direction) and non-collinearity (for a plane's two directions).
- Reading components of a vector in \((O,\vec i,\vec j,\vec k)\).

#### Definitions

**Definition (direction vector).** A *direction vector* (director vector) of a line \((D)\) is any nonzero vector \(\vec u(a,b,c)\) collinear with the line.

**Definition (parametric representation of a line).** A line through \(A(x_0,y_0,z_0)\) with direction \(\vec u(a,b,c)\) is the set of \(M(x,y,z)\) with \(\overrightarrow{AM}=t\vec u\), \(t\in\mathbb{R}\); componentwise,
\[
(D):\quad\begin{cases}x=x_0+ta\\ y=y_0+tb\\ z=z_0+tc\end{cases}\qquad t\in\mathbb{R},\qquad\text{i.e. } M=A+t\vec u .
\]

**Definition (parametric representation of a plane).** A plane through \(A(x_0,y_0,z_0)\) with two non-collinear directions \(\vec u(a,b,c),\vec v(a',b',c')\) is the set of \(M\) with \(\overrightarrow{AM}=t\vec u+s\vec v\):
\[
(P):\quad\begin{cases}x=x_0+ta+sa'\\ y=y_0+tb+sb'\\ z=z_0+tc+sc'\end{cases}\qquad t,s\in\mathbb{R},\qquad\text{i.e. } M=A+t\vec u+s\vec v .
\]

> Source: Mathematics Textbook 2, pages 71–73.

#### Formulas and properties

**Line.** Direction vector from two points: \(\vec u=\overrightarrow{AB}=(x_B-x_A,\,y_B-y_A,\,z_B-z_A)\). Segment \([AB]\): \(t\in[0,1]\); ray from \(A\) through \(B\): \(t\in[0,+\infty)\).

**Plane, parametric → Cartesian.** A normal vector is \(\vec n=\vec u\wedge\vec v\) (any vector orthogonal to both \(\vec u,\vec v\)); then the plane is \(\vec n\cdot\overrightarrow{AM}=0\), i.e. \(ax+by+cz+d=0\) with \(d=-\vec n\cdot\overrightarrow{OA}\). Alternatively, eliminate \(t,s\) from the three component equations.

**Plane, Cartesian → parametric.** Given \(ax+by+cz+d=0\), solve for one variable and let the other two be parameters. E.g. if \(c\neq0\), set \(x=t,\ y=s\) and \(z=\dfrac{-d-at-bs}{c}\).

> **Important condition:** the two vectors defining a plane must be **non-collinear**. If \(\vec v=\lambda\vec u\), the "plane" degenerates to the line \(M=A+(t+\lambda s)\vec u\).

> **Warning:** a parametric representation is **not unique**. Replacing \(\vec u\) by \(2\vec u\), or \(A\) by another point of the line, gives a *different-looking* system for the *same* line. To test "same line": check the direction vectors are collinear **and** one point of the first lies on the second.

#### Recognising the idea and the solution method
- **Given two points** → direction \(\overrightarrow{AB}\), then \(M=A+t\overrightarrow{AB}\).
- **Given a Cartesian plane** and asked for parametric → free two variables.
- **Asked whether two systems are the same line** → collinear directions + a common point.

**Standard algorithm (parametric representation of a line through \(A,B\)):**
1. Compute \(\vec u=\overrightarrow{AB}\); check \(\vec u\neq\vec0\).
2. Take \(A\) (or \(B\)) as base point.
3. Write \(x=x_A+ta,\ y=y_A+tb,\ z=z_A+tc\).
4. If a segment/ray is wanted, restrict \(t\).

#### Basic example

**B2-U3-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Write a parametric representation of the line through \(A(1,2,-1)\) and \(B(3,-1,1)\), and give the representation of the segment \([AB]\).

**Why this method applies.** Two points give a direction vector \(\overrightarrow{AB}\); then \(M=A+t\overrightarrow{AB}\) is a parametric representation.

**Step-by-step solution.** \(\vec u=\overrightarrow{AB}=(3-1,\,-1-2,\,1-(-1))=(2,-3,2)\neq\vec0\). With base \(A(1,2,-1)\):
\[
(AB):\quad\begin{cases}x=1+2t\\ y=2-3t\\ z=-1+2t\end{cases}\qquad t\in\mathbb{R}.
\]
For the segment, restrict \(t\in[0,1]\).

**Final answer.** Line: \(x=1+2t,\ y=2-3t,\ z=-1+2t,\ t\in\mathbb{R}\); segment \([AB]\): the same with \(t\in[0,1]\).

**Verification.** \(t=0\Rightarrow(1,2,-1)=A\); \(t=1\Rightarrow(3,-1,1)=B\). ✔

**What the student should learn.** The direction vector is just the coordinate differences \(B-A\); the base point supplies the constants.

> Source: example in the style of the worked examples on page 72.

#### Textbook-level example

**B2-U3-L2-E02**

**Problem.** Decide whether the two systems represent the **same line**:
\[
(S):\begin{cases}x=6+3t\\ y=-2+t\\ z=1+2t\end{cases}\qquad
(S'):\begin{cases}x=3+6s\\ y=-3+2s\\ z=-1+4s\end{cases}
\]

**Problem analysis.** Two systems give the same line iff their direction vectors are collinear **and** they share at least one point.

**Step-by-step solution.** Directions: \(\vec u=(3,1,2)\) for \((S)\), \(\vec u'=(6,2,4)\) for \((S')\). Since \(\vec u'=2\vec u\), they are **collinear**. Now check the base point of \((S')\), \(P(3,-3,-1)\), lies on \((S)\): solve \(6+3t=3\Rightarrow t=-1\); then \(y=-2+(-1)=-3\) ✔ and \(z=1+2(-1)=-1\) ✔.

**Final answer.** The directions are collinear and \(P\in(S)\), so \((S)\) and \((S')\) represent the **same line**.

**Verification.** The point of \((S)\) at \(t=-1\) is \((3,-3,-1)\), which is exactly the base point of \((S')\) (at \(s=0\)). ✔

**What the student should learn.** "Same line" needs *both* conditions: collinear directions rule out crossing/skew lines; a shared point rules out parallel-but-distinct lines.

> Source: Mathematics Textbook 2, page 72.

#### Harder / composite example

**B2-U3-L2-E03**

**Problem.** The plane \((P)\) passes through \(A(1,2,0)\) with directions \(\vec u=(2,-3,1)\) and \(\vec v=(1,-1,0)\). (a) Write a parametric representation. (b) Convert it to a Cartesian equation. (c) Check that \(B(3,-1,1)\) lies in \((P)\).

**Problem analysis.** \(\vec u,\vec v\) are non-collinear (their components are not proportional: \(\tfrac{2}{1}\neq\tfrac{-3}{-1}\)), so they span a genuine plane. For (b) we find a normal \(\vec n=\vec u\wedge\vec v\).

**Step-by-step solution.**
(a) \(M=A+t\vec u+s\vec v\):
\[
(P):\quad\begin{cases}x=1+2t+s\\ y=2-3t-s\\ z=t\end{cases}\qquad t,s\in\mathbb{R}.
\]
(b) Normal \(\vec n=\vec u\wedge\vec v\):
\[
\vec n=\big((-3)(0)-(1)(-1),\ (1)(1)-(2)(0),\ (2)(-1)-(-3)(1)\big)=(1,\,1,\,1).
\]
Plane: \(1(x-1)+1(y-2)+1(z-0)=0\Rightarrow x+y+z-3=0\).
(c) \(B(3,-1,1)\): \(3+(-1)+1-3=0\). ✔

**Final answer.** (a) as above; (b) \(x+y+z-3=0\); (c) \(B\in(P)\).

**Verification.** Base \(A(1,2,0)\): \(1+2+0-3=0\) ✔. Also \(\vec n\cdot\vec u=(1,1,1)\cdot(2,-3,1)=0\) and \(\vec n\cdot\vec v=(1,1,1)\cdot(1,-1,0)=0\), confirming \(\vec n\) is normal. ✔

**What the student should learn.** To pass from parametric to Cartesian, take a normal via the cross product of the two directions, then use \(\vec n\cdot\overrightarrow{AM}=0\).

> Source: Mathematics Textbook 2, page 73 (parametric representation of a plane).

#### Common mistake

> **Common mistake:** concluding two systems describe different lines merely because the equations "look different" (different constants or a different-looking direction). Different-looking parametric systems can be the **same** line. Test properly: collinear direction vectors **and** a shared point.

#### Special cases
- **Segment / ray:** identical equations, parameter restricted to \([0,1]\) or \([0,+\infty)\).
- **Line parallel to an axis:** e.g. \(\vec u=(0,0,1)\) gives \(x=x_0,\ y=y_0,\ z=z_0+t\).
- **Degenerate plane data:** if \(\vec v=\lambda\vec u\), the two directions collapse and you get a line, not a plane.
- **Non-uniqueness:** any nonzero scalar multiple of \(\vec u\) is an equally valid direction vector.

#### Practice set
1. **(B2-U3-L2-P01)** Write a parametric representation of the line through \(A(0,1,2)\) with direction \(\vec u=(1,-2,3)\).
2. **(B2-U3-L2-P02)** Write a parametric representation of the segment \([AB]\) with \(A(2,-1,3)\), \(B(5,1,-1)\).
3. **(B2-U3-L2-P03)** Convert the plane \(2x-y+z-4=0\) to a parametric representation.
4. **(B2-U3-L2-P04)** The plane through \(A(1,2,0)\), \(B(3,-1,1)\), \(C(2,1,0)\): write a parametric representation using \(\vec u=\overrightarrow{AB},\vec v=\overrightarrow{AC}\).
5. **(B2-U3-L2-P05)** *(near exam level)* Show that \((S):x=1+2t,\ y=-t,\ z=3+t\) and \((S'):x=5+4s,\ y=-2-2s,\ z=5+2s\) are the same line.

#### Practice solutions
1. \(x=t,\ y=1-2t,\ z=2+3t,\ t\in\mathbb{R}\).
2. \(\overrightarrow{AB}=(3,2,-4)\); \(x=2+3t,\ y=-1+2t,\ z=3-4t,\ t\in[0,1]\).
3. \(c=1\neq0\): set \(x=t,\ y=s\); then \(z=4-2t+s\). So \(x=t,\ y=s,\ z=4-2t+s,\ t,s\in\mathbb{R}\).
4. \(\vec u=\overrightarrow{AB}=(2,-3,1)\), \(\vec v=\overrightarrow{AC}=(1,-1,0)\) (non-collinear). \(x=1+2t+s,\ y=2-3t-s,\ z=t\).
5. Directions \(\vec u=(2,-1,1)\), \(\vec u'=(4,-2,2)=2\vec u\): collinear. Base of \((S')\), \((5,-2,5)\), on \((S)\): \(1+2t=5\Rightarrow t=2\); then \(y=-2\) ✔, \(z=3+2=5\) ✔. Same line.

#### Lesson summary
- **Most important definition:** line \(M=A+t\vec u\) (one parameter); plane \(M=A+t\vec u+s\vec v\) (two parameters, \(\vec u,\vec v\) non-collinear).
- **Most important formulas:** the component systems for line and plane; direction \(\vec u=\overrightarrow{AB}\).
- **Most important condition:** two plane-directions must be non-collinear; a line's direction must be nonzero.
- **Most important pattern:** parametric↔Cartesian for a plane via a normal (cross product) or by freeing variables.
- **Most common mistake:** thinking a line has only one parametric representation.
- **Quick self-check:** how many free parameters describe a plane? *(Answer: two.)*

---

<a id="b2u3-l3"></a>
### Lesson 3: Intersections and relative positions

#### Core idea

Two flat objects in space can miss each other, touch along the largest thing they share, or coincide. This lesson makes that precise by turning each relative-position question into a **linear system** and reading off its solutions. Two planes give a \(2\times3\) system; a line and a plane give a single linear equation in the parameter \(t\); and the *size* of the solution set names the geometry.

The recurring engine is substitution: put the line's parametric coordinates into the plane's Cartesian equation and you always get \((\vec u\cdot\vec n)\,t+k=0\). Whether the coefficient \(\vec u\cdot\vec n\) is zero, and whether the constant \(k\) is zero, decides among *one point*, *no point*, and *the whole line*.

**How does a student recognise this lesson?** Phrases like "find the intersection", "relative position", "are the planes parallel/secant/coincident", "does the line cut the plane". The classic confusions: forgetting to *test the constant* when the direction is parallel to the plane (parallel vs contained), and reporting a single number for a line's intersection when in fact the answer is a whole parametric line.

#### Prerequisite knowledge
- Parametric representation of a line and Cartesian equation of a plane (Lesson 2).
- Scalar (dot) product \(\vec u\cdot\vec n\) and the normal vector of a plane.
- Solving \(2\times3\) linear systems by elimination, leaving one free variable.

#### Definitions

**Definition (secant / parallel / coincident planes).** Two planes are *secant* if they meet along a line; *strictly parallel* if they have no common point; *coincident* if they are the same plane.

**Definition (line cuts / is parallel to / lies in a plane).** A line *cuts* a plane if they share exactly one point; is *strictly parallel* if they share no point; is *contained* in the plane if all its points lie in the plane.

> Source: Mathematics Textbook 2, pages 74–75.

#### Formulas and properties

**Two planes.** With \(P_1:a_1x+b_1y+c_1z+d_1=0\) and \(P_2:a_2x+b_2y+c_2z+d_2=0\), solve
\[
(S):\begin{cases}a_1x+b_1y+c_1z+d_1=0\\ a_2x+b_2y+c_2z+d_2=0.\end{cases}
\]

| Case | Normals \(\vec n_1,\vec n_2\) | System \((S)\) | Geometry |
|---|---|---|---|
| secant | not collinear | \(\infty\) solutions, **one** free parameter | common **line** \((\Delta)\) |
| strictly parallel | collinear, equations not proportional | **no** solution | no common point |
| coincident | equations proportional | \(\infty\) solutions, **two** free parameters | same plane |

**Line and plane.** Substitute \(x=x_0+ta,\ y=y_0+tb,\ z=z_0+tc\) into \(ax+by+cz+d=0\) to get \((\vec u\cdot\vec n)\,t+k=0\):

| Condition | Result |
|---|---|
| \(\vec u\cdot\vec n\neq0\) | one \(t\) → **one point** (line cuts plane) |
| \(\vec u\cdot\vec n=0,\ k\neq0\) | no \(t\) → **no point** (strictly parallel) |
| \(\vec u\cdot\vec n=0,\ k=0\) | every \(t\) → **line contained** in plane |

> **Important condition:** \(\vec u\cdot\vec n=0\) alone only says the line is *parallel to the plane's direction*. You must still test the constant \(k\): \(k\neq0\) means strictly parallel, \(k=0\) means the line lies inside.

> **Warning:** when two planes are secant, the intersection is a **line**, not a point. Leave one variable free (set it \(=t\)) and produce a full parametric representation.

#### Recognising the idea and the solution method
- **Two planes given by Cartesian equations** → compare normals; if not collinear, solve for the common line.
- **A line (parametric) and a plane (Cartesian)** → substitute, get \((\vec u\cdot\vec n)t+k=0\), classify.
- **Answer is "a line"** → always give its parametric form and a direction vector.

**Standard algorithm (line ∩ plane):**
1. Write the line as \(x=x_0+ta,\ y=y_0+tb,\ z=z_0+tc\).
2. Substitute into \(ax+by+cz+d=0\); simplify to \((\vec u\cdot\vec n)t+k=0\).
3. If \(\vec u\cdot\vec n\neq0\): solve for \(t\), back-substitute → the point.
4. If \(\vec u\cdot\vec n=0\): read \(k\) — \(k\neq0\) parallel, \(k=0\) contained.

**Standard algorithm (two planes → common line):**
1. Check normals are not collinear (else parallel/coincident).
2. Set one variable \(=t\) (usually \(z=t\)); solve the \(2\times2\) system for the other two.
3. Write \(x,y,z\) in terms of \(t\); read the direction vector from the \(t\)-coefficients.

#### Basic example

**B2-U3-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Where does the line through \(A(2,1,-1)\) with direction \(\vec u=(-3,1,4)\) meet the plane \(P:\,2x+y-z=0\)?

**Why this method applies.** A parametric line into a Cartesian plane: substitute and solve the single equation in \(t\).

**Step-by-step solution.** Line: \(x=2-3t,\ y=1+t,\ z=-1+4t\). Substitute into \(2x+y-z=0\):
\[
2(2-3t)+(1+t)-(-1+4t)=0\ \Longrightarrow\ (4+1+1)+t(-6+1-4)=6-9t=0\ \Longrightarrow\ t=\tfrac23 .
\]
Since the \(t\)-coefficient \(\vec u\cdot\vec n=-9\neq0\), there is exactly one point. Back-substitute \(t=\tfrac23\):
\[
x=2-3\cdot\tfrac23=0,\quad y=1+\tfrac23=\tfrac53,\quad z=-1+4\cdot\tfrac23=\tfrac53 .
\]

**Final answer.** The line **cuts** the plane at \(\left(0,\tfrac53,\tfrac53\right)\).

**Verification.** \(2(0)+\tfrac53-\tfrac53=0\). ✔

**What the student should learn.** Substitution reduces the whole problem to one linear equation in \(t\); the sign/value of the \(t\)-coefficient tells you the case before you even solve.

> Source: example in the style of the worked examples on page 75.

#### Textbook-level example

**B2-U3-L3-E02**

**Problem.** Find the intersection of the planes \(P_1:2x-y+z-2=0\) and \(P_2:x+y-z+1=0\); give a parametric representation of their common line.

**Problem analysis.** Normals \(\vec n_1=(2,-1,1)\), \(\vec n_2=(1,1,-1)\) are not collinear (\(\tfrac21\neq\tfrac{-1}{1}\)), so the planes are **secant**: the solution set is a line with one free parameter.

**Step-by-step solution.** Set \(z=t\). The system becomes
\[
\begin{cases}2x-y=2-t\\ x+y=-1+t.\end{cases}
\]
Add the two equations: \(3x=1\Rightarrow x=\tfrac13\). Then \(y=-1+t-x=-\tfrac43+t\). So
\[
(\Delta):\quad\begin{cases}x=\tfrac13\\ y=-\tfrac43+t\\ z=t\end{cases}\qquad t\in\mathbb{R}.
\]

**Final answer.** The common line \((\Delta)\) passes through \(\left(\tfrac13,-\tfrac43,0\right)\) with direction vector \((0,1,1)\).

**Verification.** Substitute \((\tfrac13,-\tfrac43+t,t)\): \(P_1=2\cdot\tfrac13-(-\tfrac43+t)+t-2=\tfrac23+\tfrac43-2=0\) ✔; \(P_2=\tfrac13+(-\tfrac43+t)-t+1=\tfrac13-\tfrac43+1=0\) ✔ (both hold for all \(t\)).

**What the student should learn.** Freeing \(z=t\) and solving the remaining \(2\times2\) system yields the common line directly; the direction vector is read from the \(t\)-coefficients \((0,1,1)\).

> Source: Mathematics Textbook 2, pages 74–75.

#### Harder / composite example

**B2-U3-L3-E03**

**Problem.** For the plane \(P:\,x+2y-z+1=0\), classify the relative position of each line and, when they meet, find the point:
(a) \(d_1:\ x=1+t,\ y=-1+2t,\ z=1+3t\);
(b) \(d_2:\ x=2t,\ y=-t,\ z=3\) (i.e. through \(A_2(0,0,3)\), direction \((2,-1,0)\));
(c) \(d_3\): through \(A_3(1,0,2)\) with direction \((2,-1,0)\).

**Problem analysis.** For each line substitute into \(P\) and read \((\vec u\cdot\vec n)t+k\). Here \(\vec n=(1,2,-1)\).

**Step-by-step solution.**
(a) \(\vec u_1=(1,2,3)\): \(\vec u_1\cdot\vec n=1+4-3=2\neq0\). Substitute:
\[
(1+t)+2(-1+2t)-(1+3t)+1=(1-2-1+1)+t(1+4-3)=-1+2t=0\Rightarrow t=\tfrac12 .
\]
Point: \(x=\tfrac32,\ y=0,\ z=\tfrac52\). The line **cuts** \(P\) at \(\left(\tfrac32,0,\tfrac52\right)\).

(b) \(\vec u_2=(2,-1,0)\): \(\vec u_2\cdot\vec n=2-2-0=0\), so parallel to the plane's directions. Check the constant with \(A_2(0,0,3)\): \(0+0-3+1=-2\neq0\). Hence **strictly parallel**, no common point.

(c) same \(\vec u_2\cdot\vec n=0\), but with \(A_3(1,0,2)\): \(1+0-2+1=0\). The constant is \(0\), so \(d_3\) is **contained** in \(P\).

**Final answer.** (a) cuts \(P\) at \(\left(\tfrac32,0,\tfrac52\right)\); (b) strictly parallel; (c) contained in \(P\).

**Verification.** (a) \(\tfrac32+0-\tfrac52+1=0\) ✔. (b) direction \(\cdot\vec n=0\) and base off the plane. (c) direction \(\cdot\vec n=0\) and base on the plane; a second point of \(d_3\), \((3,-1,2)\), gives \(3-2-2+1=0\) ✔.

**What the student should learn.** When \(\vec u\cdot\vec n=0\), the single number \(k\) (plug the base point into the plane) separates *strictly parallel* from *contained*. Never stop at \(\vec u\cdot\vec n=0\).

> Source: Mathematics Textbook 2, page 75.

#### Common mistake

> **Common mistake:** finding \(\vec u\cdot\vec n=0\) and immediately declaring "the line is parallel to the plane, no intersection". If additionally the base point satisfies the plane's equation (\(k=0\)), the line lies **entirely inside** the plane — infinitely many common points. Always test the constant.

#### Special cases
- **Line through a point of the plane:** substitution may give \(t=0\); the intersection is the base point itself.
- **Two planes with proportional equations:** coincident — the whole plane is common (two free parameters).
- **Two planes with proportional normals but non-proportional constants:** strictly parallel — empty intersection.
- **Line inside the plane:** the substitution collapses to \(0=0\).

#### Practice set
1. **(B2-U3-L3-P01)** Find where the line \(x=2+t,\ y=-1+2t,\ z=3-t\) meets the plane \(x-y+2z-6=0\).
2. **(B2-U3-L3-P02)** Show \(P:\,x+2y-z+1=0\) and \(P':\,2x+4y-2z-3=0\) are strictly parallel.
3. **(B2-U3-L3-P03)** Find the common line of \(P_1:\,2x+y+z-2=0\) and \(P':\,x-y+2z=0\); give a direction vector.
4. **(B2-U3-L3-P04)** The line through \(A(0,0,2)\) with direction \((1,-1,0)\) and the plane \(x+y+z-1=0\): classify the position (with justification).
5. **(B2-U3-L3-P05)** *(near exam level)* Line \((AB)\) with \(A(2,-1,3)\), \(B(3,1,2)\) and plane \(x-y+2z-6=0\): find the intersection point.

#### Practice solutions
1. \(\vec u=(1,2,-1)\), \(\vec n=(1,-1,2)\): \(\vec u\cdot\vec n=1-2-2=-3\neq0\). Substitute: \((2+t)-(-1+2t)+2(3-t)-6=(2+1+6-6)+t(1-2-2)=3-3t=0\Rightarrow t=1\). Point \((3,1,2)\).
2. Normals \((1,2,-1)\) and \((2,4,-2)=2(1,2,-1)\): collinear. Multiply \(P\) by \(2\): \(2x+4y-2z+2=0\); constant \(+2\) versus \(-3\) — not proportional, so no common point ⇒ **strictly parallel**.
3. Set \(z=t\): \(2x+y=2-t\) and \(x-y=-2t\). Add: \(3x=2-3t\Rightarrow x=\tfrac23-t\); \(y=x+2t=\tfrac23+t\). So \(x=\tfrac23-t,\ y=\tfrac23+t,\ z=t\); direction \((-1,1,1)\).
4. \(\vec u=(1,-1,0)\), \(\vec n=(1,1,1)\): \(\vec u\cdot\vec n=1-1+0=0\). Base \(A(0,0,2)\): \(0+0+2-1=1\neq0\). Hence **strictly parallel**.
5. \(\vec u=\overrightarrow{AB}=(1,2,-1)\): line \(x=2+t,\ y=-1+2t,\ z=3-t\) (same as P01), giving \(t=1\) and point \((3,1,2)=B\); so \(B\) lies on the plane and the line cuts it there.

#### Lesson summary
- **Most important definitions:** secant/parallel/coincident planes; line cuts/parallel/contained.
- **Most important formulas:** two-plane \(2\times3\) system → line/none/coincident; line∩plane \((\vec u\cdot\vec n)t+k=0\).
- **Most important condition:** when \(\vec u\cdot\vec n=0\), test \(k\) to separate parallel from contained.
- **Most important pattern:** free one variable to get the common line of two secant planes.
- **Most common mistake:** stopping at \(\vec u\cdot\vec n=0\) without checking the constant.
- **Quick self-check:** if substituting a line into a plane gives \(0=0\), what is the position? *(Answer: the line lies in the plane.)*

---

<a id="b2u3-l4"></a>
### Lesson 4: Three planes and systems of equations

#### Core idea

Three planes in space carve the fundamental cases of a \(3\times3\) linear system. Their common points are exactly the solutions of
\[
(S):\begin{cases}a_1x+b_1y+c_1z+d_1=0\\ a_2x+b_2y+c_2z+d_2=0\\ a_3x+b_3y+c_3z+d_3=0,\end{cases}
\]
and the *shape* of the solution set is the geometry: a **single point**, a **common line**, a **common plane**, or **no common point**. Solving is pure elimination; the art is *interpreting* the end state — reaching \(0=0\) signals a redundant plane (a line or plane of solutions), while reaching \(0=c\) with \(c\neq0\) signals inconsistency (no point).

**How does a student recognise this lesson?** A problem giving three planes and asking for "their intersection", "discuss the system", or "do the three planes meet at a point / along a line / not at all". The confusion to avoid: quitting after the algebra without stating the *geometric* conclusion, and mishandling the two "degenerate" end-states \(0=0\) (infinitely many) versus \(0=c\) (none).

#### Prerequisite knowledge
- Solving \(2\times2\) and \(3\times3\) systems by substitution and elimination (row combinations \(L_i\)).
- Interpreting a free parameter as a line of solutions.
- Cartesian equations and normal vectors of planes.

#### Definitions

**Definition (the three-plane system).** The common points of planes \(P_1,P_2,P_3\) are the solutions of the \(3\times3\) system \((S)\) above. Discussing \((S)\) means determining whether it has a unique solution, infinitely many (with one or two free parameters), or none.

> Source: Mathematics Textbook 2, pages 77–78.

#### Formulas and properties

**Classification.**

| Solution set of \((S)\) | Geometry of \(P_1,P_2,P_3\) |
|---|---|
| a **unique** \((x,y,z)\) | the three planes meet in a **single point** |
| a **line** (one free parameter) | the three planes share a **common line** |
| a **plane** (two free parameters) | the three are **coincident** (equations reduce to one) |
| **no** solution (a contradiction \(0=c\)) | **no common point** (prism / parallel configuration) |

**Method (elimination and reading the end state).** Combine rows to remove a variable and shrink \((S)\); the terminal equation reveals the case:
\[
0=0\ \Rightarrow\ \text{redundant plane (line or plane of solutions)};\qquad 0=c\ (c\neq0)\ \Rightarrow\ \text{no solution}.
\]

> **Important condition:** the algebra alone is not the answer. Always translate the solution set into the geometric statement (one point / a line / no point), as the textbook insists.

> **Warning:** infinitely many solutions splits into two very different geometries: **one** free parameter is a *common line*, **two** free parameters is a *coincident plane*. Count the free parameters.

#### Recognising the idea and the solution method
- **Three Cartesian planes, "find the intersection"** → build \((S)\), eliminate.
- **End state \(0=c,\ c\neq0\)** → no common point.
- **End state \(0=0\)** → a redundant equation; free a variable and give the common line (or plane).

**Standard algorithm (discuss three planes):**
1. Write \((S)\) with rows \(L_1,L_2,L_3\).
2. Eliminate one variable using two independent pairs → two equations in the other two.
3. Eliminate again:
   - a unique value → back-substitute for a **single point**;
   - \(0=0\) → set the free variable \(=t\), write the **parametric line**;
   - \(0=c,\ c\neq0\) → **no solution**.
4. State the geometric conclusion.

#### Basic example

**B2-U3-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** Discuss and solve
\[
(S):\begin{cases}x+y-z=-1\\ 3x+y-z=1\\ -2x-3y+z=4.\end{cases}
\]

**Why this method applies.** Three planes; their common points solve \((S)\). Elimination will reveal the case.

**Step-by-step solution.**
Subtract \(L_1\) from \(L_2\) (the \(y,z\) terms cancel): \((3x+y-z)-(x+y-z)=1-(-1)\Rightarrow 2x=2\Rightarrow x=1\).
Put \(x=1\) into \(L_1\): \(1+y-z=-1\Rightarrow y-z=-2\), so \(z=y+2\).
Put \(x=1,\ z=y+2\) into \(L_3\): \(-2-3y+(y+2)=4\Rightarrow -2y=4\Rightarrow y=-2\); then \(z=0\).

**Final answer.** Unique solution \((x,y,z)=(1,-2,0)\): the three planes meet in a **single point**.

**Verification.** \(L_1:1-2-0=-1\) ✔; \(L_2:3-2-0=1\) ✔; \(L_3:-2+6+0=4\) ✔.

**What the student should learn.** A lucky elimination (here two equations share \(-z\) and \(+y\)) collapses the system fast; a unique triple means one common point.

> Source: example in the style of the worked example on page 78.

#### Textbook-level example

**B2-U3-L4-E02**

**Problem.** Discuss the intersection of
\[
(S):\begin{cases}P_1:\ x+y+z=1\\ P_2:\ x-y+2z=2\\ P_3:\ 2x+3z=5.\end{cases}
\]

**Problem analysis.** Add \(P_1\) and \(P_2\) and compare with \(P_3\): if the combination contradicts \(P_3\), the system is inconsistent.

**Step-by-step solution.** Add \(L_1+L_2\): \((x+y+z)+(x-y+2z)=1+2\Rightarrow 2x+3z=3\). But \(L_3\) says \(2x+3z=5\). These two cannot both hold:
\[
2x+3z=3\quad\text{and}\quad 2x+3z=5\ \Longrightarrow\ 3=5,
\]
a contradiction of the type \(0=c\) with \(c\neq0\).

**Final answer.** The system has **no solution**: the three planes have **no common point** (a prism-type configuration).

**Verification.** \(P_3-(L_1+L_2)\) gives \(0=2\), impossible — confirming inconsistency.

**What the student should learn.** When one plane's equation clashes with a combination of the other two, you reach \(0=c\ (c\neq0)\): the three planes never meet at a common point.

> Source: Mathematics Textbook 2, pages 78–79.

#### Harder / composite example

**B2-U3-L4-E03**

**Problem.** Discuss and solve
\[
(S):\begin{cases}P_1:\ x+y+z=3\\ P_2:\ x-y+z=1\\ P_3:\ x+z=2.\end{cases}
\]

**Problem analysis.** Notice \(P_3\) looks like \(\tfrac12(P_1+P_2)\); if \(P_3\) is redundant, expect a common line (one free parameter).

**Step-by-step solution.**
Subtract \(L_2\) from \(L_1\): \((x+y+z)-(x-y+z)=3-1\Rightarrow 2y=2\Rightarrow y=1\).
Put \(y=1\) into \(L_1\): \(x+1+z=3\Rightarrow x+z=2\).
Now \(L_3\) is exactly \(x+z=2\): it adds nothing (\(0=0\)). So \(x+z=2\) with \(y=1\), and one variable is free. Set \(z=t\):
\[
(\Delta):\quad\begin{cases}x=2-t\\ y=1\\ z=t\end{cases}\qquad t\in\mathbb{R}.
\]

**Final answer.** Infinitely many solutions along the **common line** \((\Delta)\) through \((2,1,0)\) with direction \((-1,0,1)\); the three planes share this line.

**Verification.** \((2-t,1,t)\): \(P_1=2-t+1+t=3\) ✔; \(P_2=2-t-1+t=1\) ✔; \(P_3=2-t+t=2\) ✔ (all for every \(t\)).

**What the student should learn.** A redundant third equation (\(0=0\)) leaves one free parameter, so the three planes meet along a whole line; give its parametric form and direction vector.

> Source: Mathematics Textbook 2, page 79.

#### Common mistake

> **Common mistake:** stopping at the algebra and writing "\((x,y,z)=(2-t,1,t)\)" without saying what it *means* geometrically. The examiner wants the conclusion: *the three planes share a common line*. Likewise, do not confuse \(0=0\) (infinitely many — a line or plane) with \(0=c,\ c\neq0\) (no solution at all).

#### Special cases
- **Two of the three equations proportional:** those two planes are parallel/coincident; combine with the third to decide.
- **All three equations proportional:** the three planes coincide — a plane of solutions (two free parameters).
- **Exactly two free parameters:** coincident planes, not a line.
- **Unique solution:** the "generic" case — three planes crossing at one point.

#### Practice set
1. **(B2-U3-L4-P01)** Solve \(\begin{cases}x+y+z=2\\ x-y+2z=3\\ 2x+y-z=1\end{cases}\) and state the geometry.
2. **(B2-U3-L4-P02)** Show \(\begin{cases}x+y+z=1\\ 2x-y+z=2\\ 3x+2z=5\end{cases}\) has no solution and interpret it.
3. **(B2-U3-L4-P03)** Discuss \(\begin{cases}x+y+z=3\\ x-y+z=1\\ 2x+2z=4\end{cases}\); if there is a common line, give its parametric form.
4. **(B2-U3-L4-P04)** For \(\begin{cases}x+2y+z=4\\ x-y+2z=1\\ 2x+y+3z=5\end{cases}\), determine whether the three planes meet at a point, a line, or not at all.
5. **(B2-U3-L4-P05)** *(near exam level)* Discuss \(\begin{cases}x-y+2z=6\\ 2x+y-z=3\\ x+2y-z=0\end{cases}\) and, if unique, find the point.

#### Practice solutions
1. \(L_1+L_2\): \(2x+3z=5\). \(L_1\): \(x+y+z=2\); \(L_3-L_1\): \(x-2z=-1\Rightarrow x=2z-1\). Then \(2(2z-1)+3z=5\Rightarrow 7z=7\Rightarrow z=1,\ x=1,\ y=2-1-1=0\). Unique point \((1,0,1)\): a **single common point**.
2. \(L_1+L_2\): \(3x+2z=3\); but \(L_3:\ 3x+2z=5\). So \(3=5\), a contradiction ⇒ **no solution**, the three planes have **no common point**.
3. \(L_1-L_2\): \(2y=2\Rightarrow y=1\); \(L_1\): \(x+z=2\). \(L_3:\ 2x+2z=4\) is \(x+z=2\) again (\(0=0\)). Free \(z=t\): \(x=2-t,\ y=1,\ z=t\); **common line** through \((2,1,0)\), direction \((-1,0,1)\).
4. \(L_1+L_2\): \(2x+y+3z=5\), which is exactly \(L_3\) (\(0=0\)). So \(L_3\) is redundant; solve \(L_1,L_2\): \(L_1-L_2\): \(3y-z=3\Rightarrow z=3y-3\); \(L_1\): \(x+2y+(3y-3)=4\Rightarrow x=7-5y\). Free \(y=t\): \(x=7-5t,\ y=t,\ z=3t-3\); **common line**.
5. Determinant of coefficients is nonzero (system independent), so a unique point. Eliminate: \(L_1+L_2\): \(3x+z=9\); \(2L_2-L_3\): \(4x+2y-2z-(x+2y-z)=3x-z=6\). Add \(3x+z=9\) and \(3x-z=6\): \(6x=15\Rightarrow x=\tfrac52\); then \(z=9-3x=\tfrac32\); \(y\) from \(L_1\): \(\tfrac52-y+3=6\Rightarrow y=-\tfrac12\). Unique point \(\left(\tfrac52,-\tfrac12,\tfrac32\right)\): the planes meet at a **single point**.

#### Lesson summary
- **Most important definition:** three planes ↔ a \(3\times3\) system; solutions = common points.
- **Most important classification:** unique point / common line (1 param) / coincident plane (2 params) / no point.
- **Most important condition:** report the geometry, not just the algebra.
- **Most important pattern:** \(0=0\) → redundant equation (free a variable); \(0=c,\ c\neq0\) → no solution.
- **Most common mistake:** confusing \(0=0\) with \(0=c\), or omitting the geometric conclusion.
- **Quick self-check:** if elimination ends in \(0=0\) with one free variable, what is the geometry? *(Answer: the three planes share a common line.)*

---

<a id="b2-u3-test"></a>
### Chapter summary & review test — Unit 3

#### Chapter summary
The unit describes lines and planes three ways and connects them through linear systems. A **line** is the set of barycenters of two weighted points and is written \(M=A+t\vec u\); a **plane** is the set of barycenters of three non-collinear weighted points and is written \(M=A+t\vec u+s\vec v\) or as \(ax+by+cz+d=0\). Every **intersection** question becomes a linear system whose solution set — one point, a line, a plane, or nothing — is exactly the relative position: line∩plane via \((\vec u\cdot\vec n)t+k=0\), two planes via a \(2\times3\) system, three planes via a \(3\times3\) system.

#### Essential formulas
\[
(1-t)\overrightarrow{MA}+t\overrightarrow{MB}=\vec0,\qquad M=A+t\vec u,\qquad M=A+t\vec u+s\vec v,
\]
\[
ax+by+cz+d=0\ (\vec n(a,b,c)),\qquad (\vec u\cdot\vec n)\,t+k=0 .
\]

#### Essential theorems/results
- Plane as barycenters: \(M\in(ABC)\Leftrightarrow\overrightarrow{AM}=x\overrightarrow{AB}+y\overrightarrow{AC}\).
- Line∩plane trichotomy: one point (\(\vec u\cdot\vec n\neq0\)) / parallel (\(=0,\,k\neq0\)) / contained (\(=0,\,k=0\)).
- Two-plane trichotomy: secant (line) / strictly parallel (none) / coincident (plane).
- Three-plane classification: point / line / plane / no point.

#### Main problem patterns
Barycenter and concurrency; writing parametric representations; parametric↔Cartesian for a plane; line∩plane point; common line of two planes; discussing a \(3\times3\) system for three planes.

#### Connections between the chapter's ideas
Barycenters (Lesson 1) justify the point-plus-direction descriptions (Lesson 2); those descriptions feed the substitution that classifies a line against a plane (Lesson 3); and stacking three planes generalises to the \(3\times3\) systems (Lesson 4). Throughout, "number of free parameters" (0/1/2) is the single unifying invariant.

#### Recommended study order
Barycenters ← parametric of a line ← parametric of a plane and Cartesian ← line∩plane ← two planes ← three planes (systems).

#### Chapter checklist
- [ ] I convert between a barycenter relation and \(\overrightarrow{AM}=t\overrightarrow{AB}\).
- [ ] I write and recognise parametric representations of lines and planes.
- [ ] I classify a line against a plane and a plane against a plane.
- [ ] I discuss a \(3\times3\) system and state the geometry.

#### Chapter review test
1. \(M\) satisfies \(2\overrightarrow{MA}+3\overrightarrow{MB}=\vec0\). Identify \(M\) and express \(\overrightarrow{AM}\) as a multiple of \(\overrightarrow{AB}\).
2. Write a parametric representation of the line through \(A(1,0,-1)\) and \(B(3,2,1)\).
3. Convert the plane through \(A(1,2,0)\) with directions \(\vec u=(2,-3,1),\vec v=(1,-1,0)\) to a Cartesian equation.
4. Find where the line through \(A(1,0,-1)\), direction \(\vec u=(1,1,1)\), meets the plane \(x+2y-z-4=0\).
5. Find the common line of \(P:\,2x+y+z-2=0\) and \(P':\,x-y+2z=0\); give a direction vector.
6. Discuss \(\begin{cases}x+y+z=1\\ 2x-y+z=2\\ 3x+2z=5\end{cases}\) geometrically.
7. Discuss \(\begin{cases}x+2y+z=4\\ x-y+2z=1\\ 2x+y+3z=5\end{cases}\); if there is a common line, give its parametric form.
8. In triangle \(ABC\), \(G\) is the barycenter of \((A,1),(B,1),(C,1)\) and \(I\) the midpoint of \([BC]\). Prove \(\overrightarrow{AG}=\tfrac23\overrightarrow{AI}\).

#### Model solutions for the chapter review test
1. Weights \((A,2),(B,3)\), sum \(5\neq0\), so \(M\) is their barycenter; \(\overrightarrow{AM}=\tfrac{3}{5}\overrightarrow{AB}\).
2. \(\vec u=\overrightarrow{AB}=(2,2,2)\) (or \((1,1,1)\)): \(x=1+2t,\ y=2t,\ z=-1+2t,\ t\in\mathbb{R}\).
3. Normal \(\vec n=\vec u\wedge\vec v=(1,1,1)\); plane \(x+y+z-3=0\) (check \(A\): \(1+2+0-3=0\) ✔).
4. Line \(x=1+t,\ y=t,\ z=-1+t\). Substitute: \((1+t)+2t-(-1+t)-4=(1+1-4)+t(1+2-1)=-2+2t=0\Rightarrow t=2\). Point \((3,2,1)\).
5. Set \(z=t\): \(2x+y=2-t,\ x-y=-2t\); add \(3x=2-3t\Rightarrow x=\tfrac23-t\), \(y=x+2t=\tfrac23+t\). Line \(x=\tfrac23-t,\ y=\tfrac23+t,\ z=t\); direction \((-1,1,1)\).
6. \(L_1+L_2\): \(3x+2z=3\); \(L_3:\ 3x+2z=5\Rightarrow 3=5\), contradiction ⇒ **no solution**, the three planes have **no common point**.
7. \(L_1+L_2\): \(2x+y+3z=5=L_3\) (\(0=0\)), so \(L_3\) is redundant. \(L_1-L_2\): \(3y-z=3\Rightarrow z=3y-3\); \(L_1\): \(x=7-5y\). Free \(y=t\): \(x=7-5t,\ y=t,\ z=3t-3\) — a **common line**.
8. \(\overrightarrow{AG}=\tfrac13(\overrightarrow{AB}+\overrightarrow{AC})\) and \(\overrightarrow{AI}=\tfrac12(\overrightarrow{AB}+\overrightarrow{AC})\), so \(\overrightarrow{AG}=\tfrac23\overrightarrow{AI}\); hence \(A,G,I\) are collinear and \(G\) lies two-thirds along the median \([AI]\). \(\blacksquare\)

---

<a id="b2-u4"></a>
## Unit 4: Complex Numbers

> Source: Mathematics Textbook 2, pages 88–111.

### Unit overview

This unit builds an entirely new number system on top of a single, bold decision: to introduce a symbol \(i\) whose square is \(-1\). That one convention repairs the biggest gap in the real numbers — the impossibility of taking the square root of a negative number — and unlocks a rich algebra with an equally rich **geometry**.

- **Algebraic form:** every complex number is written \(z=a+ib\) with \(a,b\) real. You add, subtract, multiply exactly as with ordinary algebra, replacing \(i^2\) by \(-1\); you divide by multiplying top and bottom by the **conjugate**.
- **Conjugate \(\bar z\):** the reflection of \(z\) across the real axis; it turns a denominator real and characterises "real" and "pure imaginary" numbers.
- **Trigonometric and exponential forms:** a nonzero \(z\) is also \(r(\cos\theta+i\sin\theta)=re^{i\theta}\), where the modulus \(r=|z|\) is a length and the argument \(\theta=\arg z\) is a directed angle. In these forms, multiplication becomes "multiply the lengths, add the angles" — which gives **de Moivre's theorem** for powers.
- **Real-coefficient quadratics:** when the discriminant is negative, the equation \(az^2+bz+c=0\) still has solutions — a pair of **conjugate complex roots**.

**Why it matters:** complex numbers are the natural home of rotations and oscillations; they close the theory of polynomial equations (every quadratic now has roots), and they feed directly into geometry, trigonometric identities, and later physics.

**Prerequisites:** real algebra and factoring; the unit circle values of \(\cos\) and \(\sin\); solving real quadratics and the discriminant; basic vectors in the plane.

**Main question types:** put an expression in algebraic form (including a quotient); find a conjugate and use it to solve for \(z\); convert between algebraic, trigonometric and exponential forms; compute a power with de Moivre; solve a real-coefficient quadratic with \(\Delta<0\).

### Unit concept map

```text
Complex Numbers ℂ  (i² = −1)
├── Algebraic form  z = a + ib ,  Re(z)=a , Im(z)=b
│   ├── equality: a+ib = a'+ib' ⇔ a=a' and b=b'
│   ├── + , − : componentwise
│   ├── × : (aa'−bb') + i(ab'+a'b)
│   └── ÷ : multiply by conjugate of denominator
├── Conjugate  z̄ = a − ib   (reflection across real axis)
│   ├── z·z̄ = a²+b² = |z|²
│   ├── z+z̄ = 2Re(z) , z−z̄ = 2i·Im(z)
│   └── z real ⇔ z=z̄ ; z pure imaginary ⇔ z=−z̄
├── Trigonometric form  z = r(cosθ + i sinθ) ,  r=|z|>0 , θ=arg z
│   ├── |zz'| = |z||z'| , arg(zz') ≡ arg z + arg z' (2π)
│   └── de Moivre: (cosθ + i sinθ)ⁿ = cos nθ + i sin nθ
├── Exponential form  z = r e^{iθ}  ,  e^{iθ} = cosθ + i sinθ  (Euler)
└── Quadratic  az²+bz+c=0 (a,b,c real) , Δ = b²−4ac
    └── Δ < 0 : z = (−b ± i√(−Δ)) / (2a)  (conjugate roots)
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(z=a+ib,\ i^2=-1\) | \(a=\operatorname{Re}(z),\ b=\operatorname{Im}(z)\) | \(a,b\in\mathbb{R}\) | — | the writing is unique |
| \(a+ib=a'+ib'\Leftrightarrow a=a',\,b=b'\) | equality by parts | — | do not equate a real to an imaginary part | gives 2 real equations |
| \((a+ib)(a'+ib')=(aa'-bb')+i(ab'+a'b)\) | product | — | — | just expand, use \(i^2=-1\) |
| \(\bar z=a-ib,\quad z\bar z=a^2+b^2=|z|^2\) | conjugate; its use | — | — | makes a denominator real |
| \(|z|=\sqrt{a^2+b^2}\) | modulus (a length) | — | — | \(|z|\ge0\), \(=0\) only if \(z=0\) |
| \(z=r(\cos\theta+i\sin\theta)\) | \(r=|z|,\ \theta=\arg z\) | \(z\neq0,\ r>0\) | undefined for \(z=0\) | \(\theta\) defined mod \(2\pi\) |
| \(|zz'|=|z||z'|,\ \arg(zz')\equiv\arg z+\arg z'\) | product rule | \(z,z'\neq0\) | — | quotient: divide/subtract |
| \((\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta\) | de Moivre | \(n\in\mathbb{N}\) | not a shortcut for algebraic form directly | with \(r\): \(z^n=r^n(\cos n\theta+i\sin n\theta)\) |
| \(z=re^{i\theta},\ e^{i\theta}=\cos\theta+i\sin\theta\) | exponential form | \(z\neq0\) | — | \(e^{i\pi}+1=0\) |
| \(\Delta<0:\ z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}\) | quadratic roots | \(a,b,c\in\mathbb{R},\ a\neq0\) | if any coefficient is non-real | roots are conjugate |

### Unit learning checklist

- [ ] I add, subtract and multiply complex numbers using \(i^2=-1\).
- [ ] I put a quotient in algebraic form by multiplying by the conjugate.
- [ ] I use \(z+\bar z\), \(z-\bar z\), \(z\bar z\) and solve equations involving \(\bar z\).
- [ ] I convert a number between algebraic, trigonometric and exponential form.
- [ ] I compute a power such as \((1+i)^4\) using de Moivre.
- [ ] I solve a real-coefficient quadratic with \(\Delta<0\) and get conjugate roots.

---

<a id="b2u4-l1"></a>
### Lesson 1: The set of complex numbers and algebraic form

#### Core idea

Inside the real numbers the equation \(x^2=-1\) has no solution, because a square is never negative. The whole theory of complex numbers rests on a single, deliberate act: we **invent** a new number, written \(i\), and we *declare* that
\[
i^2=-1.
\]
Every complex number is then built from \(i\) and two real numbers as \(z=a+ib\). The real number \(a\) is the **real part** \(\operatorname{Re}(z)\); the real number \(b\) (not \(ib\)!) is the **imaginary part** \(\operatorname{Im}(z)\). The set of all such numbers is denoted \(\mathbb{C}\), and since \(a=a+i\cdot0\) is itself complex, the reals sit inside: \(\mathbb{R}\subset\mathbb{C}\).

Geometrically, we picture \(z=a+ib\) as the point \(M(a,b)\) of a plane (the Argand or complex plane). This turns algebra into geometry and back — the theme of the whole unit.

**How does a student recognise this lesson?** Whenever a symbol \(i\) appears with \(i^2=-1\), or a task asks to "put in algebraic form", "compute \(\operatorname{Re}\) or \(\operatorname{Im}\)", or to add/multiply/divide complex numbers. The usual confusions are: treating \(ib\) rather than \(b\) as the imaginary part; forgetting to replace \(i^2\) by \(-1\); and equating a real quantity to an imaginary one.

#### Prerequisite knowledge
- Expanding a product of two binomials \((a+b)(c+d)\).
- Powers and their rules (to compute \(i^3=i^2\cdot i=-i\), \(i^4=1\)).
- The reflex of "multiplying by the conjugate" to rationalise (the same idea as with \(\sqrt2\)).

#### Definitions

**Definition (complex number, algebraic form).** A complex number is an expression \(z=a+ib\) with \(a,b\in\mathbb{R}\) and \(i^2=-1\). This writing is the **algebraic form** of \(z\); it is **unique**. We call:
- \(a=\operatorname{Re}(z)\) the **real part**, \(b=\operatorname{Im}(z)\) the **imaginary part**;
- \(z\) **real** \(\iff \operatorname{Im}(z)=0\); \(z\) **pure imaginary** \(\iff \operatorname{Re}(z)=0\).

**Definition (equality).** Two complex numbers are equal exactly when their real parts are equal **and** their imaginary parts are equal:
\[
a+ib=a'+ib'\iff a=a'\ \text{and}\ b=b'.
\]
In particular \(a+ib=0\iff a=0\ \text{and}\ b=0\). One complex equation is therefore worth **two** real equations.

> Source: Mathematics Textbook 2, pages 90–91.

#### Formulas and properties

Writing \(z=a+ib\), \(z'=a'+ib'\):

**Addition / subtraction (componentwise):**
\[
z+z'=(a+a')+i(b+b'),\qquad z-z'=(a-a')+i(b-b').
\]

**Multiplication (expand, then use \(i^2=-1\)):**
\[
z\,z'=(a+ib)(a'+ib')=aa'+iab'+ia'b+i^2bb'=(aa'-bb')+i(ab'+a'b).
\]

**Conjugate product (a real, nonnegative number):**
\[
(a+ib)(a-ib)=a^2-i^2b^2=a^2+b^2.
\]
This is the key to division.

**Division (multiply by the conjugate of the denominator):** for \(z\neq0\),
\[
\frac1z=\frac1{a+ib}=\frac{a-ib}{(a+ib)(a-ib)}=\frac{a-ib}{a^2+b^2}=\frac{a}{a^2+b^2}-i\,\frac{b}{a^2+b^2}.
\]

> **Important condition:** the real and imaginary parts of a **product** are *not* the products of the parts. Only for a **sum** do the parts add: \(\operatorname{Re}(z+z')=\operatorname{Re}(z)+\operatorname{Re}(z')\) and likewise for \(\operatorname{Im}\).

> **Warning:** never write \(\sqrt{-1}\) as if it were an ordinary square root and manipulate it by the real rule \(\sqrt{x}\sqrt{y}=\sqrt{xy}\); that rule fails for negatives (it would give \(-1=\sqrt{(-1)(-1)}=\sqrt1=1\)). Work only with the symbol \(i\) and the rule \(i^2=-1\).

#### Recognising the idea and the solution method
- **To put a product in algebraic form:** expand fully, replace every \(i^2\) by \(-1\), then group real terms and \(i\)-terms.
- **To put a quotient in algebraic form:** multiply numerator and denominator by the **conjugate of the denominator**; the denominator becomes \(a^2+b^2\), a real number, and you split into two real fractions.
- **To solve an equation containing \(z\):** set \(z=a+ib\), expand, and match real and imaginary parts to get two real equations.

**Standard algorithm (algebraic form of an expression):**
1. Expand all products; use \(i^2=-1\), \(i^3=-i\), \(i^4=1\).
2. For a quotient, multiply top and bottom by the denominator's conjugate.
3. Collect into the form (real part) \(+\ i\,\)(real part).
4. State \(\operatorname{Re}\) and \(\operatorname{Im}\) if asked.

#### Basic example

**B2-U4-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Put \(z=(2+3i)(1-4i)\) in algebraic form and give \(\operatorname{Re}(z)\), \(\operatorname{Im}(z)\).

**Why this method applies.** It is a product of two complex numbers; expanding and using \(i^2=-1\) is the direct route.

**Step-by-step solution.**
\[
z=(2+3i)(1-4i)=2-8i+3i-12i^2=2-5i-12(-1)=2-5i+12=14-5i.
\]

**Final answer.** \(z=14-5i\), so \(\operatorname{Re}(z)=14\) and \(\operatorname{Im}(z)=-5\).

**Verification.** Real terms: \(2\cdot1-3\cdot4\cdot(i^2)\to 2+12=14\); imaginary terms: \(2\cdot(-4)+3\cdot1=-8+3=-5\). Matches.

**What the student should learn.** The imaginary part is the coefficient of \(i\) (here \(-5\)), **not** \(-5i\); and the term \(3i\cdot(-4i)=-12i^2\) becomes \(+12\), a real contribution.

> Source: example built in the style of the arithmetic on pages 91–92.

#### Textbook-level example

**B2-U4-L1-E02**

**Problem.** Let \(z_1=3+2i\) and \(z_2=2-i\). Write \(z_1+z_2\), \(z_1z_2\), \(\dfrac1{z_1}\) and \(\dfrac1{z_2}\) in algebraic form.

**Problem analysis.** Standard arithmetic in \(\mathbb{C}\): a sum, a product, and two inverses. The inverses require multiplying by the conjugate.

**Step-by-step solution.**
\[
z_1+z_2=(3+2i)+(2-i)=5+i.
\]
\[
z_1z_2=(3+2i)(2-i)=6-3i+4i-2i^2=6+i+2=8+i.
\]
\[
\frac1{z_1}=\frac1{3+2i}=\frac{3-2i}{(3+2i)(3-2i)}=\frac{3-2i}{9+4}=\frac{3}{13}-\frac{2}{13}i.
\]
\[
\frac1{z_2}=\frac1{2-i}=\frac{2+i}{(2-i)(2+i)}=\frac{2+i}{4+1}=\frac{2}{5}+\frac{1}{5}i.
\]

**Final answer.** \(z_1+z_2=5+i\); \(z_1z_2=8+i\); \(\dfrac1{z_1}=\dfrac{3}{13}-\dfrac{2}{13}i\); \(\dfrac1{z_2}=\dfrac{2}{5}+\dfrac{1}{5}i\).

**Verification.** Check \(z_1\cdot\dfrac1{z_1}=(3+2i)\left(\dfrac{3}{13}-\dfrac{2}{13}i\right)=\dfrac{9-6i+6i-4i^2}{13}=\dfrac{9+4}{13}=1\). ✔

**What the student should learn.** To invert \(a+ib\), multiply by \(a-ib\) top and bottom; the denominator becomes \(a^2+b^2\).

> Source: Mathematics Textbook 2, page 92.

#### Harder / composite example

**B2-U4-L1-E03**

**Problem.** Put \(z=\dfrac{(1+i)^2}{2-i}\) in algebraic form.

**Problem analysis.** First simplify the numerator using \((1+i)^2\), then rationalise the quotient with the conjugate of the denominator.

**Step-by-step solution.**
\[
(1+i)^2=1+2i+i^2=1+2i-1=2i.
\]
\[
z=\frac{2i}{2-i}=\frac{2i(2+i)}{(2-i)(2+i)}=\frac{4i+2i^2}{4+1}=\frac{-2+4i}{5}=-\frac25+\frac45 i.
\]

**Final answer.** \(z=-\dfrac25+\dfrac45 i\).

**Verification.** Multiply back: \(\left(-\dfrac25+\dfrac45 i\right)(2-i)=-\dfrac45+\dfrac25 i+\dfrac85 i-\dfrac45 i^2=-\dfrac45+\dfrac45+2i=2i=(1+i)^2\). ✔

**What the student should learn.** Simplify powers *before* rationalising; \((1+i)^2=2i\) is worth memorising.

> Source: Mathematics Textbook 2, page 92 (in the style of the quotient exercises).

#### Common mistake

> **Common mistake:** stopping at \(z=\dfrac{2i}{2-i}\) and calling \(2i\) "the answer", or writing the imaginary part of \(14-5i\) as \(-5i\). A number is in algebraic form only when it is written \(a+ib\) with \(a,b\) **real numbers**; the imaginary part is the real coefficient \(b\), never \(ib\). A quotient is not in algebraic form until the denominator has been made real.

#### Special cases
- **\(z\) real:** \(b=0\), the point \(M\) lies on the real axis.
- **\(z\) pure imaginary:** \(a=0\), the point \(M\) lies on the imaginary axis; e.g. \(z=-2i\).
- **Powers of \(i\):** they cycle with period 4: \(i^1=i,\ i^2=-1,\ i^3=-i,\ i^4=1\), then repeat.
- **\(z=0\):** the only number with \(\operatorname{Re}=\operatorname{Im}=0\); it has no inverse.

#### Practice set
1. **(B2-U4-L1-P01)** Write \((5-2i)+(-3+7i)\) and \((5-2i)-(-3+7i)\) in algebraic form.
2. **(B2-U4-L1-P02)** Compute \((2+i)(3-2i)\) and give its real and imaginary parts.
3. **(B2-U4-L1-P03)** Simplify \((1-i)^2\) and \(i^{3}\).
4. **(B2-U4-L1-P04)** Put \(\dfrac{4-6i}{3+2i}\) in algebraic form.
5. **(B2-U4-L1-P05)** *(near exam level)* Put \(z=\dfrac{\sqrt2+i}{\sqrt2-i}+\dfrac{\sqrt2-i}{\sqrt2+i}\) in algebraic form and state whether \(z\) is real.

#### Practice solutions
1. Sum: \((5-3)+(-2+7)i=2+5i\). Difference: \((5+3)+(-2-7)i=8-9i\).
2. \((2+i)(3-2i)=6-4i+3i-2i^2=6-i+2=8-i\); so \(\operatorname{Re}=8\), \(\operatorname{Im}=-1\).
3. \((1-i)^2=1-2i+i^2=1-2i-1=-2i\); and \(i^3=i^2\cdot i=-i\).
4. \(\dfrac{4-6i}{3+2i}=\dfrac{(4-6i)(3-2i)}{9+4}=\dfrac{12-8i-18i+12i^2}{13}=\dfrac{12-26i-12}{13}=\dfrac{-26i}{13}=-2i\).
5. Each fraction is the conjugate of the other, so their sum is \(2\operatorname{Re}\!\left(\dfrac{\sqrt2+i}{\sqrt2-i}\right)\). Now \(\dfrac{\sqrt2+i}{\sqrt2-i}=\dfrac{(\sqrt2+i)^2}{2+1}=\dfrac{2+2\sqrt2\,i-1}{3}=\dfrac{1+2\sqrt2\,i}{3}\), whose real part is \(\dfrac13\). Hence \(z=2\cdot\dfrac13=\dfrac23\), which **is real**.

#### Lesson summary
- **Most important definition:** \(z=a+ib\), \(i^2=-1\); \(\operatorname{Re}(z)=a\), \(\operatorname{Im}(z)=b\) (a real number).
- **Most important formulas:** the product \((aa'-bb')+i(ab'+a'b)\) and division by the conjugate.
- **Most important condition:** equality of complex numbers = equality of both parts (two real equations).
- **Most important pattern:** to divide, multiply by the conjugate of the denominator.
- **Most common mistake:** calling \(ib\) the imaginary part, or leaving a quotient with a complex denominator.
- **Quick self-check:** what is \(\operatorname{Im}\big((2+i)(1+i)\big)\)? *(Answer: \((2+i)(1+i)=2+2i+i-1=1+3i\), so \(\operatorname{Im}=3\).)*

---

<a id="b2u4-l2"></a>
### Lesson 2: Conjugate of a complex number

#### Core idea

The **conjugate** of \(z=a+ib\) is \(\bar z=a-ib\): the same real part, the opposite imaginary part. Geometrically it is the **reflection of \(M(a,b)\) across the real axis**. The conjugate is powerful for two reasons. First, the product \(z\bar z=a^2+b^2\) is a **real, nonnegative** number — this is exactly why multiplying by the conjugate clears an imaginary denominator. Second, \(\bar z\) gives clean tests: \(z\) is real precisely when \(z=\bar z\), and pure imaginary precisely when \(z=-\bar z\).

**How does a student recognise this lesson?** When a bar \(\bar z\) appears, when a quotient must be put in algebraic form, when you must prove a number is real or pure imaginary, or when an equation mixes \(z\) and \(\bar z\). The confusing points are keeping the algebra rules straight (\(\overline{zz'}=\bar z\,\bar z'\), not \(\overline{z}\,z'\)) and remembering that a real number equals its own conjugate.

#### Prerequisite knowledge
- Algebraic form and multiplication in \(\mathbb{C}\) (Lesson 1).
- The identity \((a+ib)(a-ib)=a^2+b^2\).
- Setting \(z=a+ib\) and matching real and imaginary parts.

#### Definitions

**Definition (conjugate).** For \(z=a+ib\) with \(a,b\in\mathbb{R}\), the **conjugate** of \(z\) is
\[
\bar z=a-ib.
\]
If \(M(a,b)\) is the point of \(z\), then \(M'(a,-b)\) — the point of \(\bar z\) — is the reflection of \(M\) across the real axis. Examples: \(\overline{2+3i}=2-3i\); \(\overline{-2i}=2i\); the conjugate of a real number is itself.

> Source: Mathematics Textbook 2, page 93.

#### Formulas and properties

For \(z=a+ib\):
\[
\overline{(\bar z)}=z,\qquad z+\bar z=2a=2\operatorname{Re}(z),\qquad z-\bar z=2ib=2i\operatorname{Im}(z),
\]
\[
\operatorname{Re}(z)=\frac{z+\bar z}{2},\qquad \operatorname{Im}(z)=\frac{z-\bar z}{2i},\qquad z\bar z=a^2+b^2=|z|^2\ge0.
\]

**Characterisations:**
- \(z\) is **real** \(\iff \bar z=z\) (equivalently \(z-\bar z=0\));
- \(z\) is **pure imaginary** \(\iff \bar z=-z\) (equivalently \(z+\bar z=0\)).

> **Important condition:** \(z\bar z\) is always the *real* number \(a^2+b^2\). Do not confuse it with \(z^2=a^2-b^2+2iab\), which is generally not real.

#### Theorems and proofs

**Theorem (algebra of conjugation).** For all complex \(z,z'\):
\[
\overline{z+z'}=\bar z+\bar z',\qquad \overline{z\,z'}=\bar z\cdot\bar z',\qquad \overline{\left(\frac{z}{z'}\right)}=\frac{\bar z}{\bar z'}\ (z'\neq0),\qquad \overline{\left(\frac1z\right)}=\frac1{\bar z}\ (z\neq0).
\]
By induction these extend to any finite number of terms or factors; in particular \(\overline{z^n}=(\bar z)^n\) for every \(n\in\mathbb{N}\).

**Proof (for the sum).** Write \(z=a+ib\), \(z'=a'+ib'\). Then
\[
\overline{z+z'}=\overline{(a+a')+i(b+b')}=(a+a')-i(b+b')=(a-ib)+(a'-ib')=\bar z+\bar z'.
\]
The product and quotient rules are proved the same way (expand \(zz'\) and conjugate). **The student is expected to apply these rules**, and to be able to reproduce the short proof for the sum.

#### Recognising the idea and the solution method
- **"Put a quotient in algebraic form"** → multiply by the conjugate of the denominator.
- **"Show \(w\) is real"** → show \(\bar w=w\) (or that \(\operatorname{Im}(w)=0\)); **"show \(w\) is pure imaginary"** → show \(\bar w=-w\).
- **An equation with \(z\) and \(\bar z\)** → set \(z=a+ib\), so \(\bar z=a-ib\), then match real and imaginary parts.

**Standard algorithm (equation in \(z\) and \(\bar z\)):**
1. Substitute \(z=a+ib\), \(\bar z=a-ib\).
2. Expand and collect real part and imaginary part.
3. Match to the right-hand side → two real equations.
4. Solve the linear system for \(a,b\) and write \(z=a+ib\).

#### Basic example

**B2-U4-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** Given \(z_1=1+2i\) and \(z_2=3-i\), verify that \(\overline{z_1z_2}=\bar z_1\,\bar z_2\).

**Why this method applies.** A direct check of the product rule: compute both sides in algebraic form and compare.

**Step-by-step solution.** Left side:
\[
z_1z_2=(1+2i)(3-i)=3-i+6i-2i^2=3+5i+2=5+5i\ \Rightarrow\ \overline{z_1z_2}=5-5i.
\]
Right side:
\[
\bar z_1\,\bar z_2=(1-2i)(3+i)=3+i-6i-2i^2=3-5i+2=5-5i.
\]

**Final answer.** Both equal \(5-5i\); the rule \(\overline{z_1z_2}=\bar z_1\,\bar z_2\) is confirmed.

**Verification.** The two independent computations agree. ✔

**What the student should learn.** Conjugating a product = product of the conjugates; you may conjugate each factor separately.

> Source: example illustrating the theorem on page 93.

#### Textbook-level example

**B2-U4-L2-E02**

**Problem.** Write in algebraic form \(z_1=\dfrac{2-i}{3+2i}\) and \(z_2=\dfrac1{2+i}-\dfrac1{3-i}\).

**Problem analysis.** Both require clearing imaginary denominators by the conjugate; the second also needs a common denominator.

**Step-by-step solution.** Since \(\overline{3+2i}=3-2i\):
\[
z_1=\frac{(2-i)(3-2i)}{(3+2i)(3-2i)}=\frac{6-4i-3i+2i^2}{9+4}=\frac{6-7i-2}{13}=\frac{4-7i}{13}=\frac{4}{13}-\frac{7}{13}i.
\]
For \(z_2\):
\[
\frac1{2+i}=\frac{2-i}{4+1}=\frac{2-i}{5},\qquad \frac1{3-i}=\frac{3+i}{9+1}=\frac{3+i}{10}.
\]
With common denominator \(10\):
\[
z_2=\frac{2(2-i)}{10}-\frac{3+i}{10}=\frac{4-2i-3-i}{10}=\frac{1-3i}{10}=\frac{1}{10}-\frac{3}{10}i.
\]

**Final answer.** \(z_1=\dfrac{4}{13}-\dfrac{7}{13}i\) and \(z_2=\dfrac{1}{10}-\dfrac{3}{10}i\).

**Verification.** For \(z_2\): \(\dfrac{2-i}{5}=\dfrac{4-2i}{10}\); subtracting \(\dfrac{3+i}{10}\) gives \(\dfrac{1-3i}{10}\). ✔

**What the student should learn.** For a sum of fractions, rationalise each, then use a common denominator; watch the signs when subtracting.

> Source: Mathematics Textbook 2, page 94.

#### Harder / composite example

**B2-U4-L2-E03**

**Problem.** Find the complex number \(z\) such that \(2iz+\bar z=3+3i\).

**Problem analysis.** An equation mixing \(z\) and \(\bar z\); set \(z=a+ib\) and match parts.

**Step-by-step solution.** Let \(z=a+ib\), so \(\bar z=a-ib\):
\[
2i(a+ib)+(a-ib)=2ai+2i^2b+a-ib=(a-2b)+i(2a-b).
\]
Matching with \(3+3i\):
\[
a-2b=3,\qquad 2a-b=3.
\]
From \(2\times\)(first) \(-\) (second): \((2a-4b)-(2a-b)=6-3\Rightarrow -3b=3\Rightarrow b=-1\); then \(a=3+2b=1\).

**Final answer.** \(z=1-i\).

**Verification.** \(2i(1-i)+\overline{1-i}=2i-2i^2+(1+i)=2i+2+1+i=3+3i\). ✔

**What the student should learn.** An equation in \(z\) and \(\bar z\) becomes two real equations once you write \(z=a+ib\).

> Source: Mathematics Textbook 2, page 94 (in the style of the "solve for \(z\)" practice).

#### Common mistake

> **Common mistake:** treating \(\bar z\) as if \(\overline{zz'}=\bar z\cdot z'\), or "conjugating" only part of an expression. Every occurrence of \(i\) flips sign together: \(\overline{z z'}=\bar z\,\bar z'\) and \(\overline{z+z'}=\bar z+\bar z'\). Also, a **real** number satisfies \(\bar z=z\), not \(\bar z=-z\); mixing up the two tests reverses "real" and "pure imaginary".

#### Special cases
- **Real number:** \(\bar z=z\); its point is on the real axis.
- **Pure imaginary:** \(\bar z=-z\); its point is on the imaginary axis.
- **Modulus link:** \(z\bar z=|z|^2\), so \(|z|=\sqrt{z\bar z}\).
- **Conjugate of a power:** \(\overline{z^n}=(\bar z)^n\).

#### Practice set
1. **(B2-U4-L2-P01)** Give the conjugate of \(3-5i\), of \(4\), and of \(-7i\).
2. **(B2-U4-L2-P02)** Using \(z=2-3i\), compute \(z+\bar z\), \(z-\bar z\) and \(z\bar z\).
3. **(B2-U4-L2-P03)** Put \(\dfrac{1}{2-i}\) in algebraic form using the conjugate.
4. **(B2-U4-L2-P04)** Solve for \(z\): \(z-2\bar z=2\).
5. **(B2-U4-L2-P05)** *(near exam level)* Solve for \(z\): \(\dfrac{\bar z-1}{\bar z+1}=i\).

#### Practice solutions
1. \(\overline{3-5i}=3+5i\); \(\bar 4=4\) (real); \(\overline{-7i}=7i\).
2. \(z+\bar z=2\operatorname{Re}(z)=4\); \(z-\bar z=2i\operatorname{Im}(z)=2i(-3)=-6i\); \(z\bar z=2^2+(-3)^2=4+9=13\).
3. \(\dfrac1{2-i}=\dfrac{2+i}{(2-i)(2+i)}=\dfrac{2+i}{5}=\dfrac25+\dfrac15 i\).
4. Let \(z=a+ib\): \((a+ib)-2(a-ib)=-a+3ib=2\Rightarrow -a=2,\ 3b=0\Rightarrow a=-2,\ b=0\). So \(z=-2\).
5. Write \(w=\bar z\): \(\dfrac{w-1}{w+1}=i\Rightarrow w-1=i(w+1)\Rightarrow w-iw=1+i\Rightarrow w(1-i)=1+i\Rightarrow w=\dfrac{1+i}{1-i}=\dfrac{(1+i)^2}{2}=\dfrac{2i}{2}=i\). Thus \(\bar z=i\), so \(z=\overline{i}=-i\). Check: \(\dfrac{\overline{-i}-1}{\overline{-i}+1}=\dfrac{i-1}{i+1}=\dfrac{(i-1)(1-i)}{(1+i)(1-i)}=\dfrac{i-i^2-1+i}{2}=\dfrac{2i}{2}=i\). ✔

#### Lesson summary
- **Most important definition:** \(\bar z=a-ib\), the reflection of \(z\) across the real axis.
- **Most important formulas:** \(z\bar z=a^2+b^2=|z|^2\); \(\operatorname{Re}(z)=\frac{z+\bar z}{2}\), \(\operatorname{Im}(z)=\frac{z-\bar z}{2i}\).
- **Most important condition:** \(z\) real \(\iff z=\bar z\); \(z\) pure imaginary \(\iff z=-\bar z\).
- **Most important pattern:** clear an imaginary denominator by its conjugate.
- **Most common mistake:** distributing the bar incorrectly, or swapping the real/pure-imaginary tests.
- **Quick self-check:** is \(z=2i\) real or pure imaginary? *(Answer: \(\bar z=-2i=-z\), so pure imaginary.)*

---

<a id="b2u4-l3"></a>
### Lesson 3: Modulus, argument and trigonometric form

#### Core idea

Besides its algebraic form, a nonzero complex number can be described by **how far** its point is from the origin and **in which direction**. The distance is the **modulus** \(r=|z|=\sqrt{a^2+b^2}\); the directed angle from the positive real axis to \(\overrightarrow{OM}\) is the **argument** \(\theta=\arg z\), defined only up to multiples of \(2\pi\). Because \(a=r\cos\theta\) and \(b=r\sin\theta\), every nonzero \(z\) can be written in **trigonometric form**
\[
z=r(\cos\theta+i\sin\theta),\qquad r>0.
\]
This viewpoint is the bridge to multiplication-as-rotation and to de Moivre's theorem in the next lesson.

**How does a student recognise this lesson?** When the task mentions \(|z|\), \(\arg z\), "trigonometric form", or a distance/angle in the complex plane; or when a power or product would be painful in algebraic form but easy with moduli and arguments. The confusing points are choosing the correct \(\theta\) (using the signs of both \(\cos\theta\) and \(\sin\theta\), not just \(\tan\)), and remembering \(r>0\) always.

#### Prerequisite knowledge
- The exact values of \(\cos\) and \(\sin\) at \(0,\tfrac{\pi}{6},\tfrac{\pi}{4},\tfrac{\pi}{3},\tfrac{\pi}{2}\) and related angles.
- Pythagoras for the length \(\sqrt{a^2+b^2}\).
- The idea of an angle measured modulo \(2\pi\).

#### Definitions

**Definition (modulus and argument).** For \(z=a+ib\neq0\) with point \(M(a,b)\):
- the **modulus** is \(r=|z|=OM=\sqrt{a^2+b^2}>0\);
- the **argument** is \(\theta=\arg z=(\widehat{\overrightarrow{OI},\overrightarrow{OM}})\), defined **mod \(2\pi\)**, written \(\arg z\equiv\theta\ (2\pi)\).

**Definition (trigonometric form).** With \(a=r\cos\theta\), \(b=r\sin\theta\),
\[
z=r(\cos\theta+i\sin\theta),\qquad r>0,
\]
is the **trigonometric form** of \(z\). Two trigonometric forms \(r(\cos\theta+i\sin\theta)=r'(\cos\theta'+i\sin\theta')\) (with \(r,r'>0\)) are equal iff \(r=r'\) and \(\theta\equiv\theta'\ (2\pi)\).

> Source: Mathematics Textbook 2, pages 95–96.

#### Formulas and properties

**Recovering \(r,\theta\) from \(a,b\):**
\[
r=\sqrt{a^2+b^2},\qquad \cos\theta=\frac{a}{r},\qquad \sin\theta=\frac{b}{r}.
\]

**Conjugate and negative in trigonometric form:** from \(z=r(\cos\theta+i\sin\theta)\),
\[
\bar z=r(\cos\theta-i\sin\theta)=r\big(\cos(-\theta)+i\sin(-\theta)\big),\qquad -z=r\big(\cos(\theta+\pi)+i\sin(\theta+\pi)\big),
\]
hence
\[
\arg(\bar z)\equiv-\arg z\ (2\pi),\qquad \arg(-z)\equiv\arg z+\pi\ (2\pi),\qquad |\bar z|=|z|.
\]

> **Important condition:** in \(z=r(\cos\theta+i\sin\theta)\) the modulus \(r\) must be **positive**. A writing such as \(-2(\cos\theta+i\sin\theta)\) is **not** a trigonometric form; convert it via \(-1=\cos\pi+i\sin\pi\), giving \(2(\cos(\theta+\pi)+i\sin(\theta+\pi))\).

> **Warning:** do not read \(\theta\) from \(\tan\theta=\dfrac{b}{a}\) alone — that loses the quadrant. Always fix \(\theta\) from the **signs** of \(\cos\theta=\dfrac{a}{r}\) and \(\sin\theta=\dfrac{b}{r}\).

#### Recognising the idea and the solution method
- **"Write \(z\) in trigonometric form"** → compute \(r\), then find \(\theta\) from the signs of \(\cos\theta,\sin\theta\).
- **A locus with \(|z|=k\)** → circle of radius \(k\) centred at \(O\); **with \(\arg z=\alpha\)** → a ray from \(O\).
- **Trigonometric ↔ algebraic** → expand \(r(\cos\theta+i\sin\theta)\) with known values, or read \(a,b\) and recover \(r,\theta\).

**Standard algorithm (algebraic → trigonometric):**
1. Compute \(r=\sqrt{a^2+b^2}\).
2. Compute \(\cos\theta=\dfrac ar\), \(\sin\theta=\dfrac br\).
3. Identify the standard angle \(\theta\) with those signs.
4. Write \(z=r(\cos\theta+i\sin\theta)\).

#### Basic example

**B2-U4-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Write \(z=-\sqrt3+i\) in trigonometric form.

**Why this method applies.** We are given the algebraic form; computing \(r\) and reading the signs of \(\cos\theta,\sin\theta\) gives the trigonometric form directly.

**Step-by-step solution.**
\[
r=\sqrt{(-\sqrt3)^2+1^2}=\sqrt{3+1}=2.
\]
\[
\cos\theta=\frac{-\sqrt3}{2}<0,\qquad \sin\theta=\frac{1}{2}>0\ \Rightarrow\ \theta=\frac{5\pi}{6}\quad(\text{second quadrant}).
\]

**Final answer.** \(z=2\left(\cos\dfrac{5\pi}{6}+i\sin\dfrac{5\pi}{6}\right)\).

**Verification.** \(2\cos\dfrac{5\pi}{6}=2\left(-\dfrac{\sqrt3}{2}\right)=-\sqrt3\) and \(2\sin\dfrac{5\pi}{6}=2\cdot\dfrac12=1\). ✔

**What the student should learn.** The negative cosine and positive sine place \(\theta\) in the second quadrant — a plain \(\tan\) would have hidden that.

> Source: example in the style of the conversions on page 95.

#### Textbook-level example

**B2-U4-L3-E02**

**Problem.** Write \(z=1-i\) in trigonometric form.

**Problem analysis.** Standard conversion; the point lies in the fourth quadrant (\(a>0\), \(b<0\)).

**Step-by-step solution.**
\[
r=\sqrt{1^2+(-1)^2}=\sqrt2,\qquad \cos\theta=\frac{1}{\sqrt2},\quad \sin\theta=-\frac{1}{\sqrt2}\ \Rightarrow\ \theta=-\frac{\pi}{4}.
\]

**Final answer.** \(z=\sqrt2\left(\cos\left(-\dfrac{\pi}{4}\right)+i\sin\left(-\dfrac{\pi}{4}\right)\right)\).

**Verification.** \(\sqrt2\cos\left(-\dfrac{\pi}{4}\right)=\sqrt2\cdot\dfrac1{\sqrt2}=1\) and \(\sqrt2\sin\left(-\dfrac{\pi}{4}\right)=-1\). ✔

**What the student should learn.** A positive real part with a negative imaginary part gives an argument in \(\left(-\dfrac{\pi}{2},0\right)\).

> Source: Mathematics Textbook 2, page 95.

#### Harder / composite example

**B2-U4-L3-E03**

**Problem.** Write \(z=2+2\sqrt3\,i\) in trigonometric form, then use it to write \(-z\) and \(\bar z\) in trigonometric form.

**Problem analysis.** First convert \(z\); then apply \(\arg(-z)\equiv\arg z+\pi\) and \(\arg(\bar z)\equiv-\arg z\), keeping the same modulus.

**Step-by-step solution.**
\[
r=\sqrt{2^2+(2\sqrt3)^2}=\sqrt{4+12}=4,\qquad \cos\theta=\frac{2}{4}=\frac12,\quad \sin\theta=\frac{2\sqrt3}{4}=\frac{\sqrt3}{2}\ \Rightarrow\ \theta=\frac{\pi}{3}.
\]
So \(z=4\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)\). Then
\[
-z=4\left(\cos\Big(\tfrac{\pi}{3}+\pi\Big)+i\sin\Big(\tfrac{\pi}{3}+\pi\Big)\right)=4\left(\cos\tfrac{4\pi}{3}+i\sin\tfrac{4\pi}{3}\right),
\]
\[
\bar z=4\left(\cos\Big(-\tfrac{\pi}{3}\Big)+i\sin\Big(-\tfrac{\pi}{3}\Big)\right).
\]

**Final answer.** \(z=4(\cos\tfrac{\pi}{3}+i\sin\tfrac{\pi}{3})\); \(-z=4(\cos\tfrac{4\pi}{3}+i\sin\tfrac{4\pi}{3})\); \(\bar z=4(\cos(-\tfrac{\pi}{3})+i\sin(-\tfrac{\pi}{3}))\).

**Verification.** \(-z=-2-2\sqrt3\,i\); and \(4\cos\tfrac{4\pi}{3}=4\left(-\tfrac12\right)=-2\), \(4\sin\tfrac{4\pi}{3}=4\left(-\tfrac{\sqrt3}{2}\right)=-2\sqrt3\). ✔

**What the student should learn.** Once \(z\) is in trigonometric form, its conjugate and its negative cost only an angle adjustment; the modulus is unchanged.

> Source: Mathematics Textbook 2, pages 95–96.

#### Common mistake

> **Common mistake:** taking \(\theta=\arctan\!\big(\tfrac{b}{a}\big)\) mechanically. For \(z=-\sqrt3+i\) this gives \(\arctan\!\big(-\tfrac1{\sqrt3}\big)=-\tfrac{\pi}{6}\), which is **wrong** — that angle points into the fourth quadrant, but \(z\) is in the second. The correct \(\theta=\tfrac{5\pi}{6}\) comes from the **signs** of \(\cos\theta\) and \(\sin\theta\). Also never let \(r\) be negative.

#### Special cases
- **Positive real \(z=a>0\):** \(\theta=0\); **negative real \(z=a<0\):** \(\theta=\pi\).
- **Pure imaginary \(z=bi\):** \(\theta=\tfrac{\pi}{2}\) if \(b>0\), \(\theta=-\tfrac{\pi}{2}\) if \(b<0\).
- **Modulus 1:** \(z=\cos\theta+i\sin\theta\) lies on the unit circle.
- **\(z=0\):** the argument is **undefined** (no direction).

#### Practice set
1. **(B2-U4-L3-P01)** Compute \(|3-4i|\) and \(|{-2i}|\).
2. **(B2-U4-L3-P02)** Write \(z=1+i\) in trigonometric form.
3. **(B2-U4-L3-P03)** Write \(z=-2i\) in trigonometric form.
4. **(B2-U4-L3-P04)** Write \(z=3-3i\) in trigonometric form.
5. **(B2-U4-L3-P05)** *(near exam level)* Write \(z=2\sqrt3+2i\) in trigonometric form, then give the trigonometric form of \(\bar z\) and of \(-z\).

#### Practice solutions
1. \(|3-4i|=\sqrt{9+16}=\sqrt{25}=5\); \(|-2i|=\sqrt{0+4}=2\).
2. \(r=\sqrt2\), \(\cos\theta=\sin\theta=\dfrac1{\sqrt2}\Rightarrow\theta=\dfrac{\pi}{4}\); so \(z=\sqrt2\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)\).
3. \(r=2\), \(\cos\theta=0,\ \sin\theta=-1\Rightarrow\theta=-\dfrac{\pi}{2}\); so \(z=2\left(\cos\left(-\dfrac{\pi}{2}\right)+i\sin\left(-\dfrac{\pi}{2}\right)\right)\).
4. \(r=\sqrt{9+9}=3\sqrt2\), \(\cos\theta=\dfrac{3}{3\sqrt2}=\dfrac1{\sqrt2},\ \sin\theta=-\dfrac1{\sqrt2}\Rightarrow\theta=-\dfrac{\pi}{4}\); so \(z=3\sqrt2\left(\cos\left(-\dfrac{\pi}{4}\right)+i\sin\left(-\dfrac{\pi}{4}\right)\right)\).
5. \(r=\sqrt{12+4}=4\), \(\cos\theta=\dfrac{2\sqrt3}{4}=\dfrac{\sqrt3}{2},\ \sin\theta=\dfrac12\Rightarrow\theta=\dfrac{\pi}{6}\); so \(z=4\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)\). Then \(\bar z=4\left(\cos\left(-\dfrac{\pi}{6}\right)+i\sin\left(-\dfrac{\pi}{6}\right)\right)\) and \(-z=4\left(\cos\dfrac{7\pi}{6}+i\sin\dfrac{7\pi}{6}\right)\).

#### Lesson summary
- **Most important definition:** \(r=|z|=\sqrt{a^2+b^2}>0\) (a length); \(\theta=\arg z\) (an angle, mod \(2\pi\)).
- **Most important formula:** \(z=r(\cos\theta+i\sin\theta)\), with \(\cos\theta=\tfrac ar\), \(\sin\theta=\tfrac br\).
- **Most important condition:** \(r>0\); read \(\theta\) from the signs of \(\cos\theta\) and \(\sin\theta\).
- **Most important pattern:** \(\arg(\bar z)\equiv-\arg z\), \(\arg(-z)\equiv\arg z+\pi\), \(|\bar z|=|z|\).
- **Most common mistake:** picking \(\theta\) from \(\tan\) alone and losing the quadrant.
- **Quick self-check:** what is \(\arg(-1)\)? *(Answer: \(\pi\).)*

---

<a id="b2u4-l4"></a>
### Lesson 4: Exponential form and de Moivre's theorem

#### Core idea

Multiplying complex numbers is far easier in trigonometric form: the moduli multiply and the arguments add. Writing \(f(\theta)=\cos\theta+i\sin\theta\), this reads
\[
f(\theta)\,f(\theta')=f(\theta+\theta'),
\]
the defining property of an **exponential**. That is why we adopt Euler's notation \(e^{i\theta}=\cos\theta+i\sin\theta\), so every nonzero \(z\) has the **exponential form** \(z=re^{i\theta}\) with \(r=|z|\), \(\theta=\arg z\). Powers then follow instantly: raising to the \(n\)-th power raises the modulus to the \(n\) and multiplies the argument by \(n\) — this is **de Moivre's theorem**.

**How does a student recognise this lesson?** When asked for the exponential form, to compute a large power such as \((1+i)^4\) or \((\sqrt3+i)^3\), to multiply/divide numbers given as \(re^{i\theta}\), or to use Euler's formulas for \(\cos\theta,\sin\theta\). The confusing points are reducing the resulting argument modulo \(2\pi\) and keeping \(r=|z|\) positive.

#### Prerequisite knowledge
- Trigonometric form and the product/argument rules (Lesson 3).
- The addition formulas \(\cos(\theta+\theta')\), \(\sin(\theta+\theta')\).
- Power rules for real exponents (transferred formally to \(e^{i\theta}\)).

#### Definitions

**Definition (Euler's notation and exponential form).** For real \(\theta\),
\[
e^{i\theta}=\cos\theta+i\sin\theta.
\]
Every nonzero complex number \(z\) with \(r=|z|>0\) and \(\theta=\arg z\) is written in **exponential form** as
\[
z=r\,e^{i\theta},
\]
and then \(|z|=r\), \(\arg z\equiv\theta\ (2\pi)\). Special values: \(e^{i\cdot0}=1\) and \(e^{i\pi}=-1\), i.e. the celebrated identity \(e^{i\pi}+1=0\).

> Source: Mathematics Textbook 2, pages 101–102.

#### Formulas and properties

For \(z=re^{i\theta}\), \(z'=r'e^{i\theta'}\) (nonzero):
\[
r e^{i\theta}\cdot r' e^{i\theta'}=rr'\,e^{i(\theta+\theta')},\qquad \frac{re^{i\theta}}{r'e^{i\theta'}}=\frac{r}{r'}\,e^{i(\theta-\theta')},\qquad \overline{re^{i\theta}}=r\,e^{-i\theta},\qquad \big(re^{i\theta}\big)^n=r^n e^{in\theta}.
\]

**Euler's formulas:** for real \(\theta\),
\[
\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2},\qquad \sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}.
\]

> **Important condition:** these rules require \(z\neq0\) (so that \(r>0\) and the argument exists). The \(r\) in front stays positive; only the exponent carries the angle.

#### Theorems and proofs

**Theorem (de Moivre).** For every \(\theta\in\mathbb{R}\) and every \(n\in\mathbb{N}\):
\[
(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta.
\]
More generally, for \(z=r(\cos\theta+i\sin\theta)\), \(z^n=r^n(\cos n\theta+i\sin n\theta)\), i.e. \(|z^n|=|z|^n\) and \(\arg(z^n)\equiv n\arg z\ (2\pi)\).

**Proof (induction on \(n\)).** For \(n=1\) both sides equal \(\cos\theta+i\sin\theta\). Assume \((\cos\theta+i\sin\theta)^p=\cos p\theta+i\sin p\theta\). Then, using the product rule (arguments add),
\[
(\cos\theta+i\sin\theta)^{p+1}=(\cos p\theta+i\sin p\theta)(\cos\theta+i\sin\theta)=\cos(p\theta+\theta)+i\sin(p\theta+\theta)=\cos(p+1)\theta+i\sin(p+1)\theta.
\]
Hence the formula holds for all \(n\in\mathbb{N}\). **The student may quote and apply de Moivre**, and should know this one-line inductive proof.

#### Recognising the idea and the solution method
- **A power \(z^n\)** → convert \(z\) to \(re^{i\theta}\) (or trigonometric form), raise: \(r^n e^{in\theta}\), reduce the angle mod \(2\pi\), convert back if an algebraic answer is wanted.
- **A product/quotient of exponential forms** → multiply/divide the moduli, add/subtract the arguments.
- **An identity for \(\cos n\theta\) or \(\sin n\theta\)** → expand \((\cos\theta+i\sin\theta)^n\) by de Moivre and match parts.

**Standard algorithm (compute \(z^n\)):**
1. Find \(r=|z|\) and \(\theta=\arg z\).
2. Write \(z^n=r^n e^{in\theta}=r^n(\cos n\theta+i\sin n\theta)\).
3. Reduce \(n\theta\) modulo \(2\pi\).
4. If needed, expand to algebraic form using exact values.

#### Basic example

**B2-U4-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** Using de Moivre, compute \((1+i)^4\).

**Why this method applies.** A fourth power is tedious to expand directly, but immediate once \(1+i\) is in trigonometric/exponential form.

**Step-by-step solution.** First \(1+i=\sqrt2\,e^{i\pi/4}=\sqrt2\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)\). Then
\[
(1+i)^4=(\sqrt2)^4\,e^{i\cdot4\cdot\pi/4}=4\,e^{i\pi}=4(\cos\pi+i\sin\pi)=4(-1)=-4.
\]

**Final answer.** \((1+i)^4=-4\).

**Verification.** Directly: \((1+i)^2=2i\), so \((1+i)^4=(2i)^2=4i^2=-4\). ✔

**What the student should learn.** \((\sqrt2)^4=4\) and \(4\cdot\dfrac{\pi}{4}=\pi\); an exact angle collapses the power to a real number.

> Source: Mathematics Textbook 2, page 100 (this power is worked in the text).

#### Textbook-level example

**B2-U4-L4-E02**

**Problem.** Put \(z=\dfrac{(1+i)^2}{(\sqrt3+i)^3}\) in algebraic form using de Moivre.

**Problem analysis.** Convert each base to trigonometric form, apply the power rule to numerator and denominator, then divide (subtract arguments).

**Step-by-step solution.** From E01, \((1+i)^2=2i=2\left(\cos\dfrac{\pi}{2}+i\sin\dfrac{\pi}{2}\right)\). Next \(\sqrt3+i=2\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)\), so
\[
(\sqrt3+i)^3=2^3\left(\cos\dfrac{\pi}{2}+i\sin\dfrac{\pi}{2}\right)=8i.
\]
Therefore
\[
z=\frac{2i}{8i}=\frac{2}{8}=\frac14.
\]

**Final answer.** \(z=\dfrac14\) (a real number).

**Verification.** \((\sqrt3+i)^3=8i\) since \(3\cdot\dfrac{\pi}{6}=\dfrac{\pi}{2}\) and \(2^3=8\); and \(\dfrac{2i}{8i}=\dfrac14\). ✔

**What the student should learn.** Even a messy-looking quotient can reduce to a real number; de Moivre handles the powers, and the equal arguments here cancel.

> Source: Mathematics Textbook 2, pages 99–100.

#### Harder / composite example

**B2-U4-L4-E03**

**Problem.** Let \(z=1+i\sqrt3\). Compute \(z^5+\bar z^{\,5}\).

**Problem analysis.** Convert \(z\) to trigonometric form, raise to the 5th power; since \(\bar z\) has the opposite argument, \(z^5\) and \(\bar z^{\,5}\) are conjugates, so their sum is \(2\operatorname{Re}(z^5)\).

**Step-by-step solution.**
\[
r=\sqrt{1+3}=2,\quad \cos\theta=\tfrac12,\ \sin\theta=\tfrac{\sqrt3}{2}\Rightarrow\theta=\tfrac{\pi}{3};\qquad z=2\left(\cos\tfrac{\pi}{3}+i\sin\tfrac{\pi}{3}\right).
\]
\[
z^5=2^5\left(\cos\tfrac{5\pi}{3}+i\sin\tfrac{5\pi}{3}\right)=32\left(\tfrac12-\tfrac{\sqrt3}{2}i\right)=16-16\sqrt3\,i.
\]
Since \(\bar z^{\,5}=\overline{z^5}=16+16\sqrt3\,i\),
\[
z^5+\bar z^{\,5}=(16-16\sqrt3\,i)+(16+16\sqrt3\,i)=32.
\]

**Final answer.** \(z^5+\bar z^{\,5}=32\).

**Verification.** \(z^5+\bar z^{\,5}=2\operatorname{Re}(z^5)=2\cdot16=32\). ✔

**What the student should learn.** For conjugate bases, \(z^n+\bar z^{\,n}=2\operatorname{Re}(z^n)\) is automatically real — no need to expand the binomial.

> Source: Mathematics Textbook 2, page 100 (in the style of the \((1\pm i\sqrt3)^5\) practice).

#### Common mistake

> **Common mistake:** forgetting to reduce the argument modulo \(2\pi\), or mishandling the modulus. Writing \((1+i)^4=e^{i\pi}\) and dropping the factor \((\sqrt2)^4=4\) gives \(-1\) instead of \(-4\). The modulus is raised to the power too: \(|z^n|=|z|^n\).

#### Special cases
- **Modulus 1** (\(r=1\)): de Moivre in its pure form \((\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta\).
- **\(e^{i\pi}=-1\), \(e^{i\pi/2}=i\), \(e^{-i\pi/2}=-i\):** handy exact values.
- **Conjugate:** \(\overline{re^{i\theta}}=re^{-i\theta}\); reflection negates the argument.
- **Negative-looking modulus:** \(-2e^{i\theta}=2e^{i(\theta+\pi)}\); restore a positive modulus.

#### Practice set
1. **(B2-U4-L4-P01)** Write \(z=1+i\sqrt3\) in exponential form.
2. **(B2-U4-L4-P02)** Compute \((\sqrt3+i)^3\) using de Moivre.
3. **(B2-U4-L4-P03)** With \(z_1=2e^{i\pi/3}\) and \(z_2=3e^{-i\pi/4}\), give \(z_1z_2\) and \(\dfrac{z_1}{z_2}\) in exponential form.
4. **(B2-U4-L4-P04)** Write \(\dfrac{6}{1+i}\) in exponential form.
5. **(B2-U4-L4-P05)** *(near exam level)* Compute \((1+i\sqrt3)^4\) using de Moivre and give the result in algebraic form.

#### Practice solutions
1. \(r=\sqrt{1+3}=2\), \(\theta=\dfrac{\pi}{3}\); so \(z=2e^{i\pi/3}\).
2. \(\sqrt3+i=2e^{i\pi/6}\), so \((\sqrt3+i)^3=2^3e^{i\pi/2}=8e^{i\pi/2}=8i\).
3. \(z_1z_2=2\cdot3\,e^{i(\pi/3-\pi/4)}=6e^{i\pi/12}\); \(\dfrac{z_1}{z_2}=\dfrac{2}{3}\,e^{i(\pi/3+\pi/4)}=\dfrac{2}{3}e^{i7\pi/12}\).
4. \(\dfrac{6}{1+i}=\dfrac{6(1-i)}{2}=3(1-i)=3-3i\); modulus \(3\sqrt2\), argument \(-\dfrac{\pi}{4}\); so \(3\sqrt2\,e^{-i\pi/4}\).
5. \(1+i\sqrt3=2e^{i\pi/3}\), so \((1+i\sqrt3)^4=2^4e^{i4\pi/3}=16\left(\cos\dfrac{4\pi}{3}+i\sin\dfrac{4\pi}{3}\right)=16\left(-\dfrac12-\dfrac{\sqrt3}{2}i\right)=-8-8\sqrt3\,i\).

#### Lesson summary
- **Most important definition:** \(e^{i\theta}=\cos\theta+i\sin\theta\); \(z=re^{i\theta}\) with \(r=|z|>0\).
- **Most important formula:** de Moivre \((\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta\); with \(r\): \(z^n=r^ne^{in\theta}\).
- **Most important condition:** raise the **modulus** to the power too, and reduce the angle mod \(2\pi\).
- **Most important pattern:** products add arguments, quotients subtract, powers multiply.
- **Most common mistake:** dropping \(r^n\), or not reducing \(n\theta\) modulo \(2\pi\).
- **Quick self-check:** what is \(i^{2026}\)? *(Answer: \(i^{2026}=(i^2)^{1013}=(-1)^{1013}=-1\).)*

---

<a id="b2u4-l5"></a>
### Lesson 5: Quadratic equations with real coefficients

#### Core idea

Over the reals, a quadratic \(az^2+bz+c=0\) with \(\Delta=b^2-4ac<0\) has **no** solution. Complex numbers change that: because \(i^2=-1\), a negative discriminant is no longer an obstacle. Completing the square, the equation always reduces to \(\left(z+\dfrac{b}{2a}\right)^2=\dfrac{\Delta}{4a^2}\); when \(\Delta<0\) the right side is the square of \(\dfrac{i\sqrt{-\Delta}}{2a}\), and we obtain **two conjugate complex roots**
\[
z=\frac{-b\pm i\sqrt{-\Delta}}{2a}.
\]
Every real-coefficient quadratic therefore has exactly two roots in \(\mathbb{C}\) (counted with multiplicity) — a first taste of the Fundamental Theorem of Algebra.

**How does a student recognise this lesson?** When asked to "solve in \(\mathbb{C}\)" a quadratic with real coefficients, especially one that "has no real solution", or to factor such a quadratic. The confusing points are computing \(\sqrt{-\Delta}\) correctly (it is the square root of the *positive* number \(-\Delta\)) and remembering that the two roots are conjugates.

#### Prerequisite knowledge
- The real discriminant \(\Delta=b^2-4ac\) and completing the square.
- \(i^2=-1\), and \(\sqrt{k}\) for \(k>0\).
- The conjugate \(\bar z\) (Lesson 2).

#### Definitions

**Definition (discriminant, real-coefficient quadratic).** For \(az^2+bz+c=0\) with \(a,b,c\in\mathbb{R}\), \(a\neq0\), the number \(\Delta=b^2-4ac\) is the **discriminant**. The nature of the roots depends only on the sign of \(\Delta\).

> Source: Mathematics Textbook 2, pages 104–105.

#### Formulas and properties

Completing the square:
\[
az^2+bz+c=a\left[\left(z+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right],\qquad \Delta=b^2-4ac.
\]
Three cases:
- \(\Delta>0\): two distinct **real** roots \(z=\dfrac{-b\pm\sqrt{\Delta}}{2a}\).
- \(\Delta=0\): one **double real** root \(z=\dfrac{-b}{2a}\).
- \(\Delta<0\): two **conjugate complex** roots
\[
z=\frac{-b\pm i\sqrt{-\Delta}}{2a},\qquad z_2=\bar z_1.
\]

**Factorisation:** if \(z_1,z_2\) are the roots, then \(az^2+bz+c=a(z-z_1)(z-z_2)\). Also \(z_1+z_2=-\dfrac ba\) and \(z_1z_2=\dfrac ca\) (sum and product of roots).

> **Important condition:** the "conjugate roots" conclusion needs **real** coefficients \(a,b,c\). If any coefficient is non-real, the roots need not be conjugate and this formula does not apply.

#### Theorems and proofs

**Theorem (roots when \(\Delta<0\)).** If \(a,b,c\in\mathbb{R}\), \(a\neq0\), and \(\Delta=b^2-4ac<0\), then \(az^2+bz+c=0\) has exactly the two conjugate roots \(z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}\).

**Proof.** From \(\left(z+\dfrac{b}{2a}\right)^2=\dfrac{\Delta}{4a^2}\) and \(\Delta<0\), write \(-\Delta>0\); since
\[
\frac{\Delta}{4a^2}=\frac{-(-\Delta)}{4a^2}=\left(\frac{i\sqrt{-\Delta}}{2a}\right)^2,
\]
the equation becomes \(\left(z+\dfrac{b}{2a}\right)^2=\left(\dfrac{i\sqrt{-\Delta}}{2a}\right)^2\), so \(z+\dfrac{b}{2a}=\pm\dfrac{i\sqrt{-\Delta}}{2a}\), giving \(z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}\). The two values are conjugate because they differ only in the sign of the imaginary part. **The student is expected to reproduce this derivation.**

#### Recognising the idea and the solution method
- **"Solve in \(\mathbb{C}\)" a real quadratic** → compute \(\Delta\); if \(\Delta<0\), apply the conjugate-roots formula.
- **A quartic that is a quadratic in \(z^2\) or a product of two quadratics** → factor into quadratics, solve each.
- **"Factor over \(\mathbb{C}\)"** → find the roots, then write \(a(z-z_1)(z-z_2)\).

**Standard algorithm (solve \(az^2+bz+c=0\), real coefficients):**
1. Compute \(\Delta=b^2-4ac\).
2. If \(\Delta<0\), compute \(\sqrt{-\Delta}\) (root of the positive number \(-\Delta\)).
3. Write \(z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}\).
4. Check via \(z_1+z_2=-\dfrac ba\) and \(z_1z_2=\dfrac ca\).

#### Basic example

**B2-U4-L5-E01** — *Original explanatory example created for this guide.*

**Problem.** Solve in \(\mathbb{C}\): \(z^2+2z+5=0\).

**Why this method applies.** Real coefficients with a negative discriminant; the conjugate-roots formula applies.

**Step-by-step solution.**
\[
\Delta=2^2-4(1)(5)=4-20=-16<0,\qquad \sqrt{-\Delta}=\sqrt{16}=4.
\]
\[
z=\frac{-2\pm 4i}{2}=-1\pm2i.
\]

**Final answer.** \(z_1=-1+2i\), \(z_2=-1-2i\) (conjugates).

**Verification.** Sum \(=-2=-\dfrac ba\) ✔; product \((-1)^2+2^2=1+4=5=\dfrac ca\) ✔.

**What the student should learn.** With \(\Delta<0\), take \(\sqrt{-\Delta}\) (here \(\sqrt{16}=4\)); the roots come out conjugate automatically.

> Source: example in the style of the quadratic practice on page 105.

#### Textbook-level example

**B2-U4-L5-E02**

**Problem.** Solve in \(\mathbb{C}\): \(z^2-6z+34=0\).

**Problem analysis.** Real coefficients; compute \(\Delta\) and apply the formula.

**Step-by-step solution.**
\[
\Delta=(-6)^2-4(1)(34)=36-136=-100<0,\qquad \sqrt{-\Delta}=\sqrt{100}=10.
\]
\[
z=\frac{6\pm10i}{2}\ \Rightarrow\ z_1=3+5i,\quad z_2=3-5i.
\]

**Final answer.** \(z_1=3+5i\), \(z_2=3-5i\).

**Verification.** Sum \(=6=-\dfrac ba\) ✔; product \(=(3)^2+(5)^2=9+25=34=\dfrac ca\) ✔.

**What the student should learn.** \(\sqrt{-\Delta}=\sqrt{100}=10\), and dividing \(6\pm10i\) by \(2a=2\) gives \(3\pm5i\).

> Source: Mathematics Textbook 2, page 104.

#### Harder / composite example

**B2-U4-L5-E03**

**Problem.** Solve in \(\mathbb{C}\): \(z^3-3z^2+3z+7=0\), given that \(z=-1\) is a root.

**Problem analysis.** A real-coefficient cubic with one visible real root; factor out \((z+1)\) and solve the remaining quadratic (which will have \(\Delta<0\)).

**Step-by-step solution.** Dividing, \(z^3-3z^2+3z+7=(z+1)(z^2-4z+7)\) (check: \((z+1)(z^2-4z+7)=z^3-4z^2+7z+z^2-4z+7=z^3-3z^2+3z+7\)). Now solve \(z^2-4z+7=0\):
\[
\Delta=(-4)^2-4(1)(7)=16-28=-12<0,\qquad \sqrt{-\Delta}=\sqrt{12}=2\sqrt3.
\]
\[
z=\frac{4\pm2\sqrt3\,i}{2}=2\pm\sqrt3\,i.
\]

**Final answer.** The roots are \(z=-1\), \(z=2+\sqrt3\,i\), \(z=2-\sqrt3\,i\).

**Verification.** For the quadratic: sum \(=4\) ✔, product \(=4+3=7\) ✔. The real root \(-1\) satisfies \(-1-3-3+7=0\) ✔.

**What the student should learn.** For a real-coefficient polynomial, non-real roots come in conjugate pairs; peel off the known real root, then apply the quadratic formula with \(\Delta<0\).

> Source: Mathematics Textbook 2, page 107 (activity: real-coefficient polynomials).

#### Common mistake

> **Common mistake:** writing \(\sqrt{\Delta}=\sqrt{-100}\) as "\(10i\)" via an invalid real square-root rule, or forgetting the \(2a\) in the denominator. The correct step is \(\sqrt{-\Delta}=\sqrt{100}=10\) (a real number), and then \(z=\dfrac{-b\pm i\cdot10}{2a}\). Dividing only the real part by \(2a\), or dropping the \(\pm\), loses a root.

#### Special cases
- **\(\Delta=0\):** a single double real root \(z=-\dfrac{b}{2a}\).
- **\(b=0\):** \(az^2+c=0\) with \(ac>0\) gives \(z=\pm i\sqrt{c/a}\) (pure imaginary), e.g. \(z^2+4=0\Rightarrow z=\pm2i\).
- **Monic with conjugate roots \(p\pm qi\):** the equation is \(z^2-2pz+(p^2+q^2)=0\).
- **Non-real coefficients:** the "conjugate pair" rule fails; solve by completing the square directly.

#### Practice set
1. **(B2-U4-L5-P01)** Solve in \(\mathbb{C}\): \(z^2+z+1=0\).
2. **(B2-U4-L5-P02)** Solve in \(\mathbb{C}\): \(z^2-2z+3=0\).
3. **(B2-U4-L5-P03)** Solve in \(\mathbb{C}\): \(2z^2-6z+5=0\).
4. **(B2-U4-L5-P04)** Find a monic real-coefficient quadratic whose roots are \(3\pm5i\).
5. **(B2-U4-L5-P05)** *(near exam level)* Solve in \(\mathbb{C}\): \(z^4-16=0\). *(Hint: factor as a difference of squares.)*

#### Practice solutions
1. \(\Delta=1-4=-3\), \(\sqrt{-\Delta}=\sqrt3\); \(z=\dfrac{-1\pm i\sqrt3}{2}\).
2. \(\Delta=4-12=-8\), \(\sqrt{-\Delta}=2\sqrt2\); \(z=\dfrac{2\pm2\sqrt2\,i}{2}=1\pm\sqrt2\,i\).
3. \(\Delta=36-40=-4\), \(\sqrt{-\Delta}=2\); \(z=\dfrac{6\pm2i}{4}=\dfrac{3\pm i}{2}\).
4. Sum \(=6\), product \(=3^2+5^2=34\); so \(z^2-6z+34=0\).
5. \(z^4-16=(z^2-4)(z^2+4)=0\). From \(z^2=4\): \(z=\pm2\). From \(z^2=-4\): \(z=\pm2i\). The four roots are \(2,\,-2,\,2i,\,-2i\).

#### Lesson summary
- **Most important definition:** \(\Delta=b^2-4ac\) for a real-coefficient quadratic.
- **Most important formula:** for \(\Delta<0\), \(z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}\) (conjugate roots).
- **Most important condition:** the conjugate-pair rule needs real \(a,b,c\).
- **Most important pattern:** roots \(p\pm qi\) ⇒ \(z^2-2pz+(p^2+q^2)=0\); factor \(a(z-z_1)(z-z_2)\).
- **Most common mistake:** mishandling \(\sqrt{-\Delta}\) or dropping the \(2a\)/\(\pm\).
- **Quick self-check:** the roots of \(z^2+9=0\)? *(Answer: \(z=\pm3i\).)*

---

<a id="b2-u4-test"></a>
### Chapter summary & review test — Unit 4

#### Chapter summary
The unit introduces the complex numbers \(\mathbb{C}\), built on \(i^2=-1\). Each number has an **algebraic form** \(z=a+ib\) (with \(\operatorname{Re}(z)=a\), \(\operatorname{Im}(z)=b\)); we add and multiply as in ordinary algebra and divide by the **conjugate** \(\bar z=a-ib\), using \(z\bar z=a^2+b^2=|z|^2\). Each nonzero number also has a **trigonometric form** \(r(\cos\theta+i\sin\theta)\) and an **exponential form** \(re^{i\theta}\), where multiplication multiplies moduli and adds arguments; powers follow **de Moivre's theorem**. Finally, a real-coefficient quadratic with \(\Delta<0\) has two **conjugate complex roots**.

#### Essential formulas
\[
i^2=-1,\quad z=a+ib,\quad \bar z=a-ib,\quad z\bar z=a^2+b^2=|z|^2,\quad |z|=\sqrt{a^2+b^2},
\]
\[
z=r(\cos\theta+i\sin\theta)=re^{i\theta},\quad e^{i\theta}=\cos\theta+i\sin\theta,
\]
\[
|zz'|=|z||z'|,\quad \arg(zz')\equiv\arg z+\arg z'\ (2\pi),\quad (\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta,
\]
\[
\Delta=b^2-4ac<0:\ z=\frac{-b\pm i\sqrt{-\Delta}}{2a}.
\]

#### Essential theorems/results
- Algebra of conjugation: \(\overline{z+z'}=\bar z+\bar z'\), \(\overline{zz'}=\bar z\,\bar z'\), \(\overline{z^n}=(\bar z)^n\).
- Product/quotient rules for modulus and argument, and their corollary de Moivre.
- Euler's formulas \(\cos\theta=\dfrac{e^{i\theta}+e^{-i\theta}}{2}\), \(\sin\theta=\dfrac{e^{i\theta}-e^{-i\theta}}{2i}\).
- Real-coefficient quadratic with \(\Delta<0\): two conjugate roots; factorisation \(a(z-z_1)(z-z_2)\).

#### Main problem patterns
Put an expression (including a quotient) in algebraic form; find and use conjugates; solve an equation in \(z\) and \(\bar z\); convert between algebraic, trigonometric and exponential forms; compute a power via de Moivre; solve a real-coefficient quadratic with \(\Delta<0\) and factor it.

#### Connections between the chapter's ideas
Algebraic form supports the conjugate; the conjugate gives \(|z|^2=z\bar z\), linking to the modulus; modulus and argument give the trigonometric form; the product-argument rule gives the exponential form and de Moivre; and conjugation explains why real-coefficient quadratics have conjugate roots. These tools return in polynomial equations, plane geometry, and trigonometric identities.

#### Recommended study order
Algebraic form and arithmetic ← conjugate and division ← modulus/argument and trigonometric form ← exponential form and de Moivre ← real-coefficient quadratics.

#### Chapter checklist
- [ ] I put products and quotients in algebraic form.
- [ ] I use \(z\bar z=|z|^2\) and solve equations in \(z,\bar z\).
- [ ] I convert between the three forms and reduce arguments mod \(2\pi\).
- [ ] I compute powers with de Moivre and solve \(\Delta<0\) quadratics.

#### Chapter review test
1. Put \(z=\dfrac{4-6i}{3+2i}\) in algebraic form.
2. Solve for \(z\): \(2z-\bar z=i-1\).
3. Write \(z=-1+i\sqrt3\) in trigonometric form and give \(|z|\), \(\arg z\).
4. Using de Moivre, compute \((1+i)^4\).
5. With \(z_1=2e^{i\pi/3}\), \(z_2=3e^{-i\pi/4}\), write \(z_1z_2\) and \(\dfrac{z_1}{z_2}\) in exponential form.
6. Solve in \(\mathbb{C}\): \(z^2-6z+34=0\).
7. Solve in \(\mathbb{C}\): \(z^2+z+1=0\), and factor \(z^2+z+1\) over \(\mathbb{C}\).
8. Solve in \(\mathbb{C}\): \(z^4-16=0\).

#### Model solutions for the chapter review test
1. \(z=\dfrac{(4-6i)(3-2i)}{9+4}=\dfrac{12-8i-18i+12i^2}{13}=\dfrac{12-26i-12}{13}=\dfrac{-26i}{13}=-2i\).
2. Let \(z=a+ib\): \(2(a+ib)-(a-ib)=a+3ib=-1+i\Rightarrow a=-1,\ 3b=1\Rightarrow b=\tfrac13\). So \(z=-1+\tfrac13 i\). Check: \(2(-1+\tfrac13 i)-(-1-\tfrac13 i)=-2+\tfrac23 i+1+\tfrac13 i=-1+i\). ✔
3. \(r=\sqrt{1+3}=2\), \(\cos\theta=-\tfrac12,\ \sin\theta=\tfrac{\sqrt3}{2}\Rightarrow\theta=\tfrac{2\pi}{3}\). So \(z=2\left(\cos\tfrac{2\pi}{3}+i\sin\tfrac{2\pi}{3}\right)\), \(|z|=2\), \(\arg z\equiv\tfrac{2\pi}{3}\ (2\pi)\).
4. \(1+i=\sqrt2\,e^{i\pi/4}\Rightarrow(1+i)^4=(\sqrt2)^4e^{i\pi}=4(-1)=-4\).
5. \(z_1z_2=6e^{i(\pi/3-\pi/4)}=6e^{i\pi/12}\); \(\dfrac{z_1}{z_2}=\dfrac23 e^{i(\pi/3+\pi/4)}=\dfrac23 e^{i7\pi/12}\).
6. \(\Delta=36-136=-100\), \(\sqrt{-\Delta}=10\); \(z=\dfrac{6\pm10i}{2}=3\pm5i\).
7. \(\Delta=1-4=-3\), \(\sqrt{-\Delta}=\sqrt3\); \(z=\dfrac{-1\pm i\sqrt3}{2}\). Factoring: \(z^2+z+1=\left(z-\dfrac{-1+i\sqrt3}{2}\right)\left(z-\dfrac{-1-i\sqrt3}{2}\right)\).
8. \(z^4-16=(z^2-4)(z^2+4)=0\); from \(z^2=4\), \(z=\pm2\); from \(z^2=-4\), \(z=\pm2i\). Roots: \(2,-2,2i,-2i\).

---

<a id="b2-u5"></a>
## Unit 5: Applications of Complex Numbers in Geometry

> Source: Mathematics Textbook 2, pages 112–129.

### Unit overview

This unit is where complex numbers stop being pure algebra and become a **geometry engine**. The whole idea rests on a single dictionary entry: in a direct orthonormal frame \((O;\vec u,\vec v)\), every point \(M(x,y)\) is identified with the complex number \(z_M=x+iy\), called its **affix** (لاحقة). Once this identification is made, geometric facts translate into complex-number statements and back:

- **Points and vectors as complex numbers:** the affix of a vector \(\overrightarrow{AB}\) is \(z_B-z_A\); midpoints, centroids and barycenters become weighted averages of affixes.
- **Distances and angles from one quotient:** the length \(AB\) is \(|z_B-z_A|\), and the directed angle \((\overrightarrow{AB},\overrightarrow{AC})\) is the **argument** of \(\dfrac{z_C-z_A}{z_B-z_A}\). A single complex quotient therefore carries *both* a ratio of lengths (its modulus) and an angle (its argument) — which is exactly what you need to decide whether points are collinear, whether two lines are perpendicular, or whether a triangle is right, isosceles or equilateral.
- **Transformations as maps \(z'=f(z)\):** translations, homotheties and rotations each have a clean complex form, and conversely any first-degree map \(z'=az+c\) can be *identified* (named, with its centre, ratio and angle) by reading off \(a\) and solving for a fixed point.

**Why it matters:** these tools turn synthetic geometry problems — often hard to see — into short algebraic computations. They are a favourite source of Baccalaureate problems, and they connect directly to the modulus–argument and exponential form studied earlier in Book 2.

**Prerequisites:** modulus and argument of a complex number, the exponential form \(e^{i\theta}\), conjugates and division of complex numbers, and the plane geometry of vectors, distances and oriented angles.

**Main question types:** find an affix from a vector or barycenter condition; compute a distance or an oriented angle; prove collinearity or orthogonality; determine the nature of a triangle or quadrilateral; describe a locus \(|z-z_\Omega|=r\) or \(|z-a|=|z-b|\); write the complex form of a described transformation; identify a transformation from its complex form.

### Unit concept map

```text
Complex Numbers in Geometry   (frame (O; u, v),  M(x,y) ↔ z = x + iy)
├── Affixes
│   ├── Point M(x,y):        z_M = x + iy
│   ├── Vector AB:           z_AB = z_B − z_A
│   ├── Midpoint of [AB]:    z_I = (z_A + z_B)/2
│   ├── Centroid of MNP:     z_G = (z_M + z_N + z_P)/3
│   └── Barycenter:          z_G = (Σ α_k z_k)/(Σ α_k),  Σ α_k ≠ 0
├── Metric information from one quotient  q = (z_C − z_A)/(z_B − z_A)
│   ├── Distance:   AB = |z_B − z_A|
│   ├── Angle:      (AB, AC) = arg q ;   (u, AB) = arg(z_B − z_A)
│   ├── |q| = AC/AB
│   ├── Collinear A,B,C  ⇔  q ∈ ℝ            (arg q ∈ {0, π})
│   └── (AB) ⊥ (AC)      ⇔  q pure imaginary  (arg q ∈ {±π/2})
├── Loci
│   ├── Circle (Ω, r):        |z − z_Ω| = r
│   └── Perp. bisector of [AB]: |z − z_A| = |z − z_B|
└── Transformations   z' = f(z)
    ├── Translation, vector affix b:      z' = z + b
    ├── Homothety (Ω, k), k∈ℝ:            z' − ω = k(z − ω)
    ├── Rotation (Ω, θ):                   z' − ω = e^{iθ}(z − ω)
    └── Identify z' = az + c (a≠1): fixed point ω = c/(1−a),
        a = |a|e^{iθ} → homothety(|a|)∘rotation(θ) about ω
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(z_{\overrightarrow{AB}}=z_B-z_A\) | affix of vector \(\overrightarrow{AB}\) | frame \((O;\vec u,\vec v)\) fixed | — | direction depends on order: \(z_{\overrightarrow{BA}}=z_A-z_B\) |
| \(z_I=\dfrac{z_A+z_B}{2}\) | \(I\) midpoint of \([AB]\) | always | — | special case of the barycenter |
| \(z_G=\dfrac{\alpha_1z_{A_1}+\cdots+\alpha_nz_{A_n}}{\alpha_1+\cdots+\alpha_n}\) | \(G\) barycenter of \((A_k,\alpha_k)\) | \(\sum\alpha_k\neq0\) | if the total weight is \(0\) | centroid = equal weights, \(z_G=\tfrac13(z_A+z_B+z_C)\) |
| \(AB=\lvert z_B-z_A\rvert\) | distance \(A\) to \(B\) | orthonormal frame | non-orthonormal frame | modulus, so always \(\ge0\) |
| \((\vec u,\overrightarrow{AB})=\arg(z_B-z_A)\) | angle with the \(x\)-axis | \(A\neq B\) | if \(A=B\) (affix \(0\)) | defined \(\bmod 2\pi\) |
| \((\overrightarrow{AB},\overrightarrow{AC})=\arg\dfrac{z_C-z_A}{z_B-z_A}\) | oriented angle at \(A\) | \(A\neq B,\ A\neq C\) | if a denominator is \(0\) | \(\bmod 2\pi\); numerator over denominator, not the reverse |
| \(A,B,C\) collinear \(\iff \dfrac{z_C-z_A}{z_B-z_A}\in\mathbb{R}\) | alignment test | \(A\neq B\) | if \(A=B\) | equivalently \(\arg\in\{0,\pi\}\) |
| \((AB)\perp(AC)\iff\dfrac{z_C-z_A}{z_B-z_A}\in i\mathbb{R}\) | perpendicularity test | \(A\neq B,\ A\neq C\) | if a point coincides with \(A\) | pure imaginary \(\iff \arg\in\{\pm\tfrac{\pi}{2}\}\) |
| \(\lvert z-z_\Omega\rvert=r\) | circle centre \(\Omega\), radius \(r\) | \(r>0\) | \(r<0\) impossible | \(\le r\) gives the disk |
| \(\lvert z-z_A\rvert=\lvert z-z_B\rvert\) | perpendicular bisector of \([AB]\) | \(A\neq B\) | if \(A=B\) (whole plane) | set of points equidistant from \(A,B\) |
| \(z'=z+b\) | translation, vector affix \(b\) | — | — | the only map with no fixed point (if \(b\neq0\)) |
| \(z'-\omega=k(z-\omega)\) | homothety centre \(\Omega\), ratio \(k\) | \(k\in\mathbb{R}^*,\ k\neq1\) | \(k=1\) is the identity | \(z'=kz+(1-k)\omega\) |
| \(z'-\omega=e^{i\theta}(z-\omega)\) | rotation centre \(\Omega\), angle \(\theta\) | \(\theta\not\equiv0\) | \(\theta\equiv0\) is the identity | centre \(O\Rightarrow z'=e^{i\theta}z\) |
| \(\omega=\dfrac{c}{1-a}\) for \(z'=az+c\) | fixed-point (centre) | \(a\neq1\) | \(a=1\) (translation) | \(a=|a|e^{i\theta}\): ratio \(|a|\), angle \(\theta\) |

### Unit learning checklist

- [ ] I read off the affix of a point or a vector, and the affix of a midpoint, centroid or barycenter.
- [ ] I translate a vector equation \(\overrightarrow{AC}=\lambda\,\overrightarrow{AB}\) into affixes to find an unknown point.
- [ ] I compute a distance \(AB=|z_B-z_A|\) and an oriented angle \(\arg\dfrac{z_C-z_A}{z_B-z_A}\).
- [ ] I decide collinearity (quotient real) and perpendicularity (quotient pure imaginary).
- [ ] I determine the nature of a triangle (right / isosceles / equilateral) from moduli and arguments.
- [ ] I describe the loci \(|z-z_\Omega|=r\) and \(|z-z_A|=|z-z_B|\).
- [ ] I write the complex form of a translation, homothety and rotation.
- [ ] I identify a transformation from \(z'=az+c\): fixed point, ratio \(|a|\), angle \(\arg a\).

---

<a id="b2u5-l1"></a>
### Lesson 1: Affix of a point and a vector

#### Core idea

Everything in this unit begins with a **correspondence**: fix a direct orthonormal frame \((O;\vec u,\vec v)\); then each point \(M(x,y)\) is matched with the single complex number \(z_M=x+iy\), called its **affix**, and each vector \(\vec w(x,y)\) with the same number \(z_{\vec w}=x+iy\). Conversely the number \(z=x+iy\) *represents* both the point \(M(x,y)\) and the vector \(\vec w(x,y)\). This is not a formula to memorise but a change of language: the plane and the set \(\mathbb{C}\) become two views of the same object.

The first genuinely useful consequence is the **affix of a vector between two points**. Because \(\overrightarrow{AB}\) has coordinates \((x_B-x_A,\ y_B-y_A)\), its affix is \(z_B-z_A\): *end minus start*. From this one line flow midpoints, centroids and barycenters, all as (weighted) averages of affixes.

**How does a student recognise this lesson?** Whenever a problem gives points by their affixes and asks you to find another point, or to translate a vector relation such as \(\overrightarrow{AC}=3\,\overrightarrow{AB}\) or "\(G\) is the centroid of \(ABC\)" into a computation. The usual confusion is the **order** in \(z_B-z_A\) (start and end swapped) and forgetting that scalars in these vector relations must be **real**.

#### Prerequisite knowledge
- Coordinates of a point and of a vector in a frame; \(\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A)\).
- Addition and real-scalar multiplication of complex numbers.
- The barycenter/centroid of points in plane geometry.

#### Definitions

**Definition (affix — لاحقة).** In a direct orthonormal frame \((O;\vec u,\vec v)\), the **affix** of the point \(M(x,y)\) is the complex number \(z_M=x+iy\). The **affix** of the vector \(\vec w(x,y)\) is \(z_{\vec w}=x+iy\). Conversely, \(z=x+iy\) is said to **represent** the point \(M(x,y)\) and the vector \(\vec w(x,y)\).

**Definition (affix of \(\overrightarrow{AB}\)).** For points \(A(z_A)\) and \(B(z_B)\), the affix of \(\overrightarrow{AB}\) is
\[
z_{\overrightarrow{AB}}=z_B-z_A .
\]

> Source: Mathematics Textbook 2, page 113.

#### Formulas and properties

**Linearity of affixes.** The affix map turns vector algebra into complex algebra:
\[
z_{\vec{w_1}+\vec{w_2}}=z_{\vec{w_1}}+z_{\vec{w_2}},\qquad z_{\lambda\vec w}=\lambda\,z_{\vec w}\ (\lambda\in\mathbb{R}),\qquad z_{\lambda_1\vec{w_1}+\lambda_2\vec{w_2}}=\lambda_1 z_{\vec{w_1}}+\lambda_2 z_{\vec{w_2}}.
\]

> **Important condition:** the scalars \(\lambda,\lambda_1,\lambda_2\) here are **real numbers**. Multiplying a vector's affix by a non-real complex number is *not* a scalar multiple of the vector — it also rotates it (that is the transformation idea of Lesson 3, not vector algebra).

**Midpoint, centroid, barycenter.**
\[
z_I=\frac{z_A+z_B}{2}\quad(I\text{ midpoint of }[AB]),\qquad z_G=\frac{z_M+z_N+z_P}{3}\quad(G\text{ centroid of }MNP).
\]
More generally, for weighted points \((A_1,\alpha_1),\dots,(A_n,\alpha_n)\) with \(\alpha_1+\cdots+\alpha_n\neq0\), the barycenter \(G\) has affix
\[
z_G=\frac{\alpha_1 z_{A_1}+\alpha_2 z_{A_2}+\cdots+\alpha_n z_{A_n}}{\alpha_1+\alpha_2+\cdots+\alpha_n}.
\]

> **Warning:** the barycenter formula requires \(\sum_k\alpha_k\neq0\). If the total weight is \(0\), no barycenter exists (the defining relation gives a *vector*, not a point).

#### Theorems and proofs

**Property (affix of \(\overrightarrow{AB}\)).** \(z_{\overrightarrow{AB}}=z_B-z_A\).

*Proof.* \(\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}\), whose coordinates are \((x_B-x_A,\ y_B-y_A)\); its affix is therefore \((x_B-x_A)+i(y_B-y_A)=(x_B+iy_B)-(x_A+iy_A)=z_B-z_A\). \(\blacksquare\)

**Property (barycenter).** With \(\sum_k\alpha_k\neq0\), \(z_G=\dfrac{\sum_k\alpha_k z_{A_k}}{\sum_k\alpha_k}\).

*Proof.* \(G\) is defined by \(\sum_k\alpha_k\overrightarrow{GA_k}=\vec0\). Taking affixes and using linearity, \(\sum_k\alpha_k(z_{A_k}-z_G)=0\), so \(\big(\sum_k\alpha_k\big)z_G=\sum_k\alpha_k z_{A_k}\); dividing by \(\sum_k\alpha_k\neq0\) gives the result. \(\blacksquare\)

You are expected to **apply** these; the short proofs above are the kind the textbook gives and may be asked to reproduce.

#### Recognising the idea and the solution method

- **Given** points by affixes and a **vector equation** \(\overrightarrow{AC}=\lambda\,\overrightarrow{AB}\): rewrite it as \(z_C-z_A=\lambda(z_B-z_A)\) and solve for the unknown affix.
- **Given** "midpoint / centroid / barycenter": apply the corresponding averaging formula directly.
- **Asked** for coordinates of the result: read off \((\operatorname{Re},\operatorname{Im})\) of the affix.

**Standard algorithm.**
1. Write down the affixes of all known points.
2. Translate every vector or barycenter condition into an equation between affixes.
3. Solve for the unknown affix (real-scalar algebra only).
4. If coordinates are asked, split into real and imaginary parts.

#### Basic example

**B2-U5-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** In \((O;\vec u,\vec v)\), \(A\) and \(B\) have affixes \(z_A=1+2i\) and \(z_B=-1+3i\). Find the affix and the coordinates of the point \(C\) such that \(\overrightarrow{AC}=3\,\overrightarrow{AB}\).

**Why this method applies.** The condition is a vector equality, so we translate it into affixes with \(z_{\overrightarrow{AC}}=z_C-z_A\) and \(z_{\overrightarrow{AB}}=z_B-z_A\).

**Step-by-step solution.**
\[
z_C-z_A=3(z_B-z_A)\ \Longrightarrow\ z_C=3z_B-2z_A=3(-1+3i)-2(1+2i)=(-3+9i)-(2+4i)=-5+5i.
\]

**Final answer.** \(z_C=-5+5i\), i.e. \(C(-5,\,5)\).

**Verification.** \(z_{\overrightarrow{AC}}=z_C-z_A=(-5+5i)-(1+2i)=-6+3i\), while \(3\,z_{\overrightarrow{AB}}=3(-2+i)=-6+3i\). They agree. \(\checkmark\)

**What the student should learn.** A vector relation becomes a *linear* equation in affixes; isolate the unknown affix exactly as you would isolate a variable, keeping the coefficient real.

> Source: method of Mathematics Textbook 2, page 114.

#### Textbook-level example

**B2-U5-L1-E02**

**Problem.** \(M\), \(N\), \(P\) have affixes \(z_M=1+i\), \(z_N=4+5i\), \(z_P=-2+2i\). (a) Find the affix of the midpoint \(I\) of \([MN]\). (b) Find the affix and coordinates of the centroid \(G\) of triangle \(MNP\).

**Problem analysis.** Two direct applications: the midpoint is the average of two affixes; the centroid is the average of three.

**Step-by-step solution.**
(a) \(\displaystyle z_I=\frac{z_M+z_N}{2}=\frac{(1+i)+(4+5i)}{2}=\frac{5+6i}{2}=\frac52+3i.\)

(b) \(\displaystyle z_G=\frac{z_M+z_N+z_P}{3}=\frac{(1+i)+(4+5i)+(-2+2i)}{3}=\frac{3+8i}{3}=1+\frac{8}{3}i.\)

**Final answer.** \(z_I=\dfrac52+3i\); \(z_G=1+\dfrac83 i\), i.e. \(G\left(1,\ \dfrac83\right)\).

**Verification.** Real parts: \(\tfrac13(1+4-2)=1\ \checkmark\); imaginary parts: \(\tfrac13(1+5+2)=\tfrac83\ \checkmark\).

**What the student should learn.** Midpoint and centroid are the equal-weight barycenters; average the affixes component-by-component and keep the fraction exact.

> Source: Mathematics Textbook 2, pages 113–114.

#### Common mistake

> **Common mistake:** writing the affix of \(\overrightarrow{AB}\) as \(z_A-z_B\) ("start minus end"). The correct affix is \(z_B-z_A\) (**end minus start**); the wrong order reverses the vector's direction, which flips every subsequent angle by \(\pi\) and can turn a correct figure into its mirror image.

#### Special cases
- **Vector through the origin:** the affix of \(\overrightarrow{OM}\) is just \(z_M\) (since \(z_O=0\)).
- **Centroid = equal weights:** \(z_G=\tfrac13(z_A+z_B+z_C)\) is the barycenter with weights \((1,1,1)\).
- **Total weight zero:** if \(\alpha_1+\cdots+\alpha_n=0\) the barycenter does not exist; the combination \(\sum_k\alpha_k\overrightarrow{MA_k}\) is then a *constant vector*, independent of \(M\).

#### Practice set
1. **(B2-U5-L1-P01)** \(A(z_A=2+i)\), \(B(z_B=6-3i)\). Find the affix of \(\overrightarrow{AB}\) and the affix of the midpoint of \([AB]\).
2. **(B2-U5-L1-P02)** \(A(-3+i)\), \(B(5+3i)\). Find the coordinates of the midpoint of \([AB]\).
3. **(B2-U5-L1-P03)** \(A(2i)\), \(B(3+i)\), \(C(-3+3i)\). Find the affix and coordinates of the centroid \(G\) of triangle \(ABC\).
4. **(B2-U5-L1-P04)** \(A(1+i)\), \(B(3+2i)\). Find the affix of the point \(M\) such that \(\overrightarrow{AM}=-2\,\overrightarrow{AB}\).
5. **(B2-U5-L1-P05)** *(near exam level)* \(A(1-i)\), \(B(4+i)\), \(C(6+3i)\). Find the affix of the point \(D\) such that \(ABCD\) is a parallelogram, then verify that the midpoints of the diagonals \([AC]\) and \([BD]\) coincide.

#### Practice solutions
1. \(z_{\overrightarrow{AB}}=z_B-z_A=(6-3i)-(2+i)=4-4i\). Midpoint: \(\dfrac{(2+i)+(6-3i)}{2}=\dfrac{8-2i}{2}=4-i\).
2. \(\dfrac{(-3+i)+(5+3i)}{2}=\dfrac{2+4i}{2}=1+2i\), so the midpoint is \((1,2)\).
3. \(z_G=\dfrac{2i+(3+i)+(-3+3i)}{3}=\dfrac{0+6i}{3}=2i\), i.e. \(G(0,2)\).
4. \(z_M-z_A=-2(z_B-z_A)\Rightarrow z_M=3z_A-2z_B=3(1+i)-2(3+2i)=(3+3i)-(6+4i)=-3-i\).
5. For \(ABCD\) a parallelogram, \(\overrightarrow{AB}=\overrightarrow{DC}\), i.e. \(z_B-z_A=z_C-z_D\), so \(z_D=z_A+z_C-z_B=(1-i)+(6+3i)-(4+i)=3+i\). Check the diagonals: midpoint of \([AC]=\dfrac{(1-i)+(6+3i)}{2}=\dfrac{7+2i}{2}\); midpoint of \([BD]=\dfrac{(4+i)+(3+i)}{2}=\dfrac{7+2i}{2}\). They coincide, confirming the parallelogram. \(\checkmark\)

#### Lesson summary
- **Most important definition:** the affix of \(M(x,y)\) is \(z_M=x+iy\); the affix of \(\overrightarrow{AB}\) is \(z_B-z_A\).
- **Most important formulas:** \(z_I=\tfrac12(z_A+z_B)\), \(z_G=\tfrac13(z_A+z_B+z_C)\), barycenter \(=\dfrac{\sum\alpha_k z_{A_k}}{\sum\alpha_k}\).
- **Most important condition:** scalars in vector relations are real; the barycenter needs \(\sum\alpha_k\neq0\).
- **Most important pattern:** turn every vector/barycenter condition into an equation between affixes, then solve.
- **Most common mistake:** using \(z_A-z_B\) instead of \(z_B-z_A\) for \(\overrightarrow{AB}\).
- **Quick self-check:** if \(A(3+i)\) and \(B(-1+5i)\), what is the affix of the midpoint of \([AB]\)? *(Answer: \(\tfrac12(2+6i)=1+3i\).)*

---

<a id="b2u5-l2"></a>
### Lesson 2: Distances, angles and the nature of figures

#### Core idea

This lesson equips the affix language with a **ruler and a protractor**. The ruler is the modulus: since the affix of \(\overrightarrow{AB}\) is \(z_B-z_A\), its length is
\[
AB=|z_B-z_A|.
\]
The protractor is the argument: the direction of \(\overrightarrow{AB}\) relative to the \(x\)-axis is \(\arg(z_B-z_A)\), and — combining two vectors — the **oriented angle** at a vertex is the argument of a *quotient* of affixes.

The central object is therefore the complex number
\[
q=\frac{z_C-z_A}{z_B-z_A},
\]
which packages two pieces of geometry at once: its **modulus** \(|q|=\dfrac{AC}{AB}\) is a ratio of lengths, and its **argument** \(\arg q=(\overrightarrow{AB},\overrightarrow{AC})\) is the angle between the two vectors. This is what makes the quotient so powerful for reading off the *nature* of a figure: \(q\in\mathbb{R}\) means the angle is \(0\) or \(\pi\) (the three points are aligned); \(q\) pure imaginary means the angle is \(\pm\tfrac\pi2\) (the lines are perpendicular); \(|q|=1\) means two sides are equal; a specific value like \(q=e^{i\pi/3}\) pins the shape down to equilateral.

**How does a student recognise this lesson?** When asked for a distance, an angle, whether points are collinear or lines perpendicular, or "what is the nature of the triangle / quadrilateral". The confusions are: which affix goes in the numerator (the vector you rotate *to*), and remembering that everything with arguments is only defined **modulo \(2\pi\)**.

#### Prerequisite knowledge
- Modulus \(|z|\) and argument \(\arg z\); the exponential form \(z=|z|e^{i\theta}\).
- Division of complex numbers, and multiplying by the conjugate to simplify a quotient.
- A complex number is **real** \(\iff\) its imaginary part is \(0\) \(\iff \arg\in\{0,\pi\}\); it is **pure imaginary** \(\iff\) its real part is \(0\) \(\iff \arg\in\{\pm\tfrac\pi2\}\).
- Chasles' relation for oriented angles.

#### Definitions

**Definition (auxiliary point for a vector).** For \(\overrightarrow{AB}\), the point \(M\) with \(\overrightarrow{OM}=\overrightarrow{AB}\) has affix \(z_M=z_B-z_A\); then \(OM=AB\) and \((\vec u,\overrightarrow{OM})=(\vec u,\overrightarrow{AB})\). This is the bridge from a vector between two points to a single affix whose modulus and argument we can read.

> Source: Mathematics Textbook 2, page 115.

#### Formulas and properties

**Distance and angle with the axis.** For \(A\neq B\):
\[
\boxed{\,AB=|z_B-z_A|\,}\qquad\text{and}\qquad \boxed{\,(\vec u,\overrightarrow{AB})=\arg(z_B-z_A)\ (2\pi)\,}.
\]

**Ratio of lengths and angle between two vectors.** With \(q=\dfrac{z_C-z_A}{z_B-z_A}\) (assuming \(A\neq B,\ A\neq C\)):
\[
|q|=\frac{AC}{AB},\qquad \arg q=(\overrightarrow{AB},\overrightarrow{AC})\ (2\pi).
\]

**Collinearity and orthogonality tests.**
\[
A,B,C\ \text{collinear}\iff q\in\mathbb{R}\ (\arg q\in\{0,\pi\}),\qquad (AB)\perp(AC)\iff q\in i\mathbb{R}\ (\arg q\in\{\pm\tfrac{\pi}{2}\}).
\]

> **Warning:** the angle is the argument of the quotient in the order **(to)/(from)**: \((\overrightarrow{AB},\overrightarrow{AC})=\arg\dfrac{z_C-z_A}{z_B-z_A}\). Swapping numerator and denominator negates the angle (and inverts the modulus).

**Loci.** For a fixed point \(\Omega(z_\Omega)\), \(r>0\), and points \(A(z_A)\), \(B(z_B)\):
\[
\text{circle }(\Omega,r):\ |z-z_\Omega|=r,\qquad \text{perpendicular bisector of }[AB]:\ |z-z_A|=|z-z_B|.
\]
(The disk is \(|z-z_\Omega|\le r\).)

#### Theorems and proofs

**Theorem (oriented angle between two vectors).** For four points with \(z_A\neq z_B\) and \(z_C\neq z_D\),
\[
(\overrightarrow{AB},\overrightarrow{CD})=\arg\!\left(\frac{z_D-z_C}{z_B-z_A}\right)\ (2\pi).
\]

*Proof.* By Chasles for oriented angles,
\[
(\overrightarrow{AB},\overrightarrow{CD})=(\overrightarrow{AB},\vec u)+(\vec u,\overrightarrow{CD})=(\vec u,\overrightarrow{CD})-(\vec u,\overrightarrow{AB})=\arg(z_D-z_C)-\arg(z_B-z_A)=\arg\!\frac{z_D-z_C}{z_B-z_A}. \ \blacksquare
\]

**Corollary (angle at a vertex).** For three distinct points \(M(z)\), \(A(a)\), \(B(b)\):
\[
(\overrightarrow{MA},\overrightarrow{MB})=\arg\!\left(\frac{b-z}{a-z}\right)\ (2\pi).
\]
You are expected to **apply** this theorem; the Chasles proof is short and may be requested.

#### Recognising the idea and the solution method

- **Distance asked** → compute \(|z_B-z_A|\).
- **Angle asked** → compute \(\arg\dfrac{z_C-z_A}{z_B-z_A}\).
- **"Collinear?"** → is the quotient real?
- **"Perpendicular?"** → is the quotient pure imaginary?
- **"Nature of the triangle?"** → compute the relevant quotient \(q\); read \(|q|\) (equal sides?) and \(\arg q\) (right? \(\tfrac\pi3\) for equilateral?).

**Standard algorithm (nature of a triangle \(ABC\)).**
1. Choose a vertex, say \(A\); form \(q=\dfrac{z_C-z_A}{z_B-z_A}\).
2. Put \(q\) in algebraic form \(x+iy\) (multiply numerator and denominator by the conjugate of the denominator).
3. \(|q|=1\Rightarrow AB=AC\) (isosceles at \(A\)); \(\arg q=\pm\tfrac\pi2\Rightarrow\) right angle at \(A\); both \(\Rightarrow\) right isosceles at \(A\). \(|q|=1\) with \(\arg q=\pm\tfrac\pi3\Rightarrow\) equilateral.
4. If needed, confirm with the side lengths \(AB,BC,CA\) via moduli.

#### Basic example

**B2-U5-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** \(A(1+i)\), \(B(4+2i)\), \(C(4i)\). Determine the nature of triangle \(ABC\).

**Why this method applies.** "Nature of a triangle" is decided by the modulus and argument of the quotient \(q=\dfrac{z_C-z_A}{z_B-z_A}\), which measures both the ratio of two sides and the angle at \(A\).

**Step-by-step solution.**
\[
z_B-z_A=(4+2i)-(1+i)=3+i,\qquad z_C-z_A=(4i)-(1+i)=-1+3i.
\]
\[
q=\frac{-1+3i}{3+i}=\frac{(-1+3i)(3-i)}{(3+i)(3-i)}=\frac{-3+i+9i-3i^2}{9+1}=\frac{-3+3+10i}{10}=\frac{10i}{10}=i.
\]
So \(|q|=1\) and \(\arg q=\dfrac{\pi}{2}\).

**Final answer.** Since \(|q|=\dfrac{AC}{AB}=1\), we have \(AC=AB\); and \(\arg q=(\overrightarrow{AB},\overrightarrow{AC})=\dfrac{\pi}{2}\), a right angle at \(A\). The triangle is **right-angled and isosceles at \(A\)**.

**Verification.** \(AB=|3+i|=\sqrt{10}\), \(AC=|-1+3i|=\sqrt{10}\) (equal), and \(BC=|z_C-z_B|=|-4+2i|=\sqrt{20}=\sqrt{2}\,\sqrt{10}\). Indeed \(BC^2=20=10+10=AB^2+AC^2\): Pythagoras holds. \(\checkmark\)

**What the student should learn.** One quotient settles the whole question: modulus \(1\) gives the isosceles part, argument \(\tfrac\pi2\) gives the right angle — no need to compute all three sides unless you want a check.

> Source: method of Mathematics Textbook 2, pages 116–117.

#### Textbook-level example

**B2-U5-L2-E02**

**Problem.** \(A(0)\), \(B(2)\), \(C(1+i\sqrt3)\). Show that triangle \(ABC\) is equilateral.

**Problem analysis.** For an equilateral triangle at \(A\) we expect \(|q|=1\) (so \(AB=AC\)) and \(\arg q=\pm\tfrac\pi3\). We compute \(q=\dfrac{z_C-z_A}{z_B-z_A}\) and read its exponential form.

**Step-by-step solution.**
\[
z_B-z_A=2,\qquad z_C-z_A=1+i\sqrt3,\qquad q=\frac{1+i\sqrt3}{2}=\frac12+\frac{\sqrt3}{2}i.
\]
This is the standard value \(q=e^{i\pi/3}\): indeed \(|q|=\sqrt{\tfrac14+\tfrac34}=1\) and \(\arg q=\dfrac{\pi}{3}\).

**Final answer.** \(|q|=1\Rightarrow AC=AB\), and \((\overrightarrow{AB},\overrightarrow{AC})=\dfrac{\pi}{3}\). A triangle with two equal sides enclosing an angle of \(\tfrac\pi3\) is **equilateral**.

**Verification.** \(AB=|2|=2\), \(AC=|1+i\sqrt3|=\sqrt{1+3}=2\), \(BC=|z_C-z_B|=|-1+i\sqrt3|=\sqrt{1+3}=2\). All three sides equal \(2\). \(\checkmark\)

**What the student should learn.** When the quotient equals \(e^{i\pi/3}\) (or \(e^{-i\pi/3}\)) with modulus \(1\), the two-equal-sides-plus-\(60^\circ\) argument forces an equilateral triangle.

> Source: Mathematics Textbook 2, pages 116–117.

#### Harder / composite example

**B2-U5-L2-E03**

**Problem.** \(A(1+2i)\), \(B(-1+3i)\), \(C(-5+5i)\), \(D(0)\). (a) Show that \(A\), \(B\), \(C\) are collinear. (b) Determine the nature of triangle \(ABD\).

**Problem analysis.** Part (a) is a collinearity test on the quotient \(\dfrac{z_C-z_A}{z_B-z_A}\) (real \(\Rightarrow\) aligned). Part (b) is a nature-of-triangle question at the vertex \(A\), using \(\dfrac{z_D-z_A}{z_B-z_A}\).

**Step-by-step solution.**
First record the vectors from \(A\): \(z_B-z_A=(-1+3i)-(1+2i)=-2+i\).

(a) \(z_C-z_A=(-5+5i)-(1+2i)=-6+3i\). Then
\[
q_1=\frac{z_C-z_A}{z_B-z_A}=\frac{-6+3i}{-2+i}=\frac{3(-2+i)}{-2+i}=3\in\mathbb{R}.
\]
A real quotient means \(A\), \(B\), \(C\) are collinear (indeed \(\overrightarrow{AC}=3\,\overrightarrow{AB}\)).

(b) \(z_D-z_A=(0)-(1+2i)=-1-2i\). Then
\[
q_2=\frac{z_D-z_A}{z_B-z_A}=\frac{-1-2i}{-2+i}=\frac{(-1-2i)(-2-i)}{(-2+i)(-2-i)}=\frac{2+i+4i+2i^{2}}{4+1}=\frac{2+5i-2}{5}=\frac{5i}{5}=i.
\]
So \(|q_2|=1\) and \(\arg q_2=\dfrac{\pi}{2}\): the sides \(AB,AD\) are equal and the angle at \(A\) is a right angle.

**Final answer.** (a) \(A\), \(B\), \(C\) are collinear, since \(\dfrac{z_C-z_A}{z_B-z_A}=3\in\mathbb{R}\). (b) Since \(q_2=i\) has modulus \(1\) and argument \(\tfrac\pi2\), triangle \(ABD\) is **right-angled and isosceles at \(A\)**.

**Verification.** (a) \(z_C-z_A=-6+3i=3(-2+i)=3(z_B-z_A)\ \checkmark\). (b) \(AB=|-2+i|=\sqrt5\), \(AD=|-1-2i|=\sqrt5\) (equal), and \(BD=|z_D-z_B|=|1-3i|=\sqrt{10}\); indeed \(AB^2+AD^2=5+5=10=BD^2\), so the right angle at \(A\) checks out. \(\checkmark\)

**What the student should learn.** The same quotient tool answers both a collinearity question (is it real?) and a triangle-nature question (what are its modulus and argument?). Reducing the quotient to \(x+iy\) by the conjugate is the safe route to reading off both pieces of information.

> Source: method of Mathematics Textbook 2, pages 116–117.

#### Common mistake

> **Common mistake:** concluding "collinear" or "perpendicular" from the argument alone while ignoring where the affixes sit. The tests are on the **quotient** \(q=\dfrac{z_C-z_A}{z_B-z_A}\): collinear needs \(q\in\mathbb{R}\) (equivalently \(\operatorname{Im}q=0\)), perpendicular needs \(q\in i\mathbb{R}\) (equivalently \(\operatorname{Re}q=0\)). Computing \(\arg q\) without simplifying \(q\) to \(x+iy\) frequently produces a sign error in the angle.

#### Special cases
- **Equal moduli \(|q|=1\):** \(AB=AC\); the triangle is isosceles at \(A\) (whatever the angle).
- **Right isosceles at \(A\):** \(q=\pm i\) (modulus \(1\), argument \(\pm\tfrac\pi2\)).
- **Equilateral (direct/indirect):** \(q=e^{\pm i\pi/3}\).
- **Perpendicular bisector as a locus:** \(|z-z_A|=|z-z_B|\) is the set of \(M\) with \(MA=MB\); algebraically it is a straight line.
- **Circle vs disk:** \(|z-z_\Omega|=r\) is the circle; \(|z-z_\Omega|\le r\) is the filled disk, \(<r\) the open disk.

#### Practice set
1. **(B2-U5-L2-P01)** \(A(1)\), \(B(1+i)\), \(C(2)\). Compute the oriented angle \((\overrightarrow{AB},\overrightarrow{AC})\).
2. **(B2-U5-L2-P02)** \(A(1+i)\), \(B(3+2i)\), \(C(7+4i)\). Prove that \(A\), \(B\), \(C\) are collinear.
3. **(B2-U5-L2-P03)** \(A(2+i)\), \(B(5+2i)\), \(C(1+4i)\). Show that \((AB)\perp(AC)\) and that \(AB=AC\); what is the nature of triangle \(ABC\)?
4. **(B2-U5-L2-P04)** \(A(-1)\), \(B(1)\), \(C(i\sqrt3)\). Show that triangle \(ABC\) is equilateral.
5. **(B2-U5-L2-P05)** *(near exam level)* \(A(1)\), \(B(3+2i)\). Describe geometrically the set of points \(M(z)\) such that (i) \(|z-1|=|z-3-2i|\); (ii) \(|z-3-2i|=1\).

#### Practice solutions
1. \(q=\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{1}{i}=\dfrac{1}{i}\cdot\dfrac{-i}{-i}=-i\). Thus \((\overrightarrow{AB},\overrightarrow{AC})=\arg(-i)=-\dfrac{\pi}{2}\).
2. \(q=\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{6+3i}{2+i}=\dfrac{3(2+i)}{2+i}=3\in\mathbb{R}\). A real quotient means \(A,B,C\) are collinear (here \(\overrightarrow{AC}=3\,\overrightarrow{AB}\)).
3. \(z_B-z_A=3+i\), \(z_C-z_A=-1+3i\); \(q=\dfrac{-1+3i}{3+i}=\dfrac{(-1+3i)(3-i)}{10}=\dfrac{10i}{10}=i\). Pure imaginary \(\Rightarrow(AB)\perp(AC)\); \(|q|=1\Rightarrow AB=AC\). So \(ABC\) is **right-angled isosceles at \(A\)**.
4. \(q=\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{i\sqrt3-(-1)}{1-(-1)}=\dfrac{1+i\sqrt3}{2}=e^{i\pi/3}\); modulus \(1\) and argument \(\tfrac\pi3\Rightarrow\) equilateral. (Check: \(AB=BC=CA=2\).)
5. (i) \(|z-1|=|z-3-2i|\) means \(MA=MB\) with \(A(1),B(3+2i)\): the **perpendicular bisector** of \([AB]\). (ii) \(|z-3-2i|=1\) means the distance from \(M\) to \(B(3+2i)\) is \(1\): the **circle** of centre \(B\) and radius \(1\).

#### Lesson summary
- **Most important definition:** \(q=\dfrac{z_C-z_A}{z_B-z_A}\) carries \(|q|=\dfrac{AC}{AB}\) and \(\arg q=(\overrightarrow{AB},\overrightarrow{AC})\).
- **Most important formulas:** \(AB=|z_B-z_A|\); \((\vec u,\overrightarrow{AB})=\arg(z_B-z_A)\); angle between vectors \(=\arg\dfrac{z_D-z_C}{z_B-z_A}\).
- **Most important conditions:** collinear \(\iff q\in\mathbb{R}\); perpendicular \(\iff q\in i\mathbb{R}\); everything mod \(2\pi\).
- **Most important pattern:** compute one quotient, read modulus (equal sides) and argument (right \(=\pm\tfrac\pi2\), equilateral \(=\pm\tfrac\pi3\)).
- **Most common mistake:** taking the argument before reducing \(q\) to \(x+iy\); swapping numerator and denominator.
- **Quick self-check:** for which value of \(q\) is triangle \(ABC\) right isosceles at \(A\)? *(Answer: \(q=\pm i\).)*

---

<a id="b2u5-l3"></a>
### Lesson 3: Complex form of geometric transformations

#### Core idea

A geometric transformation \(t\) sends each point \(M(z)\) to an image \(M'(z')\). Because points and complex numbers are identified, \(t\) is completely described by a relation \(z'=f(z)\), called its **complex form** (الصيغة العقدية للتحويل). The remarkable fact of this lesson is that the three basic transformations of the syllabus have very simple complex forms — and, read in reverse, a first-degree map \(z'=az+c\) can always be *named*:

- a **translation** shifts every point by the same vector: \(z'=z+b\);
- a **homothety** scales from a centre by a real ratio \(k\): \(z'-\omega=k(z-\omega)\);
- a **rotation** turns about a centre by an angle \(\theta\): \(z'-\omega=e^{i\theta}(z-\omega)\).

The unifying picture is the map \(z'=az+c\). If \(a=1\) it is a translation; if \(a\neq1\) it has a unique **fixed point** \(\omega=\dfrac{c}{1-a}\) (its centre), and writing \(a=|a|e^{i\theta}\) exhibits it as a **homothety of ratio \(|a|\)** composed with a **rotation of angle \(\theta\)** about \(\omega\) — a rotation when \(|a|=1\), a homothety when \(a\in\mathbb{R}\), and a *similarity* in general.

**How does a student recognise this lesson?** When a problem states a transformation in words (translation/homothety/rotation with given data) and asks for its complex form, or gives \(z'=az+c\) and asks for its nature and characteristic elements (centre, ratio, angle). The confusions are: mistaking a rotation (\(|a|=1\)) for a general homothety, and mislocating the centre by errors in \(\dfrac{c}{1-a}\).

#### Prerequisite knowledge
- Complex form and exponential form; \(e^{i\theta}\) has modulus \(1\) and argument \(\theta\).
- Solving a linear equation \(\omega=a\omega+c\) in \(\mathbb{C}\).
- The geometric definitions of translation, homothety and rotation.

#### Definitions

**Definition (complex form of a transformation).** If a transformation \(t\) sends \(M(z)\) to \(M'(z')\), any relation \(z'=f(z)\) expressing \(z'\) in terms of \(z\) is the **complex form** (or complex expression) of \(t\).

**Definition (fixed point).** A point \(\Omega(\omega)\) is a **fixed (invariant) point** of \(t\) if \(t(\Omega)=\Omega\), i.e. \(\omega=f(\omega)\).

> Source: Mathematics Textbook 2, page 119.

#### Formulas and properties

**Translation** of vector \(\vec u\) with affix \(b\):
\[
\boxed{\,z'=z+b\,}.
\]

**Homothety** with centre \(\Omega(\omega)\) and ratio \(k\in\mathbb{R}^*,\ k\neq1\):
\[
\boxed{\,z'-\omega=k(z-\omega)\,}\qquad\Longleftrightarrow\qquad z'=kz+(1-k)\omega.
\]

**Rotation** with centre \(\Omega(\omega)\) and angle \(\theta\):
\[
\boxed{\,z'-\omega=e^{i\theta}(z-\omega)\,}.
\]
If the centre is the origin (\(\omega=0\)): \(z'=e^{i\theta}z\).

**Identifying \(z'=az+c\).**
- \(a=1\Rightarrow\) **translation** of vector affix \(b=c\).
- \(a\in\mathbb{R}\setminus\{1\}\Rightarrow\) **homothety** of ratio \(k=a\), centre \(\omega=\dfrac{c}{1-a}\).
- \(|a|=1,\ a\neq1\ (a=e^{i\theta})\Rightarrow\) **rotation** of angle \(\theta=\arg a\), centre \(\omega=\dfrac{c}{1-a}\).
- \(a\notin\mathbb{R},\ |a|\neq1\Rightarrow\) **direct similarity**: centre \(\omega=\dfrac{c}{1-a}\), ratio \(|a|\), angle \(\arg a\).

> **Important condition:** the fixed-point formula \(\omega=\dfrac{c}{1-a}\) needs \(a\neq1\). When \(a=1\) the map is a translation and (unless \(c=0\)) has **no** fixed point.

#### Theorems and proofs

**Theorem (complex forms).**
1. The translation of vector \(\vec u\) (affix \(b\)) has complex form \(z'=z+b\).
2. The homothety of centre \(\Omega(\omega)\), ratio \(k\), has complex form \(z'-\omega=k(z-\omega)\).
3. The rotation of centre \(\Omega(\omega)\), angle \(\theta\), has complex form \(z'-\omega=e^{i\theta}(z-\omega)\).

*Proof.*
1. \(M'=t(M)\iff\overrightarrow{MM'}=\vec u\iff z'-z=b\iff z'=z+b\).
2. \(M'=h(M)\iff\overrightarrow{\Omega M'}=k\,\overrightarrow{\Omega M}\iff z'-\omega=k(z-\omega)\).
3. For \(M\neq\Omega\), \(M'=R(M)\) means \(\Omega M'=\Omega M\) **and** \((\overrightarrow{\Omega M},\overrightarrow{\Omega M'})=\theta\). In affixes,
\[
\left|\frac{z'-\omega}{z-\omega}\right|=1\quad\text{and}\quad\arg\!\left(\frac{z'-\omega}{z-\omega}\right)=\theta\ \Longrightarrow\ \frac{z'-\omega}{z-\omega}=e^{i\theta}\ \Longrightarrow\ z'-\omega=e^{i\theta}(z-\omega). \ \blacksquare
\]
These proofs are in the textbook; you should be able to reproduce them and, above all, to **apply** the boxed forms.

#### Recognising the idea and the solution method

**A. Writing the complex form of a described transformation.**
1. Translation → read the vector's affix \(b\); write \(z'=z+b\).
2. Homothety → read \(\omega\) and \(k\); write \(z'-\omega=k(z-\omega)\) (expand if a form \(z'=kz+c\) is wanted).
3. Rotation → read \(\omega\) and \(\theta\); write \(z'-\omega=e^{i\theta}(z-\omega)\).

**B. Identifying a transformation from \(z'=az+c\).**
1. Compute \(a\). If \(a=1\): translation, vector affix \(c\) — stop.
2. If \(a\neq1\): the centre is the fixed point \(\omega=\dfrac{c}{1-a}\).
3. Compute \(|a|\) and \(\arg a\): 
 - \(|a|=1\Rightarrow\) rotation, angle \(\arg a\);
 - \(a\in\mathbb{R}\Rightarrow\) homothety, ratio \(a\);
 - otherwise a direct similarity of ratio \(|a|\) and angle \(\arg a\), about \(\omega\).

#### Basic example

**B2-U5-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Let \(R\) be the rotation of centre \(\Omega(1+i)\) and angle \(\dfrac{\pi}{2}\). (a) Write its complex form. (b) Find the image \(M'\) of the point \(M(3+i)\).

**Why this method applies.** A rotation is given directly by \(z'-\omega=e^{i\theta}(z-\omega)\); here \(\theta=\tfrac\pi2\) so \(e^{i\theta}=i\).

**Step-by-step solution.**
(a) With \(\omega=1+i\) and \(e^{i\pi/2}=i\):
\[
z'-(1+i)=i\big(z-(1+i)\big)\ \Longrightarrow\ z'=iz-i(1+i)+(1+i)=iz+(1-i)+(1+i)=iz+2.
\]
So the complex form is \(z'=iz+2\).

(b) For \(M(3+i)\): \(z'=i(3+i)+2=3i+i^2+2=3i-1+2=1+3i\).

**Final answer.** Complex form \(z'=iz+2\); the image of \(M(3+i)\) is \(M'(1+3i)\).

**Verification (as an identification).** From \(z'=iz+2\), \(a=i\) so \(|a|=1\) (a rotation) with \(\arg a=\tfrac\pi2\); the centre is \(\omega=\dfrac{2}{1-i}=\dfrac{2(1+i)}{2}=1+i\), matching \(\Omega\). \(\checkmark\)

**What the student should learn.** To get a form \(z'=az+c\) from centre-and-angle data, expand \(z'-\omega=e^{i\theta}(z-\omega)\); the constant that appears is \((1-e^{i\theta})\omega\).

> Source: method of Mathematics Textbook 2, pages 119–120.

#### Textbook-level example

**B2-U5-L3-E02**

**Problem.** Write the complex form of the rotation \(R\) of centre \(\Omega(2)\) and angle \(\dfrac{\pi}{3}\), then find the image of the point \(M(4)\).

**Problem analysis.** Again \(z'-\omega=e^{i\theta}(z-\omega)\), now with \(\omega=2\) (a real affix) and \(e^{i\pi/3}=\dfrac12+\dfrac{\sqrt3}{2}i\).

**Step-by-step solution.**
\[
z'-2=e^{i\pi/3}(z-2)=\left(\frac12+\frac{\sqrt3}{2}i\right)(z-2).
\]
Expanding, \(z'=\left(\dfrac12+\dfrac{\sqrt3}{2}i\right)z+\left(2-2\cdot\dfrac12-2\cdot\dfrac{\sqrt3}{2}i\right)=\left(\dfrac12+\dfrac{\sqrt3}{2}i\right)z+\left(1-\sqrt3\,i\right).\)

For \(M(4)\): \(z'-2=e^{i\pi/3}(4-2)=2e^{i\pi/3}=2\left(\dfrac12+\dfrac{\sqrt3}{2}i\right)=1+\sqrt3\,i\), so \(z'=3+\sqrt3\,i\).

**Final answer.** Complex form \(z'=\left(\dfrac12+\dfrac{\sqrt3}{2}i\right)z+\left(1-\sqrt3\,i\right)\); image of \(M(4)\) is \(M'(3+\sqrt3\,i)\).

**Verification.** \(\Omega M=|4-2|=2\) and \(\Omega M'=|(3+\sqrt3 i)-2|=|1+\sqrt3 i|=\sqrt{1+3}=2\): the distance to the centre is preserved. \(\checkmark\)

**What the student should learn.** For a rotation you may either expand to a linear form, or apply \(z'-\omega=e^{i\theta}(z-\omega)\) directly to a specific point — the second is faster for a single image.

> Source: Mathematics Textbook 2, page 120.

#### Harder / composite example

**B2-U5-L3-E03**

**Problem.** Identify the transformation with complex form \(z'=(1+i)\,z+(1-2i)\): give its nature and all its characteristic elements (centre, ratio, angle). Then find the image of the origin \(O\).

**Problem analysis.** Here \(a=1+i\) is neither \(1\), nor real, nor of modulus \(1\); so the map is a **direct similarity**. We compute \(|a|\), \(\arg a\) and the fixed point \(\omega=\dfrac{c}{1-a}\).

**Step-by-step solution.**
Modulus and argument of \(a=1+i\):
\[
|a|=\sqrt{1^2+1^2}=\sqrt2,\qquad \arg a=\frac{\pi}{4}\quad(\text{since }a=\sqrt2\,e^{i\pi/4}).
\]
Fixed point (centre), from \(\omega=(1+i)\omega+(1-2i)\), i.e. \((1-a)\omega=c\):
\[
\omega=\frac{c}{1-a}=\frac{1-2i}{1-(1+i)}=\frac{1-2i}{-i}=\frac{(1-2i)}{-i}\cdot\frac{i}{i}=\frac{(1-2i)\,i}{-i^2}=\frac{i-2i^2}{1}=2+i.
\]
So the similarity has centre \(\Omega(2+i)\), ratio \(\sqrt2\) and angle \(\tfrac\pi4\); its canonical form is
\[
z'-(2+i)=\sqrt2\,e^{i\pi/4}\big(z-(2+i)\big).
\]
Image of \(O\): \(z'=(1+i)\cdot0+(1-2i)=1-2i\).

**Final answer.** A **direct similarity** of centre \(\Omega(2+i)\), ratio \(\sqrt2\) and angle \(\dfrac{\pi}{4}\) (equivalently, the homothety of ratio \(\sqrt2\) followed by the rotation of angle \(\tfrac\pi4\), both about \(\Omega\)). The image of \(O\) is the point of affix \(1-2i\).

**Verification.** The centre must be fixed: \((1+i)(2+i)+(1-2i)=(2+i+2i+i^2)+(1-2i)=(2+3i-1)+(1-2i)=(1+3i)+(1-2i)=2+i=\omega\). \(\checkmark\) Also \(\Omega O=|0-(2+i)|=\sqrt5\) and \(\Omega O'=|(1-2i)-(2+i)|=|-1-3i|=\sqrt{10}=\sqrt2\cdot\sqrt5\), matching the ratio \(\sqrt2\). \(\checkmark\)

**What the student should learn.** For \(z'=az+c\) with \(a\) neither real nor of modulus \(1\), read the *ratio* as \(|a|\), the *angle* as \(\arg a\), and the *centre* as \(\dfrac{c}{1-a}\); confirm by checking the centre is fixed.

> Source: method of Mathematics Textbook 2, page 120.

#### Common mistake

> **Common mistake:** seeing \(z'=az+c\) with a complex \(a\) and immediately calling it a rotation. It is a **rotation only when \(|a|=1\)**. If \(|a|\neq1\) (e.g. \(a=1+i\), \(|a|=\sqrt2\)) the map is a similarity: rotation by \(\arg a\) *and* scaling by \(|a|\). Always compute \(|a|\) first.

#### Special cases
- **Centre at the origin:** homothety \(z'=kz\); rotation \(z'=e^{i\theta}z\).
- **Angle \(\theta=\pi\):** the rotation \(z'-\omega=-(z-\omega)\) is the point-symmetry (central symmetry) about \(\Omega\) — also the homothety of ratio \(-1\).
- **Ratio \(k=1\) or angle \(\theta\equiv0\):** the transformation is the identity.
- **Translation has no fixed point** (when \(b\neq0\)): \(z'=z+b\) with \(b\neq0\) gives \(a=1\), so \(\omega=\dfrac{c}{1-a}\) is undefined — consistent with "no centre".

#### Practice set
1. **(B2-U5-L3-P01)** Write the complex form of the translation of vector \(\vec u\) with affix \(2-3i\), and find the image of \(M(1+i)\).
2. **(B2-U5-L3-P02)** Write the complex form of the homothety of centre \(O\) and ratio \(-2\); find the image of \(M(3-i)\).
3. **(B2-U5-L3-P03)** Write the complex form of the rotation of centre \(O\) and angle \(-\dfrac{\pi}{2}\); find the image of \(M(2+i)\).
4. **(B2-U5-L3-P04)** Identify the transformation \(z'=-z+2\): give its nature and its centre.
5. **(B2-U5-L3-P05)** *(near exam level)* Identify the transformation \(z'=(1-i\sqrt3)\,z+(3+i\sqrt3)\): nature, centre, ratio and angle.

#### Practice solutions
1. \(z'=z+(2-3i)\). Image of \(M(1+i)\): \(z'=(1+i)+(2-3i)=3-2i\).
2. Centre \(O\), ratio \(-2\): \(z'=-2z\). Image of \(M(3-i)\): \(z'=-2(3-i)=-6+2i\).
3. \(e^{-i\pi/2}=-i\), centre \(O\): \(z'=-iz\). Image of \(M(2+i)\): \(z'=-i(2+i)=-2i-i^2=1-2i\).
4. \(a=-1\in\mathbb{R}\), so a **homothety of ratio \(-1\)** — equivalently the central symmetry — with centre \(\omega=\dfrac{2}{1-(-1)}=\dfrac{2}{2}=1\), i.e. \(\Omega(1)\).
5. \(a=1-i\sqrt3\): \(|a|=\sqrt{1+3}=2\) and \(\arg a=-\dfrac{\pi}{3}\) (since \(a=2e^{-i\pi/3}\)). Centre \(\omega=\dfrac{3+i\sqrt3}{1-(1-i\sqrt3)}=\dfrac{3+i\sqrt3}{i\sqrt3}=\dfrac{(3+i\sqrt3)(-i)}{\sqrt3}=\dfrac{-3i+\sqrt3}{\sqrt3}=1-i\sqrt3\). So it is a **direct similarity** of centre \(\Omega(1-i\sqrt3)\), ratio \(2\) and angle \(-\dfrac{\pi}{3}\).

#### Lesson summary
- **Most important definitions:** translation \(z'=z+b\); homothety \(z'-\omega=k(z-\omega)\); rotation \(z'-\omega=e^{i\theta}(z-\omega)\).
- **Most important formula:** for \(z'=az+c\ (a\neq1)\), the centre is \(\omega=\dfrac{c}{1-a}\).
- **Most important condition:** \(|a|=1\Rightarrow\) rotation; \(a\in\mathbb{R}\Rightarrow\) homothety; else similarity of ratio \(|a|\), angle \(\arg a\).
- **Most important pattern:** to name \(z'=az+c\): read \(|a|\) and \(\arg a\), then locate the fixed point.
- **Most common mistake:** calling every \(z'=az+c\) with complex \(a\) a rotation, ignoring \(|a|\).
- **Quick self-check:** what transformation is \(z'=e^{i\pi/3}z\)? *(Answer: rotation of centre \(O\) and angle \(\tfrac\pi3\).)*

---

<a id="b2-u5-test"></a>
### Chapter summary & review test — Unit 5

#### Chapter summary
Fixing a direct orthonormal frame identifies each point \(M(x,y)\) with its affix \(z_M=x+iy\). The affix of \(\overrightarrow{AB}\) is \(z_B-z_A\); midpoints, centroids and barycenters are (weighted) averages of affixes. Metric geometry follows from moduli and arguments: \(AB=|z_B-z_A|\), and the quotient \(q=\dfrac{z_C-z_A}{z_B-z_A}\) gives simultaneously the ratio \(\dfrac{AC}{AB}=|q|\) and the angle \((\overrightarrow{AB},\overrightarrow{AC})=\arg q\) — hence the tests for collinearity (\(q\in\mathbb{R}\)) and perpendicularity (\(q\in i\mathbb{R}\)), and the nature of a triangle. Loci appear as \(|z-z_\Omega|=r\) (circle) and \(|z-z_A|=|z-z_B|\) (perpendicular bisector). Finally, transformations have complex forms — translation \(z'=z+b\), homothety \(z'-\omega=k(z-\omega)\), rotation \(z'-\omega=e^{i\theta}(z-\omega)\) — and any \(z'=az+c\) (\(a\neq1\)) is identified through its fixed point \(\omega=\dfrac{c}{1-a}\) and the modulus/argument of \(a\).

#### Essential formulas
\[
z_{\overrightarrow{AB}}=z_B-z_A,\quad z_I=\tfrac12(z_A+z_B),\quad z_G=\tfrac13(z_A+z_B+z_C),\quad AB=|z_B-z_A|,
\]
\[
(\overrightarrow{AB},\overrightarrow{AC})=\arg\frac{z_C-z_A}{z_B-z_A},\quad z'=z+b,\quad z'-\omega=k(z-\omega),\quad z'-\omega=e^{i\theta}(z-\omega),\quad \omega=\frac{c}{1-a}.
\]

#### Essential theorems/results
- Affix of a vector \(=\) difference of affixes; barycenter \(=\) weighted mean of affixes.
- Oriented angle \((\overrightarrow{AB},\overrightarrow{CD})=\arg\dfrac{z_D-z_C}{z_B-z_A}\) (Chasles proof).
- Collinearity \(\iff\) real quotient; orthogonality \(\iff\) pure-imaginary quotient.
- Complex forms of translation, homothety, rotation; identification of \(z'=az+c\).

#### Main problem patterns
Affix from a vector/barycenter condition; distance and oriented angle; collinearity/orthogonality; nature of a triangle or quadrilateral via moduli and arguments; loci (circle, perpendicular bisector); complex form of a described transformation; identification of a transformation from \(z'=az+c\).

#### Connections between the chapter's ideas
The modulus supplies distances, the argument supplies angles — the two halves of the exponential form studied earlier. Collinearity/orthogonality are the "argument \(=0,\pi\)" and "argument \(=\pm\tfrac\pi2\)" special cases of the angle formula. Transformations reuse the same quotient: a rotation is exactly "\(\big|\frac{z'-\omega}{z-\omega}\big|=1\) and \(\arg=\theta\)", and a similarity generalises it to any modulus.

#### Recommended study order
Affixes (points, vectors, barycenter) ← distance and angle ← collinearity/orthogonality and nature of figures ← loci ← complex forms of transformations ← identifying \(z'=az+c\).

#### Chapter checklist
- [ ] I convert vector and barycenter conditions into affixes and back to coordinates.
- [ ] I compute distances and oriented angles, and I test collinearity and perpendicularity.
- [ ] I classify a triangle (right / isosceles / equilateral) from one quotient.
- [ ] I write and identify the complex forms of translations, homotheties and rotations.

#### Chapter review test
1. \(A(-1+2i)\), \(B(3-i)\). Compute the distance \(AB\) and the affix of the midpoint of \([AB]\).
2. \(A(2+i)\), \(B(4+3i)\), \(C(3i)\). Determine the nature of triangle \(ABC\).
3. \(A(1+i)\), \(B(2+3i)\), \(C(4+7i)\). Prove that \(A\), \(B\), \(C\) are collinear.
4. Identify the transformation \(z'=(1-i\sqrt3)\,z+(3+i\sqrt3)\): nature, centre, ratio and angle.
5. Identify the transformation \(z'=iz+(2-2i)\): nature and centre.
6. \(A(1)\), \(B(3+2i)\). Describe the set of points \(M(z)\) with \(|z-1|=|z-3-2i|\), and the set with \(|z-1-i|=2\).
7. Write the complex form of the rotation of centre \(\Omega(1+i)\) and angle \(\dfrac{\pi}{2}\), and find the image of \(M(3+i)\).

#### Model solutions for the chapter review test
1. \(AB=|z_B-z_A|=|(3-i)-(-1+2i)|=|4-3i|=\sqrt{16+9}=5\). Midpoint: \(\dfrac{(-1+2i)+(3-i)}{2}=\dfrac{2+i}{2}=1+\dfrac12 i\).
2. \(z_B-z_A=2+2i\), \(z_C-z_A=-2+2i\); \(q=\dfrac{-2+2i}{2+2i}=\dfrac{2(-1+i)}{2(1+i)}=\dfrac{-1+i}{1+i}=\dfrac{(-1+i)(1-i)}{2}=\dfrac{-1+i+i-i^2}{2}=\dfrac{2i}{2}=i\). Since \(|q|=1\) and \(\arg q=\tfrac\pi2\): triangle \(ABC\) is **right-angled isosceles at \(A\)**. (Check: \(AB=AC=\sqrt8\), \(BC=|{-2}|\)… \(BC=|z_C-z_B|=|-4|=4\), and \(AB^2+AC^2=8+8=16=BC^2\).)
3. \(q=\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{3+6i}{1+2i}=\dfrac{3(1+2i)}{1+2i}=3\in\mathbb{R}\); a real quotient means \(A,B,C\) are collinear (\(\overrightarrow{AC}=3\,\overrightarrow{AB}\)).
4. \(a=1-i\sqrt3\Rightarrow|a|=2,\ \arg a=-\tfrac\pi3\) (so \(a=2e^{-i\pi/3}\)). Centre \(\omega=\dfrac{3+i\sqrt3}{1-(1-i\sqrt3)}=\dfrac{3+i\sqrt3}{i\sqrt3}=\dfrac{(3+i\sqrt3)(-i)}{\sqrt3}=\dfrac{-3i+\sqrt3}{\sqrt3}=1-i\sqrt3\). It is a **direct similarity** of centre \(\Omega(1-i\sqrt3)\), ratio \(2\), angle \(-\tfrac\pi3\).
5. \(a=i\Rightarrow|a|=1\), so a **rotation** of angle \(\arg i=\tfrac\pi2\). Centre \(\omega=\dfrac{2-2i}{1-i}=\dfrac{2(1-i)}{1-i}=2\), i.e. \(\Omega(2)\).
6. \(|z-1|=|z-3-2i|\) is the set of \(M\) with \(MA=MB\) where \(A(1),B(3+2i)\): the **perpendicular bisector** of \([AB]\). \(|z-1-i|=2\) is the set of \(M\) at distance \(2\) from the point of affix \(1+i\): the **circle** of centre \((1,1)\) and radius \(2\).
7. \(z'-(1+i)=e^{i\pi/2}\big(z-(1+i)\big)=i\big(z-(1+i)\big)\), i.e. \(z'=iz+2\) (since \(-i(1+i)+(1+i)=(1-i)+(1+i)=2\)). Image of \(M(3+i)\): \(z'=i(3+i)+2=(3i-1)+2=1+3i\), so \(M'(1+3i)\).

---

<a id="b2-u6"></a>
## Unit 6: Combinatorics

> Source: Mathematics Textbook 2, pages 130–151.

### Unit overview

This unit teaches you to **count** without listing — to find *how many* outcomes a process has, when writing them all out is hopeless. It is the algebra of choices.

- **The fundamental counting principle:** a sequence of independent choices multiplies.
- **Lists, arrangements, permutations:** ways to pick an **ordered** selection, either with repetition (a list, \(n^p\)), without repetition (an arrangement, \(A_n^p\)), or using every element once (a permutation, \(n!\)).
- **Combinations:** ways to pick an **unordered** selection (a subset), \(\binom{n}{p}\), together with their symmetry, Pascal's rule and Pascal's triangle.
- **The binomial theorem:** expanding \((a+b)^n\) with the combinations \(\binom{n}{k}\) as coefficients.

**Why it matters:** every counting question reduces to one decision — **does order matter, and is repetition allowed?** Getting that decision right is the whole subject. Combinatorics also feeds directly into probability (equally-likely outcomes are *counted* with these formulas) and into the algebra of \((a+b)^n\).

**Prerequisites:** the factorial \(n!\) and its convention \(0!=1\); basic algebra of powers; reading a set and its subsets.

**Main question types:** count ordered selections (with/without repetition); count permutations; count subsets/committees; use "at least/at most" via the complement; expand a binomial; find a single term or coefficient in \((a+b)^n\); sum a coefficient series by substituting special values.

> **Notation of this guide:** we write the number of arrangements as \(A_n^{p}\). The textbook writes the **same** quantity as \(P_n^{\,p}\) (letter \(P\), lower subscript \(n\), upper superscript \(p\)). For combinations we use the column symbol \(\binom{n}{p}\); the textbook notes the older symbol \(C_n^{p}\) in a footnote. The textbook uses the lower letter \(r\) where this guide (following the task) uses \(p\); they mean the same size.

### Unit concept map

```text
Combinatorics
├── Fundamental counting principle: choices multiply  n₁ × n₂ × ⋯ × n_p
├── ORDER MATTERS (ordered selections of size p from n)
│   ├── with repetition        → list           → n^p
│   ├── without repetition     → arrangement Aⁿₚ → n!/(n−p)! = n(n−1)⋯(n−p+1)
│   └── all n elements, once   → permutation     → n!   (0! = 1)
├── ORDER DOES NOT MATTER (subset of size p from n)
│   └── without repetition     → combination C(n,p) = n!/(p!(n−p)!) = Aⁿₚ/p!
│       ├── symmetry:  C(n,p) = C(n,n−p)
│       └── Pascal:    C(n−1,p−1) + C(n−1,p) = C(n,p)   → Pascal's triangle
└── Binomial theorem: (a+b)ⁿ = Σ C(n,k) a^{n−k} b^k ,   Σ C(n,k) = 2ⁿ
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(n_1\times n_2\times\cdots\times n_p\) | \(n_i\) = choices at stage \(i\) | stages independent | if a later choice depends on an earlier one | the master principle behind all the rest |
| \(n^{p}\) (lists) | \(n\) elements, length \(p\) | ordered, **repetition allowed** | if elements must be distinct | it is \(n\) to the power \(p\), not \(p^n\) |
| \(A_n^{p}=\dfrac{n!}{(n-p)!}\) | ordered, \(p\) **distinct** of \(n\) | \(0\le p\le n\) | if order does not matter | \(=n(n-1)\cdots(n-p+1)\); book writes \(P_n^{\,p}\) |
| \(n!\) (permutations) | order all \(n\) elements | uses every element once | if only \(p<n\) are chosen | \(n!=n\,(n-1)!\); \(0!=1\) |
| \(\binom{n}{p}=\dfrac{n!}{p!\,(n-p)!}\) | subsets of size \(p\) | \(0\le p\le n\), **order ignored** | if order matters | \(=\dfrac{A_n^{p}}{p!}\); old symbol \(C_n^{p}\) |
| \(\binom{n}{p}=\binom{n}{n-p}\) | symmetry | \(0\le p\le n\) | — | choosing \(p\) to keep = choosing \(n-p\) to drop |
| \(\binom{n-1}{p-1}+\binom{n-1}{p}=\binom{n}{p}\) | Pascal's rule | \(1\le p<n\) | — | builds Pascal's triangle row by row |
| \((a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^{k}\) | binomial theorem | \(n\in\mathbb{N}^*\), any \(a,b\) | — | general term \(\binom{n}{k}a^{n-k}b^{k}\) |
| \(\sum_{k=0}^{n}\binom{n}{k}=2^{n}\) | sum of a row | \(n\in\mathbb{N}\) | — | = number of all subsets of an \(n\)-set |

### Unit learning checklist

- [ ] Before counting, I decide **order matters or not**, and **repetition allowed or not**.
- [ ] I use \(n^p\) for ordered-with-repetition and \(A_n^p\) for ordered-without-repetition.
- [ ] I know a permutation is \(n!\) and that \(0!=1\).
- [ ] I count subsets/committees with \(\binom{n}{p}\), and use \(\binom{n}{p}=\dfrac{A_n^p}{p!}\).
- [ ] I handle "at least one" by subtracting the complement from the total.
- [ ] I apply symmetry and Pascal's rule, and I can build Pascal's triangle.
- [ ] I expand \((a+b)^n\) and extract a single term or coefficient.
- [ ] I sum a coefficient series by substituting a well-chosen value of \(x\).

---

<a id="b2u6-l1"></a>
### Lesson 1: Lists, arrangements and permutations

#### Core idea

Suppose you build an outcome by making choices **one stage at a time** — first this, then that. The **fundamental counting principle** says the numbers of choices *multiply*: if stage 1 can be done in \(n_1\) ways and, whatever you did, stage 2 in \(n_2\) ways, and so on, the total is \(n_1\times n_2\times\cdots\times n_p\). Every formula in this lesson is just this principle applied cleverly.

When the outcome is an **ordered** selection of \(p\) items taken from a set \(E\) of \(n\) elements, exactly two questions decide the count:

- **May an element be used again?** If yes, each of the \(p\) positions has all \(n\) choices, giving \(n^p\) — a **list** (with repetition).
- **Must the elements be distinct?** If yes, the first position has \(n\) choices, the second only \(n-1\) (one is used up), then \(n-2\), …, down to \(n-p+1\) for the last position — giving an **arrangement** \(A_n^p=n(n-1)\cdots(n-p+1)\).
- The special case \(p=n\) (order **all** the elements, no repetition) is a **permutation**, counted by \(n!\).

**How does a student recognise this lesson?** The words "how many ways to *arrange/order/line up*", "how many \(p\)-digit numbers/codes/words", "how many *ordered* selections", or a physical process where **order is recorded** (draw balls *one after another*, seat people in a row). The confusing point is always the same: is repetition allowed (a code where digits may repeat: \(n^p\)) or not (distinct letters: \(A_n^p\))?

#### Prerequisite knowledge
- The factorial \(n!=n(n-1)\cdots2\cdot1\), and the convention \(0!=1\).
- The recursion \(n!=n\,(n-1)!\), used to simplify factorial quotients.
- Powers: \(n^p\) means \(n\) multiplied by itself \(p\) times.

#### Definitions

**Definition (list, ordered with repetition).** Let \(E\) have \(n\) elements. A **list of length \(p\)** from \(E\) is an **ordered** choice of \(p\) elements of \(E\) **in which repetition is allowed** (formally, an element of \(E^p\)). Two lists differing only in order are different lists.

**Definition (arrangement, ordered without repetition).** An **arrangement of \(p\) elements** of \(E\) (an "\(p\)-arrangement") is an **ordered** list of \(p\) **distinct** elements of \(E\), with \(1\le p\le n\). Order matters and no element repeats.

**Definition (permutation).** A **permutation** of \(E\) (with \(n\) elements) is an ordered list using **every** element **exactly once**; it is the special arrangement with \(p=n\).

**Definition (factorial).** For a natural number \(n\), \(\;n!=n(n-1)(n-2)\cdots2\cdot1\;\), with the convention \(0!=1\).

> Source: Mathematics Textbook 2, pages 132–133.

#### Formulas and properties

**Number of lists (ordered, with repetition):** each of the \(p\) positions is filled independently from all \(n\) elements, so by the fundamental principle
\[
\#\{\text{lists of length }p\}=\underbrace{n\times n\times\cdots\times n}_{p\text{ factors}}=n^{p}.
\]

**Number of arrangements (ordered, without repetition):**
\[
A_n^{p}=n\,(n-1)\,(n-2)\cdots(n-p+1)=\frac{n!}{(n-p)!},\qquad 1\le p\le n.
\]

> **Important condition:** the compact form \(\dfrac{n!}{(n-p)!}\) requires \(0\le p\le n\). The last factor is \(n-p+1\) (there are exactly \(p\) factors counting **down** from \(n\)) — a frequent off-by-one slip.

**Number of permutations:** taking \(p=n\) in the arrangement count,
\[
A_n^{n}=n(n-1)\cdots2\cdot1=n!,\qquad\text{since }\frac{n!}{(n-n)!}=\frac{n!}{0!}=n!.
\]

**Simplifying factorials:** use \(n!=n\,(n-1)!\) repeatedly, e.g.
\[
\frac{n!}{(n-p)!}=n(n-1)\cdots(n-p+1),\qquad \frac{12!}{9!}=12\times11\times10=1320.
\]

> **Warning:** the count of lists is \(n^{p}\), **not** \(p^{n}\). "\(n\) choices for each of \(p\) positions" gives \(n\) to the power \(p\).

#### Recognising the idea and the solution method
- **If order is recorded and repetition is allowed** (codes/PINs with repeatable symbols, successive draws with replacement) → **list**, \(n^p\).
- **If order is recorded and elements are distinct** (rankings, distinct-letter words, successive draws without replacement) → **arrangement**, \(A_n^p\).
- **If you order *all* the elements** (line up everyone, all letters of a word with distinct letters) → **permutation**, \(n!\).

**Standard algorithm:**
1. Identify \(n\) (size of the pool) and \(p\) (size of the selection).
2. Ask: **does order matter?** Here (Lesson 1) yes.
3. Ask: **is repetition allowed?** Yes → \(n^p\). No → \(A_n^p=\dfrac{n!}{(n-p)!}\). Using all → \(n!\).
4. If the process has independent stages with different pool sizes, multiply the stage counts directly.

#### Basic example

**B2-U6-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** From the digits \(\{1,2,3,4,5,6,7,8,9\}\) (nine digits), how many **three-digit** numbers can be formed **(a)** if a digit may repeat, and **(b)** if all three digits must be different?

**Why this method applies.** A three-digit number is an **ordered** selection (position = hundreds/tens/units matters), so this is Lesson 1. The two sub-questions are exactly the with/without-repetition cases.

**Step-by-step solution.**
- **(a) Repetition allowed** — a list of length \(3\) from \(9\) digits: each position has \(9\) choices,
\[
9\times9\times9=9^{3}=729.
\]
- **(b) All different** — an arrangement of \(3\) from \(9\): \(9\) choices, then \(8\), then \(7\),
\[
A_9^{3}=9\times8\times7=504.
\]

**Final answer.** (a) \(729\); (b) \(504\).

**Verification.** Case (b) must be **smaller** than (a) (distinctness removes options): \(504<729\). ✔ Also \(A_9^3=\dfrac{9!}{6!}=9\cdot8\cdot7=504\). ✔

**What the student should learn.** The **only** difference between the two answers is the repetition rule; recognising it is the whole task.

> Source: example built in the style of Mathematics Textbook 2, pages 134–135.

#### Textbook-level example

**B2-U6-L1-E02**

**Problem.** How many **three-letter** lists can be formed from the letters of the word **SYRIA**, **(a)** without repeating a letter, and **(b)** allowing repetition? How many ways are there to **arrange all five** letters?

**Problem analysis.** SYRIA has **5 distinct** letters, so \(n=5\). A "three-letter list" is ordered; parts (a) and (b) are arrangement vs list, and the last part is a permutation of all five.

**Step-by-step solution.**
- **(a) Without repetition** — arrangement of \(3\) from \(5\):
\[
A_5^{3}=5\times4\times3=60.
\]
- **(b) With repetition** — list of length \(3\) from \(5\):
\[
5^{3}=5\times5\times5=125.
\]
- **All five letters** — permutation:
\[
5!=5\times4\times3\times2\times1=120.
\]

**Final answer.** (a) \(60\); (b) \(125\); arranging all five: \(120\).

**Verification.** \(60=A_5^3=\dfrac{5!}{2!}=\dfrac{120}{2}\). ✔ And \(60<125\), as distinctness must reduce the count. ✔

**What the student should learn.** "Distinct letters" is the signal for an arrangement; "repetition allowed" switches you to \(n^p\); "use every letter" switches you to \(n!\).

> Source: Mathematics Textbook 2, page 135.

#### Harder / composite example

**B2-U6-L1-E03**

**Problem.** Simplify, for a natural number \(n\ge2\):
\[
\text{(a) } \frac{10!}{8!},\qquad \text{(b) } \frac{n!}{(n-2)!},\qquad \text{(c) } \frac{(n+1)!-n!}{n!}.
\]

**Problem analysis.** These are pure factorial manipulations: peel off factors using \(n!=n\,(n-1)!\) until the fractions collapse. Such simplifications are the bread and butter of the arrangement/combination formulas.

**Step-by-step solution.**
- **(a)** \(\dfrac{10!}{8!}=10\times9\times\dfrac{8!}{8!}=10\times9=90.\)
- **(b)** \(\dfrac{n!}{(n-2)!}=\dfrac{n(n-1)(n-2)!}{(n-2)!}=n(n-1)=n^2-n.\) (This is exactly \(A_n^2\).)
- **(c)** Factor \(n!\): since \((n+1)!=(n+1)\,n!\),
\[
\frac{(n+1)!-n!}{n!}=\frac{(n+1)\,n!-n!}{n!}=\frac{n!\,\big[(n+1)-1\big]}{n!}=n.
\]

**Final answer.** (a) \(90\); (b) \(n(n-1)\); (c) \(n\).

**Verification.** Test (c) at \(n=3\): \(\dfrac{4!-3!}{3!}=\dfrac{24-6}{6}=\dfrac{18}{6}=3=n\). ✔

**What the student should learn.** Never expand a factorial fully; **cancel** the common tail \((n-p)!\) or \(n!\) first — that is how every arrangement/combination identity is proved.

> Source: Mathematics Textbook 2, pages 134–135 (نتدرب factorial-simplification exercises).

#### Common mistake

> **Common mistake:** counting an **ordered** situation with a subset formula (or vice versa), and mixing up \(n^p\) with \(A_n^p\). If a code allows repeated symbols, it is \(n^p\); if the symbols must be distinct, it is \(A_n^p=n(n-1)\cdots(n-p+1)\). Writing \(9^3\) when the digits must differ (should be \(9\cdot8\cdot7\)), or \(9\cdot8\cdot7\) when they may repeat, is the single most common error. **Fix:** before computing, say out loud "order matters — repetition **yes/no**?"

#### Special cases
- **\(p=1\):** all counts agree — \(n^1=A_n^1=n\) (one position, \(n\) choices).
- **\(p=n\) without repetition:** the arrangement becomes a permutation, \(A_n^n=n!\).
- **\(p>n\) without repetition:** impossible — \(A_n^p=0\) (you cannot pick \(p\) distinct from fewer than \(p\)); but a list still has \(n^p\).
- **\(p=0\):** there is exactly one "empty selection", consistent with \(A_n^0=\dfrac{n!}{n!}=1\) and \(0!=1\).

#### Practice set
1. **(B2-U6-L1-P01)** Evaluate \(\dfrac{8!}{5!}\) and \(A_7^{2}\).
2. **(B2-U6-L1-P02)** How many **four-symbol** passwords can be formed from \(10\) digits if repetition is allowed?
3. **(B2-U6-L1-P03)** In how many ways can \(6\) different books be lined up on a shelf?
4. **(B2-U6-L1-P04)** From \(5\) candidates, in how many ways can a **president, a secretary and a treasurer** (three *distinct* roles) be chosen?
5. **(B2-U6-L1-P05)** *(near exam level)* Solve for the natural number \(n\): \(A_n^{2}=n(n-1)=30\).

#### Practice solutions
1. \(\dfrac{8!}{5!}=8\times7\times6=336\); \(\;A_7^{2}=7\times6=42\).
2. Ordered, repetition allowed → list of length \(4\) from \(10\): \(10^{4}=10000\).
3. Order all \(6\) distinct books → permutation: \(6!=720\).
4. Three **distinct ordered** roles from \(5\) people → arrangement: \(A_5^{3}=5\times4\times3=60\).
5. \(n(n-1)=30\Rightarrow n^2-n-30=0\Rightarrow(n-6)(n+5)=0\). Since \(n\in\mathbb{N}\) and \(n\ge2\), we take \(n=6\). Check: \(A_6^2=6\times5=30\). ✔

#### Lesson summary
- **Most important idea:** order matters here; the only remaining question is **repetition yes or no**.
- **Most important formulas:** lists \(n^{p}\); arrangements \(A_n^{p}=\dfrac{n!}{(n-p)!}=n(n-1)\cdots(n-p+1)\); permutations \(n!\).
- **Most important condition:** \(A_n^{p}\) needs \(0\le p\le n\); the last factor is \(n-p+1\).
- **Most important pattern:** independent stages multiply (fundamental principle).
- **Most common mistake:** confusing \(n^p\) with \(A_n^p\), or \(n^p\) with \(p^n\).
- **Quick self-check:** how many \(2\)-letter codes from \(\{A,B,C\}\) with repetition, and without? *(Answer: \(3^2=9\); \(A_3^2=3\cdot2=6\).)*

---

<a id="b2u6-l2"></a>
### Lesson 2: Combinations

#### Core idea

Sometimes a selection is a **set**, not a sequence: a committee of \(3\) people, a hand of \(5\) cards, a subset of \(2\) balls. Here **order does not matter** — \(\{A,B\}\) is the same committee as \(\{B,A\}\) — and repetition is impossible (you cannot pick the same person twice). Such an unordered, no-repetition selection of \(p\) elements from \(n\) is a **combination**, and their number is written \(\binom{n}{p}\), read "\(n\) choose \(p\)".

The key link to Lesson 1: **every subset of \(p\) elements can be ordered in \(p!\) ways**, and each ordering is a distinct arrangement. So the arrangements are produced by first choosing a subset (\(\binom{n}{p}\) ways) and then ordering it (\(p!\) ways):
\[
A_n^{p}=p!\,\binom{n}{p}\quad\Longrightarrow\quad \binom{n}{p}=\frac{A_n^{p}}{p!}=\frac{n!}{p!\,(n-p)!}.
\]
In words: a combination is an arrangement **with the order divided out**.

**How does a student recognise this lesson?** The words "how many *subsets/groups/committees/teams/hands/samples*", "choose \(p\) *from* \(n\)" with **no mention of order or ranking**, or a physical **simultaneous** draw (grab \(p\) balls at once). The confusion is always order: if the roles or positions are distinguishable, it is an arrangement (Lesson 1); if the members are interchangeable, it is a combination.

#### Prerequisite knowledge
- The arrangement count \(A_n^{p}=\dfrac{n!}{(n-p)!}\) from Lesson 1.
- The factorial and \(0!=1\).
- The idea of a **subset** (part) of a finite set.

#### Definitions

**Definition (combination).** Let \(E\) have \(n\) elements and let \(p\) be a natural number with \(0\le p\le n\). A **combination of \(p\) elements** of \(E\) is **any subset** of \(E\) having \(p\) elements. Order is irrelevant and there is no repetition.

**Definition (number of combinations).** The number of combinations of \(p\) elements chosen from \(n\) is denoted
\[
\binom{n}{p}\qquad(0\le p\le n),
\]
read "\(n\) choose \(p\)". (The textbook footnotes the older symbol \(C_n^{p}\) for this same number.)

> Source: Mathematics Textbook 2, pages 136–137.

For example, with \(E=\{a,b,c\}\) the \(2\)-element subsets are \(\{a,b\},\{a,c\},\{b,c\}\): three of them, so \(\binom{3}{2}=3\). Note \(\{a,b\}\) and \(\{b,a\}\) are counted **once**.

#### Formulas and properties

**Theorem (formula for \(\binom{n}{p}\)).** For \(0\le p\le n\),
\[
\boxed{\;\binom{n}{p}=\frac{A_n^{p}}{p!}=\frac{n(n-1)\cdots(n-p+1)}{p!}=\frac{n!}{p!\,(n-p)!}\;}
\]

*Proof.* Order the \(p\) chosen elements: each subset yields \(p!\) distinct arrangements, and every arrangement arises this way exactly once, so \(A_n^{p}=p!\binom{n}{p}\). Dividing by \(p!\) and using \(A_n^{p}=\dfrac{n!}{(n-p)!}\) gives the formula. (The book proves this; you may quote it.) ∎

> **Important condition:** \(\binom{n}{p}\) is defined only for \(0\le p\le n\). Outside that range there are no such subsets and the value is \(0\).

> **Exam-style insight:** to compute \(\binom{n}{p}\) by hand, use \(\binom{n}{p}=\dfrac{n(n-1)\cdots(n-p+1)}{p!}\) — exactly \(p\) descending factors on top, \(p!\) on the bottom. E.g. \(\binom{7}{2}=\dfrac{7\times6}{2\times1}=21\), no need to compute \(7!\).

#### Recognising the idea and the solution method
- **If order does not matter** and repetition is impossible → **combination**, \(\binom{n}{p}\).
- **"At least one …"** → total minus the **complement** (the case with **none**): the complement principle.
- **Compound choices** (choose \(p_1\) from one group **and** \(p_2\) from another) → **multiply** the combinations (fundamental principle).

**Standard algorithm:**
1. Confirm order is irrelevant (a set/group), so it is a combination.
2. Identify \(n\) (pool) and \(p\) (size chosen); compute \(\binom{n}{p}=\dfrac{n!}{p!(n-p)!}\).
3. For "and" across independent groups, **multiply** the separate combinations.
4. For "at least/at most", count the easy complementary event and **subtract** from the total.

#### Basic example

**B2-U6-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** A class has \(8\) students. In how many ways can a committee of \(3\) students be chosen (no roles — the members are interchangeable)?

**Why this method applies.** A committee is a **set** of members; swapping their order gives the same committee. Order does not matter → combination.

**Step-by-step solution.**
\[
\binom{8}{3}=\frac{8\times7\times6}{3\times2\times1}=\frac{336}{6}=56.
\]

**Final answer.** \(56\) committees.

**Verification.** Compare with the *ordered* count (president/secretary/treasurer): \(A_8^3=8\times7\times6=336\), and indeed \(336=3!\times56=6\times56\). ✔ The unordered count is exactly \(3!\) times smaller.

**What the student should learn.** A combination is an arrangement divided by \(p!\); the factor \(p!\) is precisely the number of orderings you are choosing to ignore.

> Source: example built in the style of Mathematics Textbook 2, pages 136–137.

#### Textbook-level example

**B2-U6-L2-E02**

**Problem.** A box contains \(6\) red balls and \(4\) black balls (\(10\) in all). Three balls are drawn **simultaneously** (order does not matter). How many draws
**(a)** are possible in total, **(b)** contain exactly \(2\) red and \(1\) black, **(c)** contain **at least one** black ball?

**Problem analysis.** A simultaneous draw is an unordered selection → combinations. Part (b) is an "and" (choose reds **and** choose blacks) → a **product**. Part (c) is "at least one" → **total minus the complement** (all red).

**Step-by-step solution.**
- **(a) Total** — choose \(3\) from \(10\):
\[
\binom{10}{3}=\frac{10\times9\times8}{3\times2\times1}=\frac{720}{6}=120.
\]
- **(b) Exactly \(2\) red and \(1\) black** — choose \(2\) of the \(6\) reds **and** \(1\) of the \(4\) blacks:
\[
\binom{6}{2}\times\binom{4}{1}=\frac{6\times5}{2}\times4=15\times4=60.
\]
- **(c) At least one black** = total \(-\) (no black, i.e. all \(3\) red):
\[
\binom{10}{3}-\binom{6}{3}=120-\frac{6\times5\times4}{6}=120-20=100.
\]

**Final answer.** (a) \(120\); (b) \(60\); (c) \(100\).

**Verification.** For (c), count the complement directly: all-red draws are \(\binom{6}{3}=20\), and \(120-20=100\). ✔ Also (b)'s \(60\) is one slice of the \(120\); it is comfortably below the total. ✔

**What the student should learn.** "And" across groups → **multiply**; "at least one" → **subtract the complement**. These two moves solve almost every drawing problem.

> Source: Mathematics Textbook 2, pages 137–138 (drawing / committee worked boxes).

#### Harder / composite example

**B2-U6-L2-E03**

**Problem.** Solve for the natural number \(n\): \(\;\binom{n}{2}=28\). Then, using the answer, compute \(\binom{n}{n-2}\) and \(\binom{n}{1}\).

**Problem analysis.** Turn the combination into a polynomial equation via the formula, solve for \(n\), keep the admissible (natural, \(\ge2\)) root, then read off the others.

**Step-by-step solution.**
\[
\binom{n}{2}=\frac{n(n-1)}{2}=28\;\Longrightarrow\;n(n-1)=56\;\Longrightarrow\;n^2-n-56=0.
\]
Factor: \((n-8)(n+7)=0\), so \(n=8\) or \(n=-7\). Since \(n\in\mathbb{N}\) and \(n\ge2\), we take \(\mathbf{n=8}\).
Then, by symmetry \(\binom{8}{n-2}=\binom{8}{6}=\binom{8}{2}=28\), and \(\binom{8}{1}=8\).

**Final answer.** \(n=8\); \(\binom{8}{6}=28\); \(\binom{8}{1}=8\).

**Verification.** \(\binom{8}{2}=\dfrac{8\times7}{2}=28\). ✔ Symmetry check: \(\binom{8}{6}=\binom{8}{8-6}=\binom{8}{2}=28\). ✔

**What the student should learn.** A combination equation becomes a quadratic (or higher) in \(n\); discard the non-natural roots. Symmetry \(\binom{n}{p}=\binom{n}{n-p}\) then hands you related values for free.

> Source: Mathematics Textbook 2, page 138 (نتدرب equations in \(n\)).

#### Common mistake

> **Common mistake:** using a combination when the roles are **distinguishable** (so order *does* matter). Choosing a president, secretary and treasurer from \(8\) people is **not** \(\binom{8}{3}=56\); it is the arrangement \(A_8^3=336\), because the three chosen people play *different* roles. **Rule of thumb:** interchangeable members → \(\binom{n}{p}\); named/ranked positions → \(A_n^p=p!\binom{n}{p}\).

#### Special cases
- **\(\binom{n}{0}=1\)** and **\(\binom{n}{n}=1\):** exactly one empty subset and one full subset (uses \(0!=1\)).
- **\(\binom{n}{1}=n\)** and **\(\binom{n}{n-1}=n\):** choosing one to keep, or one to drop.
- **\(p>n\):** \(\binom{n}{p}=0\) — no subset larger than the set.
- **Symmetry as a shortcut:** compute \(\binom{50}{48}=\binom{50}{2}=\dfrac{50\times49}{2}=1225\) instead of the huge direct form.

#### Practice set
1. **(B2-U6-L2-P01)** Evaluate \(\binom{9}{5}\) and \(\binom{11}{2}\).
2. **(B2-U6-L2-P02)** Simplify \(\binom{n}{n-2}\) in terms of \(n\).
3. **(B2-U6-L2-P03)** From \(6\) men and \(5\) women, how many committees of \(3\) men and \(2\) women can be formed?
4. **(B2-U6-L2-P04)** From \(10\) points on a circle (no three of the chords meeting incidentally), how many **chords** (segments joining two points) can be drawn?
5. **(B2-U6-L2-P05)** *(near exam level)* Solve for \(n\): \(\binom{n}{2}=15\); then compute \(\binom{n}{3}\).

#### Practice solutions
1. \(\binom{9}{5}=\binom{9}{4}=\dfrac{9\times8\times7\times6}{4\times3\times2\times1}=\dfrac{3024}{24}=126\); \(\;\binom{11}{2}=\dfrac{11\times10}{2}=55\).
2. \(\binom{n}{n-2}=\binom{n}{2}=\dfrac{n(n-1)}{2}\) (by symmetry).
3. Choose \(3\) of \(6\) men **and** \(2\) of \(5\) women: \(\binom{6}{3}\times\binom{5}{2}=20\times10=200\).
4. A chord is an unordered pair of points: \(\binom{10}{2}=\dfrac{10\times9}{2}=45\) chords.
5. \(\dfrac{n(n-1)}{2}=15\Rightarrow n(n-1)=30\Rightarrow(n-6)(n+5)=0\Rightarrow n=6\). Then \(\binom{6}{3}=\dfrac{6\times5\times4}{6}=20\).

#### Lesson summary
- **Most important definition:** a combination is a **subset** of size \(p\); order ignored, no repetition.
- **Most important formula:** \(\binom{n}{p}=\dfrac{n!}{p!(n-p)!}=\dfrac{A_n^{p}}{p!}\).
- **Most important condition:** defined only for \(0\le p\le n\); interchangeable members (else use \(A_n^p\)).
- **Most important patterns:** "and" → multiply; "at least one" → total minus complement.
- **Most common mistake:** using \(\binom{n}{p}\) when the positions are actually distinguishable.
- **Quick self-check:** how many \(2\)-person teams from \(5\) people? *(Answer: \(\binom{5}{2}=10\).)*

---

<a id="b2u6-l3"></a>
### Lesson 3: Properties of combinations and the binomial theorem

#### Core idea

The numbers \(\binom{n}{p}\) are not just isolated values — they obey two beautiful rules that organise them into **Pascal's triangle** and power the expansion of \((a+b)^n\).

- **Symmetry** \(\binom{n}{p}=\binom{n}{n-p}\): choosing which \(p\) elements to **keep** is the same as choosing which \(n-p\) to **leave out**.
- **Pascal's rule** \(\binom{n-1}{p-1}+\binom{n-1}{p}=\binom{n}{p}\): fix one element \(x\); a \(p\)-subset either **contains** \(x\) (then choose \(p-1\) more from the other \(n-1\)) or **omits** \(x\) (choose all \(p\) from the other \(n-1\)). These two disjoint cases sum to the whole.

Pascal's rule lets you build the triangle row by row (each interior entry is the sum of the two above it), and it is the engine of the **binomial theorem**:
\[
(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^{k},
\]
whose coefficients are exactly row \(n\) of Pascal's triangle. Setting \(a=b=1\) gives \(\sum_{k}\binom{n}{k}=2^n\) — the total number of subsets of an \(n\)-set.

**How does a student recognise this lesson?** Requests to "prove an identity in \(\binom{n}{p}\)", "expand \((a+b)^n\)", "find the coefficient of \(x^k\)" or "the term free of \(x\)", or "compute a sum of binomial coefficients". The confusion is usually the **general term**: index it by \(k\) and track the exponent of \(x\) carefully.

#### Prerequisite knowledge
- The formula \(\binom{n}{p}=\dfrac{n!}{p!(n-p)!}\) and \(\binom{n}{0}=\binom{n}{n}=1\).
- Putting fractions over a common denominator (to prove Pascal's rule).
- Powers and, for the complex example, \(i^2=-1\).

#### Definitions
This lesson introduces no new object; it develops **properties** of \(\binom{n}{p}\) and the **binomial expansion**. The central named results are stated below.

> Source: Mathematics Textbook 2, pages 139–140.

#### Formulas and properties

**Symmetry.** For \(0\le p\le n\):
\[
\binom{n}{p}=\binom{n}{\,n-p\,}.
\]

**Pascal's rule.** For \(1\le p<n\):
\[
\binom{n-1}{\,p-1\,}+\binom{n-1}{\,p\,}=\binom{n}{p}.
\]

**Pascal's triangle** (rows \(n=0\) to \(5\), entries \(\binom{n}{p}\)):

```text
n=0:            1
n=1:          1   1
n=2:        1   2   1
n=3:      1   3   3   1
n=4:    1   4   6   4   1
n=5:  1   5  10  10   5   1
```

Each border entry is \(1\) (from \(\binom{n}{0}=\binom{n}{n}=1\)); each interior entry is the **sum of the two entries diagonally above it** (Pascal's rule). Row \(n\) lists the coefficients of \((a+b)^n\).

> **Exam-style insight:** symmetry halves your work — \(\binom{20}{18}=\binom{20}{2}=190\). And Pascal's triangle gives small-\(n\) expansion coefficients instantly without any factorials.

**Corollary (sum of a row).** Setting \(a=b=1\) in the binomial theorem,
\[
\sum_{k=0}^{n}\binom{n}{k}=\binom{n}{0}+\binom{n}{1}+\cdots+\binom{n}{n}=2^{n},
\]
which equals the number of **all** subsets of an \(n\)-element set (each element is independently in or out: \(2\times2\times\cdots\times2=2^n\)).

#### Theorems and proofs

**Theorem (symmetry).** For \(0\le p\le n\), \(\ \binom{n}{p}=\binom{n}{n-p}\).

*Proof.* By the formula,
\[
\binom{n}{n-p}=\frac{n!}{(n-p)!\,\big(n-(n-p)\big)!}=\frac{n!}{(n-p)!\,p!}=\binom{n}{p}. \qquad\blacksquare
\]

**Theorem (Pascal's rule).** For \(1\le p<n\), \(\ \binom{n-1}{p-1}+\binom{n-1}{p}=\binom{n}{p}\).

*Proof.* Put both terms over the common denominator \(p!\,(n-p)!\):
\[
\binom{n-1}{p-1}+\binom{n-1}{p}
=\frac{(n-1)!}{(p-1)!\,(n-p)!}+\frac{(n-1)!}{p!\,(n-1-p)!}
=\frac{p\,(n-1)!+(n-p)\,(n-1)!}{p!\,(n-p)!}.
\]
The numerator is \(\big[p+(n-p)\big](n-1)!=n\,(n-1)!=n!\), hence the sum equals \(\dfrac{n!}{p!\,(n-p)!}=\binom{n}{p}\). \(\blacksquare\)

**Theorem (binomial theorem, Newton).** For any \(a,b\) and any natural number \(n\ge1\),
\[
(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{\,n-k}b^{\,k}
=\binom{n}{0}a^n+\binom{n}{1}a^{n-1}b+\cdots+\binom{n}{n}b^{n}.
\]

*Proof (by induction — the book gives it; you may apply the result).*
- **Base \(n=1\):** \((a+b)^1=\binom{1}{0}a+\binom{1}{1}b=a+b\). ✔
- **Step:** assume the formula for \(n\). Then
\[
(a+b)^{n+1}=(a+b)(a+b)^n=a\!\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^{k}+b\!\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^{k}.
\]
Collecting the coefficient of \(a^{\,n+1-k}b^{\,k}\) gives \(\binom{n}{k}+\binom{n}{k-1}\), which is \(\binom{n+1}{k}\) by Pascal's rule (with the ends \(\binom{n}{0}=\binom{n+1}{0}=1\), \(\binom{n}{n}=\binom{n+1}{n+1}=1\)). Hence \((a+b)^{n+1}=\sum_{k=0}^{n+1}\binom{n+1}{k}a^{\,n+1-k}b^{\,k}\), completing the induction. \(\blacksquare\)

> **Important condition:** the **general term** of \((a+b)^n\) is \(\binom{n}{k}a^{\,n-k}b^{\,k}\) for \(k=0,1,\dots,n\). The exponents of \(a\) and \(b\) always add to \(n\).

#### Recognising the idea and the solution method
- **To expand** \((a+b)^n\) for small \(n\): read the coefficients off Pascal's triangle, then attach the descending powers of \(a\) and ascending powers of \(b\). **Mind signs** when \(b<0\).
- **To find one term / coefficient:** write the general term \(\binom{n}{k}a^{n-k}b^{k}\), set the exponent of \(x\) equal to the target, solve for \(k\), and evaluate.
- **To sum a coefficient series** \(\sum \binom{n}{k}c^{k}\): recognise it as \((1+c)^n\) (or \((a+b)^n\) at chosen values).

**Standard algorithm (single term):**
1. Write the term \(T_k=\binom{n}{k}a^{n-k}b^{k}\).
2. Combine all powers of \(x\) into a single exponent \(E(k)\).
3. Solve \(E(k)=\text{target}\) for \(k\in\{0,\dots,n\}\).
4. Substitute that \(k\) to get the term (and its coefficient).

#### Basic example

**B2-U6-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Expand \((2x-1)^3\) and \((x+1)^4\) using Pascal's triangle.

**Why this method applies.** Small powers → read coefficients directly from Pascal's triangle; here \(a=2x,\ b=-1\) (row 3: \(1,3,3,1\)) and \(a=x,\ b=1\) (row 4: \(1,4,6,4,1\)).

**Step-by-step solution.**
- **Row \(3\):** \((a+b)^3=a^3+3a^2b+3ab^2+b^3\). With \(a=2x,\ b=-1\):
\[
(2x-1)^3=(2x)^3+3(2x)^2(-1)+3(2x)(-1)^2+(-1)^3=8x^3-12x^2+6x-1.
\]
- **Row \(4\):** with \(a=x,\ b=1\):
\[
(x+1)^4=x^4+4x^3+6x^2+4x+1.
\]

**Final answer.** \((2x-1)^3=8x^3-12x^2+6x-1\); \(\ (x+1)^4=x^4+4x^3+6x^2+4x+1\).

**Verification.** Check \((2x-1)^3\) at \(x=1\): left \(=(2-1)^3=1\); right \(=8-12+6-1=1\). ✔ Check \((x+1)^4\) at \(x=1\): left \(=2^4=16\); right \(=1+4+6+4+1=16\). ✔

**What the student should learn.** Substitute the whole expressions \(a=2x,\ b=-1\) into the row template; the sign of \(b\) makes the terms **alternate**, and every \((2x)\)-power must be raised fully (e.g. \((2x)^2=4x^2\)).

> Source: Mathematics Textbook 2, page 142 (expansion worked box).

#### Textbook-level example

**B2-U6-L3-E02**

**Problem.** **(a)** Find the coefficient of \(x^2\) in the expansion of \((2x-1)^5\). **(b)** Find the term **independent of \(x\)** (the constant term) in \(\left(x+\dfrac{1}{x}\right)^4\).

**Problem analysis.** Use the general term \(\binom{n}{k}a^{n-k}b^{k}\): in (a) match the power of \(x\); in (b) find \(k\) making the total exponent of \(x\) equal to \(0\).

**Step-by-step solution.**
- **(a)** General term of \((2x-1)^5\): \(T_k=\binom{5}{k}(2x)^{5-k}(-1)^{k}=\binom{5}{k}2^{5-k}(-1)^{k}\,x^{5-k}\). We need \(x^2\Rightarrow 5-k=2\Rightarrow k=3\):
\[
\binom{5}{3}\,2^{2}\,(-1)^{3}=10\times4\times(-1)=-40.
\]
So the coefficient of \(x^2\) is \(\boxed{-40}\).
- **(b)** General term of \(\left(x+\tfrac1x\right)^4\): \(T_k=\binom{4}{k}x^{4-k}\left(\tfrac1x\right)^{k}=\binom{4}{k}x^{\,4-2k}\). Independent of \(x\Rightarrow 4-2k=0\Rightarrow k=2\):
\[
\binom{4}{2}=\frac{4\times3}{2}=6.
\]
So the constant term is \(\boxed{6}\).

**Final answer.** (a) coefficient of \(x^2\) is \(-40\); (b) constant term is \(6\).

**Verification.** (a) The full expansion is \((2x-1)^5=32x^5-80x^4+80x^3-40x^2+10x-1\); the \(x^2\) coefficient is indeed \(-40\). ✔ (b) In \(\left(x+\tfrac1x\right)^4=x^4+4x^2+6+\tfrac{4}{x^2}+\tfrac{1}{x^4}\), the constant term is \(6\). ✔

**What the student should learn.** Do **not** expand everything — isolate the general term, match the exponent, solve for the single \(k\) you need, then evaluate.

> Source: Mathematics Textbook 2, page 142 (general-term / constant-term exercises).

#### Harder / composite example

**B2-U6-L3-E03**

**Problem.** **(a)** Expand \((1+2x)^n\), then deduce the value of \(S_n=\displaystyle\sum_{k=0}^{n}2^{k}\binom{n}{k}=\binom{n}{0}+2\binom{n}{1}+2^2\binom{n}{2}+\cdots+2^{n}\binom{n}{n}\).
**(b)** Using the binomial theorem with complex numbers, compute \((1+i)^4\).

**Problem analysis.** (a) is the classic "sum a coefficient series by substituting a value": recognise \(S_n\) as \((1+2x)^n\) at a special \(x\). (b) applies the theorem with \(a=1,\ b=i\) and \(i^2=-1\).

**Step-by-step solution.**
- **(a)** By the binomial theorem, \((1+2x)^n=\sum_{k=0}^{n}\binom{n}{k}(2x)^{k}=\sum_{k=0}^{n}\binom{n}{k}2^{k}x^{k}\). Put \(x=1\):
\[
(1+2)^n=\sum_{k=0}^{n}\binom{n}{k}2^{k}=S_n\;\Longrightarrow\;S_n=3^{n}.
\]
- **(b)** With \(a=1,\ b=i\) and row \(4\) coefficients \(1,4,6,4,1\):
\[
(1+i)^4=1+4i+6i^2+4i^3+i^4=1+4i-6-4i+1=-4,
\]
using \(i^2=-1,\ i^3=-i,\ i^4=1\).

**Final answer.** (a) \(S_n=3^{n}\); (b) \((1+i)^4=-4\).

**Verification.** (a) At \(n=2\): \(S_2=\binom{2}{0}+2\binom{2}{1}+4\binom{2}{2}=1+4+4=9=3^2\). ✔ (b) \((1+i)^2=1+2i+i^2=2i\), so \((1+i)^4=(2i)^2=4i^2=-4\). ✔

**What the student should learn.** A sum \(\sum\binom{n}{k}c^{k}\) is \((1+c)^n\); choosing the substitution is the whole trick. The theorem holds over the complex numbers, so \(b=i\) is allowed.

> Source: Mathematics Textbook 2, page 142 (coefficient-sum and complex-expansion boxes).

#### Common mistake

> **Common mistake:** in \((a+b)^n\), forgetting to raise the **whole** term to its power or dropping the sign of \(b\). In \((2x-1)^3\), the \(x^2\)-term is \(3(2x)^2(-1)=3\cdot4x^2\cdot(-1)=-12x^2\), **not** \(3\cdot2x^2=6x^2\): you must square the \(2\) *and* carry the minus sign. Likewise the general term is \(\binom{n}{k}a^{n-k}b^{k}\) with the exponents adding to \(n\) — writing \(a^{k}b^{n-k}\) by mistake ruins every coefficient.

#### Special cases
- **\(\binom{n}{0}=\binom{n}{n}=1\):** the first and last coefficients of every expansion are \(1\).
- **\(a=b=1\):** \(\sum_k\binom{n}{k}=2^{n}\) (number of subsets).
- **\(a=1,\ b=-1\):** \(\sum_k(-1)^k\binom{n}{k}=(1-1)^n=0\) for \(n\ge1\) (equal numbers of even- and odd-sized subsets).
- **Middle of the triangle:** by symmetry each row reads the same forwards and backwards.

#### Practice set
1. **(B2-U6-L3-P01)** Write row \(6\) of Pascal's triangle and hence expand \((x+1)^6\).
2. **(B2-U6-L3-P02)** Expand \((3+x)^4\).
3. **(B2-U6-L3-P03)** Find the coefficient of \(x^3\) in \((1+x)^{6}\).
4. **(B2-U6-L3-P04)** Find the term independent of \(x\) in \(\left(x^{2}+\dfrac{1}{x}\right)^{6}\).
5. **(B2-U6-L3-P05)** *(near exam level)* Expand \((1+x)^n\) and deduce \(\displaystyle\sum_{k=0}^{n}\binom{n}{k}=2^{n}\) and \(\displaystyle\sum_{k=0}^{n}(-1)^{k}\binom{n}{k}=0\) (for \(n\ge1\)).

#### Practice solutions
1. Row \(6\): \(1,6,15,20,15,6,1\) (each entry = sum of the two above in row \(5\): \(1,5,10,10,5,1\)). Hence
\[
(x+1)^6=x^6+6x^5+15x^4+20x^3+15x^2+6x+1.
\]
2. Coefficients \(1,4,6,4,1\) with \(a=3,\ b=x\):
\[
(3+x)^4=81+4\cdot27\,x+6\cdot9\,x^2+4\cdot3\,x^3+x^4=81+108x+54x^2+12x^3+x^4.
\]
3. General term \(\binom{6}{k}x^{k}\); the coefficient of \(x^3\) is \(\binom{6}{3}=\dfrac{6\times5\times4}{6}=20\).
4. General term \(\binom{6}{k}(x^2)^{6-k}\left(\tfrac1x\right)^{k}=\binom{6}{k}x^{\,12-2k-k}=\binom{6}{k}x^{\,12-3k}\). Independent of \(x\Rightarrow 12-3k=0\Rightarrow k=4\): term \(=\binom{6}{4}=\binom{6}{2}=15\).
5. By the theorem \((1+x)^n=\sum_{k=0}^{n}\binom{n}{k}x^{k}\). Put \(x=1\): \(2^{n}=\sum_{k}\binom{n}{k}\). Put \(x=-1\): \((1-1)^n=0=\sum_{k}(-1)^{k}\binom{n}{k}\) for \(n\ge1\).

#### Lesson summary
- **Most important properties:** symmetry \(\binom{n}{p}=\binom{n}{n-p}\); Pascal \(\binom{n-1}{p-1}+\binom{n-1}{p}=\binom{n}{p}\).
- **Most important theorem:** \((a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^{k}\); general term \(\binom{n}{k}a^{n-k}b^{k}\).
- **Most important corollary:** \(\sum_{k=0}^{n}\binom{n}{k}=2^{n}\) (all subsets of an \(n\)-set).
- **Most important pattern:** to isolate a term, solve the exponent equation for \(k\); to sum a series, substitute a value into \((1+c)^n\).
- **Most common mistake:** mishandling the sign/power of \(b\), or swapping the exponents of \(a\) and \(b\).
- **Quick self-check:** what is the coefficient of \(x^2\) in \((1+x)^5\)? *(Answer: \(\binom{5}{2}=10\).)*

---

<a id="b2-u6-test"></a>
### Chapter summary & review test — Unit 6

#### Chapter summary
Combinatorics counts outcomes without listing them. Everything flows from the **fundamental counting principle** (independent choices multiply) and one decision: **does order matter, and is repetition allowed?** Ordered selections are lists \(n^p\) (with repetition), arrangements \(A_n^p=\dfrac{n!}{(n-p)!}\) (without repetition) or permutations \(n!\) (all elements). Unordered selections are combinations \(\binom{n}{p}=\dfrac{n!}{p!(n-p)!}\), with symmetry, Pascal's rule and Pascal's triangle. The combinations are exactly the coefficients in the **binomial theorem** \((a+b)^n=\sum_k\binom{n}{k}a^{n-k}b^{k}\), and their row sum is \(2^n\).

#### Essential formulas
\[
n^{p},\qquad A_n^{p}=\frac{n!}{(n-p)!},\qquad n!\ (0!=1),\qquad \binom{n}{p}=\frac{n!}{p!\,(n-p)!}=\frac{A_n^{p}}{p!},
\]
\[
\binom{n}{p}=\binom{n}{n-p},\quad \binom{n-1}{p-1}+\binom{n-1}{p}=\binom{n}{p},\quad (a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^{k},\quad \sum_{k=0}^{n}\binom{n}{k}=2^{n}.
\]

#### Essential theorems/results
- \(\binom{n}{p}=\dfrac{A_n^{p}}{p!}\) (arrangements ↔ combinations), and its consequence \(\binom{n}{p}=\dfrac{n!}{p!(n-p)!}\).
- Symmetry and Pascal's rule (both proved by the factorial formula).
- The binomial theorem (proved by induction using Pascal's rule) and its corollary \(\sum_k\binom{n}{k}=2^n\).

#### Main problem patterns
Ordered count with/without repetition; permutation; committee/subset count; "and" → product of combinations; "at least/at most" → total minus complement; solve \(A_n^p=\)number or \(\binom{n}{p}=\)number for \(n\); binomial expansion; single term / constant term; sum a coefficient series by substitution; geometry counts (chords, diagonals, triangles).

#### Connections between the chapter's ideas
Arrangements are combinations times \(p!\); the binomial coefficients *are* the combinations; Pascal's rule both builds the triangle and drives the binomial induction; substituting values into \((a+b)^n\) evaluates coefficient sums. Combinatorics is the counting backbone of **probability** (equally-likely outcomes) and reappears with **complex numbers** (expanding \((1+i)^n\)) and **trigonometric linearisation**.

#### Recommended study order
Fundamental principle → lists \(n^p\) → arrangements \(A_n^p\) → permutations \(n!\) → combinations \(\binom{n}{p}\) → symmetry & Pascal → Pascal's triangle → binomial theorem → single terms and coefficient sums.

#### Chapter checklist
- [ ] I decide **order? repetition?** before choosing a formula.
- [ ] I compute \(A_n^p\), \(n!\) and \(\binom{n}{p}\) accurately, and simplify factorials by cancelling.
- [ ] I use symmetry, Pascal's rule, and the binomial general term to expand and to isolate a term.
- [ ] I handle "at least one" via the complement, and coefficient sums via substitution.

#### Chapter review test
1. From \(7\) different books, how many ways are there to **(a)** line all \(7\) on a shelf, **(b)** choose \(3\) to take home (order irrelevant)?
2. How many **4-digit** codes can be formed from \(\{0,1,\dots,9\}\) **(a)** with repetition allowed, **(b)** with all digits distinct?
3. Solve for the natural number \(n\): \(\binom{n}{2}=21\), and then compute \(\binom{n}{5}\).
4. A box has \(5\) white and \(3\) red balls; \(3\) are drawn **simultaneously**. How many draws contain **at least one red** ball?
5. Expand \((2x-1)^4\) using Pascal's triangle.
6. Find the term independent of \(x\) in \(\left(2x-\dfrac{1}{x^{2}}\right)^{6}\).
7. Expand \((1+3x)^n\) and deduce \(\displaystyle\sum_{k=0}^{n}3^{k}\binom{n}{k}\).
8. In a convex polygon with \(8\) vertices, how many **diagonals** are there?

#### Model solutions for the chapter review test
1. **(a)** Permutation of \(7\): \(7!=5040\). **(b)** Combination (order irrelevant): \(\binom{7}{3}=\dfrac{7\times6\times5}{6}=35\).
2. **(a)** List of length \(4\) from \(10\): \(10^{4}=10000\). **(b)** Arrangement of \(4\) from \(10\): \(A_{10}^{4}=10\times9\times8\times7=5040\).
3. \(\dfrac{n(n-1)}{2}=21\Rightarrow n(n-1)=42\Rightarrow(n-7)(n+6)=0\Rightarrow n=7\). Then \(\binom{7}{5}=\binom{7}{2}=\dfrac{7\times6}{2}=21\).
4. Total \(\binom{8}{3}=56\); complement (no red = all \(3\) white) \(\binom{5}{3}=10\); at least one red \(=56-10=46\).
5. Row \(4\): \(1,4,6,4,1\), with \(a=2x,\ b=-1\):
\[
(2x-1)^4=16x^4-32x^3+24x^2-8x+1.
\]
*(Check at \(x=1\): \((2-1)^4=1=16-32+24-8+1\). ✔)*
6. General term \(\binom{6}{k}(2x)^{6-k}\left(-\tfrac{1}{x^2}\right)^{k}=\binom{6}{k}2^{6-k}(-1)^{k}x^{\,6-k-2k}=\binom{6}{k}2^{6-k}(-1)^{k}x^{\,6-3k}\). Independent of \(x\Rightarrow 6-3k=0\Rightarrow k=2\): term \(=\binom{6}{2}2^{4}(-1)^{2}=15\times16=240\).
7. \((1+3x)^n=\sum_{k=0}^{n}\binom{n}{k}3^{k}x^{k}\); put \(x=1\): \(\sum_{k=0}^{n}3^{k}\binom{n}{k}=(1+3)^n=4^{n}\).
8. Segments joining vertices \(\binom{8}{2}=28\), minus the \(8\) sides: \(28-8=20\) diagonals.

---

<a id="b2-u7"></a>
## Unit 7: Probability

> Source: Mathematics Textbook 2, pages 152–185.

### Unit overview

This unit builds the machinery of **probability** on top of the equiprobability ideas you already met in Book 1, and pushes them toward the tools every scientific baccalaureate exam expects:

- **Conditional probability:** how the probability of an event *changes* once we learn that another event has occurred. This single idea unlocks **tree diagrams**, the **multiplication rule**, the **total-probability formula**, and **Bayes-style inversion** (going backward along a tree).
- **Random variables:** instead of studying events one by one, we attach a **number** \(X(\omega)\) to each outcome, tabulate its **probability distribution**, and summarise it by two numbers — the **expectation** \(E(X)\) (its "centre") and the **variance** \(V(X)\) / standard deviation \(\sigma(X)\) (its "spread").
- **Independence:** a precise test for when two events, or two random variables, carry no information about each other.
- **The binomial law \(\mathcal B(n,p)\):** the distribution of the number of successes in \(n\) independent identical trials — the most important named distribution of the year, with ready-made formulas \(E(X)=np\) and \(V(X)=np(1-p)\).

**Why it matters:** every model exam in Book 2 contains at least one probability problem — a conditional-probability tree, a full distribution table with \(E,V\), or a binomial model. These are also among the most *reliably scorable* questions: the methods are algorithmic once recognised.

**Prerequisites:** equiprobability \(P(A)=\dfrac{n(A)}{n(\Omega)}\); operations on events (\(\cap,\cup,\bar A\)); the fact that a probability distribution has \(0\le p_i\le1\) and \(\sum p_i=1\); binomial coefficients \(\binom{n}{k}\) and the Binomial Theorem.

**Main question types:** compute a conditional probability from a tree; find a total probability; invert a tree (Bayes); build a distribution table and compute \(E(X),V(X),\sigma(X)\); test independence of events or of two random variables; model a repeated-trials situation by \(\mathcal B(n,p)\) and compute \(P(X=k)\), \(P(X\ge k)\), \(E(X)\).

### Unit concept map

```text
Probability
├── Conditional probability  P_B(A) = P(A∩B)/P(B)   (P(B) ≠ 0)
│   ├── Multiplication rule:  P(A∩B) = P(B)·P_B(A) = P(A)·P_A(B)
│   ├── Tree diagram:  branches from a node sum to 1;  path = product of branches
│   ├── Total probability:  P(B) = Σ P(A_i)·P_{A_i}(B)   over a partition (A_i)
│   └── Bayes-style inversion:  P_B(A_i) = P(A_i)P_{A_i}(B) / P(B)
├── Random variable X : Ω → ℝ
│   ├── Distribution (law):  p_i = P(X = x_i),  0 ≤ p_i ≤ 1,  Σ p_i = 1
│   ├── Expectation:  E(X) = Σ x_i p_i        (linearity: E(aX+b)=aE(X)+b)
│   └── Variance:  V(X) = Σ p_i x_i² − (E(X))² ,  σ(X)=√V(X)   (V(aX+b)=a²V(X))
├── Independence
│   ├── of events:  P(A∩B) = P(A)·P(B)   ⇔  P_B(A)=P(A)
│   └── of RVs:  P((X=x_i)∩(Y=y_j)) = P(X=x_i)·P(Y=y_j)  for ALL i,j
└── Binomial law  B(n,p),  q = 1−p
    ├── P(X=k) = C(n,k) p^k q^(n−k),  k = 0,…,n
    └── E(X) = np ,  V(X) = np(1−p) ,  σ(X) = √(np(1−p))
```

### Unit formula table

| Formula or result | Meaning of symbols | Conditions | When it cannot be used | Notes |
|---|---|---|---|---|
| \(P_B(A)=\dfrac{P(A\cap B)}{P(B)}\) | \(P_B(A)=P(A\mid B)\): probability of \(A\) knowing \(B\) | \(P(B)\ne0\) | if \(P(B)=0\) (undefined) | \(P_B(A)\) generally \(\ne P_A(B)\) |
| \(P(A\cap B)=P(B)P_B(A)=P(A)P_A(B)\) | multiplication rule | any events of nonzero probability | — | product of a branch on a tree |
| \(P(B)=\sum_i P(A_i)P_{A_i}(B)\) | total probability | \((A_i)\) a partition of \(\Omega\) | if the \(A_i\) overlap or miss part of \(\Omega\) | \(A_i\) pairwise disjoint, union \(=\Omega\) |
| \(P_B(A_i)=\dfrac{P(A_i)P_{A_i}(B)}{P(B)}\) | Bayes inversion | partition \((A_i)\), \(P(B)\ne0\) | if \(P(B)=0\) | "go backward" along the tree |
| \(A,B\) independent \(\iff P(A\cap B)=P(A)P(B)\) | independence of events | — | do **not** confuse with disjoint | equivalently \(P_B(A)=P(A)\) |
| \(E(X)=\sum_i x_i p_i\) | expectation (mean) | \(p_i=P(X=x_i)\), \(\sum p_i=1\) | — | \(E(aX+b)=aE(X)+b\) |
| \(V(X)=\sum_i p_i x_i^2-\big(E(X)\big)^2\) | variance (short-cut form) | as above | — | \(=\sum p_i\big(x_i-E(X)\big)^2\); \(V(aX+b)=a^2V(X)\) |
| \(\sigma(X)=\sqrt{V(X)}\) | standard deviation | \(V(X)\ge0\) | — | same units as \(X\) |
| \(X,Y\) independent \(\iff p_{ij}=p_ip_j\;\forall i,j\) | independence of RVs | for **every** cell of the joint table | one failing cell ⇒ dependent | \(p_i,p_j\) are the marginals |
| \(P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}\) | binomial law \(\mathcal B(n,p)\) | \(n\) independent identical trials, constant \(p\) | if trials are dependent or \(p\) varies | \(\sum_k P(X=k)=(p+q)^n=1\) |
| \(E(X)=np,\ V(X)=np(1-p)\) | mean/variance of \(\mathcal B(n,p)\) | \(X\sim\mathcal B(n,p)\) | not for non-binomial \(X\) | \(\sigma(X)=\sqrt{np(1-p)}\) |

### Unit learning checklist

- [ ] I compute a conditional probability \(P_B(A)=\dfrac{P(A\cap B)}{P(B)}\) and read it off a tree.
- [ ] I use the multiplication rule to get a joint probability (product along a branch).
- [ ] I apply the total-probability formula over a partition, and invert it (Bayes).
- [ ] I distinguish **independent** events from **mutually exclusive** events.
- [ ] I build a distribution table, verify \(\sum p_i=1\), and compute \(E(X),V(X),\sigma(X)\).
- [ ] I use linearity \(E(aX+b)=aE(X)+b\) and \(V(aX+b)=a^2V(X)\).
- [ ] I test independence of two random variables from a joint table.
- [ ] I recognise a binomial situation, write \(X\sim\mathcal B(n,p)\), and compute \(P(X=k)\), \(E(X)=np\), \(V(X)=np(1-p)\).

---

<a id="b2u7-l1"></a>
### Lesson 1: Conditional probability

#### Core idea

Sometimes we gain **partial information** before an experiment is fully resolved, and that information changes the odds. If a card is drawn and someone tells you "it is a face card", the probability that it is a king is no longer \(\tfrac{4}{52}\) — it becomes \(\tfrac{4}{12}\), because the universe has shrunk to the 12 face cards. **Conditional probability** \(P_B(A)\) (read "probability of \(A\) given \(B\)") captures exactly this: we *restrict the sample space to \(B\)* and ask what fraction of that restricted world also lies in \(A\).

The definition \(P_B(A)=\dfrac{P(A\cap B)}{P(B)}\) says: among the possibilities compatible with \(B\) (weight \(P(B)\)), keep those also compatible with \(A\) (weight \(P(A\cap B)\)). Rearranged, it becomes the **multiplication rule** \(P(A\cap B)=P(B)\,P_B(A)\), which is what we *multiply* along a branch of a **tree diagram**. Summing over a complete set of first-stage possibilities gives the **total-probability formula**, and dividing a single branch by that total lets us run the tree **backward** (Bayes).

**How does a student recognise this lesson?** Signals include the words "given that", "knowing that", "if we know", a **two-stage experiment** (choose a box, *then* draw a ball; pick a machine, *then* inspect the item), percentages split by category, or an explicit request for a tree. The classic confusions are (1) mixing up \(P_B(A)\) with \(P_A(B)\), and (2) confusing **independent** with **mutually exclusive**.

#### Prerequisite knowledge
- Equiprobability: \(P(A)=\dfrac{n(A)}{n(\Omega)}\).
- Set operations on events: \(A\cap B\), \(A\cup B\), complement \(\bar A\), with \(P(\bar A)=1-P(A)\).
- A **partition** of \(\Omega\): events \(A_1,\dots,A_n\) that are pairwise disjoint and whose union is \(\Omega\).

#### Definitions

**Definition (conditional probability).** Let \(B\) be an event with \(P(B)\ne0\). The **conditional probability of \(A\) given \(B\)** is
\[
P_B(A)=P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
\]
It is itself a probability: \(0\le P_B(A)\le1\), \(P_B(B)=1\), and \(P_B(\bar A)=1-P_B(A)\).

**Definition (independent events).** Two events \(A\) and \(B\) are **independent** when
\[
P(A\cap B)=P(A)\,P(B),
\]
equivalently (if \(P(B)\ne0\)) when \(P_B(A)=P(A)\): knowing \(B\) does not change the probability of \(A\).

> Source: Mathematics Textbook 2, page 155.

#### Formulas and properties

**Multiplication rule.** From the definition, for events of nonzero probability,
\[
P(A\cap B)=P(B)\,P_B(A)=P(A)\,P_A(B).
\]
This is the product you compute **along a path** of a tree diagram.

**Tree diagrams.** On a probability tree:
- the branches leaving a single node carry conditional probabilities that **sum to 1**;
- the probability of a **complete path** is the **product** of the branch probabilities along it;
- the probability of an event is the **sum** of the probabilities of all paths that realise it.

**Total-probability formula.** If \(A_1,\dots,A_n\) form a **partition** of \(\Omega\) (pairwise disjoint, union \(\Omega\)), then for any event \(B\),
\[
P(B)=\sum_{i=1}^{n}P(A_i\cap B)=\sum_{i=1}^{n}P(A_i)\,P_{A_i}(B).
\]

**Bayes-style inversion.** Under the same partition, with \(P(B)\ne0\),
\[
P_B(A_i)=\frac{P(A_i\cap B)}{P(B)}=\frac{P(A_i)\,P_{A_i}(B)}{\sum_{j}P(A_j)\,P_{A_j}(B)}.
\]

> **Important condition:** the total-probability formula requires a genuine **partition**. If the \(A_i\) overlap, or fail to cover \(\Omega\), the sum \(\sum P(A_i)P_{A_i}(B)\) is not \(P(B)\).

> **Warning:** \(P_B(A)\) and \(P_A(B)\) are usually **different** numbers; only the *joint* probability \(P(A\cap B)\) is shared between them. Always divide by the probability of the **conditioning** event (the one after the bar).

#### Theorems and proofs

**Theorem (total probability).** Let \((A_i)_{1\le i\le n}\) be a partition of \(\Omega\). For every event \(B\),
\[
P(B)=\sum_{i=1}^{n}P(A_i)\,P_{A_i}(B).
\]
**Proof.** Because the \(A_i\) are pairwise disjoint and cover \(\Omega\), the events \(A_i\cap B\) are pairwise disjoint and their union is \(B\) (indeed \(B=B\cap\Omega=B\cap\bigcup_iA_i=\bigcup_i(A_i\cap B)\)). By additivity, \(P(B)=\sum_iP(A_i\cap B)\). Replacing each \(P(A_i\cap B)\) by \(P(A_i)P_{A_i}(B)\) (multiplication rule) gives the result. The textbook justifies this by the tree/partition picture; the student is expected to **apply** it, not reprove it each time.

#### Recognising the idea and the solution method
- **Two-stage wording** ("choose … then …", percentages split by group) → draw a **tree**; first level = the partition \(A_i\), second level = the conditional branches \(P_{A_i}(B)\).
- **"Find \(P(B)\)" where \(B\) can happen through several groups** → **total probability** (sum the relevant paths).
- **"Given that \(B\) happened, find the probability it came from \(A_i\)"** → **Bayes inversion** (one path ÷ total).
- **"Are \(A\) and \(B\) independent?"** → compute \(P(A\cap B)\) and \(P(A)P(B)\) and compare.

**Standard algorithm (tree problems):**
1. Identify the partition \(A_1,\dots,A_n\) (first-stage cases) and write \(P(A_i)\) on the first branches (they must sum to 1).
2. Write the conditional probabilities \(P_{A_i}(B)\) on the second branches.
3. Multiply along each path for joint probabilities \(P(A_i\cap B)=P(A_i)P_{A_i}(B)\).
4. For a total probability, **add** the matching path probabilities.
5. For an inversion, divide the single relevant path by that total.

#### Basic example

**B2-U7-L1-E01** — *Original explanatory example created for this guide.*

**Problem.** Urn \(U_1\) contains 3 red and 2 white balls; urn \(U_2\) contains 1 red and 4 white balls. We pick an urn at random (each with probability \(\tfrac12\)), then draw one ball. Let \(R\) = "the ball is red". Find \(P(R)\), and then \(P_R(U_1)\) (the probability the urn was \(U_1\), given a red ball).

**Why this method applies.** A two-stage experiment (urn, then ball). The two urns form a partition, so this is a textbook total-probability + inversion problem.

**Step-by-step solution.**
First-stage: \(P(U_1)=P(U_2)=\tfrac12\). Second-stage: \(P_{U_1}(R)=\tfrac35\), \(P_{U_2}(R)=\tfrac15\).
Multiply along the branches:
\[
P(U_1\cap R)=\tfrac12\cdot\tfrac35=\tfrac{3}{10},\qquad
P(U_2\cap R)=\tfrac12\cdot\tfrac15=\tfrac{1}{10}.
\]
Total probability:
\[
P(R)=\tfrac{3}{10}+\tfrac{1}{10}=\tfrac{4}{10}=\frac{2}{5}.
\]
Inversion (Bayes):
\[
P_R(U_1)=\frac{P(U_1\cap R)}{P(R)}=\frac{3/10}{2/5}=\frac{3}{10}\cdot\frac{5}{2}=\frac{3}{4}.
\]

**Final answer.** \(P(R)=\dfrac{2}{5}\) and \(P_R(U_1)=\dfrac{3}{4}\).

**Verification.** \(P(U_1\cap R)+P(U_2\cap R)=\tfrac{3}{10}+\tfrac{1}{10}=\tfrac{2}{5}=P(R)\ \checkmark\); and \(P_R(U_1)+P_R(U_2)=\tfrac34+\tfrac{1/10}{2/5}=\tfrac34+\tfrac14=1\ \checkmark\). All values lie in \([0,1]\).

**What the student should learn.** Going *forward* along a tree is multiplication; combining forward paths is total probability; going *backward* is a single path divided by the total.

> Source: example created in the style of pages 156–158.

#### Textbook-level example

**B2-U7-L1-E02**

**Problem.** A factory has two production lines. Line \(B_1\) makes \(60\%\) of the items with a defect rate of \(2\%\); line \(B_2\) makes \(40\%\) with a defect rate of \(5\%\). An item is chosen at random. (a) Find the probability \(P(D)\) that it is defective. (b) Given that it is defective, find the probability it came from line \(B_1\).

**Problem analysis.** The two lines partition the output: \(P(B_1)=0.6\), \(P(B_2)=0.4\). The defect rates are the *conditional* probabilities \(P_{B_1}(D)=0.02\), \(P_{B_2}(D)=0.05\). Part (a) is total probability; part (b) is Bayes.

**Step-by-step solution.**
\[
P(B_1\cap D)=P(B_1)P_{B_1}(D)=0.6\times0.02=0.012,
\]
\[
P(B_2\cap D)=P(B_2)P_{B_2}(D)=0.4\times0.05=0.020.
\]
(a) Total probability:
\[
P(D)=0.012+0.020=0.032=\frac{4}{125}.
\]
(b) Inversion:
\[
P_D(B_1)=\frac{P(B_1\cap D)}{P(D)}=\frac{0.012}{0.032}=\frac{12}{32}=\frac{3}{8}=0.375.
\]

**Final answer.** \(P(D)=0.032\); a defective item came from \(B_1\) with probability \(\dfrac{3}{8}=0.375\).

**Verification.** \(P_D(B_1)+P_D(B_2)=\dfrac{0.012}{0.032}+\dfrac{0.020}{0.032}=\dfrac{3}{8}+\dfrac{5}{8}=1\ \checkmark\). Note the "reversal": \(B_1\) makes most items, yet contributes a **minority** of the defects, because its defect rate is lower.

**What the student should learn.** "Defect rate of a line" is a **conditional** probability \(P_{B_i}(D)\), never \(P(D)\). The unconditional \(P(D)\) is the weighted average of the rates, weighted by the line shares.

> Source: Mathematics Textbook 2, page 161 (two-production-lines exercise).

#### Common mistake

> **Common mistake:** treating **independent** events as if they were **mutually exclusive** (disjoint). These are opposite ideas. Disjoint events satisfy \(P(A\cap B)=0\); independent events satisfy \(P(A\cap B)=P(A)P(B)\). If \(A,B\) are disjoint with \(P(A),P(B)>0\), then \(P(A\cap B)=0\ne P(A)P(B)\), so they are actually **dependent**. Never write "independent, therefore \(P(A\cap B)=0\)".

#### Special cases
- **Independence via the definition:** for a fair die, \(A=\{2,4,6\}\) ("even") and \(B=\{3,6\}\) ("multiple of 3") give \(P(A)P(B)=\tfrac12\cdot\tfrac13=\tfrac16=P(\{6\})=P(A\cap B)\), so \(A\) and \(B\) are independent even though they overlap.
- **Conditioning on the certain event:** \(P_\Omega(A)=P(A)\).
- **If \(A\subseteq B\):** then \(A\cap B=A\), so \(P_B(A)=\dfrac{P(A)}{P(B)}\ge P(A)\).
- **Extreme conditionals:** \(P_B(B)=1\) and \(P_B(\bar B)=0\).

#### Practice set
1. **(B2-U7-L1-P01)** A card is drawn from 52. \(A=\)"king", \(B=\)"face card (J, Q, K)". Compute \(P_B(A)\).
2. **(B2-U7-L1-P02)** For events with \(P(A)=0.5\), \(P(B)=0.4\), \(P(A\cap B)=0.2\), decide whether \(A\) and \(B\) are independent.
3. **(B2-U7-L1-P03)** Box \(C_1\): 2 red, 3 white. Box \(C_2\): 4 red, 1 white. A box is chosen with \(P(C_1)=\tfrac13,\ P(C_2)=\tfrac23\), then a ball is drawn. Find \(P(\text{red})\).
4. **(B2-U7-L1-P04)** In P03, given that the drawn ball is red, find the probability it came from \(C_2\).
5. **(B2-U7-L1-P05)** *(near exam level)* A disease affects \(20\%\) of a population. A test is positive on \(95\%\) of the ill and on \(2\%\) of the healthy. A person tests positive; find the probability they are actually ill.

#### Practice solutions
1. \(A\cap B=A\) (every king is a face card), so \(P_B(A)=\dfrac{P(A)}{P(B)}=\dfrac{4/52}{12/52}=\dfrac{4}{12}=\dfrac13\).
2. \(P(A)P(B)=0.5\times0.4=0.20=P(A\cap B)\). Equal, so \(A\) and \(B\) are **independent**.
3. \(P(\text{red})=P(C_1)P_{C_1}(R)+P(C_2)P_{C_2}(R)=\tfrac13\cdot\tfrac25+\tfrac23\cdot\tfrac45=\tfrac{2}{15}+\tfrac{8}{15}=\tfrac{10}{15}=\dfrac{2}{3}\).
4. \(P_R(C_2)=\dfrac{P(C_2\cap R)}{P(R)}=\dfrac{8/15}{10/15}=\dfrac{8}{10}=\dfrac{4}{5}\). (Check: \(P_R(C_1)=\tfrac{2/15}{10/15}=\tfrac15\), and \(\tfrac15+\tfrac45=1\).)
5. Let \(M\)="ill", \(T\)="positive". \(P(M)=0.2,\ P_M(T)=0.95,\ P_{\bar M}(T)=0.02\). Total: \(P(T)=0.2\times0.95+0.8\times0.02=0.19+0.016=0.206\). Then \(P_T(M)=\dfrac{0.19}{0.206}=\dfrac{95}{103}\approx0.922\).

#### Lesson summary
- **Most important definition:** \(P_B(A)=\dfrac{P(A\cap B)}{P(B)}\) (with \(P(B)\ne0\)) — restrict the world to \(B\).
- **Most important formulas:** multiplication rule \(P(A\cap B)=P(B)P_B(A)\); total probability \(P(B)=\sum_iP(A_i)P_{A_i}(B)\).
- **Most important condition:** total probability needs a genuine **partition**.
- **Most important pattern:** forward = multiply along a path; combine = total probability; backward = one path ÷ total (Bayes).
- **Most common mistake:** confusing independent with mutually exclusive.
- **Quick self-check:** if \(P(A)=0.3\), \(P(B)=0.5\), and \(A,B\) independent, what is \(P_B(A)\)? *(Answer: \(P_B(A)=P(A)=0.3\).)*

---

<a id="b2u7-l2"></a>
### Lesson 2: Random variables (expectation and variance)

#### Core idea

Often we do not care about the raw outcome of an experiment, but about a **number** attached to it: the *sum* of two dice, the *gain* in a game, the *number of red balls* drawn. A **random variable** \(X\) is precisely a rule \(X:\Omega\to\mathbb R\) that assigns such a number to each outcome. Once we have \(X\), we forget the original outcomes and work with its **probability distribution** (its "law"): the table listing each value \(x_i\) together with \(p_i=P(X=x_i)\).

Two numbers summarise the whole distribution. The **expectation** \(E(X)=\sum x_ip_i\) is the *balance point* of the distribution — the long-run average value of \(X\) over many repetitions. The **variance** \(V(X)\) measures how *spread out* the values are around \(E(X)\); its square root, the **standard deviation** \(\sigma(X)\), is in the same units as \(X\). A game is called **fair** when the expected gain is \(0\).

**How does a student recognise this lesson?** Wording such as "let \(X\) be the number of …", "the gain", "the score", "expected value / mean", "variance", or a request to "write the distribution table". The main confusions are (1) forgetting to check \(\sum p_i=1\), and (2) computing \(V(X)\) with the wrong formula — the short-cut is \(V(X)=\sum x_i^2p_i-\big(E(X)\big)^2\), **not** \(\big(\sum x_ip_i\big)^2\) minus anything else.

#### Prerequisite knowledge
- Building probabilities of events (equiprobability, or from a tree).
- The normalisation rule \(0\le p_i\le1\) and \(\sum_ip_i=1\).
- Basic algebra with fractions and squares.

#### Definitions

**Definition (random variable).** A **random variable** \(X\) on a sample space \(\Omega\) is a mapping \(X:\Omega\to\mathbb R\) assigning a real number to each outcome. Its value set is written \(\{x_1,\dots,x_n\}\). The notation \((X=x_i)\) denotes the **event** \(\{\omega\in\Omega:X(\omega)=x_i\}\), and \(P(X=x_i)=p_i\).

**Definition (probability distribution / law).** The mapping \(x_i\mapsto p_i=P(X=x_i)\) is the **probability distribution** of \(X\), usually a table:

| \(x_i\) | \(x_1\) | \(x_2\) | \(\cdots\) | \(x_n\) |
|---|---|---|---|---|
| \(P(X=x_i)\) | \(p_1\) | \(p_2\) | \(\cdots\) | \(p_n\) |

with \(0\le p_i\le1\) and \(\displaystyle\sum_{i=1}^{n}p_i=1\).

**Definition (expectation, variance, standard deviation).** For \(X\) with distribution \(p_i=P(X=x_i)\):
\[
E(X)=\sum_{i=1}^{n}x_ip_i,\qquad
V(X)=\sum_{i=1}^{n}\big(x_i-E(X)\big)^2p_i,\qquad
\sigma(X)=\sqrt{V(X)}.
\]

> Source: Mathematics Textbook 2, pages 162–163.

#### Formulas and properties

**Short-cut variance formula.**
\[
V(X)=\left(\sum_{i=1}^{n}x_i^2\,p_i\right)-\big(E(X)\big)^2.
\]

**Linearity of expectation and behaviour of variance.** For real constants \(a,b\),
\[
E(aX+b)=a\,E(X)+b,\qquad V(aX+b)=a^2\,V(X),\qquad \sigma(aX+b)=|a|\,\sigma(X).
\]
Note that the additive constant \(b\) **shifts** the mean but does **not** affect the spread.

> **Important condition:** always confirm \(\sum p_i=1\) *before* computing \(E\) and \(V\); a table that does not sum to 1 is not a valid distribution and every subsequent number would be wrong.

> **Common mistake:** writing \(V(X)=\big(E(X)\big)^2-\sum x_i^2p_i\) (signs reversed) or \(V(X)=E(X)^2-\big(\sum x_ip_i\big)^2=0\). The correct short-cut is \(\underbrace{\sum x_i^2p_i}_{E(X^2)}-\underbrace{\big(E(X)\big)^2}_{(\text{mean})^2}\), and it is always \(\ge0\).

#### Theorems and proofs

**Theorem (equivalence of the two variance formulas).**
\[
\sum_i\big(x_i-E(X)\big)^2p_i=\sum_i x_i^2p_i-\big(E(X)\big)^2.
\]
**Proof.** Write \(m=E(X)\) and expand:
\[
\sum_i(x_i-m)^2p_i=\sum_i\big(x_i^2-2mx_i+m^2\big)p_i
=\sum_i x_i^2p_i-2m\sum_i x_ip_i+m^2\sum_i p_i.
\]
Now \(\sum_i x_ip_i=m\) and \(\sum_i p_i=1\), so the right side equals \(\sum_i x_i^2p_i-2m\cdot m+m^2=\sum_i x_i^2p_i-m^2\). \(\blacksquare\) The textbook prints this derivation; the student should be able to **use** the short-cut and, if asked, reproduce this one-line expansion.

#### Recognising the idea and the solution method
- **"Let \(X\) be the number/sum/gain of …"** → define \(X\), list its possible values.
- **"Write the distribution / law"** → compute \(P(X=x_i)\) for each value; check they sum to 1.
- **"Find the expectation / mean"** → \(E(X)=\sum x_ip_i\).
- **"Find the variance / standard deviation"** → \(V(X)=\sum x_i^2p_i-\big(E(X)\big)^2\), then \(\sigma=\sqrt V\).
- **"Is the game fair?"** → check whether \(E(\text{gain})=0\).

**Standard algorithm:**
1. Determine the value set \(\{x_1,\dots,x_n\}\) of \(X\).
2. For each \(x_i\), collect the outcomes with \(X=x_i\) and add their probabilities → \(p_i\).
3. Tabulate; verify \(\sum p_i=1\).
4. Compute \(E(X)=\sum x_ip_i\).
5. Compute \(\sum x_i^2p_i\), then \(V(X)=\sum x_i^2p_i-\big(E(X)\big)^2\) and \(\sigma(X)=\sqrt{V(X)}\).

#### Basic example

**B2-U7-L2-E01** — *Original explanatory example created for this guide.*

**Problem.** A fair die is rolled. Define \(X\) by: \(X=-1\) if the result is \(1\); \(X=1\) if the result is \(3\); \(X=2\) if the result is in \(\{2,4,5,6\}\). Write the distribution of \(X\) and compute \(E(X)\), \(V(X)\), \(\sigma(X)\).

**Why this method applies.** \(X\) is a number attached to each face, i.e. a random variable; we tabulate and apply the standard formulas.

**Step-by-step solution.**
Each face has probability \(\tfrac16\). Grouping:
- \(X=-1\) only on \(\{1\}\): \(p=\tfrac16\).
- \(X=1\) only on \(\{3\}\): \(p=\tfrac16\).
- \(X=2\) on \(\{2,4,5,6\}\): \(p=\tfrac46\).

| \(x_i\) | \(-1\) | \(1\) | \(2\) |
|---|---|---|---|
| \(P(X=x_i)\) | \(\tfrac16\) | \(\tfrac16\) | \(\tfrac46\) |

Check: \(\tfrac16+\tfrac16+\tfrac46=\tfrac66=1\ \checkmark\).
\[
E(X)=(-1)\tfrac16+1\cdot\tfrac16+2\cdot\tfrac46=\frac{-1+1+8}{6}=\frac{8}{6}=\frac{4}{3}.
\]
\[
\sum x_i^2p_i=(1)\tfrac16+(1)\tfrac16+(4)\tfrac46=\frac{1+1+16}{6}=\frac{18}{6}=3.
\]
\[
V(X)=3-\left(\frac{4}{3}\right)^2=3-\frac{16}{9}=\frac{27-16}{9}=\frac{11}{9},\qquad
\sigma(X)=\sqrt{\frac{11}{9}}=\frac{\sqrt{11}}{3}\approx1.106.
\]

**Final answer.** \(E(X)=\dfrac{4}{3}\), \(V(X)=\dfrac{11}{9}\), \(\sigma(X)=\dfrac{\sqrt{11}}{3}\).

**Verification.** Using the direct formula: \(\big(-1-\tfrac43\big)^2\tfrac16+\big(1-\tfrac43\big)^2\tfrac16+\big(2-\tfrac43\big)^2\tfrac46=\tfrac{49}{9}\cdot\tfrac16+\tfrac{1}{9}\cdot\tfrac16+\tfrac{4}{9}\cdot\tfrac46=\tfrac{49}{54}+\tfrac{1}{54}+\tfrac{16}{54}=\tfrac{66}{54}=\tfrac{11}{9}\ \checkmark\).

**What the student should learn.** Group outcomes by the value of \(X\) *before* summing probabilities; then the short-cut variance formula is faster and less error-prone than the direct one.

> Source: example created in the style of the die random-variable worked example, pages 164–165.

#### Textbook-level example

**B2-U7-L2-E02**

**Problem.** Two fair dice are rolled and \(X\) is the **sum** of the two faces. Write the distribution of \(X\), then compute \(E(X)\) and \(V(X)\).

**Problem analysis.** There are \(6\times6=36\) equally likely ordered outcomes. \(X\) ranges over \(2,3,\dots,12\); each value's probability is (number of pairs summing to it)\(/36\).

**Step-by-step solution.**

| \(x\) | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| \(P(X=x)\) | \(\tfrac1{36}\) | \(\tfrac2{36}\) | \(\tfrac3{36}\) | \(\tfrac4{36}\) | \(\tfrac5{36}\) | \(\tfrac6{36}\) | \(\tfrac5{36}\) | \(\tfrac4{36}\) | \(\tfrac3{36}\) | \(\tfrac2{36}\) | \(\tfrac1{36}\) |

Sum of numerators \(=1+2+3+4+5+6+5+4+3+2+1=36\), so \(\sum p=1\ \checkmark\). By symmetry about \(7\),
\[
E(X)=7.
\]
For the variance, \(\sum x^2p_i=\dfrac{1}{36}\big(4\cdot1+9\cdot2+16\cdot3+25\cdot4+36\cdot5+49\cdot6+64\cdot5+81\cdot4+100\cdot3+121\cdot2+144\cdot1\big)\).
The bracket \(=4+18+48+100+180+294+320+324+300+242+144=1974\), so \(\sum x^2p_i=\dfrac{1974}{36}=\dfrac{329}{6}\). Hence
\[
V(X)=\frac{329}{6}-7^2=\frac{329}{6}-49=\frac{329-294}{6}=\frac{35}{6}\approx5.833.
\]

**Final answer.** \(E(X)=7\), \(V(X)=\dfrac{35}{6}\) (so \(\sigma(X)=\sqrt{35/6}\approx2.415\)).

**Verification.** The distribution is symmetric about \(7\), which forces \(E(X)=7\). Independently, each die has mean \(3.5\); the sum of the means is \(7\), matching \(E(X)\). The variance is positive, as it must be.

**What the student should learn.** Exploit **symmetry** to read off \(E(X)\) instantly; use the short-cut \(V(X)=\sum x^2p_i-\big(E(X)\big)^2\) for the spread.

> Source: Mathematics Textbook 2, page 165 (two-dice sum exercise).

#### Common mistake

> **Common mistake:** computing \(E(X^2)\) as \(\big(E(X)\big)^2\). In general \(E(X^2)\ne\big(E(X)\big)^2\); their **difference** is exactly the variance \(V(X)\ge0\). In E01, \(E(X^2)=3\) but \(\big(E(X)\big)^2=\tfrac{16}{9}\approx1.78\) — they are not equal, and the gap \(\tfrac{11}{9}\) is the variance.

#### Special cases
- **Constant variable:** if \(X=c\) always, then \(E(X)=c\) and \(V(X)=0\) (no spread).
- **A value with probability 0:** if a candidate value is never attained, it simply does not appear in the table (do not write \(p_i=0\) rows and treat them as outcomes).
- **Fair game:** the gain \(X\) satisfies \(E(X)=0\); a positive \(E(X)\) favours the player, a negative one favours the house.
- **Rescaling:** replacing \(X\) by \(aX+b\) gives \(E\to aE+b\), \(V\to a^2V\) — a handy shortcut when the values are shifted/scaled versions of a simpler variable.

#### Practice set
1. **(B2-U7-L2-P01)** A variable has the table \(x_i:0,1,2\) with \(p_i:0.5,0.3,0.2\). Verify it is a valid distribution and find \(E(X)\).
2. **(B2-U7-L2-P02)** For the variable in P01, compute \(V(X)\) and \(\sigma(X)\).
3. **(B2-U7-L2-P03)** A fair coin is tossed twice; \(X\) = number of heads. Write the distribution and find \(E(X)\), \(V(X)\).
4. **(B2-U7-L2-P04)** A game: you pay nothing and win \(5\) if a die shows \(6\), otherwise you lose \(1\). Let \(X\) be your gain. Find \(E(X)\); is the game fair?
5. **(B2-U7-L2-P05)** *(near exam level)* For the \(X\) of P01, let \(Y=3X-2\). Using the linearity rules, find \(E(Y)\) and \(V(Y)\); then confirm \(E(Y)\) directly from \(Y\)'s table.

#### Practice solutions
1. \(0.5+0.3+0.2=1\ \checkmark\), all in \([0,1]\). \(E(X)=0(0.5)+1(0.3)+2(0.2)=0.3+0.4=0.7\).
2. \(\sum x^2p=0(0.5)+1(0.3)+4(0.2)=0.3+0.8=1.1\). \(V(X)=1.1-0.7^2=1.1-0.49=0.61\); \(\sigma(X)=\sqrt{0.61}\approx0.781\).
3. \(x:0,1,2\) with \(p:\tfrac14,\tfrac12,\tfrac14\) (sum 1). \(E(X)=0\cdot\tfrac14+1\cdot\tfrac12+2\cdot\tfrac14=1\). \(\sum x^2p=0+\tfrac12+4\cdot\tfrac14=\tfrac12+1=\tfrac32\); \(V(X)=\tfrac32-1^2=\tfrac12\).
4. \(x:5\) with \(p=\tfrac16\), \(x:-1\) with \(p=\tfrac56\). \(E(X)=5\cdot\tfrac16+(-1)\cdot\tfrac56=\tfrac{5-5}{6}=0\). Since \(E(X)=0\), the game **is fair**.
5. Linearity: \(E(Y)=3E(X)-2=3(0.7)-2=0.1\); \(V(Y)=3^2V(X)=9(0.61)=5.49\). Direct table for \(Y=3X-2\): values \(-2,1,4\) with \(p:0.5,0.3,0.2\), so \(E(Y)=-2(0.5)+1(0.3)+4(0.2)=-1+0.3+0.8=0.1\ \checkmark\).

#### Lesson summary
- **Most important definition:** a random variable \(X:\Omega\to\mathbb R\) with distribution \(p_i=P(X=x_i)\), \(\sum p_i=1\).
- **Most important formulas:** \(E(X)=\sum x_ip_i\) and \(V(X)=\sum x_i^2p_i-\big(E(X)\big)^2\), \(\sigma=\sqrt V\).
- **Most important condition:** the table must satisfy \(\sum p_i=1\) before any computation.
- **Most important pattern:** group outcomes by value, tabulate, then apply the formulas; use \(E(aX+b)=aE(X)+b\), \(V(aX+b)=a^2V(X)\).
- **Most common mistake:** confusing \(E(X^2)\) with \(\big(E(X)\big)^2\).
- **Quick self-check:** if \(E(X)=2\) and \(E(X^2)=6\), what is \(V(X)\)? *(Answer: \(6-2^2=2\).)*

---

<a id="b2u7-l3"></a>
### Lesson 3: Independence of random variables

#### Core idea

Two random variables \(X\) and \(Y\), defined on the same experiment, are **independent** when knowing the value of one tells you *nothing* about the value of the other — for **every** possible pair of values. Formally, the probability of the joint event \((X=x_i)\cap(Y=y_j)\) must factor as the product \(P(X=x_i)\,P(Y=y_j)\) for **all** \(i,j\). The data of all these joint probabilities is the **joint distribution**, displayed in a **double-entry (two-way) table**; summing a row recovers \(P(X=x_i)\) and summing a column recovers \(P(Y=y_j)\) — these are the **marginal** laws.

The practical picture: build (or read) the joint table, compute the marginals along the edges, and check the factorisation cell by cell. Independence is an **all-or-nothing** property: a **single** cell where \(p_{ij}\ne p_ip_j\) already proves the variables are **dependent**. Conversely, if we are *told* \(X\) and \(Y\) are independent and given the marginals, we can **fill in** the whole table by multiplying \(p_{ij}=p_ip_j\).

**How does a student recognise this lesson?** A **two-way table** of probabilities, the phrase "joint law of the pair \((X,Y)\)", or a request to "test whether \(X\) and \(Y\) are independent" / "find the marginal laws". The main confusion is checking only one convenient cell — independence needs **every** cell.

#### Prerequisite knowledge
- Random variables and their distributions (Lesson 2).
- Independence of **events** \(P(A\cap B)=P(A)P(B)\) (Lesson 1).
- Reading and summing a two-way table.

#### Definitions

**Definition (joint distribution of the pair \((X,Y)\)).** Let \(X,Y\) be random variables on the same \(\Omega\), with value sets \(\{x_1,\dots\}\) and \(\{y_1,\dots\}\). The **joint law** assigns to each pair \((x_i,y_j)\) the probability
\[
p_{ij}=P\big((X=x_i)\cap(Y=y_j)\big),
\]
displayed as a double-entry table. The **marginals** are \(p_i=P(X=x_i)\) and \(p_j=P(Y=y_j)\).

**Definition (independence of two random variables).** \(X\) and \(Y\) are **independent** if and only if, **for every** pair \((x_i,y_j)\),
\[
P\big((X=x_i)\cap(Y=y_j)\big)=P(X=x_i)\,P(Y=y_j),\qquad\text{i.e. }p_{ij}=p_i\,p_j.
\]

> Source: Mathematics Textbook 2, pages 166–167.

#### Formulas and properties

**Marginals from the joint table.**
\[
P(X=x_i)=\sum_{j}p_{ij}\ \ (\text{sum of row }i),\qquad
P(Y=y_j)=\sum_{i}p_{ij}\ \ (\text{sum of column }j),
\]
and the grand total of all cells is \(1\).

**Filling a table under independence.** If \(X\perp Y\) and the marginals \((p_i),(p_j)\) are known, every cell is forced: \(p_{ij}=p_ip_j\).

> **Important condition:** independence demands \(p_{ij}=p_ip_j\) for **all** \(i,j\) simultaneously. Verifying it for some cells is **not** enough to *prove* independence — but finding **one** violation is enough to *disprove* it.

#### Theorems and proofs

**Theorem (row/column sums give the marginals).** In the joint table of \((X,Y)\),
\[
P(X=x_i)=\sum_j P\big((X=x_i)\cap(Y=y_j)\big),\qquad
P(Y=y_j)=\sum_i P\big((X=x_i)\cap(Y=y_j)\big),
\]
and \(\sum_{i,j}p_{ij}=1\).
**Proof.** Fix \(i\). The events \((Y=y_j)\), as \(j\) varies, form a partition of \(\Omega\); hence \((X=x_i)\) is the disjoint union of the events \((X=x_i)\cap(Y=y_j)\). By additivity, \(P(X=x_i)=\sum_j p_{ij}\) — the row sum. The column statement is symmetric, and summing all rows (each a marginal of \(X\)) gives \(\sum_i P(X=x_i)=1\). \(\blacksquare\) This is a direct application of total probability; the student **applies** it to extract marginals.

#### Recognising the idea and the solution method
- **A two-way table is given** → sum rows for \(X\)'s marginal, columns for \(Y\)'s marginal.
- **"Test independence"** → compute all \(p_ip_j\) and compare with each \(p_{ij}\).
- **"Fill the joint table, assuming independence"** → multiply marginals: \(p_{ij}=p_ip_j\).

**Standard algorithm (independence test):**
1. Compute the marginals \(p_i\) (row sums) and \(p_j\) (column sums); check both sum to 1.
2. For each cell, form the product \(p_ip_j\).
3. Compare each \(p_ip_j\) with the actual \(p_{ij}\).
4. If **all** cells match, \(X\) and \(Y\) are independent; if **any** cell differs, they are dependent.

#### Basic example

**B2-U7-L3-E01** — *Original explanatory example created for this guide.*

**Problem.** Two independent random variables have marginals \(P(X=0)=\tfrac25,\ P(X=1)=\tfrac35\) and \(P(Y=0)=\tfrac14,\ P(Y=1)=\tfrac34\). Using independence, build the joint table and verify it sums to 1.

**Why this method applies.** We are told \(X\perp Y\), so every joint probability is the product of the corresponding marginals: \(p_{ij}=p_ip_j\).

**Step-by-step solution.**
\[
p_{00}=\tfrac25\cdot\tfrac14=\tfrac{2}{20}=\tfrac1{10},\quad
p_{01}=\tfrac25\cdot\tfrac34=\tfrac{6}{20}=\tfrac{3}{10},
\]
\[
p_{10}=\tfrac35\cdot\tfrac14=\tfrac{3}{20},\quad
p_{11}=\tfrac35\cdot\tfrac34=\tfrac{9}{20}.
\]

| \(X\backslash Y\) | \(Y=0\) | \(Y=1\) |
|---|---|---|
| \(X=0\) | \(\tfrac1{10}\) | \(\tfrac3{10}\) |
| \(X=1\) | \(\tfrac3{20}\) | \(\tfrac9{20}\) |

**Final answer.** The table above, with total \(\tfrac1{10}+\tfrac3{10}+\tfrac3{20}+\tfrac9{20}=\tfrac{2}{20}+\tfrac{6}{20}+\tfrac{3}{20}+\tfrac{9}{20}=\tfrac{20}{20}=1\).

**Verification.** Row sums: \(\tfrac1{10}+\tfrac3{10}=\tfrac25=P(X=0)\ \checkmark\); \(\tfrac3{20}+\tfrac9{20}=\tfrac{12}{20}=\tfrac35=P(X=1)\ \checkmark\). Column sums: \(\tfrac1{10}+\tfrac3{20}=\tfrac{2+3}{20}=\tfrac14=P(Y=0)\ \checkmark\); \(\tfrac3{10}+\tfrac9{20}=\tfrac{6+9}{20}=\tfrac{15}{20}=\tfrac34=P(Y=1)\ \checkmark\).

**What the student should learn.** Under independence the joint table is completely determined by the marginals; the row/column sums must reproduce those marginals — a built-in check.

> Source: example created in the style of the joint-table activities, pages 167–168.

#### Textbook-level example

**B2-U7-L3-E02**

**Problem.** Two random variables \(X,Y\) (each taking values \(0\) or \(1\)) have the joint table below. Find the marginals of \(X\) and \(Y\), then decide whether \(X\) and \(Y\) are independent.

| \(X\backslash Y\) | \(Y=0\) | \(Y=1\) |
|---|---|---|
| \(X=0\) | \(\tfrac12\) | \(\tfrac1{12}\) |
| \(X=1\) | \(\tfrac16\) | \(\tfrac14\) |

**Problem analysis.** We compute marginals by row/column sums, then test \(p_{ij}\overset?=p_ip_j\) on **every** cell.

**Step-by-step solution.**
Total check: \(\tfrac12+\tfrac1{12}+\tfrac16+\tfrac14=\tfrac{6+1+2+3}{12}=\tfrac{12}{12}=1\ \checkmark\).
Marginals of \(X\) (row sums): \(P(X=0)=\tfrac12+\tfrac1{12}=\tfrac{7}{12}\); \(P(X=1)=\tfrac16+\tfrac14=\tfrac{5}{12}\).
Marginals of \(Y\) (column sums): \(P(Y=0)=\tfrac12+\tfrac16=\tfrac23\); \(P(Y=1)=\tfrac1{12}+\tfrac14=\tfrac13\).
Test the top-left cell:
\[
P(X=0)\,P(Y=0)=\frac{7}{12}\cdot\frac23=\frac{14}{36}=\frac{7}{18},
\]
but the actual \(p_{00}=\tfrac12=\tfrac{9}{18}\). Since \(\tfrac{7}{18}\ne\tfrac{9}{18}\), the factorisation already fails here.

**Final answer.** \(X\) and \(Y\) are **not independent** (dependent): the very first cell violates \(p_{ij}=p_ip_j\).

**Verification.** Marginals sum correctly: \(\tfrac7{12}+\tfrac5{12}=1\) and \(\tfrac23+\tfrac13=1\). One violated cell is sufficient to conclude dependence, so no further cells need checking.

**What the student should learn.** To **disprove** independence you need just one bad cell; to **prove** it you must check them all. Always validate the total and the marginals first.

> Source: Mathematics Textbook 2, page 168 (independence-test from a joint table).

#### Common mistake

> **Common mistake:** declaring \(X\) and \(Y\) independent after checking a **single** cell where \(p_{ij}=p_ip_j\) happens to hold. Independence requires the equality in **every** cell; one accidental match proves nothing. (Symmetrically, do not conclude "dependent" from a single match, nor "independent" from a single mismatch — read the logic carefully.)

#### Special cases
- **A row or column of zeros:** if \(P(X=x_i)=0\) that value should not appear; genuine values have positive marginals.
- **Perfect dependence:** if \(Y\) is a function of \(X\) (e.g. \(Y=X\)), then for \(i\ne j\), \(p_{ij}=0\) while \(p_ip_j>0\) — strongly dependent.
- **Constructed independence:** the *only* joint law with given marginals **and** independence is the product table (E01); any other joint law with those marginals is dependent.

#### Practice set
1. **(B2-U7-L3-P01)** From the table \(\big[p_{00}=0.1,p_{01}=0.2,p_{10}=0.3,p_{11}=0.4\big]\) (rows \(X=0,1\)), find the marginals of \(X\) and \(Y\).
2. **(B2-U7-L3-P02)** Are \(X\) and \(Y\) in P01 independent? Justify by checking the cell \((0,0)\).
3. **(B2-U7-L3-P03)** \(X\) has \(P(X=0)=\tfrac13,P(X=1)=\tfrac23\); \(Y\) has \(P(Y=0)=\tfrac12,P(Y=1)=\tfrac12\). Assuming independence, write the full joint table.
4. **(B2-U7-L3-P04)** A joint table has \(p_{00}=\tfrac16,p_{01}=\tfrac13,p_{10}=\tfrac16,p_{11}=\tfrac13\). Show \(X\) and \(Y\) are independent.
5. **(B2-U7-L3-P05)** *(near exam level)* Marginals \(P(X=1)=0.2,P(X=2)=0.8\) and \(P(Y=0)=0.25,P(Y=1)=0.75\), with \(X\perp Y\). Build the joint table and compute \(P\big((X=2)\cap(Y=1)\big)\).

#### Practice solutions
1. Row sums: \(P(X=0)=0.1+0.2=0.3\), \(P(X=1)=0.3+0.4=0.7\). Column sums: \(P(Y=0)=0.1+0.3=0.4\), \(P(Y=1)=0.2+0.4=0.6\).
2. \(P(X=0)P(Y=0)=0.3\times0.4=0.12\ne0.1=p_{00}\). So **not independent**.
3. Products: \((0,0)=\tfrac13\cdot\tfrac12=\tfrac16\); \((0,1)=\tfrac16\); \((1,0)=\tfrac23\cdot\tfrac12=\tfrac13\); \((1,1)=\tfrac13\). Table sums to \(\tfrac16+\tfrac16+\tfrac13+\tfrac13=1\).
4. Marginals: \(P(X=0)=\tfrac16+\tfrac13=\tfrac12\), \(P(X=1)=\tfrac16+\tfrac13=\tfrac12\); \(P(Y=0)=\tfrac16+\tfrac16=\tfrac13\), \(P(Y=1)=\tfrac13+\tfrac13=\tfrac23\). Check all cells: \(p_{00}=\tfrac16=\tfrac12\cdot\tfrac13\ \checkmark\); \(p_{01}=\tfrac13=\tfrac12\cdot\tfrac23\ \checkmark\); \(p_{10}=\tfrac16=\tfrac12\cdot\tfrac13\ \checkmark\); \(p_{11}=\tfrac13=\tfrac12\cdot\tfrac23\ \checkmark\). All hold ⇒ **independent**.
5. \(p_{ij}=p_ip_j\): \((1,0)=0.2\times0.25=0.05\); \((1,1)=0.2\times0.75=0.15\); \((2,0)=0.8\times0.25=0.20\); \((2,1)=0.8\times0.75=0.60\). Total \(=1\). In particular \(P\big((X=2)\cap(Y=1)\big)=0.60\).

#### Lesson summary
- **Most important definition:** \(X\perp Y\iff p_{ij}=p_ip_j\) for **all** \(i,j\).
- **Most important formulas:** marginals are row/column sums; under independence, \(p_{ij}=p_ip_j\).
- **Most important condition:** the equality must hold in every cell (all-or-nothing).
- **Most important pattern:** marginals → products → cell-by-cell comparison.
- **Most common mistake:** judging independence from a single cell.
- **Quick self-check:** if \(P(X=1)=0.5\), \(P(Y=1)=0.5\), and \(X\perp Y\), what is \(P\big((X=1)\cap(Y=1)\big)\)? *(Answer: \(0.25\).)*

---

<a id="b2u7-l4"></a>
### Lesson 4: The binomial random variable

#### Core idea

Many experiments consist of **repeating the same simple trial** several times, independently, where each trial has just **two outcomes**: "success" \(S\) (probability \(p\)) or "failure" \(\bar S\) (probability \(q=1-p\)). A single such trial is a **Bernoulli trial**; \(n\) independent repetitions form a **binomial experiment**. The random variable \(X=\) "number of successes in the \(n\) trials" then follows the **binomial law** \(\mathcal B(n,p)\).

The formula is built from a tree. Any *specific* sequence with exactly \(k\) successes and \(n-k\) failures has probability \(p^k q^{n-k}\) (multiply along the path, using independence). The number of such sequences is \(\binom{n}{k}\) (choose which \(k\) of the \(n\) trials succeed). Adding these equal probabilities gives
\[
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}.
\]
Because these are the terms of \((p+q)^n\), they sum to \(1\). Two ready-made formulas save all the work of a distribution table: \(E(X)=np\) and \(V(X)=np(1-p)\).

**How does a student recognise this lesson?** Cue words: "**repeat** \(n\) times", "with replacement", "**independent** trials", "each attempt succeeds with probability \(p\)", "number of successes / hits / defective items", "at least one …". The main confusions are (1) using the binomial model when the trials are **not** independent (e.g. drawing **without** replacement) or \(p\) changes, and (2) mishandling "at least one", which is fastest via the complement \(1-P(X=0)=1-q^{\,n}\).

#### Prerequisite knowledge
- Independence and the multiplication rule (Lesson 1).
- Binomial coefficients \(\binom{n}{k}=\dfrac{n!}{k!\,(n-k)!}\) and the Binomial Theorem \((p+q)^n=\sum_k\binom{n}{k}p^kq^{n-k}\).
- Expectation and variance of a random variable (Lesson 2).

#### Definitions

**Definition (Bernoulli trial).** A **Bernoulli trial** is a random experiment with exactly two outcomes: **success** \(S\) with probability \(p\), and **failure** \(\bar S\) with probability \(q=1-p\).

**Definition (binomial law \(\mathcal B(n,p)\)).** Repeat a Bernoulli trial \(n\) times, **independently**, with the same success probability \(p\). The random variable \(X=\)"number of successes" takes the values \(0,1,\dots,n\), and we say \(X\) **follows the binomial law with parameters \(n\) and \(p\)**, written \(X\sim\mathcal B(n,p)\), with
\[
P(X=k)=\binom{n}{k}p^k(1-p)^{\,n-k},\qquad k=0,1,\dots,n.
\]

> Source: Mathematics Textbook 2, pages 169–171.

#### Formulas and properties

**Binomial probabilities and normalisation.** With \(q=1-p\),
\[
P(X=k)=\binom{n}{k}p^kq^{\,n-k},\qquad \sum_{k=0}^{n}P(X=k)=(p+q)^n=1.
\]

**Expectation and variance.**
\[
E(X)=np,\qquad V(X)=np(1-p)=npq,\qquad \sigma(X)=\sqrt{np(1-p)}.
\]

**"At least one" via the complement.**
\[
P(X\ge1)=1-P(X=0)=1-q^{\,n}.
\]

> **Important condition:** \(\mathcal B(n,p)\) requires **independent** trials with a **constant** success probability \(p\). Drawing **without** replacement breaks both (the composition, hence \(p\), changes) — that situation is *not* binomial.

> **Common mistake:** forgetting the coefficient \(\binom{n}{k}\) and writing \(P(X=k)=p^kq^{n-k}\). That is the probability of **one specific** sequence, not of the **event** "exactly \(k\) successes", which bundles \(\binom{n}{k}\) sequences.

#### Theorems and proofs

**Theorem (mean of a binomial variable).** If \(X\sim\mathcal B(n,p)\) with \(q=1-p\), then \(E(X)=np\).
**Proof (as in the textbook).** By definition,
\[
E(X)=\sum_{k=0}^{n}k\binom{n}{k}p^kq^{\,n-k}.
\]
The \(k=0\) term is \(0\). For \(k\ge1\), use the identity
\[
k\binom{n}{k}=k\cdot\frac{n!}{k!\,(n-k)!}=n\cdot\frac{(n-1)!}{(k-1)!\,(n-k)!}=n\binom{n-1}{k-1}.
\]
Therefore, setting \(j=k-1\),
\[
E(X)=\sum_{k=1}^{n}n\binom{n-1}{k-1}p^kq^{\,n-k}
=np\sum_{j=0}^{n-1}\binom{n-1}{j}p^{j}q^{\,(n-1)-j}
=np\,(p+q)^{\,n-1}=np\cdot1=np.\ \blacksquare
\]
The variance \(V(X)=npq\) is obtained by a similar manipulation; the textbook states it and expects the student to **apply** \(E(X)=np\) and \(V(X)=npq\) directly.

#### Recognising the idea and the solution method
- **"Repeat \(n\) independent identical trials, two outcomes, constant \(p\)"** → \(X\sim\mathcal B(n,p)\).
- **"With replacement"** usually signals independence (binomial); **"without replacement"** signals dependence (not binomial).
- **"Exactly \(k\)"** → \(\binom{n}{k}p^kq^{n-k}\). **"At least one"** → \(1-q^{n}\). **"At most \(k\)"** → sum \(P(X=0)+\dots+P(X=k)\), or complement.
- **"Expected number of successes"** → \(E(X)=np\) (no table needed).

**Standard algorithm:**
1. Check the three binomial conditions: two outcomes, independent, constant \(p\).
2. Identify \(n\) (number of trials) and \(p\) (success probability); set \(q=1-p\).
3. Write \(X\sim\mathcal B(n,p)\) and \(P(X=k)=\binom{n}{k}p^kq^{n-k}\).
4. For the requested event, either substitute \(k\), sum a range, or use a complement.
5. For summaries, quote \(E(X)=np\), \(V(X)=npq\), \(\sigma(X)=\sqrt{npq}\).

#### Basic example

**B2-U7-L4-E01** — *Original explanatory example created for this guide.*

**Problem.** A biased coin shows heads (success) with probability \(p=\tfrac13\). It is tossed \(n=5\) times, independently. Let \(X\) be the number of heads. Compute \(P(X=2)\) and \(P(X\ge1)\).

**Why this method applies.** Five independent identical two-outcome trials with constant \(p\): a textbook binomial, \(X\sim\mathcal B\!\left(5,\tfrac13\right)\), \(q=\tfrac23\).

**Step-by-step solution.**
\[
P(X=2)=\binom{5}{2}\Big(\tfrac13\Big)^2\Big(\tfrac23\Big)^3
=10\cdot\frac{1}{9}\cdot\frac{8}{27}=10\cdot\frac{8}{243}=\frac{80}{243}.
\]
For "at least one", use the complement:
\[
P(X=0)=\Big(\tfrac23\Big)^5=\frac{32}{243},\qquad
P(X\ge1)=1-\frac{32}{243}=\frac{211}{243}.
\]

**Final answer.** \(P(X=2)=\dfrac{80}{243}\approx0.329\) and \(P(X\ge1)=\dfrac{211}{243}\approx0.868\). Both lie in \([0,1]\).

**Verification.** Full distribution numerators over \(243\): \(P(X=0..5)=\tfrac{32}{243},\tfrac{80}{243},\tfrac{80}{243},\tfrac{40}{243},\tfrac{10}{243},\tfrac{1}{243}\); they sum to \(\tfrac{32+80+80+40+10+1}{243}=\tfrac{243}{243}=1\ \checkmark\). Also \(P(X\ge1)=\tfrac{80+80+40+10+1}{243}=\tfrac{211}{243}\ \checkmark\).

**What the student should learn.** "At least one" is fastest as \(1-P(X=0)=1-q^n\); never forget the \(\binom{n}{k}\) factor in \(P(X=k)\).

> Source: example created in the style of the binomial worked example, page 173.

#### Textbook-level example

**B2-U7-L4-E02**

**Problem.** A binomial experiment has \(n=5\) trials with success probability \(p=\tfrac13\) (so \(q=\tfrac23\)); \(X\) is the number of successes, \(X\sim\mathcal B\!\left(5,\tfrac13\right)\). (a) Compute \(P(X=5)\) and \(P(X=4)\). (b) Compute the probability of "at most 4 successes". (c) Give \(E(X)\) and \(V(X)\).

**Problem analysis.** Direct substitution into the binomial formula, a complement for part (b), and the ready-made mean/variance formulas for part (c).

**Step-by-step solution.**
(a)
\[
P(X=5)=\binom{5}{5}\Big(\tfrac13\Big)^5\Big(\tfrac23\Big)^0=\Big(\tfrac13\Big)^5=\frac{1}{243},
\]
\[
P(X=4)=\binom{5}{4}\Big(\tfrac13\Big)^4\Big(\tfrac23\Big)^1=5\cdot\frac{1}{81}\cdot\frac23=\frac{10}{243}.
\]
(b) "At most 4 successes" is the complement of "5 successes":
\[
P(X\le4)=1-P(X=5)=1-\frac{1}{243}=\frac{242}{243}.
\]
(c)
\[
E(X)=np=5\cdot\tfrac13=\frac{5}{3},\qquad
V(X)=np(1-p)=5\cdot\tfrac13\cdot\tfrac23=\frac{10}{9}.
\]

**Final answer.** \(P(X=5)=\dfrac1{243}\), \(P(X=4)=\dfrac{10}{243}\), \(P(X\le4)=\dfrac{242}{243}\); \(E(X)=\dfrac53\), \(V(X)=\dfrac{10}{9}\).

**Verification.** \(P(X\ge4)=P(X=4)+P(X=5)=\dfrac{10}{243}+\dfrac{1}{243}=\dfrac{11}{243}\), and indeed \(P(X\le4)=1-P(X=5)=\dfrac{242}{243}\) with \(\dfrac{242}{243}+\dfrac{1}{243}=1\ \checkmark\). Also \(E(X)=\tfrac53\) sits near the mode \(k=1,2\) (each \(\tfrac{80}{243}\)), as expected.

**What the student should learn.** Compute extreme-tail probabilities directly, but switch to a **complement** whenever "at most / at least" would otherwise require summing many terms; use \(E(X)=np,\ V(X)=npq\) rather than a full table.

> Source: Mathematics Textbook 2, page 173 (binomial computation with \(n=5,\ p=\tfrac13\)).

#### Harder / composite example

**B2-U7-L4-E03**

**Problem.** An archer hits the target with probability \(p=0.8\) on each shot, shots being independent. She fires \(n=4\) times; \(X\) = number of hits. (a) Find \(P(X=4)\) (all hits) and \(P(X\ge1)\) (at least one hit). (b) Find \(E(X)\). (c) How does the model change if, instead, four balls are drawn **without** replacement from an urn?

**Problem analysis.** Parts (a),(b): \(X\sim\mathcal B(4,0.8)\), \(q=0.2\). Part (c) is conceptual: dropping independence breaks the binomial model.

**Step-by-step solution.**
(a) With \(p=\tfrac45,\ q=\tfrac15\):
\[
P(X=4)=\Big(\tfrac45\Big)^4=\frac{256}{625}=0.4096,
\]
\[
P(X\ge1)=1-P(X=0)=1-\Big(\tfrac15\Big)^4=1-\frac{1}{625}=\frac{624}{625}=0.9984.
\]
(b)
\[
E(X)=np=4\times0.8=3.2.
\]
(c) Drawing **without** replacement makes the trials **dependent** (each draw changes the urn's composition, so \(p\) is not constant). Then \(X\) is **not** binomial; its law would be computed by counting (hypergeometric-style), not by \(\binom{n}{k}p^kq^{n-k}\).

**Final answer.** \(P(X=4)=\dfrac{256}{625}=0.4096\), \(P(X\ge1)=\dfrac{624}{625}=0.9984\), \(E(X)=3.2\). Without replacement the binomial model no longer applies.

**Verification.** \(0\le0.4096,0.9984\le1\ \checkmark\). Sanity: with a high \(p=0.8\), hitting all four is fairly likely and missing all four is almost impossible, matching \(0.41\) and \(1-0.9984=0.0016\). And \(E(X)=3.2\) is close to \(n=4\), as expected for a strong archer.

**What the student should learn.** The binomial model stands or falls on **independence with constant \(p\)**. "With replacement" keeps \(p\) fixed (binomial); "without replacement" does not (not binomial).

> Source: Mathematics Textbook 2, page 173, and the with/without-replacement contrast, page 185 (Q17).

#### Common mistake

> **Common mistake:** applying \(\mathcal B(n,p)\) to draws **without** replacement. Without replacement, the success probability changes from draw to draw and the trials are dependent, so \(P(X=k)=\binom{n}{k}p^kq^{n-k}\) is invalid. The binomial model is only for **independent** trials with a **constant** \(p\) (e.g. drawing **with** replacement, or repeated shots/tosses).

#### Special cases
- **\(k=0\):** \(P(X=0)=q^{\,n}\) — all failures; the backbone of "at least one" \(=1-q^n\).
- **\(k=n\):** \(P(X=n)=p^{\,n}\) — all successes.
- **\(p=\tfrac12\):** the distribution is symmetric, and \(P(X=k)=\binom{n}{k}\big(\tfrac12\big)^n\); e.g. \(\mathcal B(3,\tfrac12)\) gives \(\tfrac18,\tfrac38,\tfrac38,\tfrac18\) with \(E=\tfrac32\), \(V=\tfrac34\).
- **\(n=1\):** \(\mathcal B(1,p)\) is a single Bernoulli trial, with \(E(X)=p\), \(V(X)=pq\).

#### Practice set
1. **(B2-U7-L4-P01)** \(X\sim\mathcal B(3,\tfrac12)\). Compute \(P(X=2)\).
2. **(B2-U7-L4-P02)** \(X\sim\mathcal B(5,\tfrac13)\). Compute \(P(X\le1)\).
3. **(B2-U7-L4-P03)** A machine produces a defective item with probability \(0.1\), independently. In a batch of \(10\), let \(X\) be the number of defectives. Find \(E(X)\) and \(V(X)\).
4. **(B2-U7-L4-P04)** A token is marked; it is drawn **with replacement** \(3\) times, \(P(\text{marked})=\tfrac14\). Let \(X\) be the number of times the marked token appears. Find \(P(X=1)\) and \(P(X\ge1)\).
5. **(B2-U7-L4-P05)** *(near exam level)* A beginner scores on each attempt with probability \(p=0.6\), attempts independent, \(n=4\). Find \(P(X=3)\), \(P(X\ge1)\), and \(E(X)\).

#### Practice solutions
1. \(P(X=2)=\binom{3}{2}\big(\tfrac12\big)^2\big(\tfrac12\big)^1=3\cdot\tfrac14\cdot\tfrac12=\dfrac{3}{8}\).
2. \(P(X=0)=\big(\tfrac23\big)^5=\tfrac{32}{243}\); \(P(X=1)=\binom{5}{1}\big(\tfrac13\big)\big(\tfrac23\big)^4=5\cdot\tfrac13\cdot\tfrac{16}{81}=\tfrac{80}{243}\). So \(P(X\le1)=\tfrac{32+80}{243}=\dfrac{112}{243}\).
3. \(X\sim\mathcal B(10,0.1)\): \(E(X)=np=10\times0.1=1\); \(V(X)=npq=10\times0.1\times0.9=0.9\).
4. \(X\sim\mathcal B(3,\tfrac14),\ q=\tfrac34\). \(P(X=1)=\binom{3}{1}\big(\tfrac14\big)\big(\tfrac34\big)^2=3\cdot\tfrac14\cdot\tfrac{9}{16}=\tfrac{27}{64}\). \(P(X\ge1)=1-\big(\tfrac34\big)^3=1-\tfrac{27}{64}=\dfrac{37}{64}\).
5. \(X\sim\mathcal B(4,0.6),\ q=0.4\). \(P(X=3)=\binom{4}{3}(0.6)^3(0.4)=4\times0.216\times0.4=0.3456\). \(P(X\ge1)=1-(0.4)^4=1-0.0256=0.9744\). \(E(X)=np=4\times0.6=2.4\).

#### Lesson summary
- **Most important definition:** \(X\sim\mathcal B(n,p)\) counts successes in \(n\) independent identical trials with constant \(p\).
- **Most important formulas:** \(P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}\); \(E(X)=np\); \(V(X)=np(1-p)\).
- **Most important condition:** independence with a constant \(p\) (e.g. with replacement) — otherwise **not** binomial.
- **Most important pattern:** "exactly \(k\)" = one term; "at least one" \(=1-q^n\); expected count \(=np\).
- **Most common mistake:** dropping the \(\binom{n}{k}\) coefficient, or using \(\mathcal B(n,p)\) without replacement.
- **Quick self-check:** for \(X\sim\mathcal B(10,0.2)\), what is \(E(X)\)? *(Answer: \(np=2\).)*

---

<a id="b2-u7-test"></a>
### Chapter summary & review test — Unit 7

#### Chapter summary
The unit develops probability in four steps. **Conditional probability** \(P_B(A)=\dfrac{P(A\cap B)}{P(B)}\) lets us update odds given information; combined with **tree diagrams** it yields the **multiplication rule**, the **total-probability formula** over a partition, and **Bayes-style inversion**. **Random variables** attach a number \(X\) to each outcome; the **distribution** \(p_i=P(X=x_i)\) is summarised by \(E(X)=\sum x_ip_i\) and \(V(X)=\sum x_i^2p_i-\big(E(X)\big)^2\). **Independence** of events (\(P(A\cap B)=P(A)P(B)\)) extends to **random variables** (\(p_{ij}=p_ip_j\) for all cells). Finally, the **binomial law** \(\mathcal B(n,p)\) models the count of successes in \(n\) independent identical trials, with \(P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}\), \(E(X)=np\), \(V(X)=np(1-p)\).

#### Essential formulas
\[
P_B(A)=\frac{P(A\cap B)}{P(B)},\qquad P(A\cap B)=P(B)P_B(A),\qquad P(B)=\sum_i P(A_i)P_{A_i}(B),
\]
\[
E(X)=\sum_i x_ip_i,\qquad V(X)=\sum_i x_i^2p_i-\big(E(X)\big)^2,\qquad \sigma(X)=\sqrt{V(X)},
\]
\[
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k},\qquad E(X)=np,\qquad V(X)=np(1-p).
\]

#### Essential theorems/results
- **Total-probability formula** over a partition, and its Bayes inversion.
- Independence of events \(\iff P(A\cap B)=P(A)P(B)\); of random variables \(\iff p_{ij}=p_ip_j\) for all \(i,j\).
- Variance short-cut \(V(X)=\sum x_i^2p_i-\big(E(X)\big)^2\) (proved by expanding \((x_i-E(X))^2\)).
- Mean/variance of \(\mathcal B(n,p)\): \(E(X)=np\), \(V(X)=npq\) (mean proved via \(k\binom{n}{k}=n\binom{n-1}{k-1}\)).

#### Main problem patterns
Conditional-probability trees; total probability and Bayes inversion; building a distribution table and computing \(E,V,\sigma\); testing independence from a joint table; modelling by \(\mathcal B(n,p)\) and computing \(P(X=k)\), \(P(X\ge1)=1-q^n\), \(E(X)=np\).

#### Connections between the chapter's ideas
Conditional probability underlies **everything**: the multiplication rule builds tree paths, independence is the special case \(P_B(A)=P(A)\), and repeated **independent** trials produce the binomial law. Random variables package these events into numbers; expectation and variance summarise them. The binomial law is exactly "count the successes" over a partition of paths by their number of successes — total probability in disguise.

#### Recommended study order
Conditional probability & trees → total probability & Bayes → random variables (distribution, \(E\), \(V\)) → independence of events, then of random variables → binomial law (\(P(X=k)\), then \(E=np,\ V=npq\)).

#### Chapter checklist
- [ ] I read a tree: branches sum to 1, path = product, total probability = sum of paths.
- [ ] I invert a tree (Bayes) and distinguish independent from mutually exclusive.
- [ ] I build a distribution table (\(\sum p_i=1\)) and compute \(E(X),V(X),\sigma(X)\).
- [ ] I test independence of two random variables across **all** cells.
- [ ] I recognise a binomial situation and apply \(P(X=k)\), \(E=np\), \(V=npq\).

#### Chapter review test
1. A card is drawn from 52. \(A=\)"heart", \(B=\)"red card". Compute \(P_B(A)\) and \(P_A(B)\), and comment on whether they differ.
2. A disease affects \(20\%\) of a population; a test is positive on \(95\%\) of the ill and \(2\%\) of the healthy. Find the probability that a positive tester is actually ill.
3. A fair die is rolled; \(X=2\) on \(\{2,4,5,6\}\), \(X=1\) on \(\{3\}\), \(X=-1\) on \(\{1\}\). Find \(E(X)\) and \(V(X)\).
4. Two random variables have the joint table \(\big[p_{00}=\tfrac16,\,p_{01}=\tfrac13,\,p_{10}=\tfrac16,\,p_{11}=\tfrac13\big]\). Are \(X\) and \(Y\) independent?
5. \(X\sim\mathcal B\!\left(5,\tfrac13\right)\). Compute \(P(X=2)\), \(P(X\ge1)\), and \(E(X)\).
6. An archer hits with probability \(0.8\) per shot; \(4\) independent shots, \(X\) = hits. Find \(P(X=4)\), \(P(X\ge1)\), and \(E(X)\).
7. Are the die events \(A=\)"even" and \(B=\)"multiple of 3" independent? Justify.
8. For a game, the gain has table \(x:5,-1\) with \(p:\tfrac16,\tfrac56\). Find \(E(X)\) and state whether the game is fair.

#### Model solutions for the chapter review test
1. Every heart is red, so \(A\cap B=A\): \(P_B(A)=\dfrac{P(A)}{P(B)}=\dfrac{13/52}{26/52}=\dfrac12\). And \(P_A(B)=\dfrac{P(A\cap B)}{P(A)}=\dfrac{13/52}{13/52}=1\) (every heart is red). They differ: \(P_B(A)=\tfrac12\ne1=P_A(B)\), illustrating that conditioning is directional.
2. \(M\)="ill", \(T\)="positive": \(P(T)=0.2\times0.95+0.8\times0.02=0.19+0.016=0.206\). Then \(P_T(M)=\dfrac{0.19}{0.206}=\dfrac{95}{103}\approx0.922\).
3. Table \(x:-1,1,2\) with \(p:\tfrac16,\tfrac16,\tfrac46\). \(E(X)=\dfrac{-1+1+8}{6}=\dfrac{8}{6}=\dfrac43\); \(\sum x^2p=\dfrac{1+1+16}{6}=3\); \(V(X)=3-\big(\tfrac43\big)^2=3-\tfrac{16}{9}=\dfrac{11}{9}\).
4. Marginals: \(P(X=0)=\tfrac16+\tfrac13=\tfrac12=P(X=1)\); \(P(Y=0)=\tfrac16+\tfrac16=\tfrac13\), \(P(Y=1)=\tfrac13+\tfrac13=\tfrac23\). Check every cell: \(\tfrac12\cdot\tfrac13=\tfrac16=p_{00}\), \(\tfrac12\cdot\tfrac23=\tfrac13=p_{01}\), \(\tfrac12\cdot\tfrac13=\tfrac16=p_{10}\), \(\tfrac12\cdot\tfrac23=\tfrac13=p_{11}\). All hold ⇒ **independent**.
5. \(q=\tfrac23\). \(P(X=2)=\binom{5}{2}\big(\tfrac13\big)^2\big(\tfrac23\big)^3=10\cdot\tfrac{8}{243}=\dfrac{80}{243}\). \(P(X\ge1)=1-\big(\tfrac23\big)^5=1-\tfrac{32}{243}=\dfrac{211}{243}\). \(E(X)=np=\dfrac53\).
6. \(X\sim\mathcal B(4,0.8),\ q=0.2\). \(P(X=4)=(0.8)^4=\dfrac{256}{625}=0.4096\); \(P(X\ge1)=1-(0.2)^4=1-\tfrac{1}{625}=\dfrac{624}{625}=0.9984\); \(E(X)=4\times0.8=3.2\).
7. \(A=\{2,4,6\}\) so \(P(A)=\tfrac12\); \(B=\{3,6\}\) so \(P(B)=\tfrac13\); \(A\cap B=\{6\}\) so \(P(A\cap B)=\tfrac16\). Since \(P(A)P(B)=\tfrac12\cdot\tfrac13=\tfrac16=P(A\cap B)\), the events are **independent**.
8. \(E(X)=5\cdot\tfrac16+(-1)\cdot\tfrac56=\dfrac{5-5}{6}=0\). Since \(E(X)=0\), the game **is fair**.

---

<a id="formula-index"></a>
# Complete Formula Index

Organised by textbook then unit. For each formula: the expression, conditions/use with a short example, the common mistake, and a link to the lesson.

## Mathematics Textbook 1

### Unit 1 — Sequences ([lesson](#b1u1-l1))
| Formula | Conditions and use (example) | Common mistake |
|---|---|---|
| \(u_n=u_0+nr\) | arithmetic; find any term (\(u_0=2,r=3\Rightarrow u_5=17\)) | using it for a non-arithmetic sequence |
| \(S=\dfrac{n(a+\ell)}{2}\) | \(n\) = number of terms; arithmetic sum (\(1+\dots+100=5050\)) | confusing count with last index |
| \(u_n=u_0\,q^{n}\) | geometric (\(u_0=1,q=2\Rightarrow u_{10}=1024\)) | forgetting the ratio can be negative |
| \(S=a\dfrac{1-q^{n}}{1-q}\) | geometric, \(q\neq1\) (\(1+2+\dots+2^9=1023\)) | applying it at \(q=1\) (sum \(=na\)) |

### Unit 2 — Limits and Continuity
| Formula | Conditions and use | Common mistake | Lesson |
|---|---|---|---|
| limit of a polynomial at \(\pm\infty\) = limit of its leading term | to resolve \(\infty-\infty\) | keeping lower-order terms | [link](#b1u2-l1) |
| limit of a rational at \(\pm\infty\) = ratio of leading terms | \(\frac{2x^2+1}{x^2-3}\to2\) | dividing the degrees | [link](#b1u2-l1) |
| indeterminate forms \(\frac00,\frac\infty\infty,\infty-\infty,0\cdot\infty\) | a signal to change method (factor, conjugate) | treating \(\frac00\) as \(0\) or \(1\) | [link](#b1u2-l3) |
| oblique asymptote \(y=ax+b\): \(a=\lim\frac{f(x)}{x},\ b=\lim(f(x)-ax)\) | at \(\pm\infty\), if \(a\) finite nonzero | computing \(b\) before checking \(a\) | [link](#b1u2-l6) |
| continuity at \(a\): \(\lim_{x\to a}f(x)=f(a)\) | check both one-sided limits | forgetting \(f(a)\) must be defined | [link](#b1u2-l7) |

### Unit 3 — Differentiation ([definitions](#b1u3-l1))
| Formula | Use (example) | Common mistake |
|---|---|---|
| \(f'(a)=\lim\limits_{h\to0}\dfrac{f(a+h)-f(a)}{h}\) | definition; differentiability | — |
| \((x^n)'=nx^{n-1}\) | \((x^3)'=3x^2\) | \((x^n)'=x^{n-1}\) |
| \((\sqrt{x})'=\dfrac{1}{2\sqrt{x}}\), \(\left(\dfrac1x\right)'=-\dfrac1{x^2}\) | \(x>0\) for the root | dropping the minus sign |
| \((\sin x)'=\cos x,\ (\cos x)'=-\sin x,\ (\tan x)'=1+\tan^2x\) | — | \((\cos)'=\sin\) |
| \((uv)'=u'v+uv'\), \(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\) | \(v\neq0\) | forgetting the second term |
| tangent: \(y=f'(a)(x-a)+f(a)\) | tangent line at \(a\) | swapping \(f'(a)\) and \(f(a)\) |
| \((u^n)'=n\,u'\,u^{n-1}\), \((\sqrt u)'=\dfrac{u'}{2\sqrt u}\), \((v\circ u)'=u'\cdot(v'\circ u)\) | chain rule ([link](#b1u3-l3)) | forgetting \(u'\) |

### Unit 4 — Limits of Sequences ([link](#b1u4-l1))
| Formula | Conditions and use | Common mistake |
|---|---|---|
| \(\lim q^n\): \(0\) if \(|q|<1\); \(+\infty\) if \(q>1\); \(1\) if \(q=1\); no limit if \(q\le-1\) | convergence of geometric sequences | ignoring the \(q\le-1\) case |
| monotone and bounded ⇒ convergent | prove convergence without the limit ([link](#b1u4-l3)) | forgetting one of the two conditions |
| two adjacent sequences ⇒ common limit | \(u\nearrow, v\searrow, v-u\to0\) ([link](#b1u4-l4)) | not checking \(v_n-u_n\to0\) |
| \(u_{n+1}=f(u_n)\) convergent and \(f\) continuous ⇒ \(\ell=f(\ell)\) | to find the candidate limit | assuming the limit exists |

### Unit 5 — Natural Logarithm
| Formula | Conditions and use | Common mistake | Lesson |
|---|---|---|---|
| \((\ln x)'=\dfrac1x,\ \ln1=0\) | \(x>0\) | ignoring \(x>0\) | [link](#b1u5-l1) |
| \(\ln(ab)=\ln a+\ln b\), \(\ln\frac ab=\ln a-\ln b\), \(\ln a^n=n\ln a\) | \(a,b>0\) | \(\ln(a+b)=\ln a+\ln b\) is wrong | [link](#b1u5-l2) |
| \(\lim\limits_{x\to0^+}\ln x=-\infty,\ \lim\limits_{x\to+\infty}\ln x=+\infty,\ \ln e=1\) | \(e\approx2.718\) | — | [link](#b1u5-l3) |
| \((\ln u)'=\dfrac{u'}{u}\) | \(u>0\) | forgetting \(u'\) | [link](#b1u5-l4) |
| \(\lim\limits_{x\to+\infty}\dfrac{\ln x}{x}=0,\ \lim\limits_{x\to0^+}x\ln x=0,\ \lim\limits_{x\to0}\dfrac{\ln(1+x)}{x}=1\) | reference limits | — | [link](#b1u5-l4) |

### Unit 6 — Exponential Function
| Formula | Conditions and use | Common mistake | Lesson |
|---|---|---|---|
| \(e^{a+b}=e^ae^b,\ e^{\ln x}=x,\ \ln(e^x)=x\) | \(x>0\) in the second | \((e^x)^n=e^{x^n}\) is wrong | [link](#b1u6-l1) |
| \((e^x)'=e^x,\ (e^u)'=u'e^u\) | for all \(x\) | forgetting \(u'\) | [link](#b1u6-l1) |
| \(\lim\limits_{x\to-\infty}e^x=0,\ \lim\limits_{+\infty}\dfrac{e^x}{x}=+\infty,\ \lim\limits_{x\to0}\dfrac{e^x-1}{x}=1\) | reference limits; exp dominates polynomials | — | [link](#b1u6-l2) |
| \(a^x=e^{x\ln a},\ (a^x)'=\ln a\,a^x\) | \(a>0\) | \((a^x)'=x a^{x-1}\) is wrong | [link](#b1u6-l3) |
| \(y'=ay\Rightarrow y=Ce^{ax}\); \(y'=ay+b\Rightarrow y=Ce^{ax}-\dfrac ba\) | \(C\) from initial condition | forgetting the particular solution \(-b/a\) | [link](#b1u6-l4) |

### Unit 7 — Integration
| Formula | Conditions and use | Common mistake | Lesson |
|---|---|---|---|
| \(F'=f\); primitives \(F+c\) | for any continuous function | forgetting the constant \(c\) | [link](#b1u7-l1) |
| \(\int u'u^n=\dfrac{u^{n+1}}{n+1},\ \int\dfrac{u'}{u}=\ln|u|,\ \int u'e^u=e^u\) | \(n\neq-1\); \(u\neq0\) | forgetting \(u'\) in the numerator | [link](#b1u7-l2) |
| \(\int_a^b f=F(b)-F(a)\) | \(f\) continuous on \([a,b]\) | swapping the bounds | [link](#b1u7-l3) |
| \(\int_a^b uv'=[uv]_a^b-\int_a^b u'v\) | integration by parts | poor choice of \(u,v'\) | [link](#b1u7-l3) |
| area \(=\int_a^b|f|\); between curves \(\int_a^b(f-g)\) (\(f\ge g\)) | in area units | dropping the absolute value at a sign change | [link](#b1u7-l4) |
| volume of revolution \(V=\pi\int_a^b f(x)^2\,dx\) | rotation about the \(x\)-axis | forgetting \(\pi\) or the square | [link](#b1u7-l4) |

## Mathematics Textbook 2

### Unit 1 — Vectors in Space
| Formula | Use | Lesson |
|---|---|---|
| three vectors linearly dependent \(\iff\) coplanar | test coplanarity/basis | [link](#b2u1-l2) |
| \(AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}\) | distance, nature of a solid | [link](#b2u1-l4) |
| barycenter coordinates \(G=\dfrac{\sum\alpha_iA_i}{\sum\alpha_i}\) | \(\sum\alpha_i\neq0\) | [link](#b2u1-l5) |

### Unit 2 — Scalar Product
| Formula | Conditions and use | Lesson |
|---|---|---|
| \(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta=xx'+yy'+zz'\) | angle, lengths | [link](#b2u2-l1) |
| \(\vec u\perp\vec v\iff\vec u\cdot\vec v=0\) | orthogonality, normal vector | [link](#b2u2-l2) |
| plane with normal \(\vec n(a,b,c)\): \(ax+by+cz+d=0\) | \(d=-(ax_A+by_A+cz_A)\) | [link](#b2u2-l3) |
| point–plane distance \(=\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\) | absolute value in numerator | [link](#b2u2-l3) |

### Unit 3 — Lines and Planes
| Formula | Use | Lesson |
|---|---|---|
| line: \(M=A+t\vec u\) | parametric representation; intersections | [link](#b2u3-l2) |
| plane: \(M=A+t\vec u+s\vec v\) | \(\vec u,\vec v\) independent | [link](#b2u3-l2) |
| classify intersection of three planes (point/line/none) via a \(3\times3\) system | discussion | [link](#b2u3-l4) |

### Unit 4 — Complex Numbers
| Formula | Conditions and use | Common mistake | Lesson |
|---|---|---|---|
| \(i^2=-1,\ z=a+ib\) | algebraic form | \(i^2=1\) | [link](#b2u4-l1) |
| \(\bar z=a-ib,\ z\bar z=a^2+b^2=|z|^2\) | division by the conjugate | \(\overline{zz'}\neq\bar z+\bar z'\) | [link](#b2u4-l2) |
| \(|z|=\sqrt{a^2+b^2}\); \(z=r(\cos\theta+i\sin\theta)\) | trigonometric form | confusing modulus and argument | [link](#b2u4-l3) |
| \(|zz'|=|z||z'|,\ \arg(zz')=\arg z+\arg z'\ [2\pi]\) | product/quotient | adding the moduli | [link](#b2u4-l3) |
| \(e^{i\theta}=\cos\theta+i\sin\theta\); de Moivre \((\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta\) | powers | — | [link](#b2u4-l4) |
| \(\Delta<0\): \(z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}\) | real-coefficient quadratic | forgetting \(i\) | [link](#b2u4-l5) |

### Unit 5 — Complex Numbers in Geometry
| Formula | Use | Lesson |
|---|---|---|
| affix of \(\vec{AB}=z_B-z_A\); \(AB=|z_B-z_A|\) | distances | [link](#b2u5-l2) |
| \((\vec{AB},\vec{AC})=\arg\dfrac{z_C-z_A}{z_B-z_A}\ [2\pi]\) | angles; collinearity (real ratio), perpendicularity (pure imaginary) | [link](#b2u5-l2) |
| rotation: \(z'-\omega=e^{i\theta}(z-\omega)\); homothety: \(z'-\omega=k(z-\omega)\) | transformations; centre \(\omega=\frac{c}{1-a}\) | [link](#b2u5-l3) |

### Unit 6 — Combinatorics
| Formula | Use | Common mistake | Lesson |
|---|---|---|---|
| lists with repetition \(=n^p\); arrangements \(A_n^p=\dfrac{n!}{(n-p)!}\); permutations \(=n!\) | ordered; \(0!=1\) | mixing "with/without repetition" | [link](#b2u6-l1) |
| \(\binom{n}{p}=\dfrac{n!}{p!(n-p)!}\) | unordered (committees, subsets) | using an arrangement instead of a combination | [link](#b2u6-l2) |
| \(\binom{n}{p}=\binom{n}{n-p}\); Pascal \(\binom{n-1}{p-1}+\binom{n-1}{p}=\binom{n}{p}\) | simplification, Pascal's triangle | — | [link](#b2u6-l3) |
| \((a+b)^n=\sum_{k=0}^n\binom{n}{k}a^{n-k}b^k\) | binomial expansion; \(\sum\binom nk=2^n\) | errors in powers/coefficients | [link](#b2u6-l3) |

### Unit 7 — Probability
| Formula | Conditions and use | Common mistake | Lesson |
|---|---|---|---|
| \(P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\) | \(P(B)\neq0\); trees | reversing the condition | [link](#b2u7-l1) |
| \(P(A)=\sum_iP(B_i)P(A\mid B_i)\) | \((B_i)\) a partition | omitting a branch of the tree | [link](#b2u7-l1) |
| \(E(X)=\sum x_ip_i,\ V(X)=\sum p_ix_i^2-E(X)^2\) | \(\sum p_i=1\) | forgetting to square \(E(X)\) | [link](#b2u7-l2) |
| independence \(P(A\cap B)=P(A)P(B)\) | to compute an intersection of independent events | assuming independence without justification | [link](#b2u7-l3) |
| binomial \(P(X=k)=\binom nk p^k(1-p)^{n-k}\), \(E=np\), \(V=np(1-p)\) | \(n\) independent trials, fixed success probability \(p\) | using it without independence / constant \(p\) | [link](#b2u7-l4) |

---

<a id="theorem-index"></a>
# Theorem and Result Index

| Theorem | Conditions | Conclusion | Use / common mistake | Lesson |
|---|---|---|---|---|
| Principle of induction | \(E(n_0)\) true and \(E(p)\Rightarrow E(p+1)\) | \(E(n)\) for all \(n\ge n_0\) | proving formulas/divisibility; skipping the base | [link](#b1u1-l2) |
| Squeeze (comparison) theorem | \(g\le f\le h\) and \(g,h\to\ell\) | \(f\to\ell\) | limits with \(\sin,\cos\); not verifying the bounds | [link](#b1u2-l4) |
| Limit of a composite function | \(u\to b\), \(f\to\ell\) at \(b\) | \(f\circ u\to\ell\) | change of variable | [link](#b1u2-l5) |
| Differentiable ⇒ continuous | \(f\) differentiable at \(a\) | \(f\) continuous at \(a\) | converse false (\(|x|\) at 0) | [link](#b1u2-l7) |
| Intermediate Value Theorem | \(f\) continuous on \([a,b]\) | takes every value between \(f(a),f(b)\) | root existence; gives existence not uniqueness | [link](#b1u2-l8) |
| Root corollary | \(f\) continuous, \(f(a)f(b)<0\) | a root in \(]a,b[\); unique if \(f\) strictly monotone | solving \(f(x)=0\); forgetting monotonicity for uniqueness | [link](#b1u2-l8) |
| Sign of the derivative and monotonicity | \(f'>0\) on an interval | \(f\) strictly increasing there | variation table; confusing \(f\) with \(f'\) | [link](#b1u3-l2) |
| Local extremum | \(f'\) vanishes and changes sign at \(a\) | \(f\) has a local extremum at \(a\) | \(f'=0\) alone is not enough (\(x^3\)) | [link](#b1u3-l2) |
| Monotone bounded sequence | \((u_n)\) monotone and bounded | \((u_n)\) convergent | convergence without the limit | [link](#b1u4-l3) |
| Adjacent sequences | \(u\nearrow,v\searrow,v_n-u_n\to0\) | common limit, and \(u_n\le\ell\le v_n\) | bounding a number; forgetting \(v-u\to0\) | [link](#b1u4-l4) |
| Derivatives of \(\ln\) and exp | — | \((\ln x)'=1/x\), \((e^x)'=e^x\) | study of transcendental functions | [link](#b1u5-l3) |
| Solving \(y'=ay+b\) | \(a\neq0\) | \(y=Ce^{ax}-\frac ba\) | modelling; forgetting the particular solution | [link](#b1u6-l4) |
| Existence of primitives | \(f\) continuous on an interval | there is \(F\) with \(F'=f\), family \(F+c\) | integration; forgetting \(c\) | [link](#b1u7-l1) |
| Chasles relation and linearity | \(f\) continuous | \(\int_a^c=\int_a^b+\int_b^c\), \(\int(\alpha f+\beta g)=\alpha\int f+\beta\int g\) | splitting the interval | [link](#b1u7-l3) |
| Integration by parts | \(u,v\) continuously differentiable | \(\int_a^b uv'=[uv]_a^b-\int_a^b u'v\) | \(\int xe^x,\int\ln x\); bad choice of \(u\) | [link](#b1u7-l3) |
| Linear dependence / coplanarity | three vectors | dependent \(\iff\) coplanar | a basis of space | [link](#b2u1-l2) |
| Cartesian equation of a plane | a point and a normal \(\vec n\) | \(ax+by+cz+d=0\) | orthogonality, distance | [link](#b2u2-l3) |
| de Moivre | \(n\in\mathbb{Z}\) | \((\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta\) | powers, roots | [link](#b2u4-l4) |
| Roots of a quadratic (\(\Delta<0\)) | real coefficients | two conjugate complex roots | forgetting \(i\) or the square | [link](#b2u4-l5) |
| Binomial theorem | \(n\in\mathbb{N}\) | \((a+b)^n=\sum\binom nk a^{n-k}b^k\) | expanding powers, coefficients | [link](#b2u6-l3) |
| Total probability / Bayes | \((B_i)\) a partition | \(P(A)=\sum P(B_i)P(A\mid B_i)\) | trees, reversing the condition | [link](#b2u7-l1) |
| Binomial random variable | \(n\) independent trials, fixed \(p\) | \(P(X=k)=\binom nk p^kq^{n-k},\ E=np,\ V=npq\) | number of successes | [link](#b2u7-l4) |

**What the student must prove versus apply:** students are usually asked to prove sequence formulas by induction, to justify a function's monotonicity from the sign of its derivative, to derive the algebraic properties of \(\ln\) and \(\exp\) from the definition, and to check the conditions of the Intermediate Value Theorem before applying it. The IVT itself, the solution of the differential equation \(y'=ay\), and the existence of primitives for continuous functions are accepted and applied without a full proof.

---

<a id="problem-type-index"></a>
# Problem-Type Index

This index sorts every exam problem in the two books by its **mathematical type**, not by unit. For a question you cannot immediately place, read it, decide which of the types below it belongs to, then follow that type's plan. Many exam questions are **composite** (several types chained); see the last type and the [Composite Problem Strategies](#composite-strategies) section. Types are ordered roughly as they appear across Textbook 1 then Textbook 2.

Legend for each entry: **How to recognise it** · **Standard plan** · **Typical first step** · **Required checks** · **Common mistakes** · **Representative example** · **Links to lessons**.

---

## 1. Computational problems
Direct application of a formula or an algorithm with no discussion.

- **How to recognise it:** the verb is "compute", "find the value", "expand", "simplify"; a single unknown, no parameter, no proof.
- **Standard plan:** identify the right formula → substitute the given data → simplify → state a clean final value.
- **Typical first step:** write the general formula symbolically before plugging in numbers.
- **Required checks:** units/domain of the formula (e.g. \(q\neq1\) for a geometric sum), and a sanity check of the order of magnitude.
- **Common mistakes:** using an arithmetic formula on a geometric object; forgetting a condition of validity.
- **Representative example:** an arithmetic sequence has \(u_0=2,\ r=3\); compute \(u_5=17\) and \(u_0+\dots+u_5\).
- **Links to lessons:** [sequences](#b1u1-l1), [scalar product](#b2u2-l1), [complex algebra](#b2u4-l1), whole units [B1-U1](#b1-u1) and [B2-U4](#b2-u4).

## 2. Proof by induction
Establishing a statement \(E(n)\) for every \(n\ge n_0\).

- **How to recognise it:** "prove that for all \(n\)…", a formula or a divisibility depending on \(n\), a recursively defined sequence.
- **Standard plan:** state \(E(n)\) → **base** \(E(n_0)\) → **assume** \(E(p)\) → **prove** \(E(p+1)\) using the assumption → conclude.
- **Typical first step:** write \(E(n)\) explicitly and verify \(E(n_0)\) numerically.
- **Required checks:** the base case is genuinely checked; the inductive step actually uses the hypothesis; the conclusion sentence names the range \(n\ge n_0\).
- **Common mistakes:** skipping the base; "proving" \(E(p+1)\) without using \(E(p)\); shifting the index wrongly.
- **Representative example:** prove \(1+2+\dots+n=\dfrac{n(n+1)}{2}\) for all \(n\ge1\).
- **Links to lessons:** [principle of induction](#b1u1-l2), and recurrent sequences in [B1-U1](#b1-u1).

## 3. Geometric / algebraic proof
Proving an identity, an equality of sets, an alignment, an orthogonality, or a property "by hand".

- **How to recognise it:** "show that", "deduce that", "prove that the triangle is…", with no numerical answer expected.
- **Standard plan:** translate the hypothesis into equations/vectors → transform equivalently → reach the desired conclusion → justify each step by a named rule.
- **Typical first step:** choose the cleanest representation (affix, vector, coordinates) and restate the goal in it.
- **Required checks:** every implication is reversible when the statement is an equivalence; no division by a possibly-zero quantity.
- **Common mistakes:** assuming what must be proved; using a special case as if general; dropping a case.
- **Representative example:** show \(\overline{zz'}=\bar z\,\bar z'\) from the algebraic definition of the conjugate.
- **Links to lessons:** [conjugate properties](#b2u4-l2), [angles via affixes](#b2u5-l2), [coplanarity](#b2u1-l2).

## 4. Discussion & parameter problems
A parameter \(m\) (or \(a\)) changes the number/nature of solutions.

- **How to recognise it:** a letter other than the unknown appears; "discuss according to the values of \(m\)", "for which \(m\)…".
- **Standard plan:** isolate the parameter → find the critical values that change behaviour → split into cases → describe each case → gather results in a small table.
- **Typical first step:** rewrite the condition as "\(g(x)=m\)" (or study the sign of a discriminant \(\Delta(m)\)).
- **Required checks:** every real value of \(m\) is covered; boundary values are treated separately; excluded values (domain) are stated.
- **Common mistakes:** losing the boundary case; confusing "no solution" with "solution not in the domain".
- **Representative example:** discuss the number of roots of \(x^2-mx+1=0\) via the sign of \(\Delta=m^2-4\).
- **Links to lessons:** [root corollary / IVT](#b1u2-l8), [quadratics with \(\Delta<0\)](#b2u4-l5), [three-plane systems](#b2u3-l4).

## 5. Domain-finding
Determining \(D_f\) before any study.

- **How to recognise it:** a fraction, a square root, a \(\ln\), a \(\tan\), or "give the domain of definition".
- **Standard plan:** list the constraints (denominator \(\neq0\), radicand \(\ge0\), argument of \(\ln>0\)) → solve each → intersect them.
- **Typical first step:** underline every sub-expression that restricts the domain.
- **Required checks:** intersect (not union) the constraints; write the answer as intervals; note excluded points that will matter for limits.
- **Common mistakes:** allowing \(\ln\) of \(0\) or a negative; forgetting the denominator when a root sits over a fraction.
- **Representative example:** \(f(x)=\ln(x-1)\) has \(D_f=\,]1,+\infty[\).
- **Links to lessons:** [ln domain](#b1u5-l1), [continuity](#b1u2-l7), and used at the start of every [full study](#composite-strategies).

## 6. Sign analysis
Determining where an expression is positive/negative.

- **How to recognise it:** "study the sign of", or it is a hidden sub-step (sign of \(f'\), of \(f-g\), of a product).
- **Standard plan:** factor completely → find the zeros of each factor → build a sign table → read off the sign of the product/quotient.
- **Typical first step:** factor; never keep an unfactored sum.
- **Required checks:** include the zeros as separate columns; respect the domain; a squared factor keeps a constant sign.
- **Common mistakes:** multiplying signs wrongly; forgetting a factor changes sign only at its own root.
- **Representative example:** the sign of \(x^2-1=(x-1)(x+1)\) is \(+,-,+\) across \(-1\) and \(1\).
- **Links to lessons:** [sign of the derivative](#b1u3-l2), [area between curves needs \(f-g\) sign](#b1u7-l4).

## 7. Limits
Evaluating \(\lim f\) at a bound or a special point.

- **How to recognise it:** "compute the limit", "study the behaviour at \(+\infty\)/at \(a\)"; an indeterminate form is likely.
- **Standard plan:** substitute → if determinate, done → if indeterminate \(\left(\frac00,\frac\infty\infty,\infty-\infty,0\cdot\infty\right)\), change the form (leading term, factor, conjugate, reference limit) → conclude, with one-sided limits if needed.
- **Typical first step:** name the indeterminate form explicitly; that dictates the technique.
- **Required checks:** distinguish left/right at a vertical bound; use the right reference limit (\(\frac{\ln x}{x}\to0\), \(\frac{e^x}{x}\to+\infty\)); apply the squeeze theorem only after bounding.
- **Common mistakes:** treating \(\frac00\) as \(0\) or \(1\); keeping lower-order terms at \(\infty\); ignoring the \(q\le-1\) case for \(q^n\).
- **Representative example:** \(\dfrac{2x^2+1}{x^2-3}\to2\) as \(x\to+\infty\).
- **Links to lessons:** [limits of polynomials/rationals](#b1u2-l1), [indeterminate forms](#b1u2-l3), [squeeze theorem](#b1u2-l4), [composite limits](#b1u2-l5), [sequence limits](#b1u4-l1), [ln limits](#b1u5-l3), [exp limits](#b1u6-l2).

## 8. Derivatives
Computing \(f'\) or a tangent line.

- **How to recognise it:** "differentiate", "the tangent at \(a\)", "the equation of the tangent", or \(f'\) is needed for a variation study.
- **Standard plan:** identify the structure (product, quotient, composite, \(u^n\), \(\ln u\), \(e^u\)) → apply the matching rule → simplify \(f'\) into a factored form ready for sign analysis.
- **Typical first step:** decide which differentiation rule the expression's outermost operation calls for.
- **Required checks:** the domain of differentiability (\(x>0\) for \(\sqrt x\) and \(\ln\)); never drop the inner factor \(u'\).
- **Common mistakes:** \((x^n)'=x^{n-1}\); \((\cos)'=\sin\); forgetting the second term of a product/quotient; forgetting \(u'\) in a chain rule.
- **Representative example:** the tangent to \(f\) at \(a\) is \(y=f'(a)(x-a)+f(a)\).
- **Links to lessons:** [definition of derivative](#b1u3-l1), [derivative rules & sign](#b1u3-l2), [chain rule](#b1u3-l3), [(\ln u)'](#b1u5-l4), [(e^u)'](#b1u6-l1).

## 9. Full function study
The flagship composite problem of Book 1.

- **How to recognise it:** "study the function \(f\) and draw its curve", usually a multi-part question with a graph at the end.
- **Standard plan:** the full pipeline — domain → limits → \(f'\) → sign of \(f'\) → variation table → asymptotes → key points → graph → exploit the study. See [the pipeline](#composite-strategies).
- **Typical first step:** determine \(D_f\); it drives every later part.
- **Required checks:** limits agree with the asymptotes; the variation table is consistent with the sign of \(f'\); each later part reuses an earlier result.
- **Common mistakes:** studying the sign of \(f\) instead of \(f'\); a table that contradicts the computed limits.
- **Representative example:** study \(f(x)=\dfrac{\ln x}{x}\) on \(]0,+\infty[\): maximum at \(x=e\), \(f\to0\) at \(+\infty\).
- **Links to lessons:** [limits/continuity](#b1-u2), [differentiation](#b1-u3), [ln](#b1-u5), [exp](#b1-u6), and the [composite pipeline](#composite-strategies).

## 10. Graphing
Producing the curve, tangents, and asymptotes.

- **How to recognise it:** "draw \(C_f\)", "plot the tangent at \(0\)", "show the asymptote".
- **Standard plan:** place the asymptotes → plot a few exact points (intercepts, extrema, the tangent point) → respect the variation table's arrows → draw a smooth curve approaching the asymptotes.
- **Typical first step:** draw the asymptotes as dashed guides first.
- **Required checks:** the curve stays on the correct side of each asymptote; monotonicity matches the table; extrema land at the tabulated values.
- **Common mistakes:** crossing an asymptote wrongly; a curve inconsistent with the arrows; sloppy tangent slope.
- **Representative example:** with a horizontal asymptote \(y=0\) and a maximum at \((e,1/e)\), sketch \(x\mapsto\dfrac{\ln x}{x}\).
- **Links to lessons:** [oblique asymptote](#b1u2-l6), [variation from \(f'\)](#b1u3-l2), and the [graph step](#composite-strategies).

## 11. Integrals & areas
Antiderivatives, definite integrals, areas, and volumes.

- **How to recognise it:** "find a primitive", "compute \(\int_a^b\)", "the area between the curves", "the volume of revolution".
- **Standard plan:** recognise the integral's form (standard primitive, \(\frac{u'}{u}\), \(u'u^n\), \(u'e^u\), or integration by parts) → find \(F\) → evaluate \(F(b)-F(a)\) → for an area take \(\int|f|\) or \(\int(f-g)\) with \(f\ge g\).
- **Typical first step:** match the integrand to a known primitive pattern, or choose \(u,v'\) for parts.
- **Required checks:** \(f\) continuous on \([a,b]\); bounds in the right order; absolute value / correct top curve for an area; keep \(\pi\) and the square for a volume.
- **Common mistakes:** forgetting the constant for a primitive; dropping \(u'\); swapping the bounds; omitting the sign change of \(f\) in an area.
- **Representative example:** \(\displaystyle\int_1^e\frac{1}{x}\,dx=[\ln x]_1^e=1\).
- **Links to lessons:** [primitives](#b1u7-l1), [standard forms](#b1u7-l2), [definite integral & parts](#b1u7-l3), [areas & volumes](#b1u7-l4), whole unit [B1-U7](#b1-u7).

## 12. Space geometry (vectors, scalar product, lines/planes)
Coordinate geometry in 3D.

- **How to recognise it:** points/vectors with three coordinates, "coplanar", "the plane through…", "the distance from a point to a plane", "the intersection of a line and a plane".
- **Standard plan:** fix a frame → write components → use the scalar product for angles/orthogonality/lengths → write line/plane equations → solve for intersections and distances.
- **Typical first step:** compute the coordinates of the vectors you actually need (e.g. \(\vec{AB},\vec{AC}\)).
- **Required checks:** a normal is really orthogonal (\(\vec n\cdot\vec u=0\)); the distance formula has an absolute value in the numerator; independence of \(\vec u,\vec v\) for a plane.
- **Common mistakes:** confusing a line's direction with a plane's normal; sign slips in \(xx'+yy'+zz'\); forgetting the absolute value in a distance.
- **Representative example:** the distance from \(O\) to \(x+2y+2z-6=0\) is \(\dfrac{|-6|}{\sqrt{1+4+4}}=2\).
- **Links to lessons:** [coplanarity](#b2u1-l2), [distance/nature of a solid](#b2u1-l4), [scalar product](#b2u2-l1), [normal & plane equation & distance](#b2u2-l3), [parametric line/plane](#b2u3-l2), [three-plane discussion](#b2u3-l4), units [B2-U1](#b2-u1)–[B2-U3](#b2-u3).

## 13. Complex-number computation
Algebra in \(\mathbb{C}\): forms, modulus, argument, powers, roots.

- **How to recognise it:** "put \(z\) in algebraic form", "modulus and argument", "solve in \(\mathbb{C}\)", a power \(z^n\).
- **Standard plan:** algebraic form (multiply by the conjugate to divide) → modulus \(|z|\) and argument → trigonometric/exponential form for powers (de Moivre) → solve equations, using \(\Delta<0\) for real-coefficient quadratics.
- **Typical first step:** reduce \(z\) to \(a+ib\) with real \(a,b\), or to \(r e^{i\theta}\), whichever the question needs.
- **Required checks:** \(i^2=-1\); \(z\bar z=|z|^2\); the argument is given modulo \(2\pi\); the two roots of a \(\Delta<0\) quadratic are conjugate.
- **Common mistakes:** \(i^2=1\); adding moduli of a product; confusing modulus and argument; forgetting \(i\) in the roots.
- **Representative example:** \(|z|=\sqrt{a^2+b^2}\); for \(z=1+i\), \(|z|=\sqrt2\) and \(\arg z=\frac\pi4\).
- **Links to lessons:** [algebraic form](#b2u4-l1), [conjugate/modulus](#b2u4-l2), [trig form](#b2u4-l3), [de Moivre](#b2u4-l4), [quadratics \(\Delta<0\)](#b2u4-l5), whole unit [B2-U4](#b2-u4).

## 14. Complex-number geometry
Using affixes to prove geometric facts and describe transformations.

- **How to recognise it:** points given by affixes; "show the triangle is…", "the nature of \(ABC\)", "the rotation/homothety with affix map \(z'=az+b\)".
- **Standard plan:** affix of \(\vec{AB}=z_B-z_A\) → lengths via \(|z_B-z_A|\) → angles via \(\arg\dfrac{z_C-z_A}{z_B-z_A}\) → identify a transformation and its centre.
- **Typical first step:** compute the relevant differences of affixes.
- **Required checks:** collinearity ⇔ the ratio is real; perpendicularity ⇔ it is pure imaginary; centre of a similarity \(\omega=\dfrac{c}{1-a}\).
- **Common mistakes:** reversing the ratio's order; confusing rotation angle with modulus; misplacing the fixed point.
- **Representative example:** if \(\dfrac{z_C-z_A}{z_B-z_A}=i\), then \(AB=AC\) and \((\vec{AB},\vec{AC})=\frac\pi2\) — right isosceles.
- **Links to lessons:** [affixes, distances, angles](#b2u5-l2), [rotation & homothety](#b2u5-l3), whole unit [B2-U5](#b2-u5).

## 15. Counting (combinatorics)
Counting arrangements, permutations, and combinations.

- **How to recognise it:** "how many ways", "number of committees/codes/hands"; the answer is an integer count.
- **Standard plan:** decide **ordered vs unordered** and **repetition allowed vs not** → pick the model (\(n^p\), \(A_n^p\), \(n!\), \(\binom{n}{p}\)) → multiply independent choices → add mutually exclusive cases.
- **Typical first step:** ask "does order matter, and can items repeat?" — that single question selects the formula.
- **Required checks:** the product rule for successive independent choices, the sum rule for disjoint cases; \(0!=1\); \(\binom{n}{p}=\binom{n}{n-p}\) to simplify.
- **Common mistakes:** using an arrangement where a combination is meant (or vice versa); mixing "with/without repetition".
- **Representative example:** the number of \(3\)-member committees from \(10\) people is \(\binom{10}{3}=120\).
- **Links to lessons:** [lists/arrangements/permutations](#b2u6-l1), [combinations](#b2u6-l2), [Pascal & binomial theorem](#b2u6-l3), whole unit [B2-U6](#b2-u6).

## 16. Probability (conditional, random variable, binomial)
Trees, total probability, distributions, and the binomial law.

- **How to recognise it:** "probability that…", a tree, "draw with/without replacement", "\(X\) counts…", "\(n\) independent trials".
- **Standard plan:** model with a tree → conditional \(P(A\mid B)\) and total probability \(P(A)=\sum P(B_i)P(A\mid B_i)\) → define the random variable, its law, \(E(X)\), \(V(X)\) → recognise a binomial \(X\sim\mathcal B(n,p)\) when trials are independent with fixed \(p\).
- **Typical first step:** draw the tree (or the partition) and label every branch probability.
- **Required checks:** \(P(B)\neq0\) before conditioning; branch probabilities on each fork sum to \(1\); \(\sum p_i=1\) for a law; independence and constant \(p\) before using the binomial.
- **Common mistakes:** reversing the condition; omitting a branch in total probability; forgetting to square \(E(X)\) in \(V(X)\); using the binomial without independence.
- **Representative example:** for \(X\sim\mathcal B(5,\tfrac12)\), \(P(X=k)=\binom{5}{k}\left(\tfrac12\right)^5\), \(E(X)=2.5\).
- **Links to lessons:** [conditional & total probability](#b2u7-l1), [random variable, E, V](#b2u7-l2), [independence](#b2u7-l3), [binomial law](#b2u7-l4), whole unit [B2-U7](#b2-u7).

## 17. Multi-part composite problems
The standard long-exam question that chains several of the above types.

- **How to recognise it:** parts labelled 1), 2), 3)… where each part feeds the next; a mix of "compute / show / deduce / draw".
- **Standard plan:** read the whole question first → identify each part's type → solve in order, **storing each result to reuse it** → let "deduce" signal that a previous result is the key.
- **Typical first step:** map every sub-part to a type from this index before writing anything.
- **Required checks:** a "deduce" part must actually invoke an earlier one; carry exact values (not rounded) between parts; keep notation consistent throughout.
- **Common mistakes:** re-deriving from scratch what an earlier part already gave; changing notation midway; ignoring a hint hidden in an earlier part.
- **Representative example:** study \(f(x)=\dfrac{\ln x}{x}\), then **deduce** the number of solutions of \(\ln x=x\) (there are none, since the maximum of \(f\) is \(1/e<1\)).
- **Links to lessons:** the [Composite Problem Strategies](#composite-strategies) section, and any pairing across [B1](#b1-u1) and [B2](#b2-u1).

---

<a id="composite-strategies"></a>
# Composite Problem Strategies

Long problems are not harder facts — they are several ordinary steps **wired together**, where each part hands its result to the next. The skill is to (a) split the problem into stages, (b) solve each stage with its own plan from the [Problem-Type Index](#problem-type-index), and (c) **store and reuse** every intermediate result. Below is the master pipeline for a function study, followed by shorter multi-stage strategies for complex numbers, probability, and space geometry.

## The function-study pipeline
This is the backbone of Book 1 exams. Follow the eight steps in order; each one uses the previous.

1. **Domain \(D_f\).** Collect the constraints (denominator \(\neq0\), radicand \(\ge0\), \(\ln\) argument \(>0\)) and intersect them. Everything afterwards lives on \(D_f\). See [domain-finding](#b1u5-l1), [continuity](#b1u2-l7).
2. **Limits at the bounds and special points.** Compute \(\lim f\) at each end of \(D_f\) and on each side of every excluded point. Name and resolve indeterminate forms with the leading term, a conjugate, or a reference limit (\(\frac{\ln x}{x}\to0\), \(\frac{e^x}{x}\to+\infty\)). See [limits](#b1u2-l1), [indeterminate forms](#b1u2-l3), [ln limits](#b1u5-l3), [exp limits](#b1u6-l2).
3. **Derivative \(f'\).** Differentiate with the right rule (product, quotient, chain, \((\ln u)'=\frac{u'}{u}\), \((e^u)'=u'e^u\)) and **simplify into a factored form**, because you are about to read its sign. See [derivative rules](#b1u3-l2), [chain rule](#b1u3-l3).
4. **Sign of \(f'\).** Factor \(f'\), find its zeros, build a sign table on \(D_f\). This sign *is* the monotonicity of \(f\). See [sign of the derivative](#b1u3-l2), [sign analysis](#b1u3-l2).
5. **Variation table.** In one table put \(x\) across \(D_f\), the sign of \(f'\), the arrows of \(f\), and the limit/extremum values at every column. Extrema occur where \(f'\) vanishes **and changes sign**.
6. **Asymptotes.** Vertical where a limit is \(\pm\infty\) at a finite point; horizontal \(y=\ell\) where \(\lim_{\pm\infty}f=\ell\); oblique \(y=ax+b\) with \(a=\lim\frac{f(x)}{x}\) (finite nonzero) then \(b=\lim(f(x)-ax)\) — check \(a\) before \(b\). See [oblique asymptote](#b1u2-l6).
7. **Key points & graph.** Plot intercepts, extrema, and any tangent asked for (\(y=f'(a)(x-a)+f(a)\)); draw the asymptotes first, then a smooth curve matching the table's arrows. See [graphing / variation](#b1u3-l2).
8. **Exploit the study.** Use the finished table/graph to solve an equation or inequality, or to count roots: an equation \(f(x)=m\) has as many solutions as horizontal line \(y=m\) meets the curve; the sign of \(f\) gives an inequality; monotonicity + IVT gives existence and uniqueness of a root. See [root corollary / IVT](#b1u2-l8).

> **Exam-style insight:** almost every final part begins with "deduce" — it is telling you to *reuse* the table or a value you already produced, not to start again.

Related integration follow-up: if a later part asks for an area or a primitive of the studied \(f\), switch to [integrals & areas](#b1u7-l4) but keep the same \(D_f\) and sign information.

## Complex-number multi-part problem
Stages: **algebraic form → modulus/argument → geometry/transformation.**

1. **Algebraic form.** Reduce every \(z\) to \(a+ib\) with real \(a,b\); to divide, multiply by the conjugate (\(z\bar z=|z|^2\)). Solve any equation here, using \(\Delta<0\) for a real-coefficient quadratic (conjugate roots). See [algebraic form](#b2u4-l1), [conjugate/modulus](#b2u4-l2), [quadratics \(\Delta<0\)](#b2u4-l5).
2. **Modulus and argument.** Compute \(|z|=\sqrt{a^2+b^2}\) and \(\arg z\ [2\pi]\); switch to \(re^{i\theta}\) for powers via de Moivre. Reuse the \(a,b\) from stage 1. See [trigonometric form](#b2u4-l3), [de Moivre](#b2u4-l4).
3. **Geometry / transformation.** Place the affixes as points, get distances \(|z_B-z_A|\) and angles \(\arg\frac{z_C-z_A}{z_B-z_A}\), then read off the shape or identify the map \(z'-\omega=e^{i\theta}(z-\omega)\) (rotation) or \(z'-\omega=k(z-\omega)\) (homothety), with centre \(\omega=\frac{c}{1-a}\). See [affixes/angles](#b2u5-l2), [rotation & homothety](#b2u5-l3).

Reuse rule: the modulus and argument from stage 2 are exactly what stage 3 needs for lengths and angles — never recompute them.

## Probability multi-part problem
Stages: **tree → conditional/total probability → random variable → \(E,V\) → binomial.**

1. **Tree.** Draw the experiment as a tree (or a partition \((B_i)\)); label each branch, checking the branches on each fork sum to \(1\). See [trees & conditional probability](#b2u7-l1).
2. **Conditional / total probability.** Read \(P(A\cap B)=P(B)P(A\mid B)\) along a path; combine paths with total probability \(P(A)=\sum_i P(B_i)P(A\mid B_i)\); reverse a condition only via \(P(A\mid B)=\frac{P(A\cap B)}{P(B)}\). See [total probability](#b2u7-l1).
3. **Random variable.** Define \(X\), list its values, and build its law from the tree probabilities (\(\sum p_i=1\)). See [random variable](#b2u7-l2).
4. **Expectation and variance.** \(E(X)=\sum x_ip_i\), \(V(X)=\sum p_ix_i^2-E(X)^2\) (remember to square \(E(X)\)). See [E and V](#b2u7-l2).
5. **Binomial.** If the experiment is \(n\) **independent** trials with a **fixed** success probability \(p\), then \(X\sim\mathcal B(n,p)\): \(P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}\), \(E=np\), \(V=np(1-p)\) — jumping straight here saves the whole tree. See [independence](#b2u7-l3), [binomial law](#b2u7-l4).

Reuse rule: the branch probabilities from stage 1 are the \(p_i\) of the law in stage 3; the same \(p\) drives the binomial in stage 5.

## Space-geometry problem
Stages: **choose a frame → components → scalar product / plane equation → intersections & distances.**

1. **Choose a frame.** Pick (or accept) an orthonormal frame; write the coordinates of the given points. See [vectors in space](#b2u1-l1).
2. **Components.** Compute the vectors you need, e.g. \(\vec{AB},\vec{AC}\); test coplanarity/independence when a basis or plane is involved. See [coplanarity](#b2u1-l2), [distance](#b2u1-l4).
3. **Scalar product / plane equation.** Use \(\vec u\cdot\vec v=xx'+yy'+zz'\) for angles, lengths, and orthogonality; build a plane from a point and a normal \(\vec n\): \(ax+by+cz+d=0\) with \(d=-(ax_A+by_A+cz_A)\). See [scalar product](#b2u2-l1), [plane equation](#b2u2-l3).
4. **Intersections & distances.** Parametrise a line \(M=A+t\vec u\), substitute into a plane to find the intersection; classify three planes via a \(3\times3\) system; use \(\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\) for a point–plane distance. See [parametric line/plane](#b2u3-l2), [three-plane discussion](#b2u3-l4), [distance](#b2u2-l3).

Reuse rule: the normal \(\vec n\) found in stage 3 reappears in every distance and angle in stage 4 — compute it once.

## How to split a long problem and reuse results
- **Read to the end first.** Map each part to a type from the [index](#problem-type-index); spot which parts say "deduce" or "hence" — those depend on earlier parts.
- **Name and store results.** Give each intermediate value a name and keep it **exact**; a rounded modulus or a lost factor breaks the next stage.
- **Let the verbs guide you.** "Compute/show" = do the work now; "deduce/hence" = reuse a result you already have; "discuss" = split into cases.
- **Check the chain.** Before finishing, confirm every "deduce" actually used a prior result and that notation stayed consistent from part 1 to the last.

---

<a id="common-mistakes"></a>
# Common Mistakes Across the Curriculum

This section gathers the errors that repeatedly cost marks, sorted by cause rather than by unit. Read it once now, then again the night before the exam: most of what separates a full solution from a half solution is here, not in any new theorem. Each item names the mistake and shows the corrected version.

### Misreading the question

- **Answering a different question.** A problem asks to *study the sign* of \(f\) but the student computes the roots and stops; another asks for the *number* of solutions of \(f(x)=k\) but the student solves \(f(x)=0\). Corrected: underline the exact verb (*prove, deduce, discuss, calculate, interpret*) and answer that verb. "Deduce" almost always means *reuse the previous part* — no new work.
- **Ignoring the given data.** The statement says "\(f\) is continuous on \([0,1]\)" or "the trials are independent" precisely because you will need it. Corrected: list every hypothesis before starting; if a phrase looks redundant, it is usually the key to a theorem.
- **Confusing the object asked for.** Returning a point when a vector is required, a modulus when an argument is required, \(E(X)\) when \(V(X)\) is required. Corrected: write the final answer with its name and, where relevant, its unit (area units, for instance).

### Ignoring the domain

- **\(\ln\) without \(x>0\).** Solving \(\ln(x-3)=1\) and writing \(x=3+e\) is fine, but solving \(\ln(x^2-1)=0\) and keeping both \(x=\pm\sqrt2\) without stating the domain \(x^2-1>0\) is incomplete. Corrected: **before** any manipulation, state \(\{x:\ x-3>0\}\), i.e. \(x>3\); reject any solution outside it.
- **Denominator \(=0\) or even root of a negative.** In \(\dfrac{x+1}{x-2}\) the value \(x=2\) is excluded; in \(\sqrt{x-1}\) we need \(x\ge1\). Corrected: the domain of a quotient excludes the zeros of the denominator, and the domain of \(\sqrt{u}\) requires \(u\ge0\). A "solution" that leaves the domain is not a solution.
- **Forgetting the domain when studying a function.** You cannot fill a variation table on \(\mathbb{R}\) if \(f(x)=\dfrac{\ln x}{x}\): the domain is \(]0,+\infty[\). Corrected: determine \(D_f\) first; all limits, asymptotes and monotonicity are read only on \(D_f\).

### Applying a theorem without checking its conditions

- **IVT / root corollary without continuity or a sign change.** Concluding "there is a root" without saying \(f\) is *continuous* on \([a,b]\) and \(f(a)f(b)<0\), or claiming the root is *unique* without *strict monotonicity*. Corrected: state the three ingredients — continuity, opposite signs at the endpoints, and (for uniqueness) strict monotonicity — then conclude.
- **"Monotone \(\Rightarrow\) convergent."** A monotone sequence converges only if it is also **bounded**. Corrected: a decreasing sequence bounded below by \(m\) converges; an increasing unbounded sequence tends to \(+\infty\). Always pair *monotone* with *bounded*.
- **Independence assumed, not justified.** Writing \(P(A\cap B)=P(A)P(B)\) because the events "feel unrelated." Corrected: independence must be *given* or *proved* (e.g. drawing with replacement); with a tree of successive draws without replacement, use the conditional \(P(A\cap B)=P(A)\,P(B\mid A)\) instead.

### Algebra and sign errors

- **Sign of an expanded product.** \(-(x-3)=-x+3\), not \(-x-3\); \((a-b)^2=a^2-2ab+b^2\), not \(a^2-b^2\). Corrected: expand slowly and keep the middle term; a quick check with one numerical value catches most sign slips.
- **Dividing an inequality by a negative number.** From \(-2x<6\) it follows that \(x>-3\) (the sign flips), not \(x<-3\). Corrected: whenever you multiply or divide an inequality by a quantity, decide its sign first; if the sign is unknown, split into cases.
- **Square-rooting both sides.** \(x^2=9\) gives \(x=\pm3\), not only \(x=3\); and \(\sqrt{x^2}=|x|\), not \(x\). Corrected: a square hides two signs — keep both and then filter with the domain.

### Wrong interval notation

- **Open versus closed at an excluded point.** If \(f'\) vanishes at \(2\) and the domain excludes \(2\), the function is increasing on \(]2,+\infty[\), written with a bracket that *opens* at \(2\). Corrected: an endpoint where the function is undefined, or an infinite endpoint, is always open: \(]0,+\infty[\), never \([0,+\infty]\).
- **Union instead of intersection (and vice versa).** The set where "\(x>1\) **and** \(x<4\)" is \(]1,4[\); the set where "\(x<1\) **or** \(x>4\)" is \(]-\infty,1[\cup]4,+\infty[\). Corrected: *and* is intersection, *or* is union; a solution set for a domain of \(\ln\) with two conditions is their **intersection**.

### Invalid cancellation

- **Cancelling across an addition.** \(\dfrac{x+2}{x}\neq 2\); you may only cancel a **common factor**, not a term of a sum. Corrected: \(\dfrac{x(x+2)}{x}=x+2\) (for \(x\neq0\)) is legal because \(x\) is a factor of the whole numerator.
- **Cancelling a possibly-zero factor.** From \(x(x-1)=0\) you cannot divide by \(x\) to get \(x=1\); you would lose the solution \(x=0\). Corrected: never divide an equation by an expression that may be zero — factor and set each factor to zero instead.

### Extraneous solutions

- **Solutions introduced by squaring or by \(\exp\).** Squaring \(\sqrt{x}=x-2\) gives \(x=1\) or \(x=4\), but \(x=1\) does not satisfy the original equation. Corrected: after squaring, taking \(\exp\) of both sides, or clearing a denominator, **substitute back** and discard any value that fails the original equation or leaves the domain.
- **Losing the reference angle set.** Solving \(\cos\theta=\tfrac12\) and giving only \(\theta=\tfrac\pi3\) forgets \(\theta=-\tfrac\pi3\) and the \(+2k\pi\). Corrected: trigonometric and argument equations have *families* of solutions modulo \(2\pi\) (or \(\pi\)); state the whole family unless the problem restricts the interval.

### Differentiation errors

- **Forgetting \(u'\) in the chain rule.** \(\big((2x+1)^5\big)'=5(2x+1)^4\cdot 2=10(2x+1)^4\), not \(5(2x+1)^4\); \((\ln(3x))'=\dfrac{3}{3x}=\dfrac1x\), and \((e^{x^2})'=2x\,e^{x^2}\). Corrected: every composite carries the inner derivative \(u'\); write \(u\) and \(u'\) explicitly before assembling.
- **Quotient-rule numerator order.** \(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\) — the term with \(u'\) comes **first**; reversing it flips the sign. Corrected: memorise "low d-high minus high d-low, over low squared," and check \(v\neq0\).
- **Confusing \(f\) with \(f'\).** Reading monotonicity off the sign of \(f\) instead of \(f'\), or looking for an extremum where \(f=0\). Corrected: monotonicity and extrema are governed by the sign (and sign *change*) of \(f'\); \(f'=0\) alone is not an extremum (see \(x^3\) at \(0\)).

### Integration errors

- **Forgetting the constant \(c\).** An indefinite integral (a primitive) is a *family*: \(\int 2x\,dx=x^2+c\). Corrected: write \(+c\) for every indefinite integral; it disappears only in a *definite* integral \(\int_a^b\).
- **Forgetting \(u'\) or the absolute value.** \(\int\dfrac{u'}{u}\,dx=\ln|u|+c\) (absolute value, and the numerator must be \(u'\)); \(\int u'e^{u}\,dx=e^{u}+c\). Corrected: match the integrand to the pattern *including* the factor \(u'\); a "logarithm" primitive always carries \(|\,\cdot\,|\).
- **Dropping the absolute value in an area.** The area between the curve and the \(x\)-axis is \(\int_a^b|f|\), not \(\int_a^b f\), when \(f\) changes sign. Corrected: split the interval at each zero of \(f\), integrate on each piece, and add the **absolute values**; give the result in area units.

### Geometric and vector errors

- **Treating a dependent triple as a basis.** Three coplanar vectors do **not** form a basis of space; a determinant/dependence check is required. Corrected: three vectors form a basis \(\iff\) they are *not* coplanar (linearly independent); verify before assigning unique coordinates.
- **Sign of a coordinate in a distance or normal.** In \(\vec{AB}=(x_B-x_A,\ y_B-y_A,\ z_B-z_A)\) the order is *tip minus tail*; a plane \(ax+by+cz+d=0\) has normal \(\vec n(a,b,c)\) with \(d=-(ax_A+by_A+cz_A)\). Corrected: compute \(d\) by substituting a known point, and keep the absolute value in the point–plane distance \(\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\).

### Complex-number errors

- **\(i^2=+1\).** The whole subject rests on \(i^2=-1\); writing \((a+ib)(a-ib)=a^2-i^2b^2=a^2+b^2\) uses it correctly. Corrected: \(i^2=-1\), so \(z\bar z=a^2+b^2=|z|^2\) is real and non-negative.
- **Adding moduli / arguments the wrong way.** \(|z+z'|\neq|z|+|z'|\) in general (that is only the triangle *inequality*), whereas for a product \(|zz'|=|z||z'|\) and \(\arg(zz')=\arg z+\arg z'\ [2\pi]\). Corrected: moduli **multiply** across a product and arguments **add**; never add moduli across a sum.
- **Forgetting \(i\) in \(\Delta<0\).** For real coefficients with \(\Delta<0\), \(z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}\); dropping the \(i\) turns complex roots into (nonexistent) real ones. Corrected: when \(\Delta<0\), use \(\sqrt{-\Delta}\) and attach \(i\); the two roots are conjugates.

### Probability errors

- **Reversing a conditional.** \(P(A\mid B)\neq P(B\mid A)\): the probability that a positive test means disease is not the probability that disease gives a positive test. Corrected: read a tree in the direction of its branches; to reverse, use \(P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\) with total probability for \(P(B)\).
- **Assuming independence to multiply.** Multiplying \(P(A)P(B)\) for successive draws *without replacement*. Corrected: without replacement the draws are dependent — use \(P(A\cap B)=P(A)\,P(B\mid A)\); reserve the product rule for independent (e.g. with-replacement) events.
- **Misusing the binomial law.** Applying \(P(X=k)=\binom nk p^k(1-p)^{n-k}\) when the trials are dependent or \(p\) changes. Corrected: the binomial law requires a *fixed number* \(n\) of *independent* trials with a *constant* success probability \(p\); otherwise model with a tree.

### Incomplete proofs

- **Induction missing a step.** Proving \(E(p)\Rightarrow E(p+1)\) but never checking the base case \(E(n_0)\), or vice versa. Corrected: an induction is complete only with **base + inductive step + conclusion "for all \(n\ge n_0\)"**; the inductive hypothesis must be *used* explicitly.
- **Asserting instead of deriving.** Writing "clearly \(f\) is increasing" with no sign study, or "the sequences are adjacent" without checking \(u\nearrow\), \(v\searrow\) and \(v_n-u_n\to0\). Corrected: every claim that a theorem's hypothesis holds must be *shown*, not asserted.

### Missing the final conclusion

- **Stopping at the computation.** Finding \(f'(x)=0\) at \(x=1\) but never stating the extremum and its value; solving the system but never describing the intersection (point, line, or empty). Corrected: end every part with a sentence that *answers the question asked* — the number, the set, the geometric nature — otherwise the reasoning is left hanging and loses its point.

---

<a id="exam-strategy"></a>
# Examination Solution Strategy

The strategy below is general good practice for writing mathematics under time pressure. It says nothing about how any particular paper is marked; treat it as advice for producing clear, complete, verifiable work, and adapt it to whatever instructions your own exam gives.

### Reading a multi-part question

A baccalaureate problem is built as a *ladder*: each part is a rung, and the parts are ordered so that earlier results feed later ones. Before writing anything, read **all** the parts of a problem once, quickly, to see where it is going. Note which quantities are defined at the top (a function \(f\), a sequence \((u_n)\), a probability \(p\)) — they persist through every part. Identify the verb of each part: *show / prove* (you must justify fully), *deduce / conclude* (reuse what is just above, little new work), *calculate* (a number is expected), *discuss* (cases are expected), *interpret* (a sentence in words is expected).

### Spotting reusable results

The phrase **"using the previous part"** — explicit or implied by *deduce* — is a gift: it tells you the answer is one short step from a result you already have. Typical reuses:

- A sign study of \(f'\) done in one part gives the monotonicity, hence an *extremum* or an *inequality*, in the next.
- A factorisation found early makes a later limit or integral immediate.
- A recurrence proven arithmetic/geometric gives the general term, then the sum, then the limit.
- An intermediate value / root corollary result is reused to *locate* a solution and then to *bound* it.

If a later part looks impossibly long, you have probably missed that an earlier answer collapses it. Look **up** the page before starting fresh.

### Organising the written solution

- Answer parts **in order** and label them exactly as the paper does. If you must skip a part, leave room and *use its stated result* in later parts (you are allowed to build on a result you did not prove).
- State what you are about to do in a short phrase ("we study the sign of \(f'\)", "by the total-probability formula"), then do it. A marker — and you, when you re-check — should follow the logic without guessing.
- Keep the algebra in a single vertical column; do not scatter side-calculations. Box or underline each **final answer** so it is unmistakable.
- Draw the tree, the variation table, or the figure. A clean variation table is itself an argument and organises limits, signs and extrema at a glance.

### When to state the domain

State the domain **first**, and explicitly, whenever the problem involves \(\ln\) (need \(u>0\)), a quotient (denominator \(\neq0\)), an even root (radicand \(\ge0\)), or \(\tan\). Every subsequent limit, sign, and solution is then read on that domain, and you will automatically reject values that fall outside it. Skipping this is the single most common way a correct calculation still yields a wrong or incomplete answer.

### When to separate cases

Split into cases whenever a sign is undecided: multiplying or dividing an inequality by a quantity of unknown sign; a parameter \(m\) that changes the number of solutions; \(q^n\) whose behaviour depends on \(|q|<1\), \(=1\), or \(>1\); an absolute value \(|f|\) in an area; a discriminant \(\Delta\) whose sign decides real vs complex roots. Announce the cases ("if \(m<0\) … ; if \(m=0\) … ; if \(m>0\) …") and treat each fully.

### How to write theorem conditions

Before invoking a theorem, write its hypotheses **for the case at hand**, not in the abstract:

- IVT / root corollary: "\(f\) is continuous on \([a,b]\); \(f(a)=\dots<0\) and \(f(b)=\dots>0\); \(f\) is strictly increasing on \([a,b]\) — hence a *unique* root in \(]a,b[\)."
- Monotone bounded: "\((u_n)\) is decreasing and bounded below by \(0\) — hence convergent."
- Independence / binomial law: "\(n\) independent trials, constant \(p\) — hence \(X\) follows the binomial law."

Naming the hypotheses is the argument; the conclusion follows in one line.

### Verifying answers

Cheap checks catch most errors:

- **Numerical sanity:** substitute one value; an area or a probability must be \(\ge0\), a probability \(\le1\), a modulus \(\ge0\).
- **Dimensions and orders:** \(e^x\) beats every polynomial at \(+\infty\); \(\ln\) grows slower than any positive power — if a limit contradicts this, recheck.
- **Back-substitution:** put every solution back into the *original* equation to remove extraneous roots from squaring or \(\exp\).
- **Endpoints:** re-read the variation table against the computed limits; a strictly increasing \(f\) cannot have two roots.

### Managing long calculations

Break a long computation into named intermediate results and *keep* them: a factorisation, a value of \(f'\), a common denominator. Write fractions once and simplify in place rather than recopying. If a step balloons, stop and ask whether an earlier part already gives it — long arithmetic in a baccalaureate problem is usually a sign that a reusable result was missed. Where a value is only needed approximately (to locate a root), a bounded estimate is enough; where it is exact, keep it symbolic (\(\ln 2\), \(\tfrac{\pi}{3}\), \(\sqrt2\)) until the end.

### Not losing marks to incomplete reasoning

The commonest avoidable loss is a correct computation with **no conclusion**: a sign study with no stated monotonicity, an induction with no base case, a system solved with no description of the intersection, an integral with no *area units*. End every part with a sentence that answers the exact question. State the hypotheses you rely on; write \(+c\) and \(|\cdot|\) where they belong; give the full family of solutions modulo \(2\pi\). Reasoning that stops one line early is reasoning left unfinished.

> **Exam-style insight:** Textbook 2 closes with **four general examinations (pages 186–193)**. Each mixes several analysis topics with **one probability problem**, exactly like a real paper. Sit them under timed conditions late in your revision: they are the best rehearsal for combining the whole curriculum, spotting reusable results across parts, and pacing a long paper.

---

<a id="rapid-review"></a>
# Final Rapid Review

A compact revision sheet. It is a *reminder* of what you have already studied, not a substitute for the full lessons — if a line here is unfamiliar, return to its unit.

### Central formulas

**Sequences.** Arithmetic: \(u_n=u_0+nr\), \(S=\dfrac{n(a+\ell)}{2}\). Geometric: \(u_n=u_0q^{\,n}\), \(S=a\dfrac{1-q^{\,n}}{1-q}\) (\(q\neq1\)). Monotonicity: sign of \(u_{n+1}-u_n\), or ratio vs \(1\) for positive terms.

**Limits and continuity.** Polynomial / rational at \(\pm\infty\): keep the leading term / ratio of leading terms. Indeterminate forms \(\tfrac00,\tfrac\infty\infty,\infty-\infty,0\cdot\infty\) signal a change of method (factor, conjugate). Continuity at \(a\): \(\lim_{x\to a}f(x)=f(a)\). Oblique asymptote \(y=ax+b\): \(a=\lim\tfrac{f}{x}\), \(b=\lim(f-ax)\).

**Derivative table.** \((x^n)'=nx^{n-1}\); \((\sqrt x)'=\tfrac1{2\sqrt x}\); \((\tfrac1x)'=-\tfrac1{x^2}\); \((\sin)'=\cos\), \((\cos)'=-\sin\), \((\tan)'=1+\tan^2\); \((uv)'=u'v+uv'\); \(\left(\tfrac uv\right)'=\tfrac{u'v-uv'}{v^2}\); chain rule \((u^n)'=nu'u^{n-1}\), \((\sqrt u)'=\tfrac{u'}{2\sqrt u}\), \((v\circ u)'=u'\,(v'\circ u)\); tangent \(y=f'(a)(x-a)+f(a)\).

**\(\ln\) and exp.** \((\ln x)'=\tfrac1x\ (x>0)\), \(\ln1=0\), \(\ln e=1\); \(\ln(ab)=\ln a+\ln b\), \(\ln\tfrac ab=\ln a-\ln b\), \(\ln a^n=n\ln a\); \((\ln u)'=\tfrac{u'}{u}\). \(e^{a+b}=e^ae^b\), \(e^{\ln x}=x\), \(\ln(e^x)=x\); \((e^x)'=e^x\), \((e^u)'=u'e^u\); \(a^x=e^{x\ln a}\), \((a^x)'=\ln a\,a^x\). Reference limits: \(\lim_{+\infty}\tfrac{\ln x}{x}=0\), \(\lim_{0^+}x\ln x=0\), \(\lim_{0}\tfrac{\ln(1+x)}{x}=1\); \(\lim_{-\infty}e^x=0\), \(\lim_{+\infty}\tfrac{e^x}{x}=+\infty\), \(\lim_{0}\tfrac{e^x-1}{x}=1\).

**Integrals.** \(F'=f\Rightarrow\int f=F+c\); \(\int u'u^n=\tfrac{u^{n+1}}{n+1}\ (n\neq-1)\), \(\int\tfrac{u'}{u}=\ln|u|\), \(\int u'e^u=e^u\); \(\int_a^b f=F(b)-F(a)\); by parts \(\int_a^b uv'=[uv]_a^b-\int_a^b u'v\); area \(=\int_a^b|f|\), between curves \(\int_a^b(f-g)\) with \(f\ge g\); volume \(V=\pi\int_a^b f(x)^2dx\).

**Dot product (space).** \(\vec u\cdot\vec v=\|\vec u\|\|\vec v\|\cos\theta=xx'+yy'+zz'\); \(\vec u\perp\vec v\iff\vec u\cdot\vec v=0\); plane \(ax+by+cz+d=0\) with normal \(\vec n(a,b,c)\); distance \(=\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\); \(AB=\sqrt{(\Delta x)^2+(\Delta y)^2+(\Delta z)^2}\).

**Complex numbers.** \(i^2=-1\), \(z=a+ib\), \(\bar z=a-ib\), \(z\bar z=|z|^2=a^2+b^2\); \(|z|=\sqrt{a^2+b^2}\); trig/exp form \(z=r(\cos\theta+i\sin\theta)=re^{i\theta}\); \(|zz'|=|z||z'|\), \(\arg(zz')=\arg z+\arg z'\ [2\pi]\); de Moivre \((\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta\); \(\Delta<0\Rightarrow z=\tfrac{-b\pm i\sqrt{-\Delta}}{2a}\). Geometry: affix of \(\vec{AB}=z_B-z_A\), \(AB=|z_B-z_A|\), \((\vec{AB},\vec{AC})=\arg\tfrac{z_C-z_A}{z_B-z_A}\ [2\pi]\).

**Combinatorics.** lists with repetition \(n^p\); arrangements \(A_n^p=\tfrac{n!}{(n-p)!}\); permutations \(n!\) (\(0!=1\)); combinations \(\binom np=\tfrac{n!}{p!(n-p)!}\); \(\binom np=\binom n{n-p}\); Pascal \(\binom{n-1}{p-1}+\binom{n-1}{p}=\binom np\); binomial theorem \((a+b)^n=\sum_{k=0}^n\binom nk a^{n-k}b^k\), \(\sum_k\binom nk=2^n\).

**Probability, \(E\), \(V\), binomial law.** \(P(A\mid B)=\tfrac{P(A\cap B)}{P(B)}\ (P(B)\neq0)\); total probability \(P(A)=\sum_iP(B_i)P(A\mid B_i)\); independence \(P(A\cap B)=P(A)P(B)\); \(E(X)=\sum x_ip_i\), \(V(X)=\sum p_ix_i^2-E(X)^2\); binomial law \(P(X=k)=\binom nk p^k(1-p)^{n-k}\), \(E=np\), \(V=np(1-p)\).

### Frequently forgotten conditions

- \(\ln u\) needs \(u>0\); a quotient needs its denominator \(\neq0\); \(\sqrt u\) needs \(u\ge0\).
- Geometric sum formula needs \(q\neq1\) (at \(q=1\), \(S=na\)).
- Monotone \(\Rightarrow\) convergent only if **bounded**.
- IVT root is *unique* only if \(f\) is **strictly monotone**.
- \(\int\tfrac{u'}{u}=\ln|u|\) — absolute value; every indefinite integral needs \(+c\).
- Binomial law needs \(n\) **independent** trials with **constant** \(p\).
- Product rule for probabilities \(P(A\cap B)=P(A)P(B)\) needs **independence**.
- Three vectors form a basis only if **not coplanar**.

### Repeated solution patterns

- **Full function study:** domain \(\to\) limits and asymptotes \(\to\) \(f'\) and its sign \(\to\) variation table \(\to\) extrema \(\to\) (roots via IVT) \(\to\) sketch.
- **Recurrence \(u_{n+1}=au_n+b\):** find the fixed point \(\ell\), set \(v_n=u_n-\ell\), show \((v_n)\) geometric, deduce \(u_n\) and its limit.
- **Convergence without the limit:** prove monotone + bounded (often by induction), then, if \(u_{n+1}=f(u_n)\) with \(f\) continuous, solve \(\ell=f(\ell)\).
- **Area:** find the sign of \(f\) (or \(f-g\)) on \([a,b]\), split at the zeros, integrate \(|f|\), add, give area units.
- **Complex geometry:** translate lengths to \(|z_B-z_A|\) and angles to \(\arg\tfrac{z_C-z_A}{z_B-z_A}\); collinear \(\Leftrightarrow\) real ratio, perpendicular \(\Leftrightarrow\) pure imaginary.
- **Counting then probability:** decide ordered/unordered, count favourable and total, form \(\tfrac{\text{favourable}}{\text{total}}\); for repeated independent trials, use the binomial law.

### High-risk mistakes

Forgetting \(u'\) in a chain-rule derivative or in \(\int\tfrac{u'}{u}\); dropping \(+c\) or the area \(|\cdot|\); using \(i^2=+1\) or adding moduli; reversing a conditional probability; assuming independence; skipping the induction base case; leaving a solution with no final conclusion; keeping a root that lies outside the domain.

### Quick decision rules

- **Ordered \(\Rightarrow\) arrangement/list; unordered \(\Rightarrow\) combination.** With repetition allowed \(\Rightarrow\) \(n^p\); all elements used \(\Rightarrow\) permutation \(n!\).
- **\(f'\) changes sign at \(a\) \(\Rightarrow\) extremum at \(a\).** \(f'\) keeps its sign \(\Rightarrow\) strictly monotone, no extremum.
- **\(f\) continuous and \(f(a)f(b)<0\) \(\Rightarrow\) a root in \(]a,b[\)**; add strict monotonicity \(\Rightarrow\) *unique* root.
- **\(|q|<1\Rightarrow q^n\to0\)**; \(q>1\Rightarrow+\infty\); \(q=1\Rightarrow1\); \(q\le-1\Rightarrow\) no limit.
- **Real ratio \(\tfrac{z_C-z_A}{z_B-z_A}\Rightarrow\) collinear**; pure imaginary \(\Rightarrow\) perpendicular.
- **With replacement / stated independent \(\Rightarrow\) multiply**; without replacement \(\Rightarrow\) conditional \(P(B\mid A)\).
- **\(\Delta<0\Rightarrow\) two conjugate complex roots** with \(i\sqrt{-\Delta}\).

### Short per-topic checklists

- **Sequences/induction:** recursion identified? base + step + conclusion? bounded checked before "convergent"?
- **Limits/continuity:** domain? indeterminate form resolved? one-sided limits for continuity?
- **Differentiation:** \(u'\) included? \(v\neq0\)? sign of \(f'\) (not \(f\)) for monotonicity? conclusion stated?
- **\(\ln\)/exp:** \(u>0\) for \(\ln\)? reference limit used? no \(\ln(a+b)=\ln a+\ln b\)?
- **Integration:** \(+c\)? correct pattern with \(u'\)? \(|\cdot|\) and area units for an area?
- **Vectors/planes:** coplanar checked for a basis? normal read correctly? absolute value in distance?
- **Complex:** \(i^2=-1\)? moduli multiplied, arguments added? \(i\) kept when \(\Delta<0\)?
- **Combinatorics:** ordered or not? with or without repetition? right formula chosen?
- **Probability:** conditional direction right? independence justified? \(\sum p_i=1\)? \(E\) squared in \(V\)? binomial conditions met?

---

<a id="self-assessment"></a>
# Self-Assessment Questions

Answer each in one line before checking the key. They span every unit and every skill type: definitions, choosing a formula, theorem conditions, the *next step*, spotting an error, true/false, special cases, and reading a result. The **answer key** follows all questions.

**Q1.** State the general term and the sum of the first \(n\) terms of an arithmetic sequence with first term \(u_0\) and common difference \(r\).

**Q2.** For which value of \(q\) does the geometric-sum formula \(S=a\dfrac{1-q^n}{1-q}\) fail, and what is the sum then?

**Q3.** List the three steps of a proof by induction.

**Q4.** True or false: a monotone sequence is always convergent.

**Q5.** \(\displaystyle\lim_{x\to+\infty}\dfrac{2x^2+1}{x^2-3}=?\)

**Q6.** Name the four classic indeterminate forms.

**Q7.** What must hold at \(a\) for \(f\) to be continuous at \(a\)?

**Q8.** State the conditions of the root corollary that guarantee a **unique** solution of \(f(x)=0\) on \([a,b]\).

**Q9.** Give \((x^n)'\), \((\sqrt x)'\), and \(\left(\dfrac1x\right)'\).

**Q10.** Differentiate \((2x+1)^5\).

**Q11.** Spot the error: "\((\ln(3x))'=\dfrac1{3x}\)."

**Q12.** Write the equation of the tangent to \(y=f(x)\) at \(x=a\).

**Q13.** What does the sign of \(f'\) tell you, and what does a sign *change* of \(f'\) tell you?

**Q14.** True or false: \(f'(a)=0\) implies \(f\) has an extremum at \(a\).

**Q15.** \(\displaystyle\lim_{n\to+\infty}q^n\) for \(|q|<1\), for \(q=1\), and for \(q>1\)?

**Q16.** State the "monotone and bounded" convergence theorem.

**Q17.** For adjacent sequences \((u_n)\) and \((v_n)\), which three conditions must you verify?

**Q18.** Give the derivative and domain of \(\ln x\), and the value of \(\ln 1\).

**Q19.** Spot the error: "\(\ln(a+b)=\ln a+\ln b\)."

**Q20.** State \((\ln u)'\) and its condition.

**Q21.** Evaluate \(\displaystyle\lim_{x\to+\infty}\dfrac{\ln x}{x}\) and \(\displaystyle\lim_{x\to0^+}x\ln x\).

**Q22.** Simplify \(e^{\ln x}\) and \(\ln(e^x)\), stating any condition.

**Q23.** Differentiate \(e^{x^2}\).

**Q24.** \(\displaystyle\lim_{x\to+\infty}\dfrac{e^x}{x}=?\) and \(\displaystyle\lim_{x\to0}\dfrac{e^x-1}{x}=?\)

**Q25.** Solve \(y'=ay+b\) with \(a\neq0\) (general solution).

**Q26.** What is a primitive of \(f\), and what is missing if you write \(\int 2x\,dx=x^2\)?

**Q27.** Give \(\displaystyle\int\dfrac{u'}{u}\,dx\) and \(\displaystyle\int u'e^{u}\,dx\).

**Q28.** State the integration-by-parts formula for \(\int_a^b uv'\).

**Q29.** How do you compute the area between a curve \(y=f(x)\) and the \(x\)-axis on \([a,b]\) when \(f\) changes sign?

**Q30.** When do three vectors of space form a basis?

**Q31.** Give the two expressions for \(\vec u\cdot\vec v\) (geometric and by coordinates).

**Q32.** Write the distance from a point \(M_0(x_0,y_0,z_0)\) to the plane \(ax+by+cz+d=0\).

**Q33.** How is a line in space represented parametrically from a point \(A\) and a direction \(\vec u\)?

**Q34.** What are the possible intersections of three planes in space?

**Q35.** State \(i^2\), \(\bar z\) for \(z=a+ib\), and the value of \(z\bar z\).

**Q36.** True or false: \(|z+z'|=|z|+|z'|\) for all complex \(z,z'\).

**Q37.** Give \(|zz'|\) and \(\arg(zz')\) in terms of those of \(z\) and \(z'\).

**Q38.** State de Moivre's formula.

**Q39.** Solve \(z^2+z+1=0\) in \(\mathbb{C}\) (form of the roots; \(\Delta<0\)).

**Q40.** Using affixes, how do you express the length \(AB\) and the angle \((\vec{AB},\vec{AC})\)?

**Q41.** Ordered selection of \(p\) from \(n\) without repetition: which formula? Unordered: which formula?

**Q42.** State the binomial theorem and the value of \(\displaystyle\sum_{k=0}^n\binom nk\).

**Q43.** Write the conditional-probability formula and the total-probability formula.

**Q44.** Spot the error: "the draws are without replacement, so \(P(A\cap B)=P(A)\,P(B)\)."

**Q45.** State the binomial law \(P(X=k)\), together with \(E(X)\) and \(V(X)\); what three conditions must hold?

### Answer key

**A1.** \(u_n=u_0+nr\); \(S=\dfrac{n(a+\ell)}{2}=\dfrac{(n{+}1)(u_0+u_n)}{2}\) for the terms \(u_0,\dots,u_n\) (count = number of terms).

**A2.** It fails at \(q=1\); then every term equals \(a\) and \(S=na\) (for \(n\) terms).

**A3.** Base case \(E(n_0)\); inductive step \(E(p)\Rightarrow E(p+1)\); conclusion "\(E(n)\) true for all \(n\ge n_0\)."

**A4.** False — only if it is also **bounded**; an increasing unbounded sequence tends to \(+\infty\).

**A5.** \(2\) (ratio of leading coefficients).

**A6.** \(\dfrac00,\ \dfrac\infty\infty,\ \infty-\infty,\ 0\cdot\infty\).

**A7.** \(f(a)\) is defined and \(\displaystyle\lim_{x\to a}f(x)=f(a)\) (both one-sided limits equal \(f(a)\)).

**A8.** \(f\) continuous on \([a,b]\), \(f(a)f(b)<0\), and \(f\) **strictly monotone** on \([a,b]\).

**A9.** \((x^n)'=nx^{n-1}\); \((\sqrt x)'=\dfrac1{2\sqrt x}\) (\(x>0\)); \(\left(\dfrac1x\right)'=-\dfrac1{x^2}\).

**A10.** \(5(2x+1)^4\cdot 2=10(2x+1)^4\) (chain rule, \(u'=2\)).

**A11.** \(u'=3\) is missing: \((\ln(3x))'=\dfrac{3}{3x}=\dfrac1x\).

**A12.** \(y=f'(a)(x-a)+f(a)\).

**A13.** The sign of \(f'\) gives the monotonicity (\(f'>0\Rightarrow\) increasing); a sign *change* of \(f'\) at \(a\) gives a local extremum at \(a\).

**A14.** False — \(f'(a)=0\) is necessary but not sufficient; \(f'\) must also change sign (e.g. \(x^3\) at \(0\)).

**A15.** \(0\) for \(|q|<1\); \(1\) for \(q=1\); \(+\infty\) for \(q>1\) (and no limit for \(q\le-1\)).

**A16.** A sequence that is monotone **and** bounded is convergent (increasing + bounded above, or decreasing + bounded below).

**A17.** \((u_n)\) increasing, \((v_n)\) decreasing, and \(v_n-u_n\to0\); then they share a common limit with \(u_n\le\ell\le v_n\).

**A18.** \((\ln x)'=\dfrac1x\) on \(]0,+\infty[\); \(\ln 1=0\).

**A19.** Wrong in general: \(\ln(ab)=\ln a+\ln b\), but \(\ln(a+b)\) has no such rule.

**A20.** \((\ln u)'=\dfrac{u'}{u}\), valid where \(u>0\).

**A21.** \(\displaystyle\lim_{x\to+\infty}\dfrac{\ln x}{x}=0\); \(\displaystyle\lim_{x\to0^+}x\ln x=0\).

**A22.** \(e^{\ln x}=x\) for \(x>0\); \(\ln(e^x)=x\) for all \(x\).

**A23.** \((e^{x^2})'=2x\,e^{x^2}\) (chain rule).

**A24.** \(\displaystyle\lim_{x\to+\infty}\dfrac{e^x}{x}=+\infty\); \(\displaystyle\lim_{x\to0}\dfrac{e^x-1}{x}=1\).

**A25.** \(y=Ce^{ax}-\dfrac ba\), with \(C\) fixed by an initial condition.

**A26.** A primitive \(F\) satisfies \(F'=f\); the constant \(+c\) is missing — \(\int 2x\,dx=x^2+c\).

**A27.** \(\displaystyle\int\dfrac{u'}{u}\,dx=\ln|u|+c\); \(\displaystyle\int u'e^{u}\,dx=e^{u}+c\).

**A28.** \(\displaystyle\int_a^b uv'=[uv]_a^b-\int_a^b u'v\).

**A29.** Find the zeros of \(f\) in \([a,b]\), split the interval there, and add the **absolute values** of the pieces: area \(=\displaystyle\int_a^b|f|\), in area units.

**A30.** When they are **not coplanar** (linearly independent); then every vector has unique coordinates in that basis.

**A31.** \(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta=xx'+yy'+zz'\).

**A32.** \(\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}\).

**A33.** \(M=A+t\vec u\), \(t\in\mathbb{R}\) (equivalently the three coordinate equations \(x=x_A+t\alpha\), etc.).

**A34.** A single point, a line, a plane (coincident), or the empty set (parallel with no common point) — decided by a \(3\times3\) system.

**A35.** \(i^2=-1\); \(\bar z=a-ib\); \(z\bar z=a^2+b^2=|z|^2\).

**A36.** False — in general \(|z+z'|\le|z|+|z'|\) (triangle inequality); equality only for the same argument.

**A37.** \(|zz'|=|z|\,|z'|\); \(\arg(zz')=\arg z+\arg z'\ [2\pi]\).

**A38.** \((\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)\), \(n\in\mathbb{Z}\).

**A39.** \(\Delta=1-4=-3<0\), so \(z=\dfrac{-1\pm i\sqrt3}{2}\) (two conjugate roots).

**A40.** \(AB=|z_B-z_A|\); \((\vec{AB},\vec{AC})=\arg\dfrac{z_C-z_A}{z_B-z_A}\ [2\pi]\).

**A41.** Ordered without repetition: \(A_n^p=\dfrac{n!}{(n-p)!}\); unordered: \(\binom np=\dfrac{n!}{p!(n-p)!}\).

**A42.** \((a+b)^n=\displaystyle\sum_{k=0}^n\binom nk a^{n-k}b^k\); \(\displaystyle\sum_{k=0}^n\binom nk=2^n\).

**A43.** \(P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\) (\(P(B)\neq0\)); \(P(A)=\displaystyle\sum_iP(B_i)\,P(A\mid B_i)\) for a partition \((B_i)\).

**A44.** Without replacement the draws are **dependent**; the correct rule is \(P(A\cap B)=P(A)\,P(B\mid A)\), not the product of the two probabilities.

**A45.** \(P(X=k)=\dbinom nk p^k(1-p)^{n-k}\), \(E(X)=np\), \(V(X)=np(1-p)\); conditions: a fixed number \(n\) of **independent** trials with **constant** success probability \(p\).

---

<a id="source-map"></a>
# Source Map

Every section of this guide traces back to a unit of the two official textbooks. Printed pages and PDF pages coincide.

| Guide section | Textbook | Unit or chapter | Printed pages | PDF pages |
|---|---|---|---|---|
| Sequences and Mathematical Induction | Textbook 1 | Unit 1 | 6–18 | 6–18 |
| Limits and Continuity | Textbook 1 | Unit 2 | 19–66 | 19–66 |
| Differentiation | Textbook 1 | Unit 3 | 67–100 | 67–100 |
| Limits of Sequences | Textbook 1 | Unit 4 | 101–132 | 101–132 |
| Natural Logarithm | Textbook 1 | Unit 5 | 133–164 | 133–164 |
| Exponential Function | Textbook 1 | Unit 6 | 165–198 | 165–198 |
| Integration | Textbook 1 | Unit 7 | 199–230 | 199–230 |
| Vectors in Space | Textbook 2 | Unit 1 | 6–37 | 6–37 |
| Scalar Product in Space | Textbook 2 | Unit 2 | 38–63 | 38–63 |
| Lines and Planes | Textbook 2 | Unit 3 | 64–87 | 64–87 |
| Complex Numbers | Textbook 2 | Unit 4 | 88–111 | 88–111 |
| Complex Numbers in Geometry | Textbook 2 | Unit 5 | 112–129 | 112–129 |
| Combinatorics | Textbook 2 | Unit 6 | 130–151 | 130–151 |
| Probability | Textbook 2 | Unit 7 | 152–185 | 152–185 |
| General examinations | Textbook 2 | General exams | 186–193 | 186–193 |

---
