export default function BasicList() {
  const items = [
    'Linear Equations and Inequalities',
    'Quadratic Functions and Parabolas',
    'Polynomial Functions and Factoring',
    'Exponential and Logarithmic Functions',
    'Trigonometric Functions and Identities'
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
        Algebra Topics
      </h2>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {items.map((item, index) => (
          <li key={index} style={{
            padding: '16px 20px',
            marginBottom: '8px',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '16px',
            color: '#334155',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#eff6ff';
            e.currentTarget.style.borderColor = '#3b82f6';
            e.currentTarget.style.transform = 'translateX(4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f8fafc';
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.transform = 'translateX(0)';
          }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}