
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import BayesTheoremCalculator from '@/app/components/calculators/probability/BayesCalculator'


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

**Multiple Hypotheses** mode extends Bayes' Theorem to compare 2-6 competing theories simultaneously. Enter prior probabilities and conditional probabilities for each hypothesis. The calculator updates all hypotheses based on observed evidence and ranks them by posterior probability. This mode excels for comparing multiple explanations or scenarios.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Entering Probabilities in General Mode`,
      content: `General mode requires three probability inputs, all between 0 and 1. **P(A)** represents the prior probability—your initial belief that event A is true before observing any evidence. For a rare disease affecting 1% of the population, enter 0.01.

**P(B|A)** specifies the conditional probability of observing evidence B when A is true. If a medical test correctly identifies disease 95% of the time, enter 0.95. This represents how strongly B indicates A.

**P(B|A')** gives the conditional probability of observing B when A is false. For the medical test, if false positive rate is 5%, enter 0.05. This quantifies how often B occurs even without A. The calculator uses these three values to compute posterior probability P(A|B)—the updated probability of A given that you've observed B.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Using the Medical Test Calculator`,
      content: `Medical test mode uses domain-specific terminology familiar to healthcare applications. **Disease Prevalence** equals P(Disease)—the base rate in the population being tested. For a cancer affecting 1 in 1,000 people, enter 0.001.

**Sensitivity** measures the true positive rate: P(Positive Test|Disease). A sensitivity of 0.90 means the test correctly identifies 90% of actual cases. Higher sensitivity reduces false negatives—sick patients who test negative.

**Specificity** measures the true negative rate: P(Negative Test|No Disease). A specificity of 0.95 means the test correctly identifies 95% of healthy individuals. The calculator automatically computes false positive rate as 1 minus specificity. Results show P(Disease|Positive Test)—the crucial probability that a positive test actually indicates disease, which is often surprisingly low when prevalence is rare.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Setting Up Multiple Hypotheses`,
      content: `Multiple hypotheses mode accommodates 2-6 competing theories. First, select the number of hypotheses using the dropdown. Each hypothesis gets a name (H₁, H₂, etc.) and requires two probabilities.

**Prior Probability P(Hᵢ)** represents your initial belief in each hypothesis before observing evidence. These priors must sum to exactly 1.0. For three equally likely theories, use 0.333, 0.333, 0.334. For theories with different plausibility, weight accordingly: perhaps 0.5, 0.3, 0.2.

**Conditional Probability P(E|Hᵢ)** specifies how likely the observed evidence is under each hypothesis. If evidence E strongly supports H₁, that conditional probability might be 0.8, while H₂ gets 0.4 and H₃ gets 0.2. The calculator updates all hypotheses simultaneously, showing which theory the evidence favors most.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading Results and Tree Diagrams`,
      content: `Results display prominently at the top with the posterior probability—the main answer showing updated belief after observing evidence. The percentage indicates how likely event A or disease actually is given the observed evidence B or positive test. Color coding highlights significance: red for low probabilities, blue for moderate, green for high.

The probability tree diagram visualizes the calculation structure. Branches show prior probabilities splitting into conditional paths. Green and orange paths highlight the routes leading to observed evidence. Joint probabilities appear at branch endpoints, showing P(A∩B) for each combination.

Additional metrics include **Prior Odds** (P(A)/P(A')), **Likelihood Ratio** (P(B|A)/P(B|A')), and **Posterior Odds**. These odds-based formulations provide alternative perspectives on how evidence updates beliefs. The likelihood ratio quantifies evidence strength—ratios above 1 support A, below 1 oppose it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Interpreting Step-by-Step Solutions`,
      content: `The step-by-step section breaks the calculation into expandable stages. Click any step header to reveal detailed arithmetic. **Given Information** lists all inputs with proper notation. **Step 1** calculates P(A'), the complement probability (1 - P(A)).

**Step 2** applies the Law of Total Probability to find P(B): the total probability of observing evidence across all scenarios. This equals P(B|A) × P(A) + P(B|A') × P(A'), summing probability across both A true and A false branches.

**Step 3** executes Bayes' Theorem itself: P(A|B) = [P(B|A) × P(A)] / P(B). The numerator weights the prior by how well A predicts B. The denominator normalizes by total evidence probability. **Step 4** computes P(A'|B) as 1 - P(A|B), ensuring probabilities sum to 1. **Additional Insights** show the odds formulation, demonstrating that posterior odds equal prior odds multiplied by likelihood ratio.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is Bayes' Theorem?`,
      content: `Bayes' Theorem is a fundamental formula for updating probabilities based on new evidence. Mathematically: $P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)}$. It answers the question: given that I've observed B, what's the probability that A is true?

The theorem reverses conditional probabilities. If you know P(B|A) (probability of evidence given hypothesis), Bayes' Theorem calculates P(A|B) (probability of hypothesis given evidence). This reversal is crucial because we observe evidence and want to infer causes, but direct knowledge often flows the opposite direction.

The formula combines three components: the **prior** P(A) representing initial belief, the **likelihood** P(B|A) measuring how well A predicts the evidence, and the **marginal probability** P(B) normalizing the result. Stronger evidence (higher likelihood ratio) produces larger updates from prior to posterior.

For comprehensive theory on Bayes' Theorem including proofs, derivations, and applications, see **Bayes' Theorem theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Understanding Prior and Posterior Probabilities`,
      content: `The **prior probability** P(A) represents belief before observing evidence—the base rate or initial plausibility. In medical testing, prior equals disease prevalence. In hypothesis testing, prior reflects background knowledge about each theory's likelihood. Priors incorporate existing information before the current observation.

The **posterior probability** P(A|B) represents updated belief after observing evidence B. It combines prior belief with new information. The posterior becomes the new prior for subsequent updates—Bayesian inference proceeds iteratively, refining probabilities as more evidence accumulates.

The shift from prior to posterior quantifies learning. If posterior equals prior, evidence was uninformative. If posterior greatly exceeds prior, evidence strongly supports A. If posterior falls below prior, evidence argues against A. The magnitude of change depends on both evidence strength (likelihood ratio) and how surprising the evidence is (marginal probability P(B)).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Likelihood Ratios and Odds`,
      content: `The **likelihood ratio** equals P(B|A) / P(B|A'), comparing how much more likely evidence is under A versus not-A. A likelihood ratio of 10 means evidence is 10 times more likely if A is true. Ratios above 1 support A, below 1 oppose A, exactly 1 is uninformative.

**Odds** express probability as ratios rather than fractions. Prior odds = P(A) / P(A'), posterior odds = P(A|B) / P(A'|B). Bayes' Theorem in odds form states: posterior odds = prior odds × likelihood ratio. This multiplicative relationship shows how evidence scales belief.

Converting between probability and odds: odds = p / (1-p), probability = odds / (1+odds). Odds of 3:1 correspond to probability 0.75. The odds formulation clarifies that weak evidence (likelihood ratio near 1) barely changes odds, while strong evidence (extreme likelihood ratios) dramatically shifts belief regardless of prior.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Calculators`,
      content: `**Conditional Probability Calculator** - Compute P(A|B) for various probability scenarios with Venn diagram visualizations.

**Law of Total Probability Calculator** - Calculate marginal probabilities by partitioning sample space across multiple events.

**Sensitivity and Specificity Calculator** - Analyze medical test performance metrics including positive/negative predictive values.

**Probability Distribution Calculators** - Compute probabilities for discrete and continuous distributions in Bayesian contexts.

**Expected Value Calculator** - Calculate expected outcomes incorporating probabilities and payoffs for decision analysis.

**Hypothesis Testing Tools** - Perform statistical hypothesis tests using frequentist and Bayesian approaches.

**Probability Tree Diagram Generator** - Create custom probability trees for complex multi-stage random processes.

**Joint Probability Calculator** - Calculate probabilities for intersections and unions of multiple events.`,
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

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
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

export default function BayesCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'-40px'}}>Bayes&apos; Theorem Calculator</h1>
      <br/>
      <div style={{width:'75%',margin:'auto',transform:'scale(0.99)'}} className="calculator-widget">
        <BayesTheoremCalculator/>
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