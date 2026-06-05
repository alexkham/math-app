
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import '../../../pages/pages.css'

export async function getStaticProps() {
  const { default: algebraFormulasList } = await import('@/app/api/db/formulas/algebra/algebraFormulas')

  const keyWords = [
    'algebra formulas',
    'algebra formulas list',
    'algebraic identities',
    'quadratic formula',
    'exponent rules',
    'logarithm rules',
    'factoring formulas',
    'difference of squares formula',
    'binomial theorem',
    'radical rules',
    'polynomial theorems',
    'completing the square',
    'algebra formula reference',
    'algebra equations and identities'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is the quadratic formula?",
      answer: "The quadratic formula x = (-b plus or minus the square root of b squared minus 4ac) divided by 2a gives the two solutions of any quadratic equation ax squared + bx + c = 0 directly from its coefficients. The discriminant b squared minus 4ac determines whether the roots are real and distinct, repeated, or complex."
    },
    obj2: {
      question: "What are the main exponent rules?",
      answer: "The main exponent rules are: product rule (same base, add exponents), quotient rule (same base, subtract exponents), power of a power (multiply exponents), power of a product (distribute to each factor), power of a quotient (distribute to numerator and denominator), zero exponent (any nonzero base to the zero equals 1), and negative exponent (reciprocal of the positive power)."
    },
    obj3: {
      question: "What are the logarithm rules?",
      answer: "The key logarithm rules are: product rule (log of a product equals sum of logs), quotient rule (log of a quotient equals difference of logs), power rule (exponent moves out front as a multiplier), and change of base formula (converts between bases). Additionally, log base a of a equals 1 and log base a of 1 equals 0."
    },
    obj4: {
      question: "What is the difference of squares formula?",
      answer: "The difference of squares formula states that a squared minus b squared equals (a + b)(a - b). It factors a subtraction of two perfect squares into the product of a sum and a difference. A sum of squares does not factor over the real numbers."
    },
    obj5: {
      question: "What are the remainder and factor theorems?",
      answer: "The remainder theorem states that dividing a polynomial P(x) by (x - c) gives a remainder equal to P(c). The factor theorem is a special case: (x - c) is a factor of P(x) if and only if P(c) = 0, meaning c is a root of the polynomial."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Algebra Formulas and Identities",
      "description": "Complete reference of algebra formulas with derivations and examples. Covers equations, logarithms, exponents, radicals, factoring, and polynomial theorems.",
      "url": "https://www.learnmathclass.com/algebra/formulas",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Algebra Formulas"
      },
      "teaches": [
        "Quadratic formula, discriminant, and completing the square",
        "Logarithm rules: product, quotient, power, and change of base",
        "Exponent rules: product, quotient, power, zero, and negative",
        "Factoring identities: squares, cubes, and general powers",
        "Radical rules: product, quotient, power, and nested radicals",
        "Polynomial theorems: remainder, factor, rational root, Vieta's, and binomial"
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
          "name": "Algebra Formulas",
          "item": "https://www.learnmathclass.com/algebra/formulas"
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
      algebraFormulasList,
      faqQuestions,
      schemas,
      seoData: {
        title: "Algebra Formulas & Identities | Learn Math Class",
        description: "Complete reference of algebra formulas with derivations and examples. Covers equations, logarithms, exponents, radicals, factoring, and polynomial theorems.",
        hubDescription: "Formulas are the working tools of algebra -- each one encodes a pattern that appears across hundreds of problems. This reference collects every major formula with its conditions, derivations, and connections to related results, so you can find the right identity quickly and understand why it works. Use it while solving homework, preparing for exams, or building fluency with algebraic manipulation. Formulas are organized into six searchable categories: [Equations](!/algebra/formulas#category_equations) (quadratic formula, discriminant, completing the square, square root property, absolute value equations and inequalities), [Logarithm Rules](!/algebra/formulas#category_logarithm_rules) (product rule, quotient rule, power rule, change of base, log of base, log of one, inverse cancellation properties), [Identities & Factoring](!/algebra/formulas#category_identities_&_factoring) (difference of squares, squares and cubes of sums and differences, sum and difference of cubes, trinomial factoring, general power factorizations), [Exponent Rules](!/algebra/formulas#category_exponent_rules) (product rule, quotient rule, power of a power, power of a product, power of a quotient, zero and negative exponents), [Radical Rules](!/algebra/formulas#category_radical_rules) (radical-to-exponent conversion, product rule, quotient rule, power rule, nested radicals, even and odd root identities), and [Polynomial Theorems](!/algebra/formulas#category_polynomial_theorems) (remainder theorem, factor theorem, rational root theorem, Vieta's formulas, binomial theorem, binomial coefficient, Pascal's rule). Each entry includes step-by-step derivations where applicable and links to the lesson page where the formula is developed in full.",
        keywords: keyWords.join(", "),
        url: "/algebra/formulas",
        name: "Algebra Formulas and Identities"
      }
    }
  }
}

export default function AlgebraFormulasPage({
  algebraFormulasList,
  faqQuestions,
  schemas,
  seoData
}) {

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
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <main>
        <h1 className='title' style={{marginTop:'0px', marginBottom:'10px'}}>
          Algebra Formulas
        </h1>
        <FormulasTOC data={algebraFormulasList} />
        <br />
      </main>
    </>
  )
}