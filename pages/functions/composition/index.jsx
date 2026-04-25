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

  const keyWords=['function composition','composite functions','f of g','compose functions','composition notation','domain of composite function','decomposing functions','chain of functions','fog notation','f composed with g','evaluating composite functions','composition of functions examples','nested functions','composition is not commutative']

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
    title: `What is Function Composition`,
    content: `Function composition connects two functions in sequence: the output of the first becomes the input of the second. The result is a new function that combines both operations.

If $g$ takes an input $x$ and produces $g(x)$, and $f$ then takes $g(x)$ and produces $f(g(x))$, the composition $f \\circ g$ captures this two-step process as a single function:

$$(f \\circ g)(x) = f(g(x))$$

The function $g$ acts first, transforming the original input. The function $f$ acts second, transforming the intermediate result. The final output depends on both functions working in sequence.

Composition differs fundamentally from [arithmetic](!/functions/arithmetic). Adding functions combines their outputs at the same input: $(f + g)(x) = f(x) + g(x)$. Composing functions chains their operations: $(f \\circ g)(x) = f(g(x))$. The input to $f$ in composition is not $x$ but $g(x)$.

Composition creates new functions with potentially different [domains](!/functions/domain), [ranges](!/functions/range), and [properties](!/functions/properties) than either component.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Notation for Composition`,
    content: `Several notations express the same composition:

$$(f \\circ g)(x) = f(g(x))$$

The symbol $\\circ$ denotes composition. Read $f \\circ g$ as "$f$ composed with $g$" or "$f$ of $g$."

The notation $f(g(x))$ shows the structure explicitly: $g(x)$ is computed first, then $f$ is applied to that result. The inner function $g$ acts first; the outer function $f$ acts second.

Some texts write $fg(x)$ without the composition symbol, relying on context to distinguish from multiplication. This notation risks confusion and is best avoided unless the meaning is clear.

The order in the notation matters critically. In $f \\circ g$, the function $g$ appears on the right but acts first. The function $f$ appears on the left but acts second. This right-to-left reading matches the nested parentheses in $f(g(x))$: evaluate from the inside out.

When speaking aloud, "$f$ of $g$ of $x$" follows the written order while preserving the evaluation sequence: start with $x$, apply $g$, then apply $f$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Evaluating Compositions at a Point`,
    content: `To find $(f \\circ g)(a)$ for a specific input $a$, work from the inside out:

Step 1: Evaluate the inner function: compute $g(a)$.

Step 2: Evaluate the outer function at that result: compute $f(g(a))$.

Let $f(x) = x^2 + 1$ and $g(x) = 3x - 2$. Find $(f \\circ g)(4)$.

Step 1: $g(4) = 3(4) - 2 = 10$

Step 2: $f(10) = 10^2 + 1 = 101$

Therefore $(f \\circ g)(4) = 101$.

Now find $(g \\circ f)(4)$ — the composition in the opposite order.

Step 1: $f(4) = 4^2 + 1 = 17$

Step 2: $g(17) = 3(17) - 2 = 49$

Therefore $(g \\circ f)(4) = 49$.

The two results differ: $101 \\neq 49$. The order of composition matters — $f \\circ g$ and $g \\circ f$ are generally different functions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Finding Composite Functions Algebraically`,
    content: `To find the formula for $(f \\circ g)(x)$, substitute the entire expression for $g(x)$ into $f$ wherever $f$ has its input variable.

Let $f(x) = x^2 - 4$ and $g(x) = 2x + 1$. Find $(f \\circ g)(x)$.

Start with $f(x) = x^2 - 4$. Replace every $x$ with $g(x) = 2x + 1$:

$$f(g(x)) = (2x + 1)^2 - 4$$

Expand and simplify:

$$(2x + 1)^2 - 4 = 4x^2 + 4x + 1 - 4 = 4x^2 + 4x - 3$$

So $(f \\circ g)(x) = 4x^2 + 4x - 3$.

Now find $(g \\circ f)(x)$. Start with $g(x) = 2x + 1$. Replace $x$ with $f(x) = x^2 - 4$:

$$g(f(x)) = 2(x^2 - 4) + 1 = 2x^2 - 8 + 1 = 2x^2 - 7$$

So $(g \\circ f)(x) = 2x^2 - 7$.

The two composite functions are different, confirming that composition is not commutative.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Domain of Composite Functions`,
    content: `The [domain](!/functions/domain) of a composite function $f \\circ g$ is not simply the intersection of the two domains. Two conditions must be satisfied:

1. $x$ must be in the domain of $g$ — the inner function must be able to process the input.

2. $g(x)$ must be in the domain of $f$ — the output of $g$ must be a valid input for $f$.

Let $f(x) = \\sqrt{x}$ with domain $[0, \\infty)$ and $g(x) = x - 3$ with domain $(-\\infty, \\infty)$.

For $(f \\circ g)(x) = \\sqrt{x - 3}$:

Condition 1: $g$ accepts all real $x$ — no restriction here.

Condition 2: $f$ requires $g(x) \\geq 0$, so $x - 3 \\geq 0$, meaning $x \\geq 3$.

The domain of $f \\circ g$ is $[3, \\infty)$.

Let $f(x) = 1/x$ with domain $x \\neq 0$ and $g(x) = x^2 - 1$.

For $(f \\circ g)(x) = \\dfrac{1}{x^2 - 1}$:

Condition 1: $g$ accepts all real $x$.

Condition 2: $f$ requires $g(x) \\neq 0$, so $x^2 - 1 \\neq 0$, meaning $x \\neq \\pm 1$.

The domain of $f \\circ g$ is $\\{x : x \\neq -1 \\text{ and } x \\neq 1\\}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Non-Commutativity`,
    content: `Composition is not commutative: $f \\circ g$ does not generally equal $g \\circ f$. The order of the functions determines the result.

Let $f(x) = x + 5$ and $g(x) = x^2$.

$(f \\circ g)(x) = f(g(x)) = f(x^2) = x^2 + 5$

$(g \\circ f)(x) = g(f(x)) = g(x + 5) = (x + 5)^2 = x^2 + 10x + 25$

These are different functions with different [graphs](!/functions/graphs) and different values at most inputs. Only at specific points might they coincide by accident.

Non-commutativity reflects the asymmetry of chained processes. Converting Celsius to Fahrenheit, then to Rankine produces a different result than converting Celsius to Rankine, then to Fahrenheit — if such a path even made sense.

In rare cases, $f \\circ g = g \\circ f$. When both functions are linear with the same slope but different intercepts, for example, or when one function is the identity. But these are special cases, not the general rule.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Composing More Than Two Functions`,
    content: `Composition extends to three or more functions. The principle remains the same: evaluate from the innermost function outward.

For three functions $f$, $g$, and $h$:

$$(f \\circ g \\circ h)(x) = f(g(h(x)))$$

The function $h$ acts first on $x$, producing $h(x)$. Then $g$ acts on that result, producing $g(h(x))$. Finally $f$ acts, producing $f(g(h(x)))$.

Let $f(x) = x^2$, $g(x) = x + 1$, and $h(x) = 2x$. Find $(f \\circ g \\circ h)(3)$.

Step 1: $h(3) = 6$

Step 2: $g(6) = 7$

Step 3: $f(7) = 49$

So $(f \\circ g \\circ h)(3) = 49$.

The algebraic formula:

$$h(x) = 2x$$
$$g(h(x)) = 2x + 1$$
$$f(g(h(x))) = (2x + 1)^2 = 4x^2 + 4x + 1$$

Composition is associative: $(f \\circ g) \\circ h = f \\circ (g \\circ h)$. Grouping does not affect the result, though order still matters.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Composition with Itself`,
    content: `A function can be composed with itself. The notation $f \\circ f$ means applying $f$ twice in succession, and $(f \\circ f)(x) = f(f(x))$.

Let $f(x) = 2x$. Then:

$$f(f(x)) = f(2x) = 2(2x) = 4x$$

Applying $f$ twice multiplies by $4$. Applying three times gives $f(f(f(x))) = 8x$. Each application doubles the input.

Let $f(x) = x^2$. Then:

$$f(f(x)) = f(x^2) = (x^2)^2 = x^4$$

Squaring twice yields the fourth power.

The notation $f^2$ sometimes denotes $f \\circ f$, meaning $f$ composed with itself — not $f$ squared as a multiplication. Context determines the meaning. When clarity is needed, write $f \\circ f$ or $f(f(x))$ explicitly.

Iterated composition leads to sequences and dynamical systems. Starting with $x_0$, define $x_1 = f(x_0)$, $x_2 = f(x_1) = f(f(x_0))$, and so on. The behavior of these iterates reveals long-term dynamics of the function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Decomposing Functions`,
    content: `Decomposition reverses composition: given a function $h$, express it as $h = f \\circ g$ for simpler functions $f$ and $g$.

Consider $h(x) = \\sqrt{x^2 + 1}$. This function squares the input, adds one, then takes the square root. Identify the inner and outer operations:

Inner function: $g(x) = x^2 + 1$

Outer function: $f(x) = \\sqrt{x}$

Check: $f(g(x)) = f(x^2 + 1) = \\sqrt{x^2 + 1} = h(x)$. ✓

Consider $h(x) = (3x - 7)^5$. The structure is: form $3x - 7$, then raise to the fifth power.

Inner function: $g(x) = 3x - 7$

Outer function: $f(x) = x^5$

Check: $f(g(x)) = (3x - 7)^5 = h(x)$. ✓

Decomposition is not unique. The function $h(x) = (x + 1)^2$ can be written as $f \\circ g$ with $f(x) = x^2$ and $g(x) = x + 1$, or as $f \\circ g$ with $f(x) = (x + 1)^2$ and $g(x) = x$ (trivial decomposition). Choose the decomposition that serves the purpose — simplifying analysis, enabling substitution in calculus, or revealing structure.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Composition and Inverse Functions`,
    content: `Composition provides the defining property of [inverse functions](!/functions/inverse). If $f^{-1}$ is the inverse of $f$, then:

$$(f \\circ f^{-1})(x) = f(f^{-1}(x)) = x$$

$$(f^{-1} \\circ f)(x) = f^{-1}(f(x)) = x$$

Each composition yields the identity function — the function that returns its input unchanged.

Let $f(x) = 2x + 3$ and $f^{-1}(x) = \\dfrac{x - 3}{2}$. Verify:

$$f(f^{-1}(x)) = f\\left(\\frac{x - 3}{2}\\right) = 2 \\cdot \\frac{x - 3}{2} + 3 = (x - 3) + 3 = x \\checkmark$$

$$f^{-1}(f(x)) = f^{-1}(2x + 3) = \\frac{(2x + 3) - 3}{2} = \\frac{2x}{2} = x \\checkmark$$

This verification method confirms that two functions are inverses. If either composition fails to produce $x$, the functions are not inverses.

The identity function $I(x) = x$ is the compositional equivalent of the number $1$ in multiplication: $f \\circ I = I \\circ f = f$ for any function $f$. Inverses compose to produce this neutral element.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Graphical Composition`,
    content: `Composing functions graphically requires reading values from two [graphs](!/functions/graphs) in sequence.

To find $(f \\circ g)(a)$ from graphs of $f$ and $g$:

Step 1: On the graph of $g$, locate $x = a$ on the horizontal axis. Read the corresponding $y$-value; this is $g(a)$.

Step 2: On the graph of $f$, locate $x = g(a)$ on the horizontal axis. Read the corresponding $y$-value; this is $f(g(a)) = (f \\circ g)(a)$.

The output of $g$ becomes the input for $f$. Each composition evaluation requires two graph readings.

Building the entire graph of $f \\circ g$ from graphs of $f$ and $g$ is labor-intensive. For each $x$-value, perform the two-step reading. The result is a new curve whose shape depends on both component functions.

Graphical composition is most useful for specific point evaluations or for understanding conceptually how the functions interact. For detailed graphing, algebraic methods are more efficient.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Applications of Composition`,
    content: `Composition models processes that occur in stages, where the output of one stage feeds into the next.

Unit conversions often chain. To convert Celsius to Kelvin, add $273.15$. To convert Kelvin to Rankine, multiply by $1.8$. The composition converts Celsius directly to Rankine:

$$R(C) = 1.8(C + 273.15) = 1.8C + 491.67$$

Pricing calculations chain. A $20\\%$ discount applies first: $g(p) = 0.8p$. Then $8\\%$ tax applies: $f(x) = 1.08x$. The final price:

$$f(g(p)) = 1.08(0.8p) = 0.864p$$

The order matters: tax on the discounted price differs from discount on the taxed price.

Growth models chain. If population depends on resources, and resources depend on time, then population depends on time through composition.

In each case, composition captures the sequential nature of the process. The intermediate quantity — Kelvin, discounted price, resource level — may never be explicitly calculated, but it mediates the relationship between initial input and final output.`,
    before: ``,
    after: ``,
    link: '',
  },

}

const introContent = {
  id: "intro",
  title: "Functions Within Functions",
  content: `Some processes happen in stages. Convert a temperature from Celsius to Fahrenheit, then from Fahrenheit to Rankine. Apply a discount to a price, then add tax to the result. Each stage is a function, and the stages chain together — the output of one becomes the input of the next.

This chaining is composition. Given functions $f$ and $g$, the composition $f \\circ g$ applies $g$ first, then feeds the result into $f$. The output of $g$ becomes the input of $f$, creating a single combined process from two separate ones.`
}




  const faqQuestions = [
    {
      question: "What is function composition?",
      answer: "Function composition connects two functions in sequence so that the output of the first becomes the input of the second. Written as (f ∘ g)(x) = f(g(x)), it creates a single new function that combines both operations. The function g acts first on the input x, and then f acts on that intermediate result."
    },
    {
      question: "What does the composition notation f ∘ g mean?",
      answer: "The symbol ∘ denotes composition, and f ∘ g is read as 'f composed with g' or 'f of g.' Although g appears on the right in the notation, it acts first — evaluation proceeds from right to left, matching the nested parentheses in f(g(x)). When spoken aloud, 'f of g of x' preserves this inside-out evaluation order."
    },
    {
      question: "How do you evaluate a composite function at a specific point?",
      answer: "To find (f ∘ g)(a), work from the inside out in two steps. First, evaluate the inner function to get g(a). Then evaluate the outer function at that result to get f(g(a)). For example, if f(x) = x² + 1 and g(x) = 3x − 2, then (f ∘ g)(4) = f(g(4)) = f(10) = 101."
    },
    {
      question: "How do you find the domain of a composite function?",
      answer: "The domain of f ∘ g requires two conditions to be satisfied simultaneously. First, x must be in the domain of g so the inner function can process the input. Second, g(x) must be in the domain of f so the output of g is a valid input for f. The domain of f ∘ g is the set of all x meeting both conditions, which is often more restrictive than either individual domain."
    },
    {
      question: "Is function composition commutative?",
      answer: "No — function composition is not commutative in general. The composition f ∘ g and g ∘ f produce different functions because the order in which the functions are applied changes the result. For example, with f(x) = x + 5 and g(x) = x², (f ∘ g)(x) = x² + 5 while (g ∘ f)(x) = (x + 5)² = x² + 10x + 25, which are clearly different functions."
    }
  ]

  const seoData = {
    title: "Function Composition | Learn Math Class",
    description: "Master function composition with step-by-step examples. Learn to evaluate composite functions, find composite function domains, and decompose complex functions.",
    keywords: keyWords.join(", "),
    url: "/functions/composition",
    name: "Function Composition"
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
        "name": "Learn Math Class"
      },
      "teaches": [
        "What function composition is and how (f ∘ g)(x) = f(g(x)) works",
        "Composition notation including f ∘ g and fog notation",
        "How to evaluate composite functions at a specific point",
        "How to find composite functions algebraically by substitution",
        "How to determine the domain of a composite function",
        "How to decompose a complex function into simpler component functions"
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
      "mainEntity": faqQuestions.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
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
        title: "Function Composition | Learn Math Class",
        description: "Master function composition with step-by-step examples. Learn to evaluate composite functions, find composite function domains, and decompose complex functions.",
        keywords: keyWords.join(", "),
        url: "/functions/composition",
         name: "Function Composition"
      },
       }
    }
   }

export default function CompositionPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Composition</h1>
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
