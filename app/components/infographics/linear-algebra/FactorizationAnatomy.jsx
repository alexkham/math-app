import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * THEMES — navy only. Add entries here; nothing downstream changes.
 * ==========================================================================*/
const THEMES = {
  navy: {
    paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
    line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
  },
};

const DEFAULT_THEME = 'navy';

/* Structural fills — the shading encodes where the nonzero entries live. */
const FILLS = ['upper', 'lower', 'diag', 'ortho', 'dense'];

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.fac-root.fac-t-' + key + '{' +
      '--fac-paper:' + t.paper + ';--fac-ink:' + t.ink + ';--fac-muted:' + t.muted + ';' +
      '--fac-line:' + t.line + ';--fac-accent:' + t.accent + ';--fac-soft:' + t.soft + ';}';
  });

  css +=
  '.fac-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--fac-ink);background:var(--fac-paper);}' +
  '.fac-root *,.fac-root *::before,.fac-root *::after{box-sizing:border-box;}' +
  '.fac-root a{color:var(--fac-accent);text-underline-offset:2px;}' +

  '.fac-mast{background:var(--fac-ink);color:var(--fac-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.fac-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--fac-accent);}' +
  '.fac-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.fac-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.fac-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
  '.fac-tally{position:absolute;right:32px;top:24px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.fac-tally b{display:block;font-size:32px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.fac-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +

  /* ---------- variant: anatomy ---------- */
  '.fac-stage{border:1px solid var(--fac-line);border-top:none;padding:26px 24px;}' +
  '.fac-eq{display:flex;align-items:flex-start;gap:12px;overflow-x:auto;padding-bottom:6px;}' +
  '.fac-slot{flex:0 0 auto;text-align:center;}' +
  '.fac-sym{flex:0 0 auto;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:30px;' +
  'font-weight:700;color:var(--fac-muted);padding:0 6px;margin-top:48px;}' +
  '.fac-block{border:2px solid var(--fac-ink);position:relative;overflow:hidden;display:flex;' +
  'align-items:center;justify-content:center;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:21px;font-weight:800;background:var(--fac-paper);}' +
  '.fac-slot.is-result .fac-block{background:var(--fac-ink);color:var(--fac-paper);}' +
  '.fac-fill{position:absolute;inset:0;}' +
  '.fac-fill.f-upper{background:linear-gradient(to bottom right,var(--fac-soft) 0 50%,' +
  'transparent 50% 100%);}' +
  '.fac-fill.f-lower{background:linear-gradient(to top left,var(--fac-soft) 0 50%,' +
  'transparent 50% 100%);}' +
  '.fac-fill.f-diag{background:linear-gradient(135deg,transparent 44%,var(--fac-soft) 44% 56%,' +
  'transparent 56%);}' +
  '.fac-fill.f-ortho{background:repeating-linear-gradient(0deg,var(--fac-soft) 0 3px,' +
  'transparent 3px 9px);}' +
  '.fac-fill.f-dense{background:repeating-linear-gradient(45deg,var(--fac-soft) 0 5px,' +
  'transparent 5px 10px);}' +
  '.fac-dim{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'color:var(--fac-muted);margin-top:7px;}' +
  '.fac-cap{margin-top:13px;max-width:190px;text-align:left;}' +
  '.fac-cap-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14px;' +
  'margin-bottom:5px;}' +
  '.fac-cap dl{margin:0;display:grid;grid-template-columns:auto 1fr;gap:4px 9px;}' +
  '.fac-cap dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'letter-spacing:.11em;text-transform:uppercase;color:var(--fac-muted);white-space:nowrap;' +
  'padding-top:2px;}' +
  '.fac-cap dd{margin:0;font-size:12px;line-height:1.35;}' +

  '.fac-cond{border:1px solid var(--fac-line);border-top:none;display:grid;' +
  'grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin:0;}' +
  '.fac-cf{padding:16px 19px;border-right:1px solid var(--fac-line);}' +
  '.fac-cf:last-child{border-right:none;}' +
  '.fac-cf dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--fac-accent);font-weight:800;' +
  'margin-bottom:7px;}' +
  '.fac-cf dd{margin:0;font-size:13px;}' +
  '.fac-cf.is-cost dd{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:14px;' +
  'font-weight:800;}' +
  '.fac-cf.is-gap{background:var(--fac-soft);}' +
  '.fac-cf.is-gap dd{color:var(--fac-accent);font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-weight:800;}' +

  /* ---------- variant: strip ---------- */
  '.fac-rows{border:1px solid var(--fac-line);border-top:none;padding:0 30px 22px;}' +
  '.fac-rh{display:grid;grid-template-columns:120px 1fr 160px 118px;gap:16px;padding:14px 0 8px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;letter-spacing:.13em;' +
  'text-transform:uppercase;color:var(--fac-muted);}' +
  '.fac-rh > :last-child{text-align:right;}' +
  '.fac-row{display:grid;grid-template-columns:120px 1fr 160px 118px;gap:16px;padding:14px 0;' +
  'border-bottom:1px solid var(--fac-line);align-items:center;}' +
  '.fac-row:last-child{border-bottom:none;}' +
  '.fac-rn{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:15px;}' +
  '.fac-re{font-size:16px;}' +
  '.fac-rw{font-size:12px;color:var(--fac-muted);line-height:1.4;}' +
  '.fac-rc{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;font-weight:800;' +
  'text-align:right;}' +

  '.fac-empty{border:1px dashed var(--fac-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--fac-muted);}' +

  '@media (max-width:900px){' +
  '.fac-rh{display:none;}' +
  '.fac-row{grid-template-columns:1fr;gap:9px;}' +
  '.fac-rc{text-align:left;}' +
  '}' +
  '@media (max-width:640px){' +
  '.fac-mast{padding:22px 18px 20px;}.fac-mast::after{left:18px;right:18px;}' +
  '.fac-title{font-size:22px;}' +
  '.fac-tally{position:static;text-align:left;margin-top:14px;}' +
  '.fac-stage{padding:20px 16px;}.fac-rows{padding:0 18px 20px;}' +
  '}';

  return css;
}

const FAC_CSS = buildCss();

/* ============================================================================
 * HELPERS
 * ==========================================================================*/
function normaliseFactor(f, index) {
  const props = [];
  if (f.requires)  props.push({ term: 'Requires',  value: f.requires });
  if (f.structure) props.push({ term: 'Structure', value: f.structure });
  if (f.property)  props.push({ term: 'Property',  value: f.property });
  if (f.contains)  props.push({ term: 'Contains',  value: f.contains });
  if (f.rank)      props.push({ term: 'Rank',      value: f.rank });
  if (f.note)      props.push({ term: 'Note',      value: f.note });

  return {
    key: f.id || 'factor-' + index,
    symbol: f.symbol,
    name: f.name,
    dim: f.dim,
    width: f.width || 100,
    height: f.height || 120,
    fill: FILLS.indexOf(f.fill) !== -1 ? f.fill : null,
    isResult: index === 0,
    props: props,
  };
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'anatomy' | 'strip'
 *
 * data shape — anatomy
 *   { kicker, title, intro,
 *     factors: [{ symbol, name, dim, width, height, fill,
 *                 requires, structure, property, contains, rank, note }],
 *     existsWhen, uniqueWhen, cost, preferredWhen }
 *
 * data shape — strip
 *   { kicker, title, intro,
 *     family: [{ name, form, existsWhen, cost }] }
 * ==========================================================================*/
export default function FactorizationAnatomy(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'anatomy';

  const rootClass = 'fac-root fac-t-' + theme + ' fac-v-' + variant;

  const hasAnatomy = !!(data && data.factors && data.factors.length > 0);
  const hasFamily = !!(data && data.family && data.family.length > 0);

  if (!hasAnatomy && !hasFamily) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: FAC_CSS }} />
        <div className="fac-empty">FactorizationAnatomy: no factors or family supplied</div>
      </div>
    );
  }

  const useStrip = variant === 'strip' || (!hasAnatomy && hasFamily);

  const masthead = (
    <div className="fac-mast">
      {data.kicker ? <div className="fac-kicker">{data.kicker}</div> : null}
      {data.title ? <h3 className="fac-title">{data.title}</h3> : null}
      {data.intro ? <p className="fac-intro">{processContent(data.intro)}</p> : null}
      {useStrip ? (
        <div className="fac-tally">
          <b>{data.family.length}</b>
          <span>{data.tallyLabel || 'members'}</span>
        </div>
      ) : null}
    </div>
  );

  /* ---------------- strip ---------------- */
  if (useStrip) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: FAC_CSS }} />
        {masthead}
        <div className="fac-rows">
          <div className="fac-rh">
            <div>Name</div><div>Form</div><div>Exists when</div><div>Cost</div>
          </div>
          {data.family.map(function (f, i) {
            return (
              <div key={f.id || 'fam-' + i} className="fac-row">
                <div className="fac-rn">{f.name}</div>
                <div className="fac-re">{processContent(f.form)}</div>
                <div className="fac-rw">{processContent(f.existsWhen)}</div>
                <div className="fac-rc">{f.cost}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ---------------- anatomy ---------------- */
  const factors = data.factors.map(normaliseFactor);

  const conditions = [
    { term: 'Exists when',    value: data.existsWhen,    cost: false },
    { term: 'Unique when',    value: data.uniqueWhen,    cost: false },
    { term: 'Cost',           value: data.cost,          cost: true },
    { term: 'Preferred when', value: data.preferredWhen, cost: false },
  ].map(function (c) {
    return { term: c.term, value: c.value, cost: c.cost, gap: !c.value };
  });

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: FAC_CSS }} />
      {masthead}

      <div className="fac-stage">
        <div className="fac-eq">
          {factors.map(function (f, i) {
            return (
              <React.Fragment key={f.key}>
                {i > 0 ? (
                  <div className="fac-sym">{i === 1 ? '=' : '\u00B7'}</div>
                ) : null}
                <div className={'fac-slot' + (f.isResult ? ' is-result' : '')}>
                  <div
                    className="fac-block"
                    style={{ width: f.width + 'px', height: f.height + 'px' }}
                  >
                    {f.fill ? <span className={'fac-fill f-' + f.fill} /> : null}
                    {f.symbol}
                  </div>
                  {f.dim ? <div className="fac-dim">{f.dim}</div> : null}
                  <div className="fac-cap">
                    <div className="fac-cap-nm">{f.name}</div>
                    {f.props.length > 0 ? (
                      <dl>
                        {f.props.map(function (p, pi) {
                          return (
                            <React.Fragment key={pi}>
                              <dt>{p.term}</dt>
                              <dd>{processContent(p.value)}</dd>
                            </React.Fragment>
                          );
                        })}
                      </dl>
                    ) : null}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <dl className="fac-cond">
        {conditions.map(function (c, i) {
          return (
            <div
              key={i}
              className={'fac-cf' + (c.cost ? ' is-cost' : '') + (c.gap ? ' is-gap' : '')}
            >
              <dt>{c.term}</dt>
              <dd>{c.gap ? '\u2014 not stated' : processContent(c.value)}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export { THEMES as FAC_THEMES };
