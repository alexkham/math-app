

/**
 * /pages/combinatorics/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as the other migrated hubs). Sections are auto-discovered from
 * the child directories on disk.
 *
 * MIGRATION NOTE (2026-08-05): the old hub was a full teaching article
 * (Counting Principles, Inclusion–Exclusion, Permutations and
 * Combinations, the ten Standard Scenarios, Binomial Coefficient,
 * Binomial Theorem, Related Concepts, plus intro / FAQ / schemas).
 * All of it moved VERBATIM to the new child page:
 *
 *     /combinatorics/basics   (pages/combinatorics/basics/index.jsx)
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
  title: 'Combinatorics',
  subtitle: 'The art of counting — permutations, combinations, the ten standard scenarios, and the binomial machinery behind them.',
  breadcrumbUrl: '/combinatorics',
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/combinatorics');

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
    },
  };
}


export default function CombinatoricsPage({ pageMeta, sections, sectionData }) {
  return (
    <>
      {/* Legacy hub SEO meta tags, kept verbatim (content schemas moved to /basics) */}
      <Head>
        <title>Combinatorics: Counting Rules &amp; Formulas | Learn Math Class</title>
        <meta name="description" content="Combinatorics fundamentals: counting principles, inclusion-exclusion, permutations, combinations, binomial coefficient, theorem, and core counting scenarios." />
        <meta name="keywords" content="combinatorics, counting principles, permutations and combinations, combinatorics formulas, binomial coefficient, binomial theorem, inclusion exclusion, combinatorial counting, counting techniques, discrete mathematics counting, arrangements and selections, multinomial coefficient, combinatorial scenarios, counting problems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.learnmathclass.com/combinatorics" />

        <meta property="og:title" content="Combinatorics: Counting Rules & Formulas | Learn Math Class" />
        <meta property="og:description" content="Combinatorics fundamentals: counting principles, inclusion-exclusion, permutations, combinations, binomial coefficient, theorem, and core counting scenarios." />
        <meta property="og:url" content="https://www.learnmathclass.com/combinatorics" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Combinatorics: Counting Rules & Formulas | Learn Math Class" />
        <meta name="twitter:description" content="Combinatorics fundamentals: counting principles, inclusion-exclusion, permutations, combinations, binomial coefficient, theorem, and core counting scenarios." />

        <meta name="robots" content="index, follow" />
      </Head>

      <OperaSidebar
        side='right'
        topOffset='55px'
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
