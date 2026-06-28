import React from 'react'
import { processContent } from '@/app/utils/contentProcessor'

const defaultProps = {
  blocks: [
    {
      label: 'TOPIC ONE',
      content: 'Link description goes here',
      link: { label: '', url: '#' },
      backgroundColor: '#E6F1FB',
      borderColor: '#185FA5',
      textColor: '#0C447C',
      labelColor: '#185FA5',
    },
    {
      label: 'TOPIC TWO',
      content: 'Another link description',
      link: { label: '', url: '#' },
      backgroundColor: '#E1F5EE',
      borderColor: '#0F6E56',
      textColor: '#085041',
      labelColor: '#0F6E56',
    },
  ],
  minBlockWidth: '220px',
  gap: '10px',
}

export default function CalloutBlockGroup(props) {

  const {
    blocks,
    minBlockWidth,
    gap,
  } = { ...defaultProps, ...props }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minBlockWidth}, 1fr))`,
        gap: gap,
        margin: '16px 0',
      }}
    >
      {blocks.map((block, index) => {

        const hasLink = block.link && block.link.url
        const backgroundColor = block.backgroundColor || '#f3f4f6'
        const borderColor = block.borderColor || '#6b7280'
        const textColor = block.textColor || '#1f2937'
        const labelColor = block.labelColor || borderColor

        const blockInner = (
          <>
            {block.label && (
              <div
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  color: labelColor,
                  fontWeight: 500,
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                }}
              >
                {block.label}
              </div>
            )}
            <div
              style={{
                fontSize: '14px',
                color: textColor,
                lineHeight: 1.5,
              }}
            >
              {processContent(block.content)}
            </div>
          </>
        )

        const blockStyle = {
          background: backgroundColor,
          borderLeft: `3px solid ${borderColor}`,
          padding: '12px 16px',
          textDecoration: 'none',
          display: 'block',
        }

        if (hasLink) {
          return (
            <a
              key={`callout-${index}`}
              href={block.link.url}
              style={blockStyle}
            >
              {blockInner}
            </a>
          )
        }

        return (
          <div key={`callout-${index}`} style={blockStyle}>
            {blockInner}
          </div>
        )
      })}
    </div>
  )
}