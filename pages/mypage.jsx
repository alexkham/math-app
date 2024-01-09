import fs from 'fs';
import path from 'path';
import tableData from '../app/api/db/tables/trigonometry_tables.json'
import SelectComponent from '@/app/components/select-component/SelectComponent';


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


export default function MyPage({ filesData }) {
   
  const titles=tableData.map(d=>d.tableTitle)
  const branches=filesData.map(file=>file.filename.split('_')[0])
  const tableTitles=filesData[1].content.map(item=>item.tableTitle)
  return (
    <div>
      {/* Render your data here */}
      {filesData.map((file, index) => (
        <div key={index}>
          <h2 style={{color:'red'}}>{file.filename}</h2>
          {/* <p>{JSON.stringify(file.content)}</p> */}
          <span>{file.filename.split('_')[0]}</span>
          <br></br>
          <br></br>
          {/* <span>{filesData?.content.tableTitle}</span> */}
          {/* {(file.content && !file.content.error) ? (fileContents.map((item,index)=>(
            <span key={index} style={{color:'green'}}>{item.tableTitle}</span>
          ) )): (
            <span>Error loading content</span>
          )} */}
          {(file.content && !file.content.error) ? (
            
            file.content.map((item, itemIndex) => (
              <li key={itemIndex} style={{ color: 'green' }}>{item.tableTitle}{'    ,'}</li>
            ))
          ) : (
            <span>Error loading content</span>
          )}
        </div>
      ))}

      <SelectComponent options={branches}></SelectComponent>
      <br></br>
      <br></br>
      <br></br>
      <SelectComponent options={tableTitles}></SelectComponent>

      {tableData.map((item,index)=>{
        return (
          <h2 key={index}>{item.tableTitle}</h2>
        )
      })}
       
      <SelectComponent options={titles}></SelectComponent>
       
      <span>Hello</span>
    </div>
  );
}
