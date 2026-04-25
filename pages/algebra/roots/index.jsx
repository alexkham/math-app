import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  'roots algebra',
  'radicals math',
  'square root',
  'cube root',
  'nth root',
  'principal root',
  'radical notation',
  'radicand and index',
  'rational exponents',
  'simplifying radicals',
  'radical equations',
  'radical functions',
  'even and odd roots',
  'roots and powers connection'
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
  // ============================================================
// obj0 Key Terms — /algebra/roots (hub)
// ============================================================
 
obj0: {
  title: `Key Terms`,
  content: `
## Core Vocabulary
 
- [Root](!/algebra/definitions#root) — the inverse of exponentiation: the value that, raised to a given power, produces the radicand
- [Radical](!/algebra/definitions#radical) — the symbol $\\sqrt[n]{\\phantom{x}}$ used to denote a root operation
- [Index](!/algebra/definitions#index) — the positive integer $n$ specifying which root is taken; even and odd indices behave differently
- [Radicand](!/algebra/definitions#radicand) — the expression placed under the radical sign
 
## Root Types
 
- [Square Root](!/algebra/definitions#square_root) — the second root, written $\\sqrt{a}$, returning the non-negative value whose square is $a$
- [Cube Root](!/algebra/definitions#cube_root) — the third root, written $\\sqrt[3]{a}$, defined for all real numbers
- [Principal Root](!/algebra/definitions#principal_root) — the unique non-negative root returned by the radical symbol when the index is even
 
## Notation and Rules
 
- [Rational Exponent](!/algebra/definitions#rational_exponent) — fractional power notation where $a^{m/n} = \\sqrt[n]{a^m}$
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals)) — $\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals)) — $\\sqrt[n]{a/b} = \\sqrt[n]{a} / \\sqrt[n]{b}$
 
## Working with Radicals
 
- [Simplest Form](!/algebra/definitions#simplest_form) — no perfect powers under the radical, no fractions under it, no radicals in denominators
- [Like Radicals](!/algebra/definitions#like_radicals) — radicals sharing the same index and radicand, required for addition and subtraction
- [Rationalization](!/algebra/definitions#rationalization) — rewriting an expression so no radical appears in the denominator
- [Radical Equation](!/algebra/definitions#radical_equation) — an equation where the variable appears under a radical sign
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — a value introduced by a non-reversible step that does not satisfy the original equation
- [Radical Function](!/algebra/definitions#radical_function) — a function of the form $f(x) = \\sqrt[n]{g(x)}$`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
 

  obj1: {
    title: `What is a Root`,
    content: `A root reverses exponentiation. When a number $a$ is raised to power $n$ and produces $b$, the $n$th root of $b$ returns $a$.

$$a^n = b \\quad \\Longleftrightarrow \\quad \\sqrt[n]{b} = a$$

The radical symbol $\\sqrt{\\phantom{x}}$ denotes a root. The small number tucked into the upper left is the index — it specifies which root. The expression under the radical is the radicand.

$$\\sqrt[n]{b}$$

Here $n$ is the index and $b$ is the radicand. When no index appears, square root (index 2) is assumed.

$$\\sqrt{25} = 5 \\quad \\text{because} \\quad 5^2 = 25$$

$$\\sqrt[3]{8} = 2 \\quad \\text{because} \\quad 2^3 = 8$$

$$\\sqrt[4]{81} = 3 \\quad \\text{because} \\quad 3^4 = 81$$

Every root operation poses a question: what base, raised to this power, yields the radicand?`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Square Roots, Cube Roots, and Beyond`,
    content: `The index determines which power is being reversed.

A square root ($n = 2$) undoes squaring. It appears constantly — in the Pythagorean theorem, the quadratic formula, distance calculations, and anywhere area connects to length.

$$\\sqrt{49} = 7, \\quad \\sqrt{144} = 12, \\quad \\sqrt{2} \\approx 1.414$$

A cube root ($n = 3$) undoes cubing. It arises in volume problems, certain equations, and throughout higher mathematics.

$$\\sqrt[3]{27} = 3, \\quad \\sqrt[3]{-64} = -4, \\quad \\sqrt[3]{1000} = 10$$

Higher roots follow the same pattern. Fourth roots undo fourth powers, fifth roots undo fifth powers, and so on.

$$\\sqrt[4]{16} = 2, \\quad \\sqrt[5]{32} = 2, \\quad \\sqrt[6]{64} = 2$$

The index matters greatly. Even indices behave differently from odd indices — a distinction explored fully in [properties of radicals](!/algebra/roots/properties). This difference affects domain, sign behavior, and how [simplification](!/algebra/roots/simplifying) proceeds.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Principal Roots`,
    content: `Positive numbers have two square roots. Both 5 and $-5$ square to 25. But the radical symbol returns only one value — the principal root.

For square roots and all even-index roots, the principal root is the non-negative one.

$$\\sqrt{25} = 5, \\quad \\text{not } -5, \\quad \\text{and not } \\pm 5$$

This convention exists so that $\\sqrt{x}$ is a function — one input, one output. Without it, $\\sqrt{25}$ would have two values, and expressions involving radicals would become ambiguous.

When both roots are needed, write $\\pm\\sqrt{25} = \\pm 5$ explicitly. This notation appears frequently when [solving radical equations](!/algebra/roots/equations).

Odd-index roots have no such ambiguity. Every real number has exactly one real cube root, one real fifth root, and so on. The principal root is simply that unique value.

$$\\sqrt[3]{-27} = -3 \\quad \\text{(the only real cube root)}$$

The principal root convention allows radicals to behave predictably in equations and as [functions](!/algebra/roots/functions).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Radical and Exponent Notation`,
    content: `Roots can be written two ways: as radicals or as fractional exponents. Both notations represent the same operation.

$$\\sqrt[n]{a} = a^{1/n}$$

The index becomes the denominator of the exponent. Square root is $a^{1/2}$, cube root is $a^{1/3}$, fourth root is $a^{1/4}$.

When the radicand itself has a power, the two exponents combine:

$$\\sqrt[n]{a^m} = a^{m/n}$$

This can also be computed as:

$$\\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$

For example:

$$\\sqrt[3]{8^2} = 8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$$

Exponent notation often simplifies algebraic manipulation, while radical notation is clearer for computation. Converting between forms is a key technique in [simplifying radicals](!/algebra/roots/simplifying). The full treatment appears in [rational exponents](!/algebra/roots/rational-exponents).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Rules for Radicals`,
    content: `Radicals follow specific rules that enable simplification and combination.

The product rule allows a radical of a product to split:

$$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$

The quotient rule does the same for division:

$$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$

Nested radicals combine by multiplying indices:

$$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$$

These rules work when the indices match and when the radicands satisfy certain conditions. Even-index roots require non-negative radicands in the real number system — a restriction detailed in [properties of radicals](!/algebra/roots/properties).

The complete set of rules, with their restrictions and derivations, appears in [radical rules](!/algebra/roots/radical-rules). Mastering these rules is essential for [operations with radicals](!/algebra/roots/operations).`,
    before: ``,
    after: ``,
    link: '/algebra/roots/rules',
  },

  obj6: {
    title: `Simplifying and Operating`,
    content: `A radical is in simplest form when no perfect power remains under the radical, no fractions appear under the radical, and no radicals appear in denominators.

$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$$

The factor 36 is a perfect square and comes out; the factor 2 remains.

Radicals can be added or subtracted only when they are like radicals — same index and same radicand.

$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$

$$\\sqrt{2} + \\sqrt{3} \\quad \\text{cannot be combined}$$

Multiplication and division follow the [radical rules](!/algebra/roots/radical-rules). Denominators with radicals are typically rationalized — rewritten so the radical moves to the numerator.

Detailed techniques for reducing radicals to simplest form appear in [simplifying radicals](!/algebra/roots/simplifying). Methods for combining and manipulating radical expressions appear in [operations with radicals](!/algebra/roots/operations).`,
    before: ``,
    after: ``,
    link: '/algebra/roots/simplifying',
  },

  obj7: {
    title: `Equations with Radicals`,
    content: `When the unknown sits under a radical, the equation requires special handling.

The standard approach: isolate the radical, then raise both sides to a power that eliminates it.

$$\\sqrt{x + 3} = 5$$

$$x + 3 = 25$$

$$x = 22$$

This process can introduce extraneous solutions — values that satisfy the transformed equation but not the original. Checking solutions is essential, especially with even-index radicals.

Equations with multiple radicals may require the process repeated. Cube roots and higher follow the same logic, though odd-index equations rarely produce extraneous solutions due to different [properties](!/algebra/roots/properties).

Full techniques for solving, including equations with multiple radicals and methods for identifying extraneous solutions, appear in [radical equations](!/algebra/roots/equations).`,
    before: ``,
    after: ``,
    link: '/algebra/roots/equations',
  },

  obj8: {
    title: `Radicals as Functions`,
    content: `When the radicand contains a variable, the radical becomes a function.

$$f(x) = \\sqrt{x}$$

This function takes an input $x$ and returns its principal square root. Not every input works — the domain depends on the index.

Even-index radical functions require non-negative radicands. The domain of $f(x) = \\sqrt{x}$ is $x \\geq 0$. This restriction stems from the [properties of radicals](!/algebra/roots/properties).

Odd-index radical functions accept all real inputs. The domain of $f(x) = \\sqrt[3]{x}$ is all real numbers.

The graphs have characteristic shapes. Square root functions start at a point and rise gradually. Cube root functions pass through the origin with an S-curve. These shapes transform predictably under shifts, stretches, and reflections.

Radical functions are inverses of power functions. The square root undoes squaring; the cube root undoes cubing. This inverse relationship connects to [rational exponents](!/algebra/roots/rational-exponents).

Full treatment of graphs, domains, transformations, and inverses appears in [radical functions](!/algebra/roots/functions).`,
    before: ``,
    after: ``,
    link: '/algebra/roots/functions',
  },

  obj9: {
    title: `When Radicands Are Negative`,
    content: `Odd roots handle negative radicands naturally. A negative number has a real cube root, fifth root, seventh root, and so on.

$$\\sqrt[3]{-8} = -2, \\quad \\sqrt[5]{-32} = -2$$

Even roots of negative numbers do not exist in the real number system. No real number squares to $-4$.

$$\\sqrt{-4} \\quad \\text{is not a real number}$$

This distinction between even and odd indices is fundamental to [properties of radicals](!/algebra/roots/properties) and determines the domain of [radical functions](!/algebra/roots/functions).

Mathematics extends beyond the reals. The imaginary unit $i$ is defined by $i^2 = -1$, and with it, even roots of negative numbers become expressible:

$$\\sqrt{-4} = 2i$$

This opens the door to complex numbers, where every polynomial has roots and the square root function extends to negative inputs.

The connection between radicals and complex numbers is developed in [radicals and complex numbers](!/algebra/roots/complex).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Connection to Powers`,
    content: `Roots and powers are two sides of one coin. Understanding either requires understanding both.

The [powers section](!/algebra/powers) develops exponentiation from natural exponents through negative, rational, and irrational exponents. Rational exponents — fractions as powers — are precisely where roots reappear.

$$a^{1/2} = \\sqrt{a}, \\quad a^{1/3} = \\sqrt[3]{a}, \\quad a^{m/n} = \\sqrt[n]{a^m}$$

The laws of exponents govern both operations. Product rules, quotient rules, and power rules translate directly between radical and exponent notation. These connections are explored in [radical rules](!/algebra/roots/radical-rules) and [rational exponents](!/algebra/roots/rational-exponents).

Domain restrictions tighten as exponents become more general. Natural exponents allow any base. Negative exponents exclude zero. Rational exponents with even denominators require positive bases. This progression mirrors the restrictions on even-index radicals detailed in [properties of radicals](!/algebra/roots/properties).

Mastery of roots and powers together provides the foundation for exponential functions, logarithms, and calculus.`,
    before: ``,
    after: ``,
    link: '',
  },

}


 const introContent = {
  id: "intro",
  title: "Undoing Powers",
  content: `Raising a number to a power is straightforward — multiply the base by itself repeatedly. But what if you know the result and need to recover the original base? This reverse operation is the root.

Powers and roots are inverse operations. If raising 3 to the second power gives 9, then the square root of 9 returns 3. Every root asks the same question: what number, when raised to a given power, produces this value?`
}


const faqQuestions = {
  obj1: {
    question: "What is a root in math?",
    answer: "A root reverses exponentiation. The nth root of b asks what number, raised to the nth power, produces b. For example, the square root of 25 is 5 because 5 squared equals 25, and the cube root of 8 is 2 because 2 cubed equals 8.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between even and odd roots?",
    answer: "Even-index roots (square root, fourth root) require non-negative radicands in real numbers and always return a non-negative principal root. Odd-index roots (cube root, fifth root) accept any real input, including negative numbers, and return one unique real value.",
    sectionId: "3"
  },
  obj3: {
    question: "How are roots related to exponents?",
    answer: "Roots and fractional exponents are equivalent notations. The nth root of a equals a raised to the power 1/n. More generally, the nth root of a to the m equals a to the power m/n. All exponent laws apply to both forms.",
    sectionId: "4"
  },
  obj4: {
    question: "What is a principal root?",
    answer: "The principal root is the value returned by the radical symbol. For even-index roots, it is the non-negative root. For odd-index roots, it is the unique real root. This convention ensures the radical produces exactly one output for each valid input.",
    sectionId: "3"
  },
  obj5: {
    question: "Can you take an even root of a negative number?",
    answer: "Not in the real number system. No real number squared gives a negative result. However, using the imaginary unit i where i squared equals negative one, even roots of negative numbers become expressible as complex numbers. For example, the square root of negative 4 equals 2i.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Roots and Radicals",
    "description": "Learn roots and radicals: square roots, cube roots, principal roots, radical notation, rational exponents, simplification rules, radical equations, and functions.",
    "url": "https://www.learnmathclass.com/algebra/roots",
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
      "name": "Roots and Radicals"
    },
    "teaches": [
      "Definition of roots as inverse of exponentiation",
      "Square roots, cube roots, and higher-index roots",
      "Principal root convention for even and odd indices",
      "Radical and rational exponent notation",
      "Rules for simplifying and operating with radicals",
      "Radical equations, functions, and complex number connections"
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
        "name": "Roots and Radicals",
        "item": "https://www.learnmathclass.com/algebra/roots"
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
      title: "Roots & Radicals: Square, Cube & Nth Roots | Learn Math Class",
      description: "Learn roots and radicals: square roots, cube roots, principal roots, radical notation, rational exponents, simplification rules, radical equations, and functions.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots",
      name: "Roots and Radicals",
    
    },
  }
}
   }


export default function RootsAndRadicalsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {   
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Roots (Radicals)</h1>
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
