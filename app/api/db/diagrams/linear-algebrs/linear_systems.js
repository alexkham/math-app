
export const identitiesData={
    "Gaussian Elimination":{
        svg:`<svg viewBox="0 0 900 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="700" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="450" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Gaussian Elimination: Solving Ax = b
  </text>
  
  <!-- Step 1: Original System -->
  <g id="step1">
    <text x="100" y="70" text-anchor="start" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
      Step 1: Original System
    </text>
    
    <!-- Augmented Matrix -->
    <g id="originalMatrix">
      <!-- Left bracket -->
      <path d="M 80 90 L 70 90 L 70 160 L 80 160" 
            stroke="#34495e" stroke-width="3" fill="none"/>
      <!-- Right bracket -->
      <path d="M 270 90 L 280 90 L 280 160 L 270 160" 
            stroke="#34495e" stroke-width="3" fill="none"/>
      
      <!-- Matrix elements -->
      <text x="100" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">2</text>
      <text x="130" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">1</text>
      <text x="160" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">-1</text>
      <text x="210" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#3498db">8</text>
      
      <text x="100" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">-3</text>
      <text x="130" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">-1</text>
      <text x="160" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">2</text>
      <text x="210" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#3498db">-11</text>
      
      <text x="100" y="150" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">-2</text>
      <text x="130" y="150" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">1</text>
      <text x="160" y="150" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">2</text>
      <text x="210" y="150" text-anchor="middle" font-family="serif" font-size="14" fill="#3498db">-3</text>
      
      <!-- Separator line -->
      <line x1="185" y1="95" x2="185" y2="155" stroke="#6c757d" stroke-width="1" stroke-dasharray="2,2"/>
    </g>
    
    <!-- System representation -->
    <text x="320" y="110" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      2x₁ + x₂ - x₃ = 8
    </text>
    <text x="320" y="130" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      -3x₁ - x₂ + 2x₃ = -11
    </text>
    <text x="320" y="150" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      -2x₁ + x₂ + 2x₃ = -3
    </text>
  </g>
  
  <!-- Arrow -->
  <path d="M 450 125 L 500 125" stroke="#e67e22" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Step 2: After Row Operations -->
  <g id="step2">
    <text x="550" y="70" text-anchor="start" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
      Step 2: Forward Elimination
    </text>
    
    <!-- Modified Matrix -->
    <g id="modifiedMatrix">
      <!-- Left bracket -->
      <path d="M 530 90 L 520 90 L 520 160 L 530 160" 
            stroke="#34495e" stroke-width="3" fill="none"/>
      <!-- Right bracket -->
      <path d="M 720 90 L 730 90 L 730 160 L 720 160" 
            stroke="#34495e" stroke-width="3" fill="none"/>
      
      <!-- Matrix elements -->
      <text x="550" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">2</text>
      <text x="580" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">1</text>
      <text x="610" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#e74c3c">-1</text>
      <text x="660" y="110" text-anchor="middle" font-family="serif" font-size="14" fill="#3498db">8</text>
      
      <text x="550" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">0</text>
      <text x="580" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">0.5</text>
      <text x="610" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">0.5</text>
      <text x="660" y="130" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">1</text>
      
      <text x="550" y="150" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">0</text>
      <text x="580" y="150" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">0</text>
      <text x="610" y="150" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">3</text>
      <text x="660" y="150" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">9</text>
      
      <!-- Separator line -->
      <line x1="635" y1="95" x2="635" y2="155" stroke="#6c757d" stroke-width="1" stroke-dasharray="2,2"/>
    </g>
  </g>
  
  <!-- Step 3: Row Operations Description -->
  <rect x="50" y="200" width="800" height="120" fill="#e8f4fd" stroke="#3498db" stroke-width="1" rx="5"/>
  <text x="450" y="225" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2980b9">
    Row Operations Performed:
  </text>
  
  <text x="100" y="250" text-anchor="start" font-family="serif" font-size="14" fill="#2980b9">
    R₂ ← R₂ + (3/2)R₁  (eliminate x₁ from equation 2)
  </text>
  <text x="100" y="270" text-anchor="start" font-family="serif" font-size="14" fill="#2980b9">
    R₃ ← R₃ + R₁        (eliminate x₁ from equation 3)
  </text>
  <text x="100" y="290" text-anchor="start" font-family="serif" font-size="14" fill="#2980b9">
    R₃ ← R₃ - 4R₂       (eliminate x₂ from equation 3)
  </text>
  <text x="100" y="310" text-anchor="start" font-family="serif" font-size="14" fill="#6c757d">
    Goal: Transform to upper triangular form
  </text>
  
  <!-- Step 4: Back Substitution -->
  <g id="backSubstitution">
    <text x="100" y="360" text-anchor="start" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
      Step 3: Back Substitution
    </text>
    
    <!-- Final system -->
    <rect x="50" y="380" width="800" height="120" fill="#f0f8e8" stroke="#27ae60" stroke-width="1" rx="5"/>
    
    <text x="100" y="410" text-anchor="start" font-family="serif" font-size="14" fill="#27ae60">
      From row 3: 3x₃ = 9  ⟹  x₃ = 3
    </text>
    <text x="100" y="430" text-anchor="start" font-family="serif" font-size="14" fill="#27ae60">
      From row 2: 0.5x₂ + 0.5x₃ = 1  ⟹  0.5x₂ + 0.5(3) = 1  ⟹  x₂ = -1
    </text>
    <text x="100" y="450" text-anchor="start" font-family="serif" font-size="14" fill="#27ae60">
      From row 1: 2x₁ + x₂ - x₃ = 8  ⟹  2x₁ + (-1) - 3 = 8  ⟹  x₁ = 6
    </text>
    
    <text x="450" y="480" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#27ae60">
      Solution: x₁ = 6, x₂ = -1, x₃ = 3
    </text>
  </g>
  
  <!-- Visual flow arrows -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22"/>
    </marker>
    <marker id="arrowhead2" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#27ae60"/>
    </marker>
  </defs>
  
  <!-- Arrow from step 2 to back substitution -->
  <path d="M 450 170 Q 450 200 450 350" stroke="#27ae60" stroke-width="2" marker-end="url(#arrowhead2)"/>
  
  <!-- Algorithm summary -->
  <rect x="50" y="530" width="800" height="120" fill="#fff3cd" stroke="#ffc107" stroke-width="1" rx="5"/>
  <text x="450" y="555" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#856404">
    Gaussian Elimination Algorithm:
  </text>
  
  <text x="100" y="580" text-anchor="start" font-family="serif" font-size="14" fill="#856404">
    1. Forward Elimination: Use row operations to create upper triangular matrix
  </text>
  <text x="100" y="600" text-anchor="start" font-family="serif" font-size="14" fill="#856404">
    2. Back Substitution: Solve from bottom row upward
  </text>
  <text x="100" y="620" text-anchor="start" font-family="serif" font-size="14" fill="#856404">
    3. Elementary row operations: multiply row by scalar, add/subtract rows, swap rows
  </text>
  <text x="100" y="640" text-anchor="start" font-family="serif" font-size="12" fill="#6c757d">
    Time complexity: O(n³) for n×n system
  </text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Eementary Row Operations":{
        svg:`<svg viewBox="0 0 900 650" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="650" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="450" y="30" text-anchor="middle" font-family="serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Elementary Row Operations in Gaussian Elimination
  </text>
  
  <!-- Operation 1: Row Swapping -->
  <g id="operation1">
    <rect x="50" y="60" width="800" height="140" fill="#e8f4fd" stroke="#3498db" stroke-width="2" rx="5"/>
    <text x="100" y="85" text-anchor="start" font-family="serif" font-size="18" font-weight="bold" fill="#2980b9">
      Operation 1: Row Swapping (Rᵢ ↔ Rⱼ)
    </text>
    
    <!-- Before matrix -->
    <g id="before1">
      <text x="120" y="110" text-anchor="middle" font-family="serif" font-size="12" fill="#2c3e50">Before:</text>
      
      <!-- Left bracket -->
      <path d="M 80 120 L 70 120 L 70 180 L 80 180" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      <!-- Right bracket -->
      <path d="M 200 120 L 210 120 L 210 180 L 200 180" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      
      <text x="100" y="135" text-anchor="middle" font-family="serif" font-size="12" fill="#e74c3c">1  2  3</text>
      <text x="100" y="150" text-anchor="middle" font-family="serif" font-size="12" fill="#27ae60">4  5  6</text>
      <text x="100" y="165" text-anchor="middle" font-family="serif" font-size="12" fill="#9b59b6">7  8  9</text>
      
      <text x="170" y="135" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₁</text>
      <text x="170" y="150" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₂</text>
      <text x="170" y="165" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₃</text>
    </g>
    
    <!-- Arrow -->
    <path d="M 230 150 L 280 150" stroke="#e67e22" stroke-width="2" marker-end="url(#arrowhead)"/>
    <text x="255" y="140" text-anchor="middle" font-family="serif" font-size="10" fill="#e67e22">R₁ ↔ R₂</text>
    
    <!-- After matrix -->
    <g id="after1">
      <text x="320" y="110" text-anchor="middle" font-family="serif" font-size="12" fill="#2c3e50">After:</text>
      
      <!-- Left bracket -->
      <path d="M 280 120 L 270 120 L 270 180 L 280 180" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      <!-- Right bracket -->
      <path d="M 400 120 L 410 120 L 410 180 L 400 180" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      
      <text x="300" y="135" text-anchor="middle" font-family="serif" font-size="12" fill="#27ae60">4  5  6</text>
      <text x="300" y="150" text-anchor="middle" font-family="serif" font-size="12" fill="#e74c3c">1  2  3</text>
      <text x="300" y="165" text-anchor="middle" font-family="serif" font-size="12" fill="#9b59b6">7  8  9</text>
      
      <text x="370" y="135" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₁</text>
      <text x="370" y="150" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₂</text>
      <text x="370" y="165" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₃</text>
    </g>
    
    <text x="600" y="150" text-anchor="start" font-family="serif" font-size="14" fill="#2980b9">
      Purpose: Move pivot to correct position
    </text>
  </g>
  
  <!-- Operation 2: Row Scaling -->
  <g id="operation2">
    <rect x="50" y="220" width="800" height="140" fill="#f0f8e8" stroke="#27ae60" stroke-width="2" rx="5"/>
    <text x="100" y="245" text-anchor="start" font-family="serif" font-size="18" font-weight="bold" fill="#27ae60">
      Operation 2: Row Scaling (Rᵢ ← k·Rᵢ, k ≠ 0)
    </text>
    
    <!-- Before matrix -->
    <g id="before2">
      <text x="120" y="270" text-anchor="middle" font-family="serif" font-size="12" fill="#2c3e50">Before:</text>
      
      <!-- Left bracket -->
      <path d="M 80 280 L 70 280 L 70 340 L 80 340" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      <!-- Right bracket -->
      <path d="M 200 280 L 210 280 L 210 340 L 200 340" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      
      <text x="100" y="295" text-anchor="middle" font-family="serif" font-size="12" fill="#e74c3c">2  4  6</text>
      <text x="100" y="310" text-anchor="middle" font-family="serif" font-size="12" fill="#3498db">1  3  5</text>
      <text x="100" y="325" text-anchor="middle" font-family="serif" font-size="12" fill="#9b59b6">7  8  9</text>
      
      <text x="170" y="295" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₁</text>
      <text x="170" y="310" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₂</text>
      <text x="170" y="325" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₃</text>
    </g>
    
    <!-- Arrow -->
    <path d="M 230 310 L 280 310" stroke="#e67e22" stroke-width="2" marker-end="url(#arrowhead)"/>
    <text x="255" y="300" text-anchor="middle" font-family="serif" font-size="10" fill="#e67e22">R₁ ← ½R₁</text>
    
    <!-- After matrix -->
    <g id="after2">
      <text x="320" y="270" text-anchor="middle" font-family="serif" font-size="12" fill="#2c3e50">After:</text>
      
      <!-- Left bracket -->
      <path d="M 280 280 L 270 280 L 270 340 L 280 340" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      <!-- Right bracket -->
      <path d="M 400 280 L 410 280 L 410 340 L 400 340" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      
      <text x="300" y="295" text-anchor="middle" font-family="serif" font-size="12" fill="#e74c3c">1  2  3</text>
      <text x="300" y="310" text-anchor="middle" font-family="serif" font-size="12" fill="#3498db">1  3  5</text>
      <text x="300" y="325" text-anchor="middle" font-family="serif" font-size="12" fill="#9b59b6">7  8  9</text>
      
      <text x="370" y="295" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₁</text>
      <text x="370" y="310" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₂</text>
      <text x="370" y="325" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₃</text>
    </g>
    
    <text x="600" y="310" text-anchor="start" font-family="serif" font-size="14" fill="#27ae60">
      Purpose: Make pivot element = 1
    </text>
  </g>
  
  <!-- Operation 3: Row Addition -->
  <g id="operation3">
    <rect x="50" y="380" width="800" height="140" fill="#ffeaa7" stroke="#f39c12" stroke-width="2" rx="5"/>
    <text x="100" y="405" text-anchor="start" font-family="serif" font-size="18" font-weight="bold" fill="#d68910">
      Operation 3: Row Addition (Rᵢ ← Rᵢ + k·Rⱼ)
    </text>
    
    <!-- Before matrix -->
    <g id="before3">
      <text x="120" y="430" text-anchor="middle" font-family="serif" font-size="12" fill="#2c3e50">Before:</text>
      
      <!-- Left bracket -->
      <path d="M 80 440 L 70 440 L 70 500 L 80 500" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      <!-- Right bracket -->
      <path d="M 200 440 L 210 440 L 210 500 L 200 500" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      
      <text x="100" y="455" text-anchor="middle" font-family="serif" font-size="12" fill="#e74c3c">1  2  3</text>
      <text x="100" y="470" text-anchor="middle" font-family="serif" font-size="12" fill="#3498db">2  4  6</text>
      <text x="100" y="485" text-anchor="middle" font-family="serif" font-size="12" fill="#9b59b6">3  6  9</text>
      
      <text x="170" y="455" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₁</text>
      <text x="170" y="470" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₂</text>
      <text x="170" y="485" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₃</text>
    </g>
    
    <!-- Arrow -->
    <path d="M 230 470 L 280 470" stroke="#e67e22" stroke-width="2" marker-end="url(#arrowhead)"/>
    <text x="255" y="460" text-anchor="middle" font-family="serif" font-size="10" fill="#e67e22">R₂ ← R₂ - 2R₁</text>
    
    <!-- After matrix -->
    <g id="after3">
      <text x="320" y="430" text-anchor="middle" font-family="serif" font-size="12" fill="#2c3e50">After:</text>
      
      <!-- Left bracket -->
      <path d="M 280 440 L 270 440 L 270 500 L 280 500" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      <!-- Right bracket -->
      <path d="M 400 440 L 410 440 L 410 500 L 400 500" 
            stroke="#34495e" stroke-width="2" fill="none"/>
      
      <text x="300" y="455" text-anchor="middle" font-family="serif" font-size="12" fill="#e74c3c">1  2  3</text>
      <text x="300" y="470" text-anchor="middle" font-family="serif" font-size="12" fill="#3498db">0  0  0</text>
      <text x="300" y="485" text-anchor="middle" font-family="serif" font-size="12" fill="#9b59b6">3  6  9</text>
      
      <text x="370" y="455" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₁</text>
      <text x="370" y="470" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₂</text>
      <text x="370" y="485" text-anchor="middle" font-family="serif" font-size="10" fill="#6c757d">R₃</text>
    </g>
    
    <text x="600" y="470" text-anchor="start" font-family="serif" font-size="14" fill="#d68910">
      Purpose: Create zeros below pivot
    </text>
  </g>
  
  <!-- Summary -->
  <rect x="50" y="540" width="800" height="80" fill="#f8f9fa" stroke="#6c757d" stroke-width="1" rx="5"/>
  <text x="450" y="565" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2c3e50">
    Key Properties of Elementary Row Operations:
  </text>
  <text x="100" y="585" text-anchor="start" font-family="serif" font-size="14" fill="#2c3e50">
    • All operations are reversible (preserve solution set)
  </text>
  <text x="450" y="585" text-anchor="start" font-family="serif" font-size="14" fill="#2c3e50">
    • Can be combined to achieve row echelon form
  </text>
  <text x="100" y="605" text-anchor="start" font-family="serif" font-size="14" fill="#2c3e50">
    • Equivalent to multiplying by elementary matrices
  </text>
  <text x="450" y="605" text-anchor="start" font-family="serif" font-size="14" fill="#2c3e50">
    • Goal: Upper triangular (row echelon) form
  </text>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22"/>
    </marker>
  </defs>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Row Scaling":{
        svg:`<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="600" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="450" y="30" text-anchor="middle" font-family="serif" font-size="28" font-weight="bold" fill="#2c3e50">
    Elementary Row Operation: Row Scaling
  </text>
  <text x="450" y="60" text-anchor="middle" font-family="serif" font-size="18" fill="#6c757d">
    Rᵢ ← k·Rᵢ (Multiply row by non-zero scalar)
  </text>
  
  <!-- Problem Context -->
  <rect x="50" y="90" width="800" height="80" fill="#fff3cd" stroke="#ffc107" stroke-width="2" rx="5"/>
  <text x="450" y="115" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#856404">
    Purpose: Normalize pivot to 1 for easier elimination
  </text>
  <text x="450" y="135" text-anchor="middle" font-family="serif" font-size="14" fill="#856404">
    When pivot ≠ 1, multiply the entire row by 1/pivot to make calculations simpler.
  </text>
  <text x="450" y="155" text-anchor="middle" font-family="serif" font-size="14" fill="#856404">
    This creates a leading 1, making it easier to eliminate elements below.
  </text>
  
  <!-- Before Section -->
  <g id="before_section">
    <text x="200" y="220" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#e74c3c">
      BEFORE
    </text>
    
    <!-- Augmented Matrix Before -->
    <g id="matrix_before">
      <!-- Left bracket -->
      <path d="M 100 240 L 80 240 L 80 360 L 100 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      <!-- Right bracket -->
      <path d="M 300 240 L 320 240 L 320 360 L 300 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      
      <!-- Row 1 -->
      <text x="130" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="170" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="210" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-1</text>
      <text x="270" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">5</text>
      
      <!-- Row 2 - Pivot row that needs scaling -->
      <rect x="115" y="285" width="30" height="25" fill="#ffeaa7" stroke="#f39c12" stroke-width="2" rx="3"/>
      <text x="130" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#f39c12" font-weight="bold">3</text>
      <text x="170" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">6</text>
      <text x="210" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-3</text>
      <text x="270" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">12</text>
      
      <!-- Row 3 -->
      <text x="130" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="170" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="210" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">4</text>
      <text x="270" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">9</text>
      
      <!-- Row labels -->
      <text x="340" y="270" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₁</text>
      <text x="340" y="305" text-anchor="start" font-family="serif" font-size="16" fill="#f39c12" font-weight="bold">R₂</text>
      <text x="340" y="340" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₃</text>
      
      <!-- Separator line -->
      <line x1="245" y1="245" x2="245" y2="355" stroke="#6c757d" stroke-width="2" stroke-dasharray="3,3"/>
      
      <!-- Problem indicator -->
      <text x="120" y="380" text-anchor="middle" font-family="serif" font-size="14" fill="#f39c12" font-weight="bold">
        Pivot = 3
      </text>
      <path d="M 120 375 L 120 315" stroke="#f39c12" stroke-width="2" marker-end="url(#problem_arrow)"/>
    </g>
    
    <!-- System equations before -->
    <rect x="50" y="400" width="350" height="80" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1" rx="3"/>
    <text x="225" y="420" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="#2c3e50">
      System of Equations:
    </text>
    <text x="80" y="440" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      x₁ + 2x₂ - x₃ = 5
    </text>
    <text x="80" y="455" text-anchor="start" font-family="serif" font-size="12" fill="#f39c12">
      3x₁ + 6x₂ - 3x₃ = 12  ← Pivot ≠ 1
    </text>
    <text x="80" y="470" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      2x₁ + x₂ + 4x₃ = 9
    </text>
  </g>
  
  <!-- Arrow and Operation -->
  <g id="operation_arrow">
    <path d="M 420 300 L 480 300" stroke="#e67e22" stroke-width="2" marker-end="url(#main_arrow)"/>
    <text x="450" y="280" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#e67e22">
      R₂ ← ⅓R₂
    </text>
    <text x="450" y="330" text-anchor="middle" font-family="serif" font-size="12" fill="#e67e22">
      Multiply row 2 by ⅓
    </text>
  </g>
  
  <!-- After Section -->
  <g id="after_section">
    <text x="700" y="220" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#27ae60">
      AFTER
    </text>
    
    <!-- Augmented Matrix After -->
    <g id="matrix_after">
      <!-- Left bracket -->
      <path d="M 600 240 L 580 240 L 580 360 L 600 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      <!-- Right bracket -->
      <path d="M 800 240 L 820 240 L 820 360 L 800 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      
      <!-- Row 1 (unchanged) -->
      <text x="630" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="670" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="710" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-1</text>
      <text x="770" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">5</text>
      
      <!-- Row 2 (scaled) - Now has pivot = 1 -->
      <rect x="615" y="285" width="30" height="25" fill="#e8f5e8" stroke="#4caf50" stroke-width="2" rx="3"/>
      <text x="630" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#4caf50" font-weight="bold">1</text>
      <text x="670" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="710" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-1</text>
      <text x="770" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">4</text>
      
      <!-- Row 3 (unchanged) -->
      <text x="630" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="670" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="710" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">4</text>
      <text x="770" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">9</text>
      
      <!-- Row labels -->
      <text x="840" y="270" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₁</text>
      <text x="840" y="305" text-anchor="start" font-family="serif" font-size="16" fill="#4caf50" font-weight="bold">R₂</text>
      <text x="840" y="340" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₃</text>
      
      <!-- Separator line -->
      <line x1="745" y1="245" x2="745" y2="355" stroke="#6c757d" stroke-width="2" stroke-dasharray="3,3"/>
      
      <!-- Success indicator -->
      <text x="620" y="380" text-anchor="middle" font-family="serif" font-size="14" fill="#4caf50" font-weight="bold">
        Pivot = 1
      </text>
      <path d="M 620 375 L 620 315" stroke="#4caf50" stroke-width="2" marker-end="url(#success_arrow)"/>
    </g>
    
    <!-- System equations after -->
    <rect x="500" y="400" width="350" height="80" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1" rx="3"/>
    <text x="675" y="420" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="#2c3e50">
      System of Equations:
    </text>
    <text x="530" y="440" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      x₁ + 2x₂ - x₃ = 5
    </text>
    <text x="530" y="455" text-anchor="start" font-family="serif" font-size="12" fill="#4caf50">
      x₁ + 2x₂ - x₃ = 4  ← Leading coefficient = 1
    </text>
    <text x="530" y="470" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      2x₁ + x₂ + 4x₃ = 9
    </text>
  </g>
  
  <!-- Summary -->
  <rect x="50" y="510" width="800" height="70" fill="#e8f4fd" stroke="#3498db" stroke-width="2" rx="5"/>
  <text x="450" y="535" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2980b9">
    Result: Leading coefficient normalized to 1
  </text>
  <text x="450" y="555" text-anchor="middle" font-family="serif" font-size="14" fill="#2980b9">
    Now we can easily eliminate x₁ from other rows: R₃ ← R₃ - 2R₂, etc.
  </text>
  <text x="450" y="570" text-anchor="middle" font-family="serif" font-size="12" fill="#6c757d">
    Note: All elements in the row are multiplied by the same scalar (⅓)
  </text>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="main_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#e67e22"/>
    </marker>
    <marker id="problem_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#f39c12"/>
    </marker>
    <marker id="success_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#4caf50"/>
    </marker>
  </defs>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Rows Swapping":{
        svg:`<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="600" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="450" y="30" text-anchor="middle" font-family="serif" font-size="28" font-weight="bold" fill="#2c3e50">
    Elementary Row Operation: Row Swapping
  </text>
  <text x="450" y="60" text-anchor="middle" font-family="serif" font-size="18" fill="#6c757d">
    Rᵢ ↔ Rⱼ (Exchange two rows)
  </text>
  
  <!-- Problem Context -->
  <rect x="50" y="90" width="800" height="80" fill="#fff3cd" stroke="#ffc107" stroke-width="2" rx="5"/>
  <text x="450" y="115" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#856404">
    Problem: Zero pivot in elimination
  </text>
  <text x="450" y="135" text-anchor="middle" font-family="serif" font-size="14" fill="#856404">
    When a pivot element is zero, we cannot use it to eliminate below.
  </text>
  <text x="450" y="155" text-anchor="middle" font-family="serif" font-size="14" fill="#856404">
    Solution: Swap with a row below that has a non-zero element in the same column.
  </text>
  
  <!-- Before Section -->
  <g id="before_section">
    <text x="200" y="220" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#e74c3c">
      BEFORE
    </text>
    
    <!-- Augmented Matrix Before -->
    <g id="matrix_before">
      <!-- Left bracket -->
      <path d="M 100 240 L 80 240 L 80 360 L 100 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      <!-- Right bracket -->
      <path d="M 300 240 L 320 240 L 320 360 L 300 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      
      <!-- Row 1 -->
      <text x="130" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="170" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="210" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-1</text>
      <text x="270" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">5</text>
      
      <!-- Row 2 - Problem row with zero pivot -->
      <rect x="115" y="285" width="30" height="25" fill="#ffebee" stroke="#f44336" stroke-width="2" rx="3"/>
      <text x="130" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#f44336" font-weight="bold">0</text>
      <text x="170" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">3</text>
      <text x="210" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="270" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">7</text>
      
      <!-- Row 3 -->
      <text x="130" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="170" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="210" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">3</text>
      <text x="270" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">4</text>
      
      <!-- Row labels -->
      <text x="340" y="270" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₁</text>
      <text x="340" y="305" text-anchor="start" font-family="serif" font-size="16" fill="#f44336" font-weight="bold">R₂</text>
      <text x="340" y="340" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₃</text>
      
      <!-- Separator line -->
      <line x1="245" y1="245" x2="245" y2="355" stroke="#6c757d" stroke-width="2" stroke-dasharray="3,3"/>
      
      <!-- Problem indicator -->
      <text x="120" y="380" text-anchor="middle" font-family="serif" font-size="14" fill="#f44336" font-weight="bold">
        Zero pivot!
      </text>
      <path d="M 120 375 L 120 315" stroke="#f44336" stroke-width="2" marker-end="url(#problem_arrow)"/>
    </g>
    
    <!-- System equations before -->
    <rect x="50" y="400" width="350" height="80" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1" rx="3"/>
    <text x="225" y="420" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="#2c3e50">
      System of Equations:
    </text>
    <text x="80" y="440" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      x₁ + 2x₂ - x₃ = 5
    </text>
    <text x="80" y="455" text-anchor="start" font-family="serif" font-size="12" fill="#f44336">
      0x₁ + 3x₂ + 2x₃ = 7  ← Cannot use as pivot
    </text>
    <text x="80" y="470" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      2x₁ + x₂ + 3x₃ = 4
    </text>
  </g>
  
  <!-- Arrow and Operation -->
  <g id="operation_arrow">
    <path d="M 420 300 L 480 300" stroke="#e67e22" stroke-width="2" marker-end="url(#main_arrow)"/>
    <text x="450" y="280" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#e67e22">
      R₂ ↔ R₃
    </text>
    <text x="450" y="330" text-anchor="middle" font-family="serif" font-size="12" fill="#e67e22">
      Swap rows 2 and 3
    </text>
  </g>
  
  <!-- After Section -->
  <g id="after_section">
    <text x="700" y="220" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#27ae60">
      AFTER
    </text>
    
    <!-- Augmented Matrix After -->
    <g id="matrix_after">
      <!-- Left bracket -->
      <path d="M 600 240 L 580 240 L 580 360 L 600 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      <!-- Right bracket -->
      <path d="M 800 240 L 820 240 L 820 360 L 800 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      
      <!-- Row 1 (unchanged) -->
      <text x="630" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="670" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="710" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-1</text>
      <text x="770" y="270" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">5</text>
      
      <!-- Row 2 (was Row 3) - Now has good pivot -->
      <rect x="615" y="285" width="30" height="25" fill="#e8f5e8" stroke="#4caf50" stroke-width="2" rx="3"/>
      <text x="630" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#4caf50" font-weight="bold">2</text>
      <text x="670" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="710" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">3</text>
      <text x="770" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">4</text>
      
      <!-- Row 3 (was Row 2) -->
      <text x="630" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">0</text>
      <text x="670" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">3</text>
      <text x="710" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="770" y="340" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">7</text>
      
      <!-- Row labels -->
      <text x="840" y="270" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₁</text>
      <text x="840" y="305" text-anchor="start" font-family="serif" font-size="16" fill="#4caf50" font-weight="bold">R₂</text>
      <text x="840" y="340" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₃</text>
      
      <!-- Separator line -->
      <line x1="745" y1="245" x2="745" y2="355" stroke="#6c757d" stroke-width="2" stroke-dasharray="3,3"/>
      
      <!-- Success indicator -->
      <text x="620" y="380" text-anchor="middle" font-family="serif" font-size="14" fill="#4caf50" font-weight="bold">
        Good pivot!
      </text>
      <path d="M 620 375 L 620 315" stroke="#4caf50" stroke-width="2" marker-end="url(#success_arrow)"/>
    </g>
    
    <!-- System equations after -->
    <rect x="500" y="400" width="350" height="80" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1" rx="3"/>
    <text x="675" y="420" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="#2c3e50">
      System of Equations:
    </text>
    <text x="530" y="440" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      x₁ + 2x₂ - x₃ = 5
    </text>
    <text x="530" y="455" text-anchor="start" font-family="serif" font-size="12" fill="#4caf50">
      2x₁ + x₂ + 3x₃ = 4  ← Can use 2 as pivot
    </text>
    <text x="530" y="470" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      0x₁ + 3x₂ + 2x₃ = 7
    </text>
  </g>
  
  <!-- Summary -->
  <rect x="50" y="510" width="800" height="70" fill="#e8f4fd" stroke="#3498db" stroke-width="2" rx="5"/>
  <text x="450" y="535" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#2980b9">
    Result: Row swapping preserves the solution set
  </text>
  <text x="450" y="555" text-anchor="middle" font-family="serif" font-size="14" fill="#2980b9">
    We can now proceed with elimination using the new pivot element (2)
  </text>
  <text x="450" y="570" text-anchor="middle" font-family="serif" font-size="12" fill="#6c757d">
    Next step: Use R₂ to eliminate the x₁ term in R₃ (already zero) and other rows if needed
  </text>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="main_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#e67e22"/>
    </marker>
    <marker id="problem_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#f44336"/>
    </marker>
    <marker id="success_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#4caf50"/>
    </marker>
  </defs>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Row Addition":{
        svg:`<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="600" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="450" y="30" text-anchor="middle" font-family="serif" font-size="28" font-weight="bold" fill="#2c3e50">
    Elementary Row Operation: Row Addition
  </text>
  <text x="450" y="60" text-anchor="middle" font-family="serif" font-size="18" fill="#6c757d">
    Rᵢ ← Rᵢ + k·Rⱼ (Add multiple of one row to another)
  </text>
  
  <!-- Problem Context -->
  <rect x="50" y="90" width="800" height="80" fill="#fff3cd" stroke="#ffc107" stroke-width="2" rx="5"/>
  <text x="450" y="115" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#856404">
    Purpose: Create zeros below (or above) the pivot element
  </text>
  <text x="450" y="135" text-anchor="middle" font-family="serif" font-size="14" fill="#856404">
    Use the pivot row to eliminate corresponding elements in other rows.
  </text>
  <text x="450" y="155" text-anchor="middle" font-family="serif" font-size="14" fill="#856404">
    This is the core elimination step that creates the triangular form.
  </text>
  
  <!-- Before Section -->
  <g id="before_section">
    <text x="200" y="220" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#e74c3c">
      BEFORE
    </text>
    
    <!-- Augmented Matrix Before -->
    <g id="matrix_before">
      <!-- Left bracket -->
      <path d="M 100 240 L 80 240 L 80 360 L 100 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      <!-- Right bracket -->
      <path d="M 300 240 L 320 240 L 320 360 L 300 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      
      <!-- Row 1 - Pivot row -->
      <rect x="115" y="255" width="30" height="25" fill="#e8f5e8" stroke="#4caf50" stroke-width="2" rx="3"/>
      <text x="130" y="275" text-anchor="middle" font-family="serif" font-size="18" fill="#4caf50" font-weight="bold">1</text>
      <text x="170" y="275" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="210" y="275" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-1</text>
      <text x="270" y="275" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">5</text>
      
      <!-- Row 2 -->
      <text x="130" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">0</text>
      <text x="170" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="210" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">3</text>
      <text x="270" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">2</text>
      
      <!-- Row 3 - Target row with element to eliminate -->
      <rect x="115" y="325" width="30" height="25" fill="#ffebee" stroke="#f44336" stroke-width="2" rx="3"/>
      <text x="130" y="345" text-anchor="middle" font-family="serif" font-size="18" fill="#f44336" font-weight="bold">3</text>
      <text x="170" y="345" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="210" y="345" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">4</text>
      <text x="270" y="345" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">11</text>
      
      <!-- Row labels -->
      <text x="340" y="275" text-anchor="start" font-family="serif" font-size="16" fill="#4caf50" font-weight="bold">R₁</text>
      <text x="340" y="305" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₂</text>
      <text x="340" y="345" text-anchor="start" font-family="serif" font-size="16" fill="#f44336" font-weight="bold">R₃</text>
      
      <!-- Separator line -->
      <line x1="245" y1="245" x2="245" y2="355" stroke="#6c757d" stroke-width="2" stroke-dasharray="3,3"/>
      
      <!-- Problem indicator -->
      <text x="120" y="380" text-anchor="middle" font-family="serif" font-size="14" fill="#f44336" font-weight="bold">
        Eliminate this!
      </text>
      <path d="M 120 375 L 120 355" stroke="#f44336" stroke-width="2" marker-end="url(#problem_arrow)"/>
    </g>
    
    <!-- System equations before -->
    <rect x="50" y="400" width="350" height="80" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1" rx="3"/>
    <text x="225" y="420" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="#2c3e50">
      System of Equations:
    </text>
    <text x="80" y="440" text-anchor="start" font-family="serif" font-size="12" fill="#4caf50">
      x₁ + 2x₂ - x₃ = 5     ← Pivot row
    </text>
    <text x="80" y="455" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      0x₁ + x₂ + 3x₃ = 2
    </text>
    <text x="80" y="470" text-anchor="start" font-family="serif" font-size="12" fill="#f44336">
      3x₁ + x₂ + 4x₃ = 11   ← Eliminate x₁ term
    </text>
  </g>
  
  <!-- Arrow and Operation -->
  <g id="operation_arrow">
    <path d="M 420 300 L 480 300" stroke="#e67e22" stroke-width="2" marker-end="url(#main_arrow)"/>
    <text x="450" y="280" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#e67e22">
      R₃ ← R₃ - 3R₁
    </text>
    <text x="450" y="330" text-anchor="middle" font-family="serif" font-size="12" fill="#e67e22">
      Eliminate x₁ from row 3
    </text>
  </g>
  
  <!-- After Section -->
  <g id="after_section">
    <text x="700" y="220" text-anchor="middle" font-family="serif" font-size="20" font-weight="bold" fill="#27ae60">
      AFTER
    </text>
    
    <!-- Augmented Matrix After -->
    <g id="matrix_after">
      <!-- Left bracket -->
      <path d="M 600 240 L 580 240 L 580 360 L 600 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      <!-- Right bracket -->
      <path d="M 800 240 L 820 240 L 820 360 L 800 360" 
            stroke="#34495e" stroke-width="4" fill="none"/>
      
      <!-- Row 1 (unchanged) -->
      <rect x="615" y="255" width="30" height="25" fill="#e8f5e8" stroke="#4caf50" stroke-width="2" rx="3"/>
      <text x="630" y="275" text-anchor="middle" font-family="serif" font-size="18" fill="#4caf50" font-weight="bold">1</text>
      <text x="670" y="275" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">2</text>
      <text x="710" y="275" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-1</text>
      <text x="770" y="275" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">5</text>
      
      <!-- Row 2 (unchanged) -->
      <text x="630" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">0</text>
      <text x="670" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">1</text>
      <text x="710" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">3</text>
      <text x="770" y="305" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">2</text>
      
      <!-- Row 3 (modified) - Zero created! -->
      <rect x="615" y="325" width="30" height="25" fill="#e8f5e8" stroke="#4caf50" stroke-width="2" rx="3"/>
      <text x="630" y="345" text-anchor="middle" font-family="serif" font-size="18" fill="#4caf50" font-weight="bold">0</text>
      <text x="670" y="345" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">-5</text>
      <text x="710" y="345" text-anchor="middle" font-family="serif" font-size="18" fill="#2c3e50">7</text>
      <text x="770" y="345" text-anchor="middle" font-family="serif" font-size="18" fill="#3498db">-4</text>
      
      <!-- Row labels -->
      <text x="840" y="275" text-anchor="start" font-family="serif" font-size="16" fill="#4caf50" font-weight="bold">R₁</text>
      <text x="840" y="305" text-anchor="start" font-family="serif" font-size="16" fill="#6c757d">R₂</text>
      <text x="840" y="345" text-anchor="start" font-family="serif" font-size="16" fill="#4caf50" font-weight="bold">R₃</text>
      
      <!-- Separator line -->
      <line x1="745" y1="245" x2="745" y2="355" stroke="#6c757d" stroke-width="2" stroke-dasharray="3,3"/>
      
      <!-- Success indicator -->
      <text x="620" y="380" text-anchor="middle" font-family="serif" font-size="14" fill="#4caf50" font-weight="bold">
        Zero created!
      </text>
      <path d="M 620 375 L 620 355" stroke="#4caf50" stroke-width="2" marker-end="url(#success_arrow)"/>
    </g>
    
    <!-- System equations after -->
    <rect x="500" y="400" width="350" height="80" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1" rx="3"/>
    <text x="675" y="420" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="#2c3e50">
      System of Equations:
    </text>
    <text x="530" y="440" text-anchor="start" font-family="serif" font-size="12" fill="#4caf50">
      x₁ + 2x₂ - x₃ = 5
    </text>
    <text x="530" y="455" text-anchor="start" font-family="serif" font-size="12" fill="#2c3e50">
      0x₁ + x₂ + 3x₃ = 2
    </text>
    <text x="530" y="470" text-anchor="start" font-family="serif" font-size="12" fill="#4caf50">
      0x₁ - 5x₂ + 7x₃ = -4  ← x₁ eliminated!
    </text>
  </g>
  
  <!-- Calculation Detail -->
  <rect x="50" y="510" width="800" height="70" fill="#f0f8e8" stroke="#27ae60" stroke-width="2" rx="5"/>
  <text x="450" y="535" text-anchor="middle" font-family="serif" font-size="16" font-weight="bold" fill="#27ae60">
    Calculation: R₃ ← R₃ - 3R₁
  </text>
  <text x="450" y="555" text-anchor="middle" font-family="serif" font-size="14" fill="#27ae60">
    [3  1  4  11] - 3×[1  2  -1  5] = [3-3  1-6  4-(-3)  11-15] = [0  -5  7  -4]
  </text>
  <text x="450" y="570" text-anchor="middle" font-family="serif" font-size="12" fill="#6c757d">
    Each element: new = original - (multiplier × corresponding pivot row element)
  </text>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="main_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#e67e22"/>
    </marker>
    <marker id="problem_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#f44336"/>
    </marker>
    <marker id="success_arrow" markerWidth="8" markerHeight="6" 
            refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#4caf50"/>
    </marker>
  </defs>
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
    },
    
}