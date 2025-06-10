

export const identitiesData={
    "Derivative Definition":{
        svg:`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#f8f9fa"/>
  
  <!-- Grid lines -->
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9ecef" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#grid)"/>
  
  <!-- Axes -->
  <line x1="80" y1="500" x2="720" y2="500" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)"/>
  <line x1="120" y1="520" x2="120" y2="80" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
    </marker>
  </defs>
  
  <!-- Axis labels -->
  <text x="730" y="520" font-family="Arial, sans-serif" font-size="16" font-style="italic">x</text>
  <text x="100" y="75" font-family="Arial, sans-serif" font-size="16" font-style="italic">y</text>
  
  <!-- Function curve (parabola) -->
  <path d="M 150 400 Q 220 320 300 250 Q 380 200 450 180 Q 520 170 600 200" stroke="#2563eb" stroke-width="3" fill="none"/>
  
  <!-- Two points on the curve -->
  <circle cx="300" cy="250" r="4" fill="#dc2626"/>
  <circle cx="450" cy="180" r="4" fill="#dc2626"/>
  
  <!-- Point labels -->
  <text x="285" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold">P</text>
  <text x="455" y="170" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Q</text>
  
  <!-- Secant line -->
  <line x1="250" y1="280" x2="500" y2="150" stroke="#059669" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Projections to x-axis -->
  <line x1="300" y1="250" x2="300" y2="500" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="450" y1="180" x2="450" y2="500" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Projections to y-axis -->
  <line x1="300" y1="250" x2="120" y2="250" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="450" y1="180" x2="120" y2="180" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Delta x (horizontal distance) -->
  <line x1="300" y1="480" x2="450" y2="480" stroke="#7c3aed" stroke-width="2"/>
  <line x1="300" y1="475" x2="300" y2="485" stroke="#7c3aed" stroke-width="2"/>
  <line x1="450" y1="475" x2="450" y2="485" stroke="#7c3aed" stroke-width="2"/>
  <text x="365" y="470" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#7c3aed">Δx</text>
  
  <!-- Delta y (vertical distance) -->
  <line x1="100" y1="250" x2="100" y2="180" stroke="#dc2626" stroke-width="2"/>
  <line x1="95" y1="250" x2="105" y2="250" stroke="#dc2626" stroke-width="2"/>
  <line x1="95" y1="180" x2="105" y2="180" stroke="#dc2626" stroke-width="2"/>
  <text x="75" y="220" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">Δy</text>
  
  <!-- Right triangle showing the slope -->
  <path d="M 300 250 L 450 250 L 450 180 Z" stroke="#f59e0b" stroke-width="2" fill="#fef3c7" fill-opacity="0.3"/>
  
  <!-- Coordinate labels -->
  <text x="285" y="520" font-family="Arial, sans-serif" font-size="12">x</text>
  <text x="435" y="520" font-family="Arial, sans-serif" font-size="12">x + Δx</text>
  <text x="75" y="255" font-family="Arial, sans-serif" font-size="12">f(x)</text>
  <text x="50" y="185" font-family="Arial, sans-serif" font-size="12">f(x + Δx)</text>
  
  <!-- Title -->
  <text x="400" y="40" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">Derivative Definition</text>
  
  <!-- Legend -->
  <rect x="520" y="320" width="220" height="100" fill="white" stroke="#d1d5db" stroke-width="1" rx="5"/>
  <line x1="530" y1="340" x2="550" y2="340" stroke="#2563eb" stroke-width="3"/>
  <text x="560" y="345" font-family="Arial, sans-serif" font-size="12">Function f(x)</text>
  <line x1="530" y1="360" x2="550" y2="360" stroke="#059669" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="560" y="365" font-family="Arial, sans-serif" font-size="12">Secant line</text>
  <line x1="530" y1="380" x2="550" y2="380" stroke="#7c3aed" stroke-width="2"/>
  <text x="560" y="385" font-family="Arial, sans-serif" font-size="12">Δx (change in x)</text>
  <line x1="530" y1="400" x2="550" y2="400" stroke="#dc2626" stroke-width="2"/>
  <text x="560" y="405" font-family="Arial, sans-serif" font-size="12">Δy (change in y)</text>
</svg>

`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "identity name":{
        svg:``,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    }
}