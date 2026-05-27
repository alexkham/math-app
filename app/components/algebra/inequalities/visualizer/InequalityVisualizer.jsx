
import React, { useState, useEffect } from 'react';
import { useInequality, sel, Xinv, G } from './logic.js';
import { TYPES } from './inequality-types.js';
import { Hero, Controls, SignChart, Explanation, Tooltip } from './panels.jsx';
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
.iqv *{box-sizing:border-box;margin:0;padding:0}
.iqv{background:var(--bg);color:var(--ink);font-family:var(--font);padding:24px 20px;line-height:1.5;font-size:14px;min-height:100vh}
.iqv .wrap{max-width:1280px;margin:0 auto}
.iqv header{margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap}
.iqv h1{font-size:18px;font-weight:700;letter-spacing:-.01em}
.iqv .lede{color:var(--muted);font-size:12.5px;margin-top:2px}
.iqv .kbd-hint{font-size:11px;color:var(--muted)}
.iqv .kbd-hint kbd{font-family:ui-monospace,monospace;background:#fff;border:1px solid var(--line);border-bottom-width:2px;border-radius:4px;padding:0 5px;font-size:10.5px;color:var(--ink)}
.iqv .typebar{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}
.iqv .typebar button{padding:7px 13px;border:1px solid var(--line);background:#fff;border-radius:8px;font-family:var(--font);font-size:12.5px;font-weight:500;cursor:pointer;color:var(--muted);transition:.15s}
.iqv .typebar button:hover{color:var(--blue2);border-color:#bfdbfe}
.iqv .typebar button.on{background:var(--blue);color:#fff;border-color:var(--blue);font-weight:600;box-shadow:0 1px 3px rgba(59,130,246,.3)}
.iqv .main{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:14px;align-items:start}
.iqv .card{background:var(--panel);border:1px solid var(--line);border-radius:12px;box-shadow:var(--shadow)}
.iqv .card+.card{margin-top:12px}
.iqv .pad{padding:16px 18px}
.iqv .ct{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
.iqv .ct .ct-action{font-size:10.5px;text-transform:none;letter-spacing:0;color:var(--blue2);cursor:pointer;border:none;background:none;font-weight:600;font-family:var(--font)}
.iqv .ct .ct-action:hover{text-decoration:underline}
.iqv .hero .ineq{font-size:19px;font-weight:600;text-align:center;padding:4px 0 10px;letter-spacing:.2px;color:var(--ink)}
.iqv .hero .ineq .op{color:var(--amber-d);font-weight:700;margin:0 4px}
.iqv .hero .ineq .zero{color:var(--muted)}
.iqv .fac{display:inline-block;padding:1px 4px;margin:0 -1px;border-radius:4px;outline:1.5px solid transparent;transition:background .15s, outline-color .15s;cursor:pointer}
.iqv .fac:hover{background:var(--line-soft)}
.iqv .fac.hover{background:var(--bl-bg)}
.iqv .fac.focus{background:rgba(59,130,246,.18);outline-color:var(--blue)}
.iqv .fac.focus-pole{background:rgba(239,68,68,.16);outline-color:var(--red)}
.iqv .fac.focus-domain{background:rgba(245,158,11,.18);outline-color:var(--amber-d)}
.iqv .nl{position:relative}
.iqv .nl svg{width:100%;height:auto;display:block}
.iqv .diagram-wrap{position:relative}
.iqv .legend{position:absolute;top:8px;right:8px;display:flex;flex-direction:column;gap:5px;font-size:10px;color:var(--muted);background:rgba(255,255,255,.94);border:1px solid var(--line);border-radius:6px;padding:7px 9px;align-items:flex-start;box-shadow:0 2px 6px rgba(15,23,42,.05);z-index:5}
.iqv .legend .item{display:inline-flex;align-items:center;gap:5px;cursor:default;white-space:nowrap}
.iqv .legend .swatch{display:inline-block;width:10px;height:10px;border-radius:50%;flex-shrink:0}
.iqv .legend .bar{display:inline-block;width:14px;height:3px;border-radius:2px;flex-shrink:0}
.iqv .tp{margin-top:4px;font-size:12.5px;text-align:center;min-height:18px;color:var(--muted)}
.iqv .tp .yes{color:var(--blue2);font-weight:600}
.iqv .tp .no{color:var(--amber-d);font-weight:600}
.iqv .tp .stop-label{display:inline-block;background:var(--bl-bg);color:var(--blue2);font-weight:600;padding:1px 7px;border-radius:10px;margin-right:6px;font-size:11px}
.iqv .tp code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:var(--line-soft);padding:1px 5px;border-radius:3px;font-size:11.5px;color:var(--ink)}
/* ---- probe-row: ProbeRow + pills on one line ---- */
.iqv .probe-row{display:flex;align-items:center;gap:14px;margin-top:10px;padding-top:12px;border-top:1px solid var(--line-soft);flex-wrap:wrap;justify-content:space-between}
.iqv .probe-row .probe{margin:0;padding:0;border:none;flex:0 1 auto;justify-content:flex-start}
.iqv .probe{display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap}
.iqv .mgroup{display:inline-flex;align-items:stretch;border:1px solid var(--line);border-radius:9px;background:#fff;overflow:hidden;transition:.15s}
.iqv .mgroup.on{border-color:var(--blue);box-shadow:0 0 0 3px rgba(59,130,246,.12)}
.iqv .mgroup .mbtn{padding:7px 14px;border:none;background:transparent;font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer;color:var(--muted);transition:.15s;display:flex;align-items:center;gap:5px}
.iqv .mgroup .mbtn:hover{color:var(--blue2)}
.iqv .mgroup.on .mbtn{background:var(--blue);color:#fff}
.iqv .mgroup .mdetail{display:flex;align-items:center;gap:6px;padding:0 10px;border-left:1px solid var(--line);background:var(--bl-bg);max-width:0;overflow:hidden;transition:max-width .25s ease, padding .25s ease}
.iqv .mgroup.on .mdetail{max-width:340px;padding:0 10px}
.iqv .mgroup:not(.on) .mdetail{border-left:none;padding:0}
.iqv .stepbtn,.iqv .playbtn,.iqv .tourbtn{padding:5px 9px;border:1px solid #bfdbfe;background:#fff;border-radius:6px;font-family:var(--font);font-size:12px;font-weight:700;cursor:pointer;color:var(--blue2);transition:.15s}
.iqv .stepbtn:hover:not(:disabled),.iqv .playbtn:hover,.iqv .tourbtn:hover{background:var(--blue);color:#fff;border-color:var(--blue)}
.iqv .stepbtn:disabled{opacity:.35;cursor:not-allowed}
.iqv .tourbtn.on{background:var(--blue);color:#fff;border-color:var(--blue)}
.iqv .playbtn{min-width:54px}
.iqv .speedwrap{display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--blue2);font-weight:600}
.iqv .speedwrap input[type=range]{width:70px;accent-color:var(--blue);height:3px}
.iqv .speedval{font-variant-numeric:tabular-nums;min-width:28px;text-align:right}
.iqv .clearbtn{padding:7px 12px;border:1px solid var(--line);background:#fff;border-radius:8px;font-family:var(--font);font-size:11.5px;font-weight:500;cursor:pointer;color:var(--muted);transition:.15s}
.iqv .clearbtn:hover{color:var(--blue2);border-color:#bfdbfe}
/* ---- compact pills (now inline with probe) ---- */
.iqv .pills{display:flex;gap:6px;flex:0 1 auto;min-width:0;justify-content:flex-end;flex-wrap:wrap;align-items:center}
.iqv .pill{background:var(--bl-bg);border-radius:8px;border:1px solid #dbeafe;cursor:default}
.iqv .pill.compact{display:inline-flex;align-items:baseline;gap:6px;padding:5px 10px;line-height:1.3;max-width:100%}
.iqv .pill.compact .k{font-size:9.5px;text-transform:uppercase;letter-spacing:.06em;color:var(--blue2);font-weight:700;flex:0 0 auto}
.iqv .pill.compact .v{font-size:12px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
/* legacy stacked .readout/.pill kept for any other usage */
.iqv .readout{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
.iqv .pill .k{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--blue2);margin-bottom:2px;font-weight:600}
.iqv .pill .v{font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;word-break:break-word;color:var(--ink)}
.iqv .pill.compact .k{margin-bottom:0}
.iqv .pill.compact .v{font-size:12px}
.iqv .templates{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}
.iqv .templates button{padding:5px 10px;border:1px solid var(--line);background:#fff;border-radius:6px;font-family:var(--font);font-size:11.5px;font-weight:500;cursor:pointer;color:var(--muted);transition:.15s}
.iqv .templates button:hover{color:var(--blue2);border-color:#bfdbfe}
.iqv .templates button.on{border-color:var(--blue);color:var(--blue2);background:var(--bl-bg);font-weight:600}
.iqv .generic-form{font-family:ui-monospace,Menlo,monospace;font-size:12.5px;color:var(--blue2);background:var(--bl-bg);border:1px solid #dbeafe;border-radius:6px;padding:7px 10px;margin-bottom:6px;text-align:center;cursor:help}
.iqv .ctrl{margin-top:12px;padding-top:10px;border-top:1px dashed var(--line-soft)}
.iqv .ctrl:first-of-type{margin-top:6px;padding-top:0;border-top:none}
.iqv .ctrl-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;gap:8px}
.iqv .ctrl-label{font-size:12.5px;color:var(--muted);font-weight:500;cursor:help}
.iqv .ctrl-right{display:flex;align-items:center;gap:6px}
.iqv .val-chip{display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:22px;padding:0 7px;border-radius:6px;font-size:12.5px;font-weight:700;font-variant-numeric:tabular-nums;border:1.5px solid var(--line);background:#fff;color:var(--muted)}
.iqv .val-chip.pos{border-color:var(--blue);color:var(--blue2);background:var(--bl-bg)}
.iqv .val-chip.neg{border-color:var(--amber);color:var(--amber-d);background:var(--amber-bg)}
.iqv .val-chip.zero{border-color:#cbd5e1;color:#64748b;background:#f8fafc;border-style:dashed}
.iqv .mode-toggle{width:22px;height:22px;border:1px solid var(--line);background:#fff;border-radius:5px;cursor:pointer;color:var(--muted);font-size:11px;display:grid;place-items:center;transition:.15s;padding:0}
.iqv .mode-toggle:hover{color:var(--blue2);border-color:#bfdbfe}
.iqv .mode-toggle.on{background:var(--blue);color:#fff;border-color:var(--blue)}
.iqv .slider-block{position:relative;padding:0 2px}
.iqv .slider-block input[type=range]{width:100%;accent-color:var(--blue);height:4px;margin:0;display:block}
.iqv .ticks{position:relative;height:18px;margin-top:2px;font-size:9.5px;color:#94a3b8;font-variant-numeric:tabular-nums}
.iqv .tick{position:absolute;transform:translateX(-50%);top:5px;cursor:pointer;user-select:none;padding:0 1px}
.iqv .tick:hover{color:var(--blue2)}
.iqv .tick.zero{color:var(--ink);font-weight:700;font-size:10.5px;top:3px}
.iqv .tick .mark{display:block;width:1px;height:4px;background:#cbd5e1;margin:0 auto 1px}
.iqv .tick.zero .mark{width:2px;height:7px;background:var(--ink);margin-bottom:0;margin-top:-2px}
.iqv .tick.current{color:var(--blue2);font-weight:700}
.iqv .tick.current .mark{background:var(--blue)}
/* ---- params-grid: 3 sliders in one row ---- */
.iqv .params-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:18px;row-gap:14px;margin-top:8px}
.iqv .params-grid > .ctrl{display:grid;grid-template-columns:1fr auto auto;grid-template-areas:"label chip kbd" "slider slider slider" "ticks ticks ticks";column-gap:8px;row-gap:5px;margin:0;padding:10px 2px 0;border:none;border-top:1px dashed var(--line-soft);min-width:0;align-items:center}
.iqv .params-grid > .ctrl:first-of-type,
.iqv .params-grid > .ctrl:nth-child(2),
.iqv .params-grid > .ctrl:nth-child(3){padding-top:10px;margin-top:0}
.iqv .params-grid > .ctrl > .tt-wrap:nth-of-type(1){grid-area:label;min-width:0;justify-self:start}
.iqv .params-grid > .ctrl > .ctrl-mid{grid-area:slider;min-width:0;display:block}
.iqv .params-grid > .ctrl > .val-chip{grid-area:chip;justify-self:end}
.iqv .params-grid > .ctrl > .tt-wrap:nth-of-type(2){grid-area:kbd;justify-self:end}
.iqv .params-grid > .ctrl > .ctrl-ticks{grid-area:ticks}
.iqv .params-grid > .ctrl > .ctrl-hint{grid-area:ticks;font-size:10.5px;color:var(--muted)}
/* thinner slider in params grid */
.iqv .params-grid input[type=range]{width:100%;accent-color:var(--blue);height:2px;margin:0;display:block;padding:0}
.iqv .params-grid input[type=range]::-webkit-slider-runnable-track{height:2px;background:#cbd5e1;border-radius:1px}
.iqv .params-grid input[type=range]::-moz-range-track{height:2px;background:#cbd5e1;border-radius:1px}
.iqv .params-grid input[type=number]{width:100%;font-family:var(--font);font-size:13px;font-variant-numeric:tabular-nums;border:1px solid var(--line);border-radius:6px;padding:4px 8px;background:#fff;color:var(--ink)}
.iqv .params-grid input[type=number]:focus,
.iqv .params-grid input.ctrl-num:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 2px rgba(59,130,246,.15)}
.iqv .params-grid .ctrl-num{width:100%;font-family:var(--font);font-size:13px;font-variant-numeric:tabular-nums;border:1px solid var(--line);border-radius:6px;padding:4px 8px;background:#fff;color:var(--ink)}
.iqv .params-grid .ctrl-num.invalid{border-color:var(--red);background:#fef2f2;color:#991b1b;box-shadow:0 0 0 2px rgba(239,68,68,.15)}
.iqv .params-grid .ctrl-num.invalid:focus{border-color:var(--red);box-shadow:0 0 0 2px rgba(239,68,68,.25)}
.iqv .params-grid .ctrl-err{grid-area:ticks;font-size:10.5px;color:#991b1b;font-weight:600;line-height:1.3;padding-top:1px}
.iqv .params-grid .ctrl-hint{grid-area:ticks;font-size:10.5px;color:var(--muted)}
.iqv .params-grid .ctrl.ctrl-error .val-chip{border-color:var(--red);color:#991b1b;background:#fef2f2}
/* ctrl-ticks: parallel to .ticks but for the JSX class actually used */
.iqv .ctrl-ticks{position:relative;height:16px;margin-top:1px;font-size:9.5px;color:#94a3b8;font-variant-numeric:tabular-nums}
.iqv .ctrl-ticks .tick{position:absolute;transform:translateX(-50%);top:4px;cursor:pointer;user-select:none;padding:0 1px;line-height:1}
.iqv .ctrl-ticks .tick:hover{color:var(--blue2)}
.iqv .ctrl-ticks .tick .mark{display:block;width:1px;height:4px;background:#cbd5e1;margin:0 auto 1px}
.iqv .ctrl-ticks .tick.zero{color:var(--ink);font-weight:700;font-size:10.5px;top:2px}
.iqv .ctrl-ticks .tick.zero .mark{width:2px;height:7px;background:var(--ink);margin-bottom:0;margin-top:-2px}
.iqv .ctrl-ticks .tick.current{color:var(--blue2);font-weight:700}
.iqv .ctrl-ticks .tick.current .mark{background:var(--blue)}

.iqv .input-block{display:flex;align-items:center;gap:6px}
.iqv .input-block input[type=number]{flex:1;font-family:var(--font);font-size:13px;font-variant-numeric:tabular-nums;border:1px solid var(--line);border-radius:6px;padding:5px 8px;background:#fff;color:var(--ink);min-width:0}
.iqv .input-block input[type=number]:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 2px rgba(59,130,246,.15)}
.iqv .input-block .range-hint{font-size:10.5px;color:var(--muted);white-space:nowrap}
.iqv .toggles-row{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.iqv .toggles-row button{padding:8px 12px;border:1px solid var(--line);background:#fff;border-radius:7px;font-family:var(--font);font-size:11.5px;font-weight:500;cursor:pointer;color:var(--ink);transition:.15s}
.iqv .toggles-row button:hover{border-color:#bfdbfe;color:var(--blue2)}
.iqv .toggles-row button.on{background:var(--blue);color:#fff;border-color:var(--blue);font-weight:600}
.iqv .toggles-row .reset{color:var(--muted)}
.iqv .toggles-row .reset:hover{color:var(--amber-d);border-color:var(--amber)}
.iqv .toggles{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:14px}
.iqv .toggles button{padding:8px;border:1px solid var(--line);background:#fff;border-radius:7px;font-family:var(--font);font-size:11.5px;font-weight:500;cursor:pointer;color:var(--ink);transition:.15s}
.iqv .toggles button:hover{border-color:#bfdbfe;color:var(--blue2)}
.iqv .toggles button.on{background:var(--blue);color:#fff;border-color:var(--blue);font-weight:600}
.iqv .toggles .reset{color:var(--muted)}
.iqv .toggles .reset:hover{color:var(--amber-d);border-color:var(--amber)}
.iqv .side .card{font-size:12.5px}
.iqv table.sc{border-collapse:collapse;width:100%;font-size:11.5px;font-variant-numeric:tabular-nums}
.iqv table.sc td, .iqv table.sc th{border:1px solid var(--line);padding:5px 4px;text-align:center}
.iqv table.sc th{color:var(--muted);font-weight:600;font-size:10.5px;background:var(--line-soft)}
.iqv table.sc th.col-focus, .iqv table.sc td.col-focus{background:rgba(59,130,246,.16) !important;outline:1.5px solid var(--blue);outline-offset:-1.5px}
.iqv table.sc tr.prod td.col-focus{background:rgba(37,99,235,.28) !important}
.iqv table.sc .rl{text-align:left;padding-left:7px;white-space:nowrap;font-weight:500;font-size:11px;cursor:pointer}
.iqv table.sc .rl:hover{color:var(--blue2)}
.iqv table.sc .sp{color:var(--blue2);font-weight:700}
.iqv table.sc .sn{color:var(--muted);font-weight:700}
.iqv table.sc .sz{color:var(--amber-d);font-weight:700}
.iqv table.sc .prod td{background:var(--bl-bg);font-weight:700}
.iqv table.sc .critc{color:var(--bl-d);font-weight:700;background:#dbeafe;font-size:10.5px;cursor:pointer}
.iqv table.sc .critc:hover{background:#bfdbfe}
.iqv table.sc .interval-cell{cursor:pointer}
.iqv table.sc .interval-cell:hover{background:rgba(59,130,246,.06)}
.iqv table.sc .undef{color:var(--red);font-weight:700}
.iqv table.sc tr.row-hover{background:var(--bl-bg)}
.iqv .explain-tabs{display:inline-flex;gap:4px}
.iqv .etab{padding:5px 11px;border:1px solid var(--line);background:#fff;border-radius:6px;font-family:var(--font);font-size:11px;font-weight:600;color:var(--muted);cursor:pointer;text-transform:none;letter-spacing:0;font-variant-numeric:tabular-nums;transition:.15s}
.iqv .etab:hover:not(.on){color:var(--blue2);border-color:#bfdbfe}
.iqv .etab.on{background:var(--blue);color:#fff;border-color:var(--blue)}
.iqv ol.steps{list-style:none;counter-reset:s;margin-top:4px}
.iqv ol.steps li{position:relative;padding:7px 0 7px 26px;border-bottom:1px solid var(--line-soft);font-size:12px;line-height:1.45}
.iqv ol.steps li:last-child{border-bottom:none;padding-bottom:0}
.iqv ol.steps li:first-child{padding-top:0}
.iqv ol.steps li::before{counter-increment:s;content:counter(s);position:absolute;left:0;top:6px;width:18px;height:18px;background:var(--blue);color:#fff;border-radius:50%;font-size:10px;font-weight:700;display:grid;place-items:center}
.iqv ol.steps li:first-child::before{top:-1px}
.iqv ol.steps b{color:var(--ink);font-weight:600}
.iqv ol.steps code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:var(--line-soft);padding:0 3px;border-radius:3px;font-size:11px;color:var(--ink)}
.iqv .live-head{font-size:12px;color:var(--muted);margin:4px 0 8px}
.iqv .live-head b{color:var(--blue2);font-variant-numeric:tabular-nums}
.iqv .live-tbl{width:100%;border-collapse:collapse;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:8px}
.iqv .live-tbl tr{transition:background .15s;cursor:pointer}
.iqv .live-tbl tr:hover{background:var(--bl-bg)}
.iqv .live-tbl td{padding:4px 6px;vertical-align:middle;border-bottom:1px solid var(--line-soft)}
.iqv .live-tbl tr:last-child td{border-bottom:none}
.iqv .live-tbl .live-lbl{font-weight:500;color:var(--ink)}
.iqv .live-tbl .live-sub{color:var(--muted);font-size:11px}
.iqv .live-tbl .live-val{font-weight:600}
.iqv .live-tbl .live-val b{color:var(--ink)}
.iqv .live-tbl .sp{color:var(--blue2);font-weight:700;text-align:right;font-size:14px}
.iqv .live-tbl .sn{color:var(--amber-d);font-weight:700;text-align:right;font-size:14px}
.iqv .live-tbl .sz{color:var(--muted);font-weight:700;text-align:right;font-size:14px}
.iqv .live-tbl .undef{color:var(--red);font-weight:700;text-align:right}
.iqv .live-combine{font-size:12px;padding:8px 0;border-top:1px solid var(--line-soft);margin-bottom:6px;color:var(--muted)}
.iqv .live-combine .sp{color:var(--blue2);font-weight:700}
.iqv .live-combine .sn{color:var(--amber-d);font-weight:700}
.iqv .live-combine .sz{color:var(--muted);font-weight:700}
.iqv .live-conclude{font-size:12.5px;padding-top:8px;border-top:1px solid var(--line-soft);color:var(--ink)}
.iqv .live-conclude .yes{color:var(--blue2);font-weight:700}
.iqv .live-conclude .no{color:var(--amber-d);font-weight:700}
.iqv .live-conclude b{font-variant-numeric:tabular-nums}
.iqv .live-out{font-size:12.5px;padding:10px 12px;background:#fef2f2;border:1px solid #fecaca;border-radius:6px;color:#991b1b;margin-top:4px}
.iqv .live-out .no{color:#991b1b;font-weight:700}
.iqv .verbal{margin-top:12px;padding:10px 12px;background:var(--line-soft);border-left:3px solid var(--blue);border-radius:4px;font-size:12px;line-height:1.55;color:var(--ink)}
.iqv .tt-wrap{position:relative;display:inline-block}
.iqv .tt{position:absolute;z-index:50;background:#0f172a;color:#fff;font-size:11px;line-height:1.4;padding:6px 9px;border-radius:5px;white-space:normal;max-width:240px;width:max-content;pointer-events:none;box-shadow:0 4px 10px rgba(0,0,0,.15)}
.iqv .tt::after{content:'';position:absolute;border:5px solid transparent}
.iqv .tt-top{bottom:calc(100% + 6px);left:50%;transform:translateX(-50%)}
.iqv .tt-top::after{top:100%;left:50%;transform:translateX(-50%);border-top-color:#0f172a}
.iqv .tt-bottom{top:calc(100% + 6px);left:50%;transform:translateX(-50%)}
.iqv .tt-bottom::after{bottom:100%;left:50%;transform:translateX(-50%);border-bottom-color:#0f172a}
@media (max-width:880px){ .iqv .main{grid-template-columns:1fr} }
`;
function TypeTabs({ iq }) {
  const { state, dispatch, type } = iq;
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
export default function InequalityVisualizer({
  initialType,
  initialParams,
  initialStrict,
  initialDirection,
}) {
  const iqRaw = useInequality(TYPES, {
    initial: {
      typeId: initialType,
      p: initialParams,
      strict: initialStrict,
      dir: initialDirection,
    },
  });
  const [hoveredFactor, setHoveredFactor] = useState(null);
  const iq = { ...iqRaw, hoveredFactor, setHoveredFactor };
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT') return;
      const { state, dispatch, type, computed } = iqRaw;
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
        dispatch({ type: 'SET_MARBLE', x: computed.stepStops[idx].x });
      } else if (e.key === ']') {
        e.preventDefault();
        if (state.mode !== 'step') dispatch({ type: 'SET_MODE', mode: 'step' });
        const idx = Math.min(computed.stepStops.length - 1, state.stepIdx + 1);
        dispatch({ type: 'SET_STEP_IDX', idx });
        dispatch({ type: 'SET_MARBLE', x: computed.stepStops[idx].x });
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
  }, [iqRaw]);
  return (
    <div className="iqv">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="wrap">
        <header>
          <div>
            <div className="lede">Curve, sign chart, and explanation all sync to the marble&apos;s position. Click any factor, column, or row to navigate.</div>
          </div>
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
              <div className="ct">Sign chart</div>
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