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
  "polynomial operations",
  "add polynomials",
  "subtract polynomials",
  "multiply polynomials",
  "divide polynomials",
  "polynomial long division",
  "synthetic division",
  "FOIL method",
  "combine like terms",
  "special products polynomials",
  "polynomial arithmetic",
  "degree of polynomial product",
  "polynomial quotient remainder",
  "how to multiply polynomials",
  "how to divide polynomials"
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
  title: `Adding Polynomials`,
  content: `Adding two polynomials reduces to a single principle: combine like terms. Two terms are like terms when they share the same variable raised to the same exponent — $3x^2$ and $5x^2$ are like terms, while $3x^2$ and $5x^3$ are not.

Given $(2x^2 + 3x - 1) + (x^2 - 5x + 4)$, group the terms by degree: the $x^2$ terms are $2x^2$ and $x^2$, the $x$ terms are $3x$ and $-5x$, and the constants are $-1$ and $4$. Adding each group gives $3x^2 - 2x + 3$.

The process works identically for any number of terms and any degree. Align terms by matching exponents, add their coefficients, and write the result. Terms with no counterpart in the other polynomial pass through unchanged — adding $x^3 + 2x$ and $3x^2 - x + 5$ produces $x^3 + 3x^2 + x + 5$, where $x^3$ and $3x^2$ each carried over directly.

The sum of two polynomials is always a polynomial. Its degree is at most the larger of the two input degrees — and in rare cases it can be less, if the leading terms cancel. Adding $2x^3 + x - 1$ and $-2x^3 + 4x + 7$ eliminates the cubic terms entirely, leaving $5x + 6$, a polynomial of degree $1$.`,
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
  title: `Subtracting Polynomials`,
  content: `Subtraction follows the same logic as addition, with one extra step: distribute the negative sign across every term of the polynomial being subtracted before combining like terms.

For $(2x^2 + 3x - 1) - (x^2 - 5x + 4)$, first negate the second polynomial: $-x^2 + 5x - 4$. Then add: $(2x^2 + 3x - 1) + (-x^2 + 5x - 4) = x^2 + 8x - 5$. Every term inside the parentheses changes sign — including terms that were already negative. The $-5x$ becomes $+5x$ and the $+4$ becomes $-4$.

This is where most errors occur. Negating only the first term of the subtracted polynomial while leaving the rest untouched is the single most common mistake in polynomial subtraction. The expression $(5x^2 + 2x - 3) - (x^2 - 4x + 1)$ is sometimes incorrectly computed as $4x^2 - 2x - 2$ when only $x^2$ gets negated. The correct result is $4x^2 + 6x - 4$.

Like addition, subtraction always produces a polynomial. The degree of the result is at most the larger of the two input degrees, with the same possibility of cancellation reducing it further.`,
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
  title: `Multiplying Polynomials`,
  content: `Multiplication requires every term of one polynomial to be multiplied by every term of the other. For each pair, multiply the coefficients and add the exponents on matching variables, then combine like terms in the resulting expression.

For $(x + 2)(x^2 - 3x + 1)$, distribute each term of the binomial across the trinomial. The term $x$ produces $x \\cdot x^2 = x^3$, $x \\cdot (-3x) = -3x^2$, and $x \\cdot 1 = x$. The term $2$ produces $2 \\cdot x^2 = 2x^2$, $2 \\cdot (-3x) = -6x$, and $2 \\cdot 1 = 2$. Collecting everything: $x^3 - 3x^2 + x + 2x^2 - 6x + 2$. Combining like terms gives $x^3 - x^2 - 5x + 2$.

The degree of a product equals the sum of the degrees of the factors — always, without exception. A degree-$2$ polynomial times a degree-$3$ polynomial produces a degree-$5$ polynomial. This follows from the fact that the highest-degree terms in each factor multiply to produce the highest-degree term in the product, and no other pair of terms can reach that degree.

The number of terms before combining can grow quickly. Multiplying an $m$-term polynomial by an $n$-term polynomial generates $m \\times n$ individual products. A binomial times a trinomial produces $6$ terms before simplification; two four-term polynomials produce $16$. Careful bookkeeping — and a systematic approach to distributing — prevents missed terms.`,
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
  title: `Special Products`,
  content: `Certain multiplication patterns appear so frequently that recognizing them on sight saves significant work. Each is a direct consequence of distribution, but memorizing the results avoids repeating the same steps every time.

Squaring a binomial produces a trinomial. The sum $(a + b)^2$ expands to $a^2 + 2ab + b^2$, and the difference $(a - b)^2$ expands to $a^2 - 2ab + b^2$. The middle term is always twice the product of the two original terms — a detail that connects directly to identifying perfect square trinomials when [factoring](!/algebra/polynomials/factoring).

Multiplying conjugate binomials — a sum and a difference of the same two terms — eliminates the middle term entirely. The product $(a + b)(a - b)$ equals $a^2 - b^2$, a clean difference of squares. No linear term survives because the outer and inner products cancel.

The cubic identities extend the same logic one degree further:

$$(a + b)(a^2 - ab + b^2) = a^3 + b^3$$

$$(a - b)(a^2 + ab + b^2) = a^3 - b^3$$

Each pairs a linear factor with a quadratic factor to produce a two-term cubic. These patterns are the multiplication side of the sum and difference of cubes formulas used in factoring — the same identities read in the opposite direction.`,
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
  title: `FOIL Method`,
  content: `FOIL is a mnemonic for multiplying two binomials: First, Outer, Inner, Last. It names the four products that arise when each term of one binomial is distributed across the other.

For $(2x + 3)(x - 4)$, the four steps produce: First $2x \cdot x = 2x^2$, Outer $2x \cdot (-4) = -8x$, Inner $3 \cdot x = 3x$, Last $3 \cdot (-4) = -12$. Combining the middle terms gives $2x^2 - 5x - 12$.

FOIL is nothing more than a structured way to ensure all four products are accounted for — it is a special case of the general distribution used in multiplying any two polynomials. Its value lies in speed and reliability for the specific case of two binomials, where exactly four products always arise.

The method does not extend beyond binomials. Attempting to apply FOIL to a binomial times a trinomial, or to two trinomials, misses terms. A binomial times a trinomial requires six products, not four. For anything beyond two binomials, the full term-by-term distribution described in the previous section is the correct approach.`,
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
  title: `Polynomial Long Division`,
  content: `Dividing one polynomial by another follows a process that mirrors numerical long division. The idea is to find a quotient and a remainder that satisfy:

$$\\text{dividend} = (\\text{divisor} \\times \\text{quotient}) + \\text{remainder}$$

To divide $x^3 - 2x^2 + 5x - 3$ by $x - 1$, begin by dividing the leading term of the dividend by the leading term of the divisor: $x^3 \\div x = x^2$. Multiply $x^2$ by the entire divisor: $x^2(x - 1) = x^3 - x^2$. Subtract this from the dividend to get $-x^2 + 5x - 3$. Repeat: $-x^2 \\div x = -x$, multiply $-x(x - 1) = -x^2 + x$, subtract to get $4x - 3$. One more pass: $4x \\div x = 4$, multiply $4(x - 1) = 4x - 4$, subtract to get $1$. The quotient is $x^2 - x + 4$ with remainder $1$.

The process terminates when the degree of what remains is less than the degree of the divisor. If the remainder is zero, the divisor divides the dividend evenly — meaning the divisor is a [factor](!/algebra/polynomials/factoring) of the dividend.

Missing powers in the dividend require placeholder terms. Dividing $x^3 + 4$ by $x + 1$ requires writing the dividend as $x^3 + 0x^2 + 0x + 4$ to keep terms aligned through each subtraction step.`,
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
  title: `Synthetic Division`,
  content: `When the divisor is a linear binomial of the form $(x - c)$, synthetic division offers a streamlined alternative to long division. It uses only the coefficients of the dividend and the value $c$, reducing the process to a compact sequence of multiplications and additions.

To divide $x^3 - 2x^2 + 5x - 3$ by $(x - 1)$, write the coefficients $1, -2, 5, -3$ in a row and place $c = 1$ to the left. Bring down the first coefficient: $1$. Multiply by $c$: $1 \cdot 1 = 1$. Add to the next coefficient: $-2 + 1 = -1$. Multiply by $c$: $-1 \cdot 1 = -1$. Add: $5 + (-1) = 4$. Multiply: $4 \cdot 1 = 4$. Add: $-3 + 4 = 1$. The bottom row reads $1, -1, 4, 1$ — giving a quotient of $x^2 - x + 4$ with remainder $1$, matching the long division result exactly.

The connection to polynomial evaluation is immediate. The remainder produced by synthetic division equals $P(c)$, the value of the dividend evaluated at $x = c$. This is the Remainder Theorem in action, and it means synthetic division doubles as a fast way to compute $P(c)$ without substituting into every term. If $P(c) = 0$, then $(x - c)$ divides the polynomial evenly and $c$ is a [root](!/algebra/polynomials/roots).

The limitation is strict: synthetic division works only for divisors of the form $(x - c)$. Dividing by $x^2 + 1$, by $2x - 3$, or by any polynomial of degree two or higher requires the full long division procedure.`,
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
  title: `Degree and Operations`,
  content: `Each arithmetic operation affects the degree of the result in a specific, predictable way. These rules serve as both a guide during computation and a check after it.

For addition and subtraction, the degree of the result is at most the maximum of the two input degrees. If $P(x)$ has degree $4$ and $Q(x)$ has degree $3$, then $P(x) + Q(x)$ has degree at most $4$. The "at most" matters — when the leading terms cancel, the degree drops. Adding $2x^3 + x$ and $-2x^3 + 5x^2$ produces $5x^2 + x$, a degree-$2$ result from two degree-$3$ inputs.

For multiplication, the degree of the product equals the sum of the degrees of the factors, with no exceptions. A degree-$2$ polynomial times a degree-$3$ polynomial always produces a degree-$5$ polynomial. Leading coefficients multiply but never cancel, since neither is zero.

For division, the degree of the quotient equals the degree of the dividend minus the degree of the divisor. Dividing a degree-$5$ polynomial by a degree-$2$ polynomial produces a degree-$3$ quotient. The remainder, if nonzero, has degree strictly less than the divisor.

These relationships provide a quick sanity check. If multiplying two quadratics yields a degree-$3$ result, something went wrong. If dividing a cubic by a linear polynomial produces a cubic quotient, a step was missed.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    
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
  title: "The Arithmetic of Polynomials",
  content: `Numbers have addition, subtraction, multiplication, and division — and so do polynomials. The same four operations that govern ordinary arithmetic extend naturally to polynomial expressions, each with its own set of rules governing how terms interact, how degrees change, and what form the result takes.

Some of these operations are simple: adding polynomials amounts to collecting like terms. Others demand more care — polynomial long division mirrors its numerical counterpart but requires tracking multiple terms across multiple steps. Together, these operations provide the machinery behind [factoring](!/algebra/polynomials/factoring), solving [polynomial equations](!/algebra/polynomials/roots), and simplifying complex algebraic expressions.`
}

const faqQuestions = {
  obj1: {
    question: "How do you add polynomials?",
    answer: "To add polynomials, combine like terms — terms with the same variable raised to the same exponent. For (2x² + 3x - 1) + (x² - 5x + 4), group the x² terms, the x terms, and the constants: (2x² + x²) + (3x - 5x) + (-1 + 4) = 3x² - 2x + 3."
  },
  obj2: {
    question: "How do you subtract polynomials?",
    answer: "Distribute the negative sign across every term of the polynomial being subtracted, then combine like terms. For (2x² + 3x - 1) - (x² - 5x + 4), negate to get -x² + 5x - 4, then add: 2x² - x² + 3x + 5x - 1 - 4 = x² + 8x - 5."
  },
  obj3: {
    question: "How do you multiply polynomials?",
    answer: "Multiply every term of one polynomial by every term of the other, then combine like terms. For each pair, multiply coefficients and add exponents on matching variables. The degree of the product equals the sum of the degrees of the factors."
  },
  obj4: {
    question: "What is the FOIL method?",
    answer: "FOIL is a mnemonic for multiplying two binomials: First, Outer, Inner, Last. For (2x + 3)(x - 4): First 2x·x = 2x², Outer 2x·(-4) = -8x, Inner 3·x = 3x, Last 3·(-4) = -12. Combine to get 2x² - 5x - 12. FOIL only works for two binomials."
  },
  obj5: {
    question: "What are the special product formulas?",
    answer: "(a + b)² = a² + 2ab + b² and (a - b)² = a² - 2ab + b² for squaring binomials. (a + b)(a - b) = a² - b² for conjugates. For cubes: (a + b)(a² - ab + b²) = a³ + b³ and (a - b)(a² + ab + b²) = a³ - b³."
  },
  obj6: {
    question: "How does polynomial long division work?",
    answer: "Divide the leading term of the dividend by the leading term of the divisor to get the first term of the quotient. Multiply this by the divisor and subtract from the dividend. Repeat with the remainder until its degree is less than the divisor's degree."
  },
  obj7: {
    question: "What is synthetic division?",
    answer: "Synthetic division is a shortcut for dividing by (x - c) using only coefficients. Write the dividend's coefficients, place c to the left, then repeatedly multiply and add. The final row gives the quotient coefficients and remainder. It's faster than long division but only works for linear divisors."
  },
  obj8: {
    question: "When can you use synthetic division?",
    answer: "Synthetic division works only when the divisor is a linear binomial of the form (x - c). For divisors like x² + 1, 2x - 3, or any polynomial of degree two or higher, you must use polynomial long division instead."
  },
  obj9: {
    question: "What is the degree of a polynomial product?",
    answer: "The degree of a product equals the sum of the degrees of the factors. A degree-2 polynomial times a degree-3 polynomial always produces a degree-5 polynomial. This rule has no exceptions because leading terms multiply but never cancel."
  },
  obj10: {
    question: "What is the degree of a polynomial sum?",
    answer: "The degree of a sum is at most the maximum of the two input degrees. It can be less if the leading terms cancel — adding 2x³ + x and -2x³ + 5x² produces 5x² + x, a degree-2 result from two degree-3 polynomials."
  },
  obj11: {
    question: "What does it mean when polynomial division has no remainder?",
    answer: "When the remainder is zero, the divisor divides the dividend evenly, meaning the divisor is a factor of the dividend. For example, if dividing P(x) by (x - 2) gives remainder 0, then (x - 2) is a factor and x = 2 is a root of P(x)."
  },
  obj12: {
    question: "What is the most common mistake in polynomial subtraction?",
    answer: "The most common error is negating only the first term instead of every term. For (5x² + 2x - 3) - (x² - 4x + 1), you must change all signs: -x² + 4x - 1. Negating only x² gives the wrong answer. Always distribute the negative across all terms."
  },
  obj13: {
    question: "How do you handle missing terms in polynomial division?",
    answer: "Insert placeholder terms with zero coefficients. To divide x³ + 4 by x + 1, rewrite the dividend as x³ + 0x² + 0x + 4. This keeps terms aligned during subtraction steps and prevents errors in the quotient."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Operations on Polynomials",
    "description": "Learn polynomial operations: adding, subtracting, multiplying, dividing polynomials. Master FOIL, special products, polynomial long division, synthetic division, and degree rules.",
    "url": "https://www.learnmathclass.com/algebra/polynomials/operations",
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
      "name": "Polynomial Operations"
    },
    "teaches": [
      "Adding polynomials by combining like terms",
      "Subtracting polynomials with sign distribution",
      "Multiplying polynomials term by term",
      "Special products and FOIL method",
      "Polynomial long division",
      "Synthetic division for linear divisors",
      "How operations affect polynomial degree"
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
        "name": "Polynomials",
        "item": "https://www.learnmathclass.com/algebra/polynomials"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Operations",
        "item": "https://www.learnmathclass.com/algebra/polynomials/operations"
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
  //       title: "Operations on Polynomials | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/algebra/polynomials/operations",
  //        name: "name"
  //     },
        
  //      }
  //   }
  return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Polynomial Operations: Add, Subtract, Multiply, Divide | Learn Math Class",
      description: "Learn polynomial operations: adding, subtracting, multiplying, dividing polynomials. Master FOIL, special products, polynomial long division, synthetic division, and degree rules.",
      keywords: keyWords.join(", "),
      url: "/algebra/polynomials/operations",
      name: "Operations on Polynomials"
    },
  }
}
   }

// export default function OperationsPage({seoData,sectionsContent , introContent}) {


export default function OperationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Operations on Polynomials</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
