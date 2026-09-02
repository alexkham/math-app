// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import PythagoreanExplorer from '../../../../app/components/trigonometry/identities/pythagorean/PythagoreanExplorer'
// import SiblingsNavStandalone  from '../../../../app/components/SiblingsNavStandalone'


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
//         url: "/trigonometry/visual-tools/pythagorean-identities",
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
//    <h1 className='title' style={{marginTop:'20px',marginBottom:'0px'}}>Pythagorean Trigonometric Identities</h1>
//    <br/>
//    <div style={{ display: 'grid', gridTemplateColumns: '100px minmax(0, 1fr)', gap: 8,alignItems: 'start' }}>
//      <SiblingsNavStandalone 
//      // bg="#fafaf7"
//      // color="#2c5d99"
//      // activeColor="#143a66"
//      // activeBg="#dde9f7"
   
//      bg="#ffffff"
//      color="#64748b"
//      activeColor="#4F46E5"
//      activeBg="#eef2ff"
//      />
//      <PythagoreanExplorer/>
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
import PythagoreanExplorer from '../../../../app/components/trigonometry/identities/pythagorean/PythagoreanExplorer'
import SiblingsNavStandalone  from '../../../../app/components/SiblingsNavStandalone'
import pythagoreanDiagrams from '../../../../app/components/trigonometry/identities/pythagorean/pythagoreanDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'pythagorean identities',
    'pythagorean trigonometric identities',
    'sin squared plus cos squared',
    'tan squared plus 1 sec squared',
    '1 plus cot squared csc squared',
    'pythagorean identity proof',
    'sin cos tan identity',
    'csc sec cot identity',
    'trigonometric identities visualizer',
    'interactive pythagorean identity',
    'derive pythagorean identities',
    'unit circle identity',
    'right triangle identity',
    'trig identity calculator',
    'fundamental trig identities'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Pythagorean identity** — a trigonometric identity derived from $\\sin^2\\theta + \\cos^2\\theta = 1$, itself a consequence of Pythagoras' theorem on a right triangle with hypotenuse $1$.
• **Base identity** — $\\sin^2\\theta + \\cos^2\\theta = 1$, the geometric foundation for all six function forms in this tool.
• **Derived identity** — one obtained by dividing the base identity by $\\sin^2\\theta$ or $\\cos^2\\theta$, then rearranging.
• **Reciprocal function** — $\\csc = 1/\\sin$, $\\sec = 1/\\cos$, $\\cot = 1/\\tan$.
• **Positive root** — when solving $x^2 = y$ for $x$, the explorer assumes $\\theta$ is in the first quadrant so all six functions are positive.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Switching Between Functions`,
      content:`Six tabs at the top let you pick which Pythagorean form to study: $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$, $\\csc\\theta$, $\\sec\\theta$, $\\cot\\theta$.

How selection changes the view:
• $\\sin$ and $\\cos$ open the **geometric proof** scene with a step-by-step animation built on a right triangle inside the unit circle.
• $\\tan$, $\\csc$, $\\sec$, and $\\cot$ open the **derived identity card** with the algebraic chain.
• The active tab is highlighted in deep blue.
• The URL updates with $?fn=...$ so links you share preserve the selected function.

Any row of the **formula table** at the bottom also jumps to that function.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Adjusting the Angle θ`,
      content:`Each view exposes a slider for the angle $\\theta$ in degrees, between $10°$ and $80°$ (first quadrant).

What changes as you slide:
• On geometric scenes, the triangle inside the unit circle reshapes in real time.
• The number readout shows the exact degree value.
• The verification cards at the bottom recompute both sides of the identity at the new $\\theta$.

Restricting to the first quadrant keeps every trig function positive, which lets the tool [take square roots without sign ambiguity](!#sine-proof-step-6-take-the-positive-root).`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Playing Through a Geometric Proof`,
      content:`When $\\sin$ or $\\cos$ is active, an animated proof unfolds in six steps. A toolbar gives you control:

• **Reset** — return to step 0 with a blank scene.
• **Prev** / **Next** — step through one stage at a time.
• **Play** / **Pause** — advance automatically.
• **Speed selector** — $0.5\\times$, $1\\times$, $1.5\\times$, $2\\times$.

Each step adds one element (radii, triangle fill, bisector, half-angles, leg labels $\\sin\\theta$ and $\\cos\\theta$, final metrics). The right panel logs each step with reasoning, and every stage has its own write-up below, beginning with [the setup](!#sine-proof-step-1-setup).`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Geometric Scene`,
      content:`The SVG shows the unit circle with two radii $OA$ and $OB$ meeting at the center $O$, with a perpendicular bisector $OM$.

Elements that appear across the steps:
• **Indigo chord** $AB$ — the base of the isosceles triangle.
• **Blue segment** $OM$ — the bisector, equal to $\\cos\\theta$ in right triangle $OMA$.
• **Half-chord labels** — $\\sin\\theta$ on segment $MA$.
• **Right-angle mark** at $M$ — the key to [applying Pythagoras](!#sine-proof-step-4-pythagoras).

Once the legs are labeled, the identity $\\sin^2\\theta + \\cos^2\\theta = 1$ follows from leg² + leg² = hypotenuse² with hypotenuse $1$.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Working with Derived Identities`,
      content:`Selecting $\\tan\\theta$, $\\csc\\theta$, $\\sec\\theta$, or $\\cot\\theta$ opens a different card layout. Instead of a triangle, it shows the **algebraic derivation** as a chain of equations.

Layout of the derived card:
• A short intro explains which manipulation (divide by $\\sin^2\\theta$ or $\\cos^2\\theta$) produces the identity.
• **Jump buttons** link directly to [the geometric proofs of the source identities](!#geometric-proof-sin2-cos2-1) $\\sin\\theta$ and $\\cos\\theta$.
• A multi-line derivation block shows each manipulation with a side note.
• Verification cards confirm both sides match numerically.

This split keeps the geometric idea isolated to the base identity and treats the other four as algebraic consequences.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Formula Table`,
      content:`A reference table beneath every scene lists all six Pythagorean identities at once:

• **Function** column — the active trig function.
• **Identity** column — the identity expressed as a square root.
• **Value** column — the numeric value at the current $\\theta$.
• **Source** column — labels each as [geometric](!#geometric-proof-sin2-cos2-1) ($\\sin\\theta$, $\\cos\\theta$) or **via sin, cos** for the [derived forms](!#derived-identities-tan-sec-csc-cot).

Click any row to make that function active. The current row gets a deep-blue left border and tinted background.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Verifying Identities Numerically`,
      content:`Every scene includes two metric cards that compute both sides of the active identity at the current $\\theta$.

Example for $\\sin\\theta$:
• Left card shows $\\sin\\theta$.
• Right card shows $\\sqrt{1 - \\cos^2\\theta}$.

The two numbers always match (within rounding to three decimals). Sweeping the slider while watching the cards is a fast empirical check that the identity holds for every $\\theta$ in the first quadrant. The formula table mirrors this across all six functions simultaneously.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Geometric Proof: sin²θ + cos²θ = 1`,
      content:`The base identity is proved directly from a right triangle inscribed in the unit circle.

In right triangle $OMA$:
• Hypotenuse $OA = 1$ (a radius of the unit circle).
• Leg $OM = \\cos\\theta$.
• Leg $MA = \\sin\\theta$.

Applying Pythagoras:
$$\\sin^2\\theta + \\cos^2\\theta = 1$$

Solving for $\\sin\\theta$ or $\\cos\\theta$ and taking the positive root gives the two geometric identities:
$$\\sin\\theta = \\sqrt{1 - \\cos^2\\theta}, \\quad \\cos\\theta = \\sqrt{1 - \\sin^2\\theta}$$

Each result is treated separately below, stage by stage: [the sine form](!#the-sine-pythagorean-identity) and [the cosine form](!#the-cosine-pythagorean-identity).

For full coverage and equivalent forms across all quadrants, see the **Pythagorean identities theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Derived Identities: tan, sec, csc, cot`,
      content:`The four remaining identities follow by dividing the base by $\\sin^2\\theta$ or $\\cos^2\\theta$.

Dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$:
$$\\tan^2\\theta + 1 = \\sec^2\\theta$$
This gives the [tangent form](!#the-tangent-pythagorean-identity) $\\tan\\theta = \\sqrt{\\sec^2\\theta - 1}$ and the [secant form](!#the-secant-pythagorean-identity) $\\sec\\theta = \\sqrt{1 + \\tan^2\\theta}$.

Dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\sin^2\\theta$:
$$1 + \\cot^2\\theta = \\csc^2\\theta$$
This gives the [cotangent form](!#the-cotangent-pythagorean-identity) $\\cot\\theta = \\sqrt{\\csc^2\\theta - 1}$ and the [cosecant form](!#the-cosecant-pythagorean-identity) $\\csc\\theta = \\sqrt{1 + \\cot^2\\theta}$.

For step-by-step derivations and the unsigned forms valid in all quadrants, see the **trigonometric identities page** and the **reciprocal identities page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Why Pythagorean Identities Matter`,
      content:`The three Pythagorean identities are the most-used identities in trigonometry:

• **Simplification** — convert expressions in $\\sin^2$ to $\\cos^2$ form and vice versa.
• **Integration** — $u$-substitution in integrals like $\\int \\sec^2\\theta \\, d\\theta = \\tan\\theta + C$ relies on $1 + \\tan^2\\theta = \\sec^2\\theta$.
• **Equation solving** — quadratic equations in $\\sin\\theta$ or $\\cos\\theta$ frequently emerge after substitution.
• **Proofs of other identities** — sum, difference, double-angle, and half-angle identities all use Pythagorean relations along the way.

Every one of these leans on a single line of algebra, [the base identity](!#sine-proof-step-4-pythagoras), or on one of the five forms rearranged from it.

For applications and worked examples, see the **trigonometric identities applications page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Double Angle Identities** — formulas for $\\sin(2\\theta)$, $\\cos(2\\theta)$, $\\tan(2\\theta)$ built on Pythagoras.
• **Half Angle Identities** — formulas for $\\sin(\\alpha/2)$ and friends, derived using $\\sin^2 + \\cos^2 = 1$.
• **Sum and Difference Identities** — additive companions to Pythagoras.
• **Unit Circle** — geometric setup for every identity in this tool.
• **Trigonometric Functions Graphs** — see how $\\sin$, $\\cos$, $\\tan$ and their reciprocals evolve as $\\theta$ varies.
• **Triangle Explorer** — interactive triangles with built-in Pythagoras verification.`,
      before:``,
      after:``,
      link:'',
    },

    obj12:{
      title:`The Sine Pythagorean Identity`,
      content:`The identity $\\sin\\theta = \\sqrt{1 - \\cos^2\\theta}$ is proved geometrically in the explorer, by reading the legs of a right triangle whose hypotenuse is a radius of the unit circle.`,
      before:``,
      after:`The proof runs through six stages: [setup](!#sine-proof-step-1-setup), [bisect](!#sine-proof-step-2-bisect), [identify the legs](!#sine-proof-step-3-identify-the-legs), [apply Pythagoras](!#sine-proof-step-4-pythagoras), [solve for the squared sine](!#sine-proof-step-5-solve-for-sin2), and [take the positive root](!#sine-proof-step-6-take-the-positive-root).

Everything else on the page rests on this one. [The cosine form](!#the-cosine-pythagorean-identity) is the same equation solved for the other leg, and all four [derived identities](!#derived-identities-tan-sec-csc-cot) begin by dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ through by one of its two terms.`,
      link:'',
    },
    obj13:{
      title:`The Cosine Pythagorean Identity`,
      content:`The identity $\\cos\\theta = \\sqrt{1 - \\sin^2\\theta}$ comes out of the same right triangle, solved for the other leg.`,
      before:``,
      after:`Its six stages: [setup](!#cosine-proof-step-1-setup), [bisect](!#cosine-proof-step-2-bisect), [identify the legs](!#cosine-proof-step-3-identify-the-legs), [apply Pythagoras](!#cosine-proof-step-4-pythagoras), [solve for the squared cosine](!#cosine-proof-step-5-solve-for-cos2), and [take the positive root](!#cosine-proof-step-6-take-the-positive-root).

Because $\\sin^2\\theta + \\cos^2\\theta = 1$ treats its two terms alike, this proof and [the sine proof](!#the-sine-pythagorean-identity) are the same argument until the fifth step, where one subtracts $\\cos^2\\theta$ and the other subtracts $\\sin^2\\theta$. Switching tabs between them leaves the picture unchanged and rewrites only the last two entries of the step log.`,
      link:'',
    },
    obj14:{
      title:`The Tangent Pythagorean Identity`,
      content:`Tangent needs no new geometry. Dividing the base identity by $\\cos^2\\theta$ converts it into a statement about tangent and secant.`,
      before:``,
      after:`$$\\frac{\\sin^2\\theta + \\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta} \\quad\\Longrightarrow\\quad \\tan^2\\theta + 1 = \\sec^2\\theta$$

Solving that for the squared tangent and taking the root gives the form the tool displays:
$$\\tan\\theta = \\sqrt{\\sec^2\\theta - 1}$$

The same three lines, stopped one step earlier and solved the other way, give [the secant form](!#the-secant-pythagorean-identity) — which is why both cards show the identical derivation down to their fourth line. The division is only legal where $\\cos\\theta \\neq 0$; inside the slider's first-quadrant range that never bites, but at $\\theta = 90°$ both tangent and secant blow up together.`,
      link:'',
    },
    obj15:{
      title:`The Cosecant Pythagorean Identity`,
      content:`Cosecant comes from the other division: dividing the base identity by $\\sin^2\\theta$ brings cotangent and cosecant into play.`,
      before:``,
      after:`$$\\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta} \\quad\\Longrightarrow\\quad 1 + \\cot^2\\theta = \\csc^2\\theta$$

Solving for the squared cosecant leaves the identity in the tool's square-root form:
$$\\csc\\theta = \\sqrt{1 + \\cot^2\\theta}$$

No root is ever taken of a negative number here: $\\cot^2\\theta$ cannot be negative, so this form is safe for every $\\theta$ where cotangent is defined. [The cotangent form](!#the-cotangent-pythagorean-identity) shares its first three lines, and the division that produced both is undefined only where $\\sin\\theta = 0$.`,
      link:'',
    },
    obj16:{
      title:`The Secant Pythagorean Identity`,
      content:`Secant is the second harvest of the divide-by-$\\cos^2\\theta$ derivation: the same relation $\\tan^2\\theta + 1 = \\sec^2\\theta$, solved for the other unknown.`,
      before:``,
      after:`$$\\sec^2\\theta = 1 + \\tan^2\\theta \\quad\\Longrightarrow\\quad \\sec\\theta = \\sqrt{1 + \\tan^2\\theta}$$

This is the form that makes trigonometric substitution work in calculus: any expression of the shape $\\sqrt{1 + x^2}$ becomes a single secant after the substitution $x = \\tan\\theta$. Its partner in the same derivation is [the tangent form](!#the-tangent-pythagorean-identity), and both descend from [the base identity](!#sine-proof-step-4-pythagoras) proved in the geometric scene.`,
      link:'',
    },
    obj17:{
      title:`The Cotangent Pythagorean Identity`,
      content:`Cotangent is the second harvest of the divide-by-$\\sin^2\\theta$ derivation, taken from $1 + \\cot^2\\theta = \\csc^2\\theta$.`,
      before:``,
      after:`$$\\cot^2\\theta = \\csc^2\\theta - 1 \\quad\\Longrightarrow\\quad \\cot\\theta = \\sqrt{\\csc^2\\theta - 1}$$

Unlike its partner [the cosecant form](!#the-cosecant-pythagorean-identity), this one subtracts inside the root, so it needs $\\csc^2\\theta \\geq 1$ — true for every angle, since $|\\sin\\theta| \\leq 1$. The pairing mirrors what happens on the cosine side of the family: [tangent](!#the-tangent-pythagorean-identity) subtracts inside its root for the same reason.`,
      link:'',
    },
    obj18:{
      title:`Sine Proof, Step 1: Setup`,
      content:`[The sine proof](!#the-sine-pythagorean-identity) opens with two radii $OA$ and $OB$ of length $1$ drawn from the center $O$ of the unit circle, joined by the chord $AB$.`,
      before:``,
      after:`Nothing has been claimed yet. The only fact on the table is the one that carries the whole argument: both radii are exactly $1$ long, so any right triangle built inside this figure inherits a hypotenuse of $1$.

The figure is isosceles by construction, which is what makes the next move — [dropping the perpendicular](!#sine-proof-step-2-bisect) — split it into two matching halves.`,
      link:'',
    },
    obj19:{
      title:`Sine Proof, Step 2: Bisect`,
      content:`Dropping $OM$ perpendicular to the chord $AB$ produces right triangle $OMA$, with the right angle at $M$.`,
      before:``,
      after:`Because triangle $OAB$ is isosceles, that perpendicular also bisects the angle at $O$: the two arcs marked at the center are equal, and each one is the $\\theta$ the slider controls. The scene draws them only above $22°$, so at very small angles the marks disappear while the geometry stays the same.

The small square at $M$ is the reason for this step. [Pythagoras](!#sine-proof-step-4-pythagoras) applies to right triangles and nothing else, so the proof cannot proceed until one exists.`,
      link:'',
    },
    obj20:{
      title:`Sine Proof, Step 3: Identify the Legs`,
      content:`In right triangle $OMA$ the hypotenuse is $OA = 1$ and the angle at $O$ is $\\theta$, which makes the two legs the basic ratios themselves.`,
      before:``,
      after:`$$MA = \\sin\\theta \\qquad OM = \\cos\\theta$$

With a hypotenuse of $1$, "opposite over hypotenuse" collapses to "opposite". That is why the unit circle is the natural home for these identities: the ratios stop being ratios and become plain lengths you can measure off the picture.

Both labels appear at once, because the same triangle carries both. [The cosine proof](!#cosine-proof-step-3-identify-the-legs) reads the very same figure — it simply keeps its eye on $OM$ instead of $MA$.`,
      link:'',
    },
    obj21:{
      title:`Sine Proof, Step 4: Pythagoras`,
      content:`Applying the Pythagorean theorem to triangle $OMA$ — leg squared plus leg squared equals hypotenuse squared — turns the picture into the base identity.`,
      before:``,
      after:`$$\\sin^2\\theta + \\cos^2\\theta = 1$$

This one line is the source of every result on the page. [The cosine identity](!#the-cosine-pythagorean-identity) is it, rearranged; the four [derived identities](!#derived-identities-tan-sec-csc-cot) are it, divided through.

Note what the theorem is being applied to: not an abstract triangle, but one whose hypotenuse was fixed at $1$ back in [the setup](!#sine-proof-step-1-setup). That is where the $1$ on the right-hand side comes from.`,
      link:'',
    },
    obj22:{
      title:`Sine Proof, Step 5: Solve for sin²θ`,
      content:`Subtracting $\\cos^2\\theta$ from both sides isolates the squared sine.`,
      before:``,
      after:`$$\\sin^2\\theta = 1 - \\cos^2\\theta$$

This is where the two geometric proofs part company. [The cosine proof](!#cosine-proof-step-5-solve-for-cos2) subtracts the other term at exactly this point; up to here the two are the same proof with the same picture, which is why switching tabs mid-animation changes nothing on screen.`,
      link:'',
    },
    obj23:{
      title:`Sine Proof, Step 6: Take the Positive Root`,
      content:`Taking the square root finishes the identity, and the first-quadrant restriction decides the sign.`,
      before:``,
      after:`$$\\sin\\theta = \\sqrt{1 - \\cos^2\\theta}$$

The slider's $10°$–$80°$ range keeps $\\theta$ in the first quadrant, where $\\sin\\theta > 0$, so the positive root is the correct one. Outside that range the squared statement from [the previous step](!#sine-proof-step-5-solve-for-sin2) still holds, but the sign in front of the root follows the quadrant.

At the tool's opening angle of $35°$ the two verification cards both read $0.574$ — the same number reached along two independent routes.`,
      link:'',
    },
    obj24:{
      title:`Cosine Proof, Step 1: Setup`,
      content:`[The cosine proof](!#the-cosine-pythagorean-identity) starts from precisely the figure [the sine proof](!#sine-proof-step-1-setup) starts from: two unit radii from $O$, closed off by the chord $AB$.`,
      before:``,
      after:`The construction is identical because the target is a rearrangement of the same equation. What differs is which leg the proof is chasing — here it is $OM$, the bisector, rather than the half-chord.

Because the two proofs share a figure, the tool renders the same scene under both tabs and changes only the wording in the step log.`,
      link:'',
    },
    obj25:{
      title:`Cosine Proof, Step 2: Bisect`,
      content:`The same perpendicular $OM$ is dropped onto $AB$, producing the same right triangle $OMA$ with its right angle at $M$.`,
      before:``,
      after:`The bisector is drawn in indigo and now carries extra weight: it is not just a construction line but the quantity the proof is about. Its length will turn out to be $\\cos\\theta$ exactly.

Everything said about the bisection in [the sine version of this step](!#sine-proof-step-2-bisect) applies unchanged — equal half-angles at $O$, two congruent right triangles, one right angle to work with.`,
      link:'',
    },
    obj26:{
      title:`Cosine Proof, Step 3: Identify the Legs`,
      content:`The hypotenuse is still $OA = 1$ and the angle at $O$ is still $\\theta$, so the legs read off the same way — but this time the interest is in the adjacent one.`,
      before:``,
      after:`$$OM = \\cos\\theta \\qquad MA = \\sin\\theta$$

The bisector $OM$ sits adjacent to the angle $\\theta$, so with a unit hypotenuse it **is** the cosine. Reading the same figure for the opposite leg is what [the sine proof](!#sine-proof-step-3-identify-the-legs) does at this step.`,
      link:'',
    },
    obj27:{
      title:`Cosine Proof, Step 4: Pythagoras`,
      content:`Pythagoras applied to triangle $OMA$ produces the base identity again — the two proofs reach the same equation from the same picture.`,
      before:``,
      after:`$$\\sin^2\\theta + \\cos^2\\theta = 1$$

There is genuinely only one theorem here, appearing twice under two tabs. What makes the identities different is the next step, not this one: [the sine proof](!#sine-proof-step-4-pythagoras) will isolate one term and this proof will isolate the other.`,
      link:'',
    },
    obj28:{
      title:`Cosine Proof, Step 5: Solve for cos²θ`,
      content:`Subtracting $\\sin^2\\theta$ from both sides isolates the squared cosine.`,
      before:``,
      after:`$$\\cos^2\\theta = 1 - \\sin^2\\theta$$

Compare with [the sine proof's fifth step](!#sine-proof-step-5-solve-for-sin2): identical algebra, opposite term removed. The symmetry of $\\sin^2\\theta + \\cos^2\\theta = 1$ is what makes both readings equally valid, and it is the reason the tool can present the two as separate proofs sharing one figure.`,
      link:'',
    },
    obj29:{
      title:`Cosine Proof, Step 6: Take the Positive Root`,
      content:`The square root closes the argument, with the first quadrant again fixing the sign.`,
      before:``,
      after:`$$\\cos\\theta = \\sqrt{1 - \\sin^2\\theta}$$

Cosine is positive throughout the slider's $10°$–$80°$ range, so the positive root holds there. In the second and third quadrants cosine turns negative and the root would need a minus sign in front — the equation for $\\cos^2\\theta$ from [the previous step](!#cosine-proof-step-5-solve-for-cos2) survives everywhere, but its square root does not.

At $35°$ both verification cards settle on $0.819$.`,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "Which Pythagorean identities does the explorer cover?",
      answer: "All six function forms: sin theta, cos theta, tan theta, csc theta, sec theta, and cot theta. Each is expressed as a square root using the appropriate Pythagorean relation, and each has its own tab with either a geometric proof or an algebraic derivation."
    },
    obj2: {
      question: "What are the three Pythagorean identities?",
      answer: "The base identity is sin squared theta plus cos squared theta equals 1. Dividing by cos squared theta gives tan squared theta plus 1 equals sec squared theta. Dividing by sin squared theta gives 1 plus cot squared theta equals csc squared theta."
    },
    obj3: {
      question: "How is the base identity proved geometrically?",
      answer: "Draw a right triangle inside the unit circle with the hypotenuse along a radius of length 1. The two legs equal sin theta and cos theta. Applying Pythagoras directly gives sin squared theta plus cos squared theta equals 1."
    },
    obj4: {
      question: "Why is the slider restricted to the first quadrant?",
      answer: "Restricting theta to between 10 and 80 degrees keeps every trig function positive. This lets the tool take square roots without worrying about sign choices. In other quadrants the same identities hold but the sign in front of the root depends on which quadrant theta lives in."
    },
    obj5: {
      question: "Can I verify an identity at a specific angle?",
      answer: "Yes. Move the slider to the angle you want, then read the two metric cards near the bottom. They show the values of both sides of the identity, computed independently. The formula table at the bottom does the same for all six functions at once."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Pythagorean Identities Explorer",
      "description": "Explore and verify all six Pythagorean trigonometric identities with animated geometric proofs, algebraic derivations, and live numeric checks.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/pythagorean-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six tabs covering sin, cos, tan, csc, sec, and cot Pythagorean forms",
        "Animated step-by-step geometric proof of sin squared plus cos squared equals 1",
        "Algebraic derivation cards for tan, csc, sec, cot with jump-to-source buttons",
        "Theta slider from 10 to 80 degrees with live updates",
        "Play, pause, step, reset, and speed controls for the animation",
        "Live verification cards comparing both sides of each identity",
        "Formula table summarizing all six identities, values, and proof sources",
        "URL query parameter sync so links preserve the active function"
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
          "name": "Pythagorean Identities",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/pythagorean-identities"
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


  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // scene + attached picture-reading panel, one frame, no link (own page).
  const stateUnits = {
    sinOverview: demoUnitFrame({ svg: pythagoreanDiagrams.sin.overview, caption: 'The complete sine proof, frozen',
      text: 'The finished right triangle OMA: hypotenuse 1, legs sin θ and cos θ, with the identity solved for the half-chord.' }),
    cosOverview: demoUnitFrame({ svg: pythagoreanDiagrams.cos.overview, caption: 'The complete cosine proof, frozen',
      text: 'The same triangle, read for the other leg — the bisector OM, whose length is cos θ.' }),
    tan: demoUnitFrame({ svg: pythagoreanDiagrams.tan, caption: 'tan θ, derived',
      text: 'Five algebraic lines: divide the base identity by cos²θ, recognise tan and sec, solve, take the root.' }),
    csc: demoUnitFrame({ svg: pythagoreanDiagrams.csc, caption: 'csc θ, derived',
      text: 'The divide-by-sin²θ chain, solved for the cosecant rather than the cotangent.' }),
    sec: demoUnitFrame({ svg: pythagoreanDiagrams.sec, caption: 'sec θ, derived',
      text: 'The same first three lines as the tangent card, finished the other way round.' }),
    cot: demoUnitFrame({ svg: pythagoreanDiagrams.cot, caption: 'cot θ, derived',
      text: 'Subtracting inside the root instead of adding — the cotangent counterpart of the tangent form.' }),
    sinStep1: demoUnitFrame({ svg: pythagoreanDiagrams.sin.steps[0], caption: 'Step 1: the unit setup',
      text: 'Two radii of length 1 from O, closed by the chord AB. No claim yet — only the fixed hypotenuse.' }),
    sinStep2: demoUnitFrame({ svg: pythagoreanDiagrams.sin.steps[1], caption: 'Step 2: bisect',
      text: 'OM lands perpendicular on AB, splitting the figure into two congruent right triangles.' }),
    sinStep3: demoUnitFrame({ svg: pythagoreanDiagrams.sin.steps[2], caption: 'Step 3: the legs named',
      text: 'A hypotenuse of 1 makes the legs the ratios themselves: MA = sin θ, OM = cos θ.' }),
    sinStep4: demoUnitFrame({ svg: pythagoreanDiagrams.sin.steps[3], caption: 'Step 4: Pythagoras',
      text: 'Leg squared plus leg squared equals 1 — the base identity, read straight off the triangle.' }),
    sinStep5: demoUnitFrame({ svg: pythagoreanDiagrams.sin.steps[4], caption: 'Step 5: solve for sin²θ',
      text: 'The banner carries the algebra; the picture is unchanged, because nothing new was constructed.' }),
    sinStep6: demoUnitFrame({ svg: pythagoreanDiagrams.sin.steps[5], caption: 'Step 6: the positive root',
      text: 'The finished identity, with its value at the frozen angle of 35°.' }),
    cosStep1: demoUnitFrame({ svg: pythagoreanDiagrams.cos.steps[0], caption: 'Step 1: same setup, other leg',
      text: 'Identical construction to the sine proof — the target, not the figure, is what differs.' }),
    cosStep2: demoUnitFrame({ svg: pythagoreanDiagrams.cos.steps[1], caption: 'Step 2: bisect',
      text: 'The indigo bisector is now the quantity of interest, not just a construction line.' }),
    cosStep3: demoUnitFrame({ svg: pythagoreanDiagrams.cos.steps[2], caption: 'Step 3: the adjacent leg',
      text: 'OM sits adjacent to θ, so against a unit hypotenuse it is exactly cos θ.' }),
    cosStep4: demoUnitFrame({ svg: pythagoreanDiagrams.cos.steps[3], caption: 'Step 4: Pythagoras',
      text: 'The same theorem on the same triangle yields the same equation as the sine proof.' }),
    cosStep5: demoUnitFrame({ svg: pythagoreanDiagrams.cos.steps[4], caption: 'Step 5: solve for cos²θ',
      text: 'The other term is subtracted this time — the single point where the two proofs diverge.' }),
    cosStep6: demoUnitFrame({ svg: pythagoreanDiagrams.cos.steps[5], caption: 'Step 6: the positive root',
      text: 'The cosine identity, checked at 35° where both sides read 0.819.' }),
  };

  const explanations = {
    sin: { steps: [
      `Two radii OA and OB of length 1 from center O of the unit circle, with chord AB between them. [Learn more about the setup](!#sine-proof-step-1-setup) · [The sine identity](!#the-sine-pythagorean-identity)`,
      `Drop OM perpendicular to AB. This forms right triangle OMA, with the right angle at M. [Learn more about the bisection](!#sine-proof-step-2-bisect) · [The sine identity](!#the-sine-pythagorean-identity)`,
      `In right triangle OMA: hypotenuse OA = 1, angle at O is θ. So leg MA = sin θ and leg OM = cos θ. [Learn more about the legs](!#sine-proof-step-3-identify-the-legs) · [The sine identity](!#the-sine-pythagorean-identity)`,
      `leg² + leg² = hypotenuse² gives sin²θ + cos²θ = 1. [Learn more about this step](!#sine-proof-step-4-pythagoras) · [The sine identity](!#the-sine-pythagorean-identity)`,
      `Subtract cos²θ from both sides: sin²θ = 1 − cos²θ. [Learn more about solving for sin²θ](!#sine-proof-step-5-solve-for-sin2) · [The sine identity](!#the-sine-pythagorean-identity)`,
      `For θ in the first quadrant, sin θ > 0, so: sin θ = √(1 − cos²θ). [Learn more about the positive root](!#sine-proof-step-6-take-the-positive-root) · [The sine identity](!#the-sine-pythagorean-identity)`,
    ] },
    cos: { steps: [
      `Two radii OA and OB of length 1 from center O of the unit circle, with chord AB between them. [Learn more about the setup](!#cosine-proof-step-1-setup) · [The cosine identity](!#the-cosine-pythagorean-identity)`,
      `Drop OM perpendicular to AB. This forms right triangle OMA, with the right angle at M. [Learn more about the bisection](!#cosine-proof-step-2-bisect) · [The cosine identity](!#the-cosine-pythagorean-identity)`,
      `In right triangle OMA: hypotenuse OA = 1, angle at O is θ. So leg OM = cos θ and leg MA = sin θ. [Learn more about the legs](!#cosine-proof-step-3-identify-the-legs) · [The cosine identity](!#the-cosine-pythagorean-identity)`,
      `leg² + leg² = hypotenuse² gives sin²θ + cos²θ = 1. [Learn more about this step](!#cosine-proof-step-4-pythagoras) · [The cosine identity](!#the-cosine-pythagorean-identity)`,
      `Subtract sin²θ from both sides: cos²θ = 1 − sin²θ. [Learn more about solving for cos²θ](!#cosine-proof-step-5-solve-for-cos2) · [The cosine identity](!#the-cosine-pythagorean-identity)`,
      `For θ in the first quadrant, cos θ > 0, so: cos θ = √(1 − sin²θ). [Learn more about the positive root](!#cosine-proof-step-6-take-the-positive-root) · [The cosine identity](!#the-cosine-pythagorean-identity)`,
    ] },
    tan: { content: `Divide the base identity by cos²θ to bring tan and sec into play, then solve for tan²θ and take the root. [Learn more about the tangent form](!#the-tangent-pythagorean-identity) · [All derived identities](!#derived-identities-tan-sec-csc-cot)` },
    csc: { content: `Divide the base identity by sin²θ, then solve the result 1 + cot²θ = csc²θ for the cosecant. [Learn more about the cosecant form](!#the-cosecant-pythagorean-identity) · [All derived identities](!#derived-identities-tan-sec-csc-cot)` },
    sec: { content: `The same divide-by-cos²θ derivation as tan — just solved for sec instead. [Learn more about the secant form](!#the-secant-pythagorean-identity) · [All derived identities](!#derived-identities-tan-sec-csc-cot)` },
    cot: { content: `The same divide-by-sin²θ derivation as csc — just solved for cot instead. [Learn more about the cotangent form](!#the-cotangent-pythagorean-identity) · [All derived identities](!#derived-identities-tan-sec-csc-cot)` },
  };




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
         stateUnits,
          seoData: {
        title: "Pythagorean Identities: Interactive Proofs | Learn Math Class",
        description: "Explore all six Pythagorean trig identities: sin, cos, tan, csc, sec, cot. Animated geometric proof, algebraic derivations, and live numeric verification.",
        hubDescription: "Pythagorean identities explorer covering all six trigonometric functions. The base identity sin²θ + cos²θ = 1 is proved geometrically inside the unit circle, then tan, csc, sec, and cot forms follow by dividing through and rearranging. Animated steps, algebraic derivation cards with jump-to-source buttons, and a live formula table verify every identity numerically as you sweep θ through the first quadrant.",
        category: "Identities",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/pythagorean-identities",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="42" r="22" fill="none" stroke="#B5D4F4" stroke-width="1.2"/><line x1="12" y1="42" x2="60" y2="42" stroke="#B5D4F4" stroke-width="0.8"/><line x1="36" y1="18" x2="36" y2="66" stroke="#B5D4F4" stroke-width="0.8"/><rect x="36" y="42" width="14.14" height="14.14" fill="#85B7EB" fill-opacity="0.4" stroke="#185FA5" stroke-width="1"/><rect x="50.14" y="25.15" width="16.85" height="16.85" fill="#97C459" fill-opacity="0.4" stroke="#3B6D11" stroke-width="1"/><line x1="36" y1="42" x2="50.14" y2="42" stroke="#185FA5" stroke-width="2"/><line x1="50.14" y1="42" x2="50.14" y2="25.15" stroke="#3B6D11" stroke-width="2"/><line x1="36" y1="42" x2="50.14" y2="25.15" stroke="#FAC775" stroke-width="1.8"/><circle cx="50.14" cy="25.15" r="2.8" fill="#FAC775" stroke="#854F0B" stroke-width="1.1"/><text x="41" y="31" font-family="Georgia,serif" font-size="7" fill="#FAC775" text-anchor="middle" font-style="italic">1</text><text x="40" y="76" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">sin&#178;&#952; + cos&#178;&#952; = 1</text></svg>`,
        name: "Pythagorean Identities Explorer"
      },

       }
    }
   }

export default function PythagoreanIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {


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
        id:'switching-between-functions',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'adjusting-the-angle',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'playing-through-a-geometric-proof',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'reading-the-geometric-scene',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'working-with-derived-identities',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'reading-the-formula-table',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'verifying-identities-numerically',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'geometric-proof-sin2-cos2-1',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'derived-identities-tan-sec-csc-cot',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'why-pythagorean-identities-matter',
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
        id:'the-sine-pythagorean-identity',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'u-sinOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['sinOverview'] }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'the-cosine-pythagorean-identity',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key={'u-cosOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['cosOverview'] }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'the-tangent-pythagorean-identity',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key={'u-tan'} dangerouslySetInnerHTML={{ __html: stateUnits['tan'] }} />,
          sectionsContent.obj14.after,
        ]
    },
    {
        id:'the-cosecant-pythagorean-identity',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
          <div key={'u-csc'} dangerouslySetInnerHTML={{ __html: stateUnits['csc'] }} />,
          sectionsContent.obj15.after,
        ]
    },
    {
        id:'the-secant-pythagorean-identity',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <div key={'u-sec'} dangerouslySetInnerHTML={{ __html: stateUnits['sec'] }} />,
          sectionsContent.obj16.after,
        ]
    },
    {
        id:'the-cotangent-pythagorean-identity',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
          <div key={'u-cot'} dangerouslySetInnerHTML={{ __html: stateUnits['cot'] }} />,
          sectionsContent.obj17.after,
        ]
    },
    {
        id:'sine-proof-step-1-setup',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
          <div key={'u-sinStep1'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep1'] }} />,
          sectionsContent.obj18.after,
        ]
    },
    {
        id:'sine-proof-step-2-bisect',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
          <div key={'u-sinStep2'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep2'] }} />,
          sectionsContent.obj19.after,
        ]
    },
    {
        id:'sine-proof-step-3-identify-the-legs',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
          <div key={'u-sinStep3'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep3'] }} />,
          sectionsContent.obj20.after,
        ]
    },
    {
        id:'sine-proof-step-4-pythagoras',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
          <div key={'u-sinStep4'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep4'] }} />,
          sectionsContent.obj21.after,
        ]
    },
    {
        id:'sine-proof-step-5-solve-for-sin2',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
          <div key={'u-sinStep5'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep5'] }} />,
          sectionsContent.obj22.after,
        ]
    },
    {
        id:'sine-proof-step-6-take-the-positive-root',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
          <div key={'u-sinStep6'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep6'] }} />,
          sectionsContent.obj23.after,
        ]
    },
    {
        id:'cosine-proof-step-1-setup',
        title:sectionsContent.obj24.title,
        link:sectionsContent.obj24.link,
        content:[
          sectionsContent.obj24.content,
          <div key={'u-cosStep1'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep1'] }} />,
          sectionsContent.obj24.after,
        ]
    },
    {
        id:'cosine-proof-step-2-bisect',
        title:sectionsContent.obj25.title,
        link:sectionsContent.obj25.link,
        content:[
          sectionsContent.obj25.content,
          <div key={'u-cosStep2'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep2'] }} />,
          sectionsContent.obj25.after,
        ]
    },
    {
        id:'cosine-proof-step-3-identify-the-legs',
        title:sectionsContent.obj26.title,
        link:sectionsContent.obj26.link,
        content:[
          sectionsContent.obj26.content,
          <div key={'u-cosStep3'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep3'] }} />,
          sectionsContent.obj26.after,
        ]
    },
    {
        id:'cosine-proof-step-4-pythagoras',
        title:sectionsContent.obj27.title,
        link:sectionsContent.obj27.link,
        content:[
          sectionsContent.obj27.content,
          <div key={'u-cosStep4'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep4'] }} />,
          sectionsContent.obj27.after,
        ]
    },
    {
        id:'cosine-proof-step-5-solve-for-cos2',
        title:sectionsContent.obj28.title,
        link:sectionsContent.obj28.link,
        content:[
          sectionsContent.obj28.content,
          <div key={'u-cosStep5'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep5'] }} />,
          sectionsContent.obj28.after,
        ]
    },
    {
        id:'cosine-proof-step-6-take-the-positive-root',
        title:sectionsContent.obj29.title,
        link:sectionsContent.obj29.link,
        content:[
          sectionsContent.obj29.content,
          <div key={'u-cosStep6'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep6'] }} />,
          sectionsContent.obj29.after,
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
   <h1 className='title' style={{marginTop:'20px',marginBottom:'0px'}}>Pythagorean Trigonometric Identities</h1>
   <br/>
   <div style={{ display: 'grid', gridTemplateColumns: '100px minmax(0, 1fr)', gap: 8,alignItems: 'start' }}>
     <SiblingsNavStandalone
     // bg="#fafaf7"
     // color="#2c5d99"
     // activeColor="#143a66"
     // activeBg="#dde9f7"

     bg="#ffffff"
     color="#64748b"
     activeColor="#4F46E5"
     activeBg="#eef2ff"
     />
     <PythagoreanExplorer explanations={explanations}/>
   </div>

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