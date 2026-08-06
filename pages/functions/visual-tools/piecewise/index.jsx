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
// Canonical per-preset explanations live in getStaticProps below (SSR/SEO-visible);
// the component renders them as the info panel's "Preset" tab.
import FunctionPiecewise from '../../../../app/components/functions/piecewise/FunctionPiecewise'
import piecewiseDiagrams from '../../../../app/components/functions/piecewise/functionPiecewiseDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


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

• [Absolute value](!#the-absolute-value-preset) $|x|$ — two linear pieces meeting at the origin, $-x$ on the left and $x$ on the right. Continuous everywhere, not differentiable at $0$.

• [Heaviside step](!#the-heaviside-step) — constant $0$ (or $-1$) on the left of $0$ and constant $1$ on the right. The simplest [jump discontinuity](!#the-jump-discontinuity), used as a building block in signal analysis.

• [Sign function](!#the-sign-function) — $-1$, $0$, $+1$ on three pieces, with the middle piece being a single-point closed interval at the origin.

• [Sawtooth](!#the-sawtooth) — linear pieces that reset at fixed intervals, producing a series of jumps.

• [Removable hole](!#the-removable-hole) — two pieces that agree on the limit at the seam but assign different values, isolating the removable case.`,
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
      title: `The Absolute Value Preset`,
      content: `The gallery's opening preset builds $|x|$ from two linear pieces: $-x$ on $[-5, 0)$ and $x$ on $[0, 5]$ — the standard first example of a piecewise definition.`,
      before: ``,
      after: `The seam at $x = 0$ is where the [verdict panel](!#the-verdict-panel) earns its keep: the left piece approaches $0$, the right piece starts at $0$, and the value belongs to the right piece — left limit, right limit, and value all agree, so the verdict is **continuous**. A filled dot swallows the open circle at the joint.

The result is a function smoother in definition than in geometry: perfectly continuous, yet with a corner where the slope snaps from $-1$ to $+1$. Continuity and differentiability part ways exactly here.

Rebuilding a familiar function from pieces is the preset's real lesson: many "single" functions are piecewise underneath.`,
      link: '',
    },
    obj12: {
      title: `The Heaviside Step`,
      content: `The Heaviside preset is the minimal jump: $-1$ on $[-5, 0)$, then $1$ on $[0, 5]$ — one boundary, two constant pieces, and no way to bridge them.`,
      before: ``,
      after: `At $x = 0$ the left limit is $-1$, the right limit (and value) is $1$: a **jump discontinuity**, flagged by the verdict panel with both one-sided limits spelled out. The open circle at $(0, -1)$ against the filled dot at $(0, 1)$ is the whole story in two markers.

No repair is possible — redefining the value at one point cannot close a gap between two different limits. Contrast the [removable hole](!#the-removable-hole), where a one-point fix genuinely works.

The step function is the atom of switching: signal processing, control theory, and probability all build on it.`,
      link: '',
    },
    obj13: {
      title: `The Sign Function`,
      content: `The sign preset needs three pieces, one of them extreme: $-1$ on $[-5, 0)$, the single point $\\{0\\}$ mapped to $0$, and $1$ on $(0, 5]$.`,
      before: ``,
      after: `The middle piece is a **degenerate closed interval** — one point of domain, drawn as a lone filled dot at the origin between two open circles. The builder accepts it because a single-point interval $[0, 0]$ with both ends closed is a perfectly legal piece.

The verdict is a double jump: left limit $-1$, right limit $1$, value $0$ — three different numbers meeting at one $x$. Neither one-sided limit matches the value, so this is a jump, not a removable point.

The [Heaviside step](!#the-heaviside-step) is sign's two-piece sibling; sign adds the honest middle value that makes the function odd.`,
      link: '',
    },
    obj14: {
      title: `The Sawtooth`,
      content: `The sawtooth chains three parallel lines — $x + 2$, $x$, $x - 2$ — each resetting where the previous one leaves off, producing the repeating ramp of signal generators.`,
      before: ``,
      after: `Every seam is the same event: the outgoing piece climbs to an open circle, the incoming piece restarts $2$ lower with a filled dot. Two jump discontinuities in one window, each reported separately in the [boundary report](!#reading-the-boundary-report).

All three pieces share slope $1$ — the discontinuity is entirely in the values, not the direction. A sawtooth is a linear function that keeps getting interrupted.

Periodic resets like this are how oscilloscopes sweep and how modular arithmetic looks when graphed — the fractional-part function $x - \\lfloor x \\rfloor$ is an infinite sawtooth.`,
      link: '',
    },
    obj15: {
      title: `The Removable Hole`,
      content: `The hole preset splits the line $y = x$ at $x = 1$ into $[-5, 1)$ and $(1, 5]$ — both pieces open at the seam, so the point $x = 1$ belongs to no piece at all.`,
      before: ``,
      after: `Both one-sided limits equal $1$; only the value is missing. The verdict panel classifies the seam as a **gap** — the function is simply undefined there — and the plot shows the cleanest possible puncture: one open circle on an otherwise unbroken line.

The fix is one click: close either endpoint and the hole fills, the verdict flipping to continuous. That repairability is what "removable" means — and precisely what the [jump](!#the-jump-discontinuity) lacks, where no single value can reconcile two different limits.

Removable singularities are the piecewise picture of the rational-function situation $\\frac{(x-1)(x+2)}{x-1}$: identical to a simpler function everywhere except one missing point.`,
      link: '',
    },
    obj16: {
      title: `The Jump Discontinuity`,
      content: `The jump preset runs $x + 1$ into $x - 1$ at $x = 0$: two parallel lines offset by $2$, meeting at a seam they cannot share.`,
      before: ``,
      after: `Left limit $1$, right limit $-1$, value $-1$: the verdict reads **well-defined, with jumps** — every input has exactly one output, so this is a legitimate function; it just is not continuous. Well-definedness and continuity are separate certificates, and this preset holds one without the other.

The jump height ($2$ here) is the gap between the one-sided limits — the quantity the [boundary report](!#reading-the-boundary-report) states as "left = 1, right = −1".

Together with the [hole](!#the-removable-hole), this preset completes the discontinuity taxonomy the tool can produce: value missing (gap), value wrong (removable), limits disagreeing (jump).`,
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


  // Framed illustration units for the per-preset sections (Line 1 v5): frozen
  // builder state + attached picture-reading panel, no link (own page).
  const stateUnits = {
    absvalue: demoUnitFrame({ svg: piecewiseDiagrams.absvalue, caption: 'Absolute value, frozen',
      text: 'Two linear pieces meeting at the origin, the filled dot swallowing the open circle: left limit, right limit, and value agree.' }),
    heaviside: demoUnitFrame({ svg: piecewiseDiagrams.heaviside, caption: 'Heaviside step, frozen',
      text: 'One boundary, two constants: the open circle at (0, &#8722;1) against the filled dot at (0, 1) is the minimal jump.' }),
    sign: demoUnitFrame({ svg: piecewiseDiagrams.sign, caption: 'Sign function, frozen',
      text: 'Three pieces including a single-point interval: the lone filled dot at the origin between two open circles.' }),
    sawtooth: demoUnitFrame({ svg: piecewiseDiagrams.sawtooth, caption: 'Sawtooth, frozen',
      text: 'Three parallel ramps, each restarting two units lower &#8212; two identical jump events in one window.' }),
    hole: demoUnitFrame({ svg: piecewiseDiagrams.hole, caption: 'Removable hole, frozen',
      text: 'An unbroken line except for one open circle at x = 1: both limits agree, only the value is missing.' }),
    jump: demoUnitFrame({ svg: piecewiseDiagrams.jump, caption: 'Jump discontinuity, frozen',
      text: 'Two parallel lines offset by 2: the gap between the one-sided limits is the jump height itself.' }),
  };

  // Canonical per-preset explanations for the info panel's Preset tab
  // (SSR/SEO-visible; the component has no built-in per-preset texts).
  const explanations = {
    absvalue:
      '**Absolute value** — two linear pieces, $-x$ then $x$, meeting continuously at the origin: a corner, but no break.\n\n' +
      '[Learn more about this preset](!#the-absolute-value-preset) · [All patterns](!#common-piecewise-patterns)',
    heaviside:
      '**Heaviside step** — the minimal jump: constant $-1$, then constant $1$, with no way to bridge the boundary.\n\n' +
      '[Learn more about this preset](!#the-heaviside-step) · [All patterns](!#common-piecewise-patterns)',
    sign:
      '**Sign function** — three pieces including a legal single-point interval $[0,0]$: left limit $-1$, value $0$, right limit $1$.\n\n' +
      '[Learn more about this preset](!#the-sign-function) · [All patterns](!#common-piecewise-patterns)',
    sawtooth:
      '**Sawtooth** — parallel ramps resetting at fixed seams: all the discontinuity is in the values, none in the slope.\n\n' +
      '[Learn more about this preset](!#the-sawtooth) · [All patterns](!#common-piecewise-patterns)',
    hole:
      '**Removable hole** — both one-sided limits agree at $x = 1$; only the value is missing. One closed endpoint repairs it.\n\n' +
      '[Learn more about this preset](!#the-removable-hole) · [All patterns](!#common-piecewise-patterns)',
    jump:
      '**Jump discontinuity** — a well-defined function that is not continuous: the limits disagree by exactly the jump height.\n\n' +
      '[Learn more about this preset](!#the-jump-discontinuity) · [All patterns](!#common-piecewise-patterns)',
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

export default function PiecewiseFunctionBuilder({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {


  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'key-terms', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
    { id:'getting-started', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
    { id:'editing-individual-pieces', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
    { id:'adding-new-pieces', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
    { id:'open-vs-closed-endpoints', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
    { id:'the-verdict-panel', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
    { id:'reading-the-boundary-report', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
    { id:'what-is-a-piecewise-function', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
    { id:'continuity-at-a-boundary', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
    { id:'common-piecewise-patterns', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
    { id:'the-absolute-value-preset', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content, unit('absvalue'), sectionsContent.obj11.after] },
    { id:'the-heaviside-step', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('heaviside'), sectionsContent.obj12.after] },
    { id:'the-sign-function', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('sign'), sectionsContent.obj13.after] },
    { id:'the-sawtooth', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('sawtooth'), sectionsContent.obj14.after] },
    { id:'the-removable-hole', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('hole'), sectionsContent.obj15.after] },
    { id:'the-jump-discontinuity', title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, unit('jump'), sectionsContent.obj16.after] },
    { id:'related-concepts', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <FunctionPiecewise explanations={explanations}/>
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