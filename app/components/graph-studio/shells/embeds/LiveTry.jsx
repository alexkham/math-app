// Graph Studio — lesson embed: the live part of "try your own"
//
// Fetched on demand by GraphTry: the math editor, the still graph, and
// the few engine calls the figure needs. Like every shell it holds no
// math of its own.

import React, { useMemo } from 'react';
import MathInput from '../parts/MathInput.jsx';
import StillGraph from './LiveSliderGraph.jsx';
import { compileScene, scanDefinitions, sceneHash } from '../../engine/index.js';
import { FIGURE_LOOK } from './GraphPicture.jsx';

// The picture's scene with the reader's text in the editable row.
export function sceneWithText(picture, text) {
  const id = picture.editable && picture.editable.id;
  return { ...picture.scene, expressions: picture.scene.expressions.map(e => (e.id === id ? { ...e, text } : e)) };
}

// null when the text can be drawn, otherwise a sentence saying why not.
export function checkText(picture, text) {
  if (!text || !text.trim()) return null;
  const id = picture.editable && picture.editable.id;
  const row = compileScene(sceneWithText(picture, text)).rows[id];
  return row && row.kind === 'error' ? (row.error || 'This cannot be read yet') : null;
}

export function hashWithText(picture, text) {
  return sceneHash(sceneWithText(picture, text));
}

export function TryGraph({ picture, text }) {
  const scene = useMemo(() => sceneWithText(picture, text), [picture, text]);
  return <StillGraph picture={picture} scene={scene} />;
}

export function TryEditor({ picture, text, onChange, autoFocus }) {
  const names = useMemo(() => scanDefinitions(sceneWithText(picture, text).expressions.map(e => e.text)), [picture, text]);
  return (
    <MathInput
      value={text} names={names} onChange={onChange} autoFocus={autoFocus}
      fontSize={17} color={FIGURE_LOOK.navy} accent={FIGURE_LOOK.accent}
      ariaLabel="Formula to draw" placeholder="type a formula"
      style={{ minHeight: 30, display: 'flex', alignItems: 'center' }}
    />
  );
}
