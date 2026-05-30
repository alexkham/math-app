// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionRiemann from '../../../../app/components/functions/riemann/FunctionRiemann'


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
//         url: "/calculus/visual-tools/riemann-sum",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Riemann Sum</h1>
//    <br/>
//    <FunctionRiemann/>
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
import FunctionRiemann from '../../../../app/components/functions/riemann/FunctionRiemann'


export async function getStaticProps(){

  const keyWords = [
    'Riemann sum',
    'Riemann sum calculator',
    'Riemann sum visualizer',
    'left Riemann sum',
    'right Riemann sum',
    'midpoint rule',
    'trapezoid rule',
    'numerical integration',
    'approximating integrals',
    'area under a curve',
    'definite integral approximation',
    'integration error',
    'convergence of Riemann sums',
    'interactive integration tool',
    'partitions n'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Riemann sum** — an approximation of the definite integral $\\int_a^b f(x)\\, dx$ formed by partitioning $[a, b]$ into $n$ equal strips and summing the areas of simple shapes built on each strip.

**Partition** — the division of $[a, b]$ into $n$ subintervals of equal width $\\Delta x = (b - a)/n$.

**Sample point** — the value of $x$ on each strip where the function&apos;s height is evaluated. Determined by the rule: left endpoint, right endpoint, midpoint, or both endpoints (for trapezoid).

**Left Riemann sum** — sample at the left endpoint of each strip; uses rectangles.

**Right Riemann sum** — sample at the right endpoint of each strip; uses rectangles.

**Midpoint rule** — sample at the center of each strip; uses rectangles.

**Trapezoid rule** — average the function values at the two endpoints of each strip; uses trapezoids.

**Convergence order** — the rate at which the error shrinks as $n$ grows. Left and right are $O(1/n)$; midpoint and trapezoid are $O(1/n^2)$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The page opens with the **Quadratic** family $f(x) = x^2$ loaded, integrating from $a = 0$ to $b = 3$ with $n = 8$ partitions using the **Left** rule. You see:

• The deep-blue curve of $f$ across the integration window.

• Eight light-blue rectangles, each with its left edge touching the curve.

• Dashed gray vertical lines at $a$ and $b$ marking the bounds.

Below the graph, the result card shows three numbers side by side: the approximation $S_n$, the true integral, and the error. A small tag below the error labels the result as *overshoots*, *undershoots*, or *exact*.

To explore, switch between **Left**, **Right**, **Midpoint**, and **Trapezoid** in the **Method** section, drag the **partitions n** slider, or pick a different function family in the left panel.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Four Methods`,
      content: `The **Method** section in the left panel offers four ways to build the approximation. Each samples the function at a different point on each strip:

• **Left** — sample at the left endpoint. On an increasing function every rectangle sits *below* the curve; on a decreasing function every rectangle sits *above*. Convergence order $O(1/n)$.

• **Right** — sample at the right endpoint. Mirror image of left: overshoots on increasing, undershoots on decreasing. Same $O(1/n)$ order.

• **Midpoint** — sample at the center. The flat top punches *above* the curve on one half of each strip and *below* on the other, so over- and under-shoots within each strip mostly cancel. Convergence order $O(1/n^2)$.

• **Trapezoid** — connect the left and right endpoint heights with a straight line. Errors also mostly cancel, opposite in sign to midpoint. Same $O(1/n^2)$ order.

Switching methods changes the picture immediately.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Function Families`,
      content: `Eight families are organized into three groups in the left panel.

**Polynomial** (closed-form antiderivative):

• **Identity** $f(x) = x$ — integrates to $x^2 / 2$.

• **Quadratic** $f(x) = x^2$ — integrates to $x^3 / 3$.

• **Cubic** $f(x) = x^3$ — integrates to $x^4 / 4$.

**Transcendental** (closed-form):

• **Sine** $f(x) = \\sin x$ — antiderivative $-\\cos x$.

• **Cosine** $f(x) = \\cos x$ — antiderivative $\\sin x$.

• **Exponential** $f(x) = e^x$ — antiderivative $e^x$.

**Numerical only** (no elementary antiderivative):

• **Gaussian bump** $f(x) = e^{-x^2/2}$ — the kernel of the normal distribution.

• **Sinc** $f(x) = \\sin(x)/x$ — appears in signal processing.

For the third group the "true" integral is computed numerically with a $4000$-strip trapezoid.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The a, b, and n Sliders`,
      content: `Three sliders in the **Parameters** section control the integration setup:

• **lower bound a** and **upper bound b** — the endpoints of the integration interval. The dashed gray lines at $a$ and $b$ on the graph follow the sliders. Setting $b < a$ flips the sign of the integral; everything else still works.

• **partitions n** — the number of subintervals (and rectangles or trapezoids). Ranges from $1$ to $80$. As $n$ grows, the rectangles get thinner, fill the area under the curve more tightly, and the error shrinks.

The most instructive experiment: fix a method, then slide $n$ from low to high. Watch the error tag in the result card. With the left or right rule, doubling $n$ roughly halves the error. With midpoint or trapezoid, doubling $n$ shrinks the error by about a factor of four.

The **Reset** button next to **Parameters** restores the family defaults.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Result Card`,
      content: `The boxed card below the graph displays the three numerical results:

• **Approximation Sₙ** — the value of the Riemann sum at the current $n$ and method.

• **True integral** — the exact value of $\\int_a^b f(x)\\, dx$. For polynomial and transcendental families this comes from a closed-form antiderivative. For numerical-only families it comes from a high-resolution trapezoid sum and is labeled accordingly.

• **Error** — the signed difference $S_n - I$. Positive means the Riemann sum is too high (overshoots); negative means too low (undershoots); near zero means the approximation has converged.

The header line above shows the method&apos;s formula symbolically, the current value of $\\Delta x$, and which rule is active. Use the three numbers together: the approximation is what you computed, the true integral is what you wanted, and the error is the gap to close.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Error Tag`,
      content: `Below the error number is a colored tag with one of three values:

• **overshoots** (red) — the Riemann sum is larger than the true integral. The error is positive. Common for the left rule on a decreasing function, or the right rule on an increasing function.

• **undershoots** — the Riemann sum is smaller than the true integral. The error is negative. Common for the left rule on an increasing function, or the right rule on a decreasing function.

• **exact** (green) — the absolute error is below the display threshold. Either you found a closed match (the trapezoid rule on a linear function is exact, for example) or $n$ is large enough that the approximation has fully converged.

The endpoint rules (left, right) have predictable signs based on monotonicity. Midpoint and trapezoid usually err in opposite directions, which is why averaging them gives Simpson&apos;s rule — a more advanced technique.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is a Riemann Sum`,
      content: `A **Riemann sum** approximates the area under a curve using simple geometric shapes. The procedure is:

• Split the interval $[a, b]$ into $n$ subintervals of equal width $\\Delta x = (b - a)/n$.

• On each subinterval, pick a sample point $x_i^*$ and use the function&apos;s value there as a height.

• Sum the areas of the resulting rectangles (or trapezoids):

$$S_n = \\sum_{i=1}^{n} f(x_i^*) \\cdot \\Delta x$$

The four classical rules differ only in where on each subinterval the sample point sits. As $n \\to \\infty$, the Riemann sum converges to the exact definite integral:

$$\\lim_{n \\to \\infty} S_n = \\int_a^b f(x)\\, dx$$

This limit is in fact the definition of the integral. The Fundamental Theorem of Calculus then provides the shortcut: evaluate an antiderivative at the endpoints instead of summing rectangles.

For full theoretical coverage, see the **Riemann integral** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Convergence and Error`,
      content: `The four rules differ not just in how they sample the curve, but in *how fast* the error shrinks as $n$ grows.

**Endpoint rules (Left and Right): error is $O(1/n)$.**

Each rectangle&apos;s flat top mismatches the curve&apos;s slope. Doubling $n$ halves the strip width and roughly halves the error. To reduce the error by a factor of $100$, you need $n$ to grow by a factor of $100$.

**Midpoint and Trapezoid: error is $O(1/n^2)$.**

Both rules sample more representatively. Midpoint takes the height at the center of each strip; trapezoid uses the linear interpolant between endpoint heights. In either case the over- and undershoots within a single strip largely cancel, so the leading-order error is in $1/n^2$ instead of $1/n$. Doubling $n$ shrinks the error by a factor of *four*. To reduce the error by $100$, $n$ only needs to grow by $10$.

The practical lesson: choose the rule before you crank up $n$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Signed Area`,
      content: `When the integrand dips below the x-axis, the function values become negative and the corresponding rectangles count as **negative area**. The tool draws them on the appropriate side of the axis and the Riemann sum subtracts them naturally.

This matches the standard convention for definite integrals: $\\int_a^b f(x)\\, dx$ is the *signed* area between the curve and the x-axis, counting area above the axis positively and area below negatively. A function that&apos;s symmetric about the x-axis (like $\\sin x$ over $[-\\pi, \\pi]$) has integral zero — positive and negative areas cancel.

Two other sign conventions are also handled correctly:

• If you set $b < a$, the strip width $\\Delta x = (b - a)/n$ goes negative, every term in the sum flips sign, and the result becomes $-\\int_b^a f(x)\\, dx$. This is the standard $\\int_a^b = -\\int_b^a$ identity.

• If $a = b$, every strip has zero width and the sum collapses to zero.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Definite integrals** — the limit of Riemann sums as $n \\to \\infty$. The exact area the approximations are converging to.

**Fundamental Theorem of Calculus** — the shortcut for computing definite integrals: find an antiderivative, evaluate at the endpoints, subtract. See the **FTC visualizer**.

**Simpson&apos;s rule** — a higher-order rule that fits parabolas through groups of three points instead of rectangles or straight-line trapezoids. Convergence order $O(1/n^4)$.

**Gaussian quadrature** — an even higher-order family of numerical integration methods using carefully chosen sample points and weights. Used in production numerical libraries.

**Improper integrals** — integrals over unbounded intervals or with unbounded integrands. Defined as limits of ordinary integrals.

**Average value of a function** — equal to $\\frac{1}{b-a} \\int_a^b f(x)\\, dx$. The mean of $f$ over the interval.

**Visual tools for calculus** — limits, continuity, derivatives, FTC, MVT, optimization.`,
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
      question: "What is a Riemann sum?",
      answer: "A Riemann sum approximates the area under a curve by dividing the interval into n equal subintervals and summing the areas of simple shapes built on each piece. The shapes are rectangles for the left, right, and midpoint rules, and trapezoids for the trapezoid rule. As n grows, the Riemann sum converges to the exact definite integral."
    },
    obj2: {
      question: "What is the difference between the left, right, midpoint, and trapezoid rules?",
      answer: "All four rules use the same partition but differ in where the function is sampled on each subinterval. The left rule samples at the left endpoint, the right rule at the right endpoint, the midpoint rule at the center. The trapezoid rule averages the function values at both endpoints, which is equivalent to using a trapezoid instead of a rectangle."
    },
    obj3: {
      question: "How does the error of a Riemann sum behave as n increases?",
      answer: "For smooth functions, the error of the left and right rules shrinks as one over n, so doubling n roughly halves the error. The midpoint and trapezoid rules shrink the error as one over n squared, so doubling n shrinks the error by a factor of four. This makes the midpoint and trapezoid rules much more efficient for the same computational effort."
    },
    obj4: {
      question: "Why does the midpoint rule converge faster than the left or right rule?",
      answer: "On each subinterval, the rectangle's flat top punches above the curve on one half of the strip and below on the other half, so the over- and under-shoots within a single strip largely cancel. The endpoint rules do not have this cancellation: the flat top is consistently on one side of the curve, leaving a much larger total error."
    },
    obj5: {
      question: "What happens when the function dips below the x-axis?",
      answer: "Function values become negative, the corresponding rectangles count as negative area, and the Riemann sum subtracts them. This matches the convention that a definite integral is signed area: area above the x-axis counts positively, area below counts negatively. A function symmetric about the x-axis over a symmetric interval has integral zero because the positive and negative parts cancel exactly."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Riemann Sum Visualizer",
      "description": "Interactive tool for approximating definite integrals with left, right, midpoint, and trapezoid Riemann sums on eight function families.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/riemann-sum",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Four classical Riemann sum rules: left, right, midpoint, and trapezoid",
        "Adjustable integration bounds a and b plus partition count n from 1 to 80",
        "Eight function families covering polynomial, transcendental, and numerical-only cases",
        "Live display of the Riemann sum, the true integral, and the signed error",
        "Error tag classifies the approximation as overshoots, undershoots, or exact",
        "Closed-form antiderivatives where available, high-resolution numerical truth elsewhere",
        "Accent color picker for the rectangle fill"
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
      "keywords": "Riemann sum, Riemann sum calculator, Riemann sum visualizer, left Riemann sum, right Riemann sum, midpoint rule, trapezoid rule, numerical integration, approximating integrals, area under a curve, definite integral approximation, integration error, convergence of Riemann sums, interactive integration tool, partitions n"
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
          "name": "Riemann Sum Visualizer",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/riemann-sum"
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
        title: "Riemann Sum Calculator & Visualizer | Learn Math Class",
        description: "Approximate integrals with left, right, midpoint, and trapezoid Riemann sums. Adjust the interval and partition count to watch the error shrink in real time.",
        keywords: keyWords.join(", "),
        url: "/calculus/visual-tools/riemann-sum",
        name: "Riemann Sum Visualizer",
        hubDescription: "Approximate a definite integral with rectangles or trapezoids, then watch the error shrink as you increase the partition count. Switch between left, right, midpoint, and trapezoid rules to see why some converge as one over n and others as one over n squared.",
        category: "Integrals",
        subCategory: ""
      },

    }
  }
}

export default function RiemannSumVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Riemann Sum</h1>
      <br/>
      <FunctionRiemann/>
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
