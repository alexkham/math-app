'use client';

// ===========================================================
// player/useProofModel.js
// Holds the live (dragged) copy of a proof's model.
// moveHandle applies the point type's drag rule, then rejects
// the move if proof.isValid(P) fails (degenerate figures).
// Mount one instance per proof (key the parent by proof id) —
// the hook does not watch for proof changes.
// ===========================================================

import { useState, useCallback, useMemo } from 'react';
import { resolve, dragHandle } from '../engine/resolver';

const clone = (m) => JSON.parse(JSON.stringify(m));

export default function useProofModel(proof) {
  const [model, setModel] = useState(() => clone(proof.model));

  const moveHandle = useCallback((id, pos) => {
    setModel((current) => {
      const next = dragHandle(current, id, pos);
      if (next === current) return current;
      if (proof.isValid && !proof.isValid(resolve(next).P)) return current;
      return next;
    });
  }, [proof]);

  const reset = useCallback(() => setModel(clone(proof.model)), [proof]);

  const P = useMemo(() => resolve(model).P, [model]);

  return { model, P, moveHandle, reset };
}
