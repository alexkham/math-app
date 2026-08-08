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

/* Which MatrixScene scene backs each operation. */
const OP_SCENE = {
  add: 'addition',
  subtract: 'subtraction',
  multiply: 'multiplication',
  scalar: 'scalarMultiplication',
  transpose: 'transpose',
  inverse: 'inversePair',
};

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.mop-root.mop-t-' + key + '{' +
      '--mop-paper:' + t.paper + ';--mop-ink:' + t.ink + ';--mop-muted:' + t.muted + ';' +
      '--mop-line:' + t.line + ';--mop-accent:' + t.accent + ';--mop-soft:' + t.soft + ';}';
  });

  css +=
  '.mop-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--mop-ink);background:var(--mop-paper);}' +
  '.mop-root *,.mop-root *::before,.mop-root *::after{box-sizing:border-box;}' +
  '.mop-root a{color:var(--mop-accent);text-underline-offset:2px;}' +

  '.mop-mast{background:var(--mop-ink);color:var(--mop-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.mop-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--mop-accent);}' +
  '.mop-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.mop-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.mop-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +

  '.mop-stage{border:1px solid var(--mop-line);border-top:none;padding:24px 26px;}' +

  /* ---------- conformability rail ---------- */
  '.mop-rail{border:1px solid var(--mop-line);border-top:none;display:grid;' +
  'grid-template-columns:repeat(auto-fit,minmax(180px,1fr));}' +
  '.mop-cf{padding:16px 20px;border-right:1px solid var(--mop-line);}' +
  '.mop-cf:last-child{border-right:none;}' +
  '.mop-cf dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'letter-spacing:.18em;text-transform:uppercase;color:var(--mop-muted);margin-bottom:6px;}' +
  '.mop-cf dd{margin:0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:15px;' +
  'font-weight:800;}' +
  '.mop-cf dd small{display:block;font-family:\'Inter\',sans-serif;font-size:11px;font-weight:400;' +
  'color:var(--mop-muted);margin-top:6px;}' +
  '.mop-cf.is-hot dd{color:var(--mop-accent);}' +
  '.mop-cf.is-fail{background:var(--mop-soft);}' +
  '.mop-cf.is-fail dd{color:var(--mop-accent);}' +

  /* ---------- verdict banner ---------- */
  '.mop-verdict{border:1px solid var(--mop-line);border-top:none;padding:15px 32px;' +
  'display:flex;align-items:center;gap:14px;flex-wrap:wrap;}' +
  '.mop-badge{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.15em;text-transform:uppercase;padding:5px 10px;}' +
  '.mop-badge.is-ok{background:var(--mop-ink);color:var(--mop-paper);}' +
  '.mop-badge.is-fail{background:var(--mop-accent);color:var(--mop-paper);}' +
  '.mop-verdict-text{font-size:13px;color:var(--mop-muted);}' +

  '.mop-note{border:1px solid var(--mop-line);border-top:none;padding:16px 32px;font-size:13.5px;}' +
  '.mop-note-in{border-left:3px solid var(--mop-accent);background:var(--mop-soft);' +
  'padding:14px 17px;}' +
  '.mop-note b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--mop-accent);display:block;' +
  'margin-bottom:7px;font-weight:800;}' +
  '.mop-note p{margin:0 0 8px;}.mop-note p:last-child{margin-bottom:0;}' +

  /* ---------- variant: compact ---------- */
  '.mop-root.mop-v-compact .mop-mast{padding:16px 22px 14px;}' +
  '.mop-root.mop-v-compact .mop-mast::after{left:22px;right:22px;}' +
  '.mop-root.mop-v-compact .mop-title{font-size:19px;}' +
  '.mop-root.mop-v-compact .mop-stage{padding:16px 18px;}' +
  '.mop-root.mop-v-compact .mop-cf{padding:12px 16px;}' +
  '.mop-root.mop-v-compact .mop-cf dd{font-size:13px;}' +

  '.mop-empty{border:1px dashed var(--mop-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--mop-muted);}' +

  '@media (max-width:640px){' +
  '.mop-mast{padding:22px 18px 20px;}.mop-mast::after{left:18px;right:18px;}' +
  '.mop-title{font-size:22px;}' +
  '.mop-stage{padding:18px 16px;}' +
  '.mop-verdict,.mop-note{padding:14px 18px;}' +
  '}';

  return css;
}

const MOP_CSS = buildCss();

/* ============================================================================
 * HELPERS — conformability is computed, never supplied
 * ==========================================================================*/
function dims(m) {
  if (!m || !m.length) return null;
  return { rows: m.length, cols: m[0].length };
}

function fmt(d) {
  return d ? d.rows + '\u00D7' + d.cols : '\u2014';
}

function analyse(operation, A, B) {
  const dA = dims(A);
  const dB = dims(B);

  if (operation === 'multiply') {
    const ok = !!(dA && dB && dA.cols === dB.rows);
    return {
      ok: ok,
      cells: [
        { label: 'Outer dimensions', value: dA && dB ? dA.rows + '\u00D7' + dB.cols : '\u2014',
          note: 'survive into the result' },
        { label: 'Inner dimensions',
          value: dA && dB ? dA.cols + (ok ? ' = ' : ' \u2260 ') + dB.rows : '\u2014',
          note: ok ? 'match, then disappear' : 'do not match \u2014 product undefined',
          hot: true, fail: !ok },
        { label: 'Reverse product',
          value: dA && dB && dB.cols === dA.rows ? dB.rows + '\u00D7' + dA.cols : 'undefined',
          note: 'BA is a different size, or not defined at all', hot: true },
      ],
      verdict: ok
        ? 'Conformable \u2014 the product is defined.'
        : 'Not conformable \u2014 columns of A must equal rows of B.',
    };
  }

  if (operation === 'add' || operation === 'subtract') {
    const ok = !!(dA && dB && dA.rows === dB.rows && dA.cols === dB.cols);
    return {
      ok: ok,
      cells: [
        { label: 'Shape of A', value: fmt(dA) },
        { label: 'Shape of B', value: fmt(dB), fail: !ok },
        { label: 'Requirement', value: ok ? 'identical' : 'mismatch', hot: true, fail: !ok,
          note: 'entrywise operations need the same shape' },
      ],
      verdict: ok
        ? 'Same shape \u2014 the sum is defined entrywise.'
        : 'Shapes differ \u2014 the sum is undefined. There is no broadcasting here.',
    };
  }

  if (operation === 'transpose') {
    return {
      ok: true,
      cells: [
        { label: 'Input', value: fmt(dA) },
        { label: 'Output', value: dA ? dA.cols + '\u00D7' + dA.rows : '\u2014', hot: true,
          note: 'dimensions swap' },
        { label: 'Requirement', value: 'none', note: 'defined for every matrix' },
      ],
      verdict: 'Always defined \u2014 the transpose imposes no condition.',
    };
  }

  if (operation === 'scalar') {
    return {
      ok: true,
      cells: [
        { label: 'Input', value: fmt(dA) },
        { label: 'Output', value: fmt(dA), note: 'unchanged' },
        { label: 'Requirement', value: 'none' },
      ],
      verdict: 'Always defined \u2014 scaling preserves shape.',
    };
  }

  if (operation === 'inverse') {
    const square = !!(dA && dA.rows === dA.cols);
    return {
      ok: square,
      cells: [
        { label: 'Shape', value: fmt(dA), fail: !square },
        { label: 'Square', value: square ? 'yes' : 'no', hot: true, fail: !square },
        { label: 'Also requires', value: 'det \u2260 0', note: 'squareness alone is not enough' },
      ],
      verdict: square
        ? 'Square \u2014 an inverse may exist, subject to the determinant.'
        : 'Not square \u2014 no inverse exists, only a pseudoinverse.',
    };
  }

  return { ok: true, cells: [], verdict: null };
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – nine theme keys; default navy
 *   variant  – 'full' | 'compact'
 *
 * data shape
 *   {
 *     kicker, title, intro, note,
 *     operation: 'multiply'|'add'|'subtract'|'scalar'|'transpose'|'inverse',
 *     A, B?, result, scalar?, inverse?, identity?, pairs?,
 *     highlight?: { rowOfA, colOfB, caption }
 *   }
 * ==========================================================================*/
export default function MatrixOperation(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : 'navy';
  const variant = props.variant || 'full';

  const rootClass = 'mop-root mop-t-' + theme + ' mop-v-' + variant;

  if (!data || !data.A) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />
        <div className="mop-empty">MatrixOperation: no operand supplied</div>
      </div>
    );
  }

  const operation = data.operation || 'multiply';
  const sceneName = OP_SCENE[operation] || 'display';
  const report = analyse(operation, data.A, data.B);

  const sceneContent = {
    A: data.A,
    B: data.B,
    result: data.result,
    inverse: data.inverse,
    identity: data.identity,
    scalar: data.scalar,
    pairs: data.pairs,
    nameA: data.nameA,
    nameB: data.nameB,
    nameC: data.nameC,
    showDim: true,
    highlight: data.highlight,
    caption: data.caption,
  };

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: MOP_CSS }} />

      <div className="mop-mast">
        {data.kicker ? <div className="mop-kicker">{data.kicker}</div> : null}
        {data.title ? <h3 className="mop-title">{data.title}</h3> : null}
        {data.intro ? <p className="mop-intro">{processContent(data.intro)}</p> : null}
      </div>

      <div className="mop-stage">
        <MatrixScene theme={theme} scene={sceneName} content={sceneContent} />
      </div>

      {report.cells.length > 0 ? (
        <dl className="mop-rail">
          {report.cells.map(function (c, i) {
            return (
              <div
                key={i}
                className={'mop-cf' + (c.hot ? ' is-hot' : '') + (c.fail ? ' is-fail' : '')}
              >
                <dt>{c.label}</dt>
                <dd>
                  {c.value}
                  {c.note ? <small>{c.note}</small> : null}
                </dd>
              </div>
            );
          })}
        </dl>
      ) : null}

      {report.verdict ? (
        <div className="mop-verdict">
          <span className={'mop-badge ' + (report.ok ? 'is-ok' : 'is-fail')}>
            {report.ok ? 'Defined' : 'Undefined'}
          </span>
          <span className="mop-verdict-text">{report.verdict}</span>
        </div>
      ) : null}

      {data.note ? (
        <div className="mop-note">
          <div className="mop-note-in">
            <b>{data.noteLabel || 'What the dimension rail shows'}</b>
            {processContent(data.note)}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { THEMES as MOP_THEMES, OP_SCENE };
