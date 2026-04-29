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
  "set operations",
  "union of sets",
  "intersection of sets",
  "set complement",
  "set difference",
  "symmetric difference",
  "A union B",
  "A intersection B",
  "disjoint sets",
  "set notation",
  "combining sets",
  "set theory operations",
  "union intersection complement",
  "set minus"
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

 

  const sectionsContent = {
    obj0: {
  title: `Key Terms`,
  content: `
- [Union](!/set-theory/definitions#union) — elements in at least one of the sets
- [Intersection](!/set-theory/definitions#intersection) — elements common to both sets
- [Complement](!/set-theory/definitions#complement) — elements in the universal set but not in the given set
- [Set Difference](!/set-theory/definitions#set_difference) — elements in one set but not the other
- [Symmetric Difference](!/set-theory/definitions#symmetric_difference) — elements in exactly one of two sets
- [Universal Set](!/set-theory/definitions#universal_set) — reference set for the complement operation
- [Empty Set](!/set-theory/definitions#empty_set) — identity element for union, annihilator for intersection

`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Definitions](!/set-theory/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Union`,
    content: `
The union of two sets $A$ and $B$ is the set of elements that belong to $A$ or $B$ or both:

$$A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$$

The word "or" here is inclusive — elements belonging to both sets are included. If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then:

$$A \\cup B = \\{1, 2, 3, 4, 5\\}$$

The element $3$ appears in both sets but is listed only once in the union.

Union is commutative and associative:

$$A \\cup B = B \\cup A$$

$$(A \\cup B) \\cup C = A \\cup (B \\cup C)$$

For multiple sets, the union extends naturally:

$$\\bigcup_{i=1}^{n} A_i = A_1 \\cup A_2 \\cup \\cdots \\cup A_n$$

This contains every element that appears in at least one of the sets $A_1, A_2, \\ldots, A_n$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Intersection`,
    content: `
The intersection of two sets $A$ and $B$ is the set of elements that belong to both $A$ and $B$:

$$A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$$

If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then:

$$A \\cap B = \\{3\\}$$

When two sets have no elements in common, their intersection is the empty set, and the sets are called disjoint:

$$A \\cap B = \\emptyset$$

Intersection is commutative and associative:

$$A \\cap B = B \\cap A$$

$$(A \\cap B) \\cap C = A \\cap (B \\cap C)$$

For multiple sets:

$$\\bigcap_{i=1}^{n} A_i = A_1 \\cap A_2 \\cap \\cdots \\cap A_n$$

This contains only elements that appear in every one of the sets $A_1, A_2, \\ldots, A_n$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Complement`,
    content: `
The complement of a set $A$ consists of all elements not in $A$. This operation requires a universal set $U$ that contains all elements under consideration:

$$A^c = \\{x \\in U : x \\notin A\\}$$

Alternative notations include $A'$ and $\\overline{A}$.

If the universal set is $U = \\{1, 2, 3, 4, 5\\}$ and $A = \\{1, 2\\}$, then:

$$A^c = \\{3, 4, 5\\}$$

The complement depends entirely on the choice of universal set. The same set $A$ has different complements relative to different universal sets.

Taking the complement twice returns the original set:

$$(A^c)^c = A$$

Two additional facts hold for any set $A$:

$$A \\cup A^c = U$$

$$A \\cap A^c = \\emptyset$$

Every element either belongs to $A$ or to its complement, but not to both.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Set Difference`,
    content: `
The set difference $A \\setminus B$ (also written $A - B$) contains all elements that belong to $A$ but not to $B$:

$$A \\setminus B = \\{x : x \\in A \\text{ and } x \\notin B\\}$$

If $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5\\}$, then:

$$A \\setminus B = \\{1, 2\\}$$

$$B \\setminus A = \\{5\\}$$

Unlike union and intersection, set difference is not commutative — the order of $A$ and $B$ matters.

Set difference relates to complement: when $B \\subseteq U$, the complement $B^c$ equals $U \\setminus B$. More generally:

$$A \\setminus B = A \\cap B^c$$

This expresses difference as an intersection with a complement.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Symmetric Difference`,
    content: `
The symmetric difference of $A$ and $B$ contains elements that belong to exactly one of the two sets:

$$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$$

An equivalent definition uses union and intersection:

$$A \\triangle B = (A \\cup B) \\setminus (A \\cap B)$$

If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then:

$$A \\triangle B = \\{1, 2, 4, 5\\}$$

The element $3$ belongs to both sets, so it is excluded from the symmetric difference.

Symmetric difference is commutative and associative:

$$A \\triangle B = B \\triangle A$$

$$(A \\triangle B) \\triangle C = A \\triangle (B \\triangle C)$$

The symmetric difference with the empty set leaves a set unchanged: $A \\triangle \\emptyset = A$. The symmetric difference of a set with itself is empty: $A \\triangle A = \\emptyset$.
    `,
    before: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
  id: "intro",
  title: `Combining and Manipulating Sets`,
  content: `
Set operations combine [sets](!/set-theory) to form new sets. These operations — union, intersection, complement, difference, and symmetric difference — provide the tools for manipulating collections and form the basis for the algebraic [rules](!/set-theory/rules) that govern set theory. Visualizing these operations through [Venn diagrams](!/set-theory/venn-diagrams) makes their behavior immediately clear.
  `,
};


const faqQuestions = {
  obj1: {
    question: "What is the union of two sets?",
    answer: "The union A ∪ B contains all elements belonging to A or B or both. It uses inclusive 'or' — elements in both sets appear once. Union is commutative and associative.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the intersection of two sets?",
    answer: "The intersection A ∩ B contains only elements belonging to both A and B. If A ∩ B = ∅, the sets are disjoint. Intersection is commutative and associative.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the complement of a set?",
    answer: "The complement Aᶜ contains all elements in the universal set U that are not in A. Taking the complement twice returns the original set: (Aᶜ)ᶜ = A.",
    sectionId: "3"
  },
  obj4: {
    question: "What is set difference?",
    answer: "The set difference A \\ B contains elements in A but not in B. Unlike union and intersection, set difference is not commutative — A \\ B ≠ B \\ A in general.",
    sectionId: "4"
  },
  obj5: {
    question: "What is symmetric difference?",
    answer: "The symmetric difference A △ B contains elements in exactly one of the two sets — either A or B, but not both. It equals (A \\ B) ∪ (B \\ A).",
    sectionId: "5"
  },
  obj6: {
    question: "What does disjoint mean for sets?",
    answer: "Two sets are disjoint when they have no elements in common — their intersection is the empty set: A ∩ B = ∅.",
    sectionId: "2"
  },
  obj7: {
    question: "How does set difference relate to complement?",
    answer: "Set difference can be expressed using complement: A \\ B = A ∩ Bᶜ. The complement Bᶜ equals U \\ B where U is the universal set.",
    sectionId: "4"
  },
  obj8: {
    question: "Is union commutative?",
    answer: "Yes. A ∪ B = B ∪ A for any sets A and B. Union is also associative: (A ∪ B) ∪ C = A ∪ (B ∪ C).",
    sectionId: "1"
  },
  obj9: {
    question: "What is A ∩ Aᶜ?",
    answer: "A ∩ Aᶜ = ∅. No element can belong to both A and its complement simultaneously. Similarly, A ∪ Aᶜ = U (the universal set).",
    sectionId: "3"
  },
  obj10: {
    question: "What is the symmetric difference of a set with itself?",
    answer: "A △ A = ∅. Since symmetric difference includes elements in exactly one set, there are no elements in A but not A. Also, A △ ∅ = A.",
    sectionId: "5"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Set Operations",
    "description": "Learn set operations: union, intersection, complement, set difference, and symmetric difference. Understand notation, properties, and how to combine sets.",
    "url": "https://www.learnmathclass.com/set-theory/operations",
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
      "name": "Set Operations"
    },
    "teaches": [
      "Union of sets",
      "Intersection of sets",
      "Complement relative to universal set",
      "Set difference",
      "Symmetric difference"
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
        "name": "Operations",
        "item": "https://www.learnmathclass.com/set-theory/operations"
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
    faqQuestions,
    schemas,
    seoData: {
      title: "Set Operations: Union, Intersection, Complement & More | Learn Math Class",
      description: "Learn set operations: union, intersection, complement, set difference, and symmetric difference. Understand notation, properties, and how to combine sets.",
      keywords: keyWords.join(", "),
      url: "/set-theory/operations",
      name: "Set Operations"
    },
  }
}
   }
export default function SetOperationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Operations on Sets</h1>
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
