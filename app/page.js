import ButtonGroup from './components/button-group/ButtonGroup';
import GenericTable from './components/generic-table/GenericTable';
import MyAccordion from './components/my-accordion/MyAccordion';
//import styles from './page.module.css'
// import tableData from './api/db/tables/trigonometry_tables.json'
import './globals.css'
import SelectComponent from './components/select-component/SelectComponent';
import SelectionPage from './components/SelectionPage';
import  SelectionPageNavigate from './components/SelectionPageNavigate'
import ParentComponent from './components/ParentSelect';
import ParentSelect from './components/ParentSelect';
import SelectTable2Steps from './components/select-table/SelectTable2Steps';
import Link from 'next/link';
import MyNavbar from './components/nav-bar/MyNavbar';
import FlexTableDynamic from './components/z-table/FlexTableDynamic';
import ZTableContainer from './components/z-table/ZTableContainer';
import ZScoreVisualizer from './components/z-table/ZScoreVisualizer';
import { VennDiagram } from 'venn.js';


export default function Home() {
  const port=process.env.NEXT_PUBLIC_PORT;
  const optionsCategory=["category1","category2","category3","category4"]
  const optionsTitle=["title1","title2","title3","title4"]
 

  return (
    <div className='outer-container'>
      
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link href={'/tables'}>
       <button>Go to Tables Page</button>
       </Link>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
    
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     {/* <ZScoreVisualizer></ZScoreVisualizer> */}
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
    
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
    </div>
  )
}
