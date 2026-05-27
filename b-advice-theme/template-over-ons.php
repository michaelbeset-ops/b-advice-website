<?php
/* Template Name: Over ons */
add_action('wp_head', function() { ?>
<style>
.two-col { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
.two-col p { font-size:16px; line-height:1.8; color:var(--ink-3); }
.two-col p + p { margin-top:16px; }
.team-section { padding:96px 80px; background:var(--ink); }
.team-section .section-label { color:rgba(76,175,114,.7); }
.team-section .section-title { color:#f0f7f3; }
.team-section .section-sub { color:#8aab96; }
.team-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; margin-top:56px; }
.team-card { border-radius:16px; overflow:hidden; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08); display:flex; flex-direction:column; transition:transform .2s, box-shadow .2s; }
.team-card:hover { transform:translateY(-4px); box-shadow:0 24px 60px rgba(0,0,0,.4); }
.team-photo { aspect-ratio:3/4; overflow:hidden; background:#0a1510; position:relative; }
.team-photo img { width:100%; height:100%; object-fit:cover; object-position:center top; display:block; transition:transform .4s ease; }
.team-card:hover .team-photo img { transform:scale(1.03); }
.team-photo-placeholder { width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:linear-gradient(160deg,#0f2818 0%,#0a1510 100%); }
.team-photo-placeholder svg { width:64px; height:64px; stroke:rgba(76,175,114,.3); fill:none; stroke-width:1; stroke-linecap:round; stroke-linejoin:round; }
.team-body { padding:28px 28px 32px; display:flex; flex-direction:column; gap:6px; flex:1; }
.team-name { font-size:20px; font-weight:700; letter-spacing:-.4px; color:#f0f7f3; }
.team-role { font-family:var(--mono); font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:var(--green); }
.team-bio { font-size:14px; line-height:1.7; color:rgba(255,255,255,.45); margin-top:10px; flex:1; }
.team-linkedin { display:inline-flex; align-items:center; gap:7px; font-size:12px; font-weight:600; color:rgba(255,255,255,.3); margin-top:16px; text-decoration:none; transition:color .15s; }
.team-linkedin:hover { color:var(--green); }
.team-linkedin svg { width:14px; height:14px; fill:currentColor; flex-shrink:0; }
.timeline-strip { background:var(--bg-2); padding:64px 80px; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
.timeline { display:flex; gap:0; position:relative; margin-top:40px; }
.timeline::before { content:''; position:absolute; top:18px; left:0; right:0; height:2px; background:var(--border); }
.timeline-item { flex:1; display:flex; flex-direction:column; align-items:flex-start; gap:10px; padding-right:20px; position:relative; }
.timeline-dot { width:12px; height:12px; border-radius:50%; background:var(--green); position:relative; z-index:1; margin-bottom:4px; flex-shrink:0; }
.timeline-year { font-family:var(--mono); font-size:12px; letter-spacing:.06em; color:var(--green); font-weight:500; }
.timeline-text { font-size:13px; line-height:1.55; color:var(--ink-3); }
.values-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--border); border:1px solid var(--border); border-radius:12px; overflow:hidden; margin-top:48px; }
.value-card { background:#fff; padding:40px 36px; display:flex; flex-direction:column; gap:14px; }
.value-num { font-family:var(--mono); font-size:10px; letter-spacing:.1em; color:var(--green); text-transform:uppercase; }
.value-title { font-size:20px; font-weight:700; letter-spacing:-.3px; color:var(--ink); }
.value-desc { font-size:14px; line-height:1.7; color:var(--ink-3); }
@media(max-width:768px) {
  .team-section { padding:56px 20px; }
  .team-grid { grid-template-columns:1fr; gap:20px; margin-top:40px; }
  .team-photo { aspect-ratio:4/3; }
  .team-body { padding:20px 20px 24px; }
  .timeline-strip { padding:48px 20px; }
  .values-grid { grid-template-columns:1fr; }
}
</style>
<?php });

get_header(); ?>

<section class="page-hero">
  <div class="page-hero-tag"><span class="tag"><span class="tag-dot"></span>Sinds 2013</span></div>
  <h1 class="page-hero-title">Specialisten in <em>afvalinzameling</em></h1>
  <p class="page-hero-sub">B-Advice ondersteunt gemeentes en afvalverwerkers met ruim twee decennia ervaring in ondergrondse afvalinfrastructuur.</p>
</section>

<!-- TIJDLIJN -->
<div class="timeline-strip">
  <div class="section-label">Onze geschiedenis</div>
  <div class="timeline">
    <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-year">2001</div><div class="timeline-text">Start loopbaan in inzameling en recycling van bedrijfsafvalstoffen</div></div>
    <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-year">2007</div><div class="timeline-text">Focus verlegd naar ondergrondse en bovengrondse onderlossende systemen</div></div>
    <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-year">2010</div><div class="timeline-text">Specialisatie in gemeentelijke inzameling: logistiek, techniek en civieltechniek</div></div>
    <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-year">2013</div><div class="timeline-text">Oprichting B-Advice door Ricardo Beset</div></div>
    <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-year">2022</div><div class="timeline-text">Lancering B-Organized platform voor digitaal containerbeheer</div></div>
    <div class="timeline-item"><div class="timeline-dot" style="background:var(--ink);"></div><div class="timeline-year" style="color:var(--ink);">Nu</div><div class="timeline-text">40+ gemeentes bediend, 7.000+ containers beheerd</div></div>
  </div>
</div>

<!-- ACHTERGROND -->
<section class="section">
  <div class="section-label">Achtergrond</div>
  <h2 class="section-title" style="margin-bottom:48px;">Onze <em>geschiedenis</em></h2>
  <div class="two-col">
    <div>
      <p>B-Advice bestaat sinds 2013, maar onze werkzaamheden in afvalinzameling en verwerking gaan terug tot 2001. Oprichter Ricardo Beset begon zijn carrière in inzameling en recycling van bedrijfsafvalstoffen. Met de opkomst van ondergrondse afvalcontainers in Nederland verlegde hij de focus naar ondergrondse en bovengrondse onderlossende systemen.</p>
      <p>Die vroege ervaring met zowel de techniek als de logistiek van afvalinzameling vormt tot op de dag van vandaag de basis van onze aanpak: wij begrijpen het systeem van binnenuit.</p>
    </div>
    <div>
      <p>Sinds 2010 richten wij ons primair op gemeentelijke inzameling, met specialisme in logistiek, techniek en civieltechniek. De rode draad: inzamelmiddelen, afvalinzameling en afvalscheiding — altijd met oog voor de eindgebruiker, zowel bewoners als inzamelaars.</p>
      <p>Alle kennis die we opdoen in het veld, verwerken we direct in ons platform B-Organized. Zo profiteert elke klant van de collectieve ervaring van tientallen projecten per jaar.</p>
    </div>
  </div>
</section>

<!-- TEAM -->
<section class="team-section">
  <div class="section-label">De mensen achter B-Advice</div>
  <h2 class="section-title">Het <em>team</em></h2>
  <p class="section-sub" style="margin-top:12px;">Drie mensen. Eén missie: afvalbeheer eenvoudiger en slimmer maken.</p>
  <div class="team-grid">

    <div class="team-card">
      <div class="team-photo">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/team/ric.jpg" alt="Ricardo Beset"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="team-photo-placeholder" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
      <div class="team-body">
        <div class="team-name">Ricardo Beset</div>
        <div class="team-role">Directeur &amp; Senior Projectmanager</div>
        <p class="team-bio">Meer dan 20 jaar ervaring in afvalinzameling, van bedrijfsafval tot complexe gemeentelijke infrastructuurprojecten. Oprichter van B-Advice en drijvende kracht achter B-Organized.</p>
        <a href="#" class="team-linkedin">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn
        </a>
      </div>
    </div>

    <div class="team-card">
      <div class="team-photo">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/team/jay.jpg" alt="Jayden Beset"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="team-photo-placeholder" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
      <div class="team-body">
        <div class="team-name">Jayden Beset</div>
        <div class="team-role">Werkvoorbereider</div>
        <p class="team-bio">Verantwoordelijk voor de voorbereiding en coördinatie van plaatsingsprojecten. Werkt dagelijks met B-Organized om projecten van initiatief naar uitvoering te begeleiden.</p>
        <a href="#" class="team-linkedin">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn
        </a>
      </div>
    </div>

    <div class="team-card">
      <div class="team-photo">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/team/leon.jpg" alt="Leon Lauran"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="team-photo-placeholder" style="display:none;">
          <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
      <div class="team-body">
        <div class="team-name">Leon Lauran</div>
        <div class="team-role">Developer &amp; Projectleider</div>
        <p class="team-bio">Ontwikkelaar van het B-Organized platform en projectleider voor technische implementaties. Combineert softwarekennis met praktijkervaring in de afvalinzameling.</p>
        <a href="#" class="team-linkedin">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn
        </a>
      </div>
    </div>

  </div>
</section>

<!-- AANPAK -->
<section class="section" style="background:var(--bg-2);">
  <div class="section-label">Werkwijze</div>
  <h2 class="section-title">Onze <em>aanpak</em></h2>
  <div class="values-grid">
    <div class="value-card"><div class="value-num">01</div><div class="value-title">Specialisme</div><p class="value-desc">Diepgaande kennis van logistiek, techniek en civieltechniek. Geen generalist — wij kennen elk onderdeel van het systeem van binnenuit.</p></div>
    <div class="value-card"><div class="value-num">02</div><div class="value-title">Eigen processen</div><p class="value-desc">Eigen werkprocessen en complete administratie maken efficiëntie mogelijk. Van aanbesteding tot oplevering werken wij gestructureerd en voorspelbaar.</p></div>
    <div class="value-card"><div class="value-num">03</div><div class="value-title">SMART systemen</div><p class="value-desc">Niet alleen slimme inzamelsystemen, maar ook slimme registratie en beheer. Via B-Organized is elk containerpunt inzichtelijk en beheersbaar.</p></div>
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
