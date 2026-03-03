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
    'function arithmetic',
    'adding functions',
    'subtracting functions',
    'multiplying functions',
    'dividing functions',
    'function operations',
    'combined functions domain',
    'sum of functions',
    'difference of functions',
    'product of functions',
    'quotient of functions',
    'arithmetic operations on functions',
    'pointwise operations',
    'function combination',
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
    title: `Combining Functions with Operations`,
    content: `Functions combine through arithmetic operations just as numbers do. Given two functions $f$ and $g$, their sum, difference, product, and quotient are new functions defined pointwise — by performing the operation on the outputs at each input.

The operations act on outputs, not on inputs. To find $(f + g)(3)$, evaluate $f(3)$ and $g(3)$ separately, then add the results. The input $3$ passes through both functions; their outputs combine.

This pointwise definition means that combining functions produces new functions. If $f(x) = x^2$ and $g(x) = 3x$, then $(f + g)(x) = x^2 + 3x$ is a single function with its own formula, [graph](!/functions/graphs), and [properties](!/functions/properties).

The four arithmetic operations — addition, subtraction, multiplication, and division — each have their own notation and rules. All share the principle: operate on outputs while the input remains the same.

These combinations differ from [composition](!/functions/composition), which chains functions together rather than combining their outputs. Arithmetic combines outputs at the same input; composition feeds the output of one function into the input of another.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Sum of Functions`,
    content: `The sum of two functions $f$ and $g$ is the function $(f + g)$ defined by:

$$(f + g)(x) = f(x) + g(x)$$

At each input $x$, evaluate both functions and add their outputs.

If $f(x) = x^2$ and $g(x) = 5x - 3$, then:

$$(f + g)(x) = x^2 + 5x - 3$$

To evaluate at a specific point, say $x = 2$:

$$(f + g)(2) = f(2) + g(2) = 4 + 7 = 11$$

The same result comes from the combined formula: $4 + 10 - 3 = 11$.

Addition is commutative: $f + g = g + f$. It is also associative: $(f + g) + h = f + (g + h)$. These properties mirror the arithmetic of numbers.

Sums of functions appear throughout applications. Total cost is fixed cost plus variable cost. Combined revenue is revenue from product A plus revenue from product B. Net force is the sum of individual forces.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Difference of Functions`,
    content: `The difference of two functions $f$ and $g$ is the function $(f - g)$ defined by:

$$(f - g)(x) = f(x) - g(x)$$

At each input $x$, evaluate both functions and subtract the second from the first.

If $f(x) = 3x + 7$ and $g(x) = x^2$, then:

$$(f - g)(x) = 3x + 7 - x^2 = -x^2 + 3x + 7$$

Order matters. The function $f - g$ is not the same as $g - f$. If $(f - g)(x) = -x^2 + 3x + 7$, then $(g - f)(x) = x^2 - 3x - 7$. The outputs are negatives of each other:

$$(g - f)(x) = -(f - g)(x)$$

Subtraction is neither commutative nor associative. Care with order and grouping is essential.

Differences of functions model comparisons. Profit is revenue minus cost. Net change is final value minus initial value. The gap between two quantities is the difference of the functions measuring them.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Product of Functions`,
    content: `The product of two functions $f$ and $g$ is the function $(f \\cdot g)$ or $(fg)$ defined by:

$$(f \\cdot g)(x) = f(x) \\cdot g(x)$$

At each input $x$, evaluate both functions and multiply their outputs.

If $f(x) = x + 2$ and $g(x) = x - 3$, then:

$$(fg)(x) = (x + 2)(x - 3) = x^2 - x - 6$$

The product of two linear functions is a quadratic. The product of two polynomials is a polynomial whose degree is the sum of the degrees.

Multiplication is commutative: $fg = gf$. It is associative: $(fg)h = f(gh)$. It distributes over addition: $f(g + h) = fg + fh$.

Products of functions arise in area calculations (length times width), in physics (mass times acceleration), and in probability (independent probabilities multiply). When two quantities combine multiplicatively, their functions multiply.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Quotient of Functions`,
    content: `The quotient of two functions $f$ and $g$ is the function $(f/g)$ defined by:

$$\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}$$

At each input $x$, evaluate both functions and divide the first output by the second.

If $f(x) = x^2 - 1$ and $g(x) = x + 1$, then:

$$\\left(\\frac{f}{g}\\right)(x) = \\frac{x^2 - 1}{x + 1} = \\frac{(x-1)(x+1)}{x+1} = x - 1$$

provided $x \\neq -1$.

Division introduces a critical restriction: the denominator cannot be zero. Even if the simplified form appears to have no restriction, the original quotient is undefined where $g(x) = 0$. The function $(f/g)$ has a hole at $x = -1$, not a continuous extension.

Division is neither commutative nor associative. The quotient $f/g$ differs from $g/f$ unless both equal $1$.

Quotients of functions model rates and ratios. Average cost is total cost divided by quantity. Speed is distance divided by time. Efficiency is output divided by input.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Notation and Evaluation at a Point`,
    content: `The notations $(f + g)(x)$ and $f(x) + g(x)$ mean the same thing. The first emphasizes that $f + g$ is itself a function; the second emphasizes the operation on outputs. Both describe the same value.

Evaluating a combined function at a specific input can proceed two ways.

Method 1: Evaluate each function separately, then combine.

For $(f - g)(4)$ where $f(x) = x^2$ and $g(x) = 2x + 1$:

$$f(4) = 16, \\quad g(4) = 9$$
$$(f - g)(4) = 16 - 9 = 7$$

Method 2: Find the combined formula first, then evaluate.

$$(f - g)(x) = x^2 - 2x - 1$$
$$(f - g)(4) = 16 - 8 - 1 = 7$$

Both methods yield the same result. The first is often faster for a single evaluation; the second is necessary when working with the combined function repeatedly.

When functions are given as tables or [graphs](!/functions/graphs), only Method 1 applies directly — look up each function value and combine.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Domain of Combined Functions`,
    content: `The [domain](!/functions/domain) of a combined function is restricted to inputs that work for both component functions. An input must be in the domain of $f$ and in the domain of $g$ for the combination to be defined.

For sums, differences, and products:

$$\\text{Domain of } f + g, f - g, f \\cdot g = \\text{Domain of } f \\cap \\text{Domain of } g$$

The intersection ensures both functions can be evaluated.

If $f(x) = \\sqrt{x}$ with domain $[0, \\infty)$ and $g(x) = \\sqrt{4 - x}$ with domain $(-\\infty, 4]$, then:

$$\\text{Domain of } f + g = [0, \\infty) \\cap (-\\infty, 4] = [0, 4]$$

Only inputs from $0$ to $4$ lie in both domains.

Different component functions can shrink the combined domain dramatically. If $f$ is defined for $x > 0$ and $g$ is defined for $x < 0$, their intersection is empty — the combined function has no valid inputs.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Additional Restrictions for Quotient`,
    content: `The quotient $f/g$ inherits all the restrictions of both $f$ and $g$, plus one more: the denominator $g(x)$ cannot equal zero.

$$\\text{Domain of } \\frac{f}{g} = (\\text{Domain of } f \\cap \\text{Domain of } g) \\setminus \\{x : g(x) = 0\\}$$

Start with the intersection of domains, then remove any points where $g$ equals zero.

If $f(x) = x + 3$ and $g(x) = x^2 - 4$, both have domain $(-\\infty, \\infty)$. The intersection is all real numbers. But $g(x) = 0$ when $x = 2$ or $x = -2$. So:

$$\\text{Domain of } \\frac{f}{g} = (-\\infty, -2) \\cup (-2, 2) \\cup (2, \\infty)$$

Even if the quotient simplifies algebraically to a function with no apparent restriction, the original domain exclusions remain. The quotient $\\dfrac{x^2 - 1}{x - 1} = x + 1$ simplifies, but the domain still excludes $x = 1$. The [graph](!/functions/graphs) has a hole at $(1, 2)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Graphical Interpretation`,
    content: `Combining functions graphically means combining their heights at each $x$-value.

For the sum $f + g$, the height of the combined graph at any $x$ equals the sum of the heights of $f$ and $g$ at that $x$. If $f(3) = 2$ and $g(3) = 5$, then $(f + g)(3) = 7$. The point $(3, 7)$ lies on the graph of $f + g$.

Where both functions are positive, the sum is higher than either. Where one is positive and one is negative, they partially cancel. Where both are negative, the sum is more negative than either.

For the product $fg$, the height at $x$ is $f(x) \\cdot g(x)$. Where both are positive or both are negative, the product is positive. Where they have opposite signs, the product is negative. Where either equals zero, the product equals zero — the [zeros](!/functions/properties) of $f$ and $g$ are zeros of $fg$.

Graphing combined functions by hand is labor-intensive — each point requires reading two values and computing. But the concept clarifies what the algebra produces: a new curve whose shape emerges from the interaction of two others.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Algebraic Simplification`,
    content: `Combined functions often simplify to cleaner forms. Simplification makes evaluation easier and reveals structure.

For sums and differences, combine like terms:

$$(3x^2 + 2x - 1) + (x^2 - 5x + 4) = 4x^2 - 3x + 3$$

For products, distribute and combine:

$$(x + 3)(x - 2) = x^2 + x - 6$$

For quotients, factor and reduce when possible:

$$\\frac{x^2 - 9}{x + 3} = \\frac{(x-3)(x+3)}{x+3} = x - 3 \\quad (x \\neq -3)$$

Simplification must respect domain restrictions. The reduced form $x - 3$ appears defined everywhere, but the original quotient excludes $x = -3$. The simplified function still has a hole at that point.

Simplified forms make further analysis easier — finding [zeros](!/functions/properties), identifying [end behavior](!/functions/properties), computing additional values. They also reveal when two apparently different expressions define the same function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Building Complex Functions`,
    content: `Simple functions combine to build complex ones. Understanding the components reveals the structure of the whole.

The function $h(x) = x^2 + 3x - 5$ can be viewed as the sum of $f(x) = x^2$, $g(x) = 3x$, and $k(x) = -5$. Each component contributes: the parabolic shape from $x^2$, the linear tilt from $3x$, the vertical shift from $-5$.

The function $h(x) = (x - 2)(x + 5)$ is a product of two linear functions. Its zeros come directly from its factors: $x = 2$ and $x = -5$. Its graph is a parabola opening upward.

Breaking a function into simpler pieces aids both analysis and construction. To model a situation, identify the contributing factors, express each as a function, and combine appropriately.

Revenue depends on price and quantity: $R = p \\cdot q$. If price is $p(x) = 50 - 2x$ and quantity is $q(x) = x$, then revenue is $R(x) = (50 - 2x) \\cdot x = 50x - 2x^2$. The combined function inherits meaning from its components.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Applications in Context`,
    content: `Function arithmetic models real-world combinations of quantities.

Profit equals revenue minus cost. If $R(x)$ gives revenue from selling $x$ units and $C(x)$ gives the cost of producing them:

$$P(x) = R(x) - C(x)$$

Profit is positive when revenue exceeds cost, negative when cost exceeds revenue, and zero at break-even points where $R(x) = C(x)$.

Average cost is total cost divided by quantity:

$$\\bar{C}(x) = \\frac{C(x)}{x}$$

This quotient is undefined at $x = 0$ (no items produced) and describes cost per unit at each production level.

Combined distance from two moving objects involves sums or differences depending on direction. If $d_1(t)$ and $d_2(t)$ give positions at time $t$, the gap between them is $|d_1(t) - d_2(t)|$.

Population models might add birth rate function and subtract death rate function to model net growth. Economic models add multiple income streams or subtract expenses from revenue.

In each case, the arithmetic of functions translates the arithmetic of the situation. What combines additively in reality combines additively in the model.`,
    before: ``,
    after: ``,
    link: '',
  },

}
 const introContent = {
  id: "intro",
  title: "Building Functions from Functions",
  content: `Functions can be combined through the same operations that combine numbers. Add two functions, and their outputs add. Multiply two functions, and their outputs multiply. The result in each case is a new function — one whose behavior emerges from the interplay of its components.

These operations extend the toolkit for constructing and analyzing functions. A profit function is revenue minus cost. A density function is mass divided by volume. Combining functions arithmetically is how mathematical models capture relationships that involve multiple contributing factors.`
}




  const faqQuestions = {
    q1: {
      question: "What is function arithmetic?",
      answer: "Function arithmetic refers to combining two functions using the four basic operations: addition, subtraction, multiplication, and division. Each operation acts pointwise — given the same input, you evaluate both functions separately and then apply the operation to their outputs to produce a new function."
    },
    q2: {
      question: "How do you find the sum of two functions?",
      answer: "The sum of two functions f and g is defined as (f + g)(x) = f(x) + g(x). At each input x, evaluate both functions separately and add their outputs. For example, if f(x) = x² and g(x) = 5x - 3, then (f + g)(x) = x² + 5x - 3. Addition of functions is both commutative and associative, mirroring the arithmetic of numbers."
    },
    q3: {
      question: "What is the domain of combined functions?",
      answer: "The domain of a combined function is the intersection of the domains of both component functions — only inputs that work for both f and g are valid. For sums, differences, and products this is the intersection of the two domains. For quotients, you also remove any inputs where the denominator function equals zero, even if the expression simplifies to a form that appears defined there."
    },
    q4: {
      question: "How does the quotient of functions differ from other function operations?",
      answer: "The quotient (f/g)(x) = f(x)/g(x) introduces an extra domain restriction: the denominator g(x) cannot equal zero. This restriction remains even if the quotient simplifies algebraically to a form with no apparent issue — the original exclusion creates a hole in the graph at that point. Division is also neither commutative nor associative, unlike addition and multiplication."
    },
    q5: {
      question: "How is function arithmetic different from function composition?",
      answer: "Function arithmetic combines the outputs of two functions at the same input — for example, (f + g)(x) adds f(x) and g(x) together. Function composition, by contrast, chains functions sequentially: (f ∘ g)(x) feeds the output of g into f as its input. Arithmetic operates on outputs in parallel; composition feeds outputs forward as new inputs."
    },
  }

  const seoData = {
    title: "Function Arithmetic: Operations on Functions | Learn Math Class",
    description: "Learn function arithmetic: adding, subtracting, multiplying, and dividing functions. Master combined function domains, sum of functions, quotient of functions, and real-world applications.",
    keywords: keyWords.join(", "),
    url: "/functions/arithmetic",
    name: "Function Arithmetic: Operations on Functions",
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "keywords": seoData.keywords,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "educationalLevel": "High School",
      "learningResourceType": "Lesson",
      "teaches": [
        "Sum of functions using pointwise addition",
        "Difference of functions and order of subtraction",
        "Product of functions and multiplicative combinations",
        "Quotient of functions and domain restrictions",
        "Domain of combined functions as intersection of component domains",
        "Graphical interpretation of arithmetic operations on functions",
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      }
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
          "item": "https://www.learnmathclass.com/functions/arithmetic"
        },
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.values(faqQuestions).map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
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
        title: "Function Arithmetic: Operations on Functions | Learn Math Class",
        description: "Learn function arithmetic: adding, subtracting, multiplying, and dividing functions. Master combined function domains, sum of functions, quotient of functions, and real-world applications.",
        keywords: keyWords.join(", "),
        url: "/functions/arithmetic",
         name: "Function Arithmetic: Operations on Functions"
      },
       }
    }
   }

export default function ArithmeticPage({
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Function Arithmetic</h1>
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
