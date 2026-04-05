import Head from 'next/head';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import ToolSectionPage from '@/app/components/page-components/front-page/ToolSectionPage';
import buildSectionData from '@/app/components/page-components/front-page/buildSectionData';


export async function getStaticProps() {

  const keyWords = ['', '', '', '', ''];

  // Build parent section data — e.g. '/algebra'
  const parentRoute = '/parent-slug';
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
        title: "Tool Section Title",
        subtitle: "Short description for the hero area.",
        breadcrumbUrl: `${parentRoute}/${toolSlug}`,
        parentTitle: "Parent Section Title",
      },
      // Optional article — remove if not needed
      article: {
        title: "Why Use These Tools?",
        content: "Every tool shows the complete process — not just the answer. All tools are free, work on any device, and require no sign-up.",
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
    </>
  );
}