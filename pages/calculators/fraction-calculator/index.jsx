import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FractionCalculator from '@/app/components/calculators/fraction-calculator/FractionCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


export async function getStaticProps() {


   const fractionsExplanations = {
  calculate_fraction: {
    title: "Basic Fraction Operations",
    content: "Perform addition, subtraction, multiplication, or division with two fractions. The calculator will find a common denominator for addition and subtraction, and simplify the result."
  },
  float_to_frac: {
    title: "Float to Fraction",
    content: "Converts a decimal number (like 0.75) into its fraction form (3/4). The result is automatically simplified to the lowest terms."
  },
  float_to_mixed: {
    title: "Float to Mixed Number",
    content: "Converts a decimal number into a mixed number format (whole number + fraction). For example, 2.5 becomes 2 1/2."
  },
  frac_to_float: {
    title: "Fraction to Decimal",
    content: "Converts a fraction into its decimal representation. Simply divide the numerator by the denominator to get the result."
  },
  mixed_to_float: {
    title: "Mixed Number to Float",
    content: "Converts a mixed number (like 1 1/2) into a decimal. The whole number and fraction are combined into a single decimal value."
  },
  inverse: {
    title: "Find Inverse",
    content: "Calculates the multiplicative inverse (1/x) of a number. For example, the inverse of 2 is 0.5, and the inverse of 0.5 is 2."
  },
  add_mixed: {
    title: "Add Mixed Numbers",
    content: "Adds two mixed numbers together. The calculator converts them to improper fractions, adds them, and converts back to mixed number form."
  },
  subtract_mixed: {
    title: "Subtract Mixed Numbers",
    content: "Subtracts the second mixed number from the first. The result is simplified and shown as a mixed number when appropriate."
  },
  multiply_mixed: {
    title: "Multiply Mixed Numbers",
    content: "Multiplies two mixed numbers. Both numbers are converted to improper fractions, multiplied, and the result is simplified."
  },
  divide_mixed: {
    title: "Divide Mixed Numbers",
    content: "Divides the first mixed number by the second. This is done by multiplying the first number by the reciprocal of the second."
  }
};

const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      // {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  },
  {
   title:'Visual Tools',
   items:[
    {title:'FractionsVisualizer',link:'/visual-tools/fractions-visualizer'}
   ]

  }
]

  const keyWords = ['fractions calculator','calculate the fraction','fractions',
    'decimal to fraction','adding fractions','multiplying fractions','dividing fractions',
    'fraction to decimal','adding and subtracting fractions','fraction and decimal calculator',
    'reducing fractions calculator'];

  return {
    props: {
      seoData: {
        title: "Fraction Calculator - Add, Subtract, Multiply & Divide Fractions | Learn Math Class",
        description: "Free fraction calculator for adding, subtracting, multiplying, and dividing fractions. Convert decimals to fractions and simplify fractions online.",
        keywords: keyWords.join(", "),
        url: "/calculators/fraction-calculator",
        name: "Fraction Calculator"
      },
      keyWords,
      navigationGroup,
      fractionsExplanations
    }
  }
}

export default function FractionCalculatorPage({ seoData, keyWords,
  navigationGroup,fractionsExplanations }) {

  // const keyWords=['fractions calculator','calculate the fraction','fractions',
  //   'decimal to fraction','adding fractions','multiplying fractions','dividing fractions',
  //   'fraction to decimal','adding and subtracting fractions','fraction and decimal calculator',
  //   'reducing fractions calculator']


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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head>
   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           // topOffset='65px'
           sidebarWidth='45px'
           panelWidth='300px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Fraction Calculator</h1>
   
   <div style={{
      display: 'grid',
      gridTemplateColumns: '15% 80%',
      gap: '20px',
      width: '100%'
   }}>
      {/* Left column - Sidebar */}
      <div>
        <br/>
       
         <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='200px'
         />
      </div>

      {/* Right column - Table */}
      <div>
         <div style={{width:'100%',margin:'auto',marginLeft:'-50px'}}>
          <div style={{transform:'scale(0.95)'}}>
       <FractionCalculator explanations={fractionsExplanations} />
      </div> 
          
        
            <br/>
            <br/>
            <br/>
           
            
         </div>
      </div>
   </div>
     
   
   
   {/* <VerticalButtonGroup/> */}
   {/* <FractionCalculator/> */}
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
