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
  "absolute value inequalities",
  "solving absolute value inequalities",
  "less than absolute value",
  "greater than absolute value",
  "compound inequality conversion",
  "absolute value distance",
  "conjunction disjunction inequality",
  "absolute value examples",
  "interval notation absolute value",
  "squaring method inequality",
  "absolute value both sides",
  "geometric interpretation absolute value",
  "linear absolute value inequality",
  "quadratic absolute value inequality"
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
 
- [Absolute Value Inequality](!/algebra/definitions#absolute_value_inequality) — less-than gives a bounded interval, greater-than gives two rays
- [Compound Inequality](!/algebra/definitions#compound_inequality) — the conversion target: conjunction for $<$, disjunction for $>$
- [Interval Notation](!/algebra/definitions#interval_notation) — express conjunction as $(a, b)$ or $[a, b]$, disjunction as union
 
## From Other Categories
 
- [Absolute Value](!/algebra/definitions#absolute_value) — distance from zero; always non-negative`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Two Fundamental Forms`,
    content: `Every absolute value inequality involving a single absolute value term and a constant reduces to one of two forms, each with its own conversion rule.

The "less than" form $|f(x)| < k$ states that the expression $f(x)$ is within $k$ units of zero. This converts to a conjunction — a double inequality:

$$-k < f(x) < k$$

Both conditions must hold simultaneously. The solution is the set of $x$ values for which $f(x)$ lies strictly between $-k$ and $k$.

The "greater than" form $|f(x)| > k$ states that $f(x)$ is more than $k$ units from zero. This converts to a disjunction — two separate inequalities:

$$f(x) < -k \\quad \\text{or} \\quad f(x) > k$$

At least one condition must hold. The solution is the set of $x$ values for which $f(x)$ falls outside the interval $[-k, k]$.

The non-strict versions $\\leq$ and $\\geq$ work identically, with the boundary values included rather than excluded. The conversions are the same; only the inequality symbols change from strict to non-strict throughout.

These two translations — less-than becomes a conjunction, greater-than becomes a disjunction — are the entire method. Everything that follows is the application of this principle to increasingly complex expressions inside the absolute value.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Solving the Less-Than Form`,
    content: `The inequality $|f(x)| < k$ converts to $-k < f(x) < k$. The value of $k$ determines whether a solution exists before any algebra begins.

When $k > 0$, the double inequality defines a bounded region. The two inequalities $f(x) > -k$ and $f(x) < k$ are solved simultaneously, and the solution is their intersection — the set of $x$ values satisfying both.

When $k = 0$, the inequality $|f(x)| < 0$ asks for the [absolute value](!/algebra/equations/absolute-value) to be strictly negative, which is impossible. The solution set is empty. The non-strict version $|f(x)| \\leq 0$ has a solution only at the roots of $f(x) = 0$, because zero is the only non-negative value that satisfies $\\leq 0$.

When $k < 0$, both $|f(x)| < k$ and $|f(x)| \\leq k$ have empty solution sets. Absolute value is never negative, so it can never be less than a negative number.

For linear $f(x)$, the double inequality is a three-part chain solved by isolating $x$ in the middle. The inequality $|2x - 3| < 5$ becomes $-5 < 2x - 3 < 5$. Adding $3$ throughout: $-2 < 2x < 8$. Dividing by $2$: $-1 < x < 4$. The solution is the open interval $(-1, 4)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving the Greater-Than Form`,
    content: `The inequality $|f(x)| > k$ converts to $f(x) < -k$ or $f(x) > k$. Each part is solved independently, and the solution is the union of the two individual solution sets.

When $k > 0$, each part contributes a separate region, and the union typically produces two rays — one extending to the left and one to the right.

When $k = 0$, the inequality $|f(x)| > 0$ asks where $f(x)$ is nonzero. The solution is all real numbers except the roots of $f(x) = 0$. The non-strict version $|f(x)| \\geq 0$ is satisfied by every real number, since absolute value is always non-negative.

When $k < 0$, the inequality $|f(x)| > k$ is satisfied by every real number — absolute value is always at least zero, which exceeds any negative number. The solution is $(-\\infty, \\infty)$.

For a linear example: $|4x + 1| \\geq 7$ becomes $4x + 1 \\leq -7$ or $4x + 1 \\geq 7$. From the first: $4x \\leq -8$, so $x \\leq -2$. From the second: $4x \\geq 6$, so $x \\geq \\frac{3}{2}$. The solution is $(-\\infty, -2] \\cup [\\frac{3}{2}, \\infty)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Worked Examples with Linear Expressions`,
    content: `When the expression inside the absolute value is linear, the compound inequality after conversion is also linear, and the solution follows from the methods on the [linear inequalities](!/algebra/inequalities/linear) page.

Solve $|3x - 7| < 2$. Convert: $-2 < 3x - 7 < 2$. Add $7$: $5 < 3x < 9$. Divide by $3$: $\\frac{5}{3} < x < 3$. The solution is $\\left(\\frac{5}{3}, 3\\right)$.

Solve $|1 - 2x| \\geq 5$. Convert: $1 - 2x \\leq -5$ or $1 - 2x \\geq 5$. From the first: $-2x \\leq -6$, so $x \\geq 3$ (direction flips when dividing by $-2$). From the second: $-2x \\geq 4$, so $x \\leq -2$. The solution is $(-\\infty, -2] \\cup [3, \\infty)$.

Solve $|5x + 3| < -1$. No conversion needed — absolute value is never negative, so it is certainly never less than $-1$. The solution set is empty.

Solve $|x - 4| > 0$. Convert: $x - 4 < 0$ or $x - 4 > 0$, meaning $x < 4$ or $x > 4$. This is every real number except $x = 4$. The solution is $(-\\infty, 4) \\cup (4, \\infty)$, or equivalently $\\mathbb{R} \\setminus \\{4\\}$.

In every linear case, the less-than form produces a single bounded interval, and the greater-than form produces two rays. The center of symmetry is the root of $f(x) = 0$, and the radius is determined by $k$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Absolute Value Inequalities with Quadratic or Other Expressions`,
    content: `When the expression inside the absolute value is not linear, the compound inequality after conversion requires more powerful methods — typically the sign chart.

Solve $|x^2 - 4| < 5$. Convert to $-5 < x^2 - 4 < 5$. This is two simultaneous inequalities: $x^2 - 4 > -5$ and $x^2 - 4 < 5$.

From $x^2 - 4 > -5$: $x^2 > -1$. Since $x^2 \\geq 0$ for all real $x$, this holds everywhere. It imposes no restriction.

From $x^2 - 4 < 5$: $x^2 < 9$, which gives $-3 < x < 3$.

The intersection of "all real numbers" and "$-3 < x < 3$" is simply $(-3, 3)$.

Solve $|x^2 - 7x + 10| \\geq 2$. Convert to $x^2 - 7x + 10 \\leq -2$ or $x^2 - 7x + 10 \\geq 2$.

From the first: $x^2 - 7x + 12 \\leq 0$. Factor: $(x - 3)(x - 4) \\leq 0$. This is a [quadratic inequality](!/algebra/inequalities/quadratic) with roots $3$ and $4$, positive leading coefficient. The expression is non-positive between the roots: $[3, 4]$.

From the second: $x^2 - 7x + 8 \\geq 0$. The discriminant is $49 - 32 = 17 > 0$. The roots are $\\frac{7 \\pm \\sqrt{17}}{2}$, approximately $1.44$ and $5.56$. With positive leading coefficient, the expression is non-negative outside the roots: $\\left(-\\infty, \\frac{7 - \\sqrt{17}}{2}\\right] \\cup \\left[\\frac{7 + \\sqrt{17}}{2}, \\infty\\right)$.

The solution is the union of both parts: $\\left(-\\infty, \\frac{7 - \\sqrt{17}}{2}\\right] \\cup [3, 4] \\cup \\left[\\frac{7 + \\sqrt{17}}{2}, \\infty\\right)$.

The absolute value conversion reduces the problem to standard inequality types. The difficulty is determined by whatever sits inside the bars, not by the absolute value itself.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Inequalities with Absolute Value on Both Sides`,
    content: `When absolute value appears on both sides — $|f(x)| < |g(x)|$ or $|f(x)| > |g(x)|$ — the standard less-than/greater-than conversion does not apply directly because the right-hand side is not a constant. Two alternative approaches handle these cases.

The squaring method exploits the fact that $|A| < |B|$ if and only if $A^2 < B^2$ (since both sides are non-negative). The inequality $|f(x)| < |g(x)|$ becomes $[f(x)]^2 < [g(x)]^2$, which rearranges to $[g(x)]^2 - [f(x)]^2 > 0$. Factoring the difference of squares:

$$(g(x) - f(x))(g(x) + f(x)) > 0$$

This is a [polynomial inequality](!/algebra/inequalities/polynomial) solvable by sign chart. The critical points are the roots of $g(x) - f(x) = 0$ and $g(x) + f(x) = 0$.

For $|2x - 1| < |x + 3|$, square both sides: $(2x - 1)^2 < (x + 3)^2$. Rearrange: $(x + 3)^2 - (2x - 1)^2 > 0$. Factor: $((x + 3) - (2x - 1))((x + 3) + (2x - 1)) > 0$, which gives $(4 - x)(3x + 2) > 0$. The roots are $x = 4$ and $x = -\\frac{2}{3}$. The sign chart yields the solution $\\left(-\\frac{2}{3}, 4\\right)$.

The case-splitting method is the alternative: consider the signs of $f(x)$ and $g(x)$ on each interval defined by their roots, remove the absolute value bars using the piecewise definition, and solve the resulting inequality on each interval. This approach is more laborious but avoids squaring and works for non-polynomial expressions as well.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Geometric Interpretation`,
    content: `Absolute value measures distance on the number line, and this interpretation turns every absolute value inequality into a geometric statement about proximity or separation.

The inequality $|x - a| < d$ asks: which points lie within distance $d$ of $a$? The answer is the open interval $(a - d, a + d)$, centered at $a$ with radius $d$. The inequality $|x - 5| < 3$ describes all points within $3$ units of $5$: the interval $(2, 8)$.

The inequality $|x - a| > d$ asks: which points lie farther than distance $d$ from $a$? The answer is two rays: $(-\\infty, a - d) \\cup (a + d, \\infty)$. The inequality $|x - 5| > 3$ describes all points more than $3$ units from $5$: $(-\\infty, 2) \\cup (8, \\infty)$.

The inequality $|x - a| < |x - b|$ asks: which points are closer to $a$ than to $b$? On the number line, the set of points closer to $a$ is everything on $a$'s side of the midpoint $m = \\frac{a + b}{2}$. If $a < b$, the solution is $(-\\infty, m)$. This follows from the squaring method: $|x - a| < |x - b|$ becomes $(x - a)^2 < (x - b)^2$, which simplifies to a linear inequality whose solution is the ray ending at the midpoint.

These geometric readings provide instant answers for simple absolute value inequalities and serve as sanity checks for more complex ones. If the algebraic solution to $|x - 5| < 3$ produces something other than a symmetric interval centered at $5$ with radius $3$, the algebra contains an error.`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: 'intro',
  title: `Compound Inequalities Through the Lens of Distance`,
  content: `An absolute value inequality converts into a compound inequality through one of two standard translations — one for "less than," one for "greater than." The less-than form produces a bounded interval, the greater-than form produces two unbounded rays, and the geometric interpretation as distance on the number line makes both conversions intuitive. Once the absolute value is removed, the resulting compound inequality is solved by whatever method its internal structure requires: linear techniques for linear expressions, sign charts for quadratic or polynomial expressions, and so on. The absolute value is the outer shell; the content inside determines the difficulty.`,
};



const faqQuestions = {
  obj1: {
    question: "What are the two forms of absolute value inequalities?",
    answer: "The less-than form |f(x)| < k converts to a conjunction -k < f(x) < k (bounded interval). The greater-than form |f(x)| > k converts to a disjunction f(x) < -k or f(x) > k (two rays). These two conversions are the entire method.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you solve |f(x)| < k?",
    answer: "Convert to -k < f(x) < k and solve as a compound inequality. If k > 0, the solution is a bounded interval. If k ≤ 0, the solution is empty (absolute value is never negative). For linear f(x), solve as a three-part chain.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you solve |f(x)| > k?",
    answer: "Convert to f(x) < -k OR f(x) > k and solve each part separately. The solution is the union of two sets. If k > 0, you get two rays. If k ≤ 0, the solution is all real numbers (absolute value is always ≥ 0).",
    sectionId: "3"
  },
  obj4: {
    question: "What is an example of solving an absolute value inequality?",
    answer: "For |2x - 3| < 5: convert to -5 < 2x - 3 < 5, add 3 to get -2 < 2x < 8, divide by 2 to get -1 < x < 4. Solution: (-1, 4). Less-than always produces a bounded interval.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you solve absolute value inequalities with quadratics inside?",
    answer: "Convert using the same rules, then solve the resulting quadratic inequalities. For |x² - 4| < 5: solve -5 < x² - 4 < 5, which splits into x² > -1 (always true) and x² < 9 (giving -3 < x < 3). Solution: (-3, 3).",
    sectionId: "5"
  },
  obj6: {
    question: "How do you solve |f(x)| < |g(x)|?",
    answer: "Use the squaring method: |f(x)| < |g(x)| becomes f(x)² < g(x)², which rearranges to (g-f)(g+f) > 0. Solve this polynomial inequality with a sign chart. Alternatively, use case-splitting by signs of f and g.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the geometric meaning of absolute value inequalities?",
    answer: "|x - a| < d means points within distance d of a: the interval (a-d, a+d). |x - a| > d means points farther than d from a: two rays (-∞, a-d) ∪ (a+d, ∞). This distance interpretation provides instant geometric answers.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Absolute Value Inequalities",
    "description": "Master absolute value inequalities: less-than and greater-than forms, conversion to compound inequalities, linear and quadratic cases, squaring method for both sides, and geometric distance interpretation.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/absolute-value",
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
      "name": "Absolute Value Inequalities"
    },
    "teaches": [
      "Less-than form converts to conjunction",
      "Greater-than form converts to disjunction",
      "Solving with linear expressions inside",
      "Solving with quadratic expressions inside",
      "Squaring method for absolute value on both sides",
      "Geometric interpretation as distance"
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
        "name": "Absolute Value Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/absolute-value"
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
      title: "Absolute Value Inequalities: Less-Than & Greater-Than | Learn Math Class",
      description: "Master absolute value inequalities: less-than and greater-than forms, conversion to compound inequalities, linear and quadratic cases, squaring method for both sides, and geometric distance interpretation.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/absolute-value",
      name: "Absolute Value Inequalities"
    },
  }
}
   }

export default function AbsoluteValueInequalitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Absolute Value Inequalities</h1>
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
