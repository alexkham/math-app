import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ============================================================
   ToolDemoPlayer v1

   Plays a short animated demo of a REAL tool component: the tool is
   mounted as-is (children), made inert for the reader, and driven by a
   script the way a user would drive it - slider values set through the
   native input setter + an 'input' event, buttons clicked, SVG handles
   dragged with pointer events. A drawn cursor travels over the real
   controls, a caption line states the step. The tool looks exactly like
   the live tool because it IS the live tool.

   One demo per usage section (one atomic operation), looping while on
   screen. Mounted lazily when it nears the viewport; paused when off
   screen; no autoplay under prefers-reduced-motion (a Play button shows).

   Script steps (plain objects, serializable - build them in getStaticProps):
     { say: 'caption' }                    set the caption (renderText applied)
     { move: T, ms }                       glide the cursor to target T
     { click: T }                          move (if needed) and click T
     { slide: T, to: v, ms }               drag a range input to value v
     { drag: T, dx, dy, ms }               pointer-drag an element by (dx, dy) px
     { wait: ms }                          pause
     { reset: true }                       remount the tool (fresh state)
   Targets T:
     'css selector'                        first match inside the tool
     { css, nth }                          nth match (0-based)
     { button: 'text' }                    first <button> whose text starts with 'text'
     { button: 'text', exact: true, nth }  exact text match, nth hit (0-based)
     { range: i }                          i-th <input type="range"> (0-based)
     { text: 'text', css? }                first element (default any) containing text
   ============================================================ */

const INK = '#111827';

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
  const thumb = 16;
  return [r.left + thumb / 2 + f * (r.width - thumb), r.top + r.height / 2];
}

export default function ToolDemoPlayer({
  children,
  script = [],
  scale = 0.78,
  renderText = (s) => s,
  label = 'Animated demo',
  loopPauseMs = 1600,
  minHeight = 320,
}) {
  const hostRef = useRef(null);
  const stageRef = useRef(null);
  const toolRef = useRef(null);
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);
  const runRef = useRef({ alive: false, visible: false, gen: 0 });
  const posRef = useRef({ x: 40, y: 40 });

  const [mounted, setMounted] = useState(false);
  const [toolKey, setToolKey] = useState(0);
  const [caption, setCaption] = useState('');
  const [stageH, setStageH] = useState(minHeight);
  const [reduced, setReduced] = useState(false);
  const [manual, setManual] = useState(false);

  /* lazy mount + visibility */
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia) {
      setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
    if (typeof IntersectionObserver === 'undefined') { setMounted(true); runRef.current.visible = true; return undefined; }
    const near = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { setMounted(true); near.disconnect(); }
    }, { rootMargin: '400px 0px' });
    const vis = new IntersectionObserver((es) => {
      runRef.current.visible = es.some((e) => e.intersectionRatio >= 0.35);
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

  /* make the tool inert for the reader (the script still drives it) */
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

  /* client point -> host-local point */
  const local = useCallback((cx, cy) => {
    const h = hostRef.current.getBoundingClientRect();
    return [cx - h.left, cy - h.top];
  }, []);

  const centerOf = useCallback((el) => {
    const r = el.getBoundingClientRect();
    return [r.left + r.width / 2, r.top + r.height / 2];
  }, []);

  useEffect(() => {
    if (!mounted) return undefined;
    const R = runRef.current;
    R.alive = true;
    const gen = ++R.gen;
    const live = () => R.alive && R.gen === gen;

    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    const waitVisible = async () => { while (live() && !R.visible) await sleep(250); };
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
    const glide = (x, y, ms) => {
      const { x: sx, y: sy } = posRef.current;
      return tween(ms, (u) => placeCursor(sx + (x - sx) * u, sy + (y - sy) * u));
    };
    const ripple = () => {
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
    };
    const tool = () => toolRef.current;

    async function step(s) {
      if (s.say !== undefined) { setCaption(s.say); return; }
      if (s.wait) { await sleep(s.wait); return; }
      if (s.reset) { setToolKey((k) => k + 1); await sleep(80); return; }
      const el = resolve(tool(), s.move || s.click || s.slide || s.drag);
      if (!el) return;
      if (s.move) { const [x, y] = local(...centerOf(el)); await glide(x, y, s.ms || 700); return; }
      if (s.click) {
        const [x, y] = local(...centerOf(el));
        await glide(x, y, s.ms || 600);
        ripple();
        await sleep(120);
        el.click();
        await sleep(150);
        return;
      }
      if (s.slide) {
        const from = parseFloat(el.value);
        const to = s.to;
        const [x0, y0] = local(...thumbPoint(el, from));
        await glide(x0, y0, 600);
        ripple();
        await sleep(150);
        const stepAttr = parseFloat(el.step) || 0;
        await tween(s.ms || 1200, (u) => {
          let v = from + (to - from) * u;
          if (stepAttr > 0) v = Math.round(v / stepAttr) * stepAttr;
          setRangeValue(el, v);
          const [x, y] = local(...thumbPoint(el, v));
          placeCursor(x, y);
        });
        return;
      }
      if (s.drag) {
        const [cx, cy] = centerOf(el);
        const [lx, ly] = local(cx, cy);
        await glide(lx, ly, 600);
        ripple();
        const opts = (x, y) => ({ bubbles: true, cancelable: true, pointerId: 1, pointerType: 'mouse', clientX: x, clientY: y, button: 0, buttons: 1 });
        el.dispatchEvent(new PointerEvent('pointerdown', opts(cx, cy)));
        await tween(s.ms || 1200, (u) => {
          const x = cx + (s.dx || 0) * u;
          const y = cy + (s.dy || 0) * u;
          el.dispatchEvent(new PointerEvent('pointermove', opts(x, y)));
          const [px, py] = local(x, y);
          placeCursor(px, py);
        });
        el.dispatchEvent(new PointerEvent('pointerup', opts(cx + (s.dx || 0), cy + (s.dy || 0))));
      }
    }

    async function loop() {
      await sleep(400);
      while (live()) {
        if (reduced && !manual) return;
        await waitVisible();
        for (const s of script) {
          if (!live()) return;
          await waitVisible();
          await step(s);
        }
        await sleep(loopPauseMs);
        if (!live()) return;
        setCaption('');
        setToolKey((k) => k + 1);
        await sleep(300);
        placeCursor(40, 40);
        if (reduced) return;
      }
    }
    loop();
    return () => { R.alive = false; };
  }, [mounted, script, reduced, manual, loopPauseMs, local, centerOf, placeCursor]);

  return (
    <figure
      ref={hostRef}
      aria-label={label}
      style={{
        position: 'relative',
        margin: '14px auto 18px',
        maxWidth: '1000px',
        border: '1px solid #cbd5e1',
        borderRadius: '12px',
        background: '#f8fafc',
        padding: '10px 10px 8px',
        overflow: 'hidden',
      }}
    >
      <div
        ref={stageRef}
        style={{ position: 'relative', height: mounted ? `${stageH}px` : `${minHeight}px`, overflow: 'hidden' }}
      >
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

      <figcaption
        style={{
          minHeight: '24px',
          marginTop: '8px',
          fontSize: '14px',
          lineHeight: 1.5,
          color: '#1e3a5f',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span style={{
          flex: '0 0 auto', fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#64748b', border: '1px solid #cbd5e1',
          borderRadius: '4px', padding: '1px 6px', background: '#fff',
        }}>Demo</span>
        <span>{caption ? renderText(caption) : null}</span>
        {reduced && !manual && (
          <button
            type="button"
            onClick={() => setManual(true)}
            style={{ marginLeft: 'auto', border: '1px solid #bfdbfe', background: '#fff', color: '#1e40af', borderRadius: '4px', padding: '3px 10px', fontSize: '12px', cursor: 'pointer' }}
          >
            Play demo
          </button>
        )}
      </figcaption>

      <svg
        ref={cursorRef}
        aria-hidden="true"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,.35))', transform: 'translate(40px, 40px)', zIndex: 3 }}
      >
        <path d="M2 1 L2 19 L7 14.5 L10.5 22 L13.5 20.6 L10 13.2 L16.5 13.2 Z" fill="#fff" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
      <div
        ref={rippleRef}
        aria-hidden="true"
        style={{ position: 'absolute', width: '26px', height: '26px', borderRadius: '50%', border: '2px solid #1e40af', opacity: 0, pointerEvents: 'none', zIndex: 2 }}
      />
    </figure>
  );
}
