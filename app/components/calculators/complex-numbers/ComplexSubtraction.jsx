import { useState, useRef, useEffect, useCallback } from "react";

/* ─── math ─── */
const cSub = (a, b) => ({ re: a.re - b.re, im: a.im - b.im });
const cNeg = (z) => ({ re: -z.re, im: -z.im });
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

/* ─── themes ─── */
const themes = {
  dark: {
    bg: "#0d1117", bgAlt: "#0f1923", bgDeep: "#0a0e14",
    border: "#1a2332", text: "#c9d1d9", textBright: "#e6edf3",
    textMuted: "#4a5568", textMid: "#8b949e", accent: "#58a6ff",
    accentBg: "rgba(88,166,255,0.08)", accentBg2: "rgba(88,166,255,0.1)",
    inputBg: "#161b22",
    z1: "#48d1cc", z2: "#f59e42", negZ2: "#c084fc", result: "#e06c75",
    distLine: "#a78bfa",
    paraFill: "rgba(192,132,252,0.06)", paraStroke: "rgba(192,132,252,0.2)",
    ghostZ1: "rgba(72,209,204,0.25)", ghostZ1h: "rgba(72,209,204,0.6)",
    ghostNeg: "rgba(192,132,252,0.25)", ghostNegh: "rgba(192,132,252,0.6)",
    canvasBg: "#0d1117", gridLine: "#1a2332", axisLine: "#2d3a4a",
    axisLabel: "#4a5568", dotStroke: "#0d1117",
    stepNoteBg: "rgba(88,166,255,0.04)", stepNoteBorder: "rgba(88,166,255,0.2)",
    histItemBg: "rgba(255,255,255,0.02)",
    reflectLine: "rgba(245,158,66,0.15)",
  },
  light: {
    bg: "#f8f9fb", bgAlt: "#ffffff", bgDeep: "#f0f2f5",
    border: "#d8dce3", text: "#3d4450", textBright: "#1a1e26",
    textMuted: "#8893a2", textMid: "#5f6b7a", accent: "#2563eb",
    accentBg: "rgba(37,99,235,0.07)", accentBg2: "rgba(37,99,235,0.12)",
    inputBg: "#f0f2f5",
    z1: "#0e918c", z2: "#d97a0d", negZ2: "#7c3aed", result: "#c0392b",
    distLine: "#7c3aed",
    paraFill: "rgba(124,58,237,0.06)", paraStroke: "rgba(124,58,237,0.2)",
    ghostZ1: "rgba(14,145,140,0.25)", ghostZ1h: "rgba(14,145,140,0.6)",
    ghostNeg: "rgba(124,58,237,0.25)", ghostNegh: "rgba(124,58,237,0.6)",
    canvasBg: "#ffffff", gridLine: "#e8ecf1", axisLine: "#bfc6d0",
    axisLabel: "#8893a2", dotStroke: "#ffffff",
    stepNoteBg: "rgba(37,99,235,0.04)", stepNoteBorder: "rgba(37,99,235,0.2)",
    histItemBg: "rgba(0,0,0,0.02)",
    reflectLine: "rgba(217,122,13,0.15)",
  },
};

export default function ComplexSubtraction() {
  const [z1, setZ1] = useState({ re: 5, im: 3 });
  const [z2, setZ2] = useState({ re: 2, im: 5 });
  const [history, setHistory] = useState([]);
  const [formatMode, setFormatMode] = useState("rect");
  const [hovered, setHovered] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [showDistance, setShowDistance] = useState(true);
  const [showOrigZ2, setShowOrigZ2] = useState(true);
  const panStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const canvasRef = useRef(null);

  const t = themes[theme];
  const result = cSub(z1, z2);
  const negZ2 = cNeg(z2);
  const distance = cMag(result);

  const z1Mag = cMag(z1), z1ArgR = cArg(z1), z1ArgD = +degOf(z1ArgR);
  const z2Mag = cMag(z2), z2ArgR = cArg(z2), z2ArgD = +degOf(z2ArgR);

  const addToHistory = () => {
    setHistory((h) => [
      { z1: { ...z1 }, z2: { ...z2 }, result: { ...result }, id: Date.now() },
      ...h.slice(0, 19),
    ]);
  };
  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

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

    const allPts = [z1, z2, result, negZ2, { re: 0, im: 0 }];
    const maxV = Math.max(...allPts.map((p) => Math.max(Math.abs(p.re), Math.abs(p.im))), 1);
    const sc = (Math.min(W, H) / (2 * maxV * 1.6)) * zoom;
    /* origin sits at center */
    const cx = W / 2 + pan.x;
    const cy = H / 2 + pan.y;
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
    ctx.fillText("Re", W - 18, cy - 8); ctx.fillText("Im", cx + 14, 14);

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
      ctx.fillStyle = col; ctx.fill();
      ctx.strokeStyle = t.dotStroke; ctx.lineWidth = 1.5; ctx.stroke();
    };

    const hollowDot = (re, im, col, sz) => {
      ctx.beginPath(); ctx.arc(toX(re), toY(im), sz, 0, Math.PI * 2);
      ctx.fillStyle = t.canvasBg; ctx.fill();
      ctx.strokeStyle = col; ctx.lineWidth = 2;
      ctx.setLineDash([2, 2]); ctx.stroke(); ctx.setLineDash([]);
    };

    /* ─── reflection line z₂ ↔ −z₂ ─── */
    ctx.save();
    ctx.strokeStyle = t.reflectLine;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 5]);
    ctx.beginPath();
    ctx.moveTo(toX(z2.re * 1.4), toY(z2.im * 1.4));
    ctx.lineTo(toX(negZ2.re * 1.4), toY(negZ2.im * 1.4));
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    /* ─── PARALLELOGRAM: z₁ and −z₂ ─── */
    const isNegH = hovered === "negz2";
    const isZ1H = hovered === "z1";

    ctx.save();
    ctx.fillStyle = t.paraFill;
    ctx.strokeStyle = t.paraStroke;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(toX(0), toY(0));
    ctx.lineTo(toX(z1.re), toY(z1.im));
    ctx.lineTo(toX(result.re), toY(result.im));
    ctx.lineTo(toX(negZ2.re), toY(negZ2.im));
    ctx.closePath();
    ctx.fill(); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    /* ghost translated copies inside parallelogram */
    arrow(z1.re, z1.im, result.re, result.im, isNegH ? t.ghostNegh : t.ghostNeg, isNegH ? 2.5 : 1.5, true);
    arrow(negZ2.re, negZ2.im, result.re, result.im, isZ1H ? t.ghostZ1h : t.ghostZ1, isZ1H ? 2.5 : 1.5, true);

    /* ─── original z₂ (faded) ─── */
    if (showOrigZ2) {
      const h2 = hovered === "z2";
      arrow(0, 0, z2.re, z2.im, t.z2 + (h2 ? "aa" : "44"), h2 ? 2 : 1.5, true);
      hollowDot(z2.re, z2.im, t.z2 + "88", 5);
    }

    /* ─── main vectors ─── */
    arrow(0, 0, z1.re, z1.im, t.z1, isZ1H ? 3.5 : 2.5, false);
    arrow(0, 0, negZ2.re, negZ2.im, t.negZ2, isNegH ? 3.5 : 2.5, false);
    /* result = diagonal */
    const hR = hovered === "result";
    arrow(0, 0, result.re, result.im, t.result, hR ? 3.5 : 2.5, false);

    /* ─── distance line ─── */
    if (showDistance) {
      const mx = (toX(z1.re) + toX(z2.re)) / 2;
      const my = (toY(z1.im) + toY(z2.im)) / 2;
      ctx.save();
      ctx.strokeStyle = t.distLine + "55";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 3]);
      ctx.beginPath();
      ctx.moveTo(toX(z1.re), toY(z1.im));
      ctx.lineTo(toX(z2.re), toY(z2.im));
      ctx.stroke(); ctx.setLineDash([]);
      ctx.font = "bold 10px 'DM Mono', monospace";
      ctx.fillStyle = t.distLine;
      ctx.textAlign = "center";
      const ang = Math.atan2(toY(z2.im) - toY(z1.im), toX(z2.re) - toX(z1.re));
      ctx.fillText(`d=${fmt(distance)}`, mx + 14 * Math.cos(ang + Math.PI / 2), my + 14 * Math.sin(ang + Math.PI / 2));
      ctx.restore();
    }

    /* dots */
    dot(z1.re, z1.im, t.z1, isZ1H ? 7 : 5);
    dot(negZ2.re, negZ2.im, t.negZ2, isNegH ? 7 : 5);
    dot(result.re, result.im, t.result, hR ? 7 : 5);

    /* labels */
    ctx.font = "bold 12px 'DM Mono', monospace"; ctx.textAlign = "left";
    ctx.fillStyle = t.z1; ctx.fillText("z\u2081", toX(z1.re) + 10, toY(z1.im) - 8);
    ctx.fillStyle = t.negZ2; ctx.fillText("\u2212z\u2082", toX(negZ2.re) + 10, toY(negZ2.im) - 8);
    ctx.fillStyle = t.result; ctx.fillText("z\u2081\u2212z\u2082", toX(result.re) + 10, toY(result.im) - 8);
    if (showOrigZ2) {
      ctx.fillStyle = t.z2 + "88";
      ctx.fillText("z\u2082", toX(z2.re) + 10, toY(z2.im) - 8);
    }
  }, [z1, z2, result, negZ2, distance, hovered, t, zoom, pan, showDistance, showOrigZ2]);

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

  /* ─── inputs ─── */
  const inputSty = {
    flex: 1, borderRadius: 5, padding: "7px 9px", fontSize: 13,
    fontFamily: "'DM Mono',monospace", outline: "none", width: 55,
    background: t.inputBg, border: `1px solid ${t.border}`, color: t.textBright,
  };

  const renderFields = (z, setZ, mag, argR, argD) => {
    if (formatMode === "exp") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <label style={{ fontSize: 10, color: t.textMuted }}>r</label>
          <input type="number" value={+mag.toFixed(4)} step="0.5" min="0" style={inputSty}
            onChange={(e) => setZ(fromPolar(+e.target.value || 0, argR))} />
          <label style={{ fontSize: 10, color: t.textMuted }}>θ<span style={{ fontSize: 8 }}> rad</span></label>
          <input type="number" value={+argR.toFixed(4)} step="0.1" style={inputSty}
            onChange={(e) => setZ(fromPolar(mag, +e.target.value || 0))} />
        </div>
      );
    }
    if (formatMode === "polar") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <label style={{ fontSize: 10, color: t.textMuted }}>|z|</label>
          <input type="number" value={+mag.toFixed(4)} step="0.5" min="0" style={inputSty}
            onChange={(e) => setZ(fromPolar(+e.target.value || 0, radOf(argD)))} />
          <label style={{ fontSize: 10, color: t.textMuted }}>∠°</label>
          <input type="number" value={argD} step="5" style={inputSty}
            onChange={(e) => setZ(fromPolar(mag, radOf(+e.target.value || 0)))} />
        </div>
      );
    }
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <label style={{ fontSize: 10, color: t.textMuted }}>Re</label>
        <input type="number" value={z.re} step="0.5" style={inputSty}
          onChange={(e) => setZ({ ...z, re: +e.target.value || 0 })} />
        <label style={{ fontSize: 10, color: t.textMuted }}>Im</label>
        <input type="number" value={z.im} step="0.5" style={inputSty}
          onChange={(e) => setZ({ ...z, im: +e.target.value || 0 })} />
      </div>
    );
  };

  const altInfo = (z, mag, argR) => {
    if (formatMode === "exp") return `Re = ${fmt(z.re)}, Im = ${fmt(z.im)} · (${degOf(argR)}°)`;
    if (formatMode === "polar") return `Re = ${fmt(z.re)}, Im = ${fmt(z.im)}`;
    return `|z| = ${fmt(mag)}  arg = ${degOf(argR)}°`;
  };

  return (
    <div style={{ fontFamily: "'DM Mono','Fira Code',monospace", background: t.bg, color: t.text, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* header */}
      <div style={{ padding: "18px 24px 14px", borderBottom: `1px solid ${t.border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexShrink: 0 }}>
        <div>
          <span style={{ display: "inline-block", fontSize: 9, letterSpacing: "2.5px", color: t.accent, background: t.accentBg, padding: "2px 8px", borderRadius: 3, marginBottom: 4 }}>COMPLEX NUMBERS</span>
          <h1 style={{ margin: "0 0 2px", fontSize: 22, fontWeight: 700, color: t.textBright, letterSpacing: "-0.5px" }}>Subtraction</h1>
          <p style={{ margin: 0, fontSize: 12, color: t.textMuted }}>z₁ − z₂ = z₁ + (−z₂) — addition of the additive inverse</p>
        </div>
        <button onClick={() => setTheme((v) => v === "dark" ? "light" : "dark")}
          style={{ padding: "6px 12px", borderRadius: 5, fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", background: t.bgAlt, border: `1px solid ${t.border}`, color: t.textBright }}>
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
      </div>

      {/* 3-column */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* LEFT (1/4) */}
        <div style={{ width: "25%", minWidth: 240, padding: "16px 18px", overflowY: "auto", borderRight: `1px solid ${t.border}` }}>

          {/* z1 */}
          <div style={{ border: `1px solid ${hovered === "z1" ? t.z1 : t.border}`, borderRadius: 7, padding: "12px 14px", background: t.bgAlt, transition: "border-color 0.2s" }}
            onMouseEnter={() => setHovered("z1")} onMouseLeave={() => setHovered(null)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 600, color: t.textBright, marginBottom: 9 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: t.z1 }} />z₁
            </div>
            {renderFields(z1, setZ1, z1Mag, z1ArgR, z1ArgD)}
            <div style={{ marginTop: 7, fontSize: 10, color: t.textMuted }}>{altInfo(z1, z1Mag, z1ArgR)}</div>
          </div>

          <div style={{ textAlign: "center", fontSize: 20, fontWeight: 700, color: t.textMuted, margin: "6px 0" }}>−</div>

          {/* z2 */}
          <div style={{ border: `1px solid ${hovered === "z2" ? t.z2 : t.border}`, borderRadius: 7, padding: "12px 14px", background: t.bgAlt, transition: "border-color 0.2s" }}
            onMouseEnter={() => setHovered("z2")} onMouseLeave={() => setHovered(null)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 600, color: t.textBright, marginBottom: 9 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: t.z2 }} />z₂
            </div>
            {renderFields(z2, setZ2, z2Mag, z2ArgR, z2ArgD)}
            <div style={{ marginTop: 7, fontSize: 10, color: t.textMuted }}>{altInfo(z2, z2Mag, z2ArgR)}</div>
          </div>

          {/* −z₂ display */}
          <div style={{ border: `1px solid ${hovered === "negz2" ? t.negZ2 : t.border}`, borderRadius: 7, padding: "10px 14px", marginTop: 8, background: t.bgAlt, transition: "border-color 0.2s" }}
            onMouseEnter={() => setHovered("negz2")} onMouseLeave={() => setHovered(null)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 600, color: t.textBright, marginBottom: 4 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: t.negZ2 }} />−z₂
              <span style={{ fontSize: 10, fontWeight: 400, color: t.textMuted, marginLeft: "auto" }}>additive inverse</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: t.negZ2 }}>
              <FmtNum z={negZ2} mode={formatMode} />
            </div>
          </div>

          <div style={{ textAlign: "center", fontSize: 20, fontWeight: 700, color: t.textMuted, margin: "6px 0" }}>=</div>

          {/* result */}
          <div style={{ border: `1px solid ${hovered === "result" ? t.result : t.border}`, borderRadius: 7, padding: "12px 14px", background: t.bgAlt, transition: "border-color 0.2s" }}
            onMouseEnter={() => setHovered("result")} onMouseLeave={() => setHovered(null)}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 600, color: t.textBright, marginBottom: 9 }}>
              <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: t.result }} />z₁ − z₂
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
                  borderRadius: 4, cursor: "pointer",
                  background: formatMode === m.key ? t.accentBg2 : t.inputBg,
                  border: `1px solid ${formatMode === m.key ? t.accent : t.border}`,
                  color: formatMode === m.key ? t.accent : t.textMuted,
                }}>
                {m.label}
              </button>
            ))}
          </div>

          {/* toggles */}
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 5 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: t.textMid, cursor: "pointer" }}>
              <input type="checkbox" checked={showOrigZ2} onChange={(e) => setShowOrigZ2(e.target.checked)} />
              Show original z₂
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: t.textMid, cursor: "pointer" }}>
              <input type="checkbox" checked={showDistance} onChange={(e) => setShowDistance(e.target.checked)} />
              Show distance
            </label>
          </div>

          <button onClick={addToHistory}
            style={{ width: "100%", marginTop: 10, padding: 7, fontSize: 11, fontFamily: "'DM Mono',monospace", borderRadius: 4, cursor: "pointer", background: t.accentBg, border: `1px solid ${t.accent}33`, color: t.accent }}>
            Save to History
          </button>

          {history.length > 0 && (
            <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 6, background: t.bgDeep, border: `1px solid ${t.border}` }}>
              <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>History</div>
              <div style={{ maxHeight: 100, overflowY: "auto", display: "flex", flexDirection: "column", gap: 3 }}>
                {history.map((h) => (
                  <div key={h.id} onClick={() => { setZ1(h.z1); setZ2(h.z2); }}
                    style={{ fontSize: 11, padding: "4px 7px", borderRadius: 3, cursor: "pointer", background: t.histItemBg }}>
                    <span style={{ color: t.z1 }}><FmtNum z={h.z1} mode={formatMode} /></span>
                    {" − "}
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

        {/* CENTER (2/4) */}
        <div style={{ width: "50%", display: "flex", flexDirection: "column", padding: "16px 18px", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, textTransform: "uppercase" }}>Argand Diagram — Parallelogram of z₁ and −z₂</span>
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
          <div style={{ flex: 1, borderRadius: 7, overflow: "hidden", border: `1px solid ${t.border}`, position: "relative", minHeight: 200, maxHeight: 480, touchAction: "none", cursor: isPanning ? "grabbing" : "grab" }}
            onPointerDown={onPtrDown} onPointerMove={onPtrMove} onPointerUp={onPtrUp} onPointerCancel={onPtrUp} onWheel={onWheel}>
            <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 14px", marginTop: 8, fontSize: 11 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: t.z1 }} />
              <span style={{ color: t.textMid }}>z₁</span>
            </span>
            {showOrigZ2 && (
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", border: `1.5px dashed ${t.z2}88`, background: "transparent" }} />
                <span style={{ color: t.textMid }}>z₂</span>
              </span>
            )}
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: t.negZ2 }} />
              <span style={{ color: t.textMid }}>−z₂</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: t.result }} />
              <span style={{ color: t.textMid }}>z₁−z₂</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ display: "inline-block", width: 10, height: 0, borderTop: `1.5px dashed ${t.paraStroke}` }} />
              <span style={{ color: t.textMid }}>parallelogram</span>
            </span>
          </div>
        </div>

        {/* RIGHT (1/4) */}
        <div style={{ width: "25%", minWidth: 220, padding: "16px 18px", overflowY: "auto", borderLeft: `1px solid ${t.border}` }}>

          <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 12, textTransform: "uppercase" }}>Step-by-step</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>1</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Find additive inverse</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: t.textBright }}>
                  −z₂ = −(<span style={{ color: t.z2 }}>{fmtRect(z2)}</span>) = <span style={{ color: t.negZ2 }}>{fmtRect(negZ2)}</span>
                </div>
                <div style={{ fontSize: 10, color: t.textMuted, marginTop: 2 }}>Reflect z₂ through origin (rotate 180°)</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>2</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Add real parts: Re(z₁) + Re(−z₂)</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{fmt(z1.re)} + ({fmt(negZ2.re)}) = {fmt(result.re)}</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>3</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Add imaginary parts: Im(z₁) + Im(−z₂)</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{fmt(z1.im)} + ({fmt(negZ2.im)}) = {fmt(result.im)}</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, minWidth: 20, borderRadius: "50%", background: t.accentBg2, color: t.accent, fontSize: 10, fontWeight: 700 }}>4</span>
              <div>
                <div style={{ fontSize: 11, color: t.textMid, marginBottom: 2 }}>Result (diagonal of parallelogram)</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: t.result }}>
                  <FmtNum z={result} mode={formatMode} />
                </div>
              </div>
            </div>
          </div>

          {/* key insight */}
          <div style={{ marginTop: 18, fontSize: 11, lineHeight: 1.55, padding: "10px 11px", borderRadius: 5, borderLeft: `2px solid ${t.stepNoteBorder}`, background: t.stepNoteBg, color: t.textMuted }}>
            <strong style={{ color: t.textMid }}>Key insight</strong><br />
            The parallelogram is formed by <span style={{ color: t.z1 }}>z₁</span> and <span style={{ color: t.negZ2 }}>−z₂</span>, not z₂. Subtraction is just addition where one operand has been reflected through the origin. The diagonal is the same as in addition — it just uses the inverse.
          </div>

          {/* distance */}
          <div style={{ marginTop: 18, padding: "10px 12px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: "1.5px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>Distance Interpretation</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: t.distLine, marginBottom: 4 }}>
              d(z₁, z₂) = |z₁ − z₂| = {fmt(distance)}
            </div>
            <div style={{ fontSize: 10, color: t.textMuted, lineHeight: 1.4 }}>
              The modulus of the difference equals the Euclidean distance between the two points on the complex plane.
            </div>
          </div>

          {/* all representations */}
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 9, letterSpacing: "2px", color: t.textMuted, marginBottom: 8, textTransform: "uppercase" }}>All Representations</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { label: "Rectangular", content: fmtRect(result) },
                { label: "Polar", content: fmtPolar(result) },
              ].map((r) => (
                <div key={r.label} style={{ padding: "7px 10px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
                  <div style={{ fontSize: 9, color: t.textMuted, marginBottom: 2, textTransform: "uppercase", letterSpacing: "1px" }}>{r.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}>{r.content}</div>
                </div>
              ))}
              <div style={{ padding: "7px 10px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 9, color: t.textMuted, marginBottom: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Exponential</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: t.textBright }}><FmtExp z={result} /></div>
              </div>
            </div>
          </div>

          {/* formulas */}
          <div style={{ marginTop: 18, padding: "10px 12px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: "1.5px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>Formulas</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: t.textBright, marginBottom: 4 }}>z₁ − z₂ = z₁ + (−z₂)</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: t.textBright, marginBottom: 4 }}>(a+bi) − (c+di) = (a−c) + (b−d)i</div>
            <div style={{ fontSize: 10, color: t.textMuted, lineHeight: 1.4 }}>
              Not commutative: z₁ − z₂ = −(z₂ − z₁)
            </div>
          </div>

          {/* non-commutativity */}
          <div style={{ marginTop: 18, padding: "10px 12px", borderRadius: 5, background: t.bgDeep, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 9, letterSpacing: "1.5px", color: t.textMuted, marginBottom: 6, textTransform: "uppercase" }}>Non-commutativity</div>
            <div style={{ fontSize: 11, color: t.textMid, lineHeight: 1.6 }}>
              <div><strong>z₁ − z₂</strong> = <span style={{ color: t.result }}>{fmtRect(result)}</span></div>
              <div><strong>z₂ − z₁</strong> = <span style={{ color: t.result }}>{fmtRect(cSub(z2, z1))}</span></div>
              <div style={{ marginTop: 4, color: t.textMuted }}>
                These are negatives of each other: their sum is always 0.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}