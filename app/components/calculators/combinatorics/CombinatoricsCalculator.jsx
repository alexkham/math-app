// import { useState, useEffect } from 'react'
// import { PermutationFull } from './PermutationsFull'
// import { PermutationWithRepetition } from './PermutationWithRepitition'
// import { CircularPermutation } from './CircularPermutation'
// import { PermutationWithoutRepetition } from './PermutationNoRepetition'
// import { Combination } from './Combination'
// import { DistributionIntoCells } from './DistributionIntoCells'
// import { PartitionIntoGroups } from './PartitionIntoGroups'
// import { WeakComposition } from './WeakComposition'
// import { StrongComposition } from './StrongComposition'


// export default function CombinatoricsCalculator() {
//     const [activeScenario, setActiveScenario] = useState(1)
  
//     const scenarios = [
//       { id: 1, name: 'Permutation (Full)', component: PermutationFull },
//       { id: 2, name: 'Permutation with Repetition', component: PermutationWithRepetition },
//       { id: 3, name: 'Permutation without Repetition', component: PermutationWithoutRepetition },
//       { id: 4, name: 'Circular Permutation', component: CircularPermutation },
//       { id: 5, name: 'Combination', component: Combination },
//       { id: 6, name: 'Partition into Groups', component: PartitionIntoGroups },
//       { id: 7, name: 'Distribution into Cells', component: DistributionIntoCells },
//       { id: 8, name: 'Weak Composition', component: WeakComposition },
//       { id: 9, name: 'Strong Composition', component: StrongComposition },
//     ]
  
//     const ActiveComponent = scenarios.find(s => s.id === activeScenario)?.component
  
//     return (
//       <div style={{
//         padding: '20px',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//       }}>
//         <header style={{
//           textAlign: 'center',
//           marginBottom: '40px'
//         }}>
//           <h1 style={{
//             color: '#333',
//             marginBottom: '10px'
//           }}>Combinatorics Calculator</h1>
//           <p style={{
//             color: '#666',
//             fontSize: '16px'
//           }}>Calculate various combinatorial scenarios</p>
//         </header>
  
//         <nav style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//           gap: '10px',
//           marginBottom: '40px'
//         }}>
//           {scenarios.map((scenario) => (
//             <button
//               key={scenario.id}
//               onClick={() => setActiveScenario(scenario.id)}
//               style={{
//                 padding: '12px 16px',
//                 border: activeScenario === scenario.id ? '2px solid #007bff' : '2px solid #ddd',
//                 borderRadius: '8px',
//                 backgroundColor: activeScenario === scenario.id ? '#007bff' : '#fff',
//                 color: activeScenario === scenario.id ? '#fff' : '#333',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 transition: 'all 0.2s ease',
//                 opacity: scenario.component ? 1 : 0.5
//               }}
//               disabled={!scenario.component}
//             >
//               {scenario.name}
//             </button>
//           ))}
//         </nav>
  
//         <main>
//           {ActiveComponent ? (
//             <ActiveComponent />
//           ) : (
//             <div style={{
//               textAlign: 'center',
//               padding: '40px',
//               backgroundColor: '#fff',
//               borderRadius: '12px',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//             }}>
//               <p style={{ color: '#666' }}>This scenario is coming soon!</p>
//             </div>
//           )}
//         </main>
//       </div>
//     )
//   }



import { useState, useEffect } from 'react'
import { PermutationFull } from './PermutationsFull'
import { PermutationWithRepetition } from './PermutationWithRepitition'
import { CircularPermutation } from './CircularPermutation'
import { PermutationWithoutRepetition } from './PermutationNoRepetition'
import { Combination } from './Combination'
import { DistributionIntoCells } from './DistributionIntoCells'
import { PartitionIntoGroups } from './PartitionIntoGroups'
import { WeakComposition } from './WeakComposition'
import { StrongComposition } from './StrongComposition'

export default function CombinatoricsCalculator({ explanations = {} }) {
  const [activeScenario, setActiveScenario] = useState(1)
  
  const scenarios = [
    { id: 1, name: 'Permutation (Full)', component: PermutationFull, key: 'PermutationFull' },
    { id: 2, name: 'Permutation with Repetition', component: PermutationWithRepetition, key: 'PermutationWithRepetition' },
    { id: 3, name: 'Permutation without Repetition', component: PermutationWithoutRepetition, key: 'PermutationWithoutRepetition' },
    { id: 4, name: 'Circular Permutation', component: CircularPermutation, key: 'CircularPermutation' },
    { id: 5, name: 'Combination', component: Combination, key: 'Combination' },
    { id: 6, name: 'Partition into Groups', component: PartitionIntoGroups, key: 'PartitionIntoGroups' },
    { id: 7, name: 'Distribution into Cells', component: DistributionIntoCells, key: 'DistributionIntoCells' },
    { id: 8, name: 'Weak Composition', component: WeakComposition, key: 'WeakComposition' },
    { id: 9, name: 'Strong Composition', component: StrongComposition, key: 'StrongComposition' },
  ]
  
  const activeScenarioData = scenarios.find(s => s.id === activeScenario)
  const ActiveComponent = activeScenarioData?.component
  const currentExplanation = explanations[activeScenarioData?.key]
  
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          color: '#333',
          marginBottom: '10px'
        }}>Combinatorics Calculator</h1>
        <p style={{
          color: '#666',
          fontSize: '16px'
        }}>Calculate various combinatorial scenarios</p>
      </header>
      
      <nav style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        marginBottom: '40px'
      }}>
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setActiveScenario(scenario.id)}
            style={{
              padding: '12px 16px',
              border: activeScenario === scenario.id ? '2px solid #007bff' : '2px solid #ddd',
              borderRadius: '8px',
              backgroundColor: activeScenario === scenario.id ? '#007bff' : '#fff',
              color: activeScenario === scenario.id ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              opacity: scenario.component ? 1 : 0.5
            }}
            disabled={!scenario.component}
          >
            {scenario.name}
          </button>
        ))}
      </nav>
      
      <main>
        {ActiveComponent ? (
          currentExplanation ? 
            <ActiveComponent explanations={currentExplanation} /> : 
            <ActiveComponent />
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <p style={{ color: '#666' }}>This scenario is coming soon!</p>
          </div>
        )}
      </main>
    </div>
  )
}