# kartikey-portfolio/ — full history

Personal portfolio website for Kartikey Kumar targeting McKinsey/Bain/BCG.
- **Files:** index.html, style.css, script.js (3-file static site)
- **Design:** Dark navy (#0a0e1a) with gold (#ffd700) accents, Playfair Display + Inter fonts
- **Sections:** Hero → About → **How I Think (Approach)** → Experience → Projects → Blog → Patents → Leadership → Achievements → Skills → Education → Contact
- **MBB rewrite (2026-05-19):** All content reframed in consulting language — problem/approach/solution/outcome, structured analysis framing, quantified leadership, "How I Think" section added
- **Blog section:** Dynamically fetches all posts from socialresults.blogspot.com via Blogger JSONP feed (`alt=json-in-script&callback=renderBlogPosts`). No API key needed. Works on file:// and any static host.
- **Live links:** socialresults.blogspot.com (blog), nextrade-3bqk.onrender.com (NexTrade app)
- **Deploy:** Drop into any static host (Netlify, Vercel, GitHub Pages, Render)

