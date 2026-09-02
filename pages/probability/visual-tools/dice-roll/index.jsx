
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import DiceRollSimulator from '@/app/components/probability/dice-roll/DiceRollSimulator'
import DiceSampleSpaceVisualizer from '@/app/components/probability/sampleSpace/DiceSampleSpaceVisualizer'
import diceSampleSpaceDiagrams from '@/app/components/probability/sampleSpace/diceSampleSpaceDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


// Surfaced on the /probability hub via buildSectionData extraction
// (card icon + description). Do not use apostrophes in comments here.
const hubMeta = {
  hubDescription: 'Roll up to six dice and watch frequency distributions converge to theoretical patterns, or explore the complete sample space and filter by conditions like sum equals 7 to compute exact probabilities.',
  svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="12" width="24" height="24" rx="5" fill="#E6F1FB" stroke="#185FA5" stroke-width="1.4"/><circle cx="18" cy="18" r="2.4" fill="#0C447C"/><circle cx="30" cy="18" r="2.4" fill="#0C447C"/><circle cx="24" cy="24" r="2.4" fill="#0C447C"/><circle cx="18" cy="30" r="2.4" fill="#0C447C"/><circle cx="30" cy="30" r="2.4" fill="#0C447C"/><rect x="42" y="15" width="21" height="21" rx="4" fill="#FAC775" stroke="#854F0B" stroke-width="1.4"/><circle cx="47" cy="20" r="2.2" fill="#412402"/><circle cx="52.5" cy="25.5" r="2.2" fill="#412402"/><circle cx="58" cy="31" r="2.2" fill="#412402"/><rect x="14" y="58" width="8" height="4" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.7"/><rect x="24" y="54" width="8" height="8" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.7"/><rect x="34" y="48" width="8" height="14" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.7"/><rect x="44" y="44" width="8" height="18" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.7"/><rect x="54" y="50" width="8" height="12" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.7"/><rect x="64" y="56" width="8" height="6" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.7"/><line x1="10" y1="62" x2="76" y2="62" stroke="#B5D4F4" stroke-width="1.1"/></svg>`,
}

export async function getStaticProps(){

  const keyWords = [
    'dice probability calculator',
    'dice roll simulator',
    'sum distribution calculator',
    'dice probability visualizer',
    'multiple dice probability',
    'dice rolling statistics',
    'expected value dice',
    'dice sample space',
    'probability distribution dice',
    'interactive dice simulator',
    'dice outcomes calculator',
    'dice sum probability',
    'law of large numbers dice',
    'discrete uniform distribution',
    'dice roll statistics'
  ]

  const sectionsContent = {
    obj1: {
      title: `The Dice Roll Probability Model`,
      content: `A standard six-sided die represents a discrete uniform distribution where each face (1, 2, 3, 4, 5, 6) has equal probability $1/6 \\approx 0.167$. Each roll is independent—previous outcomes don't affect future results—making dice the classic example of memoryless random processes.

When rolling multiple dice, outcomes combine multiplicatively. Two dice produce $6^2 = 36$ possible outcomes, three dice yield $6^3 = 216$ possibilities, and so on. The sample space grows exponentially while individual outcome probabilities shrink: each specific combination has probability $1/6^n$ for n dice.

Sum distributions, however, are not uniform. Rolling two dice, a sum of 7 occurs more frequently (6 ways: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1) than a sum of 2 (only one way: 1+1). This creates the characteristic bell curve in sum distributions—middle values have more combinations than extremes. The expected value for a single die is 3.5, and for n dice it's $3.5n$.

For comprehensive theory on dice probability including combinatorics and distribution calculations, see **dice roll probability model**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Getting Started with the Simulator`,
      content: `The simulator displays dice visually with dots showing the current roll. Select the number of dice (1-6) using the slider before starting—this setting locks once you begin rolling. The default is 2 dice, the classic setup for analyzing sum distributions.

Use the roll buttons to run simulations. "Roll 1" shows individual dice animations. "Roll 10" through "Roll 10K" batch-process rolls instantly for statistical analysis. Two tabs organize visualizations: "Sum Distribution" shows a histogram comparing actual frequencies to expected theoretical values, while "Convergence" plots how the average sum approaches the theoretical expected value.

Recent rolls display in the left panel showing the last 20 outcomes with individual die faces and their sums. Statistics update in real-time, calculating total rolls, actual average, variance, standard deviation, and z-scores.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Understanding Sum Distribution Histograms`,
      content: `The histogram plots sum values on the x-axis and frequency on the y-axis. Blue bars show actual roll counts, while translucent red bars overlay the expected theoretical distribution. With few rolls, blue bars appear jagged and irregular. As rolls accumulate, blue bars converge toward red expected values.

The bell-curve shape emerges naturally. For two dice, sum 7 is most probable (6 ways out of 36 possible outcomes), while extreme sums 2 and 12 are rarest (1 way each). This asymmetry explains why 7 appears roughly six times more often than snake eyes (double 1s) in large samples.

Watch the histogram evolve. After 100 rolls, you'll see rough patterns. After 10,000 rolls, the match between actual and expected becomes striking—demonstrating the Law of Large Numbers visually through the alignment of blue and red bars.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Convergence Graph`,
      content: `The convergence tab plots actual average sum (blue line) versus number of rolls on the x-axis. The red dashed line marks the theoretical expected value: 3.5 for one die, 7 for two dice, 10.5 for three dice, and so on.

Early rolls show wild fluctuations—the blue line jumps erratically as individual rolls dominate the average. With more data, fluctuations dampen and the blue line gravitates toward the red expected value line. By 10,000 rolls, the lines typically converge within a few percent.

This visualization proves the Law of Large Numbers: short-term randomness gives way to long-term predictability. Individual rolls remain unpredictable, but aggregate behavior becomes increasingly certain as sample size grows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Interpreting Statistics and Z-Scores`,
      content: `Total rolls and actual average display prominently. Compare actual average to expected average—for two dice, expected is exactly 7.0. Small deviations are normal; large persistent deviations suggest unusual runs or bias.

Variance measures spread in sum values: $\\text{Var} = n \\times 35/12$ for n dice. Standard deviation (SD) is the square root of variance. These grow with more dice because absolute variability increases even as relative proportion stabilizes.

The z-score standardizes deviation: $(\\text{actual average} - \\text{expected}) / (\\text{SD}/\\sqrt{\\text{rolls}})$. Values between -2 and 2 are normal (95% of outcomes). Beyond ±2 suggests unusual results. Beyond ±3 (labeled "Unusual!") occurs less than 0.3% of the time under normal randomness.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Using the Sample Space Explorer`,
      content: `Select number of dice (1-4) to generate all possible outcomes. The grid displays every combination: 6 outcomes for 1 die, 36 for 2 dice, 216 for 3 dice, 1,296 for 4 dice. Each cell shows dice faces visually with sum and individual probability.

Choose highlight conditions to filter outcomes. "Sum is..." provides nine sub-options: equals, greater than, less than, between, prime, perfect square, multiple of, and more. Other conditions include specific numbers (does outcome contain at least one 6?), extreme values (maximum die shows 5), patterns (all different, consecutive, doubles), and relationships (dice in ascending order).

Enable "Show Probabilities" to see $P = 1/6^n$ for each outcome. The probability analysis panel calculates favorable outcomes, displays the fraction, percentage, and decimal probability automatically.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Setting Advanced Highlight Conditions`,
      content: `Sum conditions filter by total. "Equals 7" with 2 dice highlights the 6 outcomes (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) showing 6/36 = 16.67% probability. "Between" allows ranges: sums from 8 to 10 with 3 dice. "Prime" finds outcomes where sum is prime (2, 3, 5, 7, 11, 13, etc.).

Specific number conditions check individual dice. "At least one 6" with 3 dice highlights any outcome containing a 6. "Exactly two 5s" requires precisely two dice showing 5. "None" finds outcomes excluding a number entirely.

Pattern conditions reveal structure. "All different" requires each die to show a unique value (impossible with more dice than faces). "Consecutive" finds sequences like 3-4-5. "Doubles" means at least two dice match. "First die > Second die" checks relationships between specific positions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Understanding Dice Relationships`,
      content: `Dice relationships examine ordering patterns. "Non-decreasing order" means each die is greater than or equal to the previous: 2-2-4-5 qualifies, but 3-2-4 does not. "Strictly ascending" requires strict inequality: 1-3-5 works, 2-2-4 fails.

"Difference conditions" measure spread. Setting difference to 2 with 2 dice highlights outcomes where (max - min) = 2, like 1-3, 2-4, 3-5, 4-6. This finds outcomes with specific ranges.

"Majority conditions" check even versus odd counts. "Majority even" with 3 dice requires at least 2 dice showing even numbers (2, 4, 6). These conditions demonstrate how constraints reduce favorable outcomes and affect probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Law of Large Numbers with Dice`,
      content: `Rolling one die a few times yields unpredictable averages—you might get 2.4 or 4.1, far from the theoretical 3.5. With 1,000 rolls, the average typically settles within 3.3 to 3.7. With 10,000 rolls, it's usually between 3.45 and 3.55.

This convergence doesn't make individual rolls predictable. The next roll still has exactly $1/6$ chance for each face regardless of history. What converges is the aggregate: random fluctuations become proportionally smaller as data accumulates, diluted by sheer volume.

The simulator's convergence graph visualizes this fundamental theorem. Watch the blue line's erratic early behavior smooth into steady approach toward the red expected value. This principle underlies all statistical inference and sampling theory.

For mathematical foundations of convergence and the Law of Large Numbers, see **law of large numbers theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Concepts`,
      content: `**Coin Toss Simulators** - Explore probability with binary outcomes, including Law of Large Numbers demonstrations and sample space analysis.

**Discrete Uniform Distribution Calculators** - Calculate exact probabilities for uniform distributions like fair dice with equal outcome probabilities.

**Binomial Distribution Calculators** - Analyze repeated independent trials, which dice rolls exemplify when tracking specific outcomes.

**Discrete Distribution Visualizers** - Compare probability mass functions across different discrete probability models.

**Expected Value Calculators** - Compute weighted averages for games, bets, and random processes involving dice.

**Combinatorics Tools** - Understand how to count dice outcomes and calculate probabilities through permutations and combinations.

**Sample Space Calculators** - Explore sample spaces for various probability experiments beyond dice rolling.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `The Full Sample Space for Two Dice`,
      content: `With two dice selected, the explorer lays out every possible outcome as a card: $(1,1)$, $(1,2)$, and so on through $(6,6)$. There are $6 \times 6 = 36$ of them, and each card notes $P = 1/36$.

Every outcome is equally likely, and that is the assumption everything else on this page rests on. It holds because the dice are fair and independent — the first die's result tells you nothing about the second.`,
      before: ``,
      after: `Listing the space in full is what makes these probabilities countable rather than argued. Any event is a set of these cards, and its probability is how many cards it contains divided by 36.

Note that the space is of **ordered pairs**: $(2,5)$ and $(5,2)$ are two separate cards. That is not a technicality — it is why a sum of 7 is likelier than a sum of 2, since 7 can be made six ways and 2 only one. Treating the two orderings as one outcome would give 21 unequal outcomes and break every count that follows.`,
      link: '',
    },
    obj12: {
      title: `Highlighting a Sum: Why 7 Is the Peak`,
      content: `Setting the condition to "sum equals 7" highlights six cards — $(1,6)$, $(2,5)$, $(3,4)$, $(4,3)$, $(5,2)$ and $(6,1)$ — giving

$P(\text{sum} = 7) = \frac{6}{36} = \frac{1}{6} \approx 0.167$

They form a diagonal stripe across the grid, which is what any fixed sum looks like here.`,
      before: ``,
      after: `Seven is the most likely sum precisely because its stripe is the longest one that fits. A sum of 2 needs $(1,1)$ alone and a sum of 12 needs $(6,6)$ alone, while 7 has six ways — and the sums in between fall off symmetrically, which is the triangular shape the simulator's histogram converges toward.

Counting stripes gives the whole distribution without algebra: the number of ways to make a sum $s$ is the number of cells on that anti-diagonal, $s - 1$ ways for $s \le 7$ and $13 - s$ beyond it.`,
      link: '',
    },
    obj13: {
      title: `Doubles: a Structural Event`,
      content: `The doubles condition highlights the six cards where both dice match — $(1,1)$ through $(6,6)$ — the main diagonal of the grid.

$P(\text{doubles}) = \frac{6}{36} = \frac{1}{6}$

The same probability as a sum of 7, reached by a completely different route.`,
      before: ``,
      after: `That coincidence is worth pausing on. "Sum is 7" and "doubles" each cover six of the 36 outcomes, yet they share **no** outcome at all: a double always has an even sum, and 7 is odd. Two events, equal probability, entirely disjoint.

It also shows why drawing the sample space earns its keep. Both events are immediate to count off the grid — one is an anti-diagonal, the other the main diagonal — where deriving either from a formula takes more care.`,
      link: '',
    },
    obj14: {
      title: `An Even Sum: Half the Grid`,
      content: `Highlighting even sums lights 18 of the 36 cards — exactly half.

$P(\text{sum is even}) = \frac{18}{36} = \frac{1}{2}$

The highlighted cells form a checkerboard rather than a stripe or a diagonal.`,
      before: ``,
      after: `The result is intuitive once stated the right way: the sum is even exactly when both dice share a parity. Two odds or two evens give an even total, one of each gives an odd one, and since each die is equally likely to be odd or even the two cases split the space evenly.

That parity argument is worth more than the count, because it survives changes the count does not. It gives $1/2$ for any even number of sides and for any number of dice, whereas the figure 18/36 is true only of this particular grid.`,
      link: '',
    },
  }


  /* ---- frozen-state demonstration units (Line 1) ----
     These come from the SAMPLE SPACE explorer, not the roll simulator: the
     simulator's histogram and convergence chart are both empirical and render
     nothing until random rolls accumulate, so neither has a deterministic state
     to freeze. The explorer's outcome cards are ported to SVG in
     diceSampleSpaceDiagrams.js using the component's own highlight predicate. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: diceSampleSpaceDiagrams[key], caption, text })

  const stateUnits = {
    none: unit('none', 'Full sample space, nothing highlighted',
      'All 36 ordered outcomes for two dice, each card carrying its pip faces, its sum and P = 1/36. ' +
      '(2,5) and (5,2) are separate cards - that ordering is what makes some sums likelier than others.'),
    sum7: unit('sum7', 'Sum equals 7 highlighted',
      'Six cards light up along an anti-diagonal: 6/36 = 1/6. Seven is the peak of the distribution ' +
      'because its diagonal is the longest one the grid can hold.'),
    doubles: unit('doubles', 'Doubles highlighted',
      'The main diagonal, also six cards and also 1/6 - but sharing no outcome with the sum-7 event, ' +
      'since doubles always give an even sum.'),
    even: unit('even', 'Even sums highlighted',
      'Eighteen cards in a checkerboard: exactly half. The sum is even precisely when both dice have ' +
      'the same parity.'),
  }


  /* ---- per-state notes for the sample space explorer (Line 1) ----
     DiceSampleSpaceVisualizer took no props; an additive `explanations = null`
     prop was added and the note renders above the outcome grid, keyed by the
     highlight condition. The value reaches it through
     GenericMultiComponentFrame's own `explanations` prop, which maps component
     keys to per-component values. Rendered with dangerouslySetInnerHTML. */
  const note = (body, slug, label) =>
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#using-the-sample-space-explorer" style="color:#1d4ed8;font-weight:600">using the explorer</a>`

  const explanations = {
    none: note('36 ordered outcomes, each equally likely - the assumption everything else rests on.', 'the-full-sample-space', 'Learn more about the sample space'),
    sum7: note('Six ways out of 36, along the longest diagonal the grid can hold.', 'highlighting-a-sum', 'Learn more about sums'),
    doubles: note('Also 1/6, yet disjoint from the sum-7 event - doubles are always even.', 'doubles', 'Learn more about doubles'),
    even: note('Half the grid, because the sum is even exactly when the two dice share a parity.', 'an-even-sum', 'Learn more about even sums'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the probability of rolling a specific sum with two dice?",
      answer: "Each sum has a different probability based on how many ways it can occur. Sum 7 is most likely (6 ways out of 36 possible outcomes = 16.67%). Extreme sums like 2 or 12 have only 1 way each (2.78%). The probability decreases as you move away from the middle value of 7, creating a triangular distribution."
    },
    obj2: {
      question: "How does the Law of Large Numbers apply to dice rolls?",
      answer: "With few rolls, the average sum varies widely from the expected value (3.5 per die). With thousands of rolls, the average converges very close to 3.5 per die. Individual rolls remain unpredictable, but aggregate behavior becomes increasingly predictable as sample size grows. The simulator's convergence graph demonstrates this visually."
    },
    obj3: {
      question: "Why is sum 7 most common when rolling two dice?",
      answer: "Sum 7 has the most combinations: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1 (6 ways total). Extreme sums like 2 (only 1+1) or 12 (only 6+6) have just 1 way each. The number of combinations decreases as you move toward the extremes, making middle values more probable than edge values."
    },
    obj4: {
      question: "What does the z-score tell you in dice simulations?",
      answer: "The z-score measures how many standard deviations your actual average is from the expected value. Values between -2 and 2 are normal (about 95% of outcomes). Scores beyond ±2 indicate unusual but possible results. Scores beyond ±3 are rare (less than 0.3% chance) and suggest either random extremes or potential bias in the dice."
    },
    obj5: {
      question: "How do you calculate sample space size for multiple dice?",
      answer: "Sample space size equals 6^n where n is the number of dice. One die has 6 outcomes. Two dice have 6² = 36 outcomes. Three dice have 6³ = 216 outcomes. Each outcome has equal probability 1/6^n, but sum probabilities vary because different sums have different numbers of combinations."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Dice Roll Probability Simulator and Sample Space Calculator",
      "description": "Interactive dice rolling simulator with sum distribution histograms, convergence graphs, and comprehensive sample space explorer for 1-6 dice.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/dice-roll",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive dice roll simulator with visual dice display",
        "Single roll and batch simulation modes (1, 10, 100, 1K, 10K rolls)",
        "Configurable number of dice from 1 to 6",
        "Real-time sum distribution histogram with theoretical overlay",
        "Convergence graph demonstrating Law of Large Numbers",
        "Statistical analysis including variance, standard deviation, and z-scores",
        "Sample space explorer for 1-4 dice with all possible outcomes",
        "Advanced highlight conditions including sum filters, patterns, and relationships",
        "Probability calculations for complex dice conditions",
        "Auto-roll mode with adjustable speed control"
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
          "name": "Dice Roll",
          "item": "https://www.learnmathclass.com/probability/visual-tools/dice-roll"
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
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Dice Roll Simulator | Probability Calculator & Visualizer",
        description: "Simulate dice rolls with sum distributions, convergence graphs, and sample space exploration. Visualize dice probability interactively.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/dice-roll",
        category: "Simulators",
        name: "Dice Roll Probability Simulator and Calculator"
      },
    }
  }
}

export default function DiceRollVisualizersPage({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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
    plain('obj1', 'the-dice-roll-probability-model'),
    plain('obj2', 'getting-started'),
    plain('obj3', 'sum-distribution-histograms'),
    plain('obj4', 'the-convergence-graph'),
    plain('obj5', 'statistics-and-z-scores'),
    plain('obj6', 'using-the-sample-space-explorer'),
    stateRow('obj11', 'the-full-sample-space', 'none'),
    stateRow('obj12', 'highlighting-a-sum', 'sum7'),
    stateRow('obj13', 'doubles', 'doubles'),
    stateRow('obj14', 'an-even-sum', 'even'),
    plain('obj7', 'advanced-highlight-conditions'),
    plain('obj8', 'dice-relationships'),
    plain('obj9', 'law-of-large-numbers'),
    plain('obj10', 'related-tools-and-concepts'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Dice Roll Visualizers</h1>
      <br/>
      <GenericMultiComponentFrame
        components={[
          { id: 1, name: 'Dice Roll Probability Simulator', key: 'simulator', component: DiceRollSimulator },
          { id: 2, name: 'Dice Sample Space Explorer/Calculator', key: 'sampleSpace', component: DiceSampleSpaceVisualizer },
        ]}
        explanations={{ sampleSpace: explanations }}
        initialActive={1}
        buttonMinWidth="160px"
        primaryColor="#007bff"
      />
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