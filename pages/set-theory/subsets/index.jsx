import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'


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


  const sectionsContent = {
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


  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Title | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/set-theory/subsets",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props: {
    sectionsContent,
    introContent,
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

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

export default function SubsetsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
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
    // {
    //     id:'6',
    //     title:sectionsContent.obj6.title,
    //     link:sectionsContent.obj6.link,
    //     content:[
    //       sectionsContent.obj6.content,
    //     ]
    // },
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
</Head> */}

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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Subsets</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
