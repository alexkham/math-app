import { useState } from 'react';

export default function ModuloCalculator() {
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
      maxWidth: "500px", 
      margin: "0 auto", 
      padding: "20px", 
      backgroundColor: "#f7f8fc",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif"
    }}>
      {/* <h4 style={{ 
        fontSize: "24px", 
        fontWeight: "bold", 
        marginBottom: "20px",
        color: "#333",
        textAlign: "center"
      }}>
       Choose Operation and Input Numbers
      </h4> */}
      
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

        <button
          onClick={calculateResult}
          style={{ 
            width: "100%", 
            backgroundColor: "#4a6cf7", 
            color: "white", 
            padding: "12px", 
            border: "none", 
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.3s",
            marginTop: "10px"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#3a5ce7"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#4a6cf7"}
        >
          Calculate
        </button>

        <button
          onClick={resetCalculator}
          style={{ 
            width: "100%", 
            backgroundColor: "#f44336", 
            color: "white", 
            padding: "12px", 
            border: "none", 
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.3s",
            marginTop: "10px"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#d32f2f"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#f44336"}
        >
          Reset
        </button>
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
  );
}