

// import Head from 'next/head';
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import Sections from '@/app/components/page-components/section/Sections';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import FactoringCalculator from '@/app/components/calculators/algebra/FactoringCalculator';
// import '../../../pages.css';
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
// import ExplanationDetails from '@/app/components/ExplanationDetails';

// export async function getStaticProps() {

// const navigationGroup=[
//   {title:'Other Calculators',
//     items:[
//       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
//       {title:'Root Calculator',link:'/calculators/root-calculator'},
//       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
//       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
//       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
//       {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
//       // {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
//       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
//       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
//       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
//     ]
//   },
//   {
//    title:'Visual Tools',
//    items:[
//     {title:'FractionsVisualizer',link:'/visual-tools/fractions-visualizer'}
//    ]
//   }
// ]

// const detailInstructions = [
//   "Enter any whole number (positive or negative) in the input field",
//   "Select Prime Factoring to find prime factors only, or Complete Factoring to find all factors",
//   "Click Calculate Factors to see the results",
//   "View the factor list and factor pairs (for complete factoring)",
//   "Click Reset to clear and try a different number"
// ];
// const keyWords = [
//   'factoring calculator',
//   'prime factorization calculator',
//   'factor calculator',
//   'complete factoring',
//   'find factors',
//   'prime factors',
//   'factor pairs',
//   'number factoring',
//   'factorization tool',
//   'free factoring calculator',
//   'calculate factors online',
//   'factor number calculator',
//   'prime decomposition',
//   'math factoring tool',
//   'algebra factoring calculator'
// ];

// const sectionsContent = {
//   obj1: {
//     title: `Getting Started with the Factoring Calculator`,
//     content: `The factoring calculator has three main parts: a number input box at the top, two radio buttons for selecting the factoring type, and Calculate/Reset buttons at the bottom. Start by clicking in the input box labeled "Enter a number to find its factors" and type any whole number you want to factor.

// The calculator accepts both positive and negative integers. Try entering simple numbers like $12$, $24$, or $50$ to see how factoring works. You can also enter larger numbers like $144$, $1000$, or even $999999$—the calculator handles them all instantly.

// After entering your number, select your factoring type using the radio buttons. **Prime Factoring** breaks your number down into prime number building blocks. **Complete Factoring** finds every number that divides evenly into your input. Each mode gives different information, so choose based on what you need to learn.

// Click the blue **Calculate Factors** button to see your results appear below. The calculator displays factors as a list, and for complete factoring, it also shows factor pairs in multiplication format. Use the **Reset** button anytime to clear everything and start fresh with a new number.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Using Prime Factoring Mode`,
//     content: `Select the **Prime Factoring** radio button to break your number into its prime building blocks. Prime factoring shows only the **prime numbers** that multiply together to create your input. For example, enter $12$ and click Calculate to see the prime factors: $2, 2, 3$.

// This means $12 = 2 \\times 2 \\times 3$. The calculator lists each prime factor separately, even if it appears multiple times. Try $18$ to get $2, 3, 3$ (because $18 = 2 \\times 3 \\times 3$), or $30$ to get $2, 3, 5$ (because $30 = 2 \\times 3 \\times 5$).

// Prime factoring works best when you need to find the **greatest common factor (GCF)** or **least common multiple (LCM)** of numbers, simplify radicals, or understand a number's fundamental structure. It's essential for algebra, number theory, and cryptography.

// For prime numbers themselves (like $7$, $13$, or $29$), the calculator returns only the number itself as the prime factor. That's because prime numbers cannot be broken down further—they're already in their simplest form. Try entering $17$ to see this in action.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Using Complete Factoring Mode`,
//     content: `Switch to the **Complete Factoring** radio button to find all numbers that divide evenly into your input. Complete factoring lists every factor from smallest to largest, including $1$ and the number itself. Enter $12$ and calculate to see all factors: $1, 2, 3, 4, 6, 12$.

// The complete factors list shows you every possible divisor. These are all the whole numbers that go into $12$ with no remainder. Try $24$ to get eight factors: $1, 2, 3, 4, 6, 8, 12, 24$. Or enter $36$ to find nine factors: $1, 2, 3, 4, 6, 9, 12, 18, 36$.

// Complete factoring helps when working with **divisibility**, **fractions** (finding common denominators), **arrays** (arranging items in rows and columns), or **area problems** (finding rectangle dimensions). It shows all possible ways to divide or group items.

// Perfect squares like $16$, $25$, or $36$ have an odd number of factors. This happens because one factor (the square root) pairs with itself. Enter $16$ to see factors $1, 2, 4, 8, 16$—notice how $4 \\times 4 = 16$ creates the middle factor.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Understanding Factor Pairs`,
//     content: `When you use Complete Factoring mode, the calculator displays factor pairs below the factors list. Factor pairs show two numbers that multiply together to equal your input. For $12$, you'll see: $1 \\times 12$, $2 \\times 6$, and $3 \\times 4$.

// Each pair represents a different way to arrange $12$ items into a rectangle. The pair $3 \\times 4$ means $3$ rows of $4$ items, or $4$ rows of $3$ items. Try $20$ to see factor pairs: $1 \\times 20$, $2 \\times 10$, and $4 \\times 5$—all different rectangular arrangements.

// Factor pairs are incredibly useful for **area calculations**. If a rectangle has area $24$ square meters, its dimensions could be $1 \\times 24$, $2 \\times 12$, $3 \\times 8$, or $4 \\times 6$. Enter $24$ to see all four possibilities instantly.

// The pairs always multiply to give your original number. Verify this by checking: does $3 \\times 4$ really equal $12$? Does $2 \\times 6$ equal $12$? Yes! This symmetry makes factor pairs perfect for checking your work and understanding multiplication relationships.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Working with Negative Numbers`,
//     content: `The calculator handles negative numbers by showing both positive and negative factors. Enter $-12$ in complete factoring mode to see factors: $-12, -6, -4, -3, -2, -1, 1, 2, 3, 4, 6, 12$. Notice you get twice as many factors—positive and negative versions of each.

// Negative factors work because multiplying two negatives gives a positive: $(-3) \\times (-4) = 12$. But you can also have one negative and one positive: $(-6) \\times 2 = -12$ or $3 \\times (-4) = -12$. The calculator lists all factors that divide evenly into your number.

// For prime factoring with negative numbers, you'll see an error message: "Cannot find prime factors of negative numbers." This is a mathematical convention—prime factorization is defined only for positive integers. If you need prime factors of a negative number, remove the negative sign first.

// Try $-20$ in complete factoring to see: $-20, -10, -5, -4, -2, -1, 1, 2, 4, 5, 10, 20$. The factor pairs would include combinations like $(-4) \\times 5$ and $(-2) \\times 10$, showing multiple ways to multiply to $-20$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Reading Results and Error Messages`,
//     content: `After clicking Calculate, your results appear in the results container below the buttons. For prime factoring, you'll see "The prime factors of [number] are:" followed by a list. For complete factoring, you'll see "The factors of [number] are:" followed by the list, then "The factor pairs are:" with multiplication expressions.

// The calculator validates your input before computing. If you leave the box empty or enter non-numeric characters like letters or symbols, you'll see the error "Please enter a valid number" in red text. Simply enter a whole number to clear the error.

// For negative numbers in prime factoring mode, the error "Cannot find prime factors of negative numbers" appears. This isn't a bug—it's mathematically correct. Switch to complete factoring mode or use the positive version of your number instead.

// Very large numbers may take a moment to calculate, especially for complete factoring. The calculator works efficiently but needs time to find all factors of numbers like $10000$ or larger. Be patient—the results will appear. After reviewing your results, click Reset to clear the display and try a different number.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `What Are Factors`,
//     content: `Factors are whole numbers that divide evenly into another number with no remainder. If $a \\times b = c$, then $a$ and $b$ are both factors of $c$. For example, since $3 \\times 4 = 12$, both $3$ and $4$ are factors of $12$.

// Think of factors as building blocks. The number $12$ can be built by multiplying $1 \\times 12$, $2 \\times 6$, or $3 \\times 4$. Each of these numbers—$1, 2, 3, 4, 6, 12$—is a factor of $12$. Every number has at least two factors: $1$ and itself.

// Factors are different from **multiples**. Multiples are what you get when you multiply a number: multiples of $3$ are $3, 6, 9, 12, 15...$. Factors go the other direction: factors of $12$ are the numbers you multiply to get $12$.

// For more detailed explanations of factor properties, prime numbers, and divisibility rules, see **number theory fundamentals** and **divisibility concepts**.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Prime Factoring vs Complete Factoring`,
//     content: `**Prime factoring** breaks a number into prime number building blocks. Prime factors are the smallest possible factors (except $1$). The number $12$ has prime factors $2, 2, 3$ because $2 \\times 2 \\times 3 = 12$, and you cannot break it down further.

// **Complete factoring** finds all numbers that divide evenly into your input, not just primes. For $12$, complete factors are $1, 2, 3, 4, 6, 12$. This includes composite numbers (like $4$ and $6$) that can themselves be factored further.

// Use prime factoring when simplifying **radicals** ($\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$), finding **GCF** or **LCM**, or working with **fractions**. Use complete factoring when finding **divisors**, calculating **area dimensions**, or solving **divisibility problems**.

// Prime factoring is unique—every number has exactly one prime factorization (ignoring order). Complete factoring gives you all possibilities. Both are valuable, just for different purposes. See **prime number theory** and **greatest common factor concepts** for deeper understanding.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `What Are Prime Numbers`,
//     content: `Prime numbers are whole numbers greater than $1$ that have exactly two factors: $1$ and themselves. The number $7$ is prime because only $1$ and $7$ divide evenly into it. You cannot create $7$ by multiplying two smaller whole numbers (other than $1 \\times 7$).

// The first few prime numbers are: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29...$. Notice that $2$ is the only even prime—all other even numbers are divisible by $2$, so they have at least three factors ($1$, $2$, and themselves).

// Numbers that aren't prime are called **composite numbers**. The number $12$ is composite because it has many factors: $1, 2, 3, 4, 6, 12$. Composite numbers can be broken down into prime factors: $12 = 2 \\times 2 \\times 3$.

// The number $1$ is special—it's neither prime nor composite. By definition, primes must have exactly two factors, but $1$ has only one factor (itself). For comprehensive coverage of prime numbers, see **prime number theory** and **prime number lists**.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// //   obj10: {
// //     title: `Related Calculators and Concepts`,
// //     content: `**Greatest Common Factor (GCF) Calculator** - Find the largest factor shared by two or more numbers. Use prime factorization from this calculator to help identify common factors. Essential for simplifying fractions and solving algebraic problems.

// // **Least Common Multiple (LCM) Calculator** - Find the smallest number that's a multiple of two or more numbers. Works hand-in-hand with factoring to solve fraction addition problems and pattern recognition.

// // **Prime Number Checker** - Quickly verify whether a number is prime or composite. Use this before factoring to understand if your number can be broken down or if it's already in simplest form.

// // **Divisibility Calculator** - Test if one number divides evenly into another. Complements complete factoring by checking specific divisibility rules for numbers like $2, 3, 5, 9$, and $10$.

// // **Polynomial Factoring Tools** - Extend factoring concepts to algebraic expressions. After mastering number factoring, apply similar techniques to expressions like $x^2 - 5x + 6$.

// // For theoretical background, explore **number theory fundamentals**, **divisibility rules**, **prime factorization applications**, and **factor trees** for visual factoring methods.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// };

// const faqQuestions = {
//   obj1: {
//     question: "What is factoring and how does this calculator work?",
//     answer: "Factoring is the process of breaking a number down into the whole numbers that multiply together to create it. This calculator offers two modes: Prime Factoring (which finds only prime number factors) and Complete Factoring (which finds all factors including factor pairs). Simply enter any whole number, select your mode, and click Calculate to see instant results."
//   },
//   obj2: {
//     question: "What's the difference between prime and complete factoring?",
//     answer: "Prime factoring breaks a number into prime number building blocks only. For example, 12 becomes 2, 2, 3. Complete factoring finds ALL numbers that divide evenly into your input. For 12, that's 1, 2, 3, 4, 6, 12. Use prime factoring for GCF/LCM and radical simplification. Use complete factoring for divisibility and finding all possible factor pairs."
//   },
//   obj3: {
//     question: "Can I factor negative numbers?",
//     answer: "Yes, but only in Complete Factoring mode. The calculator will show both positive and negative factors. For example, -12 has factors: -12, -6, -4, -3, -2, -1, 1, 2, 3, 4, 6, 12. Prime factoring doesn't work with negative numbers because prime factorization is mathematically defined only for positive integers."
//   },
//   obj4: {
//     question: "What are factor pairs and why are they useful?",
//     answer: "Factor pairs are two numbers that multiply together to equal your input number. For 24, the pairs are 1×24, 2×12, 3×8, and 4×6. They're useful for area calculations (finding rectangle dimensions), understanding multiplication relationships, and solving problems that require arranging items into equal groups or rows."
//   },
//   obj5: {
//     question: "How do I use factoring in real math problems?",
//     answer: "Factoring is essential for simplifying fractions (find common factors), solving algebraic equations (factor polynomials), working with radicals (simplify square roots using prime factors), finding GCF and LCM, understanding divisibility, and calculating areas with rectangular dimensions. It's a foundational skill for algebra, number theory, and higher mathematics."
//   }
// };

// const schemas = {
//   webApplication: {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     "name": "Factoring Calculator - Prime and Complete Factorization",
//     "description": "Free online factoring calculator for finding prime factors and complete factors of any number. Instantly calculate all factors and factor pairs with step-by-step results.",
//     "url": "https://www.learnmathclass.com/algebra/calculators/factoring",
//     "applicationCategory": "EducationalApplication",
//     "operatingSystem": "Any",
//     "offers": {
//       "@type": "Offer",
//       "price": "0",
//       "priceCurrency": "USD"
//     },
//     "featureList": [
//       "Prime factorization - break numbers into prime building blocks",
//       "Complete factorization - find all factors of any number",
//       "Factor pairs display in multiplication format",
//       "Support for positive and negative integers",
//       "Instant calculation for numbers of any size",
//       "Clear results display with organized lists",
//       "Reset functionality for quick recalculation"
//     ],
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString(),
//     "inLanguage": "en-US",
//     "isAccessibleForFree": true,
//     "learningResourceType": "Interactive Tool",
//     "educationalLevel": "Elementary School, Middle School, High School",
//     "keywords": keyWords.join(", ")
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
//         "name": "Calculators",
//         "item": "https://www.learnmathclass.com/calculators"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Factoring Calculator",
//         "item": "https://www.learnmathclass.com/algebra/calculators/factoring"
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
// };

// const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// };

// return {
//   props: {
//     sectionsContent,
//     introContent,
//     navigationGroup,
//     faqQuestions,
//     schemas,
//     detailInstructions,
//     seoData: {
//       title: "Factoring Calculator | Find Prime & Complete Factors",
//       description: "Free factoring calculator finds prime factors and complete factors of any number instantly. Calculate factor pairs and break down numbers step-by-step online.",
//       keywords: keyWords.join(", "),
//       url: "/algebra/calculators/factoring",
//       name: "Factoring Calculator - Prime and Complete Factorization Tool"
//     },
//   },
//   revalidate: 86400
// };
// }

// export default function FactoringCalculatorPage({seoData, sectionsContent, introContent, 
//   navigationGroup, faqQuestions, schemas,detailInstructions}) {

// const genericSections = Object.keys(sectionsContent).map((key, index) => ({
//   id: `${index + 1}`,
//   title: sectionsContent[key].title,
//   link: sectionsContent[key].link,
//   content: [sectionsContent[key].content]
// }));

// return (
//   <>
//     <Head>
//       <title>{seoData.title}</title>
//       <meta name="description" content={seoData.description} />
//       <meta name="keywords" content={seoData.keywords} />
//       <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
      
//       <meta property="og:title" content={seoData.title} />
//       <meta property="og:description" content={seoData.description} />
//       <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//       <meta property="og:type" content="website" />
//       <meta property="og:site_name" content="Learn Math Class" />
      
//       <meta name="twitter:card" content="summary" />
//       <meta name="twitter:title" content={seoData.title} />
//       <meta name="twitter:description" content={seoData.description} />
      
//       <meta name="robots" content="index, follow" />
      
//       <script 
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
//       />
      
//       <script 
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
//       />
      
//       <script 
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
//       />
//     </Head>

//     <style jsx>{`
//       @media (max-width: 1024px) {
//         .layout-container > div:first-child,
//         .layout-container > div:first-child *,
//         :global([class*="vertical"]),
//         :global([class*="vertical"]) * {
//           position: static !important;
//         }
//       }
      
//       .layout-container {
//         display: grid;
//         grid-template-columns: 250px 1fr;
//         gap: 20px;
//         width: 100%;
//       }
      
//       @media (max-width: 1024px) {
//         .layout-container {
//           grid-template-columns: 1fr;
//         }
//       }
//     `}</style>

//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//     <OperaSidebar
//       side='right'
//       sidebarWidth='45px'
//       panelWidth='300px'
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'
//     />
    
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Factoring Calculator</h1>
//     <br/>
//    {/* <div style={{marginBottom:'60px'}}>
//       <ExplanationDetails 
//         instructions={detailInstructions}
//         title='How to use Factoring Calculator'
//       />
//     </div> */}
//     <div className="layout-container"> 
//       <div style={{marginTop:'-30px',marginLeft:'5px'}}>
//         <br/>
//         <VerticalButtonGroup 
//           items={navigationGroup}
//           width="250px"       
//           theme='brilliantBlue'
//           isSticky={true}
//           verticalOffset='250px'
//         />
//       </div>

//       <div>
//         <div style={{width:'95%',transform:'scale(0.95)'}}>
//           <FactoringCalculator />
//           <br/>
//         </div>
//       </div>
//     </div>
    
//     <br/>
//     <br/>
//     <SectionTableOfContents sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Sections sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//   </>
// );
// }



import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import FactoringCalculator from '@/app/components/calculators/algebra/FactoringCalculator';
import '../../../pages.css';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer';
import { processContent } from '@/app/utils/contentProcessor';

/* calculators-mesh: finished 2026-10-16 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/algebra/calculators/factoring" in calculators-mesh-registry.json (same folder): 10 usage sections, each with a demo; 11 panel notes; 23 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export async function getStaticProps() {

const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      // {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  },
  {
   title:'Visual Tools',
   items:[
    {title:'FractionsVisualizer',link:'/visual-tools/fractions-visualizer'}
   ]
  }
]

const detailInstructions = [
  `Pick a tab at the top of the card: **Factor** for one number, **Laws** for a factoring pattern, **GCD & LCM** for two numbers. [Learn more about the three tabs](!#getting-started-with-the-factoring-calculator)`,
  `In Factor, type a whole number in the **Number** box or click a chip; the factorization appears at once, no Calculate button. [Learn more about prime factoring](!#using-prime-factoring-mode)`,
  `Pick a **View**: **Prime** for the prime factorization, **Complete** for every divisor and the factor pairs, **Tree** for the factor tree. [Learn more about the complete view](!#using-complete-factoring-mode)`,
  `Read the **Result** card: the factorization, the exponent form, the divisor count, the sum of divisors and the type; the copy icon copies a line. [Learn more about the results](!#reading-results-and-error-messages)`,
  `Click **Add to history** to keep a factorization in the Recent strip, **Reset** to return to 60 in the Prime view. [Learn more about history and Reset](!#reading-results-and-error-messages)`,
  `In Laws, pick a pattern, type **a** and **b**, and read the step-by-step expansion. [Learn more about the Laws tab](!#using-the-laws-tab)`,
  `In GCD & LCM, type **Number A** and **Number B** to see both prime factorizations, the GCD, the LCM and the coprime flag. [Learn more about the GCD and LCM tab](!#using-the-gcd-and-lcm-tab)`,
  `Read the **How this works** panel on the right and, in Factor, the **Nearby numbers** table under it. [Learn more about the panel](!#the-how-this-works-panel-and-the-nearby-numbers-table)`,
];
const keyWords = [
  'factoring calculator',
  'prime factorization calculator',
  'factor calculator',
  'complete factoring',
  'find factors',
  'prime factors',
  'factor pairs',
  'number factoring',
  'factorization tool',
  'free factoring calculator',
  'calculate factors online',
  'factor number calculator',
  'prime decomposition',
  'math factoring tool',
  'algebra factoring calculator'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Factoring Calculator`,
    content: `The calculator is one card with three tabs across the top. **Factor** works on a single whole number: it shows the prime factorization, every divisor or a factor tree, depending on the view you pick. **Laws** applies one of five factoring patterns, such as the difference of squares, to two numbers $a$ and $b$ and shows the steps. **GCD & LCM** takes two numbers and shows their prime factorizations, their greatest common divisor and their least common multiple. The Factor tab is open when the page loads, with $60$ already typed.

Every tab is live: there is no Calculate button, the result updates as you type or click. The left column holds the controls and the result; the right column holds the **How this works** panel, which explains the current view or pattern, and, in the Factor tab, a **Nearby numbers** table. Switching tabs keeps what you typed in the other tabs, so you can move between them freely. Start with the chips under the view buttons, for example $360$ or $1024$, to see a factorization without typing. What the three tabs have in common is explained in [What Are Factors](!#what-are-factors).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Prime Factoring Mode`,
    content: `Click **Prime** in the **View** row of the Factor tab (it is selected when the page loads) and type a whole number in the **Number** box, or click one of the chips: $12$, $24$, $60$, $100$, $120$, $360$, $720$, $1024$ and $1{,}000{,}000$. The line under the box shows the factorization at once, $60 = 2^{2} \\cdot 3 \\cdot 5$, and the **Result** card repeats it as **Prime factorization** and **Exponent form**, followed by the **Divisor count** $\\tau(n)$, the **Sum of divisors** $\\sigma(n)$ and the **Type**: perfect, abundant or deficient. For $360 = 2^{3} \\cdot 3^{2} \\cdot 5$ the card reads $\\tau = 24$, $\\sigma = 1{,}170$, abundant; for $1024 = 2^{10}$ it reads $\\tau = 11$, $\\sigma = 2{,}047$, deficient, plus the line **Perfect square** $\\sqrt{1024} = 32$.

A prime such as $17$ gives the line "17 is prime", the status **Prime**, the divisors $1$ and $17$ and the sum $18$. Click **Add to history** to keep the current factorization in the **Recent** strip under the card, which holds the last eight; clicking a chip adds its number there as well. **Reset** returns to $60$ in the Prime view. The rule behind the factorization is explained in [Prime Factorization](!#prime-factorization).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using Complete Factoring Mode`,
    content: `Click **Complete** in the **View** row to list every divisor of the number. The chips change to $16$, $24$, $36$, $48$, $60$ and $100$, and under the Result card a block **All divisors (prime ones highlighted, click to set)** appears: for $60$ the twelve divisors $1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60$, with $2$, $3$ and $5$ highlighted. Each divisor is a button: click $12$ and the calculator factors $12$ instead, so you can walk down a number through its divisors. Below the divisors the **Factor pairs** block lists every pair that multiplies to the number, $1 \\times 60$ up to $6 \\times 10$.

The Result card keeps showing the prime factorization, the divisor count and the sum of divisors in this view, so the count you read, $\\tau(60) = 12$, matches the number of buttons in the divisor block. For $36 = 2^{2} \\cdot 3^{2}$ there are nine divisors, $1, 2, 3, 4, 6, 9, 12, 18, 36$; an odd count is the mark of a perfect square, and the card adds the line $\\sqrt{36} = 6$. Negative numbers, $0$ and $1$ have no divisor block, since the list is only built for a positive composite number. How the count follows from the exponents is explained in [Complete Factoring and Divisor Counting](!#complete-factoring-and-divisor-counting).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Understanding Factor Pairs`,
    content: `In the **Complete** view, the **Factor pairs** block under the divisors shows two numbers that multiply to the number you typed. For $12$ it lists $1 \\times 12$, $2 \\times 6$ and $3 \\times 4$; for $24$ it lists $1 \\times 24$, $2 \\times 12$, $3 \\times 8$ and $4 \\times 6$; for $20$ it lists $1 \\times 20$, $2 \\times 10$ and $4 \\times 5$. Each pair is one way to arrange that many items in a rectangle: $3 \\times 4$ means three rows of four, or four rows of three.

The pairs are read off the divisor list: the smallest divisor goes with the largest, the second smallest with the second largest, and so on, which is why a number with twelve divisors has six pairs. A perfect square has a pair that repeats one number: $16$ gives $1 \\times 16$, $2 \\times 8$ and $4 \\times 4$. Factor pairs are the quickest way to answer area questions, such as which whole-number dimensions a rectangle of area $24$ can have, and to check a factorization by multiplying back. What a factor is, and why pairs always come in twos, is explained in [What Are Factors](!#what-are-factors).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Working with Negative Numbers`,
    content: `Type a minus sign before the number, for example $-12$, and the Factor tab pulls the sign out as a factor of $-1$: the line reads $-12 = -1 \\cdot 2^{2} \\cdot 3$, the Result card shows that **Prime factorization**, the **Exponent form** $-1 * 2^2 * 3$ and the note **Divisors (of |n| = 12)**, and the How this works panel opens a **Negative numbers** block explaining the convention. The divisor count, the sum of divisors and the type are not shown for a negative number, and the Complete and Tree views have no divisor block or tree for it; switch back to a positive number to see them.

This is the usual convention: prime factorization is defined for positive integers, and a negative integer is written as $-1$ times the factorization of its absolute value. The divisors of a negative number are the divisors of $|n|$ with both signs, so $-12$ has the same twelve divisors as $12$ once the signs are counted. Try $-60$ to get $-1 \\cdot 2^{2} \\cdot 3 \\cdot 5$, then type $60$ again. The rule is explained in [Prime Factorization](!#prime-factorization).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Reading Results and Error Messages`,
    content: `The **Result** card changes with the status of the number. For a composite number it lists the prime factorization, the exponent form, $\\tau(n)$, $\\sigma(n)$ and the type, with a copy icon on each line that copies that value; the icon turns into a tick for a moment after the click. For a prime it lists the status **Prime**, the two divisors and their sum. Special cases are named rather than refused: $0$ gives the status **Zero** with "every nonzero integer" as divisors, $1$ gives **1 (neither prime nor composite)** with one divisor, and an empty box gives **Waiting for input**. A number above one billion gives **Too large for this demo** and the line "Number too large for the demo (≤ 10⁹)"; letters are ignored, so the box waits for a number.

Under the card, **Neighbors (click to set)** shows the three numbers on either side of yours with a badge, "prime" or the divisor count, and clicking one factors it. **Add to history** keeps the current factorization in the **Recent** strip, which holds eight entries; **Reset** returns to $60$ in the Prime view without clearing the strip. Why $0$ and $1$ stand apart is explained in [What Are Prime Numbers](!#what-are-prime-numbers).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Factors`,
    content: `Factors are whole numbers that divide evenly into another number with no remainder. If $a \\times b = c$, then $a$ and $b$ are both factors of $c$. For example, since $3 \\times 4 = 12$, both $3$ and $4$ are factors of $12$.

Think of factors as building blocks. The number $12$ can be built by multiplying $1 \\times 12$, $2 \\times 6$, or $3 \\times 4$. Each of these numbers—$1, 2, 3, 4, 6, 12$—is a factor of $12$. Every number has at least two factors: $1$ and itself.

Factors are different from **multiples**. Multiples are what you get when you multiply a number: multiples of $3$ are $3, 6, 9, 12, 15...$. Factors go the other direction: factors of $12$ are the numbers you multiply to get $12$.

For more detailed explanations of factor properties, prime numbers, and divisibility rules, see [factors and multiples](!/arithmetic/divisibility#6) and [divisibility](!/arithmetic/divisibility#1).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Prime Factoring vs Complete Factoring`,
    content: `**Prime factoring** breaks a number into prime number building blocks. Prime factors are the smallest possible factors (except $1$). The number $12$ has prime factors $2, 2, 3$ because $2 \\times 2 \\times 3 = 12$, and you cannot break it down further.

**Complete factoring** finds all numbers that divide evenly into your input, not just primes. For $12$, complete factors are $1, 2, 3, 4, 6, 12$. This includes composite numbers (like $4$ and $6$) that can themselves be factored further.

Use prime factoring when simplifying **radicals** ($\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$), finding **GCF** or **LCM**, or working with **fractions**. Use complete factoring when finding **divisors**, calculating **area dimensions**, or solving **divisibility problems**.

Prime factoring is unique—every number has exactly one prime factorization (ignoring order). Complete factoring gives you all possibilities. Both are valuable, just for different purposes. See [prime numbers](!/algebra/sequences/prime-numbers#1) and [GCD and LCM](!/arithmetic/divisibility#9) for deeper understanding.

The Factor tab offers the three views as its three ways of factoring: [Prime Factorization](!#prime-factorization) for the Prime view, [Complete Factoring and Divisor Counting](!#complete-factoring-and-divisor-counting) for the Complete view and [Factor Trees](!#factor-trees) for the Tree view. All three rest on the same fact, the unique prime factorization taught in [Prime factorization](!/arithmetic/divisibility#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `What Are Prime Numbers`,
    content: `Prime numbers are whole numbers greater than $1$ that have exactly two factors: $1$ and themselves. The number $7$ is prime because only $1$ and $7$ divide evenly into it. You cannot create $7$ by multiplying two smaller whole numbers (other than $1 \\times 7$).

The first few prime numbers are: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29...$. Notice that $2$ is the only even prime—all other even numbers are divisible by $2$, so they have at least three factors ($1$, $2$, and themselves).

Numbers that aren't prime are called **composite numbers**. The number $12$ is composite because it has many factors: $1, 2, 3, 4, 6, 12$. Composite numbers can be broken down into prime factors: $12 = 2 \\times 2 \\times 3$.

The number $1$ is special—it's neither prime nor composite. By definition, primes must have exactly two factors, but $1$ has only one factor (itself). For comprehensive coverage of prime numbers, see [prime numbers](!/algebra/sequences/prime-numbers#1) and [the sieve of Eratosthenes](!/algebra/sequences/prime-numbers#3).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj20: {
    title: `Using the Factor Tree View`,
    content: `Click **Tree** in the **View** row to draw the factor tree of the number. The chips change to $12$, $18$, $24$, $36$, $60$ and $72$. The tree starts with the number at the top and splits it into its smallest prime factor and the remaining cofactor, then splits the cofactor the same way until only primes are left: $60$ becomes $2$ and $30$, $30$ becomes $2$ and $15$, $15$ becomes $3$ and $5$, so the leaves read $2, 2, 3, 5$ and the Result card confirms $60 = 2^{2} \\cdot 3 \\cdot 5$. For $72$ the tree has four levels: $72 \\to 2 \\cdot 36 \\to 2 \\cdot 18 \\to 2 \\cdot 9 \\to 3 \\cdot 3$.

A prime such as $17$ is a single node, since there is nothing to split, and $0$, $1$ and negative numbers draw no tree. The tree always uses the smallest prime first, so it is one of several valid trees for the same number; every tree ends with the same multiset of primes, which is why the factorization is unique. The Result card, the Neighbors strip and the How this works panel work in this view exactly as in the Prime view. Reading a tree and why every tree agrees is explained in [Factor Trees](!#factor-trees).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj21: {
    title: `Using the Laws Tab`,
    content: `Click **Laws** at the top of the card to apply a factoring pattern to numbers. The five buttons on the left name the patterns with their formulas: **Difference of squares** $a^2 - b^2 = (a-b)(a+b)$, **Sum of cubes**, **Difference of cubes**, **Perfect square trinomial** and **GCF extraction** $ka + kb = k(a + b)$. Pick one, type whole numbers in the **a** and **b** boxes, and the expression line shows the pattern with your numbers, for example $7^2 - 3^2$, while the **Step-by-step** list expands it: start, factored form, numbers, so $7^2 - 3^2 = (7 - 3)(7 + 3) = 4 \\cdot 10 = 40$.

Each pattern keeps its own pair of numbers, opening with $7, 3$ for the difference of squares, $2, 3$ for the sum of cubes, $5, 2$ for the difference of cubes, $3, 4$ for the perfect square trinomial and $12, 18$ for GCF extraction. With $a = 5$, $b = 2$ the sum of cubes gives $(5 + 2)(25 - 10 + 4) = 7 \\cdot 19 = 133$; GCF extraction with $12$ and $18$ finds $\\gcd = 6$ and writes $12 + 18 = 6(2 + 3) = 30$, and reports "nothing to extract" when the two numbers are coprime. An empty box shows "Enter integer values for a and b". The How this works panel explains the chosen pattern, why it works and its common mistake. The patterns themselves are explained in [Factoring Patterns](!#factoring-patterns).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj22: {
    title: `Using the GCD and LCM Tab`,
    content: `Click **GCD & LCM** at the top of the card and type two positive whole numbers in **Number A** and **Number B**, which open with $60$ and $84$. Under each box its prime factorization appears, $60 = 2^{2} \\cdot 3 \\cdot 5$ and $84 = 2^{2} \\cdot 3 \\cdot 7$, and two cards give the answers with their own factorizations: **GCD** $= 2^{2} \\cdot 3 = 12$ and **LCM** $= 2^{2} \\cdot 3 \\cdot 5 \\cdot 7 = 420$. A third line checks the identity $a \\cdot b = \\gcd \\cdot \\mathrm{lcm}$: $60 \\cdot 84 = 12 \\cdot 420 = 5{,}040$.

When the two numbers share no prime factor a **Coprime** flag appears above the cards, as for $8$ and $15$: $\\gcd = 1$ and $\\mathrm{lcm} = 8 \\cdot 15 = 120$. A box that holds $0$, a negative number or letters shows "enter a positive integer" under it and the cards disappear until both boxes are valid. The How this works panel on the right stacks the two factorizations, states the rule, minimum exponent for the GCD and maximum exponent for the LCM, and repeats the identity with your numbers. The rule and the identity are explained in [GCD and LCM from Prime Factorizations](!#gcd-and-lcm-from-prime-factorizations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj23: {
    title: `The How This Works Panel and the Nearby Numbers Table`,
    content: `The right column of the card opens with the **How this works** panel, whose blocks change with the tab and the number. In the Factor tab a composite number gives **What just happened**, with the factorization, **Divisor count**, with the product of the exponents plus one, $\\tau(36) = 3 \\cdot 3 = 9$, and **Worth knowing**, which flags a perfect square ($36 = 6^2$), a perfect cube, a perfect number ($\\sigma(28) - 28 = 28$) or says whether the number is abundant or deficient. A prime, a negative number, $0$, $1$ and an out-of-range number each get their own block. In the Laws tab the panel names the pattern, explains **Why it works** with a worked example and warns of a **Common mistake**; in the GCD & LCM tab it reads the two factorizations, states **The rule** and **The identity**, and flags coprime pairs.

The first block of the panel is a short note on the current view or pattern with a link to the section of this page that explains it. In the Factor tab the panel is followed by **Nearby numbers**, a table of twelve numbers around yours with their prime factorizations, a "prime" tag and the divisor count, your number highlighted; it is a quick way to compare neighbours such as $35 = 5 \\cdot 7$ and $36 = 2^{2} \\cdot 3^{2}$. What the divisor count and the sum of divisors measure is explained in [Complete Factoring and Divisor Counting](!#complete-factoring-and-divisor-counting).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj24: {
    title: `Prime Factorization`,
    content: `The prime factorization of a positive integer writes it as a product of primes, grouped with exponents: $60 = 2^{2} \\cdot 3 \\cdot 5$, $360 = 2^{3} \\cdot 3^{2} \\cdot 5$, $1024 = 2^{10}$. The Fundamental Theorem of Arithmetic says every integer greater than $1$ has exactly one such factorization apart from the order of the factors, which is why the Prime view, the Complete view and the Tree view always agree.

The calculator finds it by trial division: divide by $2$ as often as possible, then by $3$, $5$ and so on up to $\\sqrt{n}$; whatever is left above $1$ is the last prime. For $360$: three divisions by $2$ leave $45$, two by $3$ leave $5$, and $5$ is prime. A common mistake is to stop at a composite factor, writing $360 = 8 \\cdot 45$ and calling it done; the factorization is finished only when every factor is prime. Negative numbers are written as $-1$ times the factorization of $|n|$, and $0$ and $1$ have none.

The method and the theorem are taught in [Prime factorization](!/arithmetic/divisibility#8) in the divisibility lesson and in [Prime factorization](!/algebra/sequences/prime-numbers#5) in the prime numbers lesson.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj25: {
    title: `Complete Factoring and Divisor Counting`,
    content: `Complete factoring lists every divisor of a number, not only the primes. From the prime factorization the list follows without any further division: a divisor of $60 = 2^{2} \\cdot 3 \\cdot 5$ uses $2$ zero, one or two times, $3$ zero or one time and $5$ zero or one time, so there are $3 \\cdot 2 \\cdot 2 = 12$ divisors. In general $\\tau(n) = (a_1 + 1)(a_2 + 1) \\cdots$ for $n = p_1^{a_1} p_2^{a_2} \\cdots$, the formula the How this works panel shows under **Divisor count**.

The sum of the divisors $\\sigma(n)$ sorts numbers into three types: perfect when the proper divisors add up to the number itself ($28$: $1 + 2 + 4 + 7 + 14 = 28$), abundant when they add up to more ($12$: $1 + 2 + 3 + 4 + 6 = 16$) and deficient when to less ($16$: $1 + 2 + 4 + 8 = 15$). Perfect squares have an odd divisor count because the square root pairs with itself. The common mistake is to count $1$ and the number itself out; both are divisors and both belong in $\\tau(n)$ and $\\sigma(n)$.

Divisors and their counting are taught in [Factors and multiples](!/arithmetic/divisibility#6) and the quick tests for small divisors in [Divisibility rules](!/arithmetic/divisibility#5).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj26: {
    title: `Factor Trees`,
    content: `A factor tree splits a number into two factors, then splits each composite factor again, until every branch ends in a prime. The leaves, read left to right, are the prime factorization. The calculator always splits off the smallest prime first: $72 \\to 2 \\cdot 36$, $36 \\to 2 \\cdot 18$, $18 \\to 2 \\cdot 9$, $9 \\to 3 \\cdot 3$, so the leaves are $2, 2, 2, 3, 3$ and $72 = 2^{3} \\cdot 3^{2}$.

Any valid split works: starting $72 \\to 8 \\cdot 9$ gives a different tree with the same leaves. That every tree ends with the same primes is the content of the Fundamental Theorem of Arithmetic. The tree is a picture of the trial division behind the Prime view, which is why the two views never disagree. The common mistake is to leave a composite leaf such as $9$ unsplit; a tree is finished only when every leaf is prime. A prime number is a tree of one node.

Factor trees are the usual way to introduce [Prime factorization](!/arithmetic/divisibility#8); the prime numbers lesson shows the same procedure in [Prime factorization](!/algebra/sequences/prime-numbers#5).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj27: {
    title: `Factoring Patterns`,
    content: `The Laws tab applies five patterns that turn a sum or difference into a product. All five are identities: true for every $a$ and $b$, which is what makes them usable backwards, from the expanded form to the factored form. They are [Difference of Squares](!#difference-of-squares), $a^2 - b^2 = (a - b)(a + b)$; [Sum of Cubes](!#sum-of-cubes), $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$; [Difference of Cubes](!#difference-of-cubes), $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$; [Perfect Square Trinomials](!#perfect-square-trinomials), $a^2 + 2ab + b^2 = (a + b)^2$; and [GCF Extraction](!#gcf-extraction), $ka + kb = k(a + b)$.

The calculator checks each pattern on numbers: with $a = 7$, $b = 3$ the difference of squares gives $49 - 9 = 4 \\cdot 10 = 40$ on both sides. Numbers are a test, not a proof; the proof is the expansion of the right-hand side shown under **Why it works**. The common strategy is to pull out the GCF first, then look for one of the other four shapes.

The patterns and the order to try them are taught in [Factoring strategy](!/algebra/polynomials/factoring#10) and [What is factoring](!/algebra/polynomials/factoring#1); the identities are collected in [Summary of algebraic identities](!/algebra/identities#7).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj28: {
    title: `Difference of Squares`,
    content: `Two squares subtracted factor as a sum times a difference: $a^2 - b^2 = (a - b)(a + b)$. Expanding the right side, $a^2 + ab - ab - b^2$, the cross terms cancel, which is why the pattern has no middle term and is recognised by that absence. With $a = 7$, $b = 3$: $49 - 9 = (7 - 3)(7 + 3) = 4 \\cdot 10 = 40$.

The common mistake is to factor a sum of squares the same way; over the real numbers $a^2 + b^2$ does not factor. The pattern also explains quick mental products such as $19 \\cdot 21 = 20^2 - 1 = 399$.

The pattern is taught in [Difference of squares](!/algebra/polynomials/factoring#6) and, as an identity, in [Sums and differences of powers](!/algebra/identities#5).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj29: {
    title: `Sum of Cubes`,
    content: `A sum of two cubes does factor, unlike a sum of squares: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$. Multiplying out, $a^3 - a^2 b + ab^2 + a^2 b - ab^2 + b^3$, the four middle terms cancel in pairs. With $a = 2$, $b = 3$: $8 + 27 = (2 + 3)(4 - 6 + 9) = 5 \\cdot 7 = 35$; with $a = 5$, $b = 2$: $125 + 8 = 7 \\cdot 19 = 133$.

The common mistake is the sign of the middle term of the trinomial: the sum of cubes uses $-ab$, the difference of cubes $+ab$. The mnemonic SOAP, Same, Opposite, Always Positive, gives the three signs in order. The trinomial factor does not factor further over the real numbers.

See [Sum and difference of cubes](!/algebra/polynomials/factoring#8) and the identity in [Cubes of binomials](!/algebra/identities#2).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj30: {
    title: `Difference of Cubes`,
    content: `The mirror of the sum of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$. The same cancellation happens with the opposite signs. With $a = 5$, $b = 2$: $125 - 8 = (5 - 2)(25 + 10 + 4) = 3 \\cdot 39 = 117$.

The common mistake is again the middle sign: here the trinomial takes $+ab$. SOAP applies: the binomial takes the Same sign as the original expression, the middle term the Opposite sign, the last term is Always Positive. Note that $a^3 - b^3$ with $a = b$ is $0$, and the pattern gives $0$ too, since the first factor vanishes.

See [Sum and difference of cubes](!/algebra/polynomials/factoring#8) and [Sums and differences of powers](!/algebra/identities#5).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj31: {
    title: `Perfect Square Trinomials`,
    content: `A trinomial of the form $a^2 + 2ab + b^2$ is the square of a binomial: $(a + b)^2$. Expanding $(a + b)(a + b)$ by the distributive law gives $a^2 + ab + ab + b^2$, and the two cross terms combine into $2ab$. With $a = 3$, $b = 4$: $9 + 24 + 16 = (3 + 4)^2 = 49$.

To recognise the pattern, check that the first and last terms are squares and that the middle term is exactly twice the product of their roots; $x^2 + 5x + 4$ fails the test and is not a perfect square. The common mistake is to force the pattern when the middle coefficient is wrong. With a minus sign in the middle the pattern is $a^2 - 2ab + b^2 = (a - b)^2$.

See [Perfect square trinomials](!/algebra/polynomials/factoring#7) and the identity in [Squares of binomials](!/algebra/identities#1).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj32: {
    title: `GCF Extraction`,
    content: `Extracting the greatest common factor runs the distributive law backwards: $ka + kb = k(a + b)$. For numbers the calculator finds $k = \\gcd(a, b)$; with $a = 12$, $b = 18$, $\\gcd = 6$ and $12 + 18 = 6 \\cdot 2 + 6 \\cdot 3 = 6(2 + 3) = 6 \\cdot 5 = 30$. When the two numbers are coprime there is nothing to extract, and the tool says so.

This is the first move in almost every factoring problem, because a common factor left inside makes every later pattern harder to see. The common mistake is to pull out only part of the common factor, say $2$ instead of $6$ above, which leaves $2(6 + 9)$ with a factor of $3$ still shared inside. Use the full GCD.

See [Greatest common factor](!/algebra/polynomials/factoring#2) in the factoring lesson and the [distributive property](!/arithmetic/properties#5) it relies on.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj33: {
    title: `GCD and LCM from Prime Factorizations`,
    content: `The greatest common divisor and the least common multiple of two numbers can both be read from their prime factorizations, prime by prime. The GCD takes the smaller exponent of each prime that appears in both; the LCM takes the larger exponent of each prime that appears in either. For $60 = 2^{2} \\cdot 3 \\cdot 5$ and $84 = 2^{2} \\cdot 3 \\cdot 7$: $\\gcd = 2^{2} \\cdot 3 = 12$ and $\\mathrm{lcm} = 2^{2} \\cdot 3 \\cdot 5 \\cdot 7 = 420$.

The two are tied by the identity $a \\cdot b = \\gcd(a, b) \\cdot \\mathrm{lcm}(a, b)$, here $60 \\cdot 84 = 5{,}040 = 12 \\cdot 420$, because each prime's two exponents are split into a minimum and a maximum whose sum is the same. Numbers with no shared prime are coprime: $\\gcd(8, 15) = 1$ and the LCM is the plain product $120$. The common mistake is to multiply the two numbers and call the product the LCM; that is right only for coprime pairs.

The rule and the identity are taught in [GCD and LCM](!/arithmetic/divisibility#9), building on [Prime factorization](!/arithmetic/divisibility#8).`,
    before: ``,
    after: ``,
    link: '',
  },

//   obj10: {
//     title: `Related Calculators and Concepts`,
//     content: `**Greatest Common Factor (GCF) Calculator** - Find the largest factor shared by two or more numbers. Use prime factorization from this calculator to help identify common factors. Essential for simplifying fractions and solving algebraic problems.

// **Least Common Multiple (LCM) Calculator** - Find the smallest number that's a multiple of two or more numbers. Works hand-in-hand with factoring to solve fraction addition problems and pattern recognition.

// **Prime Number Checker** - Quickly verify whether a number is prime or composite. Use this before factoring to understand if your number can be broken down or if it's already in simplest form.

// **Divisibility Calculator** - Test if one number divides evenly into another. Complements complete factoring by checking specific divisibility rules for numbers like $2, 3, 5, 9$, and $10$.

// **Polynomial Factoring Tools** - Extend factoring concepts to algebraic expressions. After mastering number factoring, apply similar techniques to expressions like $x^2 - 5x + 6$.

// For theoretical background, explore **number theory fundamentals**, **divisibility rules**, **prime factorization applications**, and **factor trees** for visual factoring methods.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
};

const faqQuestions = {
  obj1: {
    question: "What is factoring and how does this calculator work?",
    answer: "Factoring is the process of breaking a number down into the whole numbers that multiply together to create it. This calculator offers two modes: Prime Factoring (which finds only prime number factors) and Complete Factoring (which finds all factors including factor pairs). Simply enter any whole number, select your mode, and click Calculate to see instant results."
  },
  obj2: {
    question: "What's the difference between prime and complete factoring?",
    answer: "Prime factoring breaks a number into prime number building blocks only. For example, 12 becomes 2, 2, 3. Complete factoring finds ALL numbers that divide evenly into your input. For 12, that's 1, 2, 3, 4, 6, 12. Use prime factoring for GCF/LCM and radical simplification. Use complete factoring for divisibility and finding all possible factor pairs."
  },
  obj3: {
    question: "Can I factor negative numbers?",
    answer: "Yes, but only in Complete Factoring mode. The calculator will show both positive and negative factors. For example, -12 has factors: -12, -6, -4, -3, -2, -1, 1, 2, 3, 4, 6, 12. Prime factoring doesn't work with negative numbers because prime factorization is mathematically defined only for positive integers."
  },
  obj4: {
    question: "What are factor pairs and why are they useful?",
    answer: "Factor pairs are two numbers that multiply together to equal your input number. For 24, the pairs are 1×24, 2×12, 3×8, and 4×6. They're useful for area calculations (finding rectangle dimensions), understanding multiplication relationships, and solving problems that require arranging items into equal groups or rows."
  },
  obj5: {
    question: "How do I use factoring in real math problems?",
    answer: "Factoring is essential for simplifying fractions (find common factors), solving algebraic equations (factor polynomials), working with radicals (simplify square roots using prime factors), finding GCF and LCM, understanding divisibility, and calculating areas with rectangular dimensions. It's a foundational skill for algebra, number theory, and higher mathematics."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Factoring Calculator - Prime and Complete Factorization",
    "description": "Free online factoring calculator for finding prime factors and complete factors of any number. Instantly calculate all factors and factor pairs with step-by-step results.",
    "url": "https://www.learnmathclass.com/algebra/calculators/factoring",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Prime factorization - break numbers into prime building blocks",
      "Complete factorization - find all factors of any number",
      "Factor pairs display in multiplication format",
      "Support for positive and negative integers",
      "Instant calculation for numbers of any size",
      "Clear results display with organized lists",
      "Reset functionality for quick recalculation"
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
    "educationalLevel": "Elementary School, Middle School, High School",
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
        "name": "Calculators",
        "item": "https://www.learnmathclass.com/algebra/calculators"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Factoring Calculator",
        "item": "https://www.learnmathclass.com/algebra/calculators/factoring"
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
};

const introContent = {
  id: "intro",
  title: "",
  content: ``
};

const factoringExplanations = {
  factor: {
    notes: {
      main: { title: 'Factoring a number', content: `Type a whole number or click a chip; the Prime, Complete and Tree views show the same prime factorization in three ways. [All factoring views](!#prime-factoring-vs-complete-factoring)` },
      prime: { title: 'Prime view', content: `Writes the number as a product of primes with exponents, found by trial division up to $\\sqrt{n}$, and lists the divisor count, the sum of divisors and the type. [Learn more about prime factorization](!#prime-factorization) · [All factoring views](!#prime-factoring-vs-complete-factoring)` },
      complete: { title: 'Complete view', content: `Lists every divisor, built from the prime factorization by choosing each exponent from $0$ up to its maximum, and pairs them off into factor pairs. [Learn more about complete factoring](!#complete-factoring-and-divisor-counting) · [All factoring views](!#prime-factoring-vs-complete-factoring)` },
      tree: { title: 'Tree view', content: `Splits off the smallest prime at each step until every leaf is prime; the leaves are the prime factorization. [Learn more about factor trees](!#factor-trees) · [All factoring views](!#prime-factoring-vs-complete-factoring)` },
    },
  },
  laws: {
    notes: {
      main: { title: 'Factoring patterns', content: `Pick a pattern and type $a$ and $b$; the steps expand the identity with your numbers. [All factoring patterns](!#factoring-patterns)` },
      diffSquares: { title: 'Difference of squares', content: `Factors $a^2 - b^2$ as $(a - b)(a + b)$; the cross terms cancel on expansion. [Learn more about the difference of squares](!#difference-of-squares) · [All factoring patterns](!#factoring-patterns)` },
      sumCubes: { title: 'Sum of cubes', content: `Factors $a^3 + b^3$ as $(a + b)(a^2 - ab + b^2)$; the middle sign is minus. [Learn more about the sum of cubes](!#sum-of-cubes) · [All factoring patterns](!#factoring-patterns)` },
      diffCubes: { title: 'Difference of cubes', content: `Factors $a^3 - b^3$ as $(a - b)(a^2 + ab + b^2)$; the middle sign is plus. [Learn more about the difference of cubes](!#difference-of-cubes) · [All factoring patterns](!#factoring-patterns)` },
      perfectSq: { title: 'Perfect square trinomial', content: `Recognises $a^2 + 2ab + b^2$ as $(a + b)^2$ when the middle term is exactly $2ab$. [Learn more about perfect square trinomials](!#perfect-square-trinomials) · [All factoring patterns](!#factoring-patterns)` },
      gcf: { title: 'GCF extraction', content: `Pulls $\\gcd(a, b)$ out of $a + b$ by the distributive law run backwards. [Learn more about GCF extraction](!#gcf-extraction) · [All factoring patterns](!#factoring-patterns)` },
    },
  },
  gcd: {
    notes: {
      main: { title: 'GCD and LCM', content: `Compares the two prime factorizations prime by prime: the GCD takes the smaller exponent, the LCM the larger, and $a \\cdot b = \\gcd \\cdot \\mathrm{lcm}$. [Learn more about GCD and LCM](!#gcd-and-lcm-from-prime-factorizations)` },
    },
  },
};
const demos = {
  'getting-started-with-the-factoring-calculator': {
    title: 'The three tabs',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'CLICK Laws\nFive patterns on the left; a and b boxes; the steps for 7² − 3².', at: 'tr' },
      { click: { button: 'Laws', exact: true } },
      { wait: 2800 },
      { say: 'CLICK GCD & LCM\nNumber A and Number B, opening with 60 and 84: GCD 12, LCM 420.', at: 'tr' },
      { click: { button: 'GCD & LCM', exact: true } },
      { wait: 2800 },
      { say: 'CLICK Factor\nBack to the first tab; 60 is still typed.', at: 'tr' },
      { click: { button: 'Factor', exact: true } },
      { wait: 2400 },
    ],
  },
  'using-prime-factoring-mode': {
    title: '360, the 1024 chip, Add to history',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'TYPE 360\n360 = 2³ · 3² · 5; τ = 24, σ = 1,170, abundant.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '360' },
      { wait: 3000 },
      { say: 'CLICK the 1024 chip\n2¹⁰: eleven divisors, σ = 2,047, deficient, a perfect square (32²).', at: 'tr' },
      { click: { button: '1024', exact: true } },
      { wait: 3000 },
      { say: 'CLICK Add to history\nThe Recent strip under the card keeps the factorization.', at: 'tr' },
      { click: { button: 'Add to history', exact: true } },
      { wait: 2600 },
    ],
  },
  'using-complete-factoring-mode': {
    title: 'Every divisor of 60, then of 36, then a click on 12',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'CLICK Complete\nTwelve divisors of 60, 2, 3 and 5 highlighted; six factor pairs.', at: 'tr' },
      { click: { button: 'Complete', exact: true } },
      { wait: 3000 },
      { say: 'TYPE 36\nNine divisors, an odd count: 36 is a perfect square, 6 × 6 among the pairs.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '36' },
      { wait: 3000 },
      { say: 'CLICK the divisor 12\nThe calculator factors 12 instead: 2² · 3, six divisors.', at: 'tr' },
      { click: { button: '12', exact: true } },
      { wait: 2800 },
    ],
  },
  'understanding-factor-pairs': {
    title: 'Factor pairs of 24, 16 and 20',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'CLICK Complete, TYPE 24\nPairs: 1 × 24, 2 × 12, 3 × 8, 4 × 6.', at: 'tr' },
      { click: { button: 'Complete', exact: true } },
      { set: { css: '.slot-input.n', nth: 0 }, value: '24' },
      { wait: 3000 },
      { say: 'TYPE 16\nPairs: 1 × 16, 2 × 8, 4 × 4; the square root pairs with itself.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '16' },
      { wait: 2800 },
      { say: 'TYPE 20\nPairs: 1 × 20, 2 × 10, 4 × 5.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '20' },
      { wait: 2800 },
    ],
  },
  'using-the-factor-tree-view': {
    title: 'The tree of 60, the tree of 72, a prime',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'CLICK Tree\n60 splits into 2 and 30, 30 into 2 and 15, 15 into 3 and 5.', at: 'tr' },
      { click: { button: 'Tree', exact: true } },
      { wait: 3000 },
      { say: 'CLICK the 72 chip\nFour levels: 72, 2 · 36, 2 · 18, 2 · 9, 3 · 3.', at: 'tr' },
      { click: { button: '72', exact: true } },
      { wait: 3000 },
      { say: 'TYPE 17\nA single node: 17 is prime.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '17' },
      { wait: 2600 },
    ],
  },
  'working-with-negative-numbers': {
    title: '−12, −60, back to 60',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'TYPE −12\n−12 = −1 · 2² · 3; the panel opens a Negative numbers block.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '-12' },
      { wait: 3000 },
      { say: 'TYPE −60\n−1 · 2² · 3 · 5; divisors of |n| = 60.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '-60' },
      { wait: 2800 },
      { say: 'TYPE 60\nBack to the positive number: τ, σ and the type return.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '60' },
      { wait: 2600 },
    ],
  },
  'reading-results-and-error-messages': {
    title: 'Zero, one, a number too large, Reset',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'TYPE 0\nStatus Zero: every nonzero integer is a divisor.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '0' },
      { wait: 2600 },
      { say: 'TYPE 1\nOne: neither prime nor composite, one divisor.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '1' },
      { wait: 2600 },
      { say: 'TYPE 2000000000\nToo large for this demo: numbers up to 10⁹.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '2000000000' },
      { wait: 2600 },
      { say: 'CLICK Reset\nBack to 60 in the Prime view.', at: 'tr' },
      { click: { button: 'Reset', exact: true } },
      { wait: 2400 },
    ],
  },
  'using-the-laws-tab': {
    title: 'Difference of squares, sum of cubes with new numbers, GCF extraction',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'CLICK Laws\nDifference of squares: 7² − 3² = (7 − 3)(7 + 3) = 4 · 10 = 40.', at: 'tr' },
      { click: { button: 'Laws', exact: true } },
      { wait: 2800 },
      { say: 'CLICK Sum of cubes, TYPE 5 and 2\n5³ + 2³ = (5 + 2)(25 − 10 + 4) = 7 · 19 = 133.', at: 'tr' },
      { click: { button: 'Sum of cubes' } },
      { set: { css: '.slot-input.law', nth: 0 }, value: '5' },
      { set: { css: '.slot-input.law', nth: 1 }, value: '2' },
      { wait: 3200 },
      { say: 'CLICK GCF extraction\ngcd(12, 18) = 6: 12 + 18 = 6(2 + 3) = 30.', at: 'tr' },
      { click: { button: 'GCF extraction' } },
      { wait: 2800 },
    ],
  },
  'using-the-gcd-and-lcm-tab': {
    title: '60 and 84, a coprime pair, a refused value',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'CLICK GCD & LCM\n60 = 2² · 3 · 5 and 84 = 2² · 3 · 7: GCD 12, LCM 420, 60 · 84 = 12 · 420.', at: 'tr' },
      { click: { button: 'GCD & LCM', exact: true } },
      { wait: 3000 },
      { say: 'TYPE 8 and 15\nCoprime: GCD 1, LCM 8 · 15 = 120.', at: 'tr' },
      { set: { css: '.slot-input.cmp', nth: 0 }, value: '8' },
      { set: { css: '.slot-input.cmp', nth: 1 }, value: '15' },
      { wait: 3000 },
      { say: 'TYPE 0 as Number A\nRefused: enter a positive integer; the cards disappear.', at: 'tr' },
      { set: { css: '.slot-input.cmp', nth: 0 }, value: '0' },
      { wait: 2600 },
    ],
  },
  'the-how-this-works-panel-and-the-nearby-numbers-table': {
    title: 'A perfect number, a perfect square, the Laws panel',
    scale: 0.4,
    minHeight: 593,
    script: [
      { say: 'TYPE 28\nWorth knowing: a perfect number, σ(28) − 28 = 28.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '28' },
      { wait: 3000 },
      { say: 'TYPE 36\nDivisor count τ(36) = 3 · 3 = 9; perfect square 6²; the Nearby numbers table moves to 31 to 42.', at: 'tr' },
      { set: { css: '.slot-input.n', nth: 0 }, value: '36' },
      { wait: 3000 },
      { say: 'CLICK Laws\nThe panel now reads the pattern, Why it works and Common mistake.', at: 'tr' },
      { click: { button: 'Laws', exact: true } },
      { wait: 2800 },
    ],
  },
};

return {
  props: {
    sectionsContent,
    introContent,
    navigationGroup,
    faqQuestions,
    schemas,
    detailInstructions,
    factoringExplanations,
    demos,
    seoData: {
      title: "Factoring Calculator | Find Prime & Complete Factors",
      description: "Free factoring calculator finds prime factors and complete factors of any number instantly. Calculate factor pairs and break down numbers step-by-step online.",
      keywords: keyWords.join(", "),
      url: "/algebra/calculators/factoring",
      name: "Factoring Calculator - Prime and Complete Factorization Tool"
    },
  },
  revalidate: 86400
};
}

export default function FactoringCalculatorPage({seoData, sectionsContent, introContent, 
  navigationGroup, faqQuestions, schemas,detailInstructions, factoringExplanations = null, demos = {}}) {

const demoPlayer = (slug) => (
  <ToolDemoPlayer
    key={`demo-${slug}`}
    script={demos[slug].script}
    title={demos[slug].title}
    label={`Demo: ${demos[slug].title}`}
    scale={demos[slug].scale || 0.4}
    minHeight={demos[slug].minHeight || undefined}
    renderText={processContent}
  >
    <FactoringCalculator explanations={factoringExplanations || undefined} />
  </ToolDemoPlayer>
);
const genericSections = [
  { id: 'getting-started-with-the-factoring-calculator', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('getting-started-with-the-factoring-calculator'), sectionsContent.obj1.content] },
  { id: 'using-prime-factoring-mode', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('using-prime-factoring-mode'), sectionsContent.obj2.content] },
  { id: 'using-complete-factoring-mode', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('using-complete-factoring-mode'), sectionsContent.obj3.content] },
  { id: 'understanding-factor-pairs', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('understanding-factor-pairs'), sectionsContent.obj4.content] },
  { id: 'using-the-factor-tree-view', title: sectionsContent.obj20.title, link: sectionsContent.obj20.link, content: [demoPlayer('using-the-factor-tree-view'), sectionsContent.obj20.content] },
  { id: 'working-with-negative-numbers', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [demoPlayer('working-with-negative-numbers'), sectionsContent.obj5.content] },
  { id: 'reading-results-and-error-messages', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [demoPlayer('reading-results-and-error-messages'), sectionsContent.obj6.content] },
  { id: 'using-the-laws-tab', title: sectionsContent.obj21.title, link: sectionsContent.obj21.link, content: [demoPlayer('using-the-laws-tab'), sectionsContent.obj21.content] },
  { id: 'using-the-gcd-and-lcm-tab', title: sectionsContent.obj22.title, link: sectionsContent.obj22.link, content: [demoPlayer('using-the-gcd-and-lcm-tab'), sectionsContent.obj22.content] },
  { id: 'the-how-this-works-panel-and-the-nearby-numbers-table', title: sectionsContent.obj23.title, link: sectionsContent.obj23.link, content: [demoPlayer('the-how-this-works-panel-and-the-nearby-numbers-table'), sectionsContent.obj23.content] },
  { id: 'what-are-factors', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [sectionsContent.obj7.content] },
  { id: 'prime-factoring-vs-complete-factoring', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
  { id: 'prime-factorization', title: sectionsContent.obj24.title, link: sectionsContent.obj24.link, content: [sectionsContent.obj24.content] },
  { id: 'complete-factoring-and-divisor-counting', title: sectionsContent.obj25.title, link: sectionsContent.obj25.link, content: [sectionsContent.obj25.content] },
  { id: 'factor-trees', title: sectionsContent.obj26.title, link: sectionsContent.obj26.link, content: [sectionsContent.obj26.content] },
  { id: 'what-are-prime-numbers', title: sectionsContent.obj9.title, link: sectionsContent.obj9.link, content: [sectionsContent.obj9.content] },
  { id: 'factoring-patterns', title: sectionsContent.obj27.title, link: sectionsContent.obj27.link, content: [sectionsContent.obj27.content] },
  { id: 'difference-of-squares', title: sectionsContent.obj28.title, link: sectionsContent.obj28.link, content: [sectionsContent.obj28.content] },
  { id: 'sum-of-cubes', title: sectionsContent.obj29.title, link: sectionsContent.obj29.link, content: [sectionsContent.obj29.content] },
  { id: 'difference-of-cubes', title: sectionsContent.obj30.title, link: sectionsContent.obj30.link, content: [sectionsContent.obj30.content] },
  { id: 'perfect-square-trinomials', title: sectionsContent.obj31.title, link: sectionsContent.obj31.link, content: [sectionsContent.obj31.content] },
  { id: 'gcf-extraction', title: sectionsContent.obj32.title, link: sectionsContent.obj32.link, content: [sectionsContent.obj32.content] },
  { id: 'gcd-and-lcm-from-prime-factorizations', title: sectionsContent.obj33.title, link: sectionsContent.obj33.link, content: [sectionsContent.obj33.content] },
];

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
      <meta property="og:type" content="website" />
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

    <style jsx>{`
      @media (max-width: 1024px) {
        .layout-container > div:first-child,
        .layout-container > div:first-child *,
        :global([class*="vertical"]),
        :global([class*="vertical"]) * {
          position: static !important;
        }
      }
      
      .layout-container {
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 20px;
        width: 100%;
      }
      
      @media (max-width: 1024px) {
        .layout-container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <br/>
    <br/>
    
    <Breadcrumb/>
    <OperaSidebar
      side='right'
      sidebarWidth='45px'
      panelWidth='300px'
      iconColor='white'
      panelBackgroundColor='#f2f2f2'
    />
   
    <br/>
    <h1 className='title' style={{marginTop:'0px',marginBottom:'-60px'}}>Factoring Calculator</h1>
    <div style={{marginTop:'70px',marginBottom:'20px'}}>
      <ExplanationDetails instructions={detailInstructions} title='How to use Factoring Calculator' />
    </div>
    <br/>
   {/* <div style={{marginBottom:'60px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Factoring Calculator'
      />
    </div> */}
    <div className="layout-container"> 
      <div style={{marginTop:'30px',marginLeft:'5px'}}>
        <br/>
        <VerticalButtonGroup 
          items={navigationGroup}
          width="250px"       
          theme='brilliantBlue'
          isSticky={true}
          verticalOffset='250px'
        />
      </div>

      <div>
        <div style={{width:'95%',transform:'scale(0.9)'}}>
          <FactoringCalculator explanations={factoringExplanations || undefined} />
          <br/>
        </div>
      </div>
    </div>
    
    <br/>
    <br/>
    <SectionTableOfContents sections={genericSections}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Sections sections={genericSections}/>
    <br/>
    <br/>
    <br/>
  </>
);
}