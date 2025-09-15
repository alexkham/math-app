// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import React from 'react'
// import '../../pages.css'
// import BaseVisualizer2 from '@/app/components/base-visualizer/BaseVisualizer2'

// export default function BaseConverter() {
//   return (
//     <>
  
//     <MyNavbar></MyNavbar>
//     <br></br>
//     <br></br>
//     <br></br>
    
//     <h1 className='title'>Base Conversion Visualizer</h1>
//     <br></br>
//     <br></br>
//     <BaseVisualizer2></BaseVisualizer2>
    
    
    
    
//     </>
//   )
// }
// pages/base-converter.js
import React from 'react';
import Head from 'next/head';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import BaseVisualizer2 from '@/app/components/base-visualizer/BaseVisualizer2';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import '../../pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export default function BaseConverter({navigationGroup }) {
  return (
    <>
      <Head>
        <title>Base Conversion Visualizer</title>
        <meta name="description" content="Visualize number base conversions with our interactive tool." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.learnmathclass.com/visual-tools/base-converter" />
      </Head>
     <GenericNavbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <OperaSidebar 
      side='right'
      // topOffset='65px' 
      sidebarWidth='45px'
      panelWidth='200px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
      <Breadcrumb></Breadcrumb>
      <h1 className='title' style={{marginTop:'-20px'}}>Base Conversion Visualizer</h1>
      <br></br>
     <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='260px'
         />
      <br></br>
      <BaseVisualizer2 />
     
      <ScrollUpButton></ScrollUpButton>
    </>
  );
}

export async function getStaticProps() {
  // Example fetching data (replace with actual data fetching logic)
  const navigationGroup=[
    {
      title:'Related Pages',
      items:[
        {title:'Base Converter',link:'/converters/base-converter'}
      ]
    }
  ]


  return {
    props: {
     navigationGroup,
    },
  };
}
