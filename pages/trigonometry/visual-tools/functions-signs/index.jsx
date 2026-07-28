// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import Quadrants from '../../../../app/components/trigonometry/Quadrants'


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
//         url: "/trigonometry/visual-tools/functions-signs",
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'-50px'}}>Trigonometric Functions Signs by Quadrants</h1>
//    <br/><div style={{transform:'scale(0.9)'}}>
//    <Quadrants/>
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
import Quadrants from '../../../../app/components/trigonometry/Quadrants'
import signsDiagrams from '../../../../app/components/trigonometry/quadrantSignsDiagrams'
import SiblingsNav from '../../../../app/components/SiblingsNav'



export async function getStaticProps(){

  const keyWords = [
    'trig functions signs by quadrant',
    'sin cos tan signs',
    'ASTC rule trigonometry',
    'all students take calculus',
    'CAST rule trigonometry',
    'quadrant signs calculator',
    'trigonometric signs visualizer',
    'unit circle quadrants',
    'sign of sine cosine tangent',
    'reciprocal trig signs',
    'csc sec cot signs',
    'trigonometry quadrant rules',
    'positive negative trig values',
    'interactive quadrants tool',
    'trig sign chart'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Quadrant** — one of four regions the x-axis and y-axis divide the plane into. Numbered I, II, III, IV counterclockwise starting from the upper right.
• **Reference angle** — the acute angle between the terminal ray and the x-axis. Always between $0°$ and $90°$.
• **ASTC rule** — mnemonic identifying which functions are positive in each quadrant: **A**ll, **S**ine, **T**angent, **C**osine.
• **Coordinate signs** — Q1 $(+,+)$, Q2 $(-,+)$, Q3 $(-,-)$, Q4 $(+,-)$. The radius $r$ is always positive.
• **Reciprocal pair** — $\\sin/\\csc$, $\\cos/\\sec$, $\\tan/\\cot$. Each pair shares the same sign in every quadrant.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Selecting a Quadrant`,
      content:`Four large buttons at the top represent quadrants [I](!#coordinate-signs-in-quadrant-i), [II](!#coordinate-signs-in-quadrant-ii), [III](!#coordinate-signs-in-quadrant-iii), and [IV](!#coordinate-signs-in-quadrant-iv). Each button shows the angle range in both degrees and radians.

Two ways to select:
• Click any quadrant button.
• Press the keys **1**, **2**, **3**, or **4** for the matching quadrant.

When you select a quadrant:
• Its color highlights both the button and the corresponding region of the unit circle.
• A point and radius appear inside that region of the circle.
• The coordinate panel updates with the matching x-sign and y-sign.
• The explanation panel and function summary refresh with values for the new quadrant.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Choosing a Function`,
      content:`Six buttons let you switch between the trigonometric functions — [sine](!#sine-in-quadrant-i), [cosine](!#cosine-in-quadrant-i), [tangent](!#tangent-in-quadrant-i), [cosecant](!#cosecant-in-quadrant-i), [secant](!#secant-in-quadrant-i), and [cotangent](!#cotangent-in-quadrant-i).

What changes when you switch:
• The header of the **Explanation Panel** updates to show $f(\\theta)$ in the selected quadrant.
• A large $+$ or $-$ symbol displays the function's sign.
• The reasoning text below derives the sign from the coordinate signs and the function's definition.

The same six functions also appear in the **Function Summary** grid below the panel, where you can see every sign for the current quadrant at once.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Reading the Unit Circle Diagram`,
      content:`The interactive **unit circle** anchors the entire tool. The selected quadrant is shaded in its color, and a colored radius runs from the origin to a sample point inside it.

What the diagram shows:
• Solid axes labeled $+x$, $-x$, $+y$, $-y$.
• Roman numeral labels **I**, **II**, **III**, **IV** in each region.
• A point $(x, y)$ on the circle with dashed lines dropping to the axes.
• A radius labeled $r$, always positive, from origin to point.

This setup makes the connection between coordinate signs and function signs visible: $x$ and $y$ change sign across quadrants, but $r$ never does.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Coordinate Panel`,
      content:`Below the unit circle, the **Coordinate Panel** lists the algebraic facts that determine every sign in the current quadrant.

Fields shown:
• **x-coordinate** — colored green for $+$ or red for $-$.
• **y-coordinate** — colored green for $+$ or red for $-$.
• **radius (r)** — always positive.
• **Reference angle** — the angle range in degrees and radians.

Memorizing the four x and y sign patterns is the single most important step in mastering trig signs. The panel surfaces them so you can see all four at once by clicking through the quadrants.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Explanation Panel`,
      content:`The **Explanation Panel** combines the current function and quadrant into a single, color-coded summary.

Three pieces of information:
• **Header** — names the function and quadrant, colored to match the selected region.
• **Sign** — a large $+$ or $-$ symbol gives the answer at a glance.
• **Mathematical Reasoning** — a sentence derives the sign from the function's definition (e.g., $\\tan\\theta = y/x$) and the coordinate signs of the quadrant.

Toggle the **Hide / Show Explanations** button at the top of the page to remove the reasoning text and use the tool as a quick sign reference.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Using the Function Summary Grid`,
      content:`The **Function Summary** at the bottom shows all six functions and their signs for the current quadrant in a compact grid.

Why it is useful:
• Verify the **ASTC** pattern at a glance — for example, in Q3 only $\\tan$ and $\\cot$ are positive.
• Confirm reciprocal pairs share signs ($\\sin$ matches $\\csc$, $\\cos$ matches $\\sec$, $\\tan$ matches $\\cot$).
• Click any cell to make that function the active selection in the explanation panel above.

Cycling through quadrants while keeping an eye on this grid is the fastest way to internalize the full sign chart.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Why Function Signs Depend on Quadrant`,
      content:`The trigonometric functions are defined as ratios involving the coordinates of a point on the unit circle:

$$\\sin\\theta = \\frac{y}{r}, \\quad \\cos\\theta = \\frac{x}{r}, \\quad \\tan\\theta = \\frac{y}{x}$$

Because $r > 0$ everywhere, the signs of these ratios depend entirely on the signs of $x$ and $y$. Since $x$ and $y$ flip sign as the terminal ray crosses an axis, each function takes on a predictable sign in each quadrant.

For deeper coverage of these definitions, see the **trigonometric functions theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`The ASTC Mnemonic`,
      content:`The **ASTC rule** (also called **CAST**) summarizes which functions are positive in each quadrant:

• [Q1](!#coordinate-signs-in-quadrant-i) — **A**ll six functions are positive.
• [Q2](!#coordinate-signs-in-quadrant-ii) — only **S**ine (and its reciprocal $\\csc$) are positive.
• [Q3](!#coordinate-signs-in-quadrant-iii) — only **T**angent (and its reciprocal $\\cot$) are positive.
• [Q4](!#coordinate-signs-in-quadrant-iv) — only **C**osine (and its reciprocal $\\sec$) are positive.

Common phrase: **A**ll **S**tudents **T**ake **C**alculus. Walking quadrants counterclockwise from Q1, the first letter of each word names the positive function family.

For full context, see the **ASTC rule page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Reciprocal Functions Share Signs`,
      content:`A reciprocal of a number always has the same sign as the number itself, since $1/(+x)$ is positive and $1/(-x)$ is negative.

Applied to trigonometry:
• $\\csc\\theta = 1/\\sin\\theta$ shares its sign with $\\sin\\theta$.
• $\\sec\\theta = 1/\\cos\\theta$ shares its sign with $\\cos\\theta$.
• $\\cot\\theta = 1/\\tan\\theta$ shares its sign with $\\tan\\theta$.

This means you only need to memorize the signs of three functions ($\\sin$, $\\cos$, $\\tan$). The other three follow automatically. For more, see the **reciprocal identities page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Unit Circle** — the geometric setup behind every quadrant rule.
• **Angle Explorer** — visualize any angle, its quadrant, and its reference angle.
• **Trigonometric Functions Graphs** — see how signs translate into the shapes of $\\sin$, $\\cos$, and $\\tan$ curves.
• **Reference Angle Calculator** — reduce any angle to a first-quadrant equivalent.
• **Trigonometric Identities** — Pythagorean, reciprocal, and quotient identities that interact with these signs.
• **Special Angles Table** — exact values across all four quadrants.`,
      before:``,
      after:``,
      link:'',
    },

    obj11:{
      title:`Coordinate Signs in Quadrant I`,
      content:`**Quadrant I** spans $0°$–$90°$ ($0$ to $\\pi/2$ in radians): the x-coordinate is **positive**, the y-coordinate is **positive**, and the radius $r$ is always positive. Every function sign in this quadrant follows from those three facts. Its ASTC letter is **A** — all six functions positive.

${signsDiagrams.quadrants[1]}

Function by function here: [sine](!#sine-in-quadrant-i) +, [cosine](!#cosine-in-quadrant-i) +, [tangent](!#tangent-in-quadrant-i) +, [cosecant](!#cosecant-in-quadrant-i) +, [secant](!#secant-in-quadrant-i) +, [cotangent](!#cotangent-in-quadrant-i) +.`,
      before:``,
      after:``,
      link:'',
    },
    obj12:{
      title:`Coordinate Signs in Quadrant II`,
      content:`**Quadrant II** spans $90°$–$180°$ ($\\pi/2$ to $\\pi$ in radians): the x-coordinate is **negative**, the y-coordinate is **positive**, and the radius $r$ is always positive. Every function sign in this quadrant follows from those three facts. Its ASTC letter is **S** — only sine and its reciprocal positive.

${signsDiagrams.quadrants[2]}

Function by function here: [sine](!#sine-in-quadrant-ii) +, [cosine](!#cosine-in-quadrant-ii) −, [tangent](!#tangent-in-quadrant-ii) −, [cosecant](!#cosecant-in-quadrant-ii) +, [secant](!#secant-in-quadrant-ii) −, [cotangent](!#cotangent-in-quadrant-ii) −.`,
      before:``,
      after:``,
      link:'',
    },
    obj13:{
      title:`Coordinate Signs in Quadrant III`,
      content:`**Quadrant III** spans $180°$–$270°$ ($\\pi$ to $3\\pi/2$ in radians): the x-coordinate is **negative**, the y-coordinate is **negative**, and the radius $r$ is always positive. Every function sign in this quadrant follows from those three facts. Its ASTC letter is **T** — only tangent and its reciprocal positive.

${signsDiagrams.quadrants[3]}

Function by function here: [sine](!#sine-in-quadrant-iii) −, [cosine](!#cosine-in-quadrant-iii) −, [tangent](!#tangent-in-quadrant-iii) +, [cosecant](!#cosecant-in-quadrant-iii) −, [secant](!#secant-in-quadrant-iii) −, [cotangent](!#cotangent-in-quadrant-iii) +.`,
      before:``,
      after:``,
      link:'',
    },
    obj14:{
      title:`Coordinate Signs in Quadrant IV`,
      content:`**Quadrant IV** spans $270°$–$360°$ ($3\\pi/2$ to $2\\pi$ in radians): the x-coordinate is **positive**, the y-coordinate is **negative**, and the radius $r$ is always positive. Every function sign in this quadrant follows from those three facts. Its ASTC letter is **C** — only cosine and its reciprocal positive.

${signsDiagrams.quadrants[4]}

Function by function here: [sine](!#sine-in-quadrant-iv) −, [cosine](!#cosine-in-quadrant-iv) +, [tangent](!#tangent-in-quadrant-iv) −, [cosecant](!#cosecant-in-quadrant-iv) −, [secant](!#secant-in-quadrant-iv) +, [cotangent](!#cotangent-in-quadrant-iv) −.`,
      before:``,
      after:``,
      link:'',
    },
    obj15:{
      title:`Sine in Quadrant I`,
      content:`In **Quadrant I** ($0°$–$90°$), sine is **positive**: $\\sin\\theta = y/r$, and the y-coordinate is positive there while $r$ stays positive.

${signsDiagrams.combos[1].sin}

At the sample angle the diagram freezes, $\\sin 45° = \\frac{\\sqrt{2}}{2}$ (\\approx 0.707). Its reciprocal partner, [cosecant](!#cosecant-in-quadrant-i), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant I](!#coordinate-signs-in-quadrant-i).`,
      before:``,
      after:``,
      link:'',
    },
    obj16:{
      title:`Cosine in Quadrant I`,
      content:`In **Quadrant I** ($0°$–$90°$), cosine is **positive**: $\\cos\\theta = x/r$, and the x-coordinate is positive there while $r$ stays positive.

${signsDiagrams.combos[1].cos}

At the sample angle the diagram freezes, $\\cos 45° = \\frac{\\sqrt{2}}{2}$ (\\approx 0.707). Its reciprocal partner, [secant](!#secant-in-quadrant-i), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant I](!#coordinate-signs-in-quadrant-i).`,
      before:``,
      after:``,
      link:'',
    },
    obj17:{
      title:`Tangent in Quadrant I`,
      content:`In **Quadrant I** ($0°$–$90°$), tangent is **positive**: $\\tan\\theta = y/x$, and y is positive and x is positive, so their ratio is positive.

${signsDiagrams.combos[1].tan}

At the sample angle the diagram freezes, $\\tan 45° = 1$. Its reciprocal partner, [cotangent](!#cotangent-in-quadrant-i), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant I](!#coordinate-signs-in-quadrant-i).`,
      before:``,
      after:``,
      link:'',
    },
    obj18:{
      title:`Cosecant in Quadrant I`,
      content:`In **Quadrant I** ($0°$–$90°$), cosecant is **positive**: $\\csc\\theta = r/y$, and it inherits sine's sign — y is positive, $r$ positive.

${signsDiagrams.combos[1].csc}

At the sample angle the diagram freezes, $\\csc 45° = \\sqrt{2}$ (\\approx 1.414). Its reciprocal partner, [sine](!#sine-in-quadrant-i), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant I](!#coordinate-signs-in-quadrant-i).`,
      before:``,
      after:``,
      link:'',
    },
    obj19:{
      title:`Secant in Quadrant I`,
      content:`In **Quadrant I** ($0°$–$90°$), secant is **positive**: $\\sec\\theta = r/x$, and it inherits cosine's sign — x is positive, $r$ positive.

${signsDiagrams.combos[1].sec}

At the sample angle the diagram freezes, $\\sec 45° = \\sqrt{2}$ (\\approx 1.414). Its reciprocal partner, [cosine](!#cosine-in-quadrant-i), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant I](!#coordinate-signs-in-quadrant-i).`,
      before:``,
      after:``,
      link:'',
    },
    obj20:{
      title:`Cotangent in Quadrant I`,
      content:`In **Quadrant I** ($0°$–$90°$), cotangent is **positive**: $\\cot\\theta = x/y$, and y is positive and x is positive, so their ratio is positive.

${signsDiagrams.combos[1].cot}

At the sample angle the diagram freezes, $\\cot 45° = 1$. Its reciprocal partner, [tangent](!#tangent-in-quadrant-i), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant I](!#coordinate-signs-in-quadrant-i).`,
      before:``,
      after:``,
      link:'',
    },
    obj21:{
      title:`Sine in Quadrant II`,
      content:`In **Quadrant II** ($90°$–$180°$), sine is **positive**: $\\sin\\theta = y/r$, and the y-coordinate is positive there while $r$ stays positive.

${signsDiagrams.combos[2].sin}

At the sample angle the diagram freezes, $\\sin 135° = \\frac{\\sqrt{2}}{2}$ (\\approx 0.707). Its reciprocal partner, [cosecant](!#cosecant-in-quadrant-ii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant II](!#coordinate-signs-in-quadrant-ii).`,
      before:``,
      after:``,
      link:'',
    },
    obj22:{
      title:`Cosine in Quadrant II`,
      content:`In **Quadrant II** ($90°$–$180°$), cosine is **negative**: $\\cos\\theta = x/r$, and the x-coordinate is negative there while $r$ stays positive.

${signsDiagrams.combos[2].cos}

At the sample angle the diagram freezes, $\\cos 135° = -\\frac{\\sqrt{2}}{2}$ (\\approx -0.707). Its reciprocal partner, [secant](!#secant-in-quadrant-ii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant II](!#coordinate-signs-in-quadrant-ii).`,
      before:``,
      after:``,
      link:'',
    },
    obj23:{
      title:`Tangent in Quadrant II`,
      content:`In **Quadrant II** ($90°$–$180°$), tangent is **negative**: $\\tan\\theta = y/x$, and y is positive and x is negative, so their ratio is negative.

${signsDiagrams.combos[2].tan}

At the sample angle the diagram freezes, $\\tan 135° = -1$. Its reciprocal partner, [cotangent](!#cotangent-in-quadrant-ii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant II](!#coordinate-signs-in-quadrant-ii).`,
      before:``,
      after:``,
      link:'',
    },
    obj24:{
      title:`Cosecant in Quadrant II`,
      content:`In **Quadrant II** ($90°$–$180°$), cosecant is **positive**: $\\csc\\theta = r/y$, and it inherits sine's sign — y is positive, $r$ positive.

${signsDiagrams.combos[2].csc}

At the sample angle the diagram freezes, $\\csc 135° = \\sqrt{2}$ (\\approx 1.414). Its reciprocal partner, [sine](!#sine-in-quadrant-ii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant II](!#coordinate-signs-in-quadrant-ii).`,
      before:``,
      after:``,
      link:'',
    },
    obj25:{
      title:`Secant in Quadrant II`,
      content:`In **Quadrant II** ($90°$–$180°$), secant is **negative**: $\\sec\\theta = r/x$, and it inherits cosine's sign — x is negative, $r$ positive.

${signsDiagrams.combos[2].sec}

At the sample angle the diagram freezes, $\\sec 135° = -\\sqrt{2}$ (\\approx -1.414). Its reciprocal partner, [cosine](!#cosine-in-quadrant-ii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant II](!#coordinate-signs-in-quadrant-ii).`,
      before:``,
      after:``,
      link:'',
    },
    obj26:{
      title:`Cotangent in Quadrant II`,
      content:`In **Quadrant II** ($90°$–$180°$), cotangent is **negative**: $\\cot\\theta = x/y$, and y is positive and x is negative, so their ratio is negative.

${signsDiagrams.combos[2].cot}

At the sample angle the diagram freezes, $\\cot 135° = -1$. Its reciprocal partner, [tangent](!#tangent-in-quadrant-ii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant II](!#coordinate-signs-in-quadrant-ii).`,
      before:``,
      after:``,
      link:'',
    },
    obj27:{
      title:`Sine in Quadrant III`,
      content:`In **Quadrant III** ($180°$–$270°$), sine is **negative**: $\\sin\\theta = y/r$, and the y-coordinate is negative there while $r$ stays positive.

${signsDiagrams.combos[3].sin}

At the sample angle the diagram freezes, $\\sin 225° = -\\frac{\\sqrt{2}}{2}$ (\\approx -0.707). Its reciprocal partner, [cosecant](!#cosecant-in-quadrant-iii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant III](!#coordinate-signs-in-quadrant-iii).`,
      before:``,
      after:``,
      link:'',
    },
    obj28:{
      title:`Cosine in Quadrant III`,
      content:`In **Quadrant III** ($180°$–$270°$), cosine is **negative**: $\\cos\\theta = x/r$, and the x-coordinate is negative there while $r$ stays positive.

${signsDiagrams.combos[3].cos}

At the sample angle the diagram freezes, $\\cos 225° = -\\frac{\\sqrt{2}}{2}$ (\\approx -0.707). Its reciprocal partner, [secant](!#secant-in-quadrant-iii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant III](!#coordinate-signs-in-quadrant-iii).`,
      before:``,
      after:``,
      link:'',
    },
    obj29:{
      title:`Tangent in Quadrant III`,
      content:`In **Quadrant III** ($180°$–$270°$), tangent is **positive**: $\\tan\\theta = y/x$, and y is negative and x is negative, so their ratio is positive.

${signsDiagrams.combos[3].tan}

At the sample angle the diagram freezes, $\\tan 225° = 1$. Its reciprocal partner, [cotangent](!#cotangent-in-quadrant-iii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant III](!#coordinate-signs-in-quadrant-iii).`,
      before:``,
      after:``,
      link:'',
    },
    obj30:{
      title:`Cosecant in Quadrant III`,
      content:`In **Quadrant III** ($180°$–$270°$), cosecant is **negative**: $\\csc\\theta = r/y$, and it inherits sine's sign — y is negative, $r$ positive.

${signsDiagrams.combos[3].csc}

At the sample angle the diagram freezes, $\\csc 225° = -\\sqrt{2}$ (\\approx -1.414). Its reciprocal partner, [sine](!#sine-in-quadrant-iii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant III](!#coordinate-signs-in-quadrant-iii).`,
      before:``,
      after:``,
      link:'',
    },
    obj31:{
      title:`Secant in Quadrant III`,
      content:`In **Quadrant III** ($180°$–$270°$), secant is **negative**: $\\sec\\theta = r/x$, and it inherits cosine's sign — x is negative, $r$ positive.

${signsDiagrams.combos[3].sec}

At the sample angle the diagram freezes, $\\sec 225° = -\\sqrt{2}$ (\\approx -1.414). Its reciprocal partner, [cosine](!#cosine-in-quadrant-iii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant III](!#coordinate-signs-in-quadrant-iii).`,
      before:``,
      after:``,
      link:'',
    },
    obj32:{
      title:`Cotangent in Quadrant III`,
      content:`In **Quadrant III** ($180°$–$270°$), cotangent is **positive**: $\\cot\\theta = x/y$, and y is negative and x is negative, so their ratio is positive.

${signsDiagrams.combos[3].cot}

At the sample angle the diagram freezes, $\\cot 225° = 1$. Its reciprocal partner, [tangent](!#tangent-in-quadrant-iii), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant III](!#coordinate-signs-in-quadrant-iii).`,
      before:``,
      after:``,
      link:'',
    },
    obj33:{
      title:`Sine in Quadrant IV`,
      content:`In **Quadrant IV** ($270°$–$360°$), sine is **negative**: $\\sin\\theta = y/r$, and the y-coordinate is negative there while $r$ stays positive.

${signsDiagrams.combos[4].sin}

At the sample angle the diagram freezes, $\\sin 315° = -\\frac{\\sqrt{2}}{2}$ (\\approx -0.707). Its reciprocal partner, [cosecant](!#cosecant-in-quadrant-iv), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant IV](!#coordinate-signs-in-quadrant-iv).`,
      before:``,
      after:``,
      link:'',
    },
    obj34:{
      title:`Cosine in Quadrant IV`,
      content:`In **Quadrant IV** ($270°$–$360°$), cosine is **positive**: $\\cos\\theta = x/r$, and the x-coordinate is positive there while $r$ stays positive.

${signsDiagrams.combos[4].cos}

At the sample angle the diagram freezes, $\\cos 315° = \\frac{\\sqrt{2}}{2}$ (\\approx 0.707). Its reciprocal partner, [secant](!#secant-in-quadrant-iv), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant IV](!#coordinate-signs-in-quadrant-iv).`,
      before:``,
      after:``,
      link:'',
    },
    obj35:{
      title:`Tangent in Quadrant IV`,
      content:`In **Quadrant IV** ($270°$–$360°$), tangent is **negative**: $\\tan\\theta = y/x$, and y is negative and x is positive, so their ratio is negative.

${signsDiagrams.combos[4].tan}

At the sample angle the diagram freezes, $\\tan 315° = -1$. Its reciprocal partner, [cotangent](!#cotangent-in-quadrant-iv), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant IV](!#coordinate-signs-in-quadrant-iv).`,
      before:``,
      after:``,
      link:'',
    },
    obj36:{
      title:`Cosecant in Quadrant IV`,
      content:`In **Quadrant IV** ($270°$–$360°$), cosecant is **negative**: $\\csc\\theta = r/y$, and it inherits sine's sign — y is negative, $r$ positive.

${signsDiagrams.combos[4].csc}

At the sample angle the diagram freezes, $\\csc 315° = -\\sqrt{2}$ (\\approx -1.414). Its reciprocal partner, [sine](!#sine-in-quadrant-iv), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant IV](!#coordinate-signs-in-quadrant-iv).`,
      before:``,
      after:``,
      link:'',
    },
    obj37:{
      title:`Secant in Quadrant IV`,
      content:`In **Quadrant IV** ($270°$–$360°$), secant is **positive**: $\\sec\\theta = r/x$, and it inherits cosine's sign — x is positive, $r$ positive.

${signsDiagrams.combos[4].sec}

At the sample angle the diagram freezes, $\\sec 315° = \\sqrt{2}$ (\\approx 1.414). Its reciprocal partner, [cosine](!#cosine-in-quadrant-iv), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant IV](!#coordinate-signs-in-quadrant-iv).`,
      before:``,
      after:``,
      link:'',
    },
    obj38:{
      title:`Cotangent in Quadrant IV`,
      content:`In **Quadrant IV** ($270°$–$360°$), cotangent is **negative**: $\\cot\\theta = x/y$, and y is negative and x is positive, so their ratio is negative.

${signsDiagrams.combos[4].cot}

At the sample angle the diagram freezes, $\\cot 315° = -1$. Its reciprocal partner, [tangent](!#tangent-in-quadrant-iv), carries the same sign here; the underlying coordinate facts are in [coordinate signs in Quadrant IV](!#coordinate-signs-in-quadrant-iv).`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "Why does sine of an angle change sign between quadrants?",
      answer: "Sine is defined as y divided by r. The radius r is always positive, so the sign of sine matches the sign of the y-coordinate. Because y is positive in quadrants I and II and negative in quadrants III and IV, sine flips sign across the x-axis."
    },
    obj2: {
      question: "What is the ASTC rule?",
      answer: "ASTC summarizes which trig functions are positive in each quadrant: All in Q1, Sine in Q2, Tangent in Q3, Cosine in Q4. The common memory phrase All Students Take Calculus walks the quadrants counterclockwise starting from Q1."
    },
    obj3: {
      question: "Do reciprocal functions have the same signs as their counterparts?",
      answer: "Yes. Cosecant matches sine, secant matches cosine, and cotangent matches tangent in every quadrant. The reciprocal of a positive number is positive and the reciprocal of a negative number is negative, so the signs always agree."
    },
    obj4: {
      question: "How do I select a quadrant in the tool?",
      answer: "Click any of the four quadrant buttons at the top, or press the number keys 1, 2, 3, or 4 on your keyboard. The unit circle highlights the chosen region and the explanation panel updates instantly."
    },
    obj5: {
      question: "Why is the radius always positive in trigonometry?",
      answer: "The radius r is the distance from the origin to a point on the unit circle, and distance is non-negative by definition. This means the sign of every trig ratio depends only on the signs of the x and y coordinates, never on r."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Trigonometric Functions Signs by Quadrants",
      "description": "Visualize how sin, cos, tan, csc, sec, and cot change sign across quadrants. Interactive unit circle with ASTC rule, coordinate signs, and step-by-step reasoning.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/functions-signs",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive unit circle highlighting any of the four quadrants",
        "Six function buttons for sin, cos, tan, csc, sec, and cot",
        "Coordinate panel showing x-sign, y-sign, radius, and angle range",
        "Explanation panel with derivation of each sign from coordinate ratios",
        "All-functions summary grid for the current quadrant",
        "Toggle to hide or show step-by-step explanations",
        "Keyboard shortcuts (1-4) for fast quadrant switching",
        "Built-in ASTC mnemonic and definitions reference"
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
          "name": "Functions Signs by Quadrants",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/functions-signs"
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




  // Canonical explanations (verbatim from the component templates, kept there
  // as fallback) plus same-page anchors to each state’s full section.
  const explanations = {
    sin: {
      1: `sin θ = y/r. Since y is positive and r is always positive, sin θ is positive. [Full treatment](!#sine-in-quadrant-i) · [Quadrant I coordinates](!#coordinate-signs-in-quadrant-i)`,
      2: `sin θ = y/r. Since y is positive and r is always positive, sin θ is positive. [Full treatment](!#sine-in-quadrant-ii) · [Quadrant II coordinates](!#coordinate-signs-in-quadrant-ii)`,
      3: `sin θ = y/r. Since y is negative and r is always positive, sin θ is negative. [Full treatment](!#sine-in-quadrant-iii) · [Quadrant III coordinates](!#coordinate-signs-in-quadrant-iii)`,
      4: `sin θ = y/r. Since y is negative and r is always positive, sin θ is negative. [Full treatment](!#sine-in-quadrant-iv) · [Quadrant IV coordinates](!#coordinate-signs-in-quadrant-iv)`,
    },
    cos: {
      1: `cos θ = x/r. Since x is positive and r is always positive, cos θ is positive. [Full treatment](!#cosine-in-quadrant-i) · [Quadrant I coordinates](!#coordinate-signs-in-quadrant-i)`,
      2: `cos θ = x/r. Since x is negative and r is always positive, cos θ is negative. [Full treatment](!#cosine-in-quadrant-ii) · [Quadrant II coordinates](!#coordinate-signs-in-quadrant-ii)`,
      3: `cos θ = x/r. Since x is negative and r is always positive, cos θ is negative. [Full treatment](!#cosine-in-quadrant-iii) · [Quadrant III coordinates](!#coordinate-signs-in-quadrant-iii)`,
      4: `cos θ = x/r. Since x is positive and r is always positive, cos θ is positive. [Full treatment](!#cosine-in-quadrant-iv) · [Quadrant IV coordinates](!#coordinate-signs-in-quadrant-iv)`,
    },
    tan: {
      1: `tan θ = y/x. Since y is positive and x is positive, tan θ is positive. [Full treatment](!#tangent-in-quadrant-i) · [Quadrant I coordinates](!#coordinate-signs-in-quadrant-i)`,
      2: `tan θ = y/x. Since y is positive and x is negative, tan θ is negative. [Full treatment](!#tangent-in-quadrant-ii) · [Quadrant II coordinates](!#coordinate-signs-in-quadrant-ii)`,
      3: `tan θ = y/x. Since y is negative and x is negative, tan θ is positive. [Full treatment](!#tangent-in-quadrant-iii) · [Quadrant III coordinates](!#coordinate-signs-in-quadrant-iii)`,
      4: `tan θ = y/x. Since y is negative and x is positive, tan θ is negative. [Full treatment](!#tangent-in-quadrant-iv) · [Quadrant IV coordinates](!#coordinate-signs-in-quadrant-iv)`,
    },
    csc: {
      1: `csc θ = r/y = 1/sin θ. Since r is always positive and y is positive, csc θ is positive. [Full treatment](!#cosecant-in-quadrant-i) · [Quadrant I coordinates](!#coordinate-signs-in-quadrant-i)`,
      2: `csc θ = r/y = 1/sin θ. Since r is always positive and y is positive, csc θ is positive. [Full treatment](!#cosecant-in-quadrant-ii) · [Quadrant II coordinates](!#coordinate-signs-in-quadrant-ii)`,
      3: `csc θ = r/y = 1/sin θ. Since r is always positive and y is negative, csc θ is negative. [Full treatment](!#cosecant-in-quadrant-iii) · [Quadrant III coordinates](!#coordinate-signs-in-quadrant-iii)`,
      4: `csc θ = r/y = 1/sin θ. Since r is always positive and y is negative, csc θ is negative. [Full treatment](!#cosecant-in-quadrant-iv) · [Quadrant IV coordinates](!#coordinate-signs-in-quadrant-iv)`,
    },
    sec: {
      1: `sec θ = r/x = 1/cos θ. Since r is always positive and x is positive, sec θ is positive. [Full treatment](!#secant-in-quadrant-i) · [Quadrant I coordinates](!#coordinate-signs-in-quadrant-i)`,
      2: `sec θ = r/x = 1/cos θ. Since r is always positive and x is negative, sec θ is negative. [Full treatment](!#secant-in-quadrant-ii) · [Quadrant II coordinates](!#coordinate-signs-in-quadrant-ii)`,
      3: `sec θ = r/x = 1/cos θ. Since r is always positive and x is negative, sec θ is negative. [Full treatment](!#secant-in-quadrant-iii) · [Quadrant III coordinates](!#coordinate-signs-in-quadrant-iii)`,
      4: `sec θ = r/x = 1/cos θ. Since r is always positive and x is positive, sec θ is positive. [Full treatment](!#secant-in-quadrant-iv) · [Quadrant IV coordinates](!#coordinate-signs-in-quadrant-iv)`,
    },
    cot: {
      1: `cot θ = x/y. Since x is positive and y is positive, cot θ is positive. [Full treatment](!#cotangent-in-quadrant-i) · [Quadrant I coordinates](!#coordinate-signs-in-quadrant-i)`,
      2: `cot θ = x/y. Since x is negative and y is positive, cot θ is negative. [Full treatment](!#cotangent-in-quadrant-ii) · [Quadrant II coordinates](!#coordinate-signs-in-quadrant-ii)`,
      3: `cot θ = x/y. Since x is negative and y is negative, cot θ is positive. [Full treatment](!#cotangent-in-quadrant-iii) · [Quadrant III coordinates](!#coordinate-signs-in-quadrant-iii)`,
      4: `cot θ = x/y. Since x is positive and y is negative, cot θ is negative. [Full treatment](!#cotangent-in-quadrant-iv) · [Quadrant IV coordinates](!#coordinate-signs-in-quadrant-iv)`,
    },
  };


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
          seoData: {
        title: "Trig Function Signs by Quadrant: ASTC Visualizer | Learn Math Class",
        description: "Visualize how sin, cos, tan, csc, sec, and cot change sign across quadrants. Interactive unit circle with the ASTC rule and step-by-step reasoning.",
        hubDescription: "An interactive quadrant explorer that shows the sign of every trigonometric function in each of the four quadrants. Click a quadrant or press 1-4, pick a function, and watch the unit circle, coordinate signs, ASTC rule, and step-by-step reasoning update together. A clean way to internalize why sine, cosine, tangent, and their reciprocals flip sign as the angle moves around the circle.",
        category: "Functions",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/functions-signs",
        name: "Interactive Trigonometric Functions Signs by Quadrants"
      },

       }
    }
   }

export default function FunctionsSignsPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations}) {


  const genericSections=[
    {
        id:'key-terms',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'selecting-a-quadrant',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'choosing-a-function',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'reading-the-unit-circle-diagram',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'reading-the-coordinate-panel',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'reading-the-explanation-panel',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'using-the-function-summary-grid',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'why-function-signs-depend-on-quadrant',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'the-astc-mnemonic',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'reciprocal-functions-share-signs',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'related-concepts-and-tools',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'coordinate-signs-in-quadrant-i',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'coordinate-signs-in-quadrant-ii',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'coordinate-signs-in-quadrant-iii',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'coordinate-signs-in-quadrant-iv',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'sine-in-quadrant-i',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    {
        id:'cosine-in-quadrant-i',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    {
        id:'tangent-in-quadrant-i',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
        ]
    },
    {
        id:'cosecant-in-quadrant-i',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
        ]
    },
    {
        id:'secant-in-quadrant-i',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
        ]
    },
    {
        id:'cotangent-in-quadrant-i',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
        ]
    },
    {
        id:'sine-in-quadrant-ii',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
        ]
    },
    {
        id:'cosine-in-quadrant-ii',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
        ]
    },
    {
        id:'tangent-in-quadrant-ii',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
        ]
    },
    {
        id:'cosecant-in-quadrant-ii',
        title:sectionsContent.obj24.title,
        link:sectionsContent.obj24.link,
        content:[
          sectionsContent.obj24.content,
        ]
    },
    {
        id:'secant-in-quadrant-ii',
        title:sectionsContent.obj25.title,
        link:sectionsContent.obj25.link,
        content:[
          sectionsContent.obj25.content,
        ]
    },
    {
        id:'cotangent-in-quadrant-ii',
        title:sectionsContent.obj26.title,
        link:sectionsContent.obj26.link,
        content:[
          sectionsContent.obj26.content,
        ]
    },
    {
        id:'sine-in-quadrant-iii',
        title:sectionsContent.obj27.title,
        link:sectionsContent.obj27.link,
        content:[
          sectionsContent.obj27.content,
        ]
    },
    {
        id:'cosine-in-quadrant-iii',
        title:sectionsContent.obj28.title,
        link:sectionsContent.obj28.link,
        content:[
          sectionsContent.obj28.content,
        ]
    },
    {
        id:'tangent-in-quadrant-iii',
        title:sectionsContent.obj29.title,
        link:sectionsContent.obj29.link,
        content:[
          sectionsContent.obj29.content,
        ]
    },
    {
        id:'cosecant-in-quadrant-iii',
        title:sectionsContent.obj30.title,
        link:sectionsContent.obj30.link,
        content:[
          sectionsContent.obj30.content,
        ]
    },
    {
        id:'secant-in-quadrant-iii',
        title:sectionsContent.obj31.title,
        link:sectionsContent.obj31.link,
        content:[
          sectionsContent.obj31.content,
        ]
    },
    {
        id:'cotangent-in-quadrant-iii',
        title:sectionsContent.obj32.title,
        link:sectionsContent.obj32.link,
        content:[
          sectionsContent.obj32.content,
        ]
    },
    {
        id:'sine-in-quadrant-iv',
        title:sectionsContent.obj33.title,
        link:sectionsContent.obj33.link,
        content:[
          sectionsContent.obj33.content,
        ]
    },
    {
        id:'cosine-in-quadrant-iv',
        title:sectionsContent.obj34.title,
        link:sectionsContent.obj34.link,
        content:[
          sectionsContent.obj34.content,
        ]
    },
    {
        id:'tangent-in-quadrant-iv',
        title:sectionsContent.obj35.title,
        link:sectionsContent.obj35.link,
        content:[
          sectionsContent.obj35.content,
        ]
    },
    {
        id:'cosecant-in-quadrant-iv',
        title:sectionsContent.obj36.title,
        link:sectionsContent.obj36.link,
        content:[
          sectionsContent.obj36.content,
        ]
    },
    {
        id:'secant-in-quadrant-iv',
        title:sectionsContent.obj37.title,
        link:sectionsContent.obj37.link,
        content:[
          sectionsContent.obj37.content,
        ]
    },
    {
        id:'cotangent-in-quadrant-iv',
        title:sectionsContent.obj38.title,
        link:sectionsContent.obj38.link,
        content:[
          sectionsContent.obj38.content,
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'-50px'}}>Trigonometric Functions Signs by Quadrants</h1>
   <br/>
   <SiblingsNav 
      bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
  topOffset='200px'
   >
   <div style={{transform:'scale(0.9)'}}>
   <Quadrants explanations={explanations}/>
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
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}