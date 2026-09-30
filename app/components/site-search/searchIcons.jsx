import React from 'react';

/**
 * Inline stroke icons for the site search UI. All use currentColor.
 * Props: size (px, default 18), style, className.
 */

function box(size, style) {
  return { width: size, height: size, flexShrink: 0, display: 'block', ...style };
}

export function SparkIcon({ size = 18, style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={box(size, style)}>
      <path fill="currentColor" d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z" />
    </svg>
  );
}

export function SearchIcon({ size = 18, style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={box(size, style)}
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function CloseIcon({ size = 18, style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={box(size, style)}
      fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowIcon({ size = 18, style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={box(size, style)}
      fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ToolIcon({ size = 18, style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={box(size, style)}
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}

export function DefinitionIcon({ size = 18, style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={box(size, style)}
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z" />
      <path d="M4 21V5" />
      <path d="M9 8h6" />
    </svg>
  );
}

export function SectionIcon({ size = 18, style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={box(size, style)}
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M9 4L7 20M17 4l-2 16M4 9h16M3 15h16" />
    </svg>
  );
}

export function PageIcon({ size = 18, style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={box(size, style)}
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H6v18h12V7z" />
      <path d="M14 3v4h4" />
    </svg>
  );
}

export const KIND_ICONS = {
  tool: ToolIcon,
  definition: DefinitionIcon,
  section: SectionIcon,
  page: PageIcon,
};

/** Icon for a result kind; falls back to the page icon for unknown kinds. */
export function KindIcon({ kind = 'page', size = 18, style = {}, className = '' }) {
  const Icon = KIND_ICONS[kind] || PageIcon;
  return <Icon size={size} style={style} className={className} />;
}
