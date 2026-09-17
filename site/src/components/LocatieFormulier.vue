<script setup lang="ts">
/**
 * Locatieaanvraag. Hetzelfde principe als het contactformulier: het <form>
 * post ook zonder JavaScript rechtstreeks naar Web3Forms. Met JavaScript
 * blijft de bezoeker op de pagina en ziet hij de bevestiging in beeld.
 *
 * De velden komen uit src/data/site.ts, zodat een veld toevoegen of
 * hernoemen daar gebeurt en niet in dit bestand.
 */
import { ref } from "vue";

type Veld =
  | { soort: "tekst"; naam: string; label: string; type: string; hint?: string; verplicht?: boolean; autocomplete?: string }
  | { soort: "tekstvak"; naam: string; label: string; hint?: string; verplicht?: boolean }
  | { soort: "keuze"; naam: string; label: string; opties: readonly string[] };

const props = defineProps<{
  toegangssleutel: string;
  onderdelen: readonly { titel: string; sub: string; velden: readonly Veld[] }[];
  bevestiging: { kop: string; tekst: string };
  privacyUrl: string;
  email: string;
  telefoon: string;
}>();

type Status = "invullen" | "bezig" | "verzonden" | "mislukt";
const status = ref<Status>("invullen");
const foutmelding = ref("");

const invoerklasse =
  "mt-1.5 w-full rounded-base border border-line bg-wit px-3.5 py-3 text-base text-ink " +
  "placeholder:text-ink-4 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/15";

async function verstuur(e: Event) {
  const formulier = e.target as HTMLFormElement;
  e.preventDefault();
  status.value = "bezig";
  foutmelding.value = "";

  const velden = Object.fromEntries(new FormData(formulier) as any);
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...velden, subject: `Nieuwe locatieaanvraag - ${velden.naam}` }),
    });
    const uitslag = await res.json();
    if (!res.ok || !uitslag.success) throw new Error(uitslag.message || "Verzenden mislukt");

    (window as any).plausible?.("Locatieaanvraag");
    (window as any).sa_event?.("locatieaanvraag");
    status.value = "verzonden";
  } catch {
    status.value = "mislukt";
    foutmelding.value =
      `Uw aanvraag is mogelijk niet verzonden. Mail naar ${props.email} of bel ${props.telefoon}.`;
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
    <h2 class="mt-4 font-display text-xl font-extrabold tracking-tight text-ink">
      {{ bevestiging.kop }}
    </h2>
    <p class="mt-2 text-base text-ink-3">{{ bevestiging.tekst }}</p>
  </div>

  <form
    v-else
    action="https://api.web3forms.com/submit"
    method="POST"
    class="space-y-12"
    @submit="verstuur"
  >
    <input type="hidden" name="access_key" :value="toegangssleutel" />
    <input type="hidden" name="from_name" value="B-Advice Website" />
    <input type="hidden" name="subject" value="Nieuwe locatieaanvraag" />
    <!-- Honeypot: onzichtbaar voor bezoekers, Web3Forms weigert de inzending
         als dit veld is ingevuld. -->
    <input type="checkbox" name="botcheck" class="hidden" tabindex="-1"
           autocomplete="off" aria-hidden="true" />

    <p
      v-if="status === 'mislukt'"
      class="rounded-base border border-[#c0392b]/30 bg-[#c0392b]/5 px-4 py-3 text-sm text-[#8e2a1f]"
      role="alert"
    >
      {{ foutmelding }}
    </p>

    <fieldset v-for="(onderdeel, i) in onderdelen" :key="onderdeel.titel" class="border-t-2 border-accent/25 pt-5">
      <legend class="sr-only">{{ onderdeel.titel }}</legend>
      <p class="font-display text-sm font-bold text-accent">
        {{ String(i + 1).padStart(2, "0") }}
      </p>
      <p class="mt-2 font-display text-lg font-bold tracking-tight text-ink">{{ onderdeel.titel }}</p>
      <p class="mt-1 text-sm text-ink-4">{{ onderdeel.sub }}</p>

      <div class="mt-7 grid gap-5 sm:grid-cols-2">
        <template v-for="veld in onderdeel.velden" :key="veld.naam">
          <label v-if="veld.soort === 'tekst'" class="block">
            <span class="text-sm font-semibold text-ink-2">
              {{ veld.label }} <span v-if="veld.verplicht" class="text-accent">*</span>
            </span>
            <input
              :type="veld.type"
              :name="veld.naam"
              :required="veld.verplicht"
              :autocomplete="veld.autocomplete"
              :placeholder="veld.hint"
              :class="invoerklasse"
            />
          </label>

          <label v-else-if="veld.soort === 'tekstvak'" class="block sm:col-span-2">
            <span class="text-sm font-semibold text-ink-2">{{ veld.label }}</span>
            <textarea
              :name="veld.naam"
              rows="5"
              :placeholder="veld.hint"
              :class="invoerklasse"
            ></textarea>
          </label>

          <!-- Drie vaste antwoorden: radio's, geen uitklaplijst. Alles staat
               meteen in beeld en het scheelt een tik op een telefoon. -->
          <fieldset v-else class="sm:col-span-2">
            <legend class="text-sm font-semibold text-ink-2">{{ veld.label }}</legend>
            <div class="mt-2.5 flex flex-wrap gap-2.5">
              <label
                v-for="optie in veld.opties"
                :key="optie"
                class="cursor-pointer rounded-base border border-line bg-wit px-4 py-2.5 text-sm text-ink-2 transition-colors hover:border-ink-3 focus-within:border-accent focus-within:ring-[3px] focus-within:ring-accent/15 has-[:checked]:border-accent has-[:checked]:bg-accent/5 has-[:checked]:font-semibold has-[:checked]:text-accent"
              >
                <input type="radio" :name="veld.naam" :value="optie" class="sr-only" />
                {{ optie }}
              </label>
            </div>
          </fieldset>
        </template>
      </div>
    </fieldset>

    <div>
      <p class="text-sm text-ink-4">
        Door te verzenden gaat u akkoord met onze
        <a :href="privacyUrl" class="text-accent underline underline-offset-2">privacyverklaring</a>.
      </p>
      <button
        type="submit"
        :disabled="status === 'bezig'"
        class="mt-5 w-full rounded-base bg-accent px-7 py-4 text-base font-semibold text-wit transition-colors hover:bg-accent-deep disabled:opacity-60 sm:w-auto sm:py-3.5"
      >
        {{ status === "bezig" ? "Bezig met verzenden…" : "Aanvraag versturen" }}
      </button>
    </div>
  </form>
</template>
