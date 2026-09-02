// Frozen-state SVGs for the Variance Visualizer (Line 1 anchor mesh).
//
// VarianceVisualizer builds its chart inline in JSX rather than through string
// builders, so this module ports that chart: same 700x500 canvas, same padding
// 60, the same min-5 / max+5 value window, the same five gridlines, the dashed
// blue mean line with its label, the per-point deviation bars (green above the
// mean, red below, at 0.3 opacity when nothing is hovered), the orange data
// points with their value labels, and the x-axis index labels.
//
// The statistics are computed exactly as the component computes them, including
// the population/sample divisor switch (n vs n-1), so the numbers exported
// alongside each diagram are the tool's own.
//
// Not reproduced: hover state. The live chart brightens one deviation bar and
// shows its delta label on hover; a still has no hover, so every bar is drawn
// at the resting opacity.

const W = 700, H = 500, PAD = 60;
const PLOT_W = W - 2 * PAD, PLOT_H = H - 2 * PAD;

// the component's own datasets
export const DATASETS = {
  default: [12, 15, 18, 20, 22, 25, 28],
  low: [20, 21, 20, 22, 21, 20, 22],
  high: [10, 30, 15, 35, 12, 38, 8],
  outliers: [15, 16, 15, 17, 16, 15, 40],
};

const fmt = (v, d = 2) => Number(v).toFixed(d);
const r2 = (n) => Math.round(n * 100) / 100;

// stats(), ported from the component
export function stats(data, varianceType) {
  const mean = data.reduce((s, v) => s + v, 0) / data.length;
  const deviations = data.map((v) => v - mean);
  const sumSq = deviations.reduce((s, d) => s + d * d, 0);
  const divisor = varianceType === 'population' ? data.length : data.length - 1;
  const variance = sumSq / divisor;
  return {
    mean,
    deviations,
    sumSq,
    divisor,
    variance,
    sd: Math.sqrt(variance),
    range: Math.max(...data) - Math.min(...data),
    n: data.length,
  };
}

function chart(data, varianceType) {
  const st = stats(data, varianceType);
  const minVal = Math.min(...data) - 5;
  const maxVal = Math.max(...data) + 5;
  const yScale = (v) => H - PAD - ((v - minVal) / (maxVal - minVal)) * PLOT_H;
  const xScale = (i) => PAD + (i / (data.length - 1)) * PLOT_W;

  let s = `<rect width="${W}" height="${H}" fill="#fafafa" rx="4"/>`;

  // gridlines + y labels
  for (let i = 0; i <= 4; i++) {
    const y = PAD + (i * PLOT_H) / 4;
    const value = maxVal - (i * (maxVal - minVal)) / 4;
    s += `<line x1="${PAD}" y1="${r2(y)}" x2="${W - PAD}" y2="${r2(y)}" stroke="#e0e0e0" stroke-width="1"/>`;
    s += `<text x="${PAD - 10}" y="${r2(y + 5)}" text-anchor="end" font-size="12" fill="#666">${fmt(value)}</text>`;
  }

  // mean line
  const ym = yScale(st.mean);
  s += `<line x1="${PAD}" y1="${r2(ym)}" x2="${W - PAD}" y2="${r2(ym)}" stroke="#2196F3" ` +
    `stroke-width="2" stroke-dasharray="5,5"/>`;
  s += `<text x="${PAD - 35}" y="${r2(ym + 15)}" font-size="12" fill="#2196F3" font-weight="bold">` +
    `Mean = ${fmt(st.mean)}</text>`;

  // deviation bars (resting opacity, as with no hover)
  data.forEach((value, i) => {
    const x = xScale(i);
    const colour = st.deviations[i] > 0 ? '#4CAF50' : '#F44336';
    s += `<line x1="${r2(x)}" y1="${r2(ym)}" x2="${r2(x)}" y2="${r2(yScale(value))}" ` +
      `stroke="${colour}" stroke-width="3" opacity="0.3"/>`;
  });

  // data points + value labels
  data.forEach((value, i) => {
    const x = xScale(i), y = yScale(value);
    s += `<circle cx="${r2(x)}" cy="${r2(y)}" r="6" fill="#FF9800" stroke="#fff" stroke-width="2"/>`;
    s += `<text x="${r2(x)}" y="${r2(y - 15)}" text-anchor="middle" font-size="11" fill="#333">${fmt(value)}</text>`;
  });

  // x-axis index labels
  data.forEach((_, i) => {
    s += `<text x="${r2(xScale(i))}" y="${H - PAD + 20}" text-anchor="middle" font-size="12" fill="#666">${i + 1}</text>`;
  });

  return s;
}

function freeze(datasetKey, varianceType, label) {
  const data = DATASETS[datasetKey];
  const st = stats(data, varianceType);
  return (
    `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${label}: ${data.length} points, mean ${fmt(st.mean)}, ` +
    `${varianceType} variance ${fmt(st.variance)}">` +
    chart(data, varianceType) +
    `</svg>`
  );
}

// the readings each frozen state shows, so the page prose quotes the tool
export const readings = {
  default: stats(DATASETS.default, 'population'),
  low: stats(DATASETS.low, 'population'),
  high: stats(DATASETS.high, 'population'),
  outliers: stats(DATASETS.outliers, 'population'),
  sample: stats(DATASETS.default, 'sample'),
};

const varianceDiagrams = {
  default: freeze('default', 'population', 'Default dataset'),
  low: freeze('low', 'population', 'Low variance preset'),
  high: freeze('high', 'population', 'High variance preset'),
  outliers: freeze('outliers', 'population', 'Outlier preset'),
  sample: freeze('default', 'sample', 'Default dataset, sample variance'),
};

export default varianceDiagrams;
