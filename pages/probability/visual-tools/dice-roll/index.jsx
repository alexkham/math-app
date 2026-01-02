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
// import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
// import DiceRollSimulator from '@/app/components/probability/dice-roll/DiceRollSimulator'
// import DiceSampleSpaceVisualizer from '@/app/components/probability/sampleSpace/DiceSampleSpaceVisualizer'


// export async function getStaticProps(){

//   const keyWords = [
//   'dice probability calculator',
//   'dice roll simulator',
//   'sum distribution calculator',
//   'dice probability visualizer',
//   'multiple dice probability',
//   'dice rolling statistics',
//   'expected value dice',
//   'dice sample space',
//   'probability distribution dice',
//   'interactive dice simulator'
// ]
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
//         url: "/probability/visual-tools/dice-roll",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function DiceRollVisualizersPage({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'-50px'}}>Dice Roll Visualizers</h1>
//    <br/>
//    <GenericMultiComponentFrame
//     components={[
           
//     { id: 1, name: 'Dice Roll Probability Simulator', key: 'simulator', component: DiceRollSimulator },
//     { id: 2, name: 'Dice Sample Space Explorer/Calculator', key: 'sampleSpace', component: DiceSampleSpaceVisualizer },
            
             
//            ]}
//            initialActive={1}
//            buttonMinWidth="160px"
//            primaryColor="#007bff"
   
   
//    />
//    <br/>
//    {/* <DiceRollSimulator/>
//    <DiceSampleSpaceVisualizer/> */}
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
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import DiceRollSimulator from '@/app/components/probability/dice-roll/DiceRollSimulator'
import DiceSampleSpaceVisualizer from '@/app/components/probability/sampleSpace/DiceSampleSpaceVisualizer'


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
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Dice Roll Simulator | Probability Calculator & Visualizer",
        description: "Simulate dice rolls with sum distributions, convergence graphs, and sample space exploration. Visualize dice probability interactively.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/dice-roll",
        name: "Dice Roll Probability Simulator and Calculator"
      },
    }
  }
}

export default function DiceRollVisualizersPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'-50px',marginBottom:'-50px'}}>Dice Roll Visualizers</h1>
      <br/>
      <GenericMultiComponentFrame
        components={[
          { id: 1, name: 'Dice Roll Probability Simulator', key: 'simulator', component: DiceRollSimulator },
          { id: 2, name: 'Dice Sample Space Explorer/Calculator', key: 'sampleSpace', component: DiceSampleSpaceVisualizer },
        ]}
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