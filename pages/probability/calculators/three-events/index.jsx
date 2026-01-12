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
// import ThreeEventsProbabilityCalculator from '@/app/components/calculators/probability/events/ThreeEventsProbabilityCalculator'


// export async function getStaticProps(){

//   const keyWords = [
//   'probability calculator',
//   'probability of three events',
//   'conditional probability',
//   'independent events',
//   'mutually exclusive events',
//   'three events probability calculator',
//   'probability of three  events',
//   'probability of A and B and C',
//   'probability of A or B or C',
//   'union and intersection probability calculator',
//   'conditional probability three events',
//   'independent events probability calculator',
//   'mutually exclusive events calculator',
//   'three event venn diagram probability',
//   'probability rules three events'
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
//         title: "Three Events Probability Calculator | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/calculators/three-events",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'0px'}}>Three Events Probability Calculator</h1>
//    <br/>
//    <ThreeEventsProbabilityCalculator/>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
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
import ThreeEventsProbabilityCalculator from '@/app/components/calculators/probability/events/ThreeEventsProbabilityCalculator'


export async function getStaticProps(){

  const keyWords = [
    'three events probability calculator',
    'three events probability',
    'P(A∩B∩C) calculator',
    'P(A∪B∪C) calculator',
    'inclusion-exclusion principle',
    'three way venn diagram',
    'mutually independent events',
    'pairwise independent events',
    'eight region venn diagram',
    'triple intersection probability',
    'three event union calculator',
    'pairwise intersection probability',
    'probability three events calculator',
    'venn diagram three circles',
    'conditional probability three events'
  ]

  const sectionsContent = {
    obj1: {
      title: `Understanding Calculation Modes for Three Events`,
      content: `The calculator provides five modes matching different input scenarios for three events A, B, and C. **Mutually Independent** mode assumes all three events are independent—each event's occurrence doesn't affect the others. Enter only P(A), P(B), and P(C), and the calculator computes all intersections by multiplication: P(A∩B) = P(A)×P(B), P(A∩C) = P(A)×P(C), P(B∩C) = P(B)×P(C), and P(A∩B∩C) = P(A)×P(B)×P(C). Use this mode for completely independent processes like rolling three separate dice.

**Mutually Exclusive** mode applies when events cannot occur simultaneously—if one happens, the others cannot. This forces all intersections to zero: P(A∩B) = P(A∩C) = P(B∩C) = P(A∩B∩C) = 0. The union simplifies to P(A∪B∪C) = P(A) + P(B) + P(C). Use for non-overlapping outcomes like rolling exactly 1, exactly 2, or exactly 3 on a single die.

**Given P(A∩B∩C)** mode starts with the triple intersection—all three events occurring together. Provide P(A), P(B), P(C), P(A∩B∩C), and the three pairwise intersections P(A∩B), P(A∩C), P(B∩C). The calculator uses the inclusion-exclusion principle to compute the union and derives all eight Venn diagram regions.

**Given P(A∪B∪C)** mode starts with the union—at least one event occurring. Provide P(A), P(B), P(C), P(A∪B∪C), and the three pairwise intersections. The calculator solves for P(A∩B∩C) by rearranging inclusion-exclusion: P(A∩B∩C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) - P(A∪B∪C).

**Given Pairwise Intersections** mode provides all three pairwise intersections P(A∩B), P(A∩C), P(B∩C) plus the triple intersection P(A∩B∩C). The calculator computes the union via inclusion-exclusion. This mode suits situations where you know how pairs relate but need overall coverage.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Working with the Eight Venn Diagram Regions`,
      content: `Three overlapping circles create eight mutually exclusive regions representing all possible event combinations. The calculator computes probability for each region, partitioning the entire sample space.

**Region 1 - P(A∩B∩C)**: The central region where all three circles overlap. All three events occur simultaneously. For independent events, this equals P(A)×P(B)×P(C).

**Region 2 - P(A∩B∩C')**: Events A and B occur but C doesn't. Calculated as P(A∩B) - P(A∩B∩C), removing the triple intersection from the A-B pairwise intersection.

**Region 3 - P(A∩C∩B')**: Events A and C occur but B doesn't. Equals P(A∩C) - P(A∩B∩C).

**Region 4 - P(B∩C∩A')**: Events B and C occur but A doesn't. Equals P(B∩C) - P(A∩B∩C).

**Region 5 - P(A∩B'∩C')**: Only A occurs, neither B nor C. Calculated as P(A) - P(A∩B) - P(A∩C) + P(A∩B∩C). The addition of P(A∩B∩C) corrects for double subtraction.

**Region 6 - P(B∩A'∩C')**: Only B occurs. Equals P(B) - P(A∩B) - P(B∩C) + P(A∩B∩C).

**Region 7 - P(C∩A'∩B')**: Only C occurs. Equals P(C) - P(A∩C) - P(B∩C) + P(A∩B∩C).

**Region 8 - P(A'∩B'∩C')**: None of the events occur. Equals 1 - P(A∪B∪C), the complement of the union. This region lies outside all three circles.

Each result row displays a Venn diagram highlighting the corresponding region, making the geometric relationships clear. All eight probabilities sum to exactly 1, confirming complete sample space partition.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Inclusion-Exclusion Principle for Three Events`,
      content: `The **inclusion-exclusion principle** computes the union P(A∪B∪C) by adding individual probabilities, subtracting pairwise intersections to correct for double-counting, then adding back the triple intersection to correct for triple-subtraction. The formula: P(A∪B∪C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) + P(A∩B∩C).

**Step 1 - Add individuals**: P(A) + P(B) + P(C) counts all outcomes in at least one event. However, outcomes in two events get counted twice, and outcomes in all three get counted three times.

**Step 2 - Subtract pairwise intersections**: - P(A∩B) - P(A∩C) - P(B∩C) removes double-counting. But now outcomes in all three events have been removed too many times—they were added three times initially, then subtracted three times, leaving net zero.

**Step 3 - Add triple intersection**: + P(A∩B∩C) restores the central region that was over-corrected. Now each outcome in the union is counted exactly once.

The calculator displays this calculation in step-by-step format. For P(A)=0.5, P(B)=0.4, P(C)=0.3, P(A∩B)=0.2, P(A∩C)=0.15, P(B∩C)=0.12, P(A∩B∩C)=0.06: Union = 0.5 + 0.4 + 0.3 - 0.2 - 0.15 - 0.12 + 0.06 = 0.79.

The principle extends to any number of events with alternating signs: add singles, subtract pairs, add triples, subtract quadruples, etc. For three events, it stops at the triple intersection.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Mutual Independence vs Pairwise Independence`,
      content: `**Pairwise independence** means each pair of events is independent: P(A∩B) = P(A)×P(B), P(A∩C) = P(A)×P(C), and P(B∩C) = P(B)×P(C). Each event pair multiplies, but this doesn't guarantee the triple intersection multiplies.

**Mutual independence** (full independence) requires pairwise independence plus P(A∩B∩C) = P(A)×P(B)×P(C). All three events together must factor. Mutual independence is stronger—it implies pairwise independence but not vice versa.

**Key distinction**: Pairwise independence doesn't guarantee mutual independence. Three events can be pairwise independent yet dependent when considered together. Example: flip two fair coins. Let A="first coin heads", B="second coin heads", C="coins show same face". P(A)=P(B)=P(C)=0.5. Check pairs: P(A∩B)=0.25=0.5×0.5 ✓, P(A∩C)=0.25=0.5×0.5 ✓, P(B∩C)=0.25=0.5×0.5 ✓. Pairwise independent. But P(A∩B∩C)=0.25≠0.125=0.5×0.5×0.5 ✗. Not mutually independent.

The calculator's **Event Properties** section checks both conditions. "Pairwise Independent" shows Yes when all three pairs multiply within tolerance. "Mutually Independent" shows Yes only when pairwise independence holds AND the triple intersection multiplies. If mutually independent shows Yes, pairwise independent automatically shows Yes. The reverse isn't guaranteed.

Mutually independent mode produces both properties showing Yes by construction. Other modes check these conditions against computed probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading Three-Circle Venn Diagrams`,
      content: `The calculator generates **three-circle Venn diagrams** for every probability, using three overlapping circles representing events A, B, and C. Circle positioning creates eight distinct regions, each corresponding to one of the fundamental event combinations.

**Circle A** (left-top) represents event A. **Circle B** (right-top) represents event B. **Circle C** (bottom-center) represents event C. The three circles overlap creating a characteristic three-way Venn diagram with a central triangular region where all three intersect.

**Central triangle** (all three circles overlap): P(A∩B∩C) - all three events occur. This is the most constrained region, requiring satisfaction of all three events simultaneously.

**Three lens-shaped regions** (two circles overlap): P(A∩B∩C') where A and B overlap but not C, P(A∩C∩B') where A and C overlap but not B, P(B∩C∩A') where B and C overlap but not A. These regions show pairwise occurrence without the third event.

**Three crescent regions** (single circle only): P(A∩B'∩C') inside circle A only, P(B∩A'∩C') inside circle B only, P(C∩A'∩B') inside circle C only. These represent exactly one event occurring.

**Exterior region** (outside all circles): P(A'∩B'∩C') - none of the events occur. This rectangular background region completes the sample space.

**Visual encoding**: The target region shades in blue (opacity 0.7). Conditioning regions (for conditional probabilities) shade light blue (opacity 0.5) showing the restricted sample space. Circle outlines use consistent stroke weights—solid lines (1.5px) for reference circles, thicker lines (2px) for conditioning events. Opacity variations (0.3 for faded, 0.7 for active) guide visual attention to relevant regions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Conditional Probabilities with Three Events`,
      content: `The calculator computes **conditional probabilities given intersections**: P(A|B∩C), P(B|A∩C), and P(C|A∩B). These restrict the sample space to outcomes where two events already occurred, then find the third event's proportion within that restricted space.

**P(A|B∩C)** asks: given both B and C occurred, what's the probability A also occurred? Formula: P(A|B∩C) = P(A∩B∩C) / P(B∩C). The numerator is the triple intersection (all three events). The denominator is the conditioning intersection (B and C). For P(A∩B∩C)=0.06 and P(B∩C)=0.12, get P(A|B∩C) = 0.06/0.12 = 0.5.

The Venn diagram for P(A|B∩C) highlights circle B and C with light blue (the conditioning set), then darker blue shows the central triangle where A also occurs (numerator). The visual ratio of dark to total light area represents the conditional probability.

**P(B|A∩C)** similarly conditions on A and C occurring: P(B|A∩C) = P(A∩B∩C) / P(A∩C). The denominator is the A-C intersection, numerator is the triple intersection.

**P(C|A∩B)** conditions on A and B occurring: P(C|A∩B) = P(A∩B∩C) / P(A∩B). Denominator is the A-B intersection.

**Important**: These conditionals differ from simple two-event conditionals. P(A|B) uses just one conditioning event, while P(A|B∩C) uses two. The conditioning set is more restrictive—both B and C must occur—so the conditional probability can differ substantially from P(A|B) or P(A|C) individually.

The calculator also computes simple pairwise conditionals: P(A|B), P(A|C), P(B|C), using formulas like P(A|B) = P(A∩B)/P(B). These appear in the Additional Probabilities section alongside unions and intersections.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Step-by-Step Calculations and Formulas`,
      content: `Click any result row to expand **step-by-step calculations** showing derivation formulas. Each calculation follows the pattern: **(1) Formula** stating the probability rule, **(2) Substitution** inserting actual values, **(3) Result** computing the final probability.

**Example - Triple intersection for independent events**: Step 1 shows "P(A∩B∩C) = P(A) × P(B) × P(C) (independent)", stating the multiplication rule. Step 2 shows "P(A∩B∩C) = 0.5 × 0.4 × 0.3", substituting provided probabilities. Step 3 shows "P(A∩B∩C) = 0.0600", the computed probability.

**Example - Region "A only"**: Step 1 shows "P(A ∩ B' ∩ C') = P(A) - P(A∩B) - P(A∩C) + P(A∩B∩C)", the inclusion-exclusion formula for this region. Step 2 substitutes all values. Step 3 computes the result. This formula subtracts both pairwise intersections from P(A), but adds back P(A∩B∩C) because it was subtracted twice.

**Example - Union via inclusion-exclusion**: Step 1 shows the full inclusion-exclusion formula with seven terms. Step 2 substitutes all probabilities. Step 3 performs the arithmetic: addition of individuals, subtraction of pairs, addition of triple. The step-by-step format makes this complex calculation transparent.

**Example - Conditional P(A|B∩C)**: Step 1 shows "P(A|B∩C) = P(A∩B∩C) / P(B∩C)", the conditional probability definition. Step 2 shows division with actual values. Step 3 computes the quotient.

The calculations reference previously computed values, showing dependency chains. P(A|B∩C) references P(A∩B∩C) and P(B∩C), both calculated earlier. This demonstrates how complex probabilities build from simpler ones through probability rules.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Axiom Validation for Three-Event Probabilities`,
      content: `The calculator enforces **probability axioms** specific to three-event configurations. Violations produce detailed error messages identifying which constraint failed.

**Non-negativity for all regions**: All eight Venn diagram regions must have non-negative probability. Each region calculation could theoretically produce negative values if inputs are inconsistent. The validator checks: P(A∩B∩C) ≥ 0, P(A only) ≥ 0, P(B only) ≥ 0, P(C only) ≥ 0, P(A∩B∩C') ≥ 0, P(A∩C∩B') ≥ 0, P(B∩C∩A') ≥ 0, P(none) ≥ 0. Negative probabilities are impossible—they'd represent negative likelihood.

**Triple intersection constraints**: P(A∩B∩C) cannot exceed any pairwise intersection: P(A∩B∩C) ≤ P(A∩B), P(A∩B∩C) ≤ P(A∩C), P(A∩B∩C) ≤ P(B∩C). All three events together is a subset of any two events together. Violation means the claimed triple intersection is too large.

**Pairwise intersection constraints**: Each pairwise intersection cannot exceed its component events: P(A∩B) ≤ min(P(A), P(B)), P(A∩C) ≤ min(P(A), P(C)), P(B∩C) ≤ min(P(B), P(C)). Two events together cannot exceed either event individually.

**Union bounds**: P(A∪B∪C) must satisfy max(P(A), P(B), P(C)) ≤ P(A∪B∪C) ≤ 1. The union covers at least the largest individual event and cannot exceed certainty.

**Inclusion-exclusion consistency**: P(A∪B∪C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) + P(A∩B∩C) must hold exactly (within 0.0001 tolerance). This fundamental relationship connects all seven input probabilities. Violation means the inputs don't describe a valid probability configuration together.

When axioms are violated, all violations appear in a red error box. No results display until inputs satisfy all axioms—this prevents working with impossible probability spaces.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Additional Probabilities: Pairwise Unions and Intersections`,
      content: `Beyond the eight fundamental regions, the calculator computes **pairwise unions and intersections** useful for analyzing relationships between event pairs within the three-event system.

**Pairwise unions**: P(A∪B), P(A∪C), P(B∪C) give probabilities that at least one event in a pair occurs, ignoring the third. Formula: P(A∪B) = P(A) + P(B) - P(A∩B). These are computed using the two-event addition rule even within the three-event context.

**Pairwise intersections**: P(A∩B), P(A∩C), P(B∩C) give probabilities that both events in a pair occur, regardless of the third event. In independent mode, these equal P(A)×P(B), P(A)×P(C), P(B)×P(C). In other modes, they're provided as inputs or derived from other inputs.

**Pairwise conditionals**: P(A|B), P(A|C), P(B|C) give conditional probabilities for pairs. These use simple two-event conditioning: P(A|B) = P(A∩B)/P(B). They differ from triple conditionals like P(A|B∩C) which condition on two events.

**Complements**: P(A'), P(B'), P(C') give probabilities each event doesn't occur. Formula: P(A') = 1 - P(A). Complements ignore whether other events occurred.

The **Additional Probabilities** section displays all these derived probabilities with their Venn diagrams. Pairwise union diagrams shade two circles completely. Pairwise intersection diagrams shade only the lens where two circles overlap. These visualizations help understand how events relate in pairs within the three-event framework.

These probabilities are useful because real scenarios often involve questions about subsets of the three events: "What if we only care about A and B?", "What's the coverage if either A or C happens?" The calculator provides these marginal views automatically.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Interpreting Event Properties for Three Events`,
      content: `The **Event Properties** panel shows three key relationships: mutual independence, pairwise independence, and mutual exclusivity.

**Mutually Independent** shows "Yes" when P(A∩B∩C) = P(A)×P(B)×P(C) AND all three pairwise intersections multiply: P(A∩B) = P(A)×P(B), P(A∩C) = P(A)×P(C), P(B∩C) = P(B)×P(C). This is the strongest independence property—all four intersection probabilities factor into products. Events are completely unrelated; knowing any subset doesn't inform the others.

**Pairwise Independent** shows "Yes" when all three pairs are independent: P(A∩B) = P(A)×P(B), P(A∩C) = P(A)×P(C), P(B∩C) = P(B)×P(C), even if P(A∩B∩C) ≠ P(A)×P(B)×P(C). The pairs are independent but the triple isn't. This weaker property occurs in certain probability puzzles where pairs behave independently but the three together don't factor.

**Mutually Exclusive** shows "Yes" when P(A∩B∩C) = 0 (within 0.0001 tolerance). The three events cannot occur simultaneously. Note: this doesn't require pairwise mutual exclusivity. Events can overlap in pairs but not all three together.

**Relationships**: If mutually independent is "Yes", then pairwise independent is automatically "Yes" (mutual independence implies pairwise independence). If mutually exclusive is "Yes" and all events have positive probability, then neither independence property holds—mutual exclusivity contradicts independence for nonzero probabilities.

The properties section helps verify mode assumptions. Independent mode produces mutual independence "Yes" by construction. Mutually exclusive mode produces mutual exclusivity "Yes". Other modes check these properties against computed probabilities—you might discover events are actually independent even though you didn't use independent mode.

For comprehensive theory on three-event probability including proofs, examples, and extensions to n events, see **three events probability theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Probability Tools and Calculators`,
      content: `**Two Events Probability Calculator** - Calculate probabilities for two events with five modes including independent, conditional, and mutually exclusive.

**Conditional Probability Calculator** - Interactive contingency table for computing P(A|B) with frequency counts and probability normalization.

**Bayes' Theorem Calculator** - Calculate posterior probabilities with multiple modes including medical testing and hypothesis updating.

**Joint Probability Calculator** - 2×2 joint probability table with automatic marginal calculation and validation.

**Venn Diagram Generator** - Create custom Venn diagrams for 2-3 sets with area-proportional regions and labels.

**Probability Tree Diagram Tool** - Build probability trees for sequential events with automatic branch probability calculation.

**Independence Test Calculator** - Determine statistical independence from observed frequency data with chi-square tests.

**Set Operations Calculator** - Compute unions, intersections, complements, and differences for multiple sets.

**Combination and Permutation Calculator** - Compute counting fundamentals for probability problems with distinct and repeated elements.

**Expected Value Calculator** - Calculate expected values, variance, and standard deviation for discrete probability distributions.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is the inclusion-exclusion principle for three events?",
      answer: "The inclusion-exclusion principle calculates P(A∪B∪C) by adding individual probabilities, subtracting pairwise intersections to correct double-counting, then adding back the triple intersection: P(A∪B∪C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) + P(A∩B∩C). This ensures each outcome in the union is counted exactly once despite overlaps."
    },
    obj2: {
      question: "What's the difference between mutual independence and pairwise independence?",
      answer: "Pairwise independence means each pair of events is independent: P(A∩B)=P(A)×P(B), P(A∩C)=P(A)×P(C), P(B∩C)=P(B)×P(C). Mutual independence additionally requires P(A∩B∩C)=P(A)×P(B)×P(C). Mutual independence is stronger—it implies pairwise independence, but three events can be pairwise independent yet not mutually independent."
    },
    obj3: {
      question: "How many regions are in a three-event Venn diagram?",
      answer: "A three-event Venn diagram has 8 regions: (1) all three events, (2-4) three regions where exactly two events occur, (5-7) three regions where exactly one event occurs, (8) no events occur. These eight mutually exclusive regions partition the entire sample space and their probabilities sum to 1."
    },
    obj4: {
      question: "How do I calculate P(A∩B∩C) if I know P(A∪B∪C)?",
      answer: "Use the inclusion-exclusion principle rearranged: P(A∩B∩C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) - P(A∪B∪C). You need all three pairwise intersections plus the union to solve for the triple intersection. The 'Given P(A∪B∪C)' mode performs this calculation."
    },
    obj5: {
      question: "What does P(A|B∩C) mean and how is it different from P(A|B)?",
      answer: "P(A|B∩C) is the conditional probability of A given both B and C occurred, calculated as P(A∩B∩C)/P(B∩C). P(A|B) is the probability of A given only B occurred, calculated as P(A∩B)/P(B). The conditioning sets differ—P(A|B∩C) has a more restrictive condition (both B and C) so can differ substantially from P(A|B)."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Three Events Probability Calculator",
      "description": "Calculate probabilities for three events with five modes including mutually independent, mutually exclusive, and inclusion-exclusion. Features 8-region Venn diagrams and step-by-step solutions.",
      "url": "https://www.learnmathclass.com/probability/calculators/three-events",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Five calculation modes: mutually independent, mutually exclusive, given intersection, given union, given pairwise",
        "Complete 8-region Venn diagram probability calculations",
        "Inclusion-exclusion principle implementation",
        "Three-circle Venn diagrams for all probabilities",
        "Pairwise and triple intersection calculations",
        "Conditional probabilities given two events",
        "Mutual vs pairwise independence detection",
        "Expandable step-by-step calculations",
        "Comprehensive axiom validation",
        "Visual three-way Venn diagram representations"
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
          "name": "Three Events",
          "item": "https://www.learnmathclass.com/probability/calculators/three-events"
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
        title: "Three Events Probability Calculator | 8-Region Venn Diagram",
        description: "Calculate probabilities for three events with inclusion-exclusion, 8-region Venn diagrams, and independence detection. Step-by-step solutions.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/three-events",
        name: "Three Events Probability Calculator"
      },
    }
  }
}

export default function ThreeEventsCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
        <meta property="og:type" content="article" />
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
      
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'0px'}}>Three Events Probability Calculator</h1>
      <br/>
      <ThreeEventsProbabilityCalculator className="calculator-widget"/>
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