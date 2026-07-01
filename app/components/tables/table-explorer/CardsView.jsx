'use client';
import { processContent } from '../../../utils/contentProcessor';

/**
 * CardsView — grid rendering for GenericTableExplorer.
 *
 * Extracted from the parent verbatim. Holds no state of its own.
 * The parent owns: filtering, search, highlights, active filter,
 * which item is expanded (detailsId). This component is purely
 * presentational.
 *
 * Uses CSS classes (.ge-item-card, .ge-inline-details, etc.) that
 * are defined in the parent's <style> block — no scoped CSS needed
 * here.
 */
const CardsView = ({
  items,
  categories,
  templates,
  detailLabels,
  detailsId,
  highlightedIds,
  activeFilter,
  FILTER_DEFS,
  cols,
  cardRefs,
  onCardClick,
  onCloseDetails,
  styles: S,
}) => {

  const renderItemCard = (d) => {
    const cls = ['ge-item-card'];
    if (detailsId === d.id) cls.push('active');
    if (highlightedIds.has(d.id)) cls.push('highlight');
    if (activeFilter) {
      const def = FILTER_DEFS.find((f) => f.id === activeFilter);
      if (def && def.match(d)) cls.push('filter-match');
      else cls.push('filter-dim');
    }
    const cat = categories[d.cat];
    return (
      <div
        key={d.id}
        ref={(el) => { cardRefs.current[d.id] = el; }}
        className={cls.join(' ')}
        style={S.itemCard}
        onClick={() => onCardClick(d.id)}
      >
        {cat && (
          <span style={{ ...S.catBadge, background: cat.bg, color: cat.fg }}>{cat.label}</span>
        )}
        <div style={S.cardLeft}>{processContent(templates.left(d))}</div>
        {d.title && <div style={S.cardTitle}>{d.title}</div>}
        <div style={S.cardArrow}>&darr;</div>
        <div style={S.cardRight}>{processContent(templates.right(d))}</div>
      </div>
    );
  };

  const renderInlineDetails = (d) => {
    const cat = categories[d.cat];
    return (
      <div
        key={`details-${d.id}`}
        className="ge-inline-details"
        style={S.inlineDetails}
      >
        <div style={S.inlineDetailsHeader}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {d.title && <div style={S.inlineDetailsSubtitle}>{d.title}</div>}
            <div style={S.inlineDetailsTitle}>
              {processContent(templates.full(d))}
            </div>
          </div>
          <button
            type="button"
            className="ge-inline-details-close"
            style={S.inlineDetailsClose}
            onClick={onCloseDetails}
            title="Close (Esc)"
          >
            <span style={S.inlineDetailsCloseX}>&times;</span>
            <span>Close</span>
          </button>
        </div>
        {d.tip && <div style={S.inlineDetailsTip}>{processContent(d.tip)}</div>}
        <div style={S.inlineDetailsGrid}>
          <div style={S.inlineDetailItem}>
            <div style={S.inlineDetailLabel}>{detailLabels.left}</div>
            <div style={S.inlineDetailValue}>{processContent(templates.input ? templates.input(d) : templates.left(d))}</div>
          </div>
          <div style={S.inlineDetailItem}>
            <div style={S.inlineDetailLabel}>{detailLabels.right}</div>
            <div style={S.inlineDetailValue}>{processContent(templates.right(d))}</div>
          </div>
          {cat && (
            <div style={S.inlineDetailItem}>
              <div style={S.inlineDetailLabel}>Category</div>
              <div style={S.inlineDetailValue}>{cat.label}</div>
            </div>
          )}
        </div>
        {d.link && (
          <a
            className="ge-inline-learn-more"
            style={S.inlineLearnMore}
            href={d.link}
          >
            Read more &rarr;
          </a>
        )}
      </div>
    );
  };

  const activeIdx = detailsId !== null
    ? items.findIndex((dd) => dd.id === detailsId)
    : -1;
  const activeRow = activeIdx >= 0 ? Math.floor(activeIdx / cols) : -1;
  const detailsItem = activeIdx >= 0 ? items[activeIdx] : null;

  return (
    <div className="ge-ref-grid" style={S.refGrid}>
      {items.flatMap((d, idx) => {
        const elements = [renderItemCard(d)];
        if (detailsItem) {
          const thisRow = Math.floor(idx / cols);
          const isLastInRow = ((idx + 1) % cols === 0) || (idx === items.length - 1);
          if (thisRow === activeRow && isLastInRow) {
            elements.push(renderInlineDetails(detailsItem));
          }
        }
        return elements;
      })}
    </div>
  );
};

export default CardsView;