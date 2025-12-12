import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
  'total probability',
  'law of total probability',
  'conditional probability',
  'partition probability',
  'disjoint cases',
  'exhaustive cases',
  'probability tree',
  'weighted probability',
  'Bayes theorem',
  'chain rule',
  'mixture distribution',
  'marginal probability',
  'sample space partition',
  'case-based reasoning',
  'probability aggregation',
  'medical testing probability',
  'reliability analysis',
  'joint probability',
  'conditional reasoning',
  'likelihood function'
];

    const sectionsContent={

    when:{
      title:`When You Need Total Probability`,
      content:`
This reasoning applies whenever a system can be in different states, and each state affects the outcome differently.

**When the outcome depends on which case you're in:**
A diagnostic test's accuracy differs for people who actually have the disease versus those who don't. The overall rate of positive tests depends on both groups.

**When data comes from mixed sources:**
Survey results combine responses from different age groups, regions, or demographics. The overall pattern reflects contributions from each subgroup.

**When you don't know the underlying condition:**
A machine might be operating in good condition or degraded condition. Failure rates differ in each state, but if you don't know which state it's in, you need to consider both possibilities.

**When processes have multiple pathways:**
A delivery can be delayed by weather, traffic, or mechanical failure. Each pathway has its own probability, and the total delay probability accounts for all routes.

The intuition is always the same: the final probability is a **weighted blend** of case-specific probabilities. Each scenario contributes its piece, weighted by how likely that scenario is to occur in the first place.`,
      before:``,
      after:``,
  
  
    },
    cases:{
      title:`Splitting a Probability Across Cases`,
      content:`
The key idea: you can divide all possible outcomes into distinct, non-overlapping scenarios. Each scenario contributes part of the final probability.

Think of it like splitting a bill at a restaurant. The total amount comes from adding what each person pays. No overlap — each dollar is counted exactly once.

With probability, the sample space gets partitioned into separate cases. An event might occur in Case 1, Case 2, or Case 3. The event's total probability comes from adding its probability within each case.

**The core phenomenon:**

overall probability = sum of case-specific contributions

This isn't a formula yet — it's the conceptual structure. You're breaking one probability question into smaller, manageable pieces.

**Visual intuition:**

Imagine a probability tree where branches split into different scenarios. Or picture blocks of the sample space, each colored differently. The event overlaps multiple blocks, and you add up how much probability it captures from each.

Each case contributes its share, and those shares sum to give the complete picture. That's the phenomenon at the heart of total probability.`,
      before:``,
      after:``,
  
    },
  
    notation:{
  
      title:`Useful Notation`,
      content:`
Before expressing the phenomenon formally, we need notation for the key pieces.

**The event of interest:**
Call it A. This is what you're trying to find the probability of.

**The cases (partition):**
Call them B₁, B₂, ..., Bₙ. These are the distinct scenarios that divide the sample space.

Key properties:
- They're disjoint (no overlap — only one can occur)
- They're exhaustive (together they cover everything)
- Exactly one of them happens

**Conditional pieces:**
P(A | Bᵢ) is the probability of A given that case Bᵢ occurred. This captures how likely A is within that specific scenario.

**Weights:**
P(Bᵢ) is the probability that case Bᵢ occurs. This tells you how much that scenario contributes to the total.

**Sum notation:**
When we add contributions from all cases, we write:
∑ (sum over all i)

That's the notation toolkit. Each piece has a clear meaning:
- A is what you want
- The Bᵢ are the cases
- P(A | Bᵢ) is A's probability within case i
- P(Bᵢ) is the weight of case i

Next, we combine these pieces into the formal law.`,
      before:``,
      after:``,
  
    },
    law:{
  
      title:`The Law of Total Probability`,
      content:`
Now we formalize the phenomenon described in the previous sections.

**Statement in words:**

If an event A can occur through several disjoint cases B₁, B₂, ..., Bₙ that cover the entire sample space, then the probability of A is the sum of its probability within each case, weighted by the probability of that case occurring.

**The formula:**

P(A) = P(A | B₁)·P(B₁) + P(A | B₂)·P(B₂) + ... + P(A | Bₙ)·P(Bₙ)

Or using summation notation:

P(A) = ∑ P(A | Bᵢ)·P(Bᵢ)

**What each term means:**

- P(A | Bᵢ)·P(Bᵢ) is the contribution from case i
- P(A | Bᵢ) tells you how likely A is in that case
- P(Bᵢ) weights that contribution by how likely the case is
- The sum adds all contributions to get the total

**Discrete version:**

This is the form shown above, used when you have a finite or countable number of cases.

**Continuous version (conceptual):**

When the partition becomes continuous (like a range of values), the sum becomes an integral:

P(A) = ∫ P(A | B=b)·f(b) db

where f(b) is the probability density of the conditioning variable.

This law expresses mathematically what we've already understood conceptually: probability distributes across cases, and the total comes from adding weighted contributions.`,
      before:``,
      after:``,
  
    },
    diagram:{
  
      title:`Diagrammatic Representations`,
      content:`
Total probability becomes clearer when visualized. Here are three ways to see the same idea.

**Probability tree:**

Start with the root. Branches split into the different cases B₁, B₂, ..., Bₙ, each labeled with P(Bᵢ). From each case, further branches show whether A occurs or not, labeled with P(A | Bᵢ) and P(A' | Bᵢ).

To find P(A), trace all paths that end in A. Multiply along each path, then add across paths. This gives the total probability formula naturally.

**Partition block diagram:**

Draw the sample space as a rectangle. Divide it vertically into blocks representing B₁, B₂, ..., Bₙ. The width of each block is proportional to P(Bᵢ).

Now overlay the event A as a horizontal band cutting across all blocks. The area of A within each block represents P(A ∩ Bᵢ). The total area of A is the sum of these pieces.

**Table view (joint distribution):**

Create a table with cases as rows and outcomes (A or A') as columns. Fill in joint probabilities P(A ∩ Bᵢ) and P(A' ∩ Bᵢ).

The row totals are P(Bᵢ). The column total for A is P(A) — which equals the sum of P(A ∩ Bᵢ) down that column. Since P(A ∩ Bᵢ) = P(A | Bᵢ)·P(Bᵢ), you see the total probability formula in the table structure.

All three diagrams show the same phenomenon: A's probability distributes across cases, and you recover the total by adding contributions.`,
      before:``,
      after:``,
  
    },
    examples:{
  
      title:`Examples`,
      content:`
**Example 1: Medical testing**

A disease affects 1% of the population. A test is 95% accurate for infected people (true positive rate) and 90% accurate for healthy people (true negative rate, so 10% false positive rate).

What's the probability of testing positive?

Cases: B₁ = has disease, B₂ = healthy
- P(B₁) = 0.01, P(B₂) = 0.99
- P(positive | B₁) = 0.95
- P(positive | B₂) = 0.10

P(positive) = P(positive | B₁)·P(B₁) + P(positive | B₂)·P(B₂)
            = 0.95 × 0.01 + 0.10 × 0.99
            = 0.0095 + 0.099
            = 0.1085

About 10.85% of tests come back positive.

**Example 2: Manufacturing defects**

A factory has three machines producing parts. Machine A makes 50% of parts with 2% defect rate. Machine B makes 30% with 3% defect rate. Machine C makes 20% with 5% defect rate.

What's the probability a randomly selected part is defective?

Cases: B₁ = from A, B₂ = from B, B₃ = from C
- P(B₁) = 0.50, P(B₂) = 0.30, P(B₃) = 0.20
- P(defective | B₁) = 0.02
- P(defective | B₂) = 0.03
- P(defective | B₃) = 0.05

P(defective) = 0.02 × 0.50 + 0.03 × 0.30 + 0.05 × 0.20
             = 0.010 + 0.009 + 0.010
             = 0.029

2.9% of all parts are defective.

**Example 3: Weather scenarios**

Tomorrow will be sunny, cloudy, or rainy with probabilities 0.6, 0.3, and 0.1. You'll go running with probability 0.8 if sunny, 0.5 if cloudy, and 0.1 if rainy.

What's the probability you go running tomorrow?

Cases: B₁ = sunny, B₂ = cloudy, B₃ = rainy
- P(B₁) = 0.6, P(B₂) = 0.3, P(B₃) = 0.1
- P(run | B₁) = 0.8
- P(run | B₂) = 0.5
- P(run | B₃) = 0.1

P(run) = 0.8 × 0.6 + 0.5 × 0.3 + 0.1 × 0.1
       = 0.48 + 0.15 + 0.01
       = 0.64

64% chance you'll go running.

In each example, the total probability emerges from weighted contributions across distinct scenarios.`,
      before:``,
      after:``,
  
    },
    why:{
  
      title:`Why the Law Works`,
      content:`
The law follows from three fundamental facts about how probability behaves.

**Fact 1: Exactly one case occurs**

The cases B₁, B₂, ..., Bₙ partition the sample space. They're disjoint and exhaustive. Every outcome belongs to exactly one case. When you run the experiment, one and only one case happens.

**Fact 2: A overlaps each case separately**

The event A might occur in any of the cases. We can split A into pieces: the part that happens in B₁, the part in B₂, and so on. These pieces are A ∩ B₁, A ∩ B₂, ..., A ∩ Bₙ.

**Fact 3: Disjoint pieces add**

Since the cases don't overlap, the pieces of A don't overlap either. When you have disjoint events, their probabilities add:

P(A) = P(A ∩ B₁) + P(A ∩ B₂) + ... + P(A ∩ Bₙ)

Now use the definition of conditional probability. We know P(A ∩ Bᵢ) = P(A | Bᵢ)·P(Bᵢ). Substitute this into the sum:

P(A) = P(A | B₁)·P(B₁) + P(A | B₂)·P(B₂) + ... + P(A | Bₙ)·P(Bₙ)

That's the law of total probability.

**The deep intuition:**

You're not doing anything clever. You're just acknowledging that A happens "in pieces" across the cases, and probability naturally adds across those disjoint pieces. The conditional probabilities weight each piece by how much of A falls in that case. The case probabilities weight by how likely each case is to occur.

It's the simplest possible accounting: count every way A can happen, weight by likelihood, sum the contributions. Nothing more.`,
      before:``,
      after:``,
  
    },
    connection:{
  
      title:`Connection to Conditional Probability`,
      content:`
Total probability is built entirely from conditional probabilities. It shows how an unconditional probability emerges from conditional pieces.

**Conditional probability tells you:**

Given that you're in a specific case, what's the probability of the event? That's P(A | Bᵢ).

**Total probability tells you:**

When you don't know which case you're in, combine the conditional probabilities across all cases, weighted by how likely each case is.

**The relationship:**

P(A) = ∑ P(A | Bᵢ)·P(Bᵢ)

The left side is unconditional — no assumptions about which case occurred.
The right side is entirely conditional — every P(A | Bᵢ) assumes you know the case.

Total probability is the bridge. It reconstructs the unconditional probability from conditional pieces.

**Why this matters:**

Often, conditional probabilities are easier to know or estimate than unconditional ones. If you can break a problem into cases where each case has clear conditional probabilities, total probability lets you work backward to the overall answer.

Medical testing works this way. You know accuracy rates conditional on disease status. Total probability combines them to find the overall test-positive rate.

Manufacturing works this way. You know defect rates conditional on which machine produced the part. Total probability gives the overall defect rate.

Weather prediction works this way. You know behavior conditional on weather conditions. Total probability gives overall behavior.

Conditional probability is the foundation. Total probability is the mechanism that builds upward from it.`,
      before:``,
      after:``,
  
    },
    chain:{
  
      title:`Chain Rule as a Complementary Mechanism`,
      content:`
Total probability and the chain rule work together but serve different purposes.

**Chain rule: multiply along a path**

The chain rule breaks a joint probability into a sequence of conditional steps:

P(A ∩ B) = P(A | B)·P(B)

Or for longer sequences:

P(A ∩ B ∩ C) = P(A | B ∩ C)·P(B | C)·P(C)

You multiply conditional probabilities along a specific pathway to get the joint probability of that pathway.

**Total probability: add across paths**

Total probability adds contributions from different pathways:

P(A) = ∑ P(A | Bᵢ)·P(Bᵢ)

Each term P(A | Bᵢ)·P(Bᵢ) is actually P(A ∩ Bᵢ) by the chain rule. So total probability is summing P(A ∩ Bᵢ) across all cases.

**How they work together:**

- Chain rule: multiply down a single branch of the probability tree
- Total probability: add across multiple branches

In a probability tree, you multiply along each path (chain rule) to get that path's probability. Then you add across paths (total probability) to get the overall probability of the endpoint.

**Why both matter:**

Chain rule builds joint probabilities from conditional pieces.
Total probability aggregates those joint probabilities across cases.

Together, they form the computational foundation for Bayes' theorem. Bayes uses the chain rule in the numerator and total probability in the denominator.`,
      before:``,
      after:``,
  
    },
    bayes:{
      title:`Relationship to Bayes' Theorem`,
      content:`
Bayes' theorem cannot exist without total probability. They're inseparable.

**Bayes' theorem:**

P(Bᵢ | A) = P(A | Bᵢ)·P(Bᵢ) / P(A)

This reverses conditioning: you know P(A | Bᵢ) but want P(Bᵢ | A).

**Where total probability enters:**

The denominator P(A) is computed using total probability:

P(A) = ∑ P(A | Bⱼ)·P(Bⱼ)

The sum runs over all cases, giving:

P(Bᵢ | A) = P(A | Bᵢ)·P(Bᵢ) / [∑ P(A | Bⱼ)·P(Bⱼ)]

**Why this matters:**

The numerator uses the chain rule for one specific case.
The denominator uses total probability summed across all cases.

Without total probability, you have no way to compute P(A) from the conditional pieces. Bayes would be incomplete.

**The conceptual flow:**

1. You observe event A
2. You want to know which case Bᵢ caused it (posterior probability)
3. You start with how likely each case is (prior: P(Bᵢ))
4. You know how likely A is in each case (likelihood: P(A | Bᵢ))
5. Chain rule gives the numerator: P(A | Bᵢ)·P(Bᵢ)
6. Total probability normalizes across all cases: ∑ P(A | Bⱼ)·P(Bⱼ)
7. The ratio gives the posterior: P(Bᵢ | A)

Total probability ensures the posteriors sum to 1. It's the normalization constant that makes Bayes work.

Bayes and total probability are two sides of the same reasoning framework. Total probability aggregates forward (from cases to outcome). Bayes inverts backward (from outcome to cases).`,
      before:``,
      after:``,
  
    },
    mistakes:{
      title:`Common Mistakes`,
      content:`
**Using non-disjoint cases**

The cases must be mutually exclusive. If B₁ and B₂ can both occur, you'll double-count probability. Example: splitting by "rain" and "bad weather" overlaps since rain is bad weather.

Fix: ensure cases can't happen simultaneously.

**Failing to cover the entire space**

Cases must be exhaustive. If your cases don't account for every possibility, you'll underestimate P(A).

Example: dividing a population by "under 30" and "over 40" misses ages 30-40.

Fix: verify cases partition the whole sample space.

**Mixing conditional and unconditional probabilities**

The formula requires P(A | Bᵢ), not P(A). Using unconditional probabilities breaks the calculation.

Example: using P(A) directly instead of P(A | B₁), P(A | B₂), etc.

Fix: ensure every term inside the sum is properly conditioned.

**Missing cases**

Forgetting to include all relevant scenarios leads to incomplete sums.

Example: considering only two machines when a third also produces parts.

Fix: explicitly list all cases before computing.

**Misapplying independence assumptions**

Assuming P(A | Bᵢ) = P(A) implies independence, which defeats the purpose of splitting into cases. If A were independent of all cases, total probability would be trivial.

Fix: only use total probability when the outcome depends on which case occurred.

**Using wrong weights**

The weights must be P(Bᵢ), not P(Bᵢ | A) or other quantities.

Fix: verify you're using prior probabilities of cases, not posteriors.

Each mistake violates the fundamental structure: a valid partition with properly weighted conditional contributions.`,
      before:``,
      after:``,
  
    },
    matters:{
      title:`Why Total Probability Matters in Practice`,
      content:`
Real-world processes rarely operate under single, uniform conditions. They involve subgroups, states, or scenarios that behave differently.

**In data science and machine learning:**

Classification algorithms compute P(class | features) using Bayes, which requires P(features) from total probability. Mixture models represent data as coming from multiple sources, each contributing according to total probability. Ensemble methods combine predictions from different models using weighted averages — the same structure as total probability.

**In medicine and public health:**

Disease prevalence varies across demographics. Treatment effectiveness differs by patient subgroup. Risk assessment requires accounting for multiple pathways to an outcome. Total probability combines these conditional effects to give population-level estimates.

**In reliability and engineering:**

Systems fail through multiple failure modes. Each mode has its own probability conditional on operating conditions. Total system reliability comes from summing over all failure pathways, weighted by how often each condition occurs.

**In finance and risk management:**

Investment returns depend on economic states. Default probabilities vary by credit rating and industry. Portfolio risk aggregates conditional risks across different market scenarios. Total probability provides the framework for these calculations.

**In forecasting and prediction:**

Weather models combine forecasts conditional on different atmospheric patterns. Economic forecasts account for different policy scenarios. Any prediction involving uncertainty about underlying conditions uses total probability implicitly.

**The common pattern:**

You have data from mixed sources, outcomes that depend on hidden states, or processes with multiple pathways. Direct calculation of overall probabilities is hard. But conditional probabilities within each case are manageable. Total probability bridges from the manageable conditional pieces to the overall answer you need.

Without this framework, you'd be forced to treat heterogeneous systems as if they were uniform. Total probability lets you respect the structure of real-world complexity.`,
      before:``,
      after:``,
  
    },
    other:{
      title:`Connections to Other Ideas`,
      content:`
Total probability connects to fundamental concepts across probability theory.

**Conditional probability:**
Total probability is built entirely from conditional pieces. It shows how to reconstruct unconditional probabilities from conditional ones.

**Chain rule:**
Each term P(A | Bᵢ)·P(Bᵢ) equals P(A ∩ Bᵢ) by the chain rule. Total probability sums these joint probabilities across cases.

**Bayes' theorem:**
Bayes uses total probability as its denominator. The normalization constant P(A) comes from summing P(A | Bᵢ)·P(Bᵢ) over all cases.

**Partitions:**
Total probability requires a partition — disjoint, exhaustive cases. Any partition of the sample space enables total probability reasoning.

**Mixture distributions:**
A mixture distribution is a probability distribution formed by combining multiple component distributions, weighted by mixing probabilities. This is exactly the structure of total probability.

**Weighted averages:**
The formula P(A) = ∑ P(A | Bᵢ)·P(Bᵢ) is a weighted average of conditional probabilities, with weights P(Bᵢ). The overall probability is the expectation of P(A | B) over the distribution of B.

**Joint probability:**
Total probability decomposes P(A) into pieces P(A ∩ Bᵢ). It marginalizes over the cases: P(A) = ∑ P(A ∩ Bᵢ).

**Law of total expectation:**
The expectation version states E[X] = ∑ E[X | Bᵢ]·P(Bᵢ). Same structure, different quantity.

**Independence:**
If A is independent of all Bᵢ, then P(A | Bᵢ) = P(A) for all i, and total probability becomes trivial: P(A) = P(A)·∑ P(Bᵢ) = P(A). The interesting cases involve dependence.

Total probability sits at the center of a web of interconnected ideas. Master it, and the rest of probability theory becomes clearer.`,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Splitting Probability Across Cases",
  content: `
Some probability questions involve several different ways an outcome can occur. Instead of treating the situation as a single block, it is often clearer to break it into separate cases and look at how each case contributes to the overall probability.

This idea is closely connected to conditional probability, because each case describes the event “if this situation happens, what is the chance of the outcome?” The law of total probability combines those conditional pieces into one overall value.

This structure also sets the stage for Bayes’ theorem. Bayes reverses conditional probabilities, but it relies on the same breakdown of cases that total probability provides. Together, these ideas form one of the main building blocks of probabilistic reasoning.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Total Probability Aspects | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/total-probability",
         name: "Total Probability"
      },
        
       }
    }
   }

export default function TotalProbabilityPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'when',
        title:sectionsContent.when.title,
        link:'',
        content:[
          sectionsContent.when.content,
        ]
    },
    {
        id:'cases',
        title:sectionsContent.cases.title,
        link:'',
        content:[
          sectionsContent.cases.content,
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
          sectionsContent.notation.content,
        ]
    },
    {
        id:'law',
        title:sectionsContent.law.title,
        link:'',
        content:[
          sectionsContent.law.content,
        ]
    },
    {
        id:'diagram',
        title:sectionsContent.diagram.title,
        link:'',
        content:[
          sectionsContent.diagram.content,
        ]
    },
    {
        id:'examples',
        title:sectionsContent.examples.title,
        link:'',
        content:[
          sectionsContent.examples.content,
        ]
    },
    {
        id:'why',
        title:sectionsContent.why.title,
        link:'',
        content:[
          sectionsContent.why.content,
        ]
    },
    {
        id:'connection',
        title:sectionsContent.connection.title,
        link:'',
        content:[
          sectionsContent.connection.content,
        ]
    },
    {
        id:'chain',
        title:sectionsContent.chain.title,
        link:'',
        content:[
          sectionsContent.chain.content,
        ]
    },
    {
        id:'bayes',
        title:sectionsContent.bayes.title,
        link:'',
        content:[
          sectionsContent.bayes.content,
        ]
    },
    {
        id:'mistakes',
        title:sectionsContent.mistakes.title,
        link:'',
        content:[
          sectionsContent.mistakes.content,
        ]
    },
    {
        id:'matters',
        title:sectionsContent.matters.title,
        link:'',
        content:[
          sectionsContent.matters.content,
        ]
    },
    {
        id:'other',
        title:sectionsContent.other.title,
        link:'',
        content:[
          sectionsContent.other.content,
        ]
    },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // },
]

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
</Head>
   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Total Probability</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
         secondaryNavTitle="More in Probability Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
