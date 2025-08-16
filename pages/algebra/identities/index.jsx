import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import ExpandableTable from '@/app/components/generic-table/ExpandableTable'




export async function getStaticProps(){

  const keyWords=['algebraic identities','polynomial identities','math identities','algebra','solve algebra problems']


  const algebraicIdentitiesData = {
    "Basic Binomial Identities": [
      {
        id: 1,
        law: "Square of Sum",
        formula: "$(a + b)^2 = a^2 + 2ab + b^2$",
        explanation: "Square of a binomial sum"
      },
      {
        id: 2,
        law: "Square of Difference",
        formula: "$(a - b)^2 = a^2 - 2ab + b^2$",
        explanation: "Square of a binomial difference"
      },
      {
        id: 3,
        law: "Cube of Sum",
        formula: "$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$",
        explanation: "Cube of a binomial sum"
      },
      {
        id: 4,
        law: "Cube of Difference",
        formula: "$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$",
        explanation: "Cube of a binomial difference"
      },
      {
        id: 5,
        law: "Fourth Power of Sum",
        formula: "$(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$",
        explanation: "Fourth power of a binomial sum"
      },
      {
        id: 6,
        law: "Fifth Power of Sum",
        formula: "$(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$",
        explanation: "Fifth power of a binomial sum"
      },
      {
        id: 7,
        law: "Fifth Power of Difference",
        formula: "$(a - b)^5 = a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$",
        explanation: "Fifth power of a binomial difference"
      }
    ],
  
    "General Binomial Expansions": [
      {
        id: 8,
        law: "General Binomial Theorem",
        formula: "$(a + b)^n = \\sum_{k=0}^{n} C(n,k) a^{n-k} b^k$",
        explanation: "General form where C(n,k) = n!/(k!(n-k)!)"
      }
    ],
  
    "Multinomial Expansions": [
      {
        id: 9,
        law: "Trinomial Square",
        formula: "$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ac$",
        explanation: "Square of a trinomial"
      },
      {
        id: 10,
        law: "Trinomial Cube",
        formula: "$(a + b + c)^3 = a^3 + b^3 + c^3 + 3(a^2b + ab^2 + a^2c + ac^2 + b^2c + bc^2) + 6abc$",
        explanation: "Cube of a trinomial"
      }
    ],
  
    "Difference of Squares and Higher Powers": [
      {
        id: 11,
        law: "Difference of Squares",
        formula: "$a^2 - b^2 = (a + b)(a - b)$",
        explanation: "Factorization of difference of squares"
      },
      {
        id: 12,
        law: "Difference of Fourth Powers",
        formula: "$a^4 - b^4 = (a^2 + b^2)(a^2 - b^2) = (a^2 + b^2)(a + b)(a - b)$",
        explanation: "Factorization of difference of fourth powers"
      }
    ],
  
    "Sums and Differences of Powers": [
      {
        id: 13,
        law: "Sum of Cubes",
        formula: "$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$",
        explanation: "Factorization of sum of cubes"
      },
      {
        id: 14,
        law: "Difference of Cubes",
        formula: "$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$",
        explanation: "Factorization of difference of cubes"
      },
      {
        id: 15,
        law: "Sum of Fourth Powers",
        formula: "$a^4 + b^4 = (a^2 + \\sqrt{2}ab + b^2)(a^2 - \\sqrt{2}ab + b^2)$",
        explanation: "Factorization of sum of fourth powers"
      },
      {
        id: 16,
        law: "Sum of Fifth Powers",
        formula: "$a^5 + b^5 = (a + b)(a^4 - a^3b + a^2b^2 - ab^3 + b^4)$",
        explanation: "Factorization of sum of fifth powers"
      },
      {
        id: 17,
        law: "Difference of Fifth Powers",
        formula: "$a^5 - b^5 = (a - b)(a^4 + a^3b + a^2b^2 + ab^3 + b^4)$",
        explanation: "Factorization of difference of fifth powers"
      },
      {
        id: 18,
        law: "General Difference of Powers",
        formula: "$a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + ... + ab^{n-2} + b^{n-1})$",
        explanation: "General factorization of difference of nth powers"
      },
      {
        id: 19,
        law: "General Sum of Odd Powers",
        formula: "$a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + ... - ab^{n-2} + b^{n-1})$ when n is odd",
        explanation: "General factorization of sum of odd powers"
      }
    ],
  
    "Special Identities": [
      {
        id: 20,
        law: "Sophie Germain Identity",
        formula: "$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$",
        explanation: "Special factorization for fourth powers"
      },
      {
        id: 21,
        law: "Sum of Squares with Cross Term",
        formula: "$a^4 + a^2b^2 + b^4 = (a^2 + ab + b^2)(a^2 - ab + b^2)$",
        explanation: "Alternative factorization of sum-like fourth power expression"
      },
      {
        id: 22,
        law: "Symmetric Sum Identity",
        formula: "$a^2 + b^2 + c^2 - ab - bc - ca = \\frac{1}{2}[(a-b)^2 + (b-c)^2 + (c-a)^2]$",
        explanation: "Symmetric expression in terms of pairwise differences"
      },
      {
        id: 23,
        law: "Sum of Squares Plus Difference",
        formula: "$(a + b)^2 + (a - b)^2 = 2(a^2 + b^2)$",
        explanation: "Sum of squared sum and squared difference"
      },
      {
        id: 24,
        law: "Difference of Squared Sum and Difference",
        formula: "$(a + b)^2 - (a - b)^2 = 4ab$",
        explanation: "Difference between squared sum and squared difference"
      },
      {
        id: 25,
        law: "Complex Factorization",
        formula: "$a^2 + b^2 = (a + bi)(a - bi)$",
        explanation: "Factorization using complex numbers"
      }
    ],
  
    "Factoring Identities": [
      {
        id: 26,
        law: "Quadratic Factoring",
        formula: "$x^2 + (a + b)x + ab = (x + a)(x + b)$",
        explanation: "Standard quadratic factoring form"
      },
      {
        id: 27,
        law: "General Quadratic Roots",
        formula: "$ax^2 + bx + c = a(x - r_1)(x - r_2)$ where $r_1, r_2$ are roots",
        explanation: "General quadratic factorization using roots"
      }
    ],
  
    "Basic Algebraic Properties": [
      {
        id: 28,
        law: "Distributive Property",
        formula: "$a(b + c) = ab + ac$",
        explanation: "Basic distributive property"
      },
      {
        id: 29,
        law: "Product of Binomials",
        formula: "$(a + b)(c + d) = ac + ad + bc + bd$",
        explanation: "Product of two binomials"
      },
      {
        id: 30,
        law: "Product of Trinomials",
        formula: "$(a + b + c)(d + e + f) = ad + ae + af + bd + be + bf + cd + ce + cf$",
        explanation: "Product of two trinomials"
      }
    ]
  };

  const sectionsContent={

    basic:{
      title:`Basic Binomial Identities`,
      content:``,
      before:``,
      after:``,
  
  
    },
    general:{
      title:`General Binomial Expansions`,
      content:``,
      before:``,
      after:``,
  
    },
  
    multinomial:{
  
      title:`Multinomial Expansions`,
      content:``,
      before:``,
      after:``,
  
    },
    difference:{
      title:`Difference of Squares and Higher Powers`,
      content:``,
      before:``,
      after:``,
  
    },


    sums:{
  
      title:`Sums and Differences of Powers`,
      content:``,
      before:``,
      after:``,
  
    },
    special:{
  
      title:`Special Identities`,
      content:``,
      before:``,
      after:``,
  
    },
    factoring:{
  
      title:`Factoring Identities`,
      content:``,
      before:``,
      after:``,
  
    },

    properties:{
  
        title:`Basic Algebraic Properties`,
        content:``,
        before:``,
        after:``,
    
      }
  
  }


  return {
    props:{
      keyWords,
      algebraicIdentitiesData,
      sectionsContent

    }
  }
}

export default function LogarithmRulesPage({keyWords, algebraicIdentitiesData ,sectionsContent}) {

    

  const logarithRulesSections=[
    {
        id:'basic',
        title:sectionsContent.basic.title,
        link:'',
        content:[

          <div key={1} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={11}
        data={algebraicIdentitiesData[sectionsContent.basic.title]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

        ]
    },
    {
        id:'general',
        title:sectionsContent.general.title,
        link:'',
        content:[
          <div key={2} style={{marginLeft:'50px',marginRight:'50px'}}>
          <ExpandableTable key={12}
          data={algebraicIdentitiesData[sectionsContent.general.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,
        ]
    },
    {
        id:'multinomial',
        title:sectionsContent.multinomial.title,
        link:'',
        content:[
          <div key={3} style={{marginLeft:'50px',marginRight:'50px'}}>
          <ExpandableTable key={13}
          data={algebraicIdentitiesData[sectionsContent.multinomial.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,
        ]
    },
    {
      id:'difference',
      title:sectionsContent.difference.title,
      link:'',
      content:[
        <div key={4} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={14}
        data={algebraicIdentitiesData[sectionsContent.difference.title]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
      ]
  },
  {
    id:'sums',
    title:sectionsContent.sums.title,
    link:'',
    content:[
      <div key={5} style={{marginLeft:'50px',marginRight:'50px'}}>
      <ExpandableTable key={15}
      data={algebraicIdentitiesData[sectionsContent.sums.title]}
       displayColumns={ ["law", "formula", "explanation"]}
       copyableFields={["formula"]}
       includedFields={ ["law", "formula", "explanation"]} />
       </div> ,
    ]
},
{
  id:'special',
  title:sectionsContent.special.title,
  link:'',
  content:[
    <div key={6} style={{marginLeft:'50px',marginRight:'50px'}}>
    <ExpandableTable key={16}
    data={algebraicIdentitiesData[sectionsContent.special.title]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
  ]
},
{
  id:'factoring',
  title:sectionsContent.factoring.title,
  link:'',
  content:[
    <div key={7} style={{marginLeft:'50px',marginRight:'50px'}}>
    <ExpandableTable key={17}
    data={algebraicIdentitiesData[sectionsContent.factoring.title]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
  ]
},
{
    id:'properties',
    title:sectionsContent.properties.title,
    link:'',
    content:[
      <div key={8} style={{marginLeft:'50px',marginRight:'50px'}}>
      <ExpandableTable key={18}
      data={algebraicIdentitiesData[sectionsContent.properties.title]}
       displayColumns={ ["law", "formula", "explanation"]}
       copyableFields={["formula"]}
       includedFields={ ["law", "formula", "explanation"]} />
       </div> ,
    ]
  },
//   {
//     id:'domain',
//     title:sectionsContent.domain.title,
//     link:'',
//     content:[
//       <div key={7} style={{marginLeft:'50px',marginRight:'50px'}}>
//       <ExpandableTable key={12}
//       data={algebraicIdentitiesData[sectionsContent.domain.title]}
//        displayColumns={ ["law", "formula", "explanation"]}
//        copyableFields={["formula"]}
//        includedFields={ ["law", "formula", "explanation"]} />
//        </div> ,
//     ]
//   }
]

   


      
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <OperaSidebar
                 side='right'
                 topOffset='55px'
                 sidebarWidth='45px'
                 panelWidth='200px'
                 iconColor='white'
                 panelBackgroundColor='#f2f2f2'
               />
    <Breadcrumb/>
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'10px'}}>Logarithm Rules</h1>
    <br/>
    <br/>
    <SectionTableOfContents sections={logarithRulesSections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
     secondaryNavTitle="Similar Pages"/>
     
        <br/>
        <br/>
        <IntroSection/>
        <br/>
        <br/>
        <Sections sections={logarithRulesSections}/>
        <br/>
        <ScrollUpButton/>
    
    </>
  )
}
