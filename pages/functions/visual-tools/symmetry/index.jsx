// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionSymmetry from '../../../../app/components/functions/symmetry/FunctionSymmetry'


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
//         url: "/functions/visual-tools/symmetry",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Function Symmetry</h1>
//    <br/>
//    <FunctionSymmetry/>
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
import FunctionSymmetry from '../../../../app/components/functions/symmetry/FunctionSymmetry'


export async function getStaticProps(){

  const keyWords = [
    'function symmetry',
    'even and odd functions',
    'even function',
    'odd function',
    'symmetry visualizer',
    'f(-x) = f(x)',
    'f(-x) = -f(x)',
    'y-axis symmetry function',
    'origin symmetry function',
    'how to test even odd function',
    'function neither even nor odd',
    'symmetry of trigonometric functions',
    'symmetry of polynomial',
    'graph symmetry test',
    'mirror reflection function',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven base functions grouped by their natural symmetry — even, odd, or neither. In the center is the **plot panel** with three curves drawn on top of each other:

• $f(x)$ in **solid blue**
• $f(-x)$ in **dashed amber** (the function reflected across the y-axis)
• $-f(-x)$ in **dotted teal** (the function rotated 180° about the origin)

Below the plot sits a **verdict card** that names the symmetry — Even, Odd, or Neither — followed by a step-by-step algebraic derivation. On the right is the **info panel** with two tabs.

The page launches with quadratic. Blue and amber overlap exactly: the dashes punch through the solid line. That visual coincidence is the proof that $f(-x) = f(x)$, so the function is even.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Function`,
      content: `The picker groups eleven base functions by their natural symmetry — a deliberate teaching layout:

• **Even** ($f(-x) = f(x)$, y-axis mirror) — Quadratic $x^2$, Absolute $|x|$, Cosine
• **Odd** ($f(-x) = -f(x)$, origin rotation) — Identity $x$, Cubic $x^3$, Sine, Reciprocal $1/x$
• **Neither** — Square root, Exponential, Logarithmic, $x^2 + x$

The Neither group is instructive on its own. Square root and logarithm fail the comparison because they are not defined for negative inputs; exponential because $e^{-x} = 1/e^x$ is neither equal to $e^x$ nor to $-e^x$; and $x^2 + x$ is the classic example of a polynomial with mixed-parity terms.

Click any entry to switch. Transformation parameters reset to defaults on every switch. The current verdict can differ from the group label once sliders are moved — that is the central point of the tool.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Three Curves and What Overlaps Mean`,
      content: `The visual proof rests on a simple idea: a function has a symmetry exactly when two of the three plotted curves coincide.

• **$f(x)$ and $f(-x)$ overlap** $\\iff$ $f(-x) = f(x)$ $\\iff$ **even**. The dashed amber line punches through the solid blue.
• **$f(x)$ and $-f(-x)$ overlap** $\\iff$ $-f(-x) = f(x)$, equivalently $f(-x) = -f(x)$ $\\iff$ **odd**. The dotted teal punches through the solid blue.
• **No overlaps** $\\iff$ **neither**.

The three curves use deliberately distinct stroke patterns — solid, long-dash, fine-dot — so overlapping curves remain visually distinguishable as two separate lines rather than collapsing into one. Even when the geometric coincidence is exact, you can still see both curves at the overlap, which makes the visual evidence trustworthy.

A legend in the sidebar lets you toggle any of the three curves off if you want to inspect them individually.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Verdict Card`,
      content: `Below the plot, a card displays the **verdict** — Even, Odd, or Neither — in large monospace, color-coded:

• **Even** in blue, with the blurb "symmetric across the y-axis"
• **Odd** in teal, with "symmetric about the origin"
• **Neither** in gray, with "no symmetry detected"

The verdict is computed at runtime by sampling the function and checking whether $f(x) - f(-x) \\approx 0$ everywhere (even) or $f(x) + f(-x) \\approx 0$ everywhere (odd). It always reflects the current state — so if you transform an even base function with a nonzero horizontal shift, the verdict immediately changes to Neither, even though the base family is listed under Even in the picker.

The card's border color, header text, and accent badges all derive from the current verdict color, so the entire card reads as one coordinated visual signal of the function's current symmetry status.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Derivation Block`,
      content: `Inside the verdict card, a three-step algebraic derivation walks through the symmetry test for the base function:

1. **State $f(x)$** — the canonical form, e.g., $f(x) = x^2$
2. **Substitute $-x$** — perform the substitution and simplify, e.g., $f(-x) = (-x)^2 = x^2$
3. **Compare** — state the conclusion in plain algebra, e.g., $f(-x) = x^2 = f(x)$, so $f$ is even

This is the same hand-derivation a student would do on paper, written in monospace so the substitution steps line up neatly. Each family in the picker comes with its own per-step strings, so the derivation is specific to the function you have selected rather than generic.

When you transform the function with sliders and the verdict changes from the base symmetry, a small note appears at the bottom of the derivation block: "The base function is *odd*, but the transformation broke the symmetry. The runtime verdict on $g(x)$ is *neither*." The derivation always describes the base; the verdict always describes the current state.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Intersection Markers`,
      content: `Purple dots in the plot mark the points where $f(x)$ and $f(-x)$ cross. Their meaning depends on the verdict:

• **Even** — the curves coincide everywhere, so the "intersection" is the entire curve. No dots appear; the visual evidence is the dashed line covering the solid line.
• **Odd** — $f(x) = f(-x)$ together with $f(-x) = -f(x)$ forces $f(x) = 0$ wherever the two curves cross. The purple dots therefore mark the **zeros** of $f$ — a beautiful, non-obvious consequence of odd symmetry.
• **Neither** — the dots simply mark wherever the function and its y-mirror happen to meet, without any deeper structural meaning.

Below the verdict card, a small strip lists the intersection points with their coordinates. For odd functions like $x^3$ or $\\sin x$, this strip becomes a list of zeros — a useful by-product of the symmetry visualization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Transforming and Breaking Symmetry`,
      content: `Below the family picker, four sliders apply the affine transformations:

• **$a$ — vertical scale** (preserves both even and odd symmetry)
• **$k$ — vertical shift** (breaks odd symmetry; preserves even)
• **$b$ — horizontal scale** (preserves both)
• **$h$ — horizontal shift** (breaks even symmetry; preserves odd only if it didn't have any)

Watch what happens. Start on the even quadratic with default parameters — blue and amber overlap, verdict reads Even. Drag $h$ to $+1$ — the parabola shifts right, the mirror axis of symmetry slides off the y-axis to $x = 1$, but $f(-x)$ still mirrors across $x = 0$. The two curves no longer coincide. The verdict immediately flips to Neither.

Now switch to the odd cubic. Drag $k$ to $+2$ — the curve lifts vertically. The 180° rotation now centers on $(0, 2)$ instead of the origin, so it no longer matches the origin-centered $-f(-x)$. Verdict flips to Neither. Set $k = 0$, then drag $a$ to $-1$ — odd symmetry is preserved because flipping odd produces another odd function. The verdict stays Odd.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Even and Odd Mean`,
      content: `An **even** function satisfies $f(-x) = f(x)$ for every $x$ in its domain. Geometrically, folding the graph along the y-axis lands it exactly on itself. The y-axis is a mirror.

Classic examples: $x^2$, $x^4$, $|x|$, $\\cos x$, and more generally any polynomial whose terms all have even exponents.

An **odd** function satisfies $f(-x) = -f(x)$. Geometrically, rotating the graph 180° about the origin lands it on itself. Equivalently, the graph is symmetric under combined reflection across both the x- and y-axes.

Classic examples: $x$, $x^3$, $\\sin x$, $\\tan x$, $1/x$, and any polynomial with only odd-exponent terms. Note that every odd function defined at $x = 0$ must satisfy $f(0) = -f(0)$, forcing $f(0) = 0$. Odd graphs always pass through the origin.

Most functions are **neither** even nor odd. The y-axis mirror and the origin rotation both land the graph somewhere new. This is the default state; even and odd are special properties only specific families have.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Transformations Break Symmetry`,
      content: `Symmetry is a property of the function relative to specific axes — the y-axis for even, the origin for odd. Transformations move those axes around, and the symmetry breaks unless the transformation respects them.

Concretely, for $g(x) = a \\cdot f(b(x - h)) + k$:

• **$h \\ne 0$** shifts the input axis. For an even base function whose mirror was the y-axis, the new mirror is now the line $x = h$. The curve is still symmetric, but not across $x = 0$, so $g(-x) \\ne g(x)$ in general.

• **$k \\ne 0$** shifts every output. For an odd base function whose rotation center was the origin, the new rotation center is $(0, k)$. The graph is still 180°-symmetric, but about a point that is not the origin, so $g(-x) \\ne -g(x)$ in general.

• **$a$ and $b$ rescale** but do not move the axes. An even function flipped or rescaled vertically remains even (multiplying outputs preserves $f(-x) = f(x)$); an odd function rescaled or reflected remains odd.

The runtime verdict captures all of this automatically. You can use the sliders as a quick exploration of which transformations preserve which symmetries.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Even and Odd Functions** — formal theory page covering definitions, proofs, sum and product rules for even and odd functions, and Fourier-series connections.

**Function Transformations** — visualizer for $a$, $k$, $b$, $h$ alone, useful for separating the effects of each parameter before bringing symmetry on top.

**Domain of a Function** and **Range of a Function** — companion visualizers in the same Function Properties group; together they characterize a function's structural features.

**Reflections** — geometric operations on graphs; even and odd are the two special cases where a reflection or rotation lands the graph on itself.

**Periodic Functions** — a different kind of symmetry: $f(x + T) = f(x)$ for some period $T$. Sine and cosine are both periodic *and* have parity symmetry; most periodic functions only have one or the other.

**Inverse Functions** — graph reflection across the line $y = x$; another kind of symmetric relationship between two functions, though strictly speaking not a symmetry of one graph alone.

**Trigonometric Identities** — the identities $\\sin(-x) = -\\sin(x)$ and $\\cos(-x) = \\cos(x)$ are exactly the parity statements visualized here, written algebraically.`,
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
      question: "What does the Function Symmetry Visualizer do?",
      answer: "It plots three curves on one graph — the function f(x), its y-axis reflection f(-x), and its origin rotation -f(-x) — and detects whether any of them coincide. When f(x) overlaps with f(-x), the function is even. When f(x) overlaps with -f(-x), the function is odd. When none overlap, the function is neither. A verdict card below the plot states the result and walks through the algebraic derivation."
    },
    obj2: {
      question: "What is an even function?",
      answer: "A function is even when f(-x) = f(x) for every x in its domain. Geometrically, the graph is symmetric across the y-axis — folding the plane along the y-axis lands the graph exactly on itself. Classic examples include x squared, the absolute value function, cosine, and any polynomial whose terms all have even exponents."
    },
    obj3: {
      question: "What is an odd function?",
      answer: "A function is odd when f(-x) = -f(x). Geometrically, the graph is symmetric about the origin — rotating it 180 degrees around the origin lands it back on itself. Classic examples include x, x cubed, sine, tangent, and the reciprocal function. Every odd function defined at zero must pass through the origin, since f(0) must equal -f(0)."
    },
    obj4: {
      question: "How do transformations affect symmetry?",
      answer: "Vertical and horizontal scaling preserve whatever symmetry the base function had. Horizontal shifts h break even symmetry because they move the mirror axis off the y-axis. Vertical shifts k break odd symmetry because they move the rotation center off the origin. The visualizer detects the symmetry of the transformed function at runtime, so the verdict can disagree with the family group when sliders break the symmetry."
    },
    obj5: {
      question: "What do the purple dots in the plot mean?",
      answer: "They mark the points where f(x) and f(-x) cross. For odd functions these are the zeros of f — because if f(x) = f(-x) at a point and also f(-x) = -f(x), then f(x) = 0 there. For even functions the entire curve coincides and no dots appear. For neither functions the dots simply mark wherever the function and its y-mirror happen to meet."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Function Symmetry Visualizer",
      "description": "Interactive visualizer for even, odd, and neither function symmetry. Plots f(x), f(-x), and -f(-x) together and detects which curves coincide.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/symmetry",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven base functions grouped by natural symmetry: even, odd, and neither",
        "Three coordinated curves: f(x), f(-x), and -f(-x) with distinct stroke patterns",
        "Color-coded verdict card showing even, odd, or neither in real time",
        "Step-by-step algebraic derivation specific to each base function",
        "Runtime symmetry detection on the transformed function, not just the base",
        "Purple intersection markers showing where f(x) and f(-x) cross",
        "Four transformation sliders illustrating how shifts break symmetry",
        "Side info panel with state explanation and general parity theory"
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
          "name": "Function Symmetry",
          "item": "https://www.learnmathclass.com/functions/visual-tools/symmetry"
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
        title: "Function Symmetry Visualizer | Even, Odd, or Neither",
        description: "Plot f(x), f(-x), and -f(-x) together to see whether a function is even, odd, or neither. Watch transformations break symmetry in real time.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/symmetry",
        name: "Function Symmetry Visualizer",
        hubDescription: "See whether any function is even, odd, or neither by plotting f(x) alongside its y-axis reflection f(-x) and its origin rotation -f(-x) on one graph. Overlapping curves prove the symmetry visually, a color-coded verdict card states the result, and a step-by-step algebraic derivation walks through the test. Transformation sliders let you watch shifts break even or odd symmetry in real time.",
        category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function FunctionSymmetryPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Function Symmetry</h1>
      <br/>
      <FunctionSymmetry/>
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