import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'



export async function getStaticProps(){
const keyWords = [
  "quadratic inequalities",
  "solving quadratic inequalities",
  "quadratic inequality discriminant",
  "sign chart method",
  "parabola inequality",
  "ax2 + bx + c inequality",
  "quadratic inequality examples",
  "interval notation quadratic",
  "two roots inequality",
  "quadratic inequality graph",
  "positive negative quadratic",
  "reducible inequalities",
  "factored quadratic inequality",
  "leading coefficient sign"
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
  obj0: {
  title: `Key Terms`,
  content: `
## Core Concepts
 
- [Quadratic Inequality](!/algebra/definitions#quadratic_inequality) — $ax^2 + bx + c > 0$; roots are boundaries, parabola determines sign regions
- [Sign Analysis](!/algebra/definitions#sign_analysis) — sign chart partitions the number line into intervals of constant sign
- [Interval Notation](!/algebra/definitions#interval_notation) — express the solution as intervals or unions
 
## From Other Categories
 
- [Discriminant](!/algebra/definitions#discriminant) — $\\Delta = b^2 - 4ac$ determines the number of boundary points`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition and Standard Form`,
    content: `A quadratic inequality in one variable is any inequality that can be written as

$$ax^2 + bx + c > 0$$

(or with $<$, $\\leq$, or $\\geq$), where $a$, $b$, $c$ are real constants and $a \\neq 0$. The expression on the left is a quadratic polynomial, and the inequality asks where that polynomial takes positive or negative values.

Every quadratic inequality can be brought into standard form by moving all terms to one side. The inequality $x^2 < 3x + 10$ becomes $x^2 - 3x - 10 < 0$ after subtracting $3x + 10$ from both sides. The right-hand side is zero, and the question reduces to determining the sign of the left-hand side across the number line.

The solution depends entirely on the roots of the corresponding [quadratic equation](!/algebra/equations/quadratic) $ax^2 + bx + c = 0$. These roots, if they exist, are the boundary points — the values where the expression changes from positive to negative or vice versa. The sign of $a$ determines which regions are positive and which are negative.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Role of the Discriminant`,
    content: `The discriminant $\\Delta = b^2 - 4ac$ determines how many real roots the quadratic has, and therefore how many boundary points appear on the number line. This settles the structure of the solution before any interval testing begins.

When $\\Delta > 0$, two distinct real roots $r_1 < r_2$ exist. They divide the number line into three intervals: $(-\\infty, r_1)$, $(r_1, r_2)$, and $(r_2, \\infty)$. The sign of the quadratic alternates across these intervals, and the solution is either the middle interval, the two outer intervals, or some combination depending on the inequality direction and the sign of $a$.

When $\\Delta = 0$, one repeated root $r$ exists. The quadratic factors as $a(x - r)^2$, which is a perfect square scaled by $a$. The expression equals zero at $x = r$ and has the sign of $a$ everywhere else. The number line is effectively split into two intervals with identical sign, separated by a single point of zero.

When $\\Delta < 0$, no real roots exist. The quadratic never touches zero and maintains one sign throughout the entire real line — the sign of $a$. The inequality is either satisfied everywhere or nowhere, with no intervals to analyze.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving When the Discriminant Is Positive`,
    content: `When $\\Delta > 0$, the two roots $r_1 < r_2$ create three intervals. The sign of the quadratic in these intervals follows a fixed pattern determined by the leading coefficient $a$.

If $a > 0$, the parabola opens upward. The quadratic is positive on the outer intervals $(-\\infty, r_1)$ and $(r_2, \\infty)$, and negative on the inner interval $(r_1, r_2)$. The expression dips below zero between the roots and rises above zero outside them.

If $a < 0$, the parabola opens downward. The signs are reversed: the quadratic is negative on the outer intervals and positive on the inner interval $(r_1, r_2)$. The expression rises above zero only between the roots.

To solve $x^2 - 5x + 4 > 0$, find the roots of $x^2 - 5x + 4 = 0$. Factoring gives $(x - 1)(x - 4) = 0$, so $r_1 = 1$ and $r_2 = 4$. Since $a = 1 > 0$, the expression is positive outside the roots. The solution is $(-\\infty, 1) \\cup (4, \\infty)$.

To solve $x^2 - 5x + 4 \\leq 0$ instead, select the interval where the expression is non-positive: $[1, 4]$. The endpoints are included because the inequality is non-strict and the expression equals zero at the roots.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Solving When the Discriminant Is Zero`,
    content: `When $\\Delta = 0$, the quadratic has a single repeated root $r = -\\frac{b}{2a}$, and the expression factors as $a(x - r)^2$. The square $(x - r)^2$ is non-negative for all real $x$ and equals zero only at $x = r$. The sign of the entire expression is therefore determined by $a$ alone, except at the single point $x = r$ where the expression is zero.

If $a > 0$: the expression is positive everywhere except at $x = r$, where it is zero. The inequality $ax^2 + bx + c > 0$ is satisfied by all $x \\neq r$, and the solution is $(-\\infty, r) \\cup (r, \\infty)$. The non-strict version $ax^2 + bx + c \\geq 0$ is satisfied by every real number: $(-\\infty, \\infty)$.

If $a < 0$: the expression is negative everywhere except at $x = r$, where it is zero. The inequality $ax^2 + bx + c < 0$ is satisfied by all $x \\neq r$, and the non-strict version $ax^2 + bx + c \\leq 0$ holds for all real $x$. The inequality $ax^2 + bx + c > 0$ has no solution — a negative times a non-negative square is never positive.

Consider $x^2 - 6x + 9 > 0$. The discriminant is $36 - 36 = 0$, and the expression factors as $(x - 3)^2$. This is positive for all $x \\neq 3$ and zero at $x = 3$. The solution is $(-\\infty, 3) \\cup (3, \\infty)$, the entire real line minus one point.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Solving When the Discriminant Is Negative`,
    content: `When $\\Delta < 0$, the quadratic has no real roots. It never equals zero and never changes sign. The sign of the expression for every real $x$ is the sign of the leading coefficient $a$.

If $a > 0$: the expression is positive everywhere. The inequality $ax^2 + bx + c > 0$ (or $\\geq 0$) is satisfied by every real number, and the solution is $(-\\infty, \\infty)$. The inequality $ax^2 + bx + c < 0$ (or $\\leq 0$) has no solution.

If $a < 0$: the expression is negative everywhere. The inequality $ax^2 + bx + c < 0$ (or $\\leq 0$) holds for all $x$, and $ax^2 + bx + c > 0$ (or $\\geq 0$) has no solution.

The equation $x^2 + x + 1 = 0$ has $\\Delta = 1 - 4 = -3 < 0$, and since $a = 1 > 0$, the expression $x^2 + x + 1$ is positive for every real $x$. The inequality $x^2 + x + 1 > 0$ is universally true. The inequality $x^2 + x + 1 < 0$ is universally false.

No sign chart is needed in this case. The absence of real roots means no critical points exist, so there is only one interval — the entire number line — and its sign is determined by $a$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Sign Chart Method`,
    content: `The sign chart provides a systematic alternative to reasoning from the parabola's shape. It works by tracking the sign of each linear factor across the intervals created by the roots.

For the inequality $(x - 1)(x - 4) > 0$, the roots are $r_1 = 1$ and $r_2 = 4$, creating three intervals. In the interval $(-\\infty, 1)$, both factors $x - 1$ and $x - 4$ are negative, so their product is positive. In $(1, 4)$, the factor $x - 1$ is positive while $x - 4$ is negative, so the product is negative. In $(4, \\infty)$, both factors are positive, so the product is positive. The sign chart summarizes this:

$$\\begin{array}{c|ccc} & x < 1 & 1 < x < 4 & x > 4 \\\\ \\hline (x-1) & - & + & + \\\\ (x-4) & - & - & + \\\\ \\hline \\text{product} & + & - & + \\end{array}$$

The solution to the $> 0$ inequality consists of the intervals where the product is positive: $(-\\infty, 1) \\cup (4, \\infty)$.

When the quadratic does not factor neatly, the roots from the quadratic formula serve the same purpose. The sign chart does not require integer or rational roots — any pair of real numbers works as boundary points. The method fails only when no real roots exist ($\\Delta < 0$), in which case the sign is constant and no chart is needed.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Connection to the Parabola`,
    content: `The inequality $ax^2 + bx + c > 0$ asks a geometric question: where does the parabola $y = ax^2 + bx + c$ lie above the $x$-axis? The inequality $ax^2 + bx + c < 0$ asks where it lies below.

When $a > 0$, the parabola opens upward. It dips below the axis between its roots (if they exist) and rises above the axis outside them. The $> 0$ inequality selects the outer regions; the $< 0$ inequality selects the inner region.

When $a < 0$, the parabola opens downward. It rises above the axis between its roots and falls below outside. The $> 0$ inequality selects the inner region; the $< 0$ inequality selects the outer regions.

This geometric reading makes the sign chart unnecessary for many students — once the roots and the direction of opening are identified, the solution is visible from the shape of the curve. The sign chart is the algebraic encoding of the same information, and either approach yields identical results.

The vertex of the parabola, located at $x = -\\frac{b}{2a}$, is the point of maximum depth below the axis (when $a > 0$) or maximum height above it (when $a < 0$). Its position does not directly affect the solution set of the inequality, but it determines how far the parabola penetrates into the region of the opposite sign.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Reducible Inequalities`,
    content: `Certain inequalities of degree higher than two can be reduced to quadratic inequalities through substitution, following the same strategy used for [reducible equations](!/algebra/equations/quadratic).

The bi-quadratic inequality $x^4 - 5x^2 + 4 > 0$ becomes $u^2 - 5u + 4 > 0$ with the substitution $u = x^2$. The quadratic factors as $(u - 1)(u - 4) > 0$, which is satisfied when $u < 1$ or $u > 4$. Back-substituting: $x^2 < 1$ gives $-1 < x < 1$, and $x^2 > 4$ gives $x < -2$ or $x > 2$. The complete solution is $(-\\infty, -2) \\cup (-1, 1) \\cup (2, \\infty)$.

The back-substitution step requires care. The condition $u = x^2$ forces $u \\geq 0$, so any solution for $u$ that is negative produces no real values of $x$. Additionally, each positive value of $u$ splits into two symmetric values $x = \\pm\\sqrt{u}$, potentially doubling the number of boundary points on the $x$-axis.

The substitution pattern extends to any inequality of the form $a[f(x)]^2 + b[f(x)] + c > 0$. Setting $u = f(x)$ reduces it to a quadratic inequality in $u$, and the solution in $u$ is translated back through the function $f$ — subject to whatever domain and range constraints $f$ imposes.`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: 'intro',
  title: `Where the Parabola Meets the Number Line`,
  content: `A quadratic inequality asks not where a parabola crosses the horizontal axis, but where it lies above or below it. The roots of the corresponding quadratic equation mark the boundaries, the leading coefficient determines which way the parabola opens, and the discriminant decides whether there are two boundaries, one, or none. The solution is always readable from the shape of the parabola, and the sign chart formalizes that reading into a systematic procedure.`,
};

const faqQuestions = {
  obj1: {
    question: "What is a quadratic inequality?",
    answer: "A quadratic inequality has the form ax² + bx + c > 0 (or <, ≤, ≥) where a ≠ 0. It asks where the quadratic expression is positive or negative. Solutions depend on the roots of the corresponding equation and the sign of the leading coefficient a.",
    sectionId: "1"
  },
  obj2: {
    question: "How does the discriminant affect quadratic inequality solutions?",
    answer: "The discriminant Δ = b² - 4ac determines structure. If Δ > 0: two roots create three intervals. If Δ = 0: one repeated root creates two regions with the same sign. If Δ < 0: no real roots means one sign everywhere (determined by a).",
    sectionId: "2"
  },
  obj3: {
    question: "How do you solve a quadratic inequality with two roots?",
    answer: "Find the roots r₁ < r₂. If a > 0: positive outside roots (union of outer intervals), negative between them. If a < 0: positive between roots, negative outside. Select intervals matching the inequality direction.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you solve a quadratic inequality with one repeated root?",
    answer: "The quadratic factors as a(x - r)². Since (x - r)² ≥ 0 always, the expression has the sign of a everywhere except at x = r where it's zero. For a > 0 and > 0: solution is all x ≠ r. For ≥ 0: all real numbers.",
    sectionId: "4"
  },
  obj5: {
    question: "What if a quadratic inequality has no real roots?",
    answer: "When Δ < 0, the quadratic never equals zero and maintains one sign everywhere — the sign of a. If a > 0: expression is always positive, so > 0 holds for all x. If a < 0: always negative, so < 0 holds for all x.",
    sectionId: "5"
  },
  obj6: {
    question: "How does the sign chart method work for quadratic inequalities?",
    answer: "Factor the quadratic, mark roots on a number line creating intervals. Track each factor's sign in each interval (negative left of its root, positive right). Multiply signs to get the product's sign. Select intervals matching the inequality.",
    sectionId: "6"
  },
  obj7: {
    question: "How does the parabola help solve quadratic inequalities?",
    answer: "The inequality ax² + bx + c > 0 asks where the parabola y = ax² + bx + c is above the x-axis; < 0 asks where it's below. If a > 0 (opens up): above axis outside roots. If a < 0 (opens down): above axis between roots.",
    sectionId: "7"
  },
  obj8: {
    question: "What are reducible quadratic inequalities?",
    answer: "Higher-degree inequalities like x⁴ - 5x² + 4 > 0 become quadratic with substitution u = x². Solve for u, then back-substitute. Each positive u gives two x values (±√u), and u ≥ 0 is required since u = x².",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Quadratic Inequalities",
    "description": "Master quadratic inequalities: discriminant cases, sign chart method, parabola interpretation, solving with two roots, one root, or no real roots, and reducible bi-quadratic inequalities.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/quadratic",
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
      "name": "Quadratic Inequalities"
    },
    "teaches": [
      "Standard form ax² + bx + c > 0",
      "Discriminant determines solution structure",
      "Sign chart method for factored forms",
      "Parabola above/below x-axis interpretation",
      "Two roots, one root, and no roots cases",
      "Reducible bi-quadratic inequalities"
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
        "name": "Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Quadratic Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/quadratic"
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
      title: "Quadratic Inequalities: Sign Charts & Parabolas | Learn Math Class",
      description: "Master quadratic inequalities: discriminant cases, sign chart method, parabola interpretation, solving with two roots, one root, or no real roots, and reducible bi-quadratic inequalities.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/quadratic",
      name: "Quadratic Inequalities"
    },
  }
}
   }

   export default function QuadraticInequalitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Quadratic Inequalities</h1>
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
