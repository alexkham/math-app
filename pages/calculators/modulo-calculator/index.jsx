


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
// //       <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Modulo Calculator</h1>
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
//     <h1 className='title' style={{marginTop:'-40px',marginBottom:'0px'}}>Modulo Calculator</h1>
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
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

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
    content: "The modulo operation finds the remainder when one number is divided by another. Mathematically, if we have a ÷ b = q with remainder r, then a mod b = r. The result is always in the range [0, b-1] for positive b. This operation is fundamental in computer science, appearing in hash functions, random number generation, and cryptography.",
    example: "Example: 17 mod 5 = 2 because 17 = 5×3 + 2, where 2 is the remainder"
  },
  negative: {
    title: "Negative Number Handling",
    content: "When working with negative numbers in modulo operations, we need to ensure the result falls within the standard range [0, m-1]. For negative inputs, we add the modulus repeatedly until we get a positive result. Mathematically, for negative a, we calculate ((a % b) + b) % b to get the correct positive result. This approach ensures consistency with modular arithmetic principles.",
    example: "Example: -7 mod 5 = 3 because -7 = 5×(-2) + 3, or equivalently, -7 ≡ 3 (mod 5)"
  },
  float: {
    title: "Decimal/Float Modulo",
    content: "For floating-point numbers, the modulo operation is defined as a - b × floor(a/b), where floor() rounds down to the nearest integer. This definition ensures the result maintains the same properties as integer modulo. It's particularly useful in applications like signal processing, computer graphics, and numerical simulations where cyclic patterns involve non-integer values.",
    example: "Example: 7.5 mod 2.2 = 0.9 because 7.5 = 2.2×3 + 0.9, where 0.9 is the remainder"
  },
  add: {
    title: "Modular Addition",
    content: "Modular addition computes (a + b) mod m. This operation is essential in modular arithmetic because it keeps the result within the modulo system's bounds. Modular addition has applications in cryptography (especially in stream ciphers), computer arithmetic for preventing overflow, and in clock arithmetic where numbers wrap around after reaching a certain value (like hours on a 12-hour clock).",
    example: "Example: (8 + 7) mod 10 = 5 because 15 mod 10 = 5. Think of this as a clock that goes from 0 to 9 and then wraps around."
  },
  subtract: {
    title: "Modular Subtraction",
    content: "Modular subtraction performs (a - b) mod m, ensuring the result stays within the range [0, m-1]. If the result is negative, we add m repeatedly until we get a non-negative number. Formally, we compute ((a - b) % m + m) % m. Modular subtraction is used in various algorithms, especially in cryptography where negative numbers need to be avoided.",
    example: "Example: (3 - 7) mod 10 = 6 because -4 mod 10 = 6. This can be verified as (3 - 7) = -4, and (-4 + 10) = 6."
  },
  multiply: {
    title: "Modular Multiplication",
    content: "Modular multiplication calculates (a × b) mod m. This operation is crucial in number theory, cryptographic algorithms (like RSA), and computational methods that need to keep numbers within specific bounds. When dealing with large numbers, direct multiplication might cause overflow, so we often apply the modulo at intermediate steps: ((a mod m) × (b mod m)) mod m.",
    example: "Example: (6 × 7) mod 10 = 2 because 42 mod 10 = 2. This is like watching a car's odometer, where after 9 it rolls back to 0."
  },
  divide: {
    title: "Modular Division",
    content: "Modular division is defined as (a × b⁻¹) mod m, where b⁻¹ is the modular multiplicative inverse of b under modulus m. Unlike regular division, modular division only works when b and m are coprime (their GCD is 1). Otherwise, no unique solution exists. This operation is extensively used in public-key cryptography algorithms like RSA and in solutions to certain types of linear congruence equations.",
    example: "Example: For 8 ÷ 3 mod 10, we first find that 3⁻¹ mod 10 = 7 (because 3 × 7 = 21, and 21 mod 10 = 1). Then (8 × 7) mod 10 = 56 mod 10 = 6."
  },
  exponent: {
    title: "Modular Exponentiation",
    content: "Modular exponentiation efficiently calculates a^b mod m without computing the full value of a^b first (which could be astronomically large). Fast algorithms like square-and-multiply reduce the number of operations needed. This is one of the most important operations in cryptography, forming the backbone of RSA encryption and many other cryptographic protocols that require efficient computation with large numbers.",
    example: "Example: 4^13 mod 497 = 445. Direct calculation of 4^13 = 67,108,864 is unnecessary because we can apply modulo operations during intermediate steps of the calculation."
  },
  inverse: {
    title: "Modular Multiplicative Inverse",
    content: "The modular multiplicative inverse of a with respect to modulus m is a number a⁻¹ such that (a × a⁻¹) mod m = 1. This inverse exists if and only if a and m are coprime (gcd(a,m) = 1). The extended Euclidean algorithm efficiently finds this inverse. Modular inverses are crucial in cryptography (especially RSA), solving modular equations, and in many number-theoretic applications.",
    example: "Example: The inverse of 3 mod 10 is 7, because (3 × 7) mod 10 = 21 mod 10 = 1. This means 3 and 10 are coprime, and 7 is the unique number that satisfies the inverse relationship."
  },
  congruence: {
    title: "Modular Congruence Check",
    content: "Two numbers a and b are congruent modulo m if they leave the same remainder when divided by m. We write this as a ≡ b (mod m). Mathematically, this means m divides (a-b), or a mod m = b mod m. Congruence relations form equivalence classes and simplify many problems in number theory and computer science by allowing us to work with smaller, more manageable numbers.",
    example: "Example: 17 ≡ 2 (mod 5) because both 17 and 2 leave remainder 2 when divided by 5. Similarly, 25 ≡ 0 (mod 5) because both are divisible by 5."
  },
  gcd: {
    title: "Greatest Common Divisor (GCD)",
    content: "The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both numbers without a remainder. The Euclidean algorithm efficiently computes GCD through successive division and remainder operations. GCD has wide applications in number theory, cryptography (especially for key generation in RSA), fraction simplification, and determining if numbers are coprime, which is essential for modular inverses.",
    example: "Example: GCD(48, 18) = 6 because 6 is the largest positive integer that divides both 48 and 18 without a remainder. This can be verified as 48 = 6×8 and 18 = 6×3."
  },
  lcm: {
    title: "Least Common Multiple (LCM)",
    content: "The Least Common Multiple (LCM) of two integers is the smallest positive integer that is divisible by both numbers. It can be calculated using the relationship: LCM(a,b) = (a×b)/GCD(a,b). LCM is important in fraction arithmetic (finding common denominators), scheduling problems (finding when cycles align), and in various areas of computer science and discrete mathematics.",
    example: "Example: LCM(4, 6) = 12 because 12 is the smallest positive integer divisible by both 4 and 6. We can verify this as 12 = 4×3 = 6×2."
  },
  coprime: {
    title: "Coprime (Relatively Prime) Check",
    content: "Two integers are coprime (or relatively prime) if their Greatest Common Divisor (GCD) is 1. This means they share no common factors other than 1. The concept of coprime numbers is fundamental in number theory and cryptography. For modular arithmetic, when a and m are coprime, a has a multiplicative inverse modulo m, making modular division possible. Euler's totient function counts the numbers coprime to a given integer.",
    example: "Example: 25 and 36 are coprime because GCD(25, 36) = 1. Despite both being composite numbers (25 = 5² and 36 = 2² × 3²), they don't share any prime factors."
  }
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

Use the **Reset** button to clear all inputs and start fresh with new calculations. The operation type remains selected, allowing you to quickly try different values with the same operation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Understanding the 13 Operation Types`,
    content: `The calculator provides thirteen distinct operations covering the full spectrum of modular arithmetic. **Basic Modulo** computes the remainder $a \\bmod b$, the foundation of all modular operations. **Negative Number Modulo** demonstrates proper handling of negative inputs to ensure results stay within $[0, m-1]$.

**Decimal/Float Modulo** extends operations to non-integer values using the formula $a - b \\times \\lfloor a/b \\rfloor$. The arithmetic operations—**Modular Addition**, **Subtraction**, and **Multiplication**—perform standard calculations while keeping results within modular bounds.

**Modular Division** finds $(a \\times b^{-1}) \\bmod m$ where $b^{-1}$ is the multiplicative inverse. **Modular Exponentiation** computes $a^b \\bmod m$ efficiently using fast algorithms. **Modular Inverse** finds $a^{-1}$ such that $(a \\times a^{-1}) \\bmod m = 1$.

**Congruence Check** verifies if $a \\equiv b \\pmod{m}$. **GCD** and **LCM** calculate the greatest common divisor and least common multiple. **Coprime Check** determines if two numbers share only 1 as a common factor. Each operation includes educational content explaining theory and applications.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Working with Different Number Types`,
    content: `The calculator handles three types of numerical inputs seamlessly. **Integer operations** accept whole numbers and provide exact results for all thirteen operation types. Enter values like 17, 42, or 100 directly.

**Negative numbers** require special handling in modular arithmetic. When you enter $-7$ with modulus $5$, the calculator applies the formula $((a \\bmod b) + b) \\bmod b$ to ensure the result falls within $[0, 4]$. The "Negative Number Handling" operation provides detailed explanations of this adjustment process.

**Decimal numbers** work with most operations, though GCD, LCM, and coprime checks require integers. For float modulo, the calculator uses $a - b \\times \\lfloor a/b \\rfloor$ to compute remainders with fractional values. This is useful for wrapping coordinates in graphics or handling periodic functions with non-integer periods.

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

For modular inverse operations, if no inverse exists, the calculator clearly states that the numbers aren't coprime and no unique solution is available. This immediate feedback helps you understand the mathematical constraints of each operation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Exploring Modular Arithmetic Operations`,
    content: `Experiment with the four basic arithmetic operations under modular constraints. Try modular addition: compute $(8 + 7) \\bmod 10 = 5$, observing how results wrap around like clock arithmetic. Compare this to regular addition where $8 + 7 = 15$.

Test modular subtraction with examples where results would be negative: $(3 - 7) \\bmod 10 = 6$. The calculator automatically adjusts negative results to the proper range, demonstrating how modular arithmetic maintains consistency.

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

Test the coprime checker to verify relationships before attempting division or finding inverses. Check if $25$ and $36$ are coprime (they are, with $\\text{GCD} = 1$), then verify if $12$ and $18$ are coprime (they aren't, with $\\text{GCD} = 6$).

Practice with congruence checking to verify equivalences: confirm that $17 \\equiv 2 \\pmod{5}$ because both leave remainder $2$ when divided by $5$. This operation helps verify solutions to modular equations.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What is Modular Arithmetic`,
    content: `Modular arithmetic is a system where numbers wrap around after reaching a certain value called the modulus. Think of a 12-hour clock: after 12 comes 1, not 13. Mathematically, we say $13 \\equiv 1 \\pmod{12}$ because both leave the same remainder when divided by 12.

The modulo operation $a \\bmod m$ finds the remainder when $a$ is divided by $m$. This remainder always falls within $[0, m-1]$. For example, $17 \\bmod 5 = 2$ because $17 = 5 \\times 3 + 2$.

Modular arithmetic appears throughout mathematics and computer science. In cryptography, it forms the basis of RSA encryption. In programming, it handles cyclic structures, array indexing with wraparound, and hash table implementations. Understanding modular arithmetic is essential for computer science, cryptography, and advanced mathematics.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Understanding GCD and LCM`,
    content: `The Greatest Common Divisor (GCD) of two integers is the largest number that divides both without remainder. For $\\text{GCD}(48, 18) = 6$ because $6$ is the largest number dividing both $48 = 6 \\times 8$ and $18 = 6 \\times 3$. The Euclidean algorithm computes GCD efficiently through repeated division.

The Least Common Multiple (LCM) is the smallest positive integer divisible by both numbers. For $\\text{LCM}(4, 6) = 12$ because $12$ is the smallest number where both $4$ and $6$ divide evenly. The relationship $\\text{LCM}(a,b) = \\frac{a \\times b}{\\text{GCD}(a,b)}$ connects these concepts.

These functions are fundamental to modular arithmetic. GCD determines if numbers are coprime (when $\\text{GCD} = 1$), which controls whether modular inverses exist. LCM appears in problems involving periodic cycles, fraction arithmetic, and scheduling when multiple cycles must align.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Why Coprime Numbers Matter`,
    content: `Two numbers are coprime (relatively prime) when their only common factor is 1, meaning $\\text{GCD}(a, m) = 1$. For example, $25$ and $36$ are coprime despite both being composite, because they share no prime factors: $25 = 5^2$ and $36 = 2^2 \\times 3^2$.

Coprimality determines when modular division and inverses exist. The number $a$ has a multiplicative inverse modulo $m$ if and only if $a$ and $m$ are coprime. This is why $3$ has an inverse mod $10$ (they're coprime), but $4$ doesn't have an inverse mod $10$ (they share factor $2$).

In cryptography, choosing coprime numbers ensures key generation succeeds. Understanding coprimality is essential for working with modular division and inverse operations in this calculator.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Common Mistakes and How to Avoid Them`,
    content: `**Forgetting the modulus cannot be zero** is the most common error. Division by zero is undefined, so always ensure your modulus is at least 1. The calculator will alert you with an error message if you try this.

**Expecting modular division to always work** leads to confusion. Remember that modular division only works when the divisor and modulus are coprime. Check the GCD first—if it's not 1, division won't have a unique solution.

**Mishandling negative numbers** causes incorrect results. In modular arithmetic, $-7 \\bmod 5$ should give $3$, not $-2$. The calculator automatically handles this, but when doing manual calculations, remember to add the modulus to negative remainders.

**Using decimals for GCD and LCM** won't work because these operations require integers. The calculator will reject decimal inputs for these specific operations. If you need to work with decimals, use the float modulo operation instead.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Practical Tips for Using This Calculator`,
    content: `**Start simple** with basic modulo operations before moving to advanced functions. Try $17 \\bmod 5$ to understand remainders, then progress to modular addition and multiplication.

**Use the right panel explanations** as learning tools. Each time you calculate, read the explanation to understand the mathematical principles behind the operation. The examples shown match the type of calculation you're performing.

**Verify your homework** by first calculating manually, then checking your answer with the calculator. This helps you learn the concepts while ensuring accuracy. The detailed explanations can also help you understand where you went wrong if answers don't match.

**Experiment with different values** to see patterns. Try the same operation with various moduli to observe how results change. Notice how modular addition with modulus 10 behaves like a clock counting from 0 to 9.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `When to Use Each Operation`,
    content: `Use **Basic Modulo** for finding simple remainders in division problems, checking if numbers are divisible, or working with cyclic patterns. This is your starting point for all modular arithmetic.

Choose **Modular Addition, Subtraction, or Multiplication** when performing arithmetic that needs to stay within bounds, such as clock calculations, circular buffer indexing, or preventing integer overflow in programming.

Select **Modular Division or Inverse** when solving equations in cryptography, implementing encryption algorithms, or working with fraction arithmetic in modular systems. Remember these only work with coprime numbers.

Pick **GCD and LCM** for simplifying fractions, finding common denominators, or determining if modular inverses exist. Use **Coprime Check** before attempting division or inverse operations to avoid errors.`,
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
    navigationGroup,
    faqQuestions,
    schemas,
    seoData: {
      title: "Modulo Calculator | Interactive Modular Arithmetic Tool",
      description: "Calculate modulo, modular arithmetic operations, GCD, LCM, and cryptographic functions online. Free calculator supporting integers, decimals, and negative numbers.",
      keywords: keyWords.join(", "),
      url: "/calculators/modulo-calculator",
      name: "Modulo Calculator - Modular Arithmetic Tool"
    },
  }
}
}

export default function ModuloCalculatorPage({seoData, sectionsContent, introContent, moduloExplanations, navigationGroup, faqQuestions, schemas}) {

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
    <h1 className='title' style={{marginTop:'-40px',marginBottom:'0px'}}>Modulo Calculator</h1>
    <br/>
    
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