// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'


// export async function getStaticProps(){



//   const keyWords=['','','','','']




  
//     const cardsData=[

//        {
//     title: "Probability Distributions Explorer",
//     description: "Compare probability distributions side-by-side with interactive visualization tools. Switch between discrete and continuous distributions to understand their unique properties, parameters, and real-world applications.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 2,
//    image:'/images/magnifying_glass.jpg',
//     href: "/probability/visual-tools/distributions"
//   },
//        {
//     title: "Coin Toss Visualizers",
//     description: "Explore coin toss probability with interactive simulators and calculators. Visualize sample spaces, run probability simulations, and watch the Law of Large Numbers in action with our coin flip tools.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 2,
//    image:'/images/coin.jpg',
//     href: "/probability/visual-tools/coin-toss"
//   },
//    {
//     title: "Dice Roll Visualizers",
//     description: "Calculate dice probabilities with interactive simulators and sample space explorers. Roll single or multiple dice, visualize sum distributions, and explore all possible outcomes with statistical analysis.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 2,
//      image:'/images/probability3.jpg',
//     href: "/probability/visual-tools/dice-roll"
//   },
//    {
//     title: "Venn Diagrams Visualizers",
//     description: "Explore probability event relationships with interactive Venn diagram visualizations. Understand intersections, unions, and complements through dynamic 2-set and 3-set visual examples.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 7,
//      image:'/images/set_theory2.jpg',
//     href: "/probability/visual-tools/venn-diagrams"
//   },
//    {
//     title: "Conditional Probability Visualizers",
//     description: "Explore probability event relationships with interactive Venn diagram visualizations. Understand intersections, unions, and complements through dynamic 2-set and 3-set visual examples.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 7,
//      image:'/images/conditional-probability2.jpg',
//     href: "/probability/visual-tools/conditional-probability"
//   },
//    {
//     title: "Expected Value Visualizers",
//     description: "Learn expected value through interactive visualizations. See how probability weights combine with outcomes to determine long-run averages.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 7,
//      image:'/images/capital_e1.jpg',
//     href: "/probability/visual-tools/expected-value"
//   },
//    {
//     title: "Variance Visualizer",
//     description: "Interactive tool for understanding variance through visual exploration. Drag data points to see real-time variance calculations, toggle between population and sample variance, and watch step-by-step breakdowns of how variance measures data spread.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 7,
//      image:'/images/variance.jpg',
//     href: "/probability/visual-tools/variance"
//   },
//    {
//     title: "Probability Inequalities Visualizers",
//     description: "Explore visually fundamental probability inequalities including Markov's and Chebyshev's inequalities with interactive calculators and visualizations. Understand how these powerful bounds provide estimates for tail probabilities and apply them to real-world scenarios.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 7,
//      image:'/images/inequality.jpg',
//     href: "/probability/visual-tools/inequalities"
//   },
//    {
//     title: "Probability Function Visualizers",
//     description: "Visualize probability functions with interactive visualizers for both discrete and continuous distributions. Adjust parameters in real-time to see how PMF and PDF curves change for Binomial, Poisson, Normal, Exponential, and other distributions.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 7,
//      image:'/images/probability-function.jpg',
//     href: "/probability/visual-tools/probability-function"
//   },
//    {
//     title: "Cumulative Probability Function(CDF) Visualizers",
//     description: "Understand cumulative distribution functions through interactive charts for discrete (Binomial, Poisson, Geometric) and continuous distributions (Normal, Exponential, Uniform). Adjust parameters to see how probability accumulates across different distributions with real-time CDF visualizations.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 7,
//      image:'/images/accumulate.jpg',
//     href: "/probability/visual-tools/cdf"
//   },
//    {
//     title: "Total Probability Visualizer",
//     description: "Calculate marginal probabilities using the law of total probability with an interactive tree diagram. The tool shows how probabilities flow through partitioned sample spaces, displaying joint probabilities, conditional probabilities, and Bayes' theorem calculations in real-time. Adjust partition elements and probability values to see immediate updates across all related calculations.",
//     backgroundColor: "#4F46E5", // Indigo
//     textColor: "#ffffff",
//     ratio: 7,
//      image:'/probability/total.jpg',
//     href: "/probability/visual-tools/total-probability"
//   },
//   //  {
//   //   title: "Analytics Dashboard",
//   //   description: "Comprehensive analytics dashboard with real-time data visualization and reporting tools.",
//   //   backgroundColor: "#4F46E5", // Indigo
//   //   textColor: "#ffffff",
//   //   ratio: 2,
//   //   href: "/analytics"
//   // },
//   //  {
//   //   title: "Analytics Dashboard",
//   //   description: "Comprehensive analytics dashboard with real-time data visualization and reporting tools.",
//   //   backgroundColor: "#4F46E5", // Indigo
//   //   textColor: "#ffffff",
//   //   ratio: 2,
//   //   href: "/analytics"
//   // },

//     ]


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
//         title: "Probability Visual Tools | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools",
//          name: "name"
//       },
//       cardsData,
        
//        }
//     }
//    }

// export default function ProbabilityVisualToolsPage({seoData,sectionsContent , 
//   introContent, cardsData}) {




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
//    <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>Probability Visual Tools</h1>
//    <br/>
//    <ModernCardsGroup items={cardsData}/>
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
import '../../../pages/pages.css'
import Head from 'next/head'
import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'


export async function getStaticProps(){

  const keyWords = [
    'probability visualization tools',
    'interactive probability tools',
    'probability visualizer',
    'visual probability learning',
    'probability diagrams',
    'probability distribution visualizer',
    'conditional probability tools',
    'probability tree diagram',
    'Venn diagram probability',
    'expected value visualizer',
    'probability interactive learning',
    'statistical visualization tools',
    'probability teaching tools',
    'visual probability calculator',
    'probability concept visualization'
  ]

  const cardsData = [
    {
      title: "Probability Distributions Explorer",
      description: "Compare probability distributions side-by-side with interactive visualization tools. Switch between discrete and continuous distributions to understand their unique properties, parameters, and real-world applications.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 2,
      image: '/images/magnifying_glass.jpg',
      href: "/probability/visual-tools/distributions"
    },
    {
      title: "Coin Toss Visualizers",
      description: "Interactive coin toss simulators demonstrate probability through repeated trials. Run probability simulations, analyze sample spaces, and watch the Law of Large Numbers emerge with real-time coin flip statistics.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 2,
      image: '/images/coin.jpg',
      href: "/probability/visual-tools/coin-toss"
    },
    {
      title: "Dice Roll Visualizers",
      description: "Calculate dice probabilities with interactive simulators and sample space explorers. Roll single or multiple dice, visualize sum distributions, and explore all possible outcomes with statistical analysis.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 2,
      image: '/images/probability3.jpg',
      href: "/probability/visual-tools/dice-roll"
    },
    {
      title: "Venn Diagrams Visualizers",
      description: "Interactive Venn diagrams reveal relationships between probability events. Understand intersections, unions, and complements through dynamic 2-set and 3-set configurations with real-time probability calculations.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/images/set_theory2.jpg',
      href: "/probability/visual-tools/venn-diagrams"
    },
    {
      title: "Conditional Probability Visualizers",
      description: "Explore conditional probability through tree diagrams, Venn diagrams, waffle charts, and contingency tables. See how P(A|B) changes with different visualization methods and interactive examples.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/images/conditional-probability2.jpg',
      href: "/probability/visual-tools/conditional-probability"
    },
    {
      title: "Expected Value Visualizers",
      description: "Learn expected value through interactive visualizations. See how probability weights combine with outcomes to determine long-run averages.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/images/capital_e1.jpg',
      href: "/probability/visual-tools/expected-value"
    },
    {
      title: "Variance Visualizer",
      description: "Interactive tool for understanding variance through visual exploration. Drag data points to see real-time variance calculations, toggle between population and sample variance, and watch step-by-step breakdowns of how variance measures data spread.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/images/variance.jpg',
      href: "/probability/visual-tools/variance"
    },
    {
      title: "Probability Inequalities Visualizers",
      description: "Interactive visualizers demonstrate Markov's and Chebyshev's inequalities with dynamic probability bound calculations. Adjust parameters to see how these fundamental theorems provide tail probability estimates across different distributions.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/images/inequality.jpg',
      href: "/probability/visual-tools/inequalities"
    },
    {
      title: "Probability Function Visualizers",
      description: "Visualize probability functions with interactive visualizers for both discrete and continuous distributions. Adjust parameters in real-time to see how PMF and PDF curves change for Binomial, Poisson, Normal, Exponential, and other distributions.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/images/probability-function.jpg',
      href: "/probability/visual-tools/probability-function"
    },
    {
      title: "Cumulative Probability Function(CDF) Visualizers",
      description: "Understand cumulative distribution functions through interactive charts for discrete (Binomial, Poisson, Geometric) and continuous distributions (Normal, Exponential, Uniform). Adjust parameters to see how probability accumulates across different distributions with real-time CDF visualizations.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/images/accumulate.jpg',
      href: "/probability/visual-tools/cdf"
    },
    {
      title: "Total Probability Visualizer",
      description: "Calculate marginal probabilities using the law of total probability with an interactive tree diagram. The tool shows how probabilities flow through partitioned sample spaces, displaying joint probabilities, conditional probabilities, and Bayes' theorem calculations in real-time.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/probability/total.jpg',
      href: "/probability/visual-tools/total-probability"
    },
    {
      title: "Contingency Tables Visualizer",
      description: "Interactive contingency tables for visualizing joint, marginal, and conditional probabilities. Click cells and conditional rows to highlight relationships and see how Bayes' theorem connects different probability perspectives. Available in 2×2, 2×3, 2×4, and 3×3 configurations with detailed explanations for each state.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '/probability/cross table.jpg',
      href: "/probability/visual-tools/contingency-tables"
    },
    
  ]

  const faqQuestions = {
    obj1: {
      question: "What probability visualization tools are available?",
      answer: "The collection includes interactive visualizers for distributions, coin tosses, dice rolls, Venn diagrams, conditional probability, expected value, variance, probability inequalities, probability functions (PMF/PDF), cumulative distribution functions (CDF), and the law of total probability. Each tool provides dynamic visualizations with adjustable parameters."
    },
    obj2: {
      question: "How do probability visualization tools help learning?",
      answer: "Visual tools transform abstract probability concepts into concrete, interactive experiences. By manipulating parameters and seeing immediate visual feedback, learners develop intuition about how probability works. The tools make connections between formulas and their graphical representations explicit and memorable."
    },
    obj3: {
      question: "Which visualization tool should I use for conditional probability?",
      answer: "The Conditional Probability Visualizers page offers four different approaches: tree diagrams for sequential events, Venn diagrams for set relationships, waffle charts for proportional thinking, and contingency tables for categorical data. Choose based on your problem type or learning preference."
    },
    obj4: {
      question: "Are these probability tools free to use?",
      answer: "Yes, all probability visualization tools are completely free with no registration required. They run directly in your browser and include interactive controls, real-time calculations, and educational explanations to support learning."
    },
    obj5: {
      question: "Can I use these tools for teaching probability?",
      answer: "Absolutely. These visualization tools are designed for both self-study and classroom use. Teachers can demonstrate probability concepts during lectures, and students can interact with the tools to build understanding through hands-on exploration of parameters and immediate visual feedback."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Probability Visual Tools",
      "description": "Interactive visualization tools for learning probability including distribution explorers, conditional probability visualizers, Venn diagrams, probability trees, and statistical calculators with real-time visual feedback.",
      "url": "https://www.learnmathclass.com/probability/visual-tools",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Probability Visualization"
      },
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Probability Distributions Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions",
          "description": "Interactive tool for comparing discrete and continuous probability distributions"
        },
        {
          "@type": "WebPage",
          "name": "Coin Toss Visualizers",
          "url": "https://www.learnmathclass.com/probability/visual-tools/coin-toss",
          "description": "Coin toss probability simulators and Law of Large Numbers demonstrations"
        },
        {
          "@type": "WebPage",
          "name": "Dice Roll Visualizers",
          "url": "https://www.learnmathclass.com/probability/visual-tools/dice-roll",
          "description": "Interactive dice probability calculators and sample space explorers"
        },
        {
          "@type": "WebPage",
          "name": "Venn Diagrams Visualizers",
          "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams",
          "description": "Interactive Venn diagrams for probability event relationships"
        },
        {
          "@type": "WebPage",
          "name": "Conditional Probability Visualizers",
          "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability",
          "description": "Multiple visualization methods for understanding conditional probability"
        },
        {
          "@type": "WebPage",
          "name": "Expected Value Visualizers",
          "url": "https://www.learnmathclass.com/probability/visual-tools/expected-value",
          "description": "Interactive tools for learning expected value calculations"
        },
        {
          "@type": "WebPage",
          "name": "Variance Visualizer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/variance",
          "description": "Visual exploration of variance with draggable data points"
        },
        {
          "@type": "WebPage",
          "name": "Probability Inequalities Visualizers",
          "url": "https://www.learnmathclass.com/probability/visual-tools/inequalities",
          "description": "Interactive demonstrations of Markov's and Chebyshev's inequalities"
        },
        {
          "@type": "WebPage",
          "name": "Probability Function Visualizers",
          "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function",
          "description": "PMF and PDF visualizations for various distributions"
        },
        {
          "@type": "WebPage",
          "name": "Cumulative Distribution Function Visualizers",
          "url": "https://www.learnmathclass.com/probability/visual-tools/cdf",
          "description": "Interactive CDF charts for discrete and continuous distributions"
        },
        {
          "@type": "WebPage",
          "name": "Total Probability Visualizer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/total-probability",
          "description": "Law of total probability demonstrated with interactive tree diagrams"
        }
      ]
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Probability Distributions Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions",
            "applicationCategory": "EducationalApplication",
            "description": "Compare discrete and continuous probability distributions side-by-side"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Coin Toss Visualizers",
            "url": "https://www.learnmathclass.com/probability/visual-tools/coin-toss",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive coin toss simulators and probability calculators"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Dice Roll Visualizers",
            "url": "https://www.learnmathclass.com/probability/visual-tools/dice-roll",
            "applicationCategory": "EducationalApplication",
            "description": "Dice probability calculators with sample space visualization"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Venn Diagrams Visualizers",
            "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive Venn diagrams for probability event relationships"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Conditional Probability Visualizers",
            "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability",
            "applicationCategory": "EducationalApplication",
            "description": "Multiple visualization methods for conditional probability"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Expected Value Visualizers",
            "url": "https://www.learnmathclass.com/probability/visual-tools/expected-value",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive expected value learning tools"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Variance Visualizer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/variance",
            "applicationCategory": "EducationalApplication",
            "description": "Visual variance calculator with draggable data points"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Probability Inequalities Visualizers",
            "url": "https://www.learnmathclass.com/probability/visual-tools/inequalities",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive Markov's and Chebyshev's inequality demonstrations"
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Probability Function Visualizers",
            "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function",
            "applicationCategory": "EducationalApplication",
            "description": "PMF and PDF visualizations for various distributions"
          }
        },
        {
          "@type": "ListItem",
          "position": 10,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Cumulative Distribution Function Visualizers",
            "url": "https://www.learnmathclass.com/probability/visual-tools/cdf",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive CDF charts for multiple distributions"
          }
        },
        {
          "@type": "ListItem",
          "position": 11,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Total Probability Visualizer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/total-probability",
            "applicationCategory": "EducationalApplication",
            "description": "Law of total probability with interactive tree diagrams"
          }
        }
      ]
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
          "name": "Probability Visual Tools",
          "item": "https://www.learnmathclass.com/probability/visual-tools"
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

  const sectionsContent = {
    obj1: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    },
    obj2: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    },
    obj3: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    },
    obj4: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    },
    obj5: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
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
      cardsData,
      faqQuestions,
      schemas,
      seoData: {
        title: "Probability Visual Tools - Interactive Visualizers | Learn Math Class",
        description: "Interactive probability visualization tools including distributions, conditional probability, Venn diagrams, expected value, variance, and probability functions with real-time feedback.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools",
        name: "Probability Visual Tools"
      }
    }
  }
}

export default function ProbabilityVisualToolsPage({seoData, sectionsContent, introContent, cardsData, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '1',
      title: 'section1',
      link: '',
      content: ''
    },
    {
      id: '2',
      title: 'section2',
      link: '',
      content: ''
    },
    {
      id: '',
      title: '',
      link: '',
      content: ''
    }
  ]

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
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.collectionPage)
          }}
        />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.itemList)
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
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>Probability Visual Tools</h1>
      <br/>
      <ModernCardsGroup items={cardsData}/>
      <br/>
      {/* <SectionTableOfContents sections={genericSections}/> */}
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
      {/* <Sections sections={genericSections}/> */}
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}