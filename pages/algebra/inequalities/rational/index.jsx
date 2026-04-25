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
  "rational inequalities",
  "solving rational inequalities",
  "sign chart rational",
  "numerator denominator zeros",
  "critical points inequality",
  "cross-multiplication error",
  "rational inequality examples",
  "endpoint inclusion rules",
  "fraction inequality",
  "variable in denominator",
  "rational expression sign",
  "excluded values inequality",
  "rational inequality standard form",
  "combining fractions inequality"
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
 
- [Rational Inequality](!/algebra/definitions#rational_inequality) — variable in denominator; sign chart with two kinds of critical points
- [Critical Point](!/algebra/definitions#critical_point) — numerator zeros (expression $= 0$) vs denominator zeros (undefined)
- [Sign Analysis](!/algebra/definitions#sign_analysis) — applied to the quotient via factor-by-factor sign tracking
 
## Endpoint Rules
 
- [Inequality](!/algebra/definitions#inequality) — numerator zeros may be included for $\\leq$/$\\geq$; denominator zeros never
- [Interval Notation](!/algebra/definitions#interval_notation) — denominator zeros always get parentheses`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition`,
    content: `A rational inequality is any inequality involving at least one fraction in which the variable appears in the denominator. The inequality

$$\\frac{x - 2}{x + 1} > 0$$

is rational because the variable $x$ sits inside the denominator $x + 1$. The inequality $\\frac{x + 3}{5} \\leq 1$ is not rational — its denominator is a constant, making it a [linear inequality](!/algebra/inequalities/linear) in disguise.

Rational inequalities ask where a rational expression is positive, negative, or zero. Unlike [rational equations](!/algebra/equations/rational), which ask only where the expression equals zero, inequalities require knowing the sign of the expression across the entire number line. This is a harder question, and it demands the full sign chart rather than just the roots of the numerator.

The expression $\\frac{P(x)}{Q(x)}$ is a quotient of two [polynomials](!/algebra/polynomials). Its sign at any point where it is defined equals the sign of the product $P(x) \\cdot Q(x)$, because a fraction is positive when numerator and denominator share the same sign, and negative when they differ. This observation is what makes the sign chart — originally a tool for products — applicable to quotients as well.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Critical Points`,
    content: `A rational inequality has two kinds of critical points, and confusing them is a common source of error.

Numerator zeros are values where $P(x) = 0$. At these points the rational expression equals zero: $\\frac{0}{Q(x)} = 0$ (provided $Q(x) \\neq 0$). These are candidates for inclusion in the solution set when the inequality is non-strict ($\\leq$ or $\\geq$), because zero satisfies $\\leq 0$ and $\\geq 0$.

Denominator zeros are values where $Q(x) = 0$. At these points the expression is undefined — division by zero has no value. These are never part of the solution set, regardless of the inequality symbol. Even for $\\frac{P(x)}{Q(x)} \\leq 0$, a denominator zero is excluded because the expression does not exist there.

Both types of critical points go on the sign chart. Both create interval boundaries. The expression can change sign at either type. The difference appears only at the endpoint-inclusion step: numerator zeros may be included, denominator zeros are always excluded.

For the inequality $\\frac{(x - 3)(x + 1)}{(x - 5)(x + 4)} \\geq 0$, the numerator zeros are $x = 3$ and $x = -1$, and the denominator zeros are $x = 5$ and $x = -4$. All four values appear on the sign chart. The solution will include $x = 3$ and $x = -1$ (where the expression is zero) but will exclude $x = 5$ and $x = -4$ (where it is undefined).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The Sign Chart Method for Rational Inequalities`,
    content: `The sign chart for a rational inequality follows the same logic as for [polynomial inequalities](!/algebra/inequalities/polynomial), with the numerator and denominator factors treated on equal footing during the sign-tracking phase.

Step 1: Factor the numerator and denominator completely. Every factor must be visible as a separate entity.

Step 2: Identify all critical points — zeros of the numerator and zeros of the denominator. Order them on the number line from smallest to largest.

Step 3: Create the sign chart. One row per factor (both numerator and denominator factors), with columns for each interval between consecutive critical points. Record the sign of each factor in each interval.

Step 4: Determine the sign of the rational expression in each interval. The sign is the product of all factor signs — or equivalently, count the number of negative factors: an even count means the expression is positive, odd means negative.

Step 5: Select the intervals matching the inequality.

Step 6: Handle endpoints. Numerator zeros are included for $\\leq$ or $\\geq$, excluded for $<$ or $>$. Denominator zeros are excluded always. Mark included endpoints with square brackets and excluded ones with parentheses.

For $\\frac{x - 2}{x + 1} > 0$, the critical points are $x = 2$ (numerator) and $x = -1$ (denominator). Three intervals arise. In $(-\\infty, -1)$: $(x - 2)$ is negative, $(x + 1)$ is negative — quotient is positive. In $(-1, 2)$: $(x - 2)$ is negative, $(x + 1)$ is positive — quotient is negative. In $(2, \\infty)$: both positive — quotient is positive. The solution to $> 0$ is $(-\\infty, -1) \\cup (2, \\infty)$. Both critical points are excluded: $x = -1$ because it is a denominator zero, $x = 2$ because the inequality is strict.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Endpoint Inclusion Rules`,
    content: `The endpoint rules for rational inequalities are stricter than those for polynomial inequalities, and the reason is simple: a polynomial is defined everywhere, but a rational expression is not.

For a non-strict inequality like $\\frac{P(x)}{Q(x)} \\leq 0$, the expression must be less than or equal to zero. At a numerator zero where the denominator is nonzero, the expression equals zero, which satisfies $\\leq 0$. The point is included. At a denominator zero, the expression has no value — it is neither less than zero nor equal to zero nor anything else. The point is excluded.

For a strict inequality like $\\frac{P(x)}{Q(x)} < 0$, all critical points are excluded. Numerator zeros are excluded because the expression equals zero there, and zero does not satisfy $< 0$. Denominator zeros are excluded because the expression is undefined.

This produces four cases in practice. Under $\\leq$ or $\\geq$: numerator zeros included, denominator zeros excluded. Under $<$ or $>$: both excluded. There is no case where a denominator zero is included — the expression simply does not exist at that point.

In interval notation, included endpoints receive a square bracket $[$ or $]$, and excluded endpoints receive a parenthesis $($ or $)$. A denominator zero always gets a parenthesis. A numerator zero gets a bracket for $\\leq$ or $\\geq$ and a parenthesis for $<$ or $>$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `A Common Error: Cross-Multiplication`,
    content: `The most natural instinct when facing $\\frac{P(x)}{Q(x)} > 0$ is to multiply both sides by $Q(x)$ and work with $P(x) > 0$ or $P(x) < 0$. This instinct is wrong.

The problem is that $Q(x)$ changes sign. In some intervals $Q(x)$ is positive, and multiplying preserves the inequality direction. In other intervals $Q(x)$ is negative, and multiplying reverses it. A single multiplication cannot account for both cases simultaneously.

Consider $\\frac{x - 3}{x + 2} > 1$. Multiplying both sides by $(x + 2)$ gives $x - 3 > x + 2$ when $x + 2 > 0$, which simplifies to $-3 > 2$ — false everywhere. But when $x + 2 < 0$, the multiplication flips the inequality: $x - 3 < x + 2$, giving $-3 < 2$ — true everywhere in that region. Tracking these cases is cumbersome and error-prone.

The correct approach avoids cross-multiplication entirely. Move everything to one side first: $\\frac{x - 3}{x + 2} - 1 > 0$. Combine into a single fraction: $\\frac{x - 3 - (x + 2)}{x + 2} > 0$, which simplifies to $\\frac{-5}{x + 2} > 0$. Now the sign chart has one critical point, $x = -2$ (denominator zero). The numerator $-5$ is always negative. In $(-\\infty, -2)$, the denominator is negative, so the fraction is positive. In $(-2, \\infty)$, the denominator is positive, so the fraction is negative. The solution is $(-\\infty, -2)$.

The sign chart handled it cleanly. Cross-multiplication would have required splitting into cases and risked losing track of which direction applied where.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Getting the Inequality Into Standard Form`,
    content: `The sign chart requires a single rational expression compared to zero. When the inequality is not already in this form, it must be rearranged before the method can be applied.

The inequality $\\frac{P(x)}{Q(x)} > k$ is rewritten as $\\frac{P(x)}{Q(x)} - k > 0$. The two terms are then combined into a single fraction over a common denominator:

$$\\frac{P(x) - k \\cdot Q(x)}{Q(x)} > 0$$

This is now a standard rational inequality with everything on one side and zero on the other. The numerator $P(x) - k \\cdot Q(x)$ and the denominator $Q(x)$ are factored, critical points are identified, and the sign chart proceeds as usual.

For the inequality $\\frac{1}{x - 3} \\leq \\frac{2}{x + 1}$, subtract the right side: $\\frac{1}{x - 3} - \\frac{2}{x + 1} \\leq 0$. The common denominator is $(x - 3)(x + 1)$:

$$\\frac{(x + 1) - 2(x - 3)}{(x - 3)(x + 1)} \\leq 0$$

$$\\frac{x + 1 - 2x + 6}{(x - 3)(x + 1)} \\leq 0$$

$$\\frac{-x + 7}{(x - 3)(x + 1)} \\leq 0$$

The critical points are $x = 7$ (numerator zero), $x = 3$ and $x = -1$ (denominator zeros). The sign chart takes over from here.

Skipping the combination step — trying to work with two separate fractions — leads to the same cross-multiplication trap. A single fraction compared to zero is the form the sign chart is built for.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Worked Examples`,
    content: `A simple rational inequality: solve $\\frac{x - 2}{x + 1} > 0$. Critical points: $x = 2$ (numerator), $x = -1$ (denominator). Three intervals. In $(-\\infty, -1)$: both factors negative, quotient positive. In $(-1, 2)$: numerator negative, denominator positive, quotient negative. In $(2, \\infty)$: both positive, quotient positive. The solution to $> 0$ is $(-\\infty, -1) \\cup (2, \\infty)$.

An inequality requiring combination: solve $\\frac{1}{x - 3} \\leq \\frac{2}{x + 1}$. After combining into $\\frac{-x + 7}{(x - 3)(x + 1)} \\leq 0$, the critical points are $x = -1$, $x = 3$ (denominator zeros), and $x = 7$ (numerator zero). Four intervals. End behavior: for large positive $x$, the numerator $-x + 7$ is negative, $(x - 3)$ is positive, $(x + 1)$ is positive — product of signs is negative. Moving left using multiplicity (all factors have odd multiplicity, so sign flips at every critical point): $(7, \\infty)$ is negative, $(3, 7)$ is positive, $(-1, 3)$ is negative, $(-\\infty, -1)$ is positive. The inequality $\\leq 0$ selects negative intervals and includes the numerator zero: $(-1, 3) \\cup [7, \\infty)$. The denominator zeros $x = -1$ and $x = 3$ are excluded.

An inequality with a repeated factor: solve $\\frac{(x - 1)^2}{x + 3} \\geq 0$. Critical points: $x = 1$ (numerator, multiplicity $2$) and $x = -3$ (denominator). The factor $(x - 1)^2$ is non-negative everywhere, so it does not change the sign — only the denominator $(x + 3)$ controls the sign. In $(-\\infty, -3)$: $(x + 3)$ is negative, so the expression is non-positive. In $(-3, \\infty)$: $(x + 3)$ is positive, so the expression is non-negative. The inequality $\\geq 0$ selects $(-3, \\infty)$, and since the expression equals zero at $x = 1$, that point is included (it already lies within the selected interval). The denominator zero $x = -3$ is excluded. The solution is $(-3, \\infty)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Connection to Rational Equations`,
    content: `[Rational equations](!/algebra/equations/rational) and rational inequalities begin with the same kind of expression — a quotient $\\frac{P(x)}{Q(x)}$ — but ask different questions, and therefore require different tools.

A rational equation $\\frac{P(x)}{Q(x)} = 0$ asks where the expression equals zero. The answer depends only on the numerator: $P(x) = 0$ (with denominator zeros excluded). The denominator determines the domain restrictions, but once those are enforced, only the numerator matters. Clearing the denominator by multiplying both sides is safe for equations because the target value is zero, and zero times anything is zero.

A rational inequality $\\frac{P(x)}{Q(x)} > 0$ asks where the expression is positive. This depends on both the numerator and the denominator — the sign of each matters in every interval. Clearing the denominator is not safe because the multiplication may need to flip the inequality in some intervals but not others.

The sign chart handles the inequality question by treating numerator and denominator factors on equal footing: all contribute critical points, all contribute sign information, and the overall sign is determined by the combination. The equation question is a degenerate case where only the numerator zeros matter and the sign chart is unnecessary.`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: 'intro',
  title: `Two Kinds of Critical Points and the Danger of Cross-Multiplication`,
  content: `A rational inequality asks where a fraction involving the variable is positive, negative, or zero. The sign chart method applies exactly as it does for polynomials, but with an added layer: the denominator contributes critical points of its own. Where the numerator is zero, the expression equals zero. Where the denominator is zero, the expression does not exist. Both types partition the number line into intervals, both affect the sign analysis, but they are treated differently when deciding which boundary points belong to the solution. The temptation to clear the denominator by cross-multiplying must be resisted — the denominator changes sign across the number line, making a single multiplication invalid.`,
};

const faqQuestions = {
  obj1: {
    question: "What is a rational inequality?",
    answer: "A rational inequality involves a fraction with the variable in the denominator, like (x-2)/(x+1) > 0. It asks where the rational expression is positive, negative, or zero — requiring sign analysis across the entire number line, not just finding roots.",
    sectionId: "1"
  },
  obj2: {
    question: "What are critical points in rational inequalities?",
    answer: "There are two types: numerator zeros (where the expression equals zero) and denominator zeros (where it's undefined). Both create interval boundaries on the sign chart, but denominator zeros are always excluded from the solution.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you solve rational inequalities with sign charts?",
    answer: "Factor numerator and denominator, identify all critical points (zeros of both), create a sign chart with one row per factor, determine the sign in each interval by multiplying factor signs, select intervals matching the inequality, then handle endpoint inclusion.",
    sectionId: "3"
  },
  obj4: {
    question: "Which critical points are included in rational inequality solutions?",
    answer: "For ≤ or ≥: numerator zeros are included (expression equals zero there), denominator zeros are always excluded (expression undefined). For < or >: both types are excluded. Denominator zeros are never included regardless of inequality type.",
    sectionId: "4"
  },
  obj5: {
    question: "Why can't you cross-multiply rational inequalities?",
    answer: "The denominator changes sign across the number line. Multiplying both sides requires flipping the inequality in some intervals but not others — impossible with a single multiplication. Always use sign charts instead of cross-multiplying.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you put rational inequalities in standard form?",
    answer: "Move everything to one side to get P(x)/Q(x) > 0 (or <, ≤, ≥). For inequalities like 1/(x-3) ≤ 2/(x+1), subtract the right side and combine into a single fraction over a common denominator, then apply the sign chart.",
    sectionId: "6"
  },
  obj7: {
    question: "How do repeated factors affect rational inequalities?",
    answer: "A factor with even multiplicity (like (x-1)²) doesn't change the overall sign when crossing that critical point — it's always non-negative. Only odd-multiplicity factors flip the sign. Track multiplicity separately for each factor.",
    sectionId: "7"
  },
  obj8: {
    question: "How do rational inequalities differ from rational equations?",
    answer: "Rational equations ask where P(x)/Q(x) = 0, requiring only numerator zeros (with domain restrictions). Inequalities ask where it's positive or negative, requiring sign analysis of both numerator and denominator across all intervals.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Rational Inequalities",
    "description": "Master rational inequalities: sign chart method, numerator vs denominator zeros, endpoint inclusion rules, why cross-multiplication fails, standard form conversion, and worked examples.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/rational",
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
      "name": "Rational Inequalities"
    },
    "teaches": [
      "Definition of rational inequalities",
      "Numerator zeros vs denominator zeros",
      "Sign chart method for rational expressions",
      "Endpoint inclusion rules",
      "Why cross-multiplication fails",
      "Converting to standard form",
      "Handling repeated factors"
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
        "name": "Rational Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/rational"
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
      title: "Rational Inequalities: Sign Charts & Critical Points | Learn Math Class",
      description: "Master rational inequalities: sign chart method, numerator vs denominator zeros, endpoint inclusion rules, why cross-multiplication fails, standard form conversion, and worked examples.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/rational",
      name: "Rational Inequalities"
    },
  }
}}

export default function RationalInequalitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Rational Inequalities</h1>
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

