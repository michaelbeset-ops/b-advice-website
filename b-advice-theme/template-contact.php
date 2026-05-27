<?php
/* Template Name: Contact */
add_action('wp_head', function() { ?>
<style>
.contact-layout { display:grid; grid-template-columns:1fr 420px; gap:80px; padding:64px 80px 96px; align-items:start; }
.contact-form { display:flex; flex-direction:column; gap:20px; }
.form-privacy { font-size:12px; color:var(--ink-4); line-height:1.6; }
.form-privacy a { color:var(--green); }
.form-success { display:none; background:rgba(76,175,114,.08); border:1.5px solid rgba(76,175,114,.25); border-radius:10px; padding:24px; text-align:center; }
.form-success.visible { display:block; }
.form-success-icon { font-size:32px; margin-bottom:8px; }
.form-success-title { font-size:18px; font-weight:700; color:var(--ink); margin-bottom:6px; }
.form-success-text { font-size:14px; color:var(--ink-3); }
.contact-info { display:flex; flex-direction:column; gap:32px; position:sticky; top:88px; }
.info-card { background:var(--bg-2); border:1px solid var(--border); border-radius:12px; padding:28px; display:flex; flex-direction:column; gap:20px; }
.info-title { font-size:15px; font-weight:700; color:var(--ink); }
.info-item { display:flex; align-items:flex-start; gap:12px; }
.info-icon { width:36px; height:36px; background:rgba(76,175,114,.1); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.info-icon svg { width:16px; height:16px; stroke:var(--green); fill:none; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
.info-label { font-size:11px; font-weight:500; color:var(--ink-4); text-transform:uppercase; letter-spacing:.06em; font-family:var(--mono); margin-bottom:2px; }
.info-value { font-size:14px; font-weight:500; color:var(--ink-2); }
.info-value a { color:var(--ink-2); transition:color .15s; }
.info-value a:hover { color:var(--green); }
.response-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(76,175,114,.08); border:1px solid rgba(76,175,114,.15); border-radius:20px; padding:6px 14px; font-size:12px; color:#2d7a52; font-weight:500; }
.response-dot { width:7px; height:7px; border-radius:50%; background:var(--green); animation:pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.2)} }
@media(max-width:768px) { .contact-layout { grid-template-columns:1fr !important; padding:32px 20px 64px !important; } .contact-info { position:static; } }
</style>
<?php });

get_header(); ?>

<section class="page-hero" style="padding-bottom:48px;">
  <div class="page-hero-tag"><span class="tag"><span class="tag-dot"></span>Bereikbaar</span></div>
  <h1 class="page-hero-title"><em>Contact</em></h1>
  <p class="page-hero-sub">Heeft u een vraag, een project of wilt u kennismaken? Wij reageren doorgaans binnen één werkdag.</p>
  <div style="margin-top:20px;">
    <span class="response-badge"><span class="response-dot"></span>Gemiddelde reactietijd: &lt; 1 werkdag</span>
  </div>
</section>

<div class="contact-layout">
  <div>
    <h2 style="font-size:22px;font-weight:700;letter-spacing:-.4px;color:var(--ink);margin-bottom:24px;">Stuur ons een bericht</h2>

    <div class="form-success" id="formSuccess">
      <div class="form-success-icon">✅</div>
      <div class="form-success-title">Bericht verzonden!</div>
      <p class="form-success-text">Bedankt voor uw bericht. U ontvangt een bevestiging per e-mail. Wij reageren binnen één werkdag.</p>
    </div>

    <form class="contact-form" id="contactForm">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="naam">Naam <span>*</span></label>
          <input type="text" id="naam" name="naam" class="form-input" placeholder="Uw volledige naam" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="email">E-mailadres <span>*</span></label>
          <input type="email" id="email" name="email" class="form-input" placeholder="uw@email.nl" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="telefoon">Telefoonnummer</label>
          <input type="tel" id="telefoon" name="telefoon" class="form-input" placeholder="+31 6 12 34 56 78">
        </div>
        <div class="form-group">
          <label class="form-label" for="organisatie">Organisatie</label>
          <input type="text" id="organisatie" name="organisatie" class="form-input" placeholder="Gemeente / bedrijfsnaam">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="onderwerp">Onderwerp <span>*</span></label>
        <select id="onderwerp" name="onderwerp" class="form-select" required>
          <option value="">Kies een onderwerp</option>
          <option>Adviesgesprek aanvragen</option>
          <option>Projectmanagement</option>
          <option>Plaatsing inzamelmiddelen</option>
          <option>Beheer &amp; onderhoud</option>
          <option>B-Organized platform</option>
          <option>Aanbesteding &amp; bestek</option>
          <option>Overig</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="bericht">Bericht <span>*</span></label>
        <textarea id="bericht" name="bericht" class="form-textarea" placeholder="Vertel ons meer over uw vraag of project…" required></textarea>
      </div>
      <p class="form-privacy">
        Door te verzenden gaat u akkoord met onze <a href="<?php echo home_url('/privacy/'); ?>">privacyverklaring</a>.
        Uw gegevens worden uitsluitend gebruikt om uw vraag te beantwoorden.
      </p>
      <button type="submit" class="btn-primary form-submit" id="submitBtn">
        Bericht versturen
      </button>
    </form>
  </div>

  <aside class="contact-info">
    <div class="info-card">
      <div class="info-title">Contactgegevens</div>
      <div class="info-item">
        <div class="info-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
        <div><div class="info-label">E-mail</div><div class="info-value"><a href="mailto:info@b-advice.info">info@b-advice.info</a></div></div>
      </div>
      <div class="info-item">
        <div class="info-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
        <div><div class="info-label">Telefoon</div><div class="info-value"><a href="tel:+31643125245">+31 (6) 431 25 245</a></div></div>
      </div>
      <div class="info-item">
        <div class="info-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <div><div class="info-label">Adres</div><div class="info-value">Achterdijk 26<br>Nieuwland (UT)</div></div>
      </div>
    </div>
    <div class="info-card" style="background:var(--ink);border-color:transparent;">
      <div class="info-title" style="color:#fff;">Direct een afspraak?</div>
      <p style="font-size:13px;color:rgba(255,255,255,.55);line-height:1.6;">Bel ons direct op <a href="tel:+31643125245" style="color:var(--green);">+31 (6) 431 25 245</a> voor een snelle kennismaking.</p>
    </div>
  </aside>
</div>

<!-- EmailJS -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
(function() {
  // ─── Vul hier uw EmailJS-gegevens in ───
  var EJS_KEY     = 'JOUW_PUBLIC_KEY';
  var EJS_SERVICE = 'JOUW_SERVICE_ID';
  var EJS_INTERN  = 'template_contact_intern';
  var EJS_KLANT   = 'template_contact_klant';
  // ─────────────────────────────────────

  emailjs.init({ publicKey: EJS_KEY });

  document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    var btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Verzenden…';

    var data = {
      naam:         document.getElementById('naam').value,
      email:        document.getElementById('email').value,
      telefoon:     document.getElementById('telefoon').value || '—',
      organisatie:  document.getElementById('organisatie').value || '—',
      onderwerp:    document.getElementById('onderwerp').value,
      bericht:      document.getElementById('bericht').value,
    };

    try {
      await emailjs.send(EJS_SERVICE, EJS_INTERN, { ...data, to_email: 'info@b-advice.info' });
      await emailjs.send(EJS_SERVICE, EJS_KLANT, data);
      document.getElementById('contactForm').style.display = 'none';
      document.getElementById('formSuccess').classList.add('visible');
    } catch(err) {
      alert('Er is een fout opgetreden. Stuur uw bericht naar info@b-advice.info');
      btn.disabled = false;
      btn.textContent = 'Bericht versturen';
    }
  });
})();
</script>

<?php get_footer(); ?>
