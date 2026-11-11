// MathAnimationFrame_v1.jsx
// Styled wrapper around the MathAnimation engine: a card with the animation, step explanations
// that follow the clock, and step-aware controls. The core component is not modified; this file
// drives the engine through its exported renderFrame function and runs its own clock.
// Full reference: MathAnimationFrame_docs_v1.md
//
// Usage:
//   import MathAnimationFrame from './MathAnimationFrame_v1';
//   import { scenes, matrixMultiplyScene } from './mathAnimationScenes_v3';
//
//   <MathAnimationFrame scene={scenes.matrixMultiply} title="Matrix times vector" />
//   <MathAnimationFrame scene={scenes.derivative} explanationPosition="bottom" explanationStyle="caption" />
//   <MathAnimationFrame scene={scenes.riemann} playback="step" renderText={(text) => processContent(text)} />
//
// Steps come from scene.steps (or the steps prop): [{ at: 0.14, title: 'Row 1', text: '...' }]
// where "at" is the clock position (0..1) at which the step begins.

import React, { useEffect, useRef, useState } from 'react';
import { renderFrame } from './MathAnimation_v2';
import { resolveTheme } from './mathAnimationThemes_v2';

const DEFAULT_UI = {
  cardBg: '#ffffff',
  border: '#e2e8f0',
  borderStrong: '#cbd5e1',
  text: '#1e293b',
  textSecondary: '#475569',
  textMuted: '#94a3b8',
  accent: '#1d4ed8',
  accentBg: 'rgba(37,99,235,0.1)',
  radius: 12,
  controlRadius: 8,
  padding: '16px 20px',
  font: 'inherit',
};

const DEFAULT_LABELS = {
  play: 'Play',
  pause: 'Pause',
  replay: 'Replay',
  previous: 'Previous step',
  next: 'Next step',
  timeline: 'Timeline',
  step: (index, total) => 'Step ' + index + ' of ' + total,
};

const DEFAULT_SCENE = {
  duration: 5000,
  params: { g: 0, v: 0 },
  tracks: [
    { param: 'g', to: 1, start: 0, end: 0.35 },
    { param: 'v', to: 1, start: 0.45, end: 0.9 },
  ],
  objects: [
    { type: 'baseGrid' },
    { type: 'grid', progress: (p) => p.g },
    { type: 'vector', to: (p) => [2 * p.v, p.v], color: 'accent', label: 'v' },
  ],
  steps: [
    { at: 0, title: 'The grid', text: 'Start with the coordinate grid.' },
    { at: 0.45, title: 'A vector', text: 'A vector is an arrow from the origin to a point, here (2, 1).' },
  ],
};

const EPS = 0.0005;
const clamp01 = (value) => Math.max(0, Math.min(1, value));
const seg = (t, a, b) => (b > a ? clamp01((t - a) / (b - a)) : t >= b ? 1 : 0);

const stepIndexAt = (steps, t) => {
  let index = 0;
  steps.forEach((step, i) => {
    if (step.at <= t) index = i;
  });
  return index;
};

const stepEnd = (steps, index) => (index < steps.length - 1 ? steps[index + 1].at : 1);

export default function MathAnimationFrame(props) {
  const {
    scene = DEFAULT_SCENE,
    theme,
    themeOverrides,
    title,
    steps: stepsProp,
    explanationPosition = 'right',
    explanationStyle = 'list',
    explanationWidth = 240,
    stackBelow = 640,
    playback = 'auto',
    autoPlay = true,
    loop = false,
    pauseOffscreen = true,
    height,
    renderText = (text) => text,
    ui: uiProp,
    labels: labelsProp,
    ariaLabel,
    style,
  } = props;

  const ui = { ...DEFAULT_UI, ...uiProp };
  const labels = { ...DEFAULT_LABELS, ...labelsProp };
  const steps = stepsProp || scene.steps || [];
  const hasSteps = steps.length > 0;
  const segments = hasSteps ? steps : [{ at: 0 }];
  const resolvedTheme = resolveTheme(theme || scene.theme, scene.themeOverrides, themeOverrides);
  const baseHeight = scene.height || 380;

  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const barRef = useRef(null);
  const fillRefs = useRef([]);
  const sceneRef = useRef(scene);
  const themeRef = useRef(resolvedTheme);
  const stepsRef = useRef(steps);
  const optionsRef = useRef({ loop, playback, height, baseHeight, stackBelow });
  const clockRef = useRef(0);
  const lastRef = useRef(null);
  const playingRef = useRef(autoPlay);
  const visibleRef = useRef(true);
  const stopAtRef = useRef(1);
  const activeRef = useRef(0);
  const fitRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  const [status, setStatus] = useState(autoPlay ? 'playing' : 'paused');
  const [activeStep, setActiveStep] = useState(0);
  const [fitHeight, setFitHeight] = useState(null);
  const [narrow, setNarrow] = useState(false);

  sceneRef.current = scene;
  themeRef.current = resolvedTheme;
  stepsRef.current = steps;
  optionsRef.current = { loop, playback, height, baseHeight, stackBelow };

  const draw = () => {
    const canvas = canvasRef.current;
    const size = sizeRef.current;
    if (!canvas || !size.w) return;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(size.dpr, 0, 0, size.dpr, 0, 0);
    renderFrame(ctx, sceneRef.current, themeRef.current, clockRef.current, size.w, size.h);
  };

  const syncUi = () => {
    const list = stepsRef.current;
    const clock = clockRef.current;
    const index = list.length ? stepIndexAt(list, clock) : 0;
    if (index !== activeRef.current) {
      activeRef.current = index;
      setActiveStep(index);
    }
    const parts = list.length ? list : [{ at: 0 }];
    parts.forEach((part, i) => {
      const fill = fillRefs.current[i];
      if (fill) fill.style.width = Math.round(seg(clock, part.at, stepEnd(parts, i)) * 1000) / 10 + '%';
    });
  };

  const setPlaying = (playing) => {
    const list = stepsRef.current;
    playingRef.current = playing;
    lastRef.current = null;
    if (playing) {
      stopAtRef.current = list.length ? stepEnd(list, stepIndexAt(list, clockRef.current + 2 * EPS)) : 1;
    }
    setStatus(playing ? 'playing' : clockRef.current >= 1 ? 'ended' : 'paused');
  };

  const seek = (position, playAfter) => {
    clockRef.current = clamp01(position);
    setPlaying(Boolean(playAfter) && clockRef.current < 1);
    syncUi();
    draw();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    let raf = 0;

    const measure = () => {
      const options = optionsRef.current;
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      sizeRef.current = { w, h, dpr };
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      draw();

      const view = sceneRef.current.view || {};
      if (view.px && options.height === undefined && w > 0) {
        const scale = Math.min(view.maxScale || 1, (w - 20) / view.px[0]);
        const fit = Math.round(Math.max(140, Math.min(options.baseHeight, view.px[1] * scale)));
        if (fit !== fitRef.current) {
          fitRef.current = fit;
          setFitHeight(fit);
        }
      }
      if (root) setNarrow(root.clientWidth < options.stackBelow);
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!playingRef.current || !visibleRef.current) {
        lastRef.current = null;
        return;
      }
      const options = optionsRef.current;
      const list = stepsRef.current;
      if (lastRef.current !== null) {
        clockRef.current += (now - lastRef.current) / (sceneRef.current.duration || 7000);
      }
      lastRef.current = now;
      const stopAt = stopAtRef.current;
      if (options.playback === 'step' && list.length > 1 && stopAt < 1 && clockRef.current >= stopAt - EPS) {
        clockRef.current = stopAt - EPS;
        setPlaying(false);
      } else if (clockRef.current >= 1) {
        if (options.loop) {
          clockRef.current = 0;
          stopAtRef.current = list.length ? stepEnd(list, 0) : 1;
        } else {
          clockRef.current = 1;
          setPlaying(false);
        }
      }
      syncUi();
      draw();
    };

    measure();
    raf = requestAnimationFrame(frame);

    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (resizeObserver) {
      resizeObserver.observe(canvas);
      if (root) resizeObserver.observe(root);
    }

    const viewObserver = pauseOffscreen && typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver((entries) => {
        visibleRef.current = entries[0].isIntersecting;
      })
      : null;
    if (viewObserver) viewObserver.observe(canvas);

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);

    return () => {
      cancelAnimationFrame(raf);
      if (resizeObserver) resizeObserver.disconnect();
      if (viewObserver) viewObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    clockRef.current = 0;
    fitRef.current = null;
    setFitHeight(null);
    setPlaying(autoPlay);
    syncUi();
    draw();
  }, [scene]);

  useEffect(() => {
    syncUi();
    draw();
  });

  const handleToggle = () => {
    if (playingRef.current) {
      setPlaying(false);
      return;
    }
    if (clockRef.current >= 1) clockRef.current = 0;
    setPlaying(true);
    syncUi();
  };

  const playAfterJump = () => playback === 'step' || playingRef.current;

  const handlePrevious = () => {
    if (!hasSteps) return;
    const index = stepIndexAt(steps, clockRef.current);
    const target = clockRef.current - steps[index].at > 0.02 ? index : Math.max(0, index - 1);
    seek(steps[target].at + EPS, playAfterJump());
  };

  const handleNext = () => {
    if (!hasSteps) return;
    const index = stepIndexAt(steps, clockRef.current);
    if (index < steps.length - 1) seek(steps[index + 1].at + EPS, playAfterJump());
    else seek(1, false);
  };

  const handleStepClick = (index) => seek(steps[index].at + EPS, true);

  const scrub = (event) => {
    const rect = barRef.current.getBoundingClientRect();
    if (rect.width > 0) seek((event.clientX - rect.left) / rect.width, false);
  };

  const handleBarDown = (event) => {
    if (event.currentTarget.setPointerCapture) event.currentTarget.setPointerCapture(event.pointerId);
    scrub(event);
  };

  const handleBarMove = (event) => {
    if (event.buttons & 1) scrub(event);
  };

  const handleBarKey = (event) => {
    if (event.key === 'ArrowLeft') handlePrevious();
    if (event.key === 'ArrowRight') handleNext();
  };

  const side = explanationPosition === 'right' || explanationPosition === 'left';
  const position = side && narrow ? 'bottom' : explanationPosition;
  const isSide = position === 'right' || position === 'left';
  const direction = { right: 'row', left: 'row-reverse', bottom: 'column', top: 'column-reverse' }[position] || 'row';
  const canvasHeight = height !== undefined ? height : fitHeight || baseHeight;
  const current = hasSteps ? steps[Math.min(activeStep, steps.length - 1)] : null;
  const playLabel = status === 'playing' ? labels.pause : status === 'ended' ? labels.replay : labels.play;

  const styles = {
    root: {
      background: ui.cardBg,
      border: '1px solid ' + ui.border,
      borderRadius: ui.radius,
      padding: ui.padding,
      color: ui.text,
      fontFamily: ui.font,
      boxSizing: 'border-box',
      ...style,
    },
    header: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 12 },
    title: { fontSize: 16, fontWeight: 500 },
    counter: { fontSize: 13, color: ui.textSecondary, whiteSpace: 'nowrap' },
    body: { display: 'flex', flexDirection: direction, gap: 16, alignItems: 'stretch' },
    stage: { flex: 1, minWidth: 0 },
    canvas: { width: '100%', height: canvasHeight, display: 'block', borderRadius: ui.controlRadius },
    panel: { width: isSide ? explanationWidth : 'auto', flexShrink: 0 },
    list: isSide
      ? { display: 'flex', flexDirection: 'column', gap: 4 }
      : { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 4, alignItems: 'start' },
    stepTitle: { fontSize: 14, fontWeight: 500, lineHeight: 1.4 },
    stepText: { fontSize: 13, lineHeight: 1.5, color: ui.textSecondary, marginTop: 4 },
    textStack: { display: 'grid', padding: '6px 10px 0' },
    caption: { padding: '4px 2px', minHeight: isSide ? 0 : 92 },
    captionStep: { fontSize: 12, color: ui.textMuted, marginBottom: 6 },
    captionTitle: { fontSize: 16, fontWeight: 500, color: ui.accent, marginBottom: 6 },
    captionText: { fontSize: 14, lineHeight: 1.6, color: ui.textSecondary },
    footer: { display: 'flex', alignItems: 'center', flexWrap: narrow ? 'wrap' : 'nowrap', gap: 8, marginTop: 12 },
    button: {
      padding: '7px 12px',
      background: 'transparent',
      color: ui.text,
      border: '1px solid ' + ui.borderStrong,
      borderRadius: ui.controlRadius,
      cursor: 'pointer',
      font: 'inherit',
      fontSize: 14,
    },
    bar: {
      flex: narrow ? '1 0 100%' : 1,
      display: 'flex',
      gap: 4,
      padding: '8px 0',
      marginLeft: narrow ? 0 : 8,
      cursor: 'pointer',
      touchAction: 'none',
    },
    fill: { height: '100%', background: ui.accent, borderRadius: 3 },
  };

  const stepButtonStyle = (index) => ({
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '8px 10px',
    border: 'none',
    borderRadius: ui.controlRadius,
    background: index === activeStep ? ui.accentBg : 'transparent',
    color: index === activeStep ? ui.accent : index < activeStep ? ui.textMuted : ui.text,
    cursor: 'pointer',
    font: 'inherit',
  });

  const stackedTextStyle = (index) => ({
    gridArea: '1 / 1',
    visibility: index === activeStep ? 'visible' : 'hidden',
    fontSize: 13,
    lineHeight: 1.5,
    color: ui.textSecondary,
  });

  const segmentStyle = (index) => ({
    flex: Math.max(0.001, stepEnd(segments, index) - segments[index].at),
    height: 6,
    background: ui.borderStrong,
    borderRadius: 3,
    overflow: 'hidden',
  });

  return (
    <div ref={rootRef} style={styles.root}>
      {(title || hasSteps) && (
        <div style={styles.header}>
          <span style={styles.title}>{title}</span>
          {hasSteps && <span style={styles.counter}>{labels.step(activeStep + 1, steps.length)}</span>}
        </div>
      )}

      <div style={styles.body}>
        <div style={styles.stage}>
          <canvas ref={canvasRef} style={styles.canvas} role="img" aria-label={ariaLabel || title || 'Math animation'} />
        </div>

        {hasSteps && (
          <div style={styles.panel} aria-live="polite">
            {explanationStyle === 'caption' ? (
              <div style={styles.caption}>
                <div style={styles.captionStep}>{labels.step(activeStep + 1, steps.length)}</div>
                <div style={styles.captionTitle}>{current.title}</div>
                <div style={styles.captionText}>{renderText(current.text)}</div>
              </div>
            ) : (
              <>
                <div style={styles.list}>
                  {steps.map((step, index) => (
                    <button key={index} type="button" onClick={() => handleStepClick(index)} style={stepButtonStyle(index)}>
                      <div style={styles.stepTitle}>{index + 1}. {step.title}</div>
                      {isSide && index === activeStep && <div style={styles.stepText}>{renderText(step.text)}</div>}
                    </button>
                  ))}
                </div>
                {!isSide && (
                  <div style={styles.textStack}>
                    {steps.map((step, index) => (
                      <div key={index} style={stackedTextStyle(index)} aria-hidden={index !== activeStep}>
                        {renderText(step.text)}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div style={styles.footer}>
        <button type="button" onClick={handleToggle} style={{ ...styles.button, minWidth: 76 }}>{playLabel}</button>
        {steps.length > 1 && (
          <button type="button" onClick={handlePrevious} style={styles.button} aria-label={labels.previous}>{'←'}</button>
        )}
        {steps.length > 1 && (
          <button type="button" onClick={handleNext} style={styles.button} aria-label={labels.next}>{'→'}</button>
        )}
        <div
          ref={barRef}
          style={styles.bar}
          role="slider"
          tabIndex={0}
          aria-label={labels.timeline}
          aria-valuemin={1}
          aria-valuemax={segments.length}
          aria-valuenow={activeStep + 1}
          onPointerDown={handleBarDown}
          onPointerMove={handleBarMove}
          onKeyDown={handleBarKey}
        >
          {segments.map((segment, index) => (
            <div key={index} style={segmentStyle(index)}>
              <div
                ref={(element) => {
                  fillRefs.current[index] = element;
                }}
                style={styles.fill}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
