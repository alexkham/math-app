import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * THEMES — six base tokens each. Navy is the default.
 * ==========================================================================*/
const THEMES = {
  navy:       { paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478', line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5' },
  terracotta: { paper: '#fffaf3', ink: '#2a1a14', muted: '#6b5848', line: '#e8d9c4', accent: '#c4543a', soft: '#fdf3e6' },
  forest:     { paper: '#f6f3ea', ink: '#1a2a1f', muted: '#5a6b5a', line: '#d8dcc9', accent: '#3d6b4a', soft: '#eef2e0' },
  burgundy:   { paper: '#faf4f4', ink: '#2a1418', muted: '#6b5258', line: '#e6d5d8', accent: '#7d2838', soft: '#f5e9ec' },
  olive:      { paper: '#f9f6ea', ink: '#1f1f14', muted: '#5a5a4a', line: '#dcd6bc', accent: '#7a7a2a', soft: '#f0ecd4' },
  ocean:      { paper: '#f0f7f7', ink: '#0f2228', muted: '#4a6168', line: '#cfe0e0', accent: '#1f7a82', soft: '#e0eded' },
  mono:       { paper: '#ffffff', ink: '#000000', muted: '#666666', line: '#dddddd', accent: '#000000', soft: '#f4f4f4' },
  plum:       { paper: '#f7f3f8', ink: '#1f1428', muted: '#5a4e6b', line: '#e0d6e4', accent: '#5a2d7a', soft: '#ede4f0' },
  dark:       { paper: '#1a1a22', ink: '#f0ece0', muted: '#9a958a', line: '#2e2e3a', accent: '#ffb84a', soft: '#22222e' },
};

const VERDICT_LABELS = {
  holds:       'Unconditional',
  conditional: 'Conditional',
  fails:       'Fails',
  undefined:   'Undefined',
};

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  /* theme blocks */
  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.plc-root.plc-t-' + key + '{' +
      '--plc-paper:' + t.paper + ';' +
      '--plc-ink:' + t.ink + ';' +
      '--plc-muted:' + t.muted + ';' +
      '--plc-line:' + t.line + ';' +
      '--plc-accent:' + t.accent + ';' +
      '--plc-soft:' + t.soft + ';}';
  });

  css +=
  /* ---------- root ---------- */
  '.plc-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--plc-ink);background:var(--plc-paper);}' +
  '.plc-root *,.plc-root *::before,.plc-root *::after{box-sizing:border-box;}' +
  '.plc-root a{color:var(--plc-accent);text-underline-offset:2px;text-decoration-thickness:1px;}' +

  /* ---------- masthead ---------- */
  '.plc-mast{background:var(--plc-ink);color:var(--plc-paper);padding:26px 32px 24px;position:relative;}' +
  '.plc-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--plc-accent);}' +
  '.plc-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.plc-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:29px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.plc-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
  '.plc-tally{position:absolute;right:32px;top:24px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.plc-tally b{display:block;font-size:34px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.plc-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

  /* ---------- verdict badge ---------- */
  '.plc-badge{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.15em;text-transform:uppercase;padding:5px 10px;white-space:nowrap;display:inline-block;}' +
  '.plc-badge.v-holds{background:var(--plc-ink);color:var(--plc-paper);}' +
  '.plc-badge.v-fails{background:var(--plc-accent);color:var(--plc-paper);}' +
  '.plc-badge.v-conditional{background:transparent;color:var(--plc-ink);border:1px solid var(--plc-ink);}' +
  '.plc-badge.v-undefined{background:var(--plc-soft);color:var(--plc-accent);' +
  'border:1px dashed var(--plc-accent);}' +

  /* ==========================================================
   * VARIANT: plate
   * ========================================================*/
  '.plc-plates{border:1px solid var(--plc-line);border-top:none;}' +
  '.plc-plate{display:grid;grid-template-columns:76px 1fr 268px;border-bottom:1px solid var(--plc-line);}' +
  '.plc-plate:last-child{border-bottom:none;}' +
  '.plc-idx{border-right:1px solid var(--plc-line);background:var(--plc-soft);display:flex;' +
  'flex-direction:column;align-items:center;padding-top:26px;gap:10px;}' +
  '.plc-idx-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:22px;font-weight:800;' +
  'color:var(--plc-accent);letter-spacing:-.04em;line-height:1;}' +
  '.plc-idx-r{writing-mode:vertical-rl;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:var(--plc-muted);}' +
  '.plc-plate.is-broken .plc-idx{background:var(--plc-accent);}' +
  '.plc-plate.is-broken .plc-idx-n,.plc-plate.is-broken .plc-idx-r{color:var(--plc-paper);}' +
  '.plc-face{padding:26px 30px;display:flex;flex-direction:column;gap:16px;}' +
  '.plc-name{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:19px;' +
  'letter-spacing:-.015em;}' +
  '.plc-stmt{font-size:20px;padding:20px 0 20px 22px;border-left:3px solid var(--plc-accent);}' +
  '.plc-plate.is-broken .plc-stmt{border-left-style:double;border-left-width:6px;}' +
  '.plc-prose{font-size:13.5px;color:var(--plc-muted);max-width:520px;}' +
  '.plc-prose p{margin:0 0 8px;}.plc-prose p:last-child{margin-bottom:0;}' +
  '.plc-aside{border-left:1px solid var(--plc-line);background:var(--plc-soft);padding:24px 22px;' +
  'display:flex;flex-direction:column;gap:18px;}' +
  '.plc-aside .plc-badge{align-self:flex-start;}' +
  '.plc-meta{display:grid;gap:13px;margin:0;}' +
  '.plc-meta dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'letter-spacing:.16em;text-transform:uppercase;color:var(--plc-muted);margin-bottom:4px;}' +
  '.plc-meta dd{margin:0;font-size:13px;}' +
  '.plc-witness{margin-top:auto;border-top:2px solid var(--plc-accent);padding-top:14px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11.5px;line-height:1.7;}' +
  '.plc-witness b{display:block;font-size:8px;letter-spacing:.16em;text-transform:uppercase;' +
  'color:var(--plc-accent);margin-bottom:8px;font-weight:800;}' +

  /* ==========================================================
   * VARIANT: docket
   * ========================================================*/
  '.plc-docket{border:1px solid var(--plc-line);border-top:none;padding:0 32px 28px;}' +
  '.plc-group{padding-top:26px;margin-top:26px;border-top:1px solid var(--plc-line);}' +
  '.plc-group:first-child{border-top:none;margin-top:0;}' +
  '.plc-group-h{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.2em;text-transform:uppercase;color:var(--plc-accent);margin-bottom:18px;' +
  'display:flex;align-items:center;gap:14px;}' +
  '.plc-group-h::after{content:\'\';flex:1;height:1px;background:var(--plc-line);}' +
  '.plc-entry{display:grid;grid-template-columns:40px 1fr;gap:20px;padding:14px 0;' +
  'border-bottom:1px dotted var(--plc-line);align-items:baseline;}' +
  '.plc-entry:last-child{border-bottom:none;}' +
  '.plc-hang{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;font-weight:800;' +
  'color:var(--plc-muted);text-align:right;letter-spacing:-.02em;}' +
  '.plc-entry.is-broken .plc-hang{color:var(--plc-accent);}' +
  '.plc-body{display:grid;grid-template-columns:1fr 180px;gap:22px;align-items:baseline;}' +
  '.plc-line{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;}' +
  '.plc-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14.5px;' +
  'min-width:136px;}' +
  '.plc-fx{font-size:16px;}' +
  '.plc-cond{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.05em;color:var(--plc-muted);text-align:right;line-height:1.5;}' +
  '.plc-cond.is-hot{color:var(--plc-accent);font-weight:700;}' +
  '.plc-drop{grid-column:2;margin-top:11px;padding:13px 16px;background:var(--plc-soft);' +
  'border-left:3px solid var(--plc-accent);font-size:12.5px;}' +
  '.plc-drop p{margin:0 0 7px;}.plc-drop p:last-child{margin-bottom:0;}' +

  /* ==========================================================
   * VARIANT: grid
   * ========================================================*/
  '.plc-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(262px,1fr));gap:14px;' +
  'padding:22px 26px 26px;border:1px solid var(--plc-line);border-top:none;}' +
  '.plc-card{border:1px solid var(--plc-line);display:flex;flex-direction:column;' +
  'background:var(--plc-paper);}' +
  '.plc-card.is-broken{border-color:var(--plc-accent);}' +
  '.plc-card-h{display:flex;align-items:baseline;gap:9px;padding:14px 18px 12px;' +
  'border-bottom:1px solid var(--plc-line);flex-wrap:wrap;}' +
  '.plc-card-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:15px;}' +
  '.plc-card-fx{padding:22px 18px;flex:1;display:flex;align-items:center;justify-content:center;' +
  'background:var(--plc-soft);font-size:15px;text-align:center;min-height:78px;}' +
  '.plc-card.is-broken .plc-card-fx{background:var(--plc-paper);}' +
  '.plc-strip{padding:12px 18px;border-top:1px solid var(--plc-line);display:grid;' +
  'grid-template-columns:auto 1fr;gap:7px 12px;align-items:baseline;margin:0;}' +
  '.plc-strip dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.12em;text-transform:uppercase;color:var(--plc-muted);white-space:nowrap;}' +
  '.plc-strip dd{margin:0;font-size:13px;}' +
  '.plc-card-note{padding:11px 18px;font-size:12px;color:var(--plc-muted);' +
  'border-top:1px solid var(--plc-line);}' +
  '.plc-card-wit{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11.5px;' +
  'padding:11px 18px;border-top:1px dashed var(--plc-accent);background:var(--plc-soft);' +
  'line-height:1.65;}' +
  '.plc-card-wit b{display:block;font-size:8px;letter-spacing:.14em;text-transform:uppercase;' +
  'color:var(--plc-accent);margin-bottom:6px;font-weight:800;}' +

  /* ==========================================================
   * VARIANT: ledger
   * ========================================================*/
  '.plc-rows{border:1px solid var(--plc-line);border-top:none;padding:0 30px 24px;}' +
  '.plc-row{display:grid;grid-template-columns:180px 1fr 140px;gap:20px;padding:16px 0;' +
  'border-bottom:1px solid var(--plc-line);align-items:center;}' +
  '.plc-row:last-child{border-bottom:none;}' +
  '.plc-row.is-broken{background:var(--plc-soft);}' +
  '.plc-row-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:15px;}' +
  '.plc-row-sub{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.08em;text-transform:uppercase;color:var(--plc-muted);margin-top:3px;}' +
  '.plc-row-fx{font-size:15px;}' +
  '.plc-row-vd{text-align:right;}' +
  '.plc-row-wit{grid-column:1 / -1;border-top:1px dashed var(--plc-accent);margin-top:12px;' +
  'padding:11px 0 0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11.5px;' +
  'line-height:1.65;}' +

  /* ---------- footnote ---------- */
  '.plc-foot{border:1px solid var(--plc-line);border-top:none;padding:15px 32px;' +
  'font-size:13px;color:var(--plc-muted);}' +

  /* ---------- fallback ---------- */
  '.plc-empty{border:1px dashed var(--plc-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--plc-muted);}' +

  /* ---------- responsive ---------- */
  '@media (max-width:880px){' +
  '.plc-plate{grid-template-columns:56px 1fr;}' +
  '.plc-aside{grid-column:2;border-left:none;border-top:1px solid var(--plc-line);}' +
  '.plc-body{grid-template-columns:1fr;}' +
  '.plc-cond{text-align:left;}' +
  '.plc-drop{grid-column:1;}' +
  '.plc-row{grid-template-columns:1fr;gap:9px;}' +
  '.plc-row-vd{text-align:left;}' +
  '}' +
  '@media (max-width:640px){' +
  '.plc-mast{padding:22px 18px 20px;}' +
  '.plc-mast::after{left:18px;right:18px;}' +
  '.plc-title{font-size:23px;}' +
  '.plc-tally{position:static;text-align:left;margin-top:14px;}' +
  '.plc-face{padding:20px 18px;}' +
  '.plc-aside{padding:18px;}' +
  '.plc-docket{padding:0 18px 22px;}' +
  '.plc-cards{padding:18px;}' +
  '.plc-rows{padding:0 18px 20px;}' +
  '.plc-foot{padding:14px 18px;}' +
  '}';

  return css;
}

const PLC_CSS = buildCss();

/* ============================================================================
 * INTERNAL HELPERS — all derivation happens here, never in the consuming page.
 * ==========================================================================*/
function normaliseVerdict(law) {
  if (law.verdict) return law.verdict;
  if (law.failsWhen || law.witness) return 'fails';
  if (law.holdsWhen || law.requires) return 'conditional';
  return 'holds';
}

function isBroken(verdict) {
  return verdict === 'fails' || verdict === 'undefined';
}

function romanise(n) {
  const map = [
    [10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i'],
  ];
  let out = '';
  let rest = n;
  for (let i = 0; i < map.length; i++) {
    while (rest >= map[i][0]) {
      out += map[i][1];
      rest -= map[i][0];
    }
  }
  return out;
}

function padIndex(n) {
  return n < 10 ? '0' + n : String(n);
}

function witnessLines(witness) {
  if (!witness) return null;
  if (typeof witness === 'string') return { label: 'Witness', lines: [witness] };
  return {
    label: witness.label || 'Witness',
    lines: witness.lines || (witness.text ? [witness.text] : []),
  };
}

function groupLaws(laws) {
  const buckets = { holds: [], conditional: [], fails: [], undefined: [] };
  laws.forEach(function (entry) {
    buckets[entry.verdict].push(entry);
  });
  return [
    { key: 'holds',       heading: 'Unconditional', items: buckets.holds },
    { key: 'conditional', heading: 'Conditional',   items: buckets.conditional },
    { key: 'fails',       heading: 'Fails \u2014 and why the failure is instructive', items: buckets.fails },
    { key: 'undefined',   heading: 'Undefined',     items: buckets.undefined },
  ].filter(function (g) { return g.items.length > 0; });
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – one flat object, described below
 *   theme    – one of the nine theme keys; defaults to navy
 *   variant  – 'plate' | 'docket' | 'grid' | 'ledger'
 *   showTally – boolean, default true
 *
 * data shape
 *   {
 *     kicker, title, intro, footnote, tallyLabel,
 *     laws: [{
 *       name, statement,
 *       verdict?: 'holds'|'conditional'|'fails'|'undefined',
 *       requires?, holdsWhen?, failsWhen?, commonError?,
 *       note?,                       // rich text
 *       witness?: string | { label, lines[] }
 *     }]
 *   }
 * ==========================================================================*/
export default function PropertyLawCard(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : 'navy';
  const variant = props.variant || 'plate';
  const showTally = props.showTally !== false;

  const rootClass = 'plc-root plc-t-' + theme + ' plc-v-' + variant;

  if (!data || !data.laws || data.laws.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
        <div className="plc-empty">PropertyLawCard: no laws supplied</div>
      </div>
    );
  }

  /* -- derive everything once -- */
  const laws = data.laws.map(function (law, i) {
    const verdict = normaliseVerdict(law);
    return {
      raw: law,
      index: i + 1,
      verdict: verdict,
      broken: isBroken(verdict),
      badgeLabel: law.verdictLabel || VERDICT_LABELS[verdict],
      witness: witnessLines(law.witness),
      meta: [
        law.requires    ? { term: 'Requires',     value: law.requires }    : null,
        law.holdsWhen   ? { term: 'Holds when',   value: law.holdsWhen }   : null,
        law.failsWhen   ? { term: 'Fails when',   value: law.failsWhen }   : null,
        law.commonError ? { term: 'Common error', value: law.commonError } : null,
      ].filter(Boolean),
    };
  });

  const brokenCount = laws.filter(function (l) { return l.broken; }).length;
  const groups = groupLaws(laws);

  const masthead = (
    <div className="plc-mast">
      {data.kicker ? <div className="plc-kicker">{data.kicker}</div> : null}
      {data.title ? <h3 className="plc-title">{data.title}</h3> : null}
      {data.intro ? <p className="plc-intro">{processContent(data.intro)}</p> : null}
      {showTally ? (
        <div className="plc-tally">
          <b>{padIndex(laws.length)}</b>
          <span>{data.tallyLabel || 'laws'}</span>
        </div>
      ) : null}
    </div>
  );

  const footnote = data.footnote ? (
    <div className="plc-foot">{processContent(data.footnote)}</div>
  ) : null;

  /* ==========================================================
   * plate
   * ========================================================*/
  function renderPlate() {
    return (
      <div className="plc-plates">
        {laws.map(function (l) {
          return (
            <div key={l.index} className={'plc-plate' + (l.broken ? ' is-broken' : '')}>
              <div className="plc-idx">
                <span className="plc-idx-n">{padIndex(l.index)}</span>
                <span className="plc-idx-r">{l.verdict}</span>
              </div>
              <div className="plc-face">
                <div className="plc-name">{l.raw.name}</div>
                <div className="plc-stmt">{processContent(l.raw.statement)}</div>
                {l.raw.note ? <div className="plc-prose">{processContent(l.raw.note)}</div> : null}
              </div>
              <div className="plc-aside">
                <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
                {l.meta.length > 0 ? (
                  <dl className="plc-meta">
                    {l.meta.map(function (m, mi) {
                      return (
                        <div key={mi}>
                          <dt>{m.term}</dt>
                          <dd>{processContent(m.value)}</dd>
                        </div>
                      );
                    })}
                  </dl>
                ) : null}
                {l.witness ? (
                  <div className="plc-witness">
                    <b>{l.witness.label}</b>
                    {l.witness.lines.map(function (line, li) {
                      return (
                        <React.Fragment key={li}>
                          {processContent(line)}
                          {li < l.witness.lines.length - 1 ? <br /> : null}
                        </React.Fragment>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  /* ==========================================================
   * docket
   * ========================================================*/
  function renderDocket() {
    return (
      <div className="plc-docket">
        {groups.map(function (g) {
          return (
            <div key={g.key} className="plc-group">
              <div className="plc-group-h">{g.heading}</div>
              {g.items.map(function (l) {
                const cond =
                  l.raw.failsWhen || l.raw.holdsWhen || l.raw.requires || l.badgeLabel;
                return (
                  <div key={l.index} className={'plc-entry' + (l.broken ? ' is-broken' : '')}>
                    <span className="plc-hang">{romanise(l.index)}</span>
                    <div className="plc-body">
                      <div className="plc-line">
                        <span className="plc-nm">{l.raw.name}</span>
                        <span className="plc-fx">{processContent(l.raw.statement)}</span>
                      </div>
                      <div className={'plc-cond' + (l.broken ? ' is-hot' : '')}>
                        {processContent(cond)}
                      </div>
                      {l.raw.note || l.witness ? (
                        <div className="plc-drop">
                          {l.raw.note ? processContent(l.raw.note) : null}
                          {l.witness
                            ? l.witness.lines.map(function (line, li) {
                                return <p key={li}>{processContent(line)}</p>;
                              })
                            : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  /* ==========================================================
   * grid
   * ========================================================*/
  function renderGrid() {
    return (
      <div className="plc-cards">
        {laws.map(function (l) {
          return (
            <div key={l.index} className={'plc-card' + (l.broken ? ' is-broken' : '')}>
              <div className="plc-card-h">
                <span className="plc-card-nm">{l.raw.name}</span>
                <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
              </div>
              <div className="plc-card-fx">{processContent(l.raw.statement)}</div>
              {l.meta.length > 0 ? (
                <dl className="plc-strip">
                  {l.meta.map(function (m, mi) {
                    return (
                      <React.Fragment key={mi}>
                        <dt>{m.term}</dt>
                        <dd>{processContent(m.value)}</dd>
                      </React.Fragment>
                    );
                  })}
                </dl>
              ) : null}
              {l.raw.note ? <div className="plc-card-note">{processContent(l.raw.note)}</div> : null}
              {l.witness ? (
                <div className="plc-card-wit">
                  <b>{l.witness.label}</b>
                  {l.witness.lines.map(function (line, li) {
                    return (
                      <React.Fragment key={li}>
                        {processContent(line)}
                        {li < l.witness.lines.length - 1 ? <br /> : null}
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  /* ==========================================================
   * ledger
   * ========================================================*/
  function renderLedger() {
    return (
      <div className="plc-rows">
        {laws.map(function (l) {
          return (
            <div key={l.index} className={'plc-row' + (l.broken ? ' is-broken' : '')}>
              <div>
                <div className="plc-row-nm">{l.raw.name}</div>
                {l.raw.subtitle ? <div className="plc-row-sub">{l.raw.subtitle}</div> : null}
              </div>
              <div className="plc-row-fx">{processContent(l.raw.statement)}</div>
              <div className="plc-row-vd">
                <span className={'plc-badge v-' + l.verdict}>{l.badgeLabel}</span>
              </div>
              {l.witness ? (
                <div className="plc-row-wit">
                  {l.witness.lines.map(function (line, li) {
                    return (
                      <React.Fragment key={li}>
                        {processContent(line)}
                        {li < l.witness.lines.length - 1 ? <br /> : null}
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  let body;
  if (variant === 'docket') body = renderDocket();
  else if (variant === 'grid') body = renderGrid();
  else if (variant === 'ledger') body = renderLedger();
  else body = renderPlate();

  return (
    <div className={rootClass} data-broken={brokenCount}>
      <style dangerouslySetInnerHTML={{ __html: PLC_CSS }} />
      {masthead}
      {body}
      {footnote}
    </div>
  );
}

export { THEMES as PLC_THEMES };
