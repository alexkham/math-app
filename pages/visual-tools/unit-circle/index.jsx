
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import UnitCircle from '@/app/components/trigo-calculator/UnitCircle'
import React from 'react';
import '../../pages.css'
import Head from 'next/head'
import { processContent } from '@/app/utils/contentProcessor'

export async function getStaticProps() {
   const keyWords = [
       "unit circle","trig circle","radian unit circle",
       "circle of trigonometry","circle unit trigonometry"
   ]


   const unitCircleSVG=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1650 -1650 3300 3300">
  <!-- Background -->
  <rect x="-1650" y="-1650" width="3300" height="3300" fill="#f8f9fa" />
  
  <!-- Coordinate system -->
  <line x1="-1500" y1="0" x2="1500" y2="0" stroke="#888" stroke-width="3" />
  <line x1="0" y1="-1500" x2="0" y2="1500" stroke="#888" stroke-width="3" />
  
  <!-- Degree markers (every 30 degrees) -->
  <g stroke="#aaa" stroke-width="3">
    <line x1="-1350" y1="0" x2="-1500" y2="0" />
    <line x1="1350" y1="0" x2="1500" y2="0" />
    <line x1="0" y1="-1350" x2="0" y2="-1500" />
    <line x1="0" y1="1350" x2="0" y2="1500" />
  </g>
  
  <!-- Unit circle -->
  <circle cx="0" cy="0" r="1200" fill="none" stroke="#333" stroke-width="6" />
  
  <!-- Degree lines (every 30 degrees) -->
  <g stroke="#666" stroke-width="4.5" stroke-dasharray="15,15">
    <!-- 30° -->
    <line x1="0" y1="0" x2="1039.23" y2="-600" />
    <!-- 60° -->
    <line x1="0" y1="0" x2="600" y2="-1039.23" />
    
    <!-- 120° -->
    <line x1="0" y1="0" x2="-600" y2="-1039.23" />
    <!-- 150° -->
    <line x1="0" y1="0" x2="-1039.23" y2="-600" />
    
    <!-- 210° -->
    <line x1="0" y1="0" x2="-1039.23" y2="600" />
    <!-- 240° -->
    <line x1="0" y1="0" x2="-600" y2="1039.23" />
    
    <!-- 300° -->
    <line x1="0" y1="0" x2="600" y2="1039.23" />
    <!-- 330° -->
    <line x1="0" y1="0" x2="1039.23" y2="600" />
  </g>
  
  <!-- Degree text (every 30 degrees) -->
  <g font-family="Arial, sans-serif" font-size="60" text-anchor="middle">
    <!-- 0° -->
    <text x="1290" y="90">0°</text>
    <!-- 30° -->
    <text x="1110" y="-570">30°</text>
    <!-- 60° -->
    <text x="660" y="-1020">60°</text>
    <!-- 90° -->
    <text x="0" y="-1290">90°</text>
    <!-- 120° -->
    <text x="-660" y="-1020">120°</text>
    <!-- 150° -->
    <text x="-1110" y="-570">150°</text>
    <!-- 180° -->
    <text x="-1290" y="90">180°</text>
    <!-- 210° -->
    <text x="-1110" y="630">210°</text>
    <!-- 240° -->
    <text x="-660" y="1110">240°</text>
    <!-- 270° -->
    <text x="0" y="1290">270°</text>
    <!-- 300° -->
    <text x="660" y="1110">300°</text>
    <!-- 330° -->
    <text x="1110" y="630">330°</text>
  </g>
  
  <!-- Degree markers (every 10 degrees) -->
  <g stroke="#999" stroke-width="3">
    <!-- 10° -->
    <line x1="1181.76" y1="-205.2" x2="1241.76" y2="-215.82" />
    <!-- 20° -->
    <line x1="1127.64" y1="-410.43" x2="1184.01" y2="-430.95" />
  </g>
  
  <!-- Special points on the unit circle -->
  <g fill="#e63946" stroke="none">
    <!-- 0° / 360° -->
    <circle cx="1200" cy="0" r="18" />
    <!-- 90° -->
    <circle cx="0" cy="-1200" r="18" />
    <!-- 180° -->
    <circle cx="-1200" cy="0" r="18" />
    <!-- 270° -->
    <circle cx="0" cy="1200" r="18" />
    
    <!-- 30° -->
    <circle cx="1039.23" cy="-600" r="18" />
    <!-- 60° -->
    <circle cx="600" cy="-1039.23" r="18" />
    <!-- 120° -->
    <circle cx="-600" cy="-1039.23" r="18" />
    <!-- 150° -->
    <circle cx="-1039.23" cy="-600" r="18" />
    <!-- 210° -->
    <circle cx="-1039.23" cy="600" r="18" />
    <!-- 240° -->
    <circle cx="-600" cy="1039.23" r="18" />
    <!-- 300° -->
    <circle cx="600" cy="1039.23" r="18" />
    <!-- 330° -->
    <circle cx="1039.23" cy="600" r="18" />
  </g>
  
  <!-- Title -->
  <text x="0" y="-1500" font-family="Arial, sans-serif" font-size="72" text-anchor="middle" font-weight="bold">Unit Circle - 360 Degrees</text>
  
  <!-- Center dot -->
  <circle cx="0" cy="0" r="12" fill="#000" />
  
  <!-- Labels for quadrants -->
  <g font-family="Arial, sans-serif" font-size="72" fill="#444" font-weight="bold">
    <text x="450" y="-450" text-anchor="middle">Quadrant I</text>
    <text x="-450" y="-450" text-anchor="middle">Quadrant II</text>
    <text x="-450" y="450" text-anchor="middle">Quadrant III</text>
    <text x="450" y="450" text-anchor="middle">Quadrant IV</text>
  </g>
  
  <!-- Radius example - moved to 0 degrees horizontal -->
  <line x1="0" y1="0" x2="1200" y2="0" stroke="#0066cc" stroke-width="9" />
  <text x="600" y="-60" font-family="Arial, sans-serif" font-size="48" fill="#0066cc">r = 1</text>
</svg>`

   return {
       props: {
           title: 'Unit Circle Visualizer and Calculator | Learn Math Class',
           description: 'Interactive unit circle visualization tool. Calculate and visualize sine, cosine, tangent and other trigonometric functions in real-time.',
           keywords: keyWords,
           canonicalUrl: 'https://www.learnmathclass.com/visual-tools/unit-circle'
       },
       revalidate: 3600
   }
}

export default function UnitCirclePage({ title, description, keywords, canonicalUrl }) {
   return (
       <>
           <Head>
               <title>{title}</title>
               <meta name="description" content={description} />
               <meta name="keywords" content={keywords.join(', ')} />
               <link rel="canonical" href={canonicalUrl} />
               <meta property="og:title" content="Unit Circle Visualizer and Calculator" />
               <meta property="og:description" content={description} />
               <meta property="og:url" content={canonicalUrl} />
               <meta property="og:type" content="website" />
               <meta name="viewport" content="width=device-width, initial-scale=1" />
               <meta name="robots" content="index, follow" />
           </Head>
           <GenericNavbar/>
           <br/>
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
           <Breadcrumb/>
           <br/>
           <br/>
           <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Unit Circle Visualizer and Calculator</h1>
         <br/>
         <br/>
         <br/>
         <br/>
           <UnitCircle/>
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