
export const sampleSpaceEventsData={
    "Sample Space and Events":{
        svg:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1250" style="background: #d3d3d3;">
  <defs>
    <!-- Define dice faces -->
    <!-- Die with 1 dot -->
    <g id="die-1">
      <rect x="0" y="0" width="60" height="60" fill="white" stroke="black" stroke-width="2" rx="5"/>
      <circle cx="30" cy="30" r="5" fill="black"/>
    </g>
    
    <!-- Die with 2 dots -->
    <g id="die-2">
      <rect x="0" y="0" width="60" height="60" fill="white" stroke="black" stroke-width="2" rx="5"/>
      <circle cx="20" cy="20" r="5" fill="black"/>
      <circle cx="40" cy="40" r="5" fill="black"/>
    </g>
    
    <!-- Die with 3 dots -->
    <g id="die-3">
      <rect x="0" y="0" width="60" height="60" fill="white" stroke="black" stroke-width="2" rx="5"/>
      <circle cx="20" cy="20" r="5" fill="black"/>
      <circle cx="30" cy="30" r="5" fill="black"/>
      <circle cx="40" cy="40" r="5" fill="black"/>
    </g>
    
    <!-- Die with 4 dots -->
    <g id="die-4">
      <rect x="0" y="0" width="60" height="60" fill="white" stroke="black" stroke-width="2" rx="5"/>
      <circle cx="20" cy="20" r="5" fill="black"/>
      <circle cx="40" cy="20" r="5" fill="black"/>
      <circle cx="20" cy="40" r="5" fill="black"/>
      <circle cx="40" cy="40" r="5" fill="black"/>
    </g>
    
    <!-- Die with 5 dots -->
    <g id="die-5">
      <rect x="0" y="0" width="60" height="60" fill="white" stroke="black" stroke-width="2" rx="5"/>
      <circle cx="20" cy="20" r="5" fill="black"/>
      <circle cx="40" cy="20" r="5" fill="black"/>
      <circle cx="30" cy="30" r="5" fill="black"/>
      <circle cx="20" cy="40" r="5" fill="black"/>
      <circle cx="40" cy="40" r="5" fill="black"/>
    </g>
    
    <!-- Die with 6 dots -->
    <g id="die-6">
      <rect x="0" y="0" width="60" height="60" fill="white" stroke="black" stroke-width="2" rx="5"/>
      <circle cx="20" cy="15" r="5" fill="black"/>
      <circle cx="40" cy="15" r="5" fill="black"/>
      <circle cx="20" cy="30" r="5" fill="black"/>
      <circle cx="40" cy="30" r="5" fill="black"/>
      <circle cx="20" cy="45" r="5" fill="black"/>
      <circle cx="40" cy="45" r="5" fill="black"/>
    </g>
    
    <!-- Large die versions for events -->
    <g id="die-1-large">
      <rect x="0" y="0" width="80" height="80" fill="white" stroke="black" stroke-width="3" rx="8"/>
      <circle cx="40" cy="40" r="7" fill="black"/>
    </g>
    
    <g id="die-2-large">
      <rect x="0" y="0" width="80" height="80" fill="white" stroke="black" stroke-width="3" rx="8"/>
      <circle cx="25" cy="25" r="7" fill="black"/>
      <circle cx="55" cy="55" r="7" fill="black"/>
    </g>
    
    <g id="die-3-large">
      <rect x="0" y="0" width="80" height="80" fill="white" stroke="black" stroke-width="3" rx="8"/>
      <circle cx="25" cy="25" r="7" fill="black"/>
      <circle cx="40" cy="40" r="7" fill="black"/>
      <circle cx="55" cy="55" r="7" fill="black"/>
    </g>
    
    <g id="die-4-large">
      <rect x="0" y="0" width="80" height="80" fill="white" stroke="black" stroke-width="3" rx="8"/>
      <circle cx="25" cy="25" r="7" fill="black"/>
      <circle cx="55" cy="25" r="7" fill="black"/>
      <circle cx="25" cy="55" r="7" fill="black"/>
      <circle cx="55" cy="55" r="7" fill="black"/>
    </g>
    
    <g id="die-5-large">
      <rect x="0" y="0" width="80" height="80" fill="white" stroke="black" stroke-width="3" rx="8"/>
      <circle cx="25" cy="25" r="7" fill="black"/>
      <circle cx="55" cy="25" r="7" fill="black"/>
      <circle cx="40" cy="40" r="7" fill="black"/>
      <circle cx="25" cy="55" r="7" fill="black"/>
      <circle cx="55" cy="55" r="7" fill="black"/>
    </g>
    
    <g id="die-6-large">
      <rect x="0" y="0" width="80" height="80" fill="white" stroke="black" stroke-width="3" rx="8"/>
      <circle cx="25" cy="20" r="7" fill="black"/>
      <circle cx="55" cy="20" r="7" fill="black"/>
      <circle cx="25" cy="40" r="7" fill="black"/>
      <circle cx="55" cy="40" r="7" fill="black"/>
      <circle cx="25" cy="60" r="7" fill="black"/>
      <circle cx="55" cy="60" r="7" fill="black"/>
    </g>
    
    <!-- Arrowhead marker -->
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#34495e"/>
    </marker>
  </defs>
  
  <!-- Sample Space Circle (Left) -->
  <circle cx="300" cy="625" r="200" fill="#5dade2" stroke="#34495e" stroke-width="4"/>
  
  <!-- Sample Space Label - lifted 30px -->
  <text x="300" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="black">
    SAMPLE SPACE
  </text>
  <text x="300" y="415" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="black">
    (All Possible Results: 1-6)
  </text>
  
  <!-- All 6 dice in sample space (2 rows of 3) -->
  <use href="#die-1" x="220" y="535"/>
  <use href="#die-2" x="300" y="535"/>
  <use href="#die-3" x="380" y="535"/>
  <use href="#die-4" x="220" y="615"/>
  <use href="#die-5" x="300" y="615"/>
  <use href="#die-6" x="380" y="615"/>
  
  <!-- Events column title - lifted 30px -->
  <text x="900" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="black">
    EVENTS
  </text>
  <text x="900" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="black">
    (What Actually Happened)
  </text>
  
  <!-- Event Circles in vertical column - properly spaced -->
  <!-- Event 1 -->
  <circle cx="900" cy="200" r="90" fill="#5dade2" stroke="#34495e" stroke-width="4"/>
  <use href="#die-1-large" x="860" y="160"/>
  
  <!-- Event 2 -->
  <circle cx="900" cy="400" r="90" fill="#5dade2" stroke="#34495e" stroke-width="4"/>
  <use href="#die-2-large" x="860" y="360"/>
  
  <!-- Event 3 -->
  <circle cx="900" cy="600" r="90" fill="#5dade2" stroke="#34495e" stroke-width="4"/>
  <use href="#die-3-large" x="860" y="560"/>
  
  <!-- Event 4 -->
  <circle cx="900" cy="800" r="90" fill="#5dade2" stroke="#34495e" stroke-width="4"/>
  <use href="#die-4-large" x="860" y="760"/>
  
  <!-- Event 5 -->
  <circle cx="900" cy="1000" r="90" fill="#5dade2" stroke="#34495e" stroke-width="4"/>
  <use href="#die-5-large" x="860" y="960"/>
  
  <!-- Event 6 -->
  <circle cx="900" cy="1200" r="90" fill="#5dade2" stroke="#34495e" stroke-width="4"/>
  <use href="#die-6-large" x="860" y="1160"/>
  
  <!-- Arrows from Sample Space to Events -->
  <path d="M 480 550 Q 650 350 810 220" fill="none" stroke="#34495e" stroke-width="5" marker-end="url(#arrowhead)"/>
  <path d="M 490 580 Q 650 490 810 410" fill="none" stroke="#34495e" stroke-width="5" marker-end="url(#arrowhead)"/>
  <path d="M 490 620 Q 650 610 810 605" fill="none" stroke="#34495e" stroke-width="5" marker-end="url(#arrowhead)"/>
  <path d="M 480 670 Q 650 735 810 795" fill="none" stroke="#34495e" stroke-width="5" marker-end="url(#arrowhead)"/>
  <path d="M 460 700 Q 650 850 810 990" fill="none" stroke="#34495e" stroke-width="5" marker-end="url(#arrowhead)"/>
  <path d="M 430 730 Q 650 965 810 1185" fill="none" stroke="#34495e" stroke-width="5" marker-end="url(#arrowhead)"/>
</svg>
        `,
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