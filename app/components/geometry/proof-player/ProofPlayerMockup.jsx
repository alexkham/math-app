'use client';

// ===========================================================
// ProofPlayerMockup
// Static picture of the proof player for the how-to-use
// Overview (AnnotatedOverview puts numbered pins over it).
// Built from the player's own parts, so it always looks like
// the real thing: top panel, static ProofCanvas at one step,
// readout, control row, step log with the steps so far.
// Nothing here is interactive.
//
// Props: proofKey (default 'angleSum'), step (default 0)
// Elements carry data-pin="…" so pin positions can be measured.
// ===========================================================

import React from 'react';
import PROOFS from './proofs';
import buildScenes from './buildScenes';
import ProofCanvas from './player/ProofCanvas';
import { resolve } from './engine/resolver';
import { PP_CSS, panel, canvasBox, readout, btn, select } from './styles';

const SERIF = '\'Cambria Math\', Georgia, serif';
const BLUE = '#1e40af';

export default function ProofPlayerMockup({ proofKey = 'angleSum', step = 0 }) {
  const proof = PROOFS[proofKey];
  if (!proof) return null;
  const scenes = buildScenes(proof, null);
  const { P } = resolve(proof.model);
  const shown = scenes.slice(0, step + 1);

  return (
    <div aria-hidden="true" style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', pointerEvents: 'none', userSelect: 'none' }}>
      <style dangerouslySetInnerHTML={{ __html: PP_CSS }} />

      <div style={{ ...panel, padding: '6px 12px', minHeight: '34px' }}>
        <span data-pin="proof" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: BLUE, fontWeight: 600, fontSize: '14px' }}>Proof</span>
          <span className="pp-info" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '15px', height: '15px', borderRadius: '50%', background: '#dbeafe', color: BLUE, fontSize: '10px', fontWeight: 700 }}>?</span>
          <span style={{ color: '#0f172a', marginLeft: '6px' }}>{proof.label}</span>
        </span>
        <span data-pin="display" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: '#1e293b' }}>
          <span style={{ color: BLUE, fontWeight: 600, fontSize: '14px' }}>Display</span>
          <span><input type="checkbox" readOnly checked style={{ accentColor: '#2563eb', verticalAlign: '-2px', marginRight: '4px' }} />Labels</span>
          <span><input type="checkbox" readOnly checked={false} style={{ accentColor: '#2563eb', verticalAlign: '-2px', marginRight: '4px' }} />Measures</span>
        </span>
        {proof.hint && <span style={{ color: '#94a3b8', fontSize: '12px', marginLeft: 'auto' }}>{proof.hint}</span>}
      </div>

      <div className="pp-player-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px', alignItems: 'start', marginTop: '10px' }}>
        <div style={{ minWidth: 0 }}>
          <div style={canvasBox} data-pin="canvas">
            <ProofCanvas
              model={proof.model}
              scenes={scenes}
              step={step}
              labelCenter={proof.labelCenter}
              labels
              measures={false}
              viewBox={proof.viewBox}
              animate={false}
              style={{ maxHeight: '230px' }}
            />
            {proof.readout && <div style={readout} data-pin="readout">{proof.readout(P)}</div>}
          </div>
          <div data-pin="controls" style={{ display: 'flex', justifyContent: 'center', gap: '6px', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap' }}>
            <span style={{ ...btn('#475569', false), padding: '6px 12px', fontSize: '12px' }}>&larr; Back</span>
            <span style={{ ...btn('#2563eb'), padding: '6px 12px', fontSize: '12px' }}>▶ Play</span>
            <span style={{ ...btn('#475569'), padding: '6px 12px', fontSize: '12px' }}>Next &rarr;</span>
            <span style={{ ...btn('#dc2626'), padding: '6px 12px', fontSize: '12px' }}>Reset</span>
            <span data-pin="speed" style={{ ...select, padding: '4px 8px', fontSize: '12px', marginLeft: '6px' }}>Normal ▾</span>
            <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '6px' }}>Step {step + 1} / {scenes.length}</span>
          </div>
        </div>

        <div data-pin="log" style={{ background: '#fafafa', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
          <div style={{ padding: '8px 12px', borderBottom: '1px solid #e5e7eb', background: '#f1f5f9' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: BLUE }}>Step explanations</span>
          </div>
          <div style={{ padding: '6px' }}>
            {shown.map((s, idx) => {
              const isCurrent = idx === step;
              return (
                <div key={idx} style={{ padding: '8px 10px', marginBottom: '4px', borderRadius: '6px', background: isCurrent ? '#dbeafe' : 'transparent', border: `2px solid ${isCurrent ? '#3b82f6' : 'transparent'}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'white', background: isCurrent ? '#2563eb' : '#94a3b8', padding: '2px 8px', borderRadius: '4px' }}>{idx + 1}</span>
                    <span style={{ fontFamily: SERIF, fontSize: '14px', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? BLUE : '#475569' }} dangerouslySetInnerHTML={{ __html: s.title }} />
                  </div>
                  <div style={{ fontFamily: SERIF, fontSize: '13px', color: '#374151', lineHeight: 1.45, paddingLeft: '34px' }} dangerouslySetInnerHTML={{ __html: s.formula }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
