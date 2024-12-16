// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react';
// import '../../pages.css'
// import RootCalculator from '@/app/components/calculators/arithmetics/RootCalculator';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';

// export default function RootCalculatorPage() {

  
//     const explanations = {
//         square: {
//           text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of 25 is 5, because 5 × 5 = 25.",
//         //   links: [
//         //     {
//         //       title: "Learn More About Square Roots",
//         //       link: "https://example.com/square-roots"
//         //     }
//         //   ]
//         },
//         cube: {
//           text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27.",
//           // links: [
//           //   {
//           //     title: "Cube Roots Explained",
//           //     link: "https://example.com/cube-roots"
//           //   }
//           // ]
//         },
//         nth: {
//           text: "An nth root of a number is a value that, when multiplied by itself n-1 times, gives the number. For example, the 4th root of 16 is 2, because 2 × 2 × 2 × 2 = 16.",
//         //   links: [
//         //     {
//         //       title: "Understanding Nth Roots",
//         //       link: "https://example.com/nth-roots"
//         //     }
//         //   ]
//         }
//       };

//       const keyWords=['root calculator','square root calculator'
//         ,'sqrt calculator','calculate square root calculator',
//         'calculator to find square root','square root value calculator',
//         'cubic root calculator']
      


//   return (
//    <>
//    <GenericNavbar/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <Breadcrumb/>
//    <OperaSidebar 
//         side='right'
//         topOffset='65px' 
//         sidebarWidth='45px'
//         panelWidth='200px'
        
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'/> 
//    <h1 className='title' style={{marginTop:'-20px'}}>Root Calculator</h1>
//    <div style={{transform:'scale(0.80)'}}>
//    <RootCalculator explanations={explanations}/>
//    </div>
//    <br/>
//    <br/>
//    <br/>
//    <ScrollUpButton/>
//    </>
//   )
// }


import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import '../../pages.css';
import RootCalculator from '@/app/components/calculators/arithmetics/RootCalculator';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ExplanationDetails from '@/app/components/ExplanationDetails';

export default function RootCalculatorPage(props) {  // Changed to receive props
  const { explanations, keyWords,detailInstructions } = props;  // Destructure props

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Root Calculator",
    "applicationCategory": "EducationalApplication",
    "description": "Free online calculator for square roots, cube roots, and nth roots with detailed explanations.",
    "url": "https://www.learnmathclass.com/calculators/root-calculator",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Square root calculation",
      "Cube root calculation",
      "Nth root calculation",
      "Step by step explanations"
    ]
  };

  return (
    <>
      <Head>
        <title>Root Calculator | Square, Cube & Nth Root | LearnMathClass</title>
        <meta name="description" content="Free online root calculator for square roots, cube roots, and nth roots. Easy to use with detailed explanations. Perfect for students and teachers." />
        <meta name="keywords" content={Array.isArray(keyWords) ? keyWords.join(', ') : ''} />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Root Calculator | LearnMathClass" />
        <meta property="og:description" content="Calculate square roots, cube roots, and nth roots with our free online calculator. Get instant results with explanations." />
        <meta property="og:url" content="https://www.learnmathclass.com/calculators/root-calculator" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.learnmathclass.com/calculators/root-calculator" />

        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Root Calculator</h1>
      <div style={{marginBottom:'-20px'}}>
      <ExplanationDetails instructions={detailInstructions}
      title='How to use Root Calculator'/>
      </div>
      <div style={{transform:'scale(0.80)'}}>
        <RootCalculator explanations={explanations}
        />
      </div>
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  );
}

export async function getStaticProps() {
  const explanations = {
    square: {
      text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of 25 is 5, because 5 × 5 = 25.",
    },
    cube: {
      text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27.",
    },
    nth: {
      text: "An nth root of a number is a value that, when multiplied by itself n-1 times, gives the number. For example, the 4th root of 16 is 2, because 2 × 2 × 2 × 2 = 16.",
    }
  };

  const keyWords = [
    'root calculator',
    'square root calculator',
    'sqrt calculator',
    'calculate square root calculator',
    'calculator to find square root',
    'square root value calculator',
    'cubic root calculator'
  ];


  const detailInstructions = [
    
    "Select root type: square, cube, or nth root",
    "For nth root, specify the value of n",
    "Click Calculate to see the result",
    "Use Reset to clear all fields and start over",
    "Hover over ? icons for additional help"
  ];

  return {
    props: {
      explanations,
      keyWords,
      detailInstructions,
    },
    revalidate: 86400
  };
}