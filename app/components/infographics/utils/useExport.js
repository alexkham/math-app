'use client';

/*
 * useExport
 * ------------------------------------------------------------------
 * Downloads one rendered component as PNG or PDF, entirely in the browser.
 * What is captured is exactly what is on screen.
 *
 *   const rootRef = useRef(null);
 *   const { exportAs, busy } = useExport(rootRef, { fileName: 'hierarchy' });
 *   <div ref={rootRef}> … </div>
 *   exportAs('png')  |  exportAs('pdf')
 *
 * Options
 *   fileName    base name, no extension               (default 'infographic')
 *   background  fill behind the capture               (default '#ffffff')
 *   pixelRatio  PNG resolution multiplier             (default 2, lowered
 *               automatically if the canvas would exceed browser limits)
 *   pdfMargin   blank border around the PDF image, px (default 24)
 *   onError     (error) => void
 *
 * Markers inside the captured node
 *   data-export-ignore   left out of the capture (toolbar, buttons, tooltip)
 *   data-export-scroll   horizontal scroller — captured at full content width,
 *                        not just the visible slice
 *
 * Dependencies (loaded on first click only, not in the page bundle):
 *   npm i html-to-image jspdf
 */

import { useCallback, useRef, useState } from 'react';

const MAX_SIDE = 16384;
const MAX_AREA = 16777216;

const slug = (s) =>
  String(s || 'infographic')
    .trim()
    .replace(/\.(png|pdf)$/i, '')
    .replace(/[^\w-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'infographic';

function download(href, name) {
  const a = document.createElement('a');
  a.href = href;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* widen the node so every scroller fits; returns the size and an undo */
function prepare(node) {
  const saved = [];
  const set = (el, prop, value) => {
    saved.push([el, prop, el.style[prop]]);
    el.style[prop] = value;
  };
  const scrollers = node.querySelectorAll('[data-export-scroll]');
  let extra = 0;
  scrollers.forEach((el) => {
    extra = Math.max(extra, el.scrollWidth - el.clientWidth);
  });
  if (extra > 0) {
    set(node, 'width', node.offsetWidth + extra + 'px');
    set(node, 'maxWidth', 'none');
    scrollers.forEach((el) => set(el, 'overflow', 'visible'));
  }
  return {
    width: node.offsetWidth,
    height: node.offsetHeight,
    undo: () => {
      saved.reverse().forEach(([el, prop, value]) => {
        el.style[prop] = value;
      });
      saved.length = 0;
    },
  };
}

const keep = (n) => !(n && n.nodeType === 1 && n.hasAttribute('data-export-ignore'));

export function useExport(ref, options = {}) {
  const { fileName = 'infographic', background = '#ffffff', pixelRatio = 2, pdfMargin = 24, onError } = options;
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const fontCss = useRef(null);

  const exportAs = useCallback(
    async (format) => {
      const node = ref.current;
      if (!node || busyRef.current) return;
      busyRef.current = true;
      setBusy(true);
      let undo = () => {};
      try {
        const { toPng, getFontEmbedCSS } = await import('html-to-image');
        if (document.fonts && document.fonts.ready) await document.fonts.ready;

        if (fontCss.current === null) {
          try {
            fontCss.current = await getFontEmbedCSS(node);
          } catch (e) {
            fontCss.current = '';
          }
        }

        const size = prepare(node);
        undo = size.undo;
        const { width, height } = size;
        const ratio = Math.min(pixelRatio, MAX_SIDE / Math.max(width, height), Math.sqrt(MAX_AREA / (width * height)));

        const dataUrl = await toPng(node, {
          width,
          height,
          pixelRatio: ratio,
          backgroundColor: background,
          cacheBust: true,
          filter: keep,
          fontEmbedCSS: fontCss.current,
        });
        undo();

        const name = slug(fileName);
        if (format === 'pdf') {
          const { jsPDF } = await import('jspdf');
          const W = width + 2 * pdfMargin;
          const H = height + 2 * pdfMargin;
          const pdf = new jsPDF({
            orientation: W >= H ? 'landscape' : 'portrait',
            unit: 'px',
            format: [W, H],
            hotfixes: ['px_scaling'],
            compress: true,
          });
          if (pdfMargin > 0) {
            pdf.setFillColor(background);
            pdf.rect(0, 0, W, H, 'F');
          }
          pdf.addImage(dataUrl, 'PNG', pdfMargin, pdfMargin, width, height, undefined, 'FAST');
          pdf.save(name + '.pdf');
        } else {
          download(dataUrl, name + '.png');
        }
      } catch (err) {
        if (onError) onError(err);
        else console.error('[useExport]', err);
      } finally {
        undo();
        busyRef.current = false;
        setBusy(false);
      }
    },
    [ref, fileName, background, pixelRatio, pdfMargin, onError]
  );

  return { exportAs, busy };
}

export default useExport;
