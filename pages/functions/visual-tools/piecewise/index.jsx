// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionPiecewise from '../../../../app/components/functions/piecewise/FunctionPiecewise'


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
//         url: "/functions/visual-tools/piecewise",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Piecewise Functions Builder</h1>
//    <br/>
//    <FunctionPiecewise/>
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
import FunctionPiecewise from '../../../../app/components/functions/piecewise/FunctionPiecewise'


export async function getStaticProps(){

  const keyWords = [
    'piecewise function',
    'piecewise function builder',
    'piecewise function visualizer',
    'piecewise function grapher',
    'piecewise function calculator',
    'absolute value piecewise',
    'step function piecewise',
    'piecewise continuity',
    'jump discontinuity',
    'removable discontinuity',
    'piecewise domain',
    'open closed endpoints',
    'well-defined function',
    'interactive piecewise tool',
    'piecewise function examples'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Piecewise function** — a single function defined by several formulas, each applied on its own interval of the domain.

**Piece** — one formula together with the interval on which it acts. Each piece is a function from a small catalog (linear, quadratic, $|x|$, $\\sqrt{x}$, $1/x$, $\\sin x$, $\\cos x$, $e^x$, etc.) restricted to $[a, b]$.

**Endpoint kind** — each interval boundary is either **closed** (the endpoint belongs to that piece, drawn as a filled dot) or **open** (the endpoint does not belong to that piece, drawn as an empty circle).

**Well-defined** — every $x$ in the domain is covered by exactly one piece. No overlaps (two pieces claiming the same $x$) and no gaps (some $x$ with no piece).

**Boundary** — a value of $x$ where one piece ends and another begins. The behavior at a boundary is classified as continuous, removable, or jump.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The page opens with the **absolute value** preset already loaded — two pieces, $-x$ for $x \\in [-5, 0)$ and $x$ for $x \\in [0, 5]$, joining at the origin to form $|x|$. The graph shows both pieces with open and closed endpoint markers honoring the interval kinds.

To explore quickly:

• Open the **Presets** dropdown in the left panel and pick a different shape — **Heaviside step**, **Sign function**, **Sawtooth**, **Removable hole**, or **Jump discontinuity**.

• Each preset loads a complete set of pieces that demonstrates a specific behavior. Switching presets replaces the current definition entirely.

• Use **Empty (start over)** to clear all pieces and build from scratch.

• The **Reset** button next to the Pieces label reloads whichever preset was active when the page opened.

The graph viewport is fixed at $x \\in [-5, 5]$; the vertical range adjusts automatically to fit the pieces currently in use.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Editing Individual Pieces`,
      content: `Each piece in the editor has its own row with three controls:

• **Function selector** — the dropdown showing the current shape (for example, $x$, $x^2$, $|x|$, $\\sin x$). Change it to swap the formula on this piece without touching its interval.

• **Interval bounds** — two numeric inputs for the left and right endpoint of the piece, with $0.5$-step increments. Type any decimal value within the viewport.

• **Endpoint toggle buttons** — the bracket buttons on either side of the bounds. Click $[$ to make the left endpoint **closed**, $($ to make it **open**. Same for $]$ and $)$ on the right.

The small numbered circle at the start of each row tells you which piece this is — pieces are numbered $1, 2, 3, \\dots$ from top to bottom in the editor, matching the labels in the boundary report.

Remove a piece with the $\\times$ button on the right side of its row.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adding New Pieces`,
      content: `The **Add piece** section at the bottom of the left panel adds a new piece to the end of the list:

• Pick a function shape from the **f(x) =** dropdown.

• Click **+ Add**. The new piece appears below the existing ones with an interval that starts where the last piece ended and extends $2$ units to the right (clipped to the viewport).

• The new piece&apos;s left endpoint is set to **open** if the previous piece&apos;s right endpoint was closed, and vice versa — a sensible default that avoids immediate overlap. Adjust the kinds afterward if you want a gap or an explicit overlap to see how the tool reacts.

You can build a definition with as many pieces as the viewport will fit. There&apos;s no upper limit imposed by the tool itself.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Open vs Closed Endpoints`,
      content: `At every boundary between two pieces, exactly one of them should own the boundary point. That&apos;s how the brackets in interval notation work, and that&apos;s how the tool tracks ownership.

**Filled dot (closed endpoint)** — the piece owns this $x$ value. The interval is written with a square bracket: $[a, b]$ or $[a, b)$.

**Empty circle (open endpoint)** — the piece does not own this $x$ value. The interval is written with a parenthesis: $(a, b)$ or $(a, b]$.

**Rule of thumb at a shared boundary $x = k$:** if piece A ends at $k$ and piece B begins at $k$, one side should close and the other should open. Two closed endpoints at the same $x$ create an **overlap** — two pieces claiming the same value. Two open endpoints create a **gap** — neither piece covers that $x$. The tool flags both as red rows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Verdict Panel`,
      content: `Below the graph, the boxed verdict panel summarizes the current definition with a single classification:

• **Continuous on viewport** — pieces tile cleanly and agree at every boundary.

• **Well-defined, with jumps** — pieces tile cleanly but the values disagree at one or more boundaries.

• **Well-defined, with removable points** — limits agree but the assigned value at the boundary is different.

• **Not fully defined** — at least one $x$ in the viewport has no piece covering it (a gap).

• **Not well-defined** — at least one $x$ is claimed by two different pieces (an overlap). This is not a function at all.

A green check means the definition does qualify as a function; a red cross means it doesn&apos;t. The tag on the right (continuous, has jumps, has gaps, overlap) gives a one-word summary you can scan at a glance.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reading the Boundary Report`,
      content: `Underneath the verdict, every interior boundary of the current definition gets its own row with a label and a brief explanation:

• **continuous** (blue) — the left limit, right limit, and the assigned value all match. The function passes smoothly through the seam.

• **removable** (deep blue) — the left and right limits agree but $f(k)$ is something different. The discontinuity could be removed by reassigning the value at that single point.

• **jump** (red) — the left limit and the right limit are different numbers. No single value of $f(k)$ can patch this.

• **overlap** (red) — two pieces both close at the same $x$. Not a function — undefined.

• **gap** (red) — adjacent pieces are both open at the same $x$, or some interior interval has no piece. The function isn&apos;t defined there.

Each row lists the $x$ value of the boundary and the actual one-sided values that produced the classification.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is a Piecewise Function`,
      content: `A piecewise function is one function written as several formulas, each applied on a different part of the domain. It&apos;s a single object — $f(x)$ — that just happens to be described by a different rule depending on where $x$ lies.

The standard notation collects the cases in a brace:

$$f(x) = \\begin{cases} f_1(x) & \\text{if } x \\in I_1 \\\\ f_2(x) & \\text{if } x \\in I_2 \\\\ \\vdots \\end{cases}$$

For this to define a function, the intervals $I_1, I_2, \\dots$ must **partition** the intended domain — every $x$ in the domain belongs to exactly one $I_k$. That&apos;s the well-definedness condition the tool checks.

For a deeper treatment of piecewise function theory, see the **piecewise functions** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Continuity at a Boundary`,
      content: `Even when the pieces tile the domain correctly, the function may not be continuous at the seams. At an interior boundary $x = k$ between piece A (ending at $k$) and piece B (starting at $k$):

• $f(k^{-}) = f(k^{+}) = f(k)$ — **continuous**. The left limit, right limit, and value all match. The graph passes through the seam without a break.

• $f(k^{-}) = f(k^{+}) \\ne f(k)$ — **removable discontinuity**. The two-sided limit exists; only the assigned value at $k$ is off. Redefining $f(k)$ to the common limit removes the discontinuity.

• $f(k^{-}) \\ne f(k^{+})$ — **jump discontinuity**. The two one-sided limits are different. No single value at $k$ can repair it.

For the full theory of limits and continuity, see the **continuity** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Common Piecewise Patterns`,
      content: `Several standard functions are defined piecewise even when their name suggests a single formula. The presets in this tool walk through the canonical examples:

• **Absolute value** $|x|$ — two linear pieces meeting at the origin, $-x$ on the left and $x$ on the right. Continuous everywhere, not differentiable at $0$.

• **Heaviside step** — constant $0$ (or $-1$) on the left of $0$ and constant $1$ on the right. The simplest jump discontinuity, used as a building block in signal analysis.

• **Sign function** — $-1$, $0$, $+1$ on three pieces, with the middle piece being a single-point closed interval at the origin.

• **Sawtooth** — linear pieces that reset at fixed intervals, producing a series of jumps.

• **Removable hole** — two pieces that agree on the limit at the seam but assign different values, isolating the removable case.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Functions** — the general theory of functions, domain, range, and notation. The foundation behind piecewise definitions.

**Continuity** — the formal definition of continuous functions and the classification of discontinuities (jump, removable, essential).

**Limits** — one-sided and two-sided limits, the machinery used to classify boundary behavior on piecewise functions.

**Domain and range** — how the domain of a piecewise function is the union of the individual piece domains.

**Absolute value function** — a canonical piecewise example, with its own page covering algebraic properties and graphing.

**Step functions** — piecewise constants used to model on/off behavior, indicator functions, and quantized signals.

**Visual tools for functions** — other interactive visualizers covering composition, transformations, inverses, and graphing.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj12: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj13: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj14: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj15: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What is a piecewise function?",
      answer: "A piecewise function is a single function defined by several different formulas, each applied on its own interval of the domain. The function behaves according to one rule for some values of x and according to a different rule for other values, with all the rules combined into one object."
    },
    obj2: {
      question: "How do you make a piecewise function well-defined?",
      answer: "Every value of x in the intended domain must be covered by exactly one piece. That means the intervals cannot overlap (no x claimed by two pieces) and cannot leave gaps (no x left uncovered). Open and closed endpoints at the boundaries decide which piece owns each shared point."
    },
    obj3: {
      question: "What is the difference between a jump and a removable discontinuity?",
      answer: "A jump discontinuity happens when the left limit and the right limit at a boundary are different numbers, so no value at that point can repair the break. A removable discontinuity happens when the two one-sided limits agree but the function is assigned a different value at the boundary, so reassigning that single value would make the function continuous."
    },
    obj4: {
      question: "How do open and closed endpoints work in piecewise functions?",
      answer: "A closed endpoint, written with a square bracket and drawn as a filled dot, means the piece owns that x value. An open endpoint, written with a parenthesis and drawn as an empty circle, means the piece does not own that x value. At every shared boundary between two pieces, exactly one side should be closed and the other open."
    },
    obj5: {
      question: "When are piecewise functions used in practice?",
      answer: "Piecewise functions appear in tax brackets, shipping fees, step functions in signal processing, absolute value, the sign function, ceiling and floor functions, and many physical models where behavior changes across a threshold. They are the standard way to describe any system whose rule depends on the regime it is operating in."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Piecewise Function Builder",
      "description": "Interactive tool for building and visualizing piecewise functions with adjustable intervals, open and closed endpoints, and real-time continuity analysis.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/piecewise",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build piecewise functions piece by piece from a catalog of common shapes",
        "Adjust interval bounds and toggle open or closed endpoints per piece",
        "Load preset definitions including absolute value, Heaviside step, sign, sawtooth, and removable hole",
        "Automatic detection of overlaps and gaps in the domain",
        "Boundary classification as continuous, removable, or jump discontinuity",
        "Real-time well-definedness verdict with detailed boundary report",
        "Auto-fit viewport that adjusts vertical range to the active pieces"
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
      "keywords": "piecewise function, piecewise function builder, piecewise function visualizer, piecewise function grapher, piecewise function calculator, absolute value piecewise, step function piecewise, piecewise continuity, jump discontinuity, removable discontinuity, piecewise domain, open closed endpoints, well-defined function, interactive piecewise tool, piecewise function examples"
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Piecewise Function Builder",
          "item": "https://www.learnmathclass.com/functions/visual-tools/piecewise"
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


  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Piecewise Function Builder & Visualizer | Learn Math Class",
        description: "Build piecewise functions with custom intervals and endpoints. Visualize continuity, detect jumps, gaps, and overlaps with real-time boundary analysis.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/piecewise",
        name: "Piecewise Function Builder",
        hubDescription: "Build piecewise functions piece by piece — pick a shape from a catalog, set each piece's interval and open or closed endpoints, and watch the tool flag overlaps, gaps, jumps, and removable discontinuities in real time at every boundary."
      },

    }
  }
}

export default function PiecewiseFunctionBuilder({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [
        sectionsContent.obj0.content,
      ]
    },
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [
        sectionsContent.obj1.content,
      ]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [
        sectionsContent.obj2.content,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        sectionsContent.obj3.content,
      ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
      ]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [
        sectionsContent.obj5.content,
      ]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [
        sectionsContent.obj6.content,
      ]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [
        sectionsContent.obj7.content,
      ]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [
        sectionsContent.obj8.content,
      ]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [
        sectionsContent.obj9.content,
      ]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [
        sectionsContent.obj10.content,
      ]
    },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Piecewise Function Builder & Visualizer</h1>
      <br/>
      <FunctionPiecewise/>
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
        textColor="#06357a"
      /> */}
      <br/>
      <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}