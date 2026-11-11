// cleanParts.jsx
// Small shared pieces for the "clean" variant: LevelChip, TeX, CleanContent.

import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { processContent } from '../../../app/utils/contentProcessor';
import { CLEAN, levelStyle } from './cleanTheme';

// ─── Level chip ───────────────────────────────────────────────────

export function LevelChip(props) {
  const { level, label } = props;
  const text = label || level;
  if (!text) return null;
  const palette = levelStyle(level);
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        borderRadius: '999px',
        padding: '2px 9px',
        border: `1px solid ${palette.border}`,
        color: palette.color,
        background: palette.background,
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </span>
  );
}

// ─── KaTeX ────────────────────────────────────────────────────────

export function TeX(props) {
  const { tex, display = false } = props;
  const html = useMemo(() => {
    if (!tex) return '';
    try {
      return katex.renderToString(String(tex), { displayMode: display, throwOnError: false });
    } catch (error) {
      return String(tex);
    }
  }, [tex, display]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

// ─── Block label (small caps heading inside a card) ──────────────

export function BlockLabel(props) {
  const { children } = props;
  return (
    <div
      style={{
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: CLEAN.muted,
        marginBottom: '6px',
      }}
    >
      {children}
    </div>
  );
}

// ─── Content renderer ────────────────────────────────────────────
// Accepts the same field value shapes as CalculationsCard:
// string | array | { text, links } | { component, ...props }

const proseStyle = { color: CLEAN.text, lineHeight: 1.65, fontSize: '14.5px' };

export function CleanContent(props) {
  const { value, components = {} } = props;
  if (value == null) return null;
  if (typeof value === 'string') return <div style={proseStyle}>{processContent(value)}</div>;
  if (Array.isArray(value)) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {value.map((block, index) => (
          <CleanContent key={index} value={block} components={components} />
        ))}
      </div>
    );
  }
  if (typeof value !== 'object') return null;

  if (value.component) {
    const Component = components[value.component];
    const { component, ...props } = value;
    if (Component) return <Component {...props} />;
    return (
      <div style={{ ...proseStyle, color: CLEAN.faint, fontFamily: CLEAN.mono, fontSize: '12px' }}>
        &lt;{component}&gt; not registered
      </div>
    );
  }

  const { text, links } = value;
  const linkList = Array.isArray(links) ? links : links ? [links] : [];
  return (
    <div>
      {text && <div style={proseStyle}>{processContent(text)}</div>}
      {linkList.length > 0 && <TextLinks links={linkList} />}
    </div>
  );
}

// ─── Inline text links (no pills, no icons) ──────────────────────

export function TextLinks(props) {
  const { links } = props;
  const valid = links.filter((link) => link && (link.url || link.href));
  if (valid.length === 0) return null;
  return (
    <div style={{ marginTop: '8px', fontSize: '13.5px', color: CLEAN.muted }}>
      {valid.map((link, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span style={{ margin: '0 6px', color: CLEAN.faint }}>&middot;</span>}
          <a
            href={link.url || link.href}
            title={link.tip}
            onClick={(event) => event.stopPropagation()}
            style={{
              color: CLEAN.accent,
              textDecoration: 'none',
              borderBottom: `1px dotted ${CLEAN.tintBorder}`,
            }}
          >
            {link.label || link.text || link.url}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}
