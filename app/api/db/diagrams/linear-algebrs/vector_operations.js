
export const identitiesData={
    "Vectors Addition":{
        svg:`<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="700" height="300" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="350" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Vector Addition: u + v = w
  </text>
  
  <!-- Vector u -->
  <g id="vectorU">
    <!-- Left bracket -->
    <path d="M 50 70 L 40 70 L 40 140 L 50 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 90 70 L 100 70 L 100 140 L 90 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="70" y="90" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">u₁</text>
    <text x="70" y="110" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">u₂</text>
    <text x="70" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">u₃</text>
    
    <!-- Vector label -->
    <text x="70" y="160" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#e74c3c">u</text>
  </g>
  
  <!-- Plus sign -->
  <text x="150" y="105" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">+</text>
  
  <!-- Vector v -->
  <g id="vectorV">
    <!-- Left bracket -->
    <path d="M 200 70 L 190 70 L 190 140 L 200 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 240 70 L 250 70 L 250 140 L 240 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="220" y="90" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₁</text>
    <text x="220" y="110" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₂</text>
    <text x="220" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₃</text>
    
    <!-- Vector label -->
    <text x="220" y="160" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#3498db">v</text>
  </g>
  
  <!-- Equals sign -->
  <text x="300" y="105" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">=</text>
  
  <!-- Vector w (Result) -->
  <g id="vectorW">
    <!-- Left bracket -->
    <path d="M 350 70 L 340 70 L 340 140 L 350 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 450 70 L 460 70 L 460 140 L 450 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="400" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">u₁ + v₁</text>
    <text x="400" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">u₂ + v₂</text>
    <text x="400" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">u₃ + v₃</text>
    
    <!-- Vector label -->
    <text x="400" y="160" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#27ae60">w</text>
  </g>
  
  <!-- General formula -->
  <rect x="50" y="190" width="600" height="70" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
  <text x="350" y="215" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
    General Form:
  </text>
  <text x="350" y="235" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    For vectors u and v of the same dimension n:
  </text>
  <text x="350" y="250" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    w[i] = u[i] + v[i] for all i = 1,2,...,n
  </text>
  
  <!-- Arrows showing element-wise addition -->
  <defs>
    <marker id="arrowhead1" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
    </marker>
    <marker id="arrowhead2" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#f39c12"/>
    </marker>
    <marker id="arrowhead3" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6"/>
    </marker>
  </defs>
  
  <!-- Element 1 arrows -->
  <path d="M 85 85 Q 130 60 375 85" stroke="#e74c3c" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead1)"/>
  <path d="M 235 85 Q 280 60 375 85" stroke="#e74c3c" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead1)"/>
  
  <!-- Element 2 arrows -->
  <path d="M 85 105 Q 130 85 375 105" stroke="#f39c12" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead2)"/>
  <path d="M 235 105 Q 280 85 375 105" stroke="#f39c12" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead2)"/>
  
  <!-- Element 3 arrows -->
  <path d="M 85 125 Q 130 110 375 125" stroke="#9b59b6" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead3)"/>
  <path d="M 235 125 Q 280 110 375 125" stroke="#9b59b6" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead3)"/>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Vector Scalar Multiplication":{
        svg:`<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="300" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="300" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Scalar Multiplication: k · v = w
  </text>
  
  <!-- Scalar k -->
  <text x="80" y="105" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#e67e22">k</text>
  
  <!-- Multiplication symbol -->
  <text x="120" y="105" text-anchor="middle" font-family="serif" font-size="20" fill="#2c3e50">·</text>
  
  <!-- Vector v -->
  <g id="vectorV">
    <!-- Left bracket -->
    <path d="M 160 70 L 150 70 L 150 140 L 160 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 200 70 L 210 70 L 210 140 L 200 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="180" y="90" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₁</text>
    <text x="180" y="110" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₂</text>
    <text x="180" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₃</text>
    
    <!-- Vector label -->
    <text x="180" y="160" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#3498db">v</text>
  </g>
  
  <!-- Equals sign -->
  <text x="260" y="105" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">=</text>
  
  <!-- Result vector w -->
  <g id="vectorW">
    <!-- Left bracket -->
    <path d="M 310 70 L 300 70 L 300 140 L 310 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 400 70 L 410 70 L 410 140 L 400 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="355" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k · v₁</text>
    <text x="355" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k · v₂</text>
    <text x="355" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k · v₃</text>
    
    <!-- Vector label -->
    <text x="355" y="160" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#27ae60">w</text>
  </g>
  
  <!-- General formula -->
  <rect x="50" y="190" width="500" height="70" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
  <text x="300" y="215" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
    General Form:
  </text>
  <text x="300" y="235" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    For scalar k and vector v of dimension n:
  </text>
  <text x="300" y="250" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    w[i] = k · v[i] for all i = 1,2,...,n
  </text>
  
  <!-- Arrows showing scalar multiplication -->
  <defs>
    <marker id="arrowhead1" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
    </marker>
    <marker id="arrowhead2" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#f39c12"/>
    </marker>
    <marker id="arrowhead3" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6"/>
    </marker>
  </defs>
  
  <!-- k and v₁ to result -->
  <path d="M 95 95 Q 240 60 340 85" stroke="#e74c3c" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead1)"/>
  <path d="M 195 85 Q 240 60 340 85" stroke="#e74c3c" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead1)"/>
  
  <!-- k and v₂ to result -->
  <path d="M 95 105 Q 240 80 340 105" stroke="#f39c12" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead2)"/>
  <path d="M 195 105 Q 240 80 340 105" stroke="#f39c12" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead2)"/>
  
  <!-- k and v₃ to result -->
  <path d="M 95 115 Q 240 100 340 125" stroke="#9b59b6" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead3)"/>
  <path d="M 195 125 Q 240 100 340 125" stroke="#9b59b6" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead3)"/>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Dot Product":{
        svg:`<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="350" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Vector Dot Product: u · v = scalar
  </text>
  
  <!-- Vector u -->
  <g id="vectorU">
    <!-- Left bracket -->
    <path d="M 50 70 L 40 70 L 40 140 L 50 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 90 70 L 100 70 L 100 140 L 90 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="70" y="90" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">u₁</text>
    <text x="70" y="110" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">u₂</text>
    <text x="70" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">u₃</text>
    
    <!-- Vector label -->
    <text x="70" y="160" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#e74c3c">u</text>
  </g>
  
  <!-- Dot symbol -->
  <circle cx="150" cy="105" r="3" fill="#2c3e50"/>
  
  <!-- Vector v -->
  <g id="vectorV">
    <!-- Left bracket -->
    <path d="M 200 70 L 190 70 L 190 140 L 200 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 240 70 L 250 70 L 250 140 L 240 140" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="220" y="90" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₁</text>
    <text x="220" y="110" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₂</text>
    <text x="220" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">v₃</text>
    
    <!-- Vector label -->
    <text x="220" y="160" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#3498db">v</text>
  </g>
  
  <!-- Equals sign -->
  <text x="300" y="110" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">=</text>
  
  <!-- Multiplication terms -->
  <g id="products">
    <text x="360" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">u₁</text>
    <text x="380" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">×</text>
    <text x="400" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#3498db">v₁</text>
    
    <text x="430" y="90" text-anchor="middle" font-family="serif" font-size="16" fill="#2c3e50">+</text>
    
    <text x="460" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">u₂</text>
    <text x="480" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">×</text>
    <text x="500" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#3498db">v₂</text>
    
    <text x="530" y="90" text-anchor="middle" font-family="serif" font-size="16" fill="#2c3e50">+</text>
    
    <text x="560" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">u₃</text>
    <text x="580" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">×</text>
    <text x="600" y="90" text-anchor="middle" font-family="serif" font-size="14" fill="#3498db">v₃</text>
  </g>
  
  <!-- Result -->
  <rect x="320" y="120" width="320" height="40" fill="#f1c40f" fill-opacity="0.3" stroke="#f39c12" stroke-width="2" rx="5"/>
  <text x="480" y="145" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#d68910">
    u₁v₁ + u₂v₂ + u₃v₃ = scalar result
  </text>
  
  <!-- General formula -->
  <rect x="50" y="200" width="700" height="90" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
  <text x="400" y="225" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
    General Form:
  </text>
  <text x="400" y="245" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    For vectors u and v of the same dimension n:
  </text>
  <text x="400" y="265" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    u · v = Σ(i=1 to n) uᵢvᵢ = u₁v₁ + u₂v₂ + ... + uₙvₙ
  </text>
  <text x="400" y="280" text-anchor="middle" font-family="serif" font-size="12" fill="#7f8c8d">
    Result is a scalar (single number), not a vector
  </text>
  
  <!-- Arrows showing multiplication and addition flow -->
  <defs>
    <marker id="arrowhead1" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
    </marker>
    <marker id="arrowhead2" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#f39c12"/>
    </marker>
    <marker id="arrowhead3" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6"/>
    </marker>
  </defs>
  
  <!-- u₁ and v₁ to first product -->
  <path d="M 85 85 Q 320 50 360 85" stroke="#e74c3c" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead1)"/>
  <path d="M 235 85 Q 270 50 360 85" stroke="#e74c3c" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead1)"/>
  
  <!-- u₂ and v₂ to second product -->
  <path d="M 85 105 Q 320 70 460 85" stroke="#f39c12" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead2)"/>
  <path d="M 235 105 Q 270 70 460 85" stroke="#f39c12" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead2)"/>
  
  <!-- u₃ and v₃ to third product -->
  <path d="M 85 125 Q 320 90 560 85" stroke="#9b59b6" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead3)"/>
  <path d="M 235 125 Q 270 90 560 85" stroke="#9b59b6" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead3)"/>
  
  <!-- Arrow from products to final sum -->
  <path d="M 480 95 Q 480 105 480 120" stroke="#d68910" stroke-width="3" 
        fill="none" marker-end="url(#arrowhead2)"/>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Vector Scalar Multiplication":{
        svg:`<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="300" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="300" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Scalar Multiplication: k · v = w
  </text>
  
  <!-- Scalar k -->
  <text x="80" y="105" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#e67e22">k</text>
  
  <!-- Multiplication symbol -->
  <text x="120" y="105" text-anchor="middle" font-family="serif" font-size="20" fill="#2c3e50">×</text>
  
  <!-- Vector v -->
  <g id="vectorV">
    <!-- Left bracket -->
    <path d="M 160 60 L 150 60 L 150 150 L 160 150" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 210 60 L 220 60 L 220 150 L 210 150" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="185" y="85" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">v₁</text>
    <text x="185" y="110" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">v₂</text>
    <text x="185" y="135" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">v₃</text>
    
    <!-- Vector label -->
    <text x="185" y="170" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#3498db">v</text>
  </g>
  
  <!-- Equals sign -->
  <text x="260" y="105" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">=</text>
  
  <!-- Result vector w -->
  <g id="vectorW">
    <!-- Left bracket -->
    <path d="M 320 60 L 310 60 L 310 150 L 320 150" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 420 60 L 430 60 L 430 150 L 420 150" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="370" y="85" text-anchor="middle" font-family="serif" font-size="16" fill="#27ae60">k × v₁</text>
    <text x="370" y="110" text-anchor="middle" font-family="serif" font-size="16" fill="#27ae60">k × v₂</text>
    <text x="370" y="135" text-anchor="middle" font-family="serif" font-size="16" fill="#27ae60">k × v₃</text>
    
    <!-- Vector label -->
    <text x="370" y="170" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#27ae60">w</text>
  </g>
  
  <!-- General formula -->
  <rect x="50" y="190" width="500" height="70" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
  <text x="300" y="215" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
    General Form:
  </text>
  <text x="300" y="235" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    For scalar k and vector v of dimension n:
  </text>
  <text x="300" y="250" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    w[i] = k · v[i] for all i = 1,2,...,n
  </text>
  
  <!-- Arrows showing scalar multiplication -->
  <defs>
    <marker id="arrowhead1" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
    </marker>
    <marker id="arrowhead2" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#f39c12"/>
    </marker>
    <marker id="arrowhead3" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6"/>
    </marker>
  </defs>
  
  <!-- k and v₁ to result -->
  <path d="M 95 95 Q 240 60 350 80" stroke="#e74c3c" stroke-width="1" 
        fill="none" marker-end="url(#arrowhead1)"/>
  <path d="M 205 80 Q 240 60 350 80" stroke="#e74c3c" stroke-width="1" 
        fill="none" marker-end="url(#arrowhead1)"/>
  
  <!-- k and v₂ to result -->
  <path d="M 95 105 Q 240 80 350 105" stroke="#f39c12" stroke-width="1" 
        fill="none" marker-end="url(#arrowhead2)"/>
  <path d="M 205 105 Q 240 80 350 105" stroke="#f39c12" stroke-width="1" 
        fill="none" marker-end="url(#arrowhead2)"/>
  
  <!-- k and v₃ to result -->
  <path d="M 95 115 Q 240 100 350 130" stroke="#9b59b6" stroke-width="1" 
        fill="none" marker-end="url(#arrowhead3)"/>
  <path d="M 205 130 Q 240 100 350 130" stroke="#9b59b6" stroke-width="1" 
        fill="none" marker-end="url(#arrowhead3)"/>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Vector Scalar Multiplication Improved":{
        svg:`<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="600" height="300" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="300" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Scalar Multiplication: k · v = w
  </text>
  
  <!-- Scalar k -->
  <text x="80" y="105" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#e67e22">k</text>
  
  <!-- Multiplication symbol -->
  <text x="120" y="105" text-anchor="middle" font-family="serif" font-size="20" fill="#2c3e50">×</text>
  
  <!-- Vector v -->
  <g id="vectorV">
    <!-- Left bracket -->
    <path d="M 160 60 L 150 60 L 150 150 L 160 150" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 210 60 L 220 60 L 220 150 L 210 150" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="185" y="85" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">v₁</text>
    <text x="185" y="110" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">v₂</text>
    <text x="185" y="135" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">v₃</text>
    
    <!-- Vector label -->
    <text x="185" y="170" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#3498db">v</text>
  </g>
  
  <!-- Equals sign -->
  <text x="260" y="105" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">=</text>
  
  <!-- Result vector w -->
  <g id="vectorW">
    <!-- Left bracket -->
    <path d="M 320 60 L 310 60 L 310 150 L 320 150" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 420 60 L 430 60 L 430 150 L 420 150" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Vector elements -->
    <text x="370" y="85" text-anchor="middle" font-family="serif" font-size="16" fill="#27ae60">k × v₁</text>
    <text x="370" y="110" text-anchor="middle" font-family="serif" font-size="16" fill="#27ae60">k × v₂</text>
    <text x="370" y="135" text-anchor="middle" font-family="serif" font-size="16" fill="#27ae60">k × v₃</text>
    
    <!-- Vector label -->
    <text x="370" y="170" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#27ae60">w</text>
  </g>
  
  <!-- General formula -->
  <rect x="50" y="190" width="500" height="70" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
  <text x="300" y="215" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
    General Form:
  </text>
  <text x="300" y="235" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    For scalar k and vector v of dimension n:
  </text>
  <text x="300" y="250" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    w[i] = k · v[i] for all i = 1,2,...,n
  </text>
  
  <!-- Arrows showing scalar multiplication -->
  <defs>
    <marker id="arrowhead1" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
    </marker>
    <marker id="arrowhead2" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#f39c12"/>
    </marker>
    <marker id="arrowhead3" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6"/>
    </marker>
  </defs>
  
  <!-- k and v₁ to result -->
  <path d="M 95 95 Q 240 60 350 80" stroke="#e74c3c" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead1)"/>
  <path d="M 205 80 Q 240 60 350 80" stroke="#e74c3c" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead1)"/>
  
  <!-- k and v₂ to result -->
  <path d="M 95 105 Q 240 80 350 105" stroke="#f39c12" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead2)"/>
  <path d="M 205 105 Q 240 80 350 105" stroke="#f39c12" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead2)"/>
  
  <!-- k and v₃ to result -->
  <path d="M 95 115 Q 240 100 350 130" stroke="#9b59b6" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead3)"/>
  <path d="M 205 130 Q 240 100 350 130" stroke="#9b59b6" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead3)"/>
</svg>`,
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