// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react';
// import '../../pages.css'
// import LogarithmCalculator from '@/app/components/calculators/arithmetics/LogarithmCalculator';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import ExplanationDetails from '@/app/components/ExplanationDetails';

// export default function LogCalculatorPage() {

//     const logarithmExplanations = {
//         standard: {
//           text: "A logarithm calculates what exponent is needed for a base to reach a given number. If bx = N, then logb(N) = x. For example, log₂(8) = 3 because 2³ = 8. The most common bases are: base 2 (binary logarithm), base e (natural logarithm), and base 10 (common logarithm).",
//         //   links: [
//         //     {
//         //       title: "Properties of Logarithms",
//         //       link: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-prop/a/properties-of-logarithms"
//         //     }
//         //   ]
//         },
//         custom: {
//           text: "For any positive numbers M and b (where b ≠ 1), the equation logb(M) = y means that b^y = M. The base b must be positive and not equal to 1, while M must be positive. The logarithm finds the exponent needed to reach M using base b.",
//         //   links: [
//         //     {
//         //       title: "Advanced Logarithm Rules",
//         //       link: "https://www.mathsisfun.com/algebra/logarithm-rules.html"
//         //     }
//         //   ]
//         }
//        };


//        const detailInstructionsLogarithms = [
//         "Enter the number for which you want to find the logarithm",
//         "Choose between standard bases (2, e, 10) or enter a custom base",
//         "For custom base, enter any positive number except 1",
//         "Click Calculate to compute the result",
//         "For standard bases: log₂ is used in computing, log₁₀ for scientific notation, loge for natural calculations"
//        ];

//        const keyWords=['log calculator','log calc','logarithms','calculator of logs',
//         'find log calculator','log log calculator','logarithm calculator', 'logarithmic calculator'
//        ]
      
//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//     <OperaSidebar
//         side='right'
//         topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Logarithm Calculator</h1>
//     <div style={{marginBottom:'-20px'}}>
//     <ExplanationDetails 
//     instructions={detailInstructionsLogarithms}
//     title='How to use Logarithm Calculator'/>
//     </div>
//     <div style={{transform:'scale(0.8)'}}>
//     <LogarithmCalculator explanations={logarithmExplanations}/>
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>
    
//     </>
//   )
// }


// pages/calculators/log-calculator/index.jsx
import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import '../../pages.css';
import LogarithmCalculator from '@/app/components/calculators/arithmetics/LogarithmCalculator';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ExplanationDetails from '@/app/components/ExplanationDetails';

export default function LogCalculatorPage({ logarithmExplanations, detailInstructionsLogarithms }) {
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
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Logarithm Calculator</h1>
      <div style={{marginBottom:'-20px'}}>
        <ExplanationDetails 
          instructions={detailInstructionsLogarithms}
          title='How to use Logarithm Calculator'
        />
      </div>
      <div style={{transform:'scale(0.8)'}}>
        <LogarithmCalculator explanations={logarithmExplanations}/>
      </div>
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