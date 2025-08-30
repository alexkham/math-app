import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../../math-app/pages/pages.css'
import GenericTable from '@/app/components/generic-table/GenericTable'
import LinksList from '@/app/components/page-components/links/LinksList'
import Head from 'next/head'


export async function getStaticProps(){

    const keyWords=['standard angles','common angles','special angles','reference angles',
        
        'trigonometry tables','trigonometric functions','trigonometry','trigonometric functions table',
    
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



    const trigoTableData = {
 tableTitle: "Main Trigonometric Functions",
 rows: [
   {
     angle_degrees: "0°",
     angle_radians: "0",
     sin: "0",
     cos: "1", 
     tan: "0",
     csc: "Undefined",
     sec: "1",
     cot: "Undefined"
   },
   {
     angle_degrees: "30°",
     angle_radians: "π/6",
     sin: "1/2",
     cos: "√3/2",
     tan: "√3/3",
     csc: "2",
     sec: "2√3/3", 
     cot: "√3"
   },
   {
     angle_degrees: "45°", 
     angle_radians: "π/4",
     sin: "√2/2",
     cos: "√2/2",
     tan: "1",
     csc: "√2",
     sec: "√2",
     cot: "1"
   },
   {
     angle_degrees: "60°",
     angle_radians: "π/3", 
     sin: "√3/2",
     cos: "1/2",
     tan: "√3",
     csc: "2√3/3",
     sec: "2",
     cot: "√3/3"
   },
   {
     angle_degrees: "90°",
     angle_radians: "π/2",
     sin: "1",
     cos: "0",
     tan: "Undefined",
     csc: "1", 
     sec: "Undefined",
     cot: "0"
   },
   {
     angle_degrees: "120°",
     angle_radians: "2π/3",
     sin: "√3/2",
     cos: "-1/2",
     tan: "-√3",
     csc: "2√3/3",
     sec: "-2",
     cot: "-√3/3"
   },
   {
     angle_degrees: "135°",
     angle_radians: "3π/4", 
     sin: "√2/2",
     cos: "-√2/2",
     tan: "-1",
     csc: "√2",
     sec: "-√2",
     cot: "-1"
   },
   {
     angle_degrees: "150°",
     angle_radians: "5π/6",
     sin: "1/2", 
     cos: "-√3/2",
     tan: "-√3/3",
     csc: "2",
     sec: "-2√3/3",
     cot: "-√3"
   },
   {
     angle_degrees: "180°",
     angle_radians: "π",
     sin: "0",
     cos: "-1",
     tan: "0",
     csc: "Undefined",
     sec: "-1",
     cot: "Undefined"
   },
   {
     angle_degrees: "210°",
     angle_radians: "7π/6",
     sin: "-1/2",
     cos: "-√3/2", 
     tan: "√3/3",
     csc: "-2",
     sec: "-2√3/3",
     cot: "√3"
   },
   {
     angle_degrees: "225°",
     angle_radians: "5π/4",
     sin: "-√2/2",
     cos: "-√2/2",
     tan: "1",
     csc: "-√2",
     sec: "-√2",
     cot: "1"
   },
   {
     angle_degrees: "240°", 
     angle_radians: "4π/3",
     sin: "-√3/2",
     cos: "-1/2",
     tan: "√3",
     csc: "-2√3/3",
     sec: "-2",
     cot: "√3/3"
   },
   {
     angle_degrees: "270°",
     angle_radians: "3π/2",
     sin: "-1",
     cos: "0",
     tan: "Undefined",
     csc: "-1",
     sec: "Undefined", 
     cot: "0"
   },
   {
     angle_degrees: "300°",
     angle_radians: "5π/3",
     sin: "-√3/2",
     cos: "1/2",
     tan: "-√3",
     csc: "-2√3/3",
     sec: "2",
     cot: "-√3/3"
   },
   {
     angle_degrees: "315°",
     angle_radians: "7π/4",
     sin: "-√2/2",
     cos: "√2/2", 
     tan: "-1",
     csc: "-√2",
     sec: "√2",
     cot: "-1"
   },
   {
     angle_degrees: "330°",
     angle_radians: "11π/6",
     sin: "-1/2",
     cos: "√3/2",
     tan: "-√3/3",
     csc: "-2",
     sec: "2√3/3",
     cot: "-√3"
   },
   {
     angle_degrees: "360°",
     angle_radians: "2π",
     sin: "0",
     cos: "1",
     tan: "0",
     csc: "Undefined",
     sec: "1", 
     cot: "Undefined"
   }
 ]
};


   return {
      props:{
         sectionsContent,
         introContent,
         trigoTableData,
         seoData: {
      title: "Special Angles Trigonometry Table - Standard Values | Learn Math Class",
      description: "Complete trigonometry table for special angles (0°, 30°, 45°, 60°, 90°) with exact values for sin, cos, tan, csc, sec, and cot functions.",
      keywords: keyWords.join(", "),
      url: "/tables/trigonometry/special-angles",
      name: "Special Angles Trigonometry Table"
    },
    keyWords,
        
       }
    }
   }
export default function PageTemplate({ seoData, sectionsContent, introContent, 
  trigoTableData, keyWords }) {

     const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Contact', href: '/contact' }
  ];

  const sidebarLinks = [
    { title: 'Dashboard', href: '/dashboard', icon: '📊' },
    { title: 'Projects', href: '/projects', icon: '📁' },
    { title: 'Settings', href: '/settings', icon: '⚙️' }
  ];


    
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
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Special Angles</h1>
   <br/>
    <div style={{width:'80%',margin:'auto'}}>
        <GenericTable tableData={trigoTableData}
        cellFontSize={'16px'}
        headerFontSize={'18px'}
        theme='lightBlue'
        />
        {/* <LinksList links={navLinks}
               layout="vertical"
               theme="blue"
               width="200px"
               
               /> */}
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
