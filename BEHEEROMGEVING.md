# Beheeromgeving projecten — installatie en gebruik

De website is een statische site op GitHub Pages. Er draait geen server, dus de
beheeromgeving gebruikt **Supabase** voor inloggen, opslag van de projectgegevens
en het uploaden van foto's. De gratis tier is ruim voldoende.

---

## Deel 1 — Eenmalig instellen (ongeveer 15 minuten)

### 1. Supabase-project aanmaken
1. Ga naar <https://supabase.com> en maak een gratis account.
2. Klik **New project**. Kies als regio **West EU (Ireland)** of **Central EU
   (Frankfurt)** — daarmee blijven de gegevens binnen de EU, wat voor een
   leverancier van gemeenten prettig uit te leggen is.
3. Bewaar het database-wachtwoord dat je instelt (je hebt het verder niet nodig
   voor de website, wel om later bij de database te kunnen).

### 2. De database inrichten
1. Open in Supabase links **SQL Editor** → **New query**.
2. Plak de volledige inhoud van `supabase/schema.sql` uit deze repository.
3. Klik **Run**. Je krijgt "Success. No rows returned" — dat klopt.

Dit maakt de tabel `projecten`, de beveiligingsregels en de opslagmap
`project-media` aan.

### 3. Een beheerder aanmaken
1. Ga naar **Authentication** → **Users** → **Add user** → **Create new user**.
2. Vul het e-mailadres en een wachtwoord in en zet **Auto Confirm User** aan.
3. Ga daarna naar **Authentication** → **Sign In / Providers** → **Email** en zet
   **Allow new users to sign up** **uit**. Zonder deze stap kan iedereen zichzelf
   een account aanmaken.

### 4. De website koppelen
1. Ga in Supabase naar **Project Settings** → **API**.
2. Kopieer **Project URL** en de sleutel **anon public**.
3. Open `docs/admin/config.js` in deze repository en vul ze in:

   ```js
   window.B_ADVICE_CONFIG = {
     SUPABASE_URL: "https://xxxxxxxx.supabase.co",
     SUPABASE_ANON_KEY: "eyJhbGciOi...",
     BUCKET: "project-media",
   };
   ```

4. Sla het bestand op en zet de wijziging op `main`.

> **Let op:** gebruik nooit de sleutel **service_role**. Die geeft volledige
> toegang tot de database. De sleutel `anon public` is bedoeld om openbaar te
> zijn: hij mag alleen gepubliceerde projecten lezen, en alles daarbuiten vereist
> een login.

### 5. Controleren
Ga naar <https://b-advice.info/admin/>. Je ziet nu een inlogscherm in plaats van
de installatie-uitleg. Log in met het account uit stap 3.

---

## Deel 2 — Dagelijks gebruik

### Een project toevoegen
1. Ga naar <https://b-advice.info/admin/> en log in.
2. Klik **+ Nieuw project**.
3. Vul in: naam, opdrachtgever, locatie, korte omschrijving, uitgevoerde
   werkzaamheden en resultaten.
4. Sleep foto's of inrichtingstekeningen in het uploadvak. Vul bij elke afbeelding
   een korte omschrijving in — die wordt gebruikt door Google en door
   schermlezers.
5. Vink aan bij welke dienstenpagina's het project als referentie moet verschijnen.
6. Kies de status:
   - **Concept** — alleen zichtbaar in de beheeromgeving en via een directe link.
     Staat niet in het projectoverzicht en niet in Google.
   - **Gepubliceerd** — zichtbaar op de website.
7. Klik **Opslaan**.

### Naam van de opdrachtgever
De schakelaar **Naam opdrachtgever tonen op de website** staat standaard uit. Zet
hem alleen aan als de opdrachtgever toestemming heeft gegeven voor publicatie.
Staat hij uit, dan blijft de naam onzichtbaar voor bezoekers — ook in de
projectkaarten en in de broncode van de pagina.

### Wanneer is een wijziging zichtbaar?
Een automatische taak haalt elk half uur de gepubliceerde projecten op, zet de
foto's om naar WebP en genereert de pagina's opnieuw. Reken op **maximaal een half
uur**. Wil je niet wachten, start de taak dan handmatig:
**GitHub → Actions → Projecten publiceren → Run workflow**.

### Wachtwoord vergeten
Supabase → **Authentication** → **Users** → klik op de gebruiker →
**Reset password**.

---

## Waarom Supabase en niet een JSON-bestand?

Een JSON-bestand in de repository is de eenvoudigste opslag, maar een browser kan
niet zelf in een GitHub-repository schrijven. Daarvoor is een toegangstoken nodig,
en dat token zou dan in de browser van de klant moeten staan — onveilig en
bewerkelijk. Ook het uploaden van foto's via slepen werkt dan niet.

De gekozen opzet combineert de voordelen van beide:

| Onderdeel | Waar | Waarom |
|---|---|---|
| Invoer, login, foto-upload | Supabase | Werkt vanuit de browser, met login en drag-and-drop |
| Wat bezoekers zien | Statische HTML in `docs/` | Snel, goed indexeerbaar, geen externe afhankelijkheid |
| De brug ertussen | GitHub Action, elk half uur | Zet Supabase-gegevens om in statische pagina's |

Gevolg: de projectpagina's blijven gewone HTML-bestanden met nette webadressen
(`/projecten/naam-van-het-project/`). Google kan ze normaal indexeren, en als
Supabase ooit uitvalt blijft de website gewoon werken.

---

## Kosten

| Onderdeel | Kosten |
|---|---|
| Supabase, gratis tier | € 0 — 500 MB database, 1 GB bestandsopslag, 50.000 actieve gebruikers per maand |
| GitHub Pages en Actions (publieke repository) | € 0 |
| Domeinnaam b-advice.info | ongeveer € 10 – 15 per jaar, via de huidige registrar |

Bij de gratis tier van Supabase wordt een project dat een week lang niet wordt
gebruikt gepauzeerd. Omdat de website zelf niets van Supabase nodig heeft (de
pagina's zijn statisch) merkt een bezoeker daar niets van; je moet het project dan
eenmalig weer starten in het Supabase-dashboard voordat je kunt inloggen op de
beheeromgeving. Wie dat wil voorkomen, neemt het Pro-plan (ongeveer $25 per maand).
Voor dit gebruik is dat niet nodig.
