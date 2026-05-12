// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '@/pages/pages.css'
// import Head from 'next/head'
// import AngleExplorer from '../../../../app/components/trigonometry/angle/AngleExplorer'


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
//         hubDescription:'Here is full length description',
//         keywords: keyWords.join(", "),
//         url: "/trigonometry/visual-tools/angle-explorer",
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
//    <h1 className='title' style={{marginTop:'-20px',marginBottom:'10px'}}>Basic Angle Explorer</h1>
//    <br/>
//    <div style={{width:'80%',margin:'auto'}}>
//    <AngleExplorer/>
//    </div>
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
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '@/pages/pages.css'
import Head from 'next/head'
import AngleExplorer from '../../../../app/components/trigonometry/angle/AngleExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'



export async function getStaticProps(){

  const keyWords = [
    'angle explorer',
    'interactive angle visualizer',
    'angle calculator',
    'angle types tool',
    'complementary supplementary angles',
    'coterminal angles calculator',
    'reference angle finder',
    'degrees radians converter',
    'unit circle angles',
    'angle quadrant calculator',
    'acute obtuse reflex angles',
    'trigonometric values calculator',
    'sin cos tan visualizer',
    'visualize angles online',
    'angle properties tool'
  ]

    const sectionsContent={

    obj1:{
      title:`Setting an Angle`,
      content:`Type any value into the **Angle Value** input to update the diagram, properties panel, and trigonometric values in real time. The explorer accepts positive numbers, negative numbers, and values beyond a single rotation, so $720°$ or $-45°$ are both valid inputs.

Tips for entering angles:
• Use the up and down arrow keys for fine adjustments.
• Type a decimal like $52.5$ to explore non-special positions.
• Press **Reset** to return to $0°$ at any time.

The terminal ray on the diagram rotates counterclockwise for positive values and clockwise for negative values, matching standard mathematical convention.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Choosing Degrees or Radians`,
      content:`Use the unit dropdown next to the input to switch between **Degrees** and **Radians**. Switching the unit reinterprets the current numeric value rather than converting it, so the diagram may jump.

When to pick each unit:
• **Degrees** are intuitive for geometry, navigation, and common reference angles like $30°$, $45°$, and $60°$.
• **Radians** match the natural input for calculus, physics, and the **unit circle**, where $\\pi/2$, $\\pi$, and $2\\pi$ are the key markers.

The properties panel always reports both the degree value and the radian value, making the tool useful for verifying conversions in either direction.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Using Quick Preset Angles`,
      content:`The **Quick Angles** row provides one-click access to sixteen standard positions: $0°$, $30°$, $45°$, $60°$, $90°$, $120°$, $135°$, $150°$, $180°$, $210°$, $225°$, $240°$, $270°$, $300°$, $315°$, and $330°$.

Why these specific values:
• They are the **special angles** of the unit circle, with exact $\\sin$, $\\cos$, and $\\tan$ values.
• They cover all four quadrants evenly, making them ideal for spotting symmetry.
• Pairs like $30°$ and $150°$ or $45°$ and $135°$ show how reference angles repeat.

Each preset auto-converts to the active unit, so switching to radians and clicking $90°$ enters $\\pi/2$.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Display Toggle Options`,
      content:`Four checkboxes in the **Display Options** group control what the diagram renders:

• **Show Angle Arc** draws the blue arc sweeping from the initial ray to the terminal ray.
• **Show Reference Lines** adds the unit circle, axes, and Roman numeral quadrant labels (I, II, III, IV).
• **Show Complementary Angle** overlays a green dashed arc to the vertical axis when the angle is between $0°$ and $90°$.
• **Show Supplementary Angle** overlays a red dashed arc to the negative x-axis when the angle is between $0°$ and $180°$.

Toggle these to isolate a concept. Turning off the reference lines, for example, leaves only the rays and arc, useful for clean explanations.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Properties Panel`,
      content:`The first column of the panel summarizes everything the explorer derives from the input.

Fields you will see:
• **Current Angle** in both degrees and radians, useful for unit conversion checks.
• **Type** classifies the angle as acute, right, obtuse, straight, or reflex.
• **Quadrant** identifies which of the four regions the terminal ray points into.
• **Reference Angle** gives the acute angle between the terminal ray and the x-axis, always between $0°$ and $90°$.

Watching these values change as you sweep through angles is one of the fastest ways to build intuition about how classification rules work.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Working with Related and Coterminal Angles`,
      content:`The middle and right columns of the panel report angles connected to the current value.

**Related Angles** column:
• **Complementary**: $90° - \\theta$, shown only when $\\theta$ is between $0°$ and $90°$.
• **Supplementary**: $180° - \\theta$, shown only when $\\theta$ is between $0°$ and $180°$.
• **Reflex**: $360° - \\theta$, the angle on the opposite side of the rotation.

**Coterminal Angles** column:
• **Positive** adds $360°$ to the input.
• **Negative** subtracts $360°$.
• **General Form** $\\theta + 360°n$ describes every coterminal value, where $n$ is any integer.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Reading the Trigonometric Values Table`,
      content:`Below the diagram, two compact tables show the six **trigonometric functions** evaluated at the current angle.

**Primary table:** $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$.
**Reciprocal table:** $\\csc\\theta$, $\\sec\\theta$, $\\cot\\theta$.

How values are displayed:
• At special angles ($30°$, $45°$, $60°$, etc.), the table shows the **exact form**, such as fractions and radical expressions.
• At other angles, values are rounded decimals.
• Undefined points like $\\tan 90°$ display the infinity symbol.

This makes the explorer a useful companion to **trigonometric identities** and to the **unit circle** when checking exact values.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`What is an Angle?`,
      content:`An angle measures the amount of rotation between two rays meeting at a common vertex. In the explorer, the initial ray points along the positive x-axis and the terminal ray rotates to the input position.

Two units of measure dominate mathematics:
• **Degrees** divide a full rotation into $360$ equal parts.
• **Radians** measure rotation by arc length on a unit circle, with $2\\pi$ radians equal to $360°$.

The conversion formula is $\\theta_{rad} = \\theta_{deg} \\cdot \\frac{\\pi}{180}$.

For a deeper treatment of the definition, see the **angles theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Angle Types and Classifications`,
      content:`Angles are classified by their measure:

• **Acute**: $0° < \\theta < 90°$.
• **Right**: $\\theta = 90°$.
• **Obtuse**: $90° < \\theta < 180°$.
• **Straight**: $\\theta = 180°$.
• **Reflex**: $180° < \\theta < 360°$.

The explorer applies these rules automatically and updates the **Type** field as you change the angle. For full coverage of each type with examples, see the **angle types page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Complementary, Supplementary, and Reference Angles`,
      content:`Three derived angles appear repeatedly in trigonometry:

• **Complementary**: a pair summing to $90°$. Used in cofunction identities like $\\sin\\theta = \\cos(90° - \\theta)$.
• **Supplementary**: a pair summing to $180°$. Common in geometry and triangle angle sums.
• **Reference angle**: the acute angle between the terminal ray and the x-axis. Used to evaluate trigonometric functions in any quadrant by relating them to first-quadrant values.

For full theory and proofs, see the **complementary and supplementary angles page** and the **reference angle page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Unit Circle** — visualize how angle position determines $\\sin$, $\\cos$, and $\\tan$ on a circle of radius $1$.
• **Degrees and Radians Converter** — quick numeric conversion without the diagram.
• **Trigonometric Functions** — full theory of sine, cosine, tangent, and their reciprocals.
• **Special Angles Table** — exact values at $0°$, $30°$, $45°$, $60°$, $90°$, and beyond.
• **Coterminal Angles** — practice problems and proofs for angles sharing a terminal side.
• **Reference Angle Calculator** — focused tool for the reduction rules across quadrants.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "What types of angles does the explorer identify?",
      answer: "The tool classifies any angle as acute, right, obtuse, straight, or reflex based on its measure. It also identifies the quadrant of the terminal side and computes the reference angle, which is always between 0 and 90 degrees."
    },
    obj2: {
      question: "How do I switch between degrees and radians?",
      answer: "Use the unit dropdown next to the angle input to toggle between degrees and radians. The diagram, properties panel, and trigonometric values update instantly. Quick preset buttons enter values in the unit you have selected."
    },
    obj3: {
      question: "What is the difference between complementary and supplementary angles?",
      answer: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The explorer shows each only when the current angle is small enough for the relationship to be defined and renders them as dashed arcs in distinct colors."
    },
    obj4: {
      question: "What are coterminal angles?",
      answer: "Coterminal angles share the same terminal side as the given angle but differ by full rotations of 360 degrees. The tool displays one positive and one negative coterminal value, plus the general form theta plus 360n degrees."
    },
    obj5: {
      question: "How is the reference angle calculated?",
      answer: "The reference angle is the acute angle between the terminal side and the x-axis. The explorer normalizes the input to the 0 to 360 range, identifies the quadrant, and then applies the matching reduction rule to return a value between 0 and 90 degrees."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Angle Explorer",
      "description": "Visualize any angle interactively in degrees or radians. Explore complementary, supplementary, coterminal, reference angles and quadrants with live trig values.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/angle-explorer",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Numeric angle input with degree or radian unit toggle",
        "Sixteen quick preset angles covering all standard unit-circle positions",
        "Live SVG diagram of the angle with optional arc and reference axes",
        "Toggleable complementary and supplementary angle overlays",
        "Automatic angle classification, quadrant detection, and reference angle calculation",
        "Related and coterminal angle outputs including positive, negative, and general form",
        "Dynamic trigonometric values table for sin, cos, tan, csc, sec, and cot"
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
          "name": "Angle Explorer",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/angle-explorer"
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
        title: "Angle Explorer: Visualize Trig Angles | Learn Math Class",
        description: "Visualize any angle interactively in degrees or radians. Explore complementary, supplementary, coterminal, reference angles and quadrants with live trig values.",
        hubDescription: "An interactive angle visualizer that lets you set any angle in degrees or radians and instantly see its type, quadrant, reference angle, and its complementary, supplementary, and coterminal partners. Toggle reference lines, jump to preset unit-circle angles, and read live values for sin, cos, tan, csc, sec, and cot, including exact special-angle forms.",
        category: "Angles",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/angle-explorer",
        name: "Interactive Angle Explorer"
      },

       }
    }
   }

export default function AngleExplorerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-20px',marginBottom:'10px'}}>Basic Angle Explorer</h1>
   <br/>
   <SiblingsNav
      bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
   >
   <div style={{width:'100%',margin:'auto'}}>
   <AngleExplorer/>
   </div>
   </SiblingsNav>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}