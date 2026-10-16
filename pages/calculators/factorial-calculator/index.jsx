// // // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // // // import React from 'react'
// // // // import '../../pages.css'
// // // // import FactorialCalculator from '@/app/components/calculators/arithmetics/FactorialCalculator'
// // // // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // // // import Head from 'next/head'
// // // // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


// // // // export async function getStaticProps() {
// // // //   const keyWords = ['factorial','factorial calculator','factorial meaning',
// // // //     'n factorial calculator','factorial n','0 factorial','1 factorial',
// // // //     'factorial in mathematics','factorial in math','zero factorial','factorial calculator online'];

// // // // const navigationGroup=[
// // // //   {title:'Other Calculators',
// // // //     items:[
// // // //       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
// // // //       {title:'Root Calculator',link:'/calculators/root-calculator'},
// // // //       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
// // // //       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
// // // //       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
// // // //       // {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
// // // //       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
// // // //       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
// // // //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// // // //       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
// // // //     ]
// // // //   }
// // // // ]

// // // // // factorialExplanations.js
// // // // const factorialActualExplanations = {
// // // //   basic: {
// // // //     text: "The basic factorial (n!) is the product of all positive integers less than or equal to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. By convention, 0! = 1. Factorials grow extremely rapidly and are fundamental in combinatorics, probability, and algebra.",
// // // //     links: [
// // // //       { title: "Learn more about Factorials", link: "/factorial" }
// // // //     ]
// // // //   },
// // // //   double: {
// // // //     text: "The double factorial (n!!) is the product of all integers from 1 to n that have the same parity (odd or even) as n. For example, 8!! = 8 × 6 × 4 × 2 = 384 and 7!! = 7 × 5 × 3 × 1 = 105. Double factorials appear in combinatorial problems and calculus.",
// // // //     links: [
// // // //       { title: "Learn more about Double Factorials", link: "/factorial" }
// // // //     ]
// // // //   },
// // // //   sub: {
// // // //     text: "The subfactorial (!n) counts the number of derangements of n objects - permutations where no element appears in its original position. For example, !3 = 2 because there are 2 ways to arrange 3 items so none are in their original spots. Subfactorials are used in probability and combinatorics.",
// // // //     links: [
// // // //       { title: "Learn more about Subfactorials", link: "/factorial" }
// // // //     ]
// // // //   },
// // // //   multi: {
// // // //     text: "The multifactorial (n(k)!) is a generalization where you multiply every k-th number. For example, with k=3, 10(3)! = 10 × 7 × 4 × 1 = 280. When k=1 it's a regular factorial, k=2 is double factorial. Multifactorials extend factorial concepts to broader mathematical contexts.",
// // // //     links: [
// // // //       { title: "Learn more about Multifactorials", link: "/factorial" }
// // // //     ]
// // // //   },
// // // //   primorial: {
// // // //     text: "The primorial (n#) is the product of all prime numbers less than or equal to n. For example, 10# = 2 × 3 × 5 × 7 = 210. Primorials are important in number theory, particularly in studying prime number distributions and appear in various mathematical theorems.",
// // // //     links: [
// // // //       { title: "Learn more about Primorials", link: "/factorial" }
// // // //     ]
// // // //   }
// // // // };


// // // //   return {
// // // //     props: {
// // // //       seoData: {
// // // //         title: "Factorial Calculator - Calculate n! Online | Learn Math Class",
// // // //         description: "Free factorial calculator with step-by-step solutions. Calculate factorials, understand factorial meaning, and learn about 0! and factorial mathematics.",
// // // //         keywords: keyWords.join(", "),
// // // //         url: "/calculators/factorial-calculator",
// // // //         name: "Factorial Calculator"
// // // //       },
// // // //       keyWords,
// // // //       navigationGroup,
// // // //       factorialActualExplanations
// // // //     }
// // // //   }
// // // // }

// // // // export default function FactorialCalculatorPage({ seoData, keyWords ,
// // // //   navigationGroup ,factorialActualExplanations}) {

// // // //     // const keyWords=['factorial','factorial calculator','factorial meaning',
// // // //     //   'n factorial calculator','factorial n','0 factorial','1 factorial',
// // // //     // 'factorial in mathematics','factorial in math','zero factorial','factorial calculator online',]
// // // //   return (
// // // //    <>
// // // //    <Head>
// // // //   <title>{seoData.title}</title>
// // // //   <meta name="description" content={seoData.description} />
// // // //   <meta name="keywords" content={seoData.keywords} />
// // // //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// // // //   <meta property="og:title" content={seoData.title} />
// // // //   <meta property="og:description" content={seoData.description} />
// // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // //   <meta property="og:type" content="article" />
// // // //   <meta property="og:site_name" content="Learn Math Class" />
  
// // // //   <meta name="twitter:card" content="summary" />
// // // //   <meta name="twitter:title" content={seoData.title} />
// // // //   <meta name="twitter:description" content={seoData.description} />
  
// // // //   <meta name="robots" content="index, follow" />
  
// // // //   <script 
// // // //     type="application/ld+json"
// // // //     dangerouslySetInnerHTML={{ 
// // // //       __html: JSON.stringify({
// // // //         "@context": "https://schema.org",
// // // //         "@type": "WebPage",
// // // //         "name": seoData.name,
// // // //         "description": seoData.description,
// // // //         "keywords": seoData.keywords,
// // // //         "url": `https://www.learnmathclass.com${seoData.url}`,
// // // //         "dateModified": new Date().toISOString(),
// // // //         "inLanguage": "en-US",
// // // //         "mainEntity": {
// // // //           "@type": "Article",
// // // //           "name": seoData.name,
// // // //           "dateModified": new Date().toISOString(),
// // // //           "author": {
// // // //             "@type": "Organization",
// // // //             "name": "Learn Math Class"
// // // //           }
// // // //         }
// // // //       })
// // // //     }}
// // // //   />
// // // // </Head>
// // // //      <style jsx>{`
// // // //   @media (max-width: 1024px) {
// // // //     .layout-container > div:first-child,
// // // //     .layout-container > div:first-child *,
// // // //     :global([class*="vertical"]),
// // // //     :global([class*="vertical"]) * {
// // // //       position: static !important;
// // // //     }
// // // //   }
  
// // // //   .layout-container {
// // // //     display: grid;
// // // //     grid-template-columns: 20% 80%;
// // // //     gap: 20px;
// // // //     width: 100%;
// // // //   }
  
// // // //   @media (max-width: 1024px) {
// // // //     .layout-container {
// // // //       grid-template-columns: 1fr;
// // // //     }
// // // //   }
// // // // `}</style>

// // // //    {/* <GenericNavbar/> */}
// // // //    <br/>
// // // //    <br/>
// // // //    <br/>
// // // //    <br/>
// // // //    <OperaSidebar
// // // //            side='right'
// // // //            topOffset='55px'
// // // //            sidebarWidth='45px'
// // // //            panelWidth='300px'
// // // //            iconColor='white'
// // // //            panelBackgroundColor='#f2f2f2'
// // // //          />
// // // //    <Breadcrumb/>
// // // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Factorial Calculator</h1>
   
// // // //      {/* <VerticalButtonGroup 
// // // //             items={navigationGroup}
// // // //             width="250px"       
// // // //             theme='lightBlue'
// // // //             isSticky={true}
// // // //             verticalOffset='200px'
// // // //          />
// // // //    <FactorialCalculator/> */}
// // // //      <div className="layout-container">
// // // //      {/* <div style={{
// // // //       display: 'grid',
// // // //       gridTemplateColumns: '10% 90%',
// // // //       gap: '20px',
// // // //       width: '100%'
// // // //    }}> */}
// // // //       {/* Left column - Sidebar */}
// // // //       <div>
// // // //         <br/>
       
// // // //          <VerticalButtonGroup 
// // // //             items={navigationGroup}
// // // //             width="250px"       
// // // //             theme='lightBlue'
// // // //             isSticky={true}
// // // //             verticalOffset='200px'
// // // //          />
// // // //       </div>

// // // //       {/* Right column - Table */}
// // // //       <div>
// // // //          <div style={{width:'100%',margin:'auto'}}>
// // // //           <div style={{transform:'scale(0.95)'}}>
// // // //         {/* <ExponentCalculator explanations={explanations}/> */}
// // // //         <FactorialCalculator
// // // //         explanations={factorialActualExplanations}/>
// // // //       </div> 
          
// // // //            {/* <div style={{transform:'scale(0.90)'}}>
// // // //         <RootCalculator explanations={explanations}
// // // //         />
// // // //       </div>  */}
// // // //             <br/>
// // // //             <br/>
// // // //             <br/>
           
            
// // // //          </div>
// // // //       </div>
// // // //    </div>
// // // //    <br/>
// // // //    <br/>
// // // //    <br/>
// // // //    <br/>
// // // //    {/* <ScrollUpButton/> */}
   
   
// // // //    </>
// // // //   )
// // // // }


// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import Sections from '@/app/components/page-components/section/Sections'
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // import ExplanationDetails from '@/app/components/ExplanationDetails'
// // // import React from 'react'
// // // import '../../pages.css'
// // // import FactorialCalculator from '@/app/components/calculators/arithmetics/FactorialCalculator'
// // // import Head from 'next/head'
// // // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

// // // export async function getStaticProps() {

// // // const navigationGroup=[
// // //   {title:'Other Calculators',
// // //     items:[
// // //       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
// // //       {title:'Root Calculator',link:'/calculators/root-calculator'},
// // //       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
// // //       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
// // //       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
// // //       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
// // //       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
// // //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// // //       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
// // //     ]
// // //   }
// // // ]

// // // const factorialActualExplanations = {
// // //   basic: {
// // //     text: `The basic factorial ($n!$) is the product of all positive integers less than or equal to $n$. For example, $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. By convention, $0! = 1$. Factorials grow extremely rapidly and are fundamental in combinatorics, probability, and algebra.`,
// // //     links: [
// // //       { title: "Learn more about Factorials", link: "/factorial" }
// // //     ]
// // //   },
// // //   double: {
// // //     text: `The double factorial ($n!!$) is the product of all integers from $1$ to $n$ that have the same parity (odd or even) as $n$. For example, $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$ and $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. Double factorials appear in combinatorial problems and calculus.`,
// // //     links: [
// // //       { title: "Learn more about Double Factorials", link: "/factorial" }
// // //     ]
// // //   },
// // //   sub: {
// // //     text: `The subfactorial ($!n$) counts the number of derangements of $n$ objects - permutations where no element appears in its original position. For example, $!3 = 2$ because there are $2$ ways to arrange $3$ items so none are in their original spots. Subfactorials are used in probability and combinatorics.`,
// // //     links: [
// // //       { title: "Learn more about Subfactorials", link: "/factorial" }
// // //     ]
// // //   },
// // //   multi: {
// // //     text: `The multifactorial ($n(k)!$) is a generalization where you multiply every $k$-th number. For example, with $k=3$, $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. When $k=1$ it's a regular factorial, $k=2$ is double factorial. Multifactorials extend factorial concepts to broader mathematical contexts.`,
// // //     links: [
// // //       { title: "Learn more about Multifactorials", link: "/factorial" }
// // //     ]
// // //   },
// // //   primorial: {
// // //     text: `The primorial ($n\\#$) is the product of all prime numbers less than or equal to $n$. For example, $10\\# = 2 \\times 3 \\times 5 \\times 7 = 210$. Primorials are important in number theory, particularly in studying prime number distributions and appear in various mathematical theorems.`,
// // //     links: [
// // //       { title: "Learn more about Primorials", link: "/factorial" }
// // //     ]
// // //   }
// // // };

// // // const detailInstructions = [
// // //   "Select the type of factorial you want to calculate (Basic, Double, Subfactorial, Multifactorial, or Primorial)",
// // //   "Enter your number n in the first input field",
// // //   "For Multifactorial, also enter the step value k in the second field",
// // //   "Click Calculate to see the result",
// // //   "Hover over ? icons for additional help"
// // // ];

// // // const keyWords = [
// // //   'factorial calculator',
// // //   'n factorial',
// // //   'factorial meaning',
// // //   'calculate factorial',
// // //   'factorial online',
// // //   '0 factorial',
// // //   'double factorial calculator',
// // //   'subfactorial calculator',
// // //   'multifactorial calculator',
// // //   'primorial calculator',
// // //   'factorial mathematics',
// // //   'factorial solver',
// // //   'free factorial calculator',
// // //   'factorial computation',
// // //   'factorial formula'
// // // ];

// // // const sectionsContent = {
// // //   obj1: {
// // //     title: `Getting Started with the Calculator`,
// // //     content: `The factorial calculator offers five different types at the top: **Basic (n!)**, **Double (n!!)**, **Subfactorial (!n)**, **Multifactorial (n(k)!)**, and **Primorial (n#)**. Start by clicking one of these radio buttons to select which type you want to calculate.

// // // For most calculations, you'll use **Basic (n!)**—the standard factorial that multiplies all numbers from $1$ to your number. Click this option and you'll see one input box asking for your number. Enter any whole number from $0$ upward.

// // // The other types are specialized: **Double** for even/odd sequences, **Subfactorial** for counting arrangements, **Multifactorial** for custom step sizes (requires two inputs), and **Primorial** for prime number products. Select the type that matches your problem.

// // // After entering your number (and $k$ value for multifactorial), click the blue **Calculate** button. Your result appears on the right side of the equals sign. Use **Reset** to clear everything and start over.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj2: {
// // //     title: `Using Basic Factorial`,
// // //     content: `**Basic (n!)** is the most common type. Select this radio button at the top, then enter a whole number in the box. Try $5$—click Calculate and see $120$ appear as the result because $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

// // // Start with small numbers to understand the pattern. Calculate $3!$ and get $6$ (because $3 \\times 2 \\times 1 = 6$). Then try $4!$ for $24$, $6!$ for $720$, and $7!$ for $5040$. Notice how quickly factorials grow—each new number multiplies the previous result.

// // // **Special case**: Enter $0$ and get $1$. This isn't a mistake—by mathematical definition, $0! = 1$. This convention makes many formulas work correctly. Similarly, $1! = 1$ because there's only one number to multiply.

// // // The calculator handles large numbers using scientific notation. Try $20!$ and see a result like $2.432902e+18$ (meaning $2.432902 \\times 10^{18}$ or about $2.4$ quintillion). For very large numbers, the calculator shows $e^{\\text{value}}$ format to represent the enormous result.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj3: {
// // //     title: `Calculating Double Factorials`,
// // //     content: `Select **Double (n!!)** when you need to multiply only even numbers or only odd numbers. This type skips every other number. For even inputs, it multiplies all even numbers; for odd inputs, it multiplies all odd numbers.

// // // Try $8!!$ by entering $8$ with Double selected. The result is $384$ because $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$. Notice it skips all odd numbers ($7, 5, 3, 1$). Each step goes down by $2$ instead of $1$.

// // // For odd numbers, try $7!!$ and get $105$ because $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. This skips all even numbers ($6, 4, 2$). The pattern depends on whether your starting number is even or odd.

// // // Small examples: $4!! = 4 \\times 2 = 8$, $5!! = 5 \\times 3 \\times 1 = 15$, $6!! = 6 \\times 4 \\times 2 = 48$. Double factorials appear in physics formulas, probability calculations, and certain mathematical sequences.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj4: {
// // //     title: `Working with Subfactorials`,
// // //     content: `**Subfactorial (!n)** counts arrangements where nothing stays in its original position—called derangements. Select this type and enter a number to see how many ways you can rearrange items so each one moves.

// // // Start with $!3$ (enter $3$ with Subfactorial selected). The result is $2$ because there are exactly $2$ ways to arrange three items $(A, B, C)$ so none stay in place: $(B, C, A)$ and $(C, A, B)$. Try placing each letter—neither arrangement leaves any letter in its original spot.

// // // Try $!4$ and get $9$. For four items, there are $9$ derangements out of the $24$ total arrangements (which is $4!$). The subfactorial is always less than the regular factorial because it counts only specific arrangements, not all of them.

// // // Examples: $!2 = 1$ (only one way to swap two items), $!5 = 44$, $!6 = 265$. Subfactorials are used in probability (like the "hat check problem") and combinatorics when calculating arrangements with restrictions.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj5: {
// // //     title: `Understanding Multifactorial`,
// // //     content: `**Multifactorial (n(k)!)** lets you choose your step size. Instead of going down by $1$ (basic) or $2$ (double), you can go down by any number $k$. This option requires two inputs: $n$ (your starting number) and $k$ (your step size).

// // // Select Multifactorial and two boxes appear. Enter $10$ in the first box and $3$ in the second. Click Calculate to see $280$ because $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. Each step subtracts $3$: start at $10$, then $7$, then $4$, then $1$.

// // // When $k=1$, multifactorial equals basic factorial: $5(1)! = 5! = 120$. When $k=2$, it equals double factorial: $8(2)! = 8!! = 384$. Multifactorial generalizes both of these.

// // // Try $12$ with $k=4$: get $12(4)! = 12 \\times 8 \\times 4 = 384$. Or $9$ with $k=3$: get $9(3)! = 9 \\times 6 \\times 3 = 162$. Choose $k$ based on the pattern you need—it controls which numbers get multiplied together.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj6: {
// // //     title: `Computing Primorials`,
// // //     content: `**Primorial (n#)** multiplies only prime numbers up to $n$. Select this type and enter a number—the calculator finds all primes less than or equal to your number and multiplies them together.

// // // Try $10\\#$ by entering $10$ with Primorial selected. The result is $210$ because the primes up to $10$ are $2, 3, 5, 7$, and $2 \\times 3 \\times 5 \\times 7 = 210$. The calculator automatically identifies primes and skips composite numbers like $4, 6, 8, 9, 10$.

// // // Small examples: $5\\# = 2 \\times 3 \\times 5 = 30$, $7\\# = 2 \\times 3 \\times 5 \\times 7 = 210$, $11\\# = 2 \\times 3 \\times 5 \\times 7 \\times 11 = 2310$. Notice $7\\#$ and $10\\#$ are the same because there are no primes between $7$ and $10$.

// // // If you enter a prime number itself, it includes that prime. Try $13\\#$ and get $30030$ because it multiplies all primes up to and including $13$: $2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13 = 30030$. Primorials are used in number theory and studying prime distributions.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj7: {
// // //     title: `What Are Factorials`,
// // //     content: `A factorial takes a number and multiplies it by every positive whole number below it, all the way down to $1$. The symbol is an exclamation mark: $n!$ means "multiply $n$ by all smaller positive integers."

// // // For example, $4!$ means $4 \\times 3 \\times 2 \\times 1 = 24$. You start at $4$, multiply by $3$ to get $12$, multiply by $2$ to get $24$, multiply by $1$ (which doesn't change anything) to get $24$. Every step multiplies by the next smaller number.

// // // Factorials count **how many ways you can arrange things**. If you have $4$ books, there are $4! = 24$ different ways to order them on a shelf. First book has $4$ choices, second has $3$ remaining choices, third has $2$, last has $1$—multiply these together.

// // // **Why does 0! equal 1?** By definition, there's exactly one way to arrange zero items: do nothing. This might seem strange, but it makes mathematical formulas work correctly. Think of it as the "empty arrangement"—there's one way to arrange nothing.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj8: {
// // //     title: `How Factorials Grow`,
// // //     content: `Factorials get big **extremely fast**. Look at this pattern: $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$, $7! = 5040$. Each new factorial multiplies the previous one by the next number. Going from $6!$ to $7!$ means multiplying $720$ by $7$.

// // // By $10!$ you reach $3,628,800$—over three million. By $15!$ you're at $1,307,674,368,000$—over a trillion. By $20!$ you hit $2,432,902,008,176,640,000$—that's $2.4$ quintillion. The numbers become so large that writing them fully is impractical.

// // // This rapid growth is why the calculator uses scientific notation for large results. When you see $1.234e+18$, that's $1.234 \\times 10^{18}$ or $1.234$ followed by $18$ more digits. For very large factorials (like $100!$), the calculator shows $e^{\\text{number}}$ format instead.

// // // **Practical limit**: Most real-world factorial problems use numbers under $20$. Calculating $70!$ gives a number with over $100$ digits. Only specialized applications (like cryptography or advanced statistics) work with such enormous factorials.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj9: {
// // //     title: `Simple Factorial Patterns`,
// // //     content: `**Multiplying factorials**: To go from one factorial to the next, just multiply by the next number. Since $5! = 120$, you know $6! = 120 \\times 6 = 720$. And $7! = 720 \\times 7 = 5040$. Each factorial builds on the previous one.

// // // **Dividing factorials**: When you divide factorials, numbers cancel. $\\frac{5!}{3!} = \\frac{5 \\times 4 \\times 3 \\times 2 \\times 1}{3 \\times 2 \\times 1} = 5 \\times 4 = 20$. The $3!$ cancels out, leaving only the top numbers. This simplifies many calculations.

// // // **Factorials in fractions**: The expression $\\frac{n!}{(n-2)!}$ equals $n \\times (n-1)$. Try with $5$: $\\frac{5!}{3!} = \\frac{120}{6} = 20 = 5 \\times 4$. This pattern appears in permutation formulas.

// // // **Zero factorial rule**: Remember $0! = 1$, not $0$. This makes formulas work: the binomial coefficient $\\binom{n}{0} = \\frac{n!}{0! \\times n!} = \\frac{n!}{1 \\times n!} = 1$. If $0!$ were $0$, you'd divide by zero and the formula would break.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj10: {
// // //     title: `Practice Problems to Try`,
// // //     content: `**Basic factorials**: Calculate $3!$, $6!$, and $9!$. Answers: $6$ (because $3 \\times 2 \\times 1 = 6$), $720$, and $362,880$. Verify each by multiplying all numbers from your starting point down to $1$.

// // // **Zero and one**: Find $0!$ and $1!$. Both equal $1$. Remember this special case—it's used constantly in formulas and calculations.

// // // **Double factorials**: Compute $6!!$ and $9!!$. Answers: $48$ (because $6 \\times 4 \\times 2 = 48$) and $945$ (because $9 \\times 7 \\times 5 \\times 3 \\times 1 = 945$). Even numbers give smaller results than odd numbers at the same starting point.

// // // **Subfactorials**: Find $!4$ and $!5$. Answers: $9$ and $44$. These count derangements—arrangements where nothing stays in place.

// // // **Primorials**: Calculate $12\\#$ and $15\\#$. Answers: $2310$ (multiply primes $2, 3, 5, 7, 11$) and $30030$ (multiply primes $2, 3, 5, 7, 11, 13$). List the primes first, then multiply.

// // // **Multifactorial**: Compute $15(5)!$ (step by $5$). Answer: $15 \\times 10 \\times 5 = 750$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj11: {
// // //     title: `Where Factorials Are Used`,
// // //     content: `**Counting arrangements**: If you have $5$ different books, there are $5! = 120$ ways to arrange them on a shelf. First position has $5$ choices, second has $4$ remaining, third has $3$, fourth has $2$, last has $1$. Multiply: $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

// // // **Probability calculations**: Drawing cards, rolling dice, or picking lottery numbers all use factorials. The number of ways to choose $3$ items from $10$ is $\\frac{10!}{3! \\times 7!} = 120$. This formula appears everywhere in probability.

// // // **Password combinations**: A $4$-digit PIN where no digit repeats has $10 \\times 9 \\times 8 \\times 7 = 5040$ possibilities—that's $\\frac{10!}{6!}$. Security systems use factorial calculations to measure password strength.

// // // **Tournament scheduling**: Arranging $8$ teams in a bracket uses factorial math. The number of possible matchup orders is related to $8!$, though the actual formula is more complex. Sports schedulers use these calculations.

// // // **Scientific formulas**: Factorials appear in Taylor series (calculus), Stirling's approximation (statistics), and binomial expansions (algebra). The function $e^x$ can be written as $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },

// // //   obj12: {
// // //     title: `Related Calculators and Concepts`,
// // //     content: `**Combination Calculator** uses factorials to count selections. The formula for choosing $r$ items from $n$ is $\\frac{n!}{r!(n-r)!}$. This calculator helps you compute combinations without calculating each factorial separately.

// // // **Permutation Calculator** also uses factorials for counting arrangements where order matters. The formula $\\frac{n!}{(n-r)!}$ counts ways to arrange $r$ items from $n$ total items.

// // // **Binomial Coefficient** (written $\\binom{n}{k}$) equals $\\frac{n!}{k!(n-k)!}$ and appears in probability, Pascal's triangle, and the binomial theorem. Understanding factorials is essential for working with binomial coefficients.

// // // **Gamma Function** extends factorials to non-integer values. While regular factorials only work for whole numbers, the gamma function $\\Gamma(n) = (n-1)!$ works for any number. This appears in advanced calculus and statistics.

// // // For deeper learning, explore permutations and combinations, probability theory, binomial theorem, and how factorials appear in mathematical series and approximations.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: '',
// // //   },
// // // };

// // // const faqQuestions = {
// // //   obj1: {
// // //     question: "What is a factorial and how do you calculate it?",
// // //     answer: "A factorial (written as n!) is the product of all positive integers from 1 to n. To calculate 5!, multiply 5 × 4 × 3 × 2 × 1 = 120. Use this calculator by entering your number, selecting Basic (n!) type, and clicking Calculate. The result appears instantly."
// // //   },
// // //   obj2: {
// // //     question: "Why does 0! equal 1?",
// // //     answer: "By mathematical definition, 0! = 1. This convention ensures formulas work correctly. Think of it as counting arrangements: there's exactly one way to arrange zero items (do nothing). This definition makes binomial coefficients, permutations, and many other formulas function properly without special cases."
// // //   },
// // //   obj3: {
// // //     question: "What's the difference between n! and n!!?",
// // //     answer: "n! (factorial) multiplies all numbers from n down to 1: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720. n!! (double factorial) multiplies every other number: 6!! = 6 × 4 × 2 = 48 (even numbers only). Double factorial skips alternating values based on whether n is even or odd."
// // //   },
// // //   obj4: {
// // //     question: "How large can factorials get?",
// // //     answer: "Factorials grow extremely fast. 10! = 3,628,800, 20! ≈ 2.4 × 10^18, and 100! has 158 digits. This calculator handles large factorials using scientific notation (like 1.234e+18) or exponential format (e^value) for very large numbers. Most practical applications use factorials under 20."
// // //   },
// // //   obj5: {
// // //     question: "What is a subfactorial and when is it used?",
// // //     answer: "A subfactorial (!n) counts derangements—arrangements where no item stays in its original position. For example, !3 = 2 because there are 2 ways to arrange 3 items so none are in their original spots. Subfactorials are used in probability problems like the hat-check problem or secret Santa arrangements."
// // //   }
// // // };

// // // const schemas = {
// // //   webApplication: {
// // //     "@context": "https://schema.org",
// // //     "@type": "WebApplication",
// // //     "name": "Factorial Calculator - Calculate n!, n!!, !n, n(k)!, n#",
// // //     "description": "Free online factorial calculator supporting basic factorial, double factorial, subfactorial, multifactorial, and primorial calculations. Instant results with explanations.",
// // //     "url": "https://www.learnmathclass.com/calculators/factorial-calculator",
// // //     "applicationCategory": "EducationalApplication",
// // //     "operatingSystem": "Any",
// // //     "offers": {
// // //       "@type": "Offer",
// // //       "price": "0",
// // //       "priceCurrency": "USD"
// // //     },
// // //     "featureList": [
// // //       "Basic factorial (n!) calculation",
// // //       "Double factorial (n!!) computation",
// // //       "Subfactorial (!n) for derangements",
// // //       "Multifactorial (n(k)!) with custom steps",
// // //       "Primorial (n#) prime number products",
// // //       "Large number support with scientific notation",
// // //       "Instant calculation results",
// // //       "Educational explanations for each type"
// // //     ],
// // //     "author": {
// // //       "@type": "Organization",
// // //       "name": "Learn Math Class"
// // //     },
// // //     "datePublished": "2024-01-15",
// // //     "dateModified": new Date().toISOString(),
// // //     "inLanguage": "en-US",
// // //     "isAccessibleForFree": true,
// // //     "learningResourceType": "Interactive Tool",
// // //     "educationalLevel": "Middle School, High School, College",
// // //     "keywords": keyWords.join(", ")
// // //   },
  
// // //   breadcrumb: {
// // //     "@context": "https://schema.org",
// // //     "@type": "BreadcrumbList",
// // //     "itemListElement": [
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 1,
// // //         "name": "Home",
// // //         "item": "https://www.learnmathclass.com"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 2,
// // //         "name": "Calculators",
// // //         "item": "https://www.learnmathclass.com/calculators"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 3,
// // //         "name": "Factorial Calculator",
// // //         "item": "https://www.learnmathclass.com/calculators/factorial-calculator"
// // //       }
// // //     ]
// // //   },
  
// // //   faq: {
// // //     "@context": "https://schema.org",
// // //     "@type": "FAQPage",
// // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // //       "@type": "Question",
// // //       "name": faqQuestions[key].question,
// // //       "acceptedAnswer": {
// // //         "@type": "Answer",
// // //         "text": faqQuestions[key].answer
// // //       }
// // //     }))
// // //   }
// // // };

// // // return {
// // //   props: {
// // //     seoData: {
// // //       title: "Factorial Calculator | Calculate n!, n!!, !n, n(k)! & n# Online",
// // //       description: "Free factorial calculator for basic, double, subfactorial, multifactorial and primorial. Calculate factorials instantly with step-by-step explanations and examples.",
// // //       keywords: keyWords.join(", "),
// // //       url: "/calculators/factorial-calculator",
// // //       name: "Factorial Calculator - Multiple Factorial Types"
// // //     },
// // //     keyWords,
// // //     navigationGroup,
// // //     factorialActualExplanations,
// // //     detailInstructions,
// // //     sectionsContent,
// // //     faqQuestions,
// // //     schemas
// // //   }
// // // }
// // // }

// // // export default function FactorialCalculatorPage({ seoData, keyWords, navigationGroup, factorialActualExplanations, detailInstructions, sectionsContent, faqQuestions, schemas}) {

// // // const genericSections = Object.keys(sectionsContent).map((key, index) => ({
// // //   id: `${index + 1}`,
// // //   title: sectionsContent[key].title,
// // //   link: sectionsContent[key].link,
// // //   content: [sectionsContent[key].content]
// // // }));

// // // return (
// // //   <>
// // //     <Head>
// // //       <title>{seoData.title}</title>
// // //       <meta name="description" content={seoData.description} />
// // //       <meta name="keywords" content={seoData.keywords} />
// // //       <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //       <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
      
// // //       <meta property="og:title" content={seoData.title} />
// // //       <meta property="og:description" content={seoData.description} />
// // //       <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // //       <meta property="og:type" content="website" />
// // //       <meta property="og:site_name" content="Learn Math Class" />
      
// // //       <meta name="twitter:card" content="summary" />
// // //       <meta name="twitter:title" content={seoData.title} />
// // //       <meta name="twitter:description" content={seoData.description} />
      
// // //       <meta name="robots" content="index, follow" />
      
// // //       <script 
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
// // //       />
      
// // //       <script 
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
// // //       />
      
// // //       <script 
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
// // //       />
// // //     </Head>

// // //     <style jsx>{`
// // //       @media (max-width: 1024px) {
// // //         .layout-container > div:first-child,
// // //         .layout-container > div:first-child *,
// // //         :global([class*="vertical"]),
// // //         :global([class*="vertical"]) * {
// // //           position: static !important;
// // //         }
// // //       }
      
// // //       .layout-container {
// // //         display: grid;
// // //         grid-template-columns: 20% 80%;
// // //         gap: 20px;
// // //         width: 100%;
// // //       }
      
// // //       @media (max-width: 1024px) {
// // //         .layout-container {
// // //           grid-template-columns: 1fr;
// // //         }
// // //       }
// // //     `}</style>

// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <OperaSidebar
// // //       side='right'
// // //       topOffset='55px'
// // //       sidebarWidth='45px'
// // //       panelWidth='300px'
// // //       iconColor='white'
// // //       panelBackgroundColor='#f2f2f2'
// // //     />
// // //     <Breadcrumb/>
// // //     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Factorial Calculator</h1>
// // //     <div style={{marginBottom:'20px'}}>
// // //       <ExplanationDetails 
// // //         instructions={detailInstructions}
// // //         title='How to use Factorial Calculator'
// // //       />
// // //     </div>
    
// // //     <div className="layout-container">
// // //       <div>
// // //         <br/>
// // //         <VerticalButtonGroup 
// // //           items={navigationGroup}
// // //           width="250px"       
// // //           theme='lightBlue'
// // //           isSticky={true}
// // //           verticalOffset='200px'
// // //         />
// // //       </div>

// // //       <div>
// // //         <div >
// // //           <div >
// // //             <FactorialCalculator
// // //               explanations={factorialActualExplanations}
// // //             />
// // //           </div> 
// // //           <br/>
// // //         </div>
// // //       </div>
// // //     </div>

// // //     <br/>
// // //     <SectionTableOfContents sections={genericSections}/>
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <Sections sections={genericSections}/>
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //   </>
// // //   )
// // // }


// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import ExplanationDetails from '@/app/components/ExplanationDetails'
// // import React from 'react'
// // import '../../pages.css'
// // import FactorialCalculator from '@/app/components/calculators/arithmetics/FactorialCalculator'
// // import Head from 'next/head'
// // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

// // export async function getStaticProps() {

// // const navigationGroup=[
// //   {title:'Other Calculators',
// //     items:[
// //       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
// //       {title:'Root Calculator',link:'/calculators/root-calculator'},
// //       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
// //       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
// //       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
// //       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
// //       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
// //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// //       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
// //     ]
// //   }
// // ]

// // const factorialActualExplanations = {
// //   basic: {
// //     text: `The basic factorial ($n!$) is the product of all positive integers less than or equal to $n$. For example, $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. By convention, $0! = 1$. Factorials grow extremely rapidly and are fundamental in combinatorics, probability, and algebra.`,
// //     links: [
// //       { title: "Learn more about Factorials", link: "/factorial" }
// //     ]
// //   },
// //   double: {
// //     text: `The double factorial ($n!!$) is the product of all integers from $1$ to $n$ that have the same parity (odd or even) as $n$. For example, $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$ and $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. Double factorials appear in combinatorial problems and calculus.`,
// //     links: [
// //       { title: "Learn more about Double Factorials", link: "/factorial" }
// //     ]
// //   },
// //   sub: {
// //     text: `The subfactorial ($!n$) counts the number of derangements of $n$ objects - permutations where no element appears in its original position. For example, $!3 = 2$ because there are $2$ ways to arrange $3$ items so none are in their original spots. Subfactorials are used in probability and combinatorics.`,
// //     links: [
// //       { title: "Learn more about Subfactorials", link: "/factorial" }
// //     ]
// //   },
// //   multi: {
// //     text: `The multifactorial ($n(k)!$) is a generalization where you multiply every $k$-th number. For example, with $k=3$, $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. When $k=1$ it's a regular factorial, $k=2$ is double factorial. Multifactorials extend factorial concepts to broader mathematical contexts.`,
// //     links: [
// //       { title: "Learn more about Multifactorials", link: "/factorial" }
// //     ]
// //   },
// //   primorial: {
// //     text: `The primorial ($n\\#$) is the product of all prime numbers less than or equal to $n$. For example, $10\\# = 2 \\times 3 \\times 5 \\times 7 = 210$. Primorials are important in number theory, particularly in studying prime number distributions and appear in various mathematical theorems.`,
// //     links: [
// //       { title: "Learn more about Primorials", link: "/factorial" }
// //     ]
// //   }
// // };

// // const detailInstructions = [
// //   "Select the type of factorial you want to calculate (Basic, Double, Subfactorial, Multifactorial, or Primorial)",
// //   "Enter your number n in the first input field",
// //   "For Multifactorial, also enter the step value k in the second field",
// //   "Click Calculate to see the result",
// //   "Hover over ? icons for additional help"
// // ];

// // const keyWords = [
// //   'factorial calculator',
// //   'n factorial',
// //   'factorial meaning',
// //   'calculate factorial',
// //   'factorial online',
// //   '0 factorial',
// //   'double factorial calculator',
// //   'subfactorial calculator',
// //   'multifactorial calculator',
// //   'primorial calculator',
// //   'factorial mathematics',
// //   'factorial solver',
// //   'free factorial calculator',
// //   'factorial computation',
// //   'factorial formula'
// // ];

// // const sectionsContent = {
// //   obj1: {
// //     title: `Getting Started with the Calculator`,
// //     content: `The factorial calculator offers five different types at the top: **Basic (n!)**, **Double (n!!)**, **Subfactorial (!n)**, **Multifactorial (n(k)!)**, and **Primorial (n#)**. Start by clicking one of these radio buttons to select which type you want to calculate.

// // For most calculations, you'll use **Basic (n!)**—the standard factorial that multiplies all numbers from $1$ to your number. Click this option and you'll see one input box asking for your number. Enter any whole number from $0$ upward.

// // The other types are specialized: **Double** for even/odd sequences, **Subfactorial** for counting arrangements, **Multifactorial** for custom step sizes (requires two inputs), and **Primorial** for prime number products. Select the type that matches your problem.

// // After entering your number (and $k$ value for multifactorial), click the blue **Calculate** button. Your result appears on the right side of the equals sign. Use **Reset** to clear everything and start over.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj2: {
// //     title: `Using Basic Factorial`,
// //     content: `**Basic (n!)** is the most common type. Select this radio button at the top, then enter a whole number in the box. Try $5$—click Calculate and see $120$ appear as the result because $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

// // Start with small numbers to understand the pattern. Calculate $3!$ and get $6$ (because $3 \\times 2 \\times 1 = 6$). Then try $4!$ for $24$, $6!$ for $720$, and $7!$ for $5040$. Notice how quickly factorials grow—each new number multiplies the previous result.

// // **Special case**: Enter $0$ and get $1$. This isn't a mistake—by mathematical definition, $0! = 1$. This convention makes many formulas work correctly. Similarly, $1! = 1$ because there's only one number to multiply.

// // The calculator handles large numbers using scientific notation. Try $20!$ and see a result like $2.432902e+18$ (meaning $2.432902 \\times 10^{18}$ or about $2.4$ quintillion). For very large numbers, the calculator shows $e^{\\text{value}}$ format to represent the enormous result.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj3: {
// //     title: `Calculating Double Factorials`,
// //     content: `Select **Double (n!!)** when you need to multiply only even numbers or only odd numbers. This type skips every other number. For even inputs, it multiplies all even numbers; for odd inputs, it multiplies all odd numbers.

// // Try $8!!$ by entering $8$ with Double selected. The result is $384$ because $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$. Notice it skips all odd numbers ($7, 5, 3, 1$). Each step goes down by $2$ instead of $1$.

// // For odd numbers, try $7!!$ and get $105$ because $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. This skips all even numbers ($6, 4, 2$). The pattern depends on whether your starting number is even or odd.

// // Small examples: $4!! = 4 \\times 2 = 8$, $5!! = 5 \\times 3 \\times 1 = 15$, $6!! = 6 \\times 4 \\times 2 = 48$. Double factorials appear in physics formulas, probability calculations, and certain mathematical sequences.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj4: {
// //     title: `Working with Subfactorials`,
// //     content: `**Subfactorial (!n)** counts arrangements where nothing stays in its original position—called derangements. Select this type and enter a number to see how many ways you can rearrange items so each one moves.

// // Start with $!3$ (enter $3$ with Subfactorial selected). The result is $2$ because there are exactly $2$ ways to arrange three items $(A, B, C)$ so none stay in place: $(B, C, A)$ and $(C, A, B)$. Try placing each letter—neither arrangement leaves any letter in its original spot.

// // Try $!4$ and get $9$. For four items, there are $9$ derangements out of the $24$ total arrangements (which is $4!$). The subfactorial is always less than the regular factorial because it counts only specific arrangements, not all of them.

// // Examples: $!2 = 1$ (only one way to swap two items), $!5 = 44$, $!6 = 265$. Subfactorials are used in probability (like the "hat check problem") and combinatorics when calculating arrangements with restrictions.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj5: {
// //     title: `Understanding Multifactorial`,
// //     content: `**Multifactorial (n(k)!)** lets you choose your step size. Instead of going down by $1$ (basic) or $2$ (double), you can go down by any number $k$. This option requires two inputs: $n$ (your starting number) and $k$ (your step size).

// // Select Multifactorial and two boxes appear. Enter $10$ in the first box and $3$ in the second. Click Calculate to see $280$ because $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. Each step subtracts $3$: start at $10$, then $7$, then $4$, then $1$.

// // When $k=1$, multifactorial equals basic factorial: $5(1)! = 5! = 120$. When $k=2$, it equals double factorial: $8(2)! = 8!! = 384$. Multifactorial generalizes both of these.

// // Try $12$ with $k=4$: get $12(4)! = 12 \\times 8 \\times 4 = 384$. Or $9$ with $k=3$: get $9(3)! = 9 \\times 6 \\times 3 = 162$. Choose $k$ based on the pattern you need—it controls which numbers get multiplied together.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj6: {
// //     title: `Computing Primorials`,
// //     content: `**Primorial (n#)** multiplies only prime numbers up to $n$. Select this type and enter a number—the calculator finds all primes less than or equal to your number and multiplies them together.

// // Try $10\\#$ by entering $10$ with Primorial selected. The result is $210$ because the primes up to $10$ are $2, 3, 5, 7$, and $2 \\times 3 \\times 5 \\times 7 = 210$. The calculator automatically identifies primes and skips composite numbers like $4, 6, 8, 9, 10$.

// // Small examples: $5\\# = 2 \\times 3 \\times 5 = 30$, $7\\# = 2 \\times 3 \\times 5 \\times 7 = 210$, $11\\# = 2 \\times 3 \\times 5 \\times 7 \\times 11 = 2310$. Notice $7\\#$ and $10\\#$ are the same because there are no primes between $7$ and $10$.

// // If you enter a prime number itself, it includes that prime. Try $13\\#$ and get $30030$ because it multiplies all primes up to and including $13$: $2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13 = 30030$. Primorials are used in number theory and studying prime distributions.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj7: {
// //     title: `What Are Factorials`,
// //     content: `A factorial takes a number and multiplies it by every positive whole number below it, all the way down to $1$. The symbol is an exclamation mark: $n!$ means "multiply $n$ by all smaller positive integers."

// // For example, $4!$ means $4 \\times 3 \\times 2 \\times 1 = 24$. You start at $4$, multiply by $3$ to get $12$, multiply by $2$ to get $24$, multiply by $1$ (which doesn't change anything) to get $24$. Every step multiplies by the next smaller number.

// // Factorials count **how many ways you can arrange things**. If you have $4$ books, there are $4! = 24$ different ways to order them on a shelf. First book has $4$ choices, second has $3$ remaining choices, third has $2$, last has $1$—multiply these together.

// // **Why does 0! equal 1?** By definition, there's exactly one way to arrange zero items: do nothing. This might seem strange, but it makes mathematical formulas work correctly. Think of it as the "empty arrangement"—there's one way to arrange nothing.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj8: {
// //     title: `How Factorials Grow`,
// //     content: `Factorials get big **extremely fast**. Look at this pattern: $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$, $7! = 5040$. Each new factorial multiplies the previous one by the next number. Going from $6!$ to $7!$ means multiplying $720$ by $7$.

// // By $10!$ you reach $3,628,800$—over three million. By $15!$ you're at $1,307,674,368,000$—over a trillion. By $20!$ you hit $2,432,902,008,176,640,000$—that's $2.4$ quintillion. The numbers become so large that writing them fully is impractical.

// // This rapid growth is why the calculator uses scientific notation for large results. When you see $1.234e+18$, that's $1.234 \\times 10^{18}$ or $1.234$ followed by $18$ more digits. For very large factorials (like $100!$), the calculator shows $e^{\\text{number}}$ format instead.

// // **Practical limit**: Most real-world factorial problems use numbers under $20$. Calculating $70!$ gives a number with over $100$ digits. Only specialized applications (like cryptography or advanced statistics) work with such enormous factorials.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj9: {
// //     title: `Simple Factorial Patterns`,
// //     content: `**Multiplying factorials**: To go from one factorial to the next, just multiply by the next number. Since $5! = 120$, you know $6! = 120 \\times 6 = 720$. And $7! = 720 \\times 7 = 5040$. Each factorial builds on the previous one.

// // **Dividing factorials**: When you divide factorials, numbers cancel. $\\frac{5!}{3!} = \\frac{5 \\times 4 \\times 3 \\times 2 \\times 1}{3 \\times 2 \\times 1} = 5 \\times 4 = 20$. The $3!$ cancels out, leaving only the top numbers. This simplifies many calculations.

// // **Factorials in fractions**: The expression $\\frac{n!}{(n-2)!}$ equals $n \\times (n-1)$. Try with $5$: $\\frac{5!}{3!} = \\frac{120}{6} = 20 = 5 \\times 4$. This pattern appears in permutation formulas.

// // **Zero factorial rule**: Remember $0! = 1$, not $0$. This makes formulas work: the binomial coefficient $\\binom{n}{0} = \\frac{n!}{0! \\times n!} = \\frac{n!}{1 \\times n!} = 1$. If $0!$ were $0$, you'd divide by zero and the formula would break.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj10: {
// //     title: `Practice Problems to Try`,
// //     content: `**Basic factorials**: Calculate $3!$, $6!$, and $9!$. Answers: $6$ (because $3 \\times 2 \\times 1 = 6$), $720$, and $362,880$. Verify each by multiplying all numbers from your starting point down to $1$.

// // **Zero and one**: Find $0!$ and $1!$. Both equal $1$. Remember this special case—it's used constantly in formulas and calculations.

// // **Double factorials**: Compute $6!!$ and $9!!$. Answers: $48$ (because $6 \\times 4 \\times 2 = 48$) and $945$ (because $9 \\times 7 \\times 5 \\times 3 \\times 1 = 945$). Even numbers give smaller results than odd numbers at the same starting point.

// // **Subfactorials**: Find $!4$ and $!5$. Answers: $9$ and $44$. These count derangements—arrangements where nothing stays in place.

// // **Primorials**: Calculate $12\\#$ and $15\\#$. Answers: $2310$ (multiply primes $2, 3, 5, 7, 11$) and $30030$ (multiply primes $2, 3, 5, 7, 11, 13$). List the primes first, then multiply.

// // **Multifactorial**: Compute $15(5)!$ (step by $5$). Answer: $15 \\times 10 \\times 5 = 750$.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj11: {
// //     title: `Where Factorials Are Used`,
// //     content: `**Counting arrangements**: If you have $5$ different books, there are $5! = 120$ ways to arrange them on a shelf. First position has $5$ choices, second has $4$ remaining, third has $3$, fourth has $2$, last has $1$. Multiply: $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

// // **Probability calculations**: Drawing cards, rolling dice, or picking lottery numbers all use factorials. The number of ways to choose $3$ items from $10$ is $\\frac{10!}{3! \\times 7!} = 120$. This formula appears everywhere in probability.

// // **Password combinations**: A $4$-digit PIN where no digit repeats has $10 \\times 9 \\times 8 \\times 7 = 5040$ possibilities—that's $\\frac{10!}{6!}$. Security systems use factorial calculations to measure password strength.

// // **Tournament scheduling**: Arranging $8$ teams in a bracket uses factorial math. The number of possible matchup orders is related to $8!$, though the actual formula is more complex. Sports schedulers use these calculations.

// // **Scientific formulas**: Factorials appear in Taylor series (calculus), Stirling's approximation (statistics), and binomial expansions (algebra). The function $e^x$ can be written as $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// //   obj12: {
// //     title: `Related Calculators and Concepts`,
// //     content: `**Combination Calculator** uses factorials to count selections. The formula for choosing $r$ items from $n$ is $\\frac{n!}{r!(n-r)!}$. This calculator helps you compute combinations without calculating each factorial separately.

// // **Permutation Calculator** also uses factorials for counting arrangements where order matters. The formula $\\frac{n!}{(n-r)!}$ counts ways to arrange $r$ items from $n$ total items.

// // **Binomial Coefficient** (written $\\binom{n}{k}$) equals $\\frac{n!}{k!(n-k)!}$ and appears in probability, Pascal's triangle, and the binomial theorem. Understanding factorials is essential for working with binomial coefficients.

// // **Gamma Function** extends factorials to non-integer values. While regular factorials only work for whole numbers, the gamma function $\\Gamma(n) = (n-1)!$ works for any number. This appears in advanced calculus and statistics.

// // For deeper learning, explore permutations and combinations, probability theory, binomial theorem, and how factorials appear in mathematical series and approximations.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// // };

// // const faqQuestions = {
// //   obj1: {
// //     question: "What is a factorial and how do you calculate it?",
// //     answer: "A factorial (written as n!) is the product of all positive integers from 1 to n. To calculate 5!, multiply 5 × 4 × 3 × 2 × 1 = 120. Use this calculator by entering your number, selecting Basic (n!) type, and clicking Calculate. The result appears instantly."
// //   },
// //   obj2: {
// //     question: "Why does 0! equal 1?",
// //     answer: "By mathematical definition, 0! = 1. This convention ensures formulas work correctly. Think of it as counting arrangements: there's exactly one way to arrange zero items (do nothing). This definition makes binomial coefficients, permutations, and many other formulas function properly without special cases."
// //   },
// //   obj3: {
// //     question: "What's the difference between n! and n!!?",
// //     answer: "n! (factorial) multiplies all numbers from n down to 1: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720. n!! (double factorial) multiplies every other number: 6!! = 6 × 4 × 2 = 48 (even numbers only). Double factorial skips alternating values based on whether n is even or odd."
// //   },
// //   obj4: {
// //     question: "How large can factorials get?",
// //     answer: "Factorials grow extremely fast. 10! = 3,628,800, 20! ≈ 2.4 × 10^18, and 100! has 158 digits. This calculator handles large factorials using scientific notation (like 1.234e+18) or exponential format (e^value) for very large numbers. Most practical applications use factorials under 20."
// //   },
// //   obj5: {
// //     question: "What is a subfactorial and when is it used?",
// //     answer: "A subfactorial (!n) counts derangements—arrangements where no item stays in its original position. For example, !3 = 2 because there are 2 ways to arrange 3 items so none are in their original spots. Subfactorials are used in probability problems like the hat-check problem or secret Santa arrangements."
// //   }
// // };

// // const schemas = {
// //   webApplication: {
// //     "@context": "https://schema.org",
// //     "@type": "WebApplication",
// //     "name": "Factorial Calculator - Calculate n!, n!!, !n, n(k)!, n#",
// //     "description": "Free online factorial calculator supporting basic factorial, double factorial, subfactorial, multifactorial, and primorial calculations. Instant results with explanations.",
// //     "url": "https://www.learnmathclass.com/calculators/factorial-calculator",
// //     "applicationCategory": "EducationalApplication",
// //     "operatingSystem": "Any",
// //     "offers": {
// //       "@type": "Offer",
// //       "price": "0",
// //       "priceCurrency": "USD"
// //     },
// //     "featureList": [
// //       "Basic factorial (n!) calculation",
// //       "Double factorial (n!!) computation",
// //       "Subfactorial (!n) for derangements",
// //       "Multifactorial (n(k)!) with custom steps",
// //       "Primorial (n#) prime number products",
// //       "Large number support with scientific notation",
// //       "Instant calculation results",
// //       "Educational explanations for each type"
// //     ],
// //     "author": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "datePublished": "2024-01-15",
// //     "dateModified": new Date().toISOString(),
// //     "inLanguage": "en-US",
// //     "isAccessibleForFree": true,
// //     "learningResourceType": "Interactive Tool",
// //     "educationalLevel": "Middle School, High School, College",
// //     "keywords": keyWords.join(", ")
// //   },
  
// //   breadcrumb: {
// //     "@context": "https://schema.org",
// //     "@type": "BreadcrumbList",
// //     "itemListElement": [
// //       {
// //         "@type": "ListItem",
// //         "position": 1,
// //         "name": "Home",
// //         "item": "https://www.learnmathclass.com"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 2,
// //         "name": "Calculators",
// //         "item": "https://www.learnmathclass.com/calculators"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 3,
// //         "name": "Factorial Calculator",
// //         "item": "https://www.learnmathclass.com/calculators/factorial-calculator"
// //       }
// //     ]
// //   },
  
// //   faq: {
// //     "@context": "https://schema.org",
// //     "@type": "FAQPage",
// //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// //       "@type": "Question",
// //       "name": faqQuestions[key].question,
// //       "acceptedAnswer": {
// //         "@type": "Answer",
// //         "text": faqQuestions[key].answer
// //       }
// //     }))
// //   }
// // };

// // return {
// //   props: {
// //     seoData: {
// //       title: "Factorial Calculator | Calculate n!, n!!, !n, n(k)! & n# Online",
// //       description: "Free factorial calculator for basic, double, subfactorial, multifactorial and primorial. Calculate factorials instantly with step-by-step explanations and examples.",
// //       keywords: keyWords.join(", "),
// //       url: "/calculators/factorial-calculator",
// //       name: "Factorial Calculator - Multiple Factorial Types"
// //     },
// //     keyWords,
// //     navigationGroup,
// //     factorialActualExplanations,
// //     detailInstructions,
// //     sectionsContent,
// //     faqQuestions,
// //     schemas
// //   }
// // }
// // }

// // export default function FactorialCalculatorPage({ seoData, keyWords, navigationGroup, factorialActualExplanations, detailInstructions, sectionsContent, faqQuestions, schemas}) {

// // const genericSections = Object.keys(sectionsContent).map((key, index) => ({
// //   id: `${index + 1}`,
// //   title: sectionsContent[key].title,
// //   link: sectionsContent[key].link,
// //   content: [sectionsContent[key].content]
// // }));

// // return (
// //   <>
// //     <Head>
// //       <title>{seoData.title}</title>
// //       <meta name="description" content={seoData.description} />
// //       <meta name="keywords" content={seoData.keywords} />
// //       <meta name="viewport" content="width=device-width, initial-scale=1" />
// //       <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
      
// //       <meta property="og:title" content={seoData.title} />
// //       <meta property="og:description" content={seoData.description} />
// //       <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //       <meta property="og:type" content="website" />
// //       <meta property="og:site_name" content="Learn Math Class" />
      
// //       <meta name="twitter:card" content="summary" />
// //       <meta name="twitter:title" content={seoData.title} />
// //       <meta name="twitter:description" content={seoData.description} />
      
// //       <meta name="robots" content="index, follow" />
      
// //       <script 
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
// //       />
      
// //       <script 
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
// //       />
      
// //       <script 
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
// //       />
// //     </Head>

// //     <style jsx>{`
// //       @media (max-width: 1024px) {
// //         .layout-container > div:first-child,
// //         .layout-container > div:first-child *,
// //         :global([class*="vertical"]),
// //         :global([class*="vertical"]) * {
// //           position: static !important;
// //         }
// //       }
      
// //       .layout-container {
// //         display: grid;
// //         grid-template-columns: 15% 85%;
// //         gap: 20px;
// //         width: 100%;
// //       }
      
// //       @media (max-width: 1024px) {
// //         .layout-container {
// //           grid-template-columns: 1fr;
// //         }
// //       }
// //     `}</style>

// //     <br/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <OperaSidebar
// //       side='right'
// //       topOffset='55px'
// //       sidebarWidth='45px'
// //       panelWidth='300px'
// //       iconColor='white'
// //       panelBackgroundColor='#f2f2f2'
// //     />
// //     <Breadcrumb/>
// //     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Factorial Calculator</h1>
// //     <div style={{marginBottom:'20px'}}>
// //       <ExplanationDetails 
// //         instructions={detailInstructions}
// //         title='How to use Factorial Calculator'
// //       />
// //     </div>
    
// //     <div className="layout-container">
// //       <div>
// //         <br/>
// //         <VerticalButtonGroup 
// //           items={navigationGroup}
// //           width="250px"       
// //           theme='lightBlue'
// //           isSticky={true}
// //           verticalOffset='200px'
// //         />
// //       </div>

// //       <div>
// //         <div style={{width:'100%',margin:'auto'}}>
// //           <div style={{transform:'scale(0.95)'}}>
// //             <FactorialCalculator
// //               explanations={factorialActualExplanations}
// //             />
// //           </div> 
// //           <br/>
// //         </div>
// //       </div>
// //     </div>

// //     <br/>
// //     <SectionTableOfContents sections={genericSections}/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <Sections sections={genericSections}/>
// //     <br/>
// //     <br/>
// //     <br/>
// //   </>
// //   )
// // }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ExplanationDetails from '@/app/components/ExplanationDetails'
// import React from 'react'
// import '../../pages.css'
// import FactorialCalculator from '@/app/components/calculators/arithmetics/FactorialCalculator'
// import Head from 'next/head'
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

// export async function getStaticProps() {

// const navigationGroup=[
//   {title:'Other Calculators',
//     items:[
//       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
//       {title:'Root Calculator',link:'/calculators/root-calculator'},
//       {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
//       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
//       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
//       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
//       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
//       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
//       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
//     ]
//   }
// ]

// const factorialActualExplanations = {
//   basic: {
//     text: `The basic factorial ($n!$) is the product of all positive integers less than or equal to $n$. For example, $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. By convention, $0! = 1$. Factorials grow extremely rapidly and are fundamental in combinatorics, probability, and algebra.`,
//     links: [
//       { title: "Learn more about Factorials", link: "/factorial" }
//     ]
//   },
//   double: {
//     text: `The double factorial ($n!!$) is the product of all integers from $1$ to $n$ that have the same parity (odd or even) as $n$. For example, $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$ and $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. Double factorials appear in combinatorial problems and calculus.`,
//     links: [
//       { title: "Learn more about Double Factorials", link: "/factorial" }
//     ]
//   },
//   sub: {
//     text: `The subfactorial ($!n$) counts the number of derangements of $n$ objects - permutations where no element appears in its original position. For example, $!3 = 2$ because there are $2$ ways to arrange $3$ items so none are in their original spots. Subfactorials are used in probability and combinatorics.`,
//     links: [
//       { title: "Learn more about Subfactorials", link: "/factorial" }
//     ]
//   },
//   multi: {
//     text: `The multifactorial ($n(k)!$) is a generalization where you multiply every $k$-th number. For example, with $k=3$, $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. When $k=1$ it's a regular factorial, $k=2$ is double factorial. Multifactorials extend factorial concepts to broader mathematical contexts.`,
//     links: [
//       { title: "Learn more about Multifactorials", link: "/factorial" }
//     ]
//   },
//   primorial: {
//     text: `The primorial ($n\\#$) is the product of all prime numbers less than or equal to $n$. For example, $10\\# = 2 \\times 3 \\times 5 \\times 7 = 210$. Primorials are important in number theory, particularly in studying prime number distributions and appear in various mathematical theorems.`,
//     links: [
//       { title: "Learn more about Primorials", link: "/factorial" }
//     ]
//   }
// };

// const detailInstructions = [
//   "Select the type of factorial you want to calculate (Basic, Double, Subfactorial, Multifactorial, or Primorial)",
//   "Enter your number n in the first input field",
//   "For Multifactorial, also enter the step value k in the second field",
//   "Click Calculate to see the result",
//   "Hover over ? icons for additional help"
// ];

// const keyWords = [
//   'factorial calculator',
//   'n factorial',
//   'factorial meaning',
//   'calculate factorial',
//   'factorial online',
//   '0 factorial',
//   'double factorial calculator',
//   'subfactorial calculator',
//   'multifactorial calculator',
//   'primorial calculator',
//   'factorial mathematics',
//   'factorial solver',
//   'free factorial calculator',
//   'factorial computation',
//   'factorial formula'
// ];

// const sectionsContent = {
//   obj1: {
//     title: `Getting Started with the Calculator`,
//     content: `The factorial calculator offers five different types at the top: **Basic (n!)**, **Double (n!!)**, **Subfactorial (!n)**, **Multifactorial (n(k)!)**, and **Primorial (n#)**. Start by clicking one of these radio buttons to select which type you want to calculate.

// For most calculations, you'll use **Basic (n!)**—the standard factorial that multiplies all numbers from $1$ to your number. Click this option and you'll see one input box asking for your number. Enter any whole number from $0$ upward.

// The other types are specialized: **Double** for even/odd sequences, **Subfactorial** for counting arrangements, **Multifactorial** for custom step sizes (requires two inputs), and **Primorial** for prime number products. Select the type that matches your problem.

// After entering your number (and $k$ value for multifactorial), click the blue **Calculate** button. Your result appears on the right side of the equals sign. Use **Reset** to clear everything and start over.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Using Basic Factorial`,
//     content: `**Basic (n!)** is the most common type. Select this radio button at the top, then enter a whole number in the box. Try $5$—click Calculate and see $120$ appear as the result because $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

// Start with small numbers to understand the pattern. Calculate $3!$ and get $6$ (because $3 \\times 2 \\times 1 = 6$). Then try $4!$ for $24$, $6!$ for $720$, and $7!$ for $5040$. Notice how quickly factorials grow—each new number multiplies the previous result.

// **Special case**: Enter $0$ and get $1$. This isn't a mistake—by mathematical definition, $0! = 1$. This convention makes many formulas work correctly. Similarly, $1! = 1$ because there's only one number to multiply.

// The calculator handles large numbers using scientific notation. Try $20!$ and see a result like $2.432902e+18$ (meaning $2.432902 \\times 10^{18}$ or about $2.4$ quintillion). For very large numbers, the calculator shows $e^{\\text{value}}$ format to represent the enormous result.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Calculating Double Factorials`,
//     content: `Select **Double (n!!)** when you need to multiply only even numbers or only odd numbers. This type skips every other number. For even inputs, it multiplies all even numbers; for odd inputs, it multiplies all odd numbers.

// Try $8!!$ by entering $8$ with Double selected. The result is $384$ because $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$. Notice it skips all odd numbers ($7, 5, 3, 1$). Each step goes down by $2$ instead of $1$.

// For odd numbers, try $7!!$ and get $105$ because $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. This skips all even numbers ($6, 4, 2$). The pattern depends on whether your starting number is even or odd.

// Small examples: $4!! = 4 \\times 2 = 8$, $5!! = 5 \\times 3 \\times 1 = 15$, $6!! = 6 \\times 4 \\times 2 = 48$. Double factorials appear in physics formulas, probability calculations, and certain mathematical sequences.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Working with Subfactorials`,
//     content: `**Subfactorial (!n)** counts arrangements where nothing stays in its original position—called derangements. Select this type and enter a number to see how many ways you can rearrange items so each one moves.

// Start with $!3$ (enter $3$ with Subfactorial selected). The result is $2$ because there are exactly $2$ ways to arrange three items $(A, B, C)$ so none stay in place: $(B, C, A)$ and $(C, A, B)$. Try placing each letter—neither arrangement leaves any letter in its original spot.

// Try $!4$ and get $9$. For four items, there are $9$ derangements out of the $24$ total arrangements (which is $4!$). The subfactorial is always less than the regular factorial because it counts only specific arrangements, not all of them.

// Examples: $!2 = 1$ (only one way to swap two items), $!5 = 44$, $!6 = 265$. Subfactorials are used in probability (like the "hat check problem") and combinatorics when calculating arrangements with restrictions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Understanding Multifactorial`,
//     content: `**Multifactorial (n(k)!)** lets you choose your step size. Instead of going down by $1$ (basic) or $2$ (double), you can go down by any number $k$. This option requires two inputs: $n$ (your starting number) and $k$ (your step size).

// Select Multifactorial and two boxes appear. Enter $10$ in the first box and $3$ in the second. Click Calculate to see $280$ because $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. Each step subtracts $3$: start at $10$, then $7$, then $4$, then $1$.

// When $k=1$, multifactorial equals basic factorial: $5(1)! = 5! = 120$. When $k=2$, it equals double factorial: $8(2)! = 8!! = 384$. Multifactorial generalizes both of these.

// Try $12$ with $k=4$: get $12(4)! = 12 \\times 8 \\times 4 = 384$. Or $9$ with $k=3$: get $9(3)! = 9 \\times 6 \\times 3 = 162$. Choose $k$ based on the pattern you need—it controls which numbers get multiplied together.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Computing Primorials`,
//     content: `**Primorial (n#)** multiplies only prime numbers up to $n$. Select this type and enter a number—the calculator finds all primes less than or equal to your number and multiplies them together.

// Try $10\\#$ by entering $10$ with Primorial selected. The result is $210$ because the primes up to $10$ are $2, 3, 5, 7$, and $2 \\times 3 \\times 5 \\times 7 = 210$. The calculator automatically identifies primes and skips composite numbers like $4, 6, 8, 9, 10$.

// Small examples: $5\\# = 2 \\times 3 \\times 5 = 30$, $7\\# = 2 \\times 3 \\times 5 \\times 7 = 210$, $11\\# = 2 \\times 3 \\times 5 \\times 7 \\times 11 = 2310$. Notice $7\\#$ and $10\\#$ are the same because there are no primes between $7$ and $10$.

// If you enter a prime number itself, it includes that prime. Try $13\\#$ and get $30030$ because it multiplies all primes up to and including $13$: $2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13 = 30030$. Primorials are used in number theory and studying prime distributions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `What Are Factorials`,
//     content: `A factorial takes a number and multiplies it by every positive whole number below it, all the way down to $1$. The symbol is an exclamation mark: $n!$ means "multiply $n$ by all smaller positive integers."

// For example, $4!$ means $4 \\times 3 \\times 2 \\times 1 = 24$. You start at $4$, multiply by $3$ to get $12$, multiply by $2$ to get $24$, multiply by $1$ (which doesn't change anything) to get $24$. Every step multiplies by the next smaller number.

// Factorials count **how many ways you can arrange things**. If you have $4$ books, there are $4! = 24$ different ways to order them on a shelf. First book has $4$ choices, second has $3$ remaining choices, third has $2$, last has $1$—multiply these together.

// **Why does 0! equal 1?** By definition, there's exactly one way to arrange zero items: do nothing. This might seem strange, but it makes mathematical formulas work correctly. Think of it as the "empty arrangement"—there's one way to arrange nothing.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `How Factorials Grow`,
//     content: `Factorials get big **extremely fast**. Look at this pattern: $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$, $7! = 5040$. Each new factorial multiplies the previous one by the next number. Going from $6!$ to $7!$ means multiplying $720$ by $7$.

// By $10!$ you reach $3,628,800$—over three million. By $15!$ you're at $1,307,674,368,000$—over a trillion. By $20!$ you hit $2,432,902,008,176,640,000$—that's $2.4$ quintillion. The numbers become so large that writing them fully is impractical.

// This rapid growth is why the calculator uses scientific notation for large results. When you see $1.234e+18$, that's $1.234 \\times 10^{18}$ or $1.234$ followed by $18$ more digits. For very large factorials (like $100!$), the calculator shows $e^{\\text{number}}$ format instead.

// **Practical limit**: Most real-world factorial problems use numbers under $20$. Calculating $70!$ gives a number with over $100$ digits. Only specialized applications (like cryptography or advanced statistics) work with such enormous factorials.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Simple Factorial Patterns`,
//     content: `**Multiplying factorials**: To go from one factorial to the next, just multiply by the next number. Since $5! = 120$, you know $6! = 120 \\times 6 = 720$. And $7! = 720 \\times 7 = 5040$. Each factorial builds on the previous one.

// **Dividing factorials**: When you divide factorials, numbers cancel. $\\frac{5!}{3!} = \\frac{5 \\times 4 \\times 3 \\times 2 \\times 1}{3 \\times 2 \\times 1} = 5 \\times 4 = 20$. The $3!$ cancels out, leaving only the top numbers. This simplifies many calculations.

// **Factorials in fractions**: The expression $\\frac{n!}{(n-2)!}$ equals $n \\times (n-1)$. Try with $5$: $\\frac{5!}{3!} = \\frac{120}{6} = 20 = 5 \\times 4$. This pattern appears in permutation formulas.

// **Zero factorial rule**: Remember $0! = 1$, not $0$. This makes formulas work: the binomial coefficient $\\binom{n}{0} = \\frac{n!}{0! \\times n!} = \\frac{n!}{1 \\times n!} = 1$. If $0!$ were $0$, you'd divide by zero and the formula would break.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Practice Problems to Try`,
//     content: `**Basic factorials**: Calculate $3!$, $6!$, and $9!$. Answers: $6$ (because $3 \\times 2 \\times 1 = 6$), $720$, and $362,880$. Verify each by multiplying all numbers from your starting point down to $1$.

// **Zero and one**: Find $0!$ and $1!$. Both equal $1$. Remember this special case—it's used constantly in formulas and calculations.

// **Double factorials**: Compute $6!!$ and $9!!$. Answers: $48$ (because $6 \\times 4 \\times 2 = 48$) and $945$ (because $9 \\times 7 \\times 5 \\times 3 \\times 1 = 945$). Even numbers give smaller results than odd numbers at the same starting point.

// **Subfactorials**: Find $!4$ and $!5$. Answers: $9$ and $44$. These count derangements—arrangements where nothing stays in place.

// **Primorials**: Calculate $12\\#$ and $15\\#$. Answers: $2310$ (multiply primes $2, 3, 5, 7, 11$) and $30030$ (multiply primes $2, 3, 5, 7, 11, 13$). List the primes first, then multiply.

// **Multifactorial**: Compute $15(5)!$ (step by $5$). Answer: $15 \\times 10 \\times 5 = 750$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj11: {
//     title: `Where Factorials Are Used`,
//     content: `**Counting arrangements**: If you have $5$ different books, there are $5! = 120$ ways to arrange them on a shelf. First position has $5$ choices, second has $4$ remaining, third has $3$, fourth has $2$, last has $1$. Multiply: $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

// **Probability calculations**: Drawing cards, rolling dice, or picking lottery numbers all use factorials. The number of ways to choose $3$ items from $10$ is $\\frac{10!}{3! \\times 7!} = 120$. This formula appears everywhere in probability.

// **Password combinations**: A $4$-digit PIN where no digit repeats has $10 \\times 9 \\times 8 \\times 7 = 5040$ possibilities—that's $\\frac{10!}{6!}$. Security systems use factorial calculations to measure password strength.

// **Tournament scheduling**: Arranging $8$ teams in a bracket uses factorial math. The number of possible matchup orders is related to $8!$, though the actual formula is more complex. Sports schedulers use these calculations.

// **Scientific formulas**: Factorials appear in Taylor series (calculus), Stirling's approximation (statistics), and binomial expansions (algebra). The function $e^x$ can be written as $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj12: {
//     title: `Related Calculators and Concepts`,
//     content: `**Combination Calculator** uses factorials to count selections. The formula for choosing $r$ items from $n$ is $\\frac{n!}{r!(n-r)!}$. This calculator helps you compute combinations without calculating each factorial separately.

// **Permutation Calculator** also uses factorials for counting arrangements where order matters. The formula $\\frac{n!}{(n-r)!}$ counts ways to arrange $r$ items from $n$ total items.

// **Binomial Coefficient** (written $\\binom{n}{k}$) equals $\\frac{n!}{k!(n-k)!}$ and appears in probability, Pascal's triangle, and the binomial theorem. Understanding factorials is essential for working with binomial coefficients.

// **Gamma Function** extends factorials to non-integer values. While regular factorials only work for whole numbers, the gamma function $\\Gamma(n) = (n-1)!$ works for any number. This appears in advanced calculus and statistics.

// For deeper learning, explore permutations and combinations, probability theory, binomial theorem, and how factorials appear in mathematical series and approximations.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };

// const faqQuestions = {
//   obj1: {
//     question: "What is a factorial and how do you calculate it?",
//     answer: "A factorial (written as n!) is the product of all positive integers from 1 to n. To calculate 5!, multiply 5 × 4 × 3 × 2 × 1 = 120. Use this calculator by entering your number, selecting Basic (n!) type, and clicking Calculate. The result appears instantly."
//   },
//   obj2: {
//     question: "Why does 0! equal 1?",
//     answer: "By mathematical definition, 0! = 1. This convention ensures formulas work correctly. Think of it as counting arrangements: there's exactly one way to arrange zero items (do nothing). This definition makes binomial coefficients, permutations, and many other formulas function properly without special cases."
//   },
//   obj3: {
//     question: "What's the difference between n! and n!!?",
//     answer: "n! (factorial) multiplies all numbers from n down to 1: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720. n!! (double factorial) multiplies every other number: 6!! = 6 × 4 × 2 = 48 (even numbers only). Double factorial skips alternating values based on whether n is even or odd."
//   },
//   obj4: {
//     question: "How large can factorials get?",
//     answer: "Factorials grow extremely fast. 10! = 3,628,800, 20! ≈ 2.4 × 10^18, and 100! has 158 digits. This calculator handles large factorials using scientific notation (like 1.234e+18) or exponential format (e^value) for very large numbers. Most practical applications use factorials under 20."
//   },
//   obj5: {
//     question: "What is a subfactorial and when is it used?",
//     answer: "A subfactorial (!n) counts derangements—arrangements where no item stays in its original position. For example, !3 = 2 because there are 2 ways to arrange 3 items so none are in their original spots. Subfactorials are used in probability problems like the hat-check problem or secret Santa arrangements."
//   }
// };

// const schemas = {
//   webApplication: {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     "name": "Factorial Calculator - Calculate n!, n!!, !n, n(k)!, n#",
//     "description": "Free online factorial calculator supporting basic factorial, double factorial, subfactorial, multifactorial, and primorial calculations. Instant results with explanations.",
//     "url": "https://www.learnmathclass.com/calculators/factorial-calculator",
//     "applicationCategory": "EducationalApplication",
//     "operatingSystem": "Any",
//     "offers": {
//       "@type": "Offer",
//       "price": "0",
//       "priceCurrency": "USD"
//     },
//     "featureList": [
//       "Basic factorial (n!) calculation",
//       "Double factorial (n!!) computation",
//       "Subfactorial (!n) for derangements",
//       "Multifactorial (n(k)!) with custom steps",
//       "Primorial (n#) prime number products",
//       "Large number support with scientific notation",
//       "Instant calculation results",
//       "Educational explanations for each type"
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
//     "educationalLevel": "Middle School, High School, College",
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
//         "name": "Factorial Calculator",
//         "item": "https://www.learnmathclass.com/calculators/factorial-calculator"
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

// return {
//   props: {
//     seoData: {
//       title: "Factorial Calculator | Calculate n!, n!!, !n, n(k)! & n# Online",
//       description: "Free factorial calculator for basic, double, subfactorial, multifactorial and primorial. Calculate factorials instantly with step-by-step explanations and examples.",
//       keywords: keyWords.join(", "),
//       url: "/calculators/factorial-calculator",
//       name: "Factorial Calculator - Multiple Factorial Types"
//     },
//     keyWords,
//     navigationGroup,
//     factorialActualExplanations,
//     detailInstructions,
//     sectionsContent,
//     faqQuestions,
//     schemas
//   }
// }
// }

// export default function FactorialCalculatorPage({ seoData, keyWords, navigationGroup, factorialActualExplanations, detailInstructions, sectionsContent, faqQuestions, schemas}) {

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
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
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
//         grid-template-columns: 15% 85%;
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
//     <OperaSidebar
//       side='right'
//       topOffset='55px'
//       sidebarWidth='45px'
//       panelWidth='300px'
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'
//     />
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Factorial Calculator</h1>
//     <div style={{marginBottom:'20px'}}>
//       <ExplanationDetails 
//         instructions={detailInstructions}
//         title='How to use Factorial Calculator'
//       />
//     </div>
    
//     <div className="layout-container">
//       <div>
//         <br/>
//         <VerticalButtonGroup 
//           items={navigationGroup}
//           width="250px"       
//           theme='lightBlue'
//           isSticky={true}
//           verticalOffset='200px'
//         />
//       </div>

//       <div>
//         <div style={{width:'100%',margin:'auto'}}>
//           <FactorialCalculator
//             explanations={factorialActualExplanations}
//           />
//           <br/>
//         </div>
//       </div>
//     </div>

//     <br/>
//     <SectionTableOfContents sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <Sections sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//   </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import React from 'react'
import '../../pages.css'
import FactorialCalculator from '@/app/components/calculators/arithmetics/FactorialCalculator'
import Head from 'next/head'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

/* calculators-mesh: finished 2026-10-13 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "C:/Program Files/Git/calculators/factorial-calculator" in calculators-mesh-registry.json (same folder): 6 usage sections, each with a demo; 5 panel texts with anchors; 16 sections with fixed slug ids.
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
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]

const factorialActualExplanations = {
  basic: {
    text: `The basic factorial ($n!$) is the product of all positive integers less than or equal to $n$. For example, $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. By convention, $0! = 1$. Factorials grow extremely rapidly and are fundamental in combinatorics, probability, and algebra. [Learn more about factorials](!#what-are-factorials)`,
    // links: [
    //   // { title: "Learn more about Factorials", link: "/factorial" }
    // ]
  },
  double: {
    text: `The double factorial ($n!!$) is the product of all integers from $1$ to $n$ that have the same parity (odd or even) as $n$. For example, $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$ and $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. Double factorials appear in combinatorial problems and calculus. [Learn more about double factorials](!#double-factorials)`,
    // links: [
    //   // { title: "Learn more about Double Factorials", link: "/factorial" }
    // ]
  },
  sub: {
    text: `The subfactorial ($!n$) counts the number of derangements of $n$ objects - permutations where no element appears in its original position. For example, $!3 = 2$ because there are $2$ ways to arrange $3$ items so none are in their original spots. Subfactorials are used in probability and combinatorics. [Learn more about subfactorials](!#subfactorials-and-derangements)`,
    // links: [
    //   // { title: "Learn more about Subfactorials", link: "/factorial" }
    // ]
  },
  multi: {
    text: `The multifactorial ($n(k)!$) is a generalization where you multiply every $k$-th number. For example, with $k=3$, $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. When $k=1$ it's a regular factorial, $k=2$ is double factorial. Multifactorials extend factorial concepts to broader mathematical contexts. [Learn more about multifactorials](!#multifactorials)`,
    // links: [
    //   // { title: "Learn more about Multifactorials", link: "/factorial" }
    // ]
  },
  primorial: {
    text: `The primorial ($n\\#$) is the product of all prime numbers less than or equal to $n$. For example, $10\\# = 2 \\times 3 \\times 5 \\times 7 = 210$. Primorials are important in number theory, particularly in studying prime number distributions and appear in various mathematical theorems. [Learn more about primorials](!#primorials)`,
    // links: [
    //   // { title: "Learn more about Primorials", link: "/factorial" }
    // ]
  }
};

const detailInstructions = [
  `Pick the type with the five buttons at the top: **Basic (n!)**, **Double (n!!)**, **Subfactorial (!n)**, **Multifactorial (n(k)!)** or **Primorial (n#)**. [Learn more about the types](!#getting-started-with-the-calculator)`,
  `Type a whole number from 0 upward in the **n** box. [Learn more about the number n](!#using-basic-factorial)`,
  `For Multifactorial only, type the step size in the **k** box that appears. [Learn more about the step k](!#understanding-multifactorial)`,
  `Click **Calculate**. The result appears after the equals sign; results beyond 21 digits switch to scientific notation. [Learn more about results](!#getting-started-with-the-calculator)`,
  `The panel under the form explains the chosen type, and its link opens the section below that treats it in full. Hover over a **?** icon for a short hint. [Learn more about the panel](!#getting-started-with-the-calculator)`,
  `Click **Reset** to clear the boxes and the result and return to Basic. A red message replaces the result when n is negative or not a number. [Learn more about messages](!#getting-started-with-the-calculator)`,
];

const demos = {
  'getting-started-with-the-calculator': {
    title: 'Pick a type, calculate, reset',
    script: [
      { say: 'CLICK Double (n!!)\nThe panel switches to double factorials.', at: 'tr' },
      { click: 'input[type=radio][value=double]' },
      { wait: 2000 },
      { say: 'TYPE 6 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '6' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n6!! = 6 × 4 × 2 = 48.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'CLICK Reset\nBoxes and result cleared.\nBack to Basic (n!).', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'using-basic-factorial': {
    title: 'Basic factorials, small and large',
    script: [
      { say: 'TYPE 5 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '5' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n5! = 5 × 4 × 3 × 2 × 1 = 120.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 20 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '20' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n20! = 2432902008176640000, printed in full.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'TYPE 25 and CLICK Calculate\nBeyond 21 digits: scientific notation, 1.5511…e+25.', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '25' },
      { click: { button: 'Calculate' } },
      { wait: 2800 },
    ],
  },
  'calculating-double-factorials': {
    title: 'Even and odd double factorials',
    script: [
      { say: 'CLICK Double (n!!)', at: 'tr' },
      { click: 'input[type=radio][value=double]' },
      { wait: 1800 },
      { say: 'TYPE 8 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '8' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n8!! = 8 × 6 × 4 × 2 = 384.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 7 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '7' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n7!! = 7 × 5 × 3 × 1 = 105.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'working-with-subfactorials': {
    title: 'Counting derangements',
    script: [
      { say: 'CLICK Subfactorial (!n)', at: 'tr' },
      { click: 'input[type=radio][value=sub]' },
      { wait: 1800 },
      { say: 'TYPE 3 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '3' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n!3 = 2: two ways to move every item.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 4 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '4' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n!4 = 9 of the 24 arrangements.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'understanding-multifactorial': {
    title: 'A step size of your own',
    script: [
      { say: 'CLICK Multifactorial (n(k)!)\nA second box for k appears.', at: 'tr' },
      { click: 'input[type=radio][value=multi]' },
      { wait: 2000 },
      { say: 'TYPE 10 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '10' },
      { wait: 1500 },
      { say: 'TYPE 3 as k', at: 'tr' },
      { set: 'input[placeholder="Enter k"]', value: '3' },
      { wait: 1500 },
      { say: 'CLICK Calculate\n10(3)! = 10 × 7 × 4 × 1 = 280.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 4 as k and CLICK Calculate\n10(4)! = 10 × 6 × 2 = 120.', at: 'tr' },
      { set: 'input[placeholder="Enter k"]', value: '4' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'computing-primorials': {
    title: 'Products of primes',
    script: [
      { say: 'CLICK Primorial (n#)', at: 'tr' },
      { click: 'input[type=radio][value=primorial]' },
      { wait: 1800 },
      { say: 'TYPE 10 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '10' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n10# = 2 × 3 × 5 × 7 = 210.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 13 as n', at: 'tr' },
      { set: 'input[placeholder="Enter n"]', value: '13' },
      { wait: 1600 },
      { say: 'CLICK Calculate\n13# = 2 × 3 × 5 × 7 × 11 × 13 = 30030.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
};

const keyWords = [
  'factorial calculator',
  'n factorial',
  'factorial meaning',
  'calculate factorial',
  'factorial online',
  '0 factorial',
  'double factorial calculator',
  'subfactorial calculator',
  'multifactorial calculator',
  'primorial calculator',
  'factorial mathematics',
  'factorial solver',
  'free factorial calculator',
  'factorial computation',
  'factorial formula'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Calculator`,
    content: `The factorial calculator offers five different types at the top: **Basic (n!)**, **Double (n!!)**, **Subfactorial (!n)**, **Multifactorial (n(k)!)**, and **Primorial (n#)**. Start by clicking one of these radio buttons to select which type you want to calculate.

For most calculations, you'll use **Basic (n!)**—the standard factorial that multiplies all numbers from $1$ to your number. Click this option and you'll see one input box asking for your number. Enter any whole number from $0$ upward.

The other types are specialized: **Double** for even/odd sequences, **Subfactorial** for counting arrangements, **Multifactorial** for custom step sizes (requires two inputs), and **Primorial** for prime number products. Select the type that matches your problem.

After entering your number (and $k$ value for multifactorial), click the blue **Calculate** button. Your result appears on the right side of the equals sign, for example $6!! = 48$ with Double selected. The panel under the form explains the chosen type, and a **?** icon next to each box shows a hint. Use **Reset** to clear everything, return to Basic and start over; a red message such as **Error: Invalid input** replaces the result when $n$ is negative or not a number. What a factorial is, and why $0! = 1$, is explained in [what are factorials](!#what-are-factorials).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Basic Factorial`,
    content: `**Basic (n!)** is the most common type. Select this radio button at the top, then enter a whole number in the box. Try $5$—click Calculate and see $120$ appear as the result because $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

Start with small numbers to understand the pattern. Calculate $3!$ and get $6$ (because $3 \\times 2 \\times 1 = 6$). Then try $4!$ for $24$, $6!$ for $720$, and $7!$ for $5040$. Notice how quickly factorials grow—each new number multiplies the previous result.

**Special case**: Enter $0$ and get $1$. This isn't a mistake—by mathematical definition, $0! = 1$. This convention makes many formulas work correctly. Similarly, $1! = 1$ because there's only one number to multiply.

The calculator prints results up to $21$ digits in full: $20! = 2432902008176640000$, about $2.4$ quintillion. Longer results switch to scientific notation, so $25!$ appears as $1.5511210043330985984e+25$, meaning $1.5511 \\times 10^{25}$. Beyond $170!$ the calculator shows the result as a power of $e$, such as $e^{\\text{value}}$. How fast the numbers grow is shown in [how factorials grow](!#how-factorials-grow).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Calculating Double Factorials`,
    content: `Select **Double (n!!)** when you need to multiply only even numbers or only odd numbers. This type skips every other number. For even inputs, it multiplies all even numbers; for odd inputs, it multiplies all odd numbers.

Try $8!!$ by entering $8$ with Double selected. The result is $384$ because $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$. Notice it skips all odd numbers ($7, 5, 3, 1$). Each step goes down by $2$ instead of $1$.

For odd numbers, try $7!!$ and get $105$ because $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. This skips all even numbers ($6, 4, 2$). The pattern depends on whether your starting number is even or odd.

Small examples: $4!! = 4 \\times 2 = 8$, $5!! = 5 \\times 3 \\times 1 = 15$, $6!! = 6 \\times 4 \\times 2 = 48$. Double factorials appear in physics formulas, probability calculations, and certain mathematical sequences. The definition and the link to ordinary factorials are in [double factorials](!#double-factorials).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Working with Subfactorials`,
    content: `**Subfactorial (!n)** counts arrangements where nothing stays in its original position—called derangements. Select this type and enter a number to see how many ways you can rearrange items so each one moves.

Start with $!3$ (enter $3$ with Subfactorial selected). The result is $2$ because there are exactly $2$ ways to arrange three items $(A, B, C)$ so none stay in place: $(B, C, A)$ and $(C, A, B)$. Try placing each letter—neither arrangement leaves any letter in its original spot.

Try $!4$ and get $9$. For four items, there are $9$ derangements out of the $24$ total arrangements (which is $4!$). The subfactorial is always less than the regular factorial because it counts only specific arrangements, not all of them.

Examples: $!2 = 1$ (only one way to swap two items), $!5 = 44$, $!6 = 265$. Subfactorials are used in probability (like the "hat check problem") and combinatorics when calculating arrangements with restrictions. The formula behind the count is in [subfactorials and derangements](!#subfactorials-and-derangements).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding Multifactorial`,
    content: `**Multifactorial (n(k)!)** lets you choose your step size. Instead of going down by $1$ (basic) or $2$ (double), you can go down by any number $k$. This option requires two inputs: $n$ (your starting number) and $k$ (your step size).

Select Multifactorial and two boxes appear. Enter $10$ in the first box and $3$ in the second. Click Calculate to see $280$ because $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. Each step subtracts $3$: start at $10$, then $7$, then $4$, then $1$.

When $k=1$, multifactorial equals basic factorial: $5(1)! = 5! = 120$. When $k=2$, it equals double factorial: $8(2)! = 8!! = 384$. Multifactorial generalizes both of these.

Try $12$ with $k=4$: get $12(4)! = 12 \\times 8 \\times 4 = 384$. Or $9$ with $k=3$: get $9(3)! = 9 \\times 6 \\times 3 = 162$, and $10$ with $k=4$: $10(4)! = 10 \\times 6 \\times 2 = 120$. Choose $k$ based on the pattern you need—it controls which numbers get multiplied together. Where the product stops is explained in [multifactorials](!#multifactorials).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Computing Primorials`,
    content: `**Primorial (n#)** multiplies only prime numbers up to $n$. Select this type and enter a number—the calculator finds all primes less than or equal to your number and multiplies them together.

Try $10\\#$ by entering $10$ with Primorial selected. The result is $210$ because the primes up to $10$ are $2, 3, 5, 7$, and $2 \\times 3 \\times 5 \\times 7 = 210$. The calculator automatically identifies primes and skips composite numbers like $4, 6, 8, 9, 10$.

Small examples: $5\\# = 2 \\times 3 \\times 5 = 30$, $7\\# = 2 \\times 3 \\times 5 \\times 7 = 210$, $11\\# = 2 \\times 3 \\times 5 \\times 7 \\times 11 = 2310$. Notice $7\\#$ and $10\\#$ are the same because there are no primes between $7$ and $10$.

If you enter a prime number itself, it includes that prime. Try $13\\#$ and get $30030$ because it multiplies all primes up to and including $13$: $2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13 = 30030$. Primorials are used in number theory and studying prime distributions, as explained in [primorials](!#primorials).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Factorials`,
    content: `A factorial takes a number and multiplies it by every positive whole number below it, all the way down to $1$. The symbol is an exclamation mark: $n!$ means "multiply $n$ by all smaller positive integers."

For example, $4!$ means $4 \\times 3 \\times 2 \\times 1 = 24$. You start at $4$, multiply by $3$ to get $12$, multiply by $2$ to get $24$, multiply by $1$ (which doesn't change anything) to get $24$. Every step multiplies by the next smaller number.

Factorials count **how many ways you can arrange things**. If you have $4$ books, there are $4! = 24$ different ways to order them on a shelf. First book has $4$ choices, second has $3$ remaining choices, third has $2$, last has $1$—multiply these together.

**Why does 0! equal 1?** By definition, there's exactly one way to arrange zero items: do nothing. This might seem strange, but it makes mathematical formulas work correctly. Think of it as the "empty arrangement"—there's one way to arrange nothing.

In the calculator this is the **Basic (n!)** type. Counting arrangements is the subject of [permutation (full)](!/combinatorics/permutations#full), and the reason the choices multiply is [the multiplication rule](!/combinatorics/counting-principles#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `How Factorials Grow`,
    content: `Factorials get big **extremely fast**. Look at this pattern: $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$, $7! = 5040$. Each new factorial multiplies the previous one by the next number. Going from $6!$ to $7!$ means multiplying $720$ by $7$.

By $10!$ you reach $3,628,800$—over three million. By $15!$ you're at $1,307,674,368,000$—over a trillion. By $20!$ you hit $2,432,902,008,176,640,000$—that's $2.4$ quintillion. The numbers become so large that writing them fully is impractical.

This rapid growth is why the calculator switches to scientific notation once a result passes $21$ digits. When you see $1.5511e+25$, that's $1.5511 \\times 10^{25}$: $1.5511$ followed by $21$ more digits. Beyond $170!$ the calculator shows $e^{\\text{number}}$ format instead.

**Practical limit**: Most real-world factorial problems use numbers under $20$. Calculating $70!$ gives a number with over $100$ digits. Only specialized applications (like cryptography or advanced statistics) work with such enormous factorials. The count that grows this fast, the number of orderings of $n$ items, is explained in [permutation (full)](!/combinatorics/permutations#full).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Simple Factorial Patterns`,
    content: `**Multiplying factorials**: To go from one factorial to the next, just multiply by the next number. Since $5! = 120$, you know $6! = 120 \\times 6 = 720$. And $7! = 720 \\times 7 = 5040$. Each factorial builds on the previous one.

**Dividing factorials**: When you divide factorials, numbers cancel. $\\frac{5!}{3!} = \\frac{5 \\times 4 \\times 3 \\times 2 \\times 1}{3 \\times 2 \\times 1} = 5 \\times 4 = 20$. The $3!$ cancels out, leaving only the top numbers. This simplifies many calculations.

**Factorials in fractions**: The expression $\\frac{n!}{(n-2)!}$ equals $n \\times (n-1)$. Try with $5$: $\\frac{5!}{3!} = \\frac{120}{6} = 20 = 5 \\times 4$. This pattern appears in permutation formulas.

**Zero factorial rule**: Remember $0! = 1$, not $0$. This makes formulas work: the binomial coefficient $\\binom{n}{0} = \\frac{n!}{0! \\times n!} = \\frac{n!}{1 \\times n!} = 1$. If $0!$ were $0$, you'd divide by zero and the formula would break. The quotient $\\frac{n!}{(n-r)!}$ is the subject of [partial permutation without repetition](!/combinatorics/permutations#without), and the binomial coefficient of [its definition](!/combinatorics/binomial-coefficient#1).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Practice Problems to Try`,
    content: `**Basic factorials**: Calculate $3!$, $6!$, and $9!$. Answers: $6$ (because $3 \\times 2 \\times 1 = 6$), $720$, and $362,880$. Verify each by multiplying all numbers from your starting point down to $1$.

**Zero and one**: Find $0!$ and $1!$. Both equal $1$. Remember this special case—it's used constantly in formulas and calculations.

**Double factorials**: Compute $6!!$ and $9!!$. Answers: $48$ (because $6 \\times 4 \\times 2 = 48$) and $945$ (because $9 \\times 7 \\times 5 \\times 3 \\times 1 = 945$). Even numbers give smaller results than odd numbers at the same starting point.

**Subfactorials**: Find $!4$ and $!5$. Answers: $9$ and $44$. These count derangements—arrangements where nothing stays in place.

**Primorials**: Calculate $12\\#$ and $15\\#$. Answers: $2310$ (multiply primes $2, 3, 5, 7, 11$) and $30030$ (multiply primes $2, 3, 5, 7, 11, 13$). List the primes first, then multiply.

**Multifactorial**: Compute $15(5)!$ (step by $5$). Answer: $15 \\times 10 \\times 5 = 750$. More counting problems with full solutions are in [derangement](!/combinatorics/permutations#8) and [permutations and combinations](!/combinatorics/basics#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Where Factorials Are Used`,
    content: `**Counting arrangements**: If you have $5$ different books, there are $5! = 120$ ways to arrange them on a shelf. First position has $5$ choices, second has $4$ remaining, third has $3$, fourth has $2$, last has $1$. Multiply: $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

**Probability calculations**: Drawing cards, rolling dice, or picking lottery numbers all use factorials. The number of ways to choose $3$ items from $10$ is $\\frac{10!}{3! \\times 7!} = 120$. This formula appears everywhere in probability.

**Password combinations**: A $4$-digit PIN where no digit repeats has $10 \\times 9 \\times 8 \\times 7 = 5040$ possibilities—that's $\\frac{10!}{6!}$. Security systems use factorial calculations to measure password strength.

**Tournament scheduling**: Arranging $8$ teams in a bracket uses factorial math. The number of possible matchup orders is related to $8!$, though the actual formula is more complex. Sports schedulers use these calculations.

**Scientific formulas**: Factorials appear in Taylor series (calculus), Stirling's approximation (statistics), and binomial expansions (algebra). The function $e^x$ can be written as $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$ The selections are counted in [simple combinations](!/combinatorics/combinations#combinations), the PIN count in [partial permutation without repetition](!/combinatorics/permutations#without), and the series in [higher-order derivatives and Taylor series](!/calculus/derivatives/higher-order#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Related Calculators and Concepts`,
    content: `**Combination Calculator** uses factorials to count selections. The formula for choosing $r$ items from $n$ is $\\frac{n!}{r!(n-r)!}$. This calculator helps you compute combinations without calculating each factorial separately.

**Permutation Calculator** also uses factorials for counting arrangements where order matters. The formula $\\frac{n!}{(n-r)!}$ counts ways to arrange $r$ items from $n$ total items.

**Binomial Coefficient** (written $\\binom{n}{k}$) equals $\\frac{n!}{k!(n-k)!}$ and appears in probability, Pascal's triangle, and the binomial theorem. Understanding factorials is essential for working with binomial coefficients.

**Gamma Function** extends factorials to non-integer values. While regular factorials only work for whole numbers, the gamma function $\\Gamma(n) = (n-1)!$ works for any number. This appears in advanced calculus and statistics.

For deeper learning, explore permutations and combinations, probability theory, binomial theorem, and how factorials appear in mathematical series and approximations.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Double Factorials`,
    content: `The double factorial $n!!$ multiplies $n$ by every second number below it, down to $2$ or $1$: $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$ and $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. An even $n$ collects the even numbers, an odd $n$ the odd ones. By convention $0!! = 1$ and $(-1)!! = 1$.

The two kinds fit together: $n! = n!! \\times (n-1)!!$, so $8! = 8!! \\times 7!! = 384 \\times 105 = 40320$. For an even number there is a closed form, $(2k)!! = 2^k \\times k!$: $8!! = 2^4 \\times 4! = 16 \\times 24 = 384$. For an odd number, $(2k+1)!! = \\frac{(2k+1)!}{2^k \\times k!}$: $7!! = \\frac{5040}{16 \\times 3} = 105$.

Double factorials count the ways to pair up $2k$ objects, $(2k-1)!!$, and appear in the integrals of powers of sine and cosine. The common mistake is to read $n!!$ as $(n!)!$: $3!!$ is $3 \\times 1 = 3$, while $(3!)! = 6! = 720$.

The notation is listed in [permutation notation](!/combinatorics/permutations#notation).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Subfactorials and Derangements`,
    content: `The subfactorial $!n$ counts the derangements of $n$ objects: the arrangements in which no object stays in its own place. For three letters $A, B, C$ there are $3! = 6$ arrangements, and only $(B, C, A)$ and $(C, A, B)$ move every letter, so $!3 = 2$.

The formula comes from inclusion and exclusion: $!n = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots \\pm \\frac{1}{n!}\\right)$. For $n = 4$: $24 \\left(1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24}\\right) = 24 \\times \\frac{9}{24} = 9$. A quicker recurrence is $!n = (n-1)\\left(!(n-1) + !(n-2)\\right)$: $!5 = 4 \\times (9 + 2) = 44$. The first values are $!1 = 0$, $!2 = 1$, $!3 = 2$, $!4 = 9$, $!5 = 44$, $!6 = 265$.

The bracket converges to $1/e$, so $!n$ is the integer nearest to $n!/e$: $24 / 2.71828 \\approx 8.83$, which rounds to $9$. That is the hat-check result: when $n$ people take hats at random, the chance that nobody gets their own is about $1/e \\approx 0.3679$, whatever $n$ is. The common mistake is to expect $!n$ to be a fixed fraction of $n!$ that shrinks; it settles near $0.37$.

See [derangement](!/combinatorics/permutations#8) and [application: counting derangements](!/combinatorics/inclusion-exclusion#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Multifactorials`,
    content: `The multifactorial $n(k)!$, also written $n!^{(k)}$ or with $k$ exclamation marks, multiplies $n$ by every $k$-th number below it while the factor stays positive: $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$, $12(4)! = 12 \\times 8 \\times 4 = 384$, $9(3)! = 9 \\times 6 \\times 3 = 162$.

The product stops at the last factor above $0$: from $9$ in steps of $3$ the next factor would be $0$, so the product ends at $3$; from $10$ it ends at $1$. The ordinary factorial is the case $k = 1$ and the double factorial the case $k = 2$: $5(1)! = 120$ and $8(2)! = 8!! = 384$.

Multifactorials appear when a product skips a fixed number of terms, for example in the coefficients of certain series and in counting problems that pair, triple or group objects in a cycle. The common mistake is to include $0$ or a negative factor and get $0$; the product never goes below $1$. The step $k$ must be a positive whole number; the calculator refuses other values with **Error: Invalid k value**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Primorials`,
    content: `The primorial $n\\#$ is the product of all prime numbers up to $n$: $10\\# = 2 \\times 3 \\times 5 \\times 7 = 210$, $13\\# = 2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13 = 30030$. Composite numbers are skipped, so the primorial changes only when $n$ reaches a new prime: $7\\#$, $8\\#$, $9\\#$ and $10\\#$ are all $210$.

Primorials grow much more slowly than factorials, $10! = 3628800$ against $10\\# = 210$, because only the primes contribute. They are the smallest numbers divisible by every prime up to $n$, which makes them useful as moduli in sieves and in Euclid's argument that the primes never end: $n\\# + 1$ is divisible by no prime up to $n$, so a larger prime must exist.

The common mistake is to multiply every number up to $n$, which is $n!$, or to leave out $2$ because it is even; $2$ is prime and always the first factor. The calculator tests each number for primality before multiplying, so the result is exact up to $1000\\#$ and shown as a power of $e$ beyond that.

Primes and their products are introduced in [prime numbers](!/arithmetic/divisibility#7) and [prime factorization](!/arithmetic/divisibility#8).`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is a factorial and how do you calculate it?",
    answer: "A factorial (written as n!) is the product of all positive integers from 1 to n. To calculate 5!, multiply 5 × 4 × 3 × 2 × 1 = 120. Use this calculator by entering your number, selecting Basic (n!) type, and clicking Calculate. The result appears instantly."
  },
  obj2: {
    question: "Why does 0! equal 1?",
    answer: "By mathematical definition, 0! = 1. This convention ensures formulas work correctly. Think of it as counting arrangements: there's exactly one way to arrange zero items (do nothing). This definition makes binomial coefficients, permutations, and many other formulas function properly without special cases."
  },
  obj3: {
    question: "What's the difference between n! and n!!?",
    answer: "n! (factorial) multiplies all numbers from n down to 1: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720. n!! (double factorial) multiplies every other number: 6!! = 6 × 4 × 2 = 48 (even numbers only). Double factorial skips alternating values based on whether n is even or odd."
  },
  obj4: {
    question: "How large can factorials get?",
    answer: "Factorials grow extremely fast. 10! = 3,628,800, 20! ≈ 2.4 × 10^18, and 100! has 158 digits. This calculator handles large factorials using scientific notation (like 1.234e+18) or exponential format (e^value) for very large numbers. Most practical applications use factorials under 20."
  },
  obj5: {
    question: "What is a subfactorial and when is it used?",
    answer: "A subfactorial (!n) counts derangements—arrangements where no item stays in its original position. For example, !3 = 2 because there are 2 ways to arrange 3 items so none are in their original spots. Subfactorials are used in probability problems like the hat-check problem or secret Santa arrangements."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Factorial Calculator - Calculate n!, n!!, !n, n(k)!, n#",
    "description": "Free online factorial calculator supporting basic factorial, double factorial, subfactorial, multifactorial, and primorial calculations. Instant results with explanations.",
    "url": "https://www.learnmathclass.com/calculators/factorial-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Basic factorial (n!) calculation",
      "Double factorial (n!!) computation",
      "Subfactorial (!n) for derangements",
      "Multifactorial (n(k)!) with custom steps",
      "Primorial (n#) prime number products",
      "Large number support with scientific notation",
      "Instant calculation results",
      "Educational explanations for each type"
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
    "educationalLevel": "Middle School, High School, College",
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
        "name": "Calculators",
        "item": "https://www.learnmathclass.com/calculators"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Factorial Calculator",
        "item": "https://www.learnmathclass.com/calculators/factorial-calculator"
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

return {
  props: {
    seoData: {
      title: "Factorial Calculator | Calculate n!, n!!, !n, n(k)! & n# Online",
      description: "Free factorial calculator for basic, double, subfactorial, multifactorial and primorial. Calculate factorials instantly with step-by-step explanations and examples.",
      keywords: keyWords.join(", "),
      url: "/calculators/factorial-calculator",
      name: "Factorial Calculator - Multiple Factorial Types"
    },
    keyWords,
    navigationGroup,
    factorialActualExplanations,
    detailInstructions,
    demos,
    sectionsContent,
    faqQuestions,
    schemas
  }
}
}

export default function FactorialCalculatorPage({ seoData, keyWords, navigationGroup, factorialActualExplanations, detailInstructions, demos, sectionsContent, faqQuestions, schemas}) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.6}
    minHeight={327}
    renderText={processContent}
  >
    <FactorialCalculator explanations={factorialActualExplanations} />
  </ToolDemoPlayer>
);

const genericSections = [
  {
    id: 'getting-started-with-the-calculator',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [demoPlayer('getting-started-with-the-calculator'), sectionsContent.obj1.content],
  },
  {
    id: 'using-basic-factorial',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('using-basic-factorial'), sectionsContent.obj2.content],
  },
  {
    id: 'calculating-double-factorials',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('calculating-double-factorials'), sectionsContent.obj3.content],
  },
  {
    id: 'working-with-subfactorials',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [demoPlayer('working-with-subfactorials'), sectionsContent.obj4.content],
  },
  {
    id: 'understanding-multifactorial',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [demoPlayer('understanding-multifactorial'), sectionsContent.obj5.content],
  },
  {
    id: 'computing-primorials',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('computing-primorials'), sectionsContent.obj6.content],
  },
  {
    id: 'what-are-factorials',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'double-factorials',
    title: sectionsContent.obj13.title,
    link: sectionsContent.obj13.link,
    content: [sectionsContent.obj13.content],
  },
  {
    id: 'subfactorials-and-derangements',
    title: sectionsContent.obj14.title,
    link: sectionsContent.obj14.link,
    content: [sectionsContent.obj14.content],
  },
  {
    id: 'multifactorials',
    title: sectionsContent.obj15.title,
    link: sectionsContent.obj15.link,
    content: [sectionsContent.obj15.content],
  },
  {
    id: 'primorials',
    title: sectionsContent.obj16.title,
    link: sectionsContent.obj16.link,
    content: [sectionsContent.obj16.content],
  },
  {
    id: 'how-factorials-grow',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'simple-factorial-patterns',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
  },
  {
    id: 'practice-problems-to-try',
    title: sectionsContent.obj10.title,
    link: sectionsContent.obj10.link,
    content: [sectionsContent.obj10.content],
  },
  {
    id: 'where-factorials-are-used',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [sectionsContent.obj11.content],
  },
  {
    id: 'related-calculators-and-concepts',
    title: sectionsContent.obj12.title,
    link: sectionsContent.obj12.link,
    content: [sectionsContent.obj12.content],
  },
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
        grid-template-columns: 15% 85%;
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
    <br/>
    <br/>
    <OperaSidebar
      side='right'
      topOffset='55px'
      sidebarWidth='45px'
      panelWidth='300px'
      iconColor='white'
      panelBackgroundColor='#f2f2f2'
    />
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Factorial Calculator</h1>
   <br/>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails 
        instructions={detailInstructions}
        title='How to use Factorial Calculator'
      />
    </div>
    
    <div className="layout-container">
      <div>
        <br/>
        <VerticalButtonGroup 
          items={navigationGroup}
          width="250px"       
          theme='lightBlue'
          isSticky={true}
          verticalOffset='200px'
        />
      </div>

      <div>
        <div style={{width:'100%',margin:'auto'}}>
          <div style={{transform:'scale(0.95)'}}>
            <FactorialCalculator
              explanations={factorialActualExplanations}
            />
          </div> 
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>

    <br/>
    <SectionTableOfContents sections={genericSections}/>
    <br/>
    <br/>
    <br/>
    <Sections sections={genericSections}/>
    <br/>
    <br/>
    <br/>
  </>
  )
}