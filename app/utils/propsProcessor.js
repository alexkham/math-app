/* ============================================================
   propsProcessor.js

   Pairs with contentProcessor.js. Same pipeline, one step
   earlier:

     getStaticProps  →  fillTokens  →  processContent  →  DOM
                        resolves the    renders maths,
                        string          links, markup

   Copy that arrives as a prop is fixed at build time, so it
   cannot contain values that only exist while the component is
   running — which step is active, what a cell holds, what a
   user got after pressing a randomise button.

   fillTokens closes that gap. The page supplies the sentence
   with {tokens} in it; the component supplies the numbers.
   Without it, per-step copy has to be built inside the
   component and is the one thing a page cannot edit.

   Use it for any prop-driven string that needs runtime values.
   Static copy needs nothing — pass it straight to
   processContent.
   ============================================================ */

/**
 * Replace {tokens} in a copy string with the values on screen.
 *
 *   template  a string containing {tokens}, or a
 *             (vars, symbols) => string function when a page
 *             needs real logic rather than substitution
 *
 *   vars      the runtime values, keyed by token name
 *
 *   symbols   optional. Tokens that expand to markup rather
 *             than to a value — a symbol in its own colour, a
 *             recurring bit of LaTeX. Checked before vars, so
 *             a component defines {A} once and every string it
 *             owns renders it the same way.
 *
 * An unmatched token is left in place rather than blanked, so
 * a typo shows up in the copy instead of disappearing.
 *
 * Returns a string. Pass the result to processContent to
 * render it.
 */
export function fillTokens(template, vars = {}, symbols = {}) {
  if (typeof template === 'function') return template(vars, symbols);
  if (typeof template !== 'string') return '';

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    if (Object.prototype.hasOwnProperty.call(symbols, key)) return symbols[key];
    if (Object.prototype.hasOwnProperty.call(vars, key)) return String(vars[key]);
    return match;
  });
}
