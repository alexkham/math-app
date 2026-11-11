// pages/linear-algebra/orthogonality/methods/index.jsx
// Methods-tier sub-hub (new route, no page existed here before).
// Data: app/components/calculation-methods/data/linear-algebra/orthogonality.methods.js

import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import CalculationsExplorer from '@/app/components/calculation-methods/CalculationsExplorer'
import { prepareHubData } from '@/app/components/methods/resolveMethodRefs'
import { CLEAN } from '@/app/components/calculation-methods/cleanTheme'
import { processContent } from '@/app/utils/contentProcessor'
import orthogonalityMethods from '@/app/components/calculation-methods/data/linear-algebra/orthogonality.methods'

const SITE = 'https://www.learnmathclass.com'

// Hub is released separately from its leaves; flip to true once it meets the release criteria.
const HUB_INDEXED = false

export async function getStaticProps() {
  const url = orthogonalityMethods.hubPath

  const seoData = {
    title: "Orthogonality Methods: Projections, Gram-Schmidt, Least Squares | Learn Math Class",
    description:
      "Every orthogonality method in one place: inner products, checking orthogonal sets, projecting onto subspaces, the Gram-Schmidt process, least squares and fitting data.",
    keywords: ["orthogonal projection","gram-schmidt process","least squares","orthogonal set check","inner product","least squares fitting"].join(', '),
    url,
    robots: HUB_INDEXED ? 'index, follow' : 'noindex, follow',
  }

  const schemas = {
    learningResource: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Orthogonality Methods',
      description: seoData.description,
      url: `${SITE}${url}`,
      educationalLevel: 'High School, College',
      learningResourceType: 'Methods collection',
      about: { '@type': 'Thing', name: 'Orthogonality' },
      inLanguage: 'en',
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Linear algebra', item: `${SITE}/linear-algebra` },
        { '@type': 'ListItem', position: 3, name: 'Orthogonality', item: `${SITE}/linear-algebra/orthogonality` },
        { '@type': 'ListItem', position: 4, name: 'Methods', item: `${SITE}${url}` },
      ],
    },
  }

  return { props: { seoData, schemas } }
}

const intro =
  "Every method built on orthogonality on one page, from inner products and projections to Gram-Schmidt and least squares. Each links to the [orthogonality lesson](!/linear-algebra/orthogonality)."

export default function OrthogonalityMethodsHub(props) {
  const { seoData, schemas } = props
  const hubData = prepareHubData(orthogonalityMethods)

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
          Orthogonality Methods: Inner Products, Projections, Gram-Schmidt
        </h1>
        <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '820px', margin: '0 0 22px' }}>{processContent(intro)}</p>
        <CalculationsExplorer data={hubData} />
      </div>
    </>
  )
}
