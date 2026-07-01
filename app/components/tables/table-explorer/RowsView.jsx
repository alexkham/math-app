'use client';
import React from 'react';
import { processContent } from '../../../utils/contentProcessor';

/**
 * RowsView — table rendering for GenericTableExplorer.
 *
 * Alternate to CardsView. Same data, denser display, print-friendly.
 *
 * Holds no state of its own. Receives all interaction callbacks from
 * the parent so filtering, search, and highlight behavior are
 * consistent across all view modes.
 */
const COL_COUNT = 5;

const ROWS_CSS = `
  .ge-rows-wrap {
    margin-bottom: 36px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  .ge-rows-table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #9ca3af;
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(15,23,42,0.08);
  }
  .ge-rows-table thead th {
    background: #f3f4f6;
    text-align: left;
    padding: 14px 16px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #374151;
    border-bottom: 3px solid #6b7280;
    border-right: 1px solid #d1d5db;
  }
  .ge-rows-table thead th:last-child { border-right: none; }

  .ge-rows-table tbody tr.ge-row {
    border-top: 1px solid #d1d5db;
    cursor: pointer;
    transition: background 0.12s, opacity 0.18s;
  }
  .ge-rows-table tbody tr.ge-row:hover { background: #f9fafb; }
  .ge-rows-table tbody tr.ge-row.expanded { background: #eef2ff; }
  .ge-rows-table tbody tr.ge-row.highlight {
    background: rgba(245,158,11,0.10);
    box-shadow: inset 4px 0 0 #f59e0b;
  }
  .ge-rows-table tbody tr.ge-row.filter-match {
    background: rgba(245,158,11,0.10);
    box-shadow: inset 4px 0 0 #f59e0b;
  }
  .ge-rows-table tbody tr.ge-row.filter-dim { opacity: 0.28; }

  .ge-rows-table tbody td {
    padding: 12px 16px;
    vertical-align: middle;
    font-size: 14px;
    color: #1e1b4b;
    border-right: 1px solid #e5e7eb;
  }
  .ge-rows-table tbody td:last-child { border-right: none; }
  .ge-rows-table td.ge-lhs,
  .ge-rows-table td.ge-rhs { font-size: 16px; }
  .ge-rows-table td.ge-eq {
    width: 28px;
    text-align: center;
    color: #9ca3af;
    font-weight: 500;
  }
  .ge-rows-table td.ge-cat { width: 200px; }
  .ge-rows-table td.ge-name {
    font-size: 11px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    width: 180px;
  }
  .ge-rows-table td.ge-expand {
    width: 40px;
    text-align: center;
    color: #9ca3af;
    font-weight: 600;
    user-select: none;
  }
  .ge-rows-table tr.ge-row.expanded td.ge-expand { color: #4f46e5; }

  .ge-cat-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    white-space: nowrap;
  }

  .ge-rows-table tr.ge-details {
    background: #fafbfc;
    border-top: 1px solid #d1d5db;
  }
  .ge-rows-table tr.ge-details td {
    padding: 0 24px 20px 24px;
    border-right: none;
  }
  .ge-details-inner {
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-left: 4px solid #4f46e5;
    padding: 16px 20px;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 1px 3px rgba(15,23,42,0.04);
    animation: geRowDetailsExpand 0.22s ease;
  }
  @keyframes geRowDetailsExpand {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ge-details-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 10px;
  }
  .ge-details-subtitle {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #64748b;
    margin-bottom: 4px;
  }
  .ge-details-title {
    font-size: 20px;
    color: #3730a3;
    font-weight: 700;
    margin: 0;
  }
  .ge-details-close {
    padding: 7px 13px;
    background: #ffffff;
    color: #1e1b4b;
    border: 1.5px solid #e0e7ff;
    border-radius: 8px;
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  .ge-details-close:hover {
    background: #fee2e2;
    color: #991b1b;
    border-color: #ef4444;
  }
  .ge-details-tip {
    color: #1e1b4b;
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 14px;
  }
  .ge-details-link {
    display: inline-block;
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    padding: 8px 16px;
    background: #4f46e5;
    border-radius: 8px;
  }
  .ge-details-link:hover { background: #3730a3; }

  @media (max-width: 720px) {
    .ge-rows-table td.ge-cat { width: auto; }
    .ge-rows-table td.ge-name { display: none; }
    .ge-rows-table thead th.ge-name-h { display: none; }
    .ge-rows-table td.ge-lhs,
    .ge-rows-table td.ge-rhs { font-size: 14px; }
  }

  @media print {
    .ge-rows-table { box-shadow: none; border: 1px solid #000; }
    .ge-rows-table thead th { background: #f0f0f0; }
    .ge-rows-table tr.ge-details { display: none; }
    .ge-rows-table td.ge-expand { display: none; }
    .ge-rows-table th:last-child { display: none; }
  }
`;

const RowsView = ({
  items,
  categories,
  templates,
  detailLabels,
  detailsId,
  highlightedIds,
  activeFilter,
  FILTER_DEFS,
  cardRefs,
  onCardClick,
  onCloseDetails,
}) => {

  const renderDetails = (d) => {
    const cat = categories[d.cat];
    return (
      <tr className="ge-details" key={`details-${d.id}`}>
        <td colSpan={COL_COUNT}>
          <div className="ge-details-inner">
            <div className="ge-details-header">
              <div style={{ flex: 1, minWidth: 0 }}>
                {d.title && <div className="ge-details-subtitle">{d.title}</div>}
                <div className="ge-details-title">
                  {processContent(templates.full(d))}
                </div>
              </div>
              <button
                type="button"
                className="ge-details-close"
                onClick={(e) => { e.stopPropagation(); onCloseDetails(); }}
                title="Close (Esc)"
              >
                <span>&times;</span>
                <span>Close</span>
              </button>
            </div>
            {d.tip && <div className="ge-details-tip">{processContent(d.tip)}</div>}
            {cat && (
              <div style={{ marginBottom: d.link ? 12 : 0 }}>
                <span className="ge-cat-badge" style={{ background: cat.bg, color: cat.fg }}>
                  {cat.label}
                </span>
              </div>
            )}
            {d.link && (
              <a
                className="ge-details-link"
                href={d.link}
                onClick={(e) => e.stopPropagation()}
              >
                Read more &rarr;
              </a>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ROWS_CSS }} />
      <div className="ge-rows-wrap">
        <table className="ge-rows-table">
          <thead>
            <tr>
              <th className="ge-name-h">Name</th>
              <th>{detailLabels.left}</th>
              <th></th>
              <th>{detailLabels.right}</th>
              <th>Family</th>
            </tr>
          </thead>
          <tbody>
            {items.map((d) => {
              const cat = categories[d.cat];
              const isExpanded = detailsId === d.id;
              const isHighlighted = highlightedIds.has(d.id);
              let isFilterMatch = false;
              let isFilterDim = false;
              if (activeFilter) {
                const def = FILTER_DEFS.find((f) => f.id === activeFilter);
                if (def && def.match(d)) isFilterMatch = true;
                else isFilterDim = true;
              }
              const rowCls = ['ge-row'];
              if (isExpanded) rowCls.push('expanded');
              if (isHighlighted && !isFilterMatch) rowCls.push('highlight');
              if (isFilterMatch) rowCls.push('filter-match');
              if (isFilterDim) rowCls.push('filter-dim');

              return (
                <React.Fragment key={d.id}>
                  <tr
                    className={rowCls.join(' ')}
                    ref={(el) => { cardRefs.current[d.id] = el; }}
                    onClick={() => onCardClick(d.id)}
                  >
                    <td className="ge-name">{d.title || ''}</td>
                    <td className="ge-lhs">{processContent(templates.left(d))}</td>
                    <td className="ge-eq">=</td>
                    <td className="ge-rhs">{processContent(templates.right(d))}</td>
                    <td className="ge-cat">
                      {cat && (
                        <span className="ge-cat-badge" style={{ background: cat.bg, color: cat.fg }}>
                          {cat.label}
                        </span>
                      )}
                    </td>
                  </tr>
                  {isExpanded && renderDetails(d)}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RowsView;