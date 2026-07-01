// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import '../../../../math-app/pages/pages.css'
// import GenericTable from '@/app/components/generic-table/GenericTable'
// import Head from 'next/head'
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//     const keyWords=['standard angles','common angles','special angles','reference angles',
        
//         'trigonometry tables','trigonometric functions','trigonometry','trigonometric functions table',
    
//     ]

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }



//     const trigoTableData = {
//  tableTitle: "Main Trigonometric Functions",
//  rows: [
//    {
//      angle_degrees: "0°",
//      angle_radians: "0",
//      sin: "0",
//      cos: "1", 
//      tan: "0",
//      csc: "Undefined",
//      sec: "1",
//      cot: "Undefined"
//    },
//    {
//      angle_degrees: "30°",
//      angle_radians: "π/6",
//      sin: "1/2",
//      cos: "√3/2",
//      tan: "√3/3",
//      csc: "2",
//      sec: "2√3/3", 
//      cot: "√3"
//    },
//    {
//      angle_degrees: "45°", 
//      angle_radians: "π/4",
//      sin: "√2/2",
//      cos: "√2/2",
//      tan: "1",
//      csc: "√2",
//      sec: "√2",
//      cot: "1"
//    },
//    {
//      angle_degrees: "60°",
//      angle_radians: "π/3", 
//      sin: "√3/2",
//      cos: "1/2",
//      tan: "√3",
//      csc: "2√3/3",
//      sec: "2",
//      cot: "√3/3"
//    },
//    {
//      angle_degrees: "90°",
//      angle_radians: "π/2",
//      sin: "1",
//      cos: "0",
//      tan: "Undefined",
//      csc: "1", 
//      sec: "Undefined",
//      cot: "0"
//    },
//    {
//      angle_degrees: "120°",
//      angle_radians: "2π/3",
//      sin: "√3/2",
//      cos: "-1/2",
//      tan: "-√3",
//      csc: "2√3/3",
//      sec: "-2",
//      cot: "-√3/3"
//    },
//    {
//      angle_degrees: "135°",
//      angle_radians: "3π/4", 
//      sin: "√2/2",
//      cos: "-√2/2",
//      tan: "-1",
//      csc: "√2",
//      sec: "-√2",
//      cot: "-1"
//    },
//    {
//      angle_degrees: "150°",
//      angle_radians: "5π/6",
//      sin: "1/2", 
//      cos: "-√3/2",
//      tan: "-√3/3",
//      csc: "2",
//      sec: "-2√3/3",
//      cot: "-√3"
//    },
//    {
//      angle_degrees: "180°",
//      angle_radians: "π",
//      sin: "0",
//      cos: "-1",
//      tan: "0",
//      csc: "Undefined",
//      sec: "-1",
//      cot: "Undefined"
//    },
//    {
//      angle_degrees: "210°",
//      angle_radians: "7π/6",
//      sin: "-1/2",
//      cos: "-√3/2", 
//      tan: "√3/3",
//      csc: "-2",
//      sec: "-2√3/3",
//      cot: "√3"
//    },
//    {
//      angle_degrees: "225°",
//      angle_radians: "5π/4",
//      sin: "-√2/2",
//      cos: "-√2/2",
//      tan: "1",
//      csc: "-√2",
//      sec: "-√2",
//      cot: "1"
//    },
//    {
//      angle_degrees: "240°", 
//      angle_radians: "4π/3",
//      sin: "-√3/2",
//      cos: "-1/2",
//      tan: "√3",
//      csc: "-2√3/3",
//      sec: "-2",
//      cot: "√3/3"
//    },
//    {
//      angle_degrees: "270°",
//      angle_radians: "3π/2",
//      sin: "-1",
//      cos: "0",
//      tan: "Undefined",
//      csc: "-1",
//      sec: "Undefined", 
//      cot: "0"
//    },
//    {
//      angle_degrees: "300°",
//      angle_radians: "5π/3",
//      sin: "-√3/2",
//      cos: "1/2",
//      tan: "-√3",
//      csc: "-2√3/3",
//      sec: "2",
//      cot: "-√3/3"
//    },
//    {
//      angle_degrees: "315°",
//      angle_radians: "7π/4",
//      sin: "-√2/2",
//      cos: "√2/2", 
//      tan: "-1",
//      csc: "-√2",
//      sec: "√2",
//      cot: "-1"
//    },
//    {
//      angle_degrees: "330°",
//      angle_radians: "11π/6",
//      sin: "-1/2",
//      cos: "√3/2",
//      tan: "-√3/3",
//      csc: "-2",
//      sec: "2√3/3",
//      cot: "-√3"
//    },
//    {
//      angle_degrees: "360°",
//      angle_radians: "2π",
//      sin: "0",
//      cos: "1",
//      tan: "0",
//      csc: "Undefined",
//      sec: "1", 
//      cot: "Undefined"
//    }
//  ]
// };


// const navigationGroups = [
//   {
//     title: "Other Trigonometric Tables",
//     items: [
//       // { title: "Special Angles", link: "/tables/trigonometry/special-angles" },
//       { title: "Inverse Trigonometric Functions", link: "/tables/trigonometry/inverse" },
//       { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
      
//       { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
//       { title: "Double Angle Formulas", link: "/tables/trigonometry/double-angle" },
//       { title: "Triple Angle Formulas", link: "/tables/trigonometry/triple-angle" },
//        { title: "Sum of Angles Formulas", link: "/tables/trigonometry/sum-angle" },
//         { title: "Difference of Angles Formulas", link: "/tables/trigonometry/difference-angle" },
//          { title: "Negative Angle Formulas (Even-Odd Identities)", link: "/tables/trigonometry/negative-angle" },
//       { title: "Complement Angle Formulas", link: "/tables/trigonometry/complement-angle" },  
//       { title: "Supplement Angle Formulas", link: "/tables/trigonometry/supplement-angle" },  
      

//     ]
//   },
//   {
//         title:"Relevant tools",
//         items:[
//             {title:"Interactive Unit Circle",link:"/visual-tools/unit-circle"},
//             {title:"Trigonometry Calculator",link:"/calculators/trigonometry-calculator"},
//             {title:"Angle Converter",link:"/converters/degree-radians"},
//         ]
//     },
//      {
//         title:"Related pages",
//         items:[
//             {title:"Trigonometry",link:"/trigonometry"},
//             {title:"Trigonometric Identities",link:"/trigonometry/identities"},
//             {title:"Math Symbols used in Trigonometry",link:"/math-symbols/trigonometry"},
//         ]
//     }
// ]


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          trigoTableData,
//          seoData: {
//       title: "Special Angles Trigonometry Table - Standard Values | Learn Math Class",
//       description: "Complete trigonometry table for special angles (0°, 30°, 45°, 60°, 90°) with exact values for sin, cos, tan, csc, sec, and cot functions.",
//       keywords: keyWords.join(", "),
//       url: "/tables/special-angles",
//       name: "Special Angles Trigonometry Table"
//     },
//     keyWords,
//     navigationGroups,
        
//        }
//     }
//    }
// export default function PageTemplate({ seoData, sectionsContent, introContent, 
//   trigoTableData, keyWords ,navigationGroups }) {

//      const navLinks = [
//     { title: 'Home', href: '/' },
//     { title: 'About', href: '/about' },
//     { title: 'Services', href: '/services' },
//     { title: 'Contact', href: '/contact' }
//   ];

//   const sidebarLinks = [
//     { title: 'Dashboard', href: '/dashboard', icon: '📊' },
//     { title: 'Projects', href: '/projects', icon: '📁' },
//     { title: 'Settings', href: '/settings', icon: '⚙️' }
//   ];


    
//   const genericSections=[
//     {
//         id:'1',
//         title:'section1',
//         link:'',
//         content:''
//     },
//     {
//         id:'2',
//         title:'section2',
//         link:'',
//         content:''
//     },
//     {
//         id:'',
//         title:'',
//         link:'',
//         content:''
//     }
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Special Angles</h1>
//    <br/>
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: '15% 80%',
//       gap: '20px',
//       width: '100%'
//    }}>
//       {/* Left column - Sidebar */}
//       <div>
//          <VerticalButtonGroup 
//             items={navigationGroups}
//             width="250px"       
//             theme='lightBlue'
//             isSticky={true}
//             verticalOffset='60px'
//          />
//       </div>

//       {/* Right column - Table */}
//       <div>
//          <div style={{width:'90%',margin:'auto'}}>
//             <GenericTable tableData={trigoTableData}
//                cellFontSize={'16px'}
//                headerFontSize={'18px'}
//                theme='lightBlue'
//             />
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
          
            
//          </div>
//       </div>
//    </div>
//   {/* <VerticalButtonGroup 
      
//       items={navigationGroups}
//       width="250px"       
//     //   backgroundColor ='#0070f3'
//     //   color = 'white'
//       isSticky={true}
//       verticalOffset='220px'
//       theme='lightBlue'
//       />
//     <div style={{width:'70%',margin:'auto'}}>
//         <GenericTable tableData={trigoTableData}
//         cellFontSize={'16px'}
//         headerFontSize={'18px'}
//         theme='lightBlue'
//         />
       
//         </div> */}
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#34383c"
//         /> */}
//    <br/>
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import '../../../../math-app/pages/pages.css'
// import GenericTable from '@/app/components/generic-table/GenericTable'
// import Head from 'next/head'
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//     const keyWords = [
//       'special angles trigonometry table',
//       'special angles',
//       'standard angles trig',
//       'common angles trigonometry',
//       'reference angles table',
//       'exact trig values',
//       'unit circle values table',
//       'sin cos tan table',
//       'csc sec cot table',
//       'trigonometric functions table',
//       'pi/6 pi/4 pi/3 values',
//       '30 45 60 90 degrees trig',
//       'trigonometry chart',
//       'trig table radians',
//       'six trig functions table'
//     ]

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }



//     const trigoTableData = {
//  tableTitle: "Main Trigonometric Functions",
//  rows: [
//    {
//      angle_degrees: "0°",
//      angle_radians: "0",
//      sin: "0",
//      cos: "1", 
//      tan: "0",
//      csc: "Undefined",
//      sec: "1",
//      cot: "Undefined"
//    },
//    {
//      angle_degrees: "30°",
//      angle_radians: "π/6",
//      sin: "1/2",
//      cos: "√3/2",
//      tan: "√3/3",
//      csc: "2",
//      sec: "2√3/3", 
//      cot: "√3"
//    },
//    {
//      angle_degrees: "45°", 
//      angle_radians: "π/4",
//      sin: "√2/2",
//      cos: "√2/2",
//      tan: "1",
//      csc: "√2",
//      sec: "√2",
//      cot: "1"
//    },
//    {
//      angle_degrees: "60°",
//      angle_radians: "π/3", 
//      sin: "√3/2",
//      cos: "1/2",
//      tan: "√3",
//      csc: "2√3/3",
//      sec: "2",
//      cot: "√3/3"
//    },
//    {
//      angle_degrees: "90°",
//      angle_radians: "π/2",
//      sin: "1",
//      cos: "0",
//      tan: "Undefined",
//      csc: "1", 
//      sec: "Undefined",
//      cot: "0"
//    },
//    {
//      angle_degrees: "120°",
//      angle_radians: "2π/3",
//      sin: "√3/2",
//      cos: "-1/2",
//      tan: "-√3",
//      csc: "2√3/3",
//      sec: "-2",
//      cot: "-√3/3"
//    },
//    {
//      angle_degrees: "135°",
//      angle_radians: "3π/4", 
//      sin: "√2/2",
//      cos: "-√2/2",
//      tan: "-1",
//      csc: "√2",
//      sec: "-√2",
//      cot: "-1"
//    },
//    {
//      angle_degrees: "150°",
//      angle_radians: "5π/6",
//      sin: "1/2", 
//      cos: "-√3/2",
//      tan: "-√3/3",
//      csc: "2",
//      sec: "-2√3/3",
//      cot: "-√3"
//    },
//    {
//      angle_degrees: "180°",
//      angle_radians: "π",
//      sin: "0",
//      cos: "-1",
//      tan: "0",
//      csc: "Undefined",
//      sec: "-1",
//      cot: "Undefined"
//    },
//    {
//      angle_degrees: "210°",
//      angle_radians: "7π/6",
//      sin: "-1/2",
//      cos: "-√3/2", 
//      tan: "√3/3",
//      csc: "-2",
//      sec: "-2√3/3",
//      cot: "√3"
//    },
//    {
//      angle_degrees: "225°",
//      angle_radians: "5π/4",
//      sin: "-√2/2",
//      cos: "-√2/2",
//      tan: "1",
//      csc: "-√2",
//      sec: "-√2",
//      cot: "1"
//    },
//    {
//      angle_degrees: "240°", 
//      angle_radians: "4π/3",
//      sin: "-√3/2",
//      cos: "-1/2",
//      tan: "√3",
//      csc: "-2√3/3",
//      sec: "-2",
//      cot: "√3/3"
//    },
//    {
//      angle_degrees: "270°",
//      angle_radians: "3π/2",
//      sin: "-1",
//      cos: "0",
//      tan: "Undefined",
//      csc: "-1",
//      sec: "Undefined", 
//      cot: "0"
//    },
//    {
//      angle_degrees: "300°",
//      angle_radians: "5π/3",
//      sin: "-√3/2",
//      cos: "1/2",
//      tan: "-√3",
//      csc: "-2√3/3",
//      sec: "2",
//      cot: "-√3/3"
//    },
//    {
//      angle_degrees: "315°",
//      angle_radians: "7π/4",
//      sin: "-√2/2",
//      cos: "√2/2", 
//      tan: "-1",
//      csc: "-√2",
//      sec: "√2",
//      cot: "-1"
//    },
//    {
//      angle_degrees: "330°",
//      angle_radians: "11π/6",
//      sin: "-1/2",
//      cos: "√3/2",
//      tan: "-√3/3",
//      csc: "-2",
//      sec: "2√3/3",
//      cot: "-√3"
//    },
//    {
//      angle_degrees: "360°",
//      angle_radians: "2π",
//      sin: "0",
//      cos: "1",
//      tan: "0",
//      csc: "Undefined",
//      sec: "1", 
//      cot: "Undefined"
//    }
//  ]
// };


// const navigationGroups = [
//   {
//     title: "Other Trigonometric Tables",
//     items: [
//       // { title: "Special Angles", link: "/tables/trigonometry/special-angles" },
//       { title: "Inverse Trigonometric Functions", link: "/tables/trigonometry/inverse" },
//       { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
      
//       { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
//       { title: "Double Angle Formulas", link: "/tables/trigonometry/double-angle" },
//       { title: "Triple Angle Formulas", link: "/tables/trigonometry/triple-angle" },
//        { title: "Sum of Angles Formulas", link: "/tables/trigonometry/sum-angle" },
//         { title: "Difference of Angles Formulas", link: "/tables/trigonometry/difference-angle" },
//          { title: "Negative Angle Formulas (Even-Odd Identities)", link: "/tables/trigonometry/negative-angle" },
//       { title: "Complement Angle Formulas", link: "/tables/trigonometry/complement-angle" },  
//       { title: "Supplement Angle Formulas", link: "/tables/trigonometry/supplement-angle" },  
      

//     ]
//   },
//   {
//         title:"Relevant tools",
//         items:[
//             {title:"Interactive Unit Circle",link:"/visual-tools/unit-circle"},
//             {title:"Trigonometry Calculator",link:"/calculators/trigonometry-calculator"},
//             {title:"Angle Converter",link:"/converters/degree-radians"},
//         ]
//     },
//      {
//         title:"Related pages",
//         items:[
//             {title:"Trigonometry",link:"/trigonometry"},
//             {title:"Trigonometric Identities",link:"/trigonometry/identities"},
//             {title:"Math Symbols used in Trigonometry",link:"/math-symbols/trigonometry"},
//         ]
//     }
// ]


//     const faqQuestions = {
//       obj1: {
//         question: "What are special angles in trigonometry?",
//         answer: "Special angles are the standard angles whose trig values can be expressed exactly as fractions or surds rather than as irrational decimals. In the first quadrant the special angles are 0, 30, 45, 60, and 90 degrees (or 0, pi over 6, pi over 4, pi over 3, and pi over 2 radians). Extending around the full unit circle adds their reflections in the other three quadrants, giving 17 standard angles in total from 0 to 360 degrees."
//       },
//       obj2: {
//         question: "Why do special angles have exact values?",
//         answer: "These angles correspond to symmetric points on the unit circle that come from elementary right triangles: the 45-45-90 isosceles right triangle gives the values at 45 degrees, and the 30-60-90 triangle (half of an equilateral) gives the values at 30 and 60 degrees. The angles 0, 90, 180, 270, and 360 degrees give 0 and 1 directly from the coordinate axes. Every other angle in this table is a reflection of these base cases across the x-axis, y-axis, or origin."
//       },
//       obj3: {
//         question: "How do I read the table?",
//         answer: "Each row corresponds to one angle, given in both degrees and radians. The remaining six columns give the exact value of each of the six trig functions: sine, cosine, tangent, cosecant, secant, and cotangent. Values appear as fractions and surds (such as 1/2, root 2 over 2, root 3 over 2, and 2 root 3 over 3) rather than decimal approximations. Cells marked Undefined indicate where the function diverges to infinity."
//       },
//       obj4: {
//         question: "Why is tangent undefined at 90 degrees?",
//         answer: "Tangent equals sine divided by cosine. At 90 degrees, cosine equals 0, so the ratio sin(90 degrees) divided by cos(90 degrees) is 1 divided by 0, which is undefined. The same logic applies to secant at 90 degrees (also 1 over cos), and to cosecant and cotangent at 0 and 180 degrees (each involves a division by sin, which is 0 there)."
//       },
//       obj5: {
//         question: "How do degrees and radians relate?",
//         answer: "Radians measure angles by arc length on the unit circle: a full revolution is 2 pi radians, which equals 360 degrees. So pi radians equals 180 degrees, and pi over 2 radians equals 90 degrees. The conversion factors are: degrees equal radians times 180 over pi, and radians equal degrees times pi over 180. The table shows both columns so you can read off values directly in either convention."
//       }
//     }


//     const schemas = {
//       webApplication: {
//         "@context": "https://schema.org",
//         "@type": "WebApplication",
//         "name": "Special Angles Trigonometry Table",
//         "description": "Exact trig values at 17 special angles around the unit circle from 0 to 360 degrees, for all six functions: sin, cos, tan, csc, sec, and cot.",
//         "url": "https://www.learnmathclass.com/tables/special-angles",
//         "applicationCategory": "EducationalApplication",
//         "operatingSystem": "Any",
//         "offers": {
//           "@type": "Offer",
//           "price": "0",
//           "priceCurrency": "USD"
//         },
//         "featureList": [
//           "Reference table covering 17 standard angles around the full unit circle: 0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, and 360 degrees",
//           "Each angle shown in both degrees and radians (0, pi/6, pi/4, pi/3, pi/2, 2pi/3, 3pi/4, 5pi/6, pi, 7pi/6, 5pi/4, 4pi/3, 3pi/2, 5pi/3, 7pi/4, 11pi/6, 2pi)",
//           "Exact values for all six trigonometric functions: sine, cosine, tangent, cosecant, secant, and cotangent",
//           "Values given as exact fractions and surds (1/2, root 2 over 2, root 3 over 2, root 3 over 3, 2 root 3 over 3) — no decimal approximations",
//           "Undefined cells marked explicitly where the function diverges (tan and sec at 90 and 270 degrees; csc and cot at 0, 180, and 360 degrees)",
//           "Sticky sidebar with quick links to companion trig tables: inverse, reduction formulas, half/double/triple angle, sum/difference of angles, and negative/complement/supplement angle",
//           "Cross-links to related tools: interactive unit circle visualizer, trigonometry calculator, and degree-to-radian converter"
//         ],
//         "author": {
//           "@type": "Organization",
//           "name": "Learn Math Class"
//         },
//         "datePublished": "2024-01-15",
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "isAccessibleForFree": true,
//         "learningResourceType": "Reference Table",
//         "educationalLevel": "High School, College",
//         "keywords": keyWords.join(", ")
//       },

//       breadcrumb: {
//         "@context": "https://schema.org",
//         "@type": "BreadcrumbList",
//         "itemListElement": [
//           {
//             "@type": "ListItem",
//             "position": 1,
//             "name": "Home",
//             "item": "https://www.learnmathclass.com"
//           },
//           {
//             "@type": "ListItem",
//             "position": 2,
//             "name": "Tables",
//             "item": "https://www.learnmathclass.com/tables"
//           },
//           {
//             "@type": "ListItem",
//             "position": 3,
//             "name": "Special Angles",
//             "item": "https://www.learnmathclass.com/tables/special-angles"
//           }
//         ]
//       },

//       faq: {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         "mainEntity": Object.keys(faqQuestions).map(key => ({
//           "@type": "Question",
//           "name": faqQuestions[key].question,
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": faqQuestions[key].answer
//           }
//         }))
//       }
//     }


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          trigoTableData,
//          faqQuestions,
//          schemas,
//          seoData: {
//       title: "Special Angles Trig Table - Exact Values | Learn Math Class",
//       description: "Special angles trig table with exact values at 17 angles from 0° to 360° (0, π/6, π/4, π/3, π/2 and beyond) — sin, cos, tan, csc, sec, cot. Unit circle covered.",
//       keywords: keyWords.join(", "),
//       url: "/tables/special-angles",
//       name: "Special Angles Trigonometry Table",
//       hubDescription: "Reference table of exact trigonometric values at 17 special angles spanning the full unit circle from 0° to 360° — including 0, π/6, π/4, π/3, π/2 and their reflections in every quadrant. Each row gives the angle in degrees and radians, plus exact values (fractions and surds) for sin, cos, tan, csc, sec, and cot.",
//       category: "Trigonometry",
//       subCategory: ""
//     },
//     keyWords,
//     navigationGroups,
        
//        }
//     }
//    }
// export default function PageTemplate({ seoData, sectionsContent, introContent, 
//   trigoTableData, keyWords ,navigationGroups, faqQuestions, schemas }) {

//      const navLinks = [
//     { title: 'Home', href: '/' },
//     { title: 'About', href: '/about' },
//     { title: 'Services', href: '/services' },
//     { title: 'Contact', href: '/contact' }
//   ];

//   const sidebarLinks = [
//     { title: 'Dashboard', href: '/dashboard', icon: '📊' },
//     { title: 'Projects', href: '/projects', icon: '📁' },
//     { title: 'Settings', href: '/settings', icon: '⚙️' }
//   ];


    
//   const genericSections=[
//     {
//         id:'1',
//         title:'section1',
//         link:'',
//         content:''
//     },
//     {
//         id:'2',
//         title:'section2',
//         link:'',
//         content:''
//     },
//     {
//         id:'',
//         title:'',
//         link:'',
//         content:''
//     }
// ]

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
//       __html: JSON.stringify(schemas.webApplication)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Special Angles</h1>
//    <br/>
//     {/* <div style={{
//       display: 'grid',
//       gridTemplateColumns: '15% 80%',
//       gap: '20px',
//       width: '100%'
//    }}> */}
//       {/* Left column - Sidebar */}
//       {/* <div>
//          <VerticalButtonGroup 
//             items={navigationGroups}
//             width="250px"       
//             theme='lightBlue'
//             isSticky={true}
//             verticalOffset='60px'
//          />
//       </div> */}

//       {/* Right column - Table */}
//       {/* <div> */}
//          {/* <div style={{width:'90%',margin:'auto'}}> */}
//          <div  style={{width:'90%',margin:'auto'}}>
//             <GenericTable tableData={trigoTableData}
//                cellFontSize={'16px'}
//                headerFontSize={'18px'}
//                theme='lightBlue'
//             />
//             </div>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
          
            
//          {/* </div>
//       </div>
//    </div> */}
//   {/* <VerticalButtonGroup 
      
//       items={navigationGroups}
//       width="250px"       
//     //   backgroundColor ='#0070f3'
//     //   color = 'white'
//       isSticky={true}
//       verticalOffset='220px'
//       theme='lightBlue'
//       />
//     <div style={{width:'70%',margin:'auto'}}>
//         <GenericTable tableData={trigoTableData}
//         cellFontSize={'16px'}
//         headerFontSize={'18px'}
//         theme='lightBlue'
//         />
       
//         </div> */}
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#34383c"
//         /> */}
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../math-app/pages/pages.css'
import GenericTable from '@/app/components/generic-table/GenericTable'
import Head from 'next/head'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

    const keyWords = [
      'special angles trigonometry table',
      'special angles',
      'standard angles trig',
      'common angles trigonometry',
      'reference angles table',
      'exact trig values',
      'unit circle values table',
      'sin cos tan table',
      'csc sec cot table',
      'trigonometric functions table',
      'pi/6 pi/4 pi/3 values',
      '30 45 60 90 degrees trig',
      'trigonometry chart',
      'trig table radians',
      'six trig functions table'
    ]

    const sectionsContent = {

      obj1: {
        title: `How to Read the Table`,
        content: `The table lists 17 standard angles around the unit circle. Each row gives one angle in two unit systems and the exact values of all six trigonometric functions at that angle.

**Column structure:**

• **Angle (degrees)** — angle in degrees from $0°$ to $360°$
• **Angle (radians)** — the same angle written as a multiple of $\\pi$
• **sin, cos, tan** — the three primary trig functions
• **csc, sec, cot** — the three reciprocal functions

Values are written as exact fractions and surds, never decimals. For example, $\\sin(60°) = \\frac{\\sqrt{3}}{2}$, not $0.866\\ldots$ Cells marked **Undefined** indicate where the function diverges to infinity — this happens for $\\tan$ and $\\sec$ at $90°$ and $270°$, and for $\\csc$ and $\\cot$ at $0°$, $180°$, and $360°$.`,
        before: ``,
        after: ``,
        link: '',
      },

      obj2: {
        title: `What Makes These Angles Special`,
        content: `These 17 angles are called **special angles** because their trig values can be written exactly using small integers and the surds $\\sqrt{2}$ and $\\sqrt{3}$ — no decimal approximations required. Every other angle on the unit circle has irrational trig values that cannot be expressed in such closed form.

The first-quadrant special angles are $0°, 30°, 45°, 60°,$ and $90°$ (or $0, \\tfrac{\\pi}{6}, \\tfrac{\\pi}{4}, \\tfrac{\\pi}{3}, \\tfrac{\\pi}{2}$ in radians). The remaining 12 entries are reflections of these across the $x$-axis, $y$-axis, and origin, producing the full set covering all four quadrants.

The exact values come from two elementary right triangles. The **45-45-90 isosceles right triangle** with legs of length $1$ has hypotenuse $\\sqrt{2}$, giving the values at $45°$. The **30-60-90 triangle** — half of an equilateral triangle, with sides $1, \\sqrt{3}, 2$ — gives the values at $30°$ and $60°$. The remaining angles $0°, 90°, 180°, 270°,$ and $360°$ come directly from points on the coordinate axes.`,
        before: ``,
        after: ``,
        link: '',
      },

      obj3: {
        title: `Deriving the Values from the Unit Circle`,
        content: `On the unit circle, a point at angle $\\theta$ measured counterclockwise from the positive $x$-axis has coordinates $(\\cos\\theta, \\sin\\theta)$. This single fact connects every entry in the table to a geometric position on the circle.

**First-quadrant** values come from the two right triangles described above. **Other-quadrant** values inherit those magnitudes with sign changes determined by the quadrant:

• **Quadrant II** ($90°$ to $180°$): $\\sin > 0$, $\\cos < 0$ — sine stays positive, cosine flips sign
• **Quadrant III** ($180°$ to $270°$): both $\\sin$ and $\\cos$ are negative
• **Quadrant IV** ($270°$ to $360°$): $\\sin < 0$, $\\cos > 0$ — cosine stays positive, sine flips sign

This is the standard **ASTC rule** (All Students Take Calculus): All functions positive in Q1, only Sine in Q2, only Tangent in Q3, only Cosine in Q4. The remaining three functions follow from the reciprocal and quotient definitions: $\\csc = 1/\\sin$, $\\sec = 1/\\cos$, and $\\cot = \\cos/\\sin$, so each inherits its sign from the function it depends on.

For an interactive exploration of these relationships, see the **interactive unit circle visualizer**.`,
        before: ``,
        after: ``,
        link: '',
      },

      obj4: {
        title: `When You Will Use This Table`,
        content: `Special-angle values come up constantly in algebra, geometry, calculus, and physics. Common scenarios:

• **Solving trig equations by hand** — equations like $\\sin x = \\tfrac{1}{2}$ have neat solutions at special angles ($x = 30°$ and $x = 150°$ from this table)
• **Verifying calculator answers** — when a calculator gives $0.7071\\ldots$ for $\\sin(45°)$, you can confirm it matches the exact value $\\tfrac{\\sqrt{2}}{2}$
• **Definite integrals over standard intervals** — integrals from $0$ to $\\tfrac{\\pi}{2}$ or $0$ to $2\\pi$ frequently evaluate at these specific angles
• **Geometry and physics** — vector components at $30°, 45°,$ or $60°$ require exact values to avoid accumulated rounding error
• **Building unit-circle fluency** — memorizing these 17 entries unlocks the entire unit circle and is foundational for trig identities

The biggest practical benefit is staying in exact form. A problem that uses $\\tfrac{\\sqrt{3}}{2}$ throughout stays clean; the same problem with $0.8660254\\ldots$ accumulates roundoff and obscures algebraic structure.

For computations at non-special angles, use the **trigonometry calculator**.`,
        before: ``,
        after: ``,
        link: '',
      },

      obj5: {
        title: `Related Tables and Tools`,
        content: `This table is one of several trigonometry references on the site. Pair it with the following for full coverage:

**Related tables:**

• **Trigonometric identities table** — 115 identities across 15 families, including Pythagorean, sum-angle, double-angle, half-angle, and reduction formulas
• **Inverse trigonometric functions table** — exact values of $\\arcsin$, $\\arccos$, and $\\arctan$ at standard inputs
• **Sum, difference, double, triple, and half-angle formulas** — one focused table per multi-angle family
• **Negative, complement, and supplement angle formulas** — sign-flip and reflection identities
• **Trigonometric reduction formulas** — reduce any angle to a first-quadrant equivalent

**Companion tools:**

• **Interactive unit circle** — drag a point around the circle and watch $\\sin$, $\\cos$, and $\\tan$ values update in real time
• **Trigonometry calculator** — compute trig values at any angle, special or not
• **Angle converter** — convert between degrees and radians

For the underlying theory, see the **trigonometry overview**.`,
        before: ``,
        after: ``,
        link: '',
      },

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


const navigationGroups = [
  {
    title: "Other Trigonometric Tables",
    items: [
      // { title: "Special Angles", link: "/tables/trigonometry/special-angles" },
      { title: "Inverse Trigonometric Functions", link: "/tables/trigonometry/inverse" },
      { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
      
      { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
      { title: "Double Angle Formulas", link: "/tables/trigonometry/double-angle" },
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
]


    const faqQuestions = {
      obj1: {
        question: "What are special angles in trigonometry?",
        answer: "Special angles are the standard angles whose trig values can be expressed exactly as fractions or surds rather than as irrational decimals. In the first quadrant the special angles are 0, 30, 45, 60, and 90 degrees (or 0, pi over 6, pi over 4, pi over 3, and pi over 2 radians). Extending around the full unit circle adds their reflections in the other three quadrants, giving 17 standard angles in total from 0 to 360 degrees."
      },
      obj2: {
        question: "Why do special angles have exact values?",
        answer: "These angles correspond to symmetric points on the unit circle that come from elementary right triangles: the 45-45-90 isosceles right triangle gives the values at 45 degrees, and the 30-60-90 triangle (half of an equilateral) gives the values at 30 and 60 degrees. The angles 0, 90, 180, 270, and 360 degrees give 0 and 1 directly from the coordinate axes. Every other angle in this table is a reflection of these base cases across the x-axis, y-axis, or origin."
      },
      obj3: {
        question: "How do I read the table?",
        answer: "Each row corresponds to one angle, given in both degrees and radians. The remaining six columns give the exact value of each of the six trig functions: sine, cosine, tangent, cosecant, secant, and cotangent. Values appear as fractions and surds (such as 1/2, root 2 over 2, root 3 over 2, and 2 root 3 over 3) rather than decimal approximations. Cells marked Undefined indicate where the function diverges to infinity."
      },
      obj4: {
        question: "Why is tangent undefined at 90 degrees?",
        answer: "Tangent equals sine divided by cosine. At 90 degrees, cosine equals 0, so the ratio sin(90 degrees) divided by cos(90 degrees) is 1 divided by 0, which is undefined. The same logic applies to secant at 90 degrees (also 1 over cos), and to cosecant and cotangent at 0 and 180 degrees (each involves a division by sin, which is 0 there)."
      },
      obj5: {
        question: "How do degrees and radians relate?",
        answer: "Radians measure angles by arc length on the unit circle: a full revolution is 2 pi radians, which equals 360 degrees. So pi radians equals 180 degrees, and pi over 2 radians equals 90 degrees. The conversion factors are: degrees equal radians times 180 over pi, and radians equal degrees times pi over 180. The table shows both columns so you can read off values directly in either convention."
      }
    }


    const schemas = {
      webApplication: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Special Angles Trigonometry Table",
        "description": "Exact trig values at 17 special angles around the unit circle from 0 to 360 degrees, for all six functions: sin, cos, tan, csc, sec, and cot.",
        "url": "https://www.learnmathclass.com/tables/special-angles",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Reference table covering 17 standard angles around the full unit circle: 0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, and 360 degrees",
          "Each angle shown in both degrees and radians (0, pi/6, pi/4, pi/3, pi/2, 2pi/3, 3pi/4, 5pi/6, pi, 7pi/6, 5pi/4, 4pi/3, 3pi/2, 5pi/3, 7pi/4, 11pi/6, 2pi)",
          "Exact values for all six trigonometric functions: sine, cosine, tangent, cosecant, secant, and cotangent",
          "Values given as exact fractions and surds (1/2, root 2 over 2, root 3 over 2, root 3 over 3, 2 root 3 over 3) — no decimal approximations",
          "Undefined cells marked explicitly where the function diverges (tan and sec at 90 and 270 degrees; csc and cot at 0, 180, and 360 degrees)",
          "Sticky sidebar with quick links to companion trig tables: inverse, reduction formulas, half/double/triple angle, sum/difference of angles, and negative/complement/supplement angle",
          "Cross-links to related tools: interactive unit circle visualizer, trigonometry calculator, and degree-to-radian converter"
        ],
        "author": {
          "@type": "Organization",
          "name": "Learn Math Class"
        },
        "datePublished": "2024-01-15",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "isAccessibleForFree": true,
        "learningResourceType": "Reference Table",
        "educationalLevel": "High School, College",
        "keywords": keyWords.join(", ")
      },

      breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.learnmathclass.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tables",
            "item": "https://www.learnmathclass.com/tables"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Special Angles",
            "item": "https://www.learnmathclass.com/tables/special-angles"
          }
        ]
      },

      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": Object.keys(faqQuestions).map(key => ({
          "@type": "Question",
          "name": faqQuestions[key].question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faqQuestions[key].answer
          }
        }))
      }
    }


   return {
      props:{
         sectionsContent,
         introContent,
         trigoTableData,
         faqQuestions,
         schemas,
         seoData: {
      title: "Special Angles Trig Table - Exact Values | Learn Math Class",
      description: "Special angles trig table with exact values at 17 angles from 0° to 360° (0, π/6, π/4, π/3, π/2 and beyond) — sin, cos, tan, csc, sec, cot. Unit circle covered.",
      keywords: keyWords.join(", "),
      url: "/tables/special-angles",
      name: "Special Angles Trigonometry Table",
      hubDescription: "Reference table of exact trigonometric values at 17 special angles spanning the full unit circle from 0° to 360° — including 0, π/6, π/4, π/3, π/2 and their reflections in every quadrant. Each row gives the angle in degrees and radians, plus exact values (fractions and surds) for sin, cos, tan, csc, sec, and cot.",
      category: "Trigonometry",
      subCategory: ""
    },
    keyWords,
    navigationGroups,
        
       }
    }
   }
export default function PageTemplate({ seoData, sectionsContent, introContent, 
  trigoTableData, keyWords ,navigationGroups, faqQuestions, schemas }) {

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


    
  const genericSections = [
    {
        id: '1',
        title: sectionsContent.obj1.title,
        link: sectionsContent.obj1.link,
        content: [sectionsContent.obj1.content]
    },
    {
        id: '2',
        title: sectionsContent.obj2.title,
        link: sectionsContent.obj2.link,
        content: [sectionsContent.obj2.content]
    },
    {
        id: '3',
        title: sectionsContent.obj3.title,
        link: sectionsContent.obj3.link,
        content: [sectionsContent.obj3.content]
    },
    {
        id: '4',
        title: sectionsContent.obj4.title,
        link: sectionsContent.obj4.link,
        content: [sectionsContent.obj4.content]
    },
    {
        id: '5',
        title: sectionsContent.obj5.title,
        link: sectionsContent.obj5.link,
        content: [sectionsContent.obj5.content]
    },
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
      __html: JSON.stringify(schemas.webApplication)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
    }}
  />
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Special Angles</h1>
   <br/>
   
      {/* Left column - Sidebar */}
      <div style={{width:'90%',margin:'auto'}}>
            <GenericTable tableData={trigoTableData}
               cellFontSize={'16px'}
               headerFontSize={'18px'}
               theme='lightBlue'
            />
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
        <GenericTable tableData={trigoTableData}
        cellFontSize={'16px'}
        headerFontSize={'18px'}
        theme='lightBlue'
        />
       
        </div> */}
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}