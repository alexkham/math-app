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

Restricting to the first quadrant keeps every trig function positive, which lets the tool take square roots without sign ambiguity.`,
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

Each step adds one element (radii, triangle fill, bisector, half-angles, leg labels $\\sin\\theta$ and $\\cos\\theta$, final metrics). The right panel logs each step with reasoning.`,
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
• **Right-angle mark** at $M$ — the key to applying Pythagoras.

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
• **Jump buttons** link directly to the geometric proofs of the source identities $\\sin\\theta$ and $\\cos\\theta$.
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
• **Source** column — labels each as **geometric** ($\\sin\\theta$, $\\cos\\theta$) or **via sin, cos** for derived ones.

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
This gives $\\tan\\theta = \\sqrt{\\sec^2\\theta - 1}$ and $\\sec\\theta = \\sqrt{1 + \\tan^2\\theta}$.

Dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\sin^2\\theta$:
$$1 + \\cot^2\\theta = \\csc^2\\theta$$
This gives $\\cot\\theta = \\sqrt{\\csc^2\\theta - 1}$ and $\\csc\\theta = \\sqrt{1 + \\cot^2\\theta}$.

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




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Pythagorean Identities: Interactive Proofs | Learn Math Class",
        description: "Explore all six Pythagorean trig identities: sin, cos, tan, csc, sec, cot. Animated geometric proof, algebraic derivations, and live numeric verification.",
        hubDescription: "Pythagorean identities explorer covering all six trigonometric functions. The base identity sin²θ + cos²θ = 1 is proved geometrically inside the unit circle, then tan, csc, sec, and cot forms follow by dividing through and rearranging. Animated steps, algebraic derivation cards with jump-to-source buttons, and a live formula table verify every identity numerically as you sweep θ through the first quadrant.",
        category: "Identities",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/pythagorean-identities",
        name: "Pythagorean Identities Explorer"
      },

       }
    }
   }

export default function PythagoreanIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
     <PythagoreanExplorer/>
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