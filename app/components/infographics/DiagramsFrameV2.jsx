import React from 'react';
import InfographicsControlPanel from './InfographicsControlPanel';

/* ============================================================================
 * DiagramFrame (v2)
 *
 * Same job and the same capture contract as DiagramsFrame.jsx: an element
 * marked `data-diagram-capture="<id>"` that the build-time generator
 * screenshots, with the attribution strip inside it, and the element id as
 * the page anchor. What changed is the furniture around the capture: the
 * download rail is now the shared InfographicsControlPanel, so the frame
 * takes the panel's layout / variant / size and can pass the diagram's own
 * controls through.
 *
 * Props
 *   id           required; `${id}.png` etc. are the files, `#id` the anchor
 *   title        attribution strip
 *   source       page path; also the copy-link target with the anchor
 *   formats      ['png','pdf'] default; add 'svg' for SVG components
 *   layout       'left' (default) | 'right' | 'top' | 'bottom' | 'strip'
 *   variant      'buttons' (default) | 'menu'
 *   size         'compact' | 'default' | 'comfortable'
 *   controls     passed to the panel: [{ id, label, icon, onClick, disabled }]
 *   segmented    passed to the panel: { value, options, onChange }
 *   copyLink     boolean, default true
 *   maxWidth     optional px / css width override of the 1060px default
 *   paper        background behind the captured region (default #f4f6fa)
 *   children     the diagram component
 * ==========================================================================*/

const DIAGRAM_DIR = '/diagrams';
const DEFAULT_FORMATS = ['png', 'pdf'];
const FORMAT_ORDER = ['png', 'pdf', 'svg'];
const SITE_NAME = 'Learn Math Class';
const SITE_ORIGIN = 'https://learnmathclass.com';

const PALETTE = {
  paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
  line: '#d6dce8', accent: '#06357A', soft: '#e8edf5',
};

export default function DiagramFrame(props) {
  const {
    id, title, source, formats, layout = 'left', variant = 'buttons', size = 'default',
    controls, segmented, copyLink = true, maxWidth, paper, children,
  } = props;

  if (!id) return <>{children}</>;

  const requested = formats || DEFAULT_FORMATS;
  const list = FORMAT_ORDER.filter((f) => requested.indexOf(f) !== -1);
  const downloads = list.map((f) => ({ format: f, href: DIAGRAM_DIR + '/' + id + '.' + f }));
  const anchorUrl = SITE_ORIGIN + (source || '') + '#' + id;

  const panel = (
    <InfographicsControlPanel
      layout={layout}
      variant={variant}
      size={size}
      downloads={downloads}
      copyLink={copyLink ? anchorUrl : undefined}
      controls={controls}
      segmented={segmented}
      meta={{ title, source }}
      className="dfv-panel"
    />
  );

  const capture = (
    <div className="dfv-capture" data-diagram-capture={id} style={paper ? { background: paper } : undefined}>
      {children}
      <div className="dfv-attr">
        {title ? <span className="dfv-attr-title">{title}</span> : null}
        {title && source ? <span className="dfv-attr-sep">&middot;</span> : null}
        {source ? <a className="dfv-attr-src" href={source}>{source}</a> : null}
        <span className="dfv-attr-site">{SITE_NAME}</span>
      </div>
    </div>
  );

  const rootClass = 'dfv-root dfv-l-' + layout;
  const rootStyle = maxWidth ? { maxWidth } : undefined;
  const panelFirst = layout === 'left' || layout === 'top';

  return (
    <div className={rootClass} style={rootStyle} id={id}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {panelFirst ? panel : null}
      {capture}
      {panelFirst ? null : panel}
    </div>
  );
}

const CSS = `
.dfv-root{--dfv-paper:${PALETTE.paper};--dfv-ink:${PALETTE.ink};--dfv-muted:${PALETTE.muted};--dfv-line:${PALETTE.line};--dfv-accent:${PALETTE.accent};--dfv-soft:${PALETTE.soft};
  font-family:'Inter',system-ui,-apple-system,sans-serif;line-height:1.5;color:var(--dfv-ink);
  max-width:1060px;margin:32px auto;scroll-margin-top:80px;display:grid;gap:14px;align-items:start}
.dfv-root *,.dfv-root *::before,.dfv-root *::after{box-sizing:border-box}
.dfv-l-left{grid-template-columns:auto 1fr}
.dfv-l-right{grid-template-columns:1fr auto}
.dfv-l-top,.dfv-l-bottom,.dfv-l-strip{grid-template-columns:1fr;gap:10px}
.dfv-capture{background:var(--dfv-paper);min-width:0}
.dfv-capture > *{margin-top:0 !important;margin-bottom:0 !important;max-width:100% !important}
.dfv-attr{border:1px solid var(--dfv-line);border-top:none;background:var(--dfv-soft);padding:11px 22px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;
  font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.09em;text-transform:uppercase;color:var(--dfv-muted)}
.dfv-attr-title{color:var(--dfv-ink);font-weight:800;letter-spacing:.07em}
.dfv-attr-sep{opacity:.4}
.dfv-attr-src{color:var(--dfv-muted);text-decoration:none}
.dfv-attr-site{margin-left:auto;font-weight:800;color:var(--dfv-accent);letter-spacing:.14em}
@media (max-width:900px){
  .dfv-l-left,.dfv-l-right{grid-template-columns:1fr}
  .dfv-l-right .dfv-panel{order:2}
  .dfv-root .icp-rail{position:static;flex-direction:row;width:auto;align-items:center}
  .dfv-root .icp-rail .icp-group{flex-direction:row}
  .dfv-root .icp-rail .icp-divider{width:1px;height:18px;margin:0 4px}
}
@media (max-width:640px){.dfv-root{margin:22px auto}.dfv-attr{padding:10px 16px;gap:8px;font-size:9px}.dfv-attr-site{margin-left:0;width:100%}}
@media print{.dfv-l-left,.dfv-l-right{grid-template-columns:1fr}}
`;
