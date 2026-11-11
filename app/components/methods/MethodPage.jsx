// MethodPage.jsx
// Body of a Methods-tier leaf page (composite, strategy or applied).
// The page file keeps Head / OperaSidebar / Breadcrumb; this renders
// H1, lead, the level's sections and the sticky TOC.
//
// Props:
//   hub        — sub-hub data object ({ hubPath, hubLabel, methods, ... })
//   slug       — the leaf's slug
//   components — { [name]: Component } visuals this page may render

import React from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';
import MethodSection from './MethodSection';
import MethodTOC from './MethodTOC';
import compositeSections from './compositeSections';
import strategySections from './strategySections';
import appliedSections from './appliedSections';

const SECTION_BUILDERS = {
  composite: compositeSections,
  strategy: strategySections,
  applied: appliedSections,
};

export default function MethodPage(props) {
  const { hub, slug, components = {} } = props;

  const item = (hub.methods || []).find((method) => method.slug === slug);
  if (!item || !item.page) return null;

  const { page } = item;
  const buildSections = SECTION_BUILDERS[item.level] || compositeSections;
  const sections = buildSections({ item, page, hub, components });
  const tocSections = sections.filter((section) => section.inToc !== false);

  return (
    <div style={{ maxWidth: CLEAN.maxWidth, margin: '0 auto', padding: `0 ${CLEAN.gutter} 80px`, color: CLEAN.text }}>
      <h1 style={{ color: CLEAN.title, fontSize: '32px', lineHeight: 1.2, margin: '0 0 10px' }}>
        {processContent(page.h1 || item.name)}
      </h1>
      {page.lead && (
        <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '820px', margin: '0 0 22px' }}>
          {processContent(page.lead)}
        </p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 250px',
          gap: '28px',
          alignItems: 'start',
        }}
      >
        <div style={{ minWidth: 0 }}>
          {sections.map((section) => (
            <MethodSection key={section.id} id={section.id} title={section.title}>
              {section.node}
            </MethodSection>
          ))}
        </div>

        <MethodTOC
          sections={tocSections.map((section) => ({ id: section.id, title: section.title }))}
          builtOn={page.builtOn || []}
          back={{ label: `All ${hub.hubLabel || 'methods'}`, url: hub.hubPath }}
        />
      </div>
    </div>
  );
}
