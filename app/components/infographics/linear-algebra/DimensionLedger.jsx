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
      '.dlg-root.dlg-t-' + key + '{' +
      '--dlg-paper:' + t.paper + ';--dlg-ink:' + t.ink + ';--dlg-muted:' + t.muted + ';' +
      '--dlg-line:' + t.line + ';--dlg-accent:' + t.accent + ';--dlg-soft:' + t.soft + ';}';
  });

  css +=
  '.dlg-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--dlg-ink);background:var(--dlg-paper);}' +
  '.dlg-root *,.dlg-root *::before,.dlg-root *::after{box-sizing:border-box;}' +
  '.dlg-root a{color:var(--dlg-accent);text-underline-offset:2px;}' +

  '.dlg-mast{background:var(--dlg-ink);color:var(--dlg-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.dlg-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--dlg-accent);}' +
  '.dlg-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.dlg-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.dlg-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +

  '.dlg-body{border:1px solid var(--dlg-line);border-top:none;padding:24px 30px;}' +
  '.dlg-pair{display:grid;grid-template-columns:1fr 1fr;gap:28px;}' +
  '.dlg-stack{display:grid;gap:26px;}' +

  '.dlg-tag{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.14em;text-transform:uppercase;color:var(--dlg-muted);margin-bottom:12px;}' +
  '.dlg-bar{display:flex;height:54px;border:2px solid var(--dlg-ink);margin-bottom:9px;}' +
  '.dlg-bar.is-unbalanced{border-color:var(--dlg-accent);border-style:dashed;}' +
  '.dlg-seg{display:flex;flex-direction:column;align-items:center;justify-content:center;' +
  'border-right:2px solid var(--dlg-ink);min-width:0;}' +
  '.dlg-seg:last-child{border-right:none;}' +
  '.dlg-bar.is-unbalanced .dlg-seg{border-right-color:var(--dlg-accent);}' +
  '.dlg-seg.is-hot{background:var(--dlg-soft);}' +
  '.dlg-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:19px;font-weight:800;' +
  'line-height:1;}' +
  '.dlg-l{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;letter-spacing:.1em;' +
  'text-transform:uppercase;color:var(--dlg-muted);margin-top:4px;text-align:center;' +
  'padding:0 4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;}' +
  '.dlg-tot{display:flex;justify-content:space-between;gap:12px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;letter-spacing:.1em;' +
  'text-transform:uppercase;color:var(--dlg-muted);}' +
  '.dlg-tot .is-bad{color:var(--dlg-accent);font-weight:800;}' +

  '.dlg-ident{margin-top:20px;padding:14px 17px;background:var(--dlg-soft);' +
  'border-left:3px solid var(--dlg-accent);font-size:14px;}' +
  '.dlg-ident b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-weight:800;}' +
  '.dlg-ident.is-missing{border-left-style:dashed;color:var(--dlg-muted);font-style:italic;}' +

  '.dlg-empty{border:1px dashed var(--dlg-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--dlg-muted);}' +

  '@media (max-width:820px){.dlg-pair{grid-template-columns:1fr;}}' +
  '@media (max-width:640px){' +
  '.dlg-mast{padding:22px 18px 20px;}.dlg-mast::after{left:18px;right:18px;}' +
  '.dlg-title{font-size:22px;}.dlg-body{padding:20px 16px;}' +
  '}';

  return css;
}

const DLG_CSS = buildCss();

/* ============================================================================
 * HELPERS — the sum check happens here, never in the data
 * ==========================================================================*/
function analyseBar(bar, index) {
  const segments = bar.segments || [];
  let sum = 0;
  segments.forEach(function (s) { sum += (s.size || 0); });

  const total = typeof bar.total === 'number' ? bar.total : sum;
  const balanced = sum === total;

  return {
    key: bar.id || 'bar-' + index,
    label: bar.label,
    space: bar.space,
    segments: segments,
    sum: sum,
    total: total,
    balanced: balanced,
  };
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'bars' | 'pair'   ('pair' forces two columns)
 *
 * data shape
 *   {
 *     kicker, title, intro, identity,
 *     bars: [{
 *       label, space, total,
 *       segments: [{ label, size, hot }]
 *     }]
 *   }
 *
 * The component sums the segments and compares against `total`. A bar that
 * does not balance is drawn dashed in accent and the mismatch is named — the
 * data never says whether it balances.
 * ==========================================================================*/
export default function DimensionLedger(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'bars';

  const rootClass = 'dlg-root dlg-t-' + theme + ' dlg-v-' + variant;

  if (!data || !data.bars || data.bars.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: DLG_CSS }} />
        <div className="dlg-empty">DimensionLedger: no bars supplied</div>
      </div>
    );
  }

  const bars = data.bars.map(analyseBar);
  const sideBySide = variant === 'pair' || bars.length === 2;
  const missingIdentity = !data.identity;

  function renderBar(b) {
    return (
      <div key={b.key}>
        {b.label ? <div className="dlg-tag">{b.label}</div> : null}
        <div className={'dlg-bar' + (b.balanced ? '' : ' is-unbalanced')}>
          {b.segments.map(function (s, si) {
            return (
              <div
                key={si}
                className={'dlg-seg' + (s.hot ? ' is-hot' : '')}
                style={{ flex: s.size }}
              >
                <span className="dlg-n">{s.size}</span>
                <span className="dlg-l">{s.label}</span>
              </div>
            );
          })}
        </div>
        <div className="dlg-tot">
          <span>{b.space}</span>
          <span className={b.balanced ? '' : 'is-bad'}>
            {b.balanced
              ? 'total ' + b.sum
              : 'segments sum to ' + b.sum + ' \u2014 total is ' + b.total}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: DLG_CSS }} />

      <div className="dlg-mast">
        {data.kicker ? <div className="dlg-kicker">{data.kicker}</div> : null}
        {data.title ? <h3 className="dlg-title">{data.title}</h3> : null}
        {data.intro ? <p className="dlg-intro">{processContent(data.intro)}</p> : null}
      </div>

      <div className="dlg-body">
        <div className={sideBySide ? 'dlg-pair' : 'dlg-stack'}>
          {bars.map(renderBar)}
        </div>

        <div className={'dlg-ident' + (missingIdentity ? ' is-missing' : '')}>
          {missingIdentity
            ? 'No identity stated. A segmented bar without the equation it illustrates is a picture of an arithmetic fact with the arithmetic left out.'
            : processContent(data.identity)}
        </div>
      </div>
    </div>
  );
}

export { THEMES as DLG_THEMES };
