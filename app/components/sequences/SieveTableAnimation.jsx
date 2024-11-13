// 'use client'
// import React, { useState, useEffect } from 'react';

// function AnimatedPrimeTable() {
//   const [limit, setLimit] = useState(100);
//   const [grid, setGrid] = useState([]);

//   useEffect(() => {
//     // Initialize grid with numbers and mark all as unchecked
//     let initialGrid = [];
//     for (let i = 0; i <= limit; i += 10) {
//       let row = [];
//       for (let j = i; j < i + 10 && j <= limit; j++) {
//         row.push({ number: j, isPrime: j > 1, checked: false });
//       }
//       initialGrid.push(row);
//     }

//     setGrid(initialGrid);

//     // Sieve of Eratosthenes algorithm with animation
//     let sieve = Array(limit + 1).fill(true);
//     sieve[0] = sieve[1] = false; // 0 and 1 are not prime

//     const animateSieve = (num) => {
//       if (num > limit) return;

//       setTimeout(() => {
//         if (sieve[num]) {
//           for (let multiple = num * 2; multiple <= limit; multiple += num) {
//             sieve[multiple] = false;
//           }
//         }
//         setGrid((currentGrid) =>
//           currentGrid.map((row) =>
//             row.map((cell) => ({
//               ...cell,
//               isPrime: sieve[cell.number],
//               checked: cell.number <= num ? true : cell.checked,
//             }))
//           )
//         );
//         animateSieve(num + 1);
//       }, 100); // Adjust this value to control the speed
//     };

//     animateSieve(2);
//   }, [limit]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={limit}
//         onChange={(e) => setLimit(Number(e.target.value))}
//       />
//       <table border="1">
//         <tbody>
//           {grid.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, cellIndex) => (
//                 <td
//                   key={cellIndex}
//                   style={{
//                     width: '50px',
//                     height: '30px',
//                     border:'none',
//                     textAlign:'center',
//                     backgroundColor: cell.checked
//                       ? cell.isPrime ? 'yellow' : 'green'
//                       : 'transparent',
//                     color: 'black',
//                   }}
//                 >
//                   {cell.number}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AnimatedPrimeTable;
'use client'
import React, { useState } from 'react';

function AnimatedPrimeTable() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(100);
  const [grid, setGrid] = useState([]);

  const calculateSieve = () => {
    const sieve = Array(end + 1).fill(true);
    sieve[0] = sieve[1] = false; // Mark 0 and 1 as not prime explicitly

    for (let num = 2; num * num <= end; num++) {
      if (sieve[num]) {
        for (let multiple = num * num; multiple <= end; multiple += num) {
          sieve[multiple] = false;
        }
      }
    }
    return sieve;
  };

  const startAnimation = () => {
    let sieve = calculateSieve();
    let tempGrid = [];

    for (let i = start; i <= end; i += 10) {
      let row = [];
      for (let j = i; j < i + 10 && j <= end; j++) {
        row.push({ number: j, isPrime: sieve[j], checked: false });
      }
      tempGrid.push(row);
    }

    setGrid(tempGrid);

    // Animation logic adjusted to immediately reflect pre-calculated primes
    tempGrid.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        setTimeout(() => {
          setGrid((currentGrid) =>
            currentGrid.map((r, ri) =>
              ri === rowIndex
                ? r.map((c, ci) => (ci === cellIndex ? { ...c, checked: true } : c))
                : r
            )
          );
        }, 50 * (rowIndex * 10 + cellIndex)); // Adjust timing as needed
      });
    });
  };

  return (
    <div>
      <input type="number" value={start} onChange={(e) => setStart(Number(e.target.value))} />
      <input type="number" value={end} onChange={(e) => setEnd(Number(e.target.value))} />
      <button onClick={startAnimation}>Start Animation</button>
      <table border="1">
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: cell.checked ? (cell.isPrime ? 'lightgreen' : 'tomato') : 'transparent',
                    color: 'black',
                  }}
                >
                  {cell.number}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimatedPrimeTable;
