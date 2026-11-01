import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


export async function getStaticProps(){

  const keyWords = [
    'geometry visual tools',
    'interactive geometry',
    'geometry proofs',
    'interactive geometry proofs',
    'step by step geometry proof',
    'geometry proof visualizer',
    'how to read a geometry proof',
    'euclid proofs',
    'triangle proofs',
    'triangle angle sum proof',
    'parallel postulate',
    'dynamic geometry'
  ]

  // Auto-pull the tools from the filesystem. Geometry's proofs have no folder
  // of their own: they are the views of pages/geometry/visual-tools/[view].jsx,
  // one page per proof at /geometry/visual-tools/<slug>. Each view declares
  // category 'Proofs' and the figure as subCategory ('Triangle', ...).
  const toolsData = await buildToolIndexData('geometry/visual-tools')

  const intro = {
    title: "Free interactive tools for learning geometry",
    description: "Every tool here is a proof you can step through on a live figure: each step names its justification, and you can drag the points at any step to see the argument hold for every case.",
    tip: "Start with the Triangle Angle Sum proof: press Play, then drag a vertex."
  }

  // Article shown inside the Proofs category panel, above its cards.
  const categoryArticles = {
    Proofs: {
      title: 'Proofs You Can Step Through',
      content: `A proof is a chain of steps, each one justified by something already known: a postulate, a definition or an earlier theorem. The proof player shows that chain one step at a time on a live figure. Each step draws what it constructs, highlights the parts it uses and names the reason it is allowed. Drag a point at any step and the construction, the highlighted angles and the conclusion all follow the new figure. A proof is a claim about every figure of its kind, and dragging lets you see that the argument never depended on the one drawn on screen.

**How to read a proof.** Most geometric proofs follow the same order, and the player keeps it: **Given**, the figure and what is assumed about it; **To prove**, the claim, stated before any work starts; **Construction**, extra points, lines or circles added to make the argument possible; **Argument**, steps that each follow from the given facts, the construction or an earlier step; **Conclusion**, the claim again, now established, closed with the end-of-proof mark ∎. A construction is not part of the claim. It is a tool the proof adds, and the result holds whether or not the extra lines are drawn.

**The justification tags.** Every step in the log carries a small tag above its text. The tag names the rule that makes the step valid, so the reasoning can be checked one link at a time. In the [triangle angle sum proof](!/geometry/visual-tools/triangle-angle-sum) the tags are **Given**, **Parallel postulate**, **Alternate angles** and **Straight angle**. Each one is a fact that is either assumed or proved earlier, and none of them is a measurement. If a step has no rule that justifies it, it is not part of a proof. Reading the tags is the quickest way to see exactly what a theorem depends on, for example which results need the parallel postulate and which do not.

**Dragging is not proving.** Checking many triangles never proves a statement about all of them; there are always more triangles than any number of checks. The proof is the chain of justified steps. Dragging shows something different: that no step relied on a particular size or shape. Some positions are refused. If a drag would put the three vertices on one line, or nearly so, the figure stops being a triangle and the move is rejected, because the theorem says nothing about that case.

**Triangle proofs.** Triangle proofs come first because so much of plane geometry rests on them. The [triangle angle sum proof](!/geometry/visual-tools/triangle-angle-sum) shows that the interior angles of every triangle add up to $180°$, using one parallel line and two pairs of alternate angles. Results about exterior angles, right triangles and polygon angle sums all follow from it.

**Using the controls.** Every proof page uses the same player. **▶ Play** runs the proof at the chosen speed; **Next →** and **← Back** move one step at a time. **Reset** returns to the first step and restores the original figure. **Labels** shows or hides the point names; **Measures** writes each angle's size beside its arc. The **Step explanations** log keeps every step reached so far; click an entry to return to it. Solid points can be dragged; hollow points are constructed from the others and follow them.`
    }
  }

  const faqQuestions = {
    obj1: {
      question: "What is a geometric proof?",
      answer: "A geometric proof is a sequence of statements about a figure in which every statement follows from the given facts, a postulate, a definition or a previously proved theorem. The last statement is the claim being proved."
    },
    obj2: {
      question: "Does dragging a figure prove a theorem?",
      answer: "No. Dragging checks many cases, but a theorem is about every possible figure. What dragging shows is that the steps of the proof never used a particular size or shape, so the same argument applies to every figure."
    },
    obj3: {
      question: "What does the symbol ∎ at the end of a proof mean?",
      answer: "It marks the end of a proof: the claim has been established. It plays the same role as the traditional Q.E.D."
    },
    obj4: {
      question: "Why do some proofs add extra lines to the figure?",
      answer: "An extra line, point or circle is a construction. It creates angles or triangles that connect the given facts to the claim. The theorem itself does not depend on the construction; it only makes the argument possible."
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
      "name": "Geometry Visual Tools",
      "description": "Interactive step-by-step geometry proofs on a live figure: every step names its justification, and the figure can be dragged at any step.",
      "url": "https://www.learnmathclass.com/geometry/visual-tools",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "about": { "@type": "Thing", "name": "Geometry" },
      "keywords": keyWords.join(", "),
      "author": { "@type": "Organization", "name": "Learn Math Class" },
      "publisher": { "@type": "Organization", "name": "Learn Math Class" },
      "datePublished": "2026-10-31",
      "dateModified": new Date().toISOString(),
      "hasPart": toolSchemaParts
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Geometry Visual Tools",
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
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
        { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
        { "@type": "ListItem", "position": 3, "name": "Geometry Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" }
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

  return {
    props: {
      toolsData,
      intro,
      categoryArticles,
      faqQuestions,
      schemas,
      seoData: {
        title: "Geometry Visual Tools - Interactive Proofs | Learn Math Class",
        description: "Step through geometry proofs on a live figure. Every step names its justification, and you can drag the figure at any step to see the argument hold for every case.",
        keywords: keyWords.join(", "),
        url: "/geometry/visual-tools",
        name: "Geometry Visual Tools"
      }
    }
  }
}

export default function GeometryVisualToolsPage({ seoData, toolsData, intro, categoryArticles, schemas }) {

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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collectionPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.itemList) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
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
        pageTitle="Geometry Visual Tools"
        intro={intro}
        categoryArticles={categoryArticles}
        icon="📐"
        dropdownLabel="All Tools"
        theme="deepBlue"
        sidebar={true}
        sidebarBrandName="Geometry"
        sidebarBrandSub="Visual Tools"
      />

      {/* With one tool the page is short: keep the footer below the fold
          while the card sits in the middle of the screen. */}
      <div style={{ height: '50vh' }} />
    </>
  )
}
