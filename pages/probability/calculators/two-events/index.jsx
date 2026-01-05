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
// import TwoEventsProbabilityCalculator from '@/app/components/calculators/probability/events/TwoEventsProbabilityCalculator'


// export async function getStaticProps(){

//   const keyWords = [
//   'probability calculator',
//   'probability of two events',
//   'conditional probability',
//   'independent events',
//   'mutually exclusive events',
//   'two events probability calculator',
//   'probability of two events',
//   'probability of A and B',
//   'probability of A or B',
//   'union and intersection probability calculator',
//   'conditional probability two events',
//   'independent events probability calculator',
//   'mutually exclusive events calculator',
//   'two event venn diagram probability',
//   'probability rules two events'
// ];


//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/calculators/two-events",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function TwoEventsCalculatorPage({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:'section1',
//         link:'',
//         content:''
//     },
//     {
//         id:'2',
//         title:'section2',
//         link:'',
//         content:''
//     },
//     {
//         id:'',
//         title:'',
//         link:'',
//         content:''
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
  
//   <meta name="twitter:card" content="summary" />
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
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'0px'}}>Two Events Probability Calculator</h1>
//    <br/>
//    <TwoEventsProbabilityCalculator/>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
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
import TwoEventsProbabilityCalculator from '@/app/components/calculators/probability/events/TwoEventsProbabilityCalculator'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


export async function getStaticProps(){

  const keyWords = [
    'two events probability calculator',
    'probability of two events',
    'independent events calculator',
    'mutually exclusive events',
    'conditional probability calculator',
    'probability union intersection',
    'P(A and B) calculator',
    'P(A or B) calculator',
    'venn diagram probability',
    'two event probability',
    'probability calculator A and B',
    'probability calculator A or B',
    'event probability tool',
    'compound probability calculator',
    'probability rules calculator'
  ]

  const menuItems = [
    {
      title: "Probability Calculators",
      link: "/probability/calculators"
    },
    {
      title: "Conditional Probability Calculator",
      link: "/probability/calculators/conditional-probability"
    },
    {
      title: "Bayes' Theorem Calculator",
      link: "/probability/calculators/bayes-theorem"
    },
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting Calculation Modes`,
      content: `The calculator offers five distinct modes for computing two-event probabilities, each suited to different problem types. Choose the mode matching your available information before entering values.

**Independent Events** mode assumes events don't influence each other—occurrence of one doesn't affect the other's probability. This mode requires only P(A) and P(B), automatically computing P(A∩B) = P(A)×P(B). Use for scenarios like rolling dice (outcomes on different dice are independent) or flipping coins (each flip is independent).

**Conditional Probability** mode handles cases where one event's probability depends on another occurring. Provide P(A), P(B), and either P(B|A) or P(A|B)—not both. The calculator computes P(A∩B) using the multiplication rule: P(A∩B) = P(B|A)×P(A) or P(A∩B) = P(A|B)×P(B). Use when events relate but aren't independent, like drawing cards without replacement.

**Given P(A∩B)** mode starts with intersection probability—both events occurring together. Enter P(A), P(B), and P(A∩B), and the calculator derives P(A∪B) using the addition rule. Use when joint probability is known directly from data or experiment.

**Given P(A∪B)** mode starts with union probability—at least one event occurring. Provide P(A), P(B), and P(A∪B), and the calculator computes P(A∩B) by rearranging the addition rule. Use when you know total probability coverage but need overlap.

**Mutually Exclusive** mode applies when events cannot occur simultaneously—if one happens, the other cannot. This forces P(A∩B)=0 and simplifies union: P(A∪B) = P(A) + P(B). Use for non-overlapping outcomes like rolling exactly 3 versus exactly 5 on a die.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Working with Independent Events Mode`,
      content: `Independent events satisfy P(A∩B) = P(A)×P(B)—the multiplication rule for independence. Independence means knowing one event occurred provides no information about the other. Mathematically, P(A|B) = P(A) and P(B|A) = P(B).

Enter only **P(A)** and **P(B)** in independent mode. The calculator multiplies these values to find intersection probability. For P(A)=0.5 and P(B)=0.4, the calculator computes P(A∩B) = 0.5×0.4 = 0.2. Union follows from the addition rule: P(A∪B) = 0.5 + 0.4 - 0.2 = 0.7.

The results panel shows all derived probabilities with expandable step-by-step calculations. Click any result row to see the computation formula and intermediate steps. The **Event Properties** section confirms independence with a green "Yes" indicator.

**Venn diagrams** appear next to each probability, visually showing the region. The intersection diagram highlights only the overlap (both circles' intersection). Union highlights both circles completely. These visual aids reinforce which outcomes each probability covers.

Common independent scenarios: coin flips (each flip independent), dice rolls (dice don't influence each other), sampling with replacement (each draw independent), separate random processes (traffic delays and power outages typically independent).

**Non-independent detection**: If you calculate with independent mode but conditional probabilities don't match marginals, the results show independence as "No," indicating your events actually depend on each other despite mode selection.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Using Conditional Probability Mode`,
      content: `Conditional probability P(A|B) quantifies A's probability given B already occurred. This differs from P(A) which ignores B's status. Conditional probabilities handle dependence between events—when one event's occurrence changes the other's likelihood.

In conditional mode, provide P(A), P(B), and **either** P(B|A) **or** P(A|B)—never both simultaneously. The calculator enforces this rule, displaying an error if both conditionals are entered. This prevents overdetermination (two conditionals may conflict when events aren't independent).

**Using P(B|A)**: Enter the probability of B occurring given A already happened. The calculator computes P(A∩B) = P(B|A)×P(A), the multiplication rule. For P(A)=0.6, P(B)=0.5, P(B|A)=0.7, the intersection becomes 0.7×0.6 = 0.42. The calculator then derives union, reverse conditionals, and complements.

**Using P(A|B)**: Enter the probability of A occurring given B already happened. The calculator computes P(A∩B) = P(A|B)×P(B). For P(A)=0.6, P(B)=0.5, P(A|B)=0.8, the intersection becomes 0.8×0.5 = 0.4. Results include the reverse conditional P(B|A) computed via Bayes' theorem.

The **step-by-step calculations** show the multiplication rule application. Expand the P(A∩B) row to see: formula, substitution, and result. Other probabilities cascade from this intersection using standard rules.

Conditional probability scenarios: drawing cards without replacement (later draws depend on earlier), disease diagnosis (test results depend on disease presence), weather forecasting (tomorrow's weather depends on today's), quality control (defect rates may depend on machine used).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Given Intersection and Union Modes`,
      content: `**Given P(A∩B) mode** starts with intersection—probability both events occur together. This mode suits situations where joint occurrence is measured directly but union isn't immediately known. Enter P(A), P(B), and P(A∩B), and the calculator applies the addition rule: P(A∪B) = P(A) + P(B) - P(A∩B).

For example, P(A)=0.6, P(B)=0.5, P(A∩B)=0.3 yields union 0.6 + 0.5 - 0.3 = 0.8. The subtraction of P(A∩B) corrects for double-counting the overlap. The calculator validates that P(A∩B) ≤ min(P(A), P(B))—intersection cannot exceed either individual probability.

The calculator computes conditional probabilities from the intersection: P(A|B) = P(A∩B)/P(B) = 0.3/0.5 = 0.6, and P(B|A) = P(A∩B)/P(A) = 0.3/0.6 = 0.5. These derivations appear in step-by-step calculations, showing division operations.

**Given P(A∪B) mode** reverses the process, starting with union—probability at least one event occurs. This mode helps when total coverage is known but overlap isn't. Enter P(A), P(B), and P(A∪B), and the calculator rearranges the addition rule: P(A∩B) = P(A) + P(B) - P(A∪B).

For P(A)=0.6, P(B)=0.5, P(A∪B)=0.9, intersection becomes 0.6 + 0.5 - 0.9 = 0.2. The calculator validates P(A∪B) ≥ max(P(A), P(B))—union must at least cover the larger individual probability. It also checks P(A∪B) ≤ 1.0.

Both modes derive the complete probability space: complements, conditional probabilities, and exclusive regions (A without B, B without A, neither). The **Venn diagrams** clearly show how intersection and union relate geometrically, with shading indicating each probability's region.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Understanding Venn Diagram Visualizations`,
      content: `Each calculated probability displays a **Venn diagram** showing the corresponding region visually. These diagrams use two overlapping circles representing events A and B, with shaded regions indicating which outcomes the probability covers.

**P(A∩B) - Intersection**: Only the lens-shaped overlap region is shaded (dark blue). This shows outcomes where both A and B occur simultaneously. The diagram emphasizes that intersection is contained within both individual events.

**P(A∪B) - Union**: Both circles are completely shaded. This shows all outcomes where at least one event occurs—A alone, B alone, or both together. Union encompasses everything except the region outside both circles.

**P(A∩B') - A without B**: The left circle (A) is shaded except where it overlaps B. This crescent-shaped region represents A occurring but B not occurring. The right circle (B) remains unshaded with faded outline.

**P(B∩A') - B without A**: The right circle (B) is shaded except where it overlaps A. This shows B occurring without A. The diagram is mirror-image of A without B.

**P(A'∩B') - Neither**: The rectangular background outside both circles is shaded. This represents outcomes where neither A nor B occurs—the complement of the union.

**P(A|B) - Conditional A given B**: Circle B is highlighted (light blue background) indicating the conditioning event. Within B, the intersection region is shaded darker, showing the portion where A also occurs. The ratio of dark shaded area to total B area visually represents the conditional probability.

**P(B|A) - Conditional B given A**: Circle A is highlighted as the conditioning event, with the intersection darker. This mirrors the A|B diagram but with roles reversed.

**P(A') and P(B') - Complements**: The entire area outside one circle is shaded, showing all outcomes where that event doesn't occur. These diagrams include outcomes inside the other circle.

The diagrams use consistent colors: dark blue for target regions, light blue for conditioning regions, faded outlines for reference circles. Diagrams appear at 90×60 pixels—compact but clear.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reading Step-by-Step Calculations`,
      content: `Click any result row to expand **step-by-step calculations** showing how that probability was derived. The expandable section appears below the result with gray background, displaying formulas and intermediate steps in monospace font.

Each calculation follows a three-step format: **(1) Formula** showing the general probability rule, **(2) Substitution** replacing variables with actual values, **(3) Result** computing the final probability. Steps are indented for clarity.

**Example - Independent P(A∩B)**: Step 1 shows "P(A ∩ B) = P(A) × P(B) (independent events)", establishing the multiplication rule. Step 2 shows "P(A ∩ B) = 0.5 × 0.4", substituting provided values. Step 3 shows "P(A ∩ B) = 0.2000", the computed result.

**Example - Conditional P(A|B)**: Step 1 shows "P(A|B) = P(A ∩ B) / P(B)", the definition of conditional probability. Step 2 shows "P(A|B) = 0.2000 / 0.4", using the derived intersection. Step 3 shows "P(A|B) = 0.5000", the conditional probability.

**Example - Union from addition rule**: Step 1 shows "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)", the addition rule. Step 2 shows "P(A ∪ B) = 0.5 + 0.4 - 0.2000", substituting all values. Step 3 shows "P(A ∪ B) = 0.7000", the total coverage.

Calculations reference previously computed values, showing dependency chains. For instance, P(A|B) calculation references P(A∩B) computed earlier. This demonstrates how complex probabilities build from simpler ones.

The steps validate your understanding of probability rules. Compare manual calculations to the displayed steps to verify your approach. The explicit formula application clarifies which rule applies to each probability type.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Interpreting Event Properties`,
      content: `The **Event Properties** panel below the input section displays two key relationships: independence and mutual exclusivity. These properties characterize how events relate to each other mathematically and conceptually.

**Independent** property shows "Yes" (green) when P(A∩B) = P(A)×P(B) within tolerance (0.0001). Independence means events don't influence each other—knowing one occurred doesn't change the other's probability. In independent mode, this always shows "Yes" by construction. In other modes, the calculator checks if computed probabilities satisfy independence numerically.

Non-independence appears as "No" (red). This indicates dependence: P(A∩B) ≠ P(A)×P(B). Dependent events have conditional probabilities differing from marginals: P(A|B) ≠ P(A) or P(B|A) ≠ P(B). The intersection is either larger (positive dependence) or smaller (negative dependence) than the independence baseline.

**Mutually Exclusive** property shows "Yes" when P(A∩B) = 0—events cannot occur together. Mutually exclusive events have zero intersection. In mutually exclusive mode, this always shows "Yes". In other modes, the calculator checks if computed P(A∩B) equals zero (within 0.0001 tolerance).

When mutually exclusive, the union simplifies: P(A∪B) = P(A) + P(B) exactly. Conditional probabilities become undefined (or zero depending on definition) since if B occurs, A cannot, making P(A|B) = 0.

**Important**: Events cannot be both independent and mutually exclusive unless one has probability zero. If P(A)>0 and P(B)>0, and events are mutually exclusive (P(A∩B)=0), then they're dependent because P(A)×P(B) ≠ 0. Independence with nonzero probabilities requires P(A∩B) > 0, contradicting mutual exclusivity.

The properties section helps verify your mode selection matches reality. If you select independent mode but get independence "No", your events actually depend on each other despite your assumption.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Probability Rules for Two Events`,
      content: `Two-event probability calculations rely on fundamental rules that connect individual probabilities, joint probabilities, and conditional probabilities. The calculator implements all standard probability rules with validation.

**Addition Rule** (inclusion-exclusion): P(A∪B) = P(A) + P(B) - P(A∩B). This rule computes union by adding individual probabilities then subtracting the intersection to avoid double-counting the overlap. The subtraction term corrects for counting outcomes in both A and B twice.

**Multiplication Rule** for independence: P(A∩B) = P(A)×P(B) when events are independent. Independence is the special case where joint probability factors into individual probabilities. This simplification only applies when events don't influence each other.

**Multiplication Rule** for general case: P(A∩B) = P(A|B)×P(B) = P(B|A)×P(A). This expresses intersection using conditional probabilities, working for any events (dependent or independent). When independent, P(A|B)=P(A) and this reduces to the independence rule.

**Complement Rule**: P(A') = 1 - P(A). The complement represents "not A"—all outcomes where A doesn't occur. Event and complement partition the sample space, so probabilities sum to 1.

**De Morgan's Laws**: P(A'∩B') = 1 - P(A∪B) and P(A'∪B') = 1 - P(A∩B). These relate complements of unions/intersections to intersections/unions of complements. The calculator computes these to provide complete probability space coverage.

**Conditional Probability Definition**: P(A|B) = P(A∩B)/P(B) for P(B)>0. This restricts the sample space to outcomes where B occurred, then finds A's proportion within that restricted space. If P(B)=0, conditional probability is undefined (the calculator notes this).

The calculator chains these rules systematically: given initial information, it applies appropriate rules to derive the complete two-event probability space (10-12 distinct probabilities depending on zero denominators).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Independence vs Mutual Exclusivity`,
      content: `**Independence** and **mutual exclusivity** are distinct, often confused concepts. Understanding their difference is crucial for correct probability modeling.

**Independent events** don't influence each other. P(A∩B) = P(A)×P(B) and P(A|B) = P(A). Knowing B occurred doesn't change A's probability. Example: flipping a coin (event A) and rolling a die (event B)—coin result doesn't affect die result. Independent events can occur together; their intersection has positive probability.

**Mutually exclusive events** cannot occur simultaneously. P(A∩B) = 0—if A happens, B cannot. Example: rolling exactly 3 (event A) versus rolling exactly 5 (event B) on a single die—both outcomes cannot happen in one roll. Mutually exclusive events have zero intersection.

**Key distinction**: Independent events typically occur together sometimes (positive intersection). Mutually exclusive events never occur together (zero intersection). These are opposite extremes for how events relate.

**Mathematical incompatibility**: If P(A)>0 and P(B)>0, events cannot be both independent and mutually exclusive. Independence with nonzero probabilities requires P(A∩B) = P(A)×P(B) > 0. Mutual exclusivity requires P(A∩B) = 0. These contradict unless at least one probability is zero.

**Dependence**: Mutually exclusive events with nonzero probabilities are strongly dependent—extreme negative dependence. If A occurs, B definitely doesn't (P(B|A)=0). This maximal dependence differs sharply from independence where occurrence of one doesn't affect the other.

The calculator's event properties section shows these distinctions. Independent mode produces independence "Yes", mutually exclusive "No" (unless you enter P(A)=0 or P(B)=0). Mutually exclusive mode produces mutually exclusive "Yes", independent "No" (unless zero probabilities).

For comprehensive theory on independence and mutual exclusivity including formal definitions and examples, see **probability independence theory** and **mutually exclusive events theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Probability Axioms and Validation`,
      content: `The calculator enforces probability axioms—fundamental rules all valid probabilities must satisfy. Violation produces detailed error messages explaining which axiom failed and why.

**Axiom 1 - Non-negativity**: All probabilities must be ≥ 0. The calculator checks P(A∩B) ≥ 0 and derived probabilities like P(A∩B') ≥ 0. Negative probabilities are mathematically impossible—they'd represent negative likelihood, which is meaningless. Violation typically occurs from incorrect P(A∪B) being too large.

**Axiom 2 - Upper bound**: All probabilities must be ≤ 1. The calculator checks P(A∪B) ≤ 1.0001 (small tolerance for rounding). Probabilities exceeding 1 imply >100% likelihood, impossible since 1 represents certainty. Mutually exclusive mode checks if P(A) + P(B) > 1, which violates this for the union.

**Intersection constraint**: P(A∩B) ≤ min(P(A), P(B)). Intersection cannot exceed either individual event—outcomes in both A and B are subset of A alone and subset of B alone. Violation means claimed intersection is too large. For P(A)=0.3, P(B)=0.4, P(A∩B)=0.5 violates this: 0.5 > min(0.3,0.4)=0.3.

**Union constraint**: P(A∪B) ≥ max(P(A), P(B)). Union must at least cover the larger individual event. Violation means claimed union is too small. For P(A)=0.6, P(B)=0.4, P(A∪B)=0.5 violates this: 0.5 < max(0.6,0.4)=0.6.

**Addition rule consistency**: P(A∪B) = P(A) + P(B) - P(A∩B) must hold exactly (within 0.0001). This fundamental relationship connects union, individual probabilities, and intersection. Violation means the four values are inconsistent—they don't describe a valid probability space together.

**Component consistency**: Derived probabilities like P(A∩B') = P(A) - P(A∩B) must be non-negative. This checks if P(A∩B) ≤ P(A), ensuring the intersection doesn't exceed its containing event. Similarly for P(B∩A') = P(B) - P(A∩B).

When axioms are violated, the calculator displays all violations in a red error box at the top of results. Error messages specify which axiom failed and suggest checking input values. No results appear until inputs satisfy all axioms—this prevents working with impossible probability configurations.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Probability Tools and Calculators`,
      content: `**Conditional Probability Calculator** - Interactive contingency table for computing P(A|B) with frequency counts and probability normalization.

**Bayes' Theorem Calculator** - Calculate posterior probabilities with multiple modes including medical testing and hypothesis updating.

**Joint Probability Calculator** - 2×2 joint probability table with automatic marginal calculation and validation.

**Three Events Probability Calculator** - Extend to three events with intersection, union, and conditional probabilities.

**Venn Diagram Generator** - Create custom Venn diagrams for 2-3 sets with area-proportional regions and labels.

**Probability Tree Diagram Tool** - Build probability trees for sequential events with automatic branch probability calculation.

**Combination and Permutation Calculator** - Compute counting fundamentals for probability problems with distinct and repeated elements.

**Expected Value Calculator** - Calculate expected values, variance, and standard deviation for discrete probability distributions.

**Binomial Probability Calculator** - Compute probabilities for fixed trials with constant success probability.

**Independence Test Calculator** - Determine statistical independence from observed frequency data with chi-square tests.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is the difference between P(A∩B) and P(A∪B)?",
      answer: "P(A∩B) is the intersection—probability both A and B occur together. P(A∪B) is the union—probability at least one of A or B occurs (or both). Intersection is always ≤ union. For independent events with P(A)=0.5, P(B)=0.4: P(A∩B)=0.2 (both) and P(A∪B)=0.7 (at least one). The Venn diagrams show intersection as the lens-shaped overlap, union as both circles completely."
    },
    obj2: {
      question: "How do I know which calculation mode to select?",
      answer: "Select based on what information you have: (1) Independent Events if events don't influence each other and you only know P(A) and P(B), (2) Conditional Probability if you know P(B|A) or P(A|B), (3) Given P(A∩B) if you know the joint probability directly, (4) Given P(A∪B) if you know the union, (5) Mutually Exclusive if events cannot occur simultaneously. Match the mode to your available information and event relationship."
    },
    obj3: {
      question: "Can events be both independent and mutually exclusive?",
      answer: "No, not if both have positive probability. Independent events require P(A∩B) = P(A)×P(B) > 0 (can occur together). Mutually exclusive events require P(A∩B) = 0 (cannot occur together). These contradict unless P(A)=0 or P(B)=0. Mutually exclusive events with nonzero probabilities are strongly dependent—if one occurs, the other definitely doesn't."
    },
    obj4: {
      question: "What does P(A|B) mean and how is it calculated?",
      answer: "P(A|B) is conditional probability: probability of A occurring given B already occurred. It restricts the sample space to outcomes where B happened, then finds A's proportion within that space. Calculate using P(A|B) = P(A∩B)/P(B) if P(B)>0. For example, if P(A∩B)=0.3 and P(B)=0.5, then P(A|B)=0.3/0.5=0.6. The Venn diagram shows B highlighted with the intersection darker."
    },
    obj5: {
      question: "Why do I get axiom violation errors?",
      answer: "Axiom violations mean your input values describe an impossible probability configuration. Common violations: (1) P(A∩B) exceeds min(P(A), P(B))—intersection too large, (2) P(A∪B) less than max(P(A), P(B))—union too small, (3) P(A∪B) exceeds 1—probabilities too high, (4) Addition rule P(A∪B) = P(A) + P(B) - P(A∩B) not satisfied—values inconsistent. Check that all probabilities are between 0 and 1 and satisfy logical constraints."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Two Events Probability Calculator",
      "description": "Calculate probabilities for two events with five modes: independent, conditional, intersection, union, and mutually exclusive. Features Venn diagrams, step-by-step solutions, and axiom validation.",
      "url": "https://www.learnmathclass.com/probability/calculators/two-events",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Five calculation modes: independent, conditional, intersection, union, mutually exclusive",
        "Comprehensive probability calculations: P(A∩B), P(A∪B), P(A|B), P(B|A), complements",
        "Visual Venn diagrams for all 10+ probabilities",
        "Expandable step-by-step calculations with formulas",
        "Automatic axiom validation with detailed error messages",
        "Event property detection: independence and mutual exclusivity",
        "Interactive probability visualizations",
        "Input validation for all probability values",
        "Real-time calculation updates",
        "Educational tooltips and descriptions"
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
          "name": "Two Events",
          "item": "https://www.learnmathclass.com/probability/calculators/two-events"
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
      menuItems,
      seoData: {
        title: "Two Events Probability Calculator | Venn Diagram & Step-by-Step",
        description: "Calculate probabilities for two events with independent, conditional, and mutually exclusive modes. Features Venn diagrams and step-by-step solutions.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/two-events",
        name: "Two Events Probability Calculator"
      },
    }
  }
}

export default function TwoEventsCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas, menuItems}) {

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
   
     
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'50px'}}>Two Events Probability Calculator</h1>
      <br/>
      <br/>
      {/* <VerticalButtonGroup 
        items={menuItems}
        width="250px" 
        theme='vivid'
        isSticky={true}
        verticalOffset='200px'
      /> */}
      <div style={{marginTop:'-50px'}}>
        <TwoEventsProbabilityCalculator/>
      </div>
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