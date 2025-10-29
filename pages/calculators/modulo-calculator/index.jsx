


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import ModuloCalculator from '@/app/components/calculators/modulo/ModuloCalculator'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
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
      // {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
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
      
    const keyWords = ['modulo', 'modulus', 'modulo calculator',  'modulo addition', 'modulo subtraction', 'modulo multiplication', 'modulo division',  'remainder', 'congruence', 'GCD', 'LCM', 'coprime'];
    const description = "Free online modulo calculator with comprehensive explanations. Calculate basic modulo, modular addition, subtraction, multiplication, division, exponentiation, and more. Learn about GCD, LCM, and modular arithmetic with clear examples.";
    const title = "Modulo Calculator | Online Modular Arithmetic Tool | LearnMathClass";
    
    return {
        props: {
            moduloExplanations,
            keyWords,
            description,
            title,
            canonicalUrl: "https://www.learnmathclass.com/calculators/modulo-calculator",
            navigationGroup,
        }
    }
}

export default function ModuloCalculatorPage({moduloExplanations, keyWords, description,
   title, canonicalUrl,navigationGroup}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyWords.join(', ')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.learnmathclass.com/images/modulo-calculator-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.learnmathclass.com/images/modulo-calculator-og.jpg" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Modulo Calculator",
            "description": description,
            "url": canonicalUrl,
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "LearnMathClass",
              "url": "https://www.learnmathclass.com"
            }
          })}
        </script>
      </Head>
      <style jsx>{`
  @media (max-width: 1024px) {
    :global(.vertical-button-group-container *) {
      position: static !important;
    }
  }
`}</style>
      <GenericNavbar/>
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
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Modulo Calculator</h1>
     
        <div style={{
      display: 'grid',
      gridTemplateColumns: '10% 90%',
      gap: '20px',
      width: '100%'
   }}>
      {/* Left column - Sidebar */}
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

      {/* Right column - Table */}
      <div>
         <div style={{width:'100%',margin:'auto'}}>
          <div style={{transform:'scale(0.95)'}}>
            <ModuloCalculator explanations={moduloExplanations}/>
       
      </div> 
        
            <br/>
           
            
         </div>
      </div>
   </div>
     
      {/* <div style={{transform:'scale(0.95)'}}>
        <ModuloCalculator explanations={moduloExplanations}/>
      </div> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  )
}