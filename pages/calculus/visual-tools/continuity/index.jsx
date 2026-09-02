// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionContinuity from '../../../../app/components/functions/continuity/FunctionContinuity'


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
//         url: "/calculus/visual-tools/continuity",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Continuity</h1>
//    <br/>
//    <FunctionContinuity explanations={explanations}/>
//      <br/>
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
import FunctionContinuity from '../../../../app/components/functions/continuity/FunctionContinuity'
import functionContinuityDiagrams from '../../../../app/components/functions/continuity/functionContinuityDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'continuity',
    'continuity checker',
    'continuity at a point',
    'three-condition continuity test',
    'continuous function',
    'discontinuity types',
    'removable discontinuity',
    'jump discontinuity',
    'infinite discontinuity',
    'limit and continuity',
    'one-sided limits',
    'continuity visualizer',
    'continuity calculator',
    'interactive continuity tool',
    'vertical asymptote discontinuity'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Continuity at a point** — the function $f$ is continuous at $c$ when three conditions all hold: $f(c)$ is defined, $\\lim_{x \\to c} f(x)$ exists, and the two are equal.

**One-sided limits** — the left limit $f(c^{-}) = \\lim_{x \\to c^{-}} f(x)$ and the right limit $f(c^{+}) = \\lim_{x \\to c^{+}} f(x)$. The two-sided limit exists exactly when both one-sided limits exist and agree.

**Removable discontinuity** — a point where the two-sided limit exists but either $f(c)$ is undefined or $f(c)$ differs from the limit. Redefining $f(c)$ to the limit value repairs the function.

**Jump discontinuity** — a point where both one-sided limits are finite but unequal. No single value of $f(c)$ can repair it.

**Infinite discontinuity** — a point where at least one one-sided limit is $+\\infty$ or $-\\infty$. Typically a vertical asymptote.

**Continuous on an interval** — $f$ is continuous at every point in the interval.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The page opens with the **Hole at x = 1** family pre-loaded, with the probing point $c$ already parked at the discontinuity. The three-condition checklist below the graph shows two passes and one fail at $c = 1$, classifying the point as a **removable** discontinuity.

To explore quickly:

• Pick a different function family from the left panel — **Smooth**, **Hole**, **Jump**, **Wrong value**, **Asymptote**, or **Staircase**. Each demonstrates a specific way continuity can pass or fail.

• Drag the **point c** slider to move the probing position through the graph. The dashed vertical line on the plot follows $c$, and the three checklist rows update live.

• Use the **Jump to** buttons (when present) to land directly on the family&apos;s known points of interest — the few values of $c$ where the checklist actually has something to fail.

• The verdict box at the bottom of the checklist gives the one-word classification: continuous, removable, jump, or infinite.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Function Families`,
      content: `Each family in the left panel is chosen to isolate one continuity behavior:

• **Smooth (x²)** — a polynomial, continuous everywhere. The checklist passes at every $c$. Useful as a baseline.

• **Hole at x = 1** — the rational function $(x^2 - 1)/(x - 1)$, which simplifies algebraically to $x + 1$ but is undefined at $x = 1$. The limit exists; the value does not.

• **Jump at x = 0** — a piecewise function whose two pieces produce different one-sided limits at the seam. The two-sided limit fails to exist.

• **Wrong value at x = 1** — the line $x + 1$ everywhere except $f(1) = 0$. The limit exists, the value exists, but they disagree.

• **Asymptote at x = 0** — the function $1/x^2$, with both one-sided limits going to $+\\infty$. Not removable.

• **Staircase** — $\\lfloor x \\rfloor + 0.5$. A jump at every integer; continuous between them.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Probing With the c Slider`,
      content: `The **point c** slider sweeps the probing position from $-3$ to $+3$ in steps of $0.05$. As you drag:

• The dashed vertical line on the graph moves to the current $c$.

• The horizontal dashed lines for $L^{-}$ and $L^{+}$ relocate to the current one-sided limit values.

• Dots appear on the graph at $(c, L^{-})$, $(c, L^{+})$, and $(c, f(c))$ — so you can see when the three quantities coincide and when they don&apos;t.

• Each of the three checklist rows updates with the current numerical value and a pass or fail mark.

For most values of $c$ the checklist passes — every function in the tool is continuous **almost everywhere**. The interesting points are the isolated values where something fails. The slider is for sweeping past them and watching the checklist flip; the jump-to buttons are for landing on them exactly.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Jump-to Buttons`,
      content: `Each family ships with its known points of interest as **Jump to** buttons beneath the $c$ slider. Clicking one snaps $c$ to that exact value, so you don&apos;t have to fight the slider to land precisely on a discontinuity.

• Most families have one or two points of interest — the spot where the limit fails, the spot where $f(c)$ is mis-set, or the asymptote.

• The Staircase family has five — one at each integer in the visible window — so you can walk through a regular sequence of jump discontinuities.

• When $c$ is currently on a point of interest, that button is highlighted; click any other to move.

The **Reset** button next to the **Parameters** label returns $c$ to the family&apos;s first point of interest (or to zero if the family has none).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Three-Condition Checklist`,
      content: `The boxed panel below the graph lists the three conditions for continuity at $c$, each with a green check or a red cross:

• **Condition 1: f(c) is defined.** Shown with the numerical value when it passes; with the phrase **undefined** when it fails. Polynomials always pass; rational functions fail wherever the denominator is zero.

• **Condition 2: the limit exists.** Passes when $L^{-} = L^{+}$ and both are finite. Fails for jumps (finite but unequal) and infinite discontinuities (at least one limit is not finite).

• **Condition 3: f(c) equals the limit.** Can only be checked when conditions 1 and 2 both pass. When 1 or 2 has already failed, this row defers to the prior failure.

The final verdict line summarizes the result: **continuous** when all three pass, otherwise **removable**, **jump**, or **infinite** depending on which condition failed and how.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Display Toggles`,
      content: `The **Display** section in the left panel controls which visual elements show on the graph:

• **f(x)** — toggles the function curves themselves. Off by mistake on first try, but useful when you want to focus on just the limit lines.

• **L⁻, L⁺** — toggles the dashed horizontal limit lines and their markers at the point $(c, L^{\\pm})$. Turn off when probing a continuous region where everything coincides.

• **x = c** — toggles the dashed vertical line that follows the slider. Off, the visible state is cleaner but you lose the visual anchor for $c$.

The **Accent color** picker at the bottom recolors the live highlight throughout — slider track, point marker, callout label, and the verdict border — useful for distinguishing screenshots or for personal preference.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is Continuity`,
      content: `A function $f$ is **continuous at the point $c$** when three conditions all hold:

$$1.\\ f(c) \\text{ is defined.}$$
$$2.\\ \\lim_{x \\to c} f(x) \\text{ exists.}$$
$$3.\\ \\lim_{x \\to c} f(x) = f(c).$$

Informally: as $x$ approaches $c$, the function value approaches $f(c)$. The graph passes through the point $(c, f(c))$ without a break, hole, or jump.

A function is **continuous on an interval** $I$ when it is continuous at every point of $I$. Polynomials, $\\sin x$, $\\cos x$, $e^x$, and many other elementary functions are continuous on their entire domain.

For the full theory of continuity and the formal $\\varepsilon$–$\\delta$ definition, see the **continuity** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Types of Discontinuities`,
      content: `When a function fails to be continuous at $c$, the failure pattern names the discontinuity:

• **Removable** — the two-sided limit exists, but either $f(c)$ is undefined (condition 1 fails) or $f(c)$ differs from the limit (condition 3 fails). Reassigning the single value $f(c)$ to the limit repairs the function. The Hole and Wrong-value families show this case.

• **Jump** — both one-sided limits are finite, but unequal. The two-sided limit doesn&apos;t exist. No single value of $f(c)$ can repair it. The Jump and Staircase families show this case.

• **Infinite** — at least one one-sided limit is $+\\infty$ or $-\\infty$, typically because of a vertical asymptote. Not removable. The Asymptote family shows this case.

For deeper coverage of each kind, see the **discontinuity** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Continuity and Limits`,
      content: `Continuity is built directly on limits. The middle condition — **the limit exists** — is exactly the condition that $\\lim_{x \\to c^{-}} f(x) = \\lim_{x \\to c^{+}} f(x)$ and is finite.

So checking continuity at $c$ amounts to comparing three numbers:

• the left limit $L^{-} = \\lim_{x \\to c^{-}} f(x)$,

• the right limit $L^{+} = \\lim_{x \\to c^{+}} f(x)$,

• the value $f(c)$.

If all three are equal and finite, $f$ is continuous at $c$. Each pattern of agreement and disagreement produces a different kind of discontinuity. The tool displays these three numbers live as you slide $c$ — the same three numbers that the checklist rows compare.

For a tool focused on the limit step alone — including an $\\varepsilon$ slider and one-sided approach controls — see the **limits visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Limits** — the foundation continuity is built on. One-sided limits and two-sided limits, formal definitions, and limit laws.

**Discontinuity** — full classification of removable, jump, infinite, and essential discontinuities, with examples of each.

**Differentiability** — every differentiable function is continuous, but not every continuous function is differentiable. The absolute value function is continuous at $0$ but not differentiable there.

**Intermediate Value Theorem** — continuous functions on closed intervals take every value between their endpoints. The most useful direct consequence of continuity.

**Extreme Value Theorem** — continuous functions on closed bounded intervals attain a maximum and minimum.

**Piecewise functions** — the most common source of jump and removable discontinuities. See the **piecewise function builder** for an interactive view.

**Asymptotes** — vertical asymptotes are infinite discontinuities; horizontal asymptotes describe end behavior.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Smooth: All Three Conditions Pass`,
      content: `The Smooth family is $f(x) = x^2$, a polynomial, and polynomials are continuous on the whole real line. There is no point of interest to jump to because there is nothing to find — the checklist passes at every $c$ you can slide to.

At $c = 0$ the readings are $f(c) = 0$, $L^- = 0$, $L^+ = 0$. All three rows turn green: the value exists, the two one-sided limits agree, and their common value matches $f(c)$.`,
      before: ``,
      after: `This is the baseline the other five families are measured against, and it is worth spending a moment on before moving to the failures. Continuity is the ordinary case — the interesting question is never "why is this function continuous here" but "what exactly broke at the one point where it isn't".

Slide $c$ anywhere on this family and watch nothing happen. The dashed vertical moves, the $L$ line follows it, the three checks stay green.`,
      link: '',
    },
    obj12: {
      title: `Hole: the Value Is Missing`,
      content: `The Hole family is $f(x) = \frac{x^2 - 1}{x - 1}$. Factoring gives $\frac{(x-1)(x+1)}{x-1}$, which cancels to $x + 1$ — but only for $x \neq 1$. At $x = 1$ the original expression is $\frac{0}{0}$, so the function simply has no value there.

At the point of interest $c = 1$: $L^- = 2$ and $L^+ = 2$, so condition 2 passes cleanly. Condition 1 fails, because $f(1)$ is undefined. The verdict is a **removable** discontinuity.`,
      before: ``,
      after: `Removable is the right word in the strict sense: define $f(1) = 2$ and every condition passes. The repair is a single point, and the limit tells you exactly which value to use.

Note what the graph does and does not show. The curve looks like the line $y = x + 1$ with a gap you would miss at a glance, which is the practical danger of this case — the algebra says the point is absent, not the picture.`,
      link: '',
    },
    obj13: {
      title: `Jump: the One-Sided Limits Disagree`,
      content: `The Jump family is piecewise: $f(x) = x$ for $x < 0$, and $f(x) = x + 1$ for $x \geq 0$. Each piece is continuous on its own; the trouble is at the seam.

At $c = 0$: $L^- = 0$ approaching from the left, $L^+ = 1$ approaching from the right. Two different finite values, so the two-sided limit does not exist and condition 2 fails. Condition 1 passes — $f(0) = 1$ is perfectly well defined.`,
      before: ``,
      after: `This one is not repairable, and the reason is worth stating precisely. A patch can only change $f(c)$, a single number. Here no single number equals both $0$ and $1$, so no redefinition of $f(0)$ can make the limit exist. The gap has size $L^+ - L^- = 1$, and that gap is a property of the two pieces, not of the value at the seam.

That is the whole distinction between a removable discontinuity and a jump: removable means the limit exists and the value is wrong or missing; jump means the limit itself fails, and the [types of discontinuities](!#types-of-discontinuities) section works through the full classification.`,
      link: '',
    },
    obj14: {
      title: `Wrong Value: the Limit Exists but Misses`,
      content: `The Wrong value family is the line $f(x) = x + 1$ everywhere except at a single point, where the definition overrides it: $f(1) = 0$ instead of the natural $2$.

At $c = 1$ the first two conditions pass — $f(1) = 0$ is defined, and $L^- = L^+ = 2$ so the limit exists. It is condition 3 that fails: $f(c) \neq \lim_{x \to c} f(x)$, because $0 \neq 2$. The graph shows it plainly, with the isolated dot sitting well below the line it belongs to.`,
      before: ``,
      after: `The verdict is again **removable**, and this family exists to make the point that removable covers two different failures. In the hole family condition 1 failed and the value was missing; here condition 1 passes and condition 3 fails, because the value is present but wrong. Both are repaired the same way — set $f(1) = 2$, the value the limit dictates.

That shared repair is why the classification groups them together. What matters for repairability is whether $\lim_{x \to c} f(x)$ exists, not whether $f(c)$ happens to be defined.`,
      link: '',
    },
    obj15: {
      title: `Asymptote: an Infinite Discontinuity`,
      content: `The Asymptote family is $f(x) = \frac{1}{x^2}$, which grows without bound on both sides of the origin.

At $c = 0$ the tool reports $f(c)$ as undefined and both one-sided limits as $+\infty$. Condition 1 fails and condition 2 fails as well — and it fails for a stronger reason than in the jump case. It is not that the two sides disagree; it is that neither side approaches a finite value at all.`,
      before: ``,
      after: `Because the limit is infinite rather than merely two-valued, no patch helps. Assigning $f(0)$ any real number leaves the surrounding values growing arbitrarily large, so condition 3 could never hold. The tool labels this **infinite**, and marks it explicitly as not removable.

Worth noticing: "$L^- = L^+ = +\infty$" is a statement about how the function behaves, not a claim that the limit exists. In the strict sense the limit fails to exist here — $\infty$ is a description of the failure, not a value.`,
      link: '',
    },
    obj16: {
      title: `Staircase: Discontinuous at Every Integer`,
      content: `The Staircase family is $f(x) = \lfloor x \rfloor + 0.5$, the floor function lifted by a half. It is flat on each interval between consecutive integers and steps up by exactly $1$ at each integer.

The point of interest the tool jumps to first is $c = -2$, where $L^- = -2.5$, $L^+ = -1.5$, and $f(c) = -1.5$. That is a **jump** discontinuity, structurally identical to the jump family — except that here it repeats at every integer, and the jump-to buttons walk through five of them.`,
      before: ``,
      after: `This family is the useful counterweight to the tidy examples. The others each have one broken point and are continuous everywhere else; this one has infinitely many, one per integer, and is still continuous on every interval strictly between them.

That combination is entirely ordinary. "Continuous" is a statement about a single point, and "continuous on an interval" means continuous at each point of it. A function can fail the test at infinitely many places and still be perfectly well behaved on each piece in between — which is exactly how floor, ceiling, and rounding functions behave in practice.`,
      link: '',
    }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     The SVGs come from the tool's own scene description, serialised through
     the core's generateSVG - see app/components/functions/frozenSvg.js. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: functionContinuityDiagrams[key], caption, text })

  const stateUnits = {
    smooth: unit('smooth', 'Smooth, frozen at c = 0',
      'f(x) = x&sup2; with the probe at the origin. One L line, one marker, nothing else to see - ' +
      'f(c), L&#8315; and L&#8314; all read 0 and the three checks pass.'),
    hole: unit('hole', 'Hole, frozen at c = 1',
      'The L line sits at 2 and the curve passes straight through that level, but no f(c) marker sits ' +
      'on it: the function has no value at x = 1. Condition 1 is the one that fails.'),
    jump: unit('jump', 'Jump, frozen at c = 0',
      'Two L lines instead of one, at 0 and at 1. The closed endpoint belongs to the upper piece and the ' +
      'open one to the lower - the visual signature of one-sided limits that disagree.'),
    wrongvalue: unit('wrongvalue', 'Wrong value, frozen at c = 1',
      'The L line is at 2 where the line would go, while the f(c) marker sits alone at 0. Both are drawn, ' +
      'and the vertical distance between them is the failure of condition 3.'),
    asymptote: unit('asymptote', 'Asymptote, frozen at c = 0',
      'f(x) = 1/x&sup2; climbing off the top of the frame on both sides. No L lines are drawn at all, ' +
      'because neither one-sided limit is finite.'),
    staircase: unit('staircase', 'Staircase, frozen at c = -2',
      'Each step carries a closed endpoint on the left and an open one on the right. L&#8315; = -2.5 and ' +
      'L&#8314; = -1.5 straddle the step, and the same picture repeats at every integer.'),
  }


  /* ---- per-family panel notes, passed into the component (Line 1) ----
     FunctionContinuity had no explanations prop; one was added additively and
     defaults to null, so the panel reads exactly as before when nothing is
     passed. Content is markdown - InfoPanel renders it through processContent,
     so the anchors use the normal [text](!#slug) form. */
  const explanations = {
    smooth: `### Where this leads\n\nThe passing case, and the baseline for the other five. See [smooth: all three conditions pass](!#continuous-everywhere) or compare [all six families](!#the-function-families).`,
    hole: `### Where this leads\n\nCondition 1 fails while the limit survives, which is what makes the break repairable. See [hole: the value is missing](!#removable-hole) or compare [all six families](!#the-function-families).`,
    jump: `### Where this leads\n\nThe one-sided limits disagree, so no single patched value can help. See [jump: the one-sided limits disagree](!#jump-discontinuity) or compare [all six families](!#the-function-families).`,
    wrongvalue: `### Where this leads\n\nThe limit exists and f(c) exists, but they differ - condition 3 is the one that breaks. See [wrong value: the limit exists but misses](!#wrong-value-at-a-point) or compare [all six families](!#the-function-families).`,
    asymptote: `### Where this leads\n\nNeither one-sided limit is finite, which is a harder failure than a jump. See [asymptote: an infinite discontinuity](!#infinite-discontinuity) or compare [all six families](!#the-function-families).`,
    staircase: `### Where this leads\n\nA jump at every integer, and continuity on each interval between them. See [staircase: discontinuous at every integer](!#the-staircase) or compare [all six families](!#the-function-families).`,
  }


  const faqQuestions = {
    obj1: {
      question: "What does it mean for a function to be continuous at a point?",
      answer: "A function is continuous at a point c when three conditions all hold: f(c) is defined, the two-sided limit of f(x) as x approaches c exists, and the value f(c) equals that limit. Informally, the graph passes through the point with no break, hole, or jump."
    },
    obj2: {
      question: "What are the three conditions for continuity at a point?",
      answer: "First, f(c) must be defined as a real number. Second, the limit of f(x) as x approaches c must exist, which means the left and right one-sided limits agree on a single finite value. Third, that limit must equal f(c). If any of the three fails, the function is discontinuous at c."
    },
    obj3: {
      question: "What is the difference between removable, jump, and infinite discontinuities?",
      answer: "A removable discontinuity is one where the two-sided limit exists, but f(c) is either undefined or set to the wrong value, so redefining f(c) repairs the function. A jump discontinuity has two different finite one-sided limits, so no single value can repair it. An infinite discontinuity has at least one one-sided limit going to plus or minus infinity, typically a vertical asymptote."
    },
    obj4: {
      question: "How do you check continuity using this tool?",
      answer: "Pick a function family from the left panel, then slide the c slider or click a Jump-to button to set the probing point. The checklist below the graph evaluates each of the three conditions live and displays a green check or red cross. The final verdict line names the result as continuous, removable, jump, or infinite."
    },
    obj5: {
      question: "Which common functions are continuous everywhere?",
      answer: "Polynomials are continuous on the entire real line. Sine, cosine, and the exponential function are also continuous everywhere. Rational functions, logarithms, square roots, and tangent are continuous on their natural domain but have discontinuities wherever they would be undefined."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Continuity Checker",
      "description": "Interactive tool for checking continuity at a point using the three-condition test, with live evaluation across six function families.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/continuity",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Slide the probing point c across the graph and watch the three-condition checklist update live",
        "Pick from six function families covering smooth, hole, jump, wrong-value, asymptote, and staircase cases",
        "Jump-to buttons that snap c directly to known points of discontinuity",
        "Automatic classification of the result as continuous, removable, jump, or infinite",
        "Visual markers for the left limit, right limit, and f(c) value at the current point",
        "Toggle the function curve, one-sided limit lines, and probing line independently",
        "Accent color picker for the live highlight"
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
      "keywords": "continuity, continuity checker, continuity at a point, three-condition continuity test, continuous function, discontinuity types, removable discontinuity, jump discontinuity, infinite discontinuity, limit and continuity, one-sided limits, continuity visualizer, continuity calculator, interactive continuity tool, vertical asymptote discontinuity"
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
          "name": "Continuity Checker",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/continuity"
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
        title: "Continuity Checker - Interactive Visualizer | Learn Math Class",
        description: "Check continuity at any point with the three-condition test. Slide c to probe holes, jumps, asymptotes, and staircases with live verdict feedback.",
        keywords: keyWords.join(", "),
        url: "/calculus/visual-tools/continuity",
        name: "Continuity Checker",
        hubDescription: "Probe continuity at any point with a live three-condition checklist — f(c) defined, two-sided limit exists, f(c) equals the limit. Slide c through holes, jumps, asymptotes, and staircases and watch each row flip pass or fail in real time.",
        category: "Limits and Continuity",
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="60" x2="76" y2="60" stroke="#B5D4F4" stroke-width="0.9"/><line x1="14" y1="8" x2="14" y2="64" stroke="#B5D4F4" stroke-width="0.9"/><line x1="42" y1="32" x2="42" y2="60" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="2.5,2"/><line x1="18" y1="48" x2="42" y2="32" stroke="#85B7EB" stroke-width="1.9"/><line x1="42" y1="18" x2="70" y2="12" stroke="#85B7EB" stroke-width="1.9"/><line x1="42" y1="30" x2="42" y2="20" stroke="#ED93B1" stroke-width="1.2" stroke-dasharray="2,1.6"/><circle cx="42" cy="32" r="3" fill="#85B7EB" stroke="#0C447C" stroke-width="1.2"/><circle cx="42" cy="18" r="3" fill="none" stroke="#ED93B1" stroke-width="1.7"/><text x="57" y="27" font-family="Georgia,serif" font-size="7" fill="#ED93B1" text-anchor="middle">jump</text><text x="42" y="70" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">a</text></svg>`
      },

    }
  }
}

export default function ContinuityChecker({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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
    stateRow('obj11', 'continuous-everywhere', 'smooth'),
    stateRow('obj12', 'removable-hole', 'hole'),
    stateRow('obj13', 'jump-discontinuity', 'jump'),
    stateRow('obj14', 'wrong-value-at-a-point', 'wrongvalue'),
    stateRow('obj15', 'infinite-discontinuity', 'asymptote'),
    stateRow('obj16', 'the-staircase', 'staircase'),
    plain('obj3', 'the-c-slider'),
    plain('obj4', 'jump-to-buttons'),
    plain('obj5', 'the-three-condition-checklist'),
    plain('obj6', 'display-toggles'),
    plain('obj7', 'what-is-continuity'),
    plain('obj8', 'types-of-discontinuities'),
    plain('obj9', 'continuity-and-limits'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Continuity Checker - Interactive Visualizer</h1>
      <br/>
      <FunctionContinuity explanations={explanations}/>
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