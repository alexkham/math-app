import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'


export async function getStaticProps(){

 const keyWords = [
  "modulo negative numbers",
  "negative modulo result",
  "truncated division",
  "floored division",
  "negative remainder",
  "mod negative dividend",
  "modulo convention",
  "python vs javascript modulo",
  "convert negative remainder",
  "floor division modulo",
  "truncate toward zero",
  "negative mod positive",
  "modulo sign behavior",
  "remainder negative number",
  "modulo programming languages"
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
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj1: {
  title: `The Problem`,
  content: `What is $(-7) \\bmod 3$?

For positive dividends the answer would be immediate. But $-7$ is not a positive number, and "the remainder when $-7$ is divided by $3$" depends on what "remainder" means when the dividend is negative.

One answer is $-1$. Another is $2$. Both satisfy the division equation $a = n \\cdot q + r$ — they simply use different values of the quotient $q$, which forces different values of the remainder $r$.

This is not a mathematical ambiguity in the sense that either answer is wrong. It is a definitional fork: two conventions exist, each internally consistent, each producing valid results. The trouble begins when the two are mixed — a formula derived under one convention, implemented in a language that uses the other.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Two Conventions`,
  content: `Both conventions start from the same equation:

$$a = n \\cdot q + r$$

They agree that $a$ and $n$ are given and that $q$ and $r$ must be determined. They disagree on how to choose $q$ — and that single choice determines everything.

Truncated division rounds the quotient toward zero. The remainder inherits the sign of the dividend, and can be negative.

Floored division rounds the quotient toward $-\\infty$. The remainder is always non-negative, confined to $\\{0, 1, 2, \\ldots, n-1\\}$.

For positive dividends, both conventions round the same direction and produce identical results. The split only appears when $a$ is negative — when "toward zero" and "toward $-\\infty$" point in different directions.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Truncated Division (Round Toward Zero)`,
  content: `Under truncated division, the quotient is obtained by dividing and discarding the fractional part — rounding toward zero. The remainder takes whatever sign is needed to satisfy $a = n \\cdot q + r$.

For $(-7) \\bmod 3$: divide $-7 \\div 3 = -2.33\\ldots$. Truncate toward zero to get $q = -2$. Compute the remainder: $r = -7 - (3 \\times -2) = -7 + 6 = -1$. The result is $-1$.

For $(-23) \\bmod 5$: divide $-23 \\div 5 = -4.6$. Truncate to $q = -4$. Remainder: $r = -23 - (5 \\times -4) = -23 + 20 = -3$. The result is $-3$.

The remainder under this convention shares the sign of the dividend. A negative dividend always produces a non-positive remainder ($r \\leq 0$). This behavior matches how hardware division works on most processors, which is why many compiled languages adopt it.`,
  before: ``,
  after: ``,
  link: '',
},


obj4: {
  title: `Floored Division (Round Toward $-\\infty$)`,
  content: `Under floored division, the quotient is rounded down — toward negative infinity, not toward zero. This guarantees a non-negative remainder.

For $(-7) \\bmod 3$: divide $-7 \\div 3 = -2.33\\ldots$. Floor to $q = -3$. Compute the remainder: $r = -7 - (3 \\times -3) = -7 + 9 = 2$. The result is $2$.

For $(-23) \\bmod 5$: divide $-23 \\div 5 = -4.6$. Floor to $q = -5$. Remainder: $r = -23 - (5 \\times -5) = -23 + 25 = 2$. The result is $2$.

The remainder under this convention always falls in $\\{0, 1, 2, \\ldots, n-1\\}$, regardless of the dividend's sign. This is the convention preferred in mathematical texts, because it keeps remainders in the same canonical set used to define congruence classes.`,
  before: ``,
  after: ``,
  link: '',
},


obj5: {
  title: `Which Convention Is Correct?`,
  content: `Both are correct. They are different definitions, not different attempts at the same definition.

Mathematics typically prefers floored division. Remainders stay in $\\{0, 1, \\ldots, n-1\\}$, congruence classes have a single canonical representative per class, and theoretical arguments are cleaner when remainders are non-negative.

Computing typically prefers truncated division. It maps directly to hardware division instructions, requires no sign adjustment, and runs faster. When performance matters and negative inputs are rare or handled separately, the truncated convention is pragmatic.

The choice has no effect on congruence. Under both conventions, $-7$ and $2$ are congruent modulo $3$: their difference is $9 = 3 \\times 3$, a multiple of the modulus. The conventions disagree on which representative to return, not on the underlying mathematical relationship.`,
  before: ``,
  after: ``,
  link: '',
},


// obj6: {
//   title: `Programming Languages`,
//   content: `Different languages make different choices, and assuming consistency across them is a common source of bugs.

// C, C++, Java, JavaScript, C#, and Go all use truncated division for their $\\%$ operator. In these languages, $(-7) \\% \\; 3$ returns $-1$.

// Python and Ruby use floored division. In Python, $(-7) \\% \\; 3$ returns $2$.

// Some languages provide both. Python's $\\%$ operator uses floored division, but $\\texttt{math.fmod()}$ uses truncated. JavaScript's $\\%$ uses truncated, with no built-in floored alternative.

// The practical consequence: an algorithm tested in Python that relies on non-negative remainders will silently produce wrong results when ported to JavaScript or Java without adjustment. The logic is correct in both versions — the definitions are not.`,
//   before: ``,
//   after: ``,
//   link: '',
// },
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj11:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj7: {
  title: `Converting Between Conventions`,
  content: `A truncated remainder that comes out negative can be converted to its floored equivalent by adding the modulus.

If truncated division gives $(-7) \\bmod 3 = -1$, add $3$: $-1 + 3 = 2$. That is the floored result.

If truncated division gives $(-23) \\bmod 5 = -3$, add $5$: $-3 + 5 = 2$. That is the floored result.

The addition is only needed when the remainder is negative. For positive dividends, both conventions agree and no conversion is required.

A universal formula handles both cases automatically:

$$\\text{floored remainder} = ((a \\% \\; n) + n) \\% \\; n$$

This works in any language regardless of which convention its $\\%$ operator uses. If the initial remainder is already non-negative, adding $n$ and reducing again leaves it unchanged. If it is negative, the addition shifts it into the correct range.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Congruence Perspective`,
  content: `The two conventions produce different numbers, but those numbers represent the same congruence class. From the perspective of [congruence](!/arithmetic/modulo), there is no disagreement.

The values $-1$ and $2$ are both valid answers to $(-7) \\bmod 3$ because $-1 \\equiv 2 \\pmod{3}$. Their difference is $3$, a multiple of the modulus.

Every congruence class modulo $n$ contains infinitely many integers: $\\ldots, -7, -4, -1, 2, 5, 8, 11, \\ldots$ all belong to the same class modulo $3$. The truncated convention picks $-1$ as the representative; the floored convention picks $2$. Both are members of the same family.

When working with congruences rather than computing specific remainders, the distinction between conventions dissolves entirely. The statement $-7 \\equiv 2 \\pmod{3}$ is true regardless of which convention is in play.`,
  before: ``,
  after: ``,
  link: '',
},


obj9: {
  title: `Negative Divisor`,
  content: `The discussion so far has assumed a positive modulus $n > 0$. When the divisor is negative, behavior varies even more unpredictably across definitions and languages.

Mathematical convention typically requires $n > 0$ and does not define modulo for negative divisors. The remainder is always taken with respect to a positive modulus.

Programming languages that allow negative divisors produce results that vary by language, by convention, and sometimes by version. C and Java allow them but offer few guarantees about the sign of the result. Python handles them consistently under floored division but the behavior is unintuitive.

The safest practice is to avoid negative divisors entirely. Use the absolute value of the modulus and handle any sign logic separately. This eliminates an entire category of edge cases and makes the code's intent explicit.`,
  before: ``,
  after: ``,
  link: '',
},


obj10: {
  title: `Common Pitfalls`,
  content: `The most frequent mistake is assuming that $\\%$ behaves the same in every language. Code written in Python, where $(-7) \\% \\; 3 = 2$, will not produce the same result in Java, where $(-7) \\% \\; 3 = -1$. Porting algorithms without accounting for this discrepancy introduces subtle errors that pass positive-input tests but fail on negative inputs.

Array indexing is a common casualty. Accessing an array at position $(-1) \\% \\; n$ is intended to wrap around to the last element — and it does in Python, where the result is $n - 1$. In C or JavaScript, the result is $-1$, which is an invalid index.

Forgetting to test negative inputs is the root cause. Modular code that works perfectly for positive numbers may silently break for negative ones. Any function that computes remainders should be tested with negative dividends explicitly.

Mixing conventions within a single computation — reducing one value under floored division and another under truncated — produces results that belong to no consistent system. Pick one convention and apply it uniformly.`,
  before: ``,
  after: ``,
  link: '',
},


obj11: {
  title: `Worked Examples`,
  content: `Compute $(-10) \\bmod 4$ under both conventions. Truncated: $-10 \\div 4 = -2.5$, truncate to $-2$, remainder $-10 - (4 \\times -2) = -10 + 8 = -2$. Floored: floor to $-3$, remainder $-10 - (4 \\times -3) = -10 + 12 = 2$.

Compute $(-1) \\bmod 7$ under both conventions. Truncated: $-1 \\div 7 = -0.14\\ldots$, truncate to $0$, remainder $-1 - (7 \\times 0) = -1$. Floored: floor to $-1$, remainder $-1 - (7 \\times -1) = -1 + 7 = 6$.

Convert: if a language returns $(-15) \\% \\; 6 = -3$, the non-negative equivalent is $-3 + 6 = 3$.

Determine what Python returns for $(-23) \\% \\; 5$. Python uses floored division, so: floor $-23 \\div 5 = -4.6$ to $-5$, remainder $-23 + 25 = 2$. Python returns $2$.

Determine what JavaScript returns for the same expression. JavaScript uses truncated division: truncate $-4.6$ to $-4$, remainder $-23 + 20 = -3$. JavaScript returns $-3$.

Ensure non-negative results in JavaScript: $((-23 \\% \\; 5) + 5) \\% \\; 5 = (-3 + 5) \\% \\; 5 = 2 \\% \\; 5 = 2$.`,
  before: ``,
  after: ``,
  link: '',
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
  title: "When the Dividend Goes Below Zero",
  content: `[Modulo](!/arithmetic/modulo) with positive numbers is unambiguous — divide, take what's left over. But the moment the dividend turns negative, the operation splits into two competing definitions that produce different answers to the same question. The mathematics is consistent either way; the confusion arises from the fact that different contexts — and different programming languages — choose different sides.`
}

const faqQuestions = {
  obj1: {
    question: "What is (-7) mod 3?",
    answer: "It depends on the convention. Under truncated division (C, Java, JavaScript), the answer is -1. Under floored division (Python, mathematics), the answer is 2. Both are valid — they represent the same congruence class but use different representative values."
  },
  obj2: {
    question: "What is truncated division?",
    answer: "Truncated division rounds the quotient toward zero. For (-7) ÷ 3 = -2.33, truncate to -2, giving remainder -7 - (3 × -2) = -1. The remainder inherits the sign of the dividend, so negative dividends produce non-positive remainders."
  },
  obj3: {
    question: "What is floored division?",
    answer: "Floored division rounds the quotient toward negative infinity. For (-7) ÷ 3 = -2.33, floor to -3, giving remainder -7 - (3 × -3) = 2. The remainder is always non-negative, staying in {0, 1, ..., n-1} regardless of the dividend's sign."
  },
  obj4: {
    question: "Which modulo convention is correct?",
    answer: "Both are correct — they are different definitions, not errors. Mathematics prefers floored division for cleaner theory. Computing often uses truncated division because it maps to hardware instructions. The choice doesn't affect congruence relationships."
  },
  obj5: {
    question: "Why does Python give different modulo results than JavaScript?",
    answer: "Python uses floored division: (-7) % 3 = 2. JavaScript uses truncated division: (-7) % 3 = -1. The algorithms produce different remainders for negative dividends. Code ported between languages must account for this difference."
  },
  obj6: {
    question: "How do you convert a negative remainder to a positive one?",
    answer: "Add the modulus. If truncated division gives (-7) mod 3 = -1, add 3 to get 2. The universal formula ((a % n) + n) % n works in any language — if the remainder is already non-negative, the formula leaves it unchanged."
  },
  obj7: {
    question: "Are -1 and 2 the same modulo 3?",
    answer: "Yes. Both -1 and 2 belong to the same congruence class modulo 3 because their difference (3) is divisible by 3. The conventions disagree on which representative to return, not on the underlying mathematical relationship."
  },
  obj8: {
    question: "What happens with a negative divisor in modulo?",
    answer: "Behavior varies unpredictably across languages. Mathematical convention typically requires the modulus to be positive. The safest practice is to use the absolute value of the modulus and handle sign logic separately."
  },
  obj9: {
    question: "Why does array indexing fail with negative modulo?",
    answer: "In Python, (-1) % n = n-1, correctly wrapping to the last element. In C or JavaScript, (-1) % n = -1, an invalid index. Code expecting wrap-around behavior must use ((index % n) + n) % n to guarantee non-negative results."
  },
  obj10: {
    question: "How do you ensure non-negative remainders in JavaScript?",
    answer: "Use the formula ((a % n) + n) % n. For (-23 % 5) in JavaScript: -3, then (-3 + 5) % 5 = 2. This works universally regardless of which convention the language uses, converting any negative remainder to its positive equivalent."
  },
  obj11: {
    question: "What is (-1) mod 7 under each convention?",
    answer: "Truncated: -1 ÷ 7 = -0.14, truncate to 0, remainder = -1 - (7 × 0) = -1. Floored: floor to -1, remainder = -1 - (7 × -1) = -1 + 7 = 6. The truncated result is -1; the floored result is 6."
  },
  obj12: {
    question: "What is the most common mistake with negative modulo?",
    answer: "Assuming the % operator behaves identically in every language. Code written in Python (floored) will produce different results in Java or JavaScript (truncated) for negative inputs. Always test with negative dividends explicitly."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Modulo of Negative Numbers",
    "description": "Understand modulo with negative dividends: truncated vs floored division, why Python and JavaScript differ, converting negative remainders, and avoiding common pitfalls.",
    "url": "https://www.learnmathclass.com/arithmetic/modulo/negative-numbers",
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
      "name": "Negative Number Modulo"
    },
    "teaches": [
      "Truncated division: round toward zero",
      "Floored division: round toward negative infinity",
      "Why different languages produce different results",
      "Converting negative remainders to positive",
      "Congruence perspective on conventions",
      "Handling negative divisors safely",
      "Common pitfalls with negative modulo"
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
        "name": "Arithmetic",
        "item": "https://www.learnmathclass.com/arithmetic"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Modulo",
        "item": "https://www.learnmathclass.com/arithmetic/modulo"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Negative Numbers",
        "item": "https://www.learnmathclass.com/arithmetic/modulo/negative-numbers"
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
//         title: "Modulo of Negative Numbers | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/modulo/negative-numbers",
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
      title: "Modulo of Negative Numbers: Truncated vs Floored Division | Learn Math Class",
      description: "Understand modulo with negative dividends: truncated vs floored division, why Python and JavaScript differ, converting negative remainders, and avoiding common pitfalls.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/modulo/negative-numbers",
      name: "Modulo of Negative Numbers"
    },
  }
}
   }

// export default function NegativeNumbersPage({seoData,sectionsContent , introContent}) {

export default function NegativeNumbersPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'6',
    //     title:sectionsContent.obj6.title,
    //     link:sectionsContent.obj6.link,
    //     content:[
    //       sectionsContent.obj6.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Modulo of Negative Numbers</h1>
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
