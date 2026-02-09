// canvasDrawRegistry.js
// All canvas drawing functions for CheatSheet component.
// Data references these by string key via canvas.drawKey

const c = {
  primary: '#2563eb',
  secondary: '#8b5cf6',
  accent: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  grid: '#e5e7eb',
  axis: '#94a3b8',
  text: '#475569',
  textDark: '#1e293b',
  real: '#0e918c',
  imaginary: '#d97a0d',
  conjugate: '#e11d48',
  unitCircle: 'rgba(37, 99, 235, 0.15)',
};

const setupPlane = (ctx, W, H, range = 2, options = {}) => {
  const { showGrid = true, showUnitCircle = false, bgColor = '#ffffff' } = options;
  const cx = W / 2;
  const cy = H / 2;
  const scale = Math.min(W, H) / (2 * range * 1.2);

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, W, H);

  if (showGrid) {
    ctx.strokeStyle = c.grid;
    ctx.lineWidth = 1;
    for (let i = -Math.ceil(range); i <= Math.ceil(range); i++) {
      const x = cx + i * scale;
      const y = cy - i * scale;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
  }

  if (showUnitCircle) {
    ctx.strokeStyle = c.unitCircle;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.strokeStyle = c.axis;
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();

  ctx.fillStyle = c.text;
  ctx.font = '11px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Re', W - 15, cy - 8);
  ctx.fillText('Im', cx + 12, 14);

  return { cx, cy, scale };
};

const pt = (ctx, cx, cy, scale, re, im, color, label = '', radius = 5) => {
  const x = cx + re * scale;
  const y = cy - im * scale;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  if (label) {
    ctx.fillStyle = color;
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(label, x + 8, y - 6);
  }
};

const vec = (ctx, cx, cy, scale, re, im, color, width = 2) => {
  const x = cx + re * scale;
  const y = cy - im * scale;
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
  const angle = Math.atan2(-im, re);
  const hl = 8;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - hl * Math.cos(angle - Math.PI / 6), y + hl * Math.sin(angle - Math.PI / 6));
  ctx.moveTo(x, y);
  ctx.lineTo(x - hl * Math.cos(angle + Math.PI / 6), y + hl * Math.sin(angle + Math.PI / 6));
  ctx.stroke();
};

const dash = (ctx, x1, y1, x2, y2, color, d = [4, 4]) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.setLineDash(d);
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  ctx.setLineDash([]);
};

// ── Draw functions ──

const drawPowersOfI = (ctx) => {
  const W = 240, H = 240;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 1.8, { showUnitCircle: true });
  const points = [
    { re: 1, im: 0, label: 'i⁰ = 1', color: c.primary },
    { re: 0, im: 1, label: 'i¹ = i', color: c.secondary },
    { re: -1, im: 0, label: 'i² = -1', color: c.accent },
    { re: 0, im: -1, label: 'i³ = -i', color: c.warning },
  ];
  ctx.strokeStyle = c.primary + '40';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + scale, cy);
  for (let i = 1; i <= 4; i++) {
    const a = (i * Math.PI) / 2;
    ctx.lineTo(cx + scale * Math.cos(a), cy - scale * Math.sin(a));
  }
  ctx.stroke();
  points.forEach((p) => pt(ctx, cx, cy, scale, p.re, p.im, p.color, p.label, 6));
  ctx.strokeStyle = c.text;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, scale * 0.5, -0.3, -Math.PI / 2 + 0.3, true);
  ctx.stroke();
  const tipX = cx + scale * 0.5 * Math.cos(Math.PI / 2 - 0.3);
  const tipY = cy - scale * 0.5 * Math.sin(Math.PI / 2 - 0.3);
  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(tipX + 5, tipY + 5);
  ctx.lineTo(tipX - 3, tipY + 4);
  ctx.stroke();
  ctx.fillStyle = c.text;
  ctx.font = '10px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('×i = 90° rotation', cx, H - 8);
};

const drawComplexPoint = (ctx) => {
  const W = 260, H = 220;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 3);
  const z = { re: 2, im: 1.5 };
  const px = cx + z.re * scale;
  const py = cy - z.im * scale;
  dash(ctx, px, cy, px, py, c.real);
  dash(ctx, cx, py, px, py, c.imaginary);
  ctx.fillStyle = c.real;
  ctx.font = 'bold 11px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('a = 2', (cx + px) / 2, cy + 16);
  ctx.fillStyle = c.imaginary;
  ctx.textAlign = 'left';
  ctx.fillText('b = 1.5', px + 6, (cy + py) / 2 + 4);
  vec(ctx, cx, cy, scale, z.re, z.im, c.primary);
  pt(ctx, cx, cy, scale, z.re, z.im, c.primary, 'z = 2 + 1.5i', 5);
};

const drawConjugate = (ctx) => {
  const W = 260, H = 240;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 2.5);
  const z = { re: 1.5, im: 1.2 };
  const zBar = { re: 1.5, im: -1.2 };
  ctx.strokeStyle = c.axis;
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(20, cy); ctx.lineTo(W - 20, cy); ctx.stroke();
  const px = cx + z.re * scale;
  dash(ctx, px, cy - z.im * scale, px, cy + z.im * scale, c.conjugate + '60', [3, 3]);
  vec(ctx, cx, cy, scale, z.re, z.im, c.primary);
  vec(ctx, cx, cy, scale, zBar.re, zBar.im, c.conjugate);
  pt(ctx, cx, cy, scale, z.re, z.im, c.primary, 'z = a + bi', 5);
  pt(ctx, cx, cy, scale, zBar.re, zBar.im, c.conjugate, 'z̄ = a − bi', 5);
  ctx.fillStyle = c.text;
  ctx.font = '10px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('reflection', W - 40, cy - 5);
};

const drawVectorAddition = (ctx) => {
  const W = 280, H = 240;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 4);
  const z1 = { re: 2, im: 1 };
  const z2 = { re: 1, im: 2 };
  const sum = { re: 3, im: 3 };
  ctx.fillStyle = c.accent + '15';
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + z1.re * scale, cy - z1.im * scale);
  ctx.lineTo(cx + sum.re * scale, cy - sum.im * scale);
  ctx.lineTo(cx + z2.re * scale, cy - z2.im * scale);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = c.primary + '40';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath(); ctx.moveTo(cx + z1.re * scale, cy - z1.im * scale); ctx.lineTo(cx + sum.re * scale, cy - sum.im * scale); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx + z2.re * scale, cy - z2.im * scale); ctx.lineTo(cx + sum.re * scale, cy - sum.im * scale); ctx.stroke();
  ctx.setLineDash([]);
  vec(ctx, cx, cy, scale, z1.re, z1.im, c.primary);
  vec(ctx, cx, cy, scale, z2.re, z2.im, c.secondary);
  vec(ctx, cx, cy, scale, sum.re, sum.im, c.accent, 2.5);
  pt(ctx, cx, cy, scale, z1.re, z1.im, c.primary, 'z₁', 4);
  pt(ctx, cx, cy, scale, z2.re, z2.im, c.secondary, 'z₂', 4);
  pt(ctx, cx, cy, scale, sum.re, sum.im, c.accent, 'z₁+z₂', 5);
};

const drawModulus = (ctx) => {
  const W = 260, H = 240;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 3);
  const z = { re: 2, im: 1.5 };
  const px = cx + z.re * scale;
  const py = cy - z.im * scale;
  ctx.fillStyle = c.primary + '12';
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.lineTo(px, py); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = c.real; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.stroke();
  ctx.strokeStyle = c.imaginary;
  ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke();
  ctx.strokeStyle = c.primary; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
  const m = 8;
  ctx.strokeStyle = c.text; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(px - m, cy); ctx.lineTo(px - m, cy - m); ctx.lineTo(px, cy - m); ctx.stroke();
  ctx.fillStyle = c.real; ctx.font = 'bold 11px system-ui, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('a', (cx + px) / 2, cy + 14);
  ctx.fillStyle = c.imaginary; ctx.textAlign = 'left';
  ctx.fillText('b', px + 6, (cy + py) / 2);
  ctx.fillStyle = c.primary;
  ctx.fillText('|z| = √(a²+b²)', (cx + px) / 2 - 12, (cy + py) / 2 - 8);
  pt(ctx, cx, cy, scale, z.re, z.im, c.primary, '', 5);
};

const drawTrigForm = (ctx) => {
  const W = 300, H = 280;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 1.5, { showUnitCircle: true });
  const angle = Math.PI / 4;
  const z = { re: Math.cos(angle), im: Math.sin(angle) };
  const px = cx + z.re * scale;
  const py = cy - z.im * scale;
  dash(ctx, px, cy, px, py, c.real + '80');
  dash(ctx, cx, py, px, py, c.imaginary + '80');
  ctx.strokeStyle = c.warning; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx, cy, scale * 0.3, 0, -angle, true); ctx.stroke();
  ctx.fillStyle = c.warning; ctx.font = 'bold 11px system-ui, sans-serif';
  ctx.fillText('θ', cx + scale * 0.38, cy - scale * 0.12);
  vec(ctx, cx, cy, scale, z.re, z.im, c.primary, 2.5);
  ctx.fillStyle = c.primary; ctx.font = 'bold 11px system-ui, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('r = |z|', (cx + px) / 2 - 15, (cy + py) / 2);
  ctx.fillStyle = c.real; ctx.font = '10px system-ui, sans-serif';
  ctx.fillText('r·cos θ', (cx + px) / 2, cy + 14);
  ctx.fillStyle = c.imaginary; ctx.textAlign = 'left';
  ctx.fillText('r·sin θ', px + 4, (cy + py) / 2 + 12);
  pt(ctx, cx, cy, scale, z.re, z.im, c.primary, 'z = r(cos θ + i sin θ)', 5);
};

const drawUnitCircleAngles = (ctx) => {
  const W = 300, H = 300;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 1.4, { showUnitCircle: true, showGrid: false });
  ctx.strokeStyle = c.primary + '40'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx, cy, scale, 0, Math.PI * 2); ctx.stroke();
  const angles = [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330];
  angles.forEach((deg) => {
    const rad = (deg * Math.PI) / 180;
    const x = cx + scale * Math.cos(rad);
    const y = cy - scale * Math.sin(rad);
    ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = [0, 90, 180, 270].includes(deg) ? c.primary : c.secondary;
    ctx.fill();
    const ld = scale + 18;
    ctx.fillStyle = c.text; ctx.font = '9px system-ui, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(deg + '°', cx + ld * Math.cos(rad), cy - ld * Math.sin(rad));
  });
};

const drawEulerFormula = (ctx) => {
  const W = 280, H = 260;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 1.6, { showUnitCircle: true });
  ctx.strokeStyle = c.secondary; ctx.lineWidth = 3;
  ctx.beginPath();
  for (let t = 0; t <= Math.PI * 2; t += 0.05) {
    const x = cx + scale * Math.cos(t);
    const y = cy - scale * Math.sin(t);
    if (t === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  [
    { angle: 0, color: c.primary },
    { angle: Math.PI / 2, color: c.secondary },
    { angle: Math.PI, color: c.error },
    { angle: (3 * Math.PI) / 2, color: c.warning },
  ].forEach(({ angle, color }) => {
    const x = cx + scale * Math.cos(angle);
    const y = cy - scale * Math.sin(angle);
    ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
  });
  ctx.fillStyle = c.textDark; ctx.font = 'bold 12px system-ui, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('e^(iθ) traces', cx, cy - 8);
  ctx.fillText('unit circle', cx, cy + 8);
};

const drawRootsOfUnity = (ctx, n = 5) => {
  const W = 260, H = 260;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 1.5, { showUnitCircle: true, showGrid: false });
  ctx.strokeStyle = c.accent; ctx.lineWidth = 2; ctx.fillStyle = c.accent + '15';
  ctx.beginPath();
  for (let k = 0; k <= n; k++) {
    const a = (2 * Math.PI * k) / n;
    const x = cx + scale * Math.cos(a);
    const y = cy - scale * Math.sin(a);
    if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath(); ctx.fill(); ctx.stroke();
  for (let k = 0; k < n; k++) {
    const a = (2 * Math.PI * k) / n;
    ctx.beginPath(); ctx.arc(cx + scale * Math.cos(a), cy - scale * Math.sin(a), 5, 0, Math.PI * 2);
    ctx.fillStyle = k === 0 ? c.primary : c.accent; ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = c.text; ctx.font = '9px system-ui, sans-serif'; ctx.textAlign = 'center';
    const ld = scale + 16;
    ctx.fillText(`ω${'⁰¹²³⁴⁵⁶⁷⁸⁹'[k] || '^' + k}`, cx + ld * Math.cos(a), cy - ld * Math.sin(a));
  }
  ctx.fillStyle = c.textDark; ctx.font = 'bold 11px system-ui, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText(`${n}th roots of unity`, cx, H - 10);
};

const drawCubeRootsOfNeg8 = (ctx) => {
  const W = 260, H = 260;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 2.8, { showGrid: true });
  const roots = [
    { re: 2 * Math.cos(Math.PI / 3), im: 2 * Math.sin(Math.PI / 3), label: '2·cis(60°)' },
    { re: -2, im: 0, label: '-2' },
    { re: 2 * Math.cos(-Math.PI / 3), im: 2 * Math.sin(-Math.PI / 3), label: '2·cis(300°)' },
  ];
  ctx.strokeStyle = c.secondary + '40'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.arc(cx, cy, 2 * scale, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
  ctx.strokeStyle = c.accent; ctx.lineWidth = 2; ctx.fillStyle = c.accent + '12';
  ctx.beginPath();
  roots.forEach((r, i) => { const x = cx + r.re * scale; const y = cy - r.im * scale; if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
  ctx.closePath(); ctx.fill(); ctx.stroke();
  const rc = [c.primary, c.error, c.warning];
  roots.forEach((r, i) => pt(ctx, cx, cy, scale, r.re, r.im, rc[i], r.label, 5));
  ctx.fillStyle = c.textDark; ctx.font = 'bold 10px system-ui, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('³√(-8) = three roots', cx, H - 8);
};

const drawQuadrants = (ctx) => {
  const W = 260, H = 260;
  const { cx, cy } = setupPlane(ctx, W, H, 2, { showGrid: false });
  [
    { x: cx, y: 0, w: W - cx, h: cy, color: c.primary + '10' },
    { x: 0, y: 0, w: cx, h: cy, color: c.secondary + '10' },
    { x: 0, y: cy, w: cx, h: H - cy, color: c.accent + '10' },
    { x: cx, y: cy, w: W - cx, h: H - cy, color: c.warning + '10' },
  ].forEach(q => { ctx.fillStyle = q.color; ctx.fillRect(q.x, q.y, q.w, q.h); });
  const labels = [
    { text: 'Q I', sub: '(+, +)', x: cx + 45, y: cy - 50, color: c.primary },
    { text: 'Q II', sub: '(−, +)', x: cx - 45, y: cy - 50, color: c.secondary },
    { text: 'Q III', sub: '(−, −)', x: cx - 45, y: cy + 55, color: c.accent },
    { text: 'Q IV', sub: '(+, −)', x: cx + 45, y: cy + 55, color: c.warning },
  ];
  labels.forEach(l => {
    ctx.fillStyle = l.color; ctx.font = 'bold 12px system-ui, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(l.text, l.x, l.y);
    ctx.font = '9px system-ui, sans-serif';
    ctx.fillText(l.sub, l.x, l.y + 15);
  });
};

const drawMultiplicationRotation = (ctx) => {
  const W = 280, H = 260;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 3, { showUnitCircle: true });
  const z1 = { re: 1.5, im: 0.5 };
  const z2 = { re: 0.8, im: 1.2 };
  const mag1 = Math.sqrt(z1.re ** 2 + z1.im ** 2);
  const mag2 = Math.sqrt(z2.re ** 2 + z2.im ** 2);
  const arg1 = Math.atan2(z1.im, z1.re);
  const arg2 = Math.atan2(z2.im, z2.re);
  const pMag = mag1 * mag2;
  const pArg = arg1 + arg2;
  const product = { re: pMag * Math.cos(pArg), im: pMag * Math.sin(pArg) };
  ctx.strokeStyle = c.primary + '60'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(cx, cy, 25, 0, -arg1, true); ctx.stroke();
  ctx.strokeStyle = c.secondary + '60';
  ctx.beginPath(); ctx.arc(cx, cy, 35, 0, -arg2, true); ctx.stroke();
  ctx.strokeStyle = c.accent + '80'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx, cy, 45, 0, -pArg, true); ctx.stroke();
  vec(ctx, cx, cy, scale, z1.re, z1.im, c.primary, 2);
  vec(ctx, cx, cy, scale, z2.re, z2.im, c.secondary, 2);
  vec(ctx, cx, cy, scale, product.re, product.im, c.accent, 2.5);
  pt(ctx, cx, cy, scale, z1.re, z1.im, c.primary, 'z₁', 4);
  pt(ctx, cx, cy, scale, z2.re, z2.im, c.secondary, 'z₂', 4);
  pt(ctx, cx, cy, scale, product.re, product.im, c.accent, 'z₁·z₂', 5);
  ctx.fillStyle = c.text; ctx.font = '10px system-ui, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('|z₁·z₂| = |z₁|·|z₂|', cx, H - 22);
  ctx.fillText('arg(z₁·z₂) = arg(z₁) + arg(z₂)', cx, H - 8);
};

const drawFourthRootsOfNeg16 = (ctx) => {
  const W = 260, H = 260;
  const { cx, cy, scale } = setupPlane(ctx, W, H, 2.5, { showGrid: true });
  const mag = 2;
  const roots = [
    { angle: Math.PI / 4, label: '√2(1+i)' },
    { angle: (3 * Math.PI) / 4, label: '√2(-1+i)' },
    { angle: (5 * Math.PI) / 4, label: '√2(-1-i)' },
    { angle: (7 * Math.PI) / 4, label: '√2(1-i)' },
  ];
  ctx.strokeStyle = c.primary + '30'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.arc(cx, cy, mag * scale, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
  ctx.strokeStyle = c.secondary; ctx.lineWidth = 2; ctx.fillStyle = c.secondary + '10';
  ctx.beginPath();
  roots.forEach((r, i) => {
    const x = cx + mag * scale * Math.cos(r.angle);
    const y = cy - mag * scale * Math.sin(r.angle);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.closePath(); ctx.fill(); ctx.stroke();
  const rc = [c.primary, c.secondary, c.accent, c.warning];
  roots.forEach((r, i) => {
    pt(ctx, cx, cy, scale, mag * Math.cos(r.angle), mag * Math.sin(r.angle), rc[i], r.label, 5);
  });
  ctx.fillStyle = c.textDark; ctx.font = 'bold 10px system-ui, sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('⁴√(-16) = four roots', cx, H - 8);
};

// ── Registry ──

const canvasDrawRegistry = {
  powersOfI: drawPowersOfI,
  complexPoint: drawComplexPoint,
  conjugate: drawConjugate,
  vectorAddition: drawVectorAddition,
  modulus: drawModulus,
  trigForm: drawTrigForm,
  unitCircleAngles: drawUnitCircleAngles,
  eulerFormula: drawEulerFormula,
  rootsOfUnity5: (ctx) => drawRootsOfUnity(ctx, 5),
  rootsOfUnity6: (ctx) => drawRootsOfUnity(ctx, 6),
  cubeRootsOfNeg8: drawCubeRootsOfNeg8,
  quadrants: drawQuadrants,
  multiplicationRotation: drawMultiplicationRotation,
  fourthRootsOfNeg16: drawFourthRootsOfNeg16,
};

export default canvasDrawRegistry;