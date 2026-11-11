// pages/calculus/derivatives/techniques/index.jsx
// Methods-tier sub-hub for derivatives (overwrites the former long-form page;
// the old version is kept in line1-backups/methods-2026-11-07/).
// Data: app/components/calculation-methods/data/calculus/derivatives.methods.js

import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import CalculationsExplorer from '@/app/components/calculation-methods/CalculationsExplorer'
import { prepareHubData } from '@/app/components/methods/resolveMethodRefs'
import { CLEAN } from '@/app/components/calculation-methods/cleanTheme'
import { processContent } from '@/app/utils/contentProcessor'
import derivativesMethods from '@/app/components/calculation-methods/data/calculus/derivatives.methods'

const SITE = 'https://www.learnmathclass.com'

// Hub is released separately from its leaves; flip to true once it meets the release criteria.
const HUB_INDEXED = false

export async function getStaticProps() {
  const url = derivativesMethods.hubPath

  const seoData = {
    title: 'Derivative Techniques: How to Differentiate Any Function | Learn Math Class',
    description:
      'Every differentiation task in one place: single-rule moves, multi-step techniques (chain rule, implicit, logarithmic, parametric), how to choose a technique, and word problems.',
    keywords: [
      'differentiation techniques',
      'how to differentiate',
      'derivative rules step by step',
      'chain rule',
      'implicit differentiation',
      'logarithmic differentiation',
      'parametric differentiation',
      'which derivative rule to use',
    ].join(', '),
    url,
    robots: HUB_INDEXED ? 'index, follow' : 'noindex, follow',
  }

  const schemas = {
    learningResource: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Derivative Techniques',
      description: seoData.description,
      url: `${SITE}${url}`,
      educationalLevel: 'High School, College',
      learningResourceType: 'Methods collection',
      about: { '@type': 'Thing', name: 'Derivatives' },
      inLanguage: 'en',
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Calculus', item: `${SITE}/calculus` },
        { '@type': 'ListItem', position: 3, name: 'Derivatives', item: `${SITE}/calculus/derivatives` },
        { '@type': 'ListItem', position: 4, name: 'Techniques', item: `${SITE}${url}` },
      ],
    },
  }

  return { props: { seoData, schemas } }
}

const intro =
  'Every differentiation task on one page, from single-rule moves to multi-step techniques. Pick the task that matches your problem; each one links to the rules it uses and to the [lesson](!/calculus/derivatives) where they are explained.'

export default function DerivativeTechniquesHub(props) {
  const { seoData, schemas } = props
  const hubData = prepareHubData(derivativesMethods)

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
          Derivative Techniques: How to Differentiate Any Function
        </h1>
        <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '820px', margin: '0 0 22px' }}>{processContent(intro)}</p>
        <CalculationsExplorer data={hubData} />
      </div>
    </>
  )
}
