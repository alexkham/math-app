import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import '@/pages/pages.css'
import SetBuilderExplorer from '../../../../app/components/diagrams/set-theory/SetBuilderExplorer'

export default function SetBuilderNotationPage() {
  return (
    <>
      <Head>
        <title>Set-Builder Notation Explorer | Learn Math Class</title>
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Set-Builder Notation Explorer</h1>
      <br/>
      <SetBuilderExplorer/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
