// Graph Studio — shell part: the export window
//
// One window for taking a graph out of the page, in three forms:
//
//   Picture (PNG)   what is on screen, at screen sharpness
//   Picture (SVG)   the same picture as scalable vector text; size and
//                   theme can be chosen
//   Scene           the scene document as JSON: the graph itself, which
//                   any shell can open again
//
//   <ExportModal open={open} onClose={() => setOpen(false)}
//                graphRef={graphRef} scene={doc} fileName="my-graph" />

import React, { useState, useEffect, useMemo } from 'react';
import ModalFrame, { modalButtonStyle } from './ModalFrame.jsx';
import { ensureScene } from '../../engine/index.js';
import { getTheme, themeNames } from '../../themes/themes.js';

const TABS = [
  { key: 'png', label: 'Picture (PNG)' },
  { key: 'svg', label: 'Picture (SVG)' },
  { key: 'scene', label: 'Scene' }
];
const SIZES = [
  { key: 'screen', label: 'As on screen' },
  { key: '640x420', label: '640 × 420', width: 640, height: 420 },
  { key: '880x460', label: '880 × 460', width: 880, height: 460 },
  { key: '1200x800', label: '1200 × 800', width: 1200, height: 800 }
];

function download(href, name) {
  const a = document.createElement('a');
  a.href = href; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
}

function downloadText(text, type, name) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  download(url, name);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function safeName(name) {
  return (String(name || 'graph').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'graph').slice(0, 60);
}

export default function ExportModal(props) {
  const { open = false, onClose, graphRef, scene, fileName, theme: themeProp } = props;

  const doc = useMemo(() => ensureScene(scene), [scene]);
  const themeName = themeProp || doc.settings.theme;
  const ui = getTheme(themeName).ui;

  const [tab, setTab] = useState('png');
  const [sizeKey, setSizeKey] = useState('screen');
  const [svgTheme, setSvgTheme] = useState('');       // '' = the theme on screen
  const [copied, setCopied] = useState(false);

  useEffect(() => { if (open) setCopied(false); }, [open, tab]);

  const size = SIZES.find(s => s.key === sizeKey) || SIZES[0];
  const graph = graphRef && graphRef.current;
  const name = safeName(fileName || doc.authoring.title);

  const png = useMemo(() => (open && graph && tab === 'png' ? graph.getPNG() : null), [open, graph, tab, doc]);
  const svg = useMemo(() => {
    if (!open || !graph || tab !== 'svg') return '';
    const opts = {};
    if (size.width) { opts.width = size.width; opts.height = size.height; }
    if (svgTheme) opts.theme = svgTheme;
    return graph.getSVG(opts);
  }, [open, graph, tab, size, svgTheme, doc]);
  const json = useMemo(() => (open && tab === 'scene' ? JSON.stringify(doc, null, 2) : ''), [open, tab, doc]);

  const copy = text => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }).catch(() => {});
  };

  const select = { padding: '5px 6px', borderRadius: 6, fontSize: 12, fontFamily: ui.font, border: `1px solid ${ui.borderStrong}`, background: ui.surface, color: ui.text };
  const previewBox = { border: `1px solid ${ui.border}`, borderRadius: 6, background: ui.surfaceAlt, overflow: 'auto', maxHeight: '52vh', minHeight: 120 };

  const footer = (
    <>
      {copied && <span style={{ fontSize: 12, color: ui.textMuted, marginRight: 'auto' }}>Copied</span>}
      {tab === 'svg' && <button type="button" style={modalButtonStyle(ui)} onClick={() => copy(svg)}>Copy SVG</button>}
      {tab === 'scene' && <button type="button" style={modalButtonStyle(ui)} onClick={() => copy(json)}>Copy</button>}
      {tab === 'png' && <button type="button" style={modalButtonStyle(ui, true)} disabled={!png} onClick={() => png && download(png, `${name}.png`)}>Download PNG</button>}
      {tab === 'svg' && <button type="button" style={modalButtonStyle(ui, true)} onClick={() => downloadText(svg, 'image/svg+xml', `${name}.svg`)}>Download SVG</button>}
      {tab === 'scene' && <button type="button" style={modalButtonStyle(ui, true)} onClick={() => downloadText(json, 'application/json', `${name}.json`)}>Download JSON</button>}
    </>
  );

  return (
    <ModalFrame open={open} onClose={onClose} title="Export" theme={themeName} footer={footer}>
      <div role="tablist" style={{ display: 'flex', gap: 4, padding: '10px 16px 0' }}>
        {TABS.map(t => (
          <button key={t.key} type="button" role="tab" aria-selected={tab === t.key} onClick={() => setTab(t.key)}
            style={{ padding: '7px 12px', fontSize: 13, cursor: 'pointer', fontFamily: ui.font, border: 'none', borderBottom: `2px solid ${tab === t.key ? ui.accent : 'transparent'}`, background: 'none', color: tab === t.key ? ui.accent : ui.textMuted, fontWeight: tab === t.key ? 600 : 400 }}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: 16 }}>
        {tab === 'png' && (
          <>
            <div style={{ fontSize: 12, color: ui.textMuted, marginBottom: 8 }}>The graph as it is on screen now, including the selected curve and its marked points.</div>
            <div style={{ ...previewBox, textAlign: 'center', lineHeight: 0 }}>
              {png ? <img src={png} alt="Preview of the picture" style={{ maxWidth: '100%', maxHeight: '50vh', width: 'auto', height: 'auto' }} /> : null}
            </div>
          </>
        )}

        {tab === 'svg' && (
          <>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 8, fontSize: 12, color: ui.textMuted }}>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>Size
                <select value={sizeKey} onChange={e => setSizeKey(e.target.value)} style={select}>
                  {SIZES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                </select>
              </label>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>Theme
                <select value={svgTheme} onChange={e => setSvgTheme(e.target.value)} style={select}>
                  <option value="">as on screen</option>
                  {themeNames().map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>
              <span>{(svg.length / 1024).toFixed(0)} KB · stays sharp at any size</span>
            </div>
            <div className="gs-export-svg" style={{ ...previewBox, lineHeight: 0 }} dangerouslySetInnerHTML={{ __html: svg }} />
            <style>{'.gs-export-svg svg{max-width:100%;height:auto;display:block;margin:0 auto}'}</style>
          </>
        )}

        {tab === 'scene' && (
          <>
            <div style={{ fontSize: 12, color: ui.textMuted, marginBottom: 8 }}>The graph itself: rows, view and settings. Any Graph Studio tool can open it again.</div>
            <pre style={{ ...previewBox, margin: 0, padding: 12, fontSize: 12, lineHeight: 1.5, fontFamily: ui.fontMono, color: ui.text, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{json}</pre>
          </>
        )}
      </div>
    </ModalFrame>
  );
}
