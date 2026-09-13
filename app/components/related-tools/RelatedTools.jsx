// Line 3 — the "Related tools" strip.
//
// Renders the records the page received from getRelatedTools() in
// getStaticProps. It holds no data of its own: every entry here also exists as
// an in-text link inside the prose section the record names, so the strip is a
// second rendering of the same relationship rather than a separate list to
// maintain.
//
// Plain <a> elements on purpose - crawlable, and the destinations are ordinary
// page routes. Renders nothing when there is nothing to show.

import React from 'react';

export default function RelatedTools({ tools = [], title = 'Related tools' }) {
  if (!Array.isArray(tools) || tools.length === 0) return null;

  return (
    <nav
      aria-label={title}
      style={{
        width: '80%',
        margin: '0 auto',
        padding: '18px 22px',
        border: '1px solid #e2e8f0',
        borderRadius: '10px',
        background: '#f8fafc',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          margin: '0 0 12px',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#64748b',
        }}
      >
        {title}
      </h2>
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        {tools.map((t) => (
          <li key={t.key}>
            <a
              href={t.url}
              style={{
                display: 'inline-block',
                padding: '6px 12px',
                borderRadius: '999px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: '#1d4ed8',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                lineHeight: 1.3,
              }}
            >
              {t.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
