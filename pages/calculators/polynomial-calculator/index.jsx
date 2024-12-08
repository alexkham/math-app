// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../../pages.css'
// import PolynomialCalculator from '@/app/components/polynomials/PolynomialCalculator'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

// export default function PolynomialCalculatorPage() {

//     const keyWords=['polynomial','polynomial calculator'
//         ,'polynomial addition','polynomial subtraction'
//         ,'adding and subtracting polynomials'];


//         const instructions = [
//             'Select the desired operation (Addition or Subtraction)',
//             'Press \"Enter Polynomial\" to start setting up your first polynomial',
//             'Select a degree for your polynomial',
//             'Enter coefficients manually or press \"Create Random\" to generate them (you may use both ways)',
//             'Click \"OK\" when done (you can edit later via \"Edit\" button or reset with \"Reset\" button)',
//             'Repeat the same steps for the second polynomial (if needed for chosen operation)',
//             'Click \"Calculate\" to see the result'
//           ];
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
//         panelBackgroundColor='#f2f2f2'/> 
//     <h1 className='title' style={{marginTop:'-30px',marginBottom:'-20px'}}>Polynomial Calculator</h1>
//     <div style={{width:'95%',margin:'auto'}}>
//     <PolynomialCalculator instructions={instructions}/>
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>
//     </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import PolynomialCalculator from '@/app/components/polynomials/PolynomialCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'

export const getStaticProps = async () => {
  const keyWords = [
    'polynomial',
    'polynomial calculator',
    'polynomial addition',
    'polynomial subtraction',
    'adding and subtracting polynomials'
  ];

  const instructions = [
    'Select the desired operation (Addition or Subtraction)',
    'Press \"Enter Polynomial\" to start setting up your first polynomial',
    'Select a degree for your polynomial',
    'Enter coefficients manually or press \"Create Random\" to generate them (you may use both ways)',
    'Click \"OK\" when done (you can edit later via \"Edit\" button or reset with \"Reset\" button)',
    'Repeat the same steps for the second polynomial (if needed for chosen operation)',
    'Click \"Calculate\" to see the result'
  ];

  const operationExplanations = {
    addition: {
      text: "To add polynomials, we combine like terms by adding coefficients of terms with the same degree. Let's look at different cases:",
      sections: [
        {
          title: "General Form:",
          content: `Given two polynomials:
  $$P(x) = a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0$$
  $$Q(x) = b_mx^m + b_{m-1}x^{m-1} + ... + b_1x + b_0$$`
        },
        {
          title: "Case 1: Equal Degrees (n = m)",
          content: `Adding terms with matching degrees:
  $$(a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0)$$
  $$ + (b_nx^n + b_{n-1}x^{n-1} + ... + b_1x + b_0)$$
  $$= (a_n + b_n)x^n + (a_{n-1} + b_{n-1})x^{n-1} + ... + (a_0 + b_0)$$`
        },
        {
          title: "Case 2: Different Degrees (n > m)",
          content: `Higher degree terms remain unchanged:
  $$(a_nx^n + ... + a_mx^m + ... + a_1x + a_0)$$
  $$ + (b_mx^m + ... + b_1x + b_0)$$
  $$= a_nx^n + ... + (a_m + b_m)x^m + ... + (a_0 + b_0)$$`
        },
        {
          title: "Example:",
          content: `$$(2x^3 + 3x^2 + x + 1) + (4x^2 + 2x + 3)$$
  $$= 2x^3 + 7x^2 + 3x + 4$$`
        }
      ],
      note: "Terms appear in descending order of degree. Terms with zero coefficients (like $0x^2$) are automatically omitted."
    },
    subtraction: {
      text: "To subtract polynomials, we distribute the minus sign to all terms of the second polynomial and then combine like terms.",
      sections: [
        {
          title: "General Form:",
          content: `Given two polynomials:
  $$P(x) = a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0$$
  $$Q(x) = b_mx^m + b_{m-1}x^{m-1} + ... + b_1x + b_0$$`
        },
        {
          title: "Case 1: Equal Degrees (n = m)",
          content: `Subtracting corresponding terms:
  $$(a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0)$$
  $$ - (b_nx^n + b_{n-1}x^{n-1} + ... + b_1x + b_0)$$
  $$= (a_n - b_n)x^n + (a_{n-1} - b_{n-1})x^{n-1} + ... + (a_0 - b_0)$$`
        },
        {
          title: "Case 2: Different Degrees (n > m)",
          content: `Higher degree terms remain unchanged:
  $$(a_nx^n + ... + a_mx^m + ... + a_1x + a_0)$$
  $$ - (b_mx^m + ... + b_1x + b_0)$$
  $$= a_nx^n + ... + (a_m - b_m)x^m + ... + (a_0 - b_0)$$`
        },
        {
          title: "Example:",
          content: `$$(2x^3 + 3x^2 + x + 1) - (4x^2 + 2x + 3)$$
  $$= 2x^3 - x^2 - x - 2$$`
        }
      ],
      note: "Remember: When distributing the minus sign, all terms change signs: $+b$ becomes $-b$, and $-b$ becomes $+b$."
    }
  };

//   const operationExplanations = {
//     addition: {
//       text: "To add polynomials, we combine like terms by adding coefficients of terms with the same degree. Let's look at different cases:",
//       example: `Let's say we have polynomials $$P(x) = a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0$$ and $$Q(x) = b_mx^m + b_{m-1}x^{m-1} + ... + b_1x + b_0$$
  
//   When degrees are equal ($n = m$):
//   $$(a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0) + (b_nx^n + b_{n-1}x^{n-1} + ... + b_1x + b_0)$$
//   $$= (a_n + b_n)x^n + (a_{n-1} + b_{n-1})x^{n-1} + ... + (a_1 + b_1)x + (a_0 + b_0)$$
  
//   When degrees differ ($n > m$):
//   $$(a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0) + (b_mx^m + b_{m-1}x^{m-1} + ... + b_1x + b_0)$$
//   $$= a_nx^n + a_{n-1}x^{n-1} + ... + (a_m + b_m)x^m + ... + (a_1 + b_1)x + (a_0 + b_0)$$
  
//   For example: $$(2x^3 + 3x^2 + x + 1) + (4x^2 + 2x + 3) = 2x^3 + 7x^2 + 3x + 4$$`,
//       note: "Terms appear in descending order of degree. Terms with zero coefficients (like $0x^2$) are automatically omitted."
//     },
//     subtraction: {
//       text: "To subtract polynomials, we distribute the minus sign to all terms of the second polynomial and then combine like terms. This is equivalent to adding the negative of the second polynomial.",
//       example: `For polynomials $$P(x) = a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0$$ and \n$$Q(x) = b_mx^m + b_{m-1}x^{m-1} + ... + b_1x + b_0$$
  
//   When degrees are equal ($n = m$):
//   $$(a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0) - (b_nx^n + b_{n-1}x^{n-1} + ... + b_1x + b_0)$$
//   $$= (a_n - b_n)x^n + (a_{n-1} - b_{n-1})x^{n-1} + ... + (a_1 - b_1)x + (a_0 - b_0)$$
  
//   When degrees differ ($n > m$):
//   $$(a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0) - (b_mx^m + b_{m-1}x^{m-1} + ... + b_1x + b_0)$$
//   $$= a_nx^n + a_{n-1}x^{n-1} + ... + (a_m - b_m)x^m + ... + (a_1 - b_1)x + (a_0 - b_0)$$
  
//   For example: $$(2x^3 + 3x^2 + x + 1) - (4x^2 + 2x + 3) = 2x^3 - x^2 - x - 2$$`,
//       note: "Remember: subtracting $P - Q$ is the same as adding $P + (-Q)$. When distributing the minus sign, all terms in $Q$ change signs: $-(b_nx^n)$ becomes $-b_nx^n$, $-(+b_{n-1}x^{n-1})$ becomes $-b_{n-1}x^{n-1}$, and $-(-b_kx^k)$ becomes $+b_kx^k$."
//     }
//   };

//   const operationExplanations = {
//     addition: {
//       text: "Adding polynomials combines like terms: we add coefficients of terms with the same degree. Any term without a match (different degree) remains as is.",
//       example: "($2x^2$ + $3x$ + 1) + (x^2 - x + 4) = 3x^2 + 2x + 5",
//       note: "Note: Zero terms disappear automatically: $x^2 + 0x + 2$ is shown as $x^2 + 2$"
//     },
//     subtraction: {
//       text: "Subtracting polynomials is similar to addition but we subtract coefficients of like terms. It's the same as adding the negative of the second polynomial.",
//       example: "$$(3x^2 + 2x - 1) - (x^2 + 4x + 2) = 2x^2 - 2x - 3$$",
//       note: "Note: Terms in the second polynomial change signs: $P - (x^2 + 2)$ becomes $P + (-x^2 - 2)$"
//     }
//   };


//   const operationExplanations = {
//     addition: {
//       text: "Adding polynomials combines like terms: we add coefficients of terms with the same degree. Any term without a match (different degree) remains as is.",
//       example: "For example: `(2x^2 + 3x + 1) + (x^2 - x + 4) = 3x^2 + 2x + 5`",
//       note: "Note: Zero terms disappear automatically: `x^2 + 0x + 2` is shown as `x^2 + 2`"
//     },
//     subtraction: {
//       text: "Subtracting polynomials is similar to addition but we subtract coefficients of like terms. It's the same as adding the negative of the second polynomial.",
//       example: "For example: `(3x^2 + 2x - 1) - (x^2 + 4x + 2) = 2x^2 - 2x - 3`",
//       note: "Note: Terms in the second polynomial change signs: `P - (x^2 + 2)` becomes `P + (-x^2 - 2)`"
//     }
//   };

  return {
    props: {
      keyWords,
      instructions,
      operationExplanations
    },
    // Revalidate every 24 hours
    revalidate: 86400
  }
}

export default function PolynomialCalculatorPage({ keyWords, instructions,operationExplanations }) {
  return (
    <>
      <Head>
        <title>Polynomial Calculator | Math Calculator</title>
        <meta name="description" content="Free online polynomial calculator. Add and subtract polynomials easily, step by step solution, random polynomial generator." />
        <meta name="keywords" content={keyWords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.learnmathclass.com/calculators/polynomial-calculator" />

        {/* Open Graph metadata */}
        <meta property="og:title" content="Polynomial Calculator | Math Calculator" />
        <meta property="og:description" content="Free online polynomial calculator. Add and subtract polynomials easily, step by step solution, random polynomial generator." />
        <meta property="og:url" content="https://www.learnmathclass.com/calculators/polynomial-calculator" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Polynomial Calculator | Math Calculator" />
        <meta name="twitter:description" content="Free online polynomial calculator. Add and subtract polynomials easily, step by step solution, random polynomial generator." />
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
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 

      <h1 className='title' style={{marginTop:'-30px',marginBottom:'-10px'}}>Polynomial Calculator</h1>
      <div >
        <PolynomialCalculator 
        instructions={instructions}
        operationExplanations={operationExplanations}/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  )
}