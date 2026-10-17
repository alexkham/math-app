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
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ConditionalProbabilityTable from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'


/* calculators-mesh: finished 2026-10-16 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/probability/calculators/conditional-probability" in calculators-mesh-registry.json (same folder): 7 usage sections, each with a demo; 1 panel note; 10 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
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
      content: `The calculator provides four preset scenarios demonstrating common conditional probability applications. **Medical Test** shows disease diagnosis with test results: $95$ of $100$ patients with the disease test positive, but so do $495$ of the $9{,}900$ without it. **Email Spam** relates the word "ASAP" to spam among $1{,}000$ emails. **Weather Prediction** relates cloudy mornings to rain over $365$ days, and **Marketing Response** relates ad clicks to purchases among $10{,}000$ visitors. Click any scenario button to instantly load its frequency data, condition names, and outcome labels; the active button is highlighted, and a note at the bottom of the right-hand panel interprets the scenario.

The **Custom** button keeps the numbers on screen but drops the preset's interpretation note, so you can enter your own frequencies and labels without a note that no longer fits. After loading a preset, you can still modify individual cell values to explore variations. Preset scenarios serve as starting points for understanding how conditional probabilities work in real contexts.

For the Medical Test preset the calculation boxes read $95.0\\%$, $5.0\\%$, $16.1\\%$ and $83.9\\%$; for Email Spam they read $83.3\\%$, $21.3\\%$, $20.0\\%$ and $80.0\\%$, and for Weather Prediction $80.0\\%$, $37.2\\%$, $60.0\\%$ and $40.0\\%$. What the boxes compute is explained in [What is Conditional Probability?](!#what-is-conditional-probability).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding the Frequency Table`,
      content: `The frequency table displays a 2×2 contingency table showing counts for all four possible outcome combinations. Rows represent whether the condition occurred (Disease/No Disease, Red Card/Black Card, etc.). Columns represent whether the outcome occurred (Test+/Test-, Heart/Other, etc.).

Each cell contains an editable input field showing the frequency count for that combination. Below each count, a small probability displays the joint probability: the cell count divided by grand total. The **highlighted intersection cell** (top-left) represents both events occurring together—the numerator for most conditional probability calculations.

Row totals appear in the rightmost column, showing total occurrences for each condition. Column totals appear in the bottom row, showing total occurrences for each outcome. The bottom-right cell shows the grand total—the sum of all four cells and the denominator for unconditional probabilities.

A cell takes a non-negative whole number; a cleared cell counts as $0$ and every total and percentage updates as you type. For the Medical Test preset the grand total is $10{,}000$, the row totals $100$ and $9{,}900$, the column totals $590$ and $9{,}410$, and the top-left joint probability $0.0095$; typing $50$ into the top-left cell changes the row total to $55$, the grand total to $9{,}955$ and the joint probability to $0.0050$. The layout of such a table is explained in [Understanding Contingency Tables](!#understanding-contingency-tables).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading Conditional Probability Tables`,
      content: `The second table converts frequency counts to conditional probabilities normalized by row. Each row sums to 100%, showing the distribution of outcomes given a specific condition. For medical tests, the top row shows P(Test+|Disease) and P(Test-|Disease)—the test's performance when disease is present.

The percentages answer "Given this row's condition, what's the probability of each outcome?" The formula appears below each percentage, like "P(Test+|Disease)" to clarify what's being calculated. This table demonstrates how conditioning restricts attention to a subset of cases.

Compare across rows to see how outcome probabilities change with different conditions. If P(Outcome|Condition) differs substantially from P(Outcome|No Condition), the condition and outcome are dependent. If probabilities stay similar, the events are approximately independent.

For the Medical Test preset the rows read $95.0\\%$ and $5.0\\%$, then $5.0\\%$ and $95.0\\%$; for Marketing Response they read $24.0\\%$ and $76.0\\%$, then $0.8\\%$ and $99.2\\%$; for Weather Prediction $80.0\\%$ and $20.0\\%$, then $37.2\\%$ and $62.8\\%$. Why each row sums to one is explained in [What is Conditional Probability?](!#what-is-conditional-probability).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Customizing Labels and Values`,
      content: `The label inputs above the tables let you customize condition and outcome names. Change "Disease" to "Diabetes" or "Test+" to "Positive Result" to match your specific scenario. Labels update throughout all tables and calculation boxes instantly.

Click any cell in the frequency table to edit its value. Enter non-negative integers representing counts from your data. As you type, all dependent calculations update automatically: row and column totals, joint probabilities, conditional probabilities, and the calculation boxes below.

Use the Custom scenario when your data doesn't match presets. Enter your four cell frequencies, name your condition and outcome, and the calculator computes all relevant probabilities. This flexibility supports analysis of any 2×2 categorical data: survey responses, experimental results, observational studies, or theoretical problems.

Typing "Diabetes" as the condition name and "Positive" as the outcome name relabels every header, formula and calculation box at once; typing $190$ into the top-left cell of the Medical Test preset then gives $P(\\text{Positive} \\mid \\text{Diabetes}) = 190 / 195 = 97.4\\%$ and $P(\\text{Diabetes} \\mid \\text{Positive}) = 190 / 685 = 27.7\\%$. How the four cells define the table is explained in [Understanding Contingency Tables](!#understanding-contingency-tables).`,
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

**P(No Condition|Outcome)** completes the set, showing how often the outcome occurs without the condition. These four probabilities provide comprehensive insight into the relationship between condition and outcome.

Each box shows the fraction it divides, so the numbers can be checked against the tables: for Email Spam, $50 / 60 = 83.3\\%$, $200 / 940 = 21.3\\%$, $50 / 250 = 20.0\\%$ and $200 / 250 = 80.0\\%$; for Medical Test, $95 / 100$, $495 / 9{,}900$, $95 / 590$ and $495 / 590$. Lowering the false positives of the Medical Test preset from $495$ to $5$ raises $P(\\text{Disease} \\mid \\text{Test+})$ to $95 / 100 = 95.0\\%$: a rare false positive makes a positive result convincing. The definition behind every box is in [What is Conditional Probability?](!#what-is-conditional-probability).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Using Row vs Column Conditions`,
      content: `Conditional probability direction matters critically. P(B|A) asks "Given A occurred, what's the probability of B?" while P(A|B) asks "Given B occurred, what's the probability of A?" These probabilities are generally different and answer different questions.

**Row conditioning** uses row totals as denominators. Look at the condition row, divide the intersection by the row total. The conditional probability table computes this automatically for each row. Row percentages sum to 100% across each row.

**Column conditioning** uses column totals as denominators. Look at the outcome column, divide the intersection by the column total. The calculation boxes show examples: P(Condition|Outcome) uses column totals. Column percentages would sum to 100% down each column.

Understanding which direction to condition is essential. Medical diagnosis requires P(Disease|Test+), not P(Test+|Disease). The former uses column totals, the latter uses row totals. The calculator provides both to clarify the distinction.

In the Weather Prediction preset, row conditioning gives $P(\\text{Rain} \\mid \\text{Cloudy}) = 120 / 150 = 80.0\\%$ while column conditioning gives $P(\\text{Cloudy} \\mid \\text{Rain}) = 120 / 200 = 60.0\\%$; in Marketing Response, $P(\\text{Purchase} \\mid \\text{Clicked}) = 24.0\\%$ against $P(\\text{Clicked} \\mid \\text{Purchase}) = 60.0\\%$; in Medical Test, $95.0\\%$ against $16.1\\%$. The two directions are defined in [What is Conditional Probability?](!#what-is-conditional-probability), and reversing them is the subject of [Bayes' theorem](!/probability/bayes-theorem#formula).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is Conditional Probability?`,
      content: `Conditional probability measures the likelihood of an event given that another event has occurred. Notation P(B|A) reads "probability of B given A" and equals the fraction of A-outcomes where B also occurs. Mathematically: $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$.

The denominator restricts attention to the subset where A occurred. The numerator counts how often B occurs within that subset. This ratio ranges from 0 (B never occurs with A) to 1 (B always occurs with A). Values between indicate partial dependence.

Conditioning updates probabilities based on partial information. Without conditioning, P(B) uses the entire sample space. With conditioning on A, P(B|A) uses only the portion where A occurred. If A provides information about B, these probabilities differ. If A tells nothing about B (independence), they're equal.

For comprehensive theory on conditional probability including derivations, properties, and applications, see [conditional probability theory](!/probability/conditional-probability#conditioning).

The formula is derived in [The formula](!/probability/conditional-probability#formula) and pictured in [Visualising conditioning](!/probability/conditional-probability#visual); worked cases are in [Examples](!/probability/conditional-probability#examples), and the case where conditioning changes nothing is [Independence](!/probability/independence#definition).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Understanding Contingency Tables`,
      content: `A contingency table cross-tabulates frequencies for two categorical variables, organizing data into rows and columns. Each cell shows how many observations satisfy both the row category and column category. Row and column totals (marginals) show unconditional frequencies for each category.

2×2 tables handle binary variables: Yes/No, Success/Failure, Present/Absent. Larger tables accommodate more categories, but the principle remains: cross-classify observations and count cell frequencies. Joint probabilities come from dividing each cell by the grand total.

Contingency tables reveal relationships between variables. If variables are independent, knowing one provides no information about the other—cell frequencies match what you'd expect from marginal totals alone. Dependence appears as departures from expected frequencies, indicating the variables relate.

The table structure makes conditional probability calculations transparent. Row percentages show outcome distributions given each condition. Column percentages show condition distributions given each outcome. This visual organization clarifies the conditioning subset and normalization.

Tables of this kind are introduced in [Joint probability tables](!/probability/joint-probability#tables); the totals are the [marginal probabilities](!/probability/joint-probability#marginal), and the step from a cell to a conditional probability is in [From joint to conditional](!/probability/joint-probability#conditional).`,
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

**Two-Way Table Analysis Tool** - Perform comprehensive statistical analysis on contingency tables including chi-square tests.

The two results these tools build on are taught in [Bayes' theorem](!/probability/bayes-theorem#formula) and the [law of total probability](!/probability/total-probability#law).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `The Understanding the Results Panel`,
      content: `The box on the right of the tables, **Understanding the Results**, has two parts. The upper part is fixed: a key insight on what conditioning means, and four reading rules, one for $P(\\text{Outcome} \\mid \\text{Condition})$ (divide the intersection by its row total), one for $P(\\text{Condition} \\mid \\text{Outcome})$ (divide it by its column total), one for the intersection cell and one for the marginal totals. It ends with a link to the section of this page that explains conditional probability.

The lower part is a note on the active preset, headed with its name, for example "Medical Test Interpretation", which puts the numbers of the boxes into words: a positive test raises the chance of the disease only to $16.1\\%$ because the disease is rare. The note changes when you click another preset and disappears when you click **Custom** or edit the numbers of a preset after choosing Custom; the reading rules stay. Read the note together with the calculation boxes: it names the probabilities the boxes compute. The definition it relies on is in [What is Conditional Probability?](!#what-is-conditional-probability).`,
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

  const detailInstructions = [
    `Click a preset button, **Medical Test**, **Email Spam**, **Weather Prediction** or **Marketing Response**, to load its four counts and labels; **Custom** keeps the numbers and drops the preset's note. [Learn more about the presets](!#selecting-preset-scenarios)`,
    `Type your own names in **Condition Name** and **Outcome Name**; every header, formula and box relabels at once. [Learn more about the labels](!#customizing-labels-and-values)`,
    `Edit the four counts in the **Frequency Table**; the totals, the joint probabilities under the counts and every percentage update as you type. [Learn more about the frequency table](!#understanding-the-frequency-table)`,
    `Read the second table, **Conditional Probabilities Given** the condition: each row is one condition and sums to 100%. [Learn more about the conditional table](!#reading-conditional-probability-tables)`,
    `Read the four **Conditional Probability Calculations** boxes: the formula, the fraction and the percentage for both directions of conditioning. [Learn more about the calculation boxes](!#interpreting-calculation-boxes)`,
    `Compare a row-conditioned box with its column-conditioned partner to see that P(B|A) and P(A|B) differ. [Learn more about row and column conditioning](!#using-row-vs-column-conditions)`,
    `Read the panel on the right: the reading rules, then the note that interprets the active preset. [Learn more about the panel](!#the-understanding-the-results-panel)`,
  ];
  const cpExplanations = {
    main: {
      title: 'Understanding the Results',
      content: `**Key Insight:** Conditional probability focuses on a subset of the data. When we calculate P(B|A), we only look at the rows/columns where A occurred.

How to read contingency tables for conditional probability: **P(Outcome | Condition)** Look at the condition row, divide the intersection by the row total. **P(Condition | Outcome)** Look at the outcome column, divide the intersection by the column total. **The intersection cell** represents both events happening together. **Marginal totals** show the unconditional probabilities. [Learn more about conditional probability](!#what-is-conditional-probability)`,
    },
  };
  const demos = {
    'selecting-preset-scenarios': {
      title: 'Two presets, then Custom',
      scale: 0.4,
      minHeight: 481,
      script: [
        { say: 'CLICK Email Spam\nP(ASAP | Spam) = 50 / 60 = 83.3%, P(Spam | ASAP) = 50 / 250 = 20.0%.', at: 'tr' },
        { click: { button: 'Email Spam', exact: true } },
        { wait: 2800 },
        { say: 'CLICK Weather Prediction\nP(Rain | Cloudy) = 80.0%, P(Rain | No Cloudy) = 37.2%.', at: 'tr' },
        { click: { button: 'Weather Prediction', exact: true } },
        { wait: 2800 },
        { say: 'CLICK Custom\nThe numbers stay; the interpretation note under the panel is gone.', at: 'tr' },
        { click: { button: 'Custom', exact: true } },
        { wait: 2600 },
      ],
    },
    'understanding-the-frequency-table': {
      title: 'Editing the top-left count of the Medical Test preset',
      scale: 0.4,
      minHeight: 481,
      script: [
        { say: 'TYPE 50 in the top-left cell\nRow total 55, grand total 9,955, joint probability 0.0050.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '50' },
        { wait: 2800 },
        { say: 'TYPE 0 in the top-left cell\nNo patient with the disease tests positive: the row total is 5.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0' },
        { wait: 2800 },
        { say: 'TYPE 95 again\nBack to the preset: row total 100, grand total 10,000, joint 0.0095.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '95' },
        { wait: 2600 },
      ],
    },
    'reading-conditional-probability-tables': {
      title: 'Row percentages of three presets',
      scale: 0.4,
      minHeight: 481,
      script: [
        { say: 'CLICK Marketing Response\nRows: 24.0% and 76.0%, then 0.8% and 99.2%; each row sums to 100%.', at: 'tr' },
        { click: { button: 'Marketing Response', exact: true } },
        { wait: 2800 },
        { say: 'CLICK Weather Prediction\nRows: 80.0% and 20.0%, then 37.2% and 62.8%.', at: 'tr' },
        { click: { button: 'Weather Prediction', exact: true } },
        { wait: 2800 },
        { say: 'CLICK Medical Test\nRows: 95.0% and 5.0%, then 5.0% and 95.0%.', at: 'tr' },
        { click: { button: 'Medical Test', exact: true } },
        { wait: 2600 },
      ],
    },
    'customizing-labels-and-values': {
      title: 'New labels, then a new count',
      scale: 0.4,
      minHeight: 481,
      script: [
        { say: 'TYPE Diabetes as Condition Name\nEvery header and formula now says Diabetes.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: 'Diabetes' },
        { wait: 2600 },
        { say: 'TYPE Positive as Outcome Name\nThe boxes read P(Positive | Diabetes) and so on.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: 'Positive' },
        { wait: 2600 },
        { say: 'TYPE 190 in the top-left cell\nP(Positive | Diabetes) = 190 / 195 = 97.4%, P(Diabetes | Positive) = 190 / 685 = 27.7%.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '190' },
        { wait: 3000 },
      ],
    },
    'interpreting-calculation-boxes': {
      title: 'The four boxes for two presets, then fewer false positives',
      scale: 0.4,
      minHeight: 481,
      script: [
        { say: 'CLICK Email Spam\nBoxes: 50 / 60 = 83.3%, 200 / 940 = 21.3%, 50 / 250 = 20.0%, 200 / 250 = 80.0%.', at: 'tr' },
        { click: { button: 'Email Spam', exact: true } },
        { wait: 3000 },
        { say: 'CLICK Medical Test\nBoxes: 95 / 100 = 95.0%, 495 / 9900 = 5.0%, 95 / 590 = 16.1%, 495 / 590 = 83.9%.', at: 'tr' },
        { click: { button: 'Medical Test', exact: true } },
        { wait: 3000 },
        { say: 'TYPE 5 in the No Disease, Test+ cell\nP(Disease | Test+) = 95 / 100 = 95.0%: rare false positives make the test convincing.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 2 }, value: '5' },
        { wait: 3000 },
      ],
    },
    'using-row-vs-column-conditions': {
      title: 'Row against column conditioning in three presets',
      scale: 0.4,
      minHeight: 481,
      script: [
        { say: 'CLICK Weather Prediction\nRow: P(Rain | Cloudy) = 120 / 150 = 80.0%. Column: P(Cloudy | Rain) = 120 / 200 = 60.0%.', at: 'tr' },
        { click: { button: 'Weather Prediction', exact: true } },
        { wait: 3000 },
        { say: 'CLICK Marketing Response\nP(Purchase | Clicked) = 24.0% against P(Clicked | Purchase) = 60.0%.', at: 'tr' },
        { click: { button: 'Marketing Response', exact: true } },
        { wait: 3000 },
        { say: 'CLICK Medical Test\nP(Test+ | Disease) = 95.0% against P(Disease | Test+) = 16.1%.', at: 'tr' },
        { click: { button: 'Medical Test', exact: true } },
        { wait: 2800 },
      ],
    },
    'the-understanding-the-results-panel': {
      title: 'The panel note for a preset, for Custom, and back',
      scale: 0.4,
      minHeight: 481,
      script: [
        { say: 'CLICK Email Spam\nThe note at the bottom of the panel now interprets the spam scenario.', at: 'tr' },
        { click: { button: 'Email Spam', exact: true } },
        { wait: 2800 },
        { say: 'CLICK Custom\nThe note disappears; the reading rules above it stay.', at: 'tr' },
        { click: { button: 'Custom', exact: true } },
        { wait: 2600 },
        { say: 'CLICK Medical Test\nThe medical note is back: a positive result means a 16.1% chance of the disease.', at: 'tr' },
        { click: { button: 'Medical Test', exact: true } },
        { wait: 2800 },
      ],
    },
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      detailInstructions,
      cpExplanations,
      demos,
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

export default function ConditionalProbabilityCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas, detailInstructions = [], cpExplanations = null, demos = {}}) {

  const demoPlayer = (slug) => (
    <ToolDemoPlayer
      key={`demo-${slug}`}
      script={demos[slug].script}
      title={demos[slug].title}
      label={`Demo: ${demos[slug].title}`}
      scale={demos[slug].scale || 0.4}
      minHeight={demos[slug].minHeight || undefined}
      renderText={processContent}
    >
      <ConditionalProbabilityTable explanations={cpExplanations || undefined} />
    </ToolDemoPlayer>
  )
  const genericSections = [
    { id: 'selecting-preset-scenarios', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('selecting-preset-scenarios'), sectionsContent.obj1.content] },
    { id: 'understanding-the-frequency-table', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('understanding-the-frequency-table'), sectionsContent.obj2.content] },
    { id: 'reading-conditional-probability-tables', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('reading-conditional-probability-tables'), sectionsContent.obj3.content] },
    { id: 'customizing-labels-and-values', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('customizing-labels-and-values'), sectionsContent.obj4.content] },
    { id: 'interpreting-calculation-boxes', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [demoPlayer('interpreting-calculation-boxes'), sectionsContent.obj5.content] },
    { id: 'using-row-vs-column-conditions', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [demoPlayer('using-row-vs-column-conditions'), sectionsContent.obj6.content] },
    { id: 'the-understanding-the-results-panel', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [demoPlayer('the-understanding-the-results-panel'), sectionsContent.obj10.content] },
    { id: 'what-is-conditional-probability', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [sectionsContent.obj7.content] },
    { id: 'understanding-contingency-tables', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
    { id: 'related-probability-tools-and-calculators', title: sectionsContent.obj9.title, link: sectionsContent.obj9.link, content: [sectionsContent.obj9.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Conditional Probability Calculator</h1>
      <div style={{marginBottom:'20px'}}>
        <ExplanationDetails instructions={detailInstructions} title='How to use Conditional Probability Calculator' />
      </div>
      <div style={{transform:'scale(0.85)'}} className="calculator-widget">
        <ConditionalProbabilityTable explanations={cpExplanations || undefined} />
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