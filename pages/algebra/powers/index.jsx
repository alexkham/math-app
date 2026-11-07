// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   'powers algebra',
//   'exponents',
//   'base and exponent',
//   'laws of exponents',
//   'negative exponents',
//   'zero exponent',
//   'rational exponents',
//   'irrational exponents',
//   'exponential equations',
//   'exponential functions',
//   'exponent rules',
//   'exponential inequalities',
//   'powers and roots connection',
//   'exponent notation'
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
// ## Core Vocabulary
 
// - [Power](!/algebra/definitions#power) — an expression $a^n$ consisting of a base raised to an exponent
// - [Base (of a Power)](!/algebra/definitions#base_(of_a_power)) — the number $a$ being raised to a power
// - [Exponent](!/algebra/definitions#exponent) — the number $n$ controlling how the base is used
 
// ## Exponent Types
 
// - [Natural Exponent](!/algebra/definitions#natural_exponent) — positive integer: $a^n = a \\cdot a \\cdots a$ ($n$ times)
// - [Zero Exponent](!/algebra/definitions#zero_exponent) — $a^0 = 1$ for $a \\neq 0$
// - [Negative Exponent](!/algebra/definitions#negative_exponent) — $a^{-n} = 1/a^n$
// - [Rational Exponent](!/algebra/definitions#rational_exponent) — $a^{m/n} = \\sqrt[n]{a^m}$
// - [Irrational Exponent](!/algebra/definitions#irrational_exponent) — defined as a limit of rational approximations
 
// ## Laws
 
// - [Product Rule (Exponents)](!/algebra/definitions#product_rule_(exponents)) — $a^m \\cdot a^n = a^{m+n}$
// - [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_(exponents)) — $a^m / a^n = a^{m-n}$
// - [Power of a Power](!/algebra/definitions#power_of_a_power) — $(a^m)^n = a^{mn}$
// - [Power of a Product](!/algebra/definitions#power_of_a_product) — $(ab)^n = a^n b^n$
// - [Power of a Quotient](!/algebra/definitions#power_of_a_quotient) — $(a/b)^n = a^n / b^n$
 
// ## Applications
 
// - [Exponential Equation](!/algebra/definitions#exponential_equation) — variable in the exponent
// - [Exponential Inequality](!/algebra/definitions#exponential_inequality) — direction depends on the base
// - [Exponential Function](!/algebra/definitions#exponential_function) — $f(x) = a^x$ with fixed base, variable exponent`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
//   link: '',
// },

//   obj1: {
//     title: `Definition and Terminology`,
//     content: `The expression $a^n$ is called a power. The number $a$ is the base — the quantity being repeatedly multiplied. The number $n$ is the exponent — it controls how many times the base appears as a factor.

// $$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}$$

// This definition works when $n$ is a positive integer. The expression $2^5$ means $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Five factors of 2.

// The word "power" refers to the entire expression, not just the exponent. Saying "$2^5$ is a power of 2" is correct. Saying "5 is the power" is imprecise — 5 is the exponent.

// Two exponents have special names. The exponent 2 gives "squared": $a^2$ is "a squared." The exponent 3 gives "cubed": $a^3$ is "a cubed." All other exponents use the general form: $a^n$ is "a to the power of n" or "a to the nth."`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Notation and Conventions`,
//     content: `Parentheses determine what the exponent applies to. Without parentheses, the exponent binds only to the symbol immediately before it:

// $$-2^2 = -(2^2) = -4$$

// $$(-2)^2 = (-2) \\cdot (-2) = 4$$

// In the first expression, the exponent applies to 2 alone; the negative sign is applied afterward. In the second, the parentheses force the exponent to apply to $-2$ as a whole.

// Stacked exponents are read from the top down:

// $$a^{2^3} = a^8$$

// This is not the same as $(a^2)^3 = a^6$. Without parentheses, $2^3$ is computed first to produce the exponent 8. The full rules governing expressions like $(a^m)^n$ appear on the [exponent rules](!/algebra/powers/exponent-rules) page.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Natural Exponents`,
//     content: `When the exponent is a positive integer, the power is a product of repeated factors. The exponent simply counts how many copies of the base are multiplied together.

// $$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$$

// $$10^6 = 1{,}000{,}000$$

// This is where the laws of exponents — the product rule, quotient rule, power-of-a-power rule — are first derived. Each law emerges naturally from counting and regrouping factors. Every extension of exponents to other types preserves these laws by definition.

// The [natural exponents](!/algebra/powers/natural-exponents) page develops this case fully: the derivation of each law, worked examples, and the transition toward broader exponent types.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/natural-exponents',
//   },

//   obj4: {
//     title: `Zero as an Exponent`,
//     content: `Repeated multiplication offers no interpretation for multiplying a base zero times. The definition $a^0 = 1$ (for $a \\neq 0$) is not arbitrary — it is forced by consistency with the quotient rule.

// If $a^m / a^m = a^{m-m}$, then $a^0$ must equal 1, because any nonzero quantity divided by itself is 1.

// A pattern argument reinforces this: $3^3 = 27$, $3^2 = 9$, $3^1 = 3$. Each step divides by 3. Continuing: $3^0 = 1$.

// The case $0^0$ is genuinely ambiguous. Different conventions assign it the value 1 in combinatorics and leave it undefined in analysis. The [zero powers](!/algebra/powers/zero-powers) page addresses this case and the reasoning behind each convention.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/zero-powers',
//   },

//   obj5: {
//     title: `Negative Exponents`,
//     content: `A negative exponent produces the reciprocal of the corresponding positive power:

// $$a^{-n} = \\frac{1}{a^n}, \\quad a \\neq 0$$

// The definition extends the descending pattern below $a^0$. From $3^1 = 3$ and $3^0 = 1$, dividing by 3 once more gives $3^{-1} = 1/3$. Then $3^{-2} = 1/9$, $3^{-3} = 1/27$, and so on.

// The base cannot be zero — $0^{-n}$ would require dividing by $0^n = 0$, which is undefined.

// Negative exponents rewrite fractions without denominators: $1/a^3 = a^{-3}$. This notational flexibility is essential when applying the laws of exponents. The [negative exponents](!/algebra/powers/negative-exponents) page covers the full treatment.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/negative-exponents',
//   },

//   obj6: {
//     title: `Rational Exponents`,
//     content: `When the exponent is a fraction $m/n$, the denominator indicates a root and the numerator indicates a power:

// $$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$

// This equivalence bridges exponents and [roots](!/algebra/roots). Computing $8^{2/3}$: the denominator 3 means cube root, the numerator 2 means square. So $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.

// For even denominators, the base must be non-negative in real numbers — $(-4)^{1/2}$ has no real value. Odd denominators accept any real base.

// Rational exponents provide a single framework for roots and powers. The [rational exponents](!/algebra/powers/rational-exponents) page develops the notation, the domain restrictions, and the connection to radical form.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/rational-exponents',
//   },

//   obj7: {
//     title: `Irrational Exponents`,
//     content: `An irrational exponent like $\\pi$ or $\\sqrt{2}$ cannot be expressed as a fraction, so the rational-exponent definition does not apply directly. Instead, $2^\\pi$ is defined as the limit of $2^r$ where rational values $r$ approach $\\pi$:

// $$2^3 = 8, \\quad 2^{3.1} \\approx 8.574, \\quad 2^{3.14} \\approx 8.815, \\quad 2^{3.1415} \\approx 8.824$$

// The values converge, and the limit is $2^\\pi$.

// This construction requires the base to be positive. For $a > 0$, the function $a^x$ is continuous and the limit always exists. For $a \\leq 0$, the sequence of rational approximations does not converge to a consistent real value.

// The [irrational exponents](!/algebra/powers/irrational-exponents) page formalizes this limiting process and the domain restriction $a > 0$.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/irrational-exponents',
//   },

//   obj8: {
//     title: `Laws of Exponents`,
//     content: `A single set of rules governs all exponent types. The product rule $a^m \\cdot a^n = a^{m+n}$, the quotient rule $a^m / a^n = a^{m-n}$, the power-of-a-power rule $(a^m)^n = a^{mn}$, and the remaining laws hold whether the exponents are natural, zero, negative, rational, or irrational.

// These laws are first proved for natural exponents, where they follow from counting factors. The extensions to other exponent types are then defined so that the same laws remain valid — each new definition is chosen precisely to preserve these identities.

// Domain restrictions tighten as the exponent type broadens. Natural exponents allow any base. Zero and negative exponents exclude $a = 0$. Rational exponents with even denominators require $a \\geq 0$. Irrational exponents require $a > 0$.

// The [exponent rules](!/algebra/powers/exponent-rules) page collects every law with derivations, examples, and the full domain conditions.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/exponent-rules',
//   },

//   obj9: {
//     title: `Exponential Equations`,
//     content: `When the unknown appears in the exponent, the equation is exponential: $2^x = 16$, $3^{2x-1} = 27$, $5^x = 12$.

// The simplest cases resolve by rewriting both sides with a common base. Since $16 = 2^4$, the equation $2^x = 16$ gives $x = 4$ directly by matching exponents.

// When bases cannot be matched, [logarithms](!/algebra/logarithms) provide the tool. Taking the logarithm of both sides converts the exponent into a coefficient, making the unknown accessible through algebra.

// The [exponential equations](!/algebra/powers/exponential-equations) page covers both techniques: base matching for exact solutions and logarithmic methods for the general case.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/exponential-equations',
//   },

//   obj10: {
//     title: `Exponential Inequalities`,
//     content: `Inequalities involving powers require attention to the base. The expression $2^x > 8$ and $(1/3)^x \\leq 9$ are both exponential inequalities, but they behave differently.

// When the base satisfies $a > 1$, the exponential function is increasing: larger exponents produce larger values. The inequality direction is preserved when applying logarithms.

// When $0 < a < 1$, the function is decreasing: larger exponents produce smaller values. The inequality reverses when solving.

// The [exponential inequalities](!/algebra/powers/exponential-inequalities) page develops the solving techniques and the role the base plays in determining direction.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/exponential-inequalities',
//   },

//   obj11: {
//     title: `Exponential Functions`,
//     content: `When the base is a fixed positive number and the exponent varies, the power $a^x$ becomes a [function](!/functions) of $x$. This is the conceptual shift from computing individual powers to studying how powers change.

// For $a > 1$, the function grows — each unit increase in $x$ multiplies the output by $a$. For $0 < a < 1$, the function decays. The number $e \\approx 2.718$ occupies a central role: the function $e^x$ is its own derivative, making it foundational in calculus.

// Exponential functions are the counterpart of [polynomial functions](!/algebra/polynomials). In a polynomial, the base varies and the exponent is fixed ($x^3$). In an exponential function, the base is fixed and the exponent varies ($3^x$). The behaviors are fundamentally different.

// The [exponential functions](!/algebra/powers/exponential-functions) page covers graphs, transformations, growth and decay models, and the role of $e$.`,
//     before: ``,
//     after: ``,
//     link: '/algebra/powers/exponential-functions',
//   },

// }

// const introContent = {
//   id: 'intro',
//   title: `Base, Exponent, Result`,
//   content: `A power is an expression built from two components: a base and an exponent. The base is the number being acted on; the exponent dictates how. In the simplest case, the exponent counts repeated multiplications — but that interpretation covers only the starting point. Extending the exponent to zero, negative values, fractions, and irrational numbers requires progressively broader definitions, each consistent with the rules established at the natural-number level.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is a power in math?",
//     answer: "A power is an expression consisting of a base and an exponent, written a^n. The base is the number being multiplied, and the exponent controls how many times. For positive integer exponents, a^n means a multiplied by itself n times.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "Why does anything to the zero power equal one?",
//     answer: "The definition a^0 = 1 is forced by the quotient rule. Since a^m divided by a^m equals a^(m-m) = a^0, and any nonzero number divided by itself is 1, a^0 must equal 1. The pattern of dividing successive powers by the base also confirms this result.",
//     sectionId: "4"
//   },
//   obj3: {
//     question: "What does a negative exponent mean?",
//     answer: "A negative exponent produces the reciprocal of the positive power. The expression a^(-n) equals 1/a^n. This extends the descending pattern: each reduction of the exponent by one divides the result by the base.",
//     sectionId: "5"
//   },
//   obj4: {
//     question: "How do rational exponents connect to roots?",
//     answer: "A rational exponent m/n means take the nth root and raise to the mth power. The expression a^(m/n) equals the nth root of a^m, or equivalently the nth root of a raised to the m. This bridges exponent notation and radical notation.",
//     sectionId: "6"
//   },
//   obj5: {
//     question: "What are the main laws of exponents?",
//     answer: "The main laws are the product rule a^m times a^n equals a^(m+n), the quotient rule a^m divided by a^n equals a^(m-n), and the power-of-a-power rule (a^m)^n equals a^(mn). These hold for all exponent types: natural, zero, negative, rational, and irrational.",
//     sectionId: "8"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Powers and Exponents",
//     "description": "Learn powers and exponents: natural, zero, negative, rational, and irrational exponents. Master exponent laws, exponential equations, inequalities, and functions.",
//     "url": "https://www.learnmathclass.com/algebra/powers",
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
//       "name": "Powers and Exponents"
//     },
//     "teaches": [
//       "Power notation: base, exponent, and conventions",
//       "Natural, zero, negative, rational, and irrational exponents",
//       "Laws of exponents and domain restrictions",
//       "Rational exponents and their connection to roots",
//       "Exponential equations and inequalities",
//       "Exponential functions, growth, and decay"
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
//         "name": "Powers and Exponents",
//         "item": "https://www.learnmathclass.com/algebra/powers"
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
//       title: "Powers & Exponents: Rules and Types | Learn Math Class",
//       description: "Learn powers and exponents: natural, zero, negative, rational, and irrational exponents. Master exponent laws, exponential equations, inequalities, and functions.",
//       keywords: keyWords.join(", "),
//       url: "/algebra/powers",
//       name: "Powers and Exponents"
//     },
//   }
// }
//    }


//  export default function PowersAndExponentsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {  
    
//   const genericSections=[
//       {
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Powers</h1>
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
//     <KeyTermsCard
//            id="0"
//            title={sectionsContent.obj0.title}
//            content={sectionsContent.obj0.content}
//            after={sectionsContent.obj0.after}
//            variant="light"
//          />
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
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import powersTableDiagrams from '@/app/components/visualizations/algebra/powers/powersTableDiagrams'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import CaseSplit from '@/app/components/infographics/CaseSplit/CaseSplit'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import FormulaSheet from '@/app/components/infographics/FormulaSheet/FormulaSheet'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import NotationCheatSheet from '@/app/components/infographics/NotationCheatSheet/NotationCheatSheet'
import powersRootsLogsNotationSheet from '@/app/components/infographics/NotationCheatSheet/sheets/algebra-powers-roots-logarithms'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'


export async function getStaticProps(){
const keyWords = [
  'powers algebra',
  'exponents',
  'base and exponent',
  'laws of exponents',
  'negative exponents',
  'zero exponent',
  'rational exponents',
  'irrational exponents',
  'exponential equations',
  'exponential functions',
  'exponent rules',
  'exponential inequalities',
  'powers and roots connection',
  'exponent notation'
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

  // obj10 — comparison: base direction (a > 1 vs 0 < a < 1) determines function behavior and inequality direction
  const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Base condition</th>
      <th style="${tableHeaders.comparison}">Function behavior</th>
      <th style="${tableHeaders.comparison}">As x increases</th>
      <th style="${tableHeaders.comparison}">Inequality direction when solving</th>
      <th style="${tableHeaders.comparison}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a &gt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">output grows (×a each unit)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserved</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2&#x02E3; &gt; 8 &nbsp;⟹&nbsp; x &gt; 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">0 &lt; a &lt; 1</td>
      <td style="padding: 12px 15px; color: #34495e;">decreasing</td>
      <td style="padding: 12px 15px; color: #34495e;">output shrinks (÷ 1/a each unit)</td>
      <td style="padding: 12px 15px; color: #34495e;">reversed</td>
      <td style="padding: 12px 15px; color: #34495e;">(1/3)&#x02E3; ≤ 9 &nbsp;⟹&nbsp; x ≥ −2</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — comparison: polynomial vs exponential — base/exponent role swap
  const obj11Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Function type</th>
      <th style="${tableHeaders.comparison}">General form</th>
      <th style="${tableHeaders.comparison}">Base</th>
      <th style="${tableHeaders.comparison}">Exponent</th>
      <th style="${tableHeaders.comparison}">Example</th>
      <th style="${tableHeaders.comparison}">Growth signature</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/polynomials" style="${linkStyle}">Polynomial</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x&#x207F; (n fixed)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">variable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fixed constant</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">polynomial growth (∼ x&#x207F;)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/algebra/powers/exponential-functions" style="${linkStyle}">Exponential</a></td>
      <td style="padding: 12px 15px; color: #34495e;">a&#x02E3; (a &gt; 0 fixed)</td>
      <td style="padding: 12px 15px; color: #34495e;">fixed constant</td>
      <td style="padding: 12px 15px; color: #34495e;">variable</td>
      <td style="padding: 12px 15px; color: #34495e;">3&#x02E3;</td>
      <td style="padding: 12px 15px; color: #34495e;">exponential growth (a &gt; 1) or decay (0 &lt; a &lt; 1)</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — summary: capstone collecting the five exponent types
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Exponent type</th>
      <th style="${tableHeaders.summary}">Definition</th>
      <th style="${tableHeaders.summary}">Base restriction</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/powers/natural-exponents" style="${linkStyle}">Natural</a> &nbsp;(n ∈ ℤ⁺)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a&#x207F; = a · a · ⋯ · a &nbsp;(n factors)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any real a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3⁴ = 81</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/powers/zero-powers" style="${linkStyle}">Zero</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a⁰ = 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5⁰ = 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/powers/negative-exponents" style="${linkStyle}">Negative</a> &nbsp;(−n, n ∈ ℤ⁺)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a⁻&#x207F; = 1 / a&#x207F;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2⁻³ = 1/8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/powers/rational-exponents" style="${linkStyle}">Rational</a> &nbsp;(m/n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>m/n</sup> = &nbsp;<sup>n</sup>√(a<sup>m</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≥ 0 if n even; &nbsp;any real if n odd</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8<sup>2/3</sup> = 4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/algebra/powers/irrational-exponents" style="${linkStyle}">Irrational</a></td>
      <td style="padding: 12px 15px; color: #34495e;">a&#x02E3; = lim a&#x02B3; &nbsp;for rationals r → x</td>
      <td style="padding: 12px 15px; color: #34495e;">a &gt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">2<sup>π</sup> ≈ 8.825</td>
    </tr>
  </tbody>
</table>
`

// Concept introduction (section 1, "Definition and Terminology") — template
// I, naming. Running instance: 2 · 2 · 2 · 2 · 2 = 2^5 = 32, beside 3^4, 10^6
// and 4^3; picture: the powers table tool's frozen b10 state. Old obj1 text
// is kept in sectionsContent.obj1, unused; its formula box, pitfall aside and
// four passages are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciShortTable = ciTableOpen(['written out', 'how many factors', 'shorthand', 'value']) +
  ciRow(['2 · 2 · 2 · 2 · 2', 'five 2s', '2⁵', '32'], { color: '#2563EB', cols: [2] }) +
  ciRow(['3 · 3 · 3 · 3', 'four 3s', '3⁴', '81'], { shade: true, color: '#2563EB', cols: [2] }) +
  ciRow(['10 · 10 · 10 · 10 · 10 · 10', 'six 10s', '10⁶', '1,000,000'], { color: '#2563EB', cols: [2] }) +
  ciRow(['4 · 4 · 4', 'three 4s', '4³', '64'], { shade: true, last: true, color: '#2563EB', cols: [2] }) +
  '</tbody></table>'

const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Core Vocabulary
 
- [Power](!/algebra/definitions#power) — an expression $a^n$ consisting of a base raised to an exponent
- [Base (of a Power)](!/algebra/definitions#base_(of_a_power)) — the number $a$ being raised to a power
- [Exponent](!/algebra/definitions#exponent) — the number $n$ controlling how the base is used
 
## Exponent Types
 
- [Natural Exponent](!/algebra/definitions#natural_exponent) — positive integer: $a^n = a \\cdot a \\cdots a$ ($n$ times)
- [Zero Exponent](!/algebra/definitions#zero_exponent) — $a^0 = 1$ for $a \\neq 0$
- [Negative Exponent](!/algebra/definitions#negative_exponent) — $a^{-n} = 1/a^n$
- [Rational Exponent](!/algebra/definitions#rational_exponent) — $a^{m/n} = \\sqrt[n]{a^m}$
- [Irrational Exponent](!/algebra/definitions#irrational_exponent) — defined as a limit of rational approximations
 
## Laws
 
- [Product Rule (Exponents)](!/algebra/definitions#product_rule_(exponents)) — $a^m \\cdot a^n = a^{m+n}$
- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_(exponents)) — $a^m / a^n = a^{m-n}$
- [Power of a Power](!/algebra/definitions#power_of_a_power) — $(a^m)^n = a^{mn}$
- [Power of a Product](!/algebra/definitions#power_of_a_product) — $(ab)^n = a^n b^n$
- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient) — $(a/b)^n = a^n / b^n$
 
## Applications
 
- [Exponential Equation](!/algebra/definitions#exponential_equation) — variable in the exponent
- [Exponential Inequality](!/algebra/definitions#exponential_inequality) — direction depends on the base
- [Exponential Function](!/algebra/definitions#exponential_function) — $f(x) = a^x$ with fixed base, variable exponent`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},

  obj1: {
    title: `Definition and Terminology`,
    content: `The expression $a^n$ is called a power. The number $a$ is the base — the quantity being repeatedly multiplied. The number $n$ is the exponent — it controls how many times the base appears as a factor.

@academic[formula_callout:Definition and Terminology
$$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}$$]@

@academic[pitfall,aside:true,width:35%:Multiplying the base by the exponent
Reading $4^3$ as $4 \\cdot 3 = 12$ treats the exponent as a factor. The exponent counts factors: $4^3 = 4 \\cdot 4 \\cdot 4 = 64$.
[Read more](!#pitfall-multiplying-the-base-by-the-exponent)]@

This definition works when $n$ is a positive integer. The expression $2^5$ means $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Five factors of 2.

The word "power" refers to the entire expression, not just the exponent. Saying "$2^5$ is a power of 2" is correct. Saying "5 is the power" is imprecise — 5 is the exponent.

Two exponents have special names. The exponent 2 gives "squared": $a^2$ is "a squared." The exponent 3 gives "cubed": $a^3$ is "a cubed." All other exponents use the general form: $a^n$ is "a to the power of n" or "a to the nth."`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title:`Notation and Conventions`,
    lead:`Where an exponent attaches decides what gets raised — parentheses and stacking order are the whole grammar of a power. All are catalogued among the [algebra symbols](!/math-symbols/algebra).`,
    inherited:`$a^n$ itself and its reading come from [natural exponent notation](!/algebra/powers/natural-exponents#notation); negative and fractional exponents from [negative exponents](!/algebra/powers/negative-exponents#notation) and [rational exponents](!/algebra/powers/rational-exponents#notation).`,
    entries:[
      {
        id:'minus-unbracketed',
        tex:`$-2^2$`,
        read:`the negative of two squared`,
        means:`Without parentheses the exponent binds only to the symbol right before it: $-2^2 = -(2^2) = -4$. The minus sign is applied afterwards.`,
        confusedWith:`$(-2)^2$. Dropping the parentheses changes the answer from $4$ to $-4$.`,
      },
      {
        id:'minus-bracketed',
        tex:`$(-2)^2$`,
        read:`negative two, squared`,
        means:`The parentheses make $-2$ the base: $(-2)^2 = (-2) \\cdot (-2) = 4$.`,
      },
      {
        id:'stacked',
        tex:`$a^{2^3}$`,
        read:`a to the two cubed`,
        means:`Stacked exponents are read from the top down: $2^3 = 8$ is computed first, so $a^{2^3} = a^8$.`,
        confusedWith:`$(a^2)^3 = a^6$. The parenthesised form is a power of a power, whose rules are on the [exponent rules](!/algebra/powers/exponent-rules) page.`,
      },
    ],
    symbolsHref:`/math-symbols/algebra`,
    symbolsLabel:`All algebra symbols`,
    parentHref:`/algebra`,
    parentLabel:`Algebra`,
    content: `@academic[formula_callout:Notation and Conventions
$$-2^2 = -(2^2) = -4$$]@

@academic[formula_callout:Notation and Conventions
$$(-2)^2 = (-2) \\cdot (-2) = 4$$]@

@academic[formula_callout:Notation and Conventions
$$a^{2^3} = a^8$$]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Natural Exponents`,
    content: `When the exponent is a positive integer, the power is a product of repeated factors. The exponent simply counts how many copies of the base are multiplied together.

@academic[formula_callout:Natural Exponents
$$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$$]@

@academic[formula_callout:Natural Exponents
$$10^6 = 1{,}000{,}000$$]@

This is where the laws of exponents — the product rule, quotient rule, power-of-a-power rule — are first derived. Each law emerges naturally from counting and regrouping factors. Every extension of exponents to other types preserves these laws by definition.

The [natural exponents](!/algebra/powers/natural-exponents) page develops this case fully: the derivation of each law, worked examples, and the transition toward broader exponent types.

To evaluate any power directly, including decimal and negative exponents, use the [exponent calculator](!/calculators/exponent-calculator).`,
    before: ``,
    after: ``,
    link: '/algebra/powers/natural-exponents',
  },

  obj4: {
    title: `Zero as an Exponent`,
    content: `Repeated multiplication offers no interpretation for multiplying a base zero times. The definition $a^0 = 1$ (for $a \\neq 0$) is not arbitrary — it is forced by consistency with the quotient rule.

If $a^m / a^m = a^{m-m}$, then $a^0$ must equal 1, because any nonzero quantity divided by itself is 1.

A pattern argument reinforces this: $3^3 = 27$, $3^2 = 9$, $3^1 = 3$. Each step divides by 3. Continuing: $3^0 = 1$.

The case $0^0$ is genuinely ambiguous. Different conventions assign it the value 1 in combinatorics and leave it undefined in analysis. The [zero powers](!/algebra/powers/zero-powers) page addresses this case and the reasoning behind each convention.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/zero-powers',
  },

  obj5: {
    title: `Negative Exponents`,
    content: `A negative exponent produces the reciprocal of the corresponding positive power:

@academic[formula_callout:Negative Exponents
$$a^{-n} = \\frac{1}{a^n}, \\quad a \\neq 0$$]@

The definition extends the descending pattern below $a^0$. From $3^1 = 3$ and $3^0 = 1$, dividing by 3 once more gives $3^{-1} = 1/3$. Then $3^{-2} = 1/9$, $3^{-3} = 1/27$, and so on.

@academic[rule_plain:The base cannot be zero — $0^{-n}$ would require dividing by $0^n = 0$, which is undefined.]@

@academic[pitfall,aside:true,width:35%:Making the result negative
Reading $2^{-3}$ as $-2^3 = -8$ moves the minus sign onto the result. A negative exponent means a reciprocal: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$.
[Read more](!#pitfall-making-the-result-negative)]@

Evaluating a negative power takes two moves: compute the positive power, then take its reciprocal.

@academic[example:Example
For $5^{-2}$, the positive power is $5^2 = 25$, so $5^{-2} = \\frac{1}{25} = 0.04$.]@

Negative exponents rewrite fractions without denominators: $1/a^3 = a^{-3}$. This notational flexibility is essential when applying the laws of exponents. The [negative exponents](!/algebra/powers/negative-exponents) page covers the full treatment.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/negative-exponents',
  },

  obj6: {
    title: `Rational Exponents`,
    content: `When the exponent is a fraction $m/n$, the denominator indicates a root and the numerator indicates a power:

@academic[formula_callout:Rational Exponents
$$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$]@

This equivalence bridges exponents and [roots](!/algebra/roots).

@academic[example:Example
Computing $8^{2/3}$: the denominator 3 means cube root, the numerator 2 means square. So $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.]@

@academic[rule_plain:For even denominators, the base must be non-negative in real numbers — $(-4)^{1/2}$ has no real value. Odd denominators accept any real base.]@

Rational exponents provide a single framework for roots and powers. The [rational exponents](!/algebra/powers/rational-exponents) page develops the notation, the domain restrictions, and the connection to radical form.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/rational-exponents',
  },

  obj7: {
    title: `Irrational Exponents`,
    content: `An irrational exponent like $\\pi$ or $\\sqrt{2}$ cannot be expressed as a fraction, so the rational-exponent definition does not apply directly. Instead, $2^\\pi$ is defined as the limit of $2^r$ where rational values $r$ approach $\\pi$:

@academic[formula_callout:Irrational Exponents
$$2^3 = 8, \\quad 2^{3.1} \\approx 8.574, \\quad 2^{3.14} \\approx 8.815, \\quad 2^{3.1415} \\approx 8.824$$]@

The values converge, and the limit is $2^\\pi$.

@academic[fact,aside:true,width:35%:Hilbert asked what $2^{\\sqrt{2}}$ is
The limit gives $2^{\\sqrt{2}}$ a value at once, yet whether that value is rational was one of Hilbert's 23 open problems of 1900. It was settled only in the 1930s: $2^{\\sqrt{2}}$ is irrational, and even transcendental, a root of no polynomial with whole-number coefficients.]@

This construction requires the base to be positive. For $a > 0$, the function $a^x$ is continuous and the limit always exists. For $a < 0$, the sequence of rational approximations does not converge to a consistent real value. For $a = 0$, the limit exists only for positive exponents, and it is $0$.

The [irrational exponents](!/algebra/powers/irrational-exponents) page formalizes this limiting process and the domain restriction $a > 0$.

@academic[punchline:An irrational power is never computed by itself; it is the one value that powers at nearby rational exponents close in on.]@`,
    before: ``,
    after: ``,
    link: '/algebra/powers/irrational-exponents',
  },

  obj8: {
    title: `Laws of Exponents`,
    content: `@academic[rule_theorem_plain:A single set of rules governs all exponent types. The product rule $a^m \\cdot a^n = a^{m+n}$, the quotient rule $a^m / a^n = a^{m-n}$, the power-of-a-power rule $(a^m)^n = a^{mn}$, and the remaining laws hold whether the exponents are natural, zero, negative, rational, or irrational.]@

@academic[pitfall,aside:true,width:35%:Multiplying the exponents in a product
Writing $x^3 \\cdot x^4 = x^{12}$ multiplies the exponents, as for a power of a power. The product rule adds them: $x^3 \\cdot x^4 = x^{3+4} = x^7$.
[Read more](!#pitfall-multiplying-the-exponents-in-a-product)]@

These laws are first proved for natural exponents, where they follow from counting factors. The extensions to other exponent types are then defined so that the same laws remain valid — each new definition is chosen precisely to preserve these identities.

Domain restrictions tighten as the exponent type broadens. Natural exponents allow any base. Zero and negative exponents exclude $a = 0$. Rational exponents with even denominators require $a \\geq 0$. Irrational exponents require $a > 0$.

The [exponent rules](!/algebra/powers/exponent-rules) page collects every law with derivations, examples, and the full domain conditions.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/exponent-rules',
  },

  obj9: {
    title: `Exponential Equations`,
    content: `When the unknown appears in the exponent, the equation is exponential: $2^x = 16$, $3^{2x-1} = 27$, $5^x = 12$.

The simplest cases resolve by rewriting both sides with a common base. Since $16 = 2^4$, the equation $2^x = 16$ gives $x = 4$ directly by matching exponents.

When bases cannot be matched, [logarithms](!/algebra/logarithms) provide the tool. Taking the logarithm of both sides converts the exponent into a coefficient, making the unknown accessible through algebra.

The [exponential equations](!/algebra/powers/exponential-equations) page covers both techniques: base matching for exact solutions and logarithmic methods for the general case.

To solve a specific equation step by step, the [exponential equation solver](!/algebra/calculators/equations/exponential) tries base matching first and switches to logarithms when the bases cannot be matched.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/exponential-equations',
  },

  obj10: {
    title: `Exponential Inequalities`,
    content: `Inequalities involving powers require attention to the base. The expression $2^x > 8$ and $(1/3)^x \\leq 9$ are both exponential inequalities, but they behave differently.

@academic[rule_plain:When the base satisfies $a > 1$, the exponential function is increasing: larger exponents produce larger values. The inequality direction is preserved when applying logarithms.

When $0 < a < 1$, the function is decreasing: larger exponents produce smaller values. The inequality reverses when solving.]@

@academic[pitfall,aside:true,width:35%:Keeping the sign with a base below 1
Comparing exponents in $\\left(\\frac{1}{3}\\right)^x \\leq \\left(\\frac{1}{3}\\right)^{-2}$ with the sign kept gives $x \\leq -2$, which includes $x = -3$, where $\\left(\\frac{1}{3}\\right)^{-3} = 27 > 9$. With a base below $1$ the sign flips: $x \\geq -2$.
[Read more](!#pitfall-keeping-the-sign-with-a-base-below-1)]@

The example $\\left(\\frac{1}{3}\\right)^x \\leq 9$ from the start of this section shows where the base enters. Writing $9$ as a power of the base, $9 = \\left(\\frac{1}{3}\\right)^{-2}$, puts both sides over the same base $\\frac{1}{3}$. What remains is a comparison of the exponents $x$ and $-2$, and the base decides which way that comparison runs.

The [exponential inequalities](!/algebra/powers/exponential-inequalities) page develops the solving techniques and the role the base plays in determining direction.

The [exponential inequality solver](!/algebra/calculators/inequalities/exponential) applies these direction rules step by step to a specific inequality.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/exponential-inequalities',
  },

  obj11: {
    title: `Exponential Functions`,
    content: `When the base is a fixed positive number and the exponent varies, the power $a^x$ becomes a [function](!/functions) of $x$. This is the conceptual shift from computing individual powers to studying how powers change.

For $a > 1$, the function grows — each unit increase in $x$ multiplies the output by $a$. For $0 < a < 1$, the function decays.

@academic[rule_theorem_plain:The number $e \\approx 2.718$ occupies a central role: the function $e^x$ is its own derivative, making it foundational in calculus.]@

@academic[fact,aside:true,width:35%:$e^x$ never drops below $x^e$
For every $x > 0$, $e^x \\geq x^e$, with equality only at $x = e$, because $\\frac{\\ln x}{x}$ is largest at $x = e$. So $e^\\pi \\approx 23.14$ beats $\\pi^e \\approx 22.46$, while no other base manages this: $3^{2.9} \\approx 24.19$ is below $2.9^3 \\approx 24.39$.]@

Exponential functions are the counterpart of [polynomial functions](!/algebra/polynomials). In a polynomial, the base varies and the exponent is fixed ($x^3$). In an exponential function, the base is fixed and the exponent varies ($3^x$). The behaviors are fundamentally different.

The [exponential functions](!/algebra/powers/exponential-functions) page covers graphs, transformations, growth and decay models, and the role of $e$.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/exponential-functions',
  },

  obj12: {
    title: `Summary of Exponent Types`,
    content: `This summary collects the five kinds of exponent from the page on one set of cards, from the narrowest definition to the broadest. Each card gives the kind of exponent, its definition, an example, with a line on what the definition means and a link to the section that explains it. A badge on each card states which bases the definition allows.

Natural exponents count repeated factors and work for any base. Zero and negative exponents are defined so the laws of exponents keep working, and both rule out a zero base. Rational exponents bring in roots, so an even root needs a base that is not negative, and irrational exponents are reached as limits of rational ones, which needs a positive base.`,
    formulaSheetAfter: `Each new kind of exponent keeps the same laws and asks a little more of the base. Before using a law with a given exponent, check its card: a base that suits natural exponents can still fail for a zero, negative, rational or irrational exponent.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Common Pitfalls`,
    content: `Four mistakes come up again and again when working with powers. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.`,
    before: ``,
    after: `Three of the four slips misread what an exponent does: it counts factors of the base, so $4^3$ is three fours multiplied together; for a positive base a negative exponent gives a reciprocal, never a negative number; and in a product the factors are counted together, so the exponents add. The fourth forgets that a base between $0$ and $1$ reverses the direction of an inequality. Writing a small power out as repeated multiplication, or trying a single value, exposes every one of them.`,
    link: '',
  },

}

const introContent = {
  id: 'intro',
  title: `Base, Exponent, Result`,
  content: `A power is an expression built from two components: a base and an exponent. The base is the number being acted on; the exponent dictates how. In the simplest case, the exponent counts repeated multiplications — but that interpretation covers only the starting point. Extending the exponent to zero, negative values, fractions, and irrational numbers requires progressively broader definitions, each consistent with the rules established at the natural-number level.`,
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Powers and Exponents",
    "description": "Learn powers and exponents: natural, zero, negative, rational, and irrational exponents. Master exponent laws, exponential equations, inequalities, and functions.",
    "url": "https://www.learnmathclass.com/algebra/powers",
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
      "name": "Powers and Exponents"
    },
    "teaches": [
      "Power notation: base, exponent, and conventions",
      "Natural, zero, negative, rational, and irrational exponents",
      "Laws of exponents and domain restrictions",
      "Rational exponents and their connection to roots",
      "Exponential equations and inequalities",
      "Exponential functions, growth, and decay"
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
        "name": "Powers and Exponents",
        "item": "https://www.learnmathclass.com/algebra/powers"
      }
    ]
  },
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpPowerPattern = { kind: 'pieces', svgTitle: 'Powers of 3 from 3^3 down to 3^-2: each step left divides by 3', xRange: [-2.5, 3.5], yRange: [-2, 28], yStep: 4,
    pieces: [{ fn: (x) => 3 ** x, from: -2.5, to: 3.1, ends: [null, null], color: 'f' }],
    points: [{ x: 3, y: 27, label: '3³ = 27', pos: 'w' }, { x: 2, y: 9, label: '3² = 9', pos: 'w' }, { x: 1, y: 3, label: '3¹ = 3', pos: 'nw' },
      { x: 0, y: 1, label: '3⁰ = 1', pos: 'nw' }, { x: -1, y: 1 / 3, label: '3⁻¹ = 1/3', pos: 'nw' }, { x: -2, y: 1 / 9, label: '3⁻² = 1/9', pos: 'nw' }],
    notes: [{ x: -2.3, y: 22, text: 'each step to the left divides by 3', pos: 'e', color: 'r' }],
    caption: '3⁰ = 1 and 3⁻ⁿ = 1/3ⁿ continue the same divide-by-3 pattern' };

  const conceptIntroFigures = {
    shortTable: ciShortTable,
    tens: powersTableDiagrams['b10'],
  };

  const demoUnits = {
    natural: demoUnitFrame({
      svg: powersTableDiagrams['b2-default'],
      caption: 'Powers of 2 from 2&#8304; to 2&#185;&#8304;',
      text: 'Each row multiplies the previous one by the base: 2, 4, 8, 16, &#8230;, and the expression column writes the repeated factors out, 2 &#215; 2 &#215; 2 for 2&#179;. The exponent counts the factors, which is the natural-exponent definition made into a table. Change the base and watch the column grow on the',
      href: '/algebra/visual-tools/powers-table',
      linkText: 'powers table',
    }),
    pattern: demoUnitFrame({
      svg: renderFunctionPlotV4(fpPowerPattern),
      caption: 'The pattern that forces a&#8304; = 1',
      text: 'The section\'s powers of 3 as points on y = 3&#739;. Moving one step left always divides by 3: 27, 9, 3. One more step gives 3 &#247; 3 = 1, so 3&#8304; must be 1; continuing gives 1/3 and 1/9, which is exactly 3&#8315;&#185; and 3&#8315;&#178;. The curve never reaches 0, because dividing a positive number by 3 never gives 0.',
    }),
  };

  const exponentTypeCases = {
    prefaceTitle: 'One set of laws, tighter bases',
    preface: 'The product, quotient and power-of-a-power rules hold for every exponent type. What changes is which bases are allowed: the restrictions tighten as the exponent type broadens.',
    conclusionTitle: 'Takeaway',
    conclusion: 'Each new exponent type is defined so that the same laws stay valid. The [exponent rules](!/algebra/powers/exponent-rules) page has every law with its full domain conditions.',
    parent: {
      kicker: 'Laws of exponents',
      formula: '$a^m \\cdot a^n = a^{m+n}$',
      splitBy: 'the type of exponent',
    },
    cases: [
      {
        id: 'natural', condition: 'natural',
        count: { n: 'ℝ' },
        headline: 'Any base',
      },
      {
        id: 'zero-neg', condition: 'zero or negative',
        count: { n: '≠0' },
        headline: 'Excludes $a = 0$',
      },
      {
        id: 'rational', condition: 'rational, even denominator',
        count: { n: '≥0' },
        headline: 'Requires $a \\geq 0$',
      },
      {
        id: 'irrational', condition: 'irrational',
        count: { n: '>0' },
        headline: 'Requires $a > 0$',
      },
    ],
  };

  // FAQ pass 2026-11-01: new FAQ section (the page had none). Overview-only
  // questions: power versus exponent (Definition and Terminology), how
  // non-counting exponents get a meaning (end of the definition section and
  // Laws of Exponents), and the polynomial-versus-exponential table and the
  // e^x versus x^e fact box (both under Exponential Functions).
  const faqQuestions = {
    obj1: {
      question: "Is the exponent the same thing as the power?",
      answer: "No. The power is the whole expression $a^n$; the exponent is only the raised number $n$ that counts the factors. So $2^5$ is a power of $2$, and $5$ is its exponent. Calling $5$ the power is a common but imprecise shortcut. The base $a$ is the factor being repeated, and the two exponents with their own names are $2$, read squared, and $3$, read cubed.",
      sectionId: "1"
    },
    obj2: {
      question: "How can an exponent be zero, negative or a fraction if it counts factors?",
      answer: "Counting only works for positive whole numbers, so the other exponents are defined, one type at a time, in the one way that keeps the laws of exponents true. The quotient rule forces $2^0 = \\frac{2^3}{2^3} = 1$; continuing the pattern of dividing by $2$ gives $2^{-1} = \\frac{1}{2}$; and $2^{1/2}$ is $\\sqrt{2}$, because the power rule makes its square $\\left(2^{1/2}\\right)^2 = 2^1 = 2$. Each extension tightens the allowed bases, ending with $a > 0$ for irrational exponents.",
      sectionId: "8"
    },
    obj3: {
      question: "What is the difference between $x^3$ and $3^x$?",
      answer: "In $x^3$ the base varies and the exponent is fixed, which makes it a polynomial; in $3^x$ the base is fixed and the exponent varies, which makes it an exponential function. Each step of $1$ in $x$ multiplies $3^x$ by $3$, while $x^3$ grows by a factor that keeps shrinking toward $1$. Both equal $27$ at $x = 3$, but at $x = 10$, $x^3 = 1000$ while $3^x = 59{,}049$.",
      sectionId: "11"
    },
    obj4: {
      question: "Which is bigger, $e^{\\pi}$ or $\\pi^e$?",
      answer: "$e^{\\pi} \\approx 23.14$ is bigger than $\\pi^e \\approx 22.46$. This is no accident: for every $x > 0$, $e^x \\geq x^e$, with equality only at $x = e$, because $\\frac{\\ln x}{x}$ is largest at $x = e$. No other base has this property; with $3$ instead of $e$, $3^{2.9} \\approx 24.19$ is smaller than $2.9^3 \\approx 24.39$.",
      sectionId: "11"
    }
  }

  // MistakeFix batch 3, 2026-11-01: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj13 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'multiplying-the-base-by-the-exponent', name: `Multiplying the base by the exponent`, errorAt: 1,
        what: `A power with a natural exponent is evaluated by multiplying the base by the exponent, as if $a^n$ meant $a \\cdot n$.`,
        wrong: [`$$4^3$$`, `$$= 4 \\cdot 3 = 12$$`],
        right: [`$$4^3$$`, `The exponent counts how many factors of the base are multiplied together.
$$= 4 \\cdot 4 \\cdot 4 = 16 \\cdot 4 = 64$$`],
        why: `The base and the exponent are two visible numbers, and multiplying them is the first operation that comes to mind. For $2^2$ the wrong rule even gives the right answer, $2 \\cdot 2 = 4$, which hides the slip.`,
        check: `Estimate the size. $4^3$ starts with $4 \\cdot 4 = 16$, which is already larger than $12$.` },
      { id: 'making-the-result-negative', name: `Making the result negative`, errorAt: 1,
        what: `The minus sign in the exponent is moved onto the value, so a negative exponent is read as a negative result.`,
        wrong: [`$$2^{-3}$$`, `$$= -2^3 = -8$$`],
        right: [`$$2^{-3}$$`, `A negative exponent gives the reciprocal of the positive power.
$$= \\frac{1}{2^3} = \\frac{1}{8}$$`],
        why: `Everywhere else a minus sign in front of a number makes it negative, and that reading is carried into the exponent. In the exponent, the minus sign means dividing by the base instead of multiplying by it.`,
        check: `A positive base raised to any power gives a positive value, so a negative result for $2^{-3}$ is impossible. The pattern confirms the right value: $2^0 = 1$, and each step down divides by $2$, giving $2^{-1} = \\frac{1}{2}$, $2^{-2} = \\frac{1}{4}$, $2^{-3} = \\frac{1}{8}$.` },
      { id: 'multiplying-the-exponents-in-a-product', name: `Multiplying the exponents in a product`, errorAt: 1,
        what: `Two powers of the same base are multiplied, and their exponents are multiplied too, mixing up the product rule with the power-of-a-power rule.`,
        wrong: [`$$x^3 \\cdot x^4$$`, `$$= x^{3 \\cdot 4} = x^{12}$$`],
        right: [`$$x^3 \\cdot x^4$$`, `Count the factors. $x^3 \\cdot x^4 = (x \\cdot x \\cdot x)(x \\cdot x \\cdot x \\cdot x)$ has seven factors of $x$.
$$= x^{3+4} = x^7$$`, `Multiplying the exponents belongs to a power raised to a power: $(x^3)^4 = x^{12}$.`],
        why: `Both rules turn two exponents into one, and a product of powers seems to call for a product of exponents.`,
        check: `Substitute $x = 2$. Then $2^3 \\cdot 2^4 = 8 \\cdot 16 = 128 = 2^7$, while $2^{12} = 4096$.` },
      { id: 'keeping-the-sign-with-a-base-below-1', name: `Keeping the sign with a base below 1`, errorAt: 2,
        what: `The base lies between $0$ and $1$, but the exponents are compared exactly as for a base greater than $1$, so the inequality sign is kept.`,
        wrong: [`$$\\left(\\frac{1}{3}\\right)^x \\leq 9$$`, `$$\\implies \\left(\\frac{1}{3}\\right)^x \\leq \\left(\\frac{1}{3}\\right)^{-2}$$`, `$$\\implies x \\leq -2$$`],
        right: [`$$\\left(\\frac{1}{3}\\right)^x \\leq 9$$`, `$$\\implies \\left(\\frac{1}{3}\\right)^x \\leq \\left(\\frac{1}{3}\\right)^{-2}$$`, `$\\left(\\frac{1}{3}\\right)^x$ is decreasing, so larger exponents give smaller values, and the sign flips when the exponents are compared.`, `$$\\left(\\frac{1}{3}\\right)^x \\leq \\left(\\frac{1}{3}\\right)^{-2}$$`, `$$\\implies x \\geq -2$$`],
        why: `Matching exponents is first learned with bases like $2$ or $10$, where the sign stays, and the step is repeated without a look at the base.`,
        check: `Test one value from the answer. $x = -3$ lies in the wrong answer and gives $\\left(\\frac{1}{3}\\right)^{-3} = 27$, which is not at most $9$. A value from the right answer, $x = 0$, gives $\\left(\\frac{1}{3}\\right)^0 = 1 \\leq 9$.` },
    ],
  };

  // Formula Summary 2026-11-06: replaces the summary table summaryTable, same rows.
  const formulaSummaryData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    items: [
      { name: 'Natural exponent', formula: '$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}$', example: '$3^4 = 81$', restriction: 'any real $a$',
        text: 'For a positive whole number $n$, the exponent counts the copies of the base being multiplied, as [natural exponents](!#3) shows.' },
      { name: 'Zero exponent', formula: '$a^0 = 1$', example: '$5^0 = 1$', restriction: '$a \\neq 0$',
        text: 'Forced by the quotient rule, since a nonzero number divided by itself is 1, as [zero as an exponent](!#4) explains.' },
      { name: 'Negative exponent', formula: '$\\displaystyle a^{-n} = \\frac{1}{a^n}$', example: '$\\displaystyle 2^{-3} = \\frac{1}{8}$', restriction: '$a \\neq 0$',
        text: 'For a positive whole number $n$, the exponent $-n$ gives the reciprocal of the positive power, from [negative exponents](!#5).' },
      { name: 'Rational exponent', formula: '$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$', example: '$8^{2/3} = 4$', restriction: '$a \\geq 0$ if $n$ is even; any real $a$ if $n$ is odd',
        text: 'For a fraction $m/n$, the denominator is a root and the numerator a power, as [rational exponents](!#6) explains.' },
      { name: 'Irrational exponent', formula: '$\\displaystyle a^x = \\lim_{r \\to x} a^r$', example: '$2^{\\pi} \\approx 8.825$', restriction: '$a > 0$',
        text: 'The limit runs over rational exponents $r$ that approach $x$, as [irrational exponents](!#7) shows for $2^{\\pi}$.' },
    ],
  };

   return {
  props: {
    formulaSummaryData,
    pitfallData,
    faqQuestions,
    exponentTypeCases,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj10Table,
    obj11Table,
    summaryTable,
    schemas,
    seoData: {
      title: "Powers & Exponents: Rules and Types | Learn Math Class",
      description: "Learn powers and exponents: natural, zero, negative, rational, and irrational exponents. Master exponent laws, exponential equations, inequalities, and functions.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers",
      name: "Powers and Exponents"
    },
  }
}
   }


 const figureTheme = { title: '#06357A', parentBg: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function PowersAndExponentsPage({ formulaSummaryData, pitfallData,faqQuestions, exponentTypeCases,seoData, sectionsContent, introContent, obj10Table, obj11Table, summaryTable, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template I (naming).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Some products repeat one factor again and again: 2 · 2 · 2 · 2 · 2, or six 10s multiplied together.`,
        content: [
          `Written out, such products are long and easy to miscount. Repeated addition already has a shorthand — $2 + 2 + 2 + 2 + 2 = 5 \\cdot 2$ — and repeated multiplication needs one too.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Writing the factor once, with the count as a small raised number, shrinks every one of them.`,
        content: [
          ciTable('shortTable'),
          `For base $10$ the count is simply the number of zeros. Other bases can be tried in the [powers table](!/algebra/visual-tools/powers-table).`,
        ],
        visual: ciSvg('tens'),
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [power](!/algebra/definitions#power) $a^n$ is the product of $n$ factors, each equal to $a$; $a$ is the base and $n$ is the [exponent](!/algebra/definitions#exponent).`,
        formula: [
          `The expression $a^n$ is called a power. The number $a$ is the base — the quantity being repeatedly multiplied. The number $n$ is the exponent — it controls how many times the base appears as a factor.`,
          `@academic[formula_callout:Definition and Terminology
$$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}$$]@`,
          `This definition works when $n$ is a positive integer. The expression $2^5$ means $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Five factors of 2.`,
        ],
        footer: `So $2^5 = 32$, $3^4 = 81$, $10^6 = 1{,}000{,}000$ and $4^3 = 64$.`,
      },
      {
        id: 'kind',
        lead: `"Power" names the whole expression; the exponent is only the count.`,
        content: [
          `The word "power" refers to the entire expression, not just the exponent. Saying "$2^5$ is a power of 2" is correct. Saying "5 is the power" is imprecise — 5 is the exponent.`,
          `Two exponents have special names. The exponent 2 gives "squared": $a^2$ is "a squared." The exponent 3 gives "cubed": $a^3$ is "a cubed." All other exponents use the general form: $a^n$ is "a to the power of n" or "a to the nth."`,
        ],
      },
      {
        id: 'caveat',
        lead: `The exponent counts factors, it is not a factor — and counting only works for positive whole numbers.`,
        content: [
          `@academic[pitfall,aside:true,width:35%:Multiplying the base by the exponent
Reading $4^3$ as $4 \\cdot 3 = 12$ treats the exponent as a factor. The exponent counts factors: $4^3 = 4 \\cdot 4 \\cdot 4 = 64$.
[Read more](!#pitfall-multiplying-the-base-by-the-exponent)]@`,
          `What $2^0$, $2^{-1}$ or $2^{1/2}$ should mean cannot be settled by counting. The page extends the definition one step at a time, starting with [zero as an exponent](!/algebra/powers#4).`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers notation, natural, zero, negative, rational and irrational exponents, the laws of exponents, exponential equations and inequalities, and exponential functions.`,
      },
    ],
  }
    
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
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          <NotationSection
            key={'notation-obj2'}
            title={sectionsContent.obj2.title}
            lead={sectionsContent.obj2.lead}
            inherited={sectionsContent.obj2.inherited}
            entries={sectionsContent.obj2.entries}
            symbolsHref={sectionsContent.obj2.symbolsHref}
            symbolsLabel={sectionsContent.obj2.symbolsLabel}
            parentHref={sectionsContent.obj2.parentHref}
            parentLabel={sectionsContent.obj2.parentLabel}
            theme={'navy'}
          />,
          <NotationCheatSheet
            key={'notation-sheet'}
            sheet={powersRootsLogsNotationSheet}
            current={'/algebra/powers'}
          />,
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
                  <div key={'unit-natural'} dangerouslySetInnerHTML={{ __html: demoUnits.natural }} />,
          `Every later exponent type is defined so that this table extends without breaking its pattern.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-pattern'} dangerouslySetInnerHTML={{ __html: demoUnits.pattern }} />,
          `The same pattern, continued below zero, is the definition of negative exponents in the next section.`,
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
          <DiagramFrame
            key={'obj8-diagram'}
            id="exponent-type-domain-cases"
            title="Laws of exponents: which bases each exponent type allows"
            source="/algebra/powers"
          >
            <CaseSplit data={exponentTypeCases} variant="poster" proseStyle="cards" theme={figureTheme} />
          </DiagramFrame>,
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

    // obj10: prose + base-direction comparison table
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div
            key={'obj10-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj10Table }}
          />,
        ]
    },

    // obj11: prose + polynomial-vs-exponential comparison table
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div
            key={'obj11-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj11Table }}
          />,
        ]
    },

    // obj12: NEW capstone with summary table
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <DiagramFrame
            key={'formula-summary'}
            id="exponent-type-formula-summary"
            title="Types of exponents"
            source="/algebra/powers"
            related={{ href: '/algebra/formulas', label: 'All algebra formulas' }}
            after={sectionsContent.obj12.formulaSheetAfter}
          >
            <FormulaSheet data={formulaSummaryData} variant="tiles" />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <DiagramFrame
            key={'obj13-mistakes'}
            id="power-pitfalls"
            title="Common pitfalls with powers"
            source="/algebra/powers"
            after={sectionsContent.obj13.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Powers FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Powers</h1>
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