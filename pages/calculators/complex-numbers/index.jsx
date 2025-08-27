import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import ComplexNumbersCalculator from '@/app/components/calculators/ComplexNumbers'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../math-app/pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

    const keyWords=[
        'complex numbers','imaginary numbers','complex arithmetic','complex numbers calculator',
        'imaginary number calculator','complex fraction calculator','complex fractions',
        'simplifying complex fractions','complex arithmetic calculator','complex conjugate',
        'complex fraction solver','complex number in mathematics',
    ]

    const sectionsContent={

    obj1:{
      title:``,
      content:``,
      before:``,
      after:``,
  
  
    },
    obj2:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
  
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}

const explanations = {
  generalGuide: `
**Complex Number:** 
z = a + bi where a is real part, b is imaginary part

**Examples:**
• 3 + 4i
• -2 + 5i  
• 7 - 3i
• 0 + 2i (pure imaginary)
`,
  
  operationGuides: {
    add: `
**Addition Formula:**
(a + bi) + (c + di) = (a + c) + (b + d)i

**How it works:**
• Add real parts together
• Add imaginary parts together
• Combine the results

**Example:**
(3 + 2i) + (1 + 4i) = 4 + 6i
`,
    subtract: `
**Subtraction Formula:**
(a + bi) - (c + di) = (a - c) + (b - d)i

**How it works:**
• Subtract real parts
• Subtract imaginary parts
• Combine the results

**Example:**
(5 + 3i) - (2 + 1i) = 3 + 2i
`,
    multiply: `
**Multiplication Formula:**
(a + bi)(c + di) = (ac - bd) + (ad + bc)i

**How it works:**
• Use FOIL method
• Remember: i² = -1
• Combine like terms

**Example:**
(2 + 3i)(1 + 4i) = 2 + 8i + 3i + 12i²
= 2 + 11i - 12 = -10 + 11i
`,
    divide: `
**Division Method:**
Multiply numerator and denominator by conjugate of denominator

**Formula:**
(a + bi)/(c + di) = (a + bi)(c - di)/((c + di)(c - di))

**How it works:**
• Find conjugate of denominator
• Multiply both parts by conjugate
• Simplify the result

**Result:** Real number denominator
`,
    conjugate: `
**Conjugate Definition:**
The conjugate of z = a + bi is z* = a - bi

**Properties:**
• Changes sign of imaginary part
• Real part stays the same
• z × z* = |z|²

**Uses:**
• Division of complex numbers
• Finding modulus
• Solving equations
`,
    modulus: `
**Modulus Formula:**
|z| = |a + bi| = √(a² + b²)

**Meaning:**
• Distance from origin in complex plane
• Always a positive real number
• Pythagorean theorem applied

**Properties:**
• |z₁z₂| = |z₁||z₂|
• |z₁/z₂| = |z₁|/|z₂|
• |z*| = |z|
`,
    power: `
**Power Operations:**
z^n for positive integer n

**Method:**
• Repeated multiplication
• Use De Moivre's theorem for efficiency
• Convert to polar form for higher powers

**Note:**
This operation requires additional implementation for the power value input.
`
  }
}





   return {
      props:{
         sectionsContent,
         introContent,
         explanations,
         seoData: {
      title: "Complex Numbers Calculator - Add, Subtract, Multiply & Divide | Learn Math Class",
      description: "Free complex numbers calculator for arithmetic operations. Add, subtract, multiply, divide complex numbers with step-by-step solutions and explanations.",
      keywords: keyWords.join(", "),
      url: "/calculators/complex-numbers",
      name: "Complex Numbers Calculator"
    },
    keyWords,
        
       }
    }
   }

export default function PageTemplate({ seoData, sectionsContent, introContent, explanations, keyWords }) {

    
  const genericSections=[
    {
        id:'1',
        title:'section1',
        link:'',
        content:''
    },
    {
        id:'2',
        title:'section2',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    }
]

  return (
   <>
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
</Head>
   <GenericNavbar/>
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
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Complex Numbers Calculator</h1>
   <br/>
   <ComplexNumbersCalculator
  explanations={explanations}
   />
   <br/>
   {/* <SectionTableOfContents sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        /> */}
   <br/>
   <br/>
   {/* <Sections sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
