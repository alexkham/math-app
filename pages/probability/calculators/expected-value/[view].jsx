
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import AffiliateBlock from '@/app/components/affiliates/AffiliateBlock'
import { COURSES } from '@/app/components/affiliates/courses'
import React from 'react'
import Head from 'next/head'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'
import DirectExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/DirectExpectedValueCalculator'
import RawDataExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/RawDataExpectedValueCalculator'
import GroupedDataExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/GroupedDataExpectedValueCalculator'
import DiscreteUniformExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/DiscreteUniformExpectedValueCalculator'
import BinomialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/BinomialExpectedValueCalculator'
import GeometricExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/GeometricExpectedValueCalculator'
import NegativeBinomialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/NegativeBinomialExpectedValueCalculator'
import HypergeometricExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/HypergeometricExpectedValueCalculator'
import PoissonExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/PoissonExpectedValueCalculator'
import ContinuousUniformExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/ContinuousUniformExpectedValueCalculator'
import ExponentialExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/ExponentialExpectedValueCalculator'
import NormalExpectedValueCalculator from '@/app/components/calculators/probability/expected-value/NormalDistributionExpectedValueCalculator'
import '../../../../pages/pages.css'



export async function getStaticPaths() {
  const paths = [
    { params: { view: 'direct-data' } },
    { params: { view: 'raw-data' } },
    { params: { view: 'grouped-data' } },
    { params: { view: 'discrete-uniform' } },
    { params: { view: 'binomial' } },
    { params: { view: 'geometric' } },
    { params: { view: 'negative-binomial' } },
    { params: { view: 'hypergeometric' } },
    { params: { view: 'poisson' } },
    { params: { view: 'continuous-uniform' } },
    { params: { view: 'exponential' } },
    { params: { view: 'normal' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { view } = params;

  const viewConfig = {
    'direct-data': {
      componentName: 'DirectExpectedValueCalculator',
      title: 'Expected Value Calculator - Direct Data | Learn Math Class',
      description: 'Calculate expected value from a probability distribution table. Enter values and their probabilities to compute the mean with step-by-step solutions.',
      keywords: ['expected value calculator', 'direct data', 'probability table', 'mean calculator', 'discrete probability'],
      h1Title: 'Expected Value Calculator - Direct Data',
      url: '/probability/calculators/expected-value/direct-data',
      name: 'Expected Value Calculator - Direct Data',
      sectionsContent: {
      obj1: {
        title: `Expected Value from a Probability Table`,
        content: `When the possible values of a random variable and their probabilities are known, the [expected value](!/probability/expected-value) is the probability-weighted average of those values. Each value contributes in proportion to how likely it is, so rare large values count less than common small ones.

A probability table is valid only when every probability lies between $0$ and $1$ and the probabilities add up to exactly $1$. If they add up to something else, either a value is missing or a probability is wrong, and the result would not be a true expected value. The expected value does not have to be one of the listed values: a variable that takes only the values $0$ and $1$ can have an expected value of $0.3$.

The weighted-average idea is developed in [the intuition behind expected value](!/probability/expected-value#intuition) and the table formula in [expected value for discrete random variables](!/probability/expected-value#discrete); what a random variable is comes first, in [what a random variable is](!/probability/random-variables#definition).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a discrete random variable with values $x_1, x_2, \\ldots, x_n$ and probabilities $p_1, p_2, \\ldots, p_n$:

$$E[X] = \\sum_{i=1}^{n} x_i \\, p_i$$

Example: a game pays nothing with probability $0.5$, 10 dollars with probability $0.3$ and 50 dollars with probability $0.2$. The probabilities add up to $1$, so the table is valid. Then

$$E[X] = 0(0.5) + 10(0.3) + 50(0.2) = 0 + 3 + 10 = 13$$

On average the game pays 13 dollars per play. If a ticket costs 15 dollars, a player loses 2 dollars per play in the long run.

The same steps are listed in [how to calculate expected value](!/probability/expected-value#calculate), and more cases are worked in [examples of expected value](!/probability/expected-value#examples).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Probability tables appear wherever outcomes and their chances are known in advance. Insurers use them to price policies: the expected payout per policy sets the minimum premium. Games of chance are judged by their expected value per play, which shows whether the house has an edge. In business, expected profit compares options whose results are uncertain, such as launching a product that may sell well, average or poorly.

The same table also gives the [variance](!/probability/variance), which measures how far the results spread around the expected value. Two games with the same expected value can carry very different risk.

The variance of a table is computed in [variance for discrete random variables](!/probability/variance#discrete), its square root is compared with it in [variance vs standard deviation](!/probability/variance#sd), and the links to the other ideas of the subject are in [relation to other probability concepts](!/probability/expected-value#related).`,
        link: '',
      },
      obj4: {
        title: `Entering Outcomes and Probabilities`,
        content: `The table on the left holds one row per outcome. Type the outcome in the **Value** column (any number, negative for a loss) and its chance in the **Probability** column, a number from $0$ to $1$; a probability typed above $1$ or below $0$ is clamped to that range. The **Contribution** column shows value × probability for the row as soon as both boxes hold numbers, and a dash until then.

Click **+ Add Outcome** for another row; it starts with value $0$ and probability $0$, so the total does not change until you type. The **×** at the end of a row removes it; the last remaining row cannot be removed. **Total Probability** under the table must read $1.0000$: a total of $1.2000$ shows the warning ⚠ Must equal 1.0 and the message that probabilities must sum to exactly $1.0$, and the results area shows a placeholder until the total is fixed. A table with no usable rows shows "Please enter valid values and probabilities".

There is no Calculate button and no Reset button: everything recomputes as you type, and reloading the page restores the sample table ($100$, $50$, $-20$ with $0.25$, $0.5$, $0.25$). For the game that pays $0$, $10$ or $50$ dollars with probabilities $0.5$, $0.3$ and $0.2$, the three rows give the expected value $13$. Why the probabilities must add up to $1$ is explained in [expected value from a probability table](!#expected-value-from-a-probability-table).`,
        link: '',
      },
      obj5: {
        title: `Reading the Results and the Explanation Box`,
        content: `Once the total probability is $1$, three cards appear on the right: **Expected Value E(X)**, the sum of the contributions; **Variance Var(X)**, the probability-weighted average of the squared distances from $E(X)$; and **Standard Deviation σ**, the square root of the variance, in the same units as the values. All three show four decimals. For the sample table the cards read $45.0000$, $1825.0000$ and $42.7200$; changing the third value from $-20$ to $-40$ moves them to $40.0000$, $2550.0000$ and $50.4975$, because the loss row now pulls the mean down by $10$ instead of $5$ and sits further from it.

If a probability is edited so that the total leaves $1$, the cards disappear and the results area shows "Enter valid outcomes with probabilities that sum to 1.0 to see results" until the table is valid again. The sign of $E(X)$ is the quick reading: positive means an average gain per play, negative an average loss, zero a fair game.

The box under the calculator, **Understanding Expected Value**, restates the definition, the reading of the sign, the common uses and the meaning of variance and standard deviation; its link opens the table section below. The formula itself is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Switching Between the Three Views`,
        content: `Above the chart are three tabs; they change only what is drawn, not the numbers. **Probability Distribution** (the default) draws one bar per outcome, with height equal to its probability, on a value axis, and marks where $E(X)$ falls among the bars: for the sample table the bars stand at $-20$, $50$ and $100$ and the mark at $45$. **Calculation Breakdown** lists the formula $E(X) = Σ(\\text{value} × \\text{probability})$ and one line per row, such as $100 × 0.25 = 25.0000$, $50 × 0.5 = 25.0000$ and $-20 × 0.25 = -5.0000$, then the total $45.0000$. **Contributions** draws each row's product as a bar, so a large value with a small probability and a small value with a large probability can be compared directly.

Use the breakdown when checking homework by hand, the distribution to see how spread out the outcomes are, and the contributions to see which rows drive the result. Editing the table while a tab is open redraws that tab at once. The meaning of each product and of their sum is set out in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/direct-data" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 6 sections (3 usage with demos), lesson links to expected-value, variance, random-variables.
         Before editing this view, read the instructions and re-run its checks (--view direct-data); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'What does the calculator need before it shows a result?',
          answer: 'At least one row with a value and a probability, and probabilities that add up to 1 (a difference below 0.001 is accepted). Until then the results area shows a placeholder and the total under the table is marked.'
        },
        obj2: {
          question: 'How is the expected value computed?',
          answer: 'Each value is multiplied by its probability and the products are added. For the values 0, 10 and 50 with probabilities 0.5, 0.3 and 0.2 the expected value is 0 + 3 + 10 = 13.'
        },
        obj3: {
          question: 'What are the variance and standard deviation shown next to it?',
          answer: 'The variance is the probability-weighted average of the squared distances from the expected value, and the standard deviation is its square root. For the sample table (100, 50, -20 with 0.25, 0.5, 0.25) the expected value is 45, the variance 1825 and the standard deviation about 42.72.'
        },
        obj4: {
          question: 'Can a value be negative?',
          answer: 'Yes. A loss is entered as a negative value, such as -20. Probabilities, on the other hand, are kept between 0 and 1: a probability typed outside that range is clamped to it.'
        },
        obj5: {
          question: 'Is there a Calculate or Reset button?',
          answer: 'No. The results update as you type. A row is removed with the × at its end, a row is added with + Add Outcome, and reloading the page restores the sample table.'
        },
        obj6: {
          question: 'What does the Calculation Breakdown tab show?',
          answer: 'One line per row with value × probability and its product, then the total, which is the expected value. The Probability Distribution tab draws the probabilities as bars and the Contributions tab draws the products.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Raw Data', link: '/probability/calculators/expected-value/raw-data' },
            { title: 'Grouped Data', link: '/probability/calculators/expected-value/grouped-data' },
            { title: 'Discrete Uniform', link: '/probability/calculators/expected-value/discrete-uniform' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' },
            { title: 'Normal', link: '/probability/calculators/expected-value/normal' }
          ]
        }
      ],
      instructions: [
        `Type each outcome's **Value** and its **Probability** (between $0$ and $1$) in the table; the **Contribution** column shows value × probability. [Learn more about the table](!#entering-outcomes-and-probabilities)`,
        `Click **+ Add Outcome** for another row, or **×** to remove one; **Total Probability** must read $1.0000$. [Learn more about rows and the total](!#entering-outcomes-and-probabilities)`,
        `The results update as you type: **Expected Value E(X)**, **Variance Var(X)** and **Standard Deviation σ** appear once the probabilities add up to $1$. [Learn more about the results](!#reading-the-results-and-the-explanation-box)`,
        `Use the tabs **Probability Distribution**, **Calculation Breakdown** and **Contributions** for a chart, the sum step by step, or each outcome's share. [Learn more about the views](!#switching-between-the-three-views)`,
        `The box under the calculator explains expected value, the reading of its sign and the spread measures. [Learn more about the box](!#reading-the-results-and-the-explanation-box)`,
        `A red message appears when the probabilities do not add up to $1$ or a row is incomplete; there is no Calculate or Reset button. [Learn more about messages](!#entering-outcomes-and-probabilities)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value',
          content: `**What is Expected Value?** Expected value represents the average outcome you would expect over many trials. It is a weighted average where each outcome is weighted by its probability of occurring.

**Interpretation.** **Positive E(X):** on average, you gain value. **Negative E(X):** on average, you lose value. **E(X) = 0:** a fair game, neither gain nor loss on average.

**Common Applications.** **Games:** determining if a game is favorable. **Investments:** comparing expected returns. **Insurance:** calculating fair premiums. **Decision Making:** choosing between uncertain options.

**Variance and Standard Deviation.** While expected value tells you the average outcome, **variance** and **standard deviation** measure how spread out the outcomes are. **Low variance:** outcomes are clustered near the expected value. **High variance:** outcomes are more spread out (higher risk). **Standard deviation (σ):** square root of variance, in the same units as the outcomes. [Learn more about expected value](!#expected-value-from-a-probability-table)`
        }
      },
      demos: {
        'entering-outcomes-and-probabilities': {
          title: 'The game table, a fourth row, a wrong total',
          scale: 0.4,
          minHeight: 479,
          script: [
            { say: 'TYPE the game: 0, 10, 50 with 0.5, 0.3, 0.2\nE(X) = 13.0000.', at: 'tr' },
            { set: { css: 'input[placeholder="Value"]', nth: 0 }, value: '0' },
            { set: { css: 'input[placeholder="0.0 - 1.0"]', nth: 0 }, value: '0.5' },
            { set: { css: 'input[placeholder="Value"]', nth: 1 }, value: '10' },
            { set: { css: 'input[placeholder="0.0 - 1.0"]', nth: 1 }, value: '0.3' },
            { set: { css: 'input[placeholder="Value"]', nth: 2 }, value: '50' },
            { set: { css: 'input[placeholder="0.0 - 1.0"]', nth: 2 }, value: '0.2' },
            { wait: 2800 },
            { say: 'CLICK + Add Outcome\nA fourth row with 0 and 0; the total stays 1.0000.', at: 'tr' },
            { click: { button: '+ Add Outcome' } },
            { wait: 2400 },
            { say: 'TYPE 0.2 in the new row\nTotal 1.2000: the warning shows and the results hide.', at: 'tr' },
            { set: { css: 'input[placeholder="0.0 - 1.0"]', nth: 3 }, value: '0.2' },
            { wait: 2800 },
            { say: 'CLICK × on the fourth row\nTotal 1.0000 again; the results are back.', at: 'tr' },
            { click: { button: '×', exact: true, nth: 3 } },
            { wait: 2600 },
          ],
        },
        'reading-the-results-and-the-explanation-box': {
          title: 'Three cards, then a placeholder',
          scale: 0.4,
          minHeight: 479,
          script: [
            { say: 'TYPE -40 instead of -20\nE(X) = 40.0000, Var(X) = 2550.0000, σ = 50.4975.', at: 'tr' },
            { set: { css: 'input[placeholder="Value"]', nth: 2 }, value: '-40' },
            { wait: 3000 },
            { say: 'TYPE 0.25 in the second row\nTotal 0.7500: the cards give way to the placeholder.', at: 'tr' },
            { set: { css: 'input[placeholder="0.0 - 1.0"]', nth: 1 }, value: '0.25' },
            { wait: 2800 },
            { say: 'TYPE 0.5 again\nThe three cards return.', at: 'tr' },
            { set: { css: 'input[placeholder="0.0 - 1.0"]', nth: 1 }, value: '0.5' },
            { wait: 2600 },
          ],
        },
        'switching-between-the-three-views': {
          title: 'Breakdown, contributions, distribution',
          scale: 0.4,
          minHeight: 479,
          script: [
            { say: 'CLICK Calculation Breakdown\n100 × 0.25 = 25, 50 × 0.5 = 25, -20 × 0.25 = -5; total 45.', at: 'tr' },
            { click: { button: 'Calculation Breakdown' } },
            { wait: 3000 },
            { say: 'CLICK Contributions\nOne bar per product.', at: 'tr' },
            { click: { button: 'Contributions' } },
            { wait: 2600 },
            { say: 'CLICK Probability Distribution\nBars by probability, with the mark at 45.', at: 'tr' },
            { click: { button: 'Probability Distribution' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'entering-outcomes-and-probabilities', key: 'obj4', demo: 'entering-outcomes-and-probabilities' },
        { id: 'reading-the-results-and-the-explanation-box', key: 'obj5', demo: 'reading-the-results-and-the-explanation-box' },
        { id: 'switching-between-the-three-views', key: 'obj6', demo: 'switching-between-the-three-views' },
        { id: 'expected-value-from-a-probability-table', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'raw-data': {
      componentName: 'RawDataExpectedValueCalculator',
      title: 'Expected Value Calculator - Raw Data | Learn Math Class',
      description: 'Calculate expected value from a list of raw data values. Enter your dataset to compute the mean with detailed calculations.',
      keywords: ['expected value calculator', 'raw data', 'dataset mean', 'average calculator', 'data analysis'],
      h1Title: 'Expected Value Calculator - Raw Data',
      url: '/probability/calculators/expected-value/raw-data',
      name: 'Expected Value Calculator - Raw Data',
      sectionsContent: {
      obj1: {
        title: `Expected Value from Raw Data`,
        content: `When the data is a plain list of observed values, each value is treated as equally likely. The expected value is then the arithmetic mean: the sum of the values divided by how many there are. Repeated values are simply counted each time they appear, which gives them more weight automatically.

This is the empirical version of the [expected value](!/probability/expected-value). It describes the center of the data you have collected, and it estimates the expected value of the process that produced the data. The more values in the list, the closer this estimate tends to be to the true long-run average.

The frequency view is the formula of [expected value for discrete random variables](!/probability/expected-value#discrete); why a long list settles near the true value is [the law of large numbers](!/probability/large-numbers-law#2), stated in [formal statement of the law of large numbers](!/probability/large-numbers-law#1).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For data values $x_1, x_2, \\ldots, x_n$:

$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$

Example: the scores $4, 7, 7, 8, 9$ have sum $4 + 7 + 7 + 8 + 9 = 35$ and $n = 5$, so

$$\\bar{x} = \\frac{35}{5} = 7$$

The same result comes from a frequency view: the value $7$ appears twice out of five, so it gets weight $\\frac{2}{5}$, while each other value gets weight $\\frac{1}{5}$. Then $4 \\cdot \\frac{1}{5} + 7 \\cdot \\frac{2}{5} + 8 \\cdot \\frac{1}{5} + 9 \\cdot \\frac{1}{5} = 7$.

The steps are listed in [how to calculate expected value](!/probability/expected-value#calculate) and more lists are worked in [examples of expected value](!/probability/expected-value#examples).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `The mean of raw data is the most common summary in statistics. It gives the average test score of a class, the average daily temperature over a month, or the average time customers wait in a queue.

The mean is sensitive to extreme values. In the list $2, 3, 3, 4, 38$ the mean is $10$, although four of the five values are below $5$. When a few large values dominate, the [median](!/probability/median) often describes a typical value better.

The three centres are compared in [median, mean, and mode compared](!/probability/median#5); the spread the calculator reports beside the mean is defined in [variance for discrete random variables](!/probability/variance#discrete) and [variance vs standard deviation](!/probability/variance#sd).`,
        link: '',
      },
      obj4: {
        title: `Entering the Data`,
        content: `The **Enter Raw Data** box on the left takes the whole list at once: type or paste the values separated by commas, spaces or line breaks, in any mix, so $4, 7, 7, 8, 9$ and $4$ $7$ $7$ $8$ $9$ on separate lines read the same. Every value counts each time it appears; repeats are what give a value more weight. The box opens with the sample list $5, 7, 5, 9, 5, 8, 7, 5, 6$, nine values with mean $6.3333$.

Under the box, **Valid Data Points** counts the numbers read and **Unique Values** the distinct ones; for $4, 7, 7, 8, 9$ they read $5$ and $4$. An entry that is not a number, such as the word abc, is counted under **Invalid Entries**, named in a red warning "⚠ Invalid values detected: abc", and blocks the results: the results area then says "Remove invalid entries to see results" until the entry is deleted. There is no Calculate button; everything recomputes as you type.

**Reset**, at the top right of the box, empties it and returns the chart tab to Probability Distribution; the results area then shows "Enter valid numeric data to see results" until new values are typed. Typing $2$ $3$ $3$ $4$ $38$ with spaces gives the mean $10$, the example of the extreme-value effect below. Why the plain average is an expected value is explained in [expected value from raw data](!#expected-value-from-raw-data).`,
        link: '',
      },
      obj5: {
        title: `Reading the Frequency Table and the Results`,
        content: `As soon as the list is valid, a **Frequency Distribution** table appears under the data box with one row per distinct value, sorted from smallest to largest: the value, its **Count** and its **Probability**, count divided by $n$ to four decimals, with a total row showing $n$ and $1.0000$. For $4, 7, 7, 8, 9$ the rows read $4$: $1$, $0.2000$; $7$: $2$, $0.4000$; $8$: $1$, $0.2000$; $9$: $1$, $0.2000$.

On the right, three cards show **Expected Value E(X)**, marked (Mean); **Variance Var(X)**, the probability-weighted average of the squared distances from the mean; and **Standard Deviation σ**, its square root. For $4, 7, 7, 8, 9$ they read $7.0000$, $2.8000$ and $1.6733$. Change the last value to $19$ and they move to $9.0000$, $26.8000$ and $5.1769$: one far value shifts the mean by $2$ and multiplies the spread. A list of equal values, $7, 7, 7, 7$, has variance $0$. The variance divides by $n$, because each listed value is treated as an outcome with probability $\\frac{1}{n}$; a sample variance with $n - 1$ would read $3.5$ for the first list.

The box under the calculator, **Understanding Raw Data Expected Value**, restates the method in three steps and lists where it is used; its link opens the first section below. The formula behind the cards is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Switching Between the Three Views`,
        content: `Above the chart are three tabs; they change the drawing, not the numbers. **Probability Distribution** (the default) draws one bar per distinct value with height equal to its probability and marks the mean among the bars: for the sample list the tallest bar is at $5$, with probability $0.4444$, and the mark sits at $6.33$. **Calculation Breakdown** writes the formula $E(X) = Σ(\\text{value} × \\text{probability}) = (Σ \\text{values}) / n$, one line per distinct value such as $5 × 0.4444 = 2.2222$, the total $6.3333$, and an **Alternative** line that adds all nine values and divides by $9$, so the weighted sum and the plain average can be seen to agree. **Contributions** draws each value's product as a bar, so the values that drive the mean stand out.

Use the breakdown to check homework, the distribution to see how the values spread, and the contributions to see which values matter most. Editing the list while a tab is open redraws that tab at once. The two ways of writing the same sum are explained in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/raw-data" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 6 sections (3 usage with demos), lesson links to expected-value, large-numbers-law, median, variance.
         Before editing this view, read the instructions and re-run its checks (--view raw-data); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'How is the expected value of raw data computed?',
          answer: 'Each distinct value is weighted by how often it appears: probability = count divided by n, then E(X) = the sum of value times probability. This equals the plain average: for 4, 7, 7, 8, 9 both give 35 divided by 5 = 7.'
        },
        obj2: {
          question: 'Which separators does the data box accept?',
          answer: 'Commas, spaces and line breaks, in any mix. The lists 5, 7, 5 and 5 7 5 give the same result.'
        },
        obj3: {
          question: 'What happens if I type a word or a stray character?',
          answer: 'It is counted under Invalid Entries, a red warning names it, and the results area waits until it is removed. The valid numbers around it are still counted under Valid Data Points.'
        },
        obj4: {
          question: 'Why does the variance divide by n and not n - 1?',
          answer: 'The calculator treats the list as the full set of outcomes, each with probability 1/n, so Var(X) is the probability-weighted average of the squared distances from the mean. For 4, 7, 7, 8, 9 this gives 2.8 and a standard deviation of about 1.6733; a sample variance with n - 1 would give 3.5.'
        },
        obj5: {
          question: 'Does the order of the values matter?',
          answer: 'No. The mean, the variance and the frequency table are the same for any order; the table itself is sorted by value.'
        },
        obj6: {
          question: 'What does Reset do?',
          answer: 'It empties the data box and returns the chart to the Probability Distribution tab. The results area then shows a placeholder until new values are typed.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Grouped Data', link: '/probability/calculators/expected-value/grouped-data' },
            { title: 'Discrete Uniform', link: '/probability/calculators/expected-value/discrete-uniform' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' },
            { title: 'Normal', link: '/probability/calculators/expected-value/normal' }
          ]
        }
      ],
      instructions: [
        `Type or paste your values in the **Enter Raw Data** box, separated by commas, spaces or line breaks. [Learn more about the data box](!#entering-the-data)`,
        `Click **Reset**, at the top right of the box, to empty it. [Learn more about Reset](!#entering-the-data)`,
        `Under the box, **Valid Data Points**, **Invalid Entries** and **Unique Values** count what was read; an entry that is not a number is named in a red warning. [Learn more about the counts](!#entering-the-data)`,
        `The **Frequency Distribution** table lists each distinct value with its count and its probability, count divided by $n$. [Learn more about the table](!#reading-the-frequency-table-and-the-results)`,
        `The cards on the right show **Expected Value E(X)**, the mean, with **Variance Var(X)** and **Standard Deviation σ**; the box under the calculator explains the method. [Learn more about the results](!#reading-the-frequency-table-and-the-results)`,
        `Use the tabs **Probability Distribution**, **Calculation Breakdown** and **Contributions** for a chart, the weighted sum with the plain-average check, or each value's share. [Learn more about the views](!#switching-between-the-three-views)`
      ],
      explanations: {
        main: {
          title: 'Understanding Raw Data Expected Value',
          content: `**What is This Method?** When you have raw observations (actual data points), the expected value is simply the arithmetic mean. The calculator counts how often each value appears, derives probabilities from frequencies, and computes E(X) = average of all values.

**How It Works.** **Step 1:** count the frequency of each unique value. **Step 2:** calculate probability = count / total. **Step 3:** compute E(X) = Σ(value × probability). **Result:** the same as the arithmetic mean.

**When to Use This Method.** **Surveys:** responses on a scale (1-5 ratings). **Experiments:** recorded measurements or counts. **Sample data:** historical observations. **Real-world data:** any dataset of numeric values.

**Example Applications.** **Test scores:** average performance in a class. **Sales data:** expected daily sales based on history. **Dice rolls:** experimental probability from trials. **Survey responses:** average rating or response. [Learn more about expected value from raw data](!#expected-value-from-raw-data)`
        }
      },
      demos: {
        'entering-the-data': {
          title: 'A list, a bad entry, Reset, spaces',
          scale: 0.4,
          minHeight: 608,
          script: [
            { say: 'TYPE 4, 7, 7, 8, 9\nValid Data Points 5, Unique Values 4, E(X) = 7.0000.', at: 'tr' },
            { set: 'textarea', value: '4, 7, 7, 8, 9' },
            { wait: 2800 },
            { say: 'TYPE abc at the end\nInvalid Entries 1, a red warning, and the results wait.', at: 'tr' },
            { set: 'textarea', value: '4, 7, 7, 8, 9, abc' },
            { wait: 2800 },
            { say: 'CLICK Reset\nThe box is empty; the results area shows the placeholder.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
            { say: 'TYPE 2 3 3 4 38 with spaces\nE(X) = 10.0000: one far value pulls the mean up.', at: 'tr' },
            { set: 'textarea', value: '2 3 3 4 38' },
            { wait: 2800 },
          ],
        },
        'reading-the-frequency-table-and-the-results': {
          title: 'Frequency rows and the three cards',
          scale: 0.4,
          minHeight: 608,
          script: [
            { say: 'TYPE 4, 7, 7, 8, 9\nRows 4, 7, 8, 9 with 7 counted twice (0.4000); E(X) = 7.0000, Var = 2.8000, σ = 1.6733.', at: 'tr' },
            { set: 'textarea', value: '4, 7, 7, 8, 9' },
            { wait: 3200 },
            { say: 'TYPE 19 instead of 9\nE(X) = 9.0000, Var = 26.8000, σ = 5.1769.', at: 'tr' },
            { set: 'textarea', value: '4, 7, 7, 8, 19' },
            { wait: 3000 },
            { say: 'TYPE 7, 7, 7, 7\nOne row with probability 1.0000; variance 0.', at: 'tr' },
            { set: 'textarea', value: '7, 7, 7, 7' },
            { wait: 2800 },
          ],
        },
        'switching-between-the-three-views': {
          title: 'Breakdown, contributions, distribution',
          scale: 0.4,
          minHeight: 608,
          script: [
            { say: 'CLICK Calculation Breakdown\nOne line per distinct value, the total 6.3333, and the Alternative: the nine values added and divided by 9.', at: 'tr' },
            { click: { button: 'Calculation Breakdown' } },
            { wait: 3200 },
            { say: 'CLICK Contributions\nOne bar per product.', at: 'tr' },
            { click: { button: 'Contributions' } },
            { wait: 2600 },
            { say: 'CLICK Probability Distribution\nBars by probability; the tallest at 5, the mark at 6.33.', at: 'tr' },
            { click: { button: 'Probability Distribution' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'entering-the-data', key: 'obj4', demo: 'entering-the-data' },
        { id: 'reading-the-frequency-table-and-the-results', key: 'obj5', demo: 'reading-the-frequency-table-and-the-results' },
        { id: 'switching-between-the-three-views', key: 'obj6', demo: 'switching-between-the-three-views' },
        { id: 'expected-value-from-raw-data', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'grouped-data': {
      componentName: 'GroupedDataExpectedValueCalculator',
      title: 'Expected Value Calculator - Grouped Data | Learn Math Class',
      description: 'Calculate expected value from grouped frequency data. Enter class intervals and frequencies to compute the mean with step-by-step solutions.',
      keywords: ['expected value calculator', 'grouped data', 'frequency distribution', 'class intervals', 'grouped mean'],
      h1Title: 'Expected Value Calculator - Grouped Data',
      url: '/probability/calculators/expected-value/grouped-data',
      name: 'Expected Value Calculator - Grouped Data',
      sectionsContent: {
      obj1: {
        title: `Expected Value from Grouped Data`,
        content: `Grouped data gives class intervals and how many observations fall in each, but not the exact values. To estimate the mean, every observation in a class is replaced by the class midpoint, and each midpoint is weighted by the class frequency.

The result is an estimate, not the exact mean. It is accurate when the values inside each class are spread fairly evenly around the midpoint. Narrow classes give a better estimate than wide ones, because the midpoint is then closer to every value in the class.

The weighting rule is the formula of [expected value for discrete random variables](!/probability/expected-value#discrete), with the midpoints as the values; the idea of a weighted average is built up in [the intuition behind expected value](!/probability/expected-value#intuition).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `With class midpoints $m_i$ and frequencies $f_i$:

$$\\bar{x} \\approx \\frac{\\sum f_i \\, m_i}{\\sum f_i}$$

Example: test scores grouped as $0$–$10$ (frequency $2$), $10$–$20$ (frequency $5$) and $20$–$30$ (frequency $3$). The midpoints are $5$, $15$ and $25$. Then

$$\\sum f_i m_i = 2(5) + 5(15) + 3(25) = 10 + 75 + 75 = 160$$

and $\\sum f_i = 10$, so the estimated mean is $\\frac{160}{10} = 16$.

The same steps, value by value, are in [how to calculate expected value](!/probability/expected-value#calculate) and [examples of expected value](!/probability/expected-value#examples).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Grouped data is common when results are published as frequency tables instead of raw lists: income bands in a census, age groups in a survey, or ranges of test scores. Histograms show the same information as bars.

The midpoint method is the standard way to estimate the mean from such tables. When the last class is open-ended, such as "50 or more", it has no midpoint, and an assumed upper limit has to be chosen before the mean can be estimated.

The spread the calculator reports beside the mean is defined in [variance for discrete random variables](!/probability/variance#discrete) and [variance vs standard deviation](!/probability/variance#sd); for a table with a long tail the centre is often better described by the [median](!/probability/median#5).`,
        link: '',
      },
      obj4: {
        title: `Entering Ranges and Frequencies`,
        content: `The table on the left holds one row per class: **Range Start** and **Range End** in the boxes marked Min and Max, and the class **Frequency** in the box marked Count. The **Midpoint** column shows $(\\text{start} + \\text{end}) / 2$ as soon as the range is valid, and a dash until then. A row counts only when its end is greater than its start and its frequency is greater than $0$; a row that fails is drawn with red borders and left out. **Valid Groups** under the table tells how many rows count, and **Total Frequency** adds their frequencies. If two counted rows overlap, an amber note above those totals names them ("Ranges 1 and 2 overlap, so some values are counted twice"); rows typed out of order get a note too, though the result is the same.

Click **+ Add Range** for another row; it starts with $0$, $0$, $0$ and is ignored until you fill it. The **×** at the end of a row removes it; the last remaining row cannot be removed. **Reset**, at the top right, does not empty the table: it restores the sample classes $10$–$20$ (frequency $5$), $20$–$30$ ($12$) and $30$–$40$ ($8$), whose estimated mean is $26.2$. There is no Calculate button; everything recomputes as you type.

For the test scores of the worked example, $0$–$10$ ($2$), $10$–$20$ ($5$) and $20$–$30$ ($3$), the mean is $16.0000$; adding a fourth class $30$–$40$ with frequency $2$ raises the total to $12$ and the mean to $19.1667$. Why midpoints stand in for the values is explained in [expected value from grouped data](!#expected-value-from-grouped-data).`,
        link: '',
      },
      obj5: {
        title: `Reading the Group Summary and the Results`,
        content: `When at least one row is valid, a **Group Summary** table appears under the input table with one line per counted class: the range, its midpoint to two decimals, its frequency and its probability, frequency divided by the total to four decimals, with a total line showing the total frequency and $1.0000$. For the sample classes the probabilities are $0.2000$, $0.4800$ and $0.3200$.

On the right, three cards show **Expected Value E(X)**, marked (Weighted Mean); **Variance Var(X)**, the probability-weighted average of the squared distances of the midpoints from the mean; and **Standard Deviation σ**, its square root. For the sample classes they read $26.2000$, $50.5600$ and $7.1106$. Change the last class to $30$–$50$ and the midpoint moves from $35$ to $40$, so the cards move to $27.8000$, $84.1600$ and $9.1739$. Make a row invalid, for instance by typing an end below its start, and it drops out of every number: with only the first two sample classes the mean is $22.0588$ over a total of $17$. When no row is valid the results area shows "Enter valid ranges with frequencies to see results".

The box under the calculator, **Understanding Grouped Data Expected Value**, restates the method in three steps and lists where grouped tables come from; its link opens the first section below. The formula behind the cards is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Switching Between the Three Views`,
        content: `Above the chart are three tabs; they change the drawing, not the numbers. **Probability Distribution** (the default) draws one bar per class at its midpoint, with height equal to the class probability, and marks the mean among the bars: for the sample classes the tallest bar stands at $25$ and the mark at $26.2$. **Calculation Breakdown** writes the formula $E(X) = Σ(\\text{midpoint} × \\text{probability})$, one line per class such as Range $10$-$20$: $15.00 × 0.2000 = 3.0000$, the total $26.2000$, and a note that the midpoint is the average of the two ends. **Contributions** draws each class's product as a bar, so the classes that drive the mean stand out.

Use the breakdown to check a homework table, the distribution to see where the classes sit, and the contributions to see which classes matter most. Editing a row while a tab is open redraws that tab at once; Reset returns to the Probability Distribution tab. The products the breakdown lists are the terms of the sum in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/grouped-data" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 6 sections (3 usage with demos), lesson links to expected-value, variance, median.
         Before editing this view, read the instructions and re-run its checks (--view grouped-data); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'How is the mean of grouped data estimated?',
          answer: 'Each class is replaced by its midpoint, the midpoint is multiplied by the class probability (frequency divided by the total frequency), and the products are added. For the classes 0-10, 10-20 and 20-30 with frequencies 2, 5 and 3 the estimate is 16.'
        },
        obj2: {
          question: 'Why is the result only an estimate?',
          answer: 'The exact values inside each class are unknown, so the midpoint stands for all of them. The estimate is close when the values are spread evenly inside each class, and narrow classes make it closer.'
        },
        obj3: {
          question: 'What makes a row invalid?',
          answer: 'A range end that is not greater than its start, or a frequency that is blank or 0. Such a row is drawn with red borders, left out of every number, and not counted under Valid Groups.'
        },
        obj4: {
          question: 'What does Reset do?',
          answer: 'It restores the sample table, the classes 10-20, 20-30 and 30-40 with frequencies 5, 12 and 8, whose estimated mean is 26.2, and returns the chart to the Probability Distribution tab.'
        },
        obj5: {
          question: 'How are the variance and standard deviation computed?',
          answer: 'The variance is the probability-weighted average of the squared distances of the midpoints from the mean, and the standard deviation is its square root. For the sample table they are 50.56 and about 7.1106.'
        },
        obj6: {
          question: 'Do the ranges have to be in order, or of equal width?',
          answer: 'No. Each row is weighted on its own by its frequency, so the order of the rows and their widths do not matter to the calculator. It does not check whether ranges overlap; that is up to you.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Raw Data', link: '/probability/calculators/expected-value/raw-data' },
            { title: 'Discrete Uniform', link: '/probability/calculators/expected-value/discrete-uniform' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' },
            { title: 'Normal', link: '/probability/calculators/expected-value/normal' }
          ]
        }
      ],
      instructions: [
        `Type each class's **Range Start**, **Range End** and **Frequency** in one row; the **Midpoint** column fills in as soon as the end is above the start. [Learn more about the rows](!#entering-ranges-and-frequencies)`,
        `Click **+ Add Range** for another row, or **×** to remove one; **Valid Groups** and **Total Frequency** under the table count what is used. [Learn more about rows and counts](!#entering-ranges-and-frequencies)`,
        `Click **Reset** to restore the sample classes. [Learn more about Reset](!#entering-ranges-and-frequencies)`,
        `The **Group Summary** table lists each counted class with its midpoint, frequency and probability. [Learn more about the summary](!#reading-the-group-summary-and-the-results)`,
        `The cards on the right show **Expected Value E(X)**, the weighted mean, with **Variance Var(X)** and **Standard Deviation σ**; the box under the calculator explains the method. [Learn more about the results](!#reading-the-group-summary-and-the-results)`,
        `Use the tabs **Probability Distribution**, **Calculation Breakdown** and **Contributions** for a chart, the sum class by class, or each class's share. [Learn more about the views](!#switching-between-the-three-views)`
      ],
      explanations: {
        main: {
          title: 'Understanding Grouped Data Expected Value',
          content: `**What is This Method?** When data is organized into ranges or bins (like a histogram), we use the midpoint of each range as the representative value. The expected value is the weighted average of these midpoints, weighted by the frequency (or probability) of each range.

**How It Works.** **Step 1:** calculate midpoint = (min + max) / 2. **Step 2:** calculate probability = frequency / total. **Step 3:** compute E(X) = Σ(midpoint × probability). **Result:** the weighted average of the midpoints.

**When to Use This Method.** **Histogram data:** pre-binned frequency distributions. **Survey brackets:** age ranges, income ranges, etc. **Grouped statistics:** published data in ranges. **Census data:** population by age or income brackets.

**Example Applications.** **Age analysis:** average age from age brackets. **Income studies:** expected income from salary ranges. **Test scores:** average from grade ranges (0-50, 50-70, etc.). **Response times:** average from time intervals. [Learn more about expected value from grouped data](!#expected-value-from-grouped-data)`
        }
      },
      demos: {
        'entering-ranges-and-frequencies': {
          title: 'Three classes, a fourth row, remove it',
          scale: 0.4,
          minHeight: 597,
          script: [
            { say: 'TYPE the scores: 0-10 (2), 10-20 (5), 20-30 (3)\nMidpoints 5, 15, 25; E(X) = 16.0000.', at: 'tr' },
            { set: { css: 'input[placeholder="Min"]', nth: 0 }, value: '0' },
            { set: { css: 'input[placeholder="Max"]', nth: 0 }, value: '10' },
            { set: { css: 'input[placeholder="Count"]', nth: 0 }, value: '2' },
            { set: { css: 'input[placeholder="Min"]', nth: 1 }, value: '10' },
            { set: { css: 'input[placeholder="Max"]', nth: 1 }, value: '20' },
            { set: { css: 'input[placeholder="Count"]', nth: 1 }, value: '5' },
            { set: { css: 'input[placeholder="Min"]', nth: 2 }, value: '20' },
            { set: { css: 'input[placeholder="Max"]', nth: 2 }, value: '30' },
            { set: { css: 'input[placeholder="Count"]', nth: 2 }, value: '3' },
            { wait: 3000 },
            { say: 'CLICK + Add Range\nA fourth row with 0, 0, 0; it is ignored, Valid Groups stays 3.', at: 'tr' },
            { click: { button: '+ Add Range' } },
            { wait: 2400 },
            { say: 'TYPE 30, 40, 2 in the new row\nValid Groups 4, Total Frequency 12, E(X) = 19.1667.', at: 'tr' },
            { set: { css: 'input[placeholder="Min"]', nth: 3 }, value: '30' },
            { set: { css: 'input[placeholder="Max"]', nth: 3 }, value: '40' },
            { set: { css: 'input[placeholder="Count"]', nth: 3 }, value: '2' },
            { wait: 3000 },
            { say: 'CLICK × on the fourth row\nBack to three classes and 16.0000.', at: 'tr' },
            { click: { button: '×', exact: true, nth: 3 } },
            { wait: 2600 },
          ],
        },
        'reading-the-group-summary-and-the-results': {
          title: 'Summary rows, the cards, Reset',
          scale: 0.4,
          minHeight: 597,
          script: [
            { say: 'TYPE 50 as the end of the last class\nMidpoint 40.00; E(X) = 27.8000, Var = 84.1600, σ = 9.1739.', at: 'tr' },
            { set: { css: 'input[placeholder="Max"]', nth: 2 }, value: '50' },
            { wait: 3200 },
            { say: 'TYPE 5 as that end\nEnd below start: the row drops out; Valid Groups 2, total 17, E(X) = 22.0588.', at: 'tr' },
            { set: { css: 'input[placeholder="Max"]', nth: 2 }, value: '5' },
            { wait: 3200 },
            { say: 'CLICK Reset\nThe sample classes return: 26.2000, 50.5600, 7.1106.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2800 },
          ],
        },
        'switching-between-the-three-views': {
          title: 'Breakdown, contributions, distribution',
          scale: 0.4,
          minHeight: 597,
          script: [
            { say: 'CLICK Calculation Breakdown\nRange 10-20: 15.00 × 0.2000 = 3.0000, and so on; total 26.2000.', at: 'tr' },
            { click: { button: 'Calculation Breakdown' } },
            { wait: 3200 },
            { say: 'CLICK Contributions\nOne bar per class product.', at: 'tr' },
            { click: { button: 'Contributions' } },
            { wait: 2600 },
            { say: 'CLICK Probability Distribution\nBars at the midpoints; the tallest at 25, the mark at 26.2.', at: 'tr' },
            { click: { button: 'Probability Distribution' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'entering-ranges-and-frequencies', key: 'obj4', demo: 'entering-ranges-and-frequencies' },
        { id: 'reading-the-group-summary-and-the-results', key: 'obj5', demo: 'reading-the-group-summary-and-the-results' },
        { id: 'switching-between-the-three-views', key: 'obj6', demo: 'switching-between-the-three-views' },
        { id: 'expected-value-from-grouped-data', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'discrete-uniform': {
      componentName: 'DiscreteUniformExpectedValueCalculator',
      title: 'Discrete Uniform Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for discrete uniform distribution. Enter minimum and maximum values to compute E[X] = (a + b) / 2 with formula explanation.',
      keywords: ['discrete uniform expected value', 'uniform distribution mean', 'expected value calculator', 'discrete uniform'],
      h1Title: 'Discrete Uniform Expected Value Calculator',
      url: '/probability/calculators/expected-value/discrete-uniform',
      name: 'Discrete Uniform Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Discrete Uniform Distribution`,
        content: `A [discrete uniform distribution](!/probability/distributions/discrete/uniform) gives equal probability to every integer from $a$ to $b$. There are $n = b - a + 1$ possible values, each with probability $\\frac{1}{n}$. A fair six-sided die is the standard example: the values $1$ to $6$ each have probability $\\frac{1}{6}$.

Because the values are evenly spaced and equally likely, the distribution is symmetric about the middle of the range. The expected value is therefore the midpoint of $a$ and $b$, even when that midpoint is not itself a possible value.

The two numbers that fix the distribution are described in [parameters](!/probability/distributions/discrete/uniform#2), the equal probabilities in [probability mass function and support](!/probability/distributions/discrete/uniform#4), and the midpoint result in [expected value (mean)](!/probability/distributions/discrete/uniform#6).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a discrete uniform distribution on the integers $a, a + 1, \\ldots, b$:

$$E[X] = \\frac{a + b}{2}$$

Example: for a fair die, $a = 1$ and $b = 6$, so

$$E[X] = \\frac{1 + 6}{2} = 3.5$$

The same value comes from the definition: $\\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{21}{6} = 3.5$. No single roll gives $3.5$; it is the long-run average of many rolls. The variance is $\\frac{n^2 - 1}{12}$, which for the die is $\\frac{35}{12} \\approx 2.92$.

The variance formula is derived in [variance and standard deviation](!/probability/distributions/discrete/uniform#7), and the mean formula sits with those of the other named distributions in [expected value formulas for specific distributions](!/probability/expected-value#individualdist).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `The discrete uniform distribution models any choice where all options are equally likely: rolling a fair die, drawing a ticket from a well-mixed set of numbered tickets, or a random number generator that picks an integer in a range.

It is also a starting point for checking fairness. If a die is rolled many times and the average is far from $3.5$, that is evidence the die is not fair.

More uses are listed in [applications and examples](!/probability/distributions/discrete/uniform#11); why a long run of rolls settles near $3.5$ is [the law of large numbers](!/probability/large-numbers-law#2).`,
        link: '',
      },
      obj4: {
        title: `Setting the Range a to b`,
        content: `Under **Parameters**, set **a** (Minimum Value) and **b** (Maximum Value) with the sliders or by typing whole numbers in the boxes; the slider for $a$ runs from $-50$ to $50$ and the one for $b$ from $-50$ to $100$, while the boxes take any integers. Decimals are cut to integers. As soon as $b \\ge a$, the box reports **Number of outcomes** $n = b - a + 1$ and **Probability each** $1/n$, the **Key Insight** line above the calculator restates $E(X)$, and, for $n \\le 20$, a **Contribution to E(X)** table lists every value with its probability and its product, ending in the sum.

If $b$ is below $a$, both boxes turn red, the message "⚠ Maximum value (b) must be ≥ minimum value (a)" appears and the right panel shows a placeholder until the range is fixed. For $a = 1$ and $b = 10$ the outcomes number $10$, each with probability $0.1$, and $E(X) = 5.5000$; for $1$ to $100$ the table is replaced by a note, because $100$ values are too many to list. There is no Calculate button; everything recomputes as you type.

**Reset**, at the top right of the parameter box, returns to the fair die, $a = 1$ and $b = 6$, closes the comparison and the extra statistics, and selects the first tab. Why all $n$ values share one probability is explained in [the discrete uniform distribution](!#the-discrete-uniform-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Expected Value Panel`,
        content: `The right panel is built around one number: **E(X)** in large type, with the formula $(a + b) / 2$ filled in and an interpretation line. Below it, **E(X) in Context** turns the number into a scenario: for the die, the average per roll and the expected total of $100$ or $1000$ rolls; for a range such as $10$ to $20$ it reads "Random selection" and shows the value in dollars; other ranges get a general reading. Click **▶ Additional Statistics** to open the variance $\\frac{n^2 - 1}{12}$, the standard deviation and the range: for $10$ to $20$, $n = 11$, the variance is $10.0000$ and the standard deviation $3.1623$; widening to $10$ to $30$ gives $n = 21$, variance $36.6667$ and standard deviation $6.0553$.

The box under the calculator, **Understanding Expected Value for Discrete Uniform Distribution**, explains what $E(X)$ means, how to read it, gives three stock examples and shows why the formula is the midpoint; its link opens the first section below. The derivation of the midpoint from the definition is in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Ranges`,
        content: `Click **▶ Compare with Different Values** under the parameter box to open an **Alternative a** and **Alternative b**. The panel then shows the current range with its $E(X)$, the alternative range with its $E(X)$, and the difference as a percentage of the current value, marked higher or lower with an arrow. The alternative opens as $2$ to $10$: against the die that is $E(X) = 6.00$, which is $71.4\\%$ higher than $3.50$. Change the alternative $b$ to $4$ and the alternative $E(X)$ becomes $3.00$, $14.3\\%$ lower; make the alternative $3$ to $4$ and the two ranges have the same expected value, $3.5$, which the panel says in words.

The comparison uses only the midpoints, so two ranges of very different width can tie, as $1$ to $6$ and $3$ to $4$ do; their variances, $2.9167$ and $0.25$, tell them apart. An alternative with $b$ below $a$ shows nothing. Why the midpoint alone fixes $E(X)$ is explained in [the discrete uniform distribution](!#the-discrete-uniform-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Three Tabs`,
        content: `Under the statistics are three tabs; they change what is drawn, not the numbers. **E(X) Visualization** (the default) draws one bar per value, all of the same height $1/n$, and marks the expected value in the middle; for more than $30$ values the chart gives way to a note that repeats the range, the probability $1/n$ and the midpoint. **How E(X) is Calculated** writes the formula and three steps: identify $a$ and $b$, apply $(a + b) / 2$, and compute, for the die $7 / 2 = 3.5000$, followed by a sentence on why the midpoint is the mean. **Individual Contributions**, shown only for $n \\le 20$, draws each value's product $k \\cdot \\frac{1}{n}$ as a bar, so the bars rise in a straight line from $a$ to $b$.

Use the calculation tab to check a homework answer, the visualization to see the flat shape, and the contributions to see how the larger values weigh more. Reset returns to the visualization tab. The steps of the calculation tab are the ones written out in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/discrete-uniform" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/discrete/uniform, expected-value, large-numbers-law.
         Before editing this view, read the instructions and re-run its checks (--view discrete-uniform); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'What values can a and b take?',
          answer: 'Whole numbers with b at least a. The sliders run from -50 to 50 for a and from -50 to 100 for b; the number boxes accept any integers. A decimal is cut to an integer.'
        },
        obj2: {
          question: 'What is the expected value of a fair die?',
          answer: '3.5, from (1 + 6) / 2. No roll shows 3.5; it is the average of many rolls, so 100 rolls total about 350.'
        },
        obj3: {
          question: 'Why is E(X) often not a possible value?',
          answer: 'It is the midpoint of a and b, which is a half-integer whenever a + b is odd. The range 1 to 10 has E(X) = 5.5 although only whole numbers can occur.'
        },
        obj4: {
          question: 'How are the variance and standard deviation computed?',
          answer: 'With n = b - a + 1 values, the variance is (n squared - 1) / 12 and the standard deviation is its square root. For the die, n = 6, the variance is 35 / 12, about 2.9167; for 1 to 10 it is 99 / 12 = 8.25.'
        },
        obj5: {
          question: 'Why do the contribution table and the third tab disappear for large ranges?',
          answer: 'The table and the Individual Contributions tab are shown only for up to 20 values, and the bar chart only for up to 30; above that the chart is replaced by a note with the range, the probability 1/n and the midpoint.'
        },
        obj6: {
          question: 'What does Compare with Different Values show?',
          answer: 'The expected value of the current range next to that of an alternative range, and their difference as a percentage of the current value, marked higher or lower, or the words Same expected value when they tie.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Raw Data', link: '/probability/calculators/expected-value/raw-data' },
            { title: 'Grouped Data', link: '/probability/calculators/expected-value/grouped-data' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Geometric', link: '/probability/calculators/expected-value/geometric' },
            { title: 'Continuous Uniform', link: '/probability/calculators/expected-value/continuous-uniform' }
          ]
        }
      ],
      instructions: [
        `Set **a** (minimum) and **b** (maximum) with the sliders or the number boxes; **Number of outcomes** and **Probability each** update at once. [Learn more about the range](!#setting-the-range-a-to-b)`,
        `If $b$ is below $a$, a red message appears and the results wait; click **Reset** to return to $1$–$6$. [Learn more about messages and Reset](!#setting-the-range-a-to-b)`,
        `The panel on the right shows $E(X)$ with its formula, examples in context, and **Additional Statistics** (variance, standard deviation, range) behind a toggle. [Learn more about the panel](!#reading-the-expected-value-panel)`,
        `Click **Compare with Different Values** to set an alternative $a$ and $b$ and see the two expected values side by side. [Learn more about comparing](!#comparing-two-ranges)`,
        `Use the tabs **E(X) Visualization**, **How E(X) is Calculated** and **Individual Contributions** for a chart, the steps, or each value's share. [Learn more about the tabs](!#the-three-tabs)`,
        `The box under the calculator explains what $E(X)$ means and why it is the midpoint. [Learn more about the box](!#reading-the-expected-value-panel)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value for Discrete Uniform Distribution',
          content: `**What Does E(X) Mean?** The expected value E(X) represents the average outcome you would get if you repeated this random experiment many times. For a discrete uniform distribution with equally likely outcomes, E(X) is simply the midpoint between the minimum and maximum values.

**Interpreting Your Result.** Over many trials, the outcomes average to E(X); it is the centre of the distribution; all values are equally likely, so E(X) is the midpoint.

**Real-World Examples.** **Fair die (1-6):** E(X) = 3.5 average per roll. **Random selection (1-100):** E(X) = 50.5 on average. **Lottery numbers (10-20):** E(X) = 15 expected value.

**Why E(X) = (a + b) / 2.** Because every outcome has equal probability (1/n), the expected value calculation simplifies to the arithmetic mean of all values. The sum of the integers from a to b equals n(a + b)/2, and dividing by n gives (a + b)/2. [Learn more about the discrete uniform distribution](!#the-discrete-uniform-distribution)`
        }
      },
      demos: {
        'setting-the-range-a-to-b': {
          title: '1 to 10, an invalid b, 1 to 100, Reset',
          scale: 0.4,
          minHeight: 668,
          script: [
            { say: 'TYPE 10 as b\n10 outcomes, probability 1/10 each; E(X) = 5.5000.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '10' },
            { wait: 2800 },
            { say: 'TYPE 0 as b\nb below a: red boxes, the warning, and a placeholder on the right.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0' },
            { wait: 2800 },
            { say: 'TYPE 100 as b\n100 outcomes: E(X) = 50.5000; the table gives way to a note.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '100' },
            { wait: 2800 },
            { say: 'CLICK Reset\nBack to the die: 1 to 6, E(X) = 3.5000.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-expected-value-panel': {
          title: '10 to 20, the extra statistics, 10 to 30',
          scale: 0.4,
          minHeight: 668,
          script: [
            { say: 'TYPE a = 10 and b = 20\nE(X) = 15.0000; the context reads Random selection.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '20' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '10' },
            { wait: 2800 },
            { say: 'CLICK Additional Statistics\nVariance 10.0000, standard deviation 3.1623, range [10, 20].', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 2800 },
            { say: 'TYPE 30 as b\n21 outcomes: E(X) = 20.0000, variance 36.6667, standard deviation 6.0553.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '30' },
            { wait: 3000 },
          ],
        },
        'comparing-two-ranges': {
          title: 'The die against 2 to 10, 2 to 4, 3 to 4',
          scale: 0.4,
          minHeight: 668,
          script: [
            { say: 'CLICK Compare with Different Values\nAlternative 2 to 10: E(X) = 6.00, 71.4% higher than 3.50.', at: 'tr' },
            { click: { button: '▶ Compare with Different Values' } },
            { wait: 3000 },
            { say: 'TYPE 4 as the alternative b\nAlternative E(X) = 3.00, 14.3% lower.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 3 }, value: '4' },
            { wait: 2800 },
            { say: 'TYPE 3 as the alternative a\n3 to 4 has the same expected value as 1 to 6.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 2 }, value: '3' },
            { wait: 2800 },
          ],
        },
        'the-three-tabs': {
          title: 'Calculation, contributions, visualization',
          scale: 0.4,
          minHeight: 668,
          script: [
            { say: 'CLICK How E(X) is Calculated\nThree steps ending in 7 / 2 = 3.5000.', at: 'tr' },
            { click: { button: 'How E(X) is Calculated' } },
            { wait: 3000 },
            { say: 'CLICK Individual Contributions\nBars k/6 rising from 1 to 6.', at: 'tr' },
            { click: { button: 'Individual Contributions' } },
            { wait: 2600 },
            { say: 'CLICK E(X) Visualization\nSix equal bars with the mark at 3.5.', at: 'tr' },
            { click: { button: 'E(X) Visualization' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'setting-the-range-a-to-b', key: 'obj4', demo: 'setting-the-range-a-to-b' },
        { id: 'reading-the-expected-value-panel', key: 'obj5', demo: 'reading-the-expected-value-panel' },
        { id: 'comparing-two-ranges', key: 'obj6', demo: 'comparing-two-ranges' },
        { id: 'the-three-tabs', key: 'obj7', demo: 'the-three-tabs' },
        { id: 'the-discrete-uniform-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'binomial': {
      componentName: 'BinomialExpectedValueCalculator',
      title: 'Binomial Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for binomial distribution. Enter n trials and probability p to compute E[X] = np with detailed formula breakdown.',
      keywords: ['binomial expected value', 'binomial mean calculator', 'np formula', 'binomial distribution'],
      h1Title: 'Binomial Expected Value Calculator',
      url: '/probability/calculators/expected-value/binomial',
      name: 'Binomial Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Binomial Distribution`,
        content: `The [binomial distribution](!/probability/distributions/discrete/binomial) counts the number of successes in $n$ independent trials, where each trial succeeds with the same probability $p$. The number of heads in $10$ coin tosses and the number of defective items in a batch of $50$ are typical examples.

Its expected value has a simple meaning: each trial contributes $p$ successes on average, and there are $n$ trials. This works because the count of successes is the sum of $n$ [indicator variables](!/probability/indicators), one per trial, each with expected value $p$.

The experiment is set out in [the probabilistic experiment behind the binomial distribution](!/probability/distributions/discrete/binomial#1), its two numbers in [parameters](!/probability/distributions/discrete/binomial#2), and the sum argument in [linearity of expectation and indicators](!/probability/indicators#5).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a binomial random variable with $n$ trials and success probability $p$:

$$E[X] = np$$

Example: a multiple-choice test has $20$ questions with $4$ options each. A student who guesses every answer succeeds on each question with $p = \\frac{1}{4}$. Then

$$E[X] = 20 \\cdot \\frac{1}{4} = 5$$

On average the student gets $5$ questions right. The variance is $np(1 - p) = 20 \\cdot \\frac{1}{4} \\cdot \\frac{3}{4} = 3.75$, so the standard deviation is about $1.94$.

The mean is derived in [expected value (mean)](!/probability/distributions/discrete/binomial#6) and the variance in [variance and standard deviation](!/probability/distributions/discrete/binomial#7); both sit in the table of [expected value formulas for specific distributions](!/probability/expected-value#individualdist).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Binomial models appear wherever a fixed number of independent yes-or-no trials is repeated. Quality control uses $np$ to predict how many defective items a batch will contain. In medicine, it gives the expected number of patients who respond to a treatment with a known success rate. In marketing, it estimates how many of $n$ contacted customers will buy.

The model requires the trials to be independent and $p$ to stay the same. When items are drawn without replacement from a small population, the hypergeometric distribution fits better.

More settings are listed in [applications and examples](!/probability/distributions/discrete/binomial#11); the without-replacement case is [the probabilistic experiment behind the hypergeometric distribution](!/probability/distributions/discrete/hypergeometric#1).`,
        link: '',
      },
      obj4: {
        title: `Setting n and p`,
        content: `Under **Parameters**, set **n** (Number of Trials) and **p** (Success Probability) with the sliders or by typing in the boxes; the slider for $n$ runs from $1$ to $100$ and the one for $p$ from $0$ to $1$ in steps of $0.01$, while the boxes take any whole number $n \\ge 1$ and any $p$ from $0$ to $1$. A $p$ typed above $1$ or below $0$ is clamped to that range, and a non-positive $n$ is ignored. As soon as both are valid, the box reports the formula $E(X) = n × p$, the **Success rate** and the **Failure rate** as percentages, and the **Key Insight** line above the calculator restates $E(X)$ as successes out of $n$ trials.

For $n = 10$ and $p = 0.25$ the rates are $25.0\\%$ and $75.0\\%$ and $E(X) = 2.5000$; for $n = 20$ it is $5.0000$. For $n \\le 19$ a **Contribution to E(X)** table lists every count $k$ from $0$ to $n$ with its probability and its product $k \\cdot P(X = k)$, ending in the sum; for larger $n$ the table is left out, and above $n = 50$ a note says that the individual probabilities are not shown while $E(X)$ stays exact. If $n$ is left blank, the right panel shows "Enter valid parameters: n > 0 and 0 ≤ p ≤ 1". There is no Calculate button; everything recomputes as you type.

**Reset**, at the top right of the parameter box, returns to $10$ coin flips, $n = 10$ and $p = 0.5$, closes the comparison and the extra statistics, and selects the first tab. What the two numbers mean is explained in [the binomial distribution](!#the-binomial-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Expected Value Panel`,
        content: `The right panel is built around one number: **E(X)** in large type, with the formula $n × p$ filled in and an interpretation line giving the expected successes out of $n$ trials. Below it, **E(X) in Context** turns the number into a scenario chosen from the parameters: $p = 0.5$ with $n \\le 20$ reads "Fair coin flips", $p \\le 0.1$ reads "Rare events (quality control, defects)", $p \\ge 0.9$ "High success rate", and anything else a general reading; each gives three lines such as the expected total over $100$ repeats. Click **▶ Additional Statistics** to open the variance $np(1 - p)$, the standard deviation and a **Typical Range**, $E(X) ± σ$ rounded to whole counts and kept between $0$ and $n$.

For $n = 100$ and $p = 0.02$ the panel reads $E(X) = 2.0000$ with the rare-events scenario, a variance of $1.9600$, a standard deviation of $1.4000$ and the typical range $[1, 3]$; with $p = 0.5$ and the same $n$ it reads $50.0000$, $25.0000$, $5.0000$ and $[45, 55]$. The box under the calculator, **Understanding Expected Value for Binomial Distribution**, explains what $E(X)$ means, gives three stock examples and shows why the formula is $n × p$; its link opens the first section below. The formula is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Settings`,
        content: `Click **▶ Compare with Different Values** under the parameter box to open an **Alternative n** and **Alternative p**. The panel then shows the current setting with its $E(X)$, the alternative with its $E(X)$, and the difference as a percentage of the current value, marked with an arrow as more or fewer successes expected. The alternative opens as $n = 20$, $p = 0.6$: against $10$ coin flips that is $E(X) = 12.00$, $140.0\\%$ more successes than $5.00$. Change the alternative $p$ to $0.2$ and its $E(X)$ becomes $4.00$, $20.0\\%$ fewer; raise the alternative $n$ to $25$ and the two settings have the same expected value, $5$, which the panel says in words.

The comparison uses only $n × p$, so very different settings can tie: $10$ trials at $0.5$ and $25$ trials at $0.2$ both expect $5$ successes, but their variances, $2.5$ and $4$, differ. An alternative with $p$ outside $0$ to $1$ shows nothing. Why the product alone fixes $E(X)$ is explained in [the binomial distribution](!#the-binomial-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Three Tabs`,
        content: `Under the statistics are three tabs; they change what is drawn, not the numbers. **E(X) Visualization** (the default) draws one bar per count $k$ with height $P(X = k)$ and marks the expected value, so for $10$ flips at $0.5$ the bars peak at $5$; above $n = 50$ the chart gives way to a summary with the parameters, the possible counts and the typical range. **How E(X) is Calculated** writes the formula and three steps: identify $n$ and $p$, apply $n × p$, and compute, for the coin flips $10 × 0.5 = 5.0000$, followed by a sentence on why each trial adds $p$. **Individual Contributions**, shown only while the count table is shown ($n \\le 19$), draws each product $k \\cdot P(X = k)$ as a bar, so the counts near the mean weigh most.

Use the calculation tab to check a homework answer, the visualization to see the bell-like shape, and the contributions to see which counts carry the mean. Reset returns to the visualization tab. The steps of the calculation tab are the ones written out in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/binomial" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/discrete/binomial, indicators, expected-value, hypergeometric.
         Before editing this view, read the instructions and re-run its checks (--view binomial); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'How is the expected value of a binomial distribution computed?',
          answer: 'E(X) = n times p: the number of trials times the probability of success in each. For 10 coin flips with p = 0.5 the expected number of heads is 5; for 20 guesses with p = 0.25 it is 5 as well.'
        },
        obj2: {
          question: 'What values can n and p take?',
          answer: 'n is a whole number of at least 1 and p is a probability from 0 to 1. The sliders cover n from 1 to 100 and p in steps of 0.01; the boxes accept any n, and a p outside 0 to 1 is clamped to that range.'
        },
        obj3: {
          question: 'How are the variance and standard deviation computed?',
          answer: 'The variance is n times p times (1 - p) and the standard deviation is its square root. For n = 10 and p = 0.5 they are 2.5 and about 1.5811; for n = 100 and p = 0.02 they are 1.96 and 1.4.'
        },
        obj4: {
          question: 'What is the Typical Range?',
          answer: 'E(X) minus and plus one standard deviation, rounded to whole counts and kept between 0 and n. For 10 flips at p = 0.5 it is 3 to 7 heads; for 100 items with a 2% defect rate it is 1 to 3 defects.'
        },
        obj5: {
          question: 'Why do the contribution table and the third tab disappear for large n?',
          answer: 'The table of all counts and the Individual Contributions tab are shown only for n up to 19; above n = 50 the individual probabilities are not computed at all and the chart is replaced by a summary. The expected value stays exact.'
        },
        obj6: {
          question: 'What does Compare with Different Values show?',
          answer: 'The expected value of the current setting next to that of an alternative n and p, and their difference as a percentage of the current value, marked as more or fewer successes expected, or the words Same expected value when they tie.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Discrete Uniform', link: '/probability/calculators/expected-value/discrete-uniform' },
            { title: 'Geometric', link: '/probability/calculators/expected-value/geometric' },
            { title: 'Negative Binomial', link: '/probability/calculators/expected-value/negative-binomial' },
            { title: 'Hypergeometric', link: '/probability/calculators/expected-value/hypergeometric' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' }
          ]
        }
      ],
      instructions: [
        `Set **n** (number of trials) and **p** (success probability) with the sliders or the number boxes; the box reports $E(X) = n × p$ with the success and failure rates. [Learn more about the parameters](!#setting-n-and-p)`,
        `If $n$ is blank the results wait; click **Reset** to return to $10$ trials at $p = 0.5$. [Learn more about messages and Reset](!#setting-n-and-p)`,
        `The panel on the right shows $E(X)$ with its formula, examples in context, and **Additional Statistics** (variance, standard deviation, typical range) behind a toggle. [Learn more about the panel](!#reading-the-expected-value-panel)`,
        `Click **Compare with Different Values** to set an alternative $n$ and $p$ and see the two expected values side by side. [Learn more about comparing](!#comparing-two-settings)`,
        `Use the tabs **E(X) Visualization**, **How E(X) is Calculated** and **Individual Contributions** for a chart, the steps, or each count's share. [Learn more about the tabs](!#the-three-tabs)`,
        `The box under the calculator explains what $E(X)$ means and why it equals $n × p$. [Learn more about the box](!#reading-the-expected-value-panel)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value for Binomial Distribution',
          content: `**What Does E(X) Mean?** The expected value E(X) represents the average number of successes you would get if you repeated this n-trial experiment many times. It is the centre of the distribution and the most likely outcome range.

**Interpreting Your Result.** Expect E(X) successes per experiment on average; over many experiments, the successes average to E(X); this is your break-even point for planning or prediction.

**Real-World Examples.** **10 coin flips (p = 0.5):** E(X) = 5 heads expected. **100 quality tests (p = 0.02):** E(X) = 2 defects expected. **20 sales calls (p = 0.3):** E(X) = 6 sales expected.

**Why E(X) = n × p.** Each of the n trials contributes p successes on average. Since trials are independent, you simply add up these contributions: n × p. This is the fundamental property of linearity of expectation. [Learn more about the binomial distribution](!#the-binomial-distribution)`
        }
      },
      demos: {
        'setting-n-and-p': {
          title: 'p = 0.25, n = 20, n = 100, Reset',
          scale: 0.4,
          minHeight: 724,
          script: [
            { say: 'TYPE 0.25 as p\nSuccess rate 25.0%, failure rate 75.0%; E(X) = 2.5000.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.25' },
            { wait: 2800 },
            { say: 'TYPE 20 as n\nE(X) = 5.0000; 21 counts are too many for the table.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '20' },
            { wait: 2800 },
            { say: 'TYPE 100 as n\nE(X) = 25.0000; a note replaces the individual probabilities.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '100' },
            { wait: 2800 },
            { say: 'CLICK Reset\nBack to 10 flips at 0.5: E(X) = 5.0000.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-expected-value-panel': {
          title: '100 items at 2%, the extra statistics, p = 0.5',
          scale: 0.4,
          minHeight: 724,
          script: [
            { say: 'TYPE n = 100 and p = 0.02\nE(X) = 2.0000; the context reads Rare events.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '100' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.02' },
            { wait: 2800 },
            { say: 'CLICK Additional Statistics\nVariance 1.9600, standard deviation 1.4000, typical range [1, 3].', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 2800 },
            { say: 'TYPE 0.5 as p\nE(X) = 50.0000, variance 25.0000, standard deviation 5.0000, range [45, 55].', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.5' },
            { wait: 3000 },
          ],
        },
        'comparing-two-settings': {
          title: '10 flips against 20 at 0.6, 20 at 0.2, 25 at 0.2',
          scale: 0.4,
          minHeight: 724,
          script: [
            { say: 'CLICK Compare with Different Values\nAlternative n = 20, p = 0.6: E(X) = 12.00, 140.0% more successes than 5.00.', at: 'tr' },
            { click: { button: '▶ Compare with Different Values' } },
            { wait: 3000 },
            { say: 'TYPE 0.2 as the alternative p\nAlternative E(X) = 4.00, 20.0% fewer.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 3 }, value: '0.2' },
            { wait: 2800 },
            { say: 'TYPE 25 as the alternative n\n25 trials at 0.2 expect the same 5 successes.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 2 }, value: '25' },
            { wait: 2800 },
          ],
        },
        'the-three-tabs': {
          title: 'Calculation, contributions, visualization',
          scale: 0.4,
          minHeight: 724,
          script: [
            { say: 'CLICK How E(X) is Calculated\nThree steps ending in 10 × 0.5 = 5.0000.', at: 'tr' },
            { click: { button: 'How E(X) is Calculated' } },
            { wait: 3000 },
            { say: 'CLICK Individual Contributions\nBars k · P(X = k), heaviest near 5.', at: 'tr' },
            { click: { button: 'Individual Contributions' } },
            { wait: 2600 },
            { say: 'CLICK E(X) Visualization\nEleven bars peaking at 5, with the mark at 5.', at: 'tr' },
            { click: { button: 'E(X) Visualization' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'setting-n-and-p', key: 'obj4', demo: 'setting-n-and-p' },
        { id: 'reading-the-expected-value-panel', key: 'obj5', demo: 'reading-the-expected-value-panel' },
        { id: 'comparing-two-settings', key: 'obj6', demo: 'comparing-two-settings' },
        { id: 'the-three-tabs', key: 'obj7', demo: 'the-three-tabs' },
        { id: 'the-binomial-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'geometric': {
      componentName: 'GeometricExpectedValueCalculator',
      title: 'Geometric Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for geometric distribution. Enter probability p to compute E[X] = 1/p with formula explanation.',
      keywords: ['geometric expected value', 'geometric mean calculator', '1/p formula', 'geometric distribution'],
      h1Title: 'Geometric Expected Value Calculator',
      url: '/probability/calculators/expected-value/geometric',
      name: 'Geometric Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Geometric Distribution`,
        content: `The [geometric distribution](!/probability/distributions/discrete/geometric) counts the number of independent trials needed to get the first success, where each trial succeeds with probability $p$. Here $X$ includes the successful trial, so its possible values are $1, 2, 3, \\ldots$

The expected value answers the question "how long do I wait on average?" The smaller the success probability, the longer the expected wait. The distribution is memoryless: after any number of failures, the expected number of further trials is the same as at the start.

The experiment is set out in [the probabilistic experiment behind the geometric distribution](!/probability/distributions/discrete/geometric#1), its single number in [parameters](!/probability/distributions/discrete/geometric#2), and the probabilities $P(X = k) = (1 - p)^{k - 1} p$ in [probability mass function and support](!/probability/distributions/discrete/geometric#4).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `When $X$ counts the trials up to and including the first success:

$$E[X] = \\frac{1}{p}$$

Example: rolling a die until the first $6$ appears, with $p = \\frac{1}{6}$:

$$E[X] = \\frac{1}{1/6} = 6$$

It takes $6$ rolls on average. Some books count only the failures before the first success; that version has expected value $\\frac{1 - p}{p}$, which is $5$ for the die. Both describe the same experiment.

The mean is derived in [expected value (mean)](!/probability/distributions/discrete/geometric#6), the variance $\\frac{1 - p}{p^2}$ in [variance and standard deviation](!/probability/distributions/discrete/geometric#7), and the median the calculator reports in [mode and median](!/probability/distributions/discrete/geometric#8).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Geometric models describe waiting for a first success: the number of sales calls until the first sale, the number of attempts to pass a test, or the number of products tested until the first defective one.

With a success rate of $p = 0.05$, the expected number of attempts is $\\frac{1}{0.05} = 20$. This helps with planning: it sets how many attempts to budget for on average, although any single run can take much longer.

More settings are listed in [applications and examples](!/probability/distributions/discrete/geometric#11); waiting for the $r$-th success instead of the first is [the probabilistic experiment behind the negative binomial distribution](!/probability/distributions/discrete/negative-binomial#1).`,
        link: '',
      },
      obj4: {
        title: `Setting p and the Outcome List`,
        content: `Under **Parameter**, set **p** (Success Probability) with the slider, which runs from $0.01$ to $1$ in steps of $0.01$, or by typing in the box; a typed value is kept between $0.0001$ and $1$, so $p = 0$ cannot be entered. As soon as $p$ is valid, the box reports the formula $E(X) = 1 / p$ and the **Success rate** and **Failure rate** as percentages, and the **Key Insight** line above the calculator restates $E(X)$ as the trials needed for the first success. For $p = 0.5$ the rates are $50.0\\%$ and $50.0\\%$ and $E(X) = 2.0000$; for $p = 0.05$ they are $5.0\\%$ and $95.0\\%$ and $E(X) = 20.0000$.

Because the trial count has no upper limit, the calculator lists only the first outcomes. **Display outcomes** chooses $10$, $20$, $30$ or $50$ of them, and the line under it says how many are shown and what share of the probability they cover: for $p = 0.05$ the first $20$ trials cover about $64.2\\%$ and the first $50$ about $92.3\\%$; the list also stops early once $99.9\\%$ is reached, so for $p = 0.5$ only $10$ outcomes appear. While at most $20$ outcomes are shown, a **Contribution to E(X)** table lists each trial number $k$ with $P(X = k)$ and the product $k \\cdot P(X = k)$, ending in their sum, which approaches $E(X)$ from below. If the box is emptied, the right panel shows "Enter valid parameter: 0 < p ≤ 1". There is no Calculate button.

**Reset**, at the top right of the parameter box, returns to $p = 0.2$ with $20$ outcomes, closes the comparison and the extra statistics, and selects the first tab. What $p$ and the trial count mean is explained in [the geometric distribution](!#the-geometric-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Expected Value Panel`,
        content: `The right panel is built around one number: **E(X)**, the expected number of trials until the first success, in large type, with the formula $1 / p$ filled in and an interpretation line. Below it, **E(X) in Context** turns the number into a scenario chosen from $p$: $0.5$ reads "Fair coin", $p \\le 0.1$ "Rare success (difficult task)", $p \\ge 0.8$ "High success rate (easy task)", and anything else "Moderate success rate"; each gives three lines, such as the expected total over $100$ repeats or a typical range of attempts. Click **▶ Additional Statistics** to open the variance $(1 - p) / p^2$, the standard deviation and the **Median**, the number of trials within which the first success comes half of the time.

For $p = 0.05$ the panel reads $E(X) = 20.0000$ with the rare-success scenario, a variance of $380.0000$, a standard deviation of $19.4936$ and a median of $14$ trials; for $p = 0.5$ it reads $2.0000$, $2.0000$, $1.4142$ and a median of $1$ trial. The median is well below the mean because a few very long waits pull the mean up. The box under the calculator, **Understanding Expected Value for Geometric Distribution**, explains what $E(X)$ means, gives three stock examples and shows why the formula is $1 / p$; its link opens the first section below. The formula is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Success Rates`,
        content: `Click **▶ Compare with Different Success Rate** under the parameter box to open an **Alternative p**. The panel then shows the current $p$ with its $E(X)$ in trials, the alternative $p$ with its $E(X)$, and the difference as a percentage of the current value, marked with an arrow as more or fewer trials needed. The alternative opens as $p = 0.5$: against $p = 0.2$ that is $E(X) = 2.00$ trials, $60.0\\%$ fewer than $5.00$. Change the alternative to $0.1$ and its $E(X)$ becomes $10.00$, $100.0\\%$ more; set it to $0.2$ and the panel says the two have the same expected value.

The comparison shows the reciprocal rule at work: halving $p$ doubles the expected wait, and doubling it halves the wait. An alternative typed as $0$ or above $1$ shows nothing. Why the wait is exactly $1 / p$ is explained in [the geometric distribution](!#the-geometric-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Three Tabs`,
        content: `Under the statistics are three tabs; they change what is drawn, not the numbers. **E(X) Visualization** (the default) draws one bar per listed trial number $k$ with height $P(X = k)$, falling by the factor $1 - p$ from one bar to the next, and marks the expected value; for $p = 0.2$ the first bar is $0.2$ and the mark sits at $5$. **How E(X) is Calculated** writes the formula and three steps: identify $p$, apply $1 / p$, and compute, for $p = 0.2$ giving $5.0000$ trials, followed by a sentence on the memoryless property. **Individual Contributions**, shown only while at most $20$ outcomes are listed, draws each product $k \\cdot P(X = k)$ as a bar; the bars first rise and then fade, so the middle trial numbers carry most of the mean.

Use the calculation tab to check a homework answer, the visualization to see the falling shape, and the contributions to see which trial numbers carry the mean. Reset returns to the visualization tab. The steps of the calculation tab are the ones written out in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/geometric" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/discrete/geometric and negative-binomial.
         Before editing this view, read the instructions and re-run its checks (--view geometric); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'How is the expected value of a geometric distribution computed?',
          answer: 'E(X) = 1 / p, the reciprocal of the success probability, counting the successful trial itself. For p = 0.2 the first success takes 5 trials on average; for p = 0.05 it takes 20.'
        },
        obj2: {
          question: 'What values can p take?',
          answer: 'Any probability above 0 and up to 1. The slider runs from 0.01 to 1 in steps of 0.01; a typed value is kept between 0.0001 and 1, so 0 cannot be entered because the wait would be infinite.'
        },
        obj3: {
          question: 'Why does the calculator show only the first outcomes?',
          answer: 'The trial count has no upper limit. Display outcomes lists the first 10, 20, 30 or 50 trials, and the list stops early once 99.9 percent of the probability is covered. The line under the selector says what share the listed trials cover.'
        },
        obj4: {
          question: 'How are the variance, the standard deviation and the median computed?',
          answer: 'The variance is (1 - p) / p squared and the standard deviation is its square root; for p = 0.2 they are 20 and about 4.4721. The median is the smallest trial number by which the first success has come with probability at least one half: 4 trials for p = 0.2 and 14 for p = 0.05.'
        },
        obj5: {
          question: 'Why is the median so much smaller than the mean?',
          answer: 'The distribution has a long right tail: most waits are short, but a few are very long and pull the mean up. For p = 0.05 half of the waits end within 14 trials although the mean is 20.'
        },
        obj6: {
          question: 'What does Compare with Different Success Rate show?',
          answer: 'The expected wait for the current p next to that for an alternative p, and their difference as a percentage of the current value, marked as more or fewer trials needed, or the words Same expected value when they tie.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Discrete Uniform', link: '/probability/calculators/expected-value/discrete-uniform' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Negative Binomial', link: '/probability/calculators/expected-value/negative-binomial' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' },
            { title: 'Exponential', link: '/probability/calculators/expected-value/exponential' }
          ]
        }
      ],
      instructions: [
        `Set **p** (success probability) with the slider or the number box; the box reports $E(X) = 1 / p$ with the success and failure rates. [Learn more about the parameter](!#setting-p-and-the-outcome-list)`,
        `Pick how many trials to list under **Display outcomes**; the line under it says what share of the probability they cover. [Learn more about the outcome list](!#setting-p-and-the-outcome-list)`,
        `If the box is emptied the results wait; click **Reset** to return to $p = 0.2$. [Learn more about messages and Reset](!#setting-p-and-the-outcome-list)`,
        `The panel on the right shows $E(X)$ with its formula, examples in context, and **Additional Statistics** (variance, standard deviation, median) behind a toggle. [Learn more about the panel](!#reading-the-expected-value-panel)`,
        `Click **Compare with Different Success Rate** to set an alternative $p$ and see the two expected waits side by side. [Learn more about comparing](!#comparing-two-success-rates)`,
        `Use the tabs **E(X) Visualization**, **How E(X) is Calculated** and **Individual Contributions** for a chart, the steps, or each trial number's share; the box under the calculator explains the formula. [Learn more about the tabs](!#the-three-tabs)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value for Geometric Distribution',
          content: `**What Does E(X) Mean?** The expected value E(X) represents the average number of trials you need until you get your first success. It is how many attempts you should expect before achieving success when each trial is independent.

**Interpreting Your Result.** Expect E(X) trials until the first success on average; half the time you will succeed within the median number of trials, which is smaller; each trial has the same probability, so past failures do not affect future chances.

**Real-World Examples.** **Coin flips (p = 0.5):** E(X) = 2 flips until heads. **Sales calls (p = 0.1):** E(X) = 10 calls until the first sale. **Quality test (p = 0.02):** E(X) = 50 items until the first defect.

**Why E(X) = 1 / p.** The geometric distribution is memoryless: each trial is independent with success probability p. The expected waiting time is simply the reciprocal: if you have a 20% chance each trial (p = 0.2), you expect to wait 1/0.2 = 5 trials on average. [Learn more about the geometric distribution](!#the-geometric-distribution)`
        }
      },
      demos: {
        'setting-p-and-the-outcome-list': {
          title: 'p = 0.5, p = 0.05, fifty outcomes, Reset',
          scale: 0.4,
          minHeight: 748,
          script: [
            { say: 'TYPE 0.5 as p\nRates 50.0% and 50.0%; E(X) = 2.0000; only 10 outcomes are needed for 99.9%.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0.5' },
            { wait: 3000 },
            { say: 'TYPE 0.05 as p\nE(X) = 20.0000; the first 20 trials cover about 64.2%.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0.05' },
            { wait: 3000 },
            { say: 'PICK First 50 outcomes\nAbout 92.3% covered; the table and the third tab are hidden.', at: 'tr' },
            { set: 'select', value: '50' },
            { wait: 2800 },
            { say: 'CLICK Reset\nBack to p = 0.2 with 20 outcomes: E(X) = 5.0000.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-expected-value-panel': {
          title: 'p = 0.05, the extra statistics, p = 0.5',
          scale: 0.4,
          minHeight: 748,
          script: [
            { say: 'TYPE 0.05 as p\nE(X) = 20.0000; the context reads Rare success.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0.05' },
            { wait: 2800 },
            { say: 'CLICK Additional Statistics\nVariance 380.0000, standard deviation 19.4936, median 14 trials.', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 2800 },
            { say: 'TYPE 0.5 as p\nE(X) = 2.0000, variance 2.0000, standard deviation 1.4142, median 1 trial.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0.5' },
            { wait: 3000 },
          ],
        },
        'comparing-two-success-rates': {
          title: 'p = 0.2 against 0.5, 0.1 and 0.2',
          scale: 0.4,
          minHeight: 748,
          script: [
            { say: 'CLICK Compare with Different Success Rate\nAlternative p = 0.5: E(X) = 2.00 trials, 60.0% fewer than 5.00.', at: 'tr' },
            { click: { button: '▶ Compare with Different Success Rate' } },
            { wait: 3000 },
            { say: 'TYPE 0.1 as the alternative p\nE(X) = 10.00 trials, 100.0% more.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.1' },
            { wait: 2800 },
            { say: 'TYPE 0.2 as the alternative p\nSame expected value.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.2' },
            { wait: 2800 },
          ],
        },
        'the-three-tabs': {
          title: 'Calculation, contributions, visualization',
          scale: 0.4,
          minHeight: 748,
          script: [
            { say: 'CLICK How E(X) is Calculated\nThree steps ending in 1 / 0.2 = 5.0000 trials.', at: 'tr' },
            { click: { button: 'How E(X) is Calculated' } },
            { wait: 3000 },
            { say: 'CLICK Individual Contributions\nBars k · P(X = k) that rise, then fade.', at: 'tr' },
            { click: { button: 'Individual Contributions' } },
            { wait: 2600 },
            { say: 'CLICK E(X) Visualization\nFalling bars from 0.2, with the mark at 5.', at: 'tr' },
            { click: { button: 'E(X) Visualization' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'setting-p-and-the-outcome-list', key: 'obj4', demo: 'setting-p-and-the-outcome-list' },
        { id: 'reading-the-expected-value-panel', key: 'obj5', demo: 'reading-the-expected-value-panel' },
        { id: 'comparing-two-success-rates', key: 'obj6', demo: 'comparing-two-success-rates' },
        { id: 'the-three-tabs', key: 'obj7', demo: 'the-three-tabs' },
        { id: 'the-geometric-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'negative-binomial': {
      componentName: 'NegativeBinomialExpectedValueCalculator',
      title: 'Negative Binomial Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for negative binomial distribution. Enter r successes and probability p to compute E[X] = r/p with detailed steps.',
      keywords: ['negative binomial expected value', 'negative binomial mean', 'r/p formula', 'negative binomial distribution'],
      h1Title: 'Negative Binomial Expected Value Calculator',
      url: '/probability/calculators/expected-value/negative-binomial',
      name: 'Negative Binomial Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Negative Binomial Distribution`,
        content: `The [negative binomial distribution](!/probability/distributions/discrete/negative-binomial) counts the number of independent trials needed to get $r$ successes, where each trial succeeds with probability $p$. It generalizes the geometric distribution, which is the case $r = 1$.

The expected value follows from splitting the wait into $r$ stages. Waiting for each success takes $\\frac{1}{p}$ trials on average, and the $r$ waits add up. In this version $X$ counts all trials, including the $r$ successes.

The experiment is set out in [the probabilistic experiment behind the negative binomial distribution](!/probability/distributions/discrete/negative-binomial#1) and its two numbers in [parameters](!/probability/distributions/discrete/negative-binomial#2); the one-success case is [the probabilistic experiment behind the geometric distribution](!/probability/distributions/discrete/geometric#1).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `When $X$ counts the trials needed for $r$ successes:

$$E[X] = \\frac{r}{p}$$

Example: a basketball player makes each free throw with probability $p = 0.8$. The expected number of attempts to make $4$ free throws is

$$E[X] = \\frac{4}{0.8} = 5$$

Some books count only the failures before the $r$-th success. That version has expected value $\\frac{r(1 - p)}{p}$, which is $1$ here: on average $5$ attempts, of which $1$ is a miss. The calculator above uses this failure-count version and adds $r$ to report the expected total trials.

The mean is derived in [expected value (mean)](!/probability/distributions/discrete/negative-binomial#6), the variance in [variance and standard deviation](!/probability/distributions/discrete/negative-binomial#7), and the most likely count the calculator reports in [mode and median](!/probability/distributions/discrete/negative-binomial#8).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `The negative binomial distribution is used when a fixed number of successes is the goal: the number of calls needed to make $10$ sales, the number of inspections needed to find $3$ defective parts, or the number of trials needed to recruit $r$ patients for a study.

The failure-count version is also used for count data that varies more than a Poisson model allows, such as the number of accidents per driver or the number of insurance claims per customer.

More settings are listed in [applications and examples](!/probability/distributions/discrete/negative-binomial#11); the count model it is compared with is [the probabilistic experiment behind the Poisson distribution](!/probability/distributions/discrete/poisson#1).`,
        link: '',
      },
      obj4: {
        title: `Setting r and p`,
        content: `Under **Parameters**, set **r** (Required Successes) and **p** (Success Probability) with the sliders or by typing in the boxes; the slider for $r$ runs from $1$ to $20$ and the one for $p$ from $0.01$ to $1$, while the boxes take any whole number $r \\ge 1$ and any $p$ above $0$ and up to $1$ (a typed $p$ is kept between $0.0001$ and $1$, and a non-positive $r$ is ignored). The calculator counts the **failures** before the $r$-th success, so the box reports the formula $E(X) = r(1 - p) / p$, the **Success rate** as a percentage and the **Expected total trials**, which is $E(X) + r$; the **Key Insight** line above the calculator says the same in words.

For $r = 4$ and $p = 0.8$, the free-throw example of the formula section, $E(X) = 1.0000$ failure and the expected total is $5.00$ attempts. With $r = 1$ the context switches to the geometric case, $E(X) = 0.2500$. A **Contribution to E(X)** table lists each failure count $k$ with $P(X = k)$ and the product $k \\cdot P(X = k)$ while at most $20$ counts are needed to cover $99.9\\%$ of the probability; the chart stays up to $50$ counts, and beyond that a note says the individual probabilities are not all shown, as for $r = 1$ and $p = 0.05$, where $E(X) = 19.0000$. If $r$ is left blank, the right panel shows "Enter valid parameters: r > 0 and 0 < p ≤ 1". There is no Calculate button.

**Reset**, at the top right of the parameter box, returns to $r = 3$ and $p = 0.3$, with $E(X) = 7.0000$ failures and $10.00$ expected trials, closes the comparison and the extra statistics, and selects the first tab. What the two numbers mean is explained in [the negative binomial distribution](!#the-negative-binomial-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Expected Value Panel`,
        content: `The right panel is built around one number: **E(X)**, the expected failures before $r$ successes, in large type, with the formula $r(1 - p)/p$ filled in and an interpretation line. Below it, **E(X) in Context** turns the number into a scenario chosen from the parameters: $r = 1$ reads "Geometric case", $p \\le 0.2$ "Low success rate (difficult task)", $p \\ge 0.7$ "High success rate (easy task)", and anything else "Moderate success rate"; each gives three lines, among them the expected total trials and a typical range. Click **▶ Additional Statistics** to open the variance $r(1 - p) / p^2$, the standard deviation and the **Mode**, the most likely number of failures, $\\lfloor (r - 1)(1 - p) / p \\rfloor$ for $r > 1$ and $0$ for $r = 1$.

For $r = 5$ and $p = 0.2$ the panel reads $E(X) = 20.0000$ with the low-success scenario, $25.0$ expected trials and a typical range of $15$ to $35$ total trials; the variance is $100.0000$, the standard deviation $10.0000$ and the mode $16$ failures. With $p = 0.5$ and the same $r$ it reads $5.0000$, $10.0000$, $3.1623$ and a mode of $4$ failures. The box under the calculator, **Understanding Expected Value for Negative Binomial Distribution**, explains what $E(X)$ means, gives three stock examples and shows why the formula is $r(1 - p)/p$; its link opens the first section below. The trials version of the same formula is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Settings`,
        content: `Click **▶ Compare with Different Values** under the parameter box to open an **Alternative r** and **Alternative p**. The panel then shows the current setting with its expected failures, the alternative with its expected failures, and the difference as a percentage of the current value, marked with an arrow as more or fewer failures expected. The alternative opens as $r = 5$, $p = 0.5$: against $r = 3$, $p = 0.3$ that is $E(X) = 5.00$ failures, $28.6\\%$ fewer than $7.00$. Change the alternative $p$ to $0.2$ and its $E(X)$ becomes $20.00$, $185.7\\%$ more; set the alternative to $r = 3$, $p = 0.3$ and the panel says the two have the same expected value.

The comparison shows how the two numbers pull in opposite directions: more required successes add failures in proportion to $r$, while a higher success rate removes them faster than in proportion, because $p$ appears in the denominator. An alternative with $p$ at $0$ or above $1$ shows nothing. Why $E(X)$ is $r$ times the geometric wait is explained in [the negative binomial distribution](!#the-negative-binomial-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Three Tabs`,
        content: `Under the statistics are three tabs; they change what is drawn, not the numbers. **E(X) Visualization** (the default) draws one bar per failure count $k$ with height $P(X = k)$ and marks the expected value; for $r = 3$ and $p = 0.3$ the bars rise to a peak at $4$ failures and tail off to the right of the mark at $7$. When more than $50$ counts are needed the chart gives way to a summary with the parameters and the typical range. **How E(X) is Calculated** writes the formula and four steps: identify $r$ and $p$, compute the failure rate $1 - p$, apply $r(1 - p)/p$, and compute; for $r = 3$ and $p = 0.7$ the steps end in $1.2857$ failures, followed by a sentence on adding up $r$ geometric waits. **Individual Contributions**, shown only while at most $20$ counts are listed, draws each product $k \\cdot P(X = k)$ as a bar.

Use the calculation tab to check a homework answer, the visualization to see the skewed shape, and the contributions to see which failure counts carry the mean. Reset returns to the visualization tab. The steps of the calculation tab are the failure-count form of the formula in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/negative-binomial" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/discrete/negative-binomial, geometric, poisson.
         Before editing this view, read the instructions and re-run its checks (--view negative-binomial); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'Does the calculator count trials or failures?',
          answer: 'Failures before the r-th success: E(X) = r(1 - p) / p. It also reports the expected total trials, which is E(X) + r. For r = 3 and p = 0.3 that is 7 failures and 10 trials; the trials version of the formula, r / p, gives the same 10.'
        },
        obj2: {
          question: 'What values can r and p take?',
          answer: 'r is a whole number of at least 1 and p is a probability above 0 and up to 1. The sliders cover r from 1 to 20 and p from 0.01 to 1; the boxes accept any r, and a typed p is kept between 0.0001 and 1.'
        },
        obj3: {
          question: 'How many failure counts are listed?',
          answer: 'Counts are generated until they cover 99.9 percent of the probability or reach 100. The contribution table and the Individual Contributions tab appear only when at most 20 counts are needed, the bar chart up to 50; for r = 3 and p = 0.3, 31 counts are needed, so the chart is drawn but the table is not.'
        },
        obj4: {
          question: 'How are the variance, the standard deviation and the mode computed?',
          answer: 'The variance is r(1 - p) / p squared, the standard deviation is its square root, and the mode is the whole part of (r - 1)(1 - p) / p for r above 1, or 0 for r = 1. For r = 3 and p = 0.3 they are about 23.3333, 4.8305 and 4 failures.'
        },
        obj5: {
          question: 'What happens with r = 1?',
          answer: 'The distribution becomes geometric, and the context box says so. The expected number of failures is (1 - p) / p, one less than the expected number of trials 1 / p that the geometric calculator reports.'
        },
        obj6: {
          question: 'What does Compare with Different Values show?',
          answer: 'The expected failures for the current r and p next to those for an alternative pair, and their difference as a percentage of the current value, marked as more or fewer failures expected, or the words Same expected value when they tie.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Geometric', link: '/probability/calculators/expected-value/geometric' },
            { title: 'Hypergeometric', link: '/probability/calculators/expected-value/hypergeometric' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' },
            { title: 'Exponential', link: '/probability/calculators/expected-value/exponential' }
          ]
        }
      ],
      instructions: [
        `Set **r** (required successes) and **p** (success probability) with the sliders or the number boxes; the box reports $E(X) = r(1 - p) / p$, the success rate and the expected total trials. [Learn more about the parameters](!#setting-r-and-p)`,
        `If $r$ is blank the results wait; click **Reset** to return to $r = 3$ and $p = 0.3$. [Learn more about messages and Reset](!#setting-r-and-p)`,
        `The panel on the right shows $E(X)$, the expected failures, with its formula, examples in context, and **Additional Statistics** (variance, standard deviation, mode) behind a toggle. [Learn more about the panel](!#reading-the-expected-value-panel)`,
        `Click **Compare with Different Values** to set an alternative $r$ and $p$ and see the two expected values side by side. [Learn more about comparing](!#comparing-two-settings)`,
        `Use the tabs **E(X) Visualization**, **How E(X) is Calculated** and **Individual Contributions** for a chart, the steps, or each count's share. [Learn more about the tabs](!#the-three-tabs)`,
        `The box under the calculator explains what $E(X)$ means and why it equals $r(1 - p) / p$. [Learn more about the box](!#reading-the-expected-value-panel)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value for Negative Binomial Distribution',
          content: `**What Does E(X) Mean?** The expected value E(X) represents the average number of failures you will experience before achieving r successes. It is the cost in terms of failed attempts to reach your success goal.

**Interpreting Your Result.** Expect E(X) failures before the r successes; the total trials needed are about E(X) + r; each trial is independent with the same success rate p.

**Real-World Examples.** **Sales (r = 5, p = 0.2):** need 5 sales? Expect 20 rejections. **Quality control (r = 3, p = 0.05):** find 3 defects? Expect 57 good items. **Job interviews (r = 2, p = 0.3):** need 2 offers? Expect 4.7 rejections.

**Why E(X) = r(1 - p) / p.** This is a generalization of the geometric distribution. For one success (r = 1), you expect (1 - p)/p failures. For r successes, you need r times as many failures on average. This assumes each trial is independent with constant probability p. [Learn more about the negative binomial distribution](!#the-negative-binomial-distribution)`
        }
      },
      demos: {
        'setting-r-and-p': {
          title: 'Four free throws, r = 1, a rare success, Reset',
          scale: 0.4,
          minHeight: 731,
          script: [
            { say: 'TYPE r = 4 and p = 0.8\nE(X) = 1.0000 failure; expected total trials 5.00.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '4' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.8' },
            { wait: 3000 },
            { say: 'TYPE 1 as r\nThe geometric case: E(X) = 0.2500.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '1' },
            { wait: 2800 },
            { say: 'TYPE 0.05 as p\nE(X) = 19.0000; more than 50 counts, so a note replaces the list.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.05' },
            { wait: 3000 },
            { say: 'CLICK Reset\nBack to r = 3, p = 0.3: E(X) = 7.0000, 10.00 trials.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-expected-value-panel': {
          title: 'Five sales at 20%, the extra statistics, p = 0.5',
          scale: 0.4,
          minHeight: 731,
          script: [
            { say: 'TYPE r = 5 and p = 0.2\nE(X) = 20.0000 failures; the context reads Low success rate.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '5' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.2' },
            { wait: 3000 },
            { say: 'CLICK Additional Statistics\nVariance 100.0000, standard deviation 10.0000, mode 16 failures.', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 2800 },
            { say: 'TYPE 0.5 as p\nE(X) = 5.0000, variance 10.0000, standard deviation 3.1623, mode 4 failures.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.5' },
            { wait: 3000 },
          ],
        },
        'comparing-two-settings': {
          title: 'r = 3, p = 0.3 against 5 at 0.5, 5 at 0.2, itself',
          scale: 0.4,
          minHeight: 731,
          script: [
            { say: 'CLICK Compare with Different Values\nAlternative r = 5, p = 0.5: 5.00 failures, 28.6% fewer than 7.00.', at: 'tr' },
            { click: { button: '▶ Compare with Different Values' } },
            { wait: 3000 },
            { say: 'TYPE 0.2 as the alternative p\n20.00 failures, 185.7% more.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 3 }, value: '0.2' },
            { wait: 2800 },
            { say: 'TYPE r = 3 and p = 0.3 as the alternative\nSame expected value.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 2 }, value: '3' },
            { set: { css: 'input[type="number"]', nth: 3 }, value: '0.3' },
            { wait: 2800 },
          ],
        },
        'the-three-tabs': {
          title: 'p = 0.7, calculation, contributions, visualization',
          scale: 0.4,
          minHeight: 731,
          script: [
            { say: 'TYPE 0.7 as p\nNine counts cover 99.9%: the table and the third tab appear; E(X) = 1.2857.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.7' },
            { wait: 3000 },
            { say: 'CLICK How E(X) is Calculated\nFour steps ending in 3 × 0.3000 / 0.7 = 1.2857 failures.', at: 'tr' },
            { click: { button: 'How E(X) is Calculated' } },
            { wait: 3000 },
            { say: 'CLICK Individual Contributions\nBars k · P(X = k).', at: 'tr' },
            { click: { button: 'Individual Contributions' } },
            { wait: 2600 },
            { say: 'CLICK E(X) Visualization\nBars falling from k = 0, with the mark at 1.29.', at: 'tr' },
            { click: { button: 'E(X) Visualization' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'setting-r-and-p', key: 'obj4', demo: 'setting-r-and-p' },
        { id: 'reading-the-expected-value-panel', key: 'obj5', demo: 'reading-the-expected-value-panel' },
        { id: 'comparing-two-settings', key: 'obj6', demo: 'comparing-two-settings' },
        { id: 'the-three-tabs', key: 'obj7', demo: 'the-three-tabs' },
        { id: 'the-negative-binomial-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'hypergeometric': {
      componentName: 'HypergeometricExpectedValueCalculator',
      title: 'Hypergeometric Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for hypergeometric distribution. Enter population parameters to compute E[X] = n(K/N) with formula explanation.',
      keywords: ['hypergeometric expected value', 'hypergeometric mean', 'sampling without replacement', 'hypergeometric distribution'],
      h1Title: 'Hypergeometric Expected Value Calculator',
      url: '/probability/calculators/expected-value/hypergeometric',
      name: 'Hypergeometric Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Hypergeometric Distribution`,
        content: `The [hypergeometric distribution](!/probability/distributions/discrete/hypergeometric) counts the successes in a sample of size $n$ drawn without replacement from a population of size $N$ that contains $K$ successes. Each draw changes what remains, so the draws are not independent.

The expected value is still simple: the sample is expected to have the same share of successes as the population. The population share is $\\frac{K}{N}$, and a sample of $n$ items contains $n$ times that share on average.

The experiment is set out in [the probabilistic experiment behind the hypergeometric distribution](!/probability/distributions/discrete/hypergeometric#1), its three numbers in [parameters](!/probability/distributions/discrete/hypergeometric#2), and the probabilities of each count in [probability mass function and support](!/probability/distributions/discrete/hypergeometric#4).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a sample of size $n$ from a population of $N$ items with $K$ successes:

$$E[X] = n \\cdot \\frac{K}{N}$$

Example: a box of $50$ parts contains $5$ defective ones, and $10$ parts are drawn without replacement. Then

$$E[X] = 10 \\cdot \\frac{5}{50} = 1$$

On average the sample contains $1$ defective part. The mean is the same as for a binomial model with $p = \\frac{K}{N}$, but the variance is smaller by the factor $\\frac{N - n}{N - 1}$, because drawing without replacement reduces the spread.

The mean is derived in [expected value (mean)](!/probability/distributions/discrete/hypergeometric#6) and the corrected variance in [variance and standard deviation](!/probability/distributions/discrete/hypergeometric#7); the binomial variance it is compared with is in [variance and standard deviation](!/probability/distributions/discrete/binomial#7) of the binomial lesson.`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Hypergeometric models fit sampling from a finite group without putting items back: inspecting a sample from a production lot, the number of aces in a five-card poker hand, or the number of matching numbers on a lottery ticket.

For a five-card hand from a $52$-card deck with $4$ aces, the expected number of aces is $5 \\cdot \\frac{4}{52} = \\frac{5}{13} \\approx 0.385$. When the population is much larger than the sample, the binomial distribution gives almost the same answers.

More settings are listed in [applications and examples](!/probability/distributions/discrete/hypergeometric#11); the with-replacement model it approaches is [the probabilistic experiment behind the binomial distribution](!/probability/distributions/discrete/binomial#1).`,
        link: '',
      },
      obj4: {
        title: `Setting N, K and n`,
        content: `Under **Parameters**, set **N** (Population Size), **K** (Success States in Population) and **n** (Sample Size) with the sliders or by typing whole numbers in the boxes; the slider for $N$ runs from $2$ to $200$, the one for $K$ from $0$ to $N$ and the one for $n$ from $1$ to $N$ (at most $100$), while the boxes take any whole numbers. The setting is valid when $N > 0$, $0 \\le K \\le N$ and $0 < n \\le N$; a box that breaks this turns red and the right panel shows "Enter valid parameters: N > 0, 0 ≤ K ≤ N, 0 < n ≤ N" until it is fixed. While valid, the box reports the formula $E(X) = n × K / N$, the **Success rate in population** $K / N$ as a percentage, and the **Possible outcomes**, the smallest and largest number of successes the sample can hold; the **Key Insight** line above the calculator restates $E(X)$.

For the box of parts in the formula section, $N = 50$, $K = 5$ and $n = 10$, the rate is $10.0\\%$, the outcomes run from $0$ to $5$ and $E(X) = 1.0000$. A sample larger than the population, such as $n = 60$ with $N = 50$, is rejected. A **Contribution to E(X)** table lists each count $x$ with $P(X = x)$ and the product $x \\cdot P(X = x)$ while at most $20$ counts are possible; the chart stays up to $50$, and beyond that a note gives the number of possible counts, as for $N = 200$, $K = 100$, $n = 100$, where $101$ counts are possible and $E(X) = 50.0000$. There is no Calculate button; everything recomputes as you type.

**Reset**, at the top right of the parameter box, returns to $N = 50$, $K = 20$, $n = 10$, with $E(X) = 4.0000$, closes the comparison and the extra statistics, and selects the first tab. What the three numbers mean is explained in [the hypergeometric distribution](!#the-hypergeometric-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Expected Value Panel`,
        content: `The right panel is built around one number: **E(X)**, the expected successes in the sample, in large type, with the formula $n × K / N$ filled in and an interpretation line. Below it, **E(X) in Context** turns the number into a scenario chosen from the parameters: a population of at most $100$ with a sample of at most $20$ reads "Small population sampling", a success share below $20\\%$ "Rare items (quality control, defects)", a share above $80\\%$ "High proportion (common items)", and anything else "Balanced population"; each gives three lines, among them a typical range of successes. Click **▶ Additional Statistics** to open the variance $n \\frac{K}{N} \\left(1 - \\frac{K}{N}\\right) \\frac{N - n}{N - 1}$, the standard deviation and the **Mode**, the most likely count, $\\lfloor (n + 1)(K + 1) / (N + 2) \\rfloor$.

For a five-card hand from a deck of $52$ with $13$ hearts, $N = 52$, $K = 13$, $n = 5$, the panel reads $E(X) = 1.2500$ with the small-population scenario and a typical range of $0$ to $2$ hearts; the variance is $0.8640$, the standard deviation $0.9295$ and the mode $1$ heart. With the $4$ aces instead, $K = 4$, it reads $0.3846$, $0.3272$, $0.5720$ and a mode of $0$. The box under the calculator, **Understanding Expected Value for Hypergeometric Distribution**, explains what $E(X)$ means, gives three stock examples and shows why the formula is $n × K / N$; its link opens the first section below. The formula is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Settings`,
        content: `Click **▶ Compare with Different Values** under the parameter box to open an **Alternative N**, **Alternative K** and **Alternative n**. The panel then shows the current setting with its $E(X)$, the alternative with its $E(X)$, and the difference as a percentage of the current value, marked with an arrow as more or fewer successes expected. The alternative opens as $N = 100$, $K = 30$, $n = 15$: against the default it is $E(X) = 4.50$, $12.5\\%$ more than $4.00$. Change the alternative $n$ to $10$ and its $E(X)$ becomes $3.00$, $25.0\\%$ fewer; raise the alternative $K$ to $40$ and the two settings have the same expected value, $4$, which the panel says in words.

The comparison uses only $n K / N$, so settings with the same success share and sample size tie whatever the population size: $N = 50$, $K = 20$ and $N = 100$, $K = 40$ both expect $4$ of $10$ draws to succeed, although the smaller population gives the smaller variance. An alternative that breaks the validity rules shows nothing. Why the share alone fixes $E(X)$ is explained in [the hypergeometric distribution](!#the-hypergeometric-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Three Tabs`,
        content: `Under the statistics are three tabs; they change what is drawn, not the numbers. **E(X) Visualization** (the default) draws one bar per possible count $x$ with height $P(X = x)$ and marks the expected value; for the default setting the bars peak at $4$ successes. When more than $50$ counts are possible the chart gives way to a summary with the parameters and the typical range. **How E(X) is Calculated** writes the formula and four steps: identify $N$, $K$ and $n$, compute the proportion $K / N$, apply $n × K / N$, and compute; for the default it reads $20 / 50 = 0.4000$ and $10 × 0.4000 = 4.0000$ successes, followed by a note that drawing without replacement changes the odds from draw to draw but not the expected value. **Individual Contributions**, shown only while at most $20$ counts are possible, draws each product $x \\cdot P(X = x)$ as a bar.

Use the calculation tab to check a homework answer, the visualization to see the shape, and the contributions to see which counts carry the mean. Reset returns to the visualization tab. The steps of the calculation tab are the ones written out in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/hypergeometric" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/discrete/hypergeometric and binomial.
         Before editing this view, read the instructions and re-run its checks (--view hypergeometric); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'How is the expected value of a hypergeometric distribution computed?',
          answer: 'E(X) = n times K divided by N: the sample size times the share of successes in the population. For 10 draws from 50 items of which 20 are successes it is 4; for 5 cards from a deck with 13 hearts it is 1.25.'
        },
        obj2: {
          question: 'What values can N, K and n take?',
          answer: 'Whole numbers with N above 0, K between 0 and N, and n between 1 and N. The sliders cover N from 2 to 200, K up to N and n up to N or 100; the boxes accept any whole numbers, and a setting that breaks the rules shows a placeholder.'
        },
        obj3: {
          question: 'Why is the variance smaller than for a binomial distribution?',
          answer: 'Drawing without replacement multiplies the binomial variance by (N - n) / (N - 1). For N = 50, K = 20 and n = 10 the variance is about 1.9592, against 2.4 for a binomial model with p = 0.4; the standard deviation is about 1.3997.'
        },
        obj4: {
          question: 'What is the Mode shown under Additional Statistics?',
          answer: 'The most likely number of successes, the whole part of (n + 1)(K + 1) / (N + 2). For the default setting it is 4; for 5 cards and 13 hearts it is 1.'
        },
        obj5: {
          question: 'Which counts are possible, and why does the table sometimes disappear?',
          answer: 'The count runs from the larger of 0 and n - (N - K) to the smaller of n and K. The contribution table and the Individual Contributions tab are shown only when at most 20 counts are possible, the chart up to 50; beyond that a note gives the number of counts.'
        },
        obj6: {
          question: 'What does Compare with Different Values show?',
          answer: 'The expected value of the current setting next to that of an alternative N, K and n, and their difference as a percentage of the current value, marked as more or fewer successes expected, or the words Same expected value when they tie.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Geometric', link: '/probability/calculators/expected-value/geometric' },
            { title: 'Negative Binomial', link: '/probability/calculators/expected-value/negative-binomial' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' },
            { title: 'Discrete Uniform', link: '/probability/calculators/expected-value/discrete-uniform' }
          ]
        }
      ],
      instructions: [
        `Set **N** (population size), **K** (successes in the population) and **n** (sample size) with the sliders or the number boxes; the box reports $E(X) = n × K / N$, the success rate and the possible outcomes. [Learn more about the parameters](!#setting-n-k-and-n)`,
        `If $K$ or $n$ exceeds $N$ the results wait; click **Reset** to return to $N = 50$, $K = 20$, $n = 10$. [Learn more about messages and Reset](!#setting-n-k-and-n)`,
        `The panel on the right shows $E(X)$ with its formula, examples in context, and **Additional Statistics** (variance, standard deviation, mode) behind a toggle. [Learn more about the panel](!#reading-the-expected-value-panel)`,
        `Click **Compare with Different Values** to set an alternative $N$, $K$ and $n$ and see the two expected values side by side. [Learn more about comparing](!#comparing-two-settings)`,
        `Use the tabs **E(X) Visualization**, **How E(X) is Calculated** and **Individual Contributions** for a chart, the steps, or each count's share. [Learn more about the tabs](!#the-three-tabs)`,
        `The box under the calculator explains what $E(X)$ means and why it equals $n × K / N$. [Learn more about the box](!#reading-the-expected-value-panel)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value for Hypergeometric Distribution',
          content: `**What Does E(X) Mean?** The expected value E(X) represents the average number of successes you will get when drawing n items without replacement from a population of N items containing K successes. It is the proportion of successes in the population multiplied by your sample size.

**Interpreting Your Result.** Expect E(X) successes in your sample of n; the population has a success rate of K / N; with no replacement, each draw changes the remaining population slightly.

**Real-World Examples.** **Card games:** 52 cards, 13 hearts, draw 5? Expect 1.25 hearts. **Quality control:** 100 items, 10 defective, sample 20? Expect 2 defects. **Lottery:** 50 balls, 20 winning, draw 10? Expect 4 winners.

**Why E(X) = n × K / N.** This formula reflects the simple fact that your sample should reflect the population proportion. If K/N of the population are successes, then K/N of your sample should be successes too. Multiply by n to get the count: n × (K/N) = nK/N. Unlike the binomial case there is no replacement, but the expected value is the same; it is the variance that differs. [Learn more about the hypergeometric distribution](!#the-hypergeometric-distribution)`
        }
      },
      demos: {
        'setting-n-k-and-n': {
          title: 'Five defective parts, a sample too large, 101 counts, Reset',
          scale: 0.4,
          minHeight: 792,
          script: [
            { say: 'TYPE 5 as K\nRate 10.0%, outcomes 0 to 5; E(X) = 1.0000.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '5' },
            { wait: 2800 },
            { say: 'TYPE 60 as n\nA sample larger than the population: red box and a placeholder.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 2 }, value: '60' },
            { wait: 2800 },
            { say: 'TYPE N = 200, K = 100, n = 100\nE(X) = 50.0000; 101 counts, so a note replaces the list.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '200' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '100' },
            { set: { css: 'input[type="number"]', nth: 2 }, value: '100' },
            { wait: 3000 },
            { say: 'CLICK Reset\nBack to 50, 20, 10: E(X) = 4.0000.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-expected-value-panel': {
          title: 'Hearts in a hand, the extra statistics, aces',
          scale: 0.4,
          minHeight: 792,
          script: [
            { say: 'TYPE N = 52, K = 13, n = 5\nE(X) = 1.2500 hearts; typical range 0 to 2.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '52' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '13' },
            { set: { css: 'input[type="number"]', nth: 2 }, value: '5' },
            { wait: 3000 },
            { say: 'CLICK Additional Statistics\nVariance 0.8640, standard deviation 0.9295, mode 1 success.', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 2800 },
            { say: 'TYPE 4 as K\nAces: E(X) = 0.3846, variance 0.3272, standard deviation 0.5720, mode 0.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '4' },
            { wait: 3000 },
          ],
        },
        'comparing-two-settings': {
          title: 'The default against 100, 30, 15 and two changes',
          scale: 0.4,
          minHeight: 792,
          script: [
            { say: 'CLICK Compare with Different Values\nAlternative 100, 30, 15: E(X) = 4.50, 12.5% more than 4.00.', at: 'tr' },
            { click: { button: '▶ Compare with Different Values' } },
            { wait: 3000 },
            { say: 'TYPE 10 as the alternative n\nE(X) = 3.00, 25.0% fewer.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 5 }, value: '10' },
            { wait: 2800 },
            { say: 'TYPE 40 as the alternative K\n40 of 100 is the same share as 20 of 50: same expected value.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 4 }, value: '40' },
            { wait: 2800 },
          ],
        },
        'the-three-tabs': {
          title: 'Calculation, contributions, visualization',
          scale: 0.4,
          minHeight: 792,
          script: [
            { say: 'CLICK How E(X) is Calculated\nFour steps: 20 / 50 = 0.4000, then 10 × 0.4000 = 4.0000 successes.', at: 'tr' },
            { click: { button: 'How E(X) is Calculated' } },
            { wait: 3000 },
            { say: 'CLICK Individual Contributions\nBars x · P(X = x), heaviest at 4 and 5.', at: 'tr' },
            { click: { button: 'Individual Contributions' } },
            { wait: 2600 },
            { say: 'CLICK E(X) Visualization\nEleven bars peaking at 4, with the mark at 4.', at: 'tr' },
            { click: { button: 'E(X) Visualization' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'setting-n-k-and-n', key: 'obj4', demo: 'setting-n-k-and-n' },
        { id: 'reading-the-expected-value-panel', key: 'obj5', demo: 'reading-the-expected-value-panel' },
        { id: 'comparing-two-settings', key: 'obj6', demo: 'comparing-two-settings' },
        { id: 'the-three-tabs', key: 'obj7', demo: 'the-three-tabs' },
        { id: 'the-hypergeometric-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'poisson': {
      componentName: 'PoissonExpectedValueCalculator',
      title: 'Poisson Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for Poisson distribution. Enter rate parameter λ to compute E[X] = λ with detailed formula breakdown.',
      keywords: ['poisson expected value', 'poisson mean calculator', 'lambda parameter', 'poisson distribution'],
      h1Title: 'Poisson Expected Value Calculator',
      url: '/probability/calculators/expected-value/poisson',
      name: 'Poisson Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Poisson Distribution`,
        content: `The [Poisson distribution](!/probability/distributions/discrete/poisson) counts how many events happen in a fixed interval of time or space when events occur independently at a constant average rate. The parameter $\\lambda$ is that average count per interval.

The expected value is exactly the rate parameter, which is what makes the distribution easy to use: if a call center receives $12$ calls per hour on average, the expected number of calls in an hour is $12$. The variance is also $\\lambda$, so the mean and the spread grow together.

The experiment is set out in [the probabilistic experiment behind the Poisson distribution](!/probability/distributions/discrete/poisson#1), its single number in [parameters](!/probability/distributions/discrete/poisson#2), and the probabilities $P(X = k) = e^{-\\lambda} \\lambda^k / k!$ in [probability mass function and support](!/probability/distributions/discrete/poisson#4).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a Poisson random variable with rate $\\lambda$:

$$E[X] = \\lambda, \\qquad \\text{Var}(X) = \\lambda$$

Example: a website gets an average of $3$ sign-ups per hour. For one hour, $E[X] = 3$. For a $4$-hour period the rate scales with the length of the interval, so $\\lambda = 3 \\cdot 4 = 12$ and the expected number of sign-ups is $12$.

The probability of no sign-ups in one hour is $P(X = 0) = e^{-3} \\approx 0.050$.

The mean is derived in [expected value (mean)](!/probability/distributions/discrete/poisson#6), the equal variance in [variance and standard deviation](!/probability/distributions/discrete/poisson#7), and the most likely count the calculator reports in [mode and median](!/probability/distributions/discrete/poisson#8).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Poisson models count rare, independent events over an interval: emails arriving per hour, typing errors per page, accidents at a junction per month, or decays of a radioactive sample per second.

The expected value sets staffing and capacity: a help desk that expects $\\lambda = 8$ tickets per hour plans for at least that load. The model breaks down when events cluster, for example when one failure triggers others, because the events are then no longer independent.

More settings are listed in [applications and examples](!/probability/distributions/discrete/poisson#11); counts that vary more than a Poisson model allows are often modelled by [the negative binomial distribution](!/probability/distributions/discrete/negative-binomial#1).`,
        link: '',
      },
      obj4: {
        title: `Setting the Rate and the Outcome List`,
        content: `Under **Parameter**, set **λ** (Rate Parameter / Expected Value) with the slider, which runs from $0.1$ to $20$ in steps of $0.1$, or by typing any positive number in the box. As soon as $\\lambda$ is valid, the box reports the formula $E(X) = \\lambda$, the variance $\\text{Var}(X) = \\lambda$ and the **Zero events probability** $e^{-\\lambda}$ as a percentage, and the **Key Insight** line above the calculator restates that the rate is the expected value. For $\\lambda = 0.5$ the chance of no event is $60.65\\%$; for $\\lambda = 3$ it is $4.98\\%$; for $\\lambda = 10$ it rounds to $0.00\\%$.

Because the count has no upper limit, the calculator lists only the first outcomes. **Display outcomes** chooses the first $15$, $20$, $30$ or $50$ counts, and the line under it says how many are shown and what share of the probability they cover; the list also stops early once $99.9\\%$ is reached, so for $\\lambda = 3$ only $11$ counts appear and for $\\lambda = 0.5$ only $5$. For $\\lambda = 10$ the first $20$ counts cover about $99.8\\%$, and choosing $50$ extends the list to $22$ counts. While at most $20$ counts are listed, a **Contribution to E(X)** table shows each count $k$ with $P(X = k)$ and the product $k \\cdot P(X = k)$, ending in their sum. If the box is emptied, the right panel shows "Enter valid parameter: λ > 0". There is no Calculate button; everything recomputes as you type.

**Reset**, at the top right of the parameter box, returns to $\\lambda = 3$ with $20$ outcomes, closes the comparison and the extra statistics, and selects the first tab. What the rate means is explained in [the Poisson distribution](!#the-poisson-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Expected Value Panel`,
        content: `The right panel is built around one number: **E(X)**, the average events per interval, in large type, with the formula $E(X) = \\lambda$ and an interpretation line. Below it, **E(X) in Context** turns the number into a scenario chosen from $\\lambda$: below $1$ reads "Rare events (low rate)", up to $5$ "Moderate event rate", up to $15$ "High event rate", and above that "Very high event rate"; each gives three lines, such as the expected total over $100$ intervals, the chance of an interval with no event, or the range most intervals fall in. Click **▶ Additional Statistics** to open the variance, marked as equal to $E(X)$, the standard deviation $\\sqrt{\\lambda}$, the **Mode** $\\lfloor \\lambda \\rfloor$ and the **Coefficient of Variation**, the standard deviation divided by the mean.

For $\\lambda = 10$ the panel reads $E(X) = 10.0000$ with the high-rate scenario, most intervals holding $7$ to $13$ events; the variance is $10.0000$, the standard deviation $3.1623$, the mode $10$ events and the coefficient of variation $0.3162$. For $\\lambda = 2.5$ it reads $2.5000$, $2.5000$, $1.5811$, a mode of $2$ and a coefficient of $0.6325$: a smaller rate is relatively more variable. The box under the calculator, **Understanding Expected Value for Poisson Distribution**, explains what $E(X)$ means, gives four stock examples and shows why the formula is simply $\\lambda$; its link opens the first section below. The formula is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Rates`,
        content: `Click **▶ Compare with Different Rate** under the parameter box to open an **Alternative λ**. The panel then shows the current rate with its $E(X)$ in events, the alternative with its $E(X)$, and the difference as a percentage of the current value, marked with an arrow as a higher or lower event rate. The alternative opens as $\\lambda = 5$: against $\\lambda = 3$ that is $E(X) = 5.00$ events, a $66.7\\%$ higher rate. Change the alternative to $1.5$ and it becomes $1.50$ events, $50.0\\%$ lower; set it to $3$ and the panel says the two have the same expected value.

Because $E(X) = \\lambda$, the comparison is a comparison of the rates themselves; what changes with the rate is the spread, since the variance grows with $\\lambda$ while the coefficient of variation shrinks. An alternative typed as $0$ or less shows nothing. Why the rate is the expected value is explained in [the Poisson distribution](!#the-poisson-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Three Tabs`,
        content: `Under the statistics are three tabs; they change what is drawn, not the numbers. **E(X) Visualization** (the default) draws one bar per listed count $k$ with height $P(X = k)$ and marks the expected value; for $\\lambda = 3$ the bars peak at $2$ and $3$ and the mark sits at $3$. **How E(X) is Calculated** writes the formula and three steps: identify $\\lambda$, apply $E(X) = \\lambda$, and state the result, for $\\lambda = 3$ giving $3.0000$ events per interval, followed by a note on why the parameter is the mean and a box on the unique Poisson property that the mean equals the variance. **Individual Contributions**, shown only while at most $20$ counts are listed, draws each product $k \\cdot P(X = k)$ as a bar.

Use the calculation tab to check a homework answer, the visualization to see the shape, and the contributions to see which counts carry the mean. Reset returns to the visualization tab. The steps of the calculation tab are the ones written out in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/poisson" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/discrete/poisson and negative-binomial.
         Before editing this view, read the instructions and re-run its checks (--view poisson); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'How is the expected value of a Poisson distribution computed?',
          answer: 'It is the rate parameter itself: E(X) = lambda. A rate of 3 events per interval means 3 expected events; the variance is also 3 and the standard deviation is its square root, about 1.7321.'
        },
        obj2: {
          question: 'What values can lambda take?',
          answer: 'Any positive number. The slider runs from 0.1 to 20 in steps of 0.1; the box accepts any positive number, and a value of 0 or less is ignored.'
        },
        obj3: {
          question: 'Why does the calculator show only the first outcomes?',
          answer: 'The count has no upper limit. Display outcomes lists the first 15, 20, 30 or 50 counts, and the list stops early once 99.9 percent of the probability is covered: 11 counts for lambda = 3, 5 counts for lambda = 0.5. The line under the selector says what share the listed counts cover.'
        },
        obj4: {
          question: 'What is the Zero events probability?',
          answer: 'The chance that an interval holds no event at all, e to the power of minus lambda. It is 60.65 percent for lambda = 0.5, 4.98 percent for lambda = 3, and rounds to 0.00 percent for lambda = 10.'
        },
        obj5: {
          question: 'What do the Mode and the Coefficient of Variation mean?',
          answer: 'The mode is the most likely count, the whole part of lambda: 3 for lambda = 3 and 2 for lambda = 2.5. The coefficient of variation is the standard deviation divided by the mean, 1 over the square root of lambda, so a smaller rate is relatively more variable: 0.5774 for lambda = 3 and 0.3162 for lambda = 10.'
        },
        obj6: {
          question: 'What does Compare with Different Rate show?',
          answer: 'The expected value for the current rate next to that for an alternative rate, and their difference as a percentage of the current value, marked as a higher or lower event rate, or the words Same expected value when they tie.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Geometric', link: '/probability/calculators/expected-value/geometric' },
            { title: 'Negative Binomial', link: '/probability/calculators/expected-value/negative-binomial' },
            { title: 'Hypergeometric', link: '/probability/calculators/expected-value/hypergeometric' },
            { title: 'Exponential', link: '/probability/calculators/expected-value/exponential' }
          ]
        }
      ],
      instructions: [
        `Set **λ** (the rate) with the slider or the number box; the box reports $E(X) = \lambda$, $\text{Var}(X) = \lambda$ and the chance of zero events. [Learn more about the rate](!#setting-the-rate-and-the-outcome-list)`,
        `Pick how many counts to list under **Display outcomes**; the line under it says what share of the probability they cover. [Learn more about the outcome list](!#setting-the-rate-and-the-outcome-list)`,
        `If the box is emptied the results wait; click **Reset** to return to $\lambda = 3$. [Learn more about messages and Reset](!#setting-the-rate-and-the-outcome-list)`,
        `The panel on the right shows $E(X)$ with its formula, examples in context, and **Additional Statistics** (variance, standard deviation, mode, coefficient of variation) behind a toggle. [Learn more about the panel](!#reading-the-expected-value-panel)`,
        `Click **Compare with Different Rate** to set an alternative $\lambda$ and see the two expected values side by side. [Learn more about comparing](!#comparing-two-rates)`,
        `Use the tabs **E(X) Visualization**, **How E(X) is Calculated** and **Individual Contributions** for a chart, the steps, or each count's share; the box under the calculator explains the formula. [Learn more about the tabs](!#the-three-tabs)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value for Poisson Distribution',
          content: `**What Does E(X) Mean?** The expected value E(X) represents the average number of events occurring in a fixed interval of time or space. For Poisson, this is simply λ, the rate parameter. If λ = 3, you expect 3 events per interval on average.

**Interpreting Your Result.** Expect E(X) events per time interval; the standard deviation is the square root of λ; most intervals hold a count within one standard deviation of λ.

**Real-World Examples.** **Phone calls (λ = 2.5):** expect 2.5 calls per hour. **Website visits (λ = 10):** expect 10 visits per minute. **Defects (λ = 0.5):** expect 0.5 defects per batch. **Emails (λ = 15):** expect 15 emails per day.

**Why E(X) = λ.** The Poisson distribution models rare, random events occurring at a constant average rate. The parameter λ represents this rate, the expected number of occurrences. By definition, if the average rate is λ, then the expected value is λ. No calculation is needed; it is built into the definition of the distribution. [Learn more about the Poisson distribution](!#the-poisson-distribution)`
        }
      },
      demos: {
        'setting-the-rate-and-the-outcome-list': {
          title: 'λ = 0.5, λ = 10, fifty outcomes, Reset',
          scale: 0.4,
          minHeight: 748,
          script: [
            { say: 'TYPE 0.5 as λ\nE(X) = 0.5000; zero events 60.65%; 5 counts cover 99.9%.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0.5' },
            { wait: 3000 },
            { say: 'TYPE 10 as λ\nE(X) = 10.0000; the first 20 counts cover about 99.8%, too many for the table.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '10' },
            { wait: 3000 },
            { say: 'PICK First 50 outcomes\n22 counts are listed, covering 99.9%.', at: 'tr' },
            { set: 'select', value: '50' },
            { wait: 2800 },
            { say: 'CLICK Reset\nBack to λ = 3: 11 counts, E(X) = 3.0000.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-expected-value-panel': {
          title: 'λ = 10, the extra statistics, λ = 2.5',
          scale: 0.4,
          minHeight: 748,
          script: [
            { say: 'TYPE 10 as λ\nE(X) = 10.0000; the context reads High event rate, most intervals 7 to 13.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '10' },
            { wait: 3000 },
            { say: 'CLICK Additional Statistics\nVariance 10.0000, standard deviation 3.1623, mode 10, coefficient of variation 0.3162.', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 3000 },
            { say: 'TYPE 2.5 as λ\nE(X) = 2.5000, variance 2.5000, standard deviation 1.5811, mode 2, coefficient 0.6325.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '2.5' },
            { wait: 3000 },
          ],
        },
        'comparing-two-rates': {
          title: 'λ = 3 against 5, 1.5 and 3',
          scale: 0.4,
          minHeight: 748,
          script: [
            { say: 'CLICK Compare with Different Rate\nAlternative λ = 5: E(X) = 5.00 events, a 66.7% higher rate.', at: 'tr' },
            { click: { button: '▶ Compare with Different Rate' } },
            { wait: 3000 },
            { say: 'TYPE 1.5 as the alternative λ\nE(X) = 1.50 events, 50.0% lower.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '1.5' },
            { wait: 2800 },
            { say: 'TYPE 3 as the alternative λ\nSame expected value.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '3' },
            { wait: 2800 },
          ],
        },
        'the-three-tabs': {
          title: 'Calculation, contributions, visualization',
          scale: 0.4,
          minHeight: 748,
          script: [
            { say: 'CLICK How E(X) is Calculated\nThree steps ending in 3.0000 events per interval, and the mean-equals-variance box.', at: 'tr' },
            { click: { button: 'How E(X) is Calculated' } },
            { wait: 3000 },
            { say: 'CLICK Individual Contributions\nBars k · P(X = k).', at: 'tr' },
            { click: { button: 'Individual Contributions' } },
            { wait: 2600 },
            { say: 'CLICK E(X) Visualization\nBars peaking at 2 and 3, with the mark at 3.', at: 'tr' },
            { click: { button: 'E(X) Visualization' } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'setting-the-rate-and-the-outcome-list', key: 'obj4', demo: 'setting-the-rate-and-the-outcome-list' },
        { id: 'reading-the-expected-value-panel', key: 'obj5', demo: 'reading-the-expected-value-panel' },
        { id: 'comparing-two-rates', key: 'obj6', demo: 'comparing-two-rates' },
        { id: 'the-three-tabs', key: 'obj7', demo: 'the-three-tabs' },
        { id: 'the-poisson-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'continuous-uniform': {
      componentName: 'ContinuousUniformExpectedValueCalculator',
      title: 'Continuous Uniform Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for continuous uniform distribution. Enter interval [a,b] to compute E[X] = (a + b) / 2 with formula explanation.',
      keywords: ['continuous uniform expected value', 'uniform distribution mean', 'expected value calculator', 'continuous uniform'],
      h1Title: 'Continuous Uniform Expected Value Calculator',
      url: '/probability/calculators/expected-value/continuous-uniform',
      name: 'Continuous Uniform Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Continuous Uniform Distribution`,
        content: `A [continuous uniform distribution](!/probability/distributions/continuous/uniform) spreads probability evenly over an interval $[a, b]$. Every subinterval of the same length has the same probability, and the density is constant at $\\frac{1}{b - a}$.

Because the density is flat, the distribution balances at the middle of the interval. The expected value is the midpoint $\\frac{a + b}{2}$, the same formula as for the discrete uniform case, though here every real number in the interval is possible.

The experiment is set out in [the probabilistic experiment behind the continuous uniform distribution](!/probability/distributions/continuous/uniform#1), the two endpoints in [parameters](!/probability/distributions/continuous/uniform#3), and the flat density in [probability density function and support](!/probability/distributions/continuous/uniform#5).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a continuous uniform random variable on $[a, b]$:

$$E[X] = \\frac{a + b}{2}, \\qquad \\text{Var}(X) = \\frac{(b - a)^2}{12}$$

Example: a bus arrives at a random time between $0$ and $20$ minutes after you reach the stop. The expected wait is

$$E[X] = \\frac{0 + 20}{2} = 10 \\text{ minutes}$$

The variance is $\\frac{20^2}{12} \\approx 33.3$, so the standard deviation is about $5.8$ minutes.

The mean is derived by integration in [expected value (mean)](!/probability/distributions/continuous/uniform#7), the variance in [variance and standard deviation](!/probability/distributions/continuous/uniform#8), and the quartiles the calculator lists in [quantiles and percentiles](!/probability/distributions/continuous/uniform#10).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `The continuous uniform distribution models a quantity that is equally likely to fall anywhere in a range: a random arrival time within a window, the position of a break along a rod, or rounding errors, which are roughly uniform between $-0.5$ and $0.5$ units.

Random number generators produce uniform values on $[0, 1]$, and these are the basis for simulating other distributions.

More settings are listed in [real-world examples and common applications](!/probability/distributions/continuous/uniform#12), and the $[0, 1]$ case among the [special cases](!/probability/distributions/continuous/uniform#14).`,
        link: '',
      },
      obj4: {
        title: `Setting a and b`,
        content: `Under **Parameters**, set **a** (Minimum) and **b** (Maximum) with the sliders, which run from $-50$ to $50$ and from $-50$ to $100$ in steps of $0.5$, or by typing any numbers, decimals included, in the boxes. The interval is valid when $a < b$; otherwise both boxes turn red and the right panel shows "Enter valid: a < b" until the order is fixed. While valid, the box reports the formula $E(X) = (a + b) / 2$ and the **Range** $b - a$ to two decimals, and the **Key Insight** line above the calculator restates $E(X)$ as the midpoint of $[a, b]$.

For the bus of the worked example, $a = 0$ and $b = 20$, the range is $20.00$ and $E(X) = 10.000$. Typing $a = 25$ with $b = 20$ is rejected. The interval $[0, 1]$ of a random number generator gives $E(X) = 0.500$, and the context box below the chart then reads "Uniform random number (0 to 1)". There is no Calculate button; everything recomputes as you type.

**Reset**, at the top right of the parameter box, returns to $[0, 10]$ with $E(X) = 5.000$, closes the comparison and the extra statistics, and selects the first tab. Why a flat density balances at the midpoint is explained in [the continuous uniform distribution](!#the-continuous-uniform-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Panel and the Percentiles`,
        content: `The right panel is built around one number: **E(X)**, the midpoint, to three decimals, with the formula $(a + b) / 2$ filled in. Click **▶ Additional Statistics** to open the variance $(b - a)^2 / 12$, the standard deviation and the **IQR**, the interquartile range, which is half the length of the interval. Below the tabs, a context box turns the numbers into a scenario chosen from the interval: $[0, b]$ with $b \\le 1$ reads "Uniform random number (0 to 1)", a range up to $10$ "Small uniform range", up to $100$ "Moderate uniform range", and anything wider "Wide uniform range", each with three lines such as the expected total over $100$ samples or the middle $50\\%$ of the values.

On the left, under the parameters, the **Percentiles** box lists the minimum, the first quartile **Q1** at a quarter of the way along the interval, the **Median**, which for a uniform interval equals the mean, the third quartile **Q3** and the maximum. For $[20, 30]$ they read $20.00$, $22.50$, $25.00$, $27.50$ and $30.00$, with $E(X) = 25.000$, variance $8.3333$, standard deviation $2.8868$ and IQR $5.0000$. Widen to $[20, 60]$ and the mean moves to $40.000$, the variance to $133.3333$, the standard deviation to $11.5470$ and the IQR to $20.0000$; the context then says that $50\\%$ of the values fall between $30.0$ and $50.0$. The box under the calculator, **Understanding Expected Value for Continuous Uniform Distribution**, explains what $E(X)$ means, gives four stock examples and shows why the formula is the midpoint; its link opens the first section below. The formula is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Intervals`,
        content: `Click **▶ Compare** under the parameter box to open an **Alt a** and **Alt b**. The panel then shows the current interval with its $E(X)$, the alternative interval with its $E(X)$, and the difference as a percentage of the current value, marked with an arrow. The alternative opens as $[5, 15]$: against $[0, 10]$ that is $E(X) = 10.00$, $100.0\\%$ higher than $5.00$. Set the alternative $b$ to $5$ and the alternative is no longer an interval, so its result disappears; set the alternative $a$ to $-5$ and the alternative $[-5, 5]$ has $E(X) = 0.00$, $100.0\\%$ lower. When the two midpoints agree the panel says "Same".

The comparison uses only the midpoints, so intervals of different width tie whenever they share a centre, as $[0, 10]$ and $[-5, 15]$ do; their variances, $8.3333$ and $33.3333$, tell them apart. A current interval centred on $0$ makes the percentage undefined, so the panel then shows the plain difference of the two midpoints with the note "no percentage: E(X) is 0". Why the midpoint alone fixes $E(X)$ is explained in [the continuous uniform distribution](!#the-continuous-uniform-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Two Tabs`,
        content: `Under the statistics are two tabs; they change what is drawn, not the numbers. **Visualization** (the default) draws the flat density, a rectangle of height $1 / (b - a)$ over $[a, b]$, and marks the mean in its middle, with the standard deviation shown around it; for $[0, 10]$ the height is $0.1$ and the mark sits at $5$, and widening to $[0, 20]$ halves the height to $0.05$ and moves the mark to $10$. **Calculation** writes the formula and three steps: read off $a$ and $b$, write $(a + b) / 2$ with the values, and compute, for $[0, 10]$ giving $5.0000$; below the steps an **Integration** block shows the same result as $\\int_a^b x \\cdot f(x)\\,dx$ with $f(x) = 1 / (b - a)$, and a one-line reason: a constant density puts the centre of mass at the midpoint.

Use the calculation tab to check a homework answer and the visualization to see the flat shape and how the height trades off against the width. Reset returns to the visualization tab. The integral of the calculation tab is the one evaluated in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/continuous-uniform" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/continuous/uniform.
         Before editing this view, read the instructions and re-run its checks (--view continuous-uniform); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'How is the expected value of a continuous uniform distribution computed?',
          answer: 'It is the midpoint of the interval, (a + b) / 2. A wait spread evenly over 0 to 20 minutes has an expected value of 10 minutes; the interval from 20 to 30 has 25.'
        },
        obj2: {
          question: 'What values can a and b take?',
          answer: 'Any numbers, decimals included, as long as a is below b. The sliders run from -50 to 50 for a and from -50 to 100 for b in steps of 0.5; the boxes accept any values, and an interval with a not below b shows a placeholder.'
        },
        obj3: {
          question: 'How are the variance and standard deviation computed?',
          answer: 'The variance is (b - a) squared divided by 12 and the standard deviation is its square root. For 0 to 10 they are about 8.3333 and 2.8868; for 0 to 20 they are about 33.3333 and 5.7735.'
        },
        obj4: {
          question: 'What do the Percentiles and the IQR show?',
          answer: 'The first quartile sits a quarter of the way along the interval, the median halfway and the third quartile three quarters along, so for 0 to 10 they are 2.5, 5 and 7.5. The IQR, the distance between the quartiles, is half the length of the interval: 5 for 0 to 10.'
        },
        obj5: {
          question: 'What does the Visualization tab draw?',
          answer: 'The flat density, a rectangle of height 1 divided by (b - a) over the interval, 0.1 for 0 to 10, with the mean marked in the middle and the standard deviation shown around it. The Calculation tab lists the three steps and the integral that give the midpoint.'
        },
        obj6: {
          question: 'What does Compare show?',
          answer: 'The expected value of the current interval next to that of an alternative interval, and their difference as a percentage of the current value, marked with an arrow, or the word Same when the midpoints agree. An alternative whose a is not below b shows nothing.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Discrete Uniform', link: '/probability/calculators/expected-value/discrete-uniform' },
            { title: 'Exponential', link: '/probability/calculators/expected-value/exponential' },
            { title: 'Normal', link: '/probability/calculators/expected-value/normal' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' }
          ]
        }
      ],
      instructions: [
        `Set **a** (minimum) and **b** (maximum) with the sliders or the number boxes; decimals are allowed, and the box reports the formula and the **Range** $b - a$. [Learn more about the interval](!#setting-a-and-b)`,
        `If $a$ is not below $b$ both boxes turn red and the results wait; click **Reset** to return to $[0, 10]$. [Learn more about messages and Reset](!#setting-a-and-b)`,
        `The **Percentiles** box under the parameters lists the minimum, the quartiles, the median and the maximum of the interval. [Learn more about the percentiles](!#reading-the-panel-and-the-percentiles)`,
        `The panel on the right shows $E(X)$ as the midpoint, with **Additional Statistics** (variance, standard deviation, interquartile range) behind a toggle and examples in context below the chart. [Learn more about the panel](!#reading-the-panel-and-the-percentiles)`,
        `Click **Compare** to set an alternative interval and see the two expected values side by side. [Learn more about comparing](!#comparing-two-intervals)`,
        `Use the tabs **Visualization** and **Calculation** for the flat density with its mean, or the steps and the integral; the box under the calculator explains the formula. [Learn more about the tabs](!#the-two-tabs)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value for Continuous Uniform Distribution',
          content: `**What Does E(X) Mean?** The expected value E(X) represents the average value of the distribution, the centre of mass of the density. For uniform distributions, this is simply the midpoint of the interval [a, b].

**Interpreting Your Result.** The average value across the distribution is E(X); it equals the median and the mode, which are all the same for a uniform interval; the values are evenly distributed around this centre point.

**Real-World Examples.** **Random number [0, 1]:** E(X) = 0.5. **Arrival time [0, 60] min:** E(X) = 30 minutes. **Temperature [20, 30] °C:** E(X) = 25 °C. **Duration [5, 15] s:** E(X) = 10 seconds.

**Why E(X) = (a + b) / 2.** The continuous uniform distribution has constant probability density across [a, b]. When you integrate x · f(x), you are finding the weighted average where all weights are equal. This naturally gives you the midpoint. It is the same as averaging two numbers: (a + b) / 2. [Learn more about the continuous uniform distribution](!#the-continuous-uniform-distribution)`
        }
      },
      demos: {
        'setting-a-and-b': {
          title: 'The bus wait, a bad order, [0, 1], Reset',
          scale: 0.4,
          minHeight: 649,
          script: [
            { say: 'TYPE 20 as b\nRange 20.00; E(X) = 10.000.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '20' },
            { wait: 2800 },
            { say: 'TYPE 25 as a\na is not below b: red boxes and a placeholder.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '25' },
            { wait: 2800 },
            { say: 'TYPE a = 0 and b = 1\nE(X) = 0.500; the context reads Uniform random number (0 to 1).', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '1' },
            { wait: 3000 },
            { say: 'CLICK Reset\nBack to [0, 10]: E(X) = 5.000.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-panel-and-the-percentiles': {
          title: '[20, 30], the extra statistics, [20, 60]',
          scale: 0.4,
          minHeight: 649,
          script: [
            { say: 'TYPE a = 20 and b = 30\nE(X) = 25.000; percentiles 20.00, 22.50, 25.00, 27.50, 30.00.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '30' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '20' },
            { wait: 3000 },
            { say: 'CLICK Additional Statistics\nVariance 8.3333, standard deviation 2.8868, IQR 5.0000.', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 2800 },
            { say: 'TYPE 60 as b\nE(X) = 40.000, variance 133.3333, standard deviation 11.5470, IQR 20.0000.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '60' },
            { wait: 3000 },
          ],
        },
        'comparing-two-intervals': {
          title: '[0, 10] against [5, 15], [5, 5], [-5, 5]',
          scale: 0.4,
          minHeight: 649,
          script: [
            { say: 'CLICK Compare\nAlternative [5, 15]: E(X) = 10.00, 100.0% higher than 5.00.', at: 'tr' },
            { click: { button: '▶ Compare' } },
            { wait: 3000 },
            { say: 'TYPE 5 as Alt b\n[5, 5] is not an interval: the alternative result disappears.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 3 }, value: '5' },
            { wait: 2800 },
            { say: 'TYPE -5 as Alt a\n[-5, 5] has E(X) = 0.00, 100.0% lower.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 2 }, value: '-5' },
            { wait: 2800 },
          ],
        },
        'the-two-tabs': {
          title: 'A wider rectangle, the calculation, the chart',
          scale: 0.4,
          minHeight: 649,
          script: [
            { say: 'TYPE 20 as b\nThe rectangle halves in height to 0.05; the mark moves to 10.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '20' },
            { wait: 2800 },
            { say: 'CLICK Calculation\nThree steps ending in 10.0000, then the integral.', at: 'tr' },
            { click: { button: 'Calculation', exact: true } },
            { wait: 3000 },
            { say: 'CLICK Visualization\nThe flat density is back.', at: 'tr' },
            { click: { button: 'Visualization', exact: true } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'setting-a-and-b', key: 'obj4', demo: 'setting-a-and-b' },
        { id: 'reading-the-panel-and-the-percentiles', key: 'obj5', demo: 'reading-the-panel-and-the-percentiles' },
        { id: 'comparing-two-intervals', key: 'obj6', demo: 'comparing-two-intervals' },
        { id: 'the-two-tabs', key: 'obj7', demo: 'the-two-tabs' },
        { id: 'the-continuous-uniform-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'exponential': {
      componentName: 'ExponentialExpectedValueCalculator',
      title: 'Exponential Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for exponential distribution. Enter rate parameter λ to compute E[X] = 1/λ with detailed formula breakdown.',
      keywords: ['exponential expected value', 'exponential mean calculator', '1/lambda formula', 'exponential distribution'],
      h1Title: 'Exponential Expected Value Calculator',
      url: '/probability/calculators/expected-value/exponential',
      name: 'Exponential Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Exponential Distribution`,
        content: `The [exponential distribution](!/probability/distributions/continuous/exponential) models the waiting time until the next event when events happen at a constant average rate $\\lambda$. It is the continuous counterpart of the geometric distribution, and it is linked to the Poisson distribution: if events arrive at rate $\\lambda$ per unit of time, the time between events is exponential.

The expected waiting time is the reciprocal of the rate. A higher rate means events come more often, so the average wait is shorter.

The experiment is set out in [the probabilistic experiment behind the exponential distribution](!/probability/distributions/continuous/exponential#1), the rate in [parameters](!/probability/distributions/continuous/exponential#3), and the links to the Poisson and geometric distributions in [related distributions](!/probability/distributions/continuous/exponential#16).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For an exponential random variable with rate $\\lambda$:

$$E[X] = \\frac{1}{\\lambda}, \\qquad \\text{Var}(X) = \\frac{1}{\\lambda^2}$$

Example: a server fails at an average rate of $\\lambda = 0.5$ times per year. The expected time until the next failure is

$$E[X] = \\frac{1}{0.5} = 2 \\text{ years}$$

Watch the units: the rate and the expected time use the same unit of time. Some books describe the distribution by its mean $\\beta = \\frac{1}{\\lambda}$ instead of its rate.

The mean is derived by integration in [expected value (mean)](!/probability/distributions/continuous/exponential#7), the variance in [variance and standard deviation](!/probability/distributions/continuous/exponential#8), and the median and quartiles the calculator lists in [quantiles and percentiles](!/probability/distributions/continuous/exponential#10).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Exponential models describe waiting times: time until the next customer arrives, the lifetime of an electronic part with no wear-out, or the time between earthquakes in a region.

The distribution is memoryless. If a part with an expected life of $2$ years has already worked for $1$ year, its expected remaining life is still $2$ years. This fits random failures, but not parts that wear out with age.

More settings are listed in [real-world examples and common applications](!/probability/distributions/continuous/exponential#12), and the memoryless property is proved in [properties](!/probability/distributions/continuous/exponential#15).`,
        link: '',
      },
      obj4: {
        title: `Setting the Rate`,
        content: `Under **Parameter**, set **λ** (Rate Parameter) with the slider, which runs from $0.01$ to $5$ in steps of $0.01$, or by typing any positive number in the box; a value of $0$ or less is ignored, and an emptied box makes the right panel show "Enter valid: λ > 0". While valid, the box reports the formula $E(X) = 1 / \\lambda$, the variance $1 / \\lambda^2$ and the memoryless identity $P(X > s + t \\mid X > s) = P(X > t)$, and the **Key Insight** line above the calculator restates $E(X)$ as the reciprocal of the rate, the time units between events.

The rate and the wait share one unit of time: with $\\lambda = 2$ events per second the expected wait is $0.500$ seconds and the context box below the chart reads "High rate (short wait times)"; with $\\lambda = 0.1$ per hour it is $10.000$ hours and the context reads "Long wait times (rare events)". The server of the worked example, $\\lambda = 0.5$ per year, waits $2.000$ years on average. There is no Calculate button; everything recomputes as you type.

**Reset**, at the top right of the parameter box, returns to $\\lambda = 0.5$, closes the comparison and the extra statistics, and selects the first tab. Why the wait is the reciprocal of the rate is explained in [the exponential distribution](!#the-exponential-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Panel and the Percentiles`,
        content: `The right panel is built around one number: **E(X)**, the average time between events, to three decimals, with $1 / \\lambda$ filled in. Click **▶ Additional Statistics** to open the variance, the standard deviation, which equals the mean, the coefficient of variation, always $1.0$, and the skewness, always $2.0$: every exponential distribution has the same shape, only the scale changes. Below the tabs, a context box turns the numbers into a scenario chosen from the mean: below $1$ reads "High rate (short wait times)", up to $5$ "Moderate wait times", up to $20$ "Long wait times (rare events)", and above that "Very rare events", each with three lines such as the median wait or the standard deviation.

On the left, under the parameters, the **Percentiles** box lists the **Mode**, always $0$, the first quartile **Q1**, the **Median** $\\ln 2 / \\lambda$, the third quartile **Q3** and the **Mean**. For $\\lambda = 0.1$ they read $0.00$, $2.88$, $6.93$, $13.86$ and $10.00$, with a variance of $100.0000$ and a standard deviation of $10.0000$; for $\\lambda = 2$ they read $0.00$, $0.14$, $0.35$, $0.69$ and $0.50$, with variance $0.2500$ and standard deviation $0.5000$. The median is always about $69\\%$ of the mean, because the long right tail pulls the mean up. The box under the calculator, **Understanding Expected Value for Exponential Distribution**, explains what $E(X)$ means, gives four stock examples and shows why the formula is $1 / \\lambda$; its link opens the first section below. The formula is worked through in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Rates`,
        content: `Click **▶ Compare** under the parameter box to open an **Alt λ**. The panel then shows the current rate with its $E(X)$, the alternative rate with its $E(X)$, and the difference as a percentage of the current wait, marked with an arrow as a longer or shorter wait. The alternative opens as $\\lambda = 1$: against $\\lambda = 0.5$ that is $E(X) = 1.00$, a $50.0\\%$ shorter wait than $2.00$. Change the alternative to $0.25$ and its wait becomes $4.00$, $100.0\\%$ longer; set it to $0.5$ and the panel says "Same".

The comparison shows the reciprocal rule: doubling the rate halves the wait, halving it doubles the wait. An alternative typed as $0$ or less is replaced by $0.01$. Why the wait is exactly $1 / \\lambda$ is explained in [the exponential distribution](!#the-exponential-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Two Tabs`,
        content: `Under the statistics are two tabs; they change what is drawn, not the numbers. **Visualization** (the default) draws the density $f(x) = \\lambda e^{-\\lambda x}$, which starts at height $\\lambda$ at $x = 0$ and falls away to the right, and marks the mean, the median to its left and the standard deviation around the mean; raising $\\lambda$ from $0.5$ to $2$ makes the curve start four times higher and fall four times faster, with the mark moving from $2$ to $0.5$. **Calculation** writes the formula and three steps: read off $\\lambda$, write $1 / \\lambda$, and compute, for $\\lambda = 0.5$ giving $2.0000$; below the steps an **Integration** block shows the same result as $\\int_0^{\\infty} x \\lambda e^{-\\lambda x}\\,dx$ by parts, and a one-line reason: a higher rate means less time between events.

Use the calculation tab to check a homework answer and the visualization to see the skewed shape and where the median and the mean sit. Reset returns to the visualization tab. The integral of the calculation tab is the one evaluated in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-14 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/exponential" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/continuous/exponential.
         Before editing this view, read the instructions and re-run its checks (--view exponential); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'How is the expected value of an exponential distribution computed?',
          answer: 'It is the reciprocal of the rate: E(X) = 1 / lambda. A rate of 0.5 events per year gives an expected wait of 2 years; a rate of 2 per second gives 0.5 seconds.'
        },
        obj2: {
          question: 'What values can lambda take?',
          answer: 'Any positive number. The slider runs from 0.01 to 5 in steps of 0.01; the box accepts any positive number, a value of 0 or less is ignored, and an emptied box shows a placeholder.'
        },
        obj3: {
          question: 'Why does the standard deviation equal the mean?',
          answer: 'The variance is 1 / lambda squared, so its square root is 1 / lambda, the mean itself. For lambda = 0.5 the variance is 4 and the standard deviation 2; the coefficient of variation is therefore always 1.'
        },
        obj4: {
          question: 'Why is the median smaller than the mean?',
          answer: 'The density is highest at 0 and has a long right tail, so a few long waits pull the mean up. The median is ln 2 divided by lambda, about 69 percent of the mean: 1.39 against 2 for lambda = 0.5.'
        },
        obj5: {
          question: 'What do the Percentiles show?',
          answer: 'The mode, always 0, the first quartile, the median, the third quartile and the mean. For lambda = 0.5 they are 0, 0.58, 1.39, 2.77 and 2; a quarter of the waits end before 0.58 and three quarters before 2.77.'
        },
        obj6: {
          question: 'What does Compare show?',
          answer: 'The expected wait for the current rate next to that for an alternative rate, and their difference as a percentage of the current wait, marked as a longer or shorter wait, or the word Same when the rates agree.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Continuous Uniform', link: '/probability/calculators/expected-value/continuous-uniform' },
            { title: 'Normal', link: '/probability/calculators/expected-value/normal' },
            { title: 'Poisson', link: '/probability/calculators/expected-value/poisson' },
            { title: 'Geometric', link: '/probability/calculators/expected-value/geometric' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' }
          ]
        }
      ],
      instructions: [
        `Set **λ** (the rate) with the slider or the number box; the box reports $E(X) = 1 / \lambda$, the variance and the memoryless identity. [Learn more about the rate](!#setting-the-rate)`,
        `If the box is emptied the results wait; click **Reset** to return to $\lambda = 0.5$. [Learn more about messages and Reset](!#setting-the-rate)`,
        `The **Percentiles** box under the parameter lists the mode, the quartiles, the median and the mean of the wait. [Learn more about the percentiles](!#reading-the-panel-and-the-percentiles)`,
        `The panel on the right shows $E(X)$ as the average time between events, with **Additional Statistics** (variance, standard deviation, coefficient of variation, skewness) behind a toggle and examples in context below the chart. [Learn more about the panel](!#reading-the-panel-and-the-percentiles)`,
        `Click **Compare** to set an alternative rate and see the two expected waits side by side. [Learn more about comparing](!#comparing-two-rates)`,
        `Use the tabs **Visualization** and **Calculation** for the falling density with its mean and median, or the steps and the integral; the box under the calculator explains the formula. [Learn more about the tabs](!#the-two-tabs)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value for Exponential Distribution',
          content: `**What Does E(X) Mean?** The expected value E(X) represents the average waiting time or time between events. For exponential distributions, this is simply 1/λ where λ is the rate of events.

**Interpreting Your Result.** The average wait time is E(X); the median wait is shorter, about 69% of the mean; the variability is high, since the standard deviation equals the mean.

**Real-World Examples.** **Server requests (λ = 2 per second):** E(X) = 0.5 seconds between requests. **Equipment failure (λ = 0.1 per hour):** E(X) = 10 hours until failure. **Customer arrivals (λ = 5 per minute):** E(X) = 0.2 minutes between customers. **Radioactive decay (λ = 0.01 per year):** E(X) = 100 years.

**Why E(X) = 1 / λ.** The exponential distribution models the time until an event occurs when events happen at a constant rate λ. If events occur at rate λ per time unit, the average time between events is naturally 1/λ. This reciprocal relationship comes directly from integrating x · f(x) over the exponential density. [Learn more about the exponential distribution](!#the-exponential-distribution)`
        }
      },
      demos: {
        'setting-the-rate': {
          title: 'λ = 2, λ = 0.1, λ = 0.25, Reset',
          scale: 0.4,
          minHeight: 623,
          script: [
            { say: 'TYPE 2 as λ\nE(X) = 0.500; the context reads High rate (short wait times).', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
            { wait: 2800 },
            { say: 'TYPE 0.1 as λ\nE(X) = 10.000; the context reads Long wait times (rare events).', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0.1' },
            { wait: 2800 },
            { say: 'TYPE 0.25 as λ\nE(X) = 4.000; the context reads Moderate wait times.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0.25' },
            { wait: 2600 },
            { say: 'CLICK Reset\nBack to λ = 0.5: E(X) = 2.000.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-panel-and-the-percentiles': {
          title: 'λ = 0.1, the extra statistics, λ = 2',
          scale: 0.4,
          minHeight: 623,
          script: [
            { say: 'TYPE 0.1 as λ\nPercentiles 0.00, 2.88, 6.93, 13.86, mean 10.00.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '0.1' },
            { wait: 2800 },
            { say: 'CLICK Additional Statistics\nVariance 100.0000, standard deviation 10.0000, coefficient of variation 1.0, skewness 2.0.', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 3000 },
            { say: 'TYPE 2 as λ\nE(X) = 0.500, variance 0.2500, standard deviation 0.5000; median 0.35.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
            { wait: 3000 },
          ],
        },
        'comparing-two-rates': {
          title: 'λ = 0.5 against 1, 0.25 and 0.5',
          scale: 0.4,
          minHeight: 623,
          script: [
            { say: 'CLICK Compare\nAlternative λ = 1: E(X) = 1.00, a 50.0% shorter wait than 2.00.', at: 'tr' },
            { click: { button: '▶ Compare' } },
            { wait: 3000 },
            { say: 'TYPE 0.25 as Alt λ\nE(X) = 4.00, a 100.0% longer wait.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.25' },
            { wait: 2800 },
            { say: 'TYPE 0.5 as Alt λ\nSame.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 1 }, value: '0.5' },
            { wait: 2600 },
          ],
        },
        'the-two-tabs': {
          title: 'A steeper curve, the calculation, the chart',
          scale: 0.4,
          minHeight: 623,
          script: [
            { say: 'TYPE 2 as λ\nThe curve starts four times higher and the mark moves to 0.5.', at: 'tr' },
            { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
            { wait: 2800 },
            { say: 'CLICK Calculation\nThree steps ending in 0.5000, then the integral by parts.', at: 'tr' },
            { click: { button: 'Calculation', exact: true } },
            { wait: 3000 },
            { say: 'CLICK Visualization\nThe falling density is back.', at: 'tr' },
            { click: { button: 'Visualization', exact: true } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'setting-the-rate', key: 'obj4', demo: 'setting-the-rate' },
        { id: 'reading-the-panel-and-the-percentiles', key: 'obj5', demo: 'reading-the-panel-and-the-percentiles' },
        { id: 'comparing-two-rates', key: 'obj6', demo: 'comparing-two-rates' },
        { id: 'the-two-tabs', key: 'obj7', demo: 'the-two-tabs' },
        { id: 'the-exponential-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    },
    'normal': {
      componentName: 'NormalExpectedValueCalculator',
      title: 'Normal Distribution Expected Value Calculator | Learn Math Class',
      description: 'Calculate expected value for normal distribution. Enter mean μ to compute E[X] = μ with formula explanation and standard deviation context.',
      keywords: ['normal expected value', 'normal mean calculator', 'gaussian distribution', 'mu parameter', 'normal distribution'],
      h1Title: 'Normal Distribution Expected Value Calculator',
      url: '/probability/calculators/expected-value/normal',
      name: 'Normal Distribution Expected Value Calculator',
      sectionsContent: {
      obj1: {
        title: `The Normal Distribution`,
        content: `The [normal distribution](!/probability/distributions/continuous/normal) is the bell-shaped distribution described by two parameters: the mean $\\mu$ and the standard deviation $\\sigma$. It is symmetric about $\\mu$, so the expected value, the median and the mode are all equal to $\\mu$.

Unlike most distributions, the normal distribution takes its expected value directly as a parameter. Changing $\\sigma$ makes the bell wider or narrower but does not move its center.

The bell is introduced in [the probabilistic experiment behind the normal distribution](!/probability/distributions/continuous/normal#1), its two numbers in [parameters](!/probability/distributions/continuous/normal#3), and the equality of mean, median and mode in [mode and median](!/probability/distributions/continuous/normal#9).`,
        link: '',
      },
      obj2: {
        title: `Formula and Worked Example`,
        content: `For a normal random variable with mean $\\mu$ and standard deviation $\\sigma$:

$$E[X] = \\mu, \\qquad \\text{Var}(X) = \\sigma^2$$

Example: adult heights in a population are modeled as normal with $\\mu = 170$ cm and $\\sigma = 8$ cm. The expected height is $170$ cm. About $68\\%$ of heights lie within one standard deviation of the mean, between $162$ and $178$ cm, and about $95\\%$ lie within two, between $154$ and $186$ cm.

The calculator above does not take $\\mu$ as an input: it estimates it from a sample by the sample mean, and gives a $95\\%$ interval for it. The mean is derived in [expected value (mean)](!/probability/distributions/continuous/normal#7), the variance in [variance and standard deviation](!/probability/distributions/continuous/normal#8), and the quartiles in [quantiles and percentiles](!/probability/distributions/continuous/normal#10).`,
        link: '',
      },
      obj3: {
        title: `Where This Is Used`,
        content: `Normal models describe measurements that come from many small independent effects: heights and weights, measurement errors, test scores, and variation in manufactured parts.

The [central limit theorem](!/probability/central-limit-theorem) explains why the normal distribution appears so often: averages of many independent values are close to normal whatever the shape of the original distribution. Normal tables and $z$-scores, $z = \\frac{x - \\mu}{\\sigma}$, then give the probabilities.

More settings are listed in [real-world examples and common applications](!/probability/distributions/continuous/normal#12), and the rules that make the sample mean itself normal in [properties](!/probability/distributions/continuous/normal#15).`,
        link: '',
      },
      obj4: {
        title: `Entering the Sample`,
        content: `This calculator does not ask for $\\mu$: it estimates the expected value from data. Type or paste your observations in the **Sample Data** box, separated by commas, spaces, semicolons or line breaks; anything that is not a number is skipped. The line under the box counts what was read, "✓ 10 valid data points" for the sample list, and turns into the warning "⚠ Need at least 2 numeric values" when fewer than two numbers remain, in which case the right panel shows "Enter at least 2 numeric values". While valid, the box reports the **Sample size** $n$, the formula $E(X) = \\mu \\approx \\bar{x} = \\sum x / n$ and the **Range** from the smallest to the largest value, and the **Key Insight** line above the calculator restates the estimate with its $95\\%$ interval.

The box opens with ten measurements around $100$, whose mean is $100.70$. Five heights, $162$, $170$, $178$, $166$ and $174$, give $E(X) \\approx 170.00$ with the range $[162.00, 178.00]$; a single value is rejected; the pair $170$, $180$ gives $175.00$. There is no Calculate button; everything recomputes as you type.

**Reset**, at the top right of the box, restores the sample list, closes the comparison and the extra statistics, and selects the first tab. Why the sample mean estimates $\\mu$ is explained in [the normal distribution](!#the-normal-distribution).`,
        link: '',
      },
      obj5: {
        title: `Reading the Sample Statistics`,
        content: `Under the data box, **Sample Statistics** lists the minimum, **Q1**, the **Median**, the **Mean (E(X))**, **Q3** and the maximum. The quartiles are read off the sorted list at a quarter and three quarters of the way through it, and the median is the middle value, or the average of the two middle values when $n$ is even. For the ten heights $162$, $170$, $178$, $166$, $174$, $170$, $158$, $182$, $170$, $170$ the six numbers read $158.00$, $166.00$, $170.00$, $170.00$, $174.00$ and $182.00$.

The right panel is built around **E(X) ≈** the sample mean, to two decimals, with $\\bar{x} = \\sum x / n$ filled in. Click **▶ Additional Statistics** to open the **Sample Variance** $s^2$, which divides by $n - 1$, the **Sample Std Dev** $s$, the **Standard Error** $s / \\sqrt{n}$, the **95% CI for μ**, $\\bar{x} \\pm t \\cdot s / \\sqrt{n}$, and the **Margin of Error**. For the ten heights they read $49.7778$, $7.0553$, $2.2311$, $[164.95, 175.05]$ and $\\pm 5.047$; for the pair $170$, $180$ they read $50.0000$, $7.0711$, $5.0000$, $[111.47, 238.53]$ and $\\pm 63.530$, a very wide interval because two values say little. The factor $t$ is Student's value for $n - 1$ degrees of freedom, $2.262$ for ten values and $12.706$ for two, and it approaches $1.96$ as the sample grows, so a small sample gets a wider interval than the normal factor would give. Below the chart, a context box repeats the estimate, the interval and the range $\\bar{x} \\pm s$.

The box under the calculator, **Understanding Expected Value Estimation for Normal Distribution**, explains what the estimate means, lists four settings and says why $\\bar{x}$ is the right estimator; its link opens the first section below. The parameters the estimate stands for are in [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      obj6: {
        title: `Comparing Two Datasets`,
        content: `Click **▶ Compare with Another Dataset** under the data box to open a second box, **Alternative dataset**, which opens with ten values whose mean is $99.60$. The panel then shows the current sample with its size and mean, the alternative with its size and mean, and the difference as a percentage of the current mean, marked with an arrow: against $100.70$ the alternative is $1.1\\%$ lower. Replace the alternative by $101$, $103$, $105$ and its mean $103.00$ is $2.3\\%$ higher; make it $100.7$, $100.7$ and the panel says "Same mean".

The comparison looks only at the means, not at the spread or the sample sizes, so it does not say whether the difference is larger than the sampling noise; the confidence intervals of the two samples are the tool for that. An alternative with fewer than two numbers shows nothing. Why a sample mean is only an estimate, with an interval around it, is explained in [the normal distribution](!#the-normal-distribution).`,
        link: '',
      },
      obj7: {
        title: `The Two Tabs`,
        content: `Under the statistics are two tabs; they change what is drawn, not the numbers. **Visualization** (the default) draws the bell curve with the sample mean and sample standard deviation, marks the data points along the axis and shades the $95\\%$ interval for the mean; typing the ten heights moves the bell from $100.7$ to $170$ and widens it, because their standard deviation is $7.06$ against $2.75$. **Calculation** writes the estimate in four steps: the sum of the data, the count, the quotient and the result, for the heights $1700.00 / 10 = 170.0000$, followed by a **Confidence Interval** block with the standard error $7.055 / \\sqrt{10} = 2.2311$ and the interval $[164.953, 175.047]$ with $t = 2.262$, and a sentence on how larger samples narrow it.

Use the calculation tab to check a homework answer and the visualization to see where the data sit under the bell and how wide the interval is. Reset returns to the visualization tab. The parameters behind the bell are those of [formula and worked example](!#formula-and-worked-example).`,
        link: '',
      },
      },
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/probability/calculators/expected-value/normal" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 7 sections (4 usage with demos), lesson links to distributions/continuous/normal.
         Before editing this view, read the instructions and re-run its checks (--view normal); keep the section ids and the anchors. */
      faqQuestions: {
        obj1: {
          question: 'Does the calculator take the mean as an input?',
          answer: 'No. For a normal distribution the expected value is the parameter mu, and the calculator estimates it from a sample: it adds the values and divides by their number. The sample list it opens with has mean 100.70.'
        },
        obj2: {
          question: 'How must the data be typed?',
          answer: 'As numbers separated by commas, spaces, semicolons or line breaks; anything else is skipped. At least two numbers are needed, otherwise a warning appears and the results wait.'
        },
        obj3: {
          question: 'Why does the sample variance divide by n - 1?',
          answer: 'Because the mean itself was estimated from the same data, dividing by n - 1 removes the downward bias. For the sample list the variance is about 7.5667 and the standard deviation 2.7508.'
        },
        obj4: {
          question: 'What is the 95% CI for mu?',
          answer: 'The sample mean plus and minus 1.96 times the standard error s divided by the square root of n. For the sample list it is about 98.99 to 102.41. The factor 1.96 is the normal value; for very small samples a t-value would give a slightly wider interval.'
        },
        obj5: {
          question: 'How are Q1, the median and Q3 found?',
          answer: 'From the sorted list: Q1 is the value a quarter of the way through, Q3 three quarters of the way through, and the median the middle value, or the average of the two middle values for an even count. For the sample list they are 98, 100.5 and 103.'
        },
        obj6: {
          question: 'What does Compare with Another Dataset show?',
          answer: 'The size and mean of the current sample next to those of an alternative sample, and the difference of the means as a percentage of the current mean, marked higher or lower, or the words Same mean when they agree.'
        }
      },
      navigationGroup: [
        {
          title: 'Expected Value Calculators',
          items: [
            { title: 'Direct Data', link: '/probability/calculators/expected-value/direct-data' },
            { title: 'Raw Data', link: '/probability/calculators/expected-value/raw-data' },
            { title: 'Grouped Data', link: '/probability/calculators/expected-value/grouped-data' },
            { title: 'Continuous Uniform', link: '/probability/calculators/expected-value/continuous-uniform' },
            { title: 'Exponential', link: '/probability/calculators/expected-value/exponential' },
            { title: 'Binomial', link: '/probability/calculators/expected-value/binomial' }
          ]
        }
      ],
      instructions: [
        `Type or paste your observations in the **Sample Data** box, separated by commas, spaces or line breaks; the line under it counts the valid numbers. [Learn more about the data box](!#entering-the-sample)`,
        `With fewer than two numbers a warning appears and the results wait; click **Reset** to restore the sample list. [Learn more about messages and Reset](!#entering-the-sample)`,
        `The **Sample Statistics** box lists the minimum, the quartiles, the median, the mean and the maximum of your data. [Learn more about the statistics](!#reading-the-sample-statistics)`,
        `The panel on the right shows $E(X) \approx \bar{x}$, with **Additional Statistics** (sample variance, standard deviation, standard error, $95\%$ interval, margin of error) behind a toggle and a context box below the chart. [Learn more about the panel](!#reading-the-sample-statistics)`,
        `Click **Compare with Another Dataset** to type a second sample and see the two means side by side. [Learn more about comparing](!#comparing-two-datasets)`,
        `Use the tabs **Visualization** and **Calculation** for the bell with the data and the interval, or the steps of the estimate; the box under the calculator explains why the sample mean estimates $\mu$. [Learn more about the tabs](!#the-two-tabs)`
      ],
      explanations: {
        main: {
          title: 'Understanding Expected Value Estimation for Normal Distribution',
          content: `**What Does E(X) Mean?** For a normal distribution, the expected value E(X) equals the population mean μ. When we do not know μ, we estimate it from sample data using the sample mean x̄. This x̄ is our best estimate of E(X).

**Interpreting Your Result.** The average of your observations is the estimate of E(X); it estimates the centre of the population distribution; the confidence interval quantifies the estimation uncertainty.

**Real-World Examples.** **Test scores:** the sample mean estimates the average performance. **Heights:** the average height of a sample estimates the population mean. **Manufacturing:** the sample average of a part dimension estimates the true mean. **Response times:** the mean time of a sample estimates the typical response.

**Why x̄ Estimates μ.** The sample mean x̄ is an unbiased estimator of the population mean μ: if we took many samples and computed x̄ for each, the average of all those x̄ values would equal μ. The central limit theorem tells us x̄ follows a normal distribution centred at μ, which allows us to construct confidence intervals. [Learn more about the normal distribution](!#the-normal-distribution)`
        }
      },
      demos: {
        'entering-the-sample': {
          title: 'Five heights, one value, two values, Reset',
          scale: 0.4,
          minHeight: 640,
          script: [
            { say: 'TYPE 162, 170, 178, 166, 174\n5 valid data points; E(X) ≈ 170.00; range [162.00, 178.00].', at: 'tr' },
            { set: { css: 'textarea', nth: 0 }, value: '162, 170, 178, 166, 174' },
            { wait: 3000 },
            { say: 'TYPE 170 alone\nOne number is not enough: the warning and a placeholder.', at: 'tr' },
            { set: { css: 'textarea', nth: 0 }, value: '170' },
            { wait: 2800 },
            { say: 'TYPE 170, 180\nTwo values: E(X) ≈ 175.00.', at: 'tr' },
            { set: { css: 'textarea', nth: 0 }, value: '170, 180' },
            { wait: 2800 },
            { say: 'CLICK Reset\nThe sample list is back: E(X) ≈ 100.70.', at: 'tr' },
            { click: { button: 'Reset' } },
            { wait: 2400 },
          ],
        },
        'reading-the-sample-statistics': {
          title: 'Ten heights, the extra statistics, a pair',
          scale: 0.4,
          minHeight: 640,
          script: [
            { say: 'TYPE the ten heights\nMin 158.00, Q1 166.00, median 170.00, mean 170.00, Q3 174.00, max 182.00.', at: 'tr' },
            { set: { css: 'textarea', nth: 0 }, value: '162, 170, 178, 166, 174, 170, 158, 182, 170, 170' },
            { wait: 3200 },
            { say: 'CLICK Additional Statistics\ns² 49.7778, s 7.0553, standard error 2.2311, 95% CI [164.95, 175.05], margin ±5.047.', at: 'tr' },
            { click: { button: '▶ Additional Statistics' } },
            { wait: 3200 },
            { say: 'TYPE 170, 180\ns² 50.0000, s 7.0711, standard error 5.0000, CI [111.47, 238.53], margin ±63.530.', at: 'tr' },
            { set: { css: 'textarea', nth: 0 }, value: '170, 180' },
            { wait: 3200 },
          ],
        },
        'comparing-two-datasets': {
          title: 'The sample list against three alternatives',
          scale: 0.4,
          minHeight: 640,
          script: [
            { say: 'CLICK Compare with Another Dataset\nAlternative mean 99.60, 1.1% lower than 100.70.', at: 'tr' },
            { click: { button: '▶ Compare with Another Dataset' } },
            { wait: 3000 },
            { say: 'TYPE 101, 103, 105 as the alternative\nMean 103.00, 2.3% higher.', at: 'tr' },
            { set: { css: 'textarea', nth: 1 }, value: '101, 103, 105' },
            { wait: 2800 },
            { say: 'TYPE 100.7, 100.7 as the alternative\nSame mean.', at: 'tr' },
            { set: { css: 'textarea', nth: 1 }, value: '100.7, 100.7' },
            { wait: 2600 },
          ],
        },
        'the-two-tabs': {
          title: 'A wider bell, the calculation, the chart',
          scale: 0.4,
          minHeight: 640,
          script: [
            { say: 'TYPE the ten heights\nThe bell moves to 170 and widens.', at: 'tr' },
            { set: { css: 'textarea', nth: 0 }, value: '162, 170, 178, 166, 174, 170, 158, 182, 170, 170' },
            { wait: 3000 },
            { say: 'CLICK Calculation\nΣx = 1700.00, n = 10, x̄ = 170.0000; SE 2.2311; t = 2.262; CI [164.953, 175.047].', at: 'tr' },
            { click: { button: 'Calculation', exact: true } },
            { wait: 3200 },
            { say: 'CLICK Visualization\nThe bell is back.', at: 'tr' },
            { click: { button: 'Visualization', exact: true } },
            { wait: 2600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'entering-the-sample', key: 'obj4', demo: 'entering-the-sample' },
        { id: 'reading-the-sample-statistics', key: 'obj5', demo: 'reading-the-sample-statistics' },
        { id: 'comparing-two-datasets', key: 'obj6', demo: 'comparing-two-datasets' },
        { id: 'the-two-tabs', key: 'obj7', demo: 'the-two-tabs' },
        { id: 'the-normal-distribution', key: 'obj1', demo: null },
        { id: 'formula-and-worked-example', key: 'obj2', demo: null },
        { id: 'where-this-is-used', key: 'obj3', demo: null },
      ]
    }
  };

  const config = viewConfig[view];



  const sectionsContent = config.sectionsContent || {
    obj1: {
      title: `Understanding Expected Value`,
      content: ``,
      link: '',
    },
    obj2: {
      title: `Formula and Calculation`,
      content: ``,
      link: '',
    },
    obj3: {
      title: `Applications`,
      content: ``,
      link: '',
    }
  };

  const introContent = {
    id: "intro",
    title: "Calculate Expected Value",
    content: `Use the calculator below to compute the expected value with step-by-step solutions and detailed explanations.`
  };

  const pageUrl = `https://www.learnmathclass.com${config.url}`;
  const schemas = config.faqQuestions ? {
    webApplication: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: config.name,
      description: config.description,
      url: pageUrl,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: { '@type': 'Organization', name: 'Learn Math Class' },
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      keywords: config.keywords.join(', '),
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.learnmathclass.com' },
        { '@type': 'ListItem', position: 2, name: 'Probability', item: 'https://www.learnmathclass.com/probability' },
        { '@type': 'ListItem', position: 3, name: 'Probability Calculators', item: 'https://www.learnmathclass.com/probability/calculators' },
        { '@type': 'ListItem', position: 4, name: 'Expected Value Calculators', item: 'https://www.learnmathclass.com/probability/calculators/expected-value' },
        { '@type': 'ListItem', position: 5, name: config.h1Title, item: pageUrl },
      ],
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Object.keys(config.faqQuestions).map((key) => ({
        '@type': 'Question',
        name: config.faqQuestions[key].question,
        acceptedAnswer: { '@type': 'Answer', text: config.faqQuestions[key].answer },
      })),
    },
  } : null;

  return {
    props: {
      sectionsContent,
      introContent,
      instructions: config.instructions || [],
      explanations: config.explanations || null,
      demos: config.demos || {},
      sectionOrder: config.sectionOrder || [],
      faqQuestions: config.faqQuestions || null,
      navigationGroup: config.navigationGroup || null,
      schemas,
      seoData: {
        title: config.title,
        description: config.description,
        keywords: config.keywords.join(", "),
        url: config.url,
        name: config.name
      },
      componentName: config.componentName,
      h1Title: config.h1Title
    }
  };
}

export default function ExpectedValueCalculatorPage({ seoData, sectionsContent, introContent, componentName, h1Title, instructions = [], explanations = null, demos = {}, sectionOrder = [], faqQuestions = null, navigationGroup = null, schemas = null }) {

  // the file's old fixed list, kept for views without a sectionOrder yet
  const buildOldGenericSections = () => [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    }
  ];

  const renderCalculator = (demoProps = {}) => {
    if (componentName === 'DirectExpectedValueCalculator') return <DirectExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'RawDataExpectedValueCalculator') return <RawDataExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'GroupedDataExpectedValueCalculator') return <GroupedDataExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'DiscreteUniformExpectedValueCalculator') return <DiscreteUniformExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'BinomialExpectedValueCalculator') return <BinomialExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'GeometricExpectedValueCalculator') return <GeometricExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'NegativeBinomialExpectedValueCalculator') return <NegativeBinomialExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'HypergeometricExpectedValueCalculator') return <HypergeometricExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'PoissonExpectedValueCalculator') return <PoissonExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'ContinuousUniformExpectedValueCalculator') return <ContinuousUniformExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'ExponentialExpectedValueCalculator') return <ExponentialExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'NormalExpectedValueCalculator') return <NormalExpectedValueCalculator explanations={explanations || undefined} {...demoProps} />;
    return null;
  };

  const demoOptOut = {};

  const genericSections = sectionOrder.length > 0
    ? sectionOrder.map((s) => ({
        id: s.id,
        title: sectionsContent[s.key].title,
        link: sectionsContent[s.key].link || '',
        content: [
          ...[s.demo, s.demo2].filter(Boolean).map((d) => (
            <ToolDemoPlayer
              key={`demo-${s.id}-${d}`}
              script={demos[d].script}
              title={demos[d].title}
              label={`Demo: ${demos[d].title}`}
              scale={demos[d].scale || 0.6}
              minHeight={demos[d].minHeight || undefined}
              renderText={processContent}
            >
              {renderCalculator(demoOptOut)}
            </ToolDemoPlayer>
          )),
          sectionsContent[s.key].content,
        ],
      }))
    : buildOldGenericSections();

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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": seoData.name,
              "description": seoData.description,
              "keywords": seoData.keywords,
              "url": `https://www.learnmathclass.com${seoData.url}`,
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "mainEntity": {
                "@type": "Article",
                "name": seoData.name,
                "dateModified": new Date().toISOString(),
                "author": {
                  "@type": "Organization",
                  "name": "Learn Math Class"
                }
              }
            })
          }}
        />
        {schemas && <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }} />}
        {schemas && <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />}
        {schemas && <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />}
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
        {h1Title}
      </h1>
      {instructions.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <ExplanationDetails instructions={instructions} title={`How to use ${h1Title}`} />
        </div>
      )}
      <br/>

      {navigationGroup ? (
        <>
          <style jsx>{`
            .layout-container {
              display: grid;
              grid-template-columns: 250px 1fr;
              gap: 20px;
              width: 100%;
            }
            @media (max-width: 1024px) {
              .layout-container {
                grid-template-columns: 1fr;
              }
              .layout-container > div:first-child,
              .layout-container > div:first-child *,
              :global([class*="vertical"]),
              :global([class*="vertical"]) * {
                position: static !important;
              }
            }
          `}</style>
          <div className='layout-container'>
            <div>
              <br />
              <VerticalButtonGroup items={navigationGroup} width='250px' theme='lightBlue' isSticky={true} verticalOffset='200px' />
            </div>
            <div className="calculator-widget" style={{ width: '100%', maxWidth: '1200px', padding: '0 20px', transform: 'scale(0.95)', transformOrigin: 'top left' }}>
              {renderCalculator()}
            </div>
          </div>
        </>
      ) : (
        <div className="calculator-widget"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          transform:'scale(0.95)',
        }}>
          {renderCalculator()}
        </div>
      )}

      <div style={{maxWidth:'1160px',margin:'0 auto',padding:'0 20px'}}>
        <AffiliateBlock variant="strip" {...COURSES.probability} headline="Expected value is the start of random variables" />
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      />
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}