// MathAnimation_v2.jsx
// Data-driven animation engine: one clock, named parameters animated by tracks, objects redrawn from them.
// Full reference: MathAnimation_docs_v2.md
//
// Usage:
//   import MathAnimation from './MathAnimation_v2';
//   import { scenes, matrixMultiplyScene } from './mathAnimationScenes_v2';
//
//   const productScene = matrixMultiplyScene({ a: [[1, -3], [2, 4]], b: [5, 7] });
//
//   <MathAnimation scene={scenes.derivative} />
//   <MathAnimation scene={productScene} theme="azure" />
//   <MathAnimation scene={scenes.riemann} themeOverrides={{ colors: { accent: '#2563EB' } }} loop />
//
// Scene:
//   {
//     duration: 7000,                                   // ms
//     height: 380,                                      // optional canvas height
//     view: { x: [-7, 7], y: [-4, 4], equal: true, pad: [top, right, bottom, left] }   // world coordinates
//        or { px: [width, height], shift: (p) => [dx, dy] },   // pixel layout, scaled down to fit, y grows downward
//     params: { k: 0 },                                 // named parameters, initial values
//     tracks: [{ param: 'k', from: 0, to: 1, start: 0.5, end: 0.9, ease: 'smooth' }],  // start/end are 0..1
//     derive: (p) => ({ m: p.k * 2 }),                  // optional computed parameters
//     theme: 'sky', themeOverrides: {},                 // optional, scene level
//     objects: [{ type: 'vector', to: (p) => [p.k, 0], color: 'accent', opacity: (p) => p.k }],
//   }
// Most object properties may be a value or a function of the parameters: (p) => value. p.t is the clock (0..1).
// Colors are theme color keys (primary, accent, ghost, axis, text...) or any CSS color.
//
// Object types:
//   baseGrid  static unit grid
//   grid      { matrix, extent, progress, dots }            transformable grid
//   axes      { progress, ticks }
//   vector    { from, to, matrix, label, labelOffset, head, width }
//   curve     { fn, domain, progress, samples, dashed, width }
//   line      { from, to } or { through, slope }, { extend, dashed, width }
//   polygon   { points, matrix, closed, fill, stroke, dashed, fillOpacity, width }
//   point     { at, matrix, r, scale }
//   rects     { fn, from, to, n, grow, sample }             Riemann rectangles
//   area      { fn, from, to, fillOpacity }
//   label     { at, text, offset, font, size, align }
//   readout   { lines: [string | { text, color }], corner }
//   token     { at, text, size, symbol, colorTo, blend }    one movable symbol
//   chip      { at, text, w, h, size }                      rounded highlight behind a token
//   bracket   { x, y0, y1, side }                           square bracket
// All types accept { color, opacity }.

import React, { useEffect, useRef, useState } from 'react';
import { resolveTheme } from './mathAnimationThemes_v2';

const EASE = {
  linear: (t) => t,
  smooth: (t) => t * t * (3 - 2 * t),
  in: (t) => t * t,
  out: (t) => 1 - (1 - t) * (1 - t),
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
};

const clamp01 = (value) => Math.max(0, Math.min(1, value));

const val = (value, params, fallback) => {
  const resolved = typeof value === 'function' ? value(params) : value;
  return resolved === undefined ? fallback : resolved;
};

export function evalParams(scene, t, defaultEase) {
  const params = { ...(scene.params || {}), t };
  (scene.tracks || []).forEach((track) => {
    if (t < track.start) return;
    const ease = EASE[track.ease || defaultEase] || EASE.smooth;
    const u = track.end > track.start ? clamp01((t - track.start) / (track.end - track.start)) : 1;
    const from = track.from !== undefined ? track.from : params[track.param] || 0;
    params[track.param] = from + (track.to - from) * ease(u);
  });
  if (scene.derive) Object.assign(params, scene.derive(params));
  return params;
}

function makeEnv(scene, theme, W, H, params) {
  const view = scene.view || {};
  const col = (key) => theme.colors[key] || key;

  if (view.px) {
    const pw = view.px[0];
    const ph = view.px[1];
    const scale = Math.min(view.maxScale || 1, (W - 20) / pw, H / ph);
    const shift = val(view.shift, params, [0, 0]);
    const offX = (W - pw * scale) / 2 + shift[0] * scale;
    const offY = (H - ph * scale) / 2 + shift[1] * scale;
    const X = (x) => offX + x * scale;
    const Y = (y) => offY + y * scale;
    const bounds = { x0: 0, x1: pw, y0: 0, y1: ph };
    const plot = { l: X(0), r: X(pw), t: Y(0), b: Y(ph) };
    return { theme, W, H, X, Y, xr: [0, pw], yr: [0, ph], bounds, plot, col, scale };
  }

  const xr = view.x || [-7, 7];
  const yr = view.y || [-4, 4];
  const pad = view.pad || [0, 0, 0, 0];
  const equal = view.equal !== false;
  const innerW = W - pad[1] - pad[3];
  const innerH = H - pad[0] - pad[2];
  let sx = innerW / (xr[1] - xr[0]);
  let sy = innerH / (yr[1] - yr[0]);
  if (equal) {
    sx = Math.min(sx, sy);
    sy = sx;
  }
  const cx = pad[3] + innerW / 2;
  const cy = pad[0] + innerH / 2;
  const xm = (xr[0] + xr[1]) / 2;
  const ym = (yr[0] + yr[1]) / 2;
  const X = (x) => cx + (x - xm) * sx;
  const Y = (y) => cy - (y - ym) * sy;
  const bounds = equal
    ? { x0: xm - cx / sx, x1: xm + (W - cx) / sx, y0: ym - (H - cy) / sy, y1: ym + cy / sy }
    : { x0: xr[0], x1: xr[1], y0: yr[0], y1: yr[1] };
  const plot = { l: X(bounds.x0), r: X(bounds.x1), t: Y(bounds.y1), b: Y(bounds.y0) };
  return { theme, W, H, X, Y, xr, yr, bounds, plot, col, scale: 1 };
}

function toPx(env, object, params, point) {
  const m = val(object.matrix, params);
  const x = m ? m[0] * point[0] + m[2] * point[1] : point[0];
  const y = m ? m[1] * point[0] + m[3] * point[1] : point[1];
  return [env.X(x), env.Y(y)];
}

function setStroke(ctx, env, color, width, dashed) {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash(dashed ? env.theme.dash : []);
}

function setFont(ctx, env, family, size, weight) {
  const font = env.theme.font;
  ctx.font = family === 'mono'
    ? size + 'px ' + font.mono
    : (weight || font.weight) + ' ' + size + 'px ' + font.sans;
}

function setTokenFont(ctx, env, object) {
  const font = env.theme.font;
  const size = (object.size || font.token) * env.scale;
  setFont(ctx, env, object.font || 'sans', size, object.symbol ? font.symbolWeight : font.tokenWeight);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
}

function arrow(ctx, env, a, b, color, width, headType, headSize) {
  const spec = env.theme.arrow;
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy);
  if (len < 2) return false;
  const ux = dx / len;
  const uy = dy / len;
  const h = Math.min(headSize || spec.size, len);
  const s = spec.spread;
  const head = headType || spec.head;
  const bx = b[0] - ux * h;
  const by = b[1] - uy * h;
  setStroke(ctx, env, color, width);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(a[0], a[1]);
  if (head === 'triangle') ctx.lineTo(b[0] - ux * h * 0.8, b[1] - uy * h * 0.8);
  else ctx.lineTo(b[0], b[1]);
  ctx.stroke();
  if (head === 'triangle') {
    ctx.beginPath();
    ctx.moveTo(b[0], b[1]);
    ctx.lineTo(bx - uy * h * s, by + ux * h * s);
    ctx.lineTo(bx + uy * h * s, by - ux * h * s);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
  } else if (head === 'chevron') {
    ctx.beginPath();
    ctx.moveTo(bx - uy * h * s, by + ux * h * s);
    ctx.lineTo(b[0], b[1]);
    ctx.lineTo(bx + uy * h * s, by - ux * h * s);
    ctx.stroke();
  } else if (head === 'dot') {
    ctx.beginPath();
    ctx.arc(b[0], b[1], Math.max(3.5, width * 1.6), 0, Math.PI * 2);
    ctx.fill();
  }
  return true;
}

const DRAW = {
  baseGrid(ctx, o, p, env) {
    const { X, Y, bounds, theme, col } = env;
    setStroke(ctx, env, col(o.color || 'baseGrid'), theme.stroke.baseGrid);
    ctx.lineCap = 'butt';
    ctx.beginPath();
    for (let n = Math.ceil(bounds.x0); n <= Math.floor(bounds.x1); n++) {
      ctx.moveTo(X(n), Y(bounds.y0));
      ctx.lineTo(X(n), Y(bounds.y1));
    }
    for (let n = Math.ceil(bounds.y0); n <= Math.floor(bounds.y1); n++) {
      ctx.moveTo(X(bounds.x0), Y(n));
      ctx.lineTo(X(bounds.x1), Y(n));
    }
    ctx.stroke();
  },

  grid(ctx, o, p, env, alpha) {
    const { theme, col, W, H } = env;
    const extent = val(o.extent, p, 14);
    const progress = val(o.progress, p, 1);
    const R = extent * progress;
    const N = Math.ceil(extent);
    if (R <= 0) return;
    const lines = (from, to, skipZero) => {
      ctx.beginPath();
      for (let n = from; n <= to; n++) {
        if (skipZero && n === 0) continue;
        let a = toPx(env, o, p, [n, -R]);
        let b = toPx(env, o, p, [n, R]);
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        a = toPx(env, o, p, [-R, n]);
        b = toPx(env, o, p, [R, n]);
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
      }
      ctx.stroke();
    };
    setStroke(ctx, env, col(o.color || 'grid'), theme.stroke.grid);
    lines(-N, N, true);
    setStroke(ctx, env, col(o.axisColor || 'axis'), theme.stroke.grid + 0.5);
    lines(0, 0, false);
    if (val(o.dots, p, theme.grid.dots)) {
      ctx.fillStyle = col('dots');
      ctx.globalAlpha = alpha * progress;
      for (let m = -N; m <= N; m++) {
        for (let n = -N; n <= N; n++) {
          const q = toPx(env, o, p, [m, n]);
          if (q[0] < -4 || q[0] > W + 4 || q[1] < -4 || q[1] > H + 4) continue;
          ctx.beginPath();
          ctx.arc(q[0], q[1], theme.grid.dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  },

  axes(ctx, o, p, env, alpha) {
    const { X, Y, xr, yr, theme, col } = env;
    const g = val(o.progress, p, 1);
    if (g <= 0) return;
    const color = col(o.color || 'axis');
    const ox = Math.max(xr[0], Math.min(xr[1], 0));
    const oy = Math.max(yr[0], Math.min(yr[1], 0));
    const x0 = ox + (xr[0] - ox) * g;
    const x1 = ox + (xr[1] - ox) * g;
    const y0 = oy + (yr[0] - oy) * g;
    const y1 = oy + (yr[1] - oy) * g;
    ctx.globalAlpha = alpha * 0.85;
    arrow(ctx, env, [X(x0), Y(oy)], [X(x1), Y(oy)], color, theme.stroke.axis, 'chevron', theme.arrow.axisSize);
    arrow(ctx, env, [X(ox), Y(y0)], [X(ox), Y(y1)], color, theme.stroke.axis, 'chevron', theme.arrow.axisSize);
    if (o.ticks === false) return;
    ctx.globalAlpha = alpha * 0.7 * g;
    ctx.fillStyle = color;
    setFont(ctx, env, 'mono', theme.font.tick);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let n = Math.ceil(xr[0]); n < xr[1]; n++) {
      if (n !== ox) ctx.fillText(String(n), X(n), Y(oy) + 8);
    }
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let n = Math.ceil(yr[0]); n < yr[1]; n++) {
      if (n !== oy) ctx.fillText(String(n), X(ox) - 8, Y(n));
    }
  },

  vector(ctx, o, p, env) {
    const { theme, col } = env;
    const color = col(o.color || 'primary');
    const a = toPx(env, o, p, val(o.from, p, [0, 0]));
    const b = toPx(env, o, p, val(o.to, p, [1, 0]));
    const drawn = arrow(ctx, env, a, b, color, val(o.width, p, theme.stroke.vector), o.head);
    const text = val(o.label, p);
    if (!drawn || !text) return;
    const offset = o.labelOffset || [14, -14];
    ctx.fillStyle = color;
    setFont(ctx, env, 'sans', theme.font.label);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, b[0] + offset[0], b[1] + offset[1]);
  },

  curve(ctx, o, p, env) {
    const { X, Y, xr, theme, col } = env;
    const domain = o.domain || xr;
    const progress = val(o.progress, p, 1);
    if (progress <= 0) return;
    const end = domain[0] + (domain[1] - domain[0]) * progress;
    const step = (domain[1] - domain[0]) / (o.samples || 200);
    setStroke(ctx, env, col(o.color || 'primary'), val(o.width, p, theme.stroke.curve), o.dashed);
    ctx.beginPath();
    ctx.moveTo(X(domain[0]), Y(o.fn(domain[0])));
    for (let x = domain[0] + step; x < end; x += step) ctx.lineTo(X(x), Y(o.fn(x)));
    ctx.lineTo(X(end), Y(o.fn(end)));
    ctx.stroke();
  },

  line(ctx, o, p, env) {
    const { X, Y, plot, theme, col } = env;
    let from = val(o.from, p);
    let to = val(o.to, p);
    const slope = val(o.slope, p);
    if (slope !== undefined) {
      from = val(o.through, p, [0, 0]);
      to = [from[0] + 1, from[1] + slope];
    }
    if (!from || !to) return;
    if (o.extend) {
      const dx = to[0] - from[0];
      const dy = to[1] - from[1];
      const len = Math.hypot(dx, dy);
      if (len === 0) return;
      const reach = 200 / len;
      from = [from[0] - dx * reach, from[1] - dy * reach];
      to = [to[0] + dx * reach, to[1] + dy * reach];
      ctx.beginPath();
      ctx.rect(plot.l, plot.t, plot.r - plot.l, plot.b - plot.t);
      ctx.clip();
    }
    setStroke(ctx, env, col(o.color || 'accent'), val(o.width, p, theme.stroke.line), o.dashed);
    ctx.beginPath();
    ctx.moveTo(X(from[0]), Y(from[1]));
    ctx.lineTo(X(to[0]), Y(to[1]));
    ctx.stroke();
  },

  polygon(ctx, o, p, env, alpha) {
    const { theme, col } = env;
    const points = val(o.points, p, []).map((point) => toPx(env, o, p, point));
    if (points.length < 2) return;
    const closed = o.closed !== false;
    const filled = closed && o.fill !== false;
    const color = col(o.color || 'accent');
    ctx.beginPath();
    points.forEach((q, index) => (index === 0 ? ctx.moveTo(q[0], q[1]) : ctx.lineTo(q[0], q[1])));
    if (closed) ctx.closePath();
    if (filled) {
      ctx.globalAlpha = alpha * val(o.fillOpacity, p, theme.fill.opacity);
      ctx.fillStyle = color;
      ctx.fill();
    }
    if (o.stroke !== false) {
      ctx.globalAlpha = alpha * (filled ? theme.fill.strokeOpacity : 1);
      setStroke(ctx, env, color, val(o.width, p, theme.stroke.outline), o.dashed);
      ctx.stroke();
    }
  },

  point(ctx, o, p, env) {
    const { theme, col } = env;
    const q = toPx(env, o, p, val(o.at, p, [0, 0]));
    const r = val(o.r, p, theme.point.radius) * val(o.scale, p, 1);
    if (r <= 0) return;
    ctx.fillStyle = col(o.color || 'primary');
    ctx.beginPath();
    ctx.arc(q[0], q[1], r, 0, Math.PI * 2);
    ctx.fill();
  },

  rects(ctx, o, p, env, alpha) {
    const { X, Y, theme, col } = env;
    const from = val(o.from, p, 0);
    const to = val(o.to, p, 1);
    const n = Math.max(1, Math.round(val(o.n, p, 4)));
    const grow = val(o.grow, p, 1);
    const shift = o.sample === 'mid' ? 0.5 : o.sample === 'right' ? 1 : 0;
    const w = (to - from) / n;
    const color = col(o.color || 'accent');
    const boxes = [];
    for (let i = 0; i < n; i++) {
      const x = from + i * w;
      const top = Y(o.fn(x + shift * w) * grow);
      boxes.push([X(x), top, X(x + w) - X(x), Y(0) - top]);
    }
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha * val(o.fillOpacity, p, theme.fill.opacity);
    boxes.forEach((b) => ctx.fillRect(b[0], b[1], b[2], b[3]));
    setStroke(ctx, env, color, n >= 32 ? 0.5 : 1);
    ctx.globalAlpha = alpha * theme.fill.strokeOpacity * (n >= 32 ? 0.4 : 1);
    boxes.forEach((b) => ctx.strokeRect(b[0], b[1], b[2], b[3]));
  },

  area(ctx, o, p, env, alpha) {
    const { X, Y, theme, col } = env;
    const from = val(o.from, p, 0);
    const to = val(o.to, p, 1);
    const step = (to - from) / (o.samples || 200);
    const color = col(o.color || 'accent');
    ctx.beginPath();
    ctx.moveTo(X(from), Y(0));
    for (let x = from; x < to; x += step) ctx.lineTo(X(x), Y(o.fn(x)));
    ctx.lineTo(X(to), Y(o.fn(to)));
    ctx.lineTo(X(to), Y(0));
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha * val(o.fillOpacity, p, theme.fill.opacity);
    ctx.fill();
    ctx.globalAlpha = alpha * theme.fill.strokeOpacity;
    setStroke(ctx, env, color, theme.stroke.outline);
    ctx.beginPath();
    ctx.moveTo(X(from), Y(0));
    ctx.lineTo(X(from), Y(o.fn(from)));
    ctx.moveTo(X(to), Y(0));
    ctx.lineTo(X(to), Y(o.fn(to)));
    ctx.stroke();
  },

  label(ctx, o, p, env) {
    const { theme, col } = env;
    const text = val(o.text, p);
    if (!text) return;
    const q = toPx(env, o, p, val(o.at, p, [0, 0]));
    const offset = o.offset || [0, 0];
    ctx.fillStyle = col(o.color || 'text');
    setFont(ctx, env, o.font || 'sans', o.size || theme.font.label);
    ctx.textAlign = o.align || 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, q[0] + offset[0], q[1] + offset[1]);
  },

  readout(ctx, o, p, env) {
    const { plot, theme, col } = env;
    const right = o.corner === 'top-right';
    const size = theme.font.readout;
    setFont(ctx, env, o.font || 'mono', size);
    ctx.textAlign = right ? 'right' : 'left';
    ctx.textBaseline = 'middle';
    val(o.lines, p, []).forEach((line, index) => {
      const item = typeof line === 'string' ? { text: line } : line;
      ctx.fillStyle = col(item.color || 'text');
      ctx.fillText(item.text, right ? plot.r - 22 : plot.l + 22, 26 + index * (size + 8));
    });
  },

  token(ctx, o, p, env, alpha) {
    const { col } = env;
    const text = val(o.text, p);
    if (text === undefined || text === '') return;
    const q = toPx(env, o, p, val(o.at, p, [0, 0]));
    const blend = o.colorTo ? clamp01(val(o.blend, p, 0)) : 0;
    setTokenFont(ctx, env, o);
    if (blend < 1) {
      ctx.globalAlpha = alpha * (1 - blend);
      ctx.fillStyle = col(o.color || 'primary');
      ctx.fillText(String(text), q[0], q[1]);
    }
    if (blend > 0) {
      ctx.globalAlpha = alpha * blend;
      ctx.fillStyle = col(o.colorTo);
      ctx.fillText(String(text), q[0], q[1]);
    }
  },

  chip(ctx, o, p, env, alpha) {
    const { theme, col, scale } = env;
    const spec = theme.chip;
    const q = toPx(env, o, p, val(o.at, p, [0, 0]));
    const h = (o.h || spec.height) * scale;
    setTokenFont(ctx, env, o);
    const text = val(o.text, p, '');
    const w = o.w ? o.w * scale : Math.max(h, ctx.measureText(String(text)).width + 2 * spec.padX * scale);
    const r = Math.min(spec.radius * scale, h / 2);
    const l = q[0] - w / 2;
    const t = q[1] - h / 2;
    const color = col(o.color || 'accent');
    ctx.beginPath();
    ctx.moveTo(l + r, t);
    ctx.arcTo(l + w, t, l + w, t + h, r);
    ctx.arcTo(l + w, t + h, l, t + h, r);
    ctx.arcTo(l, t + h, l, t, r);
    ctx.arcTo(l, t, l + w, t, r);
    ctx.closePath();
    ctx.globalAlpha = alpha * spec.fillOpacity;
    ctx.fillStyle = color;
    ctx.fill();
    ctx.globalAlpha = alpha * spec.strokeOpacity;
    setStroke(ctx, env, color, spec.strokeWidth);
    ctx.stroke();
  },

  bracket(ctx, o, p, env) {
    const { X, Y, theme, col, scale } = env;
    const dir = o.side === 'right' ? -1 : 1;
    const x = X(val(o.x, p, 0));
    const y0 = Y(val(o.y0, p, 0));
    const y1 = Y(val(o.y1, p, 1));
    const serif = theme.bracket.serif * scale * dir;
    setStroke(ctx, env, col(o.color || 'primary'), Math.max(1.25, theme.bracket.width * scale));
    ctx.beginPath();
    ctx.moveTo(x + serif, y0);
    ctx.lineTo(x, y0);
    ctx.lineTo(x, y1);
    ctx.lineTo(x + serif, y1);
    ctx.stroke();
  },
};

// Pure: draws one frame of a scene at clock t (0..1). Usable outside React (tests, image export).
export function renderFrame(ctx, scene, theme, t, W, H) {
  const params = evalParams(scene, t, theme.motion.ease);
  const env = makeEnv(scene, theme, W, H, params);
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;
  ctx.fillStyle = theme.colors.bg;
  ctx.fillRect(0, 0, W, H);
  (scene.objects || []).forEach((object) => {
    const draw = DRAW[object.type];
    const alpha = val(object.opacity, params, 1);
    if (!draw || alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    draw(ctx, object, params, env, alpha);
    ctx.restore();
  });
}

const DEFAULT_SCENE = {
  duration: 4000,
  params: { v: 0 },
  tracks: [{ param: 'v', to: 1, start: 0.1, end: 0.8 }],
  objects: [
    { type: 'baseGrid' },
    { type: 'grid', progress: (p) => p.v },
    { type: 'vector', to: (p) => [2 * p.v, p.v], color: 'accent', label: 'v' },
  ],
};

const STYLES = {
  controls: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 },
  button: {
    minWidth: 84,
    padding: '8px 14px',
    background: 'transparent',
    color: '#1e293b',
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    cursor: 'pointer',
    font: 'inherit',
  },
  slider: { flex: 1 },
};

export default function MathAnimation(props) {
  const {
    scene = DEFAULT_SCENE,
    theme,
    themeOverrides,
    height,
    autoPlay = true,
    loop = false,
    controls = true,
    pauseOffscreen = true,
    ariaLabel = 'Math animation',
    style,
  } = props;

  const resolvedTheme = resolveTheme(theme || scene.theme, scene.themeOverrides, themeOverrides);
  const canvasHeight = height !== undefined ? height : scene.height || 380;

  const canvasRef = useRef(null);
  const sliderRef = useRef(null);
  const sceneRef = useRef(scene);
  const themeRef = useRef(resolvedTheme);
  const loopRef = useRef(loop);
  const clockRef = useRef(0);
  const lastRef = useRef(null);
  const playingRef = useRef(autoPlay);
  const visibleRef = useRef(true);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const [status, setStatus] = useState(autoPlay ? 'playing' : 'paused');

  sceneRef.current = scene;
  themeRef.current = resolvedTheme;
  loopRef.current = loop;

  const draw = () => {
    const canvas = canvasRef.current;
    const size = sizeRef.current;
    if (!canvas || !size.w) return;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(size.dpr, 0, 0, size.dpr, 0, 0);
    renderFrame(ctx, sceneRef.current, themeRef.current, clockRef.current, size.w, size.h);
  };

  const setPlaying = (playing) => {
    playingRef.current = playing;
    lastRef.current = null;
    setStatus(playing ? 'playing' : clockRef.current >= 1 ? 'ended' : 'paused');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    let raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      sizeRef.current = { w, h, dpr };
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      draw();
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!playingRef.current || !visibleRef.current) {
        lastRef.current = null;
        return;
      }
      if (lastRef.current !== null) {
        clockRef.current += (now - lastRef.current) / (sceneRef.current.duration || 7000);
      }
      lastRef.current = now;
      if (clockRef.current >= 1) {
        if (loopRef.current) {
          clockRef.current = 0;
        } else {
          clockRef.current = 1;
          setPlaying(false);
        }
      }
      if (sliderRef.current) sliderRef.current.value = Math.round(clockRef.current * 1000);
      draw();
    };

    resize();
    raf = requestAnimationFrame(frame);

    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    if (resizeObserver) resizeObserver.observe(canvas);

    const viewObserver = pauseOffscreen && typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver((entries) => {
        visibleRef.current = entries[0].isIntersecting;
      })
      : null;
    if (viewObserver) viewObserver.observe(canvas);

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);

    return () => {
      cancelAnimationFrame(raf);
      if (resizeObserver) resizeObserver.disconnect();
      if (viewObserver) viewObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    clockRef.current = 0;
    if (sliderRef.current) sliderRef.current.value = 0;
    setPlaying(autoPlay);
    draw();
  }, [scene]);

  useEffect(() => {
    draw();
  });

  const handleToggle = () => {
    if (playingRef.current) {
      setPlaying(false);
      return;
    }
    if (clockRef.current >= 1) clockRef.current = 0;
    setPlaying(true);
  };

  const handleScrub = (event) => {
    clockRef.current = Number(event.target.value) / 1000;
    setPlaying(false);
    draw();
  };

  const buttonLabel = status === 'playing' ? 'Pause' : status === 'ended' ? 'Replay' : 'Play';
  const canvasStyle = {
    width: '100%',
    height: canvasHeight,
    display: 'block',
    borderRadius: 12,
    border: '1px solid ' + resolvedTheme.colors.frame,
    boxSizing: 'border-box',
  };

  return (
    <div style={style}>
      <canvas ref={canvasRef} style={canvasStyle} role="img" aria-label={ariaLabel} />
      {controls && (
        <div style={STYLES.controls}>
          <button type="button" onClick={handleToggle} style={STYLES.button}>{buttonLabel}</button>
          <input
            ref={sliderRef}
            type="range"
            min="0"
            max="1000"
            step="1"
            defaultValue="0"
            onChange={handleScrub}
            aria-label="Timeline"
            style={STYLES.slider}
          />
        </div>
      )}
    </div>
  );
}
