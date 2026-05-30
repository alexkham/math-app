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
//    <FunctionLimit/>
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
      content: `**Limit at a point** — the value $f(x)$ approaches as $x$ approaches $c$, written $\\lim_{x \\to c} f(x)$. The limit is about the *approach*, not the value $f(c)$ itself.

**Left limit** — $L^{-} = \\lim_{x \\to c^{-}} f(x)$. The value approached from values smaller than $c$.

**Right limit** — $L^{+} = \\lim_{x \\to c^{+}} f(x)$. The value approached from values larger than $c$.

**Two-sided limit** — exists exactly when $L^{-}$ and $L^{+}$ are both finite and equal. The common value is the limit.

**DNE** — abbreviation for *does not exist*. Used for limits when the one-sided limits disagree, one is infinite, or the function oscillates.

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

This mirrors the formal definition of a limit: for the limit to equal $L$, the value $f(x)$ must get *arbitrarily close* to $L$ when $x$ gets sufficiently close to $c$. Shrinking $\\varepsilon$ is the visual equivalent of "as close as you like".

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
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj12: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj13: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj14: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj15: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
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
        subCategory: ""
      },

    }
  }
}

export default function LimitExplorer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [
        sectionsContent.obj0.content,
      ]
    },
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [
        sectionsContent.obj1.content,
      ]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [
        sectionsContent.obj2.content,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        sectionsContent.obj3.content,
      ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
      ]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [
        sectionsContent.obj5.content,
      ]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [
        sectionsContent.obj6.content,
      ]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [
        sectionsContent.obj7.content,
      ]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [
        sectionsContent.obj8.content,
      ]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [
        sectionsContent.obj9.content,
      ]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [
        sectionsContent.obj10.content,
      ]
    },
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
      <FunctionLimit/>
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