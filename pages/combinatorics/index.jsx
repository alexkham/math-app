
import React from 'react'
import MermaidDiagram from '@/app/components/mermaid-diagram/MermaidDiagram'
import '../../app/components/mermaid-diagram/MermaidDiagram.css'
import styles from './Combinatorics.module.css';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import Head from 'next/head';
import SecondaryNavbar from '@/app/components/nav-bar/SecondaryNavbar';




export async function getStaticProps() {
  const scenarios = [
    {
      id: 'permutation',
      name: 'Permutation (Full)',
      description: "Arrangement of n distinct items in n places",
      formula: "n!",
      example: "For n=4: 4! = 24 arrangements",
      useCase: "Arranging books on a shelf, determining race finish orders"
    },
    {
      id: 'permutation-repetition',
      name: 'Permutation with Repetition',
      description: "Arrangement of n items where some are identical",
      formula: "n! / (n1! * n2! * ... * nx!)",
      example: "For n=4 with 2 A's and 2 B's: 4! / (2! * 2!) = 6 arrangements",
      useCase: "Arranging letters in words with repeated letters"
    },
    {
      id: 'permutation-without-repetition',
      name: 'Permutation without Repetition',
      description: "Picking r different items from n items where order matters",
      formula: "P(n,r) = n! / (n-r)!",
      example: "For n=5, r=3: 5! / (5-3)! = 60 arrangements",
      useCase: "Selecting and arranging podium finishers from a group of runners"
    },
    {
      id: 'combination',
      name: 'Combination',
      description: "Picking r different items from n items where order doesn't matter",
      formula: "C(n,r) = n! / (r! * (n-r)!)",
      example: "For n=5, r=3: 5! / (3! * 2!) = 10 combinations",
      useCase: "Selecting a committee from a group of people"
    },
    {
      id: 'partition-groups',
      name: 'Partition into Groups',
      description: "Dividing n distinct items into r distinguishable groups",
      formula: "S(n,r) (Stirling number of the second kind)",
      example: "For n=4, r=2: S(4,2) = 7 partitions",
      useCase: "Dividing students into different classes"
    },
    {
      id: 'distribution-cells',
      name: 'Distribution into Cells',
      description: "Distribution of n different items into r numbered cells",
      formula: "r^n",
      example: "For n=3, r=2: 2^3 = 8 distributions",
      useCase: "Assigning tasks to specific days of the week"
    },
    {
      id: 'weak-composition',
      name: 'Weak Composition',
      description: "Distribution of n identical items into r cells, empty cells allowed",
      formula: "C(n+r-1, r-1)",
      example: "For n=5, r=3: C(7,2) = 21 compositions",
      useCase: "Distributing identical candies among children, allowing some to receive none"
    },
    {
      id: 'strong-composition',
      name: 'Strong Composition',
      description: "Distribution of n identical items into r cells, no empty cells",
      formula: "C(n-1, r-1)",
      example: "For n=5, r=3: C(4,2) = 6 compositions",
      useCase: "Distributing identical tasks among team members, ensuring everyone gets at least one"
    },
    {
      id: 'circular-permutation',
      name: 'Circular Permutation',
      description: "Arranging n different items in a circle",
      formula: "(n-1)!",
      example: "For n=4: 3! = 6 arrangements",
      useCase: "Seating arrangements around a circular table"
    }
  ];

  const combinatorics8 = `
  flowchart TD
  A([Combinatorics   ]) --> B{All items?}
  B -->|Yes| C{Order matters?}
  B -->|No| D{Order matters?}
  C -->|Yes| E["Permutations<br/>All items, order matters"]
  C -->|No| F["PermutationsWithRepetition<br/>All items, some identical"]
  D -->|Yes| G["PermutationsWithoutRepetition<br/>Subset of items, order matters"]
  D -->|No| H["Combinations<br/>Subset of items, order doesn't matter"]
  A --> I["PartitionIntoSets<br/>Divide into distinct groups"]
  A --> J["DistributionIntoSlots<br/>Allocate to ordered slots"]
  A --> K["WeakCompositions<br/>Sum decomposition, empty allowed"]
  A --> L["StrongCompositions<br/>Sum decomposition, no empty"]
  A --> M["CircularPermutations<br/>Circular arrangements"]
  `;

  const metaDescription="Explore various combinatorics scenarios including permutations, combinations, partitions, and distributions. Learn formulas, see examples, and understand real-world applications with our comprehensive guide and interactive diagram."

  return {
    props: {
      scenarios,
      combinatorics8,
      metaDescription
    },
  };
}

export default function CombinatoricsPage({ scenarios, combinatorics8,metaDescription }) {
  return (
    <>
    <Head>
      <title>Combinatorics Scenarios and Applications</title>
      <meta name="description" content={metaDescription} />
     </Head>
    <div className={styles.container}>
      <MyNavbar></MyNavbar>
      <br></br>
      <br></br>
      <Breadcrumb></Breadcrumb>
      <SecondaryNavbar></SecondaryNavbar>
      <h1 className={styles.title}>Combinatorics Scenarios</h1>
      <p className={styles.intro}>Explore various combinatorics scenarios and their applications in problem-solving.</p>
      
      <h2 className={styles.sectionTitle}>Table of Contents</h2>
      <ul className={styles.toc}>
        {scenarios.map(scenario => (
          <li key={scenario.id}>
            <a href={`#${scenario.id}`}>{scenario.name}</a>
          </li>
        ))}
        <li><a href="#diagram">Combinatorics Diagram</a></li>
        <li><a href="#table">Combinatorics Table</a></li>
      </ul>

      {scenarios.map(scenario => (
        <section key={scenario.id} id={scenario.id} className={styles.section}>
           <br></br>
          <br></br>
          <br></br>
          <h2  className={styles.sectionTitle}>{scenario.name}</h2>
          <p>{scenario.description}</p>
          <p><strong>Formula:</strong> {scenario.formula}</p>
          <p><strong>Example:</strong> {scenario.example}</p>
          <p><strong>Use Case:</strong> {scenario.useCase}</p>
          <p>For more details, see the <a href="#table">Combinatorics Table</a> and the <a href="#diagram">Combinatorics Diagram</a>.</p>
        </section>
      ))}

      <section id="diagram" className={styles.section}>
        <br></br>
        <br></br>
        <br></br>
        <h2 className={styles.sectionTitle}>Combinatorics Diagram</h2>
        <MermaidDiagram 
          chartDefinition={combinatorics8}
          fontSize={34}
          nodeHeight={160}
          maxWidth={1200}
          maxHeight={1000}
          minScale={5} 
        />
        <p>This diagram provides a visual overview of the relationships between different combinatorics scenarios. For detailed formulas and examples, refer to the <a href="#table">Combinatorics Table</a> below or the individual sections above.</p>
      </section>

      <section id="table" className={styles.section}>
        <br></br>
        <br></br>
        <br></br>
        <h2 className={styles.sectionTitle}>Combinatorics Table</h2>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={styles.tableHeader}>Scenario</th>
              <th className={styles.tableHeader}>Description</th>
              <th className={styles.tableHeader}>Formula</th>
              <th className={styles.tableHeader}>Example</th>
              <th className={styles.tableHeader}>Use Case</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((scenario, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={`${styles.tableCell} ${styles.scenarioName}`}>
                  <a href={`#${scenario.id}`}>{scenario.name}</a>
                </td>
                <td className={styles.tableCell}>{scenario.description}</td>
                <td className={`${styles.tableCell} ${styles.formula}`}>{scenario.formula}</td>
                <td className={styles.tableCell}>{scenario.example}</td>
                <td className={styles.tableCell}>{scenario.useCase}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>For more detailed explanations of each scenario, click on the scenario names in the table or refer to the individual sections above. You can also check the <a href="#diagram">Combinatorics Diagram</a> for a visual representation.</p>
      </section>
      <ScrollUpButton></ScrollUpButton>
    </div>
    </>
  )
}