import ButtonGroup from './components/button-group/ButtonGroup';
import GenericTable from './components/generic-table/GenericTable';
import MyAccordion from './components/my-accordion/MyAccordion';
import styles from './page.module.css'
// import tableData from './api/db/tables/trigonometry_tables.json'
import SelectComponent from './components/select-component/SelectComponent';
import SelectionPage from './components/SelectionPage';
import  SelectionPageNavigate from './components/SelectionPageNavigate'
import ParentComponent from './components/ParentSelect';
import ParentSelect from './components/ParentSelect';
import SelectTable2Steps from './components/select-table/SelectTable2Steps';
import Link from 'next/link';
import MyNavbar from './components/nav-bar/MyNavbar';


export default function Home() {
  const port=process.env.NEXT_PUBLIC_PORT;
  const optionsCategory=["category1","category2","category3","category4"]
  const optionsTitle=["title1","title2","title3","title4"]

  return (
    <main className={styles.main}>
      <div>First Significant Line</div>
      {/* <MyNavbar></MyNavbar> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link href={'/tables'}>
       <button>Tables</button>
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
      <div class="hero">
  <div class="container">
    <h1>Welcome to our website</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, repudiandae.</p>
  </div>
</div>

<section class="container content">
  <h2>content 1</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, animi sunt! Libero optio, asperiores quis ipsa eum eveniet labore nihil expedita nostrum laborum dicta at deleniti sapiente atque assumenda quo corrupti exercitationem animi minus nemo vero soluta alias perspiciatis! Aspernatur, laborum consectetur repellat repellendus aliquam sed. Cupiditate accusantium porro at quae, maxime itaque accusamus! Ipsam tempore, illo similique officia neque asperiores eveniet omnis rem veritatis cumque quos amet placeat dignissimos quisquam nesciunt quas. Adipisci perspiciatis veniam, voluptatibus dolores doloremque quisquam qui possimus, vero ab dolorum temporibus soluta libero similique assumenda debitis dolorem ut perferendis incidunt nobis facere eaque. Enim, nemo?</p>
  <h3>content 2</h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, animi sunt! Libero optio, asperiores quis ipsa eum eveniet labore nihil expedita nostrum laborum dicta at deleniti sapiente atque assumenda quo corrupti exercitationem animi minus nemo vero soluta alias perspiciatis! Aspernatur, laborum consectetur repellat repellendus aliquam sed. Cupiditate accusantium porro at quae, maxime itaque accusamus! Ipsam tempore, illo similique officia neque asperiores eveniet omnis rem veritatis cumque quos amet placeat dignissimos quisquam nesciunt quas. Adipisci perspiciatis veniam, voluptatibus dolores doloremque quisquam qui possimus, vero ab dolorum temporibus soluta libero similique assumenda debitis dolorem ut perferendis incidunt nobis facere eaque. Enim, nemo?</p>
</section> 
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
    </main>
  )
}
