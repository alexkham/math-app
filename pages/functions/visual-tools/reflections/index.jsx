// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionReflections from '../../../../app/components/functions/reflections/FunctionReflections'


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
//         url: "/functions/visual-tools/reflections",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'30px'}}>Function Reflections</h1>
//    <br/>
//    <div style={{transform:'scale(1.1)'}}>
//   <FunctionReflections/>
//   </div>
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
// Canonical per-reflection explanations live in getStaticProps below (SSR/SEO-visible);
// the component's built-in REFLECTIONS bodies remain only as a legacy fallback.
import FunctionReflections from '../../../../app/components/functions/reflections/FunctionReflections'
import reflectionsDiagrams from '../../../../app/components/functions/reflections/functionReflectionsDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'function reflections',
    'reflection of a function',
    'reflect across x-axis',
    'reflect across y-axis',
    'reflect across y = x',
    'inverse function reflection',
    '|f(x)| graph',
    'f(|x|) graph',
    'function symmetry',
    'even function',
    'odd function',
    'mirror function',
    'graph transformation reflection',
    'function reflection visualizer',
    'interactive reflection tool',
  ]


  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Reflection** — A geometric transformation that produces the mirror image of a curve across a chosen axis or line.

**Axis of reflection** — The line that acts as the mirror. Every point of the original is mapped to a partner the same perpendicular distance on the opposite side.

**Even function** — A function satisfying $f(-x) = f(x)$. Its graph is unchanged by the y-axis reflection.

**Odd function** — A function satisfying $f(-x) = -f(x)$. Its graph is unchanged by a $180°$ rotation about the origin.

**One-to-one** — A function where every output corresponds to exactly one input. Only one-to-one functions have inverses that are themselves functions.

**Inverse function** — The reflection of $f$ across the line $y = x$. Written $f^{-1}$, it satisfies $f^{-1}(f(x)) = x$.

**Fixed point** — A point that does not move under a transformation. For reflection across an axis, fixed points are those already sitting on the axis.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The visualizer has three columns. On the left is the **base function picker** with ten families. In the center sits the **plot** with the original curve $f$ in slate gray and the reflected curve $g$ in blue. On the right are the **explanation panel** and the **reflection tab strip** with seven tabs.

The page launches with the quadratic as base and the x-axis reflection active, so $g(x) = -x^2$ appears as the upside-down parabola.

To explore, click a different base in the left column or pick a different reflection tab on the right. Equation badges above the plot rewrite to match. Tabs whose reflection has no parameters apply instantly; the y = c and x = c tabs expose a slider for the line offset $c$, which you can drag, animate, or step through.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Choosing a Base Function`,
      content: `The left column lists ten common function families, with sine and cosine grouped under Trigonometric. Each entry shows a small glyph of the family&apos;s characteristic shape next to its name.

Click any family to load it as the new $f$. The plot redraws with the original curve and the reflected curve, the equation badges update, and the explanation panel rewrites its "Applied to" section to describe what the current reflection does to this specific family.

Some families have **symmetry properties** that make certain reflections trivial — reflecting an even function across the y-axis leaves it unchanged, for example, and the explanation panel calls this out explicitly. Other families have **restricted domains** — the square root and the logarithm only exist for positive inputs — and reflections that flip the input swap the domain to the other side of the y-axis.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Seven Reflection Tabs`,
      content: `Seven tabs on the right control which reflection applies to the current base.

- [x-axis](!#reflection-across-the-x-axis) ($g(x) = -f(x)$) — flips the curve upside down through the x-axis
- [y-axis](!#reflection-across-the-y-axis) ($g(x) = f(-x)$) — mirrors the curve left to right across the y-axis
- [y = x](!#reflection-across-the-line-y-x) — swaps $x$ and $y$ coordinates; produces the inverse function, or all branches if $f$ is not one-to-one
- [y = c](!#reflection-across-a-horizontal-line) ($g(x) = 2c - f(x)$) — mirrors across a horizontal line; the slider controls $c$
- [x = c](!#reflection-across-a-vertical-line) ($g(x) = f(2c - x)$) — mirrors across a vertical line; the slider controls $c$
- [|f|](!#output-reflection-fx) ($g(x) = |f(x)|$) — partial reflection: flips only the parts of $f$ below the x-axis
- [f(|x|)](!#input-reflection-fx) ($g(x) = f(|x|)$) — replaces the left half of $f$ with a mirror of the right half

Hover any tab to see its formula and a one-line description in a tooltip.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Parameter Tabs: y = c and x = c`,
      content: `The y = c and x = c tabs each expose a slider controlling the line offset $c$. Values range from $-6$ to $6$ in steps of $0.1$, with a default of $c = 1$.

For **y = c**, the axis of reflection is the horizontal line $y = c$, drawn in orange on the plot. Each point $(x, y)$ of $f$ maps to $(x, 2c - y)$, the same vertical distance from the line but on the opposite side. When $c = 0$, the result coincides with the x-axis reflection.

For **x = c**, the axis is the vertical line $x = c$, marked by an orange band on the plot. Each point $(x, y)$ maps to $(2c - x, y)$ — same height, mirrored left-right. When $c = 0$, the result coincides with the y-axis reflection.

Slider values appear in a small monospace badge on the tab. A Reset button restores the default $c = 1$ for the active tab without disturbing the other.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Manual vs Auto Mode`,
      content: `The y = c and x = c tabs include a **Manual / Auto** toggle.

In **Manual** mode (default), drag the slider yourself. Each drag updates the reflection in real time.

In **Auto** mode, the slider becomes a playback target. A play/pause button starts the animation: $c$ sweeps from minimum to maximum and back, ping-ponging indefinitely. Step backward and step forward buttons let you advance one increment at a time.

Below the play controls, a **Speed selector** offers four presets: $0.5\\times$, $1\\times$, $2\\times$, and $4\\times$. Slower speeds are best for inspecting how the reflected curve aligns with the axis at specific values of $c$; faster speeds let you sweep through the full range quickly to see the global pattern.

Auto mode is the fastest way to watch the line of reflection slide and see exactly how the reflected curve tracks the change.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The y = x Reflection and Multivalued Inverses`,
      content: `The y = x tab swaps the roles of $x$ and $y$, mapping each point $(x, y)$ of $f$ to $(y, x)$.

For **one-to-one** functions — linear, cubic, reciprocal, exponential, logarithmic, and square root in this set — the reflection is itself a function: the **inverse** $f^{-1}$. The two curves form a perfect mirror image across the orange diagonal.

For functions that are **not one-to-one**, the reflection is **multivalued** — a single $x$ can correspond to multiple $y$ values. The visualizer plots **all branches** of the reflection:

- **Quadratic** $\\to \\pm\\sqrt{x}$ — two branches forming a sideways parabola
- **Absolute value** $\\to \\pm x$ for $x \\geq 0$ — two rays forming a sideways V
- **Sine** $\\to \\arcsin(x) + 2\\pi k$ and $\\pi - \\arcsin(x) + 2\\pi k$ — many periodic branches
- **Cosine** $\\to \\pm\\arccos(x) + 2\\pi k$ — many periodic branches

To get a single-valued inverse from one of these, you must restrict $f$ to a **principal branch** before reflecting.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Partial Reflections: |f(x)| and f(|x|)`,
      content: `Two tabs perform reflections that affect only part of the graph.

**|f(x)|** keeps the portion of $f$ that sits on or above the x-axis and flips the portion below up. The roots of $f$ become **corners** of $|f|$ — the curve touches the x-axis and bounces. Applied to the quadratic, $|f|$ has no effect (the parabola is already non-negative). Applied to the cubic or to sine, the negative arches flip into matching positive ones.

**f(|x|)** uses the right half of $f$ for both sides. For $x \\geq 0$, $g(x) = f(x)$ unchanged. For $x < 0$, $g(x) = f(-x)$ — the right half mirrored over. The result is **always even**, no matter what $f$ is.

The two are easy to confuse. The mnemonic: **outer absolute value** acts on outputs (flips below up); **inner absolute value** acts on inputs (mirrors the right onto the left).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What is a Reflection?`,
      content: `A **reflection** of a function $f$ across a chosen axis or line produces a new function $g$ whose graph is the mirror image of $f$ across that axis. The defining property is that every point of $f$ has a partner on $g$ at the same perpendicular distance from the axis, on the opposite side.

The standard reflections fall into three groups:

- **Axis reflections** — across the x-axis ($g(x) = -f(x)$) or the y-axis ($g(x) = f(-x)$)
- **Line reflections** — across any horizontal line $y = c$, vertical line $x = c$, or the diagonal $y = x$
- **Partial or piecewise reflections** — $|f(x)|$ and $f(|x|)$, which only affect part of the graph

All reflections are **isometries** in the plane: they preserve distances, so the shape of $f$ is preserved and only its orientation changes. For a deeper treatment of reflections as rigid motions, see the **geometric transformations page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Reflections, Symmetry, and Function Types`,
      content: `Reflections are tied to **symmetry properties** of functions.

A function is **even** when $f(-x) = f(x)$ — its graph is symmetric about the y-axis. Equivalently, the y-axis reflection of an even function is identical to the function itself. Examples: $x^2$, $|x|$, $\\cos x$.

A function is **odd** when $f(-x) = -f(x)$ — its graph has $180°$ rotational symmetry about the origin. The y-axis reflection of an odd function gives the same result as the x-axis reflection. Examples: $x$, $x^3$, $\\sin x$, $1/x$.

A function is **one-to-one** when each output corresponds to exactly one input. The y = x reflection of a one-to-one function is itself a function — the **inverse**. Without one-to-one-ness, the reflection across $y = x$ is multivalued.

These symmetries are encoded in the visualizer&apos;s explanation panel, which recognizes the active base&apos;s type and adapts the "applied" notes accordingly.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Function Transformations** — the companion visualizer for shifts and scales: $g(x) = a \\cdot f(b(x - h)) + k$. Reflections are the special case where $a = -1$ or $b = -1$.

**Inverse Functions** — the formal theory of $f^{-1}$, when it exists, and how to compute it analytically.

**Even and Odd Functions** — full treatment of the two main symmetry types and their consequences for integration and Fourier series.

**Composition of Functions** — how multiple reflections can be chained (two reflections in a row give a rotation or translation).

**Parent Functions** — the canonical untransformed members of each family used as the base here.

**Absolute Value Function** — the specific function $|x|$, whose graph appears in both the $|f(x)|$ and $f(|x|)$ partial reflections.

**Symmetry in Geometry** — broader perspective on reflection as a geometric operation, beyond functions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Reflection Across the X-Axis`,
      content: `The simplest flip: $g(x) = -f(x)$ negates every output, turning the whole curve upside down through the x-axis.`,
      before: ``,
      after: `Everything on the axis stays put — roots of $f$ are fixed points of this reflection, which is why the frozen parabola and its flipped twin pinch together exactly at the origin. Above and below simply trade places: maxima become minima, valleys become peaks.

For odd functions the x-axis flip coincides with the [y-axis flip](!#reflection-across-the-y-axis) — one of the identities the [symmetry section](!#reflections-symmetry-and-function-types) collects.

This reflection is also the $c = 0$ special case of the [horizontal-line family](!#reflection-across-a-horizontal-line), the first rung of a whole ladder of mirrors.`,
      link: '',
    },
    obj12: {
      title: `Reflection Across the Y-Axis`,
      content: `The left-right mirror: $g(x) = f(-x)$ negates every input, so the curve's left and right halves swap sides.`,
      before: ``,
      after: `The frozen square root makes the move unmistakable: $\\sqrt{x}$ lives on the right half-line, and $\\sqrt{-x}$ lives entirely on the left — the reflection relocated the **domain** itself, not just the shape.

Even functions are invisible to this mirror: $x^2$, $|x|$, and $\\cos x$ map onto themselves, which is precisely what "even" means. Odd functions land on their own [x-axis reflection](!#reflection-across-the-x-axis) instead.

Input-side and output-side negation are the two atoms of reflection; every other tab combines or restricts them.`,
      link: '',
    },
    obj13: {
      title: `Reflection Across the Line y = x`,
      content: `The diagonal mirror swaps coordinates outright: every point $(x, y)$ of $f$ becomes $(y, x)$ — the reflection that manufactures inverse functions.`,
      before: ``,
      after: `The frozen parabola shows the catch: reflecting $x^2$ produces the sideways parabola $x = y^2$, whose two branches $\\pm\\sqrt{x}$ stack two outputs over each input. The reflection of a graph is always a **set** of points — it is a **function** only when $f$ was one-to-one.

That is the [horizontal line test](!#the-y-x-reflection-and-multivalued-inverses) seen geometrically: horizontal lines through $f$ become vertical lines through the reflection, and multiple crossings become multiple branches.

Points on the diagonal itself — where $f(x) = x$ — do not move: fixed points of the mirror, and the pivots around which function and inverse rotate into each other.`,
      link: '',
    },
    obj14: {
      title: `Reflection Across a Horizontal Line`,
      content: `Raising the mirror off the axis: $g(x) = 2c - f(x)$ reflects the curve across $y = c$, with the slider (or the animation) moving the mirror in real time.`,
      before: ``,
      after: `The algebra reads as a recipe: flip across the x-axis ($-f$), then shift up by twice the mirror height ($+2c$). At the frozen $c = 1$, the parabola $x^2$ becomes the downward $2 - x^2$, and the two curves cross exactly on the amber line — the fixed points where $f(x) = c$.

Animating $c$ is this tab's best trick: the reflected curve slides while the original stands still, making the mirror's role kinetic instead of static.

Setting $c = 0$ collapses this family back to the plain [x-axis reflection](!#reflection-across-the-x-axis) — the whole tab is that one move, parametrized.`,
      link: '',
    },
    obj15: {
      title: `Reflection Across a Vertical Line`,
      content: `The vertical counterpart: $g(x) = f(2c - x)$ mirrors the curve across $x = c$, moving the y-axis mirror to any position.`,
      before: ``,
      after: `The frozen square root tells the story: $\\sqrt{x}$ opens rightward from the origin, and $\\sqrt{2 - x}$ opens leftward from $x = 2$ — the two curves meeting on the amber mirror at $x = 1$, where $2c - x = x$.

The composition reading — shift, [y-axis flip](!#reflection-across-the-y-axis), shift back — is the standard trick for moving any axis-based operation to an arbitrary line, and it reappears throughout transformation theory.

Together with the [horizontal-line tab](!#reflection-across-a-horizontal-line), this completes the free-mirror pair: any horizontal or vertical line in the plane can now serve as an axis of symmetry.`,
      link: '',
    },
    obj16: {
      title: `Output Reflection: |f(x)|`,
      content: `The first partial reflection: $g(x) = |f(x)|$ flips **only** the parts of the curve below the x-axis, leaving everything non-negative untouched.`,
      before: ``,
      after: `The frozen sine wave becomes the rectified $|\\sin x|$: every dip bounces upward, the period halves to $\\pi$, and the roots of $f$ turn into **corners** — the curve touches the axis and rebounds instead of crossing.

Those corners are the visible cost of the operation: wherever $f$ crossed zero transversally, $|f|$ is continuous but not differentiable.

Unlike the full [x-axis reflection](!#reflection-across-the-x-axis), which moves the whole curve, this one is conditional — a reflection applied pointwise only where the output is negative. Its input-side sibling is [f(|x|)](!#input-reflection-fx).`,
      link: '',
    },
    obj17: {
      title: `Input Reflection: f(|x|)`,
      content: `The second partial reflection works on inputs: $g(x) = f(|x|)$ evaluates $f$ only at non-negative arguments, so the right half of the graph is duplicated leftward as a mirror image.`,
      before: ``,
      after: `The frozen square root is the dramatic case: $\\sqrt{x}$ has no left half at all, yet $\\sqrt{|x|}$ conjures one — a full symmetric curve manufactured from half a function. Whatever $f$ does for $x < 0$ is discarded, sight unseen.

The output is **always even**, regardless of what $f$ was: $g(-x) = f(|-x|) = f(|x|) = g(x)$ by construction. This tab is a machine for forcing y-axis symmetry.

Together with [|f(x)|](!#output-reflection-fx), it completes the partial-reflection pair the [tabs overview](!#the-seven-reflection-tabs) groups at the end: one folds outputs, one folds inputs.`,
      link: '',
    },

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What is a function reflection?",
      answer: "A reflection of a function f produces a new function g whose graph is the mirror image of f across a chosen axis or line. The axis can be the x-axis, the y-axis, the line y = x, a horizontal line y = c, or a vertical line x = c. The relationship between f and g depends on which axis is chosen."
    },
    obj2: {
      question: "How do you reflect a function across the x-axis vs the y-axis?",
      answer: "Reflecting across the x-axis negates every output: g(x) equals minus f(x), so each point (x, y) of f becomes (x, minus y). Reflecting across the y-axis negates every input: g(x) equals f of minus x, so each point (x, y) of f becomes (minus x, y). The first flips the graph vertically; the second flips it horizontally."
    },
    obj3: {
      question: "What does reflecting across y = x produce?",
      answer: "Reflecting across the line y = x swaps the roles of x and y, mapping each point (x, y) of f to (y, x). For one-to-one functions, the reflected curve is the graph of the inverse function f-inverse. For functions that are not one-to-one — like x squared, the absolute value, sine, or cosine — the reflection is multivalued and is not itself a function."
    },
    obj4: {
      question: "How do |f(x)| and f(|x|) differ from a normal reflection?",
      answer: "They are partial reflections, not full mirror images. The graph of the outer absolute value, written |f(x)|, keeps any portion of f that lies on or above the x-axis and reflects only the portions below. The graph of the inner absolute value, written f of |x|, keeps the right half of f and replaces the left half with a mirror copy of the right. Both produce continuous curves with possible corners."
    },
    obj5: {
      question: "Which reflection corresponds to an even or odd function?",
      answer: "An even function satisfies f of minus x equals f of x — its graph is unchanged by the y-axis reflection. An odd function satisfies f of minus x equals minus f of x — its graph is unchanged by a 180-degree rotation about the origin, which is the same as composing the x-axis and y-axis reflections."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Function Reflections Visualizer",
      "description": "Visualize 7 reflection types on 10 base function families: across x-axis, y-axis, y = x, y = c, x = c, plus the partial reflections |f(x)| and f(|x|).",
      "url": "https://www.learnmathclass.com/functions/visual-tools/reflections",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Ten base function families: linear, quadratic, cubic, reciprocal, exponential, logarithmic, sine, cosine, absolute value, and square root",
        "Seven reflection types selectable as tabs: across the x-axis, y-axis, line y = x, line y = c, line x = c, and the partial reflections |f(x)| and f(|x|)",
        "Sliders with Manual and Auto modes for the parameterized line reflections, with play, pause, step controls and four speed presets (0.5x, 1x, 2x, 4x)",
        "Multivalued y = x reflection rendering all geometric branches for non-one-to-one functions such as quadratic, absolute value, sine, and cosine",
        "Original curve and reflected curve drawn together in contrasting colors with floating equation badges that update as parameters change",
        "Orange reference line marking the axis of reflection for y = x, y = c, and x = c",
        "Explanation panel adapting in real time to the active reflection and base, with notes on even, odd, one-to-one, and one-sided function cases"
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
          "name": "Function Reflections",
          "item": "https://www.learnmathclass.com/functions/visual-tools/reflections"
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

  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // reflection scene + attached picture-reading panel, no link (own page).
  const stateUnits = {
    xAxis: demoUnitFrame({ svg: reflectionsDiagrams.xAxis, caption: 'x-axis flip, frozen',
      text: 'The parabola and its upside-down twin pinching together at the origin &#8212; roots are the fixed points of this mirror.' }),
    yAxis: demoUnitFrame({ svg: reflectionsDiagrams.yAxis, caption: 'y-axis flip, frozen',
      text: '&#8730;x lives on the right; &#8730;(&#8722;x) lives entirely on the left &#8212; the mirror relocated the domain itself.' }),
    yEqX: demoUnitFrame({ svg: reflectionsDiagrams.yEqX, caption: 'Diagonal mirror, frozen',
      text: 'Reflecting x&#178; across the amber diagonal stacks two branches over each input &#8212; a multivalued inverse, both branches drawn.' }),
    yLine: demoUnitFrame({ svg: reflectionsDiagrams.yLine, caption: 'Mirror at y = 1, frozen',
      text: 'The parabola and its reflection 2 &#8722; x&#178; crossing exactly on the amber line &#8212; the fixed points where f(x) = c.' }),
    xLine: demoUnitFrame({ svg: reflectionsDiagrams.xLine, caption: 'Mirror at x = 1, frozen',
      text: 'Two square roots opening toward each other, meeting on the vertical amber mirror.' }),
    absF: demoUnitFrame({ svg: reflectionsDiagrams.absF, caption: '|f(x)|, frozen',
      text: 'The rectified sine: every dip bounced upward, corners where the wave used to cross zero.' }),
    fAbs: demoUnitFrame({ svg: reflectionsDiagrams.fAbs, caption: 'f(|x|), frozen',
      text: 'A left half conjured from nothing: &#8730;|x| mirrors the right branch of &#8730;x into a fully even curve.' }),
  };

  // Canonical per-reflection explanations for the info panel (SSR/SEO-visible),
  // hoisted from the component's built-in REFLECTIONS bodies + anchors added.
  const explanations = {
    xAxis:
      'Negates every output. The whole curve flips upside down.\n' +
      '- Roots of $f$ stay roots of $g$ — they’re on the x-axis already.\n' +
      '- Local maxima become local minima, and vice versa.\n' +
      '- For **odd functions**, this gives the same result as reflecting across the y-axis.\n\n' +
      '[Learn more about the x-axis reflection](!#reflection-across-the-x-axis) · [All seven reflections](!#the-seven-reflection-tabs)',
    yAxis:
      'Replaces every input by its negative. Left and right swap.\n' +
      '- For **even functions** like $x^2$, $|x|$, $\\cos x$, the curve maps onto itself.\n' +
      '- For **odd functions** like $x$, $x^3$, $\\sin x$, the result equals the x-axis reflection.\n' +
      '- For one-sided functions like $\\sqrt{x}$ and $\\ln x$, the domain itself moves to the opposite side.\n\n' +
      '[Learn more about the y-axis reflection](!#reflection-across-the-y-axis) · [All seven reflections](!#the-seven-reflection-tabs)',
    yEqX:
      'Every point $(x, y)$ on $f$ becomes $(y, x)$ on $g$. The reflected set is the **graph of $f$ rotated 90° across the diagonal**.\n' +
      '- For **one-to-one** functions, the reflection is itself a function — the **inverse** $f^{-1}$.\n' +
      '- For **non-one-to-one** functions (like $x^2$, $|x|$, $\\sin x$, $\\cos x$), the reflection is **multivalued** — multiple $y$ values for the same $x$. All branches are drawn.\n' +
      '- Points on the line $y = x$ (where $f(x) = x$) are fixed.\n\n' +
      '[Learn more about the diagonal mirror](!#reflection-across-the-line-y-x) · [All seven reflections](!#the-seven-reflection-tabs)',
    yLine:
      'The horizontal line $y = c$ becomes the axis of symmetry. Every point of $f$ has a mirror partner on $g$, the same vertical distance from the line but on the opposite side.\n' +
      '- Equivalent to **reflecting across the x-axis, then shifting up by $2c$**.\n' +
      '- When $c = 0$, this reduces to the x-axis reflection.\n' +
      '- Points where $f(x) = c$ are **fixed points** — they sit on the line and don’t move.\n\n' +
      '[Learn more about horizontal-line mirrors](!#reflection-across-a-horizontal-line) · [All seven reflections](!#the-seven-reflection-tabs)',
    xLine:
      'The vertical line $x = c$ becomes the axis of symmetry. Every point of $f$ ends up at the same height on the other side of the line.\n' +
      '- Equivalent to **shifting left by $c$, reflecting across the y-axis, then shifting right by $c$**.\n' +
      '- When $c = 0$, this reduces to the y-axis reflection.\n' +
      '- Points where $x = c$ are fixed.\n\n' +
      '[Learn more about vertical-line mirrors](!#reflection-across-a-vertical-line) · [All seven reflections](!#the-seven-reflection-tabs)',
    absF:
      'A **partial reflection**: only the pieces of $f$ that dip below the x-axis get flipped up. Non-negative pieces are unchanged.\n' +
      '- Where $f(x) \\geq 0$, $g(x) = f(x)$.\n' +
      '- Where $f(x) < 0$, $g(x) = -f(x)$.\n' +
      '- The roots of $f$ become **corners** of $g$ — the curve touches the x-axis and bounces.\n\n' +
      '[Learn more about |f(x)|](!#output-reflection-fx) · [All seven reflections](!#the-seven-reflection-tabs)',
    fAbs:
      'For each input $x$, evaluate $f$ at $|x|$ instead. The right half of $f$ (for $x \\geq 0$) is used for **both** sides.\n' +
      '- For $x \\geq 0$, $g(x) = f(x)$ (unchanged).\n' +
      '- For $x < 0$, $g(x) = f(-x)$ — the right half mirrored over.\n' +
      '- The result is **always an even function**, regardless of what $f$ is.\n\n' +
      '[Learn more about f(|x|)](!#input-reflection-fx) · [All seven reflections](!#the-seven-reflection-tabs)',
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
           title: "Function Reflections Across Axes & Lines | Learn Math Class",
           description: "Visualize 7 reflection types: x-axis, y-axis, y = x, y = c, x = c, |f(x)|, and f(|x|). Apply each to 10 base function families with side-by-side plots.",
           keywords: keyWords.join(", "),
           url: "/functions/visual-tools/reflections",
           name: "Function Reflections Visualizer",
           hubDescription: "Pick a base function — linear, quadratic, cubic, reciprocal, exponential, logarithmic, sine, cosine, absolute value, or square root — and switch between seven reflection types: across the x-axis, y-axis, y = x, the horizontal y = c, the vertical x = c, plus |f(x)| and f(|x|). Both curves draw together, with the axis of reflection highlighted in orange.",
           category: "Transformations",
           subCategory: "Reflections"
         }
       }
    }
   }

export default function FunctionReflectionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

    
  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections=[
    { id:'key-terms', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
    { id:'getting-started', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
    { id:'choosing-a-base-function', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
    { id:'the-seven-reflection-tabs', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
    { id:'the-parameter-tabs-y-c-and-x-c', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
    { id:'manual-vs-auto-mode', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
    { id:'the-y-x-reflection-and-multivalued-inverses', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
    { id:'partial-reflections-fx-and-fx2', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
    { id:'what-is-a-reflection', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
    { id:'reflections-symmetry-and-function-types', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
    { id:'reflection-across-the-x-axis', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content, unit('xAxis'), sectionsContent.obj11.after] },
    { id:'reflection-across-the-y-axis', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('yAxis'), sectionsContent.obj12.after] },
    { id:'reflection-across-the-line-y-x', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('yEqX'), sectionsContent.obj13.after] },
    { id:'reflection-across-a-horizontal-line', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('yLine'), sectionsContent.obj14.after] },
    { id:'reflection-across-a-vertical-line', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('xLine'), sectionsContent.obj15.after] },
    { id:'output-reflection-fx', title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, unit('absF'), sectionsContent.obj16.after] },
    { id:'input-reflection-fx', title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, unit('fAbs'), sectionsContent.obj17.after] },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'30px'}}>Function Reflections</h1>
   <br/>
   <div style={{transform:'scale(1.1)'}}>
  <FunctionReflections explanations={explanations}/>
  </div>
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}