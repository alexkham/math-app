import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'


export async function getStaticProps(){



  const keyWords=['','','','','']




  
    const cardsData=[

       {
    title: "Probability Distributions Explorer",
    description: "Compare probability distributions side-by-side with interactive visualization tools. Switch between discrete and continuous distributions to understand their unique properties, parameters, and real-world applications.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 2,
   image:'/images/magnifying_glass.jpg',
    href: "/probability/visual-tools/distributions"
  },
       {
    title: "Coin Toss Visualizers",
    description: "Explore coin toss probability with interactive simulators and calculators. Visualize sample spaces, run probability simulations, and watch the Law of Large Numbers in action with our coin flip tools.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 2,
   image:'/images/coin.jpg',
    href: "/probability/visual-tools/coin-toss"
  },
   {
    title: "Dice Roll Visualizers",
    description: "Calculate dice probabilities with interactive simulators and sample space explorers. Roll single or multiple dice, visualize sum distributions, and explore all possible outcomes with statistical analysis.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 2,
     image:'/images/probability3.jpg',
    href: "/probability/visual-tools/dice-roll"
  },
   {
    title: "Venn Diagrams Visualizers",
    description: "Explore probability event relationships with interactive Venn diagram visualizations. Understand intersections, unions, and complements through dynamic 2-set and 3-set visual examples.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 7,
     image:'/images/set_theory2.jpg',
    href: "/probability/visual-tools/venn-diagrams"
  },
   {
    title: "Conditional Probability Visualizers",
    description: "Explore probability event relationships with interactive Venn diagram visualizations. Understand intersections, unions, and complements through dynamic 2-set and 3-set visual examples.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 7,
     image:'/images/conditional-probability2.jpg',
    href: "/probability/visual-tools/conditional-probability"
  },
   {
    title: "Expected Value Visualizers",
    description: "Learn expected value through interactive visualizations. See how probability weights combine with outcomes to determine long-run averages.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 7,
     image:'/images/capital_e1.jpg',
    href: "/probability/visual-tools/expected-value"
  },
   {
    title: "Variance Visualizer",
    description: "Interactive tool for understanding variance through visual exploration. Drag data points to see real-time variance calculations, toggle between population and sample variance, and watch step-by-step breakdowns of how variance measures data spread.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 7,
     image:'/images/variance.jpg',
    href: "/probability/visual-tools/variance"
  },
   {
    title: "Probability Inequalities Visualizers",
    description: "Explore visually fundamental probability inequalities including Markov's and Chebyshev's inequalities with interactive calculators and visualizations. Understand how these powerful bounds provide estimates for tail probabilities and apply them to real-world scenarios.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 7,
     image:'/images/inequality.jpg',
    href: "/probability/visual-tools/inequalities"
  },
   {
    title: "Probability Function Visualizers",
    description: "Visualize probability functions with interactive visualizers for both discrete and continuous distributions. Adjust parameters in real-time to see how PMF and PDF curves change for Binomial, Poisson, Normal, Exponential, and other distributions.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 7,
     image:'/images/probability-function.jpg',
    href: "/probability/visual-tools/probability-function"
  },
   {
    title: "Cumulative Probability Function(CDF) Visualizers",
    description: "Understand cumulative distribution functions through interactive charts for discrete (Binomial, Poisson, Geometric) and continuous distributions (Normal, Exponential, Uniform). Adjust parameters to see how probability accumulates across different distributions with real-time CDF visualizations.",
    backgroundColor: "#4F46E5", // Indigo
    textColor: "#ffffff",
    ratio: 7,
     image:'/images/accumulate.jpg',
    href: "/probability/visual-tools/cdf"
  },
  //  {
  //   title: "Analytics Dashboard",
  //   description: "Comprehensive analytics dashboard with real-time data visualization and reporting tools.",
  //   backgroundColor: "#4F46E5", // Indigo
  //   textColor: "#ffffff",
  //   ratio: 2,
  //   href: "/analytics"
  // },
  //  {
  //   title: "Analytics Dashboard",
  //   description: "Comprehensive analytics dashboard with real-time data visualization and reporting tools.",
  //   backgroundColor: "#4F46E5", // Indigo
  //   textColor: "#ffffff",
  //   ratio: 2,
  //   href: "/analytics"
  // },

    ]


    const sectionsContent={

    obj1:{
      title:``,
      content:``,
      before:``,
      after:``,
  
  
    },
    obj2:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
  
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Probability Visual Tools | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools",
         name: "name"
      },
      cardsData,
        
       }
    }
   }

export default function ProbabilityVisualToolsPage({seoData,sectionsContent , 
  introContent, cardsData}) {




  const genericSections=[
    {
        id:'1',
        title:'section1',
        link:'',
        content:''
    },
    {
        id:'2',
        title:'section2',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
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
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>Probability Visual Tools</h1>
   <br/>
   <ModernCardsGroup items={cardsData}/>
   <br/>
   {/* <SectionTableOfContents sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
   <br/>
   <br/>
   {/* <Sections sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
