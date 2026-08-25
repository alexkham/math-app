import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


export async function getStaticProps(){

  // Surfaced on the /arithmetic hub via buildSectionData extraction.
  // First-match-wins: placed before the seoData below.
  const hubMeta = {
    name: 'Arithmetic Visual Tools',
    hubDescription: 'Interactive explorers for the building blocks of number theory: a divisibility table that highlights multiples across a grid, a divisibility-rules decision tree, divisibility tiles that group numbers into equal sets, a Sieve of Eratosthenes prime finder, a step-by-step Euclidean algorithm GCD visualizer, and a modular arithmetic wheel that sorts integers into remainder classes.',
  }

  const keyWords = [
    'arithmetic visualization tools',
    'interactive arithmetic tools',
    'arithmetic visualizer',
    'visual arithmetic learning',
    'divisibility tools',
    'divisibility table visualizer',
    'divisibility tree visualizer',
    'interactive divisibility tools',
    'sieve of eratosthenes visualizer',
    'euclidean algorithm visualizer',
    'gcd visualizer',
    'modular arithmetic visualizer',
    'arithmetic teaching tools',
    'visual math tools',
    'number theory visualization',
    'divisibility rules visual',
    'arithmetic interactive learning',
    'math concept visualization',
    'elementary arithmetic tools'
  ]

  const toolsData = await buildToolIndexData('/arithmetic/visual-tools')

  const faqQuestions = {
    obj1: {
      question: "What arithmetic visualization tools are available?",
      answer: "The collection includes six interactive visualizers: a divisibility table that highlights multiples and factor relationships across a number grid, a divisibility decision tree that tests any number against the rules for 2 through 12, divisibility tiles that group numbers into equal sets, a Sieve of Eratosthenes prime finder, a Euclidean algorithm visualizer that computes the greatest common divisor step by step, and a modular arithmetic wheel that sorts integers into remainder classes."
    },
    obj2: {
      question: "How do arithmetic visualization tools help learning?",
      answer: "Visual tools turn abstract number relationships into concrete, interactive experiences. By highlighting patterns in divisibility and showing how numbers decompose into prime factors, learners develop stronger number sense and intuition about fundamental arithmetic properties."
    },
    obj3: {
      question: "What is the difference between the divisibility table and divisibility tree?",
      answer: "The divisibility table shows relationships between numbers and their divisors across a grid, making it easy to spot patterns and common factors. The divisibility tree takes a single number through a flowchart of divisibility rules for 2 through 12, showing step by step which tests pass, which fail, and why."
    },
    obj4: {
      question: "Are these arithmetic tools free to use?",
      answer: "Yes, all arithmetic visualization tools are completely free with no registration required. They run directly in your browser and include interactive controls, real-time calculations, and educational explanations to support learning."
    },
    obj5: {
      question: "Can I use these tools for teaching arithmetic?",
      answer: "Absolutely. These visualization tools are designed for both self-study and classroom use. Teachers can demonstrate divisibility concepts during lectures, and students can interact with the tools to build understanding through hands-on exploration and immediate visual feedback."
    }
  }

  // hasPart / itemList are generated from the auto-discovered tools so the
  // schemas always match what the page actually shows.
  const toolSchemaParts = toolsData.items.map((tool) => ({
    "@type": "WebPage",
    "name": tool.title,
    "url": `https://www.learnmathclass.com${tool.href}`,
    "description": tool.shortDescription || tool.description || ''
  }))

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Arithmetic Visual Tools",
      "description": "Interactive visualization tools for learning arithmetic including divisibility tables, divisibility trees, prime sieves, the Euclidean algorithm, and modular arithmetic with real-time visual feedback.",
      "url": "https://www.learnmathclass.com/arithmetic/visual-tools",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Arithmetic Visualization"
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
      "hasPart": toolSchemaParts
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": toolsData.items.map((tool, index) => ({
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
          "name": "Arithmetic",
          "item": "https://www.learnmathclass.com/arithmetic"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Arithmetic Visual Tools",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools"
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

  const pageArticle=`Arithmetic forms the foundation of all mathematical thinking, and understanding divisibility is one of its most essential skills. These interactive visualization tools transform abstract number relationships into concrete, explorable experiences.

The Divisibility Table Visualizer presents numbers in a grid format, highlighting multiples and common factors with color coding. Select any divisor and watch patterns emerge across the table — a powerful way to recognize divisibility rules intuitively rather than memorizing them.

The Divisibility Tree Visualizer takes a different approach: it runs a single number through a decision tree of divisibility rules for 2 through 12. Enter any number up to 9999 and watch each test light up green or red — last digit, digit sum, alternating sum — with derived rules for 6, 10, and 12 combining earlier results.

The Divisibility Tiles Visualizer offers a hands-on grouping experience. Numbers from 1 to 100 can be divided into equal sets, with remainders clearly highlighted. This concrete representation helps learners grasp why some divisions result in whole numbers while others leave remainders.

The Sieve of Eratosthenes Visualization shows how primes emerge as composites get crossed out, one divisor at a time. Color-coded steps and explanations make the classic prime-finding algorithm easy to follow from start to finish.

The Euclidean Algorithm Visualizer computes the greatest common divisor of any two numbers as a chain of division equations, making each remainder and substitution step visible until the GCD emerges as the last divisor.

The Modular Arithmetic Wheel sorts the integers 1 through N into remainder classes on a pie wheel — one slice per class, with the multiples of the divisor highlighted. Switch the divisor to see how the class structure changes.

Each tool runs directly in your browser with no downloads or registration required. Use them for self-study, classroom demonstrations, or homework support.`

  return {
    props: {
      toolsData,
      faqQuestions,
      schemas,
      pageArticle,
      seoData: {
        title: "Arithmetic Visual Tools - Interactive Visualizers | Learn Math Class",
        description: "Interactive arithmetic visualization tools including divisibility tables, divisibility trees, and number theory explorers with real-time visual feedback.",
        keywords: keyWords.join(", "),
        url: "/arithmetic/visual-tools",
        name: "Arithmetic Visual Tools"
      }
    }
  }
}

export default function ArithmeticVisualToolsPage({seoData, toolsData, faqQuestions, schemas, pageArticle}) {

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
      {/* <GenericNavbar/> */}
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
        pageTitle="Arithmetic Visual Tools"
        intro={{
          title: "Explore Interactive Arithmetic Tools",
          description: "Master concepts through hands-on visualization...",
          tip: "Click any tool below to see its description..."
        }}
        article={pageArticle}
        icon="🧮"
        dropdownLabel="All Tools"
        theme="deepBlue"
        sidebar={true}
        sidebarBrandName="Arithmetic"
        sidebarBrandSub="Visual Tools"
      />
      <br/>
      <br/>
      <br/>
    </>
  )
}
