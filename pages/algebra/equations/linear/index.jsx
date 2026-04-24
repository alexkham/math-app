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
  "linear equations",
  "solving linear equations",
  "first degree equations",
  "ax + b = 0",
  "properties of equality",
  "multi-step equations",
  "equations with fractions",
  "equations with decimals",
  "equations with parentheses",
  "literal equations",
  "identity equation",
  "contradiction equation",
  "clearing fractions",
  "isolate the variable"
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
## Equation Basics
 
- [Equation](!/algebra/definitions#equation) — a statement that two expressions are equal
- [Solution](!/algebra/definitions#solution) — the value of the variable that makes both sides equal
- [Variable](!/algebra/definitions#variable) — the unknown quantity being solved for
 
## Classification
 
- [Degree of an Equation](!/algebra/definitions#degree_of_an_equation) — linear equations have degree $1$
- [Standard Form](!/algebra/definitions#standard_form) — $ax + b = 0$
- [Coefficient](!/algebra/definitions#coefficient) — the numerical factor $a$ multiplying the variable
- [Conditional Equation](!/algebra/definitions#conditional_equation) — has exactly one solution when $a \\neq 0$
- [Identity](!/algebra/definitions#identity) — arises when variable terms cancel leaving a true statement
- [Contradiction](!/algebra/definitions#contradiction) — arises when variable terms cancel leaving a false statement
- [Equivalent Equations](!/algebra/definitions#equivalent_equations) — solving produces a chain of equivalent equations`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition and Standard Form`,
    content: `A linear equation in one variable is any equation that can be written as

$$ax + b = 0$$

where $a$ and $b$ are real constants and $a \\neq 0$. The variable $x$ appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $x$ in a denominator. The word "linear" reflects the geometric fact that the graph of $y = ax + b$ is a straight line, and the solution of $ax + b = 0$ is the point where that line crosses the horizontal axis.

Not every linear equation arrives in standard form. The equation $3x - 7 = 2x + 5$ is linear because, after collecting terms, it reduces to $x - 12 = 0$. The equation $\\frac{x}{4} + 1 = 3$ is also linear — the fraction involves only a numerical denominator, not a variable one. Recognition matters: any equation where the variable appears solely to the first power, with no products or compositions involving the variable, is linear regardless of how it is initially presented.

The solution is immediate from standard form. Subtracting $b$ and dividing by $a$ gives $x = -\\frac{b}{a}$. This single value is the only solution, and it always exists when $a \\neq 0$. Linear equations never produce two solutions, infinitely many solutions, or no solutions — as long as the coefficient of $x$ is genuinely nonzero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Properties of Equality`,
    content: `Solving a linear equation means transforming it into an equivalent equation where the variable stands alone. Two properties of equality make this possible, and they are the only tools required.

The addition property states that adding or subtracting the same quantity on both sides of an equation produces an equivalent equation. If $x + 5 = 12$, then subtracting $5$ from both sides gives $x = 7$. The solution set has not changed — it has only become visible. This property works because equality is preserved when identical operations are applied symmetrically.

The multiplication property states that multiplying or dividing both sides by any nonzero constant also produces an equivalent equation. If $3x = 21$, then dividing both sides by $3$ gives $x = 7$. The restriction to nonzero multipliers is critical: multiplying both sides by zero collapses every equation to $0 = 0$, destroying all information about the original solution.

These two properties generate every valid algebraic step in the solution of a linear equation. Combining them in sequence — first clearing additive terms, then clearing the coefficient of $x$ — isolates the variable systematically.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving Single-Step and Multi-Step Equations`,
    content: `A single-step equation requires exactly one application of the properties of equality. The equation $x - 9 = 4$ is solved by adding $9$ to both sides, yielding $x = 13$. The equation $-5x = 40$ is solved by dividing both sides by $-5$, yielding $x = -8$. In each case, one operation undoes the one operation binding the variable.

Multi-step equations demand a sequence of operations. Consider $4x - 7 = 2x + 11$. The variable appears on both sides and constants are mixed in. The strategy proceeds in stages: gather all variable terms on one side and all constant terms on the other, then isolate the variable.

$$4x - 7 = 2x + 11$$

Subtract $2x$ from both sides:

$$2x - 7 = 11$$

Add $7$ to both sides:

$$2x = 18$$

Divide both sides by $2$:

$$x = 9$$

The order of these steps is flexible — subtracting $2x$ first or adding $7$ first both reach the same result — but the underlying logic is rigid: every step must preserve equivalence, and each step must bring the equation closer to the form $x = \\text{value}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Equations with Parentheses`,
    content: `When an equation contains parentheses, the distributive property clears them before any collecting or isolating takes place. The equation $3(2x - 5) = 4x + 1$ begins with distribution on the left:

$$6x - 15 = 4x + 1$$

From here, the procedure is identical to any multi-step equation. Subtract $4x$ from both sides to get $2x - 15 = 1$, add $15$ to get $2x = 16$, and divide by $2$ to reach $x = 8$.

Nested parentheses require working from the innermost grouping outward. The equation $2[3(x + 1) - 4] = 10$ simplifies as follows: first distribute the $3$ inside the brackets to get $2[3x + 3 - 4] = 10$, then simplify inside the brackets to $2[3x - 1] = 10$, then distribute the $2$ to obtain $6x - 2 = 10$, and finally solve to get $x = 2$.

A persistent source of error is the negative sign preceding parentheses. In the expression $-(x + 4)$, the negative distributes to every term inside, producing $-x - 4$. Writing $-x + 4$ instead is one of the most common algebraic mistakes, and it changes the solution entirely.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Equations with Fractions`,
    content: `Fractional coefficients do not change the type of an equation, but they complicate arithmetic. Clearing all fractions at once simplifies the process. The technique is to multiply every term on both sides by the least common denominator of all fractions present.

Consider the equation $\\frac{x}{3} + \\frac{x - 2}{4} = 5$. The LCD of $3$ and $4$ is $12$. Multiplying every term by $12$ gives:

$$4x + 3(x - 2) = 60$$

Distributing and collecting:

$$4x + 3x - 6 = 60$$
$$7x = 66$$
$$x = \\frac{66}{7}$$

The multiplication by $12$ is valid because $12$ is a nonzero constant — it does not depend on $x$. The solution set is preserved exactly. After clearing, the equation is a standard multi-step linear equation with integer coefficients.

A crucial distinction separates these equations from [rational equations](!/algebra/equations/rational). When the denominators are numerical constants (like $3$, $4$, $12$), clearing them is safe and changes nothing about the solution set. When the variable itself appears in a denominator, the equation is no longer linear — it is rational, and clearing that denominator introduces domain restrictions and the possibility of extraneous solutions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Equations with Decimals`,
    content: `Decimal coefficients are fractions in disguise, and the same clearing strategy applies. Multiplying both sides by an appropriate power of $10$ converts every coefficient to an integer.

The equation $0.3x + 1.25 = 0.8x - 0.5$ has decimals extending to the hundredths place. Multiplying every term by $100$ produces:

$$30x + 125 = 80x - 50$$

Collecting variable terms on the right and constants on the left:

$$175 = 50x$$
$$x = \\frac{175}{50} = \\frac{7}{2}$$

The choice of multiplier depends on the finest decimal present. If the most decimal places in any coefficient is one, multiply by $10$. If two, multiply by $100$. This is equivalent to rewriting each decimal as a fraction and clearing denominators, compressed into a single step.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Special Cases`,
    content: `The procedure for solving a linear equation assumes that the variable survives the simplification process. When it does not, two outcomes are possible, and neither produces a finite solution set.

An identity arises when simplification eliminates the variable and leaves a true numerical statement. The equation $2(x + 3) = 2x + 6$ distributes to $2x + 6 = 2x + 6$. Subtracting $2x$ from both sides gives $6 = 6$, which is true regardless of $x$. Every real number satisfies the original equation, and the solution set is $\\mathbb{R}$. The equation was not conditional — it was a restatement of an algebraic identity.

A contradiction arises when simplification eliminates the variable and leaves a false numerical statement. The equation $3(x + 1) = 3x + 8$ distributes to $3x + 3 = 3x + 8$. Subtracting $3x$ from both sides gives $3 = 8$, which is false for every value of $x$. No real number satisfies the equation, and the solution set is empty.

Both situations are recognizable during solving: the variable terms cancel completely, and the remaining constant equation decides between identity and contradiction. If the constants match, every value works. If they clash, nothing does.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Literal Equations and Formulas`,
    content: `A literal equation contains multiple variables, and the task is to solve for one of them in terms of the others. The same properties of equality apply — the only difference is that the "constants" being manipulated are themselves variables.

Consider the equation $d = rt$, which relates distance, rate, and time. Solving for $t$ means isolating it on one side. Dividing both sides by $r$ (assuming $r \\neq 0$) gives $t = \\frac{d}{r}$. The variable $r$ is treated as a nonzero constant throughout, just as a numerical coefficient would be.

More involved formulas demand the same multi-step approach used for numerical linear equations. To isolate $r$ in the formula $A = P(1 + rt)$, begin by dividing both sides by $P$:

$$\\frac{A}{P} = 1 + rt$$

Subtract $1$:

$$\\frac{A}{P} - 1 = rt$$

Divide by $t$:

$$r = \\frac{1}{t}\\left(\\frac{A}{P} - 1\\right)$$

Each step is a reversible operation that preserves equivalence, applied to letters instead of numbers. The logic is identical to solving $7 = 2(1 + 3x)$ — only the symbols differ.`,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
  id: 'intro',
  title: `First-Degree Equations and the Foundation of Solving`,
  content: `A linear equation in one variable is the simplest type of algebraic equation: the unknown appears only to the first power, and — provided the coefficient is nonzero — exactly one solution exists. The methods used to solve linear equations are elementary, but they are not trivial. Every technique for handling more complex equations relies on the same core logic: transform the equation into a simpler equivalent form by applying reversible operations. Mastering that logic here makes everything that follows possible.`,
};


const faqQuestions = {
  obj1: {
    question: "What is a linear equation?",
    answer: "A linear equation in one variable has the form ax + b = 0 where a ≠ 0. The variable appears only to the first power with no products or compositions. It always has exactly one solution: x = -b/a.",
    sectionId: "1"
  },
  obj2: {
    question: "What are the properties of equality for solving equations?",
    answer: "The addition property: adding or subtracting the same quantity on both sides preserves the solution. The multiplication property: multiplying or dividing by any nonzero constant preserves the solution. These two properties generate every valid solving step.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you solve multi-step linear equations?",
    answer: "Gather variable terms on one side and constant terms on the other using addition/subtraction, then isolate the variable by dividing. Each step must preserve equivalence. The order is flexible but the logic is rigid.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you solve equations with parentheses?",
    answer: "Use the distributive property to clear parentheses first, then solve as a standard multi-step equation. Watch for negative signs before parentheses — they distribute to every term inside, a common error source.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you solve linear equations with fractions?",
    answer: "Multiply every term on both sides by the least common denominator to clear all fractions at once. This works because the LCD is a nonzero constant. The result is an equivalent equation with integer coefficients.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you solve equations with decimals?",
    answer: "Multiply both sides by the appropriate power of 10 (10 for tenths, 100 for hundredths) to convert all coefficients to integers. This is equivalent to clearing fractional denominators in one step.",
    sectionId: "6"
  },
  obj7: {
    question: "What are identity and contradiction equations?",
    answer: "An identity occurs when variable terms cancel leaving a true statement (like 6 = 6) — every real number is a solution. A contradiction occurs when they leave a false statement (like 3 = 8) — no solution exists.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you solve literal equations for a specific variable?",
    answer: "Apply the same properties of equality, treating other variables as constants. Isolate the target variable using addition/subtraction and multiplication/division. The logic is identical to numerical equations — only the symbols differ.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Linear Equations",
    "description": "Master linear equations: standard form ax + b = 0, properties of equality, multi-step solving, equations with parentheses, fractions, decimals, special cases (identities and contradictions), and literal equations.",
    "url": "https://www.learnmathclass.com/algebra/equations/linear",
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
      "name": "Linear Equations"
    },
    "teaches": [
      "Standard form ax + b = 0",
      "Addition and multiplication properties of equality",
      "Multi-step equation solving",
      "Clearing parentheses with distribution",
      "Clearing fractions with LCD",
      "Identity and contradiction recognition",
      "Literal equations and formulas"
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
        "name": "Equations",
        "item": "https://www.learnmathclass.com/algebra/equations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Linear Equations",
        "item": "https://www.learnmathclass.com/algebra/equations/linear"
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
      title: "Linear Equations: Solving First-Degree Equations | Learn Math Class",
      description: "Master linear equations: standard form ax + b = 0, properties of equality, multi-step solving, equations with parentheses, fractions, decimals, special cases (identities and contradictions), and literal equations.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/linear",
      name: "Linear Equations"
    },
  }
}
   }


export default function LinearEquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Linear Equations</h1>
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
