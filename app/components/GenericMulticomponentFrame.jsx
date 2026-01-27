/**
 * GenericMultiComponentFrame
 * 
 * A tabbed container component that renders multiple components/content with tab navigation.
 * Supports URL query parameter sync for shareable tab states.
 * 
 * @component
 * 
 * @param {string} [title] - Optional header title displayed above tabs
 * @param {string} [subtitle] - Optional subtitle displayed below title
 * @param {Array} components - Array of component configurations (see below)
 * @param {number} [initialActive=1] - ID of initially active component (1-indexed)
 * @param {Object} [explanations={}] - Object mapping component keys to explanation data passed as props
 * @param {string} [buttonMinWidth='180px'] - Minimum width for tab buttons
 * @param {string} [primaryColor='#007bff'] - Active tab color
 * @param {string} [paramName='tab'] - URL query parameter name for tab state
 * @param {string} [defaultSlug=null] - Default slug when no URL param present
 * 
 * @example
 * // Basic usage with components
 * <GenericMultiComponentFrame
 *   components={[
 *     { id: 1, name: 'Tab 1', component: MyComponent1 },
 *     { id: 2, name: 'Tab 2', component: MyComponent2 },
 *   ]}
 *   initialActive={1}
 * />
 * 
 * @example
 * // With URL slug support (creates URLs like ?table=2x2)
 * <GenericMultiComponentFrame
 *   components={[
 *     { id: 1, name: '2×2 Table', slug: '2x2', component: Table2x2 },
 *     { id: 2, name: '2×3 Table', slug: '2x3', component: Table2x3 },
 *   ]}
 *   paramName="table"
 *   defaultSlug="2x2"
 * />
 * 
 * @example
 * // With external links (renders as <a> instead of <button>)
 * <GenericMultiComponentFrame
 *   components={[
 *     { id: 1, name: 'Calculator', component: Calculator },
 *     { id: 2, name: 'Advanced Calculator', href: '/calculators/advanced' },
 *   ]}
 * />
 * 
 * @example
 * // With content instead of component
 * <GenericMultiComponentFrame
 *   components={[
 *     { id: 1, name: 'Info', content: 'This is plain text or processContent string' },
 *     { id: 2, name: 'Component', component: MyComponent },
 *   ]}
 * />
 * 
 * @example
 * // With explanations passed to components
 * const explanations = {
 *   'table2x3': { row1: 'Explanation...', row2: 'Explanation...' },
 *   'table3x3': { row1: 'Explanation...', row2: 'Explanation...' },
 * }
 * 
 * <GenericMultiComponentFrame
 *   components={[
 *     { id: 1, name: '2×3', key: 'table2x3', component: Table2x3 },
 *     { id: 2, name: '3×3', key: 'table3x3', component: Table3x3 },
 *   ]}
 *   explanations={explanations}
 * />
 * // Components receive: <Table2x3 explanations={explanations.table2x3} />
 * 
 * @example
 * // With custom props passed to component
 * <GenericMultiComponentFrame
 *   components={[
 *     { id: 1, name: 'Chart', component: Chart, props: { showLegend: true, color: 'blue' } },
 *   ]}
 * />
 * // Component receives: <Chart showLegend={true} color="blue" />
 * 
 * 
 * Component Configuration Object:
 * @typedef {Object} ComponentConfig
 * @property {number} [id] - Unique identifier (auto-generated from index+1 if not provided)
 * @property {string} name - Display name for the tab button
 * @property {string} [slug] - URL-friendly identifier for query param sync
 * @property {string} [key] - Key to lookup in explanations object
 * @property {React.Component} [component] - React component to render
 * @property {string} [href] - External link (renders tab as <a> tag)
 * @property {string} [content] - Plain content string (processed via processContent)
 * @property {Object} [props] - Additional props passed to component
 * 
 * 
 * URL Query Parameter Behavior:
 * - When components have `slug` property, URL syncs automatically
 * - paramName controls the query key (e.g., paramName="view" → ?view=slug)
 * - defaultSlug sets initial tab when no URL param exists
 * - Clicking tabs updates URL without page scroll
 * - Direct URL access (e.g., ?table=2x3) opens correct tab
 * 
 * 
 * Styling Notes:
 * - Tab buttons use CSS Grid with auto-fit for responsive layout
 * - buttonMinWidth controls minimum button size before wrapping
 * - Active tab uses primaryColor for background
 * - Disabled tabs (no component/href/content) show 50% opacity
 */
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