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
  "set relationships",
  "equal sets",
  "equivalent sets",
  "disjoint sets",
  "overlapping sets",
  "partition of a set",
  "mutually exclusive sets",
  "pairwise disjoint",
  "equal vs equivalent sets",
  "sets with same cardinality",
  "set equality proof",
  "partition definition",
  "sets no common elements",
  "how sets relate"
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
    title: `Equal Sets`,
    content: `
Two sets $A$ and $B$ are equal if they contain exactly the same elements:

$$A = B \\iff \\forall x\\,(x \\in A \\iff x \\in B)$$

Order does not matter: $\\{1, 2, 3\\} = \\{3, 1, 2\\}$. Repetition does not matter: $\\{1, 2, 2, 3\\} = \\{1, 2, 3\\}$. Only membership determines equality.

The standard method for proving two sets are equal is to show mutual [subset](!/set-theory/subsets) containment:

$$A = B \\iff (A \\subseteq B) \\land (B \\subseteq A)$$

This reduces the problem to two subset proofs: show every element of $A$ belongs to $B$, then show every element of $B$ belongs to $A$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Equivalent Sets`,
    content: `
Two sets are equivalent if they have the same [cardinality](!/set-theory/cardinality):

$$|A| = |B|$$

This means a bijection exists between $A$ and $B$ — a one-to-one correspondence pairing each element of $A$ with exactly one element of $B$.

Equal sets are always equivalent: if $A = B$, then certainly $|A| = |B|$. However, equivalent sets need not be equal.

The sets $\\{a, b, c\\}$ and $\\{1, 2, 3\\}$ are equivalent (both have cardinality $3$) but not equal (they contain different elements). The sets $\\mathbb{N}$ and $\\mathbb{Z}$ are equivalent (both countably infinite) but not equal ($\\mathbb{Z}$ contains negative integers).
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Disjoint Sets`,
    content: `
Two sets are disjoint if they have no elements in common:

$$A \\cap B = \\emptyset$$

The sets $\\{1, 2, 3\\}$ and $\\{4, 5, 6\\}$ are disjoint. The set of even integers and the set of odd integers are disjoint.

For a collection of more than two sets, the sets are pairwise disjoint if every pair is disjoint:

$$A_i \\cap A_j = \\emptyset \\quad \\text{for all } i \\neq j$$

Pairwise disjoint sets have no overlap whatsoever — no element belongs to more than one set in the collection.

In [probability](!/probability/events), disjoint events are called mutually exclusive: if one occurs, the others cannot.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Overlapping Sets`,
    content: `
Two sets overlap if they share at least one element but neither is a [subset](!/set-theory/subsets) of the other:

$$A \\cap B \\neq \\emptyset \\quad \\text{and} \\quad A \\not\\subseteq B \\quad \\text{and} \\quad B \\not\\subseteq A$$

This means each set contains elements the other lacks, yet they also have common elements.

The sets $\\{1, 2, 3\\}$ and $\\{2, 3, 4\\}$ overlap: they share $2$ and $3$, but $1$ belongs only to the first and $4$ belongs only to the second.

In a [Venn diagram](!/set-theory/venn-diagrams), overlapping sets appear as circles that intersect but neither contains the other. The lens-shaped intersection region is non-empty, and both the $A \\setminus B$ and $B \\setminus A$ regions are also non-empty.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Partitions`,
    content: `
A partition of a set $S$ is a collection of non-empty, pairwise disjoint subsets whose union equals $S$:

$$\\{A_1, A_2, \\ldots, A_n\\} \\text{ partitions } S \\iff \\begin{cases} A_i \\neq \\emptyset & \\text{for all } i \\\\ A_i \\cap A_j = \\emptyset & \\text{for } i \\neq j \\\\ A_1 \\cup A_2 \\cup \\cdots \\cup A_n = S \\end{cases}$$

Every element of $S$ belongs to exactly one subset in the partition.

Examples:

- $\\{\\{1, 3\\}, \\{2, 4\\}, \\{5\\}\\}$ partitions $\\{1, 2, 3, 4, 5\\}$

- The sets of even and odd integers partition $\\mathbb{Z}$

- Residue classes modulo $n$ partition $\\mathbb{Z}$ into $n$ subsets

Partitions arise naturally in classification problems and connect to equivalence relations. The [law of total probability](!/probability/total-probability) relies on partitions: if events $B_1, B_2, \\ldots, B_n$ partition the sample space, probabilities can be computed by summing over the partition.
    `,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
  id: "intro",
  title: `How Sets Compare and Connect`,
  content: `
Beyond [subset](!/set-theory/subsets) containment, sets can relate to one another in several ways. Two sets may be equal, equivalent in size, disjoint, or overlapping. Understanding these relationships clarifies how collections compare and interact, and leads to the concept of a partition — a way of dividing a set into non-overlapping pieces.
  `,
};

const faqQuestions = {
  obj1: {
    question: "When are two sets equal?",
    answer: "Two sets are equal if they contain exactly the same elements. Order and repetition don't matter — only membership. Prove equality by showing A ⊆ B and B ⊆ A.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between equal and equivalent sets?",
    answer: "Equal sets have identical elements. Equivalent sets have the same cardinality (size) but may contain different elements. Equal implies equivalent, but not vice versa.",
    sectionId: "2"
  },
  obj3: {
    question: "What are disjoint sets?",
    answer: "Two sets are disjoint if they share no elements — their intersection is empty: A ∩ B = ∅. In probability, disjoint events are called mutually exclusive.",
    sectionId: "3"
  },
  obj4: {
    question: "What does pairwise disjoint mean?",
    answer: "A collection of sets is pairwise disjoint if every pair has empty intersection: Aᵢ ∩ Aⱼ = ∅ for all i ≠ j. No element belongs to more than one set.",
    sectionId: "3"
  },
  obj5: {
    question: "What are overlapping sets?",
    answer: "Sets overlap when they share at least one element but neither is a subset of the other. Each contains elements the other lacks, yet their intersection is non-empty.",
    sectionId: "4"
  },
  obj6: {
    question: "What is a partition of a set?",
    answer: "A partition divides a set S into non-empty, pairwise disjoint subsets whose union equals S. Every element of S belongs to exactly one subset in the partition.",
    sectionId: "5"
  },
  obj7: {
    question: "How do you prove two sets are equal?",
    answer: "Show mutual subset containment: prove every element of A belongs to B, then prove every element of B belongs to A. This establishes A = B.",
    sectionId: "1"
  },
  obj8: {
    question: "Can equivalent sets have different elements?",
    answer: "Yes. Equivalent sets only need the same cardinality. For example, {a, b, c} and {1, 2, 3} are equivalent (both size 3) but not equal (different elements).",
    sectionId: "2"
  },
  obj9: {
    question: "How are partitions used in probability?",
    answer: "If events B₁, B₂, ..., Bₙ partition the sample space, the law of total probability lets you compute P(A) by summing P(A|Bᵢ)P(Bᵢ) over the partition.",
    sectionId: "5"
  },
  obj10: {
    question: "What is an example of a partition?",
    answer: "The even and odd integers partition ℤ. Residue classes modulo n partition ℤ into n subsets. Each integer belongs to exactly one class.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Set Relationships",
    "description": "Learn how sets relate: equal sets, equivalent sets, disjoint and overlapping sets, and partitions. Understand set equality proofs and pairwise disjoint collections.",
    "url": "https://www.learnmathclass.com/set-theory/relationships",
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
      "name": "Set Relationships"
    },
    "teaches": [
      "Equal sets and equality proofs",
      "Equivalent sets and cardinality",
      "Disjoint and pairwise disjoint sets",
      "Overlapping sets",
      "Partitions of a set"
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
        "name": "Relationships",
        "item": "https://www.learnmathclass.com/set-theory/relationships"
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
  //       url: "/set-theory/relationships",
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
      title: "Set Relationships: Equal, Equivalent, Disjoint & Partitions | Learn Math Class",
      description: "Learn how sets relate: equal sets, equivalent sets, disjoint and overlapping sets, and partitions. Understand set equality proofs and pairwise disjoint collections.",
      keywords: keyWords.join(", "),
      url: "/set-theory/relationships",
      name: "Set Relationships"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

 

export default function SetRelationshipsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Page Title</h1>
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
