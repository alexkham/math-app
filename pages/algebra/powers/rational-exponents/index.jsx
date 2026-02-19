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
  "rational exponents",
  "fractional exponents",
  "a^(1/n) = nth root",
  "a^(m/n) meaning",
  "roots as powers",
  "exponent fraction",
  "simplify rational exponents",
  "negative rational exponents",
  "convert radicals to exponents",
  "fractional powers",
  "exponent rules fractions",
  "nth root exponent form",
  "rational exponent examples",
  "how to solve rational exponents",
  "radicals and exponents"
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
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

 obj1: {
  title: `The Question`,
  content: `The expression $a^2$ means $a \\cdot a$. The expression $a^{-3}$ means $\\frac{1}{a^3}$. Both follow from clear definitions. But what should $a^{1/2}$ mean? Repeated multiplication offers no help — there is no way to multiply $a$ by itself "half a time."

The approach is the same one that defined [negative exponents](!/algebra/powers/negative-exponents): let the laws decide. If the product rule $a^m \\cdot a^n = a^{m+n}$ is to hold for all exponents, then $a^{1/2} \\cdot a^{1/2}$ must equal $a^{1/2 + 1/2} = a^1 = a$. So $a^{1/2}$ is the number that, when multiplied by itself, gives $a$.

That number is $\\sqrt{a}$. The laws do not suggest this interpretation — they demand it. Any other value assigned to $a^{1/2}$ would break the product rule, and with it the entire algebraic framework built on natural and negative exponents.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Roots as Powers`,
  content: `The argument for $a^{1/2}$ generalizes immediately. If $a^{1/n}$ is multiplied by itself $n$ times, the product rule gives:

$$\\underbrace{a^{1/n} \\cdot a^{1/n} \\cdots a^{1/n}}_{n \\text{ times}} = a^{n \\cdot (1/n)} = a^1 = a$$

So $a^{1/n}$ must be the number whose $n$th power is $a$ — that is, the $n$th root of $a$:

$$a^{1/n} = \\sqrt[n]{a}$$

Root notation and exponent notation are two ways of writing the same thing. The expression $\\sqrt[3]{8}$ and $8^{1/3}$ both equal $2$, because $2^3 = 8$. The expression $\\sqrt[4]{16}$ and $16^{1/4}$ both equal $2$, because $2^4 = 16$. The expression $27^{1/3} = \\sqrt[3]{27} = 3$, because $3^3 = 27$.

The exponent form is often more convenient for algebraic manipulation, since the [laws of exponents](!/algebra/powers/laws) apply directly. The radical form is often preferred for numerical computation and when presenting final answers. Fluency in both notations — and the ability to convert freely between them — is essential.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Fractional Exponents`,
  content: `A rational exponent with a numerator other than $1$ combines a root and a power. The expression $a^{m/n}$ can be interpreted in two equivalent ways:

$$a^{m/n} = \\left(a^{1/n}\\right)^m = \\left(\\sqrt[n]{a}\\right)^m$$

$$a^{m/n} = \\left(a^m\\right)^{1/n} = \\sqrt[n]{a^m}$$

Both routes produce the same result — the power of a power rule guarantees this — but one path may be computationally easier than the other.

For $8^{2/3}$, taking the root first is simpler: $8^{1/3} = 2$, then $2^2 = 4$. Taking the power first means computing $8^2 = 64$ and then $\\sqrt[3]{64} = 4$ — correct, but with larger intermediate numbers.

For $27^{4/3}$, the root-first approach gives $27^{1/3} = 3$, then $3^4 = 81$. The power-first approach requires $27^4 = 531441$ and then $\\sqrt[3]{531441} = 81$. The choice is clear.

The general strategy is to take the root first whenever the base has a clean $n$th root. This keeps the numbers manageable and reduces the chance of arithmetic errors.`,
  before: ``,
  after: ``,
  link: '',
},

obj4: {
  title: `Negative Rational Exponents`,
  content: `A negative rational exponent combines the reciprocal interpretation from [negative exponents](!/algebra/powers/negative-exponents) with the root-and-power interpretation of fractional exponents. The expression $a^{-m/n}$ means:

$$a^{-m/n} = \\frac{1}{a^{m/n}}$$

The negative sign takes the reciprocal; the fraction $m/n$ handles the root and power.

For $8^{-2/3}$, first compute $8^{2/3} = 4$ (as in the previous section), then take the reciprocal: $8^{-2/3} = \\frac{1}{4}$.

For $16^{-3/4}$, compute $16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$, then $16^{-3/4} = \\frac{1}{8}$.

The order of operations is flexible. Taking the reciprocal first, then the root and power, produces the same result: $8^{-2/3} = \\left(\\frac{1}{8}\\right)^{2/3} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$. Whichever sequence keeps the arithmetic simplest is the right one to use.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Domain Considerations`,
  content: `Rational exponents introduce the first domain restrictions on the base — a constraint that did not arise with integer exponents.

Even roots require the base to be non-negative. The expression $(-4)^{1/2} = \\sqrt{-4}$ has no real value, because no real number squared gives $-4$. More generally, $a^{1/n}$ is undefined in the reals when $n$ is even and $a < 0$. Over the [complex numbers](!/complex-numbers), such expressions do have values, but within real-number algebra the restriction $a \\geq 0$ is firm.

Odd roots carry no such restriction. The expression $(-8)^{1/3} = \\sqrt[3]{-8} = -2$, because $(-2)^3 = -8$. Odd roots of negative numbers are negative, and the computation proceeds without difficulty.

For a general rational exponent $a^{m/n}$, the domain depends on the denominator of the fraction when written in lowest terms. If $n$ is even, then $a \\geq 0$. If $n$ is odd, then $a$ can be any real number (with $a \\neq 0$ if $m$ is negative). This marks a tightening of restrictions that continues into [irrational exponents](!/algebra/powers/irrational-exponents), where the base must be strictly positive.`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `Verifying the Laws Still Hold`,
  content: `As with every prior extension, the definition of rational exponents was chosen to preserve the laws. Verification confirms that no rule breaks.

The product rule: $a^{1/2} \\cdot a^{1/3}$ should equal $a^{1/2 + 1/3} = a^{5/6}$. In radical form, $\\sqrt{a} \\cdot \\sqrt[3]{a} = a^{1/2} \\cdot a^{1/3}$. Converting to a common denominator and applying the rule gives $a^{3/6} \\cdot a^{2/6} = a^{5/6}$. The rule holds.

Power of a power: $(a^{2/3})^{3/4}$ should equal $a^{(2/3)(3/4)} = a^{6/12} = a^{1/2}$. Computing step by step — raising $a^{2/3}$ to the power $\\frac{3}{4}$ — multiplies the exponents to give $a^{1/2} = \\sqrt{a}$. The rule holds.

The quotient rule: $\\frac{a^{3/4}}{a^{1/4}} = a^{3/4 - 1/4} = a^{1/2}$. Direct computation confirms $\\frac{\\sqrt[4]{a^3}}{\\sqrt[4]{a}} = \\sqrt[4]{a^2} = a^{1/2}$. The rule holds.

The pattern is now three layers deep. Natural exponents established the laws. Negative exponents preserved them through reciprocals. Rational exponents preserve them through roots. Each extension is constrained by the same requirement: the algebra must remain consistent.`,
  before: ``,
  after: ``,
  link: '',
},

obj7: {
  title: `Simplifying Expressions`,
  content: `Converting radicals to exponent form often makes simplification more straightforward, because the [laws of exponents](!/algebra/powers/laws) apply directly to fractional exponents just as they do to integers.

Simplify $x^{3/4} \\cdot x^{1/2}$. The product rule adds exponents: $x^{3/4 + 1/2} = x^{3/4 + 2/4} = x^{5/4}$. In radical form, this is $\\sqrt[4]{x^5} = x\\sqrt[4]{x}$.

Simplify $\\frac{a^{5/3}}{a^{2/3}}$. The quotient rule subtracts: $a^{5/3 - 2/3} = a^{3/3} = a$.

Simplify $\\sqrt{x} \\cdot \\sqrt[3]{x}$. Convert to exponent form: $x^{1/2} \\cdot x^{1/3} = x^{5/6} = \\sqrt[6]{x^5}$. The radical form with different indices resists simplification, but the exponent form handles it cleanly.

Simplify $\\left(\\frac{x^{1/2}}{y^{-1/3}}\\right)^6$. The negative exponent in the denominator moves $y$ to the numerator: $\\left(x^{1/2} \\cdot y^{1/3}\\right)^6 = x^3 y^2$.

The key advantage of exponent notation over radical notation is uniformity. Every operation — multiplication, division, raising to a power — follows the same rules regardless of whether the exponent is natural, negative, or rational. Radicals require separate procedures for combining indices and simplifying nested roots. Exponents reduce everything to arithmetic on fractions.`,
  before: ``,
  after: ``,
  link: '',
},
    obj8:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
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
  title: "Powers Meet Roots",
  content: `[Natural exponents](!/algebra/powers/natural-exponents) count repeated multiplications. [Negative exponents](!/algebra/powers/negative-exponents) take reciprocals. Both extensions were forced by the [laws of exponents](!/algebra/powers/laws) — the definitions were chosen as the only ones that keep the rules intact. The same logic now answers a harder question: what should $a^{1/2}$ mean? The laws leave no room for debate, and the answer ties exponentiation directly to roots.`
}

const faqQuestions = {
  obj1: {
    question: "What is a rational exponent?",
    answer: "A rational exponent is a fraction as an exponent. The expression a^(m/n) means the nth root of a raised to the mth power: a^(m/n) = (ⁿ√a)^m = ⁿ√(a^m). For example, 8^(2/3) = (³√8)² = 2² = 4.",
    sectionId: "3"
  },
  obj2: {
    question: "What does a^(1/2) mean?",
    answer: "a^(1/2) means the square root of a. The product rule requires a^(1/2) · a^(1/2) = a^1 = a, so a^(1/2) must be √a. Similarly, a^(1/n) equals the nth root of a.",
    sectionId: "1"
  },
  obj3: {
    question: "How do you convert radicals to exponents?",
    answer: "The nth root of a equals a^(1/n): ⁿ√a = a^(1/n). For roots with powers: ⁿ√(a^m) = a^(m/n). Examples: √x = x^(1/2), ³√x = x^(1/3), ⁴√x³ = x^(3/4).",
    sectionId: "2"
  },
  obj4: {
    question: "Should you take the root first or the power first?",
    answer: "Both (ⁿ√a)^m and ⁿ√(a^m) give the same result, but taking the root first usually keeps numbers smaller. For 8^(2/3): root first gives (³√8)² = 2² = 4; power first gives ³√64 = 4. Same answer, easier arithmetic.",
    sectionId: "3"
  },
  obj5: {
    question: "What is a negative rational exponent?",
    answer: "A negative rational exponent combines reciprocal and root/power: a^(-m/n) = 1/a^(m/n). For example, 8^(-2/3) = 1/8^(2/3) = 1/4. The negative takes the reciprocal; the fraction handles the root and power.",
    sectionId: "4"
  },
  obj6: {
    question: "Can you have a negative base with a rational exponent?",
    answer: "It depends on the denominator. Odd roots allow negative bases: (-8)^(1/3) = -2. Even roots don't: (-4)^(1/2) is undefined in real numbers because no real number squared gives -4.",
    sectionId: "5"
  },
  obj7: {
    question: "Do the laws of exponents work with rational exponents?",
    answer: "Yes. Product rule: a^(1/2) · a^(1/3) = a^(5/6). Power rule: (a^(2/3))^(3/4) = a^(1/2). Quotient rule: a^(3/4)/a^(1/4) = a^(1/2). All laws hold for rational exponents.",
    sectionId: "6"
  },
  obj8: {
    question: "How do you simplify expressions with rational exponents?",
    answer: "Convert radicals to exponent form, then apply exponent laws. For √x · ³√x: convert to x^(1/2) · x^(1/3) = x^(5/6). Exponent notation makes different root indices easy to combine.",
    sectionId: "7"
  },
  obj9: {
    question: "What is 16^(3/4)?",
    answer: "Take the 4th root first: ⁴√16 = 2. Then cube: 2³ = 8. So 16^(3/4) = 8. Alternatively: 16³ = 4096, then ⁴√4096 = 8. Same answer, but root-first is simpler.",
    sectionId: "3"
  },
  obj10: {
    question: "Why use exponent form instead of radical form?",
    answer: "Exponent form applies the same rules to all exponents — natural, negative, or rational. Radicals need separate procedures for combining indices. x^(1/2) · x^(1/3) = x^(5/6) is straightforward; √x · ³√x requires finding common indices first.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Rational Exponents",
    "description": "Learn rational exponents: fractional powers, roots as exponents, and simplification. Understand a^(m/n) = nth root of a^m with examples and domain rules.",
    "url": "https://www.learnmathclass.com/algebra/powers/rational-exponents",
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
      "name": "Rational Exponents"
    },
    "teaches": [
      "Definition of a^(1/n) as the nth root",
      "Fractional exponents a^(m/n) as root and power",
      "Converting between radicals and exponents",
      "Negative rational exponents",
      "Domain restrictions for even vs odd roots",
      "Verification of exponent laws for rationals",
      "Simplifying expressions with rational exponents"
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
        "name": "Rational Exponents",
        "item": "https://www.learnmathclass.com/algebra/powers/rational-exponents"
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
//         title: "Rational Exponents Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/powers/rational-exponents",
//          name: "name"
//       },
        
//        }
//     }

return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Rational Exponents: Fractional Powers & Roots | Learn Math Class",
      description: "Learn rational exponents: fractional powers, roots as exponents, and simplification. Understand a^(m/n) = nth root of a^m with examples and domain rules.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers/rational-exponents",
      name: "Rational Exponents"
    },
  }
}
   }

// export default function RationalExponentsPage({seoData,sectionsContent , introContent}) {
export default function RationalExponentsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Rational Exponents</h1>
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
