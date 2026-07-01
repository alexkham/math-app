// // // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // // import DegreeRadianConversionTable from '@/app/components/tables/conversion-tables/DegreeRadianConversion'
// // // // import '../../pages.css'
// // // // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
// // // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// // // //  export async function getStaticProps(){

// // // //   const keyWords=['degree radians','radians','radians to degrees','angle measurement',
// // // //     'angle conversion','degree','360 degree to radian','360 in radians']
  
// // // // const navigationGroup=[
// // // //   {title:'Related Tools',
// // // //     items:[
// // // //       {title:'Unit Circle',link:'/visual-tools/unit-circle'},
// // // //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// // // //       {title:'Angle Converter',link:'/converters/degree-radians'},
// // // //     ]
// // // //   },
// // // //   {
// // // //     title:'Related Tables',
// // // //     items:[
// // // //       {title:'Trigonometry Tables',link:'/tables/trigonometry'}
// // // //     ]
// // // //   }
// // // // ]


// // // //   const sectionsContent={

// // // //     obj1:{
// // // //       title:``,
// // // //       content:``,
// // // //       before:``,
// // // //       after:``,
  
  
// // // //     },
// // // //     obj2:{
// // // //       title:``,
// // // //       content:``,
// // // //       before:``,
// // // //       after:``,
  
// // // //     },
  
// // // //     obj3:{
  
// // // //       title:``,
// // // //       content:``,
// // // //       before:``,
// // // //       after:``,
  
// // // //     },
// // // //     obj4:{
// // // //       title:``,
// // // //       content:``,
// // // //       before:``,
// // // //       after:``,
  
// // // //     },


// // // //     obj5:{
  
// // // //       title:``,
// // // //       content:``,
// // // //       before:``,
// // // //       after:``,
  
// // // //     }
  
// // // //   }



// // // //    return {
// // // //       props:{
// // // //          sectionsContent,
// // // //          navigationGroup
        
// // // //        }
// // // //     }
// // // //    }

// // // // export default function AngleConversionTable({sectionsContent,keyWords,navigationGroup}) {

  
// // // //   return (
// // // //     <>
// // // //     {/* <GenericNavbar/> */}
// // // //     <br/>
// // // //     <br/>
// // // //     <br/>
// // // //     <br/>
// // // //     <OperaSidebar 
// // // //              side='right'
// // // //              // topOffset='65px' 
// // // //              sidebarWidth='45px'
// // // //              panelWidth='300px'
// // // //              iconColor='white'
// // // //              panelBackgroundColor='#f2f2f2'/> 
// // // //     <Breadcrumb/>
// // // //     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Angle Conversion Table</h1>
// // // //     <br/>
// // // //     {/* <VerticalButtonGroup 
// // // //             items={navigationGroup}
// // // //             width="250px"       
// // // //             theme='lightBlue'
// // // //             isSticky={true}
// // // //             verticalOffset='260px'
// // // //          /> */}
// // // //       <div style={{
// // // //       display: 'grid',
// // // //       gridTemplateColumns: '10% 90%',
// // // //       gap: '20px',
// // // //       width: '100%'
// // // //    }}>
// // // //       {/* Left column - Sidebar */}
// // // //       <div>
// // // //          <VerticalButtonGroup 
// // // //             items={navigationGroup}
// // // //             width="250px"       
// // // //             theme='lightBlue'
// // // //             isSticky={true}
// // // //             verticalOffset='200px'
// // // //          />
// // // //       </div>

// // // //       {/* Right column - Table */}
// // // //       <div>
// // // //          <div style={{width:'95%',margin:'auto',marginTop:'-40px'}}>
           
// // // //               <DegreeRadianConversionTable/>
// // // //             <br/>
// // // //             <br/>
// // // //             <br/>
// // // //             <br/>
// // // //             <br/>
// // // //             <br/>
// // // //             <br/>
          
            
// // // //          </div>
// // // //       </div>
// // // //    </div>    
// // // //     <br/>
  
// // // //     <br/>
// // // //     <br/>
// // // //     <br/>
// // // //     {/* <ScrollUpButton/> */}
    
// // // //     </>
// // // //   )
// // // // }



// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import DegreeRadianConversionTable from '@/app/components/tables/conversion-tables/DegreeRadianConversion'
// // // import '../../pages.css'
// // // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
// // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // import Head from 'next/head'


// // //  export async function getStaticProps(){

// // //   const keyWords = [
// // //     'angle conversion',
// // //     'angle conversion table',
// // //     'degrees to radians',
// // //     'degrees to radians table',
// // //     'radians to degrees',
// // //     'degree to radian conversion',
// // //     'degree radian conversion table',
// // //     'pi radians table',
// // //     '30 degrees in radians',
// // //     '45 degrees in radians',
// // //     '60 degrees in radians',
// // //     '90 degrees in radians',
// // //     '180 degrees in radians',
// // //     '270 degrees in radians',
// // //     '360 degrees in radians',
// // //   ]

// // // const navigationGroup=[
// // //   {title:'Related Tools',
// // //     items:[
// // //       {title:'Unit Circle',link:'/visual-tools/unit-circle'},
// // //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// // //       {title:'Angle Converter',link:'/converters/degree-radians'},
// // //     ]
// // //   },
// // //   {
// // //     title:'Related Tables',
// // //     items:[
// // //       {title:'Trigonometry Tables',link:'/tables/trigonometry'}
// // //     ]
// // //   }
// // // ]


// // //   const sectionsContent={

// // //     obj1:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
  
  
// // //     },
// // //     obj2:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
  
// // //     },
  
// // //     obj3:{
  
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
  
// // //     },
// // //     obj4:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
  
// // //     },


// // //     obj5:{
  
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
  
// // //     }
  
// // //   }


// // //   const faqQuestions = {
// // //     obj1: {
// // //       question: "How do you convert degrees to radians?",
// // //       answer: "Multiply the angle in degrees by pi divided by 180. The conversion factor follows from the fact that a full circle equals 360 degrees or 2 pi radians, so 180 degrees equals pi radians. For example, 60 degrees times pi over 180 equals pi over 3 radians."
// // //     },
// // //     obj2: {
// // //       question: "How do you convert radians to degrees?",
// // //       answer: "Multiply the angle in radians by 180 divided by pi. This is the inverse of the degree-to-radian conversion. For example, pi over 4 radians times 180 over pi equals 45 degrees."
// // //     },
// // //     obj3: {
// // //       question: "What is 360 degrees in radians?",
// // //       answer: "360 degrees equals 2 pi radians, which is approximately 6.2832 radians. This represents one full revolution. Half a revolution, 180 degrees, equals pi radians, which is the defining relationship between the two units."
// // //     },
// // //     obj4: {
// // //       question: "What are the most common angles in degrees and radians?",
// // //       answer: "The common reference angles are 0, 30, 45, 60, 90, 180, 270, and 360 degrees, which correspond to 0, pi over 6, pi over 4, pi over 3, pi over 2, pi, 3 pi over 2, and 2 pi radians. These appear constantly in trigonometry and on the unit circle."
// // //     },
// // //     obj5: {
// // //       question: "Why use radians instead of degrees?",
// // //       answer: "Radians are the natural unit for angle measurement in calculus and higher mathematics. Derivatives and integrals of trigonometric functions take their simplest form when the input is in radians. Degrees remain standard in everyday applications like navigation and engineering."
// // //     }
// // //   }


// // //   const schemas = {
// // //     webApplication: {
// // //       "@context": "https://schema.org",
// // //       "@type": "WebApplication",
// // //       "name": "Degrees to Radians Conversion Table",
// // //       "description": "Complete degrees to radians conversion table covering every whole degree from 0 to 360. Three columns per row: degrees, simplified pi-form radians, and decimal radians.",
// // //       "url": "https://www.learnmathclass.com/tables/angle-conversion",
// // //       "applicationCategory": "EducationalApplication",
// // //       "operatingSystem": "Any",
// // //       "offers": {
// // //         "@type": "Offer",
// // //         "price": "0",
// // //         "priceCurrency": "USD"
// // //       },
// // //       "featureList": [
// // //         "Complete reference table covering every whole degree from 0 to 360 (361 rows)",
// // //         "Three columns: degrees, radians in simplified pi form, and decimal radians to four decimal places",
// // //         "Pi-form column auto-simplifies the fraction (90 degrees displays as pi over 2, 60 degrees as pi over 3, 360 degrees as 2 pi)",
// // //         "Live search box with a toggle to match either the degrees column or the radians columns (pi form and decimal)",
// // //         "Matching characters are highlighted in yellow within the searched column",
// // //         "Both conversion formulas displayed above the table: degrees to radians and radians to degrees",
// // //         "Sticky table header stays visible while scrolling through the rows"
// // //       ],
// // //       "author": {
// // //         "@type": "Organization",
// // //         "name": "Learn Math Class"
// // //       },
// // //       "datePublished": "2024-01-15",
// // //       "dateModified": new Date().toISOString(),
// // //       "inLanguage": "en-US",
// // //       "isAccessibleForFree": true,
// // //       "learningResourceType": "Reference Table",
// // //       "educationalLevel": "High School, College",
// // //       "keywords": keyWords.join(", ")
// // //     },

// // //     breadcrumb: {
// // //       "@context": "https://schema.org",
// // //       "@type": "BreadcrumbList",
// // //       "itemListElement": [
// // //         {
// // //           "@type": "ListItem",
// // //           "position": 1,
// // //           "name": "Home",
// // //           "item": "https://www.learnmathclass.com"
// // //         },
// // //         {
// // //           "@type": "ListItem",
// // //           "position": 2,
// // //           "name": "Tables",
// // //           "item": "https://www.learnmathclass.com/tables"
// // //         },
// // //         {
// // //           "@type": "ListItem",
// // //           "position": 3,
// // //           "name": "Angle Conversion",
// // //           "item": "https://www.learnmathclass.com/tables/angle-conversion"
// // //         }
// // //       ]
// // //     },

// // //     faq: {
// // //       "@context": "https://schema.org",
// // //       "@type": "FAQPage",
// // //       "mainEntity": Object.keys(faqQuestions).map(key => ({
// // //         "@type": "Question",
// // //         "name": faqQuestions[key].question,
// // //         "acceptedAnswer": {
// // //           "@type": "Answer",
// // //           "text": faqQuestions[key].answer
// // //         }
// // //       }))
// // //     }
// // //   }


// // //    return {
// // //       props:{
// // //          sectionsContent,
// // //          navigationGroup,
// // //          faqQuestions,
// // //          schemas,
// // //          seoData: {
// // //            title: "Degrees to Radians Table: 0\u00B0 to 360\u00B0 | Learn Math Class",
// // //            description: "Complete degrees to radians conversion table from 0\u00B0 to 360\u00B0. Three columns per row: degrees, simplified pi-form radians, and decimal radians.",
// // //            keywords: keyWords.join(", "),
// // //            url: "/tables/angle-conversion",
// // //            name: "Degrees to Radians Conversion Table",
// // //            hubDescription: "Look up any whole-degree angle from 0\u00B0 to 360\u00B0 in three forms: degrees, simplified pi-form radians, and decimal radians to four decimal places. Live search filters by either degrees or radians (pi form or decimal) with yellow match highlighting in the searched column. Both conversion formulas are shown above the table.",
// // //            category: "Trigonometry",
// // //            subCategory: "Tables",
// // //          }
// // //        }
// // //     }
// // //    }

// // // export default function AngleConversionTable({seoData, sectionsContent, navigationGroup, faqQuestions, schemas}) {

  
// // //   return (
// // //     <>
// // //     <Head>
// // //       <title>{seoData.title}</title>
// // //       <meta name="description" content={seoData.description} />
// // //       <meta name="keywords" content={seoData.keywords} />
// // //       <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //       <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // //       <meta property="og:title" content={seoData.title} />
// // //       <meta property="og:description" content={seoData.description} />
// // //       <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // //       <meta property="og:type" content="article" />
// // //       <meta property="og:site_name" content="Learn Math Class" />

// // //       <meta name="twitter:card" content="summary" />
// // //       <meta name="twitter:title" content={seoData.title} />
// // //       <meta name="twitter:description" content={seoData.description} />

// // //       <meta name="robots" content="index, follow" />

// // //       <script
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{
// // //           __html: JSON.stringify(schemas.webApplication)
// // //         }}
// // //       />

// // //       <script
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{
// // //           __html: JSON.stringify(schemas.breadcrumb)
// // //         }}
// // //       />

// // //       <script
// // //         type="application/ld+json"
// // //         dangerouslySetInnerHTML={{
// // //           __html: JSON.stringify(schemas.faq)
// // //         }}
// // //       />
// // //     </Head>
// // //     {/* <GenericNavbar/> */}
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <OperaSidebar 
// // //              side='right'
// // //              // topOffset='65px' 
// // //              sidebarWidth='45px'
// // //              panelWidth='300px'
// // //              iconColor='white'
// // //              panelBackgroundColor='#f2f2f2'/> 
// // //     <Breadcrumb/>
// // //     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Angle Conversion Table</h1>
// // //     <br/>
// // //     {/* <VerticalButtonGroup 
// // //             items={navigationGroup}
// // //             width="250px"       
// // //             theme='lightBlue'
// // //             isSticky={true}
// // //             verticalOffset='260px'
// // //          /> */}
// // //       <div style={{
// // //       display: 'grid',
// // //       gridTemplateColumns: '10% 90%',
// // //       gap: '20px',
// // //       width: '100%'
// // //    }}>
// // //       {/* Left column - Sidebar */}
// // //       <div>
// // //          <VerticalButtonGroup 
// // //             items={navigationGroup}
// // //             width="200px"       
// // //             theme='lightBlue'
// // //             isSticky={true}
// // //             verticalOffset='200px'
// // //          />
// // //       </div>

// // //       {/* Right column - Table */}
// // //       <div>
// // //          <div style={{width:'90%',margin:'auto',marginTop:'-40px'}}>
           
// // //               <DegreeRadianConversionTable/>
// // //             <br/>
// // //             <br/>
// // //             <br/>
// // //             <br/>
// // //             <br/>
// // //             <br/>
// // //             <br/>
          
            
// // //          </div>
// // //       </div>
// // //    </div>    
// // //     <br/>
  
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     {/* <ScrollUpButton/> */}
    
// // //     </>
// // //   )
// // // }


// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import DegreeRadianConversionTable from '@/app/components/tables/conversion-tables/DegreeRadianConversion'
// // import '../../pages.css'
// // import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import Head from 'next/head'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'


// //  export async function getStaticProps(){

// //   const keyWords = [
// //     'angle conversion',
// //     'angle conversion table',
// //     'degrees to radians',
// //     'degrees to radians table',
// //     'radians to degrees',
// //     'degree to radian conversion',
// //     'degree radian conversion table',
// //     'pi radians table',
// //     '30 degrees in radians',
// //     '45 degrees in radians',
// //     '60 degrees in radians',
// //     '90 degrees in radians',
// //     '180 degrees in radians',
// //     '270 degrees in radians',
// //     '360 degrees in radians',
// //   ]

// // const navigationGroup=[
// //   {title:'Related Tools',
// //     items:[
// //       {title:'Unit Circle',link:'/visual-tools/unit-circle'},
// //       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
// //       {title:'Angle Converter',link:'/converters/degree-radians'},
// //     ]
// //   },
// //   {
// //     title:'Related Tables',
// //     items:[
// //       {title:'Trigonometry Tables',link:'/tables/trigonometry'}
// //     ]
// //   }
// // ]


// //   const sectionsContent={

// //     obj0:{
// //       title:`Key Terms`,
// //       content:`**Degree** — Unit of angle measurement where a full revolution equals 360°. Each degree splits into 60 arc-minutes; each arc-minute into 60 arc-seconds.

// // **Radian** — Unit of angle measurement where a full revolution equals $2\\pi$ radians. One radian is the angle subtended at the center of a circle by an arc equal in length to the radius.

// // **$\\pi$ (pi)** — The ratio of a circle's circumference to its diameter, approximately 3.14159. Appears because $180° = \\pi$ radians.

// // **Pi-form** — A radian value written as a multiple of $\\pi$, like $\\pi/2$ or $3\\pi/4$. Exact and compact; preferred over decimal whenever the angle is a clean fraction of a circle.

// // **Reference angle** — One of the standard angles (0°, 30°, 45°, 60°, 90°, and their multiples) whose trigonometric values are memorized because every other angle reduces to one of them.`,
// //       before:``, after:``, link:''
// //     },

// //     obj1:{
// //       title:`What This Table Shows`,
// //       content:`The table lists every whole degree from 0° to 360° — 361 rows in total — in three columns:

// // - **Degrees** — the angle written with the degree symbol (e.g., 47°).
// // - **Radians (π form)** — the same angle as a simplified fraction of $\\pi$ (e.g., $47\\pi/180$).
// // - **Radians (Decimal)** — the same angle as a decimal value rounded to four places (e.g., 0.8203).

// // Above the table is a formula box showing both conversion formulas. The table itself sits in a scrollable container with a sticky header, so the column labels stay visible while you scroll. A search box with a degrees/radians toggle filters the rows in real time.

// // This is a lookup tool. Every angle you might need to convert is already there — scroll, search, or read across the row.`,
// //       before:``, after:``, link:''
// //     },

// //     obj2:{
// //       title:`Reading the π-Form and Decimal Columns`,
// //       content:`The π-form column shows each radian value as a simplified fraction. The numerator and denominator are reduced by their greatest common divisor before display, so:

// // - 90° appears as $\\pi/2$ (not $90\\pi/180$).
// // - 60° appears as $\\pi/3$.
// // - 45° appears as $\\pi/4$.
// // - 180° appears as $\\pi$ (the "1" coefficient drops).
// // - 360° appears as $2\\pi$.

// // When the numerator simplifies to 1, the "1" is omitted: 30° becomes $\\pi/6$, not $1\\pi/6$.

// // The decimal column shows the same value as a four-place decimal: 90° as 1.5708, 60° as 1.0472, 45° as 0.7854. Use the π-form column when you need an exact value (for trig identities, calculus, or exact answers); use the decimal column when you need a numerical result for a calculator, a physics problem, or a programming context.

// // Some angles like 47° or 113° have no clean π-form simplification. The π-form column still shows them as $47\\pi/180$ or $113\\pi/180$ — exact, just not pretty. The decimal column is usually more useful for these.`,
// //       before:``, after:``, link:''
// //     },

// //     obj3:{
// //       title:`Using the Search`,
// //       content:`Type any number into the search box and the table filters live. The degrees/radians toggle next to the search box controls **which column the search matches against**:

// // - **Degrees toggle**: the query is matched against the degrees column only. Typing "45" filters to every degree value containing "45" — 45°, 145°, 245°, 345°.
// // - **Radians toggle**: the query is matched against both radian columns. Typing "0.7" matches the decimal column (rows like 0.7854, 0.7330); typing "π/4" or "/4" matches the π-form column.

// // The search uses simple substring matching, so partial inputs work: "18" with the degrees toggle returns 18°, 180°, 181°, ..., 189°, 280°, 281°, ..., 318°. The × button on the right of the search box resets the query and shows all 361 rows again.

// // The toggle switches the search context but does not clear the current query, so flipping degrees → radians instantly reinterprets the same string against the radian columns.`,
// //       before:``, after:``, link:''
// //     },

// //     obj4:{
// //       title:`Match Highlighting`,
// //       content:`Matching characters within the filtered rows are highlighted in yellow. Highlighting is **column-specific** — only the column being searched gets the yellow mark:

// // - With the degrees toggle, only the degrees column highlights matched characters. The radian columns display their values unhighlighted.
// // - With the radians toggle, both the π-form column and the decimal column can highlight matches (whichever column the substring actually appears in).

// // This makes it easy to confirm at a glance why a given row matched. If you search "π/3" and a row appears with no visible highlight, the match came from the decimal column instead.

// // The highlight is purely visual; it doesn't change the underlying values or the table layout.`,
// //       before:``, after:``, link:''
// //     },

// //     obj5:{
// //       title:`The Conversion Formulas`,
// //       content:`Both formulas appear in the blue box above the table:

// // $$\\text{rad} = \\text{deg} \\times \\frac{\\pi}{180}$$

// // $$\\text{deg} = \\text{rad} \\times \\frac{180}{\\pi}$$

// // Both formulas follow from a single fact: a half-revolution measures 180° in degrees and $\\pi$ in radians. Setting these equal gives $180° = \\pi$ radians, which divides into the two conversion factors above.

// // Worked example — converting 60° to radians:

// // $$60 \\times \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$$

// // Worked example — converting $\\pi/4$ radians to degrees:

// // $$\\frac{\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{180}{4} = 45°$$

// // The $\\pi$ cancels cleanly whenever the radian value is a rational multiple of $\\pi$, which is why the π-form is the standard way to write exact angles in trigonometry and calculus.`,
// //       before:``, after:``, link:''
// //     },

// //     obj6:{
// //       title:`Common Reference Angles`,
// //       content:`These eight angles cover most of trigonometry. Their values appear constantly in unit-circle work, trig identities, and calculus.

// // - **0°** = $0$ rad = 0.0000
// // - **30°** = $\\pi/6$ = 0.5236
// // - **45°** = $\\pi/4$ = 0.7854
// // - **60°** = $\\pi/3$ = 1.0472
// // - **90°** = $\\pi/2$ = 1.5708
// // - **180°** = $\\pi$ = 3.1416
// // - **270°** = $3\\pi/2$ = 4.7124
// // - **360°** = $2\\pi$ = 6.2832

// // The first four (0°, 30°, 45°, 60°) plus 90° are the canonical first-quadrant reference angles. The rest are their multiples — 120° is $2\\pi/3$, 135° is $3\\pi/4$, 150° is $5\\pi/6$, and so on around the circle.

// // Memorizing these eight values pays off: every other angle in trigonometry reduces to a reference angle from this set, and trig function values at non-reference angles always reduce to function values at reference angles via the angle-sum, double-angle, or co-function identities.`,
// //       before:``, after:``, link:''
// //     },

// //     obj7:{
// //       title:`Why π Appears Everywhere`,
// //       content:`The constant $\\pi$ enters angle measurement through arc length. A circle of radius $r$ has circumference $2\\pi r$. A full revolution sweeps that entire circumference; a half-revolution sweeps half of it, $\\pi r$.

// // Radians measure angle as a ratio: arc length divided by radius. So a full revolution measures $2\\pi r / r = 2\\pi$ radians, and a half-revolution measures $\\pi$ radians. Degrees, in contrast, are an arbitrary partition: 360 was chosen by ancient astronomers (likely because 360 has many divisors).

// // This is why $180° = \\pi$ radians is the defining relationship, and why the conversion factors $\\pi/180$ and $180/\\pi$ are exact constants, not approximations.

// // The deeper reason radians get used in calculus: the derivative of $\\sin(x)$ equals $\\cos(x)$ only when $x$ is in radians. In degrees, you pick up an extra factor of $\\pi/180$ every time you differentiate. Radians are the unit that makes the math clean.`,
// //       before:``, after:``, link:''
// //     },

// //     obj8:{
// //       title:`When to Use Degrees vs Radians`,
// //       content:`Use **degrees** for:

// // - Navigation, surveying, and geographic coordinates (latitude, longitude, bearings).
// // - Engineering drawings, mechanical specifications, and most everyday measurement contexts.
// // - Hand calculations where the angles are simple fractions of a circle (90°, 45°, 30°).
// // - Communication with non-mathematical audiences — "30 degrees" is intuitive in a way "π/6" is not.

// // Use **radians** for:

// // - Calculus — derivatives, integrals, Taylor series of trig functions all assume radians.
// // - Physics — angular velocity, simple harmonic motion, wave equations.
// // - Most programming languages' math libraries — JavaScript's $\\texttt{Math.sin}$, Python's $\\texttt{math.sin}$, and C's $\\texttt{sin}$ all take radians. Pass degrees in and you get nonsense.
// // - Any exact-value work where $\\pi$ should appear symbolically.

// // A common workflow: think and design in degrees, convert to radians when feeding values into a function or formula, convert back when displaying results to humans.`,
// //       before:``, after:``, link:''
// //     },

// //     obj9:{
// //       title:`Related Tools and Concepts`,
// //       content:`This table answers "what is X° in radians" (or vice versa). For related work:

// // - **Unit Circle** — the visual companion to this table. Shows where each reference angle sits on the circle and gives the sine and cosine values at each.
// // - **Trigonometry Calculator** — once an angle is converted, compute its trig function values (sin, cos, tan, and the rest) at that angle.
// // - **Angle Converter** — useful for non-whole-degree inputs (like 17.4°) that aren't in this table. Accepts arbitrary decimal values in either unit.
// // - **Trigonometry Tables** — sin, cos, tan values at the standard reference angles, in both degrees and radians.

// // Related concepts you'll meet elsewhere:

// // - **Arc length** — the radian definition: arc length = radius × angle in radians.
// // - **Sector area** — $A = \\frac{1}{2} r^2 \\theta$ when $\\theta$ is in radians.
// // - **Angular velocity** — measured in radians per second, almost never in degrees per second.

// // The sidebar to the left of the table holds direct links to the related tools.`,
// //       before:``, after:``, link:''
// //     },

// //     obj10:{ title:``, content:``, before:``, after:``, link:'' },
// //     obj11:{ title:``, content:``, before:``, after:``, link:'' },
// //     obj12:{ title:``, content:``, before:``, after:``, link:'' },
// //     obj13:{ title:``, content:``, before:``, after:``, link:'' },
// //     obj14:{ title:``, content:``, before:``, after:``, link:'' },
// //     obj15:{ title:``, content:``, before:``, after:``, link:'' }

// //   }


// //   const faqQuestions = {
// //     obj1: {
// //       question: "How do you convert degrees to radians?",
// //       answer: "Multiply the angle in degrees by pi divided by 180. The conversion factor follows from the fact that a full circle equals 360 degrees or 2 pi radians, so 180 degrees equals pi radians. For example, 60 degrees times pi over 180 equals pi over 3 radians."
// //     },
// //     obj2: {
// //       question: "How do you convert radians to degrees?",
// //       answer: "Multiply the angle in radians by 180 divided by pi. This is the inverse of the degree-to-radian conversion. For example, pi over 4 radians times 180 over pi equals 45 degrees."
// //     },
// //     obj3: {
// //       question: "What is 360 degrees in radians?",
// //       answer: "360 degrees equals 2 pi radians, which is approximately 6.2832 radians. This represents one full revolution. Half a revolution, 180 degrees, equals pi radians, which is the defining relationship between the two units."
// //     },
// //     obj4: {
// //       question: "What are the most common angles in degrees and radians?",
// //       answer: "The common reference angles are 0, 30, 45, 60, 90, 180, 270, and 360 degrees, which correspond to 0, pi over 6, pi over 4, pi over 3, pi over 2, pi, 3 pi over 2, and 2 pi radians. These appear constantly in trigonometry and on the unit circle."
// //     },
// //     obj5: {
// //       question: "Why use radians instead of degrees?",
// //       answer: "Radians are the natural unit for angle measurement in calculus and higher mathematics. Derivatives and integrals of trigonometric functions take their simplest form when the input is in radians. Degrees remain standard in everyday applications like navigation and engineering."
// //     }
// //   }


// //   const schemas = {
// //     webApplication: {
// //       "@context": "https://schema.org",
// //       "@type": "WebApplication",
// //       "name": "Degrees to Radians Conversion Table",
// //       "description": "Complete degrees to radians conversion table covering every whole degree from 0 to 360. Three columns per row: degrees, simplified pi-form radians, and decimal radians.",
// //       "url": "https://www.learnmathclass.com/tables/angle-conversion",
// //       "applicationCategory": "EducationalApplication",
// //       "operatingSystem": "Any",
// //       "offers": {
// //         "@type": "Offer",
// //         "price": "0",
// //         "priceCurrency": "USD"
// //       },
// //       "featureList": [
// //         "Complete reference table covering every whole degree from 0 to 360 (361 rows)",
// //         "Three columns: degrees, radians in simplified pi form, and decimal radians to four decimal places",
// //         "Pi-form column auto-simplifies the fraction (90 degrees displays as pi over 2, 60 degrees as pi over 3, 360 degrees as 2 pi)",
// //         "Live search box with a toggle to match either the degrees column or the radians columns (pi form and decimal)",
// //         "Matching characters are highlighted in yellow within the searched column",
// //         "Both conversion formulas displayed above the table: degrees to radians and radians to degrees",
// //         "Sticky table header stays visible while scrolling through the rows"
// //       ],
// //       "author": {
// //         "@type": "Organization",
// //         "name": "Learn Math Class"
// //       },
// //       "datePublished": "2024-01-15",
// //       "dateModified": new Date().toISOString(),
// //       "inLanguage": "en-US",
// //       "isAccessibleForFree": true,
// //       "learningResourceType": "Reference Table",
// //       "educationalLevel": "High School, College",
// //       "keywords": keyWords.join(", ")
// //     },

// //     breadcrumb: {
// //       "@context": "https://schema.org",
// //       "@type": "BreadcrumbList",
// //       "itemListElement": [
// //         {
// //           "@type": "ListItem",
// //           "position": 1,
// //           "name": "Home",
// //           "item": "https://www.learnmathclass.com"
// //         },
// //         {
// //           "@type": "ListItem",
// //           "position": 2,
// //           "name": "Tables",
// //           "item": "https://www.learnmathclass.com/tables"
// //         },
// //         {
// //           "@type": "ListItem",
// //           "position": 3,
// //           "name": "Angle Conversion",
// //           "item": "https://www.learnmathclass.com/tables/angle-conversion"
// //         }
// //       ]
// //     },

// //     faq: {
// //       "@context": "https://schema.org",
// //       "@type": "FAQPage",
// //       "mainEntity": Object.keys(faqQuestions).map(key => ({
// //         "@type": "Question",
// //         "name": faqQuestions[key].question,
// //         "acceptedAnswer": {
// //           "@type": "Answer",
// //           "text": faqQuestions[key].answer
// //         }
// //       }))
// //     }
// //   }


// //    return {
// //       props:{
// //          sectionsContent,
// //          navigationGroup,
// //          faqQuestions,
// //          schemas,
// //          seoData: {
// //            title: "Degrees to Radians Table: 0\u00B0 to 360\u00B0 | Learn Math Class",
// //            description: "Complete degrees to radians conversion table from 0\u00B0 to 360\u00B0. Three columns per row: degrees, simplified pi-form radians, and decimal radians.",
// //            keywords: keyWords.join(", "),
// //            url: "/tables/angle-conversion",
// //            name: "Degrees to Radians Conversion Table",
// //            hubDescription: "Look up any whole-degree angle from 0\u00B0 to 360\u00B0 in three forms: degrees, simplified pi-form radians, and decimal radians to four decimal places. Live search filters by either degrees or radians (pi form or decimal) with yellow match highlighting in the searched column. Both conversion formulas are shown above the table.",
// //            category: "Trigonometry",
// //            subCategory: "Tables",
// //          }
// //        }
// //     }
// //    }

// // export default function AngleConversionTable({seoData, sectionsContent, navigationGroup, faqQuestions, schemas}) {

// //   const genericSections=[
// //     { id:'0', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
// //     { id:'1', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
// //     { id:'2', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
// //     { id:'3', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
// //     { id:'4', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
// //     { id:'5', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
// //     { id:'6', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
// //     { id:'7', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
// //     { id:'8', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
// //     { id:'9', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
// //     // { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
// //     // { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
// //     // { id:'12', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
// //     // { id:'13', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
// //     // { id:'14', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
// //     // { id:'15', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
// //   ]

// //   return (
// //     <>
// //     <Head>
// //       <title>{seoData.title}</title>
// //       <meta name="description" content={seoData.description} />
// //       <meta name="keywords" content={seoData.keywords} />
// //       <meta name="viewport" content="width=device-width, initial-scale=1" />
// //       <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// //       <meta property="og:title" content={seoData.title} />
// //       <meta property="og:description" content={seoData.description} />
// //       <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //       <meta property="og:type" content="article" />
// //       <meta property="og:site_name" content="Learn Math Class" />

// //       <meta name="twitter:card" content="summary" />
// //       <meta name="twitter:title" content={seoData.title} />
// //       <meta name="twitter:description" content={seoData.description} />

// //       <meta name="robots" content="index, follow" />

// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html: JSON.stringify(schemas.webApplication)
// //         }}
// //       />

// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html: JSON.stringify(schemas.breadcrumb)
// //         }}
// //       />

// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{
// //           __html: JSON.stringify(schemas.faq)
// //         }}
// //       />
// //     </Head>
// //     {/* <GenericNavbar/> */}
// //     <br/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <OperaSidebar 
// //              side='right'
// //              // topOffset='65px' 
// //              sidebarWidth='45px'
// //              panelWidth='300px'
// //              iconColor='white'
// //              panelBackgroundColor='#f2f2f2'/> 
// //     <Breadcrumb/>
// //     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Angle Conversion Table</h1>
// //     <br/>
// //     {/* <VerticalButtonGroup 
// //             items={navigationGroup}
// //             width="250px"       
// //             theme='lightBlue'
// //             isSticky={true}
// //             verticalOffset='260px'
// //          /> */}
// //       <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: '10% 90%',
// //       gap: '20px',
// //       width: '100%'
// //    }}>
// //       {/* Left column - Sidebar */}
// //       <div>
// //          <VerticalButtonGroup 
// //             items={navigationGroup}
// //             width="250px"       
// //             theme='lightBlue'
// //             isSticky={true}
// //             verticalOffset='200px'
// //          />
// //       </div>

// //       {/* Right column - Table */}
// //       <div>
// //          <div style={{width:'95%',margin:'auto',marginTop:'-40px'}}>
           
// //               <DegreeRadianConversionTable/>
// //             <br/>
// //             <br/>
// //             <br/>
// //             <br/>
// //             <br/>
// //             <br/>
// //             <br/>
          
            
// //          </div>
// //       </div>
// //    </div>    
// //     <br/>
// //     <SectionTableOfContents sections={genericSections}/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <Sections sections={genericSections}/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     {/* <ScrollUpButton/> */}
    
// //     </>
// //   )
// // }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import DegreeRadianConversionTable from '@/app/components/tables/conversion-tables/DegreeRadianConversion'
// import '../../pages.css'
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import Head from 'next/head'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'


//  export async function getStaticProps(){

//   const keyWords = [
//     'angle conversion',
//     'angle conversion table',
//     'degrees to radians',
//     'degrees to radians table',
//     'radians to degrees',
//     'degree to radian conversion',
//     'degree radian conversion table',
//     'pi radians table',
//     '30 degrees in radians',
//     '45 degrees in radians',
//     '60 degrees in radians',
//     '90 degrees in radians',
//     '180 degrees in radians',
//     '270 degrees in radians',
//     '360 degrees in radians',
//   ]

// const navigationGroup=[
//   {title:'Related Tools',
//     items:[
//       {title:'Unit Circle',link:'/visual-tools/unit-circle'},
//       {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
//       {title:'Angle Converter',link:'/converters/degree-radians'},
//     ]
//   },
//   {
//     title:'Related Tables',
//     items:[
//       {title:'Trigonometry Tables',link:'/tables/trigonometry'}
//     ]
//   }
// ]


//   const sectionsContent={

//     obj0:{
//       title:`Key Terms`,
//       content:`**Degree** — Unit of angle measurement where a full revolution equals 360°. Each degree splits into 60 arc-minutes; each arc-minute into 60 arc-seconds.

// **Radian** — Unit of angle measurement where a full revolution equals $2\\pi$ radians. One radian is the angle subtended at the center of a circle by an arc equal in length to the radius.

// **$\\pi$ (pi)** — The ratio of a circle's circumference to its diameter, approximately 3.14159. Appears because $180° = \\pi$ radians.

// **Pi-form** — A radian value written as a multiple of $\\pi$, like $\\pi/2$ or $3\\pi/4$. Exact and compact; preferred over decimal whenever the angle is a clean fraction of a circle.

// **Reference angle** — One of the standard angles (0°, 30°, 45°, 60°, 90°, and their multiples) whose trigonometric values are memorized because every other angle reduces to one of them.`,
//       before:``, after:``, link:''
//     },

//     obj1:{
//       title:`What This Table Shows`,
//       content:`The table lists every whole degree from 0° to 360° — 361 rows in total — in three columns:

// - **Degrees** — the angle written with the degree symbol (e.g., 47°).
// - **Radians (π form)** — the same angle as a simplified fraction of $\\pi$ (e.g., $47\\pi/180$).
// - **Radians (Decimal)** — the same angle as a decimal value rounded to four places (e.g., 0.8203).

// Above the table is a formula box showing both conversion formulas. The table itself sits in a scrollable container with a sticky header, so the column labels stay visible while you scroll. A search box with a degrees/radians toggle filters the rows in real time.

// This is a lookup tool. Every angle you might need to convert is already there — scroll, search, or read across the row.`,
//       before:``, after:``, link:''
//     },

//     obj2:{
//       title:`Reading the π-Form and Decimal Columns`,
//       content:`The π-form column shows each radian value as a simplified fraction. The numerator and denominator are reduced by their greatest common divisor before display, so:

// - 90° appears as $\\pi/2$ (not $90\\pi/180$).
// - 60° appears as $\\pi/3$.
// - 45° appears as $\\pi/4$.
// - 180° appears as $\\pi$ (the "1" coefficient drops).
// - 360° appears as $2\\pi$.

// When the numerator simplifies to 1, the "1" is omitted: 30° becomes $\\pi/6$, not $1\\pi/6$.

// The decimal column shows the same value as a four-place decimal: 90° as 1.5708, 60° as 1.0472, 45° as 0.7854. Use the π-form column when you need an exact value (for trig identities, calculus, or exact answers); use the decimal column when you need a numerical result for a calculator, a physics problem, or a programming context.

// Some angles like 47° or 113° have no clean π-form simplification. The π-form column still shows them as $47\\pi/180$ or $113\\pi/180$ — exact, just not pretty. The decimal column is usually more useful for these.`,
//       before:``, after:``, link:''
//     },

//     obj3:{
//       title:`Using the Search`,
//       content:`Type any number into the search box and the table filters live. The degrees/radians toggle next to the search box controls **which column the search matches against**:

// - **Degrees toggle**: the query is matched against the degrees column only. Typing "45" filters to every degree value containing "45" — 45°, 145°, 245°, 345°.
// - **Radians toggle**: the query is matched against both radian columns. Typing "0.7" matches the decimal column (rows like 0.7854, 0.7330); typing "π/4" or "/4" matches the π-form column.

// The search uses simple substring matching, so partial inputs work: "18" with the degrees toggle returns 18°, 180°, 181°, ..., 189°, 280°, 281°, ..., 318°. The × button on the right of the search box resets the query and shows all 361 rows again.

// The toggle switches the search context but does not clear the current query, so flipping degrees → radians instantly reinterprets the same string against the radian columns.`,
//       before:``, after:``, link:''
//     },

//     obj4:{
//       title:`Match Highlighting`,
//       content:`Matching characters within the filtered rows are highlighted in yellow. Highlighting is **column-specific** — only the column being searched gets the yellow mark:

// - With the degrees toggle, only the degrees column highlights matched characters. The radian columns display their values unhighlighted.
// - With the radians toggle, both the π-form column and the decimal column can highlight matches (whichever column the substring actually appears in).

// This makes it easy to confirm at a glance why a given row matched. If you search "π/3" and a row appears with no visible highlight, the match came from the decimal column instead.

// The highlight is purely visual; it doesn't change the underlying values or the table layout.`,
//       before:``, after:``, link:''
//     },

//     obj5:{
//       title:`The Conversion Formulas`,
//       content:`Both formulas appear in the blue box above the table:

// $$\\text{rad} = \\text{deg} \\times \\frac{\\pi}{180}$$

// $$\\text{deg} = \\text{rad} \\times \\frac{180}{\\pi}$$

// Both formulas follow from a single fact: a half-revolution measures 180° in degrees and $\\pi$ in radians. Setting these equal gives $180° = \\pi$ radians, which divides into the two conversion factors above.

// Worked example — converting 60° to radians:

// $$60 \\times \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$$

// Worked example — converting $\\pi/4$ radians to degrees:

// $$\\frac{\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{180}{4} = 45°$$

// The $\\pi$ cancels cleanly whenever the radian value is a rational multiple of $\\pi$, which is why the π-form is the standard way to write exact angles in trigonometry and calculus.`,
//       before:``, after:``, link:''
//     },

//     obj6:{
//       title:`Common Reference Angles`,
//       content:`These eight angles cover most of trigonometry. Their values appear constantly in unit-circle work, trig identities, and calculus.

// - **0°** = $0$ rad = 0.0000
// - **30°** = $\\pi/6$ = 0.5236
// - **45°** = $\\pi/4$ = 0.7854
// - **60°** = $\\pi/3$ = 1.0472
// - **90°** = $\\pi/2$ = 1.5708
// - **180°** = $\\pi$ = 3.1416
// - **270°** = $3\\pi/2$ = 4.7124
// - **360°** = $2\\pi$ = 6.2832

// The first four (0°, 30°, 45°, 60°) plus 90° are the canonical first-quadrant reference angles. The rest are their multiples — 120° is $2\\pi/3$, 135° is $3\\pi/4$, 150° is $5\\pi/6$, and so on around the circle.

// Memorizing these eight values pays off: every other angle in trigonometry reduces to a reference angle from this set, and trig function values at non-reference angles always reduce to function values at reference angles via the angle-sum, double-angle, or co-function identities.`,
//       before:``, after:``, link:''
//     },

//     obj7:{
//       title:`Why π Appears Everywhere`,
//       content:`The constant $\\pi$ enters angle measurement through arc length. A circle of radius $r$ has circumference $2\\pi r$. A full revolution sweeps that entire circumference; a half-revolution sweeps half of it, $\\pi r$.

// Radians measure angle as a ratio: arc length divided by radius. So a full revolution measures $2\\pi r / r = 2\\pi$ radians, and a half-revolution measures $\\pi$ radians. Degrees, in contrast, are an arbitrary partition: 360 was chosen by ancient astronomers (likely because 360 has many divisors).

// This is why $180° = \\pi$ radians is the defining relationship, and why the conversion factors $\\pi/180$ and $180/\\pi$ are exact constants, not approximations.

// The deeper reason radians get used in calculus: the derivative of $\\sin(x)$ equals $\\cos(x)$ only when $x$ is in radians. In degrees, you pick up an extra factor of $\\pi/180$ every time you differentiate. Radians are the unit that makes the math clean.`,
//       before:``, after:``, link:''
//     },

//     obj8:{
//       title:`When to Use Degrees vs Radians`,
//       content:`Use **degrees** for:

// - Navigation, surveying, and geographic coordinates (latitude, longitude, bearings).
// - Engineering drawings, mechanical specifications, and most everyday measurement contexts.
// - Hand calculations where the angles are simple fractions of a circle (90°, 45°, 30°).
// - Communication with non-mathematical audiences — "30 degrees" is intuitive in a way "π/6" is not.

// Use **radians** for:

// - Calculus — derivatives, integrals, Taylor series of trig functions all assume radians.
// - Physics — angular velocity, simple harmonic motion, wave equations.
// - Most programming languages' math libraries — JavaScript's $\\texttt{Math.sin}$, Python's $\\texttt{math.sin}$, and C's $\\texttt{sin}$ all take radians. Pass degrees in and you get nonsense.
// - Any exact-value work where $\\pi$ should appear symbolically.

// A common workflow: think and design in degrees, convert to radians when feeding values into a function or formula, convert back when displaying results to humans.`,
//       before:``, after:``, link:''
//     },

//     obj9:{
//       title:`Related Tools and Concepts`,
//       content:`This table answers "what is X° in radians" (or vice versa). For related work:

// - **Unit Circle** — the visual companion to this table. Shows where each reference angle sits on the circle and gives the sine and cosine values at each.
// - **Trigonometry Calculator** — once an angle is converted, compute its trig function values (sin, cos, tan, and the rest) at that angle.
// - **Angle Converter** — useful for non-whole-degree inputs (like 17.4°) that aren't in this table. Accepts arbitrary decimal values in either unit.
// - **Trigonometry Tables** — sin, cos, tan values at the standard reference angles, in both degrees and radians.

// Related concepts you'll meet elsewhere:

// - **Arc length** — the radian definition: arc length = radius × angle in radians.
// - **Sector area** — $A = \\frac{1}{2} r^2 \\theta$ when $\\theta$ is in radians.
// - **Angular velocity** — measured in radians per second, almost never in degrees per second.

// The sidebar to the left of the table holds direct links to the related tools.`,
//       before:``, after:``, link:''
//     },

//     obj10:{ title:``, content:``, before:``, after:``, link:'' },
//     obj11:{ title:``, content:``, before:``, after:``, link:'' },
//     obj12:{ title:``, content:``, before:``, after:``, link:'' },
//     obj13:{ title:``, content:``, before:``, after:``, link:'' },
//     obj14:{ title:``, content:``, before:``, after:``, link:'' },
//     obj15:{ title:``, content:``, before:``, after:``, link:'' }

//   }


//   const faqQuestions = {
//     obj1: {
//       question: "How do you convert degrees to radians?",
//       answer: "Multiply the angle in degrees by pi divided by 180. The conversion factor follows from the fact that a full circle equals 360 degrees or 2 pi radians, so 180 degrees equals pi radians. For example, 60 degrees times pi over 180 equals pi over 3 radians."
//     },
//     obj2: {
//       question: "How do you convert radians to degrees?",
//       answer: "Multiply the angle in radians by 180 divided by pi. This is the inverse of the degree-to-radian conversion. For example, pi over 4 radians times 180 over pi equals 45 degrees."
//     },
//     obj3: {
//       question: "What is 360 degrees in radians?",
//       answer: "360 degrees equals 2 pi radians, which is approximately 6.2832 radians. This represents one full revolution. Half a revolution, 180 degrees, equals pi radians, which is the defining relationship between the two units."
//     },
//     obj4: {
//       question: "What are the most common angles in degrees and radians?",
//       answer: "The common reference angles are 0, 30, 45, 60, 90, 180, 270, and 360 degrees, which correspond to 0, pi over 6, pi over 4, pi over 3, pi over 2, pi, 3 pi over 2, and 2 pi radians. These appear constantly in trigonometry and on the unit circle."
//     },
//     obj5: {
//       question: "Why use radians instead of degrees?",
//       answer: "Radians are the natural unit for angle measurement in calculus and higher mathematics. Derivatives and integrals of trigonometric functions take their simplest form when the input is in radians. Degrees remain standard in everyday applications like navigation and engineering."
//     }
//   }


//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Degrees to Radians Conversion Table",
//       "description": "Complete degrees to radians conversion table covering every whole degree from 0 to 360. Three columns per row: degrees, simplified pi-form radians, and decimal radians.",
//       "url": "https://www.learnmathclass.com/tables/angle-conversion",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Complete reference table covering every whole degree from 0 to 360 (361 rows)",
//         "Three columns: degrees, radians in simplified pi form, and decimal radians to four decimal places",
//         "Pi-form column auto-simplifies the fraction (90 degrees displays as pi over 2, 60 degrees as pi over 3, 360 degrees as 2 pi)",
//         "Live search box with a toggle to match either the degrees column or the radians columns (pi form and decimal)",
//         "Matching characters are highlighted in yellow within the searched column",
//         "Both conversion formulas displayed above the table: degrees to radians and radians to degrees",
//         "Sticky table header stays visible while scrolling through the rows"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Reference Table",
//       "educationalLevel": "High School, College",
//       "keywords": keyWords.join(", ")
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Tables",
//           "item": "https://www.learnmathclass.com/tables"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Angle Conversion",
//           "item": "https://www.learnmathclass.com/tables/angle-conversion"
//         }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }


//    return {
//       props:{
//          sectionsContent,
//          navigationGroup,
//          faqQuestions,
//          schemas,
//          seoData: {
//            title: "Degrees to Radians Table: 0\u00B0 to 360\u00B0 | Learn Math Class",
//            description: "Complete degrees to radians conversion table from 0\u00B0 to 360\u00B0. Three columns per row: degrees, simplified pi-form radians, and decimal radians.",
//            keywords: keyWords.join(", "),
//            url: "/tables/angle-conversion",
//            name: "Degrees to Radians Conversion Table",
//            hubDescription: "Look up any whole-degree angle from 0\u00B0 to 360\u00B0 in three forms: degrees, simplified pi-form radians, and decimal radians to four decimal places. Live search filters by either degrees or radians (pi form or decimal) with yellow match highlighting in the searched column. Both conversion formulas are shown above the table.",
//            category: "Trigonometry",
//            subCategory: "Tables",
//          }
//        }
//     }
//    }

// export default function AngleConversionTable({seoData, sectionsContent, navigationGroup, faqQuestions, schemas}) {

//   const genericSections=[
//     { id:'0', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
//     { id:'1', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
//     { id:'2', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
//     { id:'3', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
//     { id:'4', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
//     { id:'5', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
//     { id:'6', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
//     { id:'7', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
//     { id:'8', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
//     { id:'9', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
//     // { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
//     // { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
//     // { id:'12', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
//     // { id:'13', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
//     // { id:'14', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
//     // { id:'15', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
//   ]

//   return (
//     <>
//     <Head>
//       <title>{seoData.title}</title>
//       <meta name="description" content={seoData.description} />
//       <meta name="keywords" content={seoData.keywords} />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//       <meta property="og:title" content={seoData.title} />
//       <meta property="og:description" content={seoData.description} />
//       <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//       <meta property="og:type" content="article" />
//       <meta property="og:site_name" content="Learn Math Class" />

//       <meta name="twitter:card" content="summary" />
//       <meta name="twitter:title" content={seoData.title} />
//       <meta name="twitter:description" content={seoData.description} />

//       <meta name="robots" content="index, follow" />

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(schemas.webApplication)
//         }}
//       />

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(schemas.breadcrumb)
//         }}
//       />

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(schemas.faq)
//         }}
//       />
//     </Head>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//              side='right'
//              // topOffset='65px' 
//              sidebarWidth='45px'
//              panelWidth='300px'
//              iconColor='white'
//              panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'-60px'}}>Angle Conversion Table</h1>
//     <br/>
//     {/* <VerticalButtonGroup 
//             items={navigationGroup}
//             width="250px"       
//             theme='lightBlue'
//             isSticky={true}
//             verticalOffset='260px'
//          /> */}
//     <VerticalButtonGroup
//        items={navigationGroup}
//        width="250px"
//        theme='lightBlue'
//        isSticky={true}
//        verticalOffset='200px'
//     />
//     <DegreeRadianConversionTable/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <SectionTableOfContents sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <Sections sections={genericSections}/>
//     <br/>
//     <br/>
//     <br/>
//     {/* <ScrollUpButton/> */}
    
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import DegreeRadianConversionTable from '@/app/components/tables/conversion-tables/DegreeRadianConversion'
import '../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import Head from 'next/head'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'


 export async function getStaticProps(){

  const keyWords = [
    'angle conversion',
    'angle conversion table',
    'degrees to radians',
    'degrees to radians table',
    'radians to degrees',
    'degree to radian conversion',
    'degree radian conversion table',
    'pi radians table',
    '30 degrees in radians',
    '45 degrees in radians',
    '60 degrees in radians',
    '90 degrees in radians',
    '180 degrees in radians',
    '270 degrees in radians',
    '360 degrees in radians',
  ]

const navigationGroup=[
  {title:'Related Tools',
    items:[
      {title:'Unit Circle',link:'/visual-tools/unit-circle'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Angle Converter',link:'/converters/degree-radians'},
    ]
  },
  {
    title:'Related Tables',
    items:[
      {title:'Trigonometry Tables',link:'/tables/trigonometry'}
    ]
  }
]


  const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`**Degree** — Unit of angle measurement where a full revolution equals 360°. Each degree splits into 60 arc-minutes; each arc-minute into 60 arc-seconds.

**Radian** — Unit of angle measurement where a full revolution equals $2\\pi$ radians. One radian is the angle subtended at the center of a circle by an arc equal in length to the radius.

**$\\pi$ (pi)** — The ratio of a circle's circumference to its diameter, approximately 3.14159. Appears because $180° = \\pi$ radians.

**Pi-form** — A radian value written as a multiple of $\\pi$, like $\\pi/2$ or $3\\pi/4$. Exact and compact; preferred over decimal whenever the angle is a clean fraction of a circle.

**Reference angle** — One of the standard angles (0°, 30°, 45°, 60°, 90°, and their multiples) whose trigonometric values are memorized because every other angle reduces to one of them.`,
      before:``, after:``, link:''
    },

    obj1:{
      title:`What This Table Shows`,
      content:`The table lists every whole degree from 0° to 360° — 361 rows in total — in three columns:

- **Degrees** — the angle written with the degree symbol (e.g., 47°).
- **Radians (π form)** — the same angle as a simplified fraction of $\\pi$ (e.g., $47\\pi/180$).
- **Radians (Decimal)** — the same angle as a decimal value rounded to four places (e.g., 0.8203).

Above the table is a formula box showing both conversion formulas. The table itself sits in a scrollable container with a sticky header, so the column labels stay visible while you scroll. A search box with a degrees/radians toggle filters the rows in real time.

This is a lookup tool. Every angle you might need to convert is already there — scroll, search, or read across the row.`,
      before:``, after:``, link:''
    },

    obj2:{
      title:`Reading the π-Form and Decimal Columns`,
      content:`The π-form column shows each radian value as a simplified fraction. The numerator and denominator are reduced by their greatest common divisor before display, so:

- 90° appears as $\\pi/2$ (not $90\\pi/180$).
- 60° appears as $\\pi/3$.
- 45° appears as $\\pi/4$.
- 180° appears as $\\pi$ (the "1" coefficient drops).
- 360° appears as $2\\pi$.

When the numerator simplifies to 1, the "1" is omitted: 30° becomes $\\pi/6$, not $1\\pi/6$.

The decimal column shows the same value as a four-place decimal: 90° as 1.5708, 60° as 1.0472, 45° as 0.7854. Use the π-form column when you need an exact value (for trig identities, calculus, or exact answers); use the decimal column when you need a numerical result for a calculator, a physics problem, or a programming context.

Some angles like 47° or 113° have no clean π-form simplification. The π-form column still shows them as $47\\pi/180$ or $113\\pi/180$ — exact, just not pretty. The decimal column is usually more useful for these.`,
      before:``, after:``, link:''
    },

    obj3:{
      title:`Using the Search`,
      content:`Type any number into the search box and the table filters live. The degrees/radians toggle next to the search box controls **which column the search matches against**:

- **Degrees toggle**: the query is matched against the degrees column only. Typing "45" filters to every degree value containing "45" — 45°, 145°, 245°, 345°.
- **Radians toggle**: the query is matched against both radian columns. Typing "0.7" matches the decimal column (rows like 0.7854, 0.7330); typing "π/4" or "/4" matches the π-form column.

The search uses simple substring matching, so partial inputs work: "18" with the degrees toggle returns 18°, 180°, 181°, ..., 189°, 280°, 281°, ..., 318°. The × button on the right of the search box resets the query and shows all 361 rows again.

The toggle switches the search context but does not clear the current query, so flipping degrees → radians instantly reinterprets the same string against the radian columns.`,
      before:``, after:``, link:''
    },

    obj4:{
      title:`Match Highlighting`,
      content:`Matching characters within the filtered rows are highlighted in yellow. Highlighting is **column-specific** — only the column being searched gets the yellow mark:

- With the degrees toggle, only the degrees column highlights matched characters. The radian columns display their values unhighlighted.
- With the radians toggle, both the π-form column and the decimal column can highlight matches (whichever column the substring actually appears in).

This makes it easy to confirm at a glance why a given row matched. If you search "π/3" and a row appears with no visible highlight, the match came from the decimal column instead.

The highlight is purely visual; it doesn't change the underlying values or the table layout.`,
      before:``, after:``, link:''
    },

    obj5:{
      title:`The Conversion Formulas`,
      content:`Both formulas appear in the blue box above the table:

$$\\text{rad} = \\text{deg} \\times \\frac{\\pi}{180}$$

$$\\text{deg} = \\text{rad} \\times \\frac{180}{\\pi}$$

Both formulas follow from a single fact: a half-revolution measures 180° in degrees and $\\pi$ in radians. Setting these equal gives $180° = \\pi$ radians, which divides into the two conversion factors above.

Worked example — converting 60° to radians:

$$60 \\times \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$$

Worked example — converting $\\pi/4$ radians to degrees:

$$\\frac{\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{180}{4} = 45°$$

The $\\pi$ cancels cleanly whenever the radian value is a rational multiple of $\\pi$, which is why the π-form is the standard way to write exact angles in trigonometry and calculus.`,
      before:``, after:``, link:''
    },

    obj6:{
      title:`Common Reference Angles`,
      content:`These eight angles cover most of trigonometry. Their values appear constantly in unit-circle work, trig identities, and calculus.

- **0°** = $0$ rad = 0.0000
- **30°** = $\\pi/6$ = 0.5236
- **45°** = $\\pi/4$ = 0.7854
- **60°** = $\\pi/3$ = 1.0472
- **90°** = $\\pi/2$ = 1.5708
- **180°** = $\\pi$ = 3.1416
- **270°** = $3\\pi/2$ = 4.7124
- **360°** = $2\\pi$ = 6.2832

The first four (0°, 30°, 45°, 60°) plus 90° are the canonical first-quadrant reference angles. The rest are their multiples — 120° is $2\\pi/3$, 135° is $3\\pi/4$, 150° is $5\\pi/6$, and so on around the circle.

Memorizing these eight values pays off: every other angle in trigonometry reduces to a reference angle from this set, and trig function values at non-reference angles always reduce to function values at reference angles via the angle-sum, double-angle, or co-function identities.`,
      before:``, after:``, link:''
    },

    obj7:{
      title:`Why π Appears Everywhere`,
      content:`The constant $\\pi$ enters angle measurement through arc length. A circle of radius $r$ has circumference $2\\pi r$. A full revolution sweeps that entire circumference; a half-revolution sweeps half of it, $\\pi r$.

Radians measure angle as a ratio: arc length divided by radius. So a full revolution measures $2\\pi r / r = 2\\pi$ radians, and a half-revolution measures $\\pi$ radians. Degrees, in contrast, are an arbitrary partition: 360 was chosen by ancient astronomers (likely because 360 has many divisors).

This is why $180° = \\pi$ radians is the defining relationship, and why the conversion factors $\\pi/180$ and $180/\\pi$ are exact constants, not approximations.

The deeper reason radians get used in calculus: the derivative of $\\sin(x)$ equals $\\cos(x)$ only when $x$ is in radians. In degrees, you pick up an extra factor of $\\pi/180$ every time you differentiate. Radians are the unit that makes the math clean.`,
      before:``, after:``, link:''
    },

    obj8:{
      title:`When to Use Degrees vs Radians`,
      content:`Use **degrees** for:

- Navigation, surveying, and geographic coordinates (latitude, longitude, bearings).
- Engineering drawings, mechanical specifications, and most everyday measurement contexts.
- Hand calculations where the angles are simple fractions of a circle (90°, 45°, 30°).
- Communication with non-mathematical audiences — "30 degrees" is intuitive in a way "π/6" is not.

Use **radians** for:

- Calculus — derivatives, integrals, Taylor series of trig functions all assume radians.
- Physics — angular velocity, simple harmonic motion, wave equations.
- Most programming languages' math libraries — JavaScript's $\\texttt{Math.sin}$, Python's $\\texttt{math.sin}$, and C's $\\texttt{sin}$ all take radians. Pass degrees in and you get nonsense.
- Any exact-value work where $\\pi$ should appear symbolically.

A common workflow: think and design in degrees, convert to radians when feeding values into a function or formula, convert back when displaying results to humans.`,
      before:``, after:``, link:''
    },

    obj9:{
      title:`Related Tools and Concepts`,
      content:`This table answers "what is X° in radians" (or vice versa). For related work:

- **Unit Circle** — the visual companion to this table. Shows where each reference angle sits on the circle and gives the sine and cosine values at each.
- **Trigonometry Calculator** — once an angle is converted, compute its trig function values (sin, cos, tan, and the rest) at that angle.
- **Angle Converter** — useful for non-whole-degree inputs (like 17.4°) that aren't in this table. Accepts arbitrary decimal values in either unit.
- **Trigonometry Tables** — sin, cos, tan values at the standard reference angles, in both degrees and radians.

Related concepts you'll meet elsewhere:

- **Arc length** — the radian definition: arc length = radius × angle in radians.
- **Sector area** — $A = \\frac{1}{2} r^2 \\theta$ when $\\theta$ is in radians.
- **Angular velocity** — measured in radians per second, almost never in degrees per second.

The sidebar to the left of the table holds direct links to the related tools.`,
      before:``, after:``, link:''
    },

    obj10:{ title:``, content:``, before:``, after:``, link:'' },
    obj11:{ title:``, content:``, before:``, after:``, link:'' },
    obj12:{ title:``, content:``, before:``, after:``, link:'' },
    obj13:{ title:``, content:``, before:``, after:``, link:'' },
    obj14:{ title:``, content:``, before:``, after:``, link:'' },
    obj15:{ title:``, content:``, before:``, after:``, link:'' }

  }


  const faqQuestions = {
    obj1: {
      question: "How do you convert degrees to radians?",
      answer: "Multiply the angle in degrees by pi divided by 180. The conversion factor follows from the fact that a full circle equals 360 degrees or 2 pi radians, so 180 degrees equals pi radians. For example, 60 degrees times pi over 180 equals pi over 3 radians."
    },
    obj2: {
      question: "How do you convert radians to degrees?",
      answer: "Multiply the angle in radians by 180 divided by pi. This is the inverse of the degree-to-radian conversion. For example, pi over 4 radians times 180 over pi equals 45 degrees."
    },
    obj3: {
      question: "What is 360 degrees in radians?",
      answer: "360 degrees equals 2 pi radians, which is approximately 6.2832 radians. This represents one full revolution. Half a revolution, 180 degrees, equals pi radians, which is the defining relationship between the two units."
    },
    obj4: {
      question: "What are the most common angles in degrees and radians?",
      answer: "The common reference angles are 0, 30, 45, 60, 90, 180, 270, and 360 degrees, which correspond to 0, pi over 6, pi over 4, pi over 3, pi over 2, pi, 3 pi over 2, and 2 pi radians. These appear constantly in trigonometry and on the unit circle."
    },
    obj5: {
      question: "Why use radians instead of degrees?",
      answer: "Radians are the natural unit for angle measurement in calculus and higher mathematics. Derivatives and integrals of trigonometric functions take their simplest form when the input is in radians. Degrees remain standard in everyday applications like navigation and engineering."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Degrees to Radians Conversion Table",
      "description": "Complete degrees to radians conversion table covering every whole degree from 0 to 360. Three columns per row: degrees, simplified pi-form radians, and decimal radians.",
      "url": "https://www.learnmathclass.com/tables/angle-conversion",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Complete reference table covering every whole degree from 0 to 360 (361 rows)",
        "Three columns: degrees, radians in simplified pi form, and decimal radians to four decimal places",
        "Pi-form column auto-simplifies the fraction (90 degrees displays as pi over 2, 60 degrees as pi over 3, 360 degrees as 2 pi)",
        "Live search box with a toggle to match either the degrees column or the radians columns (pi form and decimal)",
        "Matching characters are highlighted in yellow within the searched column",
        "Both conversion formulas displayed above the table: degrees to radians and radians to degrees",
        "Sticky table header stays visible while scrolling through the rows"
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
          "name": "Angle Conversion",
          "item": "https://www.learnmathclass.com/tables/angle-conversion"
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
         navigationGroup,
         faqQuestions,
         schemas,
         seoData: {
           title: "Degrees to Radians Table: 0\u00B0 to 360\u00B0 | Learn Math Class",
           description: "Complete degrees to radians conversion table from 0\u00B0 to 360\u00B0. Three columns per row: degrees, simplified pi-form radians, and decimal radians.",
           keywords: keyWords.join(", "),
           url: "/tables/angle-conversion",
           name: "Degrees to Radians Conversion Table",
           hubDescription: "Look up any whole-degree angle from 0\u00B0 to 360\u00B0 in three forms: degrees, simplified pi-form radians, and decimal radians to four decimal places. Live search filters by either degrees or radians (pi form or decimal) with yellow match highlighting in the searched column. Both conversion formulas are shown above the table.",
           category: "Trigonometry",
           subCategory: "Tables",
         }
       }
    }
   }

export default function AngleConversionTable({seoData, sectionsContent, navigationGroup, faqQuestions, schemas}) {

  const genericSections=[
    { id:'0', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
    { id:'1', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
    { id:'2', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
    { id:'3', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
    { id:'4', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
    { id:'5', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
    { id:'6', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
    { id:'7', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
    { id:'8', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
    { id:'9', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
    // { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
    // { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
    // { id:'12', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
    // { id:'13', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
    // { id:'14', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
    // { id:'15', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
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
             panelWidth='300px'
             iconColor='white'
             panelBackgroundColor='#f2f2f2'/> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Angle Conversion Table</h1>
    <br/>
    {/* <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='260px'
         /> */}
    <div style={{display: 'flex', alignItems: 'flex-start', gap: '100px', width: '100%'}}>
       <div style={{flexShrink: 0, width: '200px'}}>
          <VerticalButtonGroup
             items={navigationGroup}
             width="200px"
             theme='lightBlue'
             isSticky={true}
             verticalOffset='250px'
          />
       </div>
       <div style={{flexGrow: 1, minWidth: 0}}>
          <DegreeRadianConversionTable/>
       </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <SectionTableOfContents sections={genericSections}/>
    <br/>
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