// matrixData.js

export const matrixTypes = [
    { id: 'diagonal', name: 'Diagonal' },
    { id: 'scalar', name: 'Scalar' },
    { id: 'identity', name: 'Identity' },
    { id: 'zero', name: 'Zero' },
    { id: 'upperTriangular', name: 'Upper Triangular' },
    { id: 'lowerTriangular', name: 'Lower Triangular' },
    { id: 'symmetric', name: 'Symmetric' },
    { id: 'skewSymmetric', name: 'Skew-Symmetric' }
  ];
  
  export const categories = [
    {
      id: 'structural',
      name: 'Structural Properties',
      color: 'structural',
      properties: [
        { 
          id: 'shape', 
          name: 'Square shape (n×n)',
          values: {
            diagonal: { value: true, type: 'boolean' },
            scalar: { value: true, type: 'boolean' },
            identity: { value: true, type: 'boolean' },
            zero: { value: true, type: 'boolean' },
            upperTriangular: { value: true, type: 'boolean' },
            lowerTriangular: { value: true, type: 'boolean' },
            symmetric: { value: true, type: 'boolean' },
            skewSymmetric: { value: true, type: 'boolean' }
          }
        },
        { 
          id: 'diagonal', 
          name: 'Main Diagonal Elements',
          values: {
            diagonal: { text: 'Any values', type: 'text' },
            scalar: { text: 'All equal (λ)', type: 'text' },
            identity: { text: 'All ones', type: 'text' },
            zero: { text: 'All zeros', type: 'text' },
            upperTriangular: { text: 'Any values', type: 'text' },
            lowerTriangular: { text: 'Any values', type: 'text' },
            symmetric: { text: 'Any real values', type: 'text' },
            skewSymmetric: { text: 'All zeros', type: 'text' }
          }
        },
        { 
          id: 'offDiagonal', 
          name: 'Off-diagonal Elements',
          values: {
            diagonal: { text: 'All zero', type: 'text' },
            scalar: { text: 'All zero', type: 'text' },
            identity: { text: 'All zero', type: 'text' },
            zero: { text: 'All zero', type: 'text' },
            upperTriangular: { text: 'Zeros below diagonal', type: 'text' },
            lowerTriangular: { text: 'Zeros above diagonal', type: 'text' },
            symmetric: { text: 'aᵢⱼ = aⱼᵢ', type: 'text' },
            skewSymmetric: { text: 'aᵢⱼ = -aⱼᵢ', type: 'text' }
          }
        },
        {
          id: 'symmetry',
          name: 'Symmetry (A = Aᵀ)',
          values: {
            diagonal: { value: true, type: 'boolean' },
            scalar: { value: true, type: 'boolean' },
            identity: { value: true, type: 'boolean' },
            zero: { value: true, type: 'boolean' },
            upperTriangular: { value: false, type: 'boolean' },
            lowerTriangular: { value: false, type: 'boolean' },
            symmetric: { value: true, type: 'boolean' },
            skewSymmetric: { value: false, type: 'boolean' }
          }
        }
      ]
    },
    {
      id: 'closure',
      name: 'Closure Properties',
      color: 'closure',
      properties: [
        { 
          id: 'scalarMult', 
          name: 'Closure under Scalar Multiplication',
          values: {
            diagonal: { value: true, type: 'boolean' },
            scalar: { value: true, type: 'boolean' },
            identity: { value: false, type: 'boolean' },
            zero: { value: true, type: 'boolean' },
            upperTriangular: { value: true, type: 'boolean' },
            lowerTriangular: { value: true, type: 'boolean' },
            symmetric: { value: true, type: 'boolean' },
            skewSymmetric: { value: true, type: 'boolean' }
          }
        },
        { 
          id: 'addClosure', 
          name: 'Closure under Addition',
          values: {
            diagonal: { value: true, type: 'boolean' },
            scalar: { value: true, type: 'boolean' },
            identity: { value: false, type: 'boolean' },
            zero: { value: true, type: 'boolean' },
            upperTriangular: { value: true, type: 'boolean' },
            lowerTriangular: { value: true, type: 'boolean' },
            symmetric: { value: true, type: 'boolean' },
            skewSymmetric: { value: true, type: 'boolean' }
          }
        },
        { 
          id: 'multClosure', 
          name: 'Closure under Multiplication',
          values: {
            diagonal: { value: true, type: 'boolean' },
            scalar: { value: true, type: 'boolean' },
            identity: { value: true, type: 'boolean' },
            zero: { value: true, type: 'boolean' },
            upperTriangular: { value: true, type: 'boolean' },
            lowerTriangular: { value: true, type: 'boolean' },
            symmetric: { value: false, type: 'boolean' },
            skewSymmetric: { value: false, type: 'boolean' }
          }
        },
        {
          id: 'powerClosure',
          name: 'Closure under Power Operations',
          values: {
            diagonal: { value: true, type: 'boolean' },
            scalar: { value: true, type: 'boolean' },
            identity: { value: true, type: 'boolean' },
            zero: { value: true, type: 'boolean' },
            upperTriangular: { value: true, type: 'boolean' },
            lowerTriangular: { value: true, type: 'boolean' },
            symmetric: { value: false, type: 'boolean' },
            skewSymmetric: { value: false, type: 'boolean' }
          }
        },
        {
          id: 'multCommType',
          name: 'Multiplicative Commutativity within Type',
          values: {
            diagonal: { value: true, type: 'boolean' },
            scalar: { value: true, type: 'boolean' },
            identity: { value: true, type: 'boolean' },
            zero: { value: true, type: 'boolean' },
            upperTriangular: { value: false, type: 'boolean' },
            lowerTriangular: { value: false, type: 'boolean' },
            symmetric: { value: false, type: 'boolean' },
            skewSymmetric: { value: false, type: 'boolean' }
          }
        },
        {
          id: 'multCommAny',
          name: 'Multiplicative Commutativity with Any Matrix',
          values: {
            diagonal: { value: false, type: 'boolean' },
            scalar: { value: true, type: 'boolean' },
            identity: { value: true, type: 'boolean' },
            zero: { value: true, type: 'boolean' },
            upperTriangular: { value: false, type: 'boolean' },
            lowerTriangular: { value: false, type: 'boolean' },
            symmetric: { value: false, type: 'boolean' },
            skewSymmetric: { value: false, type: 'boolean' }
          }
        }
      ]
    },
    {
      id: 'algebraic',
      name: 'Basic Algebraic Properties',
      color: 'algebraic',
      properties: [
        {
          id: 'trace',
          name: 'Trace Calculation',
          values: {
            diagonal: { text: 'Sum of diagonal', type: 'text' },
            scalar: { text: 'nλ', type: 'text' },
            identity: { text: 'n', type: 'text' },
            zero: { text: '0', type: 'text' },
            upperTriangular: { text: 'Sum of diagonal', type: 'text' },
            lowerTriangular: { text: 'Sum of diagonal', type: 'text' },
            symmetric: { text: 'Sum of diagonal', type: 'text' },
            skewSymmetric: { text: '0', type: 'text' }
          }
        },
        {
          id: 'determinant',
          name: 'Determinant Calculation',
          values: {
            diagonal: { text: 'Product of diagonal', type: 'text' },
            scalar: { text: 'λⁿ', type: 'text' },
            identity: { text: '1', type: 'text' },
            zero: { text: '0', type: 'text' },
            upperTriangular: { text: 'Product of diagonal', type: 'text' },
            lowerTriangular: { text: 'Product of diagonal', type: 'text' },
            symmetric: { text: 'Product of eigenvalues', type: 'text' },
            skewSymmetric: { text: '≥ 0 (even), 0 (odd)', type: 'text' }
          }
        },
        {
          id: 'inverse',
          name: 'Inverse Existence Conditions',
          values: {
            diagonal: { text: 'All diagonal ≠ 0', type: 'text' },
            scalar: { text: 'λ ≠ 0', type: 'text' },
            identity: { text: 'Always exists', type: 'text' },
            zero: { text: 'Never exists', type: 'text' },
            upperTriangular: { text: 'All diagonal ≠ 0', type: 'text' },
            lowerTriangular: { text: 'All diagonal ≠ 0', type: 'text' },
            symmetric: { text: 'det(A) ≠ 0', type: 'text' },
            skewSymmetric: { text: 'det(A) ≠ 0', type: 'text' }
          }
        },
        {
          id: 'inverseCalc',
          name: 'Inverse Calculation Method',
          values: {
            diagonal: { text: 'Reciprocal of diagonal', type: 'text' },
            scalar: { text: '1/λ scalar matrix', type: 'text' },
            identity: { text: 'Same matrix', type: 'text' },
            zero: { text: 'N/A', type: 'text' },
            upperTriangular: { text: 'Back substitution', type: 'text' },
            lowerTriangular: { text: 'Forward substitution', type: 'text' },
            symmetric: { text: 'Various methods', type: 'text' },
            skewSymmetric: { text: 'Various methods', type: 'text' }
          }
        }
      ]
    }
  ];