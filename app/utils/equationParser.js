// utils/equationParser.js
export const validateLinearEquation = (equation) => {
    // Check for basic structure
    if (!equation.includes('=')) {
      throw new Error('Equation must contain an equals sign (=)');
    }
    
    // Check for unsupported operations
    const unsupportedOps = ['x^', 'x²', 'x³', '*x*', 'x*x', 'sqrt', 'sin', 'cos', 'tan', 'log'];
    for (let op of unsupportedOps) {
      if (equation.toLowerCase().includes(op)) {
        throw new Error(`Unsupported operation detected: ${op}. This solver only handles linear equations.`);
      }
    }
    
    // Check for multiple variables
    const variables = equation.match(/[a-z]/gi);
    if (variables) {
      const uniqueVars = [...new Set(variables.map(v => v.toLowerCase()))];
      if (uniqueVars.length > 1 || (uniqueVars.length === 1 && uniqueVars[0] !== 'x')) {
        throw new Error('This solver only supports equations with variable "x"');
      }
    }
    
    return true;
  };
  
  export const formatSolution = (solution) => {
    if (typeof solution === 'string') {
      return solution;
    }
    
    // Round to avoid floating point precision issues
    const rounded = Math.round(solution * 1000000) / 1000000;
    
    // Return as fraction if it's a simple fraction
    if (isSimpleFraction(rounded)) {
      return convertToFraction(rounded);
    }
    
    return rounded;
  };
  
  const isSimpleFraction = (num) => {
    const tolerance = 1e-10;
    for (let denom = 2; denom <= 20; denom++) {
      const numerator = Math.round(num * denom);
      if (Math.abs(num - numerator / denom) < tolerance) {
        return true;
      }
    }
    return false;
  };
  
  const convertToFraction = (num) => {
    const tolerance = 1e-10;
    for (let denom = 2; denom <= 20; denom++) {
      const numerator = Math.round(num * denom);
      if (Math.abs(num - numerator / denom) < tolerance) {
        // Simplify fraction
        const gcd = findGCD(Math.abs(numerator), denom);
        return `${numerator / gcd}/${denom / gcd}`;
      }
    }
    return num;
  };
  
  const findGCD = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };