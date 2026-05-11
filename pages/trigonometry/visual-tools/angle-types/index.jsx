// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import TrigoAngleTypesExplorer from '../../../../app/components/trigonometry/angle/types/TrigoAngleTypesExplorer'
// import SiblingsNav from '../../../../app/components/SiblingsNav'


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
//         url: "/trigonometry/visual-tools/angle-types",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>
//     Angle Types
//    </h1>
//    <br/>
//   <SiblingsNav
//      bg="#fafaf7"
//   color="#2c5d99"
//   activeColor="#143a66"
//   activeBg="#dde9f7"
//   >
//     {/* <div style={{transform:'scale(1.15)'}}> */}
//    <TrigoAngleTypesExplorer/>
//    {/* </div> */}
//    </SiblingsNav>
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
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TrigoAngleTypesExplorer from '../../../../app/components/trigonometry/angle/types/TrigoAngleTypesExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'


export async function getStaticProps(){

  const keyWords = [
    'angle types',
    'angle types visualizer',
    'acute obtuse right reflex',
    'complementary supplementary angles',
    'vertical angles',
    'adjacent angles',
    'standard position angle',
    'reference angle calculator',
    'coterminal angles tool',
    'special angles unit circle',
    'directed angles',
    'positive negative angles',
    'angle classification trigonometry',
    'interactive angle types',
    'angle relationships tool'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Vertex** — the common endpoint where the two rays of an angle meet.
• **Initial side** — the ray from which rotation is measured. In **standard position** it lies along the positive x-axis.
• **Terminal side** — the ray reached after rotating by the angle.
• **Quadrant** — one of four regions $I$, $II$, $III$, $IV$ where the terminal side may land.
• **Reference angle** — the acute angle between the terminal side and the nearest x-axis. Always between $0°$ and $90°$.
• **Coterminal angles** — angles sharing the same terminal side, differing by full rotations ($360° n$).
• **Special angles** — the $16$ unit-circle angles with exact $\\sin$, $\\cos$, $\\tan$ values.
• **Directed angle** — an angle carrying a sign indicating rotation direction: positive for counterclockwise, negative for clockwise.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Choosing a Concept`,
      content:`The tool bundles nine related angle topics. A sidebar (or horizontal scroll on narrow screens) lists them grouped into three categories:

• **Classification** — Angle Types.
• **Relationships** — Complementary & Supplementary, Vertical Angles, Adjacent Angles.
• **Trigonometry** — Standard Position, Reference Angles, Coterminal Angles, Special Angles, Directed Angles.

Click any item to load that concept's interactive scene and explanation. The active item is highlighted in blue. The top bar shows both the tool name and the active concept's title.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Switching Dark and Light Modes`,
      content:`A **Light** / **Dark** toggle in the top-right of the panel swaps the color theme across all nine concepts.

What changes with the toggle:
• **Background** — white in light mode, deep slate in dark mode.
• **Text colors** — adjusted for contrast.
• **Panel borders and dividers** — match the active theme.
• **Diagram fill colors** (blue, amber, green, red, purple accents) remain the same in both modes so visualizations stay readable.

The theme persists while you switch between concepts in the same session.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Dragging to Set Angles`,
      content:`Every scene includes one or more **draggable handles**. Click and drag a handle to rotate the relevant arm of the angle in real time.

How drag works:
• The handle follows your pointer around the vertex.
• The angle value updates continuously in the side panel.
• Some scenes (Vertical, Adjacent) include two independent handles.
• On **Standard Position** and **Directed Angles**, drag below the x-axis to produce negative angles.

Snap-to-special behavior makes it easy to land on common values: as you approach $0°$, $30°$, $45°$, $60°$, $90°$, etc., the handle locks onto the exact value.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Using Preset Buttons and Quick Angles`,
      content:`Some scenes provide preset buttons for fast navigation to canonical angles.

Examples:
• **Angle Types** — seven buttons (Zero, Acute, Right, Obtuse, Straight, Reflex, Full) jump to representative angles.
• **Complementary & Supplementary** — a two-tab switch toggles the constraint between summing to $90°$ and $180°$.
• **Coterminal Angles** — $+$ and $-$ buttons step through full-rotation offsets from $n = -3$ to $n = +3$.
• **Special Angles** — clicking any of the $16$ ringed points on the unit circle selects it; a Degrees / Radians / Both toggle controls labels.

Presets are the fastest way to see the boundary cases of each concept.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Scene Diagrams`,
      content:`Each scene uses a consistent color language to keep the relationships visible at a glance.

Color conventions across scenes:
• **Blue** — the active or first angle.
• **Amber** — the partner angle (the second in a pair, or the negative direction).
• **Green** — right angles, positive sign markers, $\\cos$ measurements.
• **Red** — obtuse markers, negative sign markers, $\\sin$ measurements.
• **Purple** — shared rays or alternative emphasis (e.g., the common arm of adjacent angles).
• **Gray** — reference axes, dashed guides, inactive elements.

A small square at a vertex marks an exact $90°$ angle in place of the usual curved arc.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Explanation Panels`,
      content:`The right-hand panel of every concept contains four consistent zones:

• **Title** — name of the active concept.
• **Brief description** — one or two paragraphs explaining what the concept means and why it matters in trigonometry.
• **Live values** — color-coded mini-cards or large numerals showing the current angle, partner angle, sum, or sign data.
• **Reference block** — a formula card (monospace) or a small table summarizing the rule (e.g., quadrant sign chart, reference-angle formulas, even / odd identities).

Drag the scene and the explanation panel updates immediately. Everything is recomputed from the current angle.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Angle Classifications`,
      content:`The **Angle Types** concept classifies a single rotation by its measure:

• **Zero** — $\\theta = 0°$, both rays overlap.
• **Acute** — $0° < \\theta < 90°$.
• **Right** — $\\theta = 90°$, marked with a square instead of an arc.
• **Obtuse** — $90° < \\theta < 180°$.
• **Straight** — $\\theta = 180°$, a straight line.
• **Reflex** — $180° < \\theta < 360°$.
• **Full** — $\\theta = 360°$, a complete rotation.

Each type uses its own color and is documented in the side panel. For comprehensive coverage with proofs and examples, see the **angle types theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Angle Relationships`,
      content:`Three concepts cover how angles relate when they share a vertex or a transversal.

• **Complementary & Supplementary** — pairs summing to $90°$ or $180°$. The side panel surfaces cofunction identities like $\\sin\\theta = \\cos(90° - \\theta)$.
• **Vertical Angles** — two intersecting lines create two pairs of equal opposite angles. Drag to $90°$ to see all four become right angles.
• **Adjacent Angles** — two angles share a vertex and a common arm (drawn in purple, dashed). Two independent drag handles let you set each angle separately. The angle addition identities sit right under the diagram.

For full proofs, see the **angle relationships page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Trigonometry-Specific Angle Concepts`,
      content:`Five concepts cover angle ideas central to trigonometry.

• **Standard Position** — angle with vertex at origin and initial side on the positive x-axis. The side panel shows the active quadrant and the signs of $\\sin$, $\\cos$, $\\tan$.
• **Reference Angles** — the acute angle between the terminal side and the nearest x-axis. The panel shows the formula appropriate to the active quadrant ($\\theta$, $180° - \\theta$, $\\theta - 180°$, or $360° - \\theta$).
• **Coterminal Angles** — same terminal side, different rotation count. Step through $n \\in \\{-3, ..., 3\\}$ and watch the spiral marker connect the base angle to its coterminal partner.
• **Special Angles** — the $16$ unit-circle positions whose $\\sin$, $\\cos$, $\\tan$ values are exact. Click any point or row in the table to load it.
• **Directed Angles** — positive (counterclockwise) vs. negative (clockwise) angles, with live verification that $\\sin(-\\theta) = -\\sin\\theta$ (odd) and $\\cos(-\\theta) = \\cos\\theta$ (even).`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Why Angle Classification Matters in Trigonometry`,
      content:`Knowing the type of an angle determines almost every downstream calculation:

• **Function signs** depend on quadrant, which depends on classification (acute, obtuse, reflex).
• **Reference angles** reduce any trig evaluation to a first-quadrant computation.
• **Coterminal equivalence** means $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$ are periodic; this powers Fourier analysis, wave physics, and signal processing.
• **Special angles** provide the exact values that appear in proofs, identities, and integrals.
• **Directed angles** distinguish phase and rotation direction in physics, navigation, and complex numbers.

For applications and worked examples, see the **trigonometry foundations page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Angle Explorer** — single-angle visualizer focused on type, quadrant, and reference angle.
• **Trigonometric Functions Graphs** — see how $\\sin$, $\\cos$, $\\tan$ and their reciprocals evolve as $\\theta$ varies.
• **Functions Signs by Quadrants** — the ASTC rule explained interactively.
• **Triangle Explorer** — angles inside triangles, with built-in law of sines and law of cosines.
• **Unit Circle** — geometric setup for every special angle in this tool.
• **Double Angle Identities** — formulas that combine angles into $2\\theta$ relationships.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "What angle topics does the explorer cover?",
      answer: "Nine concepts in three groups. Classification covers angle types like acute, right, obtuse, straight, and reflex. Relationships covers complementary, supplementary, vertical, and adjacent angles. Trigonometry covers standard position, reference angles, coterminal angles, special angles, and directed angles."
    },
    obj2: {
      question: "How do I switch between the nine concepts?",
      answer: "On wide screens, a sidebar on the left lists all concepts grouped by category. On narrow screens, the same list becomes a horizontal scrolling tab strip above the scene. Click any item to load its interactive diagram and explanation."
    },
    obj3: {
      question: "Can I work with negative angles?",
      answer: "Yes. In the Standard Position and Directed Angles concepts, dragging below the x-axis produces clockwise (negative) rotations. The diagram color switches to amber and the side panel computes both directions, demonstrating that sine is odd and cosine is even."
    },
    obj4: {
      question: "What is a reference angle and how do I find one?",
      answer: "The reference angle is the acute angle between the terminal side and the nearest x-axis, always between 0 and 90 degrees. The formula depends on the quadrant: theta in Q1, 180 minus theta in Q2, theta minus 180 in Q3, and 360 minus theta in Q4. The Reference Angles concept shows these formulas live."
    },
    obj5: {
      question: "How do special angles relate to the rest of the tool?",
      answer: "Special angles are the 16 unit-circle positions (0, 30, 45, 60, 90 degrees and their reflections) that have exact trig values like 1/2, sqrt(2)/2, sqrt(3)/2. They appear as snap points in the other concepts and as a clickable ring of dots in the Special Angles view."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Angle Types Explorer",
      "description": "Explore nine angle concepts in one tool: classification, complementary, supplementary, vertical, adjacent, standard position, reference, coterminal, special, and directed angles.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/angle-types",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Nine concept scenes grouped into classification, relationships, and trigonometry",
        "Drag-to-rotate handles with snap-to-special-angle behavior",
        "Preset buttons for canonical angles in each concept",
        "Live signs of sin, cos, tan based on quadrant",
        "Reference angle formulas adapted to the active quadrant",
        "Coterminal stepper with positive and negative full-rotation offsets",
        "Special angles ring with degrees, radians, and exact value labels",
        "Directed angles with even and odd identity verification",
        "Light and dark theme toggle"
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
          "name": "Angle Types",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/angle-types"
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
        title: "Angle Types Explorer: Interactive Visualizer | Learn Math Class",
        description: "Explore nine angle concepts: classification, complementary, supplementary, vertical, adjacent, standard position, reference, coterminal, special, and directed.",
        hubDescription: "An interactive hub for nine core angle concepts in trigonometry. Drag handles or use presets to explore basic classifications (acute, right, obtuse, straight, reflex), pairwise relationships (complementary, supplementary, vertical, adjacent), and trigonometric foundations (standard position, reference angles, coterminal angles, the 16 special unit-circle angles, and directed angles with even and odd verification).",
        category: "Angles",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/angle-types",
        name: "Interactive Angle Types Explorer"
      },

       }
    }
   }

export default function AngleTypesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>
    Angle Types
   </h1>
   <br/>
  <SiblingsNav
     bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
  >
    {/* <div style={{transform:'scale(1.15)'}}> */}
   <TrigoAngleTypesExplorer/>
   {/* </div> */}
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}