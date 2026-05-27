<?php
get_header(); ?>

<!-- HERO -->
<section class="hero">
  <div class="hero-left">
    <div class="hero-tag">
      <span class="tag"><span class="tag-dot"></span>Infrastructuur &amp; Beheer</span>
    </div>
    <h1 class="hero-headline">
      Ondergrondse containers.<br>
      <em>Bovengronds</em> gemanaged.
    </h1>
    <p class="hero-sub">
      Van plaatsing tot digitaal beheer — B-Advice levert complete
      oplossingen voor ondergrondse afvalinfrastructuur in Nederland.
    </p>
    <div class="hero-actions">
      <a href="<?php echo home_url('/diensten/'); ?>" class="btn-primary">Bekijk onze diensten</a>
      <a href="<?php echo home_url('/b-organized/'); ?>" class="btn-ghost">B-Organized ontdekken →</a>
    </div>
    <div class="hero-stats">
      <div class="stats-row">
        <div class="stat">
          <span class="stat-num">40+</span>
          <span class="stat-label">Gemeentes bediend</span>
        </div>
        <div class="stat">
          <span class="stat-num">7.000+</span>
          <span class="stat-label">Containers beheerd</span>
        </div>
        <div class="stat">
          <span class="stat-num">87%</span>
          <span class="stat-label">Klanttevredenheid</span>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-right">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/dashboard.png" alt="B-Organized dashboard" />
  </div>
  <div class="hero-scroll">
    <div class="scroll-hint">
      <span>Scroll</span>
      <div class="scroll-arrow"></div>
    </div>
  </div>
</section>

<!-- DIENSTEN PREVIEW -->
<section class="section">
  <div class="section-label">Wat we doen</div>
  <h2 class="section-title">Drie <em>kerngebieden</em>,<br>één partner</h2>
  <p class="section-sub">Van strategisch advies tot civieltechnische uitvoering en digitaal platformbeheer.</p>
  <div class="diensten-grid">
    <a href="<?php echo home_url('/diensten/'); ?>" class="dienst-card">
      <div class="dienst-icon">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
      </div>
      <div class="dienst-title">Plaatsing &amp; Infrastructuur</div>
      <p class="dienst-desc">Civieltechnische plaatsing van ondergrondse containersystemen, inclusief projectmanagement en bewonersparticipatie.</p>
      <span class="dienst-link">Alle diensten →</span>
    </a>
    <a href="<?php echo home_url('/diensten/beheer-onderhoud/'); ?>" class="dienst-card">
      <div class="dienst-icon">
        <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3z"/><path d="M20 20L8.5 8.5M10.5 6.5l-7 7a2 2 0 000 2.8l1.2 1.2a2 2 0 002.8 0l7-7"/></svg>
      </div>
      <div class="dienst-title">Beheer &amp; Onderhoud</div>
      <p class="dienst-desc">Levensduur verlengen van bestaande inzamelmiddelen via professioneel onderhoud, refurbishment en meerjaren-investeringsplannen.</p>
      <span class="dienst-link">Meer over beheer →</span>
    </a>
    <a href="<?php echo home_url('/b-organized/'); ?>" class="dienst-card">
      <div class="dienst-icon">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      </div>
      <div class="dienst-title">B-Organized Platform</div>
      <p class="dienst-desc">SaaS-platform voor volledig digitaal containerbeheer. Van werkvoorbereiding tot lediging, alles inzichtelijk in één dashboard.</p>
      <span class="dienst-link">Ontdek B-Organized →</span>
    </a>
  </div>
</section>

<div class="divider"></div>

<!-- B-ORGANIZED HIGHLIGHT -->
<section class="bo-section">
  <div>
    <div class="section-label">Ons platform</div>
    <h2 class="section-title">B-Organized —<br>digitaal containerbeheer</h2>
    <p class="section-sub" style="margin-top:16px;">Gemeentes en afvalverwerkers beheren hun volledige containerpark via één platform. Overzichtelijk, snel en schaalbaar.</p>
    <div class="bo-features">
      <div class="bo-feature"><div class="bo-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>Kanban-overzicht per gemeente en wijk</div>
      <div class="bo-feature"><div class="bo-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>Containerregistratie met kaartweergave</div>
      <div class="bo-feature"><div class="bo-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>Takenbeheer en gebruikersrollen</div>
      <div class="bo-feature"><div class="bo-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>Bijlages en notities per container</div>
    </div>
    <div class="bo-actions">
      <a href="<?php echo home_url('/b-organized/'); ?>" class="btn-primary">Meer over B-Organized</a>
      <a href="http://b-organized.info" target="_blank" class="bo-login-btn">Login →</a>
    </div>
  </div>
  <div class="bo-img-wrap">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/dashboard.png" alt="B-Organized dashboard" />
  </div>
</section>

<!-- CTA BAND -->
<div class="cta-band">
  <div>
    <div class="cta-band-title">Benieuwd wat B-Advice voor uw gemeente kan betekenen?</div>
    <p class="cta-band-sub">Plan een vrijblijvende kennismaking van 30 minuten.</p>
  </div>
  <a href="<?php echo home_url('/contact/'); ?>" class="btn-white">Plan een kennismaking</a>
</div>

<?php get_footer(); ?>
