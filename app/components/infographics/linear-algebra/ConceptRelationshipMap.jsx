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

/* Relation vocabulary → visual class. Anything unrecognised falls to 'structural'. */
const RELATION_CLASS = {
  special:     'structural',
  generalises: 'structural',
  generalizes: 'structural',
  requires:    'dependency',
  builds:      'dependency',
  solves:      'dependency',
  coincides:   'conditional',
  iterates:    'conditional',
  equivalent:  'conditional',
};

const MAP = { vbW: 780, vbH: 400 };

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.crm-root.crm-t-' + key + '{' +
      '--crm-paper:' + t.paper + ';--crm-ink:' + t.ink + ';--crm-muted:' + t.muted + ';' +
      '--crm-line:' + t.line + ';--crm-accent:' + t.accent + ';--crm-soft:' + t.soft + ';}';
  });

  css +=
  '.crm-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--crm-ink);background:var(--crm-paper);}' +
  '.crm-root *,.crm-root *::before,.crm-root *::after{box-sizing:border-box;}' +
  '.crm-root a{color:var(--crm-accent);text-underline-offset:2px;}' +

  '.crm-mast{background:var(--crm-ink);color:var(--crm-paper);padding:26px 32px 24px;' +
  'position:relative;}' +
  '.crm-mast::after{content:\'\';position:absolute;left:32px;right:32px;bottom:0;height:3px;' +
  'background:var(--crm-accent);}' +
  '.crm-kicker{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.22em;text-transform:uppercase;opacity:.6;}' +
  '.crm-title{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:28px;' +
  'letter-spacing:-.03em;margin:8px 0 0;line-height:1.06;}' +
  '.crm-intro{font-size:13.5px;margin:11px 0 0;max-width:580px;opacity:.74;}' +
  '.crm-tally{position:absolute;right:32px;top:24px;text-align:right;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;}' +
  '.crm-tally b{display:block;font-size:32px;font-weight:800;line-height:1;letter-spacing:-.04em;}' +
  '.crm-tally span{font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.55;}' +
  '.crm-tally.is-gap b{color:var(--crm-accent);}' +

  '.crm-stage{border:1px solid var(--crm-line);border-top:none;padding:20px 24px;}' +
  '.crm-svg{width:100%;height:auto;display:block;}' +
  '.crm-nl{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:13px;' +
  'fill:var(--crm-ink);}' +
  '.crm-nl.is-inv{fill:var(--crm-paper);}' +
  '.crm-ns{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'fill:var(--crm-muted);}' +
  '.crm-ns.is-inv{fill:var(--crm-paper);opacity:.75;}' +
  '.crm-el{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'fill:var(--crm-ink);}' +
  '.crm-ec{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8px;' +
  'fill:var(--crm-muted);}' +

  '.crm-led{border:1px solid var(--crm-line);border-top:none;padding:0 30px 22px;}' +
  '.crm-rh{display:grid;grid-template-columns:1fr 118px 1fr 1.4fr;gap:16px;padding:14px 0 9px;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;letter-spacing:.13em;' +
  'text-transform:uppercase;color:var(--crm-muted);border-bottom:2px solid var(--crm-ink);}' +
  '.crm-row{display:grid;grid-template-columns:1fr 118px 1fr 1.4fr;gap:16px;padding:13px 0;' +
  'border-bottom:1px solid var(--crm-line);align-items:center;}' +
  '.crm-row:last-child{border-bottom:none;}' +
  '.crm-nn{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:14px;}' +
  '.crm-rel{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.09em;text-transform:uppercase;padding:4px 8px;text-align:center;' +
  'white-space:nowrap;}' +
  '.crm-rel.r-structural{background:var(--crm-ink);color:var(--crm-paper);}' +
  '.crm-rel.r-dependency{background:var(--crm-soft);color:var(--crm-ink);' +
  'border:1px solid var(--crm-line);}' +
  '.crm-rel.r-conditional{background:var(--crm-accent);color:var(--crm-paper);}' +
  '.crm-cd{font-size:12.5px;color:var(--crm-muted);}' +
  '.crm-cd b{color:var(--crm-ink);font-weight:600;}' +
  '.crm-cd.is-missing{color:var(--crm-accent);font-style:italic;}' +

  '.crm-legend{border:1px solid var(--crm-line);border-top:none;padding:14px 32px;display:flex;' +
  'gap:24px;flex-wrap:wrap;font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.1em;text-transform:uppercase;color:var(--crm-muted);}' +
  '.crm-legend span{display:flex;align-items:center;gap:9px;}' +
  '.crm-legend i{width:26px;height:0;border-top:2px solid var(--crm-ink);display:inline-block;}' +
  '.crm-legend i.l-dep{border-top-style:dashed;border-color:var(--crm-muted);}' +
  '.crm-legend i.l-cond{border-color:var(--crm-accent);}' +

  '.crm-empty{border:1px dashed var(--crm-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--crm-muted);}' +

  '@media (max-width:820px){' +
  '.crm-rh{display:none;}' +
  '.crm-row{grid-template-columns:1fr;gap:7px;padding:15px 0;}' +
  '.crm-rel{justify-self:start;}' +
  '}' +
  '@media (max-width:640px){' +
  '.crm-mast{padding:22px 18px 20px;}.crm-mast::after{left:18px;right:18px;}' +
  '.crm-title{font-size:22px;}' +
  '.crm-tally{position:static;text-align:left;margin-top:14px;}' +
  '.crm-stage{padding:16px;}.crm-led{padding:0 18px 20px;}.crm-legend{padding:14px 18px;}' +
  '}';

  return css;
}

const CRM_CSS = buildCss();

/* ============================================================================
 * HELPERS — edge geometry derived from node boxes
 * ==========================================================================*/
function classFor(relation) {
  return RELATION_CLASS[relation] || 'structural';
}

function edgeGeometry(from, to) {
  const sameRow = Math.abs(from.y - to.y) < 20;
  if (sameRow) {
    const leftToRight = from.x < to.x;
    return {
      x1: leftToRight ? from.x + from.w : from.x,
      y1: from.y + from.h / 2,
      x2: leftToRight ? to.x : to.x + to.w,
      y2: to.y + to.h / 2,
    };
  }
  const downward = from.y < to.y;
  return {
    x1: from.x + from.w / 2,
    y1: downward ? from.y + from.h : from.y,
    x2: to.x + to.w / 2,
    y2: downward ? to.y : to.y + to.h,
  };
}

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – flat object
 *   theme    – 'navy'
 *   variant  – 'graph'
 *
 * data shape
 *   {
 *     kicker, title, intro,
 *     nodes: [{ id, label, sub, x, y, w, h, anchor, soft }],
 *     edges: [{ from, to, relation, shortCondition, condition }]
 *   }
 *
 * relation ∈ special | generalises | requires | builds | solves |
 *            coincides | iterates | equivalent
 *
 * An edge with no `condition` renders "condition not stated" in accent and is
 * counted in the masthead. A relationship asserted without its hypothesis is
 * the failure mode this type exists to prevent.
 * ==========================================================================*/
export default function ConceptRelationshipMap(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const variant = props.variant || 'graph';

  const rootClass = 'crm-root crm-t-' + theme + ' crm-v-' + variant;

  if (!data || !data.nodes || data.nodes.length === 0 || !data.edges) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: CRM_CSS }} />
        <div className="crm-empty">ConceptRelationshipMap: no nodes or edges supplied</div>
      </div>
    );
  }

  const byId = {};
  data.nodes.forEach(function (n) { byId[n.id] = n; });

  const edges = data.edges
    .map(function (e, i) {
      const from = byId[e.from];
      const to = byId[e.to];
      if (!from || !to) return null;
      return {
        key: e.id || 'edge-' + i,
        raw: e,
        from: from,
        to: to,
        cls: classFor(e.relation),
        geo: edgeGeometry(from, to),
        missingCondition: !e.condition,
      };
    })
    .filter(Boolean);

  const missingCount = edges.filter(function (e) { return e.missingCondition; }).length;

  const STROKE = {
    structural:  { stroke: 'var(--crm-ink)',    dash: undefined, marker: 'crm-ai' },
    dependency:  { stroke: 'var(--crm-muted)',  dash: '5 4',     marker: 'crm-am' },
    conditional: { stroke: 'var(--crm-accent)', dash: undefined, marker: 'crm-aa' },
  };

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: CRM_CSS }} />

      <div className="crm-mast">
        {data.kicker ? <div className="crm-kicker">{data.kicker}</div> : null}
        {data.title ? <h3 className="crm-title">{data.title}</h3> : null}
        {data.intro ? <p className="crm-intro">{processContent(data.intro)}</p> : null}
        <div className={'crm-tally' + (missingCount > 0 ? ' is-gap' : '')}>
          <b>{missingCount > 0 ? missingCount : edges.length}</b>
          <span>{missingCount > 0 ? 'edges unqualified' : 'edges'}</span>
        </div>
      </div>

      <div className="crm-stage">
        <svg
          className="crm-svg"
          viewBox={'0 0 ' + MAP.vbW + ' ' + MAP.vbH}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <defs>
            <marker id="crm-ai" markerWidth="9" markerHeight="9" refX="8" refY="3.2" orient="auto">
              <path d="M0,0 L8,3.2 L0,6.4 z" fill="var(--crm-ink)" />
            </marker>
            <marker id="crm-am" markerWidth="9" markerHeight="9" refX="8" refY="3.2" orient="auto">
              <path d="M0,0 L8,3.2 L0,6.4 z" fill="var(--crm-muted)" />
            </marker>
            <marker id="crm-aa" markerWidth="9" markerHeight="9" refX="8" refY="3.2" orient="auto">
              <path d="M0,0 L8,3.2 L0,6.4 z" fill="var(--crm-accent)" />
            </marker>
          </defs>

          {edges.map(function (e) {
            const st = STROKE[e.cls];
            const g = e.geo;
            const mx = (g.x1 + g.x2) / 2;
            const my = (g.y1 + g.y2) / 2;
            return (
              <React.Fragment key={e.key}>
                <path
                  d={'M ' + g.x1 + ' ' + g.y1 + ' L ' + g.x2 + ' ' + g.y2}
                  fill="none"
                  stroke={st.stroke}
                  strokeWidth="1.8"
                  strokeDasharray={st.dash}
                  markerEnd={'url(#' + st.marker + ')'}
                />
                <text className="crm-el" x={mx} y={my - 8} textAnchor="middle">
                  {String(e.raw.relation).toUpperCase()}
                </text>
                {e.raw.shortCondition ? (
                  <text className="crm-ec" x={mx} y={my + 9} textAnchor="middle">
                    {e.raw.shortCondition}
                  </text>
                ) : null}
              </React.Fragment>
            );
          })}

          {data.nodes.map(function (n) {
            return (
              <React.Fragment key={n.id}>
                <rect
                  x={n.x} y={n.y} width={n.w} height={n.h}
                  fill={n.anchor ? 'var(--crm-ink)' : (n.soft ? 'var(--crm-soft)' : 'var(--crm-paper)')}
                  stroke="var(--crm-ink)" strokeWidth="2"
                />
                <text
                  className={'crm-nl' + (n.anchor ? ' is-inv' : '')}
                  x={n.x + n.w / 2} y={n.y + 24} textAnchor="middle"
                >
                  {n.label}
                </text>
                {n.sub ? (
                  <text
                    className={'crm-ns' + (n.anchor ? ' is-inv' : '')}
                    x={n.x + n.w / 2} y={n.y + 42} textAnchor="middle"
                  >
                    {n.sub}
                  </text>
                ) : null}
              </React.Fragment>
            );
          })}
        </svg>
      </div>

      <div className="crm-led">
        <div className="crm-rh">
          <div>From</div>
          <div>Relation</div>
          <div>To</div>
          <div>Condition &mdash; the field that must be exact</div>
        </div>
        {edges.map(function (e) {
          return (
            <div key={e.key + '-row'} className="crm-row">
              <div className="crm-nn">{e.from.label}</div>
              <div className={'crm-rel r-' + e.cls}>{e.raw.relation}</div>
              <div className="crm-nn">{e.to.label}</div>
              <div className={'crm-cd' + (e.missingCondition ? ' is-missing' : '')}>
                {e.missingCondition
                  ? 'Condition not stated \u2014 the relation is asserted without its hypothesis.'
                  : processContent(e.raw.condition)}
              </div>
            </div>
          );
        })}
      </div>

      <div className="crm-legend">
        <span><i /> structural &mdash; special case, generalises</span>
        <span><i className="l-dep" /> dependency &mdash; requires, builds, solves</span>
        <span><i className="l-cond" /> conditional &mdash; coincides, iterates</span>
      </div>
    </div>
  );
}

export { THEMES as CRM_THEMES, RELATION_CLASS };
