import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * THEMES — navy only.
 * ==========================================================================*/
const THEMES = {
  navy: {
    paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
    line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
  },
};

const DEFAULT_THEME = 'navy';

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.asl-root.asl-t-' + key + '{' +
      '--asl-paper:' + t.paper + ';--asl-ink:' + t.ink + ';--asl-muted:' + t.muted + ';' +
      '--asl-line:' + t.line + ';--asl-accent:' + t.accent + ';--asl-soft:' + t.soft + ';}';
  });

  css +=
  '.asl-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--asl-ink);background:var(--asl-paper);}' +
  '.asl-root *,.asl-root *::before,.asl-root *::after{box-sizing:border-box;}' +
  '.asl-root a{color:var(--asl-accent);text-underline-offset:2px;}' +

  '.asl-mast{background:var(--asl-ink);color:var(--asl-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.asl-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--asl-accent);}' +
  '.asl-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.asl-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.asl-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
  '.asl-tally{position:absolute;right:32px;top:24px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.asl-tally b{display:block;font-size:32px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.asl-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

  /* ---------- io bar ---------- */
  '.asl-io{border:1px solid var(--asl-line);border-top:none;padding:20px 30px;display:grid;' +
  'grid-template-columns:1fr auto 1fr;gap:16px;align-items:center;}' +
  '.asl-iob{border:1px solid var(--asl-line);padding:13px 16px;margin:0;}' +
  '.asl-iob dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--asl-muted);margin-bottom:5px;}' +
  '.asl-iob dd{margin:0;font-size:13px;}' +
  '.asl-iom{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:22px;' +
  'color:var(--asl-muted);}' +

  /* ---------- ladder ---------- */
  '.asl-rungs{border:1px solid var(--asl-line);border-top:none;padding:0 30px 20px;}' +
  '.asl-rh{display:grid;grid-template-columns:34px 1fr 1fr 190px;gap:20px;padding:14px 0 9px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;letter-spacing:.13em;' +
  'text-transform:uppercase;color:var(--asl-muted);border-bottom:2px solid var(--asl-ink);}' +
  '.asl-rung{display:grid;grid-template-columns:34px 1fr 1fr 190px;gap:20px;padding:17px 0;' +
  'border-bottom:1px solid var(--asl-line);align-items:start;}' +
  '.asl-rung:last-child{border-bottom:none;}' +
  '.asl-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:16px;font-weight:800;' +
  'color:var(--asl-paper);background:var(--asl-ink);width:30px;height:30px;display:flex;' +
  'align-items:center;justify-content:center;}' +
  '.asl-rung.is-final .asl-n{background:var(--asl-accent);}' +
  '.asl-op{font-size:14px;}' +
  '.asl-opf{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:13px;margin-top:7px;' +
  'padding:8px 11px;background:var(--asl-soft);display:inline-block;}' +
  '.asl-why{font-size:13px;color:var(--asl-muted);}' +
  '.asl-why b{color:var(--asl-ink);font-weight:600;}' +
  '.asl-why.is-missing{font-style:italic;}' +
  '.asl-state{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;' +
  'padding:10px 13px;border:1px solid var(--asl-line);background:var(--asl-paper);}' +
  '.asl-warn{grid-column:2 / -1;margin-top:12px;padding:11px 14px;' +
  'border-left:3px solid var(--asl-accent);background:var(--asl-soft);font-size:12.5px;}' +
  '.asl-warn b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--asl-accent);display:block;' +
  'margin-bottom:5px;font-weight:800;}' +

  /* ---------- footer ---------- */
  '.asl-foot{border:1px solid var(--asl-line);border-top:none;display:grid;' +
  'grid-template-columns:repeat(auto-fit,minmax(210px,1fr));margin:0;}' +
  '.asl-fc{padding:15px 18px;border-right:1px solid var(--asl-line);}' +
  '.asl-fc:last-child{border-right:none;}' +
  '.asl-fc dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--asl-accent);font-weight:800;' +
  'margin-bottom:6px;}' +
  '.asl-fc dd{margin:0;font-size:13px;}' +
  '.asl-fc.is-cost dd{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:15px;' +
  'font-weight:800;}' +

  '.asl-empty{border:1px dashed var(--asl-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--asl-muted);}' +

  '@media (max-width:900px){' +
  '.asl-rh{display:none;}' +
  '.asl-rung{grid-template-columns:34px 1fr;}' +
  '.asl-rung > *{grid-column:2;}' +
  '.asl-rung > .asl-n{grid-column:1;grid-row:1;}' +
  '.asl-io{grid-template-columns:1fr;}' +
  '.asl-iom{display:none;}' +
  '}' +
  '@media (max-width:640px){' +
  '.asl-mast{padding:22px 18px 20px;}.asl-mast::after{left:18px;right:18px;}' +
  '.asl-title{font-size:22px;}' +
  '.asl-tally{position:static;text-align:left;margin-top:14px;}' +
  '.asl-io{padding:16px 18px;}.asl-rungs{padding:0 18px 18px;}' +
  '}';

  return css;
}

const ASL_CSS = buildCss();

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'ladder'
 *
 * data shape
 *   {
 *     kicker, title, intro, input, output,
 *     steps: [{ operation, formula, why, state, warning, warningLabel, final }],
 *     footer: [{ label, value, cost }]
 *   }
 *
 * A step with no `why` renders an italic placeholder — the justification column
 * is the reason this type exists rather than a numbered list.
 * ==========================================================================*/
export default function AlgorithmStepLadder(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'ladder';

  const rootClass = 'asl-root asl-t-' + theme + ' asl-v-' + variant;

  if (!data || !data.steps || data.steps.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: ASL_CSS }} />
        <div className="asl-empty">AlgorithmStepLadder: no steps supplied</div>
      </div>
    );
  }

  const lastIndex = data.steps.length - 1;

  const steps = data.steps.map(function (s, i) {
    return {
      key: s.id || 'step-' + i,
      raw: s,
      n: i + 1,
      isFinal: s.final != null ? !!s.final : i === lastIndex,
      missingWhy: !s.why,
    };
  });

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: ASL_CSS }} />

      <div className="asl-mast">
        {data.kicker ? <div className="asl-kicker">{data.kicker}</div> : null}
        {data.title ? <h3 className="asl-title">{data.title}</h3> : null}
        {data.intro ? <p className="asl-intro">{processContent(data.intro)}</p> : null}
        <div className="asl-tally">
          <b>{steps.length}</b>
          <span>{data.tallyLabel || 'steps'}</span>
        </div>
      </div>

      {data.input || data.output ? (
        <div className="asl-io">
          <dl className="asl-iob">
            <dt>Input</dt>
            <dd>{data.input ? processContent(data.input) : '\u2014'}</dd>
          </dl>
          <div className="asl-iom">&rarr;</div>
          <dl className="asl-iob">
            <dt>Output</dt>
            <dd>{data.output ? processContent(data.output) : '\u2014'}</dd>
          </dl>
        </div>
      ) : null}

      <div className="asl-rungs">
        <div className="asl-rh">
          <div />
          <div>Operation</div>
          <div>Why it works</div>
          <div>State after</div>
        </div>

        {steps.map(function (s) {
          return (
            <div key={s.key} className={'asl-rung' + (s.isFinal ? ' is-final' : '')}>
              <div className="asl-n">{s.n}</div>

              <div className="asl-op">
                {processContent(s.raw.operation)}
                {s.raw.formula ? (
                  <div className="asl-opf">{s.raw.formula}</div>
                ) : null}
              </div>

              <div className={'asl-why' + (s.missingWhy ? ' is-missing' : '')}>
                {s.missingWhy
                  ? 'Justification not stated \u2014 this rung is an instruction, not an explanation.'
                  : processContent(s.raw.why)}
              </div>

              <div className="asl-state">
                {s.raw.state ? processContent(s.raw.state) : '\u2014'}
              </div>

              {s.raw.warning ? (
                <div className="asl-warn">
                  <b>{s.raw.warningLabel || 'Watch'}</b>
                  {processContent(s.raw.warning)}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {data.footer && data.footer.length > 0 ? (
        <dl className="asl-foot">
          {data.footer.map(function (f, i) {
            return (
              <div key={i} className={'asl-fc' + (f.cost ? ' is-cost' : '')}>
                <dt>{f.label}</dt>
                <dd>{processContent(f.value)}</dd>
              </div>
            );
          })}
        </dl>
      ) : null}
    </div>
  );
}

export { THEMES as ASL_THEMES };
