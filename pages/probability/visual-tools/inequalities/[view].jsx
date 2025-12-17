import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import MarkovInequality from '@/app/components/probability/inequalities/MarkovInequality'
import ChebyshevInequality from '@/app/components/probability/inequalities/ChebyshevInequality'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'markov' } },
    { params: { view: 'chebyshev' } },
  ];

  return { paths, fallback: false };
}


export async function getStaticProps({ params }){

  const keyWords = [
    "probability inequalities",
    "Markov inequality",
    "Chebyshev inequality",
    "probability bounds",
    "tail probability bounds",
    "concentration inequalities",
    "probability theory tools",
    "statistical inequalities",
    "distribution bounds",
    "probability upper bounds",
    "variance bounds",
    "expected value inequalities",
    "interactive probability inequalities",
    "probability visualization"
  ];


const viewConfig = {
    'markov': {
      component: 'MarkovInequality',
      title: "Markov Inequality - Interactive Visualization | Learn Math Class",
      description: "Interactive Markov inequality visualizer. Explore tail probability bounds using expected values across multiple probability distributions with real-time calculations.",
      name: "Markov Inequality",
      url: "/probability/visual-tools/inequalities/markov",
      h1: "Markov Inequality Visualization",
      introTitle: "Understanding Markov Inequality",
      introContent: "Markov's inequality provides an upper bound on the probability that a non-negative random variable exceeds a certain threshold, using only the expected value. For any non-negative random variable X and positive threshold a: P(X ≥ a) ≤ E[X] / a.",
      sectionsContent: {
        obj1: {
          title: "How Markov Inequality Works",
          content: "Markov inequality states that for non-negative X, the probability of X exceeding threshold a cannot be more than the expected value divided by a. This bound becomes tighter as a increases relative to E[X].",
          link: '#how-it-works'
        },
        obj2: {
          title: "Key Conditions and Limitations",
          content: "The inequality requires X to be non-negative and only provides useful information when a > E[X]. When a ≤ E[X], the bound exceeds 1 and tells us nothing. The bound can be quite loose for many distributions.",
          link: '#conditions'
        },
        obj3: {
          title: "Applications",
          content: "Markov inequality is used in algorithm analysis for average-case complexity, queueing theory for service times, and as a building block for more sophisticated concentration inequalities in probability theory.",
          link: '#applications'
        }
      }
    },
    'chebyshev': {
      component: 'ChebyshevInequality',
      title: "Chebyshev Inequality - Interactive Visualization | Learn Math Class",
      description: "Interactive Chebyshev inequality visualizer. Explore probability bounds for deviations from the mean using variance across multiple distributions.",
      name: "Chebyshev Inequality",
      url: "/probability/visual-tools/inequalities/chebyshev",
      h1: "Chebyshev Inequality Visualization",
      introTitle: "Understanding Chebyshev Inequality",
      introContent: "Chebyshev's inequality bounds the probability that a random variable deviates from its mean by more than a given amount, using only the mean and variance. For any random variable X with mean μ and variance σ²: P(|X - μ| ≥ a) ≤ σ² / a².",
      sectionsContent: {
        obj1: {
          title: "How Chebyshev Inequality Works",
          content: "Chebyshev inequality bounds the probability of deviating from the mean by measuring how far we are in units of variance. It applies to any distribution with finite variance, making it extremely general but sometimes conservative.",
          link: '#how-it-works'
        },
        obj2: {
          title: "Relationship to Standard Deviation",
          content: "Often expressed as P(|X - μ| ≥ kσ) ≤ 1/k², meaning the probability of being k standard deviations away from the mean is at most 1/k². For example, at least 75% of values lie within 2 standard deviations.",
          link: '#standard-deviation'
        },
        obj3: {
          title: "Applications",
          content: "Chebyshev inequality is used in quality control, confidence interval construction, proving the weak law of large numbers, and whenever we need distribution-free probability bounds with only mean and variance information.",
          link: '#applications'
        }
      }
    }
  };

const currentConfig = viewConfig[params.view];

    const sectionsContent = currentConfig.sectionsContent;


  const introContent = {
  id: "intro",
  title: currentConfig.introTitle,
  content: currentConfig.introContent
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: keyWords.join(", "),
        url: currentConfig.url,
         name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
        
       }
    }
   }

export default function InequalityPage({seoData, sectionsContent, introContent, currentView, componentName, h1Title}) {

    
  const genericSections=[
    {
        id:'1',
        title: sectionsContent.obj1.title,
        link: sectionsContent.obj1.link,
        content: sectionsContent.obj1.content
    },
    {
        id:'2',
        title: sectionsContent.obj2.title,
        link: sectionsContent.obj2.link,
        content: sectionsContent.obj2.content
    },
    {
        id:'3',
        title: sectionsContent.obj3.title,
        link: sectionsContent.obj3.link,
        content: sectionsContent.obj3.content
    }
]

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
  
  <meta name="twitter:card" content="summary_large_image" />
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
   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>{h1Title}</h1>
   <br/>
   <br/>
   
   {componentName === 'MarkovInequality' && <MarkovInequality/>}
   {componentName === 'ChebyshevInequality' && <ChebyshevInequality/>}
   
   <br/>
   <SectionTableOfContents sections={genericSections}/>
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}