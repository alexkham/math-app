
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
import JointProbability2x2Table from '@/app/components/calculators/probability/JointProbability2x2Table.jsx'


export async function getStaticProps(){

  const keyWords = [
    'joint probability calculator',
    'joint probability table',
    'marginal probability calculator',
    'two event probability',
    'bivariate probability',
    'contingency table calculator',
    'joint distribution calculator',
    'probability intersection',
    'two-way probability table',
    'joint probability distribution',
    'marginal distribution calculator',
    'probability table tool',
    'bivariate distribution',
    'joint probability formula',
    'two-event probability calculator'
  ]

  const sectionsContent = {
    obj1: {
      title: `Entering Joint Probabilities`,
      content: `The calculator's 2×2 table contains four editable cells representing joint probabilities for all combinations of events A and B. Enter probabilities as decimals between 0 and 1 in each cell. **P(A∩B)** is the probability both events occur simultaneously. **P(A∩B̄)** gives the probability A occurs but B doesn't. **P(Ā∩B)** represents B occurring without A. **P(Ā∩B̄)** is the probability neither event occurs.

All four values must sum to exactly 1, as they partition the entire sample space. The calculator validates this constraint and displays an error message if the sum deviates from 1. Adjust values incrementally to maintain the sum—when increasing one cell, decrease another.

Default values demonstrate a valid distribution: P(A∩B)=0.25, P(A∩B̄)=0.25, P(Ā∩B)=0.15, P(Ā∩B̄)=0.35. These sum to 1.00 and automatically populate marginal probabilities. Modify any cell by typing a new decimal value or using the increment arrows.

Each cell displays mathematical notation above the input field. Hover over the question mark icon next to any notation for tooltip explanations. This helps distinguish intersection symbols (∩), complement notation (Ā, B̄), and marginal probability labels.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding Marginal Probabilities`,
      content: `Marginal probabilities appear in the highlighted yellow cells along the right column and bottom row, calculated automatically from joint probabilities. These read-only values cannot be edited directly—they update as you modify joint probabilities.

**P(B)** in the right column equals P(A∩B) + P(Ā∩B), summing the first row. This gives the total probability of B occurring regardless of A's status. Similarly, **P(B̄)** equals P(A∩B̄) + P(Ā∩B̄), summing the second row for the probability B doesn't occur.

**P(A)** in the bottom row equals P(A∩B) + P(A∩B̄), summing the first column. This marginal probability represents A occurring regardless of B. **P(Ā)** sums the second column: P(Ā∩B) + P(Ā∩B̄), giving the probability A doesn't occur.

The bottom-right cell shows Σ=1, confirming all probabilities sum to 1. Marginals must also satisfy P(A) + P(Ā) = 1 and P(B) + P(B̄) = 1. The calculator enforces these relationships automatically through the joint probability constraint.

Marginal probabilities derive from the **sum rule** (law of total probability): to find the probability of one event, sum over all possible states of the other event. The table structure makes this summation visually clear through row and column totals.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Using Random and Reset Buttons`,
      content: `The **Random** button generates a valid joint probability distribution by creating four random values that sum to exactly 1. The algorithm generates four random numbers, normalizes them to sum to 1, then rounds to three decimal places. The final value adjusts slightly to ensure the sum equals 1.000 after rounding.

Random distributions help explore how different joint probabilities produce varying marginal probabilities. Generate multiple random examples to see relationships between joint and marginal distributions. Notice how changing joint probabilities shifts marginals, and how certain patterns (like independence) appear in the numbers.

The **Reset** button restores default values: P(A∩B)=0.25, P(A∩B̄)=0.25, P(Ā∩B)=0.15, P(Ā∩B̄)=0.35. Use reset to clear custom values and return to the example distribution. This default demonstrates a case where A and B are not independent—P(A∩B) ≠ P(A)×P(B).

Both buttons provide quick ways to populate the table without manual entry. Random is useful for experimentation; reset provides a clean starting point for new calculations.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Probability Table Structure`,
      content: `The table follows standard contingency table layout with events as row and column headers. Rows partition by event B (top row for B, bottom row for B̄). Columns partition by event A (left column for A, right column for Ā). Each interior cell represents the joint probability of its row and column events.

**Event headers** appear in the leftmost column and top row, showing A, Ā, B, and B̄ in mathematical notation. The overline notation (Ā, B̄) indicates complements—events not occurring. Headers establish which combination each cell represents.

**Interior cells** contain editable joint probabilities with white backgrounds. These four cells partition the sample space into mutually exclusive, exhaustive events. Exactly one of these four outcomes must occur in any trial.

**Marginal cells** have yellow backgrounds distinguishing them from joint probabilities. Right column marginals sum across rows; bottom row marginals sum down columns. These read-only cells update automatically as joint probabilities change.

The table's grid structure makes probability relationships visible: row sums, column sums, and the total sum all maintain probability axioms. This visual organization clarifies how joint probabilities relate to marginals through summation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Interpreting Tooltips and Mathematical Notation`,
      content: `Hover over any question mark icon (?) next to probability notation to see explanatory tooltips. These tooltips define what each probability represents in plain English. For P(A∩B), the tooltip reads "Probability of both A and B occurring." For P(Ā∩B̄), it explains "Probability of neither A nor B occurring."

The **intersection symbol** ∩ denotes "and"—both events happening simultaneously. P(A∩B) means A and B both occur. This differs from union (∪, meaning "or") which isn't used in this table since cells represent exclusive combinations.

The **overline** (Ā, B̄) represents complement—the event not occurring. Ā means "not A" or "A does not occur." Every event splits into event and complement with probabilities summing to 1: P(A) + P(Ā) = 1.

**Marginal notation** appears as "Marginal A" or "Marginal B" in bold, indicating these are totals summed over the other event. Tooltips explain "Total probability for event A (sum of column)" to clarify these represent unconditional probabilities obtained by summing joint probabilities.

The notation uses standard probability theory conventions. Understanding ∩ for intersection and overline for complement is essential for reading any probability table or formula.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `What is Joint Probability?`,
      content: `Joint probability quantifies the likelihood of two or more events occurring simultaneously. For events A and B, the joint probability P(A∩B) gives the probability both happen together in a single trial. This differs from asking about each event separately.

Joint probabilities satisfy probability axioms: they're non-negative (≥0) and the sum over all possible joint outcomes equals 1. For two binary events, four mutually exclusive outcomes exist: both occur, only A occurs, only B occurs, neither occurs. These four joint probabilities partition the sample space completely.

**Mutual exclusivity** of the four cells means exactly one outcome occurs per trial. You can't simultaneously have both A and B occur while also having neither occur. The four joint probabilities represent exhaustive, non-overlapping possibilities.

Joint distributions specify complete probabilistic relationships between events. Knowing all joint probabilities allows calculating any related probability: marginals, conditionals, unions, or intersections. The joint distribution contains maximum information about how events relate.

For comprehensive theory on joint probability including derivations, properties, and applications to multiple events, see **joint probability theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Joint vs Marginal vs Conditional Probability`,
      content: `**Joint probability** P(A∩B) asks about two events together: "What's the probability both A and B occur?" It focuses on the intersection, requiring both events simultaneously. Joint probabilities fill the interior table cells.

**Marginal probability** P(A) or P(B) asks about single events without conditioning on others: "What's the probability of A, regardless of B?" Marginals are obtained by summing joint probabilities over all states of other events. P(A) = P(A∩B) + P(A∩B̄), summing across B and B̄. Marginals appear in the table's edges (margins).

**Conditional probability** P(A|B) asks about one event given another occurred: "What's the probability of A, knowing B happened?" Conditionals restrict attention to outcomes where the conditioning event occurred. Calculate conditionals from joint and marginal probabilities: P(A|B) = P(A∩B)/P(B), dividing the joint by the marginal.

These three probability types answer different questions using the same underlying joint distribution. Joint probabilities are most fundamental—they determine both marginals (through summation) and conditionals (through division). This table displays joint and marginal probabilities; conditionals require additional calculation.

The calculator doesn't compute conditionals directly, but you can calculate them manually: divide any joint probability by its corresponding marginal. For example, P(A|B) = P(A∩B)/P(B) using values from the table.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Sum Rule and Probability Tables`,
      content: `The **sum rule** (law of total probability) states that marginal probabilities equal the sum of joint probabilities over other events. For event A: P(A) = Σ_b P(A∩B=b), summing over all possible values of B. In the 2×2 table, this simplifies to P(A) = P(A∩B) + P(A∩B̄).

This rule explains how marginal probabilities in the table's edges derive from joint probabilities in the interior. Sum across a row to get the row's marginal probability; sum down a column to get the column's marginal. The yellow highlighted cells display these sums.

**Verification**: All joint probabilities must sum to 1 since they partition the sample space. Additionally, each pair of marginals must sum to 1: P(A) + P(Ā) = 1 and P(B) + P(B̄) = 1. The table enforces these constraints through its structure and validation.

The sum rule connects joint and marginal distributions, allowing you to work backward and forward. Given marginals and independence, you can construct joints (P(A∩B) = P(A)×P(B) when independent). Given joints, you compute marginals through summation.

Understanding the sum rule clarifies why the table has its specific structure: interior cells represent joint probabilities, edge cells show marginals computed by summing, and the corner displays the total sum verifying probability axioms.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Related Probability Tools and Calculators`,
      content: `**Conditional Probability Calculator** - Compute P(A|B) from joint and marginal probabilities with contingency tables and Venn diagrams.

**Bayes' Theorem Calculator** - Calculate posterior probabilities reversing conditional probabilities for diagnostic and inference problems.

**Probability Tree Diagram Generator** - Visualize joint, marginal, and conditional probabilities through branching tree structures.

**Independence Test Calculator** - Determine whether events are independent by comparing P(A∩B) with P(A)×P(B).

**Venn Diagram Probability Calculator** - Calculate probabilities for intersections, unions, and complements using visual set diagrams.

**Three-Event Probability Calculator** - Extend to three events with 8 joint probabilities and three-dimensional relationships.

**Multinomial Distribution Calculator** - Handle multiple categorical events with joint probabilities over many categories.

**Contingency Table Analysis** - Perform chi-square tests and compute measures of association for categorical data.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is joint probability and how does it differ from regular probability?",
      answer: "Joint probability P(A∩B) is the probability of two or more events occurring together simultaneously. Regular (marginal) probability P(A) considers only one event regardless of others. Joint probability requires both events to happen; marginal probability sums over all possibilities of other events. For example, P(A∩B) = 0.25 means 25% chance both occur together, while P(A) might equal 0.50 after summing P(A∩B) and P(A∩B̄)."
    },
    obj2: {
      question: "How do you calculate marginal probabilities from joint probabilities?",
      answer: "Marginal probabilities are computed by summing joint probabilities over all states of other events (the sum rule). P(A) = P(A∩B) + P(A∩B̄), summing across B and not-B. P(B) = P(A∩B) + P(Ā∩B), summing across A and not-A. In the calculator, marginals appear in yellow cells and update automatically as you modify joint probabilities."
    },
    obj3: {
      question: "Why must all joint probabilities sum to 1?",
      answer: "The four joint probabilities partition the sample space into mutually exclusive, exhaustive outcomes. Exactly one of {both occur, only A, only B, neither} must happen in any trial. Since these cover all possibilities with no overlap, their probabilities sum to 1 by the probability axioms. The calculator validates this constraint and shows an error if the sum deviates from 1."
    },
    obj4: {
      question: "How do you calculate conditional probability from a joint probability table?",
      answer: "Conditional probability P(A|B) equals the joint probability divided by the marginal probability of the conditioning event: P(A|B) = P(A∩B) / P(B). Using the calculator, take any joint probability from the interior cells and divide by the corresponding marginal from the edge. For example, if P(A∩B) = 0.25 and P(B) = 0.40, then P(A|B) = 0.25/0.40 = 0.625."
    },
    obj5: {
      question: "What does the complement notation (Ā, B̄) mean in the probability table?",
      answer: "The overline represents the complement of an event—the event not occurring. Ā means 'not A' or 'A does not occur.' Every event has a complement with probabilities summing to 1: P(A) + P(Ā) = 1. In the table, Ā and B̄ headers indicate columns and rows for when events don't occur. P(Ā∩B̄) is the joint probability neither event occurs."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Joint Probability Table Calculator",
      "description": "Interactive 2x2 joint probability calculator for two events with automatic marginal probability computation, validation, and mathematical notation.",
      "url": "https://www.learnmathclass.com/probability/calculators/joint-probability",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "2x2 joint probability table for two events A and B",
        "Four editable joint probability cells with validation",
        "Automatic marginal probability calculation",
        "Sum constraint validation (must equal 1)",
        "Random probability distribution generator",
        "Reset to default values",
        "Interactive tooltips for all probability notation",
        "KaTeX mathematical notation rendering",
        "Visual highlighting of marginal probabilities",
        "Real-time calculation updates"
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
          "name": "Joint Probability",
          "item": "https://www.learnmathclass.com/probability/calculators/joint-probability"
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
        title: "Joint Probability Calculator | 2x2 Probability Table Tool",
        description: "Calculate joint and marginal probabilities for two events with interactive 2x2 probability table. Includes validation, random generation, and tooltips.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/joint-probability",
        name: "Joint Probability Calculator"
      },
    }
  }
}

export default function JointProbabilityCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'-50px',marginBottom:'-20px'}}>Joint Probability Calculator</h1>
      <br/>
      <JointProbability2x2Table/>
      <br/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
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