// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// // import WeightedExpectedValueVisualizer from '@/app/components/probability/expected-value/WeightedExpectedValueVisualization'
// // import DiscreteExpectedValueVisualization from '@/app/components/probability/expected-value/DiscreteExpectedValueVisualization'
// import WeightedExpectedValueVisualizer from '@/app/components/probability/expected-value/WeightedExpectedValueVisualization'
// import DiscreteExpectedValueVisualization from '@/app/components/probability/expected-value/DiscreteExpectedValueVisualization'


// export async function getStaticPaths() {
//   const paths = [
//     { params: { view: 'discrete' } },
//     { params: { view: 'weighted' } },
//   ];

//   return { paths, fallback: false };
// }


// export async function getStaticProps({ params }){

//   const keyWords = [
//     "expected value visualization",
//     "expected value calculator",
//     "weighted average probability",
//     "discrete expected value",
//     "continuous expected value",
//     "mean of random variable",
//     "probability weighted average",
//     "expected value examples",
//     "interactive expected value",
//     "E[X] calculator",
//     "probability distribution mean",
//     "expected value formula",
//     "visual probability tools",
//     "expected value interactive"
//   ];


// const viewConfig = {
//     'discrete': {
//       component: 'DiscreteExpectedValueVisualization',
//       title: "Discrete Expected Value - Interactive Visualization | Learn Math Class",
//       description: "Interactive discrete expected value calculator and visualizer. Calculate E[X] for discrete random variables with probability mass functions and see visual representations.",
//       name: "Discrete Expected Value",
//       url: "/probability/visual-tools/expected-value/discrete",
//       h1: "Discrete Expected Value Visualization",
//       introTitle: "Understanding Discrete Expected Value",
//       introContent: "For a discrete random variable X with outcomes x₁, x₂, ..., xₙ and corresponding probabilities p₁, p₂, ..., pₙ, the expected value is E[X] = Σ xᵢ · pᵢ. This represents the long-run average value if the experiment were repeated many times.",
//       sectionsContent: {
//         obj1: {
//           title: "Discrete Random Variables",
//           content: "Discrete random variables have countable outcomes. Examples include dice rolls, coin flips, number of customers, or any scenario with distinct, separate possible values.",
//           link: '#discrete-variables'
//         },
//         obj2: {
//           title: "Calculation Formula",
//           content: "Expected value for discrete variables is calculated by multiplying each outcome by its probability and summing all these products: E[X] = x₁p₁ + x₂p₂ + ... + xₙpₙ.",
//           link: '#calculation'
//         },
//         obj3: {
//           title: "Interpretation",
//           content: "The expected value is the theoretical mean if you could repeat the random process infinitely. It may not be an actual possible outcome of the random variable itself.",
//           link: '#interpretation'
//         }
//       }
//     },
//     'weighted': {
//       component: 'WeightedExpectedValueVisualizer',
//       title: "Weighted Expected Value - Interactive Visualization | Learn Math Class",
//       description: "Interactive weighted expected value visualizer. See how probability weights combine with outcomes to calculate E[X] with dynamic visual representations.",
//       name: "Weighted Expected Value",
//       url: "/probability/visual-tools/expected-value/weighted",
//       h1: "Weighted Expected Value Visualization",
//       introTitle: "Understanding Weighted Averages in Probability",
//       introContent: "Expected value is a weighted average where each outcome is weighted by its probability of occurrence. This visualization shows how different probability weights affect the final expected value.",
//       sectionsContent: {
//         obj1: {
//           title: "Weighted Averages",
//           content: "Unlike a simple average where all values have equal weight, expected value gives more weight to outcomes with higher probabilities. This reflects their greater influence on the long-run average.",
//           link: '#weighted-averages'
//         },
//         obj2: {
//           title: "Visual Representation",
//           content: "The weighted visualization shows each outcome as a bar whose contribution to the expected value is proportional to both the outcome value and its probability.",
//           link: '#visualization'
//         },
//         obj3: {
//           title: "Interactive Exploration",
//           content: "Adjust probabilities and outcomes to see how changes affect the expected value. Notice how high-probability outcomes have greater influence on E[X].",
//           link: '#exploration'
//         }
//       }
//     }
//   };

// const currentConfig = viewConfig[params.view];

//     const sectionsContent = currentConfig.sectionsContent;


//   const introContent = {
//   id: "intro",
//   title: currentConfig.introTitle,
//   content: currentConfig.introContent
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: currentConfig.title,
//         description: currentConfig.description,
//         keywords: keyWords.join(", "),
//         url: currentConfig.url,
//          name: currentConfig.name
//       },
//       currentView: params.view,
//       componentName: currentConfig.component,
//       h1Title: currentConfig.h1
        
//        }
//     }
//    }

// export default function ExpectedValuePage({seoData, sectionsContent, introContent, currentView, componentName, h1Title}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title: sectionsContent.obj1.title,
//         link: sectionsContent.obj1.link,
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'2',
//         title: sectionsContent.obj2.title,
//         link: sectionsContent.obj2.link,
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'3',
//         title: sectionsContent.obj3.title,
//         link: sectionsContent.obj3.link,
//         content: sectionsContent.obj3.content
//     }
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'-20px'}}>{h1Title}</h1>
//    <br/>
//    <br/>
   
//    {componentName === 'DiscreteExpectedValueVisualization' && <DiscreteExpectedValueVisualization/>}
//    {componentName === 'WeightedExpectedValueVisualizer' && <WeightedExpectedValueVisualizer/>}
   
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    <ScrollUpButton/>
//    </>
//   )
// }


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
import WeightedExpectedValueVisualizer from '@/app/components/probability/expected-value/WeightedExpectedValueVisualization'
import DiscreteExpectedValueVisualization from '@/app/components/probability/expected-value/DiscreteExpectedValueVisualization'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'discrete' } },
    { params: { view: 'weighted' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

  const viewConfig = {
    'weighted': {
      component: 'WeightedExpectedValueVisualizer',
      title: "Weighted Expected Value Visualizer | Learn Math Class",
      description: "Interactive visualization showing expected value as probability-weighted average. See how probability weights pull E[X] with preset distributions and animation.",
      name: "Weighted Expected Value Visualizer",
      url: "/probability/visual-tools/expected-value/weighted",
      h1: "Weighted Expected Value Visualization",
      introTitle: "Visualizing Expected Value as Weighted Average",
      introContent: "This tool shows expected value as a probability-weighted average using visual \"weights\" that pull E[X] along a number line. Larger probabilities create larger weights with stronger pull. Compare E[X] to the simple average and see how unequal probabilities shift the expected value toward high-probability outcomes.",
      keywords: [
        "weighted expected value",
        "probability weighted average",
        "E[X] visualization",
        "expected value calculator",
        "weighted mean probability",
        "expected value vs average",
        "probability weights visualization",
        "interactive expected value",
        "expected value pull",
        "weighted average tool",
        "probability distribution mean",
        "expected value demonstration",
        "biased distribution expected value",
        "unequal probability average",
        "visual expected value"
      ],
      faqQuestions: {
        obj1: {
          question: "What do the circles represent in this visualization?",
          answer: "The blue circles represent probability weights for each outcome. The size of each circle corresponds to P(X = x), the probability of that value occurring. Larger circles indicate higher probability and exert stronger pull on the expected value."
        },
        obj2: {
          question: "What do the arrows show?",
          answer: "The arrows show the 'pull' each outcome exerts on the expected value. Arrow thickness and length increase with probability. High-probability outcomes have thicker arrows, indicating they contribute more to E[X]."
        },
        obj3: {
          question: "Why does E[X] differ from the simple average?",
          answer: "E[X] is a probability-weighted average, while the simple average treats all values equally. When probabilities are unequal, E[X] shifts toward high-probability outcomes. With equal probabilities (like a fair die), E[X] equals the simple average."
        },
        obj4: {
          question: "What do the preset distributions demonstrate?",
          answer: "Each preset shows a different probability pattern. 'Pull Right' concentrates probability on high values, shifting E[X] right. 'Pull Left' does the opposite. 'Pull Center' concentrates probability in the middle. 'Pull Extremes' weights the ends, keeping E[X] near the center but with high variance."
        },
        obj5: {
          question: "How does the animation help understand expected value?",
          answer: "The animation cycles through different distributions, showing how E[X] moves as probability patterns change. Watch the expected value line shift left and right as probability weights redistribute, demonstrating the weighted average concept dynamically."
        }
      },
      // sectionsContent: {
      //   // PLACEHOLDER - paste weighted sectionsContent here
      // }

      // sectionsContent for 'weighted' view
// Paste this into viewConfig['weighted'].sectionsContent

sectionsContent: {
  obj1: {
    title: `Getting Started with the Weighted Visualizer`,
    content: `This tool demonstrates [expected value](!/probability/expected-value) as a probability-weighted average using a physical "pulling weights" metaphor. Values 1 through 6 appear on a number line, with blue circles above each value representing probability weights.

The visualization shows two key quantities: the expected value E(X) marked by a solid blue line, and the simple average marked by a dashed gray line. When probabilities are equal, these coincide. When probabilities differ, E(X) shifts toward high-probability values.

Select different distributions from the dropdown to see how probability patterns affect E(X). The Play Animation button cycles through all distributions automatically, showing the dynamic relationship between probability weights and expected value.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Understanding the Probability Weights`,
    content: `Each blue circle contains P(X = x), the probability of that outcome. Circle size scales with probability—larger circles indicate more likely outcomes. This visual sizing reinforces that higher probabilities carry more "weight" in the expected value calculation.

The arrows connecting circles to the number line represent the "pull" each outcome exerts on E(X). Arrow thickness and length increase with probability. Think of expected value as a balance point: each weight pulls the balance toward its position, and E(X) settles where forces equilibrate.

The formula shows explicitly how each outcome contributes:

$$E[X] = \\sum_{i=1}^{6} x_i \\cdot P(X = x_i)$$

Below each value, the contribution x × P(x) appears, showing the exact amount that outcome adds to the expected value sum.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using the Distribution Selector`,
    content: `Seven preset distributions demonstrate different probability patterns:

• **Equal Weights** sets all probabilities to 1/6, like a fair die. E(X) equals the simple average (3.5).

• **Pull Right** concentrates probability on higher values (5 and 6). E(X) shifts rightward above 3.5.

• **Pull Left** concentrates probability on lower values (1 and 2). E(X) shifts leftward below 3.5.

• **Pull Center** peaks at middle values (3 and 4). E(X) stays near 3.5 but with lower [variance](!/probability/variance) than equal weights.

• **Pull Extremes** weights the endpoints (1 and 6). E(X) remains near 3.5 but variance is high.

• **Strong Right Bias** and **Strong Left Bias** create extreme skew, pushing E(X) far from center.

Select each distribution and observe how probability mass shifts the expected value line.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Animation Mode`,
    content: `Click the Play Animation button to cycle through all distributions automatically. The animation switches distributions every 2 seconds, showing E(X) moving dynamically as probability weights redistribute.

Watch how:

• The blue circles resize as probabilities change
• Arrow thicknesses adjust to show new pull strengths  
• The E(X) line slides left or right
• The simple average line stays fixed (same values, just different probabilities)

Animation helps build intuition for the weighted average concept. Notice that extreme distributions (Strong Left/Right Bias) produce the largest E(X) shifts, while centered distributions keep E(X) near 3.5.

Click Pause to stop on any distribution for closer examination. The currently displayed distribution name appears in the dropdown selector.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `The Calculation Panel`,
    content: `The right side panel shows explicit calculations for both expected value and simple average:

**Expected Value (Weighted)** displays each term x × P(x) and their sum. For example, with Pull Right distribution:
• 1 × 0.05 = 0.05
• 2 × 0.05 = 0.10
• 3 × 0.10 = 0.30
• 4 × 0.15 = 0.60
• 5 × 0.25 = 1.25
• 6 × 0.40 = 2.40
• E(X) = 4.70

**Simple Average (Unweighted)** shows (1 + 2 + 3 + 4 + 5 + 6) / 6 = 3.5, which never changes regardless of probability distribution.

The comparison makes clear that E(X) shifts based on probability weights while simple average ignores them entirely.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `When E(X) Equals Simple Average`,
    content: `Select Equal Weights to see E(X) = 3.5, matching the simple average exactly. This occurs because every outcome has probability 1/6:

$$E[X] = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6}$$

$$= \\frac{1}{6}(1 + 2 + 3 + 4 + 5 + 6) = \\frac{21}{6} = 3.5$$

When probabilities are equal, the weighted average formula simplifies to the simple average. This is why fair dice, fair coins, and equally-likely outcomes produce expected values that equal arithmetic means.

Any deviation from equal probabilities causes E(X) to diverge from the simple average, pulled toward the high-probability outcomes.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Key Insight: Weighted Average Concept`,
    content: `The fundamental lesson from this visualization: expected value is a **weighted** average where weights are probabilities.

In a simple average, each value contributes equally: contribution = value / count.

In expected value, each value contributes proportionally to its probability: contribution = value × probability.

This distinction matters in every real application:

• A biased die produces different E(X) than a fair die with the same faces
• Investment returns weighted by probability differ from historical averages
• Insurance claims weighted by likelihood differ from simple claim averages

The pulling weights metaphor makes this concrete: more probable outcomes literally pull harder on the expected value, shifting it toward them.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `This weighted visualization connects to other probability concepts and tools:

**Theory Pages:**

• [Expected Value](!/probability/expected-value) covers complete theory and formulas

• [Variance](!/probability/variance) measures spread around E[X]

• [Random Variables](!/probability/random-variables) explains discrete and continuous types

• [Probability Distributions](!/probability/distributions) covers common distributions

**Other Visualizations:**

• [Discrete Expected Value](!/probability/visual-tools/expected-value/discrete) lets you adjust individual probabilities

• [Variance Visualizer](!/probability/visual-tools/variance) shows spread around the mean

• [Distribution Visualizers](!/probability/visual-tools/distributions) display PMFs and CDFs

**Calculators:**

• [Expected Value Calculators](!/probability/calculators/expected-value) compute E[X] for various inputs

• [Discrete Distribution Calculators](!/probability/calculators/discrete-distributions) include expected value calculations`,
    before: ``,
    after: ``,
    link: '',
  },
}
    },

    'discrete': {
      component: 'DiscreteExpectedValueVisualization',
      title: "Discrete Expected Value Calculator & Visualizer | Learn Math Class",
      description: "Interactive discrete expected value visualization with adjustable probability sliders. See E[X] formula, bar chart, and contribution breakdown for PMF.",
      name: "Discrete Expected Value Visualization",
      url: "/probability/visual-tools/expected-value/discrete",
      h1: "Discrete Expected Value Visualization",
      introTitle: "Calculating Expected Value for Discrete Distributions",
      introContent: "This tool visualizes expected value for a discrete random variable with six possible outcomes. Adjust the probability sliders to change P(X = x) for each value. The bar chart shows the probability mass function, with each bar's contribution to E[X] displayed inside. The red dashed line marks the expected value.",
      keywords: [
        "discrete expected value",
        "expected value calculator",
        "E[X] discrete distribution",
        "probability mass function expected value",
        "PMF expected value",
        "discrete random variable mean",
        "expected value formula",
        "calculate E[X]",
        "interactive expected value calculator",
        "expected value bar chart",
        "discrete distribution mean",
        "expected value contribution",
        "probability slider expected value",
        "discrete expected value visualization",
        "expected value PMF"
      ],
      faqQuestions: {
        obj1: {
          question: "How do the probability sliders work?",
          answer: "Each slider sets the relative probability for its value (1 through 6). The tool automatically normalizes all probabilities to sum to 1, so you can adjust any slider without worrying about the total. The actual probability P(X = x) is shown below each slider."
        },
        obj2: {
          question: "What do the numbers inside the bars mean?",
          answer: "The number inside each bar shows that value's contribution to E[X], calculated as x · P(X = x). The expected value equals the sum of all these contributions. Higher bars with larger x values contribute more to E[X]."
        },
        obj3: {
          question: "What does the red dashed line show?",
          answer: "The red dashed line marks E[X], the expected value. It appears at the horizontal position corresponding to E[X] on the x-axis. As you adjust probabilities, watch the line move to show how E[X] changes."
        },
        obj4: {
          question: "Why does the expected value formula use multiplication?",
          answer: "The formula E[X] = Σ x · P(X = x) multiplies each outcome by its probability because expected value is a weighted average. Each value contributes proportionally to its likelihood. More probable outcomes have greater influence on the average."
        },
        obj5: {
          question: "Can the expected value be a value that's not possible to observe?",
          answer: "Yes. Expected value is a theoretical average, not necessarily an observable outcome. For a fair die, E[X] = 3.5, which you can never roll. The expected value represents where the distribution balances, not a specific outcome."
        }
      },
      // sectionsContent: {
      //   // PLACEHOLDER - paste discrete sectionsContent here
      // }

      // sectionsContent for 'discrete' view
// Paste this into viewConfig['discrete'].sectionsContent

sectionsContent: {
  obj1: {
    title: `Getting Started with Discrete Expected Value`,
    content: `This tool visualizes [expected value](!/probability/expected-value) for a discrete [random variable](!/probability/random-variables) with six possible outcomes (1 through 6). The bar chart displays the probability mass function (PMF), showing P(X = x) for each value.

The left side shows the visualization: vertical bars representing probabilities, with the expected value E[X] marked by a red dashed line. The right side provides interactive controls and calculation details.

Adjust the probability sliders to change the distribution shape. The tool automatically normalizes probabilities to sum to 1, so you can focus on relative weights without constraint management. Watch E[X] move as probabilities shift.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Reading the Bar Chart`,
    content: `Each bar represents one possible outcome:

• Bar height shows P(X = x), the probability of that value
• The probability value appears above each bar (e.g., 0.250)
• The number inside each bar shows x · P(X = x), that value's contribution to E[X]
• The x-axis shows outcome values (1 through 6)
• The y-axis shows probability from 0 to approximately 0.8

Grid lines help read probability values accurately. The left axis labels show 0.0, 0.2, 0.4, 0.6, 0.8 for reference.

Higher bars indicate more probable outcomes. The sum of all bar heights equals 1.0 (total probability). Values with larger bars contribute more to E[X] simply because they occur more often.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Understanding Contributions`,
    content: `The number inside each bar shows that outcome's contribution to expected value:

$$\\text{Contribution}_i = x_i \\cdot P(X = x_i)$$

Expected value equals the sum of all contributions:

$$E[X] = \\sum_{i=1}^{6} x_i \\cdot P(X = x_i)$$

For example, if P(X = 4) = 0.300, the contribution from value 4 is:
• 4 × 0.300 = 1.200

This contribution appears inside the bar at x = 4. The expected value sums all six contributions.

Notice that both the outcome value and its probability matter. A high value with low probability may contribute less than a moderate value with high probability.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Using the Probability Sliders`,
    content: `Six sliders in the right panel control individual probabilities:

• Each slider sets the relative probability for its value (P(X = 1) through P(X = 6))
• Drag any slider to increase or decrease that outcome's probability
• The tool automatically normalizes so all probabilities sum to 1
• The actual probability appears below each slider
• The contribution to E[X] also displays

Because of automatic normalization, increasing one probability decreases others proportionally. This maintains a valid probability distribution at all times.

Try these experiments:
• Set one slider to maximum—that value dominates E[X]
• Set sliders to create a uniform distribution—E[X] becomes 3.5
• Concentrate probability on low values—E[X] shifts left
• Concentrate probability on high values—E[X] shifts right`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `The Expected Value Indicator`,
    content: `The red dashed vertical line marks E[X] on the bar chart:

• Position shows E[X] on the x-axis scale
• The label displays the exact value (e.g., "E[X] = 3.267")
• Line moves in real-time as you adjust sliders

Notice that E[X] typically falls between the bars, not on them. For a fair die, E[X] = 3.5, which is not a possible outcome. This illustrates that expected value is a theoretical average, not an observable result.

The E[X] line helps visualize the distribution's "center of mass." It balances the probability-weighted outcomes, settling where the distribution would balance if bars were physical weights.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `The Formula Display`,
    content: `The formula panel shows:

$$E[X] = \\sum x \\cdot P(X = x)$$

This is the defining formula for discrete expected value. Each outcome x is multiplied by its probability P(X = x), and all products are summed.

The panel displays:
• The symbolic formula as a reminder
• The current calculated E[X] value in red

For a discrete random variable, expected value always exists and equals this finite sum (assuming finite outcomes). The formula generalizes to infinite discrete distributions and continuous distributions with appropriate summation or integration.

Understanding this formula is essential for probability theory, statistics, and applications in decision-making under uncertainty.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Expected Value Properties`,
    content: `This visualization demonstrates several key properties of expected value:

**Linearity**: E[X] responds proportionally to probability changes. Doubling a value's probability doubles its contribution.

**Bounds**: E[X] always falls between the minimum and maximum possible values. For outcomes 1-6, E[X] is always between 1 and 6.

**Center of mass**: E[X] represents where the distribution balances. Concentrating probability shifts the balance point.

**Not necessarily observable**: E[X] = 3.5 for a fair die, but you cannot roll 3.5. Expected value is theoretical.

**Sensitivity to tails**: Extreme values (1 and 6) can strongly influence E[X] if given high probability, even though middle values are often more probable.

The [variance](!/probability/variance) measures how spread out values are around E[X]—a complementary measure to expected value.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `This discrete visualization connects to other probability concepts and tools:

**Theory Pages:**

• [Expected Value](!/probability/expected-value) covers complete theory and formulas

• [Variance](!/probability/variance) measures spread around E[X]

• [Random Variables](!/probability/random-variables) explains discrete and continuous types

• [Probability Distributions](!/probability/distributions) covers common distributions

**Other Visualizations:**

• [Weighted Expected Value](!/probability/visual-tools/expected-value/weighted) shows the "pulling weights" metaphor

• [Variance Visualizer](!/probability/visual-tools/variance) shows spread around the mean

• [Distribution Visualizers](!/probability/visual-tools/distributions) display PMFs and CDFs

**Calculators:**

• [Expected Value Calculators](!/probability/calculators/expected-value) compute E[X] for various inputs

• [Discrete Distribution Calculators](!/probability/calculators/discrete-distributions) include expected value for specific distributions`,
    before: ``,
    after: ``,
    link: '',
  },
}
    }
  };

  const currentConfig = viewConfig[params.view];

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentConfig.name,
      "description": currentConfig.description,
      "url": `https://www.learnmathclass.com${currentConfig.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": getFeatureList(params.view),
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
      "keywords": currentConfig.keywords.join(", ")
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
          "name": "Expected Value",
          "item": "https://www.learnmathclass.com/probability/visual-tools/expected-value"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": currentConfig.name,
          "item": `https://www.learnmathclass.com${currentConfig.url}`
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(currentConfig.faqQuestions).map(key => ({
        "@type": "Question",
        "name": currentConfig.faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": currentConfig.faqQuestions[key].answer
        }
      }))
    }
  };

  const introContent = {
    id: "intro",
    title: currentConfig.introTitle,
    content: currentConfig.introContent
  };

  return {
    props: {
      sectionsContent: currentConfig.sectionsContent,
      introContent,
      faqQuestions: currentConfig.faqQuestions,
      schemas,
      seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
    }
  };
}

function getFeatureList(view) {
  const features = {
    'weighted': [
      "Seven preset probability distributions",
      "Dropdown distribution selector",
      "Play/pause animation through distributions",
      "Visual probability weights as circles",
      "Pull arrows showing contribution strength",
      "E[X] vs simple average comparison",
      "Side panel with calculation breakdown",
      "Real-time probability display"
    ],
    'discrete': [
      "Six adjustable probability values",
      "Interactive probability sliders",
      "Automatic probability normalization",
      "Bar chart visualization of PMF",
      "Contribution values inside bars",
      "Moving E[X] indicator line",
      "Formula display with calculation",
      "Grid lines for probability reading"
    ]
  };
  return features[view] || [];
}

export default function ExpectedValueViewPage({ 
  seoData, 
  sectionsContent, 
  introContent, 
  faqQuestions,
  schemas,
  currentView, 
  componentName, 
  h1Title 
}) {

  const genericSections = Object.keys(sectionsContent).length > 0 
    ? [
        {
          id: '1',
          title: sectionsContent.obj1?.title || '',
          link: '',
          content: sectionsContent.obj1?.content || ''
        },
        {
          id: '2',
          title: sectionsContent.obj2?.title || '',
          link: '',
          content: sectionsContent.obj2?.content || ''
        },
        {
          id: '3',
          title: sectionsContent.obj3?.title || '',
          link: '',
          content: sectionsContent.obj3?.content || ''
        },
        {
          id: '4',
          title: sectionsContent.obj4?.title || '',
          link: '',
          content: sectionsContent.obj4?.content || ''
        },
        {
          id: '5',
          title: sectionsContent.obj5?.title || '',
          link: '',
          content: sectionsContent.obj5?.content || ''
        },
        {
          id: '6',
          title: sectionsContent.obj6?.title || '',
          link: '',
          content: sectionsContent.obj6?.content || ''
        },
        {
          id: '7',
          title: sectionsContent.obj7?.title || '',
          link: '',
          content: sectionsContent.obj7?.content || ''
        },
        {
          id: '8',
          title: sectionsContent.obj8?.title || '',
          link: '',
          content: sectionsContent.obj8?.content || ''
        }
      ].filter(section => section.title)
    : [];

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
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '-20px' }}>{h1Title}</h1>
      <br />
      <br />

      {componentName === 'WeightedExpectedValueVisualizer' && (
        <WeightedExpectedValueVisualizer />
      )}

      {componentName === 'DiscreteExpectedValueVisualization' && (
        <DiscreteExpectedValueVisualization />
      )}

      <br />
      {genericSections.length > 0 && (
        <>
          <SectionTableOfContents sections={genericSections} />
          <br />
          <br />
          <br />
          <IntroSection
            id={introContent.id}
            title={introContent.title}
            content={introContent.content}
            backgroundColor='#f9fafb'
            textColor="#06357a"
          />
          <br />
          <br />
          <Sections sections={genericSections} />
        </>
      )}
      <br />
      <br />
      <br />
      {/* <ScrollUpButton /> */}
    </>
  );
}