import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords = [
    'functions in math',
    'what is a function',
    'function definition',
    'function notation',
    'f(x) notation',
    'evaluating functions',
    'domain and range',
    'vertical line test',
    'input output math',
    'function vs relation',
    'function examples',
    'types of functions',
    'function representations',
    'independent dependent variable'
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
    title: `What is a Function`,
    content: `A function is a rule that assigns exactly one output to each input. The input is a value chosen from some allowed set, the output is the value the rule produces, and the defining requirement is uniqueness: each input yields one and only one output.

This uniqueness is what separates functions from more general relationships. A relationship might associate a single input with multiple outputs — given a person's age, there could be many people with that age. A function cannot do this. Given an input, the output is determined completely. There is no ambiguity, no choice, no list of possibilities.

The notation $f(x) = x^2 + 1$ defines a function. The rule says: take the input $x$, square it, add one. For $x = 3$, the output is $f(3) = 10$. For $x = -2$, the output is $f(-2) = 5$. Each input produces exactly one result.

Multiple inputs can share the same output — both $f(2)$ and $f(-2)$ equal $5$ in the example above — and this is perfectly acceptable. The restriction runs only one direction: one input, one output. The reverse, one output coming from multiple inputs, is allowed.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Functions vs Relations`,
    content: `A relation is any set of ordered pairs — any collection of input-output associations, with no restrictions on how many outputs an input can have. Every function is a relation, but not every relation is a function.

The relation $\\{(1, 2), (1, 3), (2, 5)\\}$ is not a function because the input $1$ is paired with two different outputs, $2$ and $3$. There is no single answer to "what output does $1$ produce?" The relation $\\{(1, 2), (2, 3), (3, 5)\\}$ is a function because each input appears exactly once.

The equation $x^2 + y^2 = 1$ defines a relation: the set of all points on the unit circle. But it is not a function of $x$, because most $x$-values correspond to two $y$-values. At $x = 0$, both $y = 1$ and $y = -1$ satisfy the equation. A function would have to choose one or the other.

The distinction matters because functions have predictable behavior that relations lack. Knowing the input determines the output — this is the property that makes functions useful for modeling, calculation, and analysis.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The Vertical Line Test`,
    content: `The vertical line test determines whether a graph represents a function. If every vertical line intersects the graph at most once, the graph is a function. If any vertical line intersects the graph more than once, the graph is not a function.

The test works because a vertical line consists of all points with a fixed $x$-value. If the line crosses the graph twice, those two intersection points have the same $x$-coordinate but different $y$-coordinates — meaning the same input produces two different outputs, violating the definition of a function.

A parabola opening upward passes the test: every vertical line hits it at most once. A circle fails: vertical lines through the interior hit it twice. A horizontal line passes: each vertical line intersects it exactly once. A vertical line fails spectacularly: a single vertical line intersects it infinitely many times.

The test applies only to graphs in the standard $xy$-plane where $x$ represents input and $y$ represents output. It is a visual check, useful for quickly identifying whether a curve could represent a function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Representing Functions`,
    content: `Functions can be represented in multiple forms, each with its own advantages.

An equation gives an explicit formula: $f(x) = 3x - 7$ tells exactly how to compute the output from any input. Equations are precise, compact, and allow calculation at any point in the domain.

A table lists specific input-output pairs. It shows concrete values but only at selected points — the function's behavior between listed values must be inferred or interpolated.

A graph displays the function visually, showing shape, trends, and features at a glance. It reveals where the function increases or decreases, where it reaches maximum or minimum values, and how it behaves across its entire [domain](!/functions/domain). Reading exact values from a graph requires estimation.

A verbal description explains the rule in words: "the function that doubles its input and subtracts five." Verbal forms connect functions to real-world contexts but lack the precision of equations.

Each representation captures the same underlying relationship. Converting between them — writing an equation from a graph, building a table from an equation, describing a pattern in words — is a fundamental skill.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Function Notation`,
    content: `The notation $f(x)$ names a function and its output simultaneously. The letter $f$ identifies the function — the rule itself — while $f(x)$ denotes the output when the input is $x$.

Reading $f(x)$ as "f of x" emphasizes the relationship: the value of $f$ at $x$. The parentheses do not indicate multiplication. The expression $f(x)$ is a single object, not $f$ times $x$.

Other letters serve the same purpose. The notation $g(t)$ names a function $g$ with input variable $t$. The notation $P(n)$ might represent a function $P$ that takes integers $n$ as input. The choice of letters often reflects context: $t$ for time, $n$ for counting numbers, $x$ for a generic variable.

Specific values replace the variable to indicate particular outputs. If $f(x) = x^2 + 1$, then $f(3)$ means the output when $x = 3$, which equals $10$. The notation $f(a)$ means the output at some unspecified value $a$. The notation $f(x + 1)$ means: take $x + 1$ as the input, apply the rule.

Named functions like $f$ and $g$ are distinguished from anonymous expressions like $x^2 + 1$ written without a function name. Both describe the same rule, but naming allows reference to the function as an object in its own right.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Evaluating Functions`,
    content: `Evaluating a function means finding the output for a given input. The process depends on how the function is represented.

From an equation, evaluation is substitution. To find $f(5)$ when $f(x) = 2x^2 - 3x + 1$, replace every $x$ with $5$:

$$f(5) = 2(5)^2 - 3(5) + 1 = 50 - 15 + 1 = 36$$

From a table, evaluation is lookup. Find the input value in one column and read the corresponding output from the other column. If the exact input is not listed, the table does not directly provide the answer.

From a graph, evaluation is geometric. Locate the input value on the horizontal axis, move vertically to the curve, then read the output from the vertical axis. Precision depends on the scale and clarity of the graph.

Evaluating with expressions as input requires careful substitution. For $f(x) = x^2 + 1$, finding $f(a + 2)$ means replacing $x$ with $a + 2$:

$$f(a + 2) = (a + 2)^2 + 1 = a^2 + 4a + 4 + 1 = a^2 + 4a + 5$$

The parentheses around $a + 2$ are essential — without them, order of operations produces errors.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Input, Output, and Variables`,
    content: `The input to a function is called the independent variable — its value is chosen freely from the allowed set. The output is the dependent variable — its value depends on, and is determined by, the input.

Convention uses $x$ for the independent variable and $y$ for the dependent variable, so $y = f(x)$ states that $y$ is determined by $x$ through the function $f$. But variables can be named anything. A function describing position over time might use $t$ for time and $s$ for position: $s = f(t)$.

The set of all allowed inputs is the [domain](!/functions/domain). The set of all possible outputs is the [range](!/functions/range). Together, domain and range describe what goes in and what comes out.

The language of dependence appears throughout applications. "Revenue depends on price." "Temperature depends on time." "Height depends on age." Each statement implies a functional relationship, with the second quantity determined by the first. Identifying which variable is independent and which is dependent is essential for setting up function models correctly.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Determining Whether a Relationship is a Function`,
    content: `Different representations require different tests to determine whether a relationship qualifies as a function.

From a set of ordered pairs, check for repeated inputs with different outputs. The set $\\{(2, 5), (3, 7), (2, 9)\\}$ is not a function because $2$ appears twice with different outputs. The set $\\{(2, 5), (3, 7), (4, 5)\\}$ is a function — the repeated output $5$ causes no problem.

From a table, examine the input column. If any input value appears more than once with different corresponding outputs, the table does not represent a function.

From a graph, apply the vertical line test. If any vertical line crosses the graph more than once, the relationship is not a function.

From an equation, consider whether solving for $y$ yields a unique value for each $x$. The equation $y = x^2$ defines a function: each $x$ gives exactly one $y$. The equation $y^2 = x$ does not define $y$ as a function of $x$: for $x = 4$, both $y = 2$ and $y = -2$ satisfy the equation.

From a verbal description, analyze the rule. "Assign to each person their biological mother" defines a function. "Assign to each person their sibling" does not — a person may have multiple siblings or none.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Special Values`,
    content: `Certain outputs carry particular significance and receive special attention.

The zeros of a function are the input values where the output equals zero — the solutions to $f(x) = 0$. On a graph, zeros correspond to $x$-intercepts, the points where the curve crosses the horizontal axis. Finding zeros is central to solving equations: the equation $x^2 - 5x + 6 = 0$ asks for the zeros of $f(x) = x^2 - 5x + 6$.

The $y$-intercept is the output when the input is zero, namely $f(0)$. On a graph, this is the point where the curve crosses the vertical axis. Not every function has a $y$-intercept — if $0$ is not in the domain, $f(0)$ does not exist.

Undefined points are inputs where the function has no output. Division by zero, square roots of negative numbers, and logarithms of non-positive numbers all produce undefined results. The function $f(x) = 1/x$ is undefined at $x = 0$. The function $g(x) = \\sqrt{x}$ is undefined for $x < 0$ when restricted to real outputs.

Identifying these special values — where the function equals zero, where it is undefined, where it crosses the axes — anchors the analysis of any function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Functions in Context`,
    content: `Functions model relationships in the real world. The input and output carry units, the domain reflects physical constraints, and the function values have practical meaning.

A function $C(n)$ might give the cost in dollars to produce $n$ items. Here $n$ must be a non-negative integer (or non-negative real, if fractional production makes sense), and $C(n)$ represents actual currency. The statement $C(100) = 450$ means producing $100$ items costs $\\$450$.

A function $d(t)$ might give the distance in meters traveled after $t$ seconds. The domain might be $[0, 10]$ if the motion is observed for ten seconds. The zeros of $d$ indicate when the object is at the starting position. The [range](!/functions/range) indicates how far the object travels.

Interpreting functions in context means translating between mathematical statements and real-world meaning. What does $f(5) = 20$ mean? What does it mean for the function to be increasing? What real-world constraint limits the domain?

Context also imposes restrictions absent from pure mathematics. Time cannot be negative, populations must be non-negative integers, percentages lie between $0$ and $100$. These constraints shape the [domain](!/functions/domain) when functions model reality.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `The Landscape of Function Topics`,
    content: `The concept of function branches into interconnected topics, each exploring a different aspect of how functions behave and how they relate to one another.

[Domain](!/functions/domain) and [range](!/functions/range) describe what goes in and what comes out — the allowed inputs and the resulting outputs.

[Graphs](!/functions/graphs) provide visual representation, turning algebraic rules into geometric objects that can be seen, traced, and compared.

[Analyzing functions](!/functions/analyzing) means systematically describing behavior: where the function increases, where it decreases, where it reaches extreme values.

[Properties](!/functions/properties) characterize functions by their features — symmetry, monotonicity, boundedness, continuity, and more.

[Arithmetic](!/functions/arithmetic) combines functions through addition, subtraction, multiplication, and division, building new functions from existing ones.

[Transformations](!/functions/transformations) shift, stretch, compress, and reflect graphs, showing how changes to the formula affect the picture.

[Composition](!/functions/composition) chains functions together, using the output of one as the input to another.

[Inverse functions](!/functions/inverse) reverse the process, recovering input from output when such reversal is possible.

[Piecewise functions](!/functions/piecewise) use different rules on different intervals, capturing relationships that change behavior at boundaries.

[Function families](!/functions/families) group functions by shared structure — linear, quadratic, exponential, and others — each with characteristic shapes and properties.`,
    before: ``,
    after: ``,
    link: '',
  },

}

const introContent = {
  id: "intro",
  title: "The Input-Output Machine",
  content: `A function is a rule that takes an input and produces exactly one output. Give it a number, and it returns a number — always the same output for the same input, never ambiguous, never uncertain. This consistency is what makes functions the central object of study in mathematics: they capture relationships that are predictable and repeatable.

The notation $f(x)$ names both the rule and its output. The letter $f$ identifies the function, the variable $x$ represents an arbitrary input, and $f(x)$ denotes the output that results. From this simple framework emerges the machinery for describing motion, growth, change, and structure across every branch of mathematics and its applications.`
}



  const faqQuestions = {
    obj1: {
      question: "What is a function in math?",
      answer: "A function is a rule that assigns exactly one output to each input. The defining requirement is uniqueness: each input yields one and only one output, with no ambiguity or choice involved."
    },
    obj2: {
      question: "What is the difference between a function and a relation?",
      answer: "A relation is any set of ordered pairs with no restrictions, while a function requires each input to have exactly one output. Every function is a relation, but not every relation is a function."
    },
    obj3: {
      question: "How does the vertical line test work?",
      answer: "The vertical line test determines if a graph represents a function. If every vertical line intersects the graph at most once, it is a function. If any vertical line crosses the graph more than once, it is not a function."
    },
    obj4: {
      question: "What does f(x) notation mean?",
      answer: "The notation f(x) names a function and its output simultaneously. The letter f identifies the function rule, while f(x) denotes the output when the input is x. The parentheses do not indicate multiplication."
    },
    obj5: {
      question: "How do you evaluate a function?",
      answer: "Evaluating a function means finding the output for a given input. From an equation, substitute the input value for the variable. From a table, look up the input and read the output. From a graph, locate the input on the horizontal axis and read the corresponding output."
    }
  }

  const seoData = {
    title: "Functions: Definition & Types | Learn Math Class",
    description: "Learn what functions are in mathematics. Covers function notation, the vertical line test, evaluating functions, domain and range, and representations.",
    keywords: keyWords.join(", "),
    url: "/functions",
    name: "Mathematical Functions"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": "https://www.learnmathclass.com" + seoData.url,
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
        "name": "Mathematical Functions"
      },
      "teaches": [
        "Definition of a function and the uniqueness requirement",
        "Difference between functions and relations",
        "Vertical line test for identifying functions",
        "Function notation and evaluating functions",
        "Multiple representations of functions",
        "Independent and dependent variables"
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
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
        title: "Functions: Definition & Types | Learn Math Class",
        description: "Learn what functions are in mathematics. Covers function notation, the vertical line test, evaluating functions, domain and range, and representations.",
        keywords: keyWords.join(", "),
        url: "/functions",
         name: "Mathematical Functions"
      },
       }
    }
   }

export default function FunctionsPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas
}) {


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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Functions</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="children"  // or "children"
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
