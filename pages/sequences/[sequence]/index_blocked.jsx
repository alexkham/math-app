// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../app/globals.css'
// import fs from 'fs';
// import path from 'path';
// import SequenceTable from '@/app/components/sequences/SequenceTable';



// export async function getStaticProps({ params }) {
//     // Access the dynamic part of the URL
//     const sequenceUrl= params.sequence;
//     console.log(sequenceUrl)
//     const sequenceName=sequenceUrl.split('-')[0];
//     console.log(sequenceName);



//     const sequencesDirPath = path.join(process.cwd(), 'app', 'api', 'db', 'sequences');
//     const sequenceFilePath = path.join(sequencesDirPath, `${sequenceName}.json`);
//     const sequenceData = JSON.parse(fs.readFileSync(sequenceFilePath, 'utf8'));
//     // console.log(sequenceData)
  
//     // // Now use `sequenceName` to load data from your files or database
//     // const sequencesDirPath = path.join(process.cwd(), 'data', 'sequences');
//     // const sequenceFilePath = path.join(sequencesDirPath, `${sequenceName}.json`); // Adjust the file extension if necessary
//     // const sequenceData = JSON.parse(fs.readFileSync(sequenceFilePath, 'utf8'));
  
//     // Pass the sequence data to the page via props
//     return {
//       props: {
//         // sequenceData,
//         sequenceName,
//         sequenceData
//       },
//     };
//   };

//   export async function getStaticPaths() {
//     const sequencesDirPath = path.join(process.cwd(), 'app', 'api', 'db', 'sequences');

//     const fileNames = fs.readdirSync(sequencesDirPath);

//     const paths = fileNames.map((fileName) => {
//         // Extract the sequenceName and numbers from the fileName
//         // Assuming fileName format is "sequenceName-numbers.json"
//         const match = fileName.match(/^(.+)-(\d+)\.json$/);
//         if (match) {
//             const [, sequenceName, numbers] = match; // Destructure to skip the full match
//             return {
//                 params: { sequence: `${sequenceName}-${numbers}` }, // Construct the dynamic part
//             };
//         }
//         return null;
//     }).filter(Boolean); // Filter out any null values if a fileName didn't match the expected pattern
//      console.log(paths)
//     return { paths, fallback: false };
// }
  

// export default function Sequence({sequenceName,sequenceData}) {
//   return (
//     <div className='outer-container'>
//     <MyNavbar></MyNavbar>
   
//     {/* <h2>Sequence Page</h2>
//     <span>{sequenceName}</span> */}
    
//     {/* {sequenceData&&sequenceData.map((num,index)=>{
//         return(
//             <div key={index}>{num}</div>
//         )
//     })} */}

//     <br></br>
//     <br></br>
//    {sequenceData&& <SequenceTable sequenceData={sequenceData} sequenceTitle={sequenceName}></SequenceTable>}
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <ScrollUpButton></ScrollUpButton>
//     </div>
//   )
// }
