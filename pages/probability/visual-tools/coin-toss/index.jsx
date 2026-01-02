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
// import CoinFlipperSimulator from '@/app/components/probability/coin-toss/CoinTossProbabilitySimulator'
// import CoinSampleSpaceVisualizer from '@/app/components/probability/sampleSpace/CoinSampleSpaceVisualizer'


// export async function getStaticProps(){

//   const keyWords = [
//   'coin toss probability',
//   'coin flip simulator',
//   'sample space calculator',
//   'law of large numbers',
//   'probability simulator',
//   'coin toss outcomes',
//   'expected value calculator',
//   'variance calculator',
//   'probability visualizer',
//   'interactive probability tool'
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
//         url: "/probability/visual-tools/coin-toss",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function CointTossPage({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'-50px'}}>Coin Toss</h1>
//    <br/>
//    <GenericMultiComponentFrame
//     components={[
           
//     { id: 1, name: 'Coin Toss Probability Simulator', key: 'simulator', component: CoinFlipperSimulator },
//     { id: 2, name: 'Coin Toss Sample Space Explorer/Calculator', key: 'sampleSpace', component: CoinSampleSpaceVisualizer },
//             //   { id: 3, name: 'Discrete Distibutions Calculator',  href: '/probability/calculators/discrete-distributions'  },
//             //   { id: 4, name: 'Continuous Distibutions Calculator',  href: '/probability/calculators/continuous-distributions'  },
//             //   { id: 5, name: 'Joint Probability Calculator',  href: '/probability/calculators/joint-probability'  },
             
   
//              //  { id: 4, name: 'Introduction', content: introContent2 },
             
             
//            ]}
//            initialActive={1}
//            buttonMinWidth="160px"
//            primaryColor="#007bff"
   
//    />
//    <br/>
//    {/* <CoinFlipperSimulator/>
//    <CoinSampleSpaceVisualizer/> */}
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
import CoinFlipperSimulator from '@/app/components/probability/coin-toss/CoinTossProbabilitySimulator'
import CoinSampleSpaceVisualizer from '@/app/components/probability/sampleSpace/CoinSampleSpaceVisualizer'


export async function getStaticProps(){

  const keyWords = [
    'coin toss probability',
    'coin flip simulator',
    'sample space calculator',
    'law of large numbers',
    'probability simulator',
    'coin toss outcomes',
    'expected value calculator',
    'variance calculator',
    'probability visualizer',
    'interactive probability tool',
    'coin flip statistics',
    'convergence visualization',
    'Bernoulli trial',
    'random experiment',
    'probability convergence'
  ]

  const sectionsContent = {
    obj1: {
      title: `The Coin Toss Probability Model`,
      content: `The coin toss represents the simplest probability model: a **Bernoulli trial** with exactly two possible outcomes. When you flip a fair coin, heads and tails each have probability 0.5, assuming the coin has no bias and the flip is truly random. This binary structure makes coin tosses the foundational example for understanding probability, independence, and random processes.

Real coins might have slight biases due to weight distribution or design asymmetry, which is why the simulator allows adjusting $P(\\text{Heads})$ from 0% to 100%. A fair coin uses 50%, but you can model biased coins by changing this parameter. Each flip is independent—previous results don't affect future outcomes, a property that often surprises people who expect patterns in randomness.

Multiple coin tosses create compound experiments with $2^n$ possible outcomes for n coins. The sample space grows exponentially: 2 outcomes for one coin, 4 for two coins, 8 for three coins, and so on. Understanding this expansion is crucial for calculating probabilities of complex events.

For comprehensive theory on coin toss probability including mathematical foundations and applications, see **coin toss probability model**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Getting Started with the Simulator`,
      content: `The simulator displays an animated coin in the center with controls on the right. The coin changes color to show the result: gold for heads, silver for tails. Begin by setting your desired probability of heads using the slider at the bottom—default is 50% for a fair coin. Once flipping starts, this setting locks until you reset.

Click any flip button to run simulations. "Flip 1" shows the animation clearly. "Flip 10" through "Flip 10K" batch-process multiple flips instantly. The convergence graph updates after each batch, showing how your results compare to expected probability. All statistics recalculate automatically.

The auto-flip mode runs continuous simulations. Click "Auto" to start, adjust speed with the slider (10-500ms between flips), then click "Stop" when ready. Use "Reset" to clear all data and start fresh with a new probability setting.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Running Different Simulation Types`,
      content: `Single flips show individual coin behavior with full animation. Use "Flip 1" when demonstrating probability basics or watching the physical flip. The coin rotates 720 degrees and changes color based on the outcome. This mode best illustrates randomness at the individual trial level.

Batch flips (10, 100, 1K, 10K) demonstrate aggregate behavior without watching every flip. Click "Flip 100" to see how results cluster around expected values. Use larger batches to demonstrate convergence—"Flip 10K" shows the Law of Large Numbers in action as the proportion stabilizes near the theoretical probability.

Auto-flip mode runs indefinitely until stopped. Adjust speed to match your demonstration needs: slower (500ms) for classroom observation, faster (10ms) for rapid convergence. Watch the graph build in real-time as flips accumulate. This mode excels for showing long-run behavior.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Understanding the Convergence Graph`,
      content: `The convergence graph plots proportion of heads (y-axis) against number of flips (x-axis). The blue line shows actual results, while the red dashed line marks expected probability. Blue dashed curves above and below represent ±2 standard error confidence bands—the range where results should fall about 95% of the time.

Early in the simulation, the blue line jumps erratically. With few flips, randomness dominates and proportions swing widely. As flips increase, the line stabilizes and converges toward the red line. This visual demonstrates the Law of Large Numbers: short-run volatility versus long-run predictability.

If the actual proportion stays within the confidence bands, results are statistically normal. Excursions outside the bands indicate unusual runs but aren't necessarily impossible—just improbable. The graph updates dynamically, showing the complete history of how probability estimates improved with more data.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Interpreting Statistics and Metrics`,
      content: `The statistics panel shows total flips, actual heads percentage, and counts for both outcomes. "Expected" displays $n \\times p$ where n is total flips and p is probability of heads. "Distance" measures how far the actual proportion deviates from expected, expressed as percentage points.

Variance equals $np(1-p)$, measuring spread in the number of heads. Standard deviation (SD) is the square root of variance, giving dispersion in the same units as counts. These values increase with more flips because absolute variability grows even as relative proportion stabilizes.

The z-score standardizes deviation: $(\\text{actual heads} - \\text{expected}) / \\text{SD}$. Values between -2 and 2 are normal. Scores beyond ±2 indicate unusual results (less than 5% chance). Scores beyond ±3 are rare (less than 0.3% chance). The label "(Unusual!)" or "(Normal)" provides quick interpretation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Tracking Streaks and Patterns`,
      content: `The streaks panel displays three metrics. "Current" shows the ongoing run of the same outcome—if the last five flips were all heads, it displays 5 Current H. This resets whenever the outcome changes. "Longest H" and "Longest T" track the maximum consecutive runs for each outcome across the entire simulation.

Long streaks often surprise people who expect randomness to "balance out" quickly. Even with a fair coin, streaks of 5-7 identical outcomes occur regularly in sequences of 50-100 flips. Streaks of 10+ are rare but not impossible. The tracker helps dispel the gambler's fallacy—the belief that tails is "due" after a long run of heads.

Recent flips display the last 50 outcomes as colored circles: gold for heads, silver for tails. Read from left to right to see the sequence. This visual helps identify patterns, clusters, and the overall texture of randomness. True randomness often looks clumpier than people expect.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Using the Sample Space Explorer`,
      content: `Select the number of coins (1-6) to generate all possible outcomes. For 3 coins, you'll see 8 possibilities (HHH, HHT, HTH, HTT, THH, THT, TTH, TTT). Each outcome displays as a row of coin images showing the specific sequence. The total grows exponentially: 2 outcomes for 1 coin, 4 for 2 coins, 8 for 3 coins, up to 64 for 6 coins.

Choose a highlight condition to filter outcomes meeting specific criteria. The tool calculates how many outcomes satisfy your condition and displays the probability. For example, selecting "Exactly 2 heads" with 3 coins highlights HHT, HTH, and THH—showing 3/8 = 37.5% probability.

Enable "Show Probabilities" to see individual outcome probabilities below each sequence. For fair coins, each outcome has equal probability $1/2^n$. The counts show H and T totals for that specific sequence. This feature helps understand that while all outcomes are equally likely, not all event totals are.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Setting Highlight Conditions`,
      content: `"Heads count" conditions filter by the number of heads. Choose "Exactly", "At least", "At most", "More than", or "Less than", then specify the count. With 4 coins, "At least 3 heads" highlights HHHH, HHHT, HHTH, HTHH, and THHH—5 outcomes giving 5/16 = 31.25% probability.

"Runs/Streaks" highlights sequences containing consecutive identical outcomes. Select heads or tails, then set minimum length. "Runs of 3 heads" with 4 coins finds HHHH and HHHT, THHH. This demonstrates how rare long runs become as length increases.

Pattern conditions include "More heads than tails" (majority), "Equal heads and tails" (only possible with even coin counts), "Alternating pattern" (HTHTH...), and "All same" (all heads or all tails). Each condition teaches different aspects of combinatorial probability. The probability calculation updates automatically based on highlighted outcomes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The Law of Large Numbers`,
      content: `The Law of Large Numbers states that as the number of trials increases, the sample proportion converges to the theoretical probability. With few flips, you might get 7 heads in 10 flips (70%), far from the expected 50%. But with 10,000 flips, you'll typically see close to 5,000 heads—within 1-2% of expected.

This doesn't mean individual outcomes become more predictable. The 10,001st flip still has exactly 50% chance of heads regardless of previous results. What changes is the aggregate: random fluctuations get diluted by the sheer volume of data. The proportion stabilizes even though absolute deviation grows.

The convergence graph visualizes this principle. Early wild swings smooth out as the blue line gravitates toward the red expected value line. The confidence bands narrow proportionally with $1/\\sqrt{n}$, showing increasing precision of probability estimates. This fundamental theorem underlies all of statistical inference.

For detailed mathematical treatment of convergence and the Law of Large Numbers, see **law of large numbers theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Concepts`,
      content: `**Dice Roll Simulators** - Explore probability with six-sided and custom dice, including sum distributions and multiple dice experiments.

**Binomial Distribution Calculator** - Calculate exact probabilities for n independent trials with fixed success probability, the mathematical model underlying coin tosses.

**Expected Value Visualizers** - Understand how probability weights combine with outcomes to determine long-run averages.

**Probability Distribution Explorers** - Compare different discrete and continuous probability models with interactive parameters.

**Bernoulli Trial Theory** - Learn the mathematical foundation of single binary experiments that coin tosses exemplify.

**Sample Space Calculators** - Explore sample spaces for various probability experiments beyond coin tosses.

**Random Variable Simulators** - Generate samples from different probability distributions to observe empirical behavior.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is the probability of getting heads in a coin toss?",
      answer: "For a fair coin, the probability of heads is exactly 0.5 or 50%. This assumes the coin has no bias and the flip is truly random. Real coins may have slight biases, which is why the simulator allows adjusting P(Heads) from 0% to 100% to model both fair and biased coins."
    },
    obj2: {
      question: "How does the Law of Large Numbers apply to coin tosses?",
      answer: "The Law of Large Numbers states that as you flip more coins, the proportion of heads converges to the theoretical probability (50% for a fair coin). With few flips, results vary widely—you might get 70% or 30% heads. With thousands of flips, the proportion stabilizes very close to 50%, though individual flips remain unpredictable."
    },
    obj3: {
      question: "What does the z-score tell you in coin toss simulations?",
      answer: "The z-score measures how many standard deviations your results are from expected. Values between -2 and 2 are normal (about 95% of the time). Scores beyond ±2 indicate unusual but possible results. Scores beyond ±3 are rare (less than 0.3% chance). It helps identify whether observed deviations are due to normal randomness or potential bias."
    },
    obj4: {
      question: "How do you calculate the sample space for multiple coin tosses?",
      answer: "The sample space for n coins has 2^n possible outcomes. For 1 coin: 2 outcomes (H, T). For 2 coins: 4 outcomes (HH, HT, TH, TT). For 3 coins: 8 outcomes. Each outcome is equally likely with probability 1/2^n for fair coins. The sample space explorer visualizes all possibilities and calculates probabilities for specific conditions."
    },
    obj5: {
      question: "Why do long streaks occur in random coin tosses?",
      answer: "Long streaks are natural consequences of randomness. In 100 flips of a fair coin, you'll typically see at least one streak of 5-7 identical outcomes. Streaks of 10+ are rare but not impossible. People often underestimate how clumpy true randomness appears, expecting more alternation than actually occurs. Each flip remains independent with 50% probability regardless of previous streaks."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Coin Toss Probability Simulator and Sample Space Calculator",
      "description": "Interactive coin flip simulator demonstrating the Law of Large Numbers with convergence graphs, statistics, and sample space explorer for multiple coins.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/coin-toss",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive coin flip simulator with animated coin display",
        "Single flip and batch simulation modes (1, 10, 100, 1K, 10K flips)",
        "Auto-flip mode with adjustable speed control",
        "Real-time convergence graph showing Law of Large Numbers",
        "Statistical analysis including variance, standard deviation, and z-scores",
        "Streak tracking with longest run detection",
        "Sample space explorer for 1-6 coins with all possible outcomes",
        "Customizable highlight conditions for outcome filtering",
        "Probability calculations for complex events",
        "Adjustable coin bias from 0% to 100% heads probability"
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
          "name": "Coin Toss",
          "item": "https://www.learnmathclass.com/probability/visual-tools/coin-toss"
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
        title: "Coin Toss Simulator | Probability Calculator & Visualizer",
        description: "Simulate coin flips with real-time statistics, convergence graphs, and sample space exploration. Visualize the Law of Large Numbers interactively.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/coin-toss",
        name: "Coin Toss Probability Simulator and Calculator"
      },
    }
  }
}

export default function CoinTossPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'-50px',marginBottom:'-50px'}}>Coin Toss</h1>
      <br/>
      <GenericMultiComponentFrame
        components={[
          { id: 1, name: 'Coin Toss Probability Simulator', key: 'simulator', component: CoinFlipperSimulator },
          { id: 2, name: 'Coin Toss Sample Space Explorer/Calculator', key: 'sampleSpace', component: CoinSampleSpaceVisualizer },
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