// components/Matrix/index.js
'use client';

import styles from './Matrix.module.css';

export default function Matrix({ 
  matrix, 
  onChange, 
  isReadOnly = false,
  label = ''
}) {
  return (
    <div className={styles.matrixContainer}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.matrixWrapper}>
        <div className={styles.leftBracket}>[</div>
        <div className={styles.matrixContent}>
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.matrixRow}>
              {row.map((cell, colIndex) => (
                isReadOnly ? (
                  <div key={colIndex} className={styles.matrixCell}>
                    {cell}
                  </div>
                ) : (
                  <input
                    key={colIndex}
                    type="number"
                    value={cell}
                    onChange={(e) => onChange?.(rowIndex, colIndex, e.target.value)}
                    className={styles.matrixInput}
                  />
                )
              ))}
            </div>
          ))}
        </div>
        <div className={styles.rightBracket}>]</div>
      </div>
    </div>
  );
}