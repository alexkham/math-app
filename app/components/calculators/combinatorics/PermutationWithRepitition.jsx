// // // // // // // 'use client'

// // // // // // // import { useState, useEffect } from 'react'

// // // // // // // export  function PermutationWithRepetition() {
// // // // // // //   const [totalObjects, setTotalObjects] = useState('')
// // // // // // //   const [repetitions, setRepetitions] = useState([''])
// // // // // // //   const [result, setResult] = useState(null)
// // // // // // //   const [error, setError] = useState('')

// // // // // // //   const factorial = (num) => {
// // // // // // //     if (num < 0) return null
// // // // // // //     if (num === 0 || num === 1) return 1
    
// // // // // // //     let result = 1
// // // // // // //     for (let i = 2; i <= num; i++) {
// // // // // // //       result *= i
// // // // // // //       if (result > Number.MAX_SAFE_INTEGER) {
// // // // // // //         return 'Too large'
// // // // // // //       }
// // // // // // //     }
// // // // // // //     return result
// // // // // // //   }

// // // // // // //   const addRepetitionField = () => {
// // // // // // //     setRepetitions([...repetitions, ''])
// // // // // // //   }

// // // // // // //   const removeRepetitionField = (index) => {
// // // // // // //     if (repetitions.length > 1) {
// // // // // // //       setRepetitions(repetitions.filter((_, i) => i !== index))
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const updateRepetition = (index, value) => {
// // // // // // //     const newRepetitions = [...repetitions]
// // // // // // //     newRepetitions[index] = value
// // // // // // //     setRepetitions(newRepetitions)
// // // // // // //   }

// // // // // // //   const calculate = () => {
// // // // // // //     setError('')
    
// // // // // // //     const n = parseInt(totalObjects)
// // // // // // //     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
// // // // // // //     if (isNaN(n) || n < 0) {
// // // // // // //       setError('Please enter a valid total number of objects')
// // // // // // //       return
// // // // // // //     }
    
// // // // // // //     if (reps.length === 0) {
// // // // // // //       setError('Please enter at least one repetition count')
// // // // // // //       return
// // // // // // //     }
    
// // // // // // //     const sumReps = reps.reduce((sum, r) => sum + r, 0)
// // // // // // //     if (sumReps !== n) {
// // // // // // //       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
// // // // // // //       return
// // // // // // //     }
    
// // // // // // //     if (n > 170) {
// // // // // // //       setError('Total objects too large (maximum is 170)')
// // // // // // //       return
// // // // // // //     }

// // // // // // //     const numerator = factorial(n)
// // // // // // //     if (numerator === 'Too large') {
// // // // // // //       setResult({
// // // // // // //         totalObjects: n,
// // // // // // //         repetitions: reps,
// // // // // // //         result: 'Too large',
// // // // // // //         formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // // //       })
// // // // // // //       return
// // // // // // //     }

// // // // // // //     let denominator = 1
// // // // // // //     for (const rep of reps) {
// // // // // // //       const repFactorial = factorial(rep)
// // // // // // //       if (repFactorial === 'Too large') {
// // // // // // //         setResult({
// // // // // // //           totalObjects: n,
// // // // // // //           repetitions: reps,
// // // // // // //           result: 'Too large',
// // // // // // //           formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // // //         })
// // // // // // //         return
// // // // // // //       }
// // // // // // //       denominator *= repFactorial
// // // // // // //     }

// // // // // // //     const result = numerator / denominator
// // // // // // //     setResult({
// // // // // // //       totalObjects: n,
// // // // // // //       repetitions: reps,
// // // // // // //       result: result,
// // // // // // //       formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // // //     })
// // // // // // //   }

// // // // // // //   useEffect(() => {
// // // // // // //     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
// // // // // // //       calculate()
// // // // // // //     } else {
// // // // // // //       setResult(null)
// // // // // // //       setError('')
// // // // // // //     }
// // // // // // //   }, [totalObjects, repetitions])

// // // // // // //   return (
// // // // // // //     <div style={{
// // // // // // //       backgroundColor: '#fff',
// // // // // // //       borderRadius: '12px',
// // // // // // //       padding: '30px',
// // // // // // //       boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
// // // // // // //     }}>
// // // // // // //       <h2 style={{
// // // // // // //         color: '#333',
// // // // // // //         marginBottom: '20px',
// // // // // // //         fontSize: '24px'
// // // // // // //       }}>Permutation with Repetition</h2>
      
// // // // // // //       <div style={{
// // // // // // //         backgroundColor: '#f8f9fa',
// // // // // // //         padding: '20px',
// // // // // // //         borderRadius: '8px',
// // // // // // //         marginBottom: '30px',
// // // // // // //         borderLeft: '4px solid #28a745'
// // // // // // //       }}>
// // // // // // //         <h3 style={{
// // // // // // //           margin: '0 0 10px 0',
// // // // // // //           color: '#495057',
// // // // // // //           fontSize: '16px'
// // // // // // //         }}>Formula: n! / (n₁! × n₂! × ... × nₖ!)</h3>
// // // // // // //         <p style={{
// // // // // // //           margin: 0,
// // // // // // //           color: '#6c757d',
// // // // // // //           lineHeight: '1.5'
// // // // // // //         }}>
// // // // // // //           Calculate arrangements of n objects where some objects are identical. n₁, n₂, etc. are the counts of each type of identical object.
// // // // // // //         </p>
// // // // // // //       </div>

// // // // // // //       <div style={{
// // // // // // //         marginBottom: '20px'
// // // // // // //       }}>
// // // // // // //         <label style={{
// // // // // // //           display: 'block',
// // // // // // //           marginBottom: '8px',
// // // // // // //           fontWeight: '500',
// // // // // // //           color: '#333'
// // // // // // //         }}>
// // // // // // //           Total number of objects (n):
// // // // // // //         </label>
// // // // // // //         <input
// // // // // // //           type="number"
// // // // // // //           value={totalObjects}
// // // // // // //           onChange={(e) => setTotalObjects(e.target.value)}
// // // // // // //           placeholder="e.g., 4"
// // // // // // //           min="0"
// // // // // // //           style={{
// // // // // // //             width: '100%',
// // // // // // //             padding: '12px 16px',
// // // // // // //             border: '2px solid #ddd',
// // // // // // //             borderRadius: '8px',
// // // // // // //             fontSize: '16px',
// // // // // // //             boxSizing: 'border-box'
// // // // // // //           }}
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       <div style={{
// // // // // // //         marginBottom: '20px'
// // // // // // //       }}>
// // // // // // //         <label style={{
// // // // // // //           display: 'block',
// // // // // // //           marginBottom: '8px',
// // // // // // //           fontWeight: '500',
// // // // // // //           color: '#333'
// // // // // // //         }}>
// // // // // // //           Repetition counts (how many of each type):
// // // // // // //         </label>
        
// // // // // // //         {repetitions.map((rep, index) => (
// // // // // // //           <div key={index} style={{
// // // // // // //             display: 'flex',
// // // // // // //             gap: '10px',
// // // // // // //             marginBottom: '10px',
// // // // // // //             alignItems: 'center'
// // // // // // //           }}>
// // // // // // //             <input
// // // // // // //               type="number"
// // // // // // //               value={rep}
// // // // // // //               onChange={(e) => updateRepetition(index, e.target.value)}
// // // // // // //               placeholder={`Type ${index + 1} count`}
// // // // // // //               min="1"
// // // // // // //               style={{
// // // // // // //                 flex: 1,
// // // // // // //                 padding: '8px 12px',
// // // // // // //                 border: '2px solid #ddd',
// // // // // // //                 borderRadius: '6px',
// // // // // // //                 fontSize: '14px'
// // // // // // //               }}
// // // // // // //             />
// // // // // // //             {repetitions.length > 1 && (
// // // // // // //               <button
// // // // // // //                 onClick={() => removeRepetitionField(index)}
// // // // // // //                 style={{
// // // // // // //                   padding: '8px 12px',
// // // // // // //                   backgroundColor: '#dc3545',
// // // // // // //                   color: '#fff',
// // // // // // //                   border: 'none',
// // // // // // //                   borderRadius: '6px',
// // // // // // //                   cursor: 'pointer',
// // // // // // //                   fontSize: '14px'
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Remove
// // // // // // //               </button>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         ))}
        
// // // // // // //         <button
// // // // // // //           onClick={addRepetitionField}
// // // // // // //           style={{
// // // // // // //             padding: '8px 16px',
// // // // // // //             backgroundColor: '#28a745',
// // // // // // //             color: '#fff',
// // // // // // //             border: 'none',
// // // // // // //             borderRadius: '6px',
// // // // // // //             cursor: 'pointer',
// // // // // // //             fontSize: '14px',
// // // // // // //             marginTop: '10px'
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Add Type
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {error && (
// // // // // // //         <div style={{
// // // // // // //           backgroundColor: '#f8d7da',
// // // // // // //           color: '#721c24',
// // // // // // //           padding: '12px 16px',
// // // // // // //           borderRadius: '8px',
// // // // // // //           border: '1px solid #f5c6cb',
// // // // // // //           marginBottom: '20px'
// // // // // // //         }}>
// // // // // // //           {error}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {result && !error && (
// // // // // // //         <div style={{
// // // // // // //           backgroundColor: '#d4edda',
// // // // // // //           padding: '20px',
// // // // // // //           borderRadius: '8px',
// // // // // // //           border: '1px solid #28a745',
// // // // // // //           marginBottom: '20px'
// // // // // // //         }}>
// // // // // // //           <h3 style={{
// // // // // // //             margin: '0 0 15px 0',
// // // // // // //             color: '#155724',
// // // // // // //             fontSize: '18px'
// // // // // // //           }}>Result:</h3>
          
// // // // // // //           <div style={{
// // // // // // //             display: 'grid',
// // // // // // //             gridTemplateColumns: 'auto 1fr',
// // // // // // //             gap: '10px 20px',
// // // // // // //             alignItems: 'center'
// // // // // // //           }}>
// // // // // // //             <strong>Formula:</strong>
// // // // // // //             <span>{result.formula}</span>
            
// // // // // // //             <strong>Result:</strong>
// // // // // // //             <span>{typeof result.result === 'number' ? result.result.toLocaleString() : result.result}</span>
// // // // // // //           </div>

// // // // // // //           {typeof result.result === 'number' && (
// // // // // // //             <div style={{
// // // // // // //               marginTop: '15px',
// // // // // // //               padding: '10px',
// // // // // // //               backgroundColor: 'rgba(255,255,255,0.5)',
// // // // // // //               borderRadius: '4px'
// // // // // // //             }}>
// // // // // // //               <small style={{ color: '#155724' }}>
// // // // // // //                 There are {result.result.toLocaleString()} distinct arrangements of {result.totalObjects} objects with the given repetitions.
// // // // // // //               </small>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <div style={{
// // // // // // //         backgroundColor: '#fff3cd',
// // // // // // //         padding: '15px',
// // // // // // //         borderRadius: '8px',
// // // // // // //         border: '1px solid #ffeaa7'
// // // // // // //       }}>
// // // // // // //         <h4 style={{
// // // // // // //           margin: '0 0 10px 0',
// // // // // // //           color: '#856404',
// // // // // // //           fontSize: '14px'
// // // // // // //         }}>Example:</h4>
// // // // // // //         <p style={{
// // // // // // //           margin: 0,
// // // // // // //           color: '#856404',
// // // // // // //           fontSize: '14px'
// // // // // // //         }}>
// // // // // // //           Arrange letters in "BOOK": 4 total objects, B(1), O(2), K(1) → 4!/(1!×2!×1!) = 12 arrangements
// // // // // // //         </p>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }



// // // // // // // 'use client'

// // // // // // // import { useState, useEffect } from 'react'
// // // // // // // import { processContent } from '@/app/utils/contentProcessor'

// // // // // // // export function PermutationWithRepetition() {
// // // // // // //   const [totalObjects, setTotalObjects] = useState('')
// // // // // // //   const [repetitions, setRepetitions] = useState([''])
// // // // // // //   const [result, setResult] = useState(null)
// // // // // // //   const [error, setError] = useState('')

// // // // // // //   const factorial = (num) => {
// // // // // // //     if (num < 0) return null
// // // // // // //     if (num === 0 || num === 1) return 1
    
// // // // // // //     let result = 1
// // // // // // //     for (let i = 2; i <= num; i++) {
// // // // // // //       result *= i
// // // // // // //       if (result > Number.MAX_SAFE_INTEGER) {
// // // // // // //         return 'Too large'
// // // // // // //       }
// // // // // // //     }
// // // // // // //     return result
// // // // // // //   }

// // // // // // //   const addRepetitionField = () => {
// // // // // // //     setRepetitions([...repetitions, ''])
// // // // // // //   }

// // // // // // //   const removeRepetitionField = (index) => {
// // // // // // //     if (repetitions.length > 1) {
// // // // // // //       setRepetitions(repetitions.filter((_, i) => i !== index))
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const updateRepetition = (index, value) => {
// // // // // // //     const newRepetitions = [...repetitions]
// // // // // // //     newRepetitions[index] = value
// // // // // // //     setRepetitions(newRepetitions)
// // // // // // //   }

// // // // // // //   const clearField = (field, index = null) => {
// // // // // // //     if (field === 'total') {
// // // // // // //       setTotalObjects('')
// // // // // // //     } else if (field === 'repetition' && index !== null) {
// // // // // // //       updateRepetition(index, '')
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const resetForm = () => {
// // // // // // //     setTotalObjects('')
// // // // // // //     setRepetitions([''])
// // // // // // //     setResult(null)
// // // // // // //     setError('')
// // // // // // //   }

// // // // // // //   const calculate = () => {
// // // // // // //     setError('')
    
// // // // // // //     const n = parseInt(totalObjects)
// // // // // // //     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
// // // // // // //     if (isNaN(n) || n < 0) {
// // // // // // //       setError('Please enter a valid total number of objects')
// // // // // // //       return
// // // // // // //     }
    
// // // // // // //     if (reps.length === 0) {
// // // // // // //       setError('Please enter at least one repetition count')
// // // // // // //       return
// // // // // // //     }
    
// // // // // // //     const sumReps = reps.reduce((sum, r) => sum + r, 0)
// // // // // // //     if (sumReps !== n) {
// // // // // // //       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
// // // // // // //       return
// // // // // // //     }
    
// // // // // // //     if (n > 170) {
// // // // // // //       setError('Total objects too large (maximum is 170)')
// // // // // // //       return
// // // // // // //     }

// // // // // // //     const numerator = factorial(n)
// // // // // // //     if (numerator === 'Too large') {
// // // // // // //       setResult({
// // // // // // //         totalObjects: n,
// // // // // // //         repetitions: reps,
// // // // // // //         result: 'Too large',
// // // // // // //         formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // // //       })
// // // // // // //       return
// // // // // // //     }

// // // // // // //     let denominator = 1
// // // // // // //     for (const rep of reps) {
// // // // // // //       const repFactorial = factorial(rep)
// // // // // // //       if (repFactorial === 'Too large') {
// // // // // // //         setResult({
// // // // // // //           totalObjects: n,
// // // // // // //           repetitions: reps,
// // // // // // //           result: 'Too large',
// // // // // // //           formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // // //         })
// // // // // // //         return
// // // // // // //       }
// // // // // // //       denominator *= repFactorial
// // // // // // //     }

// // // // // // //     const result = numerator / denominator
// // // // // // //     setResult({
// // // // // // //       totalObjects: n,
// // // // // // //       repetitions: reps,
// // // // // // //       result: result,
// // // // // // //       formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // // //     })
// // // // // // //   }

// // // // // // //   useEffect(() => {
// // // // // // //     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
// // // // // // //       calculate()
// // // // // // //     } else {
// // // // // // //       setResult(null)
// // // // // // //       setError('')
// // // // // // //     }
// // // // // // //   }, [totalObjects, repetitions])

// // // // // // //   return (
// // // // // // //     <div style={{
// // // // // // //       display: 'flex',
// // // // // // //       gap: '30px',
// // // // // // //       backgroundColor: '#fff',
// // // // // // //       borderRadius: '12px',
// // // // // // //       padding: '30px',
// // // // // // //       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // // // //       minHeight: '600px'
// // // // // // //     }}>
// // // // // // //       {/* Left Half - Calculator */}
// // // // // // //       <div style={{
// // // // // // //         flex: '1',
// // // // // // //         paddingRight: '15px'
// // // // // // //       }}>
// // // // // // //         <h2 style={{
// // // // // // //           color: '#333',
// // // // // // //           marginBottom: '30px',
// // // // // // //           fontSize: '24px'
// // // // // // //         }}>Permutation with Repetition</h2>

// // // // // // //         <div style={{
// // // // // // //           marginBottom: '25px'
// // // // // // //         }}>
// // // // // // //           <label style={{
// // // // // // //             display: 'block',
// // // // // // //             marginBottom: '8px',
// // // // // // //             fontWeight: '500',
// // // // // // //             color: '#333'
// // // // // // //           }}>
// // // // // // //             Total number of objects (n):
// // // // // // //           </label>
// // // // // // //           <div style={{
// // // // // // //             position: 'relative'
// // // // // // //           }}>
// // // // // // //             <input
// // // // // // //               type="number"
// // // // // // //               value={totalObjects}
// // // // // // //               onChange={(e) => setTotalObjects(e.target.value)}
// // // // // // //               placeholder="e.g., 4"
// // // // // // //               min="0"
// // // // // // //               style={{
// // // // // // //                 width: '100%',
// // // // // // //                 padding: '12px 40px 12px 16px',
// // // // // // //                 border: '2px solid #ddd',
// // // // // // //                 borderRadius: '8px',
// // // // // // //                 fontSize: '16px',
// // // // // // //                 boxSizing: 'border-box'
// // // // // // //               }}
// // // // // // //             />
// // // // // // //             {totalObjects && (
// // // // // // //               <button
// // // // // // //                 onClick={() => clearField('total')}
// // // // // // //                 style={{
// // // // // // //                   position: 'absolute',
// // // // // // //                   right: '10px',
// // // // // // //                   top: '50%',
// // // // // // //                   transform: 'translateY(-50%)',
// // // // // // //                   background: 'none',
// // // // // // //                   border: 'none',
// // // // // // //                   fontSize: '18px',
// // // // // // //                   color: '#999',
// // // // // // //                   cursor: 'pointer',
// // // // // // //                   padding: '0',
// // // // // // //                   width: '20px',
// // // // // // //                   height: '20px',
// // // // // // //                   display: 'flex',
// // // // // // //                   alignItems: 'center',
// // // // // // //                   justifyContent: 'center'
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 ×
// // // // // // //               </button>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div style={{
// // // // // // //           marginBottom: '25px'
// // // // // // //         }}>
// // // // // // //           <label style={{
// // // // // // //             display: 'block',
// // // // // // //             marginBottom: '8px',
// // // // // // //             fontWeight: '500',
// // // // // // //             color: '#333'
// // // // // // //           }}>
// // // // // // //             Repetition counts (how many of each type):
// // // // // // //           </label>
          
// // // // // // //           {repetitions.map((rep, index) => (
// // // // // // //             <div key={index} style={{
// // // // // // //               display: 'flex',
// // // // // // //               gap: '10px',
// // // // // // //               marginBottom: '10px',
// // // // // // //               alignItems: 'center'
// // // // // // //             }}>
// // // // // // //               <div style={{
// // // // // // //                 position: 'relative',
// // // // // // //                 flex: 1
// // // // // // //               }}>
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   value={rep}
// // // // // // //                   onChange={(e) => updateRepetition(index, e.target.value)}
// // // // // // //                   placeholder={`Type ${index + 1} count`}
// // // // // // //                   min="1"
// // // // // // //                   style={{
// // // // // // //                     width: '100%',
// // // // // // //                     padding: '8px 30px 8px 12px',
// // // // // // //                     border: '2px solid #ddd',
// // // // // // //                     borderRadius: '6px',
// // // // // // //                     fontSize: '14px',
// // // // // // //                     boxSizing: 'border-box'
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //                 {rep && (
// // // // // // //                   <button
// // // // // // //                     onClick={() => clearField('repetition', index)}
// // // // // // //                     style={{
// // // // // // //                       position: 'absolute',
// // // // // // //                       right: '8px',
// // // // // // //                       top: '50%',
// // // // // // //                       transform: 'translateY(-50%)',
// // // // // // //                       background: 'none',
// // // // // // //                       border: 'none',
// // // // // // //                       fontSize: '16px',
// // // // // // //                       color: '#999',
// // // // // // //                       cursor: 'pointer',
// // // // // // //                       padding: '0',
// // // // // // //                       width: '16px',
// // // // // // //                       height: '16px',
// // // // // // //                       display: 'flex',
// // // // // // //                       alignItems: 'center',
// // // // // // //                       justifyContent: 'center'
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     ×
// // // // // // //                   </button>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //               {repetitions.length > 1 && (
// // // // // // //                 <button
// // // // // // //                   onClick={() => removeRepetitionField(index)}
// // // // // // //                   style={{
// // // // // // //                     padding: '8px 12px',
// // // // // // //                     backgroundColor: '#dc3545',
// // // // // // //                     color: '#fff',
// // // // // // //                     border: 'none',
// // // // // // //                     borderRadius: '6px',
// // // // // // //                     cursor: 'pointer',
// // // // // // //                     fontSize: '12px'
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Remove
// // // // // // //                 </button>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           ))}
          
// // // // // // //           <button
// // // // // // //             onClick={addRepetitionField}
// // // // // // //             style={{
// // // // // // //               padding: '8px 16px',
// // // // // // //               backgroundColor: '#28a745',
// // // // // // //               color: '#fff',
// // // // // // //               border: 'none',
// // // // // // //               borderRadius: '6px',
// // // // // // //               cursor: 'pointer',
// // // // // // //               fontSize: '14px',
// // // // // // //               marginTop: '10px',
// // // // // // //               marginRight: '10px'
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Add Type
// // // // // // //           </button>

// // // // // // //           <button
// // // // // // //             onClick={resetForm}
// // // // // // //             style={{
// // // // // // //               padding: '8px 16px',
// // // // // // //               backgroundColor: '#6c757d',
// // // // // // //               color: '#fff',
// // // // // // //               border: 'none',
// // // // // // //               borderRadius: '6px',
// // // // // // //               cursor: 'pointer',
// // // // // // //               fontSize: '14px',
// // // // // // //               marginTop: '10px'
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Reset
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         {error && (
// // // // // // //           <div style={{
// // // // // // //             backgroundColor: '#f8d7da',
// // // // // // //             color: '#721c24',
// // // // // // //             padding: '12px 16px',
// // // // // // //             borderRadius: '8px',
// // // // // // //             border: '1px solid #f5c6cb',
// // // // // // //             marginBottom: '20px'
// // // // // // //           }}>
// // // // // // //             {error}
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {result && !error && (
// // // // // // //           <div style={{
// // // // // // //             backgroundColor: '#d4edda',
// // // // // // //             padding: '20px',
// // // // // // //             borderRadius: '8px',
// // // // // // //             border: '1px solid #28a745'
// // // // // // //           }}>
// // // // // // //             <h3 style={{
// // // // // // //               margin: '0 0 15px 0',
// // // // // // //               color: '#155724',
// // // // // // //               fontSize: '18px'
// // // // // // //             }}>Result:</h3>
            
// // // // // // //             <div style={{
// // // // // // //               display: 'grid',
// // // // // // //               gridTemplateColumns: 'auto 1fr',
// // // // // // //               gap: '10px 20px',
// // // // // // //               alignItems: 'center'
// // // // // // //             }}>
// // // // // // //               <strong>Formula:</strong>
// // // // // // //               <span>{result.formula}</span>
              
// // // // // // //               <strong>Result:</strong>
// // // // // // //               <span>{typeof result.result === 'number' ? result.result.toLocaleString() : result.result}</span>
// // // // // // //             </div>

// // // // // // //             {typeof result.result === 'number' && (
// // // // // // //               <div style={{
// // // // // // //                 marginTop: '15px',
// // // // // // //                 padding: '10px',
// // // // // // //                 backgroundColor: 'rgba(255,255,255,0.5)',
// // // // // // //                 borderRadius: '4px'
// // // // // // //               }}>
// // // // // // //                 <small style={{ color: '#155724' }}>
// // // // // // //                   There are {result.result.toLocaleString()} distinct arrangements.
// // // // // // //                 </small>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       {/* Right Half - Explanation */}
// // // // // // //       <div style={{
// // // // // // //         flex: '1',
// // // // // // //         paddingLeft: '15px',
// // // // // // //         borderLeft: '1px solid #e0e0e0'
// // // // // // //       }}>
// // // // // // //         <h3 style={{
// // // // // // //           color: '#495057',
// // // // // // //           marginBottom: '20px',
// // // // // // //           fontSize: '20px'
// // // // // // //         }}>Explanation</h3>

// // // // // // //         <div style={{
// // // // // // //           backgroundColor: '#f8f9fa',
// // // // // // //           padding: '20px',
// // // // // // //           borderRadius: '8px',
// // // // // // //           marginBottom: '20px',
// // // // // // //           borderLeft: '4px solid #28a745'
// // // // // // //         }}>
// // // // // // //           <h4 style={{
// // // // // // //             margin: '0 0 10px 0',
// // // // // // //             color: '#495057',
// // // // // // //             fontSize: '16px'
// // // // // // //           }}>Formula: n! / (n₁! × n₂! × ... × nₖ!)</h4>
// // // // // // //           <p style={{
// // // // // // //             margin: 0,
// // // // // // //             color: '#6c757d',
// // // // // // //             lineHeight: '1.5'
// // // // // // //           }}>
// // // // // // //             Calculate arrangements of n objects where some objects are identical. n₁, n₂, etc. are the counts of each type of identical object.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         <div style={{
// // // // // // //           backgroundColor: '#fff3cd',
// // // // // // //           padding: '15px',
// // // // // // //           borderRadius: '8px',
// // // // // // //           border: '1px solid #ffeaa7',
// // // // // // //           marginBottom: '20px'
// // // // // // //         }}>
// // // // // // //           <h4 style={{
// // // // // // //             margin: '0 0 10px 0',
// // // // // // //             color: '#856404',
// // // // // // //             fontSize: '14px'
// // // // // // //           }}>Example:</h4>
// // // // // // //           <p style={{
// // // // // // //             margin: 0,
// // // // // // //             color: '#856404',
// // // // // // //             fontSize: '14px',
// // // // // // //             lineHeight: '1.4'
// // // // // // //           }}>
// // // // // // //             Arrange letters in "BOOK":<br/>
// // // // // // //             • Total: 4 letters<br/>
// // // // // // //             • B appears 1 time<br/>
// // // // // // //             • O appears 2 times<br/>
// // // // // // //             • K appears 1 time<br/>
// // // // // // //             • Result: 4!/(1!×2!×1!) = 24/2 = 12 arrangements
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         <div style={{
// // // // // // //           backgroundColor: '#e2e3ff',
// // // // // // //           padding: '15px',
// // // // // // //           borderRadius: '8px',
// // // // // // //           border: '1px solid #6f42c1'
// // // // // // //         }}>
// // // // // // //           <h4 style={{
// // // // // // //             margin: '0 0 10px 0',
// // // // // // //             color: '#4c2a85',
// // // // // // //             fontSize: '14px'
// // // // // // //           }}>Why this formula?</h4>
// // // // // // //           <p style={{
// // // // // // //             margin: 0,
// // // // // // //             color: '#4c2a85',
// // // // // // //             fontSize: '14px',
// // // // // // //             lineHeight: '1.4'
// // // // // // //           }}>
// // // // // // //             We start with n! total arrangements, then divide by the factorial of each repetition count to account for identical objects that don't create new arrangements when swapped.
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }


// // // // // // 'use client'

// // // // // // import { useState, useEffect } from 'react'
// // // // // // import { processContent } from '@/app/utils/contentProcessor'

// // // // // // export function PermutationWithRepetition() {
// // // // // //   const [totalObjects, setTotalObjects] = useState('')
// // // // // //   const [repetitions, setRepetitions] = useState([''])
// // // // // //   const [result, setResult] = useState(null)
// // // // // //   const [error, setError] = useState('')

// // // // // //   const factorial = (num) => {
// // // // // //     if (num < 0) return null
// // // // // //     if (num === 0 || num === 1) return 1
    
// // // // // //     let result = 1
// // // // // //     for (let i = 2; i <= num; i++) {
// // // // // //       result *= i
// // // // // //       if (result > Number.MAX_SAFE_INTEGER) {
// // // // // //         return 'Too large'
// // // // // //       }
// // // // // //     }
// // // // // //     return result
// // // // // //   }

// // // // // //   const addRepetitionField = () => {
// // // // // //     setRepetitions([...repetitions, ''])
// // // // // //   }

// // // // // //   const removeRepetitionField = (index) => {
// // // // // //     if (repetitions.length > 1) {
// // // // // //       setRepetitions(repetitions.filter((_, i) => i !== index))
// // // // // //     }
// // // // // //   }

// // // // // //   const updateRepetition = (index, value) => {
// // // // // //     const newRepetitions = [...repetitions]
// // // // // //     newRepetitions[index] = value
// // // // // //     setRepetitions(newRepetitions)
// // // // // //   }

// // // // // //   const clearField = (field, index = null) => {
// // // // // //     if (field === 'total') {
// // // // // //       setTotalObjects('')
// // // // // //     } else if (field === 'repetition' && index !== null) {
// // // // // //       updateRepetition(index, '')
// // // // // //     }
// // // // // //   }

// // // // // //   const resetForm = () => {
// // // // // //     setTotalObjects('')
// // // // // //     setRepetitions([''])
// // // // // //     setResult(null)
// // // // // //     setError('')
// // // // // //   }

// // // // // //   const calculate = () => {
// // // // // //     setError('')
    
// // // // // //     const n = parseInt(totalObjects)
// // // // // //     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
// // // // // //     if (isNaN(n) || n < 0) {
// // // // // //       setError('Please enter a valid total number of objects')
// // // // // //       return
// // // // // //     }
    
// // // // // //     if (reps.length === 0) {
// // // // // //       setError('Please enter at least one repetition count')
// // // // // //       return
// // // // // //     }
    
// // // // // //     const sumReps = reps.reduce((sum, r) => sum + r, 0)
// // // // // //     if (sumReps !== n) {
// // // // // //       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
// // // // // //       return
// // // // // //     }
    
// // // // // //     if (n > 170) {
// // // // // //       setError('Total objects too large (maximum is 170)')
// // // // // //       return
// // // // // //     }

// // // // // //     const numerator = factorial(n)
// // // // // //     if (numerator === 'Too large') {
// // // // // //       setResult({
// // // // // //         totalObjects: n,
// // // // // //         repetitions: reps,
// // // // // //         result: 'Too large',
// // // // // //         formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // //       })
// // // // // //       return
// // // // // //     }

// // // // // //     let denominator = 1
// // // // // //     for (const rep of reps) {
// // // // // //       const repFactorial = factorial(rep)
// // // // // //       if (repFactorial === 'Too large') {
// // // // // //         setResult({
// // // // // //           totalObjects: n,
// // // // // //           repetitions: reps,
// // // // // //           result: 'Too large',
// // // // // //           formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // //         })
// // // // // //         return
// // // // // //       }
// // // // // //       denominator *= repFactorial
// // // // // //     }

// // // // // //     const result = numerator / denominator
// // // // // //     setResult({
// // // // // //       totalObjects: n,
// // // // // //       repetitions: reps,
// // // // // //       result: result,
// // // // // //       formula: `${n}! / (${reps.join('! × ')}!)`
// // // // // //     })
// // // // // //   }

// // // // // //   useEffect(() => {
// // // // // //     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
// // // // // //       calculate()
// // // // // //     } else {
// // // // // //       setResult(null)
// // // // // //       setError('')
// // // // // //     }
// // // // // //   }, [totalObjects, repetitions])

// // // // // //   return (
// // // // // //     <div style={{
// // // // // //       display: 'flex',
// // // // // //       gap: '30px',
// // // // // //       backgroundColor: '#fff',
// // // // // //       borderRadius: '12px',
// // // // // //       padding: '30px',
// // // // // //       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // // //       minHeight: '600px'
// // // // // //     }}>
// // // // // //       <div style={{ flex: '1', paddingRight: '15px' }}>
// // // // // //         <h2 style={{
// // // // // //           color: '#333',
// // // // // //           marginBottom: '30px',
// // // // // //           fontSize: '24px'
// // // // // //         }}>Permutation with Repetition</h2>

// // // // // //         <div style={{ marginBottom: '25px' }}>
// // // // // //           <label style={{
// // // // // //             display: 'block',
// // // // // //             marginBottom: '8px',
// // // // // //             fontWeight: '500',
// // // // // //             color: '#333'
// // // // // //           }}>
// // // // // //             Total number of objects (n):
// // // // // //           </label>
// // // // // //           <div style={{ position: 'relative' }}>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               value={totalObjects}
// // // // // //               onChange={(e) => setTotalObjects(e.target.value)}
// // // // // //               placeholder="e.g., 4"
// // // // // //               min="0"
// // // // // //               style={{
// // // // // //                 width: '100%',
// // // // // //                 padding: '12px 40px 12px 16px',
// // // // // //                 border: '2px solid #ddd',
// // // // // //                 borderRadius: '8px',
// // // // // //                 fontSize: '16px',
// // // // // //                 boxSizing: 'border-box'
// // // // // //               }}
// // // // // //             />
// // // // // //             {totalObjects && (
// // // // // //               <button
// // // // // //                 onClick={() => clearField('total')}
// // // // // //                 style={{
// // // // // //                   position: 'absolute',
// // // // // //                   right: '10px',
// // // // // //                   top: '50%',
// // // // // //                   transform: 'translateY(-50%)',
// // // // // //                   background: 'none',
// // // // // //                   border: 'none',
// // // // // //                   fontSize: '18px',
// // // // // //                   color: '#999',
// // // // // //                   cursor: 'pointer'
// // // // // //                 }}
// // // // // //               >
// // // // // //                 ×
// // // // // //               </button>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div style={{ marginBottom: '25px' }}>
// // // // // //           <label style={{
// // // // // //             display: 'block',
// // // // // //             marginBottom: '8px',
// // // // // //             fontWeight: '500',
// // // // // //             color: '#333'
// // // // // //           }}>
// // // // // //             Repetition counts:
// // // // // //           </label>
          
// // // // // //           {repetitions.map((rep, index) => (
// // // // // //             <div key={index} style={{
// // // // // //               display: 'flex',
// // // // // //               gap: '10px',
// // // // // //               marginBottom: '10px',
// // // // // //               alignItems: 'center'
// // // // // //             }}>
// // // // // //               <div style={{ position: 'relative', flex: 1 }}>
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   value={rep}
// // // // // //                   onChange={(e) => updateRepetition(index, e.target.value)}
// // // // // //                   placeholder={`Type ${index + 1} count`}
// // // // // //                   min="1"
// // // // // //                   style={{
// // // // // //                     width: '100%',
// // // // // //                     padding: '8px 30px 8px 12px',
// // // // // //                     border: '2px solid #ddd',
// // // // // //                     borderRadius: '6px',
// // // // // //                     fontSize: '14px',
// // // // // //                     boxSizing: 'border-box'
// // // // // //                   }}
// // // // // //                 />
// // // // // //                 {rep && (
// // // // // //                   <button
// // // // // //                     onClick={() => clearField('repetition', index)}
// // // // // //                     style={{
// // // // // //                       position: 'absolute',
// // // // // //                       right: '8px',
// // // // // //                       top: '50%',
// // // // // //                       transform: 'translateY(-50%)',
// // // // // //                       background: 'none',
// // // // // //                       border: 'none',
// // // // // //                       fontSize: '16px',
// // // // // //                       color: '#999',
// // // // // //                       cursor: 'pointer'
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     ×
// // // // // //                   </button>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //               {repetitions.length > 1 && (
// // // // // //                 <button
// // // // // //                   onClick={() => removeRepetitionField(index)}
// // // // // //                   style={{
// // // // // //                     padding: '8px 12px',
// // // // // //                     backgroundColor: '#dc3545',
// // // // // //                     color: '#fff',
// // // // // //                     border: 'none',
// // // // // //                     borderRadius: '6px',
// // // // // //                     cursor: 'pointer',
// // // // // //                     fontSize: '12px'
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Remove
// // // // // //                 </button>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           ))}
          
// // // // // //           <button
// // // // // //             onClick={addRepetitionField}
// // // // // //             style={{
// // // // // //               padding: '8px 16px',
// // // // // //               backgroundColor: '#28a745',
// // // // // //               color: '#fff',
// // // // // //               border: 'none',
// // // // // //               borderRadius: '6px',
// // // // // //               cursor: 'pointer',
// // // // // //               fontSize: '14px',
// // // // // //               marginRight: '10px'
// // // // // //             }}
// // // // // //           >
// // // // // //             Add Type
// // // // // //           </button>

// // // // // //           <button
// // // // // //             onClick={resetForm}
// // // // // //             style={{
// // // // // //               padding: '8px 16px',
// // // // // //               backgroundColor: '#6c757d',
// // // // // //               color: '#fff',
// // // // // //               border: 'none',
// // // // // //               borderRadius: '6px',
// // // // // //               cursor: 'pointer',
// // // // // //               fontSize: '14px'
// // // // // //             }}
// // // // // //           >
// // // // // //             Reset
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {error && (
// // // // // //           <div style={{
// // // // // //             backgroundColor: '#f8d7da',
// // // // // //             color: '#721c24',
// // // // // //             padding: '12px 16px',
// // // // // //             borderRadius: '8px',
// // // // // //             border: '1px solid #f5c6cb',
// // // // // //             marginBottom: '20px'
// // // // // //           }}>
// // // // // //             {error}
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {result && !error && (
// // // // // //           <div style={{
// // // // // //             backgroundColor: '#d4edda',
// // // // // //             padding: '20px',
// // // // // //             borderRadius: '8px',
// // // // // //             border: '1px solid #28a745'
// // // // // //           }}>
// // // // // //             <h3 style={{
// // // // // //               margin: '0 0 15px 0',
// // // // // //               color: '#155724',
// // // // // //               fontSize: '18px'
// // // // // //             }}>Result:</h3>
            
// // // // // //             <div style={{
// // // // // //               display: 'grid',
// // // // // //               gridTemplateColumns: 'auto 1fr',
// // // // // //               gap: '10px 20px',
// // // // // //               alignItems: 'center'
// // // // // //             }}>
// // // // // //               <strong>Formula:</strong>
// // // // // //               <span>{result.formula}</span>
              
// // // // // //               <strong>Result:</strong>
// // // // // //               <span>{typeof result.result === 'number' ? result.result.toLocaleString() : result.result}</span>
// // // // // //             </div>

// // // // // //             {typeof result.result === 'number' && (
// // // // // //               <div style={{
// // // // // //                 marginTop: '15px',
// // // // // //                 padding: '10px',
// // // // // //                 backgroundColor: 'rgba(255,255,255,0.5)',
// // // // // //                 borderRadius: '4px'
// // // // // //               }}>
// // // // // //                 <small style={{ color: '#155724' }}>
// // // // // //                   There are {result.result.toLocaleString()} distinct arrangements.
// // // // // //                 </small>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       <div style={{
// // // // // //         flex: '1',
// // // // // //         paddingLeft: '15px',
// // // // // //         borderLeft: '1px solid #e0e0e0'
// // // // // //       }}>
// // // // // //         <h3 style={{
// // // // // //           color: '#495057',
// // // // // //           marginBottom: '20px',
// // // // // //           fontSize: '20px'
// // // // // //         }}>Explanation</h3>

// // // // // //         <div style={{
// // // // // //           backgroundColor: '#f8f9fa',
// // // // // //           padding: '20px',
// // // // // //           borderRadius: '8px',
// // // // // //           marginBottom: '20px',
// // // // // //           borderLeft: '4px solid #28a745'
// // // // // //         }}>
// // // // // //           <div style={{
// // // // // //             margin: '0 0 10px 0',
// // // // // //             color: '#495057',
// // // // // //             fontSize: '16px',
// // // // // //             fontWeight: 'bold'
// // // // // //           }}>
// // // // // //             Formula: {processContent('$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$')}
// // // // // //           </div>
// // // // // //           <p style={{
// // // // // //             margin: 0,
// // // // // //             color: '#6c757d',
// // // // // //             lineHeight: '1.5'
// // // // // //           }}>
// // // // // //             Calculate arrangements of {processContent('$n$')} objects where some objects are identical. {processContent('$n_1, n_2, \\ldots, n_k$')} are the counts of each type of identical object.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div style={{
// // // // // //           backgroundColor: '#fff3cd',
// // // // // //           padding: '15px',
// // // // // //           borderRadius: '8px',
// // // // // //           border: '1px solid #ffeaa7',
// // // // // //           marginBottom: '20px'
// // // // // //         }}>
// // // // // //           <h4 style={{
// // // // // //             margin: '0 0 10px 0',
// // // // // //             color: '#856404',
// // // // // //             fontSize: '14px'
// // // // // //           }}>Example:</h4>
// // // // // //           <p style={{
// // // // // //             margin: 0,
// // // // // //             color: '#856404',
// // // // // //             fontSize: '14px',
// // // // // //             lineHeight: '1.4'
// // // // // //           }}>
// // // // // //             Arrange letters in "BOOK":<br/>
// // // // // //             • Total: 4 letters<br/>
// // // // // //             • B appears 1 time<br/>
// // // // // //             • O appears 2 times<br/>
// // // // // //             • K appears 1 time<br/>
// // // // // //             • Result: {processContent('$\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$')} arrangements
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div style={{
// // // // // //           backgroundColor: '#e2e3ff',
// // // // // //           padding: '15px',
// // // // // //           borderRadius: '8px',
// // // // // //           border: '1px solid #6f42c1'
// // // // // //         }}>
// // // // // //           <h4 style={{
// // // // // //             margin: '0 0 10px 0',
// // // // // //             color: '#4c2a85',
// // // // // //             fontSize: '14px'
// // // // // //           }}>Why this formula?</h4>
// // // // // //           <p style={{
// // // // // //             margin: 0,
// // // // // //             color: '#4c2a85',
// // // // // //             fontSize: '14px',
// // // // // //             lineHeight: '1.4'
// // // // // //           }}>
// // // // // //             We start with {processContent('$n!$')} total arrangements, then divide by the factorial of each repetition count to account for identical objects that don't create new arrangements when swapped.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }


// // // // // 'use client'

// // // // // import { useState, useEffect } from 'react'
// // // // // import { processContent } from '@/app/utils/contentProcessor'

// // // // // export function PermutationWithRepetition() {
// // // // //   const [totalObjects, setTotalObjects] = useState('')
// // // // //   const [repetitions, setRepetitions] = useState([''])
// // // // //   const [result, setResult] = useState(null)
// // // // //   const [error, setError] = useState('')

// // // // //   const factorial = (num) => {
// // // // //     if (num < 0) return null
// // // // //     if (num === 0 || num === 1) return 1
    
// // // // //     let result = 1
// // // // //     for (let i = 2; i <= num; i++) {
// // // // //       result *= i
// // // // //       if (result > Number.MAX_SAFE_INTEGER) {
// // // // //         return 'Too large'
// // // // //       }
// // // // //     }
// // // // //     return result
// // // // //   }

// // // // //   const addRepetitionField = () => {
// // // // //     setRepetitions([...repetitions, ''])
// // // // //   }

// // // // //   const removeRepetitionField = (index) => {
// // // // //     if (repetitions.length > 1) {
// // // // //       setRepetitions(repetitions.filter((_, i) => i !== index))
// // // // //     }
// // // // //   }

// // // // //   const updateRepetition = (index, value) => {
// // // // //     const newRepetitions = [...repetitions]
// // // // //     newRepetitions[index] = value
// // // // //     setRepetitions(newRepetitions)
// // // // //   }

// // // // //   const clearField = (field, index = null) => {
// // // // //     if (field === 'total') {
// // // // //       setTotalObjects('')
// // // // //     } else if (field === 'repetition' && index !== null) {
// // // // //       updateRepetition(index, '')
// // // // //     }
// // // // //   }

// // // // //   const resetForm = () => {
// // // // //     setTotalObjects('')
// // // // //     setRepetitions([''])
// // // // //     setResult(null)
// // // // //     setError('')
// // // // //   }

// // // // //   const calculate = () => {
// // // // //     setError('')
    
// // // // //     const n = parseInt(totalObjects)
// // // // //     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
// // // // //     if (isNaN(n) || n < 0) {
// // // // //       setError('Please enter a valid total number of objects')
// // // // //       return
// // // // //     }
    
// // // // //     if (reps.length === 0) {
// // // // //       setError('Please enter at least one repetition count')
// // // // //       return
// // // // //     }
    
// // // // //     const sumReps = reps.reduce((sum, r) => sum + r, 0)
// // // // //     if (sumReps !== n) {
// // // // //       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
// // // // //       return
// // // // //     }
    
// // // // //     if (n > 170) {
// // // // //       setError('Total objects too large (maximum is 170)')
// // // // //       return
// // // // //     }

// // // // //     const numerator = factorial(n)
// // // // //     if (numerator === 'Too large') {
// // // // //       setResult({
// // // // //         totalObjects: n,
// // // // //         repetitions: reps,
// // // // //         result: 'Too large',
// // // // //         formula: `${n}! / (${reps.join('! × ')}!)`
// // // // //       })
// // // // //       return
// // // // //     }

// // // // //     let denominator = 1
// // // // //     for (const rep of reps) {
// // // // //       const repFactorial = factorial(rep)
// // // // //       if (repFactorial === 'Too large') {
// // // // //         setResult({
// // // // //           totalObjects: n,
// // // // //           repetitions: reps,
// // // // //           result: 'Too large',
// // // // //           formula: `${n}! / (${reps.join('! × ')}!)`
// // // // //         })
// // // // //         return
// // // // //       }
// // // // //       denominator *= repFactorial
// // // // //     }

// // // // //     const result = numerator / denominator
// // // // //     setResult({
// // // // //       totalObjects: n,
// // // // //       repetitions: reps,
// // // // //       result: result,
// // // // //       formula: `${n}! / (${reps.join('! × ')}!)`
// // // // //     })
// // // // //   }

// // // // //   useEffect(() => {
// // // // //     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
// // // // //       calculate()
// // // // //     } else {
// // // // //       setResult(null)
// // // // //       setError('')
// // // // //     }
// // // // //   }, [totalObjects, repetitions])

// // // // //   return (
// // // // //     <div style={{
// // // // //       display: 'flex',
// // // // //       gap: '30px',
// // // // //       backgroundColor: '#fff',
// // // // //       borderRadius: '12px',
// // // // //       padding: '-10px',
// // // // //       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // //       minHeight: '500px'
// // // // //     }}>
// // // // //       <div style={{ flex: '1', paddingRight: '15px' }}>
// // // // //         <h2 style={{
// // // // //           color: '#333',
// // // // //           marginBottom: '30px',
// // // // //           fontSize: '24px'
// // // // //         }}>Permutation with Repetition</h2>

// // // // //         <div style={{ marginBottom: '25px' }}>
// // // // //           <label style={{
// // // // //             display: 'block',
// // // // //             marginBottom: '8px',
// // // // //             fontWeight: '500',
// // // // //             color: '#333'
// // // // //           }}>
// // // // //             Total number of objects (n):
// // // // //           </label>
// // // // //           <div style={{ position: 'relative' }}>
// // // // //             <input
// // // // //               type="number"
// // // // //               value={totalObjects}
// // // // //               onChange={(e) => setTotalObjects(e.target.value)}
// // // // //               placeholder="e.g., 4"
// // // // //               min="0"
// // // // //               style={{
// // // // //                 width: '100%',
// // // // //                 padding: '12px 40px 12px 16px',
// // // // //                 border: '2px solid #ddd',
// // // // //                 borderRadius: '8px',
// // // // //                 fontSize: '16px',
// // // // //                 boxSizing: 'border-box'
// // // // //               }}
// // // // //             />
// // // // //             {totalObjects && (
// // // // //               <button
// // // // //                 onClick={() => clearField('total')}
// // // // //                 style={{
// // // // //                   position: 'absolute',
// // // // //                   right: '10px',
// // // // //                   top: '50%',
// // // // //                   transform: 'translateY(-50%)',
// // // // //                   background: 'none',
// // // // //                   border: 'none',
// // // // //                   fontSize: '18px',
// // // // //                   color: '#999',
// // // // //                   cursor: 'pointer'
// // // // //                 }}
// // // // //               >
// // // // //                 ×
// // // // //               </button>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>

// // // // //         <div style={{ marginBottom: '25px' }}>
// // // // //           <label style={{
// // // // //             display: 'block',
// // // // //             marginBottom: '8px',
// // // // //             fontWeight: '500',
// // // // //             color: '#333'
// // // // //           }}>
// // // // //             Repetition counts:
// // // // //           </label>
          
// // // // //           {repetitions.map((rep, index) => (
// // // // //             <div key={index} style={{
// // // // //               display: 'flex',
// // // // //               gap: '10px',
// // // // //               marginBottom: '10px',
// // // // //               alignItems: 'center'
// // // // //             }}>
// // // // //               <div style={{ position: 'relative', flex: 1 }}>
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   value={rep}
// // // // //                   onChange={(e) => updateRepetition(index, e.target.value)}
// // // // //                   placeholder={`Type ${index + 1} count`}
// // // // //                   min="1"
// // // // //                   style={{
// // // // //                     width: '100%',
// // // // //                     padding: '8px 30px 8px 12px',
// // // // //                     border: '2px solid #ddd',
// // // // //                     borderRadius: '6px',
// // // // //                     fontSize: '14px',
// // // // //                     boxSizing: 'border-box'
// // // // //                   }}
// // // // //                 />
// // // // //                 {rep && (
// // // // //                   <button
// // // // //                     onClick={() => clearField('repetition', index)}
// // // // //                     style={{
// // // // //                       position: 'absolute',
// // // // //                       right: '8px',
// // // // //                       top: '50%',
// // // // //                       transform: 'translateY(-50%)',
// // // // //                       background: 'none',
// // // // //                       border: 'none',
// // // // //                       fontSize: '16px',
// // // // //                       color: '#999',
// // // // //                       cursor: 'pointer'
// // // // //                     }}
// // // // //                   >
// // // // //                     ×
// // // // //                   </button>
// // // // //                 )}
// // // // //               </div>
// // // // //               {repetitions.length > 1 && (
// // // // //                 <button
// // // // //                   onClick={() => removeRepetitionField(index)}
// // // // //                   style={{
// // // // //                     padding: '8px 12px',
// // // // //                     backgroundColor: '#dc3545',
// // // // //                     color: '#fff',
// // // // //                     border: 'none',
// // // // //                     borderRadius: '6px',
// // // // //                     cursor: 'pointer',
// // // // //                     fontSize: '12px'
// // // // //                   }}
// // // // //                 >
// // // // //                   Remove
// // // // //                 </button>
// // // // //               )}
// // // // //             </div>
// // // // //           ))}
          
// // // // //           <button
// // // // //             onClick={addRepetitionField}
// // // // //             style={{
// // // // //               padding: '8px 16px',
// // // // //               backgroundColor: '#28a745',
// // // // //               color: '#fff',
// // // // //               border: 'none',
// // // // //               borderRadius: '6px',
// // // // //               cursor: 'pointer',
// // // // //               fontSize: '14px',
// // // // //               marginRight: '10px'
// // // // //             }}
// // // // //           >
// // // // //             Add Type
// // // // //           </button>

// // // // //           <button
// // // // //             onClick={resetForm}
// // // // //             style={{
// // // // //               padding: '8px 16px',
// // // // //               backgroundColor: '#6c757d',
// // // // //               color: '#fff',
// // // // //               border: 'none',
// // // // //               borderRadius: '6px',
// // // // //               cursor: 'pointer',
// // // // //               fontSize: '14px'
// // // // //             }}
// // // // //           >
// // // // //             Reset
// // // // //           </button>
// // // // //         </div>

// // // // //         {error && (
// // // // //           <div style={{
// // // // //             backgroundColor: '#f8d7da',
// // // // //             color: '#721c24',
// // // // //             padding: '12px 16px',
// // // // //             borderRadius: '8px',
// // // // //             border: '1px solid #f5c6cb',
// // // // //             marginBottom: '20px'
// // // // //           }}>
// // // // //             {error}
// // // // //           </div>
// // // // //         )}

// // // // //         {result && !error && (
// // // // //           <div style={{
// // // // //             backgroundColor: '#d4edda',
// // // // //             padding: '20px',
// // // // //             borderRadius: '8px',
// // // // //             border: '1px solid #28a745'
// // // // //           }}>
// // // // //             <h3 style={{
// // // // //               margin: '0 0 15px 0',
// // // // //               color: '#155724',
// // // // //               fontSize: '18px'
// // // // //             }}>Result:</h3>
            
// // // // //             <div style={{
// // // // //               display: 'grid',
// // // // //               gridTemplateColumns: 'auto 1fr',
// // // // //               gap: '10px 20px',
// // // // //               alignItems: 'center'
// // // // //             }}>
// // // // //               <strong>Formula:</strong>
// // // // //               <span>{result.formula}</span>
              
// // // // //               <strong>Result:</strong>
// // // // //               <span>{typeof result.result === 'number' ? result.result.toLocaleString() : result.result}</span>
// // // // //             </div>

// // // // //             {typeof result.result === 'number' && (
// // // // //               <div style={{
// // // // //                 marginTop: '5px',
// // // // //                 padding: '10px',
// // // // //                 backgroundColor: 'rgba(255,255,255,0.5)',
// // // // //                 borderRadius: '4px'
// // // // //               }}>
// // // // //                 <small style={{ color: '#155724' }}>
// // // // //                   There are {result.result.toLocaleString()} distinct arrangements.
// // // // //                 </small>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       <div style={{
// // // // //         flex: '1',
// // // // //         paddingLeft: '15px',
// // // // //         borderLeft: '1px solid #e0e0e0'
// // // // //       }}>
// // // // //         <h3 style={{
// // // // //           color: '#495057',
// // // // //           marginBottom: '20px',
// // // // //           fontSize: '20px'
// // // // //         }}>Explanation</h3>

// // // // //         <div style={{
// // // // //           backgroundColor: '#f8f9fa',
// // // // //           padding: '20px',
// // // // //           borderRadius: '8px',
// // // // //           marginBottom: '20px',
// // // // //           borderLeft: '4px solid #28a745'
// // // // //         }}>
// // // // //           <div style={{
// // // // //             margin: '0 0 10px 0',
// // // // //             color: '#495057',
// // // // //             fontSize: '16px',
// // // // //             fontWeight: 'bold'
// // // // //           }}>
// // // // //             Formula: {processContent('$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$')}
// // // // //           </div>
// // // // //           <p style={{
// // // // //             margin: 0,
// // // // //             color: '#6c757d',
// // // // //             lineHeight: '1.5'
// // // // //           }}>
// // // // //             Calculate arrangements of {processContent('$n$')} objects where some objects are identical. {processContent('$n_1, n_2, \\ldots, n_k$')} are the counts of each type of identical object.
// // // // //           </p>
// // // // //         </div>

// // // // //         <div style={{
// // // // //           backgroundColor: '#fff3cd',
// // // // //           padding: '15px',
// // // // //           borderRadius: '8px',
// // // // //           border: '1px solid #ffeaa7',
// // // // //           marginBottom: '20px'
// // // // //         }}>
// // // // //           <h4 style={{
// // // // //             margin: '0 0 10px 0',
// // // // //             color: '#856404',
// // // // //             fontSize: '14px'
// // // // //           }}>Example:</h4>
// // // // //           <p style={{
// // // // //             margin: 0,
// // // // //             color: '#856404',
// // // // //             fontSize: '14px',
// // // // //             lineHeight: '1.4'
// // // // //           }}>
// // // // //             Arrange letters in "BOOK":<br/>
// // // // //             • Total: 4 letters<br/>
// // // // //             • B appears 1 time<br/>
// // // // //             • O appears 2 times<br/>
// // // // //             • K appears 1 time<br/>
// // // // //             • Result: {processContent('$\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$')} arrangements
// // // // //           </p>
// // // // //         </div>

// // // // //         <div style={{
// // // // //           backgroundColor: '#e2e3ff',
// // // // //           padding: '15px',
// // // // //           borderRadius: '8px',
// // // // //           border: '1px solid #6f42c1'
// // // // //         }}>
// // // // //           <h4 style={{
// // // // //             margin: '0 0 10px 0',
// // // // //             color: '#4c2a85',
// // // // //             fontSize: '14px'
// // // // //           }}>Why this formula?</h4>
// // // // //           <p style={{
// // // // //             margin: 0,
// // // // //             color: '#4c2a85',
// // // // //             fontSize: '14px',
// // // // //             lineHeight: '1.4'
// // // // //           }}>
// // // // //             We start with {processContent('$n!$')} total arrangements, then divide by the factorial of each repetition count to account for identical objects that don't create new arrangements when swapped.
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }


// // // // 'use client'

// // // // import { useState, useEffect } from 'react'
// // // // import { processContent } from '@/app/utils/contentProcessor'

// // // // export function PermutationWithRepetition({ explanations }) {
// // // //   const [totalObjects, setTotalObjects] = useState('')
// // // //   const [repetitions, setRepetitions] = useState([''])
// // // //   const [result, setResult] = useState(null)
// // // //   const [error, setError] = useState('')

// // // //   const factorial = (num) => {
// // // //     if (num < 0) return null
// // // //     if (num === 0 || num === 1) return 1
    
// // // //     let result = 1
// // // //     for (let i = 2; i <= num; i++) {
// // // //       result *= i
// // // //       if (result > Number.MAX_SAFE_INTEGER) {
// // // //         return 'Too large'
// // // //       }
// // // //     }
// // // //     return result
// // // //   }

// // // //   const addRepetitionField = () => {
// // // //     setRepetitions([...repetitions, ''])
// // // //   }

// // // //   const removeRepetitionField = (index) => {
// // // //     if (repetitions.length > 1) {
// // // //       setRepetitions(repetitions.filter((_, i) => i !== index))
// // // //     }
// // // //   }

// // // //   const updateRepetition = (index, value) => {
// // // //     const newRepetitions = [...repetitions]
// // // //     newRepetitions[index] = value
// // // //     setRepetitions(newRepetitions)
// // // //   }

// // // //   const clearField = (field, index = null) => {
// // // //     if (field === 'total') {
// // // //       setTotalObjects('')
// // // //     } else if (field === 'repetition' && index !== null) {
// // // //       updateRepetition(index, '')
// // // //     }
// // // //   }

// // // //   const resetForm = () => {
// // // //     setTotalObjects('')
// // // //     setRepetitions([''])
// // // //     setResult(null)
// // // //     setError('')
// // // //   }

// // // //   const calculate = () => {
// // // //     setError('')
    
// // // //     const n = parseInt(totalObjects)
// // // //     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
// // // //     if (isNaN(n) || n < 0) {
// // // //       setError('Please enter a valid total number of objects')
// // // //       return
// // // //     }
    
// // // //     if (reps.length === 0) {
// // // //       setError('Please enter at least one repetition count')
// // // //       return
// // // //     }
    
// // // //     const sumReps = reps.reduce((sum, r) => sum + r, 0)
// // // //     if (sumReps !== n) {
// // // //       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
// // // //       return
// // // //     }
    
// // // //     if (n > 170) {
// // // //       setError('Total objects too large (maximum is 170)')
// // // //       return
// // // //     }

// // // //     const numerator = factorial(n)
// // // //     if (numerator === 'Too large') {
// // // //       setResult({
// // // //         totalObjects: n,
// // // //         repetitions: reps,
// // // //         result: 'Too large',
// // // //         formula: `${n}! / (${reps.join('! × ')}!)`
// // // //       })
// // // //       return
// // // //     }

// // // //     let denominator = 1
// // // //     for (const rep of reps) {
// // // //       const repFactorial = factorial(rep)
// // // //       if (repFactorial === 'Too large') {
// // // //         setResult({
// // // //           totalObjects: n,
// // // //           repetitions: reps,
// // // //           result: 'Too large',
// // // //           formula: `${n}! / (${reps.join('! × ')}!)`
// // // //         })
// // // //         return
// // // //       }
// // // //       denominator *= repFactorial
// // // //     }

// // // //     const result = numerator / denominator
// // // //     setResult({
// // // //       totalObjects: n,
// // // //       repetitions: reps,
// // // //       result: result,
// // // //       formula: `${n}! / (${reps.join('! × ')}!)`
// // // //     })
// // // //   }

// // // //   useEffect(() => {
// // // //     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
// // // //       calculate()
// // // //     } else {
// // // //       setResult(null)
// // // //       setError('')
// // // //     }
// // // //   }, [totalObjects, repetitions])

// // // //   return (
// // // //     <div style={{
// // // //       display: 'flex',
// // // //       gap: '30px',
// // // //       backgroundColor: '#fff',
// // // //       borderRadius: '12px',
// // // //       padding: '20px',
// // // //       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // //       minHeight: '500px'
// // // //     }}>
// // // //       <div style={{ flex: '1', paddingRight: '15px' }}>
// // // //         <h2 style={{
// // // //           color: '#333',
// // // //           marginBottom: '30px',
// // // //           fontSize: '24px'
// // // //         }}>Permutation with Repetition</h2>

// // // //         <div style={{ marginBottom: '25px' }}>
// // // //           <label style={{
// // // //             display: 'block',
// // // //             marginBottom: '8px',
// // // //             fontWeight: '500',
// // // //             color: '#333'
// // // //           }}>
// // // //             Total number of objects (n):
// // // //           </label>
// // // //           <div style={{ position: 'relative' }}>
// // // //             <input
// // // //               type="number"
// // // //               value={totalObjects}
// // // //               onChange={(e) => setTotalObjects(e.target.value)}
// // // //               placeholder="e.g., 4"
// // // //               min="0"
// // // //               style={{
// // // //                 width: '100%',
// // // //                 padding: '12px 40px 12px 16px',
// // // //                 border: '2px solid #ddd',
// // // //                 borderRadius: '8px',
// // // //                 fontSize: '16px',
// // // //                 boxSizing: 'border-box'
// // // //               }}
// // // //             />
// // // //             {totalObjects && (
// // // //               <button
// // // //                 onClick={() => clearField('total')}
// // // //                 style={{
// // // //                   position: 'absolute',
// // // //                   right: '10px',
// // // //                   top: '50%',
// // // //                   transform: 'translateY(-50%)',
// // // //                   background: 'none',
// // // //                   border: 'none',
// // // //                   fontSize: '18px',
// // // //                   color: '#999',
// // // //                   cursor: 'pointer'
// // // //                 }}
// // // //               >
// // // //                 ×
// // // //               </button>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         <div style={{ marginBottom: '25px' }}>
// // // //           <label style={{
// // // //             display: 'block',
// // // //             marginBottom: '8px',
// // // //             fontWeight: '500',
// // // //             color: '#333'
// // // //           }}>
// // // //             Repetition counts:
// // // //           </label>
          
// // // //           {repetitions.map((rep, index) => (
// // // //             <div key={index} style={{
// // // //               display: 'flex',
// // // //               gap: '10px',
// // // //               marginBottom: '10px',
// // // //               alignItems: 'center'
// // // //             }}>
// // // //               <div style={{ position: 'relative', flex: 1 }}>
// // // //                 <input
// // // //                   type="number"
// // // //                   value={rep}
// // // //                   onChange={(e) => updateRepetition(index, e.target.value)}
// // // //                   placeholder={`Type ${index + 1} count`}
// // // //                   min="1"
// // // //                   style={{
// // // //                     width: '100%',
// // // //                     padding: '8px 30px 8px 12px',
// // // //                     border: '2px solid #ddd',
// // // //                     borderRadius: '6px',
// // // //                     fontSize: '14px',
// // // //                     boxSizing: 'border-box'
// // // //                   }}
// // // //                 />
// // // //                 {rep && (
// // // //                   <button
// // // //                     onClick={() => clearField('repetition', index)}
// // // //                     style={{
// // // //                       position: 'absolute',
// // // //                       right: '8px',
// // // //                       top: '50%',
// // // //                       transform: 'translateY(-50%)',
// // // //                       background: 'none',
// // // //                       border: 'none',
// // // //                       fontSize: '16px',
// // // //                       color: '#999',
// // // //                       cursor: 'pointer'
// // // //                     }}
// // // //                   >
// // // //                     ×
// // // //                   </button>
// // // //                 )}
// // // //               </div>
// // // //               {repetitions.length > 1 && (
// // // //                 <button
// // // //                   onClick={() => removeRepetitionField(index)}
// // // //                   style={{
// // // //                     padding: '8px 12px',
// // // //                     backgroundColor: '#dc3545',
// // // //                     color: '#fff',
// // // //                     border: 'none',
// // // //                     borderRadius: '6px',
// // // //                     cursor: 'pointer',
// // // //                     fontSize: '12px'
// // // //                   }}
// // // //                 >
// // // //                   Remove
// // // //                 </button>
// // // //               )}
// // // //             </div>
// // // //           ))}
          
// // // //           <button
// // // //             onClick={addRepetitionField}
// // // //             style={{
// // // //               padding: '8px 16px',
// // // //               backgroundColor: '#28a745',
// // // //               color: '#fff',
// // // //               border: 'none',
// // // //               borderRadius: '6px',
// // // //               cursor: 'pointer',
// // // //               fontSize: '14px',
// // // //               marginRight: '10px'
// // // //             }}
// // // //           >
// // // //             Add Type
// // // //           </button>

// // // //           <button
// // // //             onClick={resetForm}
// // // //             style={{
// // // //               padding: '8px 16px',
// // // //               backgroundColor: '#6c757d',
// // // //               color: '#fff',
// // // //               border: 'none',
// // // //               borderRadius: '6px',
// // // //               cursor: 'pointer',
// // // //               fontSize: '14px'
// // // //             }}
// // // //           >
// // // //             Reset
// // // //           </button>
// // // //         </div>

// // // //         {error && (
// // // //           <div style={{
// // // //             backgroundColor: '#f8d7da',
// // // //             color: '#721c24',
// // // //             padding: '12px 16px',
// // // //             borderRadius: '8px',
// // // //             border: '1px solid #f5c6cb',
// // // //             marginBottom: '20px'
// // // //           }}>
// // // //             {error}
// // // //           </div>
// // // //         )}

// // // //         {result && !error && (
// // // //           <div style={{
// // // //             backgroundColor: '#d4edda',
// // // //             padding: '20px',
// // // //             borderRadius: '8px',
// // // //             border: '1px solid #28a745'
// // // //           }}>
// // // //             <h3 style={{
// // // //               margin: '0 0 15px 0',
// // // //               color: '#155724',
// // // //               fontSize: '18px'
// // // //             }}>Result:</h3>
            
// // // //             <div style={{
// // // //               display: 'grid',
// // // //               gridTemplateColumns: 'auto 1fr',
// // // //               gap: '10px 20px',
// // // //               alignItems: 'center'
// // // //             }}>
// // // //               <strong>Formula:</strong>
// // // //               <span>{result.formula}</span>
              
// // // //               <strong>Result:</strong>
// // // //               <span>{typeof result.result === 'number' ? result.result.toLocaleString() : result.result}</span>
// // // //             </div>

// // // //             {typeof result.result === 'number' && (
// // // //               <div style={{
// // // //                 marginTop: '15px',
// // // //                 padding: '10px',
// // // //                 backgroundColor: 'rgba(255,255,255,0.5)',
// // // //                 borderRadius: '4px'
// // // //               }}>
// // // //                 <small style={{ color: '#155724' }}>
// // // //                   There are {result.result.toLocaleString()} distinct arrangements.
// // // //                 </small>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       <div style={{
// // // //         flex: '1',
// // // //         paddingLeft: '15px',
// // // //         borderLeft: '1px solid #e0e0e0'
// // // //       }}>
// // // //         <h3 style={{
// // // //           color: '#495057',
// // // //           marginBottom: '20px',
// // // //           fontSize: '20px'
// // // //         }}>Explanation</h3>

// // // //         <div style={{
// // // //           backgroundColor: '#f8f9fa',
// // // //           padding: '20px',
// // // //           borderRadius: '8px',
// // // //           marginBottom: '20px',
// // // //           borderLeft: '4px solid #28a745'
// // // //         }}>
// // // //           <div style={{
// // // //             margin: '0 0 10px 0',
// // // //             color: '#495057',
// // // //             fontSize: '16px',
// // // //             fontWeight: 'bold'
// // // //           }}>
// // // //             {explanations?.formula || `Formula: ${processContent('$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$')}`}
// // // //           </div>
// // // //           <p style={{
// // // //             margin: 0,
// // // //             color: '#6c757d',
// // // //             lineHeight: '1.5'
// // // //           }}>
// // // //             {explanations?.description || `Calculate arrangements of ${processContent('$n$')} objects where some objects are identical. ${processContent('$n_1, n_2, \\ldots, n_k$')} are the counts of each type of identical object.`}
// // // //           </p>
// // // //         </div>

// // // //         <div style={{
// // // //           backgroundColor: '#fff3cd',
// // // //           padding: '15px',
// // // //           borderRadius: '8px',
// // // //           border: '1px solid #ffeaa7',
// // // //           marginBottom: '20px'
// // // //         }}>
// // // //           <h4 style={{
// // // //             margin: '0 0 10px 0',
// // // //             color: '#856404',
// // // //             fontSize: '14px'
// // // //           }}>Example:</h4>
// // // //           <div style={{
// // // //             margin: 0,
// // // //             color: '#856404',
// // // //             fontSize: '14px',
// // // //             lineHeight: '1.4'
// // // //           }}>
// // // //             {explanations?.example || (
// // // //               <>
// // // //                 Arrange letters in "BOOK":<br/>
// // // //                 • Total: 4 letters<br/>
// // // //                 • B appears 1 time<br/>
// // // //                 • O appears 2 times<br/>
// // // //                 • K appears 1 time<br/>
// // // //                 • Result: {processContent('$\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$')} arrangements
// // // //               </>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         <div style={{
// // // //           backgroundColor: '#e2e3ff',
// // // //           padding: '15px',
// // // //           borderRadius: '8px',
// // // //           border: '1px solid #6f42c1'
// // // //         }}>
// // // //           <h4 style={{
// // // //             margin: '0 0 10px 0',
// // // //             color: '#4c2a85',
// // // //             fontSize: '14px'
// // // //           }}>Why this formula?</h4>
// // // //           <p style={{
// // // //             margin: 0,
// // // //             color: '#4c2a85',
// // // //             fontSize: '14px',
// // // //             lineHeight: '1.4'
// // // //           }}>
// // // //             {explanations?.reasoning || `We start with ${processContent('$n!$')} total arrangements, then divide by the factorial of each repetition count to account for identical objects that don't create new arrangements when swapped.`}
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }


// // // 'use client'

// // // import { useState, useEffect } from 'react'
// // // import { processContent } from '@/app/utils/contentProcessor'

// // // export function PermutationWithRepetition({ explanations }) {
// // //   const [totalObjects, setTotalObjects] = useState('')
// // //   const [repetitions, setRepetitions] = useState([''])
// // //   const [result, setResult] = useState(null)
// // //   const [error, setError] = useState('')

// // //   const factorial = (num) => {
// // //     if (num < 0) return null
// // //     if (num === 0 || num === 1) return 1
    
// // //     let result = 1
// // //     for (let i = 2; i <= num; i++) {
// // //       result *= i
// // //       if (result > Number.MAX_SAFE_INTEGER) {
// // //         return 'Too large'
// // //       }
// // //     }
// // //     return result
// // //   }

// // //   const addRepetitionField = () => {
// // //     setRepetitions([...repetitions, ''])
// // //   }

// // //   const removeRepetitionField = (index) => {
// // //     if (repetitions.length > 1) {
// // //       setRepetitions(repetitions.filter((_, i) => i !== index))
// // //     }
// // //   }

// // //   const updateRepetition = (index, value) => {
// // //     const newRepetitions = [...repetitions]
// // //     newRepetitions[index] = value
// // //     setRepetitions(newRepetitions)
// // //   }

// // //   const clearField = (field, index = null) => {
// // //     if (field === 'total') {
// // //       setTotalObjects('')
// // //     } else if (field === 'repetition' && index !== null) {
// // //       updateRepetition(index, '')
// // //     }
// // //   }

// // //   const resetForm = () => {
// // //     setTotalObjects('')
// // //     setRepetitions([''])
// // //     setResult(null)
// // //     setError('')
// // //   }

// // //   const calculate = () => {
// // //     setError('')
    
// // //     const n = parseInt(totalObjects)
// // //     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
// // //     if (isNaN(n) || n < 0) {
// // //       setError('Please enter a valid total number of objects')
// // //       return
// // //     }
    
// // //     if (reps.length === 0) {
// // //       setError('Please enter at least one repetition count')
// // //       return
// // //     }
    
// // //     const sumReps = reps.reduce((sum, r) => sum + r, 0)
// // //     if (sumReps !== n) {
// // //       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
// // //       return
// // //     }
    
// // //     if (n > 170) {
// // //       setError('Total objects too large (maximum is 170)')
// // //       return
// // //     }

// // //     const numerator = factorial(n)
// // //     if (numerator === 'Too large') {
// // //       setResult({
// // //         totalObjects: n,
// // //         repetitions: reps,
// // //         result: 'Too large',
// // //         formula: `${n}! / (${reps.join('! × ')}!)`
// // //       })
// // //       return
// // //     }

// // //     let denominator = 1
// // //     for (const rep of reps) {
// // //       const repFactorial = factorial(rep)
// // //       if (repFactorial === 'Too large') {
// // //         setResult({
// // //           totalObjects: n,
// // //           repetitions: reps,
// // //           result: 'Too large',
// // //           formula: `${n}! / (${reps.join('! × ')}!)`
// // //         })
// // //         return
// // //       }
// // //       denominator *= repFactorial
// // //     }

// // //     const result = numerator / denominator
// // //     setResult({
// // //       totalObjects: n,
// // //       repetitions: reps,
// // //       result: result,
// // //       formula: `${n}! / (${reps.join('! × ')}!)`
// // //     })
// // //   }

// // //   useEffect(() => {
// // //     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
// // //       calculate()
// // //     } else {
// // //       setResult(null)
// // //       setError('')
// // //     }
// // //   }, [totalObjects, repetitions])

// // //   return (
// // //     <div style={{
// // //       display: 'flex',
// // //       gap: '30px',
// // //       backgroundColor: '#fff',
// // //       borderRadius: '12px',
// // //       padding: '20px',
// // //       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // //       minHeight: '500px'
// // //     }}>
// // //       <div style={{ flex: '1', paddingRight: '15px' }}>
// // //         <h2 style={{
// // //           color: '#333',
// // //           marginBottom: '30px',
// // //           fontSize: '24px'
// // //         }}>Permutation with Repetition</h2>

// // //         <div style={{ marginBottom: '25px' }}>
// // //           <label style={{
// // //             display: 'block',
// // //             marginBottom: '8px',
// // //             fontWeight: '500',
// // //             color: '#333'
// // //           }}>
// // //             Total number of objects (n):
// // //           </label>
// // //           <div style={{ position: 'relative' }}>
// // //             <input
// // //               type="number"
// // //               value={totalObjects}
// // //               onChange={(e) => setTotalObjects(e.target.value)}
// // //               placeholder="e.g., 4"
// // //               min="0"
// // //               style={{
// // //                 width: '100%',
// // //                 padding: '12px 40px 12px 16px',
// // //                 border: '2px solid #ddd',
// // //                 borderRadius: '8px',
// // //                 fontSize: '16px',
// // //                 boxSizing: 'border-box'
// // //               }}
// // //             />
// // //             {totalObjects && (
// // //               <button
// // //                 onClick={() => clearField('total')}
// // //                 style={{
// // //                   position: 'absolute',
// // //                   right: '10px',
// // //                   top: '50%',
// // //                   transform: 'translateY(-50%)',
// // //                   background: 'none',
// // //                   border: 'none',
// // //                   fontSize: '18px',
// // //                   color: '#999',
// // //                   cursor: 'pointer'
// // //                 }}
// // //               >
// // //                 ×
// // //               </button>
// // //             )}
// // //           </div>
// // //         </div>

// // //         <div style={{ marginBottom: '25px' }}>
// // //           <label style={{
// // //             display: 'block',
// // //             marginBottom: '8px',
// // //             fontWeight: '500',
// // //             color: '#333'
// // //           }}>
// // //             Repetition counts:
// // //           </label>
          
// // //           {repetitions.map((rep, index) => (
// // //             <div key={index} style={{
// // //               display: 'flex',
// // //               gap: '10px',
// // //               marginBottom: '10px',
// // //               alignItems: 'center'
// // //             }}>
// // //               <div style={{ position: 'relative', flex: 1 }}>
// // //                 <input
// // //                   type="number"
// // //                   value={rep}
// // //                   onChange={(e) => updateRepetition(index, e.target.value)}
// // //                   placeholder={`Type ${index + 1} count`}
// // //                   min="1"
// // //                   style={{
// // //                     width: '100%',
// // //                     padding: '8px 30px 8px 12px',
// // //                     border: '2px solid #ddd',
// // //                     borderRadius: '6px',
// // //                     fontSize: '14px',
// // //                     boxSizing: 'border-box'
// // //                   }}
// // //                 />
// // //                 {rep && (
// // //                   <button
// // //                     onClick={() => clearField('repetition', index)}
// // //                     style={{
// // //                       position: 'absolute',
// // //                       right: '8px',
// // //                       top: '50%',
// // //                       transform: 'translateY(-50%)',
// // //                       background: 'none',
// // //                       border: 'none',
// // //                       fontSize: '16px',
// // //                       color: '#999',
// // //                       cursor: 'pointer'
// // //                     }}
// // //                   >
// // //                     ×
// // //                   </button>
// // //                 )}
// // //               </div>
// // //               {repetitions.length > 1 && (
// // //                 <button
// // //                   onClick={() => removeRepetitionField(index)}
// // //                   style={{
// // //                     padding: '8px 12px',
// // //                     backgroundColor: '#dc3545',
// // //                     color: '#fff',
// // //                     border: 'none',
// // //                     borderRadius: '6px',
// // //                     cursor: 'pointer',
// // //                     fontSize: '12px'
// // //                   }}
// // //                 >
// // //                   Remove
// // //                 </button>
// // //               )}
// // //             </div>
// // //           ))}
          
// // //           <button
// // //             onClick={addRepetitionField}
// // //             style={{
// // //               padding: '8px 16px',
// // //               backgroundColor: '#28a745',
// // //               color: '#fff',
// // //               border: 'none',
// // //               borderRadius: '6px',
// // //               cursor: 'pointer',
// // //               fontSize: '14px',
// // //               marginRight: '10px'
// // //             }}
// // //           >
// // //             Add Type
// // //           </button>

// // //           <button
// // //             onClick={resetForm}
// // //             style={{
// // //               padding: '8px 16px',
// // //               backgroundColor: '#6c757d',
// // //               color: '#fff',
// // //               border: 'none',
// // //               borderRadius: '6px',
// // //               cursor: 'pointer',
// // //               fontSize: '14px'
// // //             }}
// // //           >
// // //             Reset
// // //           </button>
// // //         </div>

// // //         {error && (
// // //           <div style={{
// // //             backgroundColor: '#f8d7da',
// // //             color: '#721c24',
// // //             padding: '12px 16px',
// // //             borderRadius: '8px',
// // //             border: '1px solid #f5c6cb',
// // //             marginBottom: '20px'
// // //           }}>
// // //             {error}
// // //           </div>
// // //         )}

// // //         {result && !error && (
// // //           <div style={{
// // //             backgroundColor: '#d4edda',
// // //             padding: '20px',
// // //             borderRadius: '8px',
// // //             border: '1px solid #28a745'
// // //           }}>
// // //             <h3 style={{
// // //               margin: '0 0 15px 0',
// // //               color: '#155724',
// // //               fontSize: '18px'
// // //             }}>Result:</h3>
            
// // //             <div style={{
// // //               display: 'grid',
// // //               gridTemplateColumns: 'auto 1fr',
// // //               gap: '10px 20px',
// // //               alignItems: 'center'
// // //             }}>
// // //               <strong>Formula:</strong>
// // //               <span>{result.formula}</span>
              
// // //               <strong>Result:</strong>
// // //               <span>{typeof result.result === 'number' ? result.result.toLocaleString() : result.result}</span>
// // //             </div>

// // //             {typeof result.result === 'number' && (
// // //               <div style={{
// // //                 marginTop: '15px',
// // //                 padding: '10px',
// // //                 backgroundColor: 'rgba(255,255,255,0.5)',
// // //                 borderRadius: '4px'
// // //               }}>
// // //                 <small style={{ color: '#155724' }}>
// // //                   There are {result.result.toLocaleString()} distinct arrangements.
// // //                 </small>
// // //               </div>
// // //             )}
// // //           </div>
// // //         )}
// // //       </div>

// // //       <div style={{
// // //         flex: '1',
// // //         paddingLeft: '15px',
// // //         borderLeft: '1px solid #e0e0e0'
// // //       }}>
// // //         <h3 style={{
// // //           color: '#495057',
// // //           marginBottom: '20px',
// // //           fontSize: '20px'
// // //         }}>Explanation</h3>

// // //         <div style={{
// // //           backgroundColor: '#f8f9fa',
// // //           padding: '20px',
// // //           borderRadius: '8px',
// // //           marginBottom: '20px',
// // //           borderLeft: '4px solid #28a745'
// // //         }}>
// // //           <div style={{
// // //             margin: '0 0 10px 0',
// // //             color: '#495057',
// // //             fontSize: '16px',
// // //             fontWeight: 'bold'
// // //           }}>
// // //             {processContent(explanations?.formula) || processContent('$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$')}
// // //           </div>
// // //           <p style={{
// // //             margin: 0,
// // //             color: '#6c757d',
// // //             lineHeight: '1.5'
// // //           }}>
// // //             {explanations?.description || `Calculate arrangements of ${processContent('$n$')} objects where some objects are identical. ${processContent('$n_1, n_2, \\ldots, n_k$')} are the counts of each type of identical object.`}
// // //           </p>
// // //         </div>

// // //         <div style={{
// // //           backgroundColor: '#fff3cd',
// // //           padding: '15px',
// // //           borderRadius: '8px',
// // //           border: '1px solid #ffeaa7',
// // //           marginBottom: '20px'
// // //         }}>
// // //           <h4 style={{
// // //             margin: '0 0 10px 0',
// // //             color: '#856404',
// // //             fontSize: '14px'
// // //           }}>Example:</h4>
// // //           <div style={{
// // //             margin: 0,
// // //             color: '#856404',
// // //             fontSize: '14px',
// // //             lineHeight: '1.4'
// // //           }}>
// // //             {explanations?.example || (
// // //               <>
// // //                 Arrange letters in "BOOK":<br/>
// // //                 • Total: 4 letters<br/>
// // //                 • B appears 1 time<br/>
// // //                 • O appears 2 times<br/>
// // //                 • K appears 1 time<br/>
// // //                 • Result: {processContent('$\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$')} arrangements
// // //               </>
// // //             )}
// // //           </div>
// // //         </div>

// // //         <div style={{
// // //           backgroundColor: '#e2e3ff',
// // //           padding: '15px',
// // //           borderRadius: '8px',
// // //           border: '1px solid #6f42c1'
// // //         }}>
// // //           <h4 style={{
// // //             margin: '0 0 10px 0',
// // //             color: '#4c2a85',
// // //             fontSize: '14px'
// // //           }}>Why this formula?</h4>
// // //           <p style={{
// // //             margin: 0,
// // //             color: '#4c2a85',
// // //             fontSize: '14px',
// // //             lineHeight: '1.4'
// // //           }}>
// // //             {explanations?.reasoning || `We start with ${processContent('$n!$')} total arrangements, then divide by the factorial of each repetition count to account for identical objects that don't create new arrangements when swapped.`}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { processContent } from '@/app/utils/contentProcessor'

// // export function PermutationWithRepetition({ explanations }) {
// //   const [totalObjects, setTotalObjects] = useState('')
// //   const [repetitions, setRepetitions] = useState([''])
// //   const [result, setResult] = useState(null)
// //   const [error, setError] = useState('')

// //   const factorial = (num) => {
// //     if (num < 0) return null
// //     if (num === 0 || num === 1) return 1
    
// //     let result = 1
// //     for (let i = 2; i <= num; i++) {
// //       result *= i
// //       if (result > Number.MAX_SAFE_INTEGER) {
// //         return 'Too large'
// //       }
// //     }
// //     return result
// //   }

// //   const addRepetitionField = () => {
// //     setRepetitions([...repetitions, ''])
// //   }

// //   const removeRepetitionField = (index) => {
// //     if (repetitions.length > 1) {
// //       setRepetitions(repetitions.filter((_, i) => i !== index))
// //     }
// //   }

// //   const updateRepetition = (index, value) => {
// //     const newRepetitions = [...repetitions]
// //     newRepetitions[index] = value
// //     setRepetitions(newRepetitions)
// //   }

// //   const clearField = (field, index = null) => {
// //     if (field === 'total') {
// //       setTotalObjects('')
// //     } else if (field === 'repetition' && index !== null) {
// //       updateRepetition(index, '')
// //     }
// //   }

// //   const resetForm = () => {
// //     setTotalObjects('')
// //     setRepetitions([''])
// //     setResult(null)
// //     setError('')
// //   }

// //   const calculate = () => {
// //     setError('')
    
// //     const n = parseInt(totalObjects)
// //     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
// //     if (isNaN(n) || n < 0) {
// //       setError('Please enter a valid total number of objects')
// //       return
// //     }
    
// //     if (reps.length === 0) {
// //       setError('Please enter at least one repetition count')
// //       return
// //     }
    
// //     const sumReps = reps.reduce((sum, r) => sum + r, 0)
// //     if (sumReps !== n) {
// //       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
// //       return
// //     }
    
// //     if (n > 170) {
// //       setError('Total objects too large (maximum is 170)')
// //       return
// //     }

// //     const numerator = factorial(n)
// //     if (numerator === 'Too large') {
// //       setResult({
// //         totalObjects: n,
// //         repetitions: reps,
// //         result: 'Too large',
// //         formula: `${n}! / (${reps.join('! × ')}!)`
// //       })
// //       return
// //     }

// //     let denominator = 1
// //     for (const rep of reps) {
// //       const repFactorial = factorial(rep)
// //       if (repFactorial === 'Too large') {
// //         setResult({
// //           totalObjects: n,
// //           repetitions: reps,
// //           result: 'Too large',
// //           formula: `${n}! / (${reps.join('! × ')}!)`
// //         })
// //         return
// //       }
// //       denominator *= repFactorial
// //     }

// //     const result = numerator / denominator
// //     setResult({
// //       totalObjects: n,
// //       repetitions: reps,
// //       result: result,
// //       formula: `${n}! / (${reps.join('! × ')}!)`
// //     })
// //   }

// //   useEffect(() => {
// //     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
// //       calculate()
// //     } else {
// //       setResult(null)
// //       setError('')
// //     }
// //   }, [totalObjects, repetitions])

// //   return (
// //     <div style={{
// //       display: 'flex',
// //       gap: '30px',
// //       backgroundColor: '#fff',
// //       borderRadius: '12px',
// //       padding: '20px',
// //       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// //       minHeight: '500px'
// //     }}>
// //       <div style={{ flex: '1', paddingRight: '15px' }}>
// //         <h2 style={{
// //           color: '#333',
// //           marginBottom: '30px',
// //           fontSize: '24px'
// //         }}>Permutation with Repetition</h2>

// //         <div style={{ marginBottom: '25px' }}>
// //           <label style={{
// //             display: 'block',
// //             marginBottom: '8px',
// //             fontWeight: '500',
// //             color: '#333'
// //           }}>
// //             Total number of objects (n):
// //           </label>
// //           <div style={{ position: 'relative' }}>
// //             <input
// //               type="number"
// //               value={totalObjects}
// //               onChange={(e) => setTotalObjects(e.target.value)}
// //               placeholder="e.g., 4"
// //               min="0"
// //               style={{
// //                 width: '100%',
// //                 padding: '12px 40px 12px 16px',
// //                 border: '2px solid #ddd',
// //                 borderRadius: '8px',
// //                 fontSize: '16px',
// //                 boxSizing: 'border-box'
// //               }}
// //             />
// //             {totalObjects && (
// //               <button
// //                 onClick={() => clearField('total')}
// //                 style={{
// //                   position: 'absolute',
// //                   right: '10px',
// //                   top: '50%',
// //                   transform: 'translateY(-50%)',
// //                   background: 'none',
// //                   border: 'none',
// //                   fontSize: '18px',
// //                   color: '#999',
// //                   cursor: 'pointer'
// //                 }}
// //               >
// //                 ×
// //               </button>
// //             )}
// //           </div>
// //         </div>

// //         <div style={{ marginBottom: '25px' }}>
// //           <label style={{
// //             display: 'block',
// //             marginBottom: '8px',
// //             fontWeight: '500',
// //             color: '#333'
// //           }}>
// //             Repetition counts:
// //           </label>
          
// //           {repetitions.map((rep, index) => (
// //             <div key={index} style={{
// //               display: 'flex',
// //               gap: '10px',
// //               marginBottom: '10px',
// //               alignItems: 'center'
// //             }}>
// //               <div style={{ position: 'relative', flex: 1 }}>
// //                 <input
// //                   type="number"
// //                   value={rep}
// //                   onChange={(e) => updateRepetition(index, e.target.value)}
// //                   placeholder={`Type ${index + 1} count`}
// //                   min="1"
// //                   style={{
// //                     width: '100%',
// //                     padding: '8px 30px 8px 12px',
// //                     border: '2px solid #ddd',
// //                     borderRadius: '6px',
// //                     fontSize: '14px',
// //                     boxSizing: 'border-box'
// //                   }}
// //                 />
// //                 {rep && (
// //                   <button
// //                     onClick={() => clearField('repetition', index)}
// //                     style={{
// //                       position: 'absolute',
// //                       right: '8px',
// //                       top: '50%',
// //                       transform: 'translateY(-50%)',
// //                       background: 'none',
// //                       border: 'none',
// //                       fontSize: '16px',
// //                       color: '#999',
// //                       cursor: 'pointer'
// //                     }}
// //                   >
// //                     ×
// //                   </button>
// //                 )}
// //               </div>
// //               {repetitions.length > 1 && (
// //                 <button
// //                   onClick={() => removeRepetitionField(index)}
// //                   style={{
// //                     padding: '8px 12px',
// //                     backgroundColor: '#dc3545',
// //                     color: '#fff',
// //                     border: 'none',
// //                     borderRadius: '6px',
// //                     cursor: 'pointer',
// //                     fontSize: '12px'
// //                   }}
// //                 >
// //                   Remove
// //                 </button>
// //               )}
// //             </div>
// //           ))}
          
// //           <button
// //             onClick={addRepetitionField}
// //             style={{
// //               padding: '8px 16px',
// //               backgroundColor: '#28a745',
// //               color: '#fff',
// //               border: 'none',
// //               borderRadius: '6px',
// //               cursor: 'pointer',
// //               fontSize: '14px',
// //               marginRight: '10px'
// //             }}
// //           >
// //             Add Type
// //           </button>

// //           <button
// //             onClick={resetForm}
// //             style={{
// //               padding: '8px 16px',
// //               backgroundColor: '#6c757d',
// //               color: '#fff',
// //               border: 'none',
// //               borderRadius: '6px',
// //               cursor: 'pointer',
// //               fontSize: '14px'
// //             }}
// //           >
// //             Reset
// //           </button>
// //         </div>

// //         {error && (
// //           <div style={{
// //             backgroundColor: '#f8d7da',
// //             color: '#721c24',
// //             padding: '12px 16px',
// //             borderRadius: '8px',
// //             border: '1px solid #f5c6cb',
// //             marginBottom: '20px'
// //           }}>
// //             {error}
// //           </div>
// //         )}

// //         {result && !error && (
// //           <div style={{
// //             backgroundColor: '#d4edda',
// //             padding: '20px',
// //             borderRadius: '8px',
// //             border: '1px solid #28a745'
// //           }}>
// //             <h3 style={{
// //               margin: '0 0 15px 0',
// //               color: '#155724',
// //               fontSize: '18px'
// //             }}>Result:</h3>
            
// //             <div style={{
// //               display: 'grid',
// //               gridTemplateColumns: 'auto 1fr',
// //               gap: '10px 20px',
// //               alignItems: 'center'
// //             }}>
// //               <strong>Formula:</strong>
// //               <span>{processContent(result.formula)}</span>
              
// //               <strong>Result:</strong>
// //               <span>{typeof result.result === 'number' ? result.result.toLocaleString() : result.result}</span>
// //             </div>

// //             {typeof result.result === 'number' && (
// //               <div style={{
// //                 marginTop: '15px',
// //                 padding: '10px',
// //                 backgroundColor: 'rgba(255,255,255,0.5)',
// //                 borderRadius: '4px'
// //               }}>
// //                 <small style={{ color: '#155724' }}>
// //                   There are {result.result.toLocaleString()} distinct arrangements.
// //                 </small>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>

// //       <div style={{
// //         flex: '1',
// //         paddingLeft: '15px',
// //         borderLeft: '1px solid #e0e0e0'
// //       }}>
// //         <h3 style={{
// //           color: '#495057',
// //           marginBottom: '20px',
// //           fontSize: '20px'
// //         }}>Explanation</h3>

// //         <div style={{
// //           backgroundColor: '#f8f9fa',
// //           padding: '20px',
// //           borderRadius: '8px',
// //           marginBottom: '20px',
// //           borderLeft: '4px solid #28a745'
// //         }}>
// //           <div style={{
// //             margin: '0 0 10px 0',
// //             color: '#495057',
// //             fontSize: '16px',
// //             fontWeight: 'bold'
// //           }}>
// //             {explanations?.formula ? processContent(explanations.formula) : processContent('$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$')}
// //           </div>
// //           <p style={{
// //             margin: 0,
// //             color: '#6c757d',
// //             lineHeight: '1.5'
// //           }}>
// //             {explanations?.description ? processContent(explanations.description) : processContent('Calculate arrangements of $n$ objects where some objects are identical. $n_1, n_2, \\ldots, n_k$ are the counts of each type of identical object.')}
// //           </p>
// //         </div>

// //         <div style={{
// //           backgroundColor: '#fff3cd',
// //           padding: '15px',
// //           borderRadius: '8px',
// //           border: '1px solid #ffeaa7',
// //           marginBottom: '20px'
// //         }}>
// //           <h4 style={{
// //             margin: '0 0 10px 0',
// //             color: '#856404',
// //             fontSize: '14px'
// //           }}>Example:</h4>
// //           <div style={{
// //             margin: 0,
// //             color: '#856404',
// //             fontSize: '14px',
// //             lineHeight: '1.4'
// //           }}>
// //             {explanations?.example ? processContent(explanations.example) : (
// //               <>
// //                 Arrange letters in "BOOK":<br/>
// //                 • Total: 4 letters<br/>
// //                 • B appears 1 time<br/>
// //                 • O appears 2 times<br/>
// //                 • K appears 1 time<br/>
// //                 • Result: {processContent('$\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$')} arrangements
// //               </>
// //             )}
// //           </div>
// //         </div>

// //         <div style={{
// //           backgroundColor: '#e2e3ff',
// //           padding: '15px',
// //           borderRadius: '8px',
// //           border: '1px solid #6f42c1'
// //         }}>
// //           <h4 style={{
// //             margin: '0 0 10px 0',
// //             color: '#4c2a85',
// //             fontSize: '14px'
// //           }}>Why this formula?</h4>
// //           <p style={{
// //             margin: 0,
// //             color: '#4c2a85',
// //             fontSize: '14px',
// //             lineHeight: '1.4'
// //           }}>
// //             {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We start with $n!$ total arrangements, then divide by the factorial of each repetition count to account for identical objects that don\'t create new arrangements when swapped.')}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// 'use client'

// import { useState, useEffect } from 'react'
// import { processContent } from '@/app/utils/contentProcessor'

// export function PermutationWithRepetition({ explanations }) {
//   const [totalObjects, setTotalObjects] = useState('')
//   const [repetitions, setRepetitions] = useState([''])
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState('')

//   const factorial = (num) => {
//     if (num < 0) return null
//     if (num === 0 || num === 1) return 1
    
//     let result = 1
//     for (let i = 2; i <= num; i++) {
//       result *= i
//       if (result > Number.MAX_SAFE_INTEGER) {
//         return 'Too large'
//       }
//     }
//     return result
//   }

//   const addRepetitionField = () => {
//     setRepetitions([...repetitions, ''])
//   }

//   const removeRepetitionField = (index) => {
//     if (repetitions.length > 1) {
//       setRepetitions(repetitions.filter((_, i) => i !== index))
//     }
//   }

//   const updateRepetition = (index, value) => {
//     const newRepetitions = [...repetitions]
//     newRepetitions[index] = value
//     setRepetitions(newRepetitions)
//   }

//   const clearField = (field, index = null) => {
//     if (field === 'total') {
//       setTotalObjects('')
//     } else if (field === 'repetition' && index !== null) {
//       updateRepetition(index, '')
//     }
//   }

//   const resetForm = () => {
//     setTotalObjects('')
//     setRepetitions([''])
//     setResult(null)
//     setError('')
//   }

//   const calculate = () => {
//     setError('')
    
//     const n = parseInt(totalObjects)
//     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
//     if (isNaN(n) || n < 0) {
//       setError('Please enter a valid total number of objects')
//       return
//     }
    
//     if (reps.length === 0) {
//       setError('Please enter at least one repetition count')
//       return
//     }
    
//     const sumReps = reps.reduce((sum, r) => sum + r, 0)
//     if (sumReps !== n) {
//       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
//       return
//     }
    
//     if (n > 170) {
//       setError('Total objects too large (maximum is 170)')
//       return
//     }

//     const numerator = factorial(n)
//     if (numerator === 'Too large') {
//       setResult({
//         totalObjects: n,
//         repetitions: reps,
//         result: 'Too large',
//         formula: `${n}! / (${reps.join('! × ')}!)`
//       })
//       return
//     }

//     let denominator = 1
//     for (const rep of reps) {
//       const repFactorial = factorial(rep)
//       if (repFactorial === 'Too large') {
//         setResult({
//           totalObjects: n,
//           repetitions: reps,
//           result: 'Too large',
//           formula: `${n}! / (${reps.join('! × ')}!)`
//         })
//         return
//       }
//       denominator *= repFactorial
//     }

//     const result = numerator / denominator
//     setResult({
//       totalObjects: n,
//       repetitions: reps,
//       result: result,
//       formula: `${n}! / (${reps.join('! × ')}!)`
//     })
//   }

//   useEffect(() => {
//     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
//       calculate()
//     } else {
//       setResult(null)
//       setError('')
//     }
//   }, [totalObjects, repetitions])

//   return (
//     <div style={{
//       display: 'flex',
//       gap: '30px',
//       backgroundColor: '#fff',
//       borderRadius: '12px',
//       padding: '20px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//       minHeight: '500px'
//     }}>
//       <div style={{ flex: '1', paddingRight: '15px' }}>
//         <h2 style={{
//           color: '#333',
//           marginBottom: '30px',
//           fontSize: '24px'
//         }}>Permutation with Repetition</h2>

//         <div style={{ marginBottom: '25px' }}>
//           <label style={{
//             display: 'block',
//             marginBottom: '8px',
//             fontWeight: '500',
//             color: '#333'
//           }}>
//             Total number of objects (n):
//           </label>
//           <div style={{ position: 'relative' }}>
//             <input
//               type="number"
//               value={totalObjects}
//               onChange={(e) => setTotalObjects(e.target.value)}
//               placeholder="e.g., 4"
//               min="0"
//               style={{
//                 width: '100%',
//                 padding: '12px 40px 12px 16px',
//                 border: '2px solid #ddd',
//                 borderRadius: '8px',
//                 fontSize: '16px',
//                 boxSizing: 'border-box'
//               }}
//             />
//             {totalObjects && (
//               <button
//                 onClick={() => clearField('total')}
//                 style={{
//                   position: 'absolute',
//                   right: '10px',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   background: 'none',
//                   border: 'none',
//                   fontSize: '18px',
//                   color: '#999',
//                   cursor: 'pointer'
//                 }}
//               >
//                 ×
//               </button>
//             )}
//           </div>
//         </div>

//         <div style={{ marginBottom: '25px' }}>
//           <label style={{
//             display: 'block',
//             marginBottom: '8px',
//             fontWeight: '500',
//             color: '#333'
//           }}>
//             Repetition counts:
//           </label>
          
//           {repetitions.map((rep, index) => (
//             <div key={index} style={{
//               display: 'flex',
//               gap: '10px',
//               marginBottom: '10px',
//               alignItems: 'center'
//             }}>
//               <div style={{ position: 'relative', flex: 1 }}>
//                 <input
//                   type="number"
//                   value={rep}
//                   onChange={(e) => updateRepetition(index, e.target.value)}
//                   placeholder={`Type ${index + 1} count`}
//                   min="1"
//                   style={{
//                     width: '100%',
//                     padding: '8px 30px 8px 12px',
//                     border: '2px solid #ddd',
//                     borderRadius: '6px',
//                     fontSize: '14px',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//                 {rep && (
//                   <button
//                     onClick={() => clearField('repetition', index)}
//                     style={{
//                       position: 'absolute',
//                       right: '8px',
//                       top: '50%',
//                       transform: 'translateY(-50%)',
//                       background: 'none',
//                       border: 'none',
//                       fontSize: '16px',
//                       color: '#999',
//                       cursor: 'pointer'
//                     }}
//                   >
//                     ×
//                   </button>
//                 )}
//               </div>
//               {repetitions.length > 1 && (
//                 <button
//                   onClick={() => removeRepetitionField(index)}
//                   style={{
//                     padding: '8px 12px',
//                     backgroundColor: '#dc3545',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '12px'
//                   }}
//                 >
//                   Remove
//                 </button>
//               )}
//             </div>
//           ))}
          
//           <button
//             onClick={addRepetitionField}
//             style={{
//               padding: '8px 16px',
//               backgroundColor: '#28a745',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '14px',
//               marginRight: '10px'
//             }}
//           >
//             Add Type
//           </button>

//           <button
//             onClick={resetForm}
//             style={{
//               padding: '8px 16px',
//               backgroundColor: '#6c757d',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Reset
//           </button>
//         </div>

//         {error && (
//           <div style={{
//             backgroundColor: '#f8d7da',
//             color: '#721c24',
//             padding: '12px 16px',
//             borderRadius: '8px',
//             border: '1px solid #f5c6cb',
//             marginBottom: '20px'
//           }}>
//             {error}
//           </div>
//         )}

//         {result && !error && (
//           <div style={{
//             backgroundColor: '#d4edda',
//             padding: '20px',
//             borderRadius: '8px',
//             border: '1px solid #28a745'
//           }}>
//             <h3 style={{
//               margin: '0 0 15px 0',
//               color: '#155724',
//               fontSize: '18px'
//             }}>Result:</h3>
            
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'auto 1fr',
//               gap: '10px 20px',
//               alignItems: 'center'
//             }}>
//               <strong>Formula:</strong>
//               <span>{processContent(processContent(result.formula))}</span>
              
//               <strong>Result:</strong>
//               <span>{typeof result.result === 'number' ? result.result.toLocaleString() : result.result}</span>
//             </div>

//             {typeof result.result === 'number' && (
//               <div style={{
//                 marginTop: '15px',
//                 padding: '10px',
//                 backgroundColor: 'rgba(255,255,255,0.5)',
//                 borderRadius: '4px'
//               }}>
//                 <small style={{ color: '#155724' }}>
//                   There are {result.result.toLocaleString()} distinct arrangements.
//                 </small>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <div style={{
//         flex: '1',
//         paddingLeft: '15px',
//         borderLeft: '1px solid #e0e0e0'
//       }}>
//         <h3 style={{
//           color: '#495057',
//           marginBottom: '20px',
//           fontSize: '20px'
//         }}>Explanation</h3>

//         <div style={{
//           backgroundColor: '#f8f9fa',
//           padding: '20px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           borderLeft: '4px solid #28a745'
//         }}>
//           <div style={{
//             margin: '0 0 10px 0',
//             color: '#495057',
//             fontSize: '16px',
//             fontWeight: 'bold'
//           }}>
//             {explanations?.formula ? processContent(explanations.formula) : processContent('$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$')}
//           </div>
//           <p style={{
//             margin: 0,
//             color: '#6c757d',
//             lineHeight: '1.5'
//           }}>
//             {explanations?.description ? processContent(explanations.description) : processContent('Calculate arrangements of $n$ objects where some objects are identical. $n_1, n_2, \\ldots, n_k$ are the counts of each type of identical object.')}
//           </p>
//         </div>

//         <div style={{
//           backgroundColor: '#fff3cd',
//           padding: '15px',
//           borderRadius: '8px',
//           border: '1px solid #ffeaa7',
//           marginBottom: '20px'
//         }}>
//           <h4 style={{
//             margin: '0 0 10px 0',
//             color: '#856404',
//             fontSize: '14px'
//           }}>Example:</h4>
//           <div style={{
//             margin: 0,
//             color: '#856404',
//             fontSize: '14px',
//             lineHeight: '1.4'
//           }}>
//             {explanations?.example ? processContent(explanations.example) : (
//               <>
//                 Arrange letters in "BOOK":<br/>
//                 • Total: 4 letters<br/>
//                 • B appears 1 time<br/>
//                 • O appears 2 times<br/>
//                 • K appears 1 time<br/>
//                 • Result: {processContent('$\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$')} arrangements
//               </>
//             )}
//           </div>
//         </div>

//         <div style={{
//           backgroundColor: '#e2e3ff',
//           padding: '15px',
//           borderRadius: '8px',
//           border: '1px solid #6f42c1'
//         }}>
//           <h4 style={{
//             margin: '0 0 10px 0',
//             color: '#4c2a85',
//             fontSize: '14px'
//           }}>Why this formula?</h4>
//           <p style={{
//             margin: 0,
//             color: '#4c2a85',
//             fontSize: '14px',
//             lineHeight: '1.4'
//           }}>
//             {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We start with $n!$ total arrangements, then divide by the factorial of each repetition count to account for identical objects that don\'t create new arrangements when swapped.')}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


// 'use client'

// import { useState, useEffect } from 'react'
// import { processContent } from '@/app/utils/contentProcessor'

// export function PermutationWithRepetition({ explanations }) {
//   const [totalObjects, setTotalObjects] = useState('')
//   const [repetitions, setRepetitions] = useState([''])
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState('')

//   const factorial = (num) => {
//     if (num < 0) return null
//     if (num === 0 || num === 1) return 1
    
//     let result = 1
//     for (let i = 2; i <= num; i++) {
//       result *= i
//       if (result > Number.MAX_SAFE_INTEGER) {
//         return 'Too large'
//       }
//     }
//     return result
//   }

//   const addRepetitionField = () => {
//     setRepetitions([...repetitions, ''])
//   }

//   const removeRepetitionField = (index) => {
//     if (repetitions.length > 1) {
//       setRepetitions(repetitions.filter((_, i) => i !== index))
//     }
//   }

//   const updateRepetition = (index, value) => {
//     const newRepetitions = [...repetitions]
//     newRepetitions[index] = value
//     setRepetitions(newRepetitions)
//   }

//   const clearField = (field, index = null) => {
//     if (field === 'total') {
//       setTotalObjects('')
//     } else if (field === 'repetition' && index !== null) {
//       updateRepetition(index, '')
//     }
//   }

//   const resetForm = () => {
//     setTotalObjects('')
//     setRepetitions([''])
//     setResult(null)
//     setError('')
//   }

//   const calculate = () => {
//     setError('')
    
//     const n = parseInt(totalObjects)
//     const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
//     if (isNaN(n) || n < 0) {
//       setError('Please enter a valid total number of objects')
//       return
//     }
    
//     if (reps.length === 0) {
//       setError('Please enter at least one repetition count')
//       return
//     }
    
//     const sumReps = reps.reduce((sum, r) => sum + r, 0)
//     if (sumReps !== n) {
//       setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
//       return
//     }
    
//     if (n > 170) {
//       setError('Total objects too large (maximum is 170)')
//       return
//     }

//     const numerator = factorial(n)
//     if (numerator === 'Too large') {
//       setResult({
//         totalObjects: n,
//         repetitions: reps,
//         result: 'Too large',
//         formula: `${n}! / (${reps.join('! × ')}!)`
//       })
//       return
//     }

//     let denominator = 1
//     for (const rep of reps) {
//       const repFactorial = factorial(rep)
//       if (repFactorial === 'Too large') {
//         setResult({
//           totalObjects: n,
//           repetitions: reps,
//           result: 'Too large',
//           formula: `${n}! / (${reps.join('! × ')}!)`
//         })
//         return
//       }
//       denominator *= repFactorial
//     }

//     const result = numerator / denominator
//     setResult({
//       totalObjects: n,
//       repetitions: reps,
//       result: result,
//       formula: `${n}! / (${reps.join('! × ')}!)`
//     })
//   }

//   useEffect(() => {
//     if (totalObjects !== '' && repetitions.some(r => r !== '')) {
//       calculate()
//     } else {
//       setResult(null)
//       setError('')
//     }
//   }, [totalObjects, repetitions])

//   return (
//     <div style={{
//       display: 'flex',
//       gap: '30px',
//       backgroundColor: '#fff',
//       borderRadius: '12px',
//       padding: '20px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//       minHeight: '500px'
//     }}>
//       <div style={{ flex: '1', paddingRight: '15px' }}>
//         <h2 style={{
//           color: '#333',
//           marginBottom: '30px',
//           fontSize: '24px'
//         }}>Permutation with Repetition</h2>

//         <div style={{ marginBottom: '25px' }}>
//           <label style={{
//             display: 'block',
//             marginBottom: '8px',
//             fontWeight: '500',
//             color: '#333'
//           }}>
//             Total number of objects (n):
//           </label>
//           <div style={{ position: 'relative' }}>
//             <input
//               type="number"
//               value={totalObjects}
//               onChange={(e) => setTotalObjects(e.target.value)}
//               placeholder="e.g., 4"
//               min="0"
//               style={{
//                 width: '100%',
//                 padding: '12px 40px 12px 16px',
//                 border: '2px solid #ddd',
//                 borderRadius: '8px',
//                 fontSize: '16px',
//                 boxSizing: 'border-box'
//               }}
//             />
//             {totalObjects && (
//               <button
//                 onClick={() => clearField('total')}
//                 style={{
//                   position: 'absolute',
//                   right: '10px',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   background: 'none',
//                   border: 'none',
//                   fontSize: '18px',
//                   color: '#999',
//                   cursor: 'pointer'
//                 }}
//               >
//                 ×
//               </button>
//             )}
//           </div>
//         </div>

//         <div style={{ marginBottom: '25px' }}>
//           <label style={{
//             display: 'block',
//             marginBottom: '8px',
//             fontWeight: '500',
//             color: '#333'
//           }}>
//             Repetition counts:
//           </label>
          
//           {repetitions.map((rep, index) => (
//             <div key={index} style={{
//               display: 'flex',
//               gap: '10px',
//               marginBottom: '10px',
//               alignItems: 'center'
//             }}>
//               <div style={{ position: 'relative', flex: 1 }}>
//                 <input
//                   type="number"
//                   value={rep}
//                   onChange={(e) => updateRepetition(index, e.target.value)}
//                   placeholder={`Type ${index + 1} count`}
//                   min="1"
//                   style={{
//                     width: '100%',
//                     padding: '8px 30px 8px 12px',
//                     border: '2px solid #ddd',
//                     borderRadius: '6px',
//                     fontSize: '14px',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//                 {rep && (
//                   <button
//                     onClick={() => clearField('repetition', index)}
//                     style={{
//                       position: 'absolute',
//                       right: '8px',
//                       top: '50%',
//                       transform: 'translateY(-50%)',
//                       background: 'none',
//                       border: 'none',
//                       fontSize: '16px',
//                       color: '#999',
//                       cursor: 'pointer'
//                     }}
//                   >
//                     ×
//                   </button>
//                 )}
//               </div>
//               {repetitions.length > 1 && (
//                 <button
//                   onClick={() => removeRepetitionField(index)}
//                   style={{
//                     padding: '8px 12px',
//                     backgroundColor: '#dc3545',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '12px'
//                   }}
//                 >
//                   Remove
//                 </button>
//               )}
//             </div>
//           ))}
          
//           <button
//             onClick={addRepetitionField}
//             style={{
//               padding: '8px 16px',
//               backgroundColor: '#28a745',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '14px',
//               marginRight: '10px'
//             }}
//           >
//             Add Type
//           </button>

//           <button
//             onClick={resetForm}
//             style={{
//               padding: '8px 16px',
//               backgroundColor: '#6c757d',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '14px'
//             }}
//           >
//             Reset
//           </button>
//         </div>

//         {error && (
//           <div style={{
//             backgroundColor: '#f8d7da',
//             color: '#721c24',
//             padding: '12px 16px',
//             borderRadius: '8px',
//             border: '1px solid #f5c6cb',
//             marginBottom: '20px'
//           }}>
//             {error}
//           </div>
//         )}

//         {result && !error && (
//           <div style={{
//             backgroundColor: '#d4edda',
//             padding: '20px',
//             borderRadius: '8px',
//             border: '1px solid #28a745'
//           }}>
//             <h3 style={{
//               margin: '0 0 15px 0',
//               color: '#155724',
//               fontSize: '18px'
//             }}>Result:</h3>
            
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'auto 1fr',
//               gap: '10px 20px',
//               alignItems: 'center'
//             }}>
//               <strong>Formula:</strong>
//               <span>{processContent(result.formula)}</span>
              
//               <strong>Result:</strong>
//               <span>{typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}</span>
//             </div>

//             {typeof result.result === 'number' && (
//               <div style={{
//                 marginTop: '15px',
//                 padding: '10px',
//                 backgroundColor: 'rgba(255,255,255,0.5)',
//                 borderRadius: '4px'
//               }}>
//                 <small style={{ color: '#155724' }}>
//                   There are {result.result.toLocaleString()} distinct arrangements.
//                 </small>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <div style={{
//         flex: '1',
//         paddingLeft: '15px',
//         borderLeft: '1px solid #e0e0e0'
//       }}>
//         <h3 style={{
//           color: '#495057',
//           marginBottom: '20px',
//           fontSize: '20px'
//         }}>Explanation</h3>

//         <div style={{
//           backgroundColor: '#f8f9fa',
//           padding: '20px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           borderLeft: '4px solid #28a745'
//         }}>
//           <div style={{
//             margin: '0 0 10px 0',
//             color: '#495057',
//             fontSize: '16px',
//             fontWeight: 'bold'
//           }}>
//             {explanations?.formula ? processContent(explanations.formula) : processContent('$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$')}
//           </div>
//           <p style={{
//             margin: 0,
//             color: '#6c757d',
//             lineHeight: '1.5'
//           }}>
//             {explanations?.description ? processContent(explanations.description) : processContent('Calculate arrangements of $n$ objects where some objects are identical. $n_1, n_2, \\ldots, n_k$ are the counts of each type of identical object.')}
//           </p>
//         </div>

//         <div style={{
//           backgroundColor: '#fff3cd',
//           padding: '15px',
//           borderRadius: '8px',
//           border: '1px solid #ffeaa7',
//           marginBottom: '20px'
//         }}>
//           <h4 style={{
//             margin: '0 0 10px 0',
//             color: '#856404',
//             fontSize: '14px'
//           }}>Example:</h4>
//           <div style={{
//             margin: 0,
//             color: '#856404',
//             fontSize: '14px',
//             lineHeight: '1.4'
//           }}>
//             {explanations?.example ? processContent(explanations.example) : (
//               <>
//                 Arrange letters in "BOOK":<br/>
//                 • Total: 4 letters<br/>
//                 • B appears 1 time<br/>
//                 • O appears 2 times<br/>
//                 • K appears 1 time<br/>
//                 • Result: {processContent('$\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$')} arrangements
//               </>
//             )}
//           </div>
//         </div>

//         <div style={{
//           backgroundColor: '#e2e3ff',
//           padding: '15px',
//           borderRadius: '8px',
//           border: '1px solid #6f42c1'
//         }}>
//           <h4 style={{
//             margin: '0 0 10px 0',
//             color: '#4c2a85',
//             fontSize: '14px'
//           }}>Why this formula?</h4>
//           <p style={{
//             margin: 0,
//             color: '#4c2a85',
//             fontSize: '14px',
//             lineHeight: '1.4'
//           }}>
//             {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We start with $n!$ total arrangements, then divide by the factorial of each repetition count to account for identical objects that don\'t create new arrangements when swapped.')}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { processContent } from '@/app/utils/contentProcessor'

export function PermutationWithRepetition({ explanations }) {
  const [totalObjects, setTotalObjects] = useState('')
  const [repetitions, setRepetitions] = useState([''])
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const factorial = (num) => {
    if (num < 0) return null
    if (num === 0 || num === 1) return 1
    
    let result = 1
    for (let i = 2; i <= num; i++) {
      result *= i
      if (result > Number.MAX_SAFE_INTEGER) {
        return 'Too large'
      }
    }
    return result
  }

  const addRepetitionField = () => {
    setRepetitions([...repetitions, ''])
  }

  const removeRepetitionField = (index) => {
    if (repetitions.length > 1) {
      setRepetitions(repetitions.filter((_, i) => i !== index))
    }
  }

  const updateRepetition = (index, value) => {
    const newRepetitions = [...repetitions]
    newRepetitions[index] = value
    setRepetitions(newRepetitions)
  }

  const clearField = (field, index = null) => {
    if (field === 'total') {
      setTotalObjects('')
    } else if (field === 'repetition' && index !== null) {
      updateRepetition(index, '')
    }
  }

  const resetForm = () => {
    setTotalObjects('')
    setRepetitions([''])
    setResult(null)
    setError('')
  }

  const calculate = () => {
    setError('')
    
    const n = parseInt(totalObjects)
    const reps = repetitions.map(r => parseInt(r)).filter(r => !isNaN(r) && r > 0)
    
    if (isNaN(n) || n < 0) {
      setError('Please enter a valid total number of objects')
      return
    }
    
    if (reps.length === 0) {
      setError('Please enter at least one repetition count')
      return
    }
    
    const sumReps = reps.reduce((sum, r) => sum + r, 0)
    if (sumReps !== n) {
      setError(`Repetition counts must sum to total objects (${sumReps} ≠ ${n})`)
      return
    }
    
    if (n > 170) {
      setError('Total objects too large (maximum is 170)')
      return
    }

    const numerator = factorial(n)
    if (numerator === 'Too large') {
      setResult({
        totalObjects: n,
        repetitions: reps,
        result: 'Too large',
        formula: `${n}! / (${reps.join('! × ')}!)`
      })
      return
    }

    let denominator = 1
    for (const rep of reps) {
      const repFactorial = factorial(rep)
      if (repFactorial === 'Too large') {
        setResult({
          totalObjects: n,
          repetitions: reps,
          result: 'Too large',
          formula: `${n}! / (${reps.join('! × ')}!)`
        })
        return
      }
      denominator *= repFactorial
    }

    const result = numerator / denominator
    setResult({
      totalObjects: n,
      repetitions: reps,
      result: result,
      formula: `${n}! / (${reps.join('! × ')}!)`
    })
  }

  useEffect(() => {
    if (totalObjects !== '' && repetitions.some(r => r !== '')) {
      calculate()
    } else {
      setResult(null)
      setError('')
    }
  }, [totalObjects, repetitions])

  return (
    <>
      <style>
        {`
          .markdown-link {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
          }
          .markdown-link:hover {
            color: #0056b3;
            text-decoration: underline;
          }
        `}
      </style>
      <div style={{
        display: 'flex',
        gap: '30px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minHeight: '500px'
      }}>
        <div style={{ flex: '1', paddingRight: '15px' }}>
          <h2 style={{
            color: '#333',
            marginBottom: '30px',
            fontSize: '24px'
          }}>Permutation with Repetition</h2>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Total number of objects (n):
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                value={totalObjects}
                onChange={(e) => setTotalObjects(e.target.value)}
                placeholder="e.g., 4"
                min="0"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
              {totalObjects && (
                <button
                  onClick={() => clearField('total')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    fontSize: '18px',
                    color: '#999',
                    cursor: 'pointer'
                  }}
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Repetition counts:
            </label>
            
            {repetitions.map((rep, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '10px',
                alignItems: 'center'
              }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    type="number"
                    value={rep}
                    onChange={(e) => updateRepetition(index, e.target.value)}
                    placeholder={`Type ${index + 1} count`}
                    min="1"
                    style={{
                      width: '100%',
                      padding: '8px 30px 8px 12px',
                      border: '2px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                  {rep && (
                    <button
                      onClick={() => clearField('repetition', index)}
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        fontSize: '16px',
                        color: '#999',
                        cursor: 'pointer'
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>
                {repetitions.length > 1 && (
                  <button
                    onClick={() => removeRepetitionField(index)}
                    style={{
                      padding: '8px 12px',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            
            <button
              onClick={addRepetitionField}
              style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                marginRight: '10px'
              }}
            >
              Add Type
            </button>

            <button
              onClick={resetForm}
              style={{
                padding: '8px 16px',
                backgroundColor: '#6c757d',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Reset
            </button>
          </div>

          {error && (
            <div style={{
              backgroundColor: '#f8d7da',
              color: '#721c24',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #f5c6cb',
              marginBottom: '20px'
            }}>
              {error}
            </div>
          )}

          {result && !error && (
            <div style={{
              backgroundColor: '#d4edda',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #28a745'
            }}>
              <h3 style={{
                margin: '0 0 15px 0',
                color: '#155724',
                fontSize: '18px'
              }}>Result:</h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '10px 20px',
                alignItems: 'center'
              }}>
                <strong>Formula:</strong>
                <span>{processContent(result.formula)}</span>
                
                <strong>Result:</strong>
                <span>{typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}</span>
              </div>

              {typeof result.result === 'number' && (
                <div style={{
                  marginTop: '15px',
                  padding: '10px',
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  borderRadius: '4px'
                }}>
                  <small style={{ color: '#155724' }}>
                    There are {result.result.toLocaleString()} distinct arrangements.
                  </small>
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{
          flex: '1',
          paddingLeft: '15px',
          borderLeft: '1px solid #e0e0e0'
        }}>
          <h3 style={{
            color: '#495057',
            marginBottom: '20px',
            fontSize: '20px'
          }}>Explanation</h3>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
            borderLeft: '4px solid #28a745'
          }}>
            <div style={{
              margin: '0 0 10px 0',
              color: '#495057',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              {explanations?.formula ? processContent(explanations.formula) : processContent('$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$')}
            </div>
            <p style={{
              margin: 0,
              color: '#6c757d',
              lineHeight: '1.5'
            }}>
              {explanations?.description ? processContent(explanations.description) : processContent('Calculate arrangements of $n$ objects where some objects are identical. $n_1, n_2, \\ldots, n_k$ are the counts of each type of identical object.')}
            </p>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #ffeaa7',
            marginBottom: '20px'
          }}>
            <h4 style={{
              margin: '0 0 10px 0',
              color: '#856404',
              fontSize: '14px'
            }}>Example:</h4>
            <div style={{
              margin: 0,
              color: '#856404',
              fontSize: '14px',
              lineHeight: '1.4'
            }}>
              {explanations?.example ? processContent(explanations.example) : (
                <>
                  Arrange letters in "BOOK":<br/>
                  • Total: 4 letters<br/>
                  • B appears 1 time<br/>
                  • O appears 2 times<br/>
                  • K appears 1 time<br/>
                  • Result: {processContent('$\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$')} arrangements
                </>
              )}
            </div>
          </div>

          <div style={{
            backgroundColor: '#e2e3ff',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #6f42c1'
          }}>
            <h4 style={{
              margin: '0 0 10px 0',
              color: '#4c2a85',
              fontSize: '14px'
            }}>Why this formula?</h4>
            <p style={{
              margin: 0,
              color: '#4c2a85',
              fontSize: '14px',
              lineHeight: '1.4'
            }}>
              {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We start with $n!$ total arrangements, then divide by the factorial of each repetition count to account for identical objects that don\'t create new arrangements when swapped.')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}