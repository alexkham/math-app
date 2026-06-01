// // // /components/visual-tools/shared.jsx
// // // All reusable building blocks for the combinatorics visual-tools scenes.
// // // Individual named exports — each scenario imports what it needs.

// // import React, { useEffect } from "react";

// // // ════════════════════════════════════════════════════════════════════
// // // 1. DATA & CONSTANTS
// // // ════════════════════════════════════════════════════════════════════

// // export const ALL_ITEMS = [
// //   { id: 0, color: "#ef4444", letter: "A", name: "Red" },
// //   { id: 1, color: "#3b82f6", letter: "B", name: "Blue" },
// //   { id: 2, color: "#10b981", letter: "C", name: "Green" },
// //   { id: 3, color: "#f59e0b", letter: "D", name: "Orange" },
// //   { id: 4, color: "#8b5cf6", letter: "E", name: "Purple" },
// // ];

// // export const N_MIN = 3;
// // export const N_MAX = 5;
// // export const ROW_H_MIN = 140;
// // export const SVG_W_DEFAULT = 800;

// // // ════════════════════════════════════════════════════════════════════
// // // 2. COLOR PALETTE (JS access + matching CSS var names)
// // // ════════════════════════════════════════════════════════════════════

// // export const COLORS = {
// //   bg: "#ffffff",
// //   surface: "#f8fafc",
// //   surface2: "#f1f5f9",
// //   surfaceTint: "#eff6ff",
// //   border: "#e2e8f0",
// //   borderStrong: "#cbd5e1",
// //   text: "#1e293b",
// //   textDim: "#64748b",
// //   textFaint: "#94a3b8",
// //   accent: "#3b82f6",
// //   accentSoft: "rgba(59,130,246,0.10)",
// //   accentSofter: "rgba(59,130,246,0.05)",
// //   accentDeep: "#1d4ed8",
// //   accentLight: "#93c5fd",
// //   highlight: "#f59e0b",
// //   highlightSoft: "rgba(245,158,11,0.10)",
// // };

// // // ════════════════════════════════════════════════════════════════════
// // // 3. COLOR HELPERS
// // // ════════════════════════════════════════════════════════════════════

// // export function lighten(hex, pct) {
// //   const num = parseInt(hex.slice(1), 16);
// //   const r = Math.min(255, (num >> 16) + Math.round((255 - (num >> 16)) * pct / 100));
// //   const g = Math.min(255, ((num >> 8) & 0xff) + Math.round((255 - ((num >> 8) & 0xff)) * pct / 100));
// //   const b = Math.min(255, (num & 0xff) + Math.round((255 - (num & 0xff)) * pct / 100));
// //   return `rgb(${r},${g},${b})`;
// // }

// // export function darken(hex, pct) {
// //   const num = parseInt(hex.slice(1), 16);
// //   const r = Math.max(0, Math.round((num >> 16) * (1 - pct / 100)));
// //   const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - pct / 100)));
// //   const b = Math.max(0, Math.round((num & 0xff) * (1 - pct / 100)));
// //   return `rgb(${r},${g},${b})`;
// // }

// // export function tint(hex, opacity) {
// //   const num = parseInt(hex.slice(1), 16);
// //   const r = num >> 16, g = (num >> 8) & 0xff, b = num & 0xff;
// //   return `rgba(${r},${g},${b},${opacity})`;
// // }

// // // ════════════════════════════════════════════════════════════════════
// // // 4. COMBINATORICS
// // // ════════════════════════════════════════════════════════════════════

// // export function permsAll(arr) {
// //   if (arr.length <= 1) return [arr];
// //   const out = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
// //     for (const p of permsAll(rest)) out.push([arr[i], ...p]);
// //   }
// //   return out;
// // }

// // export function permsR(arr, r) {
// //   if (r === 0) return [[]];
// //   if (r === 1) return arr.map((x) => [x]);
// //   const out = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
// //     for (const p of permsR(rest, r - 1)) out.push([arr[i], ...p]);
// //   }
// //   return out;
// // }

// // export function combinations(arr, r) {
// //   if (r === 0) return [[]];
// //   if (r === arr.length) return [arr];
// //   const out = [];
// //   for (let i = 0; i <= arr.length - r; i++) {
// //     for (const c of combinations(arr.slice(i + 1), r - 1)) {
// //       out.push([arr[i], ...c]);
// //     }
// //   }
// //   return out;
// // }

// // export function factorial(n) {
// //   let r = 1;
// //   for (let i = 2; i <= n; i++) r *= i;
// //   return r;
// // }

// // // ════════════════════════════════════════════════════════════════════
// // // 5. ITEM HELPERS
// // // ════════════════════════════════════════════════════════════════════

// // export function getItems(n) {
// //   return ALL_ITEMS.slice(0, n);
// // }

// // export function nameOf(item, mode) {
// //   return mode === "balls" ? item.name : item.letter;
// // }

// // // ════════════════════════════════════════════════════════════════════
// // // 6. THEME STYLES — injected once into <head>
// // // ════════════════════════════════════════════════════════════════════

// // const THEME_STYLE_ID = "vt-theme-styles";

// // const THEME_CSS = `
// // :root {
// //   --vt-bg: ${COLORS.bg};
// //   --vt-surface: ${COLORS.surface};
// //   --vt-surface-2: ${COLORS.surface2};
// //   --vt-surface-tint: ${COLORS.surfaceTint};
// //   --vt-border: ${COLORS.border};
// //   --vt-border-strong: ${COLORS.borderStrong};
// //   --vt-text: ${COLORS.text};
// //   --vt-text-dim: ${COLORS.textDim};
// //   --vt-text-faint: ${COLORS.textFaint};
// //   --vt-accent: ${COLORS.accent};
// //   --vt-accent-soft: ${COLORS.accentSoft};
// //   --vt-accent-softer: ${COLORS.accentSofter};
// //   --vt-accent-deep: ${COLORS.accentDeep};
// //   --vt-accent-light: ${COLORS.accentLight};
// //   --vt-highlight: ${COLORS.highlight};
// //   --vt-highlight-soft: ${COLORS.highlightSoft};
// // }

// // .vt-root, .vt-root * { box-sizing: border-box; }
// // .vt-root {
// //   font-family: 'JetBrains Mono','Fira Code','SF Mono',ui-monospace,monospace;
// //   background: var(--vt-bg);
// //   color: var(--vt-text);
// //   padding: 24px;
// //   min-height: 100vh;
// // }

// // .vt-page { max-width: 1240px; margin: 0 auto; }

// // .vt-header { text-align: center; margin-bottom: 18px; }
// // .vt-title {
// //   font-size: 26px; font-weight: 700; margin: 0;
// //   color: var(--vt-accent-deep); letter-spacing: -0.3px;
// // }
// // .vt-subtitle {
// //   color: var(--vt-text-dim); font-size: 12px; margin-top: 6px; letter-spacing: 0.3px;
// // }

// // /* ── Control bar ── */
// // .vt-bar {
// //   display: flex; flex-wrap: wrap; gap: 12px;
// //   justify-content: center; align-items: center;
// //   margin-bottom: 20px; padding: 14px;
// //   background: var(--vt-surface);
// //   border-radius: 12px; border: 1px solid var(--vt-border);
// // }
// // .vt-divider { width: 1px; height: 28px; background: var(--vt-border); }

// // .vt-switch {
// //   position: relative; width: 150px; height: 32px;
// //   background: var(--vt-surface-2);
// //   border-radius: 16px; border: 1px solid var(--vt-border);
// //   cursor: pointer; user-select: none;
// //   display: flex; padding: 3px;
// // }
// // .vt-switch-thumb {
// //   position: absolute; top: 3px; height: 26px;
// //   width: 70px; border-radius: 13px;
// //   background: var(--vt-accent);
// //   box-shadow: 0 1px 4px rgba(59,130,246,0.35);
// //   transition: left 0.22s cubic-bezier(0.4,0,0.2,1);
// // }
// // .vt-switch[data-mode="balls"] .vt-switch-thumb   { left: 3px; }
// // .vt-switch[data-mode="letters"] .vt-switch-thumb { left: 77px; }
// // .vt-switch-label {
// //   flex: 1; text-align: center;
// //   font-size: 11px; font-weight: 600;
// //   line-height: 26px; z-index: 1;
// //   color: var(--vt-text-dim); transition: color 0.2s;
// // }
// // .vt-switch[data-mode="balls"] .vt-switch-label:nth-child(2),
// // .vt-switch[data-mode="letters"] .vt-switch-label:nth-child(3) { color: #fff; }

// // .vt-stepper {
// //   display: flex; align-items: center; gap: 8px;
// //   padding: 4px 12px; background: var(--vt-surface-2);
// //   border-radius: 8px; border: 1px solid var(--vt-border);
// // }
// // .vt-stepper-label { font-size: 12px; color: var(--vt-text-dim); }
// // .vt-stepper-value {
// //   font-size: 16px; font-weight: 700;
// //   color: var(--vt-accent); min-width: 18px; text-align: center;
// // }
// // .vt-stepper-btn {
// //   width: 26px; height: 26px; display: flex;
// //   align-items: center; justify-content: center;
// //   font-size: 16px; font-family: inherit;
// //   border: 1px solid var(--vt-border); background: transparent;
// //   color: var(--vt-text-dim); border-radius: 6px;
// //   cursor: pointer; padding: 0;
// // }
// // .vt-stepper-btn:disabled { opacity: 0.35; cursor: not-allowed; }

// // .vt-btn {
// //   padding: 8px 14px; font-size: 12px;
// //   font-family: inherit; font-weight: 500;
// //   border: 1px solid var(--vt-border); background: transparent;
// //   color: var(--vt-text-dim);
// //   border-radius: 8px; cursor: pointer;
// //   transition: all 0.15s;
// // }
// // .vt-btn:hover:not(:disabled) {
// //   border-color: var(--vt-accent-light); color: var(--vt-accent);
// // }
// // .vt-btn:disabled { opacity: 0.4; cursor: not-allowed; }
// // .vt-btn-primary {
// //   color: var(--vt-accent); border-color: var(--vt-accent);
// //   background: var(--vt-accent-soft); font-weight: 600; min-width: 80px;
// // }
// // .vt-btn-playing {
// //   color: var(--vt-highlight); border-color: var(--vt-highlight);
// //   background: var(--vt-highlight-soft);
// // }

// // .vt-speed { display: flex; align-items: center; gap: 8px; }
// // .vt-speed-label { font-size: 11px; color: var(--vt-text-dim); }
// // .vt-speed input[type=range] { width: 90px; accent-color: var(--vt-accent); cursor: pointer; }

// // /* ── Two-column scene grid ── */
// // .vt-main {
// //   display: grid;
// //   grid-template-columns: 800px 1fr;
// //   gap: 20px;
// //   align-items: start;
// // }
// // .vt-scene-wrap { overflow-x: auto; }
// // .vt-scene-svg {
// //   background: var(--vt-bg);
// //   border: 1px solid var(--vt-border);
// //   border-radius: 14px;
// //   display: block;
// // }

// // /* ── Right panel / info pane ── */
// // .vt-right-panel { display: flex; flex-direction: column; }
// // .vt-info-header {
// //   box-sizing: border-box;
// //   padding: 4px 4px 16px;
// //   display: flex; flex-direction: column;
// //   gap: 10px;
// // }
// // .vt-info-title {
// //   font-size: 10px; font-weight: 600;
// //   letter-spacing: 2px; text-transform: uppercase;
// //   color: var(--vt-text-dim); margin: 0;
// // }
// // .vt-info-formula {
// //   font-size: 13px; color: var(--vt-accent-deep);
// //   background: var(--vt-surface-tint);
// //   padding: 10px 12px; border-radius: 8px;
// //   border: 1px solid #dbeafe;
// //   font-weight: 600;
// // }
// // .vt-info-intro {
// //   font-size: 11px; color: var(--vt-text-dim); line-height: 1.55;
// // }
// // .vt-info-intro b { color: var(--vt-text); }

// // .vt-right-rows { display: flex; flex-direction: column; gap: 8px; }

// // /* ── Step row card ── */
// // .vt-step-row {
// //   border: 1px solid var(--vt-border);
// //   border-radius: 10px;
// //   background: #fff;
// //   padding: 12px 14px;
// //   display: flex; flex-direction: column; gap: 8px;
// //   transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s;
// //   box-sizing: border-box;
// // }
// // .vt-step-current {
// //   background: var(--vt-accent-soft);
// //   border-color: var(--vt-accent-light);
// //   box-shadow: 0 0 0 2px var(--vt-accent-soft);
// // }
// // .vt-step-done {
// //   background: var(--vt-accent-softer);
// //   border-color: var(--vt-border);
// //   opacity: 0.9;
// // }

// // .vt-step-head { display: flex; align-items: center; gap: 10px; }
// // .vt-step-num {
// //   width: 22px; height: 22px; border-radius: 50%;
// //   background: var(--vt-accent); color: #fff;
// //   font-size: 11px; font-weight: 700;
// //   display: flex; align-items: center; justify-content: center;
// //   flex-shrink: 0; transition: all 0.2s;
// // }
// // .vt-step-done .vt-step-num { background: var(--vt-accent-deep); }
// // .vt-step-label {
// //   font-size: 12px; font-weight: 600;
// //   color: var(--vt-text); flex: 1;
// //   display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
// // }
// // .vt-step-progress {
// //   font-size: 10px; color: var(--vt-text-dim); font-weight: 600;
// //   background: var(--vt-surface-2);
// //   padding: 2px 8px; border-radius: 10px;
// //   white-space: nowrap; letter-spacing: 0.3px;
// // }
// // .vt-step-current .vt-step-progress {
// //   background: rgba(59,130,246,0.18); color: var(--vt-accent-deep);
// // }
// // .vt-step-done .vt-step-progress {
// //   background: var(--vt-accent-soft); color: var(--vt-accent-deep);
// // }

// // .vt-narr-para {
// //   padding-left: 32px;
// //   font-size: 11.5px; line-height: 1.55;
// //   color: var(--vt-text-dim);
// // }
// // .vt-narr-para b { color: var(--vt-text); font-weight: 600; }
// // .vt-step-current .vt-narr-para b { color: var(--vt-accent-deep); }

// // /* ── Inline chips (used inside narration) ── */
// // .vt-ch-ball {
// //   width: 14px; height: 14px; border-radius: 50%;
// //   display: inline-block;
// //   box-shadow: 0 1px 2px rgba(0,0,0,0.12);
// //   vertical-align: -2px; margin: 0 1px;
// // }
// // .vt-ch-letter {
// //   font-size: 13px; font-weight: 700;
// //   font-family: inherit; line-height: 1; margin: 0 1px;
// // }
// // `;

// // export function ThemeStyles() {
// //   useEffect(() => {
// //     if (typeof document === "undefined") return;
// //     if (document.getElementById(THEME_STYLE_ID)) return;
// //     const style = document.createElement("style");
// //     style.id = THEME_STYLE_ID;
// //     style.textContent = THEME_CSS;
// //     document.head.appendChild(style);
// //   }, []);
// //   return null;
// // }

// // // ════════════════════════════════════════════════════════════════════
// // // 7. SVG PRIMITIVES — Ball, ItemDefs
// // // ════════════════════════════════════════════════════════════════════

// // // Per-item radial gradient defs. Place once near the top of each SVG.
// // export function ItemDefs({ items }) {
// //   return (
// //     <defs>
// //       {items.map((it) => (
// //         <radialGradient key={it.id} id={`bg-${it.id}`} cx="35%" cy="35%" r="65%">
// //           <stop offset="0%" stopColor={lighten(it.color, 45)} />
// //           <stop offset="60%" stopColor={it.color} />
// //           <stop offset="100%" stopColor={darken(it.color, 25)} />
// //         </radialGradient>
// //       ))}
// //     </defs>
// //   );
// // }

// // // Single ball (balls mode = circle with number; letters mode = bordered square with letter).
// // // Supports inline transform/transition for in-flight animation.
// // export function Ball({ item, cx, cy, r, mode, opacity = 1, transform, transition }) {
// //   const wrapStyle = { opacity };
// //   if (transform) wrapStyle.transform = transform;
// //   if (transition) wrapStyle.transition = transition;

// //   if (mode === "balls") {
// //     const fontSize = Math.max(8, r * 0.5);
// //     return (
// //       <g style={wrapStyle}>
// //         <circle cx={cx} cy={cy} r={r} fill={`url(#bg-${item.id})`} />
// //         <text
// //           x={cx} y={cy + 1}
// //           textAnchor="middle" dominantBaseline="central"
// //           fill="#fff" fontSize={fontSize} fontWeight="700"
// //           fontFamily="'JetBrains Mono',monospace"
// //           style={{ pointerEvents: "none" }}
// //         >
// //           {item.id + 1}
// //         </text>
// //       </g>
// //     );
// //   }
// //   const s = r * 1.6;
// //   const fontSize = Math.max(10, r * 0.7);
// //   return (
// //     <g style={wrapStyle}>
// //       <rect
// //         x={cx - s / 2} y={cy - s / 2}
// //         width={s} height={s} rx={r * 0.25}
// //         fill="#ffffff" stroke={item.color} strokeWidth="1.5"
// //       />
// //       <text
// //         x={cx} y={cy + 1}
// //         textAnchor="middle" dominantBaseline="central"
// //         fill={item.color} fontSize={fontSize} fontWeight="700"
// //         fontFamily="'JetBrains Mono',monospace"
// //         style={{ pointerEvents: "none" }}
// //       >
// //         {item.letter}
// //       </text>
// //     </g>
// //   );
// // }

// // // ════════════════════════════════════════════════════════════════════
// // // 8. HTML PRIMITIVES — Chip, ChipAndName, ListWithChips
// // // ════════════════════════════════════════════════════════════════════

// // // Inline chip inside running prose (a small colored ball or a colored letter).
// // export function Chip({ item, mode }) {
// //   if (mode === "balls") {
// //     const grad = `radial-gradient(circle at 35% 35%, ${lighten(item.color, 45)}, ${item.color} 60%, ${darken(item.color, 25)})`;
// //     return <span className="vt-ch-ball" style={{ background: grad }} />;
// //   }
// //   return (
// //     <span className="vt-ch-letter" style={{ color: item.color }}>
// //       {item.letter}
// //     </span>
// //   );
// // }

// // // Chip immediately followed by the item's bold name (e.g. ●Red).
// // export function ChipAndName({ item, mode }) {
// //   return (
// //     <>
// //       <Chip item={item} mode={mode} />
// //       <b>{nameOf(item, mode)}</b>
// //     </>
// //   );
// // }

// // // Humanized list: "A or B", "A, B, or C", etc. — each element is a ChipAndName.
// // export function ListWithChips({ items, mode, conjunction = "or" }) {
// //   if (items.length === 0) return null;
// //   if (items.length === 1) return <ChipAndName item={items[0]} mode={mode} />;
// //   if (items.length === 2) {
// //     return (
// //       <>
// //         <ChipAndName item={items[0]} mode={mode} />
// //         {` ${conjunction} `}
// //         <ChipAndName item={items[1]} mode={mode} />
// //       </>
// //     );
// //   }
// //   const init = items.slice(0, -1);
// //   const last = items[items.length - 1];
// //   return (
// //     <>
// //       {init.map((it) => (
// //         <React.Fragment key={it.id}>
// //           <ChipAndName item={it} mode={mode} />
// //           {", "}
// //         </React.Fragment>
// //       ))}
// //       {`${conjunction} `}
// //       <ChipAndName item={last} mode={mode} />
// //     </>
// //   );
// // }

// // // ════════════════════════════════════════════════════════════════════
// // // 9. CONTROL-BAR ATOMS
// // // ════════════════════════════════════════════════════════════════════

// // export function ControlBar({ children }) {
// //   return <div className="vt-bar">{children}</div>;
// // }

// // export function Divider() {
// //   return <div className="vt-divider" />;
// // }

// // export function ModeSwitch({ value, onChange }) {
// //   return (
// //     <div
// //       className="vt-switch"
// //       data-mode={value}
// //       onClick={() => onChange(value === "balls" ? "letters" : "balls")}
// //     >
// //       <div className="vt-switch-thumb" />
// //       <span className="vt-switch-label">● Balls</span>
// //       <span className="vt-switch-label">A Letters</span>
// //     </div>
// //   );
// // }

// // export function NStepper({ value, onChange, min = N_MIN, max = N_MAX }) {
// //   return (
// //     <div className="vt-stepper">
// //       <span className="vt-stepper-label">n =</span>
// //       <button
// //         className="vt-stepper-btn"
// //         disabled={value <= min}
// //         onClick={() => onChange(Math.max(min, value - 1))}
// //       >
// //         −
// //       </button>
// //       <span className="vt-stepper-value">{value}</span>
// //       <button
// //         className="vt-stepper-btn"
// //         disabled={value >= max}
// //         onClick={() => onChange(Math.min(max, value + 1))}
// //       >
// //         +
// //       </button>
// //     </div>
// //   );
// // }

// // export function RStepper({ value, onChange, min = 1, max }) {
// //   return (
// //     <div className="vt-stepper">
// //       <span className="vt-stepper-label">r =</span>
// //       <button
// //         className="vt-stepper-btn"
// //         disabled={value <= min}
// //         onClick={() => onChange(Math.max(min, value - 1))}
// //       >
// //         −
// //       </button>
// //       <span className="vt-stepper-value">{value}</span>
// //       <button
// //         className="vt-stepper-btn"
// //         disabled={value >= max}
// //         onClick={() => onChange(Math.min(max, value + 1))}
// //       >
// //         +
// //       </button>
// //     </div>
// //   );
// // }

// // export function TransportButtons({
// //   onBack, onStep, onPlay, onReset,
// //   playing = false,
// //   done = false,
// // }) {
// //   const playClass =
// //     "vt-btn vt-btn-primary" + (playing ? " vt-btn-playing" : "");
// //   return (
// //     <>
// //       <button className="vt-btn" onClick={onBack}>◀ Back</button>
// //       <button className="vt-btn" onClick={onStep}>Step ▶</button>
// //       <button className={playClass} onClick={onPlay} disabled={done}>
// //         {playing ? "⏸ Pause" : "▶ Play"}
// //       </button>
// //       <button className="vt-btn" onClick={onReset}>↺ Reset</button>
// //     </>
// //   );
// // }

// // export function SpeedSlider({ value, onChange, min = 0.3, max = 3, step = 0.1 }) {
// //   return (
// //     <div className="vt-speed">
// //       <span className="vt-speed-label">Speed</span>
// //       <input
// //         type="range"
// //         min={min} max={max} step={step}
// //         value={value}
// //         onChange={(e) => onChange(Number(e.target.value))}
// //       />
// //     </div>
// //   );
// // }

// // // ════════════════════════════════════════════════════════════════════
// // // 10. INFO-PANE PARTS
// // // ════════════════════════════════════════════════════════════════════

// // export function RightPanel({ children }) {
// //   return <div className="vt-right-panel">{children}</div>;
// // }

// // // Title + formula + intro, padded so its bottom aligns with the SVG's
// // // "results top" — so the first StepRow is vertically aligned with the
// // // first completed-group row inside the SVG.
// // export function InfoPanelHeader({ title, formula, intro, minHeight }) {
// //   return (
// //     <div
// //       className="vt-info-header"
// //       style={minHeight ? { minHeight: `${minHeight}px` } : undefined}
// //     >
// //       <div className="vt-info-title">{title}</div>
// //       <div className="vt-info-formula">{formula}</div>
// //       <div className="vt-info-intro">{intro}</div>
// //     </div>
// //   );
// // }

// // // One explanation block. status: "current" | "done" | "pending"
// // // (the parent decides whether to render pending rows at all).
// // export function StepRow({
// //   status,
// //   stepNum,
// //   headerLabel,
// //   progressText,
// //   narration,
// //   rowH,
// // }) {
// //   const cls = "vt-step-row vt-step-" + status;
// //   return (
// //     <div className={cls} style={rowH ? { minHeight: `${rowH}px` } : undefined}>
// //       <div className="vt-step-head">
// //         <span className="vt-step-num">{stepNum}</span>
// //         <span className="vt-step-label">{headerLabel}</span>
// //         <span className="vt-step-progress">{progressText}</span>
// //       </div>
// //       <div className="vt-narr-para">{narration}</div>
// //     </div>
// //   );
// // }

// // // ════════════════════════════════════════════════════════════════════
// // // 11. LAYOUT SHELLS
// // // ════════════════════════════════════════════════════════════════════

// // // Root wrapper — gives the scene the monospace font, white bg, padding.
// // // Use this once per scene (the outermost element).
// // export function VTRoot({ children }) {
// //   return <div className="vt-root">{children}</div>;
// // }

// // export function PageWrap({ children }) {
// //   return <div className="vt-page">{children}</div>;
// // }

// // export function SceneTitle({ title, subtitle }) {
// //   return (
// //     <div className="vt-header">
// //       <h1 className="vt-title">{title}</h1>
// //       <p className="vt-subtitle">{subtitle}</p>
// //     </div>
// //   );
// // }

// // export function SceneGrid({ children }) {
// //   return <div className="vt-main">{children}</div>;
// // }

// // export function SceneSvgWrap({ children }) {
// //   return <div className="vt-scene-wrap">{children}</div>;
// // }


// // /components/visual-tools/shared.jsx  (v2)
// // All reusable building blocks for the combinatorics visual-tools scenes.
// // v2 changes: outer container & layout compressed to ~0.9 of v1; fonts and
// // ball sizes intentionally unchanged. New <HelpBanner /> replaces the page
// // title (h1 belongs to the page, not the component).

// import React, { useEffect } from "react";

// // ════════════════════════════════════════════════════════════════════
// // 1. DATA & CONSTANTS
// // ════════════════════════════════════════════════════════════════════

// export const ALL_ITEMS = [
//   { id: 0, color: "#ef4444", letter: "A", name: "Red" },
//   { id: 1, color: "#3b82f6", letter: "B", name: "Blue" },
//   { id: 2, color: "#10b981", letter: "C", name: "Green" },
//   { id: 3, color: "#f59e0b", letter: "D", name: "Orange" },
//   { id: 4, color: "#8b5cf6", letter: "E", name: "Purple" },
// ];

// export const N_MIN = 3;
// export const N_MAX = 5;
// export const ROW_H_MIN = 140;
// export const SVG_W_DEFAULT = 720; // v2: was 800

// // ════════════════════════════════════════════════════════════════════
// // 2. COLOR PALETTE
// // ════════════════════════════════════════════════════════════════════

// export const COLORS = {
//   bg: "#ffffff",
//   surface: "#f8fafc",
//   surface2: "#f1f5f9",
//   surfaceTint: "#eff6ff",
//   border: "#e2e8f0",
//   borderStrong: "#cbd5e1",
//   text: "#1e293b",
//   textDim: "#64748b",
//   textFaint: "#94a3b8",
//   accent: "#3b82f6",
//   accentSoft: "rgba(59,130,246,0.10)",
//   accentSofter: "rgba(59,130,246,0.05)",
//   accentDeep: "#1d4ed8",
//   accentLight: "#93c5fd",
//   highlight: "#f59e0b",
//   highlightSoft: "rgba(245,158,11,0.10)",
// };

// // ════════════════════════════════════════════════════════════════════
// // 3. COLOR HELPERS
// // ════════════════════════════════════════════════════════════════════

// export function lighten(hex, pct) {
//   const num = parseInt(hex.slice(1), 16);
//   const r = Math.min(255, (num >> 16) + Math.round((255 - (num >> 16)) * pct / 100));
//   const g = Math.min(255, ((num >> 8) & 0xff) + Math.round((255 - ((num >> 8) & 0xff)) * pct / 100));
//   const b = Math.min(255, (num & 0xff) + Math.round((255 - (num & 0xff)) * pct / 100));
//   return `rgb(${r},${g},${b})`;
// }

// export function darken(hex, pct) {
//   const num = parseInt(hex.slice(1), 16);
//   const r = Math.max(0, Math.round((num >> 16) * (1 - pct / 100)));
//   const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - pct / 100)));
//   const b = Math.max(0, Math.round((num & 0xff) * (1 - pct / 100)));
//   return `rgb(${r},${g},${b})`;
// }

// export function tint(hex, opacity) {
//   const num = parseInt(hex.slice(1), 16);
//   const r = num >> 16, g = (num >> 8) & 0xff, b = num & 0xff;
//   return `rgba(${r},${g},${b},${opacity})`;
// }

// // ════════════════════════════════════════════════════════════════════
// // 4. COMBINATORICS
// // ════════════════════════════════════════════════════════════════════

// export function permsAll(arr) {
//   if (arr.length <= 1) return [arr];
//   const out = [];
//   for (let i = 0; i < arr.length; i++) {
//     const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
//     for (const p of permsAll(rest)) out.push([arr[i], ...p]);
//   }
//   return out;
// }

// export function permsR(arr, r) {
//   if (r === 0) return [[]];
//   if (r === 1) return arr.map((x) => [x]);
//   const out = [];
//   for (let i = 0; i < arr.length; i++) {
//     const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
//     for (const p of permsR(rest, r - 1)) out.push([arr[i], ...p]);
//   }
//   return out;
// }

// export function combinations(arr, r) {
//   if (r === 0) return [[]];
//   if (r === arr.length) return [arr];
//   const out = [];
//   for (let i = 0; i <= arr.length - r; i++) {
//     for (const c of combinations(arr.slice(i + 1), r - 1)) {
//       out.push([arr[i], ...c]);
//     }
//   }
//   return out;
// }

// export function factorial(n) {
//   let r = 1;
//   for (let i = 2; i <= n; i++) r *= i;
//   return r;
// }

// // ════════════════════════════════════════════════════════════════════
// // 5. ITEM HELPERS
// // ════════════════════════════════════════════════════════════════════

// export function getItems(n) {
//   return ALL_ITEMS.slice(0, n);
// }

// export function nameOf(item, mode) {
//   return mode === "balls" ? item.name : item.letter;
// }

// // ════════════════════════════════════════════════════════════════════
// // 6. THEME STYLES — injected once into <head>
// // ════════════════════════════════════════════════════════════════════

// const THEME_STYLE_ID = "vt-theme-styles";

// const THEME_CSS = `
// :root {
//   --vt-bg: ${COLORS.bg};
//   --vt-surface: ${COLORS.surface};
//   --vt-surface-2: ${COLORS.surface2};
//   --vt-surface-tint: ${COLORS.surfaceTint};
//   --vt-border: ${COLORS.border};
//   --vt-border-strong: ${COLORS.borderStrong};
//   --vt-text: ${COLORS.text};
//   --vt-text-dim: ${COLORS.textDim};
//   --vt-text-faint: ${COLORS.textFaint};
//   --vt-accent: ${COLORS.accent};
//   --vt-accent-soft: ${COLORS.accentSoft};
//   --vt-accent-softer: ${COLORS.accentSofter};
//   --vt-accent-deep: ${COLORS.accentDeep};
//   --vt-accent-light: ${COLORS.accentLight};
//   --vt-highlight: ${COLORS.highlight};
//   --vt-highlight-soft: ${COLORS.highlightSoft};
// }

// .vt-root, .vt-root * { box-sizing: border-box; }
// .vt-root {
//   font-family: 'JetBrains Mono','Fira Code','SF Mono',ui-monospace,monospace;
//   background: var(--vt-bg);
//   color: var(--vt-text);
//   padding: 16px;            /* v2: was 24 */
//   min-height: 100vh;
// }

// .vt-page { max-width: 1100px; margin: 0 auto; }   /* v2: was 1240 */

// .vt-header { text-align: center; margin-bottom: 14px; }
// .vt-title {
//   font-size: 26px; font-weight: 700; margin: 0;
//   color: var(--vt-accent-deep); letter-spacing: -0.3px;
// }
// .vt-subtitle {
//   color: var(--vt-text-dim); font-size: 12px; margin-top: 6px; letter-spacing: 0.3px;
// }

// /* ── Help banner (compact how-to-use note) ── */
// .vt-help-banner {
//   background: var(--vt-surface-tint);
//   color: var(--vt-accent-deep);
//   border: 1px solid #dbeafe;
//   border-radius: 8px;
//   padding: 9px 14px;
//   margin-bottom: 12px;
//   font-size: 11.5px;
//   line-height: 1.55;
//   text-align: center;
// }
// .vt-help-banner b { font-weight: 700; }
// .vt-help-banner .vt-kbd {
//   display: inline-block;
//   background: rgba(255,255,255,0.7);
//   border: 1px solid #c7d2fe;
//   border-radius: 4px;
//   padding: 1px 6px;
//   font-weight: 600;
//   margin: 0 1px;
// }

// /* ── Control bar ── */
// .vt-bar {
//   display: flex; flex-wrap: wrap; gap: 10px;   /* v2: gap was 12 */
//   justify-content: center; align-items: center;
//   margin-bottom: 14px;                          /* v2: was 20 */
//   padding: 10px 12px;                           /* v2: was 14 */
//   background: var(--vt-surface);
//   border-radius: 12px; border: 1px solid var(--vt-border);
// }
// .vt-divider { width: 1px; height: 26px; background: var(--vt-border); }

// .vt-switch {
//   position: relative; width: 150px; height: 32px;
//   background: var(--vt-surface-2);
//   border-radius: 16px; border: 1px solid var(--vt-border);
//   cursor: pointer; user-select: none;
//   display: flex; padding: 3px;
// }
// .vt-switch-thumb {
//   position: absolute; top: 3px; height: 26px;
//   width: 70px; border-radius: 13px;
//   background: var(--vt-accent);
//   box-shadow: 0 1px 4px rgba(59,130,246,0.35);
//   transition: left 0.22s cubic-bezier(0.4,0,0.2,1);
// }
// .vt-switch[data-mode="balls"] .vt-switch-thumb   { left: 3px; }
// .vt-switch[data-mode="letters"] .vt-switch-thumb { left: 77px; }
// .vt-switch-label {
//   flex: 1; text-align: center;
//   font-size: 11px; font-weight: 600;
//   line-height: 26px; z-index: 1;
//   color: var(--vt-text-dim); transition: color 0.2s;
// }
// .vt-switch[data-mode="balls"] .vt-switch-label:nth-child(2),
// .vt-switch[data-mode="letters"] .vt-switch-label:nth-child(3) { color: #fff; }

// .vt-stepper {
//   display: flex; align-items: center; gap: 8px;
//   padding: 4px 12px; background: var(--vt-surface-2);
//   border-radius: 8px; border: 1px solid var(--vt-border);
// }
// .vt-stepper-label { font-size: 12px; color: var(--vt-text-dim); }
// .vt-stepper-value {
//   font-size: 16px; font-weight: 700;
//   color: var(--vt-accent); min-width: 18px; text-align: center;
// }
// .vt-stepper-btn {
//   width: 26px; height: 26px; display: flex;
//   align-items: center; justify-content: center;
//   font-size: 16px; font-family: inherit;
//   border: 1px solid var(--vt-border); background: transparent;
//   color: var(--vt-text-dim); border-radius: 6px;
//   cursor: pointer; padding: 0;
// }
// .vt-stepper-btn:disabled { opacity: 0.35; cursor: not-allowed; }

// .vt-btn {
//   padding: 8px 14px; font-size: 12px;
//   font-family: inherit; font-weight: 500;
//   border: 1px solid var(--vt-border); background: transparent;
//   color: var(--vt-text-dim);
//   border-radius: 8px; cursor: pointer;
//   transition: all 0.15s;
// }
// .vt-btn:hover:not(:disabled) {
//   border-color: var(--vt-accent-light); color: var(--vt-accent);
// }
// .vt-btn:disabled { opacity: 0.4; cursor: not-allowed; }
// .vt-btn-primary {
//   color: var(--vt-accent); border-color: var(--vt-accent);
//   background: var(--vt-accent-soft); font-weight: 600; min-width: 80px;
// }
// .vt-btn-playing {
//   color: var(--vt-highlight); border-color: var(--vt-highlight);
//   background: var(--vt-highlight-soft);
// }

// .vt-speed { display: flex; align-items: center; gap: 8px; }
// .vt-speed-label { font-size: 11px; color: var(--vt-text-dim); }
// .vt-speed input[type=range] { width: 90px; accent-color: var(--vt-accent); cursor: pointer; }

// /* ── Two-column scene grid ── */
// .vt-main {
//   display: grid;
//   grid-template-columns: 720px 1fr;             /* v2: was 800px 1fr */
//   gap: 16px;                                    /* v2: was 20 */
//   align-items: start;
// }
// .vt-scene-wrap { overflow-x: auto; }
// .vt-scene-svg {
//   background: var(--vt-bg);
//   border: 1px solid var(--vt-border);
//   border-radius: 14px;
//   display: block;
// }

// /* ── Right panel / info pane ── */
// .vt-right-panel { display: flex; flex-direction: column; }
// .vt-info-header {
//   box-sizing: border-box;
//   padding: 4px 4px 14px;                        /* v2: was 16 */
//   display: flex; flex-direction: column;
//   gap: 10px;
// }
// .vt-info-title {
//   font-size: 10px; font-weight: 600;
//   letter-spacing: 2px; text-transform: uppercase;
//   color: var(--vt-text-dim); margin: 0;
// }
// .vt-info-formula {
//   font-size: 13px; color: var(--vt-accent-deep);
//   background: var(--vt-surface-tint);
//   padding: 10px 12px; border-radius: 8px;
//   border: 1px solid #dbeafe;
//   font-weight: 600;
// }
// .vt-info-intro {
//   font-size: 11px; color: var(--vt-text-dim); line-height: 1.55;
// }
// .vt-info-intro b { color: var(--vt-text); }

// .vt-right-rows { display: flex; flex-direction: column; gap: 8px; }

// /* ── Step row card ── */
// .vt-step-row {
//   border: 1px solid var(--vt-border);
//   border-radius: 10px;
//   background: #fff;
//   padding: 12px 14px;
//   display: flex; flex-direction: column; gap: 8px;
//   transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s;
//   box-sizing: border-box;
// }
// .vt-step-current {
//   background: var(--vt-accent-soft);
//   border-color: var(--vt-accent-light);
//   box-shadow: 0 0 0 2px var(--vt-accent-soft);
// }
// .vt-step-done {
//   background: var(--vt-accent-softer);
//   border-color: var(--vt-border);
//   opacity: 0.9;
// }

// .vt-step-head { display: flex; align-items: center; gap: 10px; }
// .vt-step-num {
//   width: 22px; height: 22px; border-radius: 50%;
//   background: var(--vt-accent); color: #fff;
//   font-size: 11px; font-weight: 700;
//   display: flex; align-items: center; justify-content: center;
//   flex-shrink: 0; transition: all 0.2s;
// }
// .vt-step-done .vt-step-num { background: var(--vt-accent-deep); }
// .vt-step-label {
//   font-size: 12px; font-weight: 600;
//   color: var(--vt-text); flex: 1;
//   display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
// }
// .vt-step-progress {
//   font-size: 10px; color: var(--vt-text-dim); font-weight: 600;
//   background: var(--vt-surface-2);
//   padding: 2px 8px; border-radius: 10px;
//   white-space: nowrap; letter-spacing: 0.3px;
// }
// .vt-step-current .vt-step-progress {
//   background: rgba(59,130,246,0.18); color: var(--vt-accent-deep);
// }
// .vt-step-done .vt-step-progress {
//   background: var(--vt-accent-soft); color: var(--vt-accent-deep);
// }

// .vt-narr-para {
//   padding-left: 32px;
//   font-size: 11.5px; line-height: 1.55;
//   color: var(--vt-text-dim);
// }
// .vt-narr-para b { color: var(--vt-text); font-weight: 600; }
// .vt-step-current .vt-narr-para b { color: var(--vt-accent-deep); }

// /* ── Inline chips (used inside narration & help banner) ── */
// .vt-ch-ball {
//   width: 14px; height: 14px; border-radius: 50%;
//   display: inline-block;
//   box-shadow: 0 1px 2px rgba(0,0,0,0.12);
//   vertical-align: -2px; margin: 0 1px;
// }
// .vt-ch-letter {
//   font-size: 13px; font-weight: 700;
//   font-family: inherit; line-height: 1; margin: 0 1px;
// }
// `;

// export function ThemeStyles() {
//   useEffect(() => {
//     if (typeof document === "undefined") return;
//     if (document.getElementById(THEME_STYLE_ID)) return;
//     const style = document.createElement("style");
//     style.id = THEME_STYLE_ID;
//     style.textContent = THEME_CSS;
//     document.head.appendChild(style);
//   }, []);
//   return null;
// }

// // ════════════════════════════════════════════════════════════════════
// // 7. SVG PRIMITIVES
// // ════════════════════════════════════════════════════════════════════

// export function ItemDefs({ items }) {
//   return (
//     <defs>
//       {items.map((it) => (
//         <radialGradient key={it.id} id={`bg-${it.id}`} cx="35%" cy="35%" r="65%">
//           <stop offset="0%" stopColor={lighten(it.color, 45)} />
//           <stop offset="60%" stopColor={it.color} />
//           <stop offset="100%" stopColor={darken(it.color, 25)} />
//         </radialGradient>
//       ))}
//     </defs>
//   );
// }

// export function Ball({ item, cx, cy, r, mode, opacity = 1, transform, transition }) {
//   const wrapStyle = { opacity };
//   if (transform) wrapStyle.transform = transform;
//   if (transition) wrapStyle.transition = transition;

//   if (mode === "balls") {
//     const fontSize = Math.max(8, r * 0.5);
//     return (
//       <g style={wrapStyle}>
//         <circle cx={cx} cy={cy} r={r} fill={`url(#bg-${item.id})`} />
//         <text
//           x={cx} y={cy + 1}
//           textAnchor="middle" dominantBaseline="central"
//           fill="#fff" fontSize={fontSize} fontWeight="700"
//           fontFamily="'JetBrains Mono',monospace"
//           style={{ pointerEvents: "none" }}
//         >
//           {item.id + 1}
//         </text>
//       </g>
//     );
//   }
//   const s = r * 1.6;
//   const fontSize = Math.max(10, r * 0.7);
//   return (
//     <g style={wrapStyle}>
//       <rect
//         x={cx - s / 2} y={cy - s / 2}
//         width={s} height={s} rx={r * 0.25}
//         fill="#ffffff" stroke={item.color} strokeWidth="1.5"
//       />
//       <text
//         x={cx} y={cy + 1}
//         textAnchor="middle" dominantBaseline="central"
//         fill={item.color} fontSize={fontSize} fontWeight="700"
//         fontFamily="'JetBrains Mono',monospace"
//         style={{ pointerEvents: "none" }}
//       >
//         {item.letter}
//       </text>
//     </g>
//   );
// }

// // ════════════════════════════════════════════════════════════════════
// // 8. HTML PRIMITIVES
// // ════════════════════════════════════════════════════════════════════

// export function Chip({ item, mode }) {
//   if (mode === "balls") {
//     const grad = `radial-gradient(circle at 35% 35%, ${lighten(item.color, 45)}, ${item.color} 60%, ${darken(item.color, 25)})`;
//     return <span className="vt-ch-ball" style={{ background: grad }} />;
//   }
//   return (
//     <span className="vt-ch-letter" style={{ color: item.color }}>
//       {item.letter}
//     </span>
//   );
// }

// export function ChipAndName({ item, mode }) {
//   return (
//     <>
//       <Chip item={item} mode={mode} />
//       <b>{nameOf(item, mode)}</b>
//     </>
//   );
// }

// export function ListWithChips({ items, mode, conjunction = "or" }) {
//   if (items.length === 0) return null;
//   if (items.length === 1) return <ChipAndName item={items[0]} mode={mode} />;
//   if (items.length === 2) {
//     return (
//       <>
//         <ChipAndName item={items[0]} mode={mode} />
//         {` ${conjunction} `}
//         <ChipAndName item={items[1]} mode={mode} />
//       </>
//     );
//   }
//   const init = items.slice(0, -1);
//   const last = items[items.length - 1];
//   return (
//     <>
//       {init.map((it) => (
//         <React.Fragment key={it.id}>
//           <ChipAndName item={it} mode={mode} />
//           {", "}
//         </React.Fragment>
//       ))}
//       {`${conjunction} `}
//       <ChipAndName item={last} mode={mode} />
//     </>
//   );
// }

// // ════════════════════════════════════════════════════════════════════
// // 9. CONTROL-BAR ATOMS
// // ════════════════════════════════════════════════════════════════════

// export function ControlBar({ children }) {
//   return <div className="vt-bar">{children}</div>;
// }

// export function Divider() {
//   return <div className="vt-divider" />;
// }

// export function ModeSwitch({ value, onChange }) {
//   return (
//     <div
//       className="vt-switch"
//       data-mode={value}
//       onClick={() => onChange(value === "balls" ? "letters" : "balls")}
//     >
//       <div className="vt-switch-thumb" />
//       <span className="vt-switch-label">● Balls</span>
//       <span className="vt-switch-label">A Letters</span>
//     </div>
//   );
// }

// export function NStepper({ value, onChange, min = N_MIN, max = N_MAX }) {
//   return (
//     <div className="vt-stepper">
//       <span className="vt-stepper-label">n =</span>
//       <button
//         className="vt-stepper-btn"
//         disabled={value <= min}
//         onClick={() => onChange(Math.max(min, value - 1))}
//       >−</button>
//       <span className="vt-stepper-value">{value}</span>
//       <button
//         className="vt-stepper-btn"
//         disabled={value >= max}
//         onClick={() => onChange(Math.min(max, value + 1))}
//       >+</button>
//     </div>
//   );
// }

// export function RStepper({ value, onChange, min = 1, max }) {
//   return (
//     <div className="vt-stepper">
//       <span className="vt-stepper-label">r =</span>
//       <button
//         className="vt-stepper-btn"
//         disabled={value <= min}
//         onClick={() => onChange(Math.max(min, value - 1))}
//       >−</button>
//       <span className="vt-stepper-value">{value}</span>
//       <button
//         className="vt-stepper-btn"
//         disabled={value >= max}
//         onClick={() => onChange(Math.min(max, value + 1))}
//       >+</button>
//     </div>
//   );
// }

// export function TransportButtons({
//   onBack, onStep, onPlay, onReset,
//   playing = false, done = false,
// }) {
//   const playClass = "vt-btn vt-btn-primary" + (playing ? " vt-btn-playing" : "");
//   return (
//     <>
//       <button className="vt-btn" onClick={onBack}>◀ Back</button>
//       <button className="vt-btn" onClick={onStep}>Step ▶</button>
//       <button className={playClass} onClick={onPlay} disabled={done}>
//         {playing ? "⏸ Pause" : "▶ Play"}
//       </button>
//       <button className="vt-btn" onClick={onReset}>↺ Reset</button>
//     </>
//   );
// }

// export function SpeedSlider({ value, onChange, min = 0.3, max = 3, step = 0.1 }) {
//   return (
//     <div className="vt-speed">
//       <span className="vt-speed-label">Speed</span>
//       <input
//         type="range"
//         min={min} max={max} step={step}
//         value={value}
//         onChange={(e) => onChange(Number(e.target.value))}
//       />
//     </div>
//   );
// }

// // ════════════════════════════════════════════════════════════════════
// // 10. INFO-PANE PARTS
// // ════════════════════════════════════════════════════════════════════

// export function RightPanel({ children }) {
//   return <div className="vt-right-panel">{children}</div>;
// }

// export function InfoPanelHeader({ title, formula, intro, minHeight }) {
//   return (
//     <div
//       className="vt-info-header"
//       style={minHeight ? { minHeight: `${minHeight}px` } : undefined}
//     >
//       <div className="vt-info-title">{title}</div>
//       <div className="vt-info-formula">{formula}</div>
//       <div className="vt-info-intro">{intro}</div>
//     </div>
//   );
// }

// export function StepRow({
//   status, stepNum, headerLabel, progressText, narration, rowH,
// }) {
//   const cls = "vt-step-row vt-step-" + status;
//   return (
//     <div className={cls} style={rowH ? { minHeight: `${rowH}px` } : undefined}>
//       <div className="vt-step-head">
//         <span className="vt-step-num">{stepNum}</span>
//         <span className="vt-step-label">{headerLabel}</span>
//         <span className="vt-step-progress">{progressText}</span>
//       </div>
//       <div className="vt-narr-para">{narration}</div>
//     </div>
//   );
// }

// // ════════════════════════════════════════════════════════════════════
// // 11. LAYOUT SHELLS
// // ════════════════════════════════════════════════════════════════════

// export function VTRoot({ children }) {
//   return <div className="vt-root">{children}</div>;
// }

// export function PageWrap({ children }) {
//   return <div className="vt-page">{children}</div>;
// }

// // Kept for completeness; scenes should NOT render <h1>/<h2> here —
// // page-level headings belong to the host page (SEO).
// export function SceneTitle({ title, subtitle }) {
//   return (
//     <div className="vt-header">
//       <h1 className="vt-title">{title}</h1>
//       <p className="vt-subtitle">{subtitle}</p>
//     </div>
//   );
// }

// // Compact how-to-use banner. Pass content as children — typically 1–2
// // sentences with inline <b>...</b> or <span className="vt-kbd">...</span>
// // to highlight button names.
// export function HelpBanner({ children }) {
//   return <div className="vt-help-banner">{children}</div>;
// }

// export function SceneGrid({ children }) {
//   return <div className="vt-main">{children}</div>;
// }

// export function SceneSvgWrap({ children }) {
//   return <div className="vt-scene-wrap">{children}</div>;
// }


// /components/visual-tools/shared.jsx  (v3)
// v3 = "Defined" styling pass (variant A from the demos):
//   • Border tokens shifted one rung darker:
//       --vt-border:        #e2e8f0 → #cbd5e1
//       --vt-border-strong: #cbd5e1 → #94a3b8
//   • Key containers bumped from 1px to 1.5px (bar, switch, stepper,
//     stepper-btn, btn, scene-svg, step-row, info-formula).
//   • Active step row now uses solid accent border (was accent-light).
//   • New <HelpMark /> component (small "?" pill with CSS tooltip),
//     wired into NStepper and RStepper with sensible default tips.
// Fonts, spacing, ball sizes, layout shells unchanged from v2.

import React, { useEffect } from "react";

// ════════════════════════════════════════════════════════════════════
// 1. DATA & CONSTANTS
// ════════════════════════════════════════════════════════════════════

export const ALL_ITEMS = [
  { id: 0, color: "#ef4444", letter: "A", name: "Red" },
  { id: 1, color: "#3b82f6", letter: "B", name: "Blue" },
  { id: 2, color: "#10b981", letter: "C", name: "Green" },
  { id: 3, color: "#f59e0b", letter: "D", name: "Orange" },
  { id: 4, color: "#8b5cf6", letter: "E", name: "Purple" },
];

export const N_MIN = 3;
export const N_MAX = 5;
export const ROW_H_MIN = 140;
export const SVG_W_DEFAULT = 720;

// ════════════════════════════════════════════════════════════════════
// 2. COLOR PALETTE
// ════════════════════════════════════════════════════════════════════

export const COLORS = {
  bg: "#ffffff",
  surface: "#f8fafc",
  surface2: "#f1f5f9",
  surfaceTint: "#eff6ff",
  border: "#cbd5e1",        // v3: was #e2e8f0
  borderStrong: "#94a3b8",  // v3: was #cbd5e1
  text: "#1e293b",
  textDim: "#64748b",
  textFaint: "#94a3b8",
  accent: "#3b82f6",
  accentSoft: "rgba(59,130,246,0.10)",
  accentSofter: "rgba(59,130,246,0.05)",
  accentDeep: "#1d4ed8",
  accentLight: "#93c5fd",
  highlight: "#f59e0b",
  highlightSoft: "rgba(245,158,11,0.10)",
};

// ════════════════════════════════════════════════════════════════════
// 3. COLOR HELPERS
// ════════════════════════════════════════════════════════════════════

export function lighten(hex, pct) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.min(255, (num >> 16) + Math.round((255 - (num >> 16)) * pct / 100));
  const g = Math.min(255, ((num >> 8) & 0xff) + Math.round((255 - ((num >> 8) & 0xff)) * pct / 100));
  const b = Math.min(255, (num & 0xff) + Math.round((255 - (num & 0xff)) * pct / 100));
  return `rgb(${r},${g},${b})`;
}

export function darken(hex, pct) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.round((num >> 16) * (1 - pct / 100)));
  const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - pct / 100)));
  const b = Math.max(0, Math.round((num & 0xff) * (1 - pct / 100)));
  return `rgb(${r},${g},${b})`;
}

export function tint(hex, opacity) {
  const num = parseInt(hex.slice(1), 16);
  const r = num >> 16, g = (num >> 8) & 0xff, b = num & 0xff;
  return `rgba(${r},${g},${b},${opacity})`;
}

// ════════════════════════════════════════════════════════════════════
// 4. COMBINATORICS
// ════════════════════════════════════════════════════════════════════

export function permsAll(arr) {
  if (arr.length <= 1) return [arr];
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const p of permsAll(rest)) out.push([arr[i], ...p]);
  }
  return out;
}

export function permsR(arr, r) {
  if (r === 0) return [[]];
  if (r === 1) return arr.map((x) => [x]);
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (const p of permsR(rest, r - 1)) out.push([arr[i], ...p]);
  }
  return out;
}

export function combinations(arr, r) {
  if (r === 0) return [[]];
  if (r === arr.length) return [arr];
  const out = [];
  for (let i = 0; i <= arr.length - r; i++) {
    for (const c of combinations(arr.slice(i + 1), r - 1)) {
      out.push([arr[i], ...c]);
    }
  }
  return out;
}

export function factorial(n) {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

// ════════════════════════════════════════════════════════════════════
// 5. ITEM HELPERS
// ════════════════════════════════════════════════════════════════════

export function getItems(n) {
  return ALL_ITEMS.slice(0, n);
}

export function nameOf(item, mode) {
  return mode === "balls" ? item.name : item.letter;
}

// ════════════════════════════════════════════════════════════════════
// 6. THEME STYLES — injected once into <head>
// ════════════════════════════════════════════════════════════════════

const THEME_STYLE_ID = "vt-theme-styles";

const THEME_CSS = `
:root {
  --vt-bg: ${COLORS.bg};
  --vt-surface: ${COLORS.surface};
  --vt-surface-2: ${COLORS.surface2};
  --vt-surface-tint: ${COLORS.surfaceTint};
  --vt-border: ${COLORS.border};
  --vt-border-strong: ${COLORS.borderStrong};
  --vt-text: ${COLORS.text};
  --vt-text-dim: ${COLORS.textDim};
  --vt-text-faint: ${COLORS.textFaint};
  --vt-accent: ${COLORS.accent};
  --vt-accent-soft: ${COLORS.accentSoft};
  --vt-accent-softer: ${COLORS.accentSofter};
  --vt-accent-deep: ${COLORS.accentDeep};
  --vt-accent-light: ${COLORS.accentLight};
  --vt-highlight: ${COLORS.highlight};
  --vt-highlight-soft: ${COLORS.highlightSoft};
}

.vt-root, .vt-root * { box-sizing: border-box; }
.vt-root {
  font-family: 'JetBrains Mono','Fira Code','SF Mono',ui-monospace,monospace;
  background: var(--vt-bg);
  color: var(--vt-text);
  padding: 16px;
  min-height: 100vh;
}

.vt-page { max-width: 1100px; margin: 0 auto; }

.vt-header { text-align: center; margin-bottom: 14px; }
.vt-title {
  font-size: 26px; font-weight: 700; margin: 0;
  color: var(--vt-accent-deep); letter-spacing: -0.3px;
}
.vt-subtitle {
  color: var(--vt-text-dim); font-size: 12px; margin-top: 6px; letter-spacing: 0.3px;
}

/* ── Help banner ── */
.vt-help-banner {
  background: var(--vt-surface-tint);
  color: var(--vt-accent-deep);
  border: 1px solid var(--vt-accent-light);
  border-radius: 8px;
  padding: 9px 14px;
  margin-bottom: 12px;
  font-size: 11.5px;
  line-height: 1.55;
  text-align: center;
}
.vt-help-banner b { font-weight: 700; }
.vt-help-banner .vt-kbd {
  display: inline-block;
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--vt-accent-light);
  border-radius: 4px;
  padding: 1px 6px;
  font-weight: 600;
  margin: 0 1px;
}

/* ── Control bar ── */
.vt-bar {
  display: flex; flex-wrap: wrap; gap: 10px;
  justify-content: center; align-items: center;
  margin-bottom: 14px;
  padding: 10px 12px;
  background: var(--vt-surface);
  border-radius: 12px;
  border: 1.5px solid var(--vt-border);          /* v3: 1px → 1.5px */
}
.vt-divider { width: 1px; height: 26px; background: var(--vt-border-strong); }

.vt-switch {
  position: relative; width: 150px; height: 32px;
  background: var(--vt-surface-2);
  border-radius: 16px;
  border: 1.5px solid var(--vt-border);          /* v3 */
  cursor: pointer; user-select: none;
  display: flex; padding: 3px;
}
.vt-switch-thumb {
  position: absolute; top: 3px; height: 26px;
  width: 70px; border-radius: 13px;
  background: var(--vt-accent);
  box-shadow: 0 1px 4px rgba(59,130,246,0.35);
  transition: left 0.22s cubic-bezier(0.4,0,0.2,1);
}
.vt-switch[data-mode="balls"] .vt-switch-thumb   { left: 3px; }
.vt-switch[data-mode="letters"] .vt-switch-thumb { left: 77px; }
.vt-switch-label {
  flex: 1; text-align: center;
  font-size: 11px; font-weight: 600;
  line-height: 26px; z-index: 1;
  color: var(--vt-text-dim); transition: color 0.2s;
}
.vt-switch[data-mode="balls"] .vt-switch-label:nth-child(2),
.vt-switch[data-mode="letters"] .vt-switch-label:nth-child(3) { color: #fff; }

.vt-stepper {
  display: flex; align-items: center; gap: 8px;
  padding: 4px 12px; background: var(--vt-surface-2);
  border-radius: 8px;
  border: 1.5px solid var(--vt-border);          /* v3 */
}
.vt-stepper-label { font-size: 12px; color: var(--vt-text-dim); }
.vt-stepper-value {
  font-size: 16px; font-weight: 700;
  color: var(--vt-accent); min-width: 18px; text-align: center;
}
.vt-stepper-btn {
  width: 26px; height: 26px; display: flex;
  align-items: center; justify-content: center;
  font-size: 16px; font-family: inherit;
  border: 1.5px solid var(--vt-border);          /* v3 */
  background: white;
  color: var(--vt-text-dim); border-radius: 6px;
  cursor: pointer; padding: 0;
}
.vt-stepper-btn:hover:not(:disabled) {
  border-color: var(--vt-accent); color: var(--vt-accent);
}
.vt-stepper-btn:disabled { opacity: 0.35; cursor: not-allowed; }

.vt-btn {
  padding: 8px 14px; font-size: 12px;
  font-family: inherit; font-weight: 500;
  border: 1.5px solid var(--vt-border);          /* v3 */
  background: white;
  color: var(--vt-text-dim);
  border-radius: 8px; cursor: pointer;
  transition: all 0.15s;
}
.vt-btn:hover:not(:disabled) {
  border-color: var(--vt-accent); color: var(--vt-accent);
}
.vt-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.vt-btn-primary {
  color: var(--vt-accent); border-color: var(--vt-accent);
  background: var(--vt-accent-soft); font-weight: 600; min-width: 80px;
}
.vt-btn-playing {
  color: var(--vt-highlight); border-color: var(--vt-highlight);
  background: var(--vt-highlight-soft);
}

.vt-speed { display: flex; align-items: center; gap: 8px; }
.vt-speed-label { font-size: 11px; color: var(--vt-text-dim); }
.vt-speed input[type=range] { width: 90px; accent-color: var(--vt-accent); cursor: pointer; }

/* ── Help mark "?" with CSS tooltip ── */
.vt-help-mark {
  position: relative;
  display: inline-flex;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: white;
  border: 1.5px solid var(--vt-border-strong);
  color: var(--vt-text-dim);
  font-size: 9px; font-weight: 700;
  align-items: center; justify-content: center;
  cursor: help;
  margin-left: 2px;
  outline: none;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.vt-help-mark:hover,
.vt-help-mark:focus-visible {
  background: var(--vt-accent-soft);
  color: var(--vt-accent-deep);
  border-color: var(--vt-accent);
}
.vt-help-mark::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%; transform: translateX(-50%);
  background: var(--vt-text); color: white;
  font-size: 10.5px; font-weight: 500;
  font-family: inherit;
  padding: 6px 10px; border-radius: 6px;
  white-space: nowrap; pointer-events: none;
  opacity: 0; transition: opacity 0.15s;
  z-index: 100;
}
.vt-help-mark::before {
  content: "";
  position: absolute; bottom: 100%; left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: var(--vt-text);
  opacity: 0; transition: opacity 0.15s;
  z-index: 100;
}
.vt-help-mark:hover::after,
.vt-help-mark:hover::before,
.vt-help-mark:focus-visible::after,
.vt-help-mark:focus-visible::before { opacity: 1; }

/* ── Two-column scene grid ── */
.vt-main {
  display: grid;
  grid-template-columns: 720px 1fr;
  gap: 16px;
  align-items: start;
}
.vt-scene-wrap { overflow-x: auto; }
.vt-scene-svg {
  background: var(--vt-bg);
  border: 1.5px solid var(--vt-border);          /* v3 */
  border-radius: 14px;
  display: block;
}

/* ── Right panel / info pane ── */
.vt-right-panel { display: flex; flex-direction: column; }
.vt-info-header {
  box-sizing: border-box;
  padding: 4px 4px 14px;
  display: flex; flex-direction: column;
  gap: 10px;
}
.vt-info-title {
  font-size: 10px; font-weight: 600;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--vt-text-dim); margin: 0;
}
.vt-info-formula {
  font-size: 13px; color: var(--vt-accent-deep);
  background: var(--vt-surface-tint);
  padding: 10px 12px; border-radius: 8px;
  border: 1.5px solid var(--vt-accent-light);    /* v3 */
  font-weight: 600;
}
.vt-info-intro {
  font-size: 11px; color: var(--vt-text-dim); line-height: 1.55;
}
.vt-info-intro b { color: var(--vt-text); }

.vt-right-rows { display: flex; flex-direction: column; gap: 8px; }

/* ── Step row card ── */
.vt-step-row {
  border: 1.5px solid var(--vt-border);          /* v3 */
  border-radius: 10px;
  background: #fff;
  padding: 12px 14px;
  display: flex; flex-direction: column; gap: 8px;
  transition: background 0.2s, border-color 0.2s, opacity 0.2s;
  box-sizing: border-box;
}
.vt-step-current {
  background: var(--vt-accent-soft);
  border-color: var(--vt-accent);                /* v3: was accent-light */
}
.vt-step-done {
  background: var(--vt-accent-softer);
  border-color: var(--vt-border);
  opacity: 0.9;
}

.vt-step-head { display: flex; align-items: center; gap: 10px; }
.vt-step-num {
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--vt-accent); color: #fff;
  font-size: 11px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: all 0.2s;
}
.vt-step-done .vt-step-num { background: var(--vt-accent-deep); }
.vt-step-label {
  font-size: 12px; font-weight: 600;
  color: var(--vt-text); flex: 1;
  display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
}
.vt-step-progress {
  font-size: 10px; color: var(--vt-text-dim); font-weight: 600;
  background: var(--vt-surface-2);
  padding: 2px 8px; border-radius: 10px;
  white-space: nowrap; letter-spacing: 0.3px;
  border: 1px solid var(--vt-border);            /* v3: now bordered */
}
.vt-step-current .vt-step-progress {
  background: rgba(59,130,246,0.18); color: var(--vt-accent-deep);
  border-color: var(--vt-accent-light);
}
.vt-step-done .vt-step-progress {
  background: var(--vt-accent-soft); color: var(--vt-accent-deep);
  border-color: var(--vt-accent-light);
}

.vt-narr-para {
  padding-left: 32px;
  font-size: 11.5px; line-height: 1.55;
  color: var(--vt-text-dim);
}
.vt-narr-para b { color: var(--vt-text); font-weight: 600; }
.vt-step-current .vt-narr-para b { color: var(--vt-accent-deep); }

/* ── Inline chips ── */
.vt-ch-ball {
  width: 14px; height: 14px; border-radius: 50%;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0,0,0,0.12);
  vertical-align: -2px; margin: 0 1px;
}
.vt-ch-letter {
  font-size: 13px; font-weight: 700;
  font-family: inherit; line-height: 1; margin: 0 1px;
}
`;

export function ThemeStyles() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const existing = document.getElementById(THEME_STYLE_ID);
    if (existing) {
      // Refresh contents in case an older version was injected first.
      existing.textContent = THEME_CSS;
      return;
    }
    const style = document.createElement("style");
    style.id = THEME_STYLE_ID;
    style.textContent = THEME_CSS;
    document.head.appendChild(style);
  }, []);
  return null;
}

// ════════════════════════════════════════════════════════════════════
// 7. SVG PRIMITIVES
// ════════════════════════════════════════════════════════════════════

export function ItemDefs({ items }) {
  return (
    <defs>
      {items.map((it) => (
        <radialGradient key={it.id} id={`bg-${it.id}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor={lighten(it.color, 45)} />
          <stop offset="60%" stopColor={it.color} />
          <stop offset="100%" stopColor={darken(it.color, 25)} />
        </radialGradient>
      ))}
    </defs>
  );
}

export function Ball({ item, cx, cy, r, mode, opacity = 1, transform, transition }) {
  const wrapStyle = { opacity };
  if (transform) wrapStyle.transform = transform;
  if (transition) wrapStyle.transition = transition;

  if (mode === "balls") {
    const fontSize = Math.max(8, r * 0.5);
    return (
      <g style={wrapStyle}>
        <circle cx={cx} cy={cy} r={r} fill={`url(#bg-${item.id})`} />
        <text
          x={cx} y={cy + 1}
          textAnchor="middle" dominantBaseline="central"
          fill="#fff" fontSize={fontSize} fontWeight="700"
          fontFamily="'JetBrains Mono',monospace"
          style={{ pointerEvents: "none" }}
        >
          {item.id + 1}
        </text>
      </g>
    );
  }
  const s = r * 1.6;
  const fontSize = Math.max(10, r * 0.7);
  return (
    <g style={wrapStyle}>
      <rect
        x={cx - s / 2} y={cy - s / 2}
        width={s} height={s} rx={r * 0.25}
        fill="#ffffff" stroke={item.color} strokeWidth="1.5"
      />
      <text
        x={cx} y={cy + 1}
        textAnchor="middle" dominantBaseline="central"
        fill={item.color} fontSize={fontSize} fontWeight="700"
        fontFamily="'JetBrains Mono',monospace"
        style={{ pointerEvents: "none" }}
      >
        {item.letter}
      </text>
    </g>
  );
}

// ════════════════════════════════════════════════════════════════════
// 8. HTML PRIMITIVES
// ════════════════════════════════════════════════════════════════════

export function Chip({ item, mode }) {
  if (mode === "balls") {
    const grad = `radial-gradient(circle at 35% 35%, ${lighten(item.color, 45)}, ${item.color} 60%, ${darken(item.color, 25)})`;
    return <span className="vt-ch-ball" style={{ background: grad }} />;
  }
  return (
    <span className="vt-ch-letter" style={{ color: item.color }}>
      {item.letter}
    </span>
  );
}

export function ChipAndName({ item, mode }) {
  return (
    <>
      <Chip item={item} mode={mode} />
      <b>{nameOf(item, mode)}</b>
    </>
  );
}

export function ListWithChips({ items, mode, conjunction = "or" }) {
  if (items.length === 0) return null;
  if (items.length === 1) return <ChipAndName item={items[0]} mode={mode} />;
  if (items.length === 2) {
    return (
      <>
        <ChipAndName item={items[0]} mode={mode} />
        {` ${conjunction} `}
        <ChipAndName item={items[1]} mode={mode} />
      </>
    );
  }
  const init = items.slice(0, -1);
  const last = items[items.length - 1];
  return (
    <>
      {init.map((it) => (
        <React.Fragment key={it.id}>
          <ChipAndName item={it} mode={mode} />
          {", "}
        </React.Fragment>
      ))}
      {`${conjunction} `}
      <ChipAndName item={last} mode={mode} />
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// 9. CONTROL-BAR ATOMS
// ════════════════════════════════════════════════════════════════════

export function ControlBar({ children }) {
  return <div className="vt-bar">{children}</div>;
}

export function Divider() {
  return <div className="vt-divider" />;
}

export function ModeSwitch({ value, onChange }) {
  return (
    <div
      className="vt-switch"
      data-mode={value}
      onClick={() => onChange(value === "balls" ? "letters" : "balls")}
    >
      <div className="vt-switch-thumb" />
      <span className="vt-switch-label">● Balls</span>
      <span className="vt-switch-label">A Letters</span>
    </div>
  );
}

// Small "?" pill with hover/focus tooltip. Used inline next to inputs.
export function HelpMark({ tip }) {
  return (
    <span
      className="vt-help-mark"
      data-tip={tip}
      tabIndex={0}
      role="img"
      aria-label={tip}
    >
      ?
    </span>
  );
}

const DEFAULT_N_TIP = "Total number of distinct items in the pool";
const DEFAULT_R_TIP = "Number of positions to fill (r ≤ n)";

export function NStepper({
  value, onChange,
  min = N_MIN, max = N_MAX,
  tip = DEFAULT_N_TIP,
}) {
  return (
    <div className="vt-stepper">
      <span className="vt-stepper-label">n =</span>
      <button
        className="vt-stepper-btn"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >−</button>
      <span className="vt-stepper-value">{value}</span>
      <button
        className="vt-stepper-btn"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >+</button>
      {tip ? <HelpMark tip={tip} /> : null}
    </div>
  );
}

export function RStepper({
  value, onChange,
  min = 1, max,
  tip = DEFAULT_R_TIP,
}) {
  return (
    <div className="vt-stepper">
      <span className="vt-stepper-label">r =</span>
      <button
        className="vt-stepper-btn"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >−</button>
      <span className="vt-stepper-value">{value}</span>
      <button
        className="vt-stepper-btn"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >+</button>
      {tip ? <HelpMark tip={tip} /> : null}
    </div>
  );
}

export function TransportButtons({
  onBack, onStep, onPlay, onReset,
  playing = false, done = false,
}) {
  const playClass = "vt-btn vt-btn-primary" + (playing ? " vt-btn-playing" : "");
  return (
    <>
      <button className="vt-btn" onClick={onBack}>◀ Back</button>
      <button className="vt-btn" onClick={onStep}>Step ▶</button>
      <button className={playClass} onClick={onPlay} disabled={done}>
        {playing ? "⏸ Pause" : "▶ Play"}
      </button>
      <button className="vt-btn" onClick={onReset}>↺ Reset</button>
    </>
  );
}

export function SpeedSlider({ value, onChange, min = 0.3, max = 3, step = 0.1 }) {
  return (
    <div className="vt-speed">
      <span className="vt-speed-label">Speed</span>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// 10. INFO-PANE PARTS
// ════════════════════════════════════════════════════════════════════

export function RightPanel({ children }) {
  return <div className="vt-right-panel">{children}</div>;
}

export function InfoPanelHeader({ title, formula, intro, minHeight }) {
  return (
    <div
      className="vt-info-header"
      style={minHeight ? { minHeight: `${minHeight}px` } : undefined}
    >
      <div className="vt-info-title">{title}</div>
      <div className="vt-info-formula">{formula}</div>
      <div className="vt-info-intro">{intro}</div>
    </div>
  );
}

export function StepRow({
  status, stepNum, headerLabel, progressText, narration, rowH,
}) {
  const cls = "vt-step-row vt-step-" + status;
  return (
    <div className={cls} style={rowH ? { minHeight: `${rowH}px` } : undefined}>
      <div className="vt-step-head">
        <span className="vt-step-num">{stepNum}</span>
        <span className="vt-step-label">{headerLabel}</span>
        <span className="vt-step-progress">{progressText}</span>
      </div>
      <div className="vt-narr-para">{narration}</div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// 11. LAYOUT SHELLS
// ════════════════════════════════════════════════════════════════════

export function VTRoot({ children }) {
  return <div className="vt-root">{children}</div>;
}

export function PageWrap({ children }) {
  return <div className="vt-page">{children}</div>;
}

export function SceneTitle({ title, subtitle }) {
  return (
    <div className="vt-header">
      <h1 className="vt-title">{title}</h1>
      <p className="vt-subtitle">{subtitle}</p>
    </div>
  );
}

export function HelpBanner({ children }) {
  return <div className="vt-help-banner">{children}</div>;
}

export function SceneGrid({ children }) {
  return <div className="vt-main">{children}</div>;
}

export function SceneSvgWrap({ children }) {
  return <div className="vt-scene-wrap">{children}</div>;
}