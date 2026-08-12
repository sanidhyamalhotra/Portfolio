# Sanidhya Malhotra — Portfolio Website

Personal cybersecurity portfolio for **Sanidhya Malhotra**  
(M.S. Cybersecurity, California State University, Dominguez Hills).

Industrial Cyberpunk / Editorial Hacker look: void black (`#050505`), neon chartreuse (`#DFFF00`), Unbounded + JetBrains Mono, sharp corners, grain overlay, smooth scroll, and motion-heavy UI.

**Focus areas:** SOC · Incident Response · Cloud Security · Detection Engineering · AI Security · Security Communications

---

## Tech stack

### Frontend
| Layer | Choice |
|-------|--------|
| UI | React 19 |
| Bundler / tooling | Create React App + CRACO |
| Styling | Tailwind CSS 3 |
| Routing | React Router 7 |
| Motion | Framer Motion + Lenis |
| Marquee | react-fast-marquee |
| Forms | React Hook Form + Zod |
| HTTP | axios |
| Toasts | sonner |
| Icons | lucide-react |
| Path alias | `@/` → `src/` |

### Content
All site copy (profile, jobs, projects, skills, metrics, resume link) lives in:

```text
frontend/src/data/portfolio.js
```

No CMS. Edit that file to update the site.

### Contact form (planned)
Formspree (or similar) — browser posts to their endpoint; they email you.  
No database required for the portfolio itself.

### Design reference
`design_guidelines.json` documents colors, type, motion, and section layout.

---

## Project structure

```text
website/
├── frontend/                 # React app (the website)
│   ├── public/
│   │   ├── index.html
│   │   └── Sanidhya_Malhotra_Resume.pdf
│   ├── src/
│   │   ├── App.js            # Router + Lenis
│   │   ├── data/portfolio.js # All content
│   │   ├── pages/
│   │   │   ├── Portfolio.jsx # Home page
│   │   │   └── CaseStudy.jsx # /case/:slug
│   │   └── components/       # Hero, Projects, Contact, …
│   ├── package.json
│   └── .env                  # Local env (not committed)
├── backend/                  # Optional legacy API (not needed for static site)
├── design_guidelines.json
└── README.md
```

---

## How the website works

### Routes
| URL | What you see |
|-----|----------------|
| `/` | Full portfolio (single page) |
| `/case/:slug` | Case study for one project |

### Home page sections (top → bottom)
1. Navbar (desktop links + mobile menu + Resume)
2. Hero (name reveal + particle background)
3. Impact metrics (animated counters)
4. Manifesto / About
5. Experience timeline
6. Selected Work (filterable project cards)
7. Editorial marquee
8. Skills + Education + Certifications
9. Contact
10. Footer

### Case studies
Each project card links to `/case/<slug>` with overview, stats, methodology, stack, findings, and takeaways. Some include a GitHub link or impact ribbon.

### Build / runtime idea
- Dev: CRA/CRACO serves the React app with hot reload.
- Prod: `npm run build` (or `yarn build`) outputs static files in `frontend/build/`, which any static host (e.g. Cloudflare Pages) can serve.

---

## Prerequisites

- **Node.js** LTS (includes npm)
- Yarn optional (`frontend` has a `yarn.lock`)

---

## Run locally

```powershell
cd frontend
npm install --legacy-peer-deps
npm start
```

Or with Yarn (if installed and on PATH):

```powershell
cd frontend
yarn install
yarn start
```

Open **http://localhost:3000**

### Environment (`frontend/.env`)

Example:

```env
REACT_APP_BACKEND_URL=http://localhost:8000
ENABLE_HEALTH_CHECK=false
```

Use `REACT_APP_*` vars for anything the browser needs (e.g. Formspree form ID once contact is wired).  
Do not commit `.env` files.

---

## Production build

```powershell
cd frontend
npm run build
```

Output folder: `frontend/build/`

Suggested static host settings (e.g. Cloudflare Pages):

| Setting | Value |
|---------|--------|
| Root directory | `frontend` |
| Build command | `npm run build` |
| Output directory | `build` |

SPA note: unknown paths should fall back to `index.html` so `/case/:slug` works on refresh.

---

## Editing the site

| Goal | Where |
|------|--------|
| Bio, jobs, projects, skills, certs | `frontend/src/data/portfolio.js` |
| Section layout / animation | `frontend/src/components/…` |
| Case study page layout | `frontend/src/pages/CaseStudy.jsx` |
| Colors / fonts / grain | `frontend/src/index.css`, `tailwind.config.js` |
| Page title / meta | `frontend/public/index.html` |
| Resume PDF | `frontend/public/Sanidhya_Malhotra_Resume.pdf` + `RESUME_URL` in `portfolio.js` |

---

## Contact form (next step)

**Plan:** Formspree free tier.

1. Create a form at Formspree; set notify email to yours.
2. Add the form ID to `frontend/.env` (e.g. `REACT_APP_FORMSPREE_ID=…`).
3. Update `Contact.jsx` to POST to Formspree instead of a custom API.
4. Keep current validation + success/error toasts.

Until that is wired, the contact UI is present but submit will not deliver mail.

---

## Scripts

| Command | What it does |
|---------|----------------|
| `npm start` / `yarn start` | Dev server |
| `npm run build` / `yarn build` | Production build |
| `npm test` / `yarn test` | CRA test runner |

Run these from the `frontend/` folder.

---

## Backlog

- Wire contact form to Formspree
- Deploy static build (Cloudflare Pages or similar)
- Optional custom domain
- Real project screenshots in case studies
- Testimonials, fuzzy search across case files, scheduling embed (optional)
