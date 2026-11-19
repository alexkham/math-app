// Graph Studio — shell part: the toolbar
//
// The row of controls above a graph. Every shell uses this one part and
// only chooses which controls to show.
//
//   <GraphToolbar
//     graphRef={graphRef}                 the <Graph> it controls
//     scene={doc} onSceneChange={setDoc}
//     homeView={{ cx: 0, cy: 0, ux: 0.035, uy: 0.035 }}
//     controls={{ zoom, home, equalScale, grid, axes, theme, fullscreen, export }}
//     fullscreen={fs}                     from useFullscreen()
//     onExport={() => setExportOpen(true)}
//   >
//     …extra buttons of the shell, placed before full screen and export…
//   </GraphToolbar>
//
// All controls are on by default; pass controls={{ theme: false }} to
// drop one. Full screen and export appear only when the shell supplies
// `fullscreen` and `onExport`.

import React, { useMemo } from 'react';
import { ensureScene, DEFAULT_VIEW } from '../../engine/index.js';
import { getTheme, themeNames } from '../../themes/themes.js';

const DEFAULT_CONTROLS = { zoom: true, home: true, equalScale: true, grid: true, axes: true, theme: true, fullscreen: true, export: true };
const ZOOM_STEP = 1.5;

const icon = d => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const ICONS = {
  plus: icon(<path d="M12 5v14M5 12h14" />),
  minus: icon(<path d="M5 12h14" />),
  home: icon(<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />),
  enter: icon(<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />),
  leave: icon(<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />),
  download: icon(<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />)
};

export function toolbarButtonStyle(ui, on = false) {
  return {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5, minHeight: 30, minWidth: 30,
    padding: '4px 9px', borderRadius: 6, fontSize: 12, cursor: 'pointer', fontFamily: ui.font, lineHeight: 1,
    border: `1px solid ${on ? ui.accent : ui.borderStrong}`,
    background: on ? ui.accent : ui.surface,
    color: on ? ui.accentText : ui.text
  };
}

export default function GraphToolbar(props) {
  const {
    graphRef, scene, onSceneChange, homeView, controls: controlsProp, fullscreen, onExport,
    theme: themeProp, style, children
  } = props;

  const doc = useMemo(() => ensureScene(scene), [scene]);
  const controls = { ...DEFAULT_CONTROLS, ...(controlsProp || {}) };
  const theme = getTheme(themeProp || doc.settings.theme);
  const ui = theme.ui;
  const btn = on => toolbarButtonStyle(ui, on);

  const change = next => { if (onSceneChange) onSceneChange(next); };
  const zoom = f => {
    if (graphRef && graphRef.current) graphRef.current.setView(v => ({ ...v, ux: v.ux * f, uy: v.uy * f }));
    else change({ ...doc, view: { ...doc.view, ux: doc.view.ux * f, uy: doc.view.uy * f } });
  };
  const home = () => change({ ...doc, view: { ...DEFAULT_VIEW, ...(homeView || {}) } });
  // same scale on both axes, keeping the horizontal one
  const equalScale = () => change({ ...doc, view: { ...doc.view, uy: doc.view.ux } });
  const setSetting = (key, value) => change({ ...doc, settings: { ...doc.settings, [key]: value } });

  const isFull = !!(fullscreen && fullscreen.isFull);

  return (
    <div role="toolbar" aria-label="Graph controls"
      style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, padding: 8, background: ui.surface, borderBottom: `1px solid ${ui.border}`, fontFamily: ui.font, ...(style || {}) }}>
      {controls.zoom && (
        <>
          <button type="button" style={btn(false)} onClick={() => zoom(1 / ZOOM_STEP)} title="Zoom in" aria-label="Zoom in">{ICONS.plus}</button>
          <button type="button" style={btn(false)} onClick={() => zoom(ZOOM_STEP)} title="Zoom out" aria-label="Zoom out">{ICONS.minus}</button>
        </>
      )}
      {controls.home && (
        <button type="button" style={btn(false)} onClick={home} title="Back to the starting view" aria-label="Back to the starting view">{ICONS.home}</button>
      )}
      {controls.equalScale && (
        <button type="button" style={btn(false)} onClick={equalScale} title="Same scale on both axes" aria-label="Same scale on both axes">1 : 1</button>
      )}
      {controls.grid && (
        <button type="button" style={btn(doc.settings.grid)} aria-pressed={!!doc.settings.grid} onClick={() => setSetting('grid', !doc.settings.grid)}>Grid</button>
      )}
      {controls.axes && (
        <button type="button" style={btn(doc.settings.axes)} aria-pressed={!!doc.settings.axes} onClick={() => setSetting('axes', !doc.settings.axes)}>Axes</button>
      )}
      {controls.theme && (
        <label style={{ fontSize: 12, color: ui.textMuted, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          Theme
          <select value={doc.settings.theme} onChange={e => setSetting('theme', e.target.value)}
            style={{ ...btn(false), padding: '4px 6px' }}>
            {themeNames().map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
      )}

      <span style={{ flex: 1 }} />
      {children}

      {controls.export && onExport && (
        <button type="button" style={btn(false)} onClick={onExport} title="Save as picture or scene" aria-label="Export">{ICONS.download}<span>Export</span></button>
      )}
      {controls.fullscreen && fullscreen && (
        <button type="button" style={btn(isFull)} aria-pressed={isFull} onClick={fullscreen.toggle}
          title={isFull ? 'Leave full screen (Esc)' : 'Full screen'} aria-label={isFull ? 'Leave full screen' : 'Full screen'}>
          {isFull ? ICONS.leave : ICONS.enter}
        </button>
      )}
    </div>
  );
}
