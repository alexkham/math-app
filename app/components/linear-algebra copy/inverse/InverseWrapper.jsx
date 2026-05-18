'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ScenePlayer } from '../MatrixCoreEnhanced';
import { STRATEGIES, STRATEGY_ORDER, getStrategy } from './strategies';

// ===========================================================
// InverseWrapper
//
// Tabbed control panel: Scenario (size) | Strategy.
// Engine is imported from one level up (../MatrixCoreEnhanced);
// strategies live in ./strategies.
// ===========================================================

const mathInlineStyle = {
  fontFamily: '\'Cambria Math\', Georgia, serif',
  fontStyle: 'italic'
};

const chevButtonStyle = {
  background: 'transparent',
  border: 'none',
  padding: '0 2px',
  fontSize: '8px',
  color: '#64748b',
  cursor: 'pointer',
  lineHeight: 1,
  fontFamily: 'inherit'
};

// -----------------------------------------------------------
// Primitives
// -----------------------------------------------------------

function FieldLabel({ children }) {
  return (
    <p style={{
      fontSize: '12px',
      color: '#64748b',
      margin: '0 0 8px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 500
    }}>
      {children}
    </p>
  );
}

function Stepper({ value, onChange, min, max, locked = false, lockReason }) {
  const interactive = !locked;
  return (
    <span
      title={locked ? lockReason : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 6px 4px 10px',
        borderRadius: '6px',
        background: locked ? '#f1f5f9' : 'white',
        border: `1px ${locked ? 'dashed' : 'solid'} ${locked ? '#94a3b8' : '#cbd5e1'}`
      }}
    >
      <span style={{
        ...mathInlineStyle,
        fontWeight: 500,
        minWidth: '14px',
        textAlign: 'center',
        color: locked ? '#64748b' : '#0f172a'
      }}>
        {value}
      </span>
      {interactive ? (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
          <button
            className="iw-stepper-btn"
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            style={chevButtonStyle}
            aria-label="Increase"
          >&#9650;</button>
          <button
            className="iw-stepper-btn"
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            style={chevButtonStyle}
            aria-label="Decrease"
          >&#9660;</button>
        </span>
      ) : (
        <span style={{
          fontSize: '11px',
          color: '#94a3b8',
          display: 'inline-flex',
          alignItems: 'center'
        }}>&#8646;</span>
      )}
    </span>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      className="iw-tab"
      style={{
        padding: '12px 16px',
        background: active ? 'white' : 'transparent',
        border: 'none',
        borderBottom: `2px solid ${active ? '#2563eb' : 'transparent'}`,
        fontSize: '13px',
        color: active ? '#1e40af' : '#64748b',
        fontWeight: active ? 600 : 'normal',
        cursor: 'pointer',
        fontFamily: 'inherit',
        marginBottom: active ? '-1px' : 0
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SubControls({ schema, values, onChange, size }) {
  const entries = Object.entries(schema);
  if (entries.length === 0) return null;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        marginTop: '10px',
        paddingTop: '10px',
        borderTop: '1px dashed #cbd5e1'
      }}
    >
      {entries.map(([name, opt]) => {
        if (opt.kind === 'pill-row') {
          const [min, max] = opt.rangeFromSize(size);
          const count = max - min + 1;
          const raw = values?.[name] ?? 0;
          const current = Math.max(0, Math.min(raw, count - 1));
          return (
            <div
              key={name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap'
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  color: '#64748b',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 500
                }}
                dangerouslySetInnerHTML={{ __html: opt.label }}
              />
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: count }, (_, k) => {
                  const isActive = current === k;
                  return (
                    <button
                      key={k}
                      onClick={(e) => {
                        e.stopPropagation();
                        onChange(name, k);
                      }}
                      style={{
                        padding: '3px 10px',
                        background: isActive ? '#2563eb' : 'white',
                        color: isActive ? 'white' : '#334155',
                        border: `1px solid ${isActive ? '#2563eb' : '#cbd5e1'}`,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: isActive ? 600 : 500,
                        fontFamily: 'Arial, sans-serif',
                        minWidth: '24px'
                      }}
                    >
                      {min + k}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

function StrategyCard({ meta, active, disabled, sizeBadge, onClick, children }) {
  const base = {
    background: active ? '#dbeafe' : 'white',
    border: active ? '2px solid #2563eb' : '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: active ? '11px 13px' : '12px 14px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'Arial, sans-serif',
    transition: 'border-color 0.15s ease, background 0.15s ease'
  };

  const cls = [
    'iw-strategy',
    active && 'iw-strategy-active',
    disabled && 'iw-strategy-disabled'
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} style={base} onClick={disabled ? undefined : onClick}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '4px',
        gap: '6px'
      }}>
        <span
          style={{
            fontSize: '14px',
            fontWeight: active ? 600 : 500,
            color: active ? '#1e40af' : '#334155'
          }}
          dangerouslySetInnerHTML={{ __html: meta.label }}
        />
        <span style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
          {sizeBadge && (
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: '#fef3c7',
              color: '#92400e',
              fontWeight: 600
            }}>
              {sizeBadge}
            </span>
          )}
          {meta.advanced && (
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: '#dbeafe',
              color: '#1e40af',
              fontWeight: 600
            }}>
              advanced
            </span>
          )}
          {!meta.enabled && (
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: '#f1f5f9',
              color: '#64748b',
              fontWeight: 500
            }}>
              soon
            </span>
          )}
          {active && (
            <span style={{ fontSize: '14px', color: '#2563eb' }}>&#10003;</span>
          )}
        </span>
      </div>
      <p
        style={{
          fontSize: '12px',
          color: active ? '#475569' : '#64748b',
          margin: 0,
          lineHeight: 1.45
        }}
        dangerouslySetInnerHTML={{ __html: meta.description }}
      />
      {children}
    </div>
  );
}

// -----------------------------------------------------------
// Main
// -----------------------------------------------------------

export default function InverseWrapper({
  defaultSize = 2,
  sizeRange = [2, 3],
  title = 'Matrix Inverse',
  subtitle = 'Symbolic visualization of A\u207B\u00B9: same matrix, three recipes.',
  defaultSpeed = 1200
}) {
  const [activeTab, setActiveTab] = useState('scenario');
  const [size, setSize] = useState(defaultSize);
  const [strategy, setStrategy] = useState('closed-2x2');
  const [strategyOptions, setStrategyOptions] = useState({});

  const sizeMin = sizeRange[0];
  const sizeMax = sizeRange[sizeRange.length - 1];

  // Auto-snap strategy on size change.
  useEffect(() => {
    const current = STRATEGIES[strategy];
    if (current && current.sizes.includes(size)) return;
    const next =
      STRATEGY_ORDER.find((id) => {
        const s = STRATEGIES[id];
        return s.enabled && s.sizes.includes(size);
      }) ||
      STRATEGY_ORDER.find((id) => STRATEGIES[id].sizes.includes(size)) ||
      'closed-2x2';
    setStrategy(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  // Clamp stored option values when size changes.
  useEffect(() => {
    setStrategyOptions((prev) => {
      let changed = false;
      const next = { ...prev };
      STRATEGY_ORDER.forEach((id) => {
        const meta = STRATEGIES[id];
        if (!meta.options) return;
        const existing = prev[id] || {};
        const updated = { ...existing };
        Object.entries(meta.options).forEach(([name, opt]) => {
          if (opt.kind === 'pill-row') {
            const [min, max] = opt.rangeFromSize(size);
            const count = max - min + 1;
            const cur = existing[name];
            if (cur !== undefined && cur > count - 1) {
              updated[name] = count - 1;
              changed = true;
            }
          }
        });
        if (changed) next[id] = updated;
      });
      return changed ? next : prev;
    });
  }, [size]);

  const getOptionsFor = (id) => strategyOptions[id] || {};

  const updateOption = (id, name, value) => {
    setStrategyOptions((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [name]: value }
    }));
  };

  const activeMeta = getStrategy(strategy);

  const scenes = useMemo(() => {
    const s = STRATEGIES[strategy];
    if (!s || !s.enabled || !s.build) return [];
    if (!s.sizes.includes(size)) return [];
    return s.build(size, getOptionsFor(strategy));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, size, strategyOptions]);

  const handleStrategyChange = (id) => {
    const s = STRATEGIES[id];
    if (!s || !s.enabled) return;
    if (!s.sizes.includes(size)) return;
    setStrategy(id);
  };

  const summary = (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12px',
      color: '#64748b',
      padding: '12px 0',
      flexWrap: 'wrap'
    }}>
      <span><span style={mathInlineStyle}>A</span><sup>&minus;1</sup></span>
      <span style={{ color: '#cbd5e1' }}>&middot;</span>
      <span>{size}&times;{size}</span>
      <span style={{ color: '#cbd5e1', margin: '0 4px' }}>|</span>
      <span dangerouslySetInnerHTML={{ __html: activeMeta.label }} />
    </div>
  );

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style>{`
        .iw-tab:hover { color: #334155; }
        .iw-strategy:hover { border-color: #94a3b8; }
        .iw-strategy-active:hover { border-color: #2563eb; }
        .iw-strategy-disabled { opacity: 0.55; cursor: not-allowed; }
        .iw-strategy-disabled:hover { border-color: #cbd5e1; }
        .iw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
        .iw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }
      `}</style>

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {title && (
            <h2 style={{
              fontSize: '22px',
              color: '#1e40af',
              margin: '0 0 4px 0',
              fontWeight: 'bold'
            }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          padding: '0 16px',
          borderBottom: '1px solid #e5e7eb',
          background: '#f8fafc',
          flexWrap: 'wrap'
        }}>
          <TabButton active={activeTab === 'scenario'} onClick={() => setActiveTab('scenario')}>
            Scenario
          </TabButton>
          <TabButton active={activeTab === 'strategy'} onClick={() => setActiveTab('strategy')}>
            Strategy
          </TabButton>
          <div style={{ flex: 1 }} />
          {summary}
        </div>

        <div style={{ padding: '18px' }}>
          {activeTab === 'scenario' && (
            <div>
              <FieldLabel>Size of <span style={mathInlineStyle}>A</span> (square)</FieldLabel>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
                <Stepper value={size} onChange={setSize} min={sizeMin} max={sizeMax} />
                <span style={{ color: '#94a3b8' }}>&times;</span>
                <Stepper
                  value={size}
                  onChange={() => {}}
                  min={sizeMin}
                  max={sizeMax}
                  locked={true}
                  lockReason="A is square &mdash; both dimensions are linked"
                />
              </div>
            </div>
          )}

          {activeTab === 'strategy' && (
            <div>
              <FieldLabel>
                How <span style={mathInlineStyle}>A</span><sup>&minus;1</sup> is computed
              </FieldLabel>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px'
              }}>
                {STRATEGY_ORDER.map((id) => {
                  const meta = STRATEGIES[id];
                  const fitsSize = meta.sizes.includes(size);
                  const active = strategy === id;
                  const disabled = !meta.enabled || !fitsSize;
                  let sizeBadge = null;
                  if (!fitsSize) {
                    sizeBadge =
                      meta.sizes.length === 1
                        ? `${meta.sizes[0]}\u00D7${meta.sizes[0]} only`
                        : `n \u2208 {${meta.sizes.join(',')}}`;
                  }
                  return (
                    <StrategyCard
                      key={id}
                      meta={meta}
                      active={active}
                      disabled={disabled}
                      sizeBadge={sizeBadge}
                      onClick={() => handleStrategyChange(id)}
                    >
                      {active && !disabled && meta.options && (
                        <SubControls
                          schema={meta.options}
                          values={getOptionsFor(id)}
                          onChange={(name, value) => updateOption(id, name, value)}
                          size={size}
                        />
                      )}
                    </StrategyCard>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '18px' }}>
        {scenes.length === 0 ? (
          <div style={{
            padding: '20px 22px',
            background: '#fef9c3',
            border: '1px solid #fde68a',
            borderRadius: '10px',
            color: '#713f12',
            fontSize: '14px'
          }}>
            <strong dangerouslySetInnerHTML={{ __html: activeMeta.label }} />{' '}
            is not yet available for size {size}&times;{size}. Try a different size,
            or pick another strategy.
          </div>
        ) : (
          <ScenePlayer
            scenes={scenes}
            defaultSpeed={defaultSpeed}
            showSpeedSelector={true}
            showStepIndicator={true}
            showStepLog={true}
            stepLogTitle="Step explanations"
          />
        )}
      </div>
    </div>
  );
}