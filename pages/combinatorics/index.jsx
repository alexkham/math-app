// // import React from 'react'
// // import MermaidDiagram from '@/app/components/mermaid-diagram/MermaidDiagram'
// // import '../../app/components/mermaid-diagram/MermaidDiagram.css'
// // import LogarithmTable from '@/app/components/logarithm-table/LogarithmTable'
// // import CombinatoricsDiagram from '@/app/components/mermaid-diagram/CombinatoricsDiagram';
// // import styles from './Combinatorics.module.css';

// // export default function CombinatoricsPage() {
 



// // const combinatorics=`
// //   flowchart TD
// //   A([Selecting or arranging objects?]) -->|Selecting| B[Do you care about the order of selection?]
// //   A -->|Arranging| C[The objects or positions are unique?]
// //   B -->|Yes| D["Use Permutations \nOrdering  a set of objects.\nFormula: P(n, r) = n! / (n-r)!"]
// //   B -->|No| E["Use Combinations \nSelection of a set of objects where order does not matter.\nFormula: C(n, r) = n! / (r!(n-r)!)"]
// //   E --> F[With Repetition?]
// //   C -->|Yes| D
// //   C -->|No| G[Identical Objects?]
// //   G -->|Yes| H[Use Permutations with Identical Objects]
// //   G -->|No| I[Circular Arrangement?]
// //   I -->|Yes| J[Use Circular Permutations]
// //   I -->|No| K[Derangement?]
// //   K -->|Yes| L[Use Derangements]
// //   K -->|No| M[Special Conditions]
// //   M --> N[Objects into Boxes]
// //   N --> O[Distinct Boxes]
// //   N --> P[Identical Boxes]
// //   O --> Q[Consider variables]
// //   P --> R[Partition theory]
// //   M --> S[Tiling Problems or Groups]
// //   S --> T[Varies based on problem]

// //    `  
// //  const combinatorics2=`
// //  graph TD
// //     A[Combinatorics Scenarios] --> B[Arrangements]
// //     A --> C[Selections]
// //     A --> D[Distributions]

// //     B --> E[Permutation]
// //     B --> F[Permutation with Repetition]
// //     B --> G[Permutation without Repetition]
// //     B --> H[Circular Permutation]

// //     C --> I[Combination]

// //     D --> J[Partition into Groups]
// //     D --> K[Distribution into Cells]
// //     D --> L[Compositions]

// //     L --> M[Weak Composition]
// //     L --> N[Strong Composition] 

// //  ` 

// //  const combinatorics3=`
  
// //  graph TD
// //  A[Combinatorics Scenarios] --> B[Permutation]
// //  A --> C[Permutation with Repetition]
// //  A --> D[Permutation without Repetition]
// //  A --> E[Combination]
// //  A --> F[Partition into Groups]
// //  A --> G[Distribution into Cells]
// //  A --> H[Weak Composition]
// //  A --> I[Strong Composition]
// //  A --> J[Circular Permutation]

// //  B --> B1["n!"]
// //  C --> C1["n! / (n1! * n2! * ... * nx!)"]
// //  D --> D1["P(n,r) = n! / (n-r)!"]
// //  E --> E1["C(n,r) = n! / (r! * (n-r)!)"]
// //  F --> F1["S(n,r) Stirling number"]
// //  G --> G1["r^n"]
// //  H --> H1["C(n+r-1, r-1)"]
// //  I --> I1["C(n-1, r-1)"]
// //  J --> J1["(n-1)!"]

// //  `
// //  const combinatorics4=`
  
// //  graph TD
// //  A[Combinatorics Scenarios] -->|"All items, order matters"| B[Permutation]
// //  A -->|"All items, some identical"| C[Permutation with Repetition]
// //  A -->|"Subset of items, order matters"| D[Permutation without Repetition]
// //  A -->|"Subset of items, order doesn't matter"| E[Combination]
// //  A -->|"Divide into distinct groups"| F[Partition into Groups]
// //  A -->|"Allocate to ordered cells"| G[Distribution into Cells]
// //  A -->|"Sum decomposition, empty allowed"| H[Weak Composition]
// //  A -->|"Sum decomposition, no empty"| I[Strong Composition]
// //  A -->|"Circular arrangement"| J[Circular Permutation]

// //  B --> K(((" ")))
// //  C --> L(((" ")))
// //  D --> M(((" ")))
// //  E --> N(((" ")))
// //  F --> O(((" ")))
// //  G --> P(((" ")))
// //  H --> Q(((" ")))
// //  I --> R(((" ")))
// //  J --> S(((" ")))

// //  K --> B1["n!
// //  Arrange n distinct items
// //  in n positions"]
// //  L --> C1["n! / (n1! * n2! * ... * nx!)
// //  Arrange n items with some identical
// //  n1 of type 1, n2 of type 2, etc."]
// //  M --> D1["P(n,r) = n! / (n-r)!
// //  Arrange r items out of n
// //  where order matters"]
// //  N --> E1["C(n,r) = n! / (r! * (n-r)!)
// //  Choose r items out of n
// //  where order doesn't matter"]
// //  O --> F1["S(n,r) Stirling number of 2nd kind
// //  Divide n distinct items
// //  into r non-empty subsets"]
// //  P --> G1["r^n
// //  Distribute n distinct items
// //  into r distinct cells"]
// //  Q --> H1["C(n+r-1, r-1)
// //  Distribute n identical items
// //  into r cells, empty cells allowed"]
// //  R --> I1["C(n-1, r-1)
// //  Distribute n identical items
// //  into r cells, no empty cells"]
// //  S --> J1["(n-1)!
// //  Arrange n items in a circle
// //  rotations considered identical"]

// //  `

// //  const combinatorics5=`
  
// //  graph TD
// //  A[Combinatorics Scenarios]
// //  A --- ASpace1((( ))) --- ASpace2((( ))) --- ASpace3((( )))
// //  ASpace3 --- BSpace1((( ))) --- BSpace2((( ))) --- BSpace3((( ))) -->|"All items, order matters"| B[Permutation]
// //  ASpace3 --- CSpace1((( ))) --- CSpace2((( ))) --- CSpace3((( ))) -->|"All items, some identical"| C[Permutation with Repetition]
// //  ASpace3 --- DSpace1((( ))) --- DSpace2((( ))) --- DSpace3((( ))) -->|"Subset of items, order matters"| D[Permutation without Repetition]
// //  ASpace3 --- ESpace1((( ))) --- ESpace2((( ))) --- ESpace3((( ))) -->|"Subset of items, order doesn't matter"| E[Combination]
// //  ASpace3 --- FSpace1((( ))) --- FSpace2((( ))) --- FSpace3((( ))) -->|"Divide into distinct groups"| F[Partition into Groups]
// //  ASpace3 --- GSpace1((( ))) --- GSpace2((( ))) --- GSpace3((( ))) -->|"Allocate to ordered cells"| G[Distribution into Cells]
// //  ASpace3 --- HSpace1((( ))) --- HSpace2((( ))) --- HSpace3((( ))) -->|"Sum decomposition, empty allowed"| H[Weak Composition]
// //  ASpace3 --- ISpace1((( ))) --- ISpace2((( ))) --- ISpace3((( ))) -->|"Sum decomposition, no empty"| I[Strong Composition]
// //  ASpace3 --- JSpace1((( ))) --- JSpace2((( ))) --- JSpace3((( ))) -->|"Circular arrangement"| J[Circular Permutation]
// //  B --- B_space1((( ))) --- B_space2((( ))) --- B_space3((( ))) --- B1["n!<br>Arrange n distinct items<br>in n positions"]
// //  C --- C_space1((( ))) --- C_space2((( ))) --- C_space3((( ))) --- C1["n! / (n1! * n2! * ... * nx!)<br>Arrange n items with some identical<br>n1 of type 1, n2 of type 2, etc."]
// //  D --- D_space1((( ))) --- D_space2((( ))) --- D_space3((( ))) --- D1["P(n,r) = n! / (n-r)!<br>Arrange r items out of n<br>where order matters"]
// //  E --- E_space1((( ))) --- E_space2((( ))) --- E_space3((( ))) --- E1["C(n,r) = n! / (r! * (n-r)!)<br>Choose r items out of n<br>where order doesn't matter"]
// //  F --- F_space1((( ))) --- F_space2((( ))) --- F_space3((( ))) --- F1["S(n,r) Stirling number of 2nd kind<br>Divide n distinct items<br>into r non-empty subsets"]
// //  G --- G_space1((( ))) --- G_space2((( ))) --- G_space3((( ))) --- G1["r^n<br>Distribute n distinct items<br>into r distinct cells"]
// //  H --- H_space1((( ))) --- H_space2((( ))) --- H_space3((( ))) --- H1["C(n+r-1, r-1)<br>Distribute n identical items<br>into r cells, empty cells allowed"]
// //  I --- I_space1((( ))) --- I_space2((( ))) --- I_space3((( ))) --- I1["C(n-1, r-1)<br>Distribute n identical items<br>into r cells, no empty cells"]
// //  J --- J_space1((( ))) --- J_space2((( ))) --- J_space3((( ))) --- J1["(n-1)!<br>Arrange n items in a circle<br>rotations considered identical"]


// //  `
// // const combinatorics6=`

// // flowchart TD
// //     A[Combinatorics Scenarios]
// //     A --- ASpace1((( ))) --- ASpace2((( ))) --- ASpace3((( )))
// //     ASpace3 --- BSpace1((( ))) --- BSpace2((( ))) --- BSpace3((( ))) -->|"All items, order matters"| B[Permutation]
// //     ASpace3 --- CSpace1((( ))) --- CSpace2((( ))) --- CSpace3((( ))) -->|"All items, some identical"| C[Permutation with Repetition]
// //     ASpace3 --- DSpace1((( ))) --- DSpace2((( ))) --- DSpace3((( ))) -->|"Subset of items, order matters"| D[Permutation without Repetition]
// //     ASpace3 --- ESpace1((( ))) --- ESpace2((( ))) --- ESpace3((( ))) -->|"Subset of items, order doesn't matter"| E[Combination]
// //     ASpace3 --- FSpace1((( ))) --- FSpace2((( ))) --- FSpace3((( ))) -->|"Divide into distinct groups"| F[Partition into Groups]
// //     ASpace3 --- GSpace1((( ))) --- GSpace2((( ))) --- GSpace3((( ))) -->|"Allocate to ordered cells"| G[Distribution into Cells]
// //     ASpace3 --- HSpace1((( ))) --- HSpace2((( ))) --- HSpace3((( ))) -->|"Sum decomposition, empty allowed"| H[Weak Composition]
// //     ASpace3 --- ISpace1((( ))) --- ISpace2((( ))) --- ISpace3((( ))) -->|"Sum decomposition, no empty"| I[Strong Composition]
// //     ASpace3 --- JSpace1((( ))) --- JSpace2((( ))) --- JSpace3((( ))) -->|"Circular arrangement"| J[Circular Permutation]
// //     B --- B_space1((( ))) --- B_space2((( ))) --- B_space3((( ))) --- B1["n!
// //     Arrange n distinct items
// //     in n positions"]
// //     C --- C_space1((( ))) --- C_space2((( ))) --- C_space3((( ))) --- C1["n! / (n1! * n2! * ... * nx!)
// //     Arrange n items with some identical
// //     n1 of type 1, n2 of type 2, etc."]
// //     D --- D_space1((( ))) --- D_space2((( ))) --- D_space3((( ))) --- D1["P(n,r) = n! / (n-r)!
// //     Arrange r items out of n
// //     where order matters"]
// //     E --- E_space1((( ))) --- E_space2((( ))) --- E_space3((( ))) --- E1["C(n,r) = n! / (r! * (n-r)!)
// //     Choose r items out of n
// //     where order doesn't matter"]
// //     F --- F_space1((( ))) --- F_space2((( ))) --- F_space3((( ))) --- F1["S(n,r) Stirling number of 2nd kind
// //     Divide n distinct items
// //     into r non-empty subsets"]
// //     G --- G_space1((( ))) --- G_space2((( ))) --- G_space3((( ))) --- G1["r^n
// //     Distribute n distinct items
// //     into r distinct cells"]
// //     H --- H_space1((( ))) --- H_space2((( ))) --- H_space3((( ))) --- H1["C(n+r-1, r-1)
// //     Distribute n identical items
// //     into r cells, empty cells allowed"]
// //     I --- I_space1((( ))) --- I_space2((( ))) --- I_space3((( ))) --- I1["C(n-1, r-1)
// //     Distribute n identical items
// //     into r cells, no empty cells"]
// //     J --- J_space1((( ))) --- J_space2((( ))) --- J_space3((( ))) --- J1["(n-1)!
// //     Arrange n items in a circle
// //     rotations considered identical"]
  
// // `


// // const combinatorics7=`
// // graph TD
// //     Combinatorics --> A1[All items, order matters]
// //     Combinatorics --> A2[All items, some identical]
// //     Combinatorics --> A3[Subset of items, order matters]
// //     Combinatorics --> A4[Subset of items, order doesn't matter]
// //     Combinatorics --> A5[Divide into distinct groups]
// //     Combinatorics --> A6[Allocate to ordered slots]
// //     Combinatorics --> A7[Sum decomposition, empty allowed]
// //     Combinatorics --> A8[Sum decomposition, no empty]
// //     Combinatorics --> A9[Circular arrangements]
    
// //     A1 --> Permutations
// //     A2 --> PermutationsWithRepetition
// //     A3 --> PermutationsWithoutRepetition
// //     A4 --> Combinations
// //     A5 --> PartitionIntoSets
// //     A6 --> DistributionIntoSlots
// //     A7 --> WeakCompositions
// //     A8 --> StrongCompositions
// //     A9 --> CircularPermutations  

// // `


// // const combinatorics8 = `
// // flowchart TD
// // A([Combinatorics   ]) --> B{All items?}
// // B -->|Yes| C{Order matters?}
// // B -->|No| D{Order matters?}
// // C -->|Yes| E["Permutations<br/>All items, order matters"]
// // C -->|No| F["PermutationsWithRepetition<br/>All items, some identical"]
// // D -->|Yes| G["PermutationsWithoutRepetition<br/>Subset of items, order matters"]
// // D -->|No| H["Combinations<br/>Subset of items, order doesn't matter"]
// // A --> I["PartitionIntoSets<br/>Divide into distinct groups"]
// // A --> J["DistributionIntoSlots<br/>Allocate to ordered slots"]
// // A --> K["WeakCompositions<br/>Sum decomposition, empty allowed"]
// // A --> L["StrongCompositions<br/>Sum decomposition, no empty"]
// // A --> M["CircularPermutations<br/>Circular arrangements"]
// //   `;

// //   const tableScenarios = [
// //     {
// //       name: "Permutation (Full)",
// //       description: "Arrangement of n distinct items in n places",
// //       formula: "n!",
// //       example: "For n=4: 4! = 24 arrangements",
// //       useCase: "Arranging books on a shelf, determining race finish orders"
// //     },
// //     {
// //       name: "Permutation with Repetition",
// //       description: "Arrangement of n items where some are identical",
// //       formula: "n! / (n1! * n2! * ... * nx!)",
// //       example: "For n=4 with 2 A's and 2 B's: 4! / (2! * 2!) = 6 arrangements",
// //       useCase: "Arranging letters in words with repeated letters"
// //     },
// //     {
// //       name: "Permutation without Repetition",
// //       description: "Picking r different items from n items where order matters",
// //       formula: "P(n,r) = n! / (n-r)!",
// //       example: "For n=5, r=3: 5! / (5-3)! = 60 arrangements",
// //       useCase: "Selecting and arranging podium finishers from a group of runners"
// //     },
// //     {
// //       name: "Combination",
// //       description: "Picking r different items from n items where order doesn't matter",
// //       formula: "C(n,r) = n! / (r! * (n-r)!)",
// //       example: "For n=5, r=3: 5! / (3! * 2!) = 10 combinations",
// //       useCase: "Selecting a committee from a group of people"
// //     },
// //     {
// //       name: "Partition into Groups",
// //       description: "Dividing n distinct items into r distinguishable groups",
// //       formula: "S(n,r) (Stirling number of the second kind)",
// //       example: "For n=4, r=2: S(4,2) = 7 partitions",
// //       useCase: "Dividing students into different classes"
// //     },
// //     {
// //       name: "Distribution into Cells",
// //       description: "Distribution of n different items into r numbered cells",
// //       formula: "r^n",
// //       example: "For n=3, r=2: 2^3 = 8 distributions",
// //       useCase: "Assigning tasks to specific days of the week"
// //     },
// //     {
// //       name: "Weak Composition",
// //       description: "Distribution of n identical items into r cells, empty cells allowed",
// //       formula: "C(n+r-1, r-1)",
// //       example: "For n=5, r=3: C(7,2) = 21 compositions",
// //       useCase: "Distributing identical candies among children, allowing some to receive none"
// //     },
// //     {
// //       name: "Strong Composition",
// //       description: "Distribution of n identical items into r cells, no empty cells",
// //       formula: "C(n-1, r-1)",
// //       example: "For n=5, r=3: C(4,2) = 6 compositions",
// //       useCase: "Distributing identical tasks among team members, ensuring everyone gets at least one"
// //     },
// //     {
// //       name: "Circular Permutation",
// //       description: "Arranging n different items in a circle",
// //       formula: "(n-1)!",
// //       example: "For n=4: 3! = 6 arrangements",
// //       useCase: "Seating arrangements around a circular table"
// //     }
// //   ];

// //   const scenarios = [
// //     { id: 'permutation', name: 'Permutation (Full)' },
// //     { id: 'permutation-repetition', name: 'Permutation with Repetition' },
// //     { id: 'permutation-without-repetition', name: 'Permutation without Repetition' },
// //     { id: 'combination', name: 'Combination' },
// //     { id: 'partition-groups', name: 'Partition into Groups' },
// //     { id: 'distribution-cells', name: 'Distribution into Cells' },
// //     { id: 'weak-composition', name: 'Weak Composition' },
// //     { id: 'strong-composition', name: 'Strong Composition' },
// //     { id: 'circular-permutation', name: 'Circular Permutation' },
// //   ];
  

// //   return (
// //     <div >
    
// //     <div className={styles.container}>
// //       <h1 className={styles.title}>Combinatorics Scenarios</h1>
// //       <p className={styles.intro}>Explore various combinatorics scenarios and their applications in problem-solving.</p>
      
// //       <h2 className={styles.sectionTitle}>Table of Contents</h2>
// //       <ul className={styles.toc}>
// //         {scenarios.map(scenario => (
// //           <li key={scenario.id}>
// //             <a href={`#${scenario.id}`}>{scenario.name}</a>
// //           </li>
// //         ))}
// //         <li><a href="#diagram">Combinatorics Diagram</a></li>
// //         <li><a href="#table">Combinatorics Table</a></li>
// //       </ul>

// //       {scenarios.map(scenario => (
// //         <section key={scenario.id} id={scenario.id} className={styles.section}>
// //           <h2 className={styles.sectionTitle}>{scenario.name}</h2>
// //           <p>[Detailed explanation of {scenario.name} goes here]</p>
// //           <p>For more details, see the <a href="#table">Combinatorics Table</a>.</p>
// //         </section>
// //       ))}

// //       <section id="diagram" className={styles.section}>
// //         <h2 className={styles.sectionTitle}>Combinatorics Diagram</h2>
// //         <p>[Insert your Mermaid diagram or other visualization here]</p>
// //         <p>This diagram provides a visual overview of the relationships between different combinatorics scenarios. For detailed formulas and examples, refer to the <a href="#table">Combinatorics Table</a> below.</p>
// //       </section>

// //       <section id="table" className={styles.section}>
// //         <h2 className={styles.sectionTitle}>Combinatorics Table</h2>
// //         <div className={styles.container}>
// //       <h2 className={styles.title}>Combinatorics Scenarios</h2>
// //       <table className={styles.table}>
// //         <thead className={styles.tableHead}>
// //           <tr>
// //             <th className={styles.tableHeader}>Scenario</th>
// //             <th className={styles.tableHeader}>Description</th>
// //             <th className={styles.tableHeader}>Formula</th>
// //             <th className={styles.tableHeader}>Example</th>
// //             <th className={styles.tableHeader}>Use Case</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {tableScenarios.map((scenario, index) => (
// //             <tr key={index} className={styles.tableRow}>
// //               <td className={`${styles.tableCell} ${styles.scenarioName}`}>{scenario.name}</td>
// //               <td className={styles.tableCell}>{scenario.description}</td>
// //               <td className={`${styles.tableCell} ${styles.formula}`}>{scenario.formula}</td>
// //               <td className={styles.tableCell}>{scenario.example}</td>
// //               <td className={styles.tableCell}>{scenario.useCase}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //         <p>For more detailed explanations of each scenario, click on the scenario names in the table or refer to the individual sections above.</p>
// //       </section>
// //     </div>
    
// //      <br></br>
// //      <br></br>
    
// //      <br></br>
     
// //      <br></br>
// //      <br></br>
    
// //      <br></br>
// //      <br></br>
    
// //      <br></br>
// //      <div>
// //       <MermaidDiagram 
// //         chartDefinition={combinatorics8}
// //         fontSize={34}
// //         nodeHeight={160}
// //         maxWidth={1200}
// //         maxHeight={1000}
// //         minScale={5} 
// //       />
// //     </div>
// //      <br></br>
     
// //      <br></br>
// //      <br></br>
    
// //      <br></br>
// //      <br></br>
// //      <div>
// //      <MermaidDiagram chartDefinition={combinatorics8} />
// //      </div>
    
// //      <br></br>
// //      <div className={styles.container}>
// //       <h2 className={styles.title}>Combinatorics Scenarios</h2>
// //       <table className={styles.table}>
// //         <thead className={styles.tableHead}>
// //           <tr>
// //             <th className={styles.tableHeader}>Scenario</th>
// //             <th className={styles.tableHeader}>Description</th>
// //             <th className={styles.tableHeader}>Formula</th>
// //             <th className={styles.tableHeader}>Example</th>
// //             <th className={styles.tableHeader}>Use Case</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {tableScenarios.map((scenario, index) => (
// //             <tr key={index} className={styles.tableRow}>
// //               <td className={`${styles.tableCell} ${styles.scenarioName}`}>{scenario.name}</td>
// //               <td className={styles.tableCell}>{scenario.description}</td>
// //               <td className={`${styles.tableCell} ${styles.formula}`}>{scenario.formula}</td>
// //               <td className={styles.tableCell}>{scenario.example}</td>
// //               <td className={styles.tableCell}>{scenario.useCase}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
    
   
// //     </div>
    
// //   )
// // }
// import React from 'react';
// import MermaidDiagram from '@/app/components/mermaid-diagram/MermaidDiagram';
// import '../../app/components/mermaid-diagram/MermaidDiagram.css';
// import styles from './Combinatorics.module.css';

// export async function getStaticProps() {
//   const scenarios = [
//     {
//       id: 'permutation',
//       name: 'Permutation (Full)',
//       description: "Arrangement of n distinct items in n places",
//       formula: "n!",
//       example: "For n=4: 4! = 24 arrangements",
//       useCase: "Arranging books on a shelf, determining race finish orders"
//     },
//     {
//       id: 'permutation-repetition',
//       name: 'Permutation with Repetition',
//       description: "Arrangement of n items where some are identical",
//       formula: "n! / (n1! * n2! * ... * nx!)",
//       example: "For n=4 with 2 A's and 2 B's: 4! / (2! * 2!) = 6 arrangements",
//       useCase: "Arranging letters in words with repeated letters"
//     },
//     {
//       id: 'permutation-without-repetition',
//       name: 'Permutation without Repetition',
//       description: "Picking r different items from n items where order matters",
//       formula: "P(n,r) = n! / (n-r)!",
//       example: "For n=5, r=3: 5! / (5-3)! = 60 arrangements",
//       useCase: "Selecting and arranging podium finishers from a group of runners"
//     },
//     {
//       id: 'combination',
//       name: 'Combination',
//       description: "Picking r different items from n items where order doesn't matter",
//       formula: "C(n,r) = n! / (r! * (n-r)!)",
//       example: "For n=5, r=3: 5! / (3! * 2!) = 10 combinations",
//       useCase: "Selecting a committee from a group of people"
//     },
//     {
//       id: 'partition-groups',
//       name: 'Partition into Groups',
//       description: "Dividing n distinct items into r distinguishable groups",
//       formula: "S(n,r) (Stirling number of the second kind)",
//       example: "For n=4, r=2: S(4,2) = 7 partitions",
//       useCase: "Dividing students into different classes"
//     },
//     {
//       id: 'distribution-cells',
//       name: 'Distribution into Cells',
//       description: "Distribution of n different items into r numbered cells",
//       formula: "r^n",
//       example: "For n=3, r=2: 2^3 = 8 distributions",
//       useCase: "Assigning tasks to specific days of the week"
//     },
//     {
//       id: 'weak-composition',
//       name: 'Weak Composition',
//       description: "Distribution of n identical items into r cells, empty cells allowed",
//       formula: "C(n+r-1, r-1)",
//       example: "For n=5, r=3: C(7,2) = 21 compositions",
//       useCase: "Distributing identical candies among children, allowing some to receive none"
//     },
//     {
//       id: 'strong-composition',
//       name: 'Strong Composition',
//       description: "Distribution of n identical items into r cells, no empty cells",
//       formula: "C(n-1, r-1)",
//       example: "For n=5, r=3: C(4,2) = 6 compositions",
//       useCase: "Distributing identical tasks among team members, ensuring everyone gets at least one"
//     },
//     {
//       id: 'circular-permutation',
//       name: 'Circular Permutation',
//       description: "Arranging n different items in a circle",
//       formula: "(n-1)!",
//       example: "For n=4: 3! = 6 arrangements",
//       useCase: "Seating arrangements around a circular table"
//     }
//   ];

//   const combinatorics8 = `
//   flowchart TD
//   A([Combinatorics   ]) --> B{All items?}
//   B -->|Yes| C{Order matters?}
//   B -->|No| D{Order matters?}
//   C -->|Yes| E["Permutations<br/>All items, order matters"]
//   C -->|No| F["PermutationsWithRepetition<br/>All items, some identical"]
//   D -->|Yes| G["PermutationsWithoutRepetition<br/>Subset of items, order matters"]
//   D -->|No| H["Combinations<br/>Subset of items, order doesn't matter"]
//   A --> I["PartitionIntoSets<br/>Divide into distinct groups"]
//   A --> J["DistributionIntoSlots<br/>Allocate to ordered slots"]
//   A --> K["WeakCompositions<br/>Sum decomposition, empty allowed"]
//   A --> L["StrongCompositions<br/>Sum decomposition, no empty"]
//   A --> M["CircularPermutations<br/>Circular arrangements"]
//   `;

//   return {
//     props: {
//       scenarios,
//       combinatorics8
//     },
//   };
// }

// export default function CombinatoricsPage({ scenarios, combinatorics8 }) {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Combinatorics Scenarios</h1>
//       <p className={styles.intro}>Explore various combinatorics scenarios and their applications in problem-solving.</p>
      
//       <h2 className={styles.sectionTitle}>Table of Contents</h2>
//       <ul className={styles.toc}>
//         {scenarios.map(scenario => (
//           <li key={scenario.id}>
//             <a href={`#${scenario.id}`}>{scenario.name}</a>
//           </li>
//         ))}
//         <li><a href="#diagram">Combinatorics Diagram</a></li>
//         <li><a href="#table">Combinatorics Table</a></li>
//       </ul>

//       {scenarios.map(scenario => (
//         <section key={scenario.id} id={scenario.id} className={styles.section}>
//           <h2 className={styles.sectionTitle}>{scenario.name}</h2>
//           <p>{scenario.description}</p>
//           <p><strong>Formula:</strong> {scenario.formula}</p>
//           <p><strong>Example:</strong> {scenario.example}</p>
//           <p><strong>Use Case:</strong> {scenario.useCase}</p>
//           <p>For more details, see the <a href="#table">Combinatorics Table</a> and the <a href="#diagram">Combinatorics Diagram</a>.</p>
//         </section>
//       ))}

//       <section id="diagram" className={styles.section}>
//         <h2 className={styles.sectionTitle}>Combinatorics Diagram</h2>
//         <MermaidDiagram 
//           chartDefinition={combinatorics8}
//           fontSize={34}
//           nodeHeight={160}
//           maxWidth={1200}
//           maxHeight={1000}
//           minScale={5} 
//         />
//         <p>This diagram provides a visual overview of the relationships between different combinatorics scenarios. For detailed formulas and examples, refer to the <a href="#table">Combinatorics Table</a> below or the individual sections above.</p>
//       </section>

//       <section id="table" className={styles.section}>
//         <h2 className={styles.sectionTitle}>Combinatorics Table</h2>
//         <table className={styles.table}>
//           <thead className={styles.tableHead}>
//             <tr>
//               <th className={styles.tableHeader}>Scenario</th>
//               <th className={styles.tableHeader}>Description</th>
//               <th className={styles.tableHeader}>Formula</th>
//               <th className={styles.tableHeader}>Example</th>
//               <th className={styles.tableHeader}>Use Case</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scenarios.map((scenario, index) => (
//               <tr key={index} className={styles.tableRow}>
//                 <td className={`${styles.tableCell} ${styles.scenarioName}`}>
//                   <a href={`#${scenario.id}`}>{scenario.name}</a>
//                 </td>
//                 <td className={styles.tableCell}>{scenario.description}</td>
//                 <td className={`${styles.tableCell} ${styles.formula}`}>{scenario.formula}</td>
//                 <td className={styles.tableCell}>{scenario.example}</td>
//                 <td className={styles.tableCell}>{scenario.useCase}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <p>For more detailed explanations of each scenario, click on the scenario names in the table or refer to the individual sections above. You can also check the <a href="#diagram">Combinatorics Diagram</a> for a visual representation.</p>
//       </section>
//     </div>
//   );
// }
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