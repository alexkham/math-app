
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import JointProbability2x2Table from '@/app/components/calculators/probability/JointProbability2x2Table.jsx'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'


/* calculators-mesh: finished 2026-10-17 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/probability/calculators/joint-probability" in calculators-mesh-registry.json (same folder): 7 usage sections, each with a demo; 1 panel note; 11 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
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
      content: `The 2×2 table holds four white cells in the middle, one for each combination of the two events: $P(A \\cap B)$ and $P(A^c \\cap B)$ in the top row, $P(A \\cap B^c)$ and $P(A^c \\cap B^c)$ in the second row. Type a decimal from $0$ to $1$ in a cell; the placeholder reads $0.000$ and values the calculator fills in itself are written with three decimals. The four cells partition the sample space, so they must add up to exactly $1$: a line under the table reports their sum once all four are filled, and a red message appears when the sum exceeds $1$.

The table completes itself as you type. As soon as two of the three values in a row or a column are known, the third is filled in: typing $0.3$ and $0.15$ in the top row writes $0.450$ into the marginal $P(B)$, and typing $0.2$ and $0.35$ in the second row writes $0.550$ into $P(B^c)$ and $0.500$ into $P(A)$ and $P(A^c)$. Changing a cell afterwards recomputes the margins: $0.4$ instead of $0.3$ lifts $P(B)$ to $0.550$ and the sum to $1.100$, which the message flags. What the four cells mean is explained in [What is Joint Probability?](!#what-is-joint-probability).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding Marginal Probabilities`,
      content: `The marginal probabilities sit in the column headed **Marginal P(B)** on the right, $P(B)$ and $P(B^c)$, and in the row headed **Marginal P(A)** at the bottom, $P(A)$ and $P(A^c)$; the corner cell shows the **Total**, $1.000$. Each marginal is the sum of its row or column of joint probabilities, by the sum rule, and the calculator writes it in as soon as both cells of that line are known. When a marginal box is left empty but its cells are filled, the computed value is shown under the box as "$= 0.450$".

The marginal boxes can also be typed into. Typing $P(A) = 0.5$ writes the complement $P(A^c) = 0.500$ at once, and $P(B) = 0.45$ writes $P(B^c) = 0.550$; with the margins in place, one joint probability fixes the rest, so $P(A \\cap B) = 0.3$ fills $P(A \\cap B^c) = 0.200$, $P(A^c \\cap B) = 0.150$ and $P(A^c \\cap B^c) = 0.350$. A typed marginal that disagrees with its cells, or a pair of marginals that does not add up to $1$, is reported in the message box. The rule behind the margins is explained in [Sum Rule and Probability Tables](!#sum-rule-and-probability-tables).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Using the Random, Calculate from Marginals and Clear All Buttons`,
      content: `Three buttons sit above the table. **Generate Random Example** fills the four joint cells with random values that add up to exactly $1$, clears the marginal boxes so that they are recomputed from the cells, and is the quickest way to see a complete table; click it again for another example. **Calculate from Marginals** builds the four cells from the other direction: type $P(A)$ or $P(A^c)$, $P(B)$ or $P(B^c)$, and the joint probability $P(A \\cap B)$, then click it, and the three remaining cells are filled by subtraction. **Clear All** empties every box, cells and margins alike, and removes the message.

There is no Reset to a default example; the page opens with every box empty, and Generate Random Example is the way to get a filled table at once. Where the random values and the subtractions come from is explained in [Sum Rule and Probability Tables](!#sum-rule-and-probability-tables).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Probability Table Structure`,
      content: `The table follows the usual layout of a contingency table. The columns are headed $A$ and $A^c$, the rows $B$ and $B^c$; the superscript $c$ marks the complement, the event not occurring, so the four white cells read $P(A \\cap B)$, $P(A^c \\cap B)$, $P(A \\cap B^c)$ and $P(A^c \\cap B^c)$. Each cell carries its notation above the box and a small **?** that opens a hint. The right-hand column, **Marginal P(B)**, holds $P(B)$ and $P(B^c)$, the sums of the two rows; the bottom row, **Marginal P(A)**, holds $P(A)$ and $P(A^c)$, the sums of the two columns; and the corner holds the **Total** $1.000$.

The event names in the headers are the ones typed in the **Event 1** and **Event 2** boxes above the table, so with "Rain" and "Cloudy" the first cell reads $P(\\text{Rain} \\cap \\text{Cloudy})$. Typing two cells of a row fills its marginal, and **Clear All** empties the whole grid again. The layout is explained in [Sum Rule and Probability Tables](!#sum-rule-and-probability-tables).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Interpreting Tooltips and Mathematical Notation`,
      content: `Every header and cell has a small **?** beside its notation. Hovering over it opens a hint: for a column header, which outcomes the column collects ("Column for outcomes where A occurs"); for a joint cell, that it is a joint probability and what it means ("Both A and B occur"), with the current value of the box once one is typed; for a marginal box, that it is the sum of its row or column, with the formula. Move the pointer away and the hint closes.

The notation uses $\\cap$ for "and" and the superscript $c$ for the complement: $P(A^c \\cap B)$ is the probability that $A$ does not occur while $B$ does. The names inside the symbols follow the **Event 1** and **Event 2** boxes, so renaming $A$ to "Rain" turns every $P(A \\ldots)$ into $P(\\text{Rain} \\ldots)$. The symbols are explained in [Joint vs Marginal vs Conditional Probability](!#joint-vs-marginal-vs-conditional-probability).`,
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

For comprehensive theory on joint probability including derivations, properties, and applications to multiple events, see [joint probability theory](!/probability/joint-probability#definition).

The lesson defines it in [Definition](!/probability/joint-probability#definition) and [Notation](!/probability/joint-probability#notation), and covers the computations in [Calculating joint probabilities](!/probability/joint-probability#calculate).`,
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

The calculator doesn't compute conditionals directly, but you can calculate them manually: divide any joint probability by its corresponding marginal. For example, P(A|B) = P(A∩B)/P(B) using values from the table.

The three are compared in [Marginal probability](!/probability/joint-probability#marginal) and [From joint to conditional](!/probability/joint-probability#conditional); the conditional formula is in [The conditional probability formula](!/probability/conditional-probability#formula) and the independence case in [Independence](!/probability/joint-probability#independence).`,
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

Understanding the sum rule clarifies why the table has its specific structure: interior cells represent joint probabilities, edge cells show marginals computed by summing, and the corner displays the total sum verifying probability axioms.

The rule is taught as [The law of total probability](!/probability/total-probability#law) and applied to tables in [Joint probability tables](!/probability/joint-probability#tables).`,
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

**Contingency Table Analysis** - Perform chi-square tests and compute measures of association for categorical data.

The theory behind these tools is taught in [Joint probability tables](!/probability/joint-probability#tables), [From joint to conditional](!/probability/joint-probability#conditional) and [Independence](!/probability/independence#definition).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Naming the Events`,
      content: `The two boxes above the buttons, **Event 1** and **Event 2**, hold the names of the events, $A$ and $B$ when the page opens. Type any short label, "Rain" and "Cloudy" for example, and every header, cell notation, hint and message is rewritten with it at once: the columns become Rain and Rain$^c$, the first cell $P(\\text{Rain} \\cap \\text{Cloudy})$, the marginal row Marginal P(Rain). The numbers are not touched by a rename.

Short names keep the table readable, since each appears several times in every cell. The names are also used in the validation messages, so "P(Rain) = 1.100 is invalid" names the margin that went wrong. What the two events and their complements stand for is explained in [What is Joint Probability?](!#what-is-joint-probability).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Reading the Validation Messages`,
      content: `A message box appears above the table as soon as the numbers break a rule, and disappears when they are corrected. A red **Invalid** message names the rule: a joint cell larger than its marginal ("$P(A \\cap B) = 0.600$ cannot exceed $P(A) = 0.500$"), a marginal outside $0$ to $1$, a typed marginal that disagrees with the sum of its cells, a pair of complements that does not add up to $1.000$, or four joint cells whose sum exceeds $1$ ("Sum of joint probabilities is $1.400$, which exceeds 1"). Typing $0.6$ and $0.5$ in the top row, for example, makes $P(B) = 1.100$ and is refused; lowering the first cell to $0.4$ clears the message.

The checks run on every keystroke, so a message may appear halfway through typing a number and vanish once it is complete. They enforce the axioms that every probability lies between $0$ and $1$ and that the four joint probabilities partition the sample space. Why these rules hold is explained in [Sum Rule and Probability Tables](!#sum-rule-and-probability-tables).`,
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

  const detailInstructions = [
    `Type the names of the two events in **Event 1** and **Event 2**; every header and cell notation follows them. [Learn more about naming the events](!#naming-the-events)`,
    `Type decimals from 0 to 1 in the four white cells; once two values of a row or column are known the third is filled in, and the margins follow. [Learn more about entering joint probabilities](!#entering-joint-probabilities)`,
    `Or type the margins, **P(A)** and **P(B)** with one joint probability, and let the calculator fill the cells. [Learn more about the marginal probabilities](!#understanding-marginal-probabilities)`,
    `Click **Generate Random Example** for a valid table at once, **Calculate from Marginals** to build the cells from the margins, or **Clear All** to start again. [Learn more about the buttons](!#using-the-random-calculate-from-marginals-and-clear-all-buttons)`,
    `Read the table: joint cells in the middle, **Marginal P(B)** on the right, **Marginal P(A)** at the bottom, the **Total** in the corner. [Learn more about the table](!#reading-the-probability-table-structure)`,
    `Hover a **?** for the meaning of a header, cell or margin and its current value. [Learn more about the hints](!#interpreting-tooltips-and-mathematical-notation)`,
    `Watch the message box above the table: a red message names the rule a value breaks. [Learn more about the messages](!#reading-the-validation-messages)`,
  ];
  const jpExplanations = {
    main: {
      title: `What is Joint Probability?`,
      content: `Joint probability is the chance that two events happen together, $P(A \cap B)$; the four joint cells of the table partition the sample space and add up to $1$, and each marginal is the sum of its row or column. [Learn more about joint probability](!#what-is-joint-probability)`,
    },
  };
  const demos = {
    'entering-joint-probabilities': {
      title: 'Four cells, a sum above 1, the sum corrected',
      scale: 0.5,
      minHeight: 454,
      script: [
        { say: 'TYPE 0.3, 0.15, 0.2 and 0.35 in the four cells\nThe margins fill themselves: P(B) 0.450, P(B^c) 0.550, P(A) 0.500, P(A^c) 0.500.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.3' },
        { set: { css: 'input[type="text"]', nth: 3 }, value: '0.15' },
        { set: { css: 'input[type="text"]', nth: 5 }, value: '0.2' },
        { set: { css: 'input[type="text"]', nth: 6 }, value: '0.35' },
        { wait: 3200 },
        { say: 'TYPE 0.4 in the first cell\nThe margins update and the sum reads 1.100: a red message says the four cells exceed 1.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.4' },
        { wait: 3000 },
        { say: 'TYPE 0.3 in the first cell again\nThe sum is 1.000 and the message is gone.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.3' },
        { wait: 2800 },
      ],
    },
    'understanding-marginal-probabilities': {
      title: 'Margins first, then one joint cell',
      scale: 0.5,
      minHeight: 454,
      script: [
        { say: 'TYPE 0.5 as P(A)\nIts complement P(A^c) = 0.500 is written at once.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 8 }, value: '0.5' },
        { wait: 2800 },
        { say: 'TYPE 0.45 as P(B)\nP(B^c) = 0.550 follows.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 4 }, value: '0.45' },
        { wait: 2800 },
        { say: 'TYPE 0.3 as P(A ∩ B)\nThe other three cells fill in: 0.200, 0.150, 0.350.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.3' },
        { wait: 3200 },
      ],
    },
    'using-the-random-calculate-from-marginals-and-clear-all-buttons': {
      title: 'A random example, Clear All, another example',
      scale: 0.5,
      minHeight: 454,
      script: [
        { say: 'CLICK Generate Random Example\nFour random joint cells that add up to 1.000; the margins follow.', at: 'tr' },
        { click: { button: 'Generate Random Example', exact: true } },
        { wait: 3000 },
        { say: 'CLICK Clear All\nEvery box is empty again.', at: 'tr' },
        { click: { button: 'Clear All', exact: true } },
        { wait: 2600 },
        { say: 'CLICK Generate Random Example\nAnother valid table.', at: 'tr' },
        { click: { button: 'Generate Random Example', exact: true } },
        { wait: 3000 },
      ],
    },
    'reading-the-probability-table-structure': {
      title: 'Named events, a filled row, the grid cleared',
      scale: 0.5,
      minHeight: 454,
      script: [
        { say: 'TYPE Rain and Cloudy as the event names\nThe headers read Rain, Rain^c, Cloudy, Cloudy^c.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: 'Rain' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: 'Cloudy' },
        { wait: 2800 },
        { say: 'TYPE 0.3 and 0.15 in the top row\nThe row margin P(Cloudy) reads 0.450.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.3' },
        { set: { css: 'input[type="text"]', nth: 3 }, value: '0.15' },
        { wait: 3000 },
        { say: 'CLICK Clear All\nThe grid is empty; the names stay.', at: 'tr' },
        { click: { button: 'Clear All', exact: true } },
        { wait: 2600 },
      ],
    },
    'interpreting-tooltips-and-mathematical-notation': {
      title: 'Two hints, then renamed notation',
      scale: 0.5,
      minHeight: 454,
      script: [
        { say: 'HOVER the ? of the first column header\nThe hint: Event A, the column for outcomes where A occurs.', at: 'tr' },
        { hover: { text: '?', css: 'th div', exact: true } },
        { wait: 2800 },
        { say: 'TYPE 0.3 in the first cell, HOVER its ?\nJoint Probability: both A and B occur; Current: 0.3.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.3' },
        { hover: { text: '?', css: 'td div', exact: true } },
        { wait: 3000 },
        { say: 'TYPE Rain as Event 1\nEvery notation now reads P(Rain ∩ B), P(Rain^c ∩ B) and so on.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: 'Rain' },
        { wait: 2800 },
      ],
    },
    'naming-the-events': {
      title: 'Two names and a cell',
      scale: 0.5,
      minHeight: 454,
      script: [
        { say: 'TYPE Rain as Event 1\nThe columns become Rain and Rain^c.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: 'Rain' },
        { wait: 2600 },
        { say: 'TYPE Cloudy as Event 2\nThe rows become Cloudy and Cloudy^c; the first cell reads P(Rain ∩ Cloudy).', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: 'Cloudy' },
        { wait: 2600 },
        { say: 'TYPE 0.3 in the first cell\nA value for P(Rain ∩ Cloudy); the numbers are independent of the names.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.3' },
        { wait: 2800 },
      ],
    },
    'reading-the-validation-messages': {
      title: 'A margin above 1, corrected, then four cells above 1',
      scale: 0.5,
      minHeight: 454,
      script: [
        { say: 'TYPE 0.6 and 0.5 in the top row\nP(B) would be 1.100: a red message.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.6' },
        { set: { css: 'input[type="text"]', nth: 3 }, value: '0.5' },
        { wait: 3000 },
        { say: 'TYPE 0.4 in the first cell\nP(B) = 0.900: the message is gone.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '0.4' },
        { wait: 2800 },
        { say: 'TYPE 0.3 and 0.2 in the second row\nThe four cells add up to 1.400: the sum message.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 5 }, value: '0.3' },
        { set: { css: 'input[type="text"]', nth: 6 }, value: '0.2' },
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
      jpExplanations,
      demos,
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

export default function JointProbabilityCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas, detailInstructions = [], jpExplanations = null, demos = {}}) {

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
      <JointProbability2x2Table explanations={jpExplanations || undefined} />
    </ToolDemoPlayer>
  )
  const genericSections = [
    { id: 'naming-the-events', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [demoPlayer('naming-the-events'), sectionsContent.obj10.content] },
    { id: 'entering-joint-probabilities', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('entering-joint-probabilities'), sectionsContent.obj1.content] },
    { id: 'understanding-marginal-probabilities', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('understanding-marginal-probabilities'), sectionsContent.obj2.content] },
    { id: 'using-the-random-calculate-from-marginals-and-clear-all-buttons', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('using-the-random-calculate-from-marginals-and-clear-all-buttons'), sectionsContent.obj3.content] },
    { id: 'reading-the-probability-table-structure', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('reading-the-probability-table-structure'), sectionsContent.obj4.content] },
    { id: 'interpreting-tooltips-and-mathematical-notation', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [demoPlayer('interpreting-tooltips-and-mathematical-notation'), sectionsContent.obj5.content] },
    { id: 'reading-the-validation-messages', title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [demoPlayer('reading-the-validation-messages'), sectionsContent.obj11.content] },
    { id: 'what-is-joint-probability', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [sectionsContent.obj6.content] },
    { id: 'joint-vs-marginal-vs-conditional-probability', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [sectionsContent.obj7.content] },
    { id: 'sum-rule-and-probability-tables', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Joint Probability Calculator</h1>
      <div style={{marginBottom:'20px'}}>
        <ExplanationDetails instructions={detailInstructions} title='How to use Joint Probability Calculator' />
      </div>
      <br/>
      <JointProbability2x2Table explanations={jpExplanations || undefined} />
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