
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
import EulerFormulaExplorer from '../../../../app/components/calculators/complex-numbers/EulerFormulaExplorer'


export async function getStaticProps(){

  const keyWords = [
    "euler's formula",
    "euler formula visualization",
    "euler's formula explorer",
    "e^iθ complex plane",
    "euler's formula interactive",
    "cos theta + i sin theta",
    "euler's identity",
    "complex exponential function",
    "unit circle complex numbers",
    "polar form visualization",
    "euler formula calculator",
    "complex plane interactive tool",
    "euler formula right triangle",
    "trigonometry complex numbers",
    "landmark angles unit circle"
  ]

  const sectionsContent={

    obj1:{
      title:`Getting Started — Drag the Point`,
      content:`The blue draggable point on the complex plane represents the value of $re^{i\\theta}$. Grab it and move it anywhere within the plane to explore how **Euler's formula** connects angles, trigonometry, and complex numbers in real time.

As you drag, the right panel updates instantly. You will see the current angle $\\theta$ in both degrees and radians, the cosine and sine values, and the resulting complex number in rectangular form. A colored right triangle appears connecting the origin to your point, with the horizontal leg showing the real part and the vertical leg showing the imaginary part.

Start by dragging the point slowly around the **unit circle**. Watch how the triangle changes shape, how the projections on both axes shift, and how the formula breakdown at the right walks through each substitution step. Every position you place the point produces a unique geometric snapshot of Euler's formula in action.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Navigating All Four Quadrants`,
      content:`Each quadrant of the complex plane produces a visually distinct triangle with different sign combinations for cosine and sine. Drag the point into each quadrant to see how the triangle flips and the values change sign.

**Quadrant I** (upper right): both $\\cos\\theta > 0$ and $\\sin\\theta > 0$. The triangle sits in the standard position with the green horizontal leg pointing right and the red vertical leg pointing up.

**Quadrant II** (upper left): $\\cos\\theta < 0$ while $\\sin\\theta > 0$. The horizontal leg now extends to the left of the imaginary axis. The real part of $e^{i\\theta}$ becomes negative.

**Quadrant III** (lower left): both components are negative. The triangle appears below and to the left of the origin, and the complex number lies in the third quadrant.

**Quadrant IV** (lower right): $\\cos\\theta > 0$ while $\\sin\\theta < 0$. The vertical leg drops below the real axis. This corresponds to angles between $\\frac{3\\pi}{2}$ and $2\\pi$.

Each quadrant configuration makes a distinct illustration showing how the signs of the real and imaginary parts depend on where the angle places the point.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Landmark Angle Presets`,
      content:`Seven preset buttons below the sliders snap the explorer to important angles on the unit circle: $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$, $\\pi$, and $\\frac{3\\pi}{2}$. Each button also resets the radius to $r = 1$, placing the point exactly on the unit circle.

Click $\\frac{\\pi}{6}$ (30°) to see the classic 30-60-90 triangle with $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2} \\approx 0.866$ and $\\sin\\frac{\\pi}{6} = \\frac{1}{2} = 0.5$. The horizontal leg is noticeably longer than the vertical one.

Click $\\frac{\\pi}{4}$ (45°) and the triangle becomes isosceles — both legs have equal length since $\\cos\\frac{\\pi}{4} = \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2} \\approx 0.707$. The point sits exactly on the diagonal.

Click $\\frac{\\pi}{3}$ (60°) and the triangle mirrors the 30° case: now the vertical leg is longer. Together, these three angles illustrate how the balance between real and imaginary parts shifts as $\\theta$ increases through the first quadrant.

Click $\\pi$ to see **Euler's identity** in action — the point lands at $-1$ on the real axis, confirming that $e^{i\\pi} = -1$.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Degenerate States — When the Triangle Collapses`,
      content:`At certain angles the right triangle collapses into a line segment because one of the two trigonometric components equals zero. These degenerate configurations are important special cases of Euler's formula.

At $\\theta = 0$: the point sits at $(r, 0)$ on the positive real axis. Since $\\sin 0 = 0$, the vertical leg vanishes entirely and the triangle reduces to a horizontal line. The formula reads $e^{i \\cdot 0} = 1$.

At $\\theta = \\frac{\\pi}{2}$: the point lands at $(0, r)$ on the positive imaginary axis. Now $\\cos\\frac{\\pi}{2} = 0$, so the horizontal leg disappears. Only the vertical red segment remains. This gives $e^{i\\pi/2} = i$, a purely imaginary result.

At $\\theta = \\pi$: the point reaches $(-r, 0)$ on the negative real axis — another horizontal-only state. The formula yields the famous $e^{i\\pi} = -1$.

At $\\theta = \\frac{3\\pi}{2}$: the point drops to $(0, -r)$ on the negative imaginary axis, producing a downward vertical segment. Here $e^{i3\\pi/2} = -i$.

These four states correspond to the axis crossings of the unit circle. Each one produces a clean, degenerate illustration with no triangle — just a single colored line along one axis.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Adjusting the Radius`,
      content:`The $r$ slider controls the modulus (distance from the origin) and ranges from $0.1$ to $2.4$. When $r = 1$, the point lies on the solid unit circle. When $r \\neq 1$, a dashed circle appears at radius $r$, and the triangle labels switch from "$\\cos\\theta$" / "$\\sin\\theta$" to "$r\\cos\\theta$" / "$r\\sin\\theta$".

Try setting $\\theta = \\frac{\\pi}{4}$ and then slowly increasing $r$ from $1$ to $2$. The triangle grows proportionally — its shape stays the same because the angle has not changed, but every side length doubles. The live values panel reflects the scaled components: at $r = 2$, the real and imaginary parts are both $2 \\times 0.707 \\approx 1.414$.

Setting $r$ below $1$ shrinks the triangle inside the unit circle. At $r = 0.5$, the point sits halfway to the unit circle and all component values are halved.

This demonstrates the general **polar form** $z = re^{i\\theta}$, where $r$ scales the unit-circle point outward or inward. The angle determines direction; the radius determines magnitude.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`Reading the Live Values and Formula Breakdown`,
      content:`The right panel provides two complementary readouts that update with every change to $\\theta$ or $r$.

The **Live Values** section displays six quantities: the current angle $\\theta$ in radians and degrees, $\\cos\\theta$ (green, matching the horizontal leg), $\\sin\\theta$ (red, matching the vertical leg), $\\text{Re}(z)$ and $\\text{Im}(z)$ as the rectangular coordinates, and $|z|$ as the modulus. When $r = 1$, the real and imaginary parts equal $\\cos\\theta$ and $\\sin\\theta$ directly.

The **Formula Breakdown** walks through the substitution step by step. Step 1 states Euler's formula. Step 2 plugs in the current $\\theta$ value. Step 3 evaluates cosine and sine numerically and displays the final complex number. When $r \\neq 1$, an additional multiplication step appears showing $r \\cdot e^{i\\theta} = r\\cos\\theta + ir\\sin\\theta$.

At landmark angles, an orange callout box appears with the symbolic result — for example, "$e^{i\\pi} = -1$" and a note explaining its significance. This callout only activates when $r = 1$ and the angle is within a small tolerance of a preset value.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`What is Euler's Formula?`,
      content:`**Euler's formula** states that for any real number $\\theta$:

$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$

This equation bridges three seemingly unrelated mathematical objects: the exponential function, trigonometric functions, and the imaginary unit $i$. It reveals that raising $e$ to an imaginary power produces a point on the **unit circle** in the complex plane, with the angle $\\theta$ measured in radians from the positive real axis.

The formula can be derived from the Taylor series expansions of $e^x$, $\\cos x$, and $\\sin x$. When $x = i\\theta$ is substituted into the exponential series, the real terms collect into the cosine series and the imaginary terms collect into the sine series.

This is one of the most important results in mathematics because it unifies algebra, geometry, and analysis. It converts between rectangular form $a + bi$ and **polar form** $re^{i\\theta}$, making operations like multiplication, division, and exponentiation of complex numbers far simpler.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`Euler's Identity — The Special Case at θ = π`,
      content:`Setting $\\theta = \\pi$ in Euler's formula gives:

$$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0i = -1$$

Rearranging: $e^{i\\pi} + 1 = 0$. This is **Euler's identity**, often called the most beautiful equation in mathematics because it links five fundamental constants — $e$, $i$, $\\pi$, $1$, and $0$ — in a single compact relation.

In the explorer, click the $\\pi$ button to see this visually. The point lands at $(-1, 0)$ on the negative real axis. The triangle collapses to a horizontal line pointing left, and the orange landmark callout confirms the identity.

Similarly, setting $\\theta = \\frac{\\pi}{2}$ gives $e^{i\\pi/2} = i$, meaning that multiplying by $e^{i\\pi/2}$ rotates any complex number by 90° counterclockwise. And $\\theta = 2\\pi$ returns to $e^{i \\cdot 2\\pi} = 1$, completing a full revolution. These special cases demonstrate that the exponential function naturally encodes rotation in the complex plane.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`The Right Triangle, Trigonometry, and Polar Form`,
      content:`The colored right triangle displayed in the explorer is the geometric heart of Euler's formula. Its three sides directly represent the three parts of the equation $re^{i\\theta} = r\\cos\\theta + ir\\sin\\theta$.

The navy hypotenuse from the origin to the point $z$ has length $r = |z|$, the **modulus**. The green horizontal leg from the origin to the projection on the real axis has length $|r\\cos\\theta|$, the real part. The red vertical leg from the real-axis projection up to $z$ has length $|r\\sin\\theta|$, the imaginary part.

This is identical to the standard trigonometric relationship in a right triangle where the adjacent side is $r\\cos\\theta$ and the opposite side is $r\\sin\\theta$. The formula $e^{i\\theta}$ simply packages this triangle into exponential notation.

The **polar form** $z = re^{i\\theta}$ is useful because multiplication of complex numbers becomes:

$$z_1 \\cdot z_2 = r_1 r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$$

Moduli multiply, angles add. This is far simpler than expanding $(a + bi)(c + di)$ in rectangular form. The explorer makes this visible: the angle $\\theta$ controls rotation while $r$ controls scaling.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Related Concepts and Tools`,
      content:`Euler's formula connects to many areas of complex number theory and applied mathematics. Explore these related topics to deepen your understanding.

**Complex Number Explorer** — an interactive tool for visualizing complex arithmetic, plotting numbers in rectangular and polar form, and performing operations on the complex plane.

**Complex Numbers** — foundational theory covering the imaginary unit $i$, rectangular form $a + bi$, and algebraic operations.

**Polar Form and Modulus** — detailed coverage of writing complex numbers as $re^{i\\theta}$, computing the modulus $|z|$ and argument $\\arg(z)$.

**De Moivre's Theorem** — extends Euler's formula to integer powers: $(e^{i\\theta})^n = e^{in\\theta}$, which gives $( \\cos\\theta + i\\sin\\theta )^n = \\cos(n\\theta) + i\\sin(n\\theta)$.

**Roots of Unity** — the $n$-th roots of $1$ are $e^{i \\cdot 2\\pi k/n}$ for $k = 0, 1, \\dots, n-1$, equally spaced around the unit circle.

**Trigonometric Identities** — Euler's formula provides elegant proofs of angle-sum, double-angle, and product-to-sum identities by manipulating exponentials.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}

  const faqQuestions = {
    obj1: {
      question: "What is Euler's formula?",
      answer: "Euler's formula states that e^(iθ) = cos θ + i sin θ for any real angle θ. It connects the exponential function with trigonometric functions through the imaginary unit i, showing that complex exponentials trace the unit circle in the complex plane."
    },
    obj2: {
      question: "What is Euler's identity?",
      answer: "Euler's identity is the special case e^(iπ) + 1 = 0, obtained by setting θ = π in Euler's formula. It links five fundamental constants — e, i, π, 1, and 0 — in a single equation and is often called the most beautiful formula in mathematics."
    },
    obj3: {
      question: "How do you use this Euler's formula explorer?",
      answer: "Drag the blue point on the complex plane or use the θ slider to change the angle and the r slider to change the radius. The tool displays a right triangle, live cosine and sine values, and a step-by-step formula breakdown that updates in real time."
    },
    obj4: {
      question: "Why does the triangle disappear at certain angles?",
      answer: "At θ = 0, π, π/2, and 3π/2 the triangle collapses because one trigonometric component equals zero. At 0 and π, sin θ = 0 so there is no vertical leg. At π/2 and 3π/2, cos θ = 0 so there is no horizontal leg. These are the axis-crossing degenerate cases."
    },
    obj5: {
      question: "How does Euler's formula relate to polar form?",
      answer: "Polar form writes any complex number as z = r·e^(iθ), where r is the modulus (distance from origin) and θ is the argument (angle). Euler's formula provides the bridge: r·e^(iθ) = r cos θ + i·r sin θ, converting between polar and rectangular representations."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Euler's Formula Explorer",
      "description": "Interactive Euler's formula visualization on the complex plane. Drag points, adjust angle and radius, and see real-time trigonometric breakdowns for e^iθ.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/euler-formula",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable point on the complex plane for real-time angle exploration",
        "θ slider with degree and radian display from 0 to 2π",
        "Adjustable radius slider to explore polar form r·e^(iθ)",
        "Color-coded right triangle showing cos θ and sin θ components",
        "Seven landmark angle presets including Euler's identity at θ = π",
        "Live formula breakdown with step-by-step substitution",
        "Projection lines and dots on real and imaginary axes"
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
          "name": "Euler's Formula Explorer",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/euler-formula"
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


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Euler's Formula Explorer | Learn Math Class",
        description: "Interactive Euler's formula visualization on the complex plane. Drag points, adjust angle and radius, and see real-time trigonometric breakdowns for e^iθ.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/euler-formula",
         name: "Euler's Formula Explorer"
      },
        
       }
    }
   }

export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
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
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Euler&apos;s Formula Explorer</h1>
   <br/>
   <EulerFormulaExplorer/>
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