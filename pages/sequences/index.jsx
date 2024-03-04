import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import path from 'path';
import fs from 'fs';
import Link from 'next/link';



export async function getStaticProps() {
    const sequencesDirPath = path.join(process.cwd(), 'app', 'api', 'db', 'sequences');
  
    // Read the directory contents
    const fileNames = fs.readdirSync(sequencesDirPath);
  
    // Process the file names as needed for your application
    // For example, splitting them on '_' and getting the first part
    const sequenceNames = fileNames.map(fileName => {
      const parts = fileName.split('.');
      return parts[0]; // Assuming you want the first part before '_'
    });
  
    // Pass the sequence names to your page component
    return {
      props: {
        sequences: sequenceNames,
      },
    };
  };

  
  

export default function SequencesPage({sequences}) {
  return (
   <>
   <MyNavbar></MyNavbar>
   <br></br>
   <br></br>
  
   <br></br>
   <br></br>
   <h2>Sequences Main Page</h2>
   {sequences.map((word,index)=>{
    return(
        <>
        <Link href={`/sequences/${word}-numbers`} >
        <div key={index}>{word}</div>
        </Link>
        
        </>
    )
   })}
   <ScrollUpButton></ScrollUpButton>
   </>
  )
}
