// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import EquationVisualizer from '../../../../app/components/algebra/equations/visualizer/EquationsVisualizer'


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
//         url: "/algebra/visual-tools/equation",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Equation Visual Explorer</h1>
//    <br/>
//    <div style={{transform:'scale(0.95)'}}>
//          <EquationVisualizer/>
//    </div>
  
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
import EquationVisualizer from '../../../../app/components/algebra/equations/visualizer/EquationsVisualizer'


export async function getStaticProps(){

  const keyWords = [
    'equation visualizer',
    'solve equation graphically',
    'f(x) = n visualizer',
    'interactive equation solver',
    'visual equation solver',
    'equation explorer',
    'sign chart equation',
    'find equation solutions',
    'equation root finder',
    'graphical equation solving',
    'equation step by step',
    'algebra equation tool',
    'linear quadratic equation visualizer',
    'curve crosses level n',
    'equation solutions intersection',
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `
- **Equation** $f(x) = n$ — a statement that the value of the function $f$ at some $x$ equals the constant $n$
- **Solution** — a value of $x$ for which $f(x) = n$ holds; geometrically, an $x$ where the curve $y = f(x)$ crosses the horizontal line $y = n$
- **Solution set** — the set of all $x$ satisfying the equation, possibly empty, finite, or infinite
- **f(x) − n** — the auxiliary function whose zeros are exactly the solutions of $f(x) = n$
- **Sign chart** — a table tracking the sign of $f(x) - n$ across intervals separated by its zeros
- **Critical point (in this context)** — a zero of $f(x) - n$ or a point where $f$ is undefined; the only places the sign of $f(x) - n$ can change
- **Marble** — the draggable probe positioned at some $x$ in the visualizer; lets you read off $f(x)$ at that point
- **Multiplicity** — for polynomial equations, how many times a given solution is repeated as a root of $f(x) - n$
- **Linear equation** — $f(x) = n$ where $f$ is a degree-1 polynomial; has exactly one solution unless $f$ is constant
- **Quadratic equation** — $f(x) = n$ where $f$ is a degree-2 polynomial; has zero, one, or two real solutions
`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the explorer and you see a curve $y = f(x)$ plotted against a horizontal target line $y = n$. The blue marble sits on the curve at a chosen $x$. Solutions of $f(x) = n$ are exactly the points where the curve crosses the line.

The layout has two columns. On the left, the **Hero panel** shows the equation symbolically and the graph with the marble; the **Controls panel** below it holds equation parameters, templates, and interaction modes. On the right, the **Sign chart panel** displays a row-by-row table of signs for $f(x) - n$, and the **Explanation panel** narrates the current step or live reading.

A **type bar** at the top of the page lets you switch between equation families — linear, quadratic, and others — each with its own set of parameter sliders. No setup is needed: pick a type, drag the marble, and watch which intervals satisfy the equation light up.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Selecting an Equation Type`,
      content: `The **type bar** at the top of the page is a row of tabs, one per equation family the visualizer supports. Each tab carries a tooltip describing what the family looks like (degree, structure, typical solutions). Click a tab to switch families.

Switching the type does three things at once:

• The graph updates to show the new function $f(x)$
• The parameter sliders below the graph reconfigure to match the new family (a linear equation has two sliders for slope and intercept; higher-degree equations have more)
• The sign chart rebuilds with a new set of factors and intervals

The currently active type is highlighted in blue. Your last-chosen parameters for each family are preserved when you switch back, so you can compare how the same target $n$ behaves across different function shapes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Three Interaction Modes`,
      content: `The Controls panel offers three modes for moving the marble, each grouped behind its own button. Only one mode is active at a time.

• **Drag** — grab the marble with the mouse and slide it along the $x$-axis. Hold shift to snap to integer values. The most direct way to probe how $f(x)$ compares to $n$ at any chosen $x$.
• **Step** — click Previous and Next to jump the marble between **stops**: critical points, zeros of $f(x) - n$, and other named landmarks. Useful for a guided tour of the equation's structure.
• **Auto** — the marble plays back the sequence of stops automatically. A speed slider controls playback rate; Space toggles play/pause.

The current mode is highlighted in blue, with a small detail strip showing extra context (current step number, playback speed, and so on).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Adjusting Parameters and Using Templates`,
      content: `Each equation type has its own **parameter sliders**, laid out in a three-column grid below the graph. Drag a slider, click a tick to snap to a notable value, or type directly into the numeric input. Sliders that hit invalid combinations (such as a denominator forced to zero) display a red error chip with the reason.

The **target value $n$** has its own slider — the horizontal line moves up and down as you drag it. Watching the line sweep across the curve makes the dependence of the solution set on $n$ visceral: solutions appear, merge at a tangent, and disappear as $n$ crosses critical levels.

Above the sliders, the **Templates** strip offers a few preset parameter combinations for the current type — useful as starting points for common shapes (no real solutions, double root, two distinct roots, and so on). Click a template to load it; click again to clear it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Sign Chart`,
      content: `The **Sign chart panel** on the right is a compact table tracking the sign of $f(x) - n$ across the real line. Reading it top to bottom:

• **Header row** — the critical $x$-values (zeros of $f(x) - n$ and any undefined points), in increasing order, dividing the real line into intervals
• **Factor rows** — for each factor of $f(x) - n$, a row of $+$, $-$, or $0$ entries showing the sign of that factor in each interval
• **Product row** — highlighted, gives the sign of $f(x) - n$ itself in each interval, computed by multiplying the factor signs
• **Critical-point columns** — show where each factor is zero or where $f(x) - n$ itself is undefined (marked in red)

Hovering or clicking an interval or critical point updates the explanation panel with details. The intervals where the product row reads zero are exactly the solution intervals of $f(x) = n$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reading the Explanation Panel`,
      content: `The **Explanation panel** below the sign chart has two tabs accessed via small buttons.

• **Steps** — a numbered list reconstructing the standard solving procedure: rewrite the equation as $f(x) - n = 0$, factor or otherwise reduce, locate the zeros, classify them by multiplicity, and read off the solution set. Each step is short and tied to what is on screen.
• **Live** — a compact table that recomputes whenever the marble moves. It shows the marble's current $x$, the value of $f(x)$, the target $n$, the difference $f(x) - n$, and its sign, ending with a verdict: does the equation $f(x) = n$ hold at this $x$?

A short verbal summary below the table phrases the conclusion in plain language. The Steps tab is best for understanding *why* a solution is what it is; the Live tab is best for *checking* candidate solutions in real time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Keyboard Shortcuts`,
      content: `The visualizer supports a small set of keyboard shortcuts that work whenever the page has focus (and you are not typing in an input).

• **Arrow Left / Arrow Right** — nudge the marble in drag mode by $0.1$; hold Shift to nudge by $1$
• **[** and **]** — step the marble to the previous or next named stop in step mode
• **Space** — toggle play/pause in auto mode, or switch to auto mode if you are in another mode
• **R** — reset all parameters, marble position, and mode to their defaults

The shortcut hint appears in the header above the type bar. The shortcuts are designed to let you sweep across the solution set without taking your hands off the keyboard, useful when you want to compare many configurations quickly.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Does $f(x) = n$ Mean?`,
      content: `The equation $f(x) = n$ asks for every $x$ at which the function $f$ takes the specific value $n$. Geometrically, this is asking where the graph $y = f(x)$ crosses the horizontal line $y = n$ — each crossing point gives one solution.

The number of solutions depends entirely on how the curve and the line interact:

• If they never meet, the equation has **no solution** — the solution set is empty
• If they meet at a single point, the equation has **one solution** — often the case for linear equations
• If the line crosses the curve cleanly at several places, the equation has **several distinct solutions** — common for polynomial equations of degree two or more
• If the line is tangent to the curve at a point, that point is a **repeated solution** (multiplicity at least two)

Solving $f(x) = n$ is exactly the same as finding the zeros of $f(x) - n$ — that single rearrangement is what the sign chart and explanation panel both rely on.

For comprehensive theory on equations and solution sets, see **algebra equations theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why the Sign Chart Helps Even for Equations`,
      content: `Sign charts are most often associated with inequalities, but they are equally useful for equations. The reason: the zeros of $f(x) - n$ are exactly the points where its sign changes (or fails to change, in the case of repeated roots).

A sign chart for $f(x) - n$ presents the structure of the equation visually:

• Every column header in the chart marks a candidate solution
• Sign-change columns identify single (odd-multiplicity) solutions
• Columns where the sign does not change identify even-multiplicity solutions where the curve touches the line without crossing
• Columns labeled "undefined" mark points where $f$ itself blows up — these are not solutions of the equation but may be boundary points of the domain

Reading the sign chart, you get the complete solution structure at a glance without needing to plug values back into $f$.

For the inequality version of the same idea, see **inequalities visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Equations** — the general theory of equations, methods of solution, and classification by type.

**Inequalities Visualizer** — the companion tool for $f(x) < n$, $f(x) \\leq n$, and the strict and non-strict comparisons; uses the same marble-and-sign-chart layout.

**Linear Equations** — the simplest case, where $f$ is a degree-one polynomial; the visualizer always produces a single solution unless $f$ is constant.

**Quadratic Equations** — degree-two case, where the equation has zero, one, or two real solutions depending on the discriminant of $f(x) - n$.

**Polynomial Equations** — higher-degree cases, where the fundamental theorem of algebra bounds the number of complex solutions by the degree.

**Sign Charts** — the general technique for tracking the sign of a function across intervals, used here and throughout calculus.

**Function Graphs** — visualizers for plotting $y = f(x)$ on its own, without comparison to a target.

**Equation Solving Step by Step** — written walkthroughs of standard solution methods for each equation type.`,
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
      question: "What does the Equation Visual Explorer do?",
      answer: "It solves equations of the form f(x) equals n graphically. A curve representing f(x) is plotted against a horizontal target line at height n, and the solutions of the equation are exactly the points where the curve crosses the line. You drag a marble along the x-axis to probe values, and the sign chart of f(x) minus n shows the structure of the solution set."
    },
    obj2: {
      question: "What equation types can the visualizer handle?",
      answer: "Multiple equation families are supported via the type tabs at the top of the page, including linear and quadratic forms and other common families. Each type has its own parameter sliders so you can adjust the shape of the curve, and the sign chart and explanation panel rebuild automatically when you switch types."
    },
    obj3: {
      question: "What is the sign chart and how do I read it?",
      answer: "The sign chart is a table tracking the sign of f(x) minus n across the real line. Each column corresponds to an interval bounded by critical points (zeros of f(x) minus n or points where f is undefined); each factor of f(x) minus n gets a row showing whether it is positive, negative, or zero in that interval; the highlighted product row shows the sign of f(x) minus n itself. Columns where the product is zero identify solutions of the equation."
    },
    obj4: {
      question: "What is the marble and how do I use it?",
      answer: "The marble is the draggable probe sitting on the curve at a chosen x. Drag it to read off the value of f at that x and to check whether f(x) equals n. You can drag it directly, step it through named stops (zeros and critical points), or let it auto-play across the entire sequence at adjustable speed."
    },
    obj5: {
      question: "How is solving f(x) equals n different from f(x) equals zero?",
      answer: "The two are the same problem in disguise. Solving f(x) equals n is equivalent to solving f(x) minus n equals zero, which is why the visualizer builds its sign chart for the auxiliary function f(x) minus n rather than for f(x) itself. The target n is just a vertical shift of the zero level."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Equation Visual Explorer",
      "description": "Interactive visualizer for solving f(x) = n by dragging a marble along the curve. Switch equation types, follow solution steps, and read the sign chart of f(x) − n.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/equation",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable marble probe along the curve y = f(x) compared against the target line y = n",
        "Multiple equation families selectable from a top type bar with per-family parameter sliders",
        "Three interaction modes: free drag, step through named stops, and auto-play with adjustable speed",
        "Sign chart of f(x) − n broken down factor by factor with interactive intervals and critical points",
        "Explanation panel with Steps tab for guided solution and Live tab for real-time check at the current marble position",
        "Parameter templates for common cases such as no solution, double root, and two distinct roots",
        "Keyboard shortcuts for nudging, stepping, play/pause, and reset"
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Equation Visual Explorer",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/equation"
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
        title: "Equation Visual Explorer | Solve f(x) = n Step by Step",
        description: "Solve equations of the form f(x) = n by dragging a marble along the curve. Switch equation types, follow steps, and read the sign chart of f(x) - n.",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/equation",
        name: "Equation Visual Explorer",
        hubDescription: "Drag a marble along the x-axis and watch where the curve crosses the horizontal target line — those crossings are the solutions of f(x) = n. Switch between linear, quadratic, and other equation families, play the solution back in steps, and read the sign chart showing where f(x) − n is positive, negative, or zero.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function EquationVisualExplorerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    { id:'0',  title:sectionsContent.obj0.title,  link:sectionsContent.obj0.link,  content:[sectionsContent.obj0.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Equation Visual Explorer</h1>
      <br/>
      <div style={{transform:'scale(0.95)'}}>
        <EquationVisualizer/>
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