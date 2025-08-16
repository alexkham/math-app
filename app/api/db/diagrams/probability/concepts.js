


export const probabilityConceptsData={
    "Sample Space for Coin Flip":{
        svg:`<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="400" height="320" fill="#f8f9fa"/>
  
  <!-- Title with better typography -->
  <text x="200" y="30" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600" fill="#2c3e50">Sample Space for Coin Flip</text>
  
  <!-- Definition with subtle styling -->
  <text x="200" y="50" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" fill="#7f8c8d">All possible outcomes: S = {Heads, Tails}</text>
  
  <!-- Sample Space Box with modern styling -->
  <rect x="40" y="70" width="320" height="160" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5"/>
  <rect x="40" y="70" width="320" height="30" rx="8" fill="#2c3e50"/>
  <text x="200" y="90" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#ffffff">Sample Space S</text>
  
  <!-- Coin showing Heads with better design -->
  <circle cx="150" cy="140" r="40" fill="#FFD700" stroke="#e67e22" stroke-width="1.5" filter="url(#coinShadow)"/>
  <circle cx="150" cy="140" r="35" fill="none" stroke="#e67e22" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="150" y="145" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="600" fill="#2c3e50">H</text>
  <text x="150" y="190" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500" fill="#2c3e50">Heads</text>
  
  <!-- Coin showing Tails with better design -->
  <circle cx="250" cy="140" r="40" fill="#e0e0e0" stroke="#95a5a6" stroke-width="1.5" filter="url(#coinShadow)"/>
  <circle cx="250" cy="140" r="35" fill="none" stroke="#95a5a6" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="250" y="145" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="600" fill="#2c3e50">T</text>
  <text x="250" y="190" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500" fill="#2c3e50">Tails</text>
  
  <!-- Connecting line -->
  <line x1="190" y1="140" x2="210" y2="140" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="4,2"/>
  
  <!-- Bottom explanation with better layout -->
  <rect x="80" y="240" width="240" height="60" rx="6" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
  <text x="200" y="260" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#7f8c8d">These are the only two possible outcomes</text>
  <text x="200" y="280" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#2c3e50">|S| = 2 (size of sample space)</text>
  
  <!-- Shadow filter for coins -->
  <filter id="coinShadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.15)"/>
  </filter>
</svg>
`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Sample Space for Die Roll":{
        svg:`<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="500" height="300" fill="#f8f9fa" stroke="#e0e0e0" stroke-width="1"/>
  
  <!-- Title -->
  <text x="250" y="25" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#2c3e50">Sample Space for Die Roll</text>
  
  <!-- Definition -->
  <text x="250" y="45" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" fill="#7f8c8d">All possible outcomes: S = {1, 2, 3, 4, 5, 6}</text>
  
  <!-- Sample Space Box -->
  <rect x="25" y="70" width="450" height="150" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5"/>
  <rect x="25" y="70" width="450" height="20" fill="#2c3e50"/>
  <text x="35" y="85" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#ffffff">Sample Space S</text>
  
  <!-- Die face 1 -->
  <rect x="50" y="110" width="50" height="50" fill="#ffffff" stroke="#95a5a6" stroke-width="1.5" rx="5" filter="url(#dieShadow)"/>
  <circle cx="75" cy="135" r="4" fill="#2c3e50"/>
  <text x="75" y="180" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#2c3e50">1</text>
  
  <!-- Die face 2 -->
  <rect x="120" y="110" width="50" height="50" fill="#ffffff" stroke="#95a5a6" stroke-width="1.5" rx="5" filter="url(#dieShadow)"/>
  <circle cx="135" cy="125" r="4" fill="#2c3e50"/>
  <circle cx="155" cy="145" r="4" fill="#2c3e50"/>
  <text x="145" y="180" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#2c3e50">2</text>
  
  <!-- Die face 3 -->
  <rect x="190" y="110" width="50" height="50" fill="#ffffff" stroke="#95a5a6" stroke-width="1.5" rx="5" filter="url(#dieShadow)"/>
  <circle cx="205" cy="125" r="4" fill="#2c3e50"/>
  <circle cx="215" cy="135" r="4" fill="#2c3e50"/>
  <circle cx="225" cy="145" r="4" fill="#2c3e50"/>
  <text x="215" y="180" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#2c3e50">3</text>
  
  <!-- Die face 4 -->
  <rect x="260" y="110" width="50" height="50" fill="#ffffff" stroke="#95a5a6" stroke-width="1.5" rx="5" filter="url(#dieShadow)"/>
  <circle cx="275" cy="125" r="4" fill="#2c3e50"/>
  <circle cx="295" cy="125" r="4" fill="#2c3e50"/>
  <circle cx="275" cy="145" r="4" fill="#2c3e50"/>
  <circle cx="295" cy="145" r="4" fill="#2c3e50"/>
  <text x="285" y="180" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#2c3e50">4</text>
  
  <!-- Die face 5 -->
  <rect x="330" y="110" width="50" height="50" fill="#ffffff" stroke="#95a5a6" stroke-width="1.5" rx="5" filter="url(#dieShadow)"/>
  <circle cx="345" cy="125" r="4" fill="#2c3e50"/>
  <circle cx="365" cy="125" r="4" fill="#2c3e50"/>
  <circle cx="355" cy="135" r="4" fill="#2c3e50"/>
  <circle cx="345" cy="145" r="4" fill="#2c3e50"/>
  <circle cx="365" cy="145" r="4" fill="#2c3e50"/>
  <text x="355" y="180" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#2c3e50">5</text>
  
  <!-- Die face 6 -->
  <rect x="400" y="110" width="50" height="50" fill="#ffffff" stroke="#95a5a6" stroke-width="1.5" rx="5" filter="url(#dieShadow)"/>
  <circle cx="415" cy="125" r="4" fill="#2c3e50"/>
  <circle cx="435" cy="125" r="4" fill="#2c3e50"/>
  <circle cx="415" cy="135" r="4" fill="#2c3e50"/>
  <circle cx="435" cy="135" r="4" fill="#2c3e50"/>
  <circle cx="415" cy="145" r="4" fill="#2c3e50"/>
  <circle cx="435" cy="145" r="4" fill="#2c3e50"/>
  <text x="425" y="180" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#2c3e50">6</text>
  
  <!-- Bottom explanation -->
  <text x="250" y="250" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500" fill="#7f8c8d">These are the ONLY 6 things that can happen</text>
  <text x="250" y="270" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#2c3e50">|S| = 6 (size of sample space)</text>

  <!-- Shadow filter -->
  <filter id="dieShadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="rgba(0,0,0,0.1)"/>
  </filter>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Sample Space":{
        svg:`<svg viewBox="0 0 1200 800"  style="margin-left: 150px; margin-top: 0px;margin-bottom:-100px" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Sample Space
  </text>
  

  
  <!-- Sample space rectangle -->
  <rect x="150" y="80" width="450" height="320" fill="#ecf0f1" stroke="#2c3e50" stroke-width="3" rx="10"/>
  
  <!-- Omega symbol -->
  <text x="180" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#2c3e50">Ω</text>
  <text x="210" y="120" font-family="Arial, sans-serif" font-size="14" fill="#7f8c8d">(Sample Space)</text>
  
  <!-- Sample points scattered throughout -->
  <circle cx="200" cy="140" r="3" fill="#e74c3c"/>
  <circle cx="260" cy="160" r="3" fill="#e74c3c"/>
  <circle cx="320" cy="150" r="3" fill="#e74c3c"/>
  <circle cx="380" cy="170" r="3" fill="#e74c3c"/>
  <circle cx="440" cy="160" r="3" fill="#e74c3c"/>
  <circle cx="500" cy="150" r="3" fill="#e74c3c"/>
  <circle cx="550" cy="140" r="3" fill="#e74c3c"/>
  
  <circle cx="220" cy="200" r="3" fill="#e74c3c"/>
  <circle cx="280" cy="220" r="3" fill="#e74c3c"/>
  <circle cx="340" cy="210" r="3" fill="#e74c3c"/>
  <circle cx="400" cy="240" r="3" fill="#e74c3c"/>
  <circle cx="460" cy="230" r="3" fill="#e74c3c"/>
  <circle cx="520" cy="220" r="3" fill="#e74c3c"/>
  <circle cx="570" cy="210" r="3" fill="#e74c3c"/>
  
  <circle cx="190" cy="260" r="3" fill="#e74c3c"/>
  <circle cx="250" cy="280" r="3" fill="#e74c3c"/>
  <circle cx="310" cy="270" r="3" fill="#e74c3c"/>
  <circle cx="370" cy="300" r="3" fill="#e74c3c"/>
  <circle cx="430" cy="290" r="3" fill="#e74c3c"/>
  <circle cx="490" cy="280" r="3" fill="#e74c3c"/>
  <circle cx="540" cy="270" r="3" fill="#e74c3c"/>
  
  <circle cx="210" cy="320" r="3" fill="#e74c3c"/>
  <circle cx="270" cy="340" r="3" fill="#e74c3c"/>
  <circle cx="330" cy="330" r="3" fill="#e74c3c"/>
  <circle cx="390" cy="360" r="3" fill="#e74c3c"/>
  <circle cx="450" cy="350" r="3" fill="#e74c3c"/>
  <circle cx="510" cy="340" r="3" fill="#e74c3c"/>
  <circle cx="560" cy="330" r="3" fill="#e74c3c"/>
  
  <circle cx="240" cy="380" r="3" fill="#e74c3c"/>
  <circle cx="300" cy="370" r="3" fill="#e74c3c"/>
  <circle cx="360" cy="380" r="3" fill="#e74c3c"/>
  <circle cx="420" cy="370" r="3" fill="#e74c3c"/>
  <circle cx="480" cy="380" r="3" fill="#e74c3c"/>
  <circle cx="530" cy="370" r="3" fill="#e74c3c"/>
  
  <!-- Explanation box -->
  <rect x="180" y="450" width="400" height="120" fill="white" stroke="#bdc3c7" stroke-width="2" rx="10"/>
  

  
  <!-- Explanation items -->
  <circle cx="200" cy="510" r="3" fill="#e74c3c"/>
  <text x="215" y="515" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
    Each dot represents an elementary event (outcome)
  </text>
  
  <text x="200" y="540" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
    Ω = {ω₁, ω₂, ω₃, ..., ωₙ} where each ωᵢ is an elementary event
  </text>
  
  <text x="200" y="560" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d" font-style="italic">
    The sample space contains all possible outcomes of an experiment
  </text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Zero Probability Paradox":{
        svg:`<svg viewBox="0 0 800 600" style="margin-left: 50px; margin-top: 50px;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .title { font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; fill: #2c3e50; }
      .subtitle { font-family: Arial, sans-serif; font-size: 14px; fill: #34495e; }
      .formula { font-family: 'Times New Roman', serif; font-size: 16px; fill: #e74c3c; font-weight: bold; }
      .explanation { font-family: Arial, sans-serif; font-size: 12px; fill: #7f8c8d; }
      .dot { fill: #e74c3c; }
      .sample-space { fill: none; stroke: #2c3e50; stroke-width: 2; }
      .arrow { stroke: #34495e; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .zero { fill: #e74c3c; font-family: Arial, sans-serif; font-size: 20px; font-weight: bold; }
    </style>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#34495e" />
    </marker>
  </defs>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" class="title">The Zero Probability Paradox</text>
  <text x="400" y="50" text-anchor="middle" class="subtitle">Why Individual Outcomes Have Zero Probability</text>
  
  <!-- Sample Space -->
  <rect x="50" y="80" width="300" height="200" class="sample-space" rx="10"/>
  <text x="60" y="100" class="subtitle">Ω (Sample Space)</text>
  
  <!-- Individual dots (outcomes) -->
  <circle cx="80" cy="120" r="3" class="dot"/>
  <circle cx="120" cy="140" r="3" class="dot"/>
  <circle cx="160" cy="115" r="3" class="dot"/>
  <circle cx="200" cy="150" r="3" class="dot"/>
  <circle cx="240" cy="125" r="3" class="dot"/>
  <circle cx="280" cy="160" r="3" class="dot"/>
  <circle cx="320" cy="135" r="3" class="dot"/>
  <circle cx="100" cy="180" r="3" class="dot"/>
  <circle cx="140" cy="190" r="3" class="dot"/>
  <circle cx="180" cy="175" r="3" class="dot"/>
  <circle cx="220" cy="195" r="3" class="dot"/>
  <circle cx="260" cy="180" r="3" class="dot"/>
  <circle cx="300" cy="200" r="3" class="dot"/>
  <circle cx="110" cy="220" r="3" class="dot"/>
  <circle cx="150" cy="230" r="3" class="dot"/>
  <circle cx="190" cy="215" r="3" class="dot"/>
  <circle cx="230" cy="235" r="3" class="dot"/>
  <circle cx="270" cy="220" r="3" class="dot"/>
  <circle cx="310" cy="240" r="3" class="dot"/>
  <circle cx="90" cy="250" r="3" class="dot"/>
  
  <!-- Arrow pointing to a single dot -->
  <line x1="380" y1="140" x2="330" y2="135" class="arrow"/>
  <text x="390" y="135" class="explanation">Single outcome ωᵢ</text>
  <text x="390" y="150" class="explanation">Area = 0</text>
  
  <!-- Classical Formula -->
  <text x="450" y="100" class="subtitle">Classical Probability Formula:</text>
  <text x="450" y="125" class="formula">P(A) = |A| / |Ω|</text>
  
  <!-- For single outcome -->
  <text x="450" y="160" class="subtitle">For a single outcome ωᵢ:</text>
  <text x="450" y="185" class="formula">P({ωᵢ}) = 1 / |Ω|</text>
  
  <!-- The problem -->
  <text x="450" y="220" class="subtitle">But if each dot has zero area:</text>
  <text x="450" y="245" class="formula">P({ωᵢ}) = 0 / ∞ = 0</text>
  
  <!-- Paradox -->
  <rect x="50" y="320" width="700" height="100" fill="#fff2f2" stroke="#e74c3c" stroke-width="1" rx="5"/>
  <text x="60" y="345" class="subtitle">The Paradox:</text>
  <text x="60" y="365" class="explanation">• Each individual outcome has probability 0</text>
  <text x="60" y="380" class="explanation">• Yet the sum of all individual probabilities must equal 1</text>
  <text x="60" y="395" class="explanation">• This contradiction shows we cannot work with individual points!</text>
  
  <!-- Solution -->
  <text x="50" y="460" class="title">Solution: Work with Sets of Outcomes</text>
  
  <!-- Event as a set -->
  <ellipse cx="200" cy="520" rx="80" ry="40" fill="rgba(52, 152, 219, 0.3)" stroke="#3498db" stroke-width="2"/>
  <text x="200" y="515" text-anchor="middle" class="subtitle">Event A</text>
  <text x="200" y="530" text-anchor="middle" class="explanation">(Set of outcomes)</text>
  
  <!-- Dots inside the event -->
  <circle cx="160" cy="505" r="3" class="dot"/>
  <circle cx="180" cy="520" r="3" class="dot"/>
  <circle cx="200" cy="510" r="3" class="dot"/>
  <circle cx="220" cy="525" r="3" class="dot"/>
  <circle cx="240" cy="515" r="3" class="dot"/>
  
  <!-- Formula for sets -->
  <text x="350" y="510" class="formula">P(A) = |A| / |Ω| > 0</text>
  <text x="350" y="530" class="explanation">Now we get meaningful probabilities!</text>
  
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