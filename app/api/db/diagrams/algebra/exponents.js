
export const identitiesData={
    "Basic Formula":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-300 -300 1300 850">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fafafa;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f0f0;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f8f8f8;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f9f9f9;stop-opacity:1" />
    </linearGradient>
    <filter id="softShadow">
      <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.2"/>
    </filter>
    <filter id="boxShadow">
      <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.15"/>
    </filter>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" stroke="none"/>
    </marker>
  </defs>
  
  <!-- Background -->
  <rect x="-300" y="-300" width="1300" height="850" fill="url(#bgGradient)"/>
  
  <!-- Main circles and variables -->
  <g>
    <circle cx="200" cy="200" r="35" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
    <text x="200" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#374151" font-weight="500">a</text>
    
    <circle cx="260" cy="160" r="25" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
    <text x="260" y="168" font-family="Georgia, serif" font-size="28" text-anchor="middle" fill="#374151" font-weight="500">n</text>
    
    <text x="300" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#9ca3af" font-weight="300">=</text>
    
    <circle cx="370" cy="200" r="35" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
    <text x="370" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#374151" font-weight="500">b</text>
  </g>
  
  <!-- Connecting arrows -->
  <g stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" opacity="0.85">
    <line x1="170" y1="225" x2="90" y2="300" marker-end="url(#arrowhead)"/>
    <line x1="260" y1="135" x2="260" y2="50" marker-end="url(#arrowhead)"/>
    <line x1="400" y1="225" x2="475" y2="300" marker-end="url(#arrowhead)"/>
  </g>
  
  <!-- Information boxes -->
  <g>
    <rect x="20" y="320" width="150" height="90" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
    <rect x="185" y="-60" width="150" height="90" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
    <rect x="400" y="320" width="150" height="70" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
  </g>
  
  <!-- Text content -->
  <g font-family="Georgia, serif" fill="#374151" text-anchor="middle">
    <text x="95" y="345" font-size="16" font-weight="600" fill="#1f2937">Root</text>
    <text x="95" y="365" font-size="15" fill="#4b5563">a = b<tspan dy="-6" font-size="11">1/n</tspan></text>
    <text x="95" y="390" font-size="15" fill="#4b5563">a = <tspan dy="2">ⁿ√</tspan>b</text>
    
    <text x="260" y="-35" font-size="16" font-weight="600" fill="#1f2937">Logarithm</text>
    <text x="260" y="-15" font-size="13" fill="#6b7280">(equals exponent)</text>
    <text x="260" y="5" font-size="15" fill="#4b5563">n = log<tspan dy="3" font-size="11">a</tspan>(b)</text>
    
    <text x="475" y="345" font-size="16" font-weight="600" fill="#1f2937">Power</text>
    <text x="475" y="365" font-size="15" fill="#4b5563">b = a<tspan dy="-6" font-size="11">n</tspan></text>
  </g>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Sum of Exponents":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="400" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    a<tspan font-size="16" dy="-8">m+n</tspan><tspan dy="8"> = a</tspan><tspan font-size="16" dy="-8">m</tspan><tspan dy="8"> × a</tspan><tspan font-size="16" dy="-8">n</tspan>
  </text>
  
  <!-- Example with a=2, m=3, n=2 -->
  <text x="400" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#7f8c8d">
    Example: 2<tspan font-size="12" dy="-6">3+2</tspan><tspan dy="6"> = 2</tspan><tspan font-size="12" dy="-6">3</tspan><tspan dy="6"> × 2</tspan><tspan font-size="12" dy="-6">2</tspan>
  </text>
  
  <!-- Left side: a^m representation -->
  <g transform="translate(50, 100)">
    <text x="60" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#e74c3c">2<tspan font-size="14" dy="-6">3</tspan><tspan dy="6"> = 8</tspan></text>
    
    <!-- Visual representation of 2^3 as 8 blocks -->
    <rect x="0" y="20" width="30" height="30" fill="#e74c3c" fill-opacity="0.8" stroke="#c0392b" stroke-width="2"/>
    <text x="15" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="35" y="20" width="30" height="30" fill="#e74c3c" fill-opacity="0.8" stroke="#c0392b" stroke-width="2"/>
    <text x="50" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="70" y="20" width="30" height="30" fill="#e74c3c" fill-opacity="0.8" stroke="#c0392b" stroke-width="2"/>
    <text x="85" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="0" y="55" width="30" height="30" fill="#e74c3c" fill-opacity="0.8" stroke="#c0392b" stroke-width="2"/>
    <text x="15" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="35" y="55" width="30" height="30" fill="#e74c3c" fill-opacity="0.8" stroke="#c0392b" stroke-width="2"/>
    <text x="50" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="70" y="55" width="30" height="30" fill="#e74c3c" fill-opacity="0.8" stroke="#c0392b" stroke-width="2"/>
    <text x="85" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="0" y="90" width="30" height="30" fill="#e74c3c" fill-opacity="0.8" stroke="#c0392b" stroke-width="2"/>
    <text x="15" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="35" y="90" width="30" height="30" fill="#e74c3c" fill-opacity="0.8" stroke="#c0392b" stroke-width="2"/>
    <text x="50" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <text x="60" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">8 copies of base 'a'</text>
    <text x="60" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">(m = 3 factors)</text>
  </g>
  
  <!-- Multiplication symbol -->
  <text x="200" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#34495e">×</text>
  
  <!-- Middle: a^n representation -->
  <g transform="translate(250, 100)">
    <text x="40" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#3498db">2<tspan font-size="14" dy="-6">2</tspan><tspan dy="6"> = 4</tspan></text>
    
    <!-- Visual representation of 2^2 as 4 blocks -->
    <rect x="0" y="20" width="30" height="30" fill="#3498db" fill-opacity="0.8" stroke="#2980b9" stroke-width="2"/>
    <text x="15" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="35" y="20" width="30" height="30" fill="#3498db" fill-opacity="0.8" stroke="#2980b9" stroke-width="2"/>
    <text x="50" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="0" y="55" width="30" height="30" fill="#3498db" fill-opacity="0.8" stroke="#2980b9" stroke-width="2"/>
    <text x="15" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="35" y="55" width="30" height="30" fill="#3498db" fill-opacity="0.8" stroke="#2980b9" stroke-width="2"/>
    <text x="50" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <text x="40" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">4 copies of base 'a'</text>
    <text x="40" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">(n = 2 factors)</text>
  </g>
  
  <!-- Equals symbol -->
  <text x="380" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#34495e">=</text>
  
  <!-- Right side: a^(m+n) result -->
  <g transform="translate(420, 100)">
    <text x="80" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2ecc71">2<tspan font-size="14" dy="-6">3+2</tspan><tspan dy="6"> = 2</tspan><tspan font-size="14" dy="-6">5</tspan><tspan dy="6"> = 32</tspan></text>
    
    <!-- Visual representation showing 8 × 4 = 32 total factors -->
    <rect x="0" y="20" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="15" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="35" y="20" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="50" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="70" y="20" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="85" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="105" y="20" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="120" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="0" y="55" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="15" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="35" y="55" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="50" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="70" y="55" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="85" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="105" y="55" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="120" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <!-- Continue with remaining squares in a grid pattern -->
    <rect x="0" y="90" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="15" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="35" y="90" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="50" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="70" y="90" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="85" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <rect x="105" y="90" width="30" height="30" fill="#2ecc71" fill-opacity="0.8" stroke="#27ae60" stroke-width="2"/>
    <text x="120" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">2</text>
    
    <text x="67" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">32 total copies of base 'a'</text>
    <text x="67" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">(m + n = 5 factors)</text>
  </g>
  
  <!-- Explanation -->
  <g transform="translate(50, 270)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">How it works:</text>
    
    <text x="0" y="25" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">• a<tspan font-size="11" dy="-4">m</tspan><tspan dy="4"> means "multiply 'a' by itself m times"</tspan></text>
    <text x="0" y="45" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">• a<tspan font-size="11" dy="-4">n</tspan><tspan dy="4"> means "multiply 'a' by itself n times"</tspan></text>
    <text x="0" y="65" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">• a<tspan font-size="11" dy="-4">m</tspan><tspan dy="4"> × a</tspan><tspan font-size="11" dy="-4">n</tspan><tspan dy="4"> = (m factors of a) × (n factors of a) = (m+n) factors of a = a</tspan><tspan font-size="11" dy="-4">m+n</tspan></text>
    
    <text x="0" y="95" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e74c3c">Example: 2<tspan font-size="11" dy="-4">3</tspan><tspan dy="4"> × 2</tspan><tspan font-size="11" dy="-4">2</tspan><tspan dy="4"> = (2×2×2) × (2×2) = 2×2×2×2×2 = 2</tspan><tspan font-size="11" dy="-4">5</tspan></text>
  </g>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Zero Power":{
        svg:`<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="450" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    a<tspan font-size="16" dy="-8">0</tspan><tspan dy="8"> = 1 (for any a ≠ 0)</tspan>
  </text>
  
  <!-- Pattern demonstration using division -->
  <g transform="translate(50, 70)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Pattern for any base a:</text>
    
    <!-- a^3 -->
    <g transform="translate(0, 30)">
      <text x="0" y="0" font-family="Arial, sans-serif" font-size="16" fill="#e74c3c">a<tspan font-size="12" dy="-4">3</tspan><tspan dy="4"> = a × a × a</tspan></text>
      <rect x="150" y="-10" width="20" height="20" fill="#e74c3c" fill-opacity="0.8"/>
      <text x="160" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">a</text>
      <rect x="175" y="-10" width="20" height="20" fill="#e74c3c" fill-opacity="0.8"/>
      <text x="185" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">a</text>
      <rect x="200" y="-10" width="20" height="20" fill="#e74c3c" fill-opacity="0.8"/>
      <text x="210" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">a</text>
    </g>
    
    <!-- Division step -->
    <text x="250" y="35" font-family="Arial, sans-serif" font-size="14" fill="#7f8c8d">÷ a</text>
    
    <!-- a^2 with fraction notation -->
    <g transform="translate(0, 70)">
      <text x="0" y="0" font-family="Arial, sans-serif" font-size="16" fill="#3498db">a<tspan font-size="12" dy="-4">2</tspan><tspan dy="4"> = </tspan></text>
      <g transform="translate(60, -15)">
        <text x="0" y="0" font-family="Arial, sans-serif" font-size="12" fill="#3498db">a<tspan font-size="8" dy="-4">3</tspan></text>
        <line x1="0" y1="5" x2="20" y2="5" stroke="#3498db" stroke-width="1"/>
        <text x="0" y="18" font-family="Arial, sans-serif" font-size="12" fill="#3498db">a<tspan font-size="8" dy="-4">1</tspan></text>
      </g>
      <text x="95" y="0" font-family="Arial, sans-serif" font-size="16" fill="#3498db"> = a × a</text>
      <rect x="150" y="-10" width="20" height="20" fill="#3498db" fill-opacity="0.8"/>
      <text x="160" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">a</text>
      <rect x="175" y="-10" width="20" height="20" fill="#3498db" fill-opacity="0.8"/>
      <text x="185" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">a</text>
    </g>
    
    <!-- Division step -->
    <text x="250" y="75" font-family="Arial, sans-serif" font-size="14" fill="#7f8c8d">÷ a</text>
    
    <!-- a^1 with fraction notation -->
    <g transform="translate(0, 110)">
      <text x="0" y="0" font-family="Arial, sans-serif" font-size="16" fill="#f39c12">a<tspan font-size="12" dy="-4">1</tspan><tspan dy="4"> = </tspan></text>
      <g transform="translate(60, -15)">
        <text x="0" y="0" font-family="Arial, sans-serif" font-size="12" fill="#f39c12">a<tspan font-size="8" dy="-4">2</tspan></text>
        <line x1="0" y1="5" x2="20" y2="5" stroke="#f39c12" stroke-width="1"/>
        <text x="0" y="18" font-family="Arial, sans-serif" font-size="12" fill="#f39c12">a<tspan font-size="8" dy="-4">1</tspan></text>
      </g>
      <text x="95" y="0" font-family="Arial, sans-serif" font-size="16" fill="#f39c12"> = a</text>
      <rect x="150" y="-10" width="20" height="20" fill="#f39c12" fill-opacity="0.8"/>
      <text x="160" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">a</text>
    </g>
    
    <!-- Division step -->
    <text x="250" y="115" font-family="Arial, sans-serif" font-size="14" fill="#7f8c8d">÷ a</text>
    
    <!-- a^0 with fraction notation -->
    <g transform="translate(0, 150)">
      <text x="0" y="0" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2ecc71">a<tspan font-size="12" dy="-4">0</tspan><tspan dy="4"> = </tspan></text>
      <g transform="translate(60, -15)">
        <text x="0" y="0" font-family="Arial, sans-serif" font-size="12" fill="#2ecc71">a<tspan font-size="8" dy="-4">1</tspan></text>
        <line x1="0" y1="5" x2="20" y2="5" stroke="#2ecc71" stroke-width="2"/>
        <text x="0" y="18" font-family="Arial, sans-serif" font-size="12" fill="#2ecc71">a<tspan font-size="8" dy="-4">1</tspan></text>
      </g>
      <text x="95" y="0" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2ecc71"> = 1</text>
      <rect x="150" y="-10" width="20" height="20" fill="#2ecc71" fill-opacity="0.8"/>
      <text x="160" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">1</text>
    </g>
    
    <text x="0" y="190" font-family="Arial, sans-serif" font-size="14" fill="#7f8c8d">Each division by a reduces exponent by 1</text>
  </g>
  
  <!-- Algebraic explanation -->
  <g transform="translate(450, 70)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Algebraic proof:</text>
    
    <text x="0" y="30" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Using the rule: a<tspan font-size="11" dy="-4">m</tspan><tspan dy="4"> ÷ a</tspan><tspan font-size="11" dy="-4">n</tspan><tspan dy="4"> = a</tspan><tspan font-size="11" dy="-4">m-n</tspan></text>
    
    <text x="0" y="60" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Consider: a<tspan font-size="11" dy="-4">3</tspan><tspan dy="4"> ÷ a</tspan><tspan font-size="11" dy="-4">3</tspan></text>
    
    <text x="0" y="90" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Method 1: a<tspan font-size="11" dy="-4">3</tspan><tspan dy="4"> ÷ a</tspan><tspan font-size="11" dy="-4">3</tspan><tspan dy="4"> = a</tspan><tspan font-size="11" dy="-4">3-3</tspan><tspan dy="4"> = a</tspan><tspan font-size="11" dy="-4">0</tspan></text>
    
    <g transform="translate(0, 115)">
      <text x="0" y="0" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Method 2: a<tspan font-size="11" dy="-4">3</tspan><tspan dy="4"> ÷ a</tspan><tspan font-size="11" dy="-4">3</tspan><tspan dy="4"> = </tspan></text>
      <g transform="translate(120, -10)">
        <text x="0" y="0" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">a³</text>
        <line x1="0" y1="3" x2="15" y2="3" stroke="#2c3e50" stroke-width="1"/>
        <text x="0" y="13" font-family="Arial, sans-serif" font-size="11" fill="#2c3e50">a³</text>
      </g>
      <text x="145" y="0" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50"> = 1</text>
    </g>
    
    <text x="0" y="150" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e74c3c">Therefore: a<tspan font-size="12" dy="-4">0</tspan><tspan dy="4"> = 1</tspan></text>
  </g>
  
  <!-- Key insight -->
  <g transform="translate(50, 290)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Key insight:</text>
    
    <text x="0" y="30" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">• Each division by a removes one factor from the numerator</text>
    <text x="0" y="50" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">• This reduces the exponent by 1</text>
    <text x="0" y="70" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">• When numerator and denominator are equal: a¹/a¹ = 1</text>
    <text x="0" y="90" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e74c3c">• Therefore a⁰ = 1</text>
  </g>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Exponent Division Rule":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="400" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    <tspan font-size="20">a</tspan><tspan font-size="14" dy="-6">m</tspan><tspan dy="6">/a</tspan><tspan font-size="14" dy="-6">n</tspan><tspan dy="6"> = a</tspan><tspan font-size="14" dy="-6">m-n</tspan>
  </text>
  
  <!-- Example with specific numbers -->
  <text x="400" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#7f8c8d">
    Example: 2<tspan font-size="12" dy="-4">5</tspan><tspan dy="4">/2</tspan><tspan font-size="12" dy="-4">3</tspan><tspan dy="4"> = 2</tspan><tspan font-size="12" dy="-4">5-3</tspan><tspan dy="4"> = 2</tspan><tspan font-size="12" dy="-4">2</tspan>
  </text>
  
  <!-- Visual demonstration -->
  <g transform="translate(50, 90)">
    <!-- Numerator: 2^5 = 32 -->
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e74c3c">2<tspan font-size="12" dy="-4">5</tspan><tspan dy="4"> = 2×2×2×2×2 = 32</tspan></text>
    
    <!-- Show 5 blocks for 2^5 -->
    <g transform="translate(0, 20)">
      <rect x="0" y="0" width="25" height="25" fill="#e74c3c" fill-opacity="0.8"/>
      <text x="12" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
      <rect x="30" y="0" width="25" height="25" fill="#e74c3c" fill-opacity="0.8"/>
      <text x="42" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
      <rect x="60" y="0" width="25" height="25" fill="#e74c3c" fill-opacity="0.8"/>
      <text x="72" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
      <rect x="90" y="0" width="25" height="25" fill="#e74c3c" fill-opacity="0.8"/>
      <text x="102" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
      <rect x="120" y="0" width="25" height="25" fill="#e74c3c" fill-opacity="0.8"/>
      <text x="132" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
    </g>
    
    <!-- Division line -->
    <line x1="0" y1="60" x2="150" y2="60" stroke="#2c3e50" stroke-width="3"/>
    
    <!-- Denominator: 2^3 = 8 -->
    <text x="0" y="85" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#3498db">2<tspan font-size="12" dy="-4">3</tspan><tspan dy="4"> = 2×2×2 = 8</tspan></text>
    
    <!-- Show 3 blocks for 2^3 -->
    <g transform="translate(0, 95)">
      <rect x="0" y="0" width="25" height="25" fill="#3498db" fill-opacity="0.8"/>
      <text x="12" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
      <rect x="30" y="0" width="25" height="25" fill="#3498db" fill-opacity="0.8"/>
      <text x="42" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
      <rect x="60" y="0" width="25" height="25" fill="#3498db" fill-opacity="0.8"/>
      <text x="72" y="17" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
    </g>
    
    <!-- Cancellation visualization -->
    <g transform="translate(200, 20)">
      <text x="0" y="-5" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50">Cancel common factors:</text>
      
      <!-- Numerator factors with some crossed out -->
      <rect x="0" y="10" width="25" height="25" fill="#f39c12" fill-opacity="0.8"/>
      <text x="12" y="27" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
      <rect x="30" y="10" width="25" height="25" fill="#f39c12" fill-opacity="0.8"/>
      <text x="42" y="27" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white">2</text>
      
      <!-- Crossed out factors -->
      <rect x="60" y="10" width="25" height="25" fill="#95a5a6" fill-opacity="0.6" stroke="#7f8c8d" stroke-dasharray="3,3"/>
      <text x="72" y="27" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2</text>
      <line x1="60" y1="10" x2="85" y2="35" stroke="#e74c3c" stroke-width="2"/>
      
      <rect x="90" y="10" width="25" height="25" fill="#95a5a6" fill-opacity="0.6" stroke="#7f8c8d" stroke-dasharray="3,3"/>
      <text x="102" y="27" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2</text>
      <line x1="90" y1="10" x2="115" y2="35" stroke="#e74c3c" stroke-width="2"/>
      
      <rect x="120" y="10" width="25" height="25" fill="#95a5a6" fill-opacity="0.6" stroke="#7f8c8d" stroke-dasharray="3,3"/>
      <text x="132" y="27" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2</text>
      <line x1="120" y1="10" x2="145" y2="35" stroke="#e74c3c" stroke-width="2"/>
      
      <!-- Division line -->
      <line x1="0" y1="45" x2="150" y2="45" stroke="#2c3e50" stroke-width="2"/>
      
      <!-- Denominator factors crossed out -->
      <rect x="60" y="55" width="25" height="25" fill="#95a5a6" fill-opacity="0.6" stroke="#7f8c8d" stroke-dasharray="3,3"/>
      <text x="72" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2</text>
      <line x1="60" y1="55" x2="85" y2="80" stroke="#e74c3c" stroke-width="2"/>
      
      <rect x="90" y="55" width="25" height="25" fill="#95a5a6" fill-opacity="0.6" stroke="#7f8c8d" stroke-dasharray="3,3"/>
      <text x="102" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2</text>
      <line x1="90" y1="55" x2="115" y2="80" stroke="#e74c3c" stroke-width="2"/>
      
      <rect x="120" y="55" width="25" height="25" fill="#95a5a6" fill-opacity="0.6" stroke="#7f8c8d" stroke-dasharray="3,3"/>
      <text x="132" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">2</text>
      <line x1="120" y1="55" x2="145" y2="80" stroke="#e74c3c" stroke-width="2"/>
      
      <!-- Result -->
      <text x="0" y="105" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2ecc71">= 2<tspan font-size="10" dy="-3">2</tspan><tspan dy="3"> = 4</tspan></text>
    </g>
  </g>
  
  <!-- General rule explanation -->
  <g transform="translate(50, 250)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">General rule:</text>
    
    <g transform="translate(0, 30)">
      <text x="0" y="0" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50">
        <tspan font-size="14">a</tspan><tspan font-size="10" dy="-3">m</tspan><tspan dy="3">/a</tspan><tspan font-size="10" dy="-3">n</tspan><tspan dy="3"> = </tspan>
      </text>
      <g transform="translate(60, -12)">
        <text x="0" y="0" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">a×a×...×a (m times)</text>
        <line x1="0" y1="8" x2="120" y2="8" stroke="#2c3e50" stroke-width="1"/>
        <text x="0" y="20" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">a×a×...×a (n times)</text>
      </g>
    </g>
    
    <text x="0" y="60" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Cancel n common factors from numerator and denominator</text>
    <text x="0" y="80" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">Leaves (m-n) factors in numerator = a<tspan font-size="10" dy="-3">m-n</tspan></text>
    
    <text x="0" y="110" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e74c3c">
      Therefore: a<tspan font-size="12" dy="-4">m</tspan><tspan dy="4">/a</tspan><tspan font-size="12" dy="-4">n</tspan><tspan dy="4"> = a</tspan><tspan font-size="12" dy="-4">m-n</tspan>
    </text>
  </g>
  
  <!-- Alternative examples -->
  <g transform="translate(450, 250)">
    <text x="0" y="0" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">More examples:</text>
    
    <text x="0" y="25" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">x<tspan font-size="10" dy="-3">7</tspan><tspan dy="3">/x</tspan><tspan font-size="10" dy="-3">4</tspan><tspan dy="3"> = x</tspan><tspan font-size="10" dy="-3">7-4</tspan><tspan dy="3"> = x</tspan><tspan font-size="10" dy="-3">3</tspan></text>
    
    <text x="0" y="45" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">5<tspan font-size="10" dy="-3">6</tspan><tspan dy="3">/5</tspan><tspan font-size="10" dy="-3">2</tspan><tspan dy="3"> = 5</tspan><tspan font-size="10" dy="-3">6-2</tspan><tspan dy="3"> = 5</tspan><tspan font-size="10" dy="-3">4</tspan></text>
    
    <text x="0" y="65" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">y<tspan font-size="10" dy="-3">3</tspan><tspan dy="3">/y</tspan><tspan font-size="10" dy="-3">3</tspan><tspan dy="3"> = y</tspan><tspan font-size="10" dy="-3">3-3</tspan><tspan dy="3"> = y</tspan><tspan font-size="10" dy="-3">0</tspan><tspan dy="3"> = 1</tspan></text>
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