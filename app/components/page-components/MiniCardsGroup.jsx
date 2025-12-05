import { useState } from 'react';

function MiniCard({ card }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeStyles = {
    small: {
      padding: '20px',
      minWidth: '140px',
      iconSize: '32px',
      fontSize: '14px',
      gridColumn: 'span 1',
      bgColor: '#dbeafe',
      hoverBg: '#bfdbfe'
    },
    medium: {
      padding: '24px 28px',
      minWidth: '160px',
      iconSize: '40px',
      fontSize: '15px',
      gridColumn: 'span 1',
      bgColor: '#93c5fd',
      hoverBg: '#60a5fa'
    },
    large: {
      padding: '32px 36px',
      minWidth: '180px',
      iconSize: '48px',
      fontSize: '16px',
      gridColumn: 'span 2',
      bgColor: '#3b82f6',
      hoverBg: '#2563eb'
    }
  };
  
  const size = card.size || 'medium';
  const styles = sizeStyles[size];

  return (
    <a 
      href={card.href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        padding: styles.padding,
        minWidth: styles.minWidth,
        backgroundColor: isHovered ? styles.hoverBg : styles.bgColor,
        border: '1px solid #3b82f6',
        borderRadius: '12px',
        textDecoration: 'none',
        color: size === 'large' ? '#ffffff' : '#1e40af',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        boxShadow: isHovered ? '0 4px 12px rgba(59, 130, 246, 0.3)' : '0 2px 6px rgba(59, 130, 246, 0.15)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        gridColumn: styles.gridColumn
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {card.icon && (
        <span style={{ 
          fontSize: styles.iconSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {card.icon}
        </span>
      )}
      <span style={{
        fontSize: styles.fontSize,
        fontWeight: '600',
        textAlign: 'center'
      }}>
        {card.label}
      </span>
      {card.description && (
        <span style={{
          fontSize: '12px',
          color: size === 'large' ? '#e0e7ff' : '#6b7280',
          textAlign: 'center',
          marginTop: '-4px'
        }}>
          {card.description}
        </span>
      )}
    </a>
  );
}

export default function MiniCardGroup({ cards }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      gridAutoRows: 'minmax(120px, auto)',
      gridAutoFlow: 'dense'
    }}>
      {cards.map((card, index) => (
        <MiniCard key={index} card={card} />
      ))}
    </div>
  );
}


// const cards = [
//     { label: 'Overview', href: '/overview', icon: '📊', size: 'large', description: 'Start here' },
//     { label: 'Calculators', href: '/calculators', icon: '🔢', size: 'medium' },
//     { label: 'Examples', href: '/examples', icon: '📝', size: 'medium' },
//     { label: 'Interactive Tools', href: '/tools', icon: '🛠️', size: 'large', description: 'Try them out' },
//     { label: 'Theory', href: '/theory', icon: '📚', size: 'medium' },
//     { label: 'Practice', href: '/practice', icon: '✏️', size: 'medium' },
//     { label: 'Resources', href: '/resources', icon: '🔗', size: 'medium' },
//     { label: 'Formulas', href: '/formulas', icon: '📐', size: 'medium' }
//   ];