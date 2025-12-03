export default function NestedList() {
  const topics = [
    {
      title: 'Algebra',
      items: [
        'Linear Equations',
        'Quadratic Functions',
        'Polynomial Operations'
      ]
    },
    {
      title: 'Calculus',
      items: [
        'Derivatives and Rates of Change',
        'Integration Techniques',
        'Applications of Integrals'
      ]
    },
    {
      title: 'Probability',
      items: [
        'Sample Spaces and Events',
        'Probability Distributions',
        'Expected Value and Variance'
      ]
    }
  ];

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#1e3a8a',
        marginBottom: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        Mathematics Curriculum
      </h2>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {topics.map((topic, index) => (
          <li key={index} style={{
            marginBottom: '20px'
          }}>
            <div style={{
              padding: '16px 20px',
              backgroundColor: '#1e40af',
              color: '#ffffff',
              borderRadius: '6px',
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '8px',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              {topic.title}
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              paddingLeft: '20px'
            }}>
              {topic.items.map((item, itemIndex) => (
                <li key={itemIndex} style={{
                  padding: '12px 16px',
                  marginBottom: '6px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderLeft: '3px solid #3b82f6',
                  borderRadius: '4px',
                  fontSize: '15px',
                  color: '#475569',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#eff6ff';
                  e.currentTarget.style.borderLeftColor = '#1e40af';
                  e.currentTarget.style.paddingLeft = '20px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderLeftColor = '#3b82f6';
                  e.currentTarget.style.paddingLeft = '16px';
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '-20px',
                    color: '#3b82f6',
                    fontWeight: '600'
                  }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}