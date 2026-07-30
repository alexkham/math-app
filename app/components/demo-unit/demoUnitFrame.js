// Demonstration-unit frame for Operation A (content -> visual tools mesh).
// One attached unit: frozen-state SVG on the left, explanation panel on the
// right, sharing a single frame with a divider ("Option C", chosen 2026-07-30).
//
// Built inside getStaticProps and passed through props; rendered on the page
// as a content-array item via dangerouslySetInnerHTML (same pattern as the
// aggregation tables). NOT interpolated into sectionsContent strings -
// processContent cannot carry a wrapper div around an <svg>.
//
// Explanation text is raw HTML: use unicode math (45deg, -315deg, 2pi as
// literal characters), <em>/<sub>/<sup> - no $...$ and no [text](!/route)
// markdown, neither is processed here.

const FRAME =
  'display:flex;align-items:stretch;flex-wrap:wrap;border:1px solid #cbd5e1;' +
  'border-radius:12px;overflow:hidden;margin:16px auto;max-width:840px;background:#fff';
const SVG_SIDE = 'flex:0 1 auto;display:flex;flex-direction:column;gap:8px;align-items:center;justify-content:center;background:#f8fafc;padding:8px';
const PANEL =
  'flex:1 1 240px;min-width:240px;border-left:1px solid #cbd5e1;background:#f0f6ff;' +
  'padding:14px 18px;display:flex;flex-direction:column;justify-content:center';
const CAPTION = 'font-size:12px;color:#64748b;margin:0 0 6px;font-weight:600';
const TEXT = 'margin:0;font-size:14px;line-height:1.65;color:#1e3a5f';
const LINK = 'color:#2563eb;text-decoration:none;font-weight:600';

// Strip the diagram's own card chrome (border/background/margin) so it nests
// cleanly inside the frame; keep its intrinsic width/height/viewBox.
function normalizeSvg(svg) {
  return svg.replace(/(<svg[^>]*?)style="[^"]*"/g, '$1style="display:block;max-width:100%;height:auto"');
}

/**
 * Build one demonstration unit.
 * @param {object} o
 * @param {string|string[]} o.svg  frozen-state SVG string(s) from a tool's diagrams module (array = vertical sequence)
 * @param {string} o.caption    short muted label above the text (e.g. "Coterminal pair, frozen")
 * @param {string} o.text       explanation HTML (no closing period link; keep the link inside a sentence)
 * @param {string} o.href       tool route, e.g. "/trigonometry/visual-tools/angle-explorer"
 * @param {string} o.linkText   visible link text, e.g. "angle explorer"
 * @param {string} [o.textAfterLink] optional sentence tail after the link (default ".")
 * @returns {string} HTML string for dangerouslySetInnerHTML
 */
export default function demoUnitFrame({ svg, caption, text, href, linkText, textAfterLink = '.' }) {
  const svgs = (Array.isArray(svg) ? svg : [svg]).map(normalizeSvg).join('');
  return (
    `<div style="${FRAME}">` +
    `<div style="${SVG_SIDE}">${svgs}</div>` +
    `<div style="${PANEL}">` +
    (caption ? `<div style="${CAPTION}">${caption}</div>` : '') +
    `<p style="${TEXT}">${text} <a href="${href}" style="${LINK}">${linkText}</a>${textAfterLink}</p>` +
    `</div></div>`
  );
}
