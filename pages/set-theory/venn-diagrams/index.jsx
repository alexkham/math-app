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
  "venn diagram",
  "venn diagram sets",
  "two set venn diagram",
  "three set venn diagram",
  "venn diagram shading",
  "venn diagram union intersection",
  "how to read venn diagrams",
  "venn diagram regions",
  "set operations venn diagram",
  "venn diagram complement",
  "venn diagram examples",
  "verify set identities venn diagram",
  "de morgans law venn diagram",
  "overlapping sets diagram"
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
    title: `What Are Venn Diagrams`,
    content: `
A Venn diagram represents sets as closed curves — typically circles — drawn inside a rectangle that represents the universal set $U$. The interior of each curve contains the elements of that set.

When curves overlap, the overlapping region represents elements belonging to multiple sets simultaneously. Each distinct region of the diagram corresponds to a unique combination of set memberships.

The purpose of Venn diagrams is to visualize:

- Relationships between sets (subset, disjoint, overlapping)

- Results of [operations](!/set-theory/operations) like union, intersection, and complement

- The logical structure of set expressions

Every point in the diagram belongs to a specific region, and every region represents elements with a particular membership pattern — in some sets and not in others.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Two-Set Venn Diagrams`,
    content: `
A two-set Venn diagram consists of two overlapping circles inside a rectangle. Label the circles $A$ and $B$, with the rectangle representing $U$.

This arrangement creates four distinct regions:

- $A \\cap B$ — the lens-shaped overlap, elements in both sets

- $A \\setminus B$ — the part of $A$ outside $B$, elements in $A$ only

- $B \\setminus A$ — the part of $B$ outside $A$, elements in $B$ only

- $(A \\cup B)^c$ — the area outside both circles, elements in neither set

Visualizing operations:

- [Union](!/set-theory/operations#union) $A \\cup B$: shade both circles entirely

- [Intersection](!/set-theory/operations#intersection) $A \\cap B$: shade only the overlap

- [Complement](!/set-theory/operations#complement) $A^c$: shade everything outside circle $A$

- [Difference](!/set-theory/operations#set-difference) $A \\setminus B$: shade circle $A$ but not the overlap

- [Symmetric difference](!/set-theory/operations#symmetric-difference) $A \\triangle B$: shade both circles except the overlap
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Three-Set Venn Diagrams`,
    content: `
A three-set Venn diagram uses three overlapping circles labeled $A$, $B$, and $C$. The circles must be arranged so that every possible combination of overlaps occurs.

This produces eight distinct regions:

- $A \\cap B \\cap C$ — the central region where all three overlap

- $A \\cap B \\cap C^c$ — in $A$ and $B$ but not $C$

- $A \\cap C \\cap B^c$ — in $A$ and $C$ but not $B$

- $B \\cap C \\cap A^c$ — in $B$ and $C$ but not $A$

- $A \\cap B^c \\cap C^c$ — in $A$ only

- $B \\cap A^c \\cap C^c$ — in $B$ only

- $C \\cap A^c \\cap B^c$ — in $C$ only

- $A^c \\cap B^c \\cap C^c$ — outside all three circles

Each region corresponds to one row of a truth table with three variables. The eight regions represent all $2^3 = 8$ possible membership combinations.

For more than three sets, standard Venn diagrams become difficult to draw because circles cannot produce all required overlaps. Alternative shapes such as ellipses or more complex curves are needed.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Shading Regions`,
    content: `
To shade a region for a given set expression, work from the inside out:

1. Identify the innermost operations

2. Shade the regions corresponding to each subexpression

3. Combine according to the outer operation

For $A \\cup (B \\cap C)$:

- First shade $B \\cap C$ — the region where circles $B$ and $C$ overlap

- Then shade all of $A$

- The union combines both shaded areas

For $(A \\cup B) \\cap C$:

- First shade $A \\cup B$ — both circles $A$ and $B$

- Then identify which parts lie inside $C$

- The intersection keeps only the shaded region that falls within $C$

Reading a shaded diagram requires the reverse process: examine which basic regions are shaded, then express the result using set notation. Complex shadings may require expressing the result as a union of disjoint regions.
    `,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Using Venn Diagrams to Verify Set Identities`,
    content: `
Venn diagrams provide a visual method for verifying [set identities](!/set-theory/rules). To check whether two expressions are equal:

1. Draw a Venn diagram and shade the regions for the left side of the identity

2. Draw another diagram and shade the regions for the right side

3. If the shaded regions match exactly, the identity holds

Verifying [De Morgan's law](!/set-theory/rules#de-morgans-laws) $(A \\cup B)^c = A^c \\cap B^c$:

- Left side: shade $A \\cup B$ (both circles), then take the complement (shade everything outside)

- Right side: $A^c$ is outside circle $A$; $B^c$ is outside circle $B$; their intersection is the region outside both circles

- Both sides produce the same shaded region — the area outside both circles

Verifying the [distributive law](!/set-theory/rules#distributive-laws) $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$:

- Left side: shade $B \\cup C$, then restrict to the part inside $A$

- Right side: shade $A \\cap B$ and $A \\cap C$, then take their union

- Both produce the same shaded regions within circle $A$

This method works for any identity involving a finite number of sets, though it constitutes a verification rather than a formal proof.
    `,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: "intro",
  title: `Visualizing Set Relationships`,
  content: `
Venn diagrams provide a visual representation of [sets](!/set-theory) and their relationships. By depicting sets as overlapping regions, these diagrams make [set operations](!/set-theory/operations) immediately visible and offer an intuitive way to verify [set identities](!/set-theory/rules). They are indispensable tools for understanding how sets combine and interact.
  `,
};

const faqQuestions = {
  obj1: {
    question: "What is a Venn diagram?",
    answer: "A Venn diagram represents sets as overlapping circles inside a rectangle (the universal set). Overlapping regions show elements belonging to multiple sets. Each region corresponds to a unique combination of set memberships.",
    sectionId: "1"
  },
  obj2: {
    question: "How many regions are in a two-set Venn diagram?",
    answer: "Four regions: A ∩ B (elements in both), A \\ B (A only), B \\ A (B only), and (A ∪ B)ᶜ (neither set). Each region represents a distinct membership pattern.",
    sectionId: "2"
  },
  obj3: {
    question: "How many regions are in a three-set Venn diagram?",
    answer: "Eight regions, corresponding to all 2³ = 8 possible membership combinations. These include being in all three sets, exactly two sets, exactly one set, or none.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you shade a Venn diagram for union and intersection?",
    answer: "For union A ∪ B, shade both circles entirely. For intersection A ∩ B, shade only the overlapping region. Work from innermost operations outward for complex expressions.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you use a Venn diagram to verify set identities?",
    answer: "Shade regions for each side of the identity separately. If both diagrams produce identical shaded regions, the identity holds. This works for De Morgan's laws, distributive laws, and other identities.",
    sectionId: "5"
  },
  obj6: {
    question: "What does the rectangle represent in a Venn diagram?",
    answer: "The rectangle represents the universal set U — all possible elements under consideration. Every point inside the rectangle belongs to U, and regions outside the circles represent elements not in those sets.",
    sectionId: "1"
  },
  obj7: {
    question: "How do you show set difference on a Venn diagram?",
    answer: "For A \\ B (A minus B), shade circle A but exclude the overlapping region with B. This shows elements that belong to A but not to B.",
    sectionId: "2"
  },
  obj8: {
    question: "What is symmetric difference on a Venn diagram?",
    answer: "For A △ B, shade both circles except the overlap. This represents elements in exactly one set — either A or B, but not both.",
    sectionId: "2"
  },
  obj9: {
    question: "Why can't you draw a standard Venn diagram for four or more sets?",
    answer: "Circles cannot produce all required overlapping regions for four or more sets. Alternative shapes like ellipses or more complex curves are needed to represent all possible membership combinations.",
    sectionId: "3"
  },
  obj10: {
    question: "How do you shade (A ∪ B) ∩ C on a Venn diagram?",
    answer: "First shade A ∪ B (both circles A and B). Then keep only the part that falls inside circle C. The result shows elements that are in A or B, and also in C.",
    sectionId: "4"
  }
}
const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Venn Diagrams",
    "description": "Learn to use Venn diagrams: visualize sets, shade regions for union, intersection, and complement, and verify set identities like De Morgan's laws.",
    "url": "https://www.learnmathclass.com/set-theory/venn-diagrams",
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
      "name": "Venn Diagrams"
    },
    "teaches": [
      "What Venn diagrams represent",
      "Two-set Venn diagram regions and operations",
      "Three-set Venn diagram structure",
      "Shading regions for set expressions",
      "Verifying set identities visually"
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
        "name": "Venn Diagrams",
        "item": "https://www.learnmathclass.com/set-theory/venn-diagrams"
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
  //       url: "/url",
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
      title: "Venn Diagrams: Visualizing Sets and Operations | Learn Math Class",
      description: "Learn to use Venn diagrams: visualize sets, shade regions for union, intersection, and complement, and verify set identities like De Morgan's laws.",
      keywords: keyWords.join(", "),
      url: "/set-theory/venn-diagrams",
      name: "Venn Diagrams"
    },
  }
}
   }


export default function VennDiagramsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Venn Diagrams</h1>
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
