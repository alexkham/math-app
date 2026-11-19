// Graph Studio — shell part: full screen
//
// Lets any shell fill the whole screen and come back, without the graph
// or the lists inside it being rebuilt.
//
//   const fs = useFullscreen();
//   <FullscreenFrame fs={fs} theme="default">
//     …the shell…  (use fs.isFull to let the graph take the free height)
//   </FullscreenFrame>
//   <button onClick={fs.toggle}>Full screen</button>
//
// It asks the browser for real full screen. Where the browser does not
// offer that for a page element (iPhone), or refuses, the frame instead
// covers the window. Esc leaves either way.

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { getTheme } from '../../themes/themes.js';

export function useFullscreen() {
  const frameRef = useRef(null);
  const [mode, setMode] = useState('off');   // 'off' | 'native' | 'cover'

  const exit = useCallback(() => {
    if (typeof document !== 'undefined' && document.fullscreenElement) {
      const p = document.exitFullscreen && document.exitFullscreen();
      if (p && p.catch) p.catch(() => {});
    }
    setMode('off');
  }, []);

  const enter = useCallback(() => {
    const el = frameRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      let p;
      try { p = el.requestFullscreen(); } catch { p = null; }
      if (p && p.then) { p.then(() => setMode('native')).catch(() => setMode('cover')); return; }
    }
    setMode('cover');
  }, []);

  const toggle = useCallback(() => { if (mode === 'off') enter(); else exit(); }, [mode, enter, exit]);

  // The browser can leave full screen on its own (Esc, F11).
  useEffect(() => {
    const onChange = () => { if (!document.fullscreenElement) setMode(m => (m === 'native' ? 'off' : m)); };
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // While covering the window: Esc leaves, and the page behind does not scroll.
  useEffect(() => {
    if (mode !== 'cover') return undefined;
    // Esc first closes a window that is open on top (the export window)
    const onKey = e => { if (e.key === 'Escape' && !document.querySelector('[role="dialog"][aria-modal="true"]')) setMode('off'); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [mode]);

  return useMemo(() => ({ frameRef, mode, isFull: mode !== 'off', enter, exit, toggle }), [mode, enter, exit, toggle]);
}

export default function FullscreenFrame(props) {
  const { fs, theme: themeProp, style, className, children } = props;
  const theme = getTheme(themeProp);
  const full = fs && fs.isFull;
  const fullStyle = full
    ? {
      width: '100%', height: '100%', boxSizing: 'border-box', overflow: 'auto',
      background: theme.ui.surfaceAlt,
      ...(fs.mode === 'cover' ? { position: 'fixed', left: 0, top: 0, width: '100vw', height: '100dvh', zIndex: 2147483000 } : {})
    }
    : null;
  return (
    <div ref={fs ? fs.frameRef : undefined} className={className} style={{ ...(style || {}), ...(fullStyle || {}) }}>
      {children}
    </div>
  );
}
