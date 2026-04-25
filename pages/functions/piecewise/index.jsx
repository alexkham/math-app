import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords=[
    'piecewise functions',
    'piecewise defined function',
    'graphing piecewise functions',
    'evaluating piecewise functions',
    'piecewise notation',
    'step functions',
    'absolute value piecewise',
    'piecewise domain',
    'piecewise continuity',
    'piecewise function examples',
    'writing piecewise functions',
    'piecewise function range',
    'floor function',
    'piecewise real world applications'
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
    title: `What is a Piecewise Function`,
    content: `A piecewise function is defined by multiple formulas, each applying to a different part of the [domain](!/functions/domain). Rather than one rule governing all inputs, separate rules govern separate intervals.

The function remains a function — each input still produces exactly one output. But which formula produces that output depends on where the input falls.

A simple example:

$$f(x) = \\begin{cases} x + 1 & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$$

For negative inputs, use $x + 1$. For non-negative inputs, use $x^2$. At $x = -3$, the output is $-3 + 1 = -2$. At $x = 2$, the output is $2^2 = 4$. At $x = 0$, the boundary, the condition $x \\geq 0$ applies, giving $0^2 = 0$.

Each piece can be any type of function — linear, quadratic, constant, radical, or otherwise. The pieces join together at boundary points, sometimes connecting smoothly, sometimes jumping abruptly.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Notation`,
    content: `Piecewise functions use brace notation to display all pieces together. Each line shows a formula paired with its condition:

$$f(x) = \\begin{cases} \\text{formula}_1 & \\text{if condition}_1 \\\\ \\text{formula}_2 & \\text{if condition}_2 \\\\ \\text{formula}_3 & \\text{if condition}_3 \\end{cases}$$

The conditions specify which inputs use which formula. They typically involve inequalities: $x < 0$, $x \\geq 3$, $1 \\leq x < 4$.

The conditions must be mutually exclusive — no input should satisfy more than one condition. Otherwise, the function would have two outputs for some inputs, violating the definition of a function.

The conditions should cover the entire intended domain — every input should satisfy exactly one condition. Gaps in coverage leave the function undefined at some points.

At boundary points, one condition includes the boundary (with $\\leq$ or $\\geq$) and the adjacent condition excludes it (with $<$ or $>$). This ensures the boundary belongs to exactly one piece.

Example with three pieces:

$$g(x) = \\begin{cases} 2x & \\text{if } x < -1 \\\\ x^2 + 1 & \\text{if } -1 \\leq x \\leq 2 \\\\ 5 & \\text{if } x > 2 \\end{cases}$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Evaluating Piecewise Functions`,
    content: `To evaluate a piecewise function at a specific input:

Step 1: Determine which condition the input satisfies.

Step 2: Use the corresponding formula to compute the output.

Only one piece applies to each input. The other formulas are irrelevant for that evaluation.

Let $f(x) = \\begin{cases} 3x + 2 & \\text{if } x < 1 \\\\ x^2 - 1 & \\text{if } x \\geq 1 \\end{cases}$

Find $f(-2)$: Since $-2 < 1$, use $3x + 2$. $f(-2) = 3(-2) + 2 = -4$.

Find $f(1)$: Since $1 \\geq 1$, use $x^2 - 1$. $f(1) = 1 - 1 = 0$.

Find $f(4)$: Since $4 \\geq 1$, use $x^2 - 1$. $f(4) = 16 - 1 = 15$.

Boundary points require attention. The condition that includes the boundary (with $\\leq$ or $\\geq$) determines which formula to use. At $x = 1$ above, the condition $x \\geq 1$ applies, not $x < 1$.

Errors often occur at boundaries when the wrong piece is selected. Always check the inequality symbols carefully.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Graphing Piecewise Functions`,
    content: `To [graph](!/functions/graphs) a piecewise function, graph each piece on its designated interval, then combine them.

Step 1: Identify each piece and its interval.

Step 2: Graph each piece as if it were defined everywhere, but only draw the portion within its interval.

Step 3: Mark endpoints appropriately — solid dot for included endpoints, open dot for excluded endpoints.

For $f(x) = \\begin{cases} x + 3 & \\text{if } x < 1 \\\\ 2x - 1 & \\text{if } x \\geq 1 \\end{cases}$:

The first piece is a line with slope $1$, drawn for $x < 1$. At $x = 1$, this piece gives $1 + 3 = 4$, but $x = 1$ is excluded, so place an open dot at $(1, 4)$.

The second piece is a line with slope $2$, drawn for $x \\geq 1$. At $x = 1$, this piece gives $2(1) - 1 = 1$, and $x = 1$ is included, so place a solid dot at $(1, 1)$.

The graph shows two line segments that do not connect — there is a jump at $x = 1$ from height $1$ to (approaching) height $4$.

The visual reveals discontinuities. Pieces that connect smoothly indicate continuity at that boundary. Pieces that don't connect indicate a jump.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Domain of Piecewise Functions`,
    content: `The [domain](!/functions/domain) of a piecewise function is the union of all intervals covered by its pieces.

If the pieces cover all real numbers without gaps, the domain is $(-\\infty, \\infty)$.

If the pieces leave gaps, the domain excludes those intervals.

For $f(x) = \\begin{cases} x^2 & \\text{if } x \\leq -1 \\\\ \\sqrt{x} & \\text{if } x \\geq 0 \\end{cases}$:

The first piece covers $(-\\infty, -1]$. The second covers $[0, \\infty)$. The interval $(-1, 0)$ is not covered by either piece.

Domain: $(-\\infty, -1] \\cup [0, \\infty)$.

Additionally, each piece must be valid on its interval. A piece involving $\\sqrt{x - 3}$ on $[0, 5]$ would require $x \\geq 3$ for the formula to work, potentially reducing the effective domain of that piece to $[3, 5]$.

The domain is determined by both the stated conditions and the natural restrictions of each formula. Both must be satisfied.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Range of Piecewise Functions`,
    content: `The [range](!/functions/range) of a piecewise function is the union of the ranges of all pieces, restricted to their respective intervals.

Each piece contributes outputs from its portion of the domain. The combined range collects all these outputs.

For $f(x) = \\begin{cases} 2 & \\text{if } x < 0 \\\\ x + 1 & \\text{if } x \\geq 0 \\end{cases}$:

The first piece is constant at $2$ for all $x < 0$. It contributes $\\{2\\}$ to the range.

The second piece is linear starting at $x = 0$. At $x = 0$, output is $1$. As $x \\to \\infty$, output $\\to \\infty$. This piece contributes $[1, \\infty)$ to the range.

Combined range: $\\{2\\} \\cup [1, \\infty) = [1, \\infty)$ (since $2$ is already in $[1, \\infty)$).

Finding the range may require analyzing each piece separately — finding minima, maxima, and behavior on each interval — then combining results.

Discontinuities can create gaps in the range if no piece produces certain values, or they can be invisible in the range if different pieces cover those values.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Continuity of Piecewise Functions`,
    content: `A piecewise function is [continuous](!/functions/properties) at a boundary point if the two pieces meeting there produce the same value. The graph connects without a jump.

For continuity at $x = c$ where two pieces meet:

$$\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)$$

The left piece's limit, the right piece's limit, and the actual value at $c$ must all agree.

For $f(x) = \\begin{cases} x^2 & \\text{if } x \\leq 2 \\\\ 4x - 4 & \\text{if } x > 2 \\end{cases}$:

At $x = 2$: Left piece gives $2^2 = 4$. Right piece as $x \\to 2^+$ gives $4(2) - 4 = 4$. Both equal $4$.

The function is continuous at $x = 2$. The pieces connect.

For $g(x) = \\begin{cases} x + 1 & \\text{if } x < 3 \\\\ 2x - 3 & \\text{if } x \\geq 3 \\end{cases}$:

At $x = 3$: Left piece as $x \\to 3^-$ gives $3 + 1 = 4$. Right piece gives $2(3) - 3 = 3$.

The limits differ ($4 \\neq 3$), so the function is discontinuous at $x = 3$. There is a jump.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Absolute Value as Piecewise`,
    content: `The absolute value function is the most familiar piecewise function:

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

For non-negative inputs, the output equals the input. For negative inputs, the output equals the negation of the input (making it positive).

The [graph](!/functions/graphs) is V-shaped with vertex at the origin. The right arm has slope $1$; the left arm has slope $-1$. The pieces meet at $(0, 0)$ and connect continuously — both pieces give $0$ at $x = 0$.

Transformed absolute value functions shift the V:

$$f(x) = |x - 3| + 2 = \\begin{cases} (x - 3) + 2 & \\text{if } x \\geq 3 \\\\ -(x - 3) + 2 & \\text{if } x < 3 \\end{cases} = \\begin{cases} x - 1 & \\text{if } x \\geq 3 \\\\ -x + 5 & \\text{if } x < 3 \\end{cases}$$

The vertex moves to $(3, 2)$.

Equations involving absolute values often require piecewise analysis. Solving $|x - 2| = 5$ means considering both pieces: $x - 2 = 5$ (giving $x = 7$) and $-(x - 2) = 5$ (giving $x = -3$).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Step Functions`,
    content: `Step functions are piecewise functions where each piece is constant. The graph consists of horizontal segments with jumps between them — like a staircase.

The floor function $\\lfloor x \\rfloor$ returns the greatest integer less than or equal to $x$:

$$\\lfloor 2.7 \\rfloor = 2, \\quad \\lfloor -1.3 \\rfloor = -2, \\quad \\lfloor 5 \\rfloor = 5$$

The graph has horizontal segments at each integer height, jumping up at each integer input. The segment at height $n$ covers $[n, n+1)$ — closed on the left, open on the right.

The ceiling function $\\lceil x \\rceil$ returns the least integer greater than or equal to $x$:

$$\\lceil 2.7 \\rceil = 3, \\quad \\lceil -1.3 \\rceil = -1, \\quad \\lceil 5 \\rceil = 5$$

The segments cover $(n-1, n]$ — open on the left, closed on the right.

Both functions have jump discontinuities at every integer. The [domain](!/functions/domain) is all real numbers; the [range](!/functions/range) is all integers $\\mathbb{Z}$.

Step functions model situations with discrete jumps: postage rates by weight, tax brackets, rounding rules.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Real-World Applications`,
    content: `Piecewise functions naturally model situations where rules change at thresholds.

Tax brackets: Income tax rates increase at certain income levels. Income below $\\$10{,}000$ might be taxed at $10\\%$, income from $\\$10{,}000$ to $\\$40{,}000$ at $20\\%$, and income above $\\$40{,}000$ at $30\\%$.

$$T(x) = \\begin{cases} 0.10x & \\text{if } x \\leq 10000 \\\\ 1000 + 0.20(x - 10000) & \\text{if } 10000 < x \\leq 40000 \\\\ 7000 + 0.30(x - 40000) & \\text{if } x > 40000 \\end{cases}$$

Shipping costs: Packages under $1$ pound cost $\\$5$. Packages from $1$ to $5$ pounds cost $\\$5$ plus $\\$2$ per additional pound. Packages over $5$ pounds cost $\\$13$ plus $\\$1.50$ per additional pound.

Utility rates: Electricity might cost one rate for the first $500$ kWh and a higher rate beyond that threshold.

Parking fees: First hour free, next two hours at one rate, additional hours at another rate.

In each case, the rule changes at specific boundaries, and the piecewise function captures this structure mathematically.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Writing Piecewise Functions`,
    content: `Constructing a piecewise function from a description or [graph](!/functions/graphs) requires identifying the pieces and their intervals.

From a graph:

Step 1: Identify distinct segments or curves.

Step 2: Determine the formula for each segment (line, parabola, constant, etc.).

Step 3: Identify the interval each segment covers, noting open or closed endpoints.

Step 4: Write the piecewise notation with each formula and its condition.

From a verbal description:

Step 1: Identify the thresholds where rules change.

Step 2: Write the formula for each region between thresholds.

Step 3: Specify conditions using inequalities.

Example: "A plumber charges $\\$50$ for the first hour and $\\$30$ for each additional hour."

Let $C(t)$ be the cost for $t$ hours of work ($t > 0$):

$$C(t) = \\begin{cases} 50 & \\text{if } 0 < t \\leq 1 \\\\ 50 + 30(t - 1) & \\text{if } t > 1 \\end{cases}$$

Simplifying the second piece: $50 + 30t - 30 = 30t + 20$.

$$C(t) = \\begin{cases} 50 & \\text{if } 0 < t \\leq 1 \\\\ 30t + 20 & \\text{if } t > 1 \\end{cases}$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Common Mistakes`,
    content: `Several errors recur when working with piecewise functions.

Using the wrong piece at a boundary: At $x = 3$ with conditions $x < 3$ and $x \\geq 3$, the second piece applies, not the first. The inequality symbols determine which piece owns the boundary.

Overlapping conditions: Writing $x \\leq 2$ and $x \\geq 2$ creates overlap at $x = 2$. Both pieces claim this input, making the function ambiguous. Use $x < 2$ and $x \\geq 2$, or $x \\leq 2$ and $x > 2$.

Gaps in conditions: Writing $x < 1$ and $x > 3$ leaves $[1, 3]$ undefined. Unless this gap is intentional (limiting the domain), conditions should cover all intended inputs.

Assuming continuity: Not all piecewise functions are continuous. Checking whether pieces connect at boundaries is essential — do not assume they do.

Forgetting endpoint markers when graphing: Open and closed dots distinguish included from excluded endpoints. Without them, the graph is incomplete and potentially misleading.

Evaluating all pieces instead of one: Only the piece whose condition the input satisfies should be used. The other formulas do not apply to that input.`,
    before: ``,
    after: ``,
    link: '',
  },

}

 const introContent = {
  id: "intro",
  title: "Different Rules for Different Regions",
  content: `Not every function follows a single formula across its entire domain. Tax rates change at income thresholds. Shipping costs jump at weight limits. A ball's height follows one equation while rising and another while falling. These situations demand functions that switch rules depending on where the input lands.

A piecewise function divides its [domain](!/functions/domain) into intervals, assigning a different formula to each piece. The function is defined everywhere it needs to be, but no single expression covers all cases. Instead, a collection of expressions — each with its own territory — combines to form one coherent function.`
}



  const faqQuestions = {
    q1: {
      question: "What is a piecewise function?",
      answer: "A piecewise function is defined by multiple formulas, each applying to a different part of the domain. Rather than one rule governing all inputs, separate rules govern separate intervals. Each input still produces exactly one output, but which formula is used depends on where the input falls."
    },
    q2: {
      question: "How do you evaluate a piecewise function?",
      answer: "To evaluate a piecewise function, first determine which condition the input satisfies, then use the corresponding formula to compute the output. Only one piece applies to each input — the other formulas are irrelevant for that evaluation. Pay special attention at boundary points, since the inequality symbols determine which piece owns the boundary."
    },
    q3: {
      question: "How do you graph a piecewise function?",
      answer: "To graph a piecewise function, graph each piece on its designated interval and combine them. Draw each piece only within its specified interval, then mark endpoints with solid dots for included endpoints and open dots for excluded endpoints. The resulting graph may show connected pieces indicating continuity, or gaps and jumps indicating discontinuities."
    },
    q4: {
      question: "What is the domain of a piecewise function?",
      answer: "The domain of a piecewise function is the union of all intervals covered by its pieces. If the pieces cover all real numbers without gaps, the domain is all real numbers. If pieces leave gaps, those intervals are excluded from the domain. Each piece must also be valid on its interval, accounting for any natural restrictions such as square roots or denominators."
    },
    q5: {
      question: "How is the absolute value function related to piecewise functions?",
      answer: "The absolute value function is the most familiar piecewise function, defined as x when x is non-negative and -x when x is negative. Its graph is V-shaped with vertex at the origin, and the pieces connect continuously at x = 0. Transformed absolute value functions shift the vertex, and equations involving absolute values often require piecewise analysis to solve."
    }
  }

  const seoData = {
    title: "Piecewise Functions - Definition, Graphing & Examples",
    description: "Learn how to define, evaluate, and graph piecewise functions. Step-by-step examples covering notation, continuity, and real-world applications of piecewise-defined functions.",
    keywords: keyWords.join(", "),
    url: "/functions/piecewise",
    name: "Piecewise Functions"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "teaches": [
        "What a piecewise function is and how it differs from a standard function",
        "Piecewise function notation using brace notation and inequality conditions",
        "How to evaluate piecewise functions at specific input values",
        "How to graph piecewise functions with correct endpoint markers",
        "How to determine the domain and range of piecewise functions",
        "How to analyze continuity of piecewise functions at boundary points"
      ]
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": `https://www.learnmathclass.com${seoData.url}`
        }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": faqQuestions.q1.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faqQuestions.q1.answer
          }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q2.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faqQuestions.q2.answer
          }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q3.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faqQuestions.q3.answer
          }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q4.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faqQuestions.q4.answer
          }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q5.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faqQuestions.q5.answer
          }
        }
      ]
    }
  }

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Piecewise Functions - Definition, Graphing & Examples",
        description: "Learn how to define, evaluate, and graph piecewise functions. Step-by-step examples covering notation, continuity, and real-world applications of piecewise-defined functions.",
        keywords: keyWords.join(", "),
        url: "/functions/piecewise",
         name: "Piecewise Functions"
      },
       }
    }
   }

export default function PiecewisePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Piecewise Functions</h1>
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
