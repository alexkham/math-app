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
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import DiscreteUniformCalculator from '@/app/components/calculators/probability/distributions/UniformDistributionCalculator'
import BinomialCalculator from '@/app/components/calculators/probability/distributions/BinomialDistributionCalculator'
import GeometricDistributionCalculator from '@/app/components/calculators/probability/distributions/GeometricDistributionCalculator'
import DiscreteDistributionsCalculator from '@/app/components/calculators/probability/discrete-distributions/DiscreteDistributionsCalculator'
import NegativeBinomialCalculator from '@/app/components/calculators/probability/distributions/NegativeBinomialCalculator'
import HypergeometricCalculator from '@/app/components/calculators/probability/distributions/HypergeometricDistributionCalculator'
import PoissonCalculator from '@/app/components/calculators/probability/distributions/PoissonDistributionCalculator'
import { useSearchParams } from 'next/navigation'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

export async function getStaticProps(){

  const keyWords=['binomial distribution','geometric distribution','poisson distribution',
    'discrete probability distribution','discrete uniform distribution','hypergeometric distribution',
    'negative binomial distribution','probability distribution discrete']

   
   const menuItems = [
    {
      title: "Probability Calculators",
      // icon: <Home />,
      link: "/probability/calculator"
    },
    {
        title: "Continuous Distributions Calculator",
        // icon: <Home />,
        link: "/probability/calculator/continuous-distributions"
      },
       {
        title: "Statistics Calculator",
        // icon: <Home />,
        link: "/calculators/statistics-calculator"
      },
    
  ];
   
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
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/url",
         name: "name"
      },
      menuItems,
        
       }
    }
   }

export default function DistributionsCalculatorPage({seoData,sectionsContent , 
  introContent,menuItems}) {

      const searchParams = useSearchParams()
           
          const tab=searchParams.get('tab')
         const initialTab = tab ? parseInt(tab) : 1

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
   <GenericNavbar/>
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'0px'}}>Discrete Distributions Calculator</h1>
   <br/>
     <VerticalButtonGroup 
      items={menuItems}
      width="250px" 
      theme='vivid'
            
    //   backgroundColor ='#245de1'
    //   color = 'white'
      isSticky={true}
      verticalOffset='200px'
      />
      <div style={{marginTop:'-190px'}}>
   <GenericMultiComponentFrame
    components={[
           
             { id: 1, name: 'Discrete Uniform Distribution Calculator', key: 'uniform', component: DiscreteUniformCalculator,
      //          props: {
      //   links: {
      //     n: 'uniform-n',
      //     probability: 'uniform-probability',
      //     mean: 'uniform-mean',
      //     variance: 'uniform-variance',
      //     stdDev: 'uniform-stddev'
      //   }
      // }
              },
             { id: 2, name: 'Binomial Distribution Calculator', key: 'binomial', component: BinomialCalculator ,
      //         props: {
      //   links: {
      //     q: 'binomial-q',
      //     mean: 'binomial-mean',
      //     variance: 'binomial-variance',
      //     stdDev: 'binomial-stddev',
      //     pmf: 'binomial-pmf'
      //   }
      // }
             },
             { id: 3, name: 'Geometric Distribution Calculator', key: 'geometric', component:GeometricDistributionCalculator ,

//               props: {
//   links: {
//     q: 'geometric-q',
//     mean: 'geometric-mean',
//     variance: 'geometric-variance',
//     stdDev: 'geometric-stddev',
//     pmf: 'geometric-pmf'
//   }
// },
 },
     
    { id: 4, name: 'Negative Binomial Distribution Calculator', key: 'negative-binomial', component:NegativeBinomialCalculator ,

//               props: {
//   links: {
//     q: 'geometric-q',
//     mean: 'geometric-mean',
//     variance: 'geometric-variance',
//     stdDev: 'geometric-stddev',
//     pmf: 'geometric-pmf'
//   }
// },
 },
    { id: 5, name: 'Hypergeometric Distribution Calculator', key: 'hypergeometric', component:HypergeometricCalculator ,

//               props: {
//   links: {
//     q: 'geometric-q',
//     mean: 'geometric-mean',
//     variance: 'geometric-variance',
//     stdDev: 'geometric-stddev',
//     pmf: 'geometric-pmf'
//   }
// },
 },
    { id: 6, name: 'Poisson Distribution Calculator', key: 'poisson', component:PoissonCalculator ,

//               props: {
//   links: {
//     q: 'geometric-q',
//     mean: 'geometric-mean',
//     variance: 'geometric-variance',
//     stdDev: 'geometric-stddev',
//     pmf: 'geometric-pmf'
//   }
// },
 },
 
 //  { id: 2, name: 'Two Independent Events Probability Calculator', key: 'probCalc', component: TwoIndependentEventsCalculator },
            //   { id: 3, name: 'Distibutions Calculator',  href: '/probability/calculator/distributions'  },
             
           ]}
           initialActive={initialTab}
           buttonMinWidth="160px"
           primaryColor="#007bff"
   />
   </div>
   <br/>
   {/* <PoissonCalculator/> */}
   {/* <HypergeometricCalculator/> */}
   {/* <NegativeBinomialCalculator/> */}
   {/* <GeometricDistributionCalculator/> */}
   {/* <BinomialCalculator/> */}
   {/* <DiscreteUniformCalculator/> */}
   {/* <SectionTableOfContents sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        /> */}
   <br/>
   <br/>
   {/* <Sections sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
 {/* <DiscreteDistributionsCalculator/> */}
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   {/* <div id='uniform-stddev'>uniform-stddev</div> */}
   <br/>
   <br/>
   <br/>
  
   <br/>
   <ScrollUpButton/>
   </>
  )
}
