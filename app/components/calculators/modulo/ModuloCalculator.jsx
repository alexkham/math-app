// import { useState } from 'react';

// export default function ModuloCalculator() {
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');
//   const [c, setC] = useState('');
//   const [operation, setOperation] = useState('basic');
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');

//   const operations = [
//     { id: 'basic', name: 'Basic Modulo (a % b)', inputs: 2 },
//     { id: 'negative', name: 'Negative Number Modulo', inputs: 2 },
//     { id: 'float', name: 'Decimal/Float Modulo', inputs: 2 },
//     { id: 'add', name: 'Modular Addition (a + b) % m', inputs: 3 },
//     { id: 'subtract', name: 'Modular Subtraction (a - b) % m', inputs: 3 },
//     { id: 'multiply', name: 'Modular Multiplication (a * b) % m', inputs: 3 },
//     { id: 'divide', name: 'Modular Division (a / b) % m', inputs: 3 },
//     { id: 'exponent', name: 'Modular Exponentiation (a ^ b) % m', inputs: 3 },
//     { id: 'inverse', name: 'Modular Inverse (a^-1 mod m)', inputs: 2 },
//     { id: 'congruence', name: 'Check Congruence (a ≡ b (mod m))', inputs: 3 },
//     { id: 'gcd', name: 'GCD (Greatest Common Divisor)', inputs: 2 },
//     { id: 'lcm', name: 'LCM (Least Common Multiple)', inputs: 2 },
//     { id: 'coprime', name: 'Check if Coprime (Relatively Prime)', inputs: 2 },
//   ];

//   const currentOperation = operations.find(op => op.id === operation);

//   // GCD calculation (Euclidean algorithm)
//   const calculateGCD = (x, y) => {
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       const temp = y;
//       y = x % y;
//       x = temp;
//     }
//     return x;
//   };

//   // LCM calculation using GCD
//   const calculateLCM = (x, y) => {
//     return Math.abs(x * y) / calculateGCD(x, y);
//   };

//   // Extended Euclidean Algorithm for modular inverse
//   const extendedGCD = (a, b) => {
//     if (a === 0) {
//       return { gcd: b, x: 0, y: 1 };
//     }

//     const { gcd, x: x1, y: y1 } = extendedGCD(b % a, a);
//     const x = y1 - Math.floor(b / a) * x1;
//     const y = x1;

//     return { gcd, x, y };
//   };

//   // Modular exponentiation (fast exponentiation algorithm)
//   const modPow = (base, exponent, modulus) => {
//     if (modulus === 1) return 0;
    
//     let result = 1;
//     base = base % modulus;
    
//     while (exponent > 0) {
//       if (exponent % 2 === 1) {
//         result = (result * base) % modulus;
//       }
//       exponent = Math.floor(exponent / 2);
//       base = (base * base) % modulus;
//     }
    
//     return result;
//   };

//   // Calculate modular inverse
//   const resetCalculator = () => {
//     setA('');
//     setB('');
//     setC('');
//     setResult(null);
//     setError('');
//   };


//   // Calculation logic for all operations
//   const calculateResult = () => {
//     setError('');
//     setResult(null);

//     const numA = parseFloat(a);
//     const numB = parseFloat(b);
//     const numC = parseFloat(c);

//     // Input validation
//     if (isNaN(numA)) {
//       setError('First number must be a valid number');
//       return;
//     }

//     if ((currentOperation?.inputs >= 2) && isNaN(numB)) {
//       setError('Second number/modulus must be a valid number');
//       return;
//     }

//     if (currentOperation?.inputs === 3 && isNaN(numC)) {
//       setError('Modulus must be a valid number');
//       return;
//     }

//     // Check for zero modulus
//     if ((operation === 'basic' || operation === 'inverse') && numB === 0) {
//       setError('Modulus cannot be zero');
//       return;
//     }

//     if (currentOperation?.inputs === 3 && numC === 0) {
//       setError('Modulus cannot be zero');
//       return;
//     }

//     try {
//       switch (operation) {
//         case 'basic':
//           // Basic modulo: a % b
//           setResult(((numA % numB) + numB) % numB);
//           break;

//         case 'negative':
//           // Handling negative numbers in modulo
//           const negResult = ((numA % numB) + numB) % numB;
//           setResult(`${numA} mod ${numB} = ${negResult}`);
//           break;

//         case 'float':
//           // Handling decimal/floating point numbers
//           const decimalResult = numA - numB * Math.floor(numA / numB);
//           setResult(`${numA} mod ${numB} = ${decimalResult}`);
//           break;

//         case 'add':
//           // Modular addition: (a + b) % m
//           setResult(((numA + numB) % numC + numC) % numC);
//           break;

//         case 'subtract':
//           // Modular subtraction: (a - b) % m
//           setResult(((numA - numB) % numC + numC) % numC);
//           break;

//         case 'multiply':
//           // Modular multiplication: (a * b) % m
//           setResult(((numA * numB) % numC + numC) % numC);
//           break;

//         case 'divide':
//           // Modular division: (a * inv(b)) % m
//           const inverse = modInverse(numB, numC);
//           if (inverse === null) {
//             setError(`${numB} has no modular inverse modulo ${numC}`);
//             return;
//           }
//           setResult(((numA * inverse) % numC + numC) % numC);
//           break;

//         case 'exponent':
//           // Modular exponentiation: (a ^ b) % m
//           if (numB < 0) {
//             setError('Exponent must be non-negative');
//             return;
//           }
//           if (!Number.isInteger(numB)) {
//             setError('Exponent must be an integer');
//             return;
//           }
//           setResult(modPow(numA, numB, numC));
//           break;

//         case 'inverse':
//           // Modular inverse: a^-1 mod m
//           const modInv = modInverse(numA, numB);
//           if (modInv === null) {
//             setError(`${numA} has no modular inverse modulo ${numB}`);
//             return;
//           }
//           setResult(modInv);
//           break;

//         case 'congruence':
//           // Check congruence: a ≡ b (mod m)
//           const isCongruent = ((numA % numC) + numC) % numC === ((numB % numC) + numC) % numC;
//           setResult(isCongruent ? `${numA} ≡ ${numB} (mod ${numC})` : `${numA} ≢ ${numB} (mod ${numC})`);
//           break;

//         case 'gcd':
//           // Greatest Common Divisor
//           setResult(calculateGCD(numA, numB));
//           break;

//         case 'lcm':
//           // Least Common Multiple
//           setResult(calculateLCM(numA, numB));
//           break;

//         case 'coprime':
//           // Check if numbers are coprime
//           const gcd = calculateGCD(numA, numB);
//           setResult(gcd === 1 ? 
//             `${numA} and ${numB} are coprime` : 
//             `${numA} and ${numB} are not coprime (GCD = ${gcd})`);
//           break;

//         default:
//           setError('Unknown operation');
//       }
//     } catch (err) {
//       setError(`Calculation error: ${err.message}`);
//     }
//   };

//   return (
//     <div style={{ 
//       maxWidth: "500px", 
//       margin: "0 auto", 
//       padding: "20px", 
//       backgroundColor: "#f7f8fc",
//       borderRadius: "10px",
//       boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//       fontFamily: "Arial, sans-serif"
//     }}>
//       {/* <h4 style={{ 
//         fontSize: "24px", 
//         fontWeight: "bold", 
//         marginBottom: "20px",
//         color: "#333",
//         textAlign: "center"
//       }}>
//        Choose Operation and Input Numbers
//       </h4> */}
      
//       <div>
//         <div style={{ marginBottom: "16px" }}>
//           <label style={{ 
//             display: "block", 
//             fontSize: "14px", 
//             fontWeight: "500", 
//             marginBottom: "6px",
//             color: "#444"
//           }}>
//             Operation
//           </label>
//           <select
//             value={operation}
//             onChange={(e) => setOperation(e.target.value)}
//             style={{ 
//               width: "100%", 
//               padding: "10px", 
//               border: "1px solid #ddd", 
//               borderRadius: "6px",
//               backgroundColor: "white"
//             }}
//           >
//             {operations.map((op) => (
//               <option key={op.id} value={op.id}>
//                 {op.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div style={{ marginBottom: "16px" }}>
//           <label style={{ 
//             display: "block", 
//             fontSize: "14px", 
//             fontWeight: "500", 
//             marginBottom: "6px",
//             color: "#444"
//           }}>
//             First Number (a)
//           </label>
//           <input
//             type="number"
//             value={a}
//             onChange={(e) => setA(e.target.value)}
//             placeholder="Enter first number"
//             style={{ 
//               width: "100%", 
//               padding: "10px", 
//               border: "1px solid #ddd", 
//               borderRadius: "6px",
//               backgroundColor: "white"
//             }}
//             step="any"
//           />
//         </div>

//         {(currentOperation?.inputs >= 2) && (
//           <div style={{ marginBottom: "16px" }}>
//             <label style={{ 
//               display: "block", 
//               fontSize: "14px", 
//               fontWeight: "500", 
//               marginBottom: "6px",
//               color: "#444"
//             }}>
//               {operation === 'basic' || operation === 'inverse' 
//                 ? 'Modulus (m)' 
//                 : 'Second Number (b)'}
//             </label>
//             <input
//               type="number"
//               value={b}
//               onChange={(e) => setB(e.target.value)}
//               placeholder={operation === 'basic' || operation === 'inverse' 
//                 ? 'Enter modulus' 
//                 : 'Enter second number'}
//               style={{ 
//                 width: "100%", 
//                 padding: "10px", 
//                 border: "1px solid #ddd", 
//                 borderRadius: "6px",
//                 backgroundColor: "white"
//               }}
//               step="any"
//             />
//           </div>
//         )}

//         {currentOperation?.inputs === 3 && (
//           <div style={{ marginBottom: "16px" }}>
//             <label style={{ 
//               display: "block", 
//               fontSize: "14px", 
//               fontWeight: "500", 
//               marginBottom: "6px",
//               color: "#444"
//             }}>
//               Modulus (m)
//             </label>
//             <input
//               type="number"
//               value={c}
//               onChange={(e) => setC(e.target.value)}
//               placeholder="Enter modulus"
//               style={{ 
//                 width: "100%", 
//                 padding: "10px", 
//                 border: "1px solid #ddd", 
//                 borderRadius: "6px",
//                 backgroundColor: "white"
//               }}
//               step="any"
//             />
//           </div>
//         )}

//         <button
//           onClick={calculateResult}
//           style={{ 
//             width: "100%", 
//             backgroundColor: "#4a6cf7", 
//             color: "white", 
//             padding: "12px", 
//             border: "none", 
//             borderRadius: "6px",
//             fontSize: "16px",
//             fontWeight: "500",
//             cursor: "pointer",
//             transition: "background-color 0.3s",
//             marginTop: "10px"
//           }}
//           onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#3a5ce7"}
//           onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#4a6cf7"}
//         >
//           Calculate
//         </button>

//         <button
//           onClick={resetCalculator}
//           style={{ 
//             width: "100%", 
//             backgroundColor: "#f44336", 
//             color: "white", 
//             padding: "12px", 
//             border: "none", 
//             borderRadius: "6px",
//             fontSize: "16px",
//             fontWeight: "500",
//             cursor: "pointer",
//             transition: "background-color 0.3s",
//             marginTop: "10px"
//           }}
//           onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#d32f2f"}
//           onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#f44336"}
//         >
//           Reset
//         </button>
//       </div>

//       {error && (
//         <div style={{ 
//           marginTop: "16px", 
//           padding: "12px", 
//           backgroundColor: "#ffe8e8", 
//           color: "#d32f2f",
//           borderRadius: "6px",
//           fontSize: "14px"
//         }}>
//           {error}
//         </div>
//       )}

//       {result !== null && (
//         <div style={{ marginTop: "20px" }}>
//           <h3 style={{ 
//             fontSize: "18px", 
//             fontWeight: "500",
//             marginBottom: "8px",
//             color: "#333"
//           }}>
//             Result:
//           </h3>
//           <div style={{ 
//             padding: "14px", 
//             backgroundColor: "#e8f4ff", 
//             borderRadius: "6px",
//             fontSize: "18px",
//             color: "#0062cc"
//           }}>
//             {result.toString()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from 'react';

// Sample explanations object - In actual implementation, this would be passed as a prop
const sampleExplanations = {
  basic: {
    title: "Basic Modulo",
    content: "The modulo operation finds the remainder after division of one number by another. If a = bq + r where 0 ≤ r < b, then a mod b = r.",
    example: "Example: 17 % 5 = 2 because 17 = 5×3 + 2"
  },
  negative: {
    title: "Negative Number Handling",
    content: "When dealing with negative numbers in modular arithmetic, we add the modulus to ensure the result is in the range [0, m-1].",
    example: "Example: -7 % 5 = 3 because -7 = 5×(-2) + 3"
  },
  float: {
    title: "Decimal/Float Modulo",
    content: "For floating-point numbers, modulo is defined as a - b×floor(a/b).",
    example: "Example: 7.5 % 2.2 = 0.9 because 7.5 = 2.2×3 + 0.9"
  },
  add: {
    title: "Modular Addition",
    content: "Modular addition performs (a + b) % m, ensuring the result remains within the modular system.",
    example: "Example: (8 + 7) % 10 = 5"
  },
  subtract: {
    title: "Modular Subtraction",
    content: "Modular subtraction performs (a - b) % m, adding m if necessary to ensure a positive result.",
    example: "Example: (3 - 7) % 10 = 6 because (3 - 7) = -4, and (-4 + 10) = 6"
  },
  multiply: {
    title: "Modular Multiplication",
    content: "Modular multiplication computes (a × b) % m.",
    example: "Example: (6 × 7) % 10 = 2"
  },
  divide: {
    title: "Modular Division",
    content: "Modular division is defined as (a × b⁻¹) % m, where b⁻¹ is the modular inverse of b under modulus m. This only works when b and m are coprime.",
    example: "Example: For 8 ÷ 3 mod 10, we first find 3⁻¹ mod 10 = 7, then (8 × 7) % 10 = 56 % 10 = 6"
  },
  exponent: {
    title: "Modular Exponentiation",
    content: "Modular exponentiation efficiently calculates a^b mod m without computing the full value of a^b first.",
    example: "Example: 4^13 % 497 = 445"
  },
  inverse: {
    title: "Modular Inverse",
    content: "The modular inverse of a under modulus m is a number x such that (a × x) % m = 1. It exists only when a and m are coprime.",
    example: "Example: 3⁻¹ mod 10 = 7 because (3 × 7) % 10 = 21 % 10 = 1"
  },
  congruence: {
    title: "Modular Congruence",
    content: "Two numbers a and b are congruent modulo m if they have the same remainder when divided by m. We write a ≡ b (mod m).",
    example: "Example: 17 ≡ 2 (mod 5) because both 17 and 2 have remainder 2 when divided by 5"
  },
  gcd: {
    title: "Greatest Common Divisor",
    content: "The GCD is the largest positive integer that divides both numbers without a remainder.",
    example: "Example: GCD(48, 18) = 6"
  },
  lcm: {
    title: "Least Common Multiple",
    content: "The LCM is the smallest positive integer that is divisible by both numbers.",
    example: "Example: LCM(4, 6) = 12"
  },
  coprime: {
    title: "Coprime (Relatively Prime)",
    content: "Two integers are coprime if their only common factor is 1, meaning their GCD is 1.",
    example: "Example: 25 and 36 are coprime (GCD = 1)"
  }
};

export default function ModuloCalculator({ explanations = sampleExplanations }) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [operation, setOperation] = useState('basic');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const operations = [
    { id: 'basic', name: 'Basic Modulo (a % b)', inputs: 2 },
    { id: 'negative', name: 'Negative Number Modulo', inputs: 2 },
    { id: 'float', name: 'Decimal/Float Modulo', inputs: 2 },
    { id: 'add', name: 'Modular Addition (a + b) % m', inputs: 3 },
    { id: 'subtract', name: 'Modular Subtraction (a - b) % m', inputs: 3 },
    { id: 'multiply', name: 'Modular Multiplication (a * b) % m', inputs: 3 },
    { id: 'divide', name: 'Modular Division (a / b) % m', inputs: 3 },
    { id: 'exponent', name: 'Modular Exponentiation (a ^ b) % m', inputs: 3 },
    { id: 'inverse', name: 'Modular Inverse (a^-1 mod m)', inputs: 2 },
    { id: 'congruence', name: 'Check Congruence (a ≡ b (mod m))', inputs: 3 },
    { id: 'gcd', name: 'GCD (Greatest Common Divisor)', inputs: 2 },
    { id: 'lcm', name: 'LCM (Least Common Multiple)', inputs: 2 },
    { id: 'coprime', name: 'Check if Coprime (Relatively Prime)', inputs: 2 },
  ];

  const currentOperation = operations.find(op => op.id === operation);
  const currentExplanation = explanations[operation] || {
    title: "Operation Explanation",
    content: "No explanation available for this operation.",
    example: ""
  };

  // GCD calculation (Euclidean algorithm)
  const calculateGCD = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  };

  // LCM calculation using GCD
  const calculateLCM = (x, y) => {
    return Math.abs(x * y) / calculateGCD(x, y);
  };

  // Extended Euclidean Algorithm for modular inverse
  const extendedGCD = (a, b) => {
    if (a === 0) {
      return { gcd: b, x: 0, y: 1 };
    }

    const { gcd, x: x1, y: y1 } = extendedGCD(b % a, a);
    const x = y1 - Math.floor(b / a) * x1;
    const y = x1;

    return { gcd, x, y };
  };

  // Modular exponentiation (fast exponentiation algorithm)
  const modPow = (base, exponent, modulus) => {
    if (modulus === 1) return 0;
    
    let result = 1;
    base = base % modulus;
    
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulus;
    }
    
    return result;
  };

  // Calculate modular inverse
  const modInverse = (a, m) => {
    a = ((a % m) + m) % m; // Handle negative numbers
    const { gcd, x } = extendedGCD(a, m);
    
    if (gcd !== 1) {
      return null; // No modular inverse exists
    } else {
      return ((x % m) + m) % m;
    }
  };

  const resetCalculator = () => {
    setA('');
    setB('');
    setC('');
    setResult(null);
    setError('');
  };

  // Calculation logic for all operations
  const calculateResult = () => {
    setError('');
    setResult(null);

    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    // Input validation
    if (isNaN(numA)) {
      setError('First number must be a valid number');
      return;
    }

    if ((currentOperation?.inputs >= 2) && isNaN(numB)) {
      setError('Second number/modulus must be a valid number');
      return;
    }

    if (currentOperation?.inputs === 3 && isNaN(numC)) {
      setError('Modulus must be a valid number');
      return;
    }

    // Check for zero modulus
    if ((operation === 'basic' || operation === 'inverse') && numB === 0) {
      setError('Modulus cannot be zero');
      return;
    }

    if (currentOperation?.inputs === 3 && numC === 0) {
      setError('Modulus cannot be zero');
      return;
    }

    try {
      switch (operation) {
        case 'basic':
          // Basic modulo: a % b
          setResult(((numA % numB) + numB) % numB);
          break;

        case 'negative':
          // Handling negative numbers in modulo
          const negResult = ((numA % numB) + numB) % numB;
          setResult(`${numA} mod ${numB} = ${negResult}`);
          break;

        case 'float':
          // Handling decimal/floating point numbers
          const decimalResult = numA - numB * Math.floor(numA / numB);
          setResult(`${numA} mod ${numB} = ${decimalResult}`);
          break;

        case 'add':
          // Modular addition: (a + b) % m
          setResult(((numA + numB) % numC + numC) % numC);
          break;

        case 'subtract':
          // Modular subtraction: (a - b) % m
          setResult(((numA - numB) % numC + numC) % numC);
          break;

        case 'multiply':
          // Modular multiplication: (a * b) % m
          setResult(((numA * numB) % numC + numC) % numC);
          break;

        case 'divide':
          // Modular division: (a * inv(b)) % m
          const inverse = modInverse(numB, numC);
          if (inverse === null) {
            setError(`${numB} has no modular inverse modulo ${numC}`);
            return;
          }
          setResult(((numA * inverse) % numC + numC) % numC);
          break;

        case 'exponent':
          // Modular exponentiation: (a ^ b) % m
          if (numB < 0) {
            setError('Exponent must be non-negative');
            return;
          }
          if (!Number.isInteger(numB)) {
            setError('Exponent must be an integer');
            return;
          }
          setResult(modPow(numA, numB, numC));
          break;

        case 'inverse':
          // Modular inverse: a^-1 mod m
          const modInv = modInverse(numA, numB);
          if (modInv === null) {
            setError(`${numA} has no modular inverse modulo ${numB}`);
            return;
          }
          setResult(modInv);
          break;

        case 'congruence':
          // Check congruence: a ≡ b (mod m)
          const isCongruent = ((numA % numC) + numC) % numC === ((numB % numC) + numC) % numC;
          setResult(isCongruent ? `${numA} ≡ ${numB} (mod ${numC})` : `${numA} ≢ ${numB} (mod ${numC})`);
          break;

        case 'gcd':
          // Greatest Common Divisor
          setResult(calculateGCD(numA, numB));
          break;

        case 'lcm':
          // Least Common Multiple
          setResult(calculateLCM(numA, numB));
          break;

        case 'coprime':
          // Check if numbers are coprime
          const gcd = calculateGCD(numA, numB);
          setResult(gcd === 1 ? 
            `${numA} and ${numB} are coprime` : 
            `${numA} and ${numB} are not coprime (GCD = ${gcd})`);
          break;

        default:
          setError('Unknown operation');
      }
    } catch (err) {
      setError(`Calculation error: ${err.message}`);
    }
  };

  return (
    <div style={{ 
      display: "flex",
      maxWidth: "1200px", 
      margin: "0 auto",
      fontFamily: "Arial, sans-serif"
    }}>
      {/* Calculator Section (2/3 width) */}
      <div style={{
        flex: "2",
        padding: "20px",
        backgroundColor: "#f7f8fc",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        marginRight: "15px"
      }}>
        {/* <h2 style={{ 
          fontSize: "22px", 
          fontWeight: "bold", 
          marginBottom: "20px",
          color: "#333",
          textAlign: "center"
        }}>
          Modulo Calculator
        </h2> */}
        
        <div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ 
              display: "block", 
              fontSize: "14px", 
              fontWeight: "500", 
              marginBottom: "6px",
              color: "#444"
            }}>
              Operation
            </label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              style={{ 
                width: "100%", 
                padding: "10px", 
                border: "1px solid #ddd", 
                borderRadius: "6px",
                backgroundColor: "white"
              }}
            >
              {operations.map((op) => (
                <option key={op.id} value={op.id}>
                  {op.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ 
              display: "block", 
              fontSize: "14px", 
              fontWeight: "500", 
              marginBottom: "6px",
              color: "#444"
            }}>
              First Number (a)
            </label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="Enter first number"
              style={{ 
                width: "100%", 
                padding: "10px", 
                border: "1px solid #ddd", 
                borderRadius: "6px",
                backgroundColor: "white"
              }}
              step="any"
            />
          </div>

          {(currentOperation?.inputs >= 2) && (
            <div style={{ marginBottom: "16px" }}>
              <label style={{ 
                display: "block", 
                fontSize: "14px", 
                fontWeight: "500", 
                marginBottom: "6px",
                color: "#444"
              }}>
                {operation === 'basic' || operation === 'inverse' 
                  ? 'Modulus (m)' 
                  : 'Second Number (b)'}
              </label>
              <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder={operation === 'basic' || operation === 'inverse' 
                  ? 'Enter modulus' 
                  : 'Enter second number'}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  border: "1px solid #ddd", 
                  borderRadius: "6px",
                  backgroundColor: "white"
                }}
                step="any"
              />
            </div>
          )}

          {currentOperation?.inputs === 3 && (
            <div style={{ marginBottom: "16px" }}>
              <label style={{ 
                display: "block", 
                fontSize: "14px", 
                fontWeight: "500", 
                marginBottom: "6px",
                color: "#444"
              }}>
                Modulus (m)
              </label>
              <input
                type="number"
                value={c}
                onChange={(e) => setC(e.target.value)}
                placeholder="Enter modulus"
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  border: "1px solid #ddd", 
                  borderRadius: "6px",
                  backgroundColor: "white"
                }}
                step="any"
              />
            </div>
          )}

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={calculateResult}
              style={{ 
                flex: "1",
                backgroundColor: "#4a6cf7", 
                color: "white", 
                padding: "12px", 
                border: "none", 
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#3a5ce7"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#4a6cf7"}
            >
              Calculate
            </button>

            <button
              onClick={resetCalculator}
              style={{ 
                flex: "1",
                backgroundColor: "#f44336", 
                color: "white", 
                padding: "12px", 
                border: "none", 
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#d32f2f"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#f44336"}
            >
              Reset
            </button>
          </div>
        </div>

        {error && (
          <div style={{ 
            marginTop: "16px", 
            padding: "12px", 
            backgroundColor: "#ffe8e8", 
            color: "#d32f2f",
            borderRadius: "6px",
            fontSize: "14px"
          }}>
            {error}
          </div>
        )}

        {result !== null && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ 
              fontSize: "18px", 
              fontWeight: "500",
              marginBottom: "8px",
              color: "#333"
            }}>
              Result:
            </h3>
            <div style={{ 
              padding: "14px", 
              backgroundColor: "#e8f4ff", 
              borderRadius: "6px",
              fontSize: "18px",
              color: "#0062cc"
            }}>
              {result.toString()}
            </div>
          </div>
        )}
      </div>

      {/* Explanation Section (1/3 width) */}
      <div style={{
        flex: "1",
        padding: "20px",
        backgroundColor: "#f0f7ff", 
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column"
      }}>
        <h2 style={{ 
          fontSize: "20px", 
          fontWeight: "bold", 
          marginBottom: "16px",
          color: "#333",
          textAlign: "center"
        }}>
          {currentExplanation.title}
        </h2>
        
        <div style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <div>
            <p style={{ 
              fontSize: "14px", 
              lineHeight: "1.5", 
              marginBottom: "16px",
              color: "#444"
            }}>
              {currentExplanation.content}
            </p>
            
            <div style={{ 
              padding: "12px", 
              backgroundColor: "#e3f2fd", 
              borderRadius: "6px",
              fontSize: "14px",
              fontStyle: "italic",
              color: "#01579b",
              marginBottom: "16px",
              borderLeft: "4px solid #2196f3"
            }}>
              {currentExplanation.example}
            </div>
          </div>
          
          <div style={{
            marginTop: "auto",
            backgroundColor: "#e8eaf6",
            padding: "12px",
            borderRadius: "6px",
            fontSize: "13px",
            color: "#3f51b5"
          }}>
            <p style={{ margin: 0 }}>
              <strong>Tip:</strong> Understanding modular arithmetic is fundamental to many areas, including cryptography, computer science, and number theory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}