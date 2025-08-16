'use client'
import React, { useState, useEffect } from 'react';

function SieveTableVisualization() {
  const [numbers, setNumbers] = useState([]);
  const [limit, setLimit] = useState(100); // Default limit for visualization

  useEffect(() => {
    const sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false; // 0 and 1 are not primes

    for (let i = 2; i * i <= limit; i++) {
      if (sieve[i]) {
        for (let j = i * i; j <= limit; j += i) {
          sieve[j] = false;
        }
      }
    }

    const numbersArray = [];
    for (let i = 1; i <= limit; i++) {
      numbersArray.push({ value: i, isPrime: sieve[i] });
    }

    setNumbers(numbersArray);
  }, [limit]);

  // Function to create rows with 10 columns
  const createTableRows = (numbers) => {
    const rows = [];
    for (let i = 0; i < numbers.length; i += 10) {
      rows.push(numbers.slice(i, i + 10));
    }
    return rows;
  };

  const tableRows = createTableRows(numbers);

  return (
    <div>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <table>
        <tbody>
          {tableRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell) => (
                <td
                  key={cell.value}
                  style={{
                    backgroundColor: cell.isPrime ? 'yellow' : 'white',
                    padding: '5px',
                    width: '50px',
                    textAlign: 'center',
                  }}
                >
                  {cell.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SieveTableVisualization;
