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
import Head from 'next/head';
import { createContentHtml } from '@/app/utils/utils-functions'
import MyList from '@/app/components/page-components/lists/MyList'

export async function getStaticProps() {
  const { default: probabilityFormulasList } = await import('@/app/api/db/formulas/probability/probabilityFormulasList')
  const { default: probabilityTermsList } = await import('@/app/api/db/definitions/probability/probabilityDefinitions')
  


  
  // Static content that can be used for SEO
  // const sectionContent = {
  //   formulas: {
  //     title: 'Probability Formulas',
  //     description: 'Explore Probability formulas with explanations and examples'
  //   }
  // }

   const sectionContent = {
      formulas: {
        title: 'Probability Formulas',
        description: 'Visit Probability formulas page',
        leftContentHtml: createContentHtml({ 
          description: 'This page presents essential probability formulas organized by categories, ranging from basic principles to advanced distributions. Each formula includes detailed explanations, example calculations, and practical use cases, making it a helpful resource for students and practitioners working with probability theory and statistical analysis.', 
          // link: '/probability/formulas',
          // linkText: 'View All Formulas',
          height:'350px',
          backgroundColor:'#f2f2f2',
          
        }),
        layout: 'horizontal',
      },
      definitions: {
        title: 'Probability Terms and Definitions',
        description: '@academic[theorem:Browse Probability terminology including main concepts and their definitions with examples .A structured guide to probability theory terms and concepts, progressing from foundational definitions through set theory, random variables, and complex distributions. The content covers both theoretical aspects and practical applications, making probability concepts more accessible for study and reference.]@',
        rightContentHtml: createContentHtml({ 
          description: 'Browse Probability terminology including main concepts and their definitions with examples .A structured guide to probability theory terms and concepts, progressing from foundational definitions through set theory, random variables, and complex distributions. The content covers both theoretical aspects and practical applications, making probability concepts more accessible for study and reference.',
          // link: '/probability/definitions',
          // linkText: 'View All Definitions',
          height:'350px',
          backgroundColor:'#f2f2f2',
        }),
        layout: 'horizontal'
      },
      concepts:{
        title:'Main Concepts',
        description:`@academic[theorem: The Sample Space (Ω), is the collection of all different results that the experiment may produce.]@
        The sample space can be **finite** (for example, in the die‐rolling scenario or coin flipping) or **infinite** (for instance, selecting a real number).
         Although in the case of a die roll the collection of possible outcomes may seem self‐evident, the sample space plays an important role in conducting more complex experiments. Typically, a researcher will take the sample space and partition it into subsets in order to draw various conclusions.
         @academic[theorem:Probability Event is simply any subset of the sample space.]@
         **Example:**
   In case of die roll the sample space would be S = {1, 2, 3, 4, 5, 6}
   **Some possible events:**
 Event A = {2, 4, 6} (rolling an even number)
 Event B = {5} (rolling exactly 5)
 Event C = {1, 2, 3, 4, 5, 6} (any outcome - certain event)
 Event D = {} (impossible event)
 As the definition states and the example shows, probability event may include one or more outcomes.It is a set of results counting as one event.         
 @academic[theorem:Probability is a function that assigns to each event in the sample space a real number in $[0,1]$ where total probability value of the entire sample space $𝑃(𝑆)=1$.]@
 @academic[theorem:This number is calculated as a ratio $P(E) = \\frac{\\text{Number of favorable outcomes for event E}}{\\text{Total number of possible outcomes in the sample space S}}$]@
 Probability function satisfies three basic [axioms](!/probability#axioms) of probability.
 `
         
      },
      axioms:{
        title:`Basic Axioms of Probability`,
        description:`The three Kolmogorov axioms provide a minimal yet complete framework for assigning consistent probabilities to events, laying the groundwork for all of probability theory.  From these principles flow essential rules—such as the addition rule for disjoint events, the definition of conditional probability, and Bayes’ theorem—as well as many useful corollaries that drive rigorous problem‐solving in statistics, science, and engineering.
`

      },
      symbols:{
        title:'Probability Symbols Reference',
        description:`Our [Probability Symbols page](!/math-symbols/probability) delivers a systematic reference for notation used in probability theory and statistics. This collection serves as an essential guide for students and professionals working with statistical concepts.
The reference organizes symbols into practical categories including probability notations (P(A), P(A|B)), random variables and distributions (f_X(x), F_X(x)), and common distribution families (Bin(n,p), N(μ,σ²)). It extends to advanced topics like statistical measures (E(X), Var(X)), hypothesis testing parameters (H₀, α, p-value), and information theory metrics (H(X), I(X;Y)).
Specialized sections cover moment generating functions (M_X(t)), key probability inequalities (Markov's, Chebyshev's), Bayesian methods, and regression analysis notation—all presented with precise LaTeX formatting to support academic writing and research in probability and statistics.`,
link:'/math-symbols/probability'
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


  const axiomsData = [
    {
      title: 'Non-negativity axiom',
      text: 'For any event A, 0 ≤ P(A) ≤ 1.'
    },
    {
      title: 'Normalization axiom',
      text: '$P(S) = 1$, meaning the probabilities of all possible outcomes in S sum exactly to 1'
    },
    {
      title: 'Countable additivity axiom',
      text: 'If A₁, A₂, … are disjoint, then P(⋃ᵢ Aᵢ) = ∑ᵢ P(Aᵢ).'
    }
  ];

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
      probabilityFormulasList,
      probabilityTermsList,
      axiomsData
    }
  }
}

export default function ProbabilityPage({ 
  sectionContent, 
  introContent, 
  keyWords,
  canonicalUrl,
  lastModified,
  probabilityFormulasList,
  probabilityTermsList,
  axiomsData
}) {
  // Reconstruct sections with React components
  const probabilitySections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      link:'/probability/formulas',
      content: [
        { 
          content: sectionContent.formulas.leftContentHtml,
          layout: 'horizontal', 
          position: 'left',
          width: 1.5 
        },
        { 
          content: <VerticalScrollingFormulaWidget 
            key="formula-widget"
            formulaData={probabilityFormulasList}
            moreFormulasLink='/probability/formulas'
          />, 
          layout: 'horizontal', 
          position: 'right',
          width: 2 
        }
      ]
    },
    {
      id: 'definitions',
      title: sectionContent.definitions.title,
      link:'/probability/definitions',
      content: [
        { 
          content: <VerticalScrollingFormulaWidget 
            key="definitions-widget"
            formulaData={probabilityTermsList}
            moreFormulasLink='/probability/definitions'
            type='definition'
          />, 
          layout: 'horizontal', 
          position: 'left',
          width: 2
        },
        { 
          content: sectionContent.definitions.rightContentHtml,
          layout: 'horizontal', 
          position: 'right',
          width: 1.5 
        }
      ]
    },
    {
      id: 'concepts',
      title: sectionContent.concepts.title, 
     
      content: sectionContent.concepts.description
    },
    {
      id: 'axioms',
      title: sectionContent.axioms.title, 
     
      content: [
        sectionContent.axioms.description,
        <MyList
        key={1}
        data={axiomsData}
        type="dot"     // • marker
        boxed={true}
        compact={false}
        divided={false}
        color="gray"
        width="700px"
        // math={true}
        article={true}  // <-- treats each item as {title, text}
        centered={false}
       
      />
      
      ]
    },
    {
      id: 'symbols',
      title: sectionContent.symbols.title, // Give it a proper title
      link: sectionContent.symbols.link, // Optional
      content: [
        {
          content:sectionContent.symbols.description,
          layout: 'horizontal',
          position: 'center', // or 'left' if you prefer
          width: 8 // full width
        }
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
        topOffset='55px' 
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
        <SectionTableOfContents sections={probabilitySections}
         showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
         secondaryNavTitle="More in this Section" />
        <br/>
        <br/>
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