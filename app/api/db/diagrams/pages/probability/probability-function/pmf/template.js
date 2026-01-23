
export const pmfData={
    "probability at points":{
        svg:`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PMF Weights Illustration</title>
</head>
<body>
    <svg width="800" height="400" style="background: white;">
        <!-- Title -->
        <text x="400" y="30" text-anchor="middle" font-size="20" font-weight="bold">Loaded Die: Probability as Weight</text>
        
        <!-- Number line -->
        <line x1="50" y1="320" x2="750" y2="320" stroke="#333" stroke-width="3"/>
        
        <!-- Weights as vertical bars (height proportional to probability) -->
        <!-- Scale: 1/10 = 50px height, 1/2 = 250px height -->
        
        <!-- Position 1: 1/10 -->
        <rect x="125" y="270" width="50" height="50" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
        <text x="150" y="255" text-anchor="middle" font-size="16" font-weight="bold">0.1</text>
        <text x="150" y="345" text-anchor="middle" font-size="18">1</text>
        
        <!-- Position 2: 1/10 -->
        <rect x="225" y="270" width="50" height="50" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
        <text x="250" y="255" text-anchor="middle" font-size="16" font-weight="bold">0.1</text>
        <text x="250" y="345" text-anchor="middle" font-size="18">2</text>
        
        <!-- Position 3: 1/10 -->
        <rect x="325" y="270" width="50" height="50" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
        <text x="350" y="255" text-anchor="middle" font-size="16" font-weight="bold">0.1</text>
        <text x="350" y="345" text-anchor="middle" font-size="18">3</text>
        
        <!-- Position 4: 1/10 -->
        <rect x="425" y="270" width="50" height="50" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
        <text x="450" y="255" text-anchor="middle" font-size="16" font-weight="bold">0.1</text>
        <text x="450" y="345" text-anchor="middle" font-size="18">4</text>
        
        <!-- Position 5: 1/10 -->
        <rect x="525" y="270" width="50" height="50" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
        <text x="550" y="255" text-anchor="middle" font-size="16" font-weight="bold">0.1</text>
        <text x="550" y="345" text-anchor="middle" font-size="18">5</text>
        
        <!-- Position 6: 1/2 (MUCH taller) -->
        <rect x="625" y="70" width="50" height="250" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
        <text x="650" y="55" text-anchor="middle" font-size="16" font-weight="bold">0.5</text>
        <text x="650" y="345" text-anchor="middle" font-size="18">6</text>
        
        <!-- Axis labels -->
        <text x="400" y="375" text-anchor="middle" font-size="16" fill="#666">Outcome Value</text>
        <text x="25" y="200" text-anchor="middle" font-size="16" fill="#666" transform="rotate(-90 25 200)">Probability</text>
        
        <!-- Annotation -->
        <text x="650" y="385" text-anchor="middle" font-size="14" fill="#991b1b" font-style="italic">5× heavier!</text>
    </svg>
</body>
</html>
        `,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "pmf vs pdf":{
        svg:`
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" style="margin-left:200px;">
  <defs>
    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  
  <!-- Title -->
  <text x="400" y="30" font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">PMF vs PDF</text>
  
  <!-- PMF Section (Left) -->
  <g>
    <text x="200" y="60" font-size="16" font-weight="600" text-anchor="middle" fill="#1f2937">PMF (Discrete)</text>
    <text x="200" y="80" font-size="12" text-anchor="middle" fill="#6b7280">Exact Point Probabilities</text>
    
    <!-- Axes -->
    <line x1="50" y1="320" x2="350" y2="320" stroke="#9ca3af" stroke-width="2"/>
    <line x1="50" y1="320" x2="50" y2="100" stroke="#9ca3af" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="200" y="350" font-size="12" text-anchor="middle" fill="#6b7280">X</text>
    <text x="30" y="210" font-size="12" text-anchor="middle" fill="#6b7280">P(X)</text>
    
    <!-- Discrete bars -->
    <line x1="90" y1="320" x2="90" y2="260" stroke="#3b82f6" stroke-width="3"/>
    <circle cx="90" cy="260" r="5" fill="#3b82f6"/>
    <text x="90" y="340" font-size="11" text-anchor="middle" fill="#4b5563">2</text>
    
    <line x1="140" y1="320" x2="140" y2="200" stroke="#3b82f6" stroke-width="3"/>
    <circle cx="140" cy="200" r="5" fill="#3b82f6"/>
    <text x="140" y="340" font-size="11" text-anchor="middle" fill="#4b5563">3</text>
    
    <line x1="190" y1="320" x2="190" y2="150" stroke="#3b82f6" stroke-width="3"/>
    <circle cx="190" cy="150" r="5" fill="#3b82f6"/>
    <text x="190" y="340" font-size="11" text-anchor="middle" fill="#4b5563">4</text>
    
    <line x1="240" y1="320" x2="240" y2="180" stroke="#3b82f6" stroke-width="3"/>
    <circle cx="240" cy="180" r="5" fill="#3b82f6"/>
    <text x="240" y="340" font-size="11" text-anchor="middle" fill="#4b5563">5</text>
    
    <line x1="290" y1="320" x2="290" y2="240" stroke="#3b82f6" stroke-width="3"/>
    <circle cx="290" cy="240" r="5" fill="#3b82f6"/>
    <text x="290" y="340" font-size="11" text-anchor="middle" fill="#4b5563">6</text>
    
    <!-- Point probability annotation -->
    <text x="240" y="170" font-size="10" text-anchor="middle" fill="#3b82f6" font-weight="600">P(X=5) > 0</text>
  </g>
  
  <!-- PDF Section (Right) -->
  <g>
    <text x="600" y="60" font-size="16" font-weight="600" text-anchor="middle" fill="#1f2937">PDF (Continuous)</text>
    <text x="600" y="80" font-size="12" text-anchor="middle" fill="#6b7280">Interval Probabilities</text>
    
    <!-- Axes -->
    <line x1="450" y1="320" x2="750" y2="320" stroke="#9ca3af" stroke-width="2"/>
    <line x1="450" y1="320" x2="450" y2="100" stroke="#9ca3af" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="600" y="350" font-size="12" text-anchor="middle" fill="#6b7280">X</text>
    <text x="430" y="210" font-size="12" text-anchor="middle" fill="#6b7280">f(x)</text>
    
    <!-- Smooth curve (bell-like) -->
    <path d="M 470 310 Q 520 280, 540 240 Q 560 200, 580 160 Q 600 140, 620 150 Q 640 160, 660 200 Q 680 250, 700 280 Q 720 300, 730 310" 
          stroke="#10b981" stroke-width="3" fill="none"/>
    
    <!-- Shaded area for interval -->
    <path d="M 580 320 L 580 160 Q 600 140, 620 150 Q 640 160, 660 200 L 660 320 Z" 
          fill="url(#areaGradient)" opacity="0.6"/>
    
    <!-- Interval markers -->
    <line x1="580" y1="315" x2="580" y2="325" stroke="#10b981" stroke-width="2"/>
    <line x1="660" y1="315" x2="660" y2="325" stroke="#10b981" stroke-width="2"/>
    <text x="580" y="340" font-size="10" text-anchor="middle" fill="#4b5563">4.9</text>
    <text x="660" y="340" font-size="10" text-anchor="middle" fill="#4b5563">5.1</text>
    
    <!-- Point annotation -->
    <line x1="620" y1="150" x2="620" y2="320" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>
    <circle cx="620" cy="150" r="3" fill="#ef4444"/>
    <text x="620" y="340" font-size="10" text-anchor="middle" fill="#4b5563">5</text>
    <text x="620" y="130" font-size="10" text-anchor="middle" fill="#ef4444" font-weight="600">P(X=5) = 0</text>
    
    <!-- Interval annotation -->
    <text x="620" y="370" font-size="10" text-anchor="middle" fill="#10b981" font-weight="600">P(4.9 < X < 5.1) > 0</text>
  </g>
  
  <!-- Legend -->
  <g transform="translate(300, 380)">
    <circle cx="0" cy="0" r="4" fill="#3b82f6"/>
    <text x="10" y="4" font-size="11" fill="#4b5563">Discrete: Exact probabilities</text>
    
    <rect x="165" y="-4" width="8" height="8" fill="#10b981" opacity="0.5"/>
    <text x="175" y="4" font-size="11" fill="#4b5563">Continuous: Area = probability</text>
  </g>
</svg>
        `,
        explanation:`
       
        `,
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
