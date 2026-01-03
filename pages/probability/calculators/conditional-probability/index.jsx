// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import ConditionalProbabilityTable from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css'

// export default function ConditionalProbabilityCalculatorPage() {

//   const keyWords=['joint probability table','joint probability distribution table','contigency table',
//     'probability'
//   ]
//   return (
//     <>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//      <OperaSidebar
//            side='right'
//            // topOffset='65px'
//            sidebarWidth='45px'
//            panelWidth='300px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          />
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'-30px', marginBottom:'-10px'}}>Conditional Probability Calculator</h1>
//     <div style={{transform:'scale(0.9)'}}>
//     <ConditionalProbabilityTable/>
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     {/* <ScrollUpButton/> */}
    
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import ConditionalProbabilityTable from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
    'conditional probability calculator',
    'contingency table calculator',
    'joint probability table',
    'conditional probability formula',
    'two-way table probability',
    'cross-tabulation calculator',
    'P(A|B) calculator',
    'frequency table probability',
    'conditional probability solver',
    'marginal probability calculator',
    'probability given condition',
    'joint distribution table',
    'conditional probability examples',
    'contingency table analysis',
    'two-way frequency table'
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting Preset Scenarios`,
      content: `The calculator provides six preset scenarios demonstrating common conditional probability applications. **Medical Test** shows disease diagnosis with test results, using realistic sensitivity and specificity values. **Playing Cards** demonstrates card draw probabilities with suit and rank conditions. **Weather Forecast** models prediction accuracy with actual weather outcomes.

**Quality Control** represents manufacturing defect rates across production lines. **Survey Data** shows demographic conditional probabilities from hypothetical survey responses. Click any scenario button to instantly load its frequency data, condition names, and outcome labels.

The **Custom** button clears all preset data, allowing you to enter your own frequencies and labels. After loading a preset, you can still modify individual cell values to explore variations. Preset scenarios serve as starting points for understanding how conditional probabilities work in real contexts.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding the Frequency Table`,
      content: `The frequency table displays a 2×2 contingency table showing counts for all four possible outcome combinations. Rows represent whether the condition occurred (Disease/No Disease, Red Card/Black Card, etc.). Columns represent whether the outcome occurred (Test+/Test-, Heart/Other, etc.).

Each cell contains an editable input field showing the frequency count for that combination. Below each count, a small probability displays the joint probability: the cell count divided by grand total. The **highlighted intersection cell** (top-left) represents both events occurring together—the numerator for most conditional probability calculations.

Row totals appear in the rightmost column, showing total occurrences for each condition. Column totals appear in the bottom row, showing total occurrences for each outcome. The bottom-right cell shows the grand total—the sum of all four cells and the denominator for unconditional probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading Conditional Probability Tables`,
      content: `The second table converts frequency counts to conditional probabilities normalized by row. Each row sums to 100%, showing the distribution of outcomes given a specific condition. For medical tests, the top row shows P(Test+|Disease) and P(Test-|Disease)—the test's performance when disease is present.

The percentages answer "Given this row's condition, what's the probability of each outcome?" The formula appears below each percentage, like "P(Test+|Disease)" to clarify what's being calculated. This table demonstrates how conditioning restricts attention to a subset of cases.

Compare across rows to see how outcome probabilities change with different conditions. If P(Outcome|Condition) differs substantially from P(Outcome|No Condition), the condition and outcome are dependent. If probabilities stay similar, the events are approximately independent.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Customizing Labels and Values`,
      content: `The label inputs above the tables let you customize condition and outcome names. Change "Disease" to "Diabetes" or "Test+" to "Positive Result" to match your specific scenario. Labels update throughout all tables and calculation boxes instantly.

Click any cell in the frequency table to edit its value. Enter non-negative integers representing counts from your data. As you type, all dependent calculations update automatically: row and column totals, joint probabilities, conditional probabilities, and the calculation boxes below.

Use the Custom scenario when your data doesn't match presets. Enter your four cell frequencies, name your condition and outcome, and the calculator computes all relevant probabilities. This flexibility supports analysis of any 2×2 categorical data: survey responses, experimental results, observational studies, or theoretical problems.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Interpreting Calculation Boxes`,
      content: `Four calculation boxes below the tables show the most common conditional probabilities with full formulas. Each box displays the conditional probability notation, the arithmetic (numerator/denominator), and the final percentage.

**P(Outcome|Condition)** divides the intersection cell (both events true) by the condition row total. This answers "Given the condition, what's the outcome probability?" For medical tests, this is sensitivity: P(Test+|Disease).

**P(Outcome|No Condition)** divides the opposite intersection by the no-condition row total. For medical tests, this is the false positive rate: P(Test+|No Disease).

**P(Condition|Outcome)** divides the intersection by the outcome column total. This reverses the conditioning direction. For medical tests, this is positive predictive value: P(Disease|Test+)—the crucial probability for interpreting positive results.

**P(No Condition|Outcome)** completes the set, showing how often the outcome occurs without the condition. These four probabilities provide comprehensive insight into the relationship between condition and outcome.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Using Row vs Column Conditions`,
      content: `Conditional probability direction matters critically. P(B|A) asks "Given A occurred, what's the probability of B?" while P(A|B) asks "Given B occurred, what's the probability of A?" These probabilities are generally different and answer different questions.

**Row conditioning** uses row totals as denominators. Look at the condition row, divide the intersection by the row total. The conditional probability table computes this automatically for each row. Row percentages sum to 100% across each row.

**Column conditioning** uses column totals as denominators. Look at the outcome column, divide the intersection by the column total. The calculation boxes show examples: P(Condition|Outcome) uses column totals. Column percentages would sum to 100% down each column.

Understanding which direction to condition is essential. Medical diagnosis requires P(Disease|Test+), not P(Test+|Disease). The former uses column totals, the latter uses row totals. The calculator provides both to clarify the distinction.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is Conditional Probability?`,
      content: `Conditional probability measures the likelihood of an event given that another event has occurred. Notation P(B|A) reads "probability of B given A" and equals the fraction of A-outcomes where B also occurs. Mathematically: $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$.

The denominator restricts attention to the subset where A occurred. The numerator counts how often B occurs within that subset. This ratio ranges from 0 (B never occurs with A) to 1 (B always occurs with A). Values between indicate partial dependence.

Conditioning updates probabilities based on partial information. Without conditioning, P(B) uses the entire sample space. With conditioning on A, P(B|A) uses only the portion where A occurred. If A provides information about B, these probabilities differ. If A tells nothing about B (independence), they're equal.

For comprehensive theory on conditional probability including derivations, properties, and applications, see **conditional probability theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Understanding Contingency Tables`,
      content: `A contingency table cross-tabulates frequencies for two categorical variables, organizing data into rows and columns. Each cell shows how many observations satisfy both the row category and column category. Row and column totals (marginals) show unconditional frequencies for each category.

2×2 tables handle binary variables: Yes/No, Success/Failure, Present/Absent. Larger tables accommodate more categories, but the principle remains: cross-classify observations and count cell frequencies. Joint probabilities come from dividing each cell by the grand total.

Contingency tables reveal relationships between variables. If variables are independent, knowing one provides no information about the other—cell frequencies match what you'd expect from marginal totals alone. Dependence appears as departures from expected frequencies, indicating the variables relate.

The table structure makes conditional probability calculations transparent. Row percentages show outcome distributions given each condition. Column percentages show condition distributions given each outcome. This visual organization clarifies the conditioning subset and normalization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Related Probability Tools and Calculators`,
      content: `**Bayes' Theorem Calculator** - Calculate posterior probabilities by reversing conditional probabilities, essential for medical diagnosis and hypothesis updating.

**Joint Probability Calculator** - Compute probabilities for intersections and unions of multiple events with Venn diagrams.

**Independence Test Calculator** - Determine whether two events are independent using chi-square tests on contingency tables.

**Probability Tree Diagram Generator** - Visualize conditional probabilities through branching tree structures for sequential events.

**Law of Total Probability Calculator** - Calculate marginal probabilities by partitioning across conditional probabilities.

**Sensitivity and Specificity Calculator** - Analyze medical test performance metrics including positive and negative predictive values.

**Conditional Probability Visualizer** - Interactive Venn diagrams showing conditional probability as restricted sample space.

**Two-Way Table Analysis Tool** - Perform comprehensive statistical analysis on contingency tables including chi-square tests.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is conditional probability and how do you calculate it?",
      answer: "Conditional probability P(B|A) is the probability of event B given that event A has occurred. Calculate it by dividing the joint probability P(A∩B) by the probability of the condition P(A): P(B|A) = P(A∩B) / P(A). In contingency tables, divide the intersection cell by the row or column total for the given condition. For example, P(Test+|Disease) divides the count where both disease and positive test occur by the total with disease."
    },
    obj2: {
      question: "How do you read a contingency table for conditional probability?",
      answer: "To find P(B|A) from a contingency table: (1) Locate the row or column representing condition A, (2) Find the cell where both A and B occur (the intersection), (3) Divide the intersection count by the total for condition A. Row conditioning uses row totals as denominators; column conditioning uses column totals. The resulting fraction is P(B|A)."
    },
    obj3: {
      question: "What is the difference between P(A|B) and P(B|A)?",
      answer: "P(A|B) and P(B|A) condition in opposite directions and are generally different values. P(A|B) asks 'Given B occurred, what's the probability of A?' while P(B|A) asks 'Given A occurred, what's the probability of B?' In medical testing, P(Disease|Test+) differs from P(Test+|Disease)—the former is positive predictive value, the latter is sensitivity. Bayes' Theorem relates these reversed conditionals."
    },
    obj4: {
      question: "What are marginal totals in a contingency table?",
      answer: "Marginal totals are the row and column sums appearing at the edges (margins) of a contingency table. Row totals show total occurrences for each row category, regardless of column. Column totals show total occurrences for each column category, regardless of row. These marginals represent unconditional frequencies and serve as denominators when calculating conditional probabilities from the table."
    },
    obj5: {
      question: "How do you interpret conditional probabilities from the calculator?",
      answer: "The calculator shows four key conditional probabilities: P(Outcome|Condition) answers 'Given the condition, how likely is the outcome?' P(Outcome|No Condition) shows outcome probability without the condition. P(Condition|Outcome) reverses the question: 'Given the outcome, how likely was the condition?' Compare these probabilities to understand dependence—if P(B|A) differs from P(B|not A), the events are dependent."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Conditional Probability Calculator with Contingency Tables",
      "description": "Interactive conditional probability calculator using 2x2 contingency tables with preset scenarios, custom inputs, and automatic calculation of joint, marginal, and conditional probabilities.",
      "url": "https://www.learnmathclass.com/probability/calculators/conditional-probability",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive 2x2 contingency table with editable frequency cells",
        "Six preset scenarios: medical, cards, weather, quality control, survey, custom",
        "Automatic joint probability calculations for all cells",
        "Conditional probability table normalized by rows",
        "Four calculation boxes showing key conditional probabilities",
        "Custom condition and outcome label inputs",
        "Real-time updates as frequencies change",
        "Color highlighting for intersections and marginal totals",
        "Row and column totals (marginal distributions)",
        "Interpretation guide explaining how to read tables"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
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
          "name": "Calculators",
          "item": "https://www.learnmathclass.com/probability/calculators"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Conditional Probability",
          "item": "https://www.learnmathclass.com/probability/calculators/conditional-probability"
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

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Conditional Probability Calculator | Contingency Table Tool",
        description: "Calculate conditional probabilities with interactive contingency tables. Includes preset scenarios, custom inputs, and step-by-step probability calculations.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/conditional-probability",
        name: "Conditional Probability Calculator"
      },
    }
  }
}

export default function ConditionalProbabilityCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }))

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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
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

      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <h1 className='title' style={{marginTop:'-30px', marginBottom:'-50px'}}>Conditional Probability Calculator</h1>
      <div style={{transform:'scale(0.85)'}}>
        <ConditionalProbabilityTable/>
      </div>
      <br/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
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