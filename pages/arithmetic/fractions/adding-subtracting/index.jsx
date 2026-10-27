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
//   "adding fractions",
//   "subtracting fractions",
//   "common denominator",
//   "least common denominator",
//   "how to add fractions",
//   "how to subtract fractions",
//   "add fractions different denominators",
//   "adding mixed numbers",
//   "subtracting mixed numbers",
//   "fraction addition",
//   "fraction subtraction",
//   "LCD fractions",
//   "adding fractions steps",
//   "borrowing mixed numbers",
//   "add fractions same denominator"
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
// - [Common Denominator](!/arithmetic/definitions#common_denominator) — the shared denominator needed before combining fractions
// - [Equivalent Fractions](!/arithmetic/definitions#equivalent_fractions) — used to rewrite fractions with matching denominators
// - [Mixed Number](!/arithmetic/definitions#mixed_number) — adding and subtracting mixed numbers requires special handling`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
//   link: '',
// },

//     obj1: {
//     title: `Same Denominator — The Simple Case`,
//     content: `When fractions share a denominator, add or subtract the numerators and keep the denominator unchanged.

// $$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$

// $$\\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c}$$

// For example, $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$ and $\\frac{5}{8} - \\frac{2}{8} = \\frac{3}{8}$.

// This works because the denominator names the size of each piece. Adding two-sevenths and three-sevenths means combining five pieces that are each one-seventh in size. The result may need simplifying — $\\frac{4}{8} + \\frac{2}{8} = \\frac{6}{8} = \\frac{3}{4}$ after reducing to [simplest form](!/arithmetic/fractions/equivalent).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Why Common Denominators Are Required`,
//     content: `Fractions with different denominators represent pieces of different sizes. Adding $\\frac{1}{3}$ and $\\frac{1}{4}$ directly makes no sense because thirds and fourths are not the same unit.

// Consider the analogy of adding 2 feet and 5 inches. The numbers cannot be combined until both are expressed in the same unit — either all inches or all feet. Similarly, $\\frac{1}{3}$ and $\\frac{1}{4}$ must be rewritten as [equivalent fractions](!/arithmetic/fractions/equivalent) with matching denominators before the numerators can be added.

// Visually, a bar divided into thirds and a bar divided into fourths have different segment sizes. Only by subdividing both bars into twelfths — a common unit — can the shaded regions be meaningfully combined.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Finding a Common Denominator`,
//     content: `A common denominator is any number that both original denominators divide into evenly. For $\\frac{1}{3}$ and $\\frac{1}{4}$, common denominators include 12, 24, 36, and infinitely many others.

// The least common denominator (LCD) is the smallest such number, keeping arithmetic manageable. The LCD of 3 and 4 is 12. The LCD of 6 and 8 is 24.

// Finding the LCD uses the [least common multiple](!/arithmetic/divisibility/lcm). List multiples of each denominator until a match appears, or use prime factorization for larger numbers. For denominators 4 and 6: multiples of 4 are 4, 8, 12, 16... and multiples of 6 are 6, 12, 18... The first common multiple is 12.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Converting to Common Denominator`,
//     content: `Once the common denominator is identified, convert each fraction by multiplying its numerator and denominator by the same factor.

// To add $\\frac{2}{3} + \\frac{1}{4}$ with LCD 12:

// $$\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$$

// $$\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$$

// $$\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$$

// For subtraction, the process is identical. To compute $\\frac{5}{6} - \\frac{1}{4}$ with LCD 12: convert to $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Adding Mixed Numbers`,
//     content: `Two methods handle addition of [mixed numbers](!/arithmetic/fractions/mixed-numbers). The first adds whole parts and fractional parts separately. The second converts everything to improper fractions.

// Using the first method for $2\\frac{1}{3} + 4\\frac{1}{4}$: add wholes $2 + 4 = 6$, then add fractions $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$. The result is $6\\frac{7}{12}$.

// When the fractional sum exceeds 1, regroup. For $3\\frac{3}{4} + 2\\frac{1}{2}$: wholes give $3 + 2 = 5$, fractions give $\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4} = 1\\frac{1}{4}$. Combine: $5 + 1\\frac{1}{4} = 6\\frac{1}{4}$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Subtracting Mixed Numbers`,
//     content: `Subtraction of mixed numbers also works by handling parts separately, but borrowing may be necessary when the first fractional part is smaller than the second.

// For $5\\frac{3}{4} - 2\\frac{1}{4}$: subtract wholes $5 - 2 = 3$, subtract fractions $\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$. The result is $3\\frac{1}{2}$.

// For $5\\frac{1}{4} - 2\\frac{3}{4}$: the fraction $\\frac{1}{4}$ is smaller than $\\frac{3}{4}$, so borrow 1 from the 5. Rewrite as $4\\frac{5}{4} - 2\\frac{3}{4}$. Now subtract: $4 - 2 = 2$ and $\\frac{5}{4} - \\frac{3}{4} = \\frac{2}{4} = \\frac{1}{2}$. The result is $2\\frac{1}{2}$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Adding and Subtracting with Whole Numbers`,
//     content: `A whole number can be treated as a fraction with denominator 1, or the whole part can be handled separately.

// For $5 + \\frac{3}{4}$: the result is simply $5\\frac{3}{4}$.

// For $5 - \\frac{3}{4}$: rewrite 5 as $4\\frac{4}{4}$, then subtract $4\\frac{4}{4} - \\frac{3}{4} = 4\\frac{1}{4}$.

// Alternatively, express 5 as $\\frac{5}{1}$, find a common denominator with $\\frac{3}{4}$, and compute: $\\frac{20}{4} - \\frac{3}{4} = \\frac{17}{4} = 4\\frac{1}{4}$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Common Mistakes`,
//     content: `Adding denominators is the most frequent error. The sum $\\frac{1}{2} + \\frac{1}{3}$ does not equal $\\frac{2}{5}$. Only numerators are added after finding a common denominator: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.

// Forgetting to convert all fractions to the LCD leads to incorrect results. Each fraction must be rewritten before combining.

// Failing to simplify the final answer leaves work incomplete. The sum $\\frac{2}{8} + \\frac{2}{8} = \\frac{4}{8}$ should be reduced to $\\frac{1}{2}$.

// Improper borrowing with mixed numbers causes errors in subtraction. When borrowing, the borrowed 1 becomes a fraction with the same denominator as the fractional part, not simply 1.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
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
//   title: "Finding Common Ground",
//   content: `Adding and subtracting fractions requires a common denominator. Unlike [multiplication](!/arithmetic/fractions/multiplying), where numerators and denominators combine directly, addition and subtraction can only proceed when the fractions represent same-sized pieces. This page covers operations with same and different denominators, working with [mixed numbers](!/arithmetic/fractions/mixed-numbers), and avoiding common errors.`
// }

// const faqQuestions = {
//   obj1: {
//     question: "How do you add fractions with the same denominator?",
//     answer: "Add the numerators and keep the denominator the same: a/c + b/c = (a+b)/c. For example, 2/7 + 3/7 = 5/7. The denominator stays unchanged because you're combining pieces of the same size.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "Why do fractions need a common denominator to add?",
//     answer: "Fractions with different denominators represent different-sized pieces. You can't directly add thirds and fourths — it's like adding feet and inches. Convert to the same unit (common denominator) first.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How do you find the least common denominator?",
//     answer: "The LCD is the least common multiple (LCM) of the denominators. For 3 and 4, list multiples: 3, 6, 9, 12... and 4, 8, 12... The first match is 12, so the LCD is 12.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "How do you add fractions with different denominators?",
//     answer: "Find a common denominator, convert each fraction, then add numerators. For 2/3 + 1/4: LCD is 12, so 2/3 = 8/12 and 1/4 = 3/12. Add: 8/12 + 3/12 = 11/12.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "How do you add mixed numbers?",
//     answer: "Add whole parts separately from fractional parts. For 2⅓ + 4¼: wholes give 6, fractions give 1/3 + 1/4 = 7/12. Result: 6⁷/₁₂. If fractions sum to more than 1, regroup into the whole number.",
//     sectionId: "5"
//   },
//   obj6: {
//     question: "How do you subtract mixed numbers with borrowing?",
//     answer: "When the first fraction is smaller, borrow 1 from the whole number. For 5¼ - 2¾: rewrite 5¼ as 4⁵/₄, then subtract: 4 - 2 = 2 and 5/4 - 3/4 = 2/4 = ½. Result: 2½.",
//     sectionId: "6"
//   },
//   obj7: {
//     question: "How do you subtract a fraction from a whole number?",
//     answer: "Rewrite the whole number as a mixed number with the same denominator. For 5 - 3/4: rewrite 5 as 4⁴/₄, then subtract: 4⁴/₄ - ¾ = 4¼. Or use improper fractions: 20/4 - 3/4 = 17/4 = 4¼.",
//     sectionId: "7"
//   },
//   obj8: {
//     question: "What is the most common mistake when adding fractions?",
//     answer: "Adding denominators instead of finding a common denominator. The sum 1/2 + 1/3 does NOT equal 2/5. You must convert first: 3/6 + 2/6 = 5/6.",
//     sectionId: "8"
//   },
//   obj9: {
//     question: "Do you add denominators when adding fractions?",
//     answer: "No, never. Only numerators are added after converting to a common denominator. The denominator represents the size of each piece, which doesn't change when combining pieces.",
//     sectionId: "8"
//   },
//   obj10: {
//     question: "Should you simplify after adding fractions?",
//     answer: "Yes, always reduce to simplest form. If 2/8 + 2/8 = 4/8, simplify to 1/2. Find the GCF of numerator and denominator, then divide both by it.",
//     sectionId: "1"
//   }
// }



// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Adding and Subtracting Fractions",
//     "description": "Learn to add and subtract fractions: same and different denominators, finding LCD, mixed numbers, borrowing, and avoiding common mistakes. Step-by-step examples.",
//     "url": "https://www.learnmathclass.com/arithmetic/fractions/adding-subtracting",
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
//       "name": "Fraction Addition and Subtraction"
//     },
//     "teaches": [
//       "Adding fractions with same denominator",
//       "Why common denominators are required",
//       "Finding the least common denominator",
//       "Converting fractions to common denominators",
//       "Adding and subtracting mixed numbers",
//       "Borrowing in mixed number subtraction",
//       "Common mistakes to avoid"
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
//         "name": "Adding and Subtracting Fractions",
//         "item": "https://www.learnmathclass.com/arithmetic/fractions/adding-subtracting"
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
//       title: "Adding & Subtracting Fractions: Common Denominators | Learn Math Class",
//       description: "Learn to add and subtract fractions: same and different denominators, finding LCD, mixed numbers, borrowing, and avoiding common mistakes. Step-by-step examples.",
//       keywords: keyWords.join(", "),
//       url: "/arithmetic/fractions/adding-subtracting",
//       name: "Adding and Subtracting Fractions"
//     },
//   }
// }
//    }


// export default function AddingSubtractingPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Adding and Subtracting Fractions</h1>
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



// tables-optimized: v4 | 2026-05-26 | 2 tables (obj6 aggregation, obj9 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFractionBar from '@/app/utils/illustrations/arithmetic/fractions/fractionBar'
import { tableHeaders } from '@/app/styles/theme'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "adding fractions",
  "subtracting fractions",
  "common denominator",
  "least common denominator",
  "how to add fractions",
  "how to subtract fractions",
  "add fractions different denominators",
  "adding mixed numbers",
  "subtracting mixed numbers",
  "fraction addition",
  "fraction subtraction",
  "LCD fractions",
  "adding fractions steps",
  "borrowing mixed numbers",
  "add fractions same denominator"
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

  // obj6 — aggregation: four mixed-number cases for add/subtract (placed at end of mixed-number coverage)
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Case</th>
      <th style="${tableHeaders.aggregation}">Procedure</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Add — no carry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">add wholes; add fractions; fractional sum stays proper</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 1⁄3 + 4 1⁄4 → 6 + 7⁄12 = 6 7⁄12</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Add — with carry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">add wholes; add fractions; if fractional sum ≥ 1, carry the extra whole</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3 3⁄4 + 2 1⁄2 → 5 + 5⁄4 = 5 + 1 1⁄4 = 6 1⁄4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Subtract — no borrow</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">subtract wholes; subtract fractions; first fractional part ≥ second</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 3⁄4 − 2 1⁄4 → 3 + 2⁄4 = 3 1⁄2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Subtract — with borrow</td>
      <td style="padding: 12px 15px; color: #34495e;">first fractional part &lt; second; borrow 1 from the whole as denom⁄denom, then subtract</td>
      <td style="padding: 12px 15px; color: #34495e;">5 1⁄4 − 2 3⁄4 → 4 5⁄4 − 2 3⁄4 = 2 2⁄4 = 2 1⁄2</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — summary capstone: rules and identities across the page
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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Same-denominator rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combine numerators, keep the denominator unchanged</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2⁄7 + 3⁄7 = 5⁄7</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Why common denom is required</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">different denominators name different-size pieces, like feet vs inches — convert before combining</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄3 + 1⁄4 must become twelfths</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/arithmetic/divisibility/lcm" style="${linkStyle}">LCD</a> = LCM of denominators</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">least common denominator is the least common multiple of the denominators</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">LCD(3, 4) = 12</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Conversion step</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply numerator and denominator by the factor that reaches the LCD; this produces an <a href="/arithmetic/fractions/equivalent" style="${linkStyle}">equivalent fraction</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2⁄3 → ×4⁄4 → 8⁄12</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">After conversion</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">add or subtract the numerators; the common denominator carries through</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8⁄12 + 3⁄12 = 11⁄12</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Whole + fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">place them side by side as a mixed number — no arithmetic needed</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 + 3⁄4 = 5 3⁄4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Whole − fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rewrite the whole as (n − 1) + denom⁄denom, then subtract the fraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 − 3⁄4 = 4 4⁄4 − 3⁄4 = 4 1⁄4</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Borrow uses denom⁄denom</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when borrowing 1 from the whole, it becomes a fraction with the current denominator, not the literal 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 1⁄4 → 4 5⁄4 (the borrowed 1 is 4⁄4)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Never add denominators</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">denominators name piece size and do not change when combining; only numerators combine</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1⁄2 + 1⁄3 ≠ 2⁄5 (it is 5⁄6)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Reduce the final result</td>
      <td style="padding: 12px 15px; color: #34495e;">simplify the sum or difference to <a href="/arithmetic/fractions/equivalent" style="${linkStyle}">lowest terms</a></td>
      <td style="padding: 12px 15px; color: #34495e;">4⁄8 → 1⁄2</td>
    </tr>
  </tbody>
</table>
`


    // Concept introduction (section 2, "Why Common Denominators Are
    // Required") — template C, failure first. Running instance: 1/3 + 1/4.
    // Old obj2 text (three paragraphs, no widgets) is kept in
    // sectionsContent.obj2, unused, and reused verbatim.
    const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
    const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
      cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
    const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
    const ciDecTable = ciTableOpen(['quantity', 'as a decimal']) +
      ciRow(['1/3', '≈ 0.333']) +
      ciRow(['1/4', '0.25'], { shade: true }) +
      ciRow(['"tops plus tops, bottoms plus bottoms": 2/7', '≈ 0.286 — less than 1/3 alone'], { color: '#a4243b', cols: [1] }) +
      ciRow(['the real total, 0.333 + 0.25', '≈ 0.583'], { shade: true, last: true, color: '#2563EB', cols: [1] }) +
      '</tbody></table>'

    const sectionsContent={

   obj0: {
  title: `Key Terms`,
  content: `
- [Common Denominator](!/arithmetic/definitions#common_denominator) — the shared denominator needed before combining fractions
- [Equivalent Fractions](!/arithmetic/definitions#equivalent_fractions) — used to rewrite fractions with matching denominators
- [Mixed Number](!/arithmetic/definitions#mixed_number) — adding and subtracting mixed numbers requires special handling`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
  link: '',
},

    obj1: {
    title: `Same Denominator — The Simple Case`,
    content: `When fractions share a denominator, add or subtract the numerators and keep the denominator unchanged.

@academic[formula_callout:Same Denominator — The Simple Case
$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$]@

@academic[formula_callout:Same Denominator — The Simple Case
$$\\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c}$$]@

@academic[pitfall,aside:true,width:35%:Adding the denominators
Adding the denominators as well, $\\frac{3}{8} + \\frac{1}{8} = \\frac{4}{16} = \\frac{1}{4}$, gives less than $\\frac{3}{8}$ alone. The pieces stay eighths: $\\frac{3}{8} + \\frac{1}{8} = \\frac{4}{8} = \\frac{1}{2}$.
[Read more](!#8)]@

For example, $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$ and $\\frac{5}{8} - \\frac{2}{8} = \\frac{3}{8}$.

This works because the denominator names the size of each piece. Adding two-sevenths and three-sevenths means combining five pieces that are each one-seventh in size. The result may need simplifying — $\\frac{4}{8} + \\frac{2}{8} = \\frac{6}{8} = \\frac{3}{4}$ after reducing to [simplest form](!/arithmetic/fractions/equivalent).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Why Common Denominators Are Required`,
    content: `Fractions with different denominators represent pieces of different sizes. Adding $\\frac{1}{3}$ and $\\frac{1}{4}$ directly makes no sense because thirds and fourths are not the same unit.

Consider the analogy of adding 2 feet and 5 inches. The numbers cannot be combined until both are expressed in the same unit — either all inches or all feet. Similarly, $\\frac{1}{3}$ and $\\frac{1}{4}$ must be rewritten as [equivalent fractions](!/arithmetic/fractions/equivalent) with matching denominators before the numerators can be added.

Visually, a bar divided into thirds and a bar divided into fourths have different segment sizes. Only by subdividing both bars into twelfths — a common unit — can the shaded regions be meaningfully combined.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Finding a Common Denominator`,
    content: `A common denominator is any number that both original denominators divide into evenly. For $\\frac{1}{3}$ and $\\frac{1}{4}$, common denominators include 12, 24, 36, and infinitely many others.

The least common denominator (LCD) is the smallest such number, keeping arithmetic manageable. The LCD of 3 and 4 is 12. The LCD of 6 and 8 is 24.

@academic[fact,aside:true,width:35%:Ninety-nine fractions that sum to $\\frac{99}{100}$
$\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\cdots + \\frac{1}{99 \\times 100} = \\frac{99}{100}$. Consecutive denominators share no factor, so each term equals $\\frac{1}{n} - \\frac{1}{n + 1}$ and in the long sum every middle term cancels, leaving $1 - \\frac{1}{100}$.]@

Finding the LCD uses the [least common multiple](!/arithmetic/divisibility/lcm). List multiples of each denominator until a match appears, or use prime factorization for larger numbers.

@academic[example:Example
For denominators 4 and 6: multiples of 4 are 4, 8, 12, 16... and multiples of 6 are 6, 12, 18... The first common multiple is 12.]@

When the denominators share no common factor, the LCD is simply their product, as $3 \\times 4 = 12$. Any two consecutive whole numbers are like this, so $\\frac{1}{3} - \\frac{1}{4} = \\frac{4}{12} - \\frac{3}{12} = \\frac{1}{12}$ and $\\frac{1}{4} - \\frac{1}{5} = \\frac{5}{20} - \\frac{4}{20} = \\frac{1}{20}$. The difference of two such unit fractions is again a unit fraction, with the product of the denominators below the line.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Converting to Common Denominator`,
    content: `Once the common denominator is identified, convert each fraction by multiplying its numerator and denominator by the same factor.

To add $\\frac{2}{3} + \\frac{1}{4}$ with LCD 12:

@academic[formula_callout:Converting to Common Denominator
$$\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$$]@

@academic[formula_callout:Converting to Common Denominator
$$\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$$]@

@academic[formula_callout:Converting to Common Denominator
$$\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$$]@

@academic[pitfall,aside:true,width:35%:Changing only the denominator
Changing only the bottoms turns $\\frac{2}{3} + \\frac{1}{4}$ into $\\frac{2}{12} + \\frac{1}{12} = \\frac{3}{12}$, less than $\\frac{2}{3}$ alone. Scaling the tops too gives $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.
[Read more](!#8)]@

Each factor is the LCD divided by the original denominator: $12 \\div 3 = 4$ for the thirds and $12 \\div 4 = 3$ for the quarters. Multiplying a fraction by $\\frac{4}{4}$ or $\\frac{3}{3}$ multiplies it by $1$, so its value stays the same; only the size of the pieces it is counted in changes.

For subtraction, the process is identical.

@academic[example:Example
To compute $\\frac{5}{6} - \\frac{1}{4}$ with LCD 12: convert to $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Adding Mixed Numbers`,
    content: `Two methods handle addition of [mixed numbers](!/arithmetic/fractions/mixed-numbers). The first adds whole parts and fractional parts separately. The second converts everything to improper fractions.

@academic[example:Example
Using the first method for $2\\frac{1}{3} + 4\\frac{1}{4}$: add wholes $2 + 4 = 6$, then add fractions $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$. The result is $6\\frac{7}{12}$.]@

When the fractional sum exceeds 1, regroup.

@academic[example:Example
For $3\\frac{3}{4} + 2\\frac{1}{2}$: wholes give $3 + 2 = 5$, fractions give $\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4} = 1\\frac{1}{4}$. Combine: $5 + 1\\frac{1}{4} = 6\\frac{1}{4}$.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Subtracting Mixed Numbers`,
    content: `Subtraction of mixed numbers also works by handling parts separately, but borrowing may be necessary when the first fractional part is smaller than the second.

@academic[example:Example
For $5\\frac{3}{4} - 2\\frac{1}{4}$: subtract wholes $5 - 2 = 3$, subtract fractions $\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$. The result is $3\\frac{1}{2}$.]@

@academic[pitfall,aside:true,width:35%:Subtracting the fractions the wrong way round
Subtracting the smaller fraction from the larger, $\\frac{4}{5} - \\frac{1}{5}$, turns $6\\frac{1}{5} - 3\\frac{4}{5}$ into $3\\frac{3}{5}$. Borrowing first gives $5\\frac{6}{5} - 3\\frac{4}{5} = 2\\frac{2}{5}$.
[Read more](!#8)]@

@academic[example:Example
For $5\\frac{1}{4} - 2\\frac{3}{4}$: the fraction $\\frac{1}{4}$ is smaller than $\\frac{3}{4}$, so borrow 1 from the 5. Rewrite as $4\\frac{5}{4} - 2\\frac{3}{4}$. Now subtract: $4 - 2 = 2$ and $\\frac{5}{4} - \\frac{3}{4} = \\frac{2}{4} = \\frac{1}{2}$. The result is $2\\frac{1}{2}$.]@`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Adding and Subtracting with Whole Numbers`,
    content: `A whole number can be treated as a fraction with denominator 1, or the whole part can be handled separately.

For $5 + \\frac{3}{4}$: the result is simply $5\\frac{3}{4}$.

@academic[example:Example
For $5 - \\frac{3}{4}$: rewrite 5 as $4\\frac{4}{4}$, then subtract $4\\frac{4}{4} - \\frac{3}{4} = 4\\frac{1}{4}$.]@

@academic[pitfall,aside:true,width:35%:Putting the whole number over the denominator
Writing $3$ as $\\frac{3}{5}$ turns $3 + \\frac{2}{5}$ into $\\frac{3}{5} + \\frac{2}{5} = 1$, less than the $3$ it started from. In fifths $3 = \\frac{15}{5}$, and the sum is $\\frac{17}{5} = 3\\frac{2}{5}$.
[Read more](!#8)]@

Alternatively, express 5 as $\\frac{5}{1}$, find a common denominator with $\\frac{3}{4}$, and compute: $\\frac{20}{4} - \\frac{3}{4} = \\frac{17}{4} = 4\\frac{1}{4}$.

To check a sum or difference that mixes whole numbers, mixed numbers and fractions, enter it in the [fraction calculator](!/calculators/fraction-calculator), which shows each step.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Common Mistakes`,
    content: `@academic[fact,aside:true,width:35%:Where tops plus bottoms is right
A batter with $1$ hit in $2$ at-bats one day and $1$ hit in $3$ the next has $2$ hits in $5$: pooling two ratios does add tops and bottoms. So $\\frac{2}{5}$ is the combined rate of the two days, while $\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$ adds two amounts.]@

Adding denominators is the most frequent error. The sum $\\frac{1}{2} + \\frac{1}{3}$ does not equal $\\frac{2}{5}$. Only numerators are added after finding a common denominator: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.

Forgetting to convert all fractions to the LCD leads to incorrect results. Each fraction must be rewritten before combining.

Failing to simplify the final answer leaves work incomplete. The sum $\\frac{2}{8} + \\frac{2}{8} = \\frac{4}{8}$ should be reduced to $\\frac{1}{2}$.

Improper borrowing with mixed numbers causes errors in subtraction. When borrowing, the borrowed 1 becomes a fraction with the same denominator as the fractional part, not simply 1.

**Changing only the denominator**

When a fraction is rewritten over the common denominator, the denominator is changed to the LCD but the numerator is copied unchanged. The rewritten fraction then has a different value from the original.

Wrong working: for $\\frac{2}{3} + \\frac{1}{4}$ with LCD $12$, write $\\frac{2}{3}$ as $\\frac{2}{12}$ and $\\frac{1}{4}$ as $\\frac{1}{12}$, then add: $\\frac{2}{12} + \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4}$.

Right working: $12 \\div 3 = 4$, so both parts of $\\frac{2}{3}$ are multiplied by $4$: $\\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$. Likewise $12 \\div 4 = 3$ gives $\\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$. Then $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.

Why it happens: the denominator is the visible target of the step, so attention goes to making the bottoms match, and the top is forgotten once they do.

How to check: a rewritten fraction must reduce back to the original. $\\frac{8}{12}$ reduces to $\\frac{2}{3}$, but $\\frac{2}{12}$ reduces to $\\frac{1}{6}$. The wrong sum $\\frac{1}{4}$ is also smaller than $\\frac{2}{3}$, one of the fractions being added.

**Subtracting the fractions the wrong way round**

In a mixed-number subtraction where the first fractional part is the smaller one, the fractional parts are subtracted in reverse, larger minus smaller, so that no borrowing seems to be needed.

Wrong working: for $6\\frac{1}{5} - 3\\frac{4}{5}$, subtract wholes $6 - 3 = 3$, then fractions $\\frac{4}{5} - \\frac{1}{5} = \\frac{3}{5}$, giving $3\\frac{3}{5}$.

Right working: $\\frac{1}{5}$ is smaller than $\\frac{4}{5}$, so borrow $1$ from the $6$ as $\\frac{5}{5}$: $6\\frac{1}{5} = 5\\frac{6}{5}$. Then $5 - 3 = 2$ and $\\frac{6}{5} - \\frac{4}{5} = \\frac{2}{5}$, giving $2\\frac{2}{5}$.

Why it happens: the same slip happens in column subtraction of whole numbers, where the ones column of $52 - 27$ is worked as $7 - 2$ instead of borrowing. Each part looks like a small problem of its own, and taking the smaller number from the larger feels safe.

How to check: estimate with decimals. $6\\frac{1}{5} = 6.2$ and $3\\frac{4}{5} = 3.8$, and $6.2 - 3.8 = 2.4 = 2\\frac{2}{5}$, not $3.6$.

**Putting the whole number over the denominator**

To combine a whole number with a fraction, the whole number is written over the fraction's denominator, as if $3$ were $\\frac{3}{5}$. That shrinks the whole number to a small part of its size.

Wrong working: $3 + \\frac{2}{5} = \\frac{3}{5} + \\frac{2}{5} = \\frac{5}{5} = 1$.

Right working: $3 = \\frac{3}{1}$, and in fifths that is $\\frac{3 \\times 5}{1 \\times 5} = \\frac{15}{5}$. Then $\\frac{15}{5} + \\frac{2}{5} = \\frac{17}{5} = 3\\frac{2}{5}$. Writing the mixed number directly gives the same result: $3 + \\frac{2}{5} = 3\\frac{2}{5}$.

Why it happens: the same-denominator rule asks for matching bottoms, and putting the denominator under the whole number looks like the quickest way to make them match.

How to check: adding a positive fraction to $3$ must give more than $3$, so a result of $1$ is impossible. For subtraction the same check applies: $5 - \\frac{3}{4}$ must lie between $4$ and $5$.`,
    before: ``,
    after: ``,
    link: '',
  },
    obj9:{
      title:`Adding and Subtracting Fractions at a Glance`,
      content:`The page covered same-denominator combination, why common denominators are required, finding and applying the LCD, the four mixed-number cases, working with whole numbers, and the most common errors. The table below collects the rules and identities worth keeping at hand.`,
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
  title: "Finding Common Ground",
  content: `Adding and subtracting fractions requires a common denominator. Unlike [multiplication](!/arithmetic/fractions/multiplying), where numerators and denominators combine directly, addition and subtraction can only proceed when the fractions represent same-sized pieces. This page covers operations with same and different denominators, working with [mixed numbers](!/arithmetic/fractions/mixed-numbers), and avoiding common errors.`
}

// FAQ pass: cut six questions whose h2 states the answer — same denominator,
// why common denominators are required, finding the LCD, adding mixed numbers
// (also owned by /arithmetic/fractions/mixed-numbers), whole numbers, and
// "most common mistake" (h2 "Common Mistakes"). Kept four whose query wording
// does not match any heading, all extended past the 40-word floor.
const faqQuestions = {
  obj1: {
    question: "How do you add fractions with different denominators?",
    answer: "Find a common denominator, rewrite each fraction with it, then add the numerators and keep that denominator. For 2/3 + 1/4 the LCD is 12, so 2/3 becomes 8/12 and 1/4 becomes 3/12, giving 11/12. Subtraction works identically: 5/6 − 1/4 converts to 10/12 − 3/12 = 7/12. Simplify the result if it is not already in lowest terms.",
    sectionId: "4"
  },
  obj2: {
    question: "Do you add denominators when adding fractions?",
    answer: "No, never. The denominator names the size of each piece, and combining pieces does not change how big they are — only how many you have. So 1/2 + 1/3 is not 2/5. Convert to a common denominator first, then add only the numerators: 3/6 + 2/6 = 5/6. Adding denominators would make the answer smaller than one of the parts.",
    sectionId: "8"
  },
  obj3: {
    question: "How do you subtract mixed numbers with borrowing?",
    answer: "Borrow when the first fractional part is smaller than the second. For 5¼ − 2¾, the ¼ cannot cover ¾, so take 1 from the 5 and add it to the fraction as 4/4: 5¼ becomes 4⁵⁄₄. Now subtract in parts: 4 − 2 = 2 and 5/4 − 3/4 = 1/2, giving 2½. The borrowed 1 always becomes a fraction with the denominator already in use.",
    sectionId: "6"
  },
  obj4: {
    question: "Should you simplify after adding fractions?",
    answer: "Yes — a sum is not considered complete until it is in lowest terms. Adding 2/8 + 2/8 gives 4/8, which reduces to 1/2. Divide the numerator and denominator by their greatest common factor to reduce in one step. Using the least common denominator rather than a larger one keeps the numbers small and often leaves nothing to simplify.",
    sectionId: "8"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Adding and Subtracting Fractions",
    "description": "Learn to add and subtract fractions: same and different denominators, finding LCD, mixed numbers, borrowing, and avoiding common mistakes. Step-by-step examples.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/adding-subtracting",
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
      "name": "Fraction Addition and Subtraction"
    },
    "teaches": [
      "Adding fractions with same denominator",
      "Why common denominators are required",
      "Finding the least common denominator",
      "Converting fractions to common denominators",
      "Adding and subtracting mixed numbers",
      "Borrowing in mixed number subtraction",
      "Common mistakes to avoid"
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
        "name": "Adding and Subtracting Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/adding-subtracting"
      }
    ]
  }
}



  const fbSameDenAdd = { kind: 'bars', svgTitle: '2/7 plus 3/7 makes 5/7: five sevenths', rows: [{ n: 7, k: 2, label: '2/7', partLabels: true }, { n: 7, k: 3, label: '+ 3/7', color: 'r', partLabels: true }, { n: 7, k: 5, label: '= 5/7', color: 'g', partLabels: true }],
    notes: [{ text: 'all parts are sevenths: 2 parts + 3 parts = 5 parts' }, { text: 'the denominator stays 7; only the count changes' }], caption: 'Same denominator: add the numerators' };
  const fbUnlikeAdd = { kind: 'bars', svgTitle: '2/3 plus 1/4: rewritten as 8/12 plus 3/12, the sum is 11/12', labelWidth: 80, rows: [{ n: 3, k: 2, label: '2/3', partLabels: true }, { n: 12, k: 8, label: '= 8/12' }, { n: 4, k: 1, label: '1/4', color: 'r', partLabels: true }, { n: 12, k: 3, label: '= 3/12', color: 'r' }, { n: 12, k: 11, label: '= 11/12', color: 'g' }],
    notes: [{ text: 'twelfths fit both thirds and quarters (LCD 12)' }, { text: '8 twelfths + 3 twelfths = 11 twelfths' }], caption: 'Unlike denominators: convert, then add' };
  const fbAddMistake = { kind: 'bars', svgTitle: 'Adding denominators: 1/2 plus 1/3 is not 2/5 but 5/6', labelWidth: 80, rows: [{ n: 2, k: 1, label: '1/2', partLabels: true }, { n: 3, k: 1, label: '+ 1/3', color: 'f', partLabels: true }, { n: 5, k: 2, label: '≠ 2/5', color: 'g', partLabels: true }, { n: 6, k: 5, label: '= 5/6', color: 'r', partLabels: true }],
    notes: [{ text: '2/5 is shorter than 1/2 alone: a sum cannot shrink' }, { text: 'correct: 3/6 + 2/6 = 5/6', color: 'r' }], caption: 'Never add the denominators' };
  const fbCiThirdsFourths = { kind: 'bars', svgTitle: '1/3 plus 1/4 is not 2/7; in twelfths it is 4/12 plus 3/12, which makes 7/12', labelWidth: 80,
    rows: [{ n: 3, k: 1, label: '1/3', partLabels: true }, { n: 4, k: 1, label: '+ 1/4', color: 'r', partLabels: true }, { n: 7, k: 2, label: '≠ 2/7', color: 'f', partLabels: true }, { n: 12, k: 7, label: '= 7/12', color: 'g' }] }
  const conceptIntroFigures = {
    bars: renderFractionBar(fbCiThirdsFourths),
    decTable: ciDecTable,
  };

  const demoUnits = {
    sameDenAdd: demoUnitFrame({
      svg: renderFractionBar(fbSameDenAdd),
      caption: 'Adding sevenths',
      text: 'All three bars are cut into sevenths, so every part has the same size. Two parts and three more parts make five parts: 2/7 + 3/7 = 5/7. The denominator names the size of the parts and does not change; only the number of parts is added.',
    }),
    unlikeAdd: demoUnitFrame({
      svg: renderFractionBar(fbUnlikeAdd),
      caption: 'Adding 2/3 and 1/4 through twelfths',
      text: 'Thirds and quarters are different sizes, so 2/3 and 1/4 cannot be added part by part. Cutting both bars into twelfths, the least common denominator, turns 2/3 into 8/12 and 1/4 into 3/12. Now the parts match and the counts add: 8/12 + 3/12 = 11/12, shown on the last bar.',
    }),
    addMistake: demoUnitFrame({
      svg: renderFractionBar(fbAddMistake),
      caption: 'Why 1/2 + 1/3 is not 2/5',
      text: 'Adding tops and bottoms gives 2/5, but the 2/5 bar is shorter than the 1/2 bar on its own, and adding a positive amount cannot make something smaller. Converting to sixths gives the true sum: 1/2 = 3/6 and 1/3 = 2/6, so 1/2 + 1/3 = 5/6, the amber bar.',
    }),
  };

return {
  props: {
    sectionsContent,
    introContent,
    obj6Table,
    capstoneTable,
    faqQuestions,
    schemas,
    demoUnits,
    conceptIntroFigures,
    seoData: {
      title: "Adding & Subtracting Fractions: Common Denominators | Learn Math Class",
      description: "Learn to add and subtract fractions: same and different denominators, finding LCD, mixed numbers, borrowing, and avoiding common mistakes. Step-by-step examples.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/adding-subtracting",
      name: "Adding and Subtracting Fractions"
    },
  }
}
   }


export default function AddingSubtractingPage({seoData, sectionsContent, introContent, obj6Table, capstoneTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 2 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Same-denominator fractions add top to top — so it is tempting to add top to top and bottom to bottom every time.`,
        content: [
          `By that rule $\\frac{1}{3} + \\frac{1}{4}$ would be $\\frac{1 + 1}{3 + 4} = \\frac{2}{7}$. It looks tidy and uses every number once.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        tone: 'break',
        lead: `The answer 2/7 is smaller than 1/3 — adding something positive made the total shrink.`,
        content: [
          ciTable('decTable'),
        ],
        visual: ciSvg('bars'),
      },
      {
        id: 'diagnosis',
        lead: `The failure was predictable: thirds and fourths are pieces of different sizes, and counting them together mixes units.`,
        content: [
          `Fractions with different denominators represent pieces of different sizes. Adding $\\frac{1}{3}$ and $\\frac{1}{4}$ directly makes no sense because thirds and fourths are not the same unit.`,
          `Consider the analogy of adding 2 feet and 5 inches. The numbers cannot be combined until both are expressed in the same unit — either all inches or all feet. Similarly, $\\frac{1}{3}$ and $\\frac{1}{4}$ must be rewritten as [equivalent fractions](!/arithmetic/fractions/equivalent) with matching denominators before the numerators can be added.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [common denominator](!/arithmetic/definitions#common_denominator) is a denominator two or more fractions can all be rewritten with. Fractions can be added or subtracted by working on the numerators exactly when they share a denominator.`,
        footer: `So $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$, with $12$ as the common denominator.`,
      },
      {
        id: 'kind',
        lead: `A common denominator is a shared unit: a piece size that both fractions can be measured in.`,
        content: [
          `Visually, a bar divided into thirds and a bar divided into fourths have different segment sizes. Only by subdividing both bars into twelfths — a common unit — can the shaded regions be meaningfully combined.`,
          `Any number that both denominators divide into works — $12$, $24$ or $36$ for thirds and fourths — and the smallest is their [least common multiple](!/arithmetic/divisibility/lcm).`,
        ],
      },
      {
        id: 'caveat',
        lead: `Read backwards, the rule gives a quick test: a sum of positive fractions can never be smaller than either part.`,
        content: `If an answer comes out below one of the fractions being added, the denominators were not matched first. Finding a good common denominator is the real work, as the next section, [finding a common denominator](!/arithmetic/fractions/adding-subtracting#3), shows.`,
      },
      {
        id: 'exit',
        content: `The rest of the page covers finding a common denominator, converting fractions to it, adding and subtracting mixed numbers and whole numbers, and common mistakes.`,
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
          sectionsContent.obj1.content,
                  <div key={'unit-sameDenAdd'} dangerouslySetInnerHTML={{ __html: demoUnits.sameDenAdd }} />,
          `Subtraction works the same way: 5/7 − 3/7 removes 3 parts and leaves 2/7.`,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          <ConceptIntro key={'obj2-intro'} data={conceptIntro} />,
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
                  <div key={'unit-unlikeAdd'} dangerouslySetInnerHTML={{ __html: demoUnits.unlikeAdd }} />,
          `11/12 is already in simplest form, since 11 and 12 share no factor.`,
          `@academic[punchline:Rewriting a fraction over a new denominator changes the size of its pieces, never its value.]@`,
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
          `@academic[punchline:Borrowing trades one whole for a full set of pieces, just as column subtraction trades a ten for ten ones.]@`,
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
                  <div key={'unit-addMistake'} dangerouslySetInnerHTML={{ __html: demoUnits.addMistake }} />,
          `A quick check: a sum must be at least as large as each fraction in it.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'capstone-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: capstoneTable }} />,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Adding and Subtracting Fractions FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Adding and Subtracting Fractions</h1>
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