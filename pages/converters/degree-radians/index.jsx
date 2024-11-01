// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../../pages.css'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import AngleConverter from '@/app/components/converters/AngleConverter'
// import { Sidebar } from 'lucide-react'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'

// export default function AngleConverterPage() {

//     const keyWords=[
//         'degree to radians',
//         'radians to degree',
//         'radians',
//         'change radian to degree',
//         'conversion of degree to radian',
//         'conversion of radian to degree',
//         'convert degree to radian',
//         'degree and radian']
//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//    side='right'
//    topOffset='60px' 
//     sidebarWidth='45px'
//      panelWidth='200px'
   
//      iconColor='white'
//      panelBackgroundColor='#f2f2f2'/> 
//     <br/>
//     <br/>
//     <Breadcrumb/>
//     <h1 className='title'  style={{marginBottom:'20px', marginTop:'-20px'}}>Angle Degree to Radians Converter</h1>
//     <AngleConverter/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
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
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import AngleConverter from '@/app/components/converters/AngleConverter'
import { Sidebar } from 'lucide-react'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'

const keywords = [
  'degree to radians',
  'radians to degree',
  'radians',
  'change radian to degree',
  'conversion of degree to radian',
  'conversion of radian to degree',
  'convert degree to radian',
  'degree and radian'
]

export default function AngleConverterPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Angle Degree to Radians Converter",
    "description": "Free online tool to convert angles between degrees and radians."
  }

  return (
    <>
      <Head>
        <title>Angle Converter: Degrees to Radians Calculator | Learn Math Class</title>
        <meta name="description" content="Free online angle converter tool. Convert between degrees and radians with visual representation. Simple, accurate, and easy to use calculator." />
        <meta name="keywords" content={keywords.join(', ')} />
        
        <meta property="og:title" content="Angle Converter: Degrees to Radians Calculator" />
        <meta property="og:description" content="Free online angle converter tool. Convert between degrees and radians with visual representation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.learnmathclass.com/converters/degree-radians" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Angle Converter: Degrees to Radians Calculator" />
        <meta name="twitter:description" content="Convert angles between degrees and radians with this free online calculator." />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        <link rel="canonical" href="https://www.learnmathclass.com/converters/degree-radians" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        topOffset='60px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      
      <br/>
      <br/>
      <Breadcrumb/>
      <h1 className='title' style={{marginBottom:'20px', marginTop:'-20px'}}>Angle Degree to Radians Converter</h1>
      <AngleConverter/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600
  }
}