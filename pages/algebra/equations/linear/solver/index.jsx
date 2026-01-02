import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import LinearEquationSolver from '@/app/components/calculators/algebra/equations/LinearEquationSolver';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import React from 'react'
import Head from 'next/head'


export async function getStaticProps() {
  const keyWords = ['linear equations','solving equations','solving linear equations',
    'graphing linear equations','algebra equations','solving equations with variables on both sides',
    'linear equations examples','solving equations online','solutions of linear equations'];

  // const linearEquationInstructions = {
  //   instructions: [
  //     "Enter any linear equation with one variable (x, y, z, etc.)",
  //     "Supports fractions: 2/3x + 1/4 = 5/6",
  //     "Supports decimals: 1.5x + 2.7 = 8.3", 
  //     "Supports parentheses: 3(x + 2) = 15",
  //     "Press Enter to solve or Escape to clear",
  //     "Use random generators for practice problems",
  //     "Click history items to reload previous equations",
  //     "View detailed step-by-step solutions"
  //   ],
  //   links: [
  //     {
  //       text: "Algebra Basics Tutorial",
  //       url: "/tutorials/algebra-basics"
  //     },
  //     {
  //       text: "Practice Problems",
  //       url: "/practice/linear-equations"
  //     }
  //   ],
  //   externalLinks: [
  //     {
  //       text: "Khan Academy - Linear Equations",
  //       url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-in-one-variable"
  //     },
  //     {
  //       text: "Math is Fun - Solving Equations",
  //       url: "https://www.mathsisfun.com/algebra/linear-equations.html"
  //     }
  //   ]
  // };

 // For explanations prop
const explanations = {
  instructions: [
    "Enter any linear equation with one variable (x, y, z, etc.)",
    "Supports fractions: 2/3x + 1/4 = 5/6",
    "Supports decimals: 1.5x + 2.7 = 8.3", 
    "Supports parentheses: 3(x + 2) = 15",
    "Press Enter to solve or Escape to clear",
    "Use random generators for practice problems",
    "Click history items to reload previous equations",
    "View detailed step-by-step solutions",
    
  ]
};

// For resources prop
const resources = {
  links: [
    {
      text: "Algebra Basics Tutorial",
      url: "/tutorials/algebra-basics"
    },
    {
      text: "Practice Problems",
      url: "/practice/linear-equations"
    }
  ],
  externalLinks: [
    {
      text: "Khan Academy - Linear Equations",
      url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-in-one-variable"
    },
    {
      text: "Math is Fun - Solving Equations",
      url: "https://www.mathsisfun.com/algebra/linear-equations.html"
    }
  ]
};


 
 
  return {
    props: {
      seoData: {
        title: "Linear Equations Solver - Step-by-Step Solutions | Learn Math Class",
        description: "Solve linear equations online with step-by-step solutions. Supports fractions, decimals, and parentheses. Free algebra equation solver with detailed explanations.",
        keywords: keyWords.join(", "),
        url: "/algebra/equations/linear/solver",
        name: "Linear Equations Solver"
      },
      explanations,
      resources,
      keyWords,
    }
  }
}

export default function LinearEquationSolverPage({ seoData,  explanations,
      resources, keyWords }) {


  // const keyWords=['linear equations','solving equations','solving linear equations',
  //   'graphing linear equations','algebra equations','solving equations with variables on both sides',
  //   'linear equations examples','solving equations online','solutions of linear equations',
  //   'linear equations examples','','']


    // const linearEquationInstructions = {
    //     instructions: [
    //       "Enter any linear equation with one variable (x, y, z, etc.)",
    //       "Supports fractions: 2/3x + 1/4 = 5/6",
    //       "Supports decimals: 1.5x + 2.7 = 8.3", 
    //       "Supports parentheses: 3(x + 2) = 15",
    //       "Press Enter to solve or Escape to clear",
    //       "Use random generators for practice problems",
    //       "Click history items to reload previous equations",
    //       "View detailed step-by-step solutions"
    //     ],
    //     links: [
    //       {
    //         text: "Algebra Basics Tutorial",
    //         url: "/tutorials/algebra-basics"
    //       },
    //       {
    //         text: "Practice Problems",
    //         url: "/practice/linear-equations"
    //       }
    //     ],
    //     externalLinks: [
    //       {
    //         text: "Khan Academy - Linear Equations",
    //         url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-in-one-variable"
    //       },
    //       {
    //         text: "Math is Fun - Solving Equations",
    //         url: "https://www.mathsisfun.com/algebra/linear-equations.html"
    //       }
    //     ]
    //   };



  return (
    <>
      <Head>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta name="keywords" content={seoData.keywords} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
    
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Learn Math Class" />
    
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
    
    <meta name="robots" content="index, follow" />
    
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": seoData.name,
          "description": seoData.description,
          "keywords": seoData.keywords,
          "url": `https://www.learnmathclass.com${seoData.url}`,
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "mainEntity": {
            "@type": "Article",
            "name": seoData.name,
            "dateModified": new Date().toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Learn Math Class"
            }
          }
        })
      }}
    />
  </Head>
      {/* <GenericNavbar/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
              side='right'
              topOffset='55px' 
              sidebarWidth='45px'
              panelWidth='200px'
              iconColor='white'
              panelBackgroundColor='#f2f2f2'
            />
      <Breadcrumb/>
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Linear Equations Solver</h1>
      <br/>
      <LinearEquationSolver 
    explanations={explanations}
    resources={resources}
  />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       {/* <ScrollUpButton/> */} 
    </>
  );
}
