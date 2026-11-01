/*
  DecisionBox.jsx

  One box, two modes, switched by the reader:
    Full map  — DecisionMaker, every route at once
    Walk it   — DecisionWalker on the same map: the reader answers on
                the map and the route lights up (Card view as a fallback
                on narrow screens; switchable)

  Props: data (DecisionMaker's data shape), theme (default DECISION_THEME, site blues), variant and direction
  (DecisionMaker's starting view; default: Steps for chain data, else the
  vertical tree, falling back to whatever fits).

  Downloads show the map only: the mode bar is hidden under
  [data-diagram-export].
*/

'use client';

import React, { useState } from 'react';
import DecisionMaker from './DecisionMaker';
import DecisionWalker from './DecisionWalker';

export default function DecisionBox({ data, theme = DECISION_THEME, variant, direction }) {
  const [mode, setMode] = useState('map');
  const mapProps = variant ? { variant, direction } : {};
  return (
    <div className="dbox">
      <div className="dbox-bar">
        <button type="button" className={mode === 'map' ? 'on' : ''} onClick={() => setMode('map')}>Full map</button>
        <button type="button" className={mode === 'walk' ? 'on' : ''} onClick={() => setMode('walk')}>Walk it</button>
        <span className="dbox-hint">{mode === 'map' ? 'every route at once' : 'answer the question; the map shows your route'}</span>
      </div>
      {mode === 'map'
        ? <DecisionMaker data={data} theme={theme} {...mapProps} />
        : <DecisionWalker data={data} theme={theme} variant={variant || 'map'} direction={direction} stack />}
      <style jsx>{`
        .dbox-bar { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-family: Inter, system-ui, sans-serif; }
        .dbox-bar button { border: 1px solid #c3d0e4; background: #fff; color: #06357A; border-radius: 999px; padding: 6px 14px; font-weight: 600; font-size: 13px; cursor: pointer; }
        .dbox-bar button.on { background: #06357A; border-color: #06357A; color: #fff; }
        .dbox-hint { color: #64748b; font-size: 13px; margin-left: 6px; }
        :global([data-diagram-export]) .dbox-bar { display: none !important; }
      `}</style>
    </div>
  );
}

/* site blues only (no gold for "stop" outcomes) */
export const DECISION_THEME = { title: '#06357A', navy: '#06357A', accent: '#2563EB', warm: '#0284C7', warmInk: '#0369A1' };
