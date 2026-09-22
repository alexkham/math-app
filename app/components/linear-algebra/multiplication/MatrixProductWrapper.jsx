'use client';

import React, { useState, useMemo } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================
   MatrixProductWrapper

   A tab strip and nothing else. It mounts exactly one component
   at a time and renders no controls of its own — the mounted
   component brings its own control bar, so a page never shows
   two.

   It knows nothing about matrices, readings, or any particular
   visualizer. Each tab names a component and the props to pass
   it. Anything that renders is a valid tab.

   ------------------------------------------------------------
   USE

   page 1 — matrix-multiplication-columns
     tabs={[
       { key: 'vector',
         label: 'Matrix × vector',
         component: ColumnPictureVisualizer,
         props: { matrix: A23, vector: V3, content: copy.vector } },
       { key: 'matrix',
         label: 'Matrix × matrix',
         component: MatrixProductVisualizer,
         props: { reading: 'columns', content: copy.matrix } },
     ]}

   page 2 — matrix-multiplication-rows
     same shape, RowPictureVisualizer and reading: 'rows'

   page 3 — matrix-multiplication-rows-columns
     three tabs, all MatrixProductVisualizer, readings
     'both' | 'columns' | 'rows'

   ------------------------------------------------------------
   MOUNTING

   `remount` (default true) gives each tab its own key, so
   switching tabs unmounts the old component and mounts the new
   one clean. That matters here: the visualizers hold step state,
   and a step number means something different in each of them.

   Set remount={false} to keep tabs alive and preserve their
   state across switches.

   ------------------------------------------------------------
   LABELS run through processContent, so they take $LaTeX$ and
   the rest of the site markup. Pass a node instead of a string
   to skip that.
   ============================================================ */

export default function MatrixProductWrapper({
  tabs = [],
  defaultKey,
  remount = true,
  ariaLabel = 'View',
  className = '',
  onChange,
}) {
  const valid = useMemo(
    () => tabs.filter((tab) => tab && tab.key && tab.component),
    [tabs],
  );

  const [activeKey, setActiveKey] = useState(() => {
    if (defaultKey && valid.some((tab) => tab.key === defaultKey)) return defaultKey;
    return valid.length ? valid[0].key : null;
  });

  const active = valid.find((tab) => tab.key === activeKey) || valid[0];

  if (!active) return null;

  const Mounted = active.component;

  const select = (key) => {
    setActiveKey(key);
    if (onChange) onChange(key);
  };

  return (
    <div className={`mpwRoot ${className}`.trim()}>
      {valid.length > 1 && (
        <div className="tabs" role="group" aria-label={ariaLabel}>
          {valid.map((tab) => (
            <button
              key={tab.key}
              type="button"
              aria-pressed={tab.key === active.key}
              onClick={() => select(tab.key)}
            >
              {typeof tab.label === 'string' ? processContent(tab.label) : tab.label}
            </button>
          ))}
        </div>
      )}

      <Mounted key={remount ? active.key : undefined} {...(active.props || {})} />

      <style jsx>{`
        .mpwRoot{
          --nav:#0b2f77;
          --nav-line:#c6d3ea;
          --rule:#dfe4ec;
          --grey:#6b7684;
          --ink:#1a1f2b;
        }

        .tabs{
          display:flex;
          gap:0;
          max-width:560px;
          margin:0 auto 14px;
          border-bottom:1px solid var(--rule);
        }
        .tabs button{
          flex:1;
          appearance:none;
          border:0;
          border-bottom:3px solid transparent;
          background:transparent;
          color:var(--grey);
          font:inherit;
          font-size:13px;
          padding:8px 6px;
          cursor:pointer;
          transition:color .2s, border-color .2s;
        }
        .tabs button:hover{ color:var(--ink) }
        .tabs button[aria-pressed="true"]{
          color:var(--nav);
          border-bottom-color:var(--nav);
          font-weight:700;
        }
        .tabs button:focus-visible{
          outline:2px solid var(--nav);
          outline-offset:-2px;
        }
        .tabs button :global(br){ display:none }

        @media (max-width:640px){
          .tabs{ max-width:none }
          .tabs button{ font-size:12.5px; padding:8px 4px }
        }

        @media (prefers-reduced-motion:reduce){
          .tabs button{ transition:none }
        }
      `}</style>
    </div>
  );
}
