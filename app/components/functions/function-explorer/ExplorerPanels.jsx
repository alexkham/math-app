// // // ============================================================
// // // ExplorerPanels.jsx
// // // Per-aspect accordion panels + theory reading list.
// // // Each panel takes pipeline data and renders its accordion using atoms.
// // // ============================================================

// // import React from 'react';
// // import { T } from './FunctionExplorer';
// // import {
// //   Accordion, PropRow, Tag, LinkChip, LinksRow,
// //   SignChart, MonotonicityStrip, ParentOverlay,
// // } from './ExplorerAtoms';

// // // Small helper used in multiple panels
// // function fmtNum(v, digits = 3) {
// //   if (v === null || v === undefined || !isFinite(v)) return '\u2014';
// //   const r = Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits);
// //   return Number.isInteger(r) ? r.toString() : r.toFixed(digits);
// // }
// // function fmtInterval(from, to) {
// //   const a = isFinite(from) ? fmtNum(from, 2) : '\u2212\u221E';
// //   const b = isFinite(to)   ? fmtNum(to, 2)   : '+\u221E';
// //   return `(${a}, ${b})`;
// // }

// // // ============================================================
// // // PROPERTIES TAB (10 panels)
// // // ============================================================

// // export function AboutPanel({ data }) {
// //   return (
// //     <Accordion title="About this function" summary={`${data.family} \u00B7 ${data.formula}`} defaultOpen>
// //       <PropRow k="Family"   v={<Tag variant="affirm">{data.family}</Tag>} />
// //       <PropRow k="Formula"  v={data.formula} mono />
// //       <PropRow k="Variable" v="x" mono />
// //       <LinksRow>
// //         <LinkChip>Theory: Function families</LinkChip>
// //         <LinkChip>Theory: Reading formulas</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function DomainRangePanel({ data }) {
// //   const summary = `${data.domain} \u2192 ${data.range}`;
// //   return (
// //     <Accordion title="Domain &amp; Range" summary={summary} defaultOpen>
// //       <PropRow k="Domain"       v={data.domain} mono />
// //       <PropRow k="Range"        v={data.range}  mono />
// //       <PropRow k="Codomain"     v={data.codomain} mono />
// //       <PropRow k="Restrictions" v={data.domain === '\u211D' ? <Tag variant="gray">None</Tag> : <Tag variant="dim">See domain</Tag>} />
// //       <LinksRow>
// //         <LinkChip>Theory: Domain &amp; range</LinkChip>
// //         <LinkChip>Tool: /visual-tools/domain</LinkChip>
// //         <LinkChip>Tool: /visual-tools/range</LinkChip>
// //         <LinkChip ext>Domain calculator</LinkChip>
// //         <LinkChip ext>Range calculator</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function ZerosPanel({ data }) {
// //   const summary = `${data.roots.length} root${data.roots.length === 1 ? '' : 's'} \u00B7 y@(0, ${fmtNum(data.yIntercept, 2)})`;
// //   const rootsText = data.roots.length === 0
// //     ? <Tag variant="gray">None</Tag>
// //     : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.roots.map(r => fmtNum(r, 3)).join(', ')}</span>;
// //   return (
// //     <Accordion title="Zeros, Intercepts &amp; Sign" summary={summary} defaultOpen>
// //       <PropRow k="Roots"        v={rootsText} />
// //       <PropRow k="y-intercept"  v={data.yIntercept === null ? <Tag variant="gray">undef</Tag> : `(0, ${fmtNum(data.yIntercept, 3)})`} mono />
// //       {data.sign && data.sign.length > 0 && <SignChart intervals={data.sign} />}
// //       <LinksRow>
// //         <LinkChip>Theory: Roots &amp; factoring</LinkChip>
// //         <LinkChip>Theory: Sign analysis</LinkChip>
// //         <LinkChip ext>Root finder</LinkChip>
// //         <LinkChip ext>Sign chart solver</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function SymmetryPanel({ data }) {
// //   const labelMap = { even: 'Even', odd: 'Odd', neither: 'Neither' };
// //   const note = { even: 'f(\u2212x) = f(x)', odd: 'f(\u2212x) = \u2212f(x)', neither: 'no parity' };
// //   return (
// //     <Accordion title="Symmetry &amp; Periodicity" summary={`${labelMap[data.parity]} \u00B7 aperiodic`}>
// //       <PropRow k="Parity" v={<><Tag variant={data.parity === 'neither' ? 'gray' : 'affirm'}>{labelMap[data.parity]}</Tag>{' '}<span style={{ color: T.text.muted, fontSize: 11 }}>{note[data.parity]}</span></>} />
// //       <PropRow k="Axis"     v={data.parity === 'even' ? 'x = 0' : <Tag variant="gray">None</Tag>} mono />
// //       <PropRow k="Periodic" v={<Tag variant="gray">No</Tag>} />
// //       <LinksRow>
// //         <LinkChip>Theory: Even/odd functions</LinkChip>
// //         <LinkChip>Tool: /visual-tools/symmetry</LinkChip>
// //         <LinkChip ext>Symmetry detector</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function ContinuityPanel({ data }) {
// //   return (
// //     <Accordion title="Continuity &amp; Smoothness" summary={data.continuous ? 'continuous' : 'has gaps'}>
// //       <PropRow k="Continuity"   v={data.continuous ? <Tag variant="affirm">Continuous</Tag> : <Tag variant="dim">Has gaps</Tag>} />
// //       <PropRow k="Discontinuities" v={data.continuous ? <Tag variant="gray">None</Tag> : <Tag variant="dim">See asymptotes</Tag>} />
// //       <LinksRow>
// //         <LinkChip>Theory: Continuity</LinkChip>
// //         <LinkChip>/calculus/continuity</LinkChip>
// //         <LinkChip ext>Continuity checker</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function AsymptotesPanel({ data }) {
// //   const verticalCount = data.asymptotes.length;
// //   const summary = verticalCount === 0 ? 'none' : `${verticalCount} vertical`;
// //   return (
// //     <Accordion title="Asymptotes &amp; End Behavior" summary={summary}>
// //       <PropRow k="Vertical" v={verticalCount === 0 ? <Tag variant="gray">None</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.asymptotes.map(a => `x = ${fmtNum(a, 3)}`).join(', ')}</span>} />
// //       <PropRow k="Horizontal" v={<Tag variant="gray">Detect manually</Tag>} />
// //       <PropRow k="x \u2192 +\u221E" v={data.farRight === null ? <Tag variant="gray">undef</Tag> : isFinite(data.farRight) ? `f \u2192 ${fmtNum(data.farRight, 2)}` : `f \u2192 ${data.farRight > 0 ? '+' : '\u2212'}\u221E`} mono />
// //       <PropRow k="x \u2192 \u2212\u221E" v={data.farLeft === null ? <Tag variant="gray">undef</Tag> : isFinite(data.farLeft) ? `f \u2192 ${fmtNum(data.farLeft, 2)}` : `f \u2192 ${data.farLeft > 0 ? '+' : '\u2212'}\u221E`} mono />
// //       <LinksRow>
// //         <LinkChip>Theory: Asymptotes</LinkChip>
// //         <LinkChip>Tool: /visual-tools/asymptotes</LinkChip>
// //         <LinkChip ext>Asymptote finder</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function MonotonicityPanel({ data }) {
// //   const incCount = data.mono.filter(m => m.dir === 'inc').length;
// //   const decCount = data.mono.filter(m => m.dir === 'dec').length;
// //   const summary = `${decCount}\u2193 ${incCount}\u2191 \u00B7 ${data.extrema.length} ext`;
// //   return (
// //     <Accordion title="Monotonicity &amp; Extrema" summary={summary} defaultOpen>
// //       {data.mono.map((m, i) => (
// //         <PropRow
// //           key={i}
// //           k={m.dir === 'inc' ? 'Increasing' : (m.dir === 'dec' ? 'Decreasing' : 'Constant')}
// //           v={fmtInterval(m.from, m.to)} mono
// //         />
// //       ))}
// //       {data.extrema.length > 0 && data.extrema.map((e, i) => (
// //         <PropRow
// //           key={`ext${i}`}
// //           k={e.kind === 'min' ? 'Local min' : 'Local max'}
// //           v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>({fmtNum(e.x, 3)}, {fmtNum(e.y, 3)})</span>}
// //         />
// //       ))}
// //       {data.mono && data.mono.length > 0 && <MonotonicityStrip intervals={data.mono} />}
// //       <LinksRow>
// //         <LinkChip>Theory: Monotonicity</LinkChip>
// //         <LinkChip>/calculus/critical-points</LinkChip>
// //         <LinkChip ext>Extrema finder</LinkChip>
// //         <LinkChip ext>Monotonicity analyzer</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function ConcavityPanel({ data }) {
// //   const upCount   = data.concavity.filter(c => c.kind === 'up').length;
// //   const downCount = data.concavity.filter(c => c.kind === 'down').length;
// //   const summary = `${upCount}\u222A ${downCount}\u2229 \u00B7 ${data.inflections.length} infl`;
// //   return (
// //     <Accordion title="Concavity &amp; Inflection" summary={summary}>
// //       {data.concavity.map((c, i) => (
// //         <PropRow
// //           key={i}
// //           k={c.kind === 'up' ? 'Concave up' : (c.kind === 'down' ? 'Concave down' : 'Flat')}
// //           v={fmtInterval(c.from, c.to)} mono
// //         />
// //       ))}
// //       {data.inflections.length > 0 && data.inflections.map((p, i) => (
// //         <PropRow
// //           key={`inf${i}`}
// //           k="Inflection"
// //           v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>({fmtNum(p.x, 3)}, {fmtNum(p.y, 3)})</span>}
// //         />
// //       ))}
// //       {data.inflections.length === 0 && <PropRow k="Inflection" v={<Tag variant="gray">None</Tag>} />}
// //       <LinksRow>
// //         <LinkChip>Theory: Concavity</LinkChip>
// //         <LinkChip>/calculus/second-derivative</LinkChip>
// //         <LinkChip ext>Concavity analyzer</LinkChip>
// //         <LinkChip ext>Inflection finder</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function BoundednessPanel({ data }) {
// //   const summary = data.bounded ? `inf = ${fmtNum(data.bounds.lo, 2)} \u00B7 sup = ${fmtNum(data.bounds.hi, 2)}` : 'unbounded';
// //   return (
// //     <Accordion title="Boundedness" summary={summary}>
// //       <PropRow k="Lower bound" v={isFinite(data.bounds.lo) ? <><span style={{ fontFamily: T.font.mono }}>{fmtNum(data.bounds.lo, 3)}</span>{' '}<Tag variant="affirm">attained</Tag></> : <Tag variant="gray">Unbounded below</Tag>} />
// //       <PropRow k="Upper bound" v={isFinite(data.bounds.hi) ? <><span style={{ fontFamily: T.font.mono }}>{fmtNum(data.bounds.hi, 3)}</span>{' '}<Tag variant="affirm">attained</Tag></> : <Tag variant="gray">Unbounded above</Tag>} />
// //       <PropRow k="Infimum"  v={isFinite(data.bounds.lo) ? fmtNum(data.bounds.lo, 3) : '\u2212\u221E'} mono />
// //       <PropRow k="Supremum" v={isFinite(data.bounds.hi) ? fmtNum(data.bounds.hi, 3) : '+\u221E'} mono />
// //       <LinksRow>
// //         <LinkChip>Theory: Boundedness</LinkChip>
// //         <LinkChip>Theory: Sup, inf, max, min</LinkChip>
// //         <LinkChip ext>Bounds calculator</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function InvertibilityPanel({ data }) {
// //   const summary = data.injective ? 'invertible' : 'not 1-1 \u00B7 restrict to invert';
// //   return (
// //     <Accordion title="Injectivity &amp; Invertibility" summary={summary}>
// //       <PropRow k="Injective"  v={data.injective ? <Tag variant="affirm">Yes</Tag> : <Tag variant="dim">No</Tag>} />
// //       <PropRow k="Surjective" v={<Tag variant="dim">Depends on codomain</Tag>} />
// //       <PropRow k="Bijective"  v={data.injective ? <Tag variant="affirm">Yes (onto its range)</Tag> : <Tag variant="dim">No</Tag>} />
// //       {!data.injective && data.extrema.length > 0 && (
// //         <PropRow k="Restrict to" v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>e.g. [{fmtNum(data.extrema[0].x, 2)}, \u221E)</span>} />
// //       )}
// //       <LinksRow>
// //         <LinkChip>Theory: Inverse functions</LinkChip>
// //         <LinkChip>Tool: /visual-tools/inverse-function</LinkChip>
// //         <LinkChip ext>Inverse calculator</LinkChip>
// //         <LinkChip ext>Injectivity tester</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // // ============================================================
// // // TRANSFORMATIONS TAB (2 panels)
// // // ============================================================

// // export function ParentTransformsPanel({ data }) {
// //   return (
// //     <Accordion title="Parent &amp; Transformations" summary="see overlay below" defaultOpen>
// //       <PropRow k="Family"  v={<Tag variant="affirm">{data.family}</Tag>} />
// //       <PropRow k="Formula" v={data.formula} mono />
// //       <ParentOverlay />
// //       <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
// //         Symbolic decomposition into parent + transforms is family-specific and not auto-detected in v1.
// //       </div>
// //       <LinksRow>
// //         <LinkChip>Theory: Transformations</LinkChip>
// //         <LinkChip>Tool: /visual-tools/transformations</LinkChip>
// //         <LinkChip ext>Transform calculator</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function OperationsPanel({ data }) {
// //   return (
// //     <Accordion title="Algebraic Operations" summary="sum \u00B7 product \u00B7 composition" defaultOpen>
// //       <PropRow k="Sum"         v="(f + g)(x)" mono />
// //       <PropRow k="Difference"  v="(f \u2212 g)(x)" mono />
// //       <PropRow k="Product"     v="(f \u00B7 g)(x)" mono />
// //       <PropRow k="Quotient"    v="(f / g)(x), g \u2260 0" mono />
// //       <PropRow k="Composition" v="(f \u2218 g)(x)" mono />
// //       <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
// //         Add a second function via the funcbar to perform these interactively.
// //       </div>
// //       <LinksRow>
// //         <LinkChip>Theory: Operations on functions</LinkChip>
// //         <LinkChip>Tool: /visual-tools/composition</LinkChip>
// //         <LinkChip>Tool: /visual-tools/piecewise</LinkChip>
// //         <LinkChip ext>Composition calculator</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // // ============================================================
// // // CALCULUS BRIDGE TAB (4 panels)
// // // ============================================================

// // export function DerivativePanel({ data, cursor }) {
// //   const slope = (() => {
// //     try { return data.fnPrime(cursor.x); } catch { return null; }
// //   })();
// //   return (
// //     <Accordion title="First Derivative" summary={`f\u2032(x) = ${data.derivStr}`} defaultOpen>
// //       <PropRow k="f\u2032(x)"   v={data.derivStr} mono />
// //       <PropRow k="At cursor" v={slope === null || !isFinite(slope) ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>f\u2032({fmtNum(cursor.x, 2)}) \u2248 {fmtNum(slope, 3)}</span>} />
// //       <PropRow k="Critical pts" v={data.extrema.length === 0 ? <Tag variant="gray">None in window</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.extrema.map(e => fmtNum(e.x, 3)).join(', ')}</span>} />
// //       <div style={{
// //         marginTop: 8, padding: '7px 10px',
// //         background: T.bg.tintBlue, borderLeft: `2px solid ${T.c.blue}`,
// //         borderRadius: '0 4px 4px 0', fontSize: 11.5, color: T.text.body, lineHeight: 1.5,
// //       }}>
// //         <span style={{ fontWeight: 600, color: T.c.blueD, display: 'block', marginBottom: 2, fontSize: 10.5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Tip</span>
// //         Toggle the f\u2032 overlay in the left rail to see the derivative curve on the graph.
// //       </div>
// //       <LinksRow>
// //         <LinkChip>/calculus/derivative</LinkChip>
// //         <LinkChip>/calculus/power-rule</LinkChip>
// //         <LinkChip>Tool: /visual-tools/tangent-line</LinkChip>
// //         <LinkChip ext>Derivative calculator</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function SecondDerivativePanel({ data }) {
// //   return (
// //     <Accordion title="Second Derivative" summary={`f\u2033(x) = ${data.deriv2Str}`}>
// //       <PropRow k="f\u2033(x)" v={data.deriv2Str} mono />
// //       <PropRow k="Inflection pts" v={data.inflections.length === 0 ? <Tag variant="gray">None</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.inflections.map(p => fmtNum(p.x, 3)).join(', ')}</span>} />
// //       <LinksRow>
// //         <LinkChip>/calculus/second-derivative</LinkChip>
// //         <LinkChip>/calculus/concavity-test</LinkChip>
// //         <LinkChip ext>Second-derivative calculator</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function AntiderivativePanel({ data }) {
// //   return (
// //     <Accordion title="Antiderivative &amp; Integral" summary="numeric on visible window">
// //       <PropRow k="F(x)" v={'\u222B f(x) dx'} mono />
// //       <PropRow k="On [0, 3]" v={(() => {
// //         try {
// //           const samples = 200;
// //           const step = 3 / samples;
// //           let acc = 0;
// //           let prev = data.fn(0);
// //           for (let i = 1; i <= samples; i++) {
// //             const y = data.fn(i * step);
// //             acc += (y + prev) / 2 * step;
// //             prev = y;
// //           }
// //           return fmtNum(acc, 3);
// //         } catch { return '\u2014'; }
// //       })()} mono />
// //       <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
// //         Antiderivative shown via the F(x) overlay (numeric cumulative integral over the visible window).
// //       </div>
// //       <LinksRow>
// //         <LinkChip>/calculus/antiderivative</LinkChip>
// //         <LinkChip>/calculus/definite-integral</LinkChip>
// //         <LinkChip ext>Antiderivative calculator</LinkChip>
// //         <LinkChip ext>Definite integral calculator</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // export function TangentApproxPanel({ data, cursor }) {
// //   let slope = null;
// //   let intercept = null;
// //   try {
// //     slope = data.fnPrime(cursor.x);
// //     if (isFinite(slope)) {
// //       const y0 = data.fn(cursor.x);
// //       if (isFinite(y0)) intercept = y0 - slope * cursor.x;
// //     }
// //   } catch {}
// //   return (
// //     <Accordion title="Tangent &amp; Linear Approx." summary={`at cursor x = ${fmtNum(cursor.x, 2)}`}>
// //       <PropRow k="Slope"   v={slope === null || !isFinite(slope) ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>m = {fmtNum(slope, 3)}</span>} />
// //       <PropRow k="Tangent" v={intercept === null ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>y = {fmtNum(slope, 3)}x {intercept >= 0 ? '+' : '\u2212'} {fmtNum(Math.abs(intercept), 3)}</span>} />
// //       <LinksRow>
// //         <LinkChip>Tool: /visual-tools/tangent-line</LinkChip>
// //         <LinkChip>/calculus/linearization</LinkChip>
// //         <LinkChip ext>Tangent line calculator</LinkChip>
// //       </LinksRow>
// //     </Accordion>
// //   );
// // }

// // // ============================================================
// // // THEORY READING LIST
// // // ============================================================
// // export function TheoryReadingList({ data }) {
// //   const items = [
// //     { kind: 'theory', title: `${data.family} functions \u2014 foundations`,    meta: `/functions/${slug(data.family)} \u00B7 8 min read` },
// //     { kind: 'theory', title: 'Domain, range, and restrictions',                meta: '/functions/domain-range \u00B7 6 min read' },
// //     { kind: 'theory', title: 'Reading a graph: extrema, concavity, asymptotes', meta: '/functions/graph-reading \u00B7 7 min read' },
// //     { kind: 'vt',     title: 'Transformations explorer',                       meta: '/visual-tools/transformations' },
// //     { kind: 'vt',     title: 'Symmetry visual tool',                           meta: '/visual-tools/symmetry' },
// //     { kind: 'calc',   title: 'Root finder calculator',                         meta: 'niche-site dedicated calculator', ext: true },
// //     { kind: 'calc',   title: 'Extrema finder calculator',                      meta: 'niche-site dedicated calculator', ext: true },
// //     { kind: 'calc',   title: 'Derivative calculator',                          meta: 'niche-site dedicated calculator', ext: true },
// //     { kind: 'cls',    title: 'Differentiating polynomials',                    meta: '/calculus/power-rule' },
// //     { kind: 'cls',    title: 'Critical points &amp; the first derivative test', meta: '/calculus/critical-points' },
// //   ];
// //   return (
// //     <div>
// //       {items.map((it, i) => <ReadRow key={i} item={it} />)}
// //     </div>
// //   );
// // }
// // function ReadRow({ item }) {
// //   const [hover, setHover] = React.useState(false);
// //   return (
// //     <a
// //       href="#"
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //       style={{
// //         display: 'flex', alignItems: 'flex-start', gap: 9,
// //         padding: '9px 14px',
// //         borderBottom: `1px solid ${T.border.soft}`,
// //         background: hover ? T.bg.subtle : 'transparent',
// //         textDecoration: 'none', color: 'inherit',
// //         transition: 'background 120ms',
// //       }}
// //     >
// //       <span style={{
// //         width: 26, height: 26,
// //         display: 'grid', placeItems: 'center',
// //         borderRadius: T.radius.sm,
// //         flexShrink: 0,
// //         background: T.bg.tintBlue,
// //         color: T.c.blueD,
// //       }}>
// //         {iconForKind(item.kind)}
// //       </span>
// //       <div style={{ flex: 1, minWidth: 0 }}>
// //         <div style={{ fontSize: 12, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>
// //           {item.title}
// //           {item.ext && (
// //             <span style={{
// //               marginLeft: 6, fontSize: 9, letterSpacing: '0.06em',
// //               textTransform: 'uppercase', color: T.c.blueD,
// //               background: T.bg.tintBlue, padding: '1px 5px',
// //               borderRadius: 3, verticalAlign: 'middle',
// //             }}>EXT {'\u2197'}</span>
// //           )}
// //         </div>
// //         <div style={{ fontSize: 10.5, color: T.text.muted, marginTop: 1 }}>{item.meta}</div>
// //       </div>
// //       <span style={{ color: T.text.faint, alignSelf: 'center' }}>{'\u203A'}</span>
// //     </a>
// //   );
// // }
// // function iconForKind(kind) {
// //   switch (kind) {
// //     case 'theory': return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/></svg>;
// //     case 'vt':     return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14c2-4 4-6 6-6s4 2 6 6"/></svg>;
// //     case 'calc':   return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/></svg>;
// //     case 'cls':    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 4c-3 0-4 3-5 8s-2 8-5 8"/></svg>;
// //     default:       return null;
// //   }
// // }

// // function slug(s) {
// //   return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
// // }


// // ============================================================
// // ExplorerPanels.jsx  (v2)
// // Fix from v1: every LinkChip and ReadRow now passes a real href.
// // hrefs are built from ExplorerContext.routes so users can override
// // theoryBase / toolsBase / calculusBase / calculatorBase globally.
// // ============================================================

// import React, { useContext } from 'react';
// import { T, ExplorerContext } from './FunctionExplorer';
// import {
//   Accordion, PropRow, Tag, LinkChip, LinksRow,
//   SignChart, MonotonicityStrip, ParentOverlay,
// } from './ExplorerAtoms';

// // ============================================================
// // Small helpers
// // ============================================================
// function fmtNum(v, digits = 3) {
//   if (v === null || v === undefined || !isFinite(v)) return '\u2014';
//   const r = Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits);
//   return Number.isInteger(r) ? r.toString() : r.toFixed(digits);
// }
// function fmtInterval(from, to) {
//   const a = isFinite(from) ? fmtNum(from, 2) : '\u2212\u221E';
//   const b = isFinite(to)   ? fmtNum(to, 2)   : '+\u221E';
//   return `(${a}, ${b})`;
// }
// function slug(s) {
//   return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
// }

// // ============================================================
// // PROPERTIES TAB (10 panels)
// // ============================================================

// export function AboutPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   return (
//     <Accordion title="About this function" summary={`${data.family} \u00B7 ${data.formula}`} defaultOpen>
//       <PropRow k="Family"   v={<Tag variant="affirm">{data.family}</Tag>} />
//       <PropRow k="Formula"  v={data.formula} mono />
//       <PropRow k="Variable" v="x" mono />
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/families`}>Theory: Function families</LinkChip>
//         <LinkChip href={`${routes.theoryBase}/reading-formulas`}>Theory: Reading formulas</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function DomainRangePanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const summary = `${data.domain} \u2192 ${data.range}`;
//   return (
//     <Accordion title="Domain &amp; Range" summary={summary} defaultOpen>
//       <PropRow k="Domain"       v={data.domain} mono />
//       <PropRow k="Range"        v={data.range}  mono />
//       <PropRow k="Codomain"     v={data.codomain} mono />
//       <PropRow k="Restrictions" v={data.domain === '\u211D' ? <Tag variant="gray">None</Tag> : <Tag variant="dim">See domain</Tag>} />
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/domain-range`}>Theory: Domain &amp; range</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/domain`}>Tool: /visual-tools/domain</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/range`}>Tool: /visual-tools/range</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/domain-calculator`}>Domain calculator</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/range-calculator`}>Range calculator</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function ZerosPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const summary = `${data.roots.length} root${data.roots.length === 1 ? '' : 's'} \u00B7 y@(0, ${fmtNum(data.yIntercept, 2)})`;
//   const rootsText = data.roots.length === 0
//     ? <Tag variant="gray">None</Tag>
//     : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.roots.map(r => fmtNum(r, 3)).join(', ')}</span>;
//   return (
//     <Accordion title="Zeros, Intercepts &amp; Sign" summary={summary} defaultOpen>
//       <PropRow k="Roots"        v={rootsText} />
//       <PropRow k="y-intercept"  v={data.yIntercept === null ? <Tag variant="gray">undef</Tag> : `(0, ${fmtNum(data.yIntercept, 3)})`} mono />
//       {data.sign && data.sign.length > 0 && <SignChart intervals={data.sign} />}
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/roots-factoring`}>Theory: Roots &amp; factoring</LinkChip>
//         <LinkChip href={`${routes.theoryBase}/sign-analysis`}>Theory: Sign analysis</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/root-finder`}>Root finder</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/sign-chart-solver`}>Sign chart solver</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function SymmetryPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const labelMap = { even: 'Even', odd: 'Odd', neither: 'Neither' };
//   const note = { even: 'f(\u2212x) = f(x)', odd: 'f(\u2212x) = \u2212f(x)', neither: 'no parity' };
//   const periodicText = data.period && data.period.periodic
//     ? <><Tag variant="affirm">Yes</Tag>{' '}<span style={{ color: T.text.muted, fontSize: 11 }}>period {data.period.label}</span></>
//     : <Tag variant="gray">No</Tag>;
//   return (
//     <Accordion title="Symmetry &amp; Periodicity" summary={`${labelMap[data.parity]} \u00B7 ${data.period && data.period.periodic ? `period ${data.period.label}` : 'aperiodic'}`}>
//       <PropRow k="Parity" v={<><Tag variant={data.parity === 'neither' ? 'gray' : 'affirm'}>{labelMap[data.parity]}</Tag>{' '}<span style={{ color: T.text.muted, fontSize: 11 }}>{note[data.parity]}</span></>} />
//       <PropRow k="Axis"     v={data.symmetryAxis !== null && data.symmetryAxis !== undefined ? `x = ${fmtNum(data.symmetryAxis, 3)}` : <Tag variant="gray">None</Tag>} mono />
//       <PropRow k="Periodic" v={periodicText} />
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/even-odd`}>Theory: Even/odd functions</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/symmetry`}>Tool: /visual-tools/symmetry</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/symmetry-detector`}>Symmetry detector</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function ContinuityPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   return (
//     <Accordion title="Continuity &amp; Smoothness" summary={data.continuous ? 'continuous' : 'has gaps'}>
//       <PropRow k="Continuity"      v={data.continuous ? <Tag variant="affirm">Continuous</Tag> : <Tag variant="dim">Has gaps</Tag>} />
//       <PropRow k="Discontinuities" v={data.continuous ? <Tag variant="gray">None</Tag> : <Tag variant="dim">See asymptotes</Tag>} />
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/continuity`}>Theory: Continuity</LinkChip>
//         <LinkChip href={`${routes.calculusBase}/continuity`}>/calculus/continuity</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/continuity-checker`}>Continuity checker</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function AsymptotesPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const verticalCount = data.asymptotes.length;
//   const summary = verticalCount === 0 ? 'none' : `${verticalCount} vertical`;
//   const endLabel = (end) => {
//     if (!end) return <Tag variant="gray">undef</Tag>;
//     if (end.direction === 'converge') return `f \u2192 ${fmtNum(end.value, 3)}`;
//     if (end.direction === 'diverge+') return 'f \u2192 +\u221E';
//     if (end.direction === 'diverge-') return 'f \u2192 \u2212\u221E';
//     return <Tag variant="gray">oscillates</Tag>;
//   };
//   const horizStr = data.horizAsymptotes && data.horizAsymptotes.length > 0
//     ? <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.horizAsymptotes.map(h => `y = ${fmtNum(h.y, 3)}`).join(', ')}</span>
//     : <Tag variant="gray">None</Tag>;
//   return (
//     <Accordion title="Asymptotes &amp; End Behavior" summary={summary}>
//       <PropRow k="Vertical"   v={verticalCount === 0 ? <Tag variant="gray">None</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.asymptotes.map(a => `x = ${fmtNum(a, 3)}`).join(', ')}</span>} />
//       <PropRow k="Horizontal" v={horizStr} />
//       <PropRow k="x \u2192 +\u221E" v={endLabel(data.endRight)} mono />
//       <PropRow k="x \u2192 \u2212\u221E" v={endLabel(data.endLeft)} mono />
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/asymptotes`}>Theory: Asymptotes</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/asymptotes`}>Tool: /visual-tools/asymptotes</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/asymptote-finder`}>Asymptote finder</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function MonotonicityPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const incCount = data.mono.filter(m => m.dir === 'inc').length;
//   const decCount = data.mono.filter(m => m.dir === 'dec').length;
//   const summary = `${decCount}\u2193 ${incCount}\u2191 \u00B7 ${data.extrema.length} ext`;
//   return (
//     <Accordion title="Monotonicity &amp; Extrema" summary={summary} defaultOpen>
//       {data.mono.map((m, i) => (
//         <PropRow
//           key={i}
//           k={m.dir === 'inc' ? 'Increasing' : (m.dir === 'dec' ? 'Decreasing' : 'Constant')}
//           v={fmtInterval(m.from, m.to)} mono
//         />
//       ))}
//       {data.extrema.length > 0 && data.extrema.map((e, i) => (
//         <PropRow
//           key={`ext${i}`}
//           k={e.kind === 'min' ? 'Local min' : 'Local max'}
//           v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>({fmtNum(e.x, 3)}, {fmtNum(e.y, 3)})</span>}
//         />
//       ))}
//       {data.mono && data.mono.length > 0 && <MonotonicityStrip intervals={data.mono} />}
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/monotonicity`}>Theory: Monotonicity</LinkChip>
//         <LinkChip href={`${routes.calculusBase}/critical-points`}>/calculus/critical-points</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/extrema-finder`}>Extrema finder</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/monotonicity-analyzer`}>Monotonicity analyzer</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function ConcavityPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const upCount   = data.concavity.filter(c => c.kind === 'up').length;
//   const downCount = data.concavity.filter(c => c.kind === 'down').length;
//   const summary = `${upCount}\u222A ${downCount}\u2229 \u00B7 ${data.inflections.length} infl`;
//   return (
//     <Accordion title="Concavity &amp; Inflection" summary={summary}>
//       {data.concavity.map((c, i) => (
//         <PropRow
//           key={i}
//           k={c.kind === 'up' ? 'Concave up' : (c.kind === 'down' ? 'Concave down' : 'Flat')}
//           v={fmtInterval(c.from, c.to)} mono
//         />
//       ))}
//       {data.inflections.length > 0 && data.inflections.map((p, i) => (
//         <PropRow
//           key={`inf${i}`}
//           k="Inflection"
//           v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>({fmtNum(p.x, 3)}, {fmtNum(p.y, 3)})</span>}
//         />
//       ))}
//       {data.inflections.length === 0 && <PropRow k="Inflection" v={<Tag variant="gray">None</Tag>} />}
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/concavity`}>Theory: Concavity</LinkChip>
//         <LinkChip href={`${routes.calculusBase}/second-derivative`}>/calculus/second-derivative</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/concavity-analyzer`}>Concavity analyzer</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/inflection-finder`}>Inflection finder</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function BoundednessPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const summary = data.bounded ? `inf = ${fmtNum(data.bounds.lo, 2)} \u00B7 sup = ${fmtNum(data.bounds.hi, 2)}` : 'unbounded';
//   return (
//     <Accordion title="Boundedness" summary={summary}>
//       <PropRow k="Lower bound" v={isFinite(data.bounds.lo) ? <><span style={{ fontFamily: T.font.mono }}>{fmtNum(data.bounds.lo, 3)}</span>{' '}<Tag variant="affirm">attained</Tag></> : <Tag variant="gray">Unbounded below</Tag>} />
//       <PropRow k="Upper bound" v={isFinite(data.bounds.hi) ? <><span style={{ fontFamily: T.font.mono }}>{fmtNum(data.bounds.hi, 3)}</span>{' '}<Tag variant="affirm">attained</Tag></> : <Tag variant="gray">Unbounded above</Tag>} />
//       <PropRow k="Infimum"  v={isFinite(data.bounds.lo) ? fmtNum(data.bounds.lo, 3) : '\u2212\u221E'} mono />
//       <PropRow k="Supremum" v={isFinite(data.bounds.hi) ? fmtNum(data.bounds.hi, 3) : '+\u221E'} mono />
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/boundedness`}>Theory: Boundedness</LinkChip>
//         <LinkChip href={`${routes.theoryBase}/sup-inf-max-min`}>Theory: Sup, inf, max, min</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/bounds-calculator`}>Bounds calculator</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function InvertibilityPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const summary = data.injective ? 'invertible' : 'not 1-1 \u00B7 restrict to invert';
//   return (
//     <Accordion title="Injectivity &amp; Invertibility" summary={summary}>
//       <PropRow k="Injective"  v={data.injective ? <Tag variant="affirm">Yes</Tag> : <Tag variant="dim">No</Tag>} />
//       <PropRow k="Surjective" v={<Tag variant="dim">Depends on codomain</Tag>} />
//       <PropRow k="Bijective"  v={data.injective ? <Tag variant="affirm">Yes (onto its range)</Tag> : <Tag variant="dim">No</Tag>} />
//       {!data.injective && data.extrema.length > 0 && (
//         <PropRow k="Restrict to" v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>e.g. [{fmtNum(data.extrema[0].x, 2)}, \u221E)</span>} />
//       )}
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/inverse-functions`}>Theory: Inverse functions</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/inverse-function`}>Tool: /visual-tools/inverse-function</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/inverse-calculator`}>Inverse calculator</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/injectivity-tester`}>Injectivity tester</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// // ============================================================
// // TRANSFORMATIONS TAB (2 panels)
// // ============================================================

// export function ParentTransformsPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   return (
//     <Accordion title="Parent &amp; Transformations" summary="see overlay below" defaultOpen>
//       <PropRow k="Family"  v={<Tag variant="affirm">{data.family}</Tag>} />
//       <PropRow k="Formula" v={data.formula} mono />
//       <ParentOverlay />
//       <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
//         Symbolic decomposition into parent + transforms is family-specific and not auto-detected in v1.
//       </div>
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/transformations`}>Theory: Transformations</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/transformations`}>Tool: /visual-tools/transformations</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/transform-calculator`}>Transform calculator</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function OperationsPanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   return (
//     <Accordion title="Algebraic Operations" summary="sum \u00B7 product \u00B7 composition" defaultOpen>
//       <PropRow k="Sum"         v="(f + g)(x)" mono />
//       <PropRow k="Difference"  v="(f \u2212 g)(x)" mono />
//       <PropRow k="Product"     v="(f \u00B7 g)(x)" mono />
//       <PropRow k="Quotient"    v="(f / g)(x), g \u2260 0" mono />
//       <PropRow k="Composition" v="(f \u2218 g)(x)" mono />
//       <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
//         Add a second function via the funcbar to perform these interactively.
//       </div>
//       <LinksRow>
//         <LinkChip href={`${routes.theoryBase}/operations`}>Theory: Operations on functions</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/composition`}>Tool: /visual-tools/composition</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/piecewise`}>Tool: /visual-tools/piecewise</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/composition-calculator`}>Composition calculator</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// // ============================================================
// // CALCULUS BRIDGE TAB (4 panels)
// // ============================================================

// export function DerivativePanel({ data, cursor }) {
//   const { routes } = useContext(ExplorerContext);
//   const slope = (() => {
//     try { return data.fnPrime(cursor.x); } catch { return null; }
//   })();
//   return (
//     <Accordion title="First Derivative" summary={`f\u2032(x) = ${data.derivStr}`} defaultOpen>
//       <PropRow k="f\u2032(x)"   v={data.derivStr} mono />
//       <PropRow k="At cursor" v={slope === null || !isFinite(slope) ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>f\u2032({fmtNum(cursor.x, 2)}) \u2248 {fmtNum(slope, 3)}</span>} />
//       <PropRow k="Critical pts" v={data.extrema.length === 0 ? <Tag variant="gray">None in window</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.extrema.map(e => fmtNum(e.x, 3)).join(', ')}</span>} />
//       <div style={{
//         marginTop: 8, padding: '7px 10px',
//         background: T.bg.tintBlue, borderLeft: `2px solid ${T.c.blue}`,
//         borderRadius: '0 4px 4px 0', fontSize: 11.5, color: T.text.body, lineHeight: 1.5,
//       }}>
//         <span style={{ fontWeight: 600, color: T.c.blueD, display: 'block', marginBottom: 2, fontSize: 10.5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Tip</span>
//         Toggle the f\u2032 overlay in the left rail to see the derivative curve on the graph.
//       </div>
//       <LinksRow>
//         <LinkChip href={`${routes.calculusBase}/derivative`}>/calculus/derivative</LinkChip>
//         <LinkChip href={`${routes.calculusBase}/power-rule`}>/calculus/power-rule</LinkChip>
//         <LinkChip href={`${routes.toolsBase}/tangent-line`}>Tool: /visual-tools/tangent-line</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/derivative-calculator`}>Derivative calculator</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function SecondDerivativePanel({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   return (
//     <Accordion title="Second Derivative" summary={`f\u2033(x) = ${data.deriv2Str}`}>
//       <PropRow k="f\u2033(x)" v={data.deriv2Str} mono />
//       <PropRow k="Inflection pts" v={data.inflections.length === 0 ? <Tag variant="gray">None</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.inflections.map(p => fmtNum(p.x, 3)).join(', ')}</span>} />
//       <LinksRow>
//         <LinkChip href={`${routes.calculusBase}/second-derivative`}>/calculus/second-derivative</LinkChip>
//         <LinkChip href={`${routes.calculusBase}/concavity-test`}>/calculus/concavity-test</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/second-derivative-calculator`}>Second-derivative calculator</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function AntiderivativePanel({ data, viewport }) {
//   const { routes } = useContext(ExplorerContext);
//   const [xa, xb] = viewport
//     ? [Math.max(viewport.xMin, 0), Math.min(viewport.xMax, 3)]
//     : [0, 3];
//   const areaVal = (() => {
//     try {
//       const samples = 200;
//       const step = (xb - xa) / samples;
//       if (!(step > 0)) return '\u2014';
//       let acc = 0;
//       let prev = data.fn(xa);
//       for (let i = 1; i <= samples; i++) {
//         const y = data.fn(xa + i * step);
//         acc += (y + prev) / 2 * step;
//         prev = y;
//       }
//       return fmtNum(acc, 3);
//     } catch { return '\u2014'; }
//   })();
//   return (
//     <Accordion title="Antiderivative &amp; Integral" summary="numeric on visible window">
//       <PropRow k="F(x)" v={'\u222B f(x) dx'} mono />
//       <PropRow k={`On [${fmtNum(xa, 2)}, ${fmtNum(xb, 2)}]`} v={areaVal} mono />
//       <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
//         Antiderivative shown via the F(x) overlay (numeric cumulative integral over the visible window).
//       </div>
//       <LinksRow>
//         <LinkChip href={`${routes.calculusBase}/antiderivative`}>/calculus/antiderivative</LinkChip>
//         <LinkChip href={`${routes.calculusBase}/definite-integral`}>/calculus/definite-integral</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/antiderivative-calculator`}>Antiderivative calculator</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/integral-calculator`}>Definite integral calculator</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// export function TangentApproxPanel({ data, cursor }) {
//   const { routes } = useContext(ExplorerContext);
//   let slope = null;
//   let intercept = null;
//   try {
//     slope = data.fnPrime(cursor.x);
//     if (isFinite(slope)) {
//       const y0 = data.fn(cursor.x);
//       if (isFinite(y0)) intercept = y0 - slope * cursor.x;
//     }
//   } catch {}
//   return (
//     <Accordion title="Tangent &amp; Linear Approx." summary={`at cursor x = ${fmtNum(cursor.x, 2)}`}>
//       <PropRow k="Slope"   v={slope === null || !isFinite(slope) ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>m = {fmtNum(slope, 3)}</span>} />
//       <PropRow k="Tangent" v={intercept === null ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>y = {fmtNum(slope, 3)}x {intercept >= 0 ? '+' : '\u2212'} {fmtNum(Math.abs(intercept), 3)}</span>} />
//       <LinksRow>
//         <LinkChip href={`${routes.toolsBase}/tangent-line`}>Tool: /visual-tools/tangent-line</LinkChip>
//         <LinkChip href={`${routes.calculusBase}/linearization`}>/calculus/linearization</LinkChip>
//         <LinkChip ext href={`${routes.calculatorBase}/tangent-line-calculator`}>Tangent line calculator</LinkChip>
//       </LinksRow>
//     </Accordion>
//   );
// }

// // ============================================================
// // THEORY READING LIST
// // ============================================================
// export function TheoryReadingList({ data }) {
//   const { routes } = useContext(ExplorerContext);
//   const items = [
//     { kind: 'theory', title: `${data.family} functions \u2014 foundations`,     href: `${routes.theoryBase}/${slug(data.family)}`,      meta: `${routes.theoryBase}/${slug(data.family)} \u00B7 8 min read` },
//     { kind: 'theory', title: 'Domain, range, and restrictions',                  href: `${routes.theoryBase}/domain-range`,               meta: `${routes.theoryBase}/domain-range \u00B7 6 min read` },
//     { kind: 'theory', title: 'Reading a graph: extrema, concavity, asymptotes',  href: `${routes.theoryBase}/graph-reading`,              meta: `${routes.theoryBase}/graph-reading \u00B7 7 min read` },
//     { kind: 'vt',     title: 'Transformations explorer',                         href: `${routes.toolsBase}/transformations`,             meta: `${routes.toolsBase}/transformations` },
//     { kind: 'vt',     title: 'Symmetry visual tool',                             href: `${routes.toolsBase}/symmetry`,                    meta: `${routes.toolsBase}/symmetry` },
//     { kind: 'calc',   title: 'Root finder calculator',                           href: `${routes.calculatorBase}/root-finder`,            meta: 'niche-site dedicated calculator', ext: true },
//     { kind: 'calc',   title: 'Extrema finder calculator',                        href: `${routes.calculatorBase}/extrema-finder`,         meta: 'niche-site dedicated calculator', ext: true },
//     { kind: 'calc',   title: 'Derivative calculator',                            href: `${routes.calculatorBase}/derivative-calculator`,  meta: 'niche-site dedicated calculator', ext: true },
//     { kind: 'cls',    title: 'Differentiating polynomials',                      href: `${routes.calculusBase}/power-rule`,               meta: `${routes.calculusBase}/power-rule` },
//     { kind: 'cls',    title: 'Critical points &amp; the first derivative test',  href: `${routes.calculusBase}/critical-points`,          meta: `${routes.calculusBase}/critical-points` },
//   ];
//   return (
//     <div>
//       {items.map((it, i) => <ReadRow key={i} item={it} />)}
//     </div>
//   );
// }
// function ReadRow({ item }) {
//   const [hover, setHover] = React.useState(false);
//   const isExternal = item.ext || (typeof item.href === 'string' && /^https?:\/\//.test(item.href));
//   return (
//     <a
//       href={item.href}
//       target={isExternal ? '_blank' : undefined}
//       rel={isExternal ? 'noopener noreferrer' : undefined}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         display: 'flex', alignItems: 'flex-start', gap: 9,
//         padding: '9px 14px',
//         borderBottom: `1px solid ${T.border.soft}`,
//         background: hover ? T.bg.subtle : 'transparent',
//         textDecoration: 'none', color: 'inherit',
//         transition: 'background 120ms',
//       }}
//     >
//       <span style={{
//         width: 26, height: 26,
//         display: 'grid', placeItems: 'center',
//         borderRadius: T.radius.sm,
//         flexShrink: 0,
//         background: T.bg.tintBlue,
//         color: T.c.blueD,
//       }}>
//         {iconForKind(item.kind)}
//       </span>
//       <div style={{ flex: 1, minWidth: 0 }}>
//         <div style={{ fontSize: 12, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>
//           {item.title}
//           {isExternal && (
//             <span style={{
//               marginLeft: 6, fontSize: 9, letterSpacing: '0.06em',
//               textTransform: 'uppercase', color: T.c.blueD,
//               background: T.bg.tintBlue, padding: '1px 5px',
//               borderRadius: 3, verticalAlign: 'middle',
//             }}>EXT {'\u2197'}</span>
//           )}
//         </div>
//         <div style={{ fontSize: 10.5, color: T.text.muted, marginTop: 1 }}>{item.meta}</div>
//       </div>
//       <span style={{ color: T.text.faint, alignSelf: 'center' }}>{'\u203A'}</span>
//     </a>
//   );
// }
// function iconForKind(kind) {
//   switch (kind) {
//     case 'theory': return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/></svg>;
//     case 'vt':     return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14c2-4 4-6 6-6s4 2 6 6"/></svg>;
//     case 'calc':   return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/></svg>;
//     case 'cls':    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 4c-3 0-4 3-5 8s-2 8-5 8"/></svg>;
//     default:       return null;
//   }
// }


// ============================================================
// ExplorerPanels.jsx  (v3)
// Fix from v2: every LinkChip has a real label. No more bare paths
// like "/calculus/derivative" showing up as chip text. Same for
// "Tool: /visual-tools/xxx" -> "Tool: <human name>".
// URLs unchanged; only chip children changed.
// ============================================================

import React, { useContext } from 'react';
import { T, ExplorerContext } from './FunctionExplorer';
import {
  Accordion, PropRow, Tag, LinkChip, LinksRow,
  SignChart, MonotonicityStrip, ParentOverlay,
} from './ExplorerAtoms';

// ============================================================
// Small helpers
// ============================================================
function fmtNum(v, digits = 3) {
  if (v === null || v === undefined || !isFinite(v)) return '\u2014';
  const r = Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits);
  return Number.isInteger(r) ? r.toString() : r.toFixed(digits);
}
function fmtInterval(from, to) {
  const a = isFinite(from) ? fmtNum(from, 2) : '\u2212\u221E';
  const b = isFinite(to)   ? fmtNum(to, 2)   : '+\u221E';
  return `(${a}, ${b})`;
}
function slug(s) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

// ============================================================
// PROPERTIES TAB (10 panels)
// ============================================================

export function AboutPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  return (
    <Accordion title="About this function" summary={`${data.family} \u00B7 ${data.formula}`} defaultOpen>
      <PropRow k="Family"   v={<Tag variant="affirm">{data.family}</Tag>} />
      <PropRow k="Formula"  v={data.formula} mono />
      <PropRow k="Variable" v="x" mono />
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/families`}>Theory: Function families</LinkChip>
        <LinkChip href={`${routes.theoryBase}/reading-formulas`}>Theory: Reading formulas</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function DomainRangePanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  const summary = `${data.domain} \u2192 ${data.range}`;
  return (
    <Accordion title="Domain &amp; Range" summary={summary} defaultOpen>
      <PropRow k="Domain"       v={data.domain} mono />
      <PropRow k="Range"        v={data.range}  mono />
      <PropRow k="Codomain"     v={data.codomain} mono />
      <PropRow k="Restrictions" v={data.domain === '\u211D' ? <Tag variant="gray">None</Tag> : <Tag variant="dim">See domain</Tag>} />
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/domain-range`}>Theory: Domain &amp; range</LinkChip>
        <LinkChip href={`${routes.toolsBase}/domain`}>Tool: Domain visualizer</LinkChip>
        <LinkChip href={`${routes.toolsBase}/range`}>Tool: Range visualizer</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/domain-calculator`}>Domain calculator</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/range-calculator`}>Range calculator</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function ZerosPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  const summary = `${data.roots.length} root${data.roots.length === 1 ? '' : 's'} \u00B7 y@(0, ${fmtNum(data.yIntercept, 2)})`;
  const rootsText = data.roots.length === 0
    ? <Tag variant="gray">None</Tag>
    : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.roots.map(r => fmtNum(r, 3)).join(', ')}</span>;
  return (
    <Accordion title="Zeros, Intercepts &amp; Sign" summary={summary} defaultOpen>
      <PropRow k="Roots"        v={rootsText} />
      <PropRow k="y-intercept"  v={data.yIntercept === null ? <Tag variant="gray">undef</Tag> : `(0, ${fmtNum(data.yIntercept, 3)})`} mono />
      {data.sign && data.sign.length > 0 && <SignChart intervals={data.sign} />}
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/roots-factoring`}>Theory: Roots &amp; factoring</LinkChip>
        <LinkChip href={`${routes.theoryBase}/sign-analysis`}>Theory: Sign analysis</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/root-finder`}>Root finder</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/sign-chart-solver`}>Sign chart solver</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function SymmetryPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  const labelMap = { even: 'Even', odd: 'Odd', neither: 'Neither' };
  const note = { even: 'f(\u2212x) = f(x)', odd: 'f(\u2212x) = \u2212f(x)', neither: 'no parity' };
  const periodicText = data.period && data.period.periodic
    ? <><Tag variant="affirm">Yes</Tag>{' '}<span style={{ color: T.text.muted, fontSize: 11 }}>period {data.period.label}</span></>
    : <Tag variant="gray">No</Tag>;
  return (
    <Accordion title="Symmetry &amp; Periodicity" summary={`${labelMap[data.parity]} \u00B7 ${data.period && data.period.periodic ? `period ${data.period.label}` : 'aperiodic'}`}>
      <PropRow k="Parity" v={<><Tag variant={data.parity === 'neither' ? 'gray' : 'affirm'}>{labelMap[data.parity]}</Tag>{' '}<span style={{ color: T.text.muted, fontSize: 11 }}>{note[data.parity]}</span></>} />
      <PropRow k="Axis"     v={data.symmetryAxis !== null && data.symmetryAxis !== undefined ? `x = ${fmtNum(data.symmetryAxis, 3)}` : <Tag variant="gray">None</Tag>} mono />
      <PropRow k="Periodic" v={periodicText} />
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/even-odd`}>Theory: Even/odd functions</LinkChip>
        <LinkChip href={`${routes.toolsBase}/symmetry`}>Tool: Symmetry visualizer</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/symmetry-detector`}>Symmetry detector</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function ContinuityPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  return (
    <Accordion title="Continuity &amp; Smoothness" summary={data.continuous ? 'continuous' : 'has gaps'}>
      <PropRow k="Continuity"      v={data.continuous ? <Tag variant="affirm">Continuous</Tag> : <Tag variant="dim">Has gaps</Tag>} />
      <PropRow k="Discontinuities" v={data.continuous ? <Tag variant="gray">None</Tag> : <Tag variant="dim">See asymptotes</Tag>} />
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/continuity`}>Theory: Continuity</LinkChip>
        <LinkChip href={`${routes.calculusBase}/continuity`}>Calculus: Continuity</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/continuity-checker`}>Continuity checker</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function AsymptotesPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  const verticalCount = data.asymptotes.length;
  const summary = verticalCount === 0 ? 'none' : `${verticalCount} vertical`;
  const endLabel = (end) => {
    if (!end) return <Tag variant="gray">undef</Tag>;
    if (end.direction === 'converge') return `f \u2192 ${fmtNum(end.value, 3)}`;
    if (end.direction === 'diverge+') return 'f \u2192 +\u221E';
    if (end.direction === 'diverge-') return 'f \u2192 \u2212\u221E';
    return <Tag variant="gray">oscillates</Tag>;
  };
  const horizStr = data.horizAsymptotes && data.horizAsymptotes.length > 0
    ? <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.horizAsymptotes.map(h => `y = ${fmtNum(h.y, 3)}`).join(', ')}</span>
    : <Tag variant="gray">None</Tag>;
  return (
    <Accordion title="Asymptotes &amp; End Behavior" summary={summary}>
      <PropRow k="Vertical"   v={verticalCount === 0 ? <Tag variant="gray">None</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.asymptotes.map(a => `x = ${fmtNum(a, 3)}`).join(', ')}</span>} />
      <PropRow k="Horizontal" v={horizStr} />
      <PropRow k="x \u2192 +\u221E" v={endLabel(data.endRight)} mono />
      <PropRow k="x \u2192 \u2212\u221E" v={endLabel(data.endLeft)} mono />
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/asymptotes`}>Theory: Asymptotes</LinkChip>
        <LinkChip href={`${routes.toolsBase}/asymptotes`}>Tool: Asymptotes visualizer</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/asymptote-finder`}>Asymptote finder</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function MonotonicityPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  const incCount = data.mono.filter(m => m.dir === 'inc').length;
  const decCount = data.mono.filter(m => m.dir === 'dec').length;
  const summary = `${decCount}\u2193 ${incCount}\u2191 \u00B7 ${data.extrema.length} ext`;
  return (
    <Accordion title="Monotonicity &amp; Extrema" summary={summary} defaultOpen>
      {data.mono.map((m, i) => (
        <PropRow
          key={i}
          k={m.dir === 'inc' ? 'Increasing' : (m.dir === 'dec' ? 'Decreasing' : 'Constant')}
          v={fmtInterval(m.from, m.to)} mono
        />
      ))}
      {data.extrema.length > 0 && data.extrema.map((e, i) => (
        <PropRow
          key={`ext${i}`}
          k={e.kind === 'min' ? 'Local min' : 'Local max'}
          v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>({fmtNum(e.x, 3)}, {fmtNum(e.y, 3)})</span>}
        />
      ))}
      {data.mono && data.mono.length > 0 && <MonotonicityStrip intervals={data.mono} />}
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/monotonicity`}>Theory: Monotonicity</LinkChip>
        <LinkChip href={`${routes.calculusBase}/critical-points`}>Calculus: Critical points</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/extrema-finder`}>Extrema finder</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/monotonicity-analyzer`}>Monotonicity analyzer</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function ConcavityPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  const upCount   = data.concavity.filter(c => c.kind === 'up').length;
  const downCount = data.concavity.filter(c => c.kind === 'down').length;
  const summary = `${upCount}\u222A ${downCount}\u2229 \u00B7 ${data.inflections.length} infl`;
  return (
    <Accordion title="Concavity &amp; Inflection" summary={summary}>
      {data.concavity.map((c, i) => (
        <PropRow
          key={i}
          k={c.kind === 'up' ? 'Concave up' : (c.kind === 'down' ? 'Concave down' : 'Flat')}
          v={fmtInterval(c.from, c.to)} mono
        />
      ))}
      {data.inflections.length > 0 && data.inflections.map((p, i) => (
        <PropRow
          key={`inf${i}`}
          k="Inflection"
          v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>({fmtNum(p.x, 3)}, {fmtNum(p.y, 3)})</span>}
        />
      ))}
      {data.inflections.length === 0 && <PropRow k="Inflection" v={<Tag variant="gray">None</Tag>} />}
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/concavity`}>Theory: Concavity</LinkChip>
        <LinkChip href={`${routes.calculusBase}/second-derivative`}>Calculus: Second derivative</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/concavity-analyzer`}>Concavity analyzer</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/inflection-finder`}>Inflection finder</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function BoundednessPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  const summary = data.bounded ? `inf = ${fmtNum(data.bounds.lo, 2)} \u00B7 sup = ${fmtNum(data.bounds.hi, 2)}` : 'unbounded';
  return (
    <Accordion title="Boundedness" summary={summary}>
      <PropRow k="Lower bound" v={isFinite(data.bounds.lo) ? <><span style={{ fontFamily: T.font.mono }}>{fmtNum(data.bounds.lo, 3)}</span>{' '}<Tag variant="affirm">attained</Tag></> : <Tag variant="gray">Unbounded below</Tag>} />
      <PropRow k="Upper bound" v={isFinite(data.bounds.hi) ? <><span style={{ fontFamily: T.font.mono }}>{fmtNum(data.bounds.hi, 3)}</span>{' '}<Tag variant="affirm">attained</Tag></> : <Tag variant="gray">Unbounded above</Tag>} />
      <PropRow k="Infimum"  v={isFinite(data.bounds.lo) ? fmtNum(data.bounds.lo, 3) : '\u2212\u221E'} mono />
      <PropRow k="Supremum" v={isFinite(data.bounds.hi) ? fmtNum(data.bounds.hi, 3) : '+\u221E'} mono />
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/boundedness`}>Theory: Boundedness</LinkChip>
        <LinkChip href={`${routes.theoryBase}/sup-inf-max-min`}>Theory: Sup, inf, max, min</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/bounds-calculator`}>Bounds calculator</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function InvertibilityPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  const summary = data.injective ? 'invertible' : 'not 1-1 \u00B7 restrict to invert';
  return (
    <Accordion title="Injectivity &amp; Invertibility" summary={summary}>
      <PropRow k="Injective"  v={data.injective ? <Tag variant="affirm">Yes</Tag> : <Tag variant="dim">No</Tag>} />
      <PropRow k="Surjective" v={<Tag variant="dim">Depends on codomain</Tag>} />
      <PropRow k="Bijective"  v={data.injective ? <Tag variant="affirm">Yes (onto its range)</Tag> : <Tag variant="dim">No</Tag>} />
      {!data.injective && data.extrema.length > 0 && (
        <PropRow k="Restrict to" v={<span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>e.g. [{fmtNum(data.extrema[0].x, 2)}, \u221E)</span>} />
      )}
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/inverse-functions`}>Theory: Inverse functions</LinkChip>
        <LinkChip href={`${routes.toolsBase}/inverse-function`}>Tool: Inverse visualizer</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/inverse-calculator`}>Inverse calculator</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/injectivity-tester`}>Injectivity tester</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

// ============================================================
// TRANSFORMATIONS TAB (2 panels)
// ============================================================

export function ParentTransformsPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  return (
    <Accordion title="Parent &amp; Transformations" summary="see overlay below" defaultOpen>
      <PropRow k="Family"  v={<Tag variant="affirm">{data.family}</Tag>} />
      <PropRow k="Formula" v={data.formula} mono />
      <ParentOverlay />
      <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
        Symbolic decomposition into parent + transforms is family-specific and not auto-detected in v1.
      </div>
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/transformations`}>Theory: Transformations</LinkChip>
        <LinkChip href={`${routes.toolsBase}/transformations`}>Tool: Transformations visualizer</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/transform-calculator`}>Transform calculator</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function OperationsPanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  return (
    <Accordion title="Algebraic Operations" summary="sum \u00B7 product \u00B7 composition" defaultOpen>
      <PropRow k="Sum"         v="(f + g)(x)" mono />
      <PropRow k="Difference"  v="(f \u2212 g)(x)" mono />
      <PropRow k="Product"     v="(f \u00B7 g)(x)" mono />
      <PropRow k="Quotient"    v="(f / g)(x), g \u2260 0" mono />
      <PropRow k="Composition" v="(f \u2218 g)(x)" mono />
      <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
        Add a second function via the funcbar to perform these interactively.
      </div>
      <LinksRow>
        <LinkChip href={`${routes.theoryBase}/operations`}>Theory: Operations on functions</LinkChip>
        <LinkChip href={`${routes.toolsBase}/composition`}>Tool: Composition visualizer</LinkChip>
        <LinkChip href={`${routes.toolsBase}/piecewise`}>Tool: Piecewise visualizer</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/composition-calculator`}>Composition calculator</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

// ============================================================
// CALCULUS BRIDGE TAB (4 panels)
// ============================================================

export function DerivativePanel({ data, cursor }) {
  const { routes } = useContext(ExplorerContext);
  const slope = (() => {
    try { return data.fnPrime(cursor.x); } catch { return null; }
  })();
  return (
    <Accordion title="First Derivative" summary={`f\u2032(x) = ${data.derivStr}`} defaultOpen>
      <PropRow k="f\u2032(x)"   v={data.derivStr} mono />
      <PropRow k="At cursor" v={slope === null || !isFinite(slope) ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>f\u2032({fmtNum(cursor.x, 2)}) \u2248 {fmtNum(slope, 3)}</span>} />
      <PropRow k="Critical pts" v={data.extrema.length === 0 ? <Tag variant="gray">None in window</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.extrema.map(e => fmtNum(e.x, 3)).join(', ')}</span>} />
      <div style={{
        marginTop: 8, padding: '7px 10px',
        background: T.bg.tintBlue, borderLeft: `2px solid ${T.c.blue}`,
        borderRadius: '0 4px 4px 0', fontSize: 11.5, color: T.text.body, lineHeight: 1.5,
      }}>
        <span style={{ fontWeight: 600, color: T.c.blueD, display: 'block', marginBottom: 2, fontSize: 10.5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Tip</span>
        Toggle the f&apos; overlay in the left rail to see the derivative curve on the graph.
      </div>
      <LinksRow>
        <LinkChip href={`${routes.calculusBase}/derivative`}>Calculus: Derivative</LinkChip>
        <LinkChip href={`${routes.calculusBase}/power-rule`}>Calculus: Power rule</LinkChip>
        <LinkChip href={`${routes.toolsBase}/tangent-line`}>Tool: Tangent line visualizer</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/derivative-calculator`}>Derivative calculator</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function SecondDerivativePanel({ data }) {
  const { routes } = useContext(ExplorerContext);
  return (
    <Accordion title="Second Derivative" summary={`f\u2033(x) = ${data.deriv2Str}`}>
      <PropRow k="f\u2033(x)" v={data.deriv2Str} mono />
      <PropRow k="Inflection pts" v={data.inflections.length === 0 ? <Tag variant="gray">None</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>{data.inflections.map(p => fmtNum(p.x, 3)).join(', ')}</span>} />
      <LinksRow>
        <LinkChip href={`${routes.calculusBase}/second-derivative`}>Calculus: Second derivative</LinkChip>
        <LinkChip href={`${routes.calculusBase}/concavity-test`}>Calculus: Concavity test</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/second-derivative-calculator`}>Second-derivative calculator</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function AntiderivativePanel({ data, viewport }) {
  const { routes } = useContext(ExplorerContext);
  const [xa, xb] = viewport
    ? [Math.max(viewport.xMin, 0), Math.min(viewport.xMax, 3)]
    : [0, 3];
  const areaVal = (() => {
    try {
      const samples = 200;
      const step = (xb - xa) / samples;
      if (!(step > 0)) return '\u2014';
      let acc = 0;
      let prev = data.fn(xa);
      for (let i = 1; i <= samples; i++) {
        const y = data.fn(xa + i * step);
        acc += (y + prev) / 2 * step;
        prev = y;
      }
      return fmtNum(acc, 3);
    } catch { return '\u2014'; }
  })();
  return (
    <Accordion title="Antiderivative &amp; Integral" summary="numeric on visible window">
      <PropRow k="F(x)" v={'\u222B f(x) dx'} mono />
      <PropRow k={`On [${fmtNum(xa, 2)}, ${fmtNum(xb, 2)}]`} v={areaVal} mono />
      <div style={{ marginTop: 6, fontSize: 11, color: T.text.muted, lineHeight: 1.4 }}>
        Antiderivative shown via the F(x) overlay (numeric cumulative integral over the visible window).
      </div>
      <LinksRow>
        <LinkChip href={`${routes.calculusBase}/antiderivative`}>Calculus: Antiderivative</LinkChip>
        <LinkChip href={`${routes.calculusBase}/definite-integral`}>Calculus: Definite integral</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/antiderivative-calculator`}>Antiderivative calculator</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/integral-calculator`}>Definite integral calculator</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

export function TangentApproxPanel({ data, cursor }) {
  const { routes } = useContext(ExplorerContext);
  let slope = null;
  let intercept = null;
  try {
    slope = data.fnPrime(cursor.x);
    if (isFinite(slope)) {
      const y0 = data.fn(cursor.x);
      if (isFinite(y0)) intercept = y0 - slope * cursor.x;
    }
  } catch {}
  return (
    <Accordion title="Tangent &amp; Linear Approx." summary={`at cursor x = ${fmtNum(cursor.x, 2)}`}>
      <PropRow k="Slope"   v={slope === null || !isFinite(slope) ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>m = {fmtNum(slope, 3)}</span>} />
      <PropRow k="Tangent" v={intercept === null ? <Tag variant="gray">undef</Tag> : <span style={{ fontFamily: T.font.mono, fontSize: 11.5 }}>y = {fmtNum(slope, 3)}x {intercept >= 0 ? '+' : '\u2212'} {fmtNum(Math.abs(intercept), 3)}</span>} />
      <LinksRow>
        <LinkChip href={`${routes.toolsBase}/tangent-line`}>Tool: Tangent line visualizer</LinkChip>
        <LinkChip href={`${routes.calculusBase}/linearization`}>Calculus: Linearization</LinkChip>
        <LinkChip ext href={`${routes.calculatorBase}/tangent-line-calculator`}>Tangent line calculator</LinkChip>
      </LinksRow>
    </Accordion>
  );
}

// ============================================================
// THEORY READING LIST
// ============================================================
export function TheoryReadingList({ data }) {
  const { routes } = useContext(ExplorerContext);
  const items = [
    { kind: 'theory', title: `${data.family} functions \u2014 foundations`,     href: `${routes.theoryBase}/${slug(data.family)}`,      meta: `${routes.theoryBase}/${slug(data.family)} \u00B7 8 min read` },
    { kind: 'theory', title: 'Domain, range, and restrictions',                  href: `${routes.theoryBase}/domain-range`,               meta: `${routes.theoryBase}/domain-range \u00B7 6 min read` },
    { kind: 'theory', title: 'Reading a graph: extrema, concavity, asymptotes',  href: `${routes.theoryBase}/graph-reading`,              meta: `${routes.theoryBase}/graph-reading \u00B7 7 min read` },
    { kind: 'vt',     title: 'Transformations explorer',                         href: `${routes.toolsBase}/transformations`,             meta: `${routes.toolsBase}/transformations` },
    { kind: 'vt',     title: 'Symmetry visual tool',                             href: `${routes.toolsBase}/symmetry`,                    meta: `${routes.toolsBase}/symmetry` },
    { kind: 'calc',   title: 'Root finder calculator',                           href: `${routes.calculatorBase}/root-finder`,            meta: 'niche-site dedicated calculator', ext: true },
    { kind: 'calc',   title: 'Extrema finder calculator',                        href: `${routes.calculatorBase}/extrema-finder`,         meta: 'niche-site dedicated calculator', ext: true },
    { kind: 'calc',   title: 'Derivative calculator',                            href: `${routes.calculatorBase}/derivative-calculator`,  meta: 'niche-site dedicated calculator', ext: true },
    { kind: 'cls',    title: 'Differentiating polynomials',                      href: `${routes.calculusBase}/power-rule`,               meta: `${routes.calculusBase}/power-rule` },
    { kind: 'cls',    title: 'Critical points &amp; the first derivative test',  href: `${routes.calculusBase}/critical-points`,          meta: `${routes.calculusBase}/critical-points` },
  ];
  return (
    <div>
      {items.map((it, i) => <ReadRow key={i} item={it} />)}
    </div>
  );
}
function ReadRow({ item }) {
  const [hover, setHover] = React.useState(false);
  const isExternal = item.ext || (typeof item.href === 'string' && /^https?:\/\//.test(item.href));
  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 9,
        padding: '9px 14px',
        borderBottom: `1px solid ${T.border.soft}`,
        background: hover ? T.bg.subtle : 'transparent',
        textDecoration: 'none', color: 'inherit',
        transition: 'background 120ms',
      }}
    >
      <span style={{
        width: 26, height: 26,
        display: 'grid', placeItems: 'center',
        borderRadius: T.radius.sm,
        flexShrink: 0,
        background: T.bg.tintBlue,
        color: T.c.blueD,
      }}>
        {iconForKind(item.kind)}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: T.text.strong, letterSpacing: '-0.005em' }}>
          {item.title}
          {isExternal && (
            <span style={{
              marginLeft: 6, fontSize: 9, letterSpacing: '0.06em',
              textTransform: 'uppercase', color: T.c.blueD,
              background: T.bg.tintBlue, padding: '1px 5px',
              borderRadius: 3, verticalAlign: 'middle',
            }}>EXT {'\u2197'}</span>
          )}
        </div>
        <div style={{ fontSize: 10.5, color: T.text.muted, marginTop: 1 }}>{item.meta}</div>
      </div>
      <span style={{ color: T.text.faint, alignSelf: 'center' }}>{'\u203A'}</span>
    </a>
  );
}
function iconForKind(kind) {
  switch (kind) {
    case 'theory': return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/></svg>;
    case 'vt':     return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14c2-4 4-6 6-6s4 2 6 6"/></svg>;
    case 'calc':   return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/></svg>;
    case 'cls':    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 4c-3 0-4 3-5 8s-2 8-5 8"/></svg>;
    default:       return null;
  }
}