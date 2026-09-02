import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import '@/pages/pages.css'
import IndexedUnionIntersectionExplorer from '../../../../app/components/diagrams/set-theory/IndexedUnionIntersectionExplorer'

export default function IndexedUnionIntersectionPage() {
  return (
    <>
      <Head>
        <title>Indexed Union and Intersection Explorer | Learn Math Class</title>
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Indexed Union and Intersection Explorer</h1>
      <br/>
      <IndexedUnionIntersectionExplorer/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
