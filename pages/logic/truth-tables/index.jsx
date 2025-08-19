
import { GetStaticProps } from 'next';
import Head from 'next/head';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import LogicCalculator from '@/app/components/logic-calculator/LogicCalculator';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';

import styles from './TruthTablesPage.module.css';
import ReactMarkdown from 'react-markdown';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';



export const getStaticProps = async () => {
  const operatorDescriptions = await import('@/app/components/logic-calculator/operatorDescriptions');
  
  const keyWords = ['truth table', 'logic calculator', 'Boolean algebra', 'propositional logic', 'logical operators', 'AND', 'OR', 'NOT', 'XOR', 'NAND', 'NOR'];

  return {
    props: {
      seoData: {
        title: "Dynamic Truth Table Generator | Logic Calculator | Learn Math Class",
        description: "Generate dynamic truth tables for logical expressions with our interactive Logic Calculator. Learn about logical operators, Boolean algebra, and propositional logic.",
        keywords: keyWords.join(", "),
        url: "/logic/truth-tables",
        name: "Dynamic Truth Table Generator"
      },
      operatorDescriptions: operatorDescriptions.default,
      keyWords
    },
  };
};




const TruthTablesPage = ({ operatorDescriptions }) => {
  return (
    <>
     
       <Head>
        <title>Dynamic Truth Table Generator | Logic Calculator | LearnMathClass</title>
        <meta name="description" content="Generate dynamic truth tables for logical expressions with our interactive Logic Calculator. Learn about logical operators, Boolean algebra, and propositional logic." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="keywords" content="truth table, logic calculator, Boolean algebra, propositional logic, logical operators, AND, OR, NOT, XOR, NAND, NOR" />
        <meta name="author" content="LearnMathClass" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://learnmathclass.com/logic/truth-tables" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://learnmathclass.com/logic/truth-tables" />
        <meta property="og:title" content="Dynamic Truth Table Generator | Logic Calculator" />
        <meta property="og:description" content="Generate dynamic truth tables for logical expressions. Learn about logical operators and Boolean algebra with our interactive tool." />
        <meta property="og:image" content="https://learnmathclass.com/images/truth-table-generator.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://learnmathclass.com/logic/truth-tables" />
        <meta name="twitter:title" content="Dynamic Truth Table Generator | Logic Calculator" />
        <meta name="twitter:description" content="Generate dynamic truth tables for logical expressions. Learn about logical operators and Boolean algebra with our interactive tool." />
        <meta name="twitter:image" content="https://learnmathclass.com/images/truth-table-generator.jpg" />
      </Head>
     <GenericNavbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <OperaSidebar 
      side='right'
      topOffset='55px' 
      sidebarWidth='45px'
      panelWidth='200px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
      <Breadcrumb/>
      <main className={styles.main}>
        <h1 className={styles.title}>Dynamic Truth Table Generator</h1>
        <div style={{transform:'scale(0.9)'}}>
        <LogicCalculator />
        </div>
        <div id="operator-explanations" className={styles.explanations}>
          {Object.entries(operatorDescriptions).map(([symbol, data]) => (
            <>
            <br id={symbol}></br>
            <section key={symbol}  className={styles.explanation}>
              <h2 className={styles.operatorTitle}>{symbol} Operator ({data.name})</h2>
              <div className={styles.markdownContent}>
                <ReactMarkdown>{data.description}</ReactMarkdown>
              </div>
              {data.links && data.links.length > 0 && (
                <a href={data.links[0]} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
                  Read More
                </a>
              )}
              <br></br>
              {<a href={'/tables/truth-tables'}  className={styles.readMore}>Check Truth Tables for Basic Logical Operators</a>}
              <br></br>
              <a href="#top" className={styles.backToTop}>Back to Top</a>
            </section>
            </>
          ))}
        </div>
      </main>
      <ScrollUpButton />
    </>
  );
};

export default TruthTablesPage;