const explorerData = {
  // Frame config (static)
  frame: {
    title: "Set Theory Explorer",
    subtitle: "Interactive Venn Diagram Visualizations"
  },
  
  // Diagram defaults (shared by all scenarios)
  diagramDefaults: {
    width: 500,
    height: 470,
    backgroundColor: '#ffffff',
    showUniverse: true,
    showTooltip: true,
    showLegend: true,
    enableHover: true,
    
    universe: {
      fill: '#f9f9f9',
      stroke: '#cccccc',
      strokeWidth: 1,
      label: 'U',
      labelPosition: { x: 35, y: 45 },
      labelFontSize: 18,
      labelColor: '#666666',
      margin: 10
    },
    
    circles: {
      A: {
        cx: 180,
        cy: 200,
        r: 120,
        stroke: '#c0392b',
        strokeWidth: 1,
        label: 'A',
        labelPosition: { x: 110, y: 140 }
      },
      B: {
        cx: 320,
        cy: 200,
        r: 120,
        stroke: '#2980b9',
        strokeWidth: 1,
        label: 'B',
        labelPosition: { x: 390, y: 140 }
      }
    },
    
    // Base regions - default (dimmed) state
    baseRegions: {
      'outside': {
        fill: '#f0f0f0',
        opacity: 1,
        pattern: 'solid',
        tooltip: 'Neither A nor B'
      },
      'A-only': {
        fill: '#e74c3c',
        opacity: 0.25,
        pattern: 'solid',
        tooltip: 'Elements only in A'
      },
      'B-only': {
        fill: '#3498db',
        opacity: 0.25,
        pattern: 'solid',
        tooltip: 'Elements only in B'
      },
      'A∩B': {
        fill: '#9b59b6',
        opacity: 0.25,
        pattern: 'solid',
        tooltip: 'Elements in both A and B'
      }
    }
  },
  
  // All scenarios
  scenarios: [
    // ============================================
    // GROUP: Intersection & Union
    // ============================================
    {
      id: 'intersection',
      group: 'Intersection & Union',
      name: 'Intersection',
      symbol: 'A ∩ B',
      equivalences: [],
      definition: 'The intersection of sets A and B is the set containing all elements that are in both A and B simultaneously.',
      example: 'If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B = {3, 4}',
      properties: [
        'Commutative: A ∩ B = B ∩ A',
        'Associative: (A ∩ B) ∩ C = A ∩ (B ∩ C)',
        'Identity: A ∩ U = A',
        'Annihilator: A ∩ ∅ = ∅',
        'Idempotent: A ∩ A = A'
      ],
      highlightRegions: {
        'A∩B': {
          fill: '#9b59b6',
          opacity: 0.85,
          pattern: 'stripes',
          stripeColor: '#ffffff',
          stripeWidth: 3,
          stripeSpacing: 8,
          stripeAngle: 45
        }
      },
      legendItems: [
        { key: 'A∩B', label: 'A ∩ B (highlighted)' }
      ]
    },
    {
      id: 'union',
      group: 'Intersection & Union',
      name: 'Union',
      symbol: 'A ∪ B',
      equivalences: [],
      definition: 'The union of sets A and B is the set containing all elements that are in A, or in B, or in both.',
      example: 'If A = {1, 2, 3} and B = {3, 4, 5}, then A ∪ B = {1, 2, 3, 4, 5}',
      properties: [
        'Commutative: A ∪ B = B ∪ A',
        'Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)',
        'Identity: A ∪ ∅ = A',
        'Annihilator: A ∪ U = U',
        'Idempotent: A ∪ A = A'
      ],
      highlightRegions: {
        'A-only': {
          fill: '#e74c3c',
          opacity: 0.7,
          pattern: 'solid'
        },
        'B-only': {
          fill: '#3498db',
          opacity: 0.7,
          pattern: 'solid'
        },
        'A∩B': {
          fill: '#9b59b6',
          opacity: 0.7,
          pattern: 'solid'
        }
      },
      legendItems: [
        { key: 'A-only', label: 'Part of A' },
        { key: 'B-only', label: 'Part of B' },
        { key: 'A∩B', label: 'Overlap' }
      ]
    },
    
    // ============================================
    // GROUP: Exclusive Regions (placeholder - will add next)
    // ============================================
    
    // ============================================
    // GROUP: Complements (placeholder - will add next)
    // ============================================
    
    // ============================================
    // GROUP: Symmetric Difference (placeholder - will add next)
    // ============================================
    
    // ============================================
    // GROUP: De Morgan's Laws (placeholder - will add next)
    // ============================================
    
    // ============================================
    // GROUP: Subset Relationships (placeholder - will add next)
    // ============================================
  ]
};

export default explorerData;