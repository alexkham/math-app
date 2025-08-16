import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import path from 'path';
import fs from 'fs';
import Link from 'next/link';
import Head from 'next/head';
import TableOfContents from '@/app/components/page-components/table-of-contents/TableOfContents';
import SecondaryNavbar from '@/app/components/nav-bar/SecondaryNavbar';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import ContentBlocks from '@/app/components/page-components/content-components/ContentBlocks';
import '../pages.css'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';


// export async function getStaticProps() {
//     const sequencesDirPath = path.join(process.cwd(), 'app', 'api', 'db', 'sequences');
  
//     // Read the directory contents
//     const fileNames = fs.readdirSync(sequencesDirPath);
  
//     // Process the file names as needed for your application
//     // For example, splitting them on '_' and getting the first part
//     const sequenceNames = fileNames.map(fileName => {
//       const parts = fileName.split('.');
//       return parts[0]; // Assuming you want the first part before '_'
//     });

    
// const tocItems = [
//   {
//     title: "Introduction to Sequences",
//     subItems: [
//       { title: "Definition", content: "What sequences are in mathematics." },
//       { title: "Importance", content: "Why learning about sequences is crucial." }
//     ],
//     content: ""
//   },
//   {
//     title: "Common Types of Sequences",
//     subItems: [
//       {
//         title: "Arithmetic Sequences",
//         subItems: [
//           { title: "Definition", content: "What arithmetic sequences are." },
//           { title: "Positive Common Difference", content: "" },
//           { title: "Negative Common Difference", content: "" },
//           { title: "Zero Common Difference", content: "" }
//         ],
//         content: ""
//       },
//       {
//         title: "Geometric Sequences",
//         subItems: [
//           { title: "Definition", content: "What geometric sequences are." },
//           { title: "Positive Common Ratio", content: "" },
//           { title: "Negative Common Ratio", content: "" }
//         ],
//         content: ""
//       },
//       {
//         title: "Harmonic Sequences",
//         subItems: [
//           { title: "Definition", content: "What harmonic sequences are." },
//           { title: "Basic Harmonic Sequence", content: "" }
//         ],
//         content: ""
//       },
//       {
//         title: "Square and Cubic Number Sequences",
//         subItems: [
//           { title: "Definition", content: "What square and cubic number sequences are." },
//           { title: "Square Number Sequence", content: "" },
//           { title: "Cubic Number Sequence", content: "" }
//         ],
//         content: ""
//       },
//       {
//         title: "Factorial Sequences",
//         subItems: [
//           { title: "Definition", content: "What factorial sequences are." },
//           { title: "Basic Factorial Sequence", content: "" }
//         ],
//         content: ""
//       }
//     ],
//     content: ""
//   },
//   {
//     title: "Special Number Sequences",
//     subItems: [
//       {
//         title: "Fibonacci Sequence",
//         subItems: [
//           { title: "Introduction", content: "Brief overview of the Fibonacci sequence." },
//           { title: "Link", link: "/sequences/fibonacci" }
//         ],
//         content: ""
//       },
//       {
//         title: "Prime Numbers",
//         subItems: [
//           { title: "Introduction", content: "Brief overview of what prime numbers are." },
//           { title: "Link", link: "/sequences/prime-numbers" }
//         ],
//         content: ""
//       }
//     ],
//     content: ""
//   },
//   {
//     title: "Applications of Sequences",
//     subItems: [
//       { title: "Computer Science", content: "" },
//       { title: "Physics", content: "" },
//       { title: "Finance", content: "" }
//     ],
//     content: ""
//   },
//   {
//     title: "Further Reading",
//     subItems: [
//       { title: "Books", content: "" },
//       { title: "External Resources", content: "" }
//     ],
//     content: ""
//   }
// ];

  
//     // Pass the sequence names to your page component
//     return {
//       props: {
//         sequences: sequenceNames,
//       },
//     };
//   };

  
  

export default function SequencesPage({sequences,tocItems}) {
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
   <GenericNavbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='secondary-nav'>
   <Breadcrumb></Breadcrumb>
    <SecondaryNavbar
     mode={"siblings"} 
     alignment='left' 
     title=' '
     verticalPosition='40%'
     backgroundColor='blue'
     height={'60px'}
     width={'50px'}
     
     
     
    ></SecondaryNavbar>
    </div>
    <br></br>
    <SecondaryNavbar mode='children'  verticalPosition='25%' 

   ></SecondaryNavbar>
   {/* width={'50px'} */}
    <br></br>
   <h1 className='title'>Sequences Main Page</h1>
  <TableOfContents tocItems={tocItems} showNumbers={false}></TableOfContents>
  <ContentBlocks tocItems={tocItems}></ContentBlocks>
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
   {/* {sequences.map((word,index)=>{
    return(
        <>
        <Link href={`/sequences/${word}-numbers`} >
        <div key={index}>{word}</div>
        </Link>
        
        </>
    )
   })} */}
   <ScrollUpButton></ScrollUpButton>
   </>
  )
}



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

  
const tocItems = [
{
  title: "Introduction to Sequences",
  subItems: [
    { title: "Definition", content: "What sequences are in mathematics." },
    { title: "Importance", content: "Why learning about sequences is crucial." }
  ],
  content: `    
      A **sequence** in mathematics is defined as a list ( finite or infinite) of numbers ( called terms)  arranged in a specific order. 
      **Sequences** are typically described by a rule or formula that determines the term at every single position of the **sequence**.
      For example, the **sequence** of even numbers 2,4,6,8,… is determined by the formula n =2n, where 𝑛  is the position of the term in the **sequence**.

      On the other hand, the term **series** refers to a sum of the terms of a **sequence**. We get a **series** by adding up the elements of a sequence.
      Similarly to **sequences**, **series** may be finite or infinite. For a finite **series**, the sum involves adding a fixed number of terms, such as 2+4+6+8.
      An infinite **series** continues indefinitely, such as 2+4+6+8+…, and its sum may or may not converge to a specific value, depending on the sequence's characteristics.

  `
},
{
  title: "Common Types of Sequences",
  subItems: [
    {
      title: "Arithmetic Sequences",
      subItems: [
        { title: "Definition", content: "What arithmetic sequences are." },
        { title: "Positive Common Difference", content: "" },
        { title: "Negative Common Difference", content: "" },
        { title: "Zero Common Difference", content: "" }
      ],
      content: ""
    },
    {
      title: "Geometric Sequences",
      subItems: [
        { title: "Definition", content: "What geometric sequences are." },
        { title: "Positive Common Ratio", content: "" },
        { title: "Negative Common Ratio", content: "" }
      ],
      content: ""
    },
    {
      title: "Harmonic Sequences",
      subItems: [
        { title: "Definition", content: "What harmonic sequences are." },
        { title: "Basic Harmonic Sequence", content: "" }
      ],
      content: ""
    },
    {
      title: "Square and Cubic Number Sequences",
      subItems: [
        { title: "Definition", content: "What square and cubic number sequences are." },
        { title: "Square Number Sequence", content: "" },
        { title: "Cubic Number Sequence", content: "" }
      ],
      content: ""
    },
    {
      title: "Factorial Sequences",
      subItems: [
        { title: "Definition", content: "What factorial sequences are." },
        { title: "Basic Factorial Sequence", content: "" }
      ],
      content: ""
    }
  ],
  content: ""
},
{
  title: "Special Number Sequences",
  subItems: [
    {
      title: "Fibonacci Sequence",
      subItems: [
        { title: "Introduction", content: "Brief overview of the Fibonacci sequence." },
        { title: "Link", link: "/sequences/fibonacci" }
      ],
      content: ""
    },
    {
      title: "Prime Numbers",
      subItems: [
        { title: "Introduction", content: "Brief overview of what prime numbers are." },
        { title: "Link", link: "/sequences/prime-numbers" }
      ],
      content: ""
    }
  ],
  content: ""
},
{
  title: "Applications of Sequences",
  subItems: [
    { title: "Computer Science", content: "" },
    { title: "Physics", content: "" },
    { title: "Finance", content: "" }
  ],
  content: ""
},
{
  title: "Further Reading",
  subItems: [
    { title: "Books", content: "" },
    { title: "External Resources", content: "" }
  ],
  content: ""
}
];


  // Pass the sequence names to your page component
  return {
    props: {
      sequences: sequenceNames,
      tocItems
    },
  };
};





// `A sequence in mathematics is defined as a list ( finite or infinite) of numbers (that are called terms)  arranged in a specific order. Sequences are typically described by 
// a rule or formula that determines the term at every single position of the sequence. For example, the sequence of even numbers 2,4,6,8,… is determined by the formula n =2n, 
// where 𝑛 n is the position of the term in the sequence.`


