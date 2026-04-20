

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
// import { processContent } from '@/app/utils/contentProcessor';
import { processContent } from '../../utils/contentProcessor';

const capitalizeWords = (str) =>
  str.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// ─── Illustration ──────────────────────────────────────────────────

function Illustration({ item }) {
  const { src, alt = '', caption, width } = item;
  const isSvg = typeof src === 'string' && src.trimStart().startsWith('<svg');

  const wrapStyle = {
    margin: '16px 0',
    padding: '16px',
    background: '#f8fafc',
    borderRadius: '8px',
    border: '0.5px solid #e2e8f0',
  };

  const imgStyle = {
    display: 'block',
    margin: '0 auto',
    maxWidth: width ? `${width}px` : '100%',
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  };

  const svgWrapStyle = {
    maxWidth: width ? `${width}px` : '100%',
    margin: '0 auto',
  };

  const captionStyle = {
    margin: '8px 0 0',
    fontSize: '13px',
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: '1.5',
  };

  return (
    <div style={wrapStyle}>
      {isSvg ? (
        <div
          style={svgWrapStyle}
          dangerouslySetInnerHTML={{ __html: src }}
        />
      ) : (
        <img src={src} alt={alt} style={imgStyle} loading="lazy" />
      )}
      {caption && <p style={captionStyle}>{processContent(caption)}</p>}
    </div>
  );
}

// ─── LinkPill ──────────────────────────────────────────────────────

function LinkPill({ link }) {
  const [hovered, setHovered] = useState(false);
  const label = link.label || link.text || link.url;
  const url = link.url || link.href;

  if (!url) return null;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    color: '#2563eb',
    textDecoration: 'none',
    padding: '6px 14px',
    border: '0.5px solid #e2e8f0',
    borderRadius: '20px',
    background: hovered ? '#eff4ff' : '#f8fafc',
    transition: 'background 0.15s',
    cursor: 'pointer',
  };

  const arrowSvg = (
    <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
      <path
        d="M3 11L11 3M11 3H6M11 3v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <a
      href={url}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {arrowSvg}
      {processContent(label)}
    </a>
  );
}

// ─── LinksRow ──────────────────────────────────────────────────────

function LinksRow({ links }) {
  if (!links || links.length === 0) return null;

  const filtered = links.filter((l) => l && (l.url || l.href));
  if (filtered.length === 0) return null;

  return (
    <div style={{ margin: '16px 0 0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {filtered.map((link, i) => (
        <LinkPill key={i} link={link} />
      ))}
    </div>
  );
}

// ─── FieldContent (renders string | object | array) ────────────────

function FieldContent({ value }) {
  if (typeof value === 'string') {
    return <div>{processContent(value)}</div>;
  }

  if (Array.isArray(value)) {
    return (
      <div>
        {value.map((block, i) => (
          <FieldContentBlock key={i} block={block} />
        ))}
      </div>
    );
  }

  if (typeof value === 'object' && value !== null) {
    return <FieldContentBlock block={value} />;
  }

  return null;
}

function FieldContentBlock({ block }) {
  if (typeof block === 'string') {
    return <div>{processContent(block)}</div>;
  }

  if (typeof block !== 'object' || block === null) return null;

  const { text, links, illustrations } = block;

  const illustrationList = normalizeArray(illustrations);
  const linkList = normalizeArray(links);

  return (
    <div>
      {text && <div>{processContent(text)}</div>}
      {illustrationList.map((ill, i) => (
        <Illustration key={i} item={ill} />
      ))}
      <LinksRow links={linkList} />
    </div>
  );
}

function normalizeArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return [val];
}

// ─── CardLink ──────────────────────────────────────────────────────

function CardLink({ link }) {
  const [hovered, setHovered] = useState(false);

  if (!link || (!link.url && !link.href)) return null;

  const label = link.label || link.text || link.url || link.href;
  const url = link.url || link.href;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    color: hovered ? '#1d4ed8' : '#2563eb',
    textDecoration: 'none',
    padding: '8px 0 0',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'color 0.15s',
  };

  const arrow = (
    <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
      <path
        d="M3 11L11 3M11 3H6M11 3v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div>
      <a
        href={url}
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {arrow}
        {processContent(label)}
      </a>
    </div>
  );
}

// ─── BackToTop ─────────────────────────────────────────────────────

function BackToTop() {
  const [hovered, setHovered] = useState(false);

  const style = {
    fontSize: '13px',
    color: hovered ? '#2563eb' : '#94a3b8',
    cursor: 'pointer',
    textAlign: 'right',
    padding: '6px 0 0',
    userSelect: 'none',
    transition: 'color 0.15s',
  };

  return (
    <div
      style={style}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      &uarr; Back to top
    </div>
  );
}

// ─── DefinitionCard ────────────────────────────────────────────────

function DefinitionCard({ item, isHighlighted, onToggle, isOpen }) {
  const hasFields =
    item.fields &&
    typeof item.fields === 'object' &&
    !Array.isArray(item.fields) &&
    Object.keys(item.fields).length > 0;

  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState(false);
  const fieldEntries = hasFields ? Object.entries(item.fields) : [];
  const itemId = item.name.toLowerCase().replace(/\s+/g, '_');

  const s = {
    card: {
      border: isHighlighted
        ? '2px solid #2563eb'
        : hovered
          ? '1.5px solid #93aee0'
          : '1.5px solid #d0d9ed',
      borderRadius: '12px',
      marginBottom: '12px',
      overflow: 'hidden',
      background: isHighlighted ? '#f8faff' : '#fff',
      transition: 'border-color 0.2s, background 0.2s',
      scrollMarginTop: '130px',
      cursor: hovered ? 'default' : undefined,
    },
    body: {
      padding: '22px 26px',
      background: '#fbfcff',
    },
    name: {
      fontFamily: "'Source Serif 4', serif",
      fontSize: '20px',
      fontWeight: '600',
      color: '#1e293b',
      margin: '0 0 8px',
      lineHeight: '1.3',
    },
    definition: {
      fontSize: '17px',
      color: '#475569',
      lineHeight: '1.7',
      margin: '0',
    },
    toggle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      padding: '12px 0 4px',
      cursor: 'pointer',
      color: '#2563eb',
      fontSize: '15px',
      fontWeight: '500',
      userSelect: 'none',
    },
    detail: {
      borderTop: '1.5px solid #e2e8f0',
      background: '#f0f4fc',
      overflow: 'hidden',
      maxHeight: isOpen ? '5000px' : '0',
      padding: isOpen ? '20px 26px' : '0 26px',
      transition: 'max-height 0.35s ease, padding 0.3s ease',
    },
    tabs: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0',
    },
    tabBody: {
      padding: '20px 22px',
      border: '1.5px solid #d0d9ed',
      borderRadius: '0 8px 8px 8px',
      fontSize: '17px',
      color: '#475569',
      lineHeight: '1.7',
      background: '#fff',
      minHeight: '60px',
    },
  };

  return (
    <div
      id={itemId}
      style={s.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={s.body}>
        <h3 style={s.name}>{processContent(item.name)}</h3>
        <div style={s.definition}>{processContent(item.formula)}</div>
        {item.link && <CardLink link={item.link} />}
        {hasFields && (
          <div
            style={s.toggle}
            onClick={() => onToggle(itemId)}
          >
            {isOpen ? 'Hide details' : 'See details'}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s',
              }}
            >
              <polyline
                points="3,5 7,9 11,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        {!isOpen && <BackToTop />}
      </div>
      {hasFields && (
        <div style={s.detail}>
          <div style={s.tabs}>
            {fieldEntries.map(([key], i) => (
              <TabButton
                key={key}
                label={key.replace(/_/g, ' ')}
                active={i === activeTab}
                onClick={() => setActiveTab(i)}
              />
            ))}
          </div>
          <div style={s.tabBody}>
            <FieldContent value={fieldEntries[activeTab]?.[1] || ''} />
          </div>
          <BackToTop />
        </div>
      )}
    </div>
  );
}

// ─── TabButton ─────────────────────────────────────────────────────

function TabButton({ label, active, onClick }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    padding: '10px 22px',
    fontSize: '15px',
    fontWeight: '500',
    borderRadius: '8px 8px 0 0',
    border: '1.5px solid',
    borderBottom: 'none',
    cursor: 'pointer',
    marginRight: '3px',
    textTransform: 'capitalize',
    transition: 'background 0.15s, color 0.15s',
    background: active ? '#2563eb' : hovered ? '#dae2f3' : '#e4eaf5',
    color: active ? '#fff' : '#475569',
    borderColor: active ? '#2563eb' : '#d0d9ed',
  };

  return (
    <span
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {processContent(label)}
    </span>
  );
}

// ─── DefinitionGroup ───────────────────────────────────────────────

function DefinitionGroup({
  title,
  items,
  highlightedId,
  openIds,
  onToggle,
  itemCount,
}) {
  const categoryId = `category_${title.toLowerCase().replace(/\s+/g, '_')}`;

  const s = {
    group: {
      marginBottom: '40px',
    },
    header: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      margin: '0 0 16px',
      paddingBottom: '8px',
      borderBottom: '2px solid #c7d2e8',
    },
    title: {
      fontFamily: "'Source Serif 4', serif",
      fontSize: '22px',
      fontWeight: '600',
      color: '#1e40af',
      margin: '0',
      letterSpacing: '0.01em',
    },
    count: {
      fontSize: '14px',
      color: '#94a3b8',
      fontWeight: '400',
    },
  };

  return (
    <div id={categoryId} style={s.group}>
      <div style={s.header}>
        <h2 style={s.title}>{capitalizeWords(title)}</h2>
        <span style={s.count}>({itemCount} items)</span>
      </div>
      {items.map((item) => {
        const itemId = item.name.toLowerCase().replace(/\s+/g, '_');
        return (
          <DefinitionCard
            key={itemId}
            item={item}
            isHighlighted={highlightedId === itemId}
            isOpen={openIds.has(itemId)}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
}

// ─── DefinitionGlossary (main export) ──────────────────────────────

export default function DefinitionGlossary({
  data,
  groupByField = 'category',
  type = 'Definition',
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIds, setOpenIds] = useState(new Set());
  const [highlightedId, setHighlightedId] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef(null);
  const highlightTimer = useRef(null);

  const toItemId = (name) => name.toLowerCase().replace(/\s+/g, '_');

  const onToggle = useCallback((id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const scrollToItem = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 140;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }, []);

  const navigateToHash = useCallback(
    (hash) => {
      if (!hash) return;
      setSearchTerm('');

      const hasFields = data.some((item) => {
        const id = toItemId(item.name);
        return (
          id === hash &&
          item.fields &&
          typeof item.fields === 'object' &&
          !Array.isArray(item.fields) &&
          Object.keys(item.fields).length > 0
        );
      });

      if (hasFields) {
        setOpenIds((prev) => new Set(prev).add(hash));
      }

      setHighlightedId(hash);
      clearTimeout(highlightTimer.current);
      highlightTimer.current = setTimeout(() => setHighlightedId(null), 3000);

      requestAnimationFrame(() => {
        setTimeout(() => scrollToItem(hash), 100);
      });
    },
    [data, scrollToItem]
  );

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => navigateToHash(hash), 150);
    }
  }, [navigateToHash]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) navigateToHash(hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [navigateToHash]);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href').slice(1);
      if (hash) {
        e.preventDefault();
        window.history.pushState(null, '', `#${hash}`);
        navigateToHash(hash);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigateToHash]);

  const getSearchableText = useCallback((value) => {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.map(getSearchableText).join(' ');
    if (typeof value === 'object' && value !== null) {
      const parts = [];
      if (value.text) parts.push(value.text);
      if (value.links) {
        normalizeArray(value.links).forEach((l) => {
          if (l.label) parts.push(l.label);
          if (l.text) parts.push(l.text);
        });
      }
      return parts.join(' ');
    }
    return '';
  }, []);

  const grouped = useMemo(() => {
    const lower = searchTerm.toLowerCase();
    const filtered = lower
      ? data.filter(
          (item) =>
            item.name?.toLowerCase().includes(lower) ||
            item.formula?.toLowerCase().includes(lower) ||
            (item.fields &&
              typeof item.fields === 'object' &&
              !Array.isArray(item.fields) &&
              Object.values(item.fields).some(
                (v) => getSearchableText(v).toLowerCase().includes(lower)
              ))
        )
      : data;

    const groups = {};
    filtered.forEach((item) => {
      const key = item[groupByField] || 'Other';
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });
    return groups;
  }, [data, searchTerm, groupByField, getSearchableText]);

  const totalCount = useMemo(
    () => Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0),
    [grouped]
  );

  const s = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      maxWidth: '820px',
      margin: '0 auto',
      padding: '0 16px',
    },
    searchBar: {
      position: 'sticky',
      top: '63px',
      zIndex: 10,
      background: 'rgba(30, 58, 138, 0.75)',
      backdropFilter: 'blur(8px)',
      borderRadius: '4px',
      padding: '14px 20px',
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
    },
    searchWrapper: {
      position: 'relative',
      flex: 1,
    },
    searchInput: {
      width: '100%',
      padding: '13px 36px 13px 18px',
      border: searchFocused ? '2px solid #2563eb' : '2px solid transparent',
      borderRadius: '28px',
      fontSize: '16px',
      fontFamily: 'inherit',
      outline: 'none',
      background: '#fff',
      color: '#1e293b',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s',
    },
    clearBtn: {
      position: 'absolute',
      top: '50%',
      right: '14px',
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'none',
      color: '#94a3b8',
      fontSize: '16px',
      cursor: 'pointer',
      padding: '0',
      lineHeight: 1,
    },
    count: {
      fontSize: '14px',
      color: '#c7d2e8',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    empty: {
      textAlign: 'center',
      padding: '50px 20px',
      color: '#94a3b8',
      fontSize: '16px',
    },
  };

  return (
    <div style={s.wrapper}>
      <div style={s.searchBar} ref={searchRef}>
        <div style={s.searchWrapper}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder={`Search in ${type}s...`}
            style={s.searchInput}
          />
          {searchTerm && (
            <button
              style={s.clearBtn}
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              &#10005;
            </button>
          )}
        </div>
        <span style={s.count}>
          {totalCount} {totalCount === 1 ? 'term' : 'terms'}
        </span>
      </div>

      {Object.keys(grouped).length === 0 ? (
        <div style={s.empty}>
          No {type.toLowerCase()}s found for &quot;{searchTerm}&quot;
        </div>
      ) : (
        Object.entries(grouped).map(([group, items]) => (
          <DefinitionGroup
            key={group}
            title={group}
            items={items}
            itemCount={items.length}
            highlightedId={highlightedId}
            openIds={openIds}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
}