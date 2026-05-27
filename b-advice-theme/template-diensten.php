<?php
/* Template Name: Diensten */
add_action('wp_head', function() { ?>
<style>
.services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:48px; }
.service-card { background:#fff; border:1px solid var(--border); border-radius:12px; padding:36px 32px; display:flex; flex-direction:column; gap:16px; transition:box-shadow .18s, border-color .18s; text-decoration:none; color:inherit; }
.service-card:hover { box-shadow:0 8px 32px rgba(0,0,0,.08); border-color:rgba(76,175,114,.25); }
.service-icon { width:48px; height:48px; background:rgba(76,175,114,.1); border-radius:10px; display:flex; align-items:center; justify-content:center; }
.service-icon svg { width:24px; height:24px; stroke:var(--green); fill:none; stroke-width:1.7; stroke-linecap:round; stroke-linejoin:round; }
.service-title { font-size:18px; font-weight:700; letter-spacing:-.3px; color:var(--ink); }
.service-desc { font-size:14px; line-height:1.7; color:var(--ink-3); flex:1; }
.service-link { font-size:13px; font-weight:600; color:var(--green); display:inline-flex; align-items:center; gap:4px; transition:gap .15s; margin-top:4px; }
.service-card:hover .service-link { gap:8px; }
.stats-strip { display:flex; border:1px solid var(--border); border-radius:12px; overflow:hidden; margin-top:64px; }
.stat-block { flex:1; padding:32px 28px; border-right:1px solid var(--border); display:flex; flex-direction:column; gap:6px; }
.stat-block:last-child { border-right:none; }
.stat-block .stat-num { font-size:36px; font-weight:700; letter-spacing:-1px; color:var(--ink); }
.stat-block .stat-label { font-size:13px; color:var(--ink-3); }
@media(max-width:768px) { .services-grid { grid-template-columns:1fr !important; } .stats-strip { flex-direction:column !important; } .stat-block { border-right:none; border-bottom:1px solid var(--border); } .stat-block:last-child { border-bottom:none; } }
</style>
<?php });

get_header(); ?>

<section class="page-hero">
  <div class="page-hero-tag"><span class="tag"><span class="tag-dot"></span>Wat we doen</span></div>
  <h1 class="page-hero-title">Onze <em>diensten</em></h1>
  <p class="page-hero-sub">Van strategisch advies tot civieltechnische uitvoering — B-Advice begeleidt elk aspect van uw afvalinfrastructuur.</p>
</section>

<section class="section">
  <div class="services-grid">

    <a href="<?php echo home_url('/diensten/afvalinzameling/'); ?>" class="service-card">
      <div class="service-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg></div>
      <div class="service-title">Afvalinzameling &amp; Management</div>
      <p class="service-desc">Strategisch advies en operationeel management van uw volledige afvalinzamelingsproces, van wijkanalyse tot routeoptimalisatie.</p>
      <span class="service-link">Meer informatie →</span>
    </a>

    <a href="<?php echo home_url('/diensten/plaatsing/'); ?>" class="service-card">
      <div class="service-icon"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></div>
      <div class="service-title">Plaatsen van inzamelmiddelen</div>
      <p class="service-desc">Civieltechnische plaatsing van ondergrondse en halfondergrondse containers, inclusief grondwerk, fundering en inbedrijfstelling.</p>
      <span class="service-link">Meer informatie →</span>
    </a>

    <a href="<?php echo home_url('/diensten/projectmanagement/'); ?>" class="service-card">
      <div class="service-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
      <div class="service-title">Projectmanagement</div>
      <p class="service-desc">Complete projectbegeleiding van initiatief tot oplevering. Wij coördineren alle partijen en bewaken planning, budget en kwaliteit.</p>
      <span class="service-link">Meer informatie →</span>
    </a>

    <a href="<?php echo home_url('/diensten/meerjaren-investeringsplan/'); ?>" class="service-card">
      <div class="service-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
      <div class="service-title">Meerjaren Investeringsplan</div>
      <p class="service-desc">Inzicht in de levensduur en vervangingsbehoefte van uw containerpark. Wij stellen een gefundeerd MIP op voor uw gemeente.</p>
      <span class="service-link">Meer informatie →</span>
    </a>

    <a href="<?php echo home_url('/diensten/beheer-onderhoud/'); ?>" class="service-card">
      <div class="service-icon"><svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3z"/><path d="M20 20L8.5 8.5M10.5 6.5l-7 7a2 2 0 000 2.8l1.2 1.2a2 2 0 002.8 0l7-7"/></svg></div>
      <div class="service-title">Beheer, onderhoud &amp; refurbish</div>
      <p class="service-desc">Preventief en correctief onderhoud verlengt de levensduur van uw inzamelmiddelen aanzienlijk. Wij refurbishen containers tot als-nieuw staat.</p>
      <span class="service-link">Meer informatie →</span>
    </a>

    <a href="<?php echo home_url('/diensten/aanbesteding/'); ?>" class="service-card">
      <div class="service-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
      <div class="service-title">Aanbesteding &amp; bestek</div>
      <p class="service-desc">Wij stellen complete bestekken en aanbestedingsdocumenten op die voldoen aan alle wettelijke vereisten en marktstandaarden.</p>
      <span class="service-link">Meer informatie →</span>
    </a>

    <a href="<?php echo home_url('/diensten/bewonersparticipatie/'); ?>" class="service-card" style="grid-column:span 1;">
      <div class="service-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
      <div class="service-title">Bewonersparticipatie</div>
      <p class="service-desc">Effectieve communicatie met bewoners over wijzigingen in afvalinfrastructuur. Van informatieavonden tot digitale updates.</p>
      <span class="service-link">Meer informatie →</span>
    </a>

  </div>

  <div class="stats-strip">
    <div class="stat-block"><div class="stat-num">40+</div><div class="stat-label">Gemeentes bediend</div></div>
    <div class="stat-block"><div class="stat-num">7.000+</div><div class="stat-label">Containers beheerd</div></div>
    <div class="stat-block"><div class="stat-num">87%</div><div class="stat-label">Klanttevredenheid</div></div>
    <div class="stat-block"><div class="stat-num">20+</div><div class="stat-label">Jaar ervaring</div></div>
  </div>
</section>

<div class="cta-band">
  <div>
    <div class="cta-band-title">Heeft u een project waar wij in mee kunnen denken?</div>
    <p class="cta-band-sub">Neem vrijblijvend contact op — wij reageren binnen één werkdag.</p>
  </div>
  <a href="<?php echo home_url('/contact/'); ?>" class="btn-white">Neem contact op</a>
</div>

<?php get_footer(); ?>
