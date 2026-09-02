// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionOptimization from '../../../../app/components/functions/optimization/FunctionOptimization'


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
//         url: "/calculus/visual-tools/optimization",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Optimization</h1>
//    <br/>
//    <FunctionOptimization explanations={explanations}/>
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
import FunctionOptimization from '../../../../app/components/functions/optimization/FunctionOptimization'
import functionOptimizationDiagrams from '../../../../app/components/functions/optimization/functionOptimizationDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'optimization calculus',
    'critical points',
    'local maximum',
    'local minimum',
    'first derivative test',
    'second derivative test',
    'inflection point',
    'finding extrema',
    'maxima and minima',
    'critical point classifier',
    'concave up concave down',
    'optimization problems',
    'interactive optimization tool',
    'derivative applications',
    'critical points calculator'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Critical point** — a value $c$ in the domain of $f$ where $f'(c) = 0$ or $f'(c)$ is undefined. Every local maximum or minimum of a smooth function is a critical point.

**Local maximum** — a point $c$ where $f(c) \\ge f(x)$ for all $x$ near $c$. The function value is at least as large as everything nearby.

**Local minimum** — a point $c$ where $f(c) \\le f(x)$ for all $x$ near $c$. The function value is at least as small as everything nearby.

**Inflection point** — a point where $f''$ changes sign. The curve switches from concave up to concave down or vice versa. An inflection point may or may not be a critical point.

**Concave up** — $f''(x) > 0$. The graph cups upward like a bowl.

**Concave down** — $f''(x) < 0$. The graph cups downward like a dome.

**Second-derivative test** — at a critical point $c$: $f''(c) > 0$ gives a local min, $f''(c) < 0$ gives a local max, $f''(c) = 0$ is inconclusive.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The page opens with the **x³ − 3x** family loaded on the interval $[-3, 3]$. You see:

• The solid blue curve of $f(x) = x^3 - 3x$.

• The dashed deep-blue curve of $f'(x) = 3x^2 - 3$.

• A faint blue band over $[a, b]$ marking the search window.

• Two colored markers on $f$ at the critical points: one deep-blue for the local max at $x = -1$ and one bright-blue for the local min at $x = 1$.

Below the graph, the critical-point table lists each critical point with its coordinates, the value of $f''$ at the point, the second-derivative test verdict, and a final classification tag.

To explore, drag the **left endpoint a** and **right endpoint b** sliders to change the search window, or switch families in the left panel to see different patterns of extrema and inflection points.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Function Families`,
      content: `Six families are organized into two groups in the left panel, each tagged with its characteristic extrema count.

**Polynomial:**

• **Quadratic** $f(x) = x^2$ — exactly one local minimum at the origin. The simplest non-trivial optimization.

• **x³ − 3x** — a cubic with a local max and a local min. The canonical **both kinds at once** example.

• **x³** — a critical point at the origin where $f'$ touches zero but doesn&apos;t change sign. The second-derivative test fails; first-derivative test reveals an inflection.

• **x⁴ − 4x²** — a **W shape** with two local minima and a local maximum. Multiple extrema of mixed kinds.

**Transcendental:**

• **sin(x)** — periodic, with infinitely many extrema. On $[-2\\pi, 2\\pi]$ you get four.

• **e^(-x²)** — the Gaussian bell curve. A single global maximum at the origin, flanked by two inflection points.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The a and b Sliders`,
      content: `The **left endpoint a** and **right endpoint b** sliders set the search window. As you drag:

• The faint blue band over $[a, b]$ resizes.

• The critical-point finder re-runs and rebuilds the table.

• Critical points that fall outside the new window disappear; ones that fall inside appear.

• Markers, drop lines, and table rows update together.

If you set $a > b$, the tool silently swaps them — only the interval matters. If the interval shrinks below a tiny threshold, the table reports **interval too narrow** until you give it a real interval.

This is useful for two reasons: you can zoom in on a single critical point to study it in isolation, or you can widen the window to see how many extrema a family produces over a long range.

The **Reset** button next to **Parameters** returns the interval to the family&apos;s default.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Critical-Point Table`,
      content: `The boxed table below the graph has one row per critical point. Each row reports:

• **#** — a numbered marker matching the colored dot on the graph.

• **x** — the location of the critical point.

• **f(x)** — the function value at that point.

• **f&apos;&apos;(x)** — the value of the second derivative, the key input to the classification test.

• **Second-derivative test** — a short phrase explaining the verdict, including the rare cases where the test fails and the tool falls back to the first-derivative test.

• **Verdict** — a colored tag: **local max** (deep blue), **local min** (bright blue), or **inflection** (light blue).

When the table is empty, the cause appears in italics — either no critical points exist in the interval, or the interval is too narrow.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Classification - Max, Min, Inflection`,
      content: `Every smooth critical point has $f'(c) = 0$. The sign of $f''(c)$ tells you which kind:

• **f&apos;&apos;(c) > 0** — concave up at $c$, so the curve cups upward and $c$ is a **local minimum**.

• **f&apos;&apos;(c) < 0** — concave down at $c$, so the curve cups downward and $c$ is a **local maximum**.

• **f&apos;&apos;(c) ≈ 0** — the test is inconclusive. The tool falls back to the first-derivative test: look at the sign of $f'$ on each side of $c$:

  – Negative-then-positive: local minimum.

  – Positive-then-negative: local maximum.

  – No sign change: **inflection with horizontal tangent**, as in $f(x) = x^3$ at $x = 0$.

The fallback test handles the cases where the second derivative is too gentle to give a clean verdict, but the first derivative still reveals what&apos;s happening at the critical point.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Display Toggles`,
      content: `The **Display** section in the left panel hides individual layers when one is in the way:

• **f(x)** — toggles the function curve.

• **f&apos;(x)** — toggles the dashed derivative curve. Useful for verifying that $f'$ crosses zero at every marked critical point.

• **f&apos;&apos;(x)** — toggles the dotted second-derivative curve. Off by default to avoid clutter; turn on when working through the second-derivative test in detail.

• **critical points** — toggles the markers and drop lines for every critical point in the interval.

Any combination is valid. The legend below the graph updates to show only the visible layers.

The **Accent color** picker at the bottom recolors the live highlight throughout the tool.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is Optimization`,
      content: `**Optimization** in single-variable calculus means finding the maximum or minimum value a function takes — either over its entire domain (a **global** extremum) or over a restricted interval (a **local** extremum).

The basic idea: at a smooth extremum, the tangent line is horizontal, so the derivative is zero. Solving $f'(c) = 0$ finds the candidates; the second-derivative test (or the first-derivative test as backup) classifies each one.

For an interval $[a, b]$, the absolute maximum and minimum live either at a critical point inside the interval or at one of the endpoints. The standard recipe: find every critical point in $(a, b)$, evaluate $f$ at each one and at the two endpoints, and pick the largest and smallest values.

For deeper coverage of optimization problems and applications, see the **optimization** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The First-Derivative Test`,
      content: `Once you have a critical point $c$, the **first-derivative test** classifies it by looking at the sign of $f'$ on each side:

• $f'$ changes from positive to negative at $c$ → **local maximum**. The function was increasing, then started decreasing.

• $f'$ changes from negative to positive at $c$ → **local minimum**. The function was decreasing, then started increasing.

• $f'$ does not change sign at $c$ → **not an extremum**. Typically an inflection point with a horizontal tangent, like $f(x) = x^3$ at $x = 0$.

The first-derivative test always works (as long as you can determine the sign of $f'$ in small neighborhoods on each side), but it requires more bookkeeping than the second-derivative test. The tool uses it as a fallback when $f''(c) = 0$ or is too close to zero to give a reliable verdict.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The Second-Derivative Test`,
      content: `The **second-derivative test** is the fast path: at a critical point $c$, look at $f''(c)$:

• $f''(c) > 0$ → concave up → **local minimum**.

• $f''(c) < 0$ → concave down → **local maximum**.

• $f''(c) = 0$ → **inconclusive**.

The intuition: concave-up means the curve cups like a bowl, so a horizontal tangent at the bottom of the bowl is a local minimum. Concave-down means it cups like a dome, so a horizontal tangent at the top is a local max.

When $f''(c) = 0$ the test fails because the curve&apos;s concavity isn&apos;t pinned down at $c$ — it could be a max, a min, or an inflection. Higher derivatives can sometimes resolve it (the third or fourth derivative test), but the cleaner fallback is the first-derivative test described above.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Derivatives** — the foundation. The fact that $f'(c) = 0$ at a smooth extremum is what makes the whole technique work. See the **derivative visualizer**.

**Critical points** — full theory of critical points, including the case where $f'$ is undefined.

**Concavity and inflection points** — the geometric companion to the second-derivative test. Where $f''$ changes sign you get an inflection point of $f$.

**Mean Value Theorem** — guarantees that if $f' \\ne 0$ on an interval, $f$ is strictly monotonic. Justifies many of the increasing/decreasing arguments around critical points. See the **MVT visualizer**.

**Extreme Value Theorem** — guarantees that a continuous function on a closed bounded interval attains its max and min. The reason endpoint checks are part of the optimization recipe.

**Applied optimization** — real-world setup of optimization problems: largest box from a given sheet, shortest path, cheapest cost. The calculus is always the same; the modeling step is the hard part.

**Visual tools for calculus** — limits, continuity, derivatives, FTC, MVT, Riemann sums.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Quadratic: One Critical Point, No Ambiguity`,
      content: `$f(x) = x^2$ on $[-3, 3]$. Setting $f'(x) = 2x = 0$ gives a single critical point at $x = 0$, and $f''(0) = 2 > 0$ classifies it as a local minimum immediately.

The three curves make the reasoning visible at once: $f$ is the parabola, $f'$ is the line $2x$ crossing zero at the origin, and $f''$ is the constant $2$ sitting flat above the axis.`,
      before: ``,
      after: `Because $f''$ is positive everywhere, the parabola is concave up everywhere, and that upgrades the verdict: the local minimum is also the **global** minimum on any interval you choose. Concavity that never changes sign is a strong condition, and it is exactly what makes quadratic optimization problems easy.

This is also the cleanest case of the [second-derivative test](!#the-second-derivative-test) — one evaluation, one sign, done, with no fallback needed.`,
      link: '',
    },
    obj12: {
      title: `x³ − 3x: a Maximum and a Minimum`,
      content: `$f(x) = x^3 - 3x$ has $f'(x) = 3x^2 - 3$, so $f'(x) = 0$ at $x = \pm 1$ — two critical points, and the second derivative $f''(x) = 6x$ separates them:

- $x = -1$: $f'' = -6 < 0$, concave down, **local max**, with $f(-1) = 2$
- $x = 1$: $f'' = +6 > 0$, concave up, **local min**, with $f(1) = -2$

The markers are coloured accordingly — deep blue for the max, main blue for the min.`,
      before: ``,
      after: `Neither of these is a global extremum. A cubic runs off to $+\infty$ on one side and $-\infty$ on the other, so on a wide enough interval the endpoints beat both critical points. That distinction — local versus global — is the reason a real optimization problem always has to check the endpoints too.

Watch $f''$ as you read across: it is negative left of the origin and positive right of it, crossing zero exactly at $x = 0$. That crossing is an inflection point of $f$, but it is *not* a critical point, because $f'(0) = -3 \neq 0$. The tool marks only the critical points, which is why nothing appears there.`,
      link: '',
    },
    obj13: {
      title: `x³: Where the Second-Derivative Test Fails`,
      content: `$f(x) = x^3$ has $f'(x) = 3x^2$, which touches zero at $x = 0$ without changing sign. So $x = 0$ is a critical point — but $f''(0) = 0$, and the second-derivative test returns nothing at all.

The tool falls back to the first-derivative test: it samples $f'$ just left and just right of the point, finds both positive, and reports **inflection (touch)** rather than a maximum or a minimum.`,
      before: ``,
      after: `This family exists to make the limits of the tests explicit. $f''(c) = 0$ is not evidence of anything — the test is simply silent, and something else has to decide. Here the sign of $f'$ on both sides does the work, and it says the function never stops increasing.

The finder itself has to work harder for this case too. A critical point where $f'$ crosses zero is easy to bracket by a sign change; one where $f'$ merely *touches* zero has no sign change to detect, so the tool scans separately for local minima of $|f'|$ that sit near zero. That is why this point is found at all.`,
      link: '',
    },
    obj14: {
      title: `x⁴ − 4x²: Three Critical Points in a W`,
      content: `$f(x) = x^4 - 4x^2$ gives $f'(x) = 4x^3 - 8x = 4x(x^2 - 2)$, so the critical points are $x = 0$ and $x = \pm\sqrt{2} \approx \pm 1.4142$. With $f''(x) = 12x^2 - 8$:

- $x = -1.4142$: $f'' = 16 > 0$, **local min**, $f = -4$
- $x = 0$: $f'' = -8 < 0$, **local max**, $f = 0$
- $x = 1.4142$: $f'' = 16 > 0$, **local min**, $f = -4$

Three markers, two of them at the same height.`,
      before: ``,
      after: `The two minima tie exactly, at $f = -4$, because the function is even. That is worth noticing: a global minimum need not be unique, and any procedure that assumes it is will pick one arbitrarily.

The local maximum at the origin is the more interesting one. It is a maximum *locally* — the curve does fall away on both sides of it — while sitting at height $0$, well above the two minima and well below where the quartic goes further out. "Local" is doing real work in that sentence, and the W shape is the clearest picture of why the word is there.`,
      link: '',
    },
    obj15: {
      title: `sin(x): Four Critical Points Over Two Periods`,
      content: `On its default interval $[-2\pi, 2\pi]$, $f(x) = \sin(x)$ has $f'(x) = \cos(x)$ vanishing four times: at $x = \pm\frac{\pi}{2}$ and $x = \pm\frac{3\pi}{2}$.

The classification alternates, since $f'' = -\sin(x)$ flips sign at each one:

- $x = -4.7124$: **local max**, $f = 1$
- $x = -1.5708$: **local min**, $f = -1$
- $x = 1.5708$: **local max**, $f = 1$
- $x = 4.7124$: **local min**, $f = -1$`,
      before: ``,
      after: `Every maximum ties at $1$ and every minimum at $-1$, which is what periodicity guarantees. Widen the interval and the tool simply finds more of them — there is no largest critical point to find, only more copies of the same two heights.

That makes the search window matter in a way it does not for the polynomial families. On a periodic function "the maximum" is meaningless without an interval attached; what the tool reports is always the answer to "on this window", and the faint band across the graph is a reminder of which window that is.`,
      link: '',
    },
    obj16: {
      title: `The Gaussian: One Maximum and Two Inflections That Are Not Critical`,
      content: `$f(x) = e^{-x^2}$ has $f'(x) = -2x e^{-x^2}$, which is zero only at $x = 0$ — the exponential factor never vanishes. So there is exactly one critical point, and $f''(0) = -2 < 0$ makes it a **local maximum** at $f(0) = 1$.

It is a global maximum too: the function is positive everywhere and decays to zero in both directions, so nothing can exceed the peak.`,
      before: ``,
      after: `The dotted $f''$ curve is where this family gets interesting. It equals $(4x^2 - 2)e^{-x^2}$ and crosses zero at $x = \pm\frac{1}{\sqrt{2}} \approx \pm 0.707$ — the two inflection points, one on each shoulder of the bell. In statistics those are the points one standard deviation out.

But neither is a critical point, and the tool marks neither, because $f'$ is nowhere near zero there. Critical points come from $f'$; inflection points come from $f''$. They are different questions asked of different derivatives, and this curve is the one where confusing them is easiest — which makes it the best place to keep them apart.`,
      link: '',
    }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     SVGs come from the tool's own scene description, serialised through the
     core's generateSVG - see app/components/functions/frozenSvg.js. Each state
     uses that family's defaultInterval, and the markers are the critical points
     the tool's own finder returns, coloured by its own classification. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: functionOptimizationDiagrams[key], caption, text })

  const stateUnits = {
    quadratic: unit('quadratic', 'Quadratic on [-3, 3], frozen',
      'One marker, at the origin. f&prime; is the line 2x crossing zero there, and f&Prime; is the constant 2 ' +
      'lying flat above the axis - concave up everywhere, so the minimum is global.'),
    'cubic-bump': unit('cubic-bump', 'x&sup3; - 3x on [-3, 3], frozen',
      'Two markers in different colours: a local max at x = -1 where f&Prime; = -6, and a local min at ' +
      'x = +1 where f&Prime; = +6. The dotted f&Prime; line crosses zero between them, at the inflection.'),
    cubic: unit('cubic', 'x&sup3; on [-3, 3], frozen',
      'A single grey-blue marker at the origin, labelled inflection (touch). f&prime; = 3x&sup2; sits on the ' +
      'axis there without crossing it, which is exactly the case the second-derivative test cannot decide.'),
    'quartic-w': unit('quartic-w', 'x&#8308; - 4x&sup2; on [-3, 3], frozen',
      'Three markers: minima at &plusmn;1.4142 tied at f = -4, and a local max at the origin sitting at ' +
      'f = 0 - above both minima, and still only a local maximum.'),
    sine: unit('sine', 'sin(x) on [-2&pi;, 2&pi;], frozen',
      'Four markers alternating max, min, max, min at &plusmn;&pi;/2 and &plusmn;3&pi;/2. Widen the window ' +
      'and the tool just finds more of the same two heights.'),
    gaussian: unit('gaussian', 'e^(-x&sup2;) on [-3, 3], frozen',
      'One marker at the peak. The dotted f&Prime; curve crosses zero at &plusmn;0.707 - the two inflection ' +
      'points on the shoulders - but neither is marked, because f&prime; is not zero there.'),
  }


  /* ---- per-family panel notes, passed into the component (Line 1) ----
     FunctionOptimization had no explanations prop; one was added additively and
     defaults to null, so the panel is unchanged when nothing is passed. Content
     is markdown - InfoPanel renders it through processContent, so anchors use
     the normal [text](!#slug) form. */
  const note = (body, slug, label) =>
    `### Where this leads\n\n${body} See [${label}](!#${slug}) or compare [all six families](!#the-function-families).`

  const explanations = {
    quadratic: note('One critical point, and concavity that never changes sign - so the local minimum is global.', 'one-critical-point', 'the quadratic family'),
    'cubic-bump': note('A max and a min, separated by the sign of f&Prime;, and neither of them global.', 'a-maximum-and-a-minimum', 'the x cubed minus 3x family'),
    cubic: note('f&Prime;(c) = 0 leaves the second-derivative test silent; the first-derivative test settles it.', 'where-the-test-fails', 'the x cubed family'),
    'quartic-w': note('Three critical points, with the two minima tied - a global minimum need not be unique.', 'three-critical-points', 'the quartic family'),
    sine: note('Periodicity means there is no largest critical point, only more copies inside a wider window.', 'four-critical-points', 'the sine family'),
    gaussian: note('One critical point from f&prime;, two inflection points from f&Prime;, and the tool marks only the first kind.', 'one-maximum-two-inflections', 'the gaussian family'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is a critical point?",
      answer: "A critical point of a function f is a value c in the domain where the derivative f prime of c is either zero or undefined. Every local maximum and local minimum of a smooth function is a critical point, which makes critical points the candidates to check when you are looking for extrema."
    },
    obj2: {
      question: "How does the second-derivative test work?",
      answer: "At a critical point c, evaluate the second derivative. If f double prime of c is positive, the curve is concave up at c, so the point is a local minimum. If f double prime of c is negative, the curve is concave down, so the point is a local maximum. If f double prime of c is zero, the test is inconclusive and you fall back to the first-derivative test or check higher derivatives."
    },
    obj3: {
      question: "What is the difference between a local and a global extremum?",
      answer: "A local maximum or minimum is the largest or smallest value of the function in some neighborhood around the point. A global maximum or minimum is the largest or smallest value over the entire domain or over a specified interval. On a closed bounded interval, the global extrema occur either at a critical point inside the interval or at one of the endpoints."
    },
    obj4: {
      question: "When does the second-derivative test fail?",
      answer: "The test fails when the second derivative at the critical point is zero, because the concavity of the curve at that point is not pinned down. The point could be a local max, a local min, or an inflection point with a horizontal tangent. In this case you fall back to the first-derivative test, which examines the sign of the first derivative on each side of the critical point."
    },
    obj5: {
      question: "Why does optimization rely on derivatives?",
      answer: "At a smooth maximum or minimum, the tangent line to the graph is horizontal, which means the derivative is zero at that point. Setting the derivative equal to zero gives a finite list of candidate points to check, turning the problem of finding the best value into an algebraic equation. The derivative is the bridge between the geometric idea of an extremum and a concrete computation."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Optimization Visualizer",
      "description": "Interactive tool that finds every critical point of a smooth function on a chosen interval and classifies each one as a local max, local min, or inflection using the second-derivative test.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/optimization",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Plot f alongside its first and second derivatives with independent visibility toggles",
        "Numerical critical-point finder that locates every interior point where f prime equals zero",
        "Automatic classification of each critical point using the second-derivative test",
        "First-derivative test fallback when the second-derivative test is inconclusive",
        "Adjustable search interval with independent sliders for the endpoints",
        "Six function families illustrating single extrema, w-shapes, and touch zeros",
        "Critical-point table with location, function value, second-derivative value, test text, and verdict"
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
      "keywords": "optimization calculus, critical points, local maximum, local minimum, first derivative test, second derivative test, inflection point, finding extrema, maxima and minima, critical point classifier, concave up concave down, optimization problems, interactive optimization tool, derivative applications, critical points calculator"
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
          "name": "Calculus",
          "item": "https://www.learnmathclass.com/calculus"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Optimization Visualizer",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/optimization"
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
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Optimization Visualizer - Critical Points | Learn Math Class",
        description: "Find critical points and classify each as local max, min, or inflection. Apply first and second derivative tests live across six function families.",
        keywords: keyWords.join(", "),
        url: "/calculus/visual-tools/optimization",
        name: "Optimization Visualizer",
        hubDescription: "Find every critical point of a smooth function on a chosen interval and watch the second-derivative test classify each as local max, local min, or inflection. Six families show single-extremum cases, W-shapes, and touch zeros where the test falls back to the first-derivative test.",
        category: "Derivatives",
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="66" x2="76" y2="66" stroke="#B5D4F4" stroke-width="0.9"/><path d="M 12 46 C 20 12 36 12 42 36 C 47 55 58 56 70 24" fill="none" stroke="#85B7EB" stroke-width="1.8"/><line x1="19" y1="19" x2="37" y2="19" stroke="#FAC775" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="44" y1="49" x2="62" y2="49" stroke="#97C459" stroke-width="1.5" stroke-dasharray="3,2"/><circle cx="28" cy="19" r="3.2" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><circle cx="53" cy="49" r="3.2" fill="#97C459" stroke="#27500A" stroke-width="1.2"/><text x="28" y="11" font-family="Georgia,serif" font-size="7" fill="#FAC775" text-anchor="middle">max</text><text x="53" y="59" font-family="Georgia,serif" font-size="7" fill="#C0DD97" text-anchor="middle">min</text></svg>`
      },

    }
  }
}

export default function OptimizationVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-function-families'),
    stateRow('obj11', 'one-critical-point', 'quadratic'),
    stateRow('obj12', 'a-maximum-and-a-minimum', 'cubic-bump'),
    stateRow('obj13', 'where-the-test-fails', 'cubic'),
    stateRow('obj14', 'three-critical-points', 'quartic-w'),
    stateRow('obj15', 'four-critical-points', 'sine'),
    stateRow('obj16', 'one-maximum-two-inflections', 'gaussian'),
    plain('obj3', 'the-a-and-b-sliders'),
    plain('obj4', 'the-critical-point-table'),
    plain('obj5', 'classification'),
    plain('obj6', 'display-toggles'),
    plain('obj7', 'what-is-optimization'),
    plain('obj8', 'the-first-derivative-test'),
    plain('obj9', 'the-second-derivative-test'),
    plain('obj10', 'related-concepts'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Optimization Visualizer - Critical Points</h1>
      <br/>
      <FunctionOptimization explanations={explanations}/>
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