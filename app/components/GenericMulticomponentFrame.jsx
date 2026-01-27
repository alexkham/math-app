
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { processContent } from '../utils/contentProcessor'

export default function GenericMultiComponentFrame({
  title,
  subtitle,
  components = [],
  initialActive = 1,
  explanations = {},
  buttonMinWidth = '180px',
  primaryColor = '#007bff',
  paramName = 'tab',
  defaultSlug = null
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Check if any component has slug property
  const hasSlugs = components.some(c => c.slug)
  
  // Determine initial active component
  const getInitialActive = () => {
    if (hasSlugs) {
      const slugParam = searchParams.get(paramName)
      if (slugParam) {
        const foundComponent = components.find(c => c.slug === slugParam)
        if (foundComponent) return foundComponent.id || components.indexOf(foundComponent) + 1
      }
      if (defaultSlug) {
        const defaultComponent = components.find(c => c.slug === defaultSlug)
        if (defaultComponent) return defaultComponent.id || components.indexOf(defaultComponent) + 1
      }
    }
    return initialActive
  }
  
  const [activeComponent, setActiveComponent] = useState(getInitialActive)
  
  useEffect(() => {
    const validComponent = getInitialActive()
    setActiveComponent(validComponent)
  }, [searchParams, components.length])

  const handleComponentChange = (component) => {
    const componentId = component.id || components.indexOf(component) + 1
    setActiveComponent(componentId)
    
    // Update URL if slugs are being used
    if (hasSlugs && component.slug) {
      const currentParams = new URLSearchParams(searchParams.toString())
      currentParams.set(paramName, component.slug)
      router.push(`?${currentParams.toString()}`, { scroll: false })
    }
  }

  const activeComponentData = components.find(c => {
    const compId = c.id || components.indexOf(c) + 1
    return compId === activeComponent
  })
  
  const ActiveComponent = activeComponentData?.component
  const currentExplanation = explanations[activeComponentData?.key]
  const content = activeComponentData?.content
  const componentProps = activeComponentData?.props || {}
  
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1600px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {(title || subtitle) && (
        <header style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          {title && (
            <h1 style={{
              color: '#333',
              marginBottom: '10px'
            }}>{title}</h1>
          )}
          {subtitle && (
            <p style={{
              color: '#666',
              fontSize: '16px'
            }}>{subtitle}</p>
          )}
        </header>
      )}
      
      <nav style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${buttonMinWidth}, 1fr))`,
        gap: '10px',
        marginBottom: '0px'
      }}>
        {components.map((component, index) => {
          const componentId = component.id || index + 1
          const isActive = activeComponent === componentId
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
              <a key={componentId} href={component.href} style={commonStyle}>
                {component.name}
              </a>
            )
          }
          
          return (
            <button 
              key={componentId} 
              onClick={() => handleComponentChange(component)} 
              style={commonStyle} 
              disabled={!component.component && !component.content}
            >
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