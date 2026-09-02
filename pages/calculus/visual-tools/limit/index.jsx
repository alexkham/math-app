// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionLimit from '../../../../app/components/functions/limit/FunctionLimit'


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
//         url: "/calculus/visual-tools/limit",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Limit</h1>
//    <br/>
//    <FunctionLimit explanations={explanations}/>
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
import FunctionLimit from '../../../../app/components/functions/limit/FunctionLimit'
import functionLimitDiagrams from '../../../../app/components/functions/limit/functionLimitDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'limit',
    'limit of a function',
    'limit visualizer',
    'limit calculator',
    'one-sided limits',
    'left limit',
    'right limit',
    'two-sided limit',
    'limit does not exist',
    'removable discontinuity',
    'jump discontinuity',
    'infinite limit',
    'oscillating limit',
    'epsilon approach',
    'interactive limit tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Limit at a point** — the value $f(x)$ approaches as $x$ approaches $c$, written $\\lim_{x \\to c} f(x)$. The limit is about the **approach**, not the value $f(c)$ itself.

**Left limit** — $L^{-} = \\lim_{x \\to c^{-}} f(x)$. The value approached from values smaller than $c$.

**Right limit** — $L^{+} = \\lim_{x \\to c^{+}} f(x)$. The value approached from values larger than $c$.

**Two-sided limit** — exists exactly when $L^{-}$ and $L^{+}$ are both finite and equal. The common value is the limit.

**DNE** — abbreviation for **does not exist**. Used for limits when the one-sided limits disagree, one is infinite, or the function oscillates.

**Removable discontinuity** — the two-sided limit exists but $f(c)$ is either undefined or different from the limit. Patching $f(c)$ would restore continuity.

**Vertical asymptote** — a value of $c$ where at least one one-sided limit is $+\\infty$ or $-\\infty$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The page opens with the **Hole** family $f(x) = (x^2 - 1)/(x - 1)$ already loaded, centered at $c = 1$. You see:

• The blue curve of $f$, with a gap at the hole.

• A dashed light-blue horizontal line at $L^{-} = L^{+} = 2$.

• A dashed gray vertical line at $x = c$.

• Two dots at $(c - \\varepsilon, f(c - \\varepsilon))$ and $(c + \\varepsilon, f(c + \\varepsilon))$ that move when you drag the $\\varepsilon$ slider.

Below the graph, the **From the left** and **From the right** cards report the numerical values approaching $L^{-}$ and $L^{+}$ as $\\varepsilon$ shrinks. The card below that gives the two-sided limit verdict and the continuity classification.

To explore quickly, switch families in the left panel — the discontinuity zoo covers every canonical case you&apos;d meet in a first calculus course.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Discontinuity Zoo`,
      content: `Seven function families are organized into five groups:

**Continuous (control):**

• **Quadratic** — $f(x) = x^2$ at $c = 1$. Everything agrees; the baseline.

**Removable:**

• **Hole** — $(x^2 - 1)/(x - 1)$ at $c = 1$. Limit exists; $f(c)$ is undefined.

**Jump:**

• **Step** — piecewise $x$ on the left and $x + 1$ on the right of $c = 0$. Finite one-sided limits, different values.

**Infinite:**

• **1/x²** — both one-sided limits go to $+\\infty$ at $c = 0$.

• **1/x** — left limit goes to $-\\infty$, right to $+\\infty$ at $c = 0$.

**Oscillating:**

• **sin(1/x)** — neither one-sided limit exists at $c = 0$. The function bounces infinitely fast.

**One-sided:**

• **Square root** — $\\sqrt{x}$ at $c = 0$. Only defined on the right; the left limit is undefined.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Epsilon Slider`,
      content: `The **distance ε** slider controls how close to $c$ we probe. As you drag $\\varepsilon$ toward zero:

• The two approach dots move toward the vertical line at $c$.

• The numbers in the **From the left** and **From the right** cards march toward $L^{-}$ and $L^{+}$.

• The marker positions on the graph close in on the limit lines.

The slider is on a **logarithmic scale**, ranging from $\\varepsilon = 1$ down to $\\varepsilon = 10^{-3}$. Each tick is roughly an order of magnitude, so very small values of $\\varepsilon$ are easy to reach precisely.

This mirrors the formal definition of a limit: for the limit to equal $L$, the value $f(x)$ must get **arbitrarily close** to $L$ when $x$ gets sufficiently close to $c$. Shrinking $\\varepsilon$ is the visual equivalent of "as close as you like".

The **Reset** button next to **Parameters** restores the default $\\varepsilon = 0.5$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Approach Bar`,
      content: `Two cards below the graph track the numerical approach side by side.

**From the left** ($x \\to c^{-}$) shows:

• $x = c - \\varepsilon$, the current probing position on the left.

• $f(x)$ at that position.

• $L^{-}$, the left limit value (the target).

**From the right** ($x \\to c^{+}$) shows the same triple for the right side.

The middle "$\\downarrow$ as $\\varepsilon \\to 0$" arrow is a reminder that the $f(x)$ row is the dynamic quantity converging to the $L$ row below it. Watch the digits stabilize as $\\varepsilon$ shrinks.

This is the calculator-style version of the geometric picture above. When the limit exists, both $f(x)$ rows converge to the same number. When one of them fails to settle (oscillating family) or runs off to infinity, the limit does not exist.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Three Limit Cards`,
      content: `The boxed card below the approach bar displays the analytic limit values for the current family:

• **Left limit L⁻** — the analytic value of $\\lim_{x \\to c^{-}} f(x)$. May be a finite number, $+\\infty$, $-\\infty$, or DNE.

• **Right limit L⁺** — same for $\\lim_{x \\to c^{+}} f(x)$.

• **Two-sided limit** — the common value when $L^{-}$ and $L^{+}$ agree and are finite, otherwise DNE.

Reading the row tells you exactly which kind of behavior is happening at $c$:

• Both finite, equal → limit exists.

• Both finite, different → jump discontinuity.

• Either infinite → infinite discontinuity.

• Either DNE (analytical, not numerical) → oscillation or undefined-on-a-side.

These are the analytic values the approach bar should be converging to as $\\varepsilon$ shrinks.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Two Verdict Rows`,
      content: `Below the three cards are two verdict rows that compress the analysis into plain language.

**Limit verdict** — names the limit&apos;s status with a tag:

• **limit exists** — both one-sided limits agree on a finite value.

• **DNE (jump)** — finite but different one-sided limits.

• **DNE (infinite)** — at least one limit is $\\pm\\infty$.

• **DNE (oscillating)** — neither one-sided limit settles, like $\\sin(1/x)$ near $0$.

• **DNE (one-sided only)** — function only defined on one side of $c$.

**Continuity verdict** — names the discontinuity at $c$:

• **continuous** — limit exists, $f(c)$ defined, and they agree.

• **removable** — limit exists but $f(c)$ doesn&apos;t match (or is undefined). Patching $f(c)$ fixes it.

• **jump**, **infinite**, **essential** — the unpatchable cases. No single value of $f(c)$ can repair the discontinuity.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Display Toggles`,
      content: `The **Display** section in the left panel lets you hide layers when one gets in the way:

• **f(x)** — toggles the function curve. Off, just the limit lines and approach markers remain.

• **L⁻, L⁺** — toggles the horizontal limit reference lines and the hollow circles at $(c, L^{\\pm})$. Off, the picture loses its analytic target.

• **x = c** — toggles the dashed vertical line at $c$. Off, the location of $c$ is implied only by the markers and the family info.

• **approach** — toggles the two moving probe dots at $(c \\pm \\varepsilon, f(c \\pm \\varepsilon))$. Off, the picture is static; the slider still controls the approach card numbers.

The **Accent color** picker at the bottom recolors the active highlight throughout the tool — useful for screenshots or personal preference.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Limit`,
      content: `The **limit** of a function $f$ as $x$ approaches $c$ is the single value (if any) that $f(x)$ gets arbitrarily close to as $x$ gets sufficiently close to $c$. Written:

$$\\lim_{x \\to c} f(x) = L$$

The crucial point is that the limit is about the **approach**, not the destination. The actual value $f(c)$ — if it exists — is irrelevant to the limit. The limit asks only what value $f(x)$ is heading toward as $x$ closes in on $c$.

Formally (the $\\varepsilon$–$\\delta$ definition): for every $\\varepsilon > 0$ there exists a $\\delta > 0$ such that $|f(x) - L| < \\varepsilon$ whenever $0 < |x - c| < \\delta$. This formalizes "arbitrarily close" and "sufficiently close" with two tolerances chained together.

For the full theoretical treatment, see the **limits** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `One-Sided vs Two-Sided`,
      content: `Approaching $c$ from values smaller than $c$ gives the **left limit** $L^{-} = \\lim_{x \\to c^{-}} f(x)$. From values larger than $c$ gives the **right limit** $L^{+} = \\lim_{x \\to c^{+}} f(x)$.

The **two-sided limit** exists if and only if both one-sided limits exist, are finite, and are equal:

$$\\lim_{x \\to c} f(x) = L \\iff L^{-} = L^{+} = L$$

So the two-sided limit fails to exist in three ways:

• $L^{-}$ and $L^{+}$ are both finite but unequal — a **jump**.

• At least one of $L^{-}$, $L^{+}$ is infinite — an **infinite** limit.

• At least one of $L^{-}$, $L^{+}$ fails to exist at all — an **oscillating** or **one-sided** case.

The tool&apos;s discontinuity zoo demonstrates each of these failure modes alongside the success case.

For deeper coverage of one-sided limits, see the **one-sided limits** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Continuity** — a function is continuous at $c$ exactly when the limit at $c$ exists, $f(c)$ is defined, and they agree. The limit is one of the three conditions in the continuity definition. See the **continuity checker**.

**Limit laws** — the algebraic rules for combining limits: limits of sums, products, quotients, compositions. Most limit computations reduce to applying the laws and evaluating at the point.

**Limits at infinity** — the behavior of $f(x)$ as $x \\to \\pm\\infty$. Determines horizontal asymptotes.

**Indeterminate forms** — limits where direct substitution gives $0/0$, $\\infty/\\infty$, $0 \\cdot \\infty$, or $\\infty - \\infty$. Resolved by algebraic manipulation or **L&apos;Hôpital&apos;s rule**.

**Squeeze theorem** — if $g(x) \\le f(x) \\le h(x)$ near $c$ and $\\lim g = \\lim h = L$, then $\\lim f = L$. Useful for oscillating functions trapped between bounds.

**Derivatives** — defined as a limit of secant slopes. See the **derivative visualizer**.

**Definite integrals** — defined as limits of Riemann sums. See the **Riemann sum visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Quadratic: the Control Case`,
      content: `$f(x) = x^2$ centered at $c = 1$ is the family with nothing wrong with it, and it is here to give the other six something to be compared against.

At $\varepsilon = 0.5$ the tool samples $f(0.5) = 0.25$ on the left and $f(1.5) = 2.25$ on the right. Both one-sided limits are $1$, $f(1) = 1$, and the single $L$ line passes straight through the curve.`,
      before: ``,
      after: `Shrink $\varepsilon$ and the two sampled values close in on $1$ from either side. That is the definition being enacted: the limit is the number the function values approach, and here they approach it from both directions at once.

Because $f(c)$ also equals that number, this family is continuous at $c$ as well. Limit and continuity coincide in the easy case — the six families that follow are exactly the ways they can come apart.`,
      link: '',
    },
    obj12: {
      title: `Hole: the Limit Exists Without the Value`,
      content: `$f(x) = \frac{x^2 - 1}{x - 1}$ at $c = 1$. The expression cancels to $x + 1$ everywhere except at $x = 1$, where it reads $\frac{0}{0}$ and is undefined.

At $\varepsilon = 0.5$: $f(0.5) = 1.5$, $f(1.5) = 2.5$. Both one-sided limits are $2$, and the $L$ line is drawn at that height — but no $f(c)$ marker appears on it, because there is no value there.`,
      before: ``,
      after: `This family makes the sharpest point in the whole tool: **the limit does not care what happens at $c$**. Its definition only involves $x$ near $c$ with $x \neq c$, so the missing value is irrelevant to it. The limit is $2$ regardless.

That is why the verdict rows split the way they do. The limit row passes; the continuity row fails. Filling the hole with $f(1) = 2$ would repair continuity without changing the limit at all.`,
      link: '',
    },
    obj13: {
      title: `Step: One-Sided Limits That Disagree`,
      content: `A piecewise function — $f(x) = x$ below zero, $f(x) = x + 1$ from zero up — centered at $c = 0$.

At $\varepsilon = 0.5$: $f(-0.5) = -0.5$ approaching from the left, $f(0.5) = 1.5$ from the right. The two $L$ lines sit at $0$ and $1$, and shrinking $\varepsilon$ drives the samples toward those two different numbers.`,
      before: ``,
      after: `Both one-sided limits exist here, which is what separates a jump from the wilder failures below. What fails is the requirement that they agree: $\lim_{x \to 0} f(x)$ exists only when $L^- = L^+$, and $0 \neq 1$.

The gap $L^+ - L^- = 1$ is the jump's size, and it is a fixed property of the two pieces. No choice of $f(0)$ can close it, which is what makes a jump irreparable while a hole is not.`,
      link: '',
    },
    obj14: {
      title: `1/x²: Both Sides Blow Up the Same Way`,
      content: `$f(x) = 1/x^2$ at $c = 0$ has a vertical asymptote, and the function grows without bound on both sides.

At $\varepsilon = 0.5$: $f(-0.5) = 4$ and $f(0.5) = 4$ — equal, and both already large. Halve $\varepsilon$ and both become $16$; halve again and they are $64$. No $L$ lines are drawn at all, because there is no finite height to draw them at.`,
      before: ``,
      after: `The tool records this as $L^- = L^+ = +\infty$, and that notation deserves care. It describes *how* the limit fails, not a value it takes. In the strict sense the limit does not exist, because "exists" means converging to a real number.

Some texts write $\lim_{x \to 0} 1/x^2 = +\infty$ as shorthand for exactly this behaviour, which is a legitimate convention as long as everyone understands it is a statement about unbounded growth. See [one-sided vs two-sided](!#one-sided-vs-two-sided) for how the same distinction plays out with finite values.`,
      link: '',
    },
    obj15: {
      title: `1/x: Infinite in Opposite Directions`,
      content: `$f(x) = 1/x$ at $c = 0$ also has an asymptote, but the two sides run opposite ways.

At $\varepsilon = 0.5$: $f(-0.5) = -2$ and $f(0.5) = 2$. Shrink $\varepsilon$ and the left sample dives toward $-\infty$ while the right climbs toward $+\infty$.`,
      before: ``,
      after: `Compare this with $1/x^2$ directly. There, both sides agreed on their manner of failure; here they do not even do that. The tool reports $L^- = -\infty$ and $L^+ = +\infty$, which is a jump and an infinity at once.

The practical consequence shows up in improper integrals and in graphing: the curve leaves the frame downward on one side and upward on the other, so the asymptote separates two branches that share no common value or common direction.`,
      link: '',
    },
    obj16: {
      title: `sin(1/x): Oscillation With No Limit at All`,
      content: `$f(x) = \sin(1/x)$ at $c = 0$ is the family where neither one-sided limit exists — and not because the function grows too large. It stays neatly inside $[-1, 1]$ the whole time.

At $\varepsilon = 0.5$ the samples read $f(-0.5) = -0.91$ and $f(0.5) = 0.91$. Those numbers are honest but useless: pick a slightly different $\varepsilon$ and they will be entirely different, because as $x \to 0$ the argument $1/x$ runs off to infinity and the sine cycles faster and faster.`,
      before: ``,
      after: `This is the cleanest demonstration that "bounded" is not "convergent". Between any two points, however close to zero, the function still completes infinitely many full oscillations, taking every value in $[-1, 1]$ along the way. There is no single number the values settle toward.

It also shows why sampling alone can never establish a limit. Two sample points always produce two numbers; whether those numbers mean anything depends on the function, and here they do not. The tool reports $L^-$ and $L^+$ as DNE rather than picking a value from the noise.`,
      link: '',
    },
    obj17: {
      title: `Square Root: a Limit From One Side Only`,
      content: `$f(x) = \sqrt{x}$ at $c = 0$ is defined only for $x \geq 0$, so the left half of the graph is simply empty.

At $\varepsilon = 0.5$ the right sample reads $f(0.5) = 0.71$, and the left sample cannot be taken at all — $f(-0.5)$ is undefined. The tool reports $L^+ = 0$ and $L^-$ as DNE.`,
      before: ``,
      after: `The two-sided limit therefore does not exist, but the reason is different in kind from the previous families. Nothing misbehaves; there is simply no left side to approach from.

That is why one-sided limits are worth having as their own notion. $\lim_{x \to 0^+} \sqrt{x} = 0$ is a perfectly good statement, and it is exactly what justifies calling $\sqrt{x}$ continuous on $[0, \infty)$ — continuity at an endpoint is defined using the one-sided limit, because that is the only one available.`,
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
     core's generateSVG - see app/components/functions/frozenSvg.js. Every state
     is frozen at the component's initialEps = 0.5. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: functionLimitDiagrams[key], caption, text })

  const stateUnits = {
    continuous: unit('continuous', 'Quadratic, frozen at c = 1, &epsilon; = 0.5',
      'One L line at height 1, with the f(c) marker sitting on it and the two approach markers straddling ' +
      'c at 0.25 and 2.25. Everything agrees - this is the case with nothing to diagnose.'),
    removable: unit('removable', 'Hole, frozen at c = 1, &epsilon; = 0.5',
      'The L line is drawn at 2 and the approach markers close in on it from 1.5 and 2.5, but the line ' +
      'carries no f(c) marker: the value at c is missing while the limit is not.'),
    jump: unit('jump', 'Step, frozen at c = 0, &epsilon; = 0.5',
      'Two L lines, at 0 and at 1, with an open endpoint below and a closed one above. The approach ' +
      'markers at -0.5 and 1.5 are heading for different heights.'),
    'infinite-pos': unit('infinite-pos', '1/x&sup2;, frozen at c = 0, &epsilon; = 0.5',
      'No L lines at all - there is no finite height to draw one at. Both approach markers read 4 and ' +
      'climb together as &epsilon; shrinks.'),
    'infinite-jump': unit('infinite-jump', '1/x, frozen at c = 0, &epsilon; = 0.5',
      'The same missing L lines, but the two branches leave the frame in opposite directions. The approach ' +
      'markers read -2 and +2 and separate further with every reduction of &epsilon;.'),
    oscillating: unit('oscillating', 'sin(1/x), frozen at c = 0, &epsilon; = 0.5',
      'The curve stays inside [-1, 1] yet packs more and more oscillations toward c. The two approach ' +
      'markers read -0.91 and 0.91 here, and would read something quite different at any other &epsilon;.'),
    onesided: unit('onesided', 'Square root, frozen at c = 0, &epsilon; = 0.5',
      'Nothing is drawn left of c, so only one approach marker exists, at 0.71. The closed endpoint at ' +
      'the origin is where the right-hand limit lands.'),
  }


  /* ---- per-family panel notes, passed into the component (Line 1) ----
     FunctionLimit had no explanations prop; one was added additively and
     defaults to null, so the panel is unchanged when nothing is passed. Content
     is markdown - InfoPanel renders it through processContent, so anchors use
     the normal [text](!#slug) form. */
  const note = (body, slug, label) =>
    `### Where this leads\n\n${body} See [${label}](!#${slug}) or compare [the whole zoo](!#the-discontinuity-zoo).`

  const explanations = {
    continuous: note('Limit and value agree, so this family is continuous at c as well.', 'the-control-case', 'the control case'),
    removable: note('The limit exists even though f(c) does not - the definition never looks at c itself.', 'the-hole', 'the hole'),
    jump: note('Both one-sided limits exist but disagree, and no value at c can reconcile them.', 'the-step', 'the step'),
    'infinite-pos': note('Both sides grow without bound in the same direction, so no finite limit exists.', 'blowing-up-both-ways', 'the 1/x squared case'),
    'infinite-jump': note('The two sides run to opposite infinities - a jump and an asymptote at once.', 'infinite-in-opposite-directions', 'the 1/x case'),
    oscillating: note('Bounded but never settling: infinitely many oscillations before reaching c.', 'oscillation-without-a-limit', 'the oscillating case'),
    onesided: note('Only one side exists to approach from, which is what one-sided limits are for.', 'a-limit-from-one-side', 'the square root case'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is a limit?",
      answer: "The limit of a function f as x approaches c is the value that f of x gets arbitrarily close to as x gets sufficiently close to c. The limit is about the approach, not about the actual value of the function at c. The function value at c can be anything, undefined, or even different from the limit, without changing what the limit is."
    },
    obj2: {
      question: "What is the difference between a one-sided and a two-sided limit?",
      answer: "A one-sided limit approaches c from only one direction, either from below or from above, written L minus or L plus. The two-sided limit requires that both one-sided limits exist, are finite, and are equal. When the one-sided limits disagree or one of them fails to exist, the two-sided limit does not exist."
    },
    obj3: {
      question: "When does a limit not exist?",
      answer: "A two-sided limit fails to exist in three main ways: when the left and right limits are finite but different (a jump), when at least one of them is plus or minus infinity (an infinite limit, typically a vertical asymptote), and when the function oscillates infinitely fast near the point so that no value is approached, as with sine of one over x near zero."
    },
    obj4: {
      question: "What is a removable discontinuity?",
      answer: "A removable discontinuity is a point where the two-sided limit exists cleanly, but the function value at that point is either undefined or set to something different from the limit. The discontinuity can be removed by simply redefining the function value at that single point to equal the limit, making the function continuous there."
    },
    obj5: {
      question: "How does this tool help understand limits?",
      answer: "The tool pairs the geometric picture of the function curve with the analytic values of the left and right limits. Sliding epsilon shows numerically that f of x approaches the limit values as x approaches c, which is exactly the formal definition. The seven function families cover every canonical limit behavior in a first calculus course, from continuous to oscillating."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Limit Explorer",
      "description": "Interactive tool for exploring one-sided and two-sided limits across continuous, removable, jump, infinite, oscillating, and one-sided cases.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/limit",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Plot a function with horizontal reference lines for the left and right limit values",
        "Slide epsilon on a logarithmic scale to watch f at c minus epsilon and c plus epsilon approach the one-sided limits",
        "Seven function families covering every canonical discontinuity pattern",
        "Numeric approach cards showing the converging values from the left and from the right",
        "Live verdict for both the two-sided limit and the type of discontinuity at c",
        "Toggle the function curve, limit lines, vertical reference, and approach markers independently",
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
      "keywords": "limit, limit of a function, limit visualizer, limit calculator, one-sided limits, left limit, right limit, two-sided limit, limit does not exist, removable discontinuity, jump discontinuity, infinite limit, oscillating limit, epsilon approach, interactive limit tool"
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
          "name": "Limit Explorer",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/limit"
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
        title: "Limit Explorer - Interactive Visualizer | Learn Math Class",
        description: "Explore one-sided and two-sided limits with a live epsilon slider. Watch L-minus and L-plus approach across continuous, jump, infinite, and oscillating cases.",
        keywords: keyWords.join(", "),
        url: "/calculus/visual-tools/limit",
        name: "Limit Explorer",
        hubDescription: "Watch left and right limits race toward each other as epsilon shrinks. Switch between seven canonical cases — continuous, hole, jump, infinite asymptote, oscillating, and one-sided — and read the verdict for both the limit and the continuity at c.",
        category: "Limits and Continuity",
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="60" x2="76" y2="60" stroke="#B5D4F4" stroke-width="0.9"/><line x1="14" y1="8" x2="14" y2="64" stroke="#B5D4F4" stroke-width="0.9"/><line x1="14" y1="27" x2="44" y2="27" stroke="#C0DD97" stroke-width="0.9" stroke-dasharray="2.5,2"/><line x1="44" y1="27" x2="44" y2="60" stroke="#C0DD97" stroke-width="0.9" stroke-dasharray="2.5,2"/><path d="M 18 54 Q 29.44 38.16 40.88 29.29" fill="none" stroke="#85B7EB" stroke-width="1.8"/><path d="M 47.12 24.97 Q 58.56 18 70 18" fill="none" stroke="#85B7EB" stroke-width="1.8"/><circle cx="44" cy="27" r="3.2" fill="none" stroke="#FAC775" stroke-width="1.7"/><text x="9" y="29" font-family="Georgia,serif" font-size="7.5" fill="#C0DD97" text-anchor="middle" font-style="italic">L</text><text x="44" y="70" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">a</text></svg>`
      },

    }
  }
}

export default function LimitExplorer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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
    plain('obj2', 'the-discontinuity-zoo'),
    stateRow('obj11', 'the-control-case', 'continuous'),
    stateRow('obj12', 'the-hole', 'removable'),
    stateRow('obj13', 'the-step', 'jump'),
    stateRow('obj14', 'blowing-up-both-ways', 'infinite-pos'),
    stateRow('obj15', 'infinite-in-opposite-directions', 'infinite-jump'),
    stateRow('obj16', 'oscillation-without-a-limit', 'oscillating'),
    stateRow('obj17', 'a-limit-from-one-side', 'onesided'),
    plain('obj3', 'the-epsilon-slider'),
    plain('obj4', 'the-approach-bar'),
    plain('obj5', 'the-three-limit-cards'),
    plain('obj6', 'the-two-verdict-rows'),
    plain('obj7', 'display-toggles'),
    plain('obj8', 'what-is-a-limit'),
    plain('obj9', 'one-sided-vs-two-sided'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Limit Explorer - Interactive Visualizer</h1>
      <br/>
      <FunctionLimit explanations={explanations}/>
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