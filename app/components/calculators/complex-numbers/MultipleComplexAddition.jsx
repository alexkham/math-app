import { useState, useRef, useEffect, useCallback } from "react";

/* ─── math ─── */
const cMag = (z) => Math.sqrt(z.re * z.re + z.im * z.im);
const cArg = (z) => Math.atan2(z.im, z.re);
const fromPolar = (mag, rad) => ({ re: mag * Math.cos(rad), im: mag * Math.sin(rad) });
const degOf = (rad) => ((rad * 180) / Math.PI).toFixed(2);
const radOf = (deg) => (deg * Math.PI) / 180;
const fmt = (v) => {
  const n = +v.toFixed(6);
  return n === 0 ? "0" : n % 1 === 0 ? String(n) : n.toFixed(4).replace(/0+$/, "");
};
const fmtRect = (z) => {
  const r = fmt(z.re), i = fmt(Math.abs(z.im));
  if (z.im === 0) return r;
  if (z.re === 0) return z.im < 0 ? `−${i}i` : `${i}i`;
  return `${r} ${z.im < 0 ? "−" : "+"} ${i}i`;
};
const fmtPolar = (z) => `${fmt(cMag(z))} ∠ ${degOf(cArg(z))}°`;
const FmtExp = ({ z }) => (
  <span>{fmt(cMag(z))}·e<sup style={{ fontSize: "0.75em" }}>{fmt(cArg(z))}i</sup></span>
);
const FmtNum = ({ z, mode }) => {
  if (mode === "exp") return <FmtExp z={z} />;
  if (mode === "polar") return <span>{fmtPolar(z)}</span>;
  return <span>{fmtRect(z)}</span>;
};

/* ─── color palette (up to 8) ─── */
const COLORS_DARK = ["#48d1cc", "#f59e42", "#a78bfa", "#34d399", "#f472b6", "#facc15", "#60a5fa", "#fb923c"];
const COLORS_LIGHT = ["#0e918c", "#d97a0d", "#7c3aed", "#059669", "#db2777", "#ca8a04", "#2563eb", "#ea580c"];
const RESULT_DARK = "#e06c75";
const RESULT_LIGHT = "#c0392b";

/* ─── themes ─── */
const themes = {
  dark: {
    bg: "#0d1117", bgAlt: "#0f1923", bgDeep: "#0a0e14",
    border: "#1a2332", text: "#c9d1d9", textBright: "#e6edf3",
    textMuted: "#4a5568", textMid: "#8b949e", accent: "#58a6ff",
    accentBg: "rgba(88,166,255,0.08)", accentBg2: "rgba(88,166,255,0.1)",
    inputBg: "#161b22", result: RESULT_DARK, colors: COLORS_DARK,
    paraFill: "rgba(99,179,237,0.04)", paraStroke: "rgba(99,179,237,0.12)",
    canvasBg: "#0d1117", gridLine: "#1a2332", axisLine: "#2d3a4a",
    axisLabel: "#4a5568", dotStroke: "#0d1117",
    stepNoteBg: "rgba(88,166,255,0.04)", stepNoteBorder: "rgba(88,166,255,0.2)",
    dangerBg: "rgba(224,108,117,0.08)", dangerBorder: "rgba(224,108,117,0.25)",
    danger: "#e06c75",
  },
  light: {
    bg: "#f8f9fb", bgAlt: "#ffffff", bgDeep: "#f0f2f5",
    border: "#d8dce3", text: "#3d4450", textBright: "#1a1e26",
    textMuted: "#8893a2", textMid: "#5f6b7a", accent: "#2563eb",
    accentBg: "rgba(37,99,235,0.07)", accentBg2: "rgba(37,99,235,0.12)",
    inputBg: "#f0f2f5", result: RESULT_LIGHT, colors: COLORS_LIGHT,
    paraFill: "rgba(37,99,235,0.04)", paraStroke: "rgba(37,99,235,0.15)",
    canvasBg: "#ffffff", gridLine: "#e8ecf1", axisLine: "#bfc6d0",
    axisLabel: "#8893a2", dotStroke: "#ffffff",
    stepNoteBg: "rgba(37,99,235,0.04)", stepNoteBorder: "rgba(37,99,235,0.2)",
    dangerBg: "rgba(192,57,43,0.08)", dangerBorder: "rgba(192,57,43,0.25)",
    danger: "#c0392b",
  },
};

let idCounter = 3;

export default function MultipleComplexAddition() {
  const [numbers, setNumbers] = useState([
    { id: 1, re: 3, im: 2 },
    { id: 2, re: 1, im: 4 },
  ]);
  const [formatMode, setFormatMode] = useState("rect");
  const [hovered, setHovered] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [history, setHistory] = useState([]);
  const panStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const canvasRef = useRef(null);

  const t = themes[theme];
  const result = numbers.reduce((acc, z) => ({ re: acc.re + z.re, im: acc.im + z.im }), { re: 0, im: 0 });

  /* partial sums for chain */
  const partials = [];
  let running = { re: 0, im: 0 };
  for (const z of numbers) {
    running = { re: running.re + z.re, im: running.im + z.im };
    partials.push({ ...running });
  }

  const addNumber = () => {
    if (numbers.length >= 8) return;
    setNumbers((n) => [...n, { id: idCounter++, re: 1, im: 1 }]);
  };
  const removeNumber = (id) => {
    if (numbers.length <= 2) return;
    setNumbers((n) => n.filter((z) => z.id !== id));
  };
  const updateNumber = (id, field, value) => {
    setNumbers((n) => n.map((z) => z.id === id ? { ...z, [field]: value } : z));
  };
  const setFullNumber = (id, newZ) => {
    setNumbers((n) => n.map((z) => z.id === id ? { ...z, re: newZ.re, im: newZ.im } : z));
  };

  const addToHistory = () => {
    setHistory((h) => [
      { nums: numbers.map((z) => ({ ...z })), result: { ...result }, id: Date.now() },
      ...h.slice(0, 14),
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

  const getColor = (idx) => t.colors[idx % t.colors.length];
  const getGhost = (idx) => {
    const c = getColor(idx);
    return c.replace(")", ",0.3)").replace("rgb", "rgba").replace("#", "");
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

    const allPts = [...numbers, result, { re: 0, im: 0 }, ...partials];
    const maxV = Math.max(...allPts.map((p) => Math.max(Math.abs(p.re), Math.abs(p.im))), 1);
    const sc = (Math.min(W, H) / (2 * maxV * 1.6)) * zoom;
    const cx = W / 2 + pan.x, cy = H / 2 + pan.y;
    const toX = (re) => cx + re * sc;
    const toY = (im) => cy - im * sc;

    /* grid */
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
    ctx.fillText("Re", W - 18, cy - 8);
    ctx.fillText("Im", cx + 14, 14);

    const arrow = (fR, fI, tR, tI, col, w, dash) => {
      const x1 = toX(fR), y1 = toY(fI), x2 = toX(tR), y2 = toY(tI);
      const dx = x2 - x1, dy = y2 - y1;
      if (Math.sqrt(dx * dx + dy * dy) < 2) return;
      const a = Math.atan2(dy, dx), hl = 9;
      ctx.save(); ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = w;
      if (dash) ctx.setLineDash([5, 3]);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - hl * Math.cos(a - 0.35), y2 - hl * Math.sin(a - 0.35));
      ctx.lineTo(x2 - hl * Math.cos(a + 0.35), y2 - hl * Math.sin(a + 0.35));
      ctx.closePath(); ctx.fill(); ctx.restore();
    };

    const dot = (re, im, col, sz) => {
      ctx.beginPath(); ctx.arc(toX(re), toY(im), sz, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = t.dotStroke; ctx.lineWidth = 1.5; ctx.stroke();
    };

    /* chain path fill */
    if (numbers.length >= 2) {
      ctx.save();
      ctx.fillStyle = t.paraFill;
      ctx.strokeStyle = t.paraStroke;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(toX(0), toY(0));
      for (const p of partials) ctx.lineTo(toX(p.re), toY(p.im));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    /* vectors from origin (lighter) */
    numbers.forEach((z, i) => {
      const col = getColor(i);
      const isH = hovered === z.id;
      const alpha = isH ? "0.5" : "0.18";
      const c = col.startsWith("#")
        ? col + (isH ? "80" : "2E")
        : col;
      arrow(0, 0, z.re, z.im, c, isH ? 2 : 1, true);
    });

    /* chain vectors (solid) */
    let prev = { re: 0, im: 0 };
    numbers.forEach((z, i) => {
      const col = getColor(i);
      const isH = hovered === z.id;
      arrow(prev.re, prev.im, partials[i].re, partials[i].im, col, isH ? 3 : 2, false);
      prev = partials[i];
    });

    /* result vector */
    const rH = hovered === "result";
    arrow(0, 0, result.re, result.im, t.result, rH ? 3.5 : 2.5, false);

    /* partial sum dots */
    partials.forEach((p, i) => {
      const isH = hovered === numbers[i]?.id;
      dot(p.re, p.im, getColor(i), isH ? 6 : 3.5);
    });

    /* origin dot */
    dot(0, 0, t.axisLine, 3);

    /* result dot */
    dot(result.re, result.im, t.result, rH ? 7 : 5);

    /* labels */
    ctx.font = "bold 12px 'DM Mono', monospace"; ctx.textAlign = "left";
    numbers.forEach((z, i) => {
      ctx.fillStyle = getColor(i);
      ctx.fillText(`z${i + 1}`, toX(z.re) + 8, toY(z.im) - 7);
    });
    ctx.fillStyle = t.result;
    ctx.fillText("Σ", toX(result.re) + 10, toY(result.im) - 8);
  }, [numbers, result, partials, hovered, t, zoom, pan]);

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

  /* ─── input row ─── */
  const inputSty = {
    borderRadius: 4, padding: "5px 7px", fontSize: 12,
    fontFamily: "'DM Mono',monospace", outline: "none", width: 58,
    background: t.inputBg, border: `1px solid ${t.border}`, color: t.textBright,
  };

  const renderRow = (z, idx) => {
    const col = getColor(idx);
    const mag = cMag(z);
    const argR = cArg(z);
    const argD = +degOf(argR);
    const isH = hovered === z.id;

    return (
      <div key={z.id}
        style={{
          display: "flex", alignItems: "center", gap: 6, padding: "7px 10px",
          borderRadius: 5, background: t.bgAlt,
          border: `1px solid ${isH ? col : t.border}`,
          transition: "border-color 0.2s",
        }}
        onMouseEnter={() => setHovered(z.id)}
        onMouseLeave={() => setHovered(null)}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: col, flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: t.textBright, minWidth: 20 }}>z{idx + 1}</span>

        {formatMode === "rect" && (
          <>
            <input type="number" value={z.re} step="0.5" style={inputSty}
              onChange={(e) => updateNumber(z.id, "re", +e.target.value || 0)} />
            <span style={{ fontSize: 9, color: t.textMuted }}>+</span>
            <input type="number" value={z.im} step="0.5" style={inputSty}
              onChange={(e) => updateNumber(z.id, "im", +e.target.value || 0)} />
            <span style={{ fontSize: 9, color: t.textMuted }}>i</span>
          </>
        )}
        {formatMode === "polar" && (
          <>
            <input type="number" value={+mag.toFixed(4)} step="0.5" min="0" style={inputSty}
              onChange={(e) => setFullNumber(z.id, fromPolar(+e.target.value || 0, radOf(argD)))} />
            <span style={{ fontSize: 9, color: t.textMuted }}>∠</span>
            <input type="number" value={argD} step="5" style={inputSty}
              onChange={(e) => setFullNumber(z.id, fromPolar(mag, radOf(+e.target.value || 0)))} />
            <span style={{ fontSize: 9, color: t.textMuted }}>°</span>
          </>
        )}
        {formatMode === "exp" && (
          <>
            <input type="number" value={+mag.toFixed(4)} step="0.5" min="0" style={inputSty}
              onChange={(e) => setFullNumber(z.id, fromPolar(+e.target.value || 0, argR))} />
            <span style={{ fontSize: 9, color: t.textMuted }}>e<sup style={{ fontSize: "0.7em" }}>i</sup></span>
            <input type="number" value={+argR.toFixed(4)} step="0.1" style={inputSty}
              onChange={(e) => setFullNumber(z.id, fromPolar(mag, +e.target.value || 0))} />
            <span style={{ fontSize: 9, color: t.textMuted }}>rad</span>
          </>
        )}

        {numbers.length > 2 && (
          <button onClick={() => removeNumber(z.id)}
            style={{ marginLeft: "auto", background: t.dangerBg, border: `1px solid ${t.dangerBorder}`, borderRadius: 3, color: t.danger, fontSize: 12, cursor: "pointer", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Mono',monospace", padding: 0, flexShrink: 0 }}>
            ×
          </button>
        )}
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'DM Mono','Fira Code',monospace", background: t.bg, color: t.text, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* header */}
      <div style={{ padding: "18px 24px 14px", borderBottom: `1px solid ${t.border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexShrink: 0 }}>
        <div>
          <span style={{ display: "inline-block", fontSize: 9, letterSpacing: "2.5px", color: t.accent, background: t.accentBg, padding: "2px 8px", borderRadius: 3, marginBottom: 4 }}>COMPLEX NUMBERS</span>
          <h1 style={{ margin: "0 0 2px", fontSize: 22, fontWeight: 700, color: t.textBright, letterSpacing: "-0.5px" }}>Multiple Addition</h1>
          <p style={{ margin: 0, fontSize: 12, color: t.textMuted }}>Vector chain — sum of N complex numbers</p>
        </div>
        <button onClick={() => setTheme((v) => v === "dark" ? "light" : "dark")}
          style={{ padding: "6px 12px", borderRadius: 5, fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", background: t.bgAlt, border: `1px solid ${t.border}`, color: t.textBright }}>
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
      </div>

      {/* 3-column */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* LEFT (1/4) */}
        <div style={{ width: "25%", minWidth: 280, padding: "14px 16px", overflowY: "auto", borderRight: `1px solid ${t.border}` }}>

          {/* format toggle */}
          <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
            {[
              { key: "rect", label: "a + bi" },
              { key: "polar", label: "r ∠ θ°" },
              { key: "exp", label: <span>re<sup style={{ fontSize: "0.7em" }}>iθ</sup></span> },
            ].map((m) => (
              <button key={m.key} onClick={() => setFormatMode(m.key)}
                style={{
                  flex: 1, padding: "5px 0", fontSize: 11, fontFamily: "'DM Mono',monospace",
                  borderRadius: 4, cursor: "pointer",
                  background: formatMode === m.key ? t.accentBg2 : t.inputBg,
                  border: `1px solid ${formatMode === m.key ? t.accent : t.border}`,
                  color: formatMode === m.key ? t.accent : t.textMuted,
                }}>
                {m.label}
              </button>
            ))}
          </div>

          {/* number rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {numbers.map((z, i) => renderRow(z, i))}
          </div>

          {/* add button */}
          {numbers.length < 8 && (
            <button onClick={addNumber}
              style={{ width: "100%", marginTop: 8, padding: 7, fontSize: 11, fontFamily: "'DM Mono',monospace", borderRadius: 4, cursor: "pointer", background: t.accentBg, border: `1px solid ${t.accent}44`, color: t.accent }}>
              + Add number ({numbers.length}/8)
            </button>
          )}

          {/* result */}
          <div style={{ marginTop: 14, border: `1px solid ${hovered === "result" ? t.result : t.border}`, borderRadius: 7, padding: "12px 14px", background: t.bgAlt, transition: "border-color 0.2s" }}
            onMouseEnter={() => setHovered("result")} onMouseLeave={() => setHovered(null)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 600, color: t.textBright, marginBottom: 8 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: t.result }} />
              Σ (Sum)
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: t.result }}>
              <FmtNum z={result} mode={formatMode} />
            </div>
            <div style={{ marginTop: 6, fontSize: 10, color: t.textMuted }}>
              |z| = {fmt(cMag(result))}  arg = {degOf(cArg(result))}°
            </div>
          </div>

          <button onClick={addToHistory}
            style={{ width: "100%", marginTop: 8, padding: 7, fontSize: 11, fontFamily: "'DM Mono',monospace", borderRadius: 4, cursor: "pointer", background: t.accentBg, border: `1px solid ${t.accent}33`, color: t.accent }}>
            Save to History
          </button>

          {/* history */}
          {history.length > 0 && (
            <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 6, background: t.bgDeep, border: `1px solid ${t.border}` }}>
              <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>History</div>
              <div style={{ maxHeight: 120, overflowY: "auto", display: "flex", flexDirection: "column", gap: 3 }}>
                {history.map((h) => (
                  <div key={h.id}
                    onClick={() => setNumbers(h.nums.map((z) => ({ ...z })))}
                    style={{ fontSize: 10, padding: "4px 7px", borderRadius: 3, cursor: "pointer", background: t.histItemBg, lineHeight: 1.5 }}>
                    {h.nums.map((z, i) => (
                      <span key={i}>
                        {i > 0 && <span style={{ color: t.textMuted }}> + </span>}
                        <span style={{ color: getColor(i) }}><FmtNum z={z} mode={formatMode} /></span>
                      </span>
                    ))}
                    <span style={{ color: t.textMuted }}> = </span>
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

        {/* CENTER canvas (2/4) */}
        <div style={{ width: "50%", display: "flex", flexDirection: "column", padding: "14px 16px", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, textTransform: "uppercase" }}>Argand Diagram — Vector Chain</span>
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
          {/* legend */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 14px", marginTop: 8, fontSize: 11 }}>
            {numbers.map((z, i) => (
              <span key={z.id} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: getColor(i) }} />
                <span style={{ color: t.textMid }}>z{i + 1}</span>
              </span>
            ))}
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: t.result }} />
              <span style={{ color: t.textMid }}>Σ</span>
            </span>
          </div>
        </div>

        {/* RIGHT explanations (1/4) */}
        <div style={{ width: "25%", minWidth: 220, padding: "14px 16px", overflowY: "auto", borderLeft: `1px solid ${t.border}` }}>

          <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 12, textTransform: "uppercase" }}>Step-by-step</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* step 1: sum real */}
            <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>1</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Sum real parts</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: t.textBright }}>
                  {numbers.map((z, i) => (
                    <span key={z.id}>
                      {i > 0 && " + "}
                      <span style={{ color: getColor(i) }}>{fmt(z.re)}</span>
                    </span>
                  ))}
                  {" = "}{fmt(result.re)}
                </div>
              </div>
            </div>

            {/* step 2: sum imaginary */}
            <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>2</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Sum imaginary parts</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: t.textBright }}>
                  {numbers.map((z, i) => (
                    <span key={z.id}>
                      {i > 0 && " + "}
                      <span style={{ color: getColor(i) }}>{fmt(z.im)}</span>
                    </span>
                  ))}
                  {"i = "}{fmt(result.im)}i
                </div>
              </div>
            </div>

            {/* step 3: combine */}
            <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>3</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Result</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: t.result }}>
                  <FmtNum z={result} mode={formatMode} />
                </div>
              </div>
            </div>
          </div>

          {/* partial sums */}
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 8, textTransform: "uppercase" }}>Running Partial Sums</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {partials.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: getColor(i), flexShrink: 0 }} />
                  <span style={{ color: t.textMid }}>S{i + 1}:</span>
                  <span style={{ color: t.textBright, fontWeight: 600 }}><FmtNum z={p} mode={formatMode} /></span>
                </div>
              ))}
            </div>
          </div>

          {/* geometric note */}
          <div style={{ marginTop: 18, fontSize: 11, lineHeight: 1.55, padding: "10px 11px", borderRadius: 5, borderLeft: `2px solid ${t.stepNoteBorder}`, background: t.stepNoteBg, color: t.textMuted }}>
            <strong style={{ color: t.textMid }}>Vector Chain</strong><br />
            Each vector is placed tip-to-tail. The solid colored arrows form the chain from origin to result. Dashed arrows show each vector from the origin for reference. The result (Σ) goes directly from origin to the final point.
          </div>

          {/* all representations */}
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 8, textTransform: "uppercase" }}>All Representations</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ padding: "7px 10px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 9, color: t.textMuted, marginBottom: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Rectangular</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{fmtRect(result)}</div>
              </div>
              <div style={{ padding: "7px 10px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 9, color: t.textMuted, marginBottom: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Polar</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{fmtPolar(result)}</div>
              </div>
              <div style={{ padding: "7px 10px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 9, color: t.textMuted, marginBottom: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Exponential</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}><FmtExp z={result} /></div>
              </div>
            </div>
          </div>

          {/* formula */}
          <div style={{ marginTop: 18, padding: "10px 12px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: "1.5px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>Formula</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: t.textBright, marginBottom: 4 }}>
              Σz<sub>k</sub> = Σ Re(z<sub>k</sub>) + i · Σ Im(z<sub>k</sub>)
            </div>
            <div style={{ fontSize: 10, color: t.textMuted, lineHeight: 1.4 }}>
              Addition is performed component-wise regardless of how many terms. Convert to rectangular if needed.
            </div>
          </div>

          {/* triangle inequality */}
          <div style={{ marginTop: 18, padding: "10px 12px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: "1.5px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>Generalized Triangle Inequality</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: t.textBright, marginBottom: 4 }}>
              |Σz<sub>k</sub>| ≤ Σ|z<sub>k</sub>|
            </div>
            <div style={{ fontSize: 11, color: t.textMid, lineHeight: 1.5 }}>
              <div>
                {fmt(cMag(result))} ≤ {numbers.map((z) => fmt(cMag(z))).join(" + ")} = {fmt(numbers.reduce((s, z) => s + cMag(z), 0))}
              </div>
              <div style={{ marginTop: 4, color: t.textMuted }}>
                {Math.abs(cMag(result) - numbers.reduce((s, z) => s + cMag(z), 0)) < 0.0001
                  ? "Equality — all vectors point in the same direction."
                  : "Strict inequality — vectors are not all collinear."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}