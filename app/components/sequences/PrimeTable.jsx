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
import React, { useState } from 'react';
import { primes } from '@/app/api/db/sequences/primes';
import './sequences.css';
import TableWrapper from './TableWrapper';

const PrimeTable = () => {
    const first1000Primes = primes.slice(0, 1000).map((prime, index) => ({ index: index + 1, prime }));
    const titles = ["#", "Prime Number"];

    const [startIndex, setStartIndex] = useState('');
    const [endIndex, setEndIndex] = useState('');
    const [filteredPrimes, setFilteredPrimes] = useState([]);
    const [error, setError] = useState('');
    const [primeCheck, setPrimeCheck] = useState('');
    const [primeCheckResult, setPrimeCheckResult] = useState('');
    const [primeIndex, setPrimeIndex] = useState('');
    const [primeAtIndex, setPrimeAtIndex] = useState('');

    const filterPrimesByIndexRange = () => {
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

        const filtered = first1000Primes.slice(start - 1, end);
        setFilteredPrimes(filtered);
        setError('');
    };

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

    return (
        <div className='main-prime'>
            <div className='table-container'>
                <h3 className='title'>First 1000 Prime Numbers</h3>
                <TableWrapper
                    data={first1000Primes}
                    titles={titles}
                    tableStyle="my-table"
                />
            </div>
            <div className='right-container'>
                <h3>Find Primes by Index Range</h3>
                <input
                className='my-input'
                    type="number"
                    placeholder="Start index"
                    value={startIndex}
                    onChange={e => setStartIndex(e.target.value)}
                />
                <input
                className='my-input'
                    type="number"
                    placeholder="End index"
                    value={endIndex}
                    onChange={e => setEndIndex(e.target.value)}
                />
                <button onClick={filterPrimesByIndexRange}>Filter Primes</button>
                <button onClick={resetFields} style={{ marginLeft: '10px' }}>Reset</button>
                {error && <div className='error'>{error}</div>}
                {filteredPrimes.length > 0 && (
                    <TableWrapper
                        data={filteredPrimes}
                        titles={titles}
                        tableStyle="my-table"
                    />
                )}
            </div>
            <div>
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
                {primeCheckResult && <div className='result'>{primeCheckResult}</div>}
                </div>
                <h3>Get Prime by Index</h3>
                <input
                    className='my-input'
                    type="number"
                    placeholder="Enter index"
                    value={primeIndex}
                    onChange={e => setPrimeIndex(e.target.value)}
                />
                <button onClick={handlePrimeIndexCheck}>Get Prime</button>
                {primeAtIndex && <div className='result'>{primeAtIndex}</div>}
                
            </div>
        </div>
    );
};

export default PrimeTable;





