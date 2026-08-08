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

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.csp-root.csp-t-' + key + '{' +
      '--csp-paper:' + t.paper + ';--csp-ink:' + t.ink + ';--csp-muted:' + t.muted + ';' +
      '--csp-line:' + t.line + ';--csp-accent:' + t.accent + ';--csp-soft:' + t.soft + ';}';
  });

  css +=
  '.csp-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--csp-ink);background:var(--csp-paper);}' +
  '.csp-root *,.csp-root *::before,.csp-root *::after{box-sizing:border-box;}' +
  '.csp-root a{color:var(--csp-accent);text-underline-offset:2px;}' +

  '.csp-mast{background:var(--csp-ink);color:var(--csp-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.csp-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--csp-accent);}' +
  '.csp-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.csp-q{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:29px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.csp-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
  '.csp-tally{position:absolute;right:32px;top:24px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.csp-tally b{display:block;font-size:34px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.csp-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

  /* ---------- variant: panels ---------- */
  '.csp-panels{display:grid;grid-auto-columns:1fr;grid-auto-flow:column;' +
  'border:1px solid var(--csp-line);border-top:none;}' +
  '.csp-panel{border-right:1px solid var(--csp-line);display:flex;flex-direction:column;}' +
  '.csp-panel:last-child{border-right:none;}' +
  '.csp-cond{padding:14px 16px;background:var(--csp-ink);color:var(--csp-paper);' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;font-weight:800;' +
  'letter-spacing:.05em;text-align:center;min-height:58px;display:flex;align-items:center;' +
  'justify-content:center;line-height:1.5;}' +
  '.csp-panel.is-flagged .csp-cond{background:var(--csp-accent);}' +
  '.csp-fig{padding:16px;background:var(--csp-soft);display:flex;justify-content:center;' +
  'align-items:center;border-bottom:1px solid var(--csp-line);min-height:96px;}' +
  '.csp-fig svg{width:100%;max-width:172px;height:auto;}' +
  '.csp-fig .ax{stroke:var(--csp-muted);stroke-width:1;}' +
  '.csp-fig .ln{stroke:var(--csp-ink);stroke-width:2.2;fill:none;}' +
  '.csp-fig .ln2{stroke:var(--csp-accent);stroke-width:2.2;fill:none;}' +
  '.csp-fig .pt{fill:var(--csp-accent);}' +
  '.csp-fig .lbl{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'fill:var(--csp-muted);}' +
  '.csp-outcome{padding:15px 16px;text-align:center;font-family:\'Bricolage Grotesque\',sans-serif;' +
  'font-weight:600;font-size:16px;border-bottom:1px solid var(--csp-line);}' +
  '.csp-body{padding:15px 16px;flex:1;margin:0;}' +
  '.csp-body dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.12em;text-transform:uppercase;color:var(--csp-muted);margin-top:13px;}' +
  '.csp-body dt:first-child{margin-top:0;}' +
  '.csp-body dd{margin:5px 0 0;font-size:13px;}' +
  '.csp-body dd.is-mono{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;}' +
  '.csp-instance{border-top:1px dashed var(--csp-accent);padding:13px 16px;' +
  'background:var(--csp-soft);font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:11px;line-height:1.65;}' +
  '.csp-instance b{display:block;font-size:9px;letter-spacing:.13em;text-transform:uppercase;' +
  'color:var(--csp-accent);margin-bottom:6px;font-weight:800;}' +

  /* ---------- variant: rows ---------- */
  '.csp-rows{border:1px solid var(--csp-line);border-top:none;}' +
  '.csp-row{display:grid;grid-template-columns:210px 150px 1fr 200px;gap:20px;' +
  'padding:18px 26px;border-bottom:1px solid var(--csp-line);align-items:center;}' +
  '.csp-row:last-child{border-bottom:none;}' +
  '.csp-row.is-flagged{background:var(--csp-soft);}' +
  '.csp-row-cond{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'font-weight:800;color:var(--csp-accent);line-height:1.5;}' +
  '.csp-row-out{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:15px;}' +
  '.csp-row-cons{font-size:13px;color:var(--csp-muted);}' +
  '.csp-row-inst{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'line-height:1.6;padding-left:16px;border-left:2px solid var(--csp-line);}' +

  /* ---------- exhaustiveness ---------- */
  '.csp-exhaust{border:1px solid var(--csp-line);border-top:none;padding:16px 32px;' +
  'font-size:13.5px;}' +
  '.csp-exhaust-in{border-left:3px solid var(--csp-accent);background:var(--csp-soft);' +
  'padding:14px 17px;}' +
  '.csp-exhaust b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--csp-accent);display:block;' +
  'margin-bottom:7px;font-weight:800;}' +
  '.csp-exhaust p{margin:0 0 8px;}.csp-exhaust p:last-child{margin-bottom:0;}' +
  '.csp-exhaust.is-missing .csp-exhaust-in{border-left-style:dashed;}' +

  '.csp-empty{border:1px dashed var(--csp-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--csp-muted);}' +

  '@media (max-width:880px){' +
  '.csp-panels{grid-auto-flow:row;}' +
  '.csp-panel{border-right:none;border-bottom:1px solid var(--csp-line);}' +
  '.csp-panel:last-child{border-bottom:none;}' +
  '.csp-row{grid-template-columns:1fr;gap:10px;}' +
  '.csp-row-inst{padding-left:0;border-left:none;border-top:1px solid var(--csp-line);padding-top:10px;}' +
  '}' +
  '@media (max-width:640px){' +
  '.csp-mast{padding:22px 18px 20px;}.csp-mast::after{left:18px;right:18px;}' +
  '.csp-q{font-size:23px;}' +
  '.csp-tally{position:static;text-align:left;margin-top:14px;}' +
  '.csp-exhaust{padding:14px 18px;}.csp-row{padding:16px 18px;}' +
  '}';

  return css;
}

const CSP_CSS = buildCss();

/* ============================================================================
 * BUILT-IN FIGURES — referenced by name from the data
 * ==========================================================================*/
function figureFor(name) {
  if (name === 'parallel-lines') {
    return (
      <svg viewBox="0 0 170 120" xmlns="http://www.w3.org/2000/svg">
        <line className="ax" x1="14" y1="106" x2="158" y2="106" />
        <line className="ax" x1="20" y1="10" x2="20" y2="112" />
        <line className="ln" x1="26" y1="94" x2="150" y2="30" />
        <line className="ln2" x1="26" y1="70" x2="150" y2="6" />
        <text className="lbl" x="106" y="52">parallel</text>
      </svg>
    );
  }
  if (name === 'crossing-lines') {
    return (
      <svg viewBox="0 0 170 120" xmlns="http://www.w3.org/2000/svg">
        <line className="ax" x1="14" y1="106" x2="158" y2="106" />
        <line className="ax" x1="20" y1="10" x2="20" y2="112" />
        <line className="ln" x1="26" y1="94" x2="150" y2="24" />
        <line className="ln2" x1="26" y1="20" x2="150" y2="96" />
        <circle className="pt" cx="88" cy="59" r="5" />
        <text className="lbl" x="96" y="52">one point</text>
      </svg>
    );
  }
  if (name === 'coincident-lines') {
    return (
      <svg viewBox="0 0 170 120" xmlns="http://www.w3.org/2000/svg">
        <line className="ax" x1="14" y1="106" x2="158" y2="106" />
        <line className="ax" x1="20" y1="10" x2="20" y2="112" />
        <line className="ln" x1="26" y1="94" x2="150" y2="24" />
        <line className="ln2" x1="30" y1="91.7" x2="146" y2="26.3" strokeDasharray="6 4" />
        <text className="lbl" x="80" y="86">same line twice</text>
      </svg>
    );
  }
  if (name === 'independent-axes') {
    return (
      <svg viewBox="0 0 170 120" xmlns="http://www.w3.org/2000/svg">
        <line className="ax" x1="14" y1="60" x2="158" y2="60" />
        <line className="ax" x1="86" y1="8" x2="86" y2="112" />
        <line className="ln" x1="86" y1="60" x2="146" y2="60" strokeWidth="3" />
        <line className="ln2" x1="86" y1="60" x2="86" y2="18" strokeWidth="3" />
      </svg>
    );
  }
  if (name === 'collapsed-direction') {
    return (
      <svg viewBox="0 0 170 120" xmlns="http://www.w3.org/2000/svg">
        <line className="ax" x1="14" y1="60" x2="158" y2="60" />
        <line className="ax" x1="86" y1="8" x2="86" y2="112" />
        <line className="ln" x1="86" y1="60" x2="146" y2="60" strokeWidth="3" />
        <path className="ln2" d="M 96 44 Q 122 40 140 52" strokeDasharray="4 3" />
        <text className="lbl" x="106" y="82">one direction</text>
      </svg>
    );
  }
  if (name === 'rotation') {
    return (
      <svg viewBox="0 0 170 120" xmlns="http://www.w3.org/2000/svg">
        <line className="ax" x1="14" y1="60" x2="158" y2="60" />
        <line className="ax" x1="86" y1="8" x2="86" y2="112" />
        <path className="ln2" d="M 86 22 A 38 38 0 1 1 85.9 22" fill="none" />
        <path className="ln" d="M 118 34 L 126 30 L 122 40" fill="none" />
        <text className="lbl" x="96" y="102">rotation</text>
      </svg>
    );
  }
  return null;
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – { kicker, question, intro, exhaustiveness, cases: [...] }
 *   theme    – nine theme keys; default navy
 *   variant  – 'panels' | 'rows'
 *
 * case shape
 *   { condition, outcome, name, consequence, signal, geometry,
 *     figure?: 'parallel-lines' | ... , scene?: { matrices... },
 *     instance?: string | string[], flagged?: boolean }
 * ==========================================================================*/
export default function CaseSplitPanel(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : 'navy';
  const variant = props.variant || 'panels';

  const rootClass = 'csp-root csp-t-' + theme + ' csp-v-' + variant;

  if (!data || !data.cases || data.cases.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: CSP_CSS }} />
        <div className="csp-empty">CaseSplitPanel: no cases supplied</div>
      </div>
    );
  }

  const cases = data.cases.map(function (c, i) {
    const instance = c.instance
      ? (Array.isArray(c.instance) ? c.instance : [c.instance])
      : null;
    return {
      key: c.id || 'case-' + i,
      raw: c,
      instance: instance,
      flagged: !!c.flagged,
      meta: [
        c.name        ? { term: 'Name',      value: c.name,        mono: false } : null,
        c.signal      ? { term: 'Signal',    value: c.signal,      mono: true }  : null,
        c.consequence ? { term: 'Why',       value: c.consequence, mono: false } : null,
        c.geometry    ? { term: 'Geometry',  value: c.geometry,    mono: false } : null,
      ].filter(Boolean),
    };
  });

  const missingExhaustiveness = !data.exhaustiveness;

  const masthead = (
    <div className="csp-mast">
      {data.kicker ? <div className="csp-kicker">{data.kicker}</div> : null}
      {data.question ? <h3 className="csp-q">{data.question}</h3> : null}
      {data.intro ? <p className="csp-intro">{processContent(data.intro)}</p> : null}
      <div className="csp-tally">
        <b>{cases.length}</b>
        <span>{data.tallyLabel || 'cases'}</span>
      </div>
    </div>
  );

  function renderFigure(c) {
    if (c.raw.scene) {
      return <MatrixScene theme={theme} cellSize="xs" spec={c.raw.scene} />;
    }
    if (c.raw.figure) {
      return figureFor(c.raw.figure);
    }
    return null;
  }

  function renderPanels() {
    return (
      <div className="csp-panels">
        {cases.map(function (c) {
          const fig = renderFigure(c);
          return (
            <div key={c.key} className={'csp-panel' + (c.flagged ? ' is-flagged' : '')}>
              <div className="csp-cond">{processContent(c.raw.condition)}</div>
              {fig ? <div className="csp-fig">{fig}</div> : null}
              {c.raw.outcome ? (
                <div className="csp-outcome">{c.raw.outcome}</div>
              ) : null}
              {c.meta.length > 0 ? (
                <dl className="csp-body">
                  {c.meta.map(function (m, mi) {
                    return (
                      <React.Fragment key={mi}>
                        <dt>{m.term}</dt>
                        <dd className={m.mono ? 'is-mono' : ''}>{processContent(m.value)}</dd>
                      </React.Fragment>
                    );
                  })}
                </dl>
              ) : null}
              {c.instance ? (
                <div className="csp-instance">
                  <b>Instance</b>
                  {c.instance.map(function (line, li) {
                    return (
                      <React.Fragment key={li}>
                        {processContent(line)}
                        {li < c.instance.length - 1 ? <br /> : null}
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

  function renderRows() {
    return (
      <div className="csp-rows">
        {cases.map(function (c) {
          return (
            <div key={c.key} className={'csp-row' + (c.flagged ? ' is-flagged' : '')}>
              <div className="csp-row-cond">{processContent(c.raw.condition)}</div>
              <div className="csp-row-out">{c.raw.outcome}</div>
              <div className="csp-row-cons">
                {processContent(c.raw.consequence || c.raw.geometry || '')}
              </div>
              <div className="csp-row-inst">
                {c.instance
                  ? c.instance.map(function (line, li) {
                      return (
                        <React.Fragment key={li}>
                          {processContent(line)}
                          {li < c.instance.length - 1 ? <br /> : null}
                        </React.Fragment>
                      );
                    })
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: CSP_CSS }} />
      {masthead}
      {variant === 'rows' ? renderRows() : renderPanels()}
      <div className={'csp-exhaust' + (missingExhaustiveness ? ' is-missing' : '')}>
        <div className="csp-exhaust-in">
          <b>{data.exhaustivenessLabel || 'Why these and no others'}</b>
          {missingExhaustiveness
            ? 'Not stated. A case split claims the cases are exhaustive and mutually exclusive \u2014 that claim needs an argument, or the panel is a list rather than a partition.'
            : processContent(data.exhaustiveness)}
        </div>
      </div>
    </div>
  );
}

export { THEMES as CSP_THEMES };
