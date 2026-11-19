// Graph Studio — engine / render
//
// Two renderers that draw the same geometry the same way:
//
//   drawCanvas(ctx, geometry, theme, options)   onto a 2D canvas
//   renderSVG(geometry, theme, options)         into an SVG string
//
// Both start from one shared description of the frame (grid lines,
// axes, number labels), so the canvas picture and the SVG picture
// match. renderSVG is a pure string builder: no DOM, no randomness, no
// clock, so the same geometry always gives the same text. That is what
// lets pictures be generated at build time.
//
// options (both renderers):
//   settings     { grid, axes } from the scene document
//   selectedId   the selected row is drawn thicker
//   annotations  teaching marks in world coordinates:
//                { type: 'vline', x, color?, dashed?, width?, label? }
//                { type: 'hline', y, color?, dashed?, width?, label? }
//                { type: 'xBand', from, to, color?, opacity? }
//                { type: 'yBand', from, to, color?, opacity? }
//   overlay      canvas only: { pinned, trace, pointLabels }
//   dragHalo     soft ring around draggable points (canvas default true)

import { makeTransform } from './numerics.js';

// ------------------------------------------------------------
// Numbers
// ------------------------------------------------------------

// Grid step of the form 1, 2 or 5 × 10ⁿ near `raw`, with its minor step.
export function niceStep(raw) {
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / mag;
  const m = n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10;
  return { step: m * mag, minor: (m * mag) / (m === 2 ? 4 : 5) };
}

// Formats v to the precision that `step` makes meaningful.
export function fmtNum(v, step) {
  if (!Number.isFinite(v)) return v > 0 ? '∞' : v < 0 ? '−∞' : 'undefined';
  const s = step ?? Math.max(Math.abs(v) * 1e-5, 1e-12);
  if (Math.abs(v) < s * 1e-6) return '0';
  let out;
  if (Math.abs(v) >= 1e7 || (Math.abs(v) < 1e-4 && s < 1e-4)) {
    const digits = Math.min(12, Math.max(1, Math.ceil(Math.log10(Math.abs(v) / s))));
    out = v.toExponential(digits).replace(/\.?0+e/, 'e');
  } else {
    const dec = Math.min(12, Math.max(0, -Math.floor(Math.log10(s) + 1e-9)));
    out = v.toFixed(dec);
    if (out.includes('.')) out = out.replace(/\.?0+$/, '');
  }
  if (out === '-0') out = '0';
  return out.replace(/^-/, '−');
}

// Coordinates to a little better than one pixel of the current view.
export function fmtPoint(x, y, bounds, W) {
  const px = (bounds.xMax - bounds.xMin) / W;
  const s = Math.pow(10, Math.floor(Math.log10(px)) - 1);
  return `(${fmtNum(x, s)}, ${fmtNum(y, s)})`;
}

function colorOf(theme, layer) {
  if (layer.color) return layer.color;
  const p = theme.palette;
  return p[(layer.index || 0) % p.length];
}

// ------------------------------------------------------------
// The frame: grid lines, axes, number labels (shared by both renderers)
// ------------------------------------------------------------
function buildFrame(geometry, theme) {
  const { bounds, W, H } = geometry;
  const T = makeTransform(bounds, W, H);
  const ux = (bounds.xMax - bounds.xMin) / W, uy = (bounds.yMax - bounds.yMin) / H;
  const gx = niceStep(ux * 110), gy = niceStep(uy * 110);
  const fs = theme.fontSize;

  const lines = (min, max, step, toScreen) => {
    const out = [];
    const k0 = Math.ceil(min / step), k1 = Math.floor(max / step);
    if (!(k1 - k0 <= 2000)) return out;
    for (let k = k0; k <= k1; k++) out.push(Math.round(toScreen(k * step)) + 0.5);
    return out;
  };

  const ax = T.sx(0), ay = T.sy(0);
  const axisVisibleX = ay >= 0 && ay <= H;   // the horizontal axis
  const axisVisibleY = ax >= 0 && ax <= W;   // the vertical axis

  // Numbers stay on screen when their axis is not.
  const labelTop = Math.min(Math.max(ay + 4, 4), H - fs - 5);
  const labelRight = Math.min(Math.max(ax - 6, fs * 3.6), W - 4);
  const xLabels = [], yLabels = [];
  const kx0 = Math.ceil(bounds.xMin / gx.step), kx1 = Math.floor(bounds.xMax / gx.step);
  if (kx1 - kx0 <= 2000) {
    for (let k = kx0; k <= kx1; k++) {
      if (k === 0) continue;
      xLabels.push({ text: fmtNum(k * gx.step, gx.step), x: T.sx(k * gx.step), y: labelTop + fs * 0.82 });
    }
  }
  const ky0 = Math.ceil(bounds.yMin / gy.step), ky1 = Math.floor(bounds.yMax / gy.step);
  if (ky1 - ky0 <= 2000) {
    for (let k = ky0; k <= ky1; k++) {
      if (k === 0) continue;
      yLabels.push({ text: fmtNum(k * gy.step, gy.step), x: labelRight, y: T.sy(k * gy.step) + fs * 0.34 });
    }
  }
  const origin = axisVisibleX && axisVisibleY ? { text: '0', x: ax - 5, y: ay + 4 + fs * 0.82 } : null;

  return {
    T,
    minorV: lines(bounds.xMin, bounds.xMax, gx.minor, T.sx),
    minorH: lines(bounds.yMin, bounds.yMax, gy.minor, T.sy),
    majorV: lines(bounds.xMin, bounds.xMax, gx.step, T.sx),
    majorH: lines(bounds.yMin, bounds.yMax, gy.step, T.sy),
    axisX: axisVisibleX ? ay : null,
    axisY: axisVisibleY ? ax : null,
    xLabels, yLabels, origin
  };
}

// Annotations in pixels, clipped to the canvas.
function placeAnnotations(annotations, geometry, T, theme) {
  const { bounds, W, H } = geometry;
  const bands = [], lines = [], polys = [], points = [];
  const clampX = v => Math.min(Math.max(v, bounds.xMin), bounds.xMax);
  const clampY = v => Math.min(Math.max(v, bounds.yMin), bounds.yMax);
  for (const a of annotations || []) {
    if (!a) continue;
    if (a.type === 'xBand') {
      const x0 = T.sx(clampX(Math.min(a.from, a.to))), x1 = T.sx(clampX(Math.max(a.from, a.to)));
      if (x1 > x0) bands.push({ x: x0, y: 0, w: x1 - x0, h: H, color: a.color || theme.annotation.band, opacity: a.opacity ?? theme.annotation.bandOpacity });
    } else if (a.type === 'yBand') {
      const y0 = T.sy(clampY(Math.max(a.from, a.to))), y1 = T.sy(clampY(Math.min(a.from, a.to)));
      if (y1 > y0) bands.push({ x: 0, y: y0, w: W, h: y1 - y0, color: a.color || theme.annotation.band, opacity: a.opacity ?? theme.annotation.bandOpacity });
    } else if (a.type === 'vline') {
      if (!(a.x >= bounds.xMin && a.x <= bounds.xMax)) continue;
      const sx = T.sx(a.x);
      lines.push({ x0: sx, y0: 0, x1: sx, y1: H, color: a.color || theme.annotation.line, dashed: !!a.dashed, width: a.width || 1.5, label: a.label || null, lx: sx + 5, ly: 6 + theme.fontSize });
    } else if (a.type === 'hline') {
      if (!(a.y >= bounds.yMin && a.y <= bounds.yMax)) continue;
      const sy = T.sy(a.y);
      lines.push({ x0: 0, y0: sy, x1: W, y1: sy, color: a.color || theme.annotation.line, dashed: !!a.dashed, width: a.width || 1.5, label: a.label || null, lx: 6, ly: sy - 5 });
    } else if (a.type === 'line') {
      // the straight line through (x, y) with the given slope, across the whole picture
      if (!Number.isFinite(a.x) || !Number.isFinite(a.y) || !Number.isFinite(a.slope)) continue;
      const yAt = x => a.y + a.slope * (x - a.x);
      lines.push({ x0: 0, y0: T.sy(yAt(bounds.xMin)), x1: W, y1: T.sy(yAt(bounds.xMax)), color: a.color || theme.annotation.line, dashed: !!a.dashed, width: a.width || 1.5, label: null });
    } else if (a.type === 'polygon') {
      // a filled shape given by its corners in world coordinates
      if (!a.points || a.points.length < 3) continue;
      const pts = [];
      for (const p of a.points) pts.push(T.sx(p[0]), T.sy(p[1]));
      polys.push({ pts, color: a.color || theme.annotation.band, opacity: a.opacity ?? theme.annotation.bandOpacity, stroke: a.stroke || null });
    } else if (a.type === 'point') {
      // a marker: hollow (white inside) unless style is 'solid'
      if (!(a.x >= bounds.xMin && a.x <= bounds.xMax && a.y >= bounds.yMin && a.y <= bounds.yMax)) continue;
      const color = a.color || theme.annotation.line;
      points.push({ sx: T.sx(a.x), sy: T.sy(a.y), r: a.radius || 5, fill: a.style === 'solid' ? color : theme.background, stroke: color, width: a.width || 2.25, label: a.label || null });
    }
  }
  return { bands, lines, polys, points };
}

const cssFont = theme => `${theme.fontSize}px ${theme.font}`;

// ------------------------------------------------------------
// Canvas renderer
// ------------------------------------------------------------
function strokePaths(ctx, paths) {
  ctx.beginPath();
  for (const p of paths) {
    if (p.length < 2) continue;
    ctx.moveTo(p[0], p[1]);
    if (p.length === 2) ctx.lineTo(p[0] + 0.01, p[1]);
    for (let i = 2; i < p.length; i += 2) ctx.lineTo(p[i], p[i + 1]);
  }
  ctx.stroke();
}

function strokeSegs(ctx, segs) {
  ctx.beginPath();
  for (let i = 0; i < segs.length; i += 4) { ctx.moveTo(segs[i], segs[i + 1]); ctx.lineTo(segs[i + 2], segs[i + 3]); }
  ctx.stroke();
}

function haloText(ctx, theme, text, x, y, align, fill) {
  ctx.font = cssFont(theme);
  ctx.textAlign = align; ctx.textBaseline = 'alphabetic';
  ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.strokeStyle = theme.labelHalo; ctx.fillStyle = fill || theme.label;
  ctx.strokeText(text, x, y); ctx.fillText(text, x, y);
}

function drawTooltip(ctx, theme, text, sx, sy, W, H, color) {
  ctx.font = cssFont(theme);
  const w = ctx.measureText(text).width + 12, h = theme.fontSize + 11;
  let x = sx + 10, y = sy - h - 8;
  if (x + w > W - 4) x = sx - w - 10;
  if (y < 4) y = sy + 10;
  ctx.fillStyle = theme.tooltip.background; ctx.strokeStyle = theme.tooltip.border; ctx.lineWidth = 1;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, 5); else ctx.rect(x, y, w, h);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = color || theme.tooltip.text; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText(text, x + 6, y + h / 2);
}

// The context must already be scaled for the device pixel ratio, so
// that one unit is one CSS pixel.
export function drawCanvas(ctx, geometry, theme, options = {}) {
  const { settings = {}, selectedId = null, annotations = [], overlay = null, dragHalo = true } = options;
  const { W, H, layers, specials, bounds } = geometry;
  const frame = buildFrame(geometry, theme);
  const ann = placeAnnotations(annotations, geometry, frame.T, theme);
  const showGrid = settings.grid !== false, showAxes = settings.axes !== false;

  ctx.save();
  ctx.setLineDash([]); ctx.globalAlpha = 1;
  ctx.fillStyle = theme.background;
  ctx.fillRect(0, 0, W, H);

  // grid
  if (showGrid) {
    const stroke = (xs, vertical, color) => {
      ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.beginPath();
      for (const v of xs) { if (vertical) { ctx.moveTo(v, 0); ctx.lineTo(v, H); } else { ctx.moveTo(0, v); ctx.lineTo(W, v); } }
      ctx.stroke();
    };
    stroke(frame.minorV, true, theme.gridMinor); stroke(frame.minorH, false, theme.gridMinor);
    stroke(frame.majorV, true, theme.gridMajor); stroke(frame.majorH, false, theme.gridMajor);
  }

  // shaded bands sit under everything else
  for (const b of ann.bands) {
    ctx.globalAlpha = b.opacity; ctx.fillStyle = b.color;
    ctx.fillRect(b.x, b.y, b.w, b.h);
  }
  for (const p of ann.polys) {
    ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color;
    ctx.beginPath(); ctx.moveTo(p.pts[0], p.pts[1]);
    for (let i = 2; i < p.pts.length; i += 2) ctx.lineTo(p.pts[i], p.pts[i + 1]);
    ctx.closePath(); ctx.fill();
    if (p.stroke) { ctx.globalAlpha = 1; ctx.strokeStyle = p.stroke; ctx.lineWidth = 1; ctx.stroke(); }
  }
  ctx.globalAlpha = 1;

  // axes and numbers
  if (showAxes) {
    ctx.strokeStyle = theme.axis; ctx.lineWidth = theme.axisWidth; ctx.lineCap = 'butt'; ctx.beginPath();
    if (frame.axisX !== null) { ctx.moveTo(0, frame.axisX); ctx.lineTo(W, frame.axisX); }
    if (frame.axisY !== null) { ctx.moveTo(frame.axisY, 0); ctx.lineTo(frame.axisY, H); }
    ctx.stroke();
    for (const l of frame.xLabels) haloText(ctx, theme, l.text, l.x, l.y, 'center');
    for (const l of frame.yLabels) haloText(ctx, theme, l.text, l.x, l.y, 'right');
    if (frame.origin) haloText(ctx, theme, frame.origin.text, frame.origin.x, frame.origin.y, 'right');
  }

  // reference lines
  for (const l of ann.lines) {
    ctx.strokeStyle = l.color; ctx.lineWidth = l.width; ctx.lineCap = 'butt';
    ctx.setLineDash(l.dashed ? theme.dash : []);
    ctx.beginPath(); ctx.moveTo(l.x0, l.y0); ctx.lineTo(l.x1, l.y1); ctx.stroke();
    ctx.setLineDash([]);
    if (l.label) haloText(ctx, theme, l.label, l.lx, l.ly, 'left', theme.annotation.label);
  }

  // curves and regions, in row order
  ctx.lineJoin = 'round';
  for (const L of layers) {
    if (L.kind === 'point') continue;
    const color = colorOf(theme, L);
    ctx.strokeStyle = color; ctx.setLineDash([]); ctx.lineCap = 'round';
    ctx.lineWidth = L.width || (L.id === selectedId ? theme.curveWidthSelected : theme.curveWidth);
    if (L.kind === 'paths') {
      if (L.dashed) { ctx.setLineDash(theme.dash); ctx.lineCap = 'butt'; }
      strokePaths(ctx, L.paths);
      ctx.setLineDash([]);
    }
    else if (L.kind === 'segs') strokeSegs(ctx, L.segs);
    else if (L.kind === 'region') {
      ctx.fillStyle = color; ctx.globalAlpha = theme.regionOpacity;
      ctx.beginPath();
      for (let i = 0; i < L.runs.length; i += 4) ctx.rect(L.runs[i], L.runs[i + 1], L.runs[i + 2], L.runs[i + 3]);
      ctx.fill();
      ctx.globalAlpha = 1;
      for (const b of L.boundaries) {
        ctx.setLineDash(b.strict ? theme.dash : []);
        ctx.lineCap = b.strict ? 'butt' : 'round';
        strokeSegs(ctx, b.segs);
      }
      ctx.setLineDash([]);
    }
  }

  // points on top
  for (const L of layers) {
    if (L.kind !== 'point') continue;
    const color = colorOf(theme, L);
    const draggable = L.drag && (L.drag.xVar || L.drag.yVar);
    if (draggable && dragHalo) {
      ctx.fillStyle = color; ctx.globalAlpha = 0.18;
      ctx.beginPath(); ctx.arc(L.sx, L.sy, theme.pointRadius + 7.5, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(L.sx, L.sy, theme.pointRadius + (L.id === selectedId ? 1 : 0), 0, Math.PI * 2); ctx.fill();
    if (L.label) haloText(ctx, theme, L.label, L.sx + theme.pointRadius + 4, L.sy - theme.pointRadius - 3, 'left', color);
  }

  // special points of the selected curve
  for (const p of specials) {
    ctx.fillStyle = theme.specialPoint.fill; ctx.strokeStyle = theme.specialPoint.stroke; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(p.sx, p.sy, theme.specialPoint.radius, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  }

  // marker points given as annotations
  for (const p of ann.points) {
    ctx.fillStyle = p.fill; ctx.strokeStyle = p.stroke; ctx.lineWidth = p.width;
    ctx.beginPath(); ctx.arc(p.sx, p.sy, p.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    if (p.label) haloText(ctx, theme, p.label, p.sx + p.r + 4, p.sy - p.r - 3, 'left', theme.annotation.label);
  }

  // hover and pinned labels
  if (overlay) {
    const { pinned, trace, pointLabels = [] } = overlay;
    if (pinned) drawTooltip(ctx, theme, `${pinned.kind}  ${fmtPoint(pinned.x, pinned.y, bounds, W)}`, pinned.sx, pinned.sy, W, H);
    for (const pl of pointLabels) drawTooltip(ctx, theme, fmtPoint(pl.x, pl.y, bounds, W), pl.sx, pl.sy, W, H, colorOf(theme, pl));
    if (trace) {
      ctx.fillStyle = trace.color; ctx.strokeStyle = theme.background; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(trace.sx, trace.sy, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      drawTooltip(ctx, theme, fmtPoint(trace.x, trace.y, bounds, W), trace.sx, trace.sy, W, H, trace.color);
    }
  }
  ctx.restore();
}

// ------------------------------------------------------------
// SVG renderer
// ------------------------------------------------------------
const n2 = v => {
  const r = Math.round(v * 100) / 100;
  return Object.is(r, -0) ? '0' : String(r);
};
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function pathsToD(paths) {
  let d = '';
  for (const p of paths) {
    if (p.length < 2) continue;
    d += `M${n2(p[0])} ${n2(p[1])}`;
    if (p.length === 2) d += `l0.01 0`;
    for (let i = 2; i < p.length; i += 2) d += `L${n2(p[i])} ${n2(p[i + 1])}`;
  }
  return d;
}

function segsToD(segs) {
  let d = '';
  for (let i = 0; i < segs.length; i += 4) d += `M${n2(segs[i])} ${n2(segs[i + 1])}L${n2(segs[i + 2])} ${n2(segs[i + 3])}`;
  return d;
}

// Curve points far outside the picture are pulled in, so the text of
// the SVG stays small. The curve inside the picture is unchanged.
function clipPaths(paths, W, H) {
  const lim = v => (v < -W - H ? -W - H : v > 2 * (W + H) ? 2 * (W + H) : v);
  return paths.map(p => p.map(lim));
}

export function renderSVG(geometry, theme, options = {}) {
  const { settings = {}, selectedId = null, annotations = [], dragHalo = false, title = '' } = options;
  const { W, H, layers, specials } = geometry;
  const frame = buildFrame(geometry, theme);
  const ann = placeAnnotations(annotations, geometry, frame.T, theme);
  const showGrid = settings.grid !== false, showAxes = settings.axes !== false;
  const out = [];
  const textAttrs = `font-family="${esc(theme.font)}" font-size="${theme.fontSize}"`;
  const halo = `stroke="${theme.labelHalo}" stroke-width="3" stroke-linejoin="round" paint-order="stroke"`;
  const text = (t, x, y, anchor, fill) =>
    `<text x="${n2(x)}" y="${n2(y)}" text-anchor="${anchor}" fill="${fill}" ${halo}>${esc(t)}</text>`;

  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" ${textAttrs}>`);
  if (title) out.push(`<title>${esc(title)}</title>`);
  out.push(`<rect width="${W}" height="${H}" fill="${theme.background}"/>`);

  if (showGrid) {
    const d = (xs, vertical) => xs.map(v => (vertical ? `M${v} 0V${H}` : `M0 ${v}H${W}`)).join('');
    const minor = d(frame.minorV, true) + d(frame.minorH, false);
    const major = d(frame.majorV, true) + d(frame.majorH, false);
    if (minor) out.push(`<path d="${minor}" stroke="${theme.gridMinor}" stroke-width="1" fill="none"/>`);
    if (major) out.push(`<path d="${major}" stroke="${theme.gridMajor}" stroke-width="1" fill="none"/>`);
  }

  for (const b of ann.bands) {
    out.push(`<rect x="${n2(b.x)}" y="${n2(b.y)}" width="${n2(b.w)}" height="${n2(b.h)}" fill="${b.color}" fill-opacity="${b.opacity}"/>`);
  }
  for (const p of ann.polys) {
    let d = `M${n2(p.pts[0])} ${n2(p.pts[1])}`;
    for (let i = 2; i < p.pts.length; i += 2) d += `L${n2(p.pts[i])} ${n2(p.pts[i + 1])}`;
    out.push(`<path d="${d}Z" fill="${p.color}" fill-opacity="${p.opacity}"${p.stroke ? ` stroke="${p.stroke}" stroke-width="1"` : ''}/>`);
  }

  if (showAxes) {
    let d = '';
    if (frame.axisX !== null) d += `M0 ${n2(frame.axisX)}H${W}`;
    if (frame.axisY !== null) d += `M${n2(frame.axisY)} 0V${H}`;
    if (d) out.push(`<path d="${d}" stroke="${theme.axis}" stroke-width="${theme.axisWidth}" fill="none"/>`);
    for (const l of frame.xLabels) out.push(text(l.text, l.x, l.y, 'middle', theme.label));
    for (const l of frame.yLabels) out.push(text(l.text, l.x, l.y, 'end', theme.label));
    if (frame.origin) out.push(text(frame.origin.text, frame.origin.x, frame.origin.y, 'end', theme.label));
  }

  for (const l of ann.lines) {
    const dash = l.dashed ? ` stroke-dasharray="${theme.dash.join(' ')}"` : '';
    out.push(`<path d="M${n2(l.x0)} ${n2(l.y0)}L${n2(l.x1)} ${n2(l.y1)}" stroke="${l.color}" stroke-width="${l.width}" fill="none"${dash}/>`);
    if (l.label) out.push(text(l.label, l.lx, l.ly, 'start', theme.annotation.label));
  }

  for (const L of layers) {
    if (L.kind === 'point') continue;
    const color = colorOf(theme, L);
    const w = L.width || (L.id === selectedId ? theme.curveWidthSelected : theme.curveWidth);
    const round = `stroke-linecap="round" stroke-linejoin="round"`;
    if (L.kind === 'paths') {
      const d = pathsToD(clipPaths(L.paths, W, H));
      if (d && L.dashed) out.push(`<path d="${d}" stroke="${color}" stroke-width="${w}" fill="none" stroke-dasharray="${theme.dash.join(' ')}"/>`);
      else if (d) out.push(`<path d="${d}" stroke="${color}" stroke-width="${w}" fill="none" ${round}/>`);
    } else if (L.kind === 'segs') {
      const d = segsToD(L.segs);
      if (d) out.push(`<path d="${d}" stroke="${color}" stroke-width="${w}" fill="none" ${round}/>`);
    } else if (L.kind === 'region') {
      let d = '';
      for (let i = 0; i < L.runs.length; i += 4) d += `M${L.runs[i]} ${L.runs[i + 1]}h${L.runs[i + 2]}v${L.runs[i + 3]}h${-L.runs[i + 2]}z`;
      if (d) out.push(`<path d="${d}" fill="${color}" fill-opacity="${theme.regionOpacity}" shape-rendering="crispEdges"/>`);
      for (const b of L.boundaries) {
        const bd = segsToD(b.segs);
        if (!bd) continue;
        if (b.strict) out.push(`<path d="${bd}" stroke="${color}" stroke-width="${w}" fill="none" stroke-dasharray="${theme.dash.join(' ')}"/>`);
        else out.push(`<path d="${bd}" stroke="${color}" stroke-width="${w}" fill="none" ${round}/>`);
      }
    }
  }

  for (const L of layers) {
    if (L.kind !== 'point') continue;
    const color = colorOf(theme, L);
    const draggable = L.drag && (L.drag.xVar || L.drag.yVar);
    if (draggable && dragHalo) out.push(`<circle cx="${n2(L.sx)}" cy="${n2(L.sy)}" r="${theme.pointRadius + 7.5}" fill="${color}" fill-opacity="0.18"/>`);
    out.push(`<circle cx="${n2(L.sx)}" cy="${n2(L.sy)}" r="${theme.pointRadius + (L.id === selectedId ? 1 : 0)}" fill="${color}"/>`);
    if (L.label) out.push(text(L.label, L.sx + theme.pointRadius + 4, L.sy - theme.pointRadius - 3, 'start', color));
  }

  for (const p of specials) {
    out.push(`<circle cx="${n2(p.sx)}" cy="${n2(p.sy)}" r="${theme.specialPoint.radius}" fill="${theme.specialPoint.fill}" stroke="${theme.specialPoint.stroke}" stroke-width="2"/>`);
  }

  for (const p of ann.points) {
    out.push(`<circle cx="${n2(p.sx)}" cy="${n2(p.sy)}" r="${p.r}" fill="${p.fill}" stroke="${p.stroke}" stroke-width="${p.width}"/>`);
    if (p.label) out.push(text(p.label, p.sx + p.r + 4, p.sy - p.r - 3, 'start', theme.annotation.label));
  }

  out.push('</svg>');
  return out.join('');
}
