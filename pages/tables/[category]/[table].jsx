
import React from 'react';
import RootLayout from './layout'
import GenericTable from '@/app/components/generic-table/GenericTable';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import '../table.css'
import MyNavbar from '@/app/components/nav-bar/MyNavbar';



// Function to generate static paths for each category and table
export async function getStaticPaths() {
    // Since you don't have a predefined list of categories and tables,
    // you can use fallback: 'blocking' to generate them on-demand
    return {
      paths: [], // No predefined paths
      fallback: 'blocking' // Generate paths on-demand
    };
  }
  

// Function to fetch data for the static page based on URL parameters
export async function getStaticProps({ params }) {
  // params are automatically decoded by Next.js
  const { category, table } = params;
  //const filePath = path.join(process.cwd(), `app/api/db/tables/${category}_tables.json`);
  let selectedItem;
  let fileContents;
  try {
    // const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // selectedItem = fileContents[0]//.find(item => item.tableTitle === table);
    const myModule = await import(`../../../app/api/db/tables/${category}_tables.json`);
    fileContents = myModule.default;
    
    selectedItem = fileContents.find(item => 
    item.tableTitle.replace(/\s+/g, ' ').trim() === table.replace(/\s+/g, ' ').trim());
    if (!selectedItem) {
        selectedItem = null;
      }

  } catch (error) {
    console.error(`Failed to read file at `, error);
    selectedItem = null; 
  }

  return {
    props: {
      category,
      table,
      selectedItem,
    },
  };
}


export default function TablePage({ category, table, selectedItem }) {
    
  return (
    
       
     <>
    <div className='table-container'>
        <MyNavbar></MyNavbar>
    
    <GenericTable tableData={selectedItem}></GenericTable>
    <br></br>
    <br></br>
    <br></br>
    <ScrollUpButton></ScrollUpButton>
    </div>

     
      </>
    
  );
}

