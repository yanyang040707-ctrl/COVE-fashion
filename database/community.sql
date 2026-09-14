-- Run once in the project's Supabase SQL editor. No service role key is needed by the website.
create table if not exists public.cove_posts (
  id bigint generated always as identity (start with 1000000) primary key,
  user_id uuid not null references auth.users(id),
  kind text not null check (kind in ('work', 'job')),
  payload jsonb not null check (jsonb_typeof(payload) = 'object' and octet_length(payload::text) < 50000),
  media text[] not null default '{}',
  request_id uuid not null,
  created_at timestamptz not null default now(),
  unique (user_id, request_id),
  check (payload ? 'title' and length(trim(payload->>'title')) between 1 and 60),
  check (cardinality(media) <= 9),
  check (kind <> 'work' or cardinality(media) >= 1)
);
create index if not exists cove_posts_owner on public.cove_posts(user_id, created_at desc);
alter table public.cove_posts enable row level security;

create or replace function public.cove_owns_media(paths text[])
returns boolean language sql stable security invoker set search_path = '' as $$
 select not exists (select 1 from unnest(paths) p where p not like auth.uid()::text || '/%' or p like '%..%');
$$;

drop policy if exists "Read published posts" on public.cove_posts;
create policy "Read published posts" on public.cove_posts for select to anon, authenticated using (true);
drop policy if exists "Publish own posts" on public.cove_posts;
create policy "Publish own posts" on public.cove_posts for insert to authenticated
with check (user_id = (select auth.uid()) and public.cove_owns_media(media));
drop policy if exists "Delete own posts" on public.cove_posts;
create policy "Delete own posts" on public.cove_posts for delete to authenticated using (user_id = (select auth.uid()));
grant select on public.cove_posts to anon, authenticated;
grant insert, delete on public.cove_posts to authenticated;
grant usage, select on sequence public.cove_posts_id_seq to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('cove-media', 'cove-media', true, 8388608, array['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do nothing;
drop policy if exists "Upload own COVE images" on storage.objects;
create policy "Upload own COVE images" on storage.objects for insert to authenticated
with check (bucket_id = 'cove-media' and (storage.foldername(name))[1] = (select auth.uid()::text));
drop policy if exists "Read own COVE images" on storage.objects;
create policy "Read own COVE images" on storage.objects for select to authenticated
using (bucket_id = 'cove-media' and (storage.foldername(name))[1] = (select auth.uid()::text));
drop policy if exists "Delete own COVE images" on storage.objects;
create policy "Delete own COVE images" on storage.objects for delete to authenticated
using (bucket_id = 'cove-media' and (storage.foldername(name))[1] = (select auth.uid()::text));
