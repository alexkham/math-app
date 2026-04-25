import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "dividing fractions",
  "how to divide fractions",
  "divide fractions rule",
  "keep change flip",
  "reciprocal of a fraction",
  "multiply by reciprocal",
  "fraction division",
  "dividing mixed numbers",
  "divide fraction by whole number",
  "divide whole number by fraction",
  "fraction division examples",
  "flip and multiply",
  "dividing fractions steps",
  "invert and multiply",
  "fraction division word problems"
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
    title: `Reciprocals`,
    content: `The reciprocal of a fraction is obtained by swapping its numerator and denominator. The reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$. The reciprocal of $\\frac{7}{2}$ is $\\frac{2}{7}$.

A number multiplied by its reciprocal always equals 1. The product $\\frac{3}{4} \\times \\frac{4}{3} = \\frac{12}{12} = 1$ demonstrates this property.

Whole numbers have reciprocals too. Since 5 equals $\\frac{5}{1}$, its reciprocal is $\\frac{1}{5}$. The product $5 \\times \\frac{1}{5} = 1$ confirms the relationship.

Zero has no reciprocal. Flipping $\\frac{0}{1}$ produces $\\frac{1}{0}$, which is undefined. This reflects the impossibility of dividing by zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Dividing Fractions — Basic Rule`,
    content: `To divide one fraction by another, multiply the first fraction by the reciprocal of the second. For fractions $\\frac{a}{b}$ and $\\frac{c}{d}$:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c}$$

For example, $\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$.

The mnemonic "keep, change, flip" summarizes the steps: keep the first fraction as is, change division to multiplication, flip the second fraction to its reciprocal.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Why Multiply by the Reciprocal`,
    content: `Division asks how many times one quantity fits into another. The expression $\\frac{1}{2} \\div \\frac{1}{4}$ asks how many quarters fit into one half. Since two quarters make a half, the answer is 2.

Multiplying by the reciprocal produces this result: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$.

The method works because multiplying by a reciprocal undoes multiplication. If $\\frac{a}{b} \\times \\frac{c}{d} = x$, then $x \\div \\frac{c}{d} = x \\times \\frac{d}{c}$ returns to $\\frac{a}{b}$. Division and multiplication by reciprocal are inverse operations.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Dividing Fractions by Whole Numbers`,
    content: `A whole number can be written as a fraction with denominator 1. To divide a fraction by a whole number, multiply by the reciprocal of that whole number.

$$\\frac{3}{4} \\div 2 = \\frac{3}{4} \\div \\frac{2}{1} = \\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$$

The result is smaller than the original fraction, which makes sense: dividing something into more parts yields smaller pieces.

Another example: $\\frac{5}{6} \\div 3 = \\frac{5}{6} \\times \\frac{1}{3} = \\frac{5}{18}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Dividing Whole Numbers by Fractions`,
    content: `Dividing a whole number by a fraction produces a result larger than the original whole number when the fraction is less than 1. This reflects the question: how many small pieces fit into the whole?

$$6 \\div \\frac{1}{2} = 6 \\times \\frac{2}{1} = 12$$

Six wholes contain twelve halves. The reciprocal method captures this directly.

Another example: $4 \\div \\frac{2}{3} = 4 \\times \\frac{3}{2} = \\frac{12}{2} = 6$. Four wholes contain six two-thirds.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Dividing Mixed Numbers`,
    content: `Mixed numbers must be converted to improper fractions before dividing. The conversion methods are detailed on the [mixed numbers](!/arithmetic/fractions/mixed-numbers) page.

To compute $3\\frac{1}{2} \\div 1\\frac{3}{4}$, first convert both values. The mixed number $3\\frac{1}{2}$ becomes $\\frac{7}{2}$ and $1\\frac{3}{4}$ becomes $\\frac{7}{4}$.

$$\\frac{7}{2} \\div \\frac{7}{4} = \\frac{7}{2} \\times \\frac{4}{7} = \\frac{28}{14} = 2$$

Cross-canceling before multiplying simplifies the work. The 7s cancel, leaving $\\frac{1}{2} \\times \\frac{4}{1} = 2$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Simplifying and Cross-Canceling`,
    content: `After flipping the second fraction, cross-cancel common factors before multiplying. This is identical to the technique used when [multiplying fractions](!/arithmetic/fractions/multiplying).

For $\\frac{8}{9} \\div \\frac{4}{3}$, rewrite as $\\frac{8}{9} \\times \\frac{3}{4}$. The 8 and 4 share a factor of 4, and the 9 and 3 share a factor of 3:

$$\\frac{8}{9} \\times \\frac{3}{4} = \\frac{2}{3} \\times \\frac{1}{1} = \\frac{2}{3}$$

Without cross-canceling, the product $\\frac{24}{36}$ requires reduction using the [GCD](!/arithmetic/divisibility/gcd). Canceling first avoids larger numbers entirely.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Word Problems and Applications`,
    content: `Division by a fraction answers "how many groups of this size fit into that amount?" The expression $\\frac{3}{4} \\div \\frac{1}{4}$ asks how many quarters are in three-quarters. The answer is 3.

Practical applications include portioning and measurement. If a recipe uses $\\frac{2}{3}$ cup of flour per batch, and you have 4 cups, how many batches can you make? Compute $4 \\div \\frac{2}{3} = 4 \\times \\frac{3}{2} = 6$ batches.

Rate problems also use fraction division. If a pipe fills $\\frac{1}{4}$ of a tank in $\\frac{1}{2}$ hour, the rate is $\\frac{1}{4} \\div \\frac{1}{2} = \\frac{1}{4} \\times 2 = \\frac{1}{2}$ tank per hour.`,
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
  title: "Multiply by the Reciprocal",
  content: `Dividing fractions transforms into [multiplication](!/arithmetic/fractions/multiplying) through the use of reciprocals. The rule "keep, change, flip" captures the process: keep the first fraction, change division to multiplication, and flip the second fraction. This method applies to all cases involving fractions, whole numbers, and [mixed numbers](!/arithmetic/fractions/mixed-numbers).`
}


const faqQuestions = {
  obj1: {
    question: "What is a reciprocal?",
    answer: "The reciprocal of a fraction is formed by swapping numerator and denominator. The reciprocal of 3/4 is 4/3. A number times its reciprocal always equals 1: (3/4) × (4/3) = 1. Zero has no reciprocal because 1/0 is undefined.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you divide fractions?",
    answer: "Multiply the first fraction by the reciprocal of the second: (a/b) ÷ (c/d) = (a/b) × (d/c). For example, 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. Remember: keep, change, flip.",
    sectionId: "2"
  },
  obj3: {
    question: "What does 'keep, change, flip' mean?",
    answer: "It's a mnemonic for dividing fractions: KEEP the first fraction unchanged, CHANGE division to multiplication, FLIP the second fraction to its reciprocal. Then multiply as usual.",
    sectionId: "2"
  },
  obj4: {
    question: "Why do you multiply by the reciprocal when dividing fractions?",
    answer: "Division asks how many times one quantity fits into another. Multiplying by the reciprocal answers this question. It works because multiplying by a reciprocal undoes multiplication — they're inverse operations.",
    sectionId: "3"
  },
  obj5: {
    question: "How do you divide a fraction by a whole number?",
    answer: "Write the whole number as a fraction over 1, then multiply by its reciprocal. For 3/4 ÷ 2: rewrite as 3/4 ÷ 2/1 = 3/4 × 1/2 = 3/8. The result is smaller than the original fraction.",
    sectionId: "4"
  },
  obj6: {
    question: "How do you divide a whole number by a fraction?",
    answer: "Multiply the whole number by the reciprocal of the fraction. For 6 ÷ 1/2 = 6 × 2 = 12. The result is larger because you're asking how many small pieces fit into the whole.",
    sectionId: "5"
  },
  obj7: {
    question: "How do you divide mixed numbers?",
    answer: "Convert both mixed numbers to improper fractions first, then divide normally. For 3½ ÷ 1¾: convert to 7/2 ÷ 7/4 = 7/2 × 4/7 = 28/14 = 2.",
    sectionId: "6"
  },
  obj8: {
    question: "Can you cross-cancel when dividing fractions?",
    answer: "Yes, but only after flipping the second fraction. Once you have multiplication, cross-cancel common factors between any numerator and any denominator before multiplying.",
    sectionId: "7"
  },
  obj9: {
    question: "What is 1/2 ÷ 1/4?",
    answer: "This asks how many quarters fit in one half. Calculate: 1/2 × 4/1 = 4/2 = 2. Two quarters make a half, so the answer is 2.",
    sectionId: "3"
  },
  obj10: {
    question: "When do you use fraction division in real life?",
    answer: "Fraction division solves 'how many groups fit' problems. If a recipe uses 2/3 cup per batch and you have 4 cups, how many batches? Calculate 4 ÷ 2/3 = 4 × 3/2 = 6 batches.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Dividing Fractions",
    "description": "Learn to divide fractions using keep-change-flip: reciprocals, dividing by whole numbers, mixed numbers, cross-canceling, and real-world applications with examples.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/dividing",
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
      "name": "Fraction Division"
    },
    "teaches": [
      "Definition and properties of reciprocals",
      "Dividing fractions by multiplying by reciprocal",
      "Keep-change-flip method",
      "Dividing fractions by whole numbers",
      "Dividing whole numbers by fractions",
      "Dividing mixed numbers",
      "Cross-canceling in division",
      "Word problem applications"
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
        "name": "Dividing Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/dividing"
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
//         title: "Dividing Fractions | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/fractions/dividing",
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
      title: "Dividing Fractions: Keep Change Flip Method | Learn Math Class",
      description: "Learn to divide fractions using keep-change-flip: reciprocals, dividing by whole numbers, mixed numbers, cross-canceling, and real-world applications with examples.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/dividing",
      name: "Dividing Fractions"
    },
  }
}
   }

// export default function DividingPage({seoData,sectionsContent , introContent}) {

export default function DividingPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Dividing Fractions</h1>
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
