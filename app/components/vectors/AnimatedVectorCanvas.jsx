import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";

// ============================================================
// EASING FUNCTIONS
// ============================================================
const easings = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => (--t) * t * t + 1,
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  easeOutElastic: (t) => {
    const p = 0.3;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
  },
  easeOutBounce: (t) => {
    if (t < 1 / 2.75) return 7.5625 * t * t;
    if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
};

// ============================================================
// INTERPOLATION HELPERS
// ============================================================
function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpCoords(from, to, t) {
  return [lerp(from[0], to[0], t), lerp(from[1], to[1], t)];
}

function lerpColor(from, to, t) {
  const f = hexToRgb(from);
  const toRgb = hexToRgb(to);
  const r = Math.round(lerp(f.r, toRgb.r, t));
  const g = Math.round(lerp(f.g, toRgb.g, t));
  const b = Math.round(lerp(f.b, toRgb.b, t));
  return `rgb(${r},${g},${b})`;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

// ============================================================
// TIMELINE HOOK
// ============================================================
function useTimeline(sequence, options = {}) {
  const { onComplete, loop = false } = options;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  
  const startTimeRef = useRef(null);
  const pausedTimeRef = useRef(0);
  const rafRef = useRef(null);

  // Calculate total duration
  const totalDuration = useMemo(() => {
    let total = 0;
    sequence.forEach((step) => {
      const stepEnd = (step.startAt !== undefined ? step.startAt : total) + step.duration;
      if (stepEnd > total) total = stepEnd;
      if (step.startAt === undefined) total = stepEnd;
    });
    return total;
  }, [sequence]);

  const play = useCallback(() => {
    setIsPlaying(true);
    startTimeRef.current = performance.now() - pausedTimeRef.current / speed;
  }, [speed]);

  const pause = useCallback(() => {
    setIsPlaying(false);
    pausedTimeRef.current = currentTime;
  }, [currentTime]);

  const reset = useCallback(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    pausedTimeRef.current = 0;
    startTimeRef.current = null;
  }, []);

  const seek = useCallback((time) => {
    const clampedTime = Math.max(0, Math.min(time, totalDuration));
    setCurrentTime(clampedTime);
    pausedTimeRef.current = clampedTime;
    if (isPlaying) {
      startTimeRef.current = performance.now() - clampedTime / speed;
    }
  }, [totalDuration, isPlaying, speed]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const animate = () => {
      const elapsed = (performance.now() - startTimeRef.current) * speed;
      
      if (elapsed >= totalDuration) {
        if (loop) {
          startTimeRef.current = performance.now();
          setCurrentTime(0);
        } else {
          setCurrentTime(totalDuration);
          setIsPlaying(false);
          if (onComplete) onComplete();
          return;
        }
      } else {
        setCurrentTime(elapsed);
      }
      
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, totalDuration, loop, speed, onComplete]);

  // Compute current state based on time
  const computeState = useCallback((initialState) => {
    const state = JSON.parse(JSON.stringify(initialState));
    
    sequence.forEach((step) => {
      const stepStart = step.startAt !== undefined ? step.startAt : 0;
      const stepEnd = stepStart + step.duration;
      
      if (currentTime < stepStart) return;
      
      const progress = Math.min(1, (currentTime - stepStart) / step.duration);
      const easing = easings[step.easing || "easeInOutQuad"];
      const t = easing(progress);
      
      const target = state.vectors.find((v) => v.id === step.target);
      if (!target && step.action !== "addVector" && step.action !== "message") return;
      
      switch (step.action) {
        case "moveTo":
          if (target && step.from && step.to) {
            target.coords = lerpCoords(step.from, step.to, t);
          }
          break;
          
        case "fadeIn":
          if (target) {
            target.opacity = t;
          }
          break;
          
        case "fadeOut":
          if (target) {
            target.opacity = 1 - t;
          }
          break;
          
        case "scale":
          if (target && step.from !== undefined && step.to !== undefined) {
            const scaleFactor = lerp(step.from, step.to, t);
            target.coords = [
              step.originalCoords[0] * scaleFactor,
              step.originalCoords[1] * scaleFactor
            ];
          }
          break;
          
        case "rotate":
          if (target && step.fromAngle !== undefined && step.toAngle !== undefined) {
            const angle = lerp(step.fromAngle, step.toAngle, t);
            const magnitude = Math.sqrt(step.originalCoords[0] ** 2 + step.originalCoords[1] ** 2);
            const originalAngle = Math.atan2(step.originalCoords[1], step.originalCoords[0]);
            target.coords = [
              magnitude * Math.cos(originalAngle + angle),
              magnitude * Math.sin(originalAngle + angle)
            ];
          }
          break;
          
        case "colorChange":
          if (target && step.from && step.to) {
            target.color = lerpColor(step.from, step.to, t);
          }
          break;
          
        case "strokeChange":
          if (target && step.from !== undefined && step.to !== undefined) {
            target.stroke = lerp(step.from, step.to, t);
          }
          break;
          
        case "addVector":
          if (progress > 0 && !state.vectors.find((v) => v.id === step.vector.id)) {
            state.vectors.push({ ...step.vector, opacity: t });
          } else if (target) {
            target.opacity = t;
          }
          break;
          
        case "message":
          state.message = progress < 1 ? step.text : (step.persist ? step.text : null);
          state.messageOpacity = step.persist ? 1 : (progress < 0.8 ? 1 : 1 - (progress - 0.8) / 0.2);
          break;
          
        default:
          break;
      }
    });
    
    return state;
  }, [currentTime, sequence]);

  return {
    isPlaying,
    currentTime,
    totalDuration,
    speed,
    play,
    pause,
    reset,
    seek,
    setSpeed,
    computeState
  };
}

// ============================================================
// CANVAS RENDERER
// ============================================================
function renderAnimatedCanvas(canvas, state, styles) {
  const ctx = canvas.getContext("2d");
  const { width, height, padding } = styles;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;
  
  const range = state.range || 10;
  
  const toScreenX = (x) => padding + ((x + range) / (2 * range)) * graphWidth;
  const toScreenY = (y) => padding + ((range - y) / (2 * range)) * graphHeight;
  
  // Background
  ctx.fillStyle = "#f8f9fa";
  ctx.fillRect(0, 0, width, height);
  
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(padding, padding, graphWidth, graphHeight);
  
  // Grid
  ctx.strokeStyle = "#e9ecef";
  ctx.lineWidth = 1;
  
  const gridStep = range / 5;
  for (let x = -range; x <= range; x += gridStep) {
    ctx.beginPath();
    ctx.moveTo(toScreenX(x), padding);
    ctx.lineTo(toScreenX(x), padding + graphHeight);
    ctx.stroke();
  }
  for (let y = -range; y <= range; y += gridStep) {
    ctx.beginPath();
    ctx.moveTo(padding, toScreenY(y));
    ctx.lineTo(padding + graphWidth, toScreenY(y));
    ctx.stroke();
  }
  
  // Axes
  ctx.strokeStyle = "#495057";
  ctx.lineWidth = 2;
  
  ctx.beginPath();
  ctx.moveTo(padding, toScreenY(0));
  ctx.lineTo(padding + graphWidth, toScreenY(0));
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(toScreenX(0), padding);
  ctx.lineTo(toScreenX(0), padding + graphHeight);
  ctx.stroke();
  
  // Axis labels
  ctx.fillStyle = "#495057";
  ctx.font = "14px system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("x", width - padding + 8, toScreenY(0) + 5);
  ctx.textAlign = "center";
  ctx.fillText("y", toScreenX(0), padding - 10);
  
  // Clip for vectors
  ctx.save();
  ctx.beginPath();
  ctx.rect(padding, padding, graphWidth, graphHeight);
  ctx.clip();
  
  const originX = toScreenX(0);
  const originY = toScreenY(0);
  
  // Draw vectors
  state.vectors.forEach((vec) => {
    if (vec.opacity === 0) return;
    
    const [vx, vy] = vec.coords;
    const endX = toScreenX(vx);
    const endY = toScreenY(vy);
    
    const color = vec.color || "#3498db";
    const stroke = vec.stroke || 2.5;
    const opacity = vec.opacity !== undefined ? vec.opacity : 1;
    
    ctx.globalAlpha = opacity;
    
    // Line
    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;
    ctx.lineCap = "round";
    ctx.setLineDash(vec.pattern || []);
    
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    
    ctx.setLineDash([]);
    
    // Arrowhead
    const angle = Math.atan2(originY - endY, originX - endX);
    const arrowLen = 12;
    const arrowAngle = Math.PI / 6;
    
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(
      endX + arrowLen * Math.cos(angle + arrowAngle),
      endY + arrowLen * Math.sin(angle + arrowAngle)
    );
    ctx.lineTo(
      endX + arrowLen * Math.cos(angle - arrowAngle),
      endY + arrowLen * Math.sin(angle - arrowAngle)
    );
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    
    // Label
    if (vec.label) {
      ctx.fillStyle = color;
      ctx.font = "bold 14px system-ui, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "bottom";
      ctx.fillText(vec.label, endX + 10, endY - 8);
    }
    
    ctx.globalAlpha = 1;
  });
  
  ctx.restore();
  
  // Message
  if (state.message) {
    ctx.globalAlpha = state.messageOpacity || 1;
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.font = "16px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(state.message, width / 2, height - 35);
    ctx.globalAlpha = 1;
  }
}

// ============================================================
// PLAYBACK CONTROLS
// ============================================================
function PlaybackControls({ timeline, totalDuration }) {
  const { isPlaying, currentTime, speed, play, pause, reset, seek, setSpeed } = timeline;
  
  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const decimal = Math.floor((ms % 1000) / 100);
    return `${seconds}.${decimal}s`;
  };
  
  const btnStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 6
  };
  
  const playBtnStyle = {
    ...btnStyle,
    background: isPlaying ? "#e74c3c" : "#2ecc71",
    color: "white"
  };
  
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: 12, 
      padding: 16, 
      background: "#f8f9fa", 
      borderRadius: 8,
      marginTop: 12
    }}>
      {/* Progress bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 12, color: "#666", minWidth: 40 }}>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={totalDuration}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          style={{ flex: 1, cursor: "pointer" }}
        />
        <span style={{ fontSize: 12, color: "#666", minWidth: 40 }}>{formatTime(totalDuration)}</span>
      </div>
      
      {/* Buttons */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }}>
        <button onClick={reset} style={{ ...btnStyle, background: "#6c757d", color: "white" }}>
          ⏮ Reset
        </button>
        
        <button onClick={isPlaying ? pause : play} style={playBtnStyle}>
          {isPlaying ? "⏸ Pause" : "▶ Play"}
        </button>
        
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 12 }}>
          <span style={{ fontSize: 12, color: "#666" }}>Speed:</span>
          {[0.5, 1, 1.5, 2].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              style={{
                ...btnStyle,
                padding: "4px 10px",
                fontSize: 12,
                background: speed === s ? "#3498db" : "#e9ecef",
                color: speed === s ? "white" : "#333"
              }}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export function AnimatedVectorCanvas({ sequence, initialState, width = 560, height = 480, loop = false }) {
  const canvasRef = useRef(null);
  const padding = 50;
  
  const timeline = useTimeline(sequence, { loop });
  const state = timeline.computeState(initialState);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    renderAnimatedCanvas(canvas, state, { width, height, padding });
  }, [state, width, height]);
  
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ display: "block", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      />
      <PlaybackControls timeline={timeline} totalDuration={timeline.totalDuration} />
    </div>
  );
}



// ============================================================
// DEMO
// ============================================================
export default function App() {
  // Initial state
  const initialState = {
    range: 8,
    vectors: [
      { id: "a", coords: [0, 0], color: "#3498db", label: "a", opacity: 0 },
      { id: "b", coords: [0, 0], color: "#e74c3c", label: "b", opacity: 0 },
      { id: "sum", coords: [0, 0], color: "#2ecc71", label: "a + b", opacity: 0 }
    ],
    message: null
  };
  
  // Animation sequence
  const sequence = [
    // Intro message
    { 
      action: "message", 
      text: "Let's visualize vector addition...", 
      duration: 1500,
      startAt: 0
    },
    
    // Fade in vector a
    { 
      action: "fadeIn", 
      target: "a", 
      duration: 600,
      startAt: 500
    },
    { 
      action: "moveTo", 
      target: "a", 
      from: [0, 0], 
      to: [4, 2], 
      duration: 1000,
      startAt: 500,
      easing: "easeOutCubic"
    },
    { 
      action: "message", 
      text: "Here is vector a = (4, 2)", 
      duration: 1500,
      startAt: 1500
    },
    
    // Fade in vector b
    { 
      action: "fadeIn", 
      target: "b", 
      duration: 600,
      startAt: 3000
    },
    { 
      action: "moveTo", 
      target: "b", 
      from: [0, 0], 
      to: [-2, 3], 
      duration: 1000,
      startAt: 3000,
      easing: "easeOutCubic"
    },
    { 
      action: "message", 
      text: "And vector b = (-2, 3)", 
      duration: 1500,
      startAt: 4000
    },
    
    // Show sum message
    { 
      action: "message", 
      text: "Now watch the sum: a + b", 
      duration: 1500,
      startAt: 5500
    },
    
    // Animate sum vector
    { 
      action: "fadeIn", 
      target: "sum", 
      duration: 400,
      startAt: 6500
    },
    { 
      action: "moveTo", 
      target: "sum", 
      from: [0, 0], 
      to: [2, 5], 
      duration: 1500,
      startAt: 6500,
      easing: "easeOutElastic"
    },
    
    // Final message
    { 
      action: "message", 
      text: "a + b = (2, 5) — the diagonal of the parallelogram!", 
      duration: 2500,
      startAt: 8000,
      persist: true
    },
    
    // Color pulse on sum
    { 
      action: "strokeChange", 
      target: "sum", 
      from: 2.5, 
      to: 5, 
      duration: 300,
      startAt: 8200
    },
    { 
      action: "strokeChange", 
      target: "sum", 
      from: 5, 
      to: 2.5, 
      duration: 300,
      startAt: 8500
    }
  ];
  
  return (
    <div style={{ 
      padding: 24, 
      fontFamily: "system-ui, sans-serif",
      background: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h2 style={{ marginBottom: 16, color: "#2c3e50" }}>Animated Vector Visualization</h2>
      <p style={{ marginBottom: 20, color: "#666", fontSize: 14 }}>
        Press Play to watch the vector addition animation
      </p>
      <AnimatedVectorCanvas
        sequence={sequence}
        initialState={initialState}
        width={560}
        height={480}
      />
    </div>
  );
}