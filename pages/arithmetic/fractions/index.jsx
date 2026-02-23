import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "fractions",
  "what is a fraction",
  "numerator and denominator",
  "proper fraction",
  "improper fraction",
  "unit fraction",
  "types of fractions",
  "fraction definition",
  "fraction examples",
  "how fractions work",
  "fraction basics",
  "parts of a fraction",
  "fraction operations",
  "visualizing fractions",
  "fractions explained"
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
    title: `What Is a Fraction`,
    content: `A fraction expresses a quantity as a ratio of two integers. The general form is $\\frac{a}{b}$, where $a$ is the numerator and $b$ is the denominator. The horizontal line separating them is called the fraction bar or vinculum.

Every fraction represents a division operation. The expression $\\frac{a}{b}$ is equivalent to $a \\div b$, meaning the numerator divided by the denominator. For example, $\\frac{3}{4}$ equals $3 \\div 4 = 0.75$.

The denominator cannot equal zero. Division by zero is undefined in mathematics, so expressions like $\\frac{5}{0}$ have no meaning. Any integer $b \\neq 0$ can serve as a denominator.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Numerator and Denominator`,
    content: `The numerator and denominator serve distinct roles in defining a fraction's value. The denominator establishes the size of each part by specifying how many equal pieces the whole is divided into. The numerator counts how many of those parts are being considered.

Consider the fraction $\\frac{3}{5}$. The denominator 5 means the whole has been split into five equal parts. The numerator 3 means three of those parts are taken. Together, they describe a quantity equal to three-fifths of the whole.

A useful memory aid comes from etymology. The word denominator shares its root with "name" — it names the type of parts (fifths, eighths, tenths). The numerator shares its root with "number" — it numbers how many of those named parts are present.

When the numerator equals the denominator, the fraction equals one whole. The fraction $\\frac{4}{4}$ represents four parts out of four, which is the entire quantity. When the numerator is zero, the fraction equals zero regardless of the denominator, since zero parts of anything is nothing: $\\frac{0}{7} = 0$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Types of Fractions`,
    content: `Fractions are classified according to the relationship between numerator and denominator or according to their structure. Understanding these types helps in selecting appropriate methods for computation and simplification.

Proper fractions have a numerator smaller than the denominator, making their value less than one. Improper fractions have a numerator greater than or equal to the denominator, making their value one or greater. Both types are covered in detail below.

A unit fraction has a numerator of exactly one, such as $\\frac{1}{2}$, $\\frac{1}{3}$, or $\\frac{1}{7}$. Unit fractions serve as building blocks for all other fractions and are explored further below.

[Mixed numbers](!/arithmetic/fractions/mixed-numbers) combine a whole number with a proper fraction, such as $2\\frac{3}{4}$. They provide an intuitive way to express quantities greater than one and convert directly to and from improper fractions.

[Equivalent fractions](!/arithmetic/fractions/equivalent) are different representations of the same value. The fractions $\\frac{1}{2}$, $\\frac{2}{4}$, and $\\frac{3}{6}$ all represent the same quantity despite having different numerators and denominators.

[Complex fractions](!/arithmetic/fractions/complex) contain fractions within their numerator, denominator, or both. An expression like $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$ is a complex fraction that simplifies using division rules.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Proper and Improper Fractions`,
    content: `A proper fraction has a numerator strictly less than its denominator. Because the number of parts taken is fewer than the total parts in one whole, the value is always less than one. Examples include $\\frac{2}{5}$, $\\frac{7}{8}$, and $\\frac{11}{12}$. On a number line, proper fractions occupy the interval between zero and one.

An improper fraction has a numerator greater than or equal to its denominator. The value is one or greater because at least as many parts are taken as exist in one whole. Examples include $\\frac{5}{3}$, $\\frac{9}{4}$, and $\\frac{7}{7}$. The fraction $\\frac{7}{7}$ equals exactly one, while $\\frac{9}{4}$ equals $2.25$, placing it beyond one on the number line.

Improper fractions are not incorrect despite their name. They are essential in computation, particularly for multiplication and division, where converting to improper form simplifies the process. However, for expressing final answers or measurements, [mixed numbers](!/arithmetic/fractions/mixed-numbers) often provide a more intuitive format. Converting between improper fractions and mixed numbers is a fundamental skill covered on the mixed numbers page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Unit Fractions`,
    content: `A unit fraction has a numerator of one. The simplest examples are $\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{4}$, and so on. Each unit fraction represents exactly one part when a whole is divided into equal pieces.

Unit fractions serve as the building blocks of all fractions. Any fraction $\\frac{a}{b}$ can be understood as $a$ copies of the unit fraction $\\frac{1}{b}$. The fraction $\\frac{3}{5}$ equals $\\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5}$, or three copies of one-fifth.

An important property of unit fractions is that larger denominators produce smaller values. The fraction $\\frac{1}{8}$ is smaller than $\\frac{1}{4}$ because dividing something into eight parts creates smaller pieces than dividing it into four parts. This inverse relationship between denominator size and fraction value is essential when [comparing fractions](!/arithmetic/fractions/comparing).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Operations with Fractions`,
    content: `The four basic arithmetic operations extend to fractions, each with specific rules that differ from whole number arithmetic.

[Adding and subtracting fractions](!/arithmetic/fractions/adding-subtracting) requires a common denominator. Fractions with the same denominator can be added or subtracted by combining their numerators: $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$. When denominators differ, each fraction must first be converted to an [equivalent fraction](!/arithmetic/fractions/equivalent) with a shared denominator.

[Multiplying fractions](!/arithmetic/fractions/multiplying) follows a direct rule: multiply the numerators together and multiply the denominators together. The product $\\frac{2}{3} \\times \\frac{4}{5}$ equals $\\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$. No common denominator is needed.

[Dividing fractions](!/arithmetic/fractions/dividing) transforms into multiplication by the reciprocal. To compute $\\frac{2}{3} \\div \\frac{4}{5}$, multiply the first fraction by the flipped second fraction: $\\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12}$, which simplifies to $\\frac{5}{6}$.

[Comparing fractions](!/arithmetic/fractions/comparing) determines which of two fractions is larger, smaller, or whether they are equal. Methods include finding common denominators, cross-multiplication, or converting to decimals.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Visualizing Fractions`,
    content: `Visual representations clarify what fractions mean and support reasoning about their relationships. Three common models each emphasize different aspects of fractional quantities.

The circle or pie model divides a circular region into equal wedges. Shading a certain number of wedges represents the numerator while the total number of wedges represents the denominator. This model works well for fractions of a single whole and makes concepts like "half" or "quarter" immediately recognizable.

The bar or rectangle model divides a rectangular strip into equal sections. This representation is particularly useful when comparing fractions or demonstrating [equivalent fractions](!/arithmetic/fractions/equivalent), since bars of the same length can be subdivided differently to show that $\\frac{1}{2}$ and $\\frac{2}{4}$ cover the same amount.

The number line places fractions at precise locations between whole numbers. This model emphasizes that fractions are numbers with specific values, not just parts of shapes. It supports understanding of order, density, and operations. For instance, seeing $\\frac{3}{4}$ positioned between $\\frac{1}{2}$ and $1$ reinforces its value relative to other quantities.

Each model serves different purposes. Circle models suit introductory understanding, bar models support comparison and equivalence, and number lines prepare for algebraic thinking and operations.`,
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
  title: "Parts of a Whole and Beyond",
  content: `A fraction represents a part of a whole or, more generally, any number of equal parts. Written as one integer placed above another with a horizontal bar between them, fractions express quantities that fall between whole numbers or describe division that does not resolve into a whole number. The upper number is the numerator, indicating how many parts are taken, while the lower number is the denominator, indicating how many equal parts make up the whole.`
}

const faqQuestions = {
  obj1: {
    question: "What is a fraction?",
    answer: "A fraction expresses a quantity as a ratio of two integers, written as a/b. The top number (numerator) counts how many parts are taken. The bottom number (denominator) tells how many equal parts the whole is divided into. For example, 3/4 means 3 parts out of 4.",
    sectionId: "1"
  },
  obj2: {
    question: "What are the numerator and denominator?",
    answer: "The numerator is the top number — it counts how many parts are being considered. The denominator is the bottom number — it names the size of each part by specifying how many equal pieces make one whole. In 3/5, the denominator 5 creates fifths, and the numerator 3 counts three of them.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the difference between proper and improper fractions?",
    answer: "A proper fraction has a numerator smaller than its denominator (like 2/5), so its value is less than 1. An improper fraction has a numerator greater than or equal to its denominator (like 5/3), so its value is 1 or greater.",
    sectionId: "4"
  },
  obj4: {
    question: "What is a unit fraction?",
    answer: "A unit fraction has a numerator of 1, such as 1/2, 1/3, or 1/7. Unit fractions are building blocks for all other fractions — any fraction a/b equals a copies of the unit fraction 1/b. For example, 3/5 = 1/5 + 1/5 + 1/5.",
    sectionId: "5"
  },
  obj5: {
    question: "Why can't the denominator be zero?",
    answer: "A fraction a/b represents division: a ÷ b. Division by zero is undefined in mathematics because no number multiplied by zero gives a nonzero result. Expressions like 5/0 have no meaning.",
    sectionId: "1"
  },
  obj6: {
    question: "What are equivalent fractions?",
    answer: "Equivalent fractions are different representations of the same value. For example, 1/2, 2/4, and 3/6 all represent the same quantity. Multiplying or dividing both numerator and denominator by the same nonzero number produces an equivalent fraction.",
    sectionId: "3"
  },
  obj7: {
    question: "How do you add fractions?",
    answer: "To add fractions, they must have a common denominator. If denominators match, add the numerators and keep the denominator: 2/7 + 3/7 = 5/7. If denominators differ, first convert to equivalent fractions with a shared denominator.",
    sectionId: "6"
  },
  obj8: {
    question: "How do you multiply fractions?",
    answer: "Multiply the numerators together and multiply the denominators together: (2/3) × (4/5) = 8/15. No common denominator is needed for multiplication.",
    sectionId: "6"
  },
  obj9: {
    question: "How do you divide fractions?",
    answer: "To divide fractions, multiply by the reciprocal (flip the second fraction): (2/3) ÷ (4/5) = (2/3) × (5/4) = 10/12 = 5/6. This is called 'keep, change, flip.'",
    sectionId: "6"
  },
  obj10: {
    question: "What are the different ways to visualize fractions?",
    answer: "Three common models: Circle/pie charts divide a circle into wedges. Bar/rectangle models divide strips into sections — useful for comparing fractions. Number lines show fractions as points between whole numbers, emphasizing their precise values.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Fractions",
    "description": "Learn fractions from the ground up: numerator and denominator, proper vs improper fractions, unit fractions, operations, and visual models for understanding.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "Elementary, Middle School, High School",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Fractions"
    },
    "teaches": [
      "Definition of fractions as ratios",
      "Numerator and denominator roles",
      "Proper and improper fractions",
      "Unit fractions as building blocks",
      "Adding, subtracting, multiplying, dividing fractions",
      "Equivalent fractions",
      "Visual models: circles, bars, number lines"
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
//         title: "Fractions Page  | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/fractions",
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
      title: "Fractions: Definition, Types & Operations | Learn Math Class",
      description: "Learn fractions from the ground up: numerator and denominator, proper vs improper fractions, unit fractions, operations, and visual models for understanding.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions",
      name: "Fractions"
    },
  }
}
   }

// export default function FractionsPage({seoData,sectionsContent , introContent}) {

export default function FractionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Fractions</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
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
