'use client';

// ===========================================================
// HowToUseSection
// The long-form "how to use" block of a tool page: a sub-tab
// strip with Overview (annotated mockup), Inputs, Controls,
// Output and Behavior. A tab renders only when its data key is
// present; with no tab at all the component renders nothing.
// Ported from calculatematrix (components/molecules/
// HowToUseSection.jsx); text goes through this site's
// processContent, colours are the site blue.
//
// data: {
//   intro?:    string
//   labels?:   { inputs?: 'Figure', output?: 'Log', ... }   tab captions
//   overview?: { Mockup, mockupProps?, callouts }           see AnnotatedOverview
//   inputs?:   { intro?, columns?: [h1, h2, h3], rows: [[c1, c2, c3]] | [{format, example, interpreted}], note? }
//   controls?: { rows: [{ control, description, shortcut? }] }
//   output?:   { where?, what?, note? }
//   behavior?: [{ title, content }]
// }
// ===========================================================

import React, { useState, useMemo } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import AnnotatedOverview from './AnnotatedOverview';

const BLUE = '#1e40af';

const TAB_DEFS = [
  { key: 'overview', label: 'Overview' },
  { key: 'inputs',   label: 'Inputs' },
  { key: 'controls', label: 'Controls' },
  { key: 'output',   label: 'Output' },
  { key: 'behavior', label: 'Behavior' },
];

export default function HowToUseSection({ data }) {
  const availableTabs = useMemo(
    () => (data ? TAB_DEFS.filter((t) => data[t.key]) : []),
    [data]
  );

  const [activeTab, setActiveTab] = useState(
    availableTabs.length > 0 ? availableTabs[0].key : null
  );

  if (!data || availableTabs.length === 0) return null;

  const labelOf = (tab) => (data.labels && data.labels[tab.key]) || tab.label;

  const renderPanel = () => {
    switch (activeTab) {
      case 'overview': return <AnnotatedOverview data={data.overview} />;
      case 'inputs':   return <InputsPanel data={data.inputs} />;
      case 'controls': return <ControlsPanel data={data.controls} />;
      case 'output':   return <OutputPanel data={data.output} />;
      case 'behavior': return <BehaviorPanel data={data.behavior} />;
      default: return null;
    }
  };

  return (
    <div className="how-to-use">
      {data.intro && <div className="intro">{processContent(data.intro)}</div>}

      <div className="subtabs-bar" role="tablist" aria-label="How-to-use sub-tabs">
        {availableTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`subtab-btn ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {labelOf(tab)}
          </button>
        ))}
      </div>

      <div className="subtab-panel" role="tabpanel">
        {renderPanel()}
      </div>

      <style jsx>{`
        .how-to-use {
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.65;
          color: #1e293b;
        }
        .intro {
          color: #64748b;
          margin-bottom: 16px;
        }
        .subtabs-bar {
          display: flex;
          gap: 4px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .subtab-btn {
          padding: 10px 14px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 14px;
          color: #64748b;
          font-family: inherit;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: color 0.12s;
        }
        .subtab-btn.active {
          color: ${BLUE};
          border-bottom-color: ${BLUE};
          font-weight: 600;
        }
        .subtab-btn:hover:not(.active) { color: #0f172a; }
        .subtab-panel { min-height: 120px; }
      `}</style>
    </div>
  );
}

/* ---- panels ---- */

function InputsPanel({ data }) {
  const headers = data.columns || ['Format', 'Example', 'Interpreted as'];
  const rows = (data.rows || []).map((r) =>
    Array.isArray(r) ? r : [r.format, r.example, r.interpreted]
  );
  return (
    <div className="panel">
      {data.intro && <div className="panel-p">{processContent(data.intro)}</div>}

      {rows.length > 0 && (
        <table className="ref-table">
          <thead>
            <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{processContent(String(cell))}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {data.note && <div className="note">{processContent(data.note)}</div>}

      <style jsx>{`
        .panel-p { margin-bottom: 12px; }
        .note {
          background: #f1f5f9;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          color: #64748b;
          margin-top: 12px;
        }
      `}</style>
      <TableStyles />
    </div>
  );
}

function ControlsPanel({ data }) {
  const rows = data.rows || [];
  const hasShortcut = rows.some((r) => r.shortcut);
  return (
    <div className="panel">
      {rows.length > 0 && (
        <table className="ref-table">
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Control</th>
              <th>What it does</th>
              {hasShortcut && <th>Shortcut</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td>{processContent(row.control)}</td>
                <td>{processContent(row.description)}</td>
                {hasShortcut && <td>{row.shortcut ? <span className="kbd">{row.shortcut}</span> : '—'}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <style jsx>{`
        .kbd {
          display: inline-block;
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 12px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          font-family: ui-monospace, monospace;
          color: #0f172a;
        }
      `}</style>
      <TableStyles />
    </div>
  );
}

function OutputPanel({ data }) {
  return (
    <div className="panel">
      {data.where && (
        <>
          <h4>Where it appears</h4>
          <div className="panel-p">{processContent(data.where)}</div>
        </>
      )}
      {data.what && (
        <>
          <h4>What to read</h4>
          <div className="panel-p">{processContent(data.what)}</div>
        </>
      )}
      {data.note && <div className="note">{processContent(data.note)}</div>}
      <style jsx>{`
        h4 {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 6px;
          color: #0f172a;
        }
        .panel-p { margin-bottom: 16px; }
        .note {
          background: #f1f5f9;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          color: #64748b;
        }
      `}</style>
    </div>
  );
}

function BehaviorPanel({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;
  return (
    <div className="panel">
      {data.map((item, i) => (
        <div key={i} className="behavior-item">
          <h4>{item.title}</h4>
          <div>{processContent(item.content)}</div>
        </div>
      ))}
      <style jsx>{`
        .behavior-item + .behavior-item { margin-top: 16px; }
        h4 {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 6px;
          color: #0f172a;
        }
      `}</style>
    </div>
  );
}

function TableStyles() {
  return (
    <style jsx global>{`
      .how-to-use .panel .ref-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
        margin: 4px 0;
      }
      .how-to-use .panel .ref-table th {
        text-align: left;
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
        font-weight: 600;
        color: #64748b;
        font-size: 12px;
        letter-spacing: 0.02em;
      }
      .how-to-use .panel .ref-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e2e8f0;
        vertical-align: top;
        color: #1e293b;
      }
      .how-to-use .panel .ref-table tr:last-child td { border-bottom: none; }
      .how-to-use .panel .ref-table p { margin: 0; }
    `}</style>
  );
}
