

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
import ConjugateModulusVisualizer from '../../../../app/components/calculators/complex-numbers/ConjugateModulusVisualizer'
import SiblingsNav from '../../../../app/components/SiblingsNav'

export async function getStaticProps(){

  const keyWords = [
    'complex conjugate visualizer',
    'complex conjugate tool',
    'modulus of complex number',
    'complex conjugate interactive',
    'z bar calculator',
    'complex number modulus calculator',
    'conjugate modulus relationship',
    'z times z bar proof',
    'argand diagram conjugate',
    'complex plane visualizer',
    'complex conjugate reflection',
    'visualize complex conjugate',
    'complex number magnitude',
    'conjugate symmetry tool',
    'interactive complex plane'
  ]

    const sectionsContent={

    obj1:{
      title:`How to Use the Visualizer`,
      content:`This tool lets you explore the relationship between a complex number, its conjugate, and its modulus through direct manipulation on the Argand plane.

**Getting started:**

- Drag the navy blue point labeled **z** anywhere on the complex plane
- Watch the orange point **z̄** (the conjugate) mirror your movements across the real axis
- Observe how the dashed circle representing the modulus updates in real time

**Manual input method:**

Enter specific values using the Re and Im number inputs on the right panel. Values are constrained to the range ±10. If you enter a value outside this range, the tool automatically clamps it and displays a warning message.

**Quick exploration:**

Click any preset button (like 3+2i, −1+4i, or 3i) to jump to interesting examples, or use the Random button to generate unexpected combinations.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Understanding the Display`,
      content:`The complex plane visualization shows several elements that update as you move z:

**Points and vectors:**

- Navy blue point and vector: your complex number z
- Orange point and dashed vector: the conjugate z̄
- Small gray dot at center: the origin (0, 0)

**Geometric elements:**

- Dashed blue circle: shows all points with the same modulus as z — notice both z and z̄ lie on this circle
- Light right triangles: connect origin → real part → z (and similarly for z̄), showing how modulus relates to the Pythagorean theorem
- Purple dashed vertical line: connects z to z̄, emphasizing reflection symmetry across the real axis

**Axis labels:**

The horizontal axis shows the real part (Re), while the vertical axis shows the imaginary part (Im). Tick marks appear at every 2 units for readability.`,
      before:``,
      after:``,
      link:'',
    },
  
    obj3:{
      title:`Using the Values Panel`,
      content:`The Values panel on the right displays all computed quantities in real time as you manipulate z:

**Basic values:**

- **z**: The complex number you're exploring, shown in standard form a + bi
- **z̄**: The conjugate, with the same real part but negated imaginary part
- **|z|**: The modulus (distance from origin), calculated as $\\sqrt{a^2 + b^2}$
- **|z|²**: The modulus squared, equal to $a^2 + b^2$

**Product display:**

- **z · z̄**: Shows the multiplication setup as (a + bi)(a − bi)

Each row highlights on hover, making it easy to track specific values. The color coding matches the diagram: navy for z, orange for z̄, blue for modulus-related quantities.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`The Proof Box Explained`,
      content:`The green proof box demonstrates a fundamental identity: **z · z̄ = |z|²**. This proof updates live with your current values.

**First line — computing z · z̄:**

The tool calculates $a^2 + b^2$ directly from your real and imaginary parts. For example, with z = 3 + 2i: $3^2 + 2^2 = 9 + 4 = 13$.

**Second line — computing |z|²:**

Starting from the modulus $|z| = \\sqrt{a^2 + b^2}$, squaring gives $|z|^2 = a^2 + b^2$.

**Conclusion:**

Both calculations yield the same result, confirming z · z̄ = |z|². The checkmark indicates the identity holds for your current z value. Try different numbers — the identity always works!`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Exploring Presets and Special Cases`,
      content:`The preset buttons offer carefully chosen examples that highlight different behaviors:

**3+2i**: A standard complex number in the first quadrant — good starting point for understanding the basics.

**−1+4i**: Second quadrant example where the real part is negative. Notice z̄ appears in the third quadrant.

**3i**: A purely imaginary number lying on the imaginary axis. Here z and z̄ are symmetric about the origin, and both have the same distance from it.

**4**: A purely real number. The conjugate equals the original: $\\bar{4} = 4$. Both points overlap on the real axis.

**−2−3i**: Third quadrant example. The conjugate z̄ appears in the second quadrant.

**Random**: Generates arbitrary values to test that the z · z̄ = |z|² identity holds universally.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Special Cases to Investigate`,
      content:`Certain values reveal important properties of conjugates and modulus:

**Purely real numbers (Im = 0):**

Set z = 4 + 0i. The conjugate equals the original number. Both points overlap on the real axis. Real numbers are their own conjugates.

**Purely imaginary numbers (Re = 0):**

Set z = 0 + 3i. The conjugate is z̄ = −3i. Points appear on opposite sides of the origin along the imaginary axis.

**Origin (z = 0):**

Both z and z̄ collapse to the origin. Modulus is zero, and z · z̄ = 0.

**Unit circle:**

Try values where $a^2 + b^2 = 1$, such as 0.6 + 0.8i. The modulus equals 1, so z · z̄ = 1.

**Equal real and imaginary parts:**

Set z = 3 + 3i. The point lies on a 45° diagonal, and z̄ reflects to z = 3 − 3i at −45°.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`What is a Complex Conjugate?`,
      content:`The **complex conjugate** of a number z = a + bi is denoted z̄ (or sometimes z*) and defined as:

$$\\bar{z} = a - bi$$

Geometrically, the conjugate is the **reflection of z across the real axis**. The real part stays the same; only the imaginary part changes sign.

**Key properties:**

- $\\overline{\\bar{z}} = z$ — conjugating twice returns the original
- $\\overline{z_1 + z_2} = \\bar{z_1} + \\bar{z_2}$ — conjugate of a sum is the sum of conjugates
- $\\overline{z_1 \\cdot z_2} = \\bar{z_1} \\cdot \\bar{z_2}$ — conjugate of a product is the product of conjugates
- $z + \\bar{z} = 2a$ — sum gives twice the real part
- $z - \\bar{z} = 2bi$ — difference gives twice the imaginary part

For deeper theory on complex number fundamentals, see **complex numbers introduction**.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`The Modulus of a Complex Number`,
      content:`The **modulus** (or absolute value) of z = a + bi measures its distance from the origin:

$$|z| = \\sqrt{a^2 + b^2}$$

This formula comes directly from the **Pythagorean theorem**. On the complex plane, z forms a right triangle with legs of length |a| and |b|, and the modulus is the hypotenuse.

**Key properties:**

- $|z| \\geq 0$ and $|z| = 0$ only when z = 0
- $|\\bar{z}| = |z|$ — a number and its conjugate have the same modulus
- $|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$ — modulus of a product is the product of moduli
- $|z_1 / z_2| = |z_1| / |z_2|$ — modulus of a quotient is the quotient of moduli

The dashed circle in the visualizer shows all complex numbers sharing the same modulus as your current z. For more on distance calculations, see **complex plane geometry**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Why z · z̄ = |z|²`,
      content:`This identity is one of the most useful in complex number algebra. Here's the algebraic proof:

$$z \\cdot \\bar{z} = (a + bi)(a - bi)$$

Expanding using FOIL:

$$= a^2 - abi + abi - b^2i^2$$
$$= a^2 - b^2(-1)$$
$$= a^2 + b^2$$

Since $|z|^2 = (\\sqrt{a^2 + b^2})^2 = a^2 + b^2$, we have:

$$z \\cdot \\bar{z} = |z|^2$$

**Why this matters:**

This identity is essential for **rationalizing complex denominators**. To divide by a complex number, multiply numerator and denominator by the conjugate:

$$\\frac{1}{z} = \\frac{\\bar{z}}{z \\cdot \\bar{z}} = \\frac{\\bar{z}}{|z|^2}$$

The denominator becomes a real number, eliminating the imaginary part.`,
      before:``,
      after:``,
      link:'',
    },
//     obj10:{
//       title:`Related Concepts and Tools`,
//       content:`Explore more complex number topics with these resources:

// **Related visualizers:**

// - **Complex Number Explorer** — visualize complex numbers with modulus, quadrants, and coordinate display
// - **Complex Operations Visualizer** — see addition, subtraction, and multiplication geometrically
// - **Polar Form Visualizer** — explore the relationship between rectangular and polar representations

// **Theoretical foundations:**

// - **Complex Numbers** — comprehensive introduction to a + bi form
// - **Complex Plane** — understanding the Argand diagram coordinate system
// - **Polar Form** — representing complex numbers as r(cos θ + i sin θ)

// **Calculators:**

// - **Complex Number Calculator** — perform arithmetic operations
// - **Polar to Rectangular Converter** — convert between coordinate systems

// The conjugate and modulus concepts connect to advanced topics like **complex division**, **roots of unity**, and **Euler's formula**.`,
//       before:``,
//       after:``,
//       link:'',
//     },
obj10:{
  title:`Related Concepts and Tools`,
  content:`The conjugate appears throughout complex arithmetic — most visibly wherever division or modulus is involved. These tools show where it leads.

[Division Visualizer](!/complex-numbers/visual-tools/division) — the conjugate is the engine of complex division. To compute $\\frac{z_1}{z_2}$, you multiply numerator and denominator by $\\bar{z_2}$, turning the denominator into the real number $|z_2|^2 = z_2 \\cdot \\bar{z_2}$. This tool makes that process geometric.

[Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular) — the modulus $|z|$ you see here is the $r$ in polar form $re^{i\\theta}$. Conjugates share the same modulus but opposite argument: if $z = re^{i\\theta}$, then $\\bar{z} = re^{-i\\theta}$. Convert any point here to see its polar counterpart.

[Multiplication Visualizer](!/complex-numbers/visual-tools/multiplication) — $z \\cdot \\bar{z} = |z|^2$ is a multiplication, and a special one: the imaginary parts cancel exactly. See how multiplying a number by its conjugate always lands on the positive real axis.

[Distance & Midpoint Tool](!/complex-numbers/visual-tools/distance-midpoint) — conjugate pairs $z$ and $\\bar{z}$ are always symmetric about the real axis. Their midpoint is always real, and their distance is always $2|\\text{Im}(z)|$ — pure geometry that this tool illustrates directly.`,
  before:``,
  after:``,
  link:'',
},
  }

  const faqQuestions = {
    obj1: {
      question: "What is a complex conjugate?",
      answer: "The complex conjugate of z = a + bi is z̄ = a − bi. It has the same real part but the opposite sign on the imaginary part. Geometrically, the conjugate is the reflection of z across the real axis on the complex plane."
    },
    obj2: {
      question: "How do you find the conjugate of a complex number?",
      answer: "To find the conjugate, keep the real part unchanged and negate the imaginary part. For example, the conjugate of 3 + 4i is 3 − 4i, and the conjugate of −2 − 5i is −2 + 5i. Purely real numbers are their own conjugates."
    },
    obj3: {
      question: "What is the modulus of a complex number?",
      answer: "The modulus |z| of a complex number z = a + bi is its distance from the origin, calculated as |z| = √(a² + b²). This comes from the Pythagorean theorem applied to the right triangle formed by the real and imaginary components."
    },
    obj4: {
      question: "Why does z times its conjugate equal the modulus squared?",
      answer: "When you multiply z = a + bi by z̄ = a − bi, the cross terms cancel: (a + bi)(a − bi) = a² − (bi)² = a² + b². This equals |z|² = (√(a² + b²))² = a² + b². The result is always a non-negative real number."
    },
    obj5: {
      question: "What is the complex conjugate used for?",
      answer: "Conjugates are essential for dividing complex numbers and rationalizing complex denominators. Multiplying by the conjugate eliminates imaginary parts from denominators. They also appear in finding polynomial roots, signal processing, and quantum mechanics."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Conjugate and Modulus Visualizer",
      "description": "Interactive complex conjugate and modulus visualizer. Explore z, z̄, and |z| by dragging points on the Argand plane with live calculations and proof.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/complex-conjugate",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Drag-and-drop complex number manipulation on Argand plane",
        "Real-time conjugate z̄ reflection across real axis",
        "Live modulus calculation with visual circle representation",
        "Step-by-step proof that z · z̄ = |z|²",
        "Preset examples including purely real and purely imaginary cases",
        "Manual coordinate input with range validation"
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
          "name": "Complex Conjugate Visualizer",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/complex-conjugate"
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
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Complex Conjugate Visualizer - Interactive Tool | Learn Math Class",
        description: "Interactive complex conjugate and modulus visualizer. Explore z, z̄, and |z| by dragging points on the Argand plane with live calculations and proof.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/complex-conjugate",
         name: "Complex Conjugate and Modulus Visualizer"
      },
        
       }
    }
   }

export default function ComplexConjugateVisualizerPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas
}) {

    
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
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Complex Conjugate Visualizer</h1>
   <br/>
   <SiblingsNav>
   <ConjugateModulusVisualizer/>
   </SiblingsNav>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   />
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