// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import BasicTrigIdentitiesExplorer from '../../../../app/components/trigonometry/identities/basic-identities/BasicTrigoIdentities'


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

//     // obj0:{
//     //   title:`Key Terms`,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
  
//     // },
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
//         url: "/trigonometry/visual-tools/basic-identities",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     // {
//     //     id:'0',
//     //     title:sectionsContent.obj0.title,
//     //     link:sectionsContent.obj0.link,
//     //     content:[
//     //       sectionsContent.obj0.content,
//     //     ]
//     // },
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
//    <h1 className='title' style={{marginTop:'-20px',marginBottom:'0px'}}>Basic Trigonometric Identities</h1>
//    <br/>
//    <BasicTrigIdentitiesExplorer/>
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
import BasicTrigIdentitiesExplorer from '../../../../app/components/trigonometry/identities/basic-identities/BasicTrigoIdentities'


export async function getStaticProps(){

  const keyWords = [
    'basic trigonometric identities',
    'trig identities visualizer',
    'unit circle trig functions',
    'sine cosine tangent unit circle',
    'reciprocal identities',
    'quotient identities',
    'trig function calculator',
    'sin cos tan graph',
    'csc sec cot identities',
    'trig periodicity visualization',
    'reference angle visualizer',
    'interactive trig identities',
    'six trig functions explorer',
    'learn trig identities',
    'unit circle visualizer'
  ]

    const sectionsContent={

    // obj0:{
    //   title:`Key Terms`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },
    obj1:{
      title:`Getting Started`,
      content:`The explorer opens centered on the sine function. Three controls drive everything you see:

• Drag the blue dot on the circle to rotate θ
• Use the slider below the circle for precise multi-turn rotation
• Toggle **deg** / **rad** for angle units

The graph on the right plots the active function against θ in real time. As you move the dot, the terminal point P traces the unit circle and the dot on the graph tracks the function value.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Switching Between the Six Functions`,
      content:`Two controls swap the active function:

• The tab strip above the circle shows **sin, cos, tan, csc, sec, cot** in order
• The formula table below the circle is also clickable — tap any row to make it active

When you switch, the diagram redraws to show the correct leg or legs and the graph swaps to that function&apos;s curve. The URL updates with a ?fn= query parameter, so any function view can be shared as a direct link.`,
      before:``,
      after:``,
      link:'',
    },
  
    obj3:{
      title:`Stepping Through the Derivation`,
      content:`Each function has a five-stage derivation accessed through the **Prev / Play / Next** controls:

1. **Place the angle** — the ray rotates and P appears on the unit circle
2. **Identify the leg or legs** — vertical for sine, horizontal for cosine, both for tangent
3. **Read the value** — leg length for sin and cos, a ratio for tan and cot, a reciprocal for csc and sec
4. **Sign and range** — the quadrant logic and the reference angle
5. **Periodicity** — drag past 360° to see the spiral arc and coterminal ghost dots

Use Play to auto-advance or step manually with Prev and Next. The rule and description update at each stage.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Unit Circle Display`,
      content:`The unit circle on the left shows several elements that build up across the steps:

• The red ray from the origin marks the current angle $\\theta$
• The blue point P sits at $(\\cos\\theta, \\sin\\theta)$
• The signed leg — vertical, horizontal, or both — shows the function&apos;s geometric meaning
• A small arc near the origin marks the reference angle once revealed

Watch how each leg flips sign as P crosses an axis. That sign flip is the geometric origin of all four quadrant sign rules.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Graph`,
      content:`The graph on the right plots the active function across multiple periods. Key features to watch:

• A blue dot tracks the function value at the current θ
• Vertical dashed lines mark **asymptotes** — at 90° and 270° for tan and sec, at 0°, 180°, and 360° for cot and csc
• **Ghost dots** highlight coterminal angles where the function takes the same value

The curve&apos;s range is fixed per function: bounded between $-1$ and $1$ for $\\sin\\theta$ and $\\cos\\theta$, unbounded for the other four.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Exploring Periodicity`,
      content:`The slider sweeps past 360° to reveal what makes trig functions cyclic. As θ exceeds one full turn:

• The ray keeps rotating but P returns to the same circle position
• The arc near the origin spirals outward to count the rotations
• Ghost dots appear on the graph at every coterminal angle

For sin, cos, csc, and sec, this means $f(\\theta + 360°) = f(\\theta)$. For tan and cot, the period is shorter — $f(\\theta + 180°) = f(\\theta)$ — visible as twice the repetition rate on the graph.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`The Live Formula Table`,
      content:`Below the circle, a table lists all six functions with their current values at θ:

• The **Function** column names the function with $(\\theta)$ notation
• The **Reading** column states the geometric or algebraic recipe — vertical leg, $\\sin\\theta / \\cos\\theta$, $1 / \\sin\\theta$, and so on
• The **Value at θ** column updates as you drag

Watch how reciprocal pairs move together: when $\\sin\\theta$ is small, $\\csc\\theta$ is large. When $\\cos\\theta = 0$, $\\sec\\theta$ blows up. The table makes these relationships numerical and concrete.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`What Are the Basic Trigonometric Identities?`,
      content:`The basic identities relate the six trig functions to each other through simple ratios. They fall into two groups.

**Reciprocal identities:**

$$\\csc\\theta = \\frac{1}{\\sin\\theta} \\qquad \\sec\\theta = \\frac{1}{\\cos\\theta} \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta}$$

**Quotient identities:**

$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$$

Together they mean only two of the six functions — usually $\\sin\\theta$ and $\\cos\\theta$ — are truly independent. The other four are algebraic combinations of those two.

For broader coverage, see **trigonometric identities theory**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Defining Trig Functions on the Unit Circle`,
      content:`On the unit circle, the terminal point of angle θ sits at coordinates $(\\cos\\theta, \\sin\\theta)$. From this single fact, every trig function follows:

• $\\sin\\theta$ is the y-coordinate of P
• $\\cos\\theta$ is the x-coordinate of P
• $\\tan\\theta = \\sin\\theta / \\cos\\theta$ is the slope of the ray
• $\\csc\\theta$, $\\sec\\theta$, $\\cot\\theta$ are reciprocals of the above

This definition extends trig beyond right triangles to any real angle — positive or negative, more than 360°, in any quadrant. For the right-triangle perspective, see **right triangle trigonometry**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Periodicity and Reference Angles`,
      content:`Two facts make trig functions usable for any angle, no matter how large.

**Periodicity** means values repeat at a fixed interval. Sin, cos, csc, and sec have period $360°$ (or $2\\pi$). Tan and cot have period $180°$ (or $\\pi$) because dividing two functions that both flip sign produces a function that does not.

**Reference angle** is the acute angle between the terminal ray and the x-axis. It reduces any angle to a Q1 calculation — once you know $|\\sin 30°| = 0.5$, you know $|\\sin\\theta| = 0.5$ for every coterminal or reflected angle. The quadrant supplies the sign.

For deeper coverage, see **periodicity** and **reference angles**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Explore connected topics:

**Trigonometric functions graphs** — adjustable amplitude, period, and phase shift for each function

**Functions signs by quadrant** — focused view of the four quadrant sign patterns

**Angle types explorer** — acute, obtuse, reflex, and coterminal classification

**Pythagorean identity** — the $\\sin^2\\theta + \\cos^2\\theta = 1$ relationship from the unit circle

**Double angle identities** — geometric derivations for $\\sin 2\\theta$ and $\\cos 2\\theta$`,
      before:``,
      after:``,
      link:'',
    },
  
  }


  const faqQuestions = {
    obj1: {
      question: "What are the basic trigonometric identities?",
      answer: "The basic identities are two groups of relationships among the six trig functions. The reciprocal identities define csc, sec, and cot as 1 over sin, 1 over cos, and 1 over tan. The quotient identities define tan and cot as the ratios sin over cos and cos over sin. Only sin and cos are truly independent; the other four are algebraic combinations of those two."
    },
    obj2: {
      question: "How are sine and cosine defined on the unit circle?",
      answer: "On the unit circle, the terminal point of angle theta has coordinates (cos theta, sin theta). The x-coordinate is cos theta and the y-coordinate is sin theta. This definition works for any real angle, positive or negative, including angles beyond 360 degrees, and extends trigonometry beyond the right-triangle setting."
    },
    obj3: {
      question: "What is the difference between reciprocal and quotient identities?",
      answer: "Reciprocal identities express one function as 1 divided by another, like sec theta equals 1 over cos theta. Quotient identities express one function as a ratio of two others, like tan theta equals sin theta over cos theta. Reciprocal identities pair functions in three couples, while quotient identities show how the four remaining functions all build from sin and cos."
    },
    obj4: {
      question: "Why does tangent have a period of 180 degrees but sine has 360?",
      answer: "Tangent is the ratio sin theta over cos theta. When theta increases by 180 degrees, both sin and cos flip sign, and a negative divided by a negative is positive. The two sign flips cancel inside the ratio, so tan returns to its original value after only half a turn. Sine and cosine themselves need a full 360-degree turn to return."
    },
    obj5: {
      question: "How do you find a trig function value for any angle?",
      answer: "First, reduce the angle to its reference angle, which is the acute angle between the terminal ray and the x-axis. Compute or recall the function value for that acute angle. Finally, determine the sign from which quadrant the original angle terminates in. The standard ASTC pattern fixes the sign for each function in each quadrant."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Basic Trigonometric Identities Explorer",
      "description": "Explore all six trig functions on the unit circle. Drag the angle, step through derivations, and see reciprocal and quotient identities emerge visually.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/basic-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Drag the terminal point around the unit circle to rotate theta",
        "Switch between sin, cos, tan, csc, sec, and cot via tabs",
        "Step through a five-stage derivation for each function",
        "Multi-turn slider sweeps past 360 degrees with spiral coterminal ghost dots",
        "Live formula table shows the reading and current value for all six functions",
        "Toggle between degrees and radians for angle display",
        "Deep-linkable URLs preserve the active function via ?fn= query parameter"
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
          "name": "Basic Trigonometric Identities",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/basic-identities"
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
        title: "Basic Trig Identities Explorer | Unit Circle Visualizer",
        description: "Explore all six trig functions on the unit circle. Drag the angle, step through derivations, and see reciprocal and quotient identities emerge visually.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/basic-identities",
        name: "Basic Trigonometric Identities Explorer",
        hubDescription: "Drag the blue dot around the unit circle to watch sine, cosine, tangent, and their reciprocals emerge as signed legs and ratios. Switch between the six functions via tabs, step through a five-stage derivation for each, and use the multi-turn slider to explore periodicity and coterminal angles.",
        category: "Identities"
      },
        
       }
    }
   }

export default function BasicTrigIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
   <h1 className='title' style={{marginTop:'-20px',marginBottom:'0px'}}>Basic Trigonometric Identities</h1>
   <br/>
   <BasicTrigIdentitiesExplorer/>
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