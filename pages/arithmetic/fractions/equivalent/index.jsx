import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "equivalent fractions",
  "what are equivalent fractions",
  "simplify fractions",
  "simplest form",
  "reduce fractions",
  "lowest terms",
  "common denominator",
  "least common denominator",
  "cross multiplication fractions",
  "how to find equivalent fractions",
  "equivalent fractions examples",
  "simplifying fractions",
  "fraction equivalence",
  "same value fractions",
  "GCF fractions"
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
    title: `What Are Equivalent Fractions`,
    content: `Two fractions are equivalent when they represent the same portion of a whole. The fractions $\\frac{2}{3}$ and $\\frac{4}{6}$ are equivalent because both describe the same quantity, just divided into different numbers of pieces.

Visually, equivalent fractions cover identical areas. A rectangle split into 3 equal parts with 2 shaded looks different from one split into 6 parts with 4 shaded, but the shaded region is the same size in both cases.

Every fraction belongs to an infinite family of equivalent fractions. The fraction $\\frac{1}{2}$ is equivalent to $\\frac{2}{4}$, $\\frac{3}{6}$, $\\frac{4}{8}$, $\\frac{5}{10}$, and infinitely many others. All members of this family occupy the same point on the number line.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Creating Equivalent Fractions`,
    content: `Multiplying both the numerator and denominator by the same nonzero number produces an equivalent fraction. Starting with $\\frac{3}{5}$ and multiplying both parts by 2 gives $\\frac{6}{10}$. Multiplying by 3 gives $\\frac{9}{15}$. All three fractions are equivalent.

This process works because multiplying by $\\frac{n}{n}$ is the same as multiplying by 1, which does not change a value. The equation $\\frac{3}{5} \\times \\frac{2}{2} = \\frac{6}{10}$ shows that the transformation preserves quantity.

Creating equivalent fractions with a specific denominator is essential for [adding and subtracting fractions](!/arithmetic/fractions/adding-subtracting). To rewrite $\\frac{2}{3}$ with denominator 12, determine what multiplies 3 to get 12. Since $3 \\times 4 = 12$, multiply both parts by 4: $\\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Simplifying Fractions`,
    content: `Simplifying a fraction means dividing both numerator and denominator by a common factor. The fraction $\\frac{12}{18}$ simplifies to $\\frac{6}{9}$ by dividing both parts by 2, and further to $\\frac{2}{3}$ by dividing by 3.

The most efficient approach uses the [greatest common factor](!/arithmetic/gcf). For $\\frac{12}{18}$, the GCF of 12 and 18 is 6. Dividing both parts by 6 in one step gives $\\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$.

Simplifying does not change the fraction's value. It produces the same quantity written with smaller numbers, making further calculations easier and results cleaner.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Simplest Form`,
    content: `A fraction is in simplest form when its numerator and denominator share no common factor other than 1. The fraction $\\frac{2}{3}$ is in simplest form because 2 and 3 have no common divisors except 1. The fraction $\\frac{4}{6}$ is not in simplest form because both 4 and 6 are divisible by 2.

To verify simplest form, check whether any integer greater than 1 divides both parts evenly. If none exists, the fraction is fully simplified. Alternatively, compute the GCF; if it equals 1, the fraction is in simplest form.

Simplest form is also called lowest terms or reduced form. Final answers are typically expected in this form unless a specific denominator is required.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Testing for Equivalence`,
    content: `The cross-multiplication test determines whether two fractions are equivalent. For fractions $\\frac{a}{b}$ and $\\frac{c}{d}$, compute the cross products $a \\times d$ and $b \\times c$. If the products are equal, the fractions are equivalent.

Testing $\\frac{3}{4}$ and $\\frac{9}{12}$: compute $3 \\times 12 = 36$ and $4 \\times 9 = 36$. The products match, confirming equivalence.

Testing $\\frac{2}{5}$ and $\\frac{3}{7}$: compute $2 \\times 7 = 14$ and $5 \\times 3 = 15$. The products differ, so the fractions are not equivalent.

Cross-multiplication also extends to [comparing fractions](!/arithmetic/fractions/comparing). When the cross products are unequal, the larger product indicates the larger fraction.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Equivalent Fractions on the Number Line`,
    content: `Equivalent fractions mark the same location on the number line. The point representing $\\frac{1}{2}$ is identical to the point representing $\\frac{2}{4}$, $\\frac{3}{6}$, or $\\frac{50}{100}$. Different labels, same position.

This perspective reinforces that equivalence is about value, not appearance. A fraction's position on the number line depends only on how much of the interval from 0 to 1 it covers, not on how finely that interval is subdivided.

The density of equivalent fractions is unlimited. Between any two distinct points on the number line, infinitely many fractions exist, and each of those fractions has infinitely many equivalent forms.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Common Denominators`,
    content: `Finding a common denominator means rewriting two or more fractions as equivalent fractions that share the same denominator. This process is necessary for [adding and subtracting fractions](!/arithmetic/fractions/adding-subtracting) with different denominators.

Any common multiple of the denominators can serve as a common denominator. For $\\frac{1}{3}$ and $\\frac{1}{4}$, the denominators 3 and 4 share multiples 12, 24, 36, and so on. Using 12: $\\frac{1}{3} = \\frac{4}{12}$ and $\\frac{1}{4} = \\frac{3}{12}$.

The [least common multiple](!/arithmetic/lcm) produces the least common denominator (LCD). Using the LCD keeps numbers as small as possible. For denominators 6 and 8, the LCM is 24, so 24 is the LCD. Larger common denominators like 48 also work but result in bigger numbers that require simplification afterward.`,
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
  title: "Same Value, Different Form",
  content: `Equivalent fractions are different representations of the same value. The fractions $\\frac{1}{2}$, $\\frac{2}{4}$, and $\\frac{3}{6}$ all describe identical quantities despite having different numerators and denominators. Understanding equivalence is fundamental to comparing fractions, finding common denominators, and simplifying results.`
}

const faqQuestions = {
  obj1: {
    question: "What are equivalent fractions?",
    answer: "Equivalent fractions represent the same value using different numerators and denominators. For example, 1/2, 2/4, and 3/6 are all equivalent — they describe the same quantity and occupy the same point on the number line.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you find equivalent fractions?",
    answer: "Multiply both the numerator and denominator by the same nonzero number. For example, 3/5 × 2/2 = 6/10. Since multiplying by n/n equals multiplying by 1, the value stays the same while the form changes.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you simplify a fraction?",
    answer: "Divide both the numerator and denominator by a common factor. For fastest results, divide by the greatest common factor (GCF). Example: 12/18 ÷ 6/6 = 2/3, since the GCF of 12 and 18 is 6.",
    sectionId: "3"
  },
  obj4: {
    question: "What does simplest form mean?",
    answer: "A fraction is in simplest form (or lowest terms) when the numerator and denominator share no common factor other than 1. The fraction 2/3 is in simplest form; 4/6 is not because both are divisible by 2.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you check if two fractions are equivalent?",
    answer: "Use cross-multiplication: for a/b and c/d, compute a × d and b × c. If the products are equal, the fractions are equivalent. Example: 3/4 and 9/12 — since 3 × 12 = 36 and 4 × 9 = 36, they're equivalent.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the least common denominator?",
    answer: "The least common denominator (LCD) is the smallest number that both denominators divide into evenly — it's the least common multiple (LCM) of the denominators. For 1/3 and 1/4, the LCD is 12.",
    sectionId: "7"
  },
  obj7: {
    question: "Why do we need common denominators?",
    answer: "Adding and subtracting fractions requires common denominators so the pieces being combined are the same size. You can't directly add thirds and fourths — first convert both to twelfths.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you rewrite a fraction with a specific denominator?",
    answer: "Determine what number multiplies the original denominator to get the target. Multiply both numerator and denominator by that number. Example: 2/3 with denominator 12 — since 3 × 4 = 12, compute 2 × 4 / 3 × 4 = 8/12.",
    sectionId: "2"
  },
  obj9: {
    question: "What is the GCF method for simplifying fractions?",
    answer: "Find the greatest common factor of the numerator and denominator, then divide both by it. This reduces the fraction to simplest form in one step. For 24/36, the GCF is 12, so 24/36 = 2/3.",
    sectionId: "3"
  },
  obj10: {
    question: "Do equivalent fractions occupy the same point on a number line?",
    answer: "Yes. All equivalent fractions mark exactly the same location. The point for 1/2 is identical to 2/4, 3/6, or 50/100. Different labels, same position — equivalence is about value, not appearance.",
    sectionId: "6"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Equivalent Fractions",
    "description": "Learn equivalent fractions: how to create them, simplify to lowest terms, test for equivalence with cross-multiplication, and find common denominators for operations.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/equivalent",
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
      "name": "Equivalent Fractions"
    },
    "teaches": [
      "Definition of equivalent fractions",
      "Creating equivalent fractions by multiplication",
      "Simplifying fractions using GCF",
      "Identifying simplest form",
      "Cross-multiplication test for equivalence",
      "Equivalent fractions on the number line",
      "Finding common denominators and LCD"
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
        "name": "Equivalent Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/equivalent"
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
//         title: " Equivalent Fractions Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/fractions/equivalent",
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
      title: "Equivalent Fractions: Simplify & Find Common Denominators | Learn Math Class",
      description: "Learn equivalent fractions: how to create them, simplify to lowest terms, test for equivalence with cross-multiplication, and find common denominators for operations.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/equivalent",
      name: "Equivalent Fractions"
    },
  }
}
   }

// export default function EquivalentFractionsPage({seoData,sectionsContent , introContent}) {
export default function EquivalentFractionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Equivalent Fractions</h1>
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
