import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import MatrixScene from '../matrix-scene/MatrixScene';

/* ============================================================================
 * THEMES
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

/* Default slot set for matrix types. Overridable via data.slots. */
const DEFAULT_SLOTS = [
  { key: 'det',        label: 'det' },
  { key: 'rank',       label: 'rank' },
  { key: 'eigenvalues',label: 'eigen' },
  { key: 'inverse',    label: 'inverse' },
  { key: 'transpose',  label: 'transpose' },
  { key: 'trace',      label: 'trace' },
];

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.otp-root.otp-t-' + key + '{' +
      '--otp-paper:' + t.paper + ';--otp-ink:' + t.ink + ';--otp-muted:' + t.muted + ';' +
      '--otp-line:' + t.line + ';--otp-accent:' + t.accent + ';--otp-soft:' + t.soft + ';}';
  });

  css +=
  '.otp-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--otp-ink);background:var(--otp-paper);}' +
  '.otp-root *,.otp-root *::before,.otp-root *::after{box-sizing:border-box;}' +
  '.otp-root a{color:var(--otp-accent);text-underline-offset:2px;}' +

  '.otp-mast{background:var(--otp-ink);color:var(--otp-paper);padding:26px 32px 24px;position:relative;}' +
  '.otp-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--otp-accent);}' +
  '.otp-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.otp-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:29px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.otp-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
  '.otp-tally{position:absolute;right:32px;top:24px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.otp-tally b{display:block;font-size:34px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.otp-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +
  '.otp-tally.is-gap b{color:var(--otp-accent);}' +

  /* ---------- variant: cards ---------- */
  '.otp-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(258px,1fr));gap:14px;' +
  'padding:22px 26px 26px;border:1px solid var(--otp-line);border-top:none;}' +
  '.otp-card{border:1px solid var(--otp-line);display:flex;flex-direction:column;' +
  'background:var(--otp-paper);}' +
  '.otp-card-h{padding:14px 18px 11px;border-bottom:1px solid var(--otp-line);}' +
  '.otp-name{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:16px;' +
  'letter-spacing:-.015em;}' +
  '.otp-cond{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'color:var(--otp-accent);margin-top:5px;}' +
  '.otp-example{padding:12px;background:var(--otp-soft);border-bottom:1px solid var(--otp-line);' +
  'display:flex;align-items:center;justify-content:center;min-height:82px;}' +
  '.otp-slots{padding:13px 18px;display:grid;grid-template-columns:auto 1fr;gap:6px 12px;' +
  'align-items:baseline;margin:0;}' +
  '.otp-slots dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.11em;text-transform:uppercase;color:var(--otp-muted);white-space:nowrap;}' +
  '.otp-slots dd{margin:0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;' +
  'font-weight:500;}' +
  '.otp-slots dd.is-gap{color:var(--otp-accent);font-weight:800;}' +
  '.otp-slots dd.is-gap::after{content:\' \\2014 not stated\';font-weight:400;font-size:10px;' +
  'letter-spacing:.05em;font-family:\'Inter\',sans-serif;}' +
  '.otp-note{padding:11px 18px;border-top:1px solid var(--otp-line);font-size:12px;' +
  'color:var(--otp-muted);}' +

  /* ---------- variant: matrix ---------- */
  '.otp-scroll{overflow-x:auto;border:1px solid var(--otp-line);border-top:none;}' +
  '.otp-table{width:100%;border-collapse:collapse;font-size:13px;min-width:720px;}' +
  '.otp-table thead th{background:var(--otp-ink);color:var(--otp-paper);text-align:left;' +
  'padding:11px 13px;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.12em;text-transform:uppercase;font-weight:800;}' +
  '.otp-table thead th:first-child{background:var(--otp-accent);}' +
  '.otp-table tbody th{text-align:left;padding:11px 13px;background:var(--otp-soft);' +
  'border-bottom:1px solid var(--otp-line);font-family:\'Bricolage Grotesque\',sans-serif;' +
  'font-weight:600;font-size:13px;white-space:nowrap;}' +
  '.otp-table tbody td{padding:11px 13px;border-bottom:1px solid var(--otp-line);' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;}' +
  '.otp-table tbody td.is-gap{color:var(--otp-accent);font-weight:800;background:var(--otp-soft);}' +

  /* ---------- variant: stack ---------- */
  '.otp-stack{border:1px solid var(--otp-line);border-top:none;}' +
  '.otp-row{display:grid;grid-template-columns:200px 190px 1fr;gap:20px;' +
  'border-bottom:1px solid var(--otp-line);align-items:center;padding:16px 26px;}' +
  '.otp-row:last-child{border-bottom:none;}' +
  '.otp-row-fig{display:flex;justify-content:center;}' +
  '.otp-row-slots{display:grid;grid-template-columns:repeat(auto-fit,minmax(96px,1fr));gap:11px;' +
  'margin:0;}' +
  '.otp-row-slots dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'letter-spacing:.14em;text-transform:uppercase;color:var(--otp-muted);margin-bottom:4px;}' +
  '.otp-row-slots dd{margin:0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;' +
  'font-weight:600;}' +
  '.otp-row-slots dd.is-gap{color:var(--otp-accent);}' +

  /* ---------- legend + footnote ---------- */
  '.otp-legend{border:1px solid var(--otp-line);border-top:none;padding:14px 32px;display:flex;' +
  'gap:10px;align-items:center;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.1em;text-transform:uppercase;color:var(--otp-muted);}' +
  '.otp-legend i{width:14px;height:14px;background:var(--otp-soft);' +
  'border:1px solid var(--otp-accent);display:inline-block;}' +
  '.otp-foot{border:1px solid var(--otp-line);border-top:none;padding:15px 32px;font-size:13px;' +
  'color:var(--otp-muted);}' +

  '.otp-empty{border:1px dashed var(--otp-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--otp-muted);}' +

  '@media (max-width:880px){.otp-row{grid-template-columns:1fr;gap:14px;}}' +
  '@media (max-width:640px){' +
  '.otp-mast{padding:22px 18px 20px;}.otp-mast::after{left:18px;right:18px;}' +
  '.otp-title{font-size:23px;}' +
  '.otp-tally{position:static;text-align:left;margin-top:14px;}' +
  '.otp-cards{padding:18px;}.otp-legend,.otp-foot{padding:14px 18px;}' +
  '.otp-row{padding:16px 18px;}' +
  '}';

  return css;
}

const OTP_CSS = buildCss();

/* ============================================================================
 * HELPERS
 * ==========================================================================*/
const GAP_TOKENS = ['', '-', '\u2014', 'n/a', 'N/A', null, undefined];

function isGapValue(v) {
  return GAP_TOKENS.indexOf(v) !== -1;
}

function resolveSlots(data) {
  if (data.slots && data.slots.length > 0) {
    return data.slots.map(function (s) {
      return typeof s === 'string' ? { key: s, label: s } : s;
    });
  }
  return DEFAULT_SLOTS;
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – { kicker, title, intro, footnote, slots?, types: [...] }
 *   theme    – nine theme keys; default navy
 *   variant  – 'cards' | 'matrix' | 'stack'
 *
 * type shape
 *   { name, condition, note, example: [[...]], dimZero?, highlight?,
 *     properties: { det, rank, eigenvalues, inverse, transpose, trace, ... } }
 * ==========================================================================*/
export default function ObjectTypeProfile(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : 'navy';
  const variant = props.variant || 'cards';

  const rootClass = 'otp-root otp-t-' + theme + ' otp-v-' + variant;

  if (!data || !data.types || data.types.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: OTP_CSS }} />
        <div className="otp-empty">ObjectTypeProfile: no types supplied</div>
      </div>
    );
  }

  const slots = resolveSlots(data);

  /* derive every cell once, marking gaps */
  const types = data.types.map(function (t, i) {
    const cells = slots.map(function (s) {
      const raw = t.properties ? t.properties[s.key] : undefined;
      return {
        key: s.key,
        label: s.label,
        value: isGapValue(raw) ? '\u2014' : raw,
        gap: isGapValue(raw),
      };
    });
    return {
      key: t.id || 'type-' + i,
      raw: t,
      cells: cells,
      gapCount: cells.filter(function (c) { return c.gap; }).length,
    };
  });

  const totalGaps = types.reduce(function (sum, t) { return sum + t.gapCount; }, 0);

  function renderFigure(t, size) {
    if (!t.raw.example) return null;
    const highlights = [];
    if (t.raw.highlight) {
      highlights.push({ target: t.raw.highlight, role: 'rowA' });
    }
    return (
      <MatrixScene
        theme={theme}
        cellSize={size || 'sm'}
        spec={{
          matrices: [{
            data: t.raw.example,
            dimZero: !!t.raw.dimZero,
            highlights: highlights,
          }],
        }}
      />
    );
  }

  const masthead = (
    <div className="otp-mast">
      {data.kicker ? <div className="otp-kicker">{data.kicker}</div> : null}
      {data.title ? <h3 className="otp-title">{data.title}</h3> : null}
      {data.intro ? <p className="otp-intro">{processContent(data.intro)}</p> : null}
      <div className={'otp-tally' + (totalGaps > 0 ? ' is-gap' : '')}>
        <b>{totalGaps > 0 ? totalGaps : types.length}</b>
        <span>{totalGaps > 0 ? 'unfilled slots' : 'types'}</span>
      </div>
    </div>
  );

  function renderCards() {
    return (
      <div className="otp-cards">
        {types.map(function (t) {
          return (
            <div key={t.key} className="otp-card">
              <div className="otp-card-h">
                <div className="otp-name">{t.raw.name}</div>
                {t.raw.condition ? (
                  <div className="otp-cond">{processContent(t.raw.condition)}</div>
                ) : null}
              </div>
              {t.raw.example ? (
                <div className="otp-example">{renderFigure(t, 'sm')}</div>
              ) : null}
              <dl className="otp-slots">
                {t.cells.map(function (c) {
                  return (
                    <React.Fragment key={c.key}>
                      <dt>{c.label}</dt>
                      <dd className={c.gap ? 'is-gap' : ''}>
                        {c.gap ? c.value : processContent(String(c.value))}
                      </dd>
                    </React.Fragment>
                  );
                })}
              </dl>
              {t.raw.note ? <div className="otp-note">{processContent(t.raw.note)}</div> : null}
            </div>
          );
        })}
      </div>
    );
  }

  function renderMatrix() {
    return (
      <div className="otp-scroll">
        <table className="otp-table">
          <thead>
            <tr>
              <th>Type</th>
              {slots.map(function (s) { return <th key={s.key}>{s.label}</th>; })}
            </tr>
          </thead>
          <tbody>
            {types.map(function (t) {
              return (
                <tr key={t.key}>
                  <th>{t.raw.name}</th>
                  {t.cells.map(function (c) {
                    return (
                      <td key={c.key} className={c.gap ? 'is-gap' : ''}>
                        {c.gap ? c.value : processContent(String(c.value))}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  function renderStack() {
    return (
      <div className="otp-stack">
        {types.map(function (t) {
          return (
            <div key={t.key} className="otp-row">
              <div>
                <div className="otp-name">{t.raw.name}</div>
                {t.raw.condition ? (
                  <div className="otp-cond">{processContent(t.raw.condition)}</div>
                ) : null}
              </div>
              <div className="otp-row-fig">{renderFigure(t, 'xs')}</div>
              <dl className="otp-row-slots">
                {t.cells.map(function (c) {
                  return (
                    <div key={c.key}>
                      <dt>{c.label}</dt>
                      <dd className={c.gap ? 'is-gap' : ''}>
                        {c.gap ? c.value : processContent(String(c.value))}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          );
        })}
      </div>
    );
  }

  let body;
  if (variant === 'matrix') body = renderMatrix();
  else if (variant === 'stack') body = renderStack();
  else body = renderCards();

  return (
    <div className={rootClass} data-gaps={totalGaps}>
      <style dangerouslySetInnerHTML={{ __html: OTP_CSS }} />
      {masthead}
      {body}
      {totalGaps > 0 ? (
        <div className="otp-legend"><i /> slot the page never filled</div>
      ) : null}
      {data.footnote ? <div className="otp-foot">{processContent(data.footnote)}</div> : null}
    </div>
  );
}

export { THEMES as OTP_THEMES, DEFAULT_SLOTS };
