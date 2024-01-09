import SelectTable2Steps from '@/app/components/select-table/SelectTable2Steps'
import React from 'react'
import fs from 'fs';
import path from 'path';
import { capitalizeWords } from '@/app/utils/utils-functions';
import './tables.css'


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

  return {
    props: {
      filesData,
    },
  };
}


export default function tables({filesData}) {
  const categoryOptions=filesData.map(file=>capitalizeWords(file.filename.split('_')[0]))
  
  return (
    <>
     <div className='tables-main'>
    <SelectTable2Steps 
    categoryOptions={categoryOptions}
     filesData={filesData}></SelectTable2Steps>
    </div>
    </>
  )
}
