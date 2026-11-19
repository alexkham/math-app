// Graph Studio — shell: the calculator
//
// The free graphing tool: a list of expressions on the left, the graph
// on the right. Type anything the language reads (see GraphStudioDocs)
// and it is drawn.
//
//   <CalculatorShell />
//   <CalculatorShell defaultScene={scene} height={640} storageKey="my-page" />
//
//   hint="…" replaces the yellow note above the list.
//   "Copy link" puts the address of the graph on the clipboard (the
//   scene packed after the #); linkParam={null} takes it away.
//   explorerHref="/function-explorer" adds "Explore": the selected
//   function of x opens in the Explorer shell on that page, together
//   with the sliders it uses.
//
// A link ending in #scene=… (written by another shell) opens the
// calculator on that scene instead of the kept draft.
//
// What it adds around <Graph>, all from shells/parts:
//   • the expression list, with colours and drag-to-reorder
//   • the toolbar, full screen and the export window
//   • undo and redo (buttons, Ctrl+Z, Ctrl+Y or Ctrl+Shift+Z)
//   • New and Open (a saved scene file or pasted text)
//   • a draft kept in the browser, so a reload does not lose the work
//     (storageKey={null} switches this off)
//
// Like every shell it holds no math.

import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import Graph from '../graph/Graph.jsx';
import ExpressionList from './parts/ExpressionList.jsx';
import GraphToolbar, { toolbarButtonStyle } from './parts/GraphToolbar.jsx';
import FullscreenFrame, { useFullscreen } from './parts/FullscreenFrame.jsx';
import ExportModal from './parts/ExportModal.jsx';
import OpenSceneModal, { readSceneText } from './parts/OpenSceneModal.jsx';
import useSceneHistory from './parts/useSceneHistory.js';
import { createScene, DEFAULT_VIEW, pickFunction, functionRows, sceneHash, readSceneHash } from '../engine/index.js';
import { getTheme } from '../themes/themes.js';

const EMPTY_SCENE = { expressions: [{ text: '' }] };
const SAVE_DELAY_MS = 400;
const DEFAULT_HINT = 'Type an expression in each row. A row such as a = 2 becomes a slider; a point such as (p, f(p)) can be dragged on the graph.';

const icon = d => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const ICON_UNDO = icon(<path d="M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3" />);
const ICON_REDO = icon(<path d="M15 14l5-5-5-5M20 9H10a6 6 0 0 0 0 12h3" />);
const ICON_LIST = icon(<path d="M4 6h16M4 12h16M4 18h10" />);

export default function CalculatorShell(props) {
  const { defaultScene = EMPTY_SCENE, height = 640, storageKey = 'graph-studio:calculator', theme: themeProp, title = 'Graph Studio', hint = DEFAULT_HINT, explorerHref, linkParam = 'scene' } = props;

  const history = useSceneHistory(defaultScene);
  const doc = history.scene;
  const [selectedId, setSelectedId] = useState(null);
  const [exportOpen, setExportOpen] = useState(false);
  const [openOpen, setOpenOpen] = useState(false);
  const [listShown, setListShown] = useState(true);
  const [draftState, setDraftState] = useState('');     // '' | 'restored' | 'saved'
  const graphRef = useRef(null);
  const fs = useFullscreen();

  const themeName = themeProp || doc.settings.theme;
  const theme = useMemo(() => getTheme(themeName), [themeName]);
  const ui = theme.ui;

  // ---------- the draft kept in the browser ----------
  // Read after the first render, so the server and the browser start
  // from the same page.
  const draftLoaded = useRef(false);
  useEffect(() => {
    if (draftLoaded.current) return;   // once: the link in the address is used up by the first run
    draftLoaded.current = true;
    let hadDraft = false;
    if (storageKey) {
      try {
        const text = window.localStorage.getItem(storageKey);
        const r = text ? readSceneText(text) : null;
        if (r && r.scene) { history.reset(r.scene); setDraftState('restored'); hadDraft = true; }
      } catch { /* storage switched off: work without a draft */ }
    }
    // A scene handed over in the address is shown instead. It is put on
    // top of the kept draft as one step, so Undo brings the draft back.
    if (linkParam && typeof window !== 'undefined') {
      const linked = readSceneHash(window.location.hash, linkParam);
      if (linked) {
        if (hadDraft) history.set(linked); else history.reset(linked);
        setDraftState(hadDraft ? 'linked' : '');
        // used once: a reload must not bring the link back over later work
        try { window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search); } catch { /* address stays as it is */ }
      }
    }
  }, [storageKey, linkParam]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!storageKey || !draftLoaded.current) return undefined;
    const t = setTimeout(() => {
      try { window.localStorage.setItem(storageKey, JSON.stringify(doc)); setDraftState(s => (s === 'restored' || s === 'linked' ? s : 'saved')); } catch { /* full or switched off */ }
    }, SAVE_DELAY_MS);
    return () => clearTimeout(t);
  }, [doc, storageKey]);

  // ---------- actions ----------
  const closeExport = useCallback(() => setExportOpen(false), []);
  const closeOpen = useCallback(() => setOpenOpen(false), []);

  const newScene = () => {
    history.set(createScene({ ...EMPTY_SCENE, settings: { theme: doc.settings.theme } }));
    setSelectedId(null); setDraftState('');
  };
  const openScene = scene => { history.set(scene); setSelectedId(null); setDraftState(''); };

  const onKeyDown = e => {
    if (!(e.ctrlKey || e.metaKey) || e.altKey) return;
    const k = e.key.toLowerCase();
    if (k === 'z' && !e.shiftKey) { e.preventDefault(); history.undo(); }
    else if (k === 'y' || (k === 'z' && e.shiftKey)) { e.preventDefault(); history.redo(); }
  };

  // "Explore": the selected row when it is a function of x whose other
  // letters are sliders here; otherwise the first row that is one. The
  // sliders travel with it.
  const explorerLink = useMemo(() => {
    if (!explorerHref) return null;
    const picked = pickFunction(doc, selectedId);
    if (!picked) return null;
    return explorerHref + sceneHash({ expressions: functionRows(picked.text, picked.params), view: doc.view }, linkParam || 'scene');
  }, [explorerHref, doc, selectedId, linkParam]);

  // "Copy link": the address of this page with the whole graph packed
  // after the #. Whoever opens it gets the same rows, sliders and view.
  const [copied, setCopied] = useState('');           // '' | 'yes' | 'no'
  const copyLink = () => {
    const address = window.location.origin + window.location.pathname + sceneHash(doc, linkParam || 'scene');
    const done = ok => { setCopied(ok ? 'yes' : 'no'); setTimeout(() => setCopied(''), 2000); };
    const byHand = () => {
      try {
        const box = document.createElement('textarea');
        box.value = address;
        box.setAttribute('readonly', '');
        box.style.position = 'fixed';
        box.style.opacity = '0';
        document.body.appendChild(box);
        box.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(box);
        done(ok);
      } catch { done(false); }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(address).then(() => done(true), byHand);
    else byHand();
  };

  const view = doc.view;
  const precisionWarning = view.ux < 1e-14 * Math.max(1, Math.abs(view.cx)) || view.uy < 1e-14 * Math.max(1, Math.abs(view.cy));
  const full = fs.isFull;
  const btn = on => toolbarButtonStyle(ui, on);
  const disabled = { opacity: 0.4, cursor: 'default' };

  return (
    <FullscreenFrame fs={fs} theme={themeName}>
      <div className={full ? 'gs-calc gs-calc-full' : 'gs-calc'} onKeyDown={onKeyDown}
        style={{ height: full ? '100%' : height, fontFamily: ui.font, color: ui.text, background: ui.surfaceAlt, border: full ? 'none' : `1px solid ${ui.border}`, borderRadius: full ? 0 : ui.radius }}>

        <GraphToolbar graphRef={graphRef} scene={doc} onSceneChange={history.set} homeView={DEFAULT_VIEW}
          fullscreen={fs} onExport={() => setExportOpen(true)} theme={themeName}>
          <button type="button" style={{ ...btn(false), ...(history.canUndo ? {} : disabled) }} disabled={!history.canUndo} onClick={history.undo} title="Undo (Ctrl+Z)" aria-label="Undo">{ICON_UNDO}</button>
          <button type="button" style={{ ...btn(false), ...(history.canRedo ? {} : disabled) }} disabled={!history.canRedo} onClick={history.redo} title="Redo (Ctrl+Y)" aria-label="Redo">{ICON_REDO}</button>
          <button type="button" style={btn(false)} onClick={newScene} title="Start an empty graph">New</button>
          <button type="button" style={btn(false)} onClick={() => setOpenOpen(true)} title="Open a saved scene">Open</button>
          {explorerHref && (explorerLink
            ? <a href={explorerLink} target="_blank" rel="noopener" style={{ ...btn(false), textDecoration: 'none' }} title="Study the selected function in the Function Explorer (new tab)">Explore</a>
            : <span style={{ ...btn(false), ...disabled }} title="Select a row that is a function of x, such as y = x^2 - 1 or y = a sin(x) with a slider for a">Explore</span>)}
          {linkParam && (
            <button type="button" style={{ ...btn(copied === 'yes'), display: 'inline-grid' }} onClick={copyLink} title="Copy the address of this graph, to send or keep" aria-live="polite">
              {/* the three labels share one place, so the button keeps its width */}
              <span style={{ gridArea: '1 / 1', visibility: copied === '' ? 'visible' : 'hidden' }}>Copy link</span>
              <span style={{ gridArea: '1 / 1', visibility: copied === 'yes' ? 'visible' : 'hidden' }}>Copied</span>
              <span style={{ gridArea: '1 / 1', visibility: copied === 'no' ? 'visible' : 'hidden' }}>Not copied</span>
            </button>
          )}
        </GraphToolbar>

        <div className="gs-calc-body">
          {listShown && (
            <div className="gs-calc-list" style={{ background: ui.surface, borderRight: `1px solid ${ui.border}` }}>
              <div style={{ padding: '10px 12px', fontSize: 12, lineHeight: 1.45, color: '#475569', background: '#fffbeb', borderBottom: '1px solid #fde68a' }}>
                <strong>{title}.</strong> {hint}
                {draftState === 'restored' && <span title="Your last graph on this device was brought back"> · draft restored</span>}
                {draftState === 'saved' && <span title="Kept in this browser"> · draft kept</span>}
                {draftState === 'linked' && <span title="Press Undo to return to the graph you had here before"> · opened from a link (Undo brings back your earlier graph)</span>}
              </div>
              <ExpressionList scene={doc} onSceneChange={history.set} selectedId={selectedId} onSelect={setSelectedId} theme={themeName} reorder colors />
            </div>
          )}

          <div className="gs-calc-graph" style={{ position: 'relative', minWidth: 0, minHeight: 0 }}>
            <Graph ref={graphRef} scene={doc} onSceneChange={history.set} selectedId={selectedId} onSelect={setSelectedId} theme={themeName}
              style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} />
            <button type="button" onClick={() => setListShown(s => !s)} aria-pressed={listShown}
              title={listShown ? 'Hide the list' : 'Show the list'} aria-label={listShown ? 'Hide the list' : 'Show the list'}
              style={{ ...btn(false), position: 'absolute', left: 8, top: 8, zIndex: 1, boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
              {ICON_LIST}
            </button>
            {precisionWarning && (
              <div role="status" style={{ position: 'absolute', left: 8, right: 8, bottom: 8, zIndex: 1, fontSize: 12, padding: '6px 10px', borderRadius: 6, color: ui.error, background: ui.errorSoft, border: `1px solid ${ui.error}` }}>
                Zoomed in past the precision of numbers: the picture is no longer reliable. Zoom out or press Home.
              </div>
            )}
          </div>
        </div>

        <ExportModal open={exportOpen} onClose={closeExport} graphRef={graphRef} scene={doc} fileName={doc.authoring.title || 'graph'} theme={themeName} />
        <OpenSceneModal open={openOpen} onClose={closeOpen} onOpen={openScene} theme={themeName} />

        <style jsx>{`
          .gs-calc {
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          .gs-calc-body {
            flex: 1 1 auto;
            min-height: 0;
            display: flex;
          }
          .gs-calc-list {
            width: 380px;
            flex: 0 0 380px;
            overflow-y: auto;
          }
          .gs-calc-graph {
            flex: 1 1 auto;
          }
          @media (max-width: 800px) {
            .gs-calc-body {
              flex-direction: column-reverse;
            }
            .gs-calc-list {
              width: auto;
              flex: 0 0 42%;
              border-top: 1px solid #e2e8f0;
            }
          }
        `}</style>
      </div>
    </FullscreenFrame>
  );
}
