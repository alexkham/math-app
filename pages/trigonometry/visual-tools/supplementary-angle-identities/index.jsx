// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import SupplementaryAngleExplorer from '../../../../app/components/trigonometry/identities/supplementary-angle/SupplementaryAngleExplorer'


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
//         url: "/trigonometry/visual-tools/supplementary-angle-identities",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Supplementary Angle Trigonometric Identities</h1>
//    <br/>
//    <div style={{transform:'scale(0.9)'}}>
//    <SupplementaryAngleExplorer/>
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
import SupplementaryAngleExplorer from '../../../../app/components/trigonometry/identities/supplementary-angle/SupplementaryAngleExplorer'
import supplementaryAngleDiagrams from '../../../../app/components/trigonometry/identities/supplementary-angle/supplementaryAngleDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'supplementary angle identities',
    'supplementary angle trig identities',
    'pi minus theta identities',
    'sin pi minus theta',
    'cos pi minus theta',
    'tan pi minus theta',
    'supplementary angle visualizer',
    'supplementary angle calculator',
    'trig identities visualizer',
    'reflection identities trigonometry',
    'second quadrant trig identities',
    'interactive trig identities',
    'supplementary angles trigonometry',
    'trig identity proof visualizer',
    'free trig identity tool'
  ]

  const faqQuestions = {
    obj1: {
      question: "What are supplementary angle identities?",
      answer: "Supplementary angle identities describe how each of the six trig functions behaves when its input changes from theta to pi minus theta. The angles theta and pi minus theta sum to 180 degrees, so they sit on opposite sides of the y-axis on the unit circle. Sin and csc stay unchanged, while cos, tan, sec, and cot all flip sign."
    },
    obj2: {
      question: "Why does sin stay the same but cos flip sign at pi minus theta?",
      answer: "On the unit circle, pi minus theta is the reflection of theta across the y-axis. Reflection across the vertical axis preserves the y-coordinate (which gives sin) and negates the x-coordinate (which gives cos). So sin of pi minus theta equals sin theta, and cos of pi minus theta equals minus cos theta."
    },
    obj3: {
      question: "How does the tool derive identities for tan, sec, csc, and cot?",
      answer: "Those four are not derived from geometry directly. Each one is built from sin and cos by definition. The tool shows a three-step derivation panel: line one expands the function into sin and cos, line two substitutes the supplementary identities for sin and cos, and line three simplifies to the final form."
    },
    obj4: {
      question: "When are supplementary angle identities useful?",
      answer: "They show up in second-quadrant evaluation, integral substitutions, simplification of complex expressions, and proofs where an angle larger than 90 degrees must be rewritten in terms of an acute angle. They also explain the sign pattern of trig functions across the four quadrants."
    },
    obj5: {
      question: "What is the difference between supplementary and complementary angle identities?",
      answer: "Supplementary angles sum to 180 degrees and correspond to reflection across the y-axis. Complementary angles sum to 90 degrees and correspond to reflection across the line y equals x. Under supplementary, sin stays sin and cos flips. Under complementary, sin and cos swap roles entirely."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Supplementary Angle Identities Visualizer",
      "description": "Interactive visualizer for the six supplementary angle trig identities at pi minus theta, with reflection geometry for sin and cos and step-by-step derivations for tan, csc, sec, and cot.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/supplementary-angle-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six-tab strip switching between sin, cos, tan, csc, sec, and cot evaluated at pi minus theta",
        "Geometric reflection view across the y-axis for sin and cos with live unit-circle geometry",
        "Three-step algebraic derivation cards for tan, csc, sec, and cot showing definition, substitution, and simplification",
        "Theta slider from 15 to 75 degrees with synchronized updates across all panels",
        "Side-by-side numerical verification cards proving both sides of each identity match at any angle",
        "Formula comparison table listing all six identities with sign behavior, current value, and derivation source",
        "Source-jump buttons that trace each derived identity back to its parent geometric reflection"
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
          "name": "Supplementary Angle Identities",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/supplementary-angle-identities"
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

  const sectionsContent = {

    obj1: {
      title: `Getting Started With the Explorer`,
      content: `Use the tabs at the top to switch between the six trig functions evaluated at $\\pi - \\theta$. Each tab loads either a **geometric reflection view** (for sin and cos) or a **derivation card** (for tan, csc, sec, and cot). The $\\theta$ slider below the visualization controls the angle from $15^\\circ$ to $75^\\circ$, and every number, formula, and visual updates in real time as you drag.

The **formula comparison table** at the bottom stays visible across all tabs. It shows every identity, its sign behavior, and the current numerical value side by side, so the relationships between the six functions are always in view.

Your current tab is preserved in the URL through a $supFn$ query parameter. Refresh the page or share the link and the same function loads back up.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Switching Between Geometric and Derived Views`,
      content: `The six identities split into two groups based on how they are proved:

**sin and cos** open the **geometric reflection view**. A unit-circle scene shows $\\theta$ and its supplementary counterpart $\\pi - \\theta$ as mirror images across the y-axis, with the relevant coordinate highlighted to make the sign behavior visible. Both tabs run [the same six-stage reflection proof](!#reflection-proof-step-1-setup).

**tan, csc, sec, and cot** open a **derivation card**. The identity bar at the top states the result, a three-step derivation expands it from the definition, and metric cards verify it numerically at the current $\\theta$.

The tabs themselves carry the function name in italic and the $(\\pi - \\theta)$ argument in upright type. The active tab fills with deep blue; inactive tabs sit in the neutral tab-strip background. Click any tab to switch instantly.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Identity Bar and Derivation Steps`,
      content: `Each derivation card opens with the **identity bar**: a single coloured equation summarizing the result. The argument $\\pi - \\theta$ is rendered in red. The source ratio on the right of the equals sign is coloured to match its parent: **deep blue** for sin-derived identities, **amber** for cos-derived ones.

Below the bar, the **derivation panel** lays out the proof in three rows:

Row 1 expands the function into its definition (for example, $\\tan(\\pi - \\theta) = \\sin(\\pi - \\theta) / \\cos(\\pi - \\theta)$).

Row 2 substitutes the two root supplementary identities: sin stays the same, cos flips sign.

Row 3 simplifies to the final form.

A small note in faint gray on the right of each row spells out which rule was applied at that step. Read top to bottom to follow the algebra; the layout matches a textbook proof.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Tracing Identities Back to Their Source`,
      content: `The four derived identities — tan, csc, sec, and cot — each carry one or two **See [source] proof** buttons under the introductory text. Clicking one jumps the active tab directly to that parent geometric identity:

[tan](!#the-tangent-supplementary-identity) and [cot](!#the-cotangent-supplementary-identity) pull from both [sin](!#the-sine-supplementary-identity) and [cos](!#the-cosine-supplementary-identity)

[csc](!#the-cosecant-supplementary-identity) pulls from sin alone

[sec](!#the-secant-supplementary-identity) pulls from cos alone

When a source button is clicked, the reflection scene reloads with the new function highlighted, and the URL updates so back-button navigation works as expected. Use these buttons to walk a full algebraic chain end-to-end — start at the result, follow the citations back to the unit-circle reflection, then click the next tab to come back. The whole tour takes about a minute and makes the dependency structure of the six identities concrete.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Using the Formula Comparison Table`,
      content: `The bottom **formula table** is a clickable directory of all six supplementary identities. Each row shows five fields:

**Function** — the function name with its $(\\pi - \\theta)$ argument

**Identity** — the simplified right-hand side of the equation

**Sign** — a **flips** or **unchanged** badge (red for flips, blue for unchanged)

**Value** — the numerical value at the current $\\theta$, in tabular numbers so columns align across rows

**Source** — either **geometric** for sin and cos, or **via sin**, **via cos**, or **via sin, cos** for the four derived identities

Click any row to jump to that function. The active row marks itself with a deep-blue left border and a tinted background, so the current tab is always identifiable at a glance, even while scrolling.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Verifying Identities Numerically`,
      content: `Drag the **$\\theta$ slider** to confirm each identity holds across the $15^\\circ$ to $75^\\circ$ range. In every derivation card, two **metric cards** display the left-hand side and right-hand side of the identity computed independently at the current $\\theta$. The two values should match to three decimal places at every slider position.

This is especially useful when sign behavior feels counterintuitive. For example, at $\\theta = 60^\\circ$:

$$\\cos(\\pi - 60^\\circ) = \\cos(120^\\circ) = -0.500$$

$$-\\cos(60^\\circ) = -0.500$$

Both panels display $-0.500$, confirming the identity. Try sweeping the slider across the full range and watch the two values move together while keeping their equality. The bottom table values update in lock-step, so any discrepancy would be immediately visible.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Are Supplementary Angle Identities?`,
      content: `**Supplementary angles** are two angles whose measures sum to $\\pi$ radians ($180^\\circ$). For any angle $\\theta$, its supplementary partner is $\\pi - \\theta$. The supplementary identities express how each of the six trig functions behaves when its input changes from $\\theta$ to $\\pi - \\theta$.

Two functions stay unchanged: **sin** and **csc**.

Four functions flip sign: **cos**, **tan**, **sec**, and **cot**.

The split is not arbitrary. It mirrors a reflection of the unit circle point across the vertical axis: the y-coordinate (which gives sin) is preserved; the x-coordinate (which gives cos) negates. Every other identity inherits its behavior from [this single geometric fact](!#reflection-proof-step-6-compare-coordinates).

For broader context, see the **trigonometric identities reference**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why Reflection Across the y-Axis?`,
      content: `On the **unit circle**, an angle $\\theta$ corresponds to a point $P = (\\cos\\theta, \\sin\\theta)$. The supplementary angle $\\pi - \\theta$ corresponds to a second point $P'$ that sits at the **reflection of $P$ across the y-axis**.

Reflection across the vertical axis negates the x-coordinate but leaves the y-coordinate alone. Since $\\sin\\theta = y$ and $\\cos\\theta = x$:

$$\\sin(\\pi - \\theta) = \\sin\\theta$$

$$\\cos(\\pi - \\theta) = -\\cos\\theta$$

Every other identity then follows by algebra. [Tan](!#the-tangent-supplementary-identity), [csc](!#the-cosecant-supplementary-identity), [sec](!#the-secant-supplementary-identity), and [cot](!#the-cotangent-supplementary-identity) are built from sin and cos by definition, so the sign behavior of those two building blocks fully determines all four. The tool's geometric view shows [this reflection](!#reflection-proof-step-4-reflect) directly; the derivation cards show the algebra.

For more on the underlying geometry, see the **unit circle visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The Six Identities at a Glance`,
      content: `All six supplementary angle identities in one place:

$$\\sin(\\pi - \\theta) = \\sin\\theta$$

$$\\cos(\\pi - \\theta) = -\\cos\\theta$$

$$\\tan(\\pi - \\theta) = -\\tan\\theta$$

$$\\csc(\\pi - \\theta) = \\csc\\theta$$

$$\\sec(\\pi - \\theta) = -\\sec\\theta$$

$$\\cot(\\pi - \\theta) = -\\cot\\theta$$

Notice the pairing: each function and its reciprocal share sign behavior. [Sin](!#the-sine-supplementary-identity) and [csc](!#the-cosecant-supplementary-identity) are both unchanged. [Cos](!#the-cosine-supplementary-identity) and [sec](!#the-secant-supplementary-identity) both flip. [Tan](!#the-tangent-supplementary-identity) and [cot](!#the-cotangent-supplementary-identity) both flip. This makes sense algebraically — taking a reciprocal cannot introduce or remove a sign — and reduces memorization to three rules instead of six.

For a comprehensive reference covering all related identity families, see the **trigonometric identities** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Supplementary vs Complementary Identities`,
      content: `Supplementary and complementary identities are easy to confuse but produce different results.

**Supplementary angles** sum to $\\pi$ ($180^\\circ$): the partner angle is $\\pi - \\theta$. Geometrically, this is reflection across the **y-axis**, which preserves sin and flips cos.

**Complementary angles** sum to $\\pi/2$ ($90^\\circ$): the partner angle is $\\pi/2 - \\theta$. Geometrically, this is reflection across the line $y = x$, which **swaps** sin and cos entirely.

So for $\\sin$: the supplementary identity gives $\\sin\\theta$, but the complementary identity gives $\\cos\\theta$. For $\\cos$: supplementary gives $-\\cos\\theta$, while complementary gives $\\sin\\theta$. The two sets are not interchangeable.

For the partner family, see the **complementary angle identities visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Concepts and Tools`,
      content: `**Related Concepts:**

**Complementary Angle Identities** — Partner identity family covering the case $\\pi/2 - \\theta$.

**Opposite Angle Identities** — Behavior of trig functions at $-\\theta$ (reflection across the x-axis).

**Double Angle Identities** — Identities for $2\\theta$ that build on the supplementary and complementary results.

**Half Angle Identities** — Identities for $\\theta/2$, completing the elementary identity family.

**Unit Circle Visualizer** — The geometric foundation behind every reflection identity.

**Trigonometric Function Graphs** — Plots that show the symmetries underlying these identities visually.

**Trig Identities Reference** — Comprehensive collection of all major identity families with proofs.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `The Sine Supplementary Identity`,
      content: `The identity $\\sin(\\pi - \\theta) = \\sin\\theta$ is the one that survives the reflection untouched: mirroring across the y-axis moves the point but not its height.`,
      before: ``,
      after: `The proof is the six-stage reflection argument, shared with the cosine tab: [setup](!#reflection-proof-step-1-setup), [introduce the mirror](!#reflection-proof-step-2-introduce-the-mirror), [measure the gap](!#reflection-proof-step-3-measure-the-gap), [reflect](!#reflection-proof-step-4-reflect), [read the new angle](!#reflection-proof-step-5-read-the-new-angle), [compare coordinates](!#reflection-proof-step-6-compare-coordinates).

Because sine is the y-coordinate and the mirror is vertical, nothing about the height changes — which is why this identity carries no minus sign. [The cosecant identity](!#the-cosecant-supplementary-identity) inherits that directly, being sine's reciprocal. At $\\theta = 35°$ both verification cards read $0.574$.`,
      link: '',
    },
    obj13: {
      title: `The Cosine Supplementary Identity`,
      content: `The identity $\\cos(\\pi - \\theta) = -\\cos\\theta$ comes from the same reflection read along the horizontal: mirroring across the y-axis negates every x-coordinate.`,
      before: ``,
      after: `It rests on the same six stages as [the sine identity](!#the-sine-supplementary-identity) — the tool runs one scene for both tabs and swaps only the identity bar and the two metric cards.

In the frozen picture the two horizontal legs are drawn in different colours for exactly this reason: the deep-blue leg runs right from the origin, the teal one runs left by the same distance. Same length, opposite direction, hence the minus sign. [Secant](!#the-secant-supplementary-identity), [tangent](!#the-tangent-supplementary-identity) and [cotangent](!#the-cotangent-supplementary-identity) all take their sign flip from here. At $\\theta = 35°$ both cards read $-0.819$.`,
      link: '',
    },
    obj14: {
      title: `The Tangent Supplementary Identity`,
      content: `Tangent divides a quantity that survives the reflection by one that flips, so the quotient flips.`,
      before: ``,
      after: `$$\\tan(\\pi - \\theta) = \\frac{\\sin(\\pi - \\theta)}{\\cos(\\pi - \\theta)} = \\frac{\\sin\\theta}{-\\cos\\theta} = -\\tan\\theta$$

Both ingredients are proved geometrically — [sine](!#the-sine-supplementary-identity) unchanged, [cosine](!#the-cosine-supplementary-identity) negated — and the card's two jump buttons lead to each. [Cotangent](!#the-cotangent-supplementary-identity) is the same statement upside down. At $\\theta = 35°$ the identity reads $-0.700$ on both sides.`,
      link: '',
    },
    obj15: {
      title: `The Cosecant Supplementary Identity`,
      content: `Cosecant is the reciprocal of sine, and since sine is unchanged at $\\pi - \\theta$, cosecant is unchanged too.`,
      before: ``,
      after: `$$\\csc(\\pi - \\theta) = \\frac{1}{\\sin(\\pi - \\theta)} = \\frac{1}{\\sin\\theta} = \\csc\\theta$$

Together with [sine](!#the-sine-supplementary-identity) this is one of only two identities on the page with no sign change; the other four all flip. Taking a reciprocal can never introduce or remove a minus sign, which is why the six identities reduce to three rules. At $\\theta = 35°$ both sides read $1.743$.`,
      link: '',
    },
    obj16: {
      title: `The Secant Supplementary Identity`,
      content: `Secant inverts cosine, so it inherits cosine's sign flip exactly.`,
      before: ``,
      after: `$$\\sec(\\pi - \\theta) = \\frac{1}{\\cos(\\pi - \\theta)} = \\frac{1}{-\\cos\\theta} = -\\sec\\theta$$

Its single source is [the cosine identity](!#the-cosine-supplementary-identity), which is why this card shows only one jump button where [tangent](!#the-tangent-supplementary-identity) shows two. At $\\theta = 35°$ both sides read $-1.221$.`,
      link: '',
    },
    obj17: {
      title: `The Cotangent Supplementary Identity`,
      content: `Cotangent is cosine over sine — the flipped quantity over the unchanged one — so it flips as well.`,
      before: ``,
      after: `$$\\cot(\\pi - \\theta) = \\frac{\\cos(\\pi - \\theta)}{\\sin(\\pi - \\theta)} = \\frac{-\\cos\\theta}{\\sin\\theta} = -\\cot\\theta$$

Read as the reciprocal of [tangent](!#the-tangent-supplementary-identity) the answer is the same, as it must be. Either route traces back to the same two geometric facts: [sine unchanged](!#the-sine-supplementary-identity), [cosine negated](!#the-cosine-supplementary-identity). At $\\theta = 35°$ both sides read $-1.428$.`,
      link: '',
    },
    obj18: {
      title: `Reflection Proof, Step 1: Setup`,
      content: `The proof opens with a single point $P$ on the unit circle at angle $\\theta$ from the x-axis, with both legs of its right triangle drawn: the horizontal leg is $\\cos\\theta$, the vertical leg is $\\sin\\theta$, and the hypotenuse $OP$ has length $1$.`,
      before: ``,
      after: `The two legs are coloured differently throughout the tool — deep blue for the horizontal, brown for the vertical — because the whole argument turns on the two behaving differently under the mirror.

This one scene serves both geometric tabs. [The sine identity](!#the-sine-supplementary-identity) and [the cosine identity](!#the-cosine-supplementary-identity) are two readings of it, not two proofs.`,
      link: '',
    },
    obj19: {
      title: `Reflection Proof, Step 2: Introduce the Mirror`,
      content: `The y-axis is drawn in as the mirror line, marked with the arc showing that its angle from the x-axis is exactly $90°$.`,
      before: ``,
      after: `Naming the mirror's own angle matters, because the next two steps measure everything relative to it. The choice of the y-axis is what makes this the **supplementary** family — reflecting across the line $y = x$ instead produces [the complementary identities](!#supplementary-vs-complementary-identities), and reflecting across the x-axis produces the negative-angle ones.`,
      link: '',
    },
    obj20: {
      title: `Reflection Proof, Step 3: Measure the Gap to the Mirror`,
      content: `The amber arc measures the angular distance from $OP$ up to the mirror: since $OP$ sits at $\\theta$ and the mirror sits at $90°$, that gap is $90° - \\theta$.`,
      before: ``,
      after: `At the frozen angle of $35°$ the gap is $55°$. This quantity is the hinge of the argument — it is the one thing a reflection is guaranteed to preserve.

Note that the gap is measured as an angle, not a distance. That is what lets the proof work with any $\\theta$ the slider reaches rather than one particular triangle.`,
      link: '',
    },
    obj21: {
      title: `Reflection Proof, Step 4: Reflect Across the Mirror`,
      content: `Reflecting $P$ across the y-axis produces $P'$, and the second amber arc shows the reflected gap: the same $90° - \\theta$, now on the far side of the mirror.`,
      before: ``,
      after: `That equality is the definition of a reflection — it preserves distances and angles to the mirror line — and the tool flags it with a callout at this step.

The reflected triangle appears in its own colours: teal for the horizontal leg, violet for the vertical one. Comparing them with the originals is what [the final step](!#reflection-proof-step-6-compare-coordinates) does.`,
      link: '',
    },
    obj22: {
      title: `Reflection Proof, Step 5: Read the New Angle`,
      content: `Adding the mirror's own $90°$ to the reflected gap of $90° - \\theta$ gives the angle of $OP'$ measured from the positive x-axis.`,
      before: ``,
      after: `$$90° + (90° - \\theta) = 180° - \\theta$$

The green arc traces that total. At $\\theta = 35°$ it reads $145°$. In radians this is $\\pi - \\theta$ — so $P'$ is not merely some mirrored point, it is the terminal point of the supplementary angle. Everything before this step was construction; this is where the construction acquires a name.`,
      link: '',
    },
    obj23: {
      title: `Reflection Proof, Step 6: Compare Coordinates`,
      content: `The last step names the same point twice and equates the two descriptions.`,
      before: ``,
      after: `From the reflection, $P' = (-\\cos\\theta,\\; \\sin\\theta)$. From [the previous step](!#reflection-proof-step-5-read-the-new-angle), $P'$ is the terminal point of $\\pi - \\theta$, so $P' = (\\cos(\\pi - \\theta),\\; \\sin(\\pi - \\theta))$. Matching coordinates:

$$\\cos(\\pi - \\theta) = -\\cos\\theta \\qquad \\sin(\\pi - \\theta) = \\sin\\theta$$

Both geometric identities fall out of this single comparison, which is why the tool runs one animation for two tabs. The [four derived identities](!#the-tangent-supplementary-identity) are algebra on top of these two lines.`,
      link: '',
    },

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // scene + attached picture-reading panel, one frame, no link (own page).
  const stateUnits = {
    sinOverview: demoUnitFrame({ svg: supplementaryAngleDiagrams.sinOverview, caption: 'The reflection proof read for sine, frozen',
      text: 'P and P′ sit at the same height. The brown and violet legs are equal and both point up — no sign to lose.' }),
    cosOverview: demoUnitFrame({ svg: supplementaryAngleDiagrams.cosOverview, caption: 'The same scene read for cosine, frozen',
      text: 'The blue leg runs right, the teal one runs left by the same amount — equal length, opposite direction.' }),
    tan: demoUnitFrame({ svg: supplementaryAngleDiagrams.tan, caption: 'tan(π − θ), derived',
      text: 'Unchanged numerator over flipped denominator, so the quotient flips.' }),
    csc: demoUnitFrame({ svg: supplementaryAngleDiagrams.csc, caption: 'csc(π − θ), derived',
      text: 'Sine passes through the reflection untouched, and its reciprocal does the same.' }),
    sec: demoUnitFrame({ svg: supplementaryAngleDiagrams.sec, caption: 'sec(π − θ), derived',
      text: 'The minus sign comes straight out of the denominator, inherited from cosine.' }),
    cot: demoUnitFrame({ svg: supplementaryAngleDiagrams.cot, caption: 'cot(π − θ), derived',
      text: 'Flipped numerator over unchanged denominator — the mirror image of the tangent card.' }),
    step1: demoUnitFrame({ svg: supplementaryAngleDiagrams.steps[0], caption: 'Step 1: the unit triangle at θ',
      text: 'Horizontal leg cos θ in blue, vertical leg sin θ in brown, hypotenuse fixed at 1.' }),
    step2: demoUnitFrame({ svg: supplementaryAngleDiagrams.steps[1], caption: 'Step 2: the y-axis as mirror',
      text: 'The mirror gets its own angle marked: 90° from the x-axis.' }),
    step3: demoUnitFrame({ svg: supplementaryAngleDiagrams.steps[2], caption: 'Step 3: the gap to the mirror',
      text: 'The amber arc measures 90° − θ, which at 35° is 55° — the quantity reflection must preserve.' }),
    step4: demoUnitFrame({ svg: supplementaryAngleDiagrams.steps[3], caption: 'Step 4: reflect',
      text: 'The second amber arc matches the first, and the mirrored triangle appears in teal and violet.' }),
    step5: demoUnitFrame({ svg: supplementaryAngleDiagrams.steps[4], caption: 'Step 5: the new angle',
      text: 'The green arc totals 90° + 55° = 145°, which is 180° − θ: the supplementary angle itself.' }),
    step6: demoUnitFrame({ svg: supplementaryAngleDiagrams.steps[5], caption: 'Step 6: compare coordinates',
      text: 'One point named twice — once by reflection, once as the terminal point of π − θ.' }),
  };

  const explanations = {
    sin: { steps: [
      `Place point P on the unit circle at angle θ from the x-axis. Drop perpendiculars: horizontal leg = cos θ, vertical leg = sin θ. [Learn more about the setup](!#reflection-proof-step-1-setup) · [The sine identity](!#the-sine-supplementary-identity)`,
      `Draw the y-axis as the mirror line. Its angle from the x-axis is 90°. [Learn more about the mirror](!#reflection-proof-step-2-introduce-the-mirror) · [The sine identity](!#the-sine-supplementary-identity)`,
      `The angle from the x-axis up to OP is θ. The angle from OP up to the y-axis is (90° − θ). This is how far P is from the mirror. [Learn more about the gap](!#reflection-proof-step-3-measure-the-gap) · [The sine identity](!#the-sine-supplementary-identity)`,
      `Reflect P across the y-axis to get P′. Reflections preserve angles to the mirror line — so the angle from the mirror to P′ is also (90° − θ), on the other side. [Learn more about the reflection](!#reflection-proof-step-4-reflect) · [The sine identity](!#the-sine-supplementary-identity)`,
      `Angle from x-axis to OP′ = 90° (mirror) + (90° − θ) (gap on the other side) = 180° − θ. So P′ sits at angle (π − θ). [Learn more about the new angle](!#reflection-proof-step-5-read-the-new-angle) · [The sine identity](!#the-sine-supplementary-identity)`,
      `P = (cos θ, sin θ). Reflection across the y-axis flips the x-coordinate, so P′ = (−cos θ, sin θ). Since P′ is also (cos(π − θ), sin(π − θ)), the heights match: sin(π − θ) = sin θ. [Learn more about the comparison](!#reflection-proof-step-6-compare-coordinates) · [The sine identity](!#the-sine-supplementary-identity)`,
    ] },
    cos: { steps: [
      `Place point P on the unit circle at angle θ from the x-axis. Drop perpendiculars: horizontal leg = cos θ, vertical leg = sin θ. [Learn more about the setup](!#reflection-proof-step-1-setup) · [The cosine identity](!#the-cosine-supplementary-identity)`,
      `Draw the y-axis as the mirror line. Its angle from the x-axis is 90°. [Learn more about the mirror](!#reflection-proof-step-2-introduce-the-mirror) · [The cosine identity](!#the-cosine-supplementary-identity)`,
      `The angle from the x-axis up to OP is θ. The angle from OP up to the y-axis is (90° − θ). This is how far P is from the mirror. [Learn more about the gap](!#reflection-proof-step-3-measure-the-gap) · [The cosine identity](!#the-cosine-supplementary-identity)`,
      `Reflect P across the y-axis to get P′. Reflections preserve angles to the mirror line — so the angle from the mirror to P′ is also (90° − θ), on the other side. [Learn more about the reflection](!#reflection-proof-step-4-reflect) · [The cosine identity](!#the-cosine-supplementary-identity)`,
      `Angle from x-axis to OP′ = 90° (mirror) + (90° − θ) (gap on the other side) = 180° − θ. So P′ sits at angle (π − θ). [Learn more about the new angle](!#reflection-proof-step-5-read-the-new-angle) · [The cosine identity](!#the-cosine-supplementary-identity)`,
      `P = (cos θ, sin θ). Reflection across the y-axis flips the x-coordinate, so P′ = (−cos θ, sin θ). Since P′ is also (cos(π − θ), sin(π − θ)), the horizontal coordinates match with a sign: cos(π − θ) = −cos θ. [Learn more about the comparison](!#reflection-proof-step-6-compare-coordinates) · [The cosine identity](!#the-cosine-supplementary-identity)`,
    ] },
    tan: { content: `Tangent is sine over cosine. Sine is unchanged at π − θ; cosine flips sign, so the quotient flips. [Learn more about the tangent form](!#the-tangent-supplementary-identity) · [All six identities](!#the-six-identities-at-a-glance)` },
    csc: { content: `Cosecant is the reciprocal of sine. Since sin(π − θ) = sin θ, so does csc. [Learn more about the cosecant form](!#the-cosecant-supplementary-identity) · [All six identities](!#the-six-identities-at-a-glance)` },
    sec: { content: `Secant is the reciprocal of cosine. Since cos(π − θ) = −cos θ, sec flips sign too. [Learn more about the secant form](!#the-secant-supplementary-identity) · [All six identities](!#the-six-identities-at-a-glance)` },
    cot: { content: `Cotangent is cosine over sine — the flipped quantity over the unchanged one. [Learn more about the cotangent form](!#the-cotangent-supplementary-identity) · [All six identities](!#the-six-identities-at-a-glance)` },
  };


  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      explanations,
      stateUnits,
      seoData: {
        title: "Supplementary Angle Identities Tool | Learn Math Class",
        description: "Visualize all six supplementary angle trig identities at π − θ. See reflection geometry for sin and cos, plus step-by-step derivations for tan, csc, sec, cot.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/supplementary-angle-identities",
        name: "Supplementary Angle Identities Visualizer",
        hubDescription: "Explore all six trig functions at π − θ across two complementary views. Sin and cos appear as reflections across the y-axis with live unit-circle geometry; tan, csc, sec, and cot derive algebraically from those two roots. Step through proofs, switch tabs, and verify each identity numerically at any angle.",
        category: "Identities",
       
      },
    }
  }
}

export default function SupplementaryAngleIdentitiesPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  explanations,
  stateUnits
}) {

  // Superseded by the explicit slug rows below (Line 1 v5): the auto-map cannot
  // carry slug ids or illustration units.
  // const genericSections = Object.keys(sectionsContent).map((key, index) => ({
  //   id: `${index + 1}`,
  //   title: sectionsContent[key].title,
  //   link: sectionsContent[key].link,
  //   content: [sectionsContent[key].content]
  // }))

  const genericSections = [
    { id: 'getting-started-with-the-explorer',            title: sectionsContent.obj1.title,  link: sectionsContent.obj1.link,  content: [sectionsContent.obj1.content] },
    { id: 'switching-between-geometric-and-derived-views', title: sectionsContent.obj2.title,  link: sectionsContent.obj2.link,  content: [sectionsContent.obj2.content] },
    { id: 'reading-the-identity-bar-and-derivation-steps', title: sectionsContent.obj3.title,  link: sectionsContent.obj3.link,  content: [sectionsContent.obj3.content] },
    { id: 'tracing-identities-back-to-their-source',      title: sectionsContent.obj4.title,  link: sectionsContent.obj4.link,  content: [sectionsContent.obj4.content] },
    { id: 'using-the-formula-comparison-table',           title: sectionsContent.obj5.title,  link: sectionsContent.obj5.link,  content: [sectionsContent.obj5.content] },
    { id: 'verifying-identities-numerically',             title: sectionsContent.obj6.title,  link: sectionsContent.obj6.link,  content: [sectionsContent.obj6.content] },
    { id: 'what-are-supplementary-angle-identities',      title: sectionsContent.obj7.title,  link: sectionsContent.obj7.link,  content: [sectionsContent.obj7.content] },
    { id: 'why-reflection-across-the-y-axis',             title: sectionsContent.obj8.title,  link: sectionsContent.obj8.link,  content: [sectionsContent.obj8.content] },
    { id: 'the-six-identities-at-a-glance',               title: sectionsContent.obj9.title,  link: sectionsContent.obj9.link,  content: [sectionsContent.obj9.content] },
    { id: 'supplementary-vs-complementary-identities',    title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [sectionsContent.obj10.content] },
    { id: 'related-concepts-and-tools',                   title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [sectionsContent.obj11.content] },
    {
      id: 'the-sine-supplementary-identity',
      title: sectionsContent.obj12.title,
      link: sectionsContent.obj12.link,
      content: [
        sectionsContent.obj12.content,
        <div key={'u-sinOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['sinOverview'] }} />,
        sectionsContent.obj12.after,
      ]
    },
    {
      id: 'the-cosine-supplementary-identity',
      title: sectionsContent.obj13.title,
      link: sectionsContent.obj13.link,
      content: [
        sectionsContent.obj13.content,
        <div key={'u-cosOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['cosOverview'] }} />,
        sectionsContent.obj13.after,
      ]
    },
    {
      id: 'the-tangent-supplementary-identity',
      title: sectionsContent.obj14.title,
      link: sectionsContent.obj14.link,
      content: [
        sectionsContent.obj14.content,
        <div key={'u-tan'} dangerouslySetInnerHTML={{ __html: stateUnits['tan'] }} />,
        sectionsContent.obj14.after,
      ]
    },
    {
      id: 'the-cosecant-supplementary-identity',
      title: sectionsContent.obj15.title,
      link: sectionsContent.obj15.link,
      content: [
        sectionsContent.obj15.content,
        <div key={'u-csc'} dangerouslySetInnerHTML={{ __html: stateUnits['csc'] }} />,
        sectionsContent.obj15.after,
      ]
    },
    {
      id: 'the-secant-supplementary-identity',
      title: sectionsContent.obj16.title,
      link: sectionsContent.obj16.link,
      content: [
        sectionsContent.obj16.content,
        <div key={'u-sec'} dangerouslySetInnerHTML={{ __html: stateUnits['sec'] }} />,
        sectionsContent.obj16.after,
      ]
    },
    {
      id: 'the-cotangent-supplementary-identity',
      title: sectionsContent.obj17.title,
      link: sectionsContent.obj17.link,
      content: [
        sectionsContent.obj17.content,
        <div key={'u-cot'} dangerouslySetInnerHTML={{ __html: stateUnits['cot'] }} />,
        sectionsContent.obj17.after,
      ]
    },
    {
      id: 'reflection-proof-step-1-setup',
      title: sectionsContent.obj18.title,
      link: sectionsContent.obj18.link,
      content: [
        sectionsContent.obj18.content,
        <div key={'u-step1'} dangerouslySetInnerHTML={{ __html: stateUnits['step1'] }} />,
        sectionsContent.obj18.after,
      ]
    },
    {
      id: 'reflection-proof-step-2-introduce-the-mirror',
      title: sectionsContent.obj19.title,
      link: sectionsContent.obj19.link,
      content: [
        sectionsContent.obj19.content,
        <div key={'u-step2'} dangerouslySetInnerHTML={{ __html: stateUnits['step2'] }} />,
        sectionsContent.obj19.after,
      ]
    },
    {
      id: 'reflection-proof-step-3-measure-the-gap',
      title: sectionsContent.obj20.title,
      link: sectionsContent.obj20.link,
      content: [
        sectionsContent.obj20.content,
        <div key={'u-step3'} dangerouslySetInnerHTML={{ __html: stateUnits['step3'] }} />,
        sectionsContent.obj20.after,
      ]
    },
    {
      id: 'reflection-proof-step-4-reflect',
      title: sectionsContent.obj21.title,
      link: sectionsContent.obj21.link,
      content: [
        sectionsContent.obj21.content,
        <div key={'u-step4'} dangerouslySetInnerHTML={{ __html: stateUnits['step4'] }} />,
        sectionsContent.obj21.after,
      ]
    },
    {
      id: 'reflection-proof-step-5-read-the-new-angle',
      title: sectionsContent.obj22.title,
      link: sectionsContent.obj22.link,
      content: [
        sectionsContent.obj22.content,
        <div key={'u-step5'} dangerouslySetInnerHTML={{ __html: stateUnits['step5'] }} />,
        sectionsContent.obj22.after,
      ]
    },
    {
      id: 'reflection-proof-step-6-compare-coordinates',
      title: sectionsContent.obj23.title,
      link: sectionsContent.obj23.link,
      content: [
        sectionsContent.obj23.content,
        <div key={'u-step6'} dangerouslySetInnerHTML={{ __html: stateUnits['step6'] }} />,
        sectionsContent.obj23.after,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Supplementary Angle Trigonometric Identities</h1>
   <br/>
   <div style={{transform:'scale(0.9)'}}>
   <SupplementaryAngleExplorer explanations={explanations}/>
   </div>
   <br/>
   <SectionTableOfContents
     sections={genericSections}
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