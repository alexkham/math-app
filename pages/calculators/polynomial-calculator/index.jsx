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

  return {
    props: {
      keyWords,
      instructions
    },
    // Revalidate every 24 hours
    revalidate: 86400
  }
}

export default function PolynomialCalculatorPage({ keyWords, instructions }) {
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

      <h1 className='title' style={{marginTop:'-30px',marginBottom:'-20px'}}>Polynomial Calculator</h1>
      <div style={{width:'95%',margin:'auto'}}>
        <PolynomialCalculator instructions={instructions}/>
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