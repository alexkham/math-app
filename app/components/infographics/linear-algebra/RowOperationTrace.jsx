import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import MatrixScene from './MatrixScene';
/* ============================================================================
 * THEMES — six base tokens plus the pivot pair and the onInk block.
 * ==========================================================================*/
const THEMES = {
  navy: {
    paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478', line: '#d6dce8',
    accent: '#1f4e8c', soft: '#e8edf5',
    onInkBg: '#0f1a2e', onInkText: '#f4f6fa', onInkDim: '#c9d4e6', onInkPivot: '#e8b93a',
  },
  terracotta: {
    paper: '#fffaf3', ink: '#2a1a14', muted: '#6b5848', line: '#e8d9c4',
    accent: '#c4543a', soft: '#fdf3e6',
    onInkBg: '#2a1a14', onInkText: '#fffaf3', onInkDim: '#e0cdb8', onInkPivot: '#e8a53a',
  },
  forest: {
    paper: '#f6f3ea', ink: '#1a2a1f', muted: '#5a6b5a', line: '#d8dcc9',
    accent: '#3d6b4a', soft: '#eef2e0',
    onInkBg: '#1a2a1f', onInkText: '#f6f3ea', onInkDim: '#c9d4c2', onInkPivot: '#d8c04a',
  },
  burgundy: {
    paper: '#faf4f4', ink: '#2a1418', muted: '#6b5258', line: '#e6d5d8',
    accent: '#7d2838', soft: '#f5e9ec',
    onInkBg: '#2a1418', onInkText: '#faf4f4', onInkDim: '#dcc4c8', onInkPivot: '#dda84a',
  },
  olive: {
    paper: '#f9f6ea', ink: '#1f1f14', muted: '#5a5a4a', line: '#dcd6bc',
    accent: '#7a7a2a', soft: '#f0ecd4',
    onInkBg: '#1f1f14', onInkText: '#f9f6ea', onInkDim: '#d0cbb0', onInkPivot: '#d6c84a',
  },
  ocean: {
    paper: '#f0f7f7', ink: '#0f2228', muted: '#4a6168', line: '#cfe0e0',
    accent: '#1f7a82', soft: '#e0eded',
    onInkBg: '#0f2228', onInkText: '#f0f7f7', onInkDim: '#bcd4d4', onInkPivot: '#e0b83a',
  },
  mono: {
    paper: '#ffffff', ink: '#000000', muted: '#666666', line: '#dddddd',
    accent: '#000000', soft: '#f4f4f4',
    onInkBg: '#000000', onInkText: '#ffffff', onInkDim: '#bbbbbb', onInkPivot: '#ffffff',
  },
  plum: {
    paper: '#f7f3f8', ink: '#1f1428', muted: '#5a4e6b', line: '#e0d6e4',
    accent: '#5a2d7a', soft: '#ede4f0',
    onInkBg: '#1f1428', onInkText: '#f7f3f8', onInkDim: '#cfc2d6', onInkPivot: '#d8a84a',
  },
  dark: {
    paper: '#1a1a22', ink: '#f0ece0', muted: '#9a958a', line: '#2e2e3a',
    accent: '#ffb84a', soft: '#22222e',
    onInkBg: '#0e0e14', onInkText: '#f0ece0', onInkDim: '#8a857a', onInkPivot: '#ffb84a',
  },
};

/* ============================================================================
 * CSS — every variant scoped under .rot-root.rot-v-*
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.rot-root.rot-t-' + key + '{' +
      '--rot-paper:' + t.paper + ';--rot-ink:' + t.ink + ';--rot-muted:' + t.muted + ';' +
      '--rot-line:' + t.line + ';--rot-accent:' + t.accent + ';--rot-soft:' + t.soft + ';' +
      '--rot-onink-bg:' + t.onInkBg + ';--rot-onink-text:' + t.onInkText + ';' +
      '--rot-onink-dim:' + t.onInkDim + ';--rot-pivot:' + t.onInkPivot + ';}';
  });

  css +=
  /* ---------- shared ---------- */
  '.rot-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--rot-ink);background:var(--rot-paper);}' +
  '.rot-root *,.rot-root *::before,.rot-root *::after{box-sizing:border-box;}' +
  '.rot-root a{color:var(--rot-accent);text-underline-offset:2px;}' +

  '.rot-mast{background:var(--rot-ink);color:var(--rot-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.rot-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--rot-accent);}' +
  '.rot-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.rot-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.rot-goal{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +

  '.rot-legend{border:1px solid var(--rot-line);border-top:none;padding:15px 32px;display:flex;' +
  'gap:26px;flex-wrap:wrap;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.14em;text-transform:uppercase;color:var(--rot-muted);}' +
  '.rot-legend span{display:flex;align-items:center;gap:9px;}' +
  '.rot-sw{width:15px;height:15px;display:inline-block;}' +
  '.rot-sw.is-pivot{background:var(--rot-accent);}' +
  '.rot-sw.is-gold{background:var(--rot-pivot);}' +
  '.rot-sw.is-chg{border-bottom:3px solid var(--rot-accent);height:12px;}' +

  '.rot-read{display:grid;grid-template-columns:1fr 300px;border:1px solid var(--rot-line);' +
  'border-top:none;}' +
  '.rot-read-main{padding:26px 32px;}' +
  '.rot-read-tag{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--rot-accent);' +
  'margin-bottom:12px;}' +
  '.rot-read-body{font-size:14.5px;}' +
  '.rot-read-body p{margin:0 0 9px;}.rot-read-body p:last-child{margin-bottom:0;}' +
  '.rot-read.is-missing .rot-read-body{color:var(--rot-muted);font-style:italic;}' +
  '.rot-stats{border-left:1px solid var(--rot-line);background:var(--rot-soft);padding:24px 26px;' +
  'display:grid;gap:18px;align-content:start;margin:0;}' +
  '.rot-stat dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'letter-spacing:.18em;text-transform:uppercase;color:var(--rot-muted);margin-bottom:5px;}' +
  '.rot-stat dd{margin:0;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:22px;' +
  'font-weight:800;letter-spacing:-.03em;line-height:1;}' +
  '.rot-stat dd small{font-family:\'Inter\',sans-serif;font-size:11px;font-weight:400;' +
  'color:var(--rot-muted);display:block;margin-top:6px;letter-spacing:0;}' +
  '.rot-stat.is-hot dd{color:var(--rot-accent);}' +

  /* ==========================================================
   * VARIANT: ledger
   * ========================================================*/
  '.rot-v-ledger .rot-steps{border:1px solid var(--rot-line);border-top:none;}' +
  '.rot-v-ledger .rot-step{display:grid;grid-template-columns:96px 240px 1fr;' +
  'border-bottom:1px solid var(--rot-line);}' +
  '.rot-v-ledger .rot-step:last-child{border-bottom:none;}' +
  '.rot-v-ledger .rot-num{background:var(--rot-soft);border-right:1px solid var(--rot-line);' +
  'display:flex;align-items:flex-start;justify-content:center;padding-top:24px;}' +
  '.rot-v-ledger .rot-num span{font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:38px;font-weight:800;color:var(--rot-line);letter-spacing:-.05em;line-height:1;}' +
  '.rot-v-ledger .rot-step.is-final .rot-num{background:var(--rot-accent);}' +
  '.rot-v-ledger .rot-step.is-final .rot-num span{color:var(--rot-paper);}' +
  '.rot-v-ledger .rot-mxwrap{padding:20px 16px;display:flex;justify-content:center;' +
  'align-items:flex-start;border-right:1px solid var(--rot-line);}' +
  '.rot-v-ledger .rot-detail{padding:22px 26px;}' +
  '.rot-v-ledger .rot-op{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:13px;' +
  'font-weight:800;color:var(--rot-accent);margin-bottom:10px;}' +
  '.rot-v-ledger .rot-op span{display:inline-block;border:1px solid var(--rot-accent);' +
  'padding:4px 9px;margin:0 5px 5px 0;}' +
  '.rot-v-ledger .rot-why{font-size:13.5px;color:var(--rot-muted);max-width:440px;}' +
  '.rot-v-ledger .rot-chips{display:flex;gap:7px;flex-wrap:wrap;margin-top:14px;}' +
  '.rot-chip{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:700;' +
  'letter-spacing:.1em;text-transform:uppercase;padding:5px 9px;background:var(--rot-soft);' +
  'border:1px solid var(--rot-line);}' +
  '.rot-chip.is-hot{background:var(--rot-accent);color:var(--rot-paper);' +
  'border-color:var(--rot-accent);}' +

  /* ==========================================================
   * VARIANT: filmstrip
   * ========================================================*/
  '.rot-v-strip .rot-band{background:var(--rot-onink-bg);color:var(--rot-onink-dim);' +
  'padding:30px 0 26px;overflow-x:auto;}' +
  '.rot-v-strip .rot-flow{display:flex;align-items:flex-start;padding:0 32px;}' +
  '.rot-v-strip .rot-frame{flex:0 0 auto;text-align:center;}' +
  '.rot-v-strip .rot-frame-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.2em;text-transform:uppercase;opacity:.5;margin-bottom:11px;}' +
  '.rot-v-strip .rot-frame-tag{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;' +
  'font-size:15px;color:var(--rot-onink-text);margin-bottom:12px;}' +
  '.rot-v-strip .rot-frame-note{font-size:11.5px;opacity:.62;max-width:186px;margin:13px auto 0;' +
  'line-height:1.45;}' +
  '.rot-v-strip .rot-gap{flex:0 0 auto;padding:0 10px;margin-top:70px;text-align:center;' +
  'min-width:96px;}' +
  '.rot-v-strip .rot-op{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'font-weight:800;color:var(--rot-pivot);margin-bottom:8px;line-height:1.5;white-space:nowrap;}' +
  '.rot-v-strip .rot-rail{height:2px;background:var(--rot-onink-dim);position:relative;opacity:.5;}' +
  '.rot-v-strip .rot-rail::after{content:\'\';position:absolute;right:-1px;top:-4px;' +
  'border-left:9px solid var(--rot-onink-dim);border-top:5px solid transparent;' +
  'border-bottom:5px solid transparent;}' +

  /* ==========================================================
   * VARIANT: equation
   * ========================================================*/
  '.rot-v-eq .rot-steps{border:1px solid var(--rot-line);border-top:none;}' +
  '.rot-v-eq .rot-step{border-bottom:1px solid var(--rot-line);}' +
  '.rot-v-eq .rot-step:last-child{border-bottom:none;}' +
  '.rot-v-eq .rot-step-h{display:flex;align-items:center;gap:14px;flex-wrap:wrap;' +
  'padding:13px 26px;background:var(--rot-soft);border-bottom:1px solid var(--rot-line);}' +
  '.rot-v-eq .rot-step-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'font-weight:800;background:var(--rot-ink);color:var(--rot-paper);padding:4px 9px;' +
  'letter-spacing:.08em;}' +
  '.rot-v-eq .rot-op{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:13px;' +
  'font-weight:800;color:var(--rot-accent);}' +
  '.rot-v-eq .rot-why{font-size:12.5px;color:var(--rot-muted);margin-left:auto;max-width:340px;' +
  'text-align:right;}' +
  '.rot-v-eq .rot-eqwrap{padding:20px 16px;overflow-x:auto;}' +

  /* ==========================================================
   * VARIANT: diptych
   * ========================================================*/
  '.rot-v-dip .rot-panel{border:1px solid var(--rot-line);border-top:none;}' +
  '.rot-v-dip .rot-tri{display:grid;grid-template-columns:1fr 172px 1fr;}' +
  '.rot-v-dip .rot-side{padding:24px 20px;display:flex;flex-direction:column;align-items:center;}' +
  '.rot-v-dip .rot-side.is-after{background:var(--rot-soft);}' +
  '.rot-v-dip .rot-side-cap{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--rot-muted);' +
  'margin-bottom:10px;}' +
  '.rot-v-dip .rot-side-meta{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'color:var(--rot-muted);margin-top:10px;}' +
  '.rot-v-dip .rot-mid{background:var(--rot-ink);color:var(--rot-onink-dim);padding:24px 16px;' +
  'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:11px;}' +
  '.rot-v-dip .rot-mid-tag{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'font-weight:800;letter-spacing:.2em;text-transform:uppercase;opacity:.55;}' +
  '.rot-v-dip .rot-mid-op{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:13px;' +
  'font-weight:800;color:var(--rot-pivot);text-align:center;line-height:1.6;}' +
  '.rot-v-dip .rot-mid-arrow{font-size:26px;opacity:.6;}' +
  '.rot-v-dip .rot-delta{border-top:1px solid var(--rot-line);padding:18px 26px;display:grid;' +
  'grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;margin:0;}' +
  '.rot-v-dip .rot-delta dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'letter-spacing:.18em;text-transform:uppercase;color:var(--rot-muted);margin-bottom:5px;}' +
  '.rot-v-dip .rot-delta dd{margin:0;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:12.5px;}' +
  '.rot-v-dip .rot-delta dd.is-hot{color:var(--rot-accent);font-weight:700;}' +

  /* ==========================================================
   * VARIANT: contact
   * ========================================================*/
  '.rot-v-contact .rot-sheet{border:1px solid var(--rot-line);border-top:none;padding:24px 26px;' +
  'display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:0;}' +
  '.rot-v-contact .rot-frame{border-right:1px dotted var(--rot-line);padding:0 14px;' +
  'text-align:center;display:flex;flex-direction:column;align-items:center;}' +
  '.rot-v-contact .rot-frame:last-child{border-right:none;}' +
  '.rot-v-contact .rot-frame-n{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.16em;color:var(--rot-muted);margin-bottom:9px;}' +
  '.rot-v-contact .rot-frame.is-final .rot-frame-n{color:var(--rot-accent);}' +
  '.rot-v-contact .rot-frame-op{font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:10px;font-weight:700;color:var(--rot-accent);margin-top:10px;line-height:1.5;}' +
  '.rot-v-contact .rot-pills{border:1px solid var(--rot-line);border-top:none;padding:16px 26px;' +
  'display:flex;gap:10px;flex-wrap:wrap;align-items:center;}' +

  /* ==========================================================
   * VARIANT: spine
   * ========================================================*/
  '.rot-v-spine .rot-panel{border:1px solid var(--rot-line);border-top:none;' +
  'padding:30px 30px 24px;}' +
  '.rot-v-spine .rot-rail-wrap{position:relative;padding-left:210px;}' +
  '.rot-v-spine .rot-rail-wrap::before{content:\'\';position:absolute;left:206px;top:14px;' +
  'bottom:14px;width:2px;background:var(--rot-line);}' +
  '.rot-v-spine .rot-node{position:relative;padding-bottom:22px;}' +
  '.rot-v-spine .rot-node-mx{position:absolute;left:-210px;top:0;width:188px;display:flex;' +
  'justify-content:flex-end;}' +
  '.rot-v-spine .rot-dot{position:absolute;left:-11px;top:16px;width:16px;height:16px;' +
  'background:var(--rot-paper);border:3px solid var(--rot-accent);border-radius:50%;}' +
  '.rot-v-spine .rot-node.is-final .rot-dot{background:var(--rot-accent);}' +
  '.rot-v-spine .rot-node-body{padding:8px 0 0 22px;}' +
  '.rot-v-spine .rot-op{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:13px;' +
  'font-weight:800;color:var(--rot-accent);margin-bottom:7px;}' +
  '.rot-v-spine .rot-why{font-size:13px;color:var(--rot-muted);max-width:430px;}' +

  '.rot-empty{border:1px dashed var(--rot-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--rot-muted);}' +

  /* ---------- responsive ---------- */
  '@media (max-width:900px){' +
  '.rot-read{grid-template-columns:1fr;}' +
  '.rot-stats{border-left:none;border-top:1px solid var(--rot-line);' +
  'grid-template-columns:repeat(2,1fr);}' +
  '.rot-v-ledger .rot-step{grid-template-columns:64px 1fr;}' +
  '.rot-v-ledger .rot-detail{grid-column:2;border-top:1px solid var(--rot-line);}' +
  '.rot-v-dip .rot-tri{grid-template-columns:1fr;}' +
  '.rot-v-dip .rot-mid{flex-direction:row;padding:16px;}' +
  '.rot-v-spine .rot-rail-wrap{padding-left:0;}' +
  '.rot-v-spine .rot-rail-wrap::before{display:none;}' +
  '.rot-v-spine .rot-node-mx{position:static;width:auto;justify-content:center;' +
  'margin-bottom:12px;}' +
  '.rot-v-spine .rot-dot{display:none;}' +
  '.rot-v-spine .rot-node-body{padding-left:0;text-align:center;}' +
  '.rot-v-spine .rot-why{margin:0 auto;}' +
  '}' +
  '@media (max-width:640px){' +
  '.rot-mast{padding:22px 18px 20px;}.rot-mast::after{left:18px;right:18px;}' +
  '.rot-title{font-size:22px;}' +
  '.rot-legend{padding:14px 18px;gap:16px;}' +
  '.rot-read-main{padding:20px 18px;}' +
  '.rot-v-strip .rot-flow{padding:0 18px;}' +
  '.rot-v-eq .rot-step-h{padding:12px 16px;}' +
  '.rot-v-eq .rot-why{text-align:left;margin-left:0;}' +
  '.rot-v-contact .rot-sheet,.rot-v-spine .rot-panel{padding:20px 16px;}' +
  '}';

  return css;
}

const ROT_CSS = buildCss();

/* ============================================================================
 * HELPERS — every derivation lives here
 * ==========================================================================*/
function padTwo(n) {
  return n < 10 ? '0' + n : String(n);
}

function toList(v) {
  if (!v) return null;
  return Array.isArray(v) ? v : [v];
}

function specForStep(step, isEquation) {
  if (isEquation && step.elementary) {
    return {
      matrices: [
        {
          name: step.elementaryName || 'E',
          data: step.elementary,
          dimZero: true,
          highlights: step.multiplierCell
            ? [{
                target: { kind: 'cell', row: step.multiplierCell[0], col: step.multiplierCell[1] },
                role: 'colB',
              }]
            : [],
        },
        { name: step.beforeName || 'A', data: step.before, pivots: step.pivotsBefore },
        { name: step.label || 'A\u2032', data: step.matrix, pivots: step.pivots, changed: step.changed },
      ],
      operators: ['\u00B7', '='],
    };
  }
  return {
    matrices: [{
      name: step.label,
      data: step.matrix,
      pivots: step.pivots,
      changed: step.changed,
      dividers: step.augmentedAfterCol != null
        ? [{ afterCol: step.augmentedAfterCol, style: 'dashed' }]
        : undefined,
    }],
  };
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – nine theme keys; default navy
 *   variant  – 'ledger' | 'filmstrip' | 'equation' | 'diptych' | 'contact' | 'spine'
 *   cellSize – forwarded to MatrixScene
 *
 * data shape
 *   {
 *     kicker, title, goal,
 *     steps: [{
 *       label, matrix, pivots?: [[r,c]], changed?: [[r,c]],
 *       operation?, why?, note?, chips?: [{ text, hot }],
 *       elementary?, elementaryName?, multiplierCell?, before?, beforeName?,
 *       augmentedAfterCol?, final?
 *     }],
 *     reading, stats?: [{ label, value, note, hot }],
 *     delta?: [{ label, value, hot }]   // diptych only
 *   }
 * ==========================================================================*/
export default function RowOperationTrace(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : 'navy';
  const variant = props.variant || 'ledger';
  const cellSize = props.cellSize;

  const variantClass =
    variant === 'filmstrip' ? 'rot-v-strip' :
    variant === 'equation'  ? 'rot-v-eq' :
    variant === 'diptych'   ? 'rot-v-dip' :
    variant === 'contact'   ? 'rot-v-contact' :
    variant === 'spine'     ? 'rot-v-spine' :
                              'rot-v-ledger';

  const rootClass = 'rot-root rot-t-' + theme + ' ' + variantClass;

  if (!data || !data.steps || data.steps.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: ROT_CSS }} />
        <div className="rot-empty">RowOperationTrace: no steps supplied</div>
      </div>
    );
  }

  const isEquation = variant === 'equation';
  const lastIndex = data.steps.length - 1;

  const steps = data.steps.map(function (s, i) {
    return {
      key: s.id || 'step-' + i,
      raw: s,
      n: i,
      isFinal: s.final != null ? !!s.final : i === lastIndex,
      ops: toList(s.operation),
      chips: s.chips || [],
      spec: specForStep(s, isEquation),
    };
  });

  const missingReading = !data.reading;

  function scene(step, opts) {
    return (
      <MatrixScene
        theme={theme}
        spec={step.spec}
        cellSize={(opts && opts.cellSize) || cellSize || 'auto'}
        onInk={!!(opts && opts.onInk)}
      />
    );
  }

  const masthead = (
    <div className="rot-mast">
      {data.kicker ? <div className="rot-kicker">{data.kicker}</div> : null}
      {data.title ? <h3 className="rot-title">{data.title}</h3> : null}
      {data.goal ? <p className="rot-goal">{processContent(data.goal)}</p> : null}
    </div>
  );

  const legend = (
    <div className="rot-legend">
      <span>
        <i className={'rot-sw ' + (variant === 'filmstrip' ? 'is-gold' : 'is-pivot')} /> pivot
      </span>
      <span><i className="rot-sw is-chg" /> altered this step</span>
    </div>
  );

  function readingPanel() {
    if (!data.reading && !data.stats) return null;
    return (
      <div className={'rot-read' + (missingReading ? ' is-missing' : '')}>
        <div className="rot-read-main">
          <div className="rot-read-tag">Reading</div>
          <div className="rot-read-body">
            {missingReading
              ? 'Not stated. A trace that stops at the final matrix leaves the reader to infer what it means \u2014 which is the step the diagram exists to make explicit.'
              : processContent(data.reading)}
          </div>
        </div>
        {data.stats && data.stats.length > 0 ? (
          <div className="rot-stats">
            {data.stats.map(function (st, si) {
              return (
                <dl key={si} className={'rot-stat' + (st.hot ? ' is-hot' : '')}>
                  <dt>{st.label}</dt>
                  <dd>
                    {st.value}
                    {st.note ? <small>{st.note}</small> : null}
                  </dd>
                </dl>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }

  /* ---------------- ledger ---------------- */
  function renderLedger() {
    return (
      <div className="rot-steps">
        {steps.map(function (s) {
          return (
            <div key={s.key} className={'rot-step' + (s.isFinal ? ' is-final' : '')}>
              <div className="rot-num"><span>{padTwo(s.n + 1)}</span></div>
              <div className="rot-mxwrap">{scene(s)}</div>
              <div className="rot-detail">
                {s.ops ? (
                  <div className="rot-op">
                    {s.ops.map(function (op, oi) {
                      return <span key={oi}>{op}</span>;
                    })}
                  </div>
                ) : null}
                {s.raw.why ? <div className="rot-why">{processContent(s.raw.why)}</div> : null}
                {s.chips.length > 0 ? (
                  <div className="rot-chips">
                    {s.chips.map(function (ch, ci) {
                      return (
                        <span key={ci} className={'rot-chip' + (ch.hot ? ' is-hot' : '')}>
                          {ch.text}
                        </span>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  /* ---------------- filmstrip ---------------- */
  function renderFilmstrip() {
    const flow = [];
    steps.forEach(function (s, i) {
      flow.push(
        <div key={s.key} className="rot-frame">
          <div className="rot-frame-n">{'frame ' + padTwo(i + 1)}</div>
          {s.raw.label ? <div className="rot-frame-tag">{s.raw.label}</div> : null}
          {scene(s, { onInk: true })}
          {s.raw.note ? <p className="rot-frame-note">{processContent(s.raw.note)}</p> : null}
        </div>
      );
      const next = steps[i + 1];
      if (next && next.ops) {
        flow.push(
          <div key={s.key + '-gap'} className="rot-gap">
            <div className="rot-op">
              {next.ops.map(function (op, oi) {
                return (
                  <React.Fragment key={oi}>
                    {op}
                    {oi < next.ops.length - 1 ? <br /> : null}
                  </React.Fragment>
                );
              })}
            </div>
            <div className="rot-rail" />
          </div>
        );
      }
    });
    return <div className="rot-band"><div className="rot-flow">{flow}</div></div>;
  }

  /* ---------------- equation ---------------- */
  function renderEquation() {
    return (
      <div className="rot-steps">
        {steps.map(function (s) {
          if (!s.raw.elementary) return null;
          return (
            <div key={s.key} className="rot-step">
              <div className="rot-step-h">
                <span className="rot-step-n">{padTwo(s.n + 1)}</span>
                {s.ops ? <span className="rot-op">{s.ops.join('  ')}</span> : null}
                {s.raw.why ? <span className="rot-why">{processContent(s.raw.why)}</span> : null}
              </div>
              <div className="rot-eqwrap">{scene(s, { cellSize: 'sm' })}</div>
            </div>
          );
        })}
      </div>
    );
  }

  /* ---------------- diptych ---------------- */
  function renderDiptych() {
    const first = steps[0];
    const last = steps[steps.length - 1];
    return (
      <div className="rot-panel">
        <div className="rot-tri">
          <div className="rot-side">
            <div className="rot-side-cap">{first.raw.label || 'before'}</div>
            {scene(first)}
            {first.raw.note ? (
              <div className="rot-side-meta">{processContent(first.raw.note)}</div>
            ) : null}
          </div>
          <div className="rot-mid">
            <div className="rot-mid-tag">operation</div>
            <div className="rot-mid-op">
              {last.ops
                ? last.ops.map(function (op, oi) {
                    return (
                      <React.Fragment key={oi}>
                        {op}
                        {oi < last.ops.length - 1 ? <br /> : null}
                      </React.Fragment>
                    );
                  })
                : null}
            </div>
            <div className="rot-mid-arrow">&rarr;</div>
          </div>
          <div className="rot-side is-after">
            <div className="rot-side-cap">{last.raw.label || 'after'}</div>
            {scene(last)}
            {last.raw.note ? (
              <div className="rot-side-meta">{processContent(last.raw.note)}</div>
            ) : null}
          </div>
        </div>
        {data.delta && data.delta.length > 0 ? (
          <dl className="rot-delta">
            {data.delta.map(function (d, di) {
              return (
                <div key={di}>
                  <dt>{d.label}</dt>
                  <dd className={d.hot ? 'is-hot' : ''}>{d.value}</dd>
                </div>
              );
            })}
          </dl>
        ) : null}
      </div>
    );
  }

  /* ---------------- contact ---------------- */
  function renderContact() {
    return (
      <>
        <div className="rot-sheet">
          {steps.map(function (s) {
            return (
              <div key={s.key} className={'rot-frame' + (s.isFinal ? ' is-final' : '')}>
                <div className="rot-frame-n">
                  {padTwo(s.n) + (s.isFinal && s.raw.label ? ' \u00B7 ' + s.raw.label : '')}
                </div>
                {scene(s, { cellSize: 'xs' })}
                {s.ops ? <div className="rot-frame-op">{s.ops.join(', ')}</div> : null}
              </div>
            );
          })}
        </div>
        {data.stats && data.stats.length > 0 ? (
          <div className="rot-pills">
            {data.stats.map(function (st, si) {
              return (
                <span key={si} className={'rot-chip' + (st.hot ? ' is-hot' : '')}>
                  {st.label + ' ' + st.value}
                </span>
              );
            })}
          </div>
        ) : null}
      </>
    );
  }

  /* ---------------- spine ---------------- */
  function renderSpine() {
    return (
      <div className="rot-panel">
        <div className="rot-rail-wrap">
          {steps.map(function (s) {
            return (
              <div key={s.key} className={'rot-node' + (s.isFinal ? ' is-final' : '')}>
                <div className="rot-node-mx">{scene(s, { cellSize: 'sm' })}</div>
                <span className="rot-dot" />
                <div className="rot-node-body">
                  {s.ops ? <div className="rot-op">{s.ops.join(', ')}</div> : null}
                  {s.raw.why ? <div className="rot-why">{processContent(s.raw.why)}</div> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  let body;
  if (variant === 'filmstrip') body = renderFilmstrip();
  else if (variant === 'equation') body = renderEquation();
  else if (variant === 'diptych') body = renderDiptych();
  else if (variant === 'contact') body = renderContact();
  else if (variant === 'spine') body = renderSpine();
  else body = renderLedger();

  const showReading = variant !== 'contact' && variant !== 'diptych';

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: ROT_CSS }} />
      {masthead}
      {body}
      {showReading ? readingPanel() : null}
      {legend}
    </div>
  );
}

export { THEMES as ROT_THEMES };
