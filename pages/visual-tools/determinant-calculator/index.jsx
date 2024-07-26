// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import React from 'react'
// import '../../pages.css'
// import DeterminantCalculator from '@/app/components/matrix-multiplication/DeterminantCalculator'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

// export default function DeterminantCalculatorPage() {
//   return (
//    <>
//    <MyNavbar></MyNavbar>
//    <br></br>
//    <br></br>
//    <br></br>
//    <h1 className='title' style={{marginBottom:'20px',marginTop:'20px'}}>Determinant Calculator with Steps</h1>
//    <DeterminantCalculator></DeterminantCalculator>
//    <ScrollUpButton></ScrollUpButton>
//    </>
//   )
// }
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import React from 'react'
import '../../pages.css'
import DeterminantCalculator from '@/app/components/matrix-multiplication/DeterminantCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'

export default function DeterminantCalculatorPage() {
  return (
    <>
      <Head>
        <title>Determinant Calculator with Steps | Matrix Calculator</title>
        <meta name="description" content="Use our free determinant calculator with step-by-step solutions. Easily calculate matrix determinants for 2x2, 3x3, and larger matrices." />
        <meta name="keywords" content="determinant calculator, matrix calculator with steps, matrix determinant, linear algebra calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/determinant-calculator" />
      </Head>
      <MyNavbar />
      <br></br>
      <br></br>
      <br></br>
      <main className="container mx-auto px-4 py-8">
        <h1 className="title" style={{marginBottom:'20px',marginTop:'20px'}}>Determinant Calculator with Steps</h1>
        <DeterminantCalculator />
      </main>
      <ScrollUpButton />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}