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



  
  const keyWords=['trigonometry','trigonometric identity','triple angle identity',
    'triple angle formula','cos triple angle formula',
    'triple angle','multiple angles']

const navigationGroups = [
  {
    title: "Other Trigonometric Tables",
    items: [
      { title: "Trigonometric Functions of Special Angles", link: "/tables/trigonometry/special-angles" },
      { title: "Inverse Trigonometric Functions", link: "/tables/trigonometry/inverse" },
      { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
      { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
      { title: "Double Angle Formulas", link: "/tables/trigonometry/double-angle" },
    ]
  },

];
  
const tripleAngleTableData = {
 tableTitle: "Triple Angle Identities",
 rows: [
   {
     function: "sin(3θ)",
     formula: "3\\sin\\theta - 4\\sin^3\\theta",
     description: "Cubic polynomial in sine - derived from angle addition formulas"
   },
   {
     function: "cos(3θ)",
     formula: "4\\cos^3\\theta - 3\\cos\\theta",
     description: "Cubic polynomial in cosine - fundamental for Chebyshev polynomials"
   },
   {
     function: "tan(3θ)",
     formula: "\\displaystyle\\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}",
     description: "Rational function - undefined when 3tan²θ = 1, i.e., tanθ = ±√3/3"
   },
   {
     function: "csc(3θ)",
     formula: "\\displaystyle\\frac{\\csc\\theta}{3 - 4\\sin^2\\theta}",
     description: "Reciprocal form involving original cosecant - undefined when sin(3θ) = 0"
   },
   {
     function: "sec(3θ)",
     formula: "\\displaystyle\\frac{\\sec\\theta}{4\\cos^2\\theta - 3}",
     description: "Reciprocal form involving original secant - undefined when cos(3θ) = 0"
   },
   {
     function: "cot(3θ)",
     formula: "\\displaystyle\\frac{\\cot^3\\theta - 3\\cot\\theta}{3\\cot^2\\theta - 1}",
     description: "Rational function in cotangent - undefined when tan(3θ) = 0"
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
         tripleAngleTableData,
           seoData: {
      title: "Triple Angle Identities - Trigonometric Formulas Table | Learn Math Class",
      description: "Complete table of triple angle identities for sin, cos, tan, csc, sec, and cot. Learn trigonometric triple angle formulas with explanations.",
      keywords: keyWords.join(", "),
      url: "/tables/trigonometry/triple-angle",
      name: "Triple Angle Identities"
    },
    keyWords,
    navigationGroups
        
       }
    }
   }

export default function PageTemplate({ seoData, sectionsContent, introContent,
     tripleAngleTableData, keyWords,navigationGroups }) {

    
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
   
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'-280px'}}>Triple Angle Identities</h1>
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
        <GenericTable tableData={tripleAngleTableData}
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
