'use client';

// ===========================================================
// player/ProofPlayer.jsx
// Scene player with the same behaviour and look as MatrixCore's
// ScenePlayer: Back / Play / Next / Reset, speed selector, step
// indicator, and a cumulative "Step explanations" log on the
// right that grows with the current step and auto-scrolls.
//
// Canvas-agnostic: the caller renders the canvas through
// renderCanvas(step). Scenes need { title, formula } (raw HTML).
// ===========================================================

import React, { useState, useEffect, useRef } from 'react';
import { btn, select } from '../styles';

const SERIF = '\'Cambria Math\', Georgia, serif';

export default function ProofPlayer({
  scenes,
  renderCanvas,
  onReset = null,
  defaultSpeed = 1500,
  speedOptions = [
    { value: defaultSpeed + 800, label: 'Slow' },
    { value: defaultSpeed, label: 'Normal' },
    { value: 700, label: 'Fast' },
    { value: 400, label: 'Very Fast' }
  ],
  showSpeedSelector = true,
  showStepIndicator = true,
  stepLogTitle = 'Step explanations',
  stepLogMaxHeight = '30rem'
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(defaultSpeed);
  const timerRef = useRef(null);
  const logBodyRef = useRef(null);

  const totalSteps = scenes ? scenes.length : 0;
  const atEnd = currentStep >= totalSteps - 1;

  useEffect(() => {
    setCurrentStep(0);
    setPlaying(false);
  }, [scenes]);

  useEffect(() => {
    if (playing && !atEnd) {
      timerRef.current = setTimeout(() => setCurrentStep((s) => s + 1), speed);
    } else if (atEnd) {
      setPlaying(false);
    }
    return () => clearTimeout(timerRef.current);
  }, [playing, currentStep, atEnd, speed]);

  useEffect(() => {
    const el = logBodyRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [currentStep]);

  const handlePlay = () => {
    if (atEnd) {
      setCurrentStep(0);
      setTimeout(() => setPlaying(true), 50);
    } else {
      setPlaying((p) => !p);
    }
  };
  const handleNext = () => {
    setPlaying(false);
    setCurrentStep((s) => Math.min(s + 1, totalSteps - 1));
  };
  const handleBack = () => {
    setPlaying(false);
    setCurrentStep((s) => Math.max(s - 1, 0));
  };
  const handleReset = () => {
    setPlaying(false);
    setCurrentStep(0);
    if (onReset) onReset();
  };
  const handleJumpTo = (idx) => {
    setPlaying(false);
    setCurrentStep(idx);
  };

  if (!totalSteps) return null;

  const controls = (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap' }}>
      <button className="pp-btn" style={btn('#475569', currentStep > 0)} onClick={handleBack} disabled={currentStep === 0}>
        &larr; Back
      </button>
      <button className="pp-btn" style={btn(playing ? '#ea580c' : '#2563eb')} onClick={handlePlay}>
        {playing ? '⏸ Pause' : atEnd ? '↻ Replay' : '▶ Play'}
      </button>
      <button className="pp-btn" style={btn('#475569', !atEnd)} onClick={handleNext} disabled={atEnd}>
        Next &rarr;
      </button>
      <button className="pp-btn" style={btn('#dc2626')} onClick={handleReset}>
        Reset
      </button>
      {showSpeedSelector && (
        <select
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value, 10))}
          style={{ ...select, marginLeft: '8px' }}
          aria-label="Speed"
        >
          {speedOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      )}
      {showStepIndicator && (
        <span style={{ fontSize: '13px', color: '#64748b', marginLeft: '8px', fontVariantNumeric: 'tabular-nums' }}>
          Step {currentStep + 1} / {totalSteps}
        </span>
      )}
    </div>
  );

  const log = (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      minWidth: 0,
      minHeight: 0,
      maxHeight: stepLogMaxHeight,
      background: '#fafafa',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden'
    }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb', background: '#f1f5f9', borderRadius: '8px 8px 0 0' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#1e40af' }}>{stepLogTitle}</h3>
      </div>
      <div
        ref={logBodyRef}
        className="pp-log-body"
        style={{ overflowY: 'auto', padding: '8px', minHeight: 0, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {scenes.slice(0, currentStep + 1).map((s, idx) => {
          const isCurrent = idx === currentStep;
          return (
            <div
              key={idx}
              onClick={(e) => { if (!e.target.closest('a')) handleJumpTo(idx); }}
              style={{
                padding: '10px 12px',
                marginBottom: '5px',
                borderRadius: '6px',
                background: isCurrent ? '#dbeafe' : 'transparent',
                border: `2px solid ${isCurrent ? '#3b82f6' : 'transparent'}`,
                cursor: 'pointer',
                transition: 'background 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: s.title ? '5px' : 0 }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'white',
                  background: isCurrent ? '#2563eb' : '#94a3b8',
                  padding: '3px 9px',
                  borderRadius: '4px',
                  flexShrink: 0,
                  fontVariantNumeric: 'tabular-nums'
                }}>
                  {idx + 1}
                </span>
                {s.title && (
                  <span
                    style={{ fontFamily: SERIF, fontSize: '15px', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? '#1e40af' : '#475569' }}
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                )}
              </div>
              {s.formula && (
                <div
                  style={{ fontFamily: SERIF, fontSize: '14px', color: isCurrent ? '#374151' : '#64748b', lineHeight: 1.5, paddingLeft: '38px' }}
                  dangerouslySetInnerHTML={{ __html: s.formula }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className="pp-player-grid"
      style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px', alignItems: 'start', width: '100%' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {renderCanvas(currentStep)}
        {controls}
      </div>
      {log}
    </div>
  );
}
