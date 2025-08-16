
export const identitiesData={
    "Unit Circle":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1650 -1650 3300 3300">
  <!-- Background -->
  <rect x="-1650" y="-1650" width="3300" height="3300" fill="#f8f9fa" />
  
  <!-- Coordinate system -->
  <line x1="-1500" y1="0" x2="1500" y2="0" stroke="#888" stroke-width="3" />
  <line x1="0" y1="-1500" x2="0" y2="1500" stroke="#888" stroke-width="3" />
  
  <!-- Degree markers (every 30 degrees) -->
  <g stroke="#aaa" stroke-width="3">
    <line x1="-1350" y1="0" x2="-1500" y2="0" />
    <line x1="1350" y1="0" x2="1500" y2="0" />
    <line x1="0" y1="-1350" x2="0" y2="-1500" />
    <line x1="0" y1="1350" x2="0" y2="1500" />
  </g>
  
  <!-- Unit circle -->
  <circle cx="0" cy="0" r="1200" fill="none" stroke="#333" stroke-width="6" />
  
  <!-- Degree lines (every 30 degrees) -->
  <g stroke="#666" stroke-width="4.5" stroke-dasharray="15,15">
    <!-- 30° -->
    <line x1="0" y1="0" x2="1039.23" y2="-600" />
    <!-- 60° -->
    <line x1="0" y1="0" x2="600" y2="-1039.23" />
    
    <!-- 120° -->
    <line x1="0" y1="0" x2="-600" y2="-1039.23" />
    <!-- 150° -->
    <line x1="0" y1="0" x2="-1039.23" y2="-600" />
    
    <!-- 210° -->
    <line x1="0" y1="0" x2="-1039.23" y2="600" />
    <!-- 240° -->
    <line x1="0" y1="0" x2="-600" y2="1039.23" />
    
    <!-- 300° -->
    <line x1="0" y1="0" x2="600" y2="1039.23" />
    <!-- 330° -->
    <line x1="0" y1="0" x2="1039.23" y2="600" />
  </g>
  
  <!-- Degree text (every 30 degrees) -->
  <g font-family="Arial, sans-serif" font-size="60" text-anchor="middle">
    <!-- 0° -->
    <text x="1290" y="90">0°</text>
    <!-- 30° -->
    <text x="1110" y="-570">30°</text>
    <!-- 60° -->
    <text x="660" y="-1020">60°</text>
    <!-- 90° -->
    <text x="0" y="-1290">90°</text>
    <!-- 120° -->
    <text x="-660" y="-1020">120°</text>
    <!-- 150° -->
    <text x="-1110" y="-570">150°</text>
    <!-- 180° -->
    <text x="-1290" y="90">180°</text>
    <!-- 210° -->
    <text x="-1110" y="630">210°</text>
    <!-- 240° -->
    <text x="-660" y="1110">240°</text>
    <!-- 270° -->
    <text x="0" y="1290">270°</text>
    <!-- 300° -->
    <text x="660" y="1110">300°</text>
    <!-- 330° -->
    <text x="1110" y="630">330°</text>
  </g>
  
  <!-- Degree markers (every 10 degrees) -->
  <g stroke="#999" stroke-width="3">
    <!-- 10° -->
    <line x1="1181.76" y1="-205.2" x2="1241.76" y2="-215.82" />
    <!-- 20° -->
    <line x1="1127.64" y1="-410.43" x2="1184.01" y2="-430.95" />
  </g>
  
  <!-- Special points on the unit circle -->
  <g fill="#e63946" stroke="none">
    <!-- 0° / 360° -->
    <circle cx="1200" cy="0" r="18" />
    <!-- 90° -->
    <circle cx="0" cy="-1200" r="18" />
    <!-- 180° -->
    <circle cx="-1200" cy="0" r="18" />
    <!-- 270° -->
    <circle cx="0" cy="1200" r="18" />
    
    <!-- 30° -->
    <circle cx="1039.23" cy="-600" r="18" />
    <!-- 60° -->
    <circle cx="600" cy="-1039.23" r="18" />
    <!-- 120° -->
    <circle cx="-600" cy="-1039.23" r="18" />
    <!-- 150° -->
    <circle cx="-1039.23" cy="-600" r="18" />
    <!-- 210° -->
    <circle cx="-1039.23" cy="600" r="18" />
    <!-- 240° -->
    <circle cx="-600" cy="1039.23" r="18" />
    <!-- 300° -->
    <circle cx="600" cy="1039.23" r="18" />
    <!-- 330° -->
    <circle cx="1039.23" cy="600" r="18" />
  </g>
  
  <!-- Title -->
  <text x="0" y="-1500" font-family="Arial, sans-serif" font-size="72" text-anchor="middle" font-weight="bold">Unit Circle - 360 Degrees</text>
  
  <!-- Center dot -->
  <circle cx="0" cy="0" r="12" fill="#000" />
  
  <!-- Labels for quadrants -->
  <g font-family="Arial, sans-serif" font-size="72" fill="#444" font-weight="bold">
    <text x="450" y="-450" text-anchor="middle">Quadrant I</text>
    <text x="-450" y="-450" text-anchor="middle">Quadrant II</text>
    <text x="-450" y="450" text-anchor="middle">Quadrant III</text>
    <text x="450" y="450" text-anchor="middle">Quadrant IV</text>
  </g>
  
  <!-- Radius example - moved to 0 degrees horizontal -->
  <line x1="0" y1="0" x2="1200" y2="0" stroke="#0066cc" stroke-width="9" />
  <text x="600" y="-60" font-family="Arial, sans-serif" font-size="48" fill="#0066cc">r = 1</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Signs of All trigonometric Functions":{
        svg:`<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="300" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    Unit Circle: Signs of All 6 Trigonometric Functions
  </text>
  
  <!-- Large unit circle with quadrants -->
  <g transform="translate(300, 300)">
    
    <!-- Coordinate axes -->
    <line x1="-220" y1="0" x2="220" y2="0" stroke="#2c3e50" stroke-width="3"/>
    <line x1="0" y1="220" x2="0" y2="-220" stroke="#2c3e50" stroke-width="3"/>
    <text x="225" y="5" font-size="14" fill="#2c3e50" font-weight="bold">x</text>
    <text x="5" y="-225" font-size="14" fill="#2c3e50" font-weight="bold">y</text>
    
    <!-- Large unit circle -->
    <circle cx="0" cy="0" r="210" fill="none" stroke="#666" stroke-width="2"/>
    
    <!-- Quadrant I (top-right) -->
    <g transform="translate(100, -100)">
      <text x="0" y="-55" text-anchor="middle" font-size="20" fill="#2c3e50" font-weight="bold">I</text>
      <text x="0" y="-30" text-anchor="middle" font-size="12" fill="#666">(0° to 90°)</text>
      
      <text x="0" y="-10" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">sin θ: +</text>
      <text x="0" y="10" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">cos θ: +</text>
      <text x="0" y="30" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">tan θ: +</text>
      <text x="0" y="50" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">csc θ: +</text>
      <text x="0" y="70" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">sec θ: +</text>
      <text x="0" y="90" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">cot θ: +</text>
    </g>
    
    <!-- Quadrant II (top-left) -->
    <g transform="translate(-100, -100)">
      <text x="0" y="-55" text-anchor="middle" font-size="20" fill="#2c3e50" font-weight="bold">II</text>
      <text x="0" y="-30" text-anchor="middle" font-size="12" fill="#666">(90° to 180°)</text>
      
      <text x="0" y="-10" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">sin θ: +</text>
      <text x="0" y="10" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">cos θ: -</text>
      <text x="0" y="30" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">tan θ: -</text>
      <text x="0" y="50" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">csc θ: +</text>
      <text x="0" y="70" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">sec θ: -</text>
      <text x="0" y="90" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">cot θ: -</text>
    </g>
    
    <!-- Quadrant III (bottom-left) -->
    <g transform="translate(-100, 100)">
      <text x="0" y="-85" text-anchor="middle" font-size="20" fill="#2c3e50" font-weight="bold">III</text>
      <text x="0" y="-60" text-anchor="middle" font-size="12" fill="#666">(180° to 270°)</text>
      
      <text x="0" y="-40" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">sin θ: -</text>
      <text x="0" y="-20" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">cos θ: -</text>
      <text x="0" y="0" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">tan θ: +</text>
      <text x="0" y="20" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">csc θ: -</text>
      <text x="0" y="40" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">sec θ: -</text>
      <text x="0" y="60" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">cot θ: +</text>
    </g>
    
    <!-- Quadrant IV (bottom-right) -->
    <g transform="translate(100, 100)">
      <text x="0" y="-85" text-anchor="middle" font-size="20" fill="#2c3e50" font-weight="bold">IV</text>
      <text x="0" y="-60" text-anchor="middle" font-size="12" fill="#666">(270° to 360°)</text>
      
      <text x="0" y="-40" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">sin θ: -</text>
      <text x="0" y="-20" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">cos θ: +</text>
      <text x="0" y="0" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">tan θ: -</text>
      <text x="0" y="20" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">csc θ: -</text>
      <text x="0" y="40" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">sec θ: +</text>
      <text x="0" y="60" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">cot θ: -</text>
    </g>
    
  </g>
  
  <!-- Legend -->
  <g transform="translate(50, 520)">
    <text x="250" y="0" text-anchor="middle" font-size="14" fill="#2c3e50" font-weight="bold">
      Remember: csc = 1/sin, sec = 1/cos, cot = 1/tan
    </text>
    <text x="250" y="20" text-anchor="middle" font-size="12" fill="#666">
      Reciprocal functions have the same sign as their corresponding function
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
    "Sine Function Signs by Quadrants":{
        svg:`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    Why Sine is Positive/Negative in Each Quadrant
  </text>
  
  <!-- Unit circle -->
  <g transform="translate(400, 300)">
    
    <!-- Coordinate axes -->
    <line x1="-200" y1="0" x2="200" y2="0" stroke="#2c3e50" stroke-width="2"/>
    <line x1="0" y1="200" x2="0" y2="-200" stroke="#2c3e50" stroke-width="2"/>
    <text x="205" y="5" font-size="12" fill="#2c3e50">x</text>
    <text x="5" y="-205" font-size="12" fill="#2c3e50">y</text>
    
    <!-- Unit circle -->
    <circle cx="0" cy="0" r="150" fill="none" stroke="#666" stroke-width="2"/>
    
    <!-- Quadrant background shading -->
    <path d="M0,0 L150,0 A150,150 0 0,0 0,-150 Z" fill="#d5f4e6" opacity="0.3"/>
    <path d="M0,0 L0,-150 A150,150 0 0,0 -150,0 Z" fill="#d5f4e6" opacity="0.3"/>
    <path d="M0,0 L-150,0 A150,150 0 0,0 0,150 Z" fill="#fadbd8" opacity="0.3"/>
    <path d="M0,0 L0,150 A150,150 0 0,0 150,0 Z" fill="#fadbd8" opacity="0.3"/>
    
    <!-- Sample points in each quadrant -->
    <!-- Quadrant I -->
    <circle cx="106" cy="-106" r="4" fill="#27ae60"/>
    <line x1="0" y1="0" x2="106" y2="-106" stroke="#666" stroke-width="2"/>
    <line x1="106" y1="0" x2="106" y2="-106" stroke="#27ae60" stroke-width="4"/>
    <text x="115" y="-50" font-size="12" fill="#27ae60" font-weight="bold">sin θ > 0</text>
    <text x="115" y="-35" font-size="10" fill="#27ae60">(y > 0)</text>
    
    <!-- Quadrant II -->
    <circle cx="-106" cy="-106" r="4" fill="#27ae60"/>
    <line x1="0" y1="0" x2="-106" y2="-106" stroke="#666" stroke-width="2"/>
    <line x1="-106" y1="0" x2="-106" y2="-106" stroke="#27ae60" stroke-width="4"/>
    <text x="-180" y="-50" font-size="12" fill="#27ae60" font-weight="bold">sin θ > 0</text>
    <text x="-160" y="-35" font-size="10" fill="#27ae60">(y > 0)</text>
    
    <!-- Quadrant III -->
    <circle cx="-106" cy="106" r="4" fill="#e74c3c"/>
    <line x1="0" y1="0" x2="-106" y2="106" stroke="#666" stroke-width="2"/>
    <line x1="-106" y1="0" x2="-106" y2="106" stroke="#e74c3c" stroke-width="4"/>
    <text x="-180" y="70" font-size="12" fill="#e74c3c" font-weight="bold">sin θ < 0</text>
    <text x="-160" y="85" font-size="10" fill="#e74c3c">(y < 0)</text>
    
    <!-- Quadrant IV -->
    <circle cx="106" cy="106" r="4" fill="#e74c3c"/>
    <line x1="0" y1="0" x2="106" y2="106" stroke="#666" stroke-width="2"/>
    <line x1="106" y1="0" x2="106" y2="106" stroke="#e74c3c" stroke-width="4"/>
    <text x="115" y="70" font-size="12" fill="#e74c3c" font-weight="bold">sin θ < 0</text>
    <text x="115" y="85" font-size="10" fill="#e74c3c">(y < 0)</text>
    
    <!-- Quadrant labels -->
    <text x="75" y="-75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">I</text>
    <text x="-75" y="-75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">II</text>
    <text x="-75" y="75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">III</text>
    <text x="75" y="75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">IV</text>
    
    <!-- Horizontal reference line -->
    <line x1="-170" y1="0" x2="170" y2="0" stroke="#2c3e50" stroke-width="3" opacity="0.7"/>
    <text x="-190" y="5" font-size="10" fill="#2c3e50">y = 0</text>
    
  </g>
  
  <!-- Explanation boxes -->
  <g transform="translate(50, 480)">
    <rect x="0" y="0" width="320" height="80" fill="#d5f4e6" stroke="#27ae60" stroke-width="2" rx="10"/>
    <text x="160" y="20" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">
      Quadrants I & II: sin θ > 0
    </text>
    <text x="20" y="40" font-size="12" fill="#000">
      • Points are ABOVE the x-axis (y > 0)
    </text>
    <text x="20" y="55" font-size="12" fill="#000">
      • Sine measures y-coordinate
    </text>
    <text x="20" y="70" font-size="12" fill="#27ae60" font-weight="bold">
      • Therefore: sin θ = positive value
    </text>
  </g>
  
  <g transform="translate(430, 480)">
    <rect x="0" y="0" width="320" height="80" fill="#fadbd8" stroke="#e74c3c" stroke-width="2" rx="10"/>
    <text x="160" y="20" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">
      Quadrants III & IV: sin θ < 0
    </text>
    <text x="20" y="40" font-size="12" fill="#000">
      • Points are BELOW the x-axis (y < 0)
    </text>
    <text x="20" y="55" font-size="12" fill="#000">
      • Sine measures y-coordinate
    </text>
    <text x="20" y="70" font-size="12" fill="#e74c3c" font-weight="bold">
      • Therefore: sin θ = negative value
    </text>
  </g>
  
  <!-- Key insight -->
  <g transform="translate(50, 60)">
    <rect x="0" y="0" width="700" height="50" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="10"/>
    <text x="350" y="25" text-anchor="middle" font-size="14" fill="#2c3e50" font-weight="bold">
      Key Insight: sin θ = y-coordinate of point on unit circle
    </text>
    <text x="350" y="40" text-anchor="middle" font-size="12" fill="#666">
      Above x-axis → positive y → positive sine | Below x-axis → negative y → negative sine
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
    "Cosine Function Signs by Quadrants":{
        svg:`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    Why Cosine is Positive/Negative in Each Quadrant
  </text>
  
  <!-- Unit circle -->
  <g transform="translate(400, 300)">
    
    <!-- Coordinate axes -->
    <line x1="-200" y1="0" x2="200" y2="0" stroke="#2c3e50" stroke-width="2"/>
    <line x1="0" y1="200" x2="0" y2="-200" stroke="#2c3e50" stroke-width="2"/>
    <text x="205" y="5" font-size="12" fill="#2c3e50">x</text>
    <text x="5" y="-205" font-size="12" fill="#2c3e50">y</text>
    
    <!-- Unit circle -->
    <circle cx="0" cy="0" r="150" fill="none" stroke="#666" stroke-width="2"/>
    
    <!-- Quadrant background shading -->
    <path d="M0,0 L150,0 A150,150 0 0,0 0,-150 Z" fill="#d5f4e6" opacity="0.3"/>
    <path d="M0,0 L0,150 A150,150 0 0,0 150,0 Z" fill="#d5f4e6" opacity="0.3"/>
    <path d="M0,0 L0,-150 A150,150 0 0,0 -150,0 Z" fill="#fadbd8" opacity="0.3"/>
    <path d="M0,0 L-150,0 A150,150 0 0,0 0,150 Z" fill="#fadbd8" opacity="0.3"/>
    
    <!-- Sample points in each quadrant -->
    <!-- Quadrant I -->
    <circle cx="106" cy="-106" r="4" fill="#27ae60"/>
    <line x1="0" y1="0" x2="106" y2="-106" stroke="#666" stroke-width="2"/>
    <line x1="106" y1="-106" x2="106" y2="0" stroke="#27ae60" stroke-width="2" stroke-dasharray="3,3"/>
    <line x1="0" y1="0" x2="106" y2="0" stroke="#27ae60" stroke-width="4"/>
    <text x="50" y="-20" font-size="12" fill="#27ae60" font-weight="bold">cos θ > 0</text>
    <text x="50" y="-5" font-size="10" fill="#27ae60">(x > 0)</text>
    
    <!-- Quadrant II -->
    <circle cx="-106" cy="-106" r="4" fill="#e74c3c"/>
    <line x1="0" y1="0" x2="-106" y2="-106" stroke="#666" stroke-width="2"/>
    <line x1="-106" y1="-106" x2="-106" y2="0" stroke="#e74c3c" stroke-width="2" stroke-dasharray="3,3"/>
    <line x1="0" y1="0" x2="-106" y2="0" stroke="#e74c3c" stroke-width="4"/>
    <text x="-100" y="-20" font-size="12" fill="#e74c3c" font-weight="bold">cos θ < 0</text>
    <text x="-80" y="-5" font-size="10" fill="#e74c3c">(x < 0)</text>
    
    <!-- Quadrant III -->
    <circle cx="-106" cy="106" r="4" fill="#e74c3c"/>
    <line x1="0" y1="0" x2="-106" y2="106" stroke="#666" stroke-width="2"/>
    <line x1="-106" y1="106" x2="-106" y2="0" stroke="#e74c3c" stroke-width="2" stroke-dasharray="3,3"/>
    <line x1="0" y1="0" x2="-106" y2="0" stroke="#e74c3c" stroke-width="4"/>
    <text x="-100" y="30" font-size="12" fill="#e74c3c" font-weight="bold">cos θ < 0</text>
    <text x="-80" y="45" font-size="10" fill="#e74c3c">(x < 0)</text>
    
    <!-- Quadrant IV -->
    <circle cx="106" cy="106" r="4" fill="#27ae60"/>
    <line x1="0" y1="0" x2="106" y2="106" stroke="#666" stroke-width="2"/>
    <line x1="106" y1="106" x2="106" y2="0" stroke="#27ae60" stroke-width="2" stroke-dasharray="3,3"/>
    <line x1="0" y1="0" x2="106" y2="0" stroke="#27ae60" stroke-width="4"/>
    <text x="50" y="30" font-size="12" fill="#27ae60" font-weight="bold">cos θ > 0</text>
    <text x="50" y="45" font-size="10" fill="#27ae60">(x > 0)</text>
    
    <!-- Quadrant labels -->
    <text x="75" y="-75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">I</text>
    <text x="75" y="-58" text-anchor="middle" font-size="10" fill="#666">(0° to 90°)</text>
    <text x="-75" y="-75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">II</text>
    <text x="-75" y="-58" text-anchor="middle" font-size="10" fill="#666">(90° to 180°)</text>
    <text x="-75" y="75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">III</text>
    <text x="-75" y="92" text-anchor="middle" font-size="10" fill="#666">(180° to 270°)</text>
    <text x="75" y="75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">IV</text>
    <text x="75" y="92" text-anchor="middle" font-size="10" fill="#666">(270° to 360°)</text>
    
    <!-- Vertical reference line -->
    <line x1="0" y1="-170" x2="0" y2="170" stroke="#2c3e50" stroke-width="3" opacity="0.7"/>
    <text x="10" y="-180" font-size="10" fill="#2c3e50">x = 0</text>
    
  </g>
  
  <!-- Explanation boxes -->
  <g transform="translate(50, 480)">
    <rect x="0" y="0" width="320" height="80" fill="#d5f4e6" stroke="#27ae60" stroke-width="2" rx="10"/>
    <text x="160" y="20" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">
      Quadrants I & IV: cos θ > 0
    </text>
    <text x="20" y="40" font-size="12" fill="#000">
      • Points are RIGHT of the y-axis (x > 0)
    </text>
    <text x="20" y="55" font-size="12" fill="#000">
      • Cosine measures x-coordinate
    </text>
    <text x="20" y="70" font-size="12" fill="#27ae60" font-weight="bold">
      • Therefore: cos θ = positive value
    </text>
  </g>
  
  <g transform="translate(430, 480)">
    <rect x="0" y="0" width="320" height="80" fill="#fadbd8" stroke="#e74c3c" stroke-width="2" rx="10"/>
    <text x="160" y="20" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">
      Quadrants II & III: cos θ < 0
    </text>
    <text x="20" y="40" font-size="12" fill="#000">
      • Points are LEFT of the y-axis (x < 0)
    </text>
    <text x="20" y="55" font-size="12" fill="#000">
      • Cosine measures x-coordinate
    </text>
    <text x="20" y="70" font-size="12" fill="#e74c3c" font-weight="bold">
      • Therefore: cos θ = negative value
    </text>
  </g>
  
  <!-- Key insight -->
  <g transform="translate(50, 60)">
    <rect x="0" y="0" width="700" height="50" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="10"/>
    <text x="350" y="25" text-anchor="middle" font-size="14" fill="#2c3e50" font-weight="bold">
      Key Insight: cos θ = x-coordinate of point on unit circle
    </text>
    <text x="350" y="40" text-anchor="middle" font-size="12" fill="#666">
      Right of y-axis → positive x → positive cosine | Left of y-axis → negative x → negative cosine
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
    "Sine by Quadrants":{
        svg:`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#2c3e50">
    Why Sine is Positive/Negative in Each Quadrant
  </text>
  
  <!-- Unit circle -->
  <g transform="translate(400, 300)">
    
    <!-- Coordinate axes -->
    <line x1="-200" y1="0" x2="200" y2="0" stroke="#2c3e50" stroke-width="2"/>
    <line x1="0" y1="200" x2="0" y2="-200" stroke="#2c3e50" stroke-width="2"/>
    <text x="205" y="5" font-size="12" fill="#2c3e50">x</text>
    <text x="5" y="-205" font-size="12" fill="#2c3e50">y</text>
    
    <!-- Unit circle -->
    <circle cx="0" cy="0" r="150" fill="none" stroke="#666" stroke-width="2"/>
    
    <!-- Quadrant background shading -->
    <path d="M0,0 L150,0 A150,150 0 0,0 0,-150 Z" fill="#d5f4e6" opacity="0.3"/>
    <path d="M0,0 L0,-150 A150,150 0 0,0 -150,0 Z" fill="#d5f4e6" opacity="0.3"/>
    <path d="M0,0 L-150,0 A150,150 0 0,0 0,150 Z" fill="#fadbd8" opacity="0.3"/>
    <path d="M0,0 L0,150 A150,150 0 0,0 150,0 Z" fill="#fadbd8" opacity="0.3"/>
    
    <!-- Sample points in each quadrant -->
    <!-- Quadrant I -->
    <circle cx="106" cy="-106" r="4" fill="#27ae60"/>
    <line x1="0" y1="0" x2="106" y2="-106" stroke="#666" stroke-width="2"/>
    <line x1="106" y1="0" x2="106" y2="-106" stroke="#27ae60" stroke-width="4"/>
    <text x="115" y="-50" font-size="12" fill="#27ae60" font-weight="bold">sin θ > 0</text>
    <text x="115" y="-35" font-size="10" fill="#27ae60">(y > 0)</text>
    
    <!-- Quadrant II -->
    <circle cx="-106" cy="-106" r="4" fill="#27ae60"/>
    <line x1="0" y1="0" x2="-106" y2="-106" stroke="#666" stroke-width="2"/>
    <line x1="-106" y1="0" x2="-106" y2="-106" stroke="#27ae60" stroke-width="4"/>
    <text x="-180" y="-50" font-size="12" fill="#27ae60" font-weight="bold">sin θ > 0</text>
    <text x="-160" y="-35" font-size="10" fill="#27ae60">(y > 0)</text>
    
    <!-- Quadrant III -->
    <circle cx="-106" cy="106" r="4" fill="#e74c3c"/>
    <line x1="0" y1="0" x2="-106" y2="106" stroke="#666" stroke-width="2"/>
    <line x1="-106" y1="0" x2="-106" y2="106" stroke="#e74c3c" stroke-width="4"/>
    <text x="-180" y="70" font-size="12" fill="#e74c3c" font-weight="bold">sin θ < 0</text>
    <text x="-160" y="85" font-size="10" fill="#e74c3c">(y < 0)</text>
    
    <!-- Quadrant IV -->
    <circle cx="106" cy="106" r="4" fill="#e74c3c"/>
    <line x1="0" y1="0" x2="106" y2="106" stroke="#666" stroke-width="2"/>
    <line x1="106" y1="0" x2="106" y2="106" stroke="#e74c3c" stroke-width="4"/>
    <text x="115" y="70" font-size="12" fill="#e74c3c" font-weight="bold">sin θ < 0</text>
    <text x="115" y="85" font-size="10" fill="#e74c3c">(y < 0)</text>
    
    <!-- Quadrant labels -->
    <text x="75" y="-75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">I</text>
    <text x="75" y="-58" text-anchor="middle" font-size="10" fill="#666">(0° to 90°)</text>
    <text x="-75" y="-75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">II</text>
    <text x="-75" y="-58" text-anchor="middle" font-size="10" fill="#666">(90° to 180°)</text>
    <text x="-75" y="75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">III</text>
    <text x="-75" y="92" text-anchor="middle" font-size="10" fill="#666">(180° to 270°)</text>
    <text x="75" y="75" text-anchor="middle" font-size="16" fill="#2c3e50" font-weight="bold">IV</text>
    <text x="75" y="92" text-anchor="middle" font-size="10" fill="#666">(270° to 360°)</text>
    
    <!-- Horizontal reference line -->
    <line x1="-170" y1="0" x2="170" y2="0" stroke="#2c3e50" stroke-width="3" opacity="0.7"/>
    <text x="-190" y="5" font-size="10" fill="#2c3e50">y = 0</text>
    
  </g>
  
  <!-- Explanation boxes -->
  <g transform="translate(50, 480)">
    <rect x="0" y="0" width="320" height="80" fill="#d5f4e6" stroke="#27ae60" stroke-width="2" rx="10"/>
    <text x="160" y="20" text-anchor="middle" font-size="14" fill="#27ae60" font-weight="bold">
      Quadrants I & II: sin θ > 0
    </text>
    <text x="20" y="40" font-size="12" fill="#000">
      • Points are ABOVE the x-axis (y > 0)
    </text>
    <text x="20" y="55" font-size="12" fill="#000">
      • Sine measures y-coordinate
    </text>
    <text x="20" y="70" font-size="12" fill="#27ae60" font-weight="bold">
      • Therefore: sin θ = positive value
    </text>
  </g>
  
  <g transform="translate(430, 480)">
    <rect x="0" y="0" width="320" height="80" fill="#fadbd8" stroke="#e74c3c" stroke-width="2" rx="10"/>
    <text x="160" y="20" text-anchor="middle" font-size="14" fill="#e74c3c" font-weight="bold">
      Quadrants III & IV: sin θ < 0
    </text>
    <text x="20" y="40" font-size="12" fill="#000">
      • Points are BELOW the x-axis (y < 0)
    </text>
    <text x="20" y="55" font-size="12" fill="#000">
      • Sine measures y-coordinate
    </text>
    <text x="20" y="70" font-size="12" fill="#e74c3c" font-weight="bold">
      • Therefore: sin θ = negative value
    </text>
  </g>
  
  <!-- Key insight -->
  <g transform="translate(50, 60)">
    <rect x="0" y="0" width="700" height="50" fill="#f8f9fa" stroke="#34495e" stroke-width="2" rx="10"/>
    <text x="350" y="25" text-anchor="middle" font-size="14" fill="#2c3e50" font-weight="bold">
      Key Insight: sin θ = y-coordinate of point on unit circle
    </text>
    <text x="350" y="40" text-anchor="middle" font-size="12" fill="#666">
      Above x-axis → positive y → positive sine | Below x-axis → negative y → negative sine
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
    "Trivial Angles and Trigonometric Functions Values":{
        svg:`<svg width="500" height="700" viewBox="-250 -250 500 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .axis { stroke: #333; stroke-width: 2; }
      .grid { stroke: #ddd; stroke-width: 1; }
      .circle { stroke: #000; stroke-width: 3; fill: none; }
      .angle-line { stroke: #666; stroke-width: 1.5; }
      .point { fill: #d00; stroke: #000; stroke-width: 2; }
      .label { font-family: Arial, sans-serif; font-size: 12px; text-anchor: middle; dominant-baseline: central; }
      .coordinate { font-family: Arial, sans-serif; font-size: 10px; text-anchor: middle; dominant-baseline: central; fill: #000; }
      .angle-label { font-family: Arial, sans-serif; font-size: 9px; text-anchor: middle; dominant-baseline: central; fill: #666; }
      .explanation-box { fill: #f5f5f5; stroke: #333; stroke-width: 2; }
      .explanation-text { font-family: Arial, sans-serif; font-size: 12px; fill: #000; }
      .explanation-title { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #000; }
      .explanation-small { font-family: Arial, sans-serif; font-size: 10px; fill: #333; }
    </style>
  </defs>
  
  <!-- Grid lines -->
  <g class="grid">
    <line x1="-220" y1="0" x2="220" y2="0"/>
    <line x1="0" y1="-220" x2="0" y2="220"/>
    <circle cx="0" cy="0" r="60" fill="none"/>
    <circle cx="0" cy="0" r="120" fill="none"/>
  </g>
  
  <!-- Main axes -->
  <g class="axis">
    <line x1="-240" y1="0" x2="240" y2="0" marker-end="url(#arrowhead)"/>
    <line x1="0" y1="240" x2="0" y2="-240" marker-end="url(#arrowhead)"/>
  </g>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
    </marker>
  </defs>
  
  <!-- Unit circle -->
  <circle cx="0" cy="0" r="180" class="circle"/>
  
  <!-- Angle lines -->
  <g class="angle-line">
    <!-- 0° -->
    <line x1="0" y1="0" x2="180" y2="0"/>
    <!-- 30° -->
    <line x1="0" y1="0" x2="155.9" y2="-90"/>
    <!-- 45° -->
    <line x1="0" y1="0" x2="127.3" y2="-127.3"/>
    <!-- 60° -->
    <line x1="0" y1="0" x2="90" y2="-155.9"/>
    <!-- 90° -->
    <line x1="0" y1="0" x2="0" y2="-180"/>
    <!-- 120° -->
    <line x1="0" y1="0" x2="-90" y2="-155.9"/>
    <!-- 135° -->
    <line x1="0" y1="0" x2="-127.3" y2="-127.3"/>
    <!-- 150° -->
    <line x1="0" y1="0" x2="-155.9" y2="-90"/>
    <!-- 180° -->
    <line x1="0" y1="0" x2="-180" y2="0"/>
    <!-- 210° -->
    <line x1="0" y1="0" x2="-155.9" y2="90"/>
    <!-- 225° -->
    <line x1="0" y1="0" x2="-127.3" y2="127.3"/>
    <!-- 240° -->
    <line x1="0" y1="0" x2="-90" y2="155.9"/>
    <!-- 270° -->
    <line x1="0" y1="0" x2="0" y2="180"/>
    <!-- 300° -->
    <line x1="0" y1="0" x2="90" y2="155.9"/>
    <!-- 315° -->
    <line x1="0" y1="0" x2="127.3" y2="127.3"/>
    <!-- 330° -->
    <line x1="0" y1="0" x2="155.9" y2="90"/>
  </g>
  
  <!-- Points on circle -->
  <g class="point">
    <!-- 0° (1, 0) -->
    <circle cx="180" cy="0" r="4"/>
    <!-- 30° (√3/2, 1/2) -->
    <circle cx="155.9" cy="-90" r="4"/>
    <!-- 45° (√2/2, √2/2) -->
    <circle cx="127.3" cy="-127.3" r="4"/>
    <!-- 60° (1/2, √3/2) -->
    <circle cx="90" cy="-155.9" r="4"/>
    <!-- 90° (0, 1) -->
    <circle cx="0" cy="-180" r="4"/>
    <!-- 120° (-1/2, √3/2) -->
    <circle cx="-90" cy="-155.9" r="4"/>
    <!-- 135° (-√2/2, √2/2) -->
    <circle cx="-127.3" cy="-127.3" r="4"/>
    <!-- 150° (-√3/2, 1/2) -->
    <circle cx="-155.9" cy="-90" r="4"/>
    <!-- 180° (-1, 0) -->
    <circle cx="-180" cy="0" r="4"/>
    <!-- 210° (-√3/2, -1/2) -->
    <circle cx="-155.9" cy="90" r="4"/>
    <!-- 225° (-√2/2, -√2/2) -->
    <circle cx="-127.3" cy="127.3" r="4"/>
    <!-- 240° (-1/2, -√3/2) -->
    <circle cx="-90" cy="155.9" r="4"/>
    <!-- 270° (0, -1) -->
    <circle cx="0" cy="180" r="4"/>
    <!-- 300° (1/2, -√3/2) -->
    <circle cx="90" cy="155.9" r="4"/>
    <!-- 315° (√2/2, -√2/2) -->
    <circle cx="127.3" cy="127.3" r="4"/>
    <!-- 330° (√3/2, -1/2) -->
    <circle cx="155.9" cy="90" r="4"/>
  </g>
  
  <!-- Coordinate labels -->
  <g class="coordinate">
    <!-- 0° -->
    <text x="200" y="0">(1, 0)</text>
    <!-- 30° -->
    <text x="180" y="-110">(√3/2, 1/2)</text>
    <!-- 45° -->
    <text x="155" y="-155">(√2/2, √2/2)</text>
    <!-- 60° -->
    <text x="110" y="-180">(1/2, √3/2)</text>
    <!-- 90° -->
    <text x="0" y="-200">(0, 1)</text>
    <!-- 120° -->
    <text x="-110" y="-180">(-1/2, √3/2)</text>
    <!-- 135° -->
    <text x="-155" y="-155">(-√2/2, √2/2)</text>
    <!-- 150° -->
    <text x="-180" y="-110">(-√3/2, 1/2)</text>
    <!-- 180° -->
    <text x="-200" y="0">(-1, 0)</text>
    <!-- 210° -->
    <text x="-180" y="110">(-√3/2, -1/2)</text>
    <!-- 225° -->
    <text x="-155" y="155">(-√2/2, -√2/2)</text>
    <!-- 240° -->
    <text x="-110" y="180">(-1/2, -√3/2)</text>
    <!-- 270° -->
    <text x="0" y="200">(0, -1)</text>
    <!-- 300° -->
    <text x="110" y="180">(1/2, -√3/2)</text>
    <!-- 315° -->
    <text x="155" y="155">(√2/2, -√2/2)</text>
    <!-- 330° -->
    <text x="180" y="110">(√3/2, -1/2)</text>
  </g>
  
  <!-- Angle labels -->
  <g class="angle-label">
    <text x="50" y="-3">0°</text>
    <text x="45" y="-25">30°</text>
    <text x="35" y="-35">45°</text>
    <text x="25" y="-45">60°</text>
    <text x="3" y="-50">90°</text>
    <text x="-25" y="-45">120°</text>
    <text x="-35" y="-35">135°</text>
    <text x="-45" y="-25">150°</text>
    <text x="-50" y="-3">180°</text>
    <text x="-45" y="25">210°</text>
    <text x="-35" y="35">225°</text>
    <text x="-25" y="45">240°</text>
    <text x="-3" y="50">270°</text>
    <text x="25" y="45">300°</text>
    <text x="35" y="35">315°</text>
    <text x="45" y="25">330°</text>
  </g>
  
  <!-- Axis labels -->
  <text x="220" y="15" class="label">x</text>
  <text x="15" y="-220" class="label">y</text>
  
  <!-- Center point -->
  <circle cx="0" cy="0" r="3" fill="#000"/>
  
  <!-- Explanation box -->
  <rect x="-240" y="280" width="480" height="160" class="explanation-box"/>
  
  <!-- Explanation content -->
  <text x="0" y="300" text-anchor="middle" class="explanation-title">Unit Circle</text>
  
  <text x="-230" y="320" class="explanation-text">• Circle with radius = 1, centered at origin (0,0)</text>
  <text x="-230" y="335" class="explanation-text">• Each point represents (cos θ, sin θ) for angle θ</text>
  <text x="-230" y="350" class="explanation-text">• Moving counterclockwise from positive x-axis</text>
  
  <text x="-230" y="370" class="explanation-text">Key angles and exact values:</text>
  <text x="-230" y="385" class="explanation-small">0°: (1, 0)   30°: (√3/2, 1/2)   45°: (√2/2, √2/2)   60°: (1/2, √3/2)   90°: (0, 1)</text>
  <text x="-230" y="400" class="explanation-small">120°: (-1/2, √3/2)   135°: (-√2/2, √2/2)   150°: (-√3/2, 1/2)   180°: (-1, 0)</text>
  <text x="-230" y="415" class="explanation-small">210°: (-√3/2, -1/2)   225°: (-√2/2, -√2/2)   240°: (-1/2, -√3/2)   270°: (0, -1)</text>
  <text x="-230" y="430" class="explanation-small">300°: (1/2, -√3/2)   315°: (√2/2, -√2/2)   330°: (√3/2, -1/2)   360°: (1, 0)</text>
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