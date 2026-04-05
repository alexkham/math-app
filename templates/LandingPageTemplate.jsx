import React from 'react'
import Head from 'next/head'
import LandingPage from '@/app/components/page-components/landing-pages/LandingPage'

export async function getStaticProps(){

  const keyWords = [
    '', // Category main keyword
    '', // Category + context
    '', // Child tool 1
    '', // Child tool 2
    '', // Child tool 3
    '', // Related concept
    '', // Application keyword
    '', // Question keyword
    '', // Modifier keyword
    '', // Broad search term
    '', // Long-tail keyword
    '', // Calculator/tool keyword
    '', // Interactive keyword
    '', // Learning keyword
    ''  // 14-15 keywords total
  ]

  const faqQuestions = {
    obj1: {
      question: "What is [main category]?",
      answer: "Brief 2-3 sentence overview of the category."
    },
    obj2: {
      question: "What tools are available in [category]?",
      answer: "List key tools/pages with brief descriptions."
    },
    obj3: {
      question: "How do I use [main tool/feature]?",
      answer: "Basic usage instructions."
    },
    obj4: {
      question: "When should I use [category tools]?",
      answer: "Common use cases and applications."
    }
    // 4-5 questions total
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "", // seoData.name
      "description": "", // seoData.description
      "url": "", // Full URL
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "" // Main category/topic
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
        // List of child pages/tools
        {
          "@type": "WebPage",
          "name": "", // Child page 1 name
          "url": "", // Child page 1 URL
          "description": "" // Brief description
        },
        {
          "@type": "WebPage",
          "name": "", // Child page 2 name
          "url": "", // Child page 2 URL
          "description": "" // Brief description
        }
        // Add all child pages
      ]
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "", // Child tool 1 name
            "url": "", // Child tool 1 URL
            "applicationCategory": "EducationalApplication",
            "description": "" // Brief description
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "", // Child tool 2 name
            "url": "", // Child tool 2 URL
            "applicationCategory": "EducationalApplication",
            "description": "" // Brief description
          }
        }
        // Add all tools as list items
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
          "name": "", // Category name from URL
          "item": "" // Category URL
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "", // seoData.name
          "item": "" // Full URL
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

  const landingPageData = {
    pageTitle: '', // Main page title (H1)
    breadcrumbUrl: '', // Current page URL path
    
    sidebarData: {
      brandName: 'Learn Math Class',
      brandSubtitle: 'Interactive Math Learning',
      showNewsletter: true,
      newsletterTitle: 'Stay Updated',
      showFooter: true,
      footerText: '© 2024 Learn Math Class. All rights reserved.',
      categories: [
        {
          title: 'Main Category',
          items: [
            {
              name: '', // Topic name
              icon: '', // Emoji icon
              href: '', // Link
              children: [
                { name: '', href: '' }, // Subtopic
                { name: '', href: '' }
              ]
            }
          ]
        }
        // Add all relevant categories
      ]
    },

    topNavData: {
      method: 'miniCards', // or 'bar'
      sticky: true,
      containerBackground: 'white'
    },

    heroData: {
      title: '', // Hero title
      subtitle: '', // Hero subtitle
      description: '', // Hero description (1-2 sentences about category)
      showStats: true,
      customStats: null // or custom stats array
    },

    contentCardsData: {
      sectionTitle: '', // Section heading (e.g., "Available Tools")
      theme: 'gradient',
      layout: 'grid',
      cards: [
        {
          id: 1,
          htmlId: '', // anchor ID
          title: '', // Card title (child page/tool name)
          summary: '', // Short summary (1 line)
          content: '', // Detailed content about this tool/page
          icon: '', // Emoji icon
          badge: '', // Optional badge (e.g., "New", "Popular")
          cardWidth: 'medium', // small, medium, large
          cardHeight: 'medium', // small, medium, large
          overflowBehavior: 5, // lines before collapse
          link: '', // Link to child page
          linkTitle: '' // Link button text
        },
        // Add card for each child page/tool
        {
          id: 2,
          title: null // Empty card for spacing in TopNav
        }
      ]
    }
  }

  return {
    props: {
      landingPageData,
      faqQuestions,
      schemas,
      seoData: {
        title: "", // Front-loaded keyword title | Learn Math Class (<60 chars)
        description: "", // 150-160 chars with 3-4 keywords
        keywords: keyWords.join(", "),
        url: "", // Page URL path
        name: "" // Descriptive name for schemas
      }
    }
  }
}

export default function LandingPageTemplate({ seoData, landingPageData, faqQuestions, schemas }) {

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
        
        {/* Schema 1: CollectionPage */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.collectionPage)
          }}
        />

        {/* Schema 2: ItemList */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.itemList)
          }}
        />

        {/* Schema 3: BreadcrumbList */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.breadcrumb)
          }}
        />

        {/* Schema 4: FAQPage */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.faq)
          }}
        />
      </Head>

      <LandingPage {...landingPageData} />
      <br/>
    </>
  )
}