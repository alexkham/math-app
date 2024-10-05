// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // // // const Ball = ({ item, color }) => (
// // // // // // //   <div style={{
// // // // // // //     width: '32px', height: '32px', borderRadius: '50%', backgroundColor: color,
// // // // // // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // // // //     color: 'white', fontWeight: 'bold', fontSize: '14px', margin: '0 4px'
// // // // // // //   }}>
// // // // // // //     {item}
// // // // // // //   </div>
// // // // // // // );

// // // // // // // const PermutationRow = ({ label, permutation, colors }) => (
// // // // // // //   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
// // // // // // //     <span style={{ marginRight: '16px', fontSize: '12px', fontWeight: '600', width: '80px' }}>{label}</span>
// // // // // // //     <div style={{ display: 'flex' }}>
// // // // // // //       {permutation.map((item, index) => (
// // // // // // //         <Ball key={index} item={item} color={colors[item]} />
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   </div>
// // // // // // // );

// // // // // // // const CombinatoricsVisualization = () => {
// // // // // // //   const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
// // // // // // //   const items = ['A', 'B', 'C', 'D'];
// // // // // // //   const [permutationStacks, setPermutationStacks] = useState({});
// // // // // // //   const [currentPermutation, setCurrentPermutation] = useState([]);

// // // // // // //   const generatePermutations = (arr) => {
// // // // // // //     if (arr.length <= 1) return [arr];
// // // // // // //     return arr.flatMap((item, i) => 
// // // // // // //       generatePermutations([...arr.slice(0, i), ...arr.slice(i + 1)])
// // // // // // //         .map(perm => [item, ...perm])
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const allPermutations = generatePermutations(items);

// // // // // // //   useEffect(() => {
// // // // // // //     let index = 0;
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       if (index < allPermutations.length) {
// // // // // // //         const newPerm = allPermutations[index];
// // // // // // //         setCurrentPermutation(newPerm);
// // // // // // //         setPermutationStacks(prev => {
// // // // // // //           const firstItem = newPerm[0];
// // // // // // //           return {
// // // // // // //             ...prev,
// // // // // // //             [firstItem]: [...(prev[firstItem] || []), newPerm]
// // // // // // //           };
// // // // // // //         });
// // // // // // //         index++;
// // // // // // //       } else {
// // // // // // //         clearInterval(interval);
// // // // // // //       }
// // // // // // //     }, 1000);
// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '16px' }}>
// // // // // // //       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Combinatorics Visualization</h1>
// // // // // // //       <PermutationRow label="Original Set" permutation={items} colors={colors} />
// // // // // // //       <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
// // // // // // //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
// // // // // // //         {items.map((item) => (
// // // // // // //           <div key={item} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '4px' }}>
// // // // // // //             <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: colors[item] }}>
// // // // // // //               Stack {item}
// // // // // // //             </h3>
// // // // // // //             <AnimatePresence>
// // // // // // //               {permutationStacks[item]?.map((perm, index) => (
// // // // // // //                 <motion.div
// // // // // // //                   key={index}
// // // // // // //                   initial={{ opacity: 0, y: 20 }}
// // // // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // // // //                   exit={{ opacity: 0, y: -20 }}
// // // // // // //                   transition={{ duration: 0.5 }}
// // // // // // //                 >
// // // // // // //                   <PermutationRow 
// // // // // // //                     label={`Perm ${index + 1}`} 
// // // // // // //                     permutation={perm}
// // // // // // //                     colors={colors}
// // // // // // //                   />
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </AnimatePresence>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CombinatoricsVisualization;
// // // // // // import React, { useState, useEffect } from 'react';

// // // // // // const Ball = ({ item, color }) => (
// // // // // //   <div style={{
// // // // // //     width: '32px', height: '32px', borderRadius: '50%', backgroundColor: color,
// // // // // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // // //     color: 'white', fontWeight: 'bold', fontSize: '14px', margin: '0 4px'
// // // // // //   }}>
// // // // // //     {item}
// // // // // //   </div>
// // // // // // );

// // // // // // const PermutationRow = ({ permutation, colors }) => (
// // // // // //   <div style={{ display: 'flex', marginBottom: '8px' }}>
// // // // // //     {permutation.map((item, index) => (
// // // // // //       <Ball key={index} item={item} color={colors[item]} />
// // // // // //     ))}
// // // // // //   </div>
// // // // // // );

// // // // // // const CombinatoricsVisualization = () => {
// // // // // //   const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
// // // // // //   const items = ['A', 'B', 'C', 'D'];
// // // // // //   const [permutations, setPermutations] = useState([]);
// // // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // // //   const [isPlaying, setIsPlaying] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const generatePermutations = (arr) => {
// // // // // //       if (arr.length <= 1) return [arr];
// // // // // //       return arr.flatMap((item, i) => 
// // // // // //         generatePermutations([...arr.slice(0, i), ...arr.slice(i + 1)])
// // // // // //           .map(perm => [item, ...perm])
// // // // // //       );
// // // // // //     };
// // // // // //     setPermutations(generatePermutations(items));
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     let interval;
// // // // // //     if (isPlaying) {
// // // // // //       interval = setInterval(() => {
// // // // // //         setCurrentIndex((prevIndex) => 
// // // // // //           prevIndex < permutations.length - 1 ? prevIndex + 1 : prevIndex
// // // // // //         );
// // // // // //       }, 1000);
// // // // // //     }
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [isPlaying, permutations.length]);

// // // // // //   const handlePlay = () => setIsPlaying(true);
// // // // // //   const handlePause = () => setIsPlaying(false);
// // // // // //   const handleForward = () => setCurrentIndex(i => Math.min(i + 1, permutations.length - 1));
// // // // // //   const handleBack = () => setCurrentIndex(i => Math.max(i - 1, 0));
// // // // // //   const handleReset = () => {
// // // // // //     setCurrentIndex(0);
// // // // // //     setIsPlaying(false);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '16px' }}>
// // // // // //       <h1>Combinatorics Visualization</h1>
// // // // // //       <PermutationRow permutation={items} colors={colors} />
// // // // // //       <div style={{ marginTop: '16px', marginBottom: '16px' }}>
// // // // // //         <button onClick={handlePlay} disabled={isPlaying}>Play</button>
// // // // // //         <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
// // // // // //         <button onClick={handleForward} disabled={currentIndex === permutations.length - 1}>Forward</button>
// // // // // //         <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
// // // // // //         <button onClick={handleReset}>Reset</button>
// // // // // //       </div>
// // // // // //       <div>
// // // // // //         {permutations.slice(0, currentIndex + 1).map((perm, index) => (
// // // // // //           <PermutationRow key={index} permutation={perm} colors={colors} />
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CombinatoricsVisualization;
// // // // // import React, { useState, useEffect, useMemo } from 'react';
// // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // const Ball = ({ item, color }) => (
// // // // //   <div style={{
// // // // //     width: '32px', height: '32px', borderRadius: '50%', backgroundColor: color,
// // // // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // //     color: 'white', fontWeight: 'bold', fontSize: '14px', margin: '0 4px'
// // // // //   }}>
// // // // //     {item}
// // // // //   </div>
// // // // // );

// // // // // const PermutationRow = ({ label, permutation, colors }) => (
// // // // //   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
// // // // //     <span style={{ marginRight: '16px', fontSize: '12px', fontWeight: '600', width: '80px' }}>{label}</span>
// // // // //     <div style={{ display: 'flex' }}>
// // // // //       {permutation.map((item, index) => (
// // // // //         <Ball key={index} item={item} color={colors[item]} />
// // // // //       ))}
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // const CombinatoricsVisualization = () => {
// // // // //   const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
// // // // //   const items = ['A', 'B', 'C', 'D'];
// // // // //   const [permutationStacks, setPermutationStacks] = useState({});
// // // // //   const [currentPermutation, setCurrentPermutation] = useState([]);
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // //   const [isPlaying, setIsPlaying] = useState(false);

// // // // //   const generatePermutations = (arr) => {
// // // // //     if (arr.length <= 1) return [arr];
// // // // //     return arr.flatMap((item, i) => 
// // // // //       generatePermutations([...arr.slice(0, i), ...arr.slice(i + 1)])
// // // // //         .map(perm => [item, ...perm])
// // // // //     );
// // // // //   };

// // // // //   const allPermutations = useMemo(() => generatePermutations(items), [items]);

// // // // //   useEffect(() => {
// // // // //     let interval;
// // // // //     if (isPlaying) {
// // // // //       interval = setInterval(() => {
// // // // //         setCurrentIndex(prevIndex => {
// // // // //           if (prevIndex < allPermutations.length - 1) {
// // // // //             updatePermutation(prevIndex + 1);
// // // // //             return prevIndex + 1;
// // // // //           } else {
// // // // //             setIsPlaying(false);
// // // // //             return prevIndex;
// // // // //           }
// // // // //         });
// // // // //       }, 1000);
// // // // //     }
// // // // //     return () => clearInterval(interval);
// // // // //   }, [isPlaying, allPermutations.length]);

// // // // //   const updatePermutation = (index) => {
// // // // //     if (index < allPermutations.length) {
// // // // //       const newPerm = allPermutations[index];
// // // // //       setCurrentPermutation(newPerm);
// // // // //       setPermutationStacks(prev => {
// // // // //         const firstItem = newPerm[0];
// // // // //         const updatedStack = [...(prev[firstItem] || []), newPerm];
// // // // //         return {
// // // // //           ...prev,
// // // // //           [firstItem]: updatedStack.slice(0, 6)  // Ensure each stack has at most 6 permutations
// // // // //         };
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const handlePlay = () => setIsPlaying(true);
// // // // //   const handlePause = () => setIsPlaying(false);
// // // // //   const handleForward = () => {
// // // // //     if (currentIndex < allPermutations.length - 1) {
// // // // //       setCurrentIndex(prevIndex => prevIndex + 1);
// // // // //       updatePermutation(currentIndex + 1);
// // // // //     }
// // // // //   };
// // // // //   const handleBack = () => {
// // // // //     if (currentIndex > 0) {
// // // // //       setCurrentIndex(prevIndex => prevIndex - 1);
// // // // //       setPermutationStacks(prev => {
// // // // //         const newStacks = { ...prev };
// // // // //         Object.keys(newStacks).forEach(key => {
// // // // //           newStacks[key] = newStacks[key].slice(0, -1);
// // // // //         });
// // // // //         return newStacks;
// // // // //       });
// // // // //     }
// // // // //   };
// // // // //   const handleReset = () => {
// // // // //     setCurrentIndex(0);
// // // // //     setPermutationStacks({});
// // // // //     setCurrentPermutation([]);
// // // // //     setIsPlaying(false);
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '16px' }}>
// // // // //       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Combinatorics Visualization</h1>
// // // // //       <PermutationRow label="Original Set" permutation={items} colors={colors} />
// // // // //       <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
// // // // //       <div style={{ marginTop: '16px', marginBottom: '16px' }}>
// // // // //         <button onClick={handlePlay} disabled={isPlaying || currentIndex === allPermutations.length - 1}>Play</button>
// // // // //         <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
// // // // //         <button onClick={handleForward} disabled={currentIndex === allPermutations.length - 1}>Forward</button>
// // // // //         <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
// // // // //         <button onClick={handleReset}>Reset</button>
// // // // //       </div>
// // // // //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
// // // // //         {items.map((item) => (
// // // // //           <div key={item} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '4px' }}>
// // // // //             <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: colors[item] }}>
// // // // //               Stack {item}
// // // // //             </h3>
// // // // //             <AnimatePresence>
// // // // //               {permutationStacks[item]?.map((perm, index) => (
// // // // //                 <motion.div
// // // // //                   key={index}
// // // // //                   initial={{ opacity: 0, y: 20 }}
// // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // //                   exit={{ opacity: 0, y: -20 }}
// // // // //                   transition={{ duration: 0.5 }}
// // // // //                 >
// // // // //                   <PermutationRow 
// // // // //                     label={`Perm ${index + 1}`} 
// // // // //                     permutation={perm}
// // // // //                     colors={colors}
// // // // //                   />
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </AnimatePresence>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CombinatoricsVisualization;
// // // // // import React, { useState, useEffect, useMemo } from 'react';
// // // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // const Ball = ({ item, color }) => (
// // // // //   <div style={{
// // // // //     width: '32px', height: '32px', borderRadius: '50%', backgroundColor: color,
// // // // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // //     color: 'white', fontWeight: 'bold', fontSize: '14px', margin: '0 4px'
// // // // //   }}>
// // // // //     {item}
// // // // //   </div>
// // // // // );

// // // // // const PermutationRow = ({ label, permutation, colors }) => (
// // // // //   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
// // // // //     <span style={{ marginRight: '16px', fontSize: '12px', fontWeight: '600', width: '80px' }}>{label}</span>
// // // // //     <div style={{ display: 'flex' }}>
// // // // //       {permutation.map((item, index) => (
// // // // //         <Ball key={index} item={item} color={colors[item]} />
// // // // //       ))}
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // const CombinatoricsVisualization = () => {
// // // // //   const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
// // // // //   const items = ['A', 'B', 'C', 'D'];
// // // // //   const [permutationStacks, setPermutationStacks] = useState({});
// // // // //   const [currentPermutation, setCurrentPermutation] = useState([]);
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // // //   const [isPlaying, setIsPlaying] = useState(false);

// // // // //   const generatePermutations = (arr) => {
// // // // //     const result = [];
// // // // //     const permute = (arr, m = []) => {
// // // // //       if (arr.length === 0) {
// // // // //         result.push(m);
// // // // //       } else {
// // // // //         for (let i = 0; i < arr.length; i++) {
// // // // //           let curr = arr.slice();
// // // // //           let next = curr.splice(i, 1);
// // // // //           permute(curr.slice(), m.concat(next));
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //     permute(arr);
// // // // //     return result;
// // // // //   };

// // // // //   const allPermutations = useMemo(() => generatePermutations(items), [items]);

// // // // //   const updatePermutation = (index) => {
// // // // //     if (index < allPermutations.length) {
// // // // //       const newPerm = allPermutations[index];
// // // // //       setCurrentPermutation(newPerm);
// // // // //       setPermutationStacks(prev => {
// // // // //         const firstItem = newPerm[0];
// // // // //         return {
// // // // //           ...prev,
// // // // //           [firstItem]: Array.from(new Set([...(prev[firstItem] || []), newPerm]))
// // // // //             .slice(-6)
// // // // //         };
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (allPermutations.length > 0) {
// // // // //       updatePermutation(0);
// // // // //     }
// // // // //   }, [allPermutations]);

// // // // //   useEffect(() => {
// // // // //     let interval;
// // // // //     if (isPlaying) {
// // // // //       interval = setInterval(() => {
// // // // //         setCurrentIndex(prevIndex => {
// // // // //           if (prevIndex < allPermutations.length - 1) {
// // // // //             updatePermutation(prevIndex + 1);
// // // // //             return prevIndex + 1;
// // // // //           } else {
// // // // //             setIsPlaying(false);
// // // // //             return prevIndex;
// // // // //           }
// // // // //         });
// // // // //       }, 1000);
// // // // //     }
// // // // //     return () => clearInterval(interval);
// // // // //   }, [isPlaying, allPermutations.length]);

// // // // //   const handlePlay = () => setIsPlaying(true);
// // // // //   const handlePause = () => setIsPlaying(false);
// // // // //   const handleForward = () => {
// // // // //     if (currentIndex < allPermutations.length - 1) {
// // // // //       setCurrentIndex(prevIndex => prevIndex + 1);
// // // // //       updatePermutation(currentIndex + 1);
// // // // //     }
// // // // //   };
// // // // //   const handleBack = () => {
// // // // //     if (currentIndex > 0) {
// // // // //       setCurrentIndex(prevIndex => prevIndex - 1);
// // // // //       updatePermutation(currentIndex - 1);
// // // // //     }
// // // // //   };
// // // // //   const handleReset = () => {
// // // // //     setCurrentIndex(0);
// // // // //     setPermutationStacks({});
// // // // //     updatePermutation(0);
// // // // //     setIsPlaying(false);
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '16px' }}>
// // // // //       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Combinatorics Visualization</h1>
// // // // //       <PermutationRow label="Original Set" permutation={items} colors={colors} />
// // // // //       <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
// // // // //       <div style={{ marginTop: '16px', marginBottom: '16px' }}>
// // // // //         <button onClick={handlePlay} disabled={isPlaying || currentIndex === allPermutations.length - 1}>Play</button>
// // // // //         <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
// // // // //         <button onClick={handleForward} disabled={currentIndex === allPermutations.length - 1}>Forward</button>
// // // // //         <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
// // // // //         <button onClick={handleReset}>Reset</button>
// // // // //       </div>
// // // // //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
// // // // //         {items.map((item) => (
// // // // //           <div key={item} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '4px' }}>
// // // // //             <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: colors[item] }}>
// // // // //               Stack {item}
// // // // //             </h3>
// // // // //             <AnimatePresence>
// // // // //               {permutationStacks[item]?.map((perm, index) => (
// // // // //                 <motion.div
// // // // //                   key={index}
// // // // //                   initial={{ opacity: 0, y: 20 }}
// // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // //                   exit={{ opacity: 0, y: -20 }}
// // // // //                   transition={{ duration: 0.5 }}
// // // // //                 >
// // // // //                   <PermutationRow 
// // // // //                     label={`Perm ${index + 1}`} 
// // // // //                     permutation={perm}
// // // // //                     colors={colors}
// // // // //                   />
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </AnimatePresence>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CombinatoricsVisualization;
// // // // import React, { useState, useEffect, useMemo } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // const Ball = ({ item, color }) => (
// // // //   <div style={{
// // // //     width: '32px', height: '32px', borderRadius: '50%', backgroundColor: color,
// // // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //     color: 'white', fontWeight: 'bold', fontSize: '14px', margin: '0 4px'
// // // //   }}>
// // // //     {item}
// // // //   </div>
// // // // );

// // // // const PermutationRow = ({ label, permutation, colors }) => (
// // // //   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
// // // //     <span style={{ marginRight: '16px', fontSize: '12px', fontWeight: '600', width: '80px' }}>{label}</span>
// // // //     <div style={{ display: 'flex' }}>
// // // //       {permutation.map((item, index) => (
// // // //         <Ball key={index} item={item} color={colors[item]} />
// // // //       ))}
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const CombinatoricsVisualization = () => {
// // // //   const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
// // // //   const items = ['A', 'B', 'C', 'D'];
// // // //   const [permutationStacks, setPermutationStacks] = useState({});
// // // //   const [currentPermutation, setCurrentPermutation] = useState([]);
// // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // //   const [isPlaying, setIsPlaying] = useState(false);

// // // //   const generatePermutations = (arr) => {
// // // //     const result = [];
// // // //     const permute = (arr, m = []) => {
// // // //       if (arr.length === 0) {
// // // //         result.push(m);
// // // //       } else {
// // // //         for (let i = 0; i < arr.length; i++) {
// // // //           let curr = arr.slice();
// // // //           let next = curr.splice(i, 1);
// // // //           permute(curr.slice(), m.concat(next));
// // // //         }
// // // //       }
// // // //     }
// // // //     permute(arr);
// // // //     return result;
// // // //   };

// // // //   const allPermutations = useMemo(() => generatePermutations(items), [items]);

// // // //   const updatePermutation = (index) => {
// // // //     if (index < allPermutations.length) {
// // // //       const newPerm = allPermutations[index];
// // // //       setCurrentPermutation(newPerm);
// // // //       setPermutationStacks(prev => {
// // // //         const firstItem = newPerm[0];
// // // //         const updatedStack = [...(prev[firstItem] || []), newPerm];
// // // //         return {
// // // //           ...prev,
// // // //           [firstItem]: updatedStack.slice(-6)
// // // //         };
// // // //       });
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     let interval;
// // // //     if (isPlaying) {
// // // //       interval = setInterval(() => {
// // // //         setCurrentIndex(prevIndex => {
// // // //           if (prevIndex < allPermutations.length - 1) {
// // // //             updatePermutation(prevIndex + 1);
// // // //             return prevIndex + 1;
// // // //           } else {
// // // //             setIsPlaying(false);
// // // //             return prevIndex;
// // // //           }
// // // //         });
// // // //       }, 1000);
// // // //     }
// // // //     return () => clearInterval(interval);
// // // //   }, [isPlaying, allPermutations.length]);

// // // //   const handlePlay = () => {
// // // //     setIsPlaying(true);
// // // //     if (currentIndex === 0) {
// // // //       updatePermutation(0);
// // // //     }
// // // //   };

// // // //   const handlePause = () => setIsPlaying(false);

// // // //   const handleForward = () => {
// // // //     if (currentIndex < allPermutations.length - 1) {
// // // //       setCurrentIndex(prevIndex => prevIndex + 1);
// // // //       updatePermutation(currentIndex + 1);
// // // //     }
// // // //   };

// // // //   const handleBack = () => {
// // // //     if (currentIndex > 0) {
// // // //       setCurrentIndex(prevIndex => prevIndex - 1);
// // // //       updatePermutation(currentIndex - 1);
// // // //     }
// // // //   };

// // // //   const handleReset = () => {
// // // //     setCurrentIndex(0);
// // // //     setPermutationStacks({});
// // // //     setCurrentPermutation([]);
// // // //     setIsPlaying(false);
// // // //   };

// // // //   return (
// // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '16px' }}>
// // // //       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Combinatorics Visualization</h1>
// // // //       <PermutationRow label="Original Set" permutation={items} colors={colors} />
// // // //       <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
// // // //       <div style={{ marginTop: '16px', marginBottom: '16px' }}>
// // // //         <button onClick={handlePlay} disabled={isPlaying || currentIndex === allPermutations.length - 1}>Play</button>
// // // //         <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
// // // //         <button onClick={handleForward} disabled={currentIndex === allPermutations.length - 1}>Forward</button>
// // // //         <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
// // // //         <button onClick={handleReset}>Reset</button>
// // // //       </div>
// // // //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
// // // //         {items.map((item) => (
// // // //           <div key={item} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '4px' }}>
// // // //             <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: colors[item] }}>
// // // //               Stack {item}
// // // //             </h3>
// // // //             <AnimatePresence>
// // // //               {permutationStacks[item]?.map((perm, index) => (
// // // //                 <motion.div
// // // //                   key={index}
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   exit={{ opacity: 0, y: -20 }}
// // // //                   transition={{ duration: 0.5 }}
// // // //                 >
// // // //                   <PermutationRow 
// // // //                     label={`Perm ${index + 1}`} 
// // // //                     permutation={perm}
// // // //                     colors={colors}
// // // //                   />
// // // //                 </motion.div>
// // // //               ))}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CombinatoricsVisualization;
// // // import React, { useState, useEffect, useMemo } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';

// // // const Ball = ({ item, color }) => (
// // //   <div style={{
// // //     width: '32px', height: '32px', borderRadius: '50%', backgroundColor: color,
// // //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //     color: 'white', fontWeight: 'bold', fontSize: '14px', margin: '0 4px'
// // //   }}>
// // //     {item}
// // //   </div>
// // // );

// // // const PermutationRow = ({ label, permutation, colors }) => (
// // //   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
// // //     <span style={{ marginRight: '16px', fontSize: '12px', fontWeight: '600', width: '80px' }}>{label}</span>
// // //     <div style={{ display: 'flex' }}>
// // //       {permutation.map((item, index) => (
// // //         <Ball key={index} item={item} color={colors[item]} />
// // //       ))}
// // //     </div>
// // //   </div>
// // // );

// // // const CombinatoricsVisualization = () => {
// // //   const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
// // //   const items = ['A', 'B', 'C', 'D'];
// // //   const [permutationStacks, setPermutationStacks] = useState({});
// // //   const [currentPermutation, setCurrentPermutation] = useState([]);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isPlaying, setIsPlaying] = useState(false);

// // //   const generatePermutations = (arr) => {
// // //     const result = [];
// // //     const permute = (arr, m = []) => {
// // //       if (arr.length === 0) {
// // //         result.push(m);
// // //       } else {
// // //         for (let i = 0; i < arr.length; i++) {
// // //           let curr = arr.slice();
// // //           let next = curr.splice(i, 1);
// // //           permute(curr.slice(), m.concat(next));
// // //         }
// // //       }
// // //     }
// // //     permute(arr);
// // //     return result;
// // //   };

// // //   const allPermutations = useMemo(() => generatePermutations(items), [items]);

// // //   const updatePermutation = (index) => {
// // //     if (index < allPermutations.length) {
// // //       const newPerm = allPermutations[index];
// // //       setCurrentPermutation(newPerm);
// // //       setPermutationStacks(prev => {
// // //         const firstItem = newPerm[0];
// // //         const updatedStack = [...(prev[firstItem] || []), newPerm];
// // //         return {
// // //           ...prev,
// // //           [firstItem]: updatedStack.slice(-6)
// // //         };
// // //       });
// // //     }
// // //   };

// // //   const ensureAllPermutations = (upToIndex) => {
// // //     for (let i = 0; i <= upToIndex; i++) {
// // //       updatePermutation(i);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     let interval;
// // //     if (isPlaying) {
// // //       interval = setInterval(() => {
// // //         setCurrentIndex(prevIndex => {
// // //           if (prevIndex < allPermutations.length - 1) {
// // //             updatePermutation(prevIndex + 1);
// // //             return prevIndex + 1;
// // //           } else {
// // //             setIsPlaying(false);
// // //             return prevIndex;
// // //           }
// // //         });
// // //       }, 1000);
// // //     }
// // //     return () => clearInterval(interval);
// // //   }, [isPlaying, allPermutations.length]);

// // //   const handlePlay = () => {
// // //     setIsPlaying(true);
// // //     if (currentIndex === 0) {
// // //       updatePermutation(0);
// // //     }
// // //   };

// // //   const handlePause = () => setIsPlaying(false);

// // //   const handleForward = () => {
// // //     if (currentIndex < allPermutations.length - 1) {
// // //       const nextIndex = currentIndex + 1;
// // //       setCurrentIndex(nextIndex);
// // //       ensureAllPermutations(nextIndex);
// // //     }
// // //   };

// // //   const handleBack = () => {
// // //     if (currentIndex > 0) {
// // //       setCurrentIndex(prevIndex => prevIndex - 1);
// // //       updatePermutation(currentIndex - 1);
// // //     }
// // //   };

// // //   const handleReset = () => {
// // //     setCurrentIndex(0);
// // //     setPermutationStacks({});
// // //     setCurrentPermutation([]);
// // //     setIsPlaying(false);
// // //   };

// // //   return (
// // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '16px' }}>
// // //       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Combinatorics Visualization</h1>
// // //       <PermutationRow label="Original Set" permutation={items} colors={colors} />
// // //       <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
// // //       <div style={{ marginTop: '16px', marginBottom: '16px' }}>
// // //         <button onClick={handlePlay} disabled={isPlaying || currentIndex === allPermutations.length - 1}>Play</button>
// // //         <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
// // //         <button onClick={handleForward} disabled={currentIndex === allPermutations.length - 1}>Forward</button>
// // //         <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
// // //         <button onClick={handleReset}>Reset</button>
// // //       </div>
// // //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
// // //         {items.map((item) => (
// // //           <div key={item} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '4px' }}>
// // //             <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: colors[item] }}>
// // //               Stack {item}
// // //             </h3>
// // //             <AnimatePresence>
// // //               {permutationStacks[item]?.map((perm, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   exit={{ opacity: 0, y: -20 }}
// // //                   transition={{ duration: 0.5 }}
// // //                 >
// // //                   <PermutationRow 
// // //                     label={`Perm ${index + 1}`} 
// // //                     permutation={perm}
// // //                     colors={colors}
// // //                   />
// // //                 </motion.div>
// // //               ))}
// // //             </AnimatePresence>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CombinatoricsVisualization;
// // import React, { useState, useEffect, useMemo } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const Ball = ({ item, color }) => (
// //   <div style={{
// //     width: '32px', height: '32px', borderRadius: '50%', backgroundColor: color,
// //     display: 'flex', alignItems: 'center', justifyContent: 'center',
// //     color: 'white', fontWeight: 'bold', fontSize: '14px', margin: '0 4px'
// //   }}>
// //     {item}
// //   </div>
// // );

// // const PermutationRow = ({ label, permutation, colors }) => (
// //   <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
// //     <span style={{ marginRight: '16px', fontSize: '12px', fontWeight: '600', width: '80px' }}>{label}</span>
// //     <div style={{ display: 'flex' }}>
// //       {permutation.map((item, index) => (
// //         <Ball key={index} item={item} color={colors[item]} />
// //       ))}
// //     </div>
// //   </div>
// // );

// // const CombinatoricsVisualization = () => {
// //   const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
// //   const items = ['A', 'B', 'C', 'D'];
// //   const [permutationStacks, setPermutationStacks] = useState({});
// //   const [currentPermutation, setCurrentPermutation] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(-1);
// //   const [isPlaying, setIsPlaying] = useState(false);

// //   const generatePermutations = (arr) => {
// //     const result = [];
// //     const permute = (arr, m = []) => {
// //       if (arr.length === 0) {
// //         result.push(m);
// //       } else {
// //         for (let i = 0; i < arr.length; i++) {
// //           let curr = arr.slice();
// //           let next = curr.splice(i, 1);
// //           permute(curr.slice(), m.concat(next));
// //         }
// //       }
// //     }
// //     permute(arr);
// //     return result;
// //   };

// //   const allPermutations = useMemo(() => generatePermutations(items), [items]);

// //   const updatePermutation = (index) => {
// //     if (index >= 0 && index < allPermutations.length) {
// //       const newPerm = allPermutations[index];
// //       setCurrentPermutation(newPerm);
// //       setPermutationStacks(prev => {
// //         const firstItem = newPerm[0];
// //         const updatedStack = [...(prev[firstItem] || []), newPerm];
// //         return {
// //           ...prev,
// //           [firstItem]: updatedStack.slice(-6)
// //         };
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     let interval;
// //     if (isPlaying) {
// //       interval = setInterval(() => {
// //         setCurrentIndex(prevIndex => {
// //           if (prevIndex < allPermutations.length - 1) {
// //             const nextIndex = prevIndex + 1;
// //             updatePermutation(nextIndex);
// //             return nextIndex;
// //           } else {
// //             setIsPlaying(false);
// //             return prevIndex;
// //           }
// //         });
// //       }, 1000);
// //     }
// //     return () => clearInterval(interval);
// //   }, [isPlaying, allPermutations.length]);

// //   const handlePlay = () => {
// //     setIsPlaying(true);
// //     if (currentIndex === -1) {
// //       setCurrentIndex(0);
// //       updatePermutation(0);
// //     }
// //   };

// //   const handlePause = () => setIsPlaying(false);

// //   const handleForward = () => {
// //     if (currentIndex < allPermutations.length - 1) {
// //       const nextIndex = currentIndex + 1;
// //       setCurrentIndex(nextIndex);
// //       updatePermutation(nextIndex);
// //     }
// //   };

// //   const handleBack = () => {
// //     if (currentIndex > 0) {
// //       const prevIndex = currentIndex - 1;
// //       setCurrentIndex(prevIndex);
// //       updatePermutation(prevIndex);
// //     }
// //   };

// //   const handleReset = () => {
// //     setCurrentIndex(-1);
// //     setPermutationStacks({});
// //     setCurrentPermutation([]);
// //     setIsPlaying(false);
// //   };

// //   return (
// //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '16px' }}>
// //       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Combinatorics Visualization</h1>
// //       <PermutationRow label="Original Set" permutation={items} colors={colors} />
// //       <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
// //       <div style={{ marginTop: '16px', marginBottom: '16px' }}>
// //         <button onClick={handlePlay} disabled={isPlaying || currentIndex === allPermutations.length - 1}>Play</button>
// //         <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
// //         <button onClick={handleForward} disabled={currentIndex === allPermutations.length - 1}>Forward</button>
// //         <button onClick={handleBack} disabled={currentIndex <= 0}>Back</button>
// //         <button onClick={handleReset}>Reset</button>
// //       </div>
// //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
// //         {items.map((item) => (
// //           <div key={item} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '4px' }}>
// //             <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: colors[item] }}>
// //               Stack {item}
// //             </h3>
// //             <AnimatePresence>
// //               {permutationStacks[item]?.map((perm, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -20 }}
// //                   transition={{ duration: 0.5 }}
// //                 >
// //                   <PermutationRow 
// //                     label={`Perm ${index + 1}`} 
// //                     permutation={perm}
// //                     colors={colors}
// //                   />
// //                 </motion.div>
// //               ))}
// //             </AnimatePresence>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CombinatoricsVisualization;
// import React, { useState, useEffect, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from './CombinatoricsVisualization.module.css';

// const Ball = ({ item, color }) => (
//   <div className={styles.ball} style={{ backgroundColor: color }}>
//     {item}
//   </div>
// );

// const PermutationRow = ({ label, permutation, colors }) => (
//   <div className={styles.permutationSet}>
//     <span className={styles.permutationLabel}>{label}</span>
//     <div className={styles.ballContainer}>
//       {permutation.map((item, index) => (
//         <Ball key={index} item={item} color={colors[item]} />
//       ))}
//     </div>
//   </div>
// );

// const CombinatoricsVisualization = () => {
//   const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
//   const items = ['A', 'B', 'C', 'D'];
//   const [permutationStacks, setPermutationStacks] = useState({});
//   const [currentPermutation, setCurrentPermutation] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const generatePermutations = (arr) => {
//     const result = [];
//     const permute = (arr, m = []) => {
//       if (arr.length === 0) {
//         result.push(m);
//       } else {
//         for (let i = 0; i < arr.length; i++) {
//           let curr = arr.slice();
//           let next = curr.splice(i, 1);
//           permute(curr.slice(), m.concat(next));
//         }
//       }
//     }
//     permute(arr);
//     return result;
//   };

//   const allPermutations = useMemo(() => generatePermutations(items), [items]);

//   const updatePermutation = (index) => {
//     if (index >= 0 && index < allPermutations.length) {
//       const newPerm = allPermutations[index];
//       setCurrentPermutation(newPerm);
//       setPermutationStacks(prev => {
//         const firstItem = newPerm[0];
//         const updatedStack = [...(prev[firstItem] || []), newPerm];
//         return {
//           ...prev,
//           [firstItem]: updatedStack.slice(-6)
//         };
//       });
//     }
//   };

//   useEffect(() => {
//     let interval;
//     if (isPlaying) {
//       interval = setInterval(() => {
//         setCurrentIndex(prevIndex => {
//           if (prevIndex < allPermutations.length - 1) {
//             const nextIndex = prevIndex + 1;
//             updatePermutation(nextIndex);
//             return nextIndex;
//           } else {
//             setIsPlaying(false);
//             return prevIndex;
//           }
//         });
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, allPermutations.length]);

//   const handlePlay = () => {
//     setIsPlaying(true);
//     if (currentIndex === -1) {
//       setCurrentIndex(0);
//       updatePermutation(0);
//     }
//   };

//   const handlePause = () => setIsPlaying(false);

//   const handleForward = () => {
//     if (currentIndex < allPermutations.length - 1) {
//       const nextIndex = currentIndex + 1;
//       setCurrentIndex(nextIndex);
//       updatePermutation(nextIndex);
//     }
//   };

//   const handleBack = () => {
//     if (currentIndex > 0) {
//       const prevIndex = currentIndex - 1;
//       setCurrentIndex(prevIndex);
//       updatePermutation(prevIndex);
//     }
//   };

//   const handleReset = () => {
//     setCurrentIndex(-1);
//     setPermutationStacks({});
//     setCurrentPermutation([]);
//     setIsPlaying(false);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Combinatorics Visualization</h1>
//       <div className={styles.permutationsRow}>
//         <PermutationRow label="Original Set" permutation={items} colors={colors} />
//         <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
//       </div>
//       <div className={styles.controls}>
//         <button className={styles.button} onClick={handlePlay} disabled={isPlaying || currentIndex === allPermutations.length - 1}>Play</button>
//         <button className={styles.button} onClick={handlePause} disabled={!isPlaying}>Pause</button>
//         <button className={styles.button} onClick={handleForward} disabled={currentIndex === allPermutations.length - 1}>Forward</button>
//         <button className={styles.button} onClick={handleBack} disabled={currentIndex <= 0}>Back</button>
//         <button className={styles.button} onClick={handleReset}>Reset</button>
//       </div>
//       <div className={styles.stacksContainer}>
//         {items.map((item) => (
//           <div key={item} className={styles.stack}>
//             <h3 className={styles.stackTitle} style={{ color: colors[item] }}>
//               Stack {item}
//             </h3>
//             <AnimatePresence>
//               {permutationStacks[item]?.map((perm, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <PermutationRow 
//                     label={`Perm ${index + 1}`} 
//                     permutation={perm}
//                     colors={colors}
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CombinatoricsVisualization;
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CombinatoricsVisualization.module.css';

const Ball = ({ item, color }) => (
  <div className={styles.ball} style={{ backgroundColor: color }}>
    {item}
  </div>
);

const PermutationRow = ({ label, permutation, colors }) => (
  <div className={styles.permutationSet}>
    <span className={styles.permutationLabel}>{label}</span>
    <div className={styles.ballContainer}>
      {permutation.map((item, index) => (
        <Ball key={index} item={item} color={colors[item]} />
      ))}
    </div>
  </div>
);

const CombinatoricsVisualization = ({ itemCount = 4 }) => {
  const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
  const items = ['A', 'B', 'C', 'D'].slice(0, itemCount);
  const [permutationStacks, setPermutationStacks] = useState({});
  const [currentPermutation, setCurrentPermutation] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const generatePermutations = (arr) => {
    const result = [];
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    }
    permute(arr);
    return result;
  };

  const allPermutations = useMemo(() => generatePermutations(items), [items]);

  const updatePermutation = (index) => {
    if (index >= 0 && index < allPermutations.length) {
      const newPerm = allPermutations[index];
      setCurrentPermutation(newPerm);
      setPermutationStacks(prev => {
        const firstItem = newPerm[0];
        const updatedStack = [...(prev[firstItem] || []), newPerm];
        return {
          ...prev,
          [firstItem]: updatedStack.slice(-6)
        };
      });
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          if (prevIndex < allPermutations.length - 1) {
            const nextIndex = prevIndex + 1;
            updatePermutation(nextIndex);
            return nextIndex;
          } else {
            setIsPlaying(false);
            return prevIndex;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, allPermutations.length]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (currentIndex === -1) {
      setCurrentIndex(0);
      updatePermutation(0);
    }
  };

  const handlePause = () => setIsPlaying(false);

  const handleForward = () => {
    if (currentIndex < allPermutations.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      updatePermutation(nextIndex);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      updatePermutation(prevIndex);
    }
  };

  const handleReset = () => {
    setCurrentIndex(-1);
    setPermutationStacks({});
    setCurrentPermutation([]);
    setIsPlaying(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Combinatorics Visualization</h1>
      <div className={styles.permutationsRow}>
        <PermutationRow label="Original Set" permutation={items} colors={colors} />
        <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={handlePlay} disabled={isPlaying || currentIndex === allPermutations.length - 1}>Play</button>
        <button className={styles.button} onClick={handlePause} disabled={!isPlaying}>Pause</button>
        <button className={styles.button} onClick={handleForward} disabled={currentIndex === allPermutations.length - 1}>Forward</button>
        <button className={styles.button} onClick={handleBack} disabled={currentIndex <= 0}>Back</button>
        <button className={styles.button} onClick={handleReset}>Reset</button>
      </div>
      <div className={styles.stacksContainer}>
        {items.map((item) => (
          <div key={item} className={styles.stack}>
            <h3 className={styles.stackTitle} style={{ color: colors[item] }}>
              Stack {item}
            </h3>
            <AnimatePresence>
              {permutationStacks[item]?.map((perm, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <PermutationRow 
                    // label={`Permutation ${index + 1}`} 
                    permutation={perm}
                    colors={colors}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinatoricsVisualization;