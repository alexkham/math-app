// EquationVisualizer.jsx
// Public component for the f(x) = n visualizer. Same 4-file structure as
// the inequality visualizer: this file holds the STYLES, TypeTabs, keyboard
// shortcuts, and overall layout. Panels do the rest.

import React, { useEffect } from 'react';
import { useEquation, Xinv, G } from './logic.js';
import { TYPES } from './equation-types.js';
import { Hero, Controls, SignChart, Explanation, Tooltip } from './Panels.jsx';

const STYLES = `
:root{
  --bg:#f6f8fc; --panel:#fff; --ink:#0f172a; --muted:#64748b;
  --line:#e2e8f0; --line-soft:#eef2f7;
  --blue:#3b82f6; --blue2:#2563eb; --bl-d:#1e40af; --bl-bg:#eff6ff;
  --amber:#f59e0b; --amber-d:#b45309; --amber-bg:#fffbeb;
  --red:#ef4444;
  --shadow:0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.05);
  --font:'Inter',system-ui,-apple-system,sans-serif;
}
.eqv *{box-sizing:border-box;margin:0;padding:0}
.eqv{background:var(--bg);color:var(--ink);font-family:var(--font);padding:24px 20px;line-height:1.5;font-size:14px;min-height:100vh}
.eqv .wrap{max-width:1280px;margin:0 auto}

.eqv header{margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap}
.eqv .lede{color:var(--muted);font-size:12.5px}
.eqv .kbd-hint{font-size:11px;color:var(--muted)}
.eqv .kbd-hint kbd{font-family:ui-monospace,monospace;background:#fff;border:1px solid var(--line);border-bottom-width:2px;border-radius:4px;padding:0 5px;font-size:10.5px;color:var(--ink)}

.eqv .typebar{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}
.eqv .typebar button{padding:7px 13px;border:1px solid var(--line);background:#fff;border-radius:8px;font-family:var(--font);font-size:12.5px;font-weight:500;cursor:pointer;color:var(--muted);transition:.15s}
.eqv .typebar button:hover{color:var(--blue2);border-color:#bfdbfe}
.eqv .typebar button.on{background:var(--blue);color:#fff;border-color:var(--blue);font-weight:600;box-shadow:0 1px 3px rgba(59,130,246,.3)}

.eqv .main{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:14px;align-items:start}
.eqv .card{background:var(--panel);border:1px solid var(--line);border-radius:12px;box-shadow:var(--shadow)}
.eqv .card+.card{margin-top:12px}
.eqv .pad{padding:16px 18px}
.eqv .ct{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
.eqv .ct .ct-action{font-size:10.5px;text-transform:none;letter-spacing:0;color:var(--blue2);cursor:pointer;border:none;background:none;font-weight:600;font-family:var(--font)}
.eqv .ct .ct-action:hover{text-decoration:underline}

.eqv .hero .ineq{font-size:19px;font-weight:600;text-align:center;padding:4px 0 10px;letter-spacing:.2px;color:var(--ink)}
.eqv .hero .ineq .op{color:var(--amber-d);font-weight:700;margin:0 6px}
.eqv .hero .ineq .lhs{color:var(--ink)}
.eqv .hero .ineq .n-val{color:var(--blue2);font-weight:700}

.eqv .nl{position:relative}
.eqv .nl svg{width:100%;height:auto;display:block}
.eqv .diagram-wrap{position:relative}
.eqv .legend{position:absolute;top:8px;right:8px;display:flex;flex-direction:column;gap:5px;font-size:10px;color:var(--muted);background:rgba(255,255,255,.94);border:1px solid var(--line);border-radius:6px;padding:7px 9px;align-items:flex-start;box-shadow:0 2px 6px rgba(15,23,42,.05);z-index:5}
.eqv .legend .item{display:inline-flex;align-items:center;gap:5px;cursor:default;white-space:nowrap}
.eqv .legend .swatch{display:inline-block;width:10px;height:10px;border-radius:50%;flex-shrink:0}
.eqv .legend .bar{display:inline-block;width:14px;height:3px;border-radius:2px;flex-shrink:0}

.eqv .tp{margin-top:4px;font-size:12.5px;text-align:center;min-height:18px;color:var(--muted)}
.eqv .tp .yes{color:var(--blue2);font-weight:600}
.eqv .tp .no{color:var(--amber-d);font-weight:600}
.eqv .tp .stop-label{display:inline-block;background:var(--bl-bg);color:var(--blue2);font-weight:600;padding:1px 7px;border-radius:10px;margin-right:6px;font-size:11px}
.eqv .tp code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:var(--line-soft);padding:1px 5px;border-radius:3px;font-size:11.5px;color:var(--ink)}

.eqv .probe-row{display:flex;align-items:center;gap:14px;margin-top:10px;padding-top:12px;border-top:1px solid var(--line-soft);flex-wrap:wrap;justify-content:space-between}
.eqv .probe-row .probe{margin:0;padding:0;border:none;flex:0 1 auto;justify-content:flex-start}
.eqv .probe{display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap}
.eqv .mgroup{display:inline-flex;align-items:stretch;border:1px solid var(--line);border-radius:9px;background:#fff;overflow:hidden;transition:.15s}
.eqv .mgroup.on{border-color:var(--blue);box-shadow:0 0 0 3px rgba(59,130,246,.12)}
.eqv .mgroup .mbtn{padding:7px 14px;border:none;background:transparent;font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer;color:var(--muted);transition:.15s;display:flex;align-items:center;gap:5px}
.eqv .mgroup .mbtn:hover{color:var(--blue2)}
.eqv .mgroup.on .mbtn{background:var(--blue);color:#fff}
.eqv .mgroup .mdetail{display:flex;align-items:center;gap:6px;padding:0 10px;border-left:1px solid var(--line);background:var(--bl-bg);max-width:0;overflow:hidden;transition:max-width .25s ease, padding .25s ease}
.eqv .mgroup.on .mdetail{max-width:340px;padding:0 10px}
.eqv .mgroup:not(.on) .mdetail{border-left:none;padding:0}

.eqv .stepbtn,.eqv .playbtn{padding:5px 9px;border:1px solid #bfdbfe;background:#fff;border-radius:6px;font-family:var(--font);font-size:12px;font-weight:700;cursor:pointer;color:var(--blue2);transition:.15s}
.eqv .stepbtn:hover:not(:disabled),.eqv .playbtn:hover{background:var(--blue);color:#fff;border-color:var(--blue)}
.eqv .stepbtn:disabled{opacity:.35;cursor:not-allowed}
.eqv .playbtn{min-width:54px}
.eqv .speedwrap{display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--blue2);font-weight:600}
.eqv .speedwrap input[type=range]{width:70px;accent-color:var(--blue);height:3px}
.eqv .speedval{font-variant-numeric:tabular-nums;min-width:28px;text-align:right}

.eqv .clearbtn{padding:7px 12px;border:1px solid var(--line);background:#fff;border-radius:8px;font-family:var(--font);font-size:11.5px;font-weight:500;cursor:pointer;color:var(--muted);transition:.15s}
.eqv .clearbtn:hover{color:var(--blue2);border-color:#bfdbfe}

.eqv .pills{display:flex;gap:6px;flex:0 1 auto;min-width:0;justify-content:flex-end;flex-wrap:wrap;align-items:center}
.eqv .pill{background:var(--bl-bg);border-radius:8px;border:1px solid #dbeafe;cursor:default}
.eqv .pill.compact{display:inline-flex;align-items:baseline;gap:6px;padding:5px 10px;line-height:1.3;max-width:100%}
.eqv .pill.compact .k{font-size:9.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--blue2);font-weight:700;flex:0 0 auto}
.eqv .pill.compact .v{font-size:12px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}

.eqv .templates{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}
.eqv .templates button{padding:5px 10px;border:1px solid var(--line);background:#fff;border-radius:6px;font-family:var(--font);font-size:11.5px;font-weight:500;cursor:pointer;color:var(--muted);transition:.15s}
.eqv .templates button:hover{color:var(--blue2);border-color:#bfdbfe}
.eqv .templates button.on{border-color:var(--blue);color:var(--blue2);background:var(--bl-bg);font-weight:600}

.eqv .generic-form{font-family:ui-monospace,Menlo,monospace;font-size:12.5px;color:var(--blue2);background:var(--bl-bg);border:1px solid #dbeafe;border-radius:6px;padding:7px 10px;margin-bottom:6px;text-align:center;cursor:help}

.eqv .params-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:18px;row-gap:14px;margin-top:8px}
.eqv .params-grid > .ctrl{display:grid;grid-template-columns:1fr auto auto;grid-template-areas:"label chip kbd" "slider slider slider" "ticks ticks ticks";column-gap:8px;row-gap:5px;margin:0;padding:10px 2px 0;border:none;border-top:1px dashed var(--line-soft);min-width:0;align-items:center}
.eqv .params-grid > .ctrl > .tt-wrap:nth-of-type(1){grid-area:label;min-width:0;justify-self:start}
.eqv .params-grid > .ctrl > .ctrl-mid{grid-area:slider;min-width:0;display:block}
.eqv .params-grid > .ctrl > .val-chip{grid-area:chip;justify-self:end}
.eqv .params-grid > .ctrl > .tt-wrap:nth-of-type(2){grid-area:kbd;justify-self:end}
.eqv .params-grid > .ctrl > .ctrl-ticks{grid-area:ticks}
.eqv .params-grid > .ctrl > .ctrl-hint{grid-area:ticks;font-size:10.5px;color:var(--muted)}
.eqv .params-grid > .ctrl > .ctrl-err{grid-area:ticks;font-size:10.5px;color:#991b1b;font-weight:600;line-height:1.3;padding-top:1px}

.eqv .params-grid input[type=range]{width:100%;accent-color:var(--blue);height:2px;margin:0;display:block;padding:0}
.eqv .params-grid input[type=range]::-webkit-slider-runnable-track{height:2px;background:#cbd5e1;border-radius:1px}
.eqv .params-grid input[type=range]::-moz-range-track{height:2px;background:#cbd5e1;border-radius:1px}
.eqv .params-grid .ctrl-num{width:100%;font-family:var(--font);font-size:13px;font-variant-numeric:tabular-nums;border:1px solid var(--line);border-radius:6px;padding:4px 8px;background:#fff;color:var(--ink)}
.eqv .params-grid .ctrl-num:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 2px rgba(59,130,246,.15)}
.eqv .params-grid .ctrl-num.invalid{border-color:var(--red);background:#fef2f2;color:#991b1b;box-shadow:0 0 0 2px rgba(239,68,68,.15)}
.eqv .params-grid .ctrl-num.invalid:focus{border-color:var(--red);box-shadow:0 0 0 2px rgba(239,68,68,.25)}
.eqv .params-grid .ctrl.ctrl-error .val-chip{border-color:var(--red);color:#991b1b;background:#fef2f2}

.eqv .val-chip{display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:22px;padding:0 7px;border-radius:6px;font-size:12.5px;font-weight:700;font-variant-numeric:tabular-nums;border:1.5px solid var(--line);background:#fff;color:var(--muted)}
.eqv .val-chip.pos{border-color:var(--blue);color:var(--blue2);background:var(--bl-bg)}
.eqv .val-chip.neg{border-color:var(--amber);color:var(--amber-d);background:var(--amber-bg)}
.eqv .val-chip.zero{border-color:#cbd5e1;color:#64748b;background:#f8fafc;border-style:dashed}
.eqv .mode-toggle{width:22px;height:22px;border:1px solid var(--line);background:#fff;border-radius:5px;cursor:pointer;color:var(--muted);font-size:11px;display:grid;place-items:center;transition:.15s;padding:0}
.eqv .mode-toggle:hover{color:var(--blue2);border-color:#bfdbfe}
.eqv .mode-toggle.on{background:var(--blue);color:#fff;border-color:var(--blue)}

.eqv .ctrl-ticks{position:relative;height:16px;margin-top:1px;font-size:9.5px;color:#94a3b8;font-variant-numeric:tabular-nums}
.eqv .ctrl-ticks .tick{position:absolute;transform:translateX(-50%);top:4px;cursor:pointer;user-select:none;padding:0 1px;line-height:1}
.eqv .ctrl-ticks .tick:hover{color:var(--blue2)}
.eqv .ctrl-ticks .tick .mark{display:block;width:1px;height:4px;background:#cbd5e1;margin:0 auto 1px}
.eqv .ctrl-ticks .tick.zero{color:var(--ink);font-weight:700;font-size:10.5px;top:2px}
.eqv .ctrl-ticks .tick.zero .mark{width:2px;height:7px;background:var(--ink);margin-bottom:0;margin-top:-2px}
.eqv .ctrl-ticks .tick.current{color:var(--blue2);font-weight:700}
.eqv .ctrl-ticks .tick.current .mark{background:var(--blue)}

.eqv .reset-btn{margin-top:14px;padding:8px 14px;border:1px solid var(--line);background:#fff;border-radius:7px;font-family:var(--font);font-size:11.5px;font-weight:500;cursor:pointer;color:var(--muted);transition:.15s}
.eqv .reset-btn:hover{color:var(--amber-d);border-color:var(--amber)}

.eqv .side .card{font-size:12.5px}

.eqv table.sc{border-collapse:collapse;width:100%;font-size:11.5px;font-variant-numeric:tabular-nums}
.eqv table.sc td, .eqv table.sc th{border:1px solid var(--line);padding:5px 4px;text-align:center}
.eqv table.sc th{color:var(--muted);font-weight:600;font-size:10.5px;background:var(--line-soft)}
.eqv table.sc .rl{text-align:left;padding-left:7px;white-space:nowrap;font-weight:500;font-size:11px}
.eqv table.sc .sp{color:var(--blue2);font-weight:700}
.eqv table.sc .sn{color:var(--amber-d);font-weight:700}
.eqv table.sc .sz{color:var(--bl-d);font-weight:700;background:#dbeafe}
.eqv table.sc .prod td{background:var(--bl-bg);font-weight:700}
.eqv table.sc .critc{color:var(--bl-d);font-weight:700;background:#dbeafe;font-size:10.5px;cursor:pointer}
.eqv table.sc .critc:hover{background:#bfdbfe}
.eqv table.sc .interval-cell{cursor:pointer}
.eqv table.sc .interval-cell:hover{background:rgba(59,130,246,.06)}
.eqv table.sc .undef{color:var(--red);font-weight:700}

.eqv .explain-tabs{display:inline-flex;gap:4px}
.eqv .etab{padding:5px 11px;border:1px solid var(--line);background:#fff;border-radius:6px;font-family:var(--font);font-size:11px;font-weight:600;color:var(--muted);cursor:pointer;text-transform:none;letter-spacing:0;font-variant-numeric:tabular-nums;transition:.15s}
.eqv .etab:hover:not(.on){color:var(--blue2);border-color:#bfdbfe}
.eqv .etab.on{background:var(--blue);color:#fff;border-color:var(--blue)}

.eqv ol.steps{list-style:none;counter-reset:s;margin-top:4px}
.eqv ol.steps li{position:relative;padding:7px 0 7px 26px;border-bottom:1px solid var(--line-soft);font-size:12px;line-height:1.45}
.eqv ol.steps li:last-child{border-bottom:none;padding-bottom:0}
.eqv ol.steps li:first-child{padding-top:0}
.eqv ol.steps li::before{counter-increment:s;content:counter(s);position:absolute;left:0;top:6px;width:18px;height:18px;background:var(--blue);color:#fff;border-radius:50%;font-size:10px;font-weight:700;display:grid;place-items:center}
.eqv ol.steps li:first-child::before{top:-1px}
.eqv ol.steps b{color:var(--ink);font-weight:600}
.eqv ol.steps code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:var(--line-soft);padding:0 3px;border-radius:3px;font-size:11px;color:var(--ink)}

.eqv .live-head{font-size:12px;color:var(--muted);margin:4px 0 8px}
.eqv .live-head b{color:var(--blue2);font-variant-numeric:tabular-nums}
.eqv .live-tbl{width:100%;border-collapse:collapse;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:8px}
.eqv .live-tbl td{padding:4px 6px;vertical-align:middle;border-bottom:1px solid var(--line-soft)}
.eqv .live-tbl tr:last-child td{border-bottom:none}
.eqv .live-tbl .live-lbl{font-weight:500;color:var(--ink)}
.eqv .live-tbl .live-val{font-weight:600}
.eqv .live-tbl .live-val b{color:var(--ink)}
.eqv .live-tbl .sp{color:var(--blue2);font-weight:700;text-align:right;font-size:14px}
.eqv .live-tbl .sn{color:var(--amber-d);font-weight:700;text-align:right;font-size:14px}
.eqv .live-tbl .sz{color:var(--muted);font-weight:700;text-align:right;font-size:14px}
.eqv .live-conclude{font-size:12.5px;padding-top:8px;border-top:1px solid var(--line-soft);color:var(--ink)}
.eqv .live-conclude .yes{color:var(--blue2);font-weight:700}
.eqv .live-conclude .no{color:var(--amber-d);font-weight:700}
.eqv .verbal{margin-top:12px;padding:10px 12px;background:var(--line-soft);border-left:3px solid var(--blue);border-radius:4px;font-size:12px;line-height:1.55;color:var(--ink)}

.eqv .tt-wrap{position:relative;display:inline-block}
.eqv .tt{position:absolute;z-index:50;background:#0f172a;color:#fff;font-size:11px;line-height:1.4;padding:6px 9px;border-radius:5px;white-space:normal;max-width:240px;width:max-content;pointer-events:none;box-shadow:0 4px 10px rgba(0,0,0,.15)}
.eqv .tt::after{content:'';position:absolute;border:5px solid transparent}
.eqv .tt-top{bottom:calc(100% + 6px);left:50%;transform:translateX(-50%)}
.eqv .tt-top::after{top:100%;left:50%;transform:translateX(-50%);border-top-color:#0f172a}
.eqv .tt-bottom{top:calc(100% + 6px);left:50%;transform:translateX(-50%)}
.eqv .tt-bottom::after{bottom:100%;left:50%;transform:translateX(-50%);border-bottom-color:#0f172a}

@media (max-width:880px){ .eqv .main{grid-template-columns:1fr} }
`;

function TypeTabs({ iq }) {
  const { state, dispatch } = iq;
  return (
    <div className="typebar">
      {Object.values(TYPES).map(t => (
        <Tooltip key={t.id} content={t.description}>
          <button className={t.id === state.typeId ? 'on' : ''}
                  onClick={() => dispatch({ type: 'SET_TYPE', typeId: t.id })}>
            {t.label}
          </button>
        </Tooltip>
      ))}
    </div>
  );
}

export default function EquationVisualizer({
  initialType,
  initialParams,
}) {
  const iq = useEquation(TYPES, {
    initial: { typeId: initialType, p: initialParams },
  });

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT') return;
      const { state, dispatch, computed } = iq;
      const vr = computed.viewRange;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (state.mode !== 'drag') dispatch({ type: 'SET_MODE', mode: 'drag' });
        const d = (e.shiftKey ? 1 : 0.1) * (e.key === 'ArrowLeft' ? -1 : 1);
        const nx = Math.max(vr.lo, Math.min(vr.hi, state.marble + d));
        dispatch({ type: 'SET_MARBLE', x: nx });
      } else if (e.key === '[') {
        e.preventDefault();
        if (state.mode !== 'step') dispatch({ type: 'SET_MODE', mode: 'step' });
        const idx = Math.max(0, state.stepIdx - 1);
        dispatch({ type: 'SET_STEP_IDX', idx });
        dispatch({ type: 'SET_MARBLE', x: computed.stepStops[idx].x, noTrail: true });
      } else if (e.key === ']') {
        e.preventDefault();
        if (state.mode !== 'step') dispatch({ type: 'SET_MODE', mode: 'step' });
        const idx = Math.min(computed.stepStops.length - 1, state.stepIdx + 1);
        dispatch({ type: 'SET_STEP_IDX', idx });
        dispatch({ type: 'SET_MARBLE', x: computed.stepStops[idx].x, noTrail: true });
      } else if (e.key === ' ') {
        e.preventDefault();
        if (state.mode !== 'auto') dispatch({ type: 'SET_MODE', mode: 'auto' });
        else dispatch({ type: 'TOGGLE_PLAY' });
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        dispatch({ type: 'RESET' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [iq]);

  return (
    <div className="eqv">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="wrap">
        <header>
          <div className="lede">Drag the marble. Solutions are x where the curve hits level n. The sign chart shows where f(x) &minus; n is positive vs negative.</div>
          <div className="kbd-hint">
            <kbd>&larr;</kbd> <kbd>&rarr;</kbd> nudge &middot;{' '}
            <kbd>shift</kbd>+drag snap &middot;{' '}
            <kbd>[</kbd> <kbd>]</kbd> step &middot;{' '}
            <kbd>space</kbd> play &middot;{' '}
            <kbd>r</kbd> reset
          </div>
        </header>

        <TypeTabs iq={iq} />

        <div className="main">
          <div>
            <Hero iq={iq} />
            <Controls iq={iq} />
          </div>
          <div className="side">
            <div className="card pad">
              <div className="ct">Sign chart of f(x) &minus; n</div>
              <SignChart iq={iq} />
            </div>
            <div className="card pad">
              <Explanation iq={iq} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}