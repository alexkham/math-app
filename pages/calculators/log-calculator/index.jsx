
import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import '../../pages.css';
import LogarithmCalculator from '@/app/components/calculators/arithmetics/LogarithmCalculator';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export default function LogCalculatorPage({ logarithmExplanations, detailInstructionsLogarithms }) {

  const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      // {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]
  return (
    <>
      <Head>
        <title>Logarithm Calculator | Calculate Logarithms | LearnMathClass</title>
        <meta name="description" content="Free online logarithm calculator. Calculate logarithms with base 2, e, 10 or custom base. Easy to use with step-by-step explanations." />
        <meta name="keywords" content="log calculator, log calc, logarithms, calculator of logs, find log calculator, log log calculator, logarithm calculator, logarithmic calculator" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Logarithm Calculator | LearnMathClass" />
        <meta property="og:description" content="Calculate logarithms online with any base. Get instant results with mathematical explanations." />
        <meta property="og:url" content="https://www.learnmathclass.com/calculators/log-calculator" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href="https://www.learnmathclass.com/calculators/log-calculator" />
      </Head>
        <style jsx>{`
  @media (max-width: 1024px) {
    .layout-container > div:first-child,
    .layout-container > div:first-child *,
    :global([class*="vertical"]),
    :global([class*="vertical"]) * {
      position: static !important;
    }
  }
  
  .layout-container {
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 20px;
    width: 100%;
  }
  
  @media (max-width: 1024px) {
    .layout-container {
      grid-template-columns: 1fr;
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
      <h1 className='title' style={{marginTop:'-0px',marginBottom:'20px'}}>Logarithm Calculator</h1>
      <div style={{marginBottom:'-20px'}}>
        <ExplanationDetails 
          instructions={detailInstructionsLogarithms}
          title='How to use Logarithm Calculator'
        />
      </div>
      <br/>
       <div className="layout-container">
       {/* <div style={{
      display: 'grid',
      gridTemplateColumns: '15% 80%',
      gap: '20px',
      width: '100%'
   }}> */}
      {/* Left column - Sidebar */}
      <div>
        <br/>
       
         <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='200px'
         />
      </div>

      {/* Right column - Table */}
      <div>
         <div style={{width:'100%',margin:'auto',marginLeft:'-50px'}}>
          <div style={{transform:'scale(0.95)'}}>
             <LogarithmCalculator explanations={logarithmExplanations}/>
    
      </div> 
          
        
            <br/>
            <br/>
            <br/>
           
            
         </div>
      </div>
   </div>

      {/* <VerticalButtonGroup/>
      <div style={{transform:'scale(0.8)'}}>
        <LogarithmCalculator explanations={logarithmExplanations}/>
      </div> */}
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  );
}

export async function getStaticProps() {
//   const logarithmExplanations = {
//     standard: {
//       text: "A logarithm calculates what exponent is needed for a base to reach a given number. If bx = N, then logb(N) = x. For example, log₂(8) = 3 because 2³ = 8. The most common bases are: base 2 (binary logarithm), base e (natural logarithm), and base 10 (common logarithm)."
//     },
//     custom: {
//       text: "For any positive numbers M and b (where b ≠ 1), the equation logb(M) = y means that b^y = M. The base b must be positive and not equal to 1, while M must be positive. The logarithm finds the exponent needed to reach M using base b."
//     }
//   };

 
    const logarithmExplanations = {
        standard: {
          text: "A logarithm calculates what exponent is needed for a base to reach a given number. If bx = N, then logb(N) = x. For example, log₂(8) = 3 because 2³ = 8. The most common bases are: base 2 (binary logarithm), base e (natural logarithm), and base 10 (common logarithm).",
          links: [
            {
              title: "Explore Logarithmic Tables Page",
              link: "/tables/arithmetics"
            }
          ],
        //  externalLinks: [
        //     {
        //       title: "Properties of Logarithms",
        //       link: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-prop/a/properties-of-logarithms"
        //     }
        //   ]
        },
        custom: {
          text: "For any positive numbers M and b (where b ≠ 1), the equation logb(M) = y means that b^y = M. The base b must be positive and not equal to 1, while M must be positive. The logarithm finds the exponent needed to reach M using base b.",
          links: [
            {
              title: "Explore Logarithmic Tables Page",
              link: "/tables/arithmetics"
            }
          ]
        }
       };


const detailInstructionsLogarithms = [
    
    "Choose between standard bases (2, e, 10) or a custom base",
    "For custom base, enter any positive number except 1",
    "Enter the number for which you want to find the logarithm",
    "Click Calculate to compute the result",
    "Hover over ? icons for additional help"
    
  ];

  return {
    props: {
      logarithmExplanations,
      detailInstructionsLogarithms
    },
    revalidate: 86400
  };
}