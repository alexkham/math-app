
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import UnitCircle from '@/app/components/trigo-calculator/UnitCircle'
import React from 'react';
import '../../pages.css'
import Head from 'next/head'

export async function getStaticProps() {
   const keyWords = [
       "unit circle","trig circle","radian unit circle",
       "circle of trigonometry","circle unit trigonometry"
   ]

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
           <h1 className='title' style={{marginTop:'-20px',marginBottom:'-20px'}}>Unit Circle Visualizer and Calculator</h1>
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