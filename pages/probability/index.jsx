

/**
 * /pages/probability/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as /pages/algebra, /pages/trigonometry, /pages/set-theory,
 * /pages/linear-algebra, /pages/complex-numbers, /pages/calculus).
 * Sections are auto-discovered from the child directories on disk.
 *
 * MIGRATION NOTE (2026-07-31): the old hub carried a full teaching
 * article (Key Terms, Main Concepts, Set Theory & Event Algebra with
 * diagrams, Axioms, Rules tree, Combinatorial Probability, Random
 * Variables & Distributions with SVG, Conditional Probability,
 * Probability Function with SVG) plus a hand-authored Visual Tools
 * section. Per the user's directive:
 *
 *   - ALL teaching content moved to /probability/basics
 *     (pages/probability/basics/index.jsx) — copied, with only the
 *     visual-tools section removed.
 *   - The Visual Tools section is NOT migrated: it is now the hub's
 *     auto-generated visual-tools section. Its intro paragraph became
 *     the hubDescription of pages/probability/visual-tools/index.jsx,
 *     and each tool page received a hubMeta with a custom card icon
 *     (svg) plus, where the old hub had card text, a hubDescription
 *     distilled from it.
 *   - Symbols blurb -> prose-only custom section (links to /math-symbols).
 *   - formulas/definitions widgets dropped; the auto sections render the
 *     same DBs (probabilityFormulas.js shim added for the *List naming).
 *
 * The old SEO <Head> block is kept verbatim.
 */

import Head from 'next/head';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';


const pageMeta = {
  title: 'Probability',
  subtitle: 'Sample spaces, rules, random variables, and distributions — the mathematics of uncertainty, with simulators and visual explorers.',
  breadcrumbUrl: '/probability',
};


/* ================================================================
   CUSTOM SECTIONS
   ================================================================ */

const customSections = {

  // Pointer to the symbols reference, which lives outside this section.
  'symbols': {
    mode: 'prose-only',
    title: 'Probability Symbols Reference',
    link: '/math-symbols/probability',
    linkText: 'View Probability Symbols',
    body: `
      <p>Our <a href="/math-symbols/probability">Probability Symbols page</a> delivers a systematic reference for notation used in probability theory and statistics. This collection serves as an essential guide for students and professionals working with statistical concepts.</p>

      <p>The reference organizes symbols into practical categories including probability notations (P(A), P(A|B)), random variables and distributions (f<sub>X</sub>(x), F<sub>X</sub>(x)), and common distribution families (Bin(n,p), N(&mu;,&sigma;&sup2;)). It extends to advanced topics like statistical measures (E(X), Var(X)), hypothesis testing parameters (H&#8320;, &alpha;, p-value), and information theory metrics (H(X), I(X;Y)).</p>

      <p>Specialized sections cover moment generating functions (M<sub>X</sub>(t)), key probability inequalities (Markov&rsquo;s, Chebyshev&rsquo;s), Bayesian methods, and regression analysis notation &mdash; all presented with precise LaTeX formatting to support academic writing and research in probability and statistics.</p>
    `,
  },

};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/probability', { customSections });

  const keyWords = [
    'probability',
    'learn probability',
    'probability formulas',
    'probability theory',
    'probability distributions',
    'probability concepts',
    'random variables',
    'probability basics'
  ];

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
      keyWords,
      canonicalUrl: 'https://www.learnmathclass.com/probability',
      lastModified: new Date().toISOString(),
    },
  };
}


export default function ProbabilityPage({ pageMeta, sections, sectionData, keyWords, canonicalUrl, lastModified }) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Probability - Learn Mathematics",
    "description": "Comprehensive guide to probability theory including formulas, distributions, and core concepts. Learn about random variables, probability measures, and their applications.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Probability",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  };

  const pageTitle = "Probability - Theory, Formulas & Concepts | Learn Math Class";
  const pageDescription = "Master probability with our comprehensive guide covering probability theory, distributions, random variables, and core concepts. Perfect for students and educators.";

  return (
    <>
      {/* Legacy hub SEO block, kept verbatim */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={lastModified} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
