
import TypeWriter from '@/app/components/keyboards/TypeWriter'
import React from 'react'
import Head from 'next/head';
import MultipleTypeWriter from '@/app/components/keyboards/MultipleTypeWriter';
import NewMultipleTypeWriter from '@/app/components/keyboards/NewMultipleTypeWriter';
import '../../pages/pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';

export default function KeyboardPage(props) {
  return (
    <>
      <Head>
        <title>Mathematical Keyboard | Interactive Learning Tool</title>
        <meta name="description" content={props.metaDescription} />
        <meta name="keywords" content="mathematical keyboard, math symbols, interactive learning, math education" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.learnmathclass.com/keyboard" />
        <meta property="og:title" content="Mathematical Keyboard | Interactive Learning Tool" />
        <meta property="og:description" content={props.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.learnmathclass.com/keyboard" />
        <meta property="og:image" content="https://www.learnmathclass.com/images/math-keyboard-og.jpg" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <br/>
      <br/>
     
    
       <OperaSidebar 
              side='right'
              topOffset='55px' 
              sidebarWidth='45px'
              panelWidth='300px'
              iconColor='white'
              panelBackgroundColor='#f2f2f2'
            /> 
            <Breadcrumb/>
      <br/>
      <br/>
     
     
        <h1 className='title' style={{marginTop:'-50px',marginBottom:'-30px'}}>Mathematical Keyboard</h1>
        {/* <MultipleTypeWriter /> */}
        <div style={{transform:'scale(0.95)',margin:'auto',width:'80%'}}>
        <NewMultipleTypeWriter/>
        </div>
    
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export async function getStaticProps() {
  // Simulating a static metadata fetch. Replace with actual data fetching if necessary.
  const metaDescription = "Explore our interactive Mathematical Keyboard. Perfect for students, educators, and math enthusiasts to practice and learn mathematical notation.";
  
  return {
    props: {
      metaDescription
    }
  };
}
