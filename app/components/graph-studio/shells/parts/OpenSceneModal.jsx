// Graph Studio — shell part: open a saved scene
//
// A window that takes a scene document back in: from a .json file, or
// pasted as text. It checks the text before handing it over, so a shell
// never receives something that is not a scene.
//
//   <OpenSceneModal open={open} onClose={close} onOpen={scene => …} />

import React, { useState, useEffect, useRef } from 'react';
import ModalFrame, { modalButtonStyle } from './ModalFrame.jsx';
import { createScene } from '../../engine/index.js';
import { getTheme } from '../../themes/themes.js';

const MAX_ROWS = 500;

// Text → scene document, or an error message a person can act on.
export function readSceneText(text) {
  let data;
  try { data = JSON.parse(text); }
  catch { return { error: 'This is not valid JSON. Paste the whole text of a saved scene.' }; }
  if (!data || typeof data !== 'object' || !Array.isArray(data.expressions)) {
    return { error: 'This JSON is not a scene: it has no list of expressions.' };
  }
  if (data.expressions.length > MAX_ROWS) return { error: `Too many rows (${data.expressions.length}). The limit is ${MAX_ROWS}.` };
  const rows = [];
  for (const e of data.expressions) {
    if (typeof e === 'string') rows.push({ text: e });
    else if (e && typeof e === 'object' && typeof e.text === 'string') rows.push(e);
    else return { error: 'One of the rows has no text.' };
  }
  const num = v => (typeof v === 'number' && Number.isFinite(v) ? v : undefined);
  const v = data.view && typeof data.view === 'object' ? data.view : {};
  const view = {};
  if (num(v.cx) !== undefined) view.cx = v.cx;
  if (num(v.cy) !== undefined) view.cy = v.cy;
  if (num(v.ux) > 0) view.ux = v.ux;
  if (num(v.uy) > 0) view.uy = v.uy;
  return {
    scene: createScene({
      expressions: rows, view,
      settings: data.settings && typeof data.settings === 'object' ? data.settings : {},
      authoring: data.authoring && typeof data.authoring === 'object' ? data.authoring : {}
    })
  };
}

export default function OpenSceneModal(props) {
  const { open = false, onClose, onOpen, theme: themeProp } = props;
  const ui = getTheme(themeProp).ui;
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const fileRef = useRef(null);

  useEffect(() => { if (open) { setText(''); setError(''); } }, [open]);

  const submit = value => {
    const r = readSceneText(value);
    if (r.error) { setError(r.error); return; }
    if (onOpen) onOpen(r.scene);
    if (onClose) onClose();
  };

  const onFile = e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { setText(String(reader.result || '')); submit(String(reader.result || '')); };
    reader.onerror = () => setError('The file could not be read.');
    reader.readAsText(file);
    e.target.value = '';
  };

  const footer = (
    <>
      <button type="button" style={modalButtonStyle(ui)} onClick={() => fileRef.current && fileRef.current.click()}>Choose a file…</button>
      <button type="button" style={modalButtonStyle(ui, true)} disabled={!text.trim()} onClick={() => submit(text)}>Open</button>
    </>
  );

  return (
    <ModalFrame open={open} onClose={onClose} title="Open a scene" theme={themeProp} width={620} footer={footer}>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 12, color: ui.textMuted, marginBottom: 8 }}>
          Choose a scene file saved from the export window, or paste its text here. It replaces what is on screen; Undo brings the present graph back.
        </div>
        <textarea value={text} onChange={e => { setText(e.target.value); setError(''); }} spellCheck={false}
          aria-label="Scene text" placeholder={'{ "expressions": [ { "text": "y = x^2" } ] }'}
          style={{ width: '100%', boxSizing: 'border-box', height: 220, resize: 'vertical', padding: 10, fontSize: 12, lineHeight: 1.5, fontFamily: ui.fontMono, color: ui.text, background: ui.surfaceAlt, border: `1px solid ${error ? ui.error : ui.border}`, borderRadius: 6 }} />
        {error && <div role="alert" style={{ marginTop: 8, fontSize: 12, color: ui.error, background: ui.errorSoft, borderRadius: 4, padding: '5px 8px' }}>{error}</div>}
        <input ref={fileRef} type="file" accept=".json,application/json" onChange={onFile} style={{ display: 'none' }} />
      </div>
    </ModalFrame>
  );
}
