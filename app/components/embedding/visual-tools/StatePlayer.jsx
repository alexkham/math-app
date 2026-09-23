'use client';

// StatePlayer — steps through a list of frozen-state SVG strings (the shape
// every `<tool>Diagrams.js` module exports) with previous / next / play.
//
// No data of its own: the page passes `states` as a prop, built in
// getStaticProps (see getToolBlock.js), so the SVGs are in the static HTML.
//
// Works alone on a page, or inside ToolBlock. Controlled (`index` +
// `onChange`) or uncontrolled (`defaultIndex`). Every control is optional.

import React, { useEffect, useRef, useState } from 'react';

const NAVY = '#06357a';
const SOFT = '#5a7299';
const LINE = '#dbe3ef';

// Strip the diagram's own card chrome (border/background/margin) so it nests
// inside the frame; keep intrinsic width/height/viewBox. Same rule as
// demoUnitFrame.
export function normalizeSvg(svg) {
  if (typeof svg !== 'string') return '';
  return svg.replace(/(<svg[^>]*?)style="[^"]*"/g, '$1style="display:block;max-width:100%;height:auto"');
}

const btn = {
  minWidth: 34,
  height: 30,
  padding: '0 10px',
  background: '#fff',
  border: `1px solid ${LINE}`,
  borderRadius: 6,
  color: NAVY,
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: 'Arial, Helvetica, sans-serif',
};

/**
 * @param {object} p
 * @param {Array<{key:string,label?:string,svg:string,caption?:string}>} p.states
 * @param {number}  [p.index]        controlled index
 * @param {number}  [p.defaultIndex] initial index when uncontrolled
 * @param {(i:number)=>void} [p.onChange]
 * @param {boolean} [p.autoplay=false]
 * @param {number}  [p.interval=1500]  ms between frames while playing
 * @param {boolean} [p.loop=false]
 * @param {boolean|{prev?:boolean,next?:boolean,play?:boolean,indicator?:boolean}} [p.controls=true]
 * @param {boolean} [p.showLabel=true]   state label under the picture
 * @param {boolean} [p.showCaption=true] optional longer caption under the label
 * @param {boolean} [p.normalize=true]   strip the SVG's own card styling
 * @param {string|number} [p.maxWidth]   picture max width
 * @param {object}  [p.style]            merged onto the outer element
 */
export default function StatePlayer({
  states = [],
  index,
  defaultIndex = 0,
  onChange,
  autoplay = false,
  interval = 1500,
  loop = false,
  controls = true,
  showLabel = true,
  showCaption = true,
  normalize = true,
  maxWidth,
  style,
}) {
  const controlled = typeof index === 'number';
  const [inner, setInner] = useState(defaultIndex);
  const [playing, setPlaying] = useState(autoplay);
  const timer = useRef(null);

  const total = states.length;
  const i = Math.min(Math.max(controlled ? index : inner, 0), Math.max(total - 1, 0));

  const go = (n) => {
    let next = n;
    if (next >= total) next = loop ? 0 : total - 1;
    if (next < 0) next = loop ? total - 1 : 0;
    if (!controlled) setInner(next);
    if (onChange) onChange(next);
  };

  useEffect(() => {
    if (!playing || total < 2) return undefined;
    if (i >= total - 1 && !loop) { setPlaying(false); return undefined; }
    timer.current = setTimeout(() => go(i + 1), interval);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, i, total, interval, loop]);

  if (total === 0) return null;

  const c = controls === false
    ? { prev: false, next: false, play: false, indicator: false }
    : { prev: true, next: true, play: true, indicator: true, ...(controls === true ? {} : controls) };
  const anyControl = c.prev || c.next || c.play || c.indicator;

  const cur = states[i];
  const svg = normalize ? normalizeSvg(cur.svg) : cur.svg;

  const togglePlay = () => {
    if (i >= total - 1 && !playing) { go(0); setTimeout(() => setPlaying(true), 30); return; }
    setPlaying((p) => !p);
  };

  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', ...style }}>
      <div
        style={{ margin: '0 auto', maxWidth: maxWidth || '100%' }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {showLabel && cur.label && (
        <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600, color: NAVY, textAlign: 'center' }}>{cur.label}</div>
      )}
      {showCaption && cur.caption && (
        <div style={{ marginTop: 4, fontSize: 13, color: SOFT, textAlign: 'center', lineHeight: 1.55 }}>{cur.caption}</div>
      )}
      {anyControl && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 10 }}>
          {c.prev && <button type="button" style={btn} onClick={() => { setPlaying(false); go(i - 1); }} aria-label="Previous state">&#8249;</button>}
          {c.play && total > 1 && (
            <button type="button" style={btn} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? '‖' : '▶'}
            </button>
          )}
          {c.next && <button type="button" style={btn} onClick={() => { setPlaying(false); go(i + 1); }} aria-label="Next state">&#8250;</button>}
          {c.indicator && <span style={{ fontSize: 12, color: SOFT, marginLeft: 4 }}>{i + 1} / {total}</span>}
        </div>
      )}
    </div>
  );
}
