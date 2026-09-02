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

  // FAQ pass: no FAQ block on this page. It is a formula reference, not a
  // lesson. Two originals were meta (describing the page's own contents) and
  // the other three are owned by dedicated pages — the Kolmogorov axioms by
  // /probability/axioms, the statement of Bayes' theorem by
  // /probability/bayes-theorem, and the PMF/PDF/CDF relationship by
  // /probability/cdf. Nothing survived triage, so faqQuestions and the dead
  // FAQPage schema were both removed.

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
    }
  }

  return {
    props: {
      probabilityFormulaList,
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

export default function ProbabilityFormulasPage({ probabilityFormulaList, schemas, seoData }) {

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