import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps(){

  const keyWords=['expected value', 'expected value calculator', 'mean calculator', 'probability calculator', 'discrete distribution expected value', 'continuous distribution expected value']

  const sectionsContent = {
    obj1: {
      title: `What is Expected Value?`,
      content: `Expected value (mean) is the average outcome you would expect from a probability distribution over many trials. It represents the center of the distribution and is fundamental to probability theory and statistics.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `How to Calculate Expected Value`,
      content: `For discrete distributions, multiply each outcome by its probability and sum the results. For continuous distributions, integrate the product of x and the probability density function over the distribution's range.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const introContent = {
    id: "intro",
    title: "Calculate Expected Value",
    content: `Use our interactive calculators to compute expected values for various data types and probability distributions. Each calculator provides step-by-step solutions and visualizations to help you understand the concept.`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      seoData: {
        title: "Expected Value Calculators | Interactive Tools | Learn Math Class",
        description: "Calculate expected values for discrete and continuous probability distributions. Interactive calculators with step-by-step solutions for binomial, normal, Poisson, exponential, and more.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/expected-value",
        name: "Expected Value Calculators"
      },
    }
  }
}

export default function ExpectedValueCalculatorsPage({seoData, sectionsContent, introContent}) {

  const basicCalculators = [
    {
      title: 'Direct Data Calculator',
      description: 'Calculate expected value from probability distribution table',
      href: '/probability/calculators/expected-value/direct-data'
    },
    {
      title: 'Raw Data Calculator',
      description: 'Calculate expected value from a list of raw data values',
      href: '/probability/calculators/expected-value/raw-data'
    },
    {
      title: 'Grouped Data Calculator',
      description: 'Calculate expected value from grouped frequency data',
      href: '/probability/calculators/expected-value/grouped-data'
    }
  ]

  const discreteDistributions = [
    {
      title: 'Discrete Uniform',
      description: 'Expected value for equally likely discrete outcomes',
      href: '/probability/calculators/expected-value/discrete-uniform'
    },
    {
      title: 'Binomial Distribution',
      description: 'Expected value for n trials with probability p',
      href: '/probability/calculators/expected-value/binomial'
    },
    {
      title: 'Geometric Distribution',
      description: 'Expected value for trials until first success',
      href: '/probability/calculators/expected-value/geometric'
    },
    {
      title: 'Negative Binomial',
      description: 'Expected value for trials until r successes',
      href: '/probability/calculators/expected-value/negative-binomial'
    },
    {
      title: 'Hypergeometric Distribution',
      description: 'Expected value for sampling without replacement',
      href: '/probability/calculators/expected-value/hypergeometric'
    },
    {
      title: 'Poisson Distribution',
      description: 'Expected value for events in a fixed interval',
      href: '/probability/calculators/expected-value/poisson'
    }
  ]

  const continuousDistributions = [
    {
      title: 'Continuous Uniform',
      description: 'Expected value for uniform continuous distribution',
      href: '/probability/calculators/expected-value/continuous-uniform'
    },
    {
      title: 'Exponential Distribution',
      description: 'Expected value for exponential distribution',
      href: '/probability/calculators/expected-value/exponential'
    },
    {
      title: 'Normal Distribution',
      description: 'Expected value (mean μ) for normal distribution',
      href: '/probability/calculators/expected-value/normal'
    }
  ]

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
      <h1 className='title' style={{marginTop:'-50px', marginBottom:'5px'}}>
        Expected Value Calculators
      </h1>
      <div style={{
  maxWidth: '900px',
  margin: '0 auto 30px auto',
  padding: '10px 24px',
  background: '#245fe3',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(36, 95, 227, 0.2)',
  color: 'white',
  textAlign: 'center',
  marginBottom:'-50px',
}}>
  <h2 style={{
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    margin: '0 0 8px 0'
  }}>
    Calculate Expected Value
  </h2>
  <p style={{
    fontSize: '14px',
    lineHeight: '1.4',
    margin: 0,
    opacity: 0.95
  }}>
    Interactive calculators for various data types and distributions with step-by-step solutions and visualizations.
  </p>
</div>
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

      {/* Calculator Sections */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        
        {/* Basic Calculators Section */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a365d',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Basic Calculators
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {basicCalculators.map((calc, index) => (
            <Link 
              key={index}
              href={calc.href}
              style={{
                display: 'block',
                padding: '28px',
                backgroundColor: '#ffffff',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#3182ce';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(49,130,206,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '12px'
              }}>
                {calc.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#4a5568',
                lineHeight: '1.6',
                margin: 0
              }}>
                {calc.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Discrete Distributions Section */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a365d',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Discrete Distributions
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {discreteDistributions.map((dist, index) => (
            <Link 
              key={index}
              href={dist.href}
              style={{
                display: 'block',
                padding: '28px',
                backgroundColor: '#ffffff',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#3182ce';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(49,130,206,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '12px'
              }}>
                {dist.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#4a5568',
                lineHeight: '1.6',
                margin: 0
              }}>
                {dist.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Continuous Distributions Section */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a365d',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Continuous Distributions
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {continuousDistributions.map((dist, index) => (
            <Link 
              key={index}
              href={dist.href}
              style={{
                display: 'block',
                padding: '28px',
                backgroundColor: '#ffffff',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#3182ce';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(49,130,206,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '12px'
              }}>
                {dist.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#4a5568',
                lineHeight: '1.6',
                margin: 0
              }}>
                {dist.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
    </>
  )
}