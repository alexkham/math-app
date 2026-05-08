// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'



// export async function getStaticProps(){
// const keyWords = [
//   "polynomial inequalities",
//   "sign chart method",
//   "root multiplicity",
//   "solving polynomial inequalities",
//   "factored polynomial inequality",
//   "cubic inequality",
//   "higher degree inequality",
//   "end behavior polynomial",
//   "sign analysis",
//   "odd even multiplicity",
//   "polynomial inequality examples",
//   "interval notation polynomial",
//   "test point method",
//   "polynomial sign change"
// ]
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

   


// const sectionsContent = {
//   obj0: {
//   title: `Key Terms`,
//   content: `
// ## Core Concepts
 
// - [Polynomial Inequality](!/algebra/definitions#polynomial_inequality) — $P(x) > 0$ for degree $\\geq 3$; sign chart with multiplicity awareness
// - [Sign Analysis](!/algebra/definitions#sign_analysis) — the primary method: find roots, partition, test each interval
 
// ## From Polynomials Category
 
// - [Multiplicity](!/algebra/definitions#multiplicity) — odd multiplicity causes sign change, even does not
// - [End Behavior](!/algebra/definitions#end_behavior) — determines the sign in the outermost intervals
// - [Factoring](!/algebra/definitions#factoring) — required to locate all real roots`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
//   link: '',
// },
 
//   obj1: {
//     title: `Definition`,
//     content: `A polynomial inequality has the form

// $$P(x) > 0$$

// (or $<$, $\\leq$, $\\geq$), where $P(x)$ is a polynomial of degree $n \\geq 3$. The inequality asks where the polynomial takes positive or negative values — not where it equals zero, but which stretches of the number line lie above or below the horizontal axis.

// [Linear](!/algebra/inequalities/linear) and [quadratic](!/algebra/inequalities/quadratic) inequalities are special cases corresponding to $n = 1$ and $n = 2$. At those low degrees, the structure is simple enough that dedicated methods suffice. From degree three onward, the number of roots and the variety of sign patterns increase, and a general method is needed. The sign chart provides that method.

// As with [polynomial equations](!/algebra/equations/polynomial), the degree $n$ sets an upper bound: a polynomial of degree $n$ has at most $n$ real roots, and these roots create at most $n + 1$ intervals on the number line. Within each interval, the polynomial maintains a constant sign. The task is to determine that sign in every interval and select those that satisfy the inequality.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `The Sign Chart Method`,
//     content: `The sign chart is a systematic procedure for solving any polynomial inequality once the real roots are known.

// Step 1: Solve $P(x) = 0$ to find all real roots. Use factoring, the [rational root theorem](!/algebra/polynomials/rules), or the [quadratic formula](!/algebra/equations/quadratic) after degree reduction — whatever combination of techniques produces the roots.

// Step 2: Order the roots on the number line from smallest to largest. They divide the line into intervals: one to the left of the smallest root, one between each consecutive pair, and one to the right of the largest.

// Step 3: In each interval, determine the sign of $P(x)$. Choose any convenient test point within the interval and evaluate the sign — either by substituting into $P(x)$ directly or, if $P(x)$ is in factored form, by tracking the sign of each factor separately and multiplying.

// Step 4: Select the intervals where the sign matches the inequality. For $P(x) > 0$, take the positive intervals. For $P(x) < 0$, take the negative ones.

// Step 5: Decide on endpoint inclusion. For non-strict inequalities ($\\leq$ or $\\geq$), include the roots themselves because $P(r) = 0$ satisfies $\\leq 0$ and $\\geq 0$. For strict inequalities ($<$ or $>$), exclude them.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Factored Form and Sign Analysis`,
//     content: `When the polynomial is expressed as a product of linear factors, the sign in each interval can be determined without evaluating $P(x)$ numerically. Instead, the sign of each individual factor is tracked, and the signs are multiplied together.

// Consider $(x + 2)(x - 1)(x - 5) < 0$. The roots are $-2$, $1$, and $5$, creating four intervals. In each interval, every factor is either positive or negative depending on whether the test point lies to the left or right of that factor's root.

// In $(-\\infty, -2)$: all three factors are negative. Three negatives multiply to a negative. The product is negative.

// In $(-2, 1)$: the factor $(x + 2)$ is positive, while $(x - 1)$ and $(x - 5)$ are negative. One positive and two negatives: the product is positive.

// In $(1, 5)$: the factors $(x + 2)$ and $(x - 1)$ are positive, $(x - 5)$ is negative. Two positives and one negative: the product is negative.

// In $(5, \\infty)$: all three factors are positive. The product is positive.

// The inequality $< 0$ selects the negative intervals: $(-\\infty, -2) \\cup (1, 5)$. No numerical evaluation of $P(x)$ was needed — only sign tracking.

// This approach is faster than substituting test points into the expanded polynomial, especially for higher-degree expressions with many terms. It requires the polynomial to be in factored form, which is why factoring is typically the first step.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Root Multiplicity and Sign Changes`,
//     content: `Not every root causes the sign of the polynomial to change. Whether the sign flips at a root depends on the root's multiplicity.

// At a root of odd multiplicity (simple root, triple root, etc.), the polynomial changes sign. The graph crosses the $x$-axis, and the intervals on either side have opposite signs. A factor $(x - r)^1$ is negative to the left of $r$ and positive to the right, so crossing it flips the sign of the product.

// At a root of even multiplicity (double root, quadruple root, etc.), the polynomial keeps its sign. The graph touches the $x$-axis and turns back without crossing. A factor $(x - r)^2$ is positive on both sides of $r$ (and zero at $r$ itself), so crossing it does not flip the sign of the product.

// Consider $(x + 1)(x - 3)^2 > 0$. The roots are $x = -1$ (multiplicity $1$) and $x = 3$ (multiplicity $2$). In $(-\\infty, -1)$: $(x + 1)$ is negative and $(x - 3)^2$ is positive — product is negative. In $(-1, 3)$: $(x + 1)$ is positive and $(x - 3)^2$ is positive — product is positive. In $(3, \\infty)$: both are positive — product is positive. The sign changes at $x = -1$ (odd multiplicity) but not at $x = 3$ (even multiplicity). The solution is $(-1, 3) \\cup (3, \\infty)$, which simplifies to $(-1, \\infty) \\setminus \\{3\\}$ — all $x > -1$ except $x = 3$, where the expression equals zero.

// This multiplicity rule eliminates the need to test points in every interval. Once the sign is known in any one interval, the sign in each adjacent interval is determined by whether the separating root has odd or even multiplicity.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `End Behavior`,
//     content: `The sign of a polynomial for very large values of $|x|$ is controlled entirely by the leading term $a_nx^n$. This provides a guaranteed starting point for the sign chart: the sign in the outermost intervals is known before any test points are evaluated.

// For even degree with $a_n > 0$: the polynomial is positive for both very large positive and very large negative $x$. Both outer intervals are positive.

// For even degree with $a_n < 0$: the polynomial is negative on both outer intervals.

// For odd degree with $a_n > 0$: the polynomial is negative far to the left and positive far to the right. The leftmost interval is negative and the rightmost is positive.

// For odd degree with $a_n < 0$: the polynomial is positive far to the left and negative far to the right. The signs are reversed from the previous case.

// Knowing the outermost signs and applying the multiplicity rule inward determines the sign in every interval without any test-point computation. Start from the rightmost interval (whose sign is the sign of $a_n$ for odd degree, or positive for even degree with $a_n > 0$), then flip or preserve the sign at each root moving leftward according to its multiplicity. This technique is faster and less error-prone than substituting numerical test points.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Polynomials That Do Not Factor Over the Rationals`,
//     content: `The sign chart method requires knowing the real roots, but it does not require those roots to be rational. When the polynomial has no rational roots — when the [rational root theorem](!/algebra/polynomials/rules) produces no valid candidates — irrational or approximate roots still serve as valid boundary points.

// The polynomial $x^3 - 2 = 0$ has the single real root $x = \\sqrt[3]{2} \\approx 1.26$. For the inequality $x^3 - 2 > 0$, this root divides the number line into two intervals. Since the leading coefficient is positive and the degree is odd, the polynomial is negative for $x < \\sqrt[3]{2}$ and positive for $x > \\sqrt[3]{2}$. The solution is $(\\sqrt[3]{2}, \\infty)$.

// When multiple irrational roots exist and exact values are unavailable, numerical approximations from graphing or iterative methods (bisection, Newton's method) identify the boundary points to whatever precision is needed. The sign chart is then constructed using these approximate values. The logical structure — roots create intervals, signs are constant within intervals — holds regardless of whether the roots are rational, irrational, or only known approximately.

// For polynomials that factor partially — say, one rational root found and a remaining irreducible quadratic with $\\Delta < 0$ — the irreducible factor contributes no real roots and maintains constant sign. It affects the overall sign in every interval uniformly but creates no new boundary points.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Worked Examples`,
//     content: `A cubic with three distinct real roots: solve $x^3 - 6x^2 + 11x - 6 \\leq 0$. The polynomial factors as $(x - 1)(x - 2)(x - 3)$. The roots $1$, $2$, $3$ create four intervals. All three roots have odd multiplicity, so the sign alternates. The leading coefficient is positive and the degree is odd, so the rightmost interval $(3, \\infty)$ is positive. Moving left: $(2, 3)$ is negative, $(1, 2)$ is positive, $(-\\infty, 1)$ is negative. The inequality $\\leq 0$ selects the negative intervals and includes the roots: $(-\\infty, 1] \\cup [2, 3]$.

// A quartic with a repeated root: solve $(x + 2)^2(x - 1)(x - 4) > 0$. The roots are $-2$ (multiplicity $2$), $1$ (multiplicity $1$), and $4$ (multiplicity $1$). The leading term is $x^4$ (positive), so both outermost intervals are positive. Moving inward from the right: $(4, \\infty)$ is positive. At $x = 4$ (odd), the sign flips: $(1, 4)$ is negative. At $x = 1$ (odd), the sign flips: $(-2, 1)$ is positive. At $x = -2$ (even), the sign stays: $(-\\infty, -2)$ is positive. The solution to $> 0$ is $(-\\infty, -2) \\cup (-2, 1) \\cup (4, \\infty)$, which simplifies to $(-\\infty, 1) \\cup (4, \\infty)$ with the single exclusion $x \\neq -2$ already handled by the strict inequality — but since $P(-2) = 0$, the strict inequality excludes $-2$ automatically. The solution is $(-\\infty, -2) \\cup (-2, 1) \\cup (4, \\infty)$.

// A polynomial with an irrational root: solve $x^3 - 3x + 1 > 0$. The rational root theorem yields no rational roots. Numerical methods show three real roots near $x \\approx -1.88$, $x \\approx 0.35$, and $x \\approx 1.53$. All have odd multiplicity, so the sign alternates. The leading coefficient is positive, so the pattern from right to left is $+, -, +, -$. The solution is approximately $(-1.88, 0.35) \\cup (1.53, \\infty)$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };



//   const introContent = {
//   id: 'intro',
//   title: `Sign Charts, Root Multiplicity, and the Shape of the Solution`,
//   content: `When a polynomial inequality reaches degree three or higher, the parabola-based reasoning of the quadratic case no longer applies — the graph can cross the axis multiple times, flatten at certain roots, and reverse direction repeatedly. The sign chart becomes the primary tool: find every real root, partition the number line, and determine the sign in each interval. The new ingredient is multiplicity. A root where the polynomial merely touches zero without crossing behaves differently from one where it passes through, and the sign chart must reflect this distinction to produce the correct solution.`,
// };


// const faqQuestions = {
//   obj1: {
//     question: "What is a polynomial inequality?",
//     answer: "A polynomial inequality has the form P(x) > 0 (or <, ≤, ≥) where P(x) is a polynomial of degree 3 or higher. It asks where the polynomial is positive or negative. The sign chart method handles all polynomial inequalities systematically.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "How do you solve polynomial inequalities with sign charts?",
//     answer: "Find all real roots, order them on a number line creating intervals, determine the sign in each interval using test points or factor signs, select intervals matching the inequality, then include or exclude roots based on strict vs non-strict inequality.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How do you find signs in a factored polynomial inequality?",
//     answer: "Track each factor's sign separately: a factor (x - r) is negative left of r and positive right of r. Multiply all factor signs together. This avoids numerical evaluation entirely — just count negatives to determine the product's sign.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "How does root multiplicity affect polynomial inequality solutions?",
//     answer: "At odd multiplicity roots, the sign changes (graph crosses axis). At even multiplicity roots, the sign stays the same (graph touches but doesn't cross). This determines whether adjacent intervals have the same or opposite signs.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "How does end behavior help solve polynomial inequalities?",
//     answer: "The leading term aₙxⁿ determines signs at ±∞. For odd degree: opposite signs at ends. For even degree: same sign at both ends (sign of aₙ). Start from the known outer interval sign and flip/preserve inward using multiplicity.",
//     sectionId: "5"
//   },
//   obj6: {
//     question: "Can you solve polynomial inequalities with irrational roots?",
//     answer: "Yes. The sign chart works with any real roots — rational, irrational, or approximate. If exact roots aren't available, numerical approximations serve as boundary points. The method requires knowing where roots are, not their exact form.",
//     sectionId: "6"
//   },
//   obj7: {
//     question: "How do you handle polynomial inequalities with repeated roots?",
//     answer: "Repeated roots with even multiplicity don't change the sign — the polynomial touches zero but doesn't cross. Only odd multiplicity roots flip the sign. This means adjacent intervals can have identical signs when separated by an even-multiplicity root.",
//     sectionId: "7"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Polynomial Inequalities",
//     "description": "Master polynomial inequalities of degree 3 and higher: sign chart method, root multiplicity (odd vs even), end behavior, factored form analysis, and worked examples with cubic and quartic polynomials.",
//     "url": "https://www.learnmathclass.com/algebra/inequalities/polynomial",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Polynomial Inequalities"
//     },
//     "teaches": [
//       "Sign chart method for polynomial inequalities",
//       "Factored form sign analysis",
//       "Root multiplicity (odd vs even) effects",
//       "End behavior and leading coefficient",
//       "Handling irrational and approximate roots",
//       "Worked examples with cubic and quartic polynomials"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Algebra",
//         "item": "https://www.learnmathclass.com/algebra"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Inequalities",
//         "item": "https://www.learnmathclass.com/algebra/inequalities"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Polynomial Inequalities",
//         "item": "https://www.learnmathclass.com/algebra/inequalities/polynomial"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }

//    return {
//   props: {
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Polynomial Inequalities: Sign Charts & Multiplicity | Learn Math Class",
//       description: "Master polynomial inequalities of degree 3 and higher: sign chart method, root multiplicity (odd vs even), end behavior, factored form analysis, and worked examples with cubic and quartic polynomials.",
//       keywords: keyWords.join(", "),
//       url: "/algebra/inequalities/polynomial",
//       name: "Polynomial Inequalities"
//     },
//   }
// }
//    }



//    export default function PolynomialInequalitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
//   const genericSections=[
//      {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//           sectionsContent.obj0.after,
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
//     // {
//     //     id:'8',
//     //     title:sectionsContent.obj8.title,
//     //     link:sectionsContent.obj8.link,
//     //     content:[
//     //       sectionsContent.obj8.content,
//     //     ]
//     // },
//     // {
//     //     id:'9',
//     //     title:sectionsContent.obj9.title,
//     //     link:sectionsContent.obj9.link,
//     //     content:[
//     //       sectionsContent.obj9.content,
//     //     ]
//     // },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
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
// <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
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
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Polynomial Inequalities</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//      <KeyTermsCard
//   id="0"
//   title={sectionsContent.obj0.title}
//   content={sectionsContent.obj0.content}
//   after={sectionsContent.obj0.after}
//   variant="light"
// />


//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
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
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'



export async function getStaticProps(){
const keyWords = [
  "polynomial inequalities",
  "sign chart method",
  "root multiplicity",
  "solving polynomial inequalities",
  "factored polynomial inequality",
  "cubic inequality",
  "higher degree inequality",
  "end behavior polynomial",
  "sign analysis",
  "odd even multiplicity",
  "polynomial inequality examples",
  "interval notation polynomial",
  "test point method",
  "polynomial sign change"
]
  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

   

const linkStyle = 'color: inherit; text-decoration: underline;'


// ---------- TABLES ----------

// obj2 — aggregation (process): 5-step sign-chart procedure
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 90%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Step</th>
      <th style="${tableHeaders.aggregation}">Action</th>
      <th style="${tableHeaders.aggregation}">Tool / detail</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve P(x) = 0 to find all real roots</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring; rational root theorem; quadratic formula after degree reduction; numerical methods if needed</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">order the roots on the number line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">smallest to largest; intervals form between consecutive roots</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">determine the sign of P(x) in each interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">test points, factor signs from factored form, or end behavior + multiplicity</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">select intervals matching the inequality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive intervals for P(x) &gt; 0; negative intervals for P(x) &lt; 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">apply endpoint rules</td>
      <td style="padding: 12px 15px; color: #34495e;">include roots for ≤ ⁄ ≥; exclude for &lt; ⁄ &gt;</td>
    </tr>
  </tbody>
</table>
`

// obj4 — comparison: odd vs even multiplicity
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 90%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Multiplicity at root r</th>
      <th style="${tableHeaders.comparison}">Example factor</th>
      <th style="${tableHeaders.comparison}">Sign behavior crossing r</th>
      <th style="${tableHeaders.comparison}">Graph behavior at r</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd&nbsp;&nbsp;(1, 3, 5, …)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x − r),&nbsp;&nbsp;(x − r)³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flips — adjacent intervals have opposite signs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph crosses the x-axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Even&nbsp;&nbsp;(2, 4, 6, …)</td>
      <td style="padding: 12px 15px; color: #34495e;">(x − r)²,&nbsp;&nbsp;(x − r)⁴</td>
      <td style="padding: 12px 15px; color: #34495e;">preserved — adjacent intervals have the same sign</td>
      <td style="padding: 12px 15px; color: #34495e;">graph touches the x-axis but does not cross (tangent)</td>
    </tr>
  </tbody>
</table>
`

// obj5 — aggregation (reference): end-behavior matrix
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 80%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Case</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Leftmost interval (x → −∞)</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Rightmost interval (x → +∞)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even degree, aₙ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">+</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">+</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Even degree, aₙ &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">−</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd degree, aₙ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">−</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">+</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Odd degree, aₙ &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">+</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center; font-weight: bold; font-size: 18px;">−</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary: capstone no-test-points workflow
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary} text-align: center;">Step</th>
      <th style="${tableHeaders.summary}">What you determine</th>
      <th style="${tableHeaders.summary}">How</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real roots, ordered on the number line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor; rational root theorem; quadratic formula; numerical methods if needed</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiplicity at each root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">read directly from the factored form (exponent of each factor)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign in the rightmost interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">end behavior — sign of aₙ for odd degree; sign of aₙ for even degree (both ends share it)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sign in every other interval, working leftward</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flip the sign at each root of odd multiplicity; keep it the same at each root of even multiplicity</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">solution set</td>
      <td style="padding: 12px 15px; color: #34495e;">select intervals matching the inequality; include roots for ≤ ⁄ ≥, exclude for &lt; ⁄ &gt;</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Core Concepts
 
- [Polynomial Inequality](!/algebra/definitions#polynomial_inequality) — $P(x) > 0$ for degree $\\geq 3$; sign chart with multiplicity awareness
- [Sign Analysis](!/algebra/definitions#sign_analysis) — the primary method: find roots, partition, test each interval
 
## From Polynomials Category
 
- [Multiplicity](!/algebra/definitions#multiplicity) — odd multiplicity causes sign change, even does not
- [End Behavior](!/algebra/definitions#end_behavior) — determines the sign in the outermost intervals
- [Factoring](!/algebra/definitions#factoring) — required to locate all real roots`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
 
  obj1: {
    title: `Definition`,
    content: `A polynomial inequality has the form

$$P(x) > 0$$

(or $<$, $\\leq$, $\\geq$), where $P(x)$ is a polynomial of degree $n \\geq 3$. The inequality asks where the polynomial takes positive or negative values — not where it equals zero, but which stretches of the number line lie above or below the horizontal axis.

[Linear](!/algebra/inequalities/linear) and [quadratic](!/algebra/inequalities/quadratic) inequalities are special cases corresponding to $n = 1$ and $n = 2$. At those low degrees, the structure is simple enough that dedicated methods suffice. From degree three onward, the number of roots and the variety of sign patterns increase, and a general method is needed. The sign chart provides that method.

As with [polynomial equations](!/algebra/equations/polynomial), the degree $n$ sets an upper bound: a polynomial of degree $n$ has at most $n$ real roots, and these roots create at most $n + 1$ intervals on the number line. Within each interval, the polynomial maintains a constant sign. The task is to determine that sign in every interval and select those that satisfy the inequality.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Sign Chart Method`,
    content: `The sign chart is a systematic procedure for solving any polynomial inequality once the real roots are known.

Step 1: Solve $P(x) = 0$ to find all real roots. Use factoring, the [rational root theorem](!/algebra/polynomials/rules), or the [quadratic formula](!/algebra/equations/quadratic) after degree reduction — whatever combination of techniques produces the roots.

Step 2: Order the roots on the number line from smallest to largest. They divide the line into intervals: one to the left of the smallest root, one between each consecutive pair, and one to the right of the largest.

Step 3: In each interval, determine the sign of $P(x)$. Choose any convenient test point within the interval and evaluate the sign — either by substituting into $P(x)$ directly or, if $P(x)$ is in factored form, by tracking the sign of each factor separately and multiplying.

Step 4: Select the intervals where the sign matches the inequality. For $P(x) > 0$, take the positive intervals. For $P(x) < 0$, take the negative ones.

Step 5: Decide on endpoint inclusion. For non-strict inequalities ($\\leq$ or $\\geq$), include the roots themselves because $P(r) = 0$ satisfies $\\leq 0$ and $\\geq 0$. For strict inequalities ($<$ or $>$), exclude them.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Factored Form and Sign Analysis`,
    content: `When the polynomial is expressed as a product of linear factors, the sign in each interval can be determined without evaluating $P(x)$ numerically. Instead, the sign of each individual factor is tracked, and the signs are multiplied together.

Consider $(x + 2)(x - 1)(x - 5) < 0$. The roots are $-2$, $1$, and $5$, creating four intervals. In each interval, every factor is either positive or negative depending on whether the test point lies to the left or right of that factor's root.

In $(-\\infty, -2)$: all three factors are negative. Three negatives multiply to a negative. The product is negative.

In $(-2, 1)$: the factor $(x + 2)$ is positive, while $(x - 1)$ and $(x - 5)$ are negative. One positive and two negatives: the product is positive.

In $(1, 5)$: the factors $(x + 2)$ and $(x - 1)$ are positive, $(x - 5)$ is negative. Two positives and one negative: the product is negative.

In $(5, \\infty)$: all three factors are positive. The product is positive.

The inequality $< 0$ selects the negative intervals: $(-\\infty, -2) \\cup (1, 5)$. No numerical evaluation of $P(x)$ was needed — only sign tracking.

This approach is faster than substituting test points into the expanded polynomial, especially for higher-degree expressions with many terms. It requires the polynomial to be in factored form, which is why factoring is typically the first step.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Root Multiplicity and Sign Changes`,
    content: `Not every root causes the sign of the polynomial to change. Whether the sign flips at a root depends on the root's multiplicity.

At a root of odd multiplicity (simple root, triple root, etc.), the polynomial changes sign. The graph crosses the $x$-axis, and the intervals on either side have opposite signs. A factor $(x - r)^1$ is negative to the left of $r$ and positive to the right, so crossing it flips the sign of the product.

At a root of even multiplicity (double root, quadruple root, etc.), the polynomial keeps its sign. The graph touches the $x$-axis and turns back without crossing. A factor $(x - r)^2$ is positive on both sides of $r$ (and zero at $r$ itself), so crossing it does not flip the sign of the product.

Consider $(x + 1)(x - 3)^2 > 0$. The roots are $x = -1$ (multiplicity $1$) and $x = 3$ (multiplicity $2$). In $(-\\infty, -1)$: $(x + 1)$ is negative and $(x - 3)^2$ is positive — product is negative. In $(-1, 3)$: $(x + 1)$ is positive and $(x - 3)^2$ is positive — product is positive. In $(3, \\infty)$: both are positive — product is positive. The sign changes at $x = -1$ (odd multiplicity) but not at $x = 3$ (even multiplicity). The solution is $(-1, 3) \\cup (3, \\infty)$, which simplifies to $(-1, \\infty) \\setminus \\{3\\}$ — all $x > -1$ except $x = 3$, where the expression equals zero.

This multiplicity rule eliminates the need to test points in every interval. Once the sign is known in any one interval, the sign in each adjacent interval is determined by whether the separating root has odd or even multiplicity.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `End Behavior`,
    content: `The sign of a polynomial for very large values of $|x|$ is controlled entirely by the leading term $a_nx^n$. This provides a guaranteed starting point for the sign chart: the sign in the outermost intervals is known before any test points are evaluated.

For even degree with $a_n > 0$: the polynomial is positive for both very large positive and very large negative $x$. Both outer intervals are positive.

For even degree with $a_n < 0$: the polynomial is negative on both outer intervals.

For odd degree with $a_n > 0$: the polynomial is negative far to the left and positive far to the right. The leftmost interval is negative and the rightmost is positive.

For odd degree with $a_n < 0$: the polynomial is positive far to the left and negative far to the right. The signs are reversed from the previous case.

Knowing the outermost signs and applying the multiplicity rule inward determines the sign in every interval without any test-point computation. Start from the rightmost interval (whose sign is the sign of $a_n$ for odd degree, or positive for even degree with $a_n > 0$), then flip or preserve the sign at each root moving leftward according to its multiplicity. This technique is faster and less error-prone than substituting numerical test points.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Polynomials That Do Not Factor Over the Rationals`,
    content: `The sign chart method requires knowing the real roots, but it does not require those roots to be rational. When the polynomial has no rational roots — when the [rational root theorem](!/algebra/polynomials/rules) produces no valid candidates — irrational or approximate roots still serve as valid boundary points.

The polynomial $x^3 - 2 = 0$ has the single real root $x = \\sqrt[3]{2} \\approx 1.26$. For the inequality $x^3 - 2 > 0$, this root divides the number line into two intervals. Since the leading coefficient is positive and the degree is odd, the polynomial is negative for $x < \\sqrt[3]{2}$ and positive for $x > \\sqrt[3]{2}$. The solution is $(\\sqrt[3]{2}, \\infty)$.

When multiple irrational roots exist and exact values are unavailable, numerical approximations from graphing or iterative methods (bisection, Newton's method) identify the boundary points to whatever precision is needed. The sign chart is then constructed using these approximate values. The logical structure — roots create intervals, signs are constant within intervals — holds regardless of whether the roots are rational, irrational, or only known approximately.

For polynomials that factor partially — say, one rational root found and a remaining irreducible quadratic with $\\Delta < 0$ — the irreducible factor contributes no real roots and maintains constant sign. It affects the overall sign in every interval uniformly but creates no new boundary points.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Worked Examples`,
    content: `A cubic with three distinct real roots: solve $x^3 - 6x^2 + 11x - 6 \\leq 0$. The polynomial factors as $(x - 1)(x - 2)(x - 3)$. The roots $1$, $2$, $3$ create four intervals. All three roots have odd multiplicity, so the sign alternates. The leading coefficient is positive and the degree is odd, so the rightmost interval $(3, \\infty)$ is positive. Moving left: $(2, 3)$ is negative, $(1, 2)$ is positive, $(-\\infty, 1)$ is negative. The inequality $\\leq 0$ selects the negative intervals and includes the roots: $(-\\infty, 1] \\cup [2, 3]$.

A quartic with a repeated root: solve $(x + 2)^2(x - 1)(x - 4) > 0$. The roots are $-2$ (multiplicity $2$), $1$ (multiplicity $1$), and $4$ (multiplicity $1$). The leading term is $x^4$ (positive), so both outermost intervals are positive. Moving inward from the right: $(4, \\infty)$ is positive. At $x = 4$ (odd), the sign flips: $(1, 4)$ is negative. At $x = 1$ (odd), the sign flips: $(-2, 1)$ is positive. At $x = -2$ (even), the sign stays: $(-\\infty, -2)$ is positive. The solution to $> 0$ is $(-\\infty, -2) \\cup (-2, 1) \\cup (4, \\infty)$, which simplifies to $(-\\infty, 1) \\cup (4, \\infty)$ with the single exclusion $x \\neq -2$ already handled by the strict inequality — but since $P(-2) = 0$, the strict inequality excludes $-2$ automatically. The solution is $(-\\infty, -2) \\cup (-2, 1) \\cup (4, \\infty)$.

A polynomial with an irrational root: solve $x^3 - 3x + 1 > 0$. The rational root theorem yields no rational roots. Numerical methods show three real roots near $x \\approx -1.88$, $x \\approx 0.35$, and $x \\approx 1.53$. All have odd multiplicity, so the sign alternates. The leading coefficient is positive, so the pattern from right to left is $+, -, +, -$. The solution is approximately $(-1.88, 0.35) \\cup (1.53, \\infty)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Summary: Filling the Sign Chart Without Test Points`,
    content: `The sign chart for a polynomial inequality of degree three or higher can be filled in entirely without test points by combining the root multiplicity rule (Section 4) with the end behavior of the polynomial (Section 5). The table below collects the resulting workflow: each step lists what is determined at that stage and the tool that supplies it, building the sign chart from the rightmost interval inward.`,
    before: ``,
    after: ``,
    link: '',
  },
};



  const introContent = {
  id: 'intro',
  title: `Sign Charts, Root Multiplicity, and the Shape of the Solution`,
  content: `When a polynomial inequality reaches degree three or higher, the parabola-based reasoning of the quadratic case no longer applies — the graph can cross the axis multiple times, flatten at certain roots, and reverse direction repeatedly. The sign chart becomes the primary tool: find every real root, partition the number line, and determine the sign in each interval. The new ingredient is multiplicity. A root where the polynomial merely touches zero without crossing behaves differently from one where it passes through, and the sign chart must reflect this distinction to produce the correct solution.`,
};


const faqQuestions = {
  obj1: {
    question: "What is a polynomial inequality?",
    answer: "A polynomial inequality has the form P(x) > 0 (or <, ≤, ≥) where P(x) is a polynomial of degree 3 or higher. It asks where the polynomial is positive or negative. The sign chart method handles all polynomial inequalities systematically.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you solve polynomial inequalities with sign charts?",
    answer: "Find all real roots, order them on a number line creating intervals, determine the sign in each interval using test points or factor signs, select intervals matching the inequality, then include or exclude roots based on strict vs non-strict inequality.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you find signs in a factored polynomial inequality?",
    answer: "Track each factor's sign separately: a factor (x - r) is negative left of r and positive right of r. Multiply all factor signs together. This avoids numerical evaluation entirely — just count negatives to determine the product's sign.",
    sectionId: "3"
  },
  obj4: {
    question: "How does root multiplicity affect polynomial inequality solutions?",
    answer: "At odd multiplicity roots, the sign changes (graph crosses axis). At even multiplicity roots, the sign stays the same (graph touches but doesn't cross). This determines whether adjacent intervals have the same or opposite signs.",
    sectionId: "4"
  },
  obj5: {
    question: "How does end behavior help solve polynomial inequalities?",
    answer: "The leading term aₙxⁿ determines signs at ±∞. For odd degree: opposite signs at ends. For even degree: same sign at both ends (sign of aₙ). Start from the known outer interval sign and flip/preserve inward using multiplicity.",
    sectionId: "5"
  },
  obj6: {
    question: "Can you solve polynomial inequalities with irrational roots?",
    answer: "Yes. The sign chart works with any real roots — rational, irrational, or approximate. If exact roots aren't available, numerical approximations serve as boundary points. The method requires knowing where roots are, not their exact form.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you handle polynomial inequalities with repeated roots?",
    answer: "Repeated roots with even multiplicity don't change the sign — the polynomial touches zero but doesn't cross. Only odd multiplicity roots flip the sign. This means adjacent intervals can have identical signs when separated by an even-multiplicity root.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Polynomial Inequalities",
    "description": "Master polynomial inequalities of degree 3 and higher: sign chart method, root multiplicity (odd vs even), end behavior, factored form analysis, and worked examples with cubic and quartic polynomials.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/polynomial",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Polynomial Inequalities"
    },
    "teaches": [
      "Sign chart method for polynomial inequalities",
      "Factored form sign analysis",
      "Root multiplicity (odd vs even) effects",
      "End behavior and leading coefficient",
      "Handling irrational and approximate roots",
      "Worked examples with cubic and quartic polynomials"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Polynomial Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/polynomial"
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
    obj2Table,
    obj4Table,
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Polynomial Inequalities: Sign Charts & Multiplicity | Learn Math Class",
      description: "Master polynomial inequalities of degree 3 and higher: sign chart method, root multiplicity (odd vs even), end behavior, factored form analysis, and worked examples with cubic and quartic polynomials.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/polynomial",
      name: "Polynomial Inequalities"
    },
  }
}
   }



   export default function PolynomialInequalitiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj4Table,
  obj5Table,
  summaryTable,
  faqQuestions,
  schemas,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
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

    // obj2: prose + 5-step process table
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div
            key={'obj2-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj2Table }}
          />,
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

    // obj4: prose + multiplicity comparison table
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div
            key={'obj4-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj4Table }}
          />,
        ]
    },

    // obj5: prose + end-behavior reference matrix
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div
            key={'obj5-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj5Table }}
          />,
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

    // obj8: NEW capstone with summary table
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
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
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
]

  return (
   <>
<Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
      __html: JSON.stringify(schemas.learningResource)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Polynomial Inequalities</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
     <KeyTermsCard
  id="0"
  title={sectionsContent.obj0.title}
  content={sectionsContent.obj0.content}
  after={sectionsContent.obj0.after}
  variant="light"
/>


   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}