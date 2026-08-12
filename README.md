# Sanidhya Malhotra — Portfolio Website

Personal cybersecurity portfolio for **Sanidhya Malhotra** (M.S. Cybersecurity, CSU Dominguez Hills).  
Industrial Cyberpunk / Editorial Hacker aesthetic: void black (`#050505`), neon chartreuse (`#DFFF00`), Unbounded + JetBrains Mono, sharp 0-radius borders, grain overlay, Lenis smooth scroll, Framer Motion.

**Target roles:** SOC / Incident Response · Cloud Security · Detection Engineering · AI Security · Security Communications

---

## Current status (Aug 2026)

| Area | Status |
|------|--------|
| Frontend (pages, case studies, animations) | Working locally |
| Emergent hosting / scripts / branding | Removed from frontend |
| Resume PDF | Local: `frontend/public/Sanidhya_Malhotra_Resume.pdf` |
| Contact form | UI works; submit still needs rewiring (see [Contact form plan](#contact-form-plan-option-1--formspree--next)) |
| Backend FastAPI + Mongo | Legacy (Emergent-era); not required for static hosting |
| Cloudflare Pages deploy | Not done yet |
| Custom domain | Not done yet |

---

## Architecture

```
website/
├── frontend/          React 19 SPA (CRA + CRACO + Tailwind)
├── backend/           FastAPI + Mongo (legacy contact API — optional)
├── design_guidelines.json
├── memory/PRD.md      Product notes / backlog
└── README.md          This file
```

### How the site works

- Almost all **content** lives in one file: `frontend/src/data/portfolio.js`  
  (profile, manifesto, experience, projects/case studies, skills, education, certs, metrics, resume URL).
- The **UI** is section components under `frontend/src/components/`.
- **Routes** (`frontend/src/App.js`):
  - `/` → full portfolio page
  - `/case/:slug` → case study for that project
- **MongoDB / FastAPI are not used for portfolio content.** They only existed for contact-form storage + email under Emergent.

```
Browser
  → React SPA (static)
  → Contact form (planned: Formspree)
  → Email to sanidhyamalhotra01@gmail.com
```

---

## What’s on the site

### Landing page (`/`) — section order

1. **Navbar** — logo `S/M`, section links, Resume CTA, mobile hamburger drawer  
2. **Hero** — masked line reveal of name, tagline, roles, canvas particle field  
3. **ImpactStrip** — 4 animated counters  
4. **About / Manifesto** — 3 numbered chapters  
5. **Experience** — 5 roles (timeline)  
6. **Selected Work** — 8 project cards + category filter → links to case studies  
7. **Editorial Marquee** — scrolling role keywords  
8. **Skills** — 6 groups + Education + Certifications  
9. **Contact** — form + socials + resume  
10. **Footer**

### Case studies (`/case/:slug`)

Each project can include: overview, stats, methodology, stack, IOC/findings log, takeaways, next-project link, optional GitHub CTA / impact ribbon.

### Projects (8)

| Slug | Category | GitHub |
|------|----------|--------|
| `threat-hunting-mitre-attack` | Blue Team | — |
| `network-intrusion-pcap` | SOC | — |
| `simulated-network-threat-detection` | Blue Team | yes |
| `secure-banking-aws` | Cloud | — |
| `digital-forensics-lab` | Forensics | — |
| `sonarqube-jenkins-devsecops` | DevSecOps | — |
| `gmis-ctf-workshop` | OffSec | — |
| `llm-red-team-guardrails` | AI Security | yes |

### Experience (5)

1. Research Assistant — CSUDH  
2. SI Leader — TLTC, CSUDH  
3. Treasurer & Event Manager — CSUDH Cybersecurity Club  
4. System Engineer — TCS (2021–2024)  
5. Networking Engineering Intern — ONGC  

### Design system

Defined in `design_guidelines.json` and applied in `frontend/src/index.css` + Tailwind:

- Colors: void black, ghost white text, neon chartreuse accent, `--radius: 0rem`
- Fonts: **Unbounded** (headings), **JetBrains Mono** (body)
- Motion: Lenis (`lerp: 0.08`), Framer Motion, custom canvas particles (not tsparticles)
- Constraint: **JavaScript only** (`.js` / `.jsx`), no TypeScript source files

---

## Tech stack

### Frontend

- React 19, React Router 7, CRA + **CRACO**
- Tailwind CSS 3 + shadcn/ui (many UI primitives present; app mainly uses custom layout + sonner toasts)
- Framer Motion, Lenis, react-fast-marquee
- React Hook Form + Zod (contact validation)
- axios (contact POST)
- Path alias: `@/` → `src/` (CRACO webpack + `jsconfig.json`)

### Backend (legacy)

- FastAPI + Motor/MongoDB
- Was used for `POST /api/contact` + Emergent email proxy
- **Not needed** for Cloudflare static hosting if contact uses Formspree

---

## Run locally

### Prerequisites

- **Node.js LTS** (npm included)
- Yarn optional (this repo has `yarn.lock`; npm also works)

### Start frontend

```powershell
cd frontend
npm install --legacy-peer-deps
# or: yarn install   (if yarn is on PATH)
npm start
# or: yarn start
```

Open **http://localhost:3000**

> If `yarn` is “not recognized”, use `npm start` or refresh PATH / reopen the terminal after installing Yarn globally.

### Frontend env (`frontend/.env`)

```
REACT_APP_BACKEND_URL=http://localhost:8000
ENABLE_HEALTH_CHECK=false
```

Contact submit currently points at this URL; it will fail until Formspree is wired.  
`.env` files are gitignored — do not commit secrets.

### Backend (optional / legacy)

Only if you still want the old FastAPI contact API:

- MongoDB at `mongodb://localhost:27017` (or Atlas URI)
- `backend/.env`: `MONGO_URL`, `DB_NAME`, email vars
- `uvicorn server:app --reload --port 8000`

Planned direction: **skip this** and use Formspree instead.

---

## Emergent removal (done)

Removed from the live frontend path:

- Emergent title / “product of emergent.sh” / `emergent-main.js` / PostHog in `public/index.html`
- `@emergentbase/visual-edits` from CRACO / `package.json`
- Resume moved off Emergent CDN → `frontend/public/Sanidhya_Malhotra_Resume.pdf`
- Frontend `.env` no longer points at Emergent preview host
- `.gitignore` covers `.env` files

Safe to delete (if still present):

- `.emergent/` — platform-only config; unused locally / on Cloudflare

Still present but **legacy / ignore for now**:

- `backend/server.py` Emergent email integration
- `backend/.env` email key (keep out of git)

---

## Contact form plan (Option 1 — Formspree) — NEXT

**Decision:** use a free form backend (Formspree). No Mongo, no FastAPI, works with Cloudflare Pages.

### How it will work

```
Visitor fills Contact form
  → browser POSTs JSON/form fields to Formspree
  → Formspree emails you (sanidhyamalhotra01@gmail.com)
  → optional Formspree inbox / spam filtering
  → site shows success toast (same UX)
```

You reply from Gmail as usual. No database on your side.

### What we will change (when we implement — not done yet)

| File / area | Change |
|-------------|--------|
| Formspree account | Create form → get form ID / endpoint |
| `frontend/src/components/Contact.jsx` | POST to Formspree URL instead of `${REACT_APP_BACKEND_URL}/api/contact` |
| `frontend/.env` | Add something like `REACT_APP_FORMSPREE_ID=xxxxxxxx` (or full endpoint) |
| Toast / errors | Keep success/error toasts; map Formspree responses |
| `backend/` | Leave unused, or delete later after Formspree works |

### What we will NOT need

- MongoDB install  
- Running FastAPI  
- Emergent email key  
- Cloudflare Workers (for Option 1)

### Setup steps (when ready)

1. Sign up at [formspree.io](https://formspree.io) (free tier).  
2. Create a form → set notification email to your Gmail.  
3. Copy the form ID / endpoint (`https://formspree.io/f/xxxxxx`).  
4. Put the ID in `frontend/.env`.  
5. Update `Contact.jsx` to POST there (we’ll do this in code next).  
6. Restart `npm start` and test Send message.  
7. Confirm email arrives (check spam once).

**Alternatives with the same idea:** Web3Forms, Getform — same pattern, different endpoint.

---

## Cloudflare hosting plan (later)

Goal: leave paid Emergent hosting; use **Cloudflare Pages** (free).

1. Push repo to **GitHub** (no `.env` / secrets).  
2. Cloudflare Pages → connect repo  
   - Root: `frontend`  
   - Build: `npm run build` or `yarn build`  
   - Output: `build`  
3. SPA routing: Pages serves `index.html` for unknown paths (no `404.html`) so `/case/:slug` works.  
4. Contact already on Formspree → no backend on Cloudflare required.  
5. Optional: custom domain on Cloudflare DNS.  
6. Then cancel Emergent.

---

## Important files

| Path | Role |
|------|------|
| `frontend/src/data/portfolio.js` | All resume/site copy + project case data |
| `frontend/src/App.js` | Router + Lenis |
| `frontend/src/pages/Portfolio.jsx` | Landing composition |
| `frontend/src/pages/CaseStudy.jsx` | Case study template |
| `frontend/src/components/*` | Sections (Hero, Projects, Contact, …) |
| `frontend/public/index.html` | Title / meta |
| `frontend/public/Sanidhya_Malhotra_Resume.pdf` | Resume download |
| `design_guidelines.json` | Design brief |
| `backend/server.py` | Legacy contact API |

---

## Editing content

Change copy / jobs / projects / skills in:

```text
frontend/src/data/portfolio.js
```

Then refresh the local site. No CMS.

---

## Backlog

From product notes / migration work:

- [ ] Wire contact form to Formspree  
- [ ] Deploy to Cloudflare Pages  
- [ ] Custom domain (optional)  
- [ ] Real screenshots in case studies (replace stock Unsplash/Pexels)  
- [ ] Testimonials strip  
- [ ] Search-by-tech across case files  
- [ ] Calendly / Cal.com embed  
- [ ] Retire or delete unused `backend/` after Formspree is live  

---

## License / ownership

Personal portfolio for Sanidhya Malhotra. Not a template for redistribution as-is without permission.
