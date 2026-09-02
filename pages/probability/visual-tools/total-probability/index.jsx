


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import TotalProbabilityVisualizerV2 from '@/app/components/probability/total-probability/TotalProbabilityVisualizerV2'
import totalProbabilityDiagrams from '@/app/components/probability/total-probability/totalProbabilityDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


// Surfaced on the /probability hub via buildSectionData extraction
// (card icon + description). Do not use apostrophes in comments here.
const hubMeta = {
  svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="21" x2="50" y2="36" stroke="#B5D4F4" stroke-width="1.2"/><line x1="30" y1="39" x2="50" y2="39" stroke="#B5D4F4" stroke-width="1.2"/><line x1="30" y1="57" x2="50" y2="42" stroke="#B5D4F4" stroke-width="1.2"/><rect x="10" y="14" width="20" height="14" rx="3" fill="#85B7EB" fill-opacity="0.7" stroke="#0C447C" stroke-width="1"/><rect x="10" y="32" width="20" height="14" rx="3" fill="#97C459" fill-opacity="0.7" stroke="#27500A" stroke-width="1"/><rect x="10" y="50" width="20" height="14" rx="3" fill="#AFA9EC" fill-opacity="0.7" stroke="#3C3489" stroke-width="1"/><rect x="50" y="32" width="20" height="14" rx="3" fill="#FAC775" stroke="#854F0B" stroke-width="1.3"/><text x="20" y="24" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle" font-style="italic">B&#8321;</text><text x="20" y="42" font-family="Georgia,serif" font-size="7" fill="#173404" text-anchor="middle" font-style="italic">B&#8322;</text><text x="20" y="60" font-family="Georgia,serif" font-size="7" fill="#26215C" text-anchor="middle" font-style="italic">B&#8323;</text><text x="60" y="42" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle" font-style="italic">A</text><text x="40" y="74" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#931; P(A|B)P(B)</text></svg>`,
}

export async function getStaticProps(){

  const keyWords = [
    'total probability theorem',
    'law of total probability',
    'total probability visualizer',
    'partition probability',
    'total probability calculator',
    'probability tree diagram',
    'marginal probability calculator',
    'joint probability visualization',
    'Bayes theorem application',
    'conditional probability paths',
    'interactive probability tool',
    'total probability formula',
    'probability partition example',
    'law of total probability calculator',
    'total probability interactive'
  ]

  const sectionsContent = {
    obj1: {
      title: `Using the Interactive Visualizer`,
      content: `The Total Probability Visualizer lets you explore how probabilities flow through partitioned sample spaces. Start by selecting the number of A events (2-5) and B outcomes (2-5) using the control buttons. Notice that these numbers have an inverse relationship - more A events means fewer possible B outcomes to keep the visualization readable.

The tree diagram shows probability paths from left to right. The first level branches represent your A events, each labeled with its probability P(Aᵢ). The second level shows all possible B outcomes for each A event, labeled with conditional probabilities P(Bⱼ|Aᵢ). Click on any outcome in the calculations panel to highlight its corresponding path through the tree.

Use the "Customize Data" button to reveal probability sliders. Adjust P(A) values and they automatically normalize to sum to 1. Similarly, conditional probabilities P(B|A) for each A event normalize across their row. Watch how the tree diagram and calculations update in real-time as you modify probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding the Calculations Panel`,
      content: `The right panel displays four types of probability calculations. The **Marginal Probabilities** section shows P(Bⱼ) for each outcome, calculated using the total probability formula by summing across all paths that lead to that outcome. Click any marginal probability to highlight all contributing paths in the tree.

The **View All Paths** buttons let you highlight every path passing through a specific A event, making it easy to see how that partition element contributes to different outcomes. The **Joint Probabilities** section displays P(Aᵢ ∩ Bⱼ) for every combination, calculated by multiplying along each path from start to endpoint.

The **Bayes' Theorem** section shows reversed conditional probabilities P(Aᵢ|Bⱼ), demonstrating how to work backward from observed outcomes to determine which partition element likely occurred. These calculations automatically update as you adjust your probability values, providing instant feedback on how changes propagate through the system.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `What is the Law of Total Probability?`,
      content: `The law of total probability provides a method for calculating the probability of an event B by considering all possible ways B can occur through a partition of the sample space. If events A₁, A₂, ..., Aₙ form a partition (mutually exclusive and exhaustive), then the probability of any event B is given by:

$$P(B) = \\sum_{i=1}^{n} P(A_i) \\cdot P(B|A_i)$$

This formula says that to find P(B), we sum the probabilities of B occurring through each partition element Aᵢ. Each term P(Aᵢ) · P(B|Aᵢ) represents one path to B through the partition. The visualizer displays this graphically - each path from start to a B outcome corresponds to one term in this sum.

The power of this theorem lies in breaking complex probability problems into simpler conditional pieces. When direct calculation of P(B) is difficult, partitioning the sample space into cases where conditional probabilities are easier to determine makes the problem tractable.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Partitions of the Sample Space`,
      content: `A partition of the sample space is a collection of events that are mutually exclusive (no overlap) and collectively exhaustive (cover all possibilities). In the visualizer, the A events form a partition - exactly one A event occurs in any outcome, and together they account for all possibilities.

Mathematically, events A₁, A₂, ..., Aₙ partition the sample space if: (1) Aᵢ ∩ Aⱼ = ∅ for all i ≠ j (mutually exclusive), and (2) A₁ ∪ A₂ ∪ ... ∪ Aₙ = S (collectively exhaustive). These properties ensure that probabilities P(A₁), P(A₂), ..., P(Aₙ) sum to exactly 1.

Common partitions include: categorizing by different scenarios (rainy/sunny, male/female, treatment groups in experiments), age groups in demographic studies, or different disease states in medical testing. The visualizer lets you explore how outcomes distribute across partition elements and how this affects total probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Connection to Bayes' Theorem`,
      content: `The law of total probability and Bayes' theorem are intrinsically connected. While total probability calculates P(B) by conditioning on partition elements, Bayes' theorem reverses this to find P(Aᵢ|B):

$$P(A_i|B) = \\frac{P(A_i) \\cdot P(B|A_i)}{P(B)} = \\frac{P(A_i) \\cdot P(B|A_i)}{\\sum_{j=1}^{n} P(A_j) \\cdot P(B|A_j)}$$

Notice that the denominator is exactly the total probability formula. This connection means the two theorems work together - total probability computes the normalizing constant needed for Bayes' theorem. The visualizer displays both: marginal P(B) values use total probability, while the Bayes' theorem section shows the reversed conditionals.

This relationship is crucial in statistical inference. Given an observed outcome B, Bayes' theorem determines which partition element Aᵢ most likely caused it, using the total probability of B as the normalizing factor. The visualizer lets you see how prior probabilities P(Aᵢ) and likelihoods P(B|Aᵢ) combine to produce posterior probabilities P(Aᵢ|B).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Joint and Marginal Probabilities`,
      content: `Joint probabilities P(Aᵢ ∩ Bⱼ) represent the probability that both events occur simultaneously. In the tree diagram, each endpoint corresponds to a joint probability, calculated by multiplying along the path: P(Aᵢ ∩ Bⱼ) = P(Aᵢ) · P(Bⱼ|Aᵢ). Click any joint probability in the panel to see its path highlighted.

Marginal probabilities are obtained by summing joint probabilities. The marginal P(Bⱼ) is found by summing all joint probabilities involving Bⱼ across different A events: P(Bⱼ) = Σᵢ P(Aᵢ ∩ Bⱼ). This is exactly the total probability formula - marginal probabilities are computed using total probability.

The relationship between joint and marginal probabilities is fundamental to probability theory. Marginals represent "overall" probabilities ignoring certain variables, while joints represent "specific" probabilities of combinations. The visualizer shows both simultaneously, helping you understand how conditioning on partition elements (the A events) breaks down marginal probabilities into their joint components.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Real-World Applications`,
      content: `The law of total probability appears throughout practical probability problems. In **medical diagnosis**, doctors partition patients by test results (positive/negative) and use total probability to find overall disease prevalence: P(Disease) = P(Test+)·P(Disease|Test+) + P(Test-)·P(Disease|Test-).

In **quality control**, manufacturers partition production by machine or shift. The probability of a defective item is: P(Defective) = Σ P(Machineᵢ)·P(Defective|Machineᵢ). This helps identify which machines or shifts contribute most to defects.

**Risk assessment** in finance and insurance uses partitions by economic scenarios. The total probability of a loss event considers all possible economic conditions: P(Loss) = Σ P(Scenarioᵢ)·P(Loss|Scenarioᵢ). The visualizer's interactive nature makes it easy to explore how different scenario probabilities affect overall risk.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Probability Trees and Path Analysis`,
      content: `Probability trees provide a visual representation of sequential or conditional probability structures. Each branch represents a possible outcome with its associated probability. In the total probability context, the first level branches show the partition (A events), and second level branches show outcomes (B events) conditional on each partition element.

Path probabilities are calculated by multiplying probabilities along the path. A path from start through Aᵢ to Bⱼ has probability P(Aᵢ) · P(Bⱼ|Aᵢ) = P(Aᵢ ∩ Bⱼ). The tree structure makes this multiplication rule visual and intuitive. The visualizer highlights paths when you click outcomes, showing exactly which probabilities multiply together.

Trees excel at organizing complex conditional relationships. When multiple stages of conditioning exist, trees prevent confusion about which probabilities to multiply versus add. The total probability theorem corresponds to summing across all paths reaching the same endpoint - the visualizer makes this summation explicit in the marginal probability calculations.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Common Mistakes and Misconceptions`,
      content: `A common error is confusing P(B|A) with P(A|B). The total probability formula uses P(B|A) values (likelihoods of B given different A events), not the reverse. The visualizer's tree structure helps prevent this - arrows point from A to B, showing the direction of conditioning clearly.

Another mistake is forgetting that partition elements must be exhaustive. If your A events don't cover all possibilities, the total probability formula gives an incomplete answer. The visualizer enforces this - probabilities P(Aᵢ) always sum to 1, ensuring the partition is complete.

Some students incorrectly try to apply total probability without a proper partition. The theorem requires mutually exclusive, exhaustive events. Using overlapping categories or incomplete sets leads to wrong answers. The visualizer's structure - where you must specify distinct A events that account for all probability mass - reinforces the partition requirement.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Total Probability vs. Addition Rule`,
      content: `The total probability theorem is sometimes confused with the basic addition rule for mutually exclusive events. While both involve summing probabilities, they apply in different contexts. The addition rule P(A ∪ B) = P(A) + P(B) combines probabilities of mutually exclusive events A and B directly.

Total probability, by contrast, calculates P(B) by conditioning on a partition: P(B) = Σ P(Aᵢ)·P(B|Aᵢ). This is necessary when you don't know P(B) directly but do know how likely B is under different partition elements. The multiplication by P(Aᵢ) weights each conditional probability by how likely that partition element is.

Think of it this way: addition rule combines alternatives (A or B), while total probability combines pathways (B through A₁, or B through A₂, etc.). The visualizer shows these pathways explicitly - each path to a B outcome represents one term in the total probability sum.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Probability Concepts`,
      content: `**Conditional Probability** forms the foundation of total probability. Understanding P(B|A) is essential before applying the total probability theorem. For detailed coverage of conditional probability, see **conditional probability theory** and **conditional probability visualizations**.

**Bayes' Theorem** reverses the conditioning in total probability problems. After computing P(B) using total probability, Bayes' theorem finds P(Aᵢ|B). These theorems work as a pair in many applications. Learn more at **Bayes' theorem calculator** and **Bayes' theorem examples**.

**Independence** provides an important special case. When B is independent of the partition, P(B|Aᵢ) equals P(B) for all i, and total probability simplifies to P(B) = Σ P(Aᵢ)·P(B) = P(B). Explore independence at **independent events** and **testing independence**.

**Probability distributions** can be analyzed using total probability by conditioning on parameter values or mixture components. See **mixture distributions** and **conditional distributions** for applications in statistical modeling.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Practice Problems and Exercises`,
      content: `Use the visualizer to explore these scenarios:

**Problem 1 - Medical Testing**: Set up two A events (Disease, No Disease) with P(Disease) = 0.01. Set conditional probabilities P(Test+|Disease) = 0.95 and P(Test+|No Disease) = 0.05. Use total probability to find P(Test+). The visualizer shows this equals 0.01·0.95 + 0.99·0.05 = 0.059.

**Problem 2 - Manufacturing**: Create three A events for three machines with P(M₁) = 0.5, P(M₂) = 0.3, P(M₃) = 0.2. Set defect rates P(Defect|M₁) = 0.02, P(Defect|M₂) = 0.05, P(Defect|M₃) = 0.03. Calculate overall defect probability using total probability.

**Problem 3 - Weather**: Set A events for weather conditions (Sunny, Cloudy, Rainy). Choose reasonable probabilities for each. Then set conditional probabilities for traffic delay given each weather condition. Use total probability to find overall delay probability. Experiment with different weather probabilities to see how total delay probability changes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `The Default Tree`,
      content: `The visualizer opens on a three-part partition. From the start node, three branches carry $P(A_1) = 0.33$, $P(A_2) = 0.33$ and $P(A_3) = 0.34$; each then splits into three outcomes carrying the conditional probabilities $P(B_j \mid A_i)$.

Multiplying along any root-to-leaf path gives that path's joint probability. The first path, for instance, is $0.33 \times 0.4 = 0.132$, which is $P(A_1 \cap B_1)$.`,
      before: ``,
      after: `Two conditions make the tree a valid partition, and both are visible in the numbers. The branch probabilities sum to 1, so the $A_i$ cover the whole sample space; and each fan of conditionals sums to 1, so within any branch the outcomes are exhaustive.

Nine leaves, nine joint probabilities, and they sum to 1 as well. Every point of the sample space lands on exactly one leaf — that is what "partition" buys, and it is the reason the law of total probability can add path probabilities without any risk of double counting.`,
      link: '',
    },
    obj14: {
      title: `Following a Single Branch`,
      content: `Clicking a partition event highlights everything downstream of it. In the frozen picture below, $A_1$ is selected: its branch and all three of its outcomes are drawn in colour while the rest of the tree fades to grey.

What is highlighted is the conditional world "given $A_1$". Inside it the three conditional probabilities $0.4$, $0.3$, $0.3$ sum to 1 — they are a complete probability distribution in their own right.`,
      before: ``,
      after: `This view separates two quantities the notation makes easy to confuse. $P(B_1 \mid A_1) = 0.4$ is the probability *within* the highlighted sub-tree, and it is the number on the edge. $P(A_1 \cap B_1) = 0.132$ is the probability of that leaf *within the whole tree*, and it is the number at the node — the edge value scaled down by the $0.33$ it took to reach the branch at all.

Conditioning is exactly that rescaling. Restricting attention to $A_1$ makes its probability the new total, and dividing through by $0.33$ is what turns joint probabilities back into conditional ones.`,
      link: '',
    },
    obj15: {
      title: `Summing Across Branches: the Law Itself`,
      content: `Clicking an outcome instead highlights one $B_j$ across **every** branch. The still shows $B_2$ selected, so the three paths ending in $B_2$ are lit and the others fade.

Those three paths are exactly the terms of the law of total probability:

$P(B_2) = 0.33 \times 0.3 + 0.33 \times 0.5 + 0.34 \times 0.3 = 0.366$`,
      before: ``,
      after: `This is the picture the whole tool is built around. An event that is awkward to compute directly is decomposed into the ways it can happen — one per partition branch — and those pieces are added.

The reason the addition is legitimate is that the branches are disjoint. $B_2$ can occur with $A_1$, with $A_2$ or with $A_3$, never with two at once, so the three joint probabilities can be summed without correction. That disjointness is why the partition condition matters and why this is not the general addition rule, which needs an intersection term subtracted.

Highlighting each outcome in turn gives $0.299$, $0.366$ and $0.335$ — the three $B$ marginals, summing to 1.`,
      link: '',
    },
    obj16: {
      title: `Changing the Partition Size`,
      content: `Nothing in the law fixes the number of branches. The controls let the partition run from two to five parts, with the outcome count adjusting inversely.

The frozen picture is a four-part partition, each branch carrying $0.25$. The tree is wider, there are twelve leaves instead of nine, and the marginals still sum to 1.`,
      before: ``,
      after: `The statement generalises without change: $P(B) = \sum_{i} P(A_i) P(B \mid A_i)$, over however many branches the partition has. Two is enough — the common case is a partition into an event and its complement, $P(B) = P(A)P(B \mid A) + P(A^c)P(B \mid A^c)$ — and the sum extends to any finite number.

What does change is the arithmetic burden. Each extra branch adds a term to every marginal, which is why the tree view stops being practical well before the mathematics does. The principle is what transfers; the drawing is a teaching aid that runs out of room first.`,
      link: '',
    },
  }


  /* ---- frozen-state demonstration units (Line 1) ----
     The tree is built inline in JSX, so totalProbabilityDiagrams.js ports it:
     same canvas and column positions, same spacing rules, same highlight
     colouring and path widths, same label plates. Joint probabilities and B
     marginals come from the component's own model. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: totalProbabilityDiagrams[key], caption, text })

  const stateUnits = {
    overview: unit('overview', 'Default tree, nothing highlighted',
      'Three branches into three outcomes: 12 edges, 13 nodes. Every root-to-leaf product is a joint ' +
      'probability, and the nine of them sum to 1.'),
    branch: unit('branch', 'Branch A1 highlighted',
      'One partition event selected, so its branch and its three outcomes stay coloured while the rest ' +
      'fades. Inside that sub-tree the conditionals 0.4, 0.3, 0.3 sum to 1 on their own.'),
    outcome: unit('outcome', 'Outcome B2 highlighted across every branch',
      'The three paths ending in B2 are lit. Their joint probabilities - 0.099, 0.165, 0.102 - are the ' +
      'terms of the law of total probability, summing to P(B2) = 0.366.'),
    wide: unit('wide', 'A four-part partition',
      'The same construction with four branches of 0.25 each and twelve leaves. The marginals still ' +
      'sum to 1; only the number of terms changed.'),
  }


  /* ---- per-state notes, passed into the component (Line 1) ----
     TotalProbabilityVisualizerV2 took no props; an additive `explanations = null`
     prop was added and the note renders above the tree. The state is derived
     from the component's own highlightedPath and partition size. Rendered with
     dangerouslySetInnerHTML, so raw HTML. */
  const note = (body, slug, label) =>
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-is-the-law-of-total-probability" style="color:#1d4ed8;font-weight:600">the law itself</a>`

  const explanations = {
    overview: note('Every leaf is one branch probability times one conditional; all nine sum to 1.', 'the-default-tree', 'Learn more about the default tree'),
    branch: note('Inside a highlighted branch the conditionals form a complete distribution of their own.', 'following-a-single-branch', 'Learn more about following one branch'),
    outcome: note('These highlighted paths ARE the terms of the law - disjoint branches, so they simply add.', 'summing-across-branches', 'Learn more about summing across branches'),
    wide: note('The law does not care how many branches the partition has.', 'changing-the-partition-size', 'Learn more about partition size'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the law of total probability?",
      answer: "The law of total probability states that if A₁, A₂, ..., Aₙ form a partition of the sample space, then P(B) = Σ P(Aᵢ)·P(B|Aᵢ). This formula calculates the probability of event B by considering all possible ways B can occur through the partition elements, weighting each path by the probability of that partition element."
    },
    obj2: {
      question: "How does the visualizer calculate marginal probabilities?",
      answer: "The visualizer calculates marginal probabilities P(Bⱼ) using the total probability formula: it sums P(Aᵢ)·P(Bⱼ|Aᵢ) across all A events. Each term represents one path through the tree to outcome Bⱼ. Click any marginal probability to see all contributing paths highlighted in the tree diagram."
    },
    obj3: {
      question: "What is a partition of the sample space?",
      answer: "A partition is a collection of events that are mutually exclusive (no overlap) and collectively exhaustive (cover all possibilities). The A events in the visualizer form a partition - exactly one occurs in any outcome, and their probabilities sum to 1. This structure is required for the total probability theorem to work correctly."
    },
    obj4: {
      question: "How is total probability related to Bayes' theorem?",
      answer: "Total probability calculates P(B) by conditioning on partition elements: P(B) = Σ P(Aᵢ)·P(B|Aᵢ). Bayes' theorem reverses this to find P(Aᵢ|B) = P(Aᵢ)·P(B|Aᵢ)/P(B), where the denominator is the total probability. The two theorems work together - total probability provides the normalizing constant for Bayes' theorem."
    },
    obj5: {
      question: "When should I use the law of total probability?",
      answer: "Use total probability when you need to find P(B) but don't know it directly. Instead, you know how to partition the sample space into cases where conditional probabilities P(B|Aᵢ) are easier to determine. Common applications include medical diagnosis, quality control, risk assessment, and any scenario where outcomes can be categorized into distinct cases."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Total Probability Visualizer",
      "description": "Interactive tool for visualizing the law of total probability with tree diagrams, marginal probabilities, joint probabilities, and Bayes' theorem calculations.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/total-probability",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive probability tree diagram with adjustable partitions",
        "Real-time calculation of marginal probabilities using total probability formula",
        "Joint probability visualization for all outcome combinations",
        "Bayes' theorem calculations showing reversed conditional probabilities",
        "Customizable probability sliders with automatic normalization",
        "Click-to-highlight path tracing through the probability tree",
        "Dynamic updates showing how probability changes propagate through the system"
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
          "name": "Total Probability Visualizer",
          "item": "https://www.learnmathclass.com/probability/visual-tools/total-probability"
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
      faqQuestions,
      schemas,
      seoData: {
        title: "Total Probability Visualizer - Interactive Tool | Learn Math Class",
        description: "Visualize the law of total probability with interactive tree diagrams. Calculate marginal, joint, and conditional probabilities with real-time updates and path highlighting.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/total-probability",
        category: "Conditional Probability",
        hubDescription: "Calculate marginal probabilities using the law of total probability with an interactive tree diagram. The tool shows how probabilities flow through partitioned sample spaces, displaying joint probabilities, conditional probabilities, and Bayes' theorem calculations in real-time.",
        name: "Total Probability Visualizer"
      }
    }
  }
}

export default function TotalProbabilityPage({seoData, sectionsContent, stateUnits, explanations, faqQuestions, schemas}) {

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

  // this page previously generated its sections from Object.keys(sectionsContent)
  // with numeric ids; replaced with an explicit slug list
  const genericSections = [
    plain('obj1', 'using-the-visualizer'),
    plain('obj2', 'the-calculations-panel'),
    stateRow('obj13', 'the-default-tree', 'overview'),
    stateRow('obj14', 'following-a-single-branch', 'branch'),
    stateRow('obj15', 'summing-across-branches', 'outcome'),
    stateRow('obj16', 'changing-the-partition-size', 'wide'),
    plain('obj3', 'what-is-the-law-of-total-probability'),
    plain('obj4', 'partitions-of-the-sample-space'),
    plain('obj5', 'connection-to-bayes-theorem'),
    plain('obj6', 'joint-and-marginal-probabilities'),
    plain('obj7', 'real-world-applications'),
    plain('obj8', 'probability-trees-and-paths'),
    plain('obj9', 'common-mistakes'),
    plain('obj10', 'total-probability-vs-addition-rule'),
    plain('obj11', 'related-concepts'),
    plain('obj12', 'practice-problems'),
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
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
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
      
      {/* <GenericNavbar/> */}
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Total Probability Visualizer</h1>
      <br/>
      <div style={{transform:'scale(0.85)'}}>
        <TotalProbabilityVisualizerV2 explanations={explanations}/>
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
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