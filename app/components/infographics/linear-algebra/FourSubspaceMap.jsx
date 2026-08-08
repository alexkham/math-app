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

/* Layout constants for the diagram. */
const L = {
  vbW: 760, vbH: 420,
  boxW: 220, boxH: 330,
  leftX: 30, rightX: 510, boxY: 40,
  splitOffset: 132,          // distance from box top to the dashed split
  padX: 18,
  nameY: 36, dimY: 56, basisY: 82, basisStep: 18,
  originX: 620, originY: 330,
};

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.fsm-root.fsm-t-' + key + '{' +
      '--fsm-paper:' + t.paper + ';--fsm-ink:' + t.ink + ';--fsm-muted:' + t.muted + ';' +
      '--fsm-line:' + t.line + ';--fsm-accent:' + t.accent + ';--fsm-soft:' + t.soft + ';}';
  });

  css +=
  '.fsm-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--fsm-ink);background:var(--fsm-paper);}' +
  '.fsm-root *,.fsm-root *::before,.fsm-root *::after{box-sizing:border-box;}' +
  '.fsm-root a{color:var(--fsm-accent);text-underline-offset:2px;}' +

  '.fsm-mast{background:var(--fsm-ink);color:var(--fsm-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.fsm-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--fsm-accent);}' +
  '.fsm-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.fsm-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.fsm-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +

  '.fsm-facts{border:1px solid var(--fsm-line);border-top:none;padding:20px 30px;display:flex;' +
  'gap:26px;flex-wrap:wrap;margin:0;}' +
  '.fsm-facts dt{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.12em;text-transform:uppercase;color:var(--fsm-muted);}' +
  '.fsm-facts dd{margin:4px 0 0;font-family:\'JetBrains Mono\',ui-monospace,monospace;' +
  'font-size:18px;font-weight:800;}' +

  '.fsm-stage{border:1px solid var(--fsm-line);border-top:none;padding:20px 24px;}' +
  '.fsm-svg{width:100%;height:auto;display:block;}' +
  '.fsm-svg text{font-family:\'Inter\',system-ui,sans-serif;}' +
  '.fsm-sp{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14px;' +
  'fill:var(--fsm-ink);}' +
  '.fsm-dm{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;font-weight:800;' +
  'fill:var(--fsm-accent);}' +
  '.fsm-bs{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'fill:var(--fsm-muted);}' +
  '.fsm-am{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:11px;' +
  'letter-spacing:.1em;fill:var(--fsm-muted);}' +
  '.fsm-ar{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;font-weight:800;' +
  'fill:var(--fsm-ink);}' +

  '.fsm-read{border:1px solid var(--fsm-line);border-top:none;padding:16px 32px;font-size:13.5px;}' +
  '.fsm-read-in{border-left:3px solid var(--fsm-accent);background:var(--fsm-soft);' +
  'padding:14px 17px;}' +
  '.fsm-read b{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'letter-spacing:.13em;text-transform:uppercase;color:var(--fsm-accent);display:block;' +
  'margin-bottom:7px;font-weight:800;}' +
  '.fsm-read.is-missing .fsm-read-in{border-left-style:dashed;color:var(--fsm-muted);' +
  'font-style:italic;}' +

  '.fsm-empty{border:1px dashed var(--fsm-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--fsm-muted);}' +

  '@media (max-width:640px){' +
  '.fsm-mast{padding:22px 18px 20px;}.fsm-mast::after{left:18px;right:18px;}' +
  '.fsm-title{font-size:22px;}' +
  '.fsm-facts{padding:16px 18px;gap:18px;}' +
  '.fsm-stage{padding:16px;}.fsm-read{padding:14px 18px;}' +
  '}';

  return css;
}

const FSM_CSS = buildCss();

/* ============================================================================
 * HELPERS
 * ==========================================================================*/
function normaliseSpace(s, fallbackName) {
  if (!s) return { name: fallbackName, dim: '\u2014', basis: [], missing: true };
  return {
    name: s.name || fallbackName,
    dim: typeof s.dim === 'number' ? s.dim : '\u2014',
    basis: s.basis || [],
    missing: !s.basis || s.basis.length === 0,
  };
}

/* One half of the diagram — a box split into two stacked regions. */
function renderHalf(key, x, ambient, upper, lower) {
  const splitY = L.boxY + L.splitOffset;
  const tx = x + L.padX;
  const nodes = [];

  nodes.push(
    <text key={key + '-amb'} className="fsm-am" x={x} y={26}>{ambient}</text>
  );
  nodes.push(
    <rect key={key + '-box'} x={x} y={L.boxY} width={L.boxW} height={L.boxH}
      fill="none" stroke="var(--fsm-ink)" strokeWidth="2" />
  );
  nodes.push(
    <rect key={key + '-fill'} x={x + 2} y={L.boxY + 2}
      width={L.boxW - 4} height={L.splitOffset - 4} fill="var(--fsm-soft)" />
  );
  nodes.push(
    <line key={key + '-split'} x1={x} y1={splitY} x2={x + L.boxW} y2={splitY}
      stroke="var(--fsm-ink)" strokeWidth="1.5" strokeDasharray="5 4" />
  );
  nodes.push(
    <path key={key + '-perp'}
      d={'M ' + (x + 12) + ' ' + (splitY - 12) + ' L ' + (x + 24) + ' ' + (splitY - 12) +
         ' L ' + (x + 24) + ' ' + splitY}
      fill="none" stroke="var(--fsm-accent)" strokeWidth="1.5" />
  );

  /* upper region */
  nodes.push(<text key={key + '-un'} className="fsm-sp" x={tx} y={L.boxY + L.nameY}>{upper.name}</text>);
  nodes.push(<text key={key + '-ud'} className="fsm-dm" x={tx} y={L.boxY + L.dimY}>{'dim = ' + upper.dim}</text>);
  upper.basis.forEach(function (b, i) {
    nodes.push(
      <text key={key + '-ub-' + i} className="fsm-bs" x={tx} y={L.boxY + L.basisY + i * L.basisStep}>{b}</text>
    );
  });
  if (upper.missing) {
    nodes.push(
      <text key={key + '-ug'} className="fsm-dm" x={tx} y={L.boxY + L.basisY}
        fill="var(--fsm-accent)">basis not computed</text>
    );
  }

  /* lower region */
  nodes.push(<text key={key + '-ln'} className="fsm-sp" x={tx} y={splitY + L.nameY}>{lower.name}</text>);
  nodes.push(<text key={key + '-ld'} className="fsm-dm" x={tx} y={splitY + L.dimY}>{'dim = ' + lower.dim}</text>);
  lower.basis.forEach(function (b, i) {
    nodes.push(
      <text key={key + '-lb-' + i} className="fsm-bs" x={tx} y={splitY + L.basisY + i * L.basisStep}>{b}</text>
    );
  });
  if (lower.missing) {
    nodes.push(
      <text key={key + '-lg'} className="fsm-dm" x={tx} y={splitY + L.basisY}
        fill="var(--fsm-accent)">basis not computed</text>
    );
  }

  return nodes;
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'strang'
 *
 * data shape
 *   {
 *     kicker, title, intro, reading, readingLabel,
 *     domainLabel, codomainLabel,
 *     facts: [{ label, value }],
 *     spaces: {
 *       row:  { name, dim, basis: [] },
 *       null: { name, dim, basis: [] },
 *       column: { name, dim, basis: [] },
 *       leftNull: { name, dim, basis: [] }
 *     }
 *   }
 *
 * A space with no basis renders "basis not computed" in accent — the corpus
 * describes the left null space far more often than it exhibits one.
 * ==========================================================================*/
export default function FourSubspaceMap(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'strang';

  const rootClass = 'fsm-root fsm-t-' + theme + ' fsm-v-' + variant;

  if (!data || !data.spaces) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: FSM_CSS }} />
        <div className="fsm-empty">FourSubspaceMap: no spaces supplied</div>
      </div>
    );
  }

  const sp = data.spaces;
  const row = normaliseSpace(sp.row, 'Row space');
  const nul = normaliseSpace(sp['null'] || sp.nullSpace, 'Null space');
  const col = normaliseSpace(sp.column, 'Column space');
  const lnul = normaliseSpace(sp.leftNull, 'Left null space');

  const missingReading = !data.reading;

  const nodes = []
    .concat(renderHalf('dom', L.leftX, data.domainLabel || 'domain', row, nul))
    .concat(renderHalf('cod', L.rightX, data.codomainLabel || 'codomain', col, lnul));

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: FSM_CSS }} />

      <div className="fsm-mast">
        {data.kicker ? <div className="fsm-kicker">{data.kicker}</div> : null}
        {data.title ? <h3 className="fsm-title">{data.title}</h3> : null}
        {data.intro ? <p className="fsm-intro">{processContent(data.intro)}</p> : null}
      </div>

      {data.facts && data.facts.length > 0 ? (
        <dl className="fsm-facts">
          {data.facts.map(function (f, i) {
            return (
              <div key={i}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            );
          })}
        </dl>
      ) : null}

      <div className="fsm-stage">
        <svg
          className="fsm-svg"
          viewBox={'0 0 ' + L.vbW + ' ' + L.vbH}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <defs>
            <marker id="fsm-ah" markerWidth="9" markerHeight="9" refX="8" refY="3.2" orient="auto">
              <path d="M0,0 L8,3.2 L0,6.4 z" fill="var(--fsm-ink)" />
            </marker>
            <marker id="fsm-ak" markerWidth="9" markerHeight="9" refX="8" refY="3.2" orient="auto">
              <path d="M0,0 L8,3.2 L0,6.4 z" fill="var(--fsm-accent)" />
            </marker>
          </defs>

          {nodes}

          <path
            d="M 258 106 C 340 106, 420 106, 502 106"
            fill="none" stroke="var(--fsm-ink)" strokeWidth="2" markerEnd="url(#fsm-ah)"
          />
          <text className="fsm-ar" x={330} y={94}>
            {(data.mapName || 'A') + ' \u2014 bijective here'}
          </text>
          <text className="fsm-bs" x={310} y={132}>row space &rarr; column space</text>

          <circle cx={L.originX} cy={L.originY} r="5" fill="var(--fsm-accent)" />
          <text className="fsm-bs" x={L.originX + 12} y={L.originY + 4}>0</text>
          <path
            d="M 258 250 C 380 250, 480 320, 612 330"
            fill="none" stroke="var(--fsm-accent)" strokeWidth="2"
            strokeDasharray="4 4" markerEnd="url(#fsm-ak)"
          />
          <text className="fsm-ar" x={326} y={242} fill="var(--fsm-accent)">
            {(data.mapName || 'A') + ' collapses to 0'}
          </text>
        </svg>
      </div>

      <div className={'fsm-read' + (missingReading ? ' is-missing' : '')}>
        <div className="fsm-read-in">
          <b>{data.readingLabel || 'Reading'}</b>
          {missingReading
            ? 'Not stated. The picture shows four spaces and two arrows; what the reader takes from it is the dimension accounting, and that has to be said.'
            : processContent(data.reading)}
        </div>
      </div>
    </div>
  );
}

export { THEMES as FSM_THEMES };
