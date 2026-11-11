// pages/set-theory/methods/index.jsx
// Methods-tier sub-hub (new route, no page existed here before).
// Data: app/components/calculation-methods/data/set-theory/set-theory.methods.js

import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import CalculationsExplorer from '@/app/components/calculation-methods/CalculationsExplorer'
import { prepareHubData } from '@/app/components/methods/resolveMethodRefs'
import { CLEAN } from '@/app/components/calculation-methods/cleanTheme'
import { processContent } from '@/app/utils/contentProcessor'
import setTheoryMethods from '@/app/components/calculation-methods/data/set-theory/set-theory.methods'

const SITE = 'https://www.learnmathclass.com'

// Hub is released separately from its leaves; flip to true once it meets the release criteria.
const HUB_INDEXED = false

export async function getStaticProps() {
  const url = setTheoryMethods.hubPath

  const seoData = {
    title: "Set Theory Methods: Venn Diagrams, Power Sets, Set Identities | Learn Math Class",
    description:
      "Every set theory how-to on one page: union, intersection, difference and complement, Venn diagrams, set identities, power sets, cardinality and survey problems.",
    keywords: ["set theory methods","how to fill a venn diagram","how to prove set identities","power set","cartesian product","venn diagram survey problems"].join(', '),
    url,
    robots: HUB_INDEXED ? 'index, follow' : 'noindex, follow',
  }

  const schemas = {
    learningResource: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Set Theory Methods',
      description: seoData.description,
      url: `${SITE}${url}`,
      educationalLevel: 'High School, College',
      learningResourceType: 'Methods collection',
      about: { '@type': 'Thing', name: 'Set theory' },
      inLanguage: 'en',
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Set theory', item: `${SITE}/set-theory` },
        { '@type': 'ListItem', position: 3, name: 'Methods', item: `${SITE}${url}` },
      ],
    },
  }

  return { props: { seoData, schemas } }
}

const intro =
  "Every method for working with sets on one page, from the basic operations to Venn diagrams, set identities, power sets, Cartesian products and survey problems. Each method links to the rules it uses and to the [set theory lesson](!/set-theory) where they are explained."

export default function SetTheoryMethodsHub(props) {
  const { seoData, schemas } = props
  const hubData = prepareHubData(setTheoryMethods)

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`${SITE}${seoData.url}`} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`${SITE}${seoData.url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="robots" content={seoData.robots} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      </Head>
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar side="right" sidebarWidth="45px" panelWidth="200px" iconColor="white" panelBackgroundColor="#f2f2f2" />
      <Breadcrumb />
      <br />
      <div style={{ maxWidth: CLEAN.maxWidth, margin: '0 auto', padding: `0 ${CLEAN.gutter} 80px`, color: CLEAN.text }}>
        <h1 style={{ color: CLEAN.title, fontSize: '32px', lineHeight: 1.2, margin: '0 0 10px' }}>
          Set Theory Methods: Set Operations, Venn Diagrams and Counting
        </h1>
        <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '820px', margin: '0 0 22px' }}>{processContent(intro)}</p>
        <CalculationsExplorer data={hubData} />
      </div>
    </>
  )
}
