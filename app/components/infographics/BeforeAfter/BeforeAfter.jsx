/*
  BeforeAfter.jsx

  A transformation infographic: one expression shown before and after an
  operation, either as a two-panel diptych or as a full step-by-step
  progression. Any box can carry an optional expandable part.

  ------------------------------------------------------------------
  CONTENT FORMAT
  ------------------------------------------------------------------
  Every text-bearing field is a plain string, passed through
  processContent, so the site markup applies as usual:

      $x^2 + 6x + 5$            inline KaTeX
      $$ ... $$                 display KaTeX
      **bold**                  bold
      @[code]@                  inline code
      [label](!/path)           internal link

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data     required object, shape:

    {
      header?: {
        kicker?: string,
        title:   string,
        lede?:   string
      },

      // DIPTYCH VARIANT reads `before`, `after`, `operation`, `notes`.
      // If only `steps` is supplied, the diptych uses the first and last
      // step as the two panels automatically.
      before?:    Panel,
      after?:     Panel,
      operation?: Operation,
      notes?:     Note[],

      // PROGRESSION VARIANT reads `steps`.
      // If only `before` / `after` are supplied, the progression renders
      // them as a two-step sequence with `operation` as the move between.
      steps?: Step[],

      // Optional wording for everything the component writes itself.
      // Merged over DEFAULT_LABELS (exported).
      labels?: Labels
    }

    Panel = {
      stamp?:  string,          // corner label, default labels.before / labels.after
      form?:   string,          // what this form is called, e.g. 'Standard form'
      expr:    string,          // the expression itself
      meta?:   string,          // one line on what this form is good for
      ...Expandable
    }

    Operation = {
      name:  string,            // the move, e.g. 'Complete the square'
      desc?: string,            // detail, e.g. 'Add and subtract $(b/2)^2 = 9$'
      ...Expandable
    }

    Note = {
      id:    string,
      badge: string,            // e.g. 'What changed'
      body:  string,
      tone?: 'accent' | 'warm', // default 'accent'
      ...Expandable
    }

    Step = {
      id:     string,
      label:  string,           // what this line is, e.g. 'Grouped'
      expr:   string,
      stamp?: string,           // optional corner label
      ...Expandable,
      move?:  {                 // the move that leads to the NEXT step;
        label: string,          // omit on the final step
        note?: string,
        ...Expandable
      }
    }

    Expandable = {              // all optional. No `details` -> no toggle.
      details?:      string | string[] | ReactNode,
                                // string[] renders one paragraph per entry
      detailsLabel?: string,    // toggle text       (default per box, see Labels)
      detailsTitle?: string     // heading inside the opened part
                                //                   (default per box, see Labels;
                                //                    '' hides the heading)
    }

    Labels = {                  // every key optional
      hide,                     // toggle text while open               'Hide'
      close,                    // aria-label of the drawer close button 'Close'
      before, after, move,      // stamps / drawer tags                  'Before' 'After' 'Move'
      panelToggle,     panelTitle,      // panels                       'Details'
      operationToggle, operationTitle,  // the operation arrow          'Working'
      noteToggle,      noteTitle,       // notes                        'More'
      stepToggle,      stepTitle,       // progression step cards       'Details'
      moveToggle,      moveTitle        // progression moves            'Working'
    }

    Resolution for one box:
      toggle text   = box.detailsLabel ?? labels.<box>Toggle
      heading       = box.detailsTitle ?? labels.<box>Title      ('' = no heading)
      drawer title  = box.detailsTitle ?? the panel form / operation name

  variant  'diptych' | 'progression'   (default: 'diptych')

  expand   'inline' | 'drawer'         (default: 'inline')
             inline  each box opens in place; several can be open at once
             drawer  diptych: one shared drawer under the panels, a caret
                     points at the source box
                     progression: one step open at a time, as an attached
                     box under the card
             Notes and moves always open inline.

  theme    optional partial theme, merged over DEFAULT_THEME (exported).
*/

import React, { useState, useRef, useEffect } from 'react';

import { processContent } from '@/app/utils/contentProcessor';

/* ------------------------------------------------------------------ */
/*  theme + labels                                                     */
/* ------------------------------------------------------------------ */

export const DEFAULT_THEME = {
  bg:          '#ffffff',
  panel:       '#ffffff',
  panelSoft:   '#eef2ff',
  panelSofter: '#f8faff',
  ink:         '#1f2937',
  title:       '#1e3a8a',
  muted:       '#6b7280',
  line:        '#e5e7eb',
  box:         '#c7cedb',   // box borders
  accent:      '#4f46e5',
  warm:        '#d97706',
  indigoSoft:  '#e0e7ff',
  warmSoft:    '#fef3c7',
};

export const DEFAULT_LABELS = {
  hide:            'Hide',
  close:           'Close',
  before:          'Before',
  after:           'After',
  move:            'Move',
  panelToggle:     'Details',
  panelTitle:      'Details',
  operationToggle: 'Working',
  operationTitle:  'Working',
  noteToggle:      'More',
  noteTitle:       'More',
  stepToggle:      'Details',
  stepTitle:       'Details',
  moveToggle:      'Working',
  moveTitle:       'Working',
};

const cssVars = (t) => ({
  '--ba-bg':           t.bg,
  '--ba-panel':        t.panel,
  '--ba-panel-soft':   t.panelSoft,
  '--ba-panel-softer': t.panelSofter,
  '--ba-ink':          t.ink,
  '--ba-title':        t.title,
  '--ba-muted':        t.muted,
  '--ba-line':         t.line,
  '--ba-box':          t.box,
  '--ba-accent':       t.accent,
  '--ba-warm':         t.warm,
  '--ba-indigo-soft':  t.indigoSoft,
  '--ba-warm-soft':    t.warmSoft,
});

/* ------------------------------------------------------------------ */
/*  styles                                                             */
/* ------------------------------------------------------------------ */

const CSS = `
.ba-root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--ba-ink);
  line-height: 1.5;
  /* the stacked layout follows the room the card has, not the window:
     a page with a sidebar can leave a narrow column on a wide screen */
  container-type: inline-size;
}
.ba-root .ba-card {
  background: var(--ba-bg);
  border: 1px solid var(--ba-line);
  border-radius: 8px;
  overflow: hidden;
}

/* processContent emits <br/> after single-line input; the boxes here own
   their spacing, so suppress it. */
.ba-root .ba-inline br { display: none; }
.ba-root .ba-inline p  { margin: 0; }

/* ---- head ---- */
.ba-root .ba-head {
  padding: 26px 32px 20px;
  border-bottom: 1px solid var(--ba-line);
}
.ba-root .ba-head .ba-kicker {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--ba-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.ba-root .ba-head h2 {
  font-size: 24px; font-weight: 800;
  color: var(--ba-title); margin: 0;
  letter-spacing: -0.01em;
}
.ba-root .ba-head .ba-lede {
  color: var(--ba-muted);
  font-size: 13px;
  margin-top: 6px;
  max-width: 640px;
}

/* ================================================================= */
/*  DIPTYCH VARIANT                                                    */
/* ================================================================= */

.ba-root .ba-arena {
  padding: 40px 32px 32px;
  background: var(--ba-panel-softer);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 24px;
  align-items: stretch;
  transition: padding-bottom 0.22s ease;
}
.ba-root .ba-panel {
  background: var(--ba-panel);
  border: 1px solid var(--ba-line);
  border-radius: 8px;
  padding: 26px 24px 22px;
  display: flex; flex-direction: column; align-items: center; gap: 14px;
  text-align: center;
}
.ba-root .ba-panel .ba-stamp {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 3px;
  color: #ffffff;
}
.ba-root .ba-panel.ba-before .ba-stamp { background: var(--ba-muted); }
.ba-root .ba-panel.ba-after  .ba-stamp { background: var(--ba-accent); }

.ba-root .ba-panel .ba-form {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--ba-muted);
  letter-spacing: 0.1em;
}
.ba-root .ba-panel .ba-expr {
  font-family: 'Inter', serif;
  font-size: 28px;
  color: var(--ba-ink);
  padding: 8px 4px;
}
.ba-root .ba-panel.ba-after .ba-expr { color: var(--ba-title); }
.ba-root .ba-panel .ba-expr .katex { font-size: 1em; }
/* an expression never breaks across lines (KaTeX would break after = or +) */
.ba-root .ba-panel .ba-expr .katex,
.ba-root .ba-step .ba-cexpr .katex { white-space: nowrap; }

.ba-root .ba-panel .ba-meta {
  font-size: 12px;
  color: var(--ba-muted);
  margin-top: auto;
  padding-top: 8px;
}

.ba-root .ba-arrow {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 10px;
  padding: 0 6px;
  min-width: 170px;
  max-width: 220px;   /* a long move description wraps here instead of squeezing the panels */
}
.ba-root .ba-arrow .ba-op-name {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ba-warm);
  font-weight: 700;
  text-align: center;
}
.ba-root .ba-arrow .ba-op-desc {
  font-size: 12px;
  color: var(--ba-muted);
  text-align: center;
  line-height: 1.4;
}
.ba-root .ba-arrow svg.ba-arr-h { width: 100%; height: 36px; display: block; }
.ba-root .ba-arrow svg.ba-arr-v { display: none; width: 28px; height: 44px; }

.ba-root .ba-notes {
  padding: 20px 32px 26px;
  display: grid;
  gap: 20px;
  border-top: 1px solid var(--ba-line);
}
.ba-root .ba-note {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;
}
.ba-root .ba-note .ba-nbadge {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 3px;
  color: var(--ba-title);
  background: var(--ba-indigo-soft);
  white-space: nowrap;
  align-self: start;
}
.ba-root .ba-note.ba-warm .ba-nbadge {
  color: var(--ba-warm);
  background: var(--ba-warm-soft);
}
.ba-root .ba-note .ba-nbody {
  font-size: 12.5px;
  color: var(--ba-ink);
  line-height: 1.55;
}

/* ================================================================= */
/*  PROGRESSION VARIANT                                                */
/* ================================================================= */

.ba-root .ba-track {
  padding: 32px 40px 36px;
  background: var(--ba-panel-softer);
}
.ba-root .ba-step {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 20px;
  align-items: start;
  position: relative;
}
.ba-root .ba-step + .ba-step { margin-top: 26px; }

.ba-root .ba-step .ba-numcol {
  display: flex; flex-direction: column; align-items: center;
  padding-top: 4px;
  align-self: stretch;
}
.ba-root .ba-step .ba-num {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 700; font-size: 12px;
  color: #ffffff;
  background: var(--ba-accent);
  position: relative; z-index: 2;
  flex: none;
}
.ba-root .ba-step.ba-first .ba-num { background: var(--ba-muted); }
.ba-root .ba-step.ba-last  .ba-num { background: var(--ba-title); }

.ba-root .ba-step .ba-connector {
  flex: 1;
  width: 2px;
  background: var(--ba-line);
  margin: 6px 0 -6px;
  min-height: 60px;
}
.ba-root .ba-step.ba-last .ba-connector { display: none; }

.ba-root .ba-step .ba-content {
  background: var(--ba-panel);
  border: 1px solid var(--ba-line);
  border-radius: 6px;
  overflow: hidden;
}
.ba-root .ba-step.ba-last .ba-content { border: 1.5px solid var(--ba-title); }

.ba-root .ba-step .ba-ctop {
  padding: 10px 16px;
  display: flex; align-items: center; justify-content: space-between;
  background: var(--ba-panel-softer);
  border-bottom: 1px solid var(--ba-line);
}
.ba-root .ba-step.ba-last .ba-ctop {
  background: var(--ba-indigo-soft);
  border-bottom-color: var(--ba-accent);
}
.ba-root .ba-step .ba-clabel {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ba-accent);
  font-weight: 600;
}
.ba-root .ba-step.ba-first .ba-clabel { color: var(--ba-muted); }
.ba-root .ba-step.ba-last  .ba-clabel { color: var(--ba-title); }

.ba-root .ba-step .ba-cstamp {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 3px;
  background: var(--ba-muted);
  color: #ffffff;
}
.ba-root .ba-step.ba-last .ba-cstamp { background: var(--ba-title); }

.ba-root .ba-step .ba-cexpr {
  padding: 18px 20px;
  font-family: 'Inter', serif;
  font-size: 20px;
  color: var(--ba-ink);
  text-align: center;
}
.ba-root .ba-step.ba-last .ba-cexpr {
  color: var(--ba-title);
  font-weight: 700;
}
.ba-root .ba-step .ba-cexpr .katex { font-size: 1em; }

.ba-root .ba-step .ba-move {
  grid-column: 2;
  display: flex; align-items: center; gap: 10px;
  padding: 10px 0 0 4px;
  font-size: 12px;
  color: var(--ba-muted);
  flex-wrap: wrap;
}
.ba-root .ba-step .ba-move .ba-marrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--ba-warm-soft);
  color: var(--ba-warm);
  font-weight: 700;
  flex: none;
}
.ba-root .ba-step .ba-move .ba-mlabel {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--ba-warm);
  letter-spacing: 0.05em;
}
.ba-root .ba-step .ba-move .ba-mnote { color: var(--ba-muted); }

@media (max-width: 720px) {
  .ba-root .ba-arena {
    grid-template-columns: 1fr;
    padding: 28px 20px 24px;
  }
  .ba-root .ba-arrow { min-width: 0; max-width: none; }
  .ba-root .ba-arrow svg.ba-arr-h { display: none; }
  .ba-root .ba-arrow svg.ba-arr-v { display: block; }
  .ba-root .ba-notes { grid-template-columns: 1fr !important; }
  .ba-root .ba-track { padding: 24px 20px 28px; }
}

/* ================================================================= */
/*  EXPANDABLE PARTS                                                   */
/* ================================================================= */

.ba-root .ba-xbtn {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--ba-accent);
  background: var(--ba-panel);
  border: 1px solid var(--ba-indigo-soft);
  border-radius: 999px;
  padding: 4px 10px 4px 8px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.ba-root .ba-xbtn:hover { background: var(--ba-panel-soft); border-color: var(--ba-accent); }
.ba-root .ba-xbtn .ba-chev {
  display: inline-block; width: 0; height: 0;
  border-left: 4px solid transparent; border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
  transition: transform 0.18s;
}
.ba-root .ba-xbtn.ba-open .ba-chev { transform: rotate(180deg); }
.ba-root .ba-xbtn.ba-open { background: var(--ba-accent); color: #ffffff; border-color: var(--ba-accent); }
.ba-root .ba-xbtn.ba-sm { font-size: 9px; padding: 2px 8px 2px 6px; }

/* collapsible shell: grid-rows trick for a smooth height animation */
.ba-root .ba-coll { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.22s ease; }
.ba-root .ba-coll.ba-open { grid-template-rows: 1fr; }
.ba-root .ba-coll > .ba-coll-in { overflow: hidden; min-height: 0; }
/* closed parts leave the tab order and the accessibility tree; visibility
   switches only after the closing animation, so the close still animates */
.ba-root .ba-coll > .ba-coll-in { visibility: hidden; transition: visibility 0s linear 0.22s; }
.ba-root .ba-coll.ba-open > .ba-coll-in { visibility: visible; transition-delay: 0s; }

.ba-root .ba-xbody {
  font-size: 12.5px; line-height: 1.55;
  color: var(--ba-ink);
  text-align: left;
}
.ba-root .ba-xbody .katex-display { margin: 6px 0; }
.ba-root .ba-xtitle {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--ba-accent);
  margin-bottom: 6px;
}
.ba-root .ba-opstrip .ba-xtitle,
.ba-root .ba-step .ba-mx .ba-xtitle { color: var(--ba-warm); }

/* inline: inside a panel, bleeding to the panel edges */
.ba-root .ba-panel .ba-xwrap { align-self: stretch; margin: 2px -24px -22px; }
.ba-root .ba-panel .ba-xbody {
  border-top: 1px dashed var(--ba-line);
  background: var(--ba-panel-softer);
  padding: 12px 18px 14px;
}
.ba-root .ba-panel .ba-xfoot { margin-top: auto; padding-top: 6px; }
.ba-root .ba-panel .ba-meta + .ba-xfoot { margin-top: 0; }

/* inline: operation details as a strip under the arena */
.ba-root .ba-opstrip {
  margin: 0 32px;
}
.ba-root .ba-opstrip .ba-xbody {
  margin: 0 0 24px;
  background: var(--ba-panel);
  border: 1px solid var(--ba-line);
  border-left: 4px solid var(--ba-warm);
  border-radius: 6px;
  padding: 12px 16px;
}
.ba-root .ba-arena.ba-has-strip { padding-bottom: 20px; }

/* drawer: one shared panel under the arena */
.ba-root .ba-drawer { padding: 0 32px; background: var(--ba-panel-softer); }
/* the caret's left edge is measured from the source box (see Diptych) */
.ba-root .ba-drawer-caret { position: relative; height: 12px; }
.ba-root .ba-drawer-caret.ba-unmeasured { visibility: hidden; }
.ba-root .ba-drawer-caret::after {
  content: ''; position: absolute; left: var(--ba-caret-x, 50%); bottom: -1px;
  transform: translateX(-50%);
  border-left: 9px solid transparent; border-right: 9px solid transparent;
  border-bottom: 10px solid var(--ba-drawer-c, var(--ba-accent));
}
.ba-root .ba-drawer-box {
  border: 1px solid var(--ba-line);
  border-top: 3px solid var(--ba-drawer-c, var(--ba-accent));
  border-radius: 8px;
  background: var(--ba-panel);
  margin-bottom: 26px;
}
.ba-root .ba-drawer-head {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 16px;
  border-bottom: 1px solid var(--ba-line);
}
.ba-root .ba-drawer-tag {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: #ffffff; background: var(--ba-drawer-c, var(--ba-accent));
  padding: 2px 8px; border-radius: 3px;
}
.ba-root .ba-drawer-title { font-size: 13px; font-weight: 700; color: var(--ba-title); }
.ba-root .ba-drawer-x {
  margin-left: auto; border: none; background: none; cursor: pointer;
  font-size: 16px; line-height: 1; color: var(--ba-muted); padding: 2px 4px;
}
.ba-root .ba-drawer-box .ba-xbody { padding: 12px 16px 14px; }
.ba-root .ba-panel.ba-active { border-color: var(--ba-accent); box-shadow: 0 0 0 3px var(--ba-indigo-soft); }
.ba-root .ba-arrow.ba-active .ba-op-name { text-decoration: underline; text-underline-offset: 4px; }
.ba-root .ba-arena.ba-drawer-open { padding-bottom: 0; }

/* notes */
.ba-root .ba-note .ba-nfoot { margin-top: 8px; }
.ba-root .ba-note .ba-xbody {
  margin-top: 8px;
  padding: 10px 12px;
  background: var(--ba-panel-softer);
  border: 1px solid var(--ba-line);
  border-radius: 6px;
}

/* progression: collapsed rows must not add grid gap */
.ba-root .ba-step { row-gap: 0; }
.ba-root .ba-step .ba-move { padding-top: 30px; }

/* progression: step details */
.ba-root .ba-step .ba-cfoot {
  display: flex; justify-content: center;
  padding: 0 16px 12px;
  margin-top: -6px;
}
.ba-root .ba-step .ba-cxbody {
  border-top: 1px dashed var(--ba-line);
  background: var(--ba-panel-softer);
  padding: 12px 18px 14px;
}
/* drawer style for progression: attached box under the card */
.ba-root .ba-step .ba-attach { grid-column: 2; }
.ba-root .ba-step .ba-attach .ba-xbody {
  position: relative;
  margin-top: 10px;
  background: var(--ba-panel);
  border: 1px solid var(--ba-line);
  border-left: 4px solid var(--ba-accent);
  border-radius: 6px;
  padding: 12px 16px;
}
.ba-root .ba-step .ba-attach .ba-xbody::before {
  content: ''; position: absolute; top: -7px; left: 50%;
  width: 12px; height: 12px; background: var(--ba-panel);
  border-left: 1px solid var(--ba-line); border-top: 1px solid var(--ba-line);
  transform: translateX(-50%) rotate(45deg);
}
.ba-root .ba-step.ba-xopen .ba-content { border-color: var(--ba-accent); }

/* progression: move details */
.ba-root .ba-step .ba-mx { grid-column: 2; padding-left: 34px; }
.ba-root .ba-step .ba-mx .ba-xbody {
  margin-top: 8px;
  padding: 10px 14px;
  background: var(--ba-panel);
  border: 1px dashed var(--ba-warm);
  border-radius: 6px;
}
.ba-root .ba-step .ba-move .ba-xbtn { color: var(--ba-warm); border-color: var(--ba-warm-soft); }
.ba-root .ba-step .ba-move .ba-xbtn.ba-open { background: var(--ba-warm); color: #ffffff; border-color: var(--ba-warm); }

/* ================================================================= */
/*  STRONGER BOXES                                                     */
/* ================================================================= */
.ba-root .ba-card { border: 1.5px solid var(--ba-box); }
.ba-root .ba-panel {
  border: 1.5px solid var(--ba-box);
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06);
}
.ba-root .ba-panel.ba-before { border-top: 4px solid var(--ba-muted); }
.ba-root .ba-panel.ba-after  { border: 1.5px solid color-mix(in srgb, var(--ba-accent) 55%, var(--ba-box)); border-top: 4px solid var(--ba-accent); }
.ba-root .ba-panel .ba-xbody { border-top: 1.5px dashed var(--ba-box); }

.ba-root .ba-step .ba-content {
  border: 1.5px solid var(--ba-box);
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06);
}
.ba-root .ba-step .ba-ctop { border-bottom: 1.5px solid var(--ba-box); }
.ba-root .ba-step.ba-last .ba-content { border: 2px solid var(--ba-title); }
.ba-root .ba-step.ba-xopen .ba-content { border-color: var(--ba-accent); }
.ba-root .ba-step .ba-cxbody { border-top: 1.5px dashed var(--ba-box); }
.ba-root .ba-step .ba-connector { width: 2px; background: var(--ba-box); }

.ba-root .ba-opstrip .ba-xbody,
.ba-root .ba-step .ba-attach .ba-xbody,
.ba-root .ba-note .ba-xbody { border: 1.5px solid var(--ba-box); box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05); }
.ba-root .ba-opstrip .ba-xbody { border-left: 4px solid var(--ba-warm); }
.ba-root .ba-step .ba-attach .ba-xbody { border-left: 4px solid var(--ba-accent); }
.ba-root .ba-step .ba-attach .ba-xbody::before { border-left: 1.5px solid var(--ba-box); border-top: 1.5px solid var(--ba-box); top: -8px; }
.ba-root .ba-step .ba-mx .ba-xbody { border: 1.5px dashed var(--ba-warm); }

.ba-root .ba-drawer-box { border: 1.5px solid var(--ba-box); border-top: 4px solid var(--ba-drawer-c, var(--ba-accent)); box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06); }
.ba-root .ba-drawer-head { border-bottom: 1.5px solid var(--ba-box); }
.ba-root .ba-panel.ba-active { border-color: var(--ba-accent); box-shadow: 0 0 0 3px var(--ba-indigo-soft); }

.ba-root .ba-notes { border-top: 1.5px solid var(--ba-box); }
.ba-root .ba-head  { border-bottom: 1.5px solid var(--ba-box); }
.ba-root .ba-xbtn  { border-width: 1.5px; border-color: color-mix(in srgb, var(--ba-accent) 35%, #ffffff); }

@media (max-width: 720px) {
  .ba-root .ba-drawer-caret { display: none; }
  .ba-root .ba-drawer { padding: 0 20px; }
  .ba-root .ba-opstrip { margin: 0 20px; }
}

/* same stacked layout when the card itself is narrow (see container-type on .ba-root) */
@container (max-width: 760px) {
  .ba-root .ba-arena {
    grid-template-columns: 1fr;
    padding: 28px 20px 24px;
  }
  .ba-root .ba-arrow { min-width: 0; max-width: none; }
  .ba-root .ba-arrow svg.ba-arr-h { display: none; }
  .ba-root .ba-arrow svg.ba-arr-v { display: block; }
  .ba-root .ba-notes { grid-template-columns: 1fr !important; }
  .ba-root .ba-track { padding: 24px 20px 28px; }
  .ba-root .ba-drawer-caret { display: none; }
  .ba-root .ba-drawer { padding: 0 20px; }
  .ba-root .ba-opstrip { margin: 0 20px; }
}
`;

/* ------------------------------------------------------------------ */
/*  helpers                                                            */
/* ------------------------------------------------------------------ */

function Rich({ text, className }) {
  if (text == null || text === '') return null;
  if (typeof text !== 'string') return <span className={className}>{text}</span>;
  return (
    <span className={'ba-inline' + (className ? ' ' + className : '')}>
      {processContent(text)}
    </span>
  );
}

const hasDetails = (box) =>
  Boolean(box) && box.details != null && box.details !== '' &&
  !(Array.isArray(box.details) && box.details.length === 0);

/* toggle text and heading for one box: data first, then labels */
function resolve(box, labels, kind) {
  return {
    toggle: box.detailsLabel != null ? box.detailsLabel : labels[kind + 'Toggle'],
    title:  box.detailsTitle != null ? box.detailsTitle : labels[kind + 'Title'],
  };
}

/* details: string, string[] (one paragraph each) or ReactNode */
function DetailsBody({ value }) {
  if (Array.isArray(value)) {
    return (
      <>
        {value.map((v, i) => (
          <div key={i} style={{ marginTop: i ? 6 : 0 }}><Rich text={v} /></div>
        ))}
      </>
    );
  }
  return <Rich text={value} />;
}

function XBody({ box, title, className }) {
  return (
    <div className={'ba-xbody' + (className ? ' ' + className : '')}>
      {title ? <div className="ba-xtitle"><Rich text={title} /></div> : null}
      <DetailsBody value={box.details} />
    </div>
  );
}

function XBtn({ open, onClick, label, hideLabel, small }) {
  return (
    <button
      type="button"
      className={'ba-xbtn' + (open ? ' ba-open' : '') + (small ? ' ba-sm' : '')}
      onClick={onClick}
      aria-expanded={open}
    >
      <span className="ba-chev" />
      <Rich text={open ? hideLabel : label} />
    </button>
  );
}

function Collapse({ open, children, className }) {
  return (
    <div className={'ba-coll' + (open ? ' ba-open' : '') + (className ? ' ' + className : '')}>
      <div className="ba-coll-in">{children}</div>
    </div>
  );
}

const pickExpandable = (o) =>
  o ? { details: o.details, detailsLabel: o.detailsLabel, detailsTitle: o.detailsTitle } : {};

/* Either shape can drive either variant, so normalise up front. */

function toPanels(data, labels) {
  if (data.before && data.after) {
    return {
      before: { ...data.before, stamp: data.before.stamp || labels.before },
      after:  { ...data.after,  stamp: data.after.stamp  || labels.after },
      operation: data.operation,
    };
  }
  const steps = data.steps || [];
  if (steps.length < 2) return { before: null, after: null, operation: null };
  const first = steps[0];
  const last  = steps[steps.length - 1];
  return {
    before: { stamp: first.stamp || labels.before, form: first.label, expr: first.expr, ...pickExpandable(first) },
    after:  { stamp: last.stamp  || labels.after,  form: last.label,  expr: last.expr,  ...pickExpandable(last) },
    operation: data.operation || (first.move
      ? { name: first.move.label, desc: first.move.note, ...pickExpandable(first.move) }
      : null),
  };
}

function toSteps(data, labels) {
  if (data.steps && data.steps.length) return data.steps;
  if (data.before && data.after) {
    return [
      {
        id: 'before',
        label: data.before.form || labels.before,
        expr: data.before.expr,
        stamp: data.before.stamp || labels.before,
        ...pickExpandable(data.before),
        move: data.operation
          ? { label: data.operation.name, note: data.operation.desc, ...pickExpandable(data.operation) }
          : undefined,
      },
      {
        id: 'after',
        label: data.after.form || labels.after,
        expr: data.after.expr,
        stamp: data.after.stamp || labels.after,
        ...pickExpandable(data.after),
      },
    ];
  }
  return [];
}

/* ------------------------------------------------------------------ */
/*  head                                                               */
/* ------------------------------------------------------------------ */

function Head({ header }) {
  return (
    <div className="ba-head">
      {header.kicker && <div className="ba-kicker"><Rich text={header.kicker} /></div>}
      <h2><Rich text={header.title} /></h2>
      {header.lede && <div className="ba-lede"><Rich text={header.lede} /></div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  diptych variant                                                    */
/* ------------------------------------------------------------------ */

function Panel({ panel, side, mode, open, active, onToggle, labels, boxRef }) {
  const has = hasDetails(panel);
  const r = has ? resolve(panel, labels, 'panel') : null;
  return (
    <div ref={boxRef} className={'ba-panel ba-' + side + (active ? ' ba-active' : '')}>
      {panel.stamp && <div className="ba-stamp"><Rich text={panel.stamp} /></div>}
      {panel.form && <div className="ba-form"><Rich text={panel.form} /></div>}
      <div className="ba-expr"><Rich text={panel.expr} /></div>
      {panel.meta && <div className="ba-meta"><Rich text={panel.meta} /></div>}
      {has && (
        <div className="ba-xfoot">
          <XBtn
            open={mode === 'inline' ? open : active}
            onClick={onToggle}
            label={r.toggle}
            hideLabel={labels.hide}
          />
        </div>
      )}
      {has && mode === 'inline' && (
        <Collapse open={open} className="ba-xwrap">
          <XBody box={panel} title={r.title} />
        </Collapse>
      )}
    </div>
  );
}

function NoteBox({ note, labels }) {
  const [open, setOpen] = useState(false);
  const has = hasDetails(note);
  const r = has ? resolve(note, labels, 'note') : null;
  return (
    <div className={'ba-note' + (note.tone === 'warm' ? ' ba-warm' : '')}>
      <div className="ba-nbadge"><Rich text={note.badge} /></div>
      <div className="ba-nbody">
        <Rich text={note.body} />
        {has && (
          <>
            <div className="ba-nfoot">
              <XBtn small open={open} onClick={() => setOpen(!open)} label={r.toggle} hideLabel={labels.hide} />
            </div>
            <Collapse open={open}>
              <XBody box={note} title={r.title} />
            </Collapse>
          </>
        )}
      </div>
    </div>
  );
}

const DRAWER_COLOR = { before: 'var(--ba-muted)', op: 'var(--ba-warm)', after: 'var(--ba-accent)' };

function Diptych({ data, theme, mode, labels }) {
  const { before, after, operation } = toPanels(data, labels);
  const notes = data.notes || [];
  const [open, setOpen]     = useState({});     // inline: independent toggles
  const [drawer, setDrawer] = useState(null);   // drawer: 'before' | 'op' | 'after' | null
  const [shown, setShown]   = useState(null);   // drawer: last opened box, kept while closing
  const [caretX, setCaretX] = useState(null);   // drawer: caret position in px

  const beforeRef = useRef(null);
  const opRef     = useRef(null);
  const afterRef  = useRef(null);
  const caretRef  = useRef(null);

  /* point the caret at the centre of the source box */
  useEffect(() => {
    if (mode !== 'drawer' || !shown) return undefined;
    const srcRef = { before: beforeRef, op: opRef, after: afterRef }[shown];
    const measure = () => {
      const a = srcRef.current, b = caretRef.current;
      if (!a || !b) return;
      const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      setCaretX(ra.left + ra.width / 2 - rb.left);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [mode, shown]);

  const toggle = (k) => {
    if (mode === 'inline') {
      setOpen((o) => ({ ...o, [k]: !o[k] }));
    } else {
      setDrawer((d) => (d === k ? null : k));
      setShown(k);
    }
  };

  const opHas  = hasDetails(operation);
  const opR    = opHas ? resolve(operation, labels, 'operation') : null;
  const opOpen = mode === 'inline' ? !!open.op : drawer === 'op';

  /* drawer content: the shown box stays rendered while the drawer closes */
  const src = { before, op: operation, after };
  const dItem = shown ? src[shown] : null;
  let dTag = '', dTitle = '';
  if (dItem) {
    if (shown === 'op') {
      dTag = labels.move;
      dTitle = dItem.detailsTitle != null ? dItem.detailsTitle : dItem.name;
    } else {
      dTag = dItem.stamp || labels[shown];
      dTitle = dItem.detailsTitle != null ? dItem.detailsTitle : (dItem.form || '');
    }
  }

  return (
    <div className="ba-card">
      {data.header && <Head header={data.header} />}

      <div className={
        'ba-arena' +
        (mode === 'drawer' && drawer ? ' ba-drawer-open' : '') +
        (mode === 'inline' && opHas ? ' ba-has-strip' : '')
      }>
        {before && (
          <Panel
            panel={before} side="before" mode={mode} labels={labels} boxRef={beforeRef}
            open={!!open.before} active={drawer === 'before'}
            onToggle={() => toggle('before')}
          />
        )}

        <div ref={opRef} className={'ba-arrow' + (drawer === 'op' ? ' ba-active' : '')}>
          {operation && <div className="ba-op-name"><Rich text={operation.name} /></div>}
          <svg className="ba-arr-h" viewBox="0 0 170 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <line x1="6" y1="18" x2="152" y2="18" stroke={theme.warm} strokeWidth="2" />
            <polygon points="152,10 166,18 152,26" fill={theme.warm} />
          </svg>
          <svg className="ba-arr-v" viewBox="0 0 28 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <line x1="14" y1="2" x2="14" y2="30" stroke={theme.warm} strokeWidth="2" />
            <polygon points="6,30 14,42 22,30" fill={theme.warm} />
          </svg>
          {operation && operation.desc && (
            <div className="ba-op-desc"><Rich text={operation.desc} /></div>
          )}
          {opHas && (
            <XBtn small open={opOpen} onClick={() => toggle('op')} label={opR.toggle} hideLabel={labels.hide} />
          )}
        </div>

        {after && (
          <Panel
            panel={after} side="after" mode={mode} labels={labels} boxRef={afterRef}
            open={!!open.after} active={drawer === 'after'}
            onToggle={() => toggle('after')}
          />
        )}
      </div>

      {mode === 'inline' && opHas && (
        <div style={{ background: 'var(--ba-panel-softer)' }}>
          <Collapse open={!!open.op} className="ba-opstrip">
            <XBody box={operation} title={opR.title} />
          </Collapse>
        </div>
      )}

      {mode === 'drawer' && (
        <Collapse open={!!drawer}>
          {dItem && (
            <div className="ba-drawer" style={{ '--ba-drawer-c': DRAWER_COLOR[shown] }}>
              <div
                ref={caretRef}
                className={'ba-drawer-caret' + (caretX == null ? ' ba-unmeasured' : '')}
                style={caretX == null ? undefined : { '--ba-caret-x': caretX + 'px' }}
              />
              <div className="ba-drawer-box">
                <div className="ba-drawer-head">
                  <span className="ba-drawer-tag"><Rich text={dTag} /></span>
                  {dTitle ? <span className="ba-drawer-title"><Rich text={dTitle} /></span> : null}
                  <button
                    type="button"
                    className="ba-drawer-x"
                    onClick={() => setDrawer(null)}
                    aria-label={labels.close}
                  >
                    &times;
                  </button>
                </div>
                <XBody box={dItem} title="" />
              </div>
            </div>
          )}
        </Collapse>
      )}

      {notes.length > 0 && (
        <div
          className="ba-notes"
          style={{ gridTemplateColumns: `repeat(${Math.min(notes.length, 2)}, 1fr)` }}
        >
          {notes.map((n) => <NoteBox key={n.id} note={n} labels={labels} />)}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  progression variant                                                */
/* ------------------------------------------------------------------ */

function Progression({ data, mode, labels }) {
  const steps = toSteps(data, labels);
  const [open, setOpen]     = useState({});    // inline: independent
  const [single, setSingle] = useState(null);  // drawer: one at a time
  const [mopen, setMopen]   = useState({});    // moves: always independent

  const isOpen = (id) => (mode === 'inline' ? !!open[id] : single === id);
  const toggle = (id) =>
    mode === 'inline'
      ? setOpen((o) => ({ ...o, [id]: !o[id] }))
      : setSingle((s) => (s === id ? null : id));

  return (
    <div className="ba-card">
      {data.header && <Head header={data.header} />}
      <div className="ba-track">
        {steps.map((s, i) => {
          const first = i === 0;
          const last  = i === steps.length - 1;
          const has   = hasDetails(s);
          const r     = has ? resolve(s, labels, 'step') : null;
          const o     = has && isOpen(s.id);
          const mHas  = Boolean(s.move) && !last && hasDetails(s.move);
          const mR    = mHas ? resolve(s.move, labels, 'move') : null;
          const cls =
            'ba-step' +
            (first ? ' ba-first' : '') +
            (last  ? ' ba-last'  : '') +
            (o     ? ' ba-xopen' : '');
          return (
            <div className={cls} key={s.id}>
              <div className="ba-numcol">
                <div className="ba-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="ba-connector"></div>
              </div>

              <div className="ba-content">
                <div className="ba-ctop">
                  <span className="ba-clabel"><Rich text={s.label} /></span>
                  {s.stamp && <span className="ba-cstamp"><Rich text={s.stamp} /></span>}
                </div>
                <div className="ba-cexpr"><Rich text={s.expr} /></div>
                {has && (
                  <div className="ba-cfoot">
                    <XBtn small open={o} onClick={() => toggle(s.id)} label={r.toggle} hideLabel={labels.hide} />
                  </div>
                )}
                {has && mode === 'inline' && (
                  <Collapse open={o}>
                    <XBody box={s} title={r.title} className="ba-cxbody" />
                  </Collapse>
                )}
              </div>

              {has && mode === 'drawer' && (
                <Collapse open={o} className="ba-attach">
                  <XBody box={s} title={r.title} />
                </Collapse>
              )}

              {s.move && !last && (
                <div className="ba-move">
                  <span className="ba-marrow">{'↓'}</span>
                  <span className="ba-mlabel"><Rich text={s.move.label} /></span>
                  {s.move.note && (
                    <span className="ba-mnote">
                      {'— '}<Rich text={s.move.note} />
                    </span>
                  )}
                  {mHas && (
                    <XBtn
                      small
                      open={!!mopen[s.id]}
                      label={mR.toggle}
                      hideLabel={labels.hide}
                      onClick={() => setMopen((m) => ({ ...m, [s.id]: !m[s.id] }))}
                    />
                  )}
                </div>
              )}
              {mHas && (
                <Collapse open={!!mopen[s.id]} className="ba-mx">
                  <XBody box={s.move} title={mR.title} />
                </Collapse>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

export default function BeforeAfter({ data, variant = 'diptych', expand = 'inline', theme }) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const labels = { ...DEFAULT_LABELS, ...((data && data.labels) || {}) };
  const mode = expand === 'drawer' ? 'drawer' : 'inline';
  const V = variant === 'progression' ? Progression : Diptych;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ba-root" style={cssVars(t)}>
        <V data={data} theme={t} mode={mode} labels={labels} />
      </div>
    </>
  );
}
