

/**
 * /pages/set-theory/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as /pages/algebra/index.jsx and /pages/trigonometry/index.jsx).
 * Sections are auto-discovered from the child directories on disk.
 *
 * MIGRATION NOTE (2026-07-31): the old hand-authored hub was a legacy
 * full-length article (TableOfContents + ContentBlocks over tocItems),
 * not a sectionsContent hub. Its entire teaching content — Definition,
 * Notation, Cardinality and Types of Sets, Relationships Between Sets,
 * Operations on Sets, with all diagrams and summary tables — was moved
 * VERBATIM-in-substance to the new child page:
 *
 *     /set-theory/basics   (pages/set-theory/basics/index.jsx)
 *
 * which follows the standard theoretical-page pattern and re-surfaces
 * here automatically as the first subsection card (with hubDescription
 * prose). The old hub's SEO <Head> block is kept verbatim below.
 * Child pages rules / venn-generator / visual-tools received an early
 * `hubMeta` (name + hubDescription) so their cards extract correctly.
 */

import Head from 'next/head';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';


const pageMeta = {
  title: 'Set Theory',
  subtitle: 'Sets, subsets, relationships, and operations — from basic notation and Venn diagrams to cardinality and the algebra of sets.',
  breadcrumbUrl: '/set-theory',
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/set-theory');

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
    },
  };
}


export default function SetTheoryPage({ pageMeta, sections, sectionData }) {
  return (
    <>
      {/* Legacy hub SEO block, kept verbatim (og:url slash fixed) */}
      <Head>
        <title>Set Theory: Basic Terminology and Overview | Math Concepts</title>
        <meta name="description" content="Fundamental concepts of Set Theory explained, covering definitions, notations, relationships between sets, and operations. Essential knowledge for mathematics students and enthusiasts." />
        <meta name="keywords" content="Set Theory, Mathematics, Cardinality, Subsets, Set Operations, Mathematical Sets" />
        <link rel="canonical" href="https://www.learnmathclass.com/set-theory" />
        <meta property="og:title" content="Set Theory: Basic Terminology and Overview" />
        <meta property="og:description" content="Comprehensive guide to Set Theory fundamentals, including definitions, notations, set relationships, and operations. Ideal for math students and enthusiasts." />
        <meta property="og:url" content="https://learnmathclass.com/set-theory" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://learnmathclass.com/images/set-theory.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Set Theory: Basic Terminology and Overview" />
        <meta name="twitter:description" content="Comprehensive guide to Set Theory fundamentals, including definitions, notations, set relationships, and operations. Ideal for math students and enthusiasts." />
        <meta name="twitter:image" content="https://learnmathclass.com/images/set-theory-twitter.jpg" />
      </Head>

      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <SectionFrontPage
        meta={pageMeta}
        sections={sections}
        sectionData={sectionData}
      />
    </>
  );
}
