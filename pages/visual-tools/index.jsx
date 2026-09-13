import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import React from 'react'
import '@/pages/pages.css'
import VisualToolsPage from '@/app/components/page-components/visual-tools-page/VisualToolsPage'
import { buildAllToolsData } from '@/app/components/page-components/visual-tools-page/buildAllToolsData'


export async function getStaticProps() {

  const { items, total } = await buildAllToolsData()

  const keyWords = [
    'math visual tools',
    'interactive math tools',
    'math visualizers',
    'math animations',
    'visual math calculator',
    'interactive math learning',
    'math concept visualization',
    'free math tools'
  ]

  const intro = {
    title: 'Every visual tool on the site',
    description: `${total} interactive visualizers across ten branches of mathematics. Each one animates a single idea step by step, with editable inputs and a written explanation beside the picture.`,
    tip: 'Pick a subject tab to see its tools grouped by topic.',
  }

  const toolSchemaParts = items.map((tool) => ({
    "@type": "WebPage",
    "name": tool.title,
    "url": `https://www.learnmathclass.com${tool.href}`,
    "description": tool.shortDescription || tool.description || ''
  }))

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Math Visual Tools",
      "description": `${total} free interactive math visualizers covering arithmetic, algebra, functions, trigonometry, calculus, linear algebra, probability, combinatorics, set theory and complex numbers.`,
      "url": "https://www.learnmathclass.com/visual-tools",
      "inLanguage": "en-US",
      "keywords": keyWords.join(", "),
      "author": { "@type": "Organization", "name": "Learn Math Class" },
      "publisher": { "@type": "Organization", "name": "Learn Math Class" },
      "dateModified": new Date().toISOString(),
      "hasPart": toolSchemaParts
    },
    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Math Visual Tools",
      "itemListElement": items.map((tool, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": tool.title,
          "url": `https://www.learnmathclass.com${tool.href}`,
          "applicationCategory": "EducationalApplication",
          "description": tool.shortDescription || tool.description || ''
        }
      }))
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/visual-tools"
        }
      ]
    }
  }

  return {
    props: {
      toolsData: { items },
      total,
      intro,
      schemas,
      seoData: {
        title: "Math Visual Tools | Interactive Visualizers | Learn Math Class",
        description: `${total} free interactive math visualizers across ten branches of mathematics. Animated, step-by-step, and free to use.`,
        keywords: keyWords.join(", "),
        url: "/visual-tools",
        name: "Math Visual Tools"
      }
    }
  }
}


export default function VisualToolsHub({ seoData, toolsData, intro, schemas }) {
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collectionPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.itemList) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
      </Head>

      <br />
      <br />
      <br />
      <br />

      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />

      <VisualToolsPage
        tools={toolsData}
        pageTitle="Math Visual Tools"
        intro={intro}
        icon="📐"
        theme="deepBlue"
        sidebar={true}
        sidebarBrandName="Visual Tools"
        sidebarBrandSub="All sections"
      />

      <br />
      <br />
      <br />
    </>
  )
}
