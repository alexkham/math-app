// Frozen-state SVGs for the Chebyshev Inequality tool (Line 1 anchor mesh).
//
// The component draws its chart as inline JSX, so this module ports that markup
// element for element and keeps its geometry:
//
//   canvas 700x400, padding {40, 40, 60, 60}
//   scaleX(x) = 60 + ((x - minX) / (maxX - minX)) * 600, window mu +/- 4 sigma
//   scaleY(y) = 340 - (y / maxY) * 300
//   continuous: blue curve #2563eb width 3, BOTH tails shaded #ef4444 at 0.3
//   discrete:   stems width 3 with r=4 heads, red outside [mu-a, mu+a]
//   markers:    mu dashed #10b981, mu-a and mu+a dashed #ef4444, all labelled
//   x ticks:    step 10 / 5 / 2 by window width, the component's own rule
//
// THE VARIANCE USED HERE IS THE DISTRIBUTION'S OWN. Only the normal and the
// continuous uniform are built from the variance slider; the other seven
// generators derive everything from the mean, so their true variance is
// unrelated to it. The component previously computed the bound from the slider
// regardless, which made it report Chebyshev VIOLATED at its own opening
// settings - exponential 77.6% against a 44.4% bound, discrete uniform 57.9%,
// geometric 57.3%. The component now derives sigma^2 from the chosen
// distribution, and this module mirrors that so the stills and the tool agree.
//
// Verified across five slider settings before wiring: with the derived variance
// every one of the nine distributions satisfies actual <= min(1, sigma^2/a^2).

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

/* ---- the component's effectiveVariance, ported ---- */
export function effectiveVariance(distribution, mean, sliderVariance) {
  switch (distribution) {
    case 'normal':
    case 'uniform':
      return sliderVariance;
    case 'exponential': return mean * mean;
    case 'poisson': return mean;
    case 'binomial': {
      const p = 0.4, n = Math.round(mean / p);
      return n * p * (1 - p);
    }
    case 'geometric': {
      const p = 1 / mean;
      return (1 - p) / (p * p);
    }
    case 'discrete_uniform': {
      const n = Math.round(2 * mean - 1);
      return (n * n - 1) / 12;
    }
    case 'negative_binomial': {
      const r = 5, p = r / (mean + r);
      return (r * (1 - p)) / (p * p);
    }
    case 'hypergeometric': {
      const N = 50, K = Math.round(N * 0.6), n = Math.round(mean * N / K);
      return n * (K / N) * (1 - K / N) * ((N - n) / (N - 1));
    }
    default: return sliderVariance;
  }
}

function generateDistribution(distribution, mean, variance, stdDev, minX, maxX) {
  const pts = [];
  if (distribution === 'normal') {
    for (let x = minX; x <= maxX; x += 0.2) {
      const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
      pts.push({ x, y, type: 'continuous' });
    }
  } else if (distribution === 'exponential') {
    const lambda = 1 / mean;
    for (let x = 0; x <= maxX; x += 0.2) pts.push({ x, y: lambda * Math.exp(-lambda * x), type: 'continuous' });
  } else if (distribution === 'uniform') {
    const a = mean - Math.sqrt(3 * variance), b = mean + Math.sqrt(3 * variance);
    for (let x = Math.max(0, a - 5); x <= b + 5; x += 0.2) {
      pts.push({ x, y: (x >= a && x <= b ? 1 / (b - a) : 0), type: 'continuous' });
    }
  } else if (distribution === 'poisson') {
    for (let x = 0; x <= Math.min(maxX, 50); x += 1) {
      pts.push({ x, y: (Math.pow(mean, x) * Math.exp(-mean)) / factorial(x), type: 'discrete' });
    }
  } else if (distribution === 'binomial') {
    const p = 0.4, n = Math.round(mean / p);
    for (let x = 0; x <= Math.min(n, maxX); x += 1) {
      pts.push({ x, y: binomialCoeff(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x), type: 'discrete' });
    }
  } else if (distribution === 'geometric') {
    const p = 1 / mean;
    for (let x = 1; x <= Math.min(maxX, 50); x += 1) {
      pts.push({ x, y: p * Math.pow(1 - p, x - 1), type: 'discrete' });
    }
  } else if (distribution === 'discrete_uniform') {
    const n = Math.round(2 * mean - 1);
    for (let x = 1; x <= Math.min(n, maxX); x += 1) pts.push({ x, y: 1 / n, type: 'discrete' });
  } else if (distribution === 'negative_binomial') {
    const r = 5, p = r / (mean + r);
    for (let x = 0; x <= Math.min(maxX, 50); x += 1) {
      pts.push({ x, y: binomialCoeff(x + r - 1, x) * Math.pow(p, r) * Math.pow(1 - p, x), type: 'discrete' });
    }
  } else if (distribution === 'hypergeometric') {
    const N = 50, K = Math.round(N * 0.6), n = Math.round(mean * N / K);
    for (let x = Math.max(0, n + K - N); x <= Math.min(n, K, maxX); x += 1) {
      pts.push({ x, y: (binomialCoeff(K, x) * binomialCoeff(N - K, n - x)) / binomialCoeff(N, n), type: 'discrete' });
    }
  }
  return pts;
}

function actualProbability(distribution, mean, variance, stdDev, deviation, points) {
  const lower = mean - deviation, upper = mean + deviation;
  if (distribution === 'normal') {
    return normalCDF((lower - mean) / stdDev) + (1 - normalCDF((upper - mean) / stdDev));
  }
  if (distribution === 'exponential') {
    const lambda = 1 / mean;
    return (lower <= 0 ? 0 : 1 - Math.exp(-lambda * lower)) + Math.exp(-lambda * upper);
  }
  if (distribution === 'uniform') {
    const a = mean - Math.sqrt(3 * variance), b = mean + Math.sqrt(3 * variance);
    return (lower <= a ? 0 : Math.min((lower - a) / (b - a), 1)) +
           (upper >= b ? 0 : Math.max(0, (b - upper) / (b - a)));
  }
  return points.filter((p) => p.x < lower || p.x > upper).reduce((s, p) => s + p.y, 0);
}

const text = (x, y, s, o = {}) =>
  `<text x="${r2(x)}" y="${r2(y)}" text-anchor="${o.anchor || 'middle'}" font-size="${o.size || 12}" ` +
  `${o.weight ? `font-weight="${o.weight}" ` : ''}fill="${o.fill || '#374151'}" font-family="Arial, sans-serif"` +
  `${o.transform ? ` transform="${o.transform}"` : ''}>${esc(s)}</text>`;

function freeze(distribution, mean, sliderVariance, deviation, label) {
  const variance = effectiveVariance(distribution, mean, sliderVariance);
  const stdDev = Math.sqrt(variance);
  const minX = Math.max(0, mean - 4 * stdDev), maxX = mean + 4 * stdDev;
  const lower = mean - deviation, upper = mean + deviation;
  const points = generateDistribution(distribution, mean, sliderVariance, stdDev, minX, maxX);
  const isDiscrete = points.length > 0 && points[0].type === 'discrete';
  const maxY = Math.max(...points.map((p) => p.y));

  const scaleX = (x) => PAD.left + ((x - minX) / (maxX - minX)) * (WIDTH - PAD.left - PAD.right);
  const scaleY = (y) => HEIGHT - PAD.bottom - (y / maxY) * (HEIGHT - PAD.top - PAD.bottom);

  let s = `<rect width="${WIDTH}" height="${HEIGHT}" fill="#ffffff"/>`;

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
      const out = p.x < lower || p.x > upper;
      const colour = out ? '#ef4444' : '#2563eb';
      s += `<line x1="${r2(scaleX(p.x))}" y1="${r2(scaleY(0))}" x2="${r2(scaleX(p.x))}" ` +
        `y2="${r2(scaleY(p.y))}" stroke="${colour}" stroke-width="3"${out ? ' opacity="0.7"' : ''}/>`;
      s += `<circle cx="${r2(scaleX(p.x))}" cy="${r2(scaleY(p.y))}" r="4" fill="${colour}"/>`;
    });
  } else {
    const tail = (pts) => {
      if (!pts.length) return '';
      let d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${r2(scaleX(p.x))},${r2(scaleY(p.y))}`).join(' ');
      d += ` L ${r2(scaleX(pts[pts.length - 1].x))},${r2(scaleY(0))} L ${r2(scaleX(pts[0].x))},${r2(scaleY(0))} Z`;
      return `<path d="${d}" fill="#ef4444" opacity="0.3"/>`;
    };
    s += tail(points.filter((p) => p.x < lower));
    s += tail(points.filter((p) => p.x > upper));
    const curve = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${r2(scaleX(p.x))},${r2(scaleY(p.y))}`).join(' ');
    s += `<path d="${curve}" fill="none" stroke="#2563eb" stroke-width="3"/>`;
  }

  const marker = (x, colour, lbl) =>
    `<line x1="${r2(scaleX(x))}" y1="${PAD.top}" x2="${r2(scaleX(x))}" y2="${HEIGHT - PAD.bottom}" ` +
    `stroke="${colour}" stroke-width="2" stroke-dasharray="5,5"/>` +
    text(scaleX(x), PAD.top - 10, lbl, { size: 13, weight: 'bold', fill: colour });
  s += marker(mean, '#10b981', `μ=${mean}`);
  s += marker(lower, '#ef4444', 'μ-a');
  s += marker(upper, '#ef4444', 'μ+a');

  const range = maxX - minX;
  const step = range > 40 ? 10 : range > 20 ? 5 : 2;
  for (let x = Math.ceil(minX / step) * step; x <= maxX; x += step) {
    s += `<line x1="${r2(scaleX(x))}" y1="${HEIGHT - PAD.bottom}" x2="${r2(scaleX(x))}" ` +
      `y2="${HEIGHT - PAD.bottom + 5}" stroke="#374151" stroke-width="2"/>`;
    s += text(scaleX(x), HEIGHT - PAD.bottom + 20, x.toFixed(0));
  }

  return `<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" width="540" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(label)}">` + s + `</svg>`;
}

/* ---- the tool's opening sliders ---- */
export const DEFAULTS = { mean: 10, variance: 4, deviation: 3 };

export const SLUGS = {
  normal: 'chebyshev-normal',
  exponential: 'chebyshev-exponential',
  uniform: 'chebyshev-uniform',
  poisson: 'chebyshev-poisson',
  binomial: 'chebyshev-binomial',
  geometric: 'chebyshev-geometric',
  negative_binomial: 'chebyshev-negative-binomial',
  hypergeometric: 'chebyshev-hypergeometric',
  discrete_uniform: 'chebyshev-discrete-uniform',
};

function reading(distribution, mean, sliderVariance, deviation) {
  const variance = effectiveVariance(distribution, mean, sliderVariance);
  const stdDev = Math.sqrt(variance);
  const minX = Math.max(0, mean - 4 * stdDev), maxX = mean + 4 * stdDev;
  const points = generateDistribution(distribution, mean, sliderVariance, stdDev, minX, maxX);
  const discrete = points.length > 0 && points[0].type === 'discrete';
  const actual = actualProbability(distribution, mean, sliderVariance, stdDev, deviation, points);
  const raw = deviation > 0 ? variance / (deviation * deviation) : 0;
  return {
    distribution, mean, deviation,
    sliderVariance,
    variance,
    varianceIsDerived: distribution !== 'normal' && distribution !== 'uniform',
    stdDev,
    bound: Math.min(1, raw),
    boundIsVacuous: raw >= 1,
    actual,
    holds: actual <= Math.min(1, raw) + 1e-9,
    kSigma: deviation / stdDev,
    discrete,
    // the discrete sums cover only the plotted window, so record how much mass
    // that is - truncation can only lower the actual, never break the bound
    plottedMass: discrete ? points.reduce((s, p) => s + p.y, 0) : 1,
  };
}

export const readings = Object.fromEntries(
  Object.entries(SLUGS).map(([dist, slug]) =>
    [slug, reading(dist, DEFAULTS.mean, DEFAULTS.variance, DEFAULTS.deviation)])
);

// every one of the nine must satisfy the bound; the page says so, so assert it
export const allHold = Object.values(readings).every((r) => r.holds);

const chebyshevDiagrams = Object.fromEntries(
  Object.entries(SLUGS).map(([dist, slug]) => [
    slug,
    freeze(dist, DEFAULTS.mean, DEFAULTS.variance, DEFAULTS.deviation,
      `${dist.replace('_', ' ')} at mu = 10 with a = 3, both tails beyond mu +/- a shaded red`),
  ])
);

export default chebyshevDiagrams;
