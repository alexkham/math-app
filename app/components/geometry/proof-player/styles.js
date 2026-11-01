// ===========================================================
// styles.js
// Shared style tokens, matching the linear-algebra ScenePlayer
// tools (MatrixCore / GramSchmidtWrapper). PP_CSS is injected
// once by ProofPlayerWrapper; inline objects cover the rest.
// ===========================================================

export const PP_CSS = `
  .pp-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .pp-btn:disabled { cursor: not-allowed; }

  .pp-info:hover, .pp-info:focus { background: #bfdbfe; outline: none; }
  .pp-info .pp-tip {
    visibility: hidden; opacity: 0;
    position: absolute; top: calc(100% + 8px); left: 50%;
    transform: translateX(-50%);
    background: #1e293b; color: #f1f5f9;
    font-size: 12px; line-height: 1.5; font-weight: 400;
    padding: 9px 13px; border-radius: 6px;
    width: 320px; text-align: left;
    pointer-events: none;
    transition: opacity 0.12s ease, visibility 0.12s;
    z-index: 10;
    font-family: Arial, sans-serif;
  }
  .pp-info .pp-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .pp-info:hover .pp-tip, .pp-info:focus .pp-tip { visibility: visible; opacity: 1; }

  .pp-log-body::-webkit-scrollbar { display: none; width: 0; height: 0; }

  .pp-just {
    display: inline-block; font-family: Arial, sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
    color: #1e40af; background: #eff6ff; border: 1px solid #bfdbfe;
    border-radius: 4px; padding: 1px 7px; margin-bottom: 4px;
  }

  .pp-handle { cursor: grab; touch-action: none; }
  .pp-handle:active { cursor: grabbing; }

  @keyframes ppIn { from { opacity: 0; } to { opacity: 1; } }
  @media (prefers-reduced-motion: no-preference) { .pp-enter { animation: ppIn .45s ease-out; } }

  @media (max-width: 820px) { .pp-player-grid { grid-template-columns: minmax(0, 1fr) !important; } }
`;

export const card = {
  background: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  padding: '14px 16px',
  fontFamily: 'Arial, sans-serif'
};

export const subtitle = { color: '#64748b', fontSize: '14px', margin: '0 0 10px' };

// One row: proof name, display toggles, hint. Wraps on narrow screens.
export const panel = {
  background: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '8px 14px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px 28px',
  alignItems: 'center',
  minHeight: '40px'
};

// Caps the scene so canvas + controls fit a laptop screen without scrolling;
// the SVG keeps its aspect ratio and centres inside the capped box.
export const canvasSvg = {
  maxHeight: 'clamp(220px, calc(100vh - 440px), 420px)'
};

export const select = {
  padding: '7px 11px',
  border: '1px solid #cbd5e1',
  borderRadius: '5px',
  fontSize: '14px',
  background: 'white',
  cursor: 'pointer',
  color: '#1e293b'
};

export const canvasBox = {
  background: '#fafafa',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  padding: '8px 10px',
  boxSizing: 'border-box'
};

export const readout = {
  marginTop: '4px',
  textAlign: 'center',
  fontFamily: '\'JetBrains Mono\', Menlo, monospace',
  fontSize: '13px',
  color: '#475569',
  fontVariantNumeric: 'tabular-nums',
  minHeight: '18px'
};

export const mathInline = {
  fontFamily: '\'Cambria Math\', Georgia, serif',
  fontStyle: 'italic'
};

export const btn = (color, enabled = true) => ({
  padding: '9px 18px',
  background: enabled ? color : '#94a3b8',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 600,
  cursor: enabled ? 'pointer' : 'not-allowed',
  transition: 'background 0.15s ease'
});
