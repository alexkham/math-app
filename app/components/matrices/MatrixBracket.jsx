// MatrixBracket.jsx
import React from 'react';

export const MatrixBracket = ({ size, type }) => {
  const height = size * 40;
  return (
    <svg width="15" height={height} viewBox={`0 0 15 ${height}`}>
      {type === 'left' ? (
        <path
          d={`M 15 0 Q 5 0 5 20 L 5 ${height - 20} Q 5 ${height} 15 ${height}`}
          fill="none" stroke="#0a58ca" strokeWidth="1"
        />
      ) : (
        <path
          d={`M 0 0 Q 10 0 10 20 L 10 ${height - 20} Q 10 ${height} 0 ${height}`}
          fill="none" stroke="#0a58ca" strokeWidth="1"
        />
      )}
    </svg>
  );
};