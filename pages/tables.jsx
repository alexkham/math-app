import SelectTable2Steps from '@/app/components/select-table/SelectTable2Steps'
import React from 'react'
import fs from 'fs';
import path from 'path';
import { capitalizeWords } from '@/app/utils/utils-functions';
//import './tables.css'
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import LogarithmTable from '@/app/components/logarithm-table/LogarithmTable';
import Head from 'next/head';
import SecondaryNavbar from '@/app/components/nav-bar/SecondaryNavbar';


export async function getStaticProps() {
  const apiDirectory = path.join(process.cwd(), './app/api/db/tables');
  const filenames = fs.readdirSync(apiDirectory).filter(filename=>filename!='set-theory');
 
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
  console.log('Files Table Data'+filesData)
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
     <Head>
        <title>Mathematical Tables | Learn Math Class</title>
        <meta name="description" content="Access multiple mathematical tables including arithmetic, logarithmic, and trigonometric functions. Essential reference for students and professionals in mathematics and related fields." />
        <meta name="keywords" content="mathematical tables, arithmetic tables, logarithm tables, trigonometric tables, math reference" />
        <link rel="canonical" href="https://www.learnmathclass.com/tables" />
        <meta property="og:title" content="Mathematical Tables | Learn Math Class" />
        <meta property="og:description" content="Comprehensive mathematical tables for arithmetic, logarithmic, and trigonometric functions. Essential reference for math students and professionals." />
        <meta property="og:url" content="https://www.learnmathclass.com/tables" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.learnmathclass.com/images/math-tables-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mathematical Tables | Learn Math Class" />
        <meta name="twitter:description" content="Comprehensive mathematical tables for arithmetic, logarithmic, and trigonometric functions. Essential reference for math students and professionals." />
        <meta name="twitter:image" content="https://www.learnmathclass.com/images/math-tables-twitter.jpg" />
      </Head>
     <div className='tables-main'>
     <MyNavbar></MyNavbar>
     <br></br>
     <br></br>
     <br></br>
     {/* <SecondaryNavbar></SecondaryNavbar>
      */}
     
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
// import React, { useState } from 'react';
// import fs from 'fs';
// import path from 'path';
// import Head from 'next/head';
// import { motion } from 'framer-motion';
// import { Calculator, Functions, PieChart, Database, Sigma, Infinity } from 'lucide-react';
// import MyNavbar from '@/app/components/nav-bar/MyNavbar';
// import SecondaryNavbar from '@/app/components/nav-bar/SecondaryNavbar';
// import { capitalizeWords } from '@/app/utils/utils-functions';
// import styles from './tables.module.css';

// const categoryIcons = {
//   Arithmetics: Calculator,
//   Algebra: Functions,
//   Trigonometry: PieChart,
//   Statistics: Database,
//   Calculus: Sigma,
//   'Number Theory': Infinity,
// };

// export async function getStaticProps() {
//   const apiDirectory = path.join(process.cwd(), './app/api/db/tables');
//   const filenames = fs.readdirSync(apiDirectory);

//   const filesDataPromises = filenames.map(async filename => {
//     let fileContents;
//     try {
//       const myModule = await import(`../app/api/db/tables/${filename}`);
//       fileContents = myModule.default;
//     } catch (error) {
//       fileContents = { error: `Failed to load ${filename}` };
//     }
//     return { filename, content: fileContents };
//   });

//   const filesData = await Promise.all(filesDataPromises);
//   console.log('Files Table Data'+filesData)
//   return {
//     props: {
//       filesData,
//     },
//   };
// }

// export default function Tables({filesData}) {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const categories = [...new Set(filesData.map(file => capitalizeWords(file.filename.split('_')[0])))];
//   categories.push("Arithmetics");

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category === selectedCategory ? null : category);
//   };

//   return (
//     <>
//       <Head>
//         <title>Mathematical Tables | Learn Math Class</title>
//         <meta name="description" content="Access multiple mathematical tables including arithmetic, logarithmic, and trigonometric functions. Essential reference for students and professionals in mathematics and related fields." />
//         <meta name="keywords" content="mathematical tables, arithmetic tables, logarithm tables, trigonometric tables, math reference" />
//         <link rel="canonical" href="https://www.learnmathclass.com/tables" />
//         <meta property="og:title" content="Mathematical Tables | Learn Math Class" />
//         <meta property="og:description" content="Comprehensive mathematical tables for arithmetic, logarithmic, and trigonometric functions. Essential reference for math students and professionals." />
//         <meta property="og:url" content="https://www.learnmathclass.com/tables" />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="https://www.learnmathclass.com/images/math-tables-og.jpg" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Mathematical Tables | Learn Math Class" />
//         <meta name="twitter:description" content="Comprehensive mathematical tables for arithmetic, logarithmic, and trigonometric functions. Essential reference for math students and professionals." />
//         <meta name="twitter:image" content="https://www.learnmathclass.com/images/math-tables-twitter.jpg" />
//       </Head>
//       <div className={styles.tablesMain}>
//         <MyNavbar />
//         <SecondaryNavbar />
//         <main className={styles.main}>
//           <h1 className={styles.title}>Mathematical Tables</h1>
//           <p className={styles.subtitle}>Explore our comprehensive collection of mathematical tables</p>
          
//           <div className={styles.categoryGrid}>
//             {categories.map((category, index) => {
//               const Icon = categoryIcons[category] || Calculator;
//               return (
//                 <motion.div
//                   key={category}
//                   className={`${styles.categoryCard} ${selectedCategory === category ? styles.selected : ''}`}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => handleCategoryClick(category)}
//                 >
//                   <Icon size={36} className={styles.icon} />
//                   <h2 className={styles.categoryTitle}>{category}</h2>
//                   <p className={styles.categoryDescription}>Explore {category.toLowerCase()} tables and functions</p>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {selectedCategory && (
//             <div className={styles.tablesList}>
//               <h3 className={styles.tablesListTitle}>{selectedCategory} Tables</h3>
//               <ul>
//                 {filesData
//                   .filter(file => file.filename.toLowerCase().startsWith(selectedCategory.toLowerCase()))
//                   .map(file => (
//                     <li key={file.filename}>
//                       <a href={`/tables/${file.filename}`} className={styles.tableLink}>
//                         {capitalizeWords(file.filename.replace(/_/g, ' ').replace('.js', ''))}
//                       </a>
//                     </li>
//                   ))
//                 }
//               </ul>
//             </div>
//           )}
//         </main>
//       </div>
//     </>
//   );
// }
// import React, { useState } from 'react';
// import fs from 'fs';
// import path from 'path';
// import Head from 'next/head';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Calculator, Functions, PieChart, Database, Sigma, Infinity, ChevronDown, ChevronUp, Search } from 'lucide-react';
// import MyNavbar from '@/app/components/nav-bar/MyNavbar';
// import SecondaryNavbar from '@/app/components/nav-bar/SecondaryNavbar';
// import { capitalizeWords } from '@/app/utils/utils-functions';
// import styles from './tables.module.css';

// const categoryIcons = {
//   Arithmetics: Calculator,
//   Algebra: Functions,
//   Trigonometry: PieChart,
//   Statistics: Database,
//   Calculus: Sigma,
//   'Number Theory': Infinity,
// };

// export async function getStaticProps() {
//   const apiDirectory = path.join(process.cwd(), './app/api/db/tables');
//   const filenames = fs.readdirSync(apiDirectory);

//   const filesDataPromises = filenames.map(async filename => {
//     let fileContents;
//     try {
//       const myModule = await import(`../app/api/db/tables/${filename}`);
//       fileContents = myModule.default;
//     } catch (error) {
//       fileContents = { error: `Failed to load ${filename}` };
//     }
//     return { filename, content: fileContents };
//   });

//   const filesData = await Promise.all(filesDataPromises);
//   return {
//     props: {
//       filesData,
//     },
//   };
// }

// export default function Tables({filesData}) {
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const categories = [...new Set(filesData.map(file => capitalizeWords(file.filename.split('_')[0])))];
//   categories.push("Arithmetics");

//   const handleCategoryClick = (category) => {
//     setExpandedCategory(category === expandedCategory ? null : category);
//   };

//   const filteredTables = (category) => {
//     return filesData
//       .filter(file => file.filename.toLowerCase().startsWith(category.toLowerCase()))
//       .filter(file => file.filename.toLowerCase().includes(searchTerm.toLowerCase()));
//   };

//   return (
//     <>
//       <Head>
//         <title>Mathematical Tables | Learn Math Class</title>
//         <meta name="description" content="Access multiple mathematical tables including arithmetic, logarithmic, and trigonometric functions. Essential reference for students and professionals in mathematics and related fields." />
//         <meta name="keywords" content="mathematical tables, arithmetic tables, logarithm tables, trigonometric tables, math reference" />
//         <link rel="canonical" href="https://www.learnmathclass.com/tables" />
//         <meta property="og:title" content="Mathematical Tables | Learn Math Class" />
//         <meta property="og:description" content="Comprehensive mathematical tables for arithmetic, logarithmic, and trigonometric functions. Essential reference for math students and professionals." />
//         <meta property="og:url" content="https://www.learnmathclass.com/tables" />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="https://www.learnmathclass.com/images/math-tables-og.jpg" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Mathematical Tables | Learn Math Class" />
//         <meta name="twitter:description" content="Comprehensive mathematical tables for arithmetic, logarithmic, and trigonometric functions. Essential reference for math students and professionals." />
//         <meta name="twitter:image" content="https://www.learnmathclass.com/images/math-tables-twitter.jpg" />
//       </Head>
//       <div className={styles.tablesMain}>
//         <MyNavbar />
//         {/* <SecondaryNavbar /> */}
//         <br/>
//         <br/>
      
//         <main className={styles.main}>
//           <h1 className={styles.title}>Mathematical Tables</h1>
//           <p className={styles.subtitle}>Explore our comprehensive collection of mathematical tables</p>
          
//           <div className={styles.searchBar}>
//             <Search size={20} />
//             <input
//               type="text"
//               placeholder="Search tables..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className={styles.searchInput}
//             />
//           </div>
          
//           <div className={styles.categoryGrid}>
//             {categories.map((category, index) => {
//               const Icon = categoryIcons[category] || Calculator;
//               return (
//                 <motion.div
//                   key={category}
//                   className={`${styles.categoryCard} ${expandedCategory === category ? styles.expanded : ''}`}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => handleCategoryClick(category)}
//                 >
//                   <div className={styles.categoryHeader}>
//                     <Icon size={36} className={styles.icon} />
//                     <h2 className={styles.categoryTitle}>{category}</h2>
//                     {expandedCategory === category ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//                   </div>
//                   <AnimatePresence>
//                     {expandedCategory === category && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className={styles.tablesList}
//                       >
//                         <ul>
//                           {filteredTables(category).map(file => (
//                             <li key={file.filename}>
//                               <a href={`/tables/${file.filename}`} className={styles.tableLink}>
//                                 {capitalizeWords(file.filename.replace(/_/g, ' ').replace('.js', ''))}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }