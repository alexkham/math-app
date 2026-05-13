import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import React from 'react'
import '@/pages/pages.css'
import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


export async function getStaticProps(){

  const keyWords = [
    'free trigonometry visual tools',
    'free trigonometry calculator',
    'free math calculator',
    'free online calculator',
    'trigonometry visualizer',
    'angle visualizer',
    'unit circle',
    'sine cosine graphs',
    'trigonometric identities',
    'triangle solver',
    'inverse trigonometric functions',
    'interactive trigonometry'
  ]

  // Auto-pull active tools from the filesystem.
  // Scans pages/trigonometry/visual-tools/* for index files and [view].jsx
  // dynamic routes, extracts SEO + viewConfig metadata, returns { children: [...] }.
  const toolsData = await buildToolIndexData('trigonometry/visual-tools')

  // Coming-soon tools as customItems, appended after the auto-pulled ones.
  // VisualToolsPage merges these into the main list at the specified `at` positions.
  // const comingSoonItems = [
  //   {
  //     at: 'end',
  //     id: 'unit-circle',
  //     title: 'Unit Circle (coming soon)',
  //     description: 'Interactive unit circle showing angle, radian measure, sine, cosine, and tangent values at every standard position.',
  //     href: '#',
  //     hasViews: false,
  //   },
  //   {
  //     at: 'end',
  //     id: 'graphs',
  //     title: 'Sine & Cosine Graphs (coming soon)',
  //     description: 'Adjustable amplitude, period, phase shift, and vertical shift on sine and cosine curves with side-by-side comparison.',
  //     href: '#',
  //     hasViews: false,
  //   },
  //   {
  //     at: 'end',
  //     id: 'identities',
  //     title: 'Trigonometric Identities (coming soon)',
  //     description: 'Visual proofs and animated derivations of Pythagorean, sum-and-difference, double-angle, and half-angle identities.',
  //     href: '#',
  //     hasViews: false,
  //   },
  //   {
  //     at: 'end',
  //     id: 'triangle-solvers',
  //     title: 'Triangle Solvers (coming soon)',
  //     description: 'Solve any triangle from given sides and angles using the Law of Sines and Law of Cosines with full step-by-step reasoning.',
  //     href: '#',
  //     hasViews: false,
  //   },
  //   {
  //     at: 'end',
  //     id: 'inverse-functions',
  //     title: 'Inverse Functions (coming soon)',
  //     description: 'Visualizer for arcsine, arccosine, and arctangent — domain restrictions, principal branches, and inverse-pair graphs.',
  //     href: '#',
  //     hasViews: false,
  //   },
  // ]

  const intro = {
    title: "Free interactive tools for learning trigonometry",
    description: "Each tool turns a piece of trigonometry into something you can manipulate, watch, and step through — angles, the unit circle, graph transformations, identity proofs, triangle solving, and inverse functions.",
    tip: "Start with the Angle Visualizer to get a feel for how the controls and live readouts work."
  }


  const comingSoonItems = [
  {
    at: 'end',
    title: 'Unit Circle Visualizer and Calculator',
    description: 'Interactive unit circle with a draggable angle point and live readouts for all six trigonometric functions — sine, cosine, tangent, cosecant, secant, and cotangent. Set any angle in degrees or radians (including angles beyond 360° to show multiple rotations), or drag the point directly on the circle. Special angles like 30°, 45°, 60°, and their counterparts in every quadrant are marked and snap to exact values. Includes a full explanation of why the radius equals 1, how the four quadrants determine the signs of sine and cosine, and how degrees and radians relate.',
    href: '/visual-tools/unit-circle',
    category: 'Unit Circle',
    icon: '⊙',
  },
]

  return {
    props:{
      toolsData,
   comingSoonItems,
      intro,
      seoData: {
        title: "Free Trigonometry Visual Tools | Learn Math Class",
        description: "Free interactive trigonometry visualizers and calculators: angle explorer, unit circle, sine and cosine graphs, identity proofs, triangle solvers, and inverse functions. Step-by-step and free to use.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools",
        name: "Trigonometry Visual Tools"
      },
    }
  }
}

export default function TrigonometryVisualToolsLanding({
  seoData,
  toolsData,
 comingSoonItems,
  intro
}) {

  return (
   <>
   <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>

   <VisualToolsPage
     tools={toolsData}
     customItems={comingSoonItems}
     pageTitle="Trigonometry Visual Tools"
     intro={intro}
     icon="📐"
     dropdownLabel="All Tools"
     theme="deepBlue"
     sidebar={true}
     sidebarBrandName="Trigonometry"
     sidebarBrandSub="Visual Tools"
   />

   <br/>
   <br/>
   <br/>
   </>
  )
}