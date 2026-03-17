// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import PowersOfICalculator from '@/app/components/calculators/complex-numbers/PowersOfICalculator'




// export async function getStaticProps(){

//   const keyWords=['','','','','']

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/complex-numbers/visual-tools/i-powers",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Powers of i Calculator/Visualizer</h1>
//    <br/>
//   <PowersOfICalculator/>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    /> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


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
import PowersOfICalculator from '@/app/components/calculators/complex-numbers/PowersOfICalculator'




export async function getStaticProps(){

  const keyWords = [
    "powers of i",
    "powers of i calculator",
    "imaginary unit powers",
    "i to the power of n",
    "i squared equals",
    "i cubed value",
    "powers of i cycle",
    "i^n mod 4",
    "imaginary number exponent",
    "powers of i pattern",
    "complex number powers",
    "i to the fourth power",
    "simplify powers of i",
    "i power calculator",
    "cyclic pattern imaginary unit"
  ]

  const sectionsContent={

    obj1:{
      title:`Getting Started — Enter Any Exponent`,
      content:`Type any integer into the input field next to the large $i$ symbol. The calculator immediately shows the result, a four-step solution, and highlights which of the four possible outcomes applies.

Six preset buttons — 17, 100, 323, 1000, 45, and 82 — let you jump to specific examples. Click **Random** to generate a value between 0 and 1000, or **Clear** to reset the input and hide the calculation panel.

The four-case strip at the top always stays visible, displaying the four values in the cycle: $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$. Whichever remainder matches the current exponent gets highlighted with a blue background, so you can see at a glance where the input lands in the cycle.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`The Four Remainder States`,
      content:`Every power of $i$ reduces to one of exactly four values, determined by the remainder when the exponent is divided by 4. Each state produces a distinct visual configuration in the calculator.

**Remainder 0** — result is $1$. Try entering 100, 44, or any multiple of 4. The left node on the cycle diagram lights up and the case cell for $r = 0$ highlights. The four-step breakdown shows the division leaving zero remainder.

**Remainder 1** — result is $i$. Enter 17, 45, or 1001. The top node activates. The calculation confirms that the exponent equals $4q + 1$, so the final lookup gives $i^1 = i$.

**Remainder 2** — result is $-1$. Enter 82, 50, or 6. The right node highlights. This is the state behind the fundamental definition $i^2 = -1$.

**Remainder 3** — result is $-i$. Enter 323, 99, or 7. The bottom node activates. The chain $i^3 = i^2 \\cdot i = -1 \\cdot i = -i$ appears in the explanation panel.

Each remainder state produces its own unique cycle diagram highlighting, making four distinct visual snapshots.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Reading the Cycle Diagram`,
      content:`The SVG cycle diagram sits between the case strip and the calculation steps. It shows four nodes arranged in a circle — $i^1 = i$ at the top, $i^2 = -1$ at the right, $i^3 = -i$ at the bottom, and $i^4 = 1$ at the left — connected by curved arrows indicating the clockwise progression through the cycle.

The active node glows with a ring effect and full opacity while inactive nodes appear faded. Inside each node, the power label appears above a divider line and the resulting value below it.

To the right of the circle, a **Shortcut** box lists all four remainder-to-value mappings with the active row highlighted in blue. At the bottom, an example bar shows the current computation in compact form: the exponent, its mod 4 result, and the final value.

The center of the circle reads "cycle of 4," reinforcing the key insight that powers of $i$ repeat every four steps. This diagram is the visual anchor of the entire tool — each of the four remainder states produces a different highlighted configuration.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Step-by-Step Calculation Walkthrough`,
      content:`When an exponent is entered, the calculator displays a four-step breakdown on the left panel.

**Step 1 — Divide by 4:** The exponent $k$ is divided by 4, showing the quotient $q$ and remainder $r$ with a verification check: $4 \\times q + r = k$.

**Step 2 — Rewrite:** The power is decomposed as $i^k = i^{4q + r} = i^{4q} \\cdot i^r$, separating the full cycles from the leftover.

**Step 3 — Apply $i^4 = 1$:** Since $i^4 = 1$, raising 1 to any power still gives 1, so $i^{4q} = (i^4)^q = 1^q = 1$. The expression simplifies to $1 \\cdot i^r = i^r$.

**Step 4 — Lookup:** The remainder $r$ maps directly to one of the four known values: $1$, $i$, $-1$, or $-i$.

Below the steps, the **answer bar** shows the final result in large text alongside the general formula $i^k = i^r$ where $r = k \\bmod 4$.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Explanation Panel and Special Cases`,
      content:`The right-side explanation panel lists all four base cases with their derivation chains. The row matching the current remainder is highlighted with a blue background and a left border accent. This makes it easy to see both the active result and the reasoning behind it.

The four explanations are:

$i^0 = 1$ — any number raised to the zero power equals 1.

$i^1 = i$ — $i$ to the first power is simply $i$.

$i^2 = -1$ — this is the defining property of the imaginary unit.

$i^3 = -i$ — derived by multiplying: $i^3 = i^2 \\cdot i = (-1)(i) = -i$.

Try entering small exponents like 0, 1, 2, and 3 to confirm each base case directly. Then try a large number like 1000 — the same four-step process applies regardless of magnitude, because only the remainder after dividing by 4 matters.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`Quick Reference Table`,
      content:`Click the **Quick Reference** toggle at the bottom to expand a scrollable table showing $i^0$ through $i^{100}$. Each row lists the power, its $k \\bmod 4$ value, and the result.

Every fourth row is separated by a thicker border, visually reinforcing the length-4 cycle. Scanning down the result column, the repeating pattern $1, i, -1, -i, 1, i, -1, -i, \\dots$ becomes immediately obvious.

This table serves as a verification tool. If you enter 47 in the calculator and get $-i$, you can scroll to row 47 in the reference table and confirm the result independently. It also helps students who learn by pattern recognition — seeing dozens of repetitions of the same four-value cycle builds intuition faster than any single example.

The table is compact by default (collapsed) so it does not overwhelm the main interface. Open it when you need to verify or explore, collapse it when you are done.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`Why Powers of i Cycle Every 4`,
      content:`The repeating pattern comes from the definition $i^2 = -1$. Building up from there:

$$i^0 = 1$$
$$i^1 = i$$
$$i^2 = -1$$
$$i^3 = i^2 \\cdot i = -i$$
$$i^4 = i^3 \\cdot i = (-i)(i) = -i^2 = -(-1) = 1$$

At $i^4$ the value returns to $1$, which is where $i^0$ started. From this point every subsequent multiplication by $i$ just re-traces the same sequence: $1 \\to i \\to -1 \\to -i \\to 1 \\to \\dots$

Formally, the group generated by $i$ under multiplication is the cyclic group of order 4: $\\{1, i, -1, -i\\}$. The remainder $r = k \\bmod 4$ identifies which element of this group $i^k$ equals. This is why the mod 4 shortcut works for any integer exponent, no matter how large.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`Negative and Zero Exponents`,
      content:`The calculator handles negative exponents using the same mod 4 logic. For any negative integer $k$, the remainder is computed as $((k \\bmod 4) + 4) \\bmod 4$ to ensure a non-negative result between 0 and 3.

For example, $i^{-1}$: since $i \\cdot i^{-1} = 1$, we need the multiplicative inverse of $i$. Multiplying numerator and denominator by $-i$ gives $i^{-1} = \\frac{1}{i} = \\frac{-i}{-i^2} = \\frac{-i}{1} = -i$. The calculator confirms this because $-1 \\bmod 4 = 3$ and $i^3 = -i$.

Similarly, $i^{-2} = \\frac{1}{i^2} = \\frac{1}{-1} = -1$, matching remainder 2. And $i^{-3} = \\frac{1}{i^3} = \\frac{1}{-i} = i$, matching remainder 1.

The zero exponent $i^0 = 1$ follows the standard convention that any nonzero number raised to the power 0 equals 1.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`Connection to Complex Numbers and Euler's Formula`,
      content:`The four powers of $i$ correspond to four special points on the unit circle in the **complex plane**: $1$ sits on the positive real axis, $i$ on the positive imaginary axis, $-1$ on the negative real axis, and $-i$ on the negative imaginary axis.

Using **Euler's formula** $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, each power of $i$ maps to a quarter turn:

$i^0 = e^{i \\cdot 0} = 1$ (angle $0$)

$i^1 = e^{i\\pi/2} = i$ (angle $90°$)

$i^2 = e^{i\\pi} = -1$ (angle $180°$)

$i^3 = e^{i3\\pi/2} = -i$ (angle $270°$)

Multiplying by $i$ is equivalent to rotating a point 90° counterclockwise on the complex plane. Four such rotations return to the starting position — this is the geometric reason behind the length-4 cycle.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Related Concepts and Tools`,
      content:`The powers of $i$ connect to several fundamental topics in complex number theory. Explore these related pages to build a fuller picture.

**Complex Numbers** — foundational theory covering the imaginary unit $i$, rectangular form $a + bi$, and algebraic operations.

**Euler's Formula Explorer** — interactive visualization of $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ on the complex plane, showing how the four powers of $i$ correspond to quarter-turn rotations.

**Complex Number Explorer** — a general-purpose tool for plotting and operating on complex numbers in both rectangular and polar form.

**Polar Form and Modulus** — how to express complex numbers as $re^{i\\theta}$ and compute the modulus $|z|$ and argument $\\arg(z)$.

**De Moivre's Theorem** — extends powers of complex numbers to arbitrary exponents using $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$.`,
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
      question: "What are the powers of i?",
      answer: "The imaginary unit i cycles through four values when raised to successive integer powers: i⁰ = 1, i¹ = i, i² = −1, i³ = −i, and then i⁴ = 1 again. This four-step pattern repeats indefinitely for all integer exponents."
    },
    obj2: {
      question: "How do you simplify any power of i?",
      answer: "Divide the exponent by 4 and use the remainder. If the remainder is 0 the answer is 1, if 1 the answer is i, if 2 the answer is −1, and if 3 the answer is −i. This works because i⁴ = 1, so full groups of 4 in the exponent contribute nothing."
    },
    obj3: {
      question: "Why do powers of i repeat every 4?",
      answer: "Because i² = −1 by definition, and multiplying twice more gives i⁴ = (i²)² = (−1)² = 1. Once the value returns to 1, every subsequent power re-traces the same cycle of 1, i, −1, −i."
    },
    obj4: {
      question: "What is i to a negative power?",
      answer: "Negative exponents follow the same cycle. Compute the remainder of the exponent modulo 4 (adjusted to be non-negative). For example, i⁻¹ = −i because −1 mod 4 = 3, and i³ = −i."
    },
    obj5: {
      question: "How do powers of i relate to the complex plane?",
      answer: "The four powers of i correspond to quarter-turn rotations on the unit circle: 1 is at 0°, i is at 90°, −1 is at 180°, and −i is at 270°. Multiplying by i rotates a complex number 90° counterclockwise."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Powers of i Calculator",
      "description": "Interactive calculator for powers of the imaginary unit i. Enter any exponent, see the four-step mod 4 solution, cycle diagram, and reference table from i⁰ to i¹⁰⁰.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/i-powers",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Instant calculation of i^n for any integer exponent",
        "Four-step solution breakdown with division, rewrite, simplification, and lookup",
        "Animated cycle diagram highlighting the active remainder node",
        "Four-case strip showing all possible values with active highlighting",
        "Six preset examples plus random and clear buttons",
        "Collapsible reference table from i⁰ to i¹⁰⁰"
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
          "name": "Powers of i Calculator",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/i-powers"
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
        title: "Powers of i Calculator | Learn Math Class",
        description: "Calculate any power of the imaginary unit i instantly. See the mod 4 cycle, step-by-step solution, animated diagram, and full reference table from i⁰ to i¹⁰⁰.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/i-powers",
         name: "Powers of i Calculator"
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Powers of i Calculator/Visualizer</h1>
   <br/>
  <PowersOfICalculator/>
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