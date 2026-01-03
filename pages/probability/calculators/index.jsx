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
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import SingleEventProbabilityCalculator from '@/app/components/calculators/probability/SingleEventCalculator'
import { useSearchParams } from 'next/navigation'
import TwoIndependentEventsCalculator from '@/app/components/calculators/probability/TwoIndependentEventsCalculator'

export async function getStaticProps(){

  const keyWords=['probability calculator','probability','probability formula',
    'compute probability calculator','calculate probability','calculating probability calculator']

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
        
       }
    }
   }

export default function ProbabilityCalculator({seoData,sectionsContent , introContent}) {


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
   <h1 className='title' style={{marginTop:'-60px',marginBottom:'-50px'}}>Probability Calculators</h1>
   <br/>
   <GenericMultiComponentFrame
    components={[
        
          { id: 1, name: 'Single Event Probability Calculator', key: 'probCalc', component: SingleEventProbabilityCalculator },
          { id: 2, name: 'Two Independent Events Probability Calculator', key: 'probCalc', component: TwoIndependentEventsCalculator },
           { id: 3, name: 'Discrete Distibutions Calculator',  href: '/probability/calculators/discrete-distributions'  },
           { id: 4, name: 'Continuous Distibutions Calculator',  href: '/probability/calculators/continuous-distributions'  },
           { id: 5, name: 'Joint Probability Calculator',  href: '/probability/calculators/joint-probability'  },
           { id: 10, name: 'Conditional Probability Calculator',  href: '/probability/calculators/conditional-probability'  },
           { id: 6, name: 'Two Events Probability Calculator',  href: '/probability/calculators/two-events'  },
           { id: 7, name: 'Three Events Probability Calculator',  href: '/probability/calculators/three-events'  },
           { id: 8, name: "Bayes' Theorem Calculator",  href: '/probability/calculators/bayes-calculator'  },
           { id: 9, name: "Expected Value Calculators",  href: '/probability/calculators/expected-value'  },
          

          //  { id: 4, name: 'Introduction', content: introContent2 },
          
          
        ]}
        initialActive={1}
        buttonMinWidth="160px"
        primaryColor="#007bff"
   
   />

   {/* <TwoIndependentEventsCalculator/> */}
   {/* <div style={{transform:'scale(0.9)'}}>
   <SingleEventProbabilityCalculator/>
   </div> */}
   <br/>
   {/* <SectionTableOfContents sections={genericSections}/> */}
   <br/>
   <br/>
   {/* <div>{JSON.stringify(initialTab)}</div> */}
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
   {/* <ScrollUpButton/> */}
   </>
  )
}
