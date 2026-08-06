

// /**
//  * /pages/calculus/index.jsx
//  *
//  * Section hub page on the buildSectionData / SectionFrontPage pattern
//  * (same as /pages/algebra, /pages/trigonometry, /pages/set-theory,
//  * /pages/linear-algebra, /pages/complex-numbers). Sections are
//  * auto-discovered from the child directories on disk; the old
//  * hand-authored hub content was migrated as follows (2026-07-31):
//  *
//  *   - "Limits, Derivatives, and Integrals" section + diagram
//  *       -> the `article` prop (guest article block under the hero),
//  *          lightly copy-edited; diagram extracted verbatim to
//  *          app/components/diagrams/calculusThreeConceptsDiagram.js
//  *   - formulas / definitions descriptions -> `hubDescription` in the
//  *       corresponding child pages, re-surfaced here automatically
//  *   - formulas/definitions scrolling widgets -> dropped; the auto
//  *       sections render the same DB modules (calculusFormulas.js shim
//  *       added because the module was named calculusFormulasList.js)
//  *   - "Introduction to Calculus"  -> prose-only custom section, first
//  *   - Symbols blurb               -> prose-only custom section (links
//  *                                    outside the section, to /math-symbols)
//  *
//  * The old SEO <Head> block is kept verbatim. Child pages formulas /
//  * definitions / visual-tools received `hubMeta` for card extraction
//  * (visual-tools had a literal placeholder `name: "name"`).
//  */

// import Head from 'next/head';
// import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
// import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import calculusThreeConceptsDiagram from '@/app/components/diagrams/calculusThreeConceptsDiagram';


// const pageMeta = {
//   title: 'Calculus',
//   subtitle: 'Limits, derivatives, and integrals — the mathematics of continuous change, from first definitions to visual explorations.',
//   breadcrumbUrl: '/calculus',
// };


// /* ================================================================
//    CUSTOM SECTIONS
//    ================================================================ */

// const customSections = {

//   // The old hub's intro block. The article slot is taken by the
//   // three-concepts piece, so the intro lives on as the first section.
//   'introduction': {
//     mode: 'prose-only',
//     title: 'Introduction to Calculus',
//     insertBefore: 'visual-tools',
//     body: `
//       <style>
//         .lmc-calc-intro p { margin: 0 0 14px; }
//         .lmc-calc-intro ul { margin: 0 0 14px; padding-left: 0; list-style: none; }
//         .lmc-calc-intro li { padding: 6px 0 6px 14px; border-left: 3px solid #e2e8f0; margin-bottom: 6px; }
//         .lmc-calc-intro li strong { color: #1e293b; }
//       </style>
//       <div class="lmc-calc-intro">
//         <p>Calculus is a section of mathematics dealing with continuous change. It encompasses several fundamental concepts: <strong>limits</strong>, <strong>derivatives</strong>, <strong>integrals</strong>, and <strong>infinite series</strong>. These ideas work together to create a powerful mathematical framework.</p>
//         <p>The core components of calculus include:</p>
//         <ul>
//           <li><strong>Limits</strong> &mdash; examining the behavior of functions as they approach specific values</li>
//           <li><strong>Differential calculus</strong> &mdash; studying rates of change through derivatives</li>
//           <li><strong>Integral calculus</strong> &mdash; analyzing accumulation and total change</li>
//           <li><strong>Infinite series</strong> &mdash; representing functions as sums of infinite terms</li>
//         </ul>
//         <p>Differential calculus allows us to find instantaneous rates of change and optimize functions, while integral calculus provides tools for calculating areas, volumes, and accumulated quantities. The connection between these two branches, established by the <strong>Fundamental Theorem of Calculus</strong>, creates a unified system for analyzing continuous change.</p>
//         <p>Applications of calculus extend throughout science, engineering, and economics. In physics, it models motion and energy; in engineering, it optimizes designs and processes; in economics, it analyzes rates of growth and market behavior. The precise mathematical framework of the subject makes it essential for understanding and describing natural phenomena.</p>
//       </div>
//     `,
//   },

//   // Pointer to the symbols reference, which lives outside this section.
//   'symbols': {
//     mode: 'prose-only',
//     title: 'Calculus Symbols Reference',
//     link: '/math-symbols/calculus',
//     linkText: 'View Calculus Symbols',
//     body: `
//       <p>Our <a href="/math-symbols/calculus">Calculus Symbols page</a> offers a detailed catalog of notation used in differential and integral calculus. This comprehensive resource organizes symbols by their mathematical functions to help students and professionals navigate the language of calculus.</p>

//       <p>The reference covers essential notation across categories including differentiation (f&prime;(x), df/dx, &nabla;f), integration (&int;, &#8748;, &#8750;), limits (lim<sub>x&rarr;c</sub>), and infinite series (&sum;). Advanced topics include vector calculus notation for divergence and curl, differential operators like the Laplacian (&nabla;&sup2;f), and specialized notation for curvature and differential equations.</p>

//       <p>Each symbol is presented with its proper LaTeX representation and a concise explanation of its meaning, making this an essential resource for anyone working with calculus concepts in academic or professional settings.</p>
//     `,
//   },

// };


// /* ================================================================
//    GUEST ARTICLE (rendered by SectionFrontPage's ArticleBlock)
//    The old hub's "Limits, Derivatives, and Integrals" section,
//    lightly copy-edited, with its original diagram.
//    ================================================================ */

// const linkStyle = { color: '#1565c0', textDecoration: 'underline' };

// const threeConceptsArticle = {
//   title: 'Limits, Derivatives, and Integrals',
//   content: (
//     <>
//       <p><a href="/calculus/limits" style={linkStyle}>Limits</a> play a central role in defining both <a href="/calculus/derivatives" style={linkStyle}>derivatives</a> and <a href="/calculus/integrals" style={linkStyle}>integrals</a>. They provide the precise language for handling values that are approached but not necessarily reached.</p>

//       <p>A derivative is defined as the limit of the average rate of change as the interval shrinks to zero — and, in this way, it captures how a function changes at a specific point.</p>

//       <p>An integral, on the other hand, measures accumulation — such as the area under a curve or the total distance traveled. The concept of a limit is at work here as well, serving as the key tool for defining the integral through an infinite sum of infinitesimally small quantities.</p>

//       <p>What ties them all together is the Fundamental Theorem of Calculus, which states that differentiation and integration are inverse processes: taking the derivative of an integral function returns the original function, and integrating a derivative recovers accumulated change.</p>

//       <p>In essence, limits allow us to rigorously define both change (via derivatives) and accumulation (via integrals), revealing a deep unity among the three core ideas of calculus.</p>

//       <div style={{ marginTop: 28 }} dangerouslySetInnerHTML={{ __html: calculusThreeConceptsDiagram }} />
//     </>
//   ),
// };


// export async function getStaticProps() {
//   const { sections, sectionData } = await buildSectionData('/calculus', { customSections });

//   const keyWords = [
//     'calculus',
//     'learn calculus',
//     'calculus formulas',
//     'differential calculus',
//     'integral calculus',
//     'calculus fundamentals',
//     'limits and derivatives',
//     'calculus concepts'
//   ];

//   return {
//     props: {
//       pageMeta,
//       sections,
//       sectionData,
//       keyWords,
//       canonicalUrl: 'https://www.learnmathclass.com/calculus',
//       lastModified: new Date().toISOString(),
//     },
//   };
// }


// export default function CalculusPage({ pageMeta, sections, sectionData, keyWords, canonicalUrl, lastModified }) {

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Calculus - Learn Mathematics",
//     "description": "Comprehensive guide to calculus including fundamental concepts of limits, derivatives, integrals, and infinite series. Learn calculus with clear explanations and examples.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Calculus",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   };

//   const pageTitle = "Calculus - Formulas & Core Concepts | Learn Math Class";
//   const pageDescription = "Master calculus with our comprehensive guide covering limits, derivatives, integrals, and infinite series. Perfect for students and educators.";

//   return (
//     <>
//       {/* Legacy hub SEO block, kept verbatim */}
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="keywords" content={keyWords.join(", ")} />
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

//         <link rel="canonical" href={canonicalUrl} />

//         <meta property="og:title" content={pageTitle} />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:type" content="article" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:site_name" content="Learn Math Class" />
//         <meta property="og:locale" content="en_US" />
//         <meta property="article:modified_time" content={lastModified} />

//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={pageTitle} />
//         <meta name="twitter:description" content={pageDescription} />

//         <meta name="robots" content="index, follow" />
//         <meta name="googlebot" content="index, follow" />
//         <meta name="revisit-after" content="7 days" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//       </Head>

//       <OperaSidebar
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />

//       <SectionFrontPage
//         meta={pageMeta}
//         sections={sections}
//         sectionData={sectionData}
//         article={threeConceptsArticle}
//       />
//     </>
//   );
// }



/**
 * /pages/calculus/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as /pages/algebra, /pages/trigonometry, /pages/set-theory,
 * /pages/linear-algebra, /pages/complex-numbers). Sections are
 * auto-discovered from the child directories on disk; the old
 * hand-authored hub content was migrated as follows (2026-07-31):
 *
 *   - "Limits, Derivatives, and Integrals" section + diagram
 *       -> the `article` prop (guest article block under the hero),
 *          lightly copy-edited; diagram extracted verbatim to
 *          app/components/diagrams/calculusThreeConceptsDiagram.js
 *   - formulas / definitions descriptions -> `hubDescription` in the
 *       corresponding child pages, re-surfaced here automatically
 *   - formulas/definitions scrolling widgets -> dropped; the auto
 *       sections render the same DB modules (calculusFormulas.js shim
 *       added because the module was named calculusFormulasList.js)
 *   - "Introduction to Calculus"  -> prose-only custom section, first
 *   - Symbols blurb               -> prose-only custom section (links
 *                                    outside the section, to /math-symbols)
 *
 * The old SEO <Head> block is kept verbatim. Child pages formulas /
 * definitions / visual-tools received `hubMeta` for card extraction
 * (visual-tools had a literal placeholder `name: "name"`).
 */

import Head from 'next/head';
import Link from 'next/link';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import calculusThreeConceptsDiagram from '@/app/components/diagrams/calculusThreeConceptsDiagram';


const pageMeta = {
  title: 'Calculus',
  subtitle: 'Limits, derivatives, and integrals — the mathematics of continuous change, from first definitions to visual explorations.',
  breadcrumbUrl: '/calculus',
};


/* ================================================================
   CUSTOM SECTIONS
   ================================================================ */

const customSections = {

  // The old hub's intro block. The article slot is taken by the
  // three-concepts piece, so the intro lives on as the first section.
  'introduction': {
    mode: 'prose-only',
    title: 'Introduction to Calculus',
    insertBefore: 'visual-tools',
    body: `
      <style>
        .lmc-calc-intro p { margin: 0 0 14px; }
        .lmc-calc-intro ul { margin: 0 0 14px; padding-left: 0; list-style: none; }
        .lmc-calc-intro li { padding: 6px 0 6px 14px; border-left: 3px solid #e2e8f0; margin-bottom: 6px; }
        .lmc-calc-intro li strong { color: #1e293b; }
      </style>
      <div class="lmc-calc-intro">
        <p>Calculus is a section of mathematics dealing with continuous change. It encompasses several fundamental concepts: <strong>limits</strong>, <strong>derivatives</strong>, <strong>integrals</strong>, and <strong>infinite series</strong>. These ideas work together to create a powerful mathematical framework.</p>
        <p>The core components of calculus include:</p>
        <ul>
          <li><strong>Limits</strong> &mdash; examining the behavior of functions as they approach specific values</li>
          <li><strong>Differential calculus</strong> &mdash; studying rates of change through derivatives</li>
          <li><strong>Integral calculus</strong> &mdash; analyzing accumulation and total change</li>
          <li><strong>Infinite series</strong> &mdash; representing functions as sums of infinite terms</li>
        </ul>
        <p>Differential calculus allows us to find instantaneous rates of change and optimize functions, while integral calculus provides tools for calculating areas, volumes, and accumulated quantities. The connection between these two branches, established by the <strong>Fundamental Theorem of Calculus</strong>, creates a unified system for analyzing continuous change.</p>
        <p>Applications of calculus extend throughout science, engineering, and economics. In physics, it models motion and energy; in engineering, it optimizes designs and processes; in economics, it analyzes rates of growth and market behavior. The precise mathematical framework of the subject makes it essential for understanding and describing natural phenomena.</p>
      </div>
    `,
  },

  // Pointer to the symbols reference, which lives outside this section.
  'symbols': {
    mode: 'prose-only',
    title: 'Calculus Symbols Reference',
    link: '/math-symbols/calculus',
    linkText: 'View Calculus Symbols',
    body: `
      <p>Our <a href="/math-symbols/calculus">Calculus Symbols page</a> offers a detailed catalog of notation used in differential and integral calculus. This comprehensive resource organizes symbols by their mathematical functions to help students and professionals navigate the language of calculus.</p>

      <p>The reference covers essential notation across categories including differentiation (f&prime;(x), df/dx, &nabla;f), integration (&int;, &#8748;, &#8750;), limits (lim<sub>x&rarr;c</sub>), and infinite series (&sum;). Advanced topics include vector calculus notation for divergence and curl, differential operators like the Laplacian (&nabla;&sup2;f), and specialized notation for curvature and differential equations.</p>

      <p>Each symbol is presented with its proper LaTeX representation and a concise explanation of its meaning, making this an essential resource for anyone working with calculus concepts in academic or professional settings.</p>
    `,
  },

};


/* ================================================================
   GUEST ARTICLE (rendered by SectionFrontPage's ArticleBlock)
   The old hub's "Limits, Derivatives, and Integrals" section,
   lightly copy-edited, with its original diagram.
   ================================================================ */

const linkStyle = { color: '#1565c0', textDecoration: 'underline' };

const threeConceptsArticle = {
  title: 'Limits, Derivatives, and Integrals',
  content: (
    <>
      <p><Link href="/calculus/limits" style={linkStyle}>Limits</Link> play a central role in defining both <Link href="/calculus/derivatives" style={linkStyle}>derivatives</Link> and <Link href="/calculus/integrals" style={linkStyle}>integrals</Link>. They provide the precise language for handling values that are approached but not necessarily reached.</p>

      <p>A derivative is defined as the limit of the average rate of change as the interval shrinks to zero — and, in this way, it captures how a function changes at a specific point.</p>

      <p>An integral, on the other hand, measures accumulation — such as the area under a curve or the total distance traveled. The concept of a limit is at work here as well, serving as the key tool for defining the integral through an infinite sum of infinitesimally small quantities.</p>

      <p>What ties them all together is the Fundamental Theorem of Calculus, which states that differentiation and integration are inverse processes: taking the derivative of an integral function returns the original function, and integrating a derivative recovers accumulated change.</p>

      <p>In essence, limits allow us to rigorously define both change (via derivatives) and accumulation (via integrals), revealing a deep unity among the three core ideas of calculus.</p>

      <div style={{ marginTop: 28 }} dangerouslySetInnerHTML={{ __html: calculusThreeConceptsDiagram }} />
    </>
  ),
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/calculus', { customSections });

  const keyWords = [
    'calculus',
    'learn calculus',
    'calculus formulas',
    'differential calculus',
    'integral calculus',
    'calculus fundamentals',
    'limits and derivatives',
    'calculus concepts'
  ];

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
      keyWords,
      canonicalUrl: 'https://www.learnmathclass.com/calculus',
      lastModified: new Date().toISOString(),
    },
  };
}


export default function CalculusPage({ pageMeta, sections, sectionData, keyWords, canonicalUrl, lastModified }) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Calculus - Learn Mathematics",
    "description": "Comprehensive guide to calculus including fundamental concepts of limits, derivatives, integrals, and infinite series. Learn calculus with clear explanations and examples.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Calculus",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  };

  const pageTitle = "Calculus - Formulas & Core Concepts | Learn Math Class";
  const pageDescription = "Master calculus with our comprehensive guide covering limits, derivatives, integrals, and infinite series. Perfect for students and educators.";

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
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <SectionFrontPage
        meta={pageMeta}
        sections={sections}
        sectionData={sectionData}
        article={threeConceptsArticle}
      />
    </>
  );
}