// mathAnimationScenesCombinatorics_v2.js
// Combinatorics scenes for MathAnimation, kept beside the delivered scenes file so that file stays untouched.
// Both scenes list every outcome: the chosen items are highlighted in the top row, copies fly down into
// the list, a counter follows along, and the closing line states the total.
// Every scene carries steps: [{ at, title, text }] for MathAnimationFrame. The engine itself ignores steps.

const clamp01 = (value) => Math.max(0, Math.min(1, value));
const seg = (t, a, b) => clamp01((t - a) / (b - a));
const smooth = (t) => t * t * (3 - 2 * t);
const range = (count) => Array.from({ length: count }, (unused, i) => i);
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// All orderings of 0..n-1, in dictionary order.
function allOrderings(n) {
  const result = [];
  const build = (prefix, rest) => {
    if (rest.length === 0) {
      result.push(prefix);
      return;
    }
    rest.forEach((item, index) => build([...prefix, item], [...rest.slice(0, index), ...rest.slice(index + 1)]));
  };
  build([], range(n));
  return result;
}

// All k-element subsets of 0..n-1, in dictionary order.
function allSubsets(n, k) {
  const result = [];
  const build = (prefix, start) => {
    if (prefix.length === k) {
      result.push(prefix);
      return;
    }
    for (let i = start; i < n; i++) build([...prefix, i], i + 1);
  };
  build([], 0);
  return result;
}

// Shared builder. groups: arrays of item indexes, one per outcome. cell(index) -> [column, row].
function listingScene(options) {
  const { items, groups, cols, rows, cell, counterWord, finalText, stepMs, size, arc, introText, parts, resultText } = options;
  const groupSize = groups[0].length;
  const letterGap = size * 0.8;
  const cellWidth = Math.max(groupSize * letterGap + 50, 96);
  const sourceGap = size * 2.1;
  const pw = Math.max(cols * cellWidth, items.length * sourceGap, 340) + 40;
  const sourceY = 44;
  const gridTop = 124;
  const rowHeight = 46;
  const bottomY = gridTop + (rows - 1) * rowHeight + 62;
  const ph = bottomY + 40;

  const sourceX = (i) => pw / 2 + (i - (items.length - 1) / 2) * sourceGap;
  const cellX = (col) => pw / 2 + (col - (cols - 1) / 2) * cellWidth;
  const cellY = (row) => gridTop + row * rowHeight;

  const count = groups.length;
  const duration = 1200 + count * stepMs + 1800 + 500;
  const qStart = 1200 / duration;
  const qEnd = (1200 + count * stepMs) / duration;
  const eStart = qEnd + 200 / duration;

  const stagger = groupSize > 1 ? 0.3 / (groupSize - 1) : 0;
  const chips = [];
  const flying = [];

  groups.forEach((group, step) => {
    const local = (p) => clamp01(p.q - step);
    const [col, row] = cell(step);
    const y = cellY(row);
    group.forEach((item, slot) => {
      const begin = 0.1 + slot * stagger;
      const from = [sourceX(item), sourceY];
      const toX = cellX(col) + (slot - (groupSize - 1) / 2) * letterGap;
      chips.push({
        type: 'chip',
        size,
        text: items[item],
        at: from,
        opacity: (p) => {
          const l = p.q - step;
          return l <= 0 || l >= 1 ? 0 : Math.min(seg(l, 0, 0.1), 1 - seg(l, 0.85, 1));
        },
      });
      flying.push({
        type: 'token',
        size,
        text: items[item],
        color: 'accent',
        colorTo: 'primary',
        blend: (p) => seg(local(p), 0.92, 1),
        at: (p) => {
          const u = smooth(seg(local(p), begin, begin + 0.5));
          return [from[0] + (toX - from[0]) * u, from[1] + (y - from[1]) * u - arc * Math.sin(Math.PI * u)];
        },
        opacity: (p) => seg(local(p), begin, begin + 0.06),
      });
    });
  });

  // Explanation steps: set up, one per part of the list (parts: [{ start, title, text }]), result.
  const stepSpan = (qEnd - qStart) / count;
  const steps = [
    { at: 0, title: 'Set up', text: introText },
    ...parts.map((part) => ({ at: qStart + part.start * stepSpan, title: part.title, text: part.text })),
    { at: eStart, title: 'Result', text: resultText },
  ];

  return {
    duration,
    height: ph,
    steps,
    view: { px: [pw, ph] },
    params: { a0: 0, q: 0, e: 0 },
    tracks: [
      { param: 'a0', to: 1, start: 0, end: 900 / duration },
      { param: 'q', to: count, start: qStart, end: qEnd, ease: 'linear' },
      { param: 'e', to: 1, start: eStart, end: eStart + 1400 / duration, ease: 'linear' },
    ],
    objects: [
      ...chips,
      ...items.map((text, i) => ({ type: 'token', size, text, at: [sourceX(i), sourceY], opacity: (p) => p.a0 })),
      ...flying,
      {
        type: 'token',
        size: size * 0.7,
        color: 'ghost',
        text: (p) => counterWord + ': ' + Math.floor(p.q + 1e-9),
        at: [pw / 2, bottomY],
        opacity: (p) => p.a0 * (1 - seg(p.e, 0.1, 0.45)),
      },
      { type: 'token', size, color: 'accent', text: finalText, at: [pw / 2, bottomY], opacity: (p) => seg(p.e, 0.5, 0.9) },
    ],
  };
}

// ---------------------------------------------------------------------------------------------
// Permutations: every ordering of the items. One column per first item, so the n columns of
// (n - 1)! orderings show where n! comes from. Readable for 2 to 4 items.
// ---------------------------------------------------------------------------------------------
export function permutationsScene(options = {}) {
  const { items = ['A', 'B', 'C'], stepMs = 1500, size = 28, arc = 22 } = options;
  const n = items.length;
  if (n < 2 || n > 4) throw new Error('permutationsScene: give 2 to 4 items, got ' + n);
  const rows = factorial(n - 1);
  const factors = range(n).map((i) => n - i).join(' · ');
  const groups = allOrderings(n);
  const word = (group) => group.map((i) => items[i]).join('');
  const parts = range(n).map((first) => ({
    start: first * rows,
    title: items[first] + ' first',
    text: 'Put ' + items[first] + ' in front. The other ' + (n - 1) + (n - 1 === 1 ? ' item' : ' items') + ' can follow in '
      + rows + (rows === 1 ? ' way: ' : ' ways: ') + groups.slice(first * rows, (first + 1) * rows).map(word).join(', ') + '.',
  }));
  return listingScene({
    items,
    groups,
    introText: 'Count the ways to put ' + n + ' different items in order. Each ordering uses every item once.',
    parts,
    resultText: 'Each of the ' + n + ' choices for the first place leaves ' + rows + (rows === 1 ? ' ordering' : ' orderings')
      + ' of the rest: ' + factors + ' = ' + factorial(n) + ' orderings in all.',
    cols: n,
    rows,
    cell: (index) => [Math.floor(index / rows), index % rows],
    counterWord: 'orderings',
    finalText: n + '! = ' + factors + ' = ' + factorial(n),
    stepMs,
    size,
    arc,
  });
}

// ---------------------------------------------------------------------------------------------
// Combinations: every way to choose k of the items, order ignored.
// ---------------------------------------------------------------------------------------------
export function combinationsScene(options = {}) {
  const { items = ['A', 'B', 'C', 'D'], k = 2, stepMs = 1500, size = 28, arc = 22 } = options;
  const n = items.length;
  if (k < 1 || k > n) throw new Error('combinationsScene: k must be between 1 and ' + n + ', got ' + k);
  const groups = allSubsets(n, k);
  if (groups.length > 20) throw new Error('combinationsScene: ' + groups.length + ' choices is too many to list');
  const cols = groups.length <= 6 ? Math.min(3, groups.length) : 5;
  const word = (group) => group.map((i) => items[i]).join('');
  const parts = [];
  groups.forEach((group, index) => {
    if (index > 0 && groups[index - 1][0] === group[0]) return;
    const same = groups.filter((other) => other[0] === group[0]);
    parts.push({
      start: index,
      title: 'Starting with ' + items[group[0]],
      text: (group[0] === 0
        ? 'Take ' + items[group[0]] + ' and add ' + (k === 1 ? 'nothing else' : 'items that come after it')
        : 'Now start from ' + items[group[0]] + '. Earlier items are skipped, so no choice is listed twice')
        + ': ' + same.map(word).join(', ') + '.',
    });
  });
  return listingScene({
    items,
    groups,
    introText: 'Count the ways to choose ' + k + ' of ' + n + ' items. Order does not matter: '
      + word(groups[0]) + ' and ' + word([...groups[0]].reverse()) + ' are the same choice.',
    parts,
    resultText: 'Every choice appears exactly once, so there are ' + groups.length + ' ways to choose ' + k + ' of ' + n + ' items.',
    cols,
    rows: Math.ceil(groups.length / cols),
    cell: (index) => [index % cols, Math.floor(index / cols)],
    counterWord: 'choices',
    finalText: 'C(' + n + ', ' + k + ') = ' + groups.length,
    stepMs,
    size,
    arc,
  });
}

export const combinatoricsScenes = {
  permutations: permutationsScene(),
  combinations: combinationsScene(),
};
