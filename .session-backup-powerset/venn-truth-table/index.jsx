import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import '@/pages/pages.css'
import VennTruthTableExplorer from '../../../../app/components/diagrams/set-theory/VennTruthTableExplorer'

export default function VennTruthTablePage() {
  return (
    <>
      <Head>
        <title>Venn Diagram and Truth Table Explorer | Learn Math Class</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Venn Diagram and Truth Table Explorer</h1>
      <br/>
      <VennTruthTableExplorer/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
