
import Head from 'next/head'
import StatisticsCalculator from '@/app/components/calculators/statistics/StatisticsCalculator'
import '../../pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

/* calculators-mesh: finished 2026-10-13 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/calculators/statistics-calculator" in calculators-mesh-registry.json (same folder): 6 usage sections, each with a demo; 19 panel texts with anchors; 12 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export default function StatisticsCalculatorPage({ explanations, menuItems, detailInstructions, demos, sectionsContent, schemas }) {

const demoPlayer = (key) => (
  <ToolDemoPlayer
    key={`demo-${key}`}
    script={demos[key].script}
    title={demos[key].title}
    label={`Demo: ${demos[key].title}`}
    scale={0.5}
    minHeight={457}
    renderText={processContent}
  >
    <StatisticsCalculator explanations={explanations}/>
  </ToolDemoPlayer>
);

const genericSections = [
  {
    id: 'getting-started-with-the-statistics-calculator',
    title: sectionsContent.obj1.title,
    link: sectionsContent.obj1.link,
    content: [demoPlayer('getting-started-with-the-statistics-calculator'), sectionsContent.obj1.content],
  },
  {
    id: 'entering-values-by-hand',
    title: sectionsContent.obj2.title,
    link: sectionsContent.obj2.link,
    content: [demoPlayer('entering-values-by-hand'), sectionsContent.obj2.content],
  },
  {
    id: 'uploading-a-data-file',
    title: sectionsContent.obj3.title,
    link: sectionsContent.obj3.link,
    content: [demoPlayer('uploading-a-data-file'), sectionsContent.obj3.content],
  },
  {
    id: 'sample-or-population',
    title: sectionsContent.obj4.title,
    link: sectionsContent.obj4.link,
    content: [demoPlayer('sample-or-population'), sectionsContent.obj4.content],
  },
  {
    id: 'reading-the-results-table',
    title: sectionsContent.obj5.title,
    link: sectionsContent.obj5.link,
    content: [demoPlayer('reading-the-results-table'), sectionsContent.obj5.content],
  },
  {
    id: 'the-explanation-panel',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [demoPlayer('the-explanation-panel'), sectionsContent.obj6.content],
  },
  {
    id: 'what-descriptive-statistics-describe',
    title: sectionsContent.obj7.title,
    link: sectionsContent.obj7.link,
    content: [sectionsContent.obj7.content],
  },
  {
    id: 'count-sum-minimum-maximum-and-range',
    title: sectionsContent.obj8.title,
    link: sectionsContent.obj8.link,
    content: [sectionsContent.obj8.content],
  },
  {
    id: 'mean-median-and-mode',
    title: sectionsContent.obj9.title,
    link: sectionsContent.obj9.link,
    content: [sectionsContent.obj9.content],
  },
  {
    id: 'variance-and-standard-deviation',
    title: sectionsContent.obj10.title,
    link: sectionsContent.obj10.link,
    content: [sectionsContent.obj10.content],
  },
  {
    id: 'quartiles-and-the-interquartile-range',
    title: sectionsContent.obj11.title,
    link: sectionsContent.obj11.link,
    content: [sectionsContent.obj11.content],
  },
  {
    id: 'skewness-kurtosis-and-other-means',
    title: sectionsContent.obj12.title,
    link: sectionsContent.obj12.link,
    content: [sectionsContent.obj12.content],
  },
];

  return (
    <>
    <Head>
    <title>Statistics Calculator | Free Online Math Tool | Learn Math Class</title>
    <meta name="description" content="Master statistics with our free online calculator at Learn Math Class. Ideal for students and educators. Covers descriptive stats, probability, hypothesis testing, and more. Enhance your math skills today!" />
    <meta name="keywords" content="statistics calculator, math learning tool, online statistics, Learn Math Class, probability calculator, descriptive statistics, hypothesis testing, math education" />
    <meta property="og:title" content="Free Statistics Calculator | Learn Math Class" />
    <meta property="og:description" content="Boost your math skills with our comprehensive online statistics calculator. Free, easy-to-use, and perfect for students and teachers." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://learnmathclass.com/calculators/statistics-calculator" />
    <link rel="canonical" href="https://learnmathclass.com/calculators/statistics-calculator" />
    <meta property="og:site_name" content="Learn Math Class" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Statistics Calculator | Free Online Math Tool | Learn Math Class" />
    <meta name="twitter:description" content="Master statistics with our free online calculator at Learn Math Class. Ideal for students and educators. Covers descriptive stats, probability, hypothesis testing, and more. Enhance your math skills today!" />
    <meta name="robots" content="index, follow" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
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
        panelWidth='300px'

        iconColor='white'
        panelBackgroundColor='#f2f2f2'/>
      <Breadcrumb/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Statistics Calculator</h1>
      <div style={{marginBottom:'20px'}}>
        <ExplanationDetails
          instructions={detailInstructions}
          title='How to use Statistics Calculator'
        />
      </div>
     <VerticalButtonGroup
      items={menuItems}
      width="230px"
      theme='vivid'

    //   backgroundColor ='#245de1'
    //   color = 'white'
      isSticky={true}
      verticalOffset='200px'
      />
      <div style={{transform:'scale(0.85)',marginTop:'-140px'}}>
      <StatisticsCalculator explanations={explanations}/>
      </div>
      <br/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
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

export async function getStaticProps() {

    const menuItems = [
    {
      title: "Probability Calculators",
      // icon: <Home />,
      link: "/probability/calculators"
    },
    {
        title: "Continuous Distributions Calculator",
        // icon: <Home />,
        link: "/probability/calculators/continuous-distributions"
      },
       {
        title: "Discrete Distributions Calculator",
        // icon: <Home />,
        link: "/probability/calculators/discrete-distributions"
      },

  ];
  const explanations  = {
    sampleSize: "This is The number of data points in the dataset. It's often denoted as 'n' in statistical formulas. [Learn more about the count](!#count-sum-minimum-maximum-and-range)",

    sum: "The total of all values in the dataset. Formula: Σ x, where x represents each value in the dataset. [Learn more about the sum](!#count-sum-minimum-maximum-and-range)",

    mean: "The arithmetic average of all values in the dataset. It's calculated by dividing the sum of all values by the number of values. Formula: x̄ = (Σ x) / n, where x̄ is the mean, Σ x is the sum of all values, and n is the sample size. [Learn more about the mean](!#mean-median-and-mode)",

    median: "The middle value when the dataset is ordered from least to greatest. For an odd number of values, it's the middle number. For an even number, it's the average of the two middle numbers. [Learn more about the median](!#mean-median-and-mode)",

    mode: "The most frequently occurring value in the dataset. A dataset can have no mode, one mode, or multiple modes. [Learn more about the mode](!#mean-median-and-mode)",

    min: "The smallest value in the dataset. [Learn more about the minimum](!#count-sum-minimum-maximum-and-range)",

    max: "The largest value in the dataset. [Learn more about the maximum](!#count-sum-minimum-maximum-and-range)",

    range: "The difference between the largest and smallest values in the dataset. Formula: Range = Max - Min [Learn more about the range](!#count-sum-minimum-maximum-and-range)",

    variance: "A measure of variability that quantifies how far a set of numbers are spread out from their average value. Formula: s² = Σ(x - x̄)² / (n - 1) for sample variance, or σ² = Σ(x - μ)² / N for population variance, where x is each value, x̄ is the sample mean, μ is the population mean, n is the sample size, and N is the population size. [Learn more about the variance](!#variance-and-standard-deviation)",

    standardDeviation: "The square root of the variance, indicating the average distance from the mean. It's in the same units as the original data. Formula: s = √s² for sample standard deviation, or σ = √σ² for population standard deviation. [Learn more about the standard deviation](!#variance-and-standard-deviation)",

    q1: "The first quartile, or 25th percentile of the dataset. It's the median of the lower half of the dataset. [Learn more about quartiles](!#quartiles-and-the-interquartile-range)",

    q3: "The third quartile, or 75th percentile of the dataset. It's the median of the upper half of the dataset. [Learn more about quartiles](!#quartiles-and-the-interquartile-range)",

    iqr: "The interquartile range, calculated as Q3 - Q1. It represents the middle 50% of the data and is a measure of statistical dispersion. [Learn more about the interquartile range](!#quartiles-and-the-interquartile-range)",

    skewness: "A measure of the asymmetry of the probability distribution. Positive skewness indicates a longer tail on the right side, while negative skewness indicates a longer tail on the left. Formula: Skewness = [n / (n-1)(n-2)] * Σ[(x - x̄)³ / s³], where n is the sample size, x is each value, x̄ is the mean, and s is the standard deviation. [Learn more about skewness](!#skewness-kurtosis-and-other-means)",

    kurtosis: "A measure of the 'tailedness' of the probability distribution. Higher kurtosis means more of the variance is due to infrequent extreme deviations, as opposed to frequent modestly-sized deviations. Formula: Kurtosis = [n(n+1) / (n-1)(n-2)(n-3)] * [Σ(x - x̄)⁴ / s⁴] - [3(n-1)² / (n-2)(n-3)], where n is the sample size, x is each value, x̄ is the mean, and s is the standard deviation. [Learn more about kurtosis](!#skewness-kurtosis-and-other-means)",

    coefficientOfVariation: "The ratio of the standard deviation to the mean, expressed as a percentage. It shows the extent of variability in relation to the mean. Formula: CV = (s / x̄) * 100, where s is the standard deviation and x̄ is the mean. [Learn more about the coefficient of variation](!#variance-and-standard-deviation)",

    geometricMean: "The nth root of the product of n numbers. It's often used for calculating the average of percentages and is less affected by extreme values than the arithmetic mean. Formula: GM = (x₁ * x₂ * ... * xn)^(1/n), where x₁, x₂, etc. are the individual values and n is the number of values. [Learn more about the geometric mean](!#skewness-kurtosis-and-other-means)",

    harmonicMean: "The reciprocal of the arithmetic mean of the reciprocals of the given set of numbers. It's often used for calculating the average of rates. Formula: HM = n / (1/x₁ + 1/x₂ + ... + 1/xn), where x₁, x₂, etc. are the individual values and n is the number of values. [Learn more about the harmonic mean](!#skewness-kurtosis-and-other-means)",

    rootMeanSquare: "The square root of the arithmetic mean of the squares of a set of numbers. It's particularly useful when variates are positive and negative, as in sinusoidal functions. Formula: RMS = √[(x₁² + x₂² + ... + xn²) / n], where x₁, x₂, etc. are the individual values and n is the number of values. [Learn more about the root mean square](!#skewness-kurtosis-and-other-means)"
  };

  const detailInstructions = [
    `Pick how to enter data with the two tabs at the top: **Manual Input** for typing values, the file tab for a CSV or TXT file. [Learn more about the tabs](!#getting-started-with-the-statistics-calculator)`,
    `Type one number per **Value** box; click **+ Add Number** for another box and the **×** next to a box to remove it. [Learn more about entering values](!#entering-values-by-hand)`,
    `On the file tab, pick **CSV** or **TXT**, then click **Choose File** and select a file with one number per line or per comma. [Learn more about files](!#uploading-a-data-file)`,
    `Click **Calculate Statistics**. The **Results** table lists 19 statistics, from the sample size to the root mean square. [Learn more about the results](!#reading-the-results-table)`,
    `Under the button, choose **Auto**, **Always use n-1 (Sample)** or **Always use n (Population)** for the variance and standard deviation. [Learn more about sample and population](!#sample-or-population)`,
    `Click the **i** icon next to any statistic to read its explanation in the **Explanation** panel; each explanation ends with a link to the section below that explains it. [Learn more about the panel](!#the-explanation-panel)`,
    `Click **Reset** to clear the values, the results and the explanation. [Learn more about entering values](!#entering-values-by-hand)`,
  ];

  const demos = {
    'getting-started-with-the-statistics-calculator': {
      title: 'Five values, the results table, one explanation, Reset',
      script: [
        { say: 'CLICK + Add Number four times\nFive Value boxes.', at: 'tr' },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { wait: 1800 },
        { say: 'TYPE 1, 2, 2, 3 and 7', at: 'tr' },
        { set: { css: 'input[placeholder="Value"]', nth: 0 }, value: '1' },
        { set: { css: 'input[placeholder="Value"]', nth: 1 }, value: '2' },
        { set: { css: 'input[placeholder="Value"]', nth: 2 }, value: '2' },
        { set: { css: 'input[placeholder="Value"]', nth: 3 }, value: '3' },
        { set: { css: 'input[placeholder="Value"]', nth: 4 }, value: '7' },
        { wait: 2000 },
        { say: 'CLICK Calculate Statistics\nResults: 19 statistics.\nMean 3.00, median 2.00, mode 2.', at: 'tr' },
        { click: { button: 'Calculate Statistics' } },
        { wait: 2600 },
        { say: 'CLICK the i next to Mean\nThe Explanation panel describes the mean.', at: 'tr' },
        { click: { css: 'span[style*="border-radius: 50%"]', nth: 2 } },
        { wait: 2600 },
        { say: 'CLICK Reset\nValues, results and explanation cleared.', at: 'tr' },
        { click: { button: 'Reset' } },
        { wait: 2200 },
      ],
    },
    'entering-values-by-hand': {
      title: 'Add boxes, remove a box, recalculate',
      script: [
        { say: 'CLICK + Add Number twice\nThree Value boxes.', at: 'tr' },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { wait: 1600 },
        { say: 'TYPE 4, 8 and 9', at: 'tr' },
        { set: { css: 'input[placeholder="Value"]', nth: 0 }, value: '4' },
        { set: { css: 'input[placeholder="Value"]', nth: 1 }, value: '8' },
        { set: { css: 'input[placeholder="Value"]', nth: 2 }, value: '9' },
        { wait: 1800 },
        { say: 'CLICK Calculate Statistics\nSample size 3, mean 7.00, median 8.00.', at: 'tr' },
        { click: { button: 'Calculate Statistics' } },
        { wait: 2400 },
        { say: 'CLICK the × of the third box\nTwo boxes remain.', at: 'tr' },
        { click: { button: '×', exact: true, nth: 2 } },
        { wait: 1800 },
        { say: 'CLICK Calculate Statistics\nSample size 2, mean 6.00, median 6.00.', at: 'tr' },
        { click: { button: 'Calculate Statistics' } },
        { wait: 2600 },
      ],
    },
    'uploading-a-data-file': {
      title: 'The file tab and its two formats',
      script: [
        { say: 'CLICK the file tab\nFormat radios and Choose File replace the boxes.', at: 'tr' },
        { click: { css: 'button', nth: 1 } },
        { wait: 2000 },
        { say: 'PICK TXT\nOne number per line.', at: 'tr' },
        { set: { css: 'input[type=radio]', nth: 1 }, value: true },
        { wait: 2000 },
        { say: 'READ Choose File\nOpens the system file dialog, which this demo cannot show.', at: 'tr' },
        { move: { text: 'Choose File' }, ms: 900 },
        { wait: 2400 },
        { say: 'PICK CSV\nNumbers separated by commas, any number of lines.', at: 'tr' },
        { set: { css: 'input[type=radio]', nth: 0 }, value: true },
        { wait: 2000 },
        { say: 'CLICK Manual Input\nBack to the Value boxes.', at: 'tr' },
        { click: { css: 'button', nth: 0 } },
        { wait: 2200 },
      ],
    },
    'sample-or-population': {
      title: 'Which formula the variance uses',
      script: [
        { say: 'CLICK + Add Number four times\nFive Value boxes.', at: 'tr' },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { wait: 1600 },
        { say: 'TYPE 1, 2, 2, 3 and 7', at: 'tr' },
        { set: { css: 'input[placeholder="Value"]', nth: 0 }, value: '1' },
        { set: { css: 'input[placeholder="Value"]', nth: 1 }, value: '2' },
        { set: { css: 'input[placeholder="Value"]', nth: 2 }, value: '2' },
        { set: { css: 'input[placeholder="Value"]', nth: 3 }, value: '3' },
        { set: { css: 'input[placeholder="Value"]', nth: 4 }, value: '7' },
        { wait: 1800 },
        { say: 'CLICK Calculate Statistics\nVariance 5.50, standard deviation 2.35.\nAuto used n - 1, since n < 30.', at: 'tr' },
        { click: { button: 'Calculate Statistics' } },
        { wait: 2600 },
        { say: 'CLICK the i next to Variance\nThe panel shows both formulas, n - 1 and N.', at: 'tr' },
        { click: { css: 'span[style*="border-radius: 50%"]', nth: 8 } },
        { wait: 2600 },
        { say: 'READ the three radios\nAuto, Always use n-1, Always use n.\nWith fewer than 30 values the table keeps n - 1.', at: 'bl' },
        { move: { text: 'Always use n (Population)' }, ms: 900 },
        { wait: 2800 },
      ],
    },
    'reading-the-results-table': {
      title: 'Nineteen statistics for one dataset',
      script: [
        { say: 'CLICK + Add Number four times\nFive Value boxes.', at: 'tr' },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { wait: 1600 },
        { say: 'TYPE 3, 5, 5, 8 and 9', at: 'tr' },
        { set: { css: 'input[placeholder="Value"]', nth: 0 }, value: '3' },
        { set: { css: 'input[placeholder="Value"]', nth: 1 }, value: '5' },
        { set: { css: 'input[placeholder="Value"]', nth: 2 }, value: '5' },
        { set: { css: 'input[placeholder="Value"]', nth: 3 }, value: '8' },
        { set: { css: 'input[placeholder="Value"]', nth: 4 }, value: '9' },
        { wait: 1800 },
        { say: 'CLICK Calculate Statistics\nMean 6.00, median 5.00, mode 5.\nRange 6, IQR 3.00, skewness 0.11.', at: 'tr' },
        { click: { button: 'Calculate Statistics' } },
        { wait: 2800 },
        { say: 'CLICK the i next to Mode\nThe most frequent value, 5.', at: 'tr' },
        { click: { css: 'span[style*="border-radius: 50%"]', nth: 4 } },
        { wait: 2400 },
        { say: 'CLICK the i next to IQR\nQ3 - Q1 = 8.00 - 5.00 = 3.00.', at: 'tr' },
        { click: { css: 'span[style*="border-radius: 50%"]', nth: 12 } },
        { wait: 2600 },
      ],
    },
    'the-explanation-panel': {
      title: 'One explanation per statistic',
      script: [
        { say: 'CLICK + Add Number four times\nFive Value boxes.', at: 'tr' },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { click: { button: '+ Add Number' } },
        { wait: 1600 },
        { say: 'TYPE 1, 2, 2, 3 and 7', at: 'tr' },
        { set: { css: 'input[placeholder="Value"]', nth: 0 }, value: '1' },
        { set: { css: 'input[placeholder="Value"]', nth: 1 }, value: '2' },
        { set: { css: 'input[placeholder="Value"]', nth: 2 }, value: '2' },
        { set: { css: 'input[placeholder="Value"]', nth: 3 }, value: '3' },
        { set: { css: 'input[placeholder="Value"]', nth: 4 }, value: '7' },
        { wait: 1800 },
        { say: 'CLICK Calculate Statistics\nThe panel still says: click an i icon.', at: 'tr' },
        { click: { button: 'Calculate Statistics' } },
        { wait: 2400 },
        { say: 'CLICK the i next to Standard Deviation\nThe square root of the variance: 2.35.\nThe text ends with a link to its section.', at: 'tr' },
        { click: { css: 'span[style*="border-radius: 50%"]', nth: 9 } },
        { wait: 2800 },
        { say: 'CLICK the i next to Geometric Mean\nThe panel switches: fifth root of the product, 2.43.', at: 'tr' },
        { click: { css: 'span[style*="border-radius: 50%"]', nth: 16 } },
        { wait: 2800 },
      ],
    },
  };

  const sectionsContent = {
    obj1: {
      title: `Getting Started with the Statistics Calculator`,
      content: `The calculator takes a list of numbers and returns nineteen descriptive statistics at once. It has four parts, top to bottom: two tabs that choose how the data comes in, **Manual Input** or a file; the data area, which is a column of **Value** boxes or a file picker; the **Calculate Statistics** button with three radios under it for the variance formula; and the **Results** table with the **Explanation** panel next to it.

Start on the Manual Input tab, which is selected when the page opens. There is one Value box; click **+ Add Number** for each further value, type one number per box, and click **Calculate Statistics**. For the values $1$, $2$, $2$, $3$ and $7$ the table shows a sample size of $5$, a sum of $15.00$, a mean of $3.00$, a median of $2.00$ and a mode of $2$, and goes on down to the root mean square.

Every row of the table has an **i** icon. Click it and the Explanation panel on the right describes that statistic and its formula; the text ends with a link to the section on this page that treats it in full. **Reset** clears the boxes, the table and the panel.

What the nineteen numbers tell you about a dataset is explained in [what descriptive statistics describe](!#what-descriptive-statistics-describe).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Entering Values by Hand`,
      content: `On the **Manual Input** tab each number has its own **Value** box. The page opens with one box; click **+ Add Number** as often as you need, and type one number per box. Whole numbers, decimals and negative numbers are all accepted; a box left empty or holding text is not a number and the calculation reports an error.

Every box except the first has an **×** button on its right. Click it to remove that box and its value. The remaining boxes keep their values, so you can recalculate at once: with $4$, $8$ and $9$ the sample size is $3$, the mean $7.00$ and the median $8.00$; remove the $9$ and the sample size is $2$, the mean $6.00$ and the median $6.00$.

The order of the boxes does not matter, because the calculator sorts the values before it computes the median, the quartiles and the minimum and maximum. For more than a dozen values the file tab is quicker, as described in [uploading a data file](!#uploading-a-data-file).

Click **Reset** to empty every box and clear the results. The statistics that need only the count and the extremes of the list are explained in [count, sum, minimum, maximum and range](!#count-sum-minimum-maximum-and-range).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Uploading a Data File`,
      content: `Click the second tab at the top to load the numbers from a file instead of typing them. The Value boxes are replaced by two format radios and a **Choose File** button.

Pick **CSV** for a file whose numbers are separated by commas, on one line or many; pick **TXT** for a file with one number per line. Then click **Choose File**, which opens your system's file dialog; the demo above stops at the button, since a file dialog cannot be driven from the page. After you pick a file the numbers are read at once and the **Results** table is cleared until you click **Calculate Statistics** again.

The file must be plain text with the extension .csv or .txt; any other file is refused with the message **Please upload a valid .txt or .csv file.** Entries that are not numbers are skipped. A file with fewer than two numbers gives no useful spread statistics, as explained in [variance and standard deviation](!#variance-and-standard-deviation).

Click **Manual Input** to return to the boxes; the file's numbers are kept until you click **Reset**.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Sample or Population`,
      content: `Under the **Calculate Statistics** button three radios decide which formula the variance and the standard deviation use. **Always use n-1 (Sample)** divides the squared deviations by $n - 1$, the correction for data that is a sample of a larger population. **Always use n (Population)** divides by $n$, for data that is the whole population. **Auto**, the default, uses $n - 1$ when there are fewer than $30$ values and $n$ otherwise.

For the values $1$, $2$, $2$, $3$ and $7$ the sample formula gives a variance of $5.50$ and a standard deviation of $2.35$; the population formula would give $4.40$ and $2.10$. The table reports the sample values here, because $n = 5$ is below $30$.

Note that with fewer than $30$ values the table shows the $n - 1$ result whichever radio is selected, so the population choice only takes effect from $30$ values upward. The coefficient of variation, the skewness and the kurtosis always use the population standard deviation.

Which formula fits which situation, and why the correction is $n - 1$, is explained in [variance and standard deviation](!#variance-and-standard-deviation).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `Reading the Results Table`,
      content: `After **Calculate Statistics** the **Results** table lists nineteen rows in a fixed order: the sample size and the sum; the three averages, mean, median and mode; the minimum, the maximum and the range; the variance and the standard deviation; the first and third quartiles and the interquartile range; the skewness and the kurtosis; the coefficient of variation; and the geometric mean, the harmonic mean and the root mean square.

Values are rounded to two decimal places, except the sample size, the mode, the minimum and the maximum, which are printed as entered. The coefficient of variation carries a percent sign. For the values $3$, $5$, $5$, $8$ and $9$ the table reads: sample size $5$, sum $30.00$, mean $6.00$, median $5.00$, mode $5$, minimum $3$, maximum $9$, range $6$, variance $6.00$, standard deviation $2.45$, quartiles $5.00$ and $8.00$, interquartile range $3.00$, skewness $0.11$, kurtosis $-1.44$, coefficient of variation $36.51\\%$, geometric mean $5.58$, harmonic mean $5.16$ and root mean square $6.39$.

When every value occurs equally often the mode reads **No unique mode**. With only two values the quartiles are not defined and the table shows **NaN** for the first quartile and the interquartile range.

The averages are compared in [mean, median and mode](!#mean-median-and-mode).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `The Explanation Panel`,
      content: `The **Explanation** panel sits to the right of the **Results** table. Before you click anything it says: click any **i** icon in the results to see an explanation. Click the icon next to a statistic and the panel shows its definition and its formula in plain symbols, for example the standard deviation as the square root of the variance, $s = \\sqrt{s^2}$, or the geometric mean as the $n$-th root of the product of the values.

The panel keeps the last explanation until you click another icon or **Reset**. Every explanation ends with a link, so a reader who wants the full story on, say, the quartiles can jump straight to the section below that treats them; the sections then link on to the lessons.

Each statistic has one explanation; the two formula variants of the variance and the standard deviation, with $n - 1$ and with $n$, are both given in their text. For the values $1$, $2$, $2$, $3$ and $7$ the standard deviation is $2.35$ and the geometric mean $2.43$.

The statistics that measure the shape of the data, and the three less common means, are explained in [skewness, kurtosis and other means](!#skewness-kurtosis-and-other-means).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `What Descriptive Statistics Describe`,
      content: `Descriptive statistics summarise a list of numbers with a few figures. Each figure answers one question. How many values are there, and how large are they in total? That is the count and the sum. Where is the middle of the data? That is the mean, the median and the mode. How far do the values spread? That is the range, the variance, the standard deviation and the interquartile range. Is the spread symmetric, and are there outliers? That is the skewness and the kurtosis.

Two things to keep in mind. First, a statistic is a function of the data and nothing else; change one value and most of them change. Second, the mean and the standard deviation are sensitive to extreme values while the median and the quartiles are not, so a dataset with a long tail is better described by the second pair.

The calculator computes nineteen such figures from one list, the sample size up to the root mean square. The sections that follow explain them in groups: [count, sum, minimum, maximum and range](!#count-sum-minimum-maximum-and-range), [mean, median and mode](!#mean-median-and-mode), [variance and standard deviation](!#variance-and-standard-deviation), [quartiles and the interquartile range](!#quartiles-and-the-interquartile-range) and [skewness, kurtosis and other means](!#skewness-kurtosis-and-other-means).

The idea of a centre is introduced in [the intuition behind expected value](!/probability/expected-value#intuition) and the idea of spread in [what variance measures](!/probability/variance#what).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Count, Sum, Minimum, Maximum and Range`,
      content: `The sample size $n$ is the number of values. The sum $\\sum x$ adds them all; for $1$, $2$, $2$, $3$ and $7$ it is $15$. Both are needed by almost every other statistic: the mean is the sum divided by the count, and the variance divides by $n - 1$ or $n$.

The minimum and the maximum are the smallest and the largest values, found by sorting; here $1$ and $7$. The range is their difference, $7 - 1 = 6$. It is the simplest measure of spread, but it depends on the two extreme values alone: adding a single outlier can double it while the rest of the data stays put. That is why the interquartile range and the standard deviation are used alongside it.

The calculator prints the count, the minimum and the maximum as entered and the sum with two decimals. The common mistake is to confuse the range with the interval it spans: the range of $3$, $5$, $5$, $8$, $9$ is the single number $6$, not "from $3$ to $9$".`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Mean, Median and Mode`,
      content: `The mean is the sum divided by the count: for $1$, $2$, $2$, $3$ and $7$, $\\bar{x} = 15 / 5 = 3.00$. The median is the middle value after sorting, here $2$; with an even count it is the average of the two middle values, so the median of $4$ and $8$ is $6$. The mode is the most frequent value, here $2$; a dataset can have several modes, and when every value occurs once the calculator reports no unique mode.

The three agree for symmetric data and separate when the data has a tail. In $1, 2, 2, 3, 7$ the single large value pulls the mean up to $3$ while the median stays at $2$: the mean follows outliers, the median does not. For incomes, house prices or response times the median is therefore the usual summary.

The common mistake is to use the mean of a few values as if it were typical of them: $4, 8, 9$ has mean $7.00$, but no value is near $7$. Look at the median and the spread before trusting an average.

See [how to calculate expected value](!/probability/expected-value#calculate), [how to find the median](!/probability/median#7), [how to find the mode](!/probability/mode#7) and [median, mean, and mode compared](!/probability/median#5).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Variance and Standard Deviation`,
      content: `The variance measures spread as the average squared distance from the mean. For a sample it is $s^2 = \\sum (x - \\bar{x})^2 / (n - 1)$, for a whole population $\\sigma^2 = \\sum (x - \\mu)^2 / N$. For $1$, $2$, $2$, $3$ and $7$ the squared deviations from $3$ are $4$, $1$, $1$, $0$ and $16$, summing to $22$; the sample variance is $22 / 4 = 5.50$ and the population variance $22 / 5 = 4.40$.

The standard deviation is the square root of the variance and has the units of the data: $\\sqrt{5.50} \\approx 2.35$ or $\\sqrt{4.40} \\approx 2.10$. The division by $n - 1$ compensates for the fact that a sample's values sit closer to their own mean than to the population mean; without it the sample variance would be too small on average. For large samples the two formulas agree closely, which is why the calculator's **Auto** setting switches to $n$ at $30$ values.

The coefficient of variation divides the standard deviation by the mean and reports a percentage, so spreads of datasets with different units or scales can be compared; the calculator uses the population standard deviation for it, $2.10 / 3 \\approx 69.92\\%$. The common mistake is to compare variances of data in different units; use the standard deviation or the coefficient of variation instead.

See [how to calculate variance](!/probability/variance#calculate), [variance vs standard deviation](!/probability/variance#sd) and [why squaring the distance](!/probability/variance#square).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Quartiles and the Interquartile Range`,
      content: `The quartiles cut the sorted data into four parts. The first quartile $Q_1$ sits a quarter of the way up, the third quartile $Q_3$ three quarters of the way, and the median between them. The interquartile range $IQR = Q_3 - Q_1$ is the width of the middle half of the data: for $3$, $5$, $5$, $8$ and $9$ the calculator gives $Q_1 = 5.00$, $Q_3 = 8.00$ and $IQR = 3.00$.

Several conventions exist for the quartile positions and they differ slightly on small datasets. This calculator uses the positions $n / 4$ and $3n / 4$ of the sorted list: with an even count it averages the two values around each position, with an odd count it takes the value at the position. For $2, 4, 4, 4, 5, 5, 7, 9$ that gives $Q_1 = 4.00$ and $Q_3 = 6.00$.

The interquartile range is the spread measure that ignores outliers, since it uses only the middle half. A value more than $1.5 \\times IQR$ beyond a quartile is the usual rule for flagging an outlier. The common mistake is to expect the quartiles to lie exactly on data values; with an even count they are often averages.

See [median as the 50th percentile](!/probability/median#8) and [how to find the median](!/probability/median#7).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj12: {
      title: `Skewness, Kurtosis and Other Means`,
      content: `Skewness measures the asymmetry of the data. The calculator computes $\\sum (x - \\bar{x})^3 / (n \\sigma^3)$ with the population standard deviation: a positive value means a longer tail to the right, as for $1, 2, 2, 3, 7$ with skewness $1.17$; a value near zero means a symmetric shape, as for $3, 5, 5, 8, 9$ with $0.11$. Kurtosis measures how heavy the tails are; the calculator reports the excess kurtosis, $\\sum (x - \\bar{x})^4 / (n \\sigma^4) - 3$, which is $0$ for a normal distribution, negative for flat data such as $3, 5, 5, 8, 9$ with $-1.44$, and positive when outliers dominate.

Three further averages suit special data. The geometric mean, the $n$-th root of the product, averages growth factors and percentages: for $1, 2, 2, 3, 7$ it is $\\sqrt[5]{84} \\approx 2.43$. The harmonic mean, $n$ divided by the sum of reciprocals, averages rates such as speeds over equal distances: $5 / (1 + 1/2 + 1/2 + 1/3 + 1/7) \\approx 2.02$. The root mean square, $\\sqrt{\\sum x^2 / n}$, averages magnitudes regardless of sign, as for alternating currents: $\\sqrt{67 / 5} \\approx 3.66$. For positive data the harmonic mean is never above the geometric mean, which is never above the arithmetic mean: $2.02 \\le 2.43 \\le 3.00$.

The geometric and harmonic means need positive values; a zero or a negative value makes them meaningless. The common mistake is to average percentages or speeds with the arithmetic mean when the geometric or harmonic mean is the right one.`,
      before: ``,
      after: ``,
      link: '',
    },
  };

  const faqQuestions = {
    obj1: { question: 'Which statistics does the calculator compute?', answer: 'Nineteen: sample size, sum, mean, median, mode, minimum, maximum, range, variance, standard deviation, first and third quartile, interquartile range, skewness, kurtosis, coefficient of variation, geometric mean, harmonic mean and root mean square. All appear at once after Calculate Statistics.' },
    obj2: { question: 'How do I enter my data?', answer: 'Type one number per Value box on the Manual Input tab, adding boxes with + Add Number, or switch to the file tab and upload a CSV file with comma-separated numbers or a TXT file with one number per line.' },
    obj3: { question: 'Does the variance use n or n minus 1?', answer: 'Auto, the default, uses n minus 1 for fewer than 30 values and n from 30 values on. You can force n minus 1 (sample) or n (population) with the radios under the Calculate button. For the values 1, 2, 2, 3, 7 the sample variance is 5.50 and the population variance 4.40.' },
    obj4: { question: 'What does the i icon next to each result do?', answer: 'It opens the explanation of that statistic in the panel on the right: its meaning and its formula, with a link to the section of the page that explains it in full.' },
    obj5: { question: 'Why does the mode say No unique mode?', answer: 'Because every value occurs equally often, so no value is more frequent than the others. For 4, 8, 9 each value occurs once and there is no mode; for 1, 2, 2, 3, 7 the mode is 2.' },
  };

  const keyWords = ['statistics calculator', 'math learning tool', 'online statistics', 'Learn Math Class', 'probability calculator', 'descriptive statistics', 'hypothesis testing', 'math education'];
  const pageUrl = '/calculators/statistics-calculator';
  const pageName = 'Statistics Calculator';

  const schemas = {
    webApplication: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: pageName,
      description: 'Master statistics with our free online calculator at Learn Math Class. Ideal for students and educators. Covers descriptive stats, probability, hypothesis testing, and more. Enhance your math skills today!',
      url: `https://www.learnmathclass.com${pageUrl}`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: ['Nineteen descriptive statistics from one list of values', 'Manual entry or CSV and TXT file upload', 'Sample or population variance and standard deviation', 'Explanation of every statistic with its formula'],
      author: { '@type': 'Organization', name: 'Learn Math Class' },
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      learningResourceType: 'Interactive Tool',
      keywords: keyWords.join(', '),
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.learnmathclass.com' },
        { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://www.learnmathclass.com/calculators' },
        { '@type': 'ListItem', position: 3, name: pageName, item: `https://www.learnmathclass.com${pageUrl}` },
      ],
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Object.keys(faqQuestions).map((key) => ({
        '@type': 'Question',
        name: faqQuestions[key].question,
        acceptedAnswer: { '@type': 'Answer', text: faqQuestions[key].answer },
      })),
    },
  };

  return {
    props: {
      explanations,
      menuItems,
      detailInstructions,
      demos,
      sectionsContent,
      faqQuestions,
      schemas,
    },
    revalidate: 86400,
  }
}
