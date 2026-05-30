// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionAsymptotes from '../../../../app/components/functions/asymptotes/FunctionAsymptotes'


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
//         url: "/functions/visual-tools/asymptotes",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Asymptotes</h1>
//    <br/>
//    <FunctionAsymptotes/>
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
import FunctionAsymptotes from '../../../../app/components/functions/asymptotes/FunctionAsymptotes'


export async function getStaticProps(){

  const keyWords = [
    'asymptotes',
    'function asymptotes',
    'vertical asymptote',
    'horizontal asymptote',
    'oblique asymptote',
    'slant asymptote',
    'asymptote visualizer',
    'how to find asymptotes',
    'rational function asymptotes',
    'one-sided limits',
    'limit at infinity',
    'asymptotes of tan',
    'asymptotes of logarithm',
    'asymptotes of arctan',
    'end behavior of function',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven functions grouped by the type of asymptote they have — vertical only, horizontal only, both, or oblique. In the center is the **plot panel** with the function curve in blue and its asymptotes drawn as dashed lines:

• **Red dashed verticals** mark vertical asymptotes
• **Green dashed horizontals** mark horizontal asymptotes
• **Purple dashed slants** mark oblique asymptotes

Below the plot, a **detected asymptotes panel** lists each one as a colored pill with its equation. For vertical asymptotes it also shows the one-sided limits ($x \\to c^-$ and $x \\to c^+$, each tagged $+\\infty$ or $-\\infty$). On the right is the **info panel** with two tabs — Detected (state-specific) and Concepts (general theory).

The page launches with the reciprocal function $1/x$. The plot shows the two-branch hyperbola, a red dashed vertical line at $x = 0$, and a green dashed horizontal at $y = 0$ — the canonical example of a function with both kinds of asymptote.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Function`,
      content: `The picker groups eleven functions by which asymptotes they have:

• **Vertical only** — Logarithm $\\ln(x)$ (VA at $x = 0$), Tangent (VAs at $\\pi/2 + n\\pi$)
• **Horizontal only** — Exponential decay $e^{-x}$, the bell $1/(1+x^2)$, Arctangent, Logistic
• **Both V and H** — Reciprocal $1/x$, $(x+1)/(x-1)$, $x/(x^2-1)$
• **Oblique** — $x + 1/x$, $(x^2 - 1)/x$

The grouping is a teaching tool. **Arctan** is the classic two-different-HA example — $\\pi/2$ on the right, $-\\pi/2$ on the left. **Exponential decay** is the classic one-sided HA — converges on the right, blows up on the left. **$x/(x^2-1)$** has two VAs ($x = \\pm 1$) and one HA ($y = 0$). **$(x^2-1)/x$** simplifies to $x - 1/x$, so its oblique asymptote is $y = x$.

Clicking any entry switches the function and resets transformation parameters to defaults.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Plot`,
      content: `The plot uses **color as a type code** — every visual element's color tells you what kind of asymptote it is.

• **Blue solid** — the function curve itself, $g(x)$
• **Red dashed verticals** — vertical asymptotes. The curve heads toward $\\pm\\infty$ as $x$ approaches the line.
• **Green dashed horizontals** — horizontal asymptotes. The curve flattens out toward the line as $x \\to \\pm\\infty$.
• **Purple dashed slants** — oblique asymptotes. The curve approaches the slanted line at infinity.

Each line is labeled with its equation directly on the plot. The detector finds all asymptotes numerically at render time, so when you transform the function with sliders, the dashed lines move with it.

A key visual: the function curve **can cross** a horizontal or oblique asymptote in the middle, but never crosses a vertical asymptote (because the function isn't defined there). The asymptote is about long-term behavior, not a barrier the curve must stay away from.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Detected Asymptotes Panel`,
      content: `Below the plot, a panel organizes the detected asymptotes by type with color-coded pills:

• **Vertical section** — one row per VA. Each row shows the equation $x = c$ as a red pill, followed by the one-sided limit information: $x \\to c^-$ tagged with $+\\infty$ or $-\\infty$, and $x \\to c^+$ similarly. Reading $1/(x-1)$ for example: $x \\to 1^-: -\\infty$ and $x \\to 1^+: +\\infty$ — the curve drops to negative infinity from the left and rises to positive infinity from the right.

• **Horizontal section** — one row per HA. The pill shows $y = L$ in green, followed by which direction the limit applies: $x \\to +\\infty$, $x \\to -\\infty$, or $x \\to \\pm\\infty$ (when both sides converge to the same value).

• **Oblique section** — one row per oblique asymptote. The pill shows $y = mx + b$ in purple with the side indicator.

A counter at the top of the panel reads the total: "$3$ total" for the reciprocal-with-shift case, for example.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `One-Sided Limits at Vertical Asymptotes`,
      content: `Not every vertical asymptote behaves the same on both sides. The visualizer probes each VA from the left and from the right separately, then reports each one-sided limit independently.

Three patterns show up:

• **Sign-flip** (the curve crosses infinity) — like $1/x$ at $x = 0$. Left limit: $-\\infty$. Right limit: $+\\infty$. The curve flies down on the left, up on the right.

• **Same-sign blow-up** — like $1/x^2$ at $x = 0$. Both sides go to $+\\infty$. The curve forms an upside-down bowl with its peak hidden at the asymptote.

• **One-sided** — like $\\ln(x)$ at $x = 0$. Only the right side is defined; the function isn't real for $x < 0$. The panel shows only the right limit and omits the left entry entirely.

Watching the symbols ($+\\infty$ vs $-\\infty$, present vs absent) gives you the full behavior at the asymptote without needing to compute limits by hand.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Transforming and Tracking Asymptotes`,
      content: `Four sliders apply the affine transformation $g(x) = a \\cdot f(b(x - h)) + k$:

• **$a$ — vertical scale** rescales the output. Horizontal asymptotes move with $a$: a HA at $y = L$ becomes $y = aL + k$.
• **$k$ — vertical shift** lifts the whole curve. HAs shift by $k$; verticals are unaffected.
• **$b$ — horizontal scale** stretches the input. VAs move: $x = c$ becomes $x = c/b + h$.
• **$h$ — horizontal shift** translates left/right. Verticals shift by $h$; HAs are unaffected.

Concrete example: start on the reciprocal, default parameters — VA at $x = 0$, HA at $y = 0$. Drag $h$ to $+2$ — the VA tracks to $x = 2$. Drag $k$ to $+3$ — the HA tracks to $y = 3$. The dashed lines move in real time, and the detector's labels update accordingly.

The detection is purely numerical — no formula manipulation — so even fairly complex compositions like the shifted-and-scaled tangent get correct asymptote labeling.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Oblique Asymptotes`,
      content: `An **oblique** (or **slant**) asymptote is a non-horizontal line $y = mx + b$ that the curve approaches at infinity. Two functions in the picker demonstrate this:

• **$x + 1/x$** — at large $|x|$, the $1/x$ term shrinks to zero, leaving $y = x$. The asymptote is the line $y = x$ through the origin.
• **$(x^2 - 1)/x$** — polynomial-divide to get $x - 1/x$. Same oblique asymptote: $y = x$.

The detector finds it by computing $m = \\lim_{x \\to \\pm\\infty} g(x)/x$. If that limit is a finite non-zero number, compute $b = \\lim g(x) - mx$. If both limits converge, $y = mx + b$ is the asymptote.

A function has **either** a horizontal asymptote on a side **or** an oblique one **or** neither — never both. A non-zero slope rules out a finite limit at infinity. The detector enforces this: the oblique check runs only on sides where the horizontal check came back empty.

Oblique asymptotes appear most commonly in rational functions where the numerator's degree is exactly one more than the denominator's.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is an Asymptote?`,
      content: `An **asymptote** is a line (or curve) that the graph of a function approaches arbitrarily closely as a variable approaches some value. Three kinds matter for elementary functions:

• **Vertical** — $x = c$ is a VA if $f(x) \\to \\pm\\infty$ as $x \\to c$ from at least one side. Typical sources: division by zero in rational functions, domain boundaries where a function diverges, periodic singularities like tan and cot.

• **Horizontal** — $y = L$ is an HA if $f(x) \\to L$ as $x \\to +\\infty$ or $x \\to -\\infty$. Common in rational functions with degree denominator $\\geq$ numerator, in $\\arctan$ and logistic curves, in exponential decay.

• **Oblique** — $y = mx + b$ is an oblique asymptote if $f(x) - (mx + b) \\to 0$ at infinity, with $m \\ne 0$.

Asymptotes describe **end behavior** and **singular behavior**, the two key pieces of a function's global structure beyond its local features.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Asymptotes Matter`,
      content: `Asymptotes capture how a function behaves where you can't just evaluate it — at points where it blows up, or as inputs grow without bound.

In **rational functions**, asymptotes are the skeleton: you find them, sketch them as dashed lines, and the rest of the graph hangs naturally from that scaffolding. Knowing all VAs and the HA (or OA) tells you the function's overall shape before you compute a single point.

In **modeling**, horizontal asymptotes represent **steady states** or **saturation levels** — the logistic curve's HA at $y = 1$ is the carrying capacity in population models; arctan's HAs at $\\pm\\pi/2$ are the limits of saturating signals.

In **calculus**, asymptotes are explicitly limits: vertical asymptotes are one-sided limits equal to $\\pm\\infty$, and horizontal asymptotes are limits at infinity. Learning to find asymptotes is learning to compute these limits geometrically, before working with the algebra.

The visualizer lets you build intuition by watching the dashed lines emerge from familiar functions and track sliders in real time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Limits at Infinity** — formal theory of $\\lim_{x \\to \\infty} f(x)$. Horizontal and oblique asymptotes are exactly these limits made visible.

**One-Sided Limits** — the $x \\to c^-$ and $x \\to c^+$ notation in the VA panel. Vertical asymptotes correspond to one-sided limits being $\\pm\\infty$.

**Rational Functions** — the natural home of asymptotes. Polynomial-division and degree comparisons let you find HAs and OAs algebraically; setting the denominator to zero gives VA candidates.

**Domain of a Function** — VAs always sit at points where the function is undefined, but not every undefined point is a VA (removable singularities exist). The Domain visualizer complements this one.

**Function Symmetry** — another structural property in the Function Properties group. Combined with asymptotes, symmetry pins down a function's gross shape.

**Logarithmic Functions**, **Tangent Function**, **Exponential Functions** — the elementary functions whose asymptotic behavior is foundational for everything else.

**Continuity and Discontinuity** — VAs are a specific type of essential discontinuity; the theory connects directly to limit theory.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: { title:``, content:``, before:``, after:``, link:'' },
    obj12: { title:``, content:``, before:``, after:``, link:'' },
    obj13: { title:``, content:``, before:``, after:``, link:'' },
    obj14: { title:``, content:``, before:``, after:``, link:'' },
    obj15: { title:``, content:``, before:``, after:``, link:'' },
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Asymptotes Visualizer do?",
      answer: "It plots a function alongside all of its asymptotes — verticals in red, horizontals in green, obliques in purple — and lists each one in a panel below the graph with its equation and direction information. Eleven functions are organized by asymptote type, and four transformation sliders let you watch how shifts and scales move the asymptotes in real time."
    },
    obj2: {
      question: "What is a vertical asymptote?",
      answer: "A vertical line x equals c is a vertical asymptote of a function if the function values tend to plus or minus infinity as x approaches c from at least one side. Common sources are division by zero in rational functions and domain edges where the function diverges, such as the natural logarithm at x equals zero or tangent at x equals pi over two."
    },
    obj3: {
      question: "What is a horizontal asymptote?",
      answer: "A horizontal line y equals L is a horizontal asymptote if the function values approach L as x tends to plus infinity or to minus infinity. A function can have zero, one, or two horizontal asymptotes. Arctangent has two — pi over two on the right and negative pi over two on the left. Exponential decay has only a right-side horizontal asymptote at y equals zero."
    },
    obj4: {
      question: "What is an oblique or slant asymptote?",
      answer: "An oblique asymptote is a non-horizontal line y equals m x plus b that the function approaches at infinity, meaning f of x minus the line tends to zero as x grows large. It appears in rational functions where the numerator's degree is exactly one more than the denominator's. A function has either a horizontal or an oblique asymptote on a given side, never both."
    },
    obj5: {
      question: "Can a function cross an asymptote?",
      answer: "A function can cross a horizontal or oblique asymptote in the middle of its domain — the asymptote describes only end behavior, not a barrier. It cannot cross a vertical asymptote, because the function is undefined there by construction. So vertical asymptotes act as walls; horizontal and oblique asymptotes are guidelines the curve gradually settles onto."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Function Asymptotes Visualizer",
      "description": "Interactive visualizer that detects and draws vertical, horizontal, and oblique asymptotes of common functions, with one-sided limit information at each vertical asymptote.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/asymptotes",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven functions grouped by asymptote type: vertical only, horizontal only, both, and oblique",
        "Color-coded asymptotes: red vertical, green horizontal, purple oblique",
        "Numerical detection at render time, so asymptotes track all transformations",
        "One-sided limit probes at each vertical asymptote with plus or minus infinity tags",
        "Detected asymptotes panel listing equations and direction indicators",
        "Four transformation sliders to test how shifts and scales move asymptotes",
        "Side info panel with state-specific listing and general asymptote theory"
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/functions/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Asymptotes",
          "item": "https://www.learnmathclass.com/functions/visual-tools/asymptotes"
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
        title: "Asymptotes Visualizer | Vertical, Horizontal & Oblique",
        description: "Detect and visualize vertical, horizontal, and oblique asymptotes of any function. Color-coded dashed lines, one-sided limits, and live transformation sliders.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/asymptotes",
        name: "Function Asymptotes Visualizer",
        hubDescription: "Find vertical, horizontal, and oblique asymptotes of common functions and watch them drawn as color-coded dashed lines over the curve. One-sided limit probes report whether each vertical asymptote tends to plus or minus infinity from each side, and four transformation sliders let you watch every asymptote track shifts and scales in real time.",
        category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function FunctionAsymptotesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    { id:'1',  title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'2',  title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'3',  title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'4',  title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'5',  title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'6',  title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'7',  title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'8',  title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'9',  title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Asymptotes</h1>
      <br/>
      <FunctionAsymptotes/>
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