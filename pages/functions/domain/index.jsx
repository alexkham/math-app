import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=[
    'domain of a function',
    'finding domain',
    'domain restrictions',
    'domain notation',
    'interval notation domain',
    'rational function domain',
    'radical function domain',
    'natural domain',
    'domain from graph',
    'how to find domain',
    'domain and range',
    'set builder notation domain',
    'logarithmic function domain',
    'restricted domain',
  ]

  // •

//   • First item
// • Second item


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

  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',


  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },

  //   obj3:{

  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',

  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',

  //   },


  //   obj15:{

  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   }

  // }


  const sectionsContent = {

  obj1: {
    title: `What is Domain`,
    content: `The domain of a function is the set of all inputs for which the function produces a valid output. It includes every value that can be substituted into the function and yield a real number result.

A function is not just a rule — it is a rule together with a domain. The expression $f(x) = x^2$ describes a rule, but the function is not complete until the domain is specified. Often the domain is implicit: all real numbers for which the formula makes sense. Sometimes it is explicitly restricted to match a context or application.

The domain answers a simple question: what can go in? For $f(x) = 2x + 5$, any real number works — there are no divisions, no roots, no restrictions. The domain is all real numbers, written $(-\\infty, \\infty)$ in interval notation or $\\mathbb{R}$ in set notation.

For $f(x) = 1/x$, the input $x = 0$ fails because division by zero is undefined. Every other real number works. The domain is all real numbers except zero: $(-\\infty, 0) \\cup (0, \\infty)$.

The domain is distinct from the [range](!/functions/range), which describes outputs rather than inputs. Together they frame the complete input-output picture of a function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Expressing Domain`,
    content: `Domain can be expressed in several equivalent notations, each suited to different contexts.

Interval notation uses parentheses and brackets to describe continuous sets. A parenthesis excludes the endpoint; a bracket includes it. The interval $[2, 5)$ contains all numbers from $2$ to $5$, including $2$ but excluding $5$. The interval $(-\\infty, 3]$ contains all numbers up to and including $3$. Infinity always takes a parenthesis because infinity is not a number that can be reached.

Set-builder notation describes the domain by a defining property. The set $\\{x \\mid x \\geq 0\\}$ reads "the set of all $x$ such that $x$ is greater than or equal to zero." This notation handles complex conditions that intervals cannot easily express.

Inequality notation states the condition directly: $x \\geq 0$ or $-3 < x \\leq 7$. This form appears often in contexts where the domain restriction is being derived or explained.

Graphical representation shows the domain on a number line. A solid dot marks an included endpoint; an open dot marks an excluded one. Shading indicates the included values.

Disconnected domains use union notation. The domain $(-\\infty, -1) \\cup (1, \\infty)$ consists of all numbers less than $-1$ together with all numbers greater than $1$, excluding everything in between.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Natural Domain vs Restricted Domain`,
    content: `The natural domain of a function is the largest set of real numbers for which the formula produces real output. It is determined entirely by the algebraic expression — no external constraints, no contextual limitations.

For $f(x) = \\sqrt{x - 3}$, the natural domain is $[3, \\infty)$ because the radicand $x - 3$ must be non-negative. For $g(x) = \\ln(x)$, the natural domain is $(0, \\infty)$ because logarithms require positive arguments. The natural domain follows from the mathematics alone.

A restricted domain is a deliberate limitation imposed beyond what the formula requires. The function $f(x) = x^2$ has natural domain $(-\\infty, \\infty)$, but restricting to $[0, \\infty)$ makes the function one-to-one, which is necessary for constructing an [inverse](!/functions/inverse).

Context often restricts domain. A function modeling the height of a projectile might be $h(t) = -16t^2 + 64t$, which algebraically accepts any real $t$. But if the projectile launches at $t = 0$ and lands at $t = 4$, the meaningful domain is $[0, 4]$. Negative time and post-landing time carry no physical significance.

The implied domain is the natural domain assumed when no domain is explicitly stated. Unless context or instruction specifies otherwise, assume the domain is as large as the formula allows.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Finding Domain: Rational Functions`,
    content: `A rational function is a ratio of two polynomials. The fundamental restriction is that the denominator cannot equal zero — division by zero is undefined.

To find the domain of a rational function, set the denominator equal to zero and solve. The solutions are the excluded values; everything else is in the domain.

For $f(x) = \\dfrac{x + 3}{x - 2}$, set $x - 2 = 0$ to find $x = 2$. The domain is all real numbers except $2$:

$$(-\\infty, 2) \\cup (2, \\infty)$$

For $g(x) = \\dfrac{5}{x^2 - 9}$, factor the denominator: $x^2 - 9 = (x-3)(x+3)$. Setting each factor to zero gives $x = 3$ and $x = -3$. The domain is:

$$(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$$

For $h(x) = \\dfrac{x}{x^2 + 1}$, the denominator $x^2 + 1$ is always positive — it has no real roots. No value of $x$ makes it zero. The domain is all real numbers: $(-\\infty, \\infty)$.

The numerator does not affect domain. A zero in the numerator makes the function equal zero, which is a valid output. Only zeros in the denominator create exclusions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Finding Domain: Radical Functions`,
    content: `Radical functions involve roots — square roots, cube roots, fourth roots, and so on. The domain restrictions depend on whether the root index is even or odd.

Even roots (square root, fourth root, sixth root) require the radicand to be non-negative. Negative numbers have no real even roots. For $f(x) = \\sqrt{x - 5}$, the radicand $x - 5$ must satisfy $x - 5 \\geq 0$, giving $x \\geq 5$. The domain is $[5, \\infty)$.

Odd roots (cube root, fifth root) accept any real number. The cube root of $-8$ is $-2$, a perfectly valid real number. For $g(x) = \\sqrt[3]{x - 5}$, no restriction applies. The domain is $(-\\infty, \\infty)$.

More complex radicands require solving inequalities. For $f(x) = \\sqrt{6 - 2x}$, set $6 - 2x \\geq 0$:

$$6 \\geq 2x$$
$$3 \\geq x$$

The domain is $(-\\infty, 3]$.

Nested radicals compound the restrictions. For $f(x) = \\sqrt{\\sqrt{x} - 1}$, both layers impose conditions. The inner radical requires $x \\geq 0$. The outer radical requires $\\sqrt{x} - 1 \\geq 0$, which means $\\sqrt{x} \\geq 1$, so $x \\geq 1$. The domain is $[1, \\infty)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Finding Domain: Logarithmic Functions`,
    content: `Logarithmic functions require their argument to be strictly positive. The logarithm of zero is undefined, and the logarithm of a negative number has no real value.

For $f(x) = \\log(x)$ or $f(x) = \\ln(x)$, the domain is $(0, \\infty)$ — all positive real numbers.

When the argument is an expression, set that expression greater than zero and solve. For $f(x) = \\ln(x - 4)$, require $x - 4 > 0$:

$$x > 4$$

The domain is $(4, \\infty)$.

For $g(x) = \\log(3 - x)$, require $3 - x > 0$:

$$3 > x$$

The domain is $(-\\infty, 3)$.

Quadratic or factorable arguments require careful sign analysis. For $h(x) = \\ln(x^2 - 4)$, factor: $x^2 - 4 = (x-2)(x+2)$. This expression is positive when $x < -2$ or $x > 2$. The domain is:

$$(-\\infty, -2) \\cup (2, \\infty)$$

Note the strict inequality: unlike square roots, logarithms exclude the boundary where the argument equals zero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Finding Domain: Trigonometric Functions`,
    content: `The basic trigonometric functions sine and cosine accept all real numbers — they have no domain restrictions. But tangent, cotangent, secant, and cosecant are defined as ratios, and ratios fail when the denominator is zero.

Tangent is defined as $\\tan(x) = \\sin(x)/\\cos(x)$. It is undefined where $\\cos(x) = 0$, which occurs at $x = \\dfrac{\\pi}{2} + n\\pi$ for any integer $n$. The domain excludes these points.

Secant is $\\sec(x) = 1/\\cos(x)$, undefined at the same points as tangent.

Cotangent is $\\cot(x) = \\cos(x)/\\sin(x)$, undefined where $\\sin(x) = 0$: at $x = n\\pi$ for any integer $n$.

Cosecant is $\\csc(x) = 1/\\sin(x)$, undefined at the same points as cotangent.

Inverse trigonometric functions have restricted domains matching the ranges of the original functions. The function $\\arcsin(x)$ requires $-1 \\leq x \\leq 1$. The function $\\arccos(x)$ has the same restriction. The function $\\arctan(x)$ accepts all real numbers.

When trigonometric functions appear inside other operations, combine the restrictions. For $f(x) = \\sqrt{\\sin(x)}$, the domain consists of all $x$ where $\\sin(x) \\geq 0$ — the intervals where the sine function is non-negative.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Finding Domain: Combined Functions`,
    content: `When multiple operations appear in a single function, every restriction applies simultaneously. The domain is the intersection of all individual requirements.

For $f(x) = \\dfrac{\\sqrt{x}}{x - 3}$, two restrictions arise. The square root requires $x \\geq 0$. The denominator requires $x \\neq 3$. Both must hold, so the domain is $[0, 3) \\cup (3, \\infty)$.

For $g(x) = \\ln(x - 1) + \\sqrt{5 - x}$, the logarithm requires $x - 1 > 0$, giving $x > 1$. The square root requires $5 - x \\geq 0$, giving $x \\leq 5$. The intersection is $(1, 5]$.

For $h(x) = \\dfrac{1}{\\sqrt{x - 2}}$, the square root requires $x - 2 \\geq 0$, and the denominator requires $\\sqrt{x-2} \\neq 0$. Together these demand $x - 2 > 0$, so $x > 2$. The domain is $(2, \\infty)$.

A systematic approach prevents errors: list each operation that imposes a restriction, solve each restriction separately, then intersect all the resulting conditions. Overlapping constraints narrow the domain; contradictory constraints can eliminate it entirely.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Domain from Graph`,
    content: `When a function is given as a graph rather than a formula, the domain is read as the horizontal extent — the set of $x$-values for which the graph exists.

Trace the graph from left to right. Where does it start? Where does it end? Does it continue indefinitely in either direction? The answers define the domain.

Solid dots indicate included endpoints. If the graph ends at a solid dot at $x = 3$, then $3$ is in the domain, and the interval is closed at that end: use a bracket.

Open dots indicate excluded endpoints. If the graph ends at an open dot at $x = 3$, then $3$ is not in the domain, and the interval is open at that end: use a parenthesis.

Vertical asymptotes signal domain exclusions. If the graph approaches but never touches a vertical line at $x = 2$, then $2$ is not in the domain. The domain splits into separate intervals on either side of the asymptote.

Gaps in the graph appear as breaks — intervals where no curve exists. A graph defined for $x < -1$ and $x > 1$ but missing in between has domain $(-\\infty, -1) \\cup (1, \\infty)$.

Arrows at the ends of a graph indicate indefinite continuation. An arrow pointing right means the graph extends toward $+\\infty$; an arrow pointing left means it extends toward $-\\infty$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Domain from Context`,
    content: `When a function models a real-world situation, the context imposes restrictions that pure algebra does not.

Time is typically non-negative. A function $h(t)$ giving the height of a ball after $t$ seconds has no meaning for $t < 0$. The domain starts at $t = 0$, regardless of whether the formula accepts negative values.

Quantities like length, area, population, and count must be non-negative. A function $A(r) = \\pi r^2$ giving the area of a circle requires $r \\geq 0$, even though the formula works for negative $r$.

Physical upper bounds also restrict domain. A function modeling the number of items produced in a day has a maximum determined by capacity. A function for temperature in a specific experiment operates within measured bounds.

Discrete quantities may restrict the domain to integers. A function $P(n)$ giving profit based on $n$ units sold makes sense only for whole numbers $n = 0, 1, 2, 3, \\ldots$

Contextual domain is a modeling decision, not a calculation. It requires understanding what the variables represent and what values are meaningful in the situation. A formula may allow $x = -5$, but if $x$ represents the number of employees, that value is nonsense.`,
    before: ``,
    after: ``,
    link: '',
  },

}


 const introContent = {
  id: "intro",
  title: "Where Functions Live",
  content: `Every function has boundaries. Some inputs work, others do not. The square root function refuses negative numbers. The reciprocal function cannot accept zero. A function modeling time accepts no moments before the clock starts.

The domain is the complete set of inputs for which the function produces valid output. It answers the question: what values can this function actually process? Finding the domain means identifying every restriction — every value that causes division by zero, every radicand that turns negative, every argument that falls outside the reach of the rule.`
}



  const faqQuestions = {
    q1: {
      question: "What is the domain of a function?",
      answer: "The domain of a function is the set of all inputs for which the function produces a valid output. It includes every value that can be substituted into the function and yield a real number result. Together with the range, it frames the complete input-output picture of a function.",
    },
    q2: {
      question: "How do you find the domain of a rational function?",
      answer: "To find the domain of a rational function, set the denominator equal to zero and solve for the excluded values. Every real number except those solutions is in the domain. The numerator does not affect the domain — only zeros in the denominator create exclusions.",
    },
    q3: {
      question: "What is the domain of a radical function with an even root?",
      answer: "Even roots such as square roots require the radicand to be non-negative, since negative numbers have no real even roots. Set the radicand greater than or equal to zero and solve the resulting inequality to find the domain. For example, for f(x) = sqrt(x - 5), the domain is [5, infinity).",
    },
    q4: {
      question: "How do you read the domain from a graph?",
      answer: "When reading domain from a graph, trace the horizontal extent — the set of x-values for which the graph exists. Solid dots mark included endpoints (use brackets) and open dots mark excluded endpoints (use parentheses). Vertical asymptotes and gaps in the graph also indicate values excluded from the domain.",
    },
    q5: {
      question: "What is the difference between natural domain and restricted domain?",
      answer: "The natural domain is the largest set of real numbers for which the formula produces real output, determined entirely by the algebraic expression. A restricted domain is a deliberate limitation imposed beyond what the formula requires, often to match a real-world context or to make a function one-to-one for finding its inverse.",
    },
  }

  const seoData = {
    title: "Domain of a Function - How to Find It | Learn Math Class",
    description: "Learn how to find the domain of any function including rational, radical, logarithmic, and composite functions. Step-by-step methods with interval notation examples.",
    keywords: keyWords.join(", "),
    url: "/functions/domain",
    name: "Domain of a Function",
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "inLanguage": "en-US",
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com",
      },
      "teaches": [
        "What is the domain of a function",
        "How to express domain using interval and set-builder notation",
        "Natural domain versus restricted domain",
        "Finding domain of rational and radical functions",
        "Finding domain of logarithmic and trigonometric functions",
        "How to determine domain from a graph or real-world context",
      ],
      "educationalLevel": "High School",
      "learningResourceType": "Article",
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": `https://www.learnmathclass.com${seoData.url}`,
        },
      ],
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.values(faqQuestions).map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  }

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Domain of a Function - How to Find It | Learn Math Class",
        description: "Learn how to find the domain of any function including rational, radical, logarithmic, and composite functions. Step-by-step methods with interval notation examples.",
        keywords: keyWords.join(", "),
        url: "/functions/domain",
         name: "Domain of a Function"
      },
       }
    }
   }

export default function DomainPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Domain</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
