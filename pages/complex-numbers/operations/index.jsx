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

  const keyWords=['','','','','']

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

    obj1: {
  title: `Addition of Complex Numbers`,
  before: ``,
  content: `Adding complex numbers works exactly as intuition suggests: combine like terms. Real parts add to real parts, imaginary parts add to imaginary parts, and the two sums form the new complex number.

The formula states the rule precisely. For $z_1 = a + bi$ and $z_2 = c + di$:

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

The operation treats the real and imaginary components independently. No interaction occurs between them during addition — the real sum $a + c$ ignores the imaginary values, and the imaginary sum $b + d$ ignores the real values.

Example: Add $3 + 2i$ and $1 - 5i$.

$$(3 + 2i) + (1 - 5i) = (3 + 1) + (2 + (-5))i = 4 + (-3)i = 4 - 3i$$

The real parts $3$ and $1$ sum to $4$. The imaginary parts $2$ and $-5$ sum to $-3$. The result is $4 - 3i$.

On the [complex plane](!/complex-numbers/geometric-representation), addition corresponds to vector addition. Place the two complex numbers as arrows from the origin. Position the second arrow so its tail sits at the head of the first. The sum extends from the origin to the final head — the familiar parallelogram or tip-to-tail rule from physics and geometry. This geometric interpretation makes addition visual and connects complex arithmetic to vector mechanics.

Addition is both commutative ($z_1 + z_2 = z_2 + z_1$) and associative ($(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$). Order and grouping do not affect the result.`,
  after: ``,
  link: '',
},
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj2: {
  title: `Subtraction of Complex Numbers`,
  before: ``,
  content: `Subtraction mirrors addition with signs reversed. Subtract real parts separately, subtract imaginary parts separately, and combine the differences into the result.

The formula: for $z_1 = a + bi$ and $z_2 = c + di$:

$$(a + bi) - (c + di) = (a - c) + (b - d)i$$

Each component undergoes its own subtraction independently.

Example: Compute $(7 + 4i) - (2 + 6i)$.

$$(7 + 4i) - (2 + 6i) = (7 - 2) + (4 - 6)i = 5 + (-2)i = 5 - 2i$$

The real parts $7 - 2 = 5$. The imaginary parts $4 - 6 = -2$. The result is $5 - 2i$.

A common error occurs when the second number has a negative imaginary part. Consider $(5 + 3i) - (2 - 4i)$. The subtraction must distribute across both terms:

$$(5 + 3i) - (2 - 4i) = 5 + 3i - 2 + 4i = 3 + 7i$$

Forgetting to negate the $-4i$ term — leaving it as $-4i$ instead of $+4i$ — produces the wrong answer $3 - i$. Always distribute the negative sign before combining terms.

Geometrically, $z_1 - z_2$ represents the vector from $z_2$ to $z_1$. Its [modulus](!/complex-numbers/absolute-value) $|z_1 - z_2|$ gives the distance between the two points in the complex plane. Subtraction answers the question: how far and in what direction must one travel from $z_2$ to reach $z_1$?`,
  after: ``,
  link: '',
},
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj3: {
  title: `Multiplication of Complex Numbers`,
  before: ``,
  content: `Multiplication requires more care than addition. The distributive property expands the product into four terms, and the identity $i^2 = -1$ collapses one of those terms into the real part.

For $z_1 = a + bi$ and $z_2 = c + di$, expand using distribution (the FOIL method):

$$(a + bi)(c + di) = ac + adi + bci + bdi^2$$

The term $bdi^2$ contains $i^2 = -1$, so $bdi^2 = -bd$. Collecting real and imaginary parts:

$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$

The real part of the product is $ac - bd$. The imaginary part is $ad + bc$. Both involve contributions from all four original values.

Step-by-step example: Compute $(2 + 3i)(4 - i)$.

Expand: $2 \\cdot 4 + 2 \\cdot (-i) + 3i \\cdot 4 + 3i \\cdot (-i) = 8 - 2i + 12i - 3i^2$

Substitute $i^2 = -1$: $= 8 - 2i + 12i - 3(-1) = 8 - 2i + 12i + 3$

Combine: $= (8 + 3) + (-2 + 12)i = 11 + 10i$

Multiplying by a pure real number scales both components proportionally. The product $3(2 + 5i) = 6 + 15i$ stretches the number by factor $3$ without rotating it. Multiplying by $i$ rotates $90°$ counterclockwise: $i(2 + 5i) = 2i + 5i^2 = -5 + 2i$. The [trigonometric form](!/complex-numbers/trigonometric-form) reveals multiplication's full geometric meaning — moduli multiply, arguments add.`,
  after: ``,
  link: '',
},
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj4: {
  title: `Division of Complex Numbers`,
  before: ``,
  content: `Division presents a challenge absent in the other operations: a complex denominator violates the standard [algebraic form](!/complex-numbers/algebraic-form) $a + bi$. The solution employs the [conjugate](!/complex-numbers/complex-conjugate) to convert the denominator to a real number.

The technique: multiply both numerator and denominator by the conjugate of the denominator. For $z_1 = a + bi$ and $z_2 = c + di$ with $z_2 \\neq 0$:

$$\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{(c + di)(c - di)} = \\frac{(a + bi)(c - di)}{c^2 + d^2}$$

The denominator becomes $c^2 + d^2$, a real number, because $z \\cdot \\bar{z} = |z|^2$ for any complex $z$. The numerator requires standard complex multiplication. Once the denominator is real, divide each component of the numerator by it.

Step-by-step example: Compute $\\frac{3 + 2i}{1 - 4i}$.

Identify the conjugate of the denominator: $\\overline{1 - 4i} = 1 + 4i$.

Multiply numerator and denominator:

$$\\frac{3 + 2i}{1 - 4i} \\cdot \\frac{1 + 4i}{1 + 4i} = \\frac{(3 + 2i)(1 + 4i)}{(1 - 4i)(1 + 4i)}$$

Compute the denominator: $(1 - 4i)(1 + 4i) = 1 - 16i^2 = 1 + 16 = 17$.

Compute the numerator: $(3 + 2i)(1 + 4i) = 3 + 12i + 2i + 8i^2 = 3 + 14i - 8 = -5 + 14i$.

Divide: $\\frac{-5 + 14i}{17} = -\\frac{5}{17} + \\frac{14}{17}i$.

The result sits in standard form with real denominator eliminated.`,
  after: ``,
  link: '',
},
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj5: {
  title: `Properties of Complex Arithmetic`,
  before: ``,
  content: `Complex arithmetic inherits the structural properties that govern real number operations. These properties ensure that algebraic manipulation proceeds predictably, following rules familiar from elementary mathematics.

**Commutativity** holds for both addition and multiplication:

$$z_1 + z_2 = z_2 + z_1 \\qquad z_1 \\cdot z_2 = z_2 \\cdot z_1$$

Order does not matter. Adding $3 + 2i$ to $1 - 5i$ yields the same result as adding $1 - 5i$ to $3 + 2i$. The same holds for products.

**Associativity** allows regrouping without changing results:

$$(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3) \\qquad (z_1 \\cdot z_2) \\cdot z_3 = z_1 \\cdot (z_2 \\cdot z_3)$$

When adding or multiplying three or more complex numbers, parentheses may be placed anywhere.

**Distributivity** connects addition and multiplication:

$$z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$$

Multiplication distributes over sums, enabling expansion of products and factoring of expressions.

**Identity elements** exist for both operations. The additive identity is $0 = 0 + 0i$, satisfying $z + 0 = z$ for every $z$. The multiplicative identity is $1 = 1 + 0i$, satisfying $z \\cdot 1 = z$ for every $z$.

**Inverse elements** also exist. Every complex number $z$ has an additive inverse $-z$ with $z + (-z) = 0$. Every nonzero complex number has a multiplicative inverse $z^{-1}$ with $z \\cdot z^{-1} = 1$. These properties make $\\mathbb{C}$ a [mathematical field](!/complex-numbers/properties-and-fields).`,
  after: ``,
  link: '',
},
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj6: {
  title: `The Multiplicative Inverse`,
  before: ``,
  content: `Every nonzero complex number possesses a multiplicative inverse — a number that multiplies with it to produce $1$. Finding this inverse employs the same conjugate technique used for division.

For $z = a + bi \\neq 0$, the multiplicative inverse is:

$$z^{-1} = \\frac{1}{z} = \\frac{\\bar{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$

The formula multiplies $1/z$ by $\\bar{z}/\\bar{z}$, converting the denominator to the real value $|z|^2 = a^2 + b^2$. The result expresses $z^{-1}$ in standard algebraic form.

Example: Find the multiplicative inverse of $3 + 4i$.

Compute the modulus squared: $|3 + 4i|^2 = 9 + 16 = 25$.

Find the conjugate: $\\overline{3 + 4i} = 3 - 4i$.

Apply the formula: $(3 + 4i)^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$.

Verification: $(3 + 4i) \\cdot \\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = \\frac{25}{25} = 1$.

The inverse exists precisely when $|z|^2 \\neq 0$, which occurs exactly when $z \\neq 0$. Division by zero remains undefined in $\\mathbb{C}$ as in $\\mathbb{R}$ — the number $0$ has no multiplicative inverse.

Geometrically, $z^{-1}$ lies on the same ray from the origin as $\\bar{z}$, but at distance $1/|z|$ rather than $|z|$. Inversion reflects across the real axis and rescales the [modulus](!/complex-numbers/absolute-value) to its reciprocal.`,
  after: ``,
  link: '',
},
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj7: {
  title: `Common Pitfalls and Tips`,
  before: ``,
  content: `Complex arithmetic follows clear rules, but several common errors trap students repeatedly. Recognizing these pitfalls prevents mistakes and builds computational confidence.

**Forgetting $i^2 = -1$:** The most frequent error in multiplication. After expanding $(a + bi)(c + di)$, the term $bdi^2$ must become $-bd$, not $+bd$. Every $i^2$ in any calculation converts to $-1$ without exception.

**Sign errors in subtraction:** When subtracting $(c + di)$, both the real part $c$ and the imaginary part $di$ must be negated. The expression $(5 + 3i) - (2 - 4i)$ becomes $5 + 3i - 2 + 4i$, not $5 + 3i - 2 - 4i$. Distribute the negative sign completely before combining terms.

**Leaving complex denominators:** Final answers in [algebraic form](!/complex-numbers/algebraic-form) require real denominators. A result like $\\frac{3 + 2i}{1 + i}$ is incomplete. Multiply by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator to obtain proper form: $\\frac{(3 + 2i)(1 - i)}{(1 + i)(1 - i)} = \\frac{5 - i}{2} = \\frac{5}{2} - \\frac{1}{2}i$.

**Division by zero:** The expression $z/0$ is undefined for any $z$. No multiplicative inverse of $0$ exists, and division by zero produces no meaningful result. Always verify denominators are nonzero before dividing.

**Confusing conjugate and negative:** The conjugate of $3 + 2i$ is $3 - 2i$, not $-3 - 2i$. Conjugation flips only the imaginary sign; negation flips both. These operations differ and serve different purposes.

**Tips for accuracy:** Work step by step, writing each intermediate result. Check products by verifying that the [modulus](!/complex-numbers/absolute-value) of the product equals the product of moduli: $|z_1 z_2| = |z_1||z_2|$. For division, verify that multiplying the quotient by the divisor recovers the dividend.`,
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
  title: "Computing with Two-Part Numbers",
  content: `Complex numbers combine real and imaginary components, and arithmetic must handle both parts systematically. Addition and subtraction operate component-wise, just like vector arithmetic. Multiplication requires the distributive property and the fundamental identity $i^2 = -1$. Division introduces the [conjugate](!/complex-numbers/complex-conjugate) as an essential tool for eliminating imaginary denominators. These four operations extend real arithmetic into the complex plane while preserving the algebraic structure that makes calculation predictable.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Operations on Complex Numbers | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/operations",
         name: "name"
      },
        
       }
    }
   }

export default function OperationsPage({seoData,sectionsContent , introContent}) {

    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Operations on Complex Numbers</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
