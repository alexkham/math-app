
export const identitiesData={
    "distributions":{
        svg:`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Probability Distributions
  </text>
  
  <!-- Discrete Distribution (Left Side) -->
  <g transform="translate(50, 80)">
    <!-- Title -->
    <text x="150" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e74c3c">
      Discrete Distribution
    </text>
    <text x="150" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">
      (Binomial Distribution Example)
    </text>
    
    <!-- Axes -->
    <line x1="30" y1="200" x2="270" y2="200" stroke="#34495e" stroke-width="2"/>
    <line x1="30" y1="200" x2="30" y2="60" stroke="#34495e" stroke-width="2"/>
    
    <!-- X-axis labels -->
    <text x="30" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">0</text>
    <text x="70" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">1</text>
    <text x="110" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2</text>
    <text x="150" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">3</text>
    <text x="190" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">4</text>
    <text x="230" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">5</text>
    <text x="270" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">6</text>
    
    <!-- Y-axis labels -->
    <text x="20" y="200" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">0</text>
    <text x="20" y="160" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">0.1</text>
    <text x="20" y="120" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">0.2</text>
    <text x="20" y="80" text-anchor="end" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">0.3</text>
    
    <!-- Probability bars -->
    <rect x="25" y="190" width="10" height="10" fill="#e74c3c" opacity="0.8"/>
    <rect x="65" y="160" width="10" height="40" fill="#e74c3c" opacity="0.8"/>
    <rect x="105" y="120" width="10" height="80" fill="#e74c3c" opacity="0.8"/>
    <rect x="145" y="100" width="10" height="100" fill="#e74c3c" opacity="0.8"/>
    <rect x="185" y="120" width="10" height="80" fill="#e74c3c" opacity="0.8"/>
    <rect x="225" y="160" width="10" height="40" fill="#e74c3c" opacity="0.8"/>
    <rect x="265" y="190" width="10" height="10" fill="#e74c3c" opacity="0.8"/>
    
    <!-- Axis labels -->
    <text x="150" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">
      Number of Successes
    </text>
    <text x="10" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50" transform="rotate(-90, 10, 130)">
      Probability
    </text>
    
    <!-- Properties -->
    <text x="30" y="280" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      • Discrete values only
    </text>
    <text x="30" y="300" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      • Sum of probabilities = 1
    </text>
    <text x="30" y="320" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      • Each outcome has specific probability
    </text>
  </g>
  
  <!-- Continuous Distribution (Right Side) -->
  <g transform="translate(450, 80)">
    <!-- Title -->
    <text x="150" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#3498db">
      Continuous Distribution
    </text>
    <text x="150" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">
      (Normal Distribution Example)
    </text>
    
    <!-- Axes -->
    <line x1="30" y1="200" x2="270" y2="200" stroke="#34495e" stroke-width="2"/>
    <line x1="30" y1="200" x2="30" y2="60" stroke="#34495e" stroke-width="2"/>
    
    <!-- Normal curve -->
    <path d="M 30 200 Q 70 190 110 170 Q 130 150 150 80 Q 170 150 190 170 Q 230 190 270 200" 
          stroke="#3498db" stroke-width="3" fill="none"/>
    
    <!-- Filled area under curve -->
    <path d="M 30 200 Q 70 190 110 170 Q 130 150 150 80 Q 170 150 190 170 Q 230 190 270 200 L 270 200 L 30 200 Z" 
          fill="#3498db" opacity="0.3"/>
    
    <!-- Mean line -->
    <line x1="150" y1="200" x2="150" y2="80" stroke="#e67e22" stroke-width="2" stroke-dasharray="5,5"/>
    <text x="155" y="75" font-family="Arial, sans-serif" font-size="10" fill="#e67e22">μ</text>
    
    <!-- Standard deviation markers -->
    <line x1="110" y1="195" x2="110" y2="205" stroke="#e67e22" stroke-width="1"/>
    <line x1="190" y1="195" x2="190" y2="205" stroke="#e67e22" stroke-width="1"/>
    <text x="130" y="235" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e67e22">σ</text>
    <text x="170" y="235" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e67e22">σ</text>
    
    <!-- X-axis labels -->
    <text x="30" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">-3</text>
    <text x="90" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">-1</text>
    <text x="150" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">0</text>
    <text x="210" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">1</text>
    <text x="270" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">3</text>
    
    <!-- Axis labels -->
    <text x="150" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">
      Value
    </text>
    <text x="10" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50" transform="rotate(-90, 10, 130)">
      Density
    </text>
    
    <!-- Properties -->
    <text x="30" y="280" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      • Infinite possible values
    </text>
    <text x="30" y="300" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      • Area under curve = 1
    </text>
    <text x="30" y="320" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      • Probability = area over interval
    </text>
  </g>
  
  <!-- Key Concepts Section -->
  <g transform="translate(50, 420)">
    <text x="350" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">
      Key Distribution Concepts
    </text>
    
    <!-- Probability Mass Function vs Probability Density Function -->
    <rect x="0" y="40" width="320" height="80" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
    <text x="10" y="60" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#e74c3c">
      Discrete: Probability Mass Function (PMF)
    </text>
    <text x="10" y="80" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      P(X = k) = probability of exact value k
    </text>
    <text x="10" y="100" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      Example: P(X = 3) = 0.25
    </text>
    
    <rect x="380" y="40" width="320" height="80" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1" rx="5"/>
    <text x="390" y="60" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#3498db">
      Continuous: Probability Density Function (PDF)
    </text>
    <text x="390" y="80" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      P(a ≤ X ≤ b) = area under curve from a to b
    </text>
    <text x="390" y="100" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">
      Example: P(1 ≤ X ≤ 2) = ∫₁² f(x)dx
    </text>
  </g>
  
  <!-- Legend -->
  <g transform="translate(300, 560)">
    <rect x="0" y="0" width="15" height="15" fill="#e74c3c" opacity="0.8"/>
    <text x="20" y="12" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">Discrete probabilities</text>
    
    <rect x="150" y="0" width="15" height="15" fill="#3498db" opacity="0.3"/>
    <text x="170" y="12" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">Continuous density</text>
  </g>
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