// pages/calculus/methods/index.jsx
// Methods-tier section hub for calculus. It writes no content of its own:
// it aggregates the three sub-hub data files and shows every item as a link
// card into its sub-hub (leaf pages by URL, atomic cards by anchor).
// Data: app/components/calculation-methods/data/calculus/{limits,derivatives,integrals}.methods.js

import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import CalculationsExplorer from '@/app/components/calculation-methods/CalculationsExplorer'
import { itemHref, isPlanned } from '@/app/components/methods/resolveMethodRefs'
import { CLEAN } from '@/app/components/calculation-methods/cleanTheme'
import { processContent } from '@/app/utils/contentProcessor'
import limitsMethods from '@/app/components/calculation-methods/data/calculus/limits.methods'
import derivativesMethods from '@/app/components/calculation-methods/data/calculus/derivatives.methods'
import integralsMethods from '@/app/components/calculation-methods/data/calculus/integrals.methods'

const SITE = 'https://www.learnmathclass.com'
const URL_PATH = '/calculus/methods'

// Hub is released separately from its leaves; flip to true once it meets the release criteria.
const HUB_INDEXED = false

// Sub-hubs in the order of the URL tree. `key` is the category id and the id prefix.
const SUB_HUBS = [
  { key: 'limits', label: 'Limits', data: limitsMethods },
  { key: 'derivatives', label: 'Derivatives', data: derivativesMethods },
  { key: 'integrals', label: 'Integrals', data: integralsMethods },
]

// Every item of a sub-hub becomes a link card: leaves link to their page,
// atomic cards link to their anchor on the sub-hub. Planned items stay dimmed.
// Works on the raw items (with `page`), since itemHref needs it to tell a
// live leaf from a planned one; the heavy fields are dropped here instead.
function sectionItems(subHub) {
  return subHub.data.methods.map((item) => {
    const atomic = !item.slug
    const href = itemHref(subHub.data, item)
    return {
      id: `${subHub.key}-${item.id}`,
      name: item.name,
      description: item.description || item.when || '',
      uses: item.uses || (atomic ? item.subtitle : undefined),
      level: item.level,
      tag: item.tag,
      meta: item.meta || (atomic ? 'rule card on the hub' : undefined),
      href: href || undefined,
      planned: isPlanned(item),
      category: subHub.key,
    }
  })
}

function buildSectionHub() {
  return {
    hubPath: URL_PATH,
    hubLabel: 'calculus methods',
    variant: 'clean',
    filterStickyTop: 70,
    methods: SUB_HUBS.flatMap(sectionItems),
    categories: SUB_HUBS.map((subHub) => ({
      id: subHub.key,
      label: subHub.label,
      blurb: `${subHub.data.methods.filter((item) => item.slug).length} pages · ${subHub.data.methods.filter((item) => !item.slug).length} rule cards`,
    })),
    filters: {
      level: {
        label: 'Level',
        options: [
          { value: 'atomic', label: 'Atomic' },
          { value: 'composite', label: 'Composite' },
          { value: 'strategy', label: 'Strategy' },
          { value: 'applied', label: 'Applied' },
        ],
      },
    },
    sidebarLinks: {
      title: 'The three hubs',
      links: SUB_HUBS.map((subHub) => ({ url: subHub.data.hubPath, label: subHub.label })),
    },
  }
}

export async function getStaticProps() {
  const url = URL_PATH

  const seoData = {
    title: 'Calculus Methods: How to Evaluate Limits, Differentiate and Integrate | Learn Math Class',
    description:
      'Every how-to in calculus on one page: limit methods, differentiation techniques and integration techniques, from single-rule moves to word problems, each linked to its own step-by-step page.',
    keywords: [
      'calculus methods',
      'how to solve calculus problems',
      'limit techniques',
      'differentiation techniques',
      'integration techniques',
      'calculus step by step',
    ].join(', '),
    url,
    robots: HUB_INDEXED ? 'index, follow' : 'noindex, follow',
  }

  const schemas = {
    learningResource: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Calculus Methods',
      description: seoData.description,
      url: `${SITE}${url}`,
      educationalLevel: 'High School, College',
      learningResourceType: 'Methods collection',
      about: { '@type': 'Thing', name: 'Calculus' },
      inLanguage: 'en',
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Calculus', item: `${SITE}/calculus` },
        { '@type': 'ListItem', position: 3, name: 'Methods', item: `${SITE}${url}` },
      ],
    },
  }

  return { props: { seoData, schemas } }
}

const intro =
  'Every how-to in calculus, gathered from the three hubs: [limit methods](!/calculus/limits/methods), [differentiation techniques](!/calculus/derivatives/techniques) and [integration techniques](!/calculus/integrals/techniques). Each card opens its page, or its rule card on the hub it belongs to.'

export default function CalculusMethodsHub(props) {
  const { seoData, schemas } = props
  const hubData = buildSectionHub()

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
          Calculus Methods: How to Evaluate Limits, Differentiate and Integrate
        </h1>
        <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '820px', margin: '0 0 22px' }}>{processContent(intro)}</p>
        <CalculationsExplorer data={hubData} />
      </div>
    </>
  )
}
