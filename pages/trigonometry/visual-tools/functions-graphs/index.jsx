// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import TrigFunctionsExplorer from '../../../../app/components/trigonometry/TrigFunctionsExplorer'


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
//         url: "/trigonometry/visual-tools/functions-graphs",
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Trigonometric Functions Graphs</h1>
//    <br/>
//    <TrigFunctionsExplorer/>
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
import TrigFunctionsExplorer from '../../../../app/components/trigonometry/TrigFunctionsExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'






export async function getStaticProps(){

  const keyWords = [
    'trigonometric functions graphs',
    'trig functions visualizer',
    'sine cosine tangent graph',
    'interactive trig graphs',
    'sin cos tan plotter',
    'csc sec cot graphs',
    'reciprocal trig functions',
    'period amplitude visualizer',
    'unit circle to graph',
    'trig function calculator',
    'angle radian degree graph',
    'asymptotes trigonometry',
    'trig function range',
    'visualize sine wave',
    'trigonometry learning tool'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Period** — the smallest positive value $T$ such that $f(\\theta + T) = f(\\theta)$ for all $\\theta$. $\\sin$, $\\cos$, $\\sec$, $\\csc$ have period $2\\pi$; $\\tan$ and $\\cot$ have period $\\pi$.
• **Amplitude** — half the distance between the maximum and minimum values. Defined for bounded functions only ($\\sin$ and $\\cos$ have amplitude $1$).
• **Range** — the set of output values. $\\sin$ and $\\cos$: $[-1, 1]$. $\\sec$ and $\\csc$: $(-\\infty, -1] \\cup [1, \\infty)$. $\\tan$ and $\\cot$: all real numbers.
• **Asymptote** — a vertical line the graph approaches but never crosses. Occurs where the function is undefined (denominator equals zero).
• **Zero** — input value where the function equals zero. The x-axis intercepts of the curve.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Selecting a Function`,
      content:`The **Function** row in the controls offers six buttons: $\\sin$, $\\cos$, $\\tan$, $\\csc$, $\\sec$, and $\\cot$. Click any button to switch the graph instantly.

What changes when you switch:
• The plotted curve redraws with the function's characteristic shape.
• The result expression updates to use the new function name.
• The explanation panel on the right replaces its text with definitions and key features for the chosen function.

The selected function stays highlighted in dark blue, making it easy to track which curve you are viewing during a comparison session.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Switching Between Degrees and Radians`,
      content:`The **Unit** toggle switches the x-axis labeling and the angle input between **deg** and **rad**.

How the conversion works:
• The underlying angle is stored internally and does not change when you switch units.
• In **deg** mode, presets show $0°$, $30°$, $45°$, $60°$, $90°$, $180°$, $270°$, $360°$.
• In **rad** mode, presets show $0$, $\\pi/6$, $\\pi/4$, $\\pi/3$, $\\pi/2$, $\\pi$, $3\\pi/2$, $2\\pi$.

Use radians when working with calculus, periodicity proofs, or the **unit circle**, and degrees when the problem comes from geometry or applied measurement.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Setting the Angle`,
      content:`Three input methods control the current angle, all linked together:

• **Slider** — drag horizontally for a continuous sweep from $-360°$ to $+360°$ in steps of $1°$.
• **Number input** — type an exact value. The unit symbol next to the box reflects the active unit.
• **Quick presets** — click any of the eight buttons to jump to a special angle.

Watching the result value update as you drag the slider builds strong intuition for how each function changes with $\\theta$. Try dragging through a full period for $\\sin$ to see the wave shape emerge.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Result Display`,
      content:`The **Result** field in the upper-right of the controls panel shows the current evaluation in the form:

$$f(\\theta) = \\text{value}$$

For example, with $\\sin$ selected and the angle at $\\pi/2$, the display reads $\\sin(\\pi/2) = 1.0000$.

Key behaviors:
• Values are rounded to four decimal places.
• Radian angles are formatted as fractions of $\\pi$ when possible (e.g., $\\pi/4$, $3\\pi/2$).
• When the function is mathematically undefined at the chosen angle, the display reads "undefined" instead of a number.

This makes the explorer useful as a quick lookup tool while still showing the underlying graph context.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Graph`,
      content:`The graph plots the selected function across a range of angle values, with a vertical marker showing your current $\\theta$.

What to look for:
• **Wave shape** — $\\sin$ and $\\cos$ trace smooth bounded oscillations between $-1$ and $1$.
• **Asymptotes** — $\\tan$, $\\cot$, $\\sec$, $\\csc$ shoot to $\\pm\\infty$ at the angles where their denominators vanish.
• **Periodicity** — the same pattern repeats. Compare $\\theta$ and $\\theta + 2\\pi$ to confirm.
• **Zeros** — points where the curve crosses the x-axis.

Sliding the angle input animates the marker along the curve, anchoring numerical output to its visual position.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Comparing Functions Side by Side`,
      content:`Although only one function is shown at a time, you can build a mental overlay quickly:

• Pick a fixed angle, then click each function button in sequence and note the result values.
• Use $\\pi/4$ ($45°$) to see that $\\sin$ and $\\cos$ both equal $\\sqrt{2}/2$, while $\\tan$ equals $1$.
• At $\\pi/2$ ($90°$), $\\sin$ peaks at $1$, $\\cos$ hits zero, and $\\tan$ becomes undefined.
• Comparing $\\sin$ with $\\csc$ (or $\\cos$ with $\\sec$) at the same angle highlights the **reciprocal relationship**: their product equals $1$ wherever both are defined.

This pattern of stepping through functions at fixed angles is one of the fastest ways to internalize trig identities.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`What Are Trigonometric Functions?`,
      content:`A **trigonometric function** assigns a numeric value to every angle. The three primary functions come from the **unit circle**: for a point at angle $\\theta$ on the circle, $\\cos\\theta$ is its x-coordinate, $\\sin\\theta$ is its y-coordinate, and $\\tan\\theta = \\sin\\theta / \\cos\\theta$.

The three reciprocal functions follow directly:
• $\\csc\\theta = 1/\\sin\\theta$
• $\\sec\\theta = 1/\\cos\\theta$
• $\\cot\\theta = 1/\\tan\\theta$

For full theory and definitions, see the **trigonometric functions theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Period, Amplitude, and Range`,
      content:`Three properties summarize the global behavior of each function:

• **Period** — how often the pattern repeats. $\\sin$, $\\cos$, $\\sec$, $\\csc$ repeat every $2\\pi$; $\\tan$ and $\\cot$ repeat every $\\pi$.
• **Amplitude** — half the peak-to-trough distance, defined only for bounded functions. $\\sin$ and $\\cos$ have amplitude $1$.
• **Range** — the set of possible output values. $\\sin$ and $\\cos$ stay in $[-1, 1]$; $\\sec$ and $\\csc$ live outside $(-1, 1)$; $\\tan$ and $\\cot$ cover all real numbers.

For full coverage with proofs and transformations, see the **period and amplitude page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Asymptotes and Undefined Points`,
      content:`Four of the six functions have **vertical asymptotes** — vertical lines the graph approaches but never crosses, marking inputs where the function is undefined:

• $\\tan\\theta$ and $\\sec\\theta$ are undefined where $\\cos\\theta = 0$, i.e., at $\\theta = \\pi/2 + \\pi k$.
• $\\cot\\theta$ and $\\csc\\theta$ are undefined where $\\sin\\theta = 0$, i.e., at $\\theta = \\pi k$.

The explorer reports "undefined" at these inputs and the curve appears to break in the graph. For a deeper look at why these gaps appear, see the **trig identities page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Unit Circle** — the geometric source of every trig function value.
• **Angle Explorer** — visualize angles, quadrants, reference angles, and related-angle relationships.
• **Trigonometric Identities** — Pythagorean, reciprocal, quotient, and angle-sum formulas.
• **Inverse Trigonometric Functions** — arcsin, arccos, arctan and their restricted domains.
• **Trig Equations Solver** — practice solving equations involving sine, cosine, and tangent.
• **Special Angles Table** — exact values at $0°$, $30°$, $45°$, $60°$, $90°$, and beyond.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "Which trigonometric functions can I graph?",
      answer: "All six standard functions: sine, cosine, tangent, cosecant, secant, and cotangent. Click any function button to redraw the graph and update the explanation panel with that function's key properties."
    },
    obj2: {
      question: "Can I switch between degrees and radians?",
      answer: "Yes. The unit toggle switches the angle input, the preset buttons, and the result display between degrees and radians. The underlying angle is preserved during the switch, so only the labels and formatting change."
    },
    obj3: {
      question: "Why does the result sometimes say undefined?",
      answer: "Tangent and secant are undefined where cosine equals zero, and cotangent and cosecant are undefined where sine equals zero. At these angles the function values diverge to infinity, and the explorer reports undefined instead of a number."
    },
    obj4: {
      question: "How do I see the period of a function?",
      answer: "Drag the angle slider through a full sweep and watch the result oscillate. Sine, cosine, secant, and cosecant repeat every 2 pi radians (360 degrees). Tangent and cotangent repeat every pi radians (180 degrees)."
    },
    obj5: {
      question: "What are the quick angle presets for?",
      answer: "The presets jump to commonly used angles like 0, pi over 6, pi over 4, pi over 3, pi over 2, pi, 3 pi over 2, and 2 pi. These are the special angles whose trig values appear in exact form on the unit circle."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Trigonometric Functions Graphs",
      "description": "Graph and evaluate sin, cos, tan, csc, sec, and cot interactively. Switch units, drag the angle, and explore period, range, and asymptotes in real time.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/functions-graphs",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six function buttons covering sin, cos, tan, csc, sec, and cot",
        "Degree and radian unit toggle with synchronized inputs",
        "Continuous angle slider from minus 360 to plus 360 degrees",
        "Numeric angle input with live unit-aware formatting",
        "Eight quick preset angles per unit covering all special positions",
        "Live result expression with four-decimal precision and undefined detection",
        "Per-function explanation panel describing range, period, zeros, and asymptotes"
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
          "name": "Trigonometric Functions Graphs",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/functions-graphs"
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
        title: "Trig Functions Graphs: Interactive Visualizer | Learn Math Class",
        description: "Graph sin, cos, tan, csc, sec, and cot interactively. Drag the angle, switch units, and explore period, range, and asymptotes with live results.",
        hubDescription: "An interactive trigonometric functions visualizer that graphs sine, cosine, tangent, cosecant, secant, and cotangent in real time. Switch between degrees and radians, drag the angle slider through a full rotation, jump to special-angle presets, and watch live function values, periods, ranges, and asymptotes update on the plot and in the explanation panel.",
        category: "Functions",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/functions-graphs",
        name: "Interactive Trigonometric Functions Graphs"
      },

       }
    }
   }

export default function TrigFunctionsGraphsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Trigonometric Functions Graphs</h1>
   <br/>
   <SiblingsNav
      bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
   
   >
   <TrigFunctionsExplorer/>
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