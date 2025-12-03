export default function NumberedList() {
  const steps = [
    {
      title: 'Define the Problem',
      description: 'Clearly state what needs to be calculated or proven'
    },
    {
      title: 'Identify Given Information',
      description: 'List all known values and relationships'
    },
    {
      title: 'Choose the Method',
      description: 'Select the appropriate formula or technique'
    },
    {
      title: 'Perform Calculations',
      description: 'Work through the solution step by step'
    },
    {
      title: 'Verify the Result',
      description: 'Check if the answer makes sense in context'
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
        Problem-Solving Steps
      </h2>
      <ol style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        counterReset: 'step-counter'
      }}>
        {steps.map((step, index) => (
          <li key={index} style={{
            padding: '20px',
            marginBottom: '12px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            position: 'relative',
            paddingLeft: '70px',
            counterIncrement: 'step-counter',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#3b82f6';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '20px',
              width: '36px',
              height: '36px',
              backgroundColor: '#1e40af',
              color: '#ffffff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              {index + 1}
            </div>
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e3a8a',
                marginBottom: '6px',
                margin: 0
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#64748b',
                margin: 0,
                marginTop: '6px'
              }}>
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}