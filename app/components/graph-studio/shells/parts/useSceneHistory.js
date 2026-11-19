// Graph Studio — shell part: undo and redo
//
// Keeps the scene document of a shell together with its past, so any
// change can be taken back.
//
//   const history = useSceneHistory(initialScene);
//   <Graph scene={history.scene} onSceneChange={history.set} />
//   history.undo(); history.redo(); history.canUndo; history.canRedo;
//   history.reset(scene)   start again from another document (no past)
//
// What counts as one step:
//   • Changes that follow each other within half a second are one step,
//     so a whole slider drag, a dragged point or a typed word is undone
//     at once, not frame by frame or letter by letter.
//   • Moving or zooming the view is not a step: undo never throws the
//     reader back to an earlier view. The view on screen is kept.

import { useState, useCallback, useRef, useMemo } from 'react';
import { ensureScene } from '../../engine/index.js';

const GROUP_MS = 500;
const LIMIT = 200;

// True when only the view differs.
function sameContent(a, b) {
  return a.expressions === b.expressions && a.settings === b.settings && a.authoring === b.authoring;
}

export default function useSceneHistory(initialScene) {
  const [state, setState] = useState(() => ({ past: [], present: ensureScene(initialScene), future: [] }));
  const lastChange = useRef(0);

  const set = useCallback(next => {
    const now = Date.now();
    setState(s => {
      const doc = typeof next === 'function' ? next(s.present) : next;
      if (!doc || doc === s.present) return s;
      if (sameContent(doc, s.present)) return { ...s, present: doc };          // view only
      const grouped = now - lastChange.current < GROUP_MS && s.past.length > 0;
      lastChange.current = now;
      if (grouped) return { past: s.past, present: doc, future: [] };
      return { past: [...s.past, s.present].slice(-LIMIT), present: doc, future: [] };
    });
  }, []);

  const undo = useCallback(() => {
    lastChange.current = 0;
    setState(s => {
      if (!s.past.length) return s;
      const prev = s.past[s.past.length - 1];
      return { past: s.past.slice(0, -1), present: { ...prev, view: s.present.view }, future: [s.present, ...s.future] };
    });
  }, []);

  const redo = useCallback(() => {
    lastChange.current = 0;
    setState(s => {
      if (!s.future.length) return s;
      const next = s.future[0];
      return { past: [...s.past, s.present], present: { ...next, view: s.present.view }, future: s.future.slice(1) };
    });
  }, []);

  const reset = useCallback(scene => {
    lastChange.current = 0;
    setState({ past: [], present: ensureScene(scene), future: [] });
  }, []);

  return useMemo(() => ({
    scene: state.present, set, undo, redo, reset,
    canUndo: state.past.length > 0, canRedo: state.future.length > 0
  }), [state, set, undo, redo, reset]);
}
