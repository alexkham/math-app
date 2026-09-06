import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "properties of logarithms",
  "logarithm domain",
  "logarithm range",
  "logarithm monotonicity",
  "one-to-one property logarithm",
  "log function properties",
  "logarithm asymptote",
  "log x domain range",
  "logarithm increasing decreasing",
  "inverse of exponential",
  "logarithm continuity",
  "log function characteristics",
  "why log x undefined for negative",
  "logarithm injective",
  "exponential logarithm inverse"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj7 — comparison: log_a(x) vs a^x as inverses
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Feature</th>
      <th style="${tableHeaders.comparison} text-align: center;">logₐ(x)</th>
      <th style="${tableHeaders.comparison} text-align: center;">aˣ</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">(0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">(−∞, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Range</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">(−∞, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">(0, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Asymptote</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">vertical, x = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">horizontal, y = 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Anchor point</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">(1, 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">(0, 1)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Composition with the other</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">logₐ(aˣ) = x</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">a^(logₐ(x)) = x</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: all 7 properties
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Property</th>
      <th style="${tableHeaders.summary}">Statement</th>
      <th style="${tableHeaders.summary}">Practical consequence</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(0, ∞) — the argument must be strictly positive</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">verify the argument is positive before accepting any solution</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Range</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞) — every real value is attained</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logarithms can equal any real number, positive or negative</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Monotonicity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">strictly increasing for a &gt; 1; strictly decreasing for 0 &lt; a &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inequality direction is set by the base</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">One-to-one</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(M) = logₐ(N) implies M = N</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">drop matching logs to reduce a logarithmic equation to an algebraic one</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Continuity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous on (0, ∞) — no jumps, breaks, or holes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">small changes in input produce small changes in output</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = 0; logₐ(x) → ∓∞ as x → 0⁺ (sign depends on base)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">graph hugs the y-axis but never touches it</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Inverse of aˣ</td>
      <td style="padding: 12px 15px; color: #34495e;">logₐ(aˣ) = x and a^(logₐ(x)) = x</td>
      <td style="padding: 12px 15px; color: #34495e;">switch between exponential and logarithmic form to solve equations</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  
obj0: {
  title: `Key Terms`,
  content: `
## Structural Properties
 
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm)) — must be positive; determines the domain
- [Monotonicity](!/algebra/definitions#monotonicity) — increasing for base $> 1$, decreasing for base between $0$ and $1$
- [One-to-One Property](!/algebra/definitions#one-to-one_property) — distinct inputs always produce distinct outputs
- [Logarithmic Function](!/algebra/definitions#logarithmic_function) — domain, range, asymptote, and inverse relationship`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Domain`,
    content: `The domain of $f(x) = \\log_a(x)$ is the set of all positive real numbers: $(0, \\infty)$.

This restriction follows from the definition. The equation $\\log_a(x) = y$ means $a^y = x$. Since $a > 0$ and $a^y > 0$ for all real $y$, the output of any exponential with positive base is strictly positive. No real exponent produces zero or a negative number.

Consequently, $\\log_a(0)$ is undefined — no solution to $a^y = 0$ exists. Similarly, $\\log_a(-5)$ is undefined — no real $y$ satisfies $a^y = -5$.

For composite arguments, the entire expression inside the logarithm must be positive. The function $\\log_2(x - 3)$ requires $x - 3 > 0$, giving domain $x > 3$. The function $\\log_5(x^2 + 1)$ has domain all real numbers, since $x^2 + 1 > 0$ for every $x$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Range`,
    content: `The range of $f(x) = \\log_a(x)$ is all real numbers: $(-\\infty, \\infty)$.

As $x$ increases from just above zero toward infinity, $\\log_a(x)$ takes every real value exactly once. Near zero, the logarithm plunges toward $-\\infty$. At $x = 1$, the logarithm equals zero. As $x$ grows large, the logarithm increases without bound, though slowly.

This unlimited range contrasts with the exponential function $g(x) = a^x$, whose range is $(0, \\infty)$. The domain and range swap between a function and its inverse — logarithms and exponentials exhibit this exchange precisely.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Monotonicity`,
    content: `Logarithmic functions are strictly monotonic — either always increasing or always decreasing throughout their domain.

When $a > 1$, the function $f(x) = \\log_a(x)$ is strictly increasing. If $x_1 < x_2$, then $\\log_a(x_1) < \\log_a(x_2)$. Larger inputs produce larger outputs. The functions $\\log_2(x)$, $\\log_{10}(x)$, and $\\ln(x)$ all increase.

When $0 < a < 1$, the function $f(x) = \\log_a(x)$ is strictly decreasing. If $x_1 < x_2$, then $\\log_a(x_1) > \\log_a(x_2)$. Larger inputs produce smaller outputs. The function $\\log_{1/2}(x)$ decreases.

This property is critical for solving [inequalities](!/algebra/logarithms/inequalities). Taking logarithms preserves inequality direction when $a > 1$ and reverses it when $0 < a < 1$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `One-to-One Property`,
    content: `Logarithmic functions are one-to-one (injective): distinct inputs always produce distinct outputs.

Algebraically: if $\\log_a(x) = \\log_a(y)$, then $x = y$.

This follows directly from strict monotonicity. A function that is always increasing (or always decreasing) cannot assign the same output to two different inputs — it would have to "turn around," violating monotonicity.

The one-to-one property justifies a key technique for solving [equations](!/algebra/logarithms/equations). When an equation has the form $\\log_a(M) = \\log_a(N)$ with the same base on both sides, the arguments must be equal: $M = N$. This reduces a logarithmic equation to an algebraic one.

Example: $\\log_3(2x + 1) = \\log_3(x + 5)$ implies $2x + 1 = x + 5$, giving $x = 4$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Continuity`,
    content: `The function $f(x) = \\log_a(x)$ is continuous on its entire domain $(0, \\infty)$.

There are no jumps, breaks, or holes in the graph for any $x > 0$. The function transitions smoothly from one value to the next. Small changes in input produce small changes in output.

At the boundary $x = 0$, continuity fails — the function is not defined there. The graph approaches the $y$-axis but never reaches it. This boundary behavior leads to the vertical asymptote discussed below.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Asymptotic Behavior`,
    content: `The line $x = 0$ (the $y$-axis) is a vertical asymptote for every logarithmic function.

As $x \\to 0^+$ (approaching zero from the right):
$$\\lim_{x \\to 0^+} \\log_a(x) = -\\infty \\quad \\text{when } a > 1$$
$$\\lim_{x \\to 0^+} \\log_a(x) = +\\infty \\quad \\text{when } 0 < a < 1$$

The graph approaches the $y$-axis without touching it, plunging downward (for $a > 1$) or rising upward (for $0 < a < 1$).

As $x \\to \\infty$:
$$\\lim_{x \\to \\infty} \\log_a(x) = +\\infty \\quad \\text{when } a > 1$$
$$\\lim_{x \\to \\infty} \\log_a(x) = -\\infty \\quad \\text{when } 0 < a < 1$$

Growth toward infinity is slow. For $a > 1$, the logarithm increases without bound but at a decelerating rate — doubling the input adds only a fixed constant to the output.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Inverse Relationship with Exponential Functions`,
    content: `The functions $f(x) = \\log_a(x)$ and $g(x) = a^x$ are inverses of each other.

Composition in either order returns the input:
$$f(g(x)) = \\log_a(a^x) = x \\quad \\text{for all real } x$$
$$g(f(x)) = a^{\\log_a(x)} = x \\quad \\text{for all } x > 0$$

Graphically, the curves $y = \\log_a(x)$ and $y = a^x$ are reflections of each other across the line $y = x$. Points $(p, q)$ on one curve correspond to points $(q, p)$ on the other.

Domain and range exchange:
- $a^x$ has domain $(-\\infty, \\infty)$ and range $(0, \\infty)$
- $\\log_a(x)$ has domain $(0, \\infty)$ and range $(-\\infty, \\infty)$

Asymptotes exchange orientation:
- $a^x$ has horizontal asymptote $y = 0$
- $\\log_a(x)$ has vertical asymptote $x = 0$

This inverse relationship provides the foundation for converting between logarithmic and exponential forms when solving [equations](!/algebra/logarithms/equations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Summary of Properties`,
    content: `The seven properties above together describe how logarithmic functions behave on their domain and how that behavior shapes work with logarithmic equations, inequalities, and graphs. The table below collects each property in a single row — the statement and the practical consequence — useful as a reference card.`,
    before: ``,
    after: ``,
    link: '',
  },
};

  const introContent = {
  id: "intro",
  title: `Structural Characteristics of Logarithmic Functions`,
  content: `Every [logarithmic function](!/algebra/logarithms) $f(x) = \\log_a(x)$ possesses properties that govern its behavior across the domain. These properties — domain, range, monotonicity, injectivity, continuity, asymptotic behavior, and inverse relationship to exponentials — determine how logarithms interact with equations, inequalities, and graphs.`,
};


const faqQuestions = {
  obj1: {
    question: "Why is the logarithm of a negative number undefined?",
    answer: "Because $\\log_a(x) = y$ means $a^y = x$, and a positive base raised to any real power is positive. No exponent $y$ satisfies $2^y = -5$, so $\\log_2(-5)$ has no answer. The same reasoning rules out zero, since nothing satisfies $a^y = 0$. Negative and zero inputs are excluded by the definition, not by convention.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you find the domain of something like $\\log_2(x - 3)$?",
    answer: "Set whatever sits inside the logarithm greater than zero and solve. Here $x - 3 > 0$ gives domain $x > 3$. The rule applies to the whole argument, not just to $x$, so $\\log_5(x^2 + 1)$ has domain all real numbers because $x^2 + 1$ is positive for every $x$. Strictly greater than zero, never equal to it.",
    sectionId: "1"
  },
  obj3: {
    question: "Why does a logarithm grow so slowly?",
    answer: "Because each fixed step in the output demands a multiplicative jump in the input. With $\\log_2$, moving the output from $10$ to $11$ requires doubling the input, and doubling again adds only one more. Put the other way round, multiplying the input by a constant adds a constant to the output. The curve rises without bound, but at an ever-decelerating rate.",
    sectionId: "6"
  },
  obj4: {
    question: "Why does $\\log_a(a^x) = x$ hold for every $x$, but $a^{\\log_a(x)} = x$ only for $x > 0$?",
    answer: "Because the two compositions begin in different places. In $\\log_a(a^x)$ the exponential runs first and accepts any real $x$, handing the logarithm a positive number, so nothing is excluded. In $a^{\\log_a(x)}$ the logarithm runs first and demands a positive input, so $x \\leq 0$ never gets in. The restriction belongs to whichever function goes first.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Logarithms",
    "description": "Learn logarithm properties: domain (0, ∞), range (-∞, ∞), monotonicity, one-to-one property, continuity, vertical asymptote, and inverse relationship with exponentials.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/properties",
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
      "name": "Logarithm Properties"
    },
    "teaches": [
      "Domain of logarithmic functions",
      "Range of logarithmic functions",
      "Monotonicity and increasing/decreasing behavior",
      "One-to-one (injective) property",
      "Continuity on domain",
      "Asymptotic behavior and vertical asymptote",
      "Inverse relationship with exponential functions"
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
        "name": "Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Properties of Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms/properties"
      }
    ]
  }
}




return {
  props: {
    sectionsContent,
    introContent,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Properties of Logarithms: Domain, Range & More | Learn Math Class",
      description: "Learn logarithm properties: domain (0, ∞), range (-∞, ∞), monotonicity, one-to-one property, continuity, vertical asymptote, and inverse relationship with exponentials.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/properties",
      name: "Properties of Logarithms"
    },
  }
}
   }

// export default function PropertiesPage({seoData,sectionsContent , introContent}) {
export default function PropertiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj7Table,
  summaryTable,
  faqQuestions,
  schemas
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Properties of Logarithms FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Properties of Logarithms</h1>
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