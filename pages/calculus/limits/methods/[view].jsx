// pages/calculus/limits/methods/[view].jsx
// Methods-tier leaf pages for limits (composite and strategy).
// One data source: app/components/calculation-methods/data/calculus/limits.methods.js
// A leaf is built when its item has both `slug` and `page`.
// Robots tag comes from the item's `indexed` field (false → noindex, follow).

import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import MethodPage from '@/app/components/methods/MethodPage'
import { leafSlugs } from '@/app/components/methods/resolveMethodRefs'
import limitsMethods from '@/app/components/calculation-methods/data/calculus/limits.methods'
import FunctionLimit from '@/app/components/functions/limit/FunctionLimit'
import FunctionContinuity from '@/app/components/functions/continuity/FunctionContinuity'

const SITE = 'https://www.learnmathclass.com'

// Visual components this page may render inside "See it happen".
// Existing calculus tools, referenced by name from `visual.component` in the data file:
//   FunctionLimit      — /calculus/visual-tools/limit      (epsilon-delta-proofs)
//   FunctionContinuity — /calculus/visual-tools/continuity (continuity-check)
const VISUAL_COMPONENTS = { FunctionLimit, FunctionContinuity }

export async function getStaticPaths() {
  return {
    paths: leafSlugs(limitsMethods).map((slug) => ({ params: { view: slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const item = limitsMethods.methods.find((method) => method.slug === params.view)
  const seo = item.seo || {}
  const url = `${limitsMethods.hubPath}/${item.slug}`

  const seoData = {
    title: seo.title || `${item.name} | Learn Math Class`,
    description: seo.description || item.description || '',
    keywords: (seo.keywords || []).join(', '),
    url,
    robots: item.indexed ? 'index, follow' : 'noindex, follow',
  }

  const schemas = {
    learningResource: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: item.page.h1 || item.name,
      description: seoData.description,
      url: `${SITE}${url}`,
      educationalLevel: 'High School, College',
      learningResourceType: item.level === 'strategy' ? 'Decision guide' : 'How-to guide',
      about: { '@type': 'Thing', name: 'Limits' },
      inLanguage: 'en',
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Calculus', item: `${SITE}/calculus` },
        { '@type': 'ListItem', position: 3, name: 'Limits', item: `${SITE}/calculus/limits` },
        { '@type': 'ListItem', position: 4, name: 'Methods', item: `${SITE}${limitsMethods.hubPath}` },
        { '@type': 'ListItem', position: 5, name: item.page.h1 || item.name, item: `${SITE}${url}` },
      ],
    },
  }

  return { props: { view: params.view, seoData, schemas } }
}

export default function LimitMethodView(props) {
  const { view, seoData, schemas } = props

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
      <MethodPage hub={limitsMethods} slug={view} components={VISUAL_COMPONENTS} />
    </>
  )
}
