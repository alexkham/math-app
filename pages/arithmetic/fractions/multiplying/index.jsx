import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
  "multiplying fractions",
  "how to multiply fractions",
  "multiply fractions rule",
  "fraction multiplication",
  "multiply fractions by whole numbers",
  "cross canceling fractions",
  "multiply mixed numbers",
  "fraction times fraction",
  "multiplying fractions examples",
  "of means multiply",
  "simplify before multiplying",
  "fraction multiplication steps",
  "multiply three fractions",
  "multiply numerator denominator",
  "fractions multiplication formula"
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

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj1: {
    title: `Multiplying Fractions — Basic Rule`,
    content: `To multiply two fractions, multiply the numerators to get the new numerator and multiply the denominators to get the new denominator. For fractions $\\frac{a}{b}$ and $\\frac{c}{d}$:

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

For example, $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$.

This rule makes sense geometrically. Taking $\\frac{2}{3}$ of $\\frac{4}{5}$ means subdividing something already divided into fifths, then taking a portion. The product describes the fraction of the original whole that remains.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Multiplying Fractions by Whole Numbers`,
    content: `A whole number can be written as a fraction with denominator 1. The number 5 is $\\frac{5}{1}$. This allows the same multiplication rule to apply.

$$\\frac{3}{4} \\times 5 = \\frac{3}{4} \\times \\frac{5}{1} = \\frac{15}{4} = 3\\frac{3}{4}$$

Alternatively, think of multiplying a fraction by a whole number as repeated addition. The expression $4 \\times \\frac{2}{3}$ means $\\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3} = \\frac{8}{3}$.

Both interpretations yield the same result. The whole number multiplies the numerator while the denominator remains unchanged: $n \\times \\frac{a}{b} = \\frac{n \\times a}{b}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Cross-Canceling Before Multiplying`,
    content: `Simplifying before multiplying keeps numbers smaller and avoids reducing large products afterward. Cross-canceling divides any numerator and any denominator by their common factor before computing the product.

Consider $\\frac{4}{9} \\times \\frac{3}{8}$. The numerator 4 and denominator 8 share a factor of 4. The numerator 3 and denominator 9 share a factor of 3. Canceling both:

$$\\frac{4}{9} \\times \\frac{3}{8} = \\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$$

Without canceling first, the product is $\\frac{12}{72}$, which then requires finding the [GCD](!/arithmetic/divisibility/gcd) to reduce. Cross-canceling reaches the simplified answer directly.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Multiplying Mixed Numbers`,
    content: `Mixed numbers must be converted to improper fractions before multiplying. Attempting to multiply whole parts and fractional parts separately produces incorrect results.

To compute $2\\frac{1}{3} \\times 1\\frac{1}{2}$, first convert both to improper fractions. The value $2\\frac{1}{3}$ becomes $\\frac{7}{3}$ and $1\\frac{1}{2}$ becomes $\\frac{3}{2}$.

$$\\frac{7}{3} \\times \\frac{3}{2} = \\frac{21}{6} = \\frac{7}{2} = 3\\frac{1}{2}$$

Cross-canceling applies here too. The 3 in the numerator and the 3 in the denominator cancel, leaving $\\frac{7}{1} \\times \\frac{1}{2} = \\frac{7}{2}$ immediately. See [mixed numbers](!/arithmetic/fractions/mixed-numbers) for conversion methods.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Multiplying More Than Two Fractions`,
    content: `The multiplication rule extends to any number of fractions. Multiply all numerators together and all denominators together.

$$\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} = \\frac{2 \\times 3 \\times 4}{3 \\times 4 \\times 5} = \\frac{24}{60} = \\frac{2}{5}$$

Cross-canceling across all fractions before multiplying is particularly efficient here. In the example above, the 3 in the first denominator cancels with the 3 in the second numerator; the 4 in the second denominator cancels with the 4 in the third numerator. What remains is $\\frac{2}{5}$ with no multiplication needed.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `The Word "Of" Means Multiply`,
    content: `In mathematical contexts, the word "of" signals multiplication. Finding $\\frac{2}{3}$ of 12 means computing $\\frac{2}{3} \\times 12$.

$$\\frac{2}{3} \\times 12 = \\frac{2 \\times 12}{3} = \\frac{24}{3} = 8$$

This interpretation appears constantly in applications. A recipe asks for $\\frac{3}{4}$ of a cup. A sale offers $\\frac{1}{3}$ off the original price. A problem states that $\\frac{2}{5}$ of the students are absent. Each "of" translates to multiplication.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Special Cases`,
    content: `Multiplying by 1 leaves a fraction unchanged. Since 1 equals $\\frac{n}{n}$ for any nonzero $n$, this is the basis for creating [equivalent fractions](!/arithmetic/fractions/equivalent).

Multiplying by 0 produces 0. Any fraction times zero equals zero because the numerator of the product is zero.

Multiplying by a fraction's reciprocal produces 1. The product $\\frac{3}{4} \\times \\frac{4}{3} = \\frac{12}{12} = 1$. This property is central to [dividing fractions](!/arithmetic/fractions/dividing), where division is recast as multiplication by the reciprocal.`,
    before: ``,
    after: ``,
    link: '',
  },
    obj8:{
      title:``,
      content:``,
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
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Numerator Times Numerator, Denominator Times Denominator",
  content: `Multiplying fractions is more straightforward than [adding or subtracting](!/arithmetic/fractions/adding-subtracting) because no common denominator is required. The rule is direct: multiply the numerators together and multiply the denominators together. This page covers fraction-by-fraction multiplication, multiplying fractions by whole numbers, cross-canceling to simplify, and handling [mixed numbers](!/arithmetic/fractions/mixed-numbers).`
}


const faqQuestions = {
  obj1: {
    question: "How do you multiply fractions?",
    answer: "Multiply the numerators together to get the new numerator, and multiply the denominators together to get the new denominator: (a/b) × (c/d) = (a×c)/(b×d). For example, 2/3 × 4/5 = 8/15.",
    sectionId: "1"
  },
  obj2: {
    question: "Do you need a common denominator to multiply fractions?",
    answer: "No. Unlike addition and subtraction, multiplication does not require a common denominator. Simply multiply straight across: numerators together, denominators together.",
    sectionId: "1"
  },
  obj3: {
    question: "How do you multiply a fraction by a whole number?",
    answer: "Write the whole number as a fraction over 1, then multiply normally. For example, 3/4 × 5 = 3/4 × 5/1 = 15/4. Alternatively, just multiply the numerator by the whole number: 3 × 5 = 15, keeping denominator 4.",
    sectionId: "2"
  },
  obj4: {
    question: "What is cross-canceling?",
    answer: "Cross-canceling simplifies before multiplying by dividing any numerator and any denominator by their common factor. For 4/9 × 3/8, cancel 4 with 8 (both ÷ 4) and 3 with 9 (both ÷ 3) to get 1/3 × 1/2 = 1/6.",
    sectionId: "3"
  },
  obj5: {
    question: "How do you multiply mixed numbers?",
    answer: "Convert mixed numbers to improper fractions first, then multiply. For 2⅓ × 1½: convert to 7/3 × 3/2 = 21/6 = 3½. Do not multiply whole and fractional parts separately — this gives wrong answers.",
    sectionId: "4"
  },
  obj6: {
    question: "How do you multiply three or more fractions?",
    answer: "Multiply all numerators together and all denominators together. Cross-cancel across all fractions first for easier calculation. Example: 2/3 × 3/4 × 4/5 — after canceling, only 2/5 remains.",
    sectionId: "5"
  },
  obj7: {
    question: "What does 'of' mean in math?",
    answer: "In mathematical contexts, 'of' means multiply. Finding 2/3 of 12 means calculating 2/3 × 12 = 8. This applies to phrases like 'half of,' 'a third of,' or fractions of quantities.",
    sectionId: "6"
  },
  obj8: {
    question: "What happens when you multiply a fraction by 1?",
    answer: "The fraction stays the same. Since 1 = n/n for any nonzero n, multiplying by 1 (like 2/2 or 5/5) creates equivalent fractions without changing the value.",
    sectionId: "7"
  },
  obj9: {
    question: "What is the reciprocal and why does it matter for multiplication?",
    answer: "The reciprocal of a/b is b/a. When you multiply a fraction by its reciprocal, the result is 1: (3/4) × (4/3) = 12/12 = 1. This property is the basis for dividing fractions.",
    sectionId: "7"
  },
  obj10: {
    question: "Why does multiplying fractions give a smaller result?",
    answer: "When both fractions are less than 1, you're taking a part of a part, which is smaller than either original. For example, 1/2 × 1/2 = 1/4, which is less than both 1/2 values.",
    sectionId: "1"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Multiplying Fractions",
    "description": "Learn how to multiply fractions step by step: basic rule, whole numbers, cross-canceling, mixed numbers, and multiple fractions. Examples and simplification tips.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/multiplying",
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
      "name": "Fraction Multiplication"
    },
    "teaches": [
      "Basic fraction multiplication rule",
      "Multiplying fractions by whole numbers",
      "Cross-canceling to simplify before multiplying",
      "Multiplying mixed numbers",
      "Multiplying multiple fractions",
      "The word 'of' means multiply",
      "Reciprocals and special cases"
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
        "name": "Multiplying Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/multiplying"
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


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Multiplying Fractions  | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/fractions/multiplying",
//          name: "name"
//       },
        
//        }
//     }

return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Multiplying Fractions: Rules, Examples & Cross-Canceling | Learn Math Class",
      description: "Learn how to multiply fractions step by step: basic rule, whole numbers, cross-canceling, mixed numbers, and multiple fractions. Examples and simplification tips.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/multiplying",
      name: "Multiplying Fractions"
    },
  }
}
   }

// export default function MultiplyingPage({seoData,sectionsContent , introContent}) {
export default function MultiplyingPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Multiplying Fractions</h1>
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
