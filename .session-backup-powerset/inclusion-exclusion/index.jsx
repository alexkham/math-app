import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import '@/pages/pages.css'
import InclusionExclusionExplorer from '../../../../app/components/diagrams/set-theory/InclusionExclusionExplorer'

export default function InclusionExclusionPage() {
  return (
    <>
      <Head>
        <title>Inclusion-Exclusion Principle Explorer | Learn Math Class</title>
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Inclusion-Exclusion Principle Explorer</h1>
      <br/>
      <InclusionExclusionExplorer/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
