// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // import Sections from '@/app/components/page-components/section/Sections'
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // import Head from 'next/head'
// // // import '@/pages/pages.css'
// // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// // // export async function getStaticProps(){

// // //   const keyWords=['','','','','']

// // //   // •

// // // //   \u2022 First item
// // // // \u2022 Second item

  
// // // // <hr style="border-width:1px;"></hr>

// // // // <hr style="color:blue;" />

// // // // <hr style="border-color:#3498db; border-width:1px;" />



// // // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // // // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
// // //         //     {processContent(sectionsContent.normal.notation)}
// // //         // </div>,


// // // //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// // // //     {processContent(sectionsContent.normal.parameters)}
// // // // </div>,
        
// // // //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// // // //                   {processContent(sectionsContent.obj4.content)}
// // // //                   </div>,


// // // //  <div key={'dist'} style={{
// // // //                     textAlign: 'center',
// // // //                     transform: 'scale(0.98)',
// // // //                     transformOrigin: 'center',
// // // //                     marginTop:'50px',
// // // //                     marginLeft:'-150px'
// // // //                   }} dangerouslySetInnerHTML={{ 
// // // //                     __html:   sectionContent.distributions.svg,
// // // //                   }} />

// // //     const sectionsContent={

// // //     obj0:{
// // //       title:`Key Terms`,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
  
// // //     },
// // //     obj1:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
  
// // //     },
// // //     obj2:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
  
// // //     obj3:{
  
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj4:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj5:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj6:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj7:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj8:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj9:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj10:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj11:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj12:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj13:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
// // //       link:'',
  
// // //     },
// // //     obj14:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
// // //       link:'',
  
// // //     },


// // //     obj15:{
  
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     }
  
// // //   }


// // //   const introContent = {
// // //   id: "intro",
// // //   title: "",
// // //   content: ``
// // // }




// // //    return {
// // //       props:{
// // //          sectionsContent,
// // //          introContent,
// // //           seoData: {
// // //         title: "Title | Learn Math Class",
// // //         description: "Metadescription",
// // //         keywords: keyWords.join(", "),
// // //         url: "/url",
// // //          name: "name"
// // //       },
        
// // //        }
// // //     }
// // //    }

// // // export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
// // //   const genericSections=[
// // //     {
// // //         id:'0',
// // //         title:sectionsContent.obj0.title,
// // //         link:sectionsContent.obj0.link,
// // //         content:[
// // //           sectionsContent.obj0.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'1',
// // //         title:sectionsContent.obj1.title,
// // //         link:sectionsContent.obj1.link,
// // //         content:[
// // //           sectionsContent.obj1.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'2',
// // //         title:sectionsContent.obj2.title,
// // //         link:sectionsContent.obj2.link,
// // //         content:[
// // //           sectionsContent.obj2.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'3',
// // //         title:sectionsContent.obj3.title,
// // //         link:sectionsContent.obj3.link,
// // //         content:[
// // //           sectionsContent.obj3.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'4',
// // //         title:sectionsContent.obj4.title,
// // //         link:sectionsContent.obj4.link,
// // //         content:[
// // //           sectionsContent.obj4.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'5',
// // //         title:sectionsContent.obj5.title,
// // //         link:sectionsContent.obj5.link,
// // //         content:[
// // //           sectionsContent.obj5.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'6',
// // //         title:sectionsContent.obj6.title,
// // //         link:sectionsContent.obj6.link,
// // //         content:[
// // //           sectionsContent.obj6.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'7',
// // //         title:sectionsContent.obj7.title,
// // //         link:sectionsContent.obj7.link,
// // //         content:[
// // //           sectionsContent.obj7.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'8',
// // //         title:sectionsContent.obj8.title,
// // //         link:sectionsContent.obj8.link,
// // //         content:[
// // //           sectionsContent.obj8.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'9',
// // //         title:sectionsContent.obj9.title,
// // //         link:sectionsContent.obj9.link,
// // //         content:[
// // //           sectionsContent.obj9.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'10',
// // //         title:sectionsContent.obj10.title,
// // //         link:sectionsContent.obj10.link,
// // //         content:[
// // //           sectionsContent.obj10.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'11',
// // //         title:sectionsContent.obj11.title,
// // //         link:sectionsContent.obj11.link,
// // //         content:[
// // //           sectionsContent.obj11.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'12',
// // //         title:sectionsContent.obj12.title,
// // //         link:sectionsContent.obj12.link,
// // //         content:[
// // //           sectionsContent.obj12.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'13',
// // //         title:sectionsContent.obj13.title,
// // //         link:sectionsContent.obj13.link,
// // //         content:[
// // //           sectionsContent.obj13.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'14',
// // //         title:sectionsContent.obj14.title,
// // //         link:sectionsContent.obj14.link,
// // //         content:[
// // //           sectionsContent.obj14.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'15',
// // //         title:sectionsContent.obj15.title,
// // //         link:sectionsContent.obj15.link,
// // //         content:[
// // //           sectionsContent.obj15.content,
// // //         ]
// // //     },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
    
// // // ]

// // //   return (
// // //    <>
// // //    <Head>
// // //   <title>{seoData.title}</title>
// // //   <meta name="description" content={seoData.description} />
// // //   <meta name="keywords" content={seoData.keywords} />
// // //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// // //   <meta property="og:title" content={seoData.title} />
// // //   <meta property="og:description" content={seoData.description} />
// // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // //   <meta property="og:type" content="article" />
// // //   <meta property="og:site_name" content="Learn Math Class" />
  
// // //   <meta name="twitter:card" content="summary" />
// // //   <meta name="twitter:title" content={seoData.title} />
// // //   <meta name="twitter:description" content={seoData.description} />
  
// // //   <meta name="robots" content="index, follow" />
  
// // //   <script 
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{ 
// // //       __html: JSON.stringify({
// // //         "@context": "https://schema.org",
// // //         "@type": "WebPage",
// // //         "name": seoData.name,
// // //         "description": seoData.description,
// // //         "keywords": seoData.keywords,
// // //         "url": `https://www.learnmathclass.com${seoData.url}`,
// // //         "dateModified": new Date().toISOString(),
// // //         "inLanguage": "en-US",
// // //         "mainEntity": {
// // //           "@type": "Article",
// // //           "name": seoData.name,
// // //           "dateModified": new Date().toISOString(),
// // //           "author": {
// // //             "@type": "Organization",
// // //             "name": "Learn Math Class"
// // //           }
// // //         }
// // //       })
// // //     }}
// // //   />
// // // </Head>
// // //    {/* <GenericNavbar/> */}
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <OperaSidebar 
// // //            side='right'
// // //            // topOffset='65px' 
// // //            sidebarWidth='45px'
// // //            panelWidth='200px'
// // //            iconColor='white'
// // //            panelBackgroundColor='#f2f2f2'
// // //          /> 
// // //    <Breadcrumb/>
// // //    <br/>
// // //    <br/>
// // //    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Page Title</h1>
// // //    <br/>
// // //    <br/>
// // //    <SectionTableOfContents sections={genericSections}
// // //     showSecondaryNav={true}
// // //          secondaryNavMode="siblings"  // or "children"
// // //          secondaryNavTitle="More in this Section"
   
// // //    />
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <IntroSection 
// // //           id={introContent.id}
// // //           title={introContent.title}
// // //           content={introContent.content}
// // //            backgroundColor='#f9fafb'
// // //           //  "#f2f2f2"
// // //           textColor="#06357a"
// // //         />
// // //    <br/>
// // //     <KeyTermsCard
// // //      id="0"
// // //      title={sectionsContent.obj0.title}
// // //      content={sectionsContent.obj0.content}
// // //      after={sectionsContent.obj0.after}
// // //      variant="light"
// // //    />
// // //    <br/>
// // //    <Sections sections={genericSections.slice(1)}/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    {/* <ScrollUpButton/> */}
// // //    </>
// // //   )
// // // }




// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import Head from 'next/head'
// // import Link from 'next/link'
// // import { processContent } from '../../../../app/utils/contentProcessor'
// // import '@/pages/pages.css'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// // export async function getStaticProps(){

// //   const keyWords=[
// //     'equation solvers',
// //     'algebra equation calculator',
// //     'linear equation solver',
// //     'quadratic equation solver',
// //     'polynomial equation solver',
// //     'rational equation solver',
// //     'radical equation solver',
// //     'exponential equation solver',
// //     'logarithmic equation solver',
// //     'absolute value equation solver',
// //     'literal equation solver',
// //     'step by step equation solver'
// //   ]

// //   // •

// // //   \u2022 First item
// // // \u2022 Second item

  
// // // <hr style="border-width:1px;"></hr>

// // // <hr style="color:blue;" />

// // // <hr style="border-color:#3498db; border-width:1px;" />



// // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
// //         //     {processContent(sectionsContent.normal.notation)}
// //         // </div>,


// // //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// // //     {processContent(sectionsContent.normal.parameters)}
// // // </div>,
        
// // //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// // //                   {processContent(sectionsContent.obj4.content)}
// // //                   </div>,


// // //  <div key={'dist'} style={{
// // //                     textAlign: 'center',
// // //                     transform: 'scale(0.98)',
// // //                     transformOrigin: 'center',
// // //                     marginTop:'50px',
// // //                     marginLeft:'-150px'
// // //                   }} dangerouslySetInnerHTML={{ 
// // //                     __html:   sectionContent.distributions.svg,
// // //                   }} />

// //     const sectionsContent={

// //     obj0:{
// //       title:`Key Terms`,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj1:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj2:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
  
// //     obj3:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj4:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj5:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj6:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj7:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj8:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj9:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }


// //   const introContent = {
// //   id: "intro",
// //   title: "",
// //   content: ``
// // }




// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Algebra Equation Solvers | Learn Math Class",
// //         description: "Step-by-step equation solvers for the standard algebra families: linear, quadratic, polynomial, rational, radical, exponential, logarithmic, absolute value, and literal equations. Each solver shows full reasoning and flags edge cases.",
// //         keywords: keyWords.join(", "),
// //         url: "/algebra/calculators/equations",
// //          name: "Algebra Equation Solvers"
// //       },
        
// //        }
// //     }
// //    }

// // export default function AlgebraEquationsLanding({seoData,sectionsContent , introContent}) {

    
// //   const genericSections=[
// //     {
// //         id:'0',
// //         title:sectionsContent.obj0.title,
// //         link:sectionsContent.obj0.link,
// //         content:[
// //           sectionsContent.obj0.content,
// //         ]
// //     },
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //         ]
// //     },
// //     {
// //         id:'13',
// //         title:sectionsContent.obj13.title,
// //         link:sectionsContent.obj13.link,
// //         content:[
// //           sectionsContent.obj13.content,
// //         ]
// //     },
// //     {
// //         id:'14',
// //         title:sectionsContent.obj14.title,
// //         link:sectionsContent.obj14.link,
// //         content:[
// //           sectionsContent.obj14.content,
// //         ]
// //     },
// //     {
// //         id:'15',
// //         title:sectionsContent.obj15.title,
// //         link:sectionsContent.obj15.link,
// //         content:[
// //           sectionsContent.obj15.content,
// //         ]
// //     },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
    
// // ]

// //   const cards = [
// //     {
// //       label: 'Linear',
// //       title: 'Linear Equation Solver',
// //       formula: `$$ax + b = cx + d$$`,
// //       blurb: `A **linear equation** is one where the variable $x$ appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $x$ in a denominator. The solver expands brackets, distributes through factored expressions like $2(x + 3)$, and combines like terms on each side. It then moves all $x$-terms to the left and all constants to the right, and finally divides by the coefficient of $x$ to isolate it. Equations that simplify to a true statement like $0 = 0$ are flagged as **identities** (every $x$ is a solution); equations that simplify to a false statement like $5 = 7$ are flagged as **contradictions** (no solution). Final answers appear as exact reduced fractions whenever the division does not produce an integer, never as rounded decimals.`,
// //       href: '/algebra/calculators/equations/linear'
// //     },
// //     {
// //       label: 'Quadratic',
// //       title: 'Quadratic Equation Solver',
// //       formula: `$$ax^2 + bx + c = 0$$`,
// //       blurb: `A **quadratic equation** is one where the highest power of the variable is $2$. The solver rewrites the equation in standard form, then computes the **discriminant** $\\Delta = b^2 - 4ac$ and uses its sign to route the solution. A positive $\\Delta$ produces two distinct real roots via the quadratic formula $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$, with factoring shown alongside whenever $\\Delta$ is a perfect square. A zero $\\Delta$ produces a single repeated root and the corresponding perfect-square trinomial factorization. A negative $\\Delta$ means no real solutions exist, in which case the parabola is graphed showing the curve sitting entirely above or below the $x$-axis. Every solved equation also reports the parabola's vertex $(h, k)$ and is accompanied by a full graph with axis-crossings, vertex, and equation label marked.`,
// //       href: '/algebra/calculators/equations/quadratic'
// //     },
// //     {
// //       label: 'Polynomial',
// //       title: 'Polynomial Equation Solver',
// //       formula: `$$a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 = 0$$`,
// //       blurb: `A **polynomial equation** is the general form $a_n x^n + \\dots + a_1 x + a_0 = 0$, where $n$ is any positive integer — linear and quadratic equations are the special cases $n = 1$ and $n = 2$. This solver handles degrees up to $4$. Linear and quadratic cases reuse their dedicated logic. For degrees $3$ and $4$, the solver applies the **rational root theorem** to enumerate every candidate $\\dfrac{p}{q}$ (where $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$), tests each by substitution, and uses **synthetic division** to factor each successful root out — leaving a polynomial of one degree less to recurse on. When no rational root exists, a Newton's-method fallback locates real irrational roots numerically. Special cases — equations that factor out a power of $x$, identities, contradictions — are recognized and reported separately.`,
// //       href: '/algebra/calculators/equations/polynomial'
// //     },
// //     {
// //       label: 'Rational',
// //       title: 'Rational Equation Solver',
// //       formula: `$$\\dfrac{P(x)}{Q(x)} + \\dfrac{R(x)}{S(x)} = \\dots$$`,
// //       blurb: `A **rational equation** is one where the variable appears in a denominator — fractions whose tops or bottoms are polynomials in $x$, such as $\\dfrac{x+1}{x-2} = 3$. The solver first identifies every value of $x$ that makes any denominator zero; these are the **restricted values** that no solution may equal. It then computes the **least common denominator** across every fraction in the equation, multiplies both sides through by the LCD to clear all fractions, and solves the resulting polynomial equation (degrees $1$–$4$). Every candidate solution is then checked against the restricted set: any that would make a denominator zero is reported as **extraneous** and excluded from the final answer. Identities, contradictions, and the case where every candidate turns out to be extraneous are each labeled as their own step. Fractions are rendered in proper stacked form, not inline, so the structure stays readable while building.`,
// //       href: '/algebra/calculators/equations/rational'
// //     },
// //     {
// //       label: 'Radical',
// //       title: 'Radical Equation Solver',
// //       formula: `$$\\sqrt[n]{P(x)} + \\dots = \\dots$$`,
// //       blurb: `A **radical equation** is one containing roots — square roots, cube roots, or higher-index roots — with the variable underneath, such as $\\sqrt{x + 3} = 5$ or $\\sqrt[3]{2x - 1} = 4$. The solver isolates the radical term on one side, then raises both sides to the appropriate power ($2$ for $\\sqrt{\\,}$, $3$ for $\\sqrt[3]{\\,}$, $n$ for $\\sqrt[n]{\\,}$) to eliminate it. The resulting linear or quadratic equation is solved with the corresponding routine. Because raising both sides to an even power can introduce false solutions, every candidate is substituted back into the original equation and verified; any that fail are reported as **extraneous** and discarded. Indices $2$, $3$, and arbitrary $n$ are all supported, including equations where the radical appears with a coefficient or inside a more complex expression.`,
// //       href: '/algebra/calculators/equations/radical'
// //     },
// //     {
// //       label: 'Exponential',
// //       title: 'Exponential Equation Solver',
// //       formula: `$$a \\cdot b^{f(x)} + c = d$$`,
// //       blurb: `An **exponential equation** is one where the variable appears in an *exponent* rather than as a base — the unknown is the power something is raised to, such as $2^x = 32$ or $5 \\cdot 3^{x+1} = 45$. The solver isolates the exponential term first by performing whatever additions, subtractions, and divisions are needed to leave a single $b^{(\\dots)}$ on one side. It then attempts **base-matching**: if the right-hand side can be rewritten as a power of the same base $b$ (recognizing $8 = 2^3$ when working with $2^x$), the exponents are set equal directly, yielding an exact integer or rational solution. When base-matching is not possible, the solver applies the natural logarithm to both sides, uses the power rule $\\ln(b^x) = x \\ln(b)$ to bring the exponent down, and reduces the problem to a linear equation in $x$.`,
// //       href: '/algebra/calculators/equations/exponential'
// //     },
// //     {
// //       label: 'Logarithmic',
// //       title: 'Logarithmic Equation Solver',
// //       formula: `$$\\log_b(P(x)) = c$$`,
// //       blurb: `A **logarithmic equation** is one containing logarithms — the inverse of exponentials — with the variable inside the log argument, such as $\\log_2(x + 1) = 5$ or $\\ln(3x) = 2$. Two cases are recognized. When both sides are logs of the same base, $\\log_b(A) = \\log_b(B)$, the **equal-logarithms property** applies: the arguments must be equal, so the equation reduces directly to $A = B$ and is solved as a standard algebraic equation. When only one side is a log and the other is a number or expression, the solver isolates the log first, then converts to exponential form using the inverse relationship $\\log_b(A) = c \\iff A = b^c$, and solves the resulting equation. Domain restrictions on the original log arguments are kept in mind throughout — logarithms are only defined for positive inputs.`,
// //       href: '/algebra/calculators/equations/logarithmic'
// //     },
// //     {
// //       label: 'Absolute Value',
// //       title: 'Absolute Value Equation Solver',
// //       formula: `$$|ax + b| = c$$`,
// //       blurb: `An **absolute value equation** is one containing the $|\\cdot|$ bars around an expression. The absolute value of a number is its distance from zero on the number line, so $|{-5}| = 5$ and $|5| = 5$ — the bars strip away the sign. The solver isolates the absolute value term first, then handles the special cases up front: if the right side equals $0$ there is one solution where the inside equals $0$; if the right side is negative there is no solution at all (since $|\\cdot| \\geq 0$ always). For the general case $|A| = c$ with $c > 0$, the equation splits into two sub-equations — $A = c$ (interior positive) and $A = -c$ (interior negative) — each solved independently. The variant $|A| = |B|$ where both sides are absolute values is also supported, with $A = B$ and $A = -B$ branches.`,
// //       href: '/algebra/calculators/equations/absolute-value'
// //     },
// //     {
// //       label: 'Literal',
// //       title: 'Literal Equation Solver',
// //       formula: `$$F(a,\\ b,\\ c,\\ \\dots) = 0$$`,
// //       blurb: `A **literal equation** is a formula with several letters in it where you solve for *one* of the letters in terms of the others — like rearranging $A = \\pi r^2$ to get $r = \\sqrt{A / \\pi}$, or solving $F = ma$ for $a = F/m$. These are the equations that appear in physics, geometry, and finance, where multiple quantities relate to each other by a fixed formula. The solver auto-detects every variable in the expression and presents them as buttons, letting you pick which one to solve for. The equation is then decomposed symbolically into the form $(\\text{coefficient}) \\cdot (\\text{target}) + (\\text{constant})$, where the coefficient and constant are themselves symbolic expressions in the remaining letters. The two sides are manipulated to isolate the target, returning a closed-form symbolic answer rather than a number.`,
// //       href: '/algebra/calculators/equations/literal'
// //     }
// //   ]

// //   const cardStyles = {
// //     container: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
// //       gap: '24px',
// //       margin: '40px auto',
// //       maxWidth: '1240px',
// //       padding: '0 20px',
// //     },
// //     card: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       border: '1px solid #d8e1ec',
// //       borderRadius: '10px',
// //       padding: '26px 24px',
// //       backgroundColor: '#ffffff',
// //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //     },
// //     label: {
// //       fontSize: '12px',
// //       letterSpacing: '0.8px',
// //       textTransform: 'uppercase',
// //       color: '#6b7a8f',
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       fontWeight: 600,
// //       marginBottom: '6px',
// //     },
// //     title: {
// //       fontSize: '20px',
// //       fontWeight: 600,
// //       color: '#143a66',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //       marginBottom: '14px',
// //       lineHeight: 1.25,
// //     },
// //     formulaBlock: {
// //       background: 'linear-gradient(to right, #f1f7fd 0%, #e8f1fa 100%)',
// //       border: '1px solid #c8d9ec',
// //       borderLeft: '3px solid #2c5d99',
// //       borderRadius: '6px',
// //       padding: '18px 20px',
// //       margin: '0 0 18px 0',
// //       textAlign: 'center',
// //       fontSize: '20px',
// //       color: '#143a66',
// //       overflowX: 'auto',
// //     },
// //     blurb: {
// //       fontSize: '15px',
// //       color: '#3a4a5e',
// //       lineHeight: 1.6,
// //       marginBottom: '20px',
// //       flex: '1 1 auto',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //     },
// //     primaryAction: {
// //       display: 'inline-block',
// //       padding: '11px 18px',
// //       background: '#2c5d99',
// //       color: '#ffffff',
// //       borderRadius: '6px',
// //       textDecoration: 'none',
// //       fontSize: '14px',
// //       fontWeight: 600,
// //       textAlign: 'center',
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       letterSpacing: '0.3px',
// //       marginTop: 'auto',
// //     },
// //   }

// //   return (
// //    <>
// //    <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify({
// //         "@context": "https://schema.org",
// //         "@type": "WebPage",
// //         "name": seoData.name,
// //         "description": seoData.description,
// //         "keywords": seoData.keywords,
// //         "url": `https://www.learnmathclass.com${seoData.url}`,
// //         "dateModified": new Date().toISOString(),
// //         "inLanguage": "en-US",
// //         "mainEntity": {
// //           "@type": "Article",
// //           "name": seoData.name,
// //           "dateModified": new Date().toISOString(),
// //           "author": {
// //             "@type": "Organization",
// //             "name": "Learn Math Class"
// //           }
// //         }
// //       })
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Algebra Equation Solvers</h1>
// //    <br/>
// //    <br/>

// //    <div style={cardStyles.container}>
// //      {cards.map((c) => (
// //        <div key={c.href} style={cardStyles.card}>
// //          <div style={cardStyles.label}>{c.label}</div>
// //          <div style={cardStyles.title}>{c.title}</div>
// //          <div style={cardStyles.formulaBlock}>
// //            {processContent(c.formula)}
// //          </div>
// //          <div style={cardStyles.blurb}>
// //            {processContent(c.blurb)}
// //          </div>
// //          <Link href={c.href} style={cardStyles.primaryAction}>
// //            Open solver &rarr;
// //          </Link>
// //        </div>
// //      ))}
// //    </div>

// //    {/* <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"
   
// //    /> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //     {/* <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         /> */}
// //    <br/>
// //     {/* <KeyTermsCard
// //      id="0"
// //      title={sectionsContent.obj0.title}
// //      content={sectionsContent.obj0.content}
// //      after={sectionsContent.obj0.after}
// //      variant="light"
// //    /> */}
// //    <br/>
// //    {/* <Sections sections={genericSections.slice(1)}/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }


// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import Head from 'next/head'
// // import Link from 'next/link'
// // import { processContent } from '../../../../app/utils/contentProcessor'
// // import '@/pages/pages.css'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// // export async function getStaticProps(){

// //   const keyWords=[
// //     'equation solvers',
// //     'algebra equation calculator',
// //     'linear equation solver',
// //     'quadratic equation solver',
// //     'polynomial equation solver',
// //     'rational equation solver',
// //     'radical equation solver',
// //     'exponential equation solver',
// //     'logarithmic equation solver',
// //     'absolute value equation solver',
// //     'literal equation solver',
// //     'step by step equation solver'
// //   ]

// //   // •

// // //   \u2022 First item
// // // \u2022 Second item

  
// // // <hr style="border-width:1px;"></hr>

// // // <hr style="color:blue;" />

// // // <hr style="border-color:#3498db; border-width:1px;" />



// // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
// //         //     {processContent(sectionsContent.normal.notation)}
// //         // </div>,


// // //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// // //     {processContent(sectionsContent.normal.parameters)}
// // // </div>,
        
// // //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// // //                   {processContent(sectionsContent.obj4.content)}
// // //                   </div>,


// // //  <div key={'dist'} style={{
// // //                     textAlign: 'center',
// // //                     transform: 'scale(0.98)',
// // //                     transformOrigin: 'center',
// // //                     marginTop:'50px',
// // //                     marginLeft:'-150px'
// // //                   }} dangerouslySetInnerHTML={{ 
// // //                     __html:   sectionContent.distributions.svg,
// // //                   }} />

// //     const sectionsContent={

// //     obj0:{
// //       title:`Key Terms`,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj1:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj2:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
  
// //     obj3:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj4:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj5:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj6:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj7:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj8:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj9:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }


// //   const introContent = {
// //   id: "intro",
// //   title: "",
// //   content: ``
// // }




// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Algebra Equation Solvers | Learn Math Class",
// //         description: "Step-by-step equation solvers for the standard algebra families: linear, quadratic, polynomial, rational, radical, exponential, logarithmic, absolute value, and literal equations. Each solver shows full reasoning and flags edge cases.",
// //         keywords: keyWords.join(", "),
// //         url: "/algebra/calculators/equations",
// //          name: "Algebra Equation Solvers"
// //       },
        
// //        }
// //     }
// //    }

// // export default function AlgebraEquationsLanding({seoData,sectionsContent , introContent}) {

    
// //   const genericSections=[
// //     {
// //         id:'0',
// //         title:sectionsContent.obj0.title,
// //         link:sectionsContent.obj0.link,
// //         content:[
// //           sectionsContent.obj0.content,
// //         ]
// //     },
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //         ]
// //     },
// //     {
// //         id:'13',
// //         title:sectionsContent.obj13.title,
// //         link:sectionsContent.obj13.link,
// //         content:[
// //           sectionsContent.obj13.content,
// //         ]
// //     },
// //     {
// //         id:'14',
// //         title:sectionsContent.obj14.title,
// //         link:sectionsContent.obj14.link,
// //         content:[
// //           sectionsContent.obj14.content,
// //         ]
// //     },
// //     {
// //         id:'15',
// //         title:sectionsContent.obj15.title,
// //         link:sectionsContent.obj15.link,
// //         content:[
// //           sectionsContent.obj15.content,
// //         ]
// //     },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
    
// // ]

// //   const cards = [
// //     {
// //       label: 'Linear',
// //       title: 'Linear Equation Solver',
// //       formula: `$$ax + b = cx + d$$`,
// //       blurb: `A **linear equation** is one where the variable $x$ appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $x$ in a denominator. The solver expands brackets, distributes through factored expressions like $2(x + 3)$, and combines like terms on each side. It then moves all $x$-terms to the left and all constants to the right, and finally divides by the coefficient of $x$ to isolate it. Equations that simplify to a true statement like $0 = 0$ are flagged as **identities** (every $x$ is a solution); equations that simplify to a false statement like $5 = 7$ are flagged as **contradictions** (no solution). Final answers appear as exact reduced fractions whenever the division does not produce an integer, never as rounded decimals.`,
// //       href: '/algebra/calculators/equations/linear'
// //     },
// //     {
// //       label: 'Quadratic',
// //       title: 'Quadratic Equation Solver',
// //       formula: `$$ax^2 + bx + c = 0$$`,
// //       blurb: `A **quadratic equation** is one where the highest power of the variable is $2$. The solver rewrites the equation in standard form, then computes the **discriminant** $\\Delta = b^2 - 4ac$ and uses its sign to route the solution. A positive $\\Delta$ produces two distinct real roots via the quadratic formula $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$, with factoring shown alongside whenever $\\Delta$ is a perfect square. A zero $\\Delta$ produces a single repeated root and the corresponding perfect-square trinomial factorization. A negative $\\Delta$ means no real solutions exist, in which case the parabola is graphed showing the curve sitting entirely above or below the $x$-axis. Every solved equation also reports the parabola's vertex $(h, k)$ and is accompanied by a full graph with axis-crossings, vertex, and equation label marked.`,
// //       href: '/algebra/calculators/equations/quadratic'
// //     },
// //     {
// //       label: 'Polynomial',
// //       title: 'Polynomial Equation Solver',
// //       formula: `$$a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 = 0$$`,
// //       blurb: `A **polynomial equation** is the general form $a_n x^n + \\dots + a_1 x + a_0 = 0$, where $n$ is any positive integer — linear and quadratic equations are the special cases $n = 1$ and $n = 2$. This solver handles degrees up to $4$. Linear and quadratic cases reuse their dedicated logic. For degrees $3$ and $4$, the solver applies the **rational root theorem** to enumerate every candidate $\\dfrac{p}{q}$ (where $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$), tests each by substitution, and uses **synthetic division** to factor each successful root out — leaving a polynomial of one degree less to recurse on. When no rational root exists, a Newton's-method fallback locates real irrational roots numerically. Special cases — equations that factor out a power of $x$, identities, contradictions — are recognized and reported separately.`,
// //       href: '/algebra/calculators/equations/polynomial'
// //     },
// //     {
// //       label: 'Rational',
// //       title: 'Rational Equation Solver',
// //       formula: `$$\\dfrac{P(x)}{Q(x)} + \\dfrac{R(x)}{S(x)} = \\dots$$`,
// //       blurb: `A **rational equation** is one where the variable appears in a denominator — fractions whose tops or bottoms are polynomials in $x$, such as $\\dfrac{x+1}{x-2} = 3$. The solver first identifies every value of $x$ that makes any denominator zero; these are the **restricted values** that no solution may equal. It then computes the **least common denominator** across every fraction in the equation, multiplies both sides through by the LCD to clear all fractions, and solves the resulting polynomial equation (degrees $1$–$4$). Every candidate solution is then checked against the restricted set: any that would make a denominator zero is reported as **extraneous** and excluded from the final answer. Identities, contradictions, and the case where every candidate turns out to be extraneous are each labeled as their own step. Fractions are rendered in proper stacked form, not inline, so the structure stays readable while building.`,
// //       href: '/algebra/calculators/equations/rational'
// //     },
// //     {
// //       label: 'Radical',
// //       title: 'Radical Equation Solver',
// //       formula: `$$\\sqrt[n]{P(x)} + \\dots = \\dots$$`,
// //       blurb: `A **radical equation** is one containing roots — square roots, cube roots, or higher-index roots — with the variable underneath, such as $\\sqrt{x + 3} = 5$ or $\\sqrt[3]{2x - 1} = 4$. The solver isolates the radical term on one side, then raises both sides to the appropriate power ($2$ for $\\sqrt{\\,}$, $3$ for $\\sqrt[3]{\\,}$, $n$ for $\\sqrt[n]{\\,}$) to eliminate it. The resulting linear or quadratic equation is solved with the corresponding routine. Because raising both sides to an even power can introduce false solutions, every candidate is substituted back into the original equation and verified; any that fail are reported as **extraneous** and discarded. Indices $2$, $3$, and arbitrary $n$ are all supported, including equations where the radical appears with a coefficient or inside a more complex expression.`,
// //       href: '/algebra/calculators/equations/radical'
// //     },
// //     {
// //       label: 'Exponential',
// //       title: 'Exponential Equation Solver',
// //       formula: `$$a \\cdot b^{f(x)} + c = d$$`,
// //       blurb: `An **exponential equation** is one where the variable appears in an *exponent* rather than as a base — the unknown is the power something is raised to, such as $2^x = 32$ or $5 \\cdot 3^{x+1} = 45$. The solver isolates the exponential term first by performing whatever additions, subtractions, and divisions are needed to leave a single $b^{(\\dots)}$ on one side. It then attempts **base-matching**: if the right-hand side can be rewritten as a power of the same base $b$ (recognizing $8 = 2^3$ when working with $2^x$), the exponents are set equal directly, yielding an exact integer or rational solution. When base-matching is not possible, the solver applies the natural logarithm to both sides, uses the power rule $\\ln(b^x) = x \\ln(b)$ to bring the exponent down, and reduces the problem to a linear equation in $x$.`,
// //       href: '/algebra/calculators/equations/exponential'
// //     },
// //     {
// //       label: 'Logarithmic',
// //       title: 'Logarithmic Equation Solver',
// //       formula: `$$\\log_b(P(x)) = c$$`,
// //       blurb: `A **logarithmic equation** is one containing logarithms — the inverse of exponentials — with the variable inside the log argument, such as $\\log_2(x + 1) = 5$ or $\\ln(3x) = 2$. Two cases are recognized. When both sides are logs of the same base, $\\log_b(A) = \\log_b(B)$, the **equal-logarithms property** applies: the arguments must be equal, so the equation reduces directly to $A = B$ and is solved as a standard algebraic equation. When only one side is a log and the other is a number or expression, the solver isolates the log first, then converts to exponential form using the inverse relationship $\\log_b(A) = c \\iff A = b^c$, and solves the resulting equation. Domain restrictions on the original log arguments are kept in mind throughout — logarithms are only defined for positive inputs.`,
// //       href: '/algebra/calculators/equations/logarithmic'
// //     },
// //     {
// //       label: 'Absolute Value',
// //       title: 'Absolute Value Equation Solver',
// //       formula: `$$|ax + b| = c$$`,
// //       blurb: `An **absolute value equation** is one containing the $|\\cdot|$ bars around an expression. The absolute value of a number is its distance from zero on the number line, so $|{-5}| = 5$ and $|5| = 5$ — the bars strip away the sign. The solver isolates the absolute value term first, then handles the special cases up front: if the right side equals $0$ there is one solution where the inside equals $0$; if the right side is negative there is no solution at all (since $|\\cdot| \\geq 0$ always). For the general case $|A| = c$ with $c > 0$, the equation splits into two sub-equations — $A = c$ (interior positive) and $A = -c$ (interior negative) — each solved independently. The variant $|A| = |B|$ where both sides are absolute values is also supported, with $A = B$ and $A = -B$ branches.`,
// //       href: '/algebra/calculators/equations/absolute-value'
// //     },
// //     {
// //       label: 'Literal',
// //       title: 'Literal Equation Solver',
// //       formula: `$$F(a,\\ b,\\ c,\\ \\dots) = 0$$`,
// //       blurb: `A **literal equation** is a formula with several letters in it where you solve for *one* of the letters in terms of the others — like rearranging $A = \\pi r^2$ to get $r = \\sqrt{A / \\pi}$, or solving $F = ma$ for $a = F/m$. These are the equations that appear in physics, geometry, and finance, where multiple quantities relate to each other by a fixed formula. The solver auto-detects every variable in the expression and presents them as buttons, letting you pick which one to solve for. The equation is then decomposed symbolically into the form $(\\text{coefficient}) \\cdot (\\text{target}) + (\\text{constant})$, where the coefficient and constant are themselves symbolic expressions in the remaining letters. The two sides are manipulated to isolate the target, returning a closed-form symbolic answer rather than a number.`,
// //       href: '/algebra/calculators/equations/literal'
// //     }
// //   ]

// //   const cardStyles = {
// //     container: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(2, 1fr)',
// //       gap: '28px',
// //       margin: '40px auto',
// //       maxWidth: '1240px',
// //       padding: '0 20px',
// //     },
// //     card: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       border: '1px solid #d8e1ec',
// //       borderRadius: '10px',
// //       padding: '30px 28px',
// //       backgroundColor: '#ffffff',
// //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //     },
// //     label: {
// //       fontSize: '12px',
// //       letterSpacing: '0.8px',
// //       textTransform: 'uppercase',
// //       color: '#6b7a8f',
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       fontWeight: 600,
// //       marginBottom: '6px',
// //     },
// //     title: {
// //       fontSize: '22px',
// //       fontWeight: 600,
// //       color: '#143a66',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //       marginBottom: '16px',
// //       lineHeight: 1.25,
// //     },
// //     formulaBlock: {
// //       background: 'linear-gradient(to right, #f1f7fd 0%, #e8f1fa 100%)',
// //       border: '1px solid #c8d9ec',
// //       borderLeft: '3px solid #2c5d99',
// //       borderRadius: '6px',
// //       padding: '20px 22px',
// //       margin: '0 0 20px 0',
// //       textAlign: 'center',
// //       fontSize: '22px',
// //       color: '#143a66',
// //       overflowX: 'auto',
// //       overflowY: 'hidden',
// //       scrollbarWidth: 'none',
// //       msOverflowStyle: 'none',
// //     },
// //     blurb: {
// //       fontSize: '17px',
// //       color: '#3a4a5e',
// //       lineHeight: 1.65,
// //       marginBottom: '22px',
// //       flex: '1 1 auto',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //     },
// //     primaryAction: {
// //       display: 'inline-block',
// //       padding: '12px 20px',
// //       background: '#2c5d99',
// //       color: '#ffffff',
// //       borderRadius: '6px',
// //       textDecoration: 'none',
// //       fontSize: '14px',
// //       fontWeight: 600,
// //       textAlign: 'center',
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       letterSpacing: '0.3px',
// //       marginTop: 'auto',
// //     },
// //   }

// //   return (
// //    <>
// //    <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify({
// //         "@context": "https://schema.org",
// //         "@type": "WebPage",
// //         "name": seoData.name,
// //         "description": seoData.description,
// //         "keywords": seoData.keywords,
// //         "url": `https://www.learnmathclass.com${seoData.url}`,
// //         "dateModified": new Date().toISOString(),
// //         "inLanguage": "en-US",
// //         "mainEntity": {
// //           "@type": "Article",
// //           "name": seoData.name,
// //           "dateModified": new Date().toISOString(),
// //           "author": {
// //             "@type": "Organization",
// //             "name": "Learn Math Class"
// //           }
// //         }
// //       })
// //     }}
// //   />

// //   <style>{`
// //     .equations-formula-block::-webkit-scrollbar {
// //       display: none;
// //       width: 0;
// //       height: 0;
// //     }
// //     @media (max-width: 760px) {
// //       .equations-cards-grid {
// //         grid-template-columns: 1fr !important;
// //       }
// //     }
// //   `}</style>
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Algebra Equation Solvers</h1>
// //    <br/>
// //    <br/>

// //    <div className="equations-cards-grid" style={cardStyles.container}>
// //      {cards.map((c) => (
// //        <div key={c.href} style={cardStyles.card}>
// //          <div style={cardStyles.label}>{c.label}</div>
// //          <div style={cardStyles.title}>{c.title}</div>
// //          <div className="equations-formula-block" style={cardStyles.formulaBlock}>
// //            {processContent(c.formula)}
// //          </div>
// //          <div style={cardStyles.blurb}>
// //            {processContent(c.blurb)}
// //          </div>
// //          <Link href={c.href} style={cardStyles.primaryAction}>
// //            Open solver &rarr;
// //          </Link>
// //        </div>
// //      ))}
// //    </div>

// //    {/* <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"
   
// //    /> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //     {/* <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         /> */}
// //    <br/>
// //     {/* <KeyTermsCard
// //      id="0"
// //      title={sectionsContent.obj0.title}
// //      content={sectionsContent.obj0.content}
// //      after={sectionsContent.obj0.after}
// //      variant="light"
// //    /> */}
// //    <br/>
// //    {/* <Sections sections={genericSections.slice(1)}/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import Link from 'next/link'
// import { processContent } from '../../../../app/utils/contentProcessor'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=[
//     'equation solvers',
//     'algebra equation calculator',
//     'linear equation solver',
//     'quadratic equation solver',
//     'polynomial equation solver',
//     'rational equation solver',
//     'radical equation solver',
//     'exponential equation solver',
//     'logarithmic equation solver',
//     'absolute value equation solver',
//     'literal equation solver',
//     'step by step equation solver'
//   ]

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//     const sectionsContent={

//     obj0:{
//       title:`Key Terms`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: `**Step-by-step solvers for nine families of algebraic equations.** Each tool walks through the full reasoning, flags edge cases like extraneous and restricted values, and renders the work in proper math notation. Pick a family below to open its solver.`
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Algebra Equation Solvers | Learn Math Class",
//         description: "Step-by-step equation solvers for the standard algebra families: linear, quadratic, polynomial, rational, radical, exponential, logarithmic, absolute value, and literal equations. Each solver shows full reasoning and flags edge cases.",
//         keywords: keyWords.join(", "),
//         url: "/algebra/calculators/equations",
//          name: "Algebra Equation Solvers"
//       },
        
//        }
//     }
//    }

// export default function AlgebraEquationsLanding({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   const cards = [
//     {
//       slug: 'linear',
//       label: 'Linear',
//       shortNav: 'Linear equations',
//       title: 'Linear Equation Solver',
//       formula: `$$ax + b = cx + d$$`,
//       blurb: `A **linear equation** is one where the variable $x$ appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $x$ in a denominator. The solver expands brackets, distributes through factored expressions like $2(x + 3)$, and combines like terms on each side. It then moves all $x$-terms to the left and all constants to the right, and finally divides by the coefficient of $x$ to isolate it. Equations that simplify to a true statement like $0 = 0$ are flagged as **identities** (every $x$ is a solution); equations that simplify to a false statement like $5 = 7$ are flagged as **contradictions** (no solution). Final answers appear as exact reduced fractions whenever the division does not produce an integer, never as rounded decimals.`,
//       href: '/algebra/calculators/equations/linear'
//     },
//     {
//       slug: 'quadratic',
//       label: 'Quadratic',
//       shortNav: 'Quadratic equations',
//       title: 'Quadratic Equation Solver',
//       formula: `$$ax^2 + bx + c = 0$$`,
//       blurb: `A **quadratic equation** is one where the highest power of the variable is $2$. The solver rewrites the equation in standard form, then computes the **discriminant** $\\Delta = b^2 - 4ac$ and uses its sign to route the solution. A positive $\\Delta$ produces two distinct real roots via the quadratic formula $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$, with factoring shown alongside whenever $\\Delta$ is a perfect square. A zero $\\Delta$ produces a single repeated root and the corresponding perfect-square trinomial factorization. A negative $\\Delta$ means no real solutions exist, in which case the parabola is graphed showing the curve sitting entirely above or below the $x$-axis. Every solved equation also reports the parabola's vertex $(h, k)$ and is accompanied by a full graph with axis-crossings, vertex, and equation label marked.`,
//       href: '/algebra/calculators/equations/quadratic'
//     },
//     {
//       slug: 'polynomial',
//       label: 'Polynomial',
//       shortNav: 'Polynomial equations',
//       title: 'Polynomial Equation Solver',
//       formula: `$$a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 = 0$$`,
//       blurb: `A **polynomial equation** is the general form $a_n x^n + \\dots + a_1 x + a_0 = 0$, where $n$ is any positive integer — linear and quadratic equations are the special cases $n = 1$ and $n = 2$. This solver handles degrees up to $4$. Linear and quadratic cases reuse their dedicated logic. For degrees $3$ and $4$, the solver applies the **rational root theorem** to enumerate every candidate $\\dfrac{p}{q}$ (where $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$), tests each by substitution, and uses **synthetic division** to factor each successful root out — leaving a polynomial of one degree less to recurse on. When no rational root exists, a Newton's-method fallback locates real irrational roots numerically. Special cases — equations that factor out a power of $x$, identities, contradictions — are recognized and reported separately.`,
//       href: '/algebra/calculators/equations/polynomial'
//     },
//     {
//       slug: 'rational',
//       label: 'Rational',
//       shortNav: 'Rational equations',
//       title: 'Rational Equation Solver',
//       formula: `$$\\dfrac{P(x)}{Q(x)} + \\dfrac{R(x)}{S(x)} = \\dots$$`,
//       blurb: `A **rational equation** is one where the variable appears in a denominator — fractions whose tops or bottoms are polynomials in $x$, such as $\\dfrac{x+1}{x-2} = 3$. The solver first identifies every value of $x$ that makes any denominator zero; these are the **restricted values** that no solution may equal. It then computes the **least common denominator** across every fraction in the equation, multiplies both sides through by the LCD to clear all fractions, and solves the resulting polynomial equation (degrees $1$–$4$). Every candidate solution is then checked against the restricted set: any that would make a denominator zero is reported as **extraneous** and excluded from the final answer. Identities, contradictions, and the case where every candidate turns out to be extraneous are each labeled as their own step. Fractions are rendered in proper stacked form, not inline, so the structure stays readable while building.`,
//       href: '/algebra/calculators/equations/rational'
//     },
//     {
//       slug: 'radical',
//       label: 'Radical',
//       shortNav: 'Radical equations',
//       title: 'Radical Equation Solver',
//       formula: `$$\\sqrt[n]{P(x)} + \\dots = \\dots$$`,
//       blurb: `A **radical equation** is one containing roots — square roots, cube roots, or higher-index roots — with the variable underneath, such as $\\sqrt{x + 3} = 5$ or $\\sqrt[3]{2x - 1} = 4$. The solver isolates the radical term on one side, then raises both sides to the appropriate power ($2$ for $\\sqrt{\\,}$, $3$ for $\\sqrt[3]{\\,}$, $n$ for $\\sqrt[n]{\\,}$) to eliminate it. The resulting linear or quadratic equation is solved with the corresponding routine. Because raising both sides to an even power can introduce false solutions, every candidate is substituted back into the original equation and verified; any that fail are reported as **extraneous** and discarded. Indices $2$, $3$, and arbitrary $n$ are all supported, including equations where the radical appears with a coefficient or inside a more complex expression.`,
//       href: '/algebra/calculators/equations/radical'
//     },
//     {
//       slug: 'exponential',
//       label: 'Exponential',
//       shortNav: 'Exponential equations',
//       title: 'Exponential Equation Solver',
//       formula: `$$a \\cdot b^{f(x)} + c = d$$`,
//       blurb: `An **exponential equation** is one where the variable appears in an *exponent* rather than as a base — the unknown is the power something is raised to, such as $2^x = 32$ or $5 \\cdot 3^{x+1} = 45$. The solver isolates the exponential term first by performing whatever additions, subtractions, and divisions are needed to leave a single $b^{(\\dots)}$ on one side. It then attempts **base-matching**: if the right-hand side can be rewritten as a power of the same base $b$ (recognizing $8 = 2^3$ when working with $2^x$), the exponents are set equal directly, yielding an exact integer or rational solution. When base-matching is not possible, the solver applies the natural logarithm to both sides, uses the power rule $\\ln(b^x) = x \\ln(b)$ to bring the exponent down, and reduces the problem to a linear equation in $x$.`,
//       href: '/algebra/calculators/equations/exponential'
//     },
//     {
//       slug: 'logarithmic',
//       label: 'Logarithmic',
//       shortNav: 'Logarithmic equations',
//       title: 'Logarithmic Equation Solver',
//       formula: `$$\\log_b(P(x)) = c$$`,
//       blurb: `A **logarithmic equation** is one containing logarithms — the inverse of exponentials — with the variable inside the log argument, such as $\\log_2(x + 1) = 5$ or $\\ln(3x) = 2$. Two cases are recognized. When both sides are logs of the same base, $\\log_b(A) = \\log_b(B)$, the **equal-logarithms property** applies: the arguments must be equal, so the equation reduces directly to $A = B$ and is solved as a standard algebraic equation. When only one side is a log and the other is a number or expression, the solver isolates the log first, then converts to exponential form using the inverse relationship $\\log_b(A) = c \\iff A = b^c$, and solves the resulting equation. Domain restrictions on the original log arguments are kept in mind throughout — logarithms are only defined for positive inputs.`,
//       href: '/algebra/calculators/equations/logarithmic'
//     },
//     {
//       slug: 'absolute-value',
//       label: 'Absolute Value',
//       shortNav: 'Absolute value equations',
//       title: 'Absolute Value Equation Solver',
//       formula: `$$|ax + b| = c$$`,
//       blurb: `An **absolute value equation** is one containing the $|\\cdot|$ bars around an expression. The absolute value of a number is its distance from zero on the number line, so $|{-5}| = 5$ and $|5| = 5$ — the bars strip away the sign. The solver isolates the absolute value term first, then handles the special cases up front: if the right side equals $0$ there is one solution where the inside equals $0$; if the right side is negative there is no solution at all (since $|\\cdot| \\geq 0$ always). For the general case $|A| = c$ with $c > 0$, the equation splits into two sub-equations — $A = c$ (interior positive) and $A = -c$ (interior negative) — each solved independently. The variant $|A| = |B|$ where both sides are absolute values is also supported, with $A = B$ and $A = -B$ branches.`,
//       href: '/algebra/calculators/equations/absolute-value'
//     },
//     {
//       slug: 'literal',
//       label: 'Literal',
//       shortNav: 'Literal equations',
//       title: 'Literal Equation Solver',
//       formula: `$$F(a,\\ b,\\ c,\\ \\dots) = 0$$`,
//       blurb: `A **literal equation** is a formula with several letters in it where you solve for *one* of the letters in terms of the others — like rearranging $A = \\pi r^2$ to get $r = \\sqrt{A / \\pi}$, or solving $F = ma$ for $a = F/m$. These are the equations that appear in physics, geometry, and finance, where multiple quantities relate to each other by a fixed formula. The solver auto-detects every variable in the expression and presents them as buttons, letting you pick which one to solve for. The equation is then decomposed symbolically into the form $(\\text{coefficient}) \\cdot (\\text{target}) + (\\text{constant})$, where the coefficient and constant are themselves symbolic expressions in the remaining letters. The two sides are manipulated to isolate the target, returning a closed-form symbolic answer rather than a number.`,
//       href: '/algebra/calculators/equations/literal'
//     }
//   ]

//   const styles = {
//     introStrip: {
//       background: 'linear-gradient(to right, #f1f7fd 0%, #e8f1fa 100%)',
//       border: '1px solid #c8d9ec',
//       borderLeft: '3px solid #2c5d99',
//       borderRadius: '8px',
//       padding: '14px 20px',
//       margin: '0 auto 26px',
//       maxWidth: '1240px',
//       color: '#143a66',
//       fontSize: '15px',
//       lineHeight: 1.6,
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//     },
//     headerNav: {
//       background: '#ffffff',
//       border: '1px solid #d8e1ec',
//       borderRadius: '8px',
//       padding: '14px 18px',
//       margin: '0 auto 28px',
//       maxWidth: '1240px',
//       display: 'flex',
//       flexWrap: 'wrap',
//       alignItems: 'center',
//       gap: '8px',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
//     },
//     headerNavLabel: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '11.5px',
//       textTransform: 'uppercase',
//       letterSpacing: '1.2px',
//       color: '#6b7a8f',
//       fontWeight: 600,
//       marginRight: '6px',
//     },
//     headerNavLink: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '13px',
//       color: '#2c5d99',
//       background: '#f1f7fd',
//       border: '1px solid #c8d9ec',
//       borderRadius: '999px',
//       padding: '5px 13px',
//       textDecoration: 'none',
//       fontWeight: 500,
//     },
//     main: {
//       display: 'grid',
//       gridTemplateColumns: '220px 1fr',
//       gap: '32px',
//       alignItems: 'start',
//       maxWidth: '1500px',
//       margin: '0 auto',
//       padding: '0 20px',
//     },
//     sidebar: {
//       position: 'sticky',
//       top: '24px',
//       background: '#ffffff',
//       border: '1px solid #d8e1ec',
//       borderRadius: '8px',
//       padding: '18px 16px',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
//     },
//     sidebarTitle: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '11.5px',
//       textTransform: 'uppercase',
//       letterSpacing: '1.2px',
//       color: '#6b7a8f',
//       fontWeight: 600,
//       margin: '0 0 12px',
//       paddingBottom: '10px',
//       borderBottom: '1px solid #ecf1f7',
//     },
//     sidebarList: {
//       listStyle: 'none',
//       padding: 0,
//       margin: 0,
//     },
//     sidebarLink: {
//       display: 'block',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       fontSize: '14px',
//       color: '#3a4a5e',
//       padding: '7px 10px',
//       borderRadius: '5px',
//       textDecoration: 'none',
//       borderLeft: '3px solid transparent',
//       marginBottom: '1px',
//     },
//     cardsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '28px',
//     },
//     card: {
//       display: 'flex',
//       flexDirection: 'column',
//       border: '1px solid #d8e1ec',
//       borderRadius: '10px',
//       padding: '30px 28px',
//       backgroundColor: '#ffffff',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       scrollMarginTop: '24px',
//     },
//     label: {
//       fontSize: '12px',
//       letterSpacing: '0.8px',
//       textTransform: 'uppercase',
//       color: '#6b7a8f',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     title: {
//       fontSize: '22px',
//       fontWeight: 600,
//       color: '#143a66',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       marginBottom: '16px',
//       lineHeight: 1.25,
//     },
//     formulaBlock: {
//       background: 'linear-gradient(to right, #f1f7fd 0%, #e8f1fa 100%)',
//       border: '1px solid #c8d9ec',
//       borderLeft: '3px solid #2c5d99',
//       borderRadius: '6px',
//       padding: '20px 22px',
//       margin: '0 0 20px 0',
//       textAlign: 'center',
//       fontSize: '22px',
//       color: '#143a66',
//       overflowX: 'auto',
//       overflowY: 'hidden',
//       scrollbarWidth: 'none',
//       msOverflowStyle: 'none',
//     },
//     blurb: {
//       fontSize: '17px',
//       color: '#3a4a5e',
//       lineHeight: 1.65,
//       marginBottom: '22px',
//       flex: '1 1 auto',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//     },
//     primaryAction: {
//       display: 'inline-block',
//       padding: '12px 20px',
//       background: '#2c5d99',
//       color: '#ffffff',
//       borderRadius: '6px',
//       textDecoration: 'none',
//       fontSize: '14px',
//       fontWeight: 600,
//       textAlign: 'center',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       letterSpacing: '0.3px',
//       marginTop: 'auto',
//     },
//   }

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />

//   <style>{`
//     .equations-formula-block::-webkit-scrollbar {
//       display: none;
//       width: 0;
//       height: 0;
//     }
//     .equations-header-nav-link:hover {
//       background: #2c5d99 !important;
//       color: #ffffff !important;
//       border-color: #2c5d99 !important;
//     }
//     .equations-sidebar-link:hover {
//       background: #f1f7fd !important;
//       color: #143a66 !important;
//       border-left-color: #2c5d99 !important;
//     }
//     @media (max-width: 900px) {
//       .equations-main-grid {
//         grid-template-columns: 1fr !important;
//       }
//       .equations-sidebar {
//         display: none !important;
//       }
//     }
//     @media (max-width: 760px) {
//       .equations-cards-grid {
//         grid-template-columns: 1fr !important;
//       }
//     }
//   `}</style>
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Algebra Equation Solvers</h1>
//    <br/>

//    {/* THING #1: INTRO STRIP */}
//    <div style={styles.introStrip}>
//      {processContent(introContent.content)}
//    </div>

//    {/* THING #2: HEADER NAV */}
//    <nav style={styles.headerNav} aria-label="Quick navigation">
//      <span style={styles.headerNavLabel}>Jump to:</span>
//      {cards.map((c) => (
//        <a
//          key={c.slug}
//          href={`#card-${c.slug}`}
//          className="equations-header-nav-link"
//          style={styles.headerNavLink}
//        >
//          {c.label}
//        </a>
//      ))}
//    </nav>

//    {/* THING #3: SIDEBAR + CARDS GRID */}
//    <div className="equations-main-grid" style={styles.main}>

//      <aside className="equations-sidebar" style={styles.sidebar} aria-label="On this page">
//        <h3 style={styles.sidebarTitle}>On this page</h3>
//        <ul style={styles.sidebarList}>
//          {cards.map((c) => (
//            <li key={c.slug}>
//              <a
//                href={`#card-${c.slug}`}
//                className="equations-sidebar-link"
//                style={styles.sidebarLink}
//              >
//                {c.shortNav}
//              </a>
//            </li>
//          ))}
//        </ul>
//      </aside>

//      <div className="equations-cards-grid" style={styles.cardsGrid}>
//        {cards.map((c) => (
//          <article key={c.slug} id={`card-${c.slug}`} style={styles.card}>
//            <div style={styles.label}>{c.label}</div>
//            <div style={styles.title}>{c.title}</div>
//            <div className="equations-formula-block" style={styles.formulaBlock}>
//              {processContent(c.formula)}
//            </div>
//            <div style={styles.blurb}>
//              {processContent(c.blurb)}
//            </div>
//            <Link href={c.href} style={styles.primaryAction}>
//              Open solver &rarr;
//            </Link>
//          </article>
//        ))}
//      </div>
//    </div>

//    {/* <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    /> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
//    <br/>
//    {/* <Sections sections={genericSections.slice(1)}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import Link from 'next/link'
// import { processContent } from '../../../../app/utils/contentProcessor'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=[
//     'equation solvers',
//     'algebra equation calculator',
//     'linear equation solver',
//     'quadratic equation solver',
//     'polynomial equation solver',
//     'rational equation solver',
//     'radical equation solver',
//     'exponential equation solver',
//     'logarithmic equation solver',
//     'absolute value equation solver',
//     'literal equation solver',
//     'step by step equation solver'
//   ]

//     const sectionsContent={

//     obj0:{
//       title:`Key Terms`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: `**Step-by-step solvers for nine families of algebraic equations.** Each tool walks through the full reasoning, flags edge cases like extraneous and restricted values, and renders the work in proper math notation. Pick a family below to open its solver.`
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Algebra Equation Solvers | Learn Math Class",
//         description: "Step-by-step equation solvers for the standard algebra families: linear, quadratic, polynomial, rational, radical, exponential, logarithmic, absolute value, and literal equations. Each solver shows full reasoning and flags edge cases.",
//         keywords: keyWords.join(", "),
//         url: "/algebra/calculators/equations",
//          name: "Algebra Equation Solvers"
//       },
        
//        }
//     }
//    }

// export default function AlgebraEquationsLanding({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
    
// ]

//   const cards = [
//     {
//       slug: 'linear',
//       label: 'Linear',
//       shortNav: 'Linear equations',
//       title: 'Linear Equation Solver',
//       formula: `$$ax + b = cx + d$$`,
//       blurb: `A **linear equation** is one where the variable $x$ appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $x$ in a denominator. The solver expands brackets, distributes through factored expressions like $2(x + 3)$, and combines like terms on each side. It then moves all $x$-terms to the left and all constants to the right, and finally divides by the coefficient of $x$ to isolate it. Equations that simplify to a true statement like $0 = 0$ are flagged as **identities** (every $x$ is a solution); equations that simplify to a false statement like $5 = 7$ are flagged as **contradictions** (no solution). Final answers appear as exact reduced fractions whenever the division does not produce an integer, never as rounded decimals.`,
//       href: '/algebra/calculators/equations/linear'
//     },
//     {
//       slug: 'quadratic',
//       label: 'Quadratic',
//       shortNav: 'Quadratic equations',
//       title: 'Quadratic Equation Solver',
//       formula: `$$ax^2 + bx + c = 0$$`,
//       blurb: `A **quadratic equation** is one where the highest power of the variable is $2$. The solver rewrites the equation in standard form, then computes the **discriminant** $\\Delta = b^2 - 4ac$ and uses its sign to route the solution. A positive $\\Delta$ produces two distinct real roots via the quadratic formula $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$, with factoring shown alongside whenever $\\Delta$ is a perfect square. A zero $\\Delta$ produces a single repeated root and the corresponding perfect-square trinomial factorization. A negative $\\Delta$ means no real solutions exist, in which case the parabola is graphed showing the curve sitting entirely above or below the $x$-axis. Every solved equation also reports the parabola's vertex $(h, k)$ and is accompanied by a full graph with axis-crossings, vertex, and equation label marked.`,
//       href: '/algebra/calculators/equations/quadratic'
//     },
//     {
//       slug: 'polynomial',
//       label: 'Polynomial',
//       shortNav: 'Polynomial equations',
//       title: 'Polynomial Equation Solver',
//       formula: `$$a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 = 0$$`,
//       blurb: `A **polynomial equation** is the general form $a_n x^n + \\dots + a_1 x + a_0 = 0$, where $n$ is any positive integer — linear and quadratic equations are the special cases $n = 1$ and $n = 2$. This solver handles degrees up to $4$. Linear and quadratic cases reuse their dedicated logic. For degrees $3$ and $4$, the solver applies the **rational root theorem** to enumerate every candidate $\\dfrac{p}{q}$ (where $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$), tests each by substitution, and uses **synthetic division** to factor each successful root out — leaving a polynomial of one degree less to recurse on. When no rational root exists, a Newton's-method fallback locates real irrational roots numerically. Special cases — equations that factor out a power of $x$, identities, contradictions — are recognized and reported separately.`,
//       href: '/algebra/calculators/equations/polynomial'
//     },
//     {
//       slug: 'rational',
//       label: 'Rational',
//       shortNav: 'Rational equations',
//       title: 'Rational Equation Solver',
//       formula: `$$\\dfrac{P(x)}{Q(x)} + \\dfrac{R(x)}{S(x)} = \\dots$$`,
//       blurb: `A **rational equation** is one where the variable appears in a denominator — fractions whose tops or bottoms are polynomials in $x$, such as $\\dfrac{x+1}{x-2} = 3$. The solver first identifies every value of $x$ that makes any denominator zero; these are the **restricted values** that no solution may equal. It then computes the **least common denominator** across every fraction in the equation, multiplies both sides through by the LCD to clear all fractions, and solves the resulting polynomial equation (degrees $1$–$4$). Every candidate solution is then checked against the restricted set: any that would make a denominator zero is reported as **extraneous** and excluded from the final answer. Identities, contradictions, and the case where every candidate turns out to be extraneous are each labeled as their own step. Fractions are rendered in proper stacked form, not inline, so the structure stays readable while building.`,
//       href: '/algebra/calculators/equations/rational'
//     },
//     {
//       slug: 'radical',
//       label: 'Radical',
//       shortNav: 'Radical equations',
//       title: 'Radical Equation Solver',
//       formula: `$$\\sqrt[n]{P(x)} + \\dots = \\dots$$`,
//       blurb: `A **radical equation** is one containing roots — square roots, cube roots, or higher-index roots — with the variable underneath, such as $\\sqrt{x + 3} = 5$ or $\\sqrt[3]{2x - 1} = 4$. The solver isolates the radical term on one side, then raises both sides to the appropriate power ($2$ for $\\sqrt{\\,}$, $3$ for $\\sqrt[3]{\\,}$, $n$ for $\\sqrt[n]{\\,}$) to eliminate it. The resulting linear or quadratic equation is solved with the corresponding routine. Because raising both sides to an even power can introduce false solutions, every candidate is substituted back into the original equation and verified; any that fail are reported as **extraneous** and discarded. Indices $2$, $3$, and arbitrary $n$ are all supported, including equations where the radical appears with a coefficient or inside a more complex expression.`,
//       href: '/algebra/calculators/equations/radical'
//     },
//     {
//       slug: 'exponential',
//       label: 'Exponential',
//       shortNav: 'Exponential equations',
//       title: 'Exponential Equation Solver',
//       formula: `$$a \\cdot b^{f(x)} + c = d$$`,
//       blurb: `An **exponential equation** is one where the variable appears in an *exponent* rather than as a base — the unknown is the power something is raised to, such as $2^x = 32$ or $5 \\cdot 3^{x+1} = 45$. The solver isolates the exponential term first by performing whatever additions, subtractions, and divisions are needed to leave a single $b^{(\\dots)}$ on one side. It then attempts **base-matching**: if the right-hand side can be rewritten as a power of the same base $b$ (recognizing $8 = 2^3$ when working with $2^x$), the exponents are set equal directly, yielding an exact integer or rational solution. When base-matching is not possible, the solver applies the natural logarithm to both sides, uses the power rule $\\ln(b^x) = x \\ln(b)$ to bring the exponent down, and reduces the problem to a linear equation in $x$.`,
//       href: '/algebra/calculators/equations/exponential'
//     },
//     {
//       slug: 'logarithmic',
//       label: 'Logarithmic',
//       shortNav: 'Logarithmic equations',
//       title: 'Logarithmic Equation Solver',
//       formula: `$$\\log_b(P(x)) = c$$`,
//       blurb: `A **logarithmic equation** is one containing logarithms — the inverse of exponentials — with the variable inside the log argument, such as $\\log_2(x + 1) = 5$ or $\\ln(3x) = 2$. Two cases are recognized. When both sides are logs of the same base, $\\log_b(A) = \\log_b(B)$, the **equal-logarithms property** applies: the arguments must be equal, so the equation reduces directly to $A = B$ and is solved as a standard algebraic equation. When only one side is a log and the other is a number or expression, the solver isolates the log first, then converts to exponential form using the inverse relationship $\\log_b(A) = c \\iff A = b^c$, and solves the resulting equation. Domain restrictions on the original log arguments are kept in mind throughout — logarithms are only defined for positive inputs.`,
//       href: '/algebra/calculators/equations/logarithmic'
//     },
//     {
//       slug: 'absolute-value',
//       label: 'Absolute Value',
//       shortNav: 'Absolute value equations',
//       title: 'Absolute Value Equation Solver',
//       formula: `$$|ax + b| = c$$`,
//       blurb: `An **absolute value equation** is one containing the $|\\cdot|$ bars around an expression. The absolute value of a number is its distance from zero on the number line, so $|{-5}| = 5$ and $|5| = 5$ — the bars strip away the sign. The solver isolates the absolute value term first, then handles the special cases up front: if the right side equals $0$ there is one solution where the inside equals $0$; if the right side is negative there is no solution at all (since $|\\cdot| \\geq 0$ always). For the general case $|A| = c$ with $c > 0$, the equation splits into two sub-equations — $A = c$ (interior positive) and $A = -c$ (interior negative) — each solved independently. The variant $|A| = |B|$ where both sides are absolute values is also supported, with $A = B$ and $A = -B$ branches.`,
//       href: '/algebra/calculators/equations/absolute-value'
//     },
//     {
//       slug: 'literal',
//       label: 'Literal',
//       shortNav: 'Literal equations',
//       title: 'Literal Equation Solver',
//       formula: `$$F(a,\\ b,\\ c,\\ \\dots) = 0$$`,
//       blurb: `A **literal equation** is a formula with several letters in it where you solve for *one* of the letters in terms of the others — like rearranging $A = \\pi r^2$ to get $r = \\sqrt{A / \\pi}$, or solving $F = ma$ for $a = F/m$. These are the equations that appear in physics, geometry, and finance, where multiple quantities relate to each other by a fixed formula. The solver auto-detects every variable in the expression and presents them as buttons, letting you pick which one to solve for. The equation is then decomposed symbolically into the form $(\\text{coefficient}) \\cdot (\\text{target}) + (\\text{constant})$, where the coefficient and constant are themselves symbolic expressions in the remaining letters. The two sides are manipulated to isolate the target, returning a closed-form symbolic answer rather than a number.`,
//       href: '/algebra/calculators/equations/literal'
//     }
//   ]

//   const styles = {
//     // Outer wrapper: spans full viewport width, position:relative so the
//     // floating sidebar can be absolutely positioned in the left gutter
//     // without affecting the centered content flow.
//     pageWrap: {
//       position: 'relative',
//       width: '100%',
//     },

//     // Floating sidebar — sits in the left viewport gutter, completely
//     // outside the centered content column. Uses position:fixed so it
//     // stays put on scroll without participating in any grid.
//     floatingSidebar: {
//       position: 'fixed',
//       top: '170px',
//       left: '20px',
//       width: '190px',
//       maxHeight: 'calc(100vh - 140px)',
//       overflowY: 'auto',
//       background: '#ffffff',
//       border: '1px solid #d8e1ec',
//       borderRadius: '8px',
//       padding: '18px 16px',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
//       zIndex: 5,
//     },
//     sidebarTitle: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '11.5px',
//       textTransform: 'uppercase',
//       letterSpacing: '1.2px',
//       color: '#6b7a8f',
//       fontWeight: 600,
//       margin: '0 0 12px',
//       paddingBottom: '10px',
//       borderBottom: '1px solid #ecf1f7',
//     },
//     sidebarList: {
//       listStyle: 'none',
//       padding: 0,
//       margin: 0,
//     },
//     sidebarLink: {
//       display: 'block',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       fontSize: '14px',
//       color: '#3a4a5e',
//       padding: '7px 10px',
//       borderRadius: '5px',
//       textDecoration: 'none',
//       borderLeft: '3px solid transparent',
//       marginBottom: '1px',
//     },

//     // Intro strip — same centered column as cards (1240px)
//     introStrip: {
//       background: 'linear-gradient(to right, #f1f7fd 0%, #e8f1fa 100%)',
//       border: '1px solid #c8d9ec',
//       borderLeft: '3px solid #2c5d99',
//       borderRadius: '8px',
//       padding: '14px 20px',
//       margin: '0 auto 26px',
//       maxWidth: '1140px',
//       color: '#143a66',
//       fontSize: '15px',
//       lineHeight: 1.6,
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//     },

//     // Header nav — same centered column as cards (1240px)
//     headerNav: {
//       background: '#ffffff',
//       border: '1px solid #d8e1ec',
//       borderRadius: '8px',
//       padding: '14px 18px',
//       margin: '0 auto 28px',
//       maxWidth: '1140px',
//       display: 'flex',
//       flexWrap: 'wrap',
//       alignItems: 'center',
//       gap: '8px',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
//     },
//     headerNavLabel: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '11.5px',
//       textTransform: 'uppercase',
//       letterSpacing: '1.2px',
//       color: '#6b7a8f',
//       fontWeight: 600,
//       marginRight: '6px',
//     },
//     headerNavLink: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '13px',
//       color: '#2c5d99',
//       background: '#f1f7fd',
//       border: '1px solid #c8d9ec',
//       borderRadius: '999px',
//       padding: '5px 13px',
//       textDecoration: 'none',
//       fontWeight: 500,
//     },

//     // Cards container — IDENTICAL to the original (1240px, margin auto)
//     container: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '28px',
//       margin: '40px auto',
//       maxWidth: '1180px',
//       padding: '0 20px',
//     },
//     card: {
//       display: 'flex',
//       flexDirection: 'column',
//       border: '1px solid #d8e1ec',
//       borderRadius: '10px',
//       padding: '30px 28px',
//       backgroundColor: '#ffffff',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       scrollMarginTop: '24px',
//     },
//     label: {
//       fontSize: '12px',
//       letterSpacing: '0.8px',
//       textTransform: 'uppercase',
//       color: '#6b7a8f',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     title: {
//       fontSize: '22px',
//       fontWeight: 600,
//       color: '#143a66',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       marginBottom: '16px',
//       lineHeight: 1.25,
//     },
//     formulaBlock: {
//       background: 'linear-gradient(to right, #f1f7fd 0%, #e8f1fa 100%)',
//       border: '1px solid #c8d9ec',
//       borderLeft: '3px solid #2c5d99',
//       borderRadius: '6px',
//       padding: '20px 22px',
//       margin: '0 0 20px 0',
//       textAlign: 'center',
//       fontSize: '22px',
//       color: '#143a66',
//       overflowX: 'auto',
//       overflowY: 'hidden',
//       scrollbarWidth: 'none',
//       msOverflowStyle: 'none',
//     },
//     blurb: {
//       fontSize: '17px',
//       color: '#3a4a5e',
//       lineHeight: 1.65,
//       marginBottom: '22px',
//       flex: '1 1 auto',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//     },
//     primaryAction: {
//       display: 'inline-block',
//       padding: '12px 20px',
//       background: '#2c5d99',
//       color: '#ffffff',
//       borderRadius: '6px',
//       textDecoration: 'none',
//       fontSize: '14px',
//       fontWeight: 600,
//       textAlign: 'center',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       letterSpacing: '0.3px',
//       marginTop: 'auto',
//     },
//   }

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />

//   <style>{`
//     .equations-formula-block::-webkit-scrollbar {
//       display: none;
//       width: 0;
//       height: 0;
//     }
//     .equations-header-nav-link:hover {
//       background: #2c5d99 !important;
//       color: #ffffff !important;
//       border-color: #2c5d99 !important;
//     }
//     .equations-sidebar-link:hover {
//       background: #f1f7fd !important;
//       color: #143a66 !important;
//       border-left-color: #2c5d99 !important;
//     }
//     /* Hide the floating sidebar when there is no left gutter to put it in.
//        1240 (cards) + 2*210 (sidebar) + 2*40 (breathing room) ≈ 1540px.
//        Below that, the sidebar would overlap the cards, so kill it. */
//     @media (max-width: 1540px) {
//       .equations-floating-sidebar {
//         display: none !important;
//       }
//     }
//     @media (max-width: 760px) {
//       .equations-cards-grid {
//         grid-template-columns: 1fr !important;
//       }
//     }
//   `}</style>
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Algebra Equation Solvers</h1>
//    <br/>

//    {/* OUTER WRAPPER — relative positioning anchors the floating sidebar
//        in the left viewport gutter, leaving the centered content untouched */}
//    <div style={styles.pageWrap}>

//      {/* FLOATING SIDEBAR — absolutely positioned, sits in the left gutter,
//          outside the 1240px content column. Hidden via CSS below 1540px. */}
//      <aside
//        className="equations-floating-sidebar"
//        style={styles.floatingSidebar}
//        aria-label="On this page"
//      >
//        <h3 style={styles.sidebarTitle}>On this page</h3>
//        <ul style={styles.sidebarList}>
//          {cards.map((c) => (
//            <li key={c.slug}>
//              <a
//                href={`#card-${c.slug}`}
//                className="equations-sidebar-link"
//                style={styles.sidebarLink}
//              >
//                {c.shortNav}
//              </a>
//            </li>
//          ))}
//        </ul>
//      </aside>

//      {/* INTRO STRIP — centered, same column as cards */}
//      <div style={styles.introStrip}>
//        {processContent(introContent.content)}
//      </div>

//      {/* HEADER NAV — centered, same column as cards */}
//      <nav style={styles.headerNav} aria-label="Quick navigation">
//        <span style={styles.headerNavLabel}>Jump to:</span>
//        {cards.map((c) => (
//          <a
//            key={c.slug}
//            href={`#card-${c.slug}`}
//            className="equations-header-nav-link"
//            style={styles.headerNavLink}
//          >
//            {c.label}
//          </a>
//        ))}
//      </nav>

//      {/* CARDS — exactly the original container, 1240px max, margin auto */}
//      <div className="equations-cards-grid" style={styles.container}>
//        {cards.map((c) => (
//          <article key={c.slug} id={`card-${c.slug}`} style={styles.card}>
//            <div style={styles.label}>{c.label}</div>
//            <div style={styles.title}>{c.title}</div>
//            <div className="equations-formula-block" style={styles.formulaBlock}>
//              {processContent(c.formula)}
//            </div>
//            <div style={styles.blurb}>
//              {processContent(c.blurb)}
//            </div>
//            <Link href={c.href} style={styles.primaryAction}>
//              Open solver &rarr;
//            </Link>
//          </article>
//        ))}
//      </div>

//    </div>

//    {/* <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    /> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
//    <br/>
//    {/* <Sections sections={genericSections.slice(1)}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import Link from 'next/link'
import { processContent } from '../../../../app/utils/contentProcessor'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords=[
    'equation solvers',
    'algebra equation calculator',
    'linear equation solver',
    'quadratic equation solver',
    'polynomial equation solver',
    'rational equation solver',
    'radical equation solver',
    'exponential equation solver',
    'logarithmic equation solver',
    'absolute value equation solver',
    'literal equation solver',
    'step by step equation solver'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:``,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj1:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "",
  content: `**Step-by-step solvers for nine families of algebraic equations.** Each tool walks through the full reasoning, flags edge cases like extraneous and restricted values, and renders the work in proper math notation. Pick a family below to open its solver.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Algebra Equation Solvers | Learn Math Class",
        description: "Step-by-step equation solvers for the standard algebra families: linear, quadratic, polynomial, rational, radical, exponential, logarithmic, absolute value, and literal equations. Each solver shows full reasoning and flags edge cases.",
        keywords: keyWords.join(", "),
        url: "/algebra/calculators/equations",
         name: "Algebra Equation Solvers"
      },
        
       }
    }
   }

export default function AlgebraEquationsLanding({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    
]

  const cards = [
    {
      slug: 'linear',
      label: 'Linear',
      shortNav: 'Linear equations',
      title: 'Linear Equation Solver',
      formula: `$$ax + b = cx + d$$`,
      blurb: `A **linear equation** is one where the variable $x$ appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $x$ in a denominator. The solver expands brackets, distributes through factored expressions like $2(x + 3)$, and combines like terms on each side. It then moves all $x$-terms to the left and all constants to the right, and finally divides by the coefficient of $x$ to isolate it. Equations that simplify to a true statement like $0 = 0$ are flagged as **identities** (every $x$ is a solution); equations that simplify to a false statement like $5 = 7$ are flagged as **contradictions** (no solution). Final answers appear as exact reduced fractions whenever the division does not produce an integer, never as rounded decimals.`,
      href: '/algebra/calculators/equations/linear'
    },
    {
      slug: 'quadratic',
      label: 'Quadratic',
      shortNav: 'Quadratic equations',
      title: 'Quadratic Equation Solver',
      formula: `$$ax^2 + bx + c = 0$$`,
      blurb: `A **quadratic equation** is one where the highest power of the variable is $2$. The solver rewrites the equation in standard form, then computes the **discriminant** $\\Delta = b^2 - 4ac$ and uses its sign to route the solution. A positive $\\Delta$ produces two distinct real roots via the quadratic formula $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$, with factoring shown alongside whenever $\\Delta$ is a perfect square. A zero $\\Delta$ produces a single repeated root and the corresponding perfect-square trinomial factorization. A negative $\\Delta$ means no real solutions exist, in which case the parabola is graphed showing the curve sitting entirely above or below the $x$-axis. Every solved equation also reports the parabola's vertex $(h, k)$ and is accompanied by a full graph with axis-crossings, vertex, and equation label marked.`,
      href: '/algebra/calculators/equations/quadratic'
    },
    {
      slug: 'polynomial',
      label: 'Polynomial',
      shortNav: 'Polynomial equations',
      title: 'Polynomial Equation Solver',
      formula: `$$a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 = 0$$`,
      blurb: `A **polynomial equation** is the general form $a_n x^n + \\dots + a_1 x + a_0 = 0$, where $n$ is any positive integer — linear and quadratic equations are the special cases $n = 1$ and $n = 2$. This solver handles degrees up to $4$. Linear and quadratic cases reuse their dedicated logic. For degrees $3$ and $4$, the solver applies the **rational root theorem** to enumerate every candidate $\\dfrac{p}{q}$ (where $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$), tests each by substitution, and uses **synthetic division** to factor each successful root out — leaving a polynomial of one degree less to recurse on. When no rational root exists, a Newton's-method fallback locates real irrational roots numerically. Special cases — equations that factor out a power of $x$, identities, contradictions — are recognized and reported separately.`,
      href: '/algebra/calculators/equations/polynomial'
    },
    {
      slug: 'rational',
      label: 'Rational',
      shortNav: 'Rational equations',
      title: 'Rational Equation Solver',
      formula: `$$\\dfrac{P(x)}{Q(x)} + \\dfrac{R(x)}{S(x)} = \\dots$$`,
      blurb: `A **rational equation** is one where the variable appears in a denominator — fractions whose tops or bottoms are polynomials in $x$, such as $\\dfrac{x+1}{x-2} = 3$. The solver first identifies every value of $x$ that makes any denominator zero; these are the **restricted values** that no solution may equal. It then computes the **least common denominator** across every fraction in the equation, multiplies both sides through by the LCD to clear all fractions, and solves the resulting polynomial equation (degrees $1$–$4$). Every candidate solution is then checked against the restricted set: any that would make a denominator zero is reported as **extraneous** and excluded from the final answer. Identities, contradictions, and the case where every candidate turns out to be extraneous are each labeled as their own step. Fractions are rendered in proper stacked form, not inline, so the structure stays readable while building.`,
      href: '/algebra/calculators/equations/rational'
    },
    {
      slug: 'radical',
      label: 'Radical',
      shortNav: 'Radical equations',
      title: 'Radical Equation Solver',
      formula: `$$\\sqrt[n]{P(x)} + \\dots = \\dots$$`,
      blurb: `A **radical equation** is one containing roots — square roots, cube roots, or higher-index roots — with the variable underneath, such as $\\sqrt{x + 3} = 5$ or $\\sqrt[3]{2x - 1} = 4$. The solver isolates the radical term on one side, then raises both sides to the appropriate power ($2$ for $\\sqrt{\\,}$, $3$ for $\\sqrt[3]{\\,}$, $n$ for $\\sqrt[n]{\\,}$) to eliminate it. The resulting linear or quadratic equation is solved with the corresponding routine. Because raising both sides to an even power can introduce false solutions, every candidate is substituted back into the original equation and verified; any that fail are reported as **extraneous** and discarded. Indices $2$, $3$, and arbitrary $n$ are all supported, including equations where the radical appears with a coefficient or inside a more complex expression.`,
      href: '/algebra/calculators/equations/radical'
    },
    {
      slug: 'exponential',
      label: 'Exponential',
      shortNav: 'Exponential equations',
      title: 'Exponential Equation Solver',
      formula: `$$a \\cdot b^{f(x)} + c = d$$`,
      blurb: `An **exponential equation** is one where the variable appears in an *exponent* rather than as a base — the unknown is the power something is raised to, such as $2^x = 32$ or $5 \\cdot 3^{x+1} = 45$. The solver isolates the exponential term first by performing whatever additions, subtractions, and divisions are needed to leave a single $b^{(\\dots)}$ on one side. It then attempts **base-matching**: if the right-hand side can be rewritten as a power of the same base $b$ (recognizing $8 = 2^3$ when working with $2^x$), the exponents are set equal directly, yielding an exact integer or rational solution. When base-matching is not possible, the solver applies the natural logarithm to both sides, uses the power rule $\\ln(b^x) = x \\ln(b)$ to bring the exponent down, and reduces the problem to a linear equation in $x$.`,
      href: '/algebra/calculators/equations/exponential'
    },
    {
      slug: 'logarithmic',
      label: 'Logarithmic',
      shortNav: 'Logarithmic equations',
      title: 'Logarithmic Equation Solver',
      formula: `$$\\log_b(P(x)) = c$$`,
      blurb: `A **logarithmic equation** is one containing logarithms — the inverse of exponentials — with the variable inside the log argument, such as $\\log_2(x + 1) = 5$ or $\\ln(3x) = 2$. Two cases are recognized. When both sides are logs of the same base, $\\log_b(A) = \\log_b(B)$, the **equal-logarithms property** applies: the arguments must be equal, so the equation reduces directly to $A = B$ and is solved as a standard algebraic equation. When only one side is a log and the other is a number or expression, the solver isolates the log first, then converts to exponential form using the inverse relationship $\\log_b(A) = c \\iff A = b^c$, and solves the resulting equation. Domain restrictions on the original log arguments are kept in mind throughout — logarithms are only defined for positive inputs.`,
      href: '/algebra/calculators/equations/logarithmic'
    },
    {
      slug: 'absolute-value',
      label: 'Absolute Value',
      shortNav: 'Absolute value equations',
      title: 'Absolute Value Equation Solver',
      formula: `$$|ax + b| = c$$`,
      blurb: `An **absolute value equation** is one containing the $|\\cdot|$ bars around an expression. The absolute value of a number is its distance from zero on the number line, so $|{-5}| = 5$ and $|5| = 5$ — the bars strip away the sign. The solver isolates the absolute value term first, then handles the special cases up front: if the right side equals $0$ there is one solution where the inside equals $0$; if the right side is negative there is no solution at all (since $|\\cdot| \\geq 0$ always). For the general case $|A| = c$ with $c > 0$, the equation splits into two sub-equations — $A = c$ (interior positive) and $A = -c$ (interior negative) — each solved independently. The variant $|A| = |B|$ where both sides are absolute values is also supported, with $A = B$ and $A = -B$ branches.`,
      href: '/algebra/calculators/equations/absolute-value'
    },
    {
      slug: 'literal',
      label: 'Literal',
      shortNav: 'Literal equations',
      title: 'Literal Equation Solver',
      formula: `$$F(a,\\ b,\\ c,\\ \\dots) = 0$$`,
      blurb: `A **literal equation** is a formula with several letters in it where you solve for *one* of the letters in terms of the others — like rearranging $A = \\pi r^2$ to get $r = \\sqrt{A / \\pi}$, or solving $F = ma$ for $a = F/m$. These are the equations that appear in physics, geometry, and finance, where multiple quantities relate to each other by a fixed formula. The solver auto-detects every variable in the expression and presents them as buttons, letting you pick which one to solve for. The equation is then decomposed symbolically into the form $(\\text{coefficient}) \\cdot (\\text{target}) + (\\text{constant})$, where the coefficient and constant are themselves symbolic expressions in the remaining letters. The two sides are manipulated to isolate the target, returning a closed-form symbolic answer rather than a number.`,
      href: '/algebra/calculators/equations/literal'
    }
  ]

  // ---------------------------------------------------------------
  // LAYOUT ARCHITECTURE
  // ---------------------------------------------------------------
  // The whole page (intro, header nav, cards) lives inside a single
  // centered column (`contentColumn`) with a fixed maxWidth and
  // margin: 0 auto. That column is `position: relative`.
  //
  // The sidebar is `position: absolute` inside that column with a
  // negative `left` offset — so it hangs off the column's left edge
  // by exactly (sidebar width + gap), regardless of viewport size,
  // scrollbar width, or browser. The sidebar is anchored to the
  // CARDS COLUMN, not to the viewport.
  //
  // An inner sticky child handles the "stays visible on scroll"
  // behavior: the absolute outer shell pins horizontal position;
  // the sticky inner child pins vertical position during scroll.
  //
  // Because the sidebar is positioned RELATIVE TO THE COLUMN, the
  // breakpoint for hiding it is geometrically meaningful: hide the
  // sidebar when the viewport gets narrower than (column width +
  // 2 * (sidebar width + gap)).
  // ---------------------------------------------------------------

  const COLUMN_WIDTH = 1180   // centered content column
  const SIDEBAR_WIDTH = 190   // sidebar
  const SIDEBAR_GAP = 30      // gap between sidebar right edge and column left edge
  // Hide sidebar below this viewport width — geometric, not guessed:
  const HIDE_BREAKPOINT = COLUMN_WIDTH + 2 * (SIDEBAR_WIDTH + SIDEBAR_GAP)
  // = 1180 + 2*(190+30) = 1620

  const styles = {
    // The single centered column. Everything (intro, nav, cards,
    // sidebar) is anchored to this. position:relative so the
    // absolutely positioned sidebar is anchored here, not to the
    // viewport.
    contentColumn: {
      position: 'relative',
      maxWidth: `${COLUMN_WIDTH}px`,
      margin: '0 auto',
      padding: '0 20px',
    },

    // Sidebar outer shell — absolute, anchored to the column's left
    // edge with a negative offset. Vertical position relative to the
    // top of the column (where the intro strip starts).
    sidebarShell: {
      position: 'absolute',
      top: '60px',
      left: `-${SIDEBAR_WIDTH + SIDEBAR_GAP}px`,
      width: `${SIDEBAR_WIDTH}px`,
      // The shell itself spans the full height of the column, so the
      // sticky child inside has room to track scroll within it.
      height: '100%',
    },

    // Sticky child inside the shell — handles the "stays put on
    // scroll" behavior without participating in any grid.
    sidebarSticky: {
      position: 'sticky',
      top: '54px',
      background: '#ffffff',
      border: '1px solid #d8e1ec',
      borderRadius: '8px',
      padding: '18px 16px',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
      maxHeight: 'calc(100vh - 48px)',
      overflowY: 'auto',
    },

    sidebarTitle: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11.5px',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: '#6b7a8f',
      fontWeight: 600,
      margin: '0 0 12px',
      paddingBottom: '10px',
      borderBottom: '1px solid #ecf1f7',
    },
    sidebarList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    sidebarLink: {
      display: 'block',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      fontSize: '14px',
      color: '#3a4a5e',
      padding: '7px 10px',
      borderRadius: '5px',
      textDecoration: 'none',
      borderLeft: '3px solid transparent',
      marginBottom: '1px',
    },

    // Intro strip — full width of the column
    introStrip: {
      background: 'linear-gradient(to right, #f1f7fd 0%, #e8f1fa 100%)',
      border: '1px solid #c8d9ec',
      borderLeft: '3px solid #2c5d99',
      borderRadius: '8px',
      padding: '14px 20px',
      margin: '0 0 26px',
      color: '#143a66',
      fontSize: '15px',
      lineHeight: 1.6,
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
    },

    // Header nav — full width of the column
    headerNav: {
      background: '#ffffff',
      border: '1px solid #d8e1ec',
      borderRadius: '8px',
      padding: '14px 18px',
      margin: '0 0 28px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
    },
    headerNavLabel: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11.5px',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: '#6b7a8f',
      fontWeight: 600,
      marginRight: '6px',
    },
    headerNavLink: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '13px',
      color: '#2c5d99',
      background: '#f1f7fd',
      border: '1px solid #c8d9ec',
      borderRadius: '999px',
      padding: '5px 13px',
      textDecoration: 'none',
      fontWeight: 500,
    },

    // Cards grid — full width of the column, no margin/maxWidth
    // because the column already handles centering
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '28px',
      margin: '40px 0',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #d8e1ec',
      borderRadius: '10px',
      padding: '30px 28px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      scrollMarginTop: '24px',
    },
    label: {
      fontSize: '12px',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
      color: '#6b7a8f',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontWeight: 600,
      marginBottom: '6px',
    },
    title: {
      fontSize: '22px',
      fontWeight: 600,
      color: '#143a66',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      marginBottom: '16px',
      lineHeight: 1.25,
    },
    formulaBlock: {
      background: 'linear-gradient(to right, #f1f7fd 0%, #e8f1fa 100%)',
      border: '1px solid #c8d9ec',
      borderLeft: '3px solid #2c5d99',
      borderRadius: '6px',
      padding: '20px 22px',
      margin: '0 0 20px 0',
      textAlign: 'center',
      fontSize: '22px',
      color: '#143a66',
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
    blurb: {
      fontSize: '17px',
      color: '#3a4a5e',
      lineHeight: 1.65,
      marginBottom: '22px',
      flex: '1 1 auto',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
    },
    primaryAction: {
      display: 'inline-block',
      padding: '12px 20px',
      background: '#2c5d99',
      color: '#ffffff',
      borderRadius: '6px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      letterSpacing: '0.3px',
      marginTop: 'auto',
    },
  }

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

  <style>{`
    .equations-formula-block::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    .equations-header-nav-link:hover {
      background: #2c5d99 !important;
      color: #ffffff !important;
      border-color: #2c5d99 !important;
    }
    .equations-sidebar-link:hover {
      background: #f1f7fd !important;
      color: #143a66 !important;
      border-left-color: #2c5d99 !important;
    }
    /* Geometric breakpoint: column (${COLUMN_WIDTH}) +
       2 * (sidebar ${SIDEBAR_WIDTH} + gap ${SIDEBAR_GAP}) = ${HIDE_BREAKPOINT}.
       Below that, the sidebar would be clipped by the viewport edge. */
    @media (max-width: ${HIDE_BREAKPOINT}px) {
      .equations-sidebar-shell {
        display: none !important;
      }
    }
    @media (max-width: 760px) {
      .equations-cards-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `}</style>
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Algebra Equation Solvers</h1>
   <br/>

   {/* CENTERED CONTENT COLUMN — single anchor for everything below.
       position:relative so the sidebar (absolute) is positioned
       relative to THIS column's edges, not the viewport's. */}
   <div style={styles.contentColumn}>

     {/* SIDEBAR — absolute outer shell anchored to the column's
         left edge with a negative offset. Hidden via CSS below
         the geometric breakpoint. */}
     <aside
       className="equations-sidebar-shell"
       style={styles.sidebarShell}
       aria-label="On this page"
     >
       <div style={styles.sidebarSticky}>
         <h3 style={styles.sidebarTitle}>On this page</h3>
         <ul style={styles.sidebarList}>
           {cards.map((c) => (
             <li key={c.slug}>
               <a
                 href={`#card-${c.slug}`}
                 className="equations-sidebar-link"
                 style={styles.sidebarLink}
               >
                 {c.shortNav}
               </a>
             </li>
           ))}
         </ul>
       </div>
     </aside>

     {/* INTRO STRIP */}
     <div style={styles.introStrip}>
       {processContent(introContent.content)}
     </div>

     {/* HEADER NAV */}
     <nav style={styles.headerNav} aria-label="Quick navigation">
       <span style={styles.headerNavLabel}>Jump to:</span>
       {cards.map((c) => (
         <a
           key={c.slug}
           href={`#card-${c.slug}`}
           className="equations-header-nav-link"
           style={styles.headerNavLink}
         >
           {c.label}
         </a>
       ))}
     </nav>

     {/* CARDS */}
     <div className="equations-cards-grid" style={styles.cardsGrid}>
       {cards.map((c) => (
         <article key={c.slug} id={`card-${c.slug}`} style={styles.card}>
           <div style={styles.label}>{c.label}</div>
           <div style={styles.title}>{c.title}</div>
           <div className="equations-formula-block" style={styles.formulaBlock}>
             {processContent(c.formula)}
           </div>
           <div style={styles.blurb}>
             {processContent(c.blurb)}
           </div>
           <Link href={c.href} style={styles.primaryAction}>
             Open solver &rarr;
           </Link>
         </article>
       ))}
     </div>

   </div>

   {/* <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   /> */}
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
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   {/* <Sections sections={genericSections.slice(1)}/> */}
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}