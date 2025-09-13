
export const identitiesData={
    "Angular Magnitudes Classification":{
        svg:`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Angular Magnitudes Classification
  </text>
  
  <!-- Zero Angle (0°) -->
  <g transform="translate(100, 120)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="60" y2="0" stroke="#e74c3c" stroke-width="3"/>
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    <text x="30" y="-15" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Zero Angle</text>
    <text x="30" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">0°</text>
  </g>
  
  <!-- Acute Angle (45°) -->
  <g transform="translate(300, 150)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="42.4" y2="-42.4" stroke="#e74c3c" stroke-width="3"/>
    <path d="M 20 0 A 20 20 0 0 0 14.14 -14.14" fill="none" stroke="#f39c12" stroke-width="2"/>
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    <text x="30" y="-55" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Acute Angle</text>
    <text x="30" y="-40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">45° (0° &lt; θ &lt; 90°)</text>
  </g>
  
  <!-- Right Angle (90°) -->
  <g transform="translate(500, 150)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="0" y2="-60" stroke="#e74c3c" stroke-width="3"/>
    <rect x="0" y="-15" width="15" height="15" fill="none" stroke="#f39c12" stroke-width="2"/>
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    <text x="30" y="-75" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Right Angle</text>
    <text x="30" y="-60" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">90°</text>
  </g>
  
  <!-- Obtuse Angle (135°) -->
  <g transform="translate(100, 280)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="-42.4" y2="-42.4" stroke="#e74c3c" stroke-width="3"/>
    <path d="M 20 0 A 20 20 0 0 0 -14.14 -14.14" fill="none" stroke="#f39c12" stroke-width="2"/>
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    <text x="10" y="-55" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Obtuse Angle</text>
    <text x="10" y="-40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">135° (90° &lt; θ &lt; 180°)</text>
  </g>
  
  <!-- Straight Angle (180°) -->
  <g transform="translate(350, 280)">
    <line x1="-60" y1="0" x2="60" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="-60" y1="0" x2="60" y2="0" stroke="#e74c3c" stroke-width="3" stroke-dasharray="5,5"/>
    <path d="M 30 0 A 30 30 0 0 1 -30 0" fill="none" stroke="#f39c12" stroke-width="2"/>
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    <text x="0" y="-45" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Straight Angle</text>
    <text x="0" y="-30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">180°</text>
  </g>
  
  <!-- Reflex Angle (270°) -->
  <g transform="translate(600, 250)">
    <line x1="0" y1="0" x2="50" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="0" y2="50" stroke="#e74c3c" stroke-width="3"/>
    <path d="M 25 0 A 25 25 0 1 1 0 25" fill="none" stroke="#f39c12" stroke-width="2"/>
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    <text x="25" y="-20" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Reflex Angle</text>
    <text x="25" y="-5" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">270° (180° &lt; θ &lt; 360°)</text>
  </g>
  
  <!-- Full Angle (360°) -->
  <g transform="translate(400, 450)">
    <circle cx="0" cy="0" r="40" fill="none" stroke="#f39c12" stroke-width="3"/>
    <line x1="0" y1="0" x2="40" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="40" y2="0" stroke="#e74c3c" stroke-width="3" stroke-dasharray="3,3"/>
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    <text x="0" y="-60" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Full Angle</text>
    <text x="0" y="-45" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">360° (Complete Rotation)</text>
  </g>
  
  <!-- Legend -->
  <g transform="translate(50, 520)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Legend:</text>
    <line x1="0" y1="15" x2="20" y2="15" stroke="#3498db" stroke-width="3"/>
    <text x="25" y="19" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Initial Ray</text>
    <line x1="120" y1="15" x2="140" y2="15" stroke="#e74c3c" stroke-width="3"/>
    <text x="145" y="19" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Terminal Ray</text>
    <path d="M 250 15 A 10 10 0 0 1 270 15" fill="none" stroke="#f39c12" stroke-width="2"/>
    <text x="275" y="19" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Angle Arc</text>
  </g>
  
  <!-- Subtitle -->
  <text x="400" y="580" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d" font-style="italic">
    Classifications serve as a basis for identifying structural properties and formulating principles in planar analysis
  </text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "complementary and supplementary angles":{
        svg:`<!-- Opposite Angles (Vertical Angles) -->
  <g transform="translate(500, 350)">
    <!-- Two intersecting lines -->
    <line x1="-70" y1="-50" x2="70" y2="50" stroke="#3498db" stroke-width="3"/>
    <line x1="-70" y1="50" x2="70" y2="-50" stroke="#e74c3c" stroke-width="3"/><svg viewBox="0 0 900 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="700" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="450" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Angle Relationships
  </text>
  
  <!-- Subtitle -->
  <text x="450" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#7f8c8d" font-style="italic">
    Positional constraints and linear combinations
  </text>
  
  <!-- Complementary Angles (90°) -->
  <g transform="translate(150, 150)">
    <!-- First angle (30°) -->
    <line x1="0" y1="0" x2="80" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="69.3" y2="-40" stroke="#e74c3c" stroke-width="3"/>
    <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="#f39c12" stroke-width="2"/>
    <text x="35" y="-8" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">30°</text>
    
    <!-- Second angle (60°) -->
    <line x1="0" y1="0" x2="69.3" y2="-40" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="0" y2="-80" stroke="#e74c3c" stroke-width="3"/>
    <path d="M 26 -15 A 30 30 0 0 0 0 -30" fill="none" stroke="#27ae60" stroke-width="2"/>
    <text x="15" y="-35" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">60°</text>
    
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    
    <!-- Right angle indicator -->
    <rect x="0" y="-15" width="15" height="15" fill="none" stroke="#9b59b6" stroke-width="2"/>
    
    <text x="40" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Complementary Angles</text>
    <text x="40" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">30° + 60° = 90°</text>
    <text x="40" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">α + β = 90°</text>
  </g>
  
  <!-- Supplementary Angles (180°) -->
  <g transform="translate(500, 150)">
    <!-- First angle (120°) -->
    <line x1="0" y1="0" x2="80" y2="0" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="-40" y2="-69.3" stroke="#e74c3c" stroke-width="3"/>
    <path d="M 35 0 A 35 35 0 0 0 -17.5 -30.3" fill="none" stroke="#f39c12" stroke-width="2"/>
    <text x="5" y="-25" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">120°</text>
    
    <!-- Second angle (60°) -->
    <line x1="0" y1="0" x2="-40" y2="-69.3" stroke="#3498db" stroke-width="3"/>
    <line x1="0" y1="0" x2="-80" y2="0" stroke="#e74c3c" stroke-width="3"/>
    <path d="M -17.5 -30.3 A 35 35 0 0 0 -35 0" fill="none" stroke="#27ae60" stroke-width="2"/>
    <text x="-35" y="-20" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">60°</text>
    
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    
    <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Supplementary Angles</text>
    <text x="0" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">120° + 60° = 180°</text>
    <text x="0" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">α + β = 180°</text>
  </g>
  
  <!-- Adjacent Angles -->
  <g transform="translate(150, 350)">
    <!-- Shared ray -->
    <line x1="0" y1="0" x2="0" y2="-80" stroke="#3498db" stroke-width="4"/>
    
    <!-- First adjacent angle -->
    <line x1="0" y1="0" x2="60" y2="-45" stroke="#e74c3c" stroke-width="3"/>
    <path d="M 0 -25 A 25 25 0 0 1 18.75 -14.06" fill="none" stroke="#f39c12" stroke-width="2"/>
    <text x="20" y="-30" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">α</text>
    
    <!-- Second adjacent angle -->
    <line x1="0" y1="0" x2="-60" y2="-45" stroke="#e74c3c" stroke-width="3"/>
    <path d="M 0 -25 A 25 25 0 0 0 -18.75 -14.06" fill="none" stroke="#27ae60" stroke-width="2"/>
    <text x="-25" y="-30" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">β</text>
    
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    
    <!-- Shared vertex indicator -->
    <circle cx="0" cy="0" r="8" fill="none" stroke="#9b59b6" stroke-width="2" stroke-dasharray="3,3"/>
    
    <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Adjacent Angles</text>
    <text x="0" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Share a common vertex and ray</text>
    <text x="0" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">No interior overlap</text>
  </g>
  
  <!-- Opposite Angles (Vertical Angles) -->
  <g transform="translate(500, 350)">
    <!-- Two intersecting lines -->
    <line x1="-70" y1="-50" x2="70" y2="50" stroke="#3498db" stroke-width="3"/>
    <line x1="-70" y1="50" x2="70" y2="-50" stroke="#e74c3c" stroke-width="3"/>
    
    <!-- Top angle (α) -->
    <path d="M -24.2 -21.2 A 30 30 0 0 1 0 -30" fill="none" stroke="#f39c12" stroke-width="3"/>
    <path d="M 0 -30 A 30 30 0 0 1 24.2 -21.2" fill="none" stroke="#f39c12" stroke-width="3"/>
    <text x="25" y="-35" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#f39c12">α</text>
    
    <!-- Bottom angle (α) - opposite to top -->
    <path d="M 26.2 21.2 A 30 30 0 0 1 0 30" fill="none" stroke="#f39c12" stroke-width="3"/>
    <path d="M 0 30 A 30 30 0 0 1 -21.2 21.2" fill="none" stroke="#f39c12" stroke-width="3"/>
    <text x="-35" y="45" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#f39c12">α</text>
    
    <!-- Left angle (β) -->
    <path d="M -30 0 A 30 30 0 0 1 -21.2 21.2" fill="none" stroke="#27ae60" stroke-width="3"/>
    <text x="-45" y="15" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#27ae60">β</text>
    
    <!-- Right angle (β) - opposite to left -->
    <path d="M 30 0 A 30 30 0 0 1 21.2 -21.2" fill="none" stroke="#27ae60" stroke-width="3"/>
    <text x="45" y="-15" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#27ae60">β</text>
    
    <circle cx="0" cy="0" r="2" fill="#2c3e50"/>
    
    <text x="0" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Opposite Angles</text>
    <text x="0" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Vertical angles are equal</text>
    <text x="0" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">α = α, β = β</text>
  </g>
  
  <!-- Linear Combinations Section -->
  <g transform="translate(150, 550)">
    <rect x="-20" y="-20" width="600" height="120" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2" rx="10"/>
    
    <text x="280" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Linear Combinations</text>
    
    <text x="20" y="25" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
      <tspan font-weight="bold">Complementary:</tspan> α + β = 90° (angles sum to a right angle)
    </text>
    
    <text x="20" y="45" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
      <tspan font-weight="bold">Supplementary:</tspan> α + β = 180° (angles sum to a straight angle)
    </text>
    
    <text x="20" y="65" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
      <tspan font-weight="bold">Full rotation:</tspan> Σα = 360° (angles around a point)
    </text>
    
    <text x="20" y="85" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
      <tspan font-weight="bold">General form:</tspan> a₁α₁ + a₂α₂ + ... + aₙαₙ = k (weighted combination)
    </text>
  </g>
  
  <!-- Legend -->
  <g transform="translate(50, 680)">
    <line x1="0" y1="0" x2="20" y2="0" stroke="#3498db" stroke-width="3"/>
    <text x="25" y="4" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Initial Ray</text>
    
    <line x1="100" y1="0" x2="120" y2="0" stroke="#e74c3c" stroke-width="3"/>
    <text x="125" y="4" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Terminal Ray</text>
    
    <path d="M 200 0 A 8 8 0 0 1 216 0" fill="none" stroke="#f39c12" stroke-width="2"/>
    <text x="220" y="4" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Angle Arc</text>
    
    <circle cx="320" cy="0" r="3" fill="#2c3e50"/>
    <text x="330" y="4" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Vertex</text>
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
    }
}