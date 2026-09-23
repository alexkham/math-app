'use client';

// ToolBlock — the frame that embeds a visual tool inside a content page.
//
//   header    tool name · badge · formula/subtitle            (optional)
//   body      the tool (children) or a StatePlayer  |  aside   (optional)
//   gallery   thumbnails of frozen states, collapsible          (optional)
//   cta       link to the full tool page + one line             (optional)
//   related   links to other tools                              (optional)
//
// Every part is optional and switched by props; the block renders only what it
// is given. All text and links arrive as props from getStaticProps (see
// getToolBlock.js) and render as real DOM — nothing is fetched client-side, so
// the page's static HTML carries the tool name, the links and the SVGs.
//
// Colours follow app/styles/theme.js. Inline styles, like RelatedTools.jsx.

import React, { useState } from 'react';
import { colors } from '@/app/styles/theme';
import StatePlayer, { normalizeSvg } from './StatePlayer';

const NAVY = colors.primary;        // #06357a
const SOFT = colors.primarySoft;    // #5a7299
const TINT = colors.primaryTint;    // #e8eef7
const BODY = colors.textBody;       // #34495e
const STRIP = colors.rowAlt;        // #f8f9fa
const LINE = '#eef2f7';
const EDGE = '#dbe3ef';
const MUTED = '#8fa2bd';
const MATH = "'Cambria Math', Georgia, serif";
const SANS = 'Arial, Helvetica, sans-serif';

const BADGE_TONES = {
  up:   { background: '#e6f4ec', color: '#0f6e56' },
  down: { background: '#fdeaea', color: '#a32d2d' },
  flat: { background: '#fdf1dd', color: '#854f0b' },
  info: { background: TINT, color: NAVY },
};

const capsLabel = {
  fontSize: 11,
  fontWeight: 600,
  color: MUTED,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
};

/**
 * @param {object} p
 *
 * Identity / header
 * @param {string}  [p.name]            tool name in the header
 * @param {string}  [p.badge]           small pill after the name, e.g. "Interactive"
 * @param {string|React.ReactNode} [p.formula]  right-hand header text, math font when a string
 * @param {React.ReactNode} [p.headerRight] any node instead of / after `formula`
 * @param {boolean} [p.header=true]     set false to drop the header entirely
 * @param {'tinted'|'plain'} [p.tone='tinted']  navy header, or light header with navy text
 *
 * Body
 * @param {React.ReactNode} [p.children]   the reduced tool. When absent and `states` is given, a StatePlayer renders instead
 * @param {Array}  [p.states]              frozen states for the StatePlayer: [{key,label,svg,caption}]
 * @param {object} [p.player]              extra props forwarded to StatePlayer
 * @param {string} [p.hint]                small muted line under the tool
 * @param {object|React.ReactNode} [p.aside]  right panel: {label, value, badge:{text,tone}, note} or a node
 * @param {number|string} [p.mainBasis=370] flex-basis of the tool column
 *
 * Gallery
 * @param {Array|object|false} [p.gallery]  states array, or {states, open, collapsible, columns, onSelect, sync}
 *   sync (default true): clicking a thumbnail selects that state in the StatePlayer when both use the same list
 *
 * Call to action
 * @param {object|false} [p.cta]           {href, text='Open the full tool', description}
 *
 * Related links
 * @param {Array|false} [p.related]        [{key?, name, url}]
 * @param {string} [p.relatedLabel='Related']
 *
 * Extra
 * @param {React.ReactNode} [p.footer]     anything to append inside the card
 * @param {string|number} [p.maxWidth=840]
 * @param {string} [p.margin='16px auto']
 * @param {string} [p.id]
 * @param {string} [p.className]
 * @param {object} [p.style]               merged onto the card
 */
export default function ToolBlock({
  name,
  badge,
  formula,
  headerRight,
  header = true,
  tone = 'tinted',
  children,
  states,
  player,
  hint,
  aside,
  mainBasis = 370,
  gallery,
  cta,
  related,
  relatedLabel = 'Related',
  footer,
  maxWidth = 840,
  margin = '16px auto',
  id,
  className,
  style,
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(() => {
    if (!gallery || Array.isArray(gallery)) return true;
    return gallery.open !== false;
  });

  const gal = !gallery ? null : Array.isArray(gallery) ? { states: gallery } : gallery;
  const galStates = gal && Array.isArray(gal.states) ? gal.states : [];
  const collapsible = gal ? gal.collapsible !== false : false;
  const sync = gal ? gal.sync !== false : false;

  const hasPlayer = !children && Array.isArray(states) && states.length > 0;
  const hasBody = Boolean(children) || hasPlayer || Boolean(aside);
  const showHeader = header && (name || badge || formula || headerRight);

  const tinted = tone === 'tinted';
  const headStyle = {
    padding: '14px 20px',
    background: tinted ? NAVY : TINT,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
  };
  const headText = tinted ? '#ffffff' : NAVY;
  const headSoft = tinted ? '#a8c3e6' : SOFT;

  const onThumb = (st, k) => {
    if (gal.onSelect) gal.onSelect(st, k);
    if (sync && hasPlayer) {
      const j = states.findIndex((s) => s.key === st.key);
      if (j >= 0) setIndex(j);
    }
  };

  const renderAside = () => {
    if (!aside) return null;
    if (React.isValidElement(aside)) return aside;
    const { label, value, badge: ab, note } = aside;
    const toneStyle = ab && (BADGE_TONES[ab.tone] || ab.tone || BADGE_TONES.info);
    return (
      <>
        {label && <div style={capsLabel}>{label}</div>}
        {value !== undefined && (
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 38, fontWeight: 600, color: NAVY, lineHeight: 1 }}>{value}</div>
        )}
        {ab && ab.text && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600,
            padding: '5px 12px', borderRadius: 20, alignSelf: 'flex-start', letterSpacing: '0.02em', ...toneStyle,
          }}>
            {ab.text}
          </div>
        )}
        {note && <div style={{ fontSize: 14, lineHeight: 1.65, color: BODY }}>{note}</div>}
      </>
    );
  };

  return (
    <section
      id={id}
      className={className}
      aria-label={name || 'Visual tool'}
      style={{
        border: `1px solid ${EDGE}`,
        borderRadius: 12,
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: '0 2px 14px rgba(6,53,122,0.10)',
        fontFamily: SANS,
        maxWidth,
        margin,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {showHeader && (
        <div style={headStyle}>
          {name && <span style={{ fontSize: 17, fontWeight: 600, color: headText, letterSpacing: '0.01em' }}>{name}</span>}
          {badge && (
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
              color: tinted ? '#cfe0f7' : NAVY,
              background: tinted ? 'rgba(255,255,255,0.14)' : '#ffffff',
              border: tinted ? 'none' : `1px solid ${colors.primaryTintBorder}`,
              padding: '3px 9px', borderRadius: 20,
            }}>
              {badge}
            </span>
          )}
          {(formula || headerRight) && (
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
              {typeof formula === 'string'
                ? <span style={{ fontFamily: MATH, fontStyle: 'italic', fontSize: 16, color: headSoft }}>{formula}</span>
                : formula}
              {headerRight}
            </span>
          )}
        </div>
      )}

      {hasBody && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {(children || hasPlayer) && (
            <div style={{ flex: `1 1 ${typeof mainBasis === 'number' ? `${mainBasis}px` : mainBasis}`, minWidth: 280, padding: '16px 18px 13px' }}>
              {children || (
                <StatePlayer
                  states={states}
                  index={index}
                  onChange={setIndex}
                  {...player}
                />
              )}
              {hint && <div style={{ fontSize: 12, color: MUTED, marginTop: 6 }}>{hint}</div>}
            </div>
          )}
          {aside && (
            <div style={{
              flex: '1 1 196px', minWidth: 190, borderLeft: `1px solid ${LINE}`, background: '#f8fafc',
              padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12,
            }}>
              {renderAside()}
            </div>
          )}
        </div>
      )}

      {gal && galStates.length > 0 && (
        <div style={{ borderTop: `1px solid ${LINE}`, background: STRIP, padding: '12px 18px 14px' }}>
          {collapsible && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: open ? 8 : 0 }}>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label={open ? 'Collapse the state thumbnails' : 'Expand the state thumbnails'}
                style={{
                  width: 26, height: 26, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#fff', border: `1px solid ${EDGE}`, borderRadius: 6, cursor: 'pointer', color: SOFT, fontSize: 11,
                }}
              >
                {open ? '▲' : '▼'}
              </button>
            </div>
          )}
          {open && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: gal.columns ? `repeat(${gal.columns}, minmax(0, 1fr))` : 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 10,
            }}>
              {galStates.map((st, k) => {
                const active = sync && hasPlayer && states[index] && states[index].key === st.key;
                return (
                  <button
                    key={st.key || k}
                    type="button"
                    onClick={() => onThumb(st, k)}
                    aria-label={st.label ? `Show the ${st.label.toLowerCase()} state` : `Show state ${k + 1}`}
                    style={{
                      padding: '7px 6px', background: '#fff', borderRadius: 8, cursor: 'pointer', width: '100%',
                      border: `1px solid ${active ? SOFT : EDGE}`, textAlign: 'center',
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: normalizeSvg(st.svg) }} />
                    {st.label && <div style={{ fontSize: 11, fontWeight: 600, color: SOFT, marginTop: 6 }}>{st.label}</div>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {cta && cta.href && (
        <div style={{
          padding: '15px 20px', borderTop: `1px solid ${LINE}`, display: 'flex', flexWrap: 'wrap',
          alignItems: 'baseline', gap: '6px 16px',
        }}>
          <a
            href={cta.href}
            style={{
              fontSize: 15, fontWeight: 600, color: NAVY, textDecoration: 'none', whiteSpace: 'nowrap',
              borderBottom: `2px solid ${colors.primaryTintBorder}`, paddingBottom: 1,
            }}
          >
            {cta.text || 'Open the full tool'} &#8594;
          </a>
          {cta.description && <span style={{ fontSize: 14, lineHeight: 1.7, color: SOFT, flex: '1 1 230px' }}>{cta.description}</span>}
        </div>
      )}

      {Array.isArray(related) && related.length > 0 && (
        <nav
          aria-label={relatedLabel}
          style={{
            padding: '11px 20px', borderTop: `1px solid ${LINE}`, background: STRIP,
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10,
          }}
        >
          {relatedLabel && <span style={{ ...capsLabel, letterSpacing: '0.06em' }}>{relatedLabel}</span>}
          {related.map((r) => (
            <a
              key={r.key || r.url}
              href={r.url}
              style={{ fontSize: 13, color: SOFT, textDecoration: 'none', borderBottom: `1px solid ${colors.primaryTintBorder}` }}
            >
              {r.name}
            </a>
          ))}
        </nav>
      )}

      {footer}
    </section>
  );
}
