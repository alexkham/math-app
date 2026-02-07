import { useState, useRef, useEffect, useCallback } from "react";

/* ─── math helpers ─── */
const cAdd = (a, b) => ({ re: a.re + b.re, im: a.im + b.im });
const cMag = (z) => Math.sqrt(z.re * z.re + z.im * z.im);
const cArg = (z) => Math.atan2(z.im, z.re);
const fromPolar = (mag, angRad) => ({
  re: mag * Math.cos(angRad),
  im: mag * Math.sin(angRad),
});
const degOf = (rad) => ((rad * 180) / Math.PI).toFixed(2);
const radOf = (deg) => (deg * Math.PI) / 180;
const fmt = (v) => {
  const n = +v.toFixed(6);
  return n === 0 ? "0" : n % 1 === 0 ? String(n) : n.toFixed(4).replace(/0+$/, "");
};
const fmtRect = (z) => {
  const r = fmt(z.re);
  const i = fmt(Math.abs(z.im));
  if (z.im === 0) return r;
  if (z.re === 0) return z.im < 0 ? `−${i}i` : `${i}i`;
  return `${r} ${z.im < 0 ? "−" : "+"} ${i}i`;
};
const fmtPolar = (z) => `${fmt(cMag(z))} ∠ ${degOf(cArg(z))}°`;

/* exponential as JSX with real superscript */
const FmtExp = ({ z }) => (
  <span>{fmt(cMag(z))} · e<sup style={{ fontSize: "0.75em" }}>{fmt(cArg(z))}i</sup></span>
);
const FmtPolar = ({ z }) => <span>{fmtPolar(z)}</span>;
const FmtRect = ({ z }) => <span>{fmtRect(z)}</span>;

const FmtNum = ({ z, mode }) => {
  if (mode === "exp") return <FmtExp z={z} />;
  if (mode === "polar") return <FmtPolar z={z} />;
  return <FmtRect z={z} />;
};

/* ─── themes ─── */
const themes = {
  dark: {
    bg: "#0d1117", bgAlt: "#0f1923", bgDeep: "#0a0e14",
    border: "#1a2332", text: "#c9d1d9", textBright: "#e6edf3",
    textMuted: "#4a5568", textMid: "#8b949e", accent: "#58a6ff",
    accentBg: "rgba(88,166,255,0.08)", accentBg2: "rgba(88,166,255,0.1)",
    inputBg: "#161b22",
    z1: "#48d1cc", z1bg: "rgba(72,209,204,0.08)", z1border: "rgba(72,209,204,0.2)",
    z2: "#f59e42", result: "#e06c75",
    paraFill: "rgba(99,179,237,0.06)", paraStroke: "rgba(99,179,237,0.15)",
    ghostZ1: "rgba(72,209,204,0.25)", ghostZ1h: "rgba(72,209,204,0.7)",
    ghostZ2: "rgba(245,158,66,0.25)", ghostZ2h: "rgba(245,158,66,0.7)",
    canvasBg: "#0d1117", gridLine: "#1a2332", axisLine: "#2d3a4a",
    axisLabel: "#4a5568", dotStroke: "#0d1117",
    stepNoteBg: "rgba(88,166,255,0.04)", stepNoteBorder: "rgba(88,166,255,0.2)",
    histItemBg: "rgba(255,255,255,0.02)",
  },
  light: {
    bg: "#f8f9fb", bgAlt: "#ffffff", bgDeep: "#f0f2f5",
    border: "#d8dce3", text: "#3d4450", textBright: "#1a1e26",
    textMuted: "#8893a2", textMid: "#5f6b7a", accent: "#2563eb",
    accentBg: "rgba(37,99,235,0.07)", accentBg2: "rgba(37,99,235,0.12)",
    inputBg: "#f0f2f5",
    z1: "#0e918c", z1bg: "rgba(14,145,140,0.08)", z1border: "rgba(14,145,140,0.25)",
    z2: "#d97a0d", result: "#c0392b",
    paraFill: "rgba(37,99,235,0.06)", paraStroke: "rgba(37,99,235,0.2)",
    ghostZ1: "rgba(14,145,140,0.25)", ghostZ1h: "rgba(14,145,140,0.65)",
    ghostZ2: "rgba(217,122,13,0.25)", ghostZ2h: "rgba(217,122,13,0.65)",
    canvasBg: "#ffffff", gridLine: "#e8ecf1", axisLine: "#bfc6d0",
    axisLabel: "#8893a2", dotStroke: "#ffffff",
    stepNoteBg: "rgba(37,99,235,0.04)", stepNoteBorder: "rgba(37,99,235,0.2)",
    histItemBg: "rgba(0,0,0,0.02)",
  },
};

export default function ComplexAddition() {
  const [z1, setZ1] = useState({ re: 3, im: 2 });
  const [z2, setZ2] = useState({ re: 1, im: 4 });
  const [history, setHistory] = useState([]);
  const [formatMode, setFormatMode] = useState("rect");
  const [hovered, setHovered] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const canvasRef = useRef(null);

  const t = themes[theme];
  const result = cAdd(z1, z2);

  const z1Mag = cMag(z1), z1ArgRad = cArg(z1), z1ArgDeg = +degOf(z1ArgRad);
  const z2Mag = cMag(z2), z2ArgRad = cArg(z2), z2ArgDeg = +degOf(z2ArgRad);

  const addToHistory = () => {
    setHistory((h) => [
      { z1: { ...z1 }, z2: { ...z2 }, result: { ...result }, id: Date.now() },
      ...h.slice(0, 19),
    ]);
  };

  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  /* pan/zoom */
  const onPtrDown = (e) => {
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPtrMove = (e) => {
    if (!isPanning) return;
    setPan({ x: panStart.current.px + (e.clientX - panStart.current.x), y: panStart.current.py + (e.clientY - panStart.current.y) });
  };
  const onPtrUp = () => setIsPanning(false);
  const onWheel = (e) => {
    e.preventDefault();
    setZoom((z) => Math.min(Math.max(z * (e.deltaY > 0 ? 0.9 : 1.1), 0.15), 12));
  };

  /* ─── canvas ─── */
  const draw = useCallback(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const W = cvs.width, H = cvs.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = t.canvasBg;
    ctx.fillRect(0, 0, W, H);

    const pts = [z1, z2, result, { re: 0, im: 0 }];
    const maxV = Math.max(...pts.map((p) => Math.max(Math.abs(p.re), Math.abs(p.im))), 1);
    const sc = (Math.min(W, H) / (2 * maxV * 1.6)) * zoom;
    const cx = W / 2 + pan.x, cy = H / 2 + pan.y;
    const toX = (re) => cx + re * sc;
    const toY = (im) => cy - im * sc;

    const range = Math.ceil(Math.max(W, H) / sc + 2);
    ctx.strokeStyle = t.gridLine; ctx.lineWidth = 1;
    for (let i = -range; i <= range; i++) {
      ctx.beginPath(); ctx.moveTo(toX(i), 0); ctx.lineTo(toX(i), H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, toY(i)); ctx.lineTo(W, toY(i)); ctx.stroke();
    }
    ctx.strokeStyle = t.axisLine; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();

    ctx.fillStyle = t.axisLabel; ctx.font = "11px 'DM Mono', monospace"; ctx.textAlign = "center";
    const step = zoom < 0.4 ? 5 : zoom < 0.8 ? 2 : 1;
    for (let i = -range; i <= range; i += step) {
      if (i === 0) continue;
      const sx = toX(i), sy = toY(i);
      if (sx > 10 && sx < W - 10) ctx.fillText(String(i), sx, cy + 16);
      if (sy > 10 && sy < H - 10) ctx.fillText(i + "i", cx - 18, sy + 4);
    }
    ctx.fillText("Re", W - 18, cy - 8); ctx.fillText("Im", cx + 14, 14);

    const arrow = (fR, fI, tR, tI, col, w, dash) => {
      const x1 = toX(fR), y1 = toY(fI), x2 = toX(tR), y2 = toY(tI);
      const a = Math.atan2(y2 - y1, x2 - x1), hl = 10;
      ctx.save(); ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = w;
      if (dash) ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - hl * Math.cos(a - 0.35), y2 - hl * Math.sin(a - 0.35));
      ctx.lineTo(x2 - hl * Math.cos(a + 0.35), y2 - hl * Math.sin(a + 0.35));
      ctx.closePath(); ctx.fill(); ctx.restore();
    };

    ctx.save(); ctx.fillStyle = t.paraFill; ctx.strokeStyle = t.paraStroke;
    ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(toX(0), toY(0));
    ctx.lineTo(toX(z1.re), toY(z1.im)); ctx.lineTo(toX(result.re), toY(result.im));
    ctx.lineTo(toX(z2.re), toY(z2.im)); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.setLineDash([]); ctx.restore();

    const h1 = hovered === "z1", h2 = hovered === "z2", hR = hovered === "result";
    arrow(z1.re, z1.im, result.re, result.im, h2 ? t.ghostZ2h : t.ghostZ2, h2 ? 2.5 : 1.5, true);
    arrow(z2.re, z2.im, result.re, result.im, h1 ? t.ghostZ1h : t.ghostZ1, h1 ? 2.5 : 1.5, true);
    arrow(0, 0, z1.re, z1.im, t.z1, h1 ? 3.5 : 2.5, false);
    arrow(0, 0, z2.re, z2.im, t.z2, h2 ? 3.5 : 2.5, false);
    arrow(0, 0, result.re, result.im, t.result, hR ? 3.5 : 2.5, false);

    const dot = (re, im, col, sz) => {
      ctx.beginPath(); ctx.arc(toX(re), toY(im), sz, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = t.dotStroke; ctx.lineWidth = 1.5; ctx.stroke();
    };
    dot(z1.re, z1.im, t.z1, h1 ? 7 : 5);
    dot(z2.re, z2.im, t.z2, h2 ? 7 : 5);
    dot(result.re, result.im, t.result, hR ? 7 : 5);

    ctx.font = "bold 13px 'DM Mono', monospace"; ctx.textAlign = "left";
    ctx.fillStyle = t.z1; ctx.fillText("z\u2081", toX(z1.re) + 10, toY(z1.im) - 8);
    ctx.fillStyle = t.z2; ctx.fillText("z\u2082", toX(z2.re) + 10, toY(z2.im) - 8);
    ctx.fillStyle = t.result; ctx.fillText("z\u2081+z\u2082", toX(result.re) + 10, toY(result.im) - 8);
  }, [z1, z2, result, hovered, t, zoom, pan]);

  useEffect(() => { draw(); }, [draw]);
  useEffect(() => {
    const cvs = canvasRef.current; if (!cvs) return;
    const resize = () => { const r = cvs.parentElement.getBoundingClientRect(); cvs.width = r.width; cvs.height = r.height; draw(); };
    resize(); window.addEventListener("resize", resize); return () => window.removeEventListener("resize", resize);
  }, [draw]);
  useEffect(() => {
    const el = canvasRef.current?.parentElement; if (!el) return;
    const h = (e) => e.preventDefault(); el.addEventListener("wheel", h, { passive: false }); return () => el.removeEventListener("wheel", h);
  }, []);

  /* ─── input renderer ─── */
  const inputStyle = {
    flex: 1, borderRadius: 5, padding: "7px 9px", fontSize: 13,
    fontFamily: "'DM Mono',monospace", outline: "none", width: 55,
    background: t.inputBg, border: `1px solid ${t.border}`, color: t.textBright,
  };

  const renderFields = (z, setZ, mag, argRad, argDeg) => {
    if (formatMode === "exp") {
      /* exponential: magnitude + angle in RADIANS */
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <label style={{ fontSize: 10, color: t.textMuted }}>r</label>
          <input type="number" value={+mag.toFixed(4)} step="0.5" min="0"
            onChange={(e) => setZ(fromPolar(+e.target.value || 0, argRad))} style={inputStyle} />
          <label style={{ fontSize: 10, color: t.textMuted }}>θ<span style={{ fontSize: 8 }}> rad</span></label>
          <input type="number" value={+argRad.toFixed(4)} step="0.1"
            onChange={(e) => setZ(fromPolar(mag, +e.target.value || 0))} style={inputStyle} />
        </div>
      );
    }
    if (formatMode === "polar") {
      /* polar: magnitude + angle in DEGREES */
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <label style={{ fontSize: 10, color: t.textMuted }}>|z|</label>
          <input type="number" value={+mag.toFixed(4)} step="0.5" min="0"
            onChange={(e) => setZ(fromPolar(+e.target.value || 0, radOf(argDeg)))} style={inputStyle} />
          <label style={{ fontSize: 10, color: t.textMuted }}>∠°</label>
          <input type="number" value={+argDeg} step="5"
            onChange={(e) => setZ(fromPolar(mag, radOf(+e.target.value || 0)))} style={inputStyle} />
        </div>
      );
    }
    /* rectangular */
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <label style={{ fontSize: 10, color: t.textMuted }}>Re</label>
        <input type="number" value={z.re} step="0.5"
          onChange={(e) => setZ({ ...z, re: +e.target.value || 0 })} style={inputStyle} />
        <label style={{ fontSize: 10, color: t.textMuted }}>Im</label>
        <input type="number" value={z.im} step="0.5"
          onChange={(e) => setZ({ ...z, im: +e.target.value || 0 })} style={inputStyle} />
      </div>
    );
  };

  const altInfo = (z, mag, argRad, argDeg) => {
    if (formatMode === "exp") return `Re = ${fmt(z.re)}, Im = ${fmt(z.im)} · (${degOf(argRad)}°)`;
    if (formatMode === "polar") return `Re = ${fmt(z.re)}, Im = ${fmt(z.im)}`;
    return `|z| = ${fmt(mag)}  arg = ${degOf(argRad)}°`;
  };

  return (
    <div style={{ fontFamily: "'DM Mono','Fira Code',monospace", background: t.bg, color: t.text, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* header */}
      <div style={{ padding: "18px 24px 14px", borderBottom: `1px solid ${t.border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexShrink: 0 }}>
        <div>
          <span style={{ display: "inline-block", fontSize: 9, letterSpacing: "2.5px", color: t.accent, background: t.accentBg, padding: "2px 8px", borderRadius: 3, marginBottom: 4 }}>COMPLEX NUMBERS</span>
          <h1 style={{ margin: "0 0 2px", fontSize: 22, fontWeight: 700, color: t.textBright, letterSpacing: "-0.5px" }}>Addition</h1>
          <p style={{ margin: 0, fontSize: 12, color: t.textMuted }}>Parallelogram rule — combining two complex vectors</p>
        </div>
        <button onClick={() => setTheme((v) => v === "dark" ? "light" : "dark")}
          style={{ padding: "6px 12px", borderRadius: 5, fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", background: t.bgAlt, border: `1px solid ${t.border}`, color: t.textBright }}>
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
      </div>

      {/* 3-column layout */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* ── LEFT: inputs (1/4) ── */}
        <div style={{ width: "25%", minWidth: 240, padding: "16px 18px", overflowY: "auto", borderRight: `1px solid ${t.border}` }}>

          {/* z1 */}
          <div style={{ border: `1px solid ${hovered === "z1" ? t.z1 : t.border}`, borderRadius: 7, padding: "12px 14px", background: t.bgAlt, transition: "border-color 0.2s" }}
            onMouseEnter={() => setHovered("z1")} onMouseLeave={() => setHovered(null)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 600, color: t.textBright, marginBottom: 9 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: t.z1 }} />z₁
            </div>
            {renderFields(z1, setZ1, z1Mag, z1ArgRad, z1ArgDeg)}
            <div style={{ marginTop: 7, fontSize: 10, color: t.textMuted }}>{altInfo(z1, z1Mag, z1ArgRad, z1ArgDeg)}</div>
          </div>

          <div style={{ textAlign: "center", fontSize: 20, fontWeight: 700, color: t.textMuted, margin: "6px 0" }}>+</div>

          {/* z2 */}
          <div style={{ border: `1px solid ${hovered === "z2" ? t.z2 : t.border}`, borderRadius: 7, padding: "12px 14px", background: t.bgAlt, transition: "border-color 0.2s" }}
            onMouseEnter={() => setHovered("z2")} onMouseLeave={() => setHovered(null)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 600, color: t.textBright, marginBottom: 9 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: t.z2 }} />z₂
            </div>
            {renderFields(z2, setZ2, z2Mag, z2ArgRad, z2ArgDeg)}
            <div style={{ marginTop: 7, fontSize: 10, color: t.textMuted }}>{altInfo(z2, z2Mag, z2ArgRad, z2ArgDeg)}</div>
          </div>

          <div style={{ textAlign: "center", fontSize: 20, fontWeight: 700, color: t.textMuted, margin: "6px 0" }}>=</div>

          {/* result */}
          <div style={{ border: `1px solid ${hovered === "result" ? t.result : t.border}`, borderRadius: 7, padding: "12px 14px", background: t.bgAlt, transition: "border-color 0.2s" }}
            onMouseEnter={() => setHovered("result")} onMouseLeave={() => setHovered(null)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 600, color: t.textBright, marginBottom: 9 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: t.result }} />z₁ + z₂
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: t.result }}>
              <FmtNum z={result} mode={formatMode} />
            </div>
            <div style={{ marginTop: 7, fontSize: 10, color: t.textMuted }}>
              |z| = {fmt(cMag(result))}  arg = {degOf(cArg(result))}°
            </div>
          </div>

          {/* format toggle */}
          <div style={{ display: "flex", gap: 5, marginTop: 12 }}>
            {[
              { key: "rect", label: "a + bi" },
              { key: "polar", label: "r ∠ θ°" },
              { key: "exp", label: <span>re<sup style={{ fontSize: "0.7em" }}>iθ</sup></span> },
            ].map((m) => (
              <button key={m.key} onClick={() => setFormatMode(m.key)}
                style={{
                  flex: 1, padding: "5px 0", fontSize: 11, fontFamily: "'DM Mono',monospace",
                  borderRadius: 4, cursor: "pointer", transition: "all 0.15s",
                  background: formatMode === m.key ? t.accentBg2 : t.inputBg,
                  border: `1px solid ${formatMode === m.key ? t.accent : t.border}`,
                  color: formatMode === m.key ? t.accent : t.textMuted,
                }}>
                {m.label}
              </button>
            ))}
          </div>

          <button onClick={addToHistory}
            style={{ width: "100%", marginTop: 8, padding: 7, fontSize: 11, fontFamily: "'DM Mono',monospace", borderRadius: 4, cursor: "pointer", background: t.z1bg, border: `1px solid ${t.z1border}`, color: t.z1 }}>
            Save to History
          </button>

          {/* history */}
          {history.length > 0 && (
            <div style={{ marginTop: 14, padding: "10px 12px", borderRadius: 7, background: t.bgDeep, border: `1px solid ${t.border}` }}>
              <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>History</div>
              <div style={{ maxHeight: 140, overflowY: "auto", display: "flex", flexDirection: "column", gap: 3 }}>
                {history.map((h) => (
                  <div key={h.id} onClick={() => { setZ1(h.z1); setZ2(h.z2); }}
                    style={{ fontSize: 11, padding: "4px 7px", borderRadius: 3, cursor: "pointer", background: t.histItemBg }}>
                    <span style={{ color: t.z1 }}><FmtNum z={h.z1} mode={formatMode} /></span>
                    {" + "}
                    <span style={{ color: t.z2 }}><FmtNum z={h.z2} mode={formatMode} /></span>
                    {" = "}
                    <span style={{ color: t.result }}><FmtNum z={h.result} mode={formatMode} /></span>
                  </div>
                ))}
              </div>
              <button onClick={() => setHistory([])}
                style={{ marginTop: 6, padding: "3px 8px", fontSize: 10, fontFamily: "'DM Mono',monospace", background: "none", border: `1px solid ${t.border}`, borderRadius: 3, color: t.textMuted, cursor: "pointer" }}>
                Clear
              </button>
            </div>
          )}
        </div>

        {/* ── CENTER: canvas (2/4) ── */}
        <div style={{ width: "50%", display: "flex", flexDirection: "column", padding: "16px 18px", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, textTransform: "uppercase" }}>Argand Diagram</span>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {[{ l: "+", fn: () => setZoom((z) => Math.min(z * 1.3, 12)) },
                { l: "−", fn: () => setZoom((z) => Math.max(z / 1.3, 0.15)) }].map((b) => (
                <button key={b.l} onClick={b.fn}
                  style={{ width: 26, height: 26, borderRadius: 4, fontSize: 15, fontFamily: "'DM Mono',monospace", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: t.bgAlt, border: `1px solid ${t.border}`, color: t.textBright }}>
                  {b.l}
                </button>
              ))}
              <button onClick={resetView}
                style={{ padding: "3px 8px", borderRadius: 4, fontSize: 10, fontFamily: "'DM Mono',monospace", cursor: "pointer", background: t.bgAlt, border: `1px solid ${t.border}`, color: t.textMuted }}>
                Reset
              </button>
              <span style={{ fontSize: 10, color: t.textMuted, minWidth: 36, textAlign: "right" }}>{Math.round(zoom * 100)}%</span>
            </div>
          </div>
          <div style={{ flex: 1, borderRadius: 7, overflow: "hidden", border: `1px solid ${t.border}`, position: "relative", minHeight: 200, touchAction: "none", cursor: isPanning ? "grabbing" : "grab" }}
            onPointerDown={onPtrDown} onPointerMove={onPtrMove} onPointerUp={onPtrUp} onPointerCancel={onPtrUp} onWheel={onWheel}>
            <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 8, fontSize: 11 }}>
            {[{ c: t.z1, l: "z₁" }, { c: t.z2, l: "z₂" }, { c: t.result, l: "z₁+z₂" }].map((v) => (
              <span key={v.l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: v.c }} />
                <span style={{ color: t.textMid }}>{v.l}</span>
              </span>
            ))}
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: "transparent", border: `1.5px dashed ${t.paraStroke}` }} />
              <span style={{ color: t.textMid }}>parallelogram</span>
            </span>
          </div>
        </div>

        {/* ── RIGHT: explanations (1/4) ── */}
        <div style={{ width: "25%", minWidth: 220, padding: "16px 18px", overflowY: "auto", borderLeft: `1px solid ${t.border}` }}>

          <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 12, textTransform: "uppercase" }}>Step-by-step</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>1</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Add real parts</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{fmt(z1.re)} + {fmt(z2.re)} = {fmt(result.re)}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>2</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Add imaginary parts</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{fmt(z1.im)}i + {fmt(z2.im)}i = {fmt(result.im)}i</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>3</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Combine</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>
                  ({fmt(z1.re)} + {fmt(z1.im)}i) + ({fmt(z2.re)} + {fmt(z2.im)}i)
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.result, marginTop: 3 }}>
                  = <FmtNum z={result} mode={formatMode} />
                </div>
              </div>
            </div>
          </div>

          {/* geometric note */}
          <div style={{ marginTop: 18, fontSize: 11, lineHeight: 1.55, padding: "10px 11px", borderRadius: 5, borderLeft: `2px solid ${t.stepNoteBorder}`, background: t.stepNoteBg, color: t.textMuted }}>
            <strong style={{ color: t.textMid }}>Geometric interpretation</strong><br />
            Place z₂'s tail at z₁'s tip. The diagonal of the parallelogram formed by the two vectors gives the sum.
          </div>

          {/* all three representations */}
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 8, textTransform: "uppercase" }}>All representations</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ padding: "8px 10px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 9, color: t.textMuted, marginBottom: 3, textTransform: "uppercase", letterSpacing: "1px" }}>Rectangular</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{fmtRect(result)}</div>
              </div>
              <div style={{ padding: "8px 10px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 9, color: t.textMuted, marginBottom: 3, textTransform: "uppercase", letterSpacing: "1px" }}>Polar</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{fmtPolar(result)}</div>
              </div>
              <div style={{ padding: "8px 10px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 9, color: t.textMuted, marginBottom: 3, textTransform: "uppercase", letterSpacing: "1px" }}>Exponential</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}><FmtExp z={result} /></div>
              </div>
            </div>
          </div>

          {/* formula reference */}
          <div style={{ marginTop: 18, padding: "10px 12px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: "1.5px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>Formula Reference</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright, marginBottom: 5 }}>
              (a + bi) + (c + di) = (a+c) + (b+d)i
            </div>
            <div style={{ fontSize: 10, color: t.textMuted, lineHeight: 1.4 }}>
              In polar form, addition has no simple shortcut — convert to rectangular, add components, then convert back.
            </div>
          </div>

          {/* properties */}
          <div style={{ marginTop: 18, padding: "10px 12px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: "1.5px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>Properties</div>
            <div style={{ fontSize: 11, color: t.textMid, lineHeight: 1.6 }}>
              <div style={{ marginBottom: 4 }}><strong>Commutative:</strong> z₁ + z₂ = z₂ + z₁</div>
              <div style={{ marginBottom: 4 }}><strong>Associative:</strong> (z₁ + z₂) + z₃ = z₁ + (z₂ + z₃)</div>
              <div style={{ marginBottom: 4 }}><strong>Identity:</strong> z + 0 = z</div>
              <div><strong>Inverse:</strong> z + (−z) = 0</div>
            </div>
          </div>

          {/* triangle inequality */}
          <div style={{ marginTop: 18, padding: "10px 12px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: "1.5px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>Triangle Inequality</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: t.textBright, marginBottom: 5 }}>
              |z₁ + z₂| ≤ |z₁| + |z₂|
            </div>
            <div style={{ fontSize: 11, color: t.textMid, lineHeight: 1.5 }}>
              <div>{fmt(cMag(result))} ≤ {fmt(z1Mag)} + {fmt(z2Mag)} = {fmt(z1Mag + z2Mag)}</div>
              <div style={{ marginTop: 4, color: t.textMuted }}>
                {Math.abs(cMag(result) - (z1Mag + z2Mag)) < 0.0001
                  ? "Equality holds — vectors are parallel (same direction)."
                  : "Strict inequality — vectors are not parallel."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}