

/**
 * /pages/functions/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as the other migrated hubs). Sections are auto-discovered from
 * the child directories on disk.
 *
 * MIGRATION NOTE (2026-08-05): the old hub was a full teaching article
 * (Key Terms map, What is a Function, Functions vs Relations, Vertical
 * Line Test, Representations, Notation, Evaluating, Variables,
 * Function Diagnostics, Special Values, Functions in Context, Topic
 * Landscape — with four reference tables, intro, FAQ and schemas).
 * All of it moved VERBATIM to the new child page:
 *
 *     /functions/basics   (pages/functions/basics/index.jsx)
 *
 * which re-surfaces here automatically as a subsection card with
 * hubDescription prose. The old hub's SEO meta tags are kept verbatim
 * below; its JSON-LD schemas moved WITH the content to /basics.
 * Child page visual-tools received an early `hubMeta` (its seoData had
 * a literal placeholder name).
 */

import Head from 'next/head';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';


const pageMeta = {
  title: 'Functions',
  subtitle: 'The input–output machine of mathematics — definitions, graphs, transformations, composition, inverses, and the families they form.',
  breadcrumbUrl: '/functions',
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/functions');

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
    },
  };
}


export default function FunctionsPage({ pageMeta, sections, sectionData }) {
  return (
    <>
      {/* Legacy hub SEO meta tags, kept verbatim (content schemas moved to /basics) */}
      <Head>
        <title>Functions: Definition &amp; Types | Learn Math Class</title>
        <meta name="description" content="Learn what functions are in mathematics. Covers function notation, the vertical line test, evaluating functions, domain and range, and representations." />
        <meta name="keywords" content="functions in math, what is a function, function definition, function notation, f(x) notation, evaluating functions, domain and range, vertical line test, input output math, function vs relation, function examples, types of functions, function representations, independent dependent variable" />
        <link rel="canonical" href="https://www.learnmathclass.com/functions" />

        <meta property="og:title" content="Functions: Definition & Types | Learn Math Class" />
        <meta property="og:description" content="Learn what functions are in mathematics. Covers function notation, the vertical line test, evaluating functions, domain and range, and representations." />
        <meta property="og:url" content="https://www.learnmathclass.com/functions" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Functions: Definition & Types | Learn Math Class" />
        <meta name="twitter:description" content="Learn what functions are in mathematics. Covers function notation, the vertical line test, evaluating functions, domain and range, and representations." />

        <meta name="robots" content="index, follow" />
      </Head>

      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
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
