// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../pages.css'
// import Head from 'next/head'
// import DiscreteUniformDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/DiscreteUniformDistributionExplorer'
// import BinomialDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/BinomialDistributionExplorer'
// import GeometricDistributionExplorerer from '@/app/components/probability/explorers/distributions/discrete/GeometricDistributionExplorer'
// import HypergeometricDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/HyperGeometricDistributionExplorer'
// import NegativeBinomialDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/NegativeBinomialDistributionExplorer'
// import PoissonDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/PoissonDistributionExplorer'
// import ContinuousUniformDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/ContinuousUniformDistributionVisualizer'
// import ExponentialDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/ExponentialDistributionExplorer'
// import NormalDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/NormalDistributionExplorer'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

//   // •

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/url",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Page Title</h1>
//    <br/>
//    {/* #discrete distribution explorers */}
//    <DiscreteUniformDistributionExplorer/>
//    <BinomialDistributionExplorer/>
//    <GeometricDistributionExplorerer/>
//    <HypergeometricDistributionExplorer/>
//    <NegativeBinomialDistributionExplorer/>
//    <PoissonDistributionExplorer/>
//    {/* #Continuous Distribution Explorers */}
//    <ContinuousUniformDistributionExplorer/>
//    <ExponentialDistributionExplorer/>
//    <NormalDistributionExplorer/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import Head from 'next/head'
import '../../../../pages/pages.css'
import DiscreteUniformDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/DiscreteUniformDistributionExplorer'
import BinomialDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/BinomialDistributionExplorer'
import GeometricDistributionExplorerer from '@/app/components/probability/explorers/distributions/discrete/GeometricDistributionExplorer'
import HypergeometricDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/HyperGeometricDistributionExplorer'
import NegativeBinomialDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/NegativeBinomialDistributionExplorer'
import PoissonDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/PoissonDistributionExplorer'
import ContinuousUniformDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/ContinuousUniformDistributionVisualizer'
import ExponentialDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/ExponentialDistributionExplorer'
import NormalDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/NormalDistributionExplorer'

export async function getStaticPaths() {
  const paths = [
    { params: { view: 'binomial' } },
    { params: { view: 'geometric' } },
    { params: { view: 'negative-binomial' } },
    { params: { view: 'poisson' } },
    { params: { view: 'hypergeometric' } },
    { params: { view: 'uniform-discrete' } },
    { params: { view: 'normal' } },
    { params: { view: 'exponential' } },
    { params: { view: 'uniform-continuous' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { view } = params;

  const viewConfig = {
    'binomial': {
      componentName: 'BinomialDistributionExplorer',
      title: 'Binomial Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the binomial distribution with an interactive calculator. Calculate probabilities for n trials with probability p of success. Visualize PMF, CDF, and understand parameters through dynamic charts.',
      keywords: ['binomial distribution', 'binomial calculator', 'binomial probability', 'discrete distribution', 'n trials', 'probability of success', 'binomial PMF', 'binomial CDF'],
      h1Title: 'Binomial Distribution Explorer',
      url: '/probability/visual-tools/distributions/binomial',
      name: 'Binomial Distribution Calculator'
    },
    'geometric': {
      componentName: 'GeometricDistributionExplorer',
      title: 'Geometric Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the geometric distribution with an interactive calculator. Calculate the probability of the first success occurring on trial k. Visualize PMF, CDF, and understand memoryless property.',
      keywords: ['geometric distribution', 'geometric calculator', 'first success', 'discrete distribution', 'memoryless property', 'geometric PMF', 'geometric CDF'],
      h1Title: 'Geometric Distribution Explorer',
      url: '/probability/visual-tools/distributions/geometric',
      name: 'Geometric Distribution Calculator'
    },
    'negative-binomial': {
      componentName: 'NegativeBinomialDistributionExplorer',
      title: 'Negative Binomial Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the negative binomial distribution with an interactive calculator. Calculate the number of trials needed to achieve r successes. Visualize PMF, CDF, and understand parameters.',
      keywords: ['negative binomial distribution', 'negative binomial calculator', 'r successes', 'discrete distribution', 'trials until success', 'negative binomial PMF'],
      h1Title: 'Negative Binomial Distribution Explorer',
      url: '/probability/visual-tools/distributions/negative-binomial',
      name: 'Negative Binomial Distribution Calculator'
    },
    'poisson': {
      componentName: 'PoissonDistributionExplorer',
      title: 'Poisson Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the Poisson distribution with an interactive calculator. Model the number of events in a fixed interval with parameter λ. Visualize PMF, CDF, and understand rate parameters.',
      keywords: ['poisson distribution', 'poisson calculator', 'lambda parameter', 'discrete distribution', 'event rate', 'poisson PMF', 'poisson CDF'],
      h1Title: 'Poisson Distribution Explorer',
      url: '/probability/visual-tools/distributions/poisson',
      name: 'Poisson Distribution Calculator'
    },
    'hypergeometric': {
      componentName: 'HypergeometricDistributionExplorer',
      title: 'Hypergeometric Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the hypergeometric distribution with an interactive calculator. Calculate probabilities for sampling without replacement from a finite population. Visualize PMF, CDF, and understand population parameters.',
      keywords: ['hypergeometric distribution', 'hypergeometric calculator', 'sampling without replacement', 'discrete distribution', 'finite population', 'hypergeometric PMF'],
      h1Title: 'Hypergeometric Distribution Explorer',
      url: '/probability/visual-tools/distributions/hypergeometric',
      name: 'Hypergeometric Distribution Calculator'
    },
    'uniform-discrete': {
      componentName: 'DiscreteUniformDistributionExplorer',
      title: 'Discrete Uniform Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the discrete uniform distribution with an interactive calculator. Model equally likely outcomes over a discrete range. Visualize PMF, CDF, and understand uniform probabilities.',
      keywords: ['discrete uniform distribution', 'uniform calculator', 'equally likely outcomes', 'discrete distribution', 'uniform PMF', 'discrete uniform CDF'],
      h1Title: 'Discrete Uniform Distribution Explorer',
      url: '/probability/visual-tools/distributions/uniform-discrete',
      name: 'Discrete Uniform Distribution Calculator'
    },
    'normal': {
      componentName: 'NormalDistributionExplorer',
      title: 'Normal Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the normal (Gaussian) distribution with an interactive calculator. Calculate probabilities using mean μ and standard deviation σ. Visualize PDF, CDF, and understand the bell curve.',
      keywords: ['normal distribution', 'gaussian distribution', 'normal calculator', 'bell curve', 'continuous distribution', 'mean', 'standard deviation', 'normal PDF', 'normal CDF'],
      h1Title: 'Normal Distribution Explorer',
      url: '/probability/visual-tools/distributions/normal',
      name: 'Normal Distribution Calculator'
    },
    'exponential': {
      componentName: 'ExponentialDistributionExplorer',
      title: 'Exponential Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the exponential distribution with an interactive calculator. Model time between events in a Poisson process with rate λ. Visualize PDF, CDF, and understand memoryless property.',
      keywords: ['exponential distribution', 'exponential calculator', 'continuous distribution', 'rate parameter', 'memoryless', 'exponential PDF', 'exponential CDF', 'poisson process'],
      h1Title: 'Exponential Distribution Explorer',
      url: '/probability/visual-tools/distributions/exponential',
      name: 'Exponential Distribution Calculator'
    },
    'uniform-continuous': {
      componentName: 'ContinuousUniformDistributionExplorer',
      title: 'Continuous Uniform Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Explore the continuous uniform distribution with an interactive calculator. Model equally likely outcomes over a continuous interval [a,b]. Visualize PDF, CDF, and understand uniform density.',
      keywords: ['continuous uniform distribution', 'uniform calculator', 'continuous distribution', 'uniform PDF', 'uniform CDF', 'constant density'],
      h1Title: 'Continuous Uniform Distribution Explorer',
      url: '/probability/visual-tools/distributions/uniform-continuous',
      name: 'Continuous Uniform Distribution Calculator'
    }
  };

  const config = viewConfig[view];

  const sectionsContent = {
    obj1: {
      title: `Understanding the Distribution`,
      content: ``,
      link: '',
    },
    obj2: {
      title: `Key Parameters`,
      content: ``,
      link: '',
    },
    obj3: {
      title: `Applications`,
      content: ``,
      link: '',
    }
  };

  const introContent = {
    id: "intro",
    title: "Interactive Distribution Explorer",
    content: `Use the interactive calculator below to explore this probability distribution. Adjust parameters to see how they affect probabilities and visualize the distribution.`
  };

  return {
    props: {
      sectionsContent,
      introContent,
      seoData: {
        title: config.title,
        description: config.description,
        keywords: config.keywords.join(", "),
        url: config.url,
        name: config.name
      },
      componentName: config.componentName,
      h1Title: config.h1Title
    }
  };
}

export default function DistributionExplorerPage({ seoData, sectionsContent, introContent, componentName, h1Title }) {

  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    }
  ];

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
      <h1 className='title' style={{marginTop:'-50px', marginBottom:'-20px'}}>
        {h1Title}
      </h1>
      <br/>
      <div style={{width:'80%',margin:'auto'}}>
      {/* Discrete Distribution Explorers */}
      {componentName === 'BinomialDistributionExplorer' && <BinomialDistributionExplorer 
      title='Modify Parameters and See Results'/>}
      {componentName === 'GeometricDistributionExplorer' && <GeometricDistributionExplorerer 
      title='Modify Parameters and See Results'/>}
      {componentName === 'NegativeBinomialDistributionExplorer' && <NegativeBinomialDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'PoissonDistributionExplorer' && <PoissonDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'HypergeometricDistributionExplorer' && <HypergeometricDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'DiscreteUniformDistributionExplorer' && <DiscreteUniformDistributionExplorer
      title='Modify Parameters and See Results'/>}

      {/* Continuous Distribution Explorers */}
      {componentName === 'NormalDistributionExplorer' && <NormalDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'ExponentialDistributionExplorer' && <ExponentialDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'ContinuousUniformDistributionExplorer' && <ContinuousUniformDistributionExplorer
      title='Modify Parameters and See Results'/>}
     </div>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}