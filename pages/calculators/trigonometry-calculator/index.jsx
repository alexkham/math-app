// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../../pages.css'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import AngleConverter from '@/app/components/converters/AngleConverter'
// import { Sidebar } from 'lucide-react'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Head from 'next/head'
// import TrigoCalculator from '@/app/components/trigo-calculator/TrigoCalculator'
// import InverseTrigoCalculator from '@/app/components/trigo-calculator/InverseTrigoCalculator'
// import CalculatorSwitcher from '@/app/components/calculators/CalculatorSwitcher'


// export default function TrigonometryCalculatorPage() {
//     const keyWords=[
//         "trigonometry calculator",
//         "trigonometric functions calculator",
//         "inverse trigonometry functions",
//         "inverse of trigonometric functions",
//         "inverse trigonometry"
//     ]


//     const explanations = {
//         sin: {
//           description: "Sine is the ratio of the opposite side to the hypotenuse in a right triangle. In the unit circle, it's the y-coordinate of a point on the circle.",
//           link: "https://en.wikipedia.org/wiki/Sine"
//         },
//         cos: {
//           description: "Cosine is the ratio of the adjacent side to the hypotenuse in a right triangle. In the unit circle, it's the x-coordinate of a point on the circle.",
//           link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cosine"
//         },
//         tan: {
//           description: "Tangent is the ratio of sine to cosine (or opposite to adjacent in a right triangle). It represents the slope of the line from the origin to a point on the unit circle.",
//           link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Tangent"
//         },
//         csc: {
//           description: "Cosecant is the reciprocal of sine. It's the ratio of the hypotenuse to the opposite side in a right triangle (csc = 1/sin).",
//           link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cosecant"
//         },
//         sec: {
//           description: "Secant is the reciprocal of cosine. It's the ratio of the hypotenuse to the adjacent side in a right triangle (sec = 1/cos).",
//           link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Secant"
//         },
//         cot: {
//           description: "Cotangent is the reciprocal of tangent. It's the ratio of cosine to sine (or adjacent to opposite in a right triangle, cot = 1/tan).",
//           link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cotangent"
//         }
//       };


//       const inverseTrigoExplanations = {
//         arcsin: {
//           description: "Arcsine (arcsin) is the inverse function of sine. It returns the angle (in the selected units) whose sine equals the input ratio. The input must be between -1 and 1. The output angle will be in the range [-90°, 90°] for degrees or [-π/2, π/2] for radians.",
//           link: "https://mathworld.wolfram.com/InverseSine.html"
//         },
//         arccos: {
//           description: "Arccosine (arccos) is the inverse function of cosine. It returns the angle (in the selected units) whose cosine equals the input ratio. The input must be between -1 and 1. The output angle will be in the range [0°, 180°] for degrees or [0, π] for radians.",
//           link: "https://mathworld.wolfram.com/InverseCosine.html"
//         },
//         arctan: {
//           description: "Arctangent (arctan) is the inverse function of tangent. It returns the angle (in the selected units) whose tangent equals the input ratio. Unlike arcsin and arccos, arctan accepts any real number as input. The output angle will be in the range (-90°, 90°) for degrees or (-π/2, π/2) for radians.",
//           link: "https://mathworld.wolfram.com/InverseTangent.html"
//         }
//       };
      
      
 
//   return (
//     <>
    

//       <GenericNavbar/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar
//         side='right'
//         topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
      
//       <br/>
//       <br/>
//       <Breadcrumb/>
//       <h1 className='title' style={{marginBottom:'-20px', marginTop:'-30px'}}>Trigonometry Calculator</h1>
//       {/* <div style={{transform:'scale(0.9)'}}>
//      <TrigoCalculator explanations={explanations}/>
//      </div> */}
//       <br/>
//       <br/>
//       <CalculatorSwitcher scale={'0.9'}>
//       {/* <div style={{transform:'scale(0.9)'}}> */}
//      <TrigoCalculator explanations={explanations}/>
//      {/* </div> */}

//      {/* <div style={{transform:'scale(0.85)'}}> */}
//       <InverseTrigoCalculator explanations={inverseTrigoExplanations}/>
//       {/* </div> */}

//       </CalculatorSwitcher>
//       <br/>
//       <br/>
//       {/* <div style={{transform:'scale(0.85)'}}>
//       <InverseTrigoCalculator explanations={inverseTrigoExplanations}/>
//       </div> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <ScrollUpButton/>
//     </>
//   )
// }

// export async function getStaticProps() {
//   return {
//     props: {},
//     revalidate: 3600
//   }
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import { Sidebar } from 'lucide-react'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import TrigoCalculator from '@/app/components/trigo-calculator/TrigoCalculator'
import InverseTrigoCalculator from '@/app/components/trigo-calculator/InverseTrigoCalculator'
import CalculatorSwitcher from '@/app/components/calculators/CalculatorSwitcher'

export default function TrigonometryCalculatorPage({ explanations ,inverseTrigoExplanations}) {
  const metadata = {
    title: "Online Trigonometry Calculator | Learn Math Class",
    description: "Free online trigonometry calculator for calculating sine, cosine, tangent, and their inverse functions. Convert between degrees and radians, with detailed explanations of trigonometric concepts.",
    keywords: [
      "trigonometry calculator",
      "trigonometric functions calculator",
      "inverse trigonometry functions",
      "inverse trigonometric calculator",
      "sine calculator",
      "cosine calculator",
      "tangent calculator",
      "degree to radian converter",
      "online math tools",
      "trigonometry learning"
    ]
  };
  const { title, description, keywords } = metadata;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.learnmathclass.com/calculators/trigonometry-calculator" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.learnmathclass.com/calculators/trigonometry-calculator" />

        {/* Schema.org markup for rich snippets */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "${title}",
              "description": "${description}",
              "url": "https://www.learnmathclass.com/calculators/trigonometry-calculator",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web browser"
            }
          `}
        </script>
      </Head>

      <GenericNavbar/>
    
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      
      <br/>
      <br/>
      <Breadcrumb/>
      <h1 className='title' style={{marginBottom:'-20px', marginTop:'-30px'}}>Trigonometry Calculator</h1>
      <br/>
      <br/>
      <CalculatorSwitcher standardExplanations={explanations} inverseExplanations={inverseTrigoExplanations} scale={'0.9'}/>
      {/* <div style={{transform:'scale(0.9)'}}>
        <TrigoCalculator explanations={explanations}/>
        </div> */}
        {/* <InverseTrigoCalculator explanations={inverseTrigoExplanations}/> */}
      {/* </CalculatorSwitcher> */}
      <br/>
      <br/>
      {/* <CalculatorSwitcher/> */}
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  )
}

export async function getStaticProps() {
  // Define all static data
  const metadata = {
    title: "Online Trigonometry Calculator | Learn Math Class",
    description: "Free online trigonometry calculator for calculating sine, cosine, tangent, and their inverse functions. Convert between degrees and radians, with detailed explanations of trigonometric concepts.",
    keywords: [
      "trigonometry calculator",
      "trigonometric functions calculator",
      "inverse trigonometry functions",
      "inverse trigonometric calculator",
      "sine calculator",
      "cosine calculator",
      "tangent calculator",
      "degree to radian converter",
      "online math tools",
      "trigonometry learning"
    ]
  };

  const explanations = {
    sin: {
      description: "Sine is the ratio of the opposite side to the hypotenuse in a right triangle. In the unit circle, it's the y-coordinate of a point on the circle.",
      link: "https://en.wikipedia.org/wiki/Sine"
    },
    cos: {
      description: "Cosine is the ratio of the adjacent side to the hypotenuse in a right triangle. In the unit circle, it's the x-coordinate of a point on the circle.",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cosine"
    },
    tan: {
      description: "Tangent is the ratio of sine to cosine (or opposite to adjacent in a right triangle). It represents the slope of the line from the origin to a point on the unit circle.",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Tangent"
    },
    csc: {
      description: "Cosecant is the reciprocal of sine. It's the ratio of the hypotenuse to the opposite side in a right triangle (csc = 1/sin).",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cosecant"
    },
    sec: {
      description: "Secant is the reciprocal of cosine. It's the ratio of the hypotenuse to the adjacent side in a right triangle (sec = 1/cos).",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Secant"
    },
    cot: {
      description: "Cotangent is the reciprocal of tangent. It's the ratio of cosine to sine (or adjacent to opposite in a right triangle, cot = 1/tan).",
      link: "https://en.wikipedia.org/wiki/Trigonometric_functions#Cotangent"
    }
  };

  const inverseTrigoExplanations = {
    arcsin: {
      description: "Arcsine (arcsin) is the inverse function of sine. It returns the angle (in the selected units) whose sine equals the input ratio. The input must be between -1 and 1. The output angle will be in the range [-90°, 90°] for degrees or [-π/2, π/2] for radians.",
      link: "https://mathworld.wolfram.com/InverseSine.html"
    },
    arccos: {
      description: "Arccosine (arccos) is the inverse function of cosine. It returns the angle (in the selected units) whose cosine equals the input ratio. The input must be between -1 and 1. The output angle will be in the range [0°, 180°] for degrees or [0, π] for radians.",
      link: "https://mathworld.wolfram.com/InverseCosine.html"
    },
    arctan: {
      description: "Arctangent (arctan) is the inverse function of tangent. It returns the angle (in the selected units) whose tangent equals the input ratio. Unlike arcsin and arccos, arctan accepts any real number as input. The output angle will be in the range (-90°, 90°) for degrees or (-π/2, π/2) for radians.",
      link: "https://mathworld.wolfram.com/InverseTangent.html"
    }
  };

  return {
    props: {
      explanations,
      inverseTrigoExplanations,
      metadata
    },
    revalidate: 3600 // Revalidate every hour
  }
}