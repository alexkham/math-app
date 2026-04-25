import dynamic from 'next/dynamic'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../../pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

// Dynamically import the client component with no SSR
const LogarithmTable = dynamic(
  () => import('@/app/components/logarithm-table/LogarithmTable'),
  { ssr: false }
)


 export async function getStaticProps(){

  const keyWords=[
    'logarithm table','logarithm','log calculator','logarithm calculator','logarithmic calculator',
    'calculator of log','log log calculator'
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



   return {
      props:{
         sectionsContent,
           seoData: {
      title: "Logarithm Table & Calculator - Log Values | Learn Math Class",
      description: "Interactive logarithm table with calculator. Find log values, natural logarithms, and common logarithms with step-by-step calculations.",
      keywords: keyWords.join(", "),
      url: "/tables/arithmetics/logarithm",
      name: "Logarithm Table"
    },
    keyWords
        
       }
    }
   }
  



export default function LogarithmTablePage({sectionsContent,seoData,keyWords}) {
  return (
    <div className='tables-main'>
      <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
      <br />
      <br />
      <br />
     
        <OperaSidebar 
             side='right'
             topOffset='55px' 
             sidebarWidth='45px'
             panelWidth='200px'
             iconColor='white'
             panelBackgroundColor='#f2f2f2'
           /> 
     <Breadcrumb />
      <div style={{position:'absolute', top:'100px', width:'95%', left:'0', right:'0'}}>
      
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logarithm Table</h1>
        <LogarithmTable />
      </div>
      {/* <ScrollUpButton /> */}
    </div>
  )
}