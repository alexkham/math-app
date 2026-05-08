import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords = [
  "fibonacci sequence",
  "fibonacci numbers",
  "fibonacci recurrence",
  "golden ratio",
  "phi golden ratio",
  "binet formula",
  "fibonacci closed form",
  "lucas numbers",
  "lucas sequence",
  "cassini identity",
  "zeckendorf theorem",
  "fibonacci identities",
  "fibonacci sum formula",
  "fibonacci ratio limit",
  "fibonacci sequence examples",
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

  const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `The Fibonacci sequence is defined by a two-term recurrence with two initial values:

$$F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2} \\quad (n \\geq 3)$$

The first terms are:

$$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, \\ldots$$

Each term after the second is the sum of its two immediate predecessors: $2 = 1 + 1$, $3 = 1 + 2$, $5 = 2 + 3$, $8 = 3 + 5$, and so on. Growth accelerates because each new term absorbs the size of both parents.

An alternative convention starts with $F_0 = 0$: the sequence becomes $0, 1, 1, 2, 3, 5, 8, \\ldots$. The same recurrence applies — only the indexing shifts. Both conventions appear in the literature, and the choice is a matter of context. This page uses $F_1 = 1$.

The Fibonacci sequence is neither [arithmetic](!/algebra/sequences/arithmetic) (the differences $0, 1, 1, 2, 3, 5, \\ldots$ are not constant) nor [geometric](!/algebra/sequences/geometric) (the ratios $1, 2, 1.5, 1.\\overline{6}, 1.6, \\ldots$ are not constant either, though they converge).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `The Golden Ratio`,
    content: `The ratio of consecutive Fibonacci numbers $\\frac{F_{n+1}}{F_n}$ settles toward a fixed value as $n$ grows:

$$\\frac{F_2}{F_1} = 1, \\quad \\frac{F_3}{F_2} = 2, \\quad \\frac{F_4}{F_3} = 1.5, \\quad \\frac{F_5}{F_4} = 1.\\overline{6}, \\quad \\frac{F_6}{F_5} = 1.6, \\quad \\ldots$$

The limit is the **golden ratio**:

$$\\phi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.6180339887\\ldots$$

The number $\\phi$ satisfies the equation $\\phi^2 = \\phi + 1$, or equivalently $\\phi^2 - \\phi - 1 = 0$. This quadratic has a second [root](!/algebra/roots) $\\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618$, which also satisfies $\\psi^2 = \\psi + 1$.

The two roots are related: $\\phi + \\psi = 1$ and $\\phi \\cdot \\psi = -1$. Since $|\\psi| < 1$, powers of $\\psi$ shrink toward zero, which is why the ratio $\\frac{F_{n+1}}{F_n}$ converges to $\\phi$ and not to $\\psi$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Binet's Formula`,
    content: `Despite its recursive definition, the Fibonacci sequence has an explicit closed-form expression:

$$F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}}$$

where $\\phi = \\frac{1 + \\sqrt{5}}{2}$ and $\\psi = \\frac{1 - \\sqrt{5}}{2}$.

The derivation starts by assuming a solution of the form $F_n = x^n$ and substituting into the recurrence $F_n = F_{n-1} + F_{n-2}$. This gives $x^n = x^{n-1} + x^{n-2}$, which simplifies to the characteristic [equation](!/algebra/equations/quadratic) $x^2 = x + 1$. The two roots are $\\phi$ and $\\psi$. Since the recurrence is linear, any linear combination $F_n = A\\phi^n + B\\psi^n$ is also a solution, and the constants $A$ and $B$ are determined by the initial conditions $F_1 = 1$, $F_2 = 1$.

The formula involves irrational numbers — $\\sqrt{5}$ appears explicitly, and both $\\phi$ and $\\psi$ are irrational — yet it always produces an integer. The irrational parts of $\\phi^n$ and $\\psi^n$ cancel exactly upon subtraction.

Since $|\\psi| < 1$, the term $\\psi^n$ vanishes for large $n$, and $F_n \\approx \\frac{\\phi^n}{\\sqrt{5}}$. This means the Fibonacci sequence grows exponentially at rate $\\phi$ — roughly $61.8\\%$ growth per step.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Identities and Properties`,
    content: `The Fibonacci sequence satisfies a network of algebraic identities. Several of the most fundamental are collected here.

**Cassini's identity** relates three consecutive Fibonacci numbers:

$$F_{n-1} F_{n+1} - F_n^2 = (-1)^n$$

The product of the neighbors minus the square of the middle term alternates between $+1$ and $-1$. For $n = 6$: $F_5 \\cdot F_7 - F_6^2 = 5 \\cdot 13 - 8^2 = 65 - 64 = 1$.

**Sum of the first $n$ Fibonacci numbers:**

$$\\sum_{k=1}^{n} F_k = F_{n+2} - 1$$

The running total always lands one short of a Fibonacci number two positions ahead.

**Sum of squares:**

$$\\sum_{k=1}^{n} F_k^2 = F_n \\cdot F_{n+1}$$

The sum of the first $n$ squared Fibonacci numbers equals the product of $F_n$ and $F_{n+1}$.

**Divisibility:** $\\gcd(F_m, F_n) = F_{\\gcd(m,n)}$. The greatest common divisor of two Fibonacci numbers is itself a Fibonacci number, indexed by the GCD of the original indices. This connects the multiplicative structure of the Fibonacci sequence to the [GCD](!/arithmetic/divisibility/gcd) of ordinary integers.

**Zeckendorf's theorem:** every positive integer can be represented as a sum of non-consecutive Fibonacci numbers, and this representation is unique. For example, $30 = 21 + 8 + 1 = F_8 + F_6 + F_1$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Lucas Numbers`,
    content: `The Lucas sequence uses the same recurrence as Fibonacci but starts from different initial values:

$$L_1 = 1, \\quad L_2 = 3, \\quad L_n = L_{n-1} + L_{n-2} \\quad (n \\geq 3)$$

The first terms are $1, 3, 4, 7, 11, 18, 29, 47, 76, 123, \\ldots$. The growth rate is identical to Fibonacci — the ratio of consecutive Lucas numbers also converges to $\\phi$ — but the specific values differ.

The two sequences are tightly linked. The relationship $L_n = F_{n-1} + F_{n+1}$ expresses each Lucas number as the sum of the Fibonacci neighbors flanking it. For $n = 5$: $L_5 = F_4 + F_6 = 3 + 8 = 11$.

The Binet analogue for Lucas numbers is:

$$L_n = \\phi^n + \\psi^n$$

Where Fibonacci's formula subtracts powers of the two roots and divides by $\\sqrt{5}$, Lucas's formula adds them directly. The complementary structure — one sequence from the difference, the other from the sum — is a consequence of both sequences satisfying the same characteristic equation.`,
    before: ``,
    after: ``,
    link: '',
  },
}

 const introContent = {
  id: 'intro',
  title: `Each Term from the Two Before It`,
  content: `The Fibonacci sequence is the most famous example of a recursively defined sequence: each term is the sum of the two terms that precede it. From the simplest possible starting values — $1$ and $1$ — this rule produces a sequence whose growth rate, divisibility structure, and algebraic identities have been studied for centuries. Despite its purely recursive origin, the Fibonacci sequence has an explicit closed-form expression involving the golden ratio.`,
}


const faqQuestions = {
  obj1: {
    question: "What is the Fibonacci sequence?",
    answer: "The Fibonacci sequence is defined by the recurrence F_n = F_(n-1) + F_(n-2) with initial values F_1 = 1 and F_2 = 1. Each term after the second is the sum of its two immediate predecessors, producing 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on."
  },
  obj2: {
    question: "What is the relationship between Fibonacci numbers and the golden ratio?",
    answer: "The ratio of consecutive Fibonacci numbers F_(n+1) divided by F_n converges to the golden ratio phi, approximately 1.618. The golden ratio satisfies the equation phi squared equals phi plus 1. The Fibonacci sequence grows exponentially at rate phi, roughly 61.8 percent per step."
  },
  obj3: {
    question: "What is Binet's formula?",
    answer: "Binet's formula gives an explicit closed-form expression for Fibonacci numbers: F_n equals (phi to the n minus psi to the n) divided by the square root of 5, where phi and psi are the two roots of the characteristic equation x squared equals x plus 1. Although the formula involves irrational numbers, it always produces an integer."
  },
  obj4: {
    question: "What is Cassini's identity?",
    answer: "Cassini's identity states that F_(n-1) times F_(n+1) minus F_n squared equals negative 1 to the power n. The product of the two Fibonacci neighbors minus the square of the middle term alternates between plus 1 and minus 1 as n changes parity."
  },
  obj5: {
    question: "What are Lucas numbers?",
    answer: "Lucas numbers follow the same recurrence as Fibonacci but start from L_1 = 1 and L_2 = 3, producing 1, 3, 4, 7, 11, 18, 29, 47, and so on. The ratio of consecutive Lucas numbers also converges to the golden ratio. They are linked to Fibonacci by the identity L_n = F_(n-1) + F_(n+1)."
  },
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Fibonacci Sequence and Golden Ratio",
    "description": "Learn the Fibonacci sequence: recursive definition, golden ratio limit, Binet's closed-form formula, Cassini's identity, Zeckendorf's theorem, and Lucas numbers.",
    "url": "https://www.learnmathclass.com/algebra/sequences/fibonacci",
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
      "name": "Fibonacci Sequence"
    },
    "teaches": [
      "Recursive definition of the Fibonacci sequence and its initial values",
      "Convergence of the ratio of consecutive Fibonacci numbers to the golden ratio",
      "Binet's closed-form formula and its derivation from the characteristic equation",
      "Cassini's identity and other algebraic identities for Fibonacci numbers",
      "Sum formulas, divisibility properties, and Zeckendorf's representation theorem",
      "Lucas numbers and their relationship to the Fibonacci sequence"
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
        "name": "Sequences",
        "item": "https://www.learnmathclass.com/algebra/sequences"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Fibonacci Sequence",
        "item": "https://www.learnmathclass.com/algebra/sequences/fibonacci"
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
  props:{
     sectionsContent,
     introContent,
     faqQuestions,
     schemas,
     seoData: {
       title: "Fibonacci Sequence: Golden Ratio & Binet | Learn Math Class",
       description: "Learn the Fibonacci sequence: recursive definition, golden ratio limit, Binet's closed-form formula, Cassini's identity, Zeckendorf's theorem, and Lucas numbers.",
       keywords: keyWords.join(", "),
       url: "/algebra/sequences/fibonacci",
       name: "Fibonacci Sequence and Golden Ratio"
     },
   }
}
   }

export default function FibonacciSequencePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
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
    // {
    //     id:'6',
    //     title:sectionsContent.obj6.title,
    //     link:sectionsContent.obj6.link,
    //     content:[
    //       sectionsContent.obj6.content,
    //     ]
    // },
    // {
    //     id:'7',
    //     title:sectionsContent.obj7.title,
    //     link:sectionsContent.obj7.link,
    //     content:[
    //       sectionsContent.obj7.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Fibonacci Sequence</h1>
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
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
