// Graph Studio — Explorer shell: the Compare panel.
//
// Shown while a second function g is being compared with f. It reads
// two results of analyzeFunction and one of compareFunctions
// (engine/analysis.js); it works nothing out itself.

import React from 'react';
import { T } from './explorerTokens.js';
import { Accordion, PropRow, Tag } from './ExplorerAtoms.jsx';
import { Tex } from '../parts/MathText.jsx';

export const COMPARE_COLOR = '#B45309';   // g, and everything said about g

function num(v, digits = 3) {
  if (v === null || v === undefined || !Number.isFinite(v)) return '—';
  const r = Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits);
  return (Object.is(r, -0) ? 0 : r).toString().replace('-', '−');
}
const mono = { fontFamily: T.font.mono, fontSize: 11.5 };

function Swatch({ color }) {
  return <span style={{ display: 'inline-block', width: 12, height: 0, borderTop: `2px solid ${color}`, marginRight: 6, verticalAlign: 'middle' }} />;
}

// One row of the side-by-side table.
function PairRow({ k, f, g }) {
  return (
    <tr>
      <td style={{ padding: '5px 8px 5px 0', color: T.text.muted, fontSize: 11.5, whiteSpace: 'nowrap', verticalAlign: 'top' }}>{k}</td>
      <td style={{ padding: '5px 8px', fontSize: 11.5, color: T.text.strong, verticalAlign: 'top', wordBreak: 'break-word' }}>{f}</td>
      <td style={{ padding: '5px 0 5px 8px', fontSize: 11.5, color: T.text.strong, verticalAlign: 'top', wordBreak: 'break-word' }}>{g}</td>
    </tr>
  );
}

const PARITY = { even: 'Even', odd: 'Odd', neither: 'Neither' };
const roots = d => (d.roots.length ? d.roots.map(r => num(r)).join(', ') : 'none');

export default function ComparePanel({ f, g, result, cursor, viewport }) {
  if (!f) return null;
  if (!g) {
    return <div style={{ padding: 16, fontSize: 12, color: T.text.muted }}>Type a second function in the g(x) box above the graph. The comparison appears here once it can be read.</div>;
  }
  const windowText = `x from ${num(viewport.xMin, 2)} to ${num(viewport.xMax, 2)}`;
  const n = result.crossings.length;
  const REL = {
    above: <Tag variant="affirm">f is higher</Tag>,
    below: <Tag variant="dim">g is higher</Tag>,
    equal: <Tag variant="gray">equal</Tag>,
    undefined: <Tag variant="gray">one is not defined</Tag>
  };
  const gap = cursor.f !== null && cursor.g !== null ? cursor.f - cursor.g : null;

  return (
    <>
      <Accordion title="Where they meet" summary={result.same ? 'the same graph' : `${n} point${n === 1 ? '' : 's'} in view`} defaultOpen>
        {result.same && <PropRow k="Result" v={<Tag variant="affirm">f and g give the same values</Tag>} />}
        {!result.same && n === 0 && <PropRow k="Result" v={<Tag variant="gray">They do not meet in view</Tag>} />}
        {!result.same && result.crossings.map((c, i) => (
          <PropRow key={i} k={<Tex tex={`x = ${num(c.x).replace('−', '-')}`} />} v={<span style={mono}>({num(c.x)}, {num(c.y)})</span>} />
        ))}
        <div style={{ marginTop: 6, fontSize: 11, color: T.text.faint }}>Looked at {windowText}. Move or zoom the graph to look elsewhere.</div>
      </Accordion>

      <Accordion title="Which is higher" summary={result.same ? 'neither' : `${result.intervals.length} stretch${result.intervals.length === 1 ? '' : 'es'}`} defaultOpen>
        {result.intervals.map((iv, i) => (
          <PropRow key={i} k={<span style={mono}>{num(iv.from, 2)} … {num(iv.to, 2)}</span>} v={REL[iv.rel]} />
        ))}
      </Accordion>

      <Accordion title="At the cursor" summary={`x = ${num(cursor.x, 2)}`} defaultOpen>
        <PropRow k="x" v={num(cursor.x)} mono />
        <PropRow k={<><Swatch color={T.c.blue} />f(x)</>} v={cursor.f === null ? 'not defined' : num(cursor.f)} mono />
        <PropRow k={<><Swatch color={COMPARE_COLOR} />g(x)</>} v={cursor.g === null ? 'not defined' : num(cursor.g)} mono />
        <PropRow k="f(x) − g(x)" v={gap === null ? '—' : num(gap)} mono />
      </Accordion>

      <Accordion title="Side by side" summary={`${f.family} · ${g.family}`} defaultOpen>
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <colgroup><col style={{ width: '28%' }} /><col style={{ width: '36%' }} /><col style={{ width: '36%' }} /></colgroup>
          <thead>
            <tr>
              <th />
              <th style={{ padding: '2px 8px 6px', textAlign: 'left', fontSize: 11.5, fontWeight: 600, color: T.c.blueD, borderBottom: `1px solid ${T.border.soft}` }}><Swatch color={T.c.blue} />f</th>
              <th style={{ padding: '2px 0 6px 8px', textAlign: 'left', fontSize: 11.5, fontWeight: 600, color: COMPARE_COLOR, borderBottom: `1px solid ${T.border.soft}` }}><Swatch color={COMPARE_COLOR} />g</th>
            </tr>
          </thead>
          <tbody>
            <PairRow k="Formula" f={f.formulaTex ? <Tex tex={f.formulaTex} /> : f.formula} g={g.formulaTex ? <Tex tex={g.formulaTex} /> : g.formula} />
            <PairRow k="Family" f={f.family} g={g.family} />
            <PairRow k="Domain" f={<span style={mono}>{f.domain}</span>} g={<span style={mono}>{g.domain}</span>} />
            <PairRow k="Range" f={<span style={mono}>{f.range}</span>} g={<span style={mono}>{g.range}</span>} />
            <PairRow k="Roots" f={<span style={mono}>{roots(f)}</span>} g={<span style={mono}>{roots(g)}</span>} />
            <PairRow k="y-intercept" f={<span style={mono}>{num(f.yIntercept)}</span>} g={<span style={mono}>{num(g.yIntercept)}</span>} />
            <PairRow k="Parity" f={PARITY[f.parity] || '—'} g={PARITY[g.parity] || '—'} />
            <PairRow k="Continuous" f={f.continuous ? 'Yes' : 'Has gaps'} g={g.continuous ? 'Yes' : 'Has gaps'} />
            <PairRow k="Vertical asymptotes" f={f.asymptotes.length} g={g.asymptotes.length} />
          </tbody>
        </table>
      </Accordion>
    </>
  );
}
