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
  'powers algebra',
  'exponents',
  'base and exponent',
  'laws of exponents',
  'negative exponents',
  'zero exponent',
  'rational exponents',
  'irrational exponents',
  'exponential equations',
  'exponential functions',
  'exponent rules',
  'exponential inequalities',
  'powers and roots connection',
  'exponent notation'
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


const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
## Core Vocabulary
 
- [Power](!/algebra/definitions#power) — an expression $a^n$ consisting of a base raised to an exponent
- [Base (of a Power)](!/algebra/definitions#base_(of_a_power)) — the number $a$ being raised to a power
- [Exponent](!/algebra/definitions#exponent) — the number $n$ controlling how the base is used
 
## Exponent Types
 
- [Natural Exponent](!/algebra/definitions#natural_exponent) — positive integer: $a^n = a \\cdot a \\cdots a$ ($n$ times)
- [Zero Exponent](!/algebra/definitions#zero_exponent) — $a^0 = 1$ for $a \\neq 0$
- [Negative Exponent](!/algebra/definitions#negative_exponent) — $a^{-n} = 1/a^n$
- [Rational Exponent](!/algebra/definitions#rational_exponent) — $a^{m/n} = \\sqrt[n]{a^m}$
- [Irrational Exponent](!/algebra/definitions#irrational_exponent) — defined as a limit of rational approximations
 
## Laws
 
- [Product Rule (Exponents)](!/algebra/definitions#product_rule_(exponents)) — $a^m \\cdot a^n = a^{m+n}$
- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_(exponents)) — $a^m / a^n = a^{m-n}$
- [Power of a Power](!/algebra/definitions#power_of_a_power) — $(a^m)^n = a^{mn}$
- [Power of a Product](!/algebra/definitions#power_of_a_product) — $(ab)^n = a^n b^n$
- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient) — $(a/b)^n = a^n / b^n$
 
## Applications
 
- [Exponential Equation](!/algebra/definitions#exponential_equation) — variable in the exponent
- [Exponential Inequality](!/algebra/definitions#exponential_inequality) — direction depends on the base
- [Exponential Function](!/algebra/definitions#exponential_function) — $f(x) = a^x$ with fixed base, variable exponent`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},

  obj1: {
    title: `Definition and Terminology`,
    content: `The expression $a^n$ is called a power. The number $a$ is the base — the quantity being repeatedly multiplied. The number $n$ is the exponent — it controls how many times the base appears as a factor.

$$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}$$

This definition works when $n$ is a positive integer. The expression $2^5$ means $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. Five factors of 2.

The word "power" refers to the entire expression, not just the exponent. Saying "$2^5$ is a power of 2" is correct. Saying "5 is the power" is imprecise — 5 is the exponent.

Two exponents have special names. The exponent 2 gives "squared": $a^2$ is "a squared." The exponent 3 gives "cubed": $a^3$ is "a cubed." All other exponents use the general form: $a^n$ is "a to the power of n" or "a to the nth."`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Notation and Conventions`,
    content: `Parentheses determine what the exponent applies to. Without parentheses, the exponent binds only to the symbol immediately before it:

$$-2^2 = -(2^2) = -4$$

$$(-2)^2 = (-2) \\cdot (-2) = 4$$

In the first expression, the exponent applies to 2 alone; the negative sign is applied afterward. In the second, the parentheses force the exponent to apply to $-2$ as a whole.

Stacked exponents are read from the top down:

$$a^{2^3} = a^8$$

This is not the same as $(a^2)^3 = a^6$. Without parentheses, $2^3$ is computed first to produce the exponent 8. The full rules governing expressions like $(a^m)^n$ appear on the [exponent rules](!/algebra/powers/exponent-rules) page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Natural Exponents`,
    content: `When the exponent is a positive integer, the power is a product of repeated factors. The exponent simply counts how many copies of the base are multiplied together.

$$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$$

$$10^6 = 1{,}000{,}000$$

This is where the laws of exponents — the product rule, quotient rule, power-of-a-power rule — are first derived. Each law emerges naturally from counting and regrouping factors. Every extension of exponents to other types preserves these laws by definition.

The [natural exponents](!/algebra/powers/natural-exponents) page develops this case fully: the derivation of each law, worked examples, and the transition toward broader exponent types.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/natural-exponents',
  },

  obj4: {
    title: `Zero as an Exponent`,
    content: `Repeated multiplication offers no interpretation for multiplying a base zero times. The definition $a^0 = 1$ (for $a \\neq 0$) is not arbitrary — it is forced by consistency with the quotient rule.

If $a^m / a^m = a^{m-m}$, then $a^0$ must equal 1, because any nonzero quantity divided by itself is 1.

A pattern argument reinforces this: $3^3 = 27$, $3^2 = 9$, $3^1 = 3$. Each step divides by 3. Continuing: $3^0 = 1$.

The case $0^0$ is genuinely ambiguous. Different conventions assign it the value 1 in combinatorics and leave it undefined in analysis. The [zero powers](!/algebra/powers/zero-powers) page addresses this case and the reasoning behind each convention.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/zero-powers',
  },

  obj5: {
    title: `Negative Exponents`,
    content: `A negative exponent produces the reciprocal of the corresponding positive power:

$$a^{-n} = \\frac{1}{a^n}, \\quad a \\neq 0$$

The definition extends the descending pattern below $a^0$. From $3^1 = 3$ and $3^0 = 1$, dividing by 3 once more gives $3^{-1} = 1/3$. Then $3^{-2} = 1/9$, $3^{-3} = 1/27$, and so on.

The base cannot be zero — $0^{-n}$ would require dividing by $0^n = 0$, which is undefined.

Negative exponents rewrite fractions without denominators: $1/a^3 = a^{-3}$. This notational flexibility is essential when applying the laws of exponents. The [negative exponents](!/algebra/powers/negative-exponents) page covers the full treatment.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/negative-exponents',
  },

  obj6: {
    title: `Rational Exponents`,
    content: `When the exponent is a fraction $m/n$, the denominator indicates a root and the numerator indicates a power:

$$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$

This equivalence bridges exponents and [roots](!/algebra/roots). Computing $8^{2/3}$: the denominator 3 means cube root, the numerator 2 means square. So $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.

For even denominators, the base must be non-negative in real numbers — $(-4)^{1/2}$ has no real value. Odd denominators accept any real base.

Rational exponents provide a single framework for roots and powers. The [rational exponents](!/algebra/powers/rational-exponents) page develops the notation, the domain restrictions, and the connection to radical form.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/rational-exponents',
  },

  obj7: {
    title: `Irrational Exponents`,
    content: `An irrational exponent like $\\pi$ or $\\sqrt{2}$ cannot be expressed as a fraction, so the rational-exponent definition does not apply directly. Instead, $2^\\pi$ is defined as the limit of $2^r$ where rational values $r$ approach $\\pi$:

$$2^3 = 8, \\quad 2^{3.1} \\approx 8.574, \\quad 2^{3.14} \\approx 8.815, \\quad 2^{3.1415} \\approx 8.824$$

The values converge, and the limit is $2^\\pi$.

This construction requires the base to be positive. For $a > 0$, the function $a^x$ is continuous and the limit always exists. For $a \\leq 0$, the sequence of rational approximations does not converge to a consistent real value.

The [irrational exponents](!/algebra/powers/irrational-exponents) page formalizes this limiting process and the domain restriction $a > 0$.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/irrational-exponents',
  },

  obj8: {
    title: `Laws of Exponents`,
    content: `A single set of rules governs all exponent types. The product rule $a^m \\cdot a^n = a^{m+n}$, the quotient rule $a^m / a^n = a^{m-n}$, the power-of-a-power rule $(a^m)^n = a^{mn}$, and the remaining laws hold whether the exponents are natural, zero, negative, rational, or irrational.

These laws are first proved for natural exponents, where they follow from counting factors. The extensions to other exponent types are then defined so that the same laws remain valid — each new definition is chosen precisely to preserve these identities.

Domain restrictions tighten as the exponent type broadens. Natural exponents allow any base. Zero and negative exponents exclude $a = 0$. Rational exponents with even denominators require $a \\geq 0$. Irrational exponents require $a > 0$.

The [exponent rules](!/algebra/powers/exponent-rules) page collects every law with derivations, examples, and the full domain conditions.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/exponent-rules',
  },

  obj9: {
    title: `Exponential Equations`,
    content: `When the unknown appears in the exponent, the equation is exponential: $2^x = 16$, $3^{2x-1} = 27$, $5^x = 12$.

The simplest cases resolve by rewriting both sides with a common base. Since $16 = 2^4$, the equation $2^x = 16$ gives $x = 4$ directly by matching exponents.

When bases cannot be matched, [logarithms](!/algebra/logarithms) provide the tool. Taking the logarithm of both sides converts the exponent into a coefficient, making the unknown accessible through algebra.

The [exponential equations](!/algebra/powers/exponential-equations) page covers both techniques: base matching for exact solutions and logarithmic methods for the general case.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/exponential-equations',
  },

  obj10: {
    title: `Exponential Inequalities`,
    content: `Inequalities involving powers require attention to the base. The expression $2^x > 8$ and $(1/3)^x \\leq 9$ are both exponential inequalities, but they behave differently.

When the base satisfies $a > 1$, the exponential function is increasing: larger exponents produce larger values. The inequality direction is preserved when applying logarithms.

When $0 < a < 1$, the function is decreasing: larger exponents produce smaller values. The inequality reverses when solving.

The [exponential inequalities](!/algebra/powers/exponential-inequalities) page develops the solving techniques and the role the base plays in determining direction.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/exponential-inequalities',
  },

  obj11: {
    title: `Exponential Functions`,
    content: `When the base is a fixed positive number and the exponent varies, the power $a^x$ becomes a [function](!/algebra/functions) of $x$. This is the conceptual shift from computing individual powers to studying how powers change.

For $a > 1$, the function grows — each unit increase in $x$ multiplies the output by $a$. For $0 < a < 1$, the function decays. The number $e \\approx 2.718$ occupies a central role: the function $e^x$ is its own derivative, making it foundational in calculus.

Exponential functions are the counterpart of [polynomial functions](!/algebra/polynomials). In a polynomial, the base varies and the exponent is fixed ($x^3$). In an exponential function, the base is fixed and the exponent varies ($3^x$). The behaviors are fundamentally different.

The [exponential functions](!/algebra/powers/exponential-functions) page covers graphs, transformations, growth and decay models, and the role of $e$.`,
    before: ``,
    after: ``,
    link: '/algebra/powers/exponential-functions',
  },

}

const introContent = {
  id: 'intro',
  title: `Base, Exponent, Result`,
  content: `A power is an expression built from two components: a base and an exponent. The base is the number being acted on; the exponent dictates how. In the simplest case, the exponent counts repeated multiplications — but that interpretation covers only the starting point. Extending the exponent to zero, negative values, fractions, and irrational numbers requires progressively broader definitions, each consistent with the rules established at the natural-number level.`,
}

const faqQuestions = {
  obj1: {
    question: "What is a power in math?",
    answer: "A power is an expression consisting of a base and an exponent, written a^n. The base is the number being multiplied, and the exponent controls how many times. For positive integer exponents, a^n means a multiplied by itself n times.",
    sectionId: "1"
  },
  obj2: {
    question: "Why does anything to the zero power equal one?",
    answer: "The definition a^0 = 1 is forced by the quotient rule. Since a^m divided by a^m equals a^(m-m) = a^0, and any nonzero number divided by itself is 1, a^0 must equal 1. The pattern of dividing successive powers by the base also confirms this result.",
    sectionId: "4"
  },
  obj3: {
    question: "What does a negative exponent mean?",
    answer: "A negative exponent produces the reciprocal of the positive power. The expression a^(-n) equals 1/a^n. This extends the descending pattern: each reduction of the exponent by one divides the result by the base.",
    sectionId: "5"
  },
  obj4: {
    question: "How do rational exponents connect to roots?",
    answer: "A rational exponent m/n means take the nth root and raise to the mth power. The expression a^(m/n) equals the nth root of a^m, or equivalently the nth root of a raised to the m. This bridges exponent notation and radical notation.",
    sectionId: "6"
  },
  obj5: {
    question: "What are the main laws of exponents?",
    answer: "The main laws are the product rule a^m times a^n equals a^(m+n), the quotient rule a^m divided by a^n equals a^(m-n), and the power-of-a-power rule (a^m)^n equals a^(mn). These hold for all exponent types: natural, zero, negative, rational, and irrational.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Powers and Exponents",
    "description": "Learn powers and exponents: natural, zero, negative, rational, and irrational exponents. Master exponent laws, exponential equations, inequalities, and functions.",
    "url": "https://www.learnmathclass.com/algebra/powers",
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
      "name": "Powers and Exponents"
    },
    "teaches": [
      "Power notation: base, exponent, and conventions",
      "Natural, zero, negative, rational, and irrational exponents",
      "Laws of exponents and domain restrictions",
      "Rational exponents and their connection to roots",
      "Exponential equations and inequalities",
      "Exponential functions, growth, and decay"
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
        "name": "Powers and Exponents",
        "item": "https://www.learnmathclass.com/algebra/powers"
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
      title: "Powers & Exponents: Rules and Types | Learn Math Class",
      description: "Learn powers and exponents: natural, zero, negative, rational, and irrational exponents. Master exponent laws, exponential equations, inequalities, and functions.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers",
      name: "Powers and Exponents"
    },
  }
}
   }


 export default function PowersAndExponentsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {  
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Powers</h1>
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
