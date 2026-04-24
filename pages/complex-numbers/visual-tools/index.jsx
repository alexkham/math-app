
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'
import QuickNav from '@/app/components/cards/QuickNav'
import ScrollToTop from '@/app/components/scroll-up-button/ScrollToTop'
import ToolsPageHeader from '@/app/components/cards/ToolsPageHeader'


export async function getStaticProps(){

  const keyWords = [
    'complex number visualization',
    'complex plane interactive',
    'complex number explorer',
    'argand diagram tool',
    'complex plane visualizer',
    'imaginary number visualization',
    'complex number modulus calculator',
    'complex conjugate visualizer',
    'interactive complex plane',
    'complex number graph',
    'real and imaginary parts',
    'complex number quadrants',
    'visual complex numbers',
    'complex number learning tool',
    'complex plane drag interactive'
  ]

  const cardsData = [
    {
      title: "Complex Number Explorer",
      description: "Visualize complex numbers on an interactive Argand plane. Drag points or enter coordinates to see real parts, imaginary parts, modulus, and conjugates. Watch the right triangle form as you explore different quadrants with real-time calculations and explanations.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '',
      href: "/complex-numbers/visual-tools/complex-explorer"
    },
   {
  title: "Powers of i Calculator/Visualizer",
  description: "Calculate any power of i instantly. See the 4-step cycle in a dynamic diagram, follow the division-by-4 method step by step, and look up results from i⁰ to i¹⁰⁰ in the reference table.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/i-powers"
},
 {
  title: "Complex Conjugate Explorer",
  description: "Drag a point on the Argand plane to see z and its conjugate z̄ mirrored across the real axis. Watch the modulus circle, right triangle decomposition, and the proof that z · z̄ = |z|² update in real time.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/complex-conjugate"
},
{
  title: "Euler's Formula Explorer",
  description: "Explore eⁱᶿ = cos θ + i sin θ on an interactive unit circle. Drag the angle or use the slider, see the right triangle projections, hit landmark angles like Euler's identity eⁱᵖ = −1, and scale with r for the full polar form.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/euler-formula"
},
{
  title: "Polar-Rectangular Converter",
  description: "Convert between rectangular form a + bi and polar form r·eⁱᶿ interactively. Drag a point on the Argand plane to see modulus, argument, and live conversion formulas update in real time, with the right triangle bridging both representations.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/polar-rectangular"
},
{
  title: "Addition & Subtraction Visualizer",
  description: "Add and subtract complex numbers geometrically. Drag two points and watch the parallelogram rule for addition and the difference vector for subtraction update instantly, with step-by-step component breakdowns and the triangle inequality verified in real time.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/addition-subtraction"
},
{
  title: "Multiplication Visualizer",
  description: "See complex multiplication as rotation and scaling. Drag two points and watch the product vector update — moduli multiply, angles add. Follow both the FOIL algebraic method and the geometric polar method side by side.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/multiplication"
},
{
  title: "Division Visualizer",
  description: "Visualize complex division geometrically — moduli divide, angles subtract. See the conjugate multiplication method step by step alongside the polar interpretation, with a zoom inset for small quotients.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/division"
},
{
  title: "Distance & Midpoint Tool",
  description: "Compute and visualize the distance |z₁ − z₂| and midpoint between two complex numbers. Drag two points to see the right triangle, step-by-step calculations, and a circle of radius equal to the distance centered at z₁.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/distance-midpoint"
},
{
  title: "De Moivre's Theorem Visualizer",
  description: "Raise any complex number to any integer power and watch the result animate on the plane. See modulus scale and angle multiply, follow the step-by-step polar calculation, and trace intermediate powers as a spiral trail.",
  backgroundColor: "#4F46E5",
  textColor: "#ffffff",
  ratio: 7,
  image: '',
  href: "/complex-numbers/visual-tools/demoivre-visualizer"
},
  ]

  const faqQuestions = {
    obj1: {
      question: "What is a complex number?",
      answer: "A complex number has the form z = a + bi, where a is the real part, b is the imaginary part, and i is the imaginary unit (√-1). Complex numbers extend real numbers to solve equations like x² + 1 = 0 and appear throughout mathematics, physics, and engineering."
    },
    obj2: {
      question: "What visualization tools are available for complex numbers?",
      answer: "The Complex Number Explorer lets you visualize any complex number on an interactive Argand plane. Drag points or type coordinates to see real parts, imaginary parts, modulus calculations, conjugates, and quadrant positions with step-by-step explanations."
    },
    obj3: {
      question: "What is the complex plane (Argand diagram)?",
      answer: "The complex plane represents complex numbers as points in 2D space. The horizontal axis shows real parts and the vertical axis shows imaginary parts. A complex number z = a + bi corresponds to the point (a, b), making geometric relationships visible."
    },
    obj4: {
      question: "How is the modulus of a complex number calculated?",
      answer: "The modulus |z| measures the distance from the origin to the point z = a + bi. It's calculated using the Pythagorean theorem: |z| = √(a² + b²). The visualization shows this as the hypotenuse of a right triangle with legs a and b."
    }
  }

  const seoData = {
    title: "Complex Numbers Visual Tools - Interactive Visualizers | Learn Math Class",
    description: "Interactive complex number visualization tools. Explore the Argand plane, see modulus calculations, conjugates, and quadrant positions with drag-and-drop interaction.",
    keywords: keyWords.join(", "),
    url: "/complex-numbers/visual-tools",
    name: "Complex Numbers Visual Tools"
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Complex Numbers Visualization"
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
          "name": "Complex Number Explorer",
          "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/complex-explorer",
          "description": "Interactive Argand plane for visualizing complex numbers, modulus, and conjugates"
        }
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
            "name": "Complex Number Explorer",
            "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/complex-explorer",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive tool for exploring complex numbers on the Argand plane"
          }
        }
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
          "name": "Complex Numbers",
          "item": "https://www.learnmathclass.com/complex-numbers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": `https://www.learnmathclass.com${seoData.url}`
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

  const pageArticle = `Complex numbers extend the real number line into a two-dimensional plane, opening up powerful ways to solve problems in mathematics, physics, and engineering. These interactive visualization tools transform abstract algebraic concepts into concrete, explorable geometric relationships.

The Complex Number Explorer presents the Argand plane — a coordinate system where the horizontal axis represents real parts and the vertical axis represents imaginary parts. Drag any point across the plane or type exact coordinates to see how complex numbers behave in different quadrants.

As you move points, watch the right triangle form connecting the origin to your chosen complex number. The horizontal leg shows the real part (a), the vertical leg shows the imaginary part (b), and the hypotenuse reveals the modulus |z| = √(a² + b²). This geometric interpretation makes the Pythagorean relationship immediately visible.

The conjugate appears as a reflection across the real axis. For any z = a + bi, its conjugate z̄ = a − bi mirrors the point below the horizontal axis. The tool highlights this relationship, showing how conjugates share the same real part but have opposite imaginary parts.

Special cases receive dedicated explanations: purely real numbers sit directly on the horizontal axis, purely imaginary numbers align with the vertical axis, and the origin represents zero — the only complex number with modulus zero.

Each tool runs directly in your browser with no downloads required. Use them for self-study, classroom demonstrations, or building intuition for complex analysis.`

  const sectionsContent = {
    obj1: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    }
  }

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  return {
    props: {
      sectionsContent,
      introContent,
      cardsData,
      faqQuestions,
      schemas,
      pageArticle,
      seoData
    }
  }
}

export default function ComplexNumbersVisualToolsPage({
  seoData,
  sectionsContent,
  introContent,
  cardsData,
  faqQuestions,
  schemas,
  pageArticle
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
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>Complex Numbers Visual Tools</h1>
      <QuickNav items={cardsData} dropdownLabel="All Tools" />
      <br/>
      <ScrollToTop
        top={'80px'}
        center={true}
      />
      <br/>
      <ToolsPageHeader 
        items={cardsData}
        icon="ℂ"
        intro={{
          title: "Explore Interactive Complex Number Tools",
          description: "Master complex numbers through hands-on visualization on the Argand plane.",
          tip: "Click any tool below to see its description and start exploring."
        }}
        article={pageArticle}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ModernCardsGroup items={cardsData}/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}