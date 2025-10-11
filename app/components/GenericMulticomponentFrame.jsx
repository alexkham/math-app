
import { useState, useEffect } from 'react'
import { processContent } from '../utils/contentProcessor'

export default function GenericMultiComponentFrame({
  title,
  subtitle,
  components = [],
  initialActive = 1,
  explanations = {},
  buttonMinWidth = '180px',
  primaryColor = '#007bff'
}) {
  const [activeComponent, setActiveComponent] = useState(initialActive)
  
  useEffect(() => {
    const validComponent = initialActive >= 1 && initialActive <= components.length ? initialActive : 1
    setActiveComponent(validComponent)
  }, [initialActive, components.length])

  const activeComponentData = components.find(c => c.id === activeComponent)
  const ActiveComponent = activeComponentData?.component
  const currentExplanation = explanations[activeComponentData?.key]
  const content = activeComponentData?.content
  const componentProps = activeComponentData?.props || {}
  
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
        }}>{title}</h1>
        <p style={{
          color: '#666',
          fontSize: '16px'
        }}>{subtitle}</p>
      </header>
      
      <nav style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${buttonMinWidth}, 1fr))`,
        gap: '10px',
        marginBottom: '0px'
      }}>
        {components.map((component) => {
          const isActive = activeComponent === component.id
          const commonStyle = {
            padding: '12px 16px',
            border: isActive ? `2px solid ${primaryColor}` : '2px solid #ddd',
            borderRadius: '8px',
            backgroundColor: isActive ? primaryColor : '#fff',
            color: isActive ? '#fff' : '#333',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            opacity: (component.component || component.href || component.content) ? 1 : 0.5,
            textDecoration: 'none',
            display: 'block',
            textAlign: 'center'
          }
          
          if (component.href) {
            return (
              <a key={component.id} href={component.href} style={commonStyle}>
                {component.name}
              </a>
            )
          }
          
          return (
            <button key={component.id} onClick={() => setActiveComponent(component.id)} style={commonStyle} disabled={!component.component && !component.content}>
              {component.name}
            </button>
          )
        })}
      </nav>
      
      <main>
        {ActiveComponent ? (
          currentExplanation ? 
            <ActiveComponent explanations={currentExplanation} {...componentProps} /> : 
            <ActiveComponent {...componentProps} />
        ) : content ? (
          <div>{processContent(content)}</div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <p style={{ color: '#666' }}>This component is coming soon!</p>
          </div>
        )}
      </main>
    </div>
  )
}