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

  const keyWords=['probability distributions', 'distribution explorer', 'discrete distributions', 'continuous distributions', 'binomial distribution', 'normal distribution', 'poisson distribution', 'exponential distribution']

  const sectionsContent = {
    obj1: {
      title: `What are Probability Distributions?`,
      content: `A probability distribution describes how probabilities are distributed over the values of a random variable. It provides a mathematical function that gives the probabilities of occurrence of different possible outcomes.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Discrete vs Continuous Distributions`,
      content: `Discrete distributions describe random variables that can only take on specific, countable values (like the number of heads in coin flips). Continuous distributions describe random variables that can take on any value within a range (like height or temperature).`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const introContent = {
    id: "intro",
    title: "Interactive Distribution Explorers",
    content: `Explore probability distributions through interactive visualizations and calculators. Each explorer provides probability calculations, visual representations, and detailed explanations to help you understand how different distributions work.`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      seoData: {
        title: "Probability Distribution Explorers | Interactive Calculators | Learn Math Class",
        description: "Explore discrete and continuous probability distributions with interactive calculators and visualizations. Calculate probabilities, understand parameters, and visualize distributions including binomial, normal, Poisson, and exponential.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/distributions",
        name: "Probability Distribution Explorers"
      },
    }
  }
}

export default function DistributionExplorersPage({seoData, sectionsContent, introContent}) {

  const discreteDistributions = [
    {
      title: 'Binomial Distribution',
      description: 'Models the number of successes in a fixed number of independent trials',
      href: '/probability/visual-tools/distributions/binomial'
    },
    {
      title: 'Geometric Distribution',
      description: 'Models the number of trials until the first success',
      href: '/probability/visual-tools/distributions/geometric'
    },
    {
      title: 'Negative Binomial Distribution',
      description: 'Models the number of trials until a specified number of successes',
      href: '/probability/visual-tools/distributions/negative-binomial'
    },
    {
      title: 'Poisson Distribution',
      description: 'Models the number of events occurring in a fixed interval',
      href: '/probability/visual-tools/distributions/poisson'
    },
    {
      title: 'Hypergeometric Distribution',
      description: 'Models sampling without replacement from a finite population',
      href: '/probability/visual-tools/distributions/hypergeometric'
    },
    {
      title: 'Uniform Discrete Distribution',
      description: 'Models equally likely outcomes over a discrete range',
      href: '/probability/visual-tools/distributions/uniform-discrete'
    }
  ]

  const continuousDistributions = [
    {
      title: 'Normal Distribution',
      description: 'The bell curve - models many natural phenomena',
      href: '/probability/visual-tools/distributions/normal'
    },
    {
      title: 'Exponential Distribution',
      description: 'Models time between events in a Poisson process',
      href: '/probability/visual-tools/distributions/exponential'
    },
    {
      title: 'Uniform Continuous Distribution',
      description: 'Models equally likely outcomes over a continuous range',
      href: '/probability/visual-tools/distributions/uniform-continuous'
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
      <h1 className='title' style={{marginTop:'-50px', marginBottom:'-20px'}}>
        Probability Distribution Explorers
      </h1>
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

      {/* Discrete Distributions Section */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
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