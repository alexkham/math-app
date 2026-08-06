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
import FunctionReflections from '../../../../app/components/functions/reflections/FunctionReflections'


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

- **x-axis** ($g(x) = -f(x)$) — flips the curve upside down through the x-axis
- **y-axis** ($g(x) = f(-x)$) — mirrors the curve left to right across the y-axis
- **y = x** — swaps $x$ and $y$ coordinates; produces the inverse function, or all branches if $f$ is not one-to-one
- **y = c** ($g(x) = 2c - f(x)$) — mirrors across a horizontal line; the slider controls $c$
- **x = c** ($g(x) = f(2c - x)$) — mirrors across a vertical line; the slider controls $c$
- **|f|** ($g(x) = |f(x)|$) — partial reflection: flips only the parts of $f$ below the x-axis
- **f(|x|)** ($g(x) = f(|x|)$) — replaces the left half of $f$ with a mirror of the right half

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

    // obj11–obj15 left for future expansion
    // obj11: { title:``, content:``, before:``, after:``, link:'' },
    // obj12: { title:``, content:``, before:``, after:``, link:'' },
    // obj13: { title:``, content:``, before:``, after:``, link:'' },
    // obj14: { title:``, content:``, before:``, after:``, link:'' },
    // obj15: { title:``, content:``, before:``, after:``, link:'' },

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


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
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

export default function FunctionReflectionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
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
    // obj11–obj15 slots reserved for future expansion
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
  <FunctionReflections/>
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