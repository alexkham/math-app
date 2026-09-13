/*
  ScopeCard.jsx

  A scope infographic: what a rule covers, what it does not, and where the
  boundary between them sits. Two layouts.

  ------------------------------------------------------------------
  CONTENT FORMAT
  ------------------------------------------------------------------
  Every text-bearing field is a plain string, passed through
  processContent, so the site markup applies as usual:

      $\sqrt{ab} = \sqrt{a}\sqrt{b}$    inline KaTeX
      **bold**                          bold
      @[code]@                          inline code
      [label](!/path)                   internal link

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data     required object, shape:

    {
      header?: {
        kicker?: string,
        title:   string,
        lede?:   string
      },

      rule: {
        name?:      string,     // small label above the expression
        expr:       string,     // the rule itself
        condition?: string,     // the scope, e.g. '$a \\ge 0$ and $b \\ge 0$'
        sub?:       string      // one line under the rule (ledger variant)
      },

      inside:  Zone,            // cases the rule handles
      outside: Zone,            // cases it does not

      // BOUNDARY VARIANT only. A strip under the zones for cases that sit
      // on the line itself.
      edgeCases?: {
        badge?: string,         // default 'Edge cases'
        items: [ { id, marker?: string, body: string } ]
      },

      // LEDGER VARIANT only. A closing statement naming where the
      // boundary actually comes from.
      boundary?: {
        badge?: string,         // default 'The boundary'
        body:   string
      }
    }

    Zone = {
      title?: string,           // default 'Inside scope' / 'Outside scope'
      note?:  string,           // small right-aligned caption
      items: Item[]
    }

    Item = {
      id:    string,
      expr:  string,            // the example
      why?:  string             // why it is in or out
    }

  ------------------------------------------------------------------
  PAIRING
  ------------------------------------------------------------------
  The ledger variant reads best when each covered case sits beside the
  near-identical case that breaks. Give paired items the same `pairId`
  and they are lined up; unpaired items fall through in order and get a
  blank opposite cell.

    Item.pairId?: string

  variant  'boundary' | 'ledger'   (default: 'boundary')

  theme    optional partial theme, merged over DEFAULT_THEME (exported).
*/

import React from 'react';

// Replace this with the real path in your tree.
import {processContent} from '../../utils/contentProcessor'

/* ------------------------------------------------------------------ */
/*  theme                                                              */
/* ------------------------------------------------------------------ */

export const DEFAULT_THEME = {
  bg:          '#ffffff',
  panel:       '#ffffff',
  panelSoft:   '#eef2ff',
  panelSofter: '#f8faff',
  ink:         '#1f2937',
  title:       '#1e3a8a',
  muted:       '#6b7280',
  line:        '#e5e7eb',
  accent:      '#4f46e5',
  warm:        '#d97706',
  indigoSoft:  '#e0e7ff',
  warmSoft:    '#fef3c7',
  stop:        '#e11d48',
  stopSoft:    '#fee2e2',
};

const cssVars = (t) => ({
  '--sc-bg':           t.bg,
  '--sc-panel':        t.panel,
  '--sc-panel-soft':   t.panelSoft,
  '--sc-panel-softer': t.panelSofter,
  '--sc-ink':          t.ink,
  '--sc-title':        t.title,
  '--sc-muted':        t.muted,
  '--sc-line':         t.line,
  '--sc-accent':       t.accent,
  '--sc-warm':         t.warm,
  '--sc-indigo-soft':  t.indigoSoft,
  '--sc-warm-soft':    t.warmSoft,
  '--sc-stop':         t.stop,
  '--sc-stop-soft':    t.stopSoft,
});

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.sc-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--sc-ink);
  line-height: 1.5;
}
.sc-root .sc-card {
  background: var(--sc-panel);
  border: 1px solid var(--sc-line);
  border-radius: 8px;
  overflow: hidden;
}

/* processContent emits <br/> after single-line input; these boxes own
   their spacing, so suppress it. */
.sc-root .sc-inline br { display: none; }
.sc-root .sc-inline p  { margin: 0; }
.sc-root .katex { font-size: 1em; }

/* ---- head ---- */
.sc-root .sc-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--sc-line);
}
.sc-root .sc-head .sc-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--sc-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.sc-root .sc-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--sc-title); margin: 0;
  letter-spacing: -0.01em;
}
.sc-root .sc-head .sc-lede {
  color: var(--sc-muted);
  font-size: 13px;
  margin-top: 6px;
  max-width: 640px;
}

/* ================================================================= */
/*  BOUNDARY VARIANT                                                   */
/* ================================================================= */

.sc-root .sc-rule {
  padding: 30px 32px 26px;
  background: var(--sc-panel-softer);
  border-bottom: 1px solid var(--sc-line);
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  text-align: center;
}
.sc-root .sc-rule .sc-rname {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--sc-accent);
}
.sc-root .sc-rule .sc-rexpr {
  font-family: 'Inter', serif;
  font-size: 30px;
  color: var(--sc-ink);
}
.sc-root .sc-rule .sc-rcond {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  color: var(--sc-accent);
  background: var(--sc-indigo-soft);
  padding: 6px 14px;
  border-radius: 20px;
}
.sc-root .sc-rule .sc-rcond::before {
  content: 'holds when';
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--sc-muted);
}

.sc-root .sc-zones {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}
.sc-root .sc-zone { padding: 24px 26px 26px; }
.sc-root .sc-zone.sc-in  { background: var(--sc-panel); }
.sc-root .sc-zone.sc-out { background: var(--sc-panel-softer); }

.sc-root .sc-zone .sc-zhead {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 16px;
}
.sc-root .sc-zone .sc-zhead .sc-mark {
  width: 26px; height: 26px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700; color: #ffffff;
  flex: none;
}
.sc-root .sc-zone.sc-in  .sc-zhead .sc-mark { background: var(--sc-accent); }
.sc-root .sc-zone.sc-out .sc-zhead .sc-mark { background: var(--sc-stop); }
.sc-root .sc-zone .sc-zhead .sc-ztitle {
  font-size: 15px; font-weight: 700;
  color: var(--sc-title);
  letter-spacing: -0.01em;
}
.sc-root .sc-zone .sc-zhead .sc-znote {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--sc-muted);
  margin-left: auto;
}

.sc-root .sc-item {
  padding: 11px 0;
  border-bottom: 1px dashed var(--sc-line);
}
.sc-root .sc-item:last-child { border-bottom: none; }
.sc-root .sc-item .sc-iex {
  font-family: 'Inter', serif;
  font-size: 15px;
  color: var(--sc-ink);
  margin-bottom: 3px;
}
.sc-root .sc-zone.sc-out .sc-item .sc-iex { color: var(--sc-muted); }
.sc-root .sc-item .sc-iwhy {
  font-size: 11.5px;
  color: var(--sc-muted);
  line-height: 1.45;
}
.sc-root .sc-item .sc-iwhy strong { color: var(--sc-ink); font-weight: 600; }
.sc-root .sc-zone.sc-out .sc-item .sc-iwhy strong { color: var(--sc-stop); }

.sc-root .sc-divider {
  width: 3px;
  background: linear-gradient(180deg,
    var(--sc-line) 0%, var(--sc-stop) 20%,
    var(--sc-stop) 80%, var(--sc-line) 100%);
  position: relative;
}
.sc-root .sc-divider::after {
  content: 'boundary';
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 8.5px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--sc-stop);
  background: var(--sc-panel);
  padding: 5px 8px;
  white-space: nowrap;
}

.sc-root .sc-edge {
  padding: 18px 32px 22px;
  background: var(--sc-warm-soft);
  border-top: 3px solid var(--sc-warm);
  display: grid; grid-template-columns: auto 1fr;
  gap: 16px; align-items: start;
}
.sc-root .sc-edge .sc-ebadge {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: var(--sc-warm);
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 3px;
  white-space: nowrap;
}
.sc-root .sc-edge .sc-ebody {
  font-size: 12.5px;
  color: var(--sc-ink);
  line-height: 1.55;
}
.sc-root .sc-edge .sc-erow { padding: 3px 0; }
.sc-root .sc-edge .sc-emarker {
  font-family: 'Inter', serif;
  font-size: 14px;
  color: var(--sc-warm);
  font-weight: 600;
  margin-right: 8px;
}

/* ================================================================= */
/*  LEDGER VARIANT                                                     */
/* ================================================================= */

.sc-root .sc-lrule {
  padding: 22px 32px 20px;
  border-bottom: 1px solid var(--sc-line);
  display: grid; grid-template-columns: 1fr auto;
  gap: 24px; align-items: center;
}
.sc-root .sc-lrule .sc-lexpr {
  font-family: 'Inter', serif;
  font-size: 24px;
  color: var(--sc-ink);
}
.sc-root .sc-lrule .sc-lsub {
  font-size: 12.5px;
  color: var(--sc-muted);
  margin-top: 4px;
}
.sc-root .sc-lrule .sc-lchip {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  background: var(--sc-indigo-soft);
  color: var(--sc-accent);
  padding: 8px 14px;
  border-radius: 20px;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.sc-root .sc-tbl { display: grid; grid-template-columns: 1fr 1fr; }

.sc-root .sc-colhead {
  padding: 12px 24px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  display: flex; align-items: center; gap: 8px;
  border-bottom: 1.5px solid var(--sc-line);
}
.sc-root .sc-colhead.sc-in {
  color: var(--sc-accent);
  background: var(--sc-panel-softer);
  border-right: 1px solid var(--sc-line);
}
.sc-root .sc-colhead.sc-out {
  color: var(--sc-stop);
  background: var(--sc-stop-soft);
}
.sc-root .sc-colhead .sc-cdot {
  width: 8px; height: 8px; border-radius: 50%; flex: none;
}
.sc-root .sc-colhead.sc-in  .sc-cdot { background: var(--sc-accent); }
.sc-root .sc-colhead.sc-out .sc-cdot { background: var(--sc-stop); }

.sc-root .sc-cell {
  padding: 14px 24px;
  border-bottom: 1px solid var(--sc-line);
  display: flex; flex-direction: column; gap: 4px;
}
.sc-root .sc-cell.sc-in  { border-right: 1px solid var(--sc-line); }
.sc-root .sc-cell.sc-out { background: var(--sc-panel-softer); }
.sc-root .sc-cell .sc-cex {
  font-family: 'Inter', serif;
  font-size: 15px;
  color: var(--sc-ink);
}
.sc-root .sc-cell.sc-out .sc-cex { color: var(--sc-muted); }
.sc-root .sc-cell .sc-ctag {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--sc-muted);
}
.sc-root .sc-cell.sc-out .sc-ctag { color: var(--sc-stop); }
.sc-root .sc-cell.sc-blank { background: var(--sc-panel-softer); }

.sc-root .sc-foot {
  padding: 18px 32px 22px;
  display: grid; grid-template-columns: auto 1fr;
  gap: 16px; align-items: start;
  background: var(--sc-panel-softer);
}
.sc-root .sc-foot .sc-fbadge {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: var(--sc-title);
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 3px;
  white-space: nowrap;
}
.sc-root .sc-foot .sc-fbody {
  font-size: 12.5px;
  color: var(--sc-ink);
  line-height: 1.55;
}
.sc-root .sc-foot .sc-fbody strong { color: var(--sc-title); }

@media (max-width: 720px) {
  .sc-root .sc-zones { grid-template-columns: 1fr; }
  .sc-root .sc-divider {
    width: auto; height: 3px;
    background: var(--sc-stop);
  }
  .sc-root .sc-divider::after {
    transform: translate(-50%, -50%);
  }
  .sc-root .sc-tbl { grid-template-columns: 1fr; }
  .sc-root .sc-cell.sc-in { border-right: none; }
  .sc-root .sc-lrule { grid-template-columns: 1fr; }
}
`;

/* ------------------------------------------------------------------ */
/*  helpers                                                            */
/* ------------------------------------------------------------------ */

function Rich({ text }) {
  if (!text) return null;
  return <span className="sc-inline">{processContent(text)}</span>;
}

function Head({ header }) {
  return (
    <div className="sc-head">
      {header.kicker && <div className="sc-kicker">{header.kicker}</div>}
      <h2>{header.title}</h2>
      {header.lede && <div className="sc-lede"><Rich text={header.lede} /></div>}
    </div>
  );
}

/* Lines the two zones up into rows. Items sharing a pairId land on the same
   row; anything unpaired falls through in order against a blank cell. */
function pairRows(inside, outside) {
  const insideItems  = (inside  && inside.items)  || [];
  const outsideItems = (outside && outside.items) || [];

  const usedOut = {};
  const rows = [];

  insideItems.forEach((a) => {
    let match = null;
    if (a.pairId) {
      match = outsideItems.find(
        (b) => b.pairId === a.pairId && !usedOut[b.id]
      );
    }
    if (!match) {
      match = outsideItems.find((b) => !b.pairId && !usedOut[b.id]);
    }
    if (match) usedOut[match.id] = true;
    rows.push({ key: a.id, inside: a, outside: match || null });
  });

  outsideItems.forEach((b) => {
    if (usedOut[b.id]) return;
    rows.push({ key: b.id, inside: null, outside: b });
  });

  return rows;
}

/* ------------------------------------------------------------------ */
/*  boundary variant                                                   */
/* ------------------------------------------------------------------ */

function Zone({ zone, side, defaultTitle, mark }) {
  return (
    <div className={'sc-zone sc-' + side}>
      <div className="sc-zhead">
        <span className="sc-mark">{mark}</span>
        <span className="sc-ztitle">{zone.title || defaultTitle}</span>
        {zone.note && <span className="sc-znote">{zone.note}</span>}
      </div>
      {zone.items.map((it) => (
        <div className="sc-item" key={it.id}>
          <div className="sc-iex"><Rich text={it.expr} /></div>
          {it.why && <div className="sc-iwhy"><Rich text={it.why} /></div>}
        </div>
      ))}
    </div>
  );
}

function Boundary({ data }) {
  const edge = data.edgeCases;
  return (
    <div className="sc-card">
      {data.header && <Head header={data.header} />}

      <div className="sc-rule">
        {data.rule.name && <div className="sc-rname">{data.rule.name}</div>}
        <div className="sc-rexpr"><Rich text={data.rule.expr} /></div>
        {data.rule.condition && (
          <div className="sc-rcond"><Rich text={data.rule.condition} /></div>
        )}
      </div>

      <div className="sc-zones">
        <Zone
          zone={data.inside}
          side="in"
          defaultTitle="Inside scope"
          mark={'\u2713'}
        />
        <div className="sc-divider"></div>
        <Zone
          zone={data.outside}
          side="out"
          defaultTitle="Outside scope"
          mark={'\u2717'}
        />
      </div>

      {edge && edge.items && edge.items.length > 0 && (
        <div className="sc-edge">
          <div className="sc-ebadge">{edge.badge || 'Edge cases'}</div>
          <div className="sc-ebody">
            {edge.items.map((it) => (
              <div className="sc-erow" key={it.id}>
                {it.marker && (
                  <span className="sc-emarker"><Rich text={it.marker} /></span>
                )}
                <Rich text={it.body} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ledger variant                                                     */
/* ------------------------------------------------------------------ */

function Ledger({ data }) {
  const rows = pairRows(data.inside, data.outside);
  const boundary = data.boundary;

  return (
    <div className="sc-card">
      {data.header && <Head header={data.header} />}

      <div className="sc-lrule">
        <div>
          <div className="sc-lexpr"><Rich text={data.rule.expr} /></div>
          {data.rule.sub && <div className="sc-lsub"><Rich text={data.rule.sub} /></div>}
        </div>
        {data.rule.condition && (
          <div className="sc-lchip"><Rich text={data.rule.condition} /></div>
        )}
      </div>

      <div className="sc-tbl">
        <div className="sc-colhead sc-in">
          <span className="sc-cdot"></span>
          {(data.inside && data.inside.title) || 'Covered'}
        </div>
        <div className="sc-colhead sc-out">
          <span className="sc-cdot"></span>
          {(data.outside && data.outside.title) || 'Not covered'}
        </div>

        {rows.map((row) => (
          <React.Fragment key={row.key}>
            {row.inside ? (
              <div className="sc-cell sc-in">
                <div className="sc-cex"><Rich text={row.inside.expr} /></div>
                {row.inside.why && (
                  <div className="sc-ctag"><Rich text={row.inside.why} /></div>
                )}
              </div>
            ) : (
              <div className="sc-cell sc-in sc-blank"></div>
            )}
            {row.outside ? (
              <div className="sc-cell sc-out">
                <div className="sc-cex"><Rich text={row.outside.expr} /></div>
                {row.outside.why && (
                  <div className="sc-ctag"><Rich text={row.outside.why} /></div>
                )}
              </div>
            ) : (
              <div className="sc-cell sc-out sc-blank"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {boundary && (
        <div className="sc-foot">
          <div className="sc-fbadge">{boundary.badge || 'The boundary'}</div>
          <div className="sc-fbody"><Rich text={boundary.body} /></div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function ScopeCard({ data, variant = 'boundary', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const V = variant === 'ledger' ? Ledger : Boundary;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="sc-root" style={cssVars(t)}>
        <V data={data} />
      </div>
    </>
  );
}
