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
      '.ids-root.ids-t-' + key + '{' +
      '--ids-paper:' + t.paper + ';--ids-ink:' + t.ink + ';--ids-muted:' + t.muted + ';' +
      '--ids-line:' + t.line + ';--ids-accent:' + t.accent + ';--ids-soft:' + t.soft + ';}';
  });

  css +=
  '.ids-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--ids-ink);background:var(--ids-paper);}' +
  '.ids-root *,.ids-root *::before,.ids-root *::after{box-sizing:border-box;}' +
  '.ids-root a{color:var(--ids-accent);text-underline-offset:2px;}' +

  '.ids-mast{background:var(--ids-ink);color:var(--ids-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.ids-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--ids-accent);}' +
  '.ids-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.ids-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.ids-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
  '.ids-tally{position:absolute;right:32px;top:24px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.ids-tally b{display:block;font-size:32px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.ids-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

  /* ---------- variant: columns ---------- */
  '.ids-cols{border:1px solid var(--ids-line);border-top:none;padding:22px 30px 26px;' +
  'columns:2;column-gap:34px;}' +
  '.ids-root.ids-v-single .ids-cols{columns:1;}' +
  '.ids-grp{break-inside:avoid;margin-bottom:24px;}' +
  '.ids-gh{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.15em;text-transform:uppercase;color:var(--ids-paper);background:var(--ids-ink);' +
  'padding:5px 11px;}' +
  '.ids-line{display:grid;grid-template-columns:1fr 122px;gap:14px;align-items:baseline;' +
  'padding:9px 11px;border-bottom:1px solid var(--ids-line);}' +
  '.ids-line:nth-child(even){background:var(--ids-soft);}' +
  '.ids-f{font-size:14px;}' +
  '.ids-c{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.03em;color:var(--ids-muted);text-align:right;line-height:1.35;}' +
  '.ids-c.is-strict{color:var(--ids-accent);font-weight:800;}' +
  '.ids-c.is-missing{color:var(--ids-accent);font-style:italic;}' +

  '.ids-note{border:1px solid var(--ids-line);border-top:none;padding:16px 32px;font-size:13.5px;}' +
  '.ids-note-in{border-left:3px solid var(--ids-accent);background:var(--ids-soft);' +
  'padding:14px 17px;}' +
  '.ids-note b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--ids-accent);display:block;' +
  'margin-bottom:7px;font-weight:800;}' +

  '.ids-empty{border:1px dashed var(--ids-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--ids-muted);}' +

  '@media (max-width:820px){.ids-cols{columns:1;}}' +
  '@media (max-width:640px){' +
  '.ids-mast{padding:22px 18px 20px;}.ids-mast::after{left:18px;right:18px;}' +
  '.ids-title{font-size:22px;}' +
  '.ids-tally{position:static;text-align:left;margin-top:14px;}' +
  '.ids-cols{padding:20px 16px;}' +
  '.ids-line{grid-template-columns:1fr;gap:5px;}' +
  '.ids-c{text-align:left;}' +
  '.ids-note{padding:14px 18px;}' +
  '}';

  return css;
}

const IDS_CSS = buildCss();

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'columns' | 'single'
 *
 * data shape
 *   {
 *     kicker, title, intro, note, noteLabel,
 *     groups: [{
 *       heading,
 *       identities: [{ formula, condition, strict }]
 *     }]
 *   }
 *
 * `strict: true` marks a condition that is easy to violate without noticing.
 * A line with no condition renders "unconditional?" in accent — an unqualified
 * identity on a reference sheet is a claim nobody checked.
 * ==========================================================================*/
export default function IdentitySheet(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'columns';

  const rootClass = 'ids-root ids-t-' + theme + ' ids-v-' + variant;

  if (!data || !data.groups || data.groups.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: IDS_CSS }} />
        <div className="ids-empty">IdentitySheet: no groups supplied</div>
      </div>
    );
  }

  let total = 0;
  let unconditioned = 0;
  data.groups.forEach(function (g) {
    (g.identities || []).forEach(function (x) {
      total += 1;
      if (!x.condition) unconditioned += 1;
    });
  });

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: IDS_CSS }} />

      <div className="ids-mast">
        {data.kicker ? <div className="ids-kicker">{data.kicker}</div> : null}
        {data.title ? <h3 className="ids-title">{data.title}</h3> : null}
        {data.intro ? <p className="ids-intro">{processContent(data.intro)}</p> : null}
        <div className="ids-tally">
          <b>{total}</b>
          <span>{data.tallyLabel || 'entries'}</span>
        </div>
      </div>

      <div className="ids-cols">
        {data.groups.map(function (g, gi) {
          return (
            <div key={g.id || 'grp-' + gi} className="ids-grp">
              <div className="ids-gh">{g.heading}</div>
              {(g.identities || []).map(function (x, xi) {
                const missing = !x.condition;
                return (
                  <div key={xi} className="ids-line">
                    <span className="ids-f">{processContent(x.formula)}</span>
                    <span
                      className={
                        'ids-c' +
                        (x.strict ? ' is-strict' : '') +
                        (missing ? ' is-missing' : '')
                      }
                    >
                      {missing ? 'unconditional?' : processContent(x.condition)}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {data.note || unconditioned > 0 ? (
        <div className="ids-note">
          <div className="ids-note-in">
            <b>{data.noteLabel || 'What the condition column is for'}</b>
            {data.note
              ? processContent(data.note)
              : unconditioned +
                ' of ' + total +
                ' lines carry no condition. On a lookup surface an unqualified identity is a claim nobody checked \u2014 either the hypothesis is genuinely empty and should say so, or it is missing.'}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { THEMES as IDS_THEMES };
