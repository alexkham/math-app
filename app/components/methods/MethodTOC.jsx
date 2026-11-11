// MethodTOC.jsx
// Sticky right-hand table of contents for a leaf page, with the active section
// highlighted, plus "Built on" (rule links) and "Back to" (hub link) boxes.
// sections: [{ id, title }]   builtOn: [{ label, url }]   back: { label, url }

import React, { useEffect, useState } from 'react';
import { CLEAN } from '../calculation-methods/cleanTheme';

function InfoBox(props) {
  const { title, children } = props;
  return (
    <div
      style={{
        margin: '12px 14px 0',
        padding: '10px 12px',
        background: CLEAN.bgSubtle,
        border: `1px solid ${CLEAN.border}`,
        borderRadius: '8px',
        fontSize: '12.5px',
        lineHeight: 1.6,
      }}
    >
      <b style={{ display: 'block', color: CLEAN.title, marginBottom: '4px' }}>{title}</b>
      {children}
    </div>
  );
}

const inlineLink = { color: CLEAN.accent, textDecoration: 'none', borderBottom: `1px dotted ${CLEAN.tintBorder}` };

export default function MethodTOC(props) {
  const { sections = [], builtOn = [], back, stickyTop = 90 } = props;
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    if (sections.length === 0) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="On this page"
      style={{
        position: 'sticky',
        top: stickyTop,
        background: CLEAN.card,
        border: `1px solid ${CLEAN.border}`,
        borderRadius: '10px',
        padding: '14px 0',
        fontSize: '13.5px',
      }}
    >
      {sections.map((section) => {
        const active = section.id === activeId;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              padding: active ? '4px 16px 4px 13px' : '4px 16px',
              color: active ? CLEAN.accent : CLEAN.text,
              fontWeight: active ? 600 : 400,
              borderLeft: active ? `3px solid ${CLEAN.accent}` : 'none',
            }}
          >
            {section.title}
          </a>
        );
      })}

      {builtOn.length > 0 && (
        <InfoBox title="Built on">
          {builtOn.map((link, index) => (
            <React.Fragment key={link.url}>
              {index > 0 && ' · '}
              <a href={link.url} style={inlineLink}>
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </InfoBox>
      )}

      {back && back.url && (
        <InfoBox title="Back to">
          <a href={back.url} style={inlineLink}>
            {back.label}
          </a>
        </InfoBox>
      )}
    </nav>
  );
}
