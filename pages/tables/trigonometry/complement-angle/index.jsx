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



  
  const keyWords=['trigonometry','trigonometric identity',
    'complement identities',
 'cofunction identities',
 'complementary angle formulas',
 'cofunction formulas',

 'complement angle identities',
 'cofunction relationships',
 'complementary angles trigonometry',
 'trigonometry complement formulas',
 'complement trig identities'
  ]

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
      { title: "Sum of Angles Formulas", link: "/tables/trigonometry/sum-angle" },
       { title: "Difference of Angles Formulas", link: "/tables/trigonometry/difference-angle" },
        { title: "Negative Angle Formulas (Even-Odd Identities)", link: "/tables/trigonometry/negative-angle" },
        { title: "Supplement Angle Formulas", link: "/tables/trigonometry/supplement-angle" },
    ],
   
   
  },
    {
        title:"Relevant tools",
        items:[
            {title:"Interactive Unit Circle",link:"/visual-tools/unit-circle"},
            {title:"Trigonometry Calculator",link:"/calculators/trigonometry-calculator"},
            {title:"Angle Converter",link:"/converters/degree-radians"},
        ]
    }

];

const complementIdentitiesTableData = {
  tableTitle: "Complement Identities (Cofunction Identities)",
  rows: [
    {
      function: "sin(90° - θ)",
      formula: "\\cos\\theta",
      radian_form: "sin(π/2 - θ) = cos θ",
      description: "Sine of complement equals cosine - fundamental cofunction relationship"
    },
    {
      function: "cos(90° - θ)",
      formula: "\\sin\\theta",
      radian_form: "cos(π/2 - θ) = sin θ",
      description: "Cosine of complement equals sine - shows function duality"
    },
    {
      function: "tan(90° - θ)",
      formula: "\\cot\\theta",
      radian_form: "tan(π/2 - θ) = cot θ",
      description: "Tangent of complement equals cotangent - reciprocal relationship"
    },
    {
      function: "csc(90° - θ)",
      formula: "\\sec\\theta",
      radian_form: "csc(π/2 - θ) = sec θ",
      description: "Cosecant of complement equals secant - follows from sine-cosine relationship"
    },
    {
      function: "sec(90° - θ)",
      formula: "\\csc\\theta",
      radian_form: "sec(π/2 - θ) = csc θ",
      description: "Secant of complement equals cosecant - follows from cosine-sine relationship"
    },
    {
      function: "cot(90° - θ)",
      formula: "\\tan\\theta",
      radian_form: "cot(π/2 - θ) = tan θ",
      description: "Cotangent of complement equals tangent - completes the cofunction pairs"
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
         complementIdentitiesTableData,
           seoData: {
      title: "Complement Angle Identities - Trigonometric Formulas Table | Learn Math Class",
      description: "Complete table of complement angle identities for sin, cos, tan, csc, sec, and cot. Learn trigonometric complement angle formulas with explanations.",
      keywords: keyWords.join(", "),
      url: "/tables/trigonometry/complement-angle",
      name: "Complement Angle Identities"
    },
    keyWords,
    navigationGroups
        
       }
    }
   }

export default function PageTemplate({ seoData, sectionsContent, introContent,
     complementIdentitiesTableData, keyWords,navigationGroups }) {

    
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
   
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'0px'}}>Complement Angle Identities</h1>
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
            <GenericTable tableData={complementIdentitiesTableData}
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
        <GenericTable tableData={tripleAngleTableData}
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
