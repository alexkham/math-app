// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react';
// import '../pages.css'
// import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
// import probabilityFormulaList from '@/app/api/db/formulas/probability/probabilityFormulasList';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

// import Sections from '@/app/components/page-components/section/Sections';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';

// export default function ProbabilityPage() {


//   const keyWords=['probability','learn probability']
  

//   const probabilitySections = [
   
//     {
//       id: 'formulas',
//       title: 'Probability Formulas',
//       content:"Explore ",
//       content: [
//         'Explore Probability formulas with explanations and examples',
//         " ",
//         <VerticalScrollingFormulaWidget 
//         key={"formula-widget2"}
//          formulaData={probabilityFormulaList}
//          moreFormulasLink='/probability/formulas'
//         //  title='See them all'
//           />,
   
//     ]
      
//     },
//   ];


//   const introContent = {
//     id: "intro",
//     title: "Introduction to Probability Section",
//     content:`**Probability** is a field of mathematics that deals with  **uncertainty** and provides tools to measure and analyze how likely events are to occur. It begins with basic concepts such as outcomes, events, and sample spaces, forming the foundation for calculating likelihoods.
// Central to probability is the concept of **probability measures**, which assign values between 0 and 1 to **events**, indicating their **likelihood**. A value of 0 means an event is impossible, while 1 signifies certainty. Key principles include **independence** (events that do not influence each other) and **conditional probability**, which considers the likelihood of an event given that another has occurred.
// Probability also introduces **random variables**, which assign numerical values to outcomes. These variables are categorized as either **discrete** (taking specific values, like rolling a die) or **continuous**(taking any value within a range, like measuring temperature). Important measures such as **expectancy(average value)** and **variance(spread or variability)** are used to summarize the behavior of **random variables**.
// Advanced topics include **distributions**, such as the **binomial**, **normal**, and **Poisson distributions**, which model specific types of random phenomena. These tools are essential for understanding patterns in **random processes** and making informed predictions.
// Probability is widely applied in science, engineering, finance, and everyday decision-making. It forms the basis for statistics, enabling data-driven insights and predictions, and supports fields like machine learning, risk analysis, and quantum mechanics. By studying probability, students develop skills to reason about uncertainty and draw conclusions from incomplete information.`

//   };
  
  

//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//       side='right'
//       topOffset='65px' 
//       sidebarWidth='45px'
//       panelWidth='200px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
   
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Probability</h1>
//     <SectionTableOfContents sections={probabilitySections}/>
//     <IntroSection 
//   id={introContent.id}
//   title={introContent.title}
//   content={introContent.content}
//   backgroundColor="#f2f2f2"
//   textColor="#06357a"
// />
//     <Sections  sections={probabilitySections}/>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>
    


    
//     </>
//   )
// }


import React from 'react'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head'

export async function getStaticProps() {
  const { default: probabilityFormulaList } = await import('@/app/api/db/formulas/probability/probabilityFormulasList')
  
  // Static content that can be used for SEO
  const sectionContent = {
    formulas: {
      title: 'Probability Formulas',
      description: 'Explore Probability formulas with explanations and examples'
    }
  }

  const introContent = {
    id: "intro",
    title: "Introduction to Probability Section",
    content: `**Probability** is a field of mathematics that deals with  **uncertainty** and provides tools to measure and analyze how likely events are to occur. It begins with basic concepts such as outcomes, events, and sample spaces, forming the foundation for calculating likelihoods.
Central to probability is the concept of **probability measures**, which assign values between 0 and 1 to **events**, indicating their **likelihood**. A value of 0 means an event is impossible, while 1 signifies certainty. Key principles include **independence** (events that do not influence each other) and **conditional probability**, which considers the likelihood of an event given that another has occurred.
Probability also introduces **random variables**, which assign numerical values to outcomes. These variables are categorized as either **discrete** (taking specific values, like rolling a die) or **continuous**(taking any value within a range, like measuring temperature). Important measures such as **expectancy(average value)** and **variance(spread or variability)** are used to summarize the behavior of **random variables**.
Advanced topics include **distributions**, such as the **binomial**, **normal**, and **Poisson distributions**, which model specific types of random phenomena. These tools are essential for understanding patterns in **random processes** and making informed predictions.
Probability is widely applied in science, engineering, finance, and everyday decision-making. It forms the basis for statistics, enabling data-driven insights and predictions, and supports fields like machine learning, risk analysis, and quantum mechanics. By studying probability, students develop skills to reason about uncertainty and draw conclusions from incomplete information.`
  }

  const keyWords = [
    'probability',
    'learn probability',
    'probability formulas',
    'probability theory',
    'probability distributions',
    'probability concepts',
    'random variables',
    'probability basics'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/probability'
  const lastModified = new Date().toISOString()
  
  return {
    props: {
      sectionContent,
      introContent,
      keyWords,
      canonicalUrl,
      lastModified,
      probabilityFormulaList
    }
  }
}

export default function ProbabilityPage({ 
  sectionContent, 
  introContent, 
  keyWords,
  canonicalUrl,
  lastModified,
  probabilityFormulaList
}) {
  // Reconstruct sections with React components
  const probabilitySections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      content: [
        sectionContent.formulas.description,
        " ",
        <VerticalScrollingFormulaWidget 
          key="formula-widget2"
          formulaData={probabilityFormulaList}
          moreFormulasLink='/probability/formulas'
        />
      ]
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Probability - Learn Mathematics",
    "description": "Comprehensive guide to probability theory including formulas, distributions, and core concepts. Learn about random variables, probability measures, and their applications.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Probability",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Probability - Theory, Formulas & Concepts | Learn Math Class"
  const pageDescription = "Master probability with our comprehensive guide covering probability theory, distributions, random variables, and core concepts. Perfect for students and educators."

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={lastModified} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
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
      <OperaSidebar 
        side='right'
        topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
     
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
          Probability
        </h1>
        <SectionTableOfContents sections={probabilitySections}/>
        <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
        <Sections sections={probabilitySections}/>
        <br/>
        <br/>
        <br/>
        <ScrollUpButton/>
      </main>
    </>
  )
}