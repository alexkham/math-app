

/**
 * /pages/logic/index.jsx
 *
 * Section hub page on the buildSectionData / SectionFrontPage pattern
 * (same as the other migrated hubs). Sections are auto-discovered from
 * the child directories on disk; the old hand-authored hub content was
 * migrated as follows (2026-08-05):
 *
 *   - "Propositional Logic" section (intro + topic list + conclusion)
 *       -> the `article` prop (guest article block under the hero),
 *          per user directive — same treatment as /calculus
 *   - definitions description -> `hubDescription` in the definitions
 *       child page (formulas child already had a better one; the old
 *       hub's redundant formulas paragraph was dropped)
 *   - "Introduction to Mathematical Logic" -> prose-only custom
 *       section, placed first
 *   - Tools slider (4 tools) -> prose-only custom section, card tiles
 *       (fixed a leading-space href on the Syntax Tree Builder link)
 *   - Symbols blurb -> prose-only custom section (links to /math-symbols)
 *   - formulas/definitions widgets dropped; the auto sections render the
 *       same DBs (logicFormulas.js shim added for the *List naming)
 *
 * The old SEO <Head> block is kept verbatim (it was minimal: title,
 * description, keywords, canonical, WebPage schema).
 */

import Head from 'next/head';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import { buildSectionData } from '../../app/components/page-components/front-page/buildSectionData';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';


const pageMeta = {
  title: 'Mathematical Logic',
  subtitle: 'Propositions, predicates, proofs, and truth tables — the formal machinery of reasoning.',
  breadcrumbUrl: '/logic',
};


/* ================================================================
   CUSTOM SECTIONS
   ================================================================ */

const customSections = {

  // The old hub's intro block. The article slot is taken by the
  // propositional-logic piece, so the intro lives on as the first section.
  'introduction': {
    mode: 'prose-only',
    title: 'Introduction to Mathematical Logic',
    insertBefore: 'formulas',
    body: `
      <style>
        .lmc-logic-intro p { margin: 0 0 14px; }
      </style>
      <div class="lmc-logic-intro">
        <p>Mathematical logic studies the principles of reasoning and provides a rigorous framework to analyze the structure of statements and arguments. It begins with the basics of <strong>propositional logic</strong>, where statements are combined using logical operators like <strong>and</strong>, <strong>or</strong>, and <strong>not</strong>, to form compound statements and evaluate their truth.</p>
        <p>A deeper layer is <strong>predicate logic</strong>, which extends propositional logic by introducing quantifiers like <strong>for all</strong> and <strong>there exists</strong>, allowing reasoning about objects and their properties. Central to this is the concept of <strong>logical validity</strong>, which examines whether conclusions follow from premises regardless of specific interpretations.</p>
        <p>Mathematical logic also explores <strong>formal systems</strong>, which consist of axioms, rules of inference, and symbols for constructing proofs. Key topics include <strong>set theory</strong>, the foundation of mathematics, and <strong>model theory</strong>, which studies the relationship between formal languages and their interpretations.</p>
        <p>Another significant area is <strong>computability theory</strong>, which asks fundamental questions about what problems can be solved by algorithms, and <strong>proof theory</strong>, which investigates the nature and structure of mathematical proofs.</p>
        <p>Applications of mathematical logic are vast, influencing fields like <strong>computer science</strong>, where it underpins algorithms and programming languages, and <strong>philosophy</strong>, where it sharpens reasoning. It develops skills in abstraction, critical thinking, and formal reasoning, making it a cornerstone of mathematical rigor.</p>
      </div>
    `,
  },

  // The old hub's tools slider, rendered as card tiles matching the
  // auto-generated tool cards.
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
        <a class="lmc-tool-card" href="/logic/truth-tables">
          <span class="lmc-tool-badge">Generator</span>
          <div class="lmc-tool-title">Truth Tables Generator</div>
          <div class="lmc-tool-desc">Build custom truth tables for any logical expression. Enter your own propositions and operators to dynamically generate complete truth tables with step-by-step evaluation.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/tables/truth-tables">
          <span class="lmc-tool-badge">Reference</span>
          <div class="lmc-tool-title">Truth Tables</div>
          <div class="lmc-tool-desc">Explore truth tables for all logical operators including AND, OR, XOR, NAND, NOR, and XNOR. See how different combinations of truth values affect logical outcomes with clear explanations.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/logic/propositional-logic/syntax/normal-forms">
          <span class="lmc-tool-badge">Converter</span>
          <div class="lmc-tool-title">Normal Forms Converter</div>
          <div class="lmc-tool-desc">Convert logical expressions to normal forms (both DNF and CNF) with truth table illustration using our interactive tool.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
        <a class="lmc-tool-card" href="/logic/propositional-logic/syntax/tree-builder">
          <span class="lmc-tool-badge">Visual Tool</span>
          <div class="lmc-tool-title">Syntax Tree Builder</div>
          <div class="lmc-tool-desc">Use the interactive Syntax Tree Builder to learn propositional logic syntax rules visually.</div>
          <span class="lmc-tool-open">Open tool &rarr;</span>
        </a>
      </div>
    `,
  },

  // Pointer to the symbols reference, which lives outside this section.
  'symbols': {
    mode: 'prose-only',
    title: 'Logic Symbols Reference',
    link: '/math-symbols/math-logic',
    linkText: 'View Logic Symbols',
    body: `
      <p>Our <a href="/math-symbols/math-logic">Mathematical Logic Symbols page</a> provides a comprehensive collection of symbols essential for working with formal logic systems. This reference includes detailed categorization of symbols across multiple domains of mathematical logic.</p>

      <p>Explore symbols organized by functional categories including logical operations (&not;, &and;, &or;), quantifiers (&forall;, &exist;), set operations (&isin;, &sube;, &cap;), relation symbols (=, &ne;, &le;), and specialized notation systems. The page features both basic symbols like implication (&rarr;) and biconditional (&harr;), as well as advanced concepts from temporal modal logic (&#9633;, &#9671;), type theory and lambda calculus (&lambda;, &equiv;).</p>

      <p>Each symbol is presented with its corresponding LaTeX code and a brief explanation of its meaning and usage, making this an invaluable resource for students, educators, and professionals working with mathematical proofs, set theory, or formal logic systems.</p>
    `,
  },

};


/* ================================================================
   GUEST ARTICLE (rendered by SectionFrontPage's ArticleBlock)
   The old hub's "Propositional Logic" section, lightly copy-edited.
   ================================================================ */

const linkStyle = { color: '#1565c0', textDecoration: 'underline' };
const liStyle = { padding: '6px 0 6px 14px', borderLeft: '3px solid #e2e8f0', marginBottom: 8, listStyle: 'none' };

const propositionalLogicArticle = {
  title: 'Propositional Logic',
  content: (
    <>
      <p>Propositional logic, also known as propositional calculus or sentential logic, forms a foundational sub-field of mathematical logic along with other sub-fields such as first-order logic, higher-order logic, modal logic, intuitionistic logic, temporal logic, set theory, model theory, proof theory, and recursion theory. Propositional logic provides a formal system for representing and analyzing statements that are either true or false.</p>

      <p><strong>It includes:</strong></p>

      <ul style={{ margin: '0 0 16px', paddingLeft: 0 }}>
        <li style={liStyle}><strong>Syntax</strong> — the formal structure, including propositions (typically represented by variables like p, q, r) and logical connectives (AND, OR, NOT, implies, and others).</li>
        <li style={liStyle}><strong>Semantics</strong> — how truth values are determined using truth tables, and how tautologies (always true) and contradictions (always false) are identified.</li>
        <li style={liStyle}><strong>Equivalences</strong> — laws like De Morgan&rsquo;s laws, distributive laws, and other equivalences that allow for simplification. Not all logical equivalences are laws: all laws are logical equivalences, but some equivalences are derived, conditional, or context-dependent rather than fundamental enough to be named as laws. Learn more about the <a href="/logic/propositional-logic/laws" style={linkStyle}>basic laws</a> of propositional logic and other <a href="/logic/propositional-logic/semantics/equivalences" style={linkStyle}>equivalences</a>.</li>
        <li style={liStyle}><strong>Inference rules</strong> — formal rules such as modus ponens, modus tollens, and others that allow for step-by-step proofs.</li>
        <li style={liStyle}><strong>Normal forms</strong> — standard ways to represent logical formulas, like conjunctive normal form (CNF) and disjunctive normal form (DNF).</li>
        <li style={liStyle}><strong>Proof techniques</strong> — methods like proof by contradiction, direct proof, and truth tables to establish the validity of arguments.</li>
        <li style={liStyle}><strong>Truth tables</strong> — used in sentential logic to determine the truth values of logical expressions based on their components.</li>
        <li style={liStyle}><strong>Applications</strong> — propositional logic is widely used in computer science (circuit design, program verification), artificial intelligence (knowledge representation, automated reasoning), philosophy (formal analysis of arguments), and many other fields.</li>
      </ul>

      <p>The study of propositional logic establishes the foundation for more complex logical systems while providing essential tools for formal reasoning across numerous disciplines. The <a href="/logic/propositional-logic" style={linkStyle}>dedicated propositional logic section</a> develops each of these topics in depth.</p>
    </>
  ),
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/logic', { customSections });

  const keyWords = [
    'mathematical logic',
    'logic formulas',
    'logic definitions',
    'propositional logic',
    'predicate logic',
    'formal systems',
    'mathematical proofs',
    'logic tutorial',
    'formal logic'
  ];

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
      keyWords,
      canonicalUrl: 'https://www.learnmathclass.com/logic',
      lastModified: new Date().toISOString(),
    },
  };
}


export default function LogicPage({ pageMeta, sections, sectionData, keyWords, canonicalUrl, lastModified }) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mathematical Logic - Learn Mathematics",
    "description": "Comprehensive guide to mathematical logic including formulas, definitions, and core concepts.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Mathematical Logic",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  };

  const pageTitle = "Mathematical Logic - Formulas, Definitions & Concepts | Learn Math Class";
  const pageDescription = "Master mathematical logic with our comprehensive collection of formulas, definitions, and core concepts. Perfect for students and educators.";

  return (
    <>
      {/* Legacy hub SEO block, kept verbatim */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />
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
        article={propositionalLogicArticle}
      />
    </>
  );
}
