
export const identitiesData={
    "Matrix Addition":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="400" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Matrix Addition: A + B = C
  </text>
  
  <!-- Matrix A -->
  <g id="matrixA">
    <!-- Left bracket -->
    <path d="M 50 70 L 40 70 L 40 180 L 50 180" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 140 70 L 150 70 L 150 180 L 140 180" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Matrix elements -->
    <text x="70" y="100" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₁₁</text>
    <text x="120" y="100" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₁₂</text>
    <text x="70" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₂₁</text>
    <text x="120" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₂₂</text>
    <text x="70" y="160" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₃₁</text>
    <text x="120" y="160" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₃₂</text>
    
    <!-- Matrix label -->
    <text x="95" y="200" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#e74c3c">A</text>
  </g>
  
  <!-- Plus sign -->
  <text x="200" y="130" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">+</text>
  
  <!-- Matrix B -->
  <g id="matrixB">
    <!-- Left bracket -->
    <path d="M 250 70 L 240 70 L 240 180 L 250 180" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 340 70 L 350 70 L 350 180 L 340 180" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Matrix elements -->
    <text x="270" y="100" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">b₁₁</text>
    <text x="320" y="100" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">b₁₂</text>
    <text x="270" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">b₂₁</text>
    <text x="320" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">b₂₂</text>
    <text x="270" y="160" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">b₃₁</text>
    <text x="320" y="160" text-anchor="middle" font-family="serif" font-size="16" fill="#3498db">b₃₂</text>
    
    <!-- Matrix label -->
    <text x="295" y="200" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#3498db">B</text>
  </g>
  
  <!-- Equals sign -->
  <text x="400" y="130" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">=</text>
  
  <!-- Matrix C (Result) -->
  <g id="matrixC">
    <!-- Left bracket -->
    <path d="M 450 70 L 440 70 L 440 180 L 450 180" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 610 70 L 620 70 L 620 180 L 610 180" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Matrix elements -->
    <text x="490" y="100" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">a₁₁ + b₁₁</text>
    <text x="570" y="100" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">a₁₂ + b₁₂</text>
    <text x="490" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">a₂₁ + b₂₁</text>
    <text x="570" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">a₂₂ + b₂₂</text>
    <text x="490" y="160" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">a₃₁ + b₃₁</text>
    <text x="570" y="160" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">a₃₂ + b₃₂</text>
    
    <!-- Matrix label -->
    <text x="530" y="200" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#27ae60">C</text>
  </g>
  
  <!-- General formula -->
  <rect x="50" y="250" width="700" height="80" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
  <text x="400" y="275" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
    General Form:
  </text>
  <text x="400" y="300" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    For matrices A and B of the same dimensions m×n:
  </text>
  <text x="400" y="320" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    C[i,j] = A[i,j] + B[i,j] for all i = 1,2,...,m and j = 1,2,...,n
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
      <polygon points="0 0, 10 3.5, 0 7" fill="#2ecc71"/>
    </marker>
    <marker id="arrowhead4" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#3498db"/>
    </marker>
    <marker id="arrowhead5" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6"/>
    </marker>
    <marker id="arrowhead6" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22"/>
    </marker>
  </defs>
  
  <!-- Row 1 arrows -->
  <!-- A[1,1] + B[1,1] → C[1,1] -->
  <path d="M 90 95 Q 200 45 470 95" stroke="#e74c3c" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead1)"/>
  <path d="M 290 95 Q 380 45 470 95" stroke="#e74c3c" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead1)"/>
  
  <!-- A[1,2] + B[1,2] → C[1,2] -->
  <path d="M 140 95 Q 230 45 550 95" stroke="#f39c12" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead2)"/>
  <path d="M 340 95 Q 430 45 550 95" stroke="#f39c12" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead2)"/>
  
  <!-- Row 2 arrows -->
  <!-- A[2,1] + B[2,1] → C[2,1] -->
  <path d="M 90 125 Q 200 85 470 125" stroke="#2ecc71" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead3)"/>
  <path d="M 290 125 Q 380 85 470 125" stroke="#2ecc71" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead3)"/>
  
  <!-- A[2,2] + B[2,2] → C[2,2] -->
  <path d="M 140 125 Q 230 85 550 125" stroke="#3498db" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead4)"/>
  <path d="M 340 125 Q 430 85 550 125" stroke="#3498db" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead4)"/>
  
  <!-- Row 3 arrows -->
  <!-- A[3,1] + B[3,1] → C[3,1] -->
  <path d="M 90 155 Q 200 125 470 155" stroke="#9b59b6" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead5)"/>
  <path d="M 290 155 Q 380 125 470 155" stroke="#9b59b6" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead5)"/>
  
  <!-- A[3,2] + B[3,2] → C[3,2] -->
  <path d="M 140 155 Q 230 125 550 155" stroke="#e67e22" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead6)"/>
  <path d="M 340 155 Q 430 125 550 155" stroke="#e67e22" stroke-width="2" 
        fill="none" marker-end="url(#arrowhead6)"/>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Matrix Scalar Multiplication":{
        svg:`<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="700" height="400" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="350" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Matrix Scalar Multiplication: k × A = B
  </text>
  
  <!-- Scalar k -->
  <text x="70" y="130" text-anchor="middle" font-family="serif" font-size="22" font-weight="bold" fill="#e67e22">k</text>
  
  <!-- Multiplication symbol -->
  <text x="120" y="130" text-anchor="middle" font-family="serif" font-size="22" fill="#2c3e50">×</text>
  
  <!-- Matrix A -->
  <g id="matrixA">
    <!-- Left bracket -->
    <path d="M 170 70 L 160 70 L 160 190 L 170 190" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 230 70 L 240 70 L 240 190 L 230 190" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Matrix elements -->
    <text x="185" y="100" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₁₁</text>
    <text x="215" y="100" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₁₂</text>
    <text x="185" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₂₁</text>
    <text x="215" y="130" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₂₂</text>
    <text x="185" y="160" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₃₁</text>
    <text x="215" y="160" text-anchor="middle" font-family="serif" font-size="16" fill="#e74c3c">a₃₂</text>
    
    <!-- Matrix label -->
    <text x="200" y="210" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#e74c3c">A</text>
  </g>
  
  <!-- Equals sign -->
  <text x="290" y="130" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">=</text>
  
  <!-- Matrix B (Result) -->
  <g id="matrixB">
    <!-- Left bracket -->
    <path d="M 340 70 L 330 70 L 330 190 L 340 190" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    <!-- Right bracket -->
    <path d="M 500 70 L 510 70 L 510 190 L 500 190" 
          stroke="#34495e" stroke-width="3" fill="none"/>
    
    <!-- Matrix elements -->
    <text x="380" y="100" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k × a₁₁</text>
    <text x="460" y="100" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k × a₁₂</text>
    <text x="380" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k × a₂₁</text>
    <text x="460" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k × a₂₂</text>
    <text x="380" y="160" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k × a₃₁</text>
    <text x="460" y="160" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">k × a₃₂</text>
    
    <!-- Matrix label -->
    <text x="420" y="210" text-anchor="middle" font-family="serif" font-size="18" font-weight="bold" fill="#27ae60">B</text>
  </g>
  
  <!-- General formula -->
  <rect x="50" y="250" width="600" height="80" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
  <text x="350" y="275" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
    General Form:
  </text>
  <text x="350" y="295" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    For scalar k and matrix A of dimensions m×n:
  </text>
  <text x="350" y="315" text-anchor="middle" font-family="serif" font-size="14" fill="#2c3e50">
    B[i,j] = k × A[i,j] for all i = 1,2,...,m and j = 1,2,...,n
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
      <polygon points="0 0, 10 3.5, 0 7" fill="#2ecc71"/>
    </marker>
    <marker id="arrowhead4" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#3498db"/>
    </marker>
    <marker id="arrowhead5" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6"/>
    </marker>
    <marker id="arrowhead6" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22"/>
    </marker>
  </defs>
  
  <!-- Row 1 arrows -->
  <!-- k and a₁₁ → ka₁₁ -->
  <path d="M 85 120 Q 260 80 360 95" stroke="#e74c3c" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead1)"/>
  <path d="M 200 95 Q 260 80 360 95" stroke="#e74c3c" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead1)"/>
  
  <!-- k and a₁₂ → ka₁₂ -->
  <path d="M 85 120 Q 310 80 440 95" stroke="#f39c12" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead2)"/>
  <path d="M 230 95 Q 310 80 440 95" stroke="#f39c12" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead2)"/>
  
  <!-- Row 2 arrows -->
  <!-- k and a₂₁ → ka₂₁ -->
  <path d="M 85 125 Q 260 110 360 125" stroke="#2ecc71" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead3)"/>
  <path d="M 200 125 Q 260 110 360 125" stroke="#2ecc71" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead3)"/>
  
  <!-- k and a₂₂ → ka₂₂ -->
  <path d="M 85 125 Q 310 110 440 125" stroke="#3498db" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead4)"/>
  <path d="M 230 125 Q 310 110 440 125" stroke="#3498db" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead4)"/>
  
  <!-- Row 3 arrows -->
  <!-- k and a₃₁ → ka₃₁ -->
  <path d="M 85 135 Q 260 140 360 155" stroke="#9b59b6" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead5)"/>
  <path d="M 200 155 Q 260 140 360 155" stroke="#9b59b6" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead5)"/>
  
  <!-- k and a₃₂ → ka₃₂ -->
  <path d="M 85 135 Q 310 140 440 155" stroke="#e67e22" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead6)"/>
  <path d="M 230 155 Q 310 140 440 155" stroke="#e67e22" stroke-width="0.5" 
        fill="none" marker-end="url(#arrowhead6)"/>
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