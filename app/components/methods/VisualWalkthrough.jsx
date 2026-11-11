// VisualWalkthrough.jsx
// Slot for an existing visual: a registered component (tool, scene, demo
// player), an inline SVG string, or an image. The caption and step texts are
// always rendered as HTML so crawlers read them.
// visual: { component?, props?, svg?, src?, alt?, caption?, steps?: [string] }
// components: { [name]: ReactComponent }   (passed in by the page)

import React from 'react';
import { processContent } from '../../utils/contentProcessor';
import { CLEAN } from '../calculation-methods/cleanTheme';

export default function VisualWalkthrough(props) {
  const { visual, components = {} } = props;
  if (!visual) return null;

  const { component, props: componentProps = {}, svg, src, alt = '', caption, steps = [] } = visual;
  const Component = component ? components[component] : null;

  let stage = null;
  if (Component) stage = <Component {...componentProps} />;
  else if (svg) stage = <div dangerouslySetInnerHTML={{ __html: svg }} />;
  else if (src) stage = <img src={src} alt={alt} loading="lazy" style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }} />;
  else if (component) {
    stage = (
      <div style={{ padding: '24px', textAlign: 'center', color: CLEAN.faint, fontFamily: CLEAN.mono, fontSize: '12px' }}>
        &lt;{component}&gt; not registered on this page
      </div>
    );
  }

  return (
    <div style={{ border: `1px solid ${CLEAN.border}`, borderRadius: '10px', overflow: 'hidden' }}>
      {stage && <div style={{ background: '#fbfcfe', padding: '8px' }}>{stage}</div>}
      {caption && (
        <div
          style={{
            padding: '10px 14px',
            fontSize: '14px',
            lineHeight: 1.6,
            color: CLEAN.text,
            background: CLEAN.bgSubtle,
            borderTop: stage ? `1px solid ${CLEAN.border}` : 'none',
          }}
        >
          {processContent(caption)}
        </div>
      )}
      {steps.length > 0 && (
        <ol style={{ margin: 0, padding: '10px 14px 12px 34px', fontSize: '14px', lineHeight: 1.6, color: CLEAN.text }}>
          {steps.map((step, index) => (
            <li key={index}>{processContent(step)}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
