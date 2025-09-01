import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericTable from '@/app/components/generic-table/GenericTable'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../../math-app/pages/pages.css'
import Head from 'next/head'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


export async function getStaticProps(){



  
  const keyWords=['trigonometry','trigonometric identity','sum of angles identity',
    'sum of angles formula','cos sum of angles formula',
    'sum of angles','multiple angles','sin sum of angles','cos sum of angles']

const navigationGroups = [
  {
    title: "Other Trigonometric Tables",
    items: [
      { title: "Trigonometric Functions of Special Angles", link: "/tables/trigonometry/special-angles" },
      { title: "Inverse Trigonometric Functions", link: "/tables/trigonometry/inverse" },
      { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
      { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
      { title: "Double Angle Formulas", link: "/tables/trigonometry/double-angle" },
      { title: "Triple Angle Formulas", link: "/tables/trigonometry/triple-angle" },
       { title: "Difference of Angles Formulas", link: "/tables/trigonometry/difference-angle" },
    ]
  },

];
  
const sumAngleTableData = {
  tableTitle: "Sum of Angles Identities",
  rows: [
    {
      function: "sin(α + β)",
      formula: "\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta",
      description: "Addition formula for sine - expands compound angles into basic functions"
    },
    {
      function: "cos(α + β)",
      formula: "\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta",
      description: "Addition formula for cosine - note the subtraction in the expansion"
    },
    {
      function: "tan(α + β)",
      formula: "\\displaystyle\\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}",
      description: "Addition formula for tangent - undefined when denominator equals zero"
    },
    {
      function: "csc(α + β)",
      formula: "\\displaystyle\\frac{\\csc\\alpha\\csc\\beta}{\\csc\\alpha\\cot\\beta + \\cot\\alpha\\csc\\beta}",
      description: "Reciprocal of sine sum - derived from basic addition formula"
    },
    {
      function: "sec(α + β)",
      formula: "\\displaystyle\\frac{\\sec\\alpha\\sec\\beta}{\\sec\\alpha\\cot\\beta - \\tan\\alpha\\sec\\beta}",
      description: "Reciprocal of cosine sum - complex form for advanced calculations"
    },
    {
      function: "cot(α + β)",
      formula: "\\displaystyle\\frac{\\cot\\alpha\\cot\\beta - 1}{\\cot\\beta + \\cot\\alpha}",
      description: "Addition formula for cotangent - derived from tangent sum formula"
    }
  ]
};

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
         sumAngleTableData,
           seoData: {
      title: "Sum of Angles Identities - Trigonometric Formulas Table | Learn Math Class",
      description: "Complete table of sum of angles identities for sin, cos, tan, csc, sec, and cot. Learn trigonometric formulas for sum of angles with explanations.",
      keywords: keyWords.join(", "),
      url: "/tables/trigonometry/sum-angle",
      name: "Sum of Angle Identities"
    },
    keyWords,
    navigationGroups
        
       }
    }
   }

export default function PageTemplate({ seoData, sectionsContent, introContent,
     sumAngleTableData, keyWords,navigationGroups }) {

    
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
   
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'-380px'}}>Sum of Angles Identities</h1>
   
    <VerticalButtonGroup 
      
      items={navigationGroups}
      width="250px"       
    //   backgroundColor ='#0070f3'
    //   color = 'white'
      isSticky={true}
      verticalOffset='220px'
      theme='lightBlue'
      />
   <br/>
      <div style={{width:'70%',margin:'auto'}}>
        <GenericTable tableData={sumAngleTableData}
        cellFontSize={'16px'}
        headerFontSize={'18px'}
        theme='lightBlue'
        />
        </div>

        
   <br/>
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
   <ScrollUpButton/>
   </>
  )
}
