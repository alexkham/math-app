// Graph Studio — engine: a scene inside a link
//
// Lets one tool hand its state to another through the address alone:
//
//   /calculator#scene=eyJlIjpbImYoeCkgPSB4XjIiXX0
//
// The part after # never reaches the server, so no page has to be
// built for it and nothing is logged; the receiving shell reads it in
// the browser.
//
//   sceneHash(scene)            →  '#scene=…'   (put after a page address)
//   readSceneHash(location.hash) →  a full scene document, or null
//   packScene(scene) / unpackScene(text)   the text itself, without '#scene='
//
// Packing drops everything that createScene fills in again (row ids,
// default settings) and shortens the field names, then writes the JSON
// in the URL-safe form of base64.
//
// What comes out of a link is checked before it is used: a link can be
// written by anyone.
//
// Pure JavaScript: no React, no DOM.

import { createScene, DEFAULT_SETTINGS } from './scene.js';

const MAX_ROWS = 200;
const MAX_TEXT = 600;
const MAX_LINK = 60000;

const round = v => Number(Number(v).toPrecision(8));
const finite = v => typeof v === 'number' && Number.isFinite(v);

// ---------- base64, URL-safe, for any Unicode text ----------
function encode(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function decode(packed) {
  const b64 = packed.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(b64 + '==='.slice((b64.length + 3) % 4));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

// ---------- scene → short object ----------
function packRow(row) {
  const o = { t: row.text || '' };
  if (row.color) o.c = row.color;
  if (row.hidden) o.h = 1;
  if (row.slider) o.s = [round(row.slider.min), round(row.slider.max), round(row.slider.step || 0)];
  if (row.param) o.p = [round(row.param.min), round(row.param.max)];
  if (row.lock) o.k = row.lock;
  if (row.label) o.l = row.label;
  if (row.showLabel) o.sl = 1;
  return Object.keys(o).length === 1 ? o.t : o;
}

export function packScene(scene) {
  const s = createScene(scene);
  const o = { e: s.expressions.map(packRow), w: [round(s.view.cx), round(s.view.cy), round(s.view.ux), round(s.view.uy)] };
  const g = {};
  for (const k of Object.keys(DEFAULT_SETTINGS)) if (s.settings[k] !== DEFAULT_SETTINGS[k]) g[k] = s.settings[k];
  if (Object.keys(g).length) o.g = g;
  if (s.authoring && s.authoring.title) o.n = String(s.authoring.title).slice(0, 120);
  return encode(JSON.stringify(o));
}

// ---------- short object → scene, checked ----------
function unpackRow(r) {
  if (typeof r === 'string') return r.length <= MAX_TEXT ? { text: r } : null;
  if (!r || typeof r !== 'object' || typeof r.t !== 'string' || r.t.length > MAX_TEXT) return null;
  const row = { text: r.t };
  if (typeof r.c === 'string' && /^#[0-9a-fA-F]{3,8}$/.test(r.c)) row.color = r.c;
  if (r.h) row.hidden = true;
  if (Array.isArray(r.s) && r.s.length >= 2 && r.s.slice(0, 3).every(finite) && r.s[1] > r.s[0]) {
    row.slider = { min: r.s[0], max: r.s[1], step: r.s[2] > 0 ? r.s[2] : 0 };
  }
  if (Array.isArray(r.p) && r.p.length === 2 && r.p.every(finite) && r.p[1] > r.p[0]) row.param = { min: r.p[0], max: r.p[1] };
  if (r.k === 'readonly' || r.k === 'hidden-row') row.lock = r.k;
  if (typeof r.l === 'string') row.label = r.l.slice(0, 60);
  if (r.sl) row.showLabel = true;
  return row;
}

export function unpackScene(packed) {
  if (typeof packed !== 'string' || !packed || packed.length > MAX_LINK) return null;
  let o;
  try { o = JSON.parse(decode(packed)); } catch { return null; }
  if (!o || typeof o !== 'object' || !Array.isArray(o.e) || o.e.length > MAX_ROWS) return null;
  const expressions = [];
  for (const r of o.e) {
    const row = unpackRow(r);
    if (!row) return null;
    expressions.push(row);
  }
  const partial = { expressions };
  if (Array.isArray(o.w) && o.w.length === 4 && o.w.every(finite) && o.w[2] > 0 && o.w[3] > 0) {
    partial.view = { cx: o.w[0], cy: o.w[1], ux: o.w[2], uy: o.w[3] };
  }
  if (o.g && typeof o.g === 'object') {
    const settings = {};
    for (const k of Object.keys(DEFAULT_SETTINGS)) {
      if (k in o.g && typeof o.g[k] === typeof DEFAULT_SETTINGS[k]) settings[k] = typeof o.g[k] === 'string' ? o.g[k].slice(0, 40) : o.g[k];
    }
    partial.settings = settings;
  }
  if (typeof o.n === 'string') partial.authoring = { title: o.n.slice(0, 120) };
  try { return createScene(partial); } catch { return null; }
}

// ---------- the '#scene=…' form ----------
export function sceneHash(scene, param = 'scene') {
  return `#${param}=${packScene(scene)}`;
}

// Accepts location.hash ('#scene=…', also among other &-separated parts).
export function readSceneHash(hash, param = 'scene') {
  if (typeof hash !== 'string' || !hash) return null;
  const body = hash.startsWith('#') ? hash.slice(1) : hash;
  for (const part of body.split('&')) {
    const eq = part.indexOf('=');
    if (eq > 0 && part.slice(0, eq) === param) return unpackScene(part.slice(eq + 1));
  }
  return null;
}
