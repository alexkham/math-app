
export const basicFunctionsDiagrams={
    "Linear Function with Points":{
        svg:`<svg width="500" height="500" viewBox="-250 -250 500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .axis { stroke: #666; stroke-width: 1.5; }
      .grid { stroke: #eee; stroke-width: 0.8; }
      .label { font-family: Arial, sans-serif; font-size: 14px; text-anchor: middle; dominant-baseline: central; fill: #555; }
      .tick-mark { stroke: #666; stroke-width: 1; }
      .tick-label { font-family: Arial, sans-serif; font-size: 11px; text-anchor: middle; dominant-baseline: central; fill: #555; }
      .function-line { stroke: #0066cc; stroke-width: 1.5; fill: none; }
      .function-label { font-family: Arial, sans-serif; font-size: 12px; fill: #0066cc; font-weight: bold; }
      .projection-line { stroke: #888; stroke-width: 1; stroke-dasharray: 3,3; fill: none; }
    </style>
  </defs>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#666"/>
    </marker>
  </defs>
  
  <!-- Grid lines -->
  <g class="grid">
    <!-- Vertical grid lines -->
    <line x1="-200" y1="-240" x2="-200" y2="240"/>
    <line x1="-180" y1="-240" x2="-180" y2="240"/>
    <line x1="-160" y1="-240" x2="-160" y2="240"/>
    <line x1="-140" y1="-240" x2="-140" y2="240"/>
    <line x1="-120" y1="-240" x2="-120" y2="240"/>
    <line x1="-100" y1="-240" x2="-100" y2="240"/>
    <line x1="-80" y1="-240" x2="-80" y2="240"/>
    <line x1="-60" y1="-240" x2="-60" y2="240"/>
    <line x1="-40" y1="-240" x2="-40" y2="240"/>
    <line x1="-20" y1="-240" x2="-20" y2="240"/>
    <line x1="20" y1="-240" x2="20" y2="240"/>
    <line x1="40" y1="-240" x2="40" y2="240"/>
    <line x1="60" y1="-240" x2="60" y2="240"/>
    <line x1="80" y1="-240" x2="80" y2="240"/>
    <line x1="100" y1="-240" x2="100" y2="240"/>
    <line x1="120" y1="-240" x2="120" y2="240"/>
    <line x1="140" y1="-240" x2="140" y2="240"/>
    <line x1="160" y1="-240" x2="160" y2="240"/>
    <line x1="180" y1="-240" x2="180" y2="240"/>
    <line x1="200" y1="-240" x2="200" y2="240"/>
    
    <!-- Horizontal grid lines -->
    <line x1="-240" y1="-200" x2="240" y2="-200"/>
    <line x1="-240" y1="-180" x2="240" y2="-180"/>
    <line x1="-240" y1="-160" x2="240" y2="-160"/>
    <line x1="-240" y1="-140" x2="240" y2="-140"/>
    <line x1="-240" y1="-120" x2="240" y2="-120"/>
    <line x1="-240" y1="-100" x2="240" y2="-100"/>
    <line x1="-240" y1="-80" x2="240" y2="-80"/>
    <line x1="-240" y1="-60" x2="240" y2="-60"/>
    <line x1="-240" y1="-40" x2="240" y2="-40"/>
    <line x1="-240" y1="-20" x2="240" y2="-20"/>
    <line x1="-240" y1="20" x2="240" y2="20"/>
    <line x1="-240" y1="40" x2="240" y2="40"/>
    <line x1="-240" y1="60" x2="240" y2="60"/>
    <line x1="-240" y1="80" x2="240" y2="80"/>
    <line x1="-240" y1="100" x2="240" y2="100"/>
    <line x1="-240" y1="120" x2="240" y2="120"/>
    <line x1="-240" y1="140" x2="240" y2="140"/>
    <line x1="-240" y1="160" x2="240" y2="160"/>
    <line x1="-240" y1="180" x2="240" y2="180"/>
    <line x1="-240" y1="200" x2="240" y2="200"/>
  </g>
  
  <!-- Main axes -->
  <g class="axis">
    <!-- X-axis -->
    <line x1="-230" y1="0" x2="230" y2="0" marker-end="url(#arrowhead)"/>
    <!-- Y-axis -->
    <line x1="0" y1="230" x2="0" y2="-230" marker-end="url(#arrowhead)"/>
  </g>
  
  <!-- Function f(x) = x + 2 -->
  <line x1="-200" y1="160" x2="160" y2="-200" class="function-line"/>
  
  <!-- Point (2,4) on the function -->
  <circle cx="40" cy="-80" r="4" fill="#ff0000" stroke="#000" stroke-width="1"/>
  
  <!-- Point (3,5) on the function -->
  <circle cx="60" cy="-100" r="4" fill="#ff0000" stroke="#000" stroke-width="1"/>
  
  <!-- Point (4,6) on the function -->
  <circle cx="80" cy="-120" r="4" fill="#ff0000" stroke="#000" stroke-width="1"/>
  
  <!-- Point (5,7) on the function -->
  <circle cx="100" cy="-140" r="4" fill="#ff0000" stroke="#000" stroke-width="1"/>
  
  <!-- Point (6,8) on the function -->
  <circle cx="120" cy="-160" r="4" fill="#ff0000" stroke="#000" stroke-width="1"/>
  
  <!-- Projection to X-axis -->
  <line x1="40" y1="-80" x2="40" y2="0" class="projection-line"/>
  <line x1="60" y1="-100" x2="60" y2="0" class="projection-line"/>
  <line x1="80" y1="-120" x2="80" y2="0" class="projection-line"/>
  <line x1="100" y1="-140" x2="100" y2="0" class="projection-line"/>
  <line x1="120" y1="-160" x2="120" y2="0" class="projection-line"/>
  
  <!-- Projection to Y-axis -->
  <line x1="40" y1="-80" x2="0" y2="-80" class="projection-line"/>
  <line x1="60" y1="-100" x2="0" y2="-100" class="projection-line"/>
  <line x1="80" y1="-120" x2="0" y2="-120" class="projection-line"/>
  <line x1="100" y1="-140" x2="0" y2="-140" class="projection-line"/>
  <line x1="120" y1="-160" x2="0" y2="-160" class="projection-line"/>200" class="function-line"/>
  
  <!-- Tick marks on X-axis -->
  <g class="tick-mark">
    <line x1="-200" y1="-4" x2="-200" y2="4"/>
    <line x1="-180" y1="-4" x2="-180" y2="4"/>
    <line x1="-160" y1="-4" x2="-160" y2="4"/>
    <line x1="-140" y1="-4" x2="-140" y2="4"/>
    <line x1="-120" y1="-4" x2="-120" y2="4"/>
    <line x1="-100" y1="-4" x2="-100" y2="4"/>
    <line x1="-80" y1="-4" x2="-80" y2="4"/>
    <line x1="-60" y1="-4" x2="-60" y2="4"/>
    <line x1="-40" y1="-4" x2="-40" y2="4"/>
    <line x1="-20" y1="-4" x2="-20" y2="4"/>
    <line x1="20" y1="-4" x2="20" y2="4"/>
    <line x1="40" y1="-4" x2="40" y2="4"/>
    <line x1="60" y1="-4" x2="60" y2="4"/>
    <line x1="80" y1="-4" x2="80" y2="4"/>
    <line x1="100" y1="-4" x2="100" y2="4"/>
    <line x1="120" y1="-4" x2="120" y2="4"/>
    <line x1="140" y1="-4" x2="140" y2="4"/>
    <line x1="160" y1="-4" x2="160" y2="4"/>
    <line x1="180" y1="-4" x2="180" y2="4"/>
    <line x1="200" y1="-4" x2="200" y2="4"/>
  </g>
  
  <!-- Tick marks on Y-axis -->
  <g class="tick-mark">
    <line x1="-4" y1="-200" x2="4" y2="-200"/>
    <line x1="-4" y1="-180" x2="4" y2="-180"/>
    <line x1="-4" y1="-160" x2="4" y2="-160"/>
    <line x1="-4" y1="-140" x2="4" y2="-140"/>
    <line x1="-4" y1="-120" x2="4" y2="-120"/>
    <line x1="-4" y1="-100" x2="4" y2="-100"/>
    <line x1="-4" y1="-80" x2="4" y2="-80"/>
    <line x1="-4" y1="-60" x2="4" y2="-60"/>
    <line x1="-4" y1="-40" x2="4" y2="-40"/>
    <line x1="-4" y1="-20" x2="4" y2="-20"/>
    <line x1="-4" y1="20" x2="4" y2="20"/>
    <line x1="-4" y1="40" x2="4" y2="40"/>
    <line x1="-4" y1="60" x2="4" y2="60"/>
    <line x1="-4" y1="80" x2="4" y2="80"/>
    <line x1="-4" y1="100" x2="4" y2="100"/>
    <line x1="-4" y1="120" x2="4" y2="120"/>
    <line x1="-4" y1="140" x2="4" y2="140"/>
    <line x1="-4" y1="160" x2="4" y2="160"/>
    <line x1="-4" y1="180" x2="4" y2="180"/>
    <line x1="-4" y1="200" x2="4" y2="200"/>
  </g>
  
  <!-- Tick labels on X-axis -->
  <g class="tick-label">
    <text x="-200" y="18">-10</text>
    <text x="-180" y="18">-9</text>
    <text x="-160" y="18">-8</text>
    <text x="-140" y="18">-7</text>
    <text x="-120" y="18">-6</text>
    <text x="-100" y="18">-5</text>
    <text x="-80" y="18">-4</text>
    <text x="-60" y="18">-3</text>
    <text x="-40" y="18">-2</text>
    <text x="-20" y="18">-1</text>
    <text x="20" y="18">1</text>
    <text x="40" y="18">2</text>
    <text x="60" y="18">3</text>
    <text x="80" y="18">4</text>
    <text x="100" y="18">5</text>
    <text x="120" y="18">6</text>
    <text x="140" y="18">7</text>
    <text x="160" y="18">8</text>
    <text x="180" y="18">9</text>
    <text x="200" y="18">10</text>
  </g>
  
  <!-- Tick labels on Y-axis -->
  <g class="tick-label">
    <text x="18" y="-200">10</text>
    <text x="18" y="-180">9</text>
    <text x="18" y="-160">8</text>
    <text x="18" y="-140">7</text>
    <text x="18" y="-120">6</text>
    <text x="18" y="-100">5</text>
    <text x="18" y="-80">4</text>
    <text x="18" y="-60">3</text>
    <text x="18" y="-40">2</text>
    <text x="18" y="-20">1</text>
    <text x="18" y="20">-1</text>
    <text x="18" y="40">-2</text>
    <text x="18" y="60">-3</text>
    <text x="18" y="80">-4</text>
    <text x="18" y="100">-5</text>
    <text x="18" y="120">-6</text>
    <text x="18" y="140">-7</text>
    <text x="18" y="160">-8</text>
    <text x="18" y="180">-9</text>
    <text x="18" y="200">-10</text>
  </g>
  
  <!-- Axis labels -->
  <text x="210" y="20" class="label">x</text>
  <text x="20" y="-210" class="label">y</text>
  
  <!-- Function label -->
  <text x="130" y="-130" class="function-label">f(x) = x + 2</text>
  
  <!-- Origin -->
  <circle cx="0" cy="0" r="2" fill="#666"/>
  <text x="-12" y="18" class="tick-label">0</text>
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