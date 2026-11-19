// Graph Studio — shell: the lab
//
// The working bench of the product, not a page for visitors. It lists
// the hard cases (labCases.js), shows each one in the Graph component
// with an editable expression list, and can put the SVG output beside
// the canvas so the two renderers can be compared by eye.
//
//   <LabShell />                       all built-in cases
//   <LabShell cases={myCases} theme="dark" />
//
// Like every shell it holds no math and builds no controls of its own:
// it edits a scene document, hands it to <Graph>, and takes the toolbar,
// full screen, export window and expression list from shells/parts.

import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import Graph from '../graph/Graph.jsx';
import ExpressionList from './parts/ExpressionList.jsx';
import GraphToolbar, { toolbarButtonStyle } from './parts/GraphToolbar.jsx';
import FullscreenFrame, { useFullscreen } from './parts/FullscreenFrame.jsx';
import ExportModal from './parts/ExportModal.jsx';
import MathText, { plainText } from './parts/MathText.jsx';
import { createScene } from '../engine/index.js';
import { getTheme } from '../themes/themes.js';
import { LAB_CASES, labGroups } from './labCases.js';

const GRAPH_HEIGHT = 520;

function sceneForCase(c, themeName) {
  return createScene({ ...c.scene, settings: { ...(c.scene.settings || {}), theme: themeName }, authoring: { title: plainText(c.name) } });
}

export default function LabShell(props) {
  const { cases = LAB_CASES, theme: initialTheme = 'default', initialCase } = props;

  const groups = useMemo(() => labGroups(cases), [cases]);
  // Opens on the scene called Overview (sliders, a point, a calculation) unless told otherwise.
  const [caseIndex, setCaseIndex] = useState(() => {
    const first = initialCase ?? cases.findIndex(c => c.name === 'Overview');
    return Math.max(0, Math.min(first, cases.length - 1));
  });
  const current = cases[caseIndex];
  const [doc, setDoc] = useState(() => sceneForCase(current, initialTheme));
  const [selectedId, setSelectedId] = useState(() => (current.select !== undefined ? doc.expressions[current.select]?.id ?? null : null));
  const [compare, setCompare] = useState(false);
  const [svg, setSvg] = useState('');
  const [stats, setStats] = useState(null);
  const [exportOpen, setExportOpen] = useState(false);
  const graphRef = useRef(null);
  const fs = useFullscreen();

  const themeName = doc.settings.theme;
  const theme = useMemo(() => getTheme(themeName), [themeName]);
  const ui = theme.ui;

  const openCase = index => {
    const c = cases[index];
    const next = sceneForCase(c, themeName);
    setCaseIndex(index);
    setDoc(next);
    setSelectedId(c.select !== undefined ? next.expressions[c.select]?.id ?? null : null);
  };

  const onStats = useCallback(s => setStats(s), []);
  const closeExport = useCallback(() => setExportOpen(false), []);

  // The SVG shown for comparison is taken after the graph has drawn.
  useEffect(() => {
    if (!compare || !graphRef.current) { setSvg(''); return; }
    setSvg(graphRef.current.getSVG({ withSelection: true }));
  }, [compare, doc, selectedId, stats]);

  const view = doc.view;
  const precisionWarning = view.ux < 1e-14 * Math.max(1, Math.abs(view.cx)) || view.uy < 1e-14 * Math.max(1, Math.abs(view.cy));
  const knownGap = /^KNOWN GAP/.test(current.expected);
  const full = fs.isFull;

  const tag = { position: 'absolute', zIndex: 1, left: 8, top: 8, fontSize: 11, padding: '2px 6px', borderRadius: 4, background: ui.surface, border: `1px solid ${ui.border}`, color: ui.textMuted };
  // In full screen the graph takes all the height that is left.
  const graphStyle = full ? { position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' } : { width: '100%', height: GRAPH_HEIGHT };

  return (
    <FullscreenFrame fs={fs} theme={themeName}>
      <div className={full ? 'gs-lab gs-lab-full' : 'gs-lab'}
        style={{ fontFamily: ui.font, color: ui.text, background: ui.surfaceAlt, border: full ? 'none' : `1px solid ${ui.border}`, borderRadius: full ? 0 : ui.radius }}>

        {/* ---------- cases ---------- */}
        <nav className="gs-lab-cases" aria-label="Lab cases" style={{ background: ui.surface, borderRight: `1px solid ${ui.border}` }}>
          <div style={{ padding: '12px 12px 6px', fontWeight: 700, fontSize: 14 }}>Graph Studio · lab</div>
          <div style={{ padding: '0 12px 8px', fontSize: 11, color: ui.textMuted }}>{cases.length} cases</div>
          {groups.map(g => (
            <div key={g.name}>
              <div style={{ padding: '8px 12px 4px', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: ui.textMuted }}>{g.name}</div>
              {g.items.map(item => {
                const on = item.index === caseIndex;
                return (
                  <button key={item.index} type="button" onClick={() => openCase(item.index)}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '5px 12px', border: 'none', borderLeft: `3px solid ${on ? ui.accent : 'transparent'}`, background: on ? ui.accentSoft : 'transparent', color: on ? ui.accent : ui.text, fontSize: 13, cursor: 'pointer', fontFamily: ui.font }}>
                    <MathText text={item.name} />
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* ---------- graph ---------- */}
        <div className="gs-lab-main">
          <GraphToolbar graphRef={graphRef} scene={doc} onSceneChange={setDoc} homeView={current.scene.view}
            fullscreen={fs} onExport={() => setExportOpen(true)}>
            <button type="button" style={toolbarButtonStyle(ui, compare)} aria-pressed={compare} onClick={() => setCompare(c => !c)}>Compare with SVG</button>
          </GraphToolbar>

          <div className={compare ? 'gs-lab-panes gs-lab-panes-two' : 'gs-lab-panes'}>
            <div style={{ position: 'relative', minWidth: 0, minHeight: full ? 200 : GRAPH_HEIGHT }}>
              {compare && <div style={tag}>canvas</div>}
              <Graph ref={graphRef} scene={doc} onSceneChange={setDoc} selectedId={selectedId} onSelect={setSelectedId} onStats={onStats} style={graphStyle} />
            </div>
            {compare && (
              <div style={{ position: 'relative', minWidth: 0, borderLeft: `1px solid ${ui.border}`, minHeight: full ? 200 : GRAPH_HEIGHT, overflow: 'hidden' }}>
                <div style={tag}>SVG</div>
                <div style={{ lineHeight: 0 }} dangerouslySetInnerHTML={{ __html: svg }} />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, padding: '6px 12px', fontSize: 11, fontFamily: ui.fontMono, color: ui.textMuted, background: ui.surface, borderTop: `1px solid ${ui.border}` }}>
            <span>centre ({view.cx.toPrecision(5)}, {view.cy.toPrecision(5)})</span>
            <span>units per pixel {view.ux.toPrecision(3)} × {view.uy.toPrecision(3)}</span>
            {stats && <span>geometry {stats.ms.toFixed(1)} ms · {stats.evals.toLocaleString('en-US')} evaluations</span>}
            {compare && <span>SVG {(svg.length / 1024).toFixed(0)} KB</span>}
            {precisionWarning && <span style={{ color: ui.error }}>zoomed past the precision of numbers: the picture is no longer reliable</span>}
          </div>
          <div style={{ padding: '6px 12px 10px', fontSize: 11, color: ui.textMuted, background: ui.surface }}>
            Drag to move · wheel to zoom · Shift + wheel: horizontal only · Alt + wheel: vertical only · click a curve to select it · click a grey dot for its coordinates
          </div>
        </div>

        {/* ---------- expressions ---------- */}
        <div className="gs-lab-list" style={{ background: ui.surface, borderLeft: `1px solid ${ui.border}` }}>
          <div style={{ padding: '10px 12px', fontSize: 12, lineHeight: 1.45, color: knownGap ? ui.error : '#475569', background: knownGap ? ui.errorSoft : '#fffbeb', borderBottom: `1px solid ${knownGap ? ui.error : '#fde68a'}` }}>
            <strong><MathText text={current.name} />.</strong> <MathText text={current.expected} />
          </div>
          <ExpressionList scene={doc} onSceneChange={setDoc} selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <ExportModal open={exportOpen} onClose={closeExport} graphRef={graphRef} scene={doc} fileName={doc.authoring.title} />

        <style jsx>{`
          .gs-lab {
            display: grid;
            grid-template-columns: 210px minmax(0, 1fr) 380px;
            overflow: hidden;
          }
          .gs-lab-cases, .gs-lab-list {
            max-height: 700px;
            overflow-y: auto;
          }
          .gs-lab-main {
            min-width: 0;
            display: flex;
            flex-direction: column;
          }
          .gs-lab-panes {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            flex: 1 1 auto;
          }
          .gs-lab-panes-two {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          }
          .gs-lab-full {
            height: 100%;
          }
          .gs-lab-full .gs-lab-cases, .gs-lab-full .gs-lab-list {
            max-height: none;
            height: 100%;
          }
          .gs-lab-full .gs-lab-main {
            height: 100%;
            min-height: 0;
          }
          @media (max-width: 1000px) {
            .gs-lab {
              grid-template-columns: minmax(0, 1fr);
            }
            .gs-lab-cases {
              max-height: 180px;
            }
            .gs-lab-panes-two {
              grid-template-columns: minmax(0, 1fr);
            }
            .gs-lab-full {
              height: auto;
            }
            .gs-lab-full .gs-lab-cases {
              max-height: 180px;
              height: auto;
            }
            .gs-lab-full .gs-lab-list {
              height: auto;
            }
            .gs-lab-full .gs-lab-main {
              height: auto;
            }
          }
        `}</style>
      </div>
    </FullscreenFrame>
  );
}
