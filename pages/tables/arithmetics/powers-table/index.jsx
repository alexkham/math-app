import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import PowerTable from '@/app/components/tables/PowerTable'
import React from 'react'
import '../../../pages.css'
import ExplanationDetails from '@/app/components/ExplanationDetails';
import Head from 'next/head'

export default function PowersTablePage({keyWords,instructions}) {
  
  return (
    <>
     <Head>
        <title> Powers of Integer Numbers from 1 to 10 | Powers Table | Learn Math Class</title>
        <meta name="description" content="Explore powers of integer numbers from 1 to 10000 with our comprehensive table. " />
        <meta name="keywords" content={keyWords.join(', ')} />
        <link rel="canonical" href="https://www.learnmathclass.com/tables/arithmetics/powers-table" />
        
      
      </Head>
    <GenericNavbar/>
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
    <h1 className='title' style={{marginTop:'-10px',marginBottom:'0px'}}>Table of Powers base 1-10</h1>
   <br/>
   <br/>
   <div style={{ marginBottom: '-30px' }}>
   <ExplanationDetails
     title="About This Table"
     instructions={instructions}
     links={[
        { text: "Exponents Calculator", url: "/calculators/exponent-calculator" },
        { text: "Natural Exponential Table", url: "/tables/arithmetics/exponential-table" }
      ]}/>
      </div>
    <div style={{transform:'scale(0.9)'}}>
    <PowerTable/>
    </div>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
 

export async function getStaticProps() {

    const keyWords=[
        'table of exponents','power table','exponent table',
        'integers exponents', 'exponent chart'
    ]

    const instructions=[
        
        "Use search bar to find specific powers",
        "Input search term",
        "Click Search button",
        "Click × to clear search",
        "Numbers highlighted in yellow are search matches",
        "Scroll to navigate through all powers"
      ]
   
  
    
    return {
      props: {
        keyWords,
        instructions
      },
      // Revalidate every 24 hours
      revalidate: 86400
    };
  }