<?php
/* Template Name: Cookies */
get_header(); ?>

<section class="page-hero">
  <div class="page-hero-tag"><span class="tag"><span class="tag-dot"></span>Juridisch</span></div>
  <h1 class="page-hero-title">Cookie<em>beleid</em></h1>
  <p class="page-hero-sub">Welke cookies B-Advice gebruikt en hoe u uw voorkeuren beheert.</p>
</section>

<div class="legal-wrap">
  <p style="font-size:13px;color:var(--ink-4);font-family:var(--mono);">Versie 1.0 — Mei 2025</p>

  <h2>Wat zijn cookies?</h2>
  <p>Cookies zijn kleine tekstbestanden die bij een bezoek aan onze website op uw apparaat worden opgeslagen. Ze zorgen ervoor dat de website goed functioneert en helpen ons de website te verbeteren.</p>

  <h2>Welke cookies gebruiken wij?</h2>

  <h3>Noodzakelijke cookies</h3>
  <p>Deze cookies zijn essentieel voor het functioneren van de website. Zonder deze cookies werken bepaalde functies niet correct.</p>
  <table class="legal-table">
    <thead><tr><th>Naam</th><th>Doel</th><th>Bewaartijd</th></tr></thead>
    <tbody>
      <tr><td><code>b_advice_consent</code></td><td>Slaat uw cookievoorkeur op zodat de banner niet herhaaldelijk verschijnt</td><td>Permanent (localStorage)</td></tr>
    </tbody>
  </table>

  <h3>Analytische cookies (met toestemming)</h3>
  <p>Met uw toestemming plaatsen wij analytische cookies om inzicht te krijgen in het gebruik van onze website. Deze gegevens zijn geanonimiseerd en worden niet gedeeld met derden.</p>
  <table class="legal-table">
    <thead><tr><th>Naam</th><th>Aanbieder</th><th>Doel</th><th>Bewaartijd</th></tr></thead>
    <tbody>
      <tr><td><code>_ga</code></td><td>Google Analytics</td><td>Onderscheidt websitebezoekers</td><td>2 jaar</td></tr>
      <tr><td><code>_ga_*</code></td><td>Google Analytics</td><td>Sessie-informatie</td><td>2 jaar</td></tr>
    </tbody>
  </table>

  <div class="legal-callout"><p><strong>Let op:</strong> Analytische cookies worden alleen geplaatst als u hiervoor toestemming geeft via onze cookiebanner. U kunt deze toestemming op elk moment intrekken.</p></div>

  <h2>Uw cookievoorkeur beheren</h2>
  <p>U kunt uw cookievoorkeuren op elk moment aanpassen. Klik op de knop hieronder om de cookiebanner opnieuw te tonen:</p>
  <button onclick="window.resetCookieConsent && window.resetCookieConsent()" class="btn-ghost" style="margin:8px 0 24px;">Cookievoorkeuren opnieuw instellen</button>

  <p>Daarnaast kunt u cookies blokkeren via de instellingen van uw browser. Let op: het blokkeren van noodzakelijke cookies kan de werking van de website beïnvloeden.</p>

  <h2>Cookies van derden</h2>
  <p>Onze website maakt gebruik van EmailJS voor het verwerken van formulieren. EmailJS kan technische cookies plaatsen die noodzakelijk zijn voor de werking van hun dienst. Zie het <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" style="color:var(--green);">privacybeleid van EmailJS</a> voor meer informatie.</p>

  <h2>Meer informatie</h2>
  <p>Voor vragen over ons cookiebeleid kunt u contact opnemen via <a href="mailto:info@b-advice.info" style="color:var(--green);">info@b-advice.info</a>. Meer informatie over privacy vindt u in onze <a href="<?php echo home_url('/privacy/'); ?>" style="color:var(--green);">privacyverklaring</a>.</p>
</div>

<?php get_footer(); ?>
