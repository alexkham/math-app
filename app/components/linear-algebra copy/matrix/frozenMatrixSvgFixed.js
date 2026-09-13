// frozenMatrixSvg with corrected subscript baselines (additive helper).
//
// frozenMatrixSvg emits a subscript as
//     <tspan font-size=".." dy="+d">1</tspan><tspan dy="-d"></tspan>
// and relies on the second, empty tspan to move the baseline back up.
// Browsers ignore `dy` on a tspan that carries no characters, so the
// restore never happens and every subscript pushes the rest of the text
// further down — a cell such as √(v1² + v2² + v3²) or u2v3 − u3v2 slopes
// diagonally in the still.
//
// This wrapper leaves frozenMatrixSvg untouched and repairs the output:
// the empty restore tspan is given a zero-width space, which is a real
// character with no advance, so its `dy` is honoured and the baseline
// returns to where it was.
//
// Use it exactly like frozenMatrixSvg:
//     frozenMatrixSvgFixed({ matrices, layout, highlights })

import frozenMatrixSvg from './frozenMatrixSvg';

const EMPTY_RESTORE = /<tspan dy="(-[\d.]+)"><\/tspan>/g;

export function fixSubscriptBaselines(svg) {
  return svg.replace(EMPTY_RESTORE, '<tspan dy="$1">&#8203;</tspan>');
}

export default function frozenMatrixSvgFixed(args) {
  return fixSubscriptBaselines(frozenMatrixSvg(args));
}
