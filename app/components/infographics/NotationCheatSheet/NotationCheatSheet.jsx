import React from 'react';
import DiagramFrameV2 from '@/app/components/infographics/DiagramsFrameV2';
import { processContent } from '@/app/utils/contentProcessor';

/**
 * NotationCheatSheet — one sheet per section (or sub-section), the same sheet
 * rendered at the bottom of the notation section on every page of that section.
 * Design follows NotationSection (navy theme). Wrapped in DiagramFrameV2, so it
 * has PNG/PDF downloads and a copy-link button.
 *
 * Usage
 *   import sequencesSheet from '@/app/components/infographics/NotationCheatSheet/sheets/algebra-sequences';
 *   <NotationCheatSheet key={'notation-sheet'} sheet={sequencesSheet} current={'/algebra/sequences/arithmetic'} />
 *
 * sheet = {
 *   id,            frame id: anchor and download file name (same on every page of the section)
 *   source,        page shown in the download's attribution strip (the section page)
 *   eyebrow, title, lead,
 *   groups: [{ page, href, rows: [{ tex, read, means }] }],   href = that page's #notation
 *   clashes: { label, rows: [{ tex, text }] }                 optional
 *   symbolsHref, symbolsLabel,   the matching group of the symbols table (#group_key)
 *   parentHref, parentLabel,
 * }
 * current  path of the page the sheet sits on; its group is marked "This page".
 *
 * Text fields go through processContent: $math$, **bold**, [label](!/path).
 */

const T = {
  ink: '#0b1f3a', accent: '#16345e', steel: '#3d5a80', slate: '#5b7398',
  mist: '#eef3f9', paper: '#f7f9fc', rule: '#d3deec',
};
const SANS = "'Helvetica Neue', Arial, sans-serif";

const samePage = (href, current) => Boolean(current) && href.split('#')[0] === current;

export default function NotationCheatSheet({ sheet, current = '' }) {
  if (!sheet) return null;
  return (
    <DiagramFrameV2 id={sheet.id} title={sheet.title} source={sheet.source} layout="left">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="ncs">
        <div className="ncs-head">
          <div className="ncs-eyebrow">{sheet.eyebrow || 'Notation · Cheat sheet'}</div>
          <div className="ncs-title">{sheet.title}</div>
          {sheet.lead ? <div className="ncs-lead">{processContent(sheet.lead)}</div> : null}
        </div>

        <div className="ncs-grid">
          {sheet.groups.map((g) => {
            const here = samePage(g.href, current);
            return (
              <div className={'ncs-group' + (here ? ' ncs-here' : '')} key={g.page}>
                <a className="ncs-group-head" href={g.href}>
                  <span>{g.page}</span>
                  {here ? <span className="ncs-tag">This page</span> : <span className="ncs-arrow" aria-hidden="true">→</span>}
                </a>
                {g.rows.map((r, i) => (
                  <div className="ncs-row" key={i}>
                    <div className="ncs-sym">{processContent(r.tex)}</div>
                    <div>
                      <div className="ncs-read">{r.read}</div>
                      <div className="ncs-means">{processContent(r.means)}</div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {sheet.clashes ? (
          <div className="ncs-clash">
            <div className="ncs-clash-label">{sheet.clashes.label}</div>
            {sheet.clashes.rows.map((c, i) => (
              <div className="ncs-clash-row" key={i}>
                <span className="ncs-clash-sym">{processContent(c.tex)}</span>
                <span>{processContent(c.text)}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="ncs-foot">
          {sheet.symbolsHref ? <a className="ncs-pill ncs-pill-solid" href={sheet.symbolsHref}>{sheet.symbolsLabel}</a> : null}
          {sheet.parentHref ? <a className="ncs-pill" href={sheet.parentHref}>{sheet.parentLabel}</a> : null}
        </div>
      </section>
    </DiagramFrameV2>
  );
}

const CSS = `
.ncs{background:#fff;border:1px solid ${T.rule};border-top:3px solid ${T.accent};color:${T.ink};text-align:left}
.ncs .katex{white-space:nowrap}
.ncs-head{padding:22px 26px 4px}
.ncs-eyebrow{font:700 11px ${SANS};letter-spacing:.16em;text-transform:uppercase;color:${T.steel};margin:0 0 6px}
.ncs-title{font-size:25px;font-weight:700;margin:0 0 10px;letter-spacing:-.01em;line-height:1.25;color:${T.ink}}
.ncs-lead{color:#33445c;font-size:16px;line-height:1.6;padding-bottom:14px}
.ncs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:0 28px;padding:0 26px}
.ncs-group{border-top:1px solid ${T.rule};padding:14px 0 10px}
.ncs-group-head{display:flex;justify-content:space-between;align-items:center;font:700 12px ${SANS};letter-spacing:.08em;text-transform:uppercase;color:${T.accent};text-decoration:none;margin-bottom:10px}
.ncs-group-head:hover{text-decoration:underline}
.ncs-arrow{font-size:15px;line-height:1}
.ncs-tag{font:700 10px ${SANS};letter-spacing:.08em;color:#fff;background:${T.accent};padding:3px 7px;border-radius:2px}
.ncs-row{display:grid;grid-template-columns:170px 1fr;gap:14px;align-items:start;padding:6px 0}
.ncs-sym{background:${T.mist};border-left:3px solid ${T.accent};padding:6px 8px;text-align:center;font-size:14.5px;white-space:nowrap}
.ncs-read{font:700 10.5px ${SANS};letter-spacing:.08em;text-transform:uppercase;color:${T.steel};margin:2px 0}
.ncs-means{font-size:14.5px;line-height:1.5;color:${T.ink}}
.ncs-clash{margin:8px 26px 0;padding:10px 14px;background:${T.paper};border:1px solid ${T.rule};border-left:3px solid ${T.slate}}
.ncs-clash-label{font:700 10.5px ${SANS};letter-spacing:.1em;text-transform:uppercase;color:${T.accent};margin-bottom:4px}
.ncs-clash-row{display:flex;gap:10px;align-items:baseline;font-size:14.5px;line-height:1.55;color:${T.steel};padding:2px 0}
.ncs-clash-sym{flex:0 0 170px;color:${T.ink}}
.ncs-foot{margin-top:18px;border-top:1px solid ${T.rule};background:${T.paper};padding:12px 26px 14px;display:flex;flex-wrap:wrap;gap:10px}
.ncs-pill{font:600 12.5px ${SANS};text-decoration:none;padding:7px 13px;border-radius:3px;border:1px solid ${T.rule};color:${T.steel};background:#fff}
.ncs-pill-solid{border-color:${T.accent};color:#fff;background:${T.accent}}
@media (max-width:720px){.ncs-grid{grid-template-columns:1fr}.ncs-row{grid-template-columns:130px 1fr}.ncs-clash-sym{flex-basis:130px}.ncs-sym{white-space:normal}}
[data-diagram-export] .ncs-foot{display:none !important}
[data-diagram-export] .ncs-arrow,[data-diagram-export] .ncs-tag{display:none !important}
[data-diagram-export] .ncs{padding-bottom:22px !important}
`;
