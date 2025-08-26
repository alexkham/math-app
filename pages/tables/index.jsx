import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Book, Calculator, PieChart, Sigma, Percent,Section ,DraftingCompass,BookOpenCheck } from 'lucide-react';
import styles from './tables.module.css';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';

const categoryIcons = {
  'Algebra': Book,
  'Calculus': Sigma,
  'Trigonometry': PieChart,
  'Probability': Percent,
  'Arithmetics': Calculator,
  'Math-Symbols':Section,
  'Truth-Tables':BookOpenCheck,
  'Angle-Conversion-Table': DraftingCompass,
  'Trigonometry-Tables': PieChart ,
};


// const categoryLinks = {
//   // 'Algebra': '/algebra',
//   // 'Calculus': '/calculus',
//   // 'Trigonometry': '/trigonometry',
//   'Probability': '/tables/probability',
//   'Arithmetics': '/tables/arithmetics',
//   'Math-Symbols': '/math-symbols'
// };


export default function Tables({ categories ,categoryLinks }) {
  // return (
  //   <>
  //     <Head>
  //       <title>Mathematical Tables | Learn Math Class</title>
  //       <meta name="description" content="Explore our comprehensive collection of mathematical tables including algebra, calculus, trigonometry, probability, and arithmetics." />
  //       <link rel="canonical" href="https://www.learnmathclass.com/tables" />
  //     </Head>
  //     <GenericNavbar/>
  //     <br/>
  //     <br/>
  //     <br/>
  //     <OperaSidebar 
  //       side='right'
  //       topOffset='60px' 
  //       sidebarWidth='45px'
  //       panelWidth='200px'
        
  //       iconColor='white'
  //       panelBackgroundColor='#f2f2f2'/> 
  //     <div className={styles.container}>
  //     <Breadcrumb/>
  //       <h1 className={styles.title}>Mathematical Tables</h1>
  //       <div className={styles.grid}>
  //         {categories.map((category) => {
  //           const Icon = categoryIcons[category];
  //           return (
  //             <Link href={`/tables/${category.toLowerCase()}`} key={category} className={styles.link}>
  //               <div className={styles.card}>
  //                 <div className={styles.cardContent}>
  //                   <Icon className={styles.icon} />
  //                   <h2 className={styles.categoryTitle}>{category.replaceAll('-',' ')}</h2>
  //                   <p className={styles.description}>Explore {category.toLowerCase()} tables and functions</p>
  //                 </div>
  //                 <div className={styles.cardFooter}>
  //                   <span className={styles.viewText}>View Tables →</span>
  //                 </div>
  //               </div>
  //             </Link>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <>
      <Head>
        <title>Mathematical Tables | Learn Math Class</title>
        <meta name="description" content="Explore our comprehensive collection of mathematical tables including algebra, calculus, trigonometry, probability, and arithmetics." />
        <link rel="canonical" href="https://www.learnmathclass.com/tables" />
      </Head>
      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        // topOffset='60px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <div className={styles.container}>
        <Breadcrumb/>
        <h1 className={styles.title}>Mathematical Tables</h1>
        <div className={styles.grid}>
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <Link href={categoryLinks[category]} key={category} className={styles.link}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <Icon className={styles.icon} />
                    <h2 className={styles.categoryTitle}>{category.replaceAll('-',' ')}</h2>
                    <p className={styles.description}>Explore {category.toLowerCase().replaceAll('-',' ')} tables and functions</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.viewText}>View Tables →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );


}

export async function getStaticProps() {

  const categoryLinks = {
    // 'Algebra': '/algebra',
    // 'Calculus': '/calculus',
    // 'Trigonometry': '/trigonometry',
    'Probability': '/tables/probability',
    'Arithmetics': '/tables/arithmetics',
    'Math-Symbols': '/math-symbols',
    'Truth-Tables':'/tables/truth-tables',
    'Angle-Conversion-Table':'/tables/angle-conversion',
    'Trigonometry-Tables':'/tables/trigonometry'

  };
  
  const categories = 
  [
    // 'Algebra', 
    // 'Calculus', 
    // 'Trigonometry',
     'Probability',
      'Arithmetics',
      'Math-Symbols',
      'Truth-Tables',
      'Angle-Conversion-Table',
      'Trigonometry-Tables',

   ];
  return { props: { categories, categoryLinks } };
}