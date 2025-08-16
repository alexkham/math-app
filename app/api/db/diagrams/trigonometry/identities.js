
export const identitiesData={
    "Sine of Negative Angle":{
        svg:`<svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="300" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    sin(-α) = -sin(α)
  </text>
  
  <!-- Unit circle -->
  <g transform="translate(200, 200)">
    
    <!-- Axes -->
    <line x1="-120" y1="0" x2="120" y2="0" stroke="#666" stroke-width="1"/>
    <line x1="0" y1="120" x2="0" y2="-120" stroke="#666" stroke-width="1"/>
    <text x="125" y="5" font-size="12" fill="#666">x</text>
    <text x="5" y="-125" font-size="12" fill="#666">y</text>
    
    <!-- Unit circle -->
    <circle cx="0" cy="0" r="100" fill="none" stroke="#000" stroke-width="2"/>
    
    <!-- Generic angle α -->
    <g>
      <!-- Point for +α -->
      <circle cx="60" cy="-80" r="3" fill="#3498db"/>
      <line x1="0" y1="0" x2="60" y2="-80" stroke="#3498db" stroke-width="2"/>
      <text x="70" y="-85" font-size="12" fill="#3498db">P₁</text>
      
      <!-- Point for -α (reflection across x-axis) -->
      <circle cx="60" cy="80" r="3" fill="#e74c3c"/>
      <line x1="0" y1="0" x2="60" y2="80" stroke="#e74c3c" stroke-width="2"/>
      <text x="70" y="85" font-size="12" fill="#e74c3c">P₂</text>
      
      <!-- Show sine values -->
      <line x1="60" y1="0" x2="60" y2="-80" stroke="#3498db" stroke-width="3"/>
      <text x="70" y="-40" font-size="14" fill="#3498db" font-weight="bold">h</text>
      
      <line x1="60" y1="0" x2="60" y2="80" stroke="#e74c3c" stroke-width="3"/>
      <text x="70" y="40" font-size="14" fill="#e74c3c" font-weight="bold">-h</text>
      
      <!-- Angle markers -->
      <path d="M25,0 A25,25 0 0,0 15,-20" fill="none" stroke="#3498db" stroke-width="2"/>
      <text x="30" y="-5" font-size="12" fill="#3498db">α</text>
      
      <path d="M25,0 A25,25 0 0,1 15,20" fill="none" stroke="#e74c3c" stroke-width="2"/>
      <text x="30" y="15" font-size="12" fill="#e74c3c">-α</text>
    </g>
    
  </g>
  
  <!-- Explanation -->
  <g transform="translate(450, 120)">
    <rect x="-10" y="-10" width="130" height="80" fill="#e8f4f8" stroke="#3498db" stroke-width="2" rx="5"/>
    <text x="55" y="10" text-anchor="middle" font-size="12" fill="#3498db" font-weight="bold">Positive Angle +α</text>
    <text x="10" y="30" font-size="11" fill="#000">Point P₁</text>
    <text x="10" y="45" font-size="11" fill="#000">sin(α) = h</text>
    <text x="10" y="60" font-size="11" fill="#3498db" font-weight="bold">Above x-axis</text>
    
    <rect x="-10" y="90" width="130" height="80" fill="#fdf2f2" stroke="#e74c3c" stroke-width="2" rx="5"/>
    <text x="55" y="110" text-anchor="middle" font-size="12" fill="#e74c3c" font-weight="bold">Negative Angle -α</text>
    <text x="10" y="130" font-size="11" fill="#000">Point P₂</text>
    <text x="10" y="145" font-size="11" fill="#000">sin(-α) = -h</text>
    <text x="10" y="160" font-size="11" fill="#e74c3c" font-weight="bold">Below x-axis</text>
    
    <rect x="-10" y="190" width="130" height="50" fill="#f4f0ff" stroke="#8e44ad" stroke-width="2" rx="5"/>
    <text x="55" y="210" text-anchor="middle" font-size="12" fill="#8e44ad" font-weight="bold">Result</text>
    <text x="55" y="230" text-anchor="middle" font-size="11" fill="#8e44ad" font-weight="bold">sin(-α) = -sin(α)</text>
  </g>
  
  <!-- Why this works -->
  <g transform="translate(50, 380)">
    <rect x="0" y="0" width="500" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="10"/>
    
    <text x="250" y="25" text-anchor="middle" font-size="14" fill="#000" font-weight="bold">
      Why It Works
    </text>
    
    <text x="20" y="45" font-size="12" fill="#000">
      • Rotating by -α is the same as rotating by +α, then reflecting across the x-axis
    </text>
    
    <text x="20" y="60" font-size="12" fill="#000">
      • Sine measures the y-coordinate, so reflection flips the sign
    </text>
    
    <text x="20" y="75" font-size="12" fill="#000">
      • The distance from x-axis stays the same, only the direction changes
    </text>
  </g>
  
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Cosine of Negative Angle":{
        svg:`<svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="300" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    cos(-α) = cos(α)
  </text>
  
  <!-- Unit circle -->
  <g transform="translate(200, 200)">
    
    <!-- Axes -->
    <line x1="-120" y1="0" x2="120" y2="0" stroke="#666" stroke-width="1"/>
    <line x1="0" y1="120" x2="0" y2="-120" stroke="#666" stroke-width="1"/>
    <text x="125" y="5" font-size="12" fill="#666">x</text>
    <text x="5" y="-125" font-size="12" fill="#666">y</text>
    
    <!-- Unit circle -->
    <circle cx="0" cy="0" r="100" fill="none" stroke="#000" stroke-width="2"/>
    
    <!-- Generic angle α -->
    <g>
      <!-- Point for +α -->
      <circle cx="60" cy="-80" r="3" fill="#3498db"/>
      <line x1="0" y1="0" x2="60" y2="-80" stroke="#3498db" stroke-width="2"/>
      <text x="70" y="-85" font-size="12" fill="#3498db">P₁</text>
      
      <!-- Point for -α (reflection across x-axis) -->
      <circle cx="60" cy="80" r="3" fill="#e74c3c"/>
      <line x1="0" y1="0" x2="60" y2="80" stroke="#e74c3c" stroke-width="2"/>
      <text x="70" y="85" font-size="12" fill="#e74c3c">P₂</text>
      
      <!-- Show cosine values -->
      <line x1="60" y1="-80" x2="60" y2="0" stroke="#3498db" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="0" y1="0" x2="60" y2="0" stroke="#3498db" stroke-width="3"/>
      <text x="45" y="-10" font-size="14" fill="#3498db" font-weight="bold">w</text>
      
      <line x1="60" y1="80" x2="60" y2="0" stroke="#e74c3c" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="0" y1="0" x2="60" y2="0" stroke="#e74c3c" stroke-width="3" opacity="0.7"/>
      <text x="45" y="20" font-size="14" fill="#e74c3c" font-weight="bold">w</text>
      
      <!-- Angle markers -->
      <path d="M25,0 A25,25 0 0,0 15,-20" fill="none" stroke="#3498db" stroke-width="2"/>
      <text x="30" y="-5" font-size="12" fill="#3498db">α</text>
      
      <path d="M25,0 A25,25 0 0,1 15,20" fill="none" stroke="#e74c3c" stroke-width="2"/>
      <text x="30" y="15" font-size="12" fill="#e74c3c">-α</text>
    </g>
    
  </g>
  
  <!-- Explanation -->
  <g transform="translate(450, 120)">
    <rect x="-10" y="-10" width="130" height="80" fill="#e8f4f8" stroke="#3498db" stroke-width="2" rx="5"/>
    <text x="55" y="10" text-anchor="middle" font-size="12" fill="#3498db" font-weight="bold">Positive Angle +α</text>
    <text x="10" y="30" font-size="11" fill="#000">Point P₁</text>
    <text x="10" y="45" font-size="11" fill="#000">cos(α) = w</text>
    <text x="10" y="60" font-size="11" fill="#3498db" font-weight="bold">Same x-distance</text>
    
    <rect x="-10" y="90" width="130" height="80" fill="#fdf2f2" stroke="#e74c3c" stroke-width="2" rx="5"/>
    <text x="55" y="110" text-anchor="middle" font-size="12" fill="#e74c3c" font-weight="bold">Negative Angle -α</text>
    <text x="10" y="130" font-size="11" fill="#000">Point P₂</text>
    <text x="10" y="145" font-size="11" fill="#000">cos(-α) = w</text>
    <text x="10" y="160" font-size="11" fill="#e74c3c" font-weight="bold">Same x-distance</text>
    
    <rect x="-10" y="190" width="130" height="50" fill="#f4f0ff" stroke="#8e44ad" stroke-width="2" rx="5"/>
    <text x="55" y="210" text-anchor="middle" font-size="12" fill="#8e44ad" font-weight="bold">Result</text>
    <text x="55" y="230" text-anchor="middle" font-size="11" fill="#8e44ad" font-weight="bold">cos(-α) = cos(α)</text>
  </g>
  
  <!-- Why this works -->
  <g transform="translate(50, 380)">
    <rect x="0" y="0" width="500" height="90" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="10"/>
    
    <text x="250" y="25" text-anchor="middle" font-size="14" fill="#000" font-weight="bold">
      Why It Works
    </text>
    
    <text x="20" y="45" font-size="12" fill="#000">
      • Rotating by -α reflects the point across the x-axis
    </text>
    
    <text x="20" y="60" font-size="12" fill="#000">
      • Cosine measures the x-coordinate, which stays the same during x-axis reflection
    </text>
    
    <text x="20" y="75" font-size="12" fill="#000">
      • Both points have identical horizontal distance from the y-axis
    </text>
  </g>
  
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Pythagorean Identity":{
        svg:`<svg viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="350" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    sin²θ + cos²θ = 1
  </text>
  
  <!-- Unit circle with right triangle -->
  <g transform="translate(200, 200)">
    
    <!-- Axes -->
    <line x1="-150" y1="0" x2="150" y2="0" stroke="#666" stroke-width="1"/>
    <line x1="0" y1="150" x2="0" y2="-150" stroke="#666" stroke-width="1"/>
    <text x="155" y="5" font-size="12" fill="#666">x</text>
    <text x="5" y="-155" font-size="12" fill="#666">y</text>
    
    <!-- Unit circle -->
    <circle cx="0" cy="0" r="120" fill="none" stroke="#2c3e50" stroke-width="3"/>
    <text x="125" y="15" font-size="12" fill="#2c3e50" font-weight="bold">r = 1</text>
    
    <!-- Point on circle -->
    <circle cx="72" cy="-96" r="4" fill="#e67e22"/>
    <text x="80" y="-100" font-size="12" fill="#e67e22" font-weight="bold">P</text>
    
    <!-- Right triangle -->
    <g>
      <!-- Hypotenuse (radius = 1) -->
      <line x1="0" y1="0" x2="72" y2="-96" stroke="#e74c3c" stroke-width="4"/>
      <text x="25" y="-55" font-size="14" fill="#e74c3c" font-weight="bold">1</text>
      <text x="15" y="-70" font-size="12" fill="#e74c3c">(radius)</text>
      
      <!-- Cosine (horizontal leg) -->
      <line x1="0" y1="0" x2="72" y2="0" stroke="#3498db" stroke-width="4"/>
      <text x="36" y="15" font-size="14" fill="#3498db" font-weight="bold">cos θ</text>
      
      <!-- Sine (vertical leg) -->
      <line x1="72" y1="0" x2="72" y2="-96" stroke="#27ae60" stroke-width="4"/>
      <text x="80" y="-48" font-size="14" fill="#27ae60" font-weight="bold">sin θ</text>
      
      <!-- Right angle marker -->
      <rect x="62" y="-10" width="10" height="10" fill="none" stroke="#2c3e50" stroke-width="2"/>
      
      <!-- Angle θ -->
      <path d="M25,0 A25,25 0 0,0 15,-20" fill="none" stroke="#8e44ad" stroke-width="3"/>
      <text x="30" y="-8" font-size="12" fill="#8e44ad" font-weight="bold">θ</text>
    </g>
    
  </g>
  
  <!-- Pythagorean theorem explanation -->
  <g transform="translate(450, 120)">
    <rect x="-10" y="-10" width="220" height="120" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="10"/>
    
    <text x="100" y="15" text-anchor="middle" font-size="14" fill="#000" font-weight="bold">
      Right Triangle in Unit Circle
    </text>
    
    <text x="10" y="40" font-size="12" fill="#e74c3c" font-weight="bold">Hypotenuse = 1 (radius)</text>
    <text x="10" y="60" font-size="12" fill="#3498db" font-weight="bold">Horizontal leg = cos θ</text>
    <text x="10" y="80" font-size="12" fill="#27ae60" font-weight="bold">Vertical leg = sin θ</text>
    <text x="10" y="100" font-size="12" fill="#8e44ad" font-weight="bold">Angle = θ</text>
  </g>
  
  <!-- Pythagorean theorem application -->
  <g transform="translate(50, 350)">
    <rect x="0" y="0" width="600" height="140" fill="#ecf0f1" stroke="#34495e" stroke-width="2" rx="10"/>
    
    <text x="300" y="25" text-anchor="middle" font-size="16" fill="#000" font-weight="bold">
      Pythagorean Theorem Applied
    </text>
    
    <text x="20" y="55" font-size="14" fill="#000">
      In any right triangle: (leg₁)² + (leg₂)² = (hypotenuse)²
    </text>
    
    <text x="20" y="80" font-size="14" fill="#000">
      In our unit circle triangle: (cos θ)² + (sin θ)² = (1)²
    </text>
    
    <text x="20" y="105" font-size="16" fill="#e74c3c" font-weight="bold">
      Therefore: sin²θ + cos²θ = 1
    </text>
    
    <text x="20" y="125" font-size="12" fill="#7f8c8d">
      This works for ANY angle θ because the radius is always 1
    </text>
  </g>
  
  <!-- Visual squares demonstration -->
  <g transform="translate(450, 280)">
    <text x="100" y="0" text-anchor="middle" font-size="14" fill="#000" font-weight="bold">
      Areas Verify the Identity
    </text>
    
    <!-- sin² square -->
    <rect x="0" y="20" width="40" height="40" fill="#a9dfbf" stroke="#27ae60" stroke-width="2"/>
    <text x="20" y="45" text-anchor="middle" font-size="12" fill="#000" font-weight="bold">sin²θ</text>
    
    <!-- + sign -->
    <text x="50" y="45" font-size="16" fill="#000" font-weight="bold">+</text>
    
    <!-- cos² square -->
    <rect x="70" y="20" width="60" height="60" fill="#aed6f1" stroke="#3498db" stroke-width="2"/>
    <text x="100" y="55" text-anchor="middle" font-size="12" fill="#000" font-weight="bold">cos²θ</text>
    
    <!-- = sign -->
    <text x="140" y="45" font-size="16" fill="#000" font-weight="bold">=</text>
    
    <!-- Unit square -->
    <rect x="160" y="20" width="40" height="40" fill="#fadbd8" stroke="#e74c3c" stroke-width="2"/>
    <text x="180" y="45" text-anchor="middle" font-size="12" fill="#000" font-weight="bold">1</text>
    
    <text x="100" y="100" text-anchor="middle" font-size="11" fill="#7f8c8d">
      (Areas proportional to actual values)
    </text>
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
    }
}