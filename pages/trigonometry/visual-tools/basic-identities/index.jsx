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
import identityDiagrams from '../../../../app/components/trigonometry/identities/basic-identities/basicIdentitiesDiagrams'


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
      content:`The explorer opens centered on the [sine](!#sine-on-the-unit-circle) function. Three controls drive everything you see:

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

• The tab strip above the circle shows [sin](!#sine-on-the-unit-circle), [cos](!#cosine-on-the-unit-circle), [tan](!#tangent-on-the-unit-circle), [csc](!#cosecant-on-the-unit-circle), [sec](!#secant-on-the-unit-circle), [cot](!#cotangent-on-the-unit-circle) in order
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

Watch how each leg flips sign as P crosses an axis — the vertical leg is [sine](!#sine-step-2-drop-the-vertical-leg), the horizontal one [cosine](!#cosine-step-2-project-onto-the-x-axis). That sign flip is the geometric origin of all four quadrant sign rules.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Graph`,
      content:`The graph on the right plots the active function across multiple periods. Key features to watch:

• A blue dot tracks the function value at the current θ
• Vertical dashed lines mark **asymptotes** — at 90° and 270° for [tan](!#tangent-on-the-unit-circle) and [sec](!#secant-on-the-unit-circle), at 0°, 180°, and 360° for [cot](!#cotangent-on-the-unit-circle) and [csc](!#cosecant-on-the-unit-circle)
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

For [sin](!#sine-on-the-unit-circle), [cos](!#cosine-on-the-unit-circle), [csc](!#cosecant-on-the-unit-circle), and [sec](!#secant-on-the-unit-circle), this means $f(\\theta + 360°) = f(\\theta)$. For [tan](!#tangent-on-the-unit-circle) and [cot](!#cotangent-on-the-unit-circle), the period is shorter — $f(\\theta + 180°) = f(\\theta)$ — visible as twice the repetition rate on the graph.`,
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

**Periodicity** means values repeat at a fixed interval. [Sin](!#sine-on-the-unit-circle), [cos](!#cosine-on-the-unit-circle), [csc](!#cosecant-on-the-unit-circle), and [sec](!#secant-on-the-unit-circle) have period $360°$ (or $2\\pi$). [Tan](!#tangent-on-the-unit-circle) and [cot](!#cotangent-on-the-unit-circle) have period $180°$ (or $\\pi$) because dividing two functions that both flip sign produces a function that does not.

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

    obj12:{
      title:`Sine on the Unit Circle`,
      content:`**Sine** is the y-coordinate of the terminal point P: as the red ray rotates through $\\theta$, $\\sin\\theta$ is the signed height of P above the x-axis, bounded between $-1$ and $1$.

${identityDiagrams.sin.overview}

The explorer derives it in five stages: [place the angle](!#sine-step-1-place-the-angle), [drop the vertical leg](!#sine-step-2-drop-the-vertical-leg), [trace on the graph](!#sine-step-3-trace-on-the-graph), [reference angle](!#sine-step-4-reference-angle), and [periodicity](!#sine-step-5-periodicity).

Sine is positive in Quadrants I–II (P above the axis), negative in III–IV, odd ($\\sin(-\\theta) = -\\sin\\theta$), and has period $360°$. Its reciprocal is [cosecant](!#cosecant-on-the-unit-circle), and it pairs with [cosine](!#cosine-on-the-unit-circle) to build every other function.`,
      before:``,
      after:``,
      link:'',
    },
    obj13:{
      title:`Cosine on the Unit Circle`,
      content:`**Cosine** is the x-coordinate of the terminal point P: the signed horizontal distance from the origin to the foot of P, bounded between $-1$ and $1$.

${identityDiagrams.cos.overview}

The five-stage derivation: [place the angle](!#cosine-step-1-place-the-angle), [project onto the x-axis](!#cosine-step-2-project-onto-the-x-axis), [trace on the graph](!#cosine-step-3-trace-on-the-graph), [reference angle](!#cosine-step-4-reference-angle), and [periodicity](!#cosine-step-5-periodicity).

Cosine is positive in Quadrants I and IV (P to the right of the y-axis), even ($\\cos(-\\theta) = \\cos\\theta$), and has period $360°$. Its reciprocal is [secant](!#secant-on-the-unit-circle); together with [sine](!#sine-on-the-unit-circle) it generates the four remaining functions.`,
      before:``,
      after:``,
      link:'',
    },
    obj14:{
      title:`Tangent on the Unit Circle`,
      content:`**Tangent** is the ratio of the two legs: $\\tan\\theta = \\sin\\theta / \\cos\\theta$ — the slope of the red ray.

${identityDiagrams.tan.overview}

The derivation: [place the angle](!#tangent-step-1-place-the-angle), [read both legs](!#tangent-step-2-read-both-legs), [form the ratio](!#tangent-step-3-form-the-ratio), [sign by quadrant](!#tangent-step-4-sign-by-quadrant), and [periodicity](!#tangent-step-5-periodicity).

Tangent is unbounded, diverging at $90°$ and $270°$ where the [cosine](!#cosine-on-the-unit-circle) leg vanishes — the dashed asymptotes on the graph. Its reciprocal is [cotangent](!#cotangent-on-the-unit-circle), and its period is only $180°$.`,
      before:``,
      after:``,
      link:'',
    },
    obj15:{
      title:`Cosecant on the Unit Circle`,
      content:`**Cosecant** is the reciprocal of sine: $\\csc\\theta = 1 / \\sin\\theta$, read from the same vertical leg as [sine](!#sine-on-the-unit-circle) and then inverted.

${identityDiagrams.csc.overview}

The derivation: [place the angle](!#cosecant-step-1-place-the-angle), [identify the vertical leg](!#cosecant-step-2-identify-the-vertical-leg), [take the reciprocal](!#cosecant-step-3-take-the-reciprocal), [range and sign](!#cosecant-step-4-range-and-sign), and [periodicity](!#cosecant-step-5-periodicity).

Wherever it is defined, $|\\csc\\theta| \\ge 1$ — a small sine makes a large cosecant. It diverges at $0°$, $180°$, and $360°$, always matches sine's sign, and shares sine's $360°$ period.`,
      before:``,
      after:``,
      link:'',
    },
    obj16:{
      title:`Secant on the Unit Circle`,
      content:`**Secant** is the reciprocal of cosine: $\\sec\\theta = 1 / \\cos\\theta$, built from the horizontal leg of [cosine](!#cosine-on-the-unit-circle).

${identityDiagrams.sec.overview}

The derivation: [place the angle](!#secant-step-1-place-the-angle), [identify the horizontal leg](!#secant-step-2-identify-the-horizontal-leg), [take the reciprocal](!#secant-step-3-take-the-reciprocal), [range and sign](!#secant-step-4-range-and-sign), and [periodicity](!#secant-step-5-periodicity).

Like its partner [cosecant](!#cosecant-on-the-unit-circle), secant satisfies $|\\sec\\theta| \\ge 1$ wherever defined. It diverges at $90°$ and $270°$, matches cosine's sign, and repeats every $360°$.`,
      before:``,
      after:``,
      link:'',
    },
    obj17:{
      title:`Cotangent on the Unit Circle`,
      content:`**Cotangent** is the inverted ratio: $\\cot\\theta = \\cos\\theta / \\sin\\theta = 1 / \\tan\\theta$ — the run over the rise of the red ray.

${identityDiagrams.cot.overview}

The derivation: [place the angle](!#cotangent-step-1-place-the-angle), [read both legs](!#cotangent-step-2-read-both-legs), [form the ratio](!#cotangent-step-3-form-the-ratio), [sign by quadrant](!#cotangent-step-4-sign-by-quadrant), and [periodicity](!#cotangent-step-5-periodicity).

Cotangent diverges where the sine leg vanishes — $0°$, $180°$, $360°$ — exactly where [tangent](!#tangent-on-the-unit-circle) is zero, and shares tangent's $180°$ period and quadrant sign pattern.`,
      before:``,
      after:``,
      link:'',
    },

    obj18:{
      title:`Sine, Step 1: Place the Angle`,
      content:`The derivation of [sine](!#sine-on-the-unit-circle) starts by rotating the red ray counterclockwise from the positive x-axis through $\\theta$. The terminal point P appears where the ray meets the unit circle.

${identityDiagrams.sin.steps[0]}

Everything that follows reads geometry off P — placing the angle in standard position is what turns "an angle" into "a point whose coordinates we can measure."`,
      before:``,
      after:``,
      link:'',
    },
    obj19:{
      title:`Sine, Step 2: Drop the Vertical Leg`,
      content:`From P, a perpendicular drops to the x-axis. The signed length of that vertical leg **is** $\\sin\\theta$: positive when P is above the axis, negative below.

${identityDiagrams.sin.steps[1]}

This is the geometric definition — sine is not a formula but a length with a sign, which is why it can never exceed the circle's radius of $1$.`,
      before:``,
      after:``,
      link:'',
    },
    obj20:{
      title:`Sine, Step 3: Trace on the Graph`,
      content:`Plot $\\theta$ horizontally and $\\sin\\theta$ vertically: the tracking dot on the curve sits at exactly the same height as P's y-coordinate on the circle.

${identityDiagrams.sin.steps[2]}

Dragging the dot shows the circle and the wave are the same information in two pictures — the sine wave is the circle's height unrolled along the angle axis.`,
      before:``,
      after:``,
      link:'',
    },
    obj21:{
      title:`Sine, Step 4: Reference Angle`,
      content:`The green arc marks the **reference angle** — the acute angle between the ray and the nearest x-axis. Its sine matches $\\sin\\theta$ in magnitude; the quadrant fixes the sign.

${identityDiagrams.sin.steps[3]}

At the frozen $140°$ the reference angle is $40°$: $\\sin 140° = \\sin 40°$, positive because Quadrant II keeps the vertical leg above the axis.`,
      before:``,
      after:``,
      link:'',
    },
    obj22:{
      title:`Sine, Step 5: Periodicity`,
      content:`Past $360°$ the ray keeps rotating — the red arc spirals outward counting turns — but P returns to the same position, so $\\sin(\\theta + 360°) = \\sin\\theta$.

${identityDiagrams.sin.steps[4]}

The ghost dots on the graph mark coterminal angles at the same height: the frozen $410°$ repeats the value of $50°$ exactly one turn earlier.`,
      before:``,
      after:``,
      link:'',
    },
    obj23:{
      title:`Cosine, Step 1: Place the Angle`,
      content:`The derivation of [cosine](!#cosine-on-the-unit-circle) begins the same way every function does: rotate the red ray through $\\theta$ and mark the terminal point P on the unit circle.

${identityDiagrams.cos.steps[0]}

With P fixed, cosine will come from the horizontal direction — the complementary reading to sine's vertical one.`,
      before:``,
      after:``,
      link:'',
    },
    obj24:{
      title:`Cosine, Step 2: Project onto the X-Axis`,
      content:`Project P straight down (or up) onto the x-axis. The signed distance from the origin to that foot **is** $\\cos\\theta$: positive to the right of the origin, negative to the left.

${identityDiagrams.cos.steps[1]}

The amber horizontal leg is the whole definition — cosine measures how far around the circle the angle has carried P in the x-direction.`,
      before:``,
      after:``,
      link:'',
    },
    obj25:{
      title:`Cosine, Step 3: Trace on the Graph`,
      content:`Plot $\\theta$ horizontally and $\\cos\\theta$ vertically. The tracking dot follows the length of the amber leg as the ray sweeps.

${identityDiagrams.cos.steps[2]}

The result is the cosine wave — the same shape as sine but starting at its maximum of $1$, because at $\\theta = 0°$ the point P sits fully to the right.`,
      before:``,
      after:``,
      link:'',
    },
    obj26:{
      title:`Cosine, Step 4: Reference Angle`,
      content:`The reference angle — the acute angle between the ray and the nearest x-axis — carries cosine's magnitude; the quadrant decides the sign.

${identityDiagrams.cos.steps[3]}

At the frozen $140°$: reference angle $40°$, so $\\cos 140° = -\\cos 40°$ — negative, because Quadrant II puts the foot of P left of the origin.`,
      before:``,
      after:``,
      link:'',
    },
    obj27:{
      title:`Cosine, Step 5: Periodicity`,
      content:`One full turn brings P back exactly: $\\cos(\\theta + 360°) = \\cos\\theta$. The spiral arc counts rotations while the value cycles.

${identityDiagrams.cos.steps[4]}

Ghost dots on the curve mark the coterminal angles — at $410°$ the amber leg is identical to the one at $50°$.`,
      before:``,
      after:``,
      link:'',
    },
    obj28:{
      title:`Tangent, Step 1: Place the Angle`,
      content:`The derivation of [tangent](!#tangent-on-the-unit-circle) starts from the same standard position: red ray through $\\theta$, terminal point P on the circle.

${identityDiagrams.tan.steps[0]}

Tangent will need both coordinates of P, so this single placement feeds two measurements at once.`,
      before:``,
      after:``,
      link:'',
    },
    obj29:{
      title:`Tangent, Step 2: Read Both Legs`,
      content:`Both legs light up: the blue vertical leg is $\\sin\\theta$ and the amber horizontal leg is $\\cos\\theta$. Tangent uses the pair.

${identityDiagrams.tan.steps[1]}

Seeing the two legs together is the point of this step — tangent is not a new measurement but a relationship between the two existing ones.`,
      before:``,
      after:``,
      link:'',
    },
    obj30:{
      title:`Tangent, Step 3: Form the Ratio`,
      content:`Divide: $\\tan\\theta = \\sin\\theta / \\cos\\theta$ — rise over run, the slope of the red ray. The graph plots that ratio.

${identityDiagrams.tan.steps[2]}

Where the amber leg shrinks to zero — $90°$ and $270°$ — the division blows up: the dashed vertical asymptotes on the graph.`,
      before:``,
      after:``,
      link:'',
    },
    obj31:{
      title:`Tangent, Step 4: Sign by Quadrant`,
      content:`Tangent is positive where the legs agree in sign — Quadrants I and III — and negative where they differ — Quadrants II and IV.

${identityDiagrams.tan.steps[3]}

At the frozen $140°$ the blue leg is positive and the amber leg negative, so $\\tan 140°$ is negative: the tracking dot sits below the axis.`,
      before:``,
      after:``,
      link:'',
    },
    obj32:{
      title:`Tangent, Step 5: Periodicity`,
      content:`Tangent repeats every $180°$ — twice as fast as sine and cosine — because a half turn flips both legs and the two sign changes cancel in the ratio: $\\tan(\\theta + 180°) = \\tan\\theta$.

${identityDiagrams.tan.steps[4]}

The graph fits twice as many periods into the same span; the ghost dots mark repeats every half turn, not just every full one.`,
      before:``,
      after:``,
      link:'',
    },
    obj33:{
      title:`Cosecant, Step 1: Place the Angle`,
      content:`The derivation of [cosecant](!#cosecant-on-the-unit-circle) begins with the standard placement: red ray through $\\theta$, terminal point P on the unit circle.

${identityDiagrams.csc.steps[0]}

Cosecant is built on sine, so the vertical direction is where this derivation is headed.`,
      before:``,
      after:``,
      link:'',
    },
    obj34:{
      title:`Cosecant, Step 2: Identify the Vertical Leg`,
      content:`The blue vertical leg from P to the x-axis is $\\sin\\theta$ — the same leg the sine derivation uses.

${identityDiagrams.csc.steps[1]}

Cosecant adds nothing geometric at this stage; it borrows sine's measurement and prepares to invert it.`,
      before:``,
      after:``,
      link:'',
    },
    obj35:{
      title:`Cosecant, Step 3: Take the Reciprocal`,
      content:`Invert the leg: $\\csc\\theta = 1 / \\sin\\theta$. The graph shows the consequence — where sine is small, cosecant is huge.

${identityDiagrams.csc.steps[2]}

At $0°$, $180°$, and $360°$ the leg vanishes entirely and cosecant diverges: the dashed asymptotes sit exactly at sine's zeros.`,
      before:``,
      after:``,
      link:'',
    },
    obj36:{
      title:`Cosecant, Step 4: Range and Sign`,
      content:`Because $|\\sin\\theta| \\le 1$, its reciprocal satisfies $|\\csc\\theta| \\ge 1$ wherever defined — the curve never enters the band between $-1$ and $1$.

${identityDiagrams.csc.steps[3]}

The sign always matches sine's: positive in Quadrants I–II, negative in III–IV. The frozen $140°$ gives a positive cosecant just above $1.5$.`,
      before:``,
      after:``,
      link:'',
    },
    obj37:{
      title:`Cosecant, Step 5: Periodicity`,
      content:`Cosecant inherits its cycle from sine: $\\csc(\\theta + 360°) = \\csc\\theta$. The spiral counts turns while the value repeats.

${identityDiagrams.csc.steps[4]}

Ghost dots mark the coterminal repeats — every branch of the curve returns identically after each full rotation.`,
      before:``,
      after:``,
      link:'',
    },
    obj38:{
      title:`Secant, Step 1: Place the Angle`,
      content:`The derivation of [secant](!#secant-on-the-unit-circle) starts identically: red ray through $\\theta$, terminal point P on the circle.

${identityDiagrams.sec.steps[0]}

Secant builds on cosine, so the horizontal leg is the one to watch.`,
      before:``,
      after:``,
      link:'',
    },
    obj39:{
      title:`Secant, Step 2: Identify the Horizontal Leg`,
      content:`The amber horizontal leg from the origin to the foot of P is $\\cos\\theta$ — the cosine measurement, reused.

${identityDiagrams.sec.steps[1]}

As with cosecant, no new geometry appears: secant is an algebraic move performed on an existing leg.`,
      before:``,
      after:``,
      link:'',
    },
    obj40:{
      title:`Secant, Step 3: Take the Reciprocal`,
      content:`Invert the leg: $\\sec\\theta = 1 / \\cos\\theta$. The graph diverges where the amber leg vanishes — at $90°$ and $270°$, cosine's zeros.

${identityDiagrams.sec.steps[2]}

Those are the same asymptote positions as tangent's, since both divide by $\\cos\\theta$.`,
      before:``,
      after:``,
      link:'',
    },
    obj41:{
      title:`Secant, Step 4: Range and Sign`,
      content:`Since $|\\cos\\theta| \\le 1$, the reciprocal obeys $|\\sec\\theta| \\ge 1$ — the curve stays outside the unit band, touching it only at $\\theta = 0°$, $180°$, $360°$.

${identityDiagrams.sec.steps[3]}

The sign follows cosine: positive in Quadrants I and IV, negative in II and III. At the frozen $140°$, secant is negative.`,
      before:``,
      after:``,
      link:'',
    },
    obj42:{
      title:`Secant, Step 5: Periodicity`,
      content:`Secant repeats with cosine's full-turn cycle: $\\sec(\\theta + 360°) = \\sec\\theta$, spiral growing while the value loops.

${identityDiagrams.sec.steps[4]}

Ghost dots on the graph mark each coterminal angle where the branch pattern recurs.`,
      before:``,
      after:``,
      link:'',
    },
    obj43:{
      title:`Cotangent, Step 1: Place the Angle`,
      content:`The derivation of [cotangent](!#cotangent-on-the-unit-circle) opens with the shared first move: red ray through $\\theta$, terminal point P.

${identityDiagrams.cot.steps[0]}

Like tangent, cotangent will read both legs of P — just in the opposite order.`,
      before:``,
      after:``,
      link:'',
    },
    obj44:{
      title:`Cotangent, Step 2: Read Both Legs`,
      content:`Both legs appear: the blue vertical $\\sin\\theta$ and the amber horizontal $\\cos\\theta$.

${identityDiagrams.cot.steps[1]}

The pair is the same as tangent's; the difference is entirely in which leg goes on top of the ratio.`,
      before:``,
      after:``,
      link:'',
    },
    obj45:{
      title:`Cotangent, Step 3: Form the Ratio`,
      content:`Divide the other way: $\\cot\\theta = \\cos\\theta / \\sin\\theta = 1 / \\tan\\theta$ — run over rise. The graph diverges where the sine leg vanishes: $0°$, $180°$, $360°$.

${identityDiagrams.cot.steps[2]}

Cotangent's asymptotes sit exactly where tangent crosses zero, and vice versa — the two curves interlock.`,
      before:``,
      after:``,
      link:'',
    },
    obj46:{
      title:`Cotangent, Step 4: Sign by Quadrant`,
      content:`Cotangent shares tangent's sign pattern: positive in Quadrants I and III where the legs agree, negative in II and IV where they differ.

${identityDiagrams.cot.steps[3]}

At the frozen $140°$ the legs disagree in sign, so $\\cot 140°$ is negative — the dot sits below the axis.`,
      before:``,
      after:``,
      link:'',
    },
    obj47:{
      title:`Cotangent, Step 5: Periodicity`,
      content:`Like tangent, cotangent repeats every half turn: $\\cot(\\theta + 180°) = \\cot\\theta$, because both legs flip sign together and the flips cancel in the ratio.

${identityDiagrams.cot.steps[4]}

The graph packs a full copy of the curve into each $180°$ span, with ghost dots marking every repeat.`,
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




  const explanations = {
    sin: { steps: [
      `Rotate the ray from the positive x-axis through θ counterclockwise. The terminal point P sits on the unit circle. [Full treatment](!#sine-step-1-place-the-angle) · [All about sine](!#sine-on-the-unit-circle)`,
      `From P, drop a perpendicular to the x-axis. The signed length of that leg is sin θ — positive above the x-axis, negative below. [Full treatment](!#sine-step-2-drop-the-vertical-leg) · [All about sine](!#sine-on-the-unit-circle)`,
      `Plot θ horizontally, sin θ vertically. The dot on the curve sits at the same height as P's y-coordinate on the circle. [Full treatment](!#sine-step-3-trace-on-the-graph) · [All about sine](!#sine-on-the-unit-circle)`,
      `The acute angle from the ray to the nearest x-axis. Its sine matches sin θ in magnitude; the quadrant fixes the sign. [Full treatment](!#sine-step-4-reference-angle) · [All about sine](!#sine-on-the-unit-circle)`,
      `Drag past 360° — the ray keeps rotating and the arc spirals outward, but P returns to the same circle position. So sin(θ + 360°) = sin θ. The graph shows this: the curve repeats every full turn, and ghost dots mark coterminal angles at the same height. [Full treatment](!#sine-step-5-periodicity) · [All about sine](!#sine-on-the-unit-circle)`,
    ] },
    cos: { steps: [
      `Rotate the ray through θ. P is the terminal point on the unit circle. [Full treatment](!#cosine-step-1-place-the-angle) · [All about cosine](!#cosine-on-the-unit-circle)`,
      `The signed horizontal distance from O to the foot of P is cos θ — positive to the right, negative to the left. [Full treatment](!#cosine-step-2-project-onto-the-x-axis) · [All about cosine](!#cosine-on-the-unit-circle)`,
      `Plot θ horizontally, cos θ vertically. The dot sits at the foot of the perpendicular from P. [Full treatment](!#cosine-step-3-trace-on-the-graph) · [All about cosine](!#cosine-on-the-unit-circle)`,
      `The acute angle from the ray to the nearest x-axis. Its cosine matches cos θ in magnitude; the quadrant fixes the sign. [Full treatment](!#cosine-step-4-reference-angle) · [All about cosine](!#cosine-on-the-unit-circle)`,
      `Drag past 360° — the spiral arc grows but P comes back to the same place. cos(θ + 360°) = cos θ. The curve repeats every full turn; ghost dots on the graph show coterminals at the same height. [Full treatment](!#cosine-step-5-periodicity) · [All about cosine](!#cosine-on-the-unit-circle)`,
    ] },
    tan: { steps: [
      `Rotate the ray through θ. P sits on the unit circle. [Full treatment](!#tangent-step-1-place-the-angle) · [All about tangent](!#tangent-on-the-unit-circle)`,
      `The vertical leg is sin θ, the horizontal leg is cos θ. Tangent uses both. [Full treatment](!#tangent-step-2-read-both-legs) · [All about tangent](!#tangent-on-the-unit-circle)`,
      `tan θ = sin θ / cos θ. The graph plots that ratio. It diverges where cos θ = 0 — at 90° and 270°. [Full treatment](!#tangent-step-3-form-the-ratio) · [All about tangent](!#tangent-on-the-unit-circle)`,
      `tan θ is positive when both legs have the same sign (Q1, Q3) and negative when they differ (Q2, Q4). [Full treatment](!#tangent-step-4-sign-by-quadrant) · [All about tangent](!#tangent-on-the-unit-circle)`,
      `Tangent actually repeats every 180° — twice as fast as sine and cosine. Past 360° the spiral arc grows, but tan(θ + 180°) = tan θ. The graph shows three full periods. [Full treatment](!#tangent-step-5-periodicity) · [All about tangent](!#tangent-on-the-unit-circle)`,
    ] },
    csc: { steps: [
      `Rotate the ray through θ. P sits on the unit circle. [Full treatment](!#cosecant-step-1-place-the-angle) · [All about cosecant](!#cosecant-on-the-unit-circle)`,
      `The signed vertical leg is sin θ. [Full treatment](!#cosecant-step-2-identify-the-vertical-leg) · [All about cosecant](!#cosecant-on-the-unit-circle)`,
      `csc θ = 1 / sin θ. It blows up where sin θ = 0 — at 0°, 180°, and 360°. [Full treatment](!#cosecant-step-3-take-the-reciprocal) · [All about cosecant](!#cosecant-on-the-unit-circle)`,
      `|csc θ| ≥ 1 wherever it is defined; the sign matches sin θ. [Full treatment](!#cosecant-step-4-range-and-sign) · [All about cosecant](!#cosecant-on-the-unit-circle)`,
      `csc inherits its period from sin: csc(θ + 360°) = csc θ. Drag past 360° — the spiral grows but the function value cycles. Ghost dots on the graph mark coterminals. [Full treatment](!#cosecant-step-5-periodicity) · [All about cosecant](!#cosecant-on-the-unit-circle)`,
    ] },
    sec: { steps: [
      `Rotate the ray through θ. P sits on the unit circle. [Full treatment](!#secant-step-1-place-the-angle) · [All about secant](!#secant-on-the-unit-circle)`,
      `The signed horizontal leg is cos θ. [Full treatment](!#secant-step-2-identify-the-horizontal-leg) · [All about secant](!#secant-on-the-unit-circle)`,
      `sec θ = 1 / cos θ. It blows up where cos θ = 0 — at 90° and 270°. [Full treatment](!#secant-step-3-take-the-reciprocal) · [All about secant](!#secant-on-the-unit-circle)`,
      `|sec θ| ≥ 1 wherever it is defined; the sign matches cos θ. [Full treatment](!#secant-step-4-range-and-sign) · [All about secant](!#secant-on-the-unit-circle)`,
      `sec inherits its period from cos: sec(θ + 360°) = sec θ. Drag past 360° — the function value cycles even as the spiral keeps growing. [Full treatment](!#secant-step-5-periodicity) · [All about secant](!#secant-on-the-unit-circle)`,
    ] },
    cot: { steps: [
      `Rotate the ray through θ. P sits on the unit circle. [Full treatment](!#cotangent-step-1-place-the-angle) · [All about cotangent](!#cotangent-on-the-unit-circle)`,
      `The vertical leg is sin θ, the horizontal leg is cos θ. [Full treatment](!#cotangent-step-2-read-both-legs) · [All about cotangent](!#cotangent-on-the-unit-circle)`,
      `cot θ = cos θ / sin θ = 1 / tan θ. It diverges where sin θ = 0 — at 0°, 180°, and 360°. [Full treatment](!#cotangent-step-3-form-the-ratio) · [All about cotangent](!#cotangent-on-the-unit-circle)`,
      `cot θ is positive in Q1 and Q3 and negative in Q2 and Q4 — the same sign pattern as tan θ. [Full treatment](!#cotangent-step-4-sign-by-quadrant) · [All about cotangent](!#cotangent-on-the-unit-circle)`,
      `Like tangent, cotangent repeats every 180°: cot(θ + 180°) = cot θ. The graph shows three full periods. [Full treatment](!#cotangent-step-5-periodicity) · [All about cotangent](!#cotangent-on-the-unit-circle)`,
    ] },
  };


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
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

export default function BasicTrigIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations}) {

    
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
        id:'getting-started',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'switching-between-the-six-functions',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'stepping-through-the-derivation',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'reading-the-unit-circle-display',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'reading-the-graph',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'exploring-periodicity',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'the-live-formula-table',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'what-are-the-basic-trigonometric-identities',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'defining-trig-functions-on-the-unit-circle',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'periodicity-and-reference-angles',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'related-concepts-and-tools',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'sine-on-the-unit-circle',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'cosine-on-the-unit-circle',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'tangent-on-the-unit-circle',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'cosecant-on-the-unit-circle',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    {
        id:'secant-on-the-unit-circle',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    {
        id:'cotangent-on-the-unit-circle',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
        ]
    },
    {
        id:'sine-step-1-place-the-angle',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
        ]
    },
    {
        id:'sine-step-2-drop-the-vertical-leg',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
        ]
    },
    {
        id:'sine-step-3-trace-on-the-graph',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
        ]
    },
    {
        id:'sine-step-4-reference-angle',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
        ]
    },
    {
        id:'sine-step-5-periodicity',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
        ]
    },
    {
        id:'cosine-step-1-place-the-angle',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
        ]
    },
    {
        id:'cosine-step-2-project-onto-the-x-axis',
        title:sectionsContent.obj24.title,
        link:sectionsContent.obj24.link,
        content:[
          sectionsContent.obj24.content,
        ]
    },
    {
        id:'cosine-step-3-trace-on-the-graph',
        title:sectionsContent.obj25.title,
        link:sectionsContent.obj25.link,
        content:[
          sectionsContent.obj25.content,
        ]
    },
    {
        id:'cosine-step-4-reference-angle',
        title:sectionsContent.obj26.title,
        link:sectionsContent.obj26.link,
        content:[
          sectionsContent.obj26.content,
        ]
    },
    {
        id:'cosine-step-5-periodicity',
        title:sectionsContent.obj27.title,
        link:sectionsContent.obj27.link,
        content:[
          sectionsContent.obj27.content,
        ]
    },
    {
        id:'tangent-step-1-place-the-angle',
        title:sectionsContent.obj28.title,
        link:sectionsContent.obj28.link,
        content:[
          sectionsContent.obj28.content,
        ]
    },
    {
        id:'tangent-step-2-read-both-legs',
        title:sectionsContent.obj29.title,
        link:sectionsContent.obj29.link,
        content:[
          sectionsContent.obj29.content,
        ]
    },
    {
        id:'tangent-step-3-form-the-ratio',
        title:sectionsContent.obj30.title,
        link:sectionsContent.obj30.link,
        content:[
          sectionsContent.obj30.content,
        ]
    },
    {
        id:'tangent-step-4-sign-by-quadrant',
        title:sectionsContent.obj31.title,
        link:sectionsContent.obj31.link,
        content:[
          sectionsContent.obj31.content,
        ]
    },
    {
        id:'tangent-step-5-periodicity',
        title:sectionsContent.obj32.title,
        link:sectionsContent.obj32.link,
        content:[
          sectionsContent.obj32.content,
        ]
    },
    {
        id:'cosecant-step-1-place-the-angle',
        title:sectionsContent.obj33.title,
        link:sectionsContent.obj33.link,
        content:[
          sectionsContent.obj33.content,
        ]
    },
    {
        id:'cosecant-step-2-identify-the-vertical-leg',
        title:sectionsContent.obj34.title,
        link:sectionsContent.obj34.link,
        content:[
          sectionsContent.obj34.content,
        ]
    },
    {
        id:'cosecant-step-3-take-the-reciprocal',
        title:sectionsContent.obj35.title,
        link:sectionsContent.obj35.link,
        content:[
          sectionsContent.obj35.content,
        ]
    },
    {
        id:'cosecant-step-4-range-and-sign',
        title:sectionsContent.obj36.title,
        link:sectionsContent.obj36.link,
        content:[
          sectionsContent.obj36.content,
        ]
    },
    {
        id:'cosecant-step-5-periodicity',
        title:sectionsContent.obj37.title,
        link:sectionsContent.obj37.link,
        content:[
          sectionsContent.obj37.content,
        ]
    },
    {
        id:'secant-step-1-place-the-angle',
        title:sectionsContent.obj38.title,
        link:sectionsContent.obj38.link,
        content:[
          sectionsContent.obj38.content,
        ]
    },
    {
        id:'secant-step-2-identify-the-horizontal-leg',
        title:sectionsContent.obj39.title,
        link:sectionsContent.obj39.link,
        content:[
          sectionsContent.obj39.content,
        ]
    },
    {
        id:'secant-step-3-take-the-reciprocal',
        title:sectionsContent.obj40.title,
        link:sectionsContent.obj40.link,
        content:[
          sectionsContent.obj40.content,
        ]
    },
    {
        id:'secant-step-4-range-and-sign',
        title:sectionsContent.obj41.title,
        link:sectionsContent.obj41.link,
        content:[
          sectionsContent.obj41.content,
        ]
    },
    {
        id:'secant-step-5-periodicity',
        title:sectionsContent.obj42.title,
        link:sectionsContent.obj42.link,
        content:[
          sectionsContent.obj42.content,
        ]
    },
    {
        id:'cotangent-step-1-place-the-angle',
        title:sectionsContent.obj43.title,
        link:sectionsContent.obj43.link,
        content:[
          sectionsContent.obj43.content,
        ]
    },
    {
        id:'cotangent-step-2-read-both-legs',
        title:sectionsContent.obj44.title,
        link:sectionsContent.obj44.link,
        content:[
          sectionsContent.obj44.content,
        ]
    },
    {
        id:'cotangent-step-3-form-the-ratio',
        title:sectionsContent.obj45.title,
        link:sectionsContent.obj45.link,
        content:[
          sectionsContent.obj45.content,
        ]
    },
    {
        id:'cotangent-step-4-sign-by-quadrant',
        title:sectionsContent.obj46.title,
        link:sectionsContent.obj46.link,
        content:[
          sectionsContent.obj46.content,
        ]
    },
    {
        id:'cotangent-step-5-periodicity',
        title:sectionsContent.obj47.title,
        link:sectionsContent.obj47.link,
        content:[
          sectionsContent.obj47.content,
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
   <BasicTrigIdentitiesExplorer explanations={explanations}/>
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