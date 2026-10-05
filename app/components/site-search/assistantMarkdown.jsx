'use client';
import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import { TOKENS, UI_TEXT } from './searchConfig';

/**
 * assistantMarkdown.jsx: turns one Ask AI answer (Markdown + TeX) into React blocks.
 *
 *   renderAnswer(text, { streaming }) → array of elements
 *
 * processContent (@/app/utils/contentProcessor) renders inline content well, but it works line by
 * line, so a $$ block spread over several lines prints raw TeX; it wraps everything in one <ul>
 * when any line is a list item; and its links open in a new tab. So the block structure is built
 * here and processContent only renders the inline content of one block. contentProcessor.js is
 * used site-wide and is not modified.
 *
 * Steps: normalise newlines → (streaming) hide an unfinished formula → lift every $$…$$ onto its
 * own block with inner newlines collapsed → split on blank lines → classify each block as display
 * math, heading, bullet list, numbered list or paragraph (a block mixing list and plain lines is
 * split into runs) → render, each block inside a small error boundary so one bad formula never
 * breaks the whole message.
 *
 * Exported helpers (hideUnfinishedMath, liftDisplayMath, toBlocks) are pure, for tests.
 */

const FORMULA_PLACEHOLDER = '\u0001formula\u0001';
const BULLET = /^[-*]\s+/;
const NUMBERED = /^\d+[.)]\s+/;
const HEADING = /^#{1,6}\s+/;

/** While streaming: cut an unfinished $$ block (replaced by a placeholder) or a dangling single $. */
export function hideUnfinishedMath(text) {
  const doubles = (text.match(/\$\$/g) || []).length;
  if (doubles % 2 === 1) {
    return `${text.slice(0, text.lastIndexOf('$$'))}\n\n${FORMULA_PLACEHOLDER}`;
  }
  const singles = (text.replace(/\$\$/g, '').match(/(^|[^\\])\$/g) || []).length;
  if (singles % 2 === 1) return text.slice(0, text.lastIndexOf('$'));
  return text;
}

/** Every $$…$$ (possibly over several lines) becomes its own single-line block. */
export function liftDisplayMath(text) {
  return text.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => `\n\n$$${tex.replace(/\s*\n\s*/g, ' ').trim()}$$\n\n`);
}

function lineKind(line) {
  if (BULLET.test(line)) return 'ul';
  if (NUMBERED.test(line)) return 'ol';
  return 'p';
}

/** Block structure: [{ type: 'math' | 'heading' | 'ul' | 'ol' | 'p' | 'placeholder', ... }] */
export function toBlocks(text) {
  const blocks = [];
  String(text || '').split(/\n[ \t]*\n+/).forEach((chunk) => {
    const block = chunk.trim();
    if (!block) return;
    if (block === FORMULA_PLACEHOLDER) { blocks.push({ type: 'placeholder' }); return; }
    if (block.startsWith('$$') && block.endsWith('$$') && block.length > 4 && block.indexOf('$$', 2) === block.length - 2) {
      blocks.push({ type: 'math', content: block });
      return;
    }
    let run = null;
    block.split('\n').forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line) return;
      if (HEADING.test(line)) {
        blocks.push({ type: 'heading', content: line.replace(HEADING, '') });
        run = null;
        return;
      }
      const kind = lineKind(line);
      if (kind === 'p') {
        if (run && run.type !== 'p') { run.items[run.items.length - 1] += ` ${line}`; return; } // continues the previous item
        if (run) { run.lines.push(line); return; }
        run = { type: 'p', lines: [line] };
        blocks.push(run);
        return;
      }
      const item = line.replace(kind === 'ul' ? BULLET : NUMBERED, '');
      if (run && run.type === kind) { run.items.push(item); return; }
      run = { type: kind, items: [item] };
      blocks.push(run);
    });
  });
  return blocks;
}

const STYLE = {
  p: { margin: '0 0 12px' },
  list: { margin: '0 0 12px', paddingLeft: 22 },
  li: { margin: '4px 0' },
  math: { overflowX: 'auto', overflowY: 'hidden', margin: '12px 0', padding: '4px 0' },
  placeholder: { margin: '0 0 12px', fontSize: 14, color: TOKENS.muted, fontStyle: 'italic' },
};

class BlockBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    /* one bad block renders as plain text; nothing else to do */
  }

  render() {
    if (this.state.failed) return <p style={STYLE.p}>{this.props.raw}</p>;
    return this.props.children;
  }
}

function rawText(block) {
  if (block.content) return block.content;
  if (block.items) return block.items.join('\n');
  if (block.lines) return block.lines.join('\n');
  return '';
}

export function renderAnswer(text, { streaming = false } = {}) {
  let source = String(text || '').replace(/\r\n/g, '\n');
  if (streaming) source = hideUnfinishedMath(source);
  source = liftDisplayMath(source);
  return toBlocks(source).map((block, index) => {
    let node;
    if (block.type === 'placeholder') {
      node = <p style={STYLE.placeholder}>{UI_TEXT.askWritingFormula}</p>;
    } else if (block.type === 'math') {
      node = <div style={STYLE.math}>{processContent(block.content)}</div>;
    } else if (block.type === 'heading') {
      node = <p style={STYLE.p}><strong>{processContent(block.content)}</strong></p>;
    } else if (block.type === 'ul' || block.type === 'ol') {
      const items = block.items.map((item, i) => <li key={i} style={STYLE.li}>{processContent(item)}</li>);
      node = block.type === 'ul' ? <ul style={STYLE.list}>{items}</ul> : <ol style={STYLE.list}>{items}</ol>;
    } else {
      node = <p style={STYLE.p}>{processContent(block.lines.join('\n'))}</p>;
    }
    return <BlockBoundary key={`b${index}`} raw={rawText(block)}>{node}</BlockBoundary>;
  });
}

export default renderAnswer;
