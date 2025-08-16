'use client'
import React, { useState, useEffect } from 'react';

function PrimeSieveAnimation() {
  const [numbers, setNumbers] = useState([]);
  const [max, setMax] = useState(100); // Set the maximum number for the sieve

  useEffect(() => {
    // Initialize the numbers with their default color
    const initNumbers = Array.from({ length: max + 1 }, (_, i) => ({
      number: i,
      isPrime: true, // Assume all numbers are prime initially
      color: i <= 1 ? 'lightgrey' : 'white', // Non-prime numbers 0 and 1
    }));
    setNumbers(initNumbers);
  }, [max]);

  const highlightMultiplesSequentially = async (prime, color) => {
    for (let multiple = 2 * prime; multiple <= max; multiple += prime) {
      // Delay for the visual effect
      await new Promise((resolve) => setTimeout(resolve, 500));
      setNumbers((currentNumbers) =>
        currentNumbers.map((n) =>
          n.number === multiple ? { ...n, color, isPrime: false } : n
        )
      );
    }
  };

  const startAnimation = async () => {
    const primes = [2, 3, 5, 7];
    const colors = ['orange', 'red', 'blue', 'green']; // Unique color for each prime's multiples

    for (let i = 0; i < primes.length; i++) {
      await highlightMultiplesSequentially(primes[i], colors[i]);
    }

    // Highlight remaining primes in a new color
    setNumbers((currentNumbers) =>
      currentNumbers.map((n) =>
        n.isPrime && n.color === 'white' ? { ...n, color: 'purple' } : n
      )
    );
  };

//   return (
//     <div>
//       <input
//         type="number"
//         value={max}
//         onChange={(e) => setMax(parseInt(e.target.value, 10))}
//       />
//       <button onClick={startAnimation}>Start Animation</button>
//       <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '720px' }}>
//         {numbers.map((num) => (
//           <div
//             key={num.number}
//             style={{
//               width: '30px',
//               height: '30px',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: num.color,
//               margin: '1px',
//               fontSize: '20px',
//             }}
//           >
//             {num.number}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

return (
    <div>
      <input
        type="number"
        value={max}
        onChange={(e) => setMax(parseInt(e.target.value, 10))}
      />
      <button onClick={startAnimation}>Start Animation</button>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)', // This creates 10 columns
        gap: '3px',
        maxWidth: '720px'
      }}>
        {numbers.map((num) => (
          <div
            key={num.number}
            style={{
              width: '40px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: num.color,
              
              fontSize: '20px',
            }}
          >
            {num.number}
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default PrimeSieveAnimation;
