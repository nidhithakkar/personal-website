# Deploy nidhithakkar.com

## 1. Push to GitHub

Code is already committed on `main`. If `gh` needs a login:

```bash
gh auth login
```

Then create the repo and push:

```bash
cd /Users/nidhithakkar/personal-website
gh repo create personal-website --private --source=. --remote=origin --push
```

Or create an empty repo on GitHub, then:

```bash
git remote add origin https://github.com/nidhithakkar/personal-website.git
git push -u origin main
```

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected).
3. Add environment variables (Project → Settings → Environment Variables):
   - `RESEND_API_KEY` — from [resend.com/api-keys](https://resend.com/api-keys)
   - `CONTACT_TO_EMAIL` — your Gmail (form destination; never shown on the site)
   - `CONTACT_FROM_EMAIL` — optional; start with `Portfolio <onboarding@resend.dev>` for tests
4. Deploy.

## 3. Point GoDaddy domain to Vercel

1. In Vercel: Project → **Settings → Domains** → add `nidhithakkar.com` and `www.nidhithakkar.com`.
2. Vercel will show the DNS records you need. Typically:
   - **A record** for `@` → `76.76.21.21` (Vercel’s IP; confirm in the Vercel UI)
   - **CNAME** for `www` → `cname.vercel-dns.com`
3. In GoDaddy: **My Products → Domains → nidhithakkar.com → DNS → Manage DNS**
   - Remove conflicting A/CNAME/forwarding records for `@` and `www`
   - Add the records Vercel shows
4. Wait for DNS propagation (often minutes; can take up to 48h).
5. In Vercel, confirm both domains show as **Valid**.

## 4. Production email (recommended)

For reliable delivery after testing:

1. In Resend, add and verify `nidhithakkar.com` (DNS TXT/CNAME as Resend instructs).
2. Set `CONTACT_FROM_EMAIL` to something like `Portfolio <hello@nidhithakkar.com>`.
3. Redeploy on Vercel so the new env var is picked up.

## Local development

```bash
cp .env.example .env.local
# fill RESEND_API_KEY and CONTACT_TO_EMAIL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
