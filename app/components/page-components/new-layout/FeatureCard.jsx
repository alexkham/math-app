import React from 'react'
import { processContent } from '@/app/utils/contentProcessor'

const defaultIcon = (
  <svg width="64" height="40" viewBox="0 0 80 28" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <text x="0" y="20" fontFamily="'Computer Modern', 'Latin Modern Roman', 'Times New Roman', serif" fontSize="20" fontStyle="italic">
      L
      <tspan dy="-6" fontSize="18">A</tspan>
      <tspan dy="6" fontStyle="normal">T</tspan>
      <tspan dy="4" fontStyle="normal">E</tspan>
      <tspan dy="-4" fontStyle="normal">X</tspan>
    </text>
  </svg>
)

const defaultProps = {
  title: 'Feature title',
  description: 'A short description of the feature, what it does, and why it matters.',
  icon: defaultIcon,
  iconColor: '#0C447C',
  iconBackgroundColor: '#E6F1FB',
  backgroundColor: '#ffffff',
  borderColor: '#e5e7eb',
  ctaBackgroundColor: '#06357a',
  ctaTextColor: '#ffffff',
  link: null,
}

export default function FeatureCard(props) {

  const {
    title,
    description,
    icon,
    iconColor,
    iconBackgroundColor,
    backgroundColor,
    borderColor,
    ctaBackgroundColor,
    ctaTextColor,
    link,
  } = { ...defaultProps, ...props }

  const renderedIcon = (typeof icon === 'string' || icon == null) ? defaultIcon : icon

  const hasLink = link && link.url && link.label

  return (
    <div
      style={{
        background: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        gap: '18px',
        alignItems: 'center',
        margin: '16px 0',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        maxWidth: '100%',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: '106px',
          height: '106px',
          borderRadius: '12px',
          background: iconBackgroundColor,
          color: iconColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {renderedIcon}
      </div>

      <div style={{ flex: '1 1 240px', minWidth: 0 }}>
        <div
          style={{
            fontSize: '17px',
            fontWeight: 500,
            color: '#1f2937',
            marginBottom: '6px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '15px',
            color: '#4b5563',
            lineHeight: 1.6,
          }}
        >
          {processContent(description)}
        </div>
      </div>

      {hasLink && (
        <a
          href={link.url}
          style={{
            flexShrink: 0,
            fontSize: '14px',
            padding: '10px 18px',
            background: ctaBackgroundColor,
            color: ctaTextColor,
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            display: 'inline-block',
          }}
        >
          {link.label} &rarr;
        </a>
      )}
    </div>
  )
}