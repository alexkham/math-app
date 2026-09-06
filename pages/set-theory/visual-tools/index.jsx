
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import React from 'react'
import '@/pages/pages.css'
import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


export async function getStaticProps(){

  // Surfaced on the /set-theory hub via buildSectionData extraction.
  // First-match-wins: placed before the page seoData/schemas, whose copy
  // still carries linear-algebra text from the page it was templated from.
  const hubMeta = {
    name: 'Set Theory Visual Tools',
    hubDescription: 'Interactive Venn diagram explorers for two and three sets: drag the circles between overlapping, disjoint and nested arrangements, toggle the shaded region for each operation, and watch the algebra of sets laws verify themselves visually in real time.',
  }

  const keyWords = [
    'free set theory visual tools',
    'venn diagram generator',
    'venn diagram maker',
    'set operations visualizer',
    'union and intersection calculator',
    'set identities explorer',
    'de morgans laws venn diagram',
    'power set calculator',
    'subset lattice',
    'set builder notation tool',
    'inclusion exclusion calculator',
    'three set venn diagram',
    'set theory truth table',
    'interactive set theory',
    'free set theory tools'
  ]

  const faqQuestions = {
    obj1: {
      question: "What set theory visual tools are available?",
      answer: "The collection covers Venn diagram explorers for two and three sets, a generator that shades any expression on 2 to 5 sets, a power set drawn as a subset lattice, a set-builder notation builder, an inclusion-exclusion walk-through, indexed unions and intersections, and an explorer that shows one expression as both shaded regions and a truth table. Each tool focuses on one idea and updates as you change it."
    },
    obj2: {
      question: "Which tool should I use to learn set operations?",
      answer: "Start with the Two-Set Venn Diagram Basic Identities Explorer. Pick union, intersection, complement or any of the three differences and the matching regions shade immediately, with an explanation panel giving the set-builder form of whatever is highlighted."
    },
    obj3: {
      question: "How does the Venn Diagram Generator work?",
      answer: "Choose 2, 3, 4 or 5 sets, then type a set expression with keyboard shortcuts, build it from symbol buttons, or load a preset. A region strip lists every region and whether it is shaded, a compare box tests two expressions for equivalence, and finished diagrams export to SVG or PNG."
    },
    obj4: {
      question: "Are these set theory tools free to use?",
      answer: "Yes, every visualizer in the collection is completely free with no registration required. The tools run directly in the browser, include step-by-step explanations, and work for both learning and checking your own work."
    },
    obj5: {
      question: "Which tool should I pick first?",
      answer: "If set operations still feel like symbols rather than pictures, the Two-Set Venn Diagram Basic Identities Explorer is the natural entry point. From there the three-set explorers cover De Morgan's laws and counting identities, the Power Set Explorer shows how subsets are ordered by containment, and the Venn Diagram and Truth Table Explorer connects set algebra to logic."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Set Theory Visual Tools",
      "description": "Free set theory visualizers: Venn diagram generator, two and three set identity explorers, power set lattice, set-builder notation, and inclusion-exclusion. Step-by-step and free.",
      "url": "https://www.learnmathclass.com/set-theory/visual-tools",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Set Theory"
      },
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Venn Diagram Generator",
          "url": "https://www.learnmathclass.com/set-theory/visual-tools/venn-generator",
          "description": "Shades any set expression on a 2, 3, 4 or 5 set Venn diagram, compares two expressions for equivalence, and exports to SVG or PNG."
        },
        {
          "@type": "WebPage",
          "name": "Two-Set Venn Diagram Basic Identities Explorer",
          "url": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-basic-venn",
          "description": "Shades the Venn diagram for union, intersection, complement, the three differences, De Morgan's laws and set relations."
        },
        {
          "@type": "WebPage",
          "name": "Power Set Explorer",
          "url": "https://www.learnmathclass.com/set-theory/visual-tools/power-set",
          "description": "Draws the power set of a small set as a Hasse diagram of the subset lattice, with containment readable as direction on the page."
        }
        // NOTE: Add other tools auto-pulled from filesystem here as they come online.
      ]
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Set Theory Visual Tools",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Venn Diagram Generator",
            "url": "https://www.learnmathclass.com/set-theory/visual-tools/venn-generator",
            "applicationCategory": "EducationalApplication",
            "description": "Shades any set expression on a 2, 3, 4 or 5 set Venn diagram, with equivalence checking and SVG or PNG export."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Two-Set Venn Diagram Basic Identities Explorer",
            "url": "https://www.learnmathclass.com/set-theory/visual-tools/two-sets-basic-venn",
            "applicationCategory": "EducationalApplication",
            "description": "Shades the Venn diagram for union, intersection, complement, the three differences and De Morgan's laws."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Power Set Explorer",
            "url": "https://www.learnmathclass.com/set-theory/visual-tools/power-set",
            "applicationCategory": "EducationalApplication",
            "description": "Draws the power set of a small set as a Hasse diagram of the subset lattice."
          }
        }
        // NOTE: Mirror additions to collectionPage.hasPart here.
      ]
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
          "name": "Set Theory",
          "item": "https://www.learnmathclass.com/set-theory"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }

  // Auto-pull active tools from the filesystem.
  // Scans pages/linear-algebra/visual-tools/* for index files and [view].jsx
  // dynamic routes, extracts SEO + viewConfig metadata, returns { children: [...] }.
  const toolsData = await buildToolIndexData('set-theory/visual-tools')

  const intro = {
    title: "Free interactive tools for learning set theory",
    description: "Shade any region of a Venn diagram and watch a set identity prove itself. Build a set from a domain and a condition and see every candidate tested one at a time. Draw a power set as a subset lattice, step through inclusion-exclusion one term at a time, and read the same expression as both shaded regions and a truth table.",
    tip: "Start with the Two-Set Venn Diagram Basic Identities Explorer to see how each region maps to a set expression."
  }

  // Empty by design. This array was copy-pasted from the linear-algebra hub and
  // listed Matrix Multiplication and Gaussian Elimination, which do not belong on
  // a set theory page. It renders nothing today (customItems is commented out on
  // VisualToolsPage below); cleared so it stays correct if that prop is enabled.
  const comingSoonItems = []


  return {
    props:{
      toolsData,
      comingSoonItems,
      intro,
      faqQuestions,
      schemas,
      seoData: {
        title: "Free Set Theory Visual Tools | Learn Math Class",
        description: "Free set theory visualizers: Venn diagram generator, two and three set identity explorers, power set lattice, set-builder notation, and inclusion-exclusion. Step-by-step and free.",
        keywords: keyWords.join(", "),
        url: "/set-theory/visual-tools",
        name: "Set Theory Visual Tools"
      },
    }
  }
}

export default function LinearAlgebraVisualToolsLanding({
  seoData,
  toolsData,
  comingSoonItems,
  intro,
  faqQuestions,
  schemas
}) {

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
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.collectionPage)
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.itemList)
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.faq)
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
    //  customItems={comingSoonItems}
     pageTitle="Set Theory Visual Tools"
     intro={intro}
     icon="🧮"
     dropdownLabel="All Tools"
     theme="deepBlue"
     sidebar={true}
     sidebarBrandName="Set Theory"
     sidebarBrandSub="Visual Tools"
   />

   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   </>
  )
}