import React from 'react'
import { processContent } from '@/app/utils/contentProcessor'

const defaultProps = {
  items: [
    {
      title: 'Item title',
      content: 'Item content goes here.',
      open: false,
    },
    {
      title: 'Another item',
      content: 'More content.',
      open: false,
    },
  ],
  backgroundColor: '#ffffff',
  borderColor: '#e5e7eb',
  titleColor: '#1f2937',
  contentColor: '#4b5563',
}

export default function Accordion(props) {

  const {
    items,
    backgroundColor,
    borderColor,
    titleColor,
    contentColor,
  } = { ...defaultProps, ...props }

  return (
    <div
      style={{
        background: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: '12px',
        overflow: 'hidden',
        margin: '16px 0',
      }}
    >
      {items.map((item, index) => {

        const isLast = index === items.length - 1
        const hasLink = item.link && item.link.url

        return (
          <details
            key={`accordion-item-${index}`}
            open={item.open || false}
            style={{
              borderBottom: isLast ? 'none' : `1px solid ${borderColor}`,
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                padding: '16px 20px',
                fontSize: '15px',
                fontWeight: 500,
                color: titleColor,
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                userSelect: 'none',
              }}
            >
              <span>{item.title}</span>
              <i
                className="ti ti-chevron-down"
                style={{
                  fontSize: '16px',
                  color: contentColor,
                  flexShrink: 0,
                  marginLeft: '12px',
                }}
                aria-hidden="true"
              />
            </summary>

            {item.content && (
              <div
                style={{
                  padding: '0 20px 16px',
                  fontSize: '14px',
                  color: contentColor,
                  lineHeight: 1.7,
                }}
              >
                {processContent(item.content)}

                {hasLink && (
                  <div style={{ marginTop: '10px' }}>
                    <a
                      href={item.link.url}
                      style={{
                        fontSize: '13px',
                        color: '#06357a',
                        textDecoration: 'none',
                        fontWeight: 500,
                      }}
                    >
                      {item.link.label} &rarr;
                    </a>
                  </div>
                )}
              </div>
            )}
          </details>
        )
      })}
    </div>
  )
}