import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "radical equations",
  "solve radical equations",
  "extraneous solutions",
  "square root equations",
  "how to solve radical equations",
  "isolate the radical",
  "squaring both sides",
  "cube root equations",
  "radical equation examples",
  "check extraneous solutions",
  "equations with square roots",
  "two radicals equation",
  "radical inequalities",
  "solving equations with radicals",
  "eliminate radical"
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

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }



const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Equation Concepts
 
- [Radical Equation](!/algebra/definitions#radical_equation) — an equation in which the variable appears under a radical sign
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — a value that satisfies the transformed equation but not the original, introduced by squaring or other non-reversible steps
- [Principal Root](!/algebra/definitions#principal_root) — the radical always returns a non-negative value for even indices, which is why negative outputs signal extraneous solutions`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},

  obj1: {
    title: `What is a Radical Equation`,
    content: `A radical equation contains a variable under a radical sign.

$$\\sqrt{x} = 5$$

$$\\sqrt{x + 3} = x - 1$$

$$\\sqrt[3]{2x - 1} = 3$$

The variable may appear only under the radical, or both under and outside. It may appear under multiple radicals. Each configuration requires slightly different handling, but the core strategy remains: isolate and eliminate.

Radical equations differ from expressions involving radicals with known values. Here the radicand contains the unknown, making the radical an obstacle to finding $x$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Basic Strategy`,
    content: `The fundamental approach has four steps.

Isolate the radical on one side of the equation.

Raise both sides to the power that matches the index.

Solve the resulting equation.

Check all solutions in the original equation.

$$\\sqrt{x} = 7$$

The radical is already isolated. Square both sides:

$$x = 49$$

Check: $\\sqrt{49} = 7$. Valid.

$$\\sqrt{x - 2} + 4 = 9$$

Isolate first: $\\sqrt{x - 2} = 5$

Square: $x - 2 = 25$

Solve: $x = 27$

Check: $\\sqrt{27 - 2} + 4 = \\sqrt{25} + 4 = 5 + 4 = 9$. Valid.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Why Isolation Comes First`,
    content: `Squaring before isolating creates unnecessary complications.

Consider $\\sqrt{x} + 3 = 7$ handled incorrectly:

$$(\\sqrt{x} + 3)^2 = 49$$

$$x + 6\\sqrt{x} + 9 = 49$$

The radical remains. The equation is now harder, not easier.

Correct approach — isolate first:

$$\\sqrt{x} = 4$$

$$x = 16$$

Check: $\\sqrt{16} + 3 = 4 + 3 = 7$. Valid.

Isolation ensures that raising to a power actually eliminates the radical. The techniques from [operations](!/algebra/roots/operations) show what happens when binomials containing radicals are squared — the radical often survives unless isolated first.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Extraneous Solutions`,
    content: `Squaring both sides can introduce false solutions — values that satisfy the squared equation but not the original.

$$\\sqrt{x} = -3$$

Squaring gives $x = 9$. But $\\sqrt{9} = 3 \\neq -3$.

The original equation has no solution. The principal square root is never negative — a consequence of the [properties of radicals](!/algebra/roots/properties). Squaring erased the negative sign and created a spurious answer.

Another example:

$$\\sqrt{x + 5} = x - 1$$

Square: $x + 5 = x^2 - 2x + 1$

Rearrange: $x^2 - 3x - 4 = 0$

Factor: $(x - 4)(x + 1) = 0$

Candidates: $x = 4$ and $x = -1$

Check $x = 4$: $\\sqrt{9} = 3$ and $4 - 1 = 3$. Valid.

Check $x = -1$: $\\sqrt{4} = 2$ and $-1 - 1 = -2$. Invalid — $2 \\neq -2$.

Only $x = 4$ solves the original equation. The value $x = -1$ is extraneous.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Why Extraneous Solutions Appear`,
    content: `Squaring is not a reversible operation. Both $5$ and $-5$ square to $25$. When an equation is squared, information about sign is lost.

If the original equation requires a radical to equal a negative value, squaring hides this impossibility. The squared equation accepts values that the original rejects.

Similarly, if the original equation has domain restrictions — the radicand must be non-negative for even roots — squaring may produce solutions outside this domain.

Extraneous solutions are not errors in algebra. They are artifacts of an irreversible operation. The check step is not optional; it is part of the solution process.

Odd-index equations rarely produce extraneous solutions because odd roots accept all real numbers and preserve sign. But checking remains good practice.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Equations with Two Radicals`,
    content: `When two radicals appear, isolate one and square. Then isolate the remaining radical and square again.

$$\\sqrt{x + 5} - \\sqrt{x} = 1$$

Isolate one radical:

$$\\sqrt{x + 5} = \\sqrt{x} + 1$$

Square both sides:

$$x + 5 = x + 2\\sqrt{x} + 1$$

Simplify:

$$4 = 2\\sqrt{x}$$

$$\\sqrt{x} = 2$$

$$x = 4$$

Check: $\\sqrt{9} - \\sqrt{4} = 3 - 2 = 1$. Valid.

The first squaring did not eliminate all radicals — a radical remained from expanding $(\\sqrt{x} + 1)^2$ using techniques from [operations](!/algebra/roots/operations). A second isolation and squaring completed the process.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Equations with Radicals on Both Sides`,
    content: `When each side has a single radical, square directly.

$$\\sqrt{2x + 3} = \\sqrt{x + 7}$$

Square:

$$2x + 3 = x + 7$$

$$x = 4$$

Check: $\\sqrt{11} = \\sqrt{11}$. Valid.

This configuration rarely produces extraneous solutions because both sides have the same structure — both are principal roots, both non-negative.

More complex cases:

$$\\sqrt{3x + 1} = \\sqrt{x - 1} + 2$$

Isolate before squaring:

$$\\sqrt{3x + 1} - 2 = \\sqrt{x - 1}$$

Square:

$$3x + 1 - 4\\sqrt{3x + 1} + 4 = x - 1$$

$$2x + 6 = 4\\sqrt{3x + 1}$$

$$x + 3 = 2\\sqrt{3x + 1}$$

Square again and solve. Check all candidates.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Cube Roots and Higher`,
    content: `Odd-index equations follow the same process but raise to the appropriate power.

$$\\sqrt[3]{x - 2} = 4$$

Cube both sides:

$$x - 2 = 64$$

$$x = 66$$

Check: $\\sqrt[3]{64} = 4$. Valid.

$$\\sqrt[3]{2x + 1} = \\sqrt[3]{x - 3}$$

Cube:

$$2x + 1 = x - 3$$

$$x = -4$$

Check: $\\sqrt[3]{-7} = \\sqrt[3]{-7}$. Valid.

Odd-index radicals handle negative radicands naturally, as explained in [properties](!/algebra/roots/properties). Extraneous solutions are rare because cubing preserves sign and no principal root convention restricts outputs.

Fourth roots, sixth roots, and other even-index equations behave like square root equations — domain restrictions apply and extraneous solutions can arise.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Radical Inequalities`,
    content: `Inequalities involving radicals require attention to domain.

$$\\sqrt{x} > 3$$

Square: $x > 9$

But also: the radicand must satisfy $x \\geq 0$ for the square root to exist.

Intersection: $x > 9$. The domain restriction $x \\geq 0$ is automatically satisfied.

$$\\sqrt{x - 2} \\leq 4$$

Square: $x - 2 \\leq 16$, so $x \\leq 18$

Domain: $x - 2 \\geq 0$, so $x \\geq 2$

Intersection: $2 \\leq x \\leq 18$.

For inequalities, direction may reverse when both sides are squared — but only if squaring a negative. Since principal roots are non-negative, squaring inequalities involving isolated radicals typically preserves direction.

The [properties](!/algebra/roots/properties) page details domain restrictions. Full treatment of inequalities extends beyond radical equations into broader inequality techniques.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Verification Process`,
    content: `Every solution must be substituted into the original equation.

Substitute the candidate value for the variable.

Simplify both sides independently.

Compare: if they match, the solution is valid. If not, it is extraneous.

This step cannot be skipped. It is part of solving radical equations, not merely a check on arithmetic.

$$\\sqrt{2x + 1} = x - 1$$

After solving, suppose candidates are $x = 4$ and $x = 0$.

Check $x = 4$: $\\sqrt{9} = 3$ and $4 - 1 = 3$. Match. Valid.

Check $x = 0$: $\\sqrt{1} = 1$ and $0 - 1 = -1$. No match. Extraneous.

Solution: $x = 4$ only.

Verification protects against extraneous solutions introduced by squaring and against domain violations where radicands become negative.`,
    before: ``,
    after: ``,
    link: '',
  },

}

const introContent = {
  id: "intro",
  title: "Variables Under the Radical",
  content: `When the unknown hides under a radical sign, standard algebraic techniques fall short. The radical must be eliminated — typically by raising both sides to a power. But this process can create solutions that do not satisfy the original equation.

Solving radical equations requires both algebraic manipulation and verification. Every candidate solution must be checked.`
}


const faqQuestions = {
  obj1: {
    question: "What is a radical equation?",
    answer: "A radical equation contains a variable under a radical sign, such as √x = 5 or √(x+3) = x−1. The variable appears inside the radicand, making the radical an obstacle that must be eliminated to solve for x.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you solve a radical equation?",
    answer: "Follow four steps: (1) Isolate the radical on one side, (2) Raise both sides to the power matching the index (square for square roots, cube for cube roots), (3) Solve the resulting equation, (4) Check all solutions in the original equation.",
    sectionId: "2"
  },
  obj3: {
    question: "Why must you isolate the radical before squaring?",
    answer: "Squaring before isolating creates complications. For √x + 3 = 7, squaring directly gives x + 6√x + 9 = 49 — the radical survives. Isolating first (√x = 4) then squaring gives x = 16 directly.",
    sectionId: "3"
  },
  obj4: {
    question: "What is an extraneous solution?",
    answer: "An extraneous solution satisfies the squared equation but not the original. For √x = −3, squaring gives x = 9, but √9 = 3 ≠ −3. The original has no solution; x = 9 is extraneous.",
    sectionId: "4"
  },
  obj5: {
    question: "Why do extraneous solutions appear in radical equations?",
    answer: "Squaring is not reversible — both 5 and −5 square to 25. When you square an equation, sign information is lost. Squaring can hide impossibilities like a principal root equaling a negative value.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you solve equations with two radicals?",
    answer: "Isolate one radical and square. If a radical remains, isolate it and square again. For √(x+5) − √x = 1: rearrange to √(x+5) = √x + 1, square, simplify, then square again if needed.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you solve cube root equations?",
    answer: "Follow the same process but cube both sides instead of squaring. For ∛(x−2) = 4: cube both sides to get x−2 = 64, so x = 66. Extraneous solutions are rare with odd roots since cubing preserves sign.",
    sectionId: "8"
  },
  obj8: {
    question: "Do you always need to check solutions for radical equations?",
    answer: "Yes, checking is mandatory for equations involving even roots (square, fourth, etc.). Squaring can introduce extraneous solutions. For odd roots, checking is less critical but still good practice.",
    sectionId: "10"
  },
  obj9: {
    question: "How do you solve radical inequalities?",
    answer: "Square the isolated radical and solve the inequality, but also apply domain restrictions. For √(x−2) ≤ 4: squaring gives x ≤ 18, but domain requires x ≥ 2. The solution is 2 ≤ x ≤ 18.",
    sectionId: "9"
  },
  obj10: {
    question: "What happens when √x equals a negative number?",
    answer: "The equation has no solution. The principal square root is always non-negative, so √x = −3 is impossible. Squaring would give x = 9, but this is extraneous since √9 = 3 ≠ −3.",
    sectionId: "4"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Radical Equations",
    "description": "Learn to solve radical equations: isolate radicals, square both sides, handle extraneous solutions, solve equations with multiple radicals, and verify all answers.",
    "url": "https://www.learnmathclass.com/algebra/roots/equations",
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
      "name": "Radical Equations"
    },
    "teaches": [
      "Definition of radical equations",
      "Four-step solving strategy",
      "Why isolation comes first",
      "Understanding extraneous solutions",
      "Equations with two radicals",
      "Cube root and higher-index equations",
      "Radical inequalities",
      "Verification process"
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
        "name": "Algebra",
        "item": "https://www.learnmathclass.com/algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Roots",
        "item": "https://www.learnmathclass.com/algebra/roots"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Radical Equations",
        "item": "https://www.learnmathclass.com/algebra/roots/equations"
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



return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Radical Equations: Solve & Check for Extraneous Solutions | Learn Math Class",
      description: "Learn to solve radical equations: isolate radicals, square both sides, handle extraneous solutions, solve equations with multiple radicals, and verify all answers.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/equations",
      name: "Radical Equations",
      
    },
  }
}
   }


export default function RootEquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
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
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Radical Equations</h1>
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
    <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
