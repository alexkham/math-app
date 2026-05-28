// import React, { useState, useRef } from 'react';
// // import { processContent } from '../utils/contentProcessor';
// import { processContent } from '../../utils/contentProcessor';


// /* =====================================================
//    INFO PANEL

//    Generic, tab-driven side panel for the function-analysis
//    wrappers (gallery, and the ones that follow). Functionally
//    mirrors SolutionPanel's tab system — order-based sorting,
//    per-tab visibility, per-tab links — but WITHOUT the solve
//    gate or the built-in Steps/Graph tabs. Every tab is supplied
//    by the caller.

//    Tab body comes from ONE of:
//      - render()  : () => ReactNode      (live React, e.g. slider-tracking text)
//      - content   : string               (passed through processContent)
//    render() wins if both are present.

//    PROPS
//      tabs        : TabDef[]              (everything is driven by this)
//      darkMode    : boolean
//      placeholder : string               (shown when no tab is visible)
//      defaultTab  : string               (initial active key, optional)

//    TabDef  : { key, label, render?, content?, visible?, order?, links? }
//    LinkDef : { label, url, icon?, tag? }

//    visible : boolean | (() => boolean)  default true
//    order   : number                     default 10
//    ===================================================== */

// const IP_STYLES = `
//   .ip-root {
//     --ip-text: #0f172a;
//     --ip-text-secondary: #334155;
//     --ip-muted: #64748b;
//     --ip-faint: #94a3b8;
//     --ip-accent: #3b82f6;
//     --ip-accent-light: #eff6ff;
//     --ip-card: #ffffff;
//     --ip-tab-bg: #e2e8f0;
//     --ip-tab-active: #ffffff;
//     --ip-soft: #f1f5f9;
//     --ip-border: #cbd5e1;
//     --ip-border-soft: #e2e8f0;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
//     color: var(--ip-text);
//   }
//   .ip-root.ip-dark {
//     --ip-text: #e2e8f0;
//     --ip-text-secondary: #cbd5e1;
//     --ip-muted: #94a3b8;
//     --ip-faint: #64748b;
//     --ip-accent: #60a5fa;
//     --ip-accent-light: #1e293b;
//     --ip-card: #0f172a;
//     --ip-tab-bg: #1e293b;
//     --ip-tab-active: #334155;
//     --ip-soft: #1e293b;
//     --ip-border: #334155;
//     --ip-border-soft: #334155;
//   }

//   .ip-tab-bar {
//     display: flex;
//     gap: 2px;
//     background: var(--ip-tab-bg);
//     border-radius: 8px;
//     padding: 3px;
//     margin-bottom: 16px;
//   }
//   .ip-tab-btn {
//     flex: 1;
//     padding: 8px 14px;
//     border: none;
//     border-radius: 6px;
//     font-family: inherit;
//     font-size: 0.82rem;
//     font-weight: 500;
//     cursor: pointer;
//     background: transparent;
//     color: var(--ip-muted);
//     transition: all 0.15s;
//     text-align: center;
//   }
//   .ip-tab-btn.active {
//     background: var(--ip-tab-active);
//     color: var(--ip-text);
//     box-shadow: 0 1px 3px rgba(0,0,0,0.06);
//   }
//   .ip-tab-btn:not(.active):hover { color: var(--ip-text-secondary); }

//   .ip-title {
//     font-size: 0.72rem;
//     text-transform: uppercase;
//     letter-spacing: 1.8px;
//     color: var(--ip-faint);
//     margin-bottom: 14px;
//     font-weight: 600;
//   }

//   .ip-body {
//     font-size: 0.88rem;
//     line-height: 1.6;
//     color: var(--ip-text-secondary);
//   }
//   .ip-body h1, .ip-body h2, .ip-body h3 {
//     color: var(--ip-text);
//     letter-spacing: -0.01em;
//     margin: 0.8em 0 0.4em;
//   }
//   .ip-body h1 { font-size: 1.15rem; }
//   .ip-body h2 { font-size: 1rem; }
//   .ip-body h3 { font-size: 0.9rem; }
//   .ip-body strong { color: var(--ip-text); font-weight: 600; }
//   .ip-body ul { margin: 0.4em 0; padding-left: 1.2em; }
//   .ip-body li { margin-bottom: 0.25em; }
//   .ip-body a { color: var(--ip-accent); text-decoration: none; }
//   .ip-body a:hover { text-decoration: underline; }

//   /* tables emitted by processContent (@table:[...]@) */
//   .ip-body table {
//     border-collapse: collapse;
//     width: 100%;
//     margin: 0.9em 0;
//     font-size: 0.82rem;
//     border: 1px solid var(--ip-border-soft) !important;
//   }
//   .ip-body th, .ip-body td {
//     border: 1px solid var(--ip-border-soft) !important;
//     padding: 7px 10px !important;
//     text-align: left;
//     vertical-align: top;
//   }
//   .ip-body th {
//     background: var(--ip-soft);
//     color: var(--ip-text);
//     font-weight: 600;
//     font-size: 0.7rem;
//     text-transform: uppercase;
//     letter-spacing: 0.05em;
//   }
//   .ip-body td { color: var(--ip-text-secondary); }
//   .ip-body tr:nth-child(even) td { background: rgba(148, 163, 184, 0.06); }

//   .ip-placeholder {
//     background: var(--ip-soft);
//     border: 1px dashed var(--ip-border);
//     border-radius: 8px;
//     padding: 40px 24px;
//     text-align: center;
//     font-size: 0.85rem;
//     color: var(--ip-faint);
//     font-style: italic;
//     min-height: 160px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .ip-links {
//     margin-top: 16px;
//     padding-top: 14px;
//     border-top: 1px solid var(--ip-border-soft);
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//   }
//   .ip-links-heading {
//     font-size: 0.62rem;
//     text-transform: uppercase;
//     letter-spacing: 1.5px;
//     color: var(--ip-faint);
//     font-weight: 600;
//     margin-bottom: 4px;
//   }
//   .ip-link {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     padding: 8px 12px;
//     border-radius: 8px;
//     background: var(--ip-soft);
//     color: var(--ip-accent);
//     text-decoration: none;
//     font-size: 0.82rem;
//     font-weight: 500;
//     transition: all 0.15s;
//     border: 1px solid transparent;
//   }
//   .ip-link:hover {
//     background: var(--ip-accent-light);
//     border-color: var(--ip-accent);
//   }
//   .ip-link-icon { font-size: 0.9em; flex-shrink: 0; opacity: 0.8; }
//   .ip-link-tag {
//     font-size: 0.65rem;
//     text-transform: uppercase;
//     letter-spacing: 0.8px;
//     font-weight: 600;
//     padding: 2px 7px;
//     border-radius: 4px;
//     background: var(--ip-accent);
//     color: #fff;
//     margin-left: auto;
//     flex-shrink: 0;
//   }
// `;

// function LinksSection({ links }) {
//   if (!links || links.length === 0) return null;
//   return (
//     <div className="ip-links">
//       <div className="ip-links-heading">Resources</div>
//       {links.map((link, i) => (
//         <a
//           key={i}
//           className="ip-link"
//           href={link.url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {link.icon && <span className="ip-link-icon">{link.icon}</span>}
//           <span>{link.label}</span>
//           {link.tag && <span className="ip-link-tag">{link.tag}</span>}
//         </a>
//       ))}
//     </div>
//   );
// }

// function InfoPanel({
//   tabs = [],
//   darkMode = false,
//   placeholder = 'Nothing to show yet',
//   defaultTab = null,
// }) {
//   const [activeTab, setActiveTab] = useState(defaultTab);

//   /* Normalize + resolve visibility + sort */
//   const visibleTabs = tabs
//     .map(t => ({
//       ...t,
//       order: t.order !== undefined ? t.order : 10,
//       visible: typeof t.visible === 'boolean' ? t.visible
//              : typeof t.visible === 'function' ? t.visible()
//              : true,
//       links: t.links || null,
//     }))
//     .filter(t => t.visible)
//     .sort((a, b) => a.order - b.order);

//   /* If the active tab vanished (visibility/order changed), fall back.
//      Done during render via a ref guard to avoid setState loops. */
//   const firstKey = visibleTabs[0] ? visibleTabs[0].key : null;
//   const activeExists = visibleTabs.some(t => t.key === activeTab);
//   const effectiveTab = activeExists ? activeTab : firstKey;

//   const prevKeysRef = useRef('');
//   const keysSig = visibleTabs.map(t => t.key).join('|');
//   if (keysSig !== prevKeysRef.current) {
//     prevKeysRef.current = keysSig;
//     if (!activeExists && firstKey && activeTab !== firstKey) {
//       setActiveTab(firstKey);
//     }
//   }

//   const rootClass = `ip-root${darkMode ? ' ip-dark' : ''}`;

//   if (visibleTabs.length === 0) {
//     return (
//       <div className={rootClass}>
//         <style>{IP_STYLES}</style>
//         <div className="ip-placeholder"><p>{placeholder}</p></div>
//       </div>
//     );
//   }

//   const current = visibleTabs.find(t => t.key === effectiveTab) || visibleTabs[0];
//   const showTabBar = visibleTabs.length > 1;

//   const body = current.render
//     ? current.render()
//     : (current.content != null ? processContent(current.content) : null);

//   return (
//     <div className={rootClass}>
//       <style>{IP_STYLES}</style>

//       {showTabBar ? (
//         <div className="ip-tab-bar">
//           {visibleTabs.map(t => (
//             <button
//               key={t.key}
//               className={`ip-tab-btn${effectiveTab === t.key ? ' active' : ''}`}
//               onClick={() => setActiveTab(t.key)}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>
//       ) : (
//         <div className="ip-title">{current.label}</div>
//       )}

//       <div className="ip-body">{body}</div>
//       <LinksSection links={current.links} />
//     </div>
//   );
// }

// export default InfoPanel;



import React, { useState, useRef } from 'react';
// import { processContent } from '../utils/contentProcessor';
import { processContent } from '../../utils/contentProcessor';


/* =====================================================
   INFO PANEL — v2

   Change from v1:
     - <style>{IP_STYLES}</style> replaced with
       <style dangerouslySetInnerHTML={{ __html: IP_STYLES }} />.
       The CSS contains a literal `"Segoe UI"` which React serializes
       on the server as `&quot;Segoe UI&quot;` but leaves as `"` on the
       client text-node, causing a hydration mismatch. Inline-HTML
       injection bypasses text-escaping entirely.

   Generic, tab-driven side panel for the function-analysis
   wrappers (gallery, and the ones that follow). Functionally
   mirrors SolutionPanel's tab system — order-based sorting,
   per-tab visibility, per-tab links — but WITHOUT the solve
   gate or the built-in Steps/Graph tabs. Every tab is supplied
   by the caller.

   Tab body comes from ONE of:
     - render()  : () => ReactNode      (live React, e.g. slider-tracking text)
     - content   : string               (passed through processContent)
   render() wins if both are present.

   PROPS
     tabs        : TabDef[]              (everything is driven by this)
     darkMode    : boolean
     placeholder : string               (shown when no tab is visible)
     defaultTab  : string               (initial active key, optional)

   TabDef  : { key, label, render?, content?, visible?, order?, links? }
   LinkDef : { label, url, icon?, tag? }

   visible : boolean | (() => boolean)  default true
   order   : number                     default 10
   ===================================================== */

const IP_STYLES = `
  .ip-root {
    --ip-text: #0f172a;
    --ip-text-secondary: #334155;
    --ip-muted: #64748b;
    --ip-faint: #94a3b8;
    --ip-accent: #3b82f6;
    --ip-accent-light: #eff6ff;
    --ip-card: #ffffff;
    --ip-tab-bg: #e2e8f0;
    --ip-tab-active: #ffffff;
    --ip-soft: #f1f5f9;
    --ip-border: #cbd5e1;
    --ip-border-soft: #e2e8f0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    color: var(--ip-text);
  }
  .ip-root.ip-dark {
    --ip-text: #e2e8f0;
    --ip-text-secondary: #cbd5e1;
    --ip-muted: #94a3b8;
    --ip-faint: #64748b;
    --ip-accent: #60a5fa;
    --ip-accent-light: #1e293b;
    --ip-card: #0f172a;
    --ip-tab-bg: #1e293b;
    --ip-tab-active: #334155;
    --ip-soft: #1e293b;
    --ip-border: #334155;
    --ip-border-soft: #334155;
  }

  .ip-tab-bar {
    display: flex;
    gap: 2px;
    background: var(--ip-tab-bg);
    border-radius: 8px;
    padding: 3px;
    margin-bottom: 16px;
  }
  .ip-tab-btn {
    flex: 1;
    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.82rem;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    color: var(--ip-muted);
    transition: all 0.15s;
    text-align: center;
  }
  .ip-tab-btn.active {
    background: var(--ip-tab-active);
    color: var(--ip-text);
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }
  .ip-tab-btn:not(.active):hover { color: var(--ip-text-secondary); }

  .ip-title {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    color: var(--ip-faint);
    margin-bottom: 14px;
    font-weight: 600;
  }

  .ip-body {
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--ip-text-secondary);
  }
  .ip-body h1, .ip-body h2, .ip-body h3 {
    color: var(--ip-text);
    letter-spacing: -0.01em;
    margin: 0.8em 0 0.4em;
  }
  .ip-body h1 { font-size: 1.15rem; }
  .ip-body h2 { font-size: 1rem; }
  .ip-body h3 { font-size: 0.9rem; }
  .ip-body strong { color: var(--ip-text); font-weight: 600; }
  .ip-body ul { margin: 0.4em 0; padding-left: 1.2em; }
  .ip-body li { margin-bottom: 0.25em; }
  .ip-body a { color: var(--ip-accent); text-decoration: none; }
  .ip-body a:hover { text-decoration: underline; }

  /* tables emitted by processContent (@table:[...]@) */
  .ip-body table {
    border-collapse: collapse;
    width: 100%;
    margin: 0.9em 0;
    font-size: 0.82rem;
    border: 1px solid var(--ip-border-soft) !important;
  }
  .ip-body th, .ip-body td {
    border: 1px solid var(--ip-border-soft) !important;
    padding: 7px 10px !important;
    text-align: left;
    vertical-align: top;
  }
  .ip-body th {
    background: var(--ip-soft);
    color: var(--ip-text);
    font-weight: 600;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .ip-body td { color: var(--ip-text-secondary); }
  .ip-body tr:nth-child(even) td { background: rgba(148, 163, 184, 0.06); }

  .ip-placeholder {
    background: var(--ip-soft);
    border: 1px dashed var(--ip-border);
    border-radius: 8px;
    padding: 40px 24px;
    text-align: center;
    font-size: 0.85rem;
    color: var(--ip-faint);
    font-style: italic;
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ip-links {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid var(--ip-border-soft);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .ip-links-heading {
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--ip-faint);
    font-weight: 600;
    margin-bottom: 4px;
  }
  .ip-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    background: var(--ip-soft);
    color: var(--ip-accent);
    text-decoration: none;
    font-size: 0.82rem;
    font-weight: 500;
    transition: all 0.15s;
    border: 1px solid transparent;
  }
  .ip-link:hover {
    background: var(--ip-accent-light);
    border-color: var(--ip-accent);
  }
  .ip-link-icon { font-size: 0.9em; flex-shrink: 0; opacity: 0.8; }
  .ip-link-tag {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 4px;
    background: var(--ip-accent);
    color: #fff;
    margin-left: auto;
    flex-shrink: 0;
  }
`;

function LinksSection({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="ip-links">
      <div className="ip-links-heading">Resources</div>
      {links.map((link, i) => (
        <a
          key={i}
          className="ip-link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon && <span className="ip-link-icon">{link.icon}</span>}
          <span>{link.label}</span>
          {link.tag && <span className="ip-link-tag">{link.tag}</span>}
        </a>
      ))}
    </div>
  );
}

function InfoPanel({
  tabs = [],
  darkMode = false,
  placeholder = 'Nothing to show yet',
  defaultTab = null,
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  /* Normalize + resolve visibility + sort */
  const visibleTabs = tabs
    .map(t => ({
      ...t,
      order: t.order !== undefined ? t.order : 10,
      visible: typeof t.visible === 'boolean' ? t.visible
             : typeof t.visible === 'function' ? t.visible()
             : true,
      links: t.links || null,
    }))
    .filter(t => t.visible)
    .sort((a, b) => a.order - b.order);

  /* If the active tab vanished (visibility/order changed), fall back.
     Done during render via a ref guard to avoid setState loops. */
  const firstKey = visibleTabs[0] ? visibleTabs[0].key : null;
  const activeExists = visibleTabs.some(t => t.key === activeTab);
  const effectiveTab = activeExists ? activeTab : firstKey;

  const prevKeysRef = useRef('');
  const keysSig = visibleTabs.map(t => t.key).join('|');
  if (keysSig !== prevKeysRef.current) {
    prevKeysRef.current = keysSig;
    if (!activeExists && firstKey && activeTab !== firstKey) {
      setActiveTab(firstKey);
    }
  }

  const rootClass = `ip-root${darkMode ? ' ip-dark' : ''}`;

  if (visibleTabs.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: IP_STYLES }} />
        <div className="ip-placeholder"><p>{placeholder}</p></div>
      </div>
    );
  }

  const current = visibleTabs.find(t => t.key === effectiveTab) || visibleTabs[0];
  const showTabBar = visibleTabs.length > 1;

  const body = current.render
    ? current.render()
    : (current.content != null ? processContent(current.content) : null);

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: IP_STYLES }} />

      {showTabBar ? (
        <div className="ip-tab-bar">
          {visibleTabs.map(t => (
            <button
              key={t.key}
              className={`ip-tab-btn${effectiveTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="ip-title">{current.label}</div>
      )}

      <div className="ip-body">{body}</div>
      <LinksSection links={current.links} />
    </div>
  );
}

export default InfoPanel;