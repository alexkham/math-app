import SelectTable2Steps from '@/app/components/select-table/SelectTable2Steps'
import React from 'react'
import fs from 'fs';
import path from 'path';
import { capitalizeWords } from '@/app/utils/utils-functions';
import './tables.css'
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import LogarithmTable from '@/app/components/logarithm-table/LogarithmTable';


export async function getStaticProps() {
  const apiDirectory = path.join(process.cwd(), './app/api/db/tables');
  const filenames = fs.readdirSync(apiDirectory);

  const filesDataPromises = filenames.map(async filename => {
    let fileContents;
    try {
      const myModule = await import(`../app/api/db/tables/${filename}`);
      fileContents = myModule.default;
    } catch (error) {
      fileContents = { error: `Failed to load ${filename}` };
    }
    return { filename, content: fileContents };
  });

  const filesData = await Promise.all(filesDataPromises);
  console.log(filesData)
  return {
    props: {
      filesData,
    },
  };
}


export default function tables({filesData}) {
  const categoryOptions=filesData.map(file=>capitalizeWords(file.filename.split('_')[0]))
  categoryOptions.push("Arithmetics")
  return (
    <>
    
     <div className='tables-main'>
     <MyNavbar></MyNavbar>
     <br></br>
     <br></br>
     <br></br>
     
     
     <br></br>
    <SelectTable2Steps 
    categoryOptions={categoryOptions}
     filesData={filesData}></SelectTable2Steps>
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
     {/* <div style={{position:'absolute',top:'600px'}}>
     <LogarithmTable></LogarithmTable> */}
     {/* </div> */}
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
    
    
   
    </div>
    </>
  )
}
