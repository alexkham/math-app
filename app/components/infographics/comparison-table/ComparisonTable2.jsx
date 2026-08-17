import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * ComparisonTable
 *
 * Two or three subjects held against each other, feature by feature. Every
 * cell is a plain statement — there is no verdict, no winner and no better or
 * worse. The reader draws the conclusion; the component only sets the
 * statements side by side so that drawing it is possible.
 *
 * This is the transpose of ObjectTypeProfile. There the objects are rows and
 * their attributes are columns, which suits eleven objects with four
 * attributes. Here the objects are columns and the features are rows, which
 * suits two objects with eight features — and it is what makes reading *across*
 * a single feature the natural motion.
 *
 * Three variants:
 *
 *   paired  (default) — one block per feature, subjects side by side inside it.
 *                       The only variant with room for a line about the
 *                       difference itself rather than about either subject.
 *   columns           — subjects head the columns, features label the rows.
 *                       Densest, and the form a reader expects from a
 *                       comparison. Scrolls horizontally past three subjects.
 *   stacked           — each subject in full, one after another. The right
 *                       choice when values are long enough to wrap badly.
 *
 * Everything is data. Subjects, feature groups, feature labels, per-cell
 * formatting and the notes all come from the object the page passes; the
 * component supplies no vocabulary of its own.
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * THEMES — real navy, not a near-black with a blue cast.
 * -------------------------------------------------------------------------*/
const THEMES = {
  navy: {
    paper: '#f5f8fc', ink: '#13315c', muted: '#4a6285',
    line: '#c3d0e4', accent: '#2f6fb5', soft: '#e3ecf7',
  },
};

const DEFAULT_THEME = 'navy';

/* A cell counts as missing when it is absent or a placeholder dash. */
const EMPTY_VALUES = ['', '-', '\u2014', '\u2013', 'n/a', 'N/A'];

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.cmp-root.cmp-t-' + key + '{' +
      '--cmp-paper:' + t.paper + ';--cmp-ink:' + t.ink + ';--cmp-muted:' + t.muted + ';' +
      '--cmp-line:' + t.line + ';--cmp-accent:' + t.accent + ';--cmp-soft:' + t.soft + ';}';
  });

  css +=
  /* ---------- root ---------- */
  '.cmp-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--cmp-ink);background:var(--cmp-paper);max-width:920px;margin:28px auto;}' +
  '.cmp-root *,.cmp-root *::before,.cmp-root *::after{box-sizing:border-box;}' +

  /* ---------- masthead ---------- */
  '.cmp-mast{background:var(--cmp-ink);color:var(--cmp-paper);padding:20px 24px 18px;' +
  'position:relative;}' +
  '.cmp-mast::after{content:\'\';position:absolute;left:24px;right:24px;bottom:0;height:3px;' +
  'background:var(--cmp-accent);}' +
  '.cmp-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.22em;text-transform:uppercase;opacity:.72;}' +
  '.cmp-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:22px;' +
  'letter-spacing:-.03em;margin:6px 0 0;line-height:1.06;}' +
  '.cmp-intro{font-size:12.5px;margin:8px 0 0;max-width:470px;opacity:.85;}' +
  '.cmp-tally{position:absolute;right:24px;top:18px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.cmp-tally b{display:block;font-size:26px;font-weight:800;line-height:1;' +
  'letter-spacing:-.04em;}' +
  '.cmp-tally span{font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.72;}' +
  '.cmp-tally.is-gap b{color:var(--cmp-accent);}' +

  /* ---------- anchor chip ---------- */
  '.cmp-go{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'font-weight:800;letter-spacing:.1em;color:var(--cmp-accent);' +
  'border:1.5px solid var(--cmp-accent);padding:2px 5px;text-decoration:none;' +
  'display:inline-flex;align-items:center;gap:4px;white-space:nowrap;' +
  'transition:background .14s,color .14s,border-color .14s;}' +
  '.cmp-go::after{content:\'\\2192\';font-size:9px;}' +
  '.cmp-go:hover{background:var(--cmp-ink);border-color:var(--cmp-ink);' +
  'color:var(--cmp-paper);}' +
  '.cmp-go.on-ink{color:var(--cmp-paper);border-color:rgba(255,255,255,.5);}' +
  '.cmp-go.on-ink:hover{background:var(--cmp-paper);border-color:var(--cmp-paper);' +
  'color:var(--cmp-ink);}' +

  /* ==========================================================
   * VARIANT: paired
   * ========================================================*/
  '.cmp-wrap{border:1px solid var(--cmp-line);border-top:none;}' +
  '.cmp-gband{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#fff;' +
  'background:var(--cmp-accent);padding:6px 20px;display:flex;align-items:center;gap:10px;}' +
  '.cmp-gband.is-alt{background:var(--cmp-ink);}' +
  '.cmp-gband span{margin-left:auto;opacity:.8;}' +

  '.cmp-feat{border-bottom:1px solid var(--cmp-line);}' +
  '.cmp-feat:last-child{border-bottom:none;}' +
  '.cmp-feat-h{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--cmp-muted);' +
  'background:var(--cmp-soft);padding:7px 20px;border-bottom:1px solid var(--cmp-line);}' +
  '.cmp-cells{display:grid;}' +
  '.cmp-cell{padding:13px 20px;border-right:1px solid var(--cmp-line);}' +
  '.cmp-cell:last-child{border-right:none;}' +
  '.cmp-who{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--cmp-accent);' +
  'margin-bottom:5px;}' +
  '.cmp-val{font-size:12.5px;}' +
  '.cmp-val.is-mono{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11.5px;}' +
  '.cmp-val.is-gap{color:var(--cmp-accent);font-style:italic;}' +
  '.cmp-note{padding:10px 20px 13px;font-size:11.5px;color:var(--cmp-muted);' +
  'border-top:1px dotted var(--cmp-line);}' +

  /* ==========================================================
   * VARIANT: columns
   * ========================================================*/
  '.cmp-scroll{border:1px solid var(--cmp-line);border-top:none;overflow-x:auto;}' +
  '.cmp-tbl{border-collapse:collapse;width:100%;font-size:12px;}' +
  '.cmp-tbl th.cmp-corner{background:var(--cmp-ink);}' +
  '.cmp-tbl th.cmp-subj{background:var(--cmp-ink);color:var(--cmp-paper);padding:12px 14px;' +
  'text-align:left;vertical-align:top;border-left:1px solid rgba(255,255,255,.18);' +
  'min-width:180px;}' +
  '.cmp-subj-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:15px;' +
  'letter-spacing:-.02em;display:block;}' +
  '.cmp-subj-sub{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.08em;opacity:.72;font-weight:500;display:block;margin-top:4px;}' +
  '.cmp-tbl td{padding:11px 14px;border-bottom:1px solid var(--cmp-line);vertical-align:top;' +
  'border-left:1px solid var(--cmp-line);}' +
  '.cmp-tbl td.cmp-featlabel{border-left:none;background:var(--cmp-soft);width:170px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;font-weight:800;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--cmp-muted);vertical-align:middle;}' +
  '.cmp-tbl tr:last-child td{border-bottom:none;}' +
  '.cmp-tbl tr:hover td:not(.cmp-featlabel){background:var(--cmp-soft);}' +
  '.cmp-tbl tr.cmp-band td{background:var(--cmp-accent);color:#fff;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;font-weight:800;' +
  'letter-spacing:.16em;text-transform:uppercase;padding:6px 14px;border-left:none;}' +
  '.cmp-tbl tr.cmp-band.is-alt td{background:var(--cmp-ink);}' +

  /* ==========================================================
   * VARIANT: stacked
   * ========================================================*/
  '.cmp-stack{border:1px solid var(--cmp-line);border-top:none;}' +
  '.cmp-block{border-bottom:1px solid var(--cmp-line);}' +
  '.cmp-block:last-child{border-bottom:none;}' +
  '.cmp-block-h{background:var(--cmp-ink);color:var(--cmp-paper);padding:11px 20px;' +
  'display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;}' +
  '.cmp-block-h.is-alt{background:var(--cmp-accent);}' +
  '.cmp-block-nm{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:15px;' +
  'letter-spacing:-.02em;}' +
  '.cmp-block-sub{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
  'opacity:.78;}' +
  '.cmp-block-rows{display:grid;grid-template-columns:170px 1fr;}' +
  '.cmp-k{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;font-weight:800;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--cmp-muted);padding:9px 20px;' +
  'background:var(--cmp-soft);border-bottom:1px solid var(--cmp-line);}' +
  '.cmp-v{padding:9px 20px;font-size:12px;border-bottom:1px solid var(--cmp-line);}' +
  '.cmp-block-rows > :nth-last-child(-n+2){border-bottom:none;}' +

  /* ---------- footnote ---------- */
  '.cmp-foot{border:1px solid var(--cmp-line);border-top:none;padding:13px 24px;' +
  'font-size:12.5px;color:var(--cmp-muted);}' +

  '.cmp-empty{border:1px dashed var(--cmp-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--cmp-muted);}' +

  /* ==========================================================
   * export state
   * ========================================================*/
  '.cmp-root[data-diagram-export] .cmp-go{display:none !important;}' +

  /* ---------- responsive ---------- */
  '@media (max-width:640px){' +
  '.cmp-root{margin:20px auto;}' +
  '.cmp-mast{padding:18px 16px 16px;}.cmp-mast::after{left:16px;right:16px;}' +
  '.cmp-title{font-size:19px;}' +
  '.cmp-tally{position:static;text-align:left;margin-top:12px;}' +
  /* the paired grid collapses to one column per row rather than side by side */
  '.cmp-cells{grid-template-columns:1fr !important;}' +
  '.cmp-cell{border-right:none;border-bottom:1px solid var(--cmp-line);}' +
  '.cmp-cell:last-child{border-bottom:none;}' +
  '.cmp-block-rows{grid-template-columns:1fr;}' +
  '.cmp-k{padding-bottom:2px;border-bottom:none;}' +
  '.cmp-foot{padding:12px 16px;}' +
  '}';

  return css;
}

const CMP_CSS = buildCss();

/* ============================================================================
 * HELPERS
 * ==========================================================================*/

function isMissing(value) {
  if (value === null || value === undefined) return true;
  return EMPTY_VALUES.indexOf(String(value).trim()) !== -1;
}

function anchorLabel(anchor, explicit) {
  if (explicit) return explicit;
  const raw = String(anchor).replace(/^#/, '');
  if (/^\d+$/.test(raw)) return '\u00A7 ' + raw;
  return raw.replace(/[-_]+/g, ' ');
}

function anchorChip(subject, onInk) {
  if (!subject.anchor) return null;
  return (
    <a
      className={'cmp-go' + (onInk ? ' on-ink' : '')}
      href={subject.anchor}
      style={onInk ? { marginLeft: 'auto' } : undefined}
    >
      {anchorLabel(subject.anchor, subject.anchorLabel)}
    </a>
  );
}

function cellNode(value, mono) {
  const gap = isMissing(value);
  return (
    <span
      className={
        'cmp-val' + (mono ? ' is-mono' : '') + (gap ? ' is-gap' : '')
      }
    >
      {gap ? 'not stated' : processContent(value)}
    </span>
  );
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data      – flat object
 *   theme     – 'navy'
 *   variant   – 'paired' (default) | 'columns' | 'stacked'
 *   maxWidth  – override the 920px default
 *
 * data shape
 *   {
 *     kicker, title, intro, footnote, tallyLabel,
 *     subjects: [{ name, sub, anchor, anchorLabel }],
 *     groups: [{
 *       heading,
 *       features: [{
 *         label,                  // the row label
 *         mono,                   // render the cells in mono
 *         values: [ … ],          // positional: index n belongs to subject n
 *         note,                   // a line about the difference itself;
 *                                 //   shown in the paired variant only
 *       }]
 *     }]
 *   }
 *
 * Features may also be supplied flat as `data.features`, in which case one
 * unnamed group is created.
 *
 * `values` is positional and must be as long as `subjects`. A short array or a
 * placeholder dash renders "not stated" in accent and is counted in the
 * masthead — a comparison with holes invites the reader to infer a value from
 * the neighbouring column, which is the inference it exists to prevent.
 * ==========================================================================*/
export default function ComparisonTable2(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant =
    props.variant === 'columns' || props.variant === 'stacked'
      ? props.variant
      : 'paired';
  const maxWidth = props.maxWidth;

  const rootClass = 'cmp-root cmp-t-' + theme + ' cmp-v-' + variant;
  const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

  const subjects = (data && data.subjects) || [];
  const hasGroups = data && data.groups && data.groups.length > 0;
  const hasFlat = data && data.features && data.features.length > 0;

  if (subjects.length === 0 || (!hasGroups && !hasFlat)) {
    return (
      <div className={rootClass} style={rootStyle}>
        <style dangerouslySetInnerHTML={{ __html: CMP_CSS }} />
        <div className="cmp-empty">
          ComparisonTable: needs subjects and at least one feature
        </div>
      </div>
    );
  }

  const rawGroups = hasGroups
    ? data.groups
    : [{ heading: null, features: data.features }];

  /* -- derive once: pad short rows, count the holes -- */
  let missing = 0;
  let featureCount = 0;

  const groups = rawGroups.map(function (g, gi) {
    const features = (g.features || []).map(function (f, fi) {
      featureCount += 1;
      const values = subjects.map(function (s, si) {
        const v = (f.values || [])[si];
        if (isMissing(v)) missing += 1;
        return v;
      });

      return {
        key: f.id || 'feat-' + gi + '-' + fi,
        label: f.label,
        mono: !!f.mono,
        note: f.note,
        values: values,
      };
    });

    return {
      key: g.id || 'grp-' + gi,
      heading: g.heading,
      alt: gi % 2 === 1,
      features: features,
    };
  });

  const masthead = (
    <div className="cmp-mast">
      {data.kicker ? (
        <div className="cmp-kicker">{processContent(data.kicker)}</div>
      ) : null}
      {data.title ? (
        <h3 className="cmp-title">{processContent(data.title)}</h3>
      ) : null}
      {data.intro ? (
        <p className="cmp-intro">{processContent(data.intro)}</p>
      ) : null}
      <div className={'cmp-tally' + (missing > 0 ? ' is-gap' : '')}>
        <b>{missing > 0 ? missing : subjects.length}</b>
        <span>{missing > 0 ? 'gaps' : data.tallyLabel || 'compared'}</span>
      </div>
    </div>
  );

  const footnote = data.footnote ? (
    <div className="cmp-foot">{processContent(data.footnote)}</div>
  ) : missing > 0 ? (
    <div className="cmp-foot">
      {missing + ' of ' + featureCount * subjects.length +
        ' cells are unfilled. In a comparison a hole is read as a similarity, ' +
        'so an unstated value is worse than an absent row.'}
    </div>
  ) : null;

  /* ---------------- paired ---------------- */

  function renderPaired() {
    return (
      <div className="cmp-wrap">
        {groups.map(function (g) {
          return (
            <React.Fragment key={g.key}>
              {g.heading ? (
                <div className={'cmp-gband' + (g.alt ? ' is-alt' : '')}>
                  {processContent(g.heading)}
                  <span>{g.features.length}</span>
                </div>
              ) : null}

              {g.features.map(function (f) {
                return (
                  <div key={f.key} className="cmp-feat">
                    <div className="cmp-feat-h">{processContent(f.label)}</div>

                    <div
                      className="cmp-cells"
                      style={{
                        gridTemplateColumns:
                          'repeat(' + subjects.length + ', 1fr)',
                      }}
                    >
                      {f.values.map(function (v, si) {
                        return (
                          <div key={si} className="cmp-cell">
                            <div className="cmp-who">
                              {processContent(subjects[si].name)}
                            </div>
                            {cellNode(v, f.mono)}
                          </div>
                        );
                      })}
                    </div>

                    {f.note ? (
                      <div className="cmp-note">{processContent(f.note)}</div>
                    ) : null}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  /* ---------------- columns ---------------- */

  function renderColumns() {
    return (
      <div className="cmp-scroll">
        <table className="cmp-tbl">
          <thead>
            <tr>
              <th className="cmp-corner" />
              {subjects.map(function (s, si) {
                return (
                  <th key={si} className="cmp-subj">
                    <span className="cmp-subj-nm">{processContent(s.name)}</span>
                    {s.sub ? (
                      <span className="cmp-subj-sub">{processContent(s.sub)}</span>
                    ) : null}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {groups.map(function (g) {
              return (
                <React.Fragment key={g.key}>
                  {g.heading ? (
                    <tr className={'cmp-band' + (g.alt ? ' is-alt' : '')}>
                      <td colSpan={subjects.length + 1}>
                        {processContent(g.heading)}
                      </td>
                    </tr>
                  ) : null}

                  {g.features.map(function (f) {
                    return (
                      <tr key={f.key}>
                        <td className="cmp-featlabel">{processContent(f.label)}</td>
                        {f.values.map(function (v, si) {
                          return <td key={si}>{cellNode(v, f.mono)}</td>;
                        })}
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  /* ---------------- stacked ---------------- */

  function renderStacked() {
    return (
      <div className="cmp-stack">
        {subjects.map(function (s, si) {
          return (
            <div key={si} className="cmp-block">
              <div className={'cmp-block-h' + (si % 2 === 1 ? ' is-alt' : '')}>
                <span className="cmp-block-nm">{processContent(s.name)}</span>
                {s.sub ? (
                  <span className="cmp-block-sub">{processContent(s.sub)}</span>
                ) : null}
                {anchorChip(s, true)}
              </div>

              <div className="cmp-block-rows">
                {groups.map(function (g) {
                  return g.features.map(function (f) {
                    return (
                      <React.Fragment key={f.key}>
                        <div className="cmp-k">{processContent(f.label)}</div>
                        <div className="cmp-v">{cellNode(f.values[si], f.mono)}</div>
                      </React.Fragment>
                    );
                  });
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  let body;
  if (variant === 'columns') body = renderColumns();
  else if (variant === 'stacked') body = renderStacked();
  else body = renderPaired();

  return (
    <div
      className={rootClass}
      style={rootStyle}
      data-missing-cells={missing || undefined}
    >
      <style dangerouslySetInnerHTML={{ __html: CMP_CSS }} />
      {masthead}
      {body}
      {footnote}
    </div>
  );
}

export { THEMES as CMP_THEMES };