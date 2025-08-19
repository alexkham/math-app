
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FactoringCalculator from '@/app/components/calculators/algebra/FactoringCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'

export default function FactoringCalculatorPage() {
  return (
    <>
      <Head>
        <title>Factoring Calculator - Learn Math Class</title>
        <meta name="description" content="Free online factoring calculator. Factor numbers, polynomials, and expressions step by step. Find prime factorization and complete factoring solutions instantly." />
        <meta name="keywords" content="factoring calculator, number factoring, prime factoring, complete factoring, polynomial factoring, math calculator, algebra calculator" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Learn Math Class" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.learnmathclass.com/calculators/factoring-calculator" />
        <meta property="og:title" content="Free Online Factoring Calculator - Learn Math Class" />
        <meta property="og:description" content="Free online factoring calculator. Factor numbers, polynomials, and expressions step by step. Find prime factorization and complete factoring solutions instantly." />
        <meta property="og:image" content="https://www.learnmathclass.com/images/factoring-calculator.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.learnmathclass.com/calculators/factoring-calculator" />
        <meta property="twitter:title" content="Free Online Factoring Calculator - Learn Math Class" />
        <meta property="twitter:description" content="Free online factoring calculator. Factor numbers, polynomials, and expressions step by step. Find prime factorization and complete factoring solutions instantly." />
        <meta property="twitter:image" content="https://www.learnmathclass.com/images/factoring-calculator.png" />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Links */}
        <link rel="canonical" href="https://www.learnmathclass.com/calculators/factoring-calculator" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar
        side='right'
        // topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Factoring Calculator</h1>
      <FactoringCalculator/>
      <br/>
      <ScrollUpButton/>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}