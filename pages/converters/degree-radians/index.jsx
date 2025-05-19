
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import AngleConverter from '@/app/components/converters/AngleConverter'
import { Sidebar } from 'lucide-react'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import ContentBlocks from '@/app/components/page-components/content-components/ContentBlocks'

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

export default function AngleConverterPage({content}) {
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
        topOffset='65px'
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
      <h1 className='title' id='toc'>Measuring Angles</h1>
      <br/>
      <div style={{marginLeft:'100px',marginRight:'100px'}}>
      <ContentBlocks tocItems={content}/>
      </div>
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
  
  const content=[
    {
      title:`Degrees`,
      content:`Degree is a unit used for measuring angles that is equal to one 360-th of full [unit circle](!/visual-tools/unit-circle).
      
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-550 -550 2000 2000">
  <!-- Background -->
  <rect x="-550" y="-550" width="1100" height="1100" fill="#f8f9fa" />
  
  <!-- Coordinate system -->
  <line x1="-500" y1="0" x2="500" y2="0" stroke="#888" stroke-width="1" />
  <line x1="0" y1="-500" x2="0" y2="500" stroke="#888" stroke-width="1" />
  
  <!-- Degree markers (every 30 degrees) -->
  <g stroke="#aaa" stroke-width="1">
    <line x1="-450" y1="0" x2="-500" y2="0" />
    <line x1="450" y1="0" x2="500" y2="0" />
    <line x1="0" y1="-450" x2="0" y2="-500" />
    <line x1="0" y1="450" x2="0" y2="500" />
  </g>
  
  <!-- Unit circle -->
  <circle cx="0" cy="0" r="400" fill="none" stroke="#333" stroke-width="2" />
  
  <!-- Degree lines (every 30 degrees) -->
  <g stroke="#666" stroke-width="1.5" stroke-dasharray="5,5">
    <!-- 0° and 180° already covered by coordinate system -->
    
    <!-- 30° -->
    <line x1="0" y1="0" x2="346.41" y2="-200" />
    <!-- 60° -->
    <line x1="0" y1="0" x2="200" y2="-346.41" />
    <!-- 90° already covered by coordinate system -->
    
    <!-- 120° -->
    <line x1="0" y1="0" x2="-200" y2="-346.41" />
    <!-- 150° -->
    <line x1="0" y1="0" x2="-346.41" y2="-200" />
    <!-- 180° already covered by coordinate system -->
    
    <!-- 210° -->
    <line x1="0" y1="0" x2="-346.41" y2="200" />
    <!-- 240° -->
    <line x1="0" y1="0" x2="-200" y2="346.41" />
    <!-- 270° already covered by coordinate system -->
    
    <!-- 300° -->
    <line x1="0" y1="0" x2="200" y2="346.41" />
    <!-- 330° -->
    <line x1="0" y1="0" x2="346.41" y2="200" />
  </g>
  
  <!-- Degree text (every 30 degrees) -->
  <g font-family="Arial, sans-serif" font-size="20" text-anchor="middle">
    <!-- 0° -->
    <text x="430" y="30">0°</text>
    <!-- 30° -->
    <text x="370" y="-190">30°</text>
    <!-- 60° -->
    <text x="220" y="-340">60°</text>
    <!-- 90° -->
    <text x="0" y="-430">90°</text>
    <!-- 120° -->
    <text x="-220" y="-340">120°</text>
    <!-- 150° -->
    <text x="-370" y="-190">150°</text>
    <!-- 180° -->
    <text x="-430" y="30">180°</text>
    <!-- 210° -->
    <text x="-370" y="210">210°</text>
    <!-- 240° -->
    <text x="-220" y="370">240°</text>
    <!-- 270° -->
    <text x="0" y="430">270°</text>
    <!-- 300° -->
    <text x="220" y="370">300°</text>
    <!-- 330° -->
    <text x="370" y="210">330°</text>
  </g>
  
  <!-- Degree markers (every 10 degrees) -->
  <g stroke="#999" stroke-width="1">
    <!-- Draw small ticks for every 10 degrees -->
    <!-- 10° -->
    <line x1="393.92" y1="-68.4" x2="413.92" y2="-71.94" />
    <!-- 20° -->
    <line x1="375.88" y1="-136.81" x2="394.67" y2="-143.65" />
    <!-- Continue for all other 10° intervals -->
    <!-- ... -->
  </g>
  
  <!-- Special points on the unit circle -->
  <g fill="#e63946" stroke="none">
    <!-- 0° / 360° -->
    <circle cx="400" cy="0" r="6" />
    <!-- 90° -->
    <circle cx="0" cy="-400" r="6" />
    <!-- 180° -->
    <circle cx="-400" cy="0" r="6" />
    <!-- 270° -->
    <circle cx="0" cy="400" r="6" />
    
    <!-- 30° -->
    <circle cx="346.41" cy="-200" r="6" />
    <!-- 60° -->
    <circle cx="200" cy="-346.41" r="6" />
    <!-- 120° -->
    <circle cx="-200" cy="-346.41" r="6" />
    <!-- 150° -->
    <circle cx="-346.41" cy="-200" r="6" />
    <!-- 210° -->
    <circle cx="-346.41" cy="200" r="6" />
    <!-- 240° -->
    <circle cx="-200" cy="346.41" r="6" />
    <!-- 300° -->
    <circle cx="200" cy="346.41" r="6" />
    <!-- 330° -->
    <circle cx="346.41" cy="200" r="6" />
  </g>
  
  <!-- Title -->
  <text x="0" y="-500" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" font-weight="bold">Unit Circle - 360 Degrees</text>
  
  <!-- Center dot -->
  <circle cx="0" cy="0" r="4" fill="#000" />
  
  <!-- Labels for quadrants -->
  <g font-family="Arial, sans-serif" font-size="24" fill="#444" font-weight="bold">
    <text x="150" y="-150" text-anchor="middle">Quadrant I</text>
    <text x="-150" y="-150" text-anchor="middle">Quadrant II</text>
    <text x="-150" y="150" text-anchor="middle">Quadrant III</text>
    <text x="150" y="150" text-anchor="middle">Quadrant IV</text>
  </g>
  
  <!-- Radius example - moved to 0 degrees horizontal -->
  <line x1="0" y1="0" x2="400" y2="0" stroke="#0066cc" stroke-width="3" />
  <text x="200" y="-20" font-family="Arial, sans-serif" font-size="16" fill="#0066cc">r = 1</text> 
</svg> `
    },
    // {
    //   title:``,
    //   content:``
    // },
    // {
    //   title:``,
    //   content:``
    // },
    // {
    //   title:``,
    //   content:``
    // }

  ]

  return {
    props: {
      content
    },
    revalidate: 3600
  }
}