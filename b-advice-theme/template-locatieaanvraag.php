<?php
/* Template Name: Locatieaanvraag */
get_header(); ?>

<section class="page-hero" style="padding-bottom:48px;">
  <div class="page-hero-tag"><span class="tag"><span class="tag-dot"></span>B-Covered</span></div>
  <h1 class="page-hero-title">Locatie<em>aanvraag</em></h1>
  <p class="page-hero-sub">Vul het formulier in zodat wij uw locatie kunnen beoordelen en een passend voorstel kunnen maken.</p>
</section>

<div class="loc-layout">
  <div>
    <div class="form-success" id="locSuccess">
      <div class="form-success-icon">✅</div>
      <div class="form-success-title">Aanvraag ontvangen!</div>
      <p class="form-success-text">Bedankt voor uw locatieaanvraag. U ontvangt een bevestiging per e-mail. Wij nemen zo spoedig mogelijk contact met u op.</p>
    </div>

    <form class="loc-form" id="locForm">
      <!-- 1. Contactgegevens -->
      <div class="form-section">
        <div class="form-section-header">
          <div class="form-section-num">1</div>
          <div><div class="form-section-title">Contactgegevens</div><div class="form-section-sub">Uw persoonlijke informatie</div></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="l_naam">Naam <span>*</span></label><input type="text" id="l_naam" name="naam" class="form-input" placeholder="Uw volledige naam" required></div>
          <div class="form-group"><label class="form-label" for="l_email">E-mailadres <span>*</span></label><input type="email" id="l_email" name="email" class="form-input" placeholder="uw@email.nl" required></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="l_telefoon">Telefoonnummer</label><input type="tel" id="l_telefoon" name="telefoon" class="form-input" placeholder="+31 6 12 34 56 78"></div>
          <div class="form-group"><label class="form-label" for="l_organisatie">Organisatie <span>*</span></label><input type="text" id="l_organisatie" name="organisatie" class="form-input" placeholder="Gemeente / bedrijfsnaam" required></div>
        </div>
      </div>

      <!-- 2. Locatiegegevens -->
      <div class="form-section">
        <div class="form-section-header">
          <div class="form-section-num">2</div>
          <div><div class="form-section-title">Locatiegegevens</div><div class="form-section-sub">Technische informatie over de locatie</div></div>
        </div>
        <div class="form-group"><label class="form-label" for="l_adres">Adres / omschrijving locatie <span>*</span></label><input type="text" id="l_adres" name="adres" class="form-input" placeholder="Straatnaam, plaatsnaam" required></div>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="l_x">X-coördinaat <span class="form-label-hint">(RD)</span></label><input type="text" id="l_x" name="coord_x" class="form-input" placeholder="bijv. 125000"></div>
          <div class="form-group"><label class="form-label" for="l_y">Y-coördinaat <span class="form-label-hint">(RD)</span></label><input type="text" id="l_y" name="coord_y" class="form-input" placeholder="bijv. 483000"></div>
        </div>
        <div class="form-group"><label class="form-label" for="l_kenmerk">Kenmerk / referentie</label><input type="text" id="l_kenmerk" name="kenmerk" class="form-input" placeholder="Interne projectcode of locatienaam"></div>
        <div class="form-group">
          <label class="form-label">Plaatsing</label>
          <div class="toggle-group">
            <label class="toggle-option"><input type="radio" name="plaatsing" value="Eigen grond"><span>Eigen grond</span></label>
            <label class="toggle-option"><input type="radio" name="plaatsing" value="Openbaar terrein"><span>Openbaar terrein</span></label>
            <label class="toggle-option"><input type="radio" name="plaatsing" value="Onbekend"><span>Onbekend</span></label>
          </div>
        </div>
      </div>

      <!-- 3. Locatiekenmerken -->
      <div class="form-section">
        <div class="form-section-header">
          <div class="form-section-num">3</div>
          <div><div class="form-section-title">Locatiekenmerken</div><div class="form-section-sub">Huidige situatie en werkzaamheden</div></div>
        </div>
        <div class="form-group">
          <label class="form-label">Proefsleuven gewenst?</label>
          <div class="toggle-group">
            <label class="toggle-option"><input type="radio" name="proefsleuven" value="Ja"><span>Ja</span></label>
            <label class="toggle-option"><input type="radio" name="proefsleuven" value="Nee"><span>Nee</span></label>
            <label class="toggle-option"><input type="radio" name="proefsleuven" value="Onbekend"><span>Onbekend</span></label>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Locatie al ingemeten?</label>
          <div class="toggle-group">
            <label class="toggle-option"><input type="radio" name="ingemeten" value="Ja"><span>Ja</span></label>
            <label class="toggle-option"><input type="radio" name="ingemeten" value="Nee"><span>Nee</span></label>
            <label class="toggle-option"><input type="radio" name="ingemeten" value="Onbekend"><span>Onbekend</span></label>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Bezocht met inzamelvoertuig?</label>
          <div class="toggle-group">
            <label class="toggle-option"><input type="radio" name="voertuig" value="Ja"><span>Ja</span></label>
            <label class="toggle-option"><input type="radio" name="voertuig" value="Nee"><span>Nee</span></label>
            <label class="toggle-option"><input type="radio" name="voertuig" value="Onbekend"><span>Onbekend</span></label>
          </div>
        </div>
      </div>

      <!-- 4. Aanvullende informatie -->
      <div class="form-section">
        <div class="form-section-header">
          <div class="form-section-num">4</div>
          <div><div class="form-section-title">Aanvullende informatie</div><div class="form-section-sub">Type container en opmerkingen</div></div>
        </div>
        <div class="form-group">
          <label class="form-label">Standaardinrichting</label>
          <div class="toggle-group">
            <label class="toggle-option"><input type="radio" name="inrichting" value="Standaard"><span>Standaard</span></label>
            <label class="toggle-option"><input type="radio" name="inrichting" value="Geen voorkeur"><span>Geen voorkeur</span></label>
            <label class="toggle-option"><input type="radio" name="inrichting" value="Afwijkend"><span>Afwijkend</span></label>
          </div>
        </div>
        <div class="form-group"><label class="form-label" for="l_opmerkingen">Opmerkingen / aanvullende informatie</label><textarea id="l_opmerkingen" name="opmerkingen" class="form-textarea" placeholder="Beschrijf eventuele bijzonderheden, obstakels of andere relevante informatie…"></textarea></div>
        <p class="form-privacy" style="font-size:12px;color:var(--ink-4);">Door te verzenden gaat u akkoord met onze <a href="<?php echo home_url('/privacy/'); ?>" style="color:var(--green);">privacyverklaring</a>.</p>
        <button type="submit" class="btn-primary" id="locSubmitBtn">Aanvraag versturen</button>
      </div>
    </form>
  </div>

  <aside class="loc-sidebar">
    <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:12px;padding:28px;">
      <div class="form-section-title" style="margin-bottom:20px;">Hoe werkt het?</div>
      <div class="loc-steps">
        <div class="loc-step"><div class="loc-step-num">1</div><div class="loc-step-text"><strong>Aanvraag indienen</strong>Vul het formulier in met locatiegegevens en uw contactinformatie.</div></div>
        <div class="loc-step"><div class="loc-step-num">2</div><div class="loc-step-text"><strong>Beoordeling</strong>Wij beoordelen de locatie op haalbaarheid en logistiek.</div></div>
        <div class="loc-step"><div class="loc-step-num">3</div><div class="loc-step-text"><strong>Terugkoppeling</strong>U ontvangt binnen 2 werkdagen een reactie met ons advies.</div></div>
        <div class="loc-step"><div class="loc-step-num">4</div><div class="loc-step-text"><strong>Offerte op maat</strong>Bij akkoord stellen wij een offerte op maat op.</div></div>
      </div>
    </div>
    <div style="background:var(--ink);border-radius:12px;padding:28px;">
      <div class="form-section-title" style="color:#fff;margin-bottom:12px;">Direct contact?</div>
      <p style="font-size:13px;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:16px;">Liever telefonisch overleggen? Bel ons direct.</p>
      <a href="tel:+31643125245" style="display:block;background:var(--green);color:#fff;text-align:center;padding:11px 16px;border-radius:7px;font-size:14px;font-weight:600;text-decoration:none;">+31 (6) 431 25 245</a>
    </div>
    <div style="background:rgba(76,175,114,.08);border:1px solid rgba(76,175,114,.2);border-radius:12px;padding:24px;">
      <div class="form-section-title" style="color:var(--green);margin-bottom:8px;">B-Covered meten</div>
      <p style="font-size:13px;color:var(--ink-3);line-height:1.6;margin-bottom:14px;">Wij meten locaties professioneel in met GPS-apparatuur voor nauwkeurige coördinaten.</p>
      <a href="<?php echo home_url('/b-covered/'); ?>" style="font-size:13px;font-weight:600;color:var(--green);">Meer over B-Covered →</a>
    </div>
  </aside>
</div>

<!-- EmailJS -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
(function() {
  var EJS_KEY     = 'JOUW_PUBLIC_KEY';
  var EJS_SERVICE = 'JOUW_SERVICE_ID';
  var EJS_INTERN  = 'template_loc_intern';
  var EJS_KLANT   = 'template_loc_klant';

  emailjs.init({ publicKey: EJS_KEY });

  function getRadio(name) {
    var el = document.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : '—';
  }

  document.getElementById('locForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    var btn = document.getElementById('locSubmitBtn');
    btn.disabled = true; btn.textContent = 'Verzenden…';

    var data = {
      naam:         document.getElementById('l_naam').value,
      email:        document.getElementById('l_email').value,
      telefoon:     document.getElementById('l_telefoon').value || '—',
      organisatie:  document.getElementById('l_organisatie').value,
      adres:        document.getElementById('l_adres').value,
      coord_x:      document.getElementById('l_x').value || '—',
      coord_y:      document.getElementById('l_y').value || '—',
      kenmerk:      document.getElementById('l_kenmerk').value || '—',
      plaatsing:    getRadio('plaatsing'),
      proefsleuven: getRadio('proefsleuven'),
      ingemeten:    getRadio('ingemeten'),
      voertuig:     getRadio('voertuig'),
      inrichting:   getRadio('inrichting'),
      opmerkingen:  document.getElementById('l_opmerkingen').value || '—',
    };

    try {
      await emailjs.send(EJS_SERVICE, EJS_INTERN, { ...data, to_email: 'info@b-advice.info' });
      await emailjs.send(EJS_SERVICE, EJS_KLANT, data);
      document.getElementById('locForm').style.display = 'none';
      document.getElementById('locSuccess').classList.add('visible');
    } catch(err) {
      alert('Er is een fout opgetreden. Stuur uw aanvraag naar info@b-advice.info');
      btn.disabled = false; btn.textContent = 'Aanvraag versturen';
    }
  });
})();
</script>

<?php get_footer(); ?>
