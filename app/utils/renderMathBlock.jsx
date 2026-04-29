// import React from 'react';
// import { BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

// // ─── Palette (matches the formulas page slate+denim treatment) ───
// const DENIM = '#5b7ca3';
// const PANEL_BG = '#E9EFF5';
// const PANEL_BG_LIGHT = '#EEF3F8';
// const PANEL_BORDER = '#BCCBDA';

// // ─── Variant style definitions ───────────────────────────────────
// // `type` is either 'simple' (one styled box wrapping the formula)
// // or 'withBar' (flex container with a 3px accent bar on the left).
// // The two types render through different branches below because
// // 'withBar' needs an inner flex layout while 'simple' does not.

// const VARIANTS = {
//   // A — soft denim wash, no border, no bar. Gentlest.
//   A: {
//     type: 'simple',
//     box: {
//       background: PANEL_BG_LIGHT,
//       borderRadius: '6px',
//       padding: '20px 22px',
//     },
//   },
//   // B — only a left rule, no fill. Blockquote-like.
//   B: {
//     type: 'simple',
//     box: {
//       borderLeft: `3px solid ${DENIM}`,
//       padding: '14px 0 14px 24px',
//       borderRadius: 0,
//     },
//   },
//   // C — full panel (matches formulas page exactly).
//   C: {
//     type: 'withBar',
//     box: {
//       background: PANEL_BG,
//       border: `0.5px solid ${PANEL_BORDER}`,
//       borderRadius: '8px',
//       overflow: 'hidden',
//       boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
//     },
//   },
//   // D — thin denim border, no fill. Crisp/textbook.
//   D: {
//     type: 'simple',
//     box: {
//       border: `1px solid ${PANEL_BORDER}`,
//       borderRadius: '6px',
//       padding: '20px 22px',
//     },
//   },
//   // E — top + bottom rules only. Floats between two thin lines.
//   E: {
//     type: 'simple',
//     box: {
//       borderTop: `1px solid ${PANEL_BORDER}`,
//       borderBottom: `1px solid ${PANEL_BORDER}`,
//       padding: '20px 22px',
//       borderRadius: 0,
//     },
//   },
//   // F — tint + bar (mid-weight). Default.
//   F: {
//     type: 'withBar',
//     box: {
//       background: PANEL_BG_LIGHT,
//       borderRadius: '6px',
//       overflow: 'hidden',
//     },
//   },
// };

// // ─── Helper ──────────────────────────────────────────────────────
// //
// // Renders a LaTeX string as a display-math block wrapped in one of
// // six panel variants. Math rendering goes through react-katex's
// // BlockMath directly — the same call processContent makes for plain
// // $$...$$. No recursion back into processContent, so no deadlock.
// //
// // Args:
// //   latex   — the raw LaTeX string (delimiters already stripped)
// //   options — { variant, width }
// //     variant : 'A' | 'B' | 'C' | 'D' | 'E' | 'F'   (default 'F')
// //     width   : number (treated as px) | string (any CSS unit:
// //               '80%', '40rem', etc.) | undefined (hugs content)
// //
// // Returns: a JSX element ready to drop into a React tree.

// export function renderMathBlock(latex, options = {}) {
//   const { variant = 'F', width } = options;
//   const v = VARIANTS[variant] || VARIANTS.F;

//   // Width resolution: number → px, string → as-is, missing → fit-content.
//   let resolvedWidth;
//   if (width === undefined || width === null || width === '') {
//     resolvedWidth = 'fit-content';
//   } else if (typeof width === 'number') {
//     resolvedWidth = `${width}px`;
//   } else {
//     resolvedWidth = width;
//   }

//   const outerStyle = {
//     width: resolvedWidth,
//     maxWidth: '100%',
//     margin: '20px auto',
//     boxSizing: 'border-box',
//     ...v.box,
//   };

//   if (v.type === 'withBar') {
//     return (
//       <div style={outerStyle}>
//         <div style={{ display: 'flex' }}>
//           <div style={{ width: '3px', background: DENIM, flexShrink: 0 }} />
//           <div style={{ flex: 1, padding: '20px 22px', textAlign: 'center', minWidth: 0 }}>
//             <BlockMath math={latex} />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ ...outerStyle, textAlign: 'center' }}>
//       <BlockMath math={latex} />
//     </div>
//   );
// }



/**
 * @file renderMathBlock.jsx
 *
 * @description
 * Renders a LaTeX expression as a styled display-math block, wrapped in
 * one of six visual "panel" variants. Invoked by `processContent` when
 * it encounters the custom delimiter:
 *
 *   @@[variant,width] LaTeX @@
 *
 * For example:
 *
 *   @@[A,500] x = y^2 @@   → variant A, 500px width
 *   @@[F] f(x) = x + 1 @@  → variant F, hugs content (default width)
 *   @@[,80%] a + b @@      → default variant, 80% width
 *   @@ a + b @@            → all defaults
 *
 * @architecture
 * This helper is a *leaf* for math rendering. It calls react-katex's
 * BlockMath directly — the same call processContent uses for plain
 * $$...$$. It does NOT recurse back into processContent, so there is
 * no risk of mutual recursion or deadlock.
 *
 * @dependencies
 * - react           : for JSX
 * - react-katex     : for BlockMath (display-style LaTeX rendering)
 * - katex CSS       : required for BlockMath to render correctly
 *
 * @see processContent — invokes this helper when @@...@@ is detected.
 */

import React from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/* ──────────────────────────────────────────────────────────────────
 * Color palette
 * ──────────────────────────────────────────────────────────────────
 * Slate + denim tones, matching the formulas page panel treatment.
 * Kept as module-level constants so all variants share the same
 * shades — change once here to retune the entire system.
 * ────────────────────────────────────────────────────────────────── */

/**
 * Primary accent color.
 * Used for: 3px left bar in variants C & F; left border in variant B.
 * @type {string}
 */
const DENIM = '#5b7ca3';

/**
 * Saturated panel background.
 * Used by variant C (full panel — matches formulas page exactly).
 * @type {string}
 */
const PANEL_BG = '#E9EFF5';

/**
 * Lighter panel background.
 * Used by tinted variants A (quiet tint) and F (tint + bar).
 * @type {string}
 */
const PANEL_BG_LIGHT = '#EEF3F8';

/**
 * Hairline border color, slightly darker than the lightest panel
 * background. Used as the border for variants C, D, and E.
 * @type {string}
 */
const PANEL_BORDER = '#BCCBDA';

/* ──────────────────────────────────────────────────────────────────
 * Variant style definitions
 * ──────────────────────────────────────────────────────────────────
 * Each variant entry has two fields:
 *
 *   type : 'simple' | 'withBar'
 *          'simple'  → a single styled box wrapping the formula.
 *          'withBar' → a flex container with a 3px denim accent bar
 *                      on the left and the formula on the right.
 *          The component renders the two types via different code
 *          branches (see renderMathBlock below).
 *
 *   box  : a CSS-in-JS object applied to the outer styled box. May
 *          include `padding` for variants where the padding is part
 *          of the box itself (simple variants). For 'withBar'
 *          variants, padding lives on the inner content div instead,
 *          since the bar must reach the box edges.
 * ────────────────────────────────────────────────────────────────── */

/**
 * Lookup table: variant code → style descriptor.
 * Single source of truth for all six visual options.
 *
 * Variants in plain English:
 *   A — soft denim wash, no border, no bar.       Gentlest.
 *   B — left rule only, no fill.                  Blockquote-like.
 *   C — full panel: bg + border + bar + shadow.   Matches formulas page.
 *   D — hairline frame, no fill.                  Crisp / textbook.
 *   E — top + bottom rules only.                  Floats between two lines.
 *   F — tint + bar (mid-weight).                  Default.
 *
 * @type {Object<string, {type: ('simple'|'withBar'), box: Object}>}
 */
const VARIANTS = {

  // ── A — Soft tint ────────────────────────────────────────────────
  // Pale denim wash inside a rounded rectangle. No border, no bar.
  // The lightest possible emphasis: just enough background contrast
  // to set the formula apart from prose. Best for pages dense with
  // equations where heavier framing would fatigue the reader.
  A: {
    type: 'simple',
    box: {
      background: PANEL_BG_LIGHT,
      borderRadius: '6px',
      padding: '20px 22px',
    },
  },

  // ── B — Left rule ────────────────────────────────────────────────
  // No background, no full border — just a single 3px denim line on
  // the left, like a blockquote. The formula sits indented next to
  // the rule. Sharp corners (no border-radius) because rounded
  // corners on a single-sided border look odd.
  B: {
    type: 'simple',
    box: {
      borderLeft: `3px solid ${DENIM}`,
      padding: '14px 0 14px 24px',
      borderRadius: 0,
    },
  },

  // ── C — Full panel ──────────────────────────────────────────────
  // The formulas-page treatment, identical: saturated background,
  // hairline border, 3px denim accent bar on the left, and a subtle
  // top inner highlight to fake light hitting the panel surface.
  // Heaviest variant — best when the formula is the focal point of
  // the section, not when many appear in a row.
  C: {
    type: 'withBar',
    box: {
      background: PANEL_BG,
      border: `0.5px solid ${PANEL_BORDER}`,
      borderRadius: '8px',
      overflow: 'hidden', // clips the bar to the rounded corners
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
    },
  },

  // ── D — Hairline frame ───────────────────────────────────────────
  // A thin denim border on all four sides, no fill. Reads like an
  // outline drawing — academic / textbook feel without the weight
  // of a filled panel.
  D: {
    type: 'simple',
    box: {
      border: `1px solid ${PANEL_BORDER}`,
      borderRadius: '6px',
      padding: '20px 22px',
    },
  },

  // ── E — Top + bottom rules ───────────────────────────────────────
  // Two thin denim lines, one above and one below the formula. No
  // sides. Most "old-textbook" of the variants — formulas float
  // between two rules, very elegant on prose-heavy pages.
  E: {
    type: 'simple',
    box: {
      borderTop: `1px solid ${PANEL_BORDER}`,
      borderBottom: `1px solid ${PANEL_BORDER}`,
      padding: '20px 22px',
      borderRadius: 0, // sharp corners — same reason as variant B
    },
  },

  // ── F — Tint + bar (default) ─────────────────────────────────────
  // Middle ground between A and C: light tinted background plus the
  // 3px denim accent bar, but no border and no shadow. Carries the
  // formulas-page identity at half the visual weight. The default
  // because it works in the widest range of contexts.
  F: {
    type: 'withBar',
    box: {
      background: PANEL_BG_LIGHT,
      borderRadius: '6px',
      overflow: 'hidden', // clips the bar to the rounded corners
    },
  },

};

/* ──────────────────────────────────────────────────────────────────
 * Public helper
 * ────────────────────────────────────────────────────────────────── */

/**
 * Renders a LaTeX expression as a styled display-math block.
 *
 * The function is pure: same arguments always produce the same JSX,
 * no side effects, no internal state.
 *
 * @param {string} latex
 *   The raw LaTeX expression. Should NOT include the @@ delimiters
 *   or any [variant,width] config — those are stripped/parsed in
 *   processContent before this is called.
 *
 * @param {Object} [options={}]
 *   Rendering options. All fields optional.
 *
 * @param {('A'|'B'|'C'|'D'|'E'|'F')} [options.variant='F']
 *   Panel style. See the VARIANTS table above for what each looks
 *   like. Falls back to 'F' if the value is missing or unknown.
 *
 * @param {(number|string)} [options.width]
 *   Width of the panel.
 *     - number → interpreted as pixels (e.g. 500 → '500px').
 *     - string → passed through verbatim (e.g. '80%', '40rem',
 *                '100%', 'fit-content', 'min-content').
 *     - undefined / null / '' → defaults to 'fit-content', meaning
 *       the panel shrinks to hug the formula.
 *
 * @returns {JSX.Element}
 *   A single <div> ready to be placed in a React tree. The div is
 *   centered horizontally via `margin: '20px auto'`, so it works
 *   inside paragraphs, list items, or any block-level container.
 *
 * @example
 *   // Default everything: variant F, hugs content
 *   renderMathBlock('a^2 + b^2 = c^2');
 *
 * @example
 *   // Variant C with explicit 500px width
 *   renderMathBlock('x = y^2', { variant: 'C', width: 500 });
 *
 * @example
 *   // Default variant, 80% width
 *   renderMathBlock('\\sin(x) + \\cos(x)', { width: '80%' });
 */
export function renderMathBlock(latex, options = {}) {

  // ── Step 1: resolve options to concrete values ──────────────────
  // Destructure with defaults. We only default `variant` here — the
  // `width` default is computed below because it has three input
  // shapes (number, string, missing) that need different handling.
  const { variant = 'F', width } = options;

  // Look up the variant style descriptor. Fall back to F if the
  // caller passed a code we don't recognize, so we never render
  // a broken or empty box.
  const v = VARIANTS[variant] || VARIANTS.F;

  // ── Step 2: resolve the width value ─────────────────────────────
  // Three input shapes are accepted (see JSDoc above). We normalize
  // them all to a single CSS value here so the rendering code below
  // doesn't have to care about types.
  let resolvedWidth;
  if (width === undefined || width === null || width === '') {
    // No width specified → hug the formula's intrinsic width.
    resolvedWidth = 'fit-content';
  } else if (typeof width === 'number') {
    // Bare number → interpret as pixels. (500 → '500px')
    resolvedWidth = `${width}px`;
  } else {
    // Anything else (string with units, or 'auto', etc.) → pass
    // through unchanged. Trust the caller knows CSS.
    resolvedWidth = width;
  }

  // ── Step 3: build the outer wrapper style ───────────────────────
  // This is the box that establishes the width and vertical rhythm.
  // The variant's `box` styles are spread onto it, so the variant
  // controls appearance while the wrapper controls layout.
  //
  // - `width` and `maxWidth: '100%'` together prevent overflow on
  //   narrow viewports while still respecting the requested width.
  // - `margin: '20px auto'` centers the box horizontally and adds
  //   breathing room above and below the equation in the prose flow.
  // - `boxSizing: 'border-box'` ensures padding and border are
  //   counted INSIDE the width, so a 500px panel is actually 500px.
  const outerStyle = {
    width: resolvedWidth,
    maxWidth: '100%',
    margin: '20px auto',
    boxSizing: 'border-box',
    ...v.box, // variant-specific bg/border/shadow/etc.
  };

  // ── Step 4: render — branch on variant type ─────────────────────
  // Two layouts are needed: 'withBar' variants need an inner flex
  // row (bar + content), while 'simple' variants just need padding
  // and centered text.

  if (v.type === 'withBar') {
    // ── 'withBar' layout (variants C, F) ────────────────────────
    // The 3px denim bar must reach the top and bottom edges of the
    // box, so it lives inside an `overflow: hidden` parent (set in
    // the variant's `box`). Padding is applied to the content div,
    // not the outer box, otherwise the bar would have a gap to the
    // edges.
    return (
      <div style={outerStyle}>
        <div style={{ display: 'flex' }}>
          {/* The denim accent bar. flexShrink: 0 prevents it from
              collapsing when the formula is wide. */}
          <div
            style={{
              width: '3px',
              background: DENIM,
              flexShrink: 0,
            }}
          />
          {/* The content cell. flex: 1 takes remaining width.
              minWidth: 0 prevents a known flexbox quirk where a
              flex item refuses to shrink below its content's
              intrinsic min-width — without it, very long formulas
              can push the panel beyond its intended max-width. */}
          <div
            style={{
              flex: 1,
              padding: '20px 22px',
              textAlign: 'center',
              minWidth: 0,
            }}
          >
            <BlockMath math={latex} />
          </div>
        </div>
      </div>
    );
  }

  // ── 'simple' layout (variants A, B, D, E) ─────────────────────
  // No flex needed. Padding is part of the variant's `box` style,
  // so we only need to center the content here.
  return (
    <div style={{ ...outerStyle, textAlign: 'center' }}>
      <BlockMath math={latex} />
    </div>
  );
}