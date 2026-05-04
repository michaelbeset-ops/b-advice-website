/* shared-footer.js — inject footer + nav scroll on every page */
(function() {
  // Inject favicon
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = 'uploads/b-advice-logo.svg';
  document.head.appendChild(favicon);

  const LOGO_IMG_FOOTER = `<img src="uploads/b-advice-logo.svg" alt="B-Advice" style="height:52px;display:block;filter:brightness(0) invert(1);" />`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-col">
      <div class="footer-brand">
        <a href="index.html">${LOGO_IMG_FOOTER}</a>
      </div>
      <p class="footer-tagline">Specialist in ondergrondse afvalinfrastructuur en digitaal containerbeheer.</p>
      <p class="footer-address">Achterdijk 26<br/>Nieuwland (UT)</p>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Diensten</div>
      <div class="footer-col-links">
        <a href="dienst-afvalinzameling.html">Afvalinzameling &amp; Management</a>
        <a href="dienst-plaatsing.html">Plaatsen van inzamelmiddelen</a>
        <a href="dienst-projectmanagement.html">Projectmanagement</a>
        <a href="dienst-mip.html">Meerjaren Investeringsplan</a>
        <a href="dienst-beheer.html">Beheer, onderhoud &amp; refurbish</a>
        <a href="dienst-aanbesteding.html">Aanbesteding &amp; bestek</a>
        <a href="dienst-communicatie.html">Bewonersparticipatie</a>
      </div>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Bedrijf</div>
      <div class="footer-col-links">
        <a href="Over-ons.html">Over ons</a>
        <a href="Nieuws.html">Nieuws</a>
        <a href="Contact.html">Contact</a>
        <a href="B-Organized.html">B-Organized</a>
        <a href="#">Privacy &amp; Cookies</a>
      </div>
    </div>
    <div class="footer-col">
      <div class="footer-col-title">Contact</div>
      <div class="footer-contact-item">
        <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <a href="mailto:info@b-advice.info" style="color:rgba(255,255,255,.5);transition:color .15s;">info@b-advice.info</a>
      </div>
      <div class="footer-contact-item">
        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        <a href="tel:+31643125245" style="color:rgba(255,255,255,.5);transition:color .15s;">+31 (6) 431 25 245</a>
      </div>
      <div class="footer-contact-item">
        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>Achterdijk 26, Nieuwland (UT)</span>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 B-Advice. Alle rechten voorbehouden. KvK: <span class="footer-kvk">—</span></span>
    <div class="footer-bottom-links">
      <a href="#">Privacy</a>
      <a href="#">Cookies</a>
      <a href="#">Disclaimer</a>
    </div>
  </div>
</footer>`;

  const NAV_HTML = `
<nav class="nav" id="sitenav">
  <a class="nav-logo" href="index.html" style="display:flex;align-items:center;">
    <img src="uploads/b-advice-logo.svg" alt="B-Advice" style="height:36px;display:block;" />
  </a>
  <div class="nav-center">
    <a href="Diensten.html" data-page="Diensten">Diensten</a>
    <a href="B-Organized.html" data-page="B-Organized">B-Organized</a>
    <a href="Producten.html" data-page="Producten">Producten</a>
    <a href="Nieuws.html" data-page="Nieuws">Nieuws</a>
    <a href="Over-ons.html" data-page="Over-ons">Over ons</a>
  </div>
  <div class="nav-right">
    <a href="Contact.html" class="nav-contact">Contact</a>
    <button class="nav-cta" onclick="window.location.href='https://app.b-organized.nl'">Login B-Organized</button>
  </div>
  <button class="nav-hamburger" id="navHamburger" aria-label="Menu" style="display:none;">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-mobile-overlay" id="navMobileOverlay">
  <div class="nav-mobile-links">
    <a href="Diensten.html" data-page="Diensten">Diensten</a>
    <a href="B-Organized.html" data-page="B-Organized">B-Organized</a>
    <a href="Producten.html" data-page="Producten">Producten</a>
    <a href="Nieuws.html" data-page="Nieuws">Nieuws</a>
    <a href="Over-ons.html" data-page="Over-ons">Over ons</a>
    <a href="Contact.html" class="nav-mobile-contact" style="font-size:15px;color:var(--ink-4);font-weight:400;">Contact</a>
  </div>
  <button class="nav-mobile-cta" onclick="window.location.href='https://app.b-organized.nl'">Login B-Organized</button>
</div>`;

  // inject nav if placeholder exists
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  // inject footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

  // mark active nav item
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('[data-page]').forEach(a => {
      if (a.dataset.page === page) a.classList.add('active');
    });
  }

  // nav scroll
  const nav = document.getElementById('sitenav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // hamburger — show on mobile, wire up toggle
  function initHamburger() {
    const btn = document.getElementById('navHamburger');
    const overlay = document.getElementById('navMobileOverlay');
    if (!btn || !overlay) return;

    // show hamburger on mobile
    function checkMobile() {
      const isMobile = window.innerWidth <= 768;
      btn.style.display = isMobile ? 'flex' : 'none';
    }
    checkMobile();
    window.addEventListener('resize', checkMobile);

    btn.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // close on link click
    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        overlay.classList.remove('open');
        btn.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // close on cta click
    const ctaBtn = overlay.querySelector('.nav-mobile-cta');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        overlay.classList.remove('open');
        btn.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  // run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburger);
  } else {
    initHamburger();
  }
})();
