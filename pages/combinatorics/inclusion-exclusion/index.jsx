// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

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

//  // URL: /combinatorics/inclusion-exclusion

// const sectionsContent = {
//   obj1: {
//     title: `Two Sets`,
//     content: `
// For two sets $A$ and $B$, the size of the union is

// $$|A \\cup B| = |A| + |B| - |A \\cap B|.$$

// Every element of $A \\cup B$ should be counted once on the left side. On the right, an element belonging to only $A$ is counted once (by $|A|$), an element belonging to only $B$ is counted once (by $|B|$), and an element in both is counted twice — once by $|A|$ and once by $|B|$. Subtracting $|A \\cap B|$ removes that extra count, restoring the correct total.

// ## Example

// In a group of 30 students, 18 take French and 15 take Spanish, with 7 taking both. The number taking at least one of the two languages is

// $$18 + 15 - 7 = 26.$$

// The remaining 4 students take neither.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Three Sets`,
//     content: `
// For three sets, the same logic extends with one more correction:

// $$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|.$$

// An element belonging to exactly one of the three sets is counted once on the right. An element in exactly two is counted twice by the singles and subtracted once by its single pairwise intersection — net count $1$. An element in all three is counted three times by the singles, subtracted three times by the pairwise intersections, and added back once by the triple intersection — net count $3 - 3 + 1 = 1$. Every element ends up counted exactly once.

// ## Example

// Among the integers from 1 to 100, the number divisible by 2, 3, or 5 is computed by applying the three-set formula to the divisibility sets. With $|A| = 50$ (multiples of 2), $|B| = 33$ (multiples of 3), $|C| = 20$ (multiples of 5), and the pairwise and triple intersections counting multiples of $6$, $10$, $15$, and $30$:

// $$50 + 33 + 20 - 16 - 10 - 6 + 3 = 74.$$
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `The General Formula`,
//     content: `
// For $n$ sets $A_1, A_2, \\ldots, A_n$:

// $$\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{i} |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap A_2 \\cap \\cdots \\cap A_n|.$$

// In compact form,

// $$\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{k=1}^{n} (-1)^{k+1} \\sum_{1 \\le i_1 < i_2 < \\cdots < i_k \\le n} |A_{i_1} \\cap A_{i_2} \\cap \\cdots \\cap A_{i_k}|.$$

// ## Structure of the Formula

// The number of terms at level $k$ — meaning the number of $k$-fold intersections being summed — is [$\\binom{n}{k}$](!/combinatorics/binomial-coefficient), one term for each $k$-subset of the $n$ sets. The total number of terms across all levels is

// $$\\sum_{k=1}^{n} \\binom{n}{k} = 2^n - 1,$$

// which is the number of non-empty subsets of the $n$ sets. Every non-empty subset contributes exactly one term to the formula.

// ## Why the Alternating Signs Work

// An element belonging to exactly $m$ of the $n$ sets is counted

// $$\\binom{m}{1} - \\binom{m}{2} + \\binom{m}{3} - \\cdots + (-1)^{m+1} \\binom{m}{m}$$

// times by the right-hand side. By the [binomial theorem](!/combinatorics/binomial-theorem) with $a = 1$ and $b = -1$,

// $$\\sum_{k=0}^{m} (-1)^k \\binom{m}{k} = 0,$$

// so $\\binom{m}{0} = 1$ minus the alternating sum from $k=1$ to $m$ gives $1$. Every element in the union is counted exactly once, as required.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `The Complementary Form`,
//     content: `
// Often the question is not how many elements belong to some of the $A_i$, but how many belong to none of them. If $U$ is a universal set containing all candidate elements, the elements outside every $A_i$ form the intersection of the complements:

// $$\\left| \\overline{A_1} \\cap \\overline{A_2} \\cap \\cdots \\cap \\overline{A_n} \\right| = |U| - \\left| A_1 \\cup A_2 \\cup \\cdots \\cup A_n \\right|.$$

// Expanding the right side using the general formula gives a direct expression for the count of elements satisfying none of the conditions defined by $A_1, \\ldots, A_n$:

// $$|U| - \\sum_{i} |A_i| + \\sum_{i<j} |A_i \\cap A_j| - \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| + \\cdots + (-1)^n |A_1 \\cap \\cdots \\cap A_n|.$$

// This is the natural form for problems phrased as "how many elements avoid all of the following conditions" — derangements, surjective functions, arrangements with forbidden positions, and divisibility problems requiring relative primality to several primes.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Application: Counting Derangements`,
//     content: `
// A [derangement](!/combinatorics/permutations#derangement) of $\\{1, 2, \\ldots, n\\}$ is a permutation in which no element appears in its original position. The derangement formula is derived by applying the complementary form of inclusion–exclusion to the set of all permutations.

// ## Setup

// For each $i$, let $A_i$ denote the set of permutations of $\\{1, \\ldots, n\\}$ in which position $i$ is fixed (the element $i$ remains in its original position). The derangements are the permutations belonging to none of $A_1, A_2, \\ldots, A_n$.

// ## Intersection Sizes

// The size of any $k$-fold intersection $A_{i_1} \\cap A_{i_2} \\cap \\cdots \\cap A_{i_k}$ equals $(n-k)!$ — fixing $k$ specific positions leaves the remaining $n-k$ positions to be permuted freely. The size depends only on $k$, not on which $k$ positions are chosen.

// ## Derivation

// The total number of permutations is $n!$. Applying the complementary form of inclusion–exclusion:

// $$!n = n! - \\binom{n}{1}(n-1)! + \\binom{n}{2}(n-2)! - \\cdots + (-1)^n \\binom{n}{n} \\cdot 0!.$$

// Simplifying each term using $\\binom{n}{k}(n-k)! = \\frac{n!}{k!}$ gives the explicit derangement formula:

// $$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$

// The permutations page states this formula and applies it. The derivation above is what justifies it.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Worked Examples`,
//     content: `
// Three standard problem types beyond derangements.

// ## Divisibility

// How many integers from 1 to 100 are divisible by none of 2, 3, or 5?

// Let $A_i$ be the set of integers divisible by the $i$-th prime in the list. From the three-set example above, $|A \\cup B \\cup C| = 74$. The complementary count is

// $$100 - 74 = 26.$$

// These are the integers from 1 to 100 that share no prime factor with 30.

// ## Surjective Functions

// How many functions from a set of size $n$ to a set of size $k$ are surjective (every element of the codomain has at least one preimage)?

// For each element $i$ of the codomain, let $A_i$ be the set of functions that miss $i$ — that is, no element of the domain maps to $i$. A surjective function avoids every $A_i$. The size of any $j$-fold intersection $A_{i_1} \\cap \\cdots \\cap A_{i_j}$ is $(k-j)^n$, since the domain elements may map freely to the remaining $k-j$ codomain elements. The total count of functions is $k^n$. By inclusion–exclusion:

// $$\\text{Surjective count} = \\sum_{j=0}^{k} (-1)^j \\binom{k}{j} (k-j)^n.$$

// ## Arrangements With Forbidden Positions

// In how many ways can $n$ items be arranged so that none of them occupies a specified set of $m$ forbidden positions? Define $A_i$ as the set of arrangements where item $i$ does occupy its forbidden position. The complementary count, computed via inclusion–exclusion on the $A_i$, gives the answer. The derangement formula is the special case where each of the $n$ items has exactly one forbidden position and the forbidden positions are all distinct.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Related Concepts`,
//     content: `
// • [Set Theory](!/set-theory) — unions, intersections, complements, and the cardinality identities are the formal structure inclusion–exclusion operates on.

// • [Probability](!/probability) — the probabilistic version of inclusion–exclusion is the standard tool for computing the probability of a union of non-disjoint events.
// `,
//     before: ``,
//     between: ``,
//     after: ``,
//     link: '',
//   },
// };

// // URL: /combinatorics/inclusion-exclusion

// const introContent = {
//   id: 'intro',
//   title: `The Overlap Problem`,
//   content: `
// The [addition rule](!/combinatorics/counting-principles#addition) computes the size of a union by adding the sizes of its pieces — but only when those pieces are mutually exclusive. The moment two sets share elements, simply adding their sizes counts the shared elements twice.

// The inclusion–exclusion principle is the systematic correction. Add the sizes of individual sets, subtract the sizes of pairwise intersections to remove the double-counting, add back the sizes of triple intersections to compensate for the over-correction, and continue with alternating signs until all intersections are accounted for.

// This page builds the principle from the two-set case to the general formula, then turns to its complementary form — counting elements that belong to none of the listed sets. That complementary form produces the derangement count and other "none" results.
// `,
// };



//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/combinatorics/inclusion-exclusion",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Inclusion-Exclusion</h1>
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
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords = [
    'inclusion exclusion principle',
    'inclusion exclusion formula',
    'principle of inclusion and exclusion',
    'inclusion exclusion combinatorics',
    'union of sets formula',
    'counting union of sets',
    'derangement formula',
    'inclusion exclusion examples',
    'set union cardinality',
    'inclusion exclusion proof',
    'surjective functions count',
    'inclusion exclusion three sets',
    'PIE formula combinatorics',
    'counting with overlaps'
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

 // URL: /combinatorics/inclusion-exclusion

const sectionsContent = {
  obj1: {
    title: `Two Sets`,
    content: `
For two sets $A$ and $B$, the size of the union is

$$|A \\cup B| = |A| + |B| - |A \\cap B|.$$

Every element of $A \\cup B$ should be counted once on the left side. On the right, an element belonging to only $A$ is counted once (by $|A|$), an element belonging to only $B$ is counted once (by $|B|$), and an element in both is counted twice — once by $|A|$ and once by $|B|$. Subtracting $|A \\cap B|$ removes that extra count, restoring the correct total.

## Example

In a group of 30 students, 18 take French and 15 take Spanish, with 7 taking both. The number taking at least one of the two languages is

$$18 + 15 - 7 = 26.$$

The remaining 4 students take neither.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Three Sets`,
    content: `
For three sets, the same logic extends with one more correction:

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|.$$

An element belonging to exactly one of the three sets is counted once on the right. An element in exactly two is counted twice by the singles and subtracted once by its single pairwise intersection — net count $1$. An element in all three is counted three times by the singles, subtracted three times by the pairwise intersections, and added back once by the triple intersection — net count $3 - 3 + 1 = 1$. Every element ends up counted exactly once.

## Example

Among the integers from 1 to 100, the number divisible by 2, 3, or 5 is computed by applying the three-set formula to the divisibility sets. With $|A| = 50$ (multiples of 2), $|B| = 33$ (multiples of 3), $|C| = 20$ (multiples of 5), and the pairwise and triple intersections counting multiples of $6$, $10$, $15$, and $30$:

$$50 + 33 + 20 - 16 - 10 - 6 + 3 = 74.$$
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The General Formula`,
    content: `
For $n$ sets $A_1, A_2, \\ldots, A_n$:

$$\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{i} |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap A_2 \\cap \\cdots \\cap A_n|.$$

In compact form,

$$\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{k=1}^{n} (-1)^{k+1} \\sum_{1 \\le i_1 < i_2 < \\cdots < i_k \\le n} |A_{i_1} \\cap A_{i_2} \\cap \\cdots \\cap A_{i_k}|.$$

## Structure of the Formula

The number of terms at level $k$ — meaning the number of $k$-fold intersections being summed — is [$\\binom{n}{k}$](!/combinatorics/binomial-coefficient), one term for each $k$-subset of the $n$ sets. The total number of terms across all levels is

$$\\sum_{k=1}^{n} \\binom{n}{k} = 2^n - 1,$$

which is the number of non-empty subsets of the $n$ sets. Every non-empty subset contributes exactly one term to the formula.

## Why the Alternating Signs Work

An element belonging to exactly $m$ of the $n$ sets is counted

$$\\binom{m}{1} - \\binom{m}{2} + \\binom{m}{3} - \\cdots + (-1)^{m+1} \\binom{m}{m}$$

times by the right-hand side. By the [binomial theorem](!/combinatorics/binomial-theorem) with $a = 1$ and $b = -1$,

$$\\sum_{k=0}^{m} (-1)^k \\binom{m}{k} = 0,$$

so $\\binom{m}{0} = 1$ minus the alternating sum from $k=1$ to $m$ gives $1$. Every element in the union is counted exactly once, as required.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `The Complementary Form`,
    content: `
Often the question is not how many elements belong to some of the $A_i$, but how many belong to none of them. If $U$ is a universal set containing all candidate elements, the elements outside every $A_i$ form the intersection of the complements:

$$\\left| \\overline{A_1} \\cap \\overline{A_2} \\cap \\cdots \\cap \\overline{A_n} \\right| = |U| - \\left| A_1 \\cup A_2 \\cup \\cdots \\cup A_n \\right|.$$

Expanding the right side using the general formula gives a direct expression for the count of elements satisfying none of the conditions defined by $A_1, \\ldots, A_n$:

$$|U| - \\sum_{i} |A_i| + \\sum_{i<j} |A_i \\cap A_j| - \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| + \\cdots + (-1)^n |A_1 \\cap \\cdots \\cap A_n|.$$

This is the natural form for problems phrased as "how many elements avoid all of the following conditions" — derangements, surjective functions, arrangements with forbidden positions, and divisibility problems requiring relative primality to several primes.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Application: Counting Derangements`,
    content: `
A [derangement](!/combinatorics/permutations#derangement) of $\\{1, 2, \\ldots, n\\}$ is a permutation in which no element appears in its original position. The derangement formula is derived by applying the complementary form of inclusion–exclusion to the set of all permutations.

## Setup

For each $i$, let $A_i$ denote the set of permutations of $\\{1, \\ldots, n\\}$ in which position $i$ is fixed (the element $i$ remains in its original position). The derangements are the permutations belonging to none of $A_1, A_2, \\ldots, A_n$.

## Intersection Sizes

The size of any $k$-fold intersection $A_{i_1} \\cap A_{i_2} \\cap \\cdots \\cap A_{i_k}$ equals $(n-k)!$ — fixing $k$ specific positions leaves the remaining $n-k$ positions to be permuted freely. The size depends only on $k$, not on which $k$ positions are chosen.

## Derivation

The total number of permutations is $n!$. Applying the complementary form of inclusion–exclusion:

$$!n = n! - \\binom{n}{1}(n-1)! + \\binom{n}{2}(n-2)! - \\cdots + (-1)^n \\binom{n}{n} \\cdot 0!.$$

Simplifying each term using $\\binom{n}{k}(n-k)! = \\frac{n!}{k!}$ gives the explicit derangement formula:

$$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$

The permutations page states this formula and applies it. The derivation above is what justifies it.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Worked Examples`,
    content: `
Three standard problem types beyond derangements.

## Divisibility

How many integers from 1 to 100 are divisible by none of 2, 3, or 5?

Let $A_i$ be the set of integers divisible by the $i$-th prime in the list. From the three-set example above, $|A \\cup B \\cup C| = 74$. The complementary count is

$$100 - 74 = 26.$$

These are the integers from 1 to 100 that share no prime factor with 30.

## Surjective Functions

How many functions from a set of size $n$ to a set of size $k$ are surjective (every element of the codomain has at least one preimage)?

For each element $i$ of the codomain, let $A_i$ be the set of functions that miss $i$ — that is, no element of the domain maps to $i$. A surjective function avoids every $A_i$. The size of any $j$-fold intersection $A_{i_1} \\cap \\cdots \\cap A_{i_j}$ is $(k-j)^n$, since the domain elements may map freely to the remaining $k-j$ codomain elements. The total count of functions is $k^n$. By inclusion–exclusion:

$$\\text{Surjective count} = \\sum_{j=0}^{k} (-1)^j \\binom{k}{j} (k-j)^n.$$

## Arrangements With Forbidden Positions

In how many ways can $n$ items be arranged so that none of them occupies a specified set of $m$ forbidden positions? Define $A_i$ as the set of arrangements where item $i$ does occupy its forbidden position. The complementary count, computed via inclusion–exclusion on the $A_i$, gives the answer. The derangement formula is the special case where each of the $n$ items has exactly one forbidden position and the forbidden positions are all distinct.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Related Concepts`,
    content: `
• [Set Theory](!/set-theory) — unions, intersections, complements, and the cardinality identities are the formal structure inclusion–exclusion operates on.

• [Probability](!/probability) — the probabilistic version of inclusion–exclusion is the standard tool for computing the probability of a union of non-disjoint events.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
};

// URL: /combinatorics/inclusion-exclusion

const introContent = {
  id: 'intro',
  title: `The Overlap Problem`,
  content: `
The [addition rule](!/combinatorics/counting-principles#addition) computes the size of a union by adding the sizes of its pieces — but only when those pieces are mutually exclusive. The moment two sets share elements, simply adding their sizes counts the shared elements twice.

The inclusion–exclusion principle is the systematic correction. Add the sizes of individual sets, subtract the sizes of pairwise intersections to remove the double-counting, add back the sizes of triple intersections to compensate for the over-correction, and continue with alternating signs until all intersections are accounted for.

This page builds the principle from the two-set case to the general formula, then turns to its complementary form — counting elements that belong to none of the listed sets. That complementary form produces the derangement count and other "none" results.
`,
};

const faqQuestions = {
  obj1: {
    question: "What is the inclusion-exclusion principle?",
    answer: "The inclusion-exclusion principle is a counting technique for finding the size of a union of overlapping sets. It adds the sizes of individual sets, subtracts pairwise intersections to correct double-counting, adds back triple intersections, and continues with alternating signs until all intersections are accounted for."
  },
  obj2: {
    question: "What is the inclusion-exclusion formula for two sets?",
    answer: "For two sets A and B, the formula is |A ∪ B| = |A| + |B| - |A ∩ B|. Elements in both sets are counted twice when adding |A| and |B|, so subtracting |A ∩ B| removes the extra count and gives the correct size of the union."
  },
  obj3: {
    question: "How does inclusion-exclusion extend to n sets?",
    answer: "For n sets, the formula sums |A_i| over singles, subtracts |A_i ∩ A_j| over pairs, adds triple intersections, and continues with alternating signs through the n-fold intersection. The total number of terms is 2^n - 1, one for each non-empty subset of the n sets."
  },
  obj4: {
    question: "What is the complementary form of inclusion-exclusion?",
    answer: "The complementary form counts elements belonging to none of the sets A_1, ..., A_n inside a universal set U. It equals |U| minus the inclusion-exclusion expansion of the union. This form solves problems like derangements, surjective function counting, and arrangements with forbidden positions."
  },
  obj5: {
    question: "When is inclusion-exclusion used?",
    answer: "Inclusion-exclusion is used whenever counting requires correcting for overlap. Common applications include counting derangements, surjective functions, integers coprime to a set of primes, arrangements avoiding forbidden positions, and probabilities of unions of non-disjoint events."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Inclusion-Exclusion Principle",
    "description": "Inclusion-exclusion principle for counting unions of overlapping sets. Two-set, three-set, and general n-set formulas with derangement and surjection examples.",
    "url": "https://www.learnmathclass.com/combinatorics/inclusion-exclusion",
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
      "name": "Inclusion-Exclusion Principle"
    },
    "teaches": [
      "Inclusion-exclusion formula for two and three sets",
      "General n-set inclusion-exclusion formula with alternating signs",
      "Why the alternating-sign sum counts each element exactly once",
      "Complementary form for counting elements satisfying no condition",
      "Derangement formula derivation via inclusion-exclusion",
      "Counting surjective functions and arrangements with forbidden positions"
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
        "name": "Combinatorics",
        "item": "https://www.learnmathclass.com/combinatorics"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Inclusion-Exclusion Principle",
        "item": "https://www.learnmathclass.com/combinatorics/inclusion-exclusion"
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
         faqQuestions,
         schemas,
          seoData: {
        title: "Inclusion-Exclusion Formula & Examples | Learn Math Class",
        description: "Inclusion-exclusion principle for counting unions of overlapping sets. Two-set, three-set, and general n-set formulas with derangement and surjection examples.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/inclusion-exclusion",
         name: "Inclusion-Exclusion Principle"
      },
        
       }
    }
   }

export default function InclusionExclusionPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Inclusion-Exclusion</h1>
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
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}