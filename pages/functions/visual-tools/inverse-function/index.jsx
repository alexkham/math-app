// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionInverse from '../../../../app/components/functions/inverse/FunctionInverse'


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
//         url: "/functions/visual-tools/inverse-function",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Inverse Functions Visualizer/Explorer</h1>
//    <br/>
//    <FunctionInverse/>
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
import FunctionInverse from '../../../../app/components/functions/inverse/FunctionInverse'


export async function getStaticProps(){

  const keyWords = [
    'inverse functions',
    'inverse function visualizer',
    'inverse function calculator',
    'inverse function graph',
    'reflection across y = x',
    'horizontal line test',
    'one-to-one function',
    'restricted domain inverse',
    'self-inverse function',
    'inverse trig functions',
    'arcsin arccos visualizer',
    'principal branch sine cosine',
    'inverse of transformed function',
    'how to find inverse function',
    'f inverse of x',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven base functions. In the center is the **plot panel** with three curves: the function $g(x)$ in blue, its inverse $g^{-1}(x)$ in amber, and a dashed gray line $y = x$ that acts as the mirror across which $g$ and $g^{-1}$ reflect. On the right is the **info panel** with three tabs.

Below the picker sit four parameter sliders ($a$, $k$, $b$, $h$) that transform the base function. The page launches on the quadratic family — a classic example of a function that requires a restricted domain to be invertible.

Two header badges flag the current state. A yellow "**domain restricted**" badge appears for functions like quadratic, absolute value, sine, and cosine. A green "**self-inverse (at defaults)**" badge appears for functions like identity and reciprocal, which equal their own inverses when no transformation is applied.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Base Function`,
      content: `The picker lists eleven families, with sine and cosine grouped under "Trigonometric":

• Polynomial: **Identity** ($x$), **Linear (2x)**, **Cubic** ($x^3$), **Quadratic** ($x^2$)
• Algebraic: **Reciprocal** ($1/x$), **Square root** ($\\sqrt{x}$), **Absolute** ($|x|$)
• Transcendental: **Exponential** ($e^x$), **Logarithmic** ($\\ln x$)
• Trigonometric: **Sine**, **Cosine**

Functions marked with a small **R** badge in the picker are **restricted** — they fail the horizontal line test in their natural domain and need to be restricted to an invertible branch before the inverse can be defined. The visualizer shows both the full curve (faded) and the chosen branch (bold) for restricted families. The bottom of the picker spells out what R means.

Click any family to switch. Parameters reset to defaults on every switch, so you always start fresh.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Transforming the Function`,
      content: `The four sliders below the picker apply the standard affine transformations to the base function:

• **$a$ — vertical scale and reflection**
• **$k$ — vertical shift**
• **$b$ — horizontal scale and reflection**
• **$h$ — horizontal shift**

The transformed function is $g(x) = a \\cdot f(b(x - h)) + k$. The visualizer **re-derives the inverse symbolically** every time you move a slider, so $g^{-1}(x) = h + f^{-1}((x - k) / a) / b$ updates in real time. Both equations are displayed as monospace badges in the plot header.

The most important thing this slider strip teaches: transforming $f$ does not just move the inverse on the screen, it changes *which* transformations the inverse carries. A vertical scale of $f$ becomes a horizontal scale of $f^{-1}$. Vertical shifts on $f$ become horizontal shifts on $f^{-1}$. The Parameters tab in the info panel makes this explicit.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Plot`,
      content: `Up to four curves can appear in the plot at once:

• **Gray dashed line $y = x$** — the mirror line. Every point on $g$ has a mirror point on $g^{-1}$ across this line; their graphs are reflections of each other.
• **Blue solid curve — $g(x)$**. The transformed function.
• **Amber solid curve — $g^{-1}(x)$**. The inverse, drawn only where it is defined.
• **Faded blue dashed curve — $g$ full** (restricted families only). Shows the full base curve, with the bold blue curve highlighting the invertible branch.

For unrestricted families like cubic or exponential, only the three solid curves appear. For restricted families like quadratic, you see all four — the faded full parabola alongside the bold branch on $x \\geq 0$, plus the inverse $\\sqrt{x}$ in amber.

Crosshair and curve tooltips work the same as in other visualizers in the series — mouse over any curve to read off coordinates.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Applied Chip Strip and Show Toggles`,
      content: `Two horizontal strips sit below the plot.

The **Applied** strip shows four chips, one per transformation parameter. Active (non-default) parameters glow blue with their current value. At a glance, you can tell which transformations are currently changing $g$ — and therefore which mirrored transformations are affecting $g^{-1}$.

The **Show** strip below has one toggle button per curve in the plot. Click a button to hide that curve. Hiding $y = x$ removes visual clutter; hiding $g^{-1}$ lets you focus on the function alone; hiding the full faded curve focuses you on just the invertible branch. The buttons preview the curve's color and line style (solid versus dashed) and show the curve's equation in monospace.

For self-inverse functions at default parameters, $g$ and $g^{-1}$ are the same curve and overlap exactly. Toggling either off shows that they were on top of each other.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Info Panel — Three Tabs`,
      content: `The side info panel has three tabs:

• **Explanation** — reads the current state. Shows the base function and its inverse, the transformed equations, and special notes for the current family (self-inverse identity, restriction explanation for restricted families). Closes with the inverse-check identity $g(g^{-1}(x)) = x$.

• **Parameters** — explains the rule by which transformations of $f$ become transformations of $f^{-1}$. Includes a table showing each correspondence (vertical scale on $f$ becomes horizontal scale on $f^{-1}$, vertical shift becomes horizontal shift, and so on), then describes the current parameter values one by one. The most useful tab for understanding *why* the inverse changes the way it does.

• **Concepts** — general theory: reflection across $y = x$, the horizontal line test, restricted branches, the mirror identity. Independent of the current state.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is an Inverse Function?`,
      content: `The **inverse** of a function $f$ is the function $f^{-1}$ that undoes $f$: if $f(a) = b$ then $f^{-1}(b) = a$. Every input-output pair $(a, b)$ on the graph of $f$ becomes the pair $(b, a)$ on $f^{-1}$ — the coordinates swap.

Geometrically, swapping coordinates is the **reflection across the line $y = x$**. The visualizer always draws this mirror line as a dashed gray reference, and you can verify that $g$ and $g^{-1}$ are mirror images of each other across it: pick any point on the blue curve, reflect it across $y = x$, and you will land on the amber curve.

The defining identity is the composition

$$g \\circ g^{-1}(x) = x \\quad \\text{and} \\quad g^{-1} \\circ g(x) = x$$

on whichever domains both sides are defined.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Horizontal Line Test and Restricted Branches`,
      content: `Not every function has a single-valued inverse. A function $f$ is invertible only when no horizontal line crosses its graph more than once — the **horizontal line test**. If a horizontal line hits $f$ twice, two different inputs produce the same output, and the inverse would have to map one input to two outputs, which is not allowed for a function.

Functions that fail the test can still be inverted on a restricted subdomain where they are strictly monotonic:

• **Quadratic $x^2$** restricted to $[0, \\infty) \\to$ inverse is $\\sqrt{x}$
• **Absolute value $|x|$** restricted to $[0, \\infty) \\to$ inverse is the identity on $[0, \\infty)$
• **Sine** restricted to $[-\\pi/2, \\pi/2] \\to$ inverse is $\\arcsin(x)$, defined on $[-1, 1]$
• **Cosine** restricted to $[0, \\pi] \\to$ inverse is $\\arccos(x)$, defined on $[-1, 1]$

These are called **principal branches**. The visualizer shows the discarded portion as a faded curve and the kept portion as a bold curve, making the cut explicit and visible. When you transform a restricted function, the restriction boundary moves along with it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `How Transformations of $f$ Become Transformations of $f^{-1}$`,
      content: `Solving $y = a \\cdot f(b(x - h)) + k$ for $x$ gives the inverse explicitly:

$$g^{-1}(x) = h + \\frac{1}{b} \\cdot f^{-1}\\!\\left(\\frac{x - k}{a}\\right)$$

Reading the formula, each transformation on $f$ has a **mirrored** counterpart on $f^{-1}$ — when you swap axes (which is what reflecting across $y = x$ does), vertical operations become horizontal and vice versa:

• Vertical scale $a$ on $f$ becomes horizontal scale $1/a$ on $f^{-1}$
• Vertical shift $k$ on $f$ becomes horizontal shift $k$ on $f^{-1}$
• Horizontal scale $b$ on $f$ becomes vertical scale $1/b$ on $f^{-1}$
• Horizontal shift $h$ on $f$ becomes vertical shift $h$ on $f^{-1}$

This is the same as the geometric fact that reflecting across $y = x$ swaps horizontal and vertical directions. The visualizer's Parameters tab describes the active correspondences in plain English as you move the sliders, and the equation badges in the plot header show the consequence symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Functions Families Gallery** — companion gallery showing the same base functions used here, useful as a prerequisite for understanding what each family looks like before studying its inverse.

**Function Transformations** — visualizer for the four affine transformations alone, without the inverse overlay. Helpful for building intuition before adding the inverse layer here.

**Composition of Functions** — the operation behind the inverse identity $g \\circ g^{-1} = \\text{id}$. Inverses are defined precisely as compositional partners.

**One-to-One Functions** — the formal property a function must have to be invertible. Equivalent to passing the horizontal line test.

**Inverse Trigonometric Functions** — focused treatment of $\\arcsin$, $\\arccos$, $\\arctan$, and the standard principal-branch conventions used here.

**Logarithm and Exponential** — paired study of the canonical example of inverse functions, with $\\ln$ and $e^x$ as exact inverses.

**Derivative of an Inverse Function** — the rule $\\left(f^{-1}\\right)'(x) = 1 / f'(f^{-1}(x))$; a calculus follow-up to the geometric reflection studied here.`,
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
      question: "What does the Inverse Function Visualizer show?",
      answer: "It plots a function alongside its inverse, reflected across the line y = x. Pick a base function from eleven families, transform it with vertical scale, vertical shift, horizontal scale, and horizontal shift sliders, and the inverse is re-derived symbolically in real time. For functions that need a domain restriction to be invertible — quadratic, absolute value, sine, cosine — the visualizer shows the discarded portion as a faded curve and the kept invertible branch in bold."
    },
    obj2: {
      question: "What is the relationship between a function and its inverse on a graph?",
      answer: "The inverse f-inverse is the reflection of f across the line y = x. Every point (a, b) on f becomes (b, a) on f-inverse, with x and y coordinates swapped. The visualizer always draws y = x as a dashed gray mirror line so you can verify the symmetry by eye."
    },
    obj3: {
      question: "Why do some functions need a domain restriction?",
      answer: "A function has a single-valued inverse only if it passes the horizontal line test — no horizontal line crosses its graph more than once. Quadratic, absolute value, sine, and cosine all fail this test in their natural domain. Restricting them to a domain where they are strictly monotonic — for instance the right half of the parabola or the principal branch of sine — recovers invertibility."
    },
    obj4: {
      question: "What happens to the four transformation parameters under inversion?",
      answer: "Reflecting across y = x swaps horizontal and vertical directions, so vertical operations on f become horizontal operations on f-inverse and vice versa. Specifically, vertical scale a on f becomes horizontal scale 1/a on f-inverse, vertical shift k becomes horizontal shift k, horizontal scale b becomes vertical scale 1/b, and horizontal shift h becomes vertical shift h."
    },
    obj5: {
      question: "What is a self-inverse function?",
      answer: "A self-inverse function is its own inverse: f(f(x)) = x. The identity function f(x) = x and the reciprocal f(x) = 1/x are the standard examples shown in the visualizer. When such a function is at default parameters, the blue f curve and the amber f-inverse curve coincide exactly on top of each other. Applying any non-trivial transformation generally breaks the self-inverse property."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Inverse Function Visualizer",
      "description": "Interactive inverse function visualizer. Pick a base function, transform it, and watch the inverse re-derived live as a reflection across y = x.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/inverse-function",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven base function families including polynomials, exponential, logarithmic, square root, absolute value, and trigonometric",
        "Transformation sliders for vertical scale, vertical shift, horizontal scale, and horizontal shift",
        "Inverse equation re-derived symbolically in real time as parameters change",
        "Dashed y = x mirror line drawn behind every plot for direct visualization of the reflection",
        "Restricted families show both faded full curve and bold invertible branch",
        "Domain restricted and self-inverse badges flag the current state",
        "Side info panel with state explanation, parameter mapping table, and general inverse function theory"
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
          "name": "Inverse Function Visualizer",
          "item": "https://www.learnmathclass.com/functions/visual-tools/inverse-function"
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
        title: "Inverse Function Visualizer | Reflect Across y = x",
        description: "Visualize any function and its inverse as reflections across y = x. Transform the base function and watch the inverse re-derived live, with restricted branches highlighted.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/inverse-function",
        name: "Inverse Function Visualizer",
        hubDescription: "Plot any function alongside its inverse as a reflection across the line y = x. Pick a base function — linear, cubic, reciprocal, exponential, logarithmic, square root, quadratic, absolute, sine, or cosine — apply affine transformations, and watch the inverse re-derived symbolically in real time. For functions that need a domain restriction to be invertible, the discarded portion appears faded and the principal branch in bold.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function InverseFunctionVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Inverse Functions Visualizer/Explorer</h1>
      <br/>
      <FunctionInverse/>
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