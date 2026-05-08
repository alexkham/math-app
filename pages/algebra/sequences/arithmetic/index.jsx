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
  "arithmetic sequence",
  "arithmetic progression",
  "common difference",
  "arithmetic sequence formula",
  "general term arithmetic sequence",
  "arithmetic series",
  "sum of arithmetic sequence",
  "arithmetic series formula",
  "arithmetic mean",
  "recursive formula arithmetic sequence",
  "explicit formula arithmetic sequence",
  "nth term arithmetic sequence",
  "find common difference",
  "arithmetic sequence examples",
  "arithmetic sequence calculator",
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
    content: `An arithmetic sequence is a sequence in which consecutive terms differ by a constant $d$, called the **common difference**:

$$a_{n+1} - a_n = d \\quad \\text{for all } n$$

Starting from a first term $a_1$, the sequence unfolds as $a_1, a_1 + d, a_1 + 2d, a_1 + 3d, \\ldots$. The general term is:

$$a_n = a_1 + (n - 1)d$$

The common difference $d$ can be any real number. When $d > 0$, the sequence increases: $3, 7, 11, 15, \\ldots$ has $d = 4$. When $d < 0$, it decreases: $20, 17, 14, 11, \\ldots$ has $d = -3$. When $d = 0$, every term equals $a_1$ — a constant sequence, which is arithmetic in the trivial sense.

The explicit formula $a_n = a_1 + (n-1)d$ has the same structure as a linear function $f(x) = mx + b$: the common difference $d$ plays the role of slope, and the sequence's terms lie on a straight line when plotted against their indices.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Identifying Arithmetic Sequences`,
    content: `To determine whether a given sequence is arithmetic, compute the differences between consecutive terms. If every difference equals the same value, the sequence is arithmetic and that value is $d$.

The sequence $5, 12, 19, 26, 33$ has differences $7, 7, 7, 7$. All equal, so it is arithmetic with $d = 7$.

The sequence $1, 4, 9, 16, 25$ has differences $3, 5, 7, 9$. These are not constant, so the sequence is not arithmetic. (It is the sequence of perfect [square numbers](!/algebra/sequences/square-numbers), which grows quadratically rather than linearly.)

The test applies to any number of terms: compute all consecutive differences and check for uniformity. A single pair of unequal differences is enough to disqualify. Conversely, if only a few terms are given, the test cannot confirm an arithmetic pattern with certainty — the sequence $2, 4, 6$ could continue as $8, 10, \\ldots$ (arithmetic) or as $10, 16, \\ldots$ (something else). The rule generating the sequence, not just a finite sample, is what determines its type.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Finding Terms`,
    content: `The explicit formula $a_n = a_1 + (n-1)d$ contains four quantities: $a_n$, $a_1$, $n$, and $d$. Given any three, the fourth can be found by solving the equation.

Finding a specific term: if $a_1 = 4$ and $d = 6$, then $a_{20} = 4 + 19 \\cdot 6 = 118$.

Finding the common difference: if $a_1 = 3$ and $a_8 = 24$, then $24 = 3 + 7d$, so $d = 3$.

Finding the first term: if $a_{12} = 50$ and $d = 4$, then $50 = a_1 + 11 \\cdot 4$, so $a_1 = 6$.

Finding the position of a term: if $a_1 = 7$, $d = 5$, and some term equals $52$, then $52 = 7 + (n-1) \\cdot 5$, so $n - 1 = 9$ and $n = 10$. The value $52$ is the $10$th term. If the equation yields a non-integer $n$, the value does not appear in the sequence.

When two non-consecutive terms are given — say $a_3 = 11$ and $a_9 = 35$ — write both in terms of $a_1$ and $d$: $a_1 + 2d = 11$ and $a_1 + 8d = 35$. Subtracting gives $6d = 24$, so $d = 4$, and back-substituting gives $a_1 = 3$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Recursive Formula`,
    content: `The recursive definition of an arithmetic sequence specifies a starting value and a rule for getting from one term to the next:

$$a_1 = c, \\quad a_n = a_{n-1} + d$$

Each term is built from the immediately preceding term by adding $d$. This formulation makes the constant-difference structure explicit but requires computing all earlier terms to reach a later one.

Converting from recursive to explicit: if $a_1 = c$ and $a_n = a_{n-1} + d$, then after applying the rule $n - 1$ times, $a_n = c + (n-1)d$. The explicit formula is a direct consequence of adding $d$ repeatedly.

Converting from explicit to recursive: given $a_n = a_1 + (n-1)d$, observe that $a_n - a_{n-1} = d$, which gives the recursive rule $a_n = a_{n-1} + d$ with initial value $a_1$.

Both representations define the same sequence. The explicit form is better for computing isolated terms; the recursive form is better for understanding the building process and connects naturally to the idea of [sequences defined by recurrence](!/algebra/sequences/#2).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Arithmetic Series`,
    content: `The sum of the first $n$ terms of an arithmetic sequence is called an **arithmetic series**, denoted $S_n$:

$$S_n = a_1 + a_2 + a_3 + \\cdots + a_n$$

The closed-form formula is:

$$S_n = \\frac{n}{2}(a_1 + a_n)$$

The derivation is straightforward. Write the sum forwards and backwards:

$$S_n = a_1 + (a_1 + d) + (a_1 + 2d) + \\cdots + a_n$$

$$S_n = a_n + (a_n - d) + (a_n - 2d) + \\cdots + a_1$$

Adding these two expressions term by term, every pair sums to $a_1 + a_n$, and there are $n$ such pairs:

$$2S_n = n(a_1 + a_n)$$

Dividing by $2$ gives the result. An equivalent form replaces $a_n$ with $a_1 + (n-1)d$:

$$S_n = \\frac{n}{2}(2a_1 + (n-1)d)$$

This version is useful when $a_n$ is not known directly.

The sum of the first $100$ natural numbers, famously attributed to the young Gauss: $a_1 = 1$, $a_{100} = 100$, so $S_{100} = \\frac{100}{2}(1 + 100) = 5050$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Arithmetic Mean`,
    content: `The arithmetic mean of two numbers $a$ and $b$ is:

$$M = \\frac{a + b}{2}$$

In an arithmetic sequence, every term (except the first and last) is the arithmetic mean of its two neighbors:

$$a_n = \\frac{a_{n-1} + a_{n+1}}{2}$$

This follows directly from the constant-difference property: since $a_n - a_{n-1} = a_{n+1} - a_n = d$, adding the neighbors gives $a_{n-1} + a_{n+1} = 2a_n$.

Inserting arithmetic means between two values is the reverse problem: given endpoints $a$ and $b$, place $k$ terms between them so that the resulting $k + 2$ values form an arithmetic sequence. The common difference must be $d = \\frac{b - a}{k + 1}$, and the inserted terms are $a + d, a + 2d, \\ldots, a + kd$.

For example, inserting $3$ arithmetic means between $5$ and $25$ requires $d = \\frac{25 - 5}{4} = 5$, producing the sequence $5, 10, 15, 20, 25$.`,
    before: ``,
    after: ``,
    link: '',
  },
}

 const introContent = {
  id: 'intro',
  title: `Constant Difference`,
  content: `An arithmetic sequence adds the same fixed value to each term to produce the next. That fixed value — the common difference — determines everything: whether the sequence rises or falls, how fast it grows, and what its partial sums look like. Arithmetic sequences are the simplest infinite pattern, and their summation formula is one of the oldest results in mathematics.`,
}

const faqQuestions = {
  obj1: {
    question: "What is an arithmetic sequence?",
    answer: "An arithmetic sequence is a sequence in which consecutive terms differ by a constant value called the common difference, denoted d. Starting from a first term a_1, each subsequent term is obtained by adding d to the previous one, producing the pattern a_1, a_1 + d, a_1 + 2d, and so on."
  },
  obj2: {
    question: "What is the formula for the nth term of an arithmetic sequence?",
    answer: "The general term of an arithmetic sequence is given by a_n = a_1 + (n - 1)d, where a_1 is the first term, d is the common difference, and n is the position of the term. This explicit formula allows direct computation of any term without needing to know the previous ones."
  },
  obj3: {
    question: "How do you find the sum of an arithmetic sequence?",
    answer: "The sum of the first n terms of an arithmetic sequence, called an arithmetic series, is S_n = n/2 times (a_1 + a_n). An equivalent form using only the first term and common difference is S_n = n/2 times (2a_1 + (n - 1)d). The formula is derived by pairing terms from opposite ends of the sum."
  },
  obj4: {
    question: "How do you identify whether a sequence is arithmetic?",
    answer: "Compute the differences between consecutive terms. If every difference equals the same value, the sequence is arithmetic and that value is the common difference d. A single pair of unequal differences is enough to disqualify the sequence from being arithmetic."
  },
  obj5: {
    question: "What is the arithmetic mean in an arithmetic sequence?",
    answer: "The arithmetic mean of two numbers a and b is (a + b)/2. In an arithmetic sequence, every interior term equals the arithmetic mean of its two neighbors: a_n = (a_(n-1) + a_(n+1))/2. This property follows directly from the constant-difference structure."
  },
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Arithmetic Sequences and Series",
    "description": "Learn arithmetic sequences: definition, common difference, nth term formula, recursive form, sum of arithmetic series, and arithmetic mean with examples.",
    "url": "https://www.learnmathclass.com/algebra/sequences/arithmetic",
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
      "name": "Arithmetic Sequences"
    },
    "teaches": [
      "Definition of an arithmetic sequence and the common difference",
      "Explicit formula a_n = a_1 + (n-1)d for the general term",
      "Identifying arithmetic sequences by checking constant differences",
      "Finding any unknown quantity from a_n, a_1, n, and d",
      "Recursive formulation and conversion between recursive and explicit forms",
      "Arithmetic series formula and the arithmetic mean property"
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
        "name": "Arithmetic Sequences",
        "item": "https://www.learnmathclass.com/algebra/sequences/arithmetic"
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
       title: "Arithmetic Sequences: Formula, Series & Mean | Learn Math Class",
       description: "Learn arithmetic sequences: definition, common difference, nth term formula, recursive form, sum of arithmetic series, and arithmetic mean with examples.",
       keywords: keyWords.join(", "),
       url: "/algebra/sequences/arithmetic",
       name: "Arithmetic Sequences and Series"
     },
   }
}
   }

export default function ArithmeticSequencesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Arithmetic Sequences</h1>
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
