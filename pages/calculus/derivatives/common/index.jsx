import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "common derivatives",
  "derivative formulas",
  "power rule derivative",
  "derivative of sin cos",
  "derivative of e^x",
  "derivative of ln x",
  "trigonometric derivatives",
  "exponential derivative",
  "logarithm derivative",
  "polynomial derivative",
  "derivative of tan x",
  "derivative of sec x",
  "basic derivative formulas",
  "derivative table calculus"
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
    title: `Constant Functions`,
    content: `
For any constant $c$:

$$\\frac{d}{dx}[c] = 0$$

The graph of a constant function is a horizontal line. Every secant line through two points on it has slope zero, so the tangent line at every point also has slope zero. From the limit definition, the difference quotient $\\frac{c - c}{h} = 0$ for all $h \\neq 0$, and the limit is $0$.

Under differentiation, constant terms vanish. In any sum $f(x) + c$, the constant contributes nothing to the derivative: $\\frac{d}{dx}[f(x) + c] = f'(x)$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Power Functions`,
    content: `
For any real exponent $n$:

$$\\frac{d}{dx}[x^n] = nx^{n-1}$$

The rule applies uniformly across exponent types. Positive integers: $\\frac{d}{dx}[x^5] = 5x^4$. Negative integers: $\\frac{d}{dx}[x^{-3}] = -3x^{-4}$. Fractions: $\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$. Irrational exponents: $\\frac{d}{dx}[x^\\pi] = \\pi x^{\\pi - 1}$.

For positive integer $n$, the proof expands $(x+h)^n$ using the binomial theorem. The leading term after cancellation is $nx^{n-1}h$, and dividing by $h$ and taking the limit gives $nx^{n-1}$. All higher-order terms contain $h$ as a factor and vanish in the limit.

Extension to negative and fractional exponents uses the quotient rule and the chain rule respectively, or alternatively [logarithmic differentiation](!/calculus/derivatives/techniques): writing $x^n = e^{n \\ln x}$ and applying the chain rule gives $\\frac{d}{dx}[x^n] = e^{n \\ln x} \\cdot \\frac{n}{x} = x^n \\cdot \\frac{n}{x} = nx^{n-1}$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Polynomials`,
    content: `
A polynomial $p(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$ is differentiated term by term using the power rule, constant multiple rule, and sum rule:

$$p'(x) = na_n x^{n-1} + (n-1)a_{n-1}x^{n-2} + \\cdots + a_1$$

Each term drops its degree by one. The constant term $a_0$ disappears. A polynomial of degree $n$ has a derivative of degree $n - 1$.

Polynomials are [differentiable](!/calculus/derivatives/differentiability) at every real number. Their derivatives are again polynomials, so the process can be repeated indefinitely. After $n$ differentiations, a degree-$n$ polynomial becomes a constant $n! \\cdot a_n$. One more differentiation yields zero, and all subsequent derivatives remain zero. This termination property distinguishes polynomials from transcendental functions, whose derivatives cycle or persist indefinitely.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Trigonometric Functions — Sine and Cosine`,
    content: `
The two fundamental trigonometric derivatives are:

$$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x$$

The sine derivative is proved from the limit definition. Expanding $\\sin(x + h)$ using the angle addition formula gives $\\sin x \\cos h + \\cos x \\sin h$. The difference quotient becomes

$$\\frac{\\sin x(\\cos h - 1) + \\cos x \\sin h}{h} = \\sin x \\cdot \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\frac{\\sin h}{h}$$

The [special limits](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$ and $\\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0$ yield the result: $\\cos x$.

The cosine derivative follows similarly, or by differentiating $\\cos x = \\sin(\\pi/2 - x)$ using the chain rule. The negative sign in $(\\cos x)' = -\\sin x$ is essential and a frequent source of error.

Repeated differentiation cycles with period four: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. This periodicity extends to [higher-order derivatives](!/calculus/derivatives/higher-order): $\\frac{d^n}{dx^n}[\\sin x] = \\sin(x + n\\pi/2)$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Trigonometric Functions — Tangent, Cotangent, Secant, Cosecant`,
    content: `
The remaining four trigonometric derivatives follow from sine and cosine via the quotient rule or rewriting in terms of sine and cosine.

$$\\frac{d}{dx}[\\tan x] = \\sec^2 x \\qquad \\qquad \\frac{d}{dx}[\\cot x] = -\\csc^2 x$$

$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x \\qquad \\qquad \\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$

For $\\tan x = \\frac{\\sin x}{\\cos x}$, the quotient rule gives $\\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$.

A pattern runs through the six derivatives: the cofunctions—$\\cos$, $\\cot$, $\\csc$—each carry a negative sign in their derivatives, while $\\sin$, $\\tan$, $\\sec$ do not. This sign pattern is worth noting as a memory aid rather than a coincidence.

Each derivative is valid on the domain of the original function. The derivatives of $\\tan x$ and $\\sec x$ are undefined at $x = \\pi/2 + k\\pi$ (where $\\cos x = 0$). The derivatives of $\\cot x$ and $\\csc x$ are undefined at $x = k\\pi$ (where $\\sin x = 0$).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Exponential Functions`,
    content: `
The natural exponential function has the unique property of being its own derivative:

$$\\frac{d}{dx}[e^x] = e^x$$

No other function satisfies $f'(x) = f(x)$ except constant multiples $Ce^x$. This self-replicating property is what makes $e$ the natural base for exponential functions.

The proof from the limit definition uses the [special limit](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$. The difference quotient for $e^x$ factors as $e^x \\cdot \\frac{e^h - 1}{h}$, and the limit gives $e^x \\cdot 1 = e^x$.

For a general base $a > 0$, $a \\neq 1$:

$$\\frac{d}{dx}[a^x] = a^x \\ln a$$

This follows from rewriting $a^x = e^{x \\ln a}$ and applying the chain rule. The factor $\\ln a$ is constant—it scales the derivative. When $a = e$, $\\ln a = 1$ and the factor disappears, confirming the special role of base $e$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Logarithmic Functions`,
    content: `
The natural logarithm has derivative:

$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x} \\qquad x > 0$$

This can be derived by [implicit differentiation](!/calculus/derivatives/techniques). If $y = \\ln x$, then $e^y = x$. Differentiating both sides: $e^y \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{e^y} = \\frac{1}{x}$.

Alternatively, the limit definition gives $\\lim_{h \\to 0} \\frac{\\ln(x+h) - \\ln x}{h} = \\lim_{h \\to 0} \\frac{1}{h}\\ln\\left(\\frac{x+h}{x}\\right) = \\lim_{h \\to 0} \\frac{1}{h}\\ln\\left(1 + \\frac{h}{x}\\right)$, which evaluates to $\\frac{1}{x}$ using the limit definition of $e$.

For a general base $a > 0$, $a \\neq 1$:

$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$

This follows from the change of base formula $\\log_a x = \\frac{\\ln x}{\\ln a}$ and the constant multiple rule. The natural logarithm gives the simplest derivative—another reason $e$ is the preferred base.

The function $\\ln|x|$ extends the domain to all $x \\neq 0$, and its derivative is $\\frac{1}{x}$ for both positive and negative $x$. This extended form appears frequently in [integration](!/calculus/integrals).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Summary of Common Derivatives`,
    content: `
The complete set of common derivative formulas:

$$\\frac{d}{dx}[c] = 0 \\qquad \\frac{d}{dx}[x^n] = nx^{n-1}$$

$$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x$$

$$\\frac{d}{dx}[\\tan x] = \\sec^2 x \\qquad \\frac{d}{dx}[\\cot x] = -\\csc^2 x$$

$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x \\qquad \\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$

$$\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[a^x] = a^x \\ln a$$

$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x} \\qquad \\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$

These twelve formulas, combined with the [differentiation rules](!/calculus/derivatives/rules), handle every explicit function built from powers, trigonometric functions, exponentials, and logarithms. Functions involving inverse trigonometric, hyperbolic, or piecewise definitions require the additional formulas collected in [derivatives of special functions](!/calculus/derivatives/special).
`,
    before: ``,
    after: ``,
    link: '',
  },
};

 const introContent = {
  id: `intro`,
  title: `The Core Derivative Library`,
  content: `
A small collection of derivative formulas covers the vast majority of differentiation work. Polynomials, trigonometric functions, exponentials, and logarithms appear constantly, and their derivatives should be available from memory. Every more complex derivative—a composition, a product, an implicitly defined relation—ultimately reduces to these building blocks combined through [differentiation rules](!/calculus/derivatives/rules).

Each formula below is provable from the [limit definition](!/calculus/derivatives). For some, the proof is a direct algebraic manipulation of the difference quotient. For others, it requires [special limits](!/calculus/limits/special) such as $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$. The proofs confirm the formulas; the formulas replace the proofs in daily computation.
`
};


const faqQuestions = {
  obj1: {
    question: "What is the derivative of a constant?",
    answer: "The derivative of any constant c is zero: d/dx[c] = 0. A constant function graphs as a horizontal line with slope zero everywhere. Constant terms vanish under differentiation.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the power rule for derivatives?",
    answer: "For any real exponent n: d/dx[xⁿ] = nxⁿ⁻¹. The rule works for positive integers, negative integers, fractions, and irrational exponents. Multiply by the exponent, then reduce the exponent by one.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you differentiate polynomials?",
    answer: "Differentiate term by term using the power rule. Each term drops its degree by one; the constant term disappears. A degree-n polynomial has a degree-(n−1) derivative. After n differentiations, you get a constant; one more gives zero.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the derivatives of sine and cosine?",
    answer: "d/dx[sin x] = cos x and d/dx[cos x] = −sin x. The negative sign in the cosine derivative is essential. Repeated differentiation cycles with period four: sin → cos → −sin → −cos → sin.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the derivatives of tan, cot, sec, and csc?",
    answer: "d/dx[tan x] = sec²x, d/dx[cot x] = −csc²x, d/dx[sec x] = sec x tan x, d/dx[csc x] = −csc x cot x. Cofunctions (cos, cot, csc) carry negative signs in their derivatives; sin, tan, sec do not.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the derivative of e^x?",
    answer: "d/dx[eˣ] = eˣ. The natural exponential is unique in being its own derivative. For general base a: d/dx[aˣ] = aˣ ln a. When a = e, ln a = 1 and the factor disappears.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the derivative of ln x?",
    answer: "d/dx[ln x] = 1/x for x > 0. For general base a: d/dx[logₐ x] = 1/(x ln a). The natural logarithm gives the simplest derivative. The function ln|x| extends to all x ≠ 0 with derivative 1/x.",
    sectionId: "7"
  },
  obj8: {
    question: "What are all the common derivative formulas?",
    answer: "The core formulas are: constants → 0, xⁿ → nxⁿ⁻¹, sin x → cos x, cos x → −sin x, tan x → sec²x, eˣ → eˣ, aˣ → aˣ ln a, ln x → 1/x. Combined with differentiation rules, these handle all standard functions.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Common Derivatives",
    "description": "Essential derivative formulas: constants, power rule, polynomials, trigonometric functions (sin, cos, tan, sec), exponentials (e^x, a^x), and logarithms (ln x, log_a x).",
    "url": "https://www.learnmathclass.com/calculus/derivatives/common",
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
      "name": "Common Derivatives"
    },
    "teaches": [
      "Derivatives of constants and power functions",
      "Polynomial differentiation",
      "Trigonometric function derivatives",
      "Exponential function derivatives",
      "Logarithmic function derivatives",
      "Complete derivative formula table"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Common Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives/common"
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



  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Common Derivatives| Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/derivatives/common",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Common Derivatives: Formulas & Examples | Learn Math Class",
      description: "Essential derivative formulas: constants, power rule, polynomials, trigonometric functions (sin, cos, tan, sec), exponentials (e^x, a^x), and logarithms (ln x, log_a x).",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/common",
      name: "Common Derivatives"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   {/* <Head>
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head> */}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Common Derivatives</h1>
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
