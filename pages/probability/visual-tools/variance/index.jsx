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
// import VarianceVisualizer from '@/app/components/probability/variance/VarianceVisualizer'


// export async function getStaticProps(){

//   const keyWords = [
//     'variance calculator',
//     'variance visualizer',
//     'interactive variance tool',
//     'calculate variance',
//     'variance formula',
//     'population variance',
//     'sample variance',
//     'standard deviation',
//     'variance step by step',
//     'variance examples',
//     'statistics calculator',
//     'measure of spread',
//     'data variability',
//     'variance online',
//     'free variance calculator'
//   ]

//   const sectionsContent = {
//     obj1: {
//       title: `What is Variance?`,
//       content: `Variance is a statistical measure that quantifies how much individual values in a dataset differ from the mean. It answers the question: **how spread out are the data points?**

// In simple terms, variance tells you whether your data points cluster tightly around the average or scatter widely across different values. A **low variance** means data points are similar and close to the mean. A **high variance** indicates greater diversity and spread in the data.

// Variance is calculated by taking the average of the squared differences from the mean. It's measured in squared units (like dollars² or meters²), which is why we often use its square root—the standard deviation—for easier interpretation.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj2: {
//       title: `Variance Formulas`,
//       content: `The variance formula differs slightly depending on whether you're analyzing an entire population or a sample:

// **Population Variance** ($\\sigma^2$):

// $$\\sigma^2 = \\frac{\\sum_{i=1}^{N}(x_i - \\mu)^2}{N}$$

// Use this when you have data for **everyone** or **everything** you care about—like test scores for all students in your class.

// **Sample Variance** ($s^2$):

// $$s^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}$$

// Use this when you have data from a **subset** of a larger population—like surveying 100 customers out of 10,000. The $(n-1)$ denominator (Bessel's correction) provides an unbiased estimate of the true population variance.

// The visualizer above calculates both types automatically and shows you the step-by-step process for whichever you select.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj3: {
//       title: `Using the Interactive Visualizer`,
//       content: `Our variance visualizer combines real-time calculation with interactive exploration to help you understand how variance works.

// **Drag and Drop**: Click and drag any data point on the chart to change its value. Watch how the variance, standard deviation, and visual spread update instantly. Try moving a point far from the mean to see how outliers dramatically increase variance.

// **Add or Remove Points**: Use the "Add Point" button to insert new data values at the current mean. Remove points by clicking the ✕ button in the data table. The visualizer requires at least 2 data points.

// **Toggle Variance Type**: Switch between population variance ($\\sigma^2$) and sample variance ($s^2$) using the radio buttons. Notice how sample variance uses $(n-1)$ in the denominator, resulting in a slightly larger value that corrects for sampling bias.

// **Try Presets**: Experiment with three built-in datasets—"Low Variance" shows tightly clustered data, "High Variance" displays widely spread values, and "With Outliers" demonstrates how extreme values affect the calculation.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj4: {
//       title: `Understanding the Visual Display`,
//       content: `The chart shows your data points as orange circles connected to the mean (blue dashed line) by colored bars. These bars represent each value's **deviation** from the mean.

// **Green bars** point upward, showing values **above** the mean (positive deviations). **Red bars** point downward, showing values **below** the mean (negative deviations). The length of each bar indicates how far that point sits from the average.

// **Hover over any point** to see its exact deviation value. The visualization helps you intuitively grasp why variance squares these deviations—it treats distance from the mean equally whether above or below, and it emphasizes larger deviations more heavily than smaller ones.

// The mean line itself shifts whenever you modify data values, and you'll see all deviations recalculate accordingly. This dynamic feedback makes the abstract concept of "average squared deviation" concrete and visual.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj5: {
//       title: `Step-by-Step Calculation Breakdown`,
//       content: `The right panel displays the complete variance calculation process broken into five clear steps:

// **Step 1: Calculate the Mean** — Adds all values and divides by the count.

// **Step 2: Find Deviations** — Subtracts the mean from each data point. You'll see both positive and negative results.

// **Step 3: Square Each Deviation** — Converts all values to positive numbers and amplifies larger differences.

// **Step 4: Sum Squared Deviations** — Adds up all the squared values to get the total variation.

// **Step 5: Divide by n or (n-1)** — Produces the final variance. Population variance divides by $n$; sample variance divides by $(n-1)$.

// Each step shows the actual numbers from your current dataset, so you can follow the exact arithmetic and understand where the final variance value comes from. This transparency helps demystify the formula and builds intuition for what variance measures.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj6: {
//       title: `Data Table and Manual Input`,
//       content: `The data table lists every point in your dataset with its corresponding calculations. Each row shows:

// **Value** — The actual data point. Click to edit manually by typing a new number.

// **Deviation** — How far this value sits from the mean: $(x_i - \\mu)$.

// **Squared Deviation** — The deviation squared: $(x_i - \\mu)^2$. Notice how larger deviations contribute disproportionately more to the variance.

// The table footer displays the **sum of squared deviations**, which is the numerator in the variance formula. Hover over column headers to see tooltips explaining what each column represents.

// This tabular view complements the visual chart—some people grasp concepts better through numbers, others through pictures. Together, they provide multiple ways to understand the same underlying calculation.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj7: {
//       title: `Population vs Sample: When to Use Which`,
//       content: `The choice between population and sample variance depends on your data's scope.

// Use **population variance** when you have measurements for the **entire group** you care about. Examples: grades for all students in your class, daily temperatures for a complete year, heights of all employees at a company. You're not trying to infer beyond your dataset—you have everything.

// Use **sample variance** when your data represents a **subset** drawn from a larger population, and you want to estimate the population's variance. Examples: surveying 50 customers to understand all customers, measuring 10 products from a production line of thousands. The $(n-1)$ correction compensates for the fact that sample variance tends to underestimate population variance.

// The visualizer's tooltip explains this difference when you hover over the "?" icon next to the variance type selector. Switching between the two shows how Bessel's correction affects the result—typically a small difference, but statistically important.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj8: {
//       title: `Exploring How Outliers Affect Variance`,
//       content: `One of the most valuable uses of this visualizer is seeing firsthand how outliers impact variance.

// Start with the "Low Variance" preset—notice the small variance value. Now drag one point far away from the others. Watch the variance jump dramatically. This happens because variance **squares** deviations, so a point that's twice as far from the mean contributes **four times** as much to the variance.

// Try the "With Outliers" preset to see a pre-configured example. Remove the outlier (the point with value 40) and observe how much the variance drops. This sensitivity to extreme values is both a strength and a weakness of variance as a measure of spread.

// Understanding this behavior helps you interpret variance in real data. A high variance might indicate truly diverse data, or it might signal that a few outliers are skewing the measure. The visualizer lets you experiment with both scenarios risk-free.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj9: {
//       title: `Variance and Standard Deviation`,
//       content: `The visualizer displays both variance and standard deviation in the summary statistics panel at the top.

// **Variance** ($\\sigma^2$ or $s^2$) is measured in **squared units**—if your data is in dollars, variance is in dollars². This makes it less intuitive to interpret directly.

// **Standard Deviation** ($\\sigma$ or $s$) is simply the square root of variance, bringing the measure back to the **original units**. If variance is 25 dollars², standard deviation is 5 dollars—much easier to understand.

// Both contain the same information about spread, but standard deviation is typically preferred for reporting and interpretation. Variance is often used in theoretical calculations and more advanced statistical procedures like ANOVA.

// The visualizer shows both so you can see their relationship: $\\sigma = \\sqrt{\\sigma^2}$. As you modify data, watch how they move together—standard deviation is just the "un-squared" version of variance.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj10: {
//       title: `Related Statistical Concepts`,
//       content: `Variance connects to many other important statistical measures:

// **Expected Value** — The mean that variance measures spread around.

// **Standard Deviation** — The square root of variance, in original units.

// **Coefficient of Variation** — Compares variance across different scales.

// **Probability Distributions** — Many distributions are characterized by their variance parameters.

// Variance is a fundamental building block in statistics. Mastering it through interactive exploration prepares you for more advanced topics in probability, hypothesis testing, and data analysis.`,
//       before: ``,
//       after: ``,
//       link: '',
//     }
//   }

//   const introContent = {
//     id: "intro",
//     title: "Interactive Variance Visualizer",
//     content: `Variance measures how spread out data is around its mean. Understanding variance is essential for statistics, data analysis, quality control, finance, and scientific research—but the concept can seem abstract when learned from formulas alone.

// This interactive visualizer brings variance to life. Drag data points on the chart and watch variance recalculate in real-time. See the step-by-step arithmetic that transforms raw numbers into variance. Toggle between population and sample variance to understand when to use each. Experiment with outliers and observe their dramatic effect on spread measures.

// The tool displays everything simultaneously: the visual distribution, the data table with deviations, the complete calculation breakdown, and the final statistics. Whether you're learning variance for the first time or teaching it to others, this hands-on approach builds intuition that static formulas cannot provide.`
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       seoData: {
//         title: "Interactive Variance Calculator & Visualizer | Learn Variance Step-by-Step",
//         description: "Calculate and visualize variance interactively. Drag data points, see step-by-step calculations, understand population vs sample variance. Free online tool with real-time visual feedback for learning statistics.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/variance",
//         name: "Interactive Variance Calculator and Visualizer",
//         pageType: "WebApplication"
//       },
//     }
//   }
// }

// export default function VarianceVisualizerPage({seoData, sectionsContent, introContent}) {

//   const genericSections = [
//     {
//       id: '1',
//       title: sectionsContent.obj1.title,
//       link: sectionsContent.obj1.link,
//       content: [sectionsContent.obj1.content]
//     },
//     {
//       id: '2',
//       title: sectionsContent.obj2.title,
//       link: sectionsContent.obj2.link,
//       content: [sectionsContent.obj2.content]
//     },
//     {
//       id: '3',
//       title: sectionsContent.obj3.title,
//       link: sectionsContent.obj3.link,
//       content: [sectionsContent.obj3.content]
//     },
//     {
//       id: '4',
//       title: sectionsContent.obj4.title,
//       link: sectionsContent.obj4.link,
//       content: [sectionsContent.obj4.content]
//     },
//     {
//       id: '5',
//       title: sectionsContent.obj5.title,
//       link: sectionsContent.obj5.link,
//       content: [sectionsContent.obj5.content]
//     },
//     {
//       id: '6',
//       title: sectionsContent.obj6.title,
//       link: sectionsContent.obj6.link,
//       content: [sectionsContent.obj6.content]
//     },
//     {
//       id: '7',
//       title: sectionsContent.obj7.title,
//       link: sectionsContent.obj7.link,
//       content: [sectionsContent.obj7.content]
//     },
//     {
//       id: '8',
//       title: sectionsContent.obj8.title,
//       link: sectionsContent.obj8.link,
//       content: [sectionsContent.obj8.content]
//     },
//     {
//       id: '9',
//       title: sectionsContent.obj9.title,
//       link: sectionsContent.obj9.link,
//       content: [sectionsContent.obj9.content]
//     },
//     {
//       id: '10',
//       title: sectionsContent.obj10.title,
//       link: sectionsContent.obj10.link,
//       content: [sectionsContent.obj10.content]
//     }
//   ]

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
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Learn Math Class" />
        
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />
        
//         <meta name="robots" content="index, follow" />
//         <meta name="author" content="Learn Math Class" />
        
//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebApplication",
//               "name": seoData.name,
//               "description": seoData.description,
//               "url": `https://www.learnmathclass.com${seoData.url}`,
//               "applicationCategory": "EducationalApplication",
//               "operatingSystem": "Any",
//               "offers": {
//                 "@type": "Offer",
//                 "price": "0",
//                 "priceCurrency": "USD"
//               },
//               "featureList": [
//                 "Interactive variance calculator",
//                 "Real-time data visualization",
//                 "Drag-and-drop data manipulation",
//                 "Population and sample variance",
//                 "Step-by-step calculation display",
//                 "Visual deviation indicators"
//               ],
//               "author": {
//                 "@type": "Organization",
//                 "name": "Learn Math Class"
//               },
//               "datePublished": "2024-01-15",
//               "dateModified": new Date().toISOString(),
//               "inLanguage": "en-US",
//               "isAccessibleForFree": true,
//               "learningResourceType": "Interactive Tool",
//               "educationalLevel": "High School, College",
//               "keywords": seoData.keywords
//             })
//           }}
//         />

//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "BreadcrumbList",
//               "itemListElement": [
//                 {
//                   "@type": "ListItem",
//                   "position": 1,
//                   "name": "Home",
//                   "item": "https://www.learnmathclass.com"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 2,
//                   "name": "Probability",
//                   "item": "https://www.learnmathclass.com/probability"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 3,
//                   "name": "Visual Tools",
//                   "item": "https://www.learnmathclass.com/probability/visual-tools"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 4,
//                   "name": "Variance Visualizer",
//                   "item": `https://www.learnmathclass.com${seoData.url}`
//                 }
//               ]
//             })
//           }}
//         />

//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "FAQPage",
//               "mainEntity": [
//                 {
//                   "@type": "Question",
//                   "name": "What is variance in statistics?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "Variance is a statistical measure that quantifies how much individual values in a dataset differ from the mean. It measures the average squared deviation from the mean, indicating how spread out data points are."
//                   }
//                 },
//                 {
//                   "@type": "Question",
//                   "name": "What is the difference between population variance and sample variance?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "Population variance uses N in the denominator and is used when you have data for the entire population. Sample variance uses (n-1) in the denominator and is used when estimating from a sample. The (n-1) correction provides an unbiased estimate of the population variance."
//                   }
//                 },
//                 {
//                   "@type": "Question",
//                   "name": "How do you calculate variance step by step?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "To calculate variance: 1) Find the mean of all values, 2) Subtract the mean from each value to get deviations, 3) Square each deviation, 4) Sum all squared deviations, 5) Divide by N for population variance or (n-1) for sample variance."
//                   }
//                 },
//                 {
//                   "@type": "Question",
//                   "name": "How do outliers affect variance?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "Outliers dramatically increase variance because deviations are squared in the calculation. A point twice as far from the mean contributes four times as much to the variance, making variance sensitive to extreme values."
//                   }
//                 }
//               ]
//             })
//           }}
//         />
//       </Head>

//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       <OperaSidebar 
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       /> 

//       <Breadcrumb/>
      
//       <br/>
//       <br/>

//       <h1 className='title' style={{marginTop:'-50px',marginBottom:'-20px'}}>
//         Interactive Variance Visualizer
//       </h1>

//       <br/>
      
//       <VarianceVisualizer/>
      
//       <br/>
      
//       <SectionTableOfContents sections={genericSections}/>
      
//       <br/>
//       <br/>
//       <br/>

//       {/* <IntroSection 
//         id={introContent.id}
//         title={introContent.title}
//         content={introContent.content}
//         backgroundColor='#f9fafb'
//         textColor="#06357a"
//       /> */}

//       <br/>
//       <br/>

//       <Sections sections={genericSections}/>
      
//       <br/>
//       <br/>
//       <br/>

//       {/* <ScrollUpButton/> */}
//     </>
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
import VarianceVisualizer from '@/app/components/probability/variance/VarianceVisualizer'


export async function getStaticProps(){

  const keyWords = [
    'variance calculator',
    'variance visualizer',
    'interactive variance tool',
    'calculate variance',
    'variance formula',
    'population variance',
    'sample variance',
    'standard deviation',
    'variance step by step',
    'variance examples',
    'statistics calculator',
    'measure of spread',
    'data variability',
    'variance online',
    'free variance calculator'
  ]

  const sectionsContent = {
    obj1: {
      title: `What is Variance?`,
      content: `Variance is a statistical measure that quantifies how much individual values in a dataset differ from the mean. It answers the question: **how spread out are the data points?**

In simple terms, variance tells you whether your data points cluster tightly around the average or scatter widely across different values. A **low variance** means data points are similar and close to the mean. A **high variance** indicates greater diversity and spread in the data.

Variance is calculated by taking the average of the squared differences from the mean. It's measured in squared units (like dollars² or meters²), which is why we often use its square root—the standard deviation—for easier interpretation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Variance Formulas`,
      content: `The variance formula differs slightly depending on whether you're analyzing an entire population or a sample:

**Population Variance** ($\\sigma^2$):

$$\\sigma^2 = \\frac{\\sum_{i=1}^{N}(x_i - \\mu)^2}{N}$$

Use this when you have data for **everyone** or **everything** you care about—like test scores for all students in your class.

**Sample Variance** ($s^2$):

$$s^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}$$

Use this when you have data from a **subset** of a larger population—like surveying 100 customers out of 10,000. The $(n-1)$ denominator (Bessel's correction) provides an unbiased estimate of the true population variance.

The visualizer above calculates both types automatically and shows you the step-by-step process for whichever you select.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Using the Interactive Visualizer`,
      content: `Our variance visualizer combines real-time calculation with interactive exploration to help you understand how variance works.

**Drag and Drop**: Click and drag any data point on the chart to change its value. Watch how the variance, standard deviation, and visual spread update instantly. Try moving a point far from the mean to see how outliers dramatically increase variance.

**Add or Remove Points**: Use the "Add Point" button to insert new data values at the current mean. Remove points by clicking the ✕ button in the data table. The visualizer requires at least 2 data points.

**Toggle Variance Type**: Switch between population variance ($\\sigma^2$) and sample variance ($s^2$) using the radio buttons. Notice how sample variance uses $(n-1)$ in the denominator, resulting in a slightly larger value that corrects for sampling bias.

**Try Presets**: Experiment with three built-in datasets—"Low Variance" shows tightly clustered data, "High Variance" displays widely spread values, and "With Outliers" demonstrates how extreme values affect the calculation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Understanding the Visual Display`,
      content: `The chart shows your data points as orange circles connected to the mean (blue dashed line) by colored bars. These bars represent each value's **deviation** from the mean.

**Green bars** point upward, showing values **above** the mean (positive deviations). **Red bars** point downward, showing values **below** the mean (negative deviations). The length of each bar indicates how far that point sits from the average.

**Hover over any point** to see its exact deviation value. The visualization helps you intuitively grasp why variance squares these deviations—it treats distance from the mean equally whether above or below, and it emphasizes larger deviations more heavily than smaller ones.

The mean line itself shifts whenever you modify data values, and you'll see all deviations recalculate accordingly. This dynamic feedback makes the abstract concept of "average squared deviation" concrete and visual.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Step-by-Step Calculation Breakdown`,
      content: `The right panel displays the complete variance calculation process broken into five clear steps:

**Step 1: Calculate the Mean** — Adds all values and divides by the count.

**Step 2: Find Deviations** — Subtracts the mean from each data point. You'll see both positive and negative results.

**Step 3: Square Each Deviation** — Converts all values to positive numbers and amplifies larger differences.

**Step 4: Sum Squared Deviations** — Adds up all the squared values to get the total variation.

**Step 5: Divide by n or (n-1)** — Produces the final variance. Population variance divides by $n$; sample variance divides by $(n-1)$.

Each step shows the actual numbers from your current dataset, so you can follow the exact arithmetic and understand where the final variance value comes from. This transparency helps demystify the formula and builds intuition for what variance measures.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Data Table and Manual Input`,
      content: `The data table lists every point in your dataset with its corresponding calculations. Each row shows:

**Value** — The actual data point. Click to edit manually by typing a new number.

**Deviation** — How far this value sits from the mean: $(x_i - \\mu)$.

**Squared Deviation** — The deviation squared: $(x_i - \\mu)^2$. Notice how larger deviations contribute disproportionately more to the variance.

The table footer displays the **sum of squared deviations**, which is the numerator in the variance formula. Hover over column headers to see tooltips explaining what each column represents.

This tabular view complements the visual chart—some people grasp concepts better through numbers, others through pictures. Together, they provide multiple ways to understand the same underlying calculation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Population vs Sample: When to Use Which`,
      content: `The choice between population and sample variance depends on your data's scope.

Use **population variance** when you have measurements for the **entire group** you care about. Examples: grades for all students in your class, daily temperatures for a complete year, heights of all employees at a company. You're not trying to infer beyond your dataset—you have everything.

Use **sample variance** when your data represents a **subset** drawn from a larger population, and you want to estimate the population's variance. Examples: surveying 50 customers to understand all customers, measuring 10 products from a production line of thousands. The $(n-1)$ correction compensates for the fact that sample variance tends to underestimate population variance.

The visualizer's tooltip explains this difference when you hover over the "?" icon next to the variance type selector. Switching between the two shows how Bessel's correction affects the result—typically a small difference, but statistically important.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Exploring How Outliers Affect Variance`,
      content: `One of the most valuable uses of this visualizer is seeing firsthand how outliers impact variance.

Start with the "Low Variance" preset—notice the small variance value. Now drag one point far away from the others. Watch the variance jump dramatically. This happens because variance **squares** deviations, so a point that's twice as far from the mean contributes **four times** as much to the variance.

Try the "With Outliers" preset to see a pre-configured example. Remove the outlier (the point with value 40) and observe how much the variance drops. This sensitivity to extreme values is both a strength and a weakness of variance as a measure of spread.

Understanding this behavior helps you interpret variance in real data. A high variance might indicate truly diverse data, or it might signal that a few outliers are skewing the measure. The visualizer lets you experiment with both scenarios risk-free.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Variance and Standard Deviation`,
      content: `The visualizer displays both variance and standard deviation in the summary statistics panel at the top.

**Variance** ($\\sigma^2$ or $s^2$) is measured in **squared units**—if your data is in dollars, variance is in dollars². This makes it less intuitive to interpret directly.

**Standard Deviation** ($\\sigma$ or $s$) is simply the square root of variance, bringing the measure back to the **original units**. If variance is 25 dollars², standard deviation is 5 dollars—much easier to understand.

Both contain the same information about spread, but standard deviation is typically preferred for reporting and interpretation. Variance is often used in theoretical calculations and more advanced statistical procedures like ANOVA.

The visualizer shows both so you can see their relationship: $\\sigma = \\sqrt{\\sigma^2}$. As you modify data, watch how they move together—standard deviation is just the "un-squared" version of variance.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Statistical Concepts`,
      content: `Variance connects to many other important statistical measures:

**Expected Value** — The mean that variance measures spread around.

**Standard Deviation** — The square root of variance, in original units.

**Coefficient of Variation** — Compares variance across different scales.

**Probability Distributions** — Many distributions are characterized by their variance parameters.

Variance is a fundamental building block in statistics. Mastering it through interactive exploration prepares you for more advanced topics in probability, hypothesis testing, and data analysis.`,
      before: ``,
      after: ``,
      link: '',
    }
  }

  const introContent = {
    id: "intro",
    title: "Interactive Variance Visualizer",
    content: `Variance measures how spread out data is around its mean. Understanding variance is essential for statistics, data analysis, quality control, finance, and scientific research—but the concept can seem abstract when learned from formulas alone.

This interactive visualizer brings variance to life. Drag data points on the chart and watch variance recalculate in real-time. See the step-by-step arithmetic that transforms raw numbers into variance. Toggle between population and sample variance to understand when to use each. Experiment with outliers and observe their dramatic effect on spread measures.

The tool displays everything simultaneously: the visual distribution, the data table with deviations, the complete calculation breakdown, and the final statistics. Whether you're learning variance for the first time or teaching it to others, this hands-on approach builds intuition that static formulas cannot provide.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is variance in statistics?",
      answer: "Variance is a statistical measure that quantifies how much individual values in a dataset differ from the mean. It measures the average squared deviation from the mean, indicating how spread out data points are."
    },
    obj2: {
      question: "What is the difference between population variance and sample variance?",
      answer: "Population variance uses N in the denominator and is used when you have data for the entire population. Sample variance uses (n-1) in the denominator and is used when estimating from a sample. The (n-1) correction provides an unbiased estimate of the population variance."
    },
    obj3: {
      question: "How do you calculate variance step by step?",
      answer: "To calculate variance: 1) Find the mean of all values, 2) Subtract the mean from each value to get deviations, 3) Square each deviation, 4) Sum all squared deviations, 5) Divide by N for population variance or (n-1) for sample variance."
    },
    obj4: {
      question: "How do outliers affect variance?",
      answer: "Outliers dramatically increase variance because deviations are squared in the calculation. A point twice as far from the mean contributes four times as much to the variance, making variance sensitive to extreme values."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Variance Calculator and Visualizer",
      "description": "Calculate and visualize variance interactively. Drag data points, see calculations, understand population vs sample variance. Free tool with real-time feedback.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/variance",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive variance calculator",
        "Real-time data visualization",
        "Drag-and-drop data manipulation",
        "Population and sample variance",
        "Step-by-step calculation display",
        "Visual deviation indicators"
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
          "name": "Variance Visualizer",
          "item": "https://www.learnmathclass.com/probability/visual-tools/variance"
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

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Variance Calculator & Visualizer | Interactive Tool",
        description: "Interactive variance calculator with real-time visualization. Drag data points, see step-by-step calculations, compare population vs sample variance online.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/variance",
        name: "Interactive Variance Calculator and Visualizer",
        pageType: "WebApplication"
      },
    }
  }
}

export default function VarianceVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [sectionsContent.obj4.content]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [sectionsContent.obj5.content]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [sectionsContent.obj6.content]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [sectionsContent.obj7.content]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [sectionsContent.obj8.content]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [sectionsContent.obj9.content]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [sectionsContent.obj10.content]
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
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Learn Math Class" />
        
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

      <h1 className='title' style={{marginTop:'-50px',marginBottom:'-20px'}}>
        Interactive Variance Visualizer
      </h1>

      <br/>
      
      <VarianceVisualizer/>
      
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