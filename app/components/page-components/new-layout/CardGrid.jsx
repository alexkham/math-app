import React from 'react'
import { processContent } from '@/app/utils/contentProcessor'

const defaultProps = {
  cards: [
    {
      preview: '$\\frac{a}{b}$',
      title: 'Fractions',
      caption: '\\frac{a}{b}',
      link: { label: 'Open', url: '#' },
    },
    {
      preview: '$\\sqrt{x}$',
      title: 'Roots',
      caption: '\\sqrt{x}',
      link: { label: 'Open', url: '#' },
    },
    {
      preview: '$\\int f(x)\\,dx$',
      title: 'Integrals',
      caption: '\\int f(x) dx',
      link: { label: 'Open', url: '#' },
    },
  ],
  minCardWidth: '180px',
  gap: '12px',
  cardBackgroundColor: '#ffffff',
  cardBorderColor: '#e5e7eb',
  previewBackgroundColor: '#f9fafb',
}

export default function CardGrid(props) {

  const {
    cards,
    minCardWidth,
    gap,
    cardBackgroundColor,
    cardBorderColor,
    previewBackgroundColor,
  } = { ...defaultProps, ...props }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}, 1fr))`,
        gap: gap,
        margin: '16px 0',
      }}
    >
      {cards.map((card, index) => {

        const hasLink = card.link && card.link.url

        const cardInner = (
          <>
            <div
              style={{
                background: previewBackgroundColor,
                borderRadius: '8px',
                padding: '16px 8px',
                marginBottom: '12px',
                textAlign: 'center',
                minHeight: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                color: '#1f2937',
              }}
            >
              {processContent(card.preview)}
            </div>

            <div
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#1f2937',
                marginBottom: '4px',
              }}
            >
              {card.title}
            </div>

            {card.caption && (
              <div
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  fontFamily: 'ui-monospace, monospace',
                  wordBreak: 'break-all',
                }}
              >
                {card.caption}
              </div>
            )}
          </>
        )

        const cardStyle = {
          background: cardBackgroundColor,
          border: `1px solid ${cardBorderColor}`,
          borderRadius: '12px',
          padding: '16px',
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
          transition: 'border-color 0.15s, transform 0.15s',
        }

        if (hasLink) {
          return (
            <a
              key={`card-${index}`}
              href={card.link.url}
              style={cardStyle}
            >
              {cardInner}
            </a>
          )
        }

        return (
          <div key={`card-${index}`} style={cardStyle}>
            {cardInner}
          </div>
        )
      })}
    </div>
  )
}