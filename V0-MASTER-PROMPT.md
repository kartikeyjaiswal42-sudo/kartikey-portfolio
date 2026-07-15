# Master Prompt — Kartikey Kumar Portfolio (v0.app / Fable 5)

Paste this entire prompt into v0.app. Prefer **Fable 5**. Goal: rebuild `kartikey-portfolio` as a premium personal site that still ships as a **static** site (Next.js App Router OK with static export, or plain React — no backend required for v1).

---

## Who this site is for

**Kartikey Kumar** — Mechanical Engineering undergrad (Amity, Noida · CGPA **8.84** · Graduating Apr 2027), Engineering Intern at **NTPC Singrauli (2,000 MW)**, **4 patents filed**, startup founder (TheNectar), Air India Cadet Pilot Program selectee, builder of industrial **digital twins** and live production web products.

Primary audiences:
1. **Energy / industrial innovation recruiters** (esp. Loccioni-calibre teams: net-zero, Mechatronics, digital twin, HMI/SCADA)
2. Strategy / consulting / product roles that value structured problem-solving + shipped artefacts
3. Anyone who lands from LinkedIn or a résumé link

Live content source today: https://kartikeyjaiswal42-sudo.github.io/kartikey-portfolio/

---

## Design brief (hard rules)

Rebuild for **much better UI/UX** — not a restyle skin. Treat this as a **flagship portfolio**, not a dashboard or a generic “dark SaaS résumé.”

### Composition & brand
- First viewport = **one composition**, not a card grid of stats.
- Brand first: “Kartikey Kumar” is the hero-level signal. Subline supports; it does not overpower the name.
- Brand test: if you remove the nav, the first screen must still clearly belonging to Kartikey — not a template anyone could own.
- Hero budget: name + one short headline + one supporting sentence + one CTA group + one dominant visual. No stat strips, award pills, or promo chips in the first viewport.
- No detached floating badges / stickers overlaid on hero media.
- Cards: default no cards in the hero. Cards are OK later only when they wrap a real interaction or a scannable case study.

### Visual direction (avoid AI-cliché looks)
Choose a clear direction and commit via CSS variables. Prefer **one** of:
- **Industrial editorial light:** cool off-white + deep ink + a single copper/amber accent; blueprint-grid or soft paper grain; photography of real plants / micro-grids as the visual anchor.
- **Control-room dusk:** charcoal slate (not pure black), restrained teal instrumentation accent, live-feeling gauge motifs — *not* neon glow spam.

**Avoid:** purple-on-white / purple-indigo gradients; warm cream + terracotta + serif brochure cliché; broadsheet hairline newspaper layout; Inter/Roboto/Arial defaults; emoji decoration; multi-layer shadows; rounded-full pill clusters; glow-everything dark mode.

Typography: expressive, purposeful pairing (e.g. a distinctive display + a clean text face from Google Fonts or similar — **not** Inter).

Background: atmospheric (subtle grid, gradient wash, or real imagery) — not flat single color.

Motion: 2–3 intentional motions only (e.g. hero name reveal, scroll-linked work preview, soft section enter). Presence over noise.

Responsive: desktop + mobile must both feel designed, not “stacked desktop.”

### UX architecture
Single-page scroll with sticky minimal nav (About · Approach · Experience · Work · Patents · Writing · Leadership · Contact). Optional: Work filter chips — `All | Digital Twins | Products | Hardware | Writing` — that actually filter case studies.

Work section is the **core**: each case study should scan as Problem → Approach / Build → Outcome, with a live link when available. Featured row for the two digital twins + TheNectar.

Blog: keep JSONP/Blogger feed pattern from current site (`socialresults.blogspot.com` feed → cards) OR a clean “Writing” teaser that links out.

Footer: minimal identity + key live demos.

---

## Copy / content (use verbatim facts — do not invent)

### Hero
- Name: Kartikey Kumar
- Line: “I find structural problems. I build solutions. I measure what changes.”
- Support: Mechanical Engineer · Digital Twin Builder · 4 Patents · NTPC Intern
- CTAs: View Work · Get in Touch

### About (essence)
Sees structural failures where others see isolated incidents. Built digital twins of a 500 MW coal unit and Italy’s first net-zero micro-grid (Loccioni Leaf Community), shipped production labour-wage software for live construction sites, diagnosed FMCG counterfeiting via packaging mechanics, Air India Cadet selectee. From Singrauli, MP · Amity University Noida · CGPA 8.84.

Links: LinkedIn `linkedin.com/in/kartikey-kumar-074719291` · Blog `socialresults.blogspot.com` · Email `kartikeyjaiswal42@gmail.com` · Phone `+91 6266804026`

### Approach — How I Think (4 steps)
1. **Diagnose** — structural failure, not symptom. Example: packaged water counterfeiting → refillable packaging friction.
2. **Structure** — decision tree before solution. Example: Netflix household verification state machine.
3. **Recommend & Build** — minimum effective intervention. Example: NRV + locking cap for TheNectar.
4. **Communicate Impact** — stakeholder-ready reporting. Example: HackerOne to Netflix.

### Experience
1. **Engineering Intern (Mechanical)** — NTPC Singrauli STPS · May 2026 – Present · Current  
   Hands-on thermal operations at 2,000 MW; turbines, piping, heat exchange; reliability & preventive maintenance; safety & field service.
2. **Purchase Management Intern** — VS Brothers, Singrauli · May–Jul 2025  
   Procurement, vendor quality root-cause, cross-functional supplier↔site coordination, decision-ready reports.

### Work / Case studies (featured first)

| Project | Tag | Live | One-liner |
|---|---|---|---|
| **NTPC Power-Unit Simulation** | Digital Twin · Energy | https://kartikeyjaiswal42-sudo.github.io/ntpc-singrauli-sim/ | Real-time 500 MW coal-unit twin: gauges, coal→grid flow, startup→sync→shutdown, trip/alarm, 2D/illustrated/3D + site photos. |
| **Loccioni Leaf Community Simulator** | Digital Twin · Net-Zero | https://leaf-community-sim.pages.dev | Net-zero micro-grid twin (Angeli di Rosora): MyLeaf EMS, 3D campus, cutaway/PFD/SCADA, synced views, real 2024 energy KPIs. |
| **TheNectar** | Startup · Hardware | — (award) | Anti-counterfeit NRV + locking cap; 2nd Prize UP Trade Show Sep 2025. |
| **Labour Payment Portal** | Production Web App | https://labour-payment-portal.kartikeyjaiswal42.workers.dev | Wage/attendance automation, hardened money math, Auth0, concurrent-edit safe, edge deploy. |
| **BrickReturn** | Fintech · RE | https://brickreturn.pages.dev | Fractional RE model + return engine across 263 projects. |
| **BrickTruth** | PropTech | https://bricktruth.pages.dev | A–E neighbourhood scorecards + commute estimates — Mumbai/NCR/Bangalore; deterministic scores. |
| **Clutch** | EdTech Analytics | https://clutch-dub.pages.dev | Exam behavioural analytics (calibration, overthinking, fraud index) on PDF mocks. |
| **FoodWise India (Jaano)** | Health | https://kartikeyjaiswal42-sudo.github.io/foodwise-india/ | Packaged-food label literacy for Indian consumers. |
| **CautionTrading** | FinTech · Trading | https://cautiontrading.amitynoidalibrary.workers.dev | Live Delta India indicator alerts; paying client; Workers + Durable Objects. |
| **MechViva AI** | AI Interview | https://mech-interview-ai.pages.dev | Adaptive Mech Eng interviewer; BYO Gemini; voice + PDF OCR. |
| **JobDeck** | AI · Career | https://jobdeck.pages.dev | Own-crawl India job engine across 476/500 cos + ATS tailor. |
| **NexTrade** | Markets Sim | https://nextrade-3bqk.onrender.com | Retail trading sim / dashboard. |
| **Cockpit Ready + AON Suite** | Aviation | — | AI pilot interview + ADAPT practice; built around Air India Cadet path. |
| **Netflix Process Failure** | Security | HackerOne | Household verification fails-open analysis; acknowledged technically valid. |
| **The Social** | Writing | https://socialresults.blogspot.com | Policy/tech/society essays since age 15. |

### Patents (4 filed)
1. Smart Interlocking Mechanism for Metro Door Safety — 202511035168  
2. Solar-Powered Induction Cooktop — 202411104797  
3. Printer Alert System for Document Retrieval — 202511115168  
4. Switch-Operated Thermoelectric Bottle — 202511114553  

### Leadership
- Head — University Mess Committee, Amity (Oct 2024 – Dec 2025), 25,000+ campus  
- Head — Accommodation / Hospitality / Food — FLUTE 2025 & FLAME 2024  
- Co-Founder — Naeraste (2023) QR-notebook EdTech for underprivileged students  
- Volunteer — LittleSeeds NGO  

### Achievements
Air India Cadet Pilot Program · 2nd Prize UP Trade Show · JEE 90th · IGURA #48 · IOCL Debate winner · College pitch winner · club debate wins · Netflix HackerOne ack · 4 patents · digital twins shipped

### Skills (groups)
Engineering & reliability · Digital twin / simulation · AutoCAD / MATLAB / JS / C++ · Structured problem-solving · Prompt engineering / AI-augmented build · Stakeholder & ops leadership

### Education
B.Tech Mechanical — Amity SAST · Sep 2023 – Apr 2027 · CGPA **8.84**  
Class 12 — Christ Jyoti, Singrauli · 86.4% · Class 10 — 94.5%

---

## Technical constraints for v0
- Static-hostable (GitHub Pages). No secrets required on the client.
- Prefer Next.js App Router + Tailwind + minimal client components OR a clean multi-file static HTML rebuild with excellent CSS.
- Keep Blogger JSONP writing section working without an API key.
- Semantic HTML, accessible focus states, fast LCP (optimize hero image).
- Provide a light `README` with deploy notes for GitHub Pages (`basePath` if needed).

## Deliverables
1. Full multi-section personal site matching the content above  
2. Distinctive visual system (tokens documented in CSS or a short design note in-code comments)  
3. Responsive polish + reduced-motion respect  
4. Work filters (optional but preferred)  
5. Export-ready source I can drop into `kartikey-portfolio/` or a twin Next.js repo

## Quality bar
When done, a Loccioni / energy-systems recruiter should open the site and immediately understand: **this person builds industrial digital twins and ships real products — and thinks in structured problem-solving.** A McKinsey interviewer should still recognize consultant-grade framing. No filler Lorem. No fake metrics.

---

*End of master prompt.*
