'use client';

// ===========================================================
// AnnotatedOverview
// The Overview tab of HowToUseSection: a static picture of the
// tool (data.Mockup) with numbered pins at data-given positions
// and a legend below. Same shape as the calculatematrix
// component of the same name; colours are this site's blue.
//
// data: {
//   Mockup:      React component (required)
//   mockupProps: props forwarded to Mockup
//   callouts: [{ n, label, desc, pos: { top?, left?, right?, bottom? } }]
// }
// ===========================================================

import React from 'react';

const BLUE = '#1e40af';

export default function AnnotatedOverview({ data }) {
  if (!data || !data.Mockup) return null;

  const { Mockup, mockupProps = {}, callouts = [] } = data;

  return (
    <div className="annotated-overview">
      <div className="mockup-frame">
        <Mockup {...mockupProps} />

        {callouts.map((c) => (
          <span
            key={c.n}
            className="callout-pin"
            style={{ ...c.pos }}
            aria-label={`Callout ${c.n}: ${c.label}`}
          >
            {c.n}
          </span>
        ))}
      </div>

      {callouts.length > 0 && (
        <div className="callout-legend">
          {callouts.map((c) => (
            <div key={c.n} className="legend-item">
              <span className="legend-num">{c.n}</span>
              <span className="legend-text">
                <strong>{c.label}</strong>
                {c.desc && <> — {c.desc}</>}
              </span>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .annotated-overview {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-family: Arial, sans-serif;
        }
        .mockup-frame {
          position: relative;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 20px;
        }
        .callout-pin {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: ${BLUE};
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1px ${BLUE};
          z-index: 3;
        }
        .callout-legend {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px 24px;
          font-size: 14px;
        }
        .legend-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .legend-num {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: ${BLUE};
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .legend-text {
          color: #64748b;
          line-height: 1.5;
        }
        .legend-text strong {
          color: #0f172a;
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .callout-legend { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
