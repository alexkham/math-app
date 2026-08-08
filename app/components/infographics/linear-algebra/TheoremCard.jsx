import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

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

const CONVERSE_LABELS = {
  holds:    'Holds',
  fails:    'Does not hold',
  partial:  'Holds under extra hypothesis',
  vacuous:  'Vacuous',
  unstated: 'Not addressed',
};

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.thm-root.thm-t-' + key + '{' +
      '--thm-paper:' + t.paper + ';--thm-ink:' + t.ink + ';--thm-muted:' + t.muted + ';' +
      '--thm-line:' + t.line + ';--thm-accent:' + t.accent + ';--thm-soft:' + t.soft + ';}';
  });

  css +=
  '.thm-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;color:var(--thm-ink);}' +
  '.thm-root *,.thm-root *::before,.thm-root *::after{box-sizing:border-box;}' +
  '.thm-root a{color:var(--thm-accent);text-underline-offset:2px;}' +

  '.thm-grid{display:grid;gap:16px;}' +
  '.thm-root.thm-v-pair .thm-grid{grid-template-columns:repeat(auto-fit,minmax(330px,1fr));}' +

  '.thm-card{background:var(--thm-paper);border:1px solid var(--thm-line);' +
  'border-top:4px solid var(--thm-ink);}' +
  '.thm-card.is-open{border-top-color:var(--thm-accent);}' +

  '.thm-head{padding:22px 28px 18px;}' +
  '.thm-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;font-weight:800;' +
  'letter-spacing:.18em;text-transform:uppercase;color:var(--thm-accent);}' +
  '.thm-name{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:24px;' +
  'letter-spacing:-.025em;margin:6px 0 0;line-height:1.1;}' +
  '.thm-alias{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.1em;text-transform:uppercase;color:var(--thm-muted);margin-top:6px;}' +

  '.thm-forward{padding:0 28px 24px;}' +
  '.thm-sublabel{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.15em;text-transform:uppercase;color:var(--thm-muted);margin-bottom:11px;}' +
  '.thm-hyps{list-style:none;margin:0 0 20px;padding:0;counter-reset:thmh;}' +
  '.thm-hyps li{counter-increment:thmh;position:relative;padding:9px 0 9px 36px;' +
  'border-bottom:1px solid var(--thm-line);font-size:14px;}' +
  '.thm-hyps li:last-child{border-bottom:none;}' +
  '.thm-hyps li::before{content:\'H\' counter(thmh);position:absolute;left:0;top:10px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;font-weight:800;' +
  'color:var(--thm-muted);letter-spacing:.06em;}' +
  '.thm-hyps li.is-load::before{color:var(--thm-accent);}' +
  '.thm-concl{background:var(--thm-soft);border-left:3px solid var(--thm-accent);' +
  'padding:18px 20px;font-size:16px;text-align:center;}' +

  '.thm-rule{position:relative;height:0;border-top:2px solid var(--thm-ink);margin:0 28px;}' +
  '.thm-rule span{position:absolute;left:50%;top:-9px;transform:translateX(-50%);' +
  'background:var(--thm-paper);padding:0 14px;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:9px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--thm-ink);}' +

  '.thm-converse{padding:28px;}' +
  '.thm-converse-h{display:flex;align-items:center;gap:11px;margin-bottom:14px;flex-wrap:wrap;}' +
  '.thm-verdict{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.14em;text-transform:uppercase;padding:5px 10px;}' +
  '.thm-verdict.v-holds{background:var(--thm-ink);color:var(--thm-paper);}' +
  '.thm-verdict.v-fails{background:var(--thm-accent);color:var(--thm-paper);}' +
  '.thm-verdict.v-partial{background:var(--thm-soft);color:var(--thm-ink);' +
  'border:1px solid var(--thm-accent);}' +
  '.thm-verdict.v-vacuous{background:transparent;color:var(--thm-muted);' +
  'border:1px solid var(--thm-line);}' +
  '.thm-verdict.v-unstated{background:var(--thm-soft);color:var(--thm-accent);' +
  'border:1px dashed var(--thm-accent);}' +
  '.thm-converse-stmt{font-size:14px;margin:0 0 18px;}' +
  '.thm-converse-stmt p{margin:0 0 8px;}.thm-converse-stmt p:last-child{margin-bottom:0;}' +

  '.thm-counter{border:1px dashed var(--thm-accent);padding:16px 18px;background:var(--thm-soft);}' +
  '.thm-counter b{display:block;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--thm-accent);' +
  'margin-bottom:9px;}' +
  '.thm-counter p{margin:0 0 9px;font-size:13px;}.thm-counter p:last-child{margin-bottom:0;}' +

  '.thm-extra{margin-top:14px;font-size:13px;color:var(--thm-muted);padding-left:14px;' +
  'border-left:2px solid var(--thm-line);}' +
  '.thm-extra p{margin:0 0 7px;}.thm-extra p:last-child{margin-bottom:0;}' +

  /* ---------- variant: compact ---------- */
  '.thm-root.thm-v-compact .thm-card{border-top-width:3px;}' +
  '.thm-root.thm-v-compact .thm-head{padding:16px 20px 12px;}' +
  '.thm-root.thm-v-compact .thm-name{font-size:18px;}' +
  '.thm-root.thm-v-compact .thm-forward{padding:0 20px 18px;}' +
  '.thm-root.thm-v-compact .thm-hyps li{font-size:13px;padding:7px 0 7px 32px;}' +
  '.thm-root.thm-v-compact .thm-concl{font-size:14px;padding:14px 16px;}' +
  '.thm-root.thm-v-compact .thm-rule{margin:0 20px;}' +
  '.thm-root.thm-v-compact .thm-converse{padding:20px;}' +

  /* ---------- variant: brief ---------- */
  '.thm-root.thm-v-brief .thm-card{border-top-width:3px;}' +
  '.thm-root.thm-v-brief .thm-head{padding:15px 20px 10px;}' +
  '.thm-root.thm-v-brief .thm-name{font-size:17px;}' +
  '.thm-root.thm-v-brief .thm-body{padding:0 20px 18px;display:grid;' +
  'grid-template-columns:1fr auto;gap:18px;align-items:center;}' +
  '.thm-root.thm-v-brief .thm-concl{text-align:left;font-size:14px;padding:14px 16px;}' +
  '.thm-root.thm-v-brief .thm-hypline{font-size:12.5px;color:var(--thm-muted);margin-top:9px;}' +

  '.thm-empty{border:1px dashed var(--thm-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--thm-muted);}' +

  '@media (max-width:640px){' +
  '.thm-head,.thm-forward,.thm-converse{padding-left:18px;padding-right:18px;}' +
  '.thm-rule{margin:0 18px;}' +
  '.thm-name{font-size:20px;}' +
  '.thm-root.thm-v-brief .thm-body{grid-template-columns:1fr;}' +
  '}';

  return css;
}

const THM_CSS = buildCss();

/* ============================================================================
 * HELPERS
 * ==========================================================================*/
function normaliseConverse(raw) {
  if (!raw) {
    return {
      verdict: 'unstated',
      label: CONVERSE_LABELS.unstated,
      statement: 'The converse has not been addressed on this page.',
      counter: null,
      extra: null,
      isGap: true,
    };
  }
  const verdict = raw.verdict || 'unstated';
  return {
    verdict: verdict,
    label: raw.verdictLabel || CONVERSE_LABELS[verdict] || verdict,
    statement: raw.statement,
    summary: raw.summary,
    counter: raw.counterexample
      ? {
          label: raw.counterexampleLabel || 'Counterexample',
          lines: Array.isArray(raw.counterexample) ? raw.counterexample : [raw.counterexample],
        }
      : null,
    extra: raw.extraHypothesis,
    isGap: verdict === 'unstated',
  };
}

function normaliseHypotheses(list) {
  if (!list) return [];
  return list.map(function (h) {
    if (typeof h === 'string') return { text: h, loadBearing: false };
    return { text: h.text, loadBearing: !!h.loadBearing };
  });
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object, or { theorems: [...] } for multiple
 *   theme    – nine theme keys; default navy
 *   variant  – 'split' | 'compact' | 'pair' | 'brief'
 *
 * theorem shape
 *   { name, kicker, alias, hypotheses[], conclusion,
 *     converse: { verdict, statement, summary, counterexample, extraHypothesis } }
 * ==========================================================================*/
export default function TheoremCard(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : 'navy';
  const variant = props.variant || 'split';

  const rootClass = 'thm-root thm-t-' + theme + ' thm-v-' + variant;

  const source = !data
    ? []
    : Array.isArray(data.theorems)
      ? data.theorems
      : [data];

  if (source.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: THM_CSS }} />
        <div className="thm-empty">TheoremCard: no theorem supplied</div>
      </div>
    );
  }

  const theorems = source.map(function (t, i) {
    return {
      key: t.id || 'thm-' + i,
      raw: t,
      hypotheses: normaliseHypotheses(t.hypotheses),
      converse: normaliseConverse(t.converse),
    };
  });

  function renderConverse(c) {
    return (
      <div className="thm-converse">
        <div className="thm-converse-h">
          <span className={'thm-verdict v-' + c.verdict}>{c.label}</span>
          {c.summary ? <span className="thm-sublabel" style={{ margin: 0 }}>{c.summary}</span> : null}
        </div>
        {c.statement ? (
          <div className="thm-converse-stmt">{processContent(c.statement)}</div>
        ) : null}
        {c.counter ? (
          <div className="thm-counter">
            <b>{c.counter.label}</b>
            {c.counter.lines.map(function (line, li) {
              return <p key={li}>{processContent(line)}</p>;
            })}
          </div>
        ) : null}
        {c.extra ? <div className="thm-extra">{processContent(c.extra)}</div> : null}
      </div>
    );
  }

  function renderCard(t) {
    if (variant === 'brief') {
      return (
        <div key={t.key} className={'thm-card' + (t.converse.isGap ? ' is-open' : '')}>
          <div className="thm-head">
            {t.raw.kicker ? <div className="thm-kicker">{t.raw.kicker}</div> : null}
            <h3 className="thm-name">{t.raw.name}</h3>
          </div>
          <div className="thm-body">
            <div>
              <div className="thm-concl">{processContent(t.raw.conclusion)}</div>
              {t.hypotheses.length > 0 ? (
                <div className="thm-hypline">
                  {'Requires: '}
                  {processContent(
                    t.hypotheses.map(function (h) { return h.text; }).join('; ')
                  )}
                </div>
              ) : null}
            </div>
            <span className={'thm-verdict v-' + t.converse.verdict}>
              {'converse \u00B7 ' + t.converse.label}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div key={t.key} className={'thm-card' + (t.converse.isGap ? ' is-open' : '')}>
        <div className="thm-head">
          {t.raw.kicker ? <div className="thm-kicker">{t.raw.kicker}</div> : null}
          <h3 className="thm-name">{t.raw.name}</h3>
          {t.raw.alias ? <div className="thm-alias">{t.raw.alias}</div> : null}
        </div>

        <div className="thm-forward">
          {t.hypotheses.length > 0 ? (
            <>
              <div className="thm-sublabel">Hypotheses</div>
              <ul className="thm-hyps">
                {t.hypotheses.map(function (h, hi) {
                  return (
                    <li key={hi} className={h.loadBearing ? 'is-load' : ''}>
                      {processContent(h.text)}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : null}
          <div className="thm-sublabel">Conclusion</div>
          <div className="thm-concl">{processContent(t.raw.conclusion)}</div>
        </div>

        <div className="thm-rule"><span>Converse</span></div>
        {renderConverse(t.converse)}
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: THM_CSS }} />
      <div className="thm-grid">
        {theorems.map(renderCard)}
      </div>
    </div>
  );
}

export { THEMES as THM_THEMES };
