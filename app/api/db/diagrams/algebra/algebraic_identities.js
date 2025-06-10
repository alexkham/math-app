
export const identitiesData={
    "Square of Sum":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="400" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    (a + b)² = a² + 2ab + b²
  </text>
  
  <!-- Left side: Visual representation -->
  <g transform="translate(50, 80)">
    <!-- Main square outline -->
    <rect x="0" y="0" width="200" height="200" fill="none" stroke="#2c3e50" stroke-width="3"/>
    
    <!-- a² square (top-left) -->
    <rect x="0" y="0" width="120" height="120" fill="#e74c3c" fill-opacity="0.7" stroke="#c0392b" stroke-width="2"/>
    <text x="60" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">a²</text>
    
    <!-- ab rectangle (top-right) -->
    <rect x="120" y="0" width="80" height="120" fill="#3498db" fill-opacity="0.7" stroke="#2980b9" stroke-width="2"/>
    <text x="160" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">ab</text>
    
    <!-- ab rectangle (bottom-left) -->
    <rect x="0" y="120" width="120" height="80" fill="#3498db" fill-opacity="0.7" stroke="#2980b9" stroke-width="2"/>
    <text x="60" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">ab</text>
    
    <!-- b² square (bottom-right) -->
    <rect x="120" y="120" width="80" height="80" fill="#2ecc71" fill-opacity="0.7" stroke="#27ae60" stroke-width="2"/>
    <text x="160" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">b²</text>
    
    <!-- Dimension labels -->
    <!-- Top edge -->
    <line x1="0" y1="-15" x2="120" y2="-15" stroke="#2c3e50" stroke-width="2"/>
    <line x1="0" y1="-20" x2="0" y2="-10" stroke="#2c3e50" stroke-width="2"/>
    <line x1="120" y1="-20" x2="120" y2="-10" stroke="#2c3e50" stroke-width="2"/>
    <text x="60" y="-25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">a</text>
    
    <line x1="120" y1="-15" x2="200" y2="-15" stroke="#2c3e50" stroke-width="2"/>
    <line x1="120" y1="-20" x2="120" y2="-10" stroke="#2c3e50" stroke-width="2"/>
    <line x1="200" y1="-20" x2="200" y2="-10" stroke="#2c3e50" stroke-width="2"/>
    <text x="160" y="-25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">b</text>
    
    <!-- Left edge -->
    <line x1="-15" y1="0" x2="-15" y2="120" stroke="#2c3e50" stroke-width="2"/>
    <line x1="-20" y1="0" x2="-10" y2="0" stroke="#2c3e50" stroke-width="2"/>
    <line x1="-20" y1="120" x2="-10" y2="120" stroke="#2c3e50" stroke-width="2"/>
    <text x="-30" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">a</text>
    
    <line x1="-15" y1="120" x2="-15" y2="200" stroke="#2c3e50" stroke-width="2"/>
    <line x1="-20" y1="120" x2="-10" y2="120" stroke="#2c3e50" stroke-width="2"/>
    <line x1="-20" y1="200" x2="-10" y2="200" stroke="#2c3e50" stroke-width="2"/>
    <text x="-30" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">b</text>
    
    <!-- Total dimension labels -->
    <line x1="0" y1="220" x2="200" y2="220" stroke="#34495e" stroke-width="3"/>
    <line x1="0" y1="215" x2="0" y2="225" stroke="#34495e" stroke-width="3"/>
    <line x1="200" y1="215" x2="200" y2="225" stroke="#34495e" stroke-width="3"/>
    <text x="100" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#34495e">(a + b)</text>
    
    <line x1="220" y1="0" x2="220" y2="200" stroke="#34495e" stroke-width="3"/>
    <line x1="215" y1="0" x2="225" y2="0" stroke="#34495e" stroke-width="3"/>
    <line x1="215" y1="200" x2="225" y2="200" stroke="#34495e" stroke-width="3"/>
    <text x="235" y="105" text-anchor="start" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#34495e">(a + b)</text>
  </g>
  
  <!-- Right side: Breakdown -->
  <g transform="translate(400, 80)">
    <text x="0" y="20" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Area Breakdown:</text>
    
    <!-- a² -->
    <rect x="0" y="40" width="20" height="20" fill="#e74c3c" fill-opacity="0.7" stroke="#c0392b" stroke-width="2"/>
    <text x="30" y="55" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50">a² (red square)</text>
    
    <!-- ab (first) -->
    <rect x="0" y="70" width="20" height="20" fill="#3498db" fill-opacity="0.7" stroke="#2980b9" stroke-width="2"/>
    <text x="30" y="85" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50">ab (blue rectangle)</text>
    
    <!-- ab (second) -->
    <rect x="0" y="100" width="20" height="20" fill="#3498db" fill-opacity="0.7" stroke="#2980b9" stroke-width="2"/>
    <text x="30" y="115" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50">ab (blue rectangle)</text>
    
    <!-- b² -->
    <rect x="0" y="130" width="20" height="20" fill="#2ecc71" fill-opacity="0.7" stroke="#27ae60" stroke-width="2"/>
    <text x="30" y="145" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50">b² (green square)</text>
    
    <line x1="0" y1="170" x2="200" y2="170" stroke="#2c3e50" stroke-width="1"/>
    
    <text x="0" y="190" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Total Area = a² + ab + ab + b²</text>
    <text x="0" y="210" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">= a² + 2ab + b²</text>
    
    <text x="0" y="240" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e74c3c">Therefore: (a + b)² = a² + 2ab + b²</text>
  </g>
  
  <!-- Footer note -->
  <text x="400" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#7f8c8d">
    The square with side length (a + b) is divided into four regions showing each term of the expansion.
  </text>
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