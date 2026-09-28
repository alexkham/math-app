import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

/* ============================================================
   ToolDemoPlayer v2

   Plays a short animated demo of a REAL tool component: the tool is
   mounted as-is (children), made inert for the reader, and driven by a
   script the way a user would drive it - slider values set through the
   native input setter + an 'input' event, buttons clicked, SVG handles
   dragged with pointer events. A drawn cursor travels over the real
   controls. The tool looks exactly like the live tool because it IS the
   live tool.

   v2 adds reader control and labels:
   - The script is cut into steps at every { say } entry. Each say text is
     a step LABEL: the section's prose compressed to one line. The labels
     are listed beside the demo; the current one is highlighted; clicking
     a label plays that step.
   - Controls: restart, back, play/pause, forward, step counter.
     Back / Forward / a label click reset the tool, replay everything
     before the chosen step instantly, then animate that one step and
     pause. Play runs from the current step to the end.
   - Autoplays and loops while on screen until the reader presses any
     control; no autoplay under prefers-reduced-motion.

   Script entries (plain objects, serializable - build them in getStaticProps):
     { say: 'label' }                      start a new step with this label
     { move: T, ms }                       glide the cursor to target T
     { click: T }                          move and click T
     { slide: T, to: v, ms }               drag a range input to value v
     { drag: T, dx, dy, ms }               pointer-drag an element by (dx, dy) px
     { wait: ms }                          pause
   Targets T:
     'css selector'                        first match inside the tool
     { css, nth }                          nth match (0-based)
     { button: 'text', exact?, nth? }      button by text (starts-with, or exact)
     { range: i }                          i-th <input type="range"> (0-based)
     { text: 'text', css? }                first leaf element containing text
   ============================================================ */

const UI = {
  ui: '#1e40af',
  uiSoft: '#bfdbfe',
  border: '#cbd5e1',
  ink: '#0f172a',
  muted: '#475569',
  faint: '#94a3b8',
  panel: '#f8fafc',
  white: '#ffffff',
};

function resolve(root, t) {
  if (!root || !t) return null;
  if (typeof t === 'string') return root.querySelector(t);
  if (t.range !== undefined) return root.querySelectorAll('input[type="range"]')[t.range] || null;
  if (t.button !== undefined) {
    const want = String(t.button).trim();
    const hits = Array.from(root.querySelectorAll('button')).filter((b) => {
      const txt = b.textContent.replace(/\s+/g, ' ').trim();
      return t.exact ? txt === want : txt.startsWith(want);
    });
    return hits[t.nth || 0] || null;
  }
  if (t.text !== undefined) {
    const want = String(t.text);
    return Array.from(root.querySelectorAll(t.css || '*')).find((el) =>
      el.children.length === 0 && el.textContent.includes(want)) || null;
  }
  if (t.css) return root.querySelectorAll(t.css)[t.nth || 0] || null;
  return null;
}

const ease = (u) => (u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2);

function setRangeValue(input, v) {
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, String(v));
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

function thumbPoint(input, v) {
  const r = input.getBoundingClientRect();
  const min = parseFloat(input.min || '0');
  const max = parseFloat(input.max || '100');
  const f = max > min ? (v - min) / (max - min) : 0;
  const thumb = 16 * (r.height ? Math.min(1, r.height / 16) : 1);
  return [r.left + thumb / 2 + f * (r.width - thumb), r.top + r.height / 2];
}

/* cut the script into steps at every { say } */
function toSteps(script) {
  const steps = [];
  let cur = null;
  for (const e of script) {
    if (e.say !== undefined) {
      cur = { label: e.say, actions: [] };
      steps.push(cur);
    } else {
      if (!cur) { cur = { label: '', actions: [] }; steps.push(cur); }
      cur.actions.push(e);
    }
  }
  // a label with no actions of its own (a second caption for the same
  // actions) is folded into the previous step as a note
  const out = [];
  for (const s of steps) {
    if (s.actions.length === 0 || s.actions.every((a) => a.wait)) {
      if (out.length) {
        const prev = out[out.length - 1];
        prev.note = prev.note ? `${prev.note} ${s.label}` : s.label;
        prev.actions.push(...s.actions);
        continue;
      }
    }
    out.push(s);
  }
  return out;
}

function CtrlBtn({ onClick, label, primary, disabled, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      style={{
        minWidth: '32px', height: '28px', padding: '0 9px',
        fontSize: '12px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1,
        border: `1px solid ${primary ? UI.ui : UI.uiSoft}`, borderRadius: '4px',
        background: primary ? UI.ui : UI.white,
        color: disabled ? UI.faint : (primary ? UI.white : UI.ui),
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      {children}
    </button>
  );
}

export default function ToolDemoPlayer({
  children,
  script = [],
  scale = 0.6,
  renderText = (s) => s,
  label = 'Demo',
  title = 'Demo',
  loopPauseMs = 1600,
  minHeight = 300,
}) {
  const hostRef = useRef(null);
  const toolRef = useRef(null);
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);
  const tokenRef = useRef(0);
  const visibleRef = useRef(false);
  const posRef = useRef({ x: 40, y: 40 });

  const steps = useMemo(() => toSteps(script), [script]);

  const [mounted, setMounted] = useState(false);
  const [toolKey, setToolKey] = useState(0);
  const [stageH, setStageH] = useState(minHeight);
  const [current, setCurrent] = useState(-1);
  const [done, setDone] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [auto, setAuto] = useState(true);

  /* lazy mount + visibility + reduced motion */
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAuto(false);
    if (typeof IntersectionObserver === 'undefined') { setMounted(true); visibleRef.current = true; return undefined; }
    const near = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { setMounted(true); near.disconnect(); }
    }, { rootMargin: '400px 0px' });
    const vis = new IntersectionObserver((es) => {
      visibleRef.current = es.some((e) => e.intersectionRatio >= 0.35);
    }, { threshold: [0, 0.35, 0.7] });
    near.observe(el);
    vis.observe(el);
    return () => { near.disconnect(); vis.disconnect(); };
  }, []);

  /* keep the scaled stage's layout height in step with the tool */
  useEffect(() => {
    if (!mounted) return undefined;
    const el = toolRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => setStageH(Math.max(60, el.offsetHeight * scale)));
    ro.observe(el);
    return () => ro.disconnect();
  }, [mounted, scale, toolKey]);

  /* inert for the reader; the script still drives it */
  useEffect(() => {
    const el = toolRef.current;
    if (!el) return;
    el.setAttribute('inert', '');
    el.setAttribute('aria-hidden', 'true');
  }, [mounted, toolKey]);

  const placeCursor = useCallback((x, y) => {
    posRef.current = { x, y };
    if (cursorRef.current) cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, []);
  const local = useCallback((cx, cy) => {
    const h = hostRef.current.getBoundingClientRect();
    return [cx - h.left, cy - h.top];
  }, []);
  const centerOf = (el) => {
    const r = el.getBoundingClientRect();
    return [r.left + r.width / 2, r.top + r.height / 2];
  };
  const ripple = useCallback(() => {
    const r = rippleRef.current;
    if (!r) return;
    const { x, y } = posRef.current;
    r.style.transition = 'none';
    r.style.left = `${x - 13}px`;
    r.style.top = `${y - 13}px`;
    r.style.opacity = '1';
    r.style.transform = 'scale(0.4)';
    requestAnimationFrame(() => {
      r.style.transition = 'opacity 0.5s, transform 0.5s';
      r.style.opacity = '0';
      r.style.transform = 'scale(1.4)';
    });
  }, []);

  /* the engine: reset, replay steps [0, from) instantly, then animate
     steps from `from` on; stop after one step when `one` is set */
  const run = useCallback(async (from, { one = false, loop = false } = {}) => {
    const token = ++tokenRef.current;
    const live = () => tokenRef.current === token;
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    const frame = () => new Promise((res) => requestAnimationFrame(() => res()));
    const waitVisible = async () => { while (live() && !visibleRef.current) await sleep(250); };
    const tween = (ms, fn) => new Promise((res) => {
      const t0 = performance.now();
      const f = (now) => {
        if (!live()) { res(); return; }
        const u = Math.min(1, (now - t0) / Math.max(1, ms));
        fn(ease(u));
        if (u < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const tool = () => toolRef.current;

    async function act(a, fast) {
      if (a.wait) { if (!fast) await sleep(a.wait); return; }
      const el = resolve(tool(), a.move || a.click || a.slide || a.drag);
      if (!el) return;
      if (a.move) {
        const [x, y] = local(...centerOf(el));
        if (fast) placeCursor(x, y); else await tween(a.ms || 700, (u) => {
          const { x: sx, y: sy } = posRef.current;
          placeCursor(sx + (x - sx) * u, sy + (y - sy) * u);
        });
        return;
      }
      if (a.click) {
        const [x, y] = local(...centerOf(el));
        if (fast) { placeCursor(x, y); el.click(); await frame(); return; }
        const { x: sx, y: sy } = posRef.current;
        await tween(a.ms || 600, (u) => placeCursor(sx + (x - sx) * u, sy + (y - sy) * u));
        ripple();
        await sleep(120);
        el.click();
        await sleep(150);
        return;
      }
      if (a.slide) {
        const from0 = parseFloat(el.value);
        const to = a.to;
        const stepAttr = parseFloat(el.step) || 0;
        const snap = (v) => (stepAttr > 0 ? Math.round(v / stepAttr) * stepAttr : v);
        if (fast) {
          setRangeValue(el, snap(to));
          await frame();
          const [x, y] = local(...thumbPoint(el, to));
          placeCursor(x, y);
          return;
        }
        const [x0, y0] = local(...thumbPoint(el, from0));
        const { x: sx, y: sy } = posRef.current;
        await tween(600, (u) => placeCursor(sx + (x0 - sx) * u, sy + (y0 - sy) * u));
        ripple();
        await sleep(150);
        await tween(a.ms || 1200, (u) => {
          const v = snap(from0 + (to - from0) * u);
          setRangeValue(el, v);
          const [x, y] = local(...thumbPoint(el, v));
          placeCursor(x, y);
        });
        return;
      }
      if (a.drag) {
        const [cx, cy] = centerOf(el);
        const opts = (x, y) => ({ bubbles: true, cancelable: true, pointerId: 1, pointerType: 'mouse', clientX: x, clientY: y, button: 0, buttons: 1 });
        const ex = cx + (a.dx || 0);
        const ey = cy + (a.dy || 0);
        if (fast) {
          el.dispatchEvent(new PointerEvent('pointerdown', opts(cx, cy)));
          el.dispatchEvent(new PointerEvent('pointermove', opts(ex, ey)));
          el.dispatchEvent(new PointerEvent('pointerup', opts(ex, ey)));
          await frame();
          placeCursor(...local(ex, ey));
          return;
        }
        const [lx, ly] = local(cx, cy);
        const { x: sx, y: sy } = posRef.current;
        await tween(600, (u) => placeCursor(sx + (lx - sx) * u, sy + (ly - sy) * u));
        ripple();
        el.dispatchEvent(new PointerEvent('pointerdown', opts(cx, cy)));
        await tween(a.ms || 1200, (u) => {
          const x = cx + (a.dx || 0) * u;
          const y = cy + (a.dy || 0) * u;
          el.dispatchEvent(new PointerEvent('pointermove', opts(x, y)));
          placeCursor(...local(x, y));
        });
        el.dispatchEvent(new PointerEvent('pointerup', opts(ex, ey)));
      }
    }

    setPlaying(true);
    // fresh tool
    setToolKey((k) => k + 1);
    await sleep(160);
    if (!live()) return;
    placeCursor(40, 40);
    for (let i = 0; i < from && live(); i++) {
      for (const a of steps[i].actions) { if (!live()) return; await act(a, true); }
    }
    if (!live()) return;
    setDone(from);
    setCurrent(from > 0 ? from - 1 : -1);

    let k = from;
    while (live()) {
      for (; k < steps.length && live(); k++) {
        await waitVisible();
        if (!live()) return;
        setCurrent(k);
        for (const a of steps[k].actions) { if (!live()) return; await act(a, false); }
        if (!live()) return;
        setDone(k + 1);
        if (one) { setPlaying(false); return; }
      }
      if (!loop || !live()) break;
      await sleep(loopPauseMs);
      if (!live()) return;
      setToolKey((kk) => kk + 1);
      await sleep(200);
      placeCursor(40, 40);
      setDone(0);
      setCurrent(-1);
      k = 0;
    }
    if (live()) setPlaying(false);
  }, [steps, local, placeCursor, ripple, loopPauseMs]);

  /* autoplay (looping) once mounted */
  useEffect(() => {
    if (!mounted || !auto) return undefined;
    run(0, { loop: true });
    const autoToken = tokenRef.current;
    // cancel only the autoplay run; a run the reader started must survive
    // the re-render that switching auto off causes
    return () => { if (tokenRef.current === autoToken) tokenRef.current += 1; };
  }, [mounted, auto, run]);

  const takeOver = () => { setAuto(false); tokenRef.current += 1; };
  const onPlayPause = () => {
    if (playing) { takeOver(); setPlaying(false); return; }
    setAuto(false);
    const from = done >= steps.length ? 0 : (current >= 0 && done <= current ? current : done);
    run(from);
  };
  const onBack = () => { takeOver(); run(Math.max(0, (current >= 0 ? current : done) - 1), { one: true }); };
  const onForward = () => {
    takeOver();
    const next = done >= steps.length ? steps.length - 1 : done;
    run(next, { one: true });
  };
  const onRestart = () => { takeOver(); setToolKey((k) => k + 1); setDone(0); setCurrent(-1); setPlaying(false); placeCursor(40, 40); };
  const onPick = (i) => { takeOver(); run(i, { one: true }); };

  return (
    <figure
      ref={hostRef}
      aria-label={label}
      style={{
        position: 'relative',
        margin: '14px auto 18px',
        maxWidth: '1100px',
        border: `1px solid ${UI.border}`,
        borderRadius: '12px',
        background: UI.panel,
        padding: '10px',
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'flex-start',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ flex: '1 1 560px', minWidth: 0 }}>
        <div style={{ position: 'relative', height: mounted ? `${stageH}px` : `${minHeight}px`, overflow: 'hidden' }}>
          {mounted && (
            <div
              key={toolKey}
              ref={toolRef}
              style={{
                width: `${100 / scale}%`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {children}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
          <CtrlBtn onClick={onRestart} label="Restart">⏮</CtrlBtn>
          <CtrlBtn onClick={onBack} label="Back one step" disabled={done === 0 && current <= 0}>‹ Back</CtrlBtn>
          <CtrlBtn onClick={onPlayPause} label={playing ? 'Pause' : 'Play'} primary>{playing ? '❚❚ Pause' : '▶ Play'}</CtrlBtn>
          <CtrlBtn onClick={onForward} label="Forward one step" disabled={done >= steps.length}>Next ›</CtrlBtn>
          <span style={{ marginLeft: '8px', fontSize: '12px', color: UI.muted, fontFamily: 'monospace' }}>
            {`Step ${Math.max(0, current + 1)} of ${steps.length}`}
          </span>
        </div>
      </div>

      <figcaption style={{ flex: '0 1 250px', minWidth: '200px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          paddingBottom: '6px', marginBottom: '6px', borderBottom: `1px solid ${UI.border}`,
        }}>
          <span style={{
            fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: UI.muted, border: `1px solid ${UI.border}`, borderRadius: '4px', padding: '1px 6px', background: UI.white,
          }}>Demo</span>
          <span style={{ fontSize: '11px', fontWeight: 500, color: UI.ui, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
            {title}
          </span>
        </div>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {steps.map((s, i) => {
            const on = i === current;
            const past = i < done && !on;
            return (
              <li key={i} style={{ marginBottom: '4px' }}>
                <button
                  type="button"
                  onClick={() => onPick(i)}
                  style={{
                    display: 'flex', gap: '8px', alignItems: 'baseline', width: '100%', textAlign: 'left',
                    padding: '5px 6px', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit',
                    border: `1px solid ${on ? UI.ui : 'transparent'}`,
                    background: on ? UI.white : 'transparent',
                  }}
                >
                  <span style={{
                    flex: '0 0 auto', fontSize: '11px', fontFamily: 'monospace', fontWeight: 600,
                    color: on ? UI.white : (past ? UI.ui : UI.faint),
                    background: on ? UI.ui : 'transparent',
                    border: `1px solid ${on || past ? UI.ui : UI.border}`,
                    borderRadius: '4px', padding: '0 5px',
                  }}>{i + 1}</span>
                  <span style={{ fontSize: '13px', lineHeight: 1.45, color: on ? UI.ink : UI.muted, fontWeight: on ? 600 : 400 }}>
                    {renderText(s.label)}
                  </span>
                </button>
                {on && s.note ? (
                  <div style={{ fontSize: '12.5px', lineHeight: 1.5, color: UI.muted, padding: '2px 8px 4px 34px' }}>
                    {renderText(s.note)}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      </figcaption>

      <svg
        ref={cursorRef}
        aria-hidden="true"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,.35))', transform: 'translate(40px, 40px)', zIndex: 3 }}
      >
        <path d="M2 1 L2 19 L7 14.5 L10.5 22 L13.5 20.6 L10 13.2 L16.5 13.2 Z" fill="#fff" stroke="#111827" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
      <div
        ref={rippleRef}
        aria-hidden="true"
        style={{ position: 'absolute', width: '26px', height: '26px', borderRadius: '50%', border: `2px solid ${UI.ui}`, opacity: 0, pointerEvents: 'none', zIndex: 2 }}
      />
    </figure>
  );
}
