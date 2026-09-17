-- ══════════════════════════════════════════════════════════════════════════
-- B-Advice — database voor de projectenbeheeromgeving
--
-- Plak dit bestand in Supabase onder  SQL Editor → New query  en druk op Run.
-- Eén keer uitvoeren is genoeg; het script is veilig om opnieuw te draaien.
-- ══════════════════════════════════════════════════════════════════════════

-- ── 1. Tabel ──────────────────────────────────────────────────────────────
create table if not exists public.projecten (
  id                  uuid primary key default gen_random_uuid(),
  slug                text unique not null,
  naam                text not null,
  opdrachtgever       text        not null default '',
  -- Aan/uit-veld: de naam van de opdrachtgever verschijnt alleen op de website
  -- als publicatie is toegestaan.
  opdrachtgever_tonen boolean     not null default false,
  locatie             text        not null default '',
  periode             text        not null default '',
  samenvatting        text        not null default '',
  werkzaamheden       jsonb       not null default '[]'::jsonb,
  resultaten          jsonb       not null default '[]'::jsonb,
  diensten            jsonb       not null default '[]'::jsonb,
  afbeeldingen        jsonb       not null default '[]'::jsonb,
  status              text        not null default 'concept'
                        check (status in ('concept', 'gepubliceerd')),
  volgorde            integer     not null default 100,
  aangemaakt_op       timestamptz not null default now(),
  bijgewerkt_op       timestamptz not null default now()
);

create index if not exists projecten_status_volgorde_idx
  on public.projecten (status, volgorde);

-- ── 2. Beveiliging (row level security) ───────────────────────────────────
alter table public.projecten enable row level security;

-- Iedereen (ook de publicatie-workflow) mag gepubliceerde projecten lezen.
drop policy if exists "gepubliceerde projecten zijn openbaar" on public.projecten;
create policy "gepubliceerde projecten zijn openbaar"
  on public.projecten for select
  using (status = 'gepubliceerd');

-- Ingelogde beheerders mogen alles: ook concepten lezen, toevoegen,
-- wijzigen en verwijderen.
drop policy if exists "beheerders mogen alles" on public.projecten;
create policy "beheerders mogen alles"
  on public.projecten for all
  to authenticated
  using (true) with check (true);

-- ── 3. Opslag voor foto's en tekeningen ───────────────────────────────────
insert into storage.buckets (id, name, public)
values ('project-media', 'project-media', true)
on conflict (id) do update set public = true;

drop policy if exists "projectbeeld is openbaar leesbaar" on storage.objects;
create policy "projectbeeld is openbaar leesbaar"
  on storage.objects for select
  using (bucket_id = 'project-media');

drop policy if exists "beheerders mogen beeld uploaden" on storage.objects;
create policy "beheerders mogen beeld uploaden"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'project-media');

drop policy if exists "beheerders mogen beeld vervangen" on storage.objects;
create policy "beheerders mogen beeld vervangen"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'project-media');

drop policy if exists "beheerders mogen beeld verwijderen" on storage.objects;
create policy "beheerders mogen beeld verwijderen"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'project-media');

-- ══════════════════════════════════════════════════════════════════════════
-- Klaar. Maak daarna nog één beheerder aan:
--   Authentication → Users → Add user → Create new user
--   Vul e-mailadres en wachtwoord in en zet "Auto Confirm User" aan.
--
-- Zet tot slot registratie van nieuwe gebruikers UIT, zodat niemand zichzelf
-- een account kan aanmaken:
--   Authentication → Sign In / Providers → Email → "Allow new users to sign up" uit.
-- ══════════════════════════════════════════════════════════════════════════
