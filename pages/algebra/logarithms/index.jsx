import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  'logarithms',
  'logarithm definition',
  'log base',
  'common logarithm',
  'natural logarithm',
  'logarithm rules',
  'logarithmic equations',
  'logarithm properties',
  'inverse of exponentiation',
  'log and exponential relationship',
  'change of base formula',
  'logarithmic functions',
  'logarithmic inequalities',
  'graphing logarithms'
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

    const sectionsContent={

      obj0: {
  title: `Key Terms`,
  content: `
## Core Vocabulary
 
- [Logarithm](!/algebra/definitions#logarithm) — the exponent to which a base must be raised to produce a given number
- [Base (of a Logarithm)](!/algebra/definitions#base_(of_a_logarithm)) — the number $a$ in $\\log_a(b)$; must be positive and not equal to $1$
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm)) — the number $b$ in $\\log_a(b)$; must be positive
 
## Special Bases
 
- [Common Logarithm](!/algebra/definitions#common_logarithm) — base $10$, written $\\log(x)$
- [Natural Logarithm](!/algebra/definitions#natural_logarithm) — base $e$, written $\\ln(x)$
- [Euler's Number (e)](!/algebra/definitions#euler's_number_(e)) — the irrational constant $e \\approx 2.71828$
 
## Rules
 
- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_(logarithms)) — $\\log_a(xy) = \\log_a(x) + \\log_a(y)$
- [Quotient Rule (Logarithms)](!/algebra/definitions#quotient_rule_(logarithms)) — $\\log_a(x/y) = \\log_a(x) - \\log_a(y)$
- [Power Rule (Logarithms)](!/algebra/definitions#power_rule_(logarithms)) — $\\log_a(x^n) = n \\cdot \\log_a(x)$
- [Change of Base Formula](!/algebra/definitions#change_of_base_formula) — $\\log_a(x) = \\log_b(x) / \\log_b(a)$
 
## Properties and Behavior
 
- [Monotonicity](!/algebra/definitions#monotonicity) — increasing for $a > 1$, decreasing for $0 < a < 1$
- [One-to-One Property](!/algebra/definitions#one-to-one_property) — if $\\log_a(x) = \\log_a(y)$ then $x = y$
- [Logarithmic Function](!/algebra/definitions#logarithmic_function) — domain $(0, \\infty)$, range $(-\\infty, \\infty)$, vertical asymptote at $x = 0$
- [Logarithmic Equation](!/algebra/definitions#logarithmic_equation) — an equation where the variable appears inside a logarithm
- [Logarithmic Inequality](!/algebra/definitions#logarithmic_inequality) — inequality direction depends on the base`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},

   obj1: {
  title: `What is a Logarithm?`,
  content: `A logarithm answers the question: to what power must a base be raised to produce a given number? The expression $\\log_a(b)$ asks for the exponent that satisfies $a^{?} = b$.

The notation $\\log_a(b) = c$ is read as "log base $a$ of $b$ equals $c$." This statement is equivalent to the exponential form $a^c = b$. The two expressions encode identical information — one solved for the exponent, the other presenting the complete power relationship.

Consider $\\log_2(8) = 3$. This asks: what power of $2$ gives $8$? Since $2^3 = 8$, the answer is $3$. Similarly, $\\log_{10}(1000) = 3$ because $10^3 = 1000$, and $\\log_5(25) = 2$ because $5^2 = 25$.

The base sits as a subscript, the argument sits inside parentheses, and the output is the exponent. Every logarithm can be rewritten as an exponential equation, and every exponential equation can be rewritten using logarithms. This duality is the foundation of all logarithmic work — converting between forms is often the first step in solving problems.`,
  before: ``,
  after: ``,
  link: '',
},
   obj2: {
  title: `Restrictions on Base and Argument`,
  content: `Not every combination of base and argument produces a valid logarithm. Two restrictions apply.

The base $a$ must satisfy $a > 0$ and $a \\neq 1$. A negative base would produce complex or undefined values for most exponents — $(-2)^{1/2}$ is not a real number. A base of zero fails because $0^c = 0$ for positive $c$, meaning no exponent could produce any result other than zero. A base of one fails because $1^c = 1$ for all $c$, meaning every number would need the same logarithm, which is incoherent. Bases between zero and one are valid and produce decreasing logarithmic functions.

The argument $b$ must satisfy $b > 0$. No real exponent applied to a positive base can produce zero or a negative number. Since $a^c$ is always positive when $a > 0$, logarithms of zero or negative numbers do not exist in the real number system. Attempting to compute $\\log_2(-4)$ or $\\log_3(0)$ has no solution.

These restrictions are not arbitrary conventions — they emerge directly from the behavior of exponential functions. The [properties](!/algebra/logarithms/properties) of logarithms and the shape of their [graphs](!/algebra/logarithms/graphs) all follow from these fundamental constraints.`,
  before: ``,
  after: ``,
  link: '',
},
   obj3: {
  title: `Key Logarithmic Values`,
  content: `Two values hold for every valid base and appear constantly in calculations.

The first: $\\log_a(1) = 0$ for any base $a$. This follows immediately from the exponential form. Since $a^0 = 1$ for every positive $a \\neq 1$, the exponent that produces $1$ is always zero. The point $(1, 0)$ lies on every logarithmic graph.

The second: $\\log_a(a) = 1$ for any base $a$. Since $a^1 = a$, raising the base to the first power returns the base itself. The exponent that produces the base is always one. The point $(a, 1)$ lies on every logarithmic graph.

These values serve as anchors. When sketching [graphs](!/algebra/logarithms/graphs), they provide two guaranteed points. When checking calculations, they offer quick verification — if a formula gives $\\log_3(1) \\neq 0$, something has gone wrong.

Additional values follow patterns. For base $10$: $\\log_{10}(10) = 1$, $\\log_{10}(100) = 2$, $\\log_{10}(1000) = 3$, and so on — each multiplication by $10$ increases the logarithm by $1$. For base $2$: $\\log_2(2) = 1$, $\\log_2(4) = 2$, $\\log_2(8) = 3$, $\\log_2(16) = 4$. Recognizing powers of the base makes mental calculation possible.`,
  before: ``,
  after: ``,
  link: '',
},
   obj4: {
  title: `Inverse Identities`,
  content: `Logarithms and exponentials undo each other. Two identities express this relationship and arise whenever the operations are composed.

The first identity: $\\log_a(a^x) = x$. Taking the logarithm of an exponential with the same base extracts the exponent. The expression $\\log_2(2^5) = 5$ without calculation — the logarithm simply returns what the exponent was. This works because logarithm asks "what power of $a$ gives $a^x$?" and the answer is obviously $x$.

The second identity: $a^{\\log_a(x)} = x$. Raising the base to a logarithmic power returns the original argument. The expression $3^{\\log_3(7)} = 7$ without calculation — the exponential returns what the argument was. This works because $\\log_a(x)$ is precisely the power that produces $x$ when applied to base $a$.

These identities are not tricks to memorize but logical necessities. If $f(x) = a^x$ and $g(x) = \\log_a(x)$, then $f$ and $g$ are inverse functions: $f(g(x)) = x$ and $g(f(x)) = x$. Each operation reverses the other.

In practice, these identities simplify expressions and solve [equations](!/algebra/logarithms/equations). Recognizing when an expression contains a logarithm and exponential with matching bases allows immediate simplification.`,
  before: ``,
  after: ``,
  link: '',
},
   obj5: {
  title: `Common and Natural Logarithms`,
  content: `Two bases appear so frequently that they receive special notation.

The common logarithm uses base $10$ and is written $\\log(x)$ without a subscript, or sometimes $\\log_{10}(x)$ for clarity. Base $10$ aligns with the decimal system, making common logarithms natural for expressing orders of magnitude, pH calculations, and decibel scales.

The natural logarithm uses base $e \\approx 2.71828$ and is written $\\ln(x)$. The number $e$ emerges from calculus — it is the unique base for which the derivative of $a^x$ equals $a^x$ itself. Natural logarithms dominate theoretical mathematics, physics, and any context involving continuous growth or decay.

Both notations are shorthand. The statement $\\log(100) = 2$ means $\\log_{10}(100) = 2$. The statement $\\ln(e^3) = 3$ means $\\log_e(e^3) = 3$. Converting between bases uses a formula covered in [logarithm rules](!/algebra/logarithms/rules).`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Common and Natural Logs](!/algebra/logarithms/common-natural) →@`,
  link: '/algebra/logarithms/common-natural',
},
   obj6: {
  title: `Properties of Logarithms`,
  content: `Logarithmic functions possess structural characteristics that determine their behavior across the entire domain.

The domain of $\\log_a(x)$ is all positive real numbers — only positive arguments are permitted. The range is all real numbers — logarithms can produce any output, positive or negative. As $x$ approaches zero from the right, the logarithm decreases without bound. As $x$ increases without bound, the logarithm also increases, but slowly.

Monotonicity depends on the base. When $a > 1$, the function is strictly increasing: larger inputs produce larger outputs. When $0 < a < 1$, the function is strictly decreasing: larger inputs produce smaller outputs. This property is critical when solving [inequalities](!/algebra/logarithms/inequalities).

The one-to-one property follows from monotonicity: if $\\log_a(x) = \\log_a(y)$, then $x = y$. No two distinct inputs can produce the same output. This property justifies a key technique in solving [equations](!/algebra/logarithms/equations) — when both sides of an equation are logarithms with the same base, the arguments must be equal.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Properties of Logarithms](!/algebra/logarithms/properties) →@`,
  link: '/algebra/logarithms/properties',
},
   obj7: {
  title: `Logarithm Rules`,
  content: `The rules of logarithms transform how arguments combine under the logarithm function. Each rule corresponds to an exponent law, inverted.

The product rule: $\\log_a(xy) = \\log_a(x) + \\log_a(y)$. Logarithms convert multiplication into addition. This follows from $a^m \\cdot a^n = a^{m+n}$ — if the exponents add when bases multiply, then logarithms of products split into sums.

The quotient rule: $\\log_a(x/y) = \\log_a(x) - \\log_a(y)$. Division becomes subtraction. The power rule: $\\log_a(x^n) = n \\cdot \\log_a(x)$. Exponents come down as coefficients.

These rules allow expanding complex logarithms into simpler pieces and condensing sums of logarithms into single expressions. Both skills appear constantly when solving [equations](!/algebra/logarithms/equations). The change of base formula converts logarithms from one base to another, enabling calculator computation for any base.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Logarithm Rules](!/algebra/logarithms/rules) →@`,
  link: '/algebra/logarithms/rules',
},
   obj8: {
  title: `Logarithmic Equations`,
  content: `Equations involving logarithms appear in two main forms: those where the logarithm equals a constant, and those where logarithms appear on both sides.

An equation like $\\log_2(x) = 5$ converts directly to exponential form: $x = 2^5 = 32$. The logarithm definition provides the solution method. An equation like $\\log_3(x - 1) = \\log_3(7)$ uses the one-to-one property: since the logarithms are equal and have the same base, the arguments must match, giving $x - 1 = 7$ and $x = 8$.

More complex equations require the [rules](!/algebra/logarithms/rules) to combine or separate logarithms before these techniques apply. Every solution must be checked against domain restrictions — the argument of every logarithm must be positive. Extraneous solutions that violate these restrictions must be rejected.

Logarithms also solve exponential equations when matching bases fails. An equation like $3^x = 7$ has no integer solution, but taking logarithms of both sides and applying the power rule yields $x = \\log(7)/\\log(3)$.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Logarithmic Equations](!/algebra/logarithms/equations) →@`,
  link: '/algebra/logarithms/equations',
},
  obj9: {
  title: `Logarithmic Inequalities`,
  content: `Solving logarithmic inequalities follows the same algebraic steps as equations, with one critical addition: the base determines whether the inequality direction is preserved or reversed.

When the base satisfies $a > 1$, the logarithm is increasing. Larger arguments produce larger outputs, so inequality direction is preserved. If $\\log_2(x) > 3$, then $x > 2^3 = 8$.

When the base satisfies $0 < a < 1$, the logarithm is decreasing. Larger arguments produce smaller outputs, so inequality direction reverses. If $\\log_{1/2}(x) > 3$, then $x < (1/2)^3 = 1/8$.

Domain restrictions apply throughout. Every argument must remain positive, and this constraint intersects with the algebraic solution. The [properties](!/algebra/logarithms/properties) page covers monotonicity in detail; the [graphs](!/algebra/logarithms/graphs) page shows why direction reversal occurs visually.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Logarithmic Inequalities](!/algebra/logarithms/inequalities) →@`,
  link: '/algebra/logarithms/inequalities',
},
   obj10: {
  title: `Graphing Logarithmic Functions`,
  content: `The graph of $y = \\log_a(x)$ has a distinctive shape determined by the [properties](!/algebra/logarithms/properties) of the function.

Every logarithmic graph passes through $(1, 0)$ because $\\log_a(1) = 0$ for all bases. Every graph also passes through $(a, 1)$ because $\\log_a(a) = 1$. A vertical asymptote exists at $x = 0$ — the graph approaches the $y$-axis but never touches it, plunging toward $-\\infty$ as $x$ approaches zero from the right.

The base controls the overall direction. For $a > 1$, the graph rises from left to right. For $0 < a < 1$, the graph falls. Larger bases (when greater than one) produce flatter curves; the function grows more slowly.

Transformations shift, stretch, and reflect the basic shape. Horizontal shifts move the asymptote. Vertical shifts raise or lower the curve. Reflections flip across axes. Writing equations from transformed graphs requires identifying the new asymptote location and key points.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Graphing Logarithmic Functions](!/algebra/logarithms/graphs) →@`,
  link: '/algebra/logarithms/graphs',
},
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }

const introContent = {
  title: `The Inverse of Exponentiation`,
  content: `Exponentiation answers the question: given a base and an exponent, what is the result? Logarithms reverse this process, answering: given a base and a result, what exponent produced it? This inverse relationship makes logarithms essential wherever exponential growth or decay appears — compound interest, radioactive decay, sound intensity, earthquake magnitude, and countless other phenomena.

The expression $\\log_a(b) = c$ states that $a^c = b$. The logarithm extracts the exponent. Once this connection is clear, logarithms transform from mysterious notation into a natural extension of the exponential ideas already familiar from earlier algebra.`,
};


const faqQuestions = {
  obj1: {
    question: "What is a logarithm?",
    answer: "A logarithm answers the question: to what power must a base be raised to produce a given number? The expression log base a of b equals c means a raised to the power c equals b. Logarithms extract exponents from exponential relationships.",
    sectionId: "1"
  },
  obj2: {
    question: "Why must the argument of a logarithm be positive?",
    answer: "A positive base raised to any real exponent always produces a positive result. Since no real exponent can make a positive base yield zero or a negative number, logarithms of zero or negative arguments have no real solution.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the difference between common and natural logarithms?",
    answer: "Common logarithms use base 10 and are written log(x). Natural logarithms use base e (approximately 2.71828) and are written ln(x). Base 10 aligns with the decimal system, while base e arises naturally in calculus and continuous growth models.",
    sectionId: "5"
  },
  obj4: {
    question: "How are logarithms and exponentials related?",
    answer: "They are inverse operations. The identity log_a(a^x) = x shows logarithms undo exponentiation, and a^(log_a(x)) = x shows exponentiation undoes logarithms. Each operation reverses the other when the bases match.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the basic logarithm rules?",
    answer: "The product rule converts log(xy) into log(x) + log(y). The quotient rule converts log(x/y) into log(x) - log(y). The power rule converts log(x^n) into n times log(x). Each rule corresponds to an exponent law applied in reverse.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Logarithms",
    "description": "Learn logarithms from definition to application: base and argument rules, inverse identities, common and natural logs, properties, rules, equations, and graphs.",
    "url": "https://www.learnmathclass.com/algebra/logarithms",
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
      "name": "Logarithms"
    },
    "teaches": [
      "Logarithm definition and exponential-logarithmic conversion",
      "Base and argument restrictions",
      "Key values and inverse identities",
      "Common and natural logarithms",
      "Logarithm rules: product, quotient, power, change of base",
      "Logarithmic equations, inequalities, and graphs"
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
        "name": "Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms"
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
      title: "Logarithms: Definition, Rules & Properties | Learn Math Class",
      description: "Learn logarithms from definition to application: base and argument rules, inverse identities, common and natural logs, properties, rules, equations, and graphs.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms",
      name: "Logarithms"
    },
  }
}
   }

export default function LogarithmsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {   
    
  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Logarithms</h1>
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
