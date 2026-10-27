/*
  DecisionWalker.jsx

  The interactive partner of DecisionMaker. Same data, same look: the map
  views are DecisionMaker's own Steps / Tree views, switched into "walk"
  mode. The reader answers on the map (or one card at a time) and the
  route lights up. Progress is kept when the reader switches views.

  ------------------------------------------------------------------
  PROPS
  ------------------------------------------------------------------
  data       required — the same shape as DecisionMaker
  variant    starting view:
               'map'    (default) Steps for chain data, otherwise the
                        vertical tree if it fits, otherwise the horizontal one
               'ladder' | 'tree' | 'card'   ('treeH' / 'treeV' also accepted)
  direction  'horizontal' | 'vertical' — tree direction when variant='tree'
  switcher   show the reader's view switch                 default true
  views      views the switch may offer, in display order
             default ['ladder', 'treeH', 'treeV', 'card']
  theme      partial theme, merged over DEFAULT_THEME (DecisionMaker)

  Which views are offered: 'ladder' only for chain data; trees and card
  always. A view that does not fit the card's width is disabled; Card
  always fits, so narrow screens fall back to it.

  Wording comes from data.labels, merged over DecisionMaker's
  DEFAULT_LABELS (card, yourTurn, question, result, back, restart, pick,
  trailEmpty, plus the view names).
*/

'use client';

import React, { useMemo, useRef, useState } from 'react';
import {
  CSS, R, Outcome, Banners, cssVars, useIsoLayoutEffect,
  isChain, isNode, isOutcome, layoutTreeH, layoutTreeV,
  Ladder, TreeH, TreeV, ViewSwitch,
  DEFAULT_LABELS, DEFAULT_THEME,
} from './DecisionMaker';

export const WALK_VIEWS = ['ladder', 'treeH', 'treeV', 'card'];

/* ------------------------------------------------------------------ */
/*  route                                                              */
/* ------------------------------------------------------------------ */

function useRoute(data) {
  const [path, setPath] = useState([]);          // [{ node, answer }]
  const current = path.length ? path[path.length - 1].answer.to : data.start;
  return {
    path,
    current,
    finished: isOutcome(data, current),
    choose:  (node, answer) => setPath((p) => [...p, { node, answer }]),
    back:    () => setPath((p) => p.slice(0, -1)),
    restart: () => setPath([]),
    jump:    (i) => setPath((p) => p.slice(0, i)),
  };
}

function Trail({ data, walk, labels, empty }) {
  return (
    <div className="dw-bar">
      <div className="dw-trail">
        {walk.path.length === 0 && <span className="dw-trail-empty"><R t={empty} /></span>}
        {walk.path.map((s, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="dw-trail-sep">{'›'}</span>}
            <span className="dw-trail-i" onClick={() => walk.jump(i)}>
              <R t={data.nodes[s.node].question} />
              <span className="dm-pill"><R t={s.answer.label} /></span>
            </span>
          </React.Fragment>
        ))}
      </div>
      <div className="dw-ctrl">
        <button type="button" className="dw-btn" onClick={walk.back} disabled={!walk.path.length}>
          <R t={labels.back} />
        </button>
        <button type="button" className="dw-btn" onClick={walk.restart} disabled={!walk.path.length}>
          <R t={labels.restart} />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  card view                                                          */
/* ------------------------------------------------------------------ */

function Card({ data, labels, walk }) {
  if (walk.finished) {
    return (
      <div className="dw-stage">
        <div className="dw-result">
          <div className="dw-step-n" style={{ textAlign: 'left', marginBottom: 8 }}><R t={labels.result} /></div>
          <Outcome o={data.outcomes[walk.current]} />
        </div>
      </div>
    );
  }
  const node = isNode(data, walk.current) ? data.nodes[walk.current] : null;
  if (!node) return null;
  return (
    <div className="dw-stage">
      <div className="dw-step-n"><R t={labels.question} /> {walk.path.length + 1}</div>
      <div className="dw-stage-q"><R t={node.question} /></div>
      {node.hint && <div className="dw-stage-h"><R t={node.hint} /></div>}
      <div className="dw-answers">
        {node.answers.map((a, i) => (
          <button key={i} type="button" className="dw-ans" onClick={() => walk.choose(walk.current, a)}>
            <R t={a.label} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  public component                                                   */
/* ------------------------------------------------------------------ */

const VIEW_COMPONENTS = { ladder: Ladder, treeH: TreeH, treeV: TreeV, card: Card };

export default function DecisionWalker({
  data,
  variant = 'map',
  direction = 'horizontal',
  switcher = true,
  views = WALK_VIEWS,
  theme,
}) {
  const t = { ...DEFAULT_THEME, ...(theme || {}) };
  const labels = { ...DEFAULT_LABELS, ...(data.labels || {}) };
  const walk = useRoute(data);

  /* which views suit the data, and how wide each needs to be */
  const chain = useMemo(() => isChain(data), [data]);
  const widths = useMemo(() => ({
    ladder: 560,
    treeH:  layoutTreeH(data).W,
    treeV:  layoutTreeV(data).W,
    card:   0,
  }), [data]);
  const offered = views.filter((v) => VIEW_COMPONENTS[v] && (v !== 'ladder' || chain));

  /* measure the real body width */
  const bodyRef = useRef(null);
  const [avail, setAvail] = useState(Infinity);
  useIsoLayoutEffect(() => {
    const el = bodyRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const measure = () => {
      const cs = window.getComputedStyle(el);
      setAvail(el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const disabled = new Set(offered.filter((v) => widths[v] > avail));
  const usable = offered.filter((v) => !disabled.has(v));

  /* starting view */
  const [picked, setPicked] = useState(() => {
    if (variant === 'tree') return direction === 'vertical' ? 'treeV' : 'treeH';
    if (VIEW_COMPONENTS[variant]) return variant;
    return 'map';
  });
  let view = picked;
  if (view === 'map') {
    view = ['ladder', 'treeV', 'treeH'].find((v) => usable.includes(v)) || 'card';
  }
  if (!usable.includes(view)) view = usable[0] || 'card';

  const View = VIEW_COMPONENTS[view];
  const showSwitch = switcher && offered.length > 1;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="dm-root dw-root" style={cssVars(t)}>
        <div className="dm-card">
          {(data.header || showSwitch) && (
            <div className="dm-head">
              <div className="dm-head-main">
                {data.header && data.header.kicker && (
                  <div className="dm-kicker"><R t={data.header.kicker} /></div>
                )}
                {data.header && <h2 className="dm-title"><R t={data.header.title} /></h2>}
                {data.header && data.header.lede && (
                  <div className="dm-lede"><R t={data.header.lede} /></div>
                )}
              </div>
              {showSwitch && (
                <ViewSwitch
                  views={offered}
                  view={view}
                  onChange={setPicked}
                  labels={labels}
                  disabled={disabled}
                />
              )}
            </div>
          )}
          <div className="dm-body" ref={bodyRef}>
            <Banners items={data.first} />
            <Trail
              data={data}
              walk={walk}
              labels={labels}
              empty={view === 'card' ? labels.trailEmpty : labels.pick}
            />
            <View data={data} labels={labels} walk={walk} />
            <Banners items={data.last} />
          </div>
        </div>
      </div>
    </>
  );
}
