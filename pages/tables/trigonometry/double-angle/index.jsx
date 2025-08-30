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



  
  const keyWords=['trigonometry','trigonometric identity','double angle identity',
    'double angle formula','cos double angle formula',
    'double angle','multiple angles']

const navigationGroups = [
  {
    title: "Other Trigonometric Tables",
    items: [
      { title: "Trigonometric Functions of Special Angles", link: "/tables/trigonometry/special-angles" },
      { title: "Inverse Trigonometric Functions", link: "/tables/trigonometry/inverse" },
      { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
      { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
    ]
  },

];

// const doubleAngleTableData = {
//  tableTitle: "Double Angle Identities of Main Trigonometric Functions",
//  rows: [
//    {
//      function: "sin(2θ)",
//      formula: "2\\sin\\theta\\cos\\theta",
//      description: "Product of sine and cosine doubled - fundamental for wave interference"
//    },
//    {
//      function: "cos(2θ)",
//      formula: "\\cos^2\\theta - \\sin^2\\theta",
//      description: "Difference of squares form. Also equals 2cos²θ - 1 or 1 - 2sin²θ - three equivalent expressions"
//    },
//    {
//      function: "tan(2θ)",
//      formula: "\\frac{2\\tan\\theta}{1 - \\tan^2\\theta}",
//      description: "Fraction form - undefined when tan²θ = 1 (at 45°, 135°, etc.)"
//    },
//    {
//      function: "csc(2θ)",
//      formula: "\\frac{\\sec\\theta\\csc\\theta}{2}",
//      description: "Reciprocal relationship - product of original secant and cosecant halved"
//    },
//    {
//      function: "sec(2θ)",
//      formula: "\\frac{\\sec^2\\theta}{2\\cos^2\\theta - 1}",
//      description: "Complex form involving both secant and cosine - used in advanced calculus"
//    },
//    {
//      function: "cot(2θ)",
//      formula: "\\frac{\\cot^2\\theta - 1}{2\\cot\\theta}",
//      description: "Quotient form - becomes undefined when cotθ = 0 (at 90°, 270°, etc.)"
//    }
//  ]
// };
   
const doubleAngleTableData = {
 tableTitle: "Double Angle Identities of Main Trigonometric Functions",
 rows: [
   {
     function: "sin(2θ)",
     formula: "2\\sin\\theta\\cos\\theta",
     description: "Product of sine and cosine doubled - fundamental for wave interference"
   },
   {
     function: "cos(2θ)",
     formula: "\\cos^2\\theta - \\sin^2\\theta",
     description: "Difference of squares form. Also equals 2cos²θ - 1 or 1 - 2sin²θ - three equivalent expressions"
   },
   {
     function: "tan(2θ)",
     formula: "\\displaystyle\\frac{2\\tan\\theta}{1 - \\tan^2\\theta}",
     description: "Fraction form - undefined when tan²θ = 1 (at 45°, 135°, etc.)"
   },
   {
     function: "csc(2θ)",
     formula: "\\displaystyle\\frac{\\sec\\theta\\csc\\theta}{2}",
     description: "Reciprocal relationship - product of original secant and cosecant halved"
   },
   {
     function: "sec(2θ)",
     formula: "\\displaystyle\\frac{\\sec^2\\theta}{2\\cos^2\\theta - 1}",
     description: "Complex form involving both secant and cosine - used in advanced calculus"
   },
   {
     function: "cot(2θ)",
     formula: "\\displaystyle\\frac{\\cot^2\\theta - 1}{2\\cot\\theta}",
     description: "Quotient form - becomes undefined when cotθ = 0 (at 90°, 270°, etc.)"
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
         doubleAngleTableData,
           seoData: {
      title: "Double Angle Identities - Trigonometric Formulas Table | Learn Math Class",
      description: "Complete table of double angle identities for sin, cos, tan, csc, sec, and cot. Learn trigonometric double angle formulas with explanations.",
      keywords: keyWords.join(", "),
      url: "/tables/trigonometry/double-angle",
      name: "Double Angle Identities"
    },
    keyWords,
    navigationGroups
        
       }
    }
   }

export default function PageTemplate({ seoData, sectionsContent, introContent,
     doubleAngleTableData, keyWords,navigationGroups }) {

    
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
   
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'-250px'}}>Double Angle Identities</h1>
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
        <GenericTable tableData={doubleAngleTableData}
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
