// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import React from 'react'
// import combinatoricsFormulaList from '@/app/api/db/formulas/combinatorics/combinatoricsFormulas'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import '../../pages.css'

// export default function CombinatoricsFormulasPage() {
//     const keyWords=["combinatorics formulas","permutation formulas",
//         "combination and permutation formula","combination permutation formula"]
//   return (
//    <>
//    <MyNavbar/>
//    <br/>
//    <br/>
//    <br/>
//    <Breadcrumb/>
//    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}} >Combinatorics Formulas</h1>
//    <FormulaAccordionWrapper data={combinatoricsFormulaList} groupByField={['category']} />
//    <ScrollUpButton/>
//    </>
//   )
// }

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import React from 'react'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import '../../pages.css'
// import Head from 'next/head'

// export default function CombinatoricsFormulasPage({ combinatoricsFormulaList }) {
//   const keyWords = [
//     "combinatorics formulas",
//     "permutation formulas",
//     "combination and permutation formula",
//     "combination permutation formula"
//   ]

//   return (
//     <>
//       <Head>
//         <title>Combinatorics Formulas | Your Site Name</title>
//         <meta name="description" content="Explore comprehensive combinatorics formulas including permutations and combinations." />
//         <meta name="keywords" content={keyWords.join(', ')} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <MyNavbar />
//       <main className="container mx-auto px-4 py-8">
//         <Breadcrumb />
//         <h1 className="text-3xl font-bold mb-6 mt-16">Combinatorics Formulas</h1>
//         <FormulaAccordionWrapper data={combinatoricsFormulaList} groupByField={['category']} />
//       </main>
//       <ScrollUpButton />
//     </>
//   )
// }

// export async function getStaticProps() {
//   const combinatoricsFormulaList = await import('@/app/api/db/formulas/combinatorics/combinatoricsFormulas')
  
//   return {
//     props: {
//       combinatoricsFormulaList: combinatoricsFormulaList.default
//     }
//   }
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import React from 'react'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import '../../pages.css'
import Head from 'next/head'

export default function CombinatoricsFormulasPage({ combinatoricsFormulaList, keyWords }) {
  return (
    <>
      <Head>
        <title>Combinatorics Formulas | Learn Math Class</title>
        <meta name="description" content="Explore comprehensive combinatorics formulas including permutations and combinations." />
        <meta name="keywords" content={keyWords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.learnmathclass.com/combinatorics/formulas" />
        <meta name="author" content="Learn Math Class" />
        <meta name="robots" content="index, follow" />
      </Head>
      <MyNavbar />
      <br/>
      <br/>
      <br/>
      
        <Breadcrumb />
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}} >Combinatorics Formulas</h1>
        <FormulaAccordionWrapper data={combinatoricsFormulaList} groupByField={['category']} />
      
      <ScrollUpButton />
    </>
  )
}

export async function getStaticProps() {
  const combinatoricsFormulaList = await import('@/app/api/db/formulas/combinatorics/combinatoricsFormulas')
  
  const keyWords = [
    "combinatorics formulas",
    "permutation formulas",
    "combination and permutation formula",
    "combination permutation formula"
  ]

  return {
    props: {
      combinatoricsFormulaList: combinatoricsFormulaList.default,
      keyWords
    }
  }
}