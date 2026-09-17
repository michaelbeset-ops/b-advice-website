/* Beheeromgeving projecten — B-Advice
   Praat met Supabase (auth, tabel `projecten`, storage-bucket voor beeldmateriaal).
   Zie BEHEEROMGEVING.md voor de installatie. */

const CFG = window.B_ADVICE_CONFIG || {};
const $ = (id) => document.getElementById(id);
const schermen = ["scherm-setup", "scherm-login", "scherm-overzicht", "scherm-bewerken"];

function toon(id) {
  schermen.forEach((s) => ($(s).hidden = s !== id));
  window.scrollTo(0, 0);
}

function melding(doel, tekst, soort = "fout") {
  $(doel).innerHTML = tekst
    ? `<div class="melding melding-${soort}">${tekst}</div>`
    : "";
}

// De Supabase-bibliotheek wordt pas geladen als de configuratie klopt, zodat een
// storing bij de CDN nooit een leeg scherm oplevert maar een leesbare melding.
let createClient;
try {
  ({ createClient } = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"));
} catch (e) {
  toon("scherm-login");
  melding("login-melding",
    "De beheeromgeving kon niet worden geladen. Controleer je internetverbinding " +
    "en probeer het over een paar minuten opnieuw.");
  throw e;
}

const db = createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY);
const BUCKET = CFG.BUCKET || "project-media";

let projecten = [];
let huidig = null;      // het project dat wordt bewerkt
let media = [];         // afbeeldingen van het huidige project

/* ── Hulpfuncties ───────────────────────────────────────────────────────── */

function slugify(tekst) {
  return (tekst || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function esc(t) {
  const d = document.createElement("div");
  d.textContent = t ?? "";
  return d.innerHTML;
}

function foutTekst(error) {
  if (!error) return "Er ging iets mis.";
  if (error.message?.includes("Invalid login credentials")) {
    return "E-mailadres of wachtwoord klopt niet.";
  }
  if (error.message?.includes("duplicate key")) {
    return "Er bestaat al een project met dit webadres. Kies een ander webadres.";
  }
  if (error.message?.includes("Failed to fetch")) {
    return "Geen verbinding met de database. Controleer je internetverbinding en probeer het opnieuw.";
  }
  return esc(error.message || String(error));
}

/* ── Inloggen ───────────────────────────────────────────────────────────── */

$("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const knop = $("login-knop");
  knop.disabled = true;
  knop.textContent = "Bezig met inloggen…";
  melding("login-melding", "");
  const { error } = await db.auth.signInWithPassword({
    email: $("login-email").value.trim(),
    password: $("login-wachtwoord").value,
  });
  knop.disabled = false;
  knop.textContent = "Inloggen";
  if (error) melding("login-melding", foutTekst(error));
});

$("uitloggen").addEventListener("click", async () => {
  await db.auth.signOut();
});

db.auth.onAuthStateChange((_event, sessie) => {
  if (sessie) {
    $("wie").textContent = sessie.user.email;
    laadProjecten();
  } else {
    projecten = [];
    toon("scherm-login");
  }
});

/* ── Overzicht ──────────────────────────────────────────────────────────── */

async function laadProjecten() {
  const { data, error } = await db
    .from("projecten")
    .select("*")
    .order("volgorde", { ascending: true })
    .order("naam", { ascending: true });
  if (error) {
    toon("scherm-overzicht");
    melding("overzicht-melding", foutTekst(error));
    return;
  }
  projecten = data || [];
  tekenLijst();
  toon("scherm-overzicht");
}

function tekenLijst() {
  const lijst = $("lijst");
  if (!projecten.length) {
    lijst.innerHTML = `<div class="leeg-melding">
      <p>Er zijn nog geen projecten.</p>
      <p style="margin-top:10px;font-size:14px;">Klik op <strong>+ Nieuw project</strong> om te beginnen.</p>
    </div>`;
    return;
  }
  lijst.innerHTML = projecten.map((p) => {
    const eerste = (p.afbeeldingen || [])[0];
    const beeld = eerste
      ? `<img class="rij-beeld" src="${esc(eerste.url)}" alt="">`
      : `<div class="rij-beeld rij-beeld-leeg">geen foto</div>`;
    const merk = p.status === "gepubliceerd"
      ? `<span class="merk merk-gepubliceerd">Gepubliceerd</span>`
      : `<span class="merk merk-concept">Concept</span>`;
    const meta = [p.locatie, p.opdrachtgever_tonen ? p.opdrachtgever : null]
      .filter(Boolean).map(esc).join(" · ");
    return `<div class="rij">
      ${beeld}
      <div>
        <div class="rij-titel">${esc(p.naam)}${merk}</div>
        <div class="rij-meta">${meta || "—"}</div>
      </div>
      <div class="rij-acties">
        <a class="knop knop-rand knop-klein" href="/projecten/${esc(p.slug)}/" target="_blank" rel="noopener">Bekijk</a>
        <button class="knop knop-klein" data-bewerk="${esc(p.id)}">Bewerken</button>
      </div>
    </div>`;
  }).join("");

  lijst.querySelectorAll("[data-bewerk]").forEach((b) => {
    b.addEventListener("click", () => open(projecten.find((p) => p.id === b.dataset.bewerk)));
  });
}

$("nieuw-project").addEventListener("click", () => open(null));
$("terug").addEventListener("click", () => laadProjecten());
$("annuleren").addEventListener("click", () => laadProjecten());

/* ── Bewerken ───────────────────────────────────────────────────────────── */

function open(project) {
  huidig = project;
  melding("bewerk-melding", "");
  $("bewerk-titel").textContent = project ? "Project bewerken" : "Nieuw project";
  $("verwijderen").hidden = !project;

  const p = project || {};
  $("f-naam").value = p.naam || "";
  $("f-opdrachtgever").value = p.opdrachtgever || "";
  $("f-opdrachtgever-tonen").checked = !!p.opdrachtgever_tonen;
  $("f-locatie").value = p.locatie || "";
  $("f-periode").value = p.periode || "";
  $("f-samenvatting").value = p.samenvatting || "";
  $("f-status").value = p.status || "concept";
  $("f-volgorde").value = p.volgorde ?? 100;
  $("f-slug").value = p.slug || "";
  $("slug-voorbeeld").textContent = p.slug || "…";

  document.querySelectorAll('input[name="dienst"]').forEach((c) => {
    c.checked = (p.diensten || []).includes(c.value);
  });

  tekenLijstveld("werkzaamheden", p.werkzaamheden || []);
  tekenLijstveld("resultaten", p.resultaten || []);
  media = JSON.parse(JSON.stringify(p.afbeeldingen || []));
  tekenMedia();
  toon("scherm-bewerken");
}

// Naam → webadres, zolang het adres nog niet handmatig is gezet.
$("f-naam").addEventListener("input", () => {
  if (huidig?.slug) return;
  const s = slugify($("f-naam").value);
  $("f-slug").value = s;
  $("slug-voorbeeld").textContent = s || "…";
});
$("f-slug").addEventListener("input", () => {
  $("slug-voorbeeld").textContent = slugify($("f-slug").value) || "…";
});

/* Lijstvelden */
function tekenLijstveld(naam, waarden) {
  const doel = $(`${naam}-lijst`);
  doel.innerHTML = "";
  (waarden.length ? waarden : [""]).forEach((w) => doel.appendChild(lijstRegel(w)));
}

function lijstRegel(waarde) {
  const rij = document.createElement("div");
  rij.className = "lijst-item";
  const ta = document.createElement("textarea");
  ta.value = waarde;
  ta.rows = 2;
  const knop = document.createElement("button");
  knop.type = "button";
  knop.className = "lijst-verwijder";
  knop.title = "Regel verwijderen";
  knop.setAttribute("aria-label", "Regel verwijderen");
  knop.textContent = "×";
  knop.addEventListener("click", () => rij.remove());
  rij.append(ta, knop);
  return rij;
}

document.querySelectorAll("[data-lijst]").forEach((b) => {
  b.addEventListener("click", () => $(`${b.dataset.lijst}-lijst`).appendChild(lijstRegel("")));
});

function leesLijstveld(naam) {
  return [...$(`${naam}-lijst`).querySelectorAll("textarea")]
    .map((t) => t.value.trim()).filter(Boolean);
}

/* ── Afbeeldingen ───────────────────────────────────────────────────────── */

const dropzone = $("dropzone");
const bestandInput = $("bestand-input");

dropzone.addEventListener("click", () => bestandInput.click());
dropzone.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); bestandInput.click(); }
});
["dragenter", "dragover"].forEach((t) =>
  dropzone.addEventListener(t, (e) => { e.preventDefault(); dropzone.classList.add("actief"); }));
["dragleave", "drop"].forEach((t) =>
  dropzone.addEventListener(t, (e) => { e.preventDefault(); dropzone.classList.remove("actief"); }));
dropzone.addEventListener("drop", (e) => upload([...e.dataTransfer.files]));
bestandInput.addEventListener("change", () => { upload([...bestandInput.files]); bestandInput.value = ""; });

const MAX_BYTES = 10 * 1024 * 1024;

async function upload(bestanden) {
  const beelden = bestanden.filter((f) => f.type.startsWith("image/"));
  if (!beelden.length) {
    melding("bewerk-melding", "Alleen afbeeldingen kunnen worden geüpload (JPG, PNG of WebP).");
    return;
  }
  melding("bewerk-melding", "");
  for (const bestand of beelden) {
    if (bestand.size > MAX_BYTES) {
      melding("bewerk-melding",
        `“${esc(bestand.name)}” is groter dan 10 MB en is overgeslagen.`, "let-op");
      continue;
    }
    const naam = `${Date.now()}-${slugify(bestand.name.replace(/\.[^.]+$/, ""))}` +
                 `.${(bestand.name.split(".").pop() || "jpg").toLowerCase()}`;
    dropzone.querySelector("strong").textContent = `Bezig met uploaden: ${bestand.name}…`;
    const { error } = await db.storage.from(BUCKET).upload(naam, bestand, {
      cacheControl: "31536000", upsert: false,
    });
    dropzone.querySelector("strong").textContent = "Sleep afbeeldingen hierheen";
    if (error) { melding("bewerk-melding", foutTekst(error)); continue; }
    const { data } = db.storage.from(BUCKET).getPublicUrl(naam);
    media.push({ pad: naam, url: data.publicUrl, alt: "", bijschrift: "" });
    tekenMedia();
  }
}

function tekenMedia() {
  const doel = $("media-lijst");
  doel.innerHTML = media.map((m, i) => `
    <div class="media-kaart">
      <img src="${esc(m.url)}" alt="">
      <div class="media-velden">
        <input type="text" data-veld="alt" data-i="${i}" value="${esc(m.alt)}" placeholder="Omschrijving (voor Google en schermlezers)">
        <input type="text" data-veld="bijschrift" data-i="${i}" value="${esc(m.bijschrift)}" placeholder="Bijschrift onder de foto (optioneel)">
        <div class="media-knoppen">
          <button type="button" data-op="${i}" ${i === 0 ? "disabled" : ""} title="Naar voren">&uarr;</button>
          <button type="button" data-neer="${i}" ${i === media.length - 1 ? "disabled" : ""} title="Naar achteren">&darr;</button>
          <button type="button" class="verwijder" data-weg="${i}">Verwijderen</button>
        </div>
      </div>
    </div>`).join("");

  doel.querySelectorAll("[data-veld]").forEach((inp) => {
    inp.addEventListener("input", () => { media[+inp.dataset.i][inp.dataset.veld] = inp.value; });
  });
  doel.querySelectorAll("[data-op]").forEach((b) => b.addEventListener("click", () => wissel(+b.dataset.op, -1)));
  doel.querySelectorAll("[data-neer]").forEach((b) => b.addEventListener("click", () => wissel(+b.dataset.neer, 1)));
  doel.querySelectorAll("[data-weg]").forEach((b) => b.addEventListener("click", () => verwijderMedia(+b.dataset.weg)));
}

function wissel(i, richting) {
  const j = i + richting;
  if (j < 0 || j >= media.length) return;
  [media[i], media[j]] = [media[j], media[i]];
  tekenMedia();
}

async function verwijderMedia(i) {
  if (!confirm("Deze afbeelding verwijderen?")) return;
  const m = media[i];
  if (m.pad) await db.storage.from(BUCKET).remove([m.pad]);
  media.splice(i, 1);
  tekenMedia();
}

/* ── Opslaan en verwijderen ─────────────────────────────────────────────── */

$("project-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const knop = $("opslaan");
  const slug = slugify($("f-slug").value || $("f-naam").value);
  if (!slug) {
    melding("bewerk-melding", "Vul een naam in; daaruit wordt het webadres afgeleid.");
    return;
  }
  const rij = {
    slug,
    naam: $("f-naam").value.trim(),
    opdrachtgever: $("f-opdrachtgever").value.trim(),
    opdrachtgever_tonen: $("f-opdrachtgever-tonen").checked,
    locatie: $("f-locatie").value.trim(),
    periode: $("f-periode").value.trim(),
    samenvatting: $("f-samenvatting").value.trim(),
    werkzaamheden: leesLijstveld("werkzaamheden"),
    resultaten: leesLijstveld("resultaten"),
    diensten: [...document.querySelectorAll('input[name="dienst"]:checked')].map((c) => c.value),
    afbeeldingen: media,
    status: $("f-status").value,
    volgorde: Number($("f-volgorde").value) || 100,
    bijgewerkt_op: new Date().toISOString(),
  };

  knop.disabled = true;
  knop.textContent = "Bezig met opslaan…";
  const { error } = huidig
    ? await db.from("projecten").update(rij).eq("id", huidig.id)
    : await db.from("projecten").insert(rij);
  knop.disabled = false;
  knop.textContent = "Opslaan";

  if (error) { melding("bewerk-melding", foutTekst(error)); return; }
  await laadProjecten();
  melding("overzicht-melding",
    `“${esc(rij.naam)}” is opgeslagen als <strong>${rij.status === "gepubliceerd" ? "gepubliceerd" : "concept"}</strong>.`,
    "goed");
});

$("verwijderen").addEventListener("click", async () => {
  if (!huidig) return;
  if (!confirm(`“${huidig.naam}” definitief verwijderen? Dit kan niet ongedaan worden gemaakt.`)) return;
  const paden = (huidig.afbeeldingen || []).map((m) => m.pad).filter(Boolean);
  if (paden.length) await db.storage.from(BUCKET).remove(paden);
  const { error } = await db.from("projecten").delete().eq("id", huidig.id);
  if (error) { melding("bewerk-melding", foutTekst(error)); return; }
  await laadProjecten();
  melding("overzicht-melding", "Het project is verwijderd.", "goed");
});

/* ── Start ──────────────────────────────────────────────────────────────── */
const { data: { session } } = await db.auth.getSession();
if (!session) toon("scherm-login");
