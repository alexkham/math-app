
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import Head from 'next/head'
import DirectExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/DirectExpectedValueCalculator'
import RawDataExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/RawDataExpectedValueCalculator'
import GroupedDataExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/GroupedDataExpectedValueCalculator'
import DiscreteUniformExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/DiscreteUniformExpectedValueCalculator'
import BinomialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/BinomialExpectedValueCalculator'
import GeometricExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/GeometricExpectedValueCalculator'
import NegativeBinomialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/NegativeBinomialExpectedValueCalculator'
import HypergeometricExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/HypergeometricExpectedValueCalculator'
import PoissonExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/PoissonExpectedValueCalculator'
import ContinuousUniformExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/ContinuousUniformExpectedValueCalculator'
import ExponentialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/ExponentialExpectedValueCalculator'
import NormalExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/NormalDistributionExpectedValueCalculator'
import '../../../../pages/pages.css'



export async function getStaticPaths() {
  const paths = [
    { params: { view: 'direct-data' } },
    { params: { view: 'raw-data' } },
    { params: { view: 'grouped-data' } },
    { params: { view: 'discrete-uniform' } },
    { params: { view: 'binomial' } },
    { params: { view: 'geometric' } },
    { params: { view: 'negative-binomial' } },
    { params: { view: 'hypergeometric' } },
    { params: { view: 'poisson' } },
    { params: { view: 'continuous-uniform' } },
    { params: { view: 'exponential' } },
    { params: { view: 'normal' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { view } = params;

  const viewConfig = {
    'direct-data': {
      componentName: 'DirectExpectedValueCalculator',
      title: 'Expected Value Calculator - Direct Data | Learn Math Class',
      description: 'Calculate expected value from a probability distribution table. Enter values and their probabilities to compute the mean with step-by-step solutions.',
      keywords: ['expected value calculator', 'direct data', 'probability table', 'mean calculator', 'discrete probability'],
      h1Title: 'Expected Value Calculator - Direct Data',
      url: '/probability/calculators/expected-value/direct-data',
      name: 'Expected Value Calculator - Direct Data'
    },
    'raw-data': {
      componentName: 'RawDataExpectedValueCalculator',
      title: 'Expected Value Calculator - Raw Data | Learn Math Class',
      description: 'Calculate expected value from a list of raw data values. Enter your dataset to compute the mean with detailed calculations.',
      keywords: ['expected value calculator', 'raw data', 'dataset mean', 'average calculator', 'data analysis'],
      h1Title: 'Expected Value Calculator - Raw Data',
      url: '/probability/calculators/expected-value/raw-data',
      name: 'Expected Value Calculator - Raw Data'
    },
    'grouped-data': {
      componentName: 'GroupedDataExpectedValueCalculator',
      title: 'Expected Value Calculator - Grouped Data | Learn Math Class',
      description: 'Calculate expected value from grouped frequency data. Enter class intervals and frequencies to compute the mean with step-by-step solutions.',
      keywords: ['expected value calculator', 'grouped data', 'frequency distribution', 'class intervals', 'grouped mean'],
      h1Title: 'Expected Value Calculator - Grouped Data',
      url: '/probability/calculators/expected-value/grouped-data',
      name: 'Expected Value Calculator - Grouped Data'
    },
    'discrete-uniform': {
      componentName: 'DiscreteUniformExpectedValueCalculator',
      title: 'Discrete Uniform Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for discrete uniform distribution. Enter minimum and maximum values to compute E[X] = (a + b) / 2 with formula explanation.',
      keywords: ['discrete uniform expected value', 'uniform distribution mean', 'expected value calculator', 'discrete uniform'],
      h1Title: 'Discrete Uniform Expected Value Calculator',
      url: '/probability/calculators/expected-value/discrete-uniform',
      name: 'Discrete Uniform Expected Value Calculator'
    },
    'binomial': {
      componentName: 'BinomialExpectedValueCalculator',
      title: 'Binomial Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for binomial distribution. Enter n trials and probability p to compute E[X] = np with detailed formula breakdown.',
      keywords: ['binomial expected value', 'binomial mean calculator', 'np formula', 'binomial distribution'],
      h1Title: 'Binomial Expected Value Calculator',
      url: '/probability/calculators/expected-value/binomial',
      name: 'Binomial Expected Value Calculator'
    },
    'geometric': {
      componentName: 'GeometricExpectedValueCalculator',
      title: 'Geometric Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for geometric distribution. Enter probability p to compute E[X] = 1/p with formula explanation.',
      keywords: ['geometric expected value', 'geometric mean calculator', '1/p formula', 'geometric distribution'],
      h1Title: 'Geometric Expected Value Calculator',
      url: '/probability/calculators/expected-value/geometric',
      name: 'Geometric Expected Value Calculator'
    },
    'negative-binomial': {
      componentName: 'NegativeBinomialExpectedValueCalculator',
      title: 'Negative Binomial Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for negative binomial distribution. Enter r successes and probability p to compute E[X] = r/p with detailed steps.',
      keywords: ['negative binomial expected value', 'negative binomial mean', 'r/p formula', 'negative binomial distribution'],
      h1Title: 'Negative Binomial Expected Value Calculator',
      url: '/probability/calculators/expected-value/negative-binomial',
      name: 'Negative Binomial Expected Value Calculator'
    },
    'hypergeometric': {
      componentName: 'HypergeometricExpectedValueCalculator',
      title: 'Hypergeometric Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for hypergeometric distribution. Enter population parameters to compute E[X] = n(K/N) with formula explanation.',
      keywords: ['hypergeometric expected value', 'hypergeometric mean', 'sampling without replacement', 'hypergeometric distribution'],
      h1Title: 'Hypergeometric Expected Value Calculator',
      url: '/probability/calculators/expected-value/hypergeometric',
      name: 'Hypergeometric Expected Value Calculator'
    },
    'poisson': {
      componentName: 'PoissonExpectedValueCalculator',
      title: 'Poisson Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for Poisson distribution. Enter rate parameter λ to compute E[X] = λ with detailed formula breakdown.',
      keywords: ['poisson expected value', 'poisson mean calculator', 'lambda parameter', 'poisson distribution'],
      h1Title: 'Poisson Expected Value Calculator',
      url: '/probability/calculators/expected-value/poisson',
      name: 'Poisson Expected Value Calculator'
    },
    'continuous-uniform': {
      componentName: 'ContinuousUniformExpectedValueCalculator',
      title: 'Continuous Uniform Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for continuous uniform distribution. Enter interval [a,b] to compute E[X] = (a + b) / 2 with formula explanation.',
      keywords: ['continuous uniform expected value', 'uniform distribution mean', 'expected value calculator', 'continuous uniform'],
      h1Title: 'Continuous Uniform Expected Value Calculator',
      url: '/probability/calculators/expected-value/continuous-uniform',
      name: 'Continuous Uniform Expected Value Calculator'
    },
    'exponential': {
      componentName: 'ExponentialExpectedValueCalculator',
      title: 'Exponential Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for exponential distribution. Enter rate parameter λ to compute E[X] = 1/λ with detailed formula breakdown.',
      keywords: ['exponential expected value', 'exponential mean calculator', '1/lambda formula', 'exponential distribution'],
      h1Title: 'Exponential Expected Value Calculator',
      url: '/probability/calculators/expected-value/exponential',
      name: 'Exponential Expected Value Calculator'
    },
    'normal': {
      componentName: 'NormalExpectedValueCalculator',
      title: 'Normal Distribution Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for normal distribution. Enter mean μ to compute E[X] = μ with formula explanation and standard deviation context.',
      keywords: ['normal expected value', 'normal mean calculator', 'gaussian distribution', 'mu parameter', 'normal distribution'],
      h1Title: 'Normal Distribution Expected Value Calculator',
      url: '/probability/calculators/expected-value/normal',
      name: 'Normal Distribution Expected Value Calculator'
    }
  };

  const config = viewConfig[view];

  const sectionsContent = {
    obj1: {
      title: `Understanding Expected Value`,
      content: ``,
      link: '',
    },
    obj2: {
      title: `Formula and Calculation`,
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
    title: "Calculate Expected Value",
    content: `Use the calculator below to compute the expected value with step-by-step solutions and detailed explanations.`
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

export default function ExpectedValueCalculatorPage({ seoData, sectionsContent, introContent, componentName, h1Title }) {

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
      <h1 className='title' style={{marginTop:'-70px', marginBottom:'-50px'}}>
        {h1Title}
      </h1>
      <br/>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        transform:'scale(0.95)',
      }}>
        {/* Basic Calculators */}
        {componentName === 'DirectExpectedValueCalculator' && <DirectExpectedValueCalculator/>}
        {componentName === 'RawDataExpectedValueCalculator' && <RawDataExpectedValueCalculator/>}
        {componentName === 'GroupedDataExpectedValueCalculator' && <GroupedDataExpectedValueCalculator/>}

        {/* Discrete Distribution Calculators */}
        {componentName === 'DiscreteUniformExpectedValueCalculator' && <DiscreteUniformExpectedValueCalculator/>}
        {componentName === 'BinomialExpectedValueCalculator' && <BinomialExpectedValueCalculator/>}
        {componentName === 'GeometricExpectedValueCalculator' && <GeometricExpectedValueCalculator/>}
        {componentName === 'NegativeBinomialExpectedValueCalculator' && <NegativeBinomialExpectedValueCalculator/>}
        {componentName === 'HypergeometricExpectedValueCalculator' && <HypergeometricExpectedValueCalculator/>}
        {componentName === 'PoissonExpectedValueCalculator' && <PoissonExpectedValueCalculator/>}

        {/* Continuous Distribution Calculators */}
        {componentName === 'ContinuousUniformExpectedValueCalculator' && <ContinuousUniformExpectedValueCalculator/>}
        {componentName === 'ExponentialExpectedValueCalculator' && <ExponentialExpectedValueCalculator/>}
        {componentName === 'NormalExpectedValueCalculator' && <NormalExpectedValueCalculator/>}
      </div>

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
    </>
  )
}