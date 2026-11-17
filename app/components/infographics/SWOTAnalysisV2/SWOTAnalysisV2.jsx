/*
  SWOTAnalysisV2.jsx

  One thing looked at from four sides: four titled boxes of short points in a
  2 x 2 grid, with the thing itself named in the centre.

  New version of SWOTAnalysis.jsx (which stays as it is). What changed:
    - every text goes through processContent, so $maths$, **bold** and
      [links](!/path) work in titles, items and notes
    - site colours by default; every colour, label and setting comes from data
    - styles live in this file, no separate stylesheet
    - any number of instances on one page
    - optional column and row labels, for a two-by-two split by two conditions

  PROPS
    data      required, see below
    theme     optional partial theme, merged over DEFAULT_THEME
    tones     optional partial tone set, merged over DEFAULT_TONES
    options   optional partial options, merged over DEFAULT_OPTIONS
  Precedence: defaults -> props -> data (data.theme, data.tones, data.options win).

  DATA
    {
      header?:  { kicker?, title?, lede? },      // omit to hide (the page frame usually carries the title)
      center:   { name, sub? },                  // the round label in the middle
      axes?:    { cols?: [left, right], rows?: [top, bottom] },   // labels over the columns / beside the rows
      quadrants: [                               // exactly four, in reading order:
        {                                        //   top-left, top-right, bottom-left, bottom-right
          title,
          label?,                                // small label over the title, e.g. 'Quadrant II'
          tone?,                                 // a key of the tones; default: 'a', 'b', 'b', 'a' by position
          items: [ string | { text, note? } ],   // note = a muted second line
          say?                                   // a closing line for the box
        }
      ],
      note?:    { label, text },                 // a note under the grid
      theme?, tones?, options?
    }
*/

'use client';

import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export const DEFAULT_THEME = {
  ink: '#1e293b',
  title: '#06357A',
  muted: '#64748b',
  line: '#e2e8f0',
  box: '#c7cedb',
  panel: '#ffffff',
  soft: '#f8fafc',
  navy: '#06357A',
  blue: '#2563EB',
  onDark: '#ffffff',
  link: '#2563EB',
  shadow: 'rgba(37, 99, 235, .12)'
};

// one tone per box: the colour of its top edge, small label and bullets, and the tint of its heading
export const DEFAULT_TONES = {
  a: { color: '#06357A', bg: '#e8eef7' },
  b: { color: '#2563EB', bg: '#eff6ff' },
  c: { color: '#B45309', bg: '#fff6e5' },
  d: { color: '#475569', bg: '#f1f5f9' }
};

export const DEFAULT_OPTIONS = {
  hover: true,      // hovering a box outlines it and dims the others
  bullets: true,    // draw a bullet before each item
  counts: false     // show the number of items in each heading
};

const R = ({ t }) => (t == null || t === '' ? null : <span className="sw-in">{processContent(t)}</span>);

const cssVars = (th) => ({
  '--sw-ink': th.ink, '--sw-title': th.title, '--sw-muted': th.muted, '--sw-line': th.line, '--sw-box': th.box,
  '--sw-panel': th.panel, '--sw-soft': th.soft, '--sw-navy': th.navy, '--sw-blue': th.blue,
  '--sw-on-dark': th.onDark, '--sw-link': th.link, '--sw-shadow': th.shadow
});

const CSS = `
.sw-root { font-family: 'Inter', system-ui, sans-serif; color: var(--sw-ink); line-height: 1.45; }
.sw-root *, .sw-root *::before, .sw-root *::after { box-sizing: border-box; }
.sw-root .katex { text-transform: none; }
.sw-in br { display: none; }
.sw-in p { margin: 0; display: inline; }
.sw-root a { color: var(--sw-link); font-weight: 600; text-decoration: none; }
.sw-root a:hover { text-decoration: underline; }
.sw-card { background: var(--sw-panel); border: 1.5px solid var(--sw-box); border-radius: 12px; overflow: hidden; }
.sw-head { padding: 14px 20px 12px; border-bottom: 1.5px solid var(--sw-box); }
.sw-kicker { font: 700 10px 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--sw-blue); }
.sw-title { margin: 2px 0 0; font-size: 18px; font-weight: 800; color: var(--sw-title); letter-spacing: -.01em; }
.sw-lede { margin-top: 3px; font-size: 12.5px; color: var(--sw-muted); }
.sw-body { padding: 16px 20px 18px; background: var(--sw-soft); display: grid; gap: 12px; }
.sw-lbl { display: block; font: 700 9.5px 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--sw-muted); }

/* the frame: optional column labels on top, optional row labels on the left */
.sw-frame { display: grid; grid-template-columns: minmax(0, 1fr); gap: 6px; }
.sw-frame.rows { grid-template-columns: 26px minmax(0, 1fr); }
.sw-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; text-align: center; }
.sw-frame.rows .sw-cols { grid-column: 2; }
.sw-rows { display: grid; grid-template-rows: 1fr 1fr; gap: 12px; }
.sw-rows > span { display: flex; align-items: center; justify-content: center; }
.sw-rows > span { position: relative; min-height: 60px; }
.sw-rows > span > i { font-style: normal; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(-90deg); white-space: nowrap; }
.sw-axis { font-size: 12px; font-weight: 700; color: var(--sw-title); }

/* the grid of four, with the centre label on the crossing */
.sw-grid { position: relative; display: grid; grid-template-columns: 1fr 1fr; grid-auto-rows: 1fr; gap: 12px; }
.sw-q { background: var(--sw-panel); border: 1.5px solid var(--sw-box); border-top: 4px solid var(--sw-tone); border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; transition: opacity .15s, box-shadow .15s, border-color .15s; }
.sw-q.on { box-shadow: 0 2px 12px var(--sw-shadow); border-color: var(--sw-tone); }
.sw-q.dim { opacity: .4; }
.sw-q-h { padding: 8px 14px 7px; background: var(--sw-tone-bg); border-bottom: 1px solid var(--sw-line); display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.sw-q-h .sw-lbl { color: var(--sw-tone); margin-bottom: 1px; }
.sw-q-t { font-size: 14px; font-weight: 800; color: var(--sw-title); letter-spacing: -.01em; }
.sw-q-n { flex: none; font: 600 10px 'JetBrains Mono', monospace; color: var(--sw-muted); }
.sw-list { list-style: none; margin: 0; padding: 9px 14px 10px; display: grid; gap: 6px; flex: 1; align-content: start; }
.sw-it { position: relative; font-size: 12.5px; padding-left: 13px; }
.sw-list.plain .sw-it { padding-left: 0; }
.sw-it::before { content: ''; position: absolute; left: 0; top: .55em; width: 5px; height: 5px; border-radius: 50%; background: var(--sw-tone); }
.sw-list.plain .sw-it::before { display: none; }
.sw-it-n { display: block; font-size: 11.5px; color: var(--sw-muted); margin-top: 1px; }
.sw-say { font-size: 12px; color: var(--sw-muted); padding: 6px 14px 8px; border-top: 1px dashed var(--sw-line); background: var(--sw-soft); }
/* keep text clear of the centre label: the two top boxes get room below, the two bottom boxes room above */
.sw-q.top .sw-list, .sw-q.top .sw-say:last-child { padding-bottom: 22px; }
.sw-q.top .sw-list:not(:last-child) { padding-bottom: 10px; }
.sw-q.bot .sw-q-h { padding-top: 20px; }
.sw-core { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 2; max-width: 46%; padding: 7px 18px; border-radius: 999px; background: var(--sw-navy); color: var(--sw-on-dark); text-align: center; border: 3px solid var(--sw-soft); box-shadow: 0 1px 6px var(--sw-shadow); }
.sw-core b { display: block; font-size: 13.5px; line-height: 1.25; }
.sw-core small { display: block; font-size: 11px; opacity: .88; line-height: 1.3; }
.sw-core .katex { color: var(--sw-on-dark); }
.sw-note { background: var(--sw-panel); border: 1.5px solid var(--sw-box); border-left: 4px solid var(--sw-blue); border-radius: 10px; padding: 9px 14px; font-size: 12.5px; }
.sw-note .sw-lbl { color: var(--sw-blue); margin-bottom: 2px; }

@media (max-width: 640px) {
  .sw-body { padding: 12px; }
  .sw-frame.rows { grid-template-columns: minmax(0, 1fr); }
  .sw-cols, .sw-rows { display: none; }
  .sw-grid { grid-template-columns: 1fr; grid-auto-rows: auto; padding-top: 0; }
  .sw-core { position: static; transform: none; max-width: none; justify-self: center; order: -1; border-width: 0; }
  .sw-q.top .sw-list, .sw-q.top .sw-say:last-child { padding-bottom: 10px; }
  .sw-q.bot .sw-q-h { padding-top: 8px; }
}
`;

// default tone by position: navy and blue on the diagonals; amber ('c') and slate ('d') only when a box asks for them
const TONE_ORDER = ['a', 'b', 'b', 'a'];

export default function SWOTAnalysisV2({ data, theme, tones, options }) {
  const [on, setOn] = useState(null);
  if (!data || !Array.isArray(data.quadrants)) return null;
  const th = { ...DEFAULT_THEME, ...(theme || {}), ...(data.theme || {}) };
  const T = { ...DEFAULT_TONES, ...(tones || {}), ...(data.tones || {}) };
  const O = { ...DEFAULT_OPTIONS, ...(options || {}), ...(data.options || {}) };
  const hd = data.header;
  const ax = data.axes || {};
  const qs = data.quadrants.slice(0, 4);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="sw-root" style={cssVars(th)}>
        <div className="sw-card">
          {hd && (
            <div className="sw-head">
              {hd.kicker && <div className="sw-kicker"><R t={hd.kicker} /></div>}
              {hd.title && <h2 className="sw-title"><R t={hd.title} /></h2>}
              {hd.lede && <div className="sw-lede"><R t={hd.lede} /></div>}
            </div>
          )}
          <div className="sw-body">
            <div className={'sw-frame' + (ax.rows ? ' rows' : '')}>
              {ax.cols && (
                <div className="sw-cols">
                  <span className="sw-axis"><R t={ax.cols[0]} /></span>
                  <span className="sw-axis"><R t={ax.cols[1]} /></span>
                </div>
              )}
              {ax.rows && (
                <div className="sw-rows">
                  <span className="sw-axis"><i><R t={ax.rows[0]} /></i></span>
                  <span className="sw-axis"><i><R t={ax.rows[1]} /></i></span>
                </div>
              )}
              <div className="sw-grid">
                {qs.map((q, i) => {
                  const tone = T[q.tone] || T[TONE_ORDER[i]] || T.a;
                  const items = q.items || [];
                  return (
                    <div
                      key={i}
                      className={'sw-q ' + (i < 2 ? 'top' : 'bot') + (on === i ? ' on' : '') + (on != null && on !== i ? ' dim' : '')}
                      style={{ '--sw-tone': tone.color, '--sw-tone-bg': tone.bg }}
                      onMouseEnter={O.hover ? () => setOn(i) : undefined}
                      onMouseLeave={O.hover ? () => setOn(null) : undefined}
                    >
                      <div className="sw-q-h">
                        <div>
                          {q.label && <span className="sw-lbl"><R t={q.label} /></span>}
                          <div className="sw-q-t"><R t={q.title} /></div>
                        </div>
                        {O.counts && <span className="sw-q-n">{items.length}</span>}
                      </div>
                      <ul className={'sw-list' + (O.bullets ? '' : ' plain')}>
                        {items.map((it, j) => {
                          const text = typeof it === 'string' ? it : it.text;
                          const note = typeof it === 'string' ? null : it.note;
                          return (
                            <li key={j} className="sw-it">
                              <R t={text} />
                              {note && <span className="sw-it-n"><R t={note} /></span>}
                            </li>
                          );
                        })}
                      </ul>
                      {q.say && <div className="sw-say"><R t={q.say} /></div>}
                    </div>
                  );
                })}
                {data.center && (
                  <div className="sw-core">
                    <b><R t={data.center.name} /></b>
                    {data.center.sub && <small><R t={data.center.sub} /></small>}
                  </div>
                )}
              </div>
            </div>
            {data.note && (
              <div className="sw-note">
                <span className="sw-lbl"><R t={data.note.label} /></span>
                <R t={data.note.text} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
