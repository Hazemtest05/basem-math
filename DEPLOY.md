# Deploying «باسم» to a subdomain (free, Cloudflare Pages)

Goal: put the site live at **`SUB.YOURDOMAIN.com`** (a subdomain of a domain you already own),
fully free, with automatic HTTPS and auto-redeploy on every `git push`.

- **Host:** Cloudflare Pages (free, unlimited bandwidth, deploys from a **private** repo)
- **Repo:** GitHub (keep it **Private**)
- **Time:** ~15 minutes

> Replace `SUB.YOURDOMAIN.com` everywhere below with your real subdomain
> (e.g. `math.basem-math.com`). `SUB` is just the label (e.g. `math`).

---

## Step 1 — Put the code on GitHub (private)

1. Go to <https://github.com/new> and create an **empty** repo:
   - Name: e.g. `basem-math`
   - Visibility: **Private**
   - Do **not** add a README, .gitignore, or licence (the repo already has them).
2. Connect this local repo to it and push. Run these from inside the project folder
   (or type them here in the chat with a leading `!`). Replace `YOU/REPO`:

   ```bash
   git remote add origin https://github.com/YOU/REPO.git
   git push -u origin main
   ```

   On first push, a browser window opens to sign in to GitHub (Git Credential Manager).
   Approve it once and the push completes.

---

## Step 2 — Set your live URL

Two files reference the site URL. Tell me your subdomain and **I'll set these for you**, or
change them yourself:

- `astro.config.mjs` → `site: 'https://SUB.YOURDOMAIN.com'`
- `public/robots.txt` → `Sitemap: https://SUB.YOURDOMAIN.com/sitemap.xml`

Then commit and push:

```bash
git commit -am "Set production URL"
git push
```

This fixes the canonical tags, `sitemap.xml`, and the social-preview (OG) links.

---

## Step 3 — Create the Cloudflare Pages project

1. Sign up / log in (free): <https://dash.cloudflare.com>
2. Left sidebar → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**.
3. Authorize GitHub, then pick your `basem-math` repo.
4. Build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**. After ~1-2 min you get a URL like `basem-math.pages.dev`.
   Open it and confirm the site works.

---

## Step 4 — Attach your subdomain

1. In the Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `SUB.YOURDOMAIN.com` → Continue.
3. Add the DNS record it shows you:

   **If your domain's DNS is already on Cloudflare:** it adds the record automatically —
   just click to confirm. Done.

   **If your DNS is at your registrar** (GoDaddy / Namecheap / Hostinger / etc.): open your
   domain's DNS settings there and add:

   | Field | Value |
   |-------|-------|
   | Type | `CNAME` |
   | Name / Host | `SUB` (only the subdomain label, e.g. `math`) |
   | Target / Value | `basem-math.pages.dev` (your `*.pages.dev` address) |
   | TTL | Automatic / default |
   | Proxy | (Cloudflare DNS: leave "Proxied" on) |

4. Wait for DNS to propagate (usually minutes, up to ~1 hour). Cloudflare issues **free HTTPS**
   automatically — no action needed.

---

## Step 5 — Verify

- Visit `https://SUB.YOURDOMAIN.com` → the site loads over HTTPS.
- View a shared link preview (OG image = «باسم» card).
- From now on, **every `git push` auto-rebuilds and redeploys** the site.

---

## Notes

- **Keep the GitHub repo Private.** Cloudflare Pages builds private repos on the free plan, so the
  trial Madika fonts and the curriculum guide files stay unpublished. Before any wide/public launch,
  swap the trial fonts for a licensed copy (see `LAUNCH_CHECKLIST.md`).
- The local dev banner ("بيانات تجريبية…") never appears in the built site — it's dev-only.
- Other free hosts (Netlify, Vercel) work almost identically: connect the repo, build `npm run build`,
  output `dist`, then add the same `CNAME` record for your subdomain.
