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
  "adding fractions",
  "subtracting fractions",
  "common denominator",
  "least common denominator",
  "how to add fractions",
  "how to subtract fractions",
  "add fractions different denominators",
  "adding mixed numbers",
  "subtracting mixed numbers",
  "fraction addition",
  "fraction subtraction",
  "LCD fractions",
  "adding fractions steps",
  "borrowing mixed numbers",
  "add fractions same denominator"
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
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj1: {
    title: `Same Denominator — The Simple Case`,
    content: `When fractions share a denominator, add or subtract the numerators and keep the denominator unchanged.

$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$

$$\\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c}$$

For example, $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$ and $\\frac{5}{8} - \\frac{2}{8} = \\frac{3}{8}$.

This works because the denominator names the size of each piece. Adding two-sevenths and three-sevenths means combining five pieces that are each one-seventh in size. The result may need simplifying — $\\frac{4}{8} + \\frac{2}{8} = \\frac{6}{8} = \\frac{3}{4}$ after reducing to [simplest form](!/arithmetic/fractions/equivalent).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Why Common Denominators Are Required`,
    content: `Fractions with different denominators represent pieces of different sizes. Adding $\\frac{1}{3}$ and $\\frac{1}{4}$ directly makes no sense because thirds and fourths are not the same unit.

Consider the analogy of adding 2 feet and 5 inches. The numbers cannot be combined until both are expressed in the same unit — either all inches or all feet. Similarly, $\\frac{1}{3}$ and $\\frac{1}{4}$ must be rewritten as [equivalent fractions](!/arithmetic/fractions/equivalent) with matching denominators before the numerators can be added.

Visually, a bar divided into thirds and a bar divided into fourths have different segment sizes. Only by subdividing both bars into twelfths — a common unit — can the shaded regions be meaningfully combined.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Finding a Common Denominator`,
    content: `A common denominator is any number that both original denominators divide into evenly. For $\\frac{1}{3}$ and $\\frac{1}{4}$, common denominators include 12, 24, 36, and infinitely many others.

The least common denominator (LCD) is the smallest such number, keeping arithmetic manageable. The LCD of 3 and 4 is 12. The LCD of 6 and 8 is 24.

Finding the LCD uses the [least common multiple](!/arithmetic/divisibility/lcm). List multiples of each denominator until a match appears, or use prime factorization for larger numbers. For denominators 4 and 6: multiples of 4 are 4, 8, 12, 16... and multiples of 6 are 6, 12, 18... The first common multiple is 12.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Converting to Common Denominator`,
    content: `Once the common denominator is identified, convert each fraction by multiplying its numerator and denominator by the same factor.

To add $\\frac{2}{3} + \\frac{1}{4}$ with LCD 12:

$$\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$$

$$\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$$

$$\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$$

For subtraction, the process is identical. To compute $\\frac{5}{6} - \\frac{1}{4}$ with LCD 12: convert to $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Adding Mixed Numbers`,
    content: `Two methods handle addition of [mixed numbers](!/arithmetic/fractions/mixed-numbers). The first adds whole parts and fractional parts separately. The second converts everything to improper fractions.

Using the first method for $2\\frac{1}{3} + 4\\frac{1}{4}$: add wholes $2 + 4 = 6$, then add fractions $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$. The result is $6\\frac{7}{12}$.

When the fractional sum exceeds 1, regroup. For $3\\frac{3}{4} + 2\\frac{1}{2}$: wholes give $3 + 2 = 5$, fractions give $\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4} = 1\\frac{1}{4}$. Combine: $5 + 1\\frac{1}{4} = 6\\frac{1}{4}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Subtracting Mixed Numbers`,
    content: `Subtraction of mixed numbers also works by handling parts separately, but borrowing may be necessary when the first fractional part is smaller than the second.

For $5\\frac{3}{4} - 2\\frac{1}{4}$: subtract wholes $5 - 2 = 3$, subtract fractions $\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$. The result is $3\\frac{1}{2}$.

For $5\\frac{1}{4} - 2\\frac{3}{4}$: the fraction $\\frac{1}{4}$ is smaller than $\\frac{3}{4}$, so borrow 1 from the 5. Rewrite as $4\\frac{5}{4} - 2\\frac{3}{4}$. Now subtract: $4 - 2 = 2$ and $\\frac{5}{4} - \\frac{3}{4} = \\frac{2}{4} = \\frac{1}{2}$. The result is $2\\frac{1}{2}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Adding and Subtracting with Whole Numbers`,
    content: `A whole number can be treated as a fraction with denominator 1, or the whole part can be handled separately.

For $5 + \\frac{3}{4}$: the result is simply $5\\frac{3}{4}$.

For $5 - \\frac{3}{4}$: rewrite 5 as $4\\frac{4}{4}$, then subtract $4\\frac{4}{4} - \\frac{3}{4} = 4\\frac{1}{4}$.

Alternatively, express 5 as $\\frac{5}{1}$, find a common denominator with $\\frac{3}{4}$, and compute: $\\frac{20}{4} - \\frac{3}{4} = \\frac{17}{4} = 4\\frac{1}{4}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Common Mistakes`,
    content: `Adding denominators is the most frequent error. The sum $\\frac{1}{2} + \\frac{1}{3}$ does not equal $\\frac{2}{5}$. Only numerators are added after finding a common denominator: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.

Forgetting to convert all fractions to the LCD leads to incorrect results. Each fraction must be rewritten before combining.

Failing to simplify the final answer leaves work incomplete. The sum $\\frac{2}{8} + \\frac{2}{8} = \\frac{4}{8}$ should be reduced to $\\frac{1}{2}$.

Improper borrowing with mixed numbers causes errors in subtraction. When borrowing, the borrowed 1 becomes a fraction with the same denominator as the fractional part, not simply 1.`,
    before: ``,
    after: ``,
    link: '',
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
  title: "Finding Common Ground",
  content: `Adding and subtracting fractions requires a common denominator. Unlike [multiplication](!/arithmetic/fractions/multiplying), where numerators and denominators combine directly, addition and subtraction can only proceed when the fractions represent same-sized pieces. This page covers operations with same and different denominators, working with [mixed numbers](!/arithmetic/fractions/mixed-numbers), and avoiding common errors.`
}

const faqQuestions = {
  obj1: {
    question: "How do you add fractions with the same denominator?",
    answer: "Add the numerators and keep the denominator the same: a/c + b/c = (a+b)/c. For example, 2/7 + 3/7 = 5/7. The denominator stays unchanged because you're combining pieces of the same size.",
    sectionId: "1"
  },
  obj2: {
    question: "Why do fractions need a common denominator to add?",
    answer: "Fractions with different denominators represent different-sized pieces. You can't directly add thirds and fourths — it's like adding feet and inches. Convert to the same unit (common denominator) first.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you find the least common denominator?",
    answer: "The LCD is the least common multiple (LCM) of the denominators. For 3 and 4, list multiples: 3, 6, 9, 12... and 4, 8, 12... The first match is 12, so the LCD is 12.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you add fractions with different denominators?",
    answer: "Find a common denominator, convert each fraction, then add numerators. For 2/3 + 1/4: LCD is 12, so 2/3 = 8/12 and 1/4 = 3/12. Add: 8/12 + 3/12 = 11/12.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you add mixed numbers?",
    answer: "Add whole parts separately from fractional parts. For 2⅓ + 4¼: wholes give 6, fractions give 1/3 + 1/4 = 7/12. Result: 6⁷/₁₂. If fractions sum to more than 1, regroup into the whole number.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you subtract mixed numbers with borrowing?",
    answer: "When the first fraction is smaller, borrow 1 from the whole number. For 5¼ - 2¾: rewrite 5¼ as 4⁵/₄, then subtract: 4 - 2 = 2 and 5/4 - 3/4 = 2/4 = ½. Result: 2½.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you subtract a fraction from a whole number?",
    answer: "Rewrite the whole number as a mixed number with the same denominator. For 5 - 3/4: rewrite 5 as 4⁴/₄, then subtract: 4⁴/₄ - ¾ = 4¼. Or use improper fractions: 20/4 - 3/4 = 17/4 = 4¼.",
    sectionId: "7"
  },
  obj8: {
    question: "What is the most common mistake when adding fractions?",
    answer: "Adding denominators instead of finding a common denominator. The sum 1/2 + 1/3 does NOT equal 2/5. You must convert first: 3/6 + 2/6 = 5/6.",
    sectionId: "8"
  },
  obj9: {
    question: "Do you add denominators when adding fractions?",
    answer: "No, never. Only numerators are added after converting to a common denominator. The denominator represents the size of each piece, which doesn't change when combining pieces.",
    sectionId: "8"
  },
  obj10: {
    question: "Should you simplify after adding fractions?",
    answer: "Yes, always reduce to simplest form. If 2/8 + 2/8 = 4/8, simplify to 1/2. Find the GCF of numerator and denominator, then divide both by it.",
    sectionId: "1"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Adding and Subtracting Fractions",
    "description": "Learn to add and subtract fractions: same and different denominators, finding LCD, mixed numbers, borrowing, and avoiding common mistakes. Step-by-step examples.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/adding-subtracting",
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
      "name": "Fraction Addition and Subtraction"
    },
    "teaches": [
      "Adding fractions with same denominator",
      "Why common denominators are required",
      "Finding the least common denominator",
      "Converting fractions to common denominators",
      "Adding and subtracting mixed numbers",
      "Borrowing in mixed number subtraction",
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
        "name": "Adding and Subtracting Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/adding-subtracting"
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
//         title: "Adding and Subtracting Fractions | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/fractions/adding-subtracting",
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
      title: "Adding & Subtracting Fractions: Common Denominators | Learn Math Class",
      description: "Learn to add and subtract fractions: same and different denominators, finding LCD, mixed numbers, borrowing, and avoiding common mistakes. Step-by-step examples.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/adding-subtracting",
      name: "Adding and Subtracting Fractions"
    },
  }
}
   }

// export default function AddingSubtractingPage({seoData,sectionsContent , introContent}) {

export default function AddingSubtractingPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Adding and Subtracting Fractions</h1>
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
