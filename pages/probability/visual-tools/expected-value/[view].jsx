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
// import WeightedExpectedValueVisualizer from '@/app/components/probability/expected-value/WeightedExpectedValueVisualization'
// import DiscreteExpectedValueVisualization from '@/app/components/probability/expected-value/DiscreteExpectedValueVisualization'
import WeightedExpectedValueVisualizer from '@/app/components/probability/expected-value/WeightedExpectedValueVisualization'
import DiscreteExpectedValueVisualization from '@/app/components/probability/expected-value/DiscreteExpectedValueVisualization'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'discrete' } },
    { params: { view: 'weighted' } },
  ];

  return { paths, fallback: false };
}


export async function getStaticProps({ params }){

  const keyWords = [
    "expected value visualization",
    "expected value calculator",
    "weighted average probability",
    "discrete expected value",
    "continuous expected value",
    "mean of random variable",
    "probability weighted average",
    "expected value examples",
    "interactive expected value",
    "E[X] calculator",
    "probability distribution mean",
    "expected value formula",
    "visual probability tools",
    "expected value interactive"
  ];


const viewConfig = {
    'discrete': {
      component: 'DiscreteExpectedValueVisualization',
      title: "Discrete Expected Value - Interactive Visualization | Learn Math Class",
      description: "Interactive discrete expected value calculator and visualizer. Calculate E[X] for discrete random variables with probability mass functions and see visual representations.",
      name: "Discrete Expected Value",
      url: "/probability/visual-tools/expected-value/discrete",
      h1: "Discrete Expected Value Visualization",
      introTitle: "Understanding Discrete Expected Value",
      introContent: "For a discrete random variable X with outcomes x₁, x₂, ..., xₙ and corresponding probabilities p₁, p₂, ..., pₙ, the expected value is E[X] = Σ xᵢ · pᵢ. This represents the long-run average value if the experiment were repeated many times.",
      sectionsContent: {
        obj1: {
          title: "Discrete Random Variables",
          content: "Discrete random variables have countable outcomes. Examples include dice rolls, coin flips, number of customers, or any scenario with distinct, separate possible values.",
          link: '#discrete-variables'
        },
        obj2: {
          title: "Calculation Formula",
          content: "Expected value for discrete variables is calculated by multiplying each outcome by its probability and summing all these products: E[X] = x₁p₁ + x₂p₂ + ... + xₙpₙ.",
          link: '#calculation'
        },
        obj3: {
          title: "Interpretation",
          content: "The expected value is the theoretical mean if you could repeat the random process infinitely. It may not be an actual possible outcome of the random variable itself.",
          link: '#interpretation'
        }
      }
    },
    'weighted': {
      component: 'WeightedExpectedValueVisualizer',
      title: "Weighted Expected Value - Interactive Visualization | Learn Math Class",
      description: "Interactive weighted expected value visualizer. See how probability weights combine with outcomes to calculate E[X] with dynamic visual representations.",
      name: "Weighted Expected Value",
      url: "/probability/visual-tools/expected-value/weighted",
      h1: "Weighted Expected Value Visualization",
      introTitle: "Understanding Weighted Averages in Probability",
      introContent: "Expected value is a weighted average where each outcome is weighted by its probability of occurrence. This visualization shows how different probability weights affect the final expected value.",
      sectionsContent: {
        obj1: {
          title: "Weighted Averages",
          content: "Unlike a simple average where all values have equal weight, expected value gives more weight to outcomes with higher probabilities. This reflects their greater influence on the long-run average.",
          link: '#weighted-averages'
        },
        obj2: {
          title: "Visual Representation",
          content: "The weighted visualization shows each outcome as a bar whose contribution to the expected value is proportional to both the outcome value and its probability.",
          link: '#visualization'
        },
        obj3: {
          title: "Interactive Exploration",
          content: "Adjust probabilities and outcomes to see how changes affect the expected value. Notice how high-probability outcomes have greater influence on E[X].",
          link: '#exploration'
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

export default function ExpectedValuePage({seoData, sectionsContent, introContent, currentView, componentName, h1Title}) {

    
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
   {/* <GenericNavbar/> */}
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'-20px'}}>{h1Title}</h1>
   <br/>
   <br/>
   
   {componentName === 'DiscreteExpectedValueVisualization' && <DiscreteExpectedValueVisualization/>}
   {componentName === 'WeightedExpectedValueVisualizer' && <WeightedExpectedValueVisualizer/>}
   
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