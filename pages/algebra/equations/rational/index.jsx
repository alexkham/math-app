import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "rational equations",
  "solving rational equations",
  "clearing denominators",
  "extraneous solutions",
  "domain restrictions",
  "LCD method",
  "variable in denominator",
  "cross multiplication",
  "proportions",
  "polynomial denominators",
  "checking solutions",
  "excluded values",
  "fraction equations",
  "rational expressions equations"
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
## Equation Concepts
 
- [Domain Restriction](!/algebra/definitions#domain_restriction) — values that zero out a denominator must be excluded before solving
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — clearing denominators may introduce values that violate domain restrictions
- [Equivalent Equations](!/algebra/definitions#equivalent_equations) — multiplying by the LCD is not always reversible
 
## Supporting
 
- [Expression](!/algebra/definitions#expression) — the rational expressions forming each side of the equation
- [Solution Set](!/algebra/definitions#solution_set) — must be intersected with the domain`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
 
  obj1: {
    title: `Definition`,
    content: `A rational equation is any equation containing at least one fraction in which the variable appears in the denominator. The equation

$$\\frac{3}{x - 1} + \\frac{2}{x + 4} = 1$$

is rational because the variable $x$ sits inside two denominators. By contrast, the equation $\\frac{x + 1}{3} = 2$ is not rational — its denominator is a constant, and the equation is simply a [linear equation](!/algebra/equations/linear) with a fractional coefficient.

The distinction matters because a variable denominator can equal zero, and division by zero is undefined. A constant denominator like $3$ is always nonzero and creates no restrictions. The moment $x$ appears below the fraction bar, the equation inherits domain constraints that must be identified and enforced throughout the solving process.

Rational equations arise naturally from rates, proportions, and any setting where a quantity is expressed as a ratio of two variable expressions. Algebraically, they are equations involving rational expressions — quotients $\\frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are [polynomials](!/algebra/polynomials).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Domain Restrictions`,
    content: `Before manipulating a rational equation in any way, the values that make any denominator zero must be identified and excluded from the domain. These excluded values are never solutions, regardless of what subsequent algebra might suggest.

Consider the equation $\\frac{x}{x - 3} = \\frac{9}{x - 3} + 2$. The denominator $x - 3$ equals zero when $x = 3$, so $x = 3$ is excluded from the domain. This restriction is declared at the outset and carries through every step of the solution.

When multiple fractions appear, each denominator contributes its own restrictions. The equation $\\frac{1}{x} + \\frac{1}{x - 2} = \\frac{5}{x(x - 2)}$ excludes both $x = 0$ and $x = 2$. Factoring is sometimes necessary to identify all restrictions: the denominator $x^2 - 4$ factors as $(x - 2)(x + 2)$, excluding both $x = 2$ and $x = -2$.

The domain is the set of all real numbers minus the excluded values. Only candidates that survive within this domain qualify as solutions. Stating the domain explicitly at the start of the solution is not a formality — it is the safeguard against accepting extraneous results.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving by Clearing Denominators`,
    content: `The standard method for solving a rational equation is to multiply every term on both sides by the least common denominator of all fractions. This eliminates every fraction in a single step, converting the rational equation into a [polynomial equation](!/algebra/equations/polynomial) that can be solved with familiar techniques.

For the equation $\\frac{3}{x - 1} + \\frac{2}{x + 4} = 1$, the LCD is $(x - 1)(x + 4)$. Multiplying every term by this product:

$$3(x + 4) + 2(x - 1) = (x - 1)(x + 4)$$

Expanding both sides:

$$3x + 12 + 2x - 2 = x^2 + 3x - 4$$

$$5x + 10 = x^2 + 3x - 4$$

Rearranging into standard form:

$$x^2 - 2x - 14 = 0$$

The [quadratic formula](!/algebra/equations/quadratic) gives $x = 1 \\pm \\sqrt{15}$. Neither value equals $1$ or $-4$, so both lie within the domain and both are genuine solutions.

The LCD must include every distinct factor that appears in any denominator, each raised to the highest power at which it occurs. Identifying the LCD accurately is essential — using a smaller common multiple leaves some fractions uncleared, while using an unnecessarily large one introduces extra factors that complicate the resulting polynomial without benefit.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Extraneous Solutions`,
    content: `Multiplying both sides of an equation by an expression containing the variable is not a reversible operation. When that expression equals zero for some value of $x$, the multiplication maps a false statement to a true one, potentially creating solutions that do not satisfy the original equation. These are extraneous solutions.

Return to the equation $\\frac{x}{x - 3} = \\frac{9}{x - 3} + 2$. The domain excludes $x = 3$. Multiply both sides by $(x - 3)$:

$$x = 9 + 2(x - 3)$$

$$x = 9 + 2x - 6$$

$$x = 2x + 3$$

$$-x = 3$$

$$x = -3$$

Checking: $\\frac{-3}{-3 - 3} = \\frac{-3}{-6} = \\frac{1}{2}$ and $\\frac{9}{-3 - 3} + 2 = \\frac{9}{-6} + 2 = -\\frac{3}{2} + 2 = \\frac{1}{2}$. The value $x = -3$ checks out.

Now consider $\\frac{x}{x - 3} - \\frac{3}{x - 3} = 1$. Multiply by $(x - 3)$: $x - 3 = x - 3$, which simplifies to $0 = 0$. This is an identity — yet $x = 3$ is not a valid solution because it was excluded from the domain. Every real number except $3$ satisfies the original equation. Without the domain check, $x = 3$ would appear to be among the solutions.

The rule is absolute: every candidate obtained after clearing denominators must be substituted back into the original equation to confirm it does not violate any domain restriction.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Equations with Monomial Denominators`,
    content: `The simplest rational equations have denominators that are single terms — monomials like $x$, $x^2$, or $3x$. The LCD is easy to identify, and the resulting polynomial equation is typically low in degree.

Consider $\\frac{5}{x} + 3 = \\frac{7}{x}$. The only denominator is $x$, so the domain excludes $x = 0$. Multiplying every term by $x$:

$$5 + 3x = 7$$

$$3x = 2$$

$$x = \\frac{2}{3}$$

Since $\\frac{2}{3} \\neq 0$, the solution is valid.

When different powers of $x$ appear in the denominators, the LCD uses the highest power. The equation $\\frac{1}{x} + \\frac{1}{x^2} = \\frac{3}{4}$ has LCD $4x^2$. Multiplying through:

$$4x + 4 = 3x^2$$

$$3x^2 - 4x - 4 = 0$$

The quadratic formula yields $x = \\frac{4 \\pm \\sqrt{16 + 48}}{6} = \\frac{4 \\pm 8}{6}$, giving $x = 2$ or $x = -\\frac{2}{3}$. Neither is zero, so both are valid solutions.

Monomial-denominator equations serve as the natural entry point for the technique of clearing denominators because the LCD is always a single power of the variable, making the multiplication step transparent.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Equations with Polynomial Denominators`,
    content: `When denominators are polynomials of degree two or higher, they must be factored completely before the LCD can be determined. Factoring reveals both the domain restrictions and the structure of the LCD.

Consider the equation $\\frac{2}{x^2 - 1} = \\frac{1}{x - 1}$. The left denominator factors as $(x - 1)(x + 1)$, so the domain excludes $x = 1$ and $x = -1$. The LCD is $(x - 1)(x + 1)$. Multiplying:

$$2 = x + 1$$

$$x = 1$$

But $x = 1$ is excluded from the domain. The candidate is extraneous, and the equation has no solution.

More complex denominators require careful bookkeeping. For the equation

$$\\frac{3}{x^2 + 5x + 6} + \\frac{1}{x + 2} = \\frac{2}{x + 3}$$

factor the quadratic: $x^2 + 5x + 6 = (x + 2)(x + 3)$. The domain excludes $x = -2$ and $x = -3$. The LCD is $(x + 2)(x + 3)$. Multiplying every term:

$$3 + (x + 3) = 2(x + 2)$$

$$3 + x + 3 = 2x + 4$$

$$6 + x = 2x + 4$$

$$x = 2$$

Since $2 \\neq -2$ and $2 \\neq -3$, the solution $x = 2$ is valid.

The factoring step is not optional. Attempting to clear unfactored denominators leads to an LCD that is larger than necessary, inflating the degree of the resulting polynomial and creating more opportunities for error.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Proportions and Cross-Multiplication`,
    content: `A proportion is a rational equation in which a single fraction on the left equals a single fraction on the right:

$$\\frac{A}{B} = \\frac{C}{D}$$

Cross-multiplication converts this into the polynomial equation $AD = BC$, provided $B \\neq 0$ and $D \\neq 0$. This is a special case of clearing denominators — the LCD is $BD$, and multiplying both sides by $BD$ produces $AD = BC$ directly.

For example, $\\frac{x + 1}{x - 2} = \\frac{3}{4}$ becomes $4(x + 1) = 3(x - 2)$, which simplifies to $4x + 4 = 3x - 6$, giving $x = -10$. Since $-10 \\neq 2$, the solution is valid.

Cross-multiplication is fast but limited to equations already in the form of two equal fractions. When more than two fractions appear, or when fractions are added or subtracted, the general LCD method is required. Even in the proportional case, domain restrictions must be stated and checked: if the variable appears in $B$ or $D$, any value that zeros out either denominator is excluded.

A common structural clue that an equation is a proportion in disguise: if every term can be combined so that exactly one fraction appears on each side, cross-multiplication applies.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Equations Reducible to Rational Form`,
    content: `Several equation types that do not initially look like rational equations can be rewritten as such, inheriting the full domain-restriction and clearing-denominator framework.

Negative exponents are the most direct case. The equation $x^{-1} + x^{-2} = 6$ is equivalent to $\\frac{1}{x} + \\frac{1}{x^2} = 6$, which is a standard rational equation with monomial denominators. Rewriting negative exponents as fractions is not a choice of style — it is a recognition of what the equation actually is.

Certain symmetric expressions become rational under substitution. The equation $x + \\frac{1}{x} = \\frac{5}{2}$ can be treated directly as a rational equation by clearing $x$ from the denominator: $x^2 + 1 = \\frac{5x}{2}$, then $2x^2 - 5x + 2 = 0$. Alternatively, the substitution $u = x + \\frac{1}{x}$ captures a structure that appears in many competition and textbook problems.

Equations involving rates, reciprocals of linear expressions, or differences of fractions often reduce to rational equations after algebraic manipulation. In every case, the same discipline applies: identify domain restrictions from any variable denominator, clear denominators systematically, solve the resulting polynomial, and verify all candidates against the original equation.`,
    before: ``,
    after: ``,
    link: '',
  },
};  

 const introContent = {
  id: 'intro',
  title: `Equations with Variables in the Denominator`,
  content: `When the unknown appears below a fraction bar, the equation acquires a feature that no polynomial equation possesses: certain values of the variable are forbidden outright, excluded from the domain before any solving begins. A rational equation is defined by this presence of the variable in at least one denominator. The standard solving technique — clearing all denominators by multiplying through — converts the equation into a polynomial one, but the conversion is not always reversible. Values that zero out a denominator may survive the algebra and masquerade as solutions, making verification against the original domain restrictions an unavoidable final step.`,
};

const faqQuestions = {
  obj1: {
    question: "What is a rational equation?",
    answer: "A rational equation contains at least one fraction where the variable appears in the denominator. Unlike equations with constant denominators (which are just linear equations), variable denominators create forbidden values and require special solving techniques.",
    sectionId: "1"
  },
  obj2: {
    question: "What are domain restrictions in rational equations?",
    answer: "Domain restrictions are values that make any denominator equal zero. These values must be identified before solving and excluded from the solution set. Any value that zeros a denominator is never a valid solution.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you solve rational equations by clearing denominators?",
    answer: "Multiply every term on both sides by the least common denominator (LCD) of all fractions. This eliminates all fractions, converting the rational equation into a polynomial equation that can be solved with standard techniques.",
    sectionId: "3"
  },
  obj4: {
    question: "What are extraneous solutions?",
    answer: "Extraneous solutions are values that emerge from the algebra but don't satisfy the original equation — typically because they violate domain restrictions. Every candidate solution must be checked against the original equation to filter out extraneous results.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you solve equations with monomial denominators?",
    answer: "When denominators are single terms like x or x², the LCD is the highest power present. Multiply through by the LCD to clear all fractions, solve the resulting polynomial, and verify solutions against domain restrictions.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you handle polynomial denominators?",
    answer: "Factor all polynomial denominators completely first. Factoring reveals domain restrictions (excluded values) and identifies the LCD. Only after factoring can you accurately clear denominators and solve.",
    sectionId: "6"
  },
  obj7: {
    question: "When can you use cross-multiplication?",
    answer: "Cross-multiplication applies when the equation has exactly one fraction on each side: A/B = C/D becomes AD = BC. This is a special case of clearing denominators where the LCD is BD. Domain restrictions still apply.",
    sectionId: "7"
  },
  obj8: {
    question: "What equations reduce to rational form?",
    answer: "Equations with negative exponents (x⁻¹ = 1/x), symmetric expressions (x + 1/x), and reciprocal relationships all reduce to rational equations. Rewrite them with fraction notation, then apply standard clearing-denominator techniques.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Rational Equations",
    "description": "Master rational equations: domain restrictions, clearing denominators with LCD, extraneous solutions, monomial and polynomial denominators, cross-multiplication for proportions, and equations reducible to rational form.",
    "url": "https://www.learnmathclass.com/algebra/equations/rational",
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
      "name": "Rational Equations"
    },
    "teaches": [
      "Definition of rational equations",
      "Identifying domain restrictions",
      "Clearing denominators with LCD",
      "Recognizing extraneous solutions",
      "Solving with polynomial denominators",
      "Cross-multiplication for proportions",
      "Equations reducible to rational form"
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
        "name": "Equations",
        "item": "https://www.learnmathclass.com/algebra/equations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Rational Equations",
        "item": "https://www.learnmathclass.com/algebra/equations/rational"
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
      title: "Rational Equations: Clearing Denominators & Checking | Learn Math Class",
      description: "Master rational equations: domain restrictions, clearing denominators with LCD, extraneous solutions, monomial and polynomial denominators, cross-multiplication for proportions, and equations reducible to rational form.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/rational",
      name: "Rational Equations"
    },
  }
}
   }

export default function RationalEquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {   
    
  const genericSections=[
    
  {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Rational Equations</h1>
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
