

/**
 * /pages/linear-algebra/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as /pages/algebra, /pages/trigonometry, /pages/set-theory).
 * Sections are auto-discovered from the child directories on disk; the
 * old hand-authored hub content was migrated as follows (2026-07-31):
 *
 *   - formulas / definitions / matrices articles -> `hubDescription` in
 *     the corresponding child page (formulas / definitions / matrix),
 *     re-surfaced here automatically via buildSectionData extraction
 *   - matrices 5-item anchor list  -> augment on the matrix section
 *   - Symbols blurb                -> prose-only section (links outside
 *                                     the section, to /math-symbols);
 *                                     stray "RetryClaude can make
 *                                     mistakes" artifact stripped
 *   - Tools slider (5 tools)       -> prose-only section (cross-section
 *                                     /visual-tools links)
 *   - Introduction to Linear Algebra -> `article` prop of SectionFrontPage
 *   - formulas/definitions scrolling widgets -> dropped; the auto
 *     formulas/definitions sections render the same DB modules
 *
 * The old SEO <Head> block is kept verbatim (duplicate canonical link
 * removed). Child pages formulas / definitions / matrix / calculators
 * received `hubMeta` (name + hubDescription) for card extraction.
 */

import Head from 'next/head';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';


const pageMeta = {
  title: 'Linear Algebra',
  subtitle: 'Vectors, matrices, and transformations — from systems of equations to eigenvalues, decompositions, and orthogonality.',
  breadcrumbUrl: '/linear-algebra',
};


/* ================================================================
   CUSTOM SECTIONS
   ================================================================ */

const customSections = {

  // The old hub's curated anchor list into the Matrix Theory guide,
  // rendered as a compact card under the auto-extracted matrix intro.
  'matrix': {
    mode: 'augment',
    position: 'after',
    body: `
      <style>
        .lmc-mx-card { font-family: 'DM Sans', system-ui, sans-serif; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px 16px 10px; margin-top: 14px; }
        .lmc-mx-head { font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #64748b; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px solid #f1f5f9; }
        .lmc-mx-item { padding: 4px 0; font-size: 13.5px; line-height: 1.5; }
        .lmc-mx-item a { color: #2563eb; text-decoration: none; font-weight: 600; }
        .lmc-mx-item a:hover { text-decoration: underline; }
        .lmc-mx-item span { color: #6b7280; }
      </style>
      <div class="lmc-mx-card">
        <div class="lmc-mx-head">Inside the Matrix Guide</div>
        <div class="lmc-mx-item"><a href="/linear-algebra/matrix#definition">Definitions and Notations</a> <span>&mdash; how matrices are written using different types of brackets (square, parentheses, vertical bars) and basic matrix notation conventions</span></div>
        <div class="lmc-mx-item"><a href="/linear-algebra/matrix#indexing">Elements, Structure and Indexing</a> <span>&mdash; how matrix elements are organized in rows and columns, the 1-based indexing system, and referencing specific elements by row and column indices</span></div>
        <div class="lmc-mx-item"><a href="/linear-algebra/matrix#classification">Types of Matrices</a> <span>&mdash; classifications based on shape (column, row, rectangular, square) and content type (numeric, variable/symbolic, mixed, zero)</span></div>
        <div class="lmc-mx-item"><a href="/linear-algebra/matrix#properties">Matrix Properties</a> <span>&mdash; size/dimension, rank, determinant, eigenvalues/eigenvectors, and trace, and their importance in matrix operations and transformations</span></div>
        <div class="lmc-mx-item"><a href="/linear-algebra/matrix#special">Square Matrices and Special Cases</a> <span>&mdash; special diagonal patterns (diagonal, upper and lower triangular) and element relationships (symmetric, skew-symmetric, identity, scalar)</span></div>
      </div>
    `,
  },

  // Cross-section interactive tools the old hub promoted in its slider,
  // rendered as card tiles matching the auto-generated tool cards.
  'tools': {
    mode: 'prose-only',
    title: 'Interactive Tools',
    body: `
      <style>
        .lmc-tools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; font-family: 'DM Sans', system-ui, sans-serif; }
        .lmc-tool-card { display: block; background: #fff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 20px 18px; text-decoration: none; color: inherit; transition: all 0.2s; }
        .lmc-tool-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); border-color: #2563eb; }
        .lmc-tool-badge { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 3px 8px; border-radius: 4px; background: #eff6ff; color: #2563eb; margin-bottom: 10px; }
        .lmc-tool-title { font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 6px; }
        .lmc-tool-desc { font-size: 13.5px; color: #64748b; line-height: 1.5; }
        .lmc-tool-open { display: inline-block; font-size: 13px; font-weight: 700; color: #2563eb; margin-top: 12px; }
      </style>
      <div class="lmc-tools-grid">
        <a class="lmc-tool-card" href="/visual-tools/determinant-calculator">
          <span class="lmc-tool-badge">Calculator</span>
          <div class="lmc-tool-title">Determinant Visual Calculator with Steps</div>
          <div class="lmc-tool-desc">Visual, interactive determinant calculator with step-by-step explanations.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/visual-tools/gauss-elimination">
          <span class="lmc-tool-badge">Visual Tool</span>
          <div class="lmc-tool-title">Gaussian Elimination Visualizer</div>
          <div class="lmc-tool-desc">Learn the principles of Gaussian elimination with our interactive visual tool.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/visual-tools/matrix-multiplication">
          <span class="lmc-tool-badge">Visual Tool</span>
          <div class="lmc-tool-title">Matrix Multiplication Animated</div>
          <div class="lmc-tool-desc">Learn the process of matrix multiplication explained step after step with our interactive widget.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/linear-algebra/visual-tools/matrix-transpose">
          <span class="lmc-tool-badge">Visual Tool</span>
          <div class="lmc-tool-title">Matrix Transposition Visualizer</div>
          <div class="lmc-tool-desc">Learn the principles of matrix transposition using this interactive visual tool.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/visual-tools/matrix-types">
          <span class="lmc-tool-badge">Visual Tool</span>
          <div class="lmc-tool-title">Matrix Types Generator</div>
          <div class="lmc-tool-desc">Learn different types of square matrices and their special features with this interactive visual tool.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
      </div>
    `,
  },

  // Pointer to the symbols reference, which lives outside this section.
  'symbols': {
    mode: 'prose-only',
    title: 'Linear Algebra Symbols Reference',
    link: '/math-symbols/linear-algebra',
    linkText: 'View Linear Algebra Symbols',
    body: `
      <p>Our <a href="/math-symbols/linear-algebra">Linear Algebra Symbols page</a> presents a well-organized collection of notation fundamental to matrix theory and vector spaces. This reference serves as a valuable resource for students and practitioners working with linear systems.</p>

      <p>The page features symbols categorized by their mathematical applications, including matrix operations (A&#8868;, det(A), tr(A)), vector spaces (&#8477;&#8319;, &#10216;v,w&#10217;, &#8741;v&#8741;), and eigenvalue concepts (Av&nbsp;=&nbsp;&lambda;v). It covers advanced topics like matrix decompositions (LU, QR, SVD) and linear transformations, alongside practical notation for representing matrices and vectors in LaTeX.</p>

      <p>Every symbol includes its proper mathematical notation, corresponding LaTeX code for typesetting, and a brief explanation of its mathematical significance &mdash; making this an indispensable reference for anyone working with linear algebra in academic research or applications.</p>
    `,
  },

};


/* ================================================================
   INTRO ARTICLE (rendered by SectionFrontPage's ArticleBlock)
   ================================================================ */

const introArticle = {
  title: 'Introduction to Linear Algebra',
  content: `Linear algebra is a field of mathematics that focuses on studying vectors, matrices, and the relationships between them, forming the mathematical framework for analyzing structures and transformations in multidimensional spaces. It introduces powerful tools to understand and solve problems where quantities interact linearly, making it fundamental to numerous disciplines.

This field begins with vectors—quantities that have both magnitude and direction—and their operations, such as addition and scaling. It extends to matrices, which are grid-like arrangements of numbers used to represent systems of equations or transformations. Learning how to manipulate matrices and understand their properties is a key part of linear algebra.

Students also explore vector spaces, the environments in which vectors live, and subspaces, which reveal structure and constraints within these spaces. Concepts like linear independence, span, and basis give insight into how vectors relate and interact. The study of linear transformations, which describe how vectors change under operations like rotations or scaling, helps build a deeper understanding of the subject.

To help students navigate these foundational concepts, we created a dedicated Matrix Theory section that provides an in-depth exploration of matrices - from basic definitions and notations to various matrix types and properties. This interactive guide covers matrix structure, indexing, special cases of square matrices, and key matrix properties, with clear mathematical notation and visual examples throughout. The section serves as both a comprehensive learning resource and a quick reference for understanding these essential building blocks of linear algebra.

Eigenvalues and eigenvectors, pivotal concepts in linear algebra, allow students to uncover hidden properties of transformations. Techniques like solving systems of equations, matrix decomposition, and understanding projections or orthogonality are practical outcomes of this study.

Ultimately, linear algebra provides a foundation for solving abstract and applied problems, developing skills to think logically, recognize patterns, and simplify complex systems. It equips students with a versatile toolkit for further studies in mathematics, sciences, engineering, and beyond.`,
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/linear-algebra', { customSections });

  const keyWords = [
    'linear algebra',
    'elementary linear algebra',
    'matrix algebra',
    'vector algebra',
    'algebra and linear algebra',
    'linear transformations',
    'vector spaces',
    'matrices and vectors'
  ];

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
      introArticle,
      keyWords,
      canonicalUrl: 'https://www.learnmathclass.com/linear-algebra',
      lastModified: new Date().toISOString(),
    },
  };
}


export default function LinearAlgebraPage({ pageMeta, sections, sectionData, introArticle, keyWords, canonicalUrl, lastModified }) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Linear Algebra - Learn Mathematics",
    "description": "Comprehensive guide to linear algebra covering vectors, matrices, transformations, and core concepts. Learn about vector spaces, eigenvalues, and their applications.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Linear Algebra",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  };

  const pageTitle = "Linear Algebra - Vectors, Matrices & Transformations | Learn Math Class";
  const pageDescription = "Master linear algebra with our comprehensive guide covering vectors, matrices, transformations, and core concepts. Perfect for students and educators.";

  return (
    <>
      {/* Legacy hub SEO block, kept verbatim (duplicate canonical removed) */}
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
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <SectionFrontPage
        meta={pageMeta}
        sections={sections}
        sectionData={sectionData}
        article={introArticle}
      />
    </>
  );
}
