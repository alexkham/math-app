'use client';

/**
 * AutoLandingPage
 *
 * Same visual style as LandingPage (expandable sidebar, top nav mini cards,
 * compact static cards, flat stats hero) but auto-powered by buildSectionData.
 *
 * Usage in getStaticProps:
 *
 *   import { buildSectionData } from './buildSectionData';
 *
 *   export async function getStaticProps() {
 *     const { sections, sectionData } = await buildSectionData('/algebra');
 *     return {
 *       props: {
 *         sections,
 *         sectionData,
 *         meta: {
 *           title: 'Algebra',
 *           subtitle: 'Master algebraic concepts...',
 *           breadcrumbUrl: '/algebra',
 *         },
 *       },
 *     };
 *   }
 *
 * In the page component:
 *
 *   <AutoLandingPage
 *     meta={meta}
 *     sections={sections}
 *     sectionData={sectionData}
 *     sidebarTheme="portfolio"
 *     backgroundColor="#f0f2f5"
 *   />
 */

import React, { useMemo } from 'react';
import SidebarToggle from '../side-bar/SideBarExpandable';
import TopNavigation from '../top-navigation/TopNavigation';
import CompactStaticCards from '../../cards/static-cards/CompactStaticCards';
import OperaSidebar from '../../nav-bar/OperaSidebar';
import Breadcrumb from '../../breadcrumb/Breadcrumb';


/* ================================================================
   TYPE → ICON MAP (mirrors SectionFrontPage convention)
   ================================================================ */

const TYPE_ICON_MAP = {
  'formulas': '&#402;',
  'definitions': 'Aa',
  'calculators': '🧮',
  'visual-tools': '👁',
  'subsection': '§',
};

function getIconForType(type) {
  return TYPE_ICON_MAP[type] || '§';
}


/* ================================================================
   DATA ADAPTERS
   Transform buildSectionData output into the shapes that
   SidebarToggle, TopNavigation, and CompactStaticCards expect.
   ================================================================ */

/**
 * Builds sidebarData from sections + sectionData.
 * Groups sections into categories by type.
 */
function buildSidebarData(meta, sections, sectionData) {
  const typeGroups = {};

  sections.forEach((sec) => {
    const groupKey = sec.type;
    if (!typeGroups[groupKey]) {
      typeGroups[groupKey] = {
        label: groupKey === 'subsection' ? 'Topics'
          : groupKey === 'formulas' ? 'Formulas'
          : groupKey === 'definitions' ? 'Definitions'
          : groupKey === 'calculators' ? 'Calculators'
          : groupKey === 'visual-tools' ? 'Visual Tools'
          : 'Other',
        items: [],
      };
    }

    const item = {
      label: sec.title,
      href: sec.link || `#${sec.id}`,
      icon: getIconForType(sec.type),
      children: [],
    };

    const data = sectionData?.[sec.id];
    if (data?.children) {
      item.children = data.children.map((ch) => ({
        label: ch.title,
        href: ch.href || '#',
      }));
    }
    if (data?.categories) {
      item.children = data.categories.map((cat) => ({
        label: cat.name,
        href: `#${sec.id}`,
      }));
    }

    typeGroups[groupKey].items.push(item);
  });

  return {
    brandName: meta.title || 'Learn Math Class',
    brandSubtitle: meta.subtitle || '',
    categories: Object.values(typeGroups),
    showNewsletter: false,
    showFooter: true,
    footerText: 'Learn Math Class',
  };
}

/**
 * Builds topNavData cards from sections.
 */
function buildNavCards(sections) {
  return sections.map((sec) => ({
    id: sec.id,
    htmlId: sec.id,
    title: sec.title,
    icon: getIconForType(sec.type),
    badge: null,
  }));
}

/**
 * Builds content cards from sections + sectionData.
 * Each section becomes a card. Children become the card content.
 */
function buildContentCards(sections, sectionData) {
  return sections.map((sec, index) => {
    const data = sectionData?.[sec.id];
    let summary = sec.content || sec.introContent || '';
    let contentParts = [];

    // Build content from children
    if (data?.children && data.children.length > 0) {
      contentParts = data.children.map((ch) => {
        const line = ch.description ? `**${ch.title}** — ${ch.description}` : `**${ch.title}**`;
        return line;
      });
    }

    // Build content from categories (formulas/definitions)
    if (data?.categories && data.categories.length > 0) {
      contentParts = data.categories.map((cat) => {
        return `**${cat.name}** (${cat.count} items)`;
      });
    }

    const content = contentParts.length > 0
      ? contentParts.join('\n\n')
      : summary;

    return {
      id: index + 1,
      htmlId: sec.id,
      title: sec.title,
      icon: getIconForType(sec.type),
      summary: summary,
      content: content,
      link: sec.link || '',
      linkTitle: `Explore ${sec.title}`,
    };
  });
}

/**
 * Builds hero stats from sections + sectionData.
 */
function buildStats(sections, sectionData) {
  const stats = [];
  let formulaCount = 0;
  let defCount = 0;
  let calcCount = 0;
  let visCount = 0;
  let topicCount = 0;

  sections.forEach((sec) => {
    const data = sectionData?.[sec.id];
    if (sec.type === 'formulas' && data?.totalCount) formulaCount += data.totalCount;
    if (sec.type === 'definitions' && data?.totalCount) defCount += data.totalCount;
    if (sec.type === 'calculators' && data?.children) calcCount += data.children.length;
    if (sec.type === 'visual-tools' && data?.children) visCount += data.children.length;
    if (sec.type === 'subsection' && data?.children) topicCount += data.children.length;
  });

  if (formulaCount > 0) stats.push({ label: 'Formulas', value: formulaCount, icon: '📐' });
  if (defCount > 0) stats.push({ label: 'Definitions', value: defCount, icon: '📖' });
  if (topicCount > 0) stats.push({ label: 'Topics', value: topicCount, icon: '📚' });
  if (calcCount > 0) stats.push({ label: 'Calculators', value: calcCount, icon: '🧮' });
  if (visCount > 0) stats.push({ label: 'Visual Tools', value: visCount, icon: '👁' });

  return stats;
}


/* ================================================================
   COMPONENT
   ================================================================ */

export default function AutoLandingPage({
  meta,
  sections,
  sectionData,
  sidebarTheme = 'portfolio',
  backgroundColor = '#f0f2f5',
  showOperaSidebar = true,
  topNavMethod = 'miniCards',
  topNavSticky = true,
  topNavBackground = 'white',
  cardTheme,
  cardLayout = 'grid',
}) {

  const sidebarData = useMemo(
    () => buildSidebarData(meta, sections, sectionData),
    [meta, sections, sectionData]
  );

  const navCards = useMemo(
    () => buildNavCards(sections),
    [sections]
  );

  const contentCards = useMemo(
    () => buildContentCards(sections, sectionData),
    [sections, sectionData]
  );

  const stats = useMemo(
    () => buildStats(sections, sectionData),
    [sections, sectionData]
  );

  const styles = {
    pageWrapper: {
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      minWidth: '300px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: backgroundColor,
      position: 'relative',
    },
    mainContent: {
      flex: 1,
      padding: '0px',
      marginLeft: '30px',
      transition: 'margin-left 0.3s ease',
      minWidth: 0,
      marginTop: '30px',
    },
    pageHeader: {
      padding: '20px 32px 0 32px',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
    },
    pageTitle: {
      fontSize: '2rem',
      marginTop: '-10px',
      marginBottom: '20px',
      color: '#222',
      fontWeight: '700',
      textAlign: 'center',
    },
    contentContainer: {
      maxWidth: '1600px',
      margin: '0 auto',
      width: '100%',
    },
    heroSection: {
      padding: '10px 32px',
      color: 'black',
      marginBottom: '10px',
      width: '95%',
      border: '1px gray solid',
    },
    heroInner: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    statsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      marginTop: '24px',
      alignItems: 'center',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      opacity: 0.95,
    },
    statIcon: {
      fontSize: '1.3rem',
    },
    statValue: {
      fontWeight: '700',
      fontSize: '1.2rem',
    },
    contentWrapper: {
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto 60px auto',
    },
  };

  return (
    <div style={styles.pageWrapper}>
      {showOperaSidebar && (
        <OperaSidebar
          side="right"
          sidebarWidth="45px"
          panelWidth="200px"
          iconColor="white"
          panelBackgroundColor="#f2f2f2"
        />
      )}

      <SidebarToggle
        data={sidebarData}
        theme={sidebarTheme}
      />

      <main style={styles.mainContent}>
        {(meta.breadcrumbUrl || meta.title) && (
          <div style={styles.pageHeader}>
            {meta.breadcrumbUrl && <Breadcrumb />}
            {meta.title && (
              <h1 style={styles.pageTitle}>{meta.title}</h1>
            )}
          </div>
        )}

        <div style={styles.contentContainer}>
          {navCards.length > 0 && (
            <div style={{
              background: topNavBackground,
              marginBottom: '10px',
              maxWidth: '95%',
            }}>
              <TopNavigation
                cards={navCards}
                method={topNavMethod}
                sticky={topNavSticky}
                containerBackground="transparent"
              />
            </div>
          )}

          {stats.length > 0 && (
            <section style={styles.heroSection}>
              <div style={styles.heroInner}>
                <div style={styles.statsContainer}>
                  {stats.map((stat, index) => (
                    <div key={index} style={styles.statItem}>
                      {stat.icon && (
                        <span style={styles.statIcon}>{stat.icon}</span>
                      )}
                      <span style={styles.statValue}>{stat.value}</span>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {contentCards.length > 0 && (
          <div style={styles.contentWrapper}>
            <CompactStaticCards
              cards={contentCards}
              theme={cardTheme}
              layout={cardLayout}
            />
          </div>
        )}
      </main>
    </div>
  );
}