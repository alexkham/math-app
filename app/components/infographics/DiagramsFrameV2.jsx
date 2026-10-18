import React from 'react';
import InfographicsControlPanel from './InfographicsControlPanel';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * DiagramFrame (v2)
 *
 * Same job and the same capture contract as DiagramsFrame.jsx: an element
 * marked `data-diagram-capture="<id>"` that the build-time generator
 * screenshots, with the attribution strip inside it, and the element id as
 * the page anchor.
 *
 * Differences from the first frame:
 *   - The controls are the shared InfographicsControlPanel.
 *   - The diagram is centred on its own. The panel is not part of the centred
 *     block: in a left or right layout it hangs in the free space beside the
 *     diagram, so the diagram sits in the middle of the page column exactly as
 *     the text around it does. The diagram's width is the column width minus
 *     the space reserved on both sides for the panel (so it stays centred),
 *     capped at maxWidth. When the column is too narrow for that, the panel
 *     moves above the diagram as a horizontal bar and the diagram takes the
 *     full column.
 *   - Optional prose before and after the diagram.
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
 *   before       prose above the diagram: a string (run through processContent:
 *                $math$, **bold**, [label](!/path)) or a ReactNode. Optional.
 *   after        prose below the diagram, same rules. Optional.
 *   proseInCapture  false (default): before and after sit on the page only, across the
 *                full column, and are not in the downloaded files.
 *                true: they sit inside the captured region, above and below the
 *                diagram and above the attribution strip, so the PNG and PDF
 *                carry the explanation too.
 *   maxWidth     widest the diagram may be, px. Default 910.
 *   paper        background behind the captured region (default #f4f6fa)
 *   children     the diagram component
 * ==========================================================================*/

const DIAGRAM_DIR = '/diagrams';
const DEFAULT_FORMATS = ['png', 'pdf'];
const FORMAT_ORDER = ['png', 'pdf', 'svg'];
const SITE_NAME = 'Learn Math Class';
const SITE_ORIGIN = 'https://learnmathclass.com';
const DEFAULT_MAX_WIDTH = 910;

const PALETTE = {
  paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
  line: '#d6dce8', accent: '#06357A', soft: '#e8edf5',
};

const isSet = (v) => v !== undefined && v !== null && v !== '' && v !== false;

export default function DiagramFrame(props) {
  const {
    id, title, source, formats, layout = 'left', variant = 'buttons', size = 'default',
    controls, segmented, copyLink = true, maxWidth, paper, children,
    before, after, proseInCapture = false,
  } = props;

  if (!id) return <>{children}</>;

  const requested = formats || DEFAULT_FORMATS;
  const list = FORMAT_ORDER.filter((f) => requested.indexOf(f) !== -1);
  const downloads = list.map((f) => ({ format: f, href: DIAGRAM_DIR + '/' + id + '.' + f }));
  const anchorUrl = SITE_ORIGIN + (source || '') + '#' + id;

  const L = ['left', 'right', 'top', 'bottom', 'strip'].indexOf(layout) !== -1 ? layout : 'left';
  const isSide = L === 'left' || L === 'right';

  const panel = (
    <InfographicsControlPanel
      layout={L}
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

  const rc = (v) => (typeof v === 'string' ? processContent(v) : v);
  const beforeBlock = isSet(before) ? <div className="dfv-prose dfv-prose-before">{rc(before)}</div> : null;
  const afterBlock = isSet(after) ? <div className="dfv-prose dfv-prose-after">{rc(after)}</div> : null;

  const capture = (
    <div className="dfv-capture" data-diagram-capture={id} style={paper ? { background: paper } : undefined}>
      {proseInCapture ? beforeBlock : null}
      {children}
      {proseInCapture ? afterBlock : null}
      <div className="dfv-attr">
        {title ? <span className="dfv-attr-title">{title}</span> : null}
        {title && source ? <span className="dfv-attr-sep">&middot;</span> : null}
        {source ? <a className="dfv-attr-src" href={source}>{source}</a> : null}
        <span className="dfv-attr-site">{SITE_NAME}</span>
      </div>
    </div>
  );

  const stageStyle = { '--dfv-max': (maxWidth || DEFAULT_MAX_WIDTH) + 'px' };
  const sideWrap = <div className={'dfv-side dfv-side-' + L}>{panel}</div>;
  const panelBefore = L === 'left' || L === 'top';

  /* root: full column width, holds the anchor id and the prose;
     stage: the diagram's own box, centred, with the panel hanging off one side */
  return (
    <div className={'dfv-root dfv-l-' + L + ' dfv-s-' + size} id={id}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {proseInCapture ? null : beforeBlock}
      <div className="dfv-stage" style={stageStyle}>
        {panelBefore ? sideWrap : null}
        {capture}
        {panelBefore ? null : sideWrap}
      </div>
      {proseInCapture ? null : afterBlock}
    </div>
  );
}

/* space the panel needs beside the diagram: its width + 14 px gap */
const CSS = `
.dfv-root{--dfv-paper:${PALETTE.paper};--dfv-ink:${PALETTE.ink};--dfv-muted:${PALETTE.muted};--dfv-line:${PALETTE.line};--dfv-accent:${PALETTE.accent};--dfv-soft:${PALETTE.soft};
  --dfv-gutter:150px;
  width:100%;margin:32px 0;scroll-margin-top:80px;container:dfv / inline-size}
.dfv-root.dfv-s-compact{--dfv-gutter:138px}
.dfv-root.dfv-s-comfortable{--dfv-gutter:164px}
.dfv-root *,.dfv-root *::before,.dfv-root *::after{box-sizing:border-box}

/* the diagram's own box: centred on the column, nothing else counted */
.dfv-stage{position:relative;margin:0 auto;width:100%;max-width:var(--dfv-max)}
.dfv-l-left .dfv-stage,.dfv-l-right .dfv-stage{max-width:min(var(--dfv-max),calc(100% - 2 * var(--dfv-gutter)))}

/* side panel hangs outside the diagram, full height so the rail can stick */
.dfv-side-left,.dfv-side-right{position:absolute;top:0;bottom:0;width:max-content}
.dfv-side-left{right:100%;padding-right:14px}
.dfv-side-right{left:100%;padding-left:14px}
.dfv-side-top{margin-bottom:10px}
.dfv-side-bottom,.dfv-side-strip{margin-top:10px}

.dfv-capture{font-family:'Inter',system-ui,-apple-system,sans-serif;line-height:1.5;color:var(--dfv-ink);background:var(--dfv-paper);min-width:0}
.dfv-capture > *{margin-top:0 !important;margin-bottom:0 !important;max-width:100% !important}

/* prose: outside the capture it inherits the page's own text style */
.dfv-prose{font:inherit;color:inherit;line-height:1.7}
.dfv-prose p{margin:0 0 .8em}.dfv-prose p:last-child{margin-bottom:0}
.dfv-root > .dfv-prose-before{margin:0 0 20px}
.dfv-root > .dfv-prose-after{margin:20px 0 0}
.dfv-capture > .dfv-prose{font-family:'Inter',system-ui,sans-serif;font-size:15px;color:#1f2937;padding:18px 24px;background:var(--dfv-paper)}
.dfv-capture > .dfv-prose-before{border-bottom:1px solid var(--dfv-line)}
.dfv-capture > .dfv-prose-after{border-top:1px solid var(--dfv-line)}

.dfv-attr{border:1px solid var(--dfv-line);border-top:none;background:var(--dfv-soft);padding:11px 22px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;
  font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9.5px;letter-spacing:.09em;text-transform:uppercase;color:var(--dfv-muted)}
.dfv-attr-title{color:var(--dfv-ink);font-weight:800;letter-spacing:.07em}
.dfv-attr-sep{opacity:.4}
.dfv-attr-src{color:var(--dfv-muted);text-decoration:none}
.dfv-attr-site{margin-left:auto;font-weight:800;color:var(--dfv-accent);letter-spacing:.14em}

/* column too narrow to hold the diagram plus a panel on each side:
   the panel becomes a horizontal bar above the diagram, the diagram takes the full column */
@container dfv (max-width: 880px){
  .dfv-l-left .dfv-stage,.dfv-l-right .dfv-stage{max-width:var(--dfv-max)}
  .dfv-side-left,.dfv-side-right{position:static;width:auto;padding:0;margin-bottom:10px}
  .dfv-root .icp-rail{position:static;flex-direction:row;flex-wrap:wrap;width:auto;align-items:center}
  .dfv-root .icp-rail .icp-group{flex-direction:row;flex-wrap:wrap}
  .dfv-root .icp-rail .icp-btn{width:auto}
  .dfv-root .icp-rail .icp-divider{width:1px;height:22px;margin:0 4px}
}
@container dfv (max-width: 640px){.dfv-attr{padding:10px 16px;gap:8px;font-size:9px}.dfv-attr-site{margin-left:0;width:100%}}
@media print{.dfv-side{display:none}.dfv-l-left .dfv-stage,.dfv-l-right .dfv-stage{max-width:var(--dfv-max)}}
`;
