# Kartikey Kumar — Portfolio
**Strategy. Innovation. Execution. — A personal portfolio for consulting and leadership roles.**

## What This Is

This is my personal portfolio website — a single-page static site that presents who I am, how I think, and what I've built. It's aimed at strategy consulting recruiters (McKinsey, Bain, BCG) and anyone evaluating my work as a mechanical engineering student who builds real products. Every project is framed as a structured problem-solving case: diagnose the structural failure, map the approach, show the outcome. No backend, no CMS — just HTML, CSS, and a thin JavaScript layer that pulls my blog posts live.

## Key Features

- **Consulting-framed content** — every section uses problem/approach/solution/outcome language: TheNectar (anti-counterfeiting hardware), NexTrade (fintech product), Netflix security analysis (HackerOne submission), NTPC internship, and 4 filed patents
- **"How I Think" framework** — four-step structured problem-solving section (Diagnose → Structure → Recommend & Build → Communicate Impact) with real examples from each project
- **Live blog integration** — dynamically fetches up to 50 posts from [The Social](https://socialresults.blogspot.com) via Blogger JSONP feed (`alt=json-in-script`); no API key needed, works on `file://` and any static host
- **Full career narrative** — hero with quantified stats (8.69 CGPA, 4 patents, 90th JEE percentile), experience timeline (NTPC, procurement), leadership roles (Mess Committee Head, FLUTE/FLAME conferences, Naeraste social enterprise), achievements, skills, and education
- **Scroll-reveal animations** — IntersectionObserver-driven fade-in on sections, animated hero stats, active nav highlighting, and mobile hamburger menu
- **Dark navy + gold design** — Playfair Display headings, Inter body text, responsive grid layouts, glass-effect cards, and mobile-first navigation

## Tech Stack

| Layer | Technologies |
|---|---|
| **Markup** | HTML5 |
| **Styling** | CSS3, Google Fonts (Playfair Display, Inter) |
| **Logic** | Vanilla JavaScript (`script.js`) — scroll reveal, blog JSONP fetch, mobile nav |
| **Blog feed** | Blogger JSON API via JSONP callback |
| **Deployment** | Any static host (GitHub Pages, Netlify, Vercel, Render) |

No npm, no build step, no framework.

## How to Run

```bash
# Clone the repository
git clone https://github.com/kartikeyjaiswal42-sudo/kartikey-portfolio.git
cd kartikey-portfolio

# Option 1: open directly (blog section needs network access)
open index.html

# Option 2: serve locally
python3 -m http.server 8080
# → http://localhost:8080
```

Deploy by pushing the three files (`index.html`, `style.css`, `script.js`) to any static host.

## Project Structure

```
kartikey-portfolio/
├── index.html    # Full single-page site — all sections (hero through contact)
├── style.css     # Dark navy theme, responsive grids, scroll-reveal, mobile menu
└── script.js     # Navbar scroll, hamburger, IntersectionObserver reveals, Blogger JSONP
```

**Sections in `index.html`:**
Hero → About → How I Think → Experience → Projects → Blog → Patents → Leadership → Achievements → Skills → Education → Contact

## Why I Built This

I'm a mechanical engineering student targeting MBB consulting, and I needed a portfolio that speaks their language — not a developer résumé with GitHub links, but a case-study narrative showing how I diagnose structural problems and ship solutions. I've filed 4 patents, founded a hardware startup (TheNectar), built live web apps (NexTrade, BrickReturn), submitted a structured vulnerability report to Netflix via HackerOne, and managed operations for 25,000+ students as Mess Committee Head.

I built this site with AI-assisted development because the constraint wasn't coding skill — it was clarity of narrative. Every paragraph had to answer: what was broken, what did I do, and what changed? The blog section pulls live from The Social (which I've published since age 15) so the writing samples stay current without me touching the HTML.

## Live Demo

🔗 Live Demo: [Add link here]

## Screenshots

📸 Screenshots: [Add screenshots here]
