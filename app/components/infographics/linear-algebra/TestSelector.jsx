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
      '.tsl-root.tsl-t-' + key + '{' +
      '--tsl-paper:' + t.paper + ';--tsl-ink:' + t.ink + ';--tsl-muted:' + t.muted + ';' +
      '--tsl-line:' + t.line + ';--tsl-accent:' + t.accent + ';--tsl-soft:' + t.soft + ';}';
  });

  css +=
  '.tsl-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--tsl-ink);background:var(--tsl-paper);}' +
  '.tsl-root *,.tsl-root *::before,.tsl-root *::after{box-sizing:border-box;}' +
  '.tsl-root a{color:var(--tsl-accent);text-underline-offset:2px;}' +

  '.tsl-mast{background:var(--tsl-ink);color:var(--tsl-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.tsl-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--tsl-accent);}' +
  '.tsl-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.tsl-q{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.tsl-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +

  /* ---------- shortcut band ---------- */
  '.tsl-short{border:1px solid var(--tsl-accent);border-top:none;}' +
  '.tsl-short-t{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.14em;text-transform:uppercase;background:var(--tsl-accent);' +
  'color:var(--tsl-paper);padding:6px 13px;display:block;}' +
  '.tsl-short-l{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));}' +
  '.tsl-sc{padding:14px 16px;border-right:1px solid var(--tsl-line);' +
  'border-top:1px solid var(--tsl-line);}' +
  '.tsl-sc:last-child{border-right:none;}' +
  '.tsl-if{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;font-weight:800;' +
  'margin-bottom:6px;}' +
  '.tsl-then{font-size:12px;color:var(--tsl-muted);line-height:1.4;}' +
  '.tsl-then b{color:var(--tsl-ink);font-weight:600;}' +

  /* ---------- tree ---------- */
  '.tsl-tree{border:1px solid var(--tsl-line);border-top:none;padding:24px 30px;}' +
  '.tsl-gate{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--tsl-muted);margin-bottom:4px;}' +
  '.tsl-node{position:relative;padding-left:30px;}' +
  '.tsl-node::before{content:\'\';position:absolute;left:0;top:0;bottom:0;width:2px;' +
  'background:var(--tsl-line);}' +
  '.tsl-node.is-last::before{bottom:auto;height:26px;}' +
  '.tsl-branch{position:relative;padding-bottom:6px;}' +
  '.tsl-branch::before{content:\'\';position:absolute;left:-30px;top:24px;width:22px;height:2px;' +
  'background:var(--tsl-line);}' +
  '.tsl-cond{display:inline-block;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:11px;font-weight:800;letter-spacing:.05em;padding:5px 11px;' +
  'border:1px solid var(--tsl-ink);background:var(--tsl-paper);margin:13px 0 10px;}' +

  /* ---------- leaf ---------- */
  '.tsl-leaf{border:1px solid var(--tsl-line);border-left:4px solid var(--tsl-accent);' +
  'margin-bottom:5px;}' +
  '.tsl-lh{display:flex;align-items:baseline;gap:11px;flex-wrap:wrap;padding:13px 17px 10px;' +
  'border-bottom:1px solid var(--tsl-line);}' +
  '.tsl-ln{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:15px;}' +
  '.tsl-cost{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;font-weight:800;' +
  'letter-spacing:.08em;background:var(--tsl-soft);padding:3px 8px;' +
  'border:1px solid var(--tsl-line);}' +
  '.tsl-lb{padding:13px 17px;display:grid;grid-template-columns:auto 1fr;gap:8px 14px;' +
  'align-items:baseline;margin:0;}' +
  '.tsl-lb dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.12em;text-transform:uppercase;color:var(--tsl-muted);white-space:nowrap;}' +
  '.tsl-lb dd{margin:0;font-size:13px;}' +
  '.tsl-vd{border-top:1px solid var(--tsl-line);padding:12px 17px;background:var(--tsl-soft);' +
  'font-size:13px;}' +
  '.tsl-vd b{display:block;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.12em;text-transform:uppercase;color:var(--tsl-accent);margin-bottom:6px;' +
  'font-weight:800;}' +
  '.tsl-lim{border-top:1px dashed var(--tsl-accent);padding:11px 17px;font-size:12px;' +
  'color:var(--tsl-muted);}' +
  '.tsl-lim b{color:var(--tsl-accent);font-weight:600;}' +
  '.tsl-lim.is-missing{font-style:italic;}' +

  '.tsl-empty{border:1px dashed var(--tsl-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--tsl-muted);}' +

  '@media (max-width:640px){' +
  '.tsl-mast{padding:22px 18px 20px;}.tsl-mast::after{left:18px;right:18px;}' +
  '.tsl-q{font-size:22px;}' +
  '.tsl-tree{padding:20px 16px;}' +
  '.tsl-node{padding-left:18px;}' +
  '.tsl-branch::before{left:-18px;width:14px;}' +
  '}';

  return css;
}

const TSL_CSS = buildCss();

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'tree'
 *
 * data shape
 *   {
 *     kicker, question, intro,
 *     shortcutsLabel, gateLabel,
 *     shortcuts: [{ when, then }],
 *     branches: [{
 *       condition,
 *       children: [ … same shape, recursive … ],
 *       test: { name, cost, doThis, why, verdict, limit }
 *     }]
 *   }
 *
 * Depth is whatever the data supplies — branches nest recursively.
 * ==========================================================================*/
export default function TestSelector(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'tree';

  const rootClass = 'tsl-root tsl-t-' + theme + ' tsl-v-' + variant;

  if (!data || !data.branches || data.branches.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: TSL_CSS }} />
        <div className="tsl-empty">TestSelector: no branches supplied</div>
      </div>
    );
  }

  function renderLeaf(test, key) {
    const rows = [];
    if (test.doThis) rows.push({ term: 'Do', value: test.doThis });
    if (test.why) rows.push({ term: 'Why it works', value: test.why });
    if (test.needs) rows.push({ term: 'Needs', value: test.needs });

    return (
      <div className="tsl-leaf" key={key}>
        <div className="tsl-lh">
          <span className="tsl-ln">{test.name}</span>
          {test.cost ? <span className="tsl-cost">{test.cost}</span> : null}
        </div>

        {rows.length > 0 ? (
          <dl className="tsl-lb">
            {rows.map(function (r, i) {
              return (
                <React.Fragment key={i}>
                  <dt>{r.term}</dt>
                  <dd>{processContent(r.value)}</dd>
                </React.Fragment>
              );
            })}
          </dl>
        ) : null}

        {test.verdict ? (
          <div className="tsl-vd">
            <b>Reading the result</b>
            {processContent(test.verdict)}
          </div>
        ) : null}

        <div className={'tsl-lim' + (test.limit ? '' : ' is-missing')}>
          <b>Limit.</b>{' '}
          {test.limit
            ? processContent(test.limit)
            : 'Not stated. A test without its applicability limit will be reached for on a case it cannot handle.'}
        </div>
      </div>
    );
  }

  function renderBranch(branch, index, isLast, depth) {
    const key = branch.id || 'br-' + depth + '-' + index;
    const hasChildren = branch.children && branch.children.length > 0;

    return (
      <div className={'tsl-branch' + (isLast ? ' is-last' : '')} key={key}>
        <div className="tsl-cond">{processContent(branch.condition)}</div>
        {hasChildren ? (
          <div className={'tsl-node' + (isLast ? ' is-last' : '')}>
            {branch.children.map(function (c, i) {
              return renderBranch(c, i, i === branch.children.length - 1, depth + 1);
            })}
          </div>
        ) : branch.test ? (
          renderLeaf(branch.test, key + '-leaf')
        ) : null}
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: TSL_CSS }} />

      <div className="tsl-mast">
        {data.kicker ? <div className="tsl-kicker">{data.kicker}</div> : null}
        {data.question ? <h3 className="tsl-q">{data.question}</h3> : null}
        {data.intro ? <p className="tsl-intro">{processContent(data.intro)}</p> : null}
      </div>

      {data.shortcuts && data.shortcuts.length > 0 ? (
        <div className="tsl-short">
          <span className="tsl-short-t">
            {data.shortcutsLabel || 'Settle by inspection first \u2014 no computation'}
          </span>
          <div className="tsl-short-l">
            {data.shortcuts.map(function (s, i) {
              return (
                <div className="tsl-sc" key={i}>
                  <div className="tsl-if">{processContent(s.when)}</div>
                  <div className="tsl-then">{processContent(s.then)}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="tsl-tree">
        <div className="tsl-gate">{data.gateLabel || 'Otherwise, branch on'}</div>
        <div className="tsl-node">
          {data.branches.map(function (b, i) {
            return renderBranch(b, i, i === data.branches.length - 1, 0);
          })}
        </div>
      </div>
    </div>
  );
}

export { THEMES as TSL_THEMES };
