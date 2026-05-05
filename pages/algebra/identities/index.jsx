// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import ExpandableTable from '@/app/components/generic-table/ExpandableTable'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import '../../../pages/pages.css'



// export async function getStaticProps(){

//   const keyWords=['algebraic identities','polynomial identities','math identities','algebra','solve algebra problems']


//   const algebraicIdentitiesData = {
//     "Basic Binomial Identities": [
//       {
//         id: 1,
//         law: "Square of Sum",
//         formula: "$(a + b)^2 = a^2 + 2ab + b^2$",
//         explanation: "Square of a binomial sum"
//       },
//       {
//         id: 2,
//         law: "Square of Difference",
//         formula: "$(a - b)^2 = a^2 - 2ab + b^2$",
//         explanation: "Square of a binomial difference"
//       },
//       {
//         id: 3,
//         law: "Cube of Sum",
//         formula: "$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$",
//         explanation: "Cube of a binomial sum"
//       },
//       {
//         id: 4,
//         law: "Cube of Difference",
//         formula: "$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$",
//         explanation: "Cube of a binomial difference"
//       },
//       {
//         id: 5,
//         law: "Fourth Power of Sum",
//         formula: "$(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$",
//         explanation: "Fourth power of a binomial sum"
//       },
//       {
//         id: 6,
//         law: "Fifth Power of Sum",
//         formula: "$(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$",
//         explanation: "Fifth power of a binomial sum"
//       },
//       {
//         id: 7,
//         law: "Fifth Power of Difference",
//         formula: "$(a - b)^5 = a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$",
//         explanation: "Fifth power of a binomial difference"
//       }
//     ],
  
//     "General Binomial Expansions": [
//       {
//         id: 8,
//         law: "General Binomial Theorem",
//         formula: "$(a + b)^n = \\sum_{k=0}^{n} C(n,k) a^{n-k} b^k$",
//         explanation: "General form where C(n,k) = n!/(k!(n-k)!)"
//       }
//     ],
  
//     "Multinomial Expansions": [
//       {
//         id: 9,
//         law: "Trinomial Square",
//         formula: "$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ac$",
//         explanation: "Square of a trinomial"
//       },
//       {
//         id: 10,
//         law: "Trinomial Cube",
//         formula: "$(a + b + c)^3 = a^3 + b^3 + c^3 + 3(a^2b + ab^2 + a^2c + ac^2 + b^2c + bc^2) + 6abc$",
//         explanation: "Cube of a trinomial"
//       }
//     ],
  
//     "Difference of Squares and Higher Powers": [
//       {
//         id: 11,
//         law: "Difference of Squares",
//         formula: "$a^2 - b^2 = (a + b)(a - b)$",
//         explanation: "Factorization of difference of squares"
//       },
//       {
//         id: 12,
//         law: "Difference of Fourth Powers",
//         formula: "$a^4 - b^4 = (a^2 + b^2)(a^2 - b^2) = (a^2 + b^2)(a + b)(a - b)$",
//         explanation: "Factorization of difference of fourth powers"
//       }
//     ],
  
//     "Sums and Differences of Powers": [
//       {
//         id: 13,
//         law: "Sum of Cubes",
//         formula: "$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$",
//         explanation: "Factorization of sum of cubes"
//       },
//       {
//         id: 14,
//         law: "Difference of Cubes",
//         formula: "$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$",
//         explanation: "Factorization of difference of cubes"
//       },
//       {
//         id: 15,
//         law: "Sum of Fourth Powers",
//         formula: "$a^4 + b^4 = (a^2 + \\sqrt{2}ab + b^2)(a^2 - \\sqrt{2}ab + b^2)$",
//         explanation: "Factorization of sum of fourth powers"
//       },
//       {
//         id: 16,
//         law: "Sum of Fifth Powers",
//         formula: "$a^5 + b^5 = (a + b)(a^4 - a^3b + a^2b^2 - ab^3 + b^4)$",
//         explanation: "Factorization of sum of fifth powers"
//       },
//       {
//         id: 17,
//         law: "Difference of Fifth Powers",
//         formula: "$a^5 - b^5 = (a - b)(a^4 + a^3b + a^2b^2 + ab^3 + b^4)$",
//         explanation: "Factorization of difference of fifth powers"
//       },
//       {
//         id: 18,
//         law: "General Difference of Powers",
//         formula: "$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + ... + ab^{n-2} + b^{n-1})$",
//         explanation: "General factorization of difference of nth powers"
//       },
//       {
//         id: 19,
//         law: "General Sum of Odd Powers",
//         formula: "$a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + ... - ab^{n-2} + b^{n-1})$ when n is odd",
//         explanation: "General factorization of sum of odd powers"
//       }
//     ],
  
//     "Special Identities": [
//       {
//         id: 20,
//         law: "Sophie Germain Identity",
//         formula: "$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$",
//         explanation: "Special factorization for fourth powers"
//       },
//       {
//         id: 21,
//         law: "Sum of Squares with Cross Term",
//         formula: "$a^4 + a^2b^2 + b^4 = (a^2 + ab + b^2)(a^2 - ab + b^2)$",
//         explanation: "Alternative factorization of sum-like fourth power expression"
//       },
//       {
//         id: 22,
//         law: "Symmetric Sum Identity",
//         formula: "$a^2 + b^2 + c^2 - ab - bc - ca = \\frac{1}{2}[(a-b)^2 + (b-c)^2 + (c-a)^2]$",
//         explanation: "Symmetric expression in terms of pairwise differences"
//       },
//       {
//         id: 23,
//         law: "Sum of Squares Plus Difference",
//         formula: "$(a + b)^2 + (a - b)^2 = 2(a^2 + b^2)$",
//         explanation: "Sum of squared sum and squared difference"
//       },
//       {
//         id: 24,
//         law: "Difference of Squared Sum and Difference",
//         formula: "$(a + b)^2 - (a - b)^2 = 4ab$",
//         explanation: "Difference between squared sum and squared difference"
//       },
//       {
//         id: 25,
//         law: "Complex Factorization",
//         formula: "$a^2 + b^2 = (a + bi)(a - bi)$",
//         explanation: "Factorization using complex numbers"
//       }
//     ],
  
//     "Factoring Identities": [
//       {
//         id: 26,
//         law: "Quadratic Factoring",
//         formula: "$x^2 + (a + b)x + ab = (x + a)(x + b)$",
//         explanation: "Standard quadratic factoring form"
//       },
//       {
//         id: 27,
//         law: "General Quadratic Roots",
//         formula: "$ax^2 + bx + c = a(x - r_1)(x - r_2)$ where $r_1, r_2$ are roots",
//         explanation: "General quadratic factorization using roots"
//       }
//     ],
  
//     "Basic Algebraic Properties": [
//       {
//         id: 28,
//         law: "Distributive Property",
//         formula: "$a(b + c) = ab + ac$",
//         explanation: "Basic distributive property"
//       },
//       {
//         id: 29,
//         law: "Product of Binomials",
//         formula: "$(a + b)(c + d) = ac + ad + bc + bd$",
//         explanation: "Product of two binomials"
//       },
//       {
//         id: 30,
//         law: "Product of Trinomials",
//         formula: "$(a + b + c)(d + e + f) = ad + ae + af + bd + be + bf + cd + ce + cf$",
//         explanation: "Product of two trinomials"
//       }
//     ]
//   };

//   const sectionsContent={

//     basic:{
//       title:`Basic Binomial Identities`,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     general:{
//       title:`General Binomial Expansions`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     multinomial:{
  
//       title:`Multinomial Expansions`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     difference:{
//       title:`Difference of Squares and Higher Powers`,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     sums:{
  
//       title:`Sums and Differences of Powers`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     special:{
  
//       title:`Special Identities`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     factoring:{
  
//       title:`Factoring Identities`,
//       content:``,
//       before:``,
//       after:``,
  
//     },

//     properties:{
  
//         title:`Basic Algebraic Properties`,
//         content:``,
//         before:``,
//         after:``,
    
//       }
  
//   }


//   return {
//     props:{
//       keyWords,
//       algebraicIdentitiesData,
//       sectionsContent

//     }
//   }
// }

// export default function LogarithmRulesPage({keyWords, algebraicIdentitiesData ,sectionsContent}) {

    

//   const logarithRulesSections=[
//     {
//         id:'basic',
//         title:sectionsContent.basic.title,
//         link:'',
//         content:[

//           <div key={1} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={11}
//         data={algebraicIdentitiesData[sectionsContent.basic.title]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,

//         ]
//     },
//     {
//         id:'general',
//         title:sectionsContent.general.title,
//         link:'',
//         content:[
//           <div key={2} style={{marginLeft:'50px',marginRight:'50px'}}>
//           <ExpandableTable key={12}
//           data={algebraicIdentitiesData[sectionsContent.general.title]}
//            displayColumns={ ["law", "formula", "explanation"]}
//            copyableFields={["formula"]}
//            includedFields={ ["law", "formula", "explanation"]} />
//            </div> ,
//         ]
//     },
//     {
//         id:'multinomial',
//         title:sectionsContent.multinomial.title,
//         link:'',
//         content:[
//           <div key={3} style={{marginLeft:'50px',marginRight:'50px'}}>
//           <ExpandableTable key={13}
//           data={algebraicIdentitiesData[sectionsContent.multinomial.title]}
//            displayColumns={ ["law", "formula", "explanation"]}
//            copyableFields={["formula"]}
//            includedFields={ ["law", "formula", "explanation"]} />
//            </div> ,
//         ]
//     },
//     {
//       id:'difference',
//       title:sectionsContent.difference.title,
//       link:'',
//       content:[
//         <div key={4} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={14}
//         data={algebraicIdentitiesData[sectionsContent.difference.title]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//       ]
//   },
//   {
//     id:'sums',
//     title:sectionsContent.sums.title,
//     link:'',
//     content:[
//       <div key={5} style={{marginLeft:'50px',marginRight:'50px'}}>
//       <ExpandableTable key={15}
//       data={algebraicIdentitiesData[sectionsContent.sums.title]}
//        displayColumns={ ["law", "formula", "explanation"]}
//        copyableFields={["formula"]}
//        includedFields={ ["law", "formula", "explanation"]} />
//        </div> ,
//     ]
// },
// {
//   id:'special',
//   title:sectionsContent.special.title,
//   link:'',
//   content:[
//     <div key={6} style={{marginLeft:'50px',marginRight:'50px'}}>
//     <ExpandableTable key={16}
//     data={algebraicIdentitiesData[sectionsContent.special.title]}
//      displayColumns={ ["law", "formula", "explanation"]}
//      copyableFields={["formula"]}
//      includedFields={ ["law", "formula", "explanation"]} />
//      </div> ,
//   ]
// },
// {
//   id:'factoring',
//   title:sectionsContent.factoring.title,
//   link:'',
//   content:[
//     <div key={7} style={{marginLeft:'50px',marginRight:'50px'}}>
//     <ExpandableTable key={17}
//     data={algebraicIdentitiesData[sectionsContent.factoring.title]}
//      displayColumns={ ["law", "formula", "explanation"]}
//      copyableFields={["formula"]}
//      includedFields={ ["law", "formula", "explanation"]} />
//      </div> ,
//   ]
// },
// {
//     id:'properties',
//     title:sectionsContent.properties.title,
//     link:'',
//     content:[
//       <div key={8} style={{marginLeft:'50px',marginRight:'50px'}}>
//       <ExpandableTable key={18}
//       data={algebraicIdentitiesData[sectionsContent.properties.title]}
//        displayColumns={ ["law", "formula", "explanation"]}
//        copyableFields={["formula"]}
//        includedFields={ ["law", "formula", "explanation"]} />
//        </div> ,
//     ]
//   },
// //   {
// //     id:'domain',
// //     title:sectionsContent.domain.title,
// //     link:'',
// //     content:[
// //       <div key={7} style={{marginLeft:'50px',marginRight:'50px'}}>
// //       <ExpandableTable key={12}
// //       data={algebraicIdentitiesData[sectionsContent.domain.title]}
// //        displayColumns={ ["law", "formula", "explanation"]}
// //        copyableFields={["formula"]}
// //        includedFields={ ["law", "formula", "explanation"]} />
// //        </div> ,
// //     ]
// //   }
// ]

   


      
//   return (
//     <>
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar
//                    side='right'
//                    topOffset='55px'
//                    sidebarWidth='45px'
//                    panelWidth='200px'
//                    iconColor='white'
//                    panelBackgroundColor='#f2f2f2'
//                  />
//       <Breadcrumb/>
//       <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Algebric Identities</h1>
//       <br/>
//       <br/>
//       <SectionTableOfContents sections={logarithRulesSections}
//        showSecondaryNav={true}
//        secondaryNavMode="siblings"
//        secondaryNavTitle="Similar Pages"/>
//       <br/>
//       <br/>
//       <IntroSection/>
//       <br/>
//       <br/>
//       <Sections sections={logarithRulesSections}/>
//       <br/>
//        {/* <ScrollUpButton/> */} 
//     </>
//   );
// }




import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

export async function getStaticProps() {

  const keyWords = [
    'algebraic identities',
    'binomial expansion',
    'difference of squares',
    'sum of cubes',
    'binomial theorem'
  ]

//   const obj1Table = `
// <table style="border-collapse: collapse; width: 100%; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Expanded form</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$(a+b)^2$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$a^2 + 2ab + b^2$</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$(a-b)^2$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$a^2 - 2ab + b^2$</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">$(a+b)(a-b)$</td>
//       <td style="padding: 12px 15px; color: #34495e;">$a^2 - b^2$</td>
//     </tr>
//   </tbody>
// </table>
//   `

const obj1Table = `
<table style="border-collapse: collapse; width: 60%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Expanded form</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(a + b)²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a² + 2ab + b²</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(a − b)²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a² − 2ab + b²</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(a + b)(a − b)</td>
      <td style="padding: 12px 15px; color: #34495e;">a² − b²</td>
    </tr>
  </tbody>
</table>
`


//   const obj2Table = `
// <table style="border-collapse: collapse; width: 100%; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Expanded form</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$(a+b)^3$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$a^3 + 3a^2b + 3ab^2 + b^3$</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">$(a-b)^3$</td>
//       <td style="padding: 12px 15px; color: #34495e;">$a^3 - 3a^2b + 3ab^2 - b^3$</td>
//     </tr>
//   </tbody>
// </table>
//   `
const obj2Table = `
<table style="border-collapse: collapse; width: 60%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Expanded form</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(a + b)³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a³ + 3a²b + 3ab² + b³</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(a − b)³</td>
      <td style="padding: 12px 15px; color: #34495e;">a³ − 3a²b + 3ab² − b³</td>
    </tr>
  </tbody>
</table>
`


//   const obj5Table = `
// <table style="border-collapse: collapse; width: 100%; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: center; font-weight: bold;">Factors over $\\mathbb{R}$?</th>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Factorization</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$a^2 - b^2$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a+b)(a-b)$</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$a^2 + b^2$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">irreducible over $\\mathbb{R}$; $(a+bi)(a-bi)$ over $\\mathbb{C}$</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$a^3 - b^3$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a-b)(a^2 + ab + b^2)$</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$a^3 + b^3$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a+b)(a^2 - ab + b^2)$</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$a^4 - b^4$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a-b)(a+b)(a^2+b^2)$</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$a^n - b^n$ (any $n$)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a-b)(a^{n-1} + a^{n-2}b + \\cdots + b^{n-1})$</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">$a^n + b^n$ (odd $n$ only)</td>
//       <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; color: #34495e;">$(a+b)(a^{n-1} - a^{n-2}b + \\cdots + b^{n-1})$</td>
//     </tr>
//   </tbody>
// </table>
//   `
const obj5Table = `
<table style="border-collapse: collapse; width: 60%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: center; font-weight: bold;">Factors over ℝ?</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Factorization</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a² − b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)(a − b)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a² + b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">irreducible over ℝ; (a + bi)(a − bi) over ℂ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a³ − b³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)(a² + ab + b²)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a³ + b³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)(a² − ab + b²)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a⁴ − b⁴</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)(a + b)(a² + b²)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">aⁿ − bⁿ (any n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)(aⁿ⁻¹ + aⁿ⁻²b + ⋯ + bⁿ⁻¹)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">aⁿ + bⁿ (odd n only)</td>
      <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; color: #34495e;">(a + b)(aⁿ⁻¹ − aⁿ⁻²b + ⋯ + bⁿ⁻¹)</td>
    </tr>
  </tbody>
</table>
`


//   const summaryTable = `
// <table style="border-collapse: collapse; width: 100%; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Family</th>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Identity</th>
//       <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Where it's used</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a sum</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a+b)^2 = a^2 + 2ab + b^2$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">completing the square, perfect square trinomials</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a difference</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a-b)^2 = a^2 - 2ab + b^2$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">completing the square, expansions</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference of squares</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$a^2 - b^2 = (a+b)(a-b)$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring, rationalizing denominators</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube of a sum</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cubic expansions, depressed cubics</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube of a difference</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cubic expansions, depressed cubics</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum of cubes</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring cubics</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference of cubes</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring cubics</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Binomial theorem</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">general expansions of any degree</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a trinomial</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a+b+c)^2 = a^2+b^2+c^2 + 2ab+2ac+2bc$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">three-variable expansions</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$a^n - b^n$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a-b)(a^{n-1} + a^{n-2}b + \\cdots + b^{n-1})$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring any degree, $(a-b)$ always divides</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">$a^n + b^n$ (odd $n$)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$(a+b)(a^{n-1} - a^{n-2}b + \\cdots + b^{n-1})$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring odd-degree sums only</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sophie Germain</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">$a^4 + 4b^4 = (a^2+2ab+2b^2)(a^2-2ab+2b^2)$</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">specialty factoring</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Sum of squares (over $\\mathbb{C}$)</td>
//       <td style="padding: 12px 15px; color: #34495e;">$a^2 + b^2 = (a+bi)(a-bi)$</td>
//       <td style="padding: 12px 15px; color: #34495e;">complex number factoring</td>
//     </tr>
//   </tbody>
// </table>
//   `
const summaryTable = `
<table style="border-collapse: collapse; width: 60%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Family</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Identity</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Where it's used</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)² = a² + 2ab + b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">completing the square, perfect square trinomials</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)² = a² − 2ab + b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">completing the square, expansions</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference of squares</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a² − b² = (a + b)(a − b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring, rationalizing denominators</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube of a sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)³ = a³ + 3a²b + 3ab² + b³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cubic expansions, depressed cubics</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube of a difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)³ = a³ − 3a²b + 3ab² − b³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cubic expansions, depressed cubics</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum of cubes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a³ + b³ = (a + b)(a² − ab + b²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring cubics</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference of cubes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a³ − b³ = (a − b)(a² + ab + b²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring cubics</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Binomial theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">general expansions of any degree</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a trinomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">three-variable expansions</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">aⁿ − bⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)(aⁿ⁻¹ + aⁿ⁻²b + ⋯ + bⁿ⁻¹)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring any degree, (a − b) always divides</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">aⁿ + bⁿ (odd n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)(aⁿ⁻¹ − aⁿ⁻²b + ⋯ + bⁿ⁻¹)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring odd-degree sums only</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sophie Germain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a⁴ + 4b⁴ = (a² + 2ab + 2b²)(a² − 2ab + 2b²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">specialty factoring</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Sum of squares (over ℂ)</td>
      <td style="padding: 12px 15px; color: #34495e;">a² + b² = (a + bi)(a − bi)</td>
      <td style="padding: 12px 15px; color: #34495e;">complex number factoring</td>
    </tr>
  </tbody>
</table>
`


  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `
## Polynomial structure

- [Polynomial](!/algebra/definitions#polynomial) — the family of expressions all these identities operate on
- [Binomial](!/algebra/definitions#binomial) — most identities expand or factor expressions of the form $a \\pm b$
- [Trinomial](!/algebra/definitions#trinomial) — three-term expressions appearing in obj4
- [Coefficient](!/algebra/definitions#coefficient) — the numerical factors generated by expansion (e.g., the $3$ in $3a^2b$)

## Identity types

- [Identity](!/algebra/definitions#identity) — an equation true for every value of its variables
- [Difference of Squares](!/algebra/definitions#difference_of_squares) — $a^2 - b^2 = (a+b)(a-b)$
- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial) — $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$
- [Sum and Difference of Cubes](!/algebra/definitions#sum_and_difference_of_cubes) — $a^3 \\pm b^3$ factorizations

## Higher-degree tools

- [Binomial Coefficient](!/combinatorics/binomial-coefficient) — $\\binom{n}{k}$, the coefficients in $(a+b)^n$
- [Binomial Theorem](!/combinatorics/binomial-theorem) — the general formula for $(a+b)^n$
`,
      before: ``,
      after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
      link: '',
    },

    obj1: {
      title: `Squares of Binomials`,
      content: `Three identities form the foundation of nearly all polynomial work. Squaring a sum, squaring a difference, and multiplying conjugate binomials produce predictable results that appear constantly in [factoring](!/algebra/polynomials/factoring), [completing the square](!/algebra/equations/quadratic#3), simplifying rational expressions, and solving [quadratic equations](!/algebra/equations/quadratic).

The middle term is what gets missed most often. Squaring $(a+b)$ does not give $a^2 + b^2$ — the cross term $2ab$ comes from the two outer-and-inner products that survive distribution. The conjugate product $(a+b)(a-b)$ is the exception: there the cross terms cancel, leaving a clean [difference of squares](!/algebra/polynomials/factoring#6) — the most heavily used factoring pattern in algebra.

Geometrically, $(a+b)^2$ is the area of a square with side $a+b$, dissected into one $a \\times a$ square, one $b \\times b$ square, and two $a \\times b$ rectangles. The cross term $2ab$ counts those two rectangles. Once that picture is in working memory, the formula becomes unforgettable. The reverse direction — recognizing $a^2 + 2ab + b^2$ as a [perfect square trinomial](!/algebra/polynomials/factoring#7) — is what lets you collapse three terms into one squared binomial on sight.


`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Cubes of Binomials`,
      content: `Cubing a binomial extends the squaring pattern by one degree. Four terms appear instead of three, with coefficients $1, 3, 3, 1$ governing the expansion. The signs alternate when the binomial is a difference, exactly as they did in the squared case.

These identities show up in [polynomial factoring](!/algebra/polynomials/factoring), in algebraic manipulation involving cubic expressions, and as a stepping stone toward the general binomial theorem. Recognizing $a^3 + 3a^2b + 3ab^2 + b^3$ as $(a+b)^3$ on sight saves the work of factoring it from scratch. The reverse-direction counterparts — the [sum and difference of cubes](!/algebra/polynomials/factoring#8) — are different identities entirely and live in obj5 below; do not confuse the two.

The structural pattern — descending powers of $a$, ascending powers of $b$, symmetric coefficients — is the same one that governs every higher power. Squares and cubes are the two cases worth committing to memory directly; beyond that, the binomial theorem takes over.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Higher Powers and the Binomial Theorem`,
      content: `The pattern in $(a+b)^2$ and $(a+b)^3$ generalizes. For any positive integer $n$:

$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$$

This is the [binomial theorem](!/combinatorics/binomial-theorem). The expansion has $n+1$ terms; the powers of $a$ descend from $n$ to $0$ while the powers of $b$ ascend from $0$ to $n$. The numerical coefficients are the [binomial coefficients](!/combinatorics/binomial-coefficient) $\\binom{n}{k}$, which can be read directly off Pascal's triangle.

The fourth and fifth powers expand to:

$$(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$

$$(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$

The coefficients $1,4,6,4,1$ and $1,5,10,10,5,1$ are the corresponding rows of Pascal's triangle. For a difference $(a-b)^n$, the same coefficients appear with alternating signs: every odd-indexed term (counting from $k=0$) flips sign, since $(-b)^k$ is negative when $k$ is odd.

Memorizing every higher power is unnecessary. The formula handles them all. What matters is recognizing when the binomial theorem applies and being able to read off any specific term — the term containing $b^k$ is $\\binom{n}{k} a^{n-k} b^k$, no full expansion required.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Trinomial Expansions`,
      content: `When three terms are squared or cubed, the expansion produces every pairwise product of the original terms, each appearing twice (or more) due to the multiple ways factors can combine.

The square of a trinomial follows directly from term-by-term [multiplication](!/algebra/polynomials/operations#5):

$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$

Three squared terms and three doubled cross-products — one for each pair of original terms. The pattern generalizes: squaring a sum of $k$ terms produces $k$ squares plus $\\binom{k}{2}$ doubled cross-products.

The cube of a trinomial is heavier:

$$(a+b+c)^3 = a^3 + b^3 + c^3 + 3(a^2b + a^2c + ab^2 + b^2c + ac^2 + bc^2) + 6abc$$

Three cubed terms, six trinomial cross-products of the form $a^2b$ each with coefficient $3$, and one central term $6abc$ where every variable appears once. The full multinomial theorem governs expansions like these in general, but for three variables at degree two or three, memorizing the pattern is faster than recomputing.

A useful identity hidden in the cubic case is $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - ac - bc)$, which factors a symmetric polynomial that resists the standard sum-of-cubes approach when three variables are involved.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Sums and Differences of Powers`,
      content: `These identities run in the opposite direction to the binomial expansions in obj1–obj3: they take a two-term expression and break it into factors. The two anchors are the [difference of squares](!/algebra/polynomials/factoring#6) and the [sum and difference of cubes](!/algebra/polynomials/factoring#8), but the pattern extends to every degree.

The difference of squares $a^2 - b^2 = (a+b)(a-b)$ is the most-used factoring identity in algebra, appearing constantly in simplification, rationalization, and solving equations. Its sum counterpart $a^2 + b^2$ does not factor over the real numbers — but over the [complex numbers](!/complex-numbers) it splits as $(a+bi)(a-bi)$, with the imaginary unit supplying what the reals lack.

The cubes split cleanly in both directions:

$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$

$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$

The quadratic factors $a^2 \\pm ab + b^2$ are irreducible over the reals (their discriminants are negative), so this factorization is the end of the line for cubes over $\\mathbb{R}$.

For higher powers, two general patterns govern everything. The difference $a^n - b^n$ always factors — $(a-b)$ divides it for any positive integer $n$:

$$a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + a^{n-3}b^2 + \\cdots + b^{n-1})$$

The sum $a^n + b^n$ factors only when $n$ is odd, with $(a+b)$ as the divisor:

$$a^n + b^n = (a+b)(a^{n-1} - a^{n-2}b + a^{n-3}b^2 - \\cdots + b^{n-1}) \\quad (n \\text{ odd})$$

When $n$ is even, $a^n + b^n$ is irreducible over the reals. The case $a^4 - b^4$ is worth noting separately because it factors twice — first as a difference of squares, then again because $a^2 - b^2$ factors further: $(a-b)(a+b)(a^2+b^2)$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Useful Specials`,
      content: `A handful of less common identities recur often enough to deserve a place alongside the standard ones. None of them follow from a general theorem the way the binomial expansions do — each is a specific algebraic fact worth recognizing on sight.

The Sophie Germain identity factors $a^4 + 4b^4$, an expression that looks irreducible at first glance:

$$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$$

It surfaces in number theory and contest problems where $a^4 + 4b^4$ appears and would otherwise resist factoring.

Two paired identities link sums and differences of squared binomials:

$$(a+b)^2 + (a-b)^2 = 2(a^2 + b^2)$$

$$(a+b)^2 - (a-b)^2 = 4ab$$

The first reduces a sum of squared sum and squared difference; the second extracts the product $ab$ from the same pair. Both are useful when manipulating expressions where $a+b$ and $a-b$ appear together.

A symmetric three-variable identity:

$$a^2 + b^2 + c^2 - ab - ac - bc = \\tfrac{1}{2}\\left[(a-b)^2 + (b-c)^2 + (a-c)^2\\right]$$

Recognizing this form proves the expression is non-negative for all real $a, b, c$, which is otherwise non-obvious.

A factorable quartic that is not a perfect square:

$$a^4 + a^2b^2 + b^4 = (a^2 + ab + b^2)(a^2 - ab + b^2)$$

This one looks like a difference of squares hiding inside a sum, and it appears in factoring problems where the standard patterns fail.

Finally, over the [complex numbers](!/complex-numbers), the sum of two squares factors using the imaginary unit:

$$a^2 + b^2 = (a + bi)(a - bi)$$

Over $\\mathbb{R}$ this expression is irreducible; over $\\mathbb{C}$ it splits cleanly, and the factorization is the basis for using complex conjugates to handle expressions that have no real factorization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Summary of Algebraic Identities`,
      content: `The table below collects every identity from this page in one place. Use it as a reference card — for each pattern, the table shows the canonical form and the contexts where the identity does the most work.`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const introContent = {
    id: "intro",
    title: "Shortcuts Worth Memorizing",
    content: `An algebraic identity is an [equation](!/algebra/equations) that holds for every value of its variables — not a problem to solve, but a structural fact about how operations interact. The identity $(a+b)^2 = a^2 + 2ab + b^2$ is true whether $a$ and $b$ are integers, fractions, irrationals, or expressions. It describes what squaring a sum does, regardless of what is being squared.

The point of memorizing these patterns is speed. Anyone can derive $(a+b)(a-b) = a^2 - b^2$ by [distribution](!/algebra/polynomials/operations#5), but doing so every time it appears wastes effort. Recognizing the pattern on sight — in either direction — turns a multi-step expansion into a single move. Read left to right, an identity expands. Read right to left, the same identity [factors](!/algebra/polynomials/factoring). Both readings matter.

The identities below are grouped by shape: squares first, then cubes, then higher powers, then expressions in three terms, then the sum and difference of powers, and finally a small set of less common forms that recur often enough to deserve a place in working memory.`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      obj1Table,
      obj2Table,
      obj5Table,
      summaryTable,
      seoData: {
        title: "Algebraic Identities | Learn Math Class",
        description: "Squares, cubes, higher powers, trinomials, sums and differences of powers, and special algebraic identities — the shortcuts worth memorizing.",
        keywords: keyWords.join(", "),
        url: "/algebra/identities",
        name: "Algebraic Identities"
      },
    }
  }
}

export default function AlgebraicIdentitiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj1Table,
  obj2Table,
  obj5Table,
  summaryTable,
}) {

  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [
        sectionsContent.obj0.content,
      ]
    },
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [
        sectionsContent.obj1.content,
        <div
          key={'obj1-table'}
          style={{ margin: '20px auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: obj1Table }}
        />,
      ]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [
        sectionsContent.obj2.content,
        <div
          key={'obj2-table'}
          style={{ margin: '20px auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: obj2Table }}
        />,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        sectionsContent.obj3.content,
      ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
      ]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [
        sectionsContent.obj5.content,
        <div
          key={'obj5-table'}
          style={{ margin: '20px auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: obj5Table }}
        />,
      ]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [
        sectionsContent.obj6.content,
      ]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [
        sectionsContent.obj7.content,
        <div
          key={'summary-table'}
          style={{ margin: '20px auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: summaryTable }}
        />,
      ]
    },
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
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '0px' }}>Algebraic Identities</h1>
      <br />
      <br />
      <SectionTableOfContents
        sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
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
      <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
      <br />
      <Sections sections={genericSections.slice(1)} />
      <br />
      <br />
      <br />
    </>
  )
}