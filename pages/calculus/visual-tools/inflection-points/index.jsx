// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionConcavity from '../../../../app/components/calculus/visualizers/FunctionConcavity'


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
//         url: "/calculus/visual-tools/inflection-points",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Inflection Points</h1>
//    <br/>
//    <FunctionConcavity/>
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
import FunctionConcavity from '../../../../app/components/calculus/visualizers/FunctionConcavity'


export async function getStaticProps(){

  const keyWords = [
    'inflection points',
    'concavity calculus',
    'inflection point calculator',
    'concave up concave down',
    'second derivative test',
    "f'' inflection point",
    'concavity visualizer',
    'find inflection points',
    'inflection point graph',
    'interactive concavity tool',
    'second derivative concavity',
    'concavity test',
    'inflection point sign change',
    'visualize inflection points',
    'concavity graphing tool'
  ]


  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Concavity** — How a curve bends. A curve is concave up if it cups upward like a smile; concave down if it caps downward like a frown.

**Second derivative $f''(x)$** — The derivative of $f'$. Its sign measures concavity: positive means concave up, negative means concave down.

**Inflection point** — A point where concavity changes — the sign of $f''$ flips as $x$ passes through the point.

**Tangent line** — The line through $P = (c, f(c))$ with slope $f'(c)$. For concave-up curves the tangent lies below the curve nearby; for concave-down, above.

**Concavity gap** — The region between the curve and the tangent line at $P$. Its width and direction visualize how strongly the curve bends.

This widget uses the cubic $f(x) = \\frac{1}{3}x^3 - x$, whose second derivative is $f''(x) = 2x$. The single inflection point sits exactly at $x = 0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The visualizer shows the cubic $f(x) = \\frac{1}{3}x^3 - x$ with a draggable point $c$ on the x-axis. $P = (c, f(c))$ lifts vertically from $c$ to the curve, and the tangent line at $P$ is drawn alongside it.

Drag $c$ left or right to move the point along the x-axis. The dashed drop line and the highlighted $P$ update in real time, along with the live readouts below the canvas: $c$, $f(c)$, $f'(c)$, and the key value $f''(c) = 2c$.

For a guided walkthrough, click one of the three scenario buttons at the bottom: Concave up, Concave down, or Inflection. Each runs a seven-step animation explaining what the chosen value of $c$ reveals about the curve.

The Reset button clears the active scenario and returns the visualizer to a neutral state with $c$ restored to its default position.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Drag Mode vs Scenario Mode`,
      content: `Two interaction styles share the same canvas.

**Free drag** — Grab the $c$ marker on the x-axis and slide it anywhere in the visible range. The tangent line, point $P$, and the $f''(c)$ value all track your cursor. This is the fastest way to feel how concavity shifts: drag from negative $x$ into positive $x$ and watch the second derivative cross zero exactly at the inflection point.

**Scenario animation** — Click any of the three scenario buttons to lock $c$ to a specific value and play the seven-step explanation. The full color theme of the visualizer changes to match: blue for concave up, red for concave down, amber for inflection.

Starting a scenario interrupts dragging. Once an animation completes, you can still drag $c$ again — doing so clears the scenario tint and returns the visualizer to neutral.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Running the Three Scenarios`,
      content: `**Concave up** sets $c = 1.3$, where $f''(1.3) = 2.6 > 0$. The curve cups upward around $P$, and the tangent line at $P$ sits beneath the curve in the surrounding window. The blue gap shading shows the curve curling away above the tangent.

**Concave down** sets $c = -1.3$, where $f''(-1.3) = -2.6 < 0$. The curve caps downward around $P$, and the tangent line lies above the curve. The red gap shading shows the curve falling below the tangent on both sides.

**Inflection** sets $c = 0$, where $f''(0) = 0$ and the sign of $f''$ flips from negative to positive as $x$ crosses zero. The tangent line at $P$ crosses the curve rather than staying on one side. The gap shading splits at $c$ — red on the concave-down left side, blue on the concave-up right side.

Each scenario takes a few seconds to play out across the seven animation phases.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Following the 7-Step Animation`,
      content: `Each scenario plays the same seven phases, labeled in a banner at the top of the canvas:

Step 1 — Identify the region of interest. A shaded band highlights the interval around $c$ that the analysis covers.

Step 2 — Mark the point $c$ on the x-axis. The marker animates into position from wherever it was previously.

Step 3 — Lift to $P = (c, f(c))$. A dashed drop line connects $c$ on the axis to $P$ on the curve.

Step 4 — Draw the tangent at $P$. The tangent line expands outward from $P$ with slope $f'(c)$.

Step 5 — Evaluate $f''(c) = 2c$. A floating badge appears near $P$ showing the computed value.

Step 6 — Concavity gap: curve vs tangent. Color-coded shading fills the region between the curve and the tangent.

Step 7 — Read off concave up, concave down, or inflection. The verdict pill summarizes the result.

When the animation finishes, the right-side panel switches automatically to the Meaning tab.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Concavity Gap`,
      content: `The colored shading between the curve and the tangent line is the **concavity gap**. Its meaning depends on the scenario.

For **concave up**, the gap fills the wedge with the curve forming the upper boundary and the tangent forming the lower boundary. The blue shading visualizes the inequality "curve above tangent" that defines concave up.

For **concave down**, the same geometry flips: the curve forms the lower boundary, the tangent the upper, and red shading fills the wedge. The curve sits below the tangent on both sides of $c$.

For an **inflection point**, the gap splits at $c$ into two colors. To the left of $c$, the gap is red (concave down: curve below tangent). To the right, the gap is blue (curve above tangent). The visible color flip at $c$ is the geometric signature of the concavity change.

The size of the gap also indicates the strength of bending — wider gap, sharper curvature.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Using the Three Info Panel Tabs`,
      content: `The right-side panel offers three views of the same scene.

**Computation** walks through the algebra step by step. It shows the current values of $c$, $f(c)$, and $f'(c)$, then computes $f''(c) = 2c$ with the numerical substitution, and finally reads off the verdict from the sign of $f''(c)$. The active step is highlighted with the scenario color.

**Meaning** explains what the verdict means geometrically. A colored verdict card summarizes the result with a badge, headline, and explanation. A "why" note clarifies the connection between $f''$ and concavity in plain language. The Meaning tab opens automatically when a scenario animation finishes.

**Theory** provides the formal background: the definition of concavity in terms of tangent lines, the second derivative test for concavity, the necessary-but-not-sufficient condition for inflection points, the second derivative test for extrema, and a worked breakdown of the specific function $f(x) = \\frac{1}{3}x^3 - x$.

Switch tabs at any time without interrupting the canvas.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is Concavity?`,
      content: `A function $f$ is **concave up** on an interval when its graph lies above every one of its tangent lines drawn from points in that interval. Visually, the curve cups upward like a smile, and the slope $f'$ is increasing as $x$ increases.

A function is **concave down** when the graph lies below all its tangent lines on the interval. The curve caps downward like a frown, and the slope $f'$ is decreasing as $x$ increases.

The connection to the second derivative is direct: if $f$ is twice differentiable, then $f''(x) > 0$ on an interval is equivalent to $f$ being concave up there, and $f''(x) < 0$ is equivalent to concave down. The sign of $f''$ determines concavity.

For a deeper treatment with proofs and worked examples, see the **concavity theory page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Second Derivative Test`,
      content: `The second derivative is the rate of change of the slope. Its sign tells us how the slope is itself changing, which is concavity.

**For concavity:** On any interval where $f''$ is strictly positive, $f$ is concave up; where $f''$ is strictly negative, $f$ is concave down. The boundary case $f''(x) = 0$ is where concavity can potentially change.

**For local extrema:** At a critical point $c$ where $f'(c) = 0$, the sign of $f''(c)$ classifies the critical point. Positive $f''(c)$ gives a local minimum (the curve cups up around $c$). Negative $f''(c)$ gives a local maximum (the curve caps down). When $f''(c) = 0$, the second derivative test is inconclusive and another method such as the first derivative test is needed.

On this widget&apos;s example $f(x) = \\frac{1}{3}x^3 - x$, the critical points are at $x = \\pm 1$: $f''(-1) = -2$ marks a local maximum, $f''(1) = 2$ marks a local minimum.

See the **first derivative test page** for an alternative classification method.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Inflection Points: Necessary vs Sufficient`,
      content: `An inflection point is a point on the graph where concavity changes. The standard procedure to find them has two steps, and the second step is what most students skip.

**Necessary condition** — At an inflection point $c$, either $f''(c) = 0$ or $f''(c)$ does not exist. So the candidates are exactly the zeros of $f''$ and the points where $f''$ is undefined.

**Sufficient condition** — The sign of $f''$ must actually change across $c$. If $f''$ is negative on the left and positive on the right (or vice versa), $c$ is an inflection point. If the sign stays the same on both sides, it is not.

The classic counterexample is $f(x) = x^4$. Here $f''(x) = 12x^2$, so $f''(0) = 0$ — the necessary condition holds. But $f''(x) \\geq 0$ for every $x$, so the sign never changes. There is no inflection point at $x = 0$; the curve is concave up everywhere.

This is exactly why the visualizer&apos;s Inflection scenario emphasizes the sign flip in its gap shading.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Concavity** — General theory of how curves bend, with worked examples across multiple function families.

**Second derivative** — Definition, computation rules, and geometric interpretation as the rate of change of slope.

**Critical points** — Points where $f'(x) = 0$ or is undefined; the starting set for finding maxima, minima, and inflection candidates.

**First derivative test** — Sign analysis of $f'$ for classifying critical points as maxima, minima, or neither.

**Local extrema** — Local maxima and minima, the second derivative test, and the relationship to concavity.

**Curve sketching** — Combining intervals of increase/decrease, concavity, asymptotes, and intercepts to draw an accurate graph of any function.

**Optimization problems** — Real-world applications where finding extrema and inflection points reveals optimal solutions.`,
      before: ``,
      after: ``,
      link: '',
    },

    // obj11–obj15 left for future expansion
    // obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
    // obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
    // obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    // obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    // obj15: { title: ``, content: ``, before: ``, after: ``, link: '' },

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What is an inflection point?",
      answer: "An inflection point is a point on a curve where the concavity changes — the graph switches from concave up to concave down or vice versa. Equivalently, the sign of the second derivative f-double-prime flips as x passes through the point."
    },
    obj2: {
      question: "How do you find inflection points using the second derivative?",
      answer: "First find where f-double-prime of x equals zero or is undefined. Each such x is a candidate inflection point. Then check the sign of f-double-prime on either side: if the sign actually changes, that x is an inflection point. If the sign stays the same, it is not."
    },
    obj3: {
      question: "What is the difference between concave up and concave down?",
      answer: "A curve is concave up on an interval when its graph lies above every tangent line drawn from points in that interval; equivalently, the second derivative is positive there. Concave down means the graph lies below its tangents, with a negative second derivative."
    },
    obj4: {
      question: "Does f-double-prime(c) = 0 always mean there is an inflection point?",
      answer: "No. The condition f-double-prime of c equals zero is necessary but not sufficient. The standard counterexample is f of x equals x to the fourth: f-double-prime of zero equals zero, yet f-double-prime is greater than or equal to zero for all x, so concavity never changes and there is no inflection at the origin."
    },
    obj5: {
      question: "How is concavity related to local maxima and minima?",
      answer: "At a critical point where f-prime of c equals zero, the sign of f-double-prime of c classifies the extremum. If f-double-prime of c is positive, the curve cups upward and c is a local minimum. If f-double-prime of c is negative, the curve caps downward and c is a local maximum. If f-double-prime of c equals zero, the second derivative test is inconclusive."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Inflection Points and Concavity Visualizer",
      "description": "Drag c along f(x) = (1/3)x^3 - x to see how f''(c) decides concavity. Concave up, concave down, and inflection scenarios animate step by step with theory.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/inflection-points",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable point c on the x-axis with live readouts of c, f(c), f-prime(c), and f-double-prime(c)",
        "Three animated scenarios — Concave up, Concave down, and Inflection — each running a seven-step sequence from region selection to verdict",
        "Color-coded concavity gap shading between the curve and the tangent line, with dual-color split at inflection points",
        "Computation panel showing the step-by-step evaluation of f-double-prime(c) = 2c and the resulting sign verdict",
        "Meaning panel with a scenario-specific verdict card, color-themed for concave up (blue), concave down (red), or inflection (amber)",
        "Theory panel covering the definition of concavity, the second derivative test, the necessary-but-not-sufficient inflection condition, and the second derivative test for extrema",
        "Built-in counterexample explaining why f(x) = x^4 has f-double-prime(0) = 0 but no inflection point at the origin"
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
          "name": "Calculus",
          "item": "https://www.learnmathclass.com/calculus"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/calculus/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Inflection Points",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/inflection-points"
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
           title: "Inflection Points & Concavity Visualizer | Learn Math Class",
           description: "Drag c along f(x) = (1/3)x^3 - x to see how f''(c) decides concavity. Concave up, concave down, and inflection scenarios animate step by step with theory.",
           keywords: keyWords.join(", "),
           url: "/calculus/visual-tools/inflection-points",
           name: "Inflection Points and Concavity Visualizer",
           hubDescription: "Drag point c along the cubic f(x) = (1/3)x^3 - x to see how the sign of f''(c) decides whether the curve is concave up, concave down, or inflecting. Three pre-built scenarios animate the seven analysis steps from picking a region to evaluating f''(c) and shading the concavity gap between curve and tangent.",
           category: "Calculus",
           subCategory: "Derivatives"
         }
       }
    }
   }

export default function InflectionPointsVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Inflection Points</h1>
   <br/>
  <div style={{transform:'scale(0.9)',width:'80%',margin:'auto'}}>
   <FunctionConcavity/>
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