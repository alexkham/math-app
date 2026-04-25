import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "cardinality of sets",
  "cardinality definition",
  "finite sets",
  "infinite sets",
  "countable sets",
  "uncountable sets",
  "countably infinite",
  "cardinality of real numbers",
  "cardinality of integers",
  "bijection between sets",
  "cantors diagonal argument",
  "comparing infinite sets",
  "power set cardinality",
  "size of infinity"
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
    title: `Definition of Cardinality`,
    content: `
The cardinality of a set $A$, denoted $|A|$, measures the number of elements in $A$.

For finite sets, cardinality is determined by counting. If $A = \\{a, b, c\\}$, then $|A| = 3$. If $B = \\{1, 2, 3, 4, 5\\}$, then $|B| = 5$.

The empty set contains no elements:

$$|\\emptyset| = 0$$

Two sets have the same cardinality when a bijection (one-to-one correspondence) exists between them. For finite sets, this simply means they have the same count. For infinite sets, this definition becomes the primary tool for comparing sizes.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Finite Sets`,
    content: `
A set is finite if its elements can be counted with a natural number. Formally, a set $A$ is finite if there exists some $n \\in \\mathbb{N}$ such that:

$$|A| = n$$

This means a bijection exists between $A$ and the set $\\{1, 2, 3, \\ldots, n\\}$.

Examples of finite sets:

- The set of letters in the English alphabet has cardinality $26$

- The set of prime numbers less than $20$ is $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ with cardinality $8$

- Any [subset](!/set-theory/subsets) of a finite set is finite

The cardinality of a finite set satisfies:

$$|A \\cup B| = |A| + |B| - |A \\cap B|$$

This inclusion-exclusion principle accounts for elements counted twice when sets overlap.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Infinite Sets`,
    content: `
A set is infinite if it is not finite — no natural number can express its size.

The standard number sets are all infinite:

- $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ — the natural numbers

- $\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ — the integers

- $\\mathbb{Q}$ — the rational numbers

- $\\mathbb{R}$ — the real numbers

A defining property of infinite sets: an infinite set can be put into one-to-one correspondence with a proper subset of itself. For example, the function $f(n) = 2n$ maps $\\mathbb{N}$ bijectively onto the even numbers, which form a proper subset of $\\mathbb{N}$.

Not all infinite sets have the same cardinality. The integers and rationals turn out to be the same size as the natural numbers, but the real numbers form a strictly larger infinity.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Countable Sets`,
    content: `
A set is countably infinite if its elements can be put in one-to-one correspondence with the natural numbers $\\mathbb{N}$. Such a set can be listed as a sequence:

$$a_1, a_2, a_3, \\ldots$$

where every element appears exactly once.

The integers $\\mathbb{Z}$ are countable. The listing:

$$0, 1, -1, 2, -2, 3, -3, \\ldots$$

establishes a bijection with $\\mathbb{N}$.

The rationals $\\mathbb{Q}$ are countable despite appearing denser than $\\mathbb{Z}$. By arranging positive rationals in a grid and traversing diagonally, every rational is eventually listed.

A set is called countable if it is either finite or countably infinite. Some authors reserve "countable" for countably infinite sets only — context determines the convention.

The union of countably many countable sets remains countable. This is why $\\mathbb{Q}$ is countable: it is a countable union of countable sets (rationals with each fixed denominator).
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Uncountable Sets`,
    content: `
A set is uncountable if it is infinite but not countable — its elements cannot be listed in a sequence that covers them all.

The real numbers $\\mathbb{R}$ are uncountable. Cantor's diagonal argument proves this: assume a listing of all real numbers between $0$ and $1$ exists. Construct a new number by making its $n$-th decimal digit different from the $n$-th digit of the $n$-th number in the list. This new number differs from every listed number, contradicting the assumption that the list was complete.

Any interval $(a, b)$ with $a < b$ is uncountable. In fact, every such interval has the same cardinality as $\\mathbb{R}$ itself — a bijection exists between them.

The cardinality of $\\mathbb{R}$ is denoted $\\mathfrak{c}$ (for continuum) or $2^{\\aleph_0}$, indicating it equals the cardinality of the [power set](!/set-theory/subsets#power-set) of $\\mathbb{N}$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Comparing Cardinalities`,
    content: `
Cardinalities are compared using functions between sets:

- $|A| = |B|$ when a bijection exists between $A$ and $B$

- $|A| \\leq |B|$ when an injection (one-to-one function) exists from $A$ to $B$

- $|A| < |B|$ when $|A| \\leq |B|$ and $|A| \\neq |B|$

The Cantor-Schröder-Bernstein theorem states: if $|A| \\leq |B|$ and $|B| \\leq |A|$, then $|A| = |B|$.

Cantor's theorem establishes a fundamental inequality for any set $A$:

$$|A| < |\\mathcal{P}(A)|$$

The [power set](!/set-theory/subsets) always has strictly greater cardinality than the original set. For finite sets, this is immediate: $2^n > n$. For infinite sets, the proof uses a diagonal argument similar to the uncountability of $\\mathbb{R}$.

This theorem implies there is no largest cardinality — given any set, its power set is strictly larger, producing an endless hierarchy of infinite sizes.
    `,
    before: ``,
    after: ``,
    link: '',
  },
};

 const introContent = {
  id: "intro",
  title: `Measuring the Size of Sets`,
  content: `
Cardinality measures the size of a [set](!/set-theory) — how many elements it contains. For finite sets, cardinality is simply a count. For infinite sets, the situation becomes more subtle: different infinite sets can have different sizes, and comparing them requires the concept of one-to-one correspondence. This leads to the distinction between countable and uncountable infinities.
  `,
};


const faqQuestions = {
  obj1: {
    question: "What is the cardinality of a set?",
    answer: "Cardinality measures the number of elements in a set, denoted |A|. For finite sets, it's a count. For infinite sets, two sets have equal cardinality when a bijection (one-to-one correspondence) exists between them.",
    sectionId: "1"
  },
  obj2: {
    question: "What is a finite set?",
    answer: "A set is finite if its elements can be counted with a natural number n. A bijection exists between the set and {1, 2, ..., n}. Any subset of a finite set is also finite.",
    sectionId: "2"
  },
  obj3: {
    question: "What is an infinite set?",
    answer: "A set is infinite if no natural number expresses its size. Infinite sets can be mapped bijectively onto proper subsets of themselves — for example, natural numbers onto even numbers via f(n) = 2n.",
    sectionId: "3"
  },
  obj4: {
    question: "What does countably infinite mean?",
    answer: "A set is countably infinite if its elements can be listed as a sequence a₁, a₂, a₃, ... covering every element exactly once. The integers and rationals are countably infinite.",
    sectionId: "4"
  },
  obj5: {
    question: "Are the rational numbers countable?",
    answer: "Yes. By arranging positive rationals in a grid and traversing diagonally, every rational appears in the sequence. The union of countably many countable sets remains countable.",
    sectionId: "4"
  },
  obj6: {
    question: "What is an uncountable set?",
    answer: "A set is uncountable if it is infinite but cannot be listed in a sequence. The real numbers are uncountable — Cantor's diagonal argument proves no list can include every real number.",
    sectionId: "5"
  },
  obj7: {
    question: "What is Cantor's diagonal argument?",
    answer: "Assume all reals between 0 and 1 are listed. Construct a new number by making its n-th digit differ from the n-th digit of the n-th listed number. This number isn't in the list, proving the reals are uncountable.",
    sectionId: "5"
  },
  obj8: {
    question: "How do you compare cardinalities of infinite sets?",
    answer: "|A| ≤ |B| when an injection exists from A to B. |A| = |B| when a bijection exists. The Cantor-Schröder-Bernstein theorem states: if |A| ≤ |B| and |B| ≤ |A|, then |A| = |B|.",
    sectionId: "6"
  },
  obj9: {
    question: "What is Cantor's theorem about power sets?",
    answer: "For any set A, |A| < |P(A)| — the power set always has strictly greater cardinality. This implies there is no largest infinity; each power set produces a larger one.",
    sectionId: "6"
  },
  obj10: {
    question: "What is the cardinality of the real numbers?",
    answer: "The cardinality of ℝ is denoted 𝔠 (continuum) or 2^ℵ₀, equal to the cardinality of the power set of ℕ. Every interval (a, b) has this same cardinality.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Cardinality of Sets",
    "description": "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
    "url": "https://www.learnmathclass.com/set-theory/cardinality",
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
      "name": "Cardinality of Sets"
    },
    "teaches": [
      "Definition of cardinality and bijections",
      "Finite sets and counting",
      "Properties of infinite sets",
      "Countable and countably infinite sets",
      "Uncountable sets and Cantor's diagonal argument",
      "Comparing cardinalities and Cantor's theorem"
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
        "name": "Cardinality",
        "item": "https://www.learnmathclass.com/set-theory/cardinality"
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
  //       url: "/set-theory/cardinality",
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
      title: "Cardinality of Sets: Finite, Countable & Uncountable | Learn Math Class",
      description: "Learn about cardinality: measuring set size, finite vs infinite sets, countable vs uncountable infinities, Cantor's diagonal argument, and comparing cardinalities.",
      keywords: keyWords.join(", "),
      url: "/set-theory/cardinality",
      name: "Cardinality of Sets"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

export default function CardinalityPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cardinality of Sets</h1>
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
