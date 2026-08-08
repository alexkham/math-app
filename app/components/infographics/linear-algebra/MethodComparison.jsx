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
      '.mcp-root.mcp-t-' + key + '{' +
      '--mcp-paper:' + t.paper + ';--mcp-ink:' + t.ink + ';--mcp-muted:' + t.muted + ';' +
      '--mcp-line:' + t.line + ';--mcp-accent:' + t.accent + ';--mcp-soft:' + t.soft + ';}';
  });

  css +=
  '.mcp-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--mcp-ink);background:var(--mcp-paper);}' +
  '.mcp-root *,.mcp-root *::before,.mcp-root *::after{box-sizing:border-box;}' +
  '.mcp-root a{color:var(--mcp-accent);text-underline-offset:2px;}' +

  '.mcp-mast{background:var(--mcp-ink);color:var(--mcp-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.mcp-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--mcp-accent);}' +
  '.mcp-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.mcp-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.mcp-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
  '.mcp-tally{position:absolute;right:32px;top:24px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.mcp-tally b{display:block;font-size:32px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.mcp-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

  '.mcp-rows{border:1px solid var(--mcp-line);border-top:none;padding:0 30px 22px;}' +
  '.mcp-rh{display:grid;grid-template-columns:150px 200px 1fr 1fr;gap:20px;padding:14px 0 9px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;letter-spacing:.13em;' +
  'text-transform:uppercase;color:var(--mcp-muted);border-bottom:2px solid var(--mcp-ink);}' +
  '.mcp-row{display:grid;grid-template-columns:150px 200px 1fr 1fr;gap:20px;padding:17px 0;' +
  'border-bottom:1px solid var(--mcp-line);align-items:start;}' +
  '.mcp-row:last-child{border-bottom:none;}' +
  '.mcp-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:15px;}' +
  '.mcp-sub{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'color:var(--mcp-muted);margin-top:4px;}' +

  '.mcp-ce{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:13px;font-weight:800;' +
  'margin-bottom:7px;}' +
  '.mcp-track{height:9px;background:var(--mcp-soft);border:1px solid var(--mcp-line);' +
  'position:relative;}' +
  '.mcp-fill{height:100%;background:var(--mcp-ink);}' +
  '.mcp-fill.is-hot{background:var(--mcp-accent);}' +
  '.mcp-scale{display:flex;justify-content:space-between;gap:8px;margin-top:5px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;letter-spacing:.06em;' +
  'color:var(--mcp-muted);}' +

  '.mcp-col{font-size:13px;}' +
  '.mcp-col b{display:block;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.11em;text-transform:uppercase;margin-bottom:5px;font-weight:800;}' +
  '.mcp-col.is-fail b{color:var(--mcp-accent);}' +
  '.mcp-col.is-pref b{color:var(--mcp-muted);}' +
  '.mcp-col.is-missing{color:var(--mcp-muted);font-style:italic;}' +

  '.mcp-flip{border:1px solid var(--mcp-line);border-top:none;padding:16px 32px;font-size:13.5px;}' +
  '.mcp-flip-in{border-left:3px solid var(--mcp-accent);background:var(--mcp-soft);' +
  'padding:15px 18px;}' +
  '.mcp-flip b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--mcp-accent);display:block;' +
  'margin-bottom:7px;font-weight:800;}' +
  '.mcp-flip.is-missing .mcp-flip-in{border-left-style:dashed;color:var(--mcp-muted);' +
  'font-style:italic;}' +

  '.mcp-empty{border:1px dashed var(--mcp-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--mcp-muted);}' +

  '@media (max-width:900px){' +
  '.mcp-rh{display:none;}' +
  '.mcp-row{grid-template-columns:1fr 1fr;}' +
  '}' +
  '@media (max-width:640px){' +
  '.mcp-mast{padding:22px 18px 20px;}.mcp-mast::after{left:18px;right:18px;}' +
  '.mcp-title{font-size:22px;}' +
  '.mcp-tally{position:static;text-align:left;margin-top:14px;}' +
  '.mcp-rows{padding:0 18px 20px;}' +
  '.mcp-row{grid-template-columns:1fr;gap:13px;}' +
  '.mcp-flip{padding:14px 18px;}' +
  '}';

  return css;
}

const MCP_CSS = buildCss();

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'cost'
 *
 * data shape
 *   {
 *     kicker, title, intro, flip, flipLabel,
 *     methods: [{
 *       name, subtitle,
 *       cost, exponent, prohibitive,
 *       scaleLeft, scaleRight,
 *       failsWhen, preferredWhen
 *     }]
 *   }
 *
 * Bar widths are computed by scaling each `exponent` against the largest in the
 * set — the data supplies the exponent, never the width. Omitting `failsWhen`
 * or `preferredWhen` renders a placeholder: a cost figure on its own does not
 * tell anyone which method to pick.
 * ==========================================================================*/
export default function MethodComparison(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'cost';

  const rootClass = 'mcp-root mcp-t-' + theme + ' mcp-v-' + variant;

  if (!data || !data.methods || data.methods.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: MCP_CSS }} />
        <div className="mcp-empty">MethodComparison: no methods supplied</div>
      </div>
    );
  }

  let maxExponent = 0;
  data.methods.forEach(function (m) {
    if ((m.exponent || 0) > maxExponent) maxExponent = m.exponent || 0;
  });

  const methods = data.methods.map(function (m, i) {
    const pct = maxExponent > 0
      ? Math.max(3, Math.round(((m.exponent || 0) / maxExponent) * 100))
      : 3;
    return {
      key: m.id || 'method-' + i,
      raw: m,
      pct: pct,
      missingFails: !m.failsWhen,
      missingPref: !m.preferredWhen,
    };
  });

  const missingFlip = !data.flip;

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: MCP_CSS }} />

      <div className="mcp-mast">
        {data.kicker ? <div className="mcp-kicker">{data.kicker}</div> : null}
        {data.title ? <h3 className="mcp-title">{data.title}</h3> : null}
        {data.intro ? <p className="mcp-intro">{processContent(data.intro)}</p> : null}
        <div className="mcp-tally">
          <b>{methods.length}</b>
          <span>{data.tallyLabel || 'methods'}</span>
        </div>
      </div>

      <div className="mcp-rows">
        <div className="mcp-rh">
          <div>Method</div>
          <div>Cost</div>
          <div>Fails when</div>
          <div>Preferred when</div>
        </div>

        {methods.map(function (m) {
          return (
            <div key={m.key} className="mcp-row">
              <div>
                <div className="mcp-nm">{m.raw.name}</div>
                {m.raw.subtitle ? <div className="mcp-sub">{m.raw.subtitle}</div> : null}
              </div>

              <div>
                <div className="mcp-ce">{m.raw.cost}</div>
                <div className="mcp-track">
                  <div
                    className={'mcp-fill' + (m.raw.prohibitive ? ' is-hot' : '')}
                    style={{ width: m.pct + '%' }}
                  />
                </div>
                <div className="mcp-scale">
                  <span>{m.raw.scaleLeft || ''}</span>
                  <span>{m.raw.scaleRight || ''}</span>
                </div>
              </div>

              <div className={'mcp-col is-fail' + (m.missingFails ? ' is-missing' : '')}>
                <b>Fails when</b>
                {m.missingFails
                  ? 'Not stated. A method with no named failure mode will be reached for on a case it cannot handle.'
                  : processContent(m.raw.failsWhen)}
              </div>

              <div className={'mcp-col is-pref' + (m.missingPref ? ' is-missing' : '')}>
                <b>Preferred when</b>
                {m.missingPref
                  ? 'Not stated. Without this the table ranks by cost, which is rarely the deciding factor.'
                  : processContent(m.raw.preferredWhen)}
              </div>
            </div>
          );
        })}
      </div>

      <div className={'mcp-flip' + (missingFlip ? ' is-missing' : '')}>
        <div className="mcp-flip-in">
          <b>{data.flipLabel || 'Where the choice actually flips'}</b>
          {missingFlip
            ? 'Not stated. Listing costs without saying at what size the preference changes leaves the reader with numbers and no decision.'
            : processContent(data.flip)}
        </div>
      </div>
    </div>
  );
}

export { THEMES as MCP_THEMES };
