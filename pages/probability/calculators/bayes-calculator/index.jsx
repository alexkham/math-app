
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import BayesTheoremCalculator from '@/app/components/calculators/probability/BayesCalculator'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'


/* calculators-mesh: finished 2026-10-17 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/probability/calculators/bayes-calculator" in calculators-mesh-registry.json (same folder): 6 usage sections, each with a demo; 3 panel notes; 12 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export async function getStaticProps(){

  const keyWords = [
    'bayes theorem calculator',
    'bayes calculator',
    'posterior probability',
    'conditional probability calculator',
    'bayes rule calculator',
    'bayesian inference',
    'likelihood ratio calculator',
    'prior probability',
    'bayes formula',
    'medical test calculator',
    'false positive calculator',
    'bayesian statistics',
    'probability tree diagram',
    'bayes theorem solver',
    'conditional probability tool'
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting Your Calculation Mode`,
      content: `The calculator offers three specialized modes tailored to different Bayes' Theorem applications. **General Bayes' Theorem** mode works with abstract events A and B, requiring prior probability P(A), conditional probability P(B|A), and P(B|A'). This mode suits any scenario where you're updating beliefs based on new evidence.

**Medical Test** mode simplifies diagnostic probability calculations. Instead of abstract notation, you enter disease prevalence, test sensitivity (true positive rate), and specificity (true negative rate). The calculator automatically computes false positive rate and determines the probability of actually having the disease given a positive test result.

**Multiple Hypotheses** mode extends Bayes' Theorem to compare 2-6 competing theories simultaneously. Enter prior probabilities and conditional probabilities for each hypothesis. The calculator updates all hypotheses based on observed evidence and ranks them by posterior probability. This mode excels for comparing multiple explanations or scenarios.
The three buttons sit under **Calculation Mode** at the top of the card, each with a one-line description; the input card's heading changes with the mode, "Input Probabilities", "Test Parameters" or "Hypotheses", and an example box under the buttons shows typical values. Switching mode keeps the numbers typed in the other modes. The three forms of the theorem are explained in [What is Bayes' Theorem?](!#what-is-bayes-theorem), [The Medical Test Form of Bayes' Theorem](!#the-medical-test-form-of-bayes-theorem) and [Bayes' Theorem with Several Hypotheses](!#bayes-theorem-with-several-hypotheses).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Entering Probabilities in General Mode`,
      content: `General mode requires three probability inputs, all between 0 and 1. **P(A)** represents the prior probability—your initial belief that event A is true before observing any evidence. For a rare disease affecting 1% of the population, enter 0.01.

**P(B|A)** specifies the conditional probability of observing evidence B when A is true. If a medical test correctly identifies disease 95% of the time, enter 0.95. This represents how strongly B indicates A.

**P(B|A')** gives the conditional probability of observing B when A is false. For the medical test, if false positive rate is 5%, enter 0.05. This quantifies how often B occurs even without A. The calculator uses these three values to compute posterior probability P(A|B)—the updated probability of A given that you've observed B.
Each box takes a value from $0$ to $1$. A value outside that range, or a box left empty, is reported at Calculate time with "P(A) must be between 0 and 1" or the message of its sibling box. With $P(A) = 0.01$, $P(B \\mid A) = 0.95$ and $P(B \\mid A') = 0.05$ the posterior is $P(A \\mid B) = 16.10\\%$, with $P(B) = 5.90\\%$, prior odds $0.01$ and a likelihood ratio of $19.00$; raising the prior to $P(A) = 0.5$ lifts the posterior to $95.00\\%$. The formula behind the three numbers is in [What is Bayes' Theorem?](!#what-is-bayes-theorem).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Using the Medical Test Calculator`,
      content: `Medical test mode uses domain-specific terminology familiar to healthcare applications. **Disease Prevalence** equals P(Disease)—the base rate in the population being tested. For a cancer affecting 1 in 1,000 people, enter 0.001.

**Sensitivity** measures the true positive rate: P(Positive Test|Disease). A sensitivity of 0.90 means the test correctly identifies 90% of actual cases. Higher sensitivity reduces false negatives—sick patients who test negative.

**Specificity** measures the true negative rate: P(Negative Test|No Disease). A specificity of 0.95 means the test correctly identifies 95% of healthy individuals. The calculator automatically computes false positive rate as 1 minus specificity. Results show P(Disease|Positive Test)—the crucial probability that a positive test actually indicates disease, which is often surprisingly low when prevalence is rare.
With prevalence $0.01$, sensitivity $0.90$ and specificity $0.95$ the result reads $P(\\text{Disease} \\mid \\text{Positive Test}) = 15.38\\%$ and $P(\\text{No Disease} \\mid +) = 84.62\\%$; a prevalence of $0.1$ raises the first to $66.67\\%$. A value above $1$ or an empty box is reported at Calculate time as "Prevalence must be between 0 and 1" or the message of its sibling box. Why a positive test on a rare disease stays unconvincing is explained in [The Medical Test Form of Bayes' Theorem](!#the-medical-test-form-of-bayes-theorem).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Setting Up Multiple Hypotheses`,
      content: `Multiple hypotheses mode accommodates 2-6 competing theories. First, set the number of hypotheses in the **Number of Hypotheses (2-6)** box; rows are added or removed to match, and the values already typed stay in place. Each hypothesis gets a name (H₁, H₂, etc.) and requires two probabilities.

**Prior Probability P(Hᵢ)** represents your initial belief in each hypothesis before observing evidence. These priors must sum to exactly 1.0. For three equally likely theories, use 0.333, 0.333, 0.334. For theories with different plausibility, weight accordingly: perhaps 0.5, 0.3, 0.2.

**Conditional Probability P(E|Hᵢ)** specifies how likely the observed evidence is under each hypothesis. If evidence E strongly supports H₁, that conditional probability might be 0.8, while H₂ gets 0.4 and H₃ gets 0.2. The calculator updates all hypotheses simultaneously, showing which theory the evidence favors most.
With priors $0.5$, $0.3$, $0.2$ and likelihoods $0.8$, $0.6$, $0.4$ the posteriors are $60.61\\%$, $27.27\\%$ and $12.12\\%$ with $P(E) = 66.00\\%$. Priors that do not add up are refused at Calculate time with "Prior probabilities must sum to 1 (currently sum to …)". The general form of the update is in [Bayes' Theorem with Several Hypotheses](!#bayes-theorem-with-several-hypotheses).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading Results and Tree Diagrams`,
      content: `Results display prominently at the top with the posterior probability—the main answer showing updated belief after observing evidence. The percentage indicates how likely event A or disease actually is given the observed evidence B or positive test. Color coding highlights significance: red for low probabilities, blue for moderate, green for high.

The probability tree diagram visualizes the calculation structure. Branches show prior probabilities splitting into conditional paths. Green and orange paths highlight the routes leading to observed evidence. Joint probabilities appear at branch endpoints, showing P(A∩B) for each combination.

Additional metrics include **Prior Odds** (P(A)/P(A')), **Likelihood Ratio** (P(B|A)/P(B|A')), and **Posterior Odds**. These odds-based formulations provide alternative perspectives on how evidence updates beliefs. The likelihood ratio quantifies evidence strength—ratios above 1 support A, below 1 oppose it.
Before the first Calculate the result area reads "Ready to Calculate" and the diagram area "Visualization Ready"; after it, the main card is headed **Posterior Probability** in general mode and **Test Result** in medical mode, with a short verdict such as "(Low probability)" under the percentage, and the four smaller cards give $P(A' \\mid B)$, $P(B)$, the prior odds and the likelihood ratio. In Multiple Hypotheses mode the result lists every hypothesis with a bar from prior to posterior and names the most likely one. What the odds and the ratio measure is explained in [Likelihood Ratios and Odds](!#likelihood-ratios-and-odds).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Interpreting Step-by-Step Solutions`,
      content: `The step-by-step section breaks the calculation into expandable stages. Click any step header to reveal detailed arithmetic. **Given Information** lists all inputs with proper notation. **Step 1** calculates P(A'), the complement probability (1 - P(A)).

**Step 2** applies the Law of Total Probability to find P(B): the total probability of observing evidence across all scenarios. This equals P(B|A) × P(A) + P(B|A') × P(A'), summing probability across both A true and A false branches.

**Step 3** executes Bayes' Theorem itself: P(A|B) = [P(B|A) × P(A)] / P(B). The numerator weights the prior by how well A predicts B. The denominator normalizes by total evidence probability. **Step 4** computes P(A'|B) as 1 - P(A|B), ensuring probabilities sum to 1. **Additional Insights** show the odds formulation, demonstrating that posterior odds equal prior odds multiplied by likelihood ratio.
The headers read **Given Information**, **Step 1: Calculate P(A')**, **Step 2: Calculate P(B) using Law of Total Probability**, **Step 3: Apply Bayes' Theorem to find P(A|B)**, **Step 4: Calculate P(A'|B)** and **Additional Insights: Odds Form**; in Multiple Hypotheses mode there are three steps, ending with a verification that the posteriors sum to one. The law used in step 2 is explained in [What is Bayes' Theorem?](!#what-is-bayes-theorem) and taught in [The law of total probability](!/probability/total-probability#law).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is Bayes' Theorem?`,
      content: `Bayes' Theorem is a fundamental formula for updating probabilities based on new evidence. Mathematically: $P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)}$. It answers the question: given that I've observed B, what's the probability that A is true?

The theorem reverses conditional probabilities. If you know P(B|A) (probability of evidence given hypothesis), Bayes' Theorem calculates P(A|B) (probability of hypothesis given evidence). This reversal is crucial because we observe evidence and want to infer causes, but direct knowledge often flows the opposite direction.

The formula combines three components: the **prior** P(A) representing initial belief, the **likelihood** P(B|A) measuring how well A predicts the evidence, and the **marginal probability** P(B) normalizing the result. Stronger evidence (higher likelihood ratio) produces larger updates from prior to posterior.

For comprehensive theory on Bayes' Theorem including proofs, derivations, and applications, see [Bayes' theorem](!/probability/bayes-theorem#formula).

The lesson states the theorem in words in [Bayes' theorem in words](!/probability/bayes-theorem#words), derives it from [Conditional probability](!/probability/bayes-theorem#conditional) and works examples in [Examples](!/probability/bayes-theorem#examples).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Understanding Prior and Posterior Probabilities`,
      content: `The **prior probability** P(A) represents belief before observing evidence—the base rate or initial plausibility. In medical testing, prior equals disease prevalence. In hypothesis testing, prior reflects background knowledge about each theory's likelihood. Priors incorporate existing information before the current observation.

The **posterior probability** P(A|B) represents updated belief after observing evidence B. It combines prior belief with new information. The posterior becomes the new prior for subsequent updates—Bayesian inference proceeds iteratively, refining probabilities as more evidence accumulates.

The shift from prior to posterior quantifies learning. If posterior equals prior, evidence was uninformative. If posterior greatly exceeds prior, evidence strongly supports A. If posterior falls below prior, evidence argues against A. The magnitude of change depends on both evidence strength (likelihood ratio) and how surprising the evidence is (marginal probability P(B)).

The lesson explains why the update matters in [Why Bayes' theorem matters](!/probability/bayes-theorem#matters) and lists the slips to avoid in [Common mistakes](!/probability/bayes-theorem#mistakes).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Likelihood Ratios and Odds`,
      content: `The **likelihood ratio** equals P(B|A) / P(B|A'), comparing how much more likely evidence is under A versus not-A. A likelihood ratio of 10 means evidence is 10 times more likely if A is true. Ratios above 1 support A, below 1 oppose A, exactly 1 is uninformative.

**Odds** express probability as ratios rather than fractions. Prior odds = P(A) / P(A'), posterior odds = P(A|B) / P(A'|B). Bayes' Theorem in odds form states: posterior odds = prior odds × likelihood ratio. This multiplicative relationship shows how evidence scales belief.

Converting between probability and odds: odds = p / (1-p), probability = odds / (1+odds). Odds of 3:1 correspond to probability 0.75. The odds formulation clarifies that weak evidence (likelihood ratio near 1) barely changes odds, while strong evidence (extreme likelihood ratios) dramatically shifts belief regardless of prior.

The odds form and its connections are covered in [The formula](!/probability/bayes-theorem#formula) and [Connections](!/probability/bayes-theorem#connections).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Calculators`,
      content: `**[Conditional Probability Calculator](!/probability/calculators/conditional-probability)** - Compute P(A|B) for various probability scenarios with Venn diagram visualizations.

**[Law of Total Probability Calculator](!/probability/visual-tools/total-probability)** - Calculate marginal probabilities by partitioning sample space across multiple events.

**Sensitivity and Specificity Calculator** - Analyze medical test performance metrics including positive/negative predictive values.

**[Probability Distribution Calculators](!/probability/visual-tools/distributions)** - Compute probabilities for discrete and continuous distributions in Bayesian contexts.

**[Expected Value Calculator](!/probability/calculators/expected-value)** - Calculate expected outcomes incorporating probabilities and payoffs for decision analysis.

**Hypothesis Testing Tools** - Perform statistical hypothesis tests using frequentist and Bayesian approaches.

**Probability Tree Diagram Generator** - Create custom probability trees for complex multi-stage random processes.

**[Joint Probability Calculator](!/probability/calculators/joint-probability)** - Calculate probabilities for intersections and unions of multiple events.

The theory behind these tools is taught in [Bayes' theorem](!/probability/bayes-theorem#formula), [The law of total probability](!/probability/total-probability#law) and [The conditional probability formula](!/probability/conditional-probability#formula).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Medical Test Form of Bayes' Theorem`,
      content: `The Medical Test mode is Bayes' theorem with the three inputs renamed: the prevalence is the prior $P(D)$, the sensitivity is $P(+ \\mid D)$, and the specificity is $P(- \\mid D')$, so the false positive rate is $1 - \\text{specificity}$. The posterior is $P(D \\mid +) = \\frac{P(+ \\mid D)\\,P(D)}{P(+ \\mid D)\\,P(D) + P(+ \\mid D')\\,P(D')}$.

With prevalence $0.01$, sensitivity $0.90$ and specificity $0.95$: the numerator is $0.009$, the false positives contribute $0.05 \\cdot 0.99 = 0.0495$, so $P(+) = 0.0585$ and $P(D \\mid +) = 0.009 / 0.0585 \\approx 15.38\\%$. Only one positive in six or seven is a true case, because the healthy majority produces more false positives than the sick minority produces true ones. Raising the prevalence to $0.1$ lifts the posterior to $66.67\\%$. The common mistake is to read the sensitivity, $90\\%$, as the chance of having the disease after a positive test; that confuses $P(+ \\mid D)$ with $P(D \\mid +)$.

See [Examples](!/probability/bayes-theorem#examples) and [Why Bayes' theorem matters](!/probability/bayes-theorem#matters) in the lesson, and [The law of total probability](!/probability/total-probability#law) for the denominator.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj12: {
      title: `Bayes' Theorem with Several Hypotheses`,
      content: `When evidence $E$ bears on several competing hypotheses $H_1, \\ldots, H_n$ whose priors add up to $1$, Bayes' theorem updates all of them at once: $P(H_i \\mid E) = \\frac{P(E \\mid H_i)\\,P(H_i)}{P(E)}$ with $P(E) = \\sum_j P(E \\mid H_j)\\,P(H_j)$ by the law of total probability. Every posterior is the hypothesis's share of the total evidence probability, so the posteriors add up to $1$ again.

With priors $0.5$, $0.3$, $0.2$ and likelihoods $0.8$, $0.6$, $0.4$: the products are $0.40$, $0.18$ and $0.08$, their sum is $P(E) = 0.66$, and the posteriors are $60.61\\%$, $27.27\\%$ and $12.12\\%$. The ranking can change: a hypothesis with a small prior but a high likelihood can overtake one that started ahead. The common mistake is to enter priors that do not sum to $1$, which the calculator refuses; the second is to forget that the likelihoods need not sum to anything, since each is a probability under a different hypothesis.

See [Bayes' theorem and total probability](!/probability/bayes-theorem#total) and [The chain rule](!/probability/bayes-theorem#chain) in the lesson, and [Bayes' theorem](!/probability/total-probability#bayes) in the total probability lesson.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is Bayes' Theorem and when should you use it?",
      answer: "Bayes' Theorem is a formula for updating probabilities based on new evidence: P(A|B) = [P(B|A) × P(A)] / P(B). Use it when you know P(B|A) (how A predicts B) but need P(A|B) (how B indicates A). Common applications include medical diagnosis (disease probability given test results), spam filtering, machine learning classification, and any scenario requiring probability updates based on observations."
    },
    obj2: {
      question: "Why are positive test results often misleading for rare diseases?",
      answer: "Even with high test accuracy, positive results for rare diseases often have low probability of actual disease due to base rate effects. If a disease affects 0.1% of people and the test has 5% false positive rate, most positive results come from the 99.9% healthy population. The calculator shows this counterintuitive result: a 95% accurate test for a 0.1% prevalence disease yields only about 2% probability of disease given a positive result."
    },
    obj3: {
      question: "What is the difference between prior and posterior probability?",
      answer: "Prior probability P(A) is your belief before observing evidence—the base rate or initial assessment. Posterior probability P(A|B) is your updated belief after observing evidence B. Bayes' Theorem connects them: posterior equals prior weighted by how well A predicts the evidence and normalized by total evidence probability. The posterior becomes the new prior for future updates."
    },
    obj4: {
      question: "What is a likelihood ratio and how do you interpret it?",
      answer: "The likelihood ratio equals P(B|A) / P(B|A'), comparing how much more likely evidence is if A is true versus false. A ratio of 10 means evidence is 10 times more likely under A. Ratios above 1 support A, below 1 oppose A, exactly 1 is uninformative. Strong evidence has extreme ratios (very high or very low). In medical testing, a high likelihood ratio indicates a good diagnostic test."
    },
    obj5: {
      question: "How do you use the multiple hypotheses mode?",
      answer: "Multiple hypotheses mode compares 2-6 competing theories simultaneously. Enter prior probabilities for each hypothesis (must sum to 1.0) and conditional probabilities P(E|Hᵢ) showing how well each hypothesis predicts the observed evidence. The calculator updates all hypotheses using Bayes' Theorem and ranks them by posterior probability, showing which theory the evidence most strongly supports."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Bayes' Theorem Calculator",
      "description": "Interactive Bayesian probability calculator with three modes: general Bayes' theorem, medical test analysis, and multiple hypotheses comparison, featuring step-by-step solutions and probability tree diagrams.",
      "url": "https://www.learnmathclass.com/probability/calculators/bayes-calculator",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three calculation modes: general Bayes, medical test, multiple hypotheses",
        "Input validation for probability values between 0 and 1",
        "Real-time posterior probability calculations",
        "Interactive probability tree diagrams",
        "Step-by-step solution breakdowns with expandable sections",
        "Likelihood ratio and odds calculations",
        "Medical test sensitivity and specificity analysis",
        "Multiple hypotheses comparison (2-6 hypotheses)",
        "Visual results display with color-coded probabilities",
        "Example scenarios for each calculation mode"
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
          "name": "Bayes Calculator",
          "item": "https://www.learnmathclass.com/probability/calculators/bayes-calculator"
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
    `Pick a mode under **Calculation Mode**: **General Bayes' Theorem**, **Medical Test** or **Multiple Hypotheses**; the input card and the example box change with it. [Learn more about the modes](!#selecting-your-calculation-mode)`,
    `In General mode type **P(A)**, **P(B|A)** and **P(B|A')**, each between 0 and 1. [Learn more about the general inputs](!#entering-probabilities-in-general-mode)`,
    `In Medical Test mode type the **Disease Prevalence**, the **Sensitivity** and the **Specificity**. [Learn more about the medical inputs](!#using-the-medical-test-calculator)`,
    `In Multiple Hypotheses mode set the **Number of Hypotheses (2-6)** and type a prior and a conditional probability for each row; the priors must sum to 1. [Learn more about the hypotheses](!#setting-up-multiple-hypotheses)`,
    `Click **Calculate**; the posterior appears in the result card with the smaller cards and the tree diagram, or a red box lists the problems. **Reset** clears every mode. [Learn more about the results](!#reading-results-and-tree-diagrams)`,
    `Expand the headers of the **Step-by-Step Solution** to follow the arithmetic, and read the panel on the right for the formula of the current mode. [Learn more about the steps](!#interpreting-step-by-step-solutions)`,
  ];
  const bayesExplanations = {
    general: {
      title: `General Bayes' Theorem`,
      content: `Turns $P(B \mid A)$ into $P(A \mid B)$: the prior $P(A)$ is weighted by the likelihood $P(B \mid A)$ and divided by the total probability $P(B) = P(B \mid A)P(A) + P(B \mid A')P(A')$. [Learn more about Bayes' theorem](!#what-is-bayes-theorem)`,
    },
    medical: {
      title: `Medical Test`,
      content: `The same theorem with the prevalence as prior, the sensitivity as $P(+ \mid D)$ and $1 - \text{specificity}$ as the false positive rate; the answer is the chance of the disease after a positive test. [Learn more about the medical test form](!#the-medical-test-form-of-bayes-theorem)`,
    },
    multiple: {
      title: `Multiple Hypotheses`,
      content: `Updates every hypothesis at once: each posterior is $P(E \mid H_i)P(H_i)$ divided by the total $P(E)$, so the posteriors sum to $1$ like the priors. [Learn more about several hypotheses](!#bayes-theorem-with-several-hypotheses)`,
    },
  };
  const demos = {
    'selecting-your-calculation-mode': {
      title: 'The three modes',
      scale: 0.5,
      minHeight: 395,
      script: [
        { say: 'CLICK Medical Test\nThe input card is headed Test Parameters: prevalence, sensitivity, specificity.', at: 'tr' },
        { click: { button: 'Medical Test' } },
        { wait: 2600 },
        { say: 'CLICK Multiple Hypotheses\nHypotheses: a number box and one row per hypothesis.', at: 'tr' },
        { click: { button: 'Multiple Hypotheses' } },
        { wait: 2600 },
        { say: 'CLICK General Bayes\' Theorem\nBack to P(A), P(B|A) and P(B|A\').\'', at: 'tr' },
        { click: { button: 'General Bayes\' Theorem' } },
        { wait: 2400 },
      ],
    },
    'entering-probabilities-in-general-mode': {
      title: 'The rare-disease example, a larger prior, Reset',
      scale: 0.5,
      minHeight: 395,
      script: [
        { say: 'TYPE 0.01, 0.95, 0.05, CLICK Calculate\nP(A|B) = 16.10%; P(B) = 5.90%, prior odds 0.01, likelihood ratio 19.00.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.01' },
        { set: { css: 'input[type="number"]', nth: 1 }, value: '0.95' },
        { set: { css: 'input[type="number"]', nth: 2 }, value: '0.05' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3200 },
        { say: 'TYPE 0.5 as P(A), CLICK Calculate\nWith an even prior the posterior is 95.00%.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'CLICK Reset\nAll boxes empty; the result area reads Ready to Calculate.', at: 'tr' },
        { click: { button: 'Reset', exact: true } },
        { wait: 2400 },
      ],
    },
    'using-the-medical-test-calculator': {
      title: 'A rare disease, then a common one',
      scale: 0.5,
      minHeight: 395,
      script: [
        { say: 'CLICK Medical Test, TYPE 0.01, 0.90, 0.95, CLICK Calculate\nP(Disease|Positive Test) = 15.38%; P(No Disease|+) = 84.62%.', at: 'tr' },
        { click: { button: 'Medical Test' } },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.01' },
        { set: { css: 'input[type="number"]', nth: 1 }, value: '0.9' },
        { set: { css: 'input[type="number"]', nth: 2 }, value: '0.95' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3200 },
        { say: 'TYPE 0.1 as the prevalence, CLICK Calculate\nTen times the prevalence: 66.67%.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.1' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'TYPE 0.5 as the prevalence, CLICK Calculate\nHalf the population affected: 94.74%.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'setting-up-multiple-hypotheses': {
      title: 'Three hypotheses, a fourth row, priors that do not sum to 1',
      scale: 0.5,
      minHeight: 395,
      script: [
        { say: 'CLICK Multiple Hypotheses, TYPE 0.5 / 0.8, 0.3 / 0.6, 0.2 / 0.4, CLICK Calculate\nPosteriors 60.61%, 27.27%, 12.12%; P(E) = 66.00%.', at: 'tr' },
        { click: { button: 'Multiple Hypotheses' } },
        { set: { css: 'input[type="number"]', nth: 1 }, value: '0.5' },
        { set: { css: 'input[type="number"]', nth: 2 }, value: '0.8' },
        { set: { css: 'input[type="number"]', nth: 3 }, value: '0.3' },
        { set: { css: 'input[type="number"]', nth: 4 }, value: '0.6' },
        { set: { css: 'input[type="number"]', nth: 5 }, value: '0.2' },
        { set: { css: 'input[type="number"]', nth: 6 }, value: '0.4' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3400 },
        { say: 'TYPE 4 as Number of Hypotheses\nA fourth row, H4, with empty boxes; the first three keep their values.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '4' },
        { wait: 2600 },
        { say: 'TYPE 2 as Number of Hypotheses, CLICK Calculate\nTwo rows left, priors 0.5 and 0.3: refused, the priors must sum to 1.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'reading-results-and-tree-diagrams': {
      title: 'The result cards and the tree in two modes',
      scale: 0.5,
      minHeight: 395,
      script: [
        { say: 'TYPE 0.01, 0.95, 0.05, CLICK Calculate\nPosterior Probability 16.10% (Low probability); four cards; the tree diagram below.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.01' },
        { set: { css: 'input[type="number"]', nth: 1 }, value: '0.95' },
        { set: { css: 'input[type="number"]', nth: 2 }, value: '0.05' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3200 },
        { say: 'CLICK Medical Test, TYPE 0.01, 0.90, 0.95, CLICK Calculate\nTest Result: P(Disease|Positive Test) = 15.38%; the tree is relabelled.', at: 'tr' },
        { click: { button: 'Medical Test' } },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.01' },
        { set: { css: 'input[type="number"]', nth: 1 }, value: '0.9' },
        { set: { css: 'input[type="number"]', nth: 2 }, value: '0.95' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3400 },
        { say: 'CLICK General Bayes\' Theorem, TYPE 0.5 as P(A), CLICK Calculate\nAn even prior: Posterior Probability 95.00% (Very high); the tree is relabelled again.', at: 'tr' },
        { click: { button: 'General Bayes\' Theorem' } },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3200 },
      ],
    },
    'interpreting-step-by-step-solutions': {
      title: 'Opening the steps',
      scale: 0.5,
      minHeight: 395,
      script: [
        { say: 'TYPE 0.01, 0.95, 0.05, CLICK Calculate\nThe Step-by-Step Solution lists six collapsed headers.', at: 'tr' },
        { set: { css: 'input[type="number"]', nth: 0 }, value: '0.01' },
        { set: { css: 'input[type="number"]', nth: 1 }, value: '0.95' },
        { set: { css: 'input[type="number"]', nth: 2 }, value: '0.05' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3200 },
        { say: 'CLICK Given Information\nThe inputs with their notation.', at: 'tr' },
        { click: { text: 'Given Information' } },
        { wait: 2600 },
        { say: 'CLICK Step 2: Calculate P(B) using Law of Total Probability\nP(B) = 0.95 · 0.01 + 0.05 · 0.99 = 0.059.', at: 'tr' },
        { click: { text: 'Step 2: Calculate P(B)' } },
        { wait: 3000 },
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
      bayesExplanations,
      demos,
      seoData: {
        title: "Bayes' Theorem Calculator | Posterior Probability Tool",
        description: "Calculate posterior probabilities with Bayes' Theorem. Includes medical test mode, multiple hypotheses, tree diagrams, and step-by-step solutions.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/bayes-calculator",
        name: "Bayes' Theorem Calculator"
      },
    }
  }
}

export default function BayesCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas, detailInstructions = [], bayesExplanations = null, demos = {}}) {

  const demoPlayer = (slug) => (
    <ToolDemoPlayer
      key={`demo-${slug}`}
      script={demos[slug].script}
      title={demos[slug].title}
      label={`Demo: ${demos[slug].title}`}
      scale={demos[slug].scale || 0.5}
      minHeight={demos[slug].minHeight || undefined}
      renderText={processContent}
    >
      <BayesTheoremCalculator explanations={bayesExplanations || undefined} />
    </ToolDemoPlayer>
  )
  const genericSections = [
    { id: 'selecting-your-calculation-mode', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('selecting-your-calculation-mode'), sectionsContent.obj1.content] },
    { id: 'entering-probabilities-in-general-mode', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('entering-probabilities-in-general-mode'), sectionsContent.obj2.content] },
    { id: 'using-the-medical-test-calculator', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('using-the-medical-test-calculator'), sectionsContent.obj3.content] },
    { id: 'setting-up-multiple-hypotheses', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('setting-up-multiple-hypotheses'), sectionsContent.obj4.content] },
    { id: 'reading-results-and-tree-diagrams', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [demoPlayer('reading-results-and-tree-diagrams'), sectionsContent.obj5.content] },
    { id: 'interpreting-step-by-step-solutions', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [demoPlayer('interpreting-step-by-step-solutions'), sectionsContent.obj6.content] },
    { id: 'what-is-bayes-theorem', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [sectionsContent.obj7.content] },
    { id: 'the-medical-test-form-of-bayes-theorem', title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [sectionsContent.obj11.content] },
    { id: 'bayes-theorem-with-several-hypotheses', title: sectionsContent.obj12.title, link: sectionsContent.obj12.link, content: [sectionsContent.obj12.content] },
    { id: 'understanding-prior-and-posterior-probabilities', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
    { id: 'likelihood-ratios-and-odds', title: sectionsContent.obj9.title, link: sectionsContent.obj9.link, content: [sectionsContent.obj9.content] },
    { id: 'related-probability-tools-and-calculators', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [sectionsContent.obj10.content] },
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
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Bayes&apos; Theorem Calculator</h1>
      <div style={{marginBottom:'20px'}}>
        <ExplanationDetails instructions={detailInstructions} title="How to use Bayes' Theorem Calculator" />
      </div>
      <br/>
      <div style={{width:'75%',margin:'auto',transform:'scale(0.99)'}} className="calculator-widget">
        <BayesTheoremCalculator explanations={bayesExplanations || undefined} />
      </div>
      <br/>
      <br/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <br/>
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