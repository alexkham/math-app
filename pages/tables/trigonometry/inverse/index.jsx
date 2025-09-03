import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../../math-app/pages/pages.css'
import Head from 'next/head'

import GenericTable from '@/app/components/generic-table/GenericTable'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


export async function getStaticProps(){


  const keyWords=['trigonpmetric functions','trigonometry','trigo',
    'inverse trigonometric function','calculating inverse trig functions',
    'cosine tangent sine','inverse trig','inverse of trig functions','trigonometric functions and inverses',
    'inverse trigonometry function','inverse cosine','inverse sine']


    const inverseTrigoTableData = {
 tableTitle: "Inverse Trigonometric Functions - Domain, Range, and Principal Values",
 rows: [
   {
     function: "arcsin(x)",
     notation: "sin⁻¹(x)",
     domain: "[-1, 1]",
     range: "[-π/2, π/2]",
     common_value: "arcsin(1/2) = π/6 = 30°"
   },
   {
     function: "arccos(x)",
     notation: "cos⁻¹(x)", 
     domain: "[-1, 1]",
     range: "[0, π]",
     common_value: "arccos(1/2) = π/3 = 60°"
   },
   {
     function: "arctan(x)",
     notation: "tan⁻¹(x)",
     domain: "(-∞, ∞)",
     range: "(-π/2, π/2)",
     common_value: "arctan(1) = π/4 = 45°"
   },
   {
     function: "arccsc(x)",
     notation: "csc⁻¹(x)",
     domain: "(-∞, -1] ∪ [1, ∞)",
     range: "[-π/2, 0) ∪ (0, π/2]",
     common_value: "arccsc(2) = π/6 = 30°"
   },
   {
     function: "arcsec(x)",
     notation: "sec⁻¹(x)",
     domain: "(-∞, -1] ∪ [1, ∞)",
     range: "[0, π/2) ∪ (π/2, π]",
     common_value: "arcsec(2) = π/3 = 60°"
   },
   {
     function: "arccot(x)",
     notation: "cot⁻¹(x)",
     domain: "(-∞, ∞)",
     range: "(0, π)",
     common_value: "arccot(1) = π/4 = 45°"
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

const navigationGroups = [
  {
    title: "Other Trigonometric Tables",
    items: [
      { title: "Trigonometric Functions of Special Angles", link: "/tables/trigonometry/special-angles" },
     
      { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
     
      { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
       { title: "Double Angle Formulas", link: "/tables/trigonometry/double-angle" },
       { title: "Triple Angle Formulas", link: "/tables/trigonometry/triple-angle" },
        { title: "Sum of Angles Formulas", link: "/tables/trigonometry/sum-angle" },
         { title: "Difference of Angles Formulas", link: "/tables/trigonometry/difference-angle" },
          { title: "Negative Angle Formulas (Even-Odd Identities)", link: "/tables/trigonometry/negative-angle" },
       { title: "Complement Angle Formulas", link: "/tables/trigonometry/complement-angle" },    
    ]
  },
  {
        title:"Relevant tools",
        items:[
            {title:"Interactive Unit Circle",link:"/visual-tools/unit-circle"},
            {title:"Trigonometry Calculator",link:"/calculators/trigonometry-calculator"},
            {title:"Angle Converter",link:"/converters/degree-radians"},
        ]
    }
]



   return {
      props:{
         sectionsContent,
         introContent,
         inverseTrigoTableData,
          seoData: {
      title: "Inverse Trigonometric Functions Table - Domain & Range | Learn Math Class",
      description: "Complete table of inverse trigonometric functions including arcsin, arccos, arctan, arcsec, arccsc, and arccot with domains, ranges, and common values.",
      keywords: keyWords.join(", "),
      url: "/tables/trigonometry/inverse",
      name: "Inverse Trigonometric Functions"
    },
    keyWords,
    navigationGroups,
        
       }
    }
   }

export default function InversePage({ seoData, sectionsContent, introContent, 
  inverseTrigoTableData, keyWords ,navigationGroups }) {

    
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
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'0px'}}>Inverse Trigonometric Functions</h1>
   <br/>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '15% 80%',
      gap: '20px',
      width: '100%'
   }}>
      {/* Left column - Sidebar */}
      <div>
         <VerticalButtonGroup 
            items={navigationGroups}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='60px'
         />
      </div>

      {/* Right column - Table */}
      <div>
         <div style={{width:'90%',margin:'auto'}}>
            <GenericTable tableData={inverseTrigoTableData}
               cellFontSize={'16px'}
               headerFontSize={'18px'}
               theme='lightBlue'
            />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          
            
         </div>
      </div>
   </div>
    {/* <VerticalButtonGroup 
      
      items={navigationGroups}
      width="250px"       
    //   backgroundColor ='#0070f3'
    //   color = 'white'
      isSticky={true}
      verticalOffset='220px'
      theme='lightBlue'
      />
   
    <div style={{width:'70%',margin:'auto'}}>
        <GenericTable tableData={inverseTrigoTableData}
        cellFontSize={'16px'}
        headerFontSize={'18px'}
        theme='lightBlue'
        />
        </div> */}
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
