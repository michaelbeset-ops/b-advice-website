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

-- ── 2. Wie is beheerder? ──────────────────────────────────────────────────
-- Tot nu toe mocht iedere ingelogde gebruiker alles. Dat leunde volledig op
-- de instelling "Allow new users to sign up": zodra die per ongeluk aanstaat,
-- kan iemand zichzelf aanmelden en meteen projecten wijzigen. Daarom staat
-- hieronder een expliciete lijst van beheerders; alleen wie daarin staat mag
-- schrijven.
create table if not exists public.beheerders (
  user_id       uuid primary key references auth.users (id) on delete cascade,
  toegevoegd_op timestamptz not null default now()
);

alter table public.beheerders enable row level security;

-- Een beheerder mag alleen zijn eigen regel zien; de lijst is verder dicht.
drop policy if exists "eigen beheerdersregel is leesbaar" on public.beheerders;
create policy "eigen beheerdersregel is leesbaar"
  on public.beheerders for select
  to authenticated
  using (user_id = auth.uid());

-- Eenmalige vulling: accounts die er nu al zijn blijven beheerder, zodat het
-- draaien van dit bestand niemand buitensluit. Daarna is de lijst handmatig:
--   insert into public.beheerders (user_id)
--   select id from auth.users where email = 'nieuwe@beheerder.nl';
-- Alleen bij de allereerste keer; bij een herhaalde run blijft de lijst zoals
-- hij is, zodat een later aangemaakt gewoon account niet alsnog beheerder wordt.
insert into public.beheerders (user_id)
select id from auth.users
where not exists (select 1 from public.beheerders)
on conflict (user_id) do nothing;

-- Hulpfunctie voor de policies hieronder. security definer, zodat de policy
-- de beheerderslijst kan lezen zonder daar zelf weer een policy voor nodig
-- te hebben.
create or replace function public.is_beheerder()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.beheerders where user_id = auth.uid());
$$;

-- ── 3. Beveiliging (row level security) ───────────────────────────────────
alter table public.projecten enable row level security;

-- Iedereen (ook de publicatie-workflow) mag gepubliceerde projecten lezen.
drop policy if exists "gepubliceerde projecten zijn openbaar" on public.projecten;
create policy "gepubliceerde projecten zijn openbaar"
  on public.projecten for select
  using (status = 'gepubliceerd');

-- Beheerders uit de lijst hierboven mogen alles: ook concepten lezen,
-- toevoegen, wijzigen en verwijderen. Een ingelogde gebruiker die niet in de
-- lijst staat, kan niets meer dan een willekeurige bezoeker.
drop policy if exists "beheerders mogen alles" on public.projecten;
create policy "beheerders mogen alles"
  on public.projecten for all
  to authenticated
  using (public.is_beheerder()) with check (public.is_beheerder());

-- ── 4. Opslag voor foto's en tekeningen ───────────────────────────────────
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
  with check (bucket_id = 'project-media' and public.is_beheerder());

drop policy if exists "beheerders mogen beeld vervangen" on storage.objects;
create policy "beheerders mogen beeld vervangen"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'project-media' and public.is_beheerder());

drop policy if exists "beheerders mogen beeld verwijderen" on storage.objects;
create policy "beheerders mogen beeld verwijderen"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'project-media' and public.is_beheerder());

-- ══════════════════════════════════════════════════════════════════════════
-- Klaar. Maak daarna nog één beheerder aan:
--   Authentication → Users → Add user → Create new user
--   Vul e-mailadres en wachtwoord in en zet "Auto Confirm User" aan.
--
-- Zet die nieuwe gebruiker daarna in de beheerderslijst, anders kan hij wel
-- inloggen maar niets wijzigen:
--   insert into public.beheerders (user_id)
--   select id from auth.users where email = 'nieuwe@beheerder.nl';
--
-- Zet tot slot registratie van nieuwe gebruikers UIT, zodat niemand zichzelf
-- een account kan aanmaken:
--   Authentication → Sign In / Providers → Email → "Allow new users to sign up" uit.
-- De beheerderslijst is de tweede slot op die deur: staat registratie toch
-- een keer open, dan levert een zelfgemaakt account nog steeds geen rechten.
-- ══════════════════════════════════════════════════════════════════════════
