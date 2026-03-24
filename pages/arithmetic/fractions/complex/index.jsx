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
  "complex fractions",
  "simplify complex fractions",
  "fraction over fraction",
  "how to simplify complex fractions",
  "complex fraction examples",
  "nested fractions",
  "stacked fractions",
  "LCD method complex fractions",
  "complex fraction division",
  "fraction in numerator",
  "fraction in denominator",
  "simplifying compound fractions",
  "complex fractions with mixed numbers",
  "complex fraction calculator",
  "double fractions"
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
    title: `What Is a Complex Fraction`,
    content: `A complex fraction has a fraction in its numerator, its denominator, or both. The main fraction bar separates the overall numerator from the overall denominator, while smaller fraction bars appear within.

Examples include:

$$\\frac{\\frac{1}{2}}{3} \\quad \\frac{4}{\\frac{2}{5}} \\quad \\frac{\\frac{3}{4}}{\\frac{5}{6}}$$

The first has a fraction only in the numerator. The second has a fraction only in the denominator. The third has fractions in both positions.

Complex fractions arise naturally in algebra, physics, and rate problems. Any division of fractions can be written as a complex fraction: $\\frac{2}{3} \\div \\frac{4}{5}$ equals $\\frac{\\frac{2}{3}}{\\frac{4}{5}}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Simplifying — Method 1: Division`,
    content: `The main fraction bar represents division. A complex fraction $\\frac{\\frac{a}{b}}{\\frac{c}{d}}$ means $\\frac{a}{b} \\div \\frac{c}{d}$.

Apply the rule for [dividing fractions](!/arithmetic/fractions/dividing): multiply by the reciprocal.

$$\\frac{\\frac{3}{4}}{\\frac{5}{6}} = \\frac{3}{4} \\div \\frac{5}{6} = \\frac{3}{4} \\times \\frac{6}{5} = \\frac{18}{20} = \\frac{9}{10}$$

When only the numerator or only the denominator contains a fraction, the same approach works. For $\\frac{\\frac{2}{3}}{4}$, rewrite 4 as $\\frac{4}{1}$ and proceed: $\\frac{2}{3} \\div \\frac{4}{1} = \\frac{2}{3} \\times \\frac{1}{4} = \\frac{2}{12} = \\frac{1}{6}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Simplifying — Method 2: LCD`,
    content: `Multiplying the entire complex fraction by a form of 1 clears internal denominators. Find the LCD of all denominators appearing anywhere in the complex fraction, then multiply both the overall numerator and overall denominator by this LCD.

For $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$, the internal denominators are 2 and 4. The LCD is 4.

$$\\frac{\\frac{1}{2}}{\\frac{3}{4}} \\times \\frac{4}{4} = \\frac{\\frac{1}{2} \\times 4}{\\frac{3}{4} \\times 4} = \\frac{2}{3}$$

This method is especially efficient when the numerator or denominator contains sums or differences of fractions, avoiding multiple division steps.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Complex Fractions with Sums or Differences`,
    content: `When the numerator or denominator of a complex fraction contains addition or subtraction, simplify that part first using [adding and subtracting fractions](!/arithmetic/fractions/adding-subtracting) rules, then proceed with either method.

Simplify $\\frac{\\frac{1}{2} + \\frac{1}{3}}{\\frac{1}{4}}$:

First, combine the numerator: $\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.

The complex fraction becomes $\\frac{\\frac{5}{6}}{\\frac{1}{4}} = \\frac{5}{6} \\times \\frac{4}{1} = \\frac{20}{6} = \\frac{10}{3}$.

Alternatively, multiply by the LCD of 2, 3, and 4, which is 12. Both approaches reach the same answer.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Complex Fractions with Mixed Numbers`,
    content: `When a complex fraction contains [mixed numbers](!/arithmetic/fractions/mixed-numbers), convert them to improper fractions before simplifying.

Simplify $\\frac{2\\frac{1}{2}}{1\\frac{1}{4}}$:

Convert: $2\\frac{1}{2} = \\frac{5}{2}$ and $1\\frac{1}{4} = \\frac{5}{4}$.

$$\\frac{\\frac{5}{2}}{\\frac{5}{4}} = \\frac{5}{2} \\times \\frac{4}{5} = \\frac{20}{10} = 2$$

The 5s cancel during multiplication, leaving $\\frac{4}{2} = 2$ directly.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Nested Complex Fractions`,
    content: `Occasionally, a complex fraction appears within another complex fraction. Simplify from the innermost fraction outward.

Simplify $\\frac{1}{\\frac{1}{\\frac{1}{2}}}$:

Start with the innermost: $\\frac{1}{\\frac{1}{2}} = 1 \\times \\frac{2}{1} = 2$.

Substitute back: $\\frac{1}{2}$.

Most practical problems involve at most one level of nesting. The strategy remains the same regardless of depth: resolve the innermost structure first, then work outward until only a simple fraction remains.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Common Mistakes`,
    content: `Forgetting to flip when dividing is a frequent error. The complex fraction $\\frac{\\frac{2}{3}}{\\frac{4}{5}}$ requires multiplying by $\\frac{5}{4}$, not $\\frac{4}{5}$.

Applying the LCD incorrectly causes problems. The LCD must multiply the entire numerator and the entire denominator, not just parts of them.

Leaving answers unsimplified wastes effort. After clearing the complex structure, check whether the result reduces to [simplest form](!/arithmetic/fractions/equivalent).

Mixing up which fraction to flip leads to inverted answers. In $\\frac{a}{b} \\div \\frac{c}{d}$, only the divisor $\\frac{c}{d}$ gets flipped, never the dividend $\\frac{a}{b}$.`,
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
  title: "Simplifying Stacked Expressions",
  content: `A complex fraction contains fractions within its numerator, denominator, or both. Expressions like $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$ or $\\frac{\\frac{2}{3} + 1}{5}$ are complex fractions. Two primary methods simplify them: treating the main fraction bar as [division](!/arithmetic/fractions/dividing), or multiplying by the [least common denominator](!/arithmetic/lcm) of all internal fractions.`
}


const faqQuestions = {
  obj1: {
    question: "What is a complex fraction?",
    answer: "A complex fraction has a fraction in its numerator, denominator, or both. Examples: (1/2)/3, 4/(2/5), or (3/4)/(5/6). The main fraction bar separates the overall numerator from the overall denominator.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you simplify a complex fraction using division?",
    answer: "Treat the main fraction bar as division. For (3/4)/(5/6), rewrite as 3/4 ÷ 5/6, then multiply by the reciprocal: 3/4 × 6/5 = 18/20 = 9/10.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you simplify a complex fraction using LCD?",
    answer: "Find the LCD of all internal denominators, then multiply both the overall numerator and denominator by this LCD. For (1/2)/(3/4): LCD is 4, so multiply to get (1/2 × 4)/(3/4 × 4) = 2/3.",
    sectionId: "3"
  },
  obj4: {
    question: "Which method is better for complex fractions?",
    answer: "The division method is usually simpler for basic complex fractions. The LCD method is more efficient when the numerator or denominator contains sums or differences of fractions.",
    sectionId: "3"
  },
  obj5: {
    question: "How do you simplify complex fractions with addition or subtraction?",
    answer: "First combine the fractions in the numerator or denominator using common denominators. Then simplify the resulting complex fraction. For (1/2 + 1/3)/(1/4): first get 5/6 in the numerator, then compute (5/6)/(1/4) = 10/3.",
    sectionId: "4"
  },
  obj6: {
    question: "How do you handle mixed numbers in complex fractions?",
    answer: "Convert mixed numbers to improper fractions first. For (2½)/(1¼): convert to (5/2)/(5/4), then simplify: 5/2 × 4/5 = 20/10 = 2.",
    sectionId: "5"
  },
  obj7: {
    question: "What is a nested complex fraction?",
    answer: "A nested complex fraction has a complex fraction within another complex fraction. Simplify from the innermost fraction outward. For 1/(1/(1/2)): first simplify 1/(1/2) = 2, then 1/2.",
    sectionId: "6"
  },
  obj8: {
    question: "What is the most common mistake with complex fractions?",
    answer: "Forgetting to flip when dividing. In (2/3)/(4/5), you must multiply by 5/4 (the reciprocal of 4/5), not by 4/5. Only the divisor gets flipped.",
    sectionId: "7"
  },
  obj9: {
    question: "Can any fraction division be written as a complex fraction?",
    answer: "Yes. The expression 2/3 ÷ 4/5 can be written as (2/3)/(4/5). Complex fractions and fraction division are two notations for the same operation.",
    sectionId: "1"
  },
  obj10: {
    question: "Do you simplify the final answer of a complex fraction?",
    answer: "Yes, always reduce to simplest form. After clearing the complex structure, check if the result can be simplified further by finding the GCF of numerator and denominator.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Complex Fractions",
    "description": "Learn to simplify complex fractions using division and LCD methods. Handle fractions within fractions, mixed numbers, nested fractions, and avoid common errors.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/complex",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "Middle School, High School",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Complex Fractions"
    },
    "teaches": [
      "Definition of complex fractions",
      "Division method for simplifying",
      "LCD method for simplifying",
      "Complex fractions with sums and differences",
      "Complex fractions with mixed numbers",
      "Nested complex fractions",
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
        "name": "Complex Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/complex"
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
//         title: "Complex Fractions | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/fractions/complex",
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
      title: "Complex Fractions: Simplify Stacked Fractions | Learn Math Class",
      description: "Learn to simplify complex fractions using division and LCD methods. Handle fractions within fractions, mixed numbers, nested fractions, and avoid common errors.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/complex",
      name: "Complex Fractions"
    },
  }
}
   }

// export default function ComplexFractionsPage({seoData,sectionsContent , introContent}) {

export default function ComplexFractionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Complex Fractions</h1>
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
