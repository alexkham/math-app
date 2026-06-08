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
  "logarithmic inequalities",
  "solve log inequalities",
  "log inequality examples",
  "logarithm inequality rules",
  "log base greater than 1",
  "log base less than 1",
  "when to flip inequality sign log",
  "log inequality domain",
  "compound log inequalities",
  "solving ln inequalities",
  "logarithmic inequality steps",
  "log x greater than",
  "log inequality direction",
  "monotonicity logarithm",
  "log inequality graphical"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // Direction rules — comparison: how each inequality form converts under each base case
  // (placed after obj3, since it consolidates obj1 + obj2 + obj3)
  const directionTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Inequality form</th>
      <th style="${tableHeaders.comparison} text-align: center;">Base a &gt; 1<br/>(direction preserved)</th>
      <th style="${tableHeaders.comparison} text-align: center;">Base 0 &lt; a &lt; 1<br/>(direction reversed)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x) &gt; k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">x &gt; aᵏ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">x &lt; aᵏ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(x) &lt; k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">x &lt; aᵏ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">x &gt; aᵏ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">logₐ(M) &gt; logₐ(N)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">M &gt; N</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">M &lt; N</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">logₐ(M) &lt; logₐ(N)</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">M &lt; N</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">M &gt; N</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — summary capstone: the page's techniques in one place
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Situation</th>
      <th style="${tableHeaders.summary}">Technique</th>
      <th style="${tableHeaders.summary}">Worked example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single log vs constant, base &gt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">convert with direction preserved</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(x) &gt; 3 → x &gt; 8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single log vs constant, 0 &lt; base &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">convert with direction reversed</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₍₁⁄₂₎(x) &gt; 3 → x &lt; 1⁄8</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Logs on both sides, same base</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">drop the logs; reverse the comparison if base &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₃(2x+1) &gt; log₃(x+4) → x &gt; 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Composite argument</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve algebraically, then intersect with the domain (every argument &gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(x−3) &gt; 1 → x &gt; 5</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Compound (bounded)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">split into two inequalities, solve each, intersect</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 &lt; log₂(x) &lt; 4 → 2 &lt; x &lt; 16</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiple logs, same base</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">condense with logarithm rules first, then convert</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">log₂(x) + log₂(x−2) &gt; 3 → x &gt; 4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Visual check</td>
      <td style="padding: 12px 15px; color: #34495e;">read &quot;curve above the line y = k&quot; on the <a href="/algebra/logarithms/graphs" style="${linkStyle}">graph</a> — direction follows whether the curve rises or falls</td>
      <td style="padding: 12px 15px; color: #34495e;">a &gt; 1: solution to the right; 0 &lt; a &lt; 1: solution to the left</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  
obj0: {
  title: `Key Terms`,
  content: `
## Inequality Concepts
 
- [Logarithmic Inequality](!/algebra/definitions#logarithmic_inequality) — inequality direction depends on whether the base is greater than or less than $1$
- [Monotonicity](!/algebra/definitions#monotonicity) — the property that controls whether direction is preserved or reversed
- [Base (of a Logarithm)](!/algebra/definitions#base_(of_a_logarithm)) — $a > 1$ preserves direction; $0 < a < 1$ reverses it
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm)) — domain restriction: all arguments must remain positive`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Base Greater Than One: Direction Preserved`,
    content: `When $a > 1$, the function $f(x) = \\log_a(x)$ is strictly increasing. Larger inputs produce larger outputs, so inequality direction is preserved when converting between logarithmic and exponential forms.

For $\\log_a(x) > k$ with $a > 1$:
$$\\log_a(x) > k \\implies x > a^k$$

For $\\log_a(x) < k$ with $a > 1$:
$$\\log_a(x) < k \\implies x < a^k$$

Example: Solve $\\log_2(x) > 3$.
$$x > 2^3$$
$$x > 8$$

Combined with the domain requirement $x > 0$, the solution is $x > 8$.

Example: Solve $\\log_5(x) \\leq 2$.
$$x \\leq 5^2$$
$$x \\leq 25$$

With domain: $0 < x \\leq 25$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Base Between Zero and One: Direction Reversed`,
    content: `When $0 < a < 1$, the function $f(x) = \\log_a(x)$ is strictly decreasing. Larger inputs produce smaller outputs, so inequality direction reverses.

For $\\log_a(x) > k$ with $0 < a < 1$:
$$\\log_a(x) > k \\implies x < a^k$$

For $\\log_a(x) < k$ with $0 < a < 1$:
$$\\log_a(x) < k \\implies x > a^k$$

Example: Solve $\\log_{1/2}(x) > 3$.

Since the base $1/2 < 1$, reverse the inequality:
$$x < \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$$

With domain: $0 < x < \\frac{1}{8}$.

Example: Solve $\\log_{0.1}(x) \\leq -2$.

Reverse direction:
$$x \\geq (0.1)^{-2} = 100$$

Solution: $x \\geq 100$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Logarithms on Both Sides`,
    content: `When the same base appears on both sides, use monotonicity to compare arguments directly.

For $a > 1$:
$$\\log_a(M) > \\log_a(N) \\implies M > N$$

For $0 < a < 1$:
$$\\log_a(M) > \\log_a(N) \\implies M < N$$

Example: Solve $\\log_3(2x + 1) > \\log_3(x + 4)$ where base $3 > 1$.
$$2x + 1 > x + 4$$
$$x > 3$$

Check domain: $2x + 1 > 0$ requires $x > -1/2$; $x + 4 > 0$ requires $x > -4$. The intersection with $x > 3$ is simply $x > 3$.

Example: Solve $\\log_{1/3}(x - 1) < \\log_{1/3}(5)$ where base $1/3 < 1$.

Reverse when comparing arguments:
$$x - 1 > 5$$
$$x > 6$$

Domain requires $x - 1 > 0$, so $x > 1$. Final solution: $x > 6$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Domain Considerations`,
    content: `Every logarithmic argument must be positive. This constraint intersects with the algebraic solution, often restricting the answer.

Example: Solve $\\log_2(x - 3) > 1$.

Algebraically:
$$x - 3 > 2^1 = 2$$
$$x > 5$$

Domain: $x - 3 > 0 \\implies x > 3$.

Intersection: $x > 5$ satisfies $x > 3$, so the solution is $x > 5$.

Example: Solve $\\log_4(x + 2) < 0$.

Algebraically:
$$x + 2 < 4^0 = 1$$
$$x < -1$$

Domain: $x + 2 > 0 \\implies x > -2$.

Intersection: $-2 < x < -1$.

Failing to intersect with domain constraints is a common error. Always state domain restrictions at the start and combine them with the algebraic result.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Compound Inequalities`,
    content: `Compound inequalities bound the logarithm between two values.

Example: Solve $1 < \\log_2(x) < 4$.

Split into two inequalities with base $2 > 1$:
$$\\log_2(x) > 1 \\implies x > 2$$
$$\\log_2(x) < 4 \\implies x < 16$$

Combined: $2 < x < 16$.

Example: Solve $-1 \\leq \\log_3(x + 1) \\leq 2$.

$$\\log_3(x+1) \\geq -1 \\implies x + 1 \\geq 3^{-1} = \\frac{1}{3} \\implies x \\geq -\\frac{2}{3}$$
$$\\log_3(x+1) \\leq 2 \\implies x + 1 \\leq 9 \\implies x \\leq 8$$

Domain: $x + 1 > 0 \\implies x > -1$.

Intersection: $-\\frac{2}{3} \\leq x \\leq 8$ already satisfies $x > -1$.

Solution: $-\\frac{2}{3} \\leq x \\leq 8$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Inequalities with Combined Logarithms`,
    content: `When [logarithm rules](!/algebra/logarithms/rules) are needed, condense first, then solve.

Example: Solve $\\log_2(x) + \\log_2(x - 2) > 3$.

Condense:
$$\\log_2(x(x - 2)) > 3$$
$$\\log_2(x^2 - 2x) > 3$$

Since base $2 > 1$:
$$x^2 - 2x > 8$$
$$x^2 - 2x - 8 > 0$$
$$(x - 4)(x + 2) > 0$$

This holds when $x < -2$ or $x > 4$.

Domain: $x > 0$ and $x - 2 > 0$ gives $x > 2$.

Intersection with $x > 4$ or $x < -2$: only $x > 4$ survives.

Solution: $x > 4$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Graphical Interpretation`,
    content: `The [graph](!/algebra/logarithms/graphs) of $y = \\log_a(x)$ provides visual understanding of why direction depends on base.

For $a > 1$, the curve rises from left to right. The inequality $\\log_a(x) > k$ asks: where is the curve above the horizontal line $y = k$? Since the curve is increasing, this occurs to the right of the intersection point — for $x > a^k$.

For $0 < a < 1$, the curve falls from left to right. The inequality $\\log_a(x) > k$ asks the same question, but now the curve is above the line to the left of the intersection — for $x < a^k$.

The vertical asymptote at $x = 0$ visually enforces the domain restriction. No portion of the graph exists for $x \\leq 0$, so no solutions can come from that region.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Summary of Techniques`,
    content: `Solving logarithmic inequalities reduces to a small set of techniques selected by the form of the inequality. The base sets the direction, the form sets the conversion, and the domain trims the result. The table below collects each situation handled on this page with the technique and a worked example.`,
    before: ``,
    after: ``,
    link: '',
  },
};

  const introContent = {
  id: "intro",
 title: `When Direction Depends on Base`,
  content: `Solving [logarithmic](!/algebra/logarithms) inequalities follows similar algebraic steps as [equations](!/algebra/logarithms/equations), with one critical addition: the base determines whether inequality direction is preserved or reversed. This behavior stems from the [monotonicity property](!/algebra/logarithms/properties) — logarithms with base greater than one are increasing functions, while those with base between zero and one are decreasing.`,
};

const faqQuestions = {
  obj1: {
    question: "How do you solve log inequalities when base > 1?",
    answer: "Direction is preserved. For log_a(x) > k with a > 1, convert to x > a^k. For log_a(x) < k, convert to x < a^k. Always intersect with domain x > 0.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you solve log inequalities when base is between 0 and 1?",
    answer: "Direction reverses. For log_a(x) > k with 0 < a < 1, convert to x < a^k. For log_a(x) < k, convert to x > a^k. The decreasing function flips the inequality.",
    sectionId: "2"
  },
  obj3: {
    question: "When do you flip the inequality sign in logarithmic inequalities?",
    answer: "Flip when the base is between 0 and 1 (like log_{1/2} or log_{0.1}). These logarithms are decreasing functions, so larger inputs give smaller outputs, reversing the inequality direction.",
    sectionId: "2"
  },
  obj4: {
    question: "How do you compare two logarithms in an inequality?",
    answer: "For same base > 1: log_a(M) > log_a(N) means M > N. For same base between 0 and 1: log_a(M) > log_a(N) means M < N. Always check domain restrictions.",
    sectionId: "3"
  },
  obj5: {
    question: "Why is domain important in log inequalities?",
    answer: "Every log argument must be positive. The algebraic solution must be intersected with domain restrictions. For log(x-3) > 1, you need x > 5 AND x > 3, giving x > 5.",
    sectionId: "4"
  },
  obj6: {
    question: "How do you solve compound log inequalities?",
    answer: "Split into two inequalities, solve each, then find intersection. For 1 < log₂(x) < 4: solve log₂(x) > 1 giving x > 2, and log₂(x) < 4 giving x < 16. Combined: 2 < x < 16.",
    sectionId: "5"
  },
  obj7: {
    question: "How do you solve log inequalities with multiple logs?",
    answer: "Use log rules to combine into single logarithm first. For log(x) + log(x-2) > 3, combine to log(x(x-2)) > 3, then solve the resulting inequality and check domain.",
    sectionId: "6"
  },
  obj8: {
    question: "Why does the base determine inequality direction?",
    answer: "Logarithms with base > 1 are increasing (larger x gives larger output), preserving direction. Base between 0 and 1 creates decreasing functions, reversing direction.",
    sectionId: "7"
  },
  obj9: {
    question: "What is the solution to log₂(x) > 3?",
    answer: "Since base 2 > 1, direction is preserved: x > 2³ = 8. With domain x > 0, the solution is x > 8.",
    sectionId: "1"
  },
  obj10: {
    question: "What is the solution to log_{1/2}(x) > 3?",
    answer: "Since base 1/2 < 1, direction reverses: x < (1/2)³ = 1/8. With domain x > 0, the solution is 0 < x < 1/8.",
    sectionId: "2"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Logarithmic Inequalities",
    "description": "Learn to solve logarithmic inequalities: when to preserve or reverse direction based on base, domain restrictions, compound inequalities, and graphical interpretation.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/inequalities",
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
      "name": "Logarithmic Inequalities"
    },
    "teaches": [
      "Solving log inequalities with base > 1",
      "Solving log inequalities with 0 < base < 1",
      "Comparing logarithms on both sides",
      "Domain restrictions in log inequalities",
      "Compound logarithmic inequalities",
      "Combining logarithms in inequalities",
      "Graphical interpretation"
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
        "name": "Logarithmic Inequalities",
        "item": "https://www.learnmathclass.com/algebra/logarithms/inequalities"
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
    directionTable,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Logarithmic Inequalities: Solving by Base Type | Learn Math Class",
      description: "Learn to solve logarithmic inequalities: when to preserve or reverse direction based on base, domain restrictions, compound inequalities, and graphical interpretation.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/inequalities",
      name: "Logarithmic Inequalities"
    },
  }
}
   }

// export default function InequalitiesPage({seoData,sectionsContent , introContent}) {


export default function InequalitiesPage({
  seoData,
  sectionsContent,
  introContent,
  directionTable,
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
          <div
            key={'direction-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: directionTable }}
          />,
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
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logarithmic Inequalities</h1>
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