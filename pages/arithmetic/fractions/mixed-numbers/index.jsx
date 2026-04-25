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
  "mixed numbers",
  "improper fractions",
  "convert mixed number to improper fraction",
  "convert improper fraction to mixed number",
  "what is a mixed number",
  "mixed number definition",
  "mixed number examples",
  "improper fraction to mixed number",
  "mixed number to improper fraction",
  "adding mixed numbers",
  "multiplying mixed numbers",
  "comparing mixed numbers",
  "mixed numbers and improper fractions",
  "how to convert mixed numbers",
  "mixed number operations"
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
    title: `What Is a Mixed Number`,
    content: `A mixed number consists of two parts written together: a whole number and a proper fraction. The whole number counts complete units, while the fraction accounts for the remaining partial unit. In $5\\frac{2}{3}$, the whole part is 5 and the fractional part is $\\frac{2}{3}$.

Mixed numbers arise naturally in measurement and everyday contexts. A length of $3\\frac{1}{2}$ inches, a recipe calling for $2\\frac{1}{4}$ cups, or a time of $1\\frac{1}{2}$ hours all use mixed number notation because it communicates quantity more intuitively than the equivalent improper fractions $\\frac{7}{2}$, $\\frac{9}{4}$, and $\\frac{3}{2}$.

The fractional part of a mixed number must be a proper fraction. If someone writes $3\\frac{5}{4}$, this is not standard form because $\\frac{5}{4}$ exceeds one. The correct mixed number is $4\\frac{1}{4}$, obtained by absorbing the extra whole unit from the improper fractional part.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Improper Fractions`,
    content: `An improper fraction has a numerator greater than or equal to its denominator. The value is at least one because the numerator indicates that at least as many parts are taken as exist in a single whole. Examples include $\\frac{7}{4}$, $\\frac{11}{3}$, and $\\frac{8}{8}$.

The term "improper" does not mean incorrect. Improper fractions are valid mathematical expressions and are often preferable for computation. [Multiplying](!/arithmetic/fractions/multiplying) and [dividing](!/arithmetic/fractions/dividing) fractions is simpler when all values are in improper form, avoiding the need to handle whole and fractional parts separately.

On a number line, improper fractions appear at or beyond the point marked 1. The fraction $\\frac{5}{3}$ lies between 1 and 2, specifically at $1\\frac{2}{3}$. The fraction $\\frac{8}{4}$ lands exactly at 2, since eight fourths equal two wholes.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Converting Improper Fractions to Mixed Numbers`,
    content: `Converting an improper fraction to a mixed number involves dividing the numerator by the denominator. The quotient becomes the whole number, the remainder becomes the new numerator, and the denominator stays unchanged.

To convert $\\frac{17}{5}$, divide 17 by 5. The quotient is 3 with a remainder of 2. The mixed number is $3\\frac{2}{5}$, meaning three whole units and two-fifths of another.

Another example: convert $\\frac{23}{4}$. Dividing 23 by 4 gives a quotient of 5 and a remainder of 3. The result is $5\\frac{3}{4}$.

When the numerator is exactly divisible by the denominator, the result is a whole number with no fractional part. The fraction $\\frac{18}{6}$ converts to simply 3, since $18 \\div 6 = 3$ with no remainder.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Converting Mixed Numbers to Improper Fractions`,
    content: `Converting a mixed number to an improper fraction reverses the division process. Multiply the whole number by the denominator, add the numerator, and place the result over the original denominator.

To convert $4\\frac{2}{7}$, compute $(4 \\times 7) + 2 = 30$. The improper fraction is $\\frac{30}{7}$.

Another example: convert $6\\frac{5}{8}$. Compute $(6 \\times 8) + 5 = 53$. The result is $\\frac{53}{8}$.

This conversion is essential before performing multiplication or division. Operating on mixed numbers directly leads to errors because the whole and fractional parts do not combine in straightforward ways under these operations.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Comparing Mixed Numbers`,
    content: `Comparing mixed numbers begins with the whole parts. A larger whole part means a larger overall value. The mixed number $5\\frac{1}{8}$ exceeds $4\\frac{7}{8}$ because 5 wholes surpass 4 wholes regardless of the fractional parts.

When whole parts are equal, comparison shifts to the fractional parts. Between $3\\frac{2}{5}$ and $3\\frac{4}{5}$, the whole parts match, so the fractions determine order. Since $\\frac{4}{5} > \\frac{2}{5}$, the second mixed number is larger.

Comparing fractional parts sometimes requires finding a common denominator or using other methods from [comparing fractions](!/arithmetic/fractions/comparing). For $7\\frac{3}{4}$ versus $7\\frac{5}{6}$, convert both fractions to twelfths: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{5}{6} = \\frac{10}{12}$. Since $\\frac{10}{12} > \\frac{9}{12}$, the value $7\\frac{5}{6}$ is greater.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Operations with Mixed Numbers`,
    content: `Arithmetic with mixed numbers follows two general strategies. The first converts all mixed numbers to improper fractions, performs the operation, and converts back. The second handles whole and fractional parts separately, which works well for addition and subtraction but poorly for multiplication and division.

[Adding and subtracting mixed numbers](!/arithmetic/fractions/adding-subtracting) can use either strategy. Adding $2\\frac{1}{3} + 4\\frac{1}{2}$ by parts means adding $2 + 4 = 6$ for wholes and $\\frac{1}{3} + \\frac{1}{2} = \\frac{5}{6}$ for fractions, giving $6\\frac{5}{6}$. Subtraction sometimes requires borrowing when the first fractional part is smaller than the second.

[Multiplying mixed numbers](!/arithmetic/fractions/multiplying) requires conversion to improper fractions. To compute $2\\frac{1}{2} \\times 3\\frac{1}{3}$, convert to $\\frac{5}{2} \\times \\frac{10}{3} = \\frac{50}{6} = 8\\frac{2}{6} = 8\\frac{1}{3}$. Attempting to multiply whole parts and fractional parts separately produces incorrect results.

[Dividing mixed numbers](!/arithmetic/fractions/dividing) also demands improper form. Convert both values, apply the reciprocal rule, and simplify. The expression $4\\frac{1}{2} \\div 1\\frac{1}{2}$ becomes $\\frac{9}{2} \\div \\frac{3}{2} = \\frac{9}{2} \\times \\frac{2}{3} = \\frac{18}{6} = 3$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Mixed Numbers on the Number Line`,
    content: `Mixed numbers occupy positions between consecutive whole numbers on the number line. The value $3\\frac{1}{4}$ lies one-quarter of the way from 3 toward 4. The value $3\\frac{3}{4}$ lies three-quarters of the way along the same interval.

Placing a mixed number on the number line reinforces the connection to its improper fraction equivalent. Both $2\\frac{2}{5}$ and $\\frac{12}{5}$ mark exactly the same point, located two-fifths of the distance from 2 to 3. The two notations differ in form but describe identical quantities.

Number line visualization also supports estimation and rounding. A mixed number like $6\\frac{7}{8}$ is very close to 7, while $6\\frac{1}{8}$ is barely past 6. Recognizing these proximities helps in mental math and checking whether computed answers are reasonable.`,
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
  title: "Combining Wholes with Parts",
  content: `A mixed number combines a whole number with a proper fraction, expressing quantities greater than one in an intuitive format. The value $2\\frac{3}{4}$ represents two whole units plus three-fourths of another unit. Mixed numbers and improper fractions are two representations of the same quantities, and converting between them is essential for arithmetic operations.`
}


const faqQuestions = {
  obj1: {
    question: "What is a mixed number?",
    answer: "A mixed number combines a whole number with a proper fraction, like 5²/₃. The whole number counts complete units, while the fraction represents the remaining partial unit. Mixed numbers express quantities greater than one in an intuitive format.",
    sectionId: "1"
  },
  obj2: {
    question: "What is an improper fraction?",
    answer: "An improper fraction has a numerator greater than or equal to its denominator, like 7/4 or 11/3. The value is at least 1. Despite the name, improper fractions are valid and often preferred for multiplication and division calculations.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you convert an improper fraction to a mixed number?",
    answer: "Divide the numerator by the denominator. The quotient becomes the whole number, the remainder becomes the new numerator, and the denominator stays the same. Example: 17/5 = 3²/₅ because 17 ÷ 5 = 3 remainder 2.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you convert a mixed number to an improper fraction?",
    answer: "Multiply the whole number by the denominator, add the numerator, and place the result over the original denominator. Example: 4²/₇ becomes (4 × 7) + 2 = 30, so the improper fraction is 30/7.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you compare mixed numbers?",
    answer: "First compare the whole parts — a larger whole means a larger value. If whole parts are equal, compare the fractional parts. You may need to find a common denominator to compare the fractions accurately.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you add mixed numbers?",
    answer: "Either convert to improper fractions and add, or add whole parts and fractional parts separately. When adding by parts, if the fractional sum exceeds 1, carry the extra whole unit to the whole number sum.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you multiply mixed numbers?",
    answer: "Convert all mixed numbers to improper fractions first, then multiply numerators together and denominators together. Do not try to multiply whole and fractional parts separately — this gives wrong answers.",
    sectionId: "6"
  },
  obj8: {
    question: "How do you divide mixed numbers?",
    answer: "Convert both mixed numbers to improper fractions, then multiply the first fraction by the reciprocal of the second. Example: 4½ ÷ 1½ = 9/2 ÷ 3/2 = 9/2 × 2/3 = 3.",
    sectionId: "6"
  },
  obj9: {
    question: "Why convert mixed numbers to improper fractions for calculations?",
    answer: "Improper fractions allow direct application of fraction rules. Multiplying or dividing mixed numbers directly leads to errors because whole and fractional parts don't combine simply under these operations.",
    sectionId: "6"
  },
  obj10: {
    question: "Where do mixed numbers appear on a number line?",
    answer: "Mixed numbers appear between consecutive whole numbers. The value 3¼ lies one-quarter of the way from 3 to 4. Both 2²/₅ and 12/5 mark the same point — different notations for identical quantities.",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Mixed Numbers",
    "description": "Learn mixed numbers and improper fractions: definitions, conversions, comparisons, and operations. Step-by-step methods with examples for adding, multiplying, and dividing.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/mixed-numbers",
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
      "name": "Mixed Numbers and Improper Fractions"
    },
    "teaches": [
      "Definition of mixed numbers",
      "Definition of improper fractions",
      "Converting improper fractions to mixed numbers",
      "Converting mixed numbers to improper fractions",
      "Comparing mixed numbers",
      "Adding, multiplying, and dividing mixed numbers",
      "Mixed numbers on the number line"
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
        "name": "Mixed Numbers",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/mixed-numbers"
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
//         title: "Mixed Numbers Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/fractions/mixed-numbers",
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
      title: "Mixed Numbers & Improper Fractions: Conversions | Learn Math Class",
      description: "Learn mixed numbers and improper fractions: definitions, conversions, comparisons, and operations. Step-by-step methods with examples for adding, multiplying, and dividing.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/mixed-numbers",
      name: "Mixed Numbers"
    },
  }
}
   }



// export default function MixedNumbersPage({seoData,sectionsContent , introContent}) {


export default function MixedNumbersPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Mixed Numbers</h1>
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
