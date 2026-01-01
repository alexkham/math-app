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
// // // //    <h1 className='title' style={{marginTop:'-30px',marginBottom:'10px' }}>Factorial Calculator</h1>
   
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
// // //     <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Factorial Calculator</h1>
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
// //     <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Factorial Calculator</h1>
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
//     <h1 className='title' style={{marginTop:'-30px',marginBottom:'10px'}}>Factorial Calculator</h1>
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
    text: `The basic factorial ($n!$) is the product of all positive integers less than or equal to $n$. For example, $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. By convention, $0! = 1$. Factorials grow extremely rapidly and are fundamental in combinatorics, probability, and algebra.`,
    // links: [
    //   // { title: "Learn more about Factorials", link: "/factorial" }
    // ]
  },
  double: {
    text: `The double factorial ($n!!$) is the product of all integers from $1$ to $n$ that have the same parity (odd or even) as $n$. For example, $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$ and $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. Double factorials appear in combinatorial problems and calculus.`,
    // links: [
    //   // { title: "Learn more about Double Factorials", link: "/factorial" }
    // ]
  },
  sub: {
    text: `The subfactorial ($!n$) counts the number of derangements of $n$ objects - permutations where no element appears in its original position. For example, $!3 = 2$ because there are $2$ ways to arrange $3$ items so none are in their original spots. Subfactorials are used in probability and combinatorics.`,
    // links: [
    //   // { title: "Learn more about Subfactorials", link: "/factorial" }
    // ]
  },
  multi: {
    text: `The multifactorial ($n(k)!$) is a generalization where you multiply every $k$-th number. For example, with $k=3$, $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. When $k=1$ it's a regular factorial, $k=2$ is double factorial. Multifactorials extend factorial concepts to broader mathematical contexts.`,
    // links: [
    //   // { title: "Learn more about Multifactorials", link: "/factorial" }
    // ]
  },
  primorial: {
    text: `The primorial ($n\\#$) is the product of all prime numbers less than or equal to $n$. For example, $10\\# = 2 \\times 3 \\times 5 \\times 7 = 210$. Primorials are important in number theory, particularly in studying prime number distributions and appear in various mathematical theorems.`,
    // links: [
    //   // { title: "Learn more about Primorials", link: "/factorial" }
    // ]
  }
};

const detailInstructions = [
  "Select the type of factorial you want to calculate (Basic, Double, Subfactorial, Multifactorial, or Primorial)",
  "Enter your number n in the first input field",
  "For Multifactorial, also enter the step value k in the second field",
  "Click Calculate to see the result",
  "Hover over ? icons for additional help"
];

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

After entering your number (and $k$ value for multifactorial), click the blue **Calculate** button. Your result appears on the right side of the equals sign. Use **Reset** to clear everything and start over.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using Basic Factorial`,
    content: `**Basic (n!)** is the most common type. Select this radio button at the top, then enter a whole number in the box. Try $5$—click Calculate and see $120$ appear as the result because $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.

Start with small numbers to understand the pattern. Calculate $3!$ and get $6$ (because $3 \\times 2 \\times 1 = 6$). Then try $4!$ for $24$, $6!$ for $720$, and $7!$ for $5040$. Notice how quickly factorials grow—each new number multiplies the previous result.

**Special case**: Enter $0$ and get $1$. This isn't a mistake—by mathematical definition, $0! = 1$. This convention makes many formulas work correctly. Similarly, $1! = 1$ because there's only one number to multiply.

The calculator handles large numbers using scientific notation. Try $20!$ and see a result like $2.432902e+18$ (meaning $2.432902 \\times 10^{18}$ or about $2.4$ quintillion). For very large numbers, the calculator shows $e^{\\text{value}}$ format to represent the enormous result.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Calculating Double Factorials`,
    content: `Select **Double (n!!)** when you need to multiply only even numbers or only odd numbers. This type skips every other number. For even inputs, it multiplies all even numbers; for odd inputs, it multiplies all odd numbers.

Try $8!!$ by entering $8$ with Double selected. The result is $384$ because $8!! = 8 \\times 6 \\times 4 \\times 2 = 384$. Notice it skips all odd numbers ($7, 5, 3, 1$). Each step goes down by $2$ instead of $1$.

For odd numbers, try $7!!$ and get $105$ because $7!! = 7 \\times 5 \\times 3 \\times 1 = 105$. This skips all even numbers ($6, 4, 2$). The pattern depends on whether your starting number is even or odd.

Small examples: $4!! = 4 \\times 2 = 8$, $5!! = 5 \\times 3 \\times 1 = 15$, $6!! = 6 \\times 4 \\times 2 = 48$. Double factorials appear in physics formulas, probability calculations, and certain mathematical sequences.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Working with Subfactorials`,
    content: `**Subfactorial (!n)** counts arrangements where nothing stays in its original position—called derangements. Select this type and enter a number to see how many ways you can rearrange items so each one moves.

Start with $!3$ (enter $3$ with Subfactorial selected). The result is $2$ because there are exactly $2$ ways to arrange three items $(A, B, C)$ so none stay in place: $(B, C, A)$ and $(C, A, B)$. Try placing each letter—neither arrangement leaves any letter in its original spot.

Try $!4$ and get $9$. For four items, there are $9$ derangements out of the $24$ total arrangements (which is $4!$). The subfactorial is always less than the regular factorial because it counts only specific arrangements, not all of them.

Examples: $!2 = 1$ (only one way to swap two items), $!5 = 44$, $!6 = 265$. Subfactorials are used in probability (like the "hat check problem") and combinatorics when calculating arrangements with restrictions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding Multifactorial`,
    content: `**Multifactorial (n(k)!)** lets you choose your step size. Instead of going down by $1$ (basic) or $2$ (double), you can go down by any number $k$. This option requires two inputs: $n$ (your starting number) and $k$ (your step size).

Select Multifactorial and two boxes appear. Enter $10$ in the first box and $3$ in the second. Click Calculate to see $280$ because $10(3)! = 10 \\times 7 \\times 4 \\times 1 = 280$. Each step subtracts $3$: start at $10$, then $7$, then $4$, then $1$.

When $k=1$, multifactorial equals basic factorial: $5(1)! = 5! = 120$. When $k=2$, it equals double factorial: $8(2)! = 8!! = 384$. Multifactorial generalizes both of these.

Try $12$ with $k=4$: get $12(4)! = 12 \\times 8 \\times 4 = 384$. Or $9$ with $k=3$: get $9(3)! = 9 \\times 6 \\times 3 = 162$. Choose $k$ based on the pattern you need—it controls which numbers get multiplied together.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Computing Primorials`,
    content: `**Primorial (n#)** multiplies only prime numbers up to $n$. Select this type and enter a number—the calculator finds all primes less than or equal to your number and multiplies them together.

Try $10\\#$ by entering $10$ with Primorial selected. The result is $210$ because the primes up to $10$ are $2, 3, 5, 7$, and $2 \\times 3 \\times 5 \\times 7 = 210$. The calculator automatically identifies primes and skips composite numbers like $4, 6, 8, 9, 10$.

Small examples: $5\\# = 2 \\times 3 \\times 5 = 30$, $7\\# = 2 \\times 3 \\times 5 \\times 7 = 210$, $11\\# = 2 \\times 3 \\times 5 \\times 7 \\times 11 = 2310$. Notice $7\\#$ and $10\\#$ are the same because there are no primes between $7$ and $10$.

If you enter a prime number itself, it includes that prime. Try $13\\#$ and get $30030$ because it multiplies all primes up to and including $13$: $2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13 = 30030$. Primorials are used in number theory and studying prime distributions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What Are Factorials`,
    content: `A factorial takes a number and multiplies it by every positive whole number below it, all the way down to $1$. The symbol is an exclamation mark: $n!$ means "multiply $n$ by all smaller positive integers."

For example, $4!$ means $4 \\times 3 \\times 2 \\times 1 = 24$. You start at $4$, multiply by $3$ to get $12$, multiply by $2$ to get $24$, multiply by $1$ (which doesn't change anything) to get $24$. Every step multiplies by the next smaller number.

Factorials count **how many ways you can arrange things**. If you have $4$ books, there are $4! = 24$ different ways to order them on a shelf. First book has $4$ choices, second has $3$ remaining choices, third has $2$, last has $1$—multiply these together.

**Why does 0! equal 1?** By definition, there's exactly one way to arrange zero items: do nothing. This might seem strange, but it makes mathematical formulas work correctly. Think of it as the "empty arrangement"—there's one way to arrange nothing.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `How Factorials Grow`,
    content: `Factorials get big **extremely fast**. Look at this pattern: $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$, $7! = 5040$. Each new factorial multiplies the previous one by the next number. Going from $6!$ to $7!$ means multiplying $720$ by $7$.

By $10!$ you reach $3,628,800$—over three million. By $15!$ you're at $1,307,674,368,000$—over a trillion. By $20!$ you hit $2,432,902,008,176,640,000$—that's $2.4$ quintillion. The numbers become so large that writing them fully is impractical.

This rapid growth is why the calculator uses scientific notation for large results. When you see $1.234e+18$, that's $1.234 \\times 10^{18}$ or $1.234$ followed by $18$ more digits. For very large factorials (like $100!$), the calculator shows $e^{\\text{number}}$ format instead.

**Practical limit**: Most real-world factorial problems use numbers under $20$. Calculating $70!$ gives a number with over $100$ digits. Only specialized applications (like cryptography or advanced statistics) work with such enormous factorials.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Simple Factorial Patterns`,
    content: `**Multiplying factorials**: To go from one factorial to the next, just multiply by the next number. Since $5! = 120$, you know $6! = 120 \\times 6 = 720$. And $7! = 720 \\times 7 = 5040$. Each factorial builds on the previous one.

**Dividing factorials**: When you divide factorials, numbers cancel. $\\frac{5!}{3!} = \\frac{5 \\times 4 \\times 3 \\times 2 \\times 1}{3 \\times 2 \\times 1} = 5 \\times 4 = 20$. The $3!$ cancels out, leaving only the top numbers. This simplifies many calculations.

**Factorials in fractions**: The expression $\\frac{n!}{(n-2)!}$ equals $n \\times (n-1)$. Try with $5$: $\\frac{5!}{3!} = \\frac{120}{6} = 20 = 5 \\times 4$. This pattern appears in permutation formulas.

**Zero factorial rule**: Remember $0! = 1$, not $0$. This makes formulas work: the binomial coefficient $\\binom{n}{0} = \\frac{n!}{0! \\times n!} = \\frac{n!}{1 \\times n!} = 1$. If $0!$ were $0$, you'd divide by zero and the formula would break.`,
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

**Multifactorial**: Compute $15(5)!$ (step by $5$). Answer: $15 \\times 10 \\times 5 = 750$.`,
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

**Scientific formulas**: Factorials appear in Taylor series (calculus), Stirling's approximation (statistics), and binomial expansions (algebra). The function $e^x$ can be written as $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$`,
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
    sectionsContent,
    faqQuestions,
    schemas
  }
}
}

export default function FactorialCalculatorPage({ seoData, keyWords, navigationGroup, factorialActualExplanations, detailInstructions, sectionsContent, faqQuestions, schemas}) {

const genericSections = Object.keys(sectionsContent).map((key, index) => ({
  id: `${index + 1}`,
  title: sectionsContent[key].title,
  link: sectionsContent[key].link,
  content: [sectionsContent[key].content]
}));

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
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'10px'}}>Factorial Calculator</h1>
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