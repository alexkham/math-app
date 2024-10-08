// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import MatrixTranspositionCalculator from '@/app/components/matrix-multiplication/MatrixTranspositionCalculator'
// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../pages.css'

// export default function MatrixTranspositionCalculatorPage() {
//   const keyWords=["matrix transpositoion", "transpose","a transpose", "matrix transposition calculator"]
//   return (
//    <>
//    <MyNavbar/>
//    <br/>
//    <br/>
//    <br/>
//    <Breadcrumb/>
//    <h1 className='title' style={{marginBottom:'-10px', marginTop:'-30px'}}>Matrix Transposition Calculator</h1>
//    <MatrixTranspositionCalculator/>
//    <ScrollUpButton/>
//    </>
//   )
// }

import React from 'react'
import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import MatrixTranspositionCalculator from '@/app/components/matrix-multiplication/MatrixTranspositionCalculator'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import '../../pages.css'

export default function MatrixTranspositionCalculatorPage({ keyWords = [], description = '' }) {
  return (
    <>
      <Head>
        <title>Matrix Transposition Calculator | LearnMathClass.com</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://learnmathclass.com/matrix-transposition-calculator" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://learnmathclass.com/matrix-transposition-calculator" />
        <meta property="og:title" content="Matrix Transposition Calculator | LearnMathClass.com" />
        <meta property="og:description" content={description} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://learnmathclass.com/matrix-transposition-calculator" />
        <meta property="twitter:title" content="Matrix Transposition Calculator | LearnMathClass.com" />
        <meta property="twitter:description" content={description} />
      </Head>
      
      <MyNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <h1 className='title' style={{marginBottom:'-10px', marginTop:'-10px'}}>Matrix Transposition Calculator</h1>
      <br/>
      <div style={{
        transform: 'scale(0.9)', 
        transformOrigin: 'top center',
        height: '110vh', // Increase the height to accommodate scaled content
      }}>
      <MatrixTranspositionCalculator/>
      </div>
      <ScrollUpButton/>
    </>
  )
}

export async function getStaticProps() {
  const keyWords = ["matrix transposition", "transpose", "a transpose", "matrix transposition calculator"]
  const description = "Use our Matrix Transposition Calculator to easily transpose matrices. Learn about matrix transposition and practice your linear algebra skills."

  return {
    props: {
      keyWords,
      description
    },
  }
}