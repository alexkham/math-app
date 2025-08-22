import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=['linear equations','equations','math equations','algebra equations',
    'solving equations','mathematical equations','linear equations examples',
    'solving equations with variables on both sides',]

    
  const sectionsContent={

    definition:{
      title:`What is Linear equation?`,
      content:``,
      before:`In algebra we define as a linear equation in one variable any mathematical expression that can be reduced to the form

\t\t\t\t\t\t\t\t$ax + b = 0$

where $a \\neq 0$.
While this canonical form is often taken as the standard, it is important to understand that a linear equation does not always appear this way at first glance. It might involve parentheses, fractions, terms spread across both sides of the equals sign, or even look quite unlike a typical 
$ax + b = 0$ equation — and yet still be linear.

Being able to **recognize different forms** of linear equations and knowing how to **transform them into simpler or more familiar ones** is a fundamental skill in solving them. This process relies on a small set of **elementary operations** — things like adding or subtracting the same quantity from both sides, multiplying or dividing by nonzero numbers, or simplifying expressions. These operations don’t change the solution of the equation, but they let us manipulate its form freely, making it easier to solve. Understanding both the variety of forms and how to move between them is essential groundwork before tackling the solution itself.
`,
      after:``,
  
  
    },
    forms:{
      title:`Different forms of linear equations`,
      content:``,
      before:``,
      after:``,
  
    },
  
    operations:{
  
      title:`Elementary Operations`,
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
         seoData: {
      title: "Linear Equations - Complete Guide & Examples | Learn Math Class",
      description: "Master linear equations with comprehensive examples, solving methods, and step-by-step explanations. Learn algebra equations and mathematical problem-solving techniques.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/linear",
      name: "Linear Equations"
    },
        sectionsContent,
        introContent,
        keyWords,

        
      }
    }
  }

export default function LinearEquationsPage({ 
  seoData,
  sectionsContent,
  introContent,
  keyWords
}) {

    
  const linearEquationsSections=[
    {
        id:'definition',
        title:sectionsContent.definition.title,
        link:'',
        content:[
          sectionsContent.definition.before,
        ]
    },
    {
        id:'forms',
        title:sectionsContent.forms.title,
        link:'',
        content:''
    },
    {
        id:'operations',
        title:sectionsContent.operations.title,
        link:'',
        content:''
    },
     // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // }

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
                 topOffset='55px' 
                 sidebarWidth='45px'
                 panelWidth='200px'
                 iconColor='white'
                 panelBackgroundColor='#f2f2f2'
               /> 
     <Breadcrumb/>
     <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Linear Equations</h1>
     <br/>
     <SectionTableOfContents sections={linearEquationsSections}/>
     <br/>
     <br/>
     <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
     <br/>
     <br/>
     <br/>
     <Sections sections={linearEquationsSections}/>
     <br/>
     <ScrollUpButton/>
     
     </>
  )
}
