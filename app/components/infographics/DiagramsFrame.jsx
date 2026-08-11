// // // // import React from 'react';

// // // // /* ============================================================================
// // // //  * THEMES — navy only, matching the diagram components.
// // // //  * ==========================================================================*/
// // // // const THEMES = {
// // // //   navy: {
// // // //     paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
// // // //     line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
// // // //   },
// // // // };

// // // // const DEFAULT_THEME = 'navy';

// // // // /* Where the generator writes its output. Filenames are `${id}.${ext}`. */
// // // // const DIAGRAM_DIR = '/diagrams';

// // // // const FORMATS = [
// // // //   { ext: 'png', label: 'PNG', hint: 'Raster image' },
// // // //   { ext: 'pdf', label: 'PDF', hint: 'Print quality' },
// // // //   { ext: 'svg', label: 'SVG', hint: 'Vector' },
// // // // ];

// // // // const SITE_NAME = 'Learn Math Class';
// // // // const SITE_ORIGIN = 'https://learnmathclass.com';

// // // // /* ============================================================================
// // // //  * CSS
// // // //  * ==========================================================================*/
// // // // function buildCss() {
// // // //   let css = '';

// // // //   Object.keys(THEMES).forEach(function (key) {
// // // //     const t = THEMES[key];
// // // //     css +=
// // // //       '.dfr-root.dfr-t-' + key + '{' +
// // // //       '--dfr-paper:' + t.paper + ';--dfr-ink:' + t.ink + ';--dfr-muted:' + t.muted + ';' +
// // // //       '--dfr-line:' + t.line + ';--dfr-accent:' + t.accent + ';--dfr-soft:' + t.soft + ';}';
// // // //   });

// // // //   css +=
// // // //   '.dfr-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
// // // //   'color:var(--dfr-ink);max-width:880px;margin:32px auto;scroll-margin-top:80px;}' +
// // // //   '.dfr-root *,.dfr-root *::before,.dfr-root *::after{box-sizing:border-box;}' +

// // // //   /* The captured region. The generator screenshots exactly this element, so
// // // //    * anything inside it — including the attribution strip — appears in every
// // // //    * downloaded file. */
// // // //   '.dfr-capture{background:var(--dfr-paper);}' +

// // // //   /* the child component sets its own max-width; neutralise its outer margin
// // // //    * so the frame owns the vertical rhythm */
// // // //   '.dfr-capture > *{margin-top:0 !important;margin-bottom:0 !important;' +
// // // //   'max-width:100% !important;}' +

// // // //   /* ---------- attribution strip (inside the capture) ---------- */
// // // //   '.dfr-attr{border:1px solid var(--dfr-line);border-top:none;background:var(--dfr-soft);' +
// // // //   'padding:11px 22px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;' +
// // // //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;letter-spacing:.09em;' +
// // // //   'text-transform:uppercase;color:var(--dfr-muted);}' +
// // // //   '.dfr-attr-title{color:var(--dfr-ink);font-weight:800;letter-spacing:.07em;}' +
// // // //   '.dfr-attr-sep{opacity:.4;}' +
// // // //   '.dfr-attr-src{color:var(--dfr-muted);text-decoration:none;}' +
// // // //   '.dfr-attr-site{margin-left:auto;font-weight:800;color:var(--dfr-accent);' +
// // // //   'letter-spacing:.14em;}' +

// // // //   /* ---------- control bar (outside the capture) ---------- */
// // // //   '.dfr-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;}' +
// // // //   '.dfr-bar-label{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
// // // //   'letter-spacing:.16em;text-transform:uppercase;color:var(--dfr-muted);margin-right:2px;}' +
// // // //   '.dfr-btn{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
// // // //   'font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 11px;' +
// // // //   'border:1px solid var(--dfr-line);background:var(--dfr-paper);color:var(--dfr-ink);' +
// // // //   'text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;' +
// // // //   'transition:background .12s,border-color .12s,color .12s;}' +
// // // //   '.dfr-btn:hover{background:var(--dfr-ink);border-color:var(--dfr-ink);color:var(--dfr-paper);}' +
// // // //   '.dfr-btn:focus-visible{outline:2px solid var(--dfr-accent);outline-offset:2px;}' +
// // // //   '.dfr-btn-ext{opacity:.55;font-weight:500;}' +
// // // //   '.dfr-btn:hover .dfr-btn-ext{opacity:.75;}' +
// // // //   '.dfr-btn.is-copy{margin-left:auto;}' +
// // // //   '.dfr-btn.is-done{background:var(--dfr-accent);border-color:var(--dfr-accent);' +
// // // //   'color:var(--dfr-paper);}' +

// // // //   '@media (max-width:640px){' +
// // // //   '.dfr-root{margin:22px auto;}' +
// // // //   '.dfr-attr{padding:10px 16px;gap:8px;font-size:9px;}' +
// // // //   '.dfr-attr-site{margin-left:0;width:100%;}' +
// // // //   '.dfr-btn.is-copy{margin-left:0;}' +
// // // //   '}' +

// // // //   /* ---------- print: controls are screen furniture ---------- */
// // // //   '@media print{.dfr-bar{display:none;}}';

// // // //   return css;
// // // // }

// // // // const DFR_CSS = buildCss();

// // // // /* ============================================================================
// // // //  * COMPONENT
// // // //  *
// // // //  * Frame, attribution and download controls. Renders nothing of its own beyond
// // // //  * chrome — the diagram is whatever is passed as children, and the downloadable
// // // //  * files are static assets the build-time generator already wrote to
// // // //  * /public/diagrams/.
// // // //  *
// // // //  * Props
// // // //  *   id        – required. Matches the generated filenames: `${id}.png` etc.
// // // //  *               Also used as the element id, so it doubles as the page anchor.
// // // //  *   title     – shown in the attribution strip.
// // // //  *   source    – path of the page this diagram belongs to.
// // // //  *   theme     – 'navy'
// // // //  *   maxWidth  – optional override of the 880px default.
// // // //  *   children  – the diagram component.
// // // //  *
// // // //  * The attribution strip sits inside `.dfr-capture`, which is the element the
// // // //  * generator screenshots. Every downloaded file therefore carries the title,
// // // //  * source path and site name without a separate watermarking step.
// // // //  * ==========================================================================*/
// // // // export default function DiagramFrame(props) {
// // // //   const id = props.id;
// // // //   const title = props.title;
// // // //   const source = props.source;
// // // //   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
// // // //   const maxWidth = props.maxWidth;
// // // //   const children = props.children;

// // // //   const [copied, setCopied] = React.useState(false);

// // // //   const rootClass = 'dfr-root dfr-t-' + theme;
// // // //   const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

// // // //   if (!id) {
// // // //     return <>{children}</>;
// // // //   }

// // // //   const anchorUrl = SITE_ORIGIN + (source || '') + '#' + id;

// // // //   function handleCopy() {
// // // //     if (typeof navigator === 'undefined' || !navigator.clipboard) return;
// // // //     navigator.clipboard.writeText(anchorUrl).then(function () {
// // // //       setCopied(true);
// // // //       setTimeout(function () { setCopied(false); }, 1800);
// // // //     });
// // // //   }

// // // //   return (
// // // //     <div className={rootClass} style={rootStyle} id={id}>
// // // //       <style dangerouslySetInnerHTML={{ __html: DFR_CSS }} />

// // // //       <div className="dfr-capture" data-diagram-capture={id}>
// // // //         {children}

// // // //         <div className="dfr-attr">
// // // //           {title ? <span className="dfr-attr-title">{title}</span> : null}
// // // //           {title && source ? <span className="dfr-attr-sep">&middot;</span> : null}
// // // //           {source ? (
// // // //             <a className="dfr-attr-src" href={source}>{source}</a>
// // // //           ) : null}
// // // //           <span className="dfr-attr-site">{SITE_NAME}</span>
// // // //         </div>
// // // //       </div>

// // // //       <div className="dfr-bar">
// // // //         <span className="dfr-bar-label">Download</span>

// // // //         {FORMATS.map(function (f) {
// // // //           return (
// // // //             <a
// // // //               key={f.ext}
// // // //               className="dfr-btn"
// // // //               href={DIAGRAM_DIR + '/' + id + '.' + f.ext}
// // // //               download={id + '.' + f.ext}
// // // //               title={f.hint}
// // // //             >
// // // //               {f.label}
// // // //               <span className="dfr-btn-ext">.{f.ext}</span>
// // // //             </a>
// // // //           );
// // // //         })}

// // // //         <button
// // // //           type="button"
// // // //           className={'dfr-btn is-copy' + (copied ? ' is-done' : '')}
// // // //           onClick={handleCopy}
// // // //         >
// // // //           {copied ? 'Copied' : 'Copy link'}
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export { THEMES as DFR_THEMES, FORMATS, DIAGRAM_DIR };


// // // import React from 'react';
// // // import manifest from '@/public/diagrams/manifest.json';

// // // /* ============================================================================
// // //  * THEMES — navy only, matching the diagram components.
// // //  * ==========================================================================*/
// // // const THEMES = {
// // //   navy: {
// // //     paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
// // //     line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
// // //   },
// // // };

// // // const DEFAULT_THEME = 'navy';

// // // /* Where the generator writes its output. Filenames are `${id}.${ext}`. */
// // // const DIAGRAM_DIR = '/diagrams';

// // // /* Every format the generator can emit, with the label shown on the button.
// // //  * Which of these actually appear is decided per diagram by the manifest —
// // //  * HTML-based components produce no SVG, so that button must not be offered. */
// // // const FORMAT_META = {
// // //   png: { label: 'PNG', hint: 'Raster image' },
// // //   pdf: { label: 'PDF', hint: 'Print quality' },
// // //   svg: { label: 'SVG', hint: 'Vector' },
// // // };

// // // const FORMAT_ORDER = ['png', 'pdf', 'svg'];

// // // const SITE_NAME = 'Learn Math Class';
// // // const SITE_ORIGIN = 'https://learnmathclass.com';

// // // /* Manifest lookup, built once at module load. */
// // // const MANIFEST_BY_ID = new Map(
// // //   (Array.isArray(manifest) ? manifest : []).map((r) => [r.id, r])
// // // );

// // // /* ============================================================================
// // //  * CSS
// // //  * ==========================================================================*/
// // // function buildCss() {
// // //   let css = '';

// // //   Object.keys(THEMES).forEach(function (key) {
// // //     const t = THEMES[key];
// // //     css +=
// // //       '.dfr-root.dfr-t-' + key + '{' +
// // //       '--dfr-paper:' + t.paper + ';--dfr-ink:' + t.ink + ';--dfr-muted:' + t.muted + ';' +
// // //       '--dfr-line:' + t.line + ';--dfr-accent:' + t.accent + ';--dfr-soft:' + t.soft + ';}';
// // //   });

// // //   css +=
// // //   '.dfr-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
// // //   'color:var(--dfr-ink);max-width:880px;margin:32px auto;scroll-margin-top:80px;}' +
// // //   '.dfr-root *,.dfr-root *::before,.dfr-root *::after{box-sizing:border-box;}' +

// // //   /* The captured region. The generator screenshots exactly this element, so
// // //    * anything inside it — including the attribution strip — appears in every
// // //    * downloaded file. */
// // //   '.dfr-capture{background:var(--dfr-paper);}' +

// // //   /* the child component sets its own max-width; neutralise its outer margin
// // //    * so the frame owns the vertical rhythm */
// // //   '.dfr-capture > *{margin-top:0 !important;margin-bottom:0 !important;' +
// // //   'max-width:100% !important;}' +

// // //   /* ---------- attribution strip (inside the capture) ---------- */
// // //   '.dfr-attr{border:1px solid var(--dfr-line);border-top:none;background:var(--dfr-soft);' +
// // //   'padding:11px 22px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;' +
// // //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;letter-spacing:.09em;' +
// // //   'text-transform:uppercase;color:var(--dfr-muted);}' +
// // //   '.dfr-attr-title{color:var(--dfr-ink);font-weight:800;letter-spacing:.07em;}' +
// // //   '.dfr-attr-sep{opacity:.4;}' +
// // //   '.dfr-attr-src{color:var(--dfr-muted);text-decoration:none;}' +
// // //   '.dfr-attr-site{margin-left:auto;font-weight:800;color:var(--dfr-accent);' +
// // //   'letter-spacing:.14em;}' +

// // //   /* ---------- control bar (outside the capture) ---------- */
// // //   '.dfr-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;}' +
// // //   '.dfr-bar-label{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
// // //   'letter-spacing:.16em;text-transform:uppercase;color:var(--dfr-muted);margin-right:2px;}' +
// // //   '.dfr-btn{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
// // //   'font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 11px;' +
// // //   'border:1px solid var(--dfr-line);background:var(--dfr-paper);color:var(--dfr-ink);' +
// // //   'text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;' +
// // //   'transition:background .12s,border-color .12s,color .12s;}' +
// // //   '.dfr-btn:hover{background:var(--dfr-ink);border-color:var(--dfr-ink);color:var(--dfr-paper);}' +
// // //   '.dfr-btn:focus-visible{outline:2px solid var(--dfr-accent);outline-offset:2px;}' +
// // //   '.dfr-btn-ext{opacity:.55;font-weight:500;}' +
// // //   '.dfr-btn:hover .dfr-btn-ext{opacity:.75;}' +
// // //   '.dfr-btn.is-copy{margin-left:auto;}' +
// // //   '.dfr-btn.is-done{background:var(--dfr-accent);border-color:var(--dfr-accent);' +
// // //   'color:var(--dfr-paper);}' +

// // //   '@media (max-width:640px){' +
// // //   '.dfr-root{margin:22px auto;}' +
// // //   '.dfr-attr{padding:10px 16px;gap:8px;font-size:9px;}' +
// // //   '.dfr-attr-site{margin-left:0;width:100%;}' +
// // //   '.dfr-btn.is-copy{margin-left:0;}' +
// // //   '}' +

// // //   /* ---------- print: controls are screen furniture ---------- */
// // //   '@media print{.dfr-bar{display:none;}}';

// // //   return css;
// // // }

// // // const DFR_CSS = buildCss();

// // // /* ============================================================================
// // //  * COMPONENT
// // //  *
// // //  * Frame, attribution and download controls. Renders nothing of its own beyond
// // //  * chrome — the diagram is whatever is passed as children, and the downloadable
// // //  * files are static assets the build-time generator already wrote to
// // //  * /public/diagrams/.
// // //  *
// // //  * Props
// // //  *   id        – required. Matches the generated filenames: `${id}.png` etc.
// // //  *               Also used as the element id, so it doubles as the page anchor.
// // //  *   title     – shown in the attribution strip.
// // //  *   source    – path of the page this diagram belongs to.
// // //  *   theme     – 'navy'
// // //  *   maxWidth  – optional override of the 880px default.
// // //  *   formats   – optional explicit list, overriding the manifest.
// // //  *   children  – the diagram component.
// // //  *
// // //  * Which download buttons appear is read from public/diagrams/manifest.json,
// // //  * written by the generator. An HTML-based diagram produces no SVG, so offering
// // //  * that button would 404. Before the first generator run the manifest holds no
// // //  * record for a new diagram and no buttons render at all — which is correct,
// // //  * since the files do not exist yet.
// // //  *
// // //  * The attribution strip sits inside `.dfr-capture`, the element the generator
// // //  * screenshots. Every downloaded file therefore carries the title, source path
// // //  * and site name without a separate watermarking step.
// // //  * ==========================================================================*/
// // // export default function DiagramFrame(props) {
// // //   const id = props.id;
// // //   const title = props.title;
// // //   const source = props.source;
// // //   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
// // //   const maxWidth = props.maxWidth;
// // //   const children = props.children;

// // //   const [copied, setCopied] = React.useState(false);

// // //   const rootClass = 'dfr-root dfr-t-' + theme;
// // //   const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

// // //   if (!id) {
// // //     return <>{children}</>;
// // //   }

// // //   /* Formats: explicit prop wins, otherwise whatever the generator recorded. */
// // //   const record = MANIFEST_BY_ID.get(id);
// // //   const available = props.formats || (record ? record.formats : []) || [];
// // //   const formats = FORMAT_ORDER.filter(function (ext) {
// // //     return available.indexOf(ext) !== -1 && FORMAT_META[ext];
// // //   });

// // //   const anchorUrl = SITE_ORIGIN + (source || '') + '#' + id;

// // //   function handleCopy() {
// // //     if (typeof navigator === 'undefined' || !navigator.clipboard) return;
// // //     navigator.clipboard.writeText(anchorUrl).then(function () {
// // //       setCopied(true);
// // //       setTimeout(function () { setCopied(false); }, 1800);
// // //     });
// // //   }

// // //   return (
// // //     <div className={rootClass} style={rootStyle} id={id}>
// // //       <style dangerouslySetInnerHTML={{ __html: DFR_CSS }} />

// // //       <div className="dfr-capture" data-diagram-capture={id}>
// // //         {children}

// // //         <div className="dfr-attr">
// // //           {title ? <span className="dfr-attr-title">{title}</span> : null}
// // //           {title && source ? <span className="dfr-attr-sep">&middot;</span> : null}
// // //           {source ? (
// // //             <a className="dfr-attr-src" href={source}>{source}</a>
// // //           ) : null}
// // //           <span className="dfr-attr-site">{SITE_NAME}</span>
// // //         </div>
// // //       </div>

// // //       <div className="dfr-bar">
// // //         {formats.length > 0 ? (
// // //           <span className="dfr-bar-label">Download</span>
// // //         ) : null}

// // //         {formats.map(function (ext) {
// // //           const meta = FORMAT_META[ext];
// // //           return (
// // //             <a
// // //               key={ext}
// // //               className="dfr-btn"
// // //               href={DIAGRAM_DIR + '/' + id + '.' + ext}
// // //               download={id + '.' + ext}
// // //               title={meta.hint}
// // //             >
// // //               {meta.label}
// // //               <span className="dfr-btn-ext">.{ext}</span>
// // //             </a>
// // //           );
// // //         })}

// // //         <button
// // //           type="button"
// // //           className={'dfr-btn is-copy' + (copied ? ' is-done' : '')}
// // //           onClick={handleCopy}
// // //         >
// // //           {copied ? 'Copied' : 'Copy link'}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export { THEMES as DFR_THEMES, FORMAT_META, FORMAT_ORDER, DIAGRAM_DIR };



// // import React from 'react';

// // /* ============================================================================
// //  * THEMES — navy only, matching the diagram components.
// //  * ==========================================================================*/
// // const THEMES = {
// //   navy: {
// //     paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
// //     line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
// //   },
// // };

// // const DEFAULT_THEME = 'navy';

// // /* Where the generator writes its output. Filenames are `${id}.${ext}`. */
// // const DIAGRAM_DIR = '/diagrams';

// // const FORMAT_META = {
// //   png: { label: 'PNG', hint: 'Raster image' },
// //   pdf: { label: 'PDF', hint: 'Print quality' },
// //   svg: { label: 'SVG', hint: 'Vector' },
// // };

// // const FORMAT_ORDER = ['png', 'pdf', 'svg'];

// // /* Shown when nothing says otherwise. HTML-based diagrams produce no SVG, so it
// //  * is not in this list — pass `formats` explicitly on an SVG diagram to add it,
// //  * or let the manifest decide (see MANIFEST below). */
// // const DEFAULT_FORMATS = ['png', 'pdf'];

// // const SITE_NAME = 'Learn Math Class';
// // const SITE_ORIGIN = 'https://learnmathclass.com';

// // /* ----------------------------------------------------------------------------
// //  * Manifest
// //  *
// //  * The generator writes public/diagrams/manifest.json recording which formats it
// //  * actually produced per diagram. Reading it lets the buttons match reality.
// //  *
// //  * It is loaded with require inside a try/catch rather than a static import, so
// //  * a missing file is not a build error. That matters because of the ordering:
// //  * the manifest only exists after the generator has run, the generator needs the
// //  * pages to render, and the pages need this component. A hard import would make
// //  * that circular on a fresh clone.
// //  * --------------------------------------------------------------------------*/
// // let MANIFEST_BY_ID = new Map();

// // try {
// //   // eslint-disable-next-line global-require, import/no-unresolved
// //   const manifest = require('../../../public/diagrams/manifest.json');
// //   if (Array.isArray(manifest)) {
// //     MANIFEST_BY_ID = new Map(manifest.map((r) => [r.id, r]));
// //   }
// // } catch (e) {
// //   // No manifest yet. Fall back to DEFAULT_FORMATS.
// // }

// // /* ============================================================================
// //  * CSS
// //  * ==========================================================================*/
// // function buildCss() {
// //   let css = '';

// //   Object.keys(THEMES).forEach(function (key) {
// //     const t = THEMES[key];
// //     css +=
// //       '.dfr-root.dfr-t-' + key + '{' +
// //       '--dfr-paper:' + t.paper + ';--dfr-ink:' + t.ink + ';--dfr-muted:' + t.muted + ';' +
// //       '--dfr-line:' + t.line + ';--dfr-accent:' + t.accent + ';--dfr-soft:' + t.soft + ';}';
// //   });

// //   css +=
// //   '.dfr-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
// //   'color:var(--dfr-ink);max-width:880px;margin:32px auto;scroll-margin-top:80px;}' +
// //   '.dfr-root *,.dfr-root *::before,.dfr-root *::after{box-sizing:border-box;}' +

// //   /* The captured region. The generator lifts exactly this element, so anything
// //    * inside it — including the attribution strip — appears in every download. */
// //   '.dfr-capture{background:var(--dfr-paper);}' +

// //   /* the child sets its own max-width; neutralise its outer margin so the frame
// //    * owns the vertical rhythm */
// //   '.dfr-capture > *{margin-top:0 !important;margin-bottom:0 !important;' +
// //   'max-width:100% !important;}' +

// //   /* ---------- attribution strip (inside the capture) ---------- */
// //   '.dfr-attr{border:1px solid var(--dfr-line);border-top:none;background:var(--dfr-soft);' +
// //   'padding:11px 22px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;' +
// //   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;letter-spacing:.09em;' +
// //   'text-transform:uppercase;color:var(--dfr-muted);}' +
// //   '.dfr-attr-title{color:var(--dfr-ink);font-weight:800;letter-spacing:.07em;}' +
// //   '.dfr-attr-sep{opacity:.4;}' +
// //   '.dfr-attr-src{color:var(--dfr-muted);text-decoration:none;}' +
// //   '.dfr-attr-site{margin-left:auto;font-weight:800;color:var(--dfr-accent);' +
// //   'letter-spacing:.14em;}' +

// //   /* ---------- control bar (outside the capture) ---------- */
// //   '.dfr-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;}' +
// //   '.dfr-bar-label{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
// //   'letter-spacing:.16em;text-transform:uppercase;color:var(--dfr-muted);margin-right:2px;}' +
// //   '.dfr-btn{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
// //   'font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 11px;' +
// //   'border:1px solid var(--dfr-line);background:var(--dfr-paper);color:var(--dfr-ink);' +
// //   'text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;' +
// //   'transition:background .12s,border-color .12s,color .12s;}' +
// //   '.dfr-btn:hover{background:var(--dfr-ink);border-color:var(--dfr-ink);color:var(--dfr-paper);}' +
// //   '.dfr-btn:focus-visible{outline:2px solid var(--dfr-accent);outline-offset:2px;}' +
// //   '.dfr-btn-ext{opacity:.55;font-weight:500;}' +
// //   '.dfr-btn:hover .dfr-btn-ext{opacity:.75;}' +
// //   '.dfr-btn.is-copy{margin-left:auto;}' +
// //   '.dfr-btn.is-done{background:var(--dfr-accent);border-color:var(--dfr-accent);' +
// //   'color:var(--dfr-paper);}' +

// //   '@media (max-width:640px){' +
// //   '.dfr-root{margin:22px auto;}' +
// //   '.dfr-attr{padding:10px 16px;gap:8px;font-size:9px;}' +
// //   '.dfr-attr-site{margin-left:0;width:100%;}' +
// //   '.dfr-btn.is-copy{margin-left:0;}' +
// //   '}' +

// //   /* ---------- print: controls are screen furniture ---------- */
// //   '@media print{.dfr-bar{display:none;}}';

// //   return css;
// // }

// // const DFR_CSS = buildCss();

// // /* ============================================================================
// //  * COMPONENT
// //  *
// //  * Frame, attribution and download controls. Renders nothing of its own beyond
// //  * chrome — the diagram is whatever is passed as children, and the downloadable
// //  * files are static assets the build-time generator wrote to /public/diagrams/.
// //  *
// //  * Props
// //  *   id        – required. Matches the generated filenames: `${id}.png` etc.
// //  *               Also the element id, so it doubles as the page anchor.
// //  *   title     – shown in the attribution strip.
// //  *   source    – path of the page this diagram belongs to.
// //  *   theme     – 'navy'
// //  *   maxWidth  – optional override of the 880px default.
// //  *   formats   – optional explicit list, overriding the manifest.
// //  *   children  – the diagram component.
// //  *
// //  * The attribution strip sits inside `.dfr-capture`, the element the generator
// //  * lifts. Every downloaded file therefore carries the title, source path and
// //  * site name without a separate watermarking step.
// //  * ==========================================================================*/
// // export default function DiagramFrame(props) {
// //   const id = props.id;
// //   const title = props.title;
// //   const source = props.source;
// //   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
// //   const maxWidth = props.maxWidth;
// //   const children = props.children;

// //   const [copied, setCopied] = React.useState(false);

// //   const rootClass = 'dfr-root dfr-t-' + theme;
// //   const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

// //   if (!id) {
// //     return <>{children}</>;
// //   }

// //   /* Formats: explicit prop wins, then the manifest, then the safe default. */
// //   const record = MANIFEST_BY_ID.get(id);
// //   const available = props.formats || (record && record.formats) || DEFAULT_FORMATS;
// //   const formats = FORMAT_ORDER.filter(function (ext) {
// //     return available.indexOf(ext) !== -1 && FORMAT_META[ext];
// //   });

// //   const anchorUrl = SITE_ORIGIN + (source || '') + '#' + id;

// //   function handleCopy() {
// //     if (typeof navigator === 'undefined' || !navigator.clipboard) return;
// //     navigator.clipboard.writeText(anchorUrl).then(function () {
// //       setCopied(true);
// //       setTimeout(function () { setCopied(false); }, 1800);
// //     });
// //   }

// //   return (
// //     <div className={rootClass} style={rootStyle} id={id}>
// //       <style dangerouslySetInnerHTML={{ __html: DFR_CSS }} />

// //       <div className="dfr-capture" data-diagram-capture={id}>
// //         {children}

// //         <div className="dfr-attr">
// //           {title ? <span className="dfr-attr-title">{title}</span> : null}
// //           {title && source ? <span className="dfr-attr-sep">&middot;</span> : null}
// //           {source ? (
// //             <a className="dfr-attr-src" href={source}>{source}</a>
// //           ) : null}
// //           <span className="dfr-attr-site">{SITE_NAME}</span>
// //         </div>
// //       </div>

// //       <div className="dfr-bar">
// //         {formats.length > 0 ? (
// //           <span className="dfr-bar-label">Download</span>
// //         ) : null}

// //         {formats.map(function (ext) {
// //           const meta = FORMAT_META[ext];
// //           return (
// //             <a
// //               key={ext}
// //               className="dfr-btn"
// //               href={DIAGRAM_DIR + '/' + id + '.' + ext}
// //               download={id + '.' + ext}
// //               title={meta.hint}
// //             >
// //               {meta.label}
// //               <span className="dfr-btn-ext">.{ext}</span>
// //             </a>
// //           );
// //         })}

// //         <button
// //           type="button"
// //           className={'dfr-btn is-copy' + (copied ? ' is-done' : '')}
// //           onClick={handleCopy}
// //         >
// //           {copied ? 'Copied' : 'Copy link'}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export { THEMES as DFR_THEMES, FORMAT_META, FORMAT_ORDER, DIAGRAM_DIR };


// import React from 'react';

// /* ============================================================================
//  * DiagramFrame
//  *
//  * Frame, attribution strip and download controls around a diagram component.
//  * Renders no diagram of its own — that is whatever is passed as children.
//  *
//  * Imports nothing but React. The download buttons point at static files the
//  * build-time generator wrote to /public/diagrams/; which formats exist is
//  * declared per diagram with the `formats` prop rather than read from a
//  * manifest, so there is no file for the bundler to resolve and no ordering
//  * problem between "generate the images" and "build the site".
//  *
//  * Usage
//  *
//  *   <DiagramFrame
//  *     id="dot-product-laws"
//  *     title="Properties of the dot product"
//  *     source="/linear-algebra/vectors/dot-product"
//  *   >
//  *     <PropertyLawCard data={dotProductLaws} theme="navy" variant="docket" />
//  *   </DiagramFrame>
//  *
//  * HTML-based diagrams (PropertyLawCard, TheoremCard, …) produce PNG and PDF —
//  * the default. SVG-based ones (EquivalenceRing, FourSubspaceMap,
//  * ConceptRelationshipMap) also produce a vector file, so pass
//  * formats={['png', 'pdf', 'svg']} on those.
//  * ==========================================================================*/

// const THEMES = {
//   navy: {
//     paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
//     line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
//   },
// };

// const DEFAULT_THEME = 'navy';

// /* Where the generator writes its output. Filenames are `${id}.${ext}`. */
// const DIAGRAM_DIR = '/diagrams';

// const FORMAT_META = {
//   png: { label: 'PNG', hint: 'Raster image' },
//   pdf: { label: 'PDF', hint: 'Print quality' },
//   svg: { label: 'SVG', hint: 'Vector' },
// };

// const FORMAT_ORDER = ['png', 'pdf', 'svg'];

// /* Every diagram gets these; SVG is opt-in per diagram. */
// const DEFAULT_FORMATS = ['png', 'pdf'];

// const SITE_NAME = 'Learn Math Class';
// const SITE_ORIGIN = 'https://learnmathclass.com';

// /* ============================================================================
//  * CSS
//  * ==========================================================================*/
// function buildCss() {
//   let css = '';

//   Object.keys(THEMES).forEach(function (key) {
//     const t = THEMES[key];
//     css +=
//       '.dfr-root.dfr-t-' + key + '{' +
//       '--dfr-paper:' + t.paper + ';--dfr-ink:' + t.ink + ';--dfr-muted:' + t.muted + ';' +
//       '--dfr-line:' + t.line + ';--dfr-accent:' + t.accent + ';--dfr-soft:' + t.soft + ';}';
//   });

//   css +=
//   '.dfr-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
//   'color:var(--dfr-ink);max-width:880px;margin:32px auto;scroll-margin-top:80px;}' +
//   '.dfr-root *,.dfr-root *::before,.dfr-root *::after{box-sizing:border-box;}' +

//   /* The captured region. The generator lifts exactly this element, so anything
//    * inside it — including the attribution strip — appears in every download. */
//   '.dfr-capture{background:var(--dfr-paper);}' +

//   /* the child sets its own max-width; neutralise its outer margin so the frame
//    * owns the vertical rhythm */
//   '.dfr-capture > *{margin-top:0 !important;margin-bottom:0 !important;' +
//   'max-width:100% !important;}' +

//   /* ---------- attribution strip (inside the capture) ---------- */
//   '.dfr-attr{border:1px solid var(--dfr-line);border-top:none;background:var(--dfr-soft);' +
//   'padding:11px 22px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;' +
//   'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;letter-spacing:.09em;' +
//   'text-transform:uppercase;color:var(--dfr-muted);}' +
//   '.dfr-attr-title{color:var(--dfr-ink);font-weight:800;letter-spacing:.07em;}' +
//   '.dfr-attr-sep{opacity:.4;}' +
//   '.dfr-attr-src{color:var(--dfr-muted);text-decoration:none;}' +
//   '.dfr-attr-site{margin-left:auto;font-weight:800;color:var(--dfr-accent);' +
//   'letter-spacing:.14em;}' +

//   /* ---------- control bar (outside the capture) ---------- */
//   '.dfr-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;}' +
//   '.dfr-bar-label{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
//   'letter-spacing:.16em;text-transform:uppercase;color:var(--dfr-muted);margin-right:2px;}' +
//   '.dfr-btn{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;' +
//   'font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:6px 11px;' +
//   'border:1px solid var(--dfr-line);background:var(--dfr-paper);color:var(--dfr-ink);' +
//   'text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;' +
//   'transition:background .12s,border-color .12s,color .12s;}' +
//   '.dfr-btn:hover{background:var(--dfr-ink);border-color:var(--dfr-ink);color:var(--dfr-paper);}' +
//   '.dfr-btn:focus-visible{outline:2px solid var(--dfr-accent);outline-offset:2px;}' +
//   '.dfr-btn-ext{opacity:.55;font-weight:500;}' +
//   '.dfr-btn:hover .dfr-btn-ext{opacity:.75;}' +
//   '.dfr-btn.is-copy{margin-left:auto;}' +
//   '.dfr-btn.is-done{background:var(--dfr-accent);border-color:var(--dfr-accent);' +
//   'color:var(--dfr-paper);}' +

//   '@media (max-width:640px){' +
//   '.dfr-root{margin:22px auto;}' +
//   '.dfr-attr{padding:10px 16px;gap:8px;font-size:9px;}' +
//   '.dfr-attr-site{margin-left:0;width:100%;}' +
//   '.dfr-btn.is-copy{margin-left:0;}' +
//   '}' +

//   /* ---------- print: controls are screen furniture ---------- */
//   '@media print{.dfr-bar{display:none;}}';

//   return css;
// }

// const DFR_CSS = buildCss();

// /* ============================================================================
//  * COMPONENT
//  *
//  * Props
//  *   id        – required. Matches the generated filenames: `${id}.png` etc.
//  *               Also the element id, so it doubles as the page anchor.
//  *   title     – shown in the attribution strip.
//  *   source    – path of the page this diagram belongs to.
//  *   theme     – 'navy'
//  *   maxWidth  – optional override of the 880px default.
//  *   formats   – which download buttons to show. Default ['png','pdf'].
//  *   children  – the diagram component.
//  * ==========================================================================*/
// export default function DiagramFrame(props) {
//   const id = props.id;
//   const title = props.title;
//   const source = props.source;
//   const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
//   const maxWidth = props.maxWidth;
//   const children = props.children;

//   const [copied, setCopied] = React.useState(false);

//   const rootClass = 'dfr-root dfr-t-' + theme;
//   const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

//   /* Without an id there is no filename and no anchor, so the frame has nothing
//    * to add — render the diagram alone rather than an empty control bar. */
//   if (!id) {
//     return <>{children}</>;
//   }

//   const requested = props.formats || DEFAULT_FORMATS;
//   const formats = FORMAT_ORDER.filter(function (ext) {
//     return requested.indexOf(ext) !== -1 && FORMAT_META[ext];
//   });

//   const anchorUrl = SITE_ORIGIN + (source || '') + '#' + id;

//   function handleCopy() {
//     if (typeof navigator === 'undefined' || !navigator.clipboard) return;
//     navigator.clipboard.writeText(anchorUrl).then(function () {
//       setCopied(true);
//       setTimeout(function () { setCopied(false); }, 1800);
//     });
//   }

//   return (
//     <div className={rootClass} style={rootStyle} id={id}>
//       <style dangerouslySetInnerHTML={{ __html: DFR_CSS }} />

//       <div className="dfr-capture" data-diagram-capture={id}>
//         {children}

//         <div className="dfr-attr">
//           {title ? <span className="dfr-attr-title">{title}</span> : null}
//           {title && source ? <span className="dfr-attr-sep">&middot;</span> : null}
//           {source ? (
//             <a className="dfr-attr-src" href={source}>{source}</a>
//           ) : null}
//           <span className="dfr-attr-site">{SITE_NAME}</span>
//         </div>
//       </div>

//       <div className="dfr-bar">
//         {formats.length > 0 ? (
//           <span className="dfr-bar-label">Download</span>
//         ) : null}

//         {formats.map(function (ext) {
//           const meta = FORMAT_META[ext];
//           return (
//             <a
//               key={ext}
//               className="dfr-btn"
//               href={DIAGRAM_DIR + '/' + id + '.' + ext}
//               download={id + '.' + ext}
//               title={meta.hint}
//             >
//               {meta.label}
//               <span className="dfr-btn-ext">.{ext}</span>
//             </a>
//           );
//         })}

//         <button
//           type="button"
//           className={'dfr-btn is-copy' + (copied ? ' is-done' : '')}
//           onClick={handleCopy}
//         >
//           {copied ? 'Copied' : 'Copy link'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export { THEMES as DFR_THEMES, FORMAT_META, FORMAT_ORDER, DEFAULT_FORMATS, DIAGRAM_DIR };



import React from 'react';

/* ============================================================================
 * DiagramFrame
 *
 * Frame, attribution strip and download rail around a diagram component.
 * Renders no diagram of its own — that is whatever is passed as children.
 *
 * Layout is a two-column grid: a sticky rail of download buttons on the left,
 * the diagram on the right. The rail is sticky because a diagram can be two
 * thousand pixels tall and the buttons should stay reachable throughout. It
 * sits outside `.dfr-capture`, so it never appears in a downloaded file.
 *
 * The frame also recolours the wrapped component's masthead to the accent, so
 * the rail header and the diagram header read as one band across the top. That
 * is done here rather than in each component because it is a property of being
 * framed, not of being a property-law card or a theorem card.
 *
 * Imports nothing but React. Download links point at static files the
 * build-time generator wrote to /public/diagrams/; which formats exist is
 * declared with the `formats` prop rather than read from a manifest, so there
 * is no file for the bundler to resolve and no ordering problem between
 * "generate the images" and "build the site".
 *
 * Usage
 *
 *   <DiagramFrame
 *     id="dot-product-laws"
 *     title="Properties of the dot product"
 *     source="/linear-algebra/vectors/dot-product"
 *   >
 *     <PropertyLawCard data={dotProductLaws} theme="navy" variant="docket" />
 *   </DiagramFrame>
 *
 * HTML-based diagrams produce PNG and PDF — the default. SVG-based ones
 * (EquivalenceRing, FourSubspaceMap, ConceptRelationshipMap) also produce a
 * vector file, so pass formats={['png', 'pdf', 'svg']} on those.
 * ==========================================================================*/

const THEMES = {
  navy: {
    paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478',
    line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5',
  },
};

const DEFAULT_THEME = 'navy';

/* Where the generator writes its output. Filenames are `${id}.${ext}`. */
const DIAGRAM_DIR = '/diagrams';

const FORMAT_META = {
  png: { label: 'PNG', hint: 'Raster \u00B7 2\u00D7' },
  pdf: { label: 'PDF', hint: 'Print quality' },
  svg: { label: 'SVG', hint: 'Vector' },
};

const FORMAT_ORDER = ['png', 'pdf', 'svg'];

/* Every diagram gets these; SVG is opt-in per diagram. */
const DEFAULT_FORMATS = ['png', 'pdf'];

const SITE_NAME = 'Learn Math Class';
const SITE_ORIGIN = 'https://learnmathclass.com';

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.dfr-root.dfr-t-' + key + '{' +
      '--dfr-paper:' + t.paper + ';--dfr-ink:' + t.ink + ';--dfr-muted:' + t.muted + ';' +
      '--dfr-line:' + t.line + ';--dfr-accent:' + t.accent + ';--dfr-soft:' + t.soft + ';}';
  });

  css +=
  /* ---------- root: two columns, rail then diagram ---------- */
  '.dfr-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--dfr-ink);max-width:1060px;margin:32px auto;scroll-margin-top:80px;' +
  'display:grid;grid-template-columns:132px 1fr;gap:18px;align-items:start;}' +
  '.dfr-root *,.dfr-root *::before,.dfr-root *::after{box-sizing:border-box;}' +

  /* Rail on the right instead. */
  '.dfr-root.dfr-rail-right{grid-template-columns:1fr 132px;}' +
  '.dfr-root.dfr-rail-right .dfr-rail{order:2;}' +
  '.dfr-root.dfr-rail-right .dfr-capture{order:1;}' +
  '.dfr-root.dfr-rail-right .dfr-btn:hover{transform:translateX(-3px);}' +

  /* ---------- the captured region ---------- */
  '.dfr-capture{background:var(--dfr-paper);min-width:0;}' +
  '.dfr-capture > *{margin-top:0 !important;margin-bottom:0 !important;' +
  'max-width:100% !important;}' +

  /* Recolour the wrapped component\'s masthead so it matches the rail header.
   * Every diagram component names its header `<prefix>-mast`, so one selector
   * covers all of them. The underline flips to ink to keep the bottom edge
   * readable against the accent fill. */
  '.dfr-root.dfr-mast-accent .dfr-capture [class$="-mast"]{' +
  'background:var(--dfr-accent) !important;}' +
  '.dfr-root.dfr-mast-accent .dfr-capture [class$="-mast"]::after{' +
  'background:var(--dfr-ink) !important;}' +

  /* ---------- attribution strip (inside the capture) ---------- */
  '.dfr-attr{border:1px solid var(--dfr-line);border-top:none;background:var(--dfr-soft);' +
  'padding:11px 22px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9.5px;letter-spacing:.09em;' +
  'text-transform:uppercase;color:var(--dfr-muted);}' +
  '.dfr-attr-title{color:var(--dfr-ink);font-weight:800;letter-spacing:.07em;}' +
  '.dfr-attr-sep{opacity:.4;}' +
  '.dfr-attr-src{color:var(--dfr-muted);text-decoration:none;}' +
  '.dfr-attr-site{margin-left:auto;font-weight:800;color:var(--dfr-accent);' +
  'letter-spacing:.14em;}' +

  /* ---------- rail ---------- */
  '.dfr-rail{position:sticky;top:24px;display:flex;flex-direction:column;gap:8px;}' +
  '.dfr-rail-h{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;' +
  'font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--dfr-paper);' +
  'background:var(--dfr-accent);padding:9px 14px;margin-bottom:2px;}' +

  '.dfr-btn{display:flex;flex-direction:column;align-items:flex-start;gap:3px;' +
  'padding:13px 14px;border:2px solid var(--dfr-ink);background:var(--dfr-paper);' +
  'color:var(--dfr-ink);text-decoration:none;cursor:pointer;font-family:inherit;' +
  'text-align:left;width:100%;transition:background .13s,color .13s,transform .13s;}' +
  '.dfr-btn:hover{background:var(--dfr-ink);color:var(--dfr-paper);transform:translateX(3px);}' +
  '.dfr-btn:focus-visible{outline:3px solid var(--dfr-accent);outline-offset:2px;}' +
  '.dfr-btn-fmt{font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;' +
  'font-size:19px;letter-spacing:-.02em;line-height:1;}' +
  '.dfr-btn-hint{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'letter-spacing:.11em;text-transform:uppercase;opacity:.6;}' +
  '.dfr-btn:hover .dfr-btn-hint{opacity:.8;}' +

  '.dfr-btn.is-primary{border-color:var(--dfr-accent);background:var(--dfr-accent);' +
  'color:var(--dfr-paper);}' +
  '.dfr-btn.is-primary:hover{background:var(--dfr-ink);border-color:var(--dfr-ink);}' +

  '.dfr-rail-sep{height:1px;background:var(--dfr-line);margin:6px 0 4px;}' +

  '.dfr-btn.is-ghost{border-color:var(--dfr-line);background:transparent;padding:11px 14px;}' +
  '.dfr-btn.is-ghost .dfr-btn-fmt{font-size:13px;font-weight:600;}' +
  '.dfr-btn.is-ghost:hover{background:var(--dfr-soft);color:var(--dfr-ink);' +
  'border-color:var(--dfr-ink);}' +
  '.dfr-btn.is-done{background:var(--dfr-accent);border-color:var(--dfr-accent);' +
  'color:var(--dfr-paper);}' +
  '.dfr-btn.is-done:hover{background:var(--dfr-accent);color:var(--dfr-paper);}' +

  '.dfr-rail-size{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:8.5px;' +
  'letter-spacing:.1em;color:var(--dfr-muted);padding-top:8px;margin-top:2px;' +
  'border-top:1px solid var(--dfr-line);}' +

  /* ---------- responsive: rail drops below and goes horizontal ---------- */
  '@media (max-width:900px){' +
  '.dfr-root,.dfr-root.dfr-rail-right{grid-template-columns:1fr;}' +
  '.dfr-root.dfr-rail-right .dfr-rail,.dfr-root.dfr-rail-right .dfr-capture{order:0;}' +
  '.dfr-rail{position:static;flex-direction:row;flex-wrap:wrap;align-items:stretch;}' +
  '.dfr-rail-h{width:100%;}' +
  '.dfr-btn{width:auto;flex-direction:row;align-items:baseline;gap:8px;padding:11px 14px;}' +
  '.dfr-btn:hover,.dfr-root.dfr-rail-right .dfr-btn:hover{transform:none;}' +
  '.dfr-btn-fmt{font-size:15px;}' +
  '.dfr-rail-sep{display:none;}' +
  '.dfr-rail-size{width:100%;border-top:none;padding-top:0;}' +
  '}' +
  '@media (max-width:640px){' +
  '.dfr-root{margin:22px auto;}' +
  '.dfr-attr{padding:10px 16px;gap:8px;font-size:9px;}' +
  '.dfr-attr-site{margin-left:0;width:100%;}' +
  '}' +

  /* ---------- print: the rail is screen furniture ---------- */
  '@media print{.dfr-rail{display:none;}' +
  '.dfr-root,.dfr-root.dfr-rail-right{grid-template-columns:1fr;}}';

  return css;
}

const DFR_CSS = buildCss();

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   id           – required. Matches the generated filenames: `${id}.png` etc.
 *                  Also the element id, so it doubles as the page anchor.
 *   title        – shown in the attribution strip.
 *   source       – path of the page this diagram belongs to.
 *   theme        – 'navy'
 *   maxWidth     – optional override of the 1060px default.
 *   formats      – which download buttons to show. Default ['png','pdf'].
 *   railSide     – 'left' (default) | 'right'
 *   accentMast   – recolour the wrapped masthead to the accent. Default true.
 *   size         – optional 'W × H' string shown under the rail.
 *   children     – the diagram component.
 * ==========================================================================*/
export default function DiagramFrame(props) {
  const id = props.id;
  const title = props.title;
  const source = props.source;
  const theme = THEMES[props.theme] ? props.theme : DEFAULT_THEME;
  const maxWidth = props.maxWidth;
  const railSide = props.railSide === 'right' ? 'right' : 'left';
  const accentMast = props.accentMast !== false;
  const size = props.size;
  const children = props.children;

  const [copied, setCopied] = React.useState(false);

  /* Without an id there is no filename and no anchor, so the frame has nothing
   * to add — render the diagram alone rather than an empty rail. */
  if (!id) {
    return <>{children}</>;
  }

  const rootClass =
    'dfr-root dfr-t-' + theme +
    (railSide === 'right' ? ' dfr-rail-right' : '') +
    (accentMast ? ' dfr-mast-accent' : '');

  const rootStyle = maxWidth ? { maxWidth: maxWidth } : undefined;

  const requested = props.formats || DEFAULT_FORMATS;
  const formats = FORMAT_ORDER.filter(function (ext) {
    return requested.indexOf(ext) !== -1 && FORMAT_META[ext];
  });

  const anchorUrl = SITE_ORIGIN + (source || '') + '#' + id;

  function handleCopy() {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(anchorUrl).then(function () {
      setCopied(true);
      setTimeout(function () { setCopied(false); }, 1600);
    });
  }

  const rail = (
    <div className="dfr-rail">
      <div className="dfr-rail-h">Download</div>

      {formats.map(function (ext, i) {
        const meta = FORMAT_META[ext];
        return (
          <a
            key={ext}
            className={'dfr-btn' + (i === 0 ? ' is-primary' : '')}
            href={DIAGRAM_DIR + '/' + id + '.' + ext}
            download={id + '.' + ext}
          >
            <span className="dfr-btn-fmt">{meta.label}</span>
            <span className="dfr-btn-hint">{meta.hint}</span>
          </a>
        );
      })}

      <div className="dfr-rail-sep" />

      <button
        type="button"
        className={'dfr-btn is-ghost' + (copied ? ' is-done' : '')}
        onClick={handleCopy}
      >
        <span className="dfr-btn-fmt">{copied ? 'Copied' : 'Copy link'}</span>
      </button>

      {size ? <div className="dfr-rail-size">{size}</div> : null}
    </div>
  );

  const capture = (
    <div className="dfr-capture" data-diagram-capture={id}>
      {children}

      <div className="dfr-attr">
        {title ? <span className="dfr-attr-title">{title}</span> : null}
        {title && source ? <span className="dfr-attr-sep">&middot;</span> : null}
        {source ? (
          <a className="dfr-attr-src" href={source}>{source}</a>
        ) : null}
        <span className="dfr-attr-site">{SITE_NAME}</span>
      </div>
    </div>
  );

  return (
    <div className={rootClass} style={rootStyle} id={id}>
      <style dangerouslySetInnerHTML={{ __html: DFR_CSS }} />
      {rail}
      {capture}
    </div>
  );
}

export { THEMES as DFR_THEMES, FORMAT_META, FORMAT_ORDER, DEFAULT_FORMATS, DIAGRAM_DIR };