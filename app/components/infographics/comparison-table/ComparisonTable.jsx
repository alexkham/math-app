import React from 'react';

/* ============================================================
 * ComparisonTable — single file, no styled-jsx, no 'use client'
 *
 * Props:
 *   data      — { intro, attributes: [...], subjects: [...] }
 *   variant   — 'matrix' | 'cards' | 'winners' | 'versus' | 'bars'
 *   theme     — 9 themes (see THEMES)
 *
 * Data shape:
 * {
 *   intro: string,
 *   attributes: [
 *     { label: string, winners?: number[] },   // winners = indices into subjects[]
 *     ...
 *   ],
 *   subjects: [
 *     {
 *       name: string,
 *       subtitle?: string,
 *       values: string[],                       // one per attribute, in order
 *       scores?: number[],                      // 0-10, used only by 'bars'
 *     },
 *     ...
 *   ],
 * }
 * ============================================================ */

const VARIANTS = ['matrix', 'cards', 'winners', 'versus', 'bars'];
const THEMES   = ['terracotta','forest','navy','burgundy','olive','ocean','mono','plum','dark'];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;800&family=JetBrains+Mono:wght@500;700&family=Inter:wght@400;500;600&display=swap');

.ct-root, .ct-root *, .ct-root *::before, .ct-root *::after { box-sizing: border-box; }
.ct-root {
  --paper:#ffffff; --ink:#16161a; --muted:#6b6b73; --line:#e4dfd3; --accent:#c4543a; --soft:#f7f2e8;
  color: var(--ink);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.5;
}

.ct-root.t-terracotta { --paper:#fffaf3; --ink:#2a1a14; --muted:#6b5848; --line:#e8d9c4; --accent:#c4543a; --soft:#fdf3e6; }
.ct-root.t-forest     { --paper:#f6f3ea; --ink:#1a2a1f; --muted:#5a6b5a; --line:#d8dcc9; --accent:#3d6b4a; --soft:#eef2e0; }
.ct-root.t-navy       { --paper:#f4f6fa; --ink:#0f1a2e; --muted:#5a6478; --line:#d6dce8; --accent:#1f4e8c; --soft:#e8edf5; }
.ct-root.t-burgundy   { --paper:#faf4f4; --ink:#2a1418; --muted:#6b5258; --line:#e6d5d8; --accent:#7d2838; --soft:#f5e9ec; }
.ct-root.t-olive      { --paper:#f9f6ea; --ink:#1f1f14; --muted:#5a5a4a; --line:#dcd6bc; --accent:#7a7a2a; --soft:#f0ecd4; }
.ct-root.t-ocean      { --paper:#f0f7f7; --ink:#0f2228; --muted:#4a6168; --line:#cfe0e0; --accent:#1f7a82; --soft:#e0eded; }
.ct-root.t-mono       { --paper:#ffffff; --ink:#000000; --muted:#666666; --line:#dddddd; --accent:#000000; --soft:#f4f4f4; }
.ct-root.t-plum       { --paper:#f7f3f8; --ink:#1f1428; --muted:#5a4e6b; --line:#e0d6e4; --accent:#5a2d7a; --soft:#ede4f0; }
.ct-root.t-dark       { --paper:#1a1a22; --ink:#f0ece0; --muted:#9a958a; --line:#2e2e3a; --accent:#ffb84a; --soft:#22222e; }

.ct-intro {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 18px; font-weight: 600; line-height: 1.35;
  margin: 0 0 24px; max-width: 600px;
}
.ct-mono { font-family: 'JetBrains Mono', monospace; }

/* ============ matrix ============ */
.ct-root.v-matrix { background: var(--paper); padding: 36px; border: 1px solid var(--line); }
.ct-root.v-matrix table { width: 100%; border-collapse: collapse; font-size: 14px; }
.ct-root.v-matrix th, .ct-root.v-matrix td {
  text-align: left; padding: 14px 16px; border-bottom: 1px solid var(--line);
}
.ct-root.v-matrix thead th {
  background: var(--ink); color: var(--paper);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700;
}
.ct-root.v-matrix thead th:first-child { background: var(--accent); }
.ct-root.v-matrix tbody th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; color: var(--muted);
  letter-spacing: 0.05em; font-weight: 600; text-transform: uppercase;
  background: var(--soft); width: 180px;
}
.ct-root.v-matrix tbody td {
  font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--ink);
}

/* ============ cards ============ */
.ct-root.v-cards .ct-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}
.ct-root.v-cards .ct-card {
  background: var(--paper); border: 1px solid var(--line);
  border-top: 4px solid var(--ink);
  padding: 24px;
}
.ct-root.v-cards .ct-card:first-child { border-top-color: var(--accent); }
.ct-root.v-cards .ct-card h3 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800; font-size: 22px;
  margin: 0 0 4px; letter-spacing: -0.02em; color: var(--ink);
}
.ct-root.v-cards .ct-card .subtitle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; color: var(--muted);
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px;
}
.ct-root.v-cards .ct-card dl { margin: 0; padding: 0; }
.ct-root.v-cards .ct-card dt {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; color: var(--muted);
  letter-spacing: 0.1em; text-transform: uppercase; margin-top: 16px;
}
.ct-root.v-cards .ct-card dt:first-child { margin-top: 0; }
.ct-root.v-cards .ct-card dd {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px; font-weight: 700; color: var(--ink);
  margin: 4px 0 0;
}

/* ============ winners ============ */
.ct-root.v-winners { background: var(--paper); padding: 36px; border: 1px solid var(--line); }
.ct-root.v-winners .ct-legend {
  font-size: 12px; color: var(--muted); margin-bottom: 20px;
  display: flex; gap: 16px; align-items: center;
}
.ct-root.v-winners .ct-legend .swatch {
  display: inline-block; width: 12px; height: 12px;
  background: var(--accent); border-radius: 2px;
  vertical-align: middle; margin-right: 6px;
}
.ct-root.v-winners table { width: 100%; border-collapse: separate; border-spacing: 0; }
.ct-root.v-winners th, .ct-root.v-winners td {
  text-align: left; padding: 12px 14px; font-size: 13px;
}
.ct-root.v-winners thead th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--muted); border-bottom: 2px solid var(--ink);
}
.ct-root.v-winners tbody th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; color: var(--muted);
  letter-spacing: 0.05em; text-transform: uppercase;
  width: 180px; vertical-align: middle;
}
.ct-root.v-winners tbody tr { border-bottom: 1px solid var(--line); }
.ct-root.v-winners tbody td {
  font-family: 'JetBrains Mono', monospace; font-weight: 600; color: var(--ink);
}
.ct-root.v-winners td.winner {
  background: var(--accent); color: var(--paper); border-radius: 4px;
}
.ct-root.v-winners td.winner::after {
  content: ' ✓'; opacity: 0.8;
}

/* ============ versus ============ */
.ct-root.v-versus { background: var(--paper); border: 1px solid var(--line); padding: 0; overflow: hidden; }
.ct-root.v-versus .ct-vs-header {
  background: var(--ink); color: var(--paper);
  padding: 24px; text-align: center;
}
.ct-root.v-versus .ct-vs-header h3 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800; font-size: 20px; margin: 0;
  letter-spacing: -0.02em;
}
.ct-root.v-versus .ct-vs-body {
  display: grid; grid-template-columns: 1fr auto 1fr; align-items: stretch;
}
.ct-root.v-versus .ct-vs-side { padding: 32px; }
.ct-root.v-versus .ct-vs-side.left  { text-align: right; }
.ct-root.v-versus .ct-vs-side.right { text-align: left; background: var(--soft); }
.ct-root.v-versus .ct-vs-side h4 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800; font-size: 28px; margin: 0 0 24px;
  letter-spacing: -0.02em;
}
.ct-root.v-versus .ct-vs-side.left h4 { color: var(--accent); }
.ct-root.v-versus .ct-vs-side.right h4 { color: var(--ink); }
.ct-root.v-versus .ct-vs-side dl { margin: 0; padding: 0; }
.ct-root.v-versus .ct-vs-side dt {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px; color: var(--muted);
  letter-spacing: 0.1em; text-transform: uppercase; margin-top: 14px;
}
.ct-root.v-versus .ct-vs-side dt:first-child { margin-top: 0; }
.ct-root.v-versus .ct-vs-side dd {
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px; font-weight: 700; margin: 4px 0 0; color: var(--ink);
}
.ct-root.v-versus .ct-vs-divider {
  display: flex; align-items: center; justify-content: center;
  background: var(--ink); color: var(--paper); width: 60px;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800; font-size: 24px; letter-spacing: -0.02em;
}

/* ============ bars ============ */
.ct-root.v-bars { background: var(--paper); padding: 36px; border: 1px solid var(--line); }
.ct-root.v-bars .ct-bar-row {
  display: grid; grid-template-columns: 160px 1fr; gap: 24px;
  padding: 18px 0; border-top: 1px solid var(--line); align-items: center;
}
.ct-root.v-bars .ct-bar-row:last-child { border-bottom: 1px solid var(--line); }
.ct-root.v-bars .ct-bar-attr {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; color: var(--muted);
  letter-spacing: 0.1em; text-transform: uppercase;
}
.ct-root.v-bars .ct-bars { display: flex; flex-direction: column; gap: 8px; }
.ct-root.v-bars .ct-bar {
  display: grid; grid-template-columns: 110px 1fr 60px;
  align-items: center; gap: 10px; font-size: 12px;
}
.ct-root.v-bars .ct-bar .subject {
  font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 600;
}
.ct-root.v-bars .ct-bar .track {
  height: 10px; background: var(--soft); border-radius: 999px;
  overflow: hidden; position: relative;
}
.ct-root.v-bars .ct-bar .fill {
  position: absolute; left: 0; top: 0; bottom: 0;
  background: var(--accent); border-radius: 999px;
}
.ct-root.v-bars .ct-bar:nth-child(even) .fill { background: var(--ink); }
.ct-root.v-bars .ct-bar .val {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px; color: var(--muted); text-align: right;
}
`;

export default function ComparisonTable({
  data,
  variant = 'matrix',
  theme = 'terracotta',
}) {
  const intro      = data && data.intro;
  const attributes = data && Array.isArray(data.attributes) ? data.attributes : [];
  const subjects   = data && Array.isArray(data.subjects)   ? data.subjects   : [];

  if (attributes.length === 0 || subjects.length === 0) {
    return (
      <div style={{
        padding: 20, border: '2px dashed #c4543a',
        background: '#fff7f4', color: '#c4543a',
        fontFamily: 'monospace', fontSize: 13, borderRadius: 8,
      }}>
        ComparisonTable: missing attributes or subjects in data.
        <br />Got: <code>{JSON.stringify(data)}</code>
      </div>
    );
  }

  const safeVariant = VARIANTS.includes(variant) ? variant : 'matrix';
  const safeTheme   = THEMES.includes(theme)     ? theme   : 'terracotta';
  const rootClass   = ['ct-root', `v-${safeVariant}`, `t-${safeTheme}`].join(' ');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className={rootClass}>
        {intro && <p className="ct-intro">{intro}</p>}
        {safeVariant === 'matrix'  && renderMatrix(attributes, subjects)}
        {safeVariant === 'cards'   && renderCards(attributes, subjects)}
        {safeVariant === 'winners' && renderWinners(attributes, subjects)}
        {safeVariant === 'versus'  && renderVersus(attributes, subjects)}
        {safeVariant === 'bars'    && renderBars(attributes, subjects)}
      </div>
    </>
  );
}

/* ============ render functions ============ */

function renderMatrix(attributes, subjects) {
  return (
    <table>
      <thead>
        <tr>
          <th>Attribute</th>
          {subjects.map((s, i) => <th key={i}>{s.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {attributes.map((attr, ai) => (
          <tr key={ai}>
            <th scope="row">{attr.label}</th>
            {subjects.map((s, si) => (
              <td key={si}>{s.values && s.values[ai] != null ? s.values[ai] : '—'}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function renderCards(attributes, subjects) {
  return (
    <div className="ct-cards-grid">
      {subjects.map((s, si) => (
        <div key={si} className="ct-card">
          <h3>{s.name}</h3>
          {s.subtitle && <div className="subtitle">{s.subtitle}</div>}
          <dl>
            {attributes.map((attr, ai) => (
              <React.Fragment key={ai}>
                <dt>{attr.label}</dt>
                <dd>{s.values && s.values[ai] != null ? s.values[ai] : '—'}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

function renderWinners(attributes, subjects) {
  return (
    <>
      <div className="ct-legend">
        <span><span className="swatch"></span>= best in row</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            {subjects.map((s, i) => <th key={i}>{s.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {attributes.map((attr, ai) => {
            const winners = Array.isArray(attr.winners) ? attr.winners : [];
            return (
              <tr key={ai}>
                <th scope="row">{attr.label}</th>
                {subjects.map((s, si) => (
                  <td key={si} className={winners.indexOf(si) >= 0 ? 'winner' : ''}>
                    {s.values && s.values[ai] != null ? s.values[ai] : '—'}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function renderVersus(attributes, subjects) {
  const left  = subjects[0];
  const right = subjects[1];
  if (!left || !right) {
    return (
      <div style={{ padding: 20, color: '#c4543a', fontFamily: 'monospace' }}>
        ComparisonTable: variant &quot;versus&quot; requires at least 2 subjects.
      </div>
    );
  }
  return (
    <>
      <div className="ct-vs-header">
        <h3>{left.name} vs {right.name}</h3>
      </div>
      <div className="ct-vs-body">
        <div className="ct-vs-side left">
          <h4>{left.name}</h4>
          <dl>
            {attributes.map((attr, ai) => (
              <React.Fragment key={ai}>
                <dt>{attr.label}</dt>
                <dd>{left.values && left.values[ai] != null ? left.values[ai] : '—'}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
        <div className="ct-vs-divider">VS</div>
        <div className="ct-vs-side right">
          <h4>{right.name}</h4>
          <dl>
            {attributes.map((attr, ai) => (
              <React.Fragment key={ai}>
                <dt>{attr.label}</dt>
                <dd>{right.values && right.values[ai] != null ? right.values[ai] : '—'}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

function renderBars(attributes, subjects) {
  return (
    <>
      {attributes.map((attr, ai) => (
        <div key={ai} className="ct-bar-row">
          <div className="ct-bar-attr">{attr.label}</div>
          <div className="ct-bars">
            {subjects.map((s, si) => {
              const score   = s.scores && s.scores[ai] != null ? Number(s.scores[ai]) : 0;
              const clamped = Math.max(0, Math.min(10, score));
              const width   = (clamped / 10) * 100;
              return (
                <div key={si} className="ct-bar">
                  <span className="subject">{s.name}</span>
                  <div className="track"><div className="fill" style={{ width: width + '%' }} /></div>
                  <span className="val">{clamped.toFixed(1)}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}