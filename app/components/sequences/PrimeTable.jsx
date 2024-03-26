// import React from 'react';

// // Assuming `primes` is imported or defined elsewhere in your project as an array of prime numbers
// import { primes } from '@/app/api/db/sequences/primes';
// import './sequences.css'
// import ArrayTable from './ArrayTable';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     // Slice the first 100 prime numbers
//     const first100Primes = primes.slice(0, 1000);
//     const titles = ["#", "Prime Number"];

   


//     return (
//         <div className='main-prime'>
//         <div className='table-container'>
        
//         <h3 className='title'>First 100 Prime Numbers</h3>
//         <TableWrapper 
//         data={first100Primes.map((prime, index) => ({ index: index + 1, prime }))} 
//         titles={titles} 
//         tableStyle="my-table" 
//       />
//         </div>
//         <div className='right-container'>
//             right
//         </div>
//         </div>
//     );
// };

// export default PrimeTable;
// 'use client'
// import React, { useState } from 'react';
// import { primes } from '@/app/api/db/sequences/primes';
// import './sequences.css';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     // Existing functionality: Display first 1000 primes
//     const first1000Primes = primes.slice(0, 1000);
//     const titles = ["#", "Prime Number"];

//     // New functionality: State for range inputs and filtered primes
//     const [startRange, setStartRange] = useState('');
//     const [endRange, setEndRange] = useState('');
//     const [filteredPrimes, setFilteredPrimes] = useState([]);
//     const [error, setError] = useState('');

//     const filterPrimesInRange = (start, end) => {
//         const filtered = primes.filter(prime => prime >= start && prime <= end);
//         setFilteredPrimes(filtered);
//     };

//     const validateAndSetRange = () => {
//         const start = parseInt(startRange, 10);
//         const end = parseInt(endRange, 10);

//         if (isNaN(start) || isNaN(end)) {
//             setError('Both inputs must be numbers.');
//             return;
//         }
//         if (start < 1 || end > 100000) {
//             setError('Range must be between 1 and 100000.');
//             return;
//         }
//         if (start >= end) {
//             setError('Start of range must be less than end of range.');
//             return;
//         }

//         setError(''); // Clear any existing errors
//         filterPrimesInRange(start, end);
//     };

//     return (
//         <div className='main-prime'>
//             <div className='table-container'>
//                 <h3 className='title'>First 1000 Prime Numbers</h3>
//                 <TableWrapper
//                     data={first1000Primes.map((prime, index) => ({ index: index + 1, prime }))}
//                     titles={titles}
//                     tableStyle="my-table"
//                 />
//             </div>
//             <div className='right-container'>
//                 <h3>Find Primes Within a Range</h3>
//                 <input
//                     type="number"
//                     placeholder="Start of range"
//                     value={startRange}
//                     onChange={e => setStartRange(e.target.value)}
//                     onBlur={validateAndSetRange}
//                 />
//                 <input
//                     type="number"
//                     placeholder="End of range"
//                     value={endRange}
//                     onChange={e => setEndRange(e.target.value)}
//                     onBlur={validateAndSetRange}
//                 />
//                 {error && <div className='error'>{error}</div>}
//                 {filteredPrimes.length > 0 && (
//                     <TableWrapper
//                         data={filteredPrimes.map((prime, index) => ({ index: index + 1, prime }))}
//                         titles={titles}
//                         tableStyle="my-table"
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PrimeTable;
// 'use client'
// import React, { useState } from 'react';
// import { primes } from '@/app/api/db/sequences/primes';
// import './sequences.css';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     // Existing setup for displaying first 1000 primes
//     const first1000Primes = primes.slice(0, 1000);
//     const titles = ["#", "Prime Number"];

//     // States for handling range inputs, filtered primes, and error messages
//     const [startRange, setStartRange] = useState('');
//     const [endRange, setEndRange] = useState('');
//     const [filteredPrimes, setFilteredPrimes] = useState([]);
//     const [error, setError] = useState('');

//     // Function to filter primes within the specified range
//     const filterPrimesInRange = () => {
//         const start = parseInt(startRange, 10);
//         const end = parseInt(endRange, 10);

//         if (isNaN(start) || isNaN(end)) {
//             setError('Both inputs must be numbers.');
//             return;
//         }
//         if (start < 1 || end > 100000) {
//             setError('Range must be between 1 and 100000.');
//             return;
//         }
//         if (start >= end) {
//             setError('Start of range must be less than end of range.');
//             return;
//         }

//         const filtered = primes.filter(prime => prime >= start && prime <= end);
//         setFilteredPrimes(filtered.map((prime, index) => ({ index: index + 1, prime })));
//         setError(''); // Clear any existing errors
//     };

//     // Function to reset input fields, filtered primes, and error messages
//     const resetFields = () => {
//         setStartRange('');
//         setEndRange('');
//         setFilteredPrimes([]);
//         setError('');
//     };

//     return (
//         <div className='main-prime'>
//             <div className='table-container'>
//                 <h3 className='title'>First 1000 Prime Numbers</h3>
//                 <TableWrapper
//                     data={first1000Primes.map((prime, index) => ({ index: index + 1, prime }))}
//                     titles={titles}
//                     tableStyle="my-table"
//                 />
//             </div>
//             <div className='right-container'>
//                 <h3>Find Primes Within a Range</h3>
//                 <input
//                     type="number"
//                     placeholder="Start of range"
//                     value={startRange}
//                     onChange={e => setStartRange(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="End of range"
//                     value={endRange}
//                     onChange={e => setEndRange(e.target.value)}
//                 />
//                 <button onClick={filterPrimesInRange}>Filter Primes</button>
//                 <button onClick={resetFields} style={{ marginLeft: '10px' }}>Reset</button>
//                 {error && <div className='error'>{error}</div>}
//                 {filteredPrimes.length > 0 && (
//                     <TableWrapper
//                         data={filteredPrimes}
//                         titles={titles}
//                         tableStyle="my-table"
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PrimeTable;
// 'use client'
// import React, { useState } from 'react';
// import { primes } from '@/app/api/db/sequences/primes';
// import './sequences.css';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     // Setup for displaying primes
//     const first1000Primes = primes.slice(0, 1000);
//     const titles = ["#", "Prime Number"];

//     // States for handling index range inputs and filtered primes
//     const [startIndex, setStartIndex] = useState('');
//     const [endIndex, setEndIndex] = useState('');
//     const [filteredPrimes, setFilteredPrimes] = useState([]);
//     const [error, setError] = useState('');

//     // Function to filter primes within the specified index range
//     const filterPrimesByIndexRange = () => {
//         const start = parseInt(startIndex, 10);
//         const end = parseInt(endIndex, 10);

//         if (isNaN(start) || isNaN(end)) {
//             setError('Both inputs must be numbers.');
//             return;
//         }
//         if (start < 1 || end > 1000) {
//             setError('Index range must be between 1 and 1000.');
//             return;
//         }
//         if (start >= end) {
//             setError('Start of range must be less than end of range.');
//             return;
//         }

//         // Adjust for zero-based index
//         const filtered = first1000Primes.slice(start - 1, end);
//         setFilteredPrimes(filtered);
//         setError(''); // Clear any existing errors
//     };

//     // Function to reset input fields, filtered primes, and error messages
//     const resetFields = () => {
//         setStartIndex('');
//         setEndIndex('');
//         setFilteredPrimes([]);
//         setError('');
//     };

//     return (
//         <div className='main-prime'>
//             <div className='table-container'>
//                 <h3 className='title'>First 1000 Prime Numbers</h3>
//                 <TableWrapper
//                     data={first1000Primes.map((prime, index) => ({ index: index + 1, prime }))}
//                     titles={titles}
//                     tableStyle="my-table"
//                 />
//             </div>
//             <div className='right-container'>
//                 <h3>Find Primes by Index Range</h3>
//                 <input
//                     type="number"
//                     placeholder="Start index"
//                     value={startIndex}
//                     onChange={e => setStartIndex(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="End index"
//                     value={endIndex}
//                     onChange={e => setEndIndex(e.target.value)}
//                 />
//                 <button onClick={filterPrimesByIndexRange}>Filter Primes</button>
//                 <button onClick={resetFields} style={{ marginLeft: '10px' }}>Reset</button>
//                 {error && <div className='error'>{error}</div>}
//                 {filteredPrimes.length > 0 && (
//                     <TableWrapper
//                         data={filteredPrimes}
//                         titles={titles}
//                         tableStyle="my-table"
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PrimeTable;
// 'use client'
// import React, { useState } from 'react';
// import { primes } from '@/app/api/db/sequences/primes';
// import './sequences.css';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     const first1000Primes = primes.slice(0, 1000).map((prime, index) => ({ index: index + 1, prime }));
//     const titles = ["#", "Prime Number"];

//     const [startIndex, setStartIndex] = useState('');
//     const [endIndex, setEndIndex] = useState('');
//     const [filteredPrimes, setFilteredPrimes] = useState([]);
//     const [error, setError] = useState('');

//     const filterPrimesByIndexRange = () => {
//         if (!startIndex || !endIndex) {
//             setError('Please enter both start and end indexes.');
//             return;
//         }

//         const start = parseInt(startIndex, 10);
//         const end = parseInt(endIndex, 10);

//         if (isNaN(start) || isNaN(end)) {
//             setError('Both inputs must be numbers.');
//             return;
//         }
//         if (start < 1 || end > 1000 || start >= end) {
//             setError('Ensure the start index is less than the end index and both are between 1 and 1000.');
//             return;
//         }

//         const filtered = first1000Primes.slice(start - 1, end);
//         setFilteredPrimes(filtered);
//         setError('');
//     };

//     const resetFields = () => {
//         setStartIndex('');
//         setEndIndex('');
//         setFilteredPrimes([]);
//         setError('');
//     };

//     return (
//         <div className='main-prime'>
//             <div className='table-container'>
//                 <h3 className='title'>First 1000 Prime Numbers</h3>
//                 <TableWrapper
//                     data={first1000Primes}
//                     titles={titles}
//                     tableStyle="my-table"
//                 />
//             </div>
//             <div className='right-container'>
//                 <h3>Find Primes by Index Range</h3>
//                 <input
//                 className='my-input'
//                     type="number"
//                     placeholder="Start index"
//                     value={startIndex}
//                     onChange={e => setStartIndex(e.target.value)}
//                 />
//                 <input
//                 className='my-input'
//                     type="number"
//                     placeholder="End index"
//                     value={endIndex}
//                     onChange={e => setEndIndex(e.target.value)}
//                 />
//                 <button onClick={filterPrimesByIndexRange}>Filter Primes</button>
//                 <button onClick={resetFields} style={{ marginLeft: '10px' }}>Reset</button>
//                 {error && <div className='error'>{error}</div>}
//                 {filteredPrimes.length > 0 && (
//                     <TableWrapper
//                         data={filteredPrimes}
//                         titles={titles}
//                         tableStyle="my-table"
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PrimeTable;
// 'use client'
// import React, { useState } from 'react';
// import { primes } from '@/app/api/db/sequences/primes'; // Ensure this path matches your project structure
// import './sequences.css';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     const first1000Primes = primes.slice(0, 1000).map((prime, index) => ({ index: index + 1, prime }));
//     const titles = ["#", "Prime Number"];

//     const [startIndex, setStartIndex] = useState('');
//     const [endIndex, setEndIndex] = useState('');
//     const [primeCheck, setPrimeCheck] = useState('');
//     const [primeCheckResult, setPrimeCheckResult] = useState('');
//     const [filteredPrimes, setFilteredPrimes] = useState([]);
//     const [primeIndex, setPrimeIndex] = useState('');
//     const [primeAtIndex, setPrimeAtIndex] = useState('');
//     const [error, setError] = useState('');

//     const filterPrimesByIndexRange = () => {
//         if (!startIndex || !endIndex) {
//             setError('Please enter both start and end indexes.');
//             return;
//         }

//         const start = parseInt(startIndex, 10);
//         const end = parseInt(endIndex, 10);

//         if (isNaN(start) || isNaN(end)) {
//             setError('Both inputs must be numbers.');
//             return;
//         }
//         if (start < 1 || end > 1000 || start >= end) {
//             setError('Ensure the start index is less than the end index and both are between 1 and 1000.');
//             return;
//         }

//         const filtered = first1000Primes.slice(start - 1, end);
//         setFilteredPrimes(filtered);
//         setError('');
//     };

    // const handlePrimeCheck = () => {
    //     const num = parseInt(primeCheck, 10);
    //     if (isNaN(num) || num < 2) {
    //         setPrimeCheckResult('Please enter a valid number greater than 1.');
    //         return;
    //     }
    //     // Assuming `primes` array contains primes up to 100,000 or more
    //     const isPrime = primes.includes(num);
    //     setPrimeCheckResult(isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`);
    // };

//     const resetFields = () => {
//         setStartIndex('');
//         setEndIndex('');
//         setPrimeCheck('');
//         setPrimeCheckResult('');
//         setFilteredPrimes([]);
//         setError('');
//     };
//     const handlePrimeIndexCheck = () => {
//         const index = parseInt(primeIndex, 10);
//         if (isNaN(index) || index < 1 || index > primes.length) {
//             setPrimeAtIndex(`Please enter a valid index between 1 and ${primes.length}.`);
//             return;
//         }
//         const prime = primes[index - 1]; // Adjust for zero-based indexing
//         setPrimeAtIndex(`Prime number at index ${index} is ${prime}.`);
//     };

//     return (
//         <div className='main-prime'>
//             <div className='table-container'>
//                 <h3 className='title'>First 1000 Prime Numbers</h3>
//                 <TableWrapper
//                     data={first1000Primes}
//                     titles={titles}
//                     tableStyle="my-table"
//                 />
//             </div>
//             <div className='right-container'>
//                 <h3>Find Primes by Index Range</h3>
//                 <input
//                     className='my-input'
//                     type="number"
//                     placeholder="Start index"
//                     value={startIndex}
//                     onChange={e => setStartIndex(e.target.value)}
//                 />
//                 <input
//                     className='my-input'
//                     type="number"
//                     placeholder="End index"
//                     value={endIndex}
//                     onChange={e => setEndIndex(e.target.value)}
//                 />
//                 <button onClick={filterPrimesByIndexRange}>Filter Primes</button>
//                 {error && <div className='error'>{error}</div>}
//                 {/* <div>
//                     <h3>Check if a Number is Prime</h3>
//                     <input
//                         className='my-input'
//                         type="number"
//                         placeholder="Enter a number"
//                         value={primeCheck}
//                         onChange={e => setPrimeCheck(e.target.value)}
//                     />
//                     <button onClick={handlePrimeCheck}>Check Prime</button>
//                     {primeCheckResult && <div className='result'>{primeCheckResult}</div>}
//                 </div> */}
//                 <button onClick={resetFields} style={{ marginTop: '10px' }}>Reset</button>
//                 {filteredPrimes.length > 0 && (
//                     <TableWrapper
//                         data={filteredPrimes}
//                         titles={titles}
//                         tableStyle="my-table"
//                     />
//                 )}
//             </div>
//             <div className='right-most'>
//             <div>
//                     <h3>Check if a Number is Prime</h3>
//                     <input
//                         className='my-input'
//                         type="number"
//                         placeholder="Enter a number"
//                         value={primeCheck}
//                         onChange={e => setPrimeCheck(e.target.value)}
//                     />
//                     <button onClick={handlePrimeCheck}>Check Prime</button>
//                     {primeCheckResult && <div className='result'>{primeCheckResult}</div>}
//                 </div>
//                 <button onClick={resetFields} style={{ marginTop: '10px' }}>Reset</button>
//             </div>
//             <div>
//                         <h3>Get Prime by Index</h3>
//                         <input
//                             className='my-input'
//                             type="number"
//                             placeholder="Enter index"
//                             value={primeIndex}
//                             onChange={e => setPrimeIndex(e.target.value)}
//                         />
//                         <button onClick={handlePrimeIndexCheck}>Get Prime</button>
//                         {primeAtIndex && <div className='result'>{primeAtIndex}</div>}
//             </div>
//         </div>
//     );
// };

// export default PrimeTable;
// 'use client'
// import React, { useState } from 'react';
// import { primes } from '@/app/api/db/sequences/primes';
// import './sequences.css';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     const first1000Primes = primes.slice(0, 1000).map((prime, index) => ({ index: index + 1, prime }));
//     const titles = ["#", "Prime Number"];

//     const [startIndex, setStartIndex] = useState('');
//     const [endIndex, setEndIndex] = useState('');
//     const [primeCheck, setPrimeCheck] = useState('');
//     const [primeCheckResult, setPrimeCheckResult] = useState('');
//     const [primeIndex, setPrimeIndex] = useState('');
//     const [primeAtIndex, setPrimeAtIndex] = useState('');
//     const [filteredPrimes, setFilteredPrimes] = useState([]);
//     const [error, setError] = useState('');

//     const filterPrimesByIndexRange = () => {
//         // Existing range filter logic
//     };

//     const handlePrimeCheck = () => {
//         // Existing prime check logic
//     };

//     const handlePrimeIndexCheck = () => {
//         const index = parseInt(primeIndex, 10);
//         if (isNaN(index) || index < 1 || index > primes.length) {
//             setPrimeAtIndex(`Please enter a valid index between 1 and ${primes.length}.`);
//             return;
//         }
//         const prime = primes[index - 1]; // Adjust for zero-based indexing
//         setPrimeAtIndex(`Prime number at index ${index} is ${prime}.`);
//     };

//     const resetFields = () => {
//         setStartIndex('');
//         setEndIndex('');
//         setPrimeCheck('');
//         setPrimeCheckResult('');
//         setPrimeIndex('');
//         setPrimeAtIndex('');
//         setFilteredPrimes([]);
//         setError('');
//     };

//     return (
//         <div className='main-prime'>
//             <div className='table-container'>
//                 <h3 className='title'>First 1000 Prime Numbers</h3>
//                 <TableWrapper
//                     data={first1000Primes}
//                     titles={titles}
//                     tableStyle="my-table"
//                 />
//             </div>
//             <div className='right-container'>
//                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                     {/* Existing divs for range filtering and prime checking */}
//                     <div>
//                         <h3>Get Prime by Index</h3>
//                         <input
//                             className='my-input'
//                             type="number"
//                             placeholder="Enter index"
//                             value={primeIndex}
//                             onChange={e => setPrimeIndex(e.target.value)}
//                         />
//                         <button onClick={handlePrimeIndexCheck}>Get Prime</button>
//                         {primeAtIndex && <div className='result'>{primeAtIndex}</div>}
//                     </div>
//                 </div>
//                 <button onClick={resetFields} style={{ marginTop: '10px' }}>Reset All</button>
//                 {filteredPrimes.length > 0 && (
//                     <TableWrapper
//                         data={filteredPrimes}
//                         titles={titles}
//                         tableStyle="my-table"
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PrimeTable;
// 'use client'
// import React, { useState } from 'react';
// import { primes } from '@/app/api/db/sequences/primes'; // Ensure this path matches your project structure
// import './sequences.css';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     const first1000Primes = primes.slice(0, 1000).map((prime, index) => ({ index: index + 1, prime }));
//     const titles = ["#", "Prime Number"];

//     const [startIndex, setStartIndex] = useState('');
//     const [endIndex, setEndIndex] = useState('');
//     const [primeCheck, setPrimeCheck] = useState('');
//     const [primeCheckResult, setPrimeCheckResult] = useState('');
//     const [filteredPrimes, setFilteredPrimes] = useState([]);
//     const [primeIndex, setPrimeIndex] = useState('');
//     const [primeAtIndex, setPrimeAtIndex] = useState('');
//     const [error, setError] = useState('');

//     const filterPrimesByIndexRange = () => {
//         // Index range filtering logic
//     };

//     const handlePrimeCheck = () => {
//         // Prime check logic
//     };

    // const handlePrimeIndexCheck = () => {
    //     const index = parseInt(primeIndex, 10);
    //     if (isNaN(index) || index < 1 || index > primes.length) {
    //         setPrimeAtIndex(`Please enter a valid index between 1 and ${primes.length}.`);
    //         return;
    //     }
    //     const prime = primes[index - 1]; // Adjust for zero-based indexing
    //     setPrimeAtIndex(`Prime number at index ${index} is ${prime}.`);
    // };

//     const resetFields = () => {
//         setStartIndex('');
//         setEndIndex('');
//         setPrimeCheck('');
//         setPrimeCheckResult('');
//         setPrimeIndex('');
//         setPrimeAtIndex('');
//         setFilteredPrimes([]);
//         setError('');
//     };

//     return (
//         <div className='main-prime'>
//             <div className='table-container'>
//                 <h3 className='title'>First 1000 Prime Numbers</h3>
//                 <TableWrapper
//                     data={first1000Primes}
//                     titles={titles}
//                     tableStyle="my-table"
//                 />
//             </div>
//             <div className='right-container'>
//                 <h3>Find Primes by Index Range</h3>
//                 <input
//                     className='my-input'
//                     type="number"
//                     placeholder="Start index"
//                     value={startIndex}
//                     onChange={e => setStartIndex(e.target.value)}
//                 />
//                 <input
//                     className='my-input'
//                     type="number"
//                     placeholder="End index"
//                     value={endIndex}
//                     onChange={e => setEndIndex(e.target.value)}
//                 />
//                 <button onClick={filterPrimesByIndexRange}>Filter Primes</button>
//                 {error && <div className='error'>{error}</div>}
//                 {/* <div>
//                     <h3>Check if a Number is Prime</h3>
//                     <input
//                         className='my-input'
//                         type="number"
//                         placeholder="Enter a number"
//                         value={primeCheck}
//                         onChange={e => setPrimeCheck(e.target.value)}
//                     />
//                     <button onClick={handlePrimeCheck}>Check Prime</button>
//                     {primeCheckResult && <div className='result'>{primeCheckResult}</div>}
//                     <h3>Get Prime by Index</h3>
//                     <input
//                         className='my-input'
//                         type="number"
//                         placeholder="Enter index"
//                         value={primeIndex}
//                         onChange={e => setPrimeIndex(e.target.value)}
//                     />
//                     <button onClick={handlePrimeIndexCheck}>Get Prime</button>
//                     {primeAtIndex && <div className='result'>{primeAtIndex}</div>}
//                 </div>
//                 <button onClick={resetFields} style={{ marginTop: '10px' }}>Reset</button> */}
//                 {filteredPrimes.length > 0 && (
//                     <TableWrapper
//                         data={filteredPrimes}
//                         titles={titles}
//                         tableStyle="my-table"
//                     />
//                 )}
//             </div>
//             <div>

//             <div>
//                     {/* <h3>Check if a Number is Prime</h3>
//                     <input
//                         className='my-input'
//                         type="number"
//                         placeholder="Enter a number"
//                         value={primeCheck}
//                         onChange={e => setPrimeCheck(e.target.value)}
//                     />
//                     <button onClick={handlePrimeCheck}>Check Prime</button>
//                     {primeCheckResult && <div className='result'>{primeCheckResult}</div>} */}
//                     <div>
//                     <h3>Check if a Number is Prime</h3>
//                     <input
//                         className='my-input'
//                         type="number"
//                         placeholder="Enter a number"
//                         value={primeCheck}
//                         onChange={e => setPrimeCheck(e.target.value)}
//                     />
//                     <button onClick={handlePrimeCheck}>Check Prime</button>
//                     {primeCheckResult && <div className='result'>{primeCheckResult}</div>}
//                     <h3>Get Prime by Index</h3>
//                     <input
//                         className='my-input'
//                         type="number"
//                         placeholder="Enter index"
//                         value={primeIndex}
//                         onChange={e => setPrimeIndex(e.target.value)}
//                     />
//                     <button onClick={handlePrimeIndexCheck}>Get Prime</button>
//                     {primeAtIndex && <div className='result'>{primeAtIndex}</div>}
//                 </div>
//                 <button onClick={resetFields} style={{ marginTop: '10px' }}>Reset</button>
//             </div>
//         </div>
//     );
// };

// export default PrimeTable;
// 'use client'
// import React, { useState } from 'react';
// import { primes } from '@/app/api/db/sequences/primes'; // Ensure this path matches your project structure
// import './sequences.css';
// import TableWrapper from './TableWrapper';

// const PrimeTable = () => {
//     const first1000Primes = primes.slice(0, 1000).map((prime, index) => ({ index: index + 1, prime }));
//     const titles = ["#", "Prime Number"];

//     const [startIndex, setStartIndex] = useState('');
//     const [endIndex, setEndIndex] = useState('');
//     const [primeCheck, setPrimeCheck] = useState('');
//     const [primeCheckResult, setPrimeCheckResult] = useState('');
//     const [filteredPrimes, setFilteredPrimes] = useState([]);
//     const [primeIndex, setPrimeIndex] = useState('');
//     const [primeAtIndex, setPrimeAtIndex] = useState('');
//     const [error, setError] = useState('');

//     const filterPrimesByIndexRange = () => {
//         // Index range filtering logic
//     };

//     // const handlePrimeCheck = () => {
//     //     // Prime check logic
//     // };

//     const handlePrimeIndexCheck = () => {
//         // Prime retrieval by index logic
//     };

//     const resetFields = () => {
//         // Reset fields logic
//     };

//     return (
//         <div className='main-prime'>
//             <div className='table-container'>
//                 <h3 className='title'>First 1000 Prime Numbers</h3>
//                 <TableWrapper
//                     data={first1000Primes}
//                     titles={titles}
//                     tableStyle="my-table"
//                 />
//             </div>
//             <div className='index-range-container'>
//                 <h3>Find Primes by Index Range</h3>
//                 <input
//                     className='my-input'
//                     type="number"
//                     placeholder="Start index"
//                     value={startIndex}
//                     onChange={e => setStartIndex(e.target.value)}
//                 />
//                 <input
//                     className='my-input'
//                     type="number"
//                     placeholder="End index"
//                     value={endIndex}
//                     onChange={e => setEndIndex(e.target.value)}
//                 />
//                 <button onClick={filterPrimesByIndexRange}>Filter Primes</button>
//                 {error && <div className='error'>{error}</div>}
//                 {filteredPrimes.length > 0 && (
//                     <TableWrapper
//                         data={filteredPrimes}
//                         titles={titles}
//                         tableStyle="my-table"
//                     />
//                 )}
//             </div>
//             <div className='prime-check-container'>
//                 <h3>Check if a Number is Prime</h3>
//                 <input
//                     className='my-input'
//                     type="number"
//                     placeholder="Enter a number"
//                     value={primeCheck}
//                     onChange={e => setPrimeCheck(e.target.value)}
//                 />
//                 <button onClick={handlePrimeCheck}>Check Prime</button>
//                 {primeCheckResult && <div className='result'>{primeCheckResult}</div>}
                // <h3>Get Prime by Index</h3>
                // <input
                //     className='my-input'
                //     type="number"
                //     placeholder="Enter index"
                //     value={primeIndex}
                //     onChange={e => setPrimeIndex(e.target.value)}
                // />
                // <button onClick={handlePrimeIndexCheck}>Get Prime</button>
                // {primeAtIndex && <div className='result'>{primeAtIndex}</div>}
//             </div>
//             <button onClick={resetFields} style={{ position: 'absolute', right: '20px', bottom: '20px' }}>Reset All</button>
//         </div>
//     );
// };

// export default PrimeTable;

'use client'
import React, { useState, useEffect } from 'react';
import { primes } from '@/app/api/db/sequences/prime';
import './sequences.css';
import TableWrapper from './TableWrapper';
import article from '../../api/db/content/primes';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS
import remarkGfm from 'remark-gfm'


const article2 =`
Prime numbers are the building blocks of the integers, 
fascinating mathematicians for their unique properties and the pivotal 
role they play in various mathematical fields.  
 
Below is a structured overview \n 
 


focusing on definitions, methods, and special types of primes, supplemented with examples.

This is a paragraph with a [link](https://google.com).




**This is bold text**
## What Are Prime Numbers?

- **Definition**: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
- **Examples**: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...

## Identifying Prime Numbers

- **Small Numbers**: Check divisibility by integers up to the square root of the number.
  - *Example*: To check if 29 is prime, we only need to test divisibility by numbers up to √29 (which is about 5.4). Since 29 is not divisible by 2, 3, or 5, it is prime.
- **Sieve of Eratosthenes**:
  1. List numbers from 2 to your limit.
  2. Mark multiples of 2, then 3, 5, and so on up to the square root of the limit.
  3. Unmarked numbers are primes.
  - *Example*: Finding primes up to 10, we mark multiples of 2 (4, 6, 8, 10), then 3 (6, 9), leaving 2, 3, 5, 7 as primes.
- **Miller-Rabin Test** (probabilistic):
  - Useful for large numbers, providing a high probability that a number is prime.
  - *Example*: Not easily illustrated due to its complexity but is exceptionally efficient for large numbers.

## Prime Number Theorem

- Describes the asymptotic distribution of primes, showing that primes become less frequent as numbers increase but there are infinitely many.
- **Formula**: The number of primes less than $$\(n\)$$ is approximately $$\\frac{n}{\ln(n)}\.$$

## Special Types of Prime Numbers

- **Mersenne Primes**: Of the form $$\(2^p - 1\).$$
  - *Example*: $\(2^3 - 1 = 7\).$
- **Fermat Primes**: Of the form $\(2^{2^n} + 1\).$
  - *Example*: $$\(2^{2^2} + 1 = 17\).$$
- **Twin Primes**: Pairs of primes that are two units apart.
  - *Examples*: (3, 5), (11, 13), (17, 19).

## Applications of Prime Numbers

- **Cryptography**: RSA encryption relies on the difficulty of factoring large primes.
- **Number Theory**: The Fundamental Theorem of Arithmetic, stating every integer greater than 1 is either a prime or a product of primes in a unique way.

## Open Questions and Conjectures

- **Riemann Hypothesis**: Relates the distribution of prime numbers to the zeros of the Riemann zeta function.
- **Twin Prime Conjecture**: Suggests there are infinitely many pairs of twin primes.

## Conclusion

Prime numbers are a central topic in mathematics, offering a rich field of study from basic arithmetic to advanced number theory and cryptography. Through examples and structured explanations, we gain insight into their properties, methods of identification, special cases, and their indispensable role in mathematics and beyond. As we explore primes, we not only delve into the heart of mathematical inquiry but also encounter the beauty and mystery that fuel the pursuit of knowledge in this ancient and ever-evolving discipline.

`

const markdown = `
This is a \n 
_________________
_________________
..................

-----------------
                       
_________________

-----------------
\n  paragraph.

**This is bold text**\n
\n                     \n
                     \n
                     \n
                     \n
                     \n
                     \n
~~Crossed off~~
==Highlighted==
<mark>Highlighted</mark>

😊


// This is a code block\n
const a = 1;
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n
*************************************************\n

*************************************************
*************************************************
*************************************************
................................................
                                                    \n
                                                    \n
                                                    \n

 \|                                                   \|
 |\n
 |
 |
- And
- Here
- Is
- A
- List

~~A strikethrough text~~
|------------------------------|
new line
`;





const PrimeTable = () => {
    const initPrimes = primes.map((prime, index) => ({ index: index + 1, prime }));
    const first1000Primes = primes.slice(0, 100).map((prime, index) => ({ index: index + 1, prime }));
    const titles = ["#", "Prime Number"];
    
    const [startIndex, setStartIndex] = useState('');
    const [endIndex, setEndIndex] = useState('');
    const [filteredPrimes, setFilteredPrimes] = useState([]);
    const [error, setError] = useState('');
    const [primeCheck, setPrimeCheck] = useState('');
    const [primeCheckResult, setPrimeCheckResult] = useState('');
    const [primeIndex, setPrimeIndex] = useState('');
    const [primeAtIndex, setPrimeAtIndex] = useState('');
    const [presentation,setPresentation]=useState(1);



    const filterPrimesByIndexRange = () => {
        console.log('Filter primes worked')
        if (!startIndex || !endIndex) {
            setError('Please enter both start and end indexes.');
            return;
        }

        const start = parseInt(startIndex, 10);
        const end = parseInt(endIndex, 10);

        if (isNaN(start) || isNaN(end)) {
            setError('Both inputs must be numbers.');
            return;
        }
        if (start < 1 || end > 1000 || start >= end) {
            setError('Ensure the start index is less than the end index and both are between 1 and 1000.');
            return;
        }
        
        const filtered =initPrimes.slice(start - 1, end);
        setFilteredPrimes(filtered);
        console.log(filtered)
        setError('');
    };

    useEffect(()=>{
        console.log('Filtered Primes changed')
        console.log(filteredPrimes);
    },[filteredPrimes])

    const resetFields = () => {
        setStartIndex('');
        setEndIndex('');
        setFilteredPrimes([]);
        setError('');
    };

    const handlePrimeIndexCheck = () => {
        const index = parseInt(primeIndex, 10);
        if (isNaN(index) || index < 1 || index > primes.length) {
            setPrimeAtIndex(`Please enter a valid index between 1 and ${primes.length}.`);
            return;
        }
        const prime = primes[index - 1]; // Adjust for zero-based indexing
        setPrimeAtIndex(`Prime number at index ${index} is ${prime}.`);
    };

    const handlePrimeCheck = () => {
        const num = parseInt(primeCheck, 10);
        if (isNaN(num) || num < 2) {
            setPrimeCheckResult('Please enter a valid number greater than 1.');
            return;
        }
        // Assuming `primes` array contains primes up to 100,000 or more
        const isPrime = primes.includes(num);
        setPrimeCheckResult(isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`);
    };
    const resetPrimeAtIndexSearch=()=>{
        setPrimeIndex('')
        setPrimeAtIndex('')
    }
    const resetAll=()=>{
        resetFields();
        resetPrimeAtIndexSearch();
        setPrimeCheck('');
        setPrimeCheckResult('');


    }

    useEffect(()=>{
        resetAll();
    },[presentation])



    return (
        <>
        
        <div className='button-group'>
                <button onClick={()=>setPresentation(1)}>First 100 Primes</button>
                <button onClick={()=>setPresentation(2)}>Find Primes by Index Range</button>
                <button onClick={()=>setPresentation(3)}>Check if a Number is Prime</button>
                <button onClick={()=>setPresentation(4)}>Get Prime by Index</button>
            </div>
           
            
       
        <div className='main-prime'>
        <div className='left-container'>
               
               </div>
           { presentation===1&& 
           <div className='table-container'>
            
                <h3 className='title'>First 100 Prime Numbers</h3>
                <TableWrapper
                    data={first1000Primes}
                    titles={titles}
                    tableStyle="my-table"
                />
            </div>
            }
            { presentation===2&&
            <div>
             <h3>Find Primes by Index Range</h3>
             <div className='input-container'> 
             <label>Start Index</label>
             <input
             className='my-input'
                 type="number"
                 placeholder="Start index"
                 value={startIndex}
                 onChange={e => setStartIndex(e.target.value)}
             />
             </div>
             <div className='input-container'> 
              <label>End Index</label>
             <input
             className='my-input'
                 type="number"
                 placeholder="End index"
                 value={endIndex}
                 onChange={e => setEndIndex(e.target.value)}
             />
             </div>
             <button onClick={()=>filterPrimesByIndexRange()}>Filter Primes</button>
             {(startIndex||endIndex) && <button onClick={resetFields} 
             style={{ marginLeft: '10px',backgroundColor:'red' }}>Reset</button>}
             {error && <div className='error'>{error}</div>}
             {filteredPrimes.length > 0 && (
                 <TableWrapper
                     data={filteredPrimes}
                     titles={titles}
                     tableStyle="my-table"
                 />
             )}
            </div>
            }
            {presentation===3 &&
            <div className='prime-check-container'>
            <h3>Check if a Number is Prime</h3>
            <input
                               className='my-input'
                type="number"
                placeholder="Enter a number"
               value={primeCheck}
              onChange={e => setPrimeCheck(e.target.value)}
            />
             <button onClick={handlePrimeCheck}>Check Prime</button>
             {primeCheck&&<button 
             onClick={()=>setPrimeCheck('')}
             style={{backgroundColor:'red'}}>Reset</button>}
            {primeCheckResult && <div className='result'>{primeCheckResult}</div>}



            </div>
            
            }

           {presentation===4 &&
            <div>
            <h3>Get Prime by Index</h3>
            <input
                className='my-input'
                type="number"
                placeholder="Enter index"
                value={primeIndex}
                onChange={e => setPrimeIndex(e.target.value)}
            />
            <button onClick={handlePrimeIndexCheck}>Get Prime</button>
           { primeIndex&&<button onClick={()=>resetPrimeAtIndexSearch()} 
            style={{backgroundColor:'red'}}>Reset</button>}
            {primeAtIndex && <div className='result'>{primeAtIndex}</div>}
            </div>
            }

            <div className='right-container'>
            <ReactMarkdown
                
                children={article}
                remarkPlugins={[remarkMath,remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                />
               
            </div>
            
            </div>   
            
            
       
        </>
    );
};

export default PrimeTable;





