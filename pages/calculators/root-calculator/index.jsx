

import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import '../../pages.css';
import RootCalculator from '@/app/components/calculators/arithmetics/RootCalculator';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

export default function RootCalculatorPage(props) {  // Changed to receive props
  const { explanations, keyWords,detailInstructions,navigationGroup,sectionsContent } = props;  // Destructure props


     
  const rootSections=[
    {
        id:'intro',
        title:sectionsContent.intro.title,
        link:'/algebra/roots',
        content:[
          sectionsContent.intro.content
        ]
    },
    // {
    //     id:'2',
    //     title:'section2',
    //     link:'',
    //     content:''
    // },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // }
]


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
      <style jsx>{`
  @media (max-width: 1024px) {
    :global(.layout-container > div:first-child *) {
      position: static !important;
    }
  }
`}</style>

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
      <h1 className='title' style={{marginTop:'-0px',marginBottom:'20px'}}>Root Calculator</h1>
      <div style={{marginBottom:'20px'}}>
      <ExplanationDetails instructions={detailInstructions}
      title='How to use Root Calculator'/>
      </div>


       <div style={{
      display: 'grid',
      gridTemplateColumns: '10% 90%',
      gap: '20px',
      width: '100%'
   }}>
      {/* Left column - Sidebar */}
      <div>
        <br/>
        <br/>
        <br/>
         <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='vivid'
            isSticky={true}
            verticalOffset='200px'
         />
      </div>

      {/* Right column - Table */}
      <div>
         <div style={{width:'90%',margin:'auto'}}>
           <div style={{transform:'scale(0.90)'}}>
        <RootCalculator explanations={explanations}
        />
      </div> 
            <br/>
            <br/>
            <br/>
           
            
         </div>
      </div>
   </div>
      {/* <VerticalButtonGroup items={navigationGroup}/>
      <div style={{transform:'scale(0.90)'}}>
        <RootCalculator explanations={explanations}
        />
      </div> */}
      <br/>
      <br/>
      <SectionTableOfContents sections={rootSections}/>
      <br/>
     <Sections sections={rootSections}/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  );
}

export async function getStaticProps() {


   const sectionsContent={

    intro:{
      title:`What are roots?`,
      content:`
A root is a value that, when multiplied by itself a certain number of times, produces a given number. It represents the inverse operation of exponentiation.

To express roots, mathematicians use radical notation. This notation consists of the radical symbol (√) with two essential components:

• The degree (or index) is a small number positioned at the top left of the radical symbol (ⁿ√) indicating how many times the value must multiply itself

• The radicand is the number or expression written under the radical symbol whose root we're finding

Roots are classified in multiple ways. The most common classification is by degree, which determines the specific type of root: square roots, cube roots, fourth roots, and higher-degree roots each have distinct properties and applications in mathematics.
        `,
      before:``,
      after:``,
  
  
    },
    obj2:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
  
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      // {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]


  const explanations = {

    square: {
      text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of 25 is 5, because 5 × 5 = 25.",
      links: [
        { title: "Square Root Visualizer", link: "/visual-tools/square-root" },
        { title: "Perfect Squares and Roots Table", link: "/tables/arithmetics/perfect-squares" }
      ],
    },
    cube: {
      text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27.",
      links: [
       
        { title: "Perfect Cubes and Cube Roots Table", link: "/tables/arithmetics/perfect-cubes" }
      ],
    },
    nth: {
      text: "An $n$-th root of a number is a value that, when multiplied by itself $n-1$ times, gives the number. For example, the $4$-th root of $16$ is $2$, because $2 × 2 × 2 × 2 = 16$.",
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
      navigationGroup,
      sectionsContent
    },
    revalidate: 86400
  };
}