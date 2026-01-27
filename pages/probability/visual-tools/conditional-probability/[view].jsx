
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
// import WaffleChart from '@/app/components/probability/conditional-probability-demo/WaffleChart'
// import ConditionalProbabilityTree2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTree2'
// import ConditionalProbabilityVenn from '@/app/components/probability/conditional-probability-demo/ConditionalProbabiltyVenn'
// import ConditionalProbabilityTable2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2'

// export async function getStaticPaths() {
//   const paths = [
//     { params: { view: 'tree-diagram' } },
//     { params: { view: 'venn-diagram' } },
//     { params: { view: 'waffle-chart' } },
//     { params: { view: 'contingency-table' } },
//   ];

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const viewConfig = {
//     'tree-diagram': {
//       component: 'TreeDiagram',
//       title: "Tree Diagram - Conditional Probability Visualization | Learn Math Class",
//       description: "Interactive tree diagram for visualizing conditional probability and sequential events. Explore branching paths with dynamic probabilities and step-by-step explanations.",
//       name: "Tree Diagram - Conditional Probability",
//       url: "/probability/visual-tools/conditional-probability/tree-diagram",
//       h1: "Tree Diagram Visualization",
//       introTitle: "Understanding Conditional Probability with Tree Diagrams",
//       introContent: "Tree diagrams show sequential events as branching paths. Each branch represents a possible outcome, with conditional probabilities displayed along the paths. This visualization is perfect for understanding multi-stage probability problems.",
//       keywords: [
//         "tree diagram probability",
//         "sequential probability visualization",
//         "branching probability diagram",
//         "P(A|B) tree diagram",
//         "probability tree interactive",
//         "conditional probability branches",
//         "multi-stage probability",
//         "probability path diagram",
//         "sequential events probability",
//         "tree diagram calculator"
//       ],
//       sectionsContent: {
//         obj1: {
//           title: "How Tree Diagrams Work",
//           content: "Tree diagrams display events in chronological order from left to right. Each branch splits into possible outcomes, with probabilities labeled on each path. The final probability of any outcome is found by multiplying along its path."
//         },
//         obj2: {
//           title: "Conditional Probabilities in Trees",
//           content: "Each level of branches represents conditional probabilities - the probability of an event given the previous outcome. This makes tree diagrams ideal for understanding P(A|B) notation and sequential decision-making."
//         },
//         obj3: {
//           title: "Practical Applications",
//           content: "Tree diagrams excel at modeling sequential decisions, medical testing scenarios, quality control processes, and any situation where outcomes depend on previous events."
//         }
//       }
//     },
//     'venn-diagram': {
//       component: 'VennDiagram',
//       title: "Venn Diagram - Conditional Probability Visualization | Learn Math Class",
//       description: "Interactive Venn diagram for understanding conditional probability through set relationships. Visualize P(A|B) with overlapping regions and dynamic examples.",
//       name: "Venn Diagram - Conditional Probability",
//       url: "/probability/visual-tools/conditional-probability/venn-diagram",
//       h1: "Venn Diagram Visualization",
//       introTitle: "Understanding Conditional Probability with Venn Diagrams",
//       introContent: "Venn diagrams show conditional probability through overlapping sets. When calculating P(A|B), we focus only on the region where B occurs and find what portion also contains A. This spatial representation makes conditional probability intuitive.",
//       keywords: [
//         "Venn diagram probability",
//         "set theory probability",
//         "overlapping probability circles",
//         "P(A|B) Venn diagram",
//         "intersection probability visual",
//         "conditional probability sets",
//         "probability overlap diagram",
//         "set intersection probability",
//         "Venn diagram calculator",
//         "visual set probability"
//       ],
//       sectionsContent: {
//         obj1: {
//           title: "Visualizing P(A|B)",
//           content: "In a Venn diagram, P(A|B) is visualized by focusing on circle B and finding what fraction of it overlaps with A. The condition 'given B' means we're only looking within B's region."
//         },
//         obj2: {
//           title: "Set Operations and Conditioning",
//           content: "Venn diagrams naturally show how conditioning restricts the sample space. The overlap (intersection) divided by the condition set gives the conditional probability: P(A|B) = P(A ∩ B) / P(B)."
//         },
//         obj3: {
//           title: "Common Applications",
//           content: "Venn diagrams are excellent for understanding medical test accuracy, survey data analysis, and any scenario involving overlapping categories or characteristics."
//         }
//       }
//     },
//     'waffle-chart': {
//       component: 'WaffleChart',
//       title: "Waffle Chart - Conditional Probability Visualization | Learn Math Class",
//       description: "Interactive waffle chart for visualizing conditional probability with grid-based proportions. See P(A|B) through color-coded squares and dynamic filtering.",
//       name: "Waffle Chart - Conditional Probability",
//       url: "/probability/visual-tools/conditional-probability/waffle-chart",
//       h1: "Waffle Chart Visualization",
//       introTitle: "Understanding Conditional Probability with Waffle Charts",
//       introContent: "Waffle charts use a grid of squares to represent probabilities as proportions. Each square represents an equal portion of the sample space. When applying conditions, relevant squares are highlighted, making it easy to see how probabilities change.",
//       keywords: [
//         "waffle chart probability",
//         "grid probability visualization",
//         "proportional probability squares",
//         "100 square probability",
//         "visual probability proportion",
//         "waffle diagram conditional",
//         "grid-based probability",
//         "square chart probability",
//         "waffle chart calculator",
//         "proportional visualization"
//       ],
//       sectionsContent: {
//         obj1: {
//           title: "Grid-Based Probability",
//           content: "Waffle charts divide the sample space into equal squares, typically 100 or more. Each square has the same probability, making it easy to count and calculate proportions visually."
//         },
//         obj2: {
//           title: "Visualizing Conditions",
//           content: "When a condition is applied, the chart highlights only relevant squares. P(A|B) becomes a simple counting exercise: count squares that are both A and B, divide by squares that are B."
//         },
//         obj3: {
//           title: "Intuitive Understanding",
//           content: "Waffle charts are particularly effective for helping students understand proportions and percentages. They're widely used in data visualization for survey results, demographics, and risk assessment."
//         }
//       }
//     },
//     'contingency-table': {
//       component: 'ContingencyTable',
//       title: "Contingency Table - Conditional Probability Visualization | Learn Math Class",
//       description: "Interactive 2×2 contingency table showing joint, marginal, and conditional probabilities with clickable highlighting.",
//       name: "Contingency Table - Conditional Probability",
//       url: "/probability/visual-tools/conditional-probability/contingency-table",
//       h1: "Contingency Table Visualization",
//       introTitle: "Understanding Conditional Probability with Contingency Tables",
//       introContent: "Contingency tables organize probabilities in a 2×2 grid showing how two events relate. Joint probabilities appear in cells, marginal probabilities in row and column totals. Click any conditional probability to see how it's calculated as a ratio of the intersection to the conditioning event.",
//       keywords: [
//         "contingency table probability",
//         "2x2 probability table",
//         "joint probability table",
//         "marginal probability calculator",
//         "P(A|B) contingency table",
//         "statistical contingency table",
//         "cross-tabulation probability",
//         "two-way table probability",
//         "interactive contingency table",
//         "probability matrix visualization"
//       ],
//       sectionsContent: {
//         obj1: {
//           title: "Reading Contingency Tables",
//           content: "A 2×2 contingency table displays all probability relationships in one view. The four inner cells show joint probabilities P(A∩B), while row and column totals show marginal probabilities P(A) and P(B)."
//         },
//         obj2: {
//           title: "Conditional Probability Formula",
//           content: "The table makes P(A|B) = P(A∩B) / P(B) visual and concrete. Click any conditional probability to see both the numerator (intersection) and denominator (marginal total) highlighted in the main table."
//         },
//         obj3: {
//           title: "Applications in Statistics",
//           content: "Contingency tables are fundamental in statistics for analyzing categorical data, testing independence, and understanding relationships between variables in surveys, medical studies, and experimental research."
//         }
//       }
//     }
//   };

//   const currentConfig = viewConfig[params.view];
//   const sectionsContent = currentConfig.sectionsContent;

//   const introContent = {
//     id: "intro",
//     title: currentConfig.introTitle,
//     content: currentConfig.introContent
//   };

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       seoData: {
//         title: currentConfig.title,
//         description: currentConfig.description,
//         keywords: currentConfig.keywords.join(", "),
//         url: currentConfig.url,
//         name: currentConfig.name
//       },
//       currentView: params.view,
//       componentName: currentConfig.component,
//       h1Title: currentConfig.h1
//     }
//   };
// }

// export default function ConditionalProbabilityViewPage({ seoData, sectionsContent, introContent, currentView, componentName, h1Title }) {
//   const genericSections = [
//     {
//       id: '1',
//       title: sectionsContent.obj1.title,
//       link: '#how-it-works',
//       content: sectionsContent.obj1.content
//     },
//     {
//       id: '2',
//       title: sectionsContent.obj2.title,
//       link: '#conditional-probability',
//       content: sectionsContent.obj2.content
//     },
//     {
//       id: '3',
//       title: sectionsContent.obj3.title,
//       link: '#applications',
//       content: sectionsContent.obj3.content
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Learn Math Class" />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />

//         <meta name="robots" content="index, follow" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": seoData.name,
//               "description": seoData.description,
//               "keywords": seoData.keywords,
//               "url": `https://www.learnmathclass.com${seoData.url}`,
//               "dateModified": new Date().toISOString(),
//               "inLanguage": "en-US",
//               "mainEntity": {
//                 "@type": "Article",
//                 "name": seoData.name,
//                 "dateModified": new Date().toISOString(),
//                 "author": {
//                   "@type": "Organization",
//                   "name": "Learn Math Class"
//                 }
//               }
//             })
//           }}
//         />
//       </Head>
//       {/* <GenericNavbar /> */}
//       <br />
//       <br />
//       <br />
//       <br />
//       <OperaSidebar
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <Breadcrumb />
//       <br />
//       <br />
//       <h1 className='title' style={{ marginTop: '-50px', marginBottom: '-40px' }}>{h1Title}</h1>

//       {componentName === 'WaffleChart' && (
//         <div style={{ transform: 'scale(0.9)' }}>
//           <WaffleChart />
//         </div>
//       )}

//       {componentName === 'TreeDiagram' && (
//         <div style={{ transform: 'scale(0.9)' }}>
//           <ConditionalProbabilityTree2 />
//         </div>
//       )}

//       {componentName === 'VennDiagram' && (
//         <div style={{ transform: 'scale(0.9)' }}>
//           <ConditionalProbabilityVenn />
//         </div>
//       )}

//       {componentName === 'ContingencyTable' && (
//         <div style={{ transform: 'scale(0.9)' }}>
//           <ConditionalProbabilityTable2 />
//         </div>
//       )}

//       <br />
//       <SectionTableOfContents sections={genericSections} />
//       <br />
//       <br />
//       <br />
//       <IntroSection
//         id={introContent.id}
//         title={introContent.title}
//         content={introContent.content}
//         backgroundColor='#f9fafb'
//         textColor="#06357a"
//       />
//       <br />
//       <br />
//       <Sections sections={genericSections} />
//       <br />
//       <br />
//       <br />
//       {/* <ScrollUpButton /> */}
//     </>
//   );
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
import WaffleChart from '@/app/components/probability/conditional-probability-demo/WaffleChart'
import ConditionalProbabilityTree2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTree2'
import ConditionalProbabilityVenn from '@/app/components/probability/conditional-probability-demo/ConditionalProbabiltyVenn'
import ConditionalProbabilityTable2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2'

export async function getStaticPaths() {
  const paths = [
    { params: { view: 'tree-diagram' } },
    { params: { view: 'venn-diagram' } },
    { params: { view: 'waffle-chart' } },
    { params: { view: 'contingency-table' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

  const viewConfig = {
    'tree-diagram': {
      component: 'TreeDiagram',
      title: "Tree Diagram - Conditional Probability Visualization | Learn Math Class",
      description: "Interactive probability tree diagram with adjustable P(A), P(B|A), and P(B|Aᶜ). Visualize sequential events, joint probabilities, and Bayes' theorem.",
      name: "Tree Diagram - Conditional Probability Visualization",
      url: "/probability/visual-tools/conditional-probability/tree-diagram",
      h1: "Tree Diagram Visualization",
      introTitle: "Visualizing Conditional Probability with Tree Diagrams",
      introContent: "Tree diagrams display probability relationships as branching paths. Each branch represents a possible outcome with its probability labeled along the path. This tool lets you adjust P(A), P(B|A), and P(B|Aᶜ) to see how joint probabilities, marginal probabilities, and Bayes' theorem calculations change in real time.",
      keywords: [
        "probability tree diagram",
        "tree diagram calculator",
        "conditional probability tree",
        "sequential probability visualization",
        "P(A|B) tree diagram",
        "branching probability diagram",
        "probability path calculator",
        "multi-stage probability",
        "tree diagram Bayes theorem",
        "interactive probability tree",
        "joint probability tree",
        "probability branches",
        "decision tree probability",
        "tree diagram examples",
        "conditional probability visualization"
      ],
      faqQuestions: {
        obj1: {
          question: "What is a probability tree diagram?",
          answer: "A probability tree diagram displays sequential events as branching paths from left to right. Each branch shows a possible outcome with its probability. The probability of reaching any endpoint equals the product of all probabilities along that path."
        },
        obj2: {
          question: "How do you calculate joint probability from a tree diagram?",
          answer: "Multiply the probabilities along the path from start to the endpoint. For example, P(A ∩ B) = P(A) × P(B|A). The tree makes this multiplication rule visual by showing each factor as a separate branch."
        },
        obj3: {
          question: "What do the three sliders control?",
          answer: "P(A) sets the probability of the first branch (event A occurring). P(B|A) sets the probability of B given A occurred. P(B|Aᶜ) sets the probability of B given A did not occur. All other probabilities calculate automatically from these three inputs."
        },
        obj4: {
          question: "How does the tree diagram show Bayes' theorem?",
          answer: "The tree displays P(A|B) in the Bayes theorem section, calculated as P(B|A) × P(A) / P(B). Click on joint probabilities to highlight the paths involved. The same joint probability P(A ∩ B) appears in both P(A|B) and P(B|A) calculations with different denominators."
        },
        obj5: {
          question: "When should I use a tree diagram for probability?",
          answer: "Use tree diagrams for sequential events where one outcome leads to another, such as medical testing (disease then test result), quality control (defect then detection), multi-stage experiments, and any scenario involving conditional probabilities in sequence."
        }
      },
      // sectionsContent: {
      //   // PLACEHOLDER - paste tree-diagram sectionsContent here
      // }

      // sectionsContent for 'tree-diagram' view
// Paste this into viewConfig['tree-diagram'].sectionsContent

sectionsContent: {
  obj1: {
    title: `Getting Started with the Tree Diagram`,
    content: `This interactive tree diagram visualizes [conditional probability](!/probability/conditional-probability) as branching paths from left to right. The diagram starts at a single point and splits into branches representing possible outcomes, with probabilities labeled along each path.

The left side displays the tree structure with nodes and connecting branches. The right side shows calculated probabilities organized into panels: joint probabilities, marginal probabilities, and conditional probabilities. All values update instantly as you adjust the input parameters.

Three sliders below the tree control the fundamental probabilities that determine the entire structure. Every other probability in the diagram derives mathematically from these three inputs, demonstrating how a few conditional probability values generate a complete probability model.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using the Probability Sliders`,
    content: `Three sliders control the tree diagram's probability structure:

• P(A) sets the probability of event A occurring at the first branch. Moving this slider changes how probability mass splits between the upper branch (A) and lower branch (Aᶜ). Values range from 0.01 to 0.99.

• P(B|A) sets the [conditional probability](!/probability/conditional-probability) of B given that A has occurred. This determines how the A branch splits into outcomes B and Bᶜ on the second level.

• P(B|Aᶜ) sets the conditional probability of B given that A has not occurred. This determines how the Aᶜ branch splits into outcomes B and Bᶜ.

As you adjust any slider, watch how the branch labels update, the node probabilities change, and all calculated values in the right panel recalculate. The complement probabilities P(Aᶜ), P(Bᶜ|A), and P(Bᶜ|Aᶜ) calculate automatically as 1 minus their counterparts.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Reading the Tree Structure`,
    content: `The tree displays events in chronological order. The first level splits into A (event occurs) and Aᶜ (event does not occur). The second level shows what happens next: each first-level outcome leads to either B or Bᶜ.

Four endpoints represent the four possible joint outcomes:

• A ∩ B (upper path): Event A occurred, then event B occurred
• A ∩ Bᶜ (second path): Event A occurred, then event B did not occur
• Aᶜ ∩ B (third path): Event A did not occur, then event B occurred
• Aᶜ ∩ Bᶜ (lower path): Neither event occurred

Each endpoint displays its [joint probability](!/probability/joint-probability), calculated by multiplying along the path. The probability labels on branches show exactly which values multiply together to produce each joint probability.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Clicking to Highlight Paths`,
    content: `Click any probability in the right panel to highlight its corresponding path through the tree. The highlighting system uses distinct colors for each probability type, making it easy to trace calculations visually.

When you click a joint probability like P(A ∩ B), the entire path from start to that endpoint highlights in the matching color. The branch labels and nodes along that path also change color, showing exactly which probabilities multiply together.

Clicking marginal probabilities highlights all paths that contribute. For example, clicking P(B) highlights both paths ending in B (through A and through Aᶜ), demonstrating that P(B) = P(A ∩ B) + P(Aᶜ ∩ B).

Click the same probability again or use the Clear Selection button to remove highlighting and return to the default view.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding Joint Probabilities`,
    content: `The Joint Probabilities panel shows P(A ∩ B) for all four outcome combinations. Each joint probability equals the product of probabilities along its path—this is the multiplication rule for sequential events.

The formulas display explicitly:

$$P(A \\cap B) = P(A) \\times P(B|A)$$

$$P(A \\cap B^c) = P(A) \\times P(B^c|A)$$

$$P(A^c \\cap B) = P(A^c) \\times P(B|A^c)$$

$$P(A^c \\cap B^c) = P(A^c) \\times P(B^c|A^c)$$

The four joint probabilities always sum to exactly 1, representing the complete [sample space](!/probability/sample-space). Click any joint probability to see its path highlighted in the tree, visually confirming the multiplication.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Marginal Probabilities from the Tree`,
    content: `The Marginal Probabilities panel shows P(A), P(Aᶜ), P(B), and P(Bᶜ). While P(A) and P(Aᶜ) come directly from the first branch, P(B) and P(Bᶜ) require summing across paths.

P(B) combines two paths reaching outcome B:

$$P(B) = P(A \\cap B) + P(A^c \\cap B)$$

This is the [law of total probability](!/probability/total-probability) in action. The tree makes this sum visible—click P(B) to see both contributing paths highlight simultaneously.

Similarly, P(Bᶜ) sums the two paths reaching outcome Bᶜ. The marginal probabilities P(A) + P(Aᶜ) = 1 and P(B) + P(Bᶜ) = 1, as complements must.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Bayes' Theorem in the Tree`,
    content: `The Bayes Theorem panel shows P(A|B) and P(Aᶜ|B)—the reverse conditional probabilities. While the sliders set P(B|A) and P(B|Aᶜ), [Bayes' theorem](!/probability/bayes-theorem) calculates the opposite direction.

The formula:

$$P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)}$$

The tree demonstrates why this works. P(A|B) asks: given we reached outcome B, what fraction came through the A branch? The numerator P(A ∩ B) is one path to B; the denominator P(B) is total probability of B from both paths.

Try this experiment: set P(B|A) = 0.9 and P(B|Aᶜ) = 0.1 with P(A) = 0.5. Then observe P(A|B). The high P(B|A) means most B outcomes came through A, so P(A|B) is high. Adjust the sliders to see how the reverse conditional changes.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `Tree diagrams connect to several probability concepts and tools on this site:

**Theory Pages:**

• [Conditional Probability](!/probability/conditional-probability) explains P(A|B) theory in depth

• [Bayes' Theorem](!/probability/bayes-theorem) covers the formula for reversing conditionals

• [Total Probability](!/probability/total-probability) describes summing across partitions

• [Joint Probability](!/probability/joint-probability) details probability of combined events

**Other Visualizations:**

• [Venn Diagrams](!/probability/visual-tools/conditional-probability/venn-diagram) show conditional probability through overlapping regions

• [Contingency Tables](!/probability/visual-tools/conditional-probability/contingency-table) display all probabilities in tabular format

**Calculators:**

• [Bayes' Theorem Calculator](!/probability/calculators/bayes-calculator) computes reverse conditionals

• [Conditional Probability Calculator](!/probability/calculators/conditional-probability) calculates P(A|B) from inputs`,
    before: ``,
    after: ``,
    link: '',
  },
}
    },

    'venn-diagram': {
      component: 'VennDiagram',
      title: "Venn Diagram - Conditional Probability Visualization | Learn Math Class",
      description: "Interactive Venn diagram showing conditional probability through partitioned sample space. Click compartments to see P(A|Bᵢ) calculations with area-based explanations.",
      name: "Venn Diagram - Conditional Probability Visualization",
      url: "/probability/visual-tools/conditional-probability/venn-diagram",
      h1: "Venn Diagram Visualization",
      introTitle: "Visualizing Conditional Probability with Venn Diagrams",
      introContent: "This Venn diagram displays event A as an ellipse overlapping a partitioned sample space. The sample space divides into compartments B₁, B₂, B₃ (and optionally B₄). Click any compartment to see how P(A|Bᵢ) is calculated from the intersection area divided by the compartment area.",
      keywords: [
        "Venn diagram probability",
        "conditional probability Venn diagram",
        "P(A|B) Venn diagram",
        "set theory probability",
        "probability intersection",
        "overlapping sets probability",
        "sample space partition",
        "Venn diagram calculator",
        "visual conditional probability",
        "area probability calculation",
        "probability regions",
        "set intersection probability",
        "Venn diagram examples",
        "interactive Venn diagram",
        "law of total probability Venn"
      ],
      faqQuestions: {
        obj1: {
          question: "How does the Venn diagram show conditional probability?",
          answer: "The diagram shows event A as an ellipse overlapping compartments B₁, B₂, B₃. Conditional probability P(A|Bᵢ) equals the area of the intersection A ∩ Bᵢ divided by the area of compartment Bᵢ. Clicking a compartment highlights this intersection and shows the calculation."
        },
        obj2: {
          question: "What do the compartments represent?",
          answer: "The compartments B₁, B₂, B₃ (and B₄ if selected) partition the entire sample space Ω. They represent mutually exclusive events that together cover all possibilities. Each compartment has equal probability P(Bᵢ) = 1/n where n is the number of compartments."
        },
        obj3: {
          question: "Why are the conditional probabilities different for each compartment?",
          answer: "Event A overlaps each compartment to different degrees. Compartments with more overlap have higher P(A|Bᵢ). This demonstrates that knowing which compartment you're in (the condition) changes the probability of A occurring."
        },
        obj4: {
          question: "How does this diagram demonstrate the law of total probability?",
          answer: "P(A) equals the sum of P(Bᵢ) × P(A|Bᵢ) across all compartments. The diagram shows this by displaying how A's total area equals the sum of its intersection areas with each compartment. The verification calculation appears in the Total Probability panel."
        },
        obj5: {
          question: "Can I change the number of compartments?",
          answer: "Yes, use the slider in the Settings panel to switch between 2, 3, or 4 compartments. The ellipse A maintains its shape while the sample space repartitions, showing how conditional probabilities change with different partitioning schemes."
        }
      },
      // sectionsContent: {
      //   // PLACEHOLDER - paste venn-diagram sectionsContent here
      // }

      // sectionsContent for 'venn-diagram' view
// Paste this into viewConfig['venn-diagram'].sectionsContent

sectionsContent: {
  obj1: {
    title: `Getting Started with the Venn Diagram`,
    content: `This interactive Venn diagram visualizes [conditional probability](!/probability/conditional-probability) through geometric regions. The rectangular sample space Ω is divided into vertical compartments (B₁, B₂, B₃, etc.), while event A appears as an indigo ellipse that overlaps these compartments to different degrees.

The left side displays the diagram with labeled areas. The middle column shows the total probability P(A) with calculation breakdowns. The right column displays conditional probabilities P(A|Bᵢ) for each compartment with step-by-step formulas.

Click any compartment to highlight the intersection A ∩ Bᵢ and see exactly how conditional probability is calculated from areas. The visualization demonstrates that knowing which compartment you're in changes the probability of event A.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Understanding the Sample Space Partition`,
    content: `The sample space Ω (the entire rectangle) is partitioned into equal-width vertical compartments. Each compartment represents a mutually exclusive event—you can only be in one compartment at a time, and together they cover all possibilities.

With 3 compartments:

• B₁ (blue region) covers the left third
• B₂ (yellow region) covers the middle third  
• B₃ (red region) covers the right third

Since compartments have equal area, each has probability P(Bᵢ) = 1/n where n is the number of compartments. With 3 compartments, P(B₁) = P(B₂) = P(B₃) = 0.33.

Use the Settings slider to switch between 2, 3, or 4 compartments. Watch how the ellipse A maintains its shape while the partition changes, creating different intersection patterns and conditional probabilities.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Reading Event A and Intersections`,
    content: `Event A appears as an indigo ellipse positioned to overlap multiple compartments. The ellipse has a fixed shape but intersects each compartment differently based on their positions.

Labels inside the diagram show:

• Area(A) = 68 — the total area of the ellipse (normalized for clean calculations)
• Area(Ω) = 100 — the total sample space area
• Area(A ∩ Bᵢ) — the intersection area for each compartment

The intersection areas vary because the ellipse overlaps each compartment differently. A compartment near the ellipse center has larger intersection than one at the edge. These area differences create the variation in conditional probabilities.

Probability equals area ratio: P(A) = Area(A) / Area(Ω) = 68/100 = 0.68. Similarly, [joint probability](!/probability/joint-probability) P(A ∩ Bᵢ) = Area(A ∩ Bᵢ) / Area(Ω).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Clicking Compartments to Explore`,
    content: `Click any compartment to see conditional probability in action. When you click B₂ (for example):

• The compartment highlights with its color
• The intersection A ∩ B₂ shows as a darker region within the ellipse
• The rest of event A fades to show only the relevant portion
• The conditional probability panel for B₂ expands with full calculation

This visualization demonstrates what "given B₂" means geometrically. When we condition on B₂, we restrict our view to only that compartment. The conditional probability P(A|B₂) asks: what fraction of B₂'s area is covered by A?

Click the same compartment again or click elsewhere to deselect and return to the full view showing all intersections simultaneously.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Understanding Conditional Probability Calculations`,
    content: `Each compartment's panel shows the three-step calculation for conditional probability:

**Step 1: Areas**
• Area(A ∩ Bᵢ) — intersection area from the diagram
• Area(Bᵢ) — compartment area (equal for all compartments)
• Area(Ω) — total sample space area (100)

**Step 2: Convert to Probabilities**
• P(A ∩ Bᵢ) = Area(A ∩ Bᵢ) / Area(Ω)
• P(Bᵢ) = Area(Bᵢ) / Area(Ω)

**Step 3: Calculate Conditional**

$$P(A|B_i) = \\frac{P(A \\cap B_i)}{P(B_i)}$$

Notice how the conditional probabilities differ across compartments even though P(Bᵢ) is the same for all. The variation comes entirely from different intersection areas—compartments with more overlap have higher P(A|Bᵢ).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Total Probability from Intersections`,
    content: `The Total Probability panel shows how P(A) can be calculated by summing contributions from each compartment. This demonstrates the [law of total probability](!/probability/total-probability):

$$P(A) = \\sum_{i} P(B_i) \\times P(A|B_i)$$

The panel displays this calculation two ways:

**From areas directly:**
Area(A) = Area(A ∩ B₁) + Area(A ∩ B₂) + Area(A ∩ B₃)

**From probabilities:**
P(A) = P(B₁)·P(A|B₁) + P(B₂)·P(A|B₂) + P(B₃)·P(A|B₃)

Both methods yield P(A) = 0.68. The verification section confirms the law of total probability by showing each term and their sum. This demonstrates that total probability is a weighted average of conditional probabilities, weighted by the probability of each condition.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Why Conditional Probabilities Differ`,
    content: `The key insight from this visualization is that P(A|B₁) ≠ P(A|B₂) ≠ P(A|B₃), even though the compartments have equal probability. The difference arises because event A overlaps each compartment to different degrees.

Consider a medical example: A represents having a disease, and B₁, B₂, B₃ represent age groups. If the disease affects middle-aged people most, the "ellipse" of disease overlaps the middle compartment more than the edges. Knowing someone's age group (which compartment) changes the probability estimate.

This is the essence of [conditional probability](!/probability/conditional-probability)—additional information (which compartment) updates our probability assessment. [Independence](!/probability/independence) would mean P(A|Bᵢ) = P(A) for all compartments, which happens only if A overlaps all compartments equally.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `Venn diagrams connect to several probability concepts and tools on this site:

**Theory Pages:**

• [Conditional Probability](!/probability/conditional-probability) explains P(A|B) theory in depth

• [Total Probability](!/probability/total-probability) covers summing across partitions

• [Joint Probability](!/probability/joint-probability) details probability of combined events

• [Independence](!/probability/independence) describes when P(A|B) = P(A)

**Other Visualizations:**

• [Tree Diagrams](!/probability/visual-tools/conditional-probability/tree-diagram) show conditional probability as branching paths

• [Waffle Charts](!/probability/visual-tools/conditional-probability/waffle-chart) display proportions in grid format

• [Contingency Tables](!/probability/visual-tools/conditional-probability/contingency-table) organize all probabilities in tabular format

**Calculators:**

• [Conditional Probability Calculator](!/probability/calculators/conditional-probability) computes P(A|B) from inputs

• [Joint Probability Calculator](!/probability/calculators/joint-probability) works with joint distributions`,
    before: ``,
    after: ``,
    link: '',
  },
}
    },

    'waffle-chart': {
      component: 'WaffleChart',
      title: "Waffle Chart - Conditional Probability Visualization | Learn Math Class",
      description: "Interactive waffle chart showing conditional probability across four regions. Adjust event distribution to see how P(Event|Region) differs from total probability P(Event).",
      name: "Waffle Chart - Conditional Probability Visualization",
      url: "/probability/visual-tools/conditional-probability/waffle-chart",
      h1: "Waffle Chart Visualization",
      introTitle: "Visualizing Conditional Probability with Waffle Charts",
      introContent: "This waffle chart divides the sample space into four equal regions, each containing a 10×10 grid of tiles. Dark blue tiles represent an event occurring. Adjust the probability sliders to change how the event distributes across regions and observe how conditional probability P(Event|Region) differs from total probability P(Event).",
      keywords: [
        "waffle chart probability",
        "conditional probability grid",
        "100 square probability",
        "proportional probability visualization",
        "waffle diagram statistics",
        "grid probability calculator",
        "visual proportion probability",
        "P(A|B) waffle chart",
        "probability squares",
        "interactive waffle chart",
        "law of total probability visual",
        "conditional vs total probability",
        "probability distribution visualization",
        "tile probability chart",
        "region conditional probability"
      ],
      faqQuestions: {
        obj1: {
          question: "What does the waffle chart show?",
          answer: "The waffle chart displays four regions (A, B, C, D), each with 100 tiles. Dark blue tiles represent an event occurring. The chart shows how conditional probability P(Event|Region) varies by region while total probability P(Event) averages across all regions."
        },
        obj2: {
          question: "How is conditional probability calculated in the waffle chart?",
          answer: "P(Event|Region) equals the number of dark blue tiles in that region divided by 100 (total tiles per region). Each region shows this calculation in its header. The conditional probability varies by region based on how you set the distribution sliders."
        },
        obj3: {
          question: "What do the sliders control?",
          answer: "Each slider sets the probability of the event (dark blue tiles) within that region. Moving a slider redistributes the dark tiles randomly within that region. This lets you create scenarios where the same event has different likelihoods depending on which region you're in."
        },
        obj4: {
          question: "How does total probability relate to conditional probabilities?",
          answer: "Total probability P(Event) is calculated using the law of total probability: sum of P(Region) × P(Event|Region) for all regions. Since each region has equal probability (0.25), the total equals the average of the four conditional probabilities."
        },
        obj5: {
          question: "What is the key insight from this visualization?",
          answer: "The same total probability can arise from very different distributions. Two scenarios might both have P(Event) = 0.50, but one might have uniform 50% across all regions while another has 80% in two regions and 20% in others. Knowing which region you're in changes your probability assessment."
        }
      },
      // sectionsContent: {
      //   // PLACEHOLDER - paste waffle-chart sectionsContent here
      // }

      // sectionsContent for 'waffle-chart' view
// Paste this into viewConfig['waffle-chart'].sectionsContent

sectionsContent: {
  obj1: {
    title: `Getting Started with the Waffle Chart`,
    content: `This interactive waffle chart visualizes [conditional probability](!/probability/conditional-probability) through proportional grid displays. The chart divides the sample space into four equal regions (A, B, C, D), each containing a 10×10 grid of 100 tiles.

Dark blue tiles represent an event occurring within each region. The distribution of dark tiles varies by region, controlled by individual sliders. This creates a scenario where the same event has different conditional probabilities depending on which region you're in.

The layout shows all four grids in a row at the top, with controls and statistics below. Each region header displays its conditional probability P(Event | Region), making it easy to compare across regions. The right panel shows total probability calculated using the law of total probability.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Understanding the Grid Structure`,
    content: `Each region contains exactly 100 tiles arranged in a 10×10 grid. Tiles are either the region's background color (event did not occur) or dark blue (event occurred). The number of dark blue tiles directly represents the percentage probability within that region.

The four regions have equal probability:

• P(Region A) = P(Region B) = P(Region C) = P(Region D) = 0.25

Since there are 400 total tiles (100 per region × 4 regions), each individual tile represents 0.25% of the total sample space. The four grids together represent the complete [sample space](!/probability/sample-space).

Hover over any tile to see it enlarge slightly. This interaction helps you count tiles visually and understand that each square represents an equally likely outcome within its region.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using the Distribution Sliders`,
    content: `Four sliders in the Adjust Distribution panel control how dark blue tiles distribute within each region:

• Region A slider sets P(Event | Region A)
• Region B slider sets P(Event | Region B)
• Region C slider sets P(Event | Region C)
• Region D slider sets P(Event | Region D)

Moving a slider changes the proportion of dark blue tiles in that region. Tiles redistribute randomly within the region to match the new probability. The count display shows the exact number of dark tiles out of 100.

Try setting different distributions:

• All sliders to 0.50 creates uniform 50% across all regions
• Sliders to 0.80, 0.60, 0.40, 0.20 creates a gradient pattern
• One slider high (0.90) with others low (0.10) concentrates the event in one region

Each configuration produces different insights about conditional versus total probability.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Reading Conditional Probabilities`,
    content: `Each region header displays two equivalent notations for conditional probability:

• P(Dark Blue | Region Name) — verbal form
• P(■ | □) — symbolic form using colored squares

The numerical value shows the exact conditional probability, calculated as:

$$P(\\text{Event} | \\text{Region}) = \\frac{\\text{Dark tiles in region}}{100}$$

Since each region has 100 tiles, the count of dark tiles directly equals the percentage probability. If Region A has 45 dark tiles, P(Event | Region A) = 0.45.

Compare the conditional probabilities across regions. They typically differ because you've set different distributions with the sliders. This demonstrates that knowing which region you're in changes your probability assessment—the essence of [conditional probability](!/probability/conditional-probability).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Total Probability Calculation`,
    content: `The right panel displays total probability P(Event) calculated across all regions. This uses the [law of total probability](!/probability/total-probability):

$$P(\\text{Event}) = \\sum_{i} P(\\text{Region}_i) \\times P(\\text{Event} | \\text{Region}_i)$$

Since each region has equal probability 0.25:

$$P(\\text{Event}) = 0.25 \\times P(E|A) + 0.25 \\times P(E|B) + 0.25 \\times P(E|C) + 0.25 \\times P(E|D)$$

The panel shows each term in the sum, then the final result. The total probability equals the average of the four conditional probabilities (since region probabilities are equal).

The display also shows the raw count: total dark tiles across all regions out of 400. For example, "156 of 400 tiles" corresponds to P(Event) = 0.390.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Conditional vs Total Probability`,
    content: `The key insight from this visualization is how conditional probability differs from total probability. Consider this scenario:

Set Region A to 0.80 and Regions B, C, D to 0.20. The total probability is:

P(Event) = 0.25(0.80) + 0.25(0.20) + 0.25(0.20) + 0.25(0.20) = 0.35

Now imagine you know you're in Region A. Your probability jumps to 0.80—more than double the total probability. If you're in any other region, your probability drops to 0.20—lower than the total.

This demonstrates why conditional information matters. The total probability 0.35 is correct if you don't know which region you're in. But once you know the region (the condition), your probability estimate changes dramatically.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Same Total, Different Distributions`,
    content: `Multiple distributions can produce the same total probability. Compare these two scenarios that both give P(Event) = 0.50:

**Uniform distribution:**
All regions set to 0.50. Every region has the same conditional probability. Knowing your region provides no information—this is [independence](!/probability/independence).

**Concentrated distribution:**
Regions A and B set to 0.80, Regions C and D set to 0.20. Total still equals 0.50, but conditional probabilities vary widely.

Both scenarios have the same overall event frequency, but they represent fundamentally different situations. In the concentrated case, the event clusters in certain regions. Knowing which region you're in becomes highly informative.

This illustrates why total probability alone doesn't tell the whole story. The distribution of an event across conditions matters for decision-making and prediction.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `Waffle charts connect to several probability concepts and tools on this site:

**Theory Pages:**

• [Conditional Probability](!/probability/conditional-probability) explains P(A|B) theory in depth

• [Total Probability](!/probability/total-probability) covers summing across partitions

• [Independence](!/probability/independence) describes when knowing the condition doesn't change probability

• [Joint Probability](!/probability/joint-probability) details probability of combined events

**Other Visualizations:**

• [Tree Diagrams](!/probability/visual-tools/conditional-probability/tree-diagram) show conditional probability as branching paths

• [Venn Diagrams](!/probability/visual-tools/conditional-probability/venn-diagram) display overlapping regions

• [Contingency Tables](!/probability/visual-tools/conditional-probability/contingency-table) organize all probabilities in tabular format

**Calculators:**

• [Conditional Probability Calculator](!/probability/calculators/conditional-probability) computes P(A|B) from inputs

• [Joint Probability Calculator](!/probability/calculators/joint-probability) works with joint distributions`,
    before: ``,
    after: ``,
    link: '',
  },
}
    },

    'contingency-table': {
      component: 'ContingencyTable',
      title: "Contingency Table - Conditional Probability Visualization | Learn Math Class",
      description: "Interactive 2×2 contingency table with adjustable P(A), P(B|A), P(B|Aᶜ). See joint, marginal, and conditional probabilities with clickable highlighting.",
      name: "Contingency Table - Conditional Probability Visualization",
      url: "/probability/visual-tools/conditional-probability/contingency-table",
      h1: "Contingency Table Visualization",
      introTitle: "Visualizing Conditional Probability with Contingency Tables",
      introContent: "This interactive 2×2 contingency table displays the complete probability relationship between two events. Three sliders control P(A), P(B|A), and P(B|Aᶜ), with all joint, marginal, and conditional probabilities updating in real time. Click any cell or conditional probability row to highlight the mathematical relationship.",
      keywords: [
        "contingency table probability",
        "2x2 probability table",
        "joint probability table",
        "marginal probability",
        "conditional probability table",
        "P(A|B) calculator",
        "interactive contingency table",
        "cross tabulation probability",
        "two-way probability table",
        "probability matrix",
        "conditional probability formula",
        "Bayes theorem table",
        "joint distribution table",
        "probability table calculator",
        "marginal distribution"
      ],
      faqQuestions: {
        obj1: {
          question: "What is a contingency table?",
          answer: "A contingency table organizes the joint probability distribution of two events in a grid. Interior cells show joint probabilities P(A ∩ B), row and column totals show marginal probabilities P(A) and P(B), and conditional probabilities can be calculated from these values."
        },
        obj2: {
          question: "How do you read conditional probability from the table?",
          answer: "Conditional probability P(A|B) equals the joint probability P(A ∩ B) divided by the marginal P(B). The table displays conditional probabilities in panels on the right. Click any row to see the numerator (joint cell) and denominator (marginal) highlighted."
        },
        obj3: {
          question: "What do the three sliders control?",
          answer: "P(A) sets the marginal probability of event A. P(B|A) sets the conditional probability of B given A. P(B|Aᶜ) sets the conditional probability of B given not-A. All six joint and marginal probabilities calculate automatically from these three inputs."
        },
        obj4: {
          question: "How does the table demonstrate Bayes' theorem?",
          answer: "The same joint probability P(A ∩ B) appears in both P(A|B) and P(B|A), but with different denominators (P(B) vs P(A)). Click P(A|B) then P(B|A) to see how Bayes' theorem relates these conditional probabilities through the shared joint probability."
        },
        obj5: {
          question: "What is the difference between joint and marginal probability?",
          answer: "Joint probability P(A ∩ B) is the probability both events occur together (interior cells). Marginal probability P(A) or P(B) is the probability of one event regardless of the other (row/column totals). Marginals equal the sum of joint probabilities in that row or column."
        }
      },
      // sectionsContent: {
      //   // PLACEHOLDER - paste contingency-table sectionsContent here
      // }

      // sectionsContent for 'contingency-table' view
// Paste this into viewConfig['contingency-table'].sectionsContent

sectionsContent: {
  obj1: {
    title: `Getting Started with the Contingency Table`,
    content: `This interactive 2×2 contingency table displays the complete probability relationship between two events A and B. The table organizes [joint probabilities](!/probability/joint-probability), marginal probabilities, and [conditional probabilities](!/probability/conditional-probability) in a single unified view.

The left side shows the main probability table with four interior cells (joint probabilities) and row/column totals (marginal probabilities). The right side displays four conditional probability panels showing P(B|A), P(B|Aᶜ), P(A|B), and P(A|Bᶜ).

Three sliders below the table control P(A), P(B|A), and P(B|Aᶜ). All other probabilities derive from these three inputs. Click any cell or conditional probability row to highlight the mathematical relationship between values.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using the Probability Sliders`,
    content: `Three sliders control the entire probability structure:

• P(A) sets the marginal probability of event A. This determines the row totals—how probability splits between row A and row Aᶜ.

• P(B|A) sets the conditional probability of B given A occurred. This determines how the A row splits between columns B and Bᶜ.

• P(B|Aᶜ) sets the conditional probability of B given A did not occur. This determines how the Aᶜ row splits between columns.

As you adjust any slider, all six interior cells and four marginal totals recalculate instantly. The conditional probability panels on the right also update. Try setting P(B|A) = P(B|Aᶜ) to see what happens—this creates [independence](!/probability/independence) between A and B.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Reading the Joint Probability Table`,
    content: `The 2×2 table interior contains four joint probabilities:

• P(A ∩ B) — upper left: probability both A and B occur
• P(A ∩ Bᶜ) — upper right: probability A occurs but B does not
• P(Aᶜ ∩ B) — lower left: probability B occurs but A does not
• P(Aᶜ ∩ Bᶜ) — lower right: probability neither occurs

Each cell has a distinct color for visual tracking. Click any cell to highlight it and see how it appears in conditional probability calculations on the right.

The four joint probabilities sum to exactly 1.0000, representing the complete [sample space](!/probability/sample-space). The table displays this sum in the bottom-right total cell.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Understanding Marginal Probabilities`,
    content: `Marginal probabilities appear in the "Total" row and column:

**Row totals** (right side):
• P(A) — sum of joint probabilities in the A row
• P(Aᶜ) — sum of joint probabilities in the Aᶜ row

**Column totals** (bottom):
• P(B) — sum of joint probabilities in the B column
• P(Bᶜ) — sum of joint probabilities in the Bᶜ column

The relationship:

$$P(A) = P(A \\cap B) + P(A \\cap B^c)$$

$$P(B) = P(A \\cap B) + P(A^c \\cap B)$$

Row marginals sum to 1: P(A) + P(Aᶜ) = 1. Column marginals also sum to 1: P(B) + P(Bᶜ) = 1. Marginal probabilities serve as denominators in conditional probability formulas.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Exploring Conditional Probability Panels`,
    content: `Four panels on the right display conditional probability distributions:

**Top row panels** condition on A:
• P(B|A) and P(Bᶜ|A) — given A occurred, probability of B vs Bᶜ
• P(B|Aᶜ) and P(Bᶜ|Aᶜ) — given A did not occur, probability of B vs Bᶜ

**Bottom row panels** condition on B:
• P(A|B) and P(Aᶜ|B) — given B occurred, probability of A vs Aᶜ
• P(A|Bᶜ) and P(Aᶜ|Bᶜ) — given B did not occur, probability of A vs Aᶜ

Each conditional probability shows its formula breakdown. Click any row to highlight the numerator (joint cell) and denominator (marginal total) in the main table, visually confirming:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Clicking to Trace Calculations`,
    content: `The highlighting system reveals how conditional probabilities derive from the table:

**Click a joint cell** (e.g., P(A ∩ B)):
The cell highlights in its unique color. Look at the conditional panels to see where this joint probability appears as a numerator.

**Click a conditional probability row** (e.g., P(A|B)):
Three things highlight simultaneously:
• The joint probability cell (numerator)
• The marginal probability (denominator)
• The formula showing the division

This visualization demonstrates that conditional probability is always a ratio: the intersection divided by the condition. The same joint probability P(A ∩ B) appears in both P(A|B) (denominator P(B)) and P(B|A) (denominator P(A)).

Use the Clear Selection button to remove all highlighting.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Bayes' Theorem in the Table`,
    content: `The contingency table demonstrates [Bayes' theorem](!/probability/bayes-theorem) visually. Compare P(A|B) with P(B|A):

Both use the same numerator P(A ∩ B), but different denominators:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad \\text{vs} \\quad P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$

Bayes' theorem relates these:

$$P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)}$$

Try this: click P(A|B), note which cells highlight. Then click P(B|A). Both highlight the same green joint cell but with different marginal denominators. This is Bayes' theorem in action—flipping the condition changes the denominator.

The table shows P(B) calculated via [total probability](!/probability/total-probability): P(B) = P(A)·P(B|A) + P(Aᶜ)·P(B|Aᶜ), which appears in Bayes' formula's denominator.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `Contingency tables connect to several probability concepts and tools on this site:

**Theory Pages:**

• [Conditional Probability](!/probability/conditional-probability) explains P(A|B) theory in depth

• [Bayes' Theorem](!/probability/bayes-theorem) covers reversing conditional probabilities

• [Joint Probability](!/probability/joint-probability) details probability of combined events

• [Independence](!/probability/independence) describes when P(A|B) = P(A)

**Other Visualizations:**

• [Tree Diagrams](!/probability/visual-tools/conditional-probability/tree-diagram) show conditional probability as branching paths

• [Venn Diagrams](!/probability/visual-tools/conditional-probability/venn-diagram) display overlapping regions

• [Waffle Charts](!/probability/visual-tools/conditional-probability/waffle-chart) show proportions in grid format

**Calculators:**

• [Bayes' Theorem Calculator](!/probability/calculators/bayes-calculator) computes reverse conditionals

• [Conditional Probability Calculator](!/probability/calculators/conditional-probability) calculates P(A|B) from inputs

• [Joint Probability Calculator](!/probability/calculators/joint-probability) works with joint distributions`,
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
          "name": "Conditional Probability",
          "item": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability"
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
    'tree-diagram': [
      "Adjustable P(A), P(B|A), and P(B|Aᶜ) sliders",
      "Real-time joint probability calculations",
      "Clickable paths with color highlighting",
      "Marginal probability display",
      "Bayes theorem calculation panel",
      "Visual path multiplication demonstration",
      "Clear selection button"
    ],
    'venn-diagram': [
      "Ellipse event overlapping partitioned sample space",
      "Clickable compartments with intersection highlighting",
      "Area-based probability calculations",
      "Adjustable number of compartments (2-4)",
      "Law of total probability verification",
      "Step-by-step conditional probability breakdown",
      "Visual intersection area display"
    ],
    'waffle-chart': [
      "Four regions with 100 tiles each",
      "Adjustable probability per region",
      "Dark blue event tiles with random distribution",
      "Conditional probability per region display",
      "Total probability calculation panel",
      "Law of total probability demonstration",
      "Hover effects on individual tiles"
    ],
    'contingency-table': [
      "Adjustable P(A), P(B|A), and P(B|Aᶜ) sliders",
      "2×2 joint probability table with color coding",
      "Four conditional probability panels",
      "Clickable cells with formula highlighting",
      "Marginal probability totals",
      "Real-time probability recalculation",
      "Visual Bayes theorem demonstration"
    ]
  };
  return features[view] || [];
}

export default function ConditionalProbabilityViewPage({ 
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
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '-40px' }}>{h1Title}</h1>

      {componentName === 'WaffleChart' && (
        <div style={{ transform: 'scale(0.9)' }}>
          <WaffleChart />
        </div>
      )}

      {componentName === 'TreeDiagram' && (
        <div style={{ transform: 'scale(0.9)' }}>
          <ConditionalProbabilityTree2 />
        </div>
      )}

      {componentName === 'VennDiagram' && (
        <div style={{ transform: 'scale(0.9)' }}>
          <ConditionalProbabilityVenn />
        </div>
      )}

      {componentName === 'ContingencyTable' && (
        <div style={{ transform: 'scale(0.9)' }}>
          <ConditionalProbabilityTable2 />
        </div>
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
    </>
  );
}