// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
reveals.forEach(el => observer.observe(el));

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(s => sectionObserver.observe(s));

// ===== BLOG: Fetch from Blogger JSON feed via JSONP =====
const BLOG_URL = 'https://socialresults.blogspot.com';
const FEED_URL = `${BLOG_URL}/feeds/posts/default?alt=json-in-script&max-results=50&callback=renderBlogPosts`;

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

function stripHtml(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

function truncate(text, len) {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > len ? clean.slice(0, len).trimEnd() + '…' : clean;
}

function getPostUrl(entry) {
  const links = entry.link || [];
  const alt = links.find(l => l.rel === 'alternate');
  return alt ? alt.href : BLOG_URL;
}

window.renderBlogPosts = function(data) {
  const grid = document.getElementById('blog-grid');
  const loading = document.getElementById('blog-loading');
  if (loading) loading.remove();

  const entries = (data.feed && data.feed.entry) ? data.feed.entry : [];

  if (entries.length === 0) {
    grid.innerHTML = `<div class="blog-error">No posts found. <a href="${BLOG_URL}" target="_blank" rel="noopener">Visit the blog directly →</a></div>`;
    return;
  }

  const fragment = document.createDocumentFragment();

  entries.forEach((entry, idx) => {
    const title = entry.title ? entry.title.$t : 'Untitled';
    const published = entry.published ? entry.published.$t : '';
    const dateStr = published ? formatDate(published) : '';
    const url = getPostUrl(entry);
    const labels = entry.category ? entry.category.map(c => c.term) : [];

    let summary = '';
    if (entry.summary && entry.summary.$t) {
      summary = truncate(stripHtml(entry.summary.$t), 200);
    } else if (entry.content && entry.content.$t) {
      summary = truncate(stripHtml(entry.content.$t), 200);
    }

    const card = document.createElement('a');
    card.href = url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'blog-card reveal';

    const labelsHtml = labels.length
      ? `<div class="blog-labels">${labels.slice(0, 2).map(l => `<span class="blog-label">${l}</span>`).join('')}</div>`
      : '';

    card.innerHTML = `
      <div class="blog-card-meta">
        <span class="blog-date">${dateStr}</span>
        ${labelsHtml}
      </div>
      <h4>${title}</h4>
      ${summary ? `<p class="blog-summary">${summary}</p>` : ''}
      <span class="blog-read-more">Read on The Social <span>→</span></span>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);

  // Trigger reveal for newly injected cards
  grid.querySelectorAll('.blog-card.reveal').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 + i * 100);
  });
};

// Inject JSONP script tag
(function loadBlogFeed() {
  const script = document.createElement('script');
  script.src = FEED_URL;
  script.onerror = function() {
    const grid = document.getElementById('blog-grid');
    const loading = document.getElementById('blog-loading');
    if (loading) loading.remove();
    grid.innerHTML = `
      <div class="blog-error">
        Could not load posts automatically.
        <a href="${BLOG_URL}" target="_blank" rel="noopener">Read all posts on The Social →</a>
      </div>`;
  };
  document.head.appendChild(script);
})();
