import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import '../../pages.css'
import Head from 'next/head'
import FormulasTOC from '@/app/components/examples/FormulaTOC'

export default function CombinatoricsFormulasPage({ combinatoricsFormulaList, keyWords }) {
  return (
    <>
      <Head>
        <title>Combinatorics Formulas | Learn Math Class</title>
        <meta name="description" content="Explore comprehensive combinatorics formulas including permutations and combinations." />
        <meta name="keywords" content={keyWords.join(', ')} />
        <link rel="canonical" href="https://www.learnmathclass.com/combinatorics/formulas" />
        <meta name="author" content="Learn Math Class" />
        <meta name="robots" content="index, follow" />
      </Head>
     {/* <GenericNavbar/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      
        <Breadcrumb />
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}} >Combinatorics Formulas</h1>
        <FormulasTOC data={combinatoricsFormulaList}/>
        <FormulaAccordionWrapper data={combinatoricsFormulaList} groupByField={['category']} />
      
      {/* <ScrollUpButton /> */}
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