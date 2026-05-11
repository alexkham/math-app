// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import TriangleExplorer from '../../../../app/components/trigonometry/triangle/TriangleExplorer'


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

//     obj0:{
//       title:`Key Terms`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
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
//         url: "/trigonometry/visual-tools/triangle-explorer",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Triangle</h1>
//    <br/>
//    <TriangleExplorer/>
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
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
//    <br/>
//    {/* <Sections sections={genericSections.slice(1)}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }




import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TriangleExplorer from '../../../../app/components/trigonometry/triangle/TriangleExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'



export async function getStaticProps(){

  const keyWords = [
    'triangle explorer',
    'interactive triangle visualizer',
    'triangle types calculator',
    'equilateral isosceles scalene',
    'acute obtuse right triangle',
    '45-45-90 triangle',
    '30-60-90 triangle',
    'pythagorean theorem visualizer',
    '3-4-5 triangle',
    '5-12-13 triangle',
    'law of sines visualizer',
    'law of cosines tool',
    'triangle angles calculator',
    'SOH CAH TOA tool',
    'drag triangle vertices'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Vertex** — a corner of the triangle. Labeled $A$, $B$, $C$.
• **Side** — segment between two vertices. Side $a$ lies opposite vertex $A$, side $b$ opposite $B$, and side $c$ opposite $C$.
• **Interior angle** — the angle at a vertex, between the two sides meeting there. The three interior angles always sum to $180°$.
• **Hypotenuse** — in a right triangle, the side opposite the $90°$ angle and the longest side.
• **Pythagorean triple** — three positive integers $(a, b, c)$ satisfying $a^2 + b^2 = c^2$, like $3$-$4$-$5$ or $5$-$12$-$13$.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Choosing a Scenario`,
      content:`The blue **top bar** groups twelve scenarios into four categories. Click any name to load that triangle:

• **Classification** — equilateral, isosceles, acute, obtuse, right scalene.
• **Special** — $45$-$45$-$90$, $30$-$60$-$90$, $3$-$4$-$5$, $5$-$12$-$13$.
• **Trig laws** — law of sines, law of cosines.
• **Explore** — free drag mode.

The active scenario stays highlighted. The diagram, intro text, and explanation panel on the right all refresh together. Click **↻ reset** to return the current scenario to its starting shape.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Dragging Vertices`,
      content:`Many scenarios start static for clarity. Tick the **draggable** checkbox in the top bar to make all three vertices grabbable.

How dragging works:
• Hover a vertex — a circular halo confirms it is grabbable.
• Click and drag with mouse or touch.
• The triangle reshapes in real time, with sides, angles, and stats updating immediately.

The **Free drag** scenario starts with dragging enabled. **Law of sines** and **Law of cosines** also start draggable, so you can confirm the laws hold for arbitrary shapes.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Locking Angles`,
      content:`The **Lock angles** controls let you fix one or two interior angles before dragging.

Per-angle controls:
• Click the **lock** button — the angle freezes at its current value.
• A number input appears with the locked value in degrees.
• A range slider lets you change the locked value continuously.

You can lock up to two angles at once. With two locked, the third is computed automatically as $180° - \\angle_1 - \\angle_2$. Locked angles show a dashed circle and a small lock icon at the vertex on the diagram.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Adjusting the Zoom`,
      content:`The **Zoom** controls in the second toolbar let you scale the diagram without changing the triangle:

• **−** decreases zoom by $10\\%$ down to $30\\%$.
• **+** increases zoom by $10\\%$ up to $500\\%$.
• **fit** snaps back to $100\\%$ when zoomed away.

Zooming affects only display size — the underlying coordinates, side lengths, and angle measures are unchanged. The grid in the background gives a stable visual reference at any zoom level.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Diagram`,
      content:`Each part of the SVG is color-coded so the same color always means the same thing.

Color mapping:
• **Red** — vertex $A$, side $a$, angle at $A$.
• **Amber** — vertex $B$, side $b$, angle at $B$.
• **Blue** — vertex $C$, side $c$, angle at $C$.

Visual cues:
• Curved arcs at each vertex show the interior angle, with the value in degrees.
• A small square mark replaces the arc when the angle is exactly $90°$.
• Side labels $a$, $b$, $c$ sit on the outside of each segment.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Stats Bar`,
      content:`Below the diagram, a single line summarizes everything numeric:

• **∠A**, **∠B**, **∠C** — interior angles in degrees, color-matched to vertices.
• **a**, **b**, **c** — side lengths in user units.
• **P** — perimeter, the sum of the three sides.
• **Area** — calculated from the vertex coordinates.

Drag any vertex (or change a locked angle) and watch the entire row update. This is the fastest way to verify properties like "the side opposite the largest angle is always the longest."`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Reading the Explanation Panel`,
      content:`The right-hand panel changes contents per scenario, but the structure is consistent:

• **Header** — name of the active scenario.
• **Intro** — one-sentence summary of what is special about it.
• **Explanation blocks** — formula boxes and reasoning for the relevant theorems.

Examples by scenario:
• **Equilateral** — classification + angle sum.
• **3-4-5** — Pythagorean triple verification + trig ratios.
• **Law of sines** — the three ratios $a / \\sin A$, $b / \\sin B$, $c / \\sin C$ printed live.
• **Law of cosines** — both sides of $c^2 = a^2 + b^2 - 2ab\\cos C$ shown numerically.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Triangle Classifications`,
      content:`Triangles are classified two independent ways:

**By angles:**
• **Acute** — all three angles below $90°$.
• **Right** — one angle exactly $90°$.
• **Obtuse** — one angle above $90°$.

**By sides:**
• **Equilateral** — all three sides equal.
• **Isosceles** — exactly two sides equal.
• **Scalene** — all three sides different.

A triangle has one label from each list (e.g., right scalene, acute isosceles). For deeper coverage with proofs, see the **triangle classifications page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Pythagorean Theorem and Triples`,
      content:`In any right triangle with legs $a$, $b$ and hypotenuse $c$:

$$a^2 + b^2 = c^2$$

A **Pythagorean triple** is a set of three positive integers satisfying this relation. The smallest examples:

• **3-4-5**: $9 + 16 = 25$.
• **5-12-13**: $25 + 144 = 169$.
• **8-15-17**: $64 + 225 = 289$.

The explorer demonstrates the first two as dedicated scenarios. For full theory and proofs, see the **Pythagorean theorem page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Law of Sines and Law of Cosines`,
      content:`Two laws extend trigonometric reasoning beyond right triangles:

**Law of sines** — for any triangle:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

Use it when you know two angles and one side, or two sides and a non-included angle.

**Law of cosines** — generalizes Pythagoras:

$$c^2 = a^2 + b^2 - 2ab\\cos C$$

Use it when you know two sides and the included angle, or all three sides. When $C = 90°$ the cosine term vanishes and the formula reduces to Pythagoras. For full coverage, see the **law of sines page** and the **law of cosines page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Trigonometric Functions** — $\\sin$, $\\cos$, $\\tan$ and their reciprocals.
• **Angle Explorer** — visualize any angle, its quadrant, and its reference angle.
• **Special Right Triangles** — exact ratios for $45$-$45$-$90$ and $30$-$60$-$90$.
• **SOH CAH TOA** — mnemonic for trig ratios in right triangles.
• **Triangle Solver** — compute missing sides and angles given partial information.
• **Trigonometric Identities** — Pythagorean, sum, and double-angle formulas built on these triangles.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "What scenarios does the triangle explorer include?",
      answer: "Twelve scenarios across four categories: classification (equilateral, isosceles, acute, obtuse, right scalene), special right triangles (45-45-90, 30-60-90, 3-4-5, 5-12-13), trigonometric laws (law of sines, law of cosines), and a free-drag explore mode."
    },
    obj2: {
      question: "Can I reshape the triangle by dragging?",
      answer: "Yes. Tick the draggable checkbox in the top toolbar to enable vertex dragging for any scenario. The free-drag, law of sines, and law of cosines scenarios start draggable by default. The diagram, stats, and explanations all update in real time."
    },
    obj3: {
      question: "How do angle locks work?",
      answer: "Click the lock button next to an angle to freeze it at its current value. A number input and slider then let you set an exact degree measure. You can lock up to two angles; the third is computed automatically as 180 minus the sum of the other two."
    },
    obj4: {
      question: "What is the difference between law of sines and law of cosines?",
      answer: "Law of sines relates each side to the sine of its opposite angle and works best when you know two angles and a side. Law of cosines relates one side to the other two and the angle between them, useful when you know two sides and their included angle, or all three sides."
    },
    obj5: {
      question: "What do the colors in the diagram mean?",
      answer: "Red marks vertex A, side a (opposite A), and angle A. Amber marks vertex B, side b, and angle B. Blue marks vertex C, side c, and angle C. The same color scheme is used in the stats bar and the explanation formulas."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Triangle Explorer",
      "description": "Explore triangle types, special right triangles, the Pythagorean theorem, law of sines and law of cosines with a draggable, lockable, color-coded triangle.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/triangle-explorer",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Twelve preloaded scenarios across classification, special right, trig laws, and free drag",
        "Drag-and-drop vertex editing with live angle and side updates",
        "Two simultaneous angle locks with degree input and slider",
        "Zoom controls from 30 percent to 500 percent",
        "Color-coded vertices, sides, and angle arcs (A red, B amber, C blue)",
        "Live stats bar with angles, sides, perimeter, and area",
        "Context-aware explanations including Pythagoras, SOH CAH TOA, law of sines, and law of cosines",
        "Right-angle indicator and Pythagorean triple verification"
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
          "name": "Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Triangle Explorer",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/triangle-explorer"
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
        title: "Triangle Explorer: Interactive Visualizer | Learn Math Class",
        description: "Explore triangle types, Pythagoras, law of sines, and law of cosines with a draggable, lockable, color-coded triangle and live angle and side stats.",
        hubDescription: "An interactive triangle visualizer with twelve preloaded scenarios covering classifications (equilateral, isosceles, acute, obtuse, right scalene), special right triangles (45-45-90, 30-60-90, 3-4-5, 5-12-13), and the laws of sines and cosines. Drag vertices, lock up to two angles, zoom freely, and read live stats and context-aware explanations including Pythagoras, SOH CAH TOA, and the trigonometric laws.",
        category: "Triangle",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/triangle-explorer",
        name: "Interactive Triangle Explorer"
      },

       }
    }
   }

export default function TriangleExplorerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Triangle</h1>
   <br/>
   <SiblingsNav>
   <TriangleExplorer/>
   </SiblingsNav>
   <br/>
   {/* <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"

   /> */}
   <br/>
   <br/>
   <br/>
    {/* <IntroSection
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
   <br/>
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   {/* <Sections sections={genericSections.slice(1)}/> */}
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}