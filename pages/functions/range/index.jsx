// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=[
//     'range of a function',
//     'finding range',
//     'range vs codomain',
//     'range notation',
//     'range from graph',
//     'range of common functions',
//     'range interval notation',
//     'output values',
//     'range algebraically',
//     'range and transformations',
//     'function range examples',
//     'range and invertibility',
//     'set of output values',
//     'how to find range of a function',
//   ]

//   // •

// //   • First item
// // • Second item


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

  

//   const sectionsContent = {

//     obj0 : {
//   title: `Key Terms`,
//   content: `
// • [Range](!/functions/definitions#range) — the set of all output values a function actually produces
// • [Domain](!/functions/definitions#domain) — the set of all inputs; range and domain together describe the full input-output picture
// • [Inverse Function](!/functions/definitions#inverse_function) — the range of $f$ becomes the domain of $f^{-1}$
// • [Transformation](!/functions/definitions#transformation) — vertical transformations directly alter the range
// `,
//   before: ``,
//   after: `
 
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
//   link: '',
// },

//   obj1: {
//     title: `What is Range`,
//     content: `The range of a function is the set of all output values the function produces. As the input varies across the entire [domain](!/functions/domain), the range collects every resulting output.

// Consider $f(x) = x^2$ with domain $(-\\infty, \\infty)$. Squaring any real number produces a non-negative result: $0, 1, 4, 9, 0.25$, and so on. Negative outputs never appear. The range is $[0, \\infty)$.

// Consider $g(x) = 2x + 1$ with domain $(-\\infty, \\infty)$. As $x$ takes every real value, $2x + 1$ also takes every real value — there is no output this linear function cannot reach. The range is $(-\\infty, \\infty)$.

// The range depends on both the rule and the domain. The same formula with different domains can produce different ranges. If $f(x) = x^2$ is restricted to domain $[1, 3]$, the outputs span from $1^2 = 1$ to $3^2 = 9$, giving range $[1, 9]$.

// Range answers the question: what values can this function actually produce? It is the complete collection of outputs, nothing more and nothing less.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Expressing Range`,
//     content: `Range is expressed using the same notations that describe domain — the difference is that range describes vertical extent (outputs) rather than horizontal extent (inputs).

// Interval notation captures continuous ranges. The range $[0, \\infty)$ means all non-negative real numbers. The range $(-1, 1)$ means all numbers strictly between $-1$ and $1$. Brackets include endpoints; parentheses exclude them.

// Set-builder notation describes the range by a property. The set $\\{y \\mid y \\geq 0\\}$ is equivalent to $[0, \\infty)$. This notation handles complex conditions: $\\{y \\mid y \\neq 0\\}$ describes all nonzero real numbers.

// Inequality notation states the condition directly: $y \\geq -3$ or $0 < y \\leq 5$.

// Union notation handles disconnected ranges. The range $(-\\infty, -1] \\cup [1, \\infty)$ consists of all numbers at most $-1$ together with all numbers at least $1$, excluding everything strictly between.

// For functions with finitely many outputs, the range is a discrete set listed explicitly. If a function takes only the values $2$, $5$, and $7$, the range is $\\{2, 5, 7\\}$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Range vs Codomain`,
//     content: `The codomain is the set where outputs are declared to live. The range is the set of outputs actually produced. The range is always a subset of the codomain, but they need not be equal.

// If a function $f: \\mathbb{R} \\to \\mathbb{R}$ is defined by $f(x) = x^2$, the codomain is all real numbers — that is where outputs are said to land. But the range is only $[0, \\infty)$, because negative numbers never actually appear as outputs.

// In elementary algebra, the codomain is usually taken to be all real numbers by default, and the focus falls on the range. The distinction becomes important in abstract mathematics, where functions are defined precisely as mappings from domain to codomain.

// A function is onto (or surjective) when every element of the codomain is actually achieved — that is, when the range equals the codomain. The function $f(x) = x^3$ from $\\mathbb{R}$ to $\\mathbb{R}$ is onto: every real number is the cube of some real number. The function $f(x) = x^2$ from $\\mathbb{R}$ to $\\mathbb{R}$ is not onto: negative numbers are in the codomain but not in the range.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Finding Range Algebraically`,
//     content: `One algebraic method for finding range reverses the input-output relationship. Write $y = f(x)$, then solve for $x$ in terms of $y$. The values of $y$ for which this is possible — where a real solution $x$ exists in the domain — form the range.

// For $f(x) = 2x + 5$, write $y = 2x + 5$ and solve:

// $$x = \\frac{y - 5}{2}$$

// This produces a real $x$ for every real $y$. The range is $(-\\infty, \\infty)$.

// For $f(x) = x^2$, write $y = x^2$ and solve:

// $$x = \\pm\\sqrt{y}$$

// This produces real solutions only when $y \\geq 0$. The range is $[0, \\infty)$.

// For $f(x) = \\dfrac{1}{x - 3}$, write $y = \\dfrac{1}{x - 3}$ and solve:

// $$x - 3 = \\frac{1}{y}$$
// $$x = 3 + \\frac{1}{y}$$

// This requires $y \\neq 0$. The range is $(-\\infty, 0) \\cup (0, \\infty)$.

// The method works well for rational, quadratic, and simple radical functions. For more complex functions, other approaches may be needed.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Finding Range by Analyzing Behavior`,
//     content: `Understanding how a function behaves — its extrema, its trends, its limits — reveals its range without explicit algebraic solving.

// A function with an absolute minimum $m$ and no upper bound has range $[m, \\infty)$. A function with an absolute maximum $M$ and no lower bound has range $(-\\infty, M]$. A function bounded both above and below has range contained in some interval $[m, M]$.

// Monotonic functions — those that only increase or only decrease — are easier to analyze. A strictly increasing function on domain $[a, b]$ has range $[f(a), f(b)]$. A strictly decreasing function on $[a, b]$ has range $[f(b), f(a)]$.

// End behavior determines whether the range extends to infinity. If $f(x) \\to \\infty$ as $x \\to \\infty$, the range has no upper bound. If $f(x) \\to -\\infty$ as $x \\to -\\infty$, the range has no lower bound.

// Horizontal asymptotes suggest range boundaries. If $f(x) \\to 2$ as $x \\to \\infty$, the value $2$ is approached but may or may not be achieved. Whether $2$ is in the range requires further analysis — checking if any $x$ actually produces $f(x) = 2$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Finding Range from Graph`,
//     content: `When a function is presented graphically, the range is read as the vertical extent — the set of $y$-values that the graph actually reaches.

// Trace the graph and observe: what is the lowest point? What is the highest point? Does the graph extend upward or downward without bound?

// Solid dots at endpoints indicate included values. If the highest point on the graph is a solid dot at $y = 5$, then $5$ is in the range. Use a bracket.

// Open dots indicate excluded values. If the graph approaches but never reaches $y = 5$, the range excludes $5$. Use a parenthesis.

// Horizontal asymptotes mark values the function approaches but typically does not achieve. A graph approaching $y = 0$ as $x \\to \\infty$ suggests $0$ is a boundary of the range, likely excluded.

// Gaps in the graph vertically appear as values of $y$ with no corresponding point on the curve. If no point on the graph has $y$-coordinate $3$, then $3$ is not in the range.

// For functions on restricted domains, check only the portion of the graph over that domain. The range may be smaller than the range on the natural domain.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Range of Common Function Types`,
//     content: `Each function family has characteristic range patterns.

// Linear functions $f(x) = mx + b$ with $m \\neq 0$ have range $(-\\infty, \\infty)$. The line extends infinitely up and down. Constant functions $f(x) = c$ have range $\\{c\\}$, a single value.

// Quadratic functions $f(x) = ax^2 + bx + c$ have range $[k, \\infty)$ when $a > 0$ and $(-\\infty, k]$ when $a < 0$, where $k$ is the $y$-coordinate of the vertex.

// Absolute value functions $f(x) = |x|$ have range $[0, \\infty)$. The output is never negative.

// Square root functions $f(x) = \\sqrt{x}$ have range $[0, \\infty)$. Cube root functions $f(x) = \\sqrt[3]{x}$ have range $(-\\infty, \\infty)$.

// Exponential functions $f(x) = a^x$ with $a > 0$, $a \\neq 1$ have range $(0, \\infty)$. Outputs are always positive but never zero.

// Logarithmic functions $f(x) = \\log_a(x)$ have range $(-\\infty, \\infty)$. Every real number is a possible output.

// Sine and cosine have range $[-1, 1]$. Tangent has range $(-\\infty, \\infty)$.

// These patterns provide quick answers for standard functions and anchor the analysis for [transformed](!/functions/transformations) versions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Effect of Transformations on Range`,
//     content: `[Transformations](!/functions/transformations) modify a function's graph, and vertical transformations directly affect the range.

// Vertical translation shifts the range. If $f(x)$ has range $[a, b]$, then $f(x) + k$ has range $[a + k, b + k]$. Adding $3$ to a function shifts its entire range up by $3$.

// Vertical stretch and compression scale the range. If $f(x)$ has range $[a, b]$, then $c \\cdot f(x)$ has range $[ca, cb]$ when $c > 0$, and $[cb, ca]$ when $c < 0$ (the interval reverses).

// Vertical reflection flips the range. If $f(x)$ has range $[a, b]$, then $-f(x)$ has range $[-b, -a]$. A function with range $[0, \\infty)$ becomes a function with range $(-\\infty, 0]$.

// Horizontal transformations — shifts, stretches, reflections in the $y$-axis — do not change the range directly. They change which $x$-values produce which outputs, but not the collection of outputs itself. A horizontal shift moves the graph left or right without altering its vertical extent.

// Combining transformations requires tracking each effect. For $g(x) = 2f(x - 3) + 5$, the range of $f$ is first scaled by $2$, then shifted up by $5$. The horizontal shift by $3$ does not affect the range.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Range from Context`,
//     content: `In applications, the range carries physical meaning and may be constrained by real-world limits.

// A function modeling height produces only non-negative outputs. A ball thrown upward cannot have negative height (assuming ground level is zero). The range is bounded below by $0$ and above by the maximum height reached.

// A function modeling population produces positive integers — or positive real numbers if continuous approximation is acceptable. Population cannot be negative, and zero means extinction.

// Probabilities lie between $0$ and $1$ inclusive. A function giving probability as output has range contained in $[0, 1]$.

// Percentages lie between $0$ and $100$. Temperatures may have physical lower bounds (absolute zero) or practical bounds from the context.

// Context can also reveal the range conceptually. If $C(x)$ represents the cost of producing $x$ items and includes a fixed startup cost of $\\$500$, then the range begins at $500$ or higher, not at zero.

// Interpreting the range means translating mathematical bounds into real-world meaning. "The range is $[0, 256]$" might mean "the brightness level varies from completely dark to maximum intensity."`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Range and Invertibility`,
//     content: `The range of a function becomes the [domain](!/functions/domain) of its [inverse](!/functions/inverse), and the domain of a function becomes the range of its inverse. This swap is fundamental to understanding inverse functions.

// If $f(x) = x^2$ with domain $[0, \\infty)$ has range $[0, \\infty)$, then its inverse $f^{-1}(x) = \\sqrt{x}$ has domain $[0, \\infty)$ and range $[0, \\infty)$.

// If $g(x) = e^x$ with domain $(-\\infty, \\infty)$ has range $(0, \\infty)$, then its inverse $g^{-1}(x) = \\ln(x)$ has domain $(0, \\infty)$ and range $(-\\infty, \\infty)$.

// The swap is symmetric and complete. Every output of $f$ is an input of $f^{-1}$. Every input of $f$ is an output of $f^{-1}$.

// When a function is not one-to-one on its natural domain, restricting the domain restricts the range as well. The function $f(x) = x^2$ on $(-\\infty, \\infty)$ has range $[0, \\infty)$. Restricting to domain $[0, \\infty)$ keeps the range as $[0, \\infty)$. Restricting to domain $[-3, 0]$ changes the range to $[0, 9]$.

// Understanding this relationship is essential for correctly defining and working with inverse functions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// }

//  const introContent = {
//   id: "intro",
//   title: "What Comes Out",
//   content: `The domain tells what goes in. The range tells what comes out. Every function transforms its inputs into outputs, but not every number appears as a result. The squaring function never produces a negative. The sine function never exceeds one. The reciprocal function never reaches zero.

// The range is the complete set of output values — every number the function actually produces as the input varies across the entire domain. Finding it requires understanding not just what the function does at particular points, but what it can and cannot do overall.`
// }




//   const faqQuestions = {
//     q1: {
//       question: "What is the range of a function?",
//       answer: "The range of a function is the set of all output values the function actually produces. As the input varies across the entire domain, the range collects every resulting output. For example, f(x) = x² has range [0, ∞) because squaring any real number produces a non-negative result.",
//     },
//     q2: {
//       question: "What is the difference between range and codomain?",
//       answer: "The codomain is the set where outputs are declared to live, while the range is the set of outputs actually produced. The range is always a subset of the codomain, but they need not be equal. A function is onto (surjective) when the range equals the codomain.",
//     },
//     q3: {
//       question: "How do you find the range of a function algebraically?",
//       answer: "Write y = f(x), then solve for x in terms of y. The values of y for which a real solution x exists in the domain form the range. For f(x) = 1/(x − 3), solving gives x = 3 + 1/y, which requires y ≠ 0, so the range is (−∞, 0) ∪ (0, ∞).",
//     },
//     q4: {
//       question: "How do transformations affect the range of a function?",
//       answer: "Vertical transformations directly affect the range. A vertical translation f(x) + k shifts every value in the range up or down by k. A vertical stretch c·f(x) scales the range by the factor c, and a vertical reflection −f(x) flips the range across zero. Horizontal transformations do not change the range.",
//     },
//     q5: {
//       question: "How does range relate to inverse functions?",
//       answer: "The range of a function becomes the domain of its inverse, and the domain becomes the range of its inverse. For example, g(x) = eˣ has range (0, ∞), so its inverse ln(x) has domain (0, ∞). Understanding this swap is essential for correctly defining and working with inverse functions.",
//     },
//   }

//   const seoData = {
//     title: "Range of a Function | Learn Math Class",
//     description: "Learn what the range of a function is and how to find it using algebraic and graphical methods. Covers interval notation, common functions, transformations, and invertibility.",
//     keywords: keyWords.join(", "),
//     url: "/functions/range",
//     name: "Range of a Function",
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": seoData.name,
//       "description": seoData.description,
//       "url": `https://www.learnmathclass.com${seoData.url}`,
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class",
//         "url": "https://www.learnmathclass.com",
//       },
//       "publisher": {
//         "@type": "Organization",
//         "name": "Learn Math Class",
//         "url": "https://www.learnmathclass.com",
//       },
//       "teaches": [
//         "What the range of a function is and how it differs from the codomain",
//         "How to express range using interval, set-builder, and inequality notation",
//         "How to find range algebraically by solving for x in terms of y",
//         "How to read range from a function's graph by examining vertical extent",
//         "Range patterns for common function types including linear, quadratic, exponential, and trigonometric",
//         "How vertical transformations shift, scale, and reflect the range of a function",
//       ],
//     },
//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com",
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Functions",
//           "item": "https://www.learnmathclass.com/functions",
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": seoData.name,
//           "item": `https://www.learnmathclass.com${seoData.url}`,
//         },
//       ],
//     },
//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": faqQuestions.q1.question,
//           "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q1.answer },
//         },
//         {
//           "@type": "Question",
//           "name": faqQuestions.q2.question,
//           "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q2.answer },
//         },
//         {
//           "@type": "Question",
//           "name": faqQuestions.q3.question,
//           "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q3.answer },
//         },
//         {
//           "@type": "Question",
//           "name": faqQuestions.q4.question,
//           "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q4.answer },
//         },
//         {
//           "@type": "Question",
//           "name": faqQuestions.q5.question,
//           "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q5.answer },
//         },
//       ],
//     },
//   }

//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          faqQuestions,
//          schemas,
//           seoData: {
//         title: "Range of a Function | Learn Math Class",
//         description: "Learn what the range of a function is and how to find it using algebraic and graphical methods. Covers interval notation, common functions, transformations, and invertibility.",
//         keywords: keyWords.join(", "),
//         url: "/functions/range",
//          name: "Range of a Function"
//       },
//        }
//     }
//    }

// export default function RangePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


//   const genericSections=[
//      {
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
//    <Head>
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
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Range</h1>
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
//        <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    />
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
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){

  const keyWords=[
    'range of a function',
    'finding range',
    'range vs codomain',
    'range notation',
    'range from graph',
    'range of common functions',
    'range interval notation',
    'output values',
    'range algebraically',
    'range and transformations',
    'function range examples',
    'range and invertibility',
    'set of output values',
    'how to find range of a function',
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation: five notation forms for range
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Notation</th>
      <th style="${tableHeaders.aggregation}">What it represents</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Interval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a continuous run of values — brackets include endpoints, parentheses exclude them</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞) — all non-negative reals</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Set-builder</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a property that every y in the range must satisfy</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{y | y ≥ 0} — equivalent to [0, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inequality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the bounding condition stated directly</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">y ≥ −3, or 0 &lt; y ≤ 5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Union</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">disconnected pieces joined with ∪</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, −1] ∪ [1, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Discrete set</td>
      <td style="padding: 12px 15px; color: #34495e;">a finite list of explicit values</td>
      <td style="padding: 12px 15px; color: #34495e;">{2, 5, 7}</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — aggregation (reference): default range for common function families
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function family</th>
      <th style="${tableHeaders.aggregation}">Form</th>
      <th style="${tableHeaders.aggregation}">Default range</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear (non-constant)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = mx + b, m ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Constant</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{c}</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quadratic, opens up</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ax² + bx + c, a &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[k, ∞), where k is the vertex y-coordinate</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quadratic, opens down</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ax² + bx + c, a &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, k]</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Absolute value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = |x|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = √x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = ∛x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = aˣ, a &gt; 0, a ≠ 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logarithmic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = logₐ(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sine / cosine</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) = sin(x) or cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−1, 1]</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Tangent</td>
      <td style="padding: 12px 15px; color: #34495e;">f(x) = tan(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, ∞)</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — aggregation: each vertical transformation's effect on range (horizontals are no-ops)
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Transformation</th>
      <th style="${tableHeaders.aggregation}">Form</th>
      <th style="${tableHeaders.aggregation}">If f has range [a, b], then g has range</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical translation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">g(x) = f(x) + k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[a + k, b + k] — shifted by k</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical scale, c &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">g(x) = c · f(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[ca, cb] — scaled by c</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical scale, c &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">g(x) = c · f(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[cb, ca] — scaled and reversed</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical reflection</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">g(x) = −f(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−b, −a] — flipped across 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Any horizontal transformation</td>
      <td style="padding: 12px 15px; color: #34495e;">f(x − h), f(bx), f(−x)</td>
      <td style="padding: 12px 15px; color: #34495e;">[a, b] — unchanged</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: six methods of finding range
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Method</th>
      <th style="${tableHeaders.summary}">When to use it</th>
      <th style="${tableHeaders.summary}">How it works</th>
      <th style="${tableHeaders.summary}">Quick example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraic inversion</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rational, quadratic, or simple radical forms</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve y = f(x) for x; the y-values giving a real solution form the range</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">y = x² → x = ±√y, so y ≥ 0 → range [0, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Behavior analysis</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">extrema, monotonicity, or end behavior is clear</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">find min/max; check end limits and asymptotes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">strictly increasing on [a, b] → range [f(a), f(b)]</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Graphical reading</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph is given visually</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">trace the vertical extent; check solid vs open dots and asymptotes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve reaches max y = 5 with a solid dot → 5 is included</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Family recognition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function matches a common parent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">look up the family&apos;s typical range, then adjust for any transformations</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">aˣ has range (0, ∞); shifting up by k gives (k, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Contextual constraint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">applied or physical problems</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constrain by physical meaning — height ≥ 0, probability in [0, 1], etc.</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cost function with $500 startup → range begins at 500</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Inverse swap</td>
      <td style="padding: 12px 15px; color: #34495e;">the inverse is known or easy to identify</td>
      <td style="padding: 12px 15px; color: #34495e;">range of f equals domain of f⁻¹</td>
      <td style="padding: 12px 15px; color: #34495e;">f = eˣ has range = domain of ln = (0, ∞)</td>
    </tr>
  </tbody>
</table>
`


  const sectionsContent = {

    obj0 : {
  title: `Key Terms`,
  content: `
• [Range](!/functions/definitions#range) — the set of all output values a function actually produces
• [Domain](!/functions/definitions#domain) — the set of all inputs; range and domain together describe the full input-output picture
• [Inverse Function](!/functions/definitions#inverse_function) — the range of $f$ becomes the domain of $f^{-1}$
• [Transformation](!/functions/definitions#transformation) — vertical transformations directly alter the range
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},

  obj1: {
    title: `What is Range`,
    content: `The range of a function is the set of all output values the function produces. As the input varies across the entire [domain](!/functions/domain), the range collects every resulting output.

Consider $f(x) = x^2$ with domain $(-\\infty, \\infty)$. Squaring any real number produces a non-negative result: $0, 1, 4, 9, 0.25$, and so on. Negative outputs never appear. The range is $[0, \\infty)$.

Consider $g(x) = 2x + 1$ with domain $(-\\infty, \\infty)$. As $x$ takes every real value, $2x + 1$ also takes every real value — there is no output this linear function cannot reach. The range is $(-\\infty, \\infty)$.

The range depends on both the rule and the domain. The same formula with different domains can produce different ranges. If $f(x) = x^2$ is restricted to domain $[1, 3]$, the outputs span from $1^2 = 1$ to $3^2 = 9$, giving range $[1, 9]$.

Range answers the question: what values can this function actually produce? It is the complete collection of outputs, nothing more and nothing less.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Expressing Range`,
    content: `Range is expressed using the same notations that describe domain — the difference is that range describes vertical extent (outputs) rather than horizontal extent (inputs).

Interval notation captures continuous ranges. The range $[0, \\infty)$ means all non-negative real numbers. The range $(-1, 1)$ means all numbers strictly between $-1$ and $1$. Brackets include endpoints; parentheses exclude them.

Set-builder notation describes the range by a property. The set $\\{y \\mid y \\geq 0\\}$ is equivalent to $[0, \\infty)$. This notation handles complex conditions: $\\{y \\mid y \\neq 0\\}$ describes all nonzero real numbers.

Inequality notation states the condition directly: $y \\geq -3$ or $0 < y \\leq 5$.

Union notation handles disconnected ranges. The range $(-\\infty, -1] \\cup [1, \\infty)$ consists of all numbers at most $-1$ together with all numbers at least $1$, excluding everything strictly between.

For functions with finitely many outputs, the range is a discrete set listed explicitly. If a function takes only the values $2$, $5$, and $7$, the range is $\\{2, 5, 7\\}$.

The table below collects each notation form with what it represents and a concrete example — useful as a quick reference when writing or reading range descriptions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Range vs Codomain`,
    content: `The codomain is the set where outputs are declared to live. The range is the set of outputs actually produced. The range is always a subset of the codomain, but they need not be equal.

If a function $f: \\mathbb{R} \\to \\mathbb{R}$ is defined by $f(x) = x^2$, the codomain is all real numbers — that is where outputs are said to land. But the range is only $[0, \\infty)$, because negative numbers never actually appear as outputs.

In elementary algebra, the codomain is usually taken to be all real numbers by default, and the focus falls on the range. The distinction becomes important in abstract mathematics, where functions are defined precisely as mappings from domain to codomain.

A function is onto (or surjective) when every element of the codomain is actually achieved — that is, when the range equals the codomain. The function $f(x) = x^3$ from $\\mathbb{R}$ to $\\mathbb{R}$ is onto: every real number is the cube of some real number. The function $f(x) = x^2$ from $\\mathbb{R}$ to $\\mathbb{R}$ is not onto: negative numbers are in the codomain but not in the range.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Finding Range Algebraically`,
    content: `One algebraic method for finding range reverses the input-output relationship. Write $y = f(x)$, then solve for $x$ in terms of $y$. The values of $y$ for which this is possible — where a real solution $x$ exists in the domain — form the range.

For $f(x) = 2x + 5$, write $y = 2x + 5$ and solve:

$$x = \\frac{y - 5}{2}$$

This produces a real $x$ for every real $y$. The range is $(-\\infty, \\infty)$.

For $f(x) = x^2$, write $y = x^2$ and solve:

$$x = \\pm\\sqrt{y}$$

This produces real solutions only when $y \\geq 0$. The range is $[0, \\infty)$.

For $f(x) = \\dfrac{1}{x - 3}$, write $y = \\dfrac{1}{x - 3}$ and solve:

$$x - 3 = \\frac{1}{y}$$
$$x = 3 + \\frac{1}{y}$$

This requires $y \\neq 0$. The range is $(-\\infty, 0) \\cup (0, \\infty)$.

The method works well for rational, quadratic, and simple radical functions. For more complex functions, other approaches may be needed.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Finding Range by Analyzing Behavior`,
    content: `Understanding how a function behaves — its extrema, its trends, its limits — reveals its range without explicit algebraic solving.

A function with an absolute minimum $m$ and no upper bound has range $[m, \\infty)$. A function with an absolute maximum $M$ and no lower bound has range $(-\\infty, M]$. A function bounded both above and below has range contained in some interval $[m, M]$.

Monotonic functions — those that only increase or only decrease — are easier to analyze. A strictly increasing function on domain $[a, b]$ has range $[f(a), f(b)]$. A strictly decreasing function on $[a, b]$ has range $[f(b), f(a)]$.

End behavior determines whether the range extends to infinity. If $f(x) \\to \\infty$ as $x \\to \\infty$, the range has no upper bound. If $f(x) \\to -\\infty$ as $x \\to -\\infty$, the range has no lower bound.

Horizontal asymptotes suggest range boundaries. If $f(x) \\to 2$ as $x \\to \\infty$, the value $2$ is approached but may or may not be achieved. Whether $2$ is in the range requires further analysis — checking if any $x$ actually produces $f(x) = 2$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Finding Range from Graph`,
    content: `When a function is presented graphically, the range is read as the vertical extent — the set of $y$-values that the graph actually reaches.

Trace the graph and observe: what is the lowest point? What is the highest point? Does the graph extend upward or downward without bound?

Solid dots at endpoints indicate included values. If the highest point on the graph is a solid dot at $y = 5$, then $5$ is in the range. Use a bracket.

Open dots indicate excluded values. If the graph approaches but never reaches $y = 5$, the range excludes $5$. Use a parenthesis.

Horizontal asymptotes mark values the function approaches but typically does not achieve. A graph approaching $y = 0$ as $x \\to \\infty$ suggests $0$ is a boundary of the range, likely excluded.

Gaps in the graph vertically appear as values of $y$ with no corresponding point on the curve. If no point on the graph has $y$-coordinate $3$, then $3$ is not in the range.

For functions on restricted domains, check only the portion of the graph over that domain. The range may be smaller than the range on the natural domain.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Range of Common Function Types`,
    content: `Each function family has characteristic range patterns.

Linear functions $f(x) = mx + b$ with $m \\neq 0$ have range $(-\\infty, \\infty)$. The line extends infinitely up and down. Constant functions $f(x) = c$ have range $\\{c\\}$, a single value.

Quadratic functions $f(x) = ax^2 + bx + c$ have range $[k, \\infty)$ when $a > 0$ and $(-\\infty, k]$ when $a < 0$, where $k$ is the $y$-coordinate of the vertex.

Absolute value functions $f(x) = |x|$ have range $[0, \\infty)$. The output is never negative.

Square root functions $f(x) = \\sqrt{x}$ have range $[0, \\infty)$. Cube root functions $f(x) = \\sqrt[3]{x}$ have range $(-\\infty, \\infty)$.

Exponential functions $f(x) = a^x$ with $a > 0$, $a \\neq 1$ have range $(0, \\infty)$. Outputs are always positive but never zero.

Logarithmic functions $f(x) = \\log_a(x)$ have range $(-\\infty, \\infty)$. Every real number is a possible output.

Sine and cosine have range $[-1, 1]$. Tangent has range $(-\\infty, \\infty)$.

These patterns provide quick answers for standard functions and anchor the analysis for [transformed](!/functions/transformations) versions. The table below collects every common family with its form and default range — useful as a lookup card.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Effect of Transformations on Range`,
    content: `[Transformations](!/functions/transformations) modify a function's graph, and vertical transformations directly affect the range.

Vertical translation shifts the range. If $f(x)$ has range $[a, b]$, then $f(x) + k$ has range $[a + k, b + k]$. Adding $3$ to a function shifts its entire range up by $3$.

Vertical stretch and compression scale the range. If $f(x)$ has range $[a, b]$, then $c \\cdot f(x)$ has range $[ca, cb]$ when $c > 0$, and $[cb, ca]$ when $c < 0$ (the interval reverses).

Vertical reflection flips the range. If $f(x)$ has range $[a, b]$, then $-f(x)$ has range $[-b, -a]$. A function with range $[0, \\infty)$ becomes a function with range $(-\\infty, 0]$.

Horizontal transformations — shifts, stretches, reflections in the $y$-axis — do not change the range directly. They change which $x$-values produce which outputs, but not the collection of outputs itself. A horizontal shift moves the graph left or right without altering its vertical extent.

Combining transformations requires tracking each effect. For $g(x) = 2f(x - 3) + 5$, the range of $f$ is first scaled by $2$, then shifted up by $5$. The horizontal shift by $3$ does not affect the range.

The table below collects each vertical transformation's effect on a known range $[a, b]$, with horizontal transformations listed as a single row to make explicit that they leave the range untouched.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Range from Context`,
    content: `In applications, the range carries physical meaning and may be constrained by real-world limits.

A function modeling height produces only non-negative outputs. A ball thrown upward cannot have negative height (assuming ground level is zero). The range is bounded below by $0$ and above by the maximum height reached.

A function modeling population produces positive integers — or positive real numbers if continuous approximation is acceptable. Population cannot be negative, and zero means extinction.

Probabilities lie between $0$ and $1$ inclusive. A function giving probability as output has range contained in $[0, 1]$.

Percentages lie between $0$ and $100$. Temperatures may have physical lower bounds (absolute zero) or practical bounds from the context.

Context can also reveal the range conceptually. If $C(x)$ represents the cost of producing $x$ items and includes a fixed startup cost of $\\$500$, then the range begins at $500$ or higher, not at zero.

Interpreting the range means translating mathematical bounds into real-world meaning. "The range is $[0, 256]$" might mean "the brightness level varies from completely dark to maximum intensity."`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Range and Invertibility`,
    content: `The range of a function becomes the [domain](!/functions/domain) of its [inverse](!/functions/inverse), and the domain of a function becomes the range of its inverse. This swap is fundamental to understanding inverse functions.

If $f(x) = x^2$ with domain $[0, \\infty)$ has range $[0, \\infty)$, then its inverse $f^{-1}(x) = \\sqrt{x}$ has domain $[0, \\infty)$ and range $[0, \\infty)$.

If $g(x) = e^x$ with domain $(-\\infty, \\infty)$ has range $(0, \\infty)$, then its inverse $g^{-1}(x) = \\ln(x)$ has domain $(0, \\infty)$ and range $(-\\infty, \\infty)$.

The swap is symmetric and complete. Every output of $f$ is an input of $f^{-1}$. Every input of $f$ is an output of $f^{-1}$.

When a function is not one-to-one on its natural domain, restricting the domain restricts the range as well. The function $f(x) = x^2$ on $(-\\infty, \\infty)$ has range $[0, \\infty)$. Restricting to domain $[0, \\infty)$ keeps the range as $[0, \\infty)$. Restricting to domain $[-3, 0]$ changes the range to $[0, 9]$.

Understanding this relationship is essential for correctly defining and working with inverse functions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Summary of Methods for Finding Range`,
    content: `Six different paths lead to a function's range: algebraic inversion, behavior analysis, graphical reading, family recognition, contextual constraints, and the domain–range swap of an inverse. Which method fits depends on how the function is presented and what is already known about it. The table below collects each approach with the situation that calls for it, how the method works, and a small example — useful as a study guide and as a checklist when a single method does not yield a clean answer.`,
    before: ``,
    after: ``,
    link: '',
  },

}

 const introContent = {
  id: "intro",
  title: "What Comes Out",
  content: `The domain tells what goes in. The range tells what comes out. Every function transforms its inputs into outputs, but not every number appears as a result. The squaring function never produces a negative. The sine function never exceeds one. The reciprocal function never reaches zero.

The range is the complete set of output values — every number the function actually produces as the input varies across the entire domain. Finding it requires understanding not just what the function does at particular points, but what it can and cannot do overall.`
}




  const faqQuestions = {
    q1: {
      question: "What is the range of a function?",
      answer: "The range of a function is the set of all output values the function actually produces. As the input varies across the entire domain, the range collects every resulting output. For example, f(x) = x² has range [0, ∞) because squaring any real number produces a non-negative result.",
    },
    q2: {
      question: "What is the difference between range and codomain?",
      answer: "The codomain is the set where outputs are declared to live, while the range is the set of outputs actually produced. The range is always a subset of the codomain, but they need not be equal. A function is onto (surjective) when the range equals the codomain.",
    },
    q3: {
      question: "How do you find the range of a function algebraically?",
      answer: "Write y = f(x), then solve for x in terms of y. The values of y for which a real solution x exists in the domain form the range. For f(x) = 1/(x − 3), solving gives x = 3 + 1/y, which requires y ≠ 0, so the range is (−∞, 0) ∪ (0, ∞).",
    },
    q4: {
      question: "How do transformations affect the range of a function?",
      answer: "Vertical transformations directly affect the range. A vertical translation f(x) + k shifts every value in the range up or down by k. A vertical stretch c·f(x) scales the range by the factor c, and a vertical reflection −f(x) flips the range across zero. Horizontal transformations do not change the range.",
    },
    q5: {
      question: "How does range relate to inverse functions?",
      answer: "The range of a function becomes the domain of its inverse, and the domain becomes the range of its inverse. For example, g(x) = eˣ has range (0, ∞), so its inverse ln(x) has domain (0, ∞). Understanding this swap is essential for correctly defining and working with inverse functions.",
    },
  }

  const seoData = {
    title: "Range of a Function | Learn Math Class",
    description: "Learn what the range of a function is and how to find it using algebraic and graphical methods. Covers interval notation, common functions, transformations, and invertibility.",
    keywords: keyWords.join(", "),
    url: "/functions/range",
    name: "Range of a Function",
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com",
      },
      "teaches": [
        "What the range of a function is and how it differs from the codomain",
        "How to express range using interval, set-builder, and inequality notation",
        "How to find range algebraically by solving for x in terms of y",
        "How to read range from a function's graph by examining vertical extent",
        "Range patterns for common function types including linear, quadratic, exponential, and trigonometric",
        "How vertical transformations shift, scale, and reflect the range of a function",
      ],
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": `https://www.learnmathclass.com${seoData.url}`,
        },
      ],
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": faqQuestions.q1.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q1.answer },
        },
        {
          "@type": "Question",
          "name": faqQuestions.q2.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q2.answer },
        },
        {
          "@type": "Question",
          "name": faqQuestions.q3.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q3.answer },
        },
        {
          "@type": "Question",
          "name": faqQuestions.q4.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q4.answer },
        },
        {
          "@type": "Question",
          "name": faqQuestions.q5.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q5.answer },
        },
      ],
    },
  }

   return {
      props:{
         sectionsContent,
         introContent,
         obj2Table,
         obj7Table,
         obj8Table,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Range of a Function | Learn Math Class",
        description: "Learn what the range of a function is and how to find it using algebraic and graphical methods. Covers interval notation, common functions, transformations, and invertibility.",
        keywords: keyWords.join(", "),
        url: "/functions/range",
         name: "Range of a Function"
      },
       }
    }
   }

export default function RangePage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj7Table,
  obj8Table,
  summaryTable,
  faqQuestions,
  schemas
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div
            key={'obj8-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj8Table }}
          />,
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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },

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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Range</h1>
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