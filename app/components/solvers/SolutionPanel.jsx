

import React, { useState, useRef } from 'react';
import MathGraphComponent from './MathGraphComponent';

/* =====================================================
   SOLUTION PANEL

   Generic tab system with per-tab links support.
   Now includes MathGraphComponent as default graph renderer.
   
   Built-in tabs: Steps (order 0), Graph (order 20).
   Custom tabs via `tabs` array (default order 10).
   Each tab can have optional `links` array.

   Everything is optional. Missing props never cause errors.

   STATIC CONFIG:
     placeholder      : string
     stepsTitle       : string
     stepsLinks       : LinkDef[]
     showGraphs       : boolean
     GraphComponent   : React.Component (default: MathGraphComponent)
     graphLabel       : string
     graphLegend      : [{color, label}]
     graphLinks       : LinkDef[]
     stepCardClass    : (step) => string
     renderStepContent: (step, idx) => ReactNode
     tabs             : TabDef[]

   DYNAMIC DATA:
     steps            : Step[]
     graphData        : object|null
     darkMode         : boolean

   graphData format (for default MathGraphComponent):
     {
       type: 'exponential' | 'logarithmic' | 'radical',
       base: number,
       solution: { x, y },
       inequality?: { operator: '>' | '<' | '>=' | '<=' }
     }

   TabDef: { key, label, render, visible?, order?, links? }
   LinkDef: { label, url, icon?, tag? }
   ===================================================== */

const SP_STYLES = `
  .sp-tab-bar {
    display: flex;
    gap: 2px;
    background: var(--ms-tab-bg, #e2e8f0);
    border-radius: 8px;
    padding: 3px;
    margin-bottom: 16px;
  }
  .sp-tab-btn {
    flex: 1;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.82rem;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    color: var(--ms-muted, #64748b);
    transition: all 0.15s;
    text-align: center;
  }
  .sp-tab-btn.active {
    background: var(--ms-tab-active, #fff);
    color: var(--ms-text, #1e3a5f);
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }
  .sp-tab-btn:not(.active):hover {
    color: var(--ms-text-secondary, #334155);
  }
  .sp-steps-title {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    color: var(--ms-faint, #94a3b8);
    margin-bottom: 14px;
    font-weight: 600;
  }
  .sp-step-card {
    background: var(--ms-step-card, #f8fafc);
    border: none;
    border-left: 3px solid var(--ms-step-border, #3b82f6);
    border-radius: 0 8px 8px 0;
    padding: 16px 18px;
    margin-bottom: 10px;
    transition: background 0.25s;
  }
  .sp-step-header {
    margin-bottom: 6px;
  }
  .sp-step-number {
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--ms-step-number, #3b82f6);
    font-weight: 600;
  }
  .sp-step-rule {
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--ms-text, #1e3a5f);
    margin-bottom: 2px;
  }
  .sp-step-description {
    font-size: 0.82rem;
    color: var(--ms-muted, #64748b);
    line-height: 1.4;
    margin-bottom: 4px;
  }
  .sp-step-content {
    margin-top: 8px;
  }
  .sp-graph-container {
    background: var(--ms-card, #fff);
    border-radius: 8px;
    padding: 20px;
    transition: background 0.25s;
  }
  .sp-graph-label {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--ms-faint, #94a3b8);
    margin-bottom: 12px;
    font-weight: 500;
  }
  .sp-graph-legend {
    display: flex;
    gap: 16px;
    margin-top: 10px;
    font-size: 0.75rem;
    color: var(--ms-muted, #64748b);
  }
  .sp-graph-legend-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 4px;
    vertical-align: middle;
  }
  .sp-placeholder {
    background: var(--ms-placeholder-bg, #f1f5f9);
    border: 1px dashed var(--ms-placeholder-border, #cbd5e1);
    border-radius: 8px;
    padding: 40px 24px;
    text-align: center;
    font-size: 0.85rem;
    color: var(--ms-faint, #94a3b8);
    font-style: italic;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.25s, border-color 0.25s;
  }
  .sp-no-steps {
    color: var(--ms-faint, #94a3b8);
    font-style: italic;
    text-align: center;
    padding: 20px;
    font-size: 0.85rem;
  }
  .sp-links {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid var(--ms-placeholder-border, #cbd5e1);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .sp-links-heading {
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--ms-faint, #94a3b8);
    font-weight: 600;
    margin-bottom: 4px;
  }
  .sp-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    background: var(--ms-placeholder-bg, #f1f5f9);
    color: var(--ms-accent, #3b82f6);
    text-decoration: none;
    font-size: 0.82rem;
    font-weight: 500;
    transition: all 0.15s;
    border: 1px solid transparent;
  }
  .sp-link:hover {
    background: var(--ms-accent-light, #eff6ff);
    border-color: var(--ms-accent, #3b82f6);
  }
  .sp-link-icon {
    font-size: 0.9em;
    flex-shrink: 0;
    opacity: 0.8;
  }
  .sp-link-tag {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 4px;
    background: var(--ms-accent, #3b82f6);
    color: var(--ms-solve-text, #fff);
    margin-left: auto;
    flex-shrink: 0;
  }
`;

function LinksSection({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="sp-links">
      <div className="sp-links-heading">Resources</div>
      {links.map((link, i) => (
        <a
          key={i}
          className="sp-link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon && <span className="sp-link-icon">{link.icon}</span>}
          <span>{link.label}</span>
          {link.tag && <span className="sp-link-tag">{link.tag}</span>}
        </a>
      ))}
    </div>
  );
}

function SolutionPanel({
  /* static config */
  placeholder = 'Steps will appear here once you solve',
  stepsTitle = 'Solution Steps',
  stepsLinks = null,
  showGraphs = true,
  GraphComponent = MathGraphComponent,
  graphLabel = '',
  graphLegend = [],
  graphLinks = null,
  stepCardClass = null,
  renderStepContent = null,
  tabs: customTabs = [],
  /* dynamic data */
  steps = [],
  graphData = null,
  darkMode = false,
}) {
  const [activeTab, setActiveTab] = useState('steps');
  const hasGraph = !!(showGraphs && graphData && GraphComponent);
  const hasSolved = steps.length > 0;

  const prevStepsRef = useRef(steps);
  if (steps !== prevStepsRef.current && steps.length > 0) {
    prevStepsRef.current = steps;
    if (activeTab !== 'steps') setActiveTab('steps');
  }

  /* ---- Built-in tabs ---- */
  const stepsTab = {
    key: 'steps',
    label: stepsTitle || 'Steps',
    order: 0,
    visible: true,
    links: stepsLinks,
    render: () => (
      <div>
        {steps.map((step, index) => {
          const extra = stepCardClass ? stepCardClass(step) : '';
          return (
            <div key={index} className={`sp-step-card ${extra}`}>
              <div className="sp-step-header">
                <span className="sp-step-number">Step {index + 1}</span>
              </div>
              <div className="sp-step-rule">{step.rule}</div>
              <p className="sp-step-description">{step.description}</p>
              {renderStepContent && (
                <div className="sp-step-content">
                  {renderStepContent(step, index)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    ),
  };

  const graphTab = {
    key: 'graph',
    label: 'Graph',
    order: 20,
    visible: hasGraph,
    links: graphLinks,
    render: () => (
      <div className="sp-graph-container">
        {graphLabel && <div className="sp-graph-label">{graphLabel}</div>}
        <GraphComponent graphData={graphData} darkMode={darkMode} />
        {graphLegend.length > 0 && (
          <div className="sp-graph-legend">
            {graphLegend.map((item, i) => (
              <span key={i}>
                <span className="sp-graph-legend-dot" style={{ background: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
  };

  /* Merge built-in + custom, resolve visibility, sort */
  const allTabs = [stepsTab, graphTab, ...customTabs.map(t => ({
    ...t,
    order: t.order !== undefined ? t.order : 10,
    visible: typeof t.visible === 'boolean' ? t.visible : true,
    links: t.links || null,
  }))];

  const visibleTabs = allTabs
    .filter(t => typeof t.visible === 'function' ? t.visible() : !!t.visible)
    .sort((a, b) => a.order - b.order);

  const activeExists = visibleTabs.some(t => t.key === activeTab);
  const effectiveTab = activeExists ? activeTab : (visibleTabs[0] ? visibleTabs[0].key : 'steps');

  if (!hasSolved) {
    return (
      <div>
        <style>{SP_STYLES}</style>
        <div className="sp-placeholder"><p>{placeholder}</p></div>
      </div>
    );
  }

  const currentTab = visibleTabs.find(t => t.key === effectiveTab);
  const showTabBar = visibleTabs.length > 1;

  return (
    <div>
      <style>{SP_STYLES}</style>

      {showTabBar && (
        <div className="sp-tab-bar">
          {visibleTabs.map(t => (
            <button
              key={t.key}
              className={`sp-tab-btn${effectiveTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {!showTabBar && <div className="sp-steps-title">{stepsTitle}</div>}

      {currentTab && currentTab.render()}
      {currentTab && <LinksSection links={currentTab.links} />}
    </div>
  );
}

export default SolutionPanel;