// // import { useState, useCallback } from "react";
// // import { processContent } from "@/app/utils/contentProcessor";


// // import {
// //   THEME,
// //   clamp,
// //   formatNum,
// //   formatComplex,
// //   ComplexPlane,
// //   PlanePoint,
// //   PlaneProjection,
// //   PlaneTriangle,
// //   RangeControl,
// //   CoordInput,
// //   ExplanationPanel,
// //   FormulaCard,
// //   getDefaultExplanation,
// // } from "./ComplexPlaneKit";

// // const C = THEME.colors;

// // /* ═══════════════════════════════════════════
// //    COMPLEX EXPLORER
   
// //    Props:
// //      explanationEngine  — (a, b) => { title, lines, highlight }
// //                           Falls back to getDefaultExplanation
// //      initialA           — starting real part (default 2)
// //      initialB           — starting imaginary part (default 3)
// //      initialRange       — starting range (default 5)
// //    ═══════════════════════════════════════════ */

// // export default function ComplexExplorer({
// //   explanationEngine,
// //   initialA = 2,
// //   initialB = 3,
// //   initialRange = 5,
// // }) {
// //   const [a, setA] = useState(initialA);
// //   const [b, setB] = useState(initialB);
// //   const [range, setRange] = useState(initialRange);

// //   const getExplanation = explanationEngine || getDefaultExplanation;

// //   const handleDrag = useCallback((newA, newB) => {
// //     setA(newA);
// //     setB(newB);
// //   }, []);

// //   const handleRangeChange = useCallback((newRange) => {
// //     setRange(newRange);
// //     setA((prev) => clamp(prev, -newRange, newRange));
// //     setB((prev) => clamp(prev, -newRange, newRange));
// //   }, []);

// //   const explanation = getExplanation(a, b);
// //   const modulus = Math.sqrt(a * a + b * b);

// //   return (
// //     <div style={styles.root}>
// //       <link
// //         href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
// //         rel="stylesheet"
// //       />

// //       <header style={styles.header}>
// //         {/* <h1 style={styles.title}>Complex Number Explorer</h1> */}
// //         <p style={styles.subtitle}>Drag the point or type coordinates to explore</p>
// //       </header>

// //       <div style={styles.main}>
// //         {/* ── Left: controls + plane ── */}
// //         <div style={styles.leftCol}>
// //           <div style={styles.controlsBar}>
// //             <CoordInput a={a} b={b} onAChange={setA} onBChange={setB} range={range} />
// //             <RangeControl range={range} onRangeChange={handleRangeChange} />
// //           </div>

// //           <div style={styles.planeWrap}>
// //             <ComplexPlane range={range} onPlaneDrag={handleDrag}>
// //               {({ ox, oy, unit }) => (
// //                 <>
// //                   <PlaneTriangle a={a} b={b} ox={ox} oy={oy} unit={unit} />
// //                   <PlaneProjection a={a} b={b} ox={ox} oy={oy} unit={unit} />

// //                   {b !== 0 && (
// //                     <>
// //                       <line
// //                         x1={ox + a * unit} y1={oy - b * unit}
// //                         x2={ox + a * unit} y2={oy + b * unit}
// //                         stroke={C.blue} strokeWidth="1" strokeDasharray="4,4" opacity="0.2"
// //                       />
// //                       <PlanePoint a={a} b={-b} ox={ox} oy={oy} unit={unit} color={C.orange} label="z̄" r={4.5} ghost />
// //                     </>
// //                   )}

// //                   {modulus > 0 && (
// //                     <circle
// //                       cx={ox} cy={oy} r={modulus * unit}
// //                       fill="none" stroke={C.blue} strokeWidth="1.2" strokeDasharray="6,4" opacity="0.15"
// //                     />
// //                   )}

// //                   <PlanePoint
// //                     a={a} b={b} ox={ox} oy={oy} unit={unit}
// //                     color={C.blue}
// //                     label={`z = ${formatComplex(a, b)}`}
// //                     labelOffset={{ dx: 12, dy: -10 }}
// //                     r={7}
// //                   />
// //                 </>
// //               )}
// //             </ComplexPlane>
// //           </div>
// //         </div>

// //         {/* ── Right: info panels ── */}
// //         <div style={styles.rightCol}>
// //           <div style={styles.valueDisplay}>
// //             <span style={{ color: C.muted, fontSize: "14px" }}>z = </span>
// //             <span style={{ color: C.text, fontSize: "22px", fontWeight: 700 }}>
// //               {formatComplex(a, b)}
// //             </span>
// //           </div>

// //           <div style={styles.formulaRow}>
// //             <FormulaCard label="Real Part" accent={C.orange}>
// //               <span style={{ color: C.orange, fontWeight: 700, fontSize: "18px" }}>{formatNum(a)}</span>
// //             </FormulaCard>
// //             <FormulaCard label="Imaginary Part" accent={C.navy}>
// //               <span style={{ color: C.navy, fontWeight: 700, fontSize: "18px" }}>{formatNum(b)}</span>
// //             </FormulaCard>
// //             <FormulaCard label="Modulus" accent={C.blue}>
// //               <span style={{ color: C.blue, fontWeight: 700, fontSize: "18px" }}>{formatNum(modulus)}</span>
// //             </FormulaCard>
// //           </div>

// //           <ExplanationPanel
// //             title={explanation.title}
// //             lines={explanation.lines}            
// //             highlight={explanation.highlight}
// //           />

// //           <FormulaCard label="Conjugate" accent={C.orange}>
// //             <span style={{ color: C.text, fontSize: "16px" }}>z̄ = {formatComplex(a, -b)}</span>
// //           </FormulaCard>

// //           <p style={styles.hint}>
// //             Click or drag on the plane, or type values above. Try the axes and the origin.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ═══════════════════════════════════════════
// //    APP STYLES
// //    ═══════════════════════════════════════════ */

// // const styles = {
// //   root: {
// //     fontFamily: THEME.font,
// //     backgroundColor: C.bg,
// //     minHeight: "100vh",
// //     padding: "20px 24px",
// //     boxSizing: "border-box",
// //     color: C.text,
// //   },
// //   header: {
// //     textAlign: "center",
// //     marginBottom: "16px",
// //   },
// //   title: {
// //     fontSize: "28px",
// //     fontWeight: 700,
// //     color: C.text,
// //     margin: "0 0 4px 0",
// //     letterSpacing: "-0.5px",
// //   },
// //   subtitle: {
// //     fontSize: "14px",
// //     color: C.muted,
// //     margin: 0,
// //     fontStyle: "italic",
// //   },
// //   main: {
// //     display: "flex",
// //     gap: "24px",
// //     maxWidth: "1120px",
// //     margin: "0 auto",
// //     alignItems: "flex-start",
// //     flexWrap: "wrap",
// //   },
// //   leftCol: {
// //     flex: "1 1 500px",
// //     minWidth: "340px",
// //     maxWidth: "560px",
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "10px",
// //   },
// //   controlsBar: {
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     gap: "12px",
// //     backgroundColor: C.card,
// //     borderRadius: "12px",
// //     border: `1.5px solid ${C.border}`,
// //     padding: "10px 16px",
// //     boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
// //     flexWrap: "wrap",
// //   },
// //   planeWrap: {
// //     backgroundColor: C.card,
// //     borderRadius: "16px",
// //     border: `1.5px solid ${C.border}`,
// //     padding: "12px",
// //     boxShadow: "0 2px 12px rgba(16,32,80,0.06)",
// //   },
// //   rightCol: {
// //     flex: "1 1 320px",
// //     minWidth: "280px",
// //     maxWidth: "420px",
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "14px",
// //   },
// //   valueDisplay: {
// //     backgroundColor: C.card,
// //     borderRadius: "12px",
// //     border: `1.5px solid ${C.border}`,
// //     padding: "14px 20px",
// //     textAlign: "center",
// //     boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
// //   },
// //   formulaRow: {
// //     display: "flex",
// //     gap: "10px",
// //   },
// //   hint: {
// //     fontSize: "12px",
// //     color: C.light,
// //     fontStyle: "italic",
// //     textAlign: "center",
// //     margin: "4px 0 0 0",
// //   },
// // };


// import { useState, useCallback } from "react";
// import { processContent } from "@/app/utils/contentProcessor";

// import {
//   THEME,
//   clamp,
//   formatNum,
//   formatComplex,
//   ComplexPlane,
//   PlanePoint,
//   PlaneProjection,
//   PlaneTriangle,
//   RangeControl,
//   CoordInput,
//   ExplanationPanel,
//   FormulaCard,
//   getDefaultExplanation,
// } from "./ComplexPlaneKit";

// const C = THEME.colors;

// /* ═══════════════════════════════════════════
//    COMPLEX EXPLORER
//    ═══════════════════════════════════════════ */

// export default function ComplexExplorer({
//   explanationEngine,
//   initialA = 2,
//   initialB = 3,
//   initialRange = 5,
// }) {
//   const [a, setA] = useState(initialA);
//   const [b, setB] = useState(initialB);
//   const [range, setRange] = useState(initialRange);

//   const getExplanation = explanationEngine || getDefaultExplanation;

//   const handleDrag = useCallback((newA, newB) => {
//     setA(newA);
//     setB(newB);
//   }, []);

//   const handleRangeChange = useCallback((newRange) => {
//     setRange(newRange);
//     setA((prev) => clamp(prev, -newRange, newRange));
//     setB((prev) => clamp(prev, -newRange, newRange));
//   }, []);

//   const explanation = getExplanation(a, b);
//   const modulus = Math.sqrt(a * a + b * b);

//   return (
//     <div style={styles.root}>
//       <link
//         href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
//         rel="stylesheet"
//       />

//       <header style={styles.header}>
//         <p style={styles.subtitle}>Drag the point or type coordinates to explore</p>
//       </header>

//       <div style={styles.main}>
//         {/* ── Left: controls + plane ── */}
//         <div style={styles.leftCol}>
//           <div style={styles.controlsBar}>
//             <CoordInput a={a} b={b} onAChange={setA} onBChange={setB} range={range} />
//             <RangeControl range={range} onRangeChange={handleRangeChange} />
//           </div>

//           <div style={styles.planeWrap}>
//             <ComplexPlane range={range} onPlaneDrag={handleDrag}>
//               {({ ox, oy, unit }) => (
//                 <>
//                   <PlaneTriangle a={a} b={b} ox={ox} oy={oy} unit={unit} />
//                   <PlaneProjection a={a} b={b} ox={ox} oy={oy} unit={unit} />

//                   {b !== 0 && (
//                     <>
//                       <line
//                         x1={ox + a * unit} y1={oy - b * unit}
//                         x2={ox + a * unit} y2={oy + b * unit}
//                         stroke={C.blue} strokeWidth="1" strokeDasharray="4,4" opacity="0.2"
//                       />
//                       <PlanePoint a={a} b={-b} ox={ox} oy={oy} unit={unit} color={C.orange} label="z&#x305;" r={4.5} ghost />
//                     </>
//                   )}

//                   {modulus > 0 && (
//                     <circle
//                       cx={ox} cy={oy} r={modulus * unit}
//                       fill="none" stroke={C.blue} strokeWidth="1.2" strokeDasharray="6,4" opacity="0.15"
//                     />
//                   )}

//                   <PlanePoint
//                     a={a} b={b} ox={ox} oy={oy} unit={unit}
//                     color={C.blue}
//                     label={`z = ${formatComplex(a, b)}`}
//                     labelOffset={{ dx: 12, dy: -10 }}
//                     r={7}
//                   />
//                 </>
//               )}
//             </ComplexPlane>
//           </div>
//         </div>

//         {/* ── Right: info panels ── */}
//         <div style={styles.rightCol}>
//           <div style={styles.valueDisplay}>
//             <span style={{ color: C.muted, fontSize: "14px" }}>z = </span>
//             <span style={{ color: C.text, fontSize: "22px", fontWeight: 700 }}>
//               {formatComplex(a, b)}
//             </span>
//           </div>

//           <div style={styles.formulaRow}>
//             <FormulaCard label="Real Part" accent={C.orange}>
//               <span style={{ color: C.orange, fontWeight: 700, fontSize: "18px" }}>{formatNum(a)}</span>
//             </FormulaCard>
//             <FormulaCard label="Imaginary Part" accent={C.navy}>
//               <span style={{ color: C.navy, fontWeight: 700, fontSize: "18px" }}>{formatNum(b)}</span>
//             </FormulaCard>
//             <FormulaCard label="Modulus" accent={C.blue}>
//               <span style={{ color: C.blue, fontWeight: 700, fontSize: "18px" }}>{formatNum(modulus)}</span>
//             </FormulaCard>
//           </div>

//           <ExplanationPanel
//             title={explanation.title}
//             lines={explanation.lines}
//             highlight={explanation.highlight}
//           />

//           <FormulaCard label="Conjugate" accent={C.orange}>
//             <span style={{ color: C.text, fontSize: "16px" }}>z&#x305; = {formatComplex(a, -b)}</span>
//           </FormulaCard>

//           <p style={styles.hint}>
//             Click or drag on the plane, or type values above. Try the axes and the origin.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   root: {
//     fontFamily: THEME.font,
//     backgroundColor: C.bg,
//     minHeight: "100vh",
//     padding: "20px 28px",
//     boxSizing: "border-box",
//     color: C.text,
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "16px",
//     borderBottom: `2px solid ${C.navy}`,
//     paddingBottom: "10px",
//     maxWidth: "1180px",
//     margin: "0 auto 16px auto",
//   },
//   subtitle: {
//     fontSize: "14px",
//     color: C.muted,
//     margin: 0,
//     fontStyle: "italic",
//   },
//   main: {
//     display: "flex",
//     gap: "24px",
//     maxWidth: "1180px",
//     margin: "0 auto",
//     alignItems: "flex-start",
//     flexWrap: "wrap",
//   },
//   leftCol: {
//     flex: "1 1 500px",
//     minWidth: "340px",
//     maxWidth: "560px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   controlsBar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     gap: "12px",
//     backgroundColor: C.card,
//     borderRadius: "12px",
//     border: `1.5px solid ${C.border}`,
//     padding: "10px 16px",
//     boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
//     flexWrap: "wrap",
//   },
//   planeWrap: {
//     backgroundColor: C.card,
//     borderRadius: "16px",
//     border: `1.5px solid ${C.border}`,
//     padding: "12px",
//     boxShadow: "0 2px 12px rgba(16,32,80,0.06)",
//   },
//   rightCol: {
//     flex: "1 1 320px",
//     minWidth: "280px",
//     maxWidth: "420px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   },
//   valueDisplay: {
//     backgroundColor: C.card,
//     borderRadius: "12px",
//     border: `1.5px solid ${C.border}`,
//     padding: "14px 20px",
//     textAlign: "center",
//     boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
//   },
//   formulaRow: {
//     display: "flex",
//     gap: "10px",
//   },
//   hint: {
//     fontSize: "12px",
//     color: C.light,
//     fontStyle: "italic",
//     textAlign: "center",
//     margin: "4px 0 0 0",
//   },
// };


import { useState, useCallback } from "react";

import {
  THEME,
  clamp,
  formatNum,
  formatComplex,
  ComplexPlane,
  PlanePoint,
  PlaneProjection,
  PlaneTriangle,
  RangeControl,
  CoordInput,
  ExplanationPanel,
  FormulaCard,
  getDefaultExplanation,
} from "./ComplexPlaneKit";

const C = THEME.colors;

/* ═══════════════════════════════════════════
   COMPLEX EXPLORER
   ═══════════════════════════════════════════ */

export default function ComplexExplorer({
  explanationEngine,
  initialA = 2,
  initialB = 3,
  initialRange = 5,
}) {
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);
  const [range, setRange] = useState(initialRange);

  const getExplanation = explanationEngine || getDefaultExplanation;

  const handleDrag = useCallback((newA, newB) => {
    setA(newA);
    setB(newB);
  }, []);

  const handleRangeChange = useCallback((newRange) => {
    setRange(newRange);
    setA((prev) => clamp(prev, -newRange, newRange));
    setB((prev) => clamp(prev, -newRange, newRange));
  }, []);

  const explanation = getExplanation(a, b);
  const modulus = Math.sqrt(a * a + b * b);

  return (
    <div style={styles.root}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
        rel="stylesheet"
      />

      <header style={styles.header}>
        <p style={styles.subtitle}>Drag the point or type coordinates to explore</p>
      </header>

      <div style={styles.main}>
        {/* ── Left: controls + plane ── */}
        <div style={styles.leftCol}>
          <div style={styles.controlsBar}>
            <CoordInput a={a} b={b} onAChange={setA} onBChange={setB} range={range} />
            <RangeControl range={range} onRangeChange={handleRangeChange} />
          </div>

          <div style={styles.planeWrap}>
            <ComplexPlane range={range} onPlaneDrag={handleDrag}>
              {({ ox, oy, unit }) => (
                <>
                  <PlaneTriangle a={a} b={b} ox={ox} oy={oy} unit={unit} />
                  <PlaneProjection a={a} b={b} ox={ox} oy={oy} unit={unit} />

                  {b !== 0 && (
                    <>
                      <line
                        x1={ox + a * unit} y1={oy - b * unit}
                        x2={ox + a * unit} y2={oy + b * unit}
                        stroke={C.blue} strokeWidth="1" strokeDasharray="4,4" opacity="0.2"
                      />
                      <PlanePoint a={a} b={-b} ox={ox} oy={oy} unit={unit} color={C.orange} label="z&#x305;" r={4.5} ghost />
                    </>
                  )}

                  {modulus > 0 && (
                    <circle
                      cx={ox} cy={oy} r={modulus * unit}
                      fill="none" stroke={C.blue} strokeWidth="1.2" strokeDasharray="6,4" opacity="0.15"
                    />
                  )}

                  <PlanePoint
                    a={a} b={b} ox={ox} oy={oy} unit={unit}
                    color={C.blue}
                    label={`z = ${formatComplex(a, b)}`}
                    labelOffset={{ dx: 12, dy: -10 }}
                    r={7}
                  />
                </>
              )}
            </ComplexPlane>
          </div>
        </div>

        {/* ── Right: info panels ── */}
        <div style={styles.rightCol}>
          <div style={styles.valueDisplay}>
            <span style={{ color: C.muted, fontSize: "14px" }}>z = </span>
            <span style={{ color: C.text, fontSize: "22px", fontWeight: 700 }}>
              {formatComplex(a, b)}
            </span>
          </div>

          <div style={styles.formulaRow}>
            <FormulaCard label="Real Part" accent={C.orange}>
              <span style={{ color: C.orange, fontWeight: 700, fontSize: "18px" }}>{formatNum(a)}</span>
            </FormulaCard>
            <FormulaCard label="Imaginary Part" accent={C.navy}>
              <span style={{ color: C.navy, fontWeight: 700, fontSize: "18px" }}>{formatNum(b)}</span>
            </FormulaCard>
            <FormulaCard label="Modulus" accent={C.blue}>
              <span style={{ color: C.blue, fontWeight: 700, fontSize: "18px" }}>{formatNum(modulus)}</span>
            </FormulaCard>
          </div>

          <ExplanationPanel
            title={explanation.title}
            lines={explanation.lines}
            highlight={explanation.highlight}
          />

          <FormulaCard label="Conjugate" accent={C.orange}>
            <span style={{ color: C.text, fontSize: "16px" }}>z&#x305; = {formatComplex(a, -b)}</span>
          </FormulaCard>

          <p style={styles.hint}>
            Click or drag on the plane, or type values above. Try the axes and the origin.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: THEME.font,
    backgroundColor: C.bg,
    minHeight: "100vh",
    padding: "20px 28px",
    boxSizing: "border-box",
    color: C.text,
    maxWidth: "1080px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "16px",
    borderBottom: `2px solid ${C.navy}`,
    paddingBottom: "10px",
    maxWidth: "1180px",
    margin: "0 auto 16px auto",
  },
  subtitle: {
    fontSize: "14px",
    color: C.muted,
    margin: 0,
    fontStyle: "italic",
  },
  main: {
    display: "flex",
    gap: "24px",
    maxWidth: "1180px",
    margin: "0 auto",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  leftCol: {
    flex: "1 1 500px",
    minWidth: "340px",
    maxWidth: "560px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  controlsBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    backgroundColor: C.card,
    borderRadius: "12px",
    border: `1.5px solid ${C.border}`,
    padding: "10px 16px",
    boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
    flexWrap: "wrap",
  },
  planeWrap: {
    backgroundColor: C.card,
    borderRadius: "16px",
    border: `1.5px solid ${C.border}`,
    padding: "12px",
    boxShadow: "0 2px 12px rgba(16,32,80,0.06)",
  },
  rightCol: {
    flex: "1 1 320px",
    minWidth: "280px",
    maxWidth: "420px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  valueDisplay: {
    backgroundColor: C.card,
    borderRadius: "12px",
    border: `1.5px solid ${C.border}`,
    padding: "14px 20px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(16,32,80,0.05)",
  },
  formulaRow: {
    display: "flex",
    gap: "10px",
  },
  hint: {
    fontSize: "12px",
    color: C.light,
    fontStyle: "italic",
    textAlign: "center",
    margin: "4px 0 0 0",
  },
};