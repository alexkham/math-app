import React from 'react';

const CoOccurrenceMatrix = () => {
  const matrices = [
    'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 'Skew-symmetric',
    'Upper Triangular', 'Lower Triangular', 'Orthogonal', 'Involutory',
    'Nilpotent', 'Toeplitz', 'Circulant', 'Hermitian'
  ];

  const coOccurrence = [
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1], // Identity
    [0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0], // Zero
    [1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1], // Scalar
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1], // Diagonal
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1], // Symmetric
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // Skew-symmetric
    [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], // Upper Triangular
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0], // Lower Triangular
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // Orthogonal
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // Involutory
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0], // Nilpotent
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0], // Toeplitz
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1], // Circulant
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]  // Hermitian
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}></th>
              {matrices.map((matrix, index) => (
                <th 
                  key={index} 
                  style={{ 
                    padding: '10px', 
                    borderBottom: '2px solid #ddd',
                    transform: 'rotate(-45deg)',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'bottom',
                    height: '150px'
                  }}
                >
                  {matrix}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrices.map((matrix, i) => (
              <tr key={i}>
                <td style={{ 
                  padding: '10px', 
                  borderBottom: '1px solid #ddd',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap'
                }}>
                  {matrix}
                </td>
                {coOccurrence[i].map((value, j) => (
                  <td 
                    key={j}
                    style={{
                      padding: '10px',
                      borderBottom: '1px solid #ddd',
                      backgroundColor: value ? '#1e40af' : '#f3f4f6',
                      color: value ? 'white' : 'black',
                      textAlign: 'center',
                      width: '40px',
                      height: '40px'
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoOccurrenceMatrix;