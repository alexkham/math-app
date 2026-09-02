// Frozen-state SVGs for the Markov Inequality tool (Line 1 anchor mesh).
//
// The component draws its chart as inline JSX, so this module ports that markup
// element for element and keeps the component's own geometry:
//
//   canvas 700x400, padding {40, 40, 60, 60}
//   scaleX(x) = 60 + (x / maxX) * 600,  maxX = max(a * 2.5, E * 4, 40)
//   scaleY(y) = 340 - (y / maxY) * 300
//   continuous: blue curve stroke #2563eb width 3, tail shaded #ef4444 at 0.3
//   discrete:   stems width 3 with r=4 heads, red past the threshold, blue before
//   markers:    E[X] dashed #10b981, threshold a dashed #ef4444, both labelled
//   x ticks at 0, 10, 20, 30, 40 (those within maxX)
//
// The nine generators, the actual-probability calculator and the normal CDF
// approximation are all defined INSIDE the component (they close over its three
// pieces of state), so they are ported verbatim here and evaluated at the
// component's own opening sliders, E[X] = 10 and a = 15.
//
// One extra state is frozen beyond the nine distributions: `bound-exceeds-one`
// is the exponential at a = 8, below E[X] = 10, where the tool switches its
// header panel to the red "bound is useless" warning. It is a distinct state of
// the tool, not a distribution choice, so it is keyed separately.

const WIDTH = 700, HEIGHT = 400;
const PAD = { top: 40, right: 40, bottom: 60, left: 60 };

const r2 = (n) => Math.round(n * 100) / 100;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---- helpers, ported verbatim from the component ---- */
const factorial = (n) => {
  if (n > 170) return Infinity;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

const binomialCoeff = (n, k) => {
  if (k > n || k < 0) return 0;
  if (k === 0 || k === n) return 1;
  let result = 1;
  for (let i = 0; i < Math.min(k, n - k); i++) result *= (n - i) / (i + 1);
  return result;
};

const normalCDF = (z) => {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
};

function generateDistribution(distribution, expectedValue, maxX) {
  const pts = [];
  if (distribution === 'exponential') {
    const lambda = 1 / expectedValue;
    for (let x = 0; x <= maxX; x += 0.5) pts.push({ x, y: lambda * Math.exp(-lambda * x), type: 'continuous' });
  } else if (distribution === 'normal') {
    const sigma = expectedValue / 2, mu = expectedValue;
    for (let x = 0; x <= maxX; x += 0.5) {
      const y = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
      pts.push({ x, y, type: 'continuous' });
    }
  } else if (distribution === 'uniform') {
    const b = expectedValue * 2;
    for (let x = 0; x <= maxX; x += 0.5) pts.push({ x, y: (x <= b ? 1 / b : 0), type: 'continuous' });
  } else if (distribution === 'poisson') {
    const lambda = expectedValue;
    for (let x = 0; x <= Math.min(maxX, 50); x += 1) {
      pts.push({ x, y: (Math.pow(lambda, x) * Math.exp(-lambda)) / factorial(x), type: 'discrete' });
    }
  } else if (distribution === 'binomial') {
    const p = 0.4, n = Math.round(expectedValue / p);
    for (let x = 0; x <= Math.min(n, maxX); x += 1) {
      pts.push({ x, y: binomialCoeff(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x), type: 'discrete' });
    }
  } else if (distribution === 'geometric') {
    const p = 1 / expectedValue;
    for (let x = 1; x <= Math.min(maxX, 50); x += 1) {
      pts.push({ x, y: p * Math.pow(1 - p, x - 1), type: 'discrete' });
    }
  } else if (distribution === 'discrete_uniform') {
    const n = Math.round(2 * expectedValue - 1);
    for (let x = 1; x <= Math.min(n, maxX); x += 1) pts.push({ x, y: 1 / n, type: 'discrete' });
  } else if (distribution === 'negative_binomial') {
    const r = 5, p = r / (expectedValue + r);
    for (let x = 0; x <= Math.min(maxX, 50); x += 1) {
      pts.push({ x, y: binomialCoeff(x + r - 1, x) * Math.pow(p, r) * Math.pow(1 - p, x), type: 'discrete' });
    }
  } else if (distribution === 'hypergeometric') {
    const N = 50, K = Math.round(N * 0.6), n = Math.round(expectedValue * N / K);
    for (let x = Math.max(0, n + K - N); x <= Math.min(n, K, maxX); x += 1) {
      pts.push({ x, y: (binomialCoeff(K, x) * binomialCoeff(N - K, n - x)) / binomialCoeff(N, n), type: 'discrete' });
    }
  }
  return pts;
}

function actualProbability(distribution, expectedValue, threshold, points) {
  if (distribution === 'exponential') return Math.exp(-(1 / expectedValue) * threshold);
  if (distribution === 'normal') return 1 - normalCDF((threshold - expectedValue) / (expectedValue / 2));
  if (distribution === 'uniform') {
    const b = expectedValue * 2;
    return threshold >= b ? 0 : Math.max(0, (b - threshold) / b);
  }
  return points.filter((p) => p.x >= threshold).reduce((sum, p) => sum + p.y, 0);
}

const text = (x, y, s, o = {}) =>
  `<text x="${r2(x)}" y="${r2(y)}" text-anchor="${o.anchor || 'middle'}" font-size="${o.size || 12}" ` +
  `${o.weight ? `font-weight="${o.weight}" ` : ''}fill="${o.fill || '#374151'}" font-family="Arial, sans-serif"` +
  `${o.transform ? ` transform="${o.transform}"` : ''}>${esc(s)}</text>`;

function freeze(distribution, expectedValue, threshold, label) {
  const maxX = Math.max(threshold * 2.5, expectedValue * 4, 40);
  const points = generateDistribution(distribution, expectedValue, maxX);
  const isDiscrete = points.length > 0 && points[0].type === 'discrete';
  const maxY = Math.max(...points.map((p) => p.y));

  const scaleX = (x) => PAD.left + (x / maxX) * (WIDTH - PAD.left - PAD.right);
  const scaleY = (y) => HEIGHT - PAD.bottom - (y / maxY) * (HEIGHT - PAD.top - PAD.bottom);

  let s = `<rect width="${WIDTH}" height="${HEIGHT}" fill="#ffffff"/>`;

  // gridlines and axes
  [0, 0.25, 0.5, 0.75, 1].forEach((frac) => {
    s += `<line x1="${PAD.left}" y1="${r2(scaleY(frac * maxY))}" x2="${WIDTH - PAD.right}" ` +
      `y2="${r2(scaleY(frac * maxY))}" stroke="#e5e7eb" stroke-width="1"/>`;
  });
  s += `<line x1="${PAD.left}" y1="${HEIGHT - PAD.bottom}" x2="${WIDTH - PAD.right}" ` +
    `y2="${HEIGHT - PAD.bottom}" stroke="#374151" stroke-width="2"/>`;
  s += `<line x1="${PAD.left}" y1="${PAD.top}" x2="${PAD.left}" y2="${HEIGHT - PAD.bottom}" ` +
    `stroke="#374151" stroke-width="2"/>`;
  s += text(WIDTH / 2, HEIGHT - 15, 'x', { size: 14 });
  s += text(20, HEIGHT / 2, isDiscrete ? 'PMF' : 'PDF',
    { size: 14, transform: `rotate(-90, 20, ${HEIGHT / 2})` });

  if (isDiscrete) {
    points.forEach((p) => {
      const beyond = p.x >= threshold;
      const colour = beyond ? '#ef4444' : '#2563eb';
      s += `<line x1="${r2(scaleX(p.x))}" y1="${r2(scaleY(0))}" x2="${r2(scaleX(p.x))}" ` +
        `y2="${r2(scaleY(p.y))}" stroke="${colour}" stroke-width="3"${beyond ? ' opacity="0.7"' : ''}/>`;
      s += `<circle cx="${r2(scaleX(p.x))}" cy="${r2(scaleY(p.y))}" r="4" fill="${colour}"/>`;
    });
  } else {
    const beyond = points.filter((p) => p.x >= threshold);
    if (beyond.length > 0) {
      let shaded = beyond.map((p, i) => `${i === 0 ? 'M' : 'L'} ${r2(scaleX(p.x))},${r2(scaleY(p.y))}`).join(' ');
      shaded += ` L ${r2(scaleX(maxX))},${r2(scaleY(0))} L ${r2(scaleX(threshold))},${r2(scaleY(0))} Z`;
      s += `<path d="${shaded}" fill="#ef4444" opacity="0.3"/>`;
    }
    const curve = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${r2(scaleX(p.x))},${r2(scaleY(p.y))}`).join(' ');
    s += `<path d="${curve}" fill="none" stroke="#2563eb" stroke-width="3"/>`;
  }

  // E[X] and threshold markers
  s += `<line x1="${r2(scaleX(expectedValue))}" y1="${PAD.top}" x2="${r2(scaleX(expectedValue))}" ` +
    `y2="${HEIGHT - PAD.bottom}" stroke="#10b981" stroke-width="2" stroke-dasharray="5,5"/>`;
  s += text(scaleX(expectedValue), PAD.top - 10, `E[X]=${expectedValue}`, { size: 13, weight: 'bold', fill: '#10b981' });
  s += `<line x1="${r2(scaleX(threshold))}" y1="${PAD.top}" x2="${r2(scaleX(threshold))}" ` +
    `y2="${HEIGHT - PAD.bottom}" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>`;
  s += text(scaleX(threshold), PAD.top - 10, `a=${threshold}`, { size: 13, weight: 'bold', fill: '#ef4444' });

  // x ticks
  [0, 10, 20, 30, 40].filter((x) => x <= maxX).forEach((x) => {
    s += `<line x1="${r2(scaleX(x))}" y1="${HEIGHT - PAD.bottom}" x2="${r2(scaleX(x))}" ` +
      `y2="${HEIGHT - PAD.bottom + 5}" stroke="#374151" stroke-width="2"/>`;
    s += text(scaleX(x), HEIGHT - PAD.bottom + 20, x);
  });

  return `<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" width="540" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(label)}">` + s + `</svg>`;
}

/* ---- the tool's opening sliders ---- */
export const DEFAULTS = { expectedValue: 10, threshold: 15 };

// select value -> section slug, in the order the component's <select> lists them
export const SLUGS = {
  normal: 'markov-normal',
  exponential: 'markov-exponential',
  uniform: 'markov-uniform',
  poisson: 'markov-poisson',
  binomial: 'markov-binomial',
  geometric: 'markov-geometric',
  negative_binomial: 'markov-negative-binomial',
  hypergeometric: 'markov-hypergeometric',
  discrete_uniform: 'markov-discrete-uniform',
};

function reading(distribution, expectedValue, threshold) {
  const maxX = Math.max(threshold * 2.5, expectedValue * 4, 40);
  const points = generateDistribution(distribution, expectedValue, maxX);
  const discrete = points.length > 0 && points[0].type === 'discrete';
  const actual = actualProbability(distribution, expectedValue, threshold, points);
  const bound = threshold > 0 ? expectedValue / threshold : 0;
  return {
    distribution,
    expectedValue,
    threshold,
    bound,
    actual,
    holds: actual <= bound + 1e-12,
    slack: bound - actual,
    discrete,
    points: points.length,
    // for the discrete families the tool sums only the points it plotted, so
    // record how much mass that is - see the page section on the window
    plottedMass: discrete ? points.reduce((sum, p) => sum + p.y, 0) : 1,
  };
}

export const readings = Object.fromEntries(
  Object.entries(SLUGS).map(([dist, slug]) =>
    [slug, reading(dist, DEFAULTS.expectedValue, DEFAULTS.threshold)])
);

// the a <= E[X] state, where the tool swaps in its red "bound is useless" panel
export const uselessBound = reading('exponential', 10, 8);

const markovDiagrams = {
  ...Object.fromEntries(
    Object.entries(SLUGS).map(([dist, slug]) => [
      slug,
      freeze(dist, DEFAULTS.expectedValue, DEFAULTS.threshold,
        `${dist.replace('_', ' ')} at E[X] = 10 with the threshold a = 15, tail beyond a shaded red`),
    ])
  ),
  'bound-exceeds-one': freeze('exponential', 10, 8,
    'Exponential at E[X] = 10 with the threshold a = 8, below the mean, where the Markov bound exceeds 1'),
};

export default markovDiagrams;
