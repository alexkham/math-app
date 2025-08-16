// // // // // // 'use client';

// // // // // // import styles from './Matrix2.module.css';

// // // // // // export default function Matrix2({ matrix }) {
// // // // // //   return (
// // // // // //     <div className={styles.block}>
// // // // // //       <span className={styles.bracket}>(</span>
// // // // // //       <table className={styles.matrix}>
// // // // // //         <tbody>
// // // // // //           {matrix.map((row, i) => (
// // // // // //             <tr key={i}>
// // // // // //               {row.map((cell, j) => (
// // // // // //                 <td key={j} className={styles.cell}>
// // // // // //                   <input type="number" value={cell} />
// // // // // //                 </td>
// // // // // //               ))}
// // // // // //             </tr>
// // // // // //           ))}
// // // // // //         </tbody>
// // // // // //       </table>
// // // // // //       <span className={styles.bracket}>)</span>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // 'use client';
// // // // // import styles from './Matrix2.module.css';
// // // // // import { useEffect, useRef } from 'react';

// // // // // export default function Matrix2({ matrix }) {
// // // // //  const matrixRef = useRef(null);
 
// // // // // //  useEffect(() => {
// // // // // //    const matrixHeight = matrixRef.current?.offsetHeight;
// // // // // //    const brackets = document.querySelectorAll(`.${styles.bracket}`);
// // // // // //    brackets.forEach(b => {
// // // // // //      b.style.transform = `scale(1.2, ${matrixHeight/20})`;
// // // // // //    });
// // // // // //  }, [matrix]);


// // // // // //  useEffect(() => {
// // // // // //     const matrixHeight = matrixRef.current?.offsetHeight;
// // // // // //     const brackets = document.querySelectorAll(`.${styles.bracket}`);
// // // // // //     brackets.forEach(b => {
// // // // // //       const scale = matrixHeight/20;
// // // // // //       b.style.transform = `scale(1.2, ${scale})`;
// // // // // //       b.style.translateY = `${-(scale - 1) * 12}px`; 
// // // // // //     });
// // // // // //  }, [matrix]);


// // // // // useEffect(() => {
// // // // //     const matrixHeight = matrixRef.current?.offsetHeight;
// // // // //     const brackets = document.querySelectorAll(`.${styles.bracket}`);
// // // // //     brackets.forEach(b => {
// // // // //       const scale = matrixHeight/20;
// // // // //       b.style.marginBottom = `${matrixHeight/5}px`;
// // // // //       b.style.transform = `scale(1.2, ${scale})`;
// // // // //     });
// // // // //  }, [matrix]);

// // // // //  return (
// // // // //    <div className={styles.block}>
// // // // //      <span className={styles.bracket}>(</span>
// // // // //      <table className={styles.matrix} ref={matrixRef}>
// // // // //        <tbody>
// // // // //          {matrix.map((row, i) => (
// // // // //            <tr key={i}>
// // // // //              {row.map((cell, j) => (
// // // // //                <td key={j} className={styles.cell}>
// // // // //                  <input type="number" value={cell} />
// // // // //                </td>
// // // // //              ))}
// // // // //            </tr>
// // // // //          ))}
// // // // //        </tbody>
// // // // //      </table>  
// // // // //      <span className={styles.bracket}>)</span>
// // // // //    </div>
// // // // //  );
// // // // // }


// // // // 'use client';
// // // // import styles from './Matrix2.module.css';
// // // // import { useEffect, useRef } from 'react';

// // // // export default function Matrix2({ matrix }) {
// // // //  const matrixRef = useRef(null);
 
// // // //  useEffect(() => {
// // // //    const matrixHeight = matrixRef.current?.offsetHeight;
// // // //    const brackets = document.querySelectorAll(`.${styles.bracket}`);
// // // //    brackets.forEach(b => {
// // // //      const scale = matrixHeight/20;
// // // //      b.style.marginBottom = `${matrixHeight/5}px`;
// // // //      b.style.transform = `scale(1.2, ${scale})`;
// // // //    });
// // // //  }, [matrix]);

// // // //  useEffect(() => {
// // // //    const adjustColumns = () => {
// // // //      const table = matrixRef.current;
// // // //      const inputs = table.getElementsByTagName('input');
     
// // // //      [...inputs].forEach(input => {
// // // //        input.style.width = '0';
// // // //        const width = Math.min(Math.max(input.scrollWidth, 40), 100);
// // // //        const col = input.closest('td').cellIndex;
       
// // // //        [...table.rows].forEach(row => {
// // // //          row.cells[col].querySelector('input').style.width = `${width}px`;
// // // //        });
// // // //      });
// // // //    };

// // // //    adjustColumns();
// // // //    [...matrixRef.current.getElementsByTagName('input')].forEach(input => {
// // // //      input.addEventListener('input', adjustColumns);
// // // //    });
// // // //  }, [matrix]);

// // // //  return (
// // // //    <div className={styles.block}>
// // // //      <span className={styles.bracket}>(</span>
// // // //      <table className={styles.matrix} ref={matrixRef}>
// // // //        <tbody>
// // // //          {matrix.map((row, i) => (
// // // //            <tr key={i}>
// // // //              {row.map((cell, j) => (
// // // //                <td key={j} className={styles.cell}>
// // // //                  <input type="number" defaultValue={cell} />
// // // //                </td>
// // // //              ))}
// // // //            </tr>
// // // //          ))}
// // // //        </tbody>
// // // //      </table>  
// // // //      <span className={styles.bracket}>)</span>
// // // //    </div>
// // // //  );
// // // // }


// // // 'use client';
// // // import styles from './Matrix2.module.css';
// // // import { useEffect, useRef } from 'react';

// // // export default function Matrix2({ matrix }) {
// // //  const matrixRef = useRef(null);
 
// // //  useEffect(() => {
// // //    const matrixHeight = matrixRef.current?.offsetHeight;
// // //    const brackets = document.querySelectorAll(`.${styles.bracket}`);
// // //    brackets.forEach(b => {
// // //      const scale = matrixHeight/20;
// // //      b.style.marginBottom = `${matrixHeight/3}px`;
// // //      b.style.transform = `scale(1.2, ${scale})`;
// // //    });
// // //  }, [matrix]);

// // //  useEffect(() => {
// // //    const adjustColumnWidths = () => {
// // //      const table = matrixRef.current;
// // //      const allCells = [...table.getElementsByTagName('td')];
// // //      const columns = {};

// // //      allCells.forEach((cell) => {
// // //        const input = cell.querySelector('input');
// // //        const colIndex = cell.cellIndex;
// // //        const width = input.value.length * 12 + 20;
// // //        columns[colIndex] = Math.max(columns[colIndex] || 40, width);
// // //      });

// // //      allCells.forEach((cell) => {
// // //        cell.style.width = columns[cell.cellIndex] + 'px';
// // //      });
// // //    };

// // //    adjustColumnWidths();

// // //    const inputs = matrixRef.current.getElementsByTagName('input');
// // //    [...inputs].forEach(input => {
// // //      input.addEventListener('input', adjustColumnWidths);
// // //    });
// // //  }, [matrix]);

// // //  return (
// // //    <div className={styles.block}>
// // //      <span className={styles.bracket}>(</span>
// // //      <table className={styles.matrix} ref={matrixRef}>
// // //        <tbody>
// // //          {matrix.map((row, i) => (
// // //            <tr key={i}>
// // //              {row.map((cell, j) => (
// // //                <td key={j} className={styles.cell}>
// // //                  <input type="number" defaultValue={cell} />
// // //                </td>
// // //              ))}
// // //            </tr>
// // //          ))}
// // //        </tbody>
// // //      </table>  
// // //      <span className={styles.bracket}>)</span>
// // //    </div>
// // //  );
// // // }

// // 'use client';
// // import styles from './Matrix2.module.css';
// // import { useEffect, useRef, useState } from 'react';

// // export default function Matrix2({ matrix }) {
// //  const matrixRef = useRef(null);
// //  const MAX_DIGITS = 15;
// //  const MAX_WIDTH = 200;
// //  const [error, setError] = useState('');
 
// //  useEffect(() => {
// //    const matrixHeight = matrixRef.current?.offsetHeight;
// //    const brackets = document.querySelectorAll(`.${styles.bracket}`);
// //    brackets.forEach(b => {
// //      const scale = matrixHeight/20;
// //      b.style.marginBottom = `${matrixHeight/3}px`;
// //      b.style.transform = `scale(1.2, ${scale})`;
// //    });
// //  }, [matrix]);

// //  useEffect(() => {
// //    const adjustColumnWidths = () => {
// //      const table = matrixRef.current;
// //      const allCells = [...table.getElementsByTagName('td')];
// //      const columns = {};

// //      allCells.forEach((cell) => {
// //        const input = cell.querySelector('input');
// //        const value = input.value;
       
// //        if (value) {
// //          const num = Number(value);
// //          if (isNaN(num) || !isFinite(num)) {
// //            setError('Invalid number format');
// //            input.value = '';
// //            return;
// //          }
// //          if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
// //            setError('Number too large for calculations');
// //            input.value = '';
// //            return;
// //          }
         
// //          const digits = value.replace(/[-.e]/g, '').length;
// //          if (digits > MAX_DIGITS) {
// //            input.value = Number(value).toExponential(MAX_DIGITS - 5);
// //            setError(`Maximum precision exceeded (${MAX_DIGITS} significant digits)`);
// //          }
// //        }

// //        const colIndex = cell.cellIndex;
// //        const width = Math.min(input.value.length * 12 + 20, MAX_WIDTH);
// //        columns[colIndex] = Math.max(columns[colIndex] || 40, width);
// //      });

// //      allCells.forEach((cell) => {
// //        cell.style.width = columns[cell.cellIndex] + 'px';
// //      });
// //    };

// //    const handleBlur = (e) => {
// //      if (e.target.value) {
// //        try {
// //          const num = Number(e.target.value);
// //          e.target.value = num.toExponential();
// //        } catch {
// //          setError('Invalid number format');
// //          e.target.value = '';
// //        }
// //      }
// //    };

// //    adjustColumnWidths();

// //    const inputs = matrixRef.current.getElementsByTagName('input');
// //    [...inputs].forEach(input => {
// //      input.addEventListener('input', adjustColumnWidths);
// //      input.addEventListener('blur', handleBlur);
// //    });

// //    return () => {
// //      [...inputs].forEach(input => {
// //        input.removeEventListener('input', adjustColumnWidths);
// //        input.removeEventListener('blur', handleBlur);
// //      });
// //    };
// //  }, [matrix]);

// //  return (
// //    <div className={styles.container}>
// //      {error && <div className={styles.error}>{error}</div>}
// //      <div className={styles.block}>
// //        <span className={styles.bracket}>(</span>
// //        <table className={styles.matrix} ref={matrixRef}>
// //          <tbody>
// //            {matrix.map((row, i) => (
// //              <tr key={i}>
// //                {row.map((cell, j) => (
// //                  <td key={j} className={styles.cell}>
// //                    <input type="text" defaultValue={cell} />
// //                  </td>
// //                ))}
// //              </tr>
// //            ))}
// //          </tbody>
// //        </table>  
// //        <span className={styles.bracket}>)</span>
// //      </div>
// //    </div>
// //  );
// // }


// // 'use client';
// // import styles from './Matrix2.module.css';
// // import { useEffect, useRef, useState } from 'react';

// // export default function Matrix2({ matrix }) {
// //  const matrixRef = useRef(null);
// //  const MAX_DIGITS = 15;
// //  const MAX_WIDTH = 200;
// //  const [error, setError] = useState('');
 
// //  useEffect(() => {
// //    const matrixHeight = matrixRef.current?.offsetHeight;
// //    const brackets = document.querySelectorAll(`.${styles.bracket}`);
// //    brackets.forEach(b => {
// //      const scale = matrixHeight/20;
// //      b.style.marginBottom = `${matrixHeight/5}px`;
// //      b.style.transform = `scale(1.2, ${scale})`;
// //    });
// //  }, [matrix]);

// //  useEffect(() => {
// //    const adjustColumnWidths = () => {
// //      const table = matrixRef.current;
// //      const allCells = [...table.getElementsByTagName('td')];
// //      const columns = {};
// //      let hasError = false;

// //      allCells.forEach((cell) => {
// //        const input = cell.querySelector('input');
// //        const value = input.value;
       
// //        if (value) {
// //          const num = Number(value);
// //          if (isNaN(num) || !isFinite(num)) {
// //            setError('Invalid number format');
// //            input.value = '';
// //            hasError = true;
// //            return;
// //          }
// //          if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
// //            setError('Number too large for calculations');
// //            input.value = '';
// //            hasError = true;
// //            return;
// //          }
         
// //          const digits = value.replace(/[-.e]/g, '').length;
// //          if (digits > MAX_DIGITS) {
// //            input.value = Number(value).toExponential(MAX_DIGITS - 5);
// //            setError(`Maximum precision exceeded (${MAX_DIGITS} significant digits)`);
// //            hasError = true;
// //          }
// //        }

// //        const colIndex = cell.cellIndex;
// //        const width = Math.min(input.value.length * 12 + 20, MAX_WIDTH);
// //        columns[colIndex] = Math.max(columns[colIndex] || 40, width);
// //      });

// //      if (!hasError) {
// //        setError('');
// //      }

// //      allCells.forEach((cell) => {
// //        cell.style.width = columns[cell.cellIndex] + 'px';
// //      });
// //    };

// //    const handleBlur = (e) => {
// //      if (e.target.value) {
// //        try {
// //          const num = Number(e.target.value);
// //          e.target.value = num.toExponential();
// //        } catch {
// //          setError('Invalid number format');
// //          e.target.value = '';
// //        }
// //      }
// //    };

// //    adjustColumnWidths();

// //    const inputs = matrixRef.current.getElementsByTagName('input');
// //    [...inputs].forEach(input => {
// //      input.addEventListener('input', adjustColumnWidths);
// //      input.addEventListener('blur', handleBlur);
// //    });

// //    return () => {
// //      [...inputs].forEach(input => {
// //        input.removeEventListener('input', adjustColumnWidths);
// //        input.removeEventListener('blur', handleBlur);
// //      });
// //    };
// //  }, [matrix]);

// //  return (
// //    <div className={styles.container}>
// //      {error && <div className={styles.error}>{error}</div>}
// //      <div className={styles.block}>
// //        <span className={styles.bracket}>(</span>
// //        <table className={styles.matrix} ref={matrixRef}>
// //          <tbody>
// //            {matrix.map((row, i) => (
// //              <tr key={i}>
// //                {row.map((cell, j) => (
// //                  <td key={j} className={styles.cell}>
// //                    <input type="text" defaultValue={cell} />
// //                  </td>
// //                ))}
// //              </tr>
// //            ))}
// //          </tbody>
// //        </table>  
// //        <span className={styles.bracket}>)</span>
// //      </div>
// //    </div>
// //  );
// // }


// // 'use client';
// // import styles from './Matrix2.module.css';
// // import { useEffect, useRef, useState } from 'react';

// // export default function Matrix2({ matrix }) {
// //  const matrixRef = useRef(null);
// //  const MAX_DIGITS = 15;
// //  const EXPONENTIAL_THRESHOLD = 10;
// //  const MAX_WIDTH = 200;
// //  const [error, setError] = useState('');

// //  useEffect(() => {
// //    const matrixHeight = matrixRef.current?.offsetHeight;
// //    const brackets = document.querySelectorAll(`.${styles.bracket}`);
// //    brackets.forEach(b => {
// //      const scale = matrixHeight/20;
// //      b.style.marginBottom = `${matrixHeight/5}px`;
// //      b.style.transform = `scale(1.2, ${scale})`;
// //    });
// //  }, [matrix]);

// //  useEffect(() => {
// //    const adjustColumnWidths = () => {
// //      const table = matrixRef.current;
// //      const allCells = [...table.getElementsByTagName('td')];
// //      const columns = {};
// //      let hasError = false;

// //      allCells.forEach((cell) => {
// //        const input = cell.querySelector('input');
// //        const value = input.value;
       
// //        if (value) {
// //          const num = Number(value);
// //          if (isNaN(num) || !isFinite(num)) {
// //            setError('Invalid number format');
// //            input.value = '';
// //            hasError = true;
// //            return;
// //          }
// //          if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
// //            setError('Number too large for calculations');
// //            input.value = '';
// //            hasError = true;
// //            return;
// //          }
         
// //          const digits = value.replace(/[-.e]/g, '').length;
// //          if (digits > MAX_DIGITS) {
// //            setError(`Maximum precision exceeded (${MAX_DIGITS} significant digits)`);
// //            hasError = true;
// //            if (digits > EXPONENTIAL_THRESHOLD) {
// //              input.value = Number(value).toExponential(MAX_DIGITS - 5);
// //            }
// //          }
// //        }

// //        const colIndex = cell.cellIndex;
// //        const width = Math.min(input.value.length * 12 + 20, MAX_WIDTH);
// //        columns[colIndex] = Math.max(columns[colIndex] || 40, width);
// //      });

// //      if (!hasError) {
// //        setError('');
// //      }

// //      allCells.forEach((cell) => {
// //        cell.style.width = columns[cell.cellIndex] + 'px';
// //      });
// //    };

// //    const handleBlur = (e) => {
// //      if (e.target.value) {
// //        try {
// //          const num = Number(e.target.value);
// //          const digits = String(num).replace(/[-.]/g, '').length;
         
// //          if (digits > EXPONENTIAL_THRESHOLD) {
// //            e.target.value = num.toExponential();
// //          } else {
// //            e.target.value = String(num);
// //          }
// //        } catch {
// //          setError('Invalid number format');
// //          e.target.value = '';
// //        }
// //      }
// //    };

// //    adjustColumnWidths();

// //    const inputs = matrixRef.current.getElementsByTagName('input');
// //    [...inputs].forEach(input => {
// //      input.addEventListener('input', adjustColumnWidths);
// //      input.addEventListener('blur', handleBlur);
// //    });

// //    return () => {
// //      [...inputs].forEach(input => {
// //        input.removeEventListener('input', adjustColumnWidths);
// //        input.removeEventListener('blur', handleBlur);
// //      });
// //    };
// //  }, [matrix]);

// //  return (
// //    <div className={styles.container}>
// //      {error && <div className={styles.error}>{error}</div>}
// //      <div className={styles.block}>
// //        <span className={styles.bracket}>(</span>
// //        <table className={styles.matrix} ref={matrixRef}>
// //          <tbody>
// //            {matrix.map((row, i) => (
// //              <tr key={i}>
// //                {row.map((cell, j) => (
// //                  <td key={j} className={styles.cell}>
// //                    <input type="text" defaultValue={cell} />
// //                  </td>
// //                ))}
// //              </tr>
// //            ))}
// //          </tbody>
// //        </table>  
// //        <span className={styles.bracket}>)</span>
// //      </div>
// //    </div>
// //  );
// // }

// 'use client';
// import styles from './Matrix2.module.css';
// import { useEffect, useRef, useState } from 'react';

// export default function Matrix2({ matrix, name = '', labelPosition = 'top' }) {
//  const matrixRef = useRef(null);
//  const MAX_DIGITS = 15;
//  const EXPONENTIAL_THRESHOLD = 10;
//  const MAX_WIDTH = 200;
//  const [error, setError] = useState('');

//  useEffect(() => {
//    const matrixHeight = matrixRef.current?.offsetHeight;
//    const brackets = document.querySelectorAll(`.${styles.bracket}`);
//    brackets.forEach(b => {
//      const scale = matrixHeight/20;
//      b.style.marginBottom = `${matrixHeight/5}px`;
//      b.style.transform = `scale(1.2, ${scale})`;
//    });
//  }, [matrix]);

//  useEffect(() => {
//    const adjustColumnWidths = () => {
//      const table = matrixRef.current;
//      const allCells = [...table.getElementsByTagName('td')];
//      const columns = {};
//      let hasError = false;

//      allCells.forEach((cell) => {
//        const input = cell.querySelector('input');
//        const value = input.value;
       
//        if (value) {
//          const num = Number(value);
//          if (isNaN(num) || !isFinite(num)) {
//            setError('Invalid number format');
//            input.value = '';
//            hasError = true;
//            return;
//          }
//          if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
//            setError('Number too large for calculations');
//            input.value = '';
//            hasError = true;
//            return;
//          }
         
//          const digits = value.replace(/[-.e]/g, '').length;
//          if (digits > MAX_DIGITS) {
//            setError(`Maximum precision exceeded (${MAX_DIGITS} significant digits)`);
//            hasError = true;
//            if (digits > EXPONENTIAL_THRESHOLD) {
//              input.value = Number(value).toExponential(MAX_DIGITS - 5);
//            }
//          }
//        }

//        const colIndex = cell.cellIndex;
//        const width = Math.min(input.value.length * 12 + 20, MAX_WIDTH);
//        columns[colIndex] = Math.max(columns[colIndex] || 40, width);
//      });

//      if (!hasError) {
//        setError('');
//      }

//      allCells.forEach((cell) => {
//        cell.style.width = columns[cell.cellIndex] + 'px';
//      });
//    };

//    const handleBlur = (e) => {
//      if (e.target.value) {
//        try {
//          const num = Number(e.target.value);
//          const digits = String(num).replace(/[-.]/g, '').length;
         
//          if (digits > EXPONENTIAL_THRESHOLD) {
//            e.target.value = num.toExponential();
//          } else {
//            e.target.value = String(num);
//          }
//        } catch {
//          setError('Invalid number format');
//          e.target.value = '';
//        }
//      }
//    };

//    adjustColumnWidths();

//    const inputs = matrixRef.current.getElementsByTagName('input');
//    [...inputs].forEach(input => {
//      input.addEventListener('input', adjustColumnWidths);
//      input.addEventListener('blur', handleBlur);
//    });

//    return () => {
//      [...inputs].forEach(input => {
//        input.removeEventListener('input', adjustColumnWidths);
//        input.removeEventListener('blur', handleBlur);
//      });
//    };
//  }, [matrix]);

//  const renderMatrixWithLabel = () => {
//    const matrixElement = (
//      <div className={styles.block}>
//        <span className={styles.bracket}>(</span>
//        <table className={styles.matrix} ref={matrixRef}>
//          <tbody>
//            {matrix.map((row, i) => (
//              <tr key={i}>
//                {row.map((cell, j) => (
//                  <td key={j} className={styles.cell}>
//                    <input type="text" defaultValue={cell} />
//                  </td>
//                ))}
//              </tr>
//            ))}
//          </tbody>
//        </table>  
//        <span className={styles.bracket}>)</span>
//      </div>
//    );

//    if (!name) return matrixElement;

//    return (
//      <div className={labelPosition === 'left' ? styles.leftLabel : styles.topLabel}>
//        <div className={styles.label}>
//          {name}{labelPosition === 'left' ? ' = ' : ''}
//        </div>
//        {matrixElement}
//      </div>
//    );
//  };

//  return (
//    <div className={styles.container}>
//      {error && <div className={styles.error}>{error}</div>}
//      {renderMatrixWithLabel()}
//    </div>
//  );
// }


// 'use client';
// import styles from './Matrix2.module.css';
// import { useEffect, useRef, useState } from 'react';

// export default function Matrix2({ matrix, name = '', labelPosition = 'top' ,onCellChange}) {
//  const matrixRef = useRef(null);
//  const matrixId = useRef(`matrix-${Math.random()}`);
//  const MAX_DIGITS = 15;
//  const EXPONENTIAL_THRESHOLD = 10;
//  const MAX_WIDTH = 200;
//  const [error, setError] = useState('');

// //  useEffect(() => {
// //    const matrixHeight = matrixRef.current?.offsetHeight;
// //    const brackets = document.querySelectorAll(`[data-matrix-id="${matrixId.current}"]`);
// //    brackets.forEach(b => {
// //      const scale = matrixHeight/20;
// //      b.style.marginBottom = `${matrixHeight/7}px`;
// //      b.style.transform = `scale(1.2, ${scale})`;
// //    });
// //  }, [matrix]);


// useEffect(() => {
//     const matrixHeight = matrixRef.current?.offsetHeight;
//     const brackets = document.querySelectorAll(`.${styles.bracket}`);
//     brackets.forEach(b => {
//       const scale = matrixHeight/20;
//       b.style.marginBottom = `${matrixHeight/5}px`;
//       b.style.transform = `scale(1.2, ${scale})`;
//     });
//  }, [matrix]);

// // useEffect(() => {
// //    const adjustColumnWidths = () => {
// //      const table = matrixRef.current;
// //      const allCells = [...table.getElementsByTagName('td')];
// //      const columns = {};
// //      let hasError = false;

// //      allCells.forEach((cell) => {
// //        const input = cell.querySelector('input');
// //        const value = input.value;
       
// //        if (value) {
// //          const num = Number(value);
// //          if (isNaN(num) || !isFinite(num)) {
// //            setError('Invalid number format');
// //            input.value = '';
// //            hasError = true;
// //            return;
// //          }
// //          if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
// //            setError('Number too large for calculations');
// //            input.value = '';
// //            hasError = true;
// //            return;
// //          }
         
// //          const digits = value.replace(/[-.e]/g, '').length;
// //          if (digits > MAX_DIGITS) {
// //            setError(`Maximum precision exceeded (${MAX_DIGITS} significant digits)`);
// //            hasError = true;
// //            if (digits > EXPONENTIAL_THRESHOLD) {
// //              input.value = Number(value).toExponential(MAX_DIGITS - 5);
// //            }
// //          }
// //        }

// //        const colIndex = cell.cellIndex;
// //        const width = Math.min(input.value.length * 12 + 20, MAX_WIDTH);
// //        columns[colIndex] = Math.max(columns[colIndex] || 40, width);
// //      });

// //      if (!hasError) {
// //        setError('');
// //      }

// //      allCells.forEach((cell) => {
// //        cell.style.width = columns[cell.cellIndex] + 'px';
// //      });
// //    };

// //    const handleBlur = (e) => {
// //      if (e.target.value) {
// //        try {
// //          const num = Number(e.target.value);
// //          const digits = String(num).replace(/[-.]/g, '').length;
         
// //          if (digits > EXPONENTIAL_THRESHOLD) {
// //            e.target.value = num.toExponential();
// //          } else {
// //            e.target.value = String(num);
// //          }
// //        } catch {
// //          setError('Invalid number format');
// //          e.target.value = '';
// //        }
// //      }
// //    };

// //    adjustColumnWidths();

// //    const inputs = matrixRef.current.getElementsByTagName('input');
// //    [...inputs].forEach(input => {
// //      input.addEventListener('input', adjustColumnWidths);
// //      input.addEventListener('blur', handleBlur);
// //    });

// //    return () => {
// //      [...inputs].forEach(input => {
// //        input.removeEventListener('input', adjustColumnWidths);
// //        input.removeEventListener('blur', handleBlur);
// //      });
// //    };
// //  }, [matrix]);

 
// useEffect(() => {
//     const adjustColumnWidths = () => {
//       const table = matrixRef.current;
//       const allCells = [...table.getElementsByTagName('td')];
//       const columns = {};
//       let hasError = false;
  
//       allCells.forEach((cell) => {
//         const input = cell.querySelector('input');
//         let value = input.value;
  
//         // Remove leading zeros
//         if (value) {
//           value = value.replace(/^0+(\d)/, '$1'); // Remove leading zeros before digits
//           if (value === '') value = '0'; // If the input is empty after stripping, set it to '0'
//           input.value = value; // Update the input value
//         }
  
//         if (value) {
//           const num = Number(value);
//           if (isNaN(num) || !isFinite(num)) {
//             setError('Invalid number format');
//             input.value = '';
//             hasError = true;
//             return;
//           }
//           if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
//             setError('Number too large for calculations');
//             input.value = '';
//             hasError = true;
//             return;
//           }
  
//           const digits = value.replace(/[-.e]/g, '').length;
//           if (digits > MAX_DIGITS) {
//             setError(`Maximum precision exceeded (${MAX_DIGITS} significant digits)`);
//             hasError = true;
//             if (digits > EXPONENTIAL_THRESHOLD) {
//               input.value = Number(value).toExponential(MAX_DIGITS - 5);
//             }
//           }
//         }
  
//         const colIndex = cell.cellIndex;
//         const width = Math.min(input.value.length * 12 + 20, MAX_WIDTH);
//         columns[colIndex] = Math.max(columns[colIndex] || 40, width);
//       });
  
//       if (!hasError) {
//         setError('');
//       }
  
//       allCells.forEach((cell) => {
//         cell.style.width = columns[cell.cellIndex] + 'px';
//       });
//     };
  
//     const handleBlur = (e) => {
//       if (e.target.value) {
//         try {
//           const num = Number(e.target.value);
//           const digits = String(num).replace(/[-.]/g, '').length;
  
//           if (digits > EXPONENTIAL_THRESHOLD) {
//             e.target.value = num.toExponential();
//           } else {
//             e.target.value = String(num);
//           }
//         } catch {
//           setError('Invalid number format');
//           e.target.value = '';
//         }
//       }
//     };
  
//     const handleInput = (e) => {
//       let value = e.target.value;
  
//       // Remove leading zeros
//       if (value) {
//         value = value.replace(/^0+(\d)/, '$1'); // Remove leading zeros before digits
//         if (value === '') value = '0'; // If the input is empty after stripping, set it to '0'
//         e.target.value = value; // Update the input value
//       }
  
//       adjustColumnWidths(); // Adjust column widths after input
//     };
  
//     adjustColumnWidths();
  
//     const inputs = matrixRef.current.getElementsByTagName('input');
//     [...inputs].forEach(input => {
//       input.addEventListener('input', handleInput); // Use the new handleInput function
//       input.addEventListener('blur', handleBlur);
//     });
  
//     return () => {
//       [...inputs].forEach(input => {
//         input.removeEventListener('input', handleInput);
//         input.removeEventListener('blur', handleBlur);
//       });
//     };
//   }, [matrix]);


// // const renderMatrixWithLabel = () => {
// //    const matrixElement = (
// //      <div className={styles.block}>
// //        <span data-matrix-id={matrixId.current} className={styles.bracket}>(</span>
// //        <table className={styles.matrix} ref={matrixRef}>
// //          <tbody>
// //            {matrix.map((row, i) => (
// //              <tr key={i}>
// //                {row.map((cell, j) => (
// //                  <td key={j} className={styles.cell}>
// //                    <input type="text" defaultValue={cell} />
// //                  </td>
// //                ))}
// //              </tr>
// //            ))}
// //          </tbody>
// //        </table>  
// //        <span data-matrix-id={matrixId.current} className={styles.bracket}>)</span>
// //      </div>
// //    );

// //    if (!name) return matrixElement;

// //    return (
// //      <div className={labelPosition === 'left' ? styles.leftLabel : styles.topLabel}>
// //        <div className={styles.label}>
// //          {name}{labelPosition === 'left' ? ' = ' : ''}
// //        </div>
// //        {matrixElement}
// //      </div>
// //    );
// //  };

// const renderMatrixWithLabel = () => {
//     const matrixElement = (
//       <div className={styles.block}>
//         <span data-matrix-id={matrixId.current} className={styles.bracket}>(</span>
//         <table className={styles.matrix} ref={matrixRef}>
//           <tbody>
//             {matrix.map((row, i) => (
//               <tr key={i}>
//                 {row.map((cell, j) => (
//                   <td key={j} className={styles.cell}>
//                     <input 
//                       type="text" 
//                       value={cell}  // Changed from defaultValue to value
//                       onChange={(e) => onCellChange?.(i, j, e.target.value)} 
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>  
//         <span data-matrix-id={matrixId.current} className={styles.bracket}>)</span>
//       </div>
//     );
// };


// return (
//    <div className={styles.container}>
//      {error && <div className={styles.error}>{error}</div>}
//      {renderMatrixWithLabel()}
//    </div>
//  );
// }


'use client';
import styles from './Matrix2.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Matrix2({ matrix, name = '', labelPosition = 'top', onCellChange }) {
 const matrixRef = useRef(null);
 const matrixId = useRef(`matrix-${Math.random()}`);
 const MAX_DIGITS = 15;
 const EXPONENTIAL_THRESHOLD = 10;
 const MAX_WIDTH = 200;
 const [error, setError] = useState('');

 useEffect(() => {
   if (!matrixRef.current) return;
   
   const matrixHeight = matrixRef.current?.offsetHeight;
   const brackets = document.querySelectorAll(`.${styles.bracket}`);
   brackets.forEach(b => {
     const scale = matrixHeight/20;
     b.style.marginBottom = `${matrixHeight/5}px`;
     b.style.transform = `scale(1.2, ${scale})`;
   });
 }, [matrix]);

 useEffect(() => {
   if (!matrixRef.current) return;

   const adjustColumnWidths = () => {
     const table = matrixRef.current;
     if (!table) return;

     const allCells = [...table.getElementsByTagName('td')];
     const columns = {};
     let hasError = false;
 
     allCells.forEach((cell) => {
       const input = cell.querySelector('input');
       let value = input.value;
 
       // Remove leading zeros
       if (value) {
         value = value.replace(/^0+(\d)/, '$1'); // Remove leading zeros before digits
         if (value === '') value = '0'; // If the input is empty after stripping, set it to '0'
         input.value = value; // Update the input value
       }
 
       if (value) {
         const num = Number(value);
         if (isNaN(num) || !isFinite(num)) {
           setError('Invalid number format');
           input.value = '';
           hasError = true;
           return;
         }
         if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
           setError('Number too large for calculations');
           input.value = '';
           hasError = true;
           return;
         }
 
         const digits = value.replace(/[-.e]/g, '').length;
         if (digits > MAX_DIGITS) {
           setError(`Maximum precision exceeded (${MAX_DIGITS} significant digits)`);
           hasError = true;
           if (digits > EXPONENTIAL_THRESHOLD) {
             input.value = Number(value).toExponential(MAX_DIGITS - 5);
           }
         }
       }
 
       const colIndex = cell.cellIndex;
       const width = Math.min(input.value.length * 12 + 20, MAX_WIDTH);
       columns[colIndex] = Math.max(columns[colIndex] || 40, width);
     });
 
     if (!hasError) {
       setError('');
     }
 
     allCells.forEach((cell) => {
       cell.style.width = columns[cell.cellIndex] + 'px';
     });
   };
 
   const handleBlur = (e) => {
     if (e.target.value) {
       try {
         const num = Number(e.target.value);
         const digits = String(num).replace(/[-.]/g, '').length;
 
         if (digits > EXPONENTIAL_THRESHOLD) {
           e.target.value = num.toExponential();
         } else {
           e.target.value = String(num);
         }
       } catch {
         setError('Invalid number format');
         e.target.value = '';
       }
     }
   };
 
   const handleInput = (e) => {
     let value = e.target.value;
 
     // Remove leading zeros
     if (value) {
       value = value.replace(/^0+(\d)/, '$1');
       if (value === '') value = '0';
       e.target.value = value;
     }
 
     adjustColumnWidths();
   };

   // Initialize
   requestAnimationFrame(() => {
     adjustColumnWidths();
   });
 
   const inputs = matrixRef.current.getElementsByTagName('input');
   [...inputs].forEach(input => {
     input.addEventListener('input', handleInput);
     input.addEventListener('blur', handleBlur);
   });
 
   return () => {
     if (!matrixRef.current) return;
     const inputs = matrixRef.current.getElementsByTagName('input');
     [...inputs].forEach(input => {
       input.removeEventListener('input', handleInput);
       input.removeEventListener('blur', handleBlur);
     });
   };
 }, [matrix]);

 const renderMatrixWithLabel = () => {
   const matrixElement = (
     <div className={styles.block}>
       <span data-matrix-id={matrixId.current} className={styles.bracket}>(</span>
       <table className={styles.matrix} ref={matrixRef}>
         <tbody>
           {matrix.map((row, i) => (
             <tr key={i}>
               {row.map((cell, j) => (
                 <td key={j} className={styles.cell}>
                   <input 
                     type="text"
                     value={cell}
                     onChange={(e) => onCellChange?.(i, j, e.target.value)}
                   />
                 </td>
               ))}
             </tr>
           ))}
         </tbody>
       </table>
       <span data-matrix-id={matrixId.current} className={styles.bracket}>)</span>
     </div>
   );

   if (!name) return matrixElement;

   return (
     <div className={labelPosition === 'left' ? styles.leftLabel : styles.topLabel}>
       <div className={styles.label}>
         {name}{labelPosition === 'left' ? ' = ' : ''}
       </div>
       {matrixElement}
     </div>
   );
 };

 return (
   <div className={styles.container}>
     {error && <div className={styles.error}>{error}</div>}
     {renderMatrixWithLabel()}
   </div>
 );
}