// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionComposition from '../../../../app/components/functions/compositions/FunctionCompositions'


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
//         url: "/functions/visual-tools/composition",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Composition of Functions</h1>
//    <br/>
//    <FunctionComposition/>
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
import FunctionComposition from '../../../../app/components/functions/compositions/FunctionCompositions'


export async function getStaticProps(){

  const keyWords = [
    'function composition',
    'composition of functions',
    'f of g of x',
    'f composed with g',
    'function composition visualizer',
    'composite function calculator',
    'inner and outer function',
    'how to compose functions',
    'order of composition',
    'non-commutative composition',
    'f circle g',
    'g circle f',
    'inverse function composition',
    'identity function composition',
    'visualize composite functions',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left, the **picker** is split into two halves: **Outer ($f$)** at the top and **Inner ($g$)** below. Each lists ten base functions. In the center, the **plot panel** shows up to four curves:

• **$f \\circ g$** in solid blue — the composition $f(g(x))$
• **$g \\circ f$** in solid amber — the composition $g(f(x))$
• **$f$** in dashed gray (off by default) — outer alone, for reference
• **$g$** in dashed teal (off by default) — inner alone, for reference

A **legend chip strip** below the plot lets you toggle any curve. By default only the two compositions are shown, so the asymmetry between $f \\circ g$ and $g \\circ f$ is the visual focus. On the right, the **info panel** shows the symbolic forms of both compositions and explains why the order matters for this specific pair.

The page launches with $f(x) = x^2$ and $g(x) = \\sin(x)$. You see $f(g(x)) = \\sin^2(x)$ in blue and $g(f(x)) = \\sin(x^2)$ in amber — clearly two different curves built from the same two ingredients.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking Outer and Inner Functions`,
      content: `Two independent pickers control the composition:

• **Outer ($f$)** — the function applied **second**. Highlighted in **gray** when active. This is the function you eventually feed the result into.
• **Inner ($g$)** — the function applied **first**. Highlighted in **teal** when active. This is what processes $x$ before $f$ sees it.

Ten functions are available on each side: identity, quadratic $x^2$, cubic $x^3$, reciprocal $1/x$, exponential $e^x$, logarithm $\\ln(x)$, sine, cosine, absolute value $|x|$, and square root $\\sqrt{x}$.

You can pick **the same function for both sides**, in which case $f \\circ g = g \\circ f$ trivially and you see one curve doubled. Most pairs produce two distinctly different curves — that's the point. The picker uses **color** to signal which side you're choosing for: gray dot = outer, teal dot = inner.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Legend Chips`,
      content: `Below the plot, four colored chips correspond to the four available curves:

• **$f$** — gray chip showing $f$'s equation. Off by default.
• **$g$** — teal chip showing $g$'s equation. Off by default.
• **$f \\circ g$** — blue chip showing the composed expression $f(g(x))$. On by default.
• **$g \\circ f$** — amber chip showing $g(f(x))$. On by default.

Click any chip to toggle that curve's visibility. The chip dims and the curve disappears.

The chip text updates live with the symbolic expression. With outer = $\\sqrt{x}$ and inner = $x^2$, the $f \\circ g$ chip reads "$\\sqrt{(x)^2}$" and the $g \\circ f$ chip reads "$(\\sqrt{x})^2$" — visibly different expressions even though they look similar at a glance. Algebraically the first simplifies to $|x|$ and the second to $x$ (for $x \\geq 0$), which the plot then confirms.

Toggling the underlying functions $f$ and $g$ on lets you see directly how each composed curve relates to its ingredients.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Why Order Matters`,
      content: `Function composition is **not commutative** — in general, $f \\circ g \\ne g \\circ f$. The two compositions evaluate the same two functions but in opposite orders, and the resulting outputs are usually completely different.

Concrete example with $f(x) = x^2$ and $g(x) = x + 1$:

• $f(g(x)) = (x + 1)^2 = x^2 + 2x + 1$ — square first the shifted value
• $g(f(x)) = x^2 + 1$ — add 1 to the squared value

Plotting both, $f \\circ g$ is a parabola shifted left by 1, while $g \\circ f$ is a parabola shifted up by 1. Same two functions, two very different graphs.

The plot makes this asymmetry the **main visual story**: by hiding $f$ and $g$ by default and showing the two compositions side-by-side, the page foregrounds exactly how much the order changes the result. Swap which function you pick for outer vs inner — the blue and amber curves swap roles.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Special Cases the Tool Highlights`,
      content: `The info panel watches the current pair and surfaces noteworthy combinations:

• **Same function on both sides** — $f \\circ g = g \\circ f$ trivially. The blue and amber curves coincide exactly.

• **Identity as outer** — $f(g(x)) = g(x)$. The composition is just $g$ unchanged. Useful to see that the identity function $f(x) = x$ acts as the neutral element for composition.

• **Identity as inner** — $g(f(x)) = f(x)$. Symmetric to the above.

• **Exponential and logarithm** — these are **inverse** functions. The info panel flags this: $e^{\\ln x} = x$ for $x > 0$, and $\\ln(e^x) = x$ for all real $x$. Both compositions collapse to (a restricted) identity. The plot shows two straight lines along $y = x$ — the visual signature of an inverse pair.

• **Square root and quadratic** — a classic asymmetric pair: $\\sqrt{x^2} = |x|$ (defined for all $x$, V-shaped), while $(\\sqrt{x})^2 = x$ (defined only for $x \\geq 0$). The two compositions are different graphs, illustrating that even when one composition simplifies cleanly, the reverse may not.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Domain Restrictions in Composition`,
      content: `Composition can create domain restrictions that neither original function had. The visualizer surfaces these naturally — wherever the composed value is undefined, the curve simply disappears from the plot.

Patterns to watch for:

• **Inner produces values outside outer's domain** — pick $g(x) = x^2 - 4$ (always non-negative or negative for $|x| < 2$) and $f(x) = \\ln(x)$ (needs positive input). The composition $\\ln(x^2 - 4)$ is defined only where $x^2 - 4 > 0$, i.e., $|x| > 2$. The blue curve has a gap in the middle.

• **Outer expands the visible domain via even powers** — $\\sqrt{x^2}$ is defined for all $x$ because $x^2 \\geq 0$ always, even though $\\sqrt{x}$ alone needs $x \\geq 0$. The composed domain is broader than the outer function's natural domain.

• **Reciprocal in the inner** — $1/x$ has a singularity at $0$; any composition with $1/x$ as inner has a vertical asymptote at $x = 0$, no matter what the outer function is.

These domain effects often determine whether the two composition orders look anywhere near each other.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Composition Notation`,
      content: `Two equivalent notations appear throughout the visualizer:

• **Function-of-function**: $f(g(x))$ — read "$f$ of $g$ of $x$". The outermost function is the last to act; you evaluate inside-out.
• **Circle notation**: $(f \\circ g)(x)$ — read "$f$ composed with $g$ of $x$" or "$f$ ring $g$". Same meaning. The $\\circ$ symbol is the **composition operator**.

The order in $f \\circ g$ is read **right-to-left as inputs flow left-to-right**: $g$ is applied first (it sits next to the $x$), then $f$ wraps around. Many students initially read this backwards. The picker labels "Outer ($f$)" and "Inner ($g$)" reinforce the correct mental model: outer = applied second, inner = applied first.

In the chip strip, both forms appear: the chip label uses circle notation ($f \\circ g$) while the formula uses the equivalent function-of-function form built from the actual expressions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is Function Composition?`,
      content: `**Composition** takes two functions $f$ and $g$ and builds a new function by chaining them: the output of one becomes the input of the other. Formally, $(f \\circ g)(x) = f(g(x))$ for every $x$ in the domain of $g$ for which $g(x)$ lies in the domain of $f$.

Geometrically, composition is a **two-step pipeline**:
1. Feed $x$ into $g$, producing the intermediate value $g(x)$.
2. Feed that intermediate value into $f$, producing the final value $f(g(x))$.

The result is itself a function — call it $h(x) = f(g(x))$ — that you can graph, differentiate, integrate, or further compose. Most "complicated" functions you meet in calculus are compositions of simpler ones: $\\sin(x^2)$ is sine composed with squaring; $e^{-x^2/2}$ is exponential composed with negative-half-square.

Composition is the natural way to **build up** functions from a small library of primitives, which is why it appears in nearly every later topic: chain rule, inverse functions, change of variables, transformations, and more.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Composition Matters`,
      content: `Composition is the **operation** by which simple functions combine into complex ones. Three big places it shows up:

• **Chain rule in calculus** — to differentiate $h(x) = f(g(x))$, the chain rule gives $h'(x) = f'(g(x)) \\cdot g'(x)$. Every nested derivative computation is a composition unpacking. Without understanding composition, the chain rule looks arbitrary; with it, the rule is just "apply the derivative-of-pipeline rule."

• **Inverse functions** — a function $f^{-1}$ is the inverse of $f$ precisely when $f \\circ f^{-1} = f^{-1} \\circ f = \\text{id}$, the identity. Composition is the operation that defines what "inverse" means.

• **Function transformations** — the standard transformation $g(x) = a \\cdot f(b(x - h)) + k$ is a composition of $f$ with the affine function $bx - bh$, then composed with another affine function $ay + k$. Every transformation visualizer is implicitly working with composition.

Beyond these, composition is the algebraic backbone of category theory, group theory, and most of abstract mathematics. Mastering it visually here pays off broadly.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Inverse Functions** — the special case of composition where $f \\circ g = g \\circ f = \\text{id}$. The companion visualizer plots $f$ and $f^{-1}$ together with the $y = x$ mirror line.

**Function Transformations** — visualizer for the affine composition pattern $a \\cdot f(b(x-h)) + k$. Composition with $bx - bh$ on the inside and $ay + k$ on the outside.

**Chain Rule** — calculus theory for differentiating compositions. Reads directly from the inner-outer structure the picker exposes.

**Function Types** — the catalog of base function families used as building blocks. Every entry in the picker comes from this catalog.

**Domain of a Function** — composed functions often have restricted domains that neither original function had. The Domain visualizer helps reason about these restrictions.

**Function Symmetry** — composing two even functions stays even; composing two odd functions stays odd; mixed compositions may break both. A nice cross-cutting exercise.

**Trigonometric Identities** — many trig identities are statements about specific compositions: $\\sin^2 + \\cos^2 = 1$, double-angle formulas involve compositions of trig with doubling.

**Polynomial Functions** — the closure of polynomials under composition is the foundation of polynomial algebra.`,
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
      question: "What does the Function Composition Visualizer do?",
      answer: "It plots both compositions of two chosen functions on the same graph — f composed with g in blue and g composed with f in amber — so you can see how the order changes the result. Ten base functions are available for each role, the outer f and the inner g, and the info panel shows the symbolic forms of both compositions side by side."
    },
    obj2: {
      question: "What is function composition?",
      answer: "Function composition takes two functions f and g and builds a new function by chaining them: feed x into g, then feed the result into f. The composed function is written f of g of x, or in circle notation f circle g of x. It is defined wherever g's output lies in f's domain."
    },
    obj3: {
      question: "Is function composition commutative?",
      answer: "No. In general f composed with g is not equal to g composed with f. The order in which you apply the two functions matters because the intermediate value passed between them is different. The visualizer foregrounds this by drawing both compositions on the same plot as two visually distinct curves."
    },
    obj4: {
      question: "How do I read f of g of x correctly?",
      answer: "Read it inside-out: g acts on x first, producing g of x; then f acts on that result. In the circle notation f circle g, the function next to the x — that is g — is applied first, and f wraps around the outside. The picker labels Outer and Inner reinforce this: outer is applied second, inner is applied first."
    },
    obj5: {
      question: "When does composition simplify?",
      answer: "Composition simplifies dramatically for inverse pairs — for example exponential and logarithm collapse to the identity. With the identity function on either side, the composition equals the other function. Same function on both sides makes the two compositions equal trivially. The visualizer flags these special cases automatically in the info panel."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Function Composition Visualizer",
      "description": "Interactive visualizer that plots both compositions f of g and g of f for any two chosen functions on the same graph, illustrating why composition is not commutative.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/composition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two independent pickers for outer f and inner g, each with ten base functions",
        "Four curves available: f, g, f composed with g, and g composed with f",
        "Toggleable legend chips for each curve",
        "Live symbolic expressions of both compositions",
        "Automatic notes for special pairs: identity, inverses, same-function cases",
        "Side info panel with explanation and reading guide for composition notation"
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
          "name": "Composition of Functions",
          "item": "https://www.learnmathclass.com/functions/visual-tools/composition"
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
        title: "Function Composition Visualizer | f∘g vs g∘f",
        description: "Plot both compositions of any two functions on the same graph. See why f composed with g and g composed with f are usually two very different curves.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/composition",
        name: "Function Composition Visualizer",
        hubDescription: "Pick an outer function f and an inner function g from ten base families to see both compositions plotted on the same graph — f composed with g in blue, g composed with f in amber. The visual contrast makes it immediate that composition is not commutative, while live symbolic expressions and special-case notes for identity and inverse pairs build the intuition behind f of g of x.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function FunctionCompositionPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Composition of Functions</h1>
      <br/>
      <FunctionComposition/>
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