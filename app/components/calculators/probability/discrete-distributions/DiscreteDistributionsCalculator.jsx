import { useState, useEffect } from 'react'

// Placeholder components for each distribution type
const DiscreteUniform = () => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '30px'
  }}>
    <h2 style={{ color: '#333', marginBottom: '20px' }}>Discrete Uniform Distribution</h2>
    <p style={{ color: '#666', marginBottom: '20px' }}>Equal probability for finite outcomes</p>
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#666' }}>Calculator coming soon!</p>
    </div>
  </div>
)

const Binomial = () => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '30px'
  }}>
    <h2 style={{ color: '#333', marginBottom: '20px' }}>Binomial Distribution</h2>
    <p style={{ color: '#666', marginBottom: '20px' }}>Successes in n trials with probability p each</p>
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#666' }}>Calculator coming soon!</p>
    </div>
  </div>
)

const Geometric = () => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '30px'
  }}>
    <h2 style={{ color: '#333', marginBottom: '20px' }}>Geometric Distribution</h2>
    <p style={{ color: '#666', marginBottom: '20px' }}>Trials until first success (probability p)</p>
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#666' }}>Calculator coming soon!</p>
    </div>
  </div>
)

const Poisson = () => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '30px'
  }}>
    <h2 style={{ color: '#333', marginBottom: '20px' }}>Poisson Distribution</h2>
    <p style={{ color: '#666', marginBottom: '20px' }}>Rare events over time interval (rate λ)</p>
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#666' }}>Calculator coming soon!</p>
    </div>
  </div>
)

const NegativeBinomial = () => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '30px'
  }}>
    <h2 style={{ color: '#333', marginBottom: '20px' }}>Negative Binomial Distribution</h2>
    <p style={{ color: '#666', marginBottom: '20px' }}>Trials until r-th success (generalization of geometric)</p>
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#666' }}>Calculator coming soon!</p>
    </div>
  </div>
)

const Hypergeometric = () => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '30px'
  }}>
    <h2 style={{ color: '#333', marginBottom: '20px' }}>Hypergeometric Distribution</h2>
    <p style={{ color: '#666', marginBottom: '20px' }}>Sampling without replacement from finite population</p>
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#666' }}>Calculator coming soon!</p>
    </div>
  </div>
)

export default function DiscreteDistributionsCalculator({ explanations = {}, initialDistribution = 1 }) {
  const [activeDistribution, setActiveDistribution] = useState(initialDistribution)
  
  useEffect(() => {
    const validDistribution = initialDistribution >= 1 && initialDistribution <= 6 ? initialDistribution : 1
    setActiveDistribution(validDistribution)
  }, [initialDistribution])
  
  const distributions = [
    { id: 1, name: 'Discrete Uniform', component: DiscreteUniform, key: 'DiscreteUniform' },
    { id: 2, name: 'Binomial', component: Binomial, key: 'Binomial' },
    { id: 3, name: 'Geometric', component: Geometric, key: 'Geometric' },
    { id: 4, name: 'Poisson', component: Poisson, key: 'Poisson' },
    { id: 5, name: 'Negative Binomial', component: NegativeBinomial, key: 'NegativeBinomial' },
    { id: 6, name: 'Hypergeometric', component: Hypergeometric, key: 'Hypergeometric' },
  ]
  
  const activeDistributionData = distributions.find(d => d.id === activeDistribution)
  const ActiveComponent = activeDistributionData?.component
  const currentExplanation = explanations[activeDistributionData?.key]
  
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          color: '#333',
          marginBottom: '10px'
        }}>Discrete Random Variable Distributions</h1>
        <p style={{
          color: '#666',
          fontSize: '16px'
        }}>Calculate probabilities and statistics for discrete distributions</p>
      </header>
      
      <nav style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '10px',
        marginBottom: '40px'
      }}>
        {distributions.map((distribution) => (
          <button
            key={distribution.id}
            onClick={() => setActiveDistribution(distribution.id)}
            style={{
              padding: '12px 16px',
              border: activeDistribution === distribution.id ? '2px solid #007bff' : '2px solid #ddd',
              borderRadius: '8px',
              backgroundColor: activeDistribution === distribution.id ? '#007bff' : '#fff',
              color: activeDistribution === distribution.id ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            {distribution.name}
          </button>
        ))}
      </nav>
      
      <main>
        {ActiveComponent ? (
          currentExplanation ? 
            <ActiveComponent explanations={currentExplanation} /> : 
            <ActiveComponent />
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <p style={{ color: '#666' }}>This distribution is coming soon!</p>
          </div>
        )}
      </main>
    </div>
  )
}