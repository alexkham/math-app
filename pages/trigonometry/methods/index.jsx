// pages/trigonometry/methods/index.jsx
// Methods-tier section hub for trigonometry ("section hub + own items").
// It shows its own items (angles, unit circle, triangles, graphs, word problems)
// from trigonometry.methods.js, and gathers the two sub-hubs (equations,
// identities) as link cards into their own hubs.
// Data: app/components/calculation-methods/data/trigonometry/*.methods.js

import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import CalculationsExplorer from '@/app/components/calculation-methods/CalculationsExplorer'
import { prepareHubData, itemHref, isPlanned } from '@/app/components/methods/resolveMethodRefs'
import { CLEAN } from '@/app/components/calculation-methods/cleanTheme'
import { processContent } from '@/app/utils/contentProcessor'
import trigonometryMethods from '@/app/components/calculation-methods/data/trigonometry/trigonometry.methods'
import trigEquationsMethods from '@/app/components/calculation-methods/data/trigonometry/equations.methods'
import trigIdentitiesMethods from '@/app/components/calculation-methods/data/trigonometry/identities.methods'

const SITE = 'https://www.learnmathclass.com'

// Hub is released separately from its leaves; flip to true once it meets the release criteria.
const HUB_INDEXED = false

// Sub-hubs in the order of the URL tree. `key` is the category id and the id prefix.
const SUB_HUBS = [
  { key: 'equations', label: 'Equations', data: trigEquationsMethods },
  { key: 'identities', label: 'Identities', data: trigIdentitiesMethods },
]

// Every item of a sub-hub becomes a link card: leaves link to their page,
// atomic cards link to their anchor on the sub-hub. Works on the raw items
// (with `page`), since itemHref needs it to tell a live leaf from a planned one.
function subHubItems(subHub) {
  return subHub.data.methods.map((item) => {
    const atomic = !item.slug
    return {
      id: `${subHub.key}-${item.id}`,
      name: item.name,
      description: item.description || item.when || '',
      uses: item.uses || (atomic ? item.subtitle : undefined),
      level: item.level,
      tag: item.tag,
      meta: item.meta || (atomic ? 'rule card on the hub' : undefined),
      href: itemHref(subHub.data, item) || undefined,
      planned: isPlanned(item),
      category: subHub.key,
    }
  })
}

function buildSectionHub() {
  const own = prepareHubData(trigonometryMethods)
  return {
    ...own,
    methods: [...own.methods, ...SUB_HUBS.flatMap(subHubItems)],
    categories: [
      ...trigonometryMethods.categories,
      ...SUB_HUBS.map((subHub) => ({
        id: subHub.key,
        label: subHub.label,
        blurb: `${subHub.data.methods.filter((item) => item.slug).length} pages · ${subHub.data.methods.filter((item) => !item.slug).length} rule cards on their own hub`,
      })),
    ],
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
  }
}

export async function getStaticProps() {
  const url = trigonometryMethods.hubPath

  const seoData = {
    title: 'Trigonometry Methods: Angles, Triangles, Graphs, Equations and Identities | Learn Math Class',
    description:
      'Every how-to in trigonometry on one page: angles and the unit circle, solving triangles, graphs, inverse functions and word problems, plus the equation and identity methods.',
    keywords: [
      'trigonometry methods',
      'how to solve trigonometry problems',
      'unit circle',
      'law of sines and cosines',
      'trig equations',
      'trig identities',
    ].join(', '),
    url,
    robots: HUB_INDEXED ? 'index, follow' : 'noindex, follow',
  }

  const schemas = {
    learningResource: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Trigonometry Methods',
      description: seoData.description,
      url: `${SITE}${url}`,
      educationalLevel: 'High School, College',
      learningResourceType: 'Methods collection',
      about: { '@type': 'Thing', name: 'Trigonometry' },
      inLanguage: 'en',
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Trigonometry', item: `${SITE}/trigonometry` },
        { '@type': 'ListItem', position: 3, name: 'Methods', item: `${SITE}${url}` },
      ],
    },
  }

  return { props: { seoData, schemas } }
}

const intro =
  'Every how-to in trigonometry on one page: angles, the unit circle, triangles, graphs and word problems here, and the methods for [equations](!/trigonometry/equations/methods) and [identities](!/trigonometry/identities/methods) gathered from their own hubs. Each card opens its page or its rule card; the rules link back to the [lesson](!/trigonometry) where they are explained.'

export default function TrigonometryMethodsHub(props) {
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
          Trigonometry Methods: Angles, Triangles, Graphs and More
        </h1>
        <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '820px', margin: '0 0 22px' }}>{processContent(intro)}</p>
        <CalculationsExplorer data={hubData} />
      </div>
    </>
  )
}
