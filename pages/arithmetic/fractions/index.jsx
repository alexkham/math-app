// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   "fractions",
//   "what is a fraction",
//   "numerator and denominator",
//   "proper fraction",
//   "improper fraction",
//   "unit fraction",
//   "types of fractions",
//   "fraction definition",
//   "fraction examples",
//   "how fractions work",
//   "fraction basics",
//   "parts of a fraction",
//   "fraction operations",
//   "visualizing fractions",
//   "fractions explained"
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

//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Fraction](!/arithmetic/definitions#fraction) — a ratio of two integers representing a quantity
// - [Numerator](!/arithmetic/definitions#numerator) — the number above the fraction bar; counts the parts taken
// - [Denominator](!/arithmetic/definitions#denominator) — the number below the fraction bar; names the size of each part
// - [Proper Fraction](!/arithmetic/definitions#proper_fraction) — a fraction with value strictly between 0 and 1
// - [Improper Fraction](!/arithmetic/definitions#improper_fraction) — a fraction with value greater than or equal to 1
// - [Mixed Number](!/arithmetic/definitions#mixed_number) — a whole number combined with a proper fraction
// - [Equivalent Fractions](!/arithmetic/definitions#equivalent_fractions) — different representations of the same value
// - [Reciprocal](!/arithmetic/definitions#reciprocal) — the fraction obtained by swapping numerator and denominator
// - [Common Denominator](!/arithmetic/definitions#common_denominator) — a shared denominator required for adding or subtracting fractions
// - [Complex Fraction](!/arithmetic/definitions#complex_fraction) — a fraction containing fractions in its numerator or denominator`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
//   link: '',
// },
 
    
//   obj1: {
//     title: `What Is a Fraction`,
//     content: `A fraction expresses a quantity as a ratio of two integers. The general form is $\\frac{a}{b}$, where $a$ is the numerator and $b$ is the denominator. The horizontal line separating them is called the fraction bar or vinculum.

// Every fraction represents a division operation. The expression $\\frac{a}{b}$ is equivalent to $a \\div b$, meaning the numerator divided by the denominator. For example, $\\frac{3}{4}$ equals $3 \\div 4 = 0.75$.

// The denominator cannot equal zero. Division by zero is undefined in mathematics, so expressions like $\\frac{5}{0}$ have no meaning. Any integer $b \\neq 0$ can serve as a denominator.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Numerator and Denominator`,
//     content: `The numerator and denominator serve distinct roles in defining a fraction's value. The denominator establishes the size of each part by specifying how many equal pieces the whole is divided into. The numerator counts how many of those parts are being considered.

// Consider the fraction $\\frac{3}{5}$. The denominator 5 means the whole has been split into five equal parts. The numerator 3 means three of those parts are taken. Together, they describe a quantity equal to three-fifths of the whole.

// A useful memory aid comes from etymology. The word denominator shares its root with "name" — it names the type of parts (fifths, eighths, tenths). The numerator shares its root with "number" — it numbers how many of those named parts are present.

// When the numerator equals the denominator, the fraction equals one whole. The fraction $\\frac{4}{4}$ represents four parts out of four, which is the entire quantity. When the numerator is zero, the fraction equals zero regardless of the denominator, since zero parts of anything is nothing: $\\frac{0}{7} = 0$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Types of Fractions`,
//     content: `Fractions are classified according to the relationship between numerator and denominator or according to their structure. Understanding these types helps in selecting appropriate methods for computation and simplification.

// Proper fractions have a numerator smaller than the denominator, making their value less than one. Improper fractions have a numerator greater than or equal to the denominator, making their value one or greater. Both types are covered in detail below.

// A unit fraction has a numerator of exactly one, such as $\\frac{1}{2}$, $\\frac{1}{3}$, or $\\frac{1}{7}$. Unit fractions serve as building blocks for all other fractions and are explored further below.

// [Mixed numbers](!/arithmetic/fractions/mixed-numbers) combine a whole number with a proper fraction, such as $2\\frac{3}{4}$. They provide an intuitive way to express quantities greater than one and convert directly to and from improper fractions.

// [Equivalent fractions](!/arithmetic/fractions/equivalent) are different representations of the same value. The fractions $\\frac{1}{2}$, $\\frac{2}{4}$, and $\\frac{3}{6}$ all represent the same quantity despite having different numerators and denominators.

// [Complex fractions](!/arithmetic/fractions/complex) contain fractions within their numerator, denominator, or both. An expression like $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$ is a complex fraction that simplifies using division rules.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Proper and Improper Fractions`,
//     content: `A proper fraction has a numerator strictly less than its denominator. Because the number of parts taken is fewer than the total parts in one whole, the value is always less than one. Examples include $\\frac{2}{5}$, $\\frac{7}{8}$, and $\\frac{11}{12}$. On a number line, proper fractions occupy the interval between zero and one.

// An improper fraction has a numerator greater than or equal to its denominator. The value is one or greater because at least as many parts are taken as exist in one whole. Examples include $\\frac{5}{3}$, $\\frac{9}{4}$, and $\\frac{7}{7}$. The fraction $\\frac{7}{7}$ equals exactly one, while $\\frac{9}{4}$ equals $2.25$, placing it beyond one on the number line.

// Improper fractions are not incorrect despite their name. They are essential in computation, particularly for multiplication and division, where converting to improper form simplifies the process. However, for expressing final answers or measurements, [mixed numbers](!/arithmetic/fractions/mixed-numbers) often provide a more intuitive format. Converting between improper fractions and mixed numbers is a fundamental skill covered on the mixed numbers page.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Unit Fractions`,
//     content: `A unit fraction has a numerator of one. The simplest examples are $\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{4}$, and so on. Each unit fraction represents exactly one part when a whole is divided into equal pieces.

// Unit fractions serve as the building blocks of all fractions. Any fraction $\\frac{a}{b}$ can be understood as $a$ copies of the unit fraction $\\frac{1}{b}$. The fraction $\\frac{3}{5}$ equals $\\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5}$, or three copies of one-fifth.

// An important property of unit fractions is that larger denominators produce smaller values. The fraction $\\frac{1}{8}$ is smaller than $\\frac{1}{4}$ because dividing something into eight parts creates smaller pieces than dividing it into four parts. This inverse relationship between denominator size and fraction value is essential when [comparing fractions](!/arithmetic/fractions/comparing).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Operations with Fractions`,
//     content: `The four basic arithmetic operations extend to fractions, each with specific rules that differ from whole number arithmetic.

// [Adding and subtracting fractions](!/arithmetic/fractions/adding-subtracting) requires a common denominator. Fractions with the same denominator can be added or subtracted by combining their numerators: $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$. When denominators differ, each fraction must first be converted to an [equivalent fraction](!/arithmetic/fractions/equivalent) with a shared denominator.

// [Multiplying fractions](!/arithmetic/fractions/multiplying) follows a direct rule: multiply the numerators together and multiply the denominators together. The product $\\frac{2}{3} \\times \\frac{4}{5}$ equals $\\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$. No common denominator is needed.

// [Dividing fractions](!/arithmetic/fractions/dividing) transforms into multiplication by the reciprocal. To compute $\\frac{2}{3} \\div \\frac{4}{5}$, multiply the first fraction by the flipped second fraction: $\\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12}$, which simplifies to $\\frac{5}{6}$.

// [Comparing fractions](!/arithmetic/fractions/comparing) determines which of two fractions is larger, smaller, or whether they are equal. Methods include finding common denominators, cross-multiplication, or converting to decimals.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Visualizing Fractions`,
//     content: `Visual representations clarify what fractions mean and support reasoning about their relationships. Three common models each emphasize different aspects of fractional quantities.

// The circle or pie model divides a circular region into equal wedges. Shading a certain number of wedges represents the numerator while the total number of wedges represents the denominator. This model works well for fractions of a single whole and makes concepts like "half" or "quarter" immediately recognizable.

// The bar or rectangle model divides a rectangular strip into equal sections. This representation is particularly useful when comparing fractions or demonstrating [equivalent fractions](!/arithmetic/fractions/equivalent), since bars of the same length can be subdivided differently to show that $\\frac{1}{2}$ and $\\frac{2}{4}$ cover the same amount.

// The number line places fractions at precise locations between whole numbers. This model emphasizes that fractions are numbers with specific values, not just parts of shapes. It supports understanding of order, density, and operations. For instance, seeing $\\frac{3}{4}$ positioned between $\\frac{1}{2}$ and $1$ reinforces its value relative to other quantities.

// Each model serves different purposes. Circle models suit introductory understanding, bar models support comparison and equivalence, and number lines prepare for algebraic thinking and operations.`,
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
//   title: "Parts of a Whole and Beyond",
//   content: `A fraction represents a part of a whole or, more generally, any number of equal parts. Written as one integer placed above another with a horizontal bar between them, fractions express quantities that fall between whole numbers or describe division that does not resolve into a whole number. The upper number is the numerator, indicating how many parts are taken, while the lower number is the denominator, indicating how many equal parts make up the whole.`
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is a fraction?",
//     answer: "A fraction expresses a quantity as a ratio of two integers, written as a/b. The top number (numerator) counts how many parts are taken. The bottom number (denominator) tells how many equal parts the whole is divided into. For example, 3/4 means 3 parts out of 4.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What are the numerator and denominator?",
//     answer: "The numerator is the top number — it counts how many parts are being considered. The denominator is the bottom number — it names the size of each part by specifying how many equal pieces make one whole. In 3/5, the denominator 5 creates fifths, and the numerator 3 counts three of them.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "What is the difference between proper and improper fractions?",
//     answer: "A proper fraction has a numerator smaller than its denominator (like 2/5), so its value is less than 1. An improper fraction has a numerator greater than or equal to its denominator (like 5/3), so its value is 1 or greater.",
//     sectionId: "4"
//   },
//   obj4: {
//     question: "What is a unit fraction?",
//     answer: "A unit fraction has a numerator of 1, such as 1/2, 1/3, or 1/7. Unit fractions are building blocks for all other fractions — any fraction a/b equals a copies of the unit fraction 1/b. For example, 3/5 = 1/5 + 1/5 + 1/5.",
//     sectionId: "5"
//   },
//   obj5: {
//     question: "Why can't the denominator be zero?",
//     answer: "A fraction a/b represents division: a ÷ b. Division by zero is undefined in mathematics because no number multiplied by zero gives a nonzero result. Expressions like 5/0 have no meaning.",
//     sectionId: "1"
//   },
//   obj6: {
//     question: "What are equivalent fractions?",
//     answer: "Equivalent fractions are different representations of the same value. For example, 1/2, 2/4, and 3/6 all represent the same quantity. Multiplying or dividing both numerator and denominator by the same nonzero number produces an equivalent fraction.",
//     sectionId: "3"
//   },
//   obj7: {
//     question: "How do you add fractions?",
//     answer: "To add fractions, they must have a common denominator. If denominators match, add the numerators and keep the denominator: 2/7 + 3/7 = 5/7. If denominators differ, first convert to equivalent fractions with a shared denominator.",
//     sectionId: "6"
//   },
//   obj8: {
//     question: "How do you multiply fractions?",
//     answer: "Multiply the numerators together and multiply the denominators together: (2/3) × (4/5) = 8/15. No common denominator is needed for multiplication.",
//     sectionId: "6"
//   },
//   obj9: {
//     question: "How do you divide fractions?",
//     answer: "To divide fractions, multiply by the reciprocal (flip the second fraction): (2/3) ÷ (4/5) = (2/3) × (5/4) = 10/12 = 5/6. This is called 'keep, change, flip.'",
//     sectionId: "6"
//   },
//   obj10: {
//     question: "What are the different ways to visualize fractions?",
//     answer: "Three common models: Circle/pie charts divide a circle into wedges. Bar/rectangle models divide strips into sections — useful for comparing fractions. Number lines show fractions as points between whole numbers, emphasizing their precise values.",
//     sectionId: "7"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Fractions",
//     "description": "Learn fractions from the ground up: numerator and denominator, proper vs improper fractions, unit fractions, operations, and visual models for understanding.",
//     "url": "https://www.learnmathclass.com/arithmetic/fractions",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "Elementary, Middle School, High School",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Fractions"
//     },
//     "teaches": [
//       "Definition of fractions as ratios",
//       "Numerator and denominator roles",
//       "Proper and improper fractions",
//       "Unit fractions as building blocks",
//       "Adding, subtracting, multiplying, dividing fractions",
//       "Equivalent fractions",
//       "Visual models: circles, bars, number lines"
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
//       title: "Fractions: Definition, Types & Operations | Learn Math Class",
//       description: "Learn fractions from the ground up: numerator and denominator, proper vs improper fractions, unit fractions, operations, and visual models for understanding.",
//       keywords: keyWords.join(", "),
//       url: "/arithmetic/fractions",
//       name: "Fractions"
//     },
//   }
// }
//    }


// export default function FractionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Fractions</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "siblings"
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




// tables-optimized: v4 | 2026-05-26 | 3 tables (obj3 aggregation, obj6 aggregation, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFractionBar from '@/app/utils/illustrations/arithmetic/fractions/fractionBar'
import { tableHeaders } from '@/app/styles/theme'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "fractions",
  "what is a fraction",
  "numerator and denominator",
  "proper fraction",
  "improper fraction",
  "unit fraction",
  "types of fractions",
  "fraction definition",
  "fraction examples",
  "how fractions work",
  "fraction basics",
  "parts of a fraction",
  "fraction operations",
  "visualizing fractions",
  "fractions explained"
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

  // obj3 — aggregation: types of fractions, parallel structure across 6 types
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Type</th>
      <th style="${tableHeaders.aggregation}">Defining condition</th>
      <th style="${tableHeaders.aggregation}">Example</th>
      <th style="${tableHeaders.aggregation}">Value range</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Proper</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">numerator &lt; denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2⁄5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0 &lt; value &lt; 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Improper</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">numerator ≥ denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5⁄3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">value ≥ 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Unit</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">numerator = 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄7</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0 &lt; value ≤ 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/mixed-numbers" style="${linkStyle}">Mixed number</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">whole number + proper fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 3⁄4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">value ≥ 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/equivalent" style="${linkStyle}">Equivalent</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same value, scaled numerator and denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄2 = 2⁄4 = 3⁄6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/complex" style="${linkStyle}">Complex</a></td>
      <td style="padding: 12px 15px; color: #34495e;">fraction inside numerator or denominator</td>
      <td style="padding: 12px 15px; color: #34495e;">(1⁄2) ⁄ (3⁄4)</td>
      <td style="padding: 12px 15px; color: #34495e;">any</td>
    </tr>
  </tbody>
</table>
`

  // obj6 — aggregation: four arithmetic operations with their rules
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Operation</th>
      <th style="${tableHeaders.aggregation}">Rule</th>
      <th style="${tableHeaders.aggregation}">Example</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Common denom needed?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/adding-subtracting" style="${linkStyle}">Add / subtract</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combine numerators over the shared denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2⁄7 + 3⁄7 = 5⁄7</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/multiplying" style="${linkStyle}">Multiply</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply numerators, multiply denominators</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(2⁄3)(4⁄5) = 8⁄15</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/dividing" style="${linkStyle}">Divide</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply by the reciprocal of the second fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(2⁄3) ÷ (4⁄5) = (2⁄3)(5⁄4) = 5⁄6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/arithmetic/fractions/comparing" style="${linkStyle}">Compare</a></td>
      <td style="padding: 12px 15px; color: #34495e;">use common denominator, cross-multiply, or convert to decimals</td>
      <td style="padding: 12px 15px; color: #34495e;">2⁄5 vs 3⁄7: cross-multiply 2·7=14, 3·5=15 → 3⁄7 &gt; 2⁄5</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">optional</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: key facts, identities, edge cases across the whole page
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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Fraction as division</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the fraction a⁄b means a ÷ b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3⁄4 = 3 ÷ 4 = 0.75</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Numerator role</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">counts how many parts are taken</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the 3 in 3⁄4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Denominator role</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">names the size of each equal part</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the 4 in 3⁄4 (fourths)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Fraction = 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when numerator = denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4⁄4 = 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Fraction = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when numerator = 0 (and denominator ≠ 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0⁄7 = 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Undefined fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when denominator = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5⁄0 is undefined</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Unit fraction decomposition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a⁄b equals a copies of the unit fraction 1⁄b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3⁄5 = 1⁄5 + 1⁄5 + 1⁄5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Larger denom, smaller value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">for unit fractions, a bigger denominator means smaller pieces</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄8 &lt; 1⁄4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Equivalence by scaling</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiplying numerator and denominator by the same nonzero number preserves value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄2 = 2⁄4 = 5⁄10</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Reciprocal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">obtained by swapping numerator and denominator</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reciprocal of 2⁄3 is 3⁄2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Improper ↔ mixed</td>
      <td style="padding: 12px 15px; color: #34495e;">divide numerator by denominator; the quotient is the whole part, the remainder over the denominator is the fractional part</td>
      <td style="padding: 12px 15px; color: #34495e;">7⁄3 = 2 1⁄3</td>
    </tr>
  </tbody>
</table>
`


    // Concept introduction (section 1) — template A, definition last. Running
    // instance: 3 pizzas shared among 4 people. Old obj1 text is kept in
    // sectionsContent.obj1, unused; its rule box, pitfall aside (another
    // session, uncommitted) and three passages are carried in unchanged.
    const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
    const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
      cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
    const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
    const ciShareTable = ciTableOpen(['pizzas', 'people', 'whole pizzas each?', 'share each']) +
      ciRow(['8', '4', 'yes: 2', '2']) +
      ciRow(['4', '4', 'yes: 1', '1'], { shade: true }) +
      ciRow(['3', '4', 'no', '?'], { last: true, color: '#a4243b', cols: [2, 3] }) +
      '</tbody></table>'

    const sectionsContent={

    obj0: {
  title: `Key Terms`,
  content: `
- [Fraction](!/arithmetic/definitions#fraction) — a ratio of two integers representing a quantity
- [Numerator](!/arithmetic/definitions#numerator) — the number above the fraction bar; counts the parts taken
- [Denominator](!/arithmetic/definitions#denominator) — the number below the fraction bar; names the size of each part
- [Proper Fraction](!/arithmetic/definitions#proper_fraction) — a fraction with value strictly between 0 and 1
- [Improper Fraction](!/arithmetic/definitions#improper_fraction) — a fraction with value greater than or equal to 1
- [Mixed Number](!/arithmetic/definitions#mixed_number) — a whole number combined with a proper fraction
- [Equivalent Fractions](!/arithmetic/definitions#equivalent_fractions) — different representations of the same value
- [Reciprocal](!/arithmetic/definitions#reciprocal) — the fraction obtained by swapping numerator and denominator
- [Common Denominator](!/arithmetic/definitions#common_denominator) — a shared denominator required for adding or subtracting fractions
- [Complex Fraction](!/arithmetic/definitions#complex_fraction) — a fraction containing fractions in its numerator or denominator`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
  link: '',
},
 
    
  obj1: {
    title: `What Is a Fraction`,
    content: `A fraction expresses a quantity as a ratio of two integers. The general form is $\\frac{a}{b}$, where $a$ is the numerator and $b$ is the denominator. The horizontal line separating them is called the fraction bar or vinculum. In running text the same fraction may be written with a slash, $a/b$ — both forms appear among the [arithmetic symbols](!/math-symbols/arithmetic).

@academic[rule_plain:Every fraction represents a division operation. The expression $\\frac{a}{b}$ is equivalent to $a \\div b$, meaning the numerator divided by the denominator.]@

@academic[pitfall,aside:true,width:35%:Dividing the bottom by the top
Computing $\\frac{2}{5}$ as $5 \\div 2 = 2.5$ gives more than one whole for a proper fraction. The numerator is divided by the denominator: $\\frac{2}{5} = 2 \\div 5 = 0.4$.
[Read more](!#pitfalls)]@

For example, $\\frac{3}{4}$ equals $3 \\div 4 = 0.75$.

The denominator cannot equal zero. Division by zero is undefined in mathematics, so expressions like $\\frac{5}{0}$ have no meaning. Any integer $b \\neq 0$ can serve as a denominator.`,
    before: ``,
    after: ``,
    link: '',
  },

  notation: {
    title: `Fraction Notation`,
    lead: `Three ways to write one division: the bar that also groups, the slash that saves vertical space, and the obelus that retires after school. All appear among the [arithmetic symbols](!/math-symbols/arithmetic).`,
    inherited: `The mixed-number juxtaposition $2\\frac{3}{4}$ — where side-by-side means addition, not multiplication — belongs to the [mixed numbers page](!/arithmetic/fractions/mixed-numbers); stacked fractions-within-fractions to [complex fractions](!/arithmetic/fractions/complex).`,
    entries: [
      {
        id: 'vinculum-bar',
        tex: `$\\frac{a}{b}$`,
        read: `a over b`,
        means: `Division frozen mid-act: the horizontal bar — the vinculum — holds numerator over denominator, as **What Is a Fraction** above defines. The bar also **groups**: $\\frac{a+b}{c}$ needs no brackets, because everything above the bar is one package.`,
        cases: `The grouping power is the working difference from the other spellings — writing $\\frac{a+b}{c}$ inline requires $(a+b)/c$, brackets restored; display work prefers the bar for exactly this reason.`,
        sameGlyphElsewhere: `The vinculum is a family of overlines: it roofs radicands under the [root sign](!/algebra/roots/properties#notation) and conjugates [complex numbers](!/complex-numbers/complex-conjugate#notation) — the same stroke, grouping each time, operating only sometimes.`,
      },
      {
        id: 'slash-form',
        tex: `$a/b$`,
        read: `a slash b; a over b`,
        means: `The inline spelling — the solidus — for running text and code: $3/4$ where $\\frac{3}{4}$ would break the line. Same value, no grouping power.`,
        cases: `Binding is the hazard: $1/2x$ reads as $\\frac{1}{2}x$ to most conventions but $\\frac{1}{2x}$ to some — brackets or the bar settle it; code inherits the same trap with @[1/2*x]@ vs @[1/(2*x)]@.`,
        confusedWith: `The backslash. $/$ divides while $\\setminus$ [subtracts sets](!/set-theory/operations#notation) — mirror leans, unrelated jobs; and doubled forward strokes $//$ mean integer division or comments in code, never a fraction.`,
      },
      {
        id: 'obelus',
        tex: `$a \\div b$`,
        read: `a divided by b`,
        means: `The obelus — a vinculum with dots standing in for the missing numbers — is the schoolroom's division sign: $\\frac{a}{b} = a \\div b$ exactly. Past elementary work it retires; the bar and slash carry on.`,
        cases: `The glyph survives on calculator keys and in primary curricula; typography note — some European texts once used $\\div$ for subtraction, one reason mathematics abandoned it for the bar.`,
        confusedWith: `The divides bar's direction. $12 \\div 3$ asks "twelve split by three" while $3 \\mid 12$ claims "three divides twelve" — [divisibility notation](!/arithmetic/divisibility#2) reads its operands in the opposite order, the subtree's standing trap.`,
      },
    ],
    symbolsHref: `/math-symbols/arithmetic`,
    symbolsLabel: `All arithmetic symbols`,
    parentHref: `/arithmetic`,
    parentLabel: `Arithmetic`,
  },

  obj2: {
    title: `Numerator and Denominator`,
    content: `The numerator and denominator serve distinct roles in defining a fraction's value. The denominator establishes the size of each part by specifying how many equal pieces the whole is divided into. The numerator counts how many of those parts are being considered.

Consider the fraction $\\frac{3}{5}$. The denominator 5 means the whole has been split into five equal parts. The numerator 3 means three of those parts are taken. Together, they describe a quantity equal to three-fifths of the whole.

A useful memory aid comes from etymology. The word denominator shares its root with "name" — it names the type of parts (fifths, eighths, tenths). The numerator shares its root with "number" — it numbers how many of those named parts are present.

When the numerator equals the denominator, the fraction equals one whole. The fraction $\\frac{4}{4}$ represents four parts out of four, which is the entire quantity. When the numerator is zero, the fraction equals zero regardless of the denominator, since zero parts of anything is nothing: $\\frac{0}{7} = 0$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Types of Fractions`,
    content: `Fractions are classified according to the relationship between numerator and denominator or according to their structure. Understanding these types helps in selecting appropriate methods for computation and simplification.

Proper fractions have a numerator smaller than the denominator, making their value less than one. Improper fractions have a numerator greater than or equal to the denominator, making their value one or greater. Both types are covered in detail below.

@academic[fact,aside:true,width:35%:Three unit fractions, still unproved
Every $\\frac{4}{n}$ with $n \\ge 2$ checked so far is a sum of three unit fractions, as $\\frac{4}{5} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{20}$. Erdős and Straus conjectured in 1948 that this always works; computers have confirmed it for every $n$ up to $10^{17}$, but no proof is known.]@

A unit fraction has a numerator of exactly one, such as $\\frac{1}{2}$, $\\frac{1}{3}$, or $\\frac{1}{7}$. Unit fractions serve as building blocks for all other fractions and are explored further below.

[Mixed numbers](!/arithmetic/fractions/mixed-numbers) combine a whole number with a proper fraction, such as $2\\frac{3}{4}$. They provide an intuitive way to express quantities greater than one and convert directly to and from improper fractions.

[Equivalent fractions](!/arithmetic/fractions/equivalent) are different representations of the same value. The fractions $\\frac{1}{2}$, $\\frac{2}{4}$, and $\\frac{3}{6}$ all represent the same quantity despite having different numerators and denominators.

[Complex fractions](!/arithmetic/fractions/complex) contain fractions within their numerator, denominator, or both. An expression like $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$ is a complex fraction that simplifies using division rules.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Proper and Improper Fractions`,
    content: `A proper fraction has a numerator strictly less than its denominator. Because the number of parts taken is fewer than the total parts in one whole, the value is always less than one. Examples include $\\frac{2}{5}$, $\\frac{7}{8}$, and $\\frac{11}{12}$. On a number line, proper fractions occupy the interval between zero and one.

An improper fraction has a numerator greater than or equal to its denominator. The value is one or greater because at least as many parts are taken as exist in one whole. Examples include $\\frac{5}{3}$, $\\frac{9}{4}$, and $\\frac{7}{7}$. The fraction $\\frac{7}{7}$ equals exactly one, while $\\frac{9}{4}$ equals $2.25$, placing it beyond one on the number line.

Improper fractions are not incorrect despite their name. They are essential in computation, particularly for multiplication and division, where converting to improper form simplifies the process. However, for expressing final answers or measurements, [mixed numbers](!/arithmetic/fractions/mixed-numbers) often provide a more intuitive format. Converting between improper fractions and mixed numbers is a fundamental skill covered on the mixed numbers page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Unit Fractions`,
    content: `A unit fraction has a numerator of one. The simplest examples are $\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{4}$, and so on. Each unit fraction represents exactly one part when a whole is divided into equal pieces.

@academic[fact,aside:true,width:35%:Egyptian scribes summed unit fractions
Apart from a few special signs such as $\\frac{2}{3}$, Egyptian notation could write only unit fractions, so every other fraction became a sum of different unit fractions. The Rhind papyrus, about 1550 BC, opens with a table of such sums for $\\frac{2}{n}$, among them $\\frac{2}{5} = \\frac{1}{3} + \\frac{1}{15}$.]@

Unit fractions serve as the building blocks of all fractions. Any fraction $\\frac{a}{b}$ can be understood as $a$ copies of the unit fraction $\\frac{1}{b}$. The fraction $\\frac{3}{5}$ equals $\\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5}$, or three copies of one-fifth.

Copies of one size are not the only way to build a fraction from unit fractions. Three fifths is also a half plus a tenth: $\\frac{1}{2} + \\frac{1}{10} = \\frac{5}{10} + \\frac{1}{10} = \\frac{6}{10} = \\frac{3}{5}$. In this split every piece has a different size, and two pieces are enough instead of three.

@academic[rule_plain:An important property of unit fractions is that larger denominators produce smaller values.]@

@academic[pitfall,aside:true,width:35%:Judging unit fractions by the denominator
Ranking $\\frac{1}{10}$ above $\\frac{1}{5}$ because $10 > 5$ reverses the order: $\\frac{1}{10} = 0.1$ is half of $\\frac{1}{5} = 0.2$, so $\\frac{1}{10} < \\frac{1}{5}$.
[Read more](!#pitfalls)]@

The fraction $\\frac{1}{8}$ is smaller than $\\frac{1}{4}$ because dividing something into eight parts creates smaller pieces than dividing it into four parts. This inverse relationship between denominator size and fraction value is essential when [comparing fractions](!/arithmetic/fractions/comparing).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Operations with Fractions`,
    content: `The four basic arithmetic operations extend to fractions, each with specific rules that differ from whole number arithmetic.

[Adding and subtracting fractions](!/arithmetic/fractions/adding-subtracting) requires a common denominator. Fractions with the same denominator can be added or subtracted by combining their numerators: $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$. When denominators differ, each fraction must first be converted to an [equivalent fraction](!/arithmetic/fractions/equivalent) with a shared denominator.

@academic[pitfall,aside:true,width:35%:Adding across the top and bottom
Adding numerators and denominators gives $\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{6} = \\frac{1}{3}$, less than $\\frac{1}{2}$ alone. In quarters, $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.
[Read more](!#pitfalls)]@

A shared denominator turns both fractions into pieces of one size, so the pieces can be counted together.

@academic[example:Example
For $\\frac{1}{2} + \\frac{1}{3}$, halves and thirds both fit into sixths: $\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$. Three sixths and two sixths make $\\frac{5}{6}$.]@

[Multiplying fractions](!/arithmetic/fractions/multiplying) follows a direct rule: multiply the numerators together and multiply the denominators together. The product $\\frac{2}{3} \\times \\frac{4}{5}$ equals $\\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$. No common denominator is needed.

[Dividing fractions](!/arithmetic/fractions/dividing) transforms into multiplication by the reciprocal. To compute $\\frac{2}{3} \\div \\frac{4}{5}$, multiply the first fraction by the flipped second fraction: $\\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12}$, which simplifies to $\\frac{5}{6}$.

@academic[pitfall,aside:true,width:35%:Flipping the first fraction
Inverting $\\frac{3}{4}$ instead of $\\frac{1}{2}$ turns $\\frac{3}{4} \\div \\frac{1}{2}$ into $\\frac{4}{3} \\times \\frac{1}{2} = \\frac{2}{3}$. Only the divisor is flipped: $\\frac{3}{4} \\times \\frac{2}{1} = \\frac{3}{2}$.
[Read more](!#pitfalls)]@

Dividing by $\\frac{4}{5}$ asks how many copies of $\\frac{4}{5}$ fit into $\\frac{2}{3}$, and multiplying by the reciprocal answers that question. The result can be checked by multiplying back: $\\frac{5}{6} \\times \\frac{4}{5} = \\frac{20}{30} = \\frac{2}{3}$, the number that was divided.

[Comparing fractions](!/arithmetic/fractions/comparing) determines which of two fractions is larger, smaller, or whether they are equal. Methods include finding common denominators, cross-multiplication, or converting to decimals.

To work through any of these operations step by step, use the [fraction calculator](!/calculators/fraction-calculator).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Visualizing Fractions`,
    content: `Visual representations clarify what fractions mean and support reasoning about their relationships. Three common models each emphasize different aspects of fractional quantities.

The circle or pie model divides a circular region into equal wedges. Shading a certain number of wedges represents the numerator while the total number of wedges represents the denominator. This model works well for fractions of a single whole and makes concepts like "half" or "quarter" immediately recognizable.

The bar or rectangle model divides a rectangular strip into equal sections. This representation is particularly useful when comparing fractions or demonstrating [equivalent fractions](!/arithmetic/fractions/equivalent), since bars of the same length can be subdivided differently to show that $\\frac{1}{2}$ and $\\frac{2}{4}$ cover the same amount.

The number line places fractions at precise locations between whole numbers. This model emphasizes that fractions are numbers with specific values, not just parts of shapes. It supports understanding of order, density, and operations. For instance, seeing $\\frac{3}{4}$ positioned between $\\frac{1}{2}$ and $1$ reinforces its value relative to other quantities.

Each model serves different purposes. Circle models suit introductory understanding, bar models support comparison and equivalence, and number lines prepare for algebraic thinking and operations.`,
    before: ``,
    after: ``,
    link: '',
  },

    obj8:{
      title:`Fractions at a Glance`,
      content:`The page covers fractions from definition through operations. The table below distills the core facts and edge cases worth keeping at hand — how the parts work, what makes a fraction equal to zero, one, or undefined, and the identities that come up repeatedly when working with them.`,
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
      content:`Four mistakes account for many of the wrong answers in early fraction work. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Dividing the bottom by the top**

A fraction is turned into a decimal by dividing the denominator by the numerator, usually because the larger number is placed first, as in most whole-number division. The two numbers swap roles, and a proper fraction comes out larger than one.

Wrong working: $\\frac{2}{5} = 5 \\div 2 = 2.5$.

Right working: the numerator is divided by the denominator, so $\\frac{2}{5} = 2 \\div 5 = 0.4$. Multiplying back confirms it: $0.4 \\times 5 = 2$, the numerator.

Why it happens: whole-number division problems almost always divide a larger number by a smaller one, so $5 \\div 2$ looks like the natural problem and $2 \\div 5$ looks impossible until division into decimals is familiar.

How to check: a proper fraction lies between $0$ and $1$, so its decimal must too. The value $2.5$ is more than two wholes, which $\\frac{2}{5}$ cannot be.

**Judging unit fractions by the denominator**

Two unit fractions are compared by their denominators as if they were whole numbers, so the one with the larger denominator is taken to be the larger fraction.

Wrong working: $10 > 5$, so $\\frac{1}{10} > \\frac{1}{5}$.

Right working: $\\frac{1}{10}$ is one of ten equal pieces of a whole and $\\frac{1}{5}$ is one of five, and ten pieces are smaller than five. In decimals, $\\frac{1}{10} = 0.1$ and $\\frac{1}{5} = 0.2$, so $\\frac{1}{10} < \\frac{1}{5}$. In fact $\\frac{1}{5} = \\frac{2}{10}$, two of the tenths.

Why it happens: with whole numbers a larger number always means more, and that habit is carried over to the denominator, which counts how many pieces the whole is cut into rather than how much is taken.

How to check: picture one whole shared among more people; each share gets smaller. Or convert both to decimals: $0.1 < 0.2$.

**Adding across the top and bottom**

Two fractions are added by adding their numerators and adding their denominators, as if each fraction were two separate whole numbers.

Wrong working: $\\frac{1}{2} + \\frac{1}{4} = \\frac{1 + 1}{2 + 4} = \\frac{2}{6} = \\frac{1}{3}$.

Right working: rewrite $\\frac{1}{2}$ in quarters, $\\frac{1}{2} = \\frac{2}{4}$, then add the numerators and keep the denominator: $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.

Why it happens: multiplication of fractions does work straight across, $\\frac{1}{2} \\times \\frac{1}{4} = \\frac{1 \\times 1}{2 \\times 4} = \\frac{1}{8}$, and the same pattern is expected for addition.

How to check: the sum of two positive numbers is larger than each of them. The wrong answer $\\frac{1}{3}$ is smaller than $\\frac{1}{2}$, so it cannot be $\\frac{1}{2}$ plus something; $\\frac{3}{4}$ is larger than both.

**Flipping the first fraction**

In a division of fractions, the reciprocal is taken of the first fraction, or of both, instead of only the second fraction, the divisor.

Wrong working: $\\frac{3}{4} \\div \\frac{1}{2} = \\frac{4}{3} \\times \\frac{1}{2} = \\frac{4}{6} = \\frac{2}{3}$.

Right working: keep the first fraction and flip only the divisor: $\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$.

Why it happens: the rule is remembered as "flip and multiply" without which fraction is flipped, and the first fraction is the one seen first.

How to check: multiply the answer by the divisor; it must give the first fraction back. $\\frac{3}{2} \\times \\frac{1}{2} = \\frac{3}{4}$, while $\\frac{2}{3} \\times \\frac{1}{2} = \\frac{1}{3}$. A half also fits into three quarters more than once, so the answer must be larger than $1$.`,
      before:``,
      after:``,
      link:'',

    }
  
  }


  const introContent = {
  id: "intro",
  title: "Parts of a Whole and Beyond",
  content: `A fraction represents a part of a whole or, more generally, any number of equal parts. Written as one integer placed above another with a horizontal bar between them, fractions express quantities that fall between whole numbers or describe division that does not resolve into a whole number. The upper number is the numerator, indicating how many parts are taken, while the lower number is the denominator, indicating how many equal parts make up the whole.`
}

// FAQ pass: cut five case-A questions (fraction, numerator/denominator,
// proper vs improper, unit fractions, visualizing — each has its own h2) and
// four owned by dedicated subpages (equivalent, adding, multiplying,
// dividing). Kept the denominator-zero question, extended; invented two from
// buried content — the division identity in "What Is a Fraction" ¶2 and the
// vinculum entry in the notation section.
const faqQuestions = {
  obj1: {
    question: "Why can't the denominator be zero?",
    answer: "The denominator names how many equal parts make one whole, and \"zero parts\" describes nothing at all. Since a/b means a ÷ b, writing 5/0 would demand a number that, multiplied by 0, gives 5 — but every number times zero is zero. So 5/0 is undefined. The reverse causes no trouble: 0/7 = 0, because taking zero parts of something is simply nothing.",
    sectionId: "1"
  },
  obj2: {
    question: "Is a fraction the same as division?",
    answer: "Yes. Every fraction is a division waiting to be carried out: a/b means exactly a ÷ b, so 3/4 equals 3 ÷ 4 = 0.75. The obelus ÷ and the fraction bar say the same thing, which is why ÷ largely disappears after elementary school — the bar does the same job and groups its parts at the same time.",
    sectionId: "1"
  },
  obj3: {
    question: "What is the fraction bar called?",
    answer: "The horizontal line is the vinculum, though \"fraction bar\" is the everyday name. It does more than separate the two numbers: it groups them. Everything above the bar counts as one package, so (a+b)/c needs no brackets when stacked as a fraction. Writing that same expression inline forces the brackets back, which is why display work prefers the bar.",
    sectionId: "notation"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Fractions",
    "description": "Learn fractions from the ground up: numerator and denominator, proper vs improper fractions, unit fractions, operations, and visual models for understanding.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "Elementary, Middle School, High School",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Fractions"
    },
    "teaches": [
      "Definition of fractions as ratios",
      "Numerator and denominator roles",
      "Proper and improper fractions",
      "Unit fractions as building blocks",
      "Adding, subtracting, multiplying, dividing fractions",
      "Equivalent fractions",
      "Visual models: circles, bars, number lines"
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
      }
    ]
  }
}




  const fbThreeFifths = { kind: 'bars', svgTitle: 'A bar cut into 5 equal parts with 3 shaded: three fifths', rows: [{ n: 5, k: 3, label: '3/5', partLabels: true }],
    notes: [{ text: 'denominator 5: the whole is cut into 5 equal parts' }, { text: 'numerator 3: three of those parts are taken', color: 'f' }], caption: 'The denominator names the part, the numerator counts them' };
  const fbProperImproper = { kind: 'bars', svgTitle: '3/4 fits inside one whole; 5/3 fills one whole and two thirds of a second', rows: [{ n: 4, k: 3, label: '3/4', partLabels: true }, { n: 3, k: 5, label: '5/3', color: 'r', partLabels: true }],
    notes: [{ text: 'proper: 3 of 4 parts, less than one whole', color: 'f' }, { text: 'improper: 5 thirds, one whole and 2 thirds more', color: 'r' }], caption: 'Proper stays inside one whole; improper spills over' };
  const fbUnitFractions = { kind: 'bars', svgTitle: 'Unit fractions 1/2, 1/4 and 1/8 on bars of the same whole: each is half the one before', rows: [{ n: 2, k: 1, label: '1/2', partLabels: true }, { n: 4, k: 1, label: '1/4', color: 'r', partLabels: true }, { n: 8, k: 1, label: '1/8', color: 'g', partLabels: true }],
    notes: [{ text: 'same whole, more parts: each part is smaller' }, { text: '1/8 < 1/4 < 1/2' }], caption: 'Larger denominator, smaller unit fraction' };
  const fbCiPizzas = { kind: 'bars', svgTitle: 'Three pizzas cut into quarters make 12 quarters; one person takes 3 of them: three quarters',
    rows: [{ n: 4, k: 12, label: '3 pizzas' }, { n: 4, k: 3, label: 'one share', partLabels: true }],
    notes: [{ text: '3 pizzas, each cut into 4: 12 quarters' }, { text: '12 quarters ÷ 4 people = 3 quarters each', color: 'f' }],
    caption: 'Each person gets 3 of the 4 parts of one whole: 3/4' };

  const conceptIntroFigures = {
    pizzas: renderFractionBar(fbCiPizzas),
    shareTable: ciShareTable,
  };

  const demoUnits = {
    threeFifths: demoUnitFrame({
      svg: renderFractionBar(fbThreeFifths),
      caption: 'Three fifths as parts of a bar',
      text: 'The bar is one whole. The denominator 5 cuts it into five equal parts, so each part is one fifth. The numerator 3 counts how many of those parts are taken: the three shaded cells. Together they describe 3/5, three parts of size 1/5.',
    }),
    properImproper: demoUnitFrame({
      svg: renderFractionBar(fbProperImproper),
      caption: 'Proper and improper on the same whole',
      text: 'Both bars use the same length for one whole. 3/4 shades three of four quarters and stays inside a single bar: a proper fraction, less than 1. 5/3 needs five thirds, but one bar holds only three, so the shading fills a whole bar and two thirds of a second one: an improper fraction, 5/3 = 1 2/3, greater than 1.',
    }),
    unitFractions: demoUnitFrame({
      svg: renderFractionBar(fbUnitFractions),
      caption: 'Unit fractions shrink as the denominator grows',
      text: 'Each bar is the same whole with exactly one part shaded. Cutting into 2, then 4, then 8 equal parts halves the part each time, so 1/2 &gt; 1/4 &gt; 1/8. A larger denominator means more, and therefore smaller, pieces.',
    }),
  };

  const fractionOpTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Four operations, four rules',
    preface: 'Fractions follow different rules for each operation. Only addition and subtraction need a common denominator.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'The common denominator is not always needed',
    conclusion: 'Multiplying and dividing work straight across; adding, subtracting and comparing first bring the fractions to the same denominator.',
    root: { name: 'Operations with fractions', sub: '4 operations' },
    children: [
      { id: 'add', name: '[Add and subtract](!/arithmetic/fractions/adding-subtracting)', items: [
        { label: 'Needs', text: 'a common denominator' }, { label: 'Example', text: '$\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$' } ] },
      { id: 'mul', name: '[Multiply](!/arithmetic/fractions/multiplying)', items: [
        { label: 'Rule', text: 'numerator × numerator over denominator × denominator' }, { label: 'Needs', text: 'no common denominator' } ] },
      { id: 'div', name: '[Divide](!/arithmetic/fractions/dividing)', items: [
        { label: 'Rule', text: 'multiply by the reciprocal' } ] },
      { id: 'cmp', name: '[Compare](!/arithmetic/fractions/comparing)', items: [
        { label: 'Ways', text: 'common denominator, cross-multiplying, or decimals' } ] },
    ],
  };

  const fractionTypesOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Two ways to classify a fraction',
    preface: 'Fractions are classified either by how the numerator compares with the denominator, or by their structure.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'One fraction, several labels',
    conclusion: 'The two classifications overlap: a unit fraction is also proper, and an improper fraction can be rewritten as a mixed number.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Types of fractions', children: [
        { id: 'rel', name: 'By numerator and denominator', children: [
          { id: 'proper', name: 'Proper', def: 'numerator < denominator; value < 1', example: '2/5' },
          { id: 'improper', name: 'Improper', def: 'numerator ≥ denominator; value ≥ 1', example: '5/3' },
          { id: 'unit', name: 'Unit', def: 'numerator = 1', example: '1/7' },
        ] },
        { id: 'struct', name: 'By structure', children: [
          { id: 'mixed', name: '[Mixed number](!/arithmetic/fractions/mixed-numbers)', def: 'whole number plus a proper fraction', example: '2¾' },
          { id: 'equiv', name: '[Equivalent](!/arithmetic/fractions/equivalent)', def: 'same value, scaled', example: '1/2 = 2/4' },
          { id: 'complex', name: '[Complex](!/arithmetic/fractions/complex)', def: 'a fraction inside the numerator or denominator' },
        ] },
      ] },
    ],
  };

return {
  props: {
    fractionTypesOutline,
    fractionOpTree,
    sectionsContent,
    introContent,
    obj3Table,
    obj6Table,
    capstoneTable,
    faqQuestions,
    schemas,
    demoUnits,
    conceptIntroFigures,
    seoData: {
      title: "Fractions: Definition, Types & Operations | Learn Math Class",
      description: "Learn fractions from the ground up: numerator and denominator, proper vs improper fractions, unit fractions, operations, and visual models for understanding.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions",
      name: "Fractions"
    },
  }
}
   }


export default function FractionsPage({fractionTypesOutline, fractionOpTree, seoData, sectionsContent, introContent, obj3Table, obj6Table, capstoneTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template A (definition last).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Whole numbers cannot share 3 pizzas among 4 people.`,
        content: [
          `Share $8$ pizzas among $4$ people and each gets $2$; share $4$ and each gets $1$. Share $3$ and there is no whole number to give each person — less than one pizza each, but how much less?`,
          ciTable('shareTable'),
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Cutting every pizza into four equal parts solves it.`,
        content: `Cut each of the $3$ pizzas into $4$ equal slices: that makes $3 \\times 4 = 12$ slices, each one quarter of a pizza. Dealt out to $4$ people, each person gets $12 \\div 4 = 3$ slices — three quarters of a pizza, written $\\frac{3}{4}$.`,
        visual: ciSvg('pizzas'),
        caption: `Top: the $3$ pizzas, each cut into $4$, all $12$ quarters. Bottom: one person's share, $3$ of the $4$ parts of a single whole.`,
      },
      {
        id: 'forcing',
        lead: `Nothing in 3/4 was chosen: the 4 came from the people and the 3 from the pizzas.`,
        content: [
          `The bottom number had to be $4$ because there were four people to share among; the top had to be $3$ because three pizzas were being shared. Sharing $3$ among $4$ is just $3 \\div 4$, and the fraction is the answer to that division.`,
          `@academic[rule_plain:Every fraction represents a division operation. The expression $\\frac{a}{b}$ is equivalent to $a \\div b$, meaning the numerator divided by the denominator.]@`,
          `@academic[pitfall,aside:true,width:35%:Dividing the bottom by the top
Computing $\\frac{2}{5}$ as $5 \\div 2 = 2.5$ gives more than one whole for a proper fraction. The numerator is divided by the denominator: $\\frac{2}{5} = 2 \\div 5 = 0.4$.
[Read more](!#pitfalls)]@`,
          `For example, $\\frac{3}{4}$ equals $3 \\div 4 = 0.75$.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [fraction](!/arithmetic/definitions#fraction) expresses a quantity as a ratio of two integers. The general form is $\\frac{a}{b}$, where $a$ is the numerator and $b$ is the denominator. The horizontal line separating them is called the fraction bar or vinculum. In running text the same fraction may be written with a slash, $a/b$ — both forms appear among the [arithmetic symbols](!/math-symbols/arithmetic).`,
        footer: `So the pizza share is $\\frac{3}{4}$: numerator $3$, denominator $4$.`,
      },
      {
        id: 'kind',
        lead: `A fraction is a single number, even though it is written with two.`,
        content: `$\\frac{3}{4}$ is not a pair of numbers but one quantity — the same as $0.75$ — with its own place on the number line, between $0$ and $1$. The two written numbers are the instructions for finding it: cut into $4$, take $3$.`,
      },
      {
        id: 'caveat',
        lead: `The sharing idea works for any whole numbers, with two things to watch.`,
        content: [
          `What generalizes: $\\frac{a}{b}$ always means $a \\div b$. What was particular: with fewer pizzas than people the share was less than one; share $5$ pizzas among $4$ and each gets $\\frac{5}{4}$, more than one whole. And one thing can never happen: sharing among nobody.`,
          `The denominator cannot equal zero. Division by zero is undefined in mathematics, so expressions like $\\frac{5}{0}$ have no meaning. Any integer $b \\neq 0$ can serve as a denominator.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers fraction notation, the roles of numerator and denominator, the ways fractions are pictured, proper and improper fractions, unit fractions, fractions on the number line, and the operations and types of fractions that later pages develop.`,
      },
    ],
  }

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
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
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
                  <div key={'unit-threeFifths'} dangerouslySetInnerHTML={{ __html: demoUnits.threeFifths }} />,
          `Shading all 5 parts would give 5/5 = 1, the whole bar.`,
          `@academic[punchline:The denominator sets the size of the pieces and the numerator counts them; neither number alone gives the value.]@`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'obj3-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj3Table }} />,
          <DiagramFrame
            key={'obj3-diagram'}
            id="fraction-types-outline"
            title="Two ways to classify a fraction"
            source="/arithmetic/fractions"
          >
            <TaxonomyOutline data={fractionTypesOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
                  <div key={'unit-properImproper'} dangerouslySetInnerHTML={{ __html: demoUnits.properImproper }} />,
          `The numerator against the denominator decides it: below means proper, at or above means improper.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
                  <div key={'unit-unitFractions'} dangerouslySetInnerHTML={{ __html: demoUnits.unitFractions }} />,
          `Three copies of the 1/5 cell make 3/5: every fraction is built from unit fractions.`,
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
            id="fraction-operations-tree"
            title="Operations with fractions"
            source="/arithmetic/fractions"
          >
            <TopDownTree data={fractionOpTree} />
          </DiagramFrame>,
          `@academic[punchline:Only adding and subtracting need a common denominator; multiplying and dividing work straight across, once the divisor is flipped.]@`,
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
        title:`Fractions FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Fractions</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
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