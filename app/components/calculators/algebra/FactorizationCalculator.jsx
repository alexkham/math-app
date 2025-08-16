
// // // import { useState } from 'react';


// // // const FactorizationCalculator = () => {
// // //   const [number, setNumber] = useState('');
// // //   const [factors, setFactors] = useState([]);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (number) {
// // //       setFactors(factorize(number));
// // //     }
// // //   };

// // //   // utils/factorize.js
// // //  const factorize = (number) => {
// // //     const factors = [];
// // //     for (let i = 1; i <= Math.sqrt(number); i++) {
// // //       if (number % i === 0) {
// // //         factors.push(i);
// // //         if (i !== number / i) {
// // //           factors.push(number / i);
// // //         }
// // //       }
// // //     }
// // //     return factors.sort((a, b) => a - b);
// // //   };
  

// // //   return (
// // //     <div>
// // //       <h1>Factorization Calculator</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="number"
// // //           value={number}
// // //           onChange={(e) => setNumber(e.target.value)}
// // //           placeholder="Enter a number"
// // //         />
// // //         <button type="submit">Factorize</button>
// // //       </form>
// // //       {factors.length > 0 && (
// // //         <div>
// // //           <h2>Factors:</h2>
// // //           <ul>
// // //             {factors.map((factor) => (
// // //               <li key={factor}>{factor}</li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FactorizationCalculator;


// // // import { useState } from 'react';
// // // import styles from './FactorizationCalculator.module.css';

// // // const FactorizationCalculator = () => {
// // //   const [number, setNumber] = useState('');
// // //   const [factors, setFactors] = useState([]);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (number) {
// // //       setFactors(factorize(number));
// // //     }
// // //   };

// // //   // Factorization function
// // //   const factorize = (number) => {
// // //     const factors = [];
// // //     for (let i = 1; i <= Math.sqrt(number); i++) {
// // //       if (number % i === 0) {
// // //         factors.push(i);
// // //         if (i !== number / i) {
// // //           factors.push(number / i);
// // //         }
// // //       }
// // //     }
// // //     return factors.sort((a, b) => a - b);
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <h1 className={styles.h1}>Factorization Calculator</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="number"
// // //           value={number}
// // //           onChange={(e) => setNumber(e.target.value)}
// // //           placeholder="Enter a number"
// // //           className={styles.input}
// // //         />
// // //         <button type="submit" className={styles.button}>Factorize</button>
// // //       </form>
// // //       {factors.length > 0 && (
// // //         <div className={styles.factors}>
// // //           <h2>Factors:</h2>
// // //           <ul>
// // //             {factors.map((factor) => (
// // //               <li key={factor} className={styles.li}>{factor}</li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FactorizationCalculator;


// // import { useState } from 'react';
// // import styles from './FactorizationCalculator.module.css';

// // const FactorizationCalculator = () => {
// //   const [number, setNumber] = useState('');
// //   const [factors, setFactors] = useState([]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (number) {
// //       setFactors(factorize(number));
// //     }
// //   };

// //   const handleReset = () => {
// //     setNumber('');
// //     setFactors([]);
// //   };

// //   // Factorization function
// //   const factorize = (number) => {
// //     const factors = [];
// //     for (let i = 1; i <= Math.sqrt(number); i++) {
// //       if (number % i === 0) {
// //         factors.push(i);
// //         if (i !== number / i) {
// //           factors.push(number / i);
// //         }
// //       }
// //     }
// //     return factors.sort((a, b) => a - b);
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h1 className={styles.heading}>Factorization Calculator</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="number"
// //           value={number}
// //           onChange={(e) => setNumber(e.target.value)}
// //           placeholder="Enter a number"
// //           className={styles.input}
// //         />
// //         <div>
// //           <button type="submit" className={styles.button}>Factorize</button>
// //           <button type="button" onClick={handleReset} className={styles.resetButton}>Reset</button>
// //         </div>
// //       </form>
// //       {factors.length > 0 && (
// //         <div className={styles.factors}>
// //           <h2>Factors:</h2>
// //           <ul>
// //             {factors.map((factor) => (
// //               <li key={factor} className={styles.li}>{factor}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default FactorizationCalculator;


// import { useState } from 'react';
// import styles from './FactorizationCalculator.module.css';

// const FactorizationCalculator = () => {
//   const [number, setNumber] = useState('');
//   const [factors, setFactors] = useState([]);
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (number === '') {
//       setError('Please enter a number.');
//       setFactors([]);
//       return;
//     }
    
//     const num = parseFloat(number);
//     if (isNaN(num)) {
//       setError('Please enter a valid number.');
//       setFactors([]);
//       return;
//     }
    
//     setError('');
//     setFactors(factorize(num));
//   };

//   const handleReset = () => {
//     setNumber('');
//     setFactors([]);
//     setError('');
//   };

//   // Factorization function
//   const factorize = (number) => {
//     if (number === 0) {
//       return [0];
//     }
    
//     const factors = [];
//     for (let i = 1; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         factors.push(i);
//         if (i !== number / i) {
//           factors.push(number / i);
//         }
//       }
//     }
//     return factors.sort((a, b) => a - b);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Factorization Calculator</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           placeholder="Enter a number"
//           className={styles.input}
//         />
//         <div>
//           <button type="submit" className={styles.button}>Factorize</button>
//           <button type="button" onClick={handleReset} className={styles.resetButton}>Reset</button>
//         </div>
//       </form>
//       {error && <p className={styles.error}>{error}</p>}
//       {factors.length > 0 && (
//         <div className={styles.factors}>
//           <h2>Factors:</h2>
//           <ul>
//             {factors.map((factor) => (
//               <li key={factor} className={styles.li}>{factor}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FactorizationCalculator;


import { useState } from 'react';
import styles from './FactorizationCalculator.module.css';

const FactorizationCalculator = () => {
  const [number, setNumber] = useState('');
  const [factors, setFactors] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number === '') {
      setError('Please enter a number.');
      setFactors([]);
      return;
    }

    const num = parseFloat(number);
    if (isNaN(num)) {
      setError('Please enter a valid number.');
      setFactors([]);
      return;
    }

    setError('');
    setFactors(factorize(num));
  };

  const handleReset = () => {
    setNumber('');
    setFactors([]);
    setError('');
  };

  // Factorization function
  const factorize = (number) => {
    if (number === 0) {
      return [0];
    }

    const absNumber = Math.abs(number);
    const factors = [];
    for (let i = 1; i <= Math.sqrt(absNumber); i++) {
      if (absNumber % i === 0) {
        factors.push(i, -i);
        if (i !== absNumber / i) {
          factors.push(absNumber / i, -(absNumber / i));
        }
      }
    }
    return factors.sort((a, b) => a - b);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Factorization Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className={styles.input}
        />
        <div>
          <button type="submit" className={styles.button}>Factorize</button>
          <button type="button" onClick={handleReset} className={styles.resetButton}>Reset</button>
        </div>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {factors.length > 0 && (
        <div className={styles.factors}>
          <h2>Factors:</h2>
          <ul>
            {factors.map((factor) => (
              <li key={factor} className={styles.li}>{factor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FactorizationCalculator;
