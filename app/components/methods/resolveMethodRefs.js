// resolveMethodRefs.js
// Helpers that resolve ids in a sub-hub data file.
//
// Item states (derived, not hand-written):
//   atomic card  — no `slug`                 → lives at '<hubPath>#<id>'
//   live leaf    — `slug` and `page`         → '<hubPath>/<slug>'
//   planned leaf — `slug` without `page`, or `planned: true` → dimmed card, no link

export function findItem(hub, id) {
  return (hub.methods || []).find((method) => method.id === id) || null;
}

export function isPlanned(item) {
  return Boolean(item.planned || (item.slug && !item.page));
}

export function itemHref(hub, item) {
  if (!item || isPlanned(item)) return null;
  if (item.slug) return `${hub.hubPath}/${item.slug}`;
  return `${hub.hubPath}#${item.id}`;
}

export function atomicRef(hub, id) {
  if (!id) return null;
  const item = findItem(hub, id);
  return {
    href: `${hub.hubPath}#${id}`,
    label: item ? item.subtitle || item.name : id,
  };
}

export function relatedItems(hub, ids = []) {
  return ids
    .map((id) => findItem(hub, id))
    .filter(Boolean)
    .map((item) => ({ ...item, href: itemHref(hub, item) || undefined, planned: isPlanned(item) }));
}

export function handoffRef(hub, handoff) {
  if (!handoff) return null;
  const item = findItem(hub, handoff.to);
  if (!item) return null;
  return { href: itemHref(hub, item), label: item.name, body: handoff.body };
}

// Hub view of the data: leaves get href / planned from their state, and the
// heavy `page` objects are dropped so the hub does not ship leaf content.
export function prepareHubData(hub) {
  return {
    ...hub,
    methods: (hub.methods || []).map((item) => {
      if (!item.slug) return item;
      const { page, ...rest } = item;
      return { ...rest, href: itemHref(hub, item) || undefined, planned: isPlanned(item) };
    }),
  };
}

// Paths for getStaticPaths: every leaf that has a page.
export function leafSlugs(hub) {
  return (hub.methods || []).filter((item) => item.slug && item.page).map((item) => item.slug);
}
