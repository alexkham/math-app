// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   "subsets",
//   "proper subset",
//   "superset",
//   "power set",
//   "subset notation",
//   "subset symbol",
//   "number of subsets",
//   "how many subsets",
//   "subset vs proper subset",
//   "empty set subset",
//   "power set formula",
//   "2 to the n subsets",
//   "subset definition",
//   "set containment"
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

//   //   const sectionsContent={

//   //   obj1:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
  
//   //   },
//   //   obj2:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
  
//   //   obj3:{
  
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj4:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj5:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj6:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj7:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj8:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj9:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj10:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj11:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj12:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   },
//   //   obj13:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
//   //     link:'',
  
//   //   },
//   //   obj14:{
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
//   //     link:'',
  
//   //   },


//   //   obj15:{
  
//   //     title:``,
//   //     content:``,
//   //     before:``,
//   //     after:``,
//   //     link:'',
  
//   //   }
  
//   // }


//   const sectionsContent = {

//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Subset](!/set-theory/definitions#subset) — a set whose elements all belong to another set
// - [Proper Subset](!/set-theory/definitions#proper_subset) — a subset strictly smaller than its containing set
// - [Superset](!/set-theory/definitions#superset) — the inverse of the subset relation
// - [Power Set](!/set-theory/definitions#power_set) — the collection of all subsets of a given set
// - [Empty Set](!/set-theory/definitions#empty_set) — subset of every set by vacuous truth
// - [Cardinality](!/set-theory/definitions#cardinality) — determines the number of subsets via $2^{|A|}$


// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
//   link: '',
// },
 
//   obj1: {
//     title: `Subsets`,
//     content: `
// A set $A$ is a subset of a set $B$ if every element of $A$ is also an element of $B$. This relationship is written:

// $$A \\subseteq B$$

// The formal definition uses a universal quantifier:

// $$A \\subseteq B \\iff \\forall x\\,(x \\in A \\Rightarrow x \\in B)$$

// Consider $A = \\{2, 4\\}$ and $B = \\{1, 2, 3, 4, 5\\}$. Since both $2$ and $4$ appear in $B$, we have $A \\subseteq B$. However, $\\{2, 6\\} \\not\\subseteq B$ because $6 \\notin B$ — a single missing element breaks the subset relationship.

// Two facts hold universally:

// - Every set is a subset of itself: $A \\subseteq A$ for any set $A$

// - The empty set is a subset of every set: $\\emptyset \\subseteq A$ for any set $A$

// The first fact is immediate since every element of $A$ trivially belongs to $A$. The second follows because the empty set contains no elements, so there is no element that could fail to belong to $A$.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Proper Subsets`,
//     content: `
// A set $A$ is a proper subset of $B$ if $A$ is a subset of $B$ but $A$ is not equal to $B$. This is written:

// $$A \\subset B$$

// Equivalently:

// $$A \\subset B \\iff (A \\subseteq B) \\land (A \\neq B)$$

// The distinction matters: $\\{1, 2\\} \\subseteq \\{1, 2\\}$ is true, but $\\{1, 2\\} \\subset \\{1, 2\\}$ is false because the two sets are equal. For a proper subset, there must exist at least one element in $B$ that does not belong to $A$.

// If $A = \\{a, b\\}$ and $B = \\{a, b, c\\}$, then $A \\subset B$ because $c \\in B$ but $c \\notin A$.

// The empty set satisfies $\\emptyset \\subset A$ for every non-empty set $A$, since $\\emptyset \\subseteq A$ and $\\emptyset \\neq A$. However, $\\emptyset \\subset \\emptyset$ is false because $\\emptyset = \\emptyset$.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Superset`,
//     content: `
// The superset relation is the inverse of the subset relation. If $A \\subseteq B$, then $B$ is a superset of $A$, written:

// $$B \\supseteq A$$

// This is read as "$B$ contains $A$" or "$B$ is a superset of $A$." Similarly, if $A \\subset B$, then $B$ is a proper superset of $A$:

// $$B \\supset A$$

// The superset notation simply reverses perspective. Whether to write $A \\subseteq B$ or $B \\supseteq A$ depends on which set you want to emphasize. Both statements convey the same relationship.

// The standard number sets provide a natural example of superset chains:

// $$\\mathbb{C} \\supset \\mathbb{R} \\supset \\mathbb{Q} \\supset \\mathbb{Z} \\supset \\mathbb{N}$$

// Each set properly contains the one to its right: the [complex numbers](!/complex-numbers) contain the reals, which contain the rationals, and so on.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Number of Subsets`,
//     content: `
// A set with $n$ elements has exactly $2^n$ subsets. This count includes both the empty set and the set itself.

// The reasoning is straightforward: for each element, there are two choices — include it in the subset or exclude it. With $n$ elements, this gives:

// $$2 \\times 2 \\times \\cdots \\times 2 = 2^n$$

// independent choices, yielding $2^n$ distinct subsets.

// For proper subsets, we exclude the set itself from the count, giving $2^n - 1$ proper subsets.

// Examples:

// - A set with $0$ elements (the empty set) has $2^0 = 1$ subset: itself

// - A set with $3$ elements has $2^3 = 8$ subsets and $7$ proper subsets

// - A set with $10$ elements has $2^{10} = 1024$ subsets

// This counting principle connects directly to the [binomial coefficients](!/probability/combinatorics): the number of subsets of size $k$ from a set of $n$ elements is $\\binom{n}{k}$, and summing over all possible sizes gives:

// $$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$$
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Power Set`,
//     content: `
// The power set of a set $A$, denoted $\\mathcal{P}(A)$ or $2^A$, is the set of all subsets of $A$:

// $$\\mathcal{P}(A) = \\{S : S \\subseteq A\\}$$

// For $A = \\{1, 2\\}$, the power set is:

// $$\\mathcal{P}(\\{1, 2\\}) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$$

// The empty set and $A$ itself are always elements of $\\mathcal{P}(A)$.

// The [cardinality](!/set-theory/cardinality) of the power set follows directly from subset counting:

// $$|\\mathcal{P}(A)| = 2^{|A|}$$

// The power set of the empty set deserves attention:

// $$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$$

// This is not the empty set — it is a set containing one element (the empty set). The distinction matters: $|\\mathcal{P}(\\emptyset)| = 1$, not $0$.

// The power set transforms subset relationships into membership relationships: $B \\subseteq A$ if and only if $B \\in \\mathcal{P}(A)$.
//     `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// const introContent = {
//   id: "intro",
//   title: `Containment and the Power Set`,
//   content: `
// A subset relationship describes when one [set](!/set-theory) is entirely contained within another. This concept provides the fundamental way to compare sets and establish hierarchies among collections. From subsets emerges the power set — the collection of all possible subsets a given set can produce — which connects directly to [combinatorics](!/probability/combinatorics) and counting principles.
//   `,
// };


// const faqQuestions = {
//   obj1: {
//     question: "What is a subset?",
//     answer: "A set A is a subset of B (written A ⊆ B) if every element of A is also in B. Every set is a subset of itself, and the empty set is a subset of every set.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is the difference between subset and proper subset?",
//     answer: "A ⊆ B means A is a subset of B (could be equal). A ⊂ B means A is a proper subset — A is contained in B but A ≠ B. Proper subsets exclude the set itself.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "Is the empty set a subset of every set?",
//     answer: "Yes. The empty set ∅ ⊆ A for any set A. Since ∅ has no elements, there's no element that could fail to belong to A. The condition is vacuously true.",
//     sectionId: "1"
//   },
//   obj4: {
//     question: "What is a superset?",
//     answer: "If A ⊆ B, then B is a superset of A (written B ⊇ A). Superset reverses the perspective — it means B contains A. The relationship is the same, just stated differently.",
//     sectionId: "3"
//   },
//   obj5: {
//     question: "How many subsets does a set with n elements have?",
//     answer: "A set with n elements has 2ⁿ subsets. Each element can be included or excluded independently, giving 2 × 2 × ... × 2 = 2ⁿ combinations.",
//     sectionId: "4"
//   },
//   obj6: {
//     question: "How many proper subsets does a set have?",
//     answer: "A set with n elements has 2ⁿ − 1 proper subsets. This excludes the set itself from the count of all 2ⁿ subsets.",
//     sectionId: "4"
//   },
//   obj7: {
//     question: "What is a power set?",
//     answer: "The power set P(A) is the set of all subsets of A. For A = {1, 2}, the power set is {∅, {1}, {2}, {1, 2}}. It always contains 2ⁿ elements.",
//     sectionId: "5"
//   },
//   obj8: {
//     question: "What is the power set of the empty set?",
//     answer: "P(∅) = {∅} — a set containing one element (the empty set itself). This is not empty; it has cardinality 1 = 2⁰.",
//     sectionId: "5"
//   },
//   obj9: {
//     question: "Why does the empty set have one subset?",
//     answer: "The only subset of ∅ is ∅ itself. Using the formula: 2⁰ = 1 subset. The empty set is always a subset of any set, including itself.",
//     sectionId: "4"
//   },
//   obj10: {
//     question: "How does subset relate to power set?",
//     answer: "B ⊆ A if and only if B ∈ P(A). The power set transforms subset relationships into membership — being a subset of A means being an element of A's power set.",
//     sectionId: "5"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Subsets and Power Sets",
//     "description": "Learn about subsets, proper subsets, supersets, and power sets. Understand subset notation, count subsets with 2ⁿ, and explore the power set concept.",
//     "url": "https://www.learnmathclass.com/set-theory/subsets",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Subsets and Power Sets"
//     },
//     "teaches": [
//       "Definition and notation of subsets",
//       "Proper subsets vs subsets",
//       "Superset relationship",
//       "Counting subsets with 2ⁿ formula",
//       "Power set definition and properties"
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
//         "name": "Set Theory",
//         "item": "https://www.learnmathclass.com/set-theory"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Subsets",
//         "item": "https://www.learnmathclass.com/set-theory/subsets"
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


 
//   return {
//   props: {
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Subsets and Power Sets: Notation, Counting & Examples | Learn Math Class",
//       description: "Learn about subsets, proper subsets, supersets, and power sets. Understand subset notation, count subsets with 2ⁿ, and explore the power set concept.",
//       keywords: keyWords.join(", "),
//       url: "/set-theory/subsets",
//       name: "Subsets and Power Sets"
//     },
//   }
// }
//    }


// export default function SubsetsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
//     // {
//     //     id:'6',
//     //     title:sectionsContent.obj6.title,
//     //     link:sectionsContent.obj6.link,
//     //     content:[
//     //       sectionsContent.obj6.content,
//     //     ]
//     // },
//     // {
//     //     id:'7',
//     //     title:sectionsContent.obj7.title,
//     //     link:sectionsContent.obj7.link,
//     //     content:[
//     //       sectionsContent.obj7.content,
//     //     ]
//     // },
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
//    {/* <Head>
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
// </Head> */}

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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Subsets</h1>
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
//     <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
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
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "subsets",
  "proper subset",
  "superset",
  "power set",
  "subset notation",
  "subset symbol",
  "number of subsets",
  "how many subsets",
  "subset vs proper subset",
  "empty set subset",
  "power set formula",
  "2 to the n subsets",
  "subset definition",
  "set containment"
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

  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj4 — aggregation: subset count by cardinality of the base set
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 80%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">n = |A|</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Total subsets &nbsp;(2<sup>n</sup>)</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Proper subsets &nbsp;(2<sup>n</sup> − 1)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">7</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">16</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">15</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">32</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">31</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">10</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">1,024</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">1,023</td>
    </tr>
  </tbody>
</table>
`

  // obj6 — summary: capstone subset/superset notation reference card
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Symbol</th>
      <th style="${tableHeaders.summary}">Read as</th>
      <th style="${tableHeaders.summary}">Meaning</th>
      <th style="${tableHeaders.summary}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">A ⊆ B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;A is a subset of B&quot;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every element of A is in B &nbsp;(A may equal B)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{1, 2} ⊆ {1, 2}; &nbsp;∅ ⊆ A for any A</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">A ⊂ B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;A is a proper subset of B&quot;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A ⊆ B &nbsp;and &nbsp;A ≠ B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{1, 2} ⊂ {1, 2, 3}</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">B ⊇ A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;B is a superset of A&quot;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse of ⊆; &nbsp;B contains every element of A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝ ⊇ ℚ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">B ⊃ A</td>
      <td style="padding: 12px 15px; color: #34495e;">&quot;B is a proper superset of A&quot;</td>
      <td style="padding: 12px 15px; color: #34495e;">inverse of ⊂; &nbsp;B properly contains A</td>
      <td style="padding: 12px 15px; color: #34495e;">ℝ ⊃ ℚ; &nbsp;ℂ ⊃ ℝ ⊃ ℚ ⊃ ℤ ⊃ ℕ</td>
    </tr>
  </tbody>
</table>
`

  const sectionsContent = {

    obj0: {
  title: `Key Terms`,
  content: `
- [Subset](!/set-theory/definitions#subset) — a set whose elements all belong to another set
- [Proper Subset](!/set-theory/definitions#proper_subset) — a subset strictly smaller than its containing set
- [Superset](!/set-theory/definitions#superset) — the inverse of the subset relation
- [Power Set](!/set-theory/definitions#power_set) — the collection of all subsets of a given set
- [Empty Set](!/set-theory/definitions#empty_set) — subset of every set by vacuous truth
- [Cardinality](!/set-theory/definitions#cardinality) — determines the number of subsets via $2^{|A|}$


`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
  link: '',
},
 
  obj1: {
    title: `Subsets`,
    content: `
A set $A$ is a subset of a set $B$ if every element of $A$ is also an element of $B$. This relationship is written:

$$A \\subseteq B$$

The formal definition uses a universal quantifier:

$$A \\subseteq B \\iff \\forall x\\,(x \\in A \\Rightarrow x \\in B)$$

Consider $A = \\{2, 4\\}$ and $B = \\{1, 2, 3, 4, 5\\}$. Since both $2$ and $4$ appear in $B$, we have $A \\subseteq B$. However, $\\{2, 6\\} \\not\\subseteq B$ because $6 \\notin B$ — a single missing element breaks the subset relationship.

Two facts hold universally:

- Every set is a subset of itself: $A \\subseteq A$ for any set $A$

- The empty set is a subset of every set: $\\emptyset \\subseteq A$ for any set $A$

The first fact is immediate since every element of $A$ trivially belongs to $A$. The second follows because the empty set contains no elements, so there is no element that could fail to belong to $A$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Proper Subsets`,
    content: `
A set $A$ is a proper subset of $B$ if $A$ is a subset of $B$ but $A$ is not equal to $B$. This is written:

$$A \\subset B$$

Equivalently:

$$A \\subset B \\iff (A \\subseteq B) \\land (A \\neq B)$$

The distinction matters: $\\{1, 2\\} \\subseteq \\{1, 2\\}$ is true, but $\\{1, 2\\} \\subset \\{1, 2\\}$ is false because the two sets are equal. For a proper subset, there must exist at least one element in $B$ that does not belong to $A$.

If $A = \\{a, b\\}$ and $B = \\{a, b, c\\}$, then $A \\subset B$ because $c \\in B$ but $c \\notin A$.

The empty set satisfies $\\emptyset \\subset A$ for every non-empty set $A$, since $\\emptyset \\subseteq A$ and $\\emptyset \\neq A$. However, $\\emptyset \\subset \\emptyset$ is false because $\\emptyset = \\emptyset$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Superset`,
    content: `
The superset relation is the inverse of the subset relation. If $A \\subseteq B$, then $B$ is a superset of $A$, written:

$$B \\supseteq A$$

This is read as "$B$ contains $A$" or "$B$ is a superset of $A$." Similarly, if $A \\subset B$, then $B$ is a proper superset of $A$:

$$B \\supset A$$

The superset notation simply reverses perspective. Whether to write $A \\subseteq B$ or $B \\supseteq A$ depends on which set you want to emphasize. Both statements convey the same relationship.

The standard number sets provide a natural example of superset chains:

$$\\mathbb{C} \\supset \\mathbb{R} \\supset \\mathbb{Q} \\supset \\mathbb{Z} \\supset \\mathbb{N}$$

Each set properly contains the one to its right: the [complex numbers](!/complex-numbers) contain the reals, which contain the rationals, and so on.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Number of Subsets`,
    content: `
A set with $n$ elements has exactly $2^n$ subsets. This count includes both the empty set and the set itself.

The reasoning is straightforward: for each element, there are two choices — include it in the subset or exclude it. With $n$ elements, this gives:

$$2 \\times 2 \\times \\cdots \\times 2 = 2^n$$

independent choices, yielding $2^n$ distinct subsets.

For proper subsets, we exclude the set itself from the count, giving $2^n - 1$ proper subsets.

Examples:

- A set with $0$ elements (the empty set) has $2^0 = 1$ subset: itself

- A set with $3$ elements has $2^3 = 8$ subsets and $7$ proper subsets

- A set with $10$ elements has $2^{10} = 1024$ subsets

This counting principle connects directly to the [binomial coefficients](!/probability/combinatorics): the number of subsets of size $k$ from a set of $n$ elements is $\\binom{n}{k}$, and summing over all possible sizes gives:

$$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$$
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Power Set`,
    content: `
The power set of a set $A$, denoted $\\mathcal{P}(A)$ or $2^A$, is the set of all subsets of $A$:

$$\\mathcal{P}(A) = \\{S : S \\subseteq A\\}$$

For $A = \\{1, 2\\}$, the power set is:

$$\\mathcal{P}(\\{1, 2\\}) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$$

The empty set and $A$ itself are always elements of $\\mathcal{P}(A)$.

The [cardinality](!/set-theory/cardinality) of the power set follows directly from subset counting:

$$|\\mathcal{P}(A)| = 2^{|A|}$$

The power set of the empty set deserves attention:

$$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$$

This is not the empty set — it is a set containing one element (the empty set). The distinction matters: $|\\mathcal{P}(\\emptyset)| = 1$, not $0$.

The power set transforms subset relationships into membership relationships: $B \\subseteq A$ if and only if $B \\in \\mathcal{P}(A)$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Summary: Subset and Superset Notation`,
    content: `
Four containment symbols cover every subset/superset relationship encountered above. The capstone reference card below collects all four — with how each is read, what it means, and a representative example — so the right notation is always one glance away.
    `,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: "intro",
  title: `Containment and the Power Set`,
  content: `
A subset relationship describes when one [set](!/set-theory) is entirely contained within another. This concept provides the fundamental way to compare sets and establish hierarchies among collections. From subsets emerges the power set — the collection of all possible subsets a given set can produce — which connects directly to [combinatorics](!/probability/combinatorics) and counting principles.
  `,
};


const faqQuestions = {
  obj1: {
    question: "What is a subset?",
    answer: "A set A is a subset of B (written A ⊆ B) if every element of A is also in B. Every set is a subset of itself, and the empty set is a subset of every set.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between subset and proper subset?",
    answer: "A ⊆ B means A is a subset of B (could be equal). A ⊂ B means A is a proper subset — A is contained in B but A ≠ B. Proper subsets exclude the set itself.",
    sectionId: "2"
  },
  obj3: {
    question: "Is the empty set a subset of every set?",
    answer: "Yes. The empty set ∅ ⊆ A for any set A. Since ∅ has no elements, there's no element that could fail to belong to A. The condition is vacuously true.",
    sectionId: "1"
  },
  obj4: {
    question: "What is a superset?",
    answer: "If A ⊆ B, then B is a superset of A (written B ⊇ A). Superset reverses the perspective — it means B contains A. The relationship is the same, just stated differently.",
    sectionId: "3"
  },
  obj5: {
    question: "How many subsets does a set with n elements have?",
    answer: "A set with n elements has 2ⁿ subsets. Each element can be included or excluded independently, giving 2 × 2 × ... × 2 = 2ⁿ combinations.",
    sectionId: "4"
  },
  obj6: {
    question: "How many proper subsets does a set have?",
    answer: "A set with n elements has 2ⁿ − 1 proper subsets. This excludes the set itself from the count of all 2ⁿ subsets.",
    sectionId: "4"
  },
  obj7: {
    question: "What is a power set?",
    answer: "The power set P(A) is the set of all subsets of A. For A = {1, 2}, the power set is {∅, {1}, {2}, {1, 2}}. It always contains 2ⁿ elements.",
    sectionId: "5"
  },
  obj8: {
    question: "What is the power set of the empty set?",
    answer: "P(∅) = {∅} — a set containing one element (the empty set itself). This is not empty; it has cardinality 1 = 2⁰.",
    sectionId: "5"
  },
  obj9: {
    question: "Why does the empty set have one subset?",
    answer: "The only subset of ∅ is ∅ itself. Using the formula: 2⁰ = 1 subset. The empty set is always a subset of any set, including itself.",
    sectionId: "4"
  },
  obj10: {
    question: "How does subset relate to power set?",
    answer: "B ⊆ A if and only if B ∈ P(A). The power set transforms subset relationships into membership — being a subset of A means being an element of A's power set.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Subsets and Power Sets",
    "description": "Learn about subsets, proper subsets, supersets, and power sets. Understand subset notation, count subsets with 2ⁿ, and explore the power set concept.",
    "url": "https://www.learnmathclass.com/set-theory/subsets",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Subsets and Power Sets"
    },
    "teaches": [
      "Definition and notation of subsets",
      "Proper subsets vs subsets",
      "Superset relationship",
      "Counting subsets with 2ⁿ formula",
      "Power set definition and properties"
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
        "name": "Set Theory",
        "item": "https://www.learnmathclass.com/set-theory"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Subsets",
        "item": "https://www.learnmathclass.com/set-theory/subsets"
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
  props: {
    sectionsContent,
    introContent,
    obj4Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Subsets and Power Sets: Notation, Counting & Examples | Learn Math Class",
      description: "Learn about subsets, proper subsets, supersets, and power sets. Understand subset notation, count subsets with 2ⁿ, and explore the power set concept.",
      keywords: keyWords.join(", "),
      url: "/set-theory/subsets",
      name: "Subsets and Power Sets"
    },
  }
}
   }


export default function SubsetsPage({seoData, sectionsContent, introContent, obj4Table, summaryTable, faqQuestions, schemas}) {

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

    // obj4: prose + subset-count data aggregation table
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div
            key={'obj4-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj4Table }}
          />,
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

    // obj6: NEW capstone — subset/superset notation reference card
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    // {
    //     id:'7',
    //     title:sectionsContent.obj7.title,
    //     link:sectionsContent.obj7.link,
    //     content:[
    //       sectionsContent.obj7.content,
    //     ]
    // },
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
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
   {/* <Head>
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
</Head> */}

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Subsets</h1>
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