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
  "linear inequalities",
  "solving linear inequalities",
  "one variable inequality",
  "inequality flip rule",
  "compound linear inequalities",
  "graphing linear inequalities",
  "interval notation",
  "inequality with fractions",
  "multiply negative inequality",
  "linear inequality examples",
  "ax + b inequality",
  "inequality solution set",
  "number line inequality",
  "literal inequalities"
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
 
- [Linear Inequality](!/algebra/definitions#linear_inequality) — $ax + b < 0$ with $a \\neq 0$; solution is always a ray
- [Inequality](!/algebra/definitions#inequality) — direction reverses when multiplying or dividing by a negative
- [Interval Notation](!/algebra/definitions#interval_notation) — open parenthesis for strict, closed bracket for non-strict
 
## Extensions
 
- [Compound Inequality](!/algebra/definitions#compound_inequality) — AND produces a bounded interval, OR produces two rays`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
 
  obj1: {
    title: `Definition and Standard Form`,
    content: `A linear inequality in one variable is any inequality that can be written as

$$ax + b < 0$$

(or with $>$, $\\leq$, or $\\geq$ in place of $<$), where $a$ and $b$ are real constants and $a \\neq 0$. The variable $x$ appears only to the first power — no squares, no roots, no $x$ in a denominator.

The solution is always a ray: a half-line beginning at one point and extending to infinity in one direction. The boundary point is $x = -\\frac{b}{a}$, the solution of the corresponding [linear equation](!/algebra/equations/linear) $ax + b = 0$. The inequality symbol determines which side of this boundary the solution occupies and whether the boundary itself is included.

Not every linear inequality arrives in standard form. The inequality $3x - 7 > 2x + 5$ is linear because, after collecting terms, it reduces to $x - 12 > 0$. Recognition is the same as for equations: if the variable appears only to the first power with no compositions, the inequality is linear regardless of its initial presentation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Solving with the Properties of Inequality`,
    content: `Two properties govern the manipulation of linear inequalities, directly paralleling the properties used for [equations](!/algebra/equations).

The addition property states that adding or subtracting the same quantity on both sides preserves the direction of the inequality. If $x - 5 > 3$, then adding $5$ to both sides gives $x > 8$. The direction $>$ is unchanged.

The multiplication property has two cases. Multiplying or dividing by a positive number preserves the direction: from $3x \\leq 21$, dividing by $3$ gives $x \\leq 7$. Multiplying or dividing by a negative number reverses the direction: from $-2x \\leq 8$, dividing by $-2$ gives $x \\geq -4$. The inequality flips from $\\leq$ to $\\geq$.

The reversal is the entire difference between solving equations and solving inequalities. Every other step — collecting terms, distributing, clearing fractions — is mechanically identical. Missing the flip when dividing by a negative is the single most common error, and it produces the exact complement of the correct solution: the wrong half of the number line.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Worked Examples`,
    content: `A single-step inequality requires one operation. The inequality $3x > 12$ is solved by dividing both sides by $3$ (positive, no flip): $x > 4$. The solution in interval notation is $(4, \\infty)$.

A multi-step inequality demands the same sequence as a multi-step equation. Consider $4x - 7 \\leq 2x + 11$. Subtract $2x$ from both sides: $2x - 7 \\leq 11$. Add $7$: $2x \\leq 18$. Divide by $2$: $x \\leq 9$. The solution is $(-\\infty, 9]$.

An inequality requiring a direction flip: $-2x + 5 > 13$. Subtract $5$: $-2x > 8$. Divide by $-2$ and reverse the inequality: $x < -4$. The solution is $(-\\infty, -4)$.

A more involved example: $5 - 3(2x + 1) \\geq 4x - 8$. Distribute: $5 - 6x - 3 \\geq 4x - 8$. Simplify the left: $2 - 6x \\geq 4x - 8$. Add $6x$: $2 \\geq 10x - 8$. Add $8$: $10 \\geq 10x$. Divide by $10$: $1 \\geq x$, or equivalently $x \\leq 1$. The solution is $(-\\infty, 1]$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Graphing the Solution`,
    content: `The solution to a linear inequality is represented on the number line by marking the boundary point and shading the appropriate direction.

For $x > 4$: place an open dot at $4$ (excluded because the inequality is strict) and shade to the right. The interval is $(4, \\infty)$.

For $x \\leq 9$: place a solid dot at $9$ (included because the inequality is non-strict) and shade to the left. The interval is $(-\\infty, 9]$.

The boundary point is always the solution of the corresponding equation. The inequality $4x - 7 \\leq 2x + 11$ has the boundary at $x = 9$, the solution of $4x - 7 = 2x + 11$. The inequality symbol tells which side to shade, and whether the dot is solid or open.

This connection is not a coincidence. The equation $ax + b = 0$ identifies the single value where the two sides of the inequality are equal. On one side of that value, $ax + b$ is positive; on the other, it is negative. The inequality selects the appropriate side.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Compound Linear Inequalities`,
    content: `A compound inequality joins two linear inequalities into a single condition. The conjunction (AND) and disjunction (OR) produce fundamentally different solution sets.

A three-part chain like $-3 < 2x + 1 \\leq 7$ is a conjunction: both $-3 < 2x + 1$ and $2x + 1 \\leq 7$ must hold. Operations are applied to all three parts simultaneously. Subtract $1$: $-4 < 2x \\leq 6$. Divide by $2$: $-2 < x \\leq 3$. The solution is the half-open interval $(-2, 3]$.

A disjunction like $x + 3 < -1$ or $x + 3 > 5$ requires solving each part independently. From the first: $x < -4$. From the second: $x > 2$. The solution is the union $(-\\infty, -4) \\cup (2, \\infty)$ — two separate rays with a gap between them.

The choice between AND and OR depends on the problem's structure. Conjunctions narrow the solution set by requiring both conditions; the result is the intersection of two rays, which is either a bounded interval or empty. Disjunctions broaden it by accepting either condition; the result is the union of two rays, which is either two separate rays or the entire line.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Inequalities with Fractions and Decimals`,
    content: `Fractional coefficients are handled exactly as in [linear equations](!/algebra/equations/linear): multiply every term on both sides by the least common denominator to clear all fractions. The critical requirement is that the LCD must be positive, which it always is when the denominators are numerical constants.

Consider $\\frac{x}{3} - \\frac{x + 2}{4} > 1$. The LCD of $3$ and $4$ is $12$. Multiplying every term by $12$:

$$4x - 3(x + 2) > 12$$

Distributing and collecting:

$$4x - 3x - 6 > 12$$
$$x - 6 > 12$$
$$x > 18$$

The solution is $(18, \\infty)$. The multiplication by $12$ is safe because $12 > 0$, so the direction is preserved.

Decimal coefficients are cleared in the same way, by multiplying by the appropriate power of $10$. The inequality $0.4x - 1.5 \\leq 0.1x + 3$ becomes $4x - 15 \\leq x + 30$ after multiplying by $10$, which simplifies to $3x \\leq 45$ and then $x \\leq 15$.

If the variable appeared in a denominator, the inequality would no longer be linear — it would be a [rational inequality](!/algebra/inequalities/rational), requiring sign analysis rather than simple clearing.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Special Cases`,
    content: `When the variable terms cancel during simplification, the inequality reduces to a comparison between two constants. The result is either universally true or universally false.

An always-true inequality arises when the remaining statement is valid. The inequality $2(x + 4) > 2x + 3$ distributes to $2x + 8 > 2x + 3$. Subtracting $2x$ gives $8 > 3$, which holds regardless of $x$. Every real number satisfies the original inequality, and the solution set is $(-\\infty, \\infty)$.

A never-true inequality arises when the remaining statement is false. The inequality $5(x - 1) \\leq 5x - 9$ distributes to $5x - 5 \\leq 5x - 9$. Subtracting $5x$ gives $-5 \\leq -9$, which fails for every $x$. The solution set is empty — no real number satisfies the inequality.

These cases parallel the identity and contradiction outcomes in [linear equations](!/algebra/equations/linear). The mechanism is the same: the variable disappears, and the truth or falsity of the resulting constant statement determines whether the solution set is everything or nothing.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Literal Inequalities`,
    content: `A literal inequality contains multiple variables, and the task is to isolate one variable in terms of the others. The procedure follows the same rules as numerical inequalities, but with an added complication: when dividing by a variable, its sign may not be known.

Consider solving $ax + b > c$ for $x$. Subtracting $b$ gives $ax > c - b$. To divide by $a$, the sign of $a$ matters. If $a > 0$, the direction is preserved: $x > \\frac{c - b}{a}$. If $a < 0$, the direction reverses: $x < \\frac{c - b}{a}$. Both cases must be stated, because without knowing $a$, neither can be discarded.

This case-splitting does not arise in numerical inequalities, where the coefficient's sign is always visible. In literal inequalities, the answer is often conditional: the solution takes one form when a parameter is positive and another when it is negative. Stating both cases explicitly is not optional — omitting one produces an answer that is wrong half the time.

The same caution applies to multiplying by a variable expression whose sign is unknown. This is why, in more complex inequalities, sign analysis replaces direct manipulation: it avoids the need to know the sign of any expression in advance.`,
    before: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
  id: 'intro',
  title: `One Direction, One Boundary, One Ray`,
  content: `A linear inequality in one variable is solved by the same operations that solve a linear equation — with one additional rule. Dividing or multiplying by a negative number flips the direction of the comparison. That single rule is the only point of divergence, and once it is internalized, every first-degree inequality reduces to a statement of the form $x < c$ or $x > c$, whose solution is a ray on the number line. The boundary point is always the solution of the corresponding equation, and the inequality determines which side of it to shade.`,
};


const faqQuestions = {
  obj1: {
    question: "What is a linear inequality?",
    answer: "A linear inequality has the form ax + b < 0 (or >, ≤, ≥) where x appears only to the first power. The solution is always a ray — a half-line from the boundary point x = -b/a extending toward positive or negative infinity.",
    sectionId: "1"
  },
  obj2: {
    question: "When do you flip the inequality sign?",
    answer: "Flip the inequality direction when multiplying or dividing both sides by a negative number. Adding/subtracting any number or multiplying/dividing by a positive number preserves the direction. Missing the flip is the most common error.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you solve a multi-step linear inequality?",
    answer: "Use the same steps as linear equations: distribute, collect like terms, isolate the variable. The only difference is flipping the sign when dividing by a negative. For -2x + 5 > 13: subtract 5 to get -2x > 8, then divide by -2 and flip: x < -4.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you graph a linear inequality solution?",
    answer: "Mark the boundary point (from solving the corresponding equation). Use an open dot for < or > (excluded), solid dot for ≤ or ≥ (included). Shade toward +∞ for x > c or toward -∞ for x < c.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you solve compound linear inequalities?",
    answer: "For AND (chains like -3 < 2x + 1 ≤ 7): apply operations to all three parts simultaneously. For OR (x < -4 or x > 2): solve each part separately and take the union. AND gives an intersection; OR gives a union.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you solve linear inequalities with fractions?",
    answer: "Multiply every term by the LCD to clear all fractions. Since the LCD of numerical denominators is always positive, the inequality direction is preserved. Then solve as usual.",
    sectionId: "6"
  },
  obj7: {
    question: "What if the variable cancels in a linear inequality?",
    answer: "If terms cancel leaving a true statement like 8 > 3, the solution is all real numbers (-∞, ∞). If it leaves a false statement like -5 ≤ -9, the solution is empty — no value works.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you solve literal inequalities?",
    answer: "Isolate the target variable as with equations, but when dividing by a parameter, its sign may be unknown. State both cases: if a > 0, x > (c-b)/a; if a < 0, x < (c-b)/a. Both cases must be given.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Linear Inequalities",
    "description": "Learn to solve linear inequalities in one variable: the flip rule for negatives, graphing on number lines, compound inequalities (AND/OR), fractions, special cases, and literal inequalities.",
    "url": "https://www.learnmathclass.com/algebra/inequalities/linear",
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
      "name": "Linear Inequalities"
    },
    "teaches": [
      "Standard form ax + b < 0 and solutions as rays",
      "Addition and multiplication properties of inequalities",
      "Flipping inequality when dividing by negatives",
      "Graphing solutions on number lines",
      "Compound inequalities (AND and OR)",
      "Clearing fractions and decimals",
      "Special cases (always true, never true)",
      "Literal inequalities with parameters"
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
        "name": "Linear Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities/linear"
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
      title: "Linear Inequalities: Solving & Graphing Step by Step | Learn Math Class",
      description: "Learn to solve linear inequalities in one variable: the flip rule for negatives, graphing on number lines, compound inequalities (AND/OR), fractions, special cases, and literal inequalities.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities/linear",
      name: "Linear Inequalities"
    },
  }
}
   }


   export default function LinearInequalitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Linear Inequalities</h1>
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
