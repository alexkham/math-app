'use client';

// ===========================================================
// ProofPlayerWrapper v1
// Geometric proof visualizer: card chrome + control panel +
// ScenePlayer-style player around the SVG proof canvas.
//
// Props
//   proofKeys       which proofs from proofs/index.js to offer
//                   (one key → no selector, the label is shown)
//   defaultProof    initial proof key
//   explanations    { [proofKey]: { [phase]: rawHtml } }, appended
//                   to matching scene formulas (Line 1 anchor mesh)
//   subtitle, defaultSpeed, showDisplayOptions
//
// Layering: proofs → engine ← render ← player ← this wrapper.
// ===========================================================

import React, { useState, useMemo } from 'react';
import PROOFS from './proofs';
import buildScenes from './buildScenes';
import ProofPlayer from './player/ProofPlayer';
import ProofCanvas from './player/ProofCanvas';
import useProofModel from './player/useProofModel';
import { PP_CSS, card, subtitle as subtitleStyle, panel, select, canvasBox, canvasSvg, readout } from './styles';

function InfoIcon({ tip }) {
  return (
    <span
      className="pp-info"
      tabIndex={0}
      aria-label="More info"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#dbeafe',
        color: '#1e40af',
        fontSize: '11px',
        fontWeight: 700,
        cursor: 'help',
        position: 'relative',
        lineHeight: 1,
        userSelect: 'none',
        flexShrink: 0
      }}
    >
      ?
      <span className="pp-tip">{tip}</span>
    </span>
  );
}

// Label and its control sit on one line: "Proof ? Triangle angle sum".
function FieldLabel({ children, info }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginRight: '10px' }}>
      <span style={{ fontSize: '15px', color: '#1e40af', fontWeight: 600, lineHeight: 1.2 }}>
        {children}
      </span>
      {info && <InfoIcon tip={info} />}
    </span>
  );
}

const field = { display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px 0' };

// one mounted instance per proof (keyed by the wrapper)
function ProofStage({ proof, scenes, labels, measures, defaultSpeed }) {
  const { model, P, moveHandle, reset } = useProofModel(proof);

  return (
    <ProofPlayer
      scenes={scenes}
      defaultSpeed={defaultSpeed}
      onReset={reset}
      renderCanvas={(step) => (
        <div style={canvasBox}>
          <ProofCanvas
            model={model}
            scenes={scenes}
            step={step}
            labelCenter={proof.labelCenter}
            labels={labels}
            measures={measures}
            onHandleMove={moveHandle}
            viewBox={proof.viewBox}
            style={canvasSvg}
          />
          {proof.readout && <div style={readout}>{proof.readout(P)}</div>}
        </div>
      )}
    />
  );
}

export default function ProofPlayerWrapper({
  proofKeys = Object.keys(PROOFS),
  defaultProof,
  explanations = null,
  subtitle = null,
  defaultSpeed = 1500,
  showDisplayOptions = true
}) {
  const [proofKey, setProofKey] = useState(defaultProof || proofKeys[0]);
  const [labels, setLabels] = useState(true);
  const [measures, setMeasures] = useState(false);

  const proof = PROOFS[proofKey];
  const proofExplanations = explanations ? explanations[proofKey] : null;
  const scenes = useMemo(() => buildScenes(proof, proofExplanations), [proof, proofExplanations]);

  return (
    <div style={card}>
      <style dangerouslySetInnerHTML={{ __html: PP_CSS }} />

      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}

      <div style={panel}>
        <div style={field}>
          <FieldLabel info={proof.info}>Proof</FieldLabel>
          {proofKeys.length > 1 ? (
            <select value={proofKey} onChange={(e) => setProofKey(e.target.value)} style={select} aria-label="Choose proof">
              {proofKeys.map((k) => (
                <option key={k} value={k}>{PROOFS[k].label}</option>
              ))}
            </select>
          ) : (
            <span style={{ fontSize: '15px', color: '#0f172a' }}>{proof.label}</span>
          )}
        </div>

        {showDisplayOptions && (
          <div style={{ ...field, gap: '4px 14px', fontSize: '14px', color: '#1e293b' }}>
            <FieldLabel>Display</FieldLabel>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <input type="checkbox" checked={labels} onChange={(e) => setLabels(e.target.checked)} style={{ accentColor: '#2563eb' }} />
              Labels
            </label>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <input type="checkbox" checked={measures} onChange={(e) => setMeasures(e.target.checked)} style={{ accentColor: '#2563eb' }} />
              Measures
            </label>
          </div>
        )}

        {proof.hint && (
          <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: 'auto' }}>{proof.hint}</span>
        )}
      </div>

      <div style={{ marginTop: '10px' }}>
        <ProofStage
          key={proofKey}
          proof={proof}
          scenes={scenes}
          labels={labels}
          measures={measures}
          defaultSpeed={defaultSpeed}
        />
      </div>
    </div>
  );
}
