// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../pages/pages.css';
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   "mixed numbers",
//   "improper fractions",
//   "convert mixed number to improper fraction",
//   "convert improper fraction to mixed number",
//   "what is a mixed number",
//   "mixed number definition",
//   "mixed number examples",
//   "improper fraction to mixed number",
//   "mixed number to improper fraction",
//   "adding mixed numbers",
//   "multiplying mixed numbers",
//   "comparing mixed numbers",
//   "mixed numbers and improper fractions",
//   "how to convert mixed numbers",
//   "mixed number operations"
// ]

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

//    obj0: {
//   title: `Key Terms`,
//   content: `
// - [Mixed Number](!/arithmetic/definitions#mixed_number) — the central concept on this page
// - [Improper Fraction](!/arithmetic/definitions#improper_fraction) — the form mixed numbers convert to and from
// - [Proper Fraction](!/arithmetic/definitions#proper_fraction) — the fractional part of every mixed number must be proper`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
//   link: '',
// },

//   obj1: {
//     title: `What Is a Mixed Number`,
//     content: `A mixed number consists of two parts written together: a whole number and a proper fraction. The whole number counts complete units, while the fraction accounts for the remaining partial unit. In $5\\frac{2}{3}$, the whole part is 5 and the fractional part is $\\frac{2}{3}$.

// Mixed numbers arise naturally in measurement and everyday contexts. A length of $3\\frac{1}{2}$ inches, a recipe calling for $2\\frac{1}{4}$ cups, or a time of $1\\frac{1}{2}$ hours all use mixed number notation because it communicates quantity more intuitively than the equivalent improper fractions $\\frac{7}{2}$, $\\frac{9}{4}$, and $\\frac{3}{2}$.

// The fractional part of a mixed number must be a proper fraction. If someone writes $3\\frac{5}{4}$, this is not standard form because $\\frac{5}{4}$ exceeds one. The correct mixed number is $4\\frac{1}{4}$, obtained by absorbing the extra whole unit from the improper fractional part.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Improper Fractions`,
//     content: `An improper fraction has a numerator greater than or equal to its denominator. The value is at least one because the numerator indicates that at least as many parts are taken as exist in a single whole. Examples include $\\frac{7}{4}$, $\\frac{11}{3}$, and $\\frac{8}{8}$.

// The term "improper" does not mean incorrect. Improper fractions are valid mathematical expressions and are often preferable for computation. [Multiplying](!/arithmetic/fractions/multiplying) and [dividing](!/arithmetic/fractions/dividing) fractions is simpler when all values are in improper form, avoiding the need to handle whole and fractional parts separately.

// On a number line, improper fractions appear at or beyond the point marked 1. The fraction $\\frac{5}{3}$ lies between 1 and 2, specifically at $1\\frac{2}{3}$. The fraction $\\frac{8}{4}$ lands exactly at 2, since eight fourths equal two wholes.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Converting Improper Fractions to Mixed Numbers`,
//     content: `Converting an improper fraction to a mixed number involves dividing the numerator by the denominator. The quotient becomes the whole number, the remainder becomes the new numerator, and the denominator stays unchanged.

// To convert $\\frac{17}{5}$, divide 17 by 5. The quotient is 3 with a remainder of 2. The mixed number is $3\\frac{2}{5}$, meaning three whole units and two-fifths of another.

// Another example: convert $\\frac{23}{4}$. Dividing 23 by 4 gives a quotient of 5 and a remainder of 3. The result is $5\\frac{3}{4}$.

// When the numerator is exactly divisible by the denominator, the result is a whole number with no fractional part. The fraction $\\frac{18}{6}$ converts to simply 3, since $18 \\div 6 = 3$ with no remainder.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Converting Mixed Numbers to Improper Fractions`,
//     content: `Converting a mixed number to an improper fraction reverses the division process. Multiply the whole number by the denominator, add the numerator, and place the result over the original denominator.

// To convert $4\\frac{2}{7}$, compute $(4 \\times 7) + 2 = 30$. The improper fraction is $\\frac{30}{7}$.

// Another example: convert $6\\frac{5}{8}$. Compute $(6 \\times 8) + 5 = 53$. The result is $\\frac{53}{8}$.

// This conversion is essential before performing multiplication or division. Operating on mixed numbers directly leads to errors because the whole and fractional parts do not combine in straightforward ways under these operations.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Comparing Mixed Numbers`,
//     content: `Comparing mixed numbers begins with the whole parts. A larger whole part means a larger overall value. The mixed number $5\\frac{1}{8}$ exceeds $4\\frac{7}{8}$ because 5 wholes surpass 4 wholes regardless of the fractional parts.

// When whole parts are equal, comparison shifts to the fractional parts. Between $3\\frac{2}{5}$ and $3\\frac{4}{5}$, the whole parts match, so the fractions determine order. Since $\\frac{4}{5} > \\frac{2}{5}$, the second mixed number is larger.

// Comparing fractional parts sometimes requires finding a common denominator or using other methods from [comparing fractions](!/arithmetic/fractions/comparing). For $7\\frac{3}{4}$ versus $7\\frac{5}{6}$, convert both fractions to twelfths: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{5}{6} = \\frac{10}{12}$. Since $\\frac{10}{12} > \\frac{9}{12}$, the value $7\\frac{5}{6}$ is greater.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Operations with Mixed Numbers`,
//     content: `Arithmetic with mixed numbers follows two general strategies. The first converts all mixed numbers to improper fractions, performs the operation, and converts back. The second handles whole and fractional parts separately, which works well for addition and subtraction but poorly for multiplication and division.

// [Adding and subtracting mixed numbers](!/arithmetic/fractions/adding-subtracting) can use either strategy. Adding $2\\frac{1}{3} + 4\\frac{1}{2}$ by parts means adding $2 + 4 = 6$ for wholes and $\\frac{1}{3} + \\frac{1}{2} = \\frac{5}{6}$ for fractions, giving $6\\frac{5}{6}$. Subtraction sometimes requires borrowing when the first fractional part is smaller than the second.

// [Multiplying mixed numbers](!/arithmetic/fractions/multiplying) requires conversion to improper fractions. To compute $2\\frac{1}{2} \\times 3\\frac{1}{3}$, convert to $\\frac{5}{2} \\times \\frac{10}{3} = \\frac{50}{6} = 8\\frac{2}{6} = 8\\frac{1}{3}$. Attempting to multiply whole parts and fractional parts separately produces incorrect results.

// [Dividing mixed numbers](!/arithmetic/fractions/dividing) also demands improper form. Convert both values, apply the reciprocal rule, and simplify. The expression $4\\frac{1}{2} \\div 1\\frac{1}{2}$ becomes $\\frac{9}{2} \\div \\frac{3}{2} = \\frac{9}{2} \\times \\frac{2}{3} = \\frac{18}{6} = 3$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Mixed Numbers on the Number Line`,
//     content: `Mixed numbers occupy positions between consecutive whole numbers on the number line. The value $3\\frac{1}{4}$ lies one-quarter of the way from 3 toward 4. The value $3\\frac{3}{4}$ lies three-quarters of the way along the same interval.

// Placing a mixed number on the number line reinforces the connection to its improper fraction equivalent. Both $2\\frac{2}{5}$ and $\\frac{12}{5}$ mark exactly the same point, located two-fifths of the distance from 2 to 3. The two notations differ in form but describe identical quantities.

// Number line visualization also supports estimation and rounding. A mixed number like $6\\frac{7}{8}$ is very close to 7, while $6\\frac{1}{8}$ is barely past 6. Recognizing these proximities helps in mental math and checking whether computed answers are reasonable.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

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
//   title: "Combining Wholes with Parts",
//   content: `A mixed number combines a whole number with a proper fraction, expressing quantities greater than one in an intuitive format. The value $2\\frac{3}{4}$ represents two whole units plus three-fourths of another unit. Mixed numbers and improper fractions are two representations of the same quantities, and converting between them is essential for arithmetic operations.`
// }


// const faqQuestions = {
//   obj1: {
//     question: "What is a mixed number?",
//     answer: "A mixed number combines a whole number with a proper fraction, like 5²/₃. The whole number counts complete units, while the fraction represents the remaining partial unit. Mixed numbers express quantities greater than one in an intuitive format.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is an improper fraction?",
//     answer: "An improper fraction has a numerator greater than or equal to its denominator, like 7/4 or 11/3. The value is at least 1. Despite the name, improper fractions are valid and often preferred for multiplication and division calculations.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How do you convert an improper fraction to a mixed number?",
//     answer: "Divide the numerator by the denominator. The quotient becomes the whole number, the remainder becomes the new numerator, and the denominator stays the same. Example: 17/5 = 3²/₅ because 17 ÷ 5 = 3 remainder 2.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "How do you convert a mixed number to an improper fraction?",
//     answer: "Multiply the whole number by the denominator, add the numerator, and place the result over the original denominator. Example: 4²/₇ becomes (4 × 7) + 2 = 30, so the improper fraction is 30/7.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "How do you compare mixed numbers?",
//     answer: "First compare the whole parts — a larger whole means a larger value. If whole parts are equal, compare the fractional parts. You may need to find a common denominator to compare the fractions accurately.",
//     sectionId: "5"
//   },
//   obj6: {
//     question: "How do you add mixed numbers?",
//     answer: "Either convert to improper fractions and add, or add whole parts and fractional parts separately. When adding by parts, if the fractional sum exceeds 1, carry the extra whole unit to the whole number sum.",
//     sectionId: "6"
//   },
//   obj7: {
//     question: "How do you multiply mixed numbers?",
//     answer: "Convert all mixed numbers to improper fractions first, then multiply numerators together and denominators together. Do not try to multiply whole and fractional parts separately — this gives wrong answers.",
//     sectionId: "6"
//   },
//   obj8: {
//     question: "How do you divide mixed numbers?",
//     answer: "Convert both mixed numbers to improper fractions, then multiply the first fraction by the reciprocal of the second. Example: 4½ ÷ 1½ = 9/2 ÷ 3/2 = 9/2 × 2/3 = 3.",
//     sectionId: "6"
//   },
//   obj9: {
//     question: "Why convert mixed numbers to improper fractions for calculations?",
//     answer: "Improper fractions allow direct application of fraction rules. Multiplying or dividing mixed numbers directly leads to errors because whole and fractional parts don't combine simply under these operations.",
//     sectionId: "6"
//   },
//   obj10: {
//     question: "Where do mixed numbers appear on a number line?",
//     answer: "Mixed numbers appear between consecutive whole numbers. The value 3¼ lies one-quarter of the way from 3 to 4. Both 2²/₅ and 12/5 mark the same point — different notations for identical quantities.",
//     sectionId: "7"
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Mixed Numbers",
//     "description": "Learn mixed numbers and improper fractions: definitions, conversions, comparisons, and operations. Step-by-step methods with examples for adding, multiplying, and dividing.",
//     "url": "https://www.learnmathclass.com/arithmetic/fractions/mixed-numbers",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "Elementary, Middle School",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Mixed Numbers and Improper Fractions"
//     },
//     "teaches": [
//       "Definition of mixed numbers",
//       "Definition of improper fractions",
//       "Converting improper fractions to mixed numbers",
//       "Converting mixed numbers to improper fractions",
//       "Comparing mixed numbers",
//       "Adding, multiplying, and dividing mixed numbers",
//       "Mixed numbers on the number line"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Arithmetic",
//         "item": "https://www.learnmathclass.com/arithmetic"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Fractions",
//         "item": "https://www.learnmathclass.com/arithmetic/fractions"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Mixed Numbers",
//         "item": "https://www.learnmathclass.com/arithmetic/fractions/mixed-numbers"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }


// return {
//   props: {
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Mixed Numbers & Improper Fractions: Conversions | Learn Math Class",
//       description: "Learn mixed numbers and improper fractions: definitions, conversions, comparisons, and operations. Step-by-step methods with examples for adding, multiplying, and dividing.",
//       keywords: keyWords.join(", "),
//       url: "/arithmetic/fractions/mixed-numbers",
//       name: "Mixed Numbers"
//     },
//   }
// }
//    }





// export default function MixedNumbersPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
//   const genericSections=[
//      {
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
//     // {
//     //     id:'8',
//     //     title:sectionsContent.obj8.title,
//     //     link:sectionsContent.obj8.link,
//     //     content:[
//     //       sectionsContent.obj8.content,
//     //     ]
//     // },
//     // {
//     //     id:'9',
//     //     title:sectionsContent.obj9.title,
//     //     link:sectionsContent.obj9.link,
//     //     content:[
//     //       sectionsContent.obj9.content,
//     //     ]
//     // },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
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
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
 

// <Head>
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
//       __html: JSON.stringify(schemas.learningResource)
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Mixed Numbers</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//        <KeyTermsCard
//               id="0"
//               title={sectionsContent.obj0.title}
//               content={sectionsContent.obj0.content}
//               after={sectionsContent.obj0.after}
//               variant="light"
//             />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-26 | 3 tables (obj4 aggregation, obj6 aggregation, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import renderFractionBar from '@/app/utils/illustrations/arithmetic/fractions/fractionBar'
import { tableHeaders } from '@/app/styles/theme'
import BeforeAfter from '@/app/components/infographics/BeforeAfter/BeforeAfter'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
const keyWords = [
  "mixed numbers",
  "improper fractions",
  "convert mixed number to improper fraction",
  "convert improper fraction to mixed number",
  "what is a mixed number",
  "mixed number definition",
  "mixed number examples",
  "improper fraction to mixed number",
  "mixed number to improper fraction",
  "adding mixed numbers",
  "multiplying mixed numbers",
  "comparing mixed numbers",
  "mixed numbers and improper fractions",
  "how to convert mixed numbers",
  "mixed number operations"
]

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj4 — aggregation: the two conversion procedures, side by side
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Direction</th>
      <th style="${tableHeaders.aggregation}">Step 1</th>
      <th style="${tableHeaders.aggregation}">Step 2</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Improper → mixed</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">divide numerator by denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quotient = whole part; remainder = new numerator; denominator unchanged</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">17⁄5: 17 ÷ 5 = 3 R 2 → 3 2⁄5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Mixed → improper</td>
      <td style="padding: 12px 15px; color: #34495e;">multiply whole × denominator, add the numerator</td>
      <td style="padding: 12px 15px; color: #34495e;">place result over the original denominator</td>
      <td style="padding: 12px 15px; color: #34495e;">4 2⁄7: (4×7)+2 = 30 → 30⁄7</td>
    </tr>
  </tbody>
</table>
`

  // obj6 — aggregation: which form to use for each operation
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Operation</th>
      <th style="${tableHeaders.aggregation}">Preferred approach</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/adding-subtracting" style="${linkStyle}">Add / subtract</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">work by parts (wholes with wholes, fractions with fractions) or convert to improper</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 1⁄3 + 4 1⁄2 = 6 + 5⁄6 = 6 5⁄6</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/multiplying" style="${linkStyle}">Multiply</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">convert to improper first, then multiply across; never multiply parts separately</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 1⁄2 × 3 1⁄3 = (5⁄2)(10⁄3) = 50⁄6 = 8 1⁄3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/dividing" style="${linkStyle}">Divide</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">convert to improper, then multiply by the reciprocal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4 1⁄2 ÷ 1 1⁄2 = 9⁄2 × 2⁄3 = 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/comparing" style="${linkStyle}">Compare</a></td>
      <td style="padding: 12px 15px; color: #34495e;">compare wholes first; if equal, compare fractional parts with a common denominator</td>
      <td style="padding: 12px 15px; color: #34495e;">7 3⁄4 vs 7 5⁄6 → 9⁄12 vs 10⁄12 → 7 5⁄6 wins</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: key facts and identities
  const capstoneTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Concept</th>
      <th style="${tableHeaders.summary}">Statement</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Mixed number form</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a whole number combined with a proper fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 2⁄3 = 5 + 2⁄3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Fractional part must be proper</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">if not, absorb the extra whole unit</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 5⁄4 → 4 1⁄4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Improper fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">numerator ≥ denominator; value ≥ 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">7⁄4, 11⁄3, 8⁄8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Boundary case</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when numerator = denominator, value = 1 exactly</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8⁄8 = 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exact divisibility</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">if denominator divides numerator evenly, the result is a whole number, not a mixed number</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">18⁄6 = 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Two forms, same value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">mixed and improper are equivalent representations marking the same point on the number line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 2⁄5 = 12⁄5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Whole part dominates comparison</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a larger whole always wins, regardless of the fractional parts</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 1⁄8 &gt; 4 7⁄8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Fractions break ties</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when whole parts match, the fraction comparison determines order</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 2⁄5 &lt; 3 4⁄5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Position between integers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a mixed number a b⁄c lies b⁄c of the way from a to a+1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 1⁄4 is a quarter past 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Estimation by proximity</td>
      <td style="padding: 12px 15px; color: #34495e;">mixed numbers near a whole boundary are useful estimates for mental math</td>
      <td style="padding: 12px 15px; color: #34495e;">6 7⁄8 ≈ 7</td>
    </tr>
  </tbody>
</table>
`


    const sectionsContent={

   obj0: {
  title: `Key Terms`,
  content: `
- [Mixed Number](!/arithmetic/definitions#mixed_number) — the central concept on this page
- [Improper Fraction](!/arithmetic/definitions#improper_fraction) — the form mixed numbers convert to and from
- [Proper Fraction](!/arithmetic/definitions#proper_fraction) — the fractional part of every mixed number must be proper`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
  link: '',
},

  obj1: {
    title: `What Is a Mixed Number`,
    content: `A mixed number consists of two parts written together: a whole number and a proper fraction. The whole number counts complete units, while the fraction accounts for the remaining partial unit. In $5\\frac{2}{3}$, the whole part is 5 and the fractional part is $\\frac{2}{3}$.

@academic[fact,aside:true,width:35%:Wall Street priced in mixed numbers
Until 2001, US stock prices were quoted as mixed numbers of dollars, such as $25\\frac{3}{8}$, in eighths and from 1997 in sixteenths. When the New York Stock Exchange finished its switch to decimals on 29 January 2001, its smallest price step fell from $\\frac{1}{16}$ of a dollar, 6.25 cents, to 1 cent.]@

Mixed numbers arise naturally in measurement and everyday contexts. A length of $3\\frac{1}{2}$ inches, a recipe calling for $2\\frac{1}{4}$ cups, or a time of $1\\frac{1}{2}$ hours all use mixed number notation because it communicates quantity more intuitively than the equivalent improper fractions $\\frac{7}{2}$, $\\frac{9}{4}$, and $\\frac{3}{2}$.

The fractional part of a mixed number must be a proper fraction. If someone writes $3\\frac{5}{4}$, this is not standard form because $\\frac{5}{4}$ exceeds one. The correct mixed number is $4\\frac{1}{4}$, obtained by absorbing the extra whole unit from the improper fractional part.`,
    before: ``,
    after: ``,
    link: '',
  },

  notation: {
    title: `Mixed Number Notation`,
    lead: `The one place in mathematics where writing two things side by side means adding them. That inversion, its grammar rule, and how the minus sign treats the pair — three conventions this page's arithmetic silently depends on.`,
    inherited: `The fraction bar, slash and obelus are owned by [fraction notation](!/arithmetic/fractions#notation); the improper form $\\frac{7}{4}$ is plain [fraction spelling](!/arithmetic/fractions#notation) needing no extra marks.`,
    entries: [
      {
        id: 'juxtaposition-addition',
        tex: `$2\\frac{3}{4}$`,
        read: `two and three quarters`,
        means: `Adjacency means addition — the only place in mathematics where it does: $2\\frac{3}{4} = 2 + \\frac{3}{4}$. The spoken form says the plus out loud — "two AND three quarters"; the written form hides it entirely.`,
        cases: `The convention exists for measurement and speech — rulers, recipes, times; computation converts to improper form first, as **Converting Mixed Numbers to Improper Fractions** below drills, precisely to escape the hidden plus.`,
        confusedWith: `Multiplication. Everywhere else adjacency multiplies — $2x$, $2\\pi$, $2\\sin\\theta$ — so $2\\frac{3}{4}$ read by algebra's rule gives $\\frac{3}{2}$, barely more than half the true value; the classic error this notation invites.`,
      },
      {
        id: 'standard-form-rule',
        tex: `$3\\frac{5}{4}$ vs $4\\frac{1}{4}$`,
        read: `non-standard form, and its correction`,
        means: `The grammar rule: a mixed number's fractional part must be proper — $3\\frac{5}{4}$ is legal arithmetic but non-standard spelling; absorbing the extra whole gives $4\\frac{1}{4}$, per **What Is a Mixed Number** above.`,
        cases: `Mid-computation the rule relaxes — carrying and borrowing pass through improper fractional parts freely; only final answers owe the standard form.`,
        confusedWith: `An error in value. $3\\frac{5}{4}$ and $4\\frac{1}{4}$ are the same number — the rule polices spelling, not arithmetic; marking the first "wrong" confuses form with value.`,
      },
      {
        id: 'sign-scope',
        tex: `$-2\\frac{3}{4}$`,
        read: `negative two and three quarters`,
        means: `The minus grips the whole package: $-2\\frac{3}{4} = -(2 + \\frac{3}{4}) = -2.75$ — never $-2 + \\frac{3}{4}$. The hidden plus inherits the sign along with everything else.`,
        cases: `Computation makes the scope explicit — convert first ($-\\frac{11}{4}$), operate second; keeping the mixed form through [subtraction](!/arithmetic/fractions/adding-subtracting) invites the split-sign slip.`,
        confusedWith: `A signed whole with a positive fraction. Reading the parts separately gives $-2 + 0.75 = -1.25$, off by $1.5$ from the true $-2.75$ — the [unary minus](!/complex-numbers/additive-inverse#3) binds the pair, not just the first part.`,
      },
    ],
    symbolsHref: `/math-symbols/arithmetic`,
    symbolsLabel: `All arithmetic symbols`,
    parentHref: `/arithmetic/fractions`,
    parentLabel: `Fractions`,
  },

  obj2: {
    title: `Improper Fractions`,
    content: `An improper fraction has a numerator greater than or equal to its denominator. The value is at least one because the numerator indicates that at least as many parts are taken as exist in a single whole. Examples include $\\frac{7}{4}$, $\\frac{11}{3}$, and $\\frac{8}{8}$.

The term "improper" does not mean incorrect. Improper fractions are valid mathematical expressions and are often preferable for computation. [Multiplying](!/arithmetic/fractions/multiplying) and [dividing](!/arithmetic/fractions/dividing) fractions is simpler when all values are in improper form, avoiding the need to handle whole and fractional parts separately.

On a number line, improper fractions appear at or beyond the point marked 1. The fraction $\\frac{5}{3}$ lies between 1 and 2, specifically at $1\\frac{2}{3}$. The fraction $\\frac{8}{4}$ lands exactly at 2, since eight fourths equal two wholes.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Converting Improper Fractions to Mixed Numbers`,
    content: `Converting an improper fraction to a mixed number involves dividing the numerator by the denominator. The quotient becomes the whole number, the remainder becomes the new numerator, and the denominator stays unchanged.

@academic[example:Example
To convert $\\frac{17}{5}$, divide 17 by 5. The quotient is 3 with a remainder of 2. The mixed number is $3\\frac{2}{5}$, meaning three whole units and two-fifths of another.]@

@academic[example:Example
Another example: convert $\\frac{23}{4}$. Dividing 23 by 4 gives a quotient of 5 and a remainder of 3. The result is $5\\frac{3}{4}$.]@

@academic[pitfall,aside:true,width:35%:Swapping quotient and remainder
Using the remainder as the whole part turns $\\frac{17}{5}$ into $2\\frac{3}{5}$, which equals $\\frac{13}{5}$. The quotient $3$ is the whole part and the remainder $2$ the numerator: $3\\frac{2}{5}$.
[Read more](!#pitfalls)]@

The two numbers from the division play different roles. The quotient counts how many complete wholes fit inside the fraction, and the remainder counts the parts left over once those wholes are filled. In $\\frac{23}{4}$, five wholes use up $5 \\times 4 = 20$ quarters, and the remaining $3$ quarters form the fractional part.

When the numerator is exactly divisible by the denominator, the result is a whole number with no fractional part. The fraction $\\frac{18}{6}$ converts to simply 3, since $18 \\div 6 = 3$ with no remainder.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Converting Mixed Numbers to Improper Fractions`,
    content: `Converting a mixed number to an improper fraction reverses the division process. Multiply the whole number by the denominator, add the numerator, and place the result over the original denominator.

@academic[example:Example
To convert $4\\frac{2}{7}$, compute $(4 \\times 7) + 2 = 30$. The improper fraction is $\\frac{30}{7}$.]@

@academic[example:Example
Another example: convert $6\\frac{5}{8}$. Compute $(6 \\times 8) + 5 = 53$. The result is $\\frac{53}{8}$.]@

@academic[pitfall,aside:true,width:35%:Adding the whole to the numerator
Adding $4$ straight onto the numerator turns $4\\frac{2}{7}$ into $\\frac{6}{7}$, a value below $1$. The wholes must first become sevenths: $4 \\times 7 + 2 = 30$, giving $\\frac{30}{7}$.
[Read more](!#pitfalls)]@

Each step of the conversion counts parts of one size. Multiplying the whole number by the denominator rewrites the complete units as parts: in $6\\frac{5}{8}$, the 6 wholes are $48$ eighths. Adding the numerator brings in the 5 eighths of the fractional part, and the denominator stays 8 because the size of the parts never changes.

This conversion is essential before performing multiplication or division. Operating on mixed numbers directly leads to errors because the whole and fractional parts do not combine in straightforward ways under these operations.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Comparing Mixed Numbers`,
    content: `Comparing mixed numbers begins with the whole parts. A larger whole part means a larger overall value. The mixed number $5\\frac{1}{8}$ exceeds $4\\frac{7}{8}$ because 5 wholes surpass 4 wholes regardless of the fractional parts.

When whole parts are equal, comparison shifts to the fractional parts. Between $3\\frac{2}{5}$ and $3\\frac{4}{5}$, the whole parts match, so the fractions determine order. Since $\\frac{4}{5} > \\frac{2}{5}$, the second mixed number is larger.

@academic[pitfall,aside:true,width:35%:Comparing numerators only
Judging $7\\frac{2}{3}$ and $7\\frac{3}{5}$ by the numerators alone makes $7\\frac{3}{5}$ the larger. In fifteenths, $\\frac{2}{3} = \\frac{10}{15}$ beats $\\frac{3}{5} = \\frac{9}{15}$, so $7\\frac{2}{3}$ is larger.
[Read more](!#pitfalls)]@

Comparing fractional parts sometimes requires finding a common denominator or using other methods from [comparing fractions](!/arithmetic/fractions/comparing).

@academic[example:Example
For $7\\frac{3}{4}$ versus $7\\frac{5}{6}$, convert both fractions to twelfths: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{5}{6} = \\frac{10}{12}$. Since $\\frac{10}{12} > \\frac{9}{12}$, the value $7\\frac{5}{6}$ is greater.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Operations with Mixed Numbers`,
    content: `Arithmetic with mixed numbers follows two general strategies. The first converts all mixed numbers to improper fractions, performs the operation, and converts back. The second handles whole and fractional parts separately, which works well for addition and subtraction but poorly for multiplication and division.

[Adding and subtracting mixed numbers](!/arithmetic/fractions/adding-subtracting) can use either strategy.

@academic[example:Example
Adding $2\\frac{1}{3} + 4\\frac{1}{2}$ by parts means adding $2 + 4 = 6$ for wholes and $\\frac{1}{3} + \\frac{1}{2} = \\frac{5}{6}$ for fractions, giving $6\\frac{5}{6}$.]@

Subtraction sometimes requires borrowing when the first fractional part is smaller than the second.

@academic[pitfall,aside:true,width:35%:Subtracting the fractions in reverse
Taking $\\frac{1}{4}$ from $\\frac{3}{4}$ in $5\\frac{1}{4} - 2\\frac{3}{4}$ gives $3\\frac{2}{4} = 3\\frac{1}{2}$, one whole too much. Borrowing first, $4\\frac{5}{4} - 2\\frac{3}{4} = 2\\frac{2}{4} = 2\\frac{1}{2}$.
[Read more](!#pitfalls)]@

Borrowing is needed when the fraction being subtracted is larger than the fraction it is taken from. One whole is taken from the whole part, rewritten as a fraction with the same denominator, such as $1 = \\frac{4}{4}$, and added to the fractional part. The value of the mixed number does not change, only its spelling, and the fractional parts can then be subtracted directly.

[Multiplying mixed numbers](!/arithmetic/fractions/multiplying) requires conversion to improper fractions.

@academic[example:Example
To compute $2\\frac{1}{2} \\times 3\\frac{1}{3}$, convert to $\\frac{5}{2} \\times \\frac{10}{3} = \\frac{50}{6} = 8\\frac{2}{6} = 8\\frac{1}{3}$.]@

Attempting to multiply whole parts and fractional parts separately produces incorrect results.

@academic[fact,aside:true,width:35%:Squaring $7\\frac{1}{2}$ in your head
Multiply $7$ by the next whole number, $8$, and attach $\\frac{1}{4}$: $7\\frac{1}{2} \\times 7\\frac{1}{2} = 56\\frac{1}{4}$. It works for every whole $n$, because the two cross terms add up to one more $n$: $(n + \\frac{1}{2})^2 = n(n + 1) + \\frac{1}{4}$.]@

The four terms of such a product show up clearly when both factors are the same. In $7\\frac{1}{2} \\times 7\\frac{1}{2} = (7 + \\frac{1}{2})(7 + \\frac{1}{2})$, the wholes give $7 \\times 7 = 49$, the halves give $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$, and each of the two cross terms $7 \\times \\frac{1}{2}$ gives $3\\frac{1}{2}$.

[Dividing mixed numbers](!/arithmetic/fractions/dividing) also demands improper form. Convert both values, apply the reciprocal rule, and simplify. The expression $4\\frac{1}{2} \\div 1\\frac{1}{2}$ becomes $\\frac{9}{2} \\div \\frac{3}{2} = \\frac{9}{2} \\times \\frac{2}{3} = \\frac{18}{6} = 3$.

The [fraction calculator](!/calculators/fraction-calculator) accepts mixed numbers directly and shows the improper-fraction conversion for each operation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Mixed Numbers on the Number Line`,
    content: `Mixed numbers occupy positions between consecutive whole numbers on the number line. The value $3\\frac{1}{4}$ lies one-quarter of the way from 3 toward 4. The value $3\\frac{3}{4}$ lies three-quarters of the way along the same interval.

Placing a mixed number on the number line reinforces the connection to its improper fraction equivalent. Both $2\\frac{2}{5}$ and $\\frac{12}{5}$ mark exactly the same point, located two-fifths of the distance from 2 to 3. The two notations differ in form but describe identical quantities.

Number line visualization also supports estimation and rounding. A mixed number like $6\\frac{7}{8}$ is very close to 7, while $6\\frac{1}{8}$ is barely past 6. Recognizing these proximities helps in mental math and checking whether computed answers are reasonable.`,
    before: ``,
    after: ``,
    link: '',
  },

    obj8:{
      title:`Mixed Numbers at a Glance`,
      content:`The page covered mixed numbers and improper fractions: what they are, how to convert between them, how to compare them, how each operation handles them, and where they sit on the number line. The table below distills the key facts and identities that come up repeatedly when working with them.`,
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
  
    },
    obj16:{
      title:`Common Pitfalls`,
      content:`Five mistakes cause many of the wrong answers with mixed numbers. Four are marked with a box where they happen in the sections above, and the fifth is the one the operations section warns about for multiplication. Here each is worked through in full, with the wrong and the right working side by side.

**Swapping quotient and remainder**

When an improper fraction is converted, the division gives two numbers, a quotient and a remainder, and they are put in each other's places: the remainder becomes the whole part and the quotient the new numerator.

Wrong working: $17 \\div 5 = 3$ remainder $2$, written as $2\\frac{3}{5}$.

Right working: the quotient $3$ counts the complete wholes and the remainder $2$ counts the fifths left over, so $\\frac{17}{5} = 3\\frac{2}{5}$.

Why it happens: both numbers come out of the same division step, and nothing in the written result labels which is which. The roles have to be remembered, not read off.

How to check: convert back. $3\\frac{2}{5} = \\frac{3 \\times 5 + 2}{5} = \\frac{17}{5}$, the starting fraction, while $2\\frac{3}{5} = \\frac{2 \\times 5 + 3}{5} = \\frac{13}{5}$ is not.

**Adding the whole to the numerator**

When a mixed number is converted to an improper fraction, the whole number is added straight onto the numerator, and the multiplication by the denominator is skipped.

Wrong working: $4\\frac{2}{7} = \\frac{4 + 2}{7} = \\frac{6}{7}$.

Right working: the 4 wholes are $4 \\times 7 = 28$ sevenths; adding the 2 sevenths gives $28 + 2 = 30$, so $4\\frac{2}{7} = \\frac{30}{7}$.

Why it happens: the hidden plus between the whole part and the fraction suggests adding the two numbers that are written down. But the 4 counts wholes and the 2 counts sevenths, and amounts in different units cannot be added until they are in the same unit.

How to check: the size. $4\\frac{2}{7}$ is more than 4, but $\\frac{6}{7}$ is less than 1. Dividing back also works: $30 \\div 7 = 4$ remainder $2$, which returns $4\\frac{2}{7}$.

**Comparing numerators only**

Two mixed numbers have the same whole part, and their fractional parts have different denominators. The fractions are compared by their numerators alone, as if the denominators were equal.

Wrong working: in $7\\frac{2}{3}$ against $7\\frac{3}{5}$, the numerator $3$ is larger than $2$, so $7\\frac{3}{5}$ is called the larger number.

Right working: rewrite both fractional parts in fifteenths, $\\frac{2}{3} = \\frac{10}{15}$ and $\\frac{3}{5} = \\frac{9}{15}$. Since $\\frac{10}{15} > \\frac{9}{15}$, the larger number is $7\\frac{2}{3}$.

Why it happens: with equal denominators, as in $3\\frac{2}{5}$ against $3\\frac{4}{5}$, the numerators do decide, and the shortcut is carried over to fractions whose parts have different sizes. A third is larger than a fifth, so two thirds can beat three fifths.

How to check: cross-multiply the fractional parts, $2 \\times 5 = 10$ against $3 \\times 3 = 9$, or compare decimals, $\\frac{2}{3} \\approx 0.67$ and $\\frac{3}{5} = 0.6$.

**Subtracting the fractions in reverse**

In subtraction by parts, the first fractional part is smaller than the second. Instead of borrowing a whole, the smaller fraction is taken from the larger one.

Wrong working: $5\\frac{1}{4} - 2\\frac{3}{4}$, with $5 - 2 = 3$ and $\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4}$, giving $3\\frac{2}{4} = 3\\frac{1}{2}$.

Right working: borrow one whole, $5\\frac{1}{4} = 4 + \\frac{4}{4} + \\frac{1}{4} = 4\\frac{5}{4}$. Then $4 - 2 = 2$ and $\\frac{5}{4} - \\frac{3}{4} = \\frac{2}{4}$, giving $2\\frac{2}{4} = 2\\frac{1}{2}$. In improper form the same subtraction is $\\frac{21}{4} - \\frac{11}{4} = \\frac{10}{4} = 2\\frac{1}{2}$.

Why it happens: it is the same slip as subtracting the smaller digit from the larger in a column, for example writing $52 - 37 = 25$. Taking $\\frac{1}{4} - \\frac{3}{4}$ looks impossible, so the order is quietly reversed.

How to check: add back. $2\\frac{1}{2} + 2\\frac{3}{4} = 4\\frac{5}{4} = 5\\frac{1}{4}$, the starting number, while $3\\frac{1}{2} + 2\\frac{3}{4} = 6\\frac{1}{4}$ is one whole too much.

**Multiplying the parts separately**

The whole parts of two mixed numbers are multiplied together, the fractional parts are multiplied together, and the two results are joined into a new mixed number.

Wrong working: for $2\\frac{1}{2} \\times 3\\frac{1}{3}$, take $2 \\times 3 = 6$ and $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$, giving $6\\frac{1}{6}$.

Right working: convert first, $2\\frac{1}{2} = \\frac{5}{2}$ and $3\\frac{1}{3} = \\frac{10}{3}$, then $\\frac{5}{2} \\times \\frac{10}{3} = \\frac{50}{6} = 8\\frac{1}{3}$.

Why it happens: working by parts is correct for addition, so it seems natural for multiplication too. But a mixed number is a sum, and a product of two sums has four terms, not two: $(2 + \\frac{1}{2})(3 + \\frac{1}{3}) = 6 + \\frac{2}{3} + \\frac{3}{2} + \\frac{1}{6} = 8\\frac{1}{3}$. The parts method keeps only the first and the last.

How to check: estimate. $2\\frac{1}{2} \\times 3\\frac{1}{3}$ is more than $2\\frac{1}{2} \\times 3 = 7\\frac{1}{2}$, so $6\\frac{1}{6}$ is too small.`,
      before:``,
      after:``,
      link:'',
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Combining Wholes with Parts",
  content: `A mixed number combines a whole number with a proper fraction, expressing quantities greater than one in an intuitive format. The value $2\\frac{3}{4}$ represents two whole units plus three-fourths of another unit. Mixed numbers and improper fractions are two representations of the same quantities, and converting between them is essential for arithmetic operations.`
}


// FAQ pass: cut all ten questions — every one is answered by an h2 with a
// defining first line (mixed number, improper fraction, both conversions,
// comparing, number line) or is owned by the operation pages
// (/arithmetic/fractions/multiplying already answers why mixed numbers must
// be converted before multiplying). Invented three from the notation section
// and the improper-fractions section, none of which any heading surfaces.
const faqQuestions = {
  obj1: {
    question: "Does 2¾ mean 2 times ¾?",
    answer: "No. A mixed number is the one place in mathematics where writing two things side by side means addition: 2¾ equals 2 + ¾, or 2.75. Everywhere else adjacency multiplies — 2x, 2π — so importing that habit here yields 1½, barely half the true value. The spoken form keeps the addition audible: two and three quarters.",
    sectionId: "notation"
  },
  obj2: {
    question: "How do negative mixed numbers work?",
    answer: "The minus sign covers the whole quantity, not just the whole-number part: −2¾ means −(2 + ¾) = −2.75, never −2 + ¾ = −1.25. The hidden plus inherits the sign along with everything else. Converting to an improper fraction first — −2¾ becomes −11/4 — makes the scope explicit and prevents the split-sign slip.",
    sectionId: "notation"
  },
  obj3: {
    question: "Why is it called an improper fraction?",
    answer: "The name is a historical label, not a verdict. It flags only that the numerator is at least as large as the denominator, so the value reaches or passes 1. Nothing about 7/4 is incorrect. Improper form is in fact preferred for computation, since [multiplying](!/arithmetic/fractions/multiplying) and [dividing](!/arithmetic/fractions/dividing) are simpler with no whole part to handle separately.",
    sectionId: "2"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Mixed Numbers",
    "description": "Learn mixed numbers and improper fractions: definitions, conversions, comparisons, and operations. Step-by-step methods with examples for adding, multiplying, and dividing.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/mixed-numbers",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "Elementary, Middle School",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Mixed Numbers and Improper Fractions"
    },
    "teaches": [
      "Definition of mixed numbers",
      "Definition of improper fractions",
      "Converting improper fractions to mixed numbers",
      "Converting mixed numbers to improper fractions",
      "Comparing mixed numbers",
      "Adding, multiplying, and dividing mixed numbers",
      "Mixed numbers on the number line"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Arithmetic",
        "item": "https://www.learnmathclass.com/arithmetic"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Mixed Numbers",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/mixed-numbers"
      }
    ]
  }
}


  const fbSeventeenFifths = { kind: 'bars', svgTitle: '17/5 shaded as fifths: three full wholes and 2 fifths of a fourth, 3 2/5', rows: [{ n: 5, k: 17, label: '17/5' }],
    notes: [{ text: '17 ÷ 5 = 3 remainder 2' }, { text: 'three full bars and 2 fifths more: 17/5 = 3 2/5', color: 'f' }], caption: 'Quotient: whole bars; remainder: the leftover fifths' };
  const fpMixedLine = { kind: 'pieces', svgTitle: 'Number line from 0 to 3 marked in fifths: 2 2/5 and 12/5 are the same point', xRange: [-0.15, 3.3], yRange: [-1, 1.4], xStep: 1, yStep: 10, xLetter: ' ', yLetter: ' ',
    pieces: [{ fn: () => 0, from: 0, to: 3, ends: [null, null], color: 'g' }].concat(Array.from({ length: 16 }, (_, i) => ({ fn: () => 0, from: i / 5, to: i / 5, ends: [i === 12 ? 'closed' : 'open', i === 12 ? 'closed' : 'open'], color: i === 12 ? 'r' : 'g' }))),
    notes: [{ x: 2.4, y: 0.2, text: '2 2/5 = 12/5', pos: 'n', color: 'r' }, { x: 0.05, y: 1.15, text: 'each whole cut into fifths', pos: 'e' }, { x: 0.05, y: -0.6, text: '2 wholes and 2 fifths = 12 fifths', pos: 'e', color: 'r' }],
    caption: 'One point, two names' };
  const demoUnits = {
    seventeenFifths: demoUnitFrame({
      svg: renderFractionBar(fbSeventeenFifths),
      caption: 'Seventeen fifths as a mixed number',
      text: 'Seventeen parts of size 1/5 are laid out on bars of five fifths each. Three bars fill completely, using 15 fifths, and 2 fifths are left over on a fourth bar. That is the division 17 &#247; 5 = 3 remainder 2: the quotient counts the full wholes, the remainder the leftover parts, so 17/5 = 3 2/5.',
    }),
    mixedLine: demoUnitFrame({
      svg: renderFunctionPlotV4(fpMixedLine),
      caption: '2 2/5 on the number line',
      text: 'Each whole from 0 to 3 is cut into fifths. Counting two whole steps and then two more fifths lands on the amber point, 2 2/5. Counting fifths from 0 instead takes 12 steps to the same point, so 2 2/5 and 12/5 are two names for one number, lying two fifths of the way from 2 to 3.',
    }),
  };

  // BeforeAfter (obj6): borrowing, the section's 5 1/4 rewritten so 3/4 can be taken from its fraction part
  const borrowingBeforeAfter = {
    header: {
      kicker: 'Subtracting mixed numbers',
      title: 'Borrowing changes the spelling, not the value',
      lede: 'To take $2\\frac{3}{4}$ from $5\\frac{1}{4}$, one whole is moved into the fraction part first.',
    },
    before: {
      form: 'Standard mixed number',
      expr: '$5\\frac{1}{4}$',
      meta: 'Fraction part $\\frac{1}{4}$ is smaller than $\\frac{3}{4}$',
    },
    after: {
      form: 'Borrowed form',
      expr: '$4\\frac{5}{4}$',
      meta: 'Now $\\frac{5}{4} - \\frac{3}{4}$ can be done directly',
    },
    operation: {
      name: 'Borrow 1',
      desc: 'take one whole and rewrite it as $\\frac{4}{4}$',
      detailsLabel: 'Finish the subtraction',
      detailsTitle: '',
      details: '$$4\\tfrac{5}{4} - 2\\tfrac{3}{4} = 2\\tfrac{2}{4} = 2\\tfrac{1}{2}$$',
    },
    notes: [
      { id: 'changed', badge: 'What changed',
        body: 'One whole moved from the whole part into the fraction part, as $\\frac{4}{4}$.' },
      { id: 'stayed', badge: 'What stayed', tone: 'warm',
        body: 'The value: $5\\frac{1}{4}$ and $4\\frac{5}{4}$ are the same number.' },
    ],
  };

return {
  props: {
    borrowingBeforeAfter,
    sectionsContent,
    introContent,
    obj4Table,
    obj6Table,
    capstoneTable,
    faqQuestions,
    schemas,
    demoUnits,
    seoData: {
      title: "Mixed Numbers & Improper Fractions: Conversions | Learn Math Class",
      description: "Learn mixed numbers and improper fractions: definitions, conversions, comparisons, and operations. Step-by-step methods with examples for adding, multiplying, and dividing.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/mixed-numbers",
      name: "Mixed Numbers"
    },
  }
}
   }





export default function MixedNumbersPage({seoData, sectionsContent, introContent, obj4Table, obj6Table, capstoneTable, faqQuestions, schemas, demoUnits, borrowingBeforeAfter}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
        id:'notation',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
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
                  <div key={'unit-seventeenFifths'} dangerouslySetInnerHTML={{ __html: demoUnits.seventeenFifths }} />,
          `Going back, 3 · 5 + 2 = 17 counts the fifths again: 3 2/5 = 17/5.`,
          `@academic[punchline:Converting to a mixed number is division with remainder: the quotient counts whole units, the remainder the parts left over.]@`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'obj4-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj4Table }} />,
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
          <div key={'obj6-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj6Table }} />,
          <DiagramFrame
            key={'obj6-diagram'}
            id="borrowing-before-after"
            title="Borrowing in 5¼ − 2¾"
            source="/arithmetic/fractions/mixed-numbers"
            before={"Subtraction by parts needs borrowing when the fraction being subtracted is larger. Here is the section's $5\\frac{1}{4} - 2\\frac{3}{4}$, before and after the borrow."}
            after={"Taking $\\frac{1}{4}$ from $\\frac{3}{4}$ instead, the slip shown beside the prose above, gives $3\\frac{1}{2}$, one whole too much. Borrowing first gives $2\\frac{1}{2}$."}
          >
            <BeforeAfter
              data={borrowingBeforeAfter}
              theme={{ title: '#06357A', accent: '#2563EB', warm: '#B45309', panelSoft: '#e8eefc', indigoSoft: '#e8eefc' }}
            />
          </DiagramFrame>,
          `@academic[punchline:Mixed numbers can be added and subtracted part by part; for multiplying and dividing, convert them to improper fractions first.]@`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
                  <div key={'unit-mixedLine'} dangerouslySetInnerHTML={{ __html: demoUnits.mixedLine }} />,
          `Every mixed number sits between its whole part and the next whole number.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'capstone-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: capstoneTable }} />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Mixed Numbers FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
]

  return (
   <>
 

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
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Mixed Numbers</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
       <KeyTermsCard
              id="0"
              title={sectionsContent.obj0.title}
              content={sectionsContent.obj0.content}
              after={sectionsContent.obj0.after}
              variant="light"
            />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}