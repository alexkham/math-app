

// tables-optimized: v4 | 2026-05-24 | 2 tables (obj4 aggregation, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "indefinite integral",
  "antiderivative",
  "constant of integration",
  "indefinite integral notation",
  "basic antiderivative formulas",
  "power rule integration",
  "integral of x^n",
  "linearity of integrals",
  "verify antiderivative",
  "indefinite vs definite integral",
  "find antiderivative",
  "integration calculus",
  "integral plus C",
  "reverse differentiation"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj4 — aggregation: the page's own minimal antiderivative reference
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 85%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Integrand f(x)</th>
      <th style="${tableHeaders.aggregation}">∫ f(x) dx</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x<sup>n</sup>&nbsp;&nbsp;(n ≠ −1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sup>n+1</sup> / (n + 1) + C</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 / x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ln |x| + C</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e<sup>x</sup> + C</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin x + C</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">sin x</td>
      <td style="padding: 12px 15px; color: #34495e;">−cos x + C</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: the indefinite-integration workflow
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary} text-align: center;">Step</th>
      <th style="${tableHeaders.summary}">Action</th>
      <th style="${tableHeaders.summary}">Where the detail lives</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Recognize the form — does the integrand match a known antiderivative formula?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/special" style="${linkStyle}">special integrals</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Apply linearity — split sums and factor out constants to reduce to known pieces</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/rules" style="${linkStyle}">integration rules</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Compute the antiderivative F(x) — apply a formula directly, or use a technique to transform the integrand first</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/calculus/integrals/techniques" style="${linkStyle}">techniques</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Add the constant of integration — the answer is F(x) + C, never just F(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">obj2 above (constant of integration)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">Verify by differentiating — F&apos;(x) should return the original integrand f(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">obj6 above (verifying antiderivatives)</td>
    </tr>
  </tbody>
</table>
`

const sectionsContent = {
  // ─── /calculus/integrals/indefinite ───────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Antiderivative](!/calculus/definitions#antiderivative) — a function whose derivative is $f$
- [Indefinite Integral](!/calculus/definitions#indefinite_integral) — $\\int f(x)\\,dx = F(x) + C$, the full family
- [Integrand](!/calculus/definitions#integrand) — the function $f(x)$ being integrated
- [Definite Integral](!/calculus/definitions#definite_integral) — connected by the Fundamental Theorem`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Antiderivatives`,
    content: `
A function $F$ is an antiderivative of $f$ if:

$$F'(x) = f(x)$$

The antiderivative reverses differentiation. Given $f(x) = 2x$, the function $F(x) = x^2$ is an antiderivative because $(x^2)' = 2x$.

But $F(x) = x^2 + 5$ is also an antiderivative—its derivative is likewise $2x$. So is $x^2 - 17$, or $x^2 + \\pi$. Any function of the form $x^2 + C$ differentiates to $2x$.

Antiderivatives are not unique. They form a family of functions, all differing by constants.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Constant of Integration`,
    content: `
If $F(x)$ is one antiderivative of $f(x)$, then every antiderivative has the form:

$$F(x) + C$$

where $C$ is an arbitrary constant. This follows from a basic fact: if two functions have the same derivative on an interval, they differ by a constant.

The "$+ C$" in indefinite integrals is not optional notation—it represents the complete answer. Omitting it gives only one member of the family when infinitely many exist.

Initial conditions pin down $C$. If you know that $F(0) = 3$, for instance, you can solve for the specific constant that satisfies this requirement.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Notation`,
    content: `
The indefinite integral is written:

$$\\int f(x)\\, dx = F(x) + C$$

The integral sign $\\int$ without limits indicates an indefinite integral. The integrand $f(x)$ is the function being integrated. The differential $dx$ specifies the variable.

The result is a function (or family of functions), not a number. This contrasts with the [definite integral](!/calculus/integrals/definite), which produces a numerical value.

The notation mirrors the definite integral deliberately. The Fundamental Theorem of Calculus connects them: indefinite integrals provide the antiderivatives that definite integrals evaluate.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Symbols and Notations](!/math-symbols/calculus) →@

`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Basic Antiderivative Formulas`,
    content: `
Several antiderivatives appear constantly and should be memorized.

**Power rule** (for $n \\neq -1$):

$$\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C$$

**Reciprocal:**

$$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$

**Exponential:**

$$\\int e^x\\, dx = e^x + C$$

**Trigonometric:**

$$\\int \\cos x\\, dx = \\sin x + C \\qquad \\int \\sin x\\, dx = -\\cos x + C$$

The [special integrals](!/calculus/integrals/special) page provides a more complete list.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Linearity of Indefinite Integrals`,
    content: `
Indefinite integrals obey the same [linearity rules](!/calculus/integrals/rules) as definite integrals.

**Sum rule:**

$$\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$$

**Constant multiple rule:**

$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$

These rules reduce complex integrands to combinations of simpler ones. For example:

$$\\int (3x^2 + 5x - 2)\\, dx = 3 \\cdot \\frac{x^3}{3} + 5 \\cdot \\frac{x^2}{2} - 2x + C = x^3 + \\frac{5x^2}{2} - 2x + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Verifying Antiderivatives`,
    content: `
Integration has a built-in check: differentiate your answer.

If $\\int f(x)\\, dx = F(x) + C$, then $F'(x)$ must equal $f(x)$. If it doesn't, an error occurred.

For example, suppose you compute:

$$\\int \\sec^2 x\\, dx = \\tan x + C$$

Verify: $(\\tan x)' = \\sec^2 x$. Correct.

This check catches sign errors, missing constants, and algebraic mistakes. It works because differentiation is mechanical—once you have a candidate antiderivative, verification is straightforward.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Connection to Definite Integrals`,
    content: `
Indefinite and definite integrals serve different purposes but are linked by the Fundamental Theorem of Calculus.

The indefinite integral finds antiderivatives:

$$\\int f(x)\\, dx = F(x) + C$$

The definite integral uses an antiderivative to compute accumulated quantity:

$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

The constant $C$ cancels when evaluating $F(b) - F(a)$, so any antiderivative works. This connection, detailed on the [rules](!/calculus/integrals/rules) page, is why mastering indefinite integration enables computation of definite integrals.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Summary: The Indefinite-Integration Workflow`,
    content: `
Every indefinite integral on this page follows the same five-step procedure, whether the integrand is a single power function or a complicated composition that requires a technique. The table below collects the workflow with a pointer to the sibling page where each step&apos;s detail lives — special integrals for the formula library, rules for linearity and the FTC, techniques for transformations. Use this as a reminder while working a problem: every step matters, and skipping the final verification is the single most common source of errors.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
  title: `Reversing Differentiation`,
  content: `
Differentiation takes a function and produces its rate of change. The indefinite integral reverses this process: given a rate of change, find the original function.

If $F'(x) = f(x)$, then $F$ is an antiderivative of $f$. The indefinite integral collects all such antiderivatives:

$$\\int f(x)\\, dx = F(x) + C$$

The constant $C$ reflects a fundamental ambiguity. Since the derivative of any constant is zero, functions differing by a constant share the same derivative. The family $F(x) + C$ captures every function whose derivative equals $f(x)$.

Finding antiderivatives is the central challenge. Unlike differentiation, which follows mechanical rules, integration demands pattern recognition, technique, and sometimes ingenuity.
`
};

const faqQuestions = {
  obj1: {
    question: "What is an antiderivative?",
    answer: "A function F is an antiderivative of f if F'(x) = f(x). Antiderivatives reverse differentiation. They are not unique—if F is an antiderivative of f, then so is F + C for any constant C, forming a family of functions.",
    sectionId: "1"
  },
  obj2: {
    question: "Why do indefinite integrals have +C?",
    answer: "The constant of integration C represents the complete family of antiderivatives. Since the derivative of any constant is zero, functions differing by a constant share the same derivative. Omitting +C gives only one member when infinitely many exist.",
    sectionId: "2"
  },
  obj3: {
    question: "What does indefinite integral notation mean?",
    answer: "The notation ∫f(x) dx = F(x) + C means the indefinite integral. The ∫ symbol without limits indicates an indefinite integral, f(x) is the integrand, and dx specifies the variable. The result is a function family, not a number.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the basic antiderivative formulas?",
    answer: "Key formulas include: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1; ∫1/x dx = ln|x| + C; ∫eˣ dx = eˣ + C; ∫cos x dx = sin x + C; ∫sin x dx = -cos x + C. These should be memorized.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the linearity rules for indefinite integrals?",
    answer: "Sum rule: ∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx. Constant multiple rule: ∫c·f(x) dx = c∫f(x) dx. These rules let you break complex integrands into simpler pieces.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you verify an antiderivative?",
    answer: "Differentiate your answer. If ∫f(x) dx = F(x) + C, then F'(x) must equal f(x). This check catches sign errors, missing constants, and algebraic mistakes because differentiation is mechanical and straightforward.",
    sectionId: "6"
  },
  obj7: {
    question: "How are indefinite and definite integrals related?",
    answer: "The Fundamental Theorem of Calculus connects them. Indefinite integrals find antiderivatives: ∫f(x) dx = F(x) + C. Definite integrals evaluate: ∫ₐᵇ f(x) dx = F(b) − F(a). The constant C cancels when computing F(b) − F(a).",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Indefinite Integrals",
    "description": "Learn indefinite integrals and antiderivatives: the constant of integration, notation, basic formulas (power rule, exponential, trig), linearity rules, verification, and connection to definite integrals.",
    "url": "https://www.learnmathclass.com/calculus/integrals/indefinite",
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
      "name": "Indefinite Integrals"
    },
    "teaches": [
      "Definition and properties of antiderivatives",
      "The constant of integration and its meaning",
      "Indefinite integral notation",
      "Basic antiderivative formulas",
      "Linearity rules for indefinite integrals",
      "Verifying antiderivatives by differentiation",
      "The indefinite-integration workflow"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Indefinite Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/indefinite"
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
    obj4Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Indefinite Integrals: Antiderivatives & Formulas | Learn Math Class",
      description: "Learn indefinite integrals and antiderivatives: the constant of integration, notation, basic formulas (power rule, exponential, trig), linearity rules, verification, and connection to definite integrals.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/indefinite",
      name: "Indefinite Integrals"
    },
  }
}
   }

export default function PageTemplate({seoData, sectionsContent, introContent, obj4Table, summaryTable, faqQuestions, schemas}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
          <div key={'obj4-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj4Table }} />,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Indefinite Integrals</h1>
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