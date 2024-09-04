import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import path from 'path';
import fs from 'fs';
import Link from 'next/link';
import Head from 'next/head';



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
    <Head>
        <title>Mathematical Sequences | Learn Math Class</title>
        <meta name="description" content="Discover various mathematical sequences including arithmetic, geometric, and more. Explore the patterns and properties of different number sequences in mathematics." />
        <meta name="keywords" content="mathematical sequences, sequences, number patterns, arithmetic sequence, geometric sequence" />
        <link rel="canonical" href="https://www.learnmathclass.com/sequences" />
        <meta property="og:title" content="Mathematical Sequences | Learn Math Class" />
        <meta property="og:description" content="Explore various mathematical sequences and number patterns. Learn about arithmetic, geometric, and other important sequences in mathematics." />
        <meta property="og:url" content="https://www.learnmathclass.com/sequences" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.learnmathclass.com/images/sequences-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mathematical Sequences | Learn Math Class" />
        <meta name="twitter:description" content="Explore various mathematical sequences and number patterns. Learn about arithmetic, geometric, and other important sequences in mathematics." />
        <meta name="twitter:image" content="https://www.learnmathclass.com/images/sequences-twitter.jpg" />
      </Head>
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
