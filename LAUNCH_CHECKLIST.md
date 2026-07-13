# Launch Checklist — «باسم»

Everything the site needs before it goes live. The **code is production-ready**; what remains is
real business data, a domain, and a font licence. Work top to bottom and tick each box.

> **How you'll know you're done:** the dev-only banner ("بيانات تجريبية…") disappears automatically once
> `whatsapp` and `email` are real (see `usingPlaceholders` in `src/config/teacher.ts:145`). A clean
> `npm run build` with no banner in `npm run dev` means the placeholders are gone.

---

## 1. Business & contact data — `src/config/teacher.ts`

This file is the **single source of truth**; no personal fact is hard-coded anywhere else. Replace every
value below. Current values are neutral stand-ins (`@placeholder` in the code).

| ☐ | Field | Current stand-in | Where it shows on the site |
|---|-------|------------------|-----------------------------|
| ☑ | `brandName` | `باسم` *(set)* | Nav logo, footer ©, **every page `<title>`**, OG `site_name`, JSON-LD org name |
| ☑ | `name` | `الأستاذ باسم` *(set)* | About page heading, portrait `alt`, JSON-LD `Person` name |
| ☐ | `title` | `مدرّس رياضيات` | Hero eyebrow, About "المادة" fact, JSON-LD `jobTitle` |
| ☐ | `level` | `البكالوريا العلمية` | Hero eyebrow, About "المرحلة" fact |
| ☐ | `bio` | *(short paragraph)* | About page `<meta description>`, About hero lead, JSON-LD description |
| ☐ | `bioLong` | *(3 paragraphs)* | About page body — rewrite in the teacher's real voice |
| ☐ | `photo` | `null` | About portrait. Drop a file in `public/` (e.g. `public/teacher.jpg`) and set `photo: '/teacher.jpg'`. A graph-paper placeholder shows until then. Recommended ~360×440, portrait |
| ☐ | `whatsapp` | `963900000000` | **Every WhatsApp button** (nav, hero, contact, footer, about, CTA) + the contact form. **Drives the dev banner.** International digits only — no `+`, spaces, or leading `00` (e.g. Syria `+963 9XX XXX XXX` → `9639XXXXXXXX`) |
| ☐ | `email` | `teacher@example.com` | Footer + Contact page (mailto + shown). **Drives the dev banner.** |
| ☑ | `city` | `حمص` *(set)* | Footer, About "المكان" fact, JSON-LD address |
| ☐ | `country` | `سوريا` | Footer, About fact, JSON-LD address / `areaServed` |
| ☐ | `credentials` | *(3 items)* | About "المؤهّلات" list. **Keep only what is true**; add/remove freely |
| ☐ | `social[]` | telegram/youtube = `example` URLs | Footer + Contact social links. Set each `href` + `handle`, or delete rows you don't have. (The `whatsapp` social row is intentionally not shown as a separate link — the WhatsApp buttons cover it) |
| ☐ | `courseFormats[]` | 3 generic formats | Contact "صيغ الدراسة" + Home CTA. Not personal, but **review the copy/cadence** so it matches how you actually teach |

**Reserved fields (defined but not rendered anywhere yet)** — set them only if you plan to surface them later;
leaving them as-is has no visible effect: `phone`, `yearsExperience`, `bookingUrl`.

---

## 2. Domain & URLs

Production domain: **`https://math.hazem.ae`** (set 2026-07-13). Canonical tags, OG `url`, sitemap, and
robots all resolve from `astro.config.mjs` `site`.

- [x] `astro.config.mjs` → `site: 'https://math.hazem.ae'` (fixes canonical, OG `url`, and `sitemap.xml`)
- [x] `public/robots.txt` → `Sitemap: https://math.hazem.ae/sitemap.xml`
- [ ] In Cloudflare Pages → **basem-math** → Custom domains, add `math.hazem.ae`, then add the CNAME it
      shows you at the `hazem.ae` DNS registrar (Host `math` → the `…pages.dev` target). Wait for SSL.

---

## 3. Fonts (licence — blocking)

- [ ] The two files in `public/fonts/` (`madika-regular.woff2`, `madika-thin.woff2`) are **trial** versions.
      Obtain a production licence for **Madika** covering both weights (Thin 100, Regular 400) for web use.
- [ ] Replace the files **using the same filenames** (no code change needed). If the licensed filenames differ,
      update the two `@font-face` `src` URLs in `src/styles/fonts.css`.

> The site uses **only** these two weights by design (`font-synthesis: none`). Do not add other fonts or
> a bold master — the layout is tuned for Thin + Regular.

---

## 4. Social preview image & favicon

- [x] `public/og.png` (1376×768) — **regenerated with the «باسم» wordmark** and the slogan, in the brand palette.
      Wired in `src/layouts/Base.astro` (`og:image`, `twitter:image`, `og:image:width/height`, `og:image:alt`).
      Regenerate again only if the brand identity changes.
- [ ] Confirm `public/favicon.svg` reflects the final brand (currently the graph-curve mark).

---

## 5. Pre-flight verification

Run these once the data above is in:

- [ ] `npm run build` completes clean (runs `astro check` + build, 7 pages).
- [ ] `npm run dev` shows **no** "بيانات تجريبية" banner (means `usingPlaceholders` is now `false`).
- [ ] Click **every** WhatsApp call-to-action (nav "راسلني", hero, contact channel, footer, about, home CTA) and the
      **contact form** submit → each opens `wa.me/<real number>` with the prefilled Arabic message.
- [ ] Email links (footer + contact) open a `mailto:` to the real address.
- [ ] In a built file under `dist/`, spot-check that `<link rel="canonical">` and `og:image`/`og:url` use the real
      domain (not `…example`).
- [ ] Open the site on a real phone: RTL reads correctly, sliders/drag demos work by touch, nav menu opens.
- [ ] `python scripts/verify-math.py` prints `ALL PASS` (sanity that no math content drifted).

---

## 6. Optional / after launch

- [ ] **Analytics** — add a privacy-friendly, cookieless tag if wanted (none is included; keeps the site zero-JS by default).
- [ ] **Testimonials** — the Credibility section is intentionally testimonial-free and says so; add real, named
      student quotes when you have permission (`src/components/sections/Credibility.astro`).
- [ ] **Downloadable resources** — the Lessons page notes summaries/worksheets are "coming soon"; wire real files
      when ready (`src/pages/lessons.astro`).
- [ ] **Numbers on the home Credibility band** — `400+` examples and `17` problem patterns are editable claims in
      `src/components/sections/Credibility.astro`; make sure they stay honest.

---

## Definition of done

The list of fields that must be replaced is exported as `PLACEHOLDER_FIELDS` in `src/config/teacher.ts`.
When all of Section 1–3 are ticked, the dev banner is gone, and the build is clean, the site is ready to deploy
the contents of `dist/` to any static host.
