


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
    "axioms":{
        svg:`        
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg style="fill:none;stroke:none;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="735" height="582" viewBox="0 0 735 582"><style class="text-font-style fontImports" data-font-family="Roboto">@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;amp;display=block);</style><g id="items" style="isolation: isolate"><g id="blend" style="mix-blend-mode: normal"><g id="g-root-sy_4_cu_vector_4masz21b94jyj-fill" data-item-order="-164978" transform="translate(263.788818359375, 440)"><g id="sy_4_cu_vector_4masz21b94jyj-fill-merged" stroke="none" fill="url(#gradient-76aaff-163240667)" fill-opacity="1"><g><path d="M58.497 10L10 94 H446.477L397.979 10 H58.497"></path></g></g></g><g id="g-root-sy_3_cu_vector_4masz21b94jyk-fill" data-item-order="-164974" transform="translate(312.2835388183594, 356)"><g id="sy_3_cu_vector_4masz21b94jyk-fill-merged" stroke="none" fill="url(#gradient-64edab-240055791)" fill-opacity="1"><g><path d="M58.497 10L10 94 H349.482L300.985 10 H58.497"></path></g></g></g><g id="g-root-sy_2_cu_vector_6haum1b94kqt-fill" data-item-order="-164970" transform="translate(360.786376953125, 272)"><g id="sy_2_cu_vector_6haum1b94kqt-fill-merged" stroke="none" fill="url(#gradient-bceb57-497517668)" fill-opacity="1"><g><path d="M58.497 10L10 94 H252.487L203.99 10 H58.497"></path></g></g></g><g id="g-root-sy_1_cu_vector_6haum1b94kqu-fill" data-item-order="-164966" transform="translate(409.28118896484375, 146)"><defs><linearGradient id="gradient-76aaff-163240667" x2="0" y2="1"><stop offset="0" stop-color="#9cc2ff"></stop><stop offset="1" stop-color="#4f92ff"></stop></linearGradient><linearGradient id="gradient-64edab-240055791" x2="0" y2="1"><stop offset="0" stop-color="#83fac1"></stop><stop offset="1" stop-color="#44e095"></stop></linearGradient><linearGradient id="gradient-bceb57-497517668" x2="0" y2="1"><stop offset="0" stop-color="#cff976"></stop><stop offset="1" stop-color="#a8dd38"></stop></linearGradient><linearGradient id="gradient-ffeb37-386795387" x2="0" y2="1"><stop offset="0" stop-color="#ffef63"></stop><stop offset="1" stop-color="#ffe60a"></stop></linearGradient></defs><g id="sy_1_cu_vector_6haum1b94kqu-fill-merged" stroke="none" fill="url(#gradient-ffeb37-386795387)" fill-opacity="1"><g><path d="M82.746 10L10 136 H155.492L82.746 10"></path></g></g></g><g id="g-root-tx_mathemat_1urrupa1b94lc3-fill" data-item-order="0" transform="translate(176, 38)"><g id="tx_mathemat_1urrupa1b94lc3-fill-merged" stroke="none" fill="#484848" fill-opacity="1"><g><text style="font: bold 25px Roboto, sans-serif; white-space: pre;" transform="translate(202, 28)" font-weight="bold" font-size="25px" font-family="Roboto, sans-serif"><tspan x="-185.72" y="15" dominant-baseline="ideographic">Mathematical Theory Foundation</tspan></text></g></g></g><g id="g-root-ic_circ_1463vam1b8nr4c-fill" data-item-order="0" transform="translate(458, 206)"></g><g id="g-root-tx_mathemat_145hb1q1b94lc7-fill" data-item-order="0" transform="translate(194, 218)"><g id="tx_mathemat_145hb1q1b94lc7-fill-merged" stroke="none" fill="#484848" fill-opacity="1"><g><text style="font: 20px Roboto, sans-serif; white-space: pre;" transform="translate(214, 22)" font-size="20px" font-family="Roboto, sans-serif"><tspan x="-190.49" y="12" dominant-baseline="ideographic">Mathematical Theory</tspan></text></g></g></g><g id="g-root-ic_math_18efodq1b8m9zc-fill" data-item-order="0" transform="translate(458, 290)"></g><g id="g-root-tx_theorems_18lat661b94kjy-fill" data-item-order="0" transform="translate(254, 302)"><g id="tx_theorems_18lat661b94kjy-fill-merged" stroke="none" fill="#484848" fill-opacity="1"><g><text style="font: 20px Roboto, sans-serif; white-space: pre;" transform="translate(106, 22)" font-size="20px" font-family="Roboto, sans-serif"><tspan x="-92.02" y="12" dominant-baseline="ideographic">Theorems</tspan></text></g></g></g><g id="g-root-ic_brai_1hi6rla1b94lxg-fill" data-item-order="0" transform="translate(458, 374)"></g><g id="g-root-tx_logicalr_1hgxtf21b94jr9-fill" data-item-order="0" transform="translate(134, 386)"><g id="tx_logicalr_1hgxtf21b94jr9-fill-merged" stroke="none" fill="#484848" fill-opacity="1"><g><text style="font: 20px Roboto, sans-serif; white-space: pre;" transform="translate(178, 22)" font-size="20px" font-family="Roboto, sans-serif"><tspan x="-165.17" y="12" dominant-baseline="ideographic">Logical Reasoning</tspan></text></g></g></g><g id="g-root-ic_acad_zpnsxa1b94m4g-fill" data-item-order="0" transform="translate(458, 458)"></g><g id="g-root-tx_axioms_1lw4uge1b94m4s-fill" data-item-order="0" transform="translate(182, 470)"><g id="tx_axioms_1lw4uge1b94m4s-fill-merged" stroke="none" fill="#484848" fill-opacity="1"><g><text style="font: 20px Roboto, sans-serif; white-space: pre;" transform="translate(82, 22)" font-size="20px" font-family="Roboto, sans-serif"><tspan x="-69.1" y="12" dominant-baseline="ideographic">Axioms</tspan></text></g></g></g><g id="g-root-sy_4_cu_vector_4masz21b94jyj-stroke" data-item-order="-164978" transform="translate(263.788818359375, 440)"><g id="sy_4_cu_vector_4masz21b94jyj-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2" stroke-opacity="1"><g><path d="M 58.4974 10L 10 94L 446.4768 94L 397.9794 10L 58.4974 10Z"></path></g></g></g><g id="g-root-sy_3_cu_vector_4masz21b94jyk-stroke" data-item-order="-164974" transform="translate(312.2835388183594, 356)"><g id="sy_3_cu_vector_4masz21b94jyk-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2" stroke-opacity="1"><g><path d="M 58.49743 10L 10.00003 94L 349.48203 94L 300.98463 10L 58.49743 10Z"></path></g></g></g><g id="g-root-sy_2_cu_vector_6haum1b94kqt-stroke" data-item-order="-164970" transform="translate(360.786376953125, 272)"><g id="sy_2_cu_vector_6haum1b94kqt-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2" stroke-opacity="1"><g><path d="M 58.497339 10L 9.999939 94L 252.487039 94L 203.989639 10L 58.497339 10Z"></path></g></g></g><g id="g-root-sy_1_cu_vector_6haum1b94kqu-stroke" data-item-order="-164966" transform="translate(409.28118896484375, 146)"><g id="sy_1_cu_vector_6haum1b94kqu-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2" stroke-opacity="1"><g><path d="M 82.7461 10L 10 136L 155.4923 136L 82.7461 10Z"></path></g></g></g><g id="g-root-tx_mathemat_1urrupa1b94lc3-stroke" data-item-order="0" transform="translate(176, 38)"></g><g id="g-root-ic_circ_1463vam1b8nr4c-stroke" data-item-order="0" transform="translate(458, 206)"><g id="ic_circ_1463vam1b8nr4c-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2" stroke-opacity="1"><g><path d="M 34.099998 56.599602C 46.526402 56.599602 56.599998 46.526001 56.599998 34.099602C 56.599998 21.6731 46.526402 11.59961 34.099998 11.59961C 21.673561 11.59961 11.600006 21.6731 11.600006 34.099602C 11.600006 46.526001 21.673561 56.599602 34.099998 56.599602ZM 24.00016 25.5996L 43.800201 25.5996M 10 10M 29.80014 25.5996L 29.00016 43.999599M 36.599998 25.5996L 36.599998 41.599602C 36.599998 42.799599 37.599998 43.799599 38.799999 43.799599C 40 43.799599 41 42.799599 41 41.599602L 41 41.199799"></path></g></g></g><g id="g-root-tx_mathemat_145hb1q1b94lc7-stroke" data-item-order="0" transform="translate(194, 218)"></g><g id="g-root-ic_math_18efodq1b8m9zc-stroke" data-item-order="0" transform="translate(458, 290)"><g id="ic_math_18efodq1b8m9zc-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2" stroke-opacity="1"><g><path d="M 19 25.445999C 17.020252 25.184191 15.026797 25.039272 13.03 25.012001C 12.470404 25.005322 12.010774 25.452433 12.002 26.012001L 12.002 49.012001C 12.002 49.564285 12.449715 50.012001 13.002 50.012001C 29.202 50.278 34.001999 57.012001 34.001999 57.012001M 53 25.077999C 53.639999 25.046 54.299999 25.021999 54.98 25.012001C 55.248665 25.006626 55.508186 25.109604 55.700073 25.297728C 55.891956 25.485849 56.000053 25.743282 56 26.011999L 56 49.012001C 56 49.564285 55.552284 50.012001 55 50.012001C 38.799999 50.278 34 57.012001 34 57.012001L 34 35.012001M 47 11.002L 47 19.001999M 51 15.002L 43 15.002M 25.344 21.346001L 31 27.002001M 31 21.346001L 25.344 27.002001M 46 27.002001L 38 27.002001M 42 22.501999C 41.723858 22.501999 41.5 22.725857 41.5 23.001999M 42.5 23C 42.5 22.723858 42.276142 22.5 42 22.5M 42 23.501999C 42.276142 23.501999 42.5 23.278141 42.5 23.001999M 41.5 23C 41.5 23.276142 41.723858 23.5 42 23.5M 42 30.502001C 41.723858 30.502001 41.5 30.725857 41.5 31.002001M 42.5 31C 42.5 30.723858 42.276142 30.5 42 30.5M 42 31.502001C 42.276142 31.502001 42.5 31.278143 42.5 31.002001M 41.5 31C 41.5 31.276142 41.723858 31.5 42 31.5M 19 14.002L 21 17.001999L 23 11.002L 30 11.002"></path></g></g></g><g id="g-root-tx_theorems_18lat661b94kjy-stroke" data-item-order="0" transform="translate(254, 302)"></g><g id="g-root-ic_brai_1hi6rla1b94lxg-stroke" data-item-order="0" transform="translate(458, 374)"><g id="ic_brai_1hi6rla1b94lxg-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2" stroke-opacity="1"><g><path d="M 45.312 11.002L 45.312 19.001999M 49.312 15.002L 41.312 15.002M 50.653999 22.001999L 56.312 27.66M 56.312 22.001999L 50.653999 27.66M 40.312 26.993999L 32.312 26.993999M 36.312 22.493999C 36.035858 22.493999 35.812 22.717857 35.812 22.993999M 36.812 23C 36.812 22.723858 36.588142 22.5 36.312 22.5M 36.312 23.493999C 36.588142 23.493999 36.812 23.270142 36.812 22.993999M 35.812 23C 35.812 23.276142 36.035858 23.5 36.312 23.5M 36.312 30.493999C 36.035858 30.493999 35.812 30.717857 35.812 30.993999M 36.812 31C 36.812 30.723858 36.588142 30.5 36.312 30.5M 36.312 31.493999C 36.588142 31.493999 36.812 31.270142 36.812 30.993999M 35.812 31C 35.812 31.276142 36.035858 31.5 36.312 31.5M 25.312 14.002L 27.312 17.001999L 29.312 11.002L 36.312 11.002M 23.702 57L 23.702 52.046001L 21.864 52.046001C 19.126419 52.047108 16.906895 49.827583 16.908001 47.09L 16.908001 42.133999L 12.686 42.133999C 12.367165 42.132717 12.068053 41.979469 11.880757 41.721443C 11.69346 41.463417 11.640433 41.131542 11.738 40.827999C 13.938 34 15.738 26.85 20.310001 22.666M 46.832001 35.112C 46.833202 40.247105 44.380547 45.073639 40.232002 48.100002L 40.232002 57"></path></g></g></g><g id="g-root-tx_logicalr_1hgxtf21b94jr9-stroke" data-item-order="0" transform="translate(134, 386)"></g><g id="g-root-ic_acad_zpnsxa1b94m4g-stroke" data-item-order="0" transform="translate(458, 458)"><g id="ic_acad_zpnsxa1b94m4g-stroke" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke="#484848" stroke-width="2" stroke-opacity="1"><g><path d="M 19.48 40L 12 46C 28 45 43 54 47 57M 47 57C 40 49 26 39 11 39L 20.540001 31M 47 57C 44.099998 45.5 28 31 16 30L 34 15C 36.036751 15.458306 37.931305 16.405582 39.519997 17.76M 47 57C 47 57 53 40 32 27L 45 11C 57 16 57 33 57 33Z"></path></g></g></g><g id="g-root-tx_axioms_1lw4uge1b94m4s-stroke" data-item-order="0" transform="translate(182, 470)"></g></g></g></svg>
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