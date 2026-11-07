/*
  SpecialCases.jsx

  A general rule and its special cases. Four variants:
    substitute  the general formula, then what each substitution turns it into
    outcomes    the usual procedure, and the outcomes when it breaks
    boundary    values of a parameter, from ordinary to undefined; click a row for more
    map         the cases placed on a picture; hover to match

  Labels, theme and options come from data, with defaults.
  Precedence: defaults → props → data.
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const VARIANTS = ['substitute', 'outcomes', 'boundary', 'map'];

export const DEFAULT_LABELS = {
  general: 'General',
  set: 'Set',
  solutions: 'Solutions',
  more: 'more',
  less: 'less'
};

export const DEFAULT_THEME = {
  ink: '#1e293b',
  title: '#1e3a8a',
  muted: '#64748b',
  line: '#e2e8f0',
  box: '#c7cedb',
  panel: '#ffffff',
  soft: '#f8fafc',
  headBg: '#eff6ff',
  navy: '#1e3a8a',
  blue: '#2563eb',
  blueSoft: '#dbeafe',
  gold: '#ca8a04',
  goldBg: '#fef3c7',
  goldInk: '#a16207',
  slate: '#475569',
  slateBg: '#f1f5f9',
  axis: '#94a3b8',
  caseColors: ['#2563eb', '#1e3a8a', '#ca8a04', '#475569', '#1d4ed8', '#a16207'],
  caseInks: ['#2563eb', '#1e3a8a', '#a16207', '#475569', '#1d4ed8', '#a16207']
};

export const DEFAULT_OPTIONS = {
  arrow: '→',
  expandable: true,
  hover: true
};

const R = ({ t }) => (t == null || t === '' ? null : <span>{processContent(t)}</span>);

const cssVars = (th) => ({
  '--sc-ink': th.ink, '--sc-title': th.title, '--sc-muted': th.muted, '--sc-line': th.line, '--sc-box': th.box,
  '--sc-panel': th.panel, '--sc-soft': th.soft, '--sc-head': th.headBg, '--sc-navy': th.navy,
  '--sc-blue': th.blue, '--sc-blue-soft': th.blueSoft, '--sc-gold': th.gold, '--sc-gold-bg': th.goldBg,
  '--sc-gold-ink': th.goldInk, '--sc-slate': th.slate, '--sc-slate-bg': th.slateBg
});

const CSS = `
.sc-root { font-family: 'Inter', system-ui, sans-serif; color: var(--sc-ink); line-height: 1.45; }
.sc-root *, .sc-root *::before, .sc-root *::after { box-sizing: border-box; }
.sc-root .katex { text-transform: none; }
.sc-card { background: var(--sc-panel); border: 1.5px solid var(--sc-box); border-radius: 12px; overflow: hidden; }
.sc-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--sc-box); }
.sc-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--sc-blue); }
.sc-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--sc-title); letter-spacing: -.01em; }
.sc-lede { margin-top: 3px; font-size: 12.5px; color: var(--sc-muted); }
.sc-body { padding: 16px 20px 18px; background: var(--sc-soft); display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; }
.sc-box { background: var(--sc-panel); border: 1.5px solid var(--sc-box); border-radius: 10px; }
.sc-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--sc-muted); margin-bottom: 4px; }
.sc-math { font-family: 'STIX Two Text', serif; }
.sc-general { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 14px; align-items: center; padding: 10px 16px; border-left: 4px solid var(--sc-navy); }
.sc-general .sc-lbl { margin: 0; color: var(--sc-navy); }
.sc-general .sc-math { font-size: 17px; overflow-x: auto; }
.sc-general .sc-gs { font-size: 12px; color: var(--sc-muted); margin-top: 2px; }
.sc-note { padding: 10px 14px 12px; border-left: 4px solid var(--sc-blue); font-size: 12.5px; }
.sc-note .sc-lbl { color: var(--sc-blue); }
.sc-warn { padding: 10px 14px 12px; border-left: 4px solid var(--sc-gold); font-size: 12.5px; }
.sc-warn .sc-lbl { color: var(--sc-gold-ink); }
.sc-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ---------- substitute ---------- */
.sc-subs { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
.sc-sub { padding: 0; overflow: hidden; display: flex; flex-direction: column; }
.sc-sub-h { padding: 8px 12px; background: var(--sc-head); border-bottom: 1.5px solid var(--sc-box); display: flex; align-items: center; gap: 8px; }
.sc-set { font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--sc-blue); }
.sc-sub-h .sc-math { font-size: 14.5px; color: var(--sc-title); }
.sc-sub-f { padding: 12px; text-align: center; font-family: 'STIX Two Text', serif; font-size: 15px; overflow-x: auto; border-bottom: 1px dashed var(--sc-line); }
.sc-sub-n { padding: 4px 12px 0; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; color: var(--sc-gold-ink); }
.sc-sub-t { padding: 2px 12px 12px; font-size: 12.5px; flex: 1; }

/* ---------- outcomes ---------- */
.sc-out { display: grid; grid-template-columns: minmax(0, .7fr) minmax(0, 1.6fr); gap: 12px; align-items: start; }
.sc-out.sc-nopath { grid-template-columns: minmax(0, 1fr); }
.sc-path { padding: 10px 14px 12px; border-top: 4px solid var(--sc-slate); }
.sc-path ol { margin: 0; padding: 0; list-style: none; display: grid; gap: 6px; counter-reset: p; }
.sc-path li { counter-increment: p; display: grid; grid-template-columns: 20px minmax(0, 1fr); gap: 8px; font-size: 12.5px; align-items: start; }
.sc-path li::before { content: counter(p); width: 20px; height: 20px; border-radius: 50%; background: var(--sc-slate-bg); color: var(--sc-slate); font: 700 9.5px/20px 'JetBrains Mono', monospace; text-align: center; }
.sc-path li.sc-q::before { content: '?'; background: var(--sc-navy); color: #fff; }
.sc-path li.sc-q { font-weight: 600; color: var(--sc-title); }
.sc-branches { display: grid; grid-template-rows: auto auto; gap: 10px; }
.sc-br { display: grid; grid-template-columns: 120px minmax(0, 1fr) 90px; align-items: stretch; overflow: hidden; }
.sc-br.sc-noset { grid-template-columns: 120px minmax(0, 1fr); }
.sc-br > div { padding: 9px 12px; }
.sc-br > div + div { border-left: 1px solid var(--sc-line); }
.sc-br-when { background: var(--sc-soft); font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--sc-muted); display: flex; flex-direction: column; justify-content: center; }
.sc-br-when b { display: block; font: 800 14px 'Inter', sans-serif; letter-spacing: 0; text-transform: none; color: var(--sc-title); margin-top: 2px; }
.sc-br-ex { font-size: 12.5px; }
.sc-br-ex .sc-math { font-size: 14.5px; }
.sc-chain { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 8px; margin-bottom: 4px; }
.sc-chain i { font-style: normal; color: var(--sc-muted); font-size: 12px; }
.sc-br-set { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.sc-br-set .sc-math { font-size: 20px; color: var(--sc-title); }
.sc-br-set small { font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--sc-muted); }
.sc-br.normal { border-left: 4px solid var(--sc-slate); }
.sc-br.good { border-left: 4px solid var(--sc-blue); }
.sc-br.good .sc-br-set { background: var(--sc-head); }
.sc-br.bad { border-left: 4px solid var(--sc-gold); }
.sc-br.bad .sc-br-set { background: var(--sc-gold-bg); }
.sc-br.bad .sc-br-set .sc-math { color: var(--sc-gold-ink); }

/* ---------- boundary ---------- */
.sc-bd { overflow: hidden; }
.sc-bd-r { display: grid; grid-template-columns: 150px minmax(0, 1fr) minmax(0, 1.2fr); border-top: 1px solid var(--sc-line); transition: background .15s; }
.sc-bd-r.sc-click { cursor: pointer; }
.sc-bd-r.sc-click:focus-visible { outline: 2px solid var(--sc-blue); outline-offset: -2px; }
.sc-bd-r:first-child { border-top: 0; }
.sc-bd-r:hover { background: var(--sc-head); }
.sc-bd-r > div { padding: 10px 14px; }
.sc-bd-r > div + div { border-left: 1px solid var(--sc-line); }
.sc-bd-c { display: flex; flex-direction: column; justify-content: center; gap: 4px; }
.sc-bd-c .sc-math { font-size: 16px; color: var(--sc-title); }
.sc-pill { align-self: flex-start; font: 700 8.5px 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; padding: 2px 7px; border-radius: 999px; background: var(--sc-blue-soft); color: var(--sc-blue); }
.sc-bd-r.warn .sc-pill { background: var(--sc-gold-bg); color: var(--sc-gold-ink); }
.sc-bd-r.stop { background: var(--sc-slate-bg); }
.sc-bd-r.stop .sc-pill { background: var(--sc-slate); color: #fff; }
.sc-bd-res { display: flex; flex-direction: column; justify-content: center; }
.sc-bd-res .sc-rule { font-family: 'STIX Two Text', serif; font-size: 15.5px; }
.sc-bd-res .sc-exs { font-size: 12px; color: var(--sc-muted); margin-top: 3px; }
.sc-bd-why { font-size: 12.5px; color: var(--sc-ink); display: flex; align-items: center; }
.sc-bd-r .sc-more { display: none; }
.sc-bd-r.open .sc-more { display: block; margin-top: 6px; color: var(--sc-muted); }
.sc-tog { font: 600 10px 'Inter', sans-serif; color: var(--sc-blue); margin-left: 6px; }

/* ---------- map ---------- */
.sc-map { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr); gap: 12px; align-items: stretch; }
.sc-plane { padding: 8px; display: flex; align-items: center; justify-content: center; }
.sc-plane svg { width: 100%; max-width: 300px; height: auto; display: block; }
.sc-list { display: grid; gap: 8px; align-content: start; }
.sc-item { display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 10px; padding: 9px 12px; border: 1.5px solid var(--sc-box); border-radius: 10px; background: var(--sc-panel); transition: border-color .15s, background .15s; }
.sc-hov .sc-item { cursor: pointer; }
.sc-hov .sc-item:hover, .sc-item.on { border-color: var(--sc-blue); background: var(--sc-head); }
.sc-item .sc-k { width: 24px; height: 24px; border-radius: 50%; color: #fff; font: 700 10px/24px 'JetBrains Mono', monospace; text-align: center; }
.sc-item-h { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px; }
.sc-item-h b { font-size: 13.5px; color: var(--sc-title); }
.sc-item-h .sc-math { font-size: 14.5px; }
.sc-item-r { font-family: 'STIX Two Text', serif; font-size: 15px; margin-top: 2px; }
.sc-item-t { font-size: 12px; color: var(--sc-muted); margin-top: 2px; }

@media (max-width: 680px) {
  .sc-out, .sc-map, .sc-two { grid-template-columns: 1fr; }
  .sc-br { grid-template-columns: 1fr 80px; }
  .sc-br.sc-noset { grid-template-columns: 1fr; }
  .sc-br-when { grid-column: 1 / -1; }
  .sc-br > div + div { border-left: 0; }
  .sc-br-set { border-left: 1px solid var(--sc-line) !important; }
  .sc-bd-r { grid-template-columns: 1fr; }
  .sc-bd-r > div + div { border-left: 0; border-top: 1px dashed var(--sc-line); }
  .sc-general { grid-template-columns: 1fr; gap: 4px; }
}
`;

/* ---------- shared parts ---------- */
const General = ({ g, L }) =>
  g ? (
    <div className="sc-box sc-general">
      <span className="sc-lbl"><R t={g.label || L.general} /></span>
      <div>
        <div className="sc-math"><R t={g.text} /></div>
        {g.say && <div className="sc-gs"><R t={g.say} /></div>}
      </div>
    </div>
  ) : null;

const Notes = ({ data }) => {
  if (!data.note && !data.pitfall) return null;
  return (
    <div className={data.note && data.pitfall ? 'sc-two' : ''}>
      {data.note && <div className="sc-box sc-note"><span className="sc-lbl"><R t={data.note.label} /></span><R t={data.note.text} /></div>}
      {data.pitfall && <div className="sc-box sc-warn"><span className="sc-lbl"><R t={data.pitfall.label} /></span><R t={data.pitfall.text} /></div>}
    </div>
  );
};

/* ---------- substitute ---------- */
function Substitute({ data, L }) {
  return (
    <>
      <General g={data.general} L={L} />
      <div className="sc-subs">
        {data.cases.map((c, i) => (
          <div key={i} className="sc-box sc-sub">
            <div className="sc-sub-h"><span className="sc-set">{L.set}</span><span className="sc-math"><R t={c.when} /></span></div>
            <div className="sc-sub-f"><R t={c.result} /></div>
            {c.name && <div className="sc-sub-n"><R t={c.name} /></div>}
            <div className="sc-sub-t"><R t={c.text} /></div>
          </div>
        ))}
      </div>
      <Notes data={data} />
    </>
  );
}

/* ---------- outcomes ---------- */
function Outcomes({ data, L, O }) {
  const p = data.path;
  return (
    <>
      <General g={data.general} L={L} />
      <div className={'sc-out' + (p ? '' : ' sc-nopath')}>
        {p && (
          <div className="sc-box sc-path">
            {p.label && <span className="sc-lbl"><R t={p.label} /></span>}
            <ol>
              {p.steps.map((s, i) => (
                <li key={i} className={p.question !== false && i === p.steps.length - 1 ? 'sc-q' : ''}><span><R t={s} /></span></li>
              ))}
            </ol>
          </div>
        )}
        <div className="sc-branches">
          {data.cases.map((c, i) => (
            <div key={i} className={'sc-box sc-br ' + (c.tone || 'normal') + (c.set == null ? ' sc-noset' : '')}>
              <div className="sc-br-when"><R t={c.when} /><b><R t={c.name} /></b></div>
              <div className="sc-br-ex">
                {c.chain && c.chain.length > 0 && (
                  <div className="sc-chain">
                    {c.chain.map((x, j) => (
                      <React.Fragment key={j}>
                        {j > 0 && <i>{O.arrow}</i>}
                        <span className="sc-math"><R t={x} /></span>
                      </React.Fragment>
                    ))}
                  </div>
                )}
                <R t={c.text} />
              </div>
              {c.set != null && (
                <div className="sc-br-set"><small><R t={c.setLabel || L.solutions} /></small><span className="sc-math"><R t={c.set} /></span></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Notes data={data} />
    </>
  );
}

/* ---------- boundary ---------- */
function Boundary({ data, L, O }) {
  const [open, setOpen] = useState(null);
  return (
    <>
      <General g={data.general} L={L} />
      <div className="sc-box sc-bd">
        {data.cases.map((c, i) => {
          const can = O.expandable && !!c.more;
          const toggle = () => setOpen(open === i ? null : i);
          return (
            <div
              key={i}
              className={'sc-bd-r ' + (c.tone || '') + (can ? ' sc-click' : '') + (open === i ? ' open' : '')}
              onClick={can ? toggle : undefined}
              onKeyDown={can ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } } : undefined}
              role={can ? 'button' : undefined}
              tabIndex={can ? 0 : undefined}
              aria-expanded={can ? open === i : undefined}
            >
              <div className="sc-bd-c">
                <span className="sc-math"><R t={c.when} /></span>
                {c.tag && <span className="sc-pill"><R t={c.tag} /></span>}
              </div>
              <div className="sc-bd-res">
                <div className="sc-rule"><R t={c.rule} /></div>
                {c.examples && <div className="sc-exs"><R t={c.examples} /></div>}
              </div>
              <div className="sc-bd-why">
                <div>
                  <R t={c.why} />
                  {can && <span className="sc-tog">{open === i ? L.less : L.more}</span>}
                  {can && <div className="sc-more"><R t={c.more} /></div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Notes data={data} />
    </>
  );
}

/* ---------- map: the picture ---------- */
/*
  figure: {
    kind: 'plane',
    width?, height?, xUnit?, yUnit?,          // default 260 × 220, 14 px and 18 px per unit, origin at the centre
    xLabel?, yLabel?,                          // axis names, e.g. 'Re', 'Im'
    xAxisCase?, yAxisCase?, originCase?,       // which case each axis / the origin belongs to (index into cases)
    originLabel?,                              // default '0'
    points?: [{ x, y, label, case }]
  }
  or a React node / a function ({ on, setOn, theme }) => node for any other picture.
*/
function Plane({ fig, on, setOn, th, hover }) {
  const W = fig.width || 260, H = fig.height || 220;
  const cx = W / 2, cy = H / 2;
  const ux = fig.xUnit || 14, uy = fig.yUnit || 18;
  const col = (k) => th.caseColors[k % th.caseColors.length];
  const ink = (k) => th.caseInks[k % th.caseInks.length];
  const hi = (k) => k != null && on === k;
  const dim = (k) => (on == null || on === k ? 1 : 0.3);
  const ev = (k) => (hover && k != null ? { onMouseEnter: () => setOn(k), onMouseLeave: () => setOn(null) } : {});
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img">
      <line x1="16" y1={cy} x2={W - 16} y2={cy} stroke={hi(fig.xAxisCase) ? col(fig.xAxisCase) : th.axis} strokeWidth={hi(fig.xAxisCase) ? 3.5 : 1.4} {...ev(fig.xAxisCase)} />
      <line x1={cx} y1="14" x2={cx} y2={H - 14} stroke={hi(fig.yAxisCase) ? col(fig.yAxisCase) : th.axis} strokeWidth={hi(fig.yAxisCase) ? 3.5 : 1.4} {...ev(fig.yAxisCase)} />
      {fig.xLabel && <text x={W - 18} y={cy - 6} textAnchor="end" fontSize="11" fontFamily="STIX Two Text, serif" fill={th.muted}>{fig.xLabel}</text>}
      {fig.yLabel && <text x={cx + 6} y="22" fontSize="11" fontFamily="STIX Two Text, serif" fill={th.muted}>{fig.yLabel}</text>}
      {(fig.points || []).map((p, i) => (
        <g key={i} opacity={dim(p.case)} {...ev(p.case)}>
          <circle cx={cx + p.x * ux} cy={cy - p.y * uy} r="4" fill={col(p.case)} />
          <text
            x={cx + p.x * ux + (p.y ? 8 : 0)}
            y={cy - p.y * uy + (p.y ? 4 : 16)}
            textAnchor={p.y ? 'start' : 'middle'}
            fontSize="11"
            fontFamily="STIX Two Text, serif"
            fill={ink(p.case)}
          >
            {p.label}
          </text>
        </g>
      ))}
      {fig.originCase != null && (
        <g opacity={dim(fig.originCase)} {...ev(fig.originCase)}>
          <circle cx={cx} cy={cy} r={hi(fig.originCase) ? 7 : 5.5} fill={th.panel} stroke={col(fig.originCase)} strokeWidth="2.5" />
          <text x={cx - 8} y={cy + 16} textAnchor="end" fontSize="11" fontFamily="STIX Two Text, serif" fill={ink(fig.originCase)}>{fig.originLabel || '0'}</text>
        </g>
      )}
    </svg>
  );
}

function MapView({ data, L, O, th }) {
  const [on, setOn] = useState(null);
  const fig = data.figure;
  let pic = null;
  if (typeof fig === 'function') pic = fig({ on, setOn, theme: th });
  else if (React.isValidElement(fig)) pic = fig;
  else if (fig && (fig.kind || 'plane') === 'plane') pic = <Plane fig={fig} on={on} setOn={setOn} th={th} hover={O.hover} />;
  const col = (k) => th.caseColors[k % th.caseColors.length];
  return (
    <>
      <General g={data.general} L={L} />
      <div className={'sc-map' + (O.hover ? ' sc-hov' : '')}>
        <div className="sc-box sc-plane">{pic}</div>
        <div className="sc-list">
          {data.cases.map((c, i) => (
            <div
              key={i}
              className={'sc-item' + (on === i ? ' on' : '')}
              onMouseEnter={O.hover ? () => setOn(i) : undefined}
              onMouseLeave={O.hover ? () => setOn(null) : undefined}
            >
              <span className="sc-k" style={{ background: col(i) }}>{i + 1}</span>
              <div>
                <div className="sc-item-h"><b><R t={c.name} /></b><span className="sc-math"><R t={c.when} /></span></div>
                {c.rule && <div className="sc-item-r"><R t={c.rule} /></div>}
                {c.text && <div className="sc-item-t"><R t={c.text} /></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Notes data={data} />
    </>
  );
}

const VIEWS = { substitute: Substitute, outcomes: Outcomes, boundary: Boundary, map: MapView };

export default function SpecialCases({ data, variant = 'substitute', labels, theme, options }) {
  if (!data) return null;
  const L = { ...DEFAULT_LABELS, ...(labels || {}), ...(data.labels || {}) };
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const View = VIEWS[variant] || Substitute;
  const hd = data.header;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="sc-root" style={cssVars(th)}>
        <div className="sc-card">
          {hd && (
            <div className="sc-head">
              {hd.kicker && <div className="sc-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="sc-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="sc-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="sc-body"><View data={data} L={L} O={O} th={th} /></div>
        </div>
      </div>
    </>
  );
}
