// import probabilityFormulaList from '@/app/api/db/formulas/probability/probabilityFormulasList'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'

// export default function ProbabilityFormulasPage() {
//   return (
//     <>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//       side='right'
//       topOffset='55px' 
//       sidebarWidth='45px'
//       panelWidth='200px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Probability Formulas</h1>
//     <FormulasTOC data={probabilityFormulaList}/>
//     {/* <div style={{transform:'scale(0.95)'}}>
//     <FormulaAccordionWrapper data={probabilityFormulaList} groupByField={['category']}/>
//     </div> */}
//     <br/>
//     {/* <ScrollUpButton/> */}
//     </>
//   )
// }




import probabilityFormulaList from '@/app/api/db/formulas/probability/probabilityFormulasList'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'

export async function getStaticProps() {

  const keyWords = [
    'probability formulas',
    'probability laws',
    'probability axioms',
    'conditional probability formulas',
    'bayes theorem formula',
    'expected value formulas',
    'variance covariance formulas',
    'discrete distributions formulas',
    'continuous distributions formulas',
    'binomial poisson normal formulas',
    'cdf pdf pmf formulas',
    'moment generating function',
    'law of total probability',
    'probability formulas reference'
  ]

  const faqQuestions = {
    obj1: {
      question: "What does this probability formulas reference cover?",
      answer: "This reference collects 108 formulas organized into 30 categories spanning the full first-course syllabus: Kolmogorov axioms and their consequences, set-operation rules, conditional probability and Bayes' theorem, random variables with PMF, PDF, and CDF, expectation and variance, covariance and correlation, conditional expectation, moments, indicator variables, transformations, moment generating functions, and the standard discrete and continuous distributions."
    },
    obj2: {
      question: "What are the three Kolmogorov axioms of probability?",
      answer: "Non-negativity states that every event has a probability at least zero. Normalization states that the entire sample space has probability one. Countable additivity states that probabilities of pairwise disjoint events add. All other rules - the complement rule, addition rule, monotonicity, and probability bounds - follow as consequences of these three."
    },
    obj3: {
      question: "How is Bayes' theorem stated?",
      answer: "The probability of A given B equals the probability of B given A times the probability of A, divided by the probability of B. The denominator is often expanded using the law of total probability, summing P(B given A_i) times P(A_i) over a partition of the sample space."
    },
    obj4: {
      question: "What is the relationship between PDF, PMF, and CDF?",
      answer: "The CDF F(x) is defined for any random variable as the probability that X is at most x. For a discrete variable, F(x) is the sum of PMF values up to x. For a continuous variable, F(x) is the integral of the PDF from minus infinity to x, and the PDF is the derivative of the CDF where it exists."
    },
    obj5: {
      question: "Which standard distributions are covered in this reference?",
      answer: "Discrete distributions include Bernoulli, binomial, geometric, negative binomial, hypergeometric, Poisson, and discrete uniform. Continuous distributions include continuous uniform, exponential, and normal. For each distribution the reference gives the PMF or PDF, the mean, the variance, and selected additional properties such as the memoryless property of the exponential and geometric, or the closure of normals and Poissons under independent sums."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Probability Formulas Reference",
      "description": "Reference of 108 probability formulas across 30 categories: axioms, conditional probability, expectation, variance, distributions, moment generating functions.",
      "url": "https://www.learnmathclass.com/probability/formulas",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College",
      "educationalUse": "Reference",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Probability Theory"
      },
      "teaches": [
        "Kolmogorov axioms and the basic rules of probability",
        "Conditional probability, the chain rule, and Bayes' theorem",
        "PMF, PDF, and CDF for discrete and continuous random variables",
        "Expectation, variance, covariance, and correlation",
        "Standard discrete distributions including Bernoulli, binomial, geometric, hypergeometric, and Poisson",
        "Standard continuous distributions including uniform, exponential, and normal"
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
          "name": "Probability",
          "item": "https://www.learnmathclass.com/probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Probability Formulas Reference",
          "item": "https://www.learnmathclass.com/probability/formulas"
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
      probabilityFormulaList,
      faqQuestions,
      schemas,
      seoData: {
        title: "Probability Formulas: Complete Reference | Learn Math Class",
        description: "Reference of 108 probability formulas across 30 categories: axioms, conditional probability, expectation, variance, distributions, moment generating functions.",
        hubDescription: `This reference collects 108 probability formulas organized into 30 categories - the standard toolkit for a first course in probability and a working reference for stochastic modeling.

Foundations: [Probability Axioms](!/probability/formulas#category_probability_axioms), [Basic Properties](!/probability/formulas#category_basic_properties), [Union & Inclusion-Exclusion](!/probability/formulas#category_union_&_inclusion-exclusion), and [Classical Probability](!/probability/formulas#category_classical_probability) cover the Kolmogorov axioms and their immediate consequences. [Conditional Probability](!/probability/formulas#category_conditional_probability), [Independence](!/probability/formulas#category_independence), and [Total Probability & Bayes](!/probability/formulas#category_total_probability_&_bayes) handle conditioning, the chain rule, and Bayesian inversion.

Random variables: [Probability Mass Function](!/probability/formulas#category_probability_mass_function), [Probability Density Function](!/probability/formulas#category_probability_density_function), [Cumulative Distribution Function](!/probability/formulas#category_cumulative_distribution_function), [CDF Connections](!/probability/formulas#category_cdf_connections), and [Computing Probabilities](!/probability/formulas#category_computing_probabilities) define and connect the three core distribution functions. [Indicator Random Variables](!/probability/formulas#category_indicator_random_variables) provide the bridge between events and numerical computations.

Measures: [Expected Value](!/probability/formulas#category_expected_value), [Variance & Standard Deviation](!/probability/formulas#category_variance_&_standard_deviation), [Covariance & Correlation](!/probability/formulas#category_covariance_&_correlation), [Conditional Expectation & Variance](!/probability/formulas#category_conditional_expectation_&_variance), and [Moments](!/probability/formulas#category_moments) cover linearity, the law of iterated expectation, the law of total variance, and higher-order summary measures.

Discrete distributions: [Bernoulli](!/probability/formulas#category_bernoulli), [Binomial](!/probability/formulas#category_binomial), [Geometric](!/probability/formulas#category_geometric), [Negative Binomial](!/probability/formulas#category_negative_binomial), [Hypergeometric](!/probability/formulas#category_hypergeometric), [Poisson](!/probability/formulas#category_poisson), and [Discrete Uniform](!/probability/formulas#category_discrete_uniform).

Continuous distributions and transformations: [Continuous Uniform](!/probability/formulas#category_continuous_uniform), [Exponential](!/probability/formulas#category_exponential), [Normal](!/probability/formulas#category_normal), [Transformations](!/probability/formulas#category_transformations), and [Moment Generating Function](!/probability/formulas#category_moment_generating_function).

Each entry shows the formula in LaTeX, an explanation of what it captures, and where applicable a derivation, conditions for validity, common variants, and links to related formulas and definitions.`,
        keywords: keyWords.join(", "),
        url: "/probability/formulas",
        name: "Probability Formulas Reference"
      }
    }
  }
}

export default function ProbabilityFormulasPage({ probabilityFormulaList, faqQuestions, schemas, seoData }) {

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
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        topOffset='55px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <h1 className='title' style={{ marginTop: '0px', marginBottom: '10px' }}>Probability Formulas</h1>
      <FormulasTOC data={probabilityFormulaList} />
      {/* <div style={{transform:'scale(0.95)'}}>
      <FormulaAccordionWrapper data={probabilityFormulaList} groupByField={['category']}/>
      </div> */}
      <br />
      {/* <ScrollUpButton/> */}
    </>
  )
}