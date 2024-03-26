import React from 'react'
import MermaidDiagram from '@/app/components/mermaid-diagram/MermaidDiagram'
import '../../app/components/mermaid-diagram/MermaidDiagram.css'

export default function CombinatoricsPage() {
    // const combinatorics=`
    // flowchart TD
    //     A["Are you selecting or arranging objects?"] -->|Selecting| B["Do you care about the order of selection?"]
    //     A -->|Arranging| C["Are the objects or positions unique?"]
    //     B -->|Yes| D["Use Permutations:\nOrdering of a set of objects.\nFormula: P(n, r) = n! / (n-r)!"]
    //     B -->|No| E["Use Combinations:\nSelection of a set of objects where order does not matter.\nFormula: C(n, r) = n! / (r!(n-r)!)"]
    //     E -->|With Repetition| F["Modify the formula accordingly for repetitions.\nFormula: C(n+r-1, r)"]
    //     C -->|Yes| D
    //     C -->|No| G["Identical Objects?:\nSelection/Arrangement where some objects are identical.\nFormula: n! / (n1!n2!...nk!)"]
    //     G -->|Yes| H["Use Permutations with Identical Objects:\nArranging non-unique objects.\nSame formula as for Identical Objects."]
    //     G -->|No| I["Circular Arrangement?:\nArranging objects in a circle.\nFormula: (n-1)!"]
    //     I -->|Yes| J["Use Circular Permutations:\nSpecial case of permutations for circular arrangements.\nFormula: (n-1)!"]
    //     I -->|No| K["Derangement?:\nArrangement where no element appears in its original position.\nFormula: n! * (1 - 1/1! + 1/2! - ... + (-1)^n/n!)"]
    //     K -->|Yes| L["Use Derangements:\nSpecial permutation with no fixed points.\nSame formula as for Derangement."]
    //     K -->|No| M["Special Conditions?:\nScenarios not covered by standard permutations or combinations."]
    //     M --> N["Objects into Boxes:\nDistributing objects into boxes. Varies based on box/object properties."]
    //     N --> O["Distinct Boxes:\nObjects are distinct and placed into distinct boxes. Considerations vary."]
    //     N --> P["Identical Boxes:\nObjects are placed into identical boxes. More complex; involves partition theory."]
    //     O --> Q["Consider if boxes can be empty or if objects are distinct. Varies."]
    //     P --> R["More complex; involves partition theory. Specific methods required."]
    //     M --> S["Tiling Problems or Partitioning into Groups:\nSpecific combinatorial problems. Requires tailored approaches."]
    //     S --> T["Requires detailed formulas based on the problem. Specific to the scenario."]
    //  `
  const combinatorics=`
  flowchart TD
  A([Selecting or arranging objects?]) -->|Selecting| B[Do you care about the order of selection?]
  A -->|Arranging| C[The objects or positions are unique?]
  B -->|Yes| D["Use Permutations \nOrdering  a set of objects.\nFormula: P(n, r) = n! / (n-r)!"]
  
  B -->|No| E["Use Combinations \nSelection of a set of objects where order does not matter.\nFormula: C(n, r) = n! / (r!(n-r)!)"]
  E --> F[With Repetition?]
  C -->|Yes| D
  C -->|No| G[Identical Objects?]
  G -->|Yes| H[Use Permutations with Identical Objects]
  G -->|No| I[Circular Arrangement?]
  I -->|Yes| J[Use Circular Permutations]
  I -->|No| K[Derangement?]
  K -->|Yes| L[Use Derangements]
  K -->|No| M[Special Conditions]
  M --> N[Objects into Boxes]
  N --> O[Distinct Boxes]
  N --> P[Identical Boxes]
  O --> Q[Consider variables]
  P --> R[Partition theory]
  M --> S[Tiling Problems or Groups]
  S --> T[Varies based on problem]

   `  
  return (
    <div >
    
    
     <MermaidDiagram  chartDefinition={combinatorics}></MermaidDiagram>
     
    </div>
    
  )
}
