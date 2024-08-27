// 'use client'
// import React from 'react';
// import Mermaid from 'react-mermaid';

// const CombinatoricsDiagram = () => {
//   const config = {
//     theme: 'default',
//     themeVariables: {
//       fontSize: '24px',
//       nodePadding: 15
//     }
//   };

//   const chart = `
//     flowchart TD
//     A[Combinatorics Scenarios]
//     A --- ASpace1((( ))) --- ASpace2((( ))) --- ASpace3((( )))
//     ASpace3 --- BSpace1((( ))) --- BSpace2((( ))) --- BSpace3((( ))) -->|"All items, order matters"| B[Permutation]
//     ASpace3 --- CSpace1((( ))) --- CSpace2((( ))) --- CSpace3((( ))) -->|"All items, some identical"| C[Permutation with Repetition]
//     ASpace3 --- DSpace1((( ))) --- DSpace2((( ))) --- DSpace3((( ))) -->|"Subset of items, order matters"| D[Permutation without Repetition]
//     ASpace3 --- ESpace1((( ))) --- ESpace2((( ))) --- ESpace3((( ))) -->|"Subset of items, order doesn't matter"| E[Combination]
//     ASpace3 --- FSpace1((( ))) --- FSpace2((( ))) --- FSpace3((( ))) -->|"Divide into distinct groups"| F[Partition into Groups]
//     ASpace3 --- GSpace1((( ))) --- GSpace2((( ))) --- GSpace3((( ))) -->|"Allocate to ordered cells"| G[Distribution into Cells]
//     ASpace3 --- HSpace1((( ))) --- HSpace2((( ))) --- HSpace3((( ))) -->|"Sum decomposition, empty allowed"| H[Weak Composition]
//     ASpace3 --- ISpace1((( ))) --- ISpace2((( ))) --- ISpace3((( ))) -->|"Sum decomposition, no empty"| I[Strong Composition]
//     ASpace3 --- JSpace1((( ))) --- JSpace2((( ))) --- JSpace3((( ))) -->|"Circular arrangement"| J[Circular Permutation]
//     B --- B_space1((( ))) --- B_space2((( ))) --- B_space3((( ))) --- B1["n!
//     Arrange n distinct items
//     in n positions"]
//     C --- C_space1((( ))) --- C_space2((( ))) --- C_space3((( ))) --- C1["n! / (n1! * n2! * ... * nx!)
//     Arrange n items with some identical
//     n1 of type 1, n2 of type 2, etc."]
//     D --- D_space1((( ))) --- D_space2((( ))) --- D_space3((( ))) --- D1["P(n,r) = n! / (n-r)!
//     Arrange r items out of n
//     where order matters"]
//     E --- E_space1((( ))) --- E_space2((( ))) --- E_space3((( ))) --- E1["C(n,r) = n! / (r! * (n-r)!)
//     Choose r items out of n
//     where order doesn't matter"]
//     F --- F_space1((( ))) --- F_space2((( ))) --- F_space3((( ))) --- F1["S(n,r) Stirling number of 2nd kind
//     Divide n distinct items
//     into r non-empty subsets"]
//     G --- G_space1((( ))) --- G_space2((( ))) --- G_space3((( ))) --- G1["r^n
//     Distribute n distinct items
//     into r distinct cells"]
//     H --- H_space1((( ))) --- H_space2((( ))) --- H_space3((( ))) --- H1["C(n+r-1, r-1)
//     Distribute n identical items
//     into r cells, empty cells allowed"]
//     I --- I_space1((( ))) --- I_space2((( ))) --- I_space3((( ))) --- I1["C(n-1, r-1)
//     Distribute n identical items
//     into r cells, no empty cells"]
//     J --- J_space1((( ))) --- J_space2((( ))) --- J_space3((( ))) --- J1["(n-1)!
//     Arrange n items in a circle
//     rotations considered identical"]
//   `;

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <Mermaid chart={chart} config={config} />
//     </div>
//   );
// };

// export default CombinatoricsDiagram;

import dynamic from 'next/dynamic';
import React from 'react';

const Mermaid = dynamic(() => import('react-mermaid'), {
  ssr: false
});

const CombinatoricsDiagram = () => {
  const config = {
    theme: 'default',
    themeVariables: {
      fontSize: '24px',
      nodePadding: 15
    }
  };

  const chart = `
    flowchart TD
    A[Combinatorics Scenarios]
    A --- ASpace1((( ))) --- ASpace2((( ))) --- ASpace3((( )))
    ASpace3 --- BSpace1((( ))) --- BSpace2((( ))) --- BSpace3((( ))) -->|"All items, order matters"| B[Permutation]
    ASpace3 --- CSpace1((( ))) --- CSpace2((( ))) --- CSpace3((( ))) -->|"All items, some identical"| C[Permutation with Repetition]
    ASpace3 --- DSpace1((( ))) --- DSpace2((( ))) --- DSpace3((( ))) -->|"Subset of items, order matters"| D[Permutation without Repetition]
    ASpace3 --- ESpace1((( ))) --- ESpace2((( ))) --- ESpace3((( ))) -->|"Subset of items, order doesn't matter"| E[Combination]
    ASpace3 --- FSpace1((( ))) --- FSpace2((( ))) --- FSpace3((( ))) -->|"Divide into distinct groups"| F[Partition into Groups]
    ASpace3 --- GSpace1((( ))) --- GSpace2((( ))) --- GSpace3((( ))) -->|"Allocate to ordered cells"| G[Distribution into Cells]
    ASpace3 --- HSpace1((( ))) --- HSpace2((( ))) --- HSpace3((( ))) -->|"Sum decomposition, empty allowed"| H[Weak Composition]
    ASpace3 --- ISpace1((( ))) --- ISpace2((( ))) --- ISpace3((( ))) -->|"Sum decomposition, no empty"| I[Strong Composition]
    ASpace3 --- JSpace1((( ))) --- JSpace2((( ))) --- JSpace3((( ))) -->|"Circular arrangement"| J[Circular Permutation]
    B --- B_space1((( ))) --- B_space2((( ))) --- B_space3((( ))) --- B1["n!
    Arrange n distinct items
    in n positions"]
    C --- C_space1((( ))) --- C_space2((( ))) --- C_space3((( ))) --- C1["n! / (n1! * n2! * ... * nx!)
    Arrange n items with some identical
    n1 of type 1, n2 of type 2, etc."]
    D --- D_space1((( ))) --- D_space2((( ))) --- D_space3((( ))) --- D1["P(n,r) = n! / (n-r)!
    Arrange r items out of n
    where order matters"]
    E --- E_space1((( ))) --- E_space2((( ))) --- E_space3((( ))) --- E1["C(n,r) = n! / (r! * (n-r)!)
    Choose r items out of n
    where order doesn't matter"]
    F --- F_space1((( ))) --- F_space2((( ))) --- F_space3((( ))) --- F1["S(n,r) Stirling number of 2nd kind
    Divide n distinct items
    into r non-empty subsets"]
    G --- G_space1((( ))) --- G_space2((( ))) --- G_space3((( ))) --- G1["r^n
    Distribute n distinct items
    into r distinct cells"]
    H --- H_space1((( ))) --- H_space2((( ))) --- H_space3((( ))) --- H1["C(n+r-1, r-1)
    Distribute n identical items
    into r cells, empty cells allowed"]
    I --- I_space1((( ))) --- I_space2((( ))) --- I_space3((( ))) --- I1["C(n-1, r-1)
    Distribute n identical items
    into r cells, no empty cells"]
    J --- J_space1((( ))) --- J_space2((( ))) --- J_space3((( ))) --- J1["(n-1)!
    Arrange n items in a circle
    rotations considered identical"]
  `;

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <Mermaid chart={chart} config={config} />
    </div>
  );
};

export default CombinatoricsDiagram;
