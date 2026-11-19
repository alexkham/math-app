// Graph Studio — shell part: a window over the page
//
// The frame every pop-up window of the product uses (export, open a
// scene, …): dimmed backdrop, title bar with a close button, a body and
// an optional row of buttons at the bottom.
//
//   <ModalFrame open={open} onClose={close} title="Export" theme="default"
//               footer={<button>Download</button>}>
//     …body…
//   </ModalFrame>
//
// It opens over the page, or over the shell when the shell is in full
// screen (otherwise it would sit behind it). Esc or a click outside
// closes it.

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { getTheme } from '../../themes/themes.js';

export function modalButtonStyle(ui, primary = false) {
  return {
    padding: '7px 14px', borderRadius: 6, fontSize: 13, cursor: 'pointer', fontFamily: ui.font,
    border: `1px solid ${primary ? ui.accent : ui.borderStrong}`,
    background: primary ? ui.accent : ui.surface,
    color: primary ? ui.accentText : ui.text
  };
}

export default function ModalFrame(props) {
  const { open = false, onClose, title = '', theme: themeProp, width = 760, footer = null, children } = props;
  const ui = getTheme(themeProp).ui;
  const [host, setHost] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) { setHost(null); return undefined; }
    setHost(document.fullscreenElement || document.body);
    const onKey = e => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => { if (host && dialogRef.current) dialogRef.current.focus(); }, [host]);

  if (!open || !host) return null;

  return createPortal(
    <div
      onMouseDown={e => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 2147483600, background: 'rgba(15,23,42,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1}
        style={{ width: `min(${width}px, 100%)`, maxHeight: '92vh', display: 'flex', flexDirection: 'column', background: ui.surface, color: ui.text, fontFamily: ui.font, borderRadius: ui.radius + 2, border: `1px solid ${ui.border}`, boxShadow: '0 20px 50px rgba(0,0,0,0.3)', outline: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', borderBottom: `1px solid ${ui.border}` }}>
          <div style={{ fontWeight: 700, fontSize: 15, flex: 1 }}>{title}</div>
          <button type="button" onClick={onClose} aria-label="Close" title="Close (Esc)"
            style={{ border: 'none', background: 'none', color: ui.textMuted, fontSize: 22, lineHeight: 1, cursor: 'pointer', padding: '0 4px' }}>×</button>
        </div>
        <div style={{ overflow: 'auto', flex: '1 1 auto', minHeight: 0 }}>{children}</div>
        {footer && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '12px 16px', borderTop: `1px solid ${ui.border}` }}>{footer}</div>
        )}
      </div>
    </div>,
    host
  );
}
