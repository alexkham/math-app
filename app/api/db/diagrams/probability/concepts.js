


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