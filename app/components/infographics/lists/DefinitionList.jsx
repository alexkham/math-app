/* ============================================================
 * DefinitionList — single file, no styled-jsx, no 'use client'
 * Props:
 *   data      — { intro, items: [{ headline, body }] }
 *   variant   — 14 options (see VARIANTS)
 *   theme     — 9 options (see THEMES)
 *   numbering — 'padded' (default) | 'arabic' | 'roman' | 'none'
 * ============================================================ */

const VARIANTS = [
  'spine','ruled','tagged','stubs',
  'cards','toc',
  'path','stripes','pills','tickets',
  'editorial','zine','marginalia','timeline',
];

const THEMES = [
  'terracotta','forest','navy','burgundy','olive','ocean','mono','plum','dark',
];

const ROMAN = ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii','xiii','xiv','xv','xvi','xvii','xviii','xix','xx'];

function formatNumber(n, style) {
  if (style === 'none')   return null;
  if (style === 'roman')  return ROMAN[n - 1] || String(n);
  if (style === 'padded') return String(n).padStart(2, '0');
  return String(n);
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;800&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=JetBrains+Mono:wght@500;700&family=Inter:wght@400;500;600&display=swap');

.dl-root, .dl-root *, .dl-root *::before, .dl-root *::after { box-sizing: border-box; }
.dl-root {
  --paper:#ffffff; --ink:#16161a; --muted:#6b6b73; --line:#e4dfd3; --accent:#c4543a; --soft:#f7f2e8;
  color: var(--ink);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.5;
}

.dl-root.t-terracotta { --paper:#fffaf3; --ink:#2a1a14; --muted:#6b5848; --line:#e8d9c4; --accent:#c4543a; --soft:#fdf3e6; }
.dl-root.t-forest     { --paper:#f6f3ea; --ink:#1a2a1f; --muted:#5a6b5a; --line:#d8dcc9; --accent:#3d6b4a; --soft:#eef2e0; }
.dl-root.t-navy       { --paper:#f4f6fa; --ink:#0f1a2e; --muted:#5a6478; --line:#d6dce8; --accent:#1f4e8c; --soft:#e8edf5; }
.dl-root.t-burgundy   { --paper:#faf4f4; --ink:#2a1418; --muted:#6b5258; --line:#e6d5d8; --accent:#7d2838; --soft:#f5e9ec; }
.dl-root.t-olive      { --paper:#f9f6ea; --ink:#1f1f14; --muted:#5a5a4a; --line:#dcd6bc; --accent:#7a7a2a; --soft:#f0ecd4; }
.dl-root.t-ocean      { --paper:#f0f7f7; --ink:#0f2228; --muted:#4a6168; --line:#cfe0e0; --accent:#1f7a82; --soft:#e0eded; }
.dl-root.t-mono       { --paper:#ffffff; --ink:#000000; --muted:#666666; --line:#dddddd; --accent:#000000; --soft:#f4f4f4; }
.dl-root.t-plum       { --paper:#f7f3f8; --ink:#1f1428; --muted:#5a4e6b; --line:#e0d6e4; --accent:#5a2d7a; --soft:#ede4f0; }
.dl-root.t-dark       { --paper:#1a1a22; --ink:#f0ece0; --muted:#9a958a; --line:#2e2e3a; --accent:#ffb84a; --soft:#22222e; }

.dl-intro {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 19px; font-weight: 600; line-height: 1.35;
  margin: 0 0 32px; max-width: 560px;
}
.dl-list { list-style: none; padding: 0; margin: 0; }
.dl-item { display: grid; grid-template-columns: auto 1fr; gap: 22px; align-items: baseline; }
.dl-number { display: inline-flex; align-items: center; justify-content: center; }
.dl-headline {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700; font-size: 16px; margin: 0 0 4px; color: var(--ink);
}
.dl-body { margin: 0; font-size: 14px; line-height: 1.55; color: var(--muted); }

/* spine */
.dl-root.v-spine { background: var(--paper); padding: 44px 40px; border: 1px solid var(--line); }
.dl-root.v-spine .dl-intro { padding-left: 20px; border-left: 3px solid var(--accent); }
.dl-root.v-spine .dl-list { position: relative; }
.dl-root.v-spine.is-numbered .dl-list::before {
  content: ''; position: absolute; left: 23px; top: 28px; bottom: 28px; width: 1px; background: var(--line);
}
.dl-root.v-spine .dl-item { grid-template-columns: 48px 1fr; gap: 24px; padding: 16px 0; align-items: flex-start; }
.dl-root.v-spine .dl-number {
  width: 46px; height: 46px; border-radius: 50%;
  background: var(--ink); color: var(--paper);
  font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 14px;
  position: relative; z-index: 1;
}
.dl-root.v-spine .dl-item:first-child .dl-number { background: var(--accent); }
.dl-root.v-spine .dl-content { padding-top: 10px; }

/* ruled */
.dl-root.v-ruled { background: var(--paper); padding: 44px 40px; border-top: 4px solid var(--accent); }
.dl-root.v-ruled .dl-item { grid-template-columns: 68px 1fr; gap: 24px; padding: 20px 0; border-top: 1px solid var(--line); }
.dl-root.v-ruled .dl-item:last-child { border-bottom: 1px solid var(--line); }
.dl-root.v-ruled .dl-number {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800; font-size: 44px; line-height: 1; color: var(--accent);
  letter-spacing: -0.04em; justify-content: flex-start;
}
.dl-root.v-ruled.is-unnumbered .dl-item { grid-template-columns: 1fr; }

/* tagged */
.dl-root.v-tagged { background: var(--soft); padding: 40px 36px; }
.dl-root.v-tagged .dl-item { display: flex; align-items: baseline; gap: 14px; padding: 14px 0; border-bottom: 1px dashed var(--line); }
.dl-root.v-tagged .dl-item:last-child { border-bottom: none; }
.dl-root.v-tagged .dl-number {
  background: var(--ink); color: var(--paper); padding: 5px 9px; border-radius: 4px;
  font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 12px; flex-shrink: 0;
}
.dl-root.v-tagged .dl-content { display: flex; align-items: baseline; gap: 14px; flex: 1; flex-wrap: wrap; }
.dl-root.v-tagged .dl-headline {
  background: var(--ink); color: var(--paper); padding: 5px 11px; border-radius: 4px;
  font-size: 12.5px; margin: 0; flex-shrink: 0;
}
.dl-root.v-tagged .dl-item:first-child .dl-headline,
.dl-root.v-tagged .dl-item:first-child .dl-number { background: var(--accent); }
.dl-root.v-tagged .dl-body { flex: 1; min-width: 200px; color: var(--ink); }

/* stubs */
.dl-root.v-stubs { padding: 0; }
.dl-root.v-stubs .dl-list { display: flex; flex-direction: column; gap: 8px; }
.dl-root.v-stubs .dl-item {
  grid-template-columns: 72px 1fr;
  background: var(--paper); border: 1px solid var(--line); gap: 0;
}
.dl-root.v-stubs .dl-number {
  background: var(--ink); color: var(--paper); flex-direction: column; padding: 14px 8px;
  font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 26px; line-height: 1;
}
.dl-root.v-stubs .dl-number::before {
  content: 'N°'; font-family: 'JetBrains Mono', monospace;
  font-size: 9px; font-weight: 700; letter-spacing: 0.2em; opacity: 0.7; margin-bottom: 4px;
}
.dl-root.v-stubs .dl-item:first-child .dl-number { background: var(--accent); }
.dl-root.v-stubs .dl-content { padding: 16px 22px; }

/* cards */
.dl-root.v-cards { padding: 0; }
.dl-root.v-cards .dl-list { display: flex; flex-direction: column; gap: 10px; }
.dl-root.v-cards .dl-item {
  background: var(--paper); padding: 20px 24px; border: 1px solid var(--line);
  position: relative; grid-template-columns: 1fr auto;
  box-shadow: 2px 2px 0 var(--line);
}
.dl-root.v-cards .dl-item::before {
  content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--ink);
}
.dl-root.v-cards .dl-item:first-child::before { background: var(--accent); }
.dl-root.v-cards .dl-content { order: 1; }
.dl-root.v-cards .dl-number {
  order: 2;
  font-family: 'Fraunces', serif; font-weight: 800; font-style: italic;
  font-size: 32px; line-height: 1; color: var(--line);
}

/* toc */
.dl-root.v-toc { background: var(--paper); padding: 44px 40px; border: 1px solid var(--line); }
.dl-root.v-toc .dl-intro { margin-bottom: 32px; padding-bottom: 20px; border-bottom: 2px solid var(--ink); }
.dl-root.v-toc .dl-item { display: block; padding: 18px 0; border-bottom: 1px solid var(--line); }
.dl-root.v-toc .dl-item:last-child { border-bottom: none; }
.dl-root.v-toc .dl-number { display: none; }
.dl-root.v-toc .dl-headline { display: flex; align-items: baseline; gap: 8px; font-size: 15.5px; margin-bottom: 6px; }
.dl-root.v-toc.is-numbered .dl-headline::before {
  content: attr(data-idx); font-size: 11px; color: var(--muted); letter-spacing: 0.1em; font-weight: 500;
}
.dl-root.v-toc .dl-headline::after {
  content: ''; flex: 1; border-bottom: 1.5px dotted var(--line); transform: translateY(-4px); margin: 0 6px;
}
.dl-root.v-toc.is-numbered .dl-body { padding-left: 36px; }

/* path */
.dl-root.v-path { background: var(--paper); border-radius: 20px; padding: 40px 36px; box-shadow: 0 10px 40px rgba(0,0,0,0.06); }
.dl-root.v-path .dl-intro { padding-left: 20px; border-left: 4px solid var(--accent); font-size: 18px; }
.dl-root.v-path .dl-list { position: relative; }
.dl-root.v-path.is-numbered .dl-list::before {
  content: ''; position: absolute; left: 27px; top: 28px; bottom: 28px; width: 3px;
  background: repeating-linear-gradient(to bottom, var(--ink) 0 6px, transparent 6px 12px);
}
.dl-root.v-path .dl-item { grid-template-columns: 58px 1fr; gap: 22px; padding: 14px 0; align-items: flex-start; }
.dl-root.v-path .dl-number {
  width: 56px; height: 56px; border-radius: 50%;
  font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 20px;
  background: var(--paper); color: var(--ink); border: 3px solid var(--ink); z-index: 1;
}
.dl-root.v-path .dl-item:first-child .dl-number { border-color: var(--accent); }

/* stripes */
.dl-root.v-stripes { background: var(--paper); padding: 36px; }
.dl-root.v-stripes .dl-intro { text-align: center; margin-bottom: 28px; }
.dl-root.v-stripes .dl-list { display: flex; flex-direction: column; gap: 10px; }
.dl-root.v-stripes .dl-item {
  grid-template-columns: 72px 1fr; gap: 20px; padding: 18px 22px;
  border-radius: 14px; border: 1px solid var(--line); align-items: center;
}
.dl-root.v-stripes .dl-item:nth-child(odd)  { background: var(--soft); }
.dl-root.v-stripes .dl-item:nth-child(even) { background: var(--paper); }
.dl-root.v-stripes .dl-number {
  font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
  font-size: 48px; line-height: 1; color: var(--accent); letter-spacing: -0.05em;
}

/* pills */
.dl-root.v-pills { background: var(--soft); padding: 40px 36px; }
.dl-root.v-pills .dl-intro { text-align: center; max-width: 520px; margin-left: auto; margin-right: auto; }
.dl-root.v-pills .dl-item { display: flex; align-items: baseline; gap: 16px; padding: 16px 0; border-bottom: 2px dotted var(--line); }
.dl-root.v-pills .dl-item:last-child { border-bottom: none; }
.dl-root.v-pills .dl-number {
  background: var(--accent); color: var(--paper); padding: 4px 10px; border-radius: 999px;
  font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 11px; flex-shrink: 0;
}
.dl-root.v-pills .dl-content { display: flex; align-items: baseline; gap: 14px; flex: 1; flex-wrap: wrap; }
.dl-root.v-pills .dl-headline {
  background: var(--ink); color: var(--paper); padding: 6px 12px; border-radius: 999px;
  font-size: 13px; margin: 0; flex-shrink: 0;
}
.dl-root.v-pills .dl-item:first-child .dl-headline { background: var(--accent); }
.dl-root.v-pills .dl-body { flex: 1; min-width: 200px; color: var(--ink); }

/* tickets */
.dl-root.v-tickets { padding: 0; }
.dl-root.v-tickets .dl-list { display: flex; flex-direction: column; gap: 14px; }
.dl-root.v-tickets .dl-item {
  grid-template-columns: 90px 1fr; gap: 0;
  background: var(--paper); border: 2px solid var(--ink); border-radius: 12px;
  overflow: hidden; box-shadow: 4px 4px 0 var(--ink);
}
.dl-root.v-tickets .dl-number {
  background: var(--accent); flex-direction: column; padding: 16px 8px;
  border-right: 2px dashed var(--ink);
  font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
  font-size: 36px; line-height: 1; color: var(--ink);
}
.dl-root.v-tickets .dl-number::before {
  content: 'N°'; font-family: 'JetBrains Mono', monospace;
  font-size: 10px; font-weight: 700; letter-spacing: 0.15em; opacity: 0.7; margin-bottom: 4px;
}
.dl-root.v-tickets .dl-item:not(:first-child) .dl-number { background: var(--soft); }
.dl-root.v-tickets .dl-content { padding: 18px 22px; }

/* editorial */
.dl-root.v-editorial { background: var(--paper); padding: 48px 56px; border: 1px solid var(--ink); box-shadow: 10px 10px 0 var(--ink); }
.dl-root.v-editorial .dl-intro {
  font-family: 'Fraunces', serif; font-style: italic; font-size: 20px;
  padding-bottom: 20px; border-bottom: 2px solid var(--ink); margin-bottom: 36px;
}
.dl-root.v-editorial .dl-item { grid-template-columns: 60px 1fr; gap: 24px; padding: 22px 0; border-bottom: 1px dashed var(--line); align-items: flex-start; }
.dl-root.v-editorial .dl-item:last-child { border-bottom: none; }
.dl-root.v-editorial .dl-number {
  font-family: 'Fraunces', serif; font-weight: 800; font-size: 42px; line-height: 1;
  letter-spacing: -0.04em; color: var(--accent); justify-content: flex-start;
}

/* zine (always dark) */
.dl-root.v-zine {
  background: #16161a; color: #f0ece0; padding: 48px 40px;
  --paper: #16161a; --ink: #f0ece0; --muted: rgba(240,236,224,0.6);
  --line: rgba(255,255,255,0.18); --soft: rgba(255,255,255,0.04);
}
.dl-root.v-zine .dl-intro { font-family: 'Fraunces', serif; font-style: italic; font-size: 22px; color: #f0ece0; }
.dl-root.v-zine .dl-item { grid-template-columns: 80px 1fr; gap: 24px; padding: 18px 0; border-top: 1px solid rgba(255,255,255,0.2); }
.dl-root.v-zine .dl-item:last-child { border-bottom: 1px solid rgba(255,255,255,0.2); }
.dl-root.v-zine .dl-number {
  font-family: 'JetBrains Mono', monospace; font-weight: 500; font-size: 12px;
  letter-spacing: 0.2em; color: var(--accent); justify-content: flex-start;
}
.dl-root.v-zine .dl-number::before { content: '→ '; margin-right: 4px; }
.dl-root.v-zine .dl-headline { font-family: 'JetBrains Mono', monospace; font-weight: 500; font-size: 17px; color: #f0ece0; }
.dl-root.v-zine .dl-body { color: rgba(240,236,224,0.7); }

/* marginalia */
.dl-root.v-marginalia { background: var(--soft); padding: 48px 44px; border-left: 4px solid var(--accent); }
.dl-root.v-marginalia .dl-intro { font-family: 'Fraunces', serif; font-size: 18px; line-height: 1.5; }
.dl-root.v-marginalia .dl-item { grid-template-columns: 200px 1fr; gap: 32px; padding: 18px 0; border-top: 1px solid var(--line); align-items: baseline; }
.dl-root.v-marginalia .dl-item:last-child { border-bottom: 1px solid var(--line); }
.dl-root.v-marginalia .dl-number {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  color: var(--muted); letter-spacing: 0.15em; justify-content: flex-end; padding-top: 4px;
}
.dl-root.v-marginalia .dl-headline {
  font-family: 'JetBrains Mono', monospace; font-size: 14.5px; color: var(--accent);
}
.dl-root.v-marginalia .dl-body { font-family: 'Fraunces', serif; font-size: 16px; color: var(--ink); }

/* timeline */
.dl-root.v-timeline { background: var(--paper); padding: 44px 40px; border: 1px solid var(--line); }
.dl-root.v-timeline .dl-intro { font-size: 16px; color: var(--muted); margin-bottom: 40px; }
.dl-root.v-timeline .dl-list { position: relative; }
.dl-root.v-timeline .dl-list::before {
  content: ''; position: absolute; left: 11px; top: 12px; bottom: 12px; width: 2px; background: var(--accent);
}
.dl-root.v-timeline .dl-item { display: block; position: relative; padding: 0 0 28px 48px; }
.dl-root.v-timeline .dl-item:last-child { padding-bottom: 0; }
.dl-root.v-timeline .dl-item::before {
  content: ''; position: absolute; left: 4px; top: 6px; width: 16px; height: 16px;
  border-radius: 50%; background: var(--paper); border: 3px solid var(--accent);
  box-shadow: 0 0 0 4px var(--paper);
}
.dl-root.v-timeline .dl-number {
  display: inline-block; font-family: 'JetBrains Mono', monospace;
  font-size: 11px; font-weight: 700; color: var(--muted); letter-spacing: 0.15em; margin-bottom: 4px;
}
.dl-root.v-timeline .dl-headline { font-size: 17px; color: var(--accent); margin-bottom: 6px; }
.dl-root.v-timeline .dl-body { font-size: 14px; color: var(--ink); }
`;

export default function DefinitionList({
  data,
  variant = 'spine',
  theme = 'terracotta',
  numbering = 'padded',
}) {
  const intro = data && data.intro;
  const items = data && Array.isArray(data.items) ? data.items : [];

  // Visible error if data is bad, so you don't get silent void
  if (items.length === 0) {
    return (
      <div style={{
        padding: '20px',
        border: '2px dashed #c4543a',
        background: '#fff7f4',
        color: '#c4543a',
        fontFamily: 'monospace',
        fontSize: '13px',
        borderRadius: '8px',
      }}>
        DefinitionList: no items to render. Pass data shaped as &#123; intro, items: [&#123; headline, body &#125;] &#125;.
        <br />
        Got: <code>{JSON.stringify(data)}</code>
      </div>
    );
  }

  const safeVariant = VARIANTS.includes(variant) ? variant : 'spine';
  const safeTheme   = THEMES.includes(theme)     ? theme   : 'terracotta';
  const isNumbered  = numbering !== 'none';
  const ListTag     = isNumbered ? 'ol' : 'ul';

  const rootClass = [
    'dl-root',
    `v-${safeVariant}`,
    `t-${safeTheme}`,
    isNumbered ? 'is-numbered' : 'is-unnumbered',
  ].join(' ');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className={rootClass}>
        {intro && <p className="dl-intro">{intro}</p>}
        <ListTag className="dl-list">
          {items.map((item, i) => {
            const num = formatNumber(i + 1, numbering);
            return (
              <li key={i} className="dl-item">
                {isNumbered && (
                  <span className="dl-number" aria-hidden="true">
                    <span className="dl-number-inner">{num}</span>
                  </span>
                )}
                <div className="dl-content">
                  <h3 className="dl-headline" data-idx={num}>{item.headline}</h3>
                  {item.body && <p className="dl-body">{item.body}</p>}
                </div>
              </li>
            );
          })}
        </ListTag>
      </div>
    </>
  );
}