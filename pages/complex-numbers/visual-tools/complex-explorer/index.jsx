
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import ComplexExplorer from '@/app/components/visualizations/complex-numbers/ComplexExplorer'


export async function getStaticProps(){

  const keyWords = [
    'complex number explorer',
    'complex plane visualizer',
    'argand diagram interactive',
    'complex number visualization',
    'modulus calculator complex',
    'complex conjugate visualizer',
    'real imaginary parts tool',
    'interactive complex plane',
    'complex number graph',
    'complex plane drag drop',
    'complex number quadrants',
    'complex modulus calculator',
    'visualize complex numbers',
    'argand plane tool',
    'complex number learning tool'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is a complex number?",
      answer: "A complex number has the form z = a + bi, where a is the real part, b is the imaginary part, and i is the imaginary unit satisfying i² = −1. Complex numbers extend real numbers into two dimensions and are essential in engineering, physics, and advanced mathematics."
    },
    obj2: {
      question: "How do I use the Complex Number Explorer?",
      answer: "Click or drag anywhere on the plane to place your complex number, or type exact values in the a and b input fields. The tool instantly displays the real part, imaginary part, modulus, and conjugate. Use the Range buttons to zoom in or out on the plane."
    },
    obj3: {
      question: "What is the modulus of a complex number?",
      answer: "The modulus |z| is the distance from the origin to the point z = a + bi on the complex plane. It's calculated using the Pythagorean theorem: |z| = √(a² + b²). The tool visualizes this as the hypotenuse of a right triangle with legs a and b."
    },
    obj4: {
      question: "What is the complex conjugate?",
      answer: "The conjugate of z = a + bi is z̄ = a − bi. It reflects the original point across the real axis — same horizontal position, opposite vertical position. The tool shows the conjugate as a ghost point below or above the original."
    },
    obj5: {
      question: "What are the four quadrants of the complex plane?",
      answer: "Quadrant I has positive real and imaginary parts. Quadrant II has negative real and positive imaginary. Quadrant III has both negative. Quadrant IV has positive real and negative imaginary. The explanation panel identifies which quadrant your point occupies."
    }
  }

  const sectionsContent = {

    obj1: {
      title: `How to Use the Complex Explorer`,
      content: `This interactive tool visualizes complex numbers on an Argand plane (complex plane). Click anywhere on the grid to place a point, or drag to move it around. The tool responds instantly, updating all calculations as you explore.

Alternatively, type exact values in the **a** and **b** input fields above the plane. The field labeled "a" controls the real part (horizontal position), while "b" controls the imaginary part (vertical position). Press Enter or click away to confirm your input.

Use the **Range ±** buttons to adjust the visible area. Smaller ranges (±5) show more detail for numbers close to the origin, while larger ranges (±10) let you explore bigger values. The snap resolution adjusts automatically based on your zoom level.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Reading the Display Panel`,
      content: `The right side of the tool shows key information about your complex number. At the top, you'll see the full representation **z = a + bi** with your current values.

Three cards display the components: **Real Part** (a) in orange matches the horizontal distance from the origin, **Imaginary Part** (b) in navy matches the vertical distance, and **Modulus** (|z|) in blue shows the straight-line distance from the origin.

Below these cards, the **Explanation Panel** provides context-aware descriptions. It identifies whether your point is purely real, purely imaginary, at the origin, or in one of the four quadrants. Each case includes specific calculations showing how the modulus formula applies to your values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Understanding the Right Triangle`,
      content: `When your complex number has both nonzero real and imaginary parts, a right triangle appears connecting the origin to your point. This visualization reveals the geometric meaning of complex number components.

The orange horizontal leg represents the real part **a**, stretching along the real axis. The navy vertical leg represents the imaginary part **b**, extending parallel to the imaginary axis. The blue hypotenuse connecting the origin to your point represents the **modulus** |z|.

Labels on each side show the exact values. The small square at the corner confirms the 90° angle. This triangle demonstrates why $|z| = \\sqrt{a^2 + b^2}$ — it's simply the Pythagorean theorem applied to the complex plane.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Exploring the Conjugate`,
      content: `Every complex number z = a + bi has a conjugate z̄ = a − bi, shown as a faint orange point reflected across the real axis. The conjugate shares the same real part but has the opposite imaginary part.

A dashed vertical line connects z and z̄, passing through their shared position on the real axis. This reflection symmetry means that a number and its conjugate are always equidistant from the real axis — one above, one below (unless b = 0).

The **Conjugate** card at the bottom displays the exact value of z̄. Notice that purely real numbers equal their own conjugates (since reflecting across the real axis leaves them unchanged), while purely imaginary numbers have conjugates that are their negatives.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Special Cases: Axes and Origin`,
      content: `Try placing your point directly on one of the axes or at the origin to see how the tool handles special cases.

**At the origin (0, 0)**: The number is exactly zero. The explanation notes that zero is the only complex number with modulus 0, and it's the unique point that is simultaneously real and pure imaginary.

**On the real axis (b = 0)**: The number is purely real, like ordinary real numbers. The modulus simplifies to |a|, matching the familiar absolute value. The conjugate equals the number itself.

**On the imaginary axis (a = 0)**: The number is purely imaginary. The modulus equals |b|. The conjugate is the negative of the original number, sitting on the opposite side of the origin.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Four Quadrants`,
      content: `The complex plane divides into four quadrants based on the signs of the real and imaginary parts:

- **Quadrant I** (upper right): a > 0 and b > 0
- **Quadrant II** (upper left): a < 0 and b > 0
- **Quadrant III** (lower left): a < 0 and b < 0
- **Quadrant IV** (lower right): a > 0 and b < 0

The explanation panel identifies which quadrant your point occupies and describes the sign pattern. Drag your point through different quadrants to see how the triangle orientation changes while the modulus formula remains consistent regardless of signs.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Complex Number?`,
      content: `A **complex number** extends the real number system by introducing the imaginary unit $i$, defined by $i^2 = -1$. Every complex number can be written as $z = a + bi$, where $a$ and $b$ are real numbers.

The real part $a = \\text{Re}(z)$ determines horizontal position on the complex plane. The imaginary part $b = \\text{Im}(z)$ determines vertical position. Together, they specify a unique point in two-dimensional space.

Complex numbers arose historically to solve equations like $x^2 + 1 = 0$, which has no real solutions. Today they appear throughout mathematics, physics, and engineering — from signal processing and quantum mechanics to electrical circuits and fluid dynamics.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Complex Plane (Argand Diagram)`,
      content: `The **complex plane** represents complex numbers geometrically. The horizontal axis displays real values, while the vertical axis displays imaginary values. A complex number $z = a + bi$ corresponds to the point $(a, b)$.

This representation, also called an **Argand diagram**, transforms algebraic operations into geometric ones. Addition becomes vector addition. Multiplication involves rotation and scaling. The conjugate becomes reflection across the real axis.

The plane extends infinitely in all directions. The Range control in this tool lets you focus on different portions — zoom in for detail near the origin, or zoom out to see larger values. Grid lines help you read coordinates at a glance.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Modulus and the Pythagorean Theorem`,
      content: `The **modulus** (or absolute value) of a complex number measures its distance from the origin:

$$|z| = |a + bi| = \\sqrt{a^2 + b^2}$$

This formula follows directly from the Pythagorean theorem. The point $(a, b)$ forms a right triangle with legs of length $|a|$ and $|b|$. The hypotenuse — the straight-line distance to the origin — equals $\\sqrt{a^2 + b^2}$.

Key properties of modulus include: $|z| \\geq 0$ always, with equality only when $z = 0$. For real numbers, modulus matches absolute value. The modulus of a product equals the product of moduli: $|z_1 z_2| = |z_1| |z_2|$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Complex Conjugates and Their Properties`,
      content: `The **complex conjugate** of $z = a + bi$ is $\\bar{z} = a - bi$. Geometrically, conjugation reflects a point across the real axis — the real part stays the same while the imaginary part changes sign.

Conjugates have important algebraic properties. The product $z \\cdot \\bar{z} = a^2 + b^2 = |z|^2$ always yields a non-negative real number. This makes conjugates essential for division: to compute $\\frac{w}{z}$, multiply numerator and denominator by $\\bar{z}$ to get a real denominator.

Other properties include: $\\overline{z_1 + z_2} = \\bar{z_1} + \\bar{z_2}$ and $\\overline{z_1 \\cdot z_2} = \\bar{z_1} \\cdot \\bar{z_2}$. The conjugate of a conjugate returns the original: $\\overline{\\bar{z}} = z$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Concepts`,
      content: `The Complex Number Explorer connects to several important topics in complex analysis:

**Polar Form**: Complex numbers can also be written as $z = r(\\cos\\theta + i\\sin\\theta)$ or $z = re^{i\\theta}$, where $r = |z|$ is the modulus and $\\theta$ is the argument (angle from the positive real axis).

**Complex Arithmetic**: Addition combines real and imaginary parts separately. Multiplication uses the distributive property along with $i^2 = -1$. Division uses conjugates to rationalize denominators.

**Euler's Formula**: The remarkable identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ connects exponential and trigonometric functions through complex numbers.

**Applications**: Complex numbers model oscillations, waves, electrical impedance, quantum states, and 2D transformations in graphics and engineering.`,
      before: ``,
      after: ``,
      link: '',
    }

  }

  const seoData = {
    title: "Complex Number Explorer - Interactive Visualizer | Learn Math Class",
    description: "Interactive complex plane visualizer. Drag points to explore real parts, imaginary parts, modulus, and conjugates with instant calculations and explanations.",
    keywords: keyWords.join(", "),
    url: "/complex-numbers/visual-tools/complex-explorer",
    name: "Complex Number Explorer"
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Number Explorer",
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive Argand plane with drag-and-drop",
        "Real-time modulus calculation",
        "Complex conjugate visualization",
        "Right triangle geometric display",
        "Quadrant-aware explanations",
        "Adjustable range (±5 to ±10)",
        "Coordinate input fields"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
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
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Complex Number Explorer",
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

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData
    }
  }
}

export default function ComplexExplorerPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas
}) {

  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [sectionsContent.obj4.content]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [sectionsContent.obj5.content]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [sectionsContent.obj6.content]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [sectionsContent.obj7.content]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [sectionsContent.obj8.content]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [sectionsContent.obj9.content]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [sectionsContent.obj10.content]
    },
    {
      id: '11',
      title: sectionsContent.obj11.title,
      link: sectionsContent.obj11.link,
      content: [sectionsContent.obj11.content]
    }
  ]

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
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.webApplication)
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
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'0px'}}>Complex Number Explorer</h1>
      <br/>
      <ComplexExplorer/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}