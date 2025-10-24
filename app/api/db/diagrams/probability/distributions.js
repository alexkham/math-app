
export const distributionsDiagramsData={
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

    "two basic types":{
        svg:`<svg viewBox="0 0 1000 600" style="margin-left:200px" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="500" fill="#f8fafc"/>
  
  <!-- Root Node -->
  <rect x="250" y="20" width="300" height="50" rx="8" fill="#1e293b"/>
  <text x="400" y="52" text-anchor="middle" font-size="20" font-weight="bold" fill="#fff">
    2 Basic Types of Distributions
  </text>
  
  <!-- Trunk line -->
  <line x1="400" y1="70" x2="400" y2="110" stroke="#64748b" stroke-width="3"/>
  
  <!-- Split junction -->
  <circle cx="400" cy="110" r="6" fill="#64748b"/>
  
  <!-- Branch lines -->
  <line x1="400" y1="110" x2="210" y2="150" stroke="#3b82f6" stroke-width="3"/>
  <line x1="400" y1="110" x2="590" y2="150" stroke="#8b5cf6" stroke-width="3"/>
  
  <!-- Discrete Distribution Section -->
  <g id="discrete">
    <!-- Section background -->
    <rect x="40" y="150" width="340" height="380" rx="12" fill="#fff" stroke="#e2e8f0" stroke-width="2"/>
    
    <!-- Label -->
    <text x="210" y="185" text-anchor="middle" font-size="20" font-weight="600" fill="#3b82f6">
      Discrete Distribution
    </text>
    
    <!-- Subtitle -->
    <text x="210" y="210" text-anchor="middle" font-size="13" fill="#64748b">
      Countable Outcomes
    </text>
    
    <!-- Bar chart representation -->
    <g id="bars">
      <rect x="80" y="380" width="30" height="60" fill="#3b82f6" opacity="0.8"/>
      <circle cx="95" cy="370" r="5" fill="#1e40af"/>
      
      <rect x="125" y="320" width="30" height="120" fill="#3b82f6" opacity="0.8"/>
      <circle cx="140" cy="310" r="5" fill="#1e40af"/>
      
      <rect x="170" y="290" width="30" height="150" fill="#3b82f6" opacity="0.8"/>
      <circle cx="185" cy="280" r="5" fill="#1e40af"/>
      
      <rect x="215" y="310" width="30" height="130" fill="#3b82f6" opacity="0.8"/>
      <circle cx="230" cy="300" r="5" fill="#1e40af"/>
      
      <rect x="260" y="350" width="30" height="90" fill="#3b82f6" opacity="0.8"/>
      <circle cx="275" cy="340" r="5" fill="#1e40af"/>
      
      <rect x="305" y="390" width="30" height="50" fill="#3b82f6" opacity="0.8"/>
      <circle cx="320" cy="380" r="5" fill="#1e40af"/>
    </g>
    
    <!-- Axis -->
    <line x1="70" y1="440" x2="350" y2="440" stroke="#94a3b8" stroke-width="2"/>
    <line x1="70" y1="250" x2="70" y2="440" stroke="#94a3b8" stroke-width="2"/>
    
    <!-- Examples -->
    <text x="210" y="470" text-anchor="middle" font-size="12" fill="#475569">
      Examples:
    </text>
    <text x="210" y="490" text-anchor="middle" font-size="11" fill="#64748b">
      • Coin flips  • Dice rolls
    </text>
    <text x="210" y="508" text-anchor="middle" font-size="11" fill="#64748b">
      • Number of defects
    </text>
  </g>
  
  <!-- Continuous Distribution Section -->
  <g id="continuous">
    <!-- Section background -->
    <rect x="420" y="150" width="340" height="380" rx="12" fill="#fff" stroke="#e2e8f0" stroke-width="2"/>
    
    <!-- Label -->
    <text x="590" y="185" text-anchor="middle" font-size="20" font-weight="600" fill="#8b5cf6">
      Continuous Distribution
    </text>
    
    <!-- Subtitle -->
    <text x="590" y="210" text-anchor="middle" font-size="13" fill="#64748b">
      Measurable Values
    </text>
    
    <!-- Smooth curve (bell curve) -->
    <path d="M 460 430 Q 480 430, 500 410 T 540 350 T 560 310 T 580 280 T 600 270 T 620 280 T 640 310 T 660 350 T 680 390 T 700 410 T 720 430" 
          fill="none" stroke="#8b5cf6" stroke-width="3"/>
    
    <!-- Fill under curve -->
    <path d="M 460 430 Q 480 430, 500 410 T 540 350 T 560 310 T 580 280 T 600 270 T 620 280 T 640 310 T 660 350 T 680 390 T 700 410 T 720 430 L 720 440 L 460 440 Z" 
          fill="#8b5cf6" opacity="0.2"/>
    
    <!-- Shaded area to show continuity -->
    <path d="M 560 310 L 560 440 L 640 440 L 640 310 Q 620 280, 600 270 T 580 280 T 560 310" 
          fill="#8b5cf6" opacity="0.3"/>
    
    <!-- Axis -->
    <line x1="450" y1="440" x2="730" y2="440" stroke="#94a3b8" stroke-width="2"/>
    <line x1="450" y1="250" x2="450" y2="440" stroke="#94a3b8" stroke-width="2"/>
    
    <!-- Examples -->
    <text x="590" y="470" text-anchor="middle" font-size="12" fill="#475569">
      Examples:
    </text>
    <text x="590" y="490" text-anchor="middle" font-size="11" fill="#64748b">
      • Height  • Temperature
    </text>
    <text x="590" y="508" text-anchor="middle" font-size="11" fill="#64748b">
      • Time  • Weight
    </text>
  </g>
  
  <!-- Key Difference Note -->
  <rect x="250" y="545" width="300" height="20" rx="4" fill="#fef3c7"/>
  <text x="400" y="559" text-anchor="middle" font-size="11" font-weight="500" fill="#92400e">
    Discrete = Countable  |  Continuous = Unbroken Range
  </text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "distribution desicion making flowchart":{
        svg:`        
<svg id="export-svg" width="100%" xmlns="http://www.w3.org/2000/svg" class="flowchart" style="max-width: 920.76px; background: rgb(239, 246, 255);" viewBox="4 4 920.7604370117188 794" role="graphics-document document" aria-roledescription="flowchart-v2"><style xmlns="http://www.w3.org/1999/xhtml">@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"); p {margin: 0;}</style><style>#export-svg{font-family:arial,sans-serif;font-size:14px;fill:#000000;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#export-svg .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#export-svg .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#export-svg .error-icon{fill:#552222;}#export-svg .error-text{fill:#552222;stroke:#552222;}#export-svg .edge-thickness-normal{stroke-width:1px;}#export-svg .edge-thickness-thick{stroke-width:3.5px;}#export-svg .edge-pattern-solid{stroke-dasharray:0;}#export-svg .edge-thickness-invisible{stroke-width:0;fill:none;}#export-svg .edge-pattern-dashed{stroke-dasharray:3;}#export-svg .edge-pattern-dotted{stroke-dasharray:2;}#export-svg .marker{fill:#666;stroke:#666;}#export-svg .marker.cross{stroke:#666;}#export-svg svg{font-family:arial,sans-serif;font-size:14px;}#export-svg p{margin:0;}#export-svg .label{font-family:arial,sans-serif;color:#000000;}#export-svg .cluster-label text{fill:#333;}#export-svg .cluster-label span{color:#333;}#export-svg .cluster-label span p{background-color:transparent;}#export-svg .label text,#export-svg span{fill:#000000;color:#000000;}#export-svg .node rect,#export-svg .node circle,#export-svg .node ellipse,#export-svg .node polygon,#export-svg .node path{fill:#eee;stroke:#999;stroke-width:1px;}#export-svg .rough-node .label text,#export-svg .node .label text,#export-svg .image-shape .label,#export-svg .icon-shape .label{text-anchor:middle;}#export-svg .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#export-svg .rough-node .label,#export-svg .node .label,#export-svg .image-shape .label,#export-svg .icon-shape .label{text-align:center;}#export-svg .node.clickable{cursor:pointer;}#export-svg .root .anchor path{fill:#666!important;stroke-width:0;stroke:#666;}#export-svg .arrowheadPath{fill:#333333;}#export-svg .edgePath .path{stroke:#666;stroke-width:1px;}#export-svg .flowchart-link{stroke:#666;fill:none;}#export-svg .edgeLabel{background-color:white;text-align:center;}#export-svg .edgeLabel p{background-color:white;}#export-svg .edgeLabel rect{opacity:0.5;background-color:white;fill:white;}#export-svg .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#export-svg .cluster rect{fill:hsl(0, 0%, 98.9215686275%);stroke:#707070;stroke-width:1px;}#export-svg .cluster text{fill:#333;}#export-svg .cluster span{color:#333;}#export-svg div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:arial,sans-serif;font-size:12px;background:hsl(-160, 0%, 93.3333333333%);border:1px solid #707070;border-radius:2px;pointer-events:none;z-index:100;}#export-svg .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#000000;}#export-svg rect.text{fill:none;stroke-width:0;}#export-svg .icon-shape,#export-svg .image-shape{background-color:white;text-align:center;}#export-svg .icon-shape p,#export-svg .image-shape p{background-color:white;padding:2px;}#export-svg .icon-shape rect,#export-svg .image-shape rect{opacity:0.5;background-color:white;fill:white;}#export-svg .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#export-svg .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#export-svg .node .neo-node{stroke:#999;}#export-svg [data-look="neo"].node rect,#export-svg [data-look="neo"].cluster rect,#export-svg [data-look="neo"].node polygon{stroke:url(#export-svg-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#export-svg [data-look="neo"].node path{stroke:url(#export-svg-gradient);stroke-width:1;}#export-svg [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#export-svg [data-look="neo"].node .neo-line path{stroke:#999;filter:none;}#export-svg [data-look="neo"].node circle{stroke:url(#export-svg-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#export-svg [data-look="neo"].node circle .state-start{fill:#000000;}#export-svg [data-look="neo"].statediagram-cluster rect{fill:#eee;stroke:url(#export-svg-gradient);stroke-width:1;}#export-svg [data-look="neo"].icon-shape .icon{fill:url(#export-svg-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#export-svg [data-look="neo"].icon-shape .icon-neo path{stroke:url(#export-svg-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#export-svg :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g><marker id="export-svg_flowchart-v2-pointEnd" class="marker flowchart-v2" viewBox="0 0 11.5 14" refX="7.75" refY="7" markerUnits="userSpaceOnUse" markerWidth="10.5" markerHeight="14" orient="auto"><path d="M 0 0 L 11.5 7 L 0 14 z" class="arrowMarkerPath" style="stroke-width: 0; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-pointStart" class="marker flowchart-v2" viewBox="0 0 11.5 14" refX="4" refY="7" markerUnits="userSpaceOnUse" markerWidth="11.5" markerHeight="14" orient="auto"><polygon points="0,7 11.5,14 11.5,0" class="arrowMarkerPath" style="stroke-width: 0; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-pointEnd-margin" class="marker flowchart-v2" viewBox="0 0 11.5 14" refX="11.5" refY="7" markerUnits="userSpaceOnUse" markerWidth="10.5" markerHeight="14" orient="auto"><path d="M 0 0 L 11.5 7 L 0 14 z" class="arrowMarkerPath" style="stroke-width: 0; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-pointStart-margin" class="marker flowchart-v2" viewBox="0 0 11.5 14" refX="1" refY="7" markerUnits="userSpaceOnUse" markerWidth="11.5" markerHeight="14" orient="auto"><polygon points="0,7 11.5,14 11.5,0" class="arrowMarkerPath" style="stroke-width: 0; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-circleEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refY="5" refX="10.75" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 0; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-circleStart" class="marker flowchart-v2" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 0; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-circleEnd-margin" class="marker flowchart-v2" viewBox="0 0 10 10" refY="5" refX="12.25" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 0; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-circleStart-margin" class="marker flowchart-v2" viewBox="0 0 10 10" refX="-2" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 0; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-crossEnd" class="marker cross flowchart-v2" viewBox="0 0 15 15" refX="17.7" refY="7.5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 1,1 L 14,14 M 1,14 L 14,1" class="arrowMarkerPath" style="stroke-width: 2.5;"/></marker><marker id="export-svg_flowchart-v2-crossStart" class="marker cross flowchart-v2" viewBox="0 0 15 15" refX="-3.5" refY="7.5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 1,1 L 14,14 M 1,14 L 14,1" class="arrowMarkerPath" style="stroke-width: 2.5; stroke-dasharray: 1, 0;"/></marker><marker id="export-svg_flowchart-v2-crossEnd-margin" class="marker cross flowchart-v2" viewBox="0 0 15 15" refX="17.7" refY="7.5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 1,1 L 14,14 M 1,14 L 14,1" class="arrowMarkerPath" style="stroke-width: 2.5;"/></marker><marker id="export-svg_flowchart-v2-crossStart-margin" class="marker cross flowchart-v2" viewBox="0 0 15 15" refX="-3.5" refY="7.5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M 1,1 L 14,14 M 1,14 L 14,1" class="arrowMarkerPath" style="stroke-width: 2.5; stroke-dasharray: 1, 0;"/></marker></g><defs><filter id="drop-shadow" height="130%" width="130%"><feDropShadow dx="4" dy="4" stdDeviation="0" flood-opacity="0.06" flood-color="#000000"/></filter></defs><defs><filter id="drop-shadow-small" height="150%" width="150%"><feDropShadow dx="2" dy="2" stdDeviation="0" flood-opacity="0.06" flood-color="#000000"/></filter></defs><linearGradient id="export-svg-gradient" gradientUnits="objectBoundingBox" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="hsl(0, 0%, 83.3333333333%)" stop-opacity="1"/><stop offset="100%" stop-color="hsl(0, 0%, 88.9215686275%)" stop-opacity="1"/></linearGradient><g class="subgraphs"/><g class="nodes"><g class="node default" id="flowchart-A-0" data-id="A" data-node="true" data-et="node" data-look="neo" transform="translate(684.7604166666666, 45)"><rect class="basic label-container" style="" rx="5" data-id="A" ry="5" x="-116" y="-33" width="232" height="66" stroke="url(#gradient)"/><g class="label" style="" transform="translate(-100, -21)"><rect/><foreignObject width="200" height="42"><div style="display: table; white-space: break-spaces; line-height: 1.5; max-width: 200px; text-align: center; width: 200px;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Is the number of possible outcomes finite?</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-B-1" data-id="B" data-node="true" data-et="node" data-look="neo" transform="translate(269.3628463745117, 219.5)"><rect class="basic label-container" style="" rx="5" data-id="B" ry="5" x="-113.66146087646484" y="-22.5" width="227.3229217529297" height="45" stroke="url(#gradient)"/><g class="label" style="" transform="translate(-97.66146087646484, -10.5)"><rect/><foreignObject width="195.3229217529297" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Are all outcomes equally likely?</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-F-3" data-id="F" data-node="true" data-et="node" data-look="neo" transform="translate(723.4270833333333, 212.5)"><rect class="basic label-container" style="" rx="5" data-id="F" ry="5" x="-116" y="-43.5" width="232" height="87" stroke="url(#gradient)"/><g class="label" style="" transform="translate(-100, -31.5)"><rect/><foreignObject width="200" height="63"><div style="display: table; white-space: break-spaces; line-height: 1.5; max-width: 200px; text-align: center; width: 200px;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Are you counting trials until the first success (with probability p)?</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-DU-5" data-id="DU" data-node="true" data-et="node" data-look="neo" transform="translate(84.125, 369.5)"><rect class="basic label-container" style="" rx="22.5" ry="22.5" x="-72.125" y="-22.5" width="144.25" height="45"/><g class="label" style="" transform="translate(-52.125, -10.5)"><rect/><foreignObject width="104.25" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Discrete Uniform</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-C-7" data-id="C" data-node="true" data-et="node" data-look="neo" transform="translate(307.25, 401)"><rect class="basic label-container" style="" rx="5" data-id="C" ry="5" x="-116" y="-54" width="232" height="108" stroke="url(#gradient)"/><g class="label" style="" transform="translate(-100, -42)"><rect/><foreignObject width="200" height="84"><div style="display: table; white-space: break-spaces; line-height: 1.5; max-width: 200px; text-align: center; width: 200px;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Are you counting the number of successes in a fixed number of independent trials (with fixed p)?</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-BIN-9" data-id="BIN" data-node="true" data-et="node" data-look="neo" transform="translate(148.0677096048991, 568.5)"><rect class="basic label-container" style="" rx="22.5" ry="22.5" x="-46.84895896911621" y="-22.5" width="93.69791793823242" height="45"/><g class="label" style="" transform="translate(-26.84895896911621, -10.5)"><rect/><foreignObject width="53.69791793823242" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Binomial</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-D-11" data-id="D" data-node="true" data-et="node" data-look="neo" transform="translate(345.9166666666667, 600)"><rect class="basic label-container" style="" rx="5" data-id="D" ry="5" x="-116" y="-54" width="232" height="108" stroke="url(#gradient)"/><g class="label" style="" transform="translate(-100, -42)"><rect/><foreignObject width="200" height="84"><div style="display: table; white-space: break-spaces; line-height: 1.5; max-width: 200px; text-align: center; width: 200px;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Are you sampling without replacement from a finite population with known number of successes?</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-HYP-13" data-id="HYP" data-node="true" data-et="node" data-look="neo" transform="translate(345.9166666666667, 767.5)"><rect class="basic label-container" style="" rx="22.5" ry="22.5" x="-69.41146087646484" y="-22.5" width="138.8229217529297" height="45"/><g class="label" style="" transform="translate(-49.411460876464844, -10.5)"><rect/><foreignObject width="98.82292175292969" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Hypergeometric</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-GEO-15" data-id="GEO" data-node="true" data-et="node" data-look="neo" transform="translate(558.8072929382324, 369.5)"><rect class="basic label-container" style="" rx="22.5" ry="22.5" x="-52.286460876464844" y="-22.5" width="104.57292175292969" height="45"/><g class="label" style="" transform="translate(-32.286460876464844, -10.5)"><rect/><foreignObject width="64.57292175292969" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Geometric</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-G-17" data-id="G" data-node="true" data-et="node" data-look="neo" transform="translate(762.09375, 408)"><rect class="basic label-container" style="" rx="5" data-id="G" ry="5" x="-116" y="-33" width="232" height="66" stroke="url(#gradient)"/><g class="label" style="" transform="translate(-100, -21)"><rect/><foreignObject width="200" height="42"><div style="display: table; white-space: break-spaces; line-height: 1.5; max-width: 200px; text-align: center; width: 200px;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Are you counting trials until the r-th success (with fixed p)?</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-NB-19" data-id="NB" data-node="true" data-et="node" data-look="neo" transform="translate(573.3385416666667, 568.5)"><rect class="basic label-container" style="" rx="22.5" ry="22.5" x="-76.421875" y="-22.5" width="152.84375" height="45"/><g class="label" style="" transform="translate(-56.421875, -10.5)"><rect/><foreignObject width="112.84375" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Negative Binomial</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-H-21" data-id="H" data-node="true" data-et="node" data-look="neo" transform="translate(800.7604166666667, 600)"><rect class="basic label-container" style="" rx="5" data-id="H" ry="5" x="-116" y="-43.5" width="232" height="87" stroke="url(#gradient)"/><g class="label" style="" transform="translate(-100, -31.5)"><rect/><foreignObject width="200" height="63"><div style="display: table; white-space: break-spaces; line-height: 1.5; max-width: 200px; text-align: center; width: 200px;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Are you counting rare events in a fixed time or space interval at constant rate λ?</p></span></div></foreignObject></g></g><g class="node default" id="flowchart-POI-23" data-id="POI" data-node="true" data-et="node" data-look="neo" transform="translate(800.7604166666667, 767.5)"><rect class="basic label-container" style="" rx="22.5" ry="22.5" x="-44.90625" y="-22.5" width="89.8125" height="45"/><g class="label" style="" transform="translate(-24.90625, -10.5)"><rect/><foreignObject width="49.8125" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel"><p>Poisson</p></span></div></foreignObject></g></g></g><g class="edges edgePaths"><path d="M646.09375,78L646.09375,88.42893218813452Q646.09375,95.5 639.0226821881345,95.5L276.4339141863772,95.5Q269.3628463745117,95.5 269.3628463745117,102.57106781186548L269.3628463745117,193" id="L_A_B_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 477.4026184082031 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_A_B_0" data-points="W3sieCI6NjQ2LjA5Mzc1LCJ5Ijo3OH0seyJ4Ijo2NDYuMDkzNzUsInkiOjk1LjV9LHsieCI6MjY5LjM2Mjg0NjM3NDUxMTcsInkiOjk1LjV9LHsieCI6MjY5LjM2Mjg0NjM3NDUxMTcsInkiOjE5N31d" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M723.4270833333333,78L723.4270833333333,165" id="L_A_F_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 78 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_A_F_0" data-points="W3sieCI6NzIzLjQyNzA4MzMzMzMzMzMsInkiOjc4fSx7IngiOjcyMy40MjcwODMzMzMzMzMzLCJ5IjoxNjl9XQ==" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M231.47569274902344,242L231.47569274902344,266.4289321881345Q231.47569274902344,273.5 224.40462493715796,273.5L91.19606781186548,273.5Q84.125,273.5 84.125,280.5710678118655L84.125,343" id="L_B_DU_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 234.0223846435547 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_B_DU_0" data-points="W3sieCI6MjMxLjQ3NTY5Mjc0OTAyMzQ0LCJ5IjoyNDJ9LHsieCI6MjMxLjQ3NTY5Mjc0OTAyMzQ0LCJ5IjoyNzMuNX0seyJ4Ijo4NC4xMjUsInkiOjI3My41fSx7IngiOjg0LjEyNSwieSI6MzQ3fV0=" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M307.25,242L307.25,343" id="L_B_C_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 92 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_B_C_0" data-points="W3sieCI6MzA3LjI1LCJ5IjoyNDJ9LHsieCI6MzA3LjI1LCJ5IjozNDd9XQ==" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M268.58333333333337,455L268.58333333333337,465.4289321881345Q268.58333333333337,472.5 261.5122655214679,472.5L155.13877741676458,472.5Q148.0677096048991,472.5 148.0677096048991,479.5710678118655L148.0677096048991,542" id="L_C_BIN_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 193.18734741210938 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_C_BIN_0" data-points="W3sieCI6MjY4LjU4MzMzMzMzMzMzMzM3LCJ5Ijo0NTV9LHsieCI6MjY4LjU4MzMzMzMzMzMzMzM3LCJ5Ijo0NzIuNX0seyJ4IjoxNDguMDY3NzA5NjA0ODk5MSwieSI6NDcyLjV9LHsieCI6MTQ4LjA2NzcwOTYwNDg5OTEsInkiOjU0Nn1d" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M345.9166666666667,455L345.9166666666667,542" id="L_C_D_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 78 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_C_D_0" data-points="W3sieCI6MzQ1LjkxNjY2NjY2NjY2NjcsInkiOjQ1NX0seyJ4IjozNDUuOTE2NjY2NjY2NjY2NywieSI6NTQ2fV0=" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M345.9166666666667,654L345.9166666666667,741" id="L_D_HYP_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 78 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_D_HYP_0" data-points="W3sieCI6MzQ1LjkxNjY2NjY2NjY2NjcsInkiOjY1NH0seyJ4IjozNDUuOTE2NjY2NjY2NjY2NywieSI6NzQ1fV0=" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M684.7604166666666,256L684.7604166666666,266.4289321881345Q684.7604166666666,273.5 677.6893488548012,273.5L565.878360750098,273.5Q558.8072929382324,273.5 558.8072929382324,280.5710678118655L558.8072929382324,343" id="L_F_GEO_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 198.62481689453125 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_F_GEO_0" data-points="W3sieCI6Njg0Ljc2MDQxNjY2NjY2NjYsInkiOjI1Nn0seyJ4Ijo2ODQuNzYwNDE2NjY2NjY2NiwieSI6MjczLjV9LHsieCI6NTU4LjgwNzI5MjkzODIzMjQsInkiOjI3My41fSx7IngiOjU1OC44MDcyOTI5MzgyMzI0LCJ5IjozNDd9XQ==" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M762.09375,256L762.09375,371" id="L_F_G_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 106 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_F_G_0" data-points="W3sieCI6NzYyLjA5Mzc1LCJ5IjoyNTZ9LHsieCI6NzYyLjA5Mzc1LCJ5IjozNzV9XQ==" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M723.4270833333334,441L723.4270833333334,465.4289321881345Q723.4270833333334,472.5 716.356015521468,472.5L580.4096094785323,472.5Q573.3385416666667,472.5 573.3385416666667,479.5710678118655L573.3385416666667,542" id="L_G_NB_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 236.76025390625 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_G_NB_0" data-points="W3sieCI6NzIzLjQyNzA4MzMzMzMzMzQsInkiOjQ0MX0seyJ4Ijo3MjMuNDI3MDgzMzMzMzMzNCwieSI6NDcyLjV9LHsieCI6NTczLjMzODU0MTY2NjY2NjcsInkiOjQ3Mi41fSx7IngiOjU3My4zMzg1NDE2NjY2NjY3LCJ5Ijo1NDZ9XQ==" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M800.7604166666667,441L800.7604166666667,552.5" id="L_G_H_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 102.5 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_G_H_0" data-points="W3sieCI6ODAwLjc2MDQxNjY2NjY2NjcsInkiOjQ0MX0seyJ4Ijo4MDAuNzYwNDE2NjY2NjY2NywieSI6NTU2LjV9XQ==" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/><path d="M800.7604166666667,643.5L800.7604166666667,741" id="L_H_POI_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="stroke-dasharray: 0 0 88.5 9; stroke-dashoffset: 0;;" data-edge="true" data-et="edge" data-id="L_H_POI_0" data-points="W3sieCI6ODAwLjc2MDQxNjY2NjY2NjcsInkiOjY0My41fSx7IngiOjgwMC43NjA0MTY2NjY2NjY3LCJ5Ijo3NDV9XQ==" marker-end="url(#export-svg_flowchart-v2-pointEnd-margin)"/></g><g class="edgeLabels"><g class="edgeLabel" transform="translate(269.2847213745117, 123.5)"><g class="label" data-id="L_A_B_0" transform="translate(-11.421875, -10.5)"><foreignObject width="22.84375" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>Yes</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(723.3802083333333, 123.5)"><g class="label" data-id="L_A_F_0" transform="translate(-8.953125, -10.5)"><foreignObject width="17.90625" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>No</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(84.046875, 301.5)"><g class="label" data-id="L_B_DU_0" transform="translate(-11.421875, -10.5)"><foreignObject width="22.84375" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>Yes</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(307.203125, 301.5)"><g class="label" data-id="L_B_C_0" transform="translate(-8.953125, -10.5)"><foreignObject width="17.90625" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>No</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(147.9895846048991, 500.5)"><g class="label" data-id="L_C_BIN_0" transform="translate(-11.421875, -10.5)"><foreignObject width="22.84375" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>Yes</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(345.8697916666667, 500.5)"><g class="label" data-id="L_C_D_0" transform="translate(-8.953125, -10.5)"><foreignObject width="17.90625" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>No</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(345.8385416666667, 699.5)"><g class="label" data-id="L_D_HYP_0" transform="translate(-11.421875, -10.5)"><foreignObject width="22.84375" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>Yes</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(558.7291679382324, 301.5)"><g class="label" data-id="L_F_GEO_0" transform="translate(-11.421875, -10.5)"><foreignObject width="22.84375" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>Yes</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(762.046875, 301.5)"><g class="label" data-id="L_F_G_0" transform="translate(-8.953125, -10.5)"><foreignObject width="17.90625" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>No</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(573.2604166666667, 500.5)"><g class="label" data-id="L_G_NB_0" transform="translate(-11.421875, -10.5)"><foreignObject width="22.84375" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>Yes</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(800.7135416666667, 500.5)"><g class="label" data-id="L_G_H_0" transform="translate(-8.953125, -10.5)"><foreignObject width="17.90625" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>No</p></span></div></foreignObject></g></g><g class="edgeLabel" transform="translate(800.6822916666667, 699.5)"><g class="label" data-id="L_H_POI_0" transform="translate(-11.421875, -10.5)"><foreignObject width="22.84375" height="21"><div style="display: table-cell; white-space: normal; line-height: 1.5; max-width: 200px; text-align: center;" xmlns="http://www.w3.org/1999/xhtml" class="labelBkg"><span class="edgeLabel"><p>Yes</p></span></div></foreignObject></g></g></g></svg>
        `,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "bernoulli experiment":{
        svg:`<svg viewBox="0 0 1000 800" style="margin-left:200px; margin-bottom:-200px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#f5f5f5"/>
  
  <!-- Title -->
  <text x="400" y="40" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Bernoulli Experiment
  </text>
  
  <!-- Single Experiment Box -->
  <rect x="325" y="80" width="150" height="80" fill="#5b7a9b" stroke="#4a6178" stroke-width="3" rx="10"/>
  <text x="400" y="110" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    SINGLE
  </text>
  <text x="400" y="135" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    EXPERIMENT
  </text>
  
  <!-- Arrow down -->
  <line x1="400" y1="160" x2="400" y2="220" stroke="#34495e" stroke-width="3"/>
  <polygon points="400,220 395,210 405,210" fill="#34495e"/>
  
  <!-- Split point circle -->
  <circle cx="400" cy="240" r="15" fill="#34495e"/>
  
  <!-- Left branch - Success -->
  <line x1="400" y1="240" x2="250" y2="340" stroke="#52a372" stroke-width="4"/>
  <polygon points="250,340 258,333 254,328" fill="#52a372"/>
  
  <!-- Right branch - Failure -->
  <line x1="400" y1="240" x2="550" y2="340" stroke="#d16969" stroke-width="4"/>
  <polygon points="550,340 546,328 542,333" fill="#d16969"/>
  
  <!-- Probability label for Success -->
  <text x="260" y="270" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#3d7a54" text-anchor="middle">
    Probability = p
  </text>
  
  <!-- Probability label for Failure -->
  <text x="540" y="270" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#b84a4a" text-anchor="middle">
    Probability = 1-p
  </text>
  
  <!-- Success outcome box -->
  <rect x="150" y="350" width="200" height="100" fill="#3d7a54" stroke="#2d5a3d" stroke-width="3" rx="10"/>
  <text x="250" y="395" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">
    "SUCCESS"
  </text>
  <text x="250" y="425" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">
    Outcome 1
  </text>
  
  <!-- Failure outcome box -->
  <rect x="450" y="350" width="200" height="100" fill="#b84a4a" stroke="#983838" stroke-width="3" rx="10"/>
  <text x="550" y="395" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">
    "FAILURE"
  </text>
  <text x="550" y="425" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">
    Outcome 2
  </text>
  
  <!-- Note box -->
  <rect x="100" y="480" width="600" height="90" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="8"/>
  <text x="400" y="510" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#6d4c41" text-anchor="middle">
    Important Note:
  </text>
  <text x="400" y="535" font-family="Arial, sans-serif" font-size="13" fill="#6d4c41" text-anchor="middle">
    "Success" and "Failure" are mathematical labels to distinguish between
  </text>
  <text x="400" y="555" font-family="Arial, sans-serif" font-size="13" fill="#6d4c41" text-anchor="middle">
    two outcomes. They don't represent real-life success or failure.
  </text>
  
  <!-- Decorative elements -->
  <circle cx="120" cy="120" r="5" fill="#bdc3c7" opacity="0.5"/>
  <circle cx="680" cy="120" r="5" fill="#bdc3c7" opacity="0.5"/>
  <circle cx="120" cy="400" r="5" fill="#bdc3c7" opacity="0.5"/>
  <circle cx="680" cy="400" r="5" fill="#bdc3c7" opacity="0.5"/>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "binomial distribution":{
        svg:`
        <svg viewBox="0 0 1000 800"  xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="700" fill="#f5f5f5"/>
  
  <!-- Title -->
  <text x="450" y="35" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Binomial Distribution
  </text>
  
  <!-- Parameters box -->
  <rect x="325" y="50" width="250" height="60" fill="#5b7a9b" stroke="#4a6178" stroke-width="2" rx="8"/>
  <text x="450" y="78" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    n = 6 trials, probability = p
  </text>
  <text x="450" y="98" font-family="Arial, sans-serif" font-size="13" fill="white" text-anchor="middle">
    (independent Bernoulli experiments)
  </text>
  
  <!-- Repeated trials -->
  <text x="450" y="130" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    REPEATED TRIALS
  </text>
  
  <!-- Trial 1 -->
  <circle cx="120" cy="170" r="25" fill="#7a8a9b" stroke="#5b6a7b" stroke-width="2"/>
  <text x="120" y="177" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    T1
  </text>
  
  <!-- Trial 2 -->
  <circle cx="220" cy="170" r="25" fill="#7a8a9b" stroke="#5b6a7b" stroke-width="2"/>
  <text x="220" y="177" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    T2
  </text>
  
  <!-- Trial 3 -->
  <circle cx="320" cy="170" r="25" fill="#7a8a9b" stroke="#5b6a7b" stroke-width="2"/>
  <text x="320" y="177" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    T3
  </text>
  
  <!-- Trial 4 -->
  <circle cx="420" cy="170" r="25" fill="#7a8a9b" stroke="#5b6a7b" stroke-width="2"/>
  <text x="420" y="177" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    T4
  </text>
  
  <!-- Trial 5 -->
  <circle cx="520" cy="170" r="25" fill="#7a8a9b" stroke="#5b6a7b" stroke-width="2"/>
  <text x="520" y="177" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    T5
  </text>
  
  <!-- Trial 6 -->
  <circle cx="620" cy="170" r="25" fill="#7a8a9b" stroke="#5b6a7b" stroke-width="2"/>
  <text x="620" y="177" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    T6
  </text>
  
  <!-- ... dots -->
  <text x="690" y="177" font-family="Arial, sans-serif" font-size="20" fill="#7a8a9b" text-anchor="middle">
    ...
  </text>
  <text x="750" y="177" font-family="Arial, sans-serif" font-size="20" fill="#7a8a9b" text-anchor="middle">
    Tn
  </text>
  
  <!-- Arrow down -->
  <line x1="450" y1="205" x2="450" y2="240" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,240 445,230 455,230" fill="#34495e"/>
  
  <!-- Count box -->
  <rect x="320" y="250" width="260" height="50" fill="#6b7a8b" stroke="#5b6a7b" stroke-width="2" rx="8"/>
  <text x="450" y="280" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    COUNT TOTAL SUCCESSES (X)
  </text>
  
  <!-- Arrow to distribution -->
  <line x1="450" y1="300" x2="450" y2="330" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,330 445,320 455,320" fill="#34495e"/>
  
  <!-- Distribution title -->
  <text x="450" y="355" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY DISTRIBUTION: P(X = k)
  </text>
  
  <!-- Distribution bars -->
  <!-- X=0 -->
  <rect x="80" y="545" width="70" height="15" fill="#b84a4a"/>
  <text x="115" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">0</text>
  
  <!-- X=1 -->
  <rect x="165" y="500" width="70" height="60" fill="#c86b5b"/>
  <text x="200" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">1</text>
  
  <!-- X=2 -->
  <rect x="250" y="440" width="70" height="120" fill="#d88b6b"/>
  <text x="285" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">2</text>
  
  <!-- X=3 -->
  <rect x="335" y="380" width="70" height="180" fill="#8b9b7b"/>
  <text x="370" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">3</text>
  
  <!-- X=4 -->
  <rect x="420" y="440" width="70" height="120" fill="#6b8b7b"/>
  <text x="455" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">4</text>
  
  <!-- X=5 -->
  <rect x="505" y="500" width="70" height="60" fill="#4b7a6b"/>
  <text x="540" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">5</text>
  
  <!-- X=6 -->
  <rect x="590" y="545" width="70" height="15" fill="#3d7a54"/>
  <text x="625" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">6</text>
  
  <!-- Axes -->
  <line x1="70" y1="560" x2="670" y2="560" stroke="#2c3e50" stroke-width="2"/>
  <line x1="70" y1="370" x2="70" y2="560" stroke="#2c3e50" stroke-width="2"/>
  
  <!-- Axis labels -->
  <text x="370" y="610" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Number of Successes (k)
  </text>
  <text x="30" y="465" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle" transform="rotate(-90, 30, 465)">
    Probability
  </text>
  
  <!-- Note box -->
  <rect x="680" y="320" width="210" height="280" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="8"/>
  <text x="785" y="355" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#6d4c41" text-anchor="middle">
    Key Properties:
  </text>
  <text x="785" y="390" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Fixed n trials
  </text>
  <text x="785" y="425" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Each trial independent
  </text>
  <text x="785" y="460" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Same probability p
  </text>
  <text x="785" y="495" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Count successes: X
  </text>
  <text x="785" y="530" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • X can be 0 to n
  </text>
  <text x="785" y="565" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • E(X) = np
  </text>
  <text x="785" y="590" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Var(X) = np(1-p)
  </text>
  
  <!-- Formula -->
  <text x="450" y="650" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle">
    X ~ Binomial(n, p)
  </text>
  
  <!-- Example note -->
  <text x="450" y="675" font-family="Arial, sans-serif" font-size="11" font-style="italic" fill="#5a5a5a" text-anchor="middle">
    Example shown: n=6, p=0.5 (symmetric distribution)
  </text>
  
  <!-- Formula box - BIG CARD -->
  <rect x="100" y="700" width="700" height="90" fill="#ffffff" stroke="#5b7a9b" stroke-width="4" rx="10"/>
  <text x="450" y="730" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY FORMULA:
  </text>
  <text x="450" y="762" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    P(X = k) = C(n, k) × p<tspan baseline-shift="super" font-size="16">k</tspan> × (1-p)<tspan baseline-shift="super" font-size="16">(n-k)</tspan>
  </text>
  <text x="450" y="782" font-family="Arial, sans-serif" font-size="14" fill="#4a5a6a" text-anchor="middle">
    where C(n, k) = n! / (k!(n-k)!) is the binomial coefficient
  </text>
</svg>
        `,
        explanation:`## Binomial Distribution
⋅ Fixed number of [Bernoulli](!/probability/distributions/discrete#bernoulli) trials: $n$  
⋅ Each trial is independent.  
⋅ Each trial has two outcomes: success or failure.  
⋅ Success probability is constant: $p$.  
⋅ Failure probability: $q = 1 - p$.  
<p style="background-color: yellow;width: 50%; font-weight: bold;margin:0px;">⋅ Random variable X counts successes.</p>⋅ Distribution is over: $\\{0, 1, \\ldots, n\\}$  
⋅ Probability function: $P(X = k) = \\binom{n}{k} p^k q^{n - k}$  
⋅ Parameters: $n \\in \\mathbb{N},\\ 0 < p < 1$  
⋅ Notation: $X \\sim \\text{Bin}(n, p)$
 `,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "geometric distribution":{
        svg:`
        <svg viewBox="0 0 900 700"  xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="800" fill="#f5f5f5"/>
  
  <!-- Title -->
  <text x="450" y="35" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Geometric Distribution
  </text>
  
  <!-- Parameters box -->
  <rect x="300" y="50" width="300" height="60" fill="#5b7a9b" stroke="#4a6178" stroke-width="2" rx="8"/>
  <text x="450" y="78" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    Repeat until FIRST success
  </text>
  <text x="450" y="98" font-family="Arial, sans-serif" font-size="13" fill="white" text-anchor="middle">
    (independent Bernoulli trials, probability = p)
  </text>
  
  <!-- Sequence of trials -->
  <text x="450" y="140" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    SEQUENCE OF TRIALS (until first success)
  </text>
  
  <!-- Trial 1 - Failure -->
  <circle cx="100" cy="190" r="28" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="100" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    F
  </text>
  
  <!-- Arrow -->
  <line x1="128" y1="190" x2="162" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="162,190 155,186 155,194" fill="#34495e"/>
  
  <!-- Trial 2 - Failure -->
  <circle cx="190" cy="190" r="28" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="190" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    F
  </text>
  
  <!-- Arrow -->
  <line x1="218" y1="190" x2="252" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="252,190 245,186 245,194" fill="#34495e"/>
  
  <!-- Trial 3 - Failure -->
  <circle cx="280" cy="190" r="28" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="280" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    F
  </text>
  
  <!-- Arrow -->
  <line x1="308" y1="190" x2="342" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="342,190 335,186 335,194" fill="#34495e"/>
  
  <!-- ... dots -->
  <text x="370" y="197" font-family="Arial, sans-serif" font-size="20" fill="#7a8a9b" text-anchor="middle">
    ...
  </text>
  
  <!-- Arrow -->
  <line x1="398" y1="190" x2="432" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="432,190 425,186 425,194" fill="#34495e"/>
  
  <!-- Trial k - Success -->
  <circle cx="460" cy="190" r="28" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="460" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    S
  </text>
  
  <!-- STOP sign -->
  <polygon points="520,175 560,175 565,190 560,205 520,205 515,190" fill="#e74c3c" stroke="#c0392b" stroke-width="3"/>
  <text x="540" y="197" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    STOP
  </text>
  
  <!-- Arrow down -->
  <line x1="450" y1="230" x2="450" y2="265" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,265 445,255 455,255" fill="#34495e"/>
  
  <!-- Count box -->
  <rect x="280" y="275" width="340" height="50" fill="#6b7a8b" stroke="#5b6a7b" stroke-width="2" rx="8"/>
  <text x="450" y="305" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    X = NUMBER OF TRIALS UNTIL FIRST SUCCESS
  </text>
  
  <!-- Arrow to distribution -->
  <line x1="450" y1="325" x2="450" y2="355" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,355 445,345 455,345" fill="#34495e"/>
  
  <!-- Distribution title -->
  <text x="450" y="380" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY DISTRIBUTION: P(X = k)
  </text>
  
  <!-- Distribution bars - exponentially decreasing -->
  <!-- X=1 -->
  <rect x="80" y="430" width="70" height="130" fill="#3d7a54"/>
  <text x="115" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">1</text>
  
  <!-- X=2 -->
  <rect x="165" y="470" width="70" height="90" fill="#4b7a6b"/>
  <text x="200" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">2</text>
  
  <!-- X=3 -->
  <rect x="250" y="500" width="70" height="60" fill="#6b8b7b"/>
  <text x="285" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">3</text>
  
  <!-- X=4 -->
  <rect x="335" y="520" width="70" height="40" fill="#8b9b7b"/>
  <text x="370" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">4</text>
  
  <!-- X=5 -->
  <rect x="420" y="535" width="70" height="25" fill="#a8b89b"/>
  <text x="455" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">5</text>
  
  <!-- X=6 -->
  <rect x="505" y="545" width="70" height="15" fill="#c0c8bb"/>
  <text x="540" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">6</text>
  
  <!-- ... continuation -->
  <text x="610" y="570" font-family="Arial, sans-serif" font-size="16" fill="#7a8a9b" text-anchor="middle">
    ...
  </text>
  
  <!-- Axes -->
  <line x1="70" y1="560" x2="650" y2="560" stroke="#2c3e50" stroke-width="2"/>
  <line x1="70" y1="420" x2="70" y2="560" stroke="#2c3e50" stroke-width="2"/>
  
  <!-- Axis labels -->
  <text x="360" y="610" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Number of Trials Until First Success (k)
  </text>
  <text x="30" y="490" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle" transform="rotate(-90, 30, 490)">
    Probability
  </text>
  
  <!-- Note box -->
  <rect x="680" y="320" width="210" height="280" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="8"/>
  <text x="785" y="355" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#6d4c41" text-anchor="middle">
    Key Properties:
  </text>
  <text x="785" y="390" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Repeat until success
  </text>
  <text x="785" y="425" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Each trial independent
  </text>
  <text x="785" y="460" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Same probability p
  </text>
  <text x="785" y="495" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • X = trial # of 1st success
  </text>
  <text x="785" y="530" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • X can be 1, 2, 3, ...
  </text>
  <text x="785" y="565" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • E(X) = 1/p
  </text>
  <text x="785" y="590" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Var(X) = (1-p)/p²
  </text>
  
  <!-- Formula -->
  <text x="450" y="655" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle">
    X ~ Geometric(p)
  </text>
  
  <!-- Example note -->
  <text x="450" y="680" font-family="Arial, sans-serif" font-size="11" font-style="italic" fill="#5a5a5a" text-anchor="middle">
    Example shown: decreasing probability distribution (memoryless property)
  </text>
  
  <!-- Formula box - BIG CARD -->
  <rect x="100" y="700" width="700" height="90" fill="#ffffff" stroke="#5b7a9b" stroke-width="4" rx="10"/>
  <text x="450" y="730" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY FORMULA:
  </text>
  <text x="450" y="762" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    P(X = k) = (1-p)<tspan baseline-shift="super" font-size="16">(k-1)</tspan> × p
  </text>
  <text x="450" y="782" font-family="Arial, sans-serif" font-size="14" fill="#4a5a6a" text-anchor="middle">
    k-1 failures followed by 1 success on trial k
  </text>
</svg>
        `,
        explanation:`## Geometric Distribution
⋅ Sequence of independent [Bernoulli](!/probability/distributions/discrete#bernoulli) trials.  
⋅ Each trial has two outcomes: success or failure.  
⋅ Success probability is constant: $p$.  
⋅ Failure probability: $q = 1 - p$.  
<p style="background-color: yellow;width: 75%; font-weight: bold;margin:0px;">⋅ Random variable X counts number of trials until the first success.</p>⋅ Support: $\\{1, 2, \\ldots\\}$  
⋅ Probability function: $P(X = k) = (1 - p)^{k - 1} \\cdot p$  
⋅ Parameters: $0 < p < 1$  
⋅ Notation: $X \\sim \\text{Geom}(p)$
 `,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "negative binomial distribution":{
        svg:`
        <svg viewBox="0 0 900 700"  xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="800" fill="#f5f5f5"/>
  
  <!-- Title -->
  <text x="450" y="35" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Negative Binomial Distribution
  </text>
  
  <!-- Parameters box -->
  <rect x="275" y="50" width="350" height="60" fill="#5b7a9b" stroke="#4a6178" stroke-width="2" rx="8"/>
  <text x="450" y="78" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    Repeat until r-th success (r = 3)
  </text>
  <text x="450" y="98" font-family="Arial, sans-serif" font-size="13" fill="white" text-anchor="middle">
    (independent Bernoulli trials, probability = p)
  </text>
  
  <!-- Sequence of trials -->
  <text x="450" y="140" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    SEQUENCE OF TRIALS (until r-th success)
  </text>
  
  <!-- Trial 1 - Failure -->
  <circle cx="80" cy="190" r="28" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="80" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    F
  </text>
  
  <!-- Arrow -->
  <line x1="108" y1="190" x2="132" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="132,190 125,186 125,194" fill="#34495e"/>
  
  <!-- Trial 2 - Success #1 -->
  <circle cx="160" cy="190" r="28" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="160" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    S₁
  </text>
  
  <!-- Arrow -->
  <line x1="188" y1="190" x2="212" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="212,190 205,186 205,194" fill="#34495e"/>
  
  <!-- Trial 3 - Failure -->
  <circle cx="240" cy="190" r="28" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="240" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    F
  </text>
  
  <!-- Arrow -->
  <line x1="268" y1="190" x2="292" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="292,190 285,186 285,194" fill="#34495e"/>
  
  <!-- Trial 4 - Failure -->
  <circle cx="320" cy="190" r="28" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="320" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    F
  </text>
  
  <!-- Arrow -->
  <line x1="348" y1="190" x2="372" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="372,190 365,186 365,194" fill="#34495e"/>
  
  <!-- Trial 5 - Success #2 -->
  <circle cx="400" cy="190" r="28" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="400" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    S₂
  </text>
  
  <!-- Arrow -->
  <line x1="428" y1="190" x2="452" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="452,190 445,186 445,194" fill="#34495e"/>
  
  <!-- ... dots -->
  <text x="480" y="197" font-family="Arial, sans-serif" font-size="20" fill="#7a8a9b" text-anchor="middle">
    ...
  </text>
  
  <!-- Arrow -->
  <line x1="508" y1="190" x2="532" y2="190" stroke="#34495e" stroke-width="2"/>
  <polygon points="532,190 525,186 525,194" fill="#34495e"/>
  
  <!-- Trial X - Success #3 (r-th) -->
  <circle cx="560" cy="190" r="28" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="560" y="197" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">
    S₃
  </text>
  
  <!-- STOP sign -->
  <polygon points="620,175 660,175 665,190 660,205 620,205 615,190" fill="#e74c3c" stroke="#c0392b" stroke-width="3"/>
  <text x="640" y="197" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    STOP
  </text>
  
  <!-- Arrow down -->
  <line x1="450" y1="230" x2="450" y2="265" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,265 445,255 455,255" fill="#34495e"/>
  
  <!-- Count box -->
  <rect x="250" y="275" width="400" height="50" fill="#6b7a8b" stroke="#5b6a7b" stroke-width="2" rx="8"/>
  <text x="450" y="305" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    X = NUMBER OF TRIALS TO GET r SUCCESSES
  </text>
  
  <!-- Arrow to distribution -->
  <line x1="450" y1="325" x2="450" y2="355" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,355 445,345 455,345" fill="#34495e"/>
  
  <!-- Distribution title -->
  <text x="450" y="380" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY DISTRIBUTION: P(X = k)
  </text>
  
  <!-- Distribution bars - right-skewed -->
  <!-- X=3 (minimum: r successes, no failures) -->
  <rect x="80" y="460" width="70" height="100" fill="#3d7a54"/>
  <text x="115" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">3</text>
  
  <!-- X=4 -->
  <rect x="165" y="480" width="70" height="80" fill="#4b7a6b"/>
  <text x="200" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">4</text>
  
  <!-- X=5 -->
  <rect x="250" y="500" width="70" height="60" fill="#6b8b7b"/>
  <text x="285" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">5</text>
  
  <!-- X=6 -->
  <rect x="335" y="515" width="70" height="45" fill="#8b9b7b"/>
  <text x="370" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">6</text>
  
  <!-- X=7 -->
  <rect x="420" y="530" width="70" height="30" fill="#a8b89b"/>
  <text x="455" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">7</text>
  
  <!-- X=8 -->
  <rect x="505" y="540" width="70" height="20" fill="#c0c8bb"/>
  <text x="540" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">8</text>
  
  <!-- X=9 -->
  <rect x="590" y="548" width="70" height="12" fill="#d0d8cb"/>
  <text x="625" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">9</text>
  
  <!-- ... continuation -->
  <text x="690" y="570" font-family="Arial, sans-serif" font-size="16" fill="#7a8a9b" text-anchor="middle">
    ...
  </text>
  
  <!-- Axes -->
  <line x1="70" y1="560" x2="710" y2="560" stroke="#2c3e50" stroke-width="2"/>
  <line x1="70" y1="450" x2="70" y2="560" stroke="#2c3e50" stroke-width="2"/>
  
  <!-- Axis labels -->
  <text x="390" y="610" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Number of Trials to Get r Successes (k)
  </text>
  <text x="30" y="505" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle" transform="rotate(-90, 30, 505)">
    Probability
  </text>
  
  <!-- Note box -->
  <rect x="680" y="320" width="210" height="280" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="8"/>
  <text x="785" y="355" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#6d4c41" text-anchor="middle">
    Key Properties:
  </text>
  <text x="785" y="390" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Repeat until r successes
  </text>
  <text x="785" y="425" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Each trial independent
  </text>
  <text x="785" y="460" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Same probability p
  </text>
  <text x="785" y="495" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • X = # trials for r successes
  </text>
  <text x="785" y="530" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • X can be r, r+1, r+2, ...
  </text>
  <text x="785" y="565" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • E(X) = r/p
  </text>
  <text x="785" y="590" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Var(X) = r(1-p)/p²
  </text>
  
  <!-- Formula -->
  <text x="450" y="655" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle">
    X ~ NegativeBinomial(r, p)
  </text>
  
  <!-- Example note -->
  <text x="450" y="680" font-family="Arial, sans-serif" font-size="11" font-style="italic" fill="#5a5a5a" text-anchor="middle">
    Example shown: r=3, right-skewed distribution
  </text>
  
  <!-- Formula box - BIG CARD -->
  <rect x="100" y="700" width="700" height="90" fill="#ffffff" stroke="#5b7a9b" stroke-width="4" rx="10"/>
  <text x="450" y="730" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY FORMULA:
  </text>
  <text x="450" y="762" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    P(X = k) = C(k-1, r-1) × p<tspan baseline-shift="super" font-size="16">r</tspan> × (1-p)<tspan baseline-shift="super" font-size="16">(k-r)</tspan>
  </text>
  <text x="450" y="782" font-family="Arial, sans-serif" font-size="14" fill="#4a5a6a" text-anchor="middle">
    where k ≥ r (need at least r trials to get r successes)
  </text>
</svg>
        `,
        explanation:`## Negative Binomial Distribution
⋅ Sequence of independent [Bernoulli](!/probability/distributions/discrete#bernoulli) trials.  
⋅ Each trial has two outcomes: success or failure.  
⋅ Success probability is constant: $p$.  
⋅ Failure probability: $q = 1 - p$.  
<p style="background-color: yellow;width: 85%; font-weight: bold;margin:0px;">⋅ Random variable X counts the number of trials needed to get r successes.</p>⋅ Trials are independent and identically distributed.  
⋅ Support: $\\{r, r+1, r+2, \\ldots\\}$.  
⋅ Probability function: $P(X = k) = \\binom{k - 1}{r - 1} p^r q^{k - r}$.  
⋅ Parameters: $r \\in \\mathbb{N},\\ 0 < p < 1$.  
⋅ Notation: $X \\sim \\text{NegBin}(r, p)$.
`,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "discrete uniform distribution":{
        svg:`
        <svg viewBox="0 0 1100 900"  xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="700" fill="#f5f5f5"/>
  
  <!-- Title -->
  <text x="450" y="35" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Discrete Uniform Distribution
  </text>
  
  <!-- Parameters box -->
  <rect x="275" y="50" width="350" height="60" fill="#5b7a9b" stroke="#4a6178" stroke-width="2" rx="8"/>
  <text x="450" y="78" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    All discrete values equally likely
  </text>
  <text x="450" y="98" font-family="Arial, sans-serif" font-size="13" fill="white" text-anchor="middle">
    X can take values a, a+1, a+2, ..., b
  </text>
  
  <!-- Concept illustration -->
  <text x="450" y="145" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    EQUAL PROBABILITY FOR EACH VALUE
  </text>
  
  <!-- Example: Die roll illustration -->
  <text x="450" y="180" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle">
    Example: Rolling a fair die (a=1, b=6)
  </text>
  
  <!-- Arrow down -->
  <line x1="450" y1="195" x2="450" y2="225" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,225 445,215 455,215" fill="#34495e"/>
  
  <!-- Probability Distribution -->
  <text x="450" y="255" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY DISTRIBUTION: P(X = k)
  </text>
  
  <!-- Distribution bars - all equal height -->
  <!-- X=1 -->
  <rect x="100" y="350" width="80" height="120" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="140" y="490" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50" text-anchor="middle">1</text>
  
  <!-- X=2 -->
  <rect x="195" y="350" width="80" height="120" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="235" y="490" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50" text-anchor="middle">2</text>
  
  <!-- X=3 -->
  <rect x="290" y="350" width="80" height="120" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="330" y="490" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50" text-anchor="middle">3</text>
  
  <!-- X=4 -->
  <rect x="385" y="350" width="80" height="120" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="425" y="490" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50" text-anchor="middle">4</text>
  
  <!-- X=5 -->
  <rect x="480" y="350" width="80" height="120" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="520" y="490" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50" text-anchor="middle">5</text>
  
  <!-- X=6 -->
  <rect x="575" y="350" width="80" height="120" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="615" y="490" font-family="Arial, sans-serif" font-size="16" fill="#2c3e50" text-anchor="middle">6</text>
  
  <!-- Axes -->
  <line x1="90" y1="470" x2="665" y2="470" stroke="#2c3e50" stroke-width="2"/>
  <line x1="90" y1="340" x2="90" y2="470" stroke="#2c3e50" stroke-width="2"/>
  
  <!-- Height annotation -->
  <line x1="90" y1="350" x2="85" y2="350" stroke="#2c3e50" stroke-width="2"/>
  <text x="60" y="355" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle">
    1/n
  </text>
  
  <!-- Equal probability labels -->
  <text x="140" y="330" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#3d7a54" text-anchor="middle">
    1/6
  </text>
  <text x="235" y="330" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#3d7a54" text-anchor="middle">
    1/6
  </text>
  <text x="330" y="330" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#3d7a54" text-anchor="middle">
    1/6
  </text>
  <text x="425" y="330" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#3d7a54" text-anchor="middle">
    1/6
  </text>
  <text x="520" y="330" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#3d7a54" text-anchor="middle">
    1/6
  </text>
  <text x="615" y="330" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#3d7a54" text-anchor="middle">
    1/6
  </text>
  
  <!-- Axis labels -->
  <text x="377" y="520" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Value (k)
  </text>
  <text x="30" y="405" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle" transform="rotate(-90, 30, 405)">
    Probability
  </text>
  
  <!-- Note box -->
  <rect x="680" y="250" width="210" height="280" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="8"/>
  <text x="785" y="285" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#6d4c41" text-anchor="middle">
    Key Properties:
  </text>
  <text x="785" y="320" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Discrete distribution
  </text>
  <text x="785" y="355" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • n = b - a + 1 values
  </text>
  <text x="785" y="390" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Each value: prob = 1/n
  </text>
  <text x="785" y="425" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • All probabilities equal
  </text>
  <text x="785" y="460" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • E(X) = (a+b)/2
  </text>
  <text x="785" y="495" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Var(X) = (n²-1)/12
  </text>
  
  <!-- Formula -->
  <text x="450" y="560" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle">
    X ~ DiscreteUniform(a, b)
  </text>
  
  <!-- Example note -->
  <text x="450" y="585" font-family="Arial, sans-serif" font-size="11" font-style="italic" fill="#5a5a5a" text-anchor="middle">
    Example shown: fair die with n=6 equally likely outcomes
  </text>
  
  <!-- Formula box - BIG CARD -->
  <rect x="100" y="600" width="700" height="90" fill="#ffffff" stroke="#5b7a9b" stroke-width="4" rx="10"/>
  <text x="450" y="630" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY FUNCTION:
  </text>
  <text x="450" y="662" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    P(X = k) = 1/n  for k = a, a+1, a+2, ..., b
  </text>
  <text x="450" y="682" font-family="Arial, sans-serif" font-size="14" fill="#4a5a6a" text-anchor="middle">
    where n = b - a + 1 is the number of possible values
  </text>
</svg>
        `,
        explanation:`## Discrete Uniform Distribution
⋅ Finite set of $n$ equally likely outcomes.  
⋅ Each outcome has the same probability.  
<p style="background-color: yellow;width: 90%; font-weight: bold;margin:0px;">⋅ Random variable X takes values uniformly from the set of integers {a, a+1, ..., b}.</p>⋅ All values between $a$ and $b$ are integers.  
⋅ Support: $\\{a, a+1, \\ldots, b\\}$ where $b \\geq a$.  
⋅ Probability function: $P(X = k) = \\dfrac{1}{b - a + 1}$.  
⋅ Parameters: $a, b \\in \\mathbb{Z},\\ a \\leq b$.  
⋅ Notation: $X \\sim \\text{Unif}(a, b)$.

        `,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "poisson distribution":{
        svg:`
        <svg viewBox="0 0 900 700"  xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="800" fill="#f5f5f5"/>
  
  <!-- Title -->
  <text x="450" y="35" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Poisson Distribution
  </text>
  
  <!-- Parameters box -->
  <rect x="250" y="50" width="400" height="60" fill="#5b7a9b" stroke="#4a6178" stroke-width="2" rx="8"/>
  <text x="450" y="78" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    Count events in fixed interval (λ = 3)
  </text>
  <text x="450" y="98" font-family="Arial, sans-serif" font-size="13" fill="white" text-anchor="middle">
    (λ = average rate of events per interval)
  </text>
  
  <!-- Concept illustration -->
  <text x="450" y="145" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    RANDOM EVENTS OCCURRING IN TIME/SPACE
  </text>
  
  <!-- Time interval -->
  <rect x="100" y="170" width="600" height="60" fill="#e8f4f8" stroke="#4a90a4" stroke-width="2" rx="5"/>
  <text x="400" y="195" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle">
    Fixed Interval (time or space)
  </text>
  
  <!-- Random events marked on interval -->
  <circle cx="150" cy="210" r="8" fill="#e74c3c"/>
  <circle cx="250" cy="210" r="8" fill="#e74c3c"/>
  <circle cx="320" cy="210" r="8" fill="#e74c3c"/>
  <circle cx="420" cy="210" r="8" fill="#e74c3c"/>
  <circle cx="530" cy="210" r="8" fill="#e74c3c"/>
  <circle cx="610" cy="210" r="8" fill="#e74c3c"/>
  <circle cx="660" cy="210" r="8" fill="#e74c3c"/>
  
  <text x="400" y="225" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c" text-anchor="middle">
    ● ● ● ● ● ● ● random events
  </text>
  
  <!-- Examples box -->
  <rect x="100" y="250" width="600" height="70" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="5"/>
  <text x="400" y="272" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#6d4c41" text-anchor="middle">
    Examples:
  </text>
  <text x="400" y="292" font-family="Arial, sans-serif" font-size="12" fill="#6d4c41" text-anchor="middle">
    • # of customers arriving per hour  • # of emails received per day
  </text>
  <text x="400" y="310" font-family="Arial, sans-serif" font-size="12" fill="#6d4c41" text-anchor="middle">
    • # of mutations in DNA sequence  • # of typos per page
  </text>
  
  <!-- Arrow down -->
  <line x1="450" y1="330" x2="450" y2="360" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,360 445,350 455,350" fill="#34495e"/>
  
  <!-- Distribution title -->
  <text x="450" y="390" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY DISTRIBUTION: P(X = k)
  </text>
  
  <!-- Distribution bars - calculated for λ=3 -->
  <!-- X=0 -->
  <rect x="80" y="538" width="60" height="22" fill="#b84a4a"/>
  <text x="110" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">0</text>
  
  <!-- X=1 -->
  <rect x="155" y="494" width="60" height="66" fill="#c86b5b"/>
  <text x="185" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">1</text>
  
  <!-- X=2 -->
  <rect x="230" y="460" width="60" height="100" fill="#d88b6b"/>
  <text x="260" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">2</text>
  
  <!-- X=3 -->
  <rect x="305" y="460" width="60" height="100" fill="#8b9b7b"/>
  <text x="335" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">3</text>
  
  <!-- X=4 -->
  <rect x="380" y="485" width="60" height="75" fill="#6b8b7b"/>
  <text x="410" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">4</text>
  
  <!-- X=5 -->
  <rect x="455" y="515" width="60" height="45" fill="#4b7a6b"/>
  <text x="485" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">5</text>
  
  <!-- X=6 -->
  <rect x="530" y="538" width="60" height="22" fill="#3d7a54"/>
  <text x="560" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">6</text>
  
  <!-- X=7 -->
  <rect x="605" y="550" width="60" height="10" fill="#4a7a5a"/>
  <text x="635" y="580" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">7</text>
  
  <!-- ... continuation -->
  <text x="690" y="555" font-family="Arial, sans-serif" font-size="16" fill="#7a8a9b" text-anchor="middle">
    ...
  </text>
  
  <!-- Axes -->
  <line x1="70" y1="560" x2="710" y2="560" stroke="#2c3e50" stroke-width="2"/>
  <line x1="70" y1="430" x2="70" y2="560" stroke="#2c3e50" stroke-width="2"/>
  
  <!-- Axis labels -->
  <text x="390" y="610" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Number of Events (k)
  </text>
  <text x="30" y="495" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle" transform="rotate(-90, 30, 495)">
    Probability
  </text>
  
  <!-- Note box -->
  <rect x="680" y="320" width="210" height="280" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="8"/>
  <text x="785" y="355" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#6d4c41" text-anchor="middle">
    Key Properties:
  </text>
  <text x="785" y="390" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Discrete distribution
  </text>
  <text x="785" y="425" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Models rare events
  </text>
  <text x="785" y="460" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Events independent
  </text>
  <text x="785" y="495" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • X can be 0, 1, 2, ...
  </text>
  <text x="785" y="530" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • E(X) = λ
  </text>
  <text x="785" y="565" font-family="Arial, sans-serif" font-size="15" fill="#6d4c41" text-anchor="middle">
    • Var(X) = λ
  </text>
  
  <!-- Formula -->
  <text x="450" y="655" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" text-anchor="middle">
    X ~ Poisson(λ)
  </text>
  
  <!-- Example note -->
  <text x="450" y="680" font-family="Arial, sans-serif" font-size="11" font-style="italic" fill="#5a5a5a" text-anchor="middle">
    Example shown: λ=3, right-skewed distribution
  </text>
  
  <!-- Formula box - BIG CARD -->
  <rect x="100" y="700" width="700" height="90" fill="#ffffff" stroke="#5b7a9b" stroke-width="4" rx="10"/>
  <text x="450" y="730" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY FORMULA:
  </text>
  <text x="450" y="762" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    P(X = k) = (λ<tspan baseline-shift="super" font-size="16">k</tspan> × e<tspan baseline-shift="super" font-size="16">-λ</tspan>) / k!
  </text>
  <text x="450" y="782" font-family="Arial, sans-serif" font-size="14" fill="#4a5a6a" text-anchor="middle">
    where λ is the average rate of events per interval
  </text>
</svg>
        `,
        explanation:`## Poisson Distribution
⋅ Models the number of events occurring in a fixed interval of time or space.  
⋅ Events occur independently.  
⋅ Events occur at a constant average rate $\lambda$.  
<p style="background-color: yellow;width: 80%; font-weight: bold;margin:0px;">⋅ Random variable X counts the number of events in the interval.</p>⋅ Events cannot occur simultaneously (no clustering).  
⋅ Support: $\\{0, 1, 2, \\ldots\\}$.  
⋅ Probability function: $P(X = k) = \\dfrac{\\lambda^k e^{-\\lambda}}{k!}$.  
⋅ Parameter: $\\lambda > 0$.  
⋅ Notation: $X \\sim \\text{Poisson}(\\lambda)$.

        `,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "hypergeometric distribution":{
        svg:`
        <svg viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="900" height="900" fill="#f5f5f5"/>
  
  <!-- Title -->
  <text x="450" y="35" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Hypergeometric Distribution
  </text>
  
  <!-- Parameters box -->
  <rect x="200" y="50" width="500" height="80" fill="#5b7a9b" stroke="#4a6178" stroke-width="2" rx="8"/>
  <text x="450" y="78" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">
    Sampling WITHOUT replacement from finite population
  </text>
  <text x="450" y="100" font-family="Arial, sans-serif" font-size="13" fill="white" text-anchor="middle">
    N = 20 total items, K = 8 successes, n = 5 drawn
  </text>
  <text x="450" y="118" font-family="Arial, sans-serif" font-size="13" fill="white" text-anchor="middle">
    X = number of successes in sample
  </text>
  
  <!-- Population -->
  <text x="450" y="165" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    POPULATION (N = 20)
  </text>
  
  <rect x="100" y="180" width="700" height="130" fill="#e8f4f8" stroke="#4a90a4" stroke-width="2" rx="8"/>
  
  <text x="120" y="203" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#3d7a54">K = 8 successes:</text>
  
  <!-- Success items - First row -->
  <circle cx="140" cy="235" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="140" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="190" cy="235" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="190" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="240" cy="235" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="240" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="290" cy="235" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="290" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="340" cy="235" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="340" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="390" cy="235" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="390" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="440" cy="235" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="440" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="490" cy="235" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="490" y="242" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <text x="550" y="203" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#b84a4a">N - K = 12 failures:</text>
  
  <!-- Failure items - Second row -->
  <circle cx="140" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="140" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="190" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="190" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="240" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="240" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="290" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="290" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="340" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="340" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="390" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="390" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="440" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="440" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="490" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="490" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="540" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="540" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="590" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="590" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="640" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="640" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="690" cy="275" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="690" y="282" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <!-- Arrow down -->
  <line x1="450" y1="320" x2="450" y2="350" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,350 445,340 455,340" fill="#34495e"/>
  <text x="580" y="340" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#34495e">
    Draw n = 5 WITHOUT replacement
  </text>
  
  <!-- Sample -->
  <text x="450" y="380" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    SAMPLE (n = 5)
  </text>
  
  <rect x="250" y="395" width="400" height="90" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="8"/>
  
  <circle cx="300" cy="430" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="300" y="437" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="370" cy="430" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="370" y="437" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <circle cx="440" cy="430" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="440" y="437" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="510" cy="430" r="18" fill="#3d7a54" stroke="#2d5a3d" stroke-width="2"/>
  <text x="510" y="437" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">S</text>
  
  <circle cx="580" cy="430" r="18" fill="#b84a4a" stroke="#983838" stroke-width="2"/>
  <text x="580" y="437" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">F</text>
  
  <text x="450" y="470" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50" text-anchor="middle">
    Example: X = 3 successes in sample
  </text>
  
  <!-- Arrow to distribution -->
  <line x1="450" y1="495" x2="450" y2="525" stroke="#34495e" stroke-width="3"/>
  <polygon points="450,525 445,515 455,515" fill="#34495e"/>
  
  <!-- Distribution title -->
  <text x="350" y="555" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY DISTRIBUTION: P(X = k)
  </text>
  
  <!-- Distribution bars -->
  <!-- X=0 -->
  <rect x="80" y="685" width="60" height="20" fill="#b84a4a"/>
  <text x="110" y="725" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">0</text>
  
  <!-- X=1 -->
  <rect x="155" y="640" width="60" height="65" fill="#c86b5b"/>
  <text x="185" y="725" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">1</text>
  
  <!-- X=2 -->
  <rect x="230" y="590" width="60" height="115" fill="#d88b6b"/>
  <text x="260" y="725" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">2</text>
  
  <!-- X=3 -->
  <rect x="305" y="575" width="60" height="130" fill="#8b9b7b"/>
  <text x="335" y="725" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">3</text>
  
  <!-- X=4 -->
  <rect x="380" y="620" width="60" height="85" fill="#6b8b7b"/>
  <text x="410" y="725" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">4</text>
  
  <!-- X=5 -->
  <rect x="455" y="675" width="60" height="30" fill="#3d7a54"/>
  <text x="485" y="725" font-family="Arial, sans-serif" font-size="13" fill="#2c3e50" text-anchor="middle">5</text>
  
  <!-- Axes -->
  <line x1="70" y1="705" x2="525" y2="705" stroke="#2c3e50" stroke-width="2"/>
  <line x1="70" y1="565" x2="70" y2="705" stroke="#2c3e50" stroke-width="2"/>
  
  <!-- Axis labels -->
  <text x="297" y="755" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    Number of Successes in Sample (k)
  </text>
  <text x="30" y="635" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle" transform="rotate(-90, 30, 635)">
    Probability
  </text>
  
  <!-- Note box -->
  <rect x="570" y="555" width="310" height="190" fill="#fff8e1" stroke="#ffb74d" stroke-width="2" rx="8"/>
  <text x="725" y="585" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#6d4c41" text-anchor="middle">
    Key Properties:
  </text>
  <text x="725" y="615" font-family="Arial, sans-serif" font-size="14" fill="#6d4c41" text-anchor="middle">
    • Sampling WITHOUT replacement
  </text>
  <text x="725" y="643" font-family="Arial, sans-serif" font-size="14" fill="#6d4c41" text-anchor="middle">
    • Finite population (N items)
  </text>
  <text x="725" y="671" font-family="Arial, sans-serif" font-size="14" fill="#6d4c41" text-anchor="middle">
    • K successes, N-K failures
  </text>
  <text x="725" y="699" font-family="Arial, sans-serif" font-size="14" fill="#6d4c41" text-anchor="middle">
    • Draw n items
  </text>
  <text x="725" y="727" font-family="Arial, sans-serif" font-size="14" fill="#6d4c41" text-anchor="middle">
    • E(X) = n(K/N)
  </text>
  
  <!-- Formula box -->
  <rect x="100" y="780" width="700" height="110" fill="#ffffff" stroke="#5b7a9b" stroke-width="4" rx="10"/>
  <text x="450" y="810" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    PROBABILITY FORMULA:
  </text>
  <text x="450" y="842" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50" text-anchor="middle">
    P(X = k) = [C(K, k) × C(N-K, n-k)] / C(N, n)
  </text>
  <text x="450" y="870" font-family="Arial, sans-serif" font-size="14" fill="#4a5a6a" text-anchor="middle">
    Choose k from K successes and (n-k) from (N-K) failures, divided by all ways to choose n from N
  </text>
</svg>
        `,
        explanation:`## Hypergeometric Distribution
⋅ Population of size $N$ contains two types: successes and failures.  
⋅ Number of successes in the population: $K$.  
⋅ Number of draws (without replacement): $n$.  
<p style="background-color: yellow;width: 80%; font-weight: bold;margin:0px;">⋅ Random variable X counts the number of successes in the sample.</p>⋅ Trials are not independent (sampling without replacement).  
⋅ Support: $\\{\\max(0, n - (N - K)), \\ldots, \\min(n, K)\\}$.  
⋅ Probability function: $P(X = k) = \\dfrac{\\binom{K}{k} \\binom{N - K}{n - k}}{\\binom{N}{n}}$.  
⋅ Parameters: $N, K, n \\in \\mathbb{N}$ with $0 \\leq K \\leq N$, $0 \\leq n \\leq N$.  
⋅ Notation: $X \\sim \\text{Hypergeometric}(N, K, n)$.
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
}