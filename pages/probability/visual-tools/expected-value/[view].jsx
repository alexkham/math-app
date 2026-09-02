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
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import WeightedExpectedValueVisualizer from '@/app/components/probability/expected-value/WeightedExpectedValueVisualization'
import DiscreteExpectedValueVisualization from '@/app/components/probability/expected-value/DiscreteExpectedValueVisualization'
import weightedExpectedValueDiagrams from '@/app/components/probability/expected-value/weightedExpectedValueDiagrams'
import discreteExpectedValueDiagrams from '@/app/components/probability/expected-value/discreteExpectedValueDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


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
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="42" x2="72" y2="42" stroke="#B5D4F4" stroke-width="2.2"/><rect x="16" y="30" width="10" height="12" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><rect x="30" y="24" width="14" height="18" fill="#97C459" stroke="#27500A" stroke-width="1"/><rect x="52" y="18" width="18" height="24" fill="#ED93B1" stroke="#72243E" stroke-width="1"/><path d="M 46 44 L 38 60 L 54 60 Z" fill="#FAC775" stroke="#854F0B" stroke-width="1.3"/><line x1="26" y1="62" x2="66" y2="62" stroke="#B5D4F4" stroke-width="1.2"/><text x="21" y="26" font-family="Georgia,serif" font-size="5.5" fill="#B5D4F4" text-anchor="middle">w&#8321;</text><text x="37" y="20" font-family="Georgia,serif" font-size="5.5" fill="#C0DD97" text-anchor="middle">w&#8322;</text><text x="61" y="14" font-family="Georgia,serif" font-size="5.5" fill="#F4C0D1" text-anchor="middle">w&#8323;</text></svg>`,
      category: "Expected Value & Variance",
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

  obj9: {
    title: `Equal Weights: E(X) Is the Simple Average`,
    content: `The preset the tool opens with gives all six outcomes probability $1/6$ — a fair die. Every weight circle is the same size, every arrow pulls with the same force, and the two markers land on top of each other at $3.5$.

This is the one case where the weighted and unweighted answers agree, and it is worth seeing first so the later presets have something to differ from.`,
    before: ``,
    after: `The circles read $P=0.17$ six times, because the tool prints probabilities to two decimals. Six copies of $0.17$ sum to $1.02$, not $1$ — the underlying values are $1/6 = 0.1\\overline{6}$ and it is only the display that rounds. Worth noticing, since it is the kind of rounding artefact that makes a correct calculation look wrong.

The simple average is $3.5$ for **every** preset on this page, because all seven use the same six values $1$ through $6$ and the simple average ignores probability entirely. Only the blue $E(X)$ marker moves.`,
    link: '',
  },

  obj10: {
    title: `Pull Right: Weight Toward the High Values`,
    content: `Probabilities rise across the outcomes — $0.05, 0.05, 0.1, 0.15, 0.25, 0.4$ — so the circles grow from left to right and the largest sits over $6$.

$E(X) = 4.70$, well to the right of the simple average $3.5$. The blue marker has been pulled toward the heavy end.`,
    before: ``,
    after: `Reading the contributions along the axis makes the arithmetic visible: $6 \\times 0.40 = 2.40$ on its own is more than half of $E(X)$, while $1 \\times 0.05 = 0.05$ contributes almost nothing.

That asymmetry is the whole idea of a weighted average. An outcome influences $E(X)$ through the *product* of its value and its probability, so a large value with a small probability and a small value with a large probability can matter equally.`,
    link: '',
  },

  obj11: {
    title: `Pull Left: the Mirror Image`,
    content: `This preset is Pull Right reversed — $0.4, 0.25, 0.15, 0.1, 0.05, 0.05$ — so the heavy circles sit over the low values.

$E(X) = 2.30$, exactly as far below $3.5$ as Pull Right was above it.`,
    before: ``,
    after: `The symmetry is not a coincidence. Reversing the probabilities on the values $1..6$ reflects the distribution about $3.5$, and reflection about a point maps the mean to its mirror image: $3.5 - 1.2 = 2.3$ where the other gave $3.5 + 1.2 = 4.7$.

Switching between these two presets is the fastest way to see that $E(X)$ is a genuine balance point rather than a summary of which values are *possible* — the possible values never changed.`,
    link: '',
  },

  obj12: {
    title: `Pull Center: Same E(X), Different Distribution`,
    content: `Here the probabilities concentrate in the middle — $0.05, 0.15, 0.3, 0.3, 0.15, 0.05$ — and the two large circles sit over $3$ and $4$.

$E(X) = 3.50$. The blue marker sits exactly on the grey one again, just as it did for [equal weights](!#equal-weights).`,
    before: ``,
    after: `This is the most important comparison on the page, and it takes two frozen states side by side to see it. Equal Weights and Pull Center are visibly different distributions — one flat, one peaked — yet they have **identical** expected values.

The reason is symmetry: both are symmetric about $3.5$, and any distribution symmetric about a point has its mean at that point. So $E(X)$ does not determine a distribution. It is one number summarising it, and distributions that agree on that number can disagree about everything else — which is exactly why variance exists as a second question to ask.`,
    link: '',
  },

  obj13: {
    title: `Pull Extremes: Same E(X) Again, from the Opposite Shape`,
    content: `Probability piles up at both ends — $0.3, 0.1, 0.1, 0.1, 0.1, 0.3$ — giving two large circles over $1$ and $6$ and a flat trough between them.

$E(X) = 3.50$ once more, a third distribution sharing the value of [equal weights](!#equal-weights) and [pull center](!#pull-center).`,
    before: ``,
    after: `Three presets, three quite different shapes, one expected value. Pull Center clusters near the middle, Pull Extremes avoids it entirely, and Equal Weights is flat — and all three balance at $3.5$.

Pull Extremes also makes the point that $E(X)$ need not be a likely outcome. The expected value here is $3.5$, which is not even one of the six possible values, and the outcomes closest to it are the *least* likely in the whole distribution. "Expected" is a name for the balance point, not a prediction.`,
    link: '',
  },

  obj14: {
    title: `Strong Right Bias: the Largest Pull`,
    content: `With $0.02, 0.03, 0.05, 0.1, 0.2, 0.6$ the outcome $6$ alone carries $60\\%$ of the probability, and its circle is drawn at the maximum size with the thickest arrow.

$E(X) = 5.23$, the highest value any preset on this page reaches.`,
    before: ``,
    after: `The single contribution $6 \\times 0.6 = 3.6$ already exceeds the simple average of $3.5$ by itself, before any of the other five outcomes are added.

Notice how far $E(X)$ still is from $6$, though. Even at $60\\%$ the heavy outcome cannot drag the mean all the way to itself, because the remaining $40\\%$ is spread across values well below it. $E(X)$ moves toward the weight, never past it: it is always between the smallest and largest possible values.`,
    link: '',
  },

  obj15: {
    title: `Strong Left Bias: the Mirror of the Largest Pull`,
    content: `The reverse of the previous preset — $0.6, 0.2, 0.1, 0.05, 0.03, 0.02$ — with $60\\%$ of the probability on the outcome $1$.

$E(X) = 1.77$, mirroring $5.23$ about the simple average of $3.5$.`,
    before: ``,
    after: `Across all seven presets $E(X)$ ranges from $1.77$ to $5.23$ while the simple average never moves off $3.5$. Laid out in order, the seven values are $1.77, 2.30, 3.50, 3.50, 3.50, 4.70, 5.23$ — and the three that coincide are the ones discussed under [pull center](!#pull-center).

The bounds are worth stating in general. $E(X)$ can never leave the interval $[1, 6]$ of possible values, and it reaches an endpoint only when that outcome has probability $1$. Everything the seven presets do happens strictly inside that range.`,
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
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="40" width="8" height="14" fill="#85B7EB" fill-opacity="0.7" stroke="#185FA5" stroke-width="0.8"/><rect x="27" y="28" width="8" height="26" fill="#85B7EB" fill-opacity="0.7" stroke="#185FA5" stroke-width="0.8"/><rect x="38" y="20" width="8" height="34" fill="#85B7EB" fill-opacity="0.7" stroke="#185FA5" stroke-width="0.8"/><rect x="49" y="32" width="8" height="22" fill="#85B7EB" fill-opacity="0.7" stroke="#185FA5" stroke-width="0.8"/><rect x="60" y="44" width="8" height="10" fill="#85B7EB" fill-opacity="0.7" stroke="#185FA5" stroke-width="0.8"/><line x1="12" y1="54" x2="72" y2="54" stroke="#B5D4F4" stroke-width="1.4"/><path d="M 42 56 L 36 66 L 48 66 Z" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><text x="42" y="76" font-family="Georgia,serif" font-size="8" fill="#FAC775" text-anchor="middle" font-style="italic">E[X]</text></svg>`,
      category: "Expected Value & Variance",
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

  obj9: {
    title: `The Opening Distribution`,
    content: `The tool mounts with the six probabilities $0.1, 0.15, 0.25, 0.3, 0.15, 0.05$, which sum to $1$ and peak at $x = 4$.

$E[X] = 3.4$, and the number printed inside each bar is that outcome's contribution $x \\cdot P(X = x)$. The six contributions $0.10, 0.30, 0.75, 1.20, 0.75, 0.30$ add to $3.4$ exactly.`,
    before: ``,
    after: `Two things are worth reading off this state before touching any slider.

First, the tallest bar is at $x = 4$ but $E[X]$ is $3.4$, to its left. The mode and the mean are different summaries and they routinely disagree; here the small amounts of probability sitting on $1$ and $2$ pull the balance point down.

Second, the largest contribution is also at $x = 4$ — but that is not automatic. A contribution is $x \\cdot P(X=x)$, so $x = 6$ with $P = 0.05$ contributes $0.30$, the same as $x = 2$ with $P = 0.15$. A rare large outcome and a common small one can matter identically.`,
    link: '',
  },

  obj10: {
    title: `Why the Sliders Renormalise`,
    content: `Pushing the $P(X = 1)$ slider all the way to its maximum of $1.00$ does **not** make the outcome $1$ certain. The tool writes $1$ into that entry, finds the six values now sum to $1.9$, and divides every one of them by $1.9$.

The result is $P(X = 1) = 0.526$, not $1.00$, with the other five shrunk in proportion, and $E[X]$ falls from $3.4$ to $2.263$.`,
    before: ``,
    after: `The renormalisation is what keeps the display a valid probability distribution: the six bars must always sum to $1$, so raising one necessarily lowers the rest.

The practical consequence is that a slider sets a **relative weight**, not a probability. The number under the slider is the value you dragged to; the number the bar reports is what that weight became after rescaling. Dragging the same slider twice does not repeat the same change, because the second drag starts from an already-rescaled distribution.

Notice also that the vertical axis rescales between the two states. The tool fits the tallest bar to the plot, so the gridlines mean different probabilities in each — the axis is relative, and only the printed numbers are absolute.`,
    link: '',
  },
}
    }
  };

  const currentConfig = viewConfig[params.view];


  /* ---- frozen-state demonstration units (Line 1) ----
     Both components draw their canvas as inline JSX, so the diagrams modules
     port that markup and rebuild it from the components' own exported data:
     the seven presets for the weighted view, and the opening distribution plus
     one post-normalisation state for the discrete view. The discrete stills
     correct two rendering defects in that component - see the module header. */
  const unit = (svg, caption, text) => demoUnitFrame({ svg, caption, text })

  const W = weightedExpectedValueDiagrams
  const D = discreteExpectedValueDiagrams

  const unitsByView = {
    weighted: {
      'equal-weights': unit(W['equal-weights'], 'Equal Weights preset',
        'All six outcomes at 1/6. The E(X) marker and the simple-average marker land together at 3.5 - ' +
        'the only preset where they agree. The circles read P=0.17 because the tool rounds to 2dp.'),
      'pull-right': unit(W['pull-right'], 'Pull Right preset',
        'Probabilities rise to 0.4 at the outcome 6, and E(X) = 4.70 against a simple average of 3.5. ' +
        'The single contribution 6 x 0.40 = 2.40 is more than half of E(X).'),
      'pull-left': unit(W['pull-left'], 'Pull Left preset',
        'The mirror image: E(X) = 2.30, exactly as far below 3.5 as Pull Right sat above it. Reversing ' +
        'the probabilities reflects the distribution about 3.5.'),
      'pull-center': unit(W['pull-center'], 'Pull Center preset',
        'Probability concentrated on 3 and 4, and E(X) = 3.50 - identical to Equal Weights despite a ' +
        'visibly different shape. Both are symmetric about 3.5.'),
      'pull-extremes': unit(W['pull-extremes'], 'Pull Extremes preset',
        'Weight piled at both ends, and E(X) = 3.50 again. The expected value is not a possible outcome ' +
        'here, and the values nearest it are the least likely.'),
      'strong-right-bias': unit(W['strong-right-bias'], 'Strong Right Bias preset',
        '60% of the probability on the outcome 6, giving the largest E(X) on the page at 5.23 - still ' +
        'well short of 6, because E(X) moves toward the weight but never past it.'),
      'strong-left-bias': unit(W['strong-left-bias'], 'Strong Left Bias preset',
        'The mirror of the previous preset: E(X) = 1.77. Across all seven presets E(X) runs from 1.77 ' +
        'to 5.23 while the simple average never moves off 3.5.'),
    },
    discrete: {
      opening: unit(D.opening, 'The opening distribution',
        'Probabilities 0.1 / 0.15 / 0.25 / 0.3 / 0.15 / 0.05 and E[X] = 3.4. The number inside each bar ' +
        'is that outcome’s contribution x P(X = x); the six add to 3.4 exactly.'),
      afterDrag: unit(D.afterDrag, 'After dragging P(X = 1) to its maximum',
        'The slider was set to 1.00, but the tool renormalises: P(X = 1) becomes 0.526, not 1, and E[X] ' +
        'falls to 2.263. A slider sets a relative weight, not a probability.'),
    },
  }

  // this page previously built eight sections with numeric ids; replaced with an
  // explicit per-view slug list, state sections interleaved after the reading ones
  const orderByView = {
    weighted: [
      ['obj1', 'getting-started'],
      ['obj2', 'the-probability-weights'],
      ['obj3', 'the-distribution-selector'],
      ['obj9', 'equal-weights', 'equal-weights'],
      ['obj10', 'pull-right', 'pull-right'],
      ['obj11', 'pull-left', 'pull-left'],
      ['obj12', 'pull-center', 'pull-center'],
      ['obj13', 'pull-extremes', 'pull-extremes'],
      ['obj14', 'strong-right-bias', 'strong-right-bias'],
      ['obj15', 'strong-left-bias', 'strong-left-bias'],
      ['obj4', 'animation-mode'],
      ['obj5', 'the-calculation-panel'],
      ['obj6', 'when-ex-equals-simple-average'],
      ['obj7', 'weighted-average-concept'],
      ['obj8', 'related-tools-and-concepts'],
    ],
    discrete: [
      ['obj1', 'getting-started'],
      ['obj2', 'reading-the-bar-chart'],
      ['obj3', 'understanding-contributions'],
      ['obj9', 'the-opening-distribution', 'opening'],
      ['obj10', 'why-the-sliders-renormalise', 'afterDrag'],
      ['obj4', 'using-the-probability-sliders'],
      ['obj5', 'the-expected-value-indicator'],
      ['obj6', 'the-formula-display'],
      ['obj7', 'expected-value-properties'],
      ['obj8', 'related-tools-and-concepts'],
    ],
  }

  const stateUnits = unitsByView[params.view] || {}
  const sectionOrder = orderByView[params.view] || []

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
      stateUnits,
      sectionOrder,
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
  stateUnits,
  sectionOrder,
  introContent, 
  faqQuestions,
  schemas,
  currentView, 
  componentName, 
  h1Title 
}) {

  const genericSections = (sectionOrder || []).map(([obj, id, unitKey]) => {
    const src = sectionsContent[obj]
    if (!src || !src.title) return null
    return {
      id,
      title: src.title,
      link: src.link || '',
      content: unitKey
        ? [
            src.content,
            <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
            src.after,
          ]
        : [ src.content ],
    }
  }).filter(Boolean);

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>{h1Title}</h1>
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