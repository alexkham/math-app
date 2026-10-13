// build-diagrams.mjs — the diagrams inventory of one subject. (Run from the repo root; moved out of the git-ignored scripts/ folder 2026-10-11.)
//
// Reads the pages as the dev server renders them (owner's server, port 3000,
// the same source illustration-system-process_v10 §7 verifies against) and
// records every demonstration unit it finds, inside the <section id> it sits
// in. Nothing is drawn or judged here: the frame markup is demoUnitFrame's,
// the section ids are the rendered ones, the kind of each unit (authored,
// harvested, tool-state) comes from the figure registry and the registries
// in app/api/db/repositories.
//
// Outputs
//   app/api/db/repositories/diagrams/<subject>.json
//       the build artifact the gallery page reads: generated, never hand-edit
//   session-docs/methodology/illustrations/<subject>/figure-registry.json
//       placement records added in place, no SVG: `units` on each content
//       section, `toolPages` for the tool pages, `$meta.diagrams` summary
//
// Usage
//   node build-diagrams.mjs --subject=trigonometry
//   node build-diagrams.mjs --subject=trigonometry --verify
//   options: --base=http://localhost:3000  --no-registry (do not touch the figure registry)

import fs from 'fs';
import path from 'path';
import { buildToolIndexData } from './app/components/page-components/visual-tools-page/buildToolsPageData.js';

const ROOT = process.cwd();
const args = Object.fromEntries(process.argv.slice(2).map(a => { const m = a.match(/^--([^=]+)(?:=(.*))?$/); return m ? [m[1], m[2] ?? true] : [a, true]; }));
const SUBJECT = args.subject;
const BASE = args.base || 'http://localhost:3000';
if (!SUBJECT) { console.error('usage: node build-diagrams.mjs --subject=<subject> [--verify] [--base=url] [--no-registry]'); process.exit(2); }

const REPO = p => path.join(ROOT, 'app/api/db/repositories', p);
const readJson = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const contentReg = readJson(REPO('content-pages-registry.json'));
const toolsReg = readJson(REPO('visual-tools-registry.json'));
const sectionsInv = readJson(REPO('sections.json'));
const figRegPath = path.join(ROOT, 'session-docs/methodology/illustrations', SUBJECT, 'figure-registry.json');
const figReg = fs.existsSync(figRegPath) ? readJson(figRegPath) : null;
const OUT = REPO(path.join('diagrams', SUBJECT + '.json'));

/* ---------- demoUnitFrame markup signatures (app/components/demo-unit/demoUnitFrame.js) ---------- */
const FRAME = 'display:flex;align-items:stretch;flex-wrap:wrap;border:1px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:16px auto;max-width:840px;background:#fff';
const PANEL = 'flex:1 1 240px;min-width:240px;border-left:1px solid #cbd5e1;background:#f0f6ff;';
const CAPTION = 'font-size:12px;color:#64748b;margin:0 0 6px;font-weight:600';
const TEXT = 'margin:0;font-size:14px;line-height:1.65;color:#1e3a5f';

/* ---------- small helpers ---------- */
const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', deg: '°', times: '×', minus: '−', ndash: '–', mdash: '—', hellip: '…', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', pi: 'π', theta: 'θ', alpha: 'α', beta: 'β', gamma: 'γ', phi: 'φ', radic: '√', middot: '·', frac12: '½', plusmn: '±', le: '≤', ge: '≥', ne: '≠', infin: '∞', rarr: '→', larr: '←', sup2: '²', sup3: '³' };
const decode = s => String(s ?? '').replace(/&(#x[0-9a-f]+|#\d+|[a-z0-9]+);/gi, (m, e) => {
  if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
  return NAMED[e] ?? m;
});
const stripTags = s => decode(String(s).replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
// id prefix: every route segment after the subject (and after visual-tools), so nested
// pages like equations/quadratic and inequalities/quadratic cannot collide
const slugOfRoute = r => r.split('/').filter(Boolean).filter((seg, i) => !(i === 0 && seg === SUBJECT) && seg !== 'visual-tools').join('-');
const routeOfPagePath = p => p.startsWith('/') ? p : '/' + p.replace(/^pages\//, '').replace(/\/index\.jsx?$/, '').replace(/\.jsx?$/, '');

// balanced <svg>…</svg> scan (an svg may nest an svg)
function extractSvgs(html) {
  const out = []; let i = 0;
  while (true) {
    const s = html.indexOf('<svg', i); if (s < 0) break;
    let depth = 0, j = s;
    const re = /<svg\b|<\/svg>/g; re.lastIndex = s; let m;
    while ((m = re.exec(html))) { depth += m[0] === '</svg>' ? -1 : 1; if (depth === 0) { j = m.index + m[0].length; break; } }
    if (depth !== 0) break;
    out.push(html.slice(s, j)); i = j;
  }
  return out;
}
function dimsOf(svg) {
  const head = svg.match(/<svg\b[^>]*>/)[0];
  const vb = head.match(/viewBox="\s*[\d.\-]+\s+[\d.\-]+\s+([\d.]+)\s+([\d.]+)\s*"/);
  if (vb) return [Math.round(+vb[1]), Math.round(+vb[2])];
  const w = head.match(/\swidth="([\d.]+)/), h = head.match(/\sheight="([\d.]+)/);
  return w && h ? [Math.round(+w[1]), Math.round(+h[1])] : [400, 300];
}

/* ---------- parse one rendered page ---------- */
function parsePage(html) {
  html = html.slice(0, html.indexOf('__NEXT_DATA__') > 0 ? html.indexOf('__NEXT_DATA__') : undefined);
  const opens = [...html.matchAll(/<section\b[^>]*\bid="([^"]+)"[^>]*>/g)];
  const sections = opens.map((m, k) => {
    const start = m.index, end = k + 1 < opens.length ? opens[k + 1].index : html.length;
    const chunk = html.slice(start, end);
    const h = chunk.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/);
    return { id: m[1], title: h ? stripTags(h[1]) : m[1], chunk };
  });
  const units = [];
  sections.forEach(sec => {
    let from = 0, n = 0;
    while (true) {
      const f = sec.chunk.indexOf(FRAME, from); if (f < 0) break;
      const pStart = sec.chunk.indexOf(PANEL, f); if (pStart < 0) break;
      const svgSide = sec.chunk.slice(f, pStart);
      const capM = sec.chunk.slice(pStart).match(new RegExp('<div style="' + CAPTION.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '">([\\s\\S]*?)</div>'));
      const tStart = sec.chunk.indexOf('<p style="' + TEXT + '">', pStart); if (tStart < 0) break;
      const bodyStart = tStart + ('<p style="' + TEXT + '">').length;
      const tEnd = sec.chunk.indexOf('</p>', bodyStart);
      const body = sec.chunk.slice(bodyStart, tEnd).trim();
      const svgs = extractSvgs(svgSide);
      let text = body, href = null, linkText = null, after = null;
      const lm = body.match(/^([\s\S]*?)\s*<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>([\s\S]*)$/);
      if (lm) { text = lm[1]; href = lm[2]; linkText = stripTags(lm[3]); after = lm[4] === '.' ? null : lm[4]; }
      n++;
      units.push({ sec: sec.id, secTitle: sec.title, nth: n, caption: capM ? stripTags(capM[1]) : null, text: text || null, href, linkText, after, svgs, dims: svgs.map(dimsOf) });
      from = tEnd;
    }
  });
  // bare figures: svgs placed straight in a section, outside any frame (pre-process
  // authored figures, e.g. arithmetic/divisibility). Only used where the figure
  // registry says the section is integrated; icons and KaTeX glyphs are skipped.
  const bare = {};
  sections.forEach(sec => {
    let rest = sec.chunk, f;
    while ((f = rest.indexOf(FRAME)) >= 0) {
      const pEnd = rest.indexOf('</p></div></div>', f);
      rest = rest.slice(0, f) + rest.slice(pEnd < 0 ? f + FRAME.length : pEnd + 16);
    }
    const svgs = extractSvgs(rest).filter(svg => {
      const head = svg.match(/<svg\b[^>]*>/)[0];
      if (!/viewBox=/.test(head) || /width="[\d.]+em"/.test(head) || /aria-hidden="true"/.test(head)) return false;
      const [w, h] = dimsOf(svg); return w >= 160 && h >= 60;
    });
    if (svgs.length) bare[sec.id] = { secTitle: sec.title, svgs };
  });
  return { sections: sections.map(s => ({ id: s.id, title: s.title })), units, bare };
}
const svgCaption = svg => { const t = svg.match(/<title>([\s\S]*?)<\/title>/); if (t) return stripTags(t[1]); const a = svg.match(/<svg\b[^>]*\baria-label="([^"]*)"/); return a ? decode(a[1]) : null; };

/* ---------- page list for the subject ---------- */
async function pageList() {
  const hub = await buildToolIndexData(`${SUBJECT}/visual-tools`);
  const hubByHref = new Map(hub.items.map(i => [i.href, i]));
  const content = Object.entries(contentReg.pages).filter(([, v]) => v.section === SUBJECT)
    .map(([key, v]) => ({ key, route: '/' + key, title: v.name, toolPage: false, registry: v }));
  // dynamic-route tools ([view].jsx): the registry holds one parent entry (viewEntries,
  // not a page) and one entry per view with `view` + `slug` ("identities/square-of-sum")
  const seen = new Set();
  const tools = Object.entries(toolsReg.tools).filter(([, v]) => v.section === SUBJECT)
    .filter(([, v]) => !(/\[view\]/.test(v.pagePath || '') && !v.view))
    .map(([key, v]) => { const route = /\[view\]/.test(v.pagePath || '') ? `/${SUBJECT}/visual-tools/${v.slug}` : routeOfPagePath(v.pagePath); const h = hubByHref.get(route); return { key, route, title: h?.title || v.name, category: h?.category || null, toolPage: true, registry: v }; })
    .filter(p => p.route !== `/${SUBJECT}/visual-tools/diagrams` && !seen.has(p.route) && seen.add(p.route));
  return { content, tools, hubOrder: [...new Set(hub.items.map(i => i.category).filter(Boolean))] };
}

// one slow or hung page must not stall the run: 4 minutes per page, one retry
async function fetchPage(route) {
  for (let attempt = 1; ; attempt++) {
    try {
      const r = await fetch(BASE + route, { signal: AbortSignal.timeout(240000) });
      if (!r.ok) throw new Error(`${route}: HTTP ${r.status}`);
      return await r.text();
    } catch (e) {
      if (attempt >= 3) throw new Error(`${route}: ${e.name === 'TimeoutError' ? 'timed out after 3 x 240 s' : e.message}`);
      console.log(`retry ${route} (${e.name === 'TimeoutError' ? 'timeout' : e.message})`);
      await new Promise(r => setTimeout(r, 20000));   // a dev server mid-recompile answers 500 for a while
    }
  }
}

/* ---------- kinds and sources from the registries ---------- */
function figSection(pageKey, secId) {
  const p = figReg?.pages?.[pageKey]; if (!p) return [null, null];
  for (const [obj, s] of Object.entries(p.sections || {})) if (s.id === secId) return [obj, s];
  return [null, null];
}
function contentLinks(pageReg, secId) {
  const out = [];
  for (const t of pageReg.relatedTerms || []) for (const l of t.links || []) if (l.fromSection === secId && l.unit) out.push({ term: t.term, tool: l.tool, diagrams: l.unit.diagrams, arrangement: l.unit.arrangement });
  return out;
}

/* ---------- main ---------- */
async function build() {
  const { content, tools, hubOrder } = await pageList();
  const pages = [], items = [], warnings = [];

  for (const p of [...content, ...tools]) {
    let html;
    try { html = await fetchPage(p.route); } catch (e) { warnings.push(String(e.message)); continue; }
    const { sections, units, bare } = parsePage(html);
    const pageSlug = slugOfRoute(p.route);
    // tool pages: the category the page declares for the hub. Content pages: the
    // parent hub when the route is nested (/linear-algebra/vectors/dot-product),
    // otherwise one group, "Lessons".
    let chapter = p.category || 'Other tools';
    if (!p.toolPage) {
      const segs = p.route.split('/').filter(Boolean);
      const isHub = Object.keys(contentReg.pages).some(k => k.startsWith(p.key + '/'));
      // registry names are SEO titles ("Matrices: Definition, Types & Operations"): the chapter is the part before the colon
      const short = n => String(n || '').split(':')[0].trim();
      // nearest ancestor hub with a real name; registry stubs carry the placeholder "Title"
      const placeholder = n => !n || /^title$/i.test(String(n).trim());
      let parentName = null;
      for (let d = segs.length - 1; d >= 2 && !parentName; d--) { const n = contentReg.pages[segs.slice(0, d).join('/')]?.name; if (!placeholder(n)) parentName = short(n); }
      chapter = segs.length > 2 ? (parentName || segs[1]) : isHub ? short(p.title) : 'Lessons';
    }
    units.forEach(u => {
      const perSec = units.filter(x => x.sec === u.sec).length;
      const id = `${pageSlug}--${u.sec}` + (perSec > 1 ? `-${u.nth}` : '');
      let kind = 'tool-state', unitKey = null, source = null;
      if (!p.toolPage) {
        const [obj, s] = figSection(p.key, u.sec);
        const links = contentLinks(p.registry, u.sec);
        if (s && s.status === 'integrated' && s.component && (perSec === 1 || u.nth === perSec)) { kind = 'authored'; unitKey = s.unitKey || null; source = { renderer: s.component, specKey: s.specKey || null, figureRegistry: `${p.key} ${obj}` }; }
        else { kind = 'harvested'; unitKey = s?.harvested?.length === 1 ? s.harvested[0] : null; source = links.length ? { diagrams: links.flatMap(l => l.diagrams), tool: links[0].tool, term: links[0].term } : null; if (!links.length && !s?.harvested?.length) warnings.push(`${p.route}#${u.sec}: unit found on the page but no registry record names it`); }
      } else {
        source = { diagramsModule: p.registry.diagramsModule || null, tool: p.key };
      }
      const st = u.secTitle.match(/^(.*?),\s*Step\s+(\d+)\b/i);
      items.push({ id, kind, chapter, route: p.route, page: p.title, toolPage: p.toolPage, sec: u.sec, secTitle: u.secTitle, anchor: `${p.route}#${u.sec}`,
        caption: u.caption, text: u.text, href: u.href, linkText: u.linkText, after: u.after,
        series: st ? st[1] : null, step: st ? +st[2] : null, unitKey, source, svgs: u.svgs, dims: u.dims });
    });
    let bareCount = 0;
    if (!p.toolPage && figReg?.pages?.[p.key]) {
      for (const [obj, sct] of Object.entries(figReg.pages[p.key].sections || {})) {
        if (sct.status !== 'integrated' || units.some(u => u.sec === sct.id) || !bare[sct.id]) continue;
        const b = bare[sct.id];
        b.svgs.forEach((svg, k) => {
          bareCount++;
          items.push({ id: `${pageSlug}--${sct.id}` + (b.svgs.length > 1 ? `-${k + 1}` : ''), kind: 'authored', chapter, route: p.route, page: p.title, toolPage: false,
            sec: sct.id, secTitle: b.secTitle, anchor: `${p.route}#${sct.id}`, caption: svgCaption(svg), text: null, href: null, linkText: null, after: null,
            series: null, step: null, unitKey: sct.unitKey || null, source: { renderer: sct.component || null, specKey: sct.specKey || null, figureRegistry: `${p.key} ${obj}`, frame: false }, svgs: [svg], dims: [dimsOf(svg)] });
        });
      }
    }
    pages.push({ route: p.route, title: p.title, chapter, toolPage: p.toolPage, sections, units: units.length + bareCount });
    console.log(`${p.route.padEnd(58)} sections ${String(sections.length).padStart(3)}  units ${String(units.length).padStart(3)}${bareCount ? `  bare figures ${bareCount}` : ''}`);
  }

  // anchor check against sections.json (the anchor inventory)
  const known = new Set((Array.isArray(sectionsInv.sections) ? sectionsInv.sections : Object.values(sectionsInv.sections)).map(r => r.id));
  const missing = items.filter(i => !known.has(i.anchor)).map(i => i.anchor);
  if (missing.length) warnings.push(`${missing.length} anchors not in sections.json (inventory generated ${sectionsInv.$meta?.generated}): ${[...new Set(missing)].slice(0, 6).join(' ')}${missing.length > 6 ? ' …' : ''}`);

  // lesson pages first, then the tool categories in hub order, then anything else
  const used = new Set(pages.filter(p => p.units).map(p => p.chapter));
  const chapterOrder = [...pages.filter(p => !p.toolPage).map(p => p.chapter), ...hubOrder, ...pages.map(p => p.chapter)].filter((c, i, a) => c && used.has(c) && a.indexOf(c) === i);
  const chapters = chapterOrder.map(c => ({ id: c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''), title: c }));
  const chapterId = Object.fromEntries(chapters.map(c => [c.title, c.id]));
  items.forEach(i => { i.chapter = chapterId[i.chapter]; });
  pages.forEach(p => { p.chapter = chapterId[p.chapter]; });
  // keep page order: content pages by chapter order, then tool pages in hub order
  const rank = Object.fromEntries(chapters.map((c, i) => [c.id, i]));
  pages.sort((a, b) => (rank[a.chapter] - rank[b.chapter]) || (a.toolPage - b.toolPage));
  const pageRank = Object.fromEntries(pages.map((p, i) => [p.route, i]));
  items.sort((a, b) => pageRank[a.route] - pageRank[b.route]);

  const label = SUBJECT.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
  const counts = { items: items.length, pages: pages.filter(p => p.units).length, authored: items.filter(i => i.kind === 'authored').length, harvested: items.filter(i => i.kind === 'harvested').length, toolState: items.filter(i => i.kind === 'tool-state').length };
  const artifact = { $meta: { subject: SUBJECT, label, generated: new Date().toISOString().slice(0, 10), generatedBy: 'build-diagrams.mjs — regenerate, never hand-edit', source: BASE, kinds: { authored: 'figure drawn for the page (figure registry, status integrated)', harvested: 'frozen tool state placed on a content page (content registry link with a unit)', 'tool-state': 'frozen state shown on the tool page itself' }, counts, warnings }, chapters, pages: pages.filter(p => p.units), items };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(artifact) + '\n');
  console.log(`\nwrote ${path.relative(ROOT, OUT)}  ${JSON.stringify(counts)}`);
  warnings.forEach(w => console.log('WARN ' + w));

  if (figReg && !args['no-registry']) writeRegistry(artifact);
}

/* ---------- placement records into the figure registry (no SVG) ---------- */
function writeRegistry(artifact) {
  const rec = i => ({ id: i.id, kind: i.kind, anchor: i.anchor, caption: i.caption, unitKey: i.unitKey, source: i.source });
  let placed = 0;
  for (const [key, p] of Object.entries(figReg.pages)) {
    for (const s of Object.values(p.sections || {})) {
      const mine = artifact.items.filter(i => !i.toolPage && i.route === '/' + key && i.sec === s.id);
      if (mine.length) { s.units = mine.map(rec); placed += mine.length; } else if (s.units) delete s.units;
    }
  }
  const toolPages = {};
  for (const p of artifact.pages.filter(p => p.toolPage)) {
    toolPages[p.route] = { title: p.title, chapter: p.chapter, sections: {} };
    for (const sec of p.sections) {
      const mine = artifact.items.filter(i => i.route === p.route && i.sec === sec.id);
      if (mine.length) toolPages[p.route].sections[sec.id] = { title: sec.title, units: mine.map(rec) };
    }
  }
  figReg.toolPages = toolPages;
  figReg.$meta.diagrams = { generated: artifact.$meta.generated, generatedBy: artifact.$meta.generatedBy, artifact: path.relative(ROOT, OUT).replace(/\\/g, '/'), note: 'Placement records written by the script from the rendered pages: `units` on content sections, `toolPages` for the tool pages. No SVG here; the artifact carries it. Judgement fields are untouched.', counts: artifact.$meta.counts };
  fs.writeFileSync(figRegPath, JSON.stringify(figReg, null, 2) + '\n');
  console.log(`figure registry: ${placed} content units recorded, ${Object.keys(toolPages).length} tool pages recorded`);
}

/* ---------- verify: artifact vs live pages vs registries ---------- */
async function verify() {
  if (!fs.existsSync(OUT)) { console.error('no artifact; run without --verify first'); process.exit(1); }
  const art = readJson(OUT); let bad = 0;
  for (const p of art.pages) {
    let html; try { html = await fetchPage(p.route); } catch (e) { console.log('FAIL ' + e.message); bad++; continue; }
    const live = parsePage(html);
    const mine = art.items.filter(i => i.route === p.route);
    const bareLive = mine.filter(i => i.source && i.source.frame === false).filter(i => live.bare[i.sec]).length;
    if (live.units.length + bareLive !== mine.length) { bad++; console.log(`DRIFT ${p.route}: artifact ${mine.length} units, page now ${live.units.length + bareLive}`); }
    mine.forEach(i => { if (!live.sections.some(s => s.id === i.sec)) { bad++; console.log(`DEAD ANCHOR ${i.anchor}`); } });
  }
  if (figReg) for (const [key, p] of Object.entries(figReg.pages)) for (const [obj, s] of Object.entries(p.sections || {})) {
    if (s.status === 'integrated' && !art.items.some(i => i.route === '/' + key && i.sec === s.id)) { bad++; console.log(`MISSING figure-registry ${key} ${obj} (${s.id}) is integrated but no unit is in the artifact`); }
  }
  for (const [key, v] of Object.entries(contentReg.pages)) if (v.section === SUBJECT) for (const t of v.relatedTerms || []) for (const l of t.links || []) if (l.unit && !art.items.some(i => i.route === '/' + key && i.sec === l.fromSection)) { bad++; console.log(`MISSING content-registry ${key}#${l.fromSection} (${t.term}) has a unit but no frame is in the artifact`); }
  console.log(`verify: ${bad} problem(s); artifact ${art.$meta.generated}, ${art.items.length} items`);
}

(args.verify ? verify() : build()).catch(e => { console.error(e); process.exit(1); });
