


// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import ModuloCalculator from '@/app/components/calculators/modulo/ModuloCalculator'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // import React from 'react'
// // import '../../pages.css'
// // import Head from 'next/head'
// // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

// // export async function getStaticProps(){

   
// // const navigationGroup=[
// //   {title:'Other Calculators',
// //     items:[
// //       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
// //       {title:'Root Calculator',link:'/calculators/root-calculator'},
// //       // {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
// //       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
// //       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
// //       {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
// //       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
// //       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
// //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// //       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
// //     ]
// //   }
// // ]


// //     const moduloExplanations = {
// //         basic: {
// //           title: "Basic Modulo Operation",
// //           content: "The modulo operation finds the remainder when one number is divided by another. Mathematically, if we have a ÷ b = q with remainder r, then a mod b = r. The result is always in the range [0, b-1] for positive b. This operation is fundamental in computer science, appearing in hash functions, random number generation, and cryptography.",
// //           example: "Example: 17 mod 5 = 2 because 17 = 5×3 + 2, where 2 is the remainder"
// //         },
// //         negative: {
// //           title: "Negative Number Handling",
// //           content: "When working with negative numbers in modulo operations, we need to ensure the result falls within the standard range [0, m-1]. For negative inputs, we add the modulus repeatedly until we get a positive result. Mathematically, for negative a, we calculate ((a % b) + b) % b to get the correct positive result. This approach ensures consistency with modular arithmetic principles.",
// //           example: "Example: -7 mod 5 = 3 because -7 = 5×(-2) + 3, or equivalently, -7 ≡ 3 (mod 5)"
// //         },
// //         float: {
// //           title: "Decimal/Float Modulo",
// //           content: "For floating-point numbers, the modulo operation is defined as a - b × floor(a/b), where floor() rounds down to the nearest integer. This definition ensures the result maintains the same properties as integer modulo. It's particularly useful in applications like signal processing, computer graphics, and numerical simulations where cyclic patterns involve non-integer values.",
// //           example: "Example: 7.5 mod 2.2 = 0.9 because 7.5 = 2.2×3 + 0.9, where 0.9 is the remainder"
// //         },
// //         add: {
// //           title: "Modular Addition",
// //           content: "Modular addition computes (a + b) mod m. This operation is essential in modular arithmetic because it keeps the result within the modulo system's bounds. Modular addition has applications in cryptography (especially in stream ciphers), computer arithmetic for preventing overflow, and in clock arithmetic where numbers wrap around after reaching a certain value (like hours on a 12-hour clock).",
// //           example: "Example: (8 + 7) mod 10 = 5 because 15 mod 10 = 5. Think of this as a clock that goes from 0 to 9 and then wraps around."
// //         },
// //         subtract: {
// //           title: "Modular Subtraction",
// //           content: "Modular subtraction performs (a - b) mod m, ensuring the result stays within the range [0, m-1]. If the result is negative, we add m repeatedly until we get a non-negative number. Formally, we compute ((a - b) % m + m) % m. Modular subtraction is used in various algorithms, especially in cryptography where negative numbers need to be avoided.",
// //           example: "Example: (3 - 7) mod 10 = 6 because -4 mod 10 = 6. This can be verified as (3 - 7) = -4, and (-4 + 10) = 6."
// //         },
// //         multiply: {
// //           title: "Modular Multiplication",
// //           content: "Modular multiplication calculates (a × b) mod m. This operation is crucial in number theory, cryptographic algorithms (like RSA), and computational methods that need to keep numbers within specific bounds. When dealing with large numbers, direct multiplication might cause overflow, so we often apply the modulo at intermediate steps: ((a mod m) × (b mod m)) mod m.",
// //           example: "Example: (6 × 7) mod 10 = 2 because 42 mod 10 = 2. This is like watching a car's odometer, where after 9 it rolls back to 0."
// //         },
// //         divide: {
// //           title: "Modular Division",
// //           content: "Modular division is defined as (a × b⁻¹) mod m, where b⁻¹ is the modular multiplicative inverse of b under modulus m. Unlike regular division, modular division only works when b and m are coprime (their GCD is 1). Otherwise, no unique solution exists. This operation is extensively used in public-key cryptography algorithms like RSA and in solutions to certain types of linear congruence equations.",
// //           example: "Example: For 8 ÷ 3 mod 10, we first find that 3⁻¹ mod 10 = 7 (because 3 × 7 = 21, and 21 mod 10 = 1). Then (8 × 7) mod 10 = 56 mod 10 = 6."
// //         },
// //         exponent: {
// //           title: "Modular Exponentiation",
// //           content: "Modular exponentiation efficiently calculates a^b mod m without computing the full value of a^b first (which could be astronomically large). Fast algorithms like square-and-multiply reduce the number of operations needed. This is one of the most important operations in cryptography, forming the backbone of RSA encryption and many other cryptographic protocols that require efficient computation with large numbers.",
// //           example: "Example: 4^13 mod 497 = 445. Direct calculation of 4^13 = 67,108,864 is unnecessary because we can apply modulo operations during intermediate steps of the calculation."
// //         },
// //         inverse: {
// //           title: "Modular Multiplicative Inverse",
// //           content: "The modular multiplicative inverse of a with respect to modulus m is a number a⁻¹ such that (a × a⁻¹) mod m = 1. This inverse exists if and only if a and m are coprime (gcd(a,m) = 1). The extended Euclidean algorithm efficiently finds this inverse. Modular inverses are crucial in cryptography (especially RSA), solving modular equations, and in many number-theoretic applications.",
// //           example: "Example: The inverse of 3 mod 10 is 7, because (3 × 7) mod 10 = 21 mod 10 = 1. This means 3 and 10 are coprime, and 7 is the unique number that satisfies the inverse relationship."
// //         },
// //         congruence: {
// //           title: "Modular Congruence Check",
// //           content: "Two numbers a and b are congruent modulo m if they leave the same remainder when divided by m. We write this as a ≡ b (mod m). Mathematically, this means m divides (a-b), or a mod m = b mod m. Congruence relations form equivalence classes and simplify many problems in number theory and computer science by allowing us to work with smaller, more manageable numbers.",
// //           example: "Example: 17 ≡ 2 (mod 5) because both 17 and 2 leave remainder 2 when divided by 5. Similarly, 25 ≡ 0 (mod 5) because both are divisible by 5."
// //         },
// //         gcd: {
// //           title: "Greatest Common Divisor (GCD)",
// //           content: "The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both numbers without a remainder. The Euclidean algorithm efficiently computes GCD through successive division and remainder operations. GCD has wide applications in number theory, cryptography (especially for key generation in RSA), fraction simplification, and determining if numbers are coprime, which is essential for modular inverses.",
// //           example: "Example: GCD(48, 18) = 6 because 6 is the largest positive integer that divides both 48 and 18 without a remainder. This can be verified as 48 = 6×8 and 18 = 6×3."
// //         },
// //         lcm: {
// //           title: "Least Common Multiple (LCM)",
// //           content: "The Least Common Multiple (LCM) of two integers is the smallest positive integer that is divisible by both numbers. It can be calculated using the relationship: LCM(a,b) = (a×b)/GCD(a,b). LCM is important in fraction arithmetic (finding common denominators), scheduling problems (finding when cycles align), and in various areas of computer science and discrete mathematics.",
// //           example: "Example: LCM(4, 6) = 12 because 12 is the smallest positive integer divisible by both 4 and 6. We can verify this as 12 = 4×3 = 6×2."
// //         },
// //         coprime: {
// //           title: "Coprime (Relatively Prime) Check",
// //           content: "Two integers are coprime (or relatively prime) if their Greatest Common Divisor (GCD) is 1. This means they share no common factors other than 1. The concept of coprime numbers is fundamental in number theory and cryptography. For modular arithmetic, when a and m are coprime, a has a multiplicative inverse modulo m, making modular division possible. Euler's totient function counts the numbers coprime to a given integer.",
// //           example: "Example: 25 and 36 are coprime because GCD(25, 36) = 1. Despite both being composite numbers (25 = 5² and 36 = 2² × 3²), they don't share any prime factors."
// //         }
// //       };
      
// //     const keyWords = ['modulo', 'modulus', 'modulo calculator',  'modulo addition', 'modulo subtraction', 'modulo multiplication', 'modulo division',  'remainder', 'congruence', 'GCD', 'LCM', 'coprime'];
// //     const description = "Free online modulo calculator with comprehensive explanations. Calculate basic modulo, modular addition, subtraction, multiplication, division, exponentiation, and more. Learn about GCD, LCM, and modular arithmetic with clear examples.";
// //     const title = "Modulo Calculator | Online Modular Arithmetic Tool | LearnMathClass";
    
// //     return {
// //         props: {
// //             moduloExplanations,
// //             keyWords,
// //             description,
// //             title,
// //             canonicalUrl: "https://www.learnmathclass.com/calculators/modulo-calculator",
// //             navigationGroup,
// //         }
// //     }
// // }

// // export default function ModuloCalculatorPage({moduloExplanations, keyWords, description,
// //    title, canonicalUrl,navigationGroup}) {
// //   return (
// //     <>
// //       <Head>
// //         <title>{title}</title>
// //         <meta name="description" content={description} />
// //         <meta name="keywords" content={keyWords.join(', ')} />
// //         <meta property="og:title" content={title} />
// //         <meta property="og:description" content={description} />
// //         <meta property="og:url" content={canonicalUrl} />
// //         <meta property="og:type" content="website" />
// //         <meta property="og:image" content="https://www.learnmathclass.com/images/modulo-calculator-og.jpg" />
// //         <meta name="twitter:card" content="summary_large_image" />
// //         <meta name="twitter:title" content={title} />
// //         <meta name="twitter:description" content={description} />
// //         <meta name="twitter:image" content="https://www.learnmathclass.com/images/modulo-calculator-og.jpg" />
// //         <link rel="canonical" href={canonicalUrl} />
// //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //         <script type="application/ld+json">
// //           {JSON.stringify({
// //             "@context": "https://schema.org",
// //             "@type": "WebApplication",
// //             "name": "Modulo Calculator",
// //             "description": description,
// //             "url": canonicalUrl,
// //             "applicationCategory": "EducationalApplication",
// //             "operatingSystem": "Any",
// //             "offers": {
// //               "@type": "Offer",
// //               "price": "0",
// //               "priceCurrency": "USD"
// //             },
// //             "author": {
// //               "@type": "Organization",
// //               "name": "LearnMathClass",
// //               "url": "https://www.learnmathclass.com"
// //             }
// //           })}
// //         </script>
// //       </Head>
// //      <style jsx>{`
// //   @media (max-width: 1024px) {
// //     .layout-container > div:first-child,
// //     .layout-container > div:first-child *,
// //     :global([class*="vertical"]),
// //     :global([class*="vertical"]) * {
// //       position: static !important;
// //     }
// //   }
  
// //   .layout-container {
// //     display: grid;
// //     grid-template-columns: 20% 80%;
// //     gap: 20px;
// //     width: 100%;
// //   }
  
// //   @media (max-width: 1024px) {
// //     .layout-container {
// //       grid-template-columns: 1fr;
// //     }
// //   }
// // `}</style>
// //       {/* <GenericNavbar/> */}
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <OperaSidebar 
// //         side='right'
// //         topOffset='55px' 
// //         sidebarWidth='45px'
// //         panelWidth='300px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       /> 
// //       <Breadcrumb/>
// //       <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Modulo Calculator</h1>
// //      <div className="layout-container">
// //         {/* <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: '10% 90%',
// //       gap: '20px',
// //       width: '100%'
// //    }}> */}
// //       {/* Left column - Sidebar */}
// //       <div>
// //         <br/>
       
// //          <VerticalButtonGroup 
// //             items={navigationGroup}
// //             width="250px"       
// //             theme='lightBlue'
// //             isSticky={true}
// //             verticalOffset='200px'
// //          />
// //       </div>

// //       {/* Right column - Table */}
// //       <div>
// //          <div style={{width:'100%',margin:'auto'}}>
// //           <div style={{transform:'scale(0.95)'}}>
// //             <ModuloCalculator explanations={moduloExplanations}/>
       
// //       </div> 
        
// //             <br/>
           
            
// //          </div>
// //       </div>
// //    </div>
     
// //       {/* <div style={{transform:'scale(0.95)'}}>
// //         <ModuloCalculator explanations={moduloExplanations}/>
// //       </div> */}
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       {/* <ScrollUpButton/> */}
// //     </>
// //   )
// // }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import ModuloCalculator from '@/app/components/calculators/modulo/ModuloCalculator'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

// export async function getStaticProps(){

// const navigationGroup=[
//   {title:'Other Calculators',
//     items:[
//       {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
//       {title:'Root Calculator',link:'/calculators/root-calculator'},
//       {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
//       {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
//       {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
//       {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
//       {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
//       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
//       {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
//     ]
//   }
// ]

// const moduloExplanations = {
//   basic: {
//     title: "Basic Modulo Operation",
//     content: "The modulo operation finds the remainder when one number is divided by another. Mathematically, if we have a ÷ b = q with remainder r, then a mod b = r. The result is always in the range [0, b-1] for positive b. This operation is fundamental in computer science, appearing in hash functions, random number generation, and cryptography.",
//     example: "Example: 17 mod 5 = 2 because 17 = 5×3 + 2, where 2 is the remainder"
//   },
//   negative: {
//     title: "Negative Number Handling",
//     content: "When working with negative numbers in modulo operations, we need to ensure the result falls within the standard range [0, m-1]. For negative inputs, we add the modulus repeatedly until we get a positive result. Mathematically, for negative a, we calculate ((a % b) + b) % b to get the correct positive result. This approach ensures consistency with modular arithmetic principles.",
//     example: "Example: -7 mod 5 = 3 because -7 = 5×(-2) + 3, or equivalently, -7 ≡ 3 (mod 5)"
//   },
//   float: {
//     title: "Decimal/Float Modulo",
//     content: "For floating-point numbers, the modulo operation is defined as a - b × floor(a/b), where floor() rounds down to the nearest integer. This definition ensures the result maintains the same properties as integer modulo. It's particularly useful in applications like signal processing, computer graphics, and numerical simulations where cyclic patterns involve non-integer values.",
//     example: "Example: 7.5 mod 2.2 = 0.9 because 7.5 = 2.2×3 + 0.9, where 0.9 is the remainder"
//   },
//   add: {
//     title: "Modular Addition",
//     content: "Modular addition computes (a + b) mod m. This operation is essential in modular arithmetic because it keeps the result within the modulo system's bounds. Modular addition has applications in cryptography (especially in stream ciphers), computer arithmetic for preventing overflow, and in clock arithmetic where numbers wrap around after reaching a certain value (like hours on a 12-hour clock).",
//     example: "Example: (8 + 7) mod 10 = 5 because 15 mod 10 = 5. Think of this as a clock that goes from 0 to 9 and then wraps around."
//   },
//   subtract: {
//     title: "Modular Subtraction",
//     content: "Modular subtraction performs (a - b) mod m, ensuring the result stays within the range [0, m-1]. If the result is negative, we add m repeatedly until we get a non-negative number. Formally, we compute ((a - b) % m + m) % m. Modular subtraction is used in various algorithms, especially in cryptography where negative numbers need to be avoided.",
//     example: "Example: (3 - 7) mod 10 = 6 because -4 mod 10 = 6. This can be verified as (3 - 7) = -4, and (-4 + 10) = 6."
//   },
//   multiply: {
//     title: "Modular Multiplication",
//     content: "Modular multiplication calculates (a × b) mod m. This operation is crucial in number theory, cryptographic algorithms (like RSA), and computational methods that need to keep numbers within specific bounds. When dealing with large numbers, direct multiplication might cause overflow, so we often apply the modulo at intermediate steps: ((a mod m) × (b mod m)) mod m.",
//     example: "Example: (6 × 7) mod 10 = 2 because 42 mod 10 = 2. This is like watching a car's odometer, where after 9 it rolls back to 0."
//   },
//   divide: {
//     title: "Modular Division",
//     content: "Modular division is defined as (a × b⁻¹) mod m, where b⁻¹ is the modular multiplicative inverse of b under modulus m. Unlike regular division, modular division only works when b and m are coprime (their GCD is 1). Otherwise, no unique solution exists. This operation is extensively used in public-key cryptography algorithms like RSA and in solutions to certain types of linear congruence equations.",
//     example: "Example: For 8 ÷ 3 mod 10, we first find that 3⁻¹ mod 10 = 7 (because 3 × 7 = 21, and 21 mod 10 = 1). Then (8 × 7) mod 10 = 56 mod 10 = 6."
//   },
//   exponent: {
//     title: "Modular Exponentiation",
//     content: "Modular exponentiation efficiently calculates a^b mod m without computing the full value of a^b first (which could be astronomically large). Fast algorithms like square-and-multiply reduce the number of operations needed. This is one of the most important operations in cryptography, forming the backbone of RSA encryption and many other cryptographic protocols that require efficient computation with large numbers.",
//     example: "Example: 4^13 mod 497 = 445. Direct calculation of 4^13 = 67,108,864 is unnecessary because we can apply modulo operations during intermediate steps of the calculation."
//   },
//   inverse: {
//     title: "Modular Multiplicative Inverse",
//     content: "The modular multiplicative inverse of a with respect to modulus m is a number a⁻¹ such that (a × a⁻¹) mod m = 1. This inverse exists if and only if a and m are coprime (gcd(a,m) = 1). The extended Euclidean algorithm efficiently finds this inverse. Modular inverses are crucial in cryptography (especially RSA), solving modular equations, and in many number-theoretic applications.",
//     example: "Example: The inverse of 3 mod 10 is 7, because (3 × 7) mod 10 = 21 mod 10 = 1. This means 3 and 10 are coprime, and 7 is the unique number that satisfies the inverse relationship."
//   },
//   congruence: {
//     title: "Modular Congruence Check",
//     content: "Two numbers a and b are congruent modulo m if they leave the same remainder when divided by m. We write this as a ≡ b (mod m). Mathematically, this means m divides (a-b), or a mod m = b mod m. Congruence relations form equivalence classes and simplify many problems in number theory and computer science by allowing us to work with smaller, more manageable numbers.",
//     example: "Example: 17 ≡ 2 (mod 5) because both 17 and 2 leave remainder 2 when divided by 5. Similarly, 25 ≡ 0 (mod 5) because both are divisible by 5."
//   },
//   gcd: {
//     title: "Greatest Common Divisor (GCD)",
//     content: "The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both numbers without a remainder. The Euclidean algorithm efficiently computes GCD through successive division and remainder operations. GCD has wide applications in number theory, cryptography (especially for key generation in RSA), fraction simplification, and determining if numbers are coprime, which is essential for modular inverses.",
//     example: "Example: GCD(48, 18) = 6 because 6 is the largest positive integer that divides both 48 and 18 without a remainder. This can be verified as 48 = 6×8 and 18 = 6×3."
//   },
//   lcm: {
//     title: "Least Common Multiple (LCM)",
//     content: "The Least Common Multiple (LCM) of two integers is the smallest positive integer that is divisible by both numbers. It can be calculated using the relationship: LCM(a,b) = (a×b)/GCD(a,b). LCM is important in fraction arithmetic (finding common denominators), scheduling problems (finding when cycles align), and in various areas of computer science and discrete mathematics.",
//     example: "Example: LCM(4, 6) = 12 because 12 is the smallest positive integer divisible by both 4 and 6. We can verify this as 12 = 4×3 = 6×2."
//   },
//   coprime: {
//     title: "Coprime (Relatively Prime) Check",
//     content: "Two integers are coprime (or relatively prime) if their Greatest Common Divisor (GCD) is 1. This means they share no common factors other than 1. The concept of coprime numbers is fundamental in number theory and cryptography. For modular arithmetic, when a and m are coprime, a has a multiplicative inverse modulo m, making modular division possible. Euler's totient function counts the numbers coprime to a given integer.",
//     example: "Example: 25 and 36 are coprime because GCD(25, 36) = 1. Despite both being composite numbers (25 = 5² and 36 = 2² × 3²), they don't share any prime factors."
//   }
// };

// const keyWords = [
//   'modulo calculator',
//   'modular arithmetic',
//   'remainder calculator',
//   'modulo operation',
//   'modular addition',
//   'modular multiplication',
//   'modular division',
//   'modular inverse calculator',
//   'GCD calculator',
//   'LCM calculator',
//   'coprime check',
//   'congruence calculator',
//   'modular exponentiation',
//   'online modulo tool',
//   'free modulus calculator'
// ];

// const sectionsContent = {
//   obj1: {
//     title: `Getting Started with the Calculator`,
//     content: `Select an operation from the dropdown menu to begin. The calculator offers 13 different modular arithmetic operations, from basic modulo to advanced cryptographic functions. The interface automatically adjusts based on your selection, showing either two or three input fields depending on the operation's requirements.

// Enter your numbers in the input fields. The calculator accepts integers, negative numbers, and decimal values. For basic modulo operations like $a \\bmod b$, you'll enter two values. For operations like modular addition $(a + b) \\bmod m$, you'll enter three values including the modulus.

// Click the **Calculate** button to compute your result. The answer appears in a highlighted box below the inputs, and the right panel updates with a detailed explanation of the operation including mathematical definitions and concrete examples. If you encounter an error, the calculator displays a clear message in red explaining the issue.

// Use the **Reset** button to clear all inputs and start fresh with new calculations. The operation type remains selected, allowing you to quickly try different values with the same operation.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Understanding the 13 Operation Types`,
//     content: `The calculator provides thirteen distinct operations covering the full spectrum of modular arithmetic. **Basic Modulo** computes the remainder $a \\bmod b$, the foundation of all modular operations. **Negative Number Modulo** demonstrates proper handling of negative inputs to ensure results stay within $[0, m-1]$.

// **Decimal/Float Modulo** extends operations to non-integer values using the formula $a - b \\times \\lfloor a/b \\rfloor$. The arithmetic operations—**Modular Addition**, **Subtraction**, and **Multiplication**—perform standard calculations while keeping results within modular bounds.

// **Modular Division** finds $(a \\times b^{-1}) \\bmod m$ where $b^{-1}$ is the multiplicative inverse. **Modular Exponentiation** computes $a^b \\bmod m$ efficiently using fast algorithms. **Modular Inverse** finds $a^{-1}$ such that $(a \\times a^{-1}) \\bmod m = 1$.

// **Congruence Check** verifies if $a \\equiv b \\pmod{m}$. **GCD** and **LCM** calculate the greatest common divisor and least common multiple. **Coprime Check** determines if two numbers share only 1 as a common factor. Each operation includes educational content explaining theory and applications.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Working with Different Number Types`,
//     content: `The calculator handles three types of numerical inputs seamlessly. **Integer operations** accept whole numbers and provide exact results for all thirteen operation types. Enter values like 17, 42, or 100 directly.

// **Negative numbers** require special handling in modular arithmetic. When you enter $-7$ with modulus $5$, the calculator applies the formula $((a \\bmod b) + b) \\bmod b$ to ensure the result falls within $[0, 4]$. The "Negative Number Handling" operation provides detailed explanations of this adjustment process.

// **Decimal numbers** work with most operations, though GCD, LCM, and coprime checks require integers. For float modulo, the calculator uses $a - b \\times \\lfloor a/b \\rfloor$ to compute remainders with fractional values. This is useful for wrapping coordinates in graphics or handling periodic functions with non-integer periods.

// The calculator processes large numbers up to JavaScript's numerical limits. For operations involving very large numbers (common in cryptography), consider the efficiency of modular exponentiation, which avoids computing massive intermediate values.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Reading and Interpreting Results`,
//     content: `Results appear in the blue-highlighted box immediately after calculation. For simple operations like basic modulo, you'll see a single numerical answer. For operations like congruence checking, you'll see a statement confirming whether $a \\equiv b \\pmod{m}$ or $a \\not\\equiv b \\pmod{m}$.

// The right panel updates simultaneously with each calculation, displaying the operation's title, mathematical definition, and a concrete example. This contextual information helps you understand not just the answer, but the underlying mathematics.

// Error messages appear in red when something goes wrong. Common errors include division by zero (when modulus is 0), attempting modular division when numbers aren't coprime, or using non-integers for operations that require whole numbers. Each error message explains exactly what went wrong and how to fix it.

// For modular inverse operations, if no inverse exists, the calculator clearly states that the numbers aren't coprime and no unique solution is available. This immediate feedback helps you understand the mathematical constraints of each operation.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Exploring Modular Arithmetic Operations`,
//     content: `Experiment with the four basic arithmetic operations under modular constraints. Try modular addition: compute $(8 + 7) \\bmod 10 = 5$, observing how results wrap around like clock arithmetic. Compare this to regular addition where $8 + 7 = 15$.

// Test modular subtraction with examples where results would be negative: $(3 - 7) \\bmod 10 = 6$. The calculator automatically adjusts negative results to the proper range, demonstrating how modular arithmetic maintains consistency.

// Explore modular multiplication with larger numbers. Calculate $(6 \\times 7) \\bmod 10 = 2$ and observe how even large products reduce to values within $[0, 9]$. This property prevents overflow in computer arithmetic.

// Try modular division, but note it requires coprime numbers. Attempt $8 \\div 3 \\bmod 10$ (which works) versus $8 \\div 4 \\bmod 10$ (which fails because 4 and 10 aren't coprime). Understanding when division is possible is crucial for cryptographic applications.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Using Advanced Cryptographic Operations`,
//     content: `Modular exponentiation is essential for cryptography. Calculate $4^{13} \\bmod 497 = 445$ and observe how the calculator handles this efficiently without computing $4^{13} = 67,108,864$ first. The fast exponentiation algorithm applies modular reduction at each step, keeping numbers manageable.

// Explore modular multiplicative inverses, the foundation of RSA encryption. Find the inverse of $3 \\bmod 10$, which is $7$ because $(3 \\times 7) \\bmod 10 = 1$. Try finding inverses for different values and observe when they exist (only when numbers are coprime).

// Test the coprime checker to verify relationships before attempting division or finding inverses. Check if $25$ and $36$ are coprime (they are, with $\\text{GCD} = 1$), then verify if $12$ and $18$ are coprime (they aren't, with $\\text{GCD} = 6$).

// Practice with congruence checking to verify equivalences: confirm that $17 \\equiv 2 \\pmod{5}$ because both leave remainder $2$ when divided by $5$. This operation helps verify solutions to modular equations.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `What is Modular Arithmetic`,
//     content: `Modular arithmetic is a system where numbers wrap around after reaching a certain value called the modulus. Think of a 12-hour clock: after 12 comes 1, not 13. Mathematically, we say $13 \\equiv 1 \\pmod{12}$ because both leave the same remainder when divided by 12.

// The modulo operation $a \\bmod m$ finds the remainder when $a$ is divided by $m$. This remainder always falls within $[0, m-1]$. For example, $17 \\bmod 5 = 2$ because $17 = 5 \\times 3 + 2$.

// Modular arithmetic appears throughout mathematics and computer science. In cryptography, it forms the basis of RSA encryption. In programming, it handles **cyclic structures**, array indexing with wraparound, and hash table implementations. In **number theory**, it simplifies complex divisibility problems and congruence relations.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Understanding GCD and LCM`,
//     content: `The Greatest Common Divisor (GCD) of two integers is the largest number that divides both without remainder. For $\\text{GCD}(48, 18) = 6$ because $6$ is the largest number dividing both $48 = 6 \\times 8$ and $18 = 6 \\times 3$. The Euclidean algorithm computes GCD efficiently through repeated division.

// The Least Common Multiple (LCM) is the smallest positive integer divisible by both numbers. For $\\text{LCM}(4, 6) = 12$ because $12$ is the smallest number where both $4$ and $6$ divide evenly. The relationship $\\text{LCM}(a,b) = \\frac{a \\times b}{\\text{GCD}(a,b)}$ connects these concepts.

// These functions are fundamental to modular arithmetic. GCD determines if numbers are **coprime** (when $\\text{GCD} = 1$), which controls whether modular inverses exist. LCM appears in problems involving **periodic cycles**, fraction arithmetic, and scheduling when multiple cycles must align.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Why Coprime Numbers Matter`,
//     content: `Two numbers are coprime (relatively prime) when their only common factor is 1, meaning $\\text{GCD}(a, m) = 1$. For example, $25$ and $36$ are coprime despite both being composite, because they share no prime factors: $25 = 5^2$ and $36 = 2^2 \\times 3^2$.

// Coprimality determines when modular division and inverses exist. The number $a$ has a multiplicative inverse modulo $m$ if and only if $a$ and $m$ are coprime. This is why $3$ has an inverse mod $10$ (they're coprime), but $4$ doesn't have an inverse mod $10$ (they share factor $2$).

// In cryptography, choosing coprime numbers ensures key generation succeeds. Euler's totient function $\\phi(n)$ counts integers less than $n$ that are coprime to it, playing a central role in **RSA encryption**. Understanding coprimality is essential for advanced applications of modular arithmetic.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Related Mathematical Concepts`,
//     content: `**Congruence Relations** extend modular arithmetic to equivalence classes. Numbers in the same class share the same remainder modulo $m$, forming the foundation for abstract algebra and group theory.

// **Euclidean Algorithm** computes GCD efficiently and extends to find modular inverses through the Extended Euclidean Algorithm. This ancient algorithm remains crucial for modern cryptographic implementations.

// **Chinese Remainder Theorem** solves systems of congruences, allowing reconstruction of a number from its remainders modulo several pairwise coprime moduli. This has applications in parallel computing and cryptographic protocols.

// **Fermat's Little Theorem** and **Euler's Theorem** provide shortcuts for modular exponentiation when working with prime moduli or coprime bases. These theorems underpin RSA's mathematical security.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj11: {
//     title: `Applications and Use Cases`,
//     content: `**Cryptography** relies heavily on modular arithmetic. RSA encryption uses modular exponentiation for secure communication, while the Diffie-Hellman key exchange depends on the difficulty of computing discrete logarithms in modular systems.

// **Computer Science** applies modular arithmetic to hash functions, random number generation, and cyclic data structures. Array indexing with wraparound, circular buffers, and load balancing across servers all use modulo operations.

// **Number Theory** employs modular arithmetic to study divisibility, prime numbers, and Diophantine equations. Problems involving **remainders**, periodic patterns, and integer solutions often simplify dramatically under modular formulation.

// **Practical everyday uses** include calculating day of the week for any date, distributing items evenly, checking credit card numbers with **Luhn algorithm**, and creating repeating patterns in design and music.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj12: {
//     title: `When to Use This Calculator`,
//     content: `Use this calculator when solving **homework problems** involving modular arithmetic. Verify your manual calculations of remainders, modular inverses, or GCD/LCM values. The detailed explanations help you understand the steps even when using the calculator for efficiency.

// In **cryptography projects**, compute modular exponentiations for RSA key generation or encryption operations. Test whether proposed keys are valid by checking coprimality and finding modular inverses.

// For **programming tasks**, verify modulo operations before implementing them in code, especially when dealing with negative numbers or unusual edge cases. The calculator's handling of different number types demonstrates correct implementation patterns.

// When **learning number theory**, experiment with congruence relations and observe patterns in modular systems. Try different moduli to see how arithmetic behavior changes, building intuition for theoretical concepts through concrete examples.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };

// const faqQuestions = {
//   obj1: {
//     question: "What is the modulo operation and how does it work?",
//     answer: "The modulo operation finds the remainder when one number is divided by another. For a mod b, you divide a by b and return the remainder. For example, 17 mod 5 equals 2 because 17 divided by 5 is 3 with remainder 2. The result always falls within the range [0, b-1] for positive modulus b."
//   },
//   obj2: {
//     question: "How do you calculate modular multiplication?",
//     answer: "Modular multiplication computes (a × b) mod m by first multiplying the numbers, then taking the remainder when divided by the modulus. For example, (6 × 7) mod 10 = 42 mod 10 = 2. For large numbers, you can apply the modulus to intermediate results to prevent overflow."
//   },
//   obj3: {
//     question: "When does a modular multiplicative inverse exist?",
//     answer: "A modular multiplicative inverse of a modulo m exists if and only if a and m are coprime, meaning their GCD equals 1. For example, 3 has an inverse mod 10 (which is 7) because GCD(3,10) = 1, but 4 has no inverse mod 10 because GCD(4,10) = 2."
//   },
//   obj4: {
//     question: "Why is modular arithmetic important in cryptography?",
//     answer: "Modular arithmetic is fundamental to modern cryptography. RSA encryption relies on modular exponentiation and the difficulty of finding modular logarithms. Modular inverses enable decryption, while coprime relationships ensure key validity. The mathematical properties of modular systems provide the security foundation for secure communication."
//   },
//   obj5: {
//     question: "How do you handle negative numbers in modulo operations?",
//     answer: "To handle negative numbers in modulo operations, use the formula ((a mod b) + b) mod b to ensure the result falls within [0, b-1]. For example, -7 mod 5 equals 3 because (-7 mod 5) = -2, then (-2 + 5) = 3. This adjustment keeps results in the standard non-negative range."
//   }
// };

// const schemas = {
//   webApplication: {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     "name": "Modulo Calculator - Online Modular Arithmetic Tool",
//     "description": "Free online modulo calculator for computing remainders, modular arithmetic operations, GCD, LCM, and cryptographic functions. Supports integers, decimals, and negative numbers.",
//     "url": "https://www.learnmathclass.com/calculators/modulo-calculator",
//     "applicationCategory": "EducationalApplication",
//     "operatingSystem": "Any",
//     "offers": {
//       "@type": "Offer",
//       "price": "0",
//       "priceCurrency": "USD"
//     },
//     "featureList": [
//       "Basic modulo operation with remainder calculation",
//       "Modular arithmetic operations (addition, subtraction, multiplication, division)",
//       "Modular exponentiation for cryptographic calculations",
//       "Modular multiplicative inverse computation",
//       "GCD and LCM calculation using Euclidean algorithm",
//       "Coprime number checking and congruence verification",
//       "Support for integers, decimals, and negative numbers"
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
//     "educationalLevel": "High School, College, University",
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
//         "name": "Modulo Calculator",
//         "item": "https://www.learnmathclass.com/calculators/modulo-calculator"
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
//     moduloExplanations,
//     navigationGroup,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Modulo Calculator | Interactive Modular Arithmetic Tool",
//       description: "Calculate modulo, modular arithmetic operations, GCD, LCM, and cryptographic functions online. Free calculator supporting integers, decimals, and negative numbers.",
//       keywords: keyWords.join(", "),
//       url: "/calculators/modulo-calculator",
//       name: "Modulo Calculator - Modular Arithmetic Tool"
//     },
//   }
// }
// }

// export default function ModuloCalculatorPage({seoData, sectionsContent, introContent, moduloExplanations, navigationGroup, faqQuestions, schemas}) {

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
//         grid-template-columns: 20% 80%;
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
//     <br/>
//     <br/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Modulo Calculator</h1>
//     <br/>
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
//           <div style={{transform:'scale(0.95)'}}>
//             <ModuloCalculator explanations={moduloExplanations}/>
//           </div> 
//           <br/>
//         </div>
//       </div>
//     </div>
//     <br/>
//     <SectionTableOfContents sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//     {/* <IntroSection 
//       id={introContent.id}
//       title={introContent.title}
//       content={introContent.content}
//       backgroundColor='#f9fafb'
//       textColor="#06357a"
//     /> */}
//     <br/>
//     <br/>

    

//     <br/>
//     <br/>
//     <Sections sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//   </>
// )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import ModuloCalculator from '@/app/components/calculators/modulo/ModuloCalculator'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

/* calculators-mesh: finished 2026-10-13 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "C:/Program Files/Git/calculators/modulo-calculator" in calculators-mesh-registry.json (same folder): 6 usage sections, each with a demo; 13 panel texts with anchors; 23 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */

export async function getStaticProps(){

const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]

const moduloExplanations = {
  basic: {
    title: "Basic Modulo Operation",
    content: "The modulo operation finds the remainder when one number is divided by another. Mathematically, if we have a ÷ b = q with remainder r, then a mod b = r. The result is always in the range [0, b-1] for positive b. This operation is fundamental in computer science, appearing in hash functions, random number generation, and cryptography. [Learn more about basic modulo](!#what-is-modular-arithmetic)",
    example: "Example: 17 mod 5 = 2 because 17 = 5×3 + 2, where 2 is the remainder"
  },
  negative: {
    title: "Negative Number Handling",
    content: "When working with negative numbers in modulo operations, we need to ensure the result falls within the standard range [0, m-1]. For negative inputs, we add the modulus repeatedly until we get a positive result. Mathematically, for negative a, we calculate ((a % b) + b) % b to get the correct positive result. This approach ensures consistency with modular arithmetic principles. [Learn more about negative number modulo](!#negative-number-modulo)",
    example: "Example: -7 mod 5 = 3 because -7 = 5×(-2) + 3, or equivalently, -7 ≡ 3 (mod 5)"
  },
  float: {
    title: "Decimal/Float Modulo",
    content: "For floating-point numbers, the modulo operation is defined as a - b × floor(a/b), where floor() rounds down to the nearest integer. This definition ensures the result maintains the same properties as integer modulo. It's particularly useful in applications like signal processing, computer graphics, and numerical simulations where cyclic patterns involve non-integer values. [Learn more about decimal modulo](!#decimal-modulo)",
    example: "Example: 7.5 mod 2.2 = 0.9 because 7.5 = 2.2×3 + 0.9, where 0.9 is the remainder"
  },
  add: {
    title: "Modular Addition",
    content: "Modular addition computes (a + b) mod m. This operation is essential in modular arithmetic because it keeps the result within the modulo system's bounds. Modular addition has applications in cryptography (especially in stream ciphers), computer arithmetic for preventing overflow, and in clock arithmetic where numbers wrap around after reaching a certain value (like hours on a 12-hour clock). [Learn more about modular addition](!#modular-addition)",
    example: "Example: (8 + 7) mod 10 = 5 because 15 mod 10 = 5. Think of this as a clock that goes from 0 to 9 and then wraps around."
  },
  subtract: {
    title: "Modular Subtraction",
    content: "Modular subtraction performs (a - b) mod m, ensuring the result stays within the range [0, m-1]. If the result is negative, we add m repeatedly until we get a non-negative number. Formally, we compute ((a - b) % m + m) % m. Modular subtraction is used in various algorithms, especially in cryptography where negative numbers need to be avoided. [Learn more about modular subtraction](!#modular-subtraction)",
    example: "Example: (3 - 7) mod 10 = 6 because -4 mod 10 = 6. This can be verified as (3 - 7) = -4, and (-4 + 10) = 6."
  },
  multiply: {
    title: "Modular Multiplication",
    content: "Modular multiplication calculates (a × b) mod m. This operation is crucial in number theory, cryptographic algorithms (like RSA), and computational methods that need to keep numbers within specific bounds. When dealing with large numbers, direct multiplication might cause overflow, so we often apply the modulo at intermediate steps: ((a mod m) × (b mod m)) mod m. [Learn more about modular multiplication](!#modular-multiplication)",
    example: "Example: (6 × 7) mod 10 = 2 because 42 mod 10 = 2. This is like watching a car's odometer, where after 9 it rolls back to 0."
  },
  divide: {
    title: "Modular Division",
    content: "Modular division is defined as (a × b⁻¹) mod m, where b⁻¹ is the modular multiplicative inverse of b under modulus m. Unlike regular division, modular division only works when b and m are coprime (their GCD is 1). Otherwise, no unique solution exists. This operation is extensively used in public-key cryptography algorithms like RSA and in solutions to certain types of linear congruence equations. [Learn more about modular division](!#modular-division)",
    example: "Example: For 8 ÷ 3 mod 10, we first find that 3⁻¹ mod 10 = 7 (because 3 × 7 = 21, and 21 mod 10 = 1). Then (8 × 7) mod 10 = 56 mod 10 = 6."
  },
  exponent: {
    title: "Modular Exponentiation",
    content: "Modular exponentiation efficiently calculates a^b mod m without computing the full value of a^b first (which could be astronomically large). Fast algorithms like square-and-multiply reduce the number of operations needed. This is one of the most important operations in cryptography, forming the backbone of RSA encryption and many other cryptographic protocols that require efficient computation with large numbers. [Learn more about modular exponentiation](!#modular-exponentiation)",
    example: "Example: 4^13 mod 497 = 445. Direct calculation of 4^13 = 67,108,864 is unnecessary because we can apply modulo operations during intermediate steps of the calculation."
  },
  inverse: {
    title: "Modular Multiplicative Inverse",
    content: "The modular multiplicative inverse of a with respect to modulus m is a number a⁻¹ such that (a × a⁻¹) mod m = 1. This inverse exists if and only if a and m are coprime (gcd(a,m) = 1). The extended Euclidean algorithm efficiently finds this inverse. Modular inverses are crucial in cryptography (especially RSA), solving modular equations, and in many number-theoretic applications. [Learn more about the modular inverse](!#modular-inverse)",
    example: "Example: The inverse of 3 mod 10 is 7, because (3 × 7) mod 10 = 21 mod 10 = 1. This means 3 and 10 are coprime, and 7 is the unique number that satisfies the inverse relationship."
  },
  congruence: {
    title: "Modular Congruence Check",
    content: "Two numbers a and b are congruent modulo m if they leave the same remainder when divided by m. We write this as a ≡ b (mod m). Mathematically, this means m divides (a-b), or a mod m = b mod m. Congruence relations form equivalence classes and simplify many problems in number theory and computer science by allowing us to work with smaller, more manageable numbers. [Learn more about congruence](!#congruence-check)",
    example: "Example: 17 ≡ 2 (mod 5) because both 17 and 2 leave remainder 2 when divided by 5. Similarly, 25 ≡ 0 (mod 5) because both are divisible by 5."
  },
  gcd: {
    title: "Greatest Common Divisor (GCD)",
    content: "The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both numbers without a remainder. The Euclidean algorithm efficiently computes GCD through successive division and remainder operations. GCD has wide applications in number theory, cryptography (especially for key generation in RSA), fraction simplification, and determining if numbers are coprime, which is essential for modular inverses. [Learn more about GCD](!#greatest-common-divisor) · [All GCD and LCM](!#understanding-gcd-and-lcm)",
    example: "Example: GCD(48, 18) = 6 because 6 is the largest positive integer that divides both 48 and 18 without a remainder. This can be verified as 48 = 6×8 and 18 = 6×3."
  },
  lcm: {
    title: "Least Common Multiple (LCM)",
    content: "The Least Common Multiple (LCM) of two integers is the smallest positive integer that is divisible by both numbers. It can be calculated using the relationship: LCM(a,b) = (a×b)/GCD(a,b). LCM is important in fraction arithmetic (finding common denominators), scheduling problems (finding when cycles align), and in various areas of computer science and discrete mathematics. [Learn more about LCM](!#least-common-multiple) · [All GCD and LCM](!#understanding-gcd-and-lcm)",
    example: "Example: LCM(4, 6) = 12 because 12 is the smallest positive integer divisible by both 4 and 6. We can verify this as 12 = 4×3 = 6×2."
  },
  coprime: {
    title: "Coprime (Relatively Prime) Check",
    content: "Two integers are coprime (or relatively prime) if their Greatest Common Divisor (GCD) is 1. This means they share no common factors other than 1. The concept of coprime numbers is fundamental in number theory and cryptography. For modular arithmetic, when a and m are coprime, a has a multiplicative inverse modulo m, making modular division possible. Euler's totient function counts the numbers coprime to a given integer. [Learn more about coprime numbers](!#why-coprime-numbers-matter)",
    example: "Example: 25 and 36 are coprime because GCD(25, 36) = 1. Despite both being composite numbers (25 = 5² and 36 = 2² × 3²), they don't share any prime factors."
  },
};

const detailInstructions = [
  `Pick an operation in the **Operation** dropdown. Thirteen are listed, from basic modulo to GCD and coprime checks; the boxes below change to two or three. [Learn more about the operations](!#understanding-the-13-operation-types)`,
  `Type the numbers: **First Number (a)**, then the **Modulus (m)** or **Second Number (b)**, and for three-number operations the modulus in the third box. Whole numbers, negatives and decimals are accepted. [Learn more about the inputs](!#working-with-different-number-types)`,
  `Click **Calculate**. The result appears in the blue box under the buttons; a red message appears instead when a number is missing, the modulus is zero, or an inverse does not exist. [Learn more about the results](!#reading-and-interpreting-results)`,
  `The panel on the right explains the chosen operation with a definition and an example, and its link opens the section below that explains it in full. [Learn more about the panel](!#reading-and-interpreting-results)`,
  `Click **Reset** to clear the boxes and the result; the operation stays selected. [Learn more about getting started](!#getting-started-with-the-calculator)`,
];

const demos = {
  'getting-started-with-the-calculator': {
    title: 'A first modulo and Reset',
    script: [
      { say: 'TYPE 17 as the first number', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '17' },
      { wait: 1600 },
      { say: 'TYPE 5 as the modulus\n17 = 5 × 3 + 2.', at: 'tr' },
      { set: { css: 'input', nth: 1 }, value: '5' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nResult: 2, the remainder.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'CLICK Reset\nBoxes and result cleared.\nThe operation stays selected.', at: 'tr' },
      { click: { button: 'Reset' } },
      { wait: 2200 },
    ],
  },
  'understanding-the-13-operation-types': {
    title: 'Two-number and three-number operations',
    script: [
      { say: 'PICK Modular Addition\nA third box, Modulus, appears.\nPanel: Modular Addition.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'add' },
      { wait: 2200 },
      { say: 'TYPE 8, 7 and 10\n(8 + 7) mod 10.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '8' },
      { set: { css: 'input', nth: 1 }, value: '7' },
      { set: { css: 'input', nth: 2 }, value: '10' },
      { wait: 1800 },
      { say: 'CLICK Calculate\n15 mod 10 = 5.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2200 },
      { say: 'PICK GCD\nTwo boxes again.\nPanel: Greatest Common Divisor.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'gcd' },
      { wait: 2400 },
    ],
  },
  'working-with-different-number-types': {
    title: 'Negative and decimal inputs',
    script: [
      { say: 'PICK Negative Number Modulo', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'negative' },
      { wait: 1800 },
      { say: 'TYPE -7 and 5\nA negative first number.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '-7' },
      { set: { css: 'input', nth: 1 }, value: '5' },
      { wait: 1800 },
      { say: 'CLICK Calculate\n-7 mod 5 = 3, never -2.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'PICK Decimal/Float Modulo\nDecimals allowed.\nThe boxes keep their values.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'float' },
      { wait: 2000 },
      { say: 'TYPE 7.5 and 2, CLICK Calculate\n7.5 mod 2 = 1.5.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '7.5' },
      { set: { css: 'input', nth: 1 }, value: '2' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'reading-and-interpreting-results': {
    title: 'A result and an error message',
    script: [
      { say: 'PICK Modular Inverse\nBoxes: First Number (a) and Modulus (m).', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'inverse' },
      { wait: 2000 },
      { say: 'TYPE 3 and 10', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '3' },
      { set: { css: 'input', nth: 1 }, value: '10' },
      { wait: 1600 },
      { say: 'CLICK Calculate\nResult: 7, since 3 × 7 = 21 and 21 mod 10 = 1.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'TYPE 4 as the first number\n4 and 10 share the factor 2.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '4' },
      { wait: 1600 },
      { say: 'CLICK Calculate\nRed message: 4 has no modular inverse modulo 10.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
    ],
  },
  'exploring-modular-arithmetic-operations': {
    title: 'Modular addition and subtraction',
    script: [
      { say: 'PICK Modular Addition', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'add' },
      { wait: 1600 },
      { say: 'TYPE 8, 7 and 10\n(8 + 7) mod 10.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '8' },
      { set: { css: 'input', nth: 1 }, value: '7' },
      { set: { css: 'input', nth: 2 }, value: '10' },
      { wait: 1800 },
      { say: 'CLICK Calculate\n15 wraps around to 5, like a clock.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
      { say: 'PICK Modular Subtraction\nThe numbers stay: (8 - 7) mod 10.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'subtract' },
      { wait: 2000 },
      { say: 'CLICK Calculate\n(8 - 7) mod 10 = 1.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
    ],
  },
  'using-advanced-cryptographic-operations': {
    title: 'Modular exponentiation and a coprime check',
    script: [
      { say: 'PICK Modular Exponentiation\nThree boxes: a, b and the modulus.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'exponent' },
      { wait: 1800 },
      { say: 'TYPE 4, 13 and 497\n4^13 mod 497.', at: 'tr' },
      { set: { css: 'input', nth: 0 }, value: '4' },
      { set: { css: 'input', nth: 1 }, value: '13' },
      { set: { css: 'input', nth: 2 }, value: '497' },
      { wait: 1800 },
      { say: 'CLICK Calculate\nResult: 445, without computing 4^13 = 67108864.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2600 },
      { say: 'PICK Check if Coprime\nTwo boxes: 4 and 13 stay.', at: 'tr' },
      { set: { css: 'select', nth: 0 }, value: 'coprime' },
      { wait: 2000 },
      { say: 'CLICK Calculate\n4 and 13 are coprime: GCD = 1.', at: 'tr' },
      { click: { button: 'Calculate' } },
      { wait: 2400 },
    ],
  },
};

const keyWords = [
  'modulo calculator',
  'modular arithmetic',
  'remainder calculator',
  'modulo operation',
  'modular addition',
  'modular multiplication',
  'modular division',
  'modular inverse calculator',
  'GCD calculator',
  'LCM calculator',
  'coprime check',
  'congruence calculator',
  'modular exponentiation',
  'online modulo tool',
  'free modulus calculator'
];

const sectionsContent = {
  obj1: {
    title: `Getting Started with the Calculator`,
    content: `Select an operation from the dropdown menu to begin. The calculator offers 13 different modular arithmetic operations, from basic modulo to advanced cryptographic functions. The interface automatically adjusts based on your selection, showing either two or three input fields depending on the operation's requirements.

Enter your numbers in the input fields. The calculator accepts integers, negative numbers, and decimal values. For basic modulo operations like $a \\bmod b$, you'll enter two values. For operations like modular addition $(a + b) \\bmod m$, you'll enter three values including the modulus.

Click the **Calculate** button to compute your result. The answer appears in a highlighted box below the inputs, and the right panel updates with a detailed explanation of the operation including mathematical definitions and concrete examples. If you encounter an error, the calculator displays a clear message in red explaining the issue.

Use the **Reset** button to clear all inputs and start fresh with new calculations. The operation type remains selected, allowing you to quickly try different values with the same operation. A first example to try is $17 \\bmod 5 = 2$; what the remainder means is explained in [what is modular arithmetic](!#what-is-modular-arithmetic).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Understanding the 13 Operation Types`,
    content: `The calculator provides thirteen distinct operations covering the full spectrum of modular arithmetic. **Basic Modulo** computes the remainder $a \\bmod b$, the foundation of all modular operations. **Negative Number Modulo** demonstrates proper handling of negative inputs to ensure results stay within $[0, m-1]$.

**Decimal/Float Modulo** extends operations to non-integer values using the formula $a - b \\times \\lfloor a/b \\rfloor$. The arithmetic operations—**Modular Addition**, **Subtraction**, and **Multiplication**—perform standard calculations while keeping results within modular bounds.

**Modular Division** finds $(a \\times b^{-1}) \\bmod m$ where $b^{-1}$ is the multiplicative inverse. **Modular Exponentiation** computes $a^b \\bmod m$ efficiently using fast algorithms. **Modular Inverse** finds $a^{-1}$ such that $(a \\times a^{-1}) \\bmod m = 1$.

**Congruence Check** verifies if $a \\equiv b \\pmod{m}$. **GCD** and **LCM** calculate the greatest common divisor and least common multiple. **Coprime Check** determines if two numbers share only 1 as a common factor. Each operation includes educational content explaining theory and applications. Operations on three numbers show a third box for the modulus: Modular Addition, for example, computes $(8 + 7) \\bmod 10 = 5$. Which operation fits which problem is discussed in [when to use each operation](!#when-to-use-each-operation).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Working with Different Number Types`,
    content: `The calculator handles three types of numerical inputs seamlessly. **Integer operations** accept whole numbers and provide exact results for all thirteen operation types. Enter values like 17, 42, or 100 directly.

[Negative numbers](!/arithmetic/modulo/negative-numbers) require special handling in modular arithmetic. When you enter $-7$ with modulus $5$, the calculator applies the formula $((a \\bmod b) + b) \\bmod b$ to ensure the result falls within $[0, 4]$. The "Negative Number Handling" operation provides detailed explanations of this adjustment process.

**Decimal numbers** work with most operations, though GCD, LCM, and coprime checks require integers. For float modulo, the calculator uses $a - b \\times \\lfloor a/b \\rfloor$ to compute remainders with fractional values, for example $7.5 \\bmod 2 = 1.5$. This is useful for wrapping coordinates in graphics or handling periodic functions with non-integer periods. How negative inputs are reduced is explained in [negative number modulo](!#negative-number-modulo).

The calculator processes large numbers up to JavaScript's numerical limits. For operations involving very large numbers (common in cryptography), consider the efficiency of modular exponentiation, which avoids computing massive intermediate values.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Reading and Interpreting Results`,
    content: `Results appear in the blue-highlighted box immediately after calculation. For simple operations like basic modulo, you'll see a single numerical answer. For operations like congruence checking, you'll see a statement confirming whether $a \\equiv b \\pmod{m}$ or $a \\not\\equiv b \\pmod{m}$.

The right panel updates simultaneously with each calculation, displaying the operation's title, mathematical definition, and a concrete example. This contextual information helps you understand not just the answer, but the underlying mathematics.

Error messages appear in red when something goes wrong. Common errors include division by zero (when modulus is 0), attempting modular division when numbers aren't coprime, or using non-integers for operations that require whole numbers. Each error message explains exactly what went wrong and how to fix it.

For modular inverse operations, if no inverse exists, the calculator clearly states that the numbers aren't coprime and no unique solution is available: the inverse of $3$ modulo $10$ is $7$, while $4$ has no inverse modulo $10$. This immediate feedback helps you understand the mathematical constraints of each operation. The condition is explained in [modular inverse](!#modular-inverse).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Exploring Modular Arithmetic Operations`,
    content: `Experiment with the four basic arithmetic operations under modular constraints. Try modular addition: compute $(8 + 7) \\bmod 10 = 5$, observing how results wrap around like clock arithmetic. Compare this to regular addition where $8 + 7 = 15$.

Test modular subtraction with examples where results would be negative: $(3 - 7) \\bmod 10 = 6$. Switching from addition to subtraction keeps your numbers, so $8$, $7$ and $10$ give $(8 - 7) \\bmod 10 = 1$. The calculator automatically adjusts negative results to the proper range, demonstrating how modular arithmetic maintains consistency. The rules are proved in [modular addition](!#modular-addition).

Explore modular multiplication with larger numbers. Calculate $(6 \\times 7) \\bmod 10 = 2$ and observe how even large products reduce to values within $[0, 9]$. This property prevents overflow in computer arithmetic.

Try modular division, but note it requires coprime numbers. Attempt $8 \\div 3 \\bmod 10$ (which works) versus $8 \\div 4 \\bmod 10$ (which fails because 4 and 10 aren't coprime). Understanding when division is possible is crucial for cryptographic applications.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Using Advanced Cryptographic Operations`,
    content: `Modular exponentiation is essential for cryptography. Calculate $4^{13} \\bmod 497 = 445$ and observe how the calculator handles this efficiently without computing $4^{13} = 67,108,864$ first. The fast exponentiation algorithm applies modular reduction at each step, keeping numbers manageable.

Explore modular multiplicative inverses, the foundation of RSA encryption. Find the inverse of $3 \\bmod 10$, which is $7$ because $(3 \\times 7) \\bmod 10 = 1$. Try finding inverses for different values and observe when they exist (only when numbers are coprime).

Test the coprime checker to verify relationships before attempting division or finding inverses. Check if $25$ and $36$ are coprime (they are, with $\\text{GCD} = 1$), then verify if $12$ and $18$ are coprime (they aren't, with $\\text{GCD} = 6$); $4$ and $13$ are coprime too. The fast method is explained in [modular exponentiation](!#modular-exponentiation).

Practice with congruence checking to verify equivalences: confirm that $17 \\equiv 2 \\pmod{5}$ because both leave remainder $2$ when divided by $5$. This operation helps verify solutions to modular equations.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What is Modular Arithmetic`,
    content: `Modular arithmetic is a system where numbers wrap around after reaching a certain value called the modulus. Think of a 12-hour clock: after 12 comes 1, not 13. Mathematically, we say $13 \\equiv 1 \\pmod{12}$ because both leave the same remainder when divided by 12.

The modulo operation $a \\bmod m$ finds the remainder when $a$ is divided by $m$. This remainder always falls within $[0, m-1]$. For example, $17 \\bmod 5 = 2$ because $17 = 5 \\times 3 + 2$.

Modular arithmetic appears throughout mathematics and computer science. In cryptography, it forms the basis of RSA encryption. In programming, it handles cyclic structures, array indexing with wraparound, and hash table implementations. Understanding modular arithmetic is essential for computer science, cryptography, and advanced mathematics.

In the calculator this is the **Basic Modulo** operation. The definition and the method are in [what is modulo](!/arithmetic/modulo#1), [how to compute a remainder](!/arithmetic/modulo#51) and [the range of remainders](!/arithmetic/modulo#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Understanding GCD and LCM`,
    content: `The Greatest Common Divisor (GCD) of two integers is the largest number that divides both without remainder. For $\\text{GCD}(48, 18) = 6$ because $6$ is the largest number dividing both $48 = 6 \\times 8$ and $18 = 6 \\times 3$. The Euclidean algorithm computes GCD efficiently through repeated division.

The Least Common Multiple (LCM) is the smallest positive integer divisible by both numbers. For $\\text{LCM}(4, 6) = 12$ because $12$ is the smallest number where both $4$ and $6$ divide evenly. The relationship $\\text{LCM}(a,b) = \\frac{a \\times b}{\\text{GCD}(a,b)}$ connects these concepts.

These functions are fundamental to modular arithmetic. GCD determines if numbers are coprime (when $\\text{GCD} = 1$), which controls whether modular inverses exist. LCM appears in problems involving periodic cycles, fraction arithmetic, and scheduling when multiple cycles must align.

The calculator offers both as separate operations, explained in [greatest common divisor](!#greatest-common-divisor) and [least common multiple](!#least-common-multiple). The lessons [what is GCD](!/arithmetic/divisibility/gcd#1) and [what is LCM](!/arithmetic/divisibility/lcm#1) treat each in full, and [GCD and LCM](!/arithmetic/divisibility#9) shows where they sit among divisibility topics.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Why Coprime Numbers Matter`,
    content: `Two numbers are coprime (relatively prime) when their only common factor is 1, meaning $\\text{GCD}(a, m) = 1$. For example, $25$ and $36$ are coprime despite both being composite, because they share no prime factors: $25 = 5^2$ and $36 = 2^2 \\times 3^2$.

Coprimality determines when modular division and inverses exist. The number $a$ has a multiplicative inverse modulo $m$ if and only if $a$ and $m$ are coprime. This is why $3$ has an inverse mod $10$ (they're coprime), but $4$ doesn't have an inverse mod $10$ (they share factor $2$).

In cryptography, choosing coprime numbers ensures key generation succeeds. Understanding coprimality is essential for working with modular division and inverse operations in this calculator. The **Check if Coprime** operation runs this test. See [coprime numbers](!/arithmetic/divisibility/gcd#7) and [properties of coprime numbers](!/arithmetic/divisibility/gcd#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Common Mistakes and How to Avoid Them`,
    content: `**Forgetting the modulus cannot be zero** is the most common error. Division by zero is undefined, so always ensure your modulus is at least 1. The calculator will alert you with an error message if you try this.

**Expecting modular division to always work** leads to confusion. Remember that modular division only works when the divisor and modulus are coprime. Check the GCD first—if it's not 1, division won't have a unique solution.

**Mishandling negative numbers** causes incorrect results. In modular arithmetic, $-7 \\bmod 5$ should give $3$, not $-2$. The calculator automatically handles this, but when doing manual calculations, remember to add the modulus to negative remainders.

**Using decimals for GCD and LCM** won't work because these operations require integers. The calculator will reject decimal inputs for these specific operations. If you need to work with decimals, use the float modulo operation instead. More pitfalls with negative numbers are listed in [common pitfalls](!/arithmetic/modulo/negative-numbers#10).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Practical Tips for Using This Calculator`,
    content: `**Start simple** with basic modulo operations before moving to advanced functions. Try $17 \\bmod 5$ to understand remainders, then progress to modular addition and multiplication.

**Use the right panel explanations** as learning tools. Each time you calculate, read the explanation to understand the mathematical principles behind the operation. The examples shown match the type of calculation you're performing.

**Verify your homework** by first calculating manually, then checking your answer with the calculator. This helps you learn the concepts while ensuring accuracy. The detailed explanations can also help you understand where you went wrong if answers don't match.

**Experiment with different values** to see patterns. Try the same operation with various moduli to observe how results change. Notice how modular addition with modulus 10 behaves like a clock counting from 0 to 9. Worked problems to practise with are in [worked examples](!/arithmetic/modulo/operations#13).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `When to Use Each Operation`,
    content: `Use **Basic Modulo** for finding simple remainders in division problems, checking if numbers are divisible, or working with cyclic patterns. This is your starting point for all modular arithmetic.

Choose **Modular Addition, Subtraction, or Multiplication** when performing arithmetic that needs to stay within bounds, such as clock calculations, circular buffer indexing, or preventing integer overflow in programming.

Select **Modular Division or Inverse** when solving equations in cryptography, implementing encryption algorithms, or working with fraction arithmetic in modular systems. Remember these only work with coprime numbers.

Pick **GCD and LCM** for simplifying fractions, finding common denominators, or determining if modular inverses exist. Use **Coprime Check** before attempting division or inverse operations to avoid errors. The operations are summarised in [the operations toolkit](!/arithmetic/modulo/operations#14), and the uses of modulo in [why modulo matters](!/arithmetic/modulo#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Negative Number Modulo`,
    content: `A negative dividend still leaves a remainder in the range $[0, m-1]$, but a calculator or a programming language may report a different value. This calculator uses the floored convention: $-7 \\bmod 5 = 3$, because $-7 = 5 \\times (-2) + 3$. Each step down by one lowers the remainder by one and wraps: $-1 \\bmod 5 = 4$, $-10 \\bmod 5 = 0$.

To compute it by hand, take the remainder as if the sign were absent, then subtract it from the modulus: $7 \\bmod 5 = 2$, so $-7 \\bmod 5 = 5 - 2 = 3$. When the first remainder is $0$ the answer stays $0$. The calculator applies $((a \\bmod b) + b) \\bmod b$, which gives the same result and never returns a negative number.

The common mistake is to answer $-2$, which is what truncated division gives: $-7 = 5 \\times (-1) - 2$. Both conventions agree on positive numbers and differ only for negative ones, so always say which one you mean.

The two conventions are compared in [two conventions](!/arithmetic/modulo/negative-numbers#2) and [floored division](!/arithmetic/modulo/negative-numbers#4); the short version is in [negative dividends](!/arithmetic/modulo#71).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Decimal Modulo`,
    content: `The modulo operation extends to decimals with the same idea: subtract the largest whole-number multiple of the divisor that fits, and keep what is left. The formula is $a - b \\times \\lfloor a / b \\rfloor$, where $\\lfloor x \\rfloor$ rounds down. For $7.5 \\bmod 2$: $7.5 / 2 = 3.75$, round down to $3$, and $7.5 - 2 \\times 3 = 1.5$. For $5.5 \\bmod 1.5$: $5.5 / 1.5 \\approx 3.67$, round down to $3$, and $5.5 - 1.5 \\times 3 = 1$.

Decimal modulo is used for anything that repeats with a non-integer period: an angle reduced to $[0, 360)$, a time of day in hours, or a wave with period $2\\pi$.

The common mistake is a rounding surprise: a computer stores most decimals approximately, so the raw result of $7.5 \\bmod 2.2$ is $0.8999999999999995$ rather than $0.9$. The calculator rounds the result to twelve significant digits, so it shows $0.9$; when you compute by hand or in code, read such a result as $0.9$, since the difference is floating-point error, not mathematics.

The floor formula is the same one that defines the modulo of negative numbers; see [floored division](!/arithmetic/modulo/negative-numbers#4) and [how to compute a remainder](!/arithmetic/modulo#51).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Modular Addition`,
    content: `Modular addition adds two numbers and reduces the sum: $(a + b) \\bmod m$. It is clock arithmetic: on a clock with $m$ hours, moving $b$ hours past $a$ lands on $(a + b) \\bmod m$.

Example: $(8 + 7) \\bmod 10$. First $8 + 7 = 15$, then $15 \\bmod 10 = 5$. On a $12$-hour clock, $(23 + 19) \\bmod 12 = 42 \\bmod 12 = 6$: $19$ hours after $23$ o'clock is $6$ o'clock.

The numbers can be reduced before adding without changing the answer: $(a \\bmod m + b \\bmod m) \\bmod m$ gives the same result, which keeps the arithmetic small when $a$ and $b$ are large. The common mistake is to forget the final reduction and report $15$ instead of $5$; the result must lie in $[0, m-1]$.

The rule and its proof are in [addition](!/arithmetic/modulo/operations#3) and [the core principle](!/arithmetic/modulo/operations#2); clock questions are solved in [clock problems](!/arithmetic/modulo/operations#10).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Modular Subtraction`,
    content: `Modular subtraction computes $(a - b) \\bmod m$ and, when the difference is negative, adds the modulus to bring it back into $[0, m-1]$.

Example: $(3 - 7) \\bmod 10$. The difference is $-4$; adding $10$ gives $6$, so the answer is $6$. On a $12$-hour clock, $9$ hours before $2$ o'clock is $(2 - 9) \\bmod 12 = -7 + 12 = 5$ o'clock. The calculator computes $((a - b) \\bmod m + m) \\bmod m$, which handles both signs.

A check: $6 + 7 = 13$ and $13 \\bmod 10 = 3$, the number we started from, so subtracting $7$ really did undo adding $7$. The common mistake is to stop at $-4$: a negative value is not a valid remainder.

See [subtraction](!/arithmetic/modulo/operations#4) for the rule and [negative dividends](!/arithmetic/modulo#71) for why the modulus is added.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Modular Multiplication`,
    content: `Modular multiplication computes $(a \\times b) \\bmod m$: multiply, then take the remainder.

Example: $(6 \\times 7) \\bmod 10 = 42 \\bmod 10 = 2$. With a prime modulus: $(13 \\times 17) \\bmod 11 = 221 \\bmod 11 = 1$, since $221 = 11 \\times 20 + 1$. The factors may be reduced first: $13 \\bmod 11 = 2$ and $17 \\bmod 11 = 6$, and $(2 \\times 6) \\bmod 11 = 12 \\bmod 11 = 1$, the same answer with smaller numbers.

Reducing first matters in practice: multiplying very large numbers directly overflows a computer's integers, while $(a \\bmod m) \\times (b \\bmod m)$ stays small. The common mistake is to reduce the factors and forget the product; the final result always needs one more reduction.

The rule is in [multiplication](!/arithmetic/modulo/operations#5); the last-digit trick, which is multiplication modulo $10$, is in [last digit problems](!/arithmetic/modulo/operations#9).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `Modular Division`,
    content: `Division modulo $m$ is not a division at all: $a \\div b \\bmod m$ means $(a \\times b^{-1}) \\bmod m$, where $b^{-1}$ is the number whose product with $b$ leaves remainder $1$. Such a number exists only when $b$ and $m$ are coprime.

Example: $8 \\div 3 \\bmod 10$. The inverse of $3$ modulo $10$ is $7$, because $3 \\times 7 = 21$ and $21 \\bmod 10 = 1$. Then $8 \\times 7 = 56$ and $56 \\bmod 10 = 6$. Check: $6 \\times 3 = 18$ and $18 \\bmod 10 = 8$, the number we divided.

$8 \\div 4 \\bmod 10$ has no single answer: both $x = 2$ and $x = 7$ give $4x \\bmod 10 = 8$, because $4$ and $10$ share the factor $2$. The calculator reports that $4$ has no modular inverse modulo $10$. The common mistake is to divide normally and reduce: $8 \\div 4 = 2$ is one of two answers here, and $8 \\div 3$ is not even a whole number.

Why division behaves differently is explained in [why division is different](!/arithmetic/modulo/operations#8); the condition on the divisor is in [coprime numbers](!/arithmetic/divisibility/gcd#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj19: {
    title: `Modular Exponentiation`,
    content: `Modular exponentiation computes $a^b \\bmod m$ without ever forming $a^b$. The trick is to reduce after every multiplication, because $(x \\times y) \\bmod m$ depends only on $x \\bmod m$ and $y \\bmod m$.

Small example: $3^4 \\bmod 5$. $3^2 = 9 \\equiv 4$, then $3^4 = (3^2)^2 \\equiv 4^2 = 16 \\equiv 1 \\pmod{5}$. Larger example: $4^{13} \\bmod 497 = 445$, which the calculator finds by squaring and reducing, never touching $4^{13} = 67108864$. Also $2^{10} \\bmod 7 = 1024 \\bmod 7 = 2$.

The square-and-multiply method reads the exponent in binary: square the running value for each bit, multiply by the base for each bit that is $1$, and reduce each time. It needs about $2 \\log_2 b$ multiplications instead of $b$. The common mistake is to compute the full power first; at cryptographic sizes it fits in no computer. The exponent here must be a non-negative integer.

Powers modulo $m$ and their cycles are in [powers](!/arithmetic/modulo/operations#6) and [detecting cycles in powers](!/arithmetic/modulo/operations#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj20: {
    title: `Modular Inverse`,
    content: `The modular inverse of $a$ modulo $m$ is the number $x$ in $[0, m-1]$ with $(a \\times x) \\bmod m = 1$. It plays the role of $1/a$ in modular arithmetic and exists exactly when $\\gcd(a, m) = 1$.

Example: the inverse of $3$ modulo $10$ is $7$, since $3 \\times 7 = 21$ and $21 \\bmod 10 = 1$. The inverse of $7$ modulo $26$ is $15$, since $7 \\times 15 = 105 = 4 \\times 26 + 1$. The number $4$ has no inverse modulo $10$: every multiple of $4$ is even, so none of them leaves remainder $1$ when divided by $10$.

By hand, the extended Euclidean algorithm writes $\\gcd(a, m) = 1$ as $ax + my = 1$; then $x \\bmod m$ is the inverse. For a small modulus, trying $x = 1, 2, 3, \\dots$ until $ax \\bmod m = 1$ is quicker. The common mistake is to expect an inverse for every number; the calculator says when there is none.

The condition is explained in [why division is different](!/arithmetic/modulo/operations#8) and [properties of coprime numbers](!/arithmetic/divisibility/gcd#8); the algorithm in [Euclidean algorithm step by step](!/arithmetic/divisibility/gcd#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj21: {
    title: `Congruence Check`,
    content: `Two numbers are congruent modulo $m$ when they leave the same remainder on division by $m$, written $a \\equiv b \\pmod{m}$. Equivalently, $m$ divides $a - b$.

Example: $17 \\equiv 2 \\pmod{5}$, because $17 \\bmod 5 = 2$ and $2 \\bmod 5 = 2$; also $17 - 2 = 15$ is a multiple of $5$. Likewise $14 \\equiv 23 \\pmod{9}$, since both leave remainder $5$. But $17 \\not\\equiv 3 \\pmod{5}$: the remainders are $2$ and $3$.

The calculator reduces both numbers with the floored rule, so negative inputs work: $-7 \\equiv 3 \\pmod{5}$. Congruence is what makes modular arithmetic consistent: congruent numbers can replace each other in sums and products without changing the result modulo $m$. The common mistake is to compare $a$ with $b$ directly instead of comparing $a \\bmod m$ with $b \\bmod m$; the modulus is the third number.

See [congruence](!/arithmetic/modulo#5), [properties of congruence](!/arithmetic/modulo#6) and the [congruence perspective](!/arithmetic/modulo/negative-numbers#8) on negative numbers.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj22: {
    title: `Greatest Common Divisor`,
    content: `The greatest common divisor of two integers is the largest positive integer that divides both. $\\gcd(48, 18) = 6$: the divisors of $18$ are $1, 2, 3, 6, 9, 18$, and $6$ is the largest of them that also divides $48$.

The Euclidean algorithm finds it without listing divisors: divide and keep the remainder until the remainder is $0$; the last non-zero remainder is the GCD. For $48$ and $18$: $48 = 2 \\times 18 + 12$, $18 = 1 \\times 12 + 6$, $12 = 2 \\times 6 + 0$, so the GCD is $6$. Each line is a modulo operation, which is why the GCD belongs in this calculator.

$\\gcd(a, b) = 1$ means the numbers are coprime; that is the test behind modular division and inverses. The common mistake is to stop at any common divisor: $2$ and $3$ divide both $48$ and $18$, but the greatest one is $6$. The calculator takes absolute values, so negative inputs give the same GCD.

The three methods are in [what is GCD](!/arithmetic/divisibility/gcd#1) and [Euclidean algorithm step by step](!/arithmetic/divisibility/gcd#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj23: {
    title: `Least Common Multiple`,
    content: `The least common multiple of two integers is the smallest positive integer that both divide. $\\mathrm{lcm}(4, 6) = 12$: the multiples of $6$ are $6, 12, 18, \\dots$, and $12$ is the first that is also a multiple of $4$.

The quickest method uses the GCD: $\\mathrm{lcm}(a, b) = \\frac{a \\times b}{\\gcd(a, b)}$. For $48$ and $18$: $\\gcd = 6$, so $\\mathrm{lcm} = \\frac{48 \\times 18}{6} = \\frac{864}{6} = 144$. For $4$ and $6$: $\\gcd = 2$ and $\\frac{24}{2} = 12$. When the numbers are coprime the LCM is simply their product.

The LCM is the common denominator for adding fractions and the first moment two repeating cycles coincide: two lights blinking every $4$ and every $6$ seconds blink together every $12$ seconds. The common mistake is to take the product $a \\times b$ as the LCM; it is a common multiple but not the least one unless the numbers are coprime.

See [what is LCM](!/arithmetic/divisibility/lcm#1), [using GCD](!/arithmetic/divisibility/lcm#5) and [the GCD and LCM relationship](!/arithmetic/divisibility/lcm#6).`,
    before: ``,
    after: ``,
    link: '',
  },
};

const faqQuestions = {
  obj1: {
    question: "What is the modulo operation and how does it work?",
    answer: "The modulo operation finds the remainder when one number is divided by another. For a mod b, you divide a by b and return the remainder. For example, 17 mod 5 equals 2 because 17 divided by 5 is 3 with remainder 2. The result always falls within the range [0, b-1] for positive modulus b."
  },
  obj2: {
    question: "How do you calculate modular multiplication?",
    answer: "Modular multiplication computes (a × b) mod m by first multiplying the numbers, then taking the remainder when divided by the modulus. For example, (6 × 7) mod 10 = 42 mod 10 = 2. For large numbers, you can apply the modulus to intermediate results to prevent overflow."
  },
  obj3: {
    question: "When does a modular multiplicative inverse exist?",
    answer: "A modular multiplicative inverse of a modulo m exists if and only if a and m are coprime, meaning their GCD equals 1. For example, 3 has an inverse mod 10 (which is 7) because GCD(3,10) = 1, but 4 has no inverse mod 10 because GCD(4,10) = 2."
  },
  obj4: {
    question: "Why is modular arithmetic important in cryptography?",
    answer: "Modular arithmetic is fundamental to modern cryptography. RSA encryption relies on modular exponentiation and the difficulty of finding modular logarithms. Modular inverses enable decryption, while coprime relationships ensure key validity. The mathematical properties of modular systems provide the security foundation for secure communication."
  },
  obj5: {
    question: "How do you handle negative numbers in modulo operations?",
    answer: "To handle negative numbers in modulo operations, use the formula ((a mod b) + b) mod b to ensure the result falls within [0, b-1]. For example, -7 mod 5 equals 3 because (-7 mod 5) = -2, then (-2 + 5) = 3. This adjustment keeps results in the standard non-negative range."
  },
  obj6: {
    question: "What is a mod b when a is smaller than b, like 5 mod 10?",
    answer: "When a is smaller than b and both are positive, b fits into a zero times, so the remainder is a itself. For example, 5 mod 10 = 5, 7 mod 10 = 7 and 3 mod 8 = 3. Only when a reaches b does the result wrap around: 10 mod 10 = 0 and 12 mod 10 = 2."
  },
  obj7: {
    question: "How do I find the last digit of a number using mod 10?",
    answer: "The last digit of a whole number is its remainder when divided by 10. For example, 347 mod 10 = 7 and 1250 mod 10 = 0. In the same way, n mod 2 tells you whether a number is even (0) or odd (1), and n mod 100 gives its last two digits."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Modulo Calculator - Online Modular Arithmetic Tool",
    "description": "Free online modulo calculator for computing remainders, modular arithmetic operations, GCD, LCM, and cryptographic functions. Supports integers, decimals, and negative numbers.",
    "url": "https://www.learnmathclass.com/calculators/modulo-calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Basic modulo operation with remainder calculation",
      "Modular arithmetic operations (addition, subtraction, multiplication, division)",
      "Modular exponentiation for cryptographic calculations",
      "Modular multiplicative inverse computation",
      "GCD and LCM calculation using Euclidean algorithm",
      "Coprime number checking and congruence verification",
      "Support for integers, decimals, and negative numbers"
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
    "educationalLevel": "High School, College, University",
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
        "name": "Modulo Calculator",
        "item": "https://www.learnmathclass.com/calculators/modulo-calculator"
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

return {
  props: {
    sectionsContent,
    introContent,
    moduloExplanations,
    detailInstructions,
    demos,
    navigationGroup,
    faqQuestions,
    schemas,
    seoData: {
      title: "Modulo Calculator (Mod Calculator) – Find a mod b | Learn Math Class",
      description: "Calculate modulo, modular arithmetic operations, GCD, LCM, and cryptographic functions online. Free calculator supporting integers, decimals, and negative numbers.",
      keywords: keyWords.join(", "),
      url: "/calculators/modulo-calculator",
      name: "Modulo Calculator - Modular Arithmetic Tool"
    },
  }
}
}

export default function ModuloCalculatorPage({seoData, sectionsContent, introContent, moduloExplanations, detailInstructions, demos, navigationGroup, faqQuestions, schemas}) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.6}
    minHeight={264}
    renderText={processContent}
  >
    <ModuloCalculator explanations={moduloExplanations}/>
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
    id: 'understanding-the-13-operation-types',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('understanding-the-13-operation-types'), sectionsContent.obj2.content],
  },
  {
    id: 'working-with-different-number-types',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('working-with-different-number-types'), sectionsContent.obj3.content],
  },
  {
    id: 'reading-and-interpreting-results',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [demoPlayer('reading-and-interpreting-results'), sectionsContent.obj4.content],
  },
  {
    id: 'exploring-modular-arithmetic-operations',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [demoPlayer('exploring-modular-arithmetic-operations'), sectionsContent.obj5.content],
  },
  {
    id: 'using-advanced-cryptographic-operations',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('using-advanced-cryptographic-operations'), sectionsContent.obj6.content],
  },
  {
    id: 'what-is-modular-arithmetic',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'negative-number-modulo',
    title: sectionsContent.obj13.title,
    link: sectionsContent.obj13.link,
    content: [sectionsContent.obj13.content],
  },
  {
    id: 'decimal-modulo',
    title: sectionsContent.obj14.title,
    link: sectionsContent.obj14.link,
    content: [sectionsContent.obj14.content],
  },
  {
    id: 'modular-addition',
    title: sectionsContent.obj15.title,
    link: sectionsContent.obj15.link,
    content: [sectionsContent.obj15.content],
  },
  {
    id: 'modular-subtraction',
    title: sectionsContent.obj16.title,
    link: sectionsContent.obj16.link,
    content: [sectionsContent.obj16.content],
  },
  {
    id: 'modular-multiplication',
    title: sectionsContent.obj17.title,
    link: sectionsContent.obj17.link,
    content: [sectionsContent.obj17.content],
  },
  {
    id: 'modular-division',
    title: sectionsContent.obj18.title,
    link: sectionsContent.obj18.link,
    content: [sectionsContent.obj18.content],
  },
  {
    id: 'modular-exponentiation',
    title: sectionsContent.obj19.title,
    link: sectionsContent.obj19.link,
    content: [sectionsContent.obj19.content],
  },
  {
    id: 'modular-inverse',
    title: sectionsContent.obj20.title,
    link: sectionsContent.obj20.link,
    content: [sectionsContent.obj20.content],
  },
  {
    id: 'congruence-check',
    title: sectionsContent.obj21.title,
    link: sectionsContent.obj21.link,
    content: [sectionsContent.obj21.content],
  },
  {
    id: 'understanding-gcd-and-lcm',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'greatest-common-divisor',
    title: sectionsContent.obj22.title,
    link: sectionsContent.obj22.link,
    content: [sectionsContent.obj22.content],
  },
  {
    id: 'least-common-multiple',
    title: sectionsContent.obj23.title,
    link: sectionsContent.obj23.link,
    content: [sectionsContent.obj23.content],
  },
  {
    id: 'why-coprime-numbers-matter',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
  },
  {
    id: 'common-mistakes-and-how-to-avoid-them',
    title: sectionsContent.obj10.title,
    link: sectionsContent.obj10.link,
    content: [sectionsContent.obj10.content],
  },
  {
    id: 'practical-tips-for-using-this-calculator',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [sectionsContent.obj11.content],
  },
  {
    id: 'when-to-use-each-operation',
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
        grid-template-columns: 20% 80%;
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
    <br/>
    <br/>
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Modulo Calculator</h1>
    <div style={{marginBottom:'20px'}}>
      <ExplanationDetails
        instructions={detailInstructions}
        title='How to use Modulo Calculator'
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
            <ModuloCalculator explanations={moduloExplanations}/>
          </div> 
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