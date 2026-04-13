import Head from 'next/head';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import ToolSectionPage from '@/app/components/page-components/front-page/ToolSectionPage';
import buildSectionData from '@/app/components/page-components/front-page/buildSectionData';


export async function getStaticProps() {

  const keyWords = ['', '', '', '', ''];

  // Build parent section data — e.g. '/algebra'
  const parentRoute = '/linear-algebra';
  const toolSlug = 'calculators'; // or 'visual-tools'
  const { sections, sectionData } = await buildSectionData(parentRoute);

  // Extract this tool section's children
  const toolChildren = sectionData[toolSlug]?.children || [];

  // Sibling sections for sidebar and strip (exclude current)
  const siblingSections = sections.filter((s) => s.id !== toolSlug);

  return {
    props: {
      children: toolChildren,
      parentSections: siblingSections,
      parentSectionData: sectionData,
      toolType: toolSlug, // 'calculators' or 'visual-tools'
      seoData: {
        title: "Tool Section Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: `${parentRoute}/${toolSlug}`,
        name: "Tool Section Title",
      },
    pageMeta: {
  title: "Linear Algebra Calculators",
  subtitle: "Step-by-step calculators for matrices, vectors, and linear systems — every operation shows its full working.",
  breadcrumbUrl: `${parentRoute}/${toolSlug}`,
  parentTitle: "Linear Algebra",
  description: `Three professional calculators covering the core operations of linear algebra.

The [Matrix Calculator](!/linear-algebra/calculators/matrix) handles single-matrix operations (determinant, inverse, transpose, rank, trace, LU decomposition), two-matrix arithmetic (addition, subtraction, multiplication, Kronecker product, commutator), scalar operations, and linear system solving — all in one unified interface with a step-by-step explanation panel.

The [Vector Calculator](!/linear-algebra/calculators/vectors) covers single-vector properties (magnitude, unit vector, norms), two-vector operations (dot product, cross product, angle, projection), and multi-vector analysis (linear independence, Gram-Schmidt, span check, linear combinations).

The [Linear Systems Calculator](!/linear-algebra/calculators/linear-systems) solves systems of equations using four methods — Gaussian Elimination, Gauss-Jordan, Cramer's Rule, and the Inverse Method — with full calculation steps and a 2D graph for two-variable systems.`,
},
      // Optional article — remove if not needed
   article: {
  title: "Why Use These Tools?",
  content: `Linear algebra is built on procedures — row reduction, matrix inversion, dot products, eigenspaces — and the only way to truly understand them is to see every step, not just the final number. Each calculator here shows the complete working process alongside the result.

The [Matrix Calculator](!/linear-algebra/calculators/matrix) covers over 20 operations across four categories: single-matrix (determinant, inverse, transpose, rank, trace, LU decomposition), two-matrix arithmetic (multiplication, Kronecker product, commutator, anti-commutator), scalar operations, and linear system solving. A live explanation panel updates as you select each operation, and a calculation history tracks every result in the session.

The [Vector Calculator](!/linear-algebra/calculators/vectors) handles everything from basic magnitude and normalization to cross products, projections, Gram-Schmidt orthogonalization, linear independence checks, and span verification — supporting vectors of any dimension from 2D to 10D.

The [Linear Systems Calculator](!/linear-algebra/calculators/linear-systems) solves up to 10×10 systems using Gaussian Elimination, Gauss-Jordan, Cramer's Rule, or the Inverse Method. It renders the full augmented matrix, shows row operations step by step, and plots the solution graphically for two-variable systems.

All three tools are free, require no sign-up, and work on any device.`,
},
    },
  };
}


export default function ToolSectionPageTemplate({
  seoData,
  pageMeta,
  children,
  parentSections,
  parentSectionData,
  toolType,
  article,
}) {

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": seoData.name,
              "description": seoData.description,
              "keywords": seoData.keywords,
              "url": `https://www.learnmathclass.com${seoData.url}`,
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "mainEntity": {
                "@type": "Article",
                "name": seoData.name,
                "dateModified": new Date().toISOString(),
                "author": {
                  "@type": "Organization",
                  "name": "Learn Math Class",
                },
              },
            }),
          }}
        />
      </Head>

      <OperaSidebar
        side="right"
        sidebarWidth="45px"
        panelWidth="200px"
        iconColor="white"
        panelBackgroundColor="#f2f2f2"
      />

      <ToolSectionPage
        meta={pageMeta}
        children={children}
        parentSections={parentSections}
        parentSectionData={parentSectionData}
        toolType={toolType}
        theme="deepBlue"
        rightOffset="45px"
        article={article}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}