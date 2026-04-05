import Head from 'next/head';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import SectionFrontPage from '@/app/components/page-components/front-page/SectionFrontPage';
import buildSectionData from '@/app/components/page-components/front-page/buildSectionData';


export async function getStaticProps() {

  const keyWords = ['', '', '', '', ''];

  const { sections, sectionData } = await buildSectionData('/section-slug');

  return {
    props: {
      sections,
      sectionData,
      seoData: {
        title: "Section Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/section-slug",
        name: "Section Title",
      },
      pageMeta: {
        title: "Section Title",
        subtitle: "Short description of this section for the hero area.",
        breadcrumbUrl: "/section-slug",
      },
      // Optional article — remove if not needed
      article: {
        title: "What is This Section About?",
        content: "Brief introductory article that appears between the topic strip and the first section content.",
      },
    },
  };
}


export default function SectionFrontPageTemplate({ seoData, sections, sectionData, pageMeta, article }) {

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

      <SectionFrontPage
        meta={pageMeta}
        sections={sections}
        sectionData={sectionData}
        theme="deepBlue"
        rightOffset="45px"
        article={article}
      />
    </>
  );
}