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
import NormalDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/NormalDistributionCalculator'
import ContinuousUniformCalculator from '@/app/components/calculators/probability/distributions/continuous/UniformDistributionCalculator'
import ExponentialDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/ExponentialDistributionCalculator'
import { useSearchParams } from 'next/navigation'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

export async function getStaticProps(){

  const keyWords=['continuous distributions','continuous distributions probability','','','']

  
const navigationGroups = [
  {
    title: "Other Trigonometric Tables",
    items: [
      { title: "Trigonometric Functions of Special Angles", link: "/tables/trigonometry/special-angles" },
      { title: "Inverse Trigonometric Functions", link: "/tables/trigonometry/inverse" },
      { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
      { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
      
       { title: "Triple Angle Formulas", link: "/tables/trigonometry/triple-angle" },
        { title: "Sum of Angles Formulas", link: "/tables/trigonometry/sum-angle" },
        { title: "Difference of Angles Formulas", link: "/tables/trigonometry/difference-angle" },
         { title: "Negative Angle Formulas (Even-Odd Identities)", link: "/tables/trigonometry/negative-angle" },
      { title: "Complement Angle Formulas", link: "/tables/trigonometry/complement-angle" }, 
      { title: "Supplement Angle Formulas", link: "/tables/trigonometry/supplement-angle" },   
    ]
  },
   {
        title:"Relevant tools",
        items:[
            {title:"Interactive Unit Circle",link:"/visual-tools/unit-circle"},
            {title:"Trigonometry Calculator",link:"/calculators/trigonometry-calculator"},
            {title:"Angle Converter",link:"/converters/degree-radians"},
        ]
    },
     {
        title:"Related pages",
        items:[
            {title:"Trigonometry",link:"/trigonometry"},
            {title:"Trigonometric Identities",link:"/trigonometry/identities"},
            {title:"Math Symbols used in Trigonometry",link:"/math-symbols/trigonometry"},
        ]
    }
];


  const menuItems = [
    {
      title: "Probability Calculators",
      // icon: <Home />,
      link: "/probability/calculator"
    },
    {
        title: "Discrete Distributions Calculator",
        // icon: <Home />,
        link: "/probability/calculator/discrete-distributions"
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

export default function ContinuousDistributionsPage({seoData,sectionsContent , introContent,menuItems}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Continuous Distributions Calculator</h1>
   <br/>
   {/* <VerticalButtonGroup/> */}
     <VerticalButtonGroup 
      items={menuItems}
      width="250px" 
      theme='vivid'
            
    //   backgroundColor ='#245de1'
    //   color = 'white'
      isSticky={true}
      verticalOffset='200px'
      />
      <div style={{marginTop:'-230px'}}>
   <GenericMultiComponentFrame

     initialActive={initialTab}
           buttonMinWidth="160px"
           primaryColor="#007bff"
   
       components={[
              
                { id: 1, name: 'Continuous Uniform Distribution Calculator', key: 'uniform', component: ContinuousUniformCalculator,
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
                { id: 2, name: 'Exponential Distribution Calculator', key: 'exponential', component: ExponentialDistributionCalculator ,
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
                { id: 3, name: 'Normal Distribution Calculator', key: 'geometric', component:NormalDistributionCalculator ,
   
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
        
    ]}
   
   />
   </div>
   <br/>
   {/* <SectionTableOfContents sections={genericSections}/> */}
   <br/>
   <br/>
   {/* <NormalDistributionCalculator/>
   <ContinuousUniformCalculator/>
   <ExponentialDistributionCalculator/> */}
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
   <ScrollUpButton/>
   </>
  )
}
