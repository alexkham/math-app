import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "natural exponents",
  "positive integer exponents",
  "exponent definition",
  "product rule exponents",
  "quotient rule exponents",
  "power of a power rule",
  "power of a product",
  "power of a quotient",
  "exponent laws",
  "multiply exponents same base",
  "divide exponents same base",
  "negative base exponent",
  "even odd exponent sign",
  "simplify exponents",
  "exponent rules algebra"
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

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },

    obj1: {
  title: `Definition`,
  content: `For a natural number $n \\geq 1$, the expression $a^n$ means the product of $n$ copies of $a$:

$$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}$$

The base $a$ can be any real number — positive, negative, or zero. The exponent $n$ counts the repetitions.

Concrete examples anchor the definition. $2^4 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$. $5^3 = 5 \\cdot 5 \\cdot 5 = 125$. $(-3)^2 = (-3)(-3) = 9$. $(-3)^3 = (-3)(-3)(-3) = -27$.

Two special cases follow immediately. When $n = 1$, there is only one copy of the base: $a^1 = a$ for any $a$. When the base is $1$, repeated multiplication changes nothing: $1^n = 1$ for any $n$.

A note on convention: whether the natural numbers include $0$ varies by source. In this section, natural exponents start at $n = 1$. The case $a^0$ arises naturally from the quotient rule and is addressed on the [negative exponents](!/algebra/powers/negative-exponents) page, where the extension below $n = 1$ is developed.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj2: {
  title: `Sign Behavior`,
  content: `The sign of $a^n$ depends on the sign of the base and on whether the exponent is even or odd.

A positive base always produces a positive result, regardless of the exponent. $3^2 = 9$, $3^5 = 243$, $3^{100}$ is positive — no power of a positive number can be negative.

A negative base alternates. When $n$ is even, the negative signs pair off and cancel: $(-2)^4 = (-2)(-2)(-2)(-2) = 16$. When $n$ is odd, one negative sign remains unpaired: $(-2)^5 = (-2)(-2)(-2)(-2)(-2) = -32$. The rule is clean — even exponent yields positive, odd exponent yields negative.

Parentheses determine what counts as the base. The expression $(-3)^2$ squares the entire quantity $-3$, giving $(-3)(-3) = 9$. The expression $-3^2$ squares $3$ first and then negates: $-(3^2) = -9$. These are not the same number. The exponent binds to the nearest base, so without parentheses, only $3$ is raised to the power and the negative sign operates on the result.`,
  before: ``,
  after: ``,
  link: '',
},
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj3: {
  title: `The Product Rule`,
  content: `Multiplying two powers of the same base amounts to counting the total number of factors. The expression $2^3 \\cdot 2^4$ writes out as $(2 \\cdot 2 \\cdot 2)(2 \\cdot 2 \\cdot 2 \\cdot 2)$, which is $7$ copies of $2$ multiplied together: $2^7$.

The pattern generalizes to any base:

$$a^m \\cdot a^n = a^{m+n}$$

Three factors of $a$ followed by four more gives seven total — the exponents add. This holds for any natural numbers $m$ and $n$ and any base $a$.

The bases must match for the rule to apply. The product $2^3 \\cdot 3^4$ cannot be simplified by adding exponents, because the bases are different. No law of exponents combines $2^3 \\cdot 3^4$ into a single power — the expression stays as it is unless rewritten another way.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj4: {
  title: `The Quotient Rule`,
  content: `Dividing two powers of the same base cancels common factors. The expression $\\frac{2^5}{2^3}$ writes out as $\\frac{2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2}{2 \\cdot 2 \\cdot 2}$. Three copies of $2$ cancel between numerator and denominator, leaving $2 \\cdot 2 = 2^2$.

The general rule subtracts exponents:

$$\\frac{a^m}{a^n} = a^{m-n} \\qquad (m > n,\\; a \\neq 0)$$

Five factors in the numerator minus three in the denominator leaves two — the exponent of the result is the difference.

For natural exponents, the rule requires $m > n$ to keep the result within the natural number framework. When $m = n$, the expression becomes $\\frac{a^n}{a^n} = 1$, which would correspond to $a^0$. That case lies outside the scope of natural exponents and is the first signal that the definition needs extending — a thread picked up on the [negative exponents](!/algebra/powers/negative-exponents) page.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
  obj5: {
  title: `Power of a Power`,
  content: `Raising a power to another power multiplies the exponents. The expression $(2^3)^2$ means $2^3 \\cdot 2^3$, which by the product rule equals $2^{3+3} = 2^6$.

The general rule follows the same logic:

$$(a^m)^n = a^{m \\cdot n}$$

The outer exponent $n$ creates $n$ copies of $a^m$. The product rule then adds $m$ to itself $n$ times, producing $m \\cdot n$.

This rule applies regardless of the values of $m$ and $n$ — as long as both are natural numbers, the result is straightforward multiplication of exponents. The expression $(x^4)^3 = x^{12}$, and $(5^2)^5 = 5^{10}$.

Care is needed with notation. The expression $a^{m^n}$ is not the same as $(a^m)^n$. Stacked exponents evaluate from the top down: $a^{m^n} = a^{(m^n)}$, not $a^{mn}$. For instance, $2^{3^2} = 2^9 = 512$, while $(2^3)^2 = 2^6 = 64$.`,
  before: ``,
  after: ``,
  link: '',
},

    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj6: {
  title: `Power of a Product`,
  content: `An exponent applied to a product distributes to each factor individually. The expression $(2 \\cdot 3)^4$ can be expanded as $(2 \\cdot 3)(2 \\cdot 3)(2 \\cdot 3)(2 \\cdot 3)$. Rearranging the factors groups all the $2$s and all the $3$s together: $(2 \\cdot 2 \\cdot 2 \\cdot 2)(3 \\cdot 3 \\cdot 3 \\cdot 3) = 2^4 \\cdot 3^4$.

The general rule:

$$(ab)^n = a^n \\cdot b^n$$

Each factor in the product acquires the exponent independently. This extends to any number of factors: $(abc)^n = a^n b^n c^n$.

The rule works because multiplication is commutative and associative — the order in which factors are grouped does not affect the product. Rewriting $(ab)(ab)(ab)$ as $(a \\cdot a \\cdot a)(b \\cdot b \\cdot b)$ is valid precisely because factors can be rearranged freely.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj7: {
  title: `Power of a Quotient`,
  content: `An exponent applied to a quotient distributes to numerator and denominator separately. The expression $\\left(\\frac{2}{3}\\right)^4$ expands as $\\frac{2}{3} \\cdot \\frac{2}{3} \\cdot \\frac{2}{3} \\cdot \\frac{2}{3} = \\frac{2^4}{3^4} = \\frac{16}{81}$.

The general rule:

$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} \\qquad (b \\neq 0)$$

The logic mirrors the power of a product rule. Multiplying $n$ copies of $\\frac{a}{b}$ means multiplying $n$ copies of $a$ in the numerator and $n$ copies of $b$ in the denominator. The restriction $b \\neq 0$ is inherited from the requirement that the original fraction be defined.

Combined with the other rules, the power of a quotient enables simplification of complex fractional expressions. The expression $\\left(\\frac{x^2}{y^3}\\right)^4 = \\frac{x^8}{y^{12}}$, applying both the power of a quotient and the power of a power rule in a single step.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj8: {
  title: `Worked Examples`,
  content: `The laws work together in practice. Simplifying expressions typically requires recognizing which rule applies at each step and applying them in sequence.

Simplify $3^2 \\cdot 3^5$. The bases match, so the product rule gives $3^{2+5} = 3^7 = 2187$.

Simplify $\\frac{x^8}{x^3}$. The quotient rule gives $x^{8-3} = x^5$.

Simplify $(2x^3)^4$. The power of a product distributes: $2^4 \\cdot (x^3)^4 = 16x^{12}$.

Simplify $\\frac{(a^2b)^3}{a^4b^2}$. Start with the numerator: $(a^2b)^3 = a^6b^3$. Then apply the quotient rule to each variable: $\\frac{a^6b^3}{a^4b^2} = a^{6-4}b^{3-2} = a^2b$.

Simplify $\\left(\\frac{3x^2}{y}\\right)^3 \\cdot y^4$. The power of a quotient gives $\\frac{3^3 x^6}{y^3} \\cdot y^4 = \\frac{27x^6 \\cdot y^4}{y^3} = 27x^6y$.

Each step applies one law. When multiple laws are needed, working from the innermost grouping outward — simplifying parentheses first, then combining like bases — produces the cleanest path to the result.`,
  before: ``,
  after: ``,
  link: '',
},
    obj9:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
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
  id: "intro",
  title: "Where Exponents Begin",
  content: `Before powers can be extended to negative, fractional, or irrational exponents, they must first be grounded in the simplest case: a positive whole number telling you how many times to multiply a base by itself. This is where the notation $a^n$ acquires its first meaning, where the [laws of exponents](!/algebra/powers/exponent-rules/) are first derived from concrete arithmetic, and where the patterns emerge that every later extension is built to preserve.`
}

const faqQuestions = {
  obj1: {
    question: "What does a^n mean for natural exponents?",
    answer: "For a natural number n ≥ 1, the expression aⁿ means the product of n copies of a. For example, 2⁴ = 2·2·2·2 = 16. The base a can be any real number, and the exponent n counts how many times to multiply the base by itself."
  },
  obj2: {
    question: "What is the product rule for exponents?",
    answer: "When multiplying powers with the same base, add the exponents: aᵐ · aⁿ = aᵐ⁺ⁿ. For example, 2³ · 2⁴ = 2⁷ = 128. The bases must match — the rule doesn't apply to expressions like 2³ · 3⁴."
  },
  obj3: {
    question: "What is the quotient rule for exponents?",
    answer: "When dividing powers with the same base, subtract the exponents: aᵐ / aⁿ = aᵐ⁻ⁿ (where m > n and a ≠ 0). For example, x⁸ / x³ = x⁵. This rule subtracts exponents because division cancels common factors."
  },
  obj4: {
    question: "What is the power of a power rule?",
    answer: "When raising a power to another power, multiply the exponents: (aᵐ)ⁿ = aᵐⁿ. For example, (x⁴)³ = x¹². This works because the outer exponent creates n copies of aᵐ, and the product rule adds m to itself n times."
  },
  obj5: {
    question: "What is the power of a product rule?",
    answer: "An exponent applied to a product distributes to each factor: (ab)ⁿ = aⁿbⁿ. For example, (2·3)⁴ = 2⁴ · 3⁴ = 16 · 81 = 1296. This extends to any number of factors: (abc)ⁿ = aⁿbⁿcⁿ."
  },
  obj6: {
    question: "What is the power of a quotient rule?",
    answer: "An exponent applied to a quotient distributes to numerator and denominator: (a/b)ⁿ = aⁿ/bⁿ (where b ≠ 0). For example, (2/3)⁴ = 2⁴/3⁴ = 16/81."
  },
  obj7: {
    question: "How does the sign of a negative base work with exponents?",
    answer: "A negative base raised to an even exponent is positive: (-2)⁴ = 16. A negative base raised to an odd exponent is negative: (-2)⁵ = -32. The even/odd exponent determines whether the negative signs pair off and cancel."
  },
  obj8: {
    question: "What is the difference between (-3)² and -3²?",
    answer: "(-3)² = (-3)(-3) = 9 because the entire quantity -3 is squared. But -3² = -(3²) = -9 because the exponent binds only to 3, and the negative sign is applied after. Parentheses determine what is included in the base."
  },
  obj9: {
    question: "What is a^1 equal to?",
    answer: "a¹ = a for any base a. When the exponent is 1, there is only one copy of the base, so the result is simply the base itself. For example, 5¹ = 5 and (-7)¹ = -7."
  },
  obj10: {
    question: "What is 1^n equal to?",
    answer: "1ⁿ = 1 for any natural number n. Multiplying 1 by itself any number of times always produces 1. For example, 1¹⁰⁰ = 1."
  },
  obj11: {
    question: "Why must the bases match to use the product rule?",
    answer: "The product rule aᵐ · aⁿ = aᵐ⁺ⁿ works by counting total factors of the same base. With different bases like 2³ · 3⁴, you can't combine them into a single power — there's no law of exponents that simplifies mixed bases."
  },
  obj12: {
    question: "What is the difference between (a^m)^n and a^(m^n)?",
    answer: "(aᵐ)ⁿ = aᵐⁿ — you multiply the exponents. But aᵐⁿ means a raised to the power (mⁿ), with the stacked exponents evaluated top-down. For example, (2³)² = 2⁶ = 64, but 2^(3²) = 2⁹ = 512."
  },
  obj13: {
    question: "How do you simplify expressions with multiple exponent rules?",
    answer: "Work from innermost grouping outward. First simplify expressions inside parentheses using power rules, then combine like bases using product or quotient rules. For (2x³)⁴: distribute the exponent to get 2⁴x¹² = 16x¹²."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Natural Exponents",
    "description": "Master natural exponents: definition of aⁿ, product rule, quotient rule, power of a power, power of products and quotients. Sign behavior with negative bases and worked examples.",
    "url": "https://www.learnmathclass.com/algebra/powers/natural-exponents",
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
      "name": "Natural Exponents"
    },
    "teaches": [
      "Definition of aⁿ as repeated multiplication",
      "Sign behavior with negative bases",
      "Product rule: aᵐ · aⁿ = aᵐ⁺ⁿ",
      "Quotient rule: aᵐ / aⁿ = aᵐ⁻ⁿ",
      "Power of a power: (aᵐ)ⁿ = aᵐⁿ",
      "Power of products and quotients",
      "Simplifying expressions with exponents"
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
        "name": "Powers",
        "item": "https://www.learnmathclass.com/algebra/powers"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Natural Exponents",
        "item": "https://www.learnmathclass.com/algebra/powers/natural-exponents"
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


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Natural Exponents | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/powers/natural-exponents",
//          name: "name"
//       },
        
//        }
//     }

return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Natural Exponents: Definition & Exponent Rules | Learn Math Class",
      description: "Master natural exponents: definition of aⁿ, product rule, quotient rule, power of a power, power of products and quotients. Sign behavior with negative bases and worked examples.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers/natural-exponents",
      name: "Natural Exponents"
    },
  }
}
   }

// export default function NaturalExponentsPage({seoData,sectionsContent , introContent}) {
export default function NaturalExponentsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Natural Exponents</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
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
