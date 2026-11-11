// pages/probability/methods/index.jsx
// Methods-tier section hub for probability ("section hub + own items").
// It shows its own items (probability rules, conditioning, Bayes, tables, word problems)
// from probability.methods.js, and gathers the two sub-hubs (random variables,
// distributions) as link cards into their own hubs.
// Data: app/components/calculation-methods/data/probability/*.methods.js

import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import CalculationsExplorer from '@/app/components/calculation-methods/CalculationsExplorer'
import { prepareHubData, itemHref, isPlanned } from '@/app/components/methods/resolveMethodRefs'
import { CLEAN } from '@/app/components/calculation-methods/cleanTheme'
import { processContent } from '@/app/utils/contentProcessor'
import probabilityMethods from '@/app/components/calculation-methods/data/probability/probability.methods'
import randomVariablesMethods from '@/app/components/calculation-methods/data/probability/random-variables.methods'
import distributionsMethods from '@/app/components/calculation-methods/data/probability/distributions.methods'

const SITE = 'https://www.learnmathclass.com'

// Hub is released separately from its leaves; flip to true once it meets the release criteria.
const HUB_INDEXED = false

// Sub-hubs in the order of the URL tree. `key` is the category id and the id prefix.
const SUB_HUBS = [
  { key: 'random-variables', label: 'Random variables', data: randomVariablesMethods },
  { key: 'distributions', label: 'Distributions', data: distributionsMethods },
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
  const own = prepareHubData(probabilityMethods)
  return {
    ...own,
    methods: [...own.methods, ...SUB_HUBS.flatMap(subHubItems)],
    categories: [
      ...probabilityMethods.categories,
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
  const url = probabilityMethods.hubPath

  const seoData = {
    title: 'Probability Methods: Rules, Conditional Probability, Bayes, Distributions | Learn Math Class',
    description:
      'Every probability how-to on one page: basic rules, conditional probability, Bayes, trees, tables, word problems, and random-variable and distribution methods.',
    keywords: [
      'probability methods',
      'how to solve probability problems',
      'conditional probability',
      'bayes theorem steps',
      'expected value',
      'probability distributions',
    ].join(', '),
    url,
    robots: HUB_INDEXED ? 'index, follow' : 'noindex, follow',
  }

  const schemas = {
    learningResource: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: 'Probability Methods',
      description: seoData.description,
      url: `${SITE}${url}`,
      educationalLevel: 'High School, College',
      learningResourceType: 'Methods collection',
      about: { '@type': 'Thing', name: 'Probability' },
      inLanguage: 'en',
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Probability', item: `${SITE}/probability` },
        { '@type': 'ListItem', position: 3, name: 'Methods', item: `${SITE}${url}` },
      ],
    },
  }

  return { props: { seoData, schemas } }
}

const intro =
  'Every how-to in probability on one page: the basic rules, conditional probability, Bayes, trees, tables and word problems here, and the methods for [random variables](!/probability/random-variables/methods) and [distributions](!/probability/distributions/methods) gathered from their own hubs. Each card opens its page or its rule card; the rules link back to the [lesson](!/probability) where they are explained.'

export default function ProbabilityMethodsHub(props) {
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
          Probability Methods: Rules, Conditioning, Bayes and Distributions
        </h1>
        <p style={{ fontSize: '16.5px', lineHeight: 1.6, maxWidth: '820px', margin: '0 0 22px' }}>{processContent(intro)}</p>
        <CalculationsExplorer data={hubData} />
      </div>
    </>
  )
}
