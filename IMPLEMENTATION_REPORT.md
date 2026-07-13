# تقرير التنفيذ — موقع «باسم» لرياضيات البكالوريا العلمية

Arabic-first educational website for a Syrian Scientific Baccalaureate mathematics teacher.
Built with **Astro 5 + TypeScript + custom CSS**. Static, zero-JS by default, progressively enhanced.

---

## 1. The visual concept

**Design read:** an Arabic-first (RTL) personal site for a Baccalaureate maths teacher, speaking to anxious
students *and* their parents, in a **graph-paper / ink-on-notebook editorial** language, leaning toward
hand-drawn procedural math SVG with restrained, scroll-linked motion.

The whole interface is a mathematician's notebook:

- **Substrate:** a fixed, edge-faded engineering-paper grid (`quadrillage`) behind every page.
- **Ink + red pen:** deep ink text on warm paper, with a single vermillion accent used the way a teacher's
  red pen is used, for corrections, highlights, and calls to action.
- **Math as the interaction model, not decoration:** the hero curve simplifies as you drag it; a chord becomes
  a tangent as you close the gap; vectors add in real 3D; the 404 is a removable discontinuity.
- **The core message made literal:** "complex becomes simple." The loader draws a tangled curve that resolves
  into one clean curve; the hero repeats the idea interactively.

**Dials:** VARIANCE 7 · MOTION 6 · DENSITY 4. **Theme lock:** one light theme (no section inversion except the
deliberate chalkboard footer). **Accent lock:** one vermillion; the blue grid is the paper substrate, not a
second accent.

### Slogan
Kept the brief's core: **الرياضيات أسهل ممّا تتخيّل**, with a supporting line grounded in the teaching method:
*حين تُشرح الفكرة بالترتيب الصحيح، يصبح الحلّ مجرّد خطوات.*

---

## 2. Files and routes

### Routes (`src/pages/`)
| Route | Purpose |
|---|---|
| `/` | Home: loader, hero, why-hard, interactive tangent lesson, curriculum preview, methodology, worked problems, credibility, CTA |
| `/curriculum` | Interactive 3D vectors highlight + master-detail curriculum explorer (14 units) |
| `/lessons` | Interactive tangent micro-lesson + selected worked problems + resources |
| `/methodology` | The six-step method + exam/condition margin notes + CTA |
| `/about` | Teacher bio, facts, credentials (config-driven, graceful photo placeholder) |
| `/contact` | Contact form (composes a WhatsApp message, no backend) + channels + course formats |
| `/404` | Math-themed: a "point outside the domain" with a removable discontinuity |
| `/sitemap.xml` | Generated from the route list |

### Key modules
- **Config:** `src/config/teacher.ts` (single source of truth for all business facts), `src/config/site.ts`.
- **Content layer:** `src/data/curriculum.ts` (14 units), `lessons.ts` (tangent micro-lesson), `problems.ts`
  (worked examples), `whyHard.ts`, `methodology.ts`, `interactiveDemos.ts` (one demo config per unit).
- **Math typesetter:** `src/lib/texlite.ts` (see §4).
- **Interactive engine:** `src/lib/interactives.ts` + `components/InteractiveDemo.astro` (see §7).
- **Components:** `Nav`, `Footer`, `Loader`, `MarginNote`, `UnitGlyph`, `Icon`, `Math`, `PageHero`, and
  section components under `src/components/sections/` (Hero, WhyHard, InteractiveTangent, CurriculumPreview,
  CurriculumExplorer, Methodology, SelectedProblems, Credibility, CTA, VectorsScene).
- **Styles:** `src/styles/{fonts,global,math}.css` (design tokens, RTL base, math typesetting).

---

## 3. How the Markdown book content was used

Source: `syrian_baccalaureate_math_complete_guide_ar.md` (12,400 lines, Ministry of Education ed. 1447H /
2025-2026) and its English parity file. Nothing was invented; the curriculum is grounded strictly in these files.

- **Curriculum map (14 units):** unit titles, lesson lists, key formulas (copied verbatim from each unit's
  `جدول قوانين الوحدة`), skills (from `قائمة التحقق`), and English glossary terms were extracted per unit.
- **"Why math feels hard":** built from the guide's real cross-curriculum mistakes section
  (`الأخطاء الشائعة عبر المنهاج`): misreading the question, ignoring the domain, sign/algebra slips, applying a
  theorem without checking its conditions.
- **Margin-note vocabulary:** the site's `MarginNote` component mirrors the guide's five authentic alert types
  (`تنبيه · خطأ شائع · فكرة امتحانية · حالة خاصة · شرط مهم`).
- **Methodology:** the six steps mirror the guide's own lesson skeleton (idea → worked example → common mistake
  → exercise → exam idea).

### Educational examples selected (all verified, see §10)
- **Interactive tangent lesson** — `B1-U3-L1-E01`: `f(x)=x²−3x`, `f'(2)=1`, tangent `y=x−4`; mini-question
  `y=x²` slope at 3 = 6. Common mistake reused from the lesson: `(uv)'=u'v'` vs `(uv)'=u'v+uv'`.
- **Complex trigonometric form** — `B2-U4-L3-E01`: `z=−√3+i → 2(cos 5π/6 + i sin 5π/6)`.
- **Area under a parabola** — `B1-U7-L4-E01`: `∫₀³ 4x(3−x) dx = 18`.
- **3D vectors** — `u=(2,1,0)`, `v=(0,1,2)`, `u+v=(2,2,2)` (parallelogram diagonal).

Each worked problem states its source and whether it is verbatim or adapted.

---

## 4. Local fonts

Only the two supplied fonts are used. No Google Fonts, CDNs, system substitution, or extra font packages.

- Discovered: `MadikaArabicTRIAL-Regular.otf` (weight 400) and `alfont_com_MadikaArabicTRIAL-Thin.otf` (weight
  100). One family, two real weights, no bold master. Full Arabic + Latin + digits + core math glyphs
  (`× √ ∞ π ·`).
- Converted to **WOFF2** with fontTools (`public/fonts/madika-regular.woff2` 79 KB, `madika-thin.woff2` 77 KB,
  down ~54% from the OTFs). `@font-face` in `src/styles/fonts.css`, `font-display: swap`, both weights
  **preloaded** in `Base.astro`.
- Because there is no bold, `font-synthesis: none` is set globally and all hierarchy is built from **size +
  Thin/Regular contrast + color**. This constraint is a deliberate part of the visual identity.
- **Math is typeset in Madika**, not KaTeX/MathJax (those ship their own fonts, which the brief forbids). A tiny
  build-time typesetter, `src/lib/texlite.ts`, renders a LaTeX subset (fractions, roots, powers, limits,
  integrals, binomials, vectors, cases, Greek, ℝ/ℕ/…) to HTML+CSS. It runs server-side, so there is zero client
  cost, and it renders the guide's verbatim LaTeX consistently across the site.

---

## 5. Higgsfield MCP

Used once, for genuine value: an abstract concept image (`nano_banana_pro`) of a tangled curve resolving into a
clean rising curve on graph paper, in the exact ink + vermillion palette. It is now the **social / Open Graph
image** (`public/og.png`, 1376×768), which is a real need (SVG OG images are not universally supported by social
platforms). It also validated the loader/hero art direction. All *in-page* visuals are hand-built optimized SVG,
per the brief's preference for lightweight, editable, production-friendly assets. No stock imagery is used.

---

## 6. Skills and tools actually used

- **Taste Skill** (`design-taste-frontend`): brief inference, dial-setting, anti-slop discipline (banned
  AI-purple, fake screenshots, scroll cues; trimmed eyebrow density; enforced hero-fits-viewport, layout-family
  variety, and the **zero em-dash** rule across all visible Arabic and Latin copy).
- **Impeccable**: final audit. Its "absolute ban" on colored side-stripe borders led to a refactor: the
  red-pen margin-note *identity* was kept (labeled glyph tab + tint + a hand-drawn pen underline) but the
  repetitive `3px accent left-border` was removed everywhere in favor of full borders, top borders, and leading
  pen-marks.
- **web3js skill → three.js skills** (installed as `threejs-*`): used for the one place 3D genuinely beats SVG,
  the **"الأشعة في الفراغ" (vectors in space)** scene on `/curriculum`. It is dynamically imported only when the
  panel scrolls into view, on WebGL-capable devices, with reduced-motion respected and a static isometric SVG
  fallback. No blockchain/wallet/crypto anything was added; that guidance was followed literally.
- **Higgsfield MCP**: §5.

All three named skills were available and used. Nothing was fabricated.

---

## 7. Interaction details

- **Loader:** a coordinate plane draws a tangled curve that dissolves into one clean curve; CSS-driven so it
  self-dismisses even if JS fails; skipped entirely under reduced-motion; shown once per session
  (`sessionStorage`); a 3s JS safety-net guarantees the user is never trapped.
- **Hero:** a live curve interpolates from "complex" to "simple" as you drag a labelled range slider (works on
  touch and keyboard); an intro tween plays once, reduced-motion jumps straight to the simple curve.
- **Interactive tangent lesson:** drag `h` to watch a chord become the tangent with a live slope readout;
  reveal hints one at a time; reveal the solution; see the common mistake; answer a mini-question with playful
  correct/incorrect feedback. A solved static graph is rendered server-side as the no-JS fallback.
- **Curriculum explorer:** a master-detail index on wide screens (rail selects a unit, URL hash syncs), and a
  natural all-visible scroll on narrow screens. **Every one of the 14 units has its own hands-on demo** inside
  its detail panel (a "جرّب بنفسك" block): arithmetic/geometric sequences, a curve approaching an asymptote, a
  draggable tangent, sequence convergence, ln product-to-sum, e^x slope-equals-value, Riemann rectangles,
  vector addition (parallelogram), dot-product perpendicularity, a parametric line, the complex plane
  (drag + multiply-by-i), rotation about a centre, an interactive Pascal's triangle, and a binomial
  distribution. All are lightweight SVG built by one reusable engine (`src/lib/interactives.ts`), driven by
  sliders / drag / clicks with live readouts, and every displayed value is computed live and SymPy-verified.
- **3D vectors:** auto-rotating, drag-to-orbit, lazy and reduced-motion-aware.
- **Contact form:** composes a prefilled WhatsApp message on submit; nothing is stored.
- Scroll reveals use a single `IntersectionObserver` (no scroll listeners); all animate only transform/opacity.

---

## 8. Accessibility & responsive decisions

- Semantic landmarks, one `<h1>` per page, meaningful heading order, skip-link, visible keyboard focus rings
  (never removed), `aria-current` on the active nav item, labelled controls, `aria-live` on quiz/answer
  feedback, `role="math"` with `aria-label` on typeset expressions, and `alt`/`aria-label` on visuals.
- **RTL:** `dir="rtl"` document; logical properties (`inset-inline`, `margin-block`, etc.) throughout; math and
  formulas are wrapped `dir="ltr"` so notation never reverses; inline Latin-in-Arabic prose was audited and any
  cramped fragments rewritten to avoid bidi jumbling.
- **Reduced motion:** a global reduce block collapses all animation; loader and 3D auto-rotation disable; content
  is fully available without motion.
- Fluid type/space scales; layouts declared per breakpoint; verified at 390 / 820 / 1440 widths.
- **Mobile touch (hardened pass):**
  - **Scroll-safe drag demos.** The vector-add, dot-product and complex-plane explorers no longer put
    `touch-action: none` on the whole (full-width) SVG, which used to trap a scroll gesture that happened to
    start on the plane. Dragging now lives on a small **grab handle** (an accent point in a soft halo ring);
    only that handle carries `touch-action: none`, so a swipe anywhere else on the plane scrolls the page
    normally. Touch grabs the handle; a mouse can still grab anywhere. Pointer capture is best-effort
    (`try/catch`) so a failed capture never aborts a drag.
  - **Bigger tap targets.** Range sliders now render a thin visible track inside a ~34 px tall hit area (via the
    vendor track pseudo-elements), and demo segment/step buttons get taller padding under `@media
    (pointer: coarse)` plus a `:active` press response. Text inputs stay ≥16 px to avoid iOS focus-zoom.
  - Verified no horizontal overflow on any of the 7 routes at 390 px, and every one of the 14 demos mounts,
    renders shapes, and updates its readout at phone width.
- **No layout shift:** fonts preloaded + `font-display: swap`, media has explicit dimensions, `min-h` uses
  `dvh`.
- **SEO:** per-page title/description, Open Graph + Twitter cards, canonical, JSON-LD (`Person`,
  `EducationalOrganization`, `WebSite`), `robots.txt`, generated `sitemap.xml`, Arabic `lang`/`locale`.

---

## 9. Performance

- Static output, zero JS by default. Per-page initial JS is ~2 KB (gzipped ~1 KB) for the small vanilla islands.
- three.js (≈668 KB raw / ≈170 KB gzipped) is a **separate chunk**, loaded only on `/curriculum` and only when
  the 3D panel enters the viewport on a WebGL device. It never touches the initial load of any page.
- Fonts are WOFF2 and preloaded; the graph background is two layered CSS gradients (no images).

---

## 10. Validation performed

```powershell
npx astro check              # 0 errors, 0 warnings, 0 hints
npm run build                # astro check + build, 7 pages, clean
python scripts/verify-math.py  # SymPy: all 10 displayed examples verified
```
- **Math:** SymPy confirmed `f'(2)=1`, tangent `y=x−4`, secant `= h+1`, mini slope `= 6`, `2(cos5π/6+isin5π/6)=−√3+i`,
  `|−√3+i|=2`, area `=18`, area-between `=4/3`, volume `=8π`. All pass.
- **Browser QC (Playwright + system Chrome):** screenshots at desktop/tablet/mobile for every page, a
  reduced-motion render, and a console-error sweep across all 7 routes returned **zero console/page errors**.
  WebGL scene confirmed mounting with no errors. Screenshots were reviewed and issues fixed (hero underline
  overlap, loader dot, eyebrow density, em-dashes in visible strings, a bidi-cramped fragment, side-stripe
  refactor).
- **Mobile QC pass (390 px phone, touch context):** automated checks confirmed **no horizontal overflow** and
  **zero console errors** on all 7 routes; all **14 interactive demos** mounted and populated their readouts; the
  three drag demos reported `touch-action: auto` on the SVG and `none` only on the grab handle (scroll-safety);
  a **synthetic touch-drag** moved the complex-plane point and updated the readout; the tangent slider updated
  live; and the mobile nav opened. Screenshots (hero, tangent/complex/Pascal demos, contact, nav-open) were
  reviewed at phone width.
- **Motion polish (impeccable `animate`, ease-out only):** slider-driven points and tangents now **glide**
  (short ease-out transition on the SVG geometry, disabled under reduced motion and never applied to a live
  drag); demo controls gained tactile `:active` feedback. No layout properties are animated.

---

## 11. What the client must still provide

None of these are invented; they are neutral, clearly-flagged placeholders.

- Confirm the teacher **name** and **brand name** (set to `باسم`).
- A real **portrait** photo (drop into `/public` and set `teacher.photo`); a graceful graph-paper placeholder
  shows until then.
- Real **WhatsApp number**, **phone**, **email**, **city**, and **social links** (all currently example values).
- Real **biography**, **credentials**, **years of experience**, and any **booking URL**.
- Optional: real student testimonials (the credibility section is intentionally testimonial-free and says so;
  it will host real, named quotes when available).
- The production **domain** (update `site` in `astro.config.mjs`, which also fixes canonical/sitemap/OG URLs).
- **Font licensing:** the supplied Madika files are TRIAL versions; a production licence is required before
  launch.

---

## 12. Exact config fields to update before launch

All in **`src/config/teacher.ts`** (a dev-only banner also flags this while running locally):

`brandName`, `name`, `bio`, `bioLong`, `photo`, `yearsExperience`, `whatsapp`, `phone`, `email`, `city`,
`credentials`, `bookingUrl`, and each `social[].href`.

Plus `site` in `astro.config.mjs` (production URL).

---

## 13. Frontend audit pass (impeccable `audit`) and fixes

A technical audit scored the frontend **18/20 (Excellent)** across Accessibility, Performance, Responsive, Theming,
and Anti-Patterns. No AI-slop tells, no P0/P1 issues. The P2/P3 findings were then fixed:

- **Accessibility**
  - **Math is no longer read as raw LaTeX.** `Math.astro` now derives its `aria-label` from a new
    `texToSpeech()` in `texlite.ts`, which converts the LaTeX subset to spoken Arabic (`\dfrac{a}{b}` → "a على b",
    `\sqrt{x}` → "جذر x", `\vec u` → "الشعاع u", `^`/`_` → "أُس"/"دليل"). Verified: **76 formulas, zero raw-LaTeX
    leaks** in labels.
  - **Contrast:** `--ink-3` darkened `#7b8790` → `#5f6c76` so muted small text passes WCAG AA (~3.25:1 → ~4.7:1
    on paper). Fixes hints, placeholders, kickers, and source lines site-wide in one token change.
  - **Tabs:** `CurriculumPreview` book switch is now a complete WAI-ARIA tabs widget (`role="tab"`/`tabpanel`,
    `aria-controls`/`aria-labelledby`, roving `tabindex`, and RTL-aware Arrow/Home/End keys).
  - Footer signoff color lightened for AA on the dark board; `curr__tab` gets a coarse-pointer tap target.
- **Responsive:** the `InteractiveTangent` slider (missed in the earlier mobile pass) now uses the same ~34px
  touch target + thin track as every other slider.
- **Performance:** the 3D scene renders **on demand** (no more 60fps idle repaint under reduced motion or when
  static); persistent `will-change` removed from all `[data-reveal]` elements; the about portrait gets
  `decoding="async"`.
- **Anti-patterns:** retired the last neutral side-stripe (`.cred__note` → top hairline); flattened the
  `.formula-plate` (tint only, no border) so it never reads as a card nested inside the `.prob` card.

All verified: `astro check` 0 errors, `npm run build` 7 pages clean, SymPy `verify-math.py` ALL PASS, and a
browser sweep confirming zero console errors on all routes, the tab keyboard model, and the readable math labels.

---

## Run it

```powershell
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # type-check + production build to dist/
npm run preview    # serve the built site
```
