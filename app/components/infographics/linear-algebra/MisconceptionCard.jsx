import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';

/* ============================================================================
 * THEMES
 * ==========================================================================*/
const THEMES = {
  navy:       { paper: '#f4f6fa', ink: '#0f1a2e', muted: '#5a6478', line: '#d6dce8', accent: '#1f4e8c', soft: '#e8edf5' },
  terracotta: { paper: '#fffaf3', ink: '#2a1a14', muted: '#6b5848', line: '#e8d9c4', accent: '#c4543a', soft: '#fdf3e6' },
  forest:     { paper: '#f6f3ea', ink: '#1a2a1f', muted: '#5a6b5a', line: '#d8dcc9', accent: '#3d6b4a', soft: '#eef2e0' },
  burgundy:   { paper: '#faf4f4', ink: '#2a1418', muted: '#6b5258', line: '#e6d5d8', accent: '#7d2838', soft: '#f5e9ec' },
  olive:      { paper: '#f9f6ea', ink: '#1f1f14', muted: '#5a5a4a', line: '#dcd6bc', accent: '#7a7a2a', soft: '#f0ecd4' },
  ocean:      { paper: '#f0f7f7', ink: '#0f2228', muted: '#4a6168', line: '#cfe0e0', accent: '#1f7a82', soft: '#e0eded' },
  mono:       { paper: '#ffffff', ink: '#000000', muted: '#666666', line: '#dddddd', accent: '#000000', soft: '#f4f4f4' },
  plum:       { paper: '#f7f3f8', ink: '#1f1428', muted: '#5a4e6b', line: '#e0d6e4', accent: '#5a2d7a', soft: '#ede4f0' },
  dark:       { paper: '#1a1a22', ink: '#f0ece0', muted: '#9a958a', line: '#2e2e3a', accent: '#ffb84a', soft: '#22222e' },
};

/* ============================================================================
 * CSS
 * ==========================================================================*/
function buildCss() {
  let css = '';

  Object.keys(THEMES).forEach(function (key) {
    const t = THEMES[key];
    css +=
      '.msc-root.msc-t-' + key + '{' +
      '--msc-paper:' + t.paper + ';--msc-ink:' + t.ink + ';--msc-muted:' + t.muted + ';' +
      '--msc-line:' + t.line + ';--msc-accent:' + t.accent + ';--msc-soft:' + t.soft + ';}';
  });

  css +=
  '.msc-root{font-family:\'Inter\',system-ui,-apple-system,sans-serif;line-height:1.5;' +
  'color:var(--msc-ink);}' +
  '.msc-root *,.msc-root *::before,.msc-root *::after{box-sizing:border-box;}' +
  '.msc-root a{color:var(--msc-accent);text-underline-offset:2px;}' +

  '.msc-stack{display:grid;gap:16px;}' +
  '.msc-root.msc-v-grid .msc-stack{grid-template-columns:repeat(auto-fit,minmax(330px,1fr));}' +

  '.msc-card{background:var(--msc-paper);border:1px solid var(--msc-line);}' +
  '.msc-claim{padding:15px 22px;border-bottom:1px solid var(--msc-line);display:flex;' +
  'align-items:baseline;gap:12px;flex-wrap:wrap;}' +
  '.msc-tag{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.14em;text-transform:uppercase;background:var(--msc-accent);' +
  'color:var(--msc-paper);padding:4px 9px;}' +
  '.msc-topic{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:10px;' +
  'letter-spacing:.11em;text-transform:uppercase;color:var(--msc-muted);}' +

  '.msc-split{display:grid;grid-template-columns:1fr 1fr;}' +
  '.msc-side{padding:20px 22px;}' +
  '.msc-side.is-wrong{border-right:1px solid var(--msc-line);background:var(--msc-soft);}' +
  '.msc-side-l{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.14em;text-transform:uppercase;margin-bottom:11px;display:flex;' +
  'align-items:center;gap:8px;}' +
  '.msc-side.is-wrong .msc-side-l{color:var(--msc-accent);}' +
  '.msc-side.is-right .msc-side-l{color:var(--msc-muted);}' +
  '.msc-mark{width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;' +
  'font-size:11px;font-weight:800;line-height:1;}' +
  '.msc-side.is-wrong .msc-mark{background:var(--msc-accent);color:var(--msc-paper);}' +
  '.msc-side.is-right .msc-mark{background:var(--msc-ink);color:var(--msc-paper);}' +
  '.msc-stmt{font-size:15px;}' +
  '.msc-side.is-wrong .msc-stmt{text-decoration:line-through;' +
  'text-decoration-color:var(--msc-accent);text-decoration-thickness:1.5px;}' +

  '.msc-why{padding:20px 22px;border-top:2px solid var(--msc-ink);}' +
  '.msc-why-l{font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:9px;font-weight:800;' +
  'letter-spacing:.14em;text-transform:uppercase;color:var(--msc-accent);margin-bottom:9px;}' +
  '.msc-why-b{font-size:14px;}' +
  '.msc-why-b p{margin:0 0 8px;}.msc-why-b p:last-child{margin-bottom:0;}' +
  '.msc-why.is-missing .msc-why-b{color:var(--msc-muted);font-style:italic;}' +

  '.msc-counter{margin:16px 22px 20px;padding:14px 17px;border:1px dashed var(--msc-accent);' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;line-height:1.65;}' +
  '.msc-counter b{display:block;font-size:9px;letter-spacing:.13em;text-transform:uppercase;' +
  'color:var(--msc-accent);margin-bottom:7px;font-weight:800;}' +

  /* ---------- variant: grid ---------- */
  '.msc-root.msc-v-grid .msc-split{grid-template-columns:1fr;}' +
  '.msc-root.msc-v-grid .msc-side.is-wrong{border-right:none;' +
  'border-bottom:1px solid var(--msc-line);}' +
  '.msc-root.msc-v-grid .msc-stmt{font-size:14px;}' +

  /* ---------- variant: strip ---------- */
  '.msc-root.msc-v-strip .msc-card{border-left:4px solid var(--msc-accent);}' +
  '.msc-root.msc-v-strip .msc-split{grid-template-columns:1fr 1fr;}' +
  '.msc-root.msc-v-strip .msc-side{padding:14px 18px;}' +
  '.msc-root.msc-v-strip .msc-stmt{font-size:13.5px;}' +
  '.msc-root.msc-v-strip .msc-why{padding:14px 18px;border-top-width:1px;}' +
  '.msc-root.msc-v-strip .msc-why-b{font-size:13px;}' +
  '.msc-root.msc-v-strip .msc-counter{margin:0 18px 16px;font-size:11.5px;}' +

  '.msc-empty{border:1px dashed var(--msc-line);padding:20px;text-align:center;' +
  'font-family:\'JetBrains Mono\',ui-monospace,monospace;font-size:12px;color:var(--msc-muted);}' +

  '@media (max-width:700px){' +
  '.msc-split{grid-template-columns:1fr;}' +
  '.msc-side.is-wrong{border-right:none;border-bottom:1px solid var(--msc-line);}' +
  '}';

  return css;
}

const MSC_CSS = buildCss();

/* ============================================================================
 * COMPONENT
 *
 * Props
 *   data     – { items: [...] } or a single item object
 *   theme    – nine theme keys; default navy
 *   variant  – 'split' | 'grid' | 'strip'
 *
 * item shape
 *   { topic, tag, wrong, right, whyTempting, counterexample, counterexampleLabel }
 * ==========================================================================*/
export default function MisconceptionCard(props) {
  const data = props.data;
  const theme = THEMES[props.theme] ? props.theme : 'navy';
  const variant = props.variant || 'split';

  const rootClass = 'msc-root msc-t-' + theme + ' msc-v-' + variant;

  const source = !data
    ? []
    : Array.isArray(data.items)
      ? data.items
      : (data.wrong ? [data] : []);

  if (source.length === 0) {
    return (
      <div className={rootClass}>
        <style dangerouslySetInnerHTML={{ __html: MSC_CSS }} />
        <div className="msc-empty">MisconceptionCard: no items supplied</div>
      </div>
    );
  }

  const items = source.map(function (it, i) {
    const counter = it.counterexample
      ? (Array.isArray(it.counterexample) ? it.counterexample : [it.counterexample])
      : null;
    return {
      key: it.id || 'msc-' + i,
      raw: it,
      counter: counter,
      counterLabel: it.counterexampleLabel || 'Counterexample',
      missingWhy: !it.whyTempting,
    };
  });

  return (
    <div className={rootClass}>
      <style dangerouslySetInnerHTML={{ __html: MSC_CSS }} />
      <div className="msc-stack">
        {items.map(function (it) {
          return (
            <div key={it.key} className="msc-card">
              <div className="msc-claim">
                <span className="msc-tag">{it.raw.tag || 'Misconception'}</span>
                {it.raw.topic ? <span className="msc-topic">{it.raw.topic}</span> : null}
              </div>

              <div className="msc-split">
                <div className="msc-side is-wrong">
                  <div className="msc-side-l">
                    <i className="msc-mark">&#215;</i>
                    {it.raw.wrongLabel || 'What people write'}
                  </div>
                  <div className="msc-stmt">{processContent(it.raw.wrong)}</div>
                </div>
                <div className="msc-side is-right">
                  <div className="msc-side-l">
                    <i className="msc-mark">&#10003;</i>
                    {it.raw.rightLabel || 'What is true'}
                  </div>
                  <div className="msc-stmt">{processContent(it.raw.right)}</div>
                </div>
              </div>

              <div className={'msc-why' + (it.missingWhy ? ' is-missing' : '')}>
                <div className="msc-why-l">Why the wrong version is tempting</div>
                <div className="msc-why-b">
                  {it.missingWhy
                    ? 'Not stated. Marking an error without naming the reasoning that leads to it tells the reader what to avoid but not how to notice they are doing it.'
                    : processContent(it.raw.whyTempting)}
                </div>
              </div>

              {it.counter ? (
                <div className="msc-counter">
                  <b>{it.counterLabel}</b>
                  {it.counter.map(function (line, li) {
                    return (
                      <React.Fragment key={li}>
                        {processContent(line)}
                        {li < it.counter.length - 1 ? <br /> : null}
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { THEMES as MSC_THEMES };
