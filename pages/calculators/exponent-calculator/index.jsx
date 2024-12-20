// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react';
// import '../../pages.css'
// import ExplanationDetails from '@/app/components/ExplanationDetails';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import ExponentCalculator from '@/app/components/calculators/arithmetics/ExponentCalculator';

// export default function ExponentCalculatorPage() {

//     const keyWords=['exponent calculator','exponential notation calculator',
//         'power calculator','exponential cal',]

//         // const detailInstructions = [
//         //     "Select the type of power operation you want to perform (Square, Cube, or Custom)",
//         //     "Enter your base number in the first input field",
//         //     "For custom powers, enter your desired exponent in the second field",
//         //     "Click Calculate to see the result"
//         // ];


//         const detailInstructions = [
//             "Select the type of power operation you want to perform (Square, Cube, or Custom)",
//             "Enter your base number in the first input field",
//             "For custom powers, enter your desired exponent in the second field",
//             "Click Calculate to see the result"
//         ];
        
//         const explanations = {
//             square: {
//                 text:`When you square a number, you multiply it by itself. In mathematical notation, this is written as $x^2$.
        
//         For example:
//         - $5^2 = 5 × 5 = 25$
//         - $2.5^2 = 2.5 × 2.5 = 6.25$
//         - $(-3)^2 = (-3) × (-3) = 9$
        
//         Remember that when squaring a negative number, the result is always positive because negative × negative = positive.
        
//         This calculator can handle both integer and decimal numbers, and will display the result in standard notation for manageable numbers or scientific notation ($1.234e+10$) for very large or small results.`,
//                 // links: [
//                 //     {
//                 //         title: "Practice square number problems", 
//                 //         link: "/practice/square-numbers"
//                 //     },
//                 //     {
//                 //         title: "Learn about perfect squares",
//                 //         link: "/learn/perfect-squares"
//                 //     }
//                 // ]
//             },
//             cube: {
//                 text: `Cubing a number means multiplying it by itself three times. In mathematical notation, this is written as $x^3$.
        
//         For example:
//         - $2^3 = 2 × 2 × 2 = 8$
//         - $(-2)^3 = (-2) × (-2) × (-2) = -8$
//         - $1.5^3 = 1.5 × 1.5 × 1.5 = 3.375$
        
//         Unlike squares, when cubing a negative number, the result is negative because:
//         negative × negative × negative = negative
        
//         The calculator automatically handles any precision issues and will format very large results ($1000^3 = 1e+9$) in scientific notation for better readability.`,
//                 // links: [
//                 //     {
//                 //         title: "Practice cube number problems",
//                 //         link: "/practice/cube-numbers"
//                 //     },
//                 //     {
//                 //         title: "Explore cube roots",
//                 //         link: "/learn/cube-roots"
//                 //     }
//                 // ]
//             },
//             custom: {
//                 text: `Custom powers allow you to raise a number to any power (exponent). The mathematical notation is $x^n$ where:
//         - $x$ is your base number
//         - $n$ is your chosen power
        
//         Some examples:
//         - $2^4 = 2 × 2 × 2 × 2 = 16$
//         - $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} ≈ 0.1111$
//         - $5^{2.5} = 5^2 × \\sqrt{5} ≈ 55.9017$
        
//         Important rules:
//         - Positive numbers can be raised to any power
//         - Negative numbers can only be raised to integer powers (whole numbers)
//         - For negative bases with even powers, the result is positive
//         - For negative bases with odd powers, the result is negative
//         - Zero raised to a positive power is always 0
//         - Zero raised to zero or negative powers is undefined
        
//         The calculator uses high-precision arithmetic and will automatically format results in scientific notation when they become very large ($2^{100} = 1.2676e+30$) or very small ($2^{-50} = 8.8818e-16$).`,
//                 // links: [
//                 //     {
//                 //         title: "Learn about exponent rules",
//                 //         link: "/learn/exponent-rules"
//                 //     },
//                 //     {
//                 //         title: "Practice with negative exponents",
//                 //         link: "/practice/negative-exponents"
//                 //     },
//                 //     {
//                 //         title: "Understanding scientific notation",
//                 //         link: "/learn/scientific-notation"
//                 //     }
//                 // ]
//             }
//         };

//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//     <OperaSidebar
//         side='right'
//         topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
      
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Exponent Calculator</h1>
//     <div style={{marginBottom:'-20px'}}>
//     <ExplanationDetails 
//     instructions={detailInstructions}
//     title='How to use Exponent Calculator'/>
//     </div>
//     <div style={{transform:'scale(0.85)'}}>
//    <ExponentCalculator explanations={explanations}/>
//    </div>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>   
    
//     </>
//   )
// }


import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ExponentCalculator from '@/app/components/calculators/arithmetics/ExponentCalculator';
import '../../pages.css';

export async function getStaticProps() {
  const detailInstructions = [
    "Select the type of power operation you want to perform (Square, Cube, or Custom)",
    "Enter your base number in the first input field",
    "For custom powers, enter your desired exponent in the second field",
    "Click Calculate to see the result",
    "Hover over ? icons for additional help"
  ];

  const explanations = {
    square: {
      text: `When you square a number, you multiply it by itself. In mathematical notation, this is written as $x^2$.

For example:
- $5^2 = 5 × 5 = 25$
- $2.5^2 = 2.5 × 2.5 = 6.25$
- $(-3)^2 = (-3) × (-3) = 9$

Remember that when squaring a negative number, the result is always positive because negative × negative = positive.

This calculator can handle both integer and decimal numbers, and will display the result in standard notation for manageable numbers or scientific notation ($1.234e+10$) for very large or small results.`,
links:[

  {title:"Explore Exponents Table Page ",
    link:"/tables/arithmetics/exponential-table"}
  
]
    },
    cube: {
      text: `Cubing a number means multiplying it by itself three times. In mathematical notation, this is written as $x^3$.

For example:
- $2^3 = 2 × 2 × 2 = 8$
- $(-2)^3 = (-2) × (-2) × (-2) = -8$
- $1.5^3 = 1.5 × 1.5 × 1.5 = 3.375$

Unlike squares, when cubing a negative number, the result is negative because:
negative × negative × negative = negative

The calculator automatically handles any precision issues and will format very large results ($1000^3 = 1e+9$) in scientific notation for better readability.`
    },
    custom: {
      text: `Custom powers allow you to raise a number to any power (exponent). The mathematical notation is $x^n$ where:
- $x$ is your base number
- $n$ is your chosen power

Some examples:
- $2^4 = 2 × 2 × 2 × 2 = 16$
- $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} ≈ 0.1111$
- $5^{2.5} = 5^2 × \\sqrt{5} ≈ 55.9017$

**Important rules**:
• Positive numbers can be raised to any power
• Negative numbers can only be raised to integer powers (whole numbers)
• For negative bases with even powers, the result is positive
• For negative bases with odd powers, the result is negative
• Zero raised to a positive power is always 0
• Zero raised to zero or negative powers is undefined

The calculator uses high-precision arithmetic and will automatically format results in scientific notation when they become very large ($2^{100} = 1.2676e+30$) or very small ($2^{-50} = 8.8818e-16$).`
    }
  };

  return {
    props: {
      detailInstructions,
      explanations,
    },
    revalidate: 86400
  };
}

export default function ExponentCalculatorPage({ detailInstructions, explanations }) {
  return (
    <>
      <Head>
        <title>Exponent Calculator | Learn Math Class</title>
        <meta name="description" content="Free online exponent calculator for square, cube, and custom powers. Calculate powers and exponents with our easy-to-use calculator with step-by-step explanations." />
        <meta name="keywords" content="exponent calculator, exponential notation calculator, power calculator, exponential cal, math calculator, square calculator, cube calculator" />
        <link rel="canonical" href="https://www.learnmathclass.com/calculators/exponent-calculator" />
        <meta property="og:title" content="Exponent Calculator | Learn Math Class" />
        <meta property="og:description" content="Calculate powers and exponents easily with our free online calculator" />
        <meta property="og:url" content="https://www.learnmathclass.com/calculators/exponent-calculator" />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:type" content="website" />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Exponent Calculator</h1>
      <div style={{marginBottom:'-20px'}}>
        <ExplanationDetails 
          instructions={detailInstructions}
          title='How to use Exponent Calculator'
        />
      </div>
      <div style={{transform:'scale(0.85)'}}>
        <ExponentCalculator explanations={explanations}/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>   
    </>
  );
}