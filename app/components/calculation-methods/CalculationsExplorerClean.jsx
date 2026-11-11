// CalculationsExplorerClean.jsx
// "clean" variant of CalculationsExplorer: compact sidebar, one-row filter
// bar, sans headings in the site palette, and two kinds of items:
//   - items with `href` (or `planned: true`) → CleanLinkCard, in a 2-column grid
//   - all other items                       → CleanMethodCard, stacked
// Takes the same `data` object as CalculationsExplorer.

import React, { useState, useMemo, useEffect } from 'react';
import { CLEAN } from './cleanTheme';
import CleanMethodCard from './CleanMethodCard';
import CleanLinkCard from './CleanLinkCard';

function toRoman(number) {
  const lookup = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let result = '';
  let rest = number;
  for (const [value, symbol] of lookup) {
    while (rest >= value) {
      result += symbol;
      rest -= value;
    }
  }
  return result;
}

const isLinkItem = (method) => Boolean(method.href || method.planned);

// ─── Filter chip ─────────────────────────────────────────────────

function FilterChip(props) {
  const { label, active, onClick } = props;
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        font: 'inherit',
        fontSize: '13px',
        border: `1px solid ${active ? CLEAN.accent : hover ? CLEAN.tintBorder : CLEAN.border}`,
        background: active ? CLEAN.accent : CLEAN.card,
        color: active ? '#fff' : CLEAN.text,
        borderRadius: '999px',
        padding: '4px 12px',
        cursor: 'pointer',
        transition: 'all .12s',
      }}
    >
      {label}
    </button>
  );
}

// ─── Filter bar ──────────────────────────────────────────────────

function CleanFilterBar(props) {
  const { filters, activeFilters, onToggle, onClearAxis, stickyTop } = props;
  return (
    <div
      style={{
        position: 'sticky',
        top: stickyTop,
        zIndex: 5,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 14px',
        marginBottom: '22px',
        background: CLEAN.card,
        border: `1px solid ${CLEAN.border}`,
        borderRadius: '10px',
      }}
    >
      {Object.entries(filters).map(([axis, config], axisIndex) => {
        const selected = activeFilters[axis];
        const noneSelected = !selected || selected.size === 0;
        return (
          <React.Fragment key={axis}>
            <span
              style={{
                fontSize: '12px',
                color: CLEAN.muted,
                marginLeft: axisIndex > 0 ? '14px' : 0,
                marginRight: '2px',
              }}
            >
              {config.label || axis}
            </span>
            <FilterChip label="All" active={noneSelected} onClick={() => onClearAxis(axis)} />
            {(config.options || []).map((option) => (
              <FilterChip
                key={option.value}
                label={option.label || option.value}
                active={Boolean(selected && selected.has(option.value))}
                onClick={() => onToggle(axis, option.value)}
              />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────

function CleanSidebar(props) {
  const { categories, visibleByCategory, activeCategory, onNavigate, extraLinks, stickyTop } = props;
  return (
    <aside
      style={{
        position: 'sticky',
        top: stickyTop,
        alignSelf: 'start',
        background: CLEAN.card,
        border: `1px solid ${CLEAN.border}`,
        borderRadius: '10px',
        padding: '14px 0',
        fontSize: '14px',
      }}
    >
      <SidebarHeading>Sections</SidebarHeading>
      {categories.map((category, index) => {
        const count = (visibleByCategory.get(category.id) || []).length;
        const active = activeCategory === category.id;
        return (
          <a
            key={category.id}
            href={`#cat-${category.id}`}
            onClick={(event) => onNavigate(category.id, event)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '8px',
              padding: active ? '5px 16px 5px 13px' : '5px 16px',
              textDecoration: 'none',
              color: active ? CLEAN.accent : CLEAN.text,
              fontWeight: active ? 600 : 400,
              background: active ? CLEAN.tint : 'transparent',
              borderLeft: active ? `3px solid ${CLEAN.accent}` : 'none',
              opacity: count === 0 ? 0.4 : 1,
              pointerEvents: count === 0 ? 'none' : 'auto',
            }}
          >
            <span>
              {toRoman(index + 1)}. {category.label || category.id}
            </span>
            <span style={{ color: CLEAN.faint, fontSize: '12px', fontWeight: 400 }}>{count}</span>
          </a>
        );
      })}

      {extraLinks && extraLinks.links && extraLinks.links.length > 0 && (
        <>
          <hr style={{ border: 'none', borderTop: `1px solid ${CLEAN.border}`, margin: '10px 0' }} />
          <SidebarHeading>{extraLinks.title || 'Related'}</SidebarHeading>
          {extraLinks.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              style={{ display: 'block', padding: '5px 16px', textDecoration: 'none', color: CLEAN.text }}
            >
              {link.label}
            </a>
          ))}
        </>
      )}
    </aside>
  );
}

function SidebarHeading(props) {
  const { children } = props;
  return (
    <div
      style={{
        margin: '6px 16px',
        fontSize: '11px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: CLEAN.muted,
        fontWeight: 600,
      }}
    >
      {children}
    </div>
  );
}

// ─── Category section ────────────────────────────────────────────

function CleanCategorySection(props) {
  const { category, numeral, methods, components } = props;
  const cards = methods.filter((method) => !isLinkItem(method));
  const linkItems = methods.filter(isLinkItem);

  return (
    <section
      id={`cat-${category.id}`}
      data-cat-id={category.id}
      style={{ marginBottom: '34px', scrollMarginTop: '140px' }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '12px',
          borderBottom: `2px solid ${CLEAN.tintBorder}`,
          paddingBottom: '6px',
          marginBottom: '14px',
        }}
      >
        <span style={{ fontFamily: CLEAN.serif, color: CLEAN.accent, fontSize: '20px' }}>{numeral}</span>
        <h2 style={{ margin: 0, fontSize: '19px', color: CLEAN.title }}>{category.label || category.id}</h2>
        {category.blurb && (
          <span style={{ marginLeft: 'auto', fontSize: '13px', color: CLEAN.muted }}>{category.blurb}</span>
        )}
      </header>

      {cards.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {cards.map((method) => (
            <CleanMethodCard
              key={method.id || method.name}
              data={method}
              components={components}
              defaultExpanded={Boolean(method.defaultExpanded)}
            />
          ))}
        </div>
      )}

      {linkItems.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '12px',
            marginTop: cards.length > 0 ? '12px' : 0,
          }}
        >
          {linkItems.map((method) => (
            <CleanLinkCard key={method.id || method.name} data={method} />
          ))}
        </div>
      )}
    </section>
  );
}

// ═════════════════════════════════════════════════════════════════
// MAIN
// ═════════════════════════════════════════════════════════════════

export default function CalculationsExplorerClean(props) {
  const { data = {} } = props;
  const {
    methods = [],
    categories,
    filters,
    components,
    sidebarLinks,
    filterStickyTop = 0,
    sidebarStickyTop,
  } = data;

  const resolvedCategories = useMemo(() => {
    if (categories && categories.length) return categories;
    const seen = new Map();
    methods.forEach((method) => {
      const categoryId = method.category || 'other';
      if (!seen.has(categoryId)) seen.set(categoryId, { id: categoryId, label: categoryId });
    });
    return Array.from(seen.values());
  }, [methods, categories]);

  const grouped = useMemo(() => {
    const map = new Map();
    resolvedCategories.forEach((category) => map.set(category.id, []));
    methods.forEach((method) => {
      const categoryId = method.category || 'other';
      if (!map.has(categoryId)) map.set(categoryId, []);
      map.get(categoryId).push(method);
    });
    return map;
  }, [methods, resolvedCategories]);

  const [activeFilters, setActiveFilters] = useState({});

  const toggleFilter = (axis, value) => {
    setActiveFilters((previous) => {
      const set = new Set(previous[axis] || []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...previous, [axis]: set };
    });
  };

  const clearAxis = (axis) => {
    setActiveFilters((previous) => ({ ...previous, [axis]: new Set() }));
  };

  const visibleByCategory = useMemo(() => {
    const matches = (method) => {
      if (!filters) return true;
      return Object.keys(filters).every((axis) => {
        const selected = activeFilters[axis];
        if (!selected || selected.size === 0) return true;
        const raw = method[axis];
        const values = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
        return values.some((value) => selected.has(value));
      });
    };
    const result = new Map();
    grouped.forEach((list, categoryId) => result.set(categoryId, list.filter(matches)));
    return result;
  }, [grouped, activeFilters, filters]);

  const visibleCount = useMemo(
    () => Array.from(visibleByCategory.values()).reduce((sum, list) => sum + list.length, 0),
    [visibleByCategory]
  );

  const [activeCategory, setActiveCategory] = useState(resolvedCategories[0]?.id);

  useEffect(() => {
    if (resolvedCategories.length === 0) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCategory(entry.target.dataset.catId);
        });
      },
      { rootMargin: '-15% 0px -70% 0px' }
    );
    resolvedCategories.forEach((category) => {
      const element = document.getElementById(`cat-${category.id}`);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [resolvedCategories]);

  const resolvedSidebarTop =
    sidebarStickyTop != null ? sidebarStickyTop : filterStickyTop + 16;

  const handleNavigate = (categoryId, event) => {
    event.preventDefault();
    const element = document.getElementById(`cat-${categoryId}`);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - filterStickyTop - 90;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '240px minmax(0, 1fr)',
        gap: '28px',
        alignItems: 'start',
        color: CLEAN.text,
      }}
    >
      <CleanSidebar
        categories={resolvedCategories}
        visibleByCategory={visibleByCategory}
        activeCategory={activeCategory}
        onNavigate={handleNavigate}
        extraLinks={sidebarLinks}
        stickyTop={resolvedSidebarTop}
      />

      <div style={{ minWidth: 0 }}>
        {filters && (
          <CleanFilterBar
            filters={filters}
            activeFilters={activeFilters}
            onToggle={toggleFilter}
            onClearAxis={clearAxis}
            stickyTop={filterStickyTop}
          />
        )}

        {resolvedCategories.map((category, index) => {
          const list = visibleByCategory.get(category.id) || [];
          if (list.length === 0) return null;
          return (
            <CleanCategorySection
              key={category.id}
              category={category}
              numeral={toRoman(index + 1)}
              methods={list}
              components={components}
            />
          );
        })}

        {visibleCount === 0 && (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: CLEAN.muted }}>
            No matches. Try removing a filter.
          </div>
        )}
      </div>
    </div>
  );
}
