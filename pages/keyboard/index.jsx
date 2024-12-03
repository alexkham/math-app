
import TypeWriter from '@/app/components/keyboards/TypeWriter'
import React from 'react'
import Head from 'next/head';
import MultipleTypeWriter from '@/app/components/keyboards/MultipleTypeWriter';

export default function KeyboardPage(props) {
  return (
    <>
      <Head>
        <title>Mathematical Keyboard | Interactive Learning Tool</title>
        <meta name="description" content={props.metaDescription} />
        <meta name="keywords" content="mathematical keyboard, math symbols, interactive learning, math education" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://learnmathclass.com/keyboard" />
        <meta property="og:title" content="Mathematical Keyboard | Interactive Learning Tool" />
        <meta property="og:description" content={props.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://learnmathclass.com/keyboard" />
        <meta property="og:image" content="https://learnmathclass.com/images/math-keyboard-og.jpg" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      
      <div>
        <h3 className='title' style={{marginLeft:'20px'}}>Mathematical Keyboard</h3>
        <MultipleTypeWriter />
      </div>
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
