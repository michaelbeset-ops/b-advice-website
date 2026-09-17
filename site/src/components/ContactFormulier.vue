<script setup lang="ts">
/**
 * Contactformulier. Dit is het enige onderdeel van de site dat JavaScript
 * nodig heeft, en daarom het enige island.
 *
 * Zonder JavaScript werkt het ook: het <form> post rechtstreeks naar
 * Web3Forms en de bezoeker belandt op hun bevestigingspagina. Met JavaScript
 * blijft hij op de site en ziet hij de bevestiging in beeld.
 *
 * De access key van Web3Forms is bedoeld om openbaar te zijn; hij staat ook
 * in de huidige site. Zet in het Web3Forms-dashboard wel de domeinrestrictie
 * op b-advice.info aan, anders kan iedereen die hem uitleest jouw quotum
 * opmaken.
 */
import { ref } from "vue";

const props = defineProps<{
  toegangssleutel: string;
  onderwerpen: readonly string[];
  privacyUrl: string;
  email: string;
  telefoon: string;
}>();

type Status = "invullen" | "bezig" | "verzonden" | "mislukt";
const status = ref<Status>("invullen");
const foutmelding = ref("");

async function verstuur(e: Event) {
  const formulier = e.target as HTMLFormElement;
  // Zonder JavaScript komt deze functie nooit langs en post het formulier
  // gewoon zelf; daarom pas hier het standaardgedrag onderdrukken.
  e.preventDefault();
  status.value = "bezig";
  foutmelding.value = "";

  const velden = Object.fromEntries(new FormData(formulier) as any);
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...velden, subject: `Nieuw contactformulier - ${velden.Naam}` }),
    });
    const uitslag = await res.json();
    if (!res.ok || !uitslag.success) throw new Error(uitslag.message || "Verzenden mislukt");

    // Conversie melden aan de statistieken zodra die er zijn; zonder
    // statistieken gebeurt hier niets.
    (window as any).plausible?.("Contactaanvraag");
    (window as any).sa_event?.("contactaanvraag");
    status.value = "verzonden";
  } catch {
    status.value = "mislukt";
    foutmelding.value =
      `Uw bericht is mogelijk niet verzonden. Mail naar ${props.email} of bel ${props.telefoon}.`;
  }
}
</script>

<template>
  <div
    v-if="status === 'verzonden'"
    class="rounded-kaart border border-accent/30 bg-accent/5 p-8"
    role="status"
  >
    <svg viewBox="0 0 24 24" class="h-8 w-8 text-accent" aria-hidden="true">
      <polyline points="4,13 9,18 20,6" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <h2 class="mt-4 font-display text-xl font-extrabold tracking-tight text-ink">Bericht verzonden</h2>
    <p class="mt-2 text-base text-ink-3">
      Bedankt voor uw bericht. Wij reageren binnen één werkdag.
    </p>
  </div>

  <form
    v-else
    action="https://api.web3forms.com/submit"
    method="POST"
    class="space-y-5"
    @submit="verstuur"
  >
    <input type="hidden" name="access_key" :value="toegangssleutel" />
    <input type="hidden" name="from_name" value="B-Advice Website" />
    <input type="hidden" name="subject" value="Nieuw contactformulier" />
    <!-- Honeypot: onzichtbaar voor bezoekers. Web3Forms weigert inzendingen
         waarbij dit veld is ingevuld. -->
    <input
      type="checkbox"
      name="botcheck"
      class="hidden"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
    />

    <p
      v-if="status === 'mislukt'"
      class="rounded-base border border-[#c0392b]/30 bg-[#c0392b]/5 px-4 py-3 text-sm text-[#8e2a1f]"
      role="alert"
    >
      {{ foutmelding }}
    </p>

    <div class="grid gap-5 sm:grid-cols-2">
      <label class="block">
        <span class="text-sm font-semibold text-ink-2">Naam <span class="text-accent">*</span></span>
        <input
          type="text" name="Naam" required autocomplete="name"
          placeholder="Uw volledige naam"
          class="mt-1.5 w-full rounded-base border border-line bg-wit px-3.5 py-3 text-base text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/15"
        />
      </label>
      <label class="block">
        <span class="text-sm font-semibold text-ink-2">E-mailadres <span class="text-accent">*</span></span>
        <input
          type="email" name="E-mail" required autocomplete="email"
          placeholder="uw@email.nl"
          class="mt-1.5 w-full rounded-base border border-line bg-wit px-3.5 py-3 text-base text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/15"
        />
      </label>
      <label class="block">
        <span class="text-sm font-semibold text-ink-2">Telefoonnummer</span>
        <input
          type="tel" name="Telefoon" autocomplete="tel"
          placeholder="+31 6 12 34 56 78"
          class="mt-1.5 w-full rounded-base border border-line bg-wit px-3.5 py-3 text-base text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/15"
        />
      </label>
      <label class="block">
        <span class="text-sm font-semibold text-ink-2">Organisatie</span>
        <input
          type="text" name="Organisatie" autocomplete="organization"
          placeholder="Gemeente of bedrijfsnaam"
          class="mt-1.5 w-full rounded-base border border-line bg-wit px-3.5 py-3 text-base text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/15"
        />
      </label>
    </div>

    <label class="block">
      <span class="text-sm font-semibold text-ink-2">Onderwerp <span class="text-accent">*</span></span>
      <select
        name="Onderwerp" required
        class="mt-1.5 w-full rounded-base border border-line bg-wit px-3.5 py-3 text-base text-ink focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/15"
      >
        <option value="">Kies een onderwerp</option>
        <option v-for="onderwerp in onderwerpen" :key="onderwerp">{{ onderwerp }}</option>
      </select>
    </label>

    <label class="block">
      <span class="text-sm font-semibold text-ink-2">Bericht <span class="text-accent">*</span></span>
      <textarea
        name="Bericht" required rows="6"
        placeholder="Vertel kort waar uw project staat en waar u ondersteuning bij zoekt."
        class="mt-1.5 w-full rounded-base border border-line bg-wit px-3.5 py-3 text-base leading-relaxed text-ink placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/15"
      ></textarea>
    </label>

    <p class="text-sm text-ink-4">
      Door te verzenden gaat u akkoord met onze
      <a :href="privacyUrl" class="text-accent underline underline-offset-2">privacyverklaring</a>.
      Uw gegevens worden uitsluitend gebruikt om uw vraag te beantwoorden.
    </p>

    <button
      type="submit"
      :disabled="status === 'bezig'"
      class="w-full rounded-base bg-accent px-7 py-4 text-base font-semibold text-wit transition-colors hover:bg-accent-deep disabled:opacity-60 sm:w-auto sm:py-3.5"
    >
      {{ status === "bezig" ? "Bezig met verzenden…" : "Bericht versturen" }}
    </button>
  </form>
</template>
