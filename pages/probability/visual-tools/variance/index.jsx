

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import VarianceVisualizer from '@/app/components/probability/variance/VarianceVisualizer'
import varianceDiagrams from '@/app/components/probability/variance/varianceDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


// Surfaced on the /probability hub via buildSectionData extraction
// (card icon + description). Do not use apostrophes in comments here.
const hubMeta = {
  hubDescription: 'Drag data points and watch variance update in real time as deviations from the mean become visually tangible through interactive bars and step-by-step calculations.',
  svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="30" width="10" height="10" fill="#ED93B1" fill-opacity="0.5" stroke="#72243E" stroke-width="0.8"/><rect x="23" y="34" width="6" height="6" fill="#ED93B1" fill-opacity="0.5" stroke="#72243E" stroke-width="0.8"/><rect x="32.6" y="37.2" width="2.8" height="2.8" fill="#ED93B1" fill-opacity="0.5" stroke="#72243E" stroke-width="0.8"/><rect x="45" y="38" width="2" height="2" fill="#ED93B1" fill-opacity="0.5" stroke="#72243E" stroke-width="0.8"/><rect x="53" y="34" width="6" height="6" fill="#ED93B1" fill-opacity="0.5" stroke="#72243E" stroke-width="0.8"/><rect x="62.6" y="29.2" width="10.8" height="10.8" fill="#ED93B1" fill-opacity="0.5" stroke="#72243E" stroke-width="0.8"/><line x1="41" y1="18" x2="41" y2="62" stroke="#FAC775" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="10" y1="44" x2="74" y2="44" stroke="#B5D4F4" stroke-width="1.1"/><circle cx="16" cy="44" r="3" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="26" cy="44" r="3" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="34" cy="44" r="3" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="46" cy="44" r="3" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="56" cy="44" r="3" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="68" cy="44" r="3" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><text x="41" y="72" font-family="Georgia,serif" font-size="11" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#963;&#178;</text></svg>`,
}

export async function getStaticProps(){

  const keyWords = [
    'variance calculator',
    'variance visualizer',
    'interactive variance tool',
    'calculate variance',
    'variance formula',
    'population variance',
    'sample variance',
    'standard deviation',
    'variance step by step',
    'variance examples',
    'statistics calculator',
    'measure of spread',
    'data variability',
    'variance online',
    'free variance calculator'
  ]

  const sectionsContent = {
    obj1: {
      title: `What is Variance?`,
      content: `Variance is a statistical measure that quantifies how much individual values in a dataset differ from the mean. It answers the question: **how spread out are the data points?**

In simple terms, variance tells you whether your data points cluster tightly around the average or scatter widely across different values. A **low variance** means data points are similar and close to the mean. A **high variance** indicates greater diversity and spread in the data.

Variance is calculated by taking the average of the squared differences from the mean. It's measured in squared units (like dollars² or meters²), which is why we often use its square root—the standard deviation—for easier interpretation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Variance Formulas`,
      content: `The variance formula differs slightly depending on whether you're analyzing an entire population or a sample:

**Population Variance** ($\\sigma^2$):

$$\\sigma^2 = \\frac{\\sum_{i=1}^{N}(x_i - \\mu)^2}{N}$$

Use this when you have data for **everyone** or **everything** you care about—like test scores for all students in your class.

**Sample Variance** ($s^2$):

$$s^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}$$

Use this when you have data from a **subset** of a larger population—like surveying 100 customers out of 10,000. The $(n-1)$ denominator (Bessel's correction) provides an unbiased estimate of the true population variance.

The visualizer above calculates both types automatically and shows you the step-by-step process for whichever you select.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Using the Interactive Visualizer`,
      content: `Our variance visualizer combines real-time calculation with interactive exploration to help you understand how variance works.

**Drag and Drop**: Click and drag any data point on the chart to change its value. Watch how the variance, standard deviation, and visual spread update instantly. Try moving a point far from the mean to see how outliers dramatically increase variance.

**Add or Remove Points**: Use the "Add Point" button to insert new data values at the current mean. Remove points by clicking the ✕ button in the data table. The visualizer requires at least 2 data points.

**Toggle Variance Type**: Switch between population variance ($\\sigma^2$) and sample variance ($s^2$) using the radio buttons. Notice how sample variance uses $(n-1)$ in the denominator, resulting in a slightly larger value that corrects for sampling bias.

**Try Presets**: Experiment with three built-in datasets—"Low Variance" shows tightly clustered data, "High Variance" displays widely spread values, and "With Outliers" demonstrates how extreme values affect the calculation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Understanding the Visual Display`,
      content: `The chart shows your data points as orange circles connected to the mean (blue dashed line) by colored bars. These bars represent each value's **deviation** from the mean.

**Green bars** point upward, showing values **above** the mean (positive deviations). **Red bars** point downward, showing values **below** the mean (negative deviations). The length of each bar indicates how far that point sits from the average.

**Hover over any point** to see its exact deviation value. The visualization helps you intuitively grasp why variance squares these deviations—it treats distance from the mean equally whether above or below, and it emphasizes larger deviations more heavily than smaller ones.

The mean line itself shifts whenever you modify data values, and you'll see all deviations recalculate accordingly. This dynamic feedback makes the abstract concept of "average squared deviation" concrete and visual.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Step-by-Step Calculation Breakdown`,
      content: `The right panel displays the complete variance calculation process broken into five clear steps:

**Step 1: Calculate the Mean** — Adds all values and divides by the count.

**Step 2: Find Deviations** — Subtracts the mean from each data point. You'll see both positive and negative results.

**Step 3: Square Each Deviation** — Converts all values to positive numbers and amplifies larger differences.

**Step 4: Sum Squared Deviations** — Adds up all the squared values to get the total variation.

**Step 5: Divide by n or (n-1)** — Produces the final variance. Population variance divides by $n$; sample variance divides by $(n-1)$.

Each step shows the actual numbers from your current dataset, so you can follow the exact arithmetic and understand where the final variance value comes from. This transparency helps demystify the formula and builds intuition for what variance measures.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Data Table and Manual Input`,
      content: `The data table lists every point in your dataset with its corresponding calculations. Each row shows:

**Value** — The actual data point. Click to edit manually by typing a new number.

**Deviation** — How far this value sits from the mean: $(x_i - \\mu)$.

**Squared Deviation** — The deviation squared: $(x_i - \\mu)^2$. Notice how larger deviations contribute disproportionately more to the variance.

The table footer displays the **sum of squared deviations**, which is the numerator in the variance formula. Hover over column headers to see tooltips explaining what each column represents.

This tabular view complements the visual chart—some people grasp concepts better through numbers, others through pictures. Together, they provide multiple ways to understand the same underlying calculation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Population vs Sample: When to Use Which`,
      content: `The choice between population and sample variance depends on your data's scope.

Use **population variance** when you have measurements for the **entire group** you care about. Examples: grades for all students in your class, daily temperatures for a complete year, heights of all employees at a company. You're not trying to infer beyond your dataset—you have everything.

Use **sample variance** when your data represents a **subset** drawn from a larger population, and you want to estimate the population's variance. Examples: surveying 50 customers to understand all customers, measuring 10 products from a production line of thousands. The $(n-1)$ correction compensates for the fact that sample variance tends to underestimate population variance.

The visualizer's tooltip explains this difference when you hover over the "?" icon next to the variance type selector. Switching between the two shows how Bessel's correction affects the result—typically a small difference, but statistically important.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Exploring How Outliers Affect Variance`,
      content: `One of the most valuable uses of this visualizer is seeing firsthand how outliers impact variance.

Start with the "Low Variance" preset—notice the small variance value. Now drag one point far away from the others. Watch the variance jump dramatically. This happens because variance **squares** deviations, so a point that's twice as far from the mean contributes **four times** as much to the variance.

Try the "With Outliers" preset to see a pre-configured example. Remove the outlier (the point with value 40) and observe how much the variance drops. This sensitivity to extreme values is both a strength and a weakness of variance as a measure of spread.

Understanding this behavior helps you interpret variance in real data. A high variance might indicate truly diverse data, or it might signal that a few outliers are skewing the measure. The visualizer lets you experiment with both scenarios risk-free.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Variance and Standard Deviation`,
      content: `The visualizer displays both variance and standard deviation in the summary statistics panel at the top.

**Variance** ($\\sigma^2$ or $s^2$) is measured in **squared units**—if your data is in dollars, variance is in dollars². This makes it less intuitive to interpret directly.

**Standard Deviation** ($\\sigma$ or $s$) is simply the square root of variance, bringing the measure back to the **original units**. If variance is 25 dollars², standard deviation is 5 dollars—much easier to understand.

Both contain the same information about spread, but standard deviation is typically preferred for reporting and interpretation. Variance is often used in theoretical calculations and more advanced statistical procedures like ANOVA.

The visualizer shows both so you can see their relationship: $\\sigma = \\sqrt{\\sigma^2}$. As you modify data, watch how they move together—standard deviation is just the "un-squared" version of variance.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Statistical Concepts`,
      content: `Variance connects to many other important statistical measures:

**Expected Value** — The mean that variance measures spread around.

**Standard Deviation** — The square root of variance, in original units.

**Coefficient of Variation** — Compares variance across different scales.

**Probability Distributions** — Many distributions are characterized by their variance parameters.

Variance is a fundamental building block in statistics. Mastering it through interactive exploration prepares you for more advanced topics in probability, hypothesis testing, and data analysis.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `The Default Dataset`,
      content: `The visualizer opens on seven evenly spread points — 12, 15, 18, 20, 22, 25, 28 — whose mean is exactly 20. The dashed blue line marks that mean, and a coloured bar runs from it to each point: green where the point sits above, red where it sits below.

Those bars are the deviations, and they are what the whole calculation is built from. The population variance here is $26.57$, giving a standard deviation of $5.16$.`,
      before: ``,
      after: `Notice that the deviations sum to zero — that is true of every dataset, by construction, since the mean is the balance point. It is also exactly why variance squares them: adding the raw deviations would always give zero and measure nothing.

Squaring has a second consequence worth naming. It changes the units: if the data are in centimetres, the variance is in square centimetres, which is why the standard deviation — the square root — is usually the number quoted. At $5.16$ it sits on the same scale as the data itself.`,
      link: '',
    },
    obj12: {
      title: `Low Variance: Points Clustered on the Mean`,
      content: `The Low Variance preset loads 20, 21, 20, 22, 21, 20, 22 — a spread of just 2 units around a mean of $20.86$.

Every deviation bar is short, and the variance drops to $0.69$ with a standard deviation of $0.83$.`,
      before: ``,
      after: `Compared against the default dataset the range fell from 16 to 2, but the variance fell from $26.57$ to $0.69$ — a factor of nearly 40. That disproportion is the squaring at work: halving a deviation quarters its contribution.

This is the case where the standard deviation earns its keep as a summary. A value of $0.83$ says immediately that a typical point sits under a unit from the mean, which is a claim you can check by eye against the chart. The variance of $0.69$, in squared units, says the same thing far less legibly.`,
      link: '',
    },
    obj13: {
      title: `High Variance: Points Pushed to the Extremes`,
      content: `The High Variance preset loads 10, 30, 15, 35, 12, 38, 8 — values alternating between two clusters, with a mean of $21.14$ falling in the empty middle.

The deviation bars are long in both directions, and the variance jumps to $138.98$, a standard deviation of $11.79$.`,
      before: ``,
      after: `This preset makes a point the summary statistics cannot: the mean of $21.14$ describes no actual observation. Nothing in the dataset is near 21 — the points sit around 10 and around 35 — yet the mean sits between them, and the standard deviation of $11.79$ is the tool's way of warning that the mean is a poor description here.

That is the general reading of a large variance. It does not merely say "the numbers are big"; it says the mean is carrying little information about any individual value. A bimodal dataset like this one is precisely where reporting mean and variance alone would mislead.`,
      link: '',
    },
    obj14: {
      title: `A Single Outlier`,
      content: `The Outliers preset loads 15, 16, 15, 17, 16, 15, 40. Six of the seven values sit within two units of each other; one sits at 40.

That single point drags the mean up to $19.14$ — above every value except itself — and pushes the variance to $72.98$, a standard deviation of $8.54$.`,
      before: ``,
      after: `Compare the numbers with the low-variance preset, whose six clustered points look much like these six. Adding one distant value multiplies the variance by roughly a hundred. The squaring is why: a deviation of about 21 contributes over 400 to the sum on its own, dwarfing the six small deviations combined.

This is the concrete argument for why variance and standard deviation are called **non-robust** statistics. One observation, possibly a typo, possibly a genuine rare event, controls the result. Where that risk matters, the interquartile range or the median absolute deviation are used instead — they change little when a single point moves far away.`,
      link: '',
    },
    obj15: {
      title: `The Sample Toggle: Dividing by n − 1`,
      content: `The population/sample switch changes one thing in the arithmetic: the divisor. With the default dataset loaded, the sum of squared deviations is $186$ either way, but

- **population**: $186 / 7 = 26.57$
- **sample**: $186 / 6 = 31.00$

The chart is identical in both — same points, same mean, same bars. Only the reported variance moves.`,
      before: ``,
      after: `Dividing by $n - 1$ is **Bessel's correction**, and it exists because a sample's own mean is not the population mean. The sample mean is, by construction, the point that minimises the sum of squared deviations *for that sample*, so those deviations come out slightly too small on average. Dividing by the smaller number $n - 1$ compensates, making the estimate unbiased.

The correction matters most when $n$ is small: here, with $n = 7$, it raises the figure by about 17%. At $n = 100$ the difference is around 1%, and at $n = 1000$ it is negligible — which is why the choice is often glossed over for large datasets and should not be for small ones.

Which to use is a question about intent, not data. Use $n$ when the points *are* the whole population you care about; use $n - 1$ when they are a sample standing in for something larger.`,
      link: '',
    },
  }

  const introContent = {
    id: "intro",
    title: "Interactive Variance Visualizer",
    content: `Variance measures how spread out data is around its mean. Understanding variance is essential for statistics, data analysis, quality control, finance, and scientific research—but the concept can seem abstract when learned from formulas alone.

This interactive visualizer brings variance to life. Drag data points on the chart and watch variance recalculate in real-time. See the step-by-step arithmetic that transforms raw numbers into variance. Toggle between population and sample variance to understand when to use each. Experiment with outliers and observe their dramatic effect on spread measures.

The tool displays everything simultaneously: the visual distribution, the data table with deviations, the complete calculation breakdown, and the final statistics. Whether you're learning variance for the first time or teaching it to others, this hands-on approach builds intuition that static formulas cannot provide.`
  }


  /* ---- frozen-state demonstration units (Line 1) ----
     The chart is built inline in JSX by the component, so varianceDiagrams.js
     ports it: same 700x500 canvas, padding, value window, gridlines, dashed
     mean line, deviation bars and point labels. Statistics come from the
     component's own formulas, including the n vs n-1 divisor switch. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: varianceDiagrams[key], caption, text })

  const stateUnits = {
    default: unit('default', 'Default dataset, frozen',
      'Seven points with a mean of exactly 20. Each deviation bar runs from the dashed mean line to ' +
      'its point - green above, red below. Population variance 26.57, standard deviation 5.16.'),
    low: unit('low', 'Low Variance preset, frozen',
      'The same seven slots, now spanning just 2 units. Every bar is short and the variance falls to ' +
      '0.69 - a range 8x smaller, but a variance nearly 40x smaller.'),
    high: unit('high', 'High Variance preset, frozen',
      'Values alternating between roughly 10 and roughly 35, with the mean of 21.14 sitting in the ' +
      'empty middle where no observation lies. Variance 138.98.'),
    outliers: unit('outliers', 'Outliers preset, frozen',
      'Six clustered points and one at 40. That single value pulls the mean above every other point ' +
      'and lifts the variance to 72.98 - about a hundred times the clustered case.'),
    sample: unit('sample', 'Default dataset with the sample toggle, frozen',
      'Identical chart to the first unit - same points, same mean, same bars. Only the divisor has ' +
      'changed, from 7 to 6, so the reported variance reads 31.00 rather than 26.57.'),
  }


  /* ---- per-state notes, passed into the component (Line 1) ----
     VarianceVisualizer took no props at all; an additive `explanations = null`
     prop was added and the note renders under the statistics row. The state is
     value-matched against the component's own presets, with the sample toggle
     taking precedence. Rendered with dangerouslySetInnerHTML, so raw HTML. */
  const note = (body, slug, label) =>
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#using-the-visualizer" style="color:#1d4ed8;font-weight:600">using the visualizer</a>`

  const explanations = {
    default: note('Deviations always sum to zero - which is exactly why variance squares them.', 'the-default-dataset', 'Learn more about the default dataset'),
    low: note('Range fell 8x but variance fell nearly 40x: squaring amplifies the difference.', 'low-variance-preset', 'Learn more about low variance'),
    high: note('The mean of 21.14 describes no actual observation here - that is what a large variance warns about.', 'high-variance-preset', 'Learn more about high variance'),
    outliers: note('One distant point multiplies the variance by roughly a hundred - variance is not robust.', 'the-outlier-preset', 'Learn more about outliers'),
    sample: note('Same chart, divisor 6 instead of 7 - Bessel&apos;s correction, worth about 17% at n = 7.', 'the-sample-toggle', 'Learn more about the sample toggle'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is variance in statistics?",
      answer: "Variance is a statistical measure that quantifies how much individual values in a dataset differ from the mean. It measures the average squared deviation from the mean, indicating how spread out data points are."
    },
    obj2: {
      question: "What is the difference between population variance and sample variance?",
      answer: "Population variance uses N in the denominator and is used when you have data for the entire population. Sample variance uses (n-1) in the denominator and is used when estimating from a sample. The (n-1) correction provides an unbiased estimate of the population variance."
    },
    obj3: {
      question: "How do you calculate variance step by step?",
      answer: "To calculate variance: 1) Find the mean of all values, 2) Subtract the mean from each value to get deviations, 3) Square each deviation, 4) Sum all squared deviations, 5) Divide by N for population variance or (n-1) for sample variance."
    },
    obj4: {
      question: "How do outliers affect variance?",
      answer: "Outliers dramatically increase variance because deviations are squared in the calculation. A point twice as far from the mean contributes four times as much to the variance, making variance sensitive to extreme values."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Variance Calculator and Visualizer",
      "description": "Calculate and visualize variance interactively. Drag data points, see calculations, understand population vs sample variance. Free tool with real-time feedback.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/variance",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive variance calculator",
        "Real-time data visualization",
        "Drag-and-drop data manipulation",
        "Population and sample variance",
        "Step-by-step calculation display",
        "Visual deviation indicators"
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/probability/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Variance Visualizer",
          "item": "https://www.learnmathclass.com/probability/visual-tools/variance"
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
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Variance Calculator & Visualizer | Interactive Tool",
        description: "Interactive variance calculator with real-time visualization. Drag data points, see step-by-step calculations, compare population vs sample variance online.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/variance",
        category: "Expected Value & Variance",
        name: "Interactive Variance Calculator and Visualizer",
        pageType: "WebApplication"
      },
    }
  }
}

export default function VarianceVisualizerPage({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  const genericSections = [
    plain('obj1', 'what-is-variance'),
    plain('obj2', 'variance-formulas'),
    plain('obj3', 'using-the-visualizer'),
    stateRow('obj11', 'the-default-dataset', 'default'),
    stateRow('obj12', 'low-variance-preset', 'low'),
    stateRow('obj13', 'high-variance-preset', 'high'),
    stateRow('obj14', 'the-outlier-preset', 'outliers'),
    stateRow('obj15', 'the-sample-toggle', 'sample'),
    plain('obj4', 'the-visual-display'),
    plain('obj5', 'step-by-step-calculation'),
    plain('obj6', 'data-table-and-manual-input'),
    plain('obj7', 'population-vs-sample'),
    plain('obj8', 'exploring-outliers'),
    plain('obj9', 'variance-and-standard-deviation'),
    plain('obj10', 'related-concepts'),
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
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Learn Math Class" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.webApplication)
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

      <br/>
      <br/>
      <br/>
      <br/>

      <OperaSidebar 
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 

      <Breadcrumb/>
      
      <br/>
      <br/>

      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
        Interactive Variance Visualizer
      </h1>

      <br/>
      
      <VarianceVisualizer explanations={explanations}/>
      
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