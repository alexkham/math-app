// 'use client';

// import { useState } from 'react';

// export default function BooleanSimplifier() {
//   const [expression, setExpression] = useState('');
//   const [steps, setSteps] = useState([]);

//   const simplifyExpression = () => {
//     let currentExpression = expression.replace(/\s/g, '');
//     const simplificationSteps = [];

//     const rules = [
//       { from: /A\+0/g, to: 'A', name: 'Identity (A + 0 = A)' },
//       { from: /A\+1/g, to: '1', name: 'Domination (A + 1 = 1)' },
//       { from: /A\*1/g, to: 'A', name: 'Identity (A * 1 = A)' },
//       { from: /A\*0/g, to: '0', name: 'Domination (A * 0 = 0)' },
//       { from: /A\+A/g, to: 'A', name: 'Idempotent (A + A = A)' },
//       { from: /A\*A/g, to: 'A', name: 'Idempotent (A * A = A)' },
//       { from: /A\+A'/g, to: '1', name: 'Complement (A + A\' = 1)' },
//       { from: /A\*A'/g, to: '0', name: 'Complement (A * A\' = 0)' },
//     ];

//     rules.forEach(rule => {
//       const newExpression = currentExpression.replace(rule.from, rule.to);
//       if (newExpression !== currentExpression) {
//         simplificationSteps.push({
//           from: currentExpression,
//           to: newExpression,
//           rule: rule.name
//         });
//         currentExpression = newExpression;
//       }
//     });

//     setSteps(simplificationSteps);
//   };

//   const resetForm = () => {
//     setExpression('');
//     setSteps([]);
//   };

//   return (
//     <div>
//       <h1>Boolean Algebra Simplifier</h1>
//       <input
//         type="text"
//         value={expression}
//         onChange={(e) => setExpression(e.target.value)}
//         placeholder="Enter boolean expression (e.g., A + A*B)"
//       />
//       <button onClick={simplifyExpression}>Simplify</button>
//       <button onClick={resetForm}>Reset</button>

//       {steps.length > 0 && (
//         <div>
//           <h2>Simplification Steps:</h2>
//           {steps.map((step, index) => (
//             <div key={index}>
//               <p>{step.from} → {step.to}</p>
//               <p>Rule applied: {step.rule}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
'use client'
import { useState } from 'react';
import styles from './BooleanSimplifier.module.css';

export default function BooleanSimplifier() {
    const [expression, setExpression] = useState('');
    const [steps, setSteps] = useState([]);

    const simplifyExpression = () => {
        let currentExpression = expression.replace(/\s/g, '');
        const simplificationSteps = [];

        const rules = [
            { from: /A\+0/g, to: 'A', name: 'Identity (A + 0 = A)' },
            { from: /A\+1/g, to: '1', name: 'Domination (A + 1 = 1)' },
            { from: /A\*1/g, to: 'A', name: 'Identity (A * 1 = A)' },
            { from: /A\*0/g, to: '0', name: 'Domination (A * 0 = 0)' },
            { from: /A\+A/g, to: 'A', name: 'Idempotent (A + A = A)' },
            { from: /A\*A/g, to: 'A', name: 'Idempotent (A * A = A)' },
            { from: /A\+A'/g, to: '1', name: 'Complement (A + A\' = 1)' },
            { from: /A\*A'/g, to: '0', name: 'Complement (A * A\' = 0)' },
        ];

        rules.forEach(rule => {
            const newExpression = currentExpression.replace(rule.from, rule.to);
            if (newExpression !== currentExpression) {
                simplificationSteps.push({
                    from: currentExpression,
                    to: newExpression,
                    rule: rule.name
                });
                currentExpression = newExpression;
            }
        });

        setSteps(simplificationSteps);
    };

    const resetForm = () => {
        setExpression('');
        setSteps([]);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Boolean Algebra Simplifier</h1>
            <input
                className={styles.inputField}
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="Enter boolean expression (e.g., A + A*B)"
            />
            <button className={styles.button} onClick={simplifyExpression}>Simplify</button>
            <button className={styles.button} onClick={resetForm}>Reset</button>

            {steps.length > 0 && (
                <div className={styles.stepsContainer}>
                    <h2>Simplification Steps:</h2>
                    {steps.map((step, index) => (
                        <div className={styles.step} key={index}>
                            <p>{step.from} → {step.to}</p>
                            <p className={styles.rule}>Rule applied: {step.rule}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
