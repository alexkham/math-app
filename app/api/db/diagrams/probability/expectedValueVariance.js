
export const identitiesData={
    "Simple Mean vs Expected Value":{
        svg:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1050">
  <defs>
    <style>
      .title { font-family: Arial, sans-serif; font-size: 38px; font-weight: bold; fill: #2c3e50; }
      .section-title { font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; }
      .label { font-family: Arial, sans-serif; font-size: 19px; fill: #333; }
      .value { font-family: Arial, sans-serif; font-size: 26px; fill: white; font-weight: bold; }
      .calc { font-family: 'Courier New', monospace; font-size: 22px; fill: #2c3e50; font-weight: bold; }
    </style>
    
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#5dade2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2980b9;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#58d68d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#28b463;stop-opacity:1" />
    </linearGradient>
    
    <filter id="shadow">
      <feDropShadow dx="3" dy="3" stdDeviation="4" flood-opacity="0.4"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1400" height="1050" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="700" y="55" text-anchor="middle" class="title">Mean vs Expected Value</text>
  
  <!-- Divider -->
  <line x1="700" y1="90" x2="700" y2="1000" stroke="#dee2e6" stroke-width="4"/>
  
  <!-- LEFT SIDE: MEAN (AVERAGE) -->
  <g id="mean-side">
    <text x="350" y="130" text-anchor="middle" class="section-title" style="fill: #2980b9;">MEAN (Average)</text>
    
    <!-- Tag -->
    <rect x="180" y="150" width="340" height="50" rx="25" fill="#e3f2fd" stroke="#2980b9" stroke-width="2"/>
    <text x="350" y="182" text-anchor="middle" class="label" style="font-weight: bold; fill: #2980b9;">ACTUAL DATA (Already Happened)</text>
    
    <!-- Visual: Past events timeline -->
    <g transform="translate(100, 240)">
      <!-- Timeline -->
      <line x1="0" y1="100" x2="500" y2="100" stroke="#95a5a6" stroke-width="3"/>
      <polygon points="500,100 485,95 485,105" fill="#95a5a6"/>
      
      <!-- Clock icon showing PAST -->
      <circle cx="30" cy="50" r="25" fill="none" stroke="#7f8c8d" stroke-width="3"/>
      <line x1="30" y1="50" x2="30" y2="35" stroke="#7f8c8d" stroke-width="3"/>
      <line x1="30" y1="50" x2="40" y2="50" stroke="#7f8c8d" stroke-width="3"/>
      <text x="30" y="15" text-anchor="middle" class="label" style="fill: #7f8c8d; font-size: 16px;">PAST</text>
      
      <!-- Actual rolled dice -->
      <g transform="translate(90, 20)">
        <!-- Die showing 6 -->
        <rect x="0" y="0" width="60" height="60" rx="8" fill="url(#blueGrad)" stroke="#2980b9" stroke-width="3" filter="url(#shadow)"/>
        <circle cx="13" cy="17" r="5" fill="white"/>
        <circle cx="13" cy="30" r="5" fill="white"/>
        <circle cx="13" cy="43" r="5" fill="white"/>
        <circle cx="47" cy="17" r="5" fill="white"/>
        <circle cx="47" cy="30" r="5" fill="white"/>
        <circle cx="47" cy="43" r="5" fill="white"/>
        <text x="30" y="105" text-anchor="middle" class="label" style="font-size: 18px;">Roll 1: 6</text>
      </g>
      
      <g transform="translate(165, 20)">
        <!-- Die showing 6 -->
        <rect x="0" y="0" width="60" height="60" rx="8" fill="url(#blueGrad)" stroke="#2980b9" stroke-width="3" filter="url(#shadow)"/>
        <circle cx="13" cy="17" r="5" fill="white"/>
        <circle cx="13" cy="30" r="5" fill="white"/>
        <circle cx="13" cy="43" r="5" fill="white"/>
        <circle cx="47" cy="17" r="5" fill="white"/>
        <circle cx="47" cy="30" r="5" fill="white"/>
        <circle cx="47" cy="43" r="5" fill="white"/>
        <text x="30" y="105" text-anchor="middle" class="label" style="font-size: 18px;">Roll 2: 6</text>
      </g>
      
      <g transform="translate(240, 20)">
        <!-- Die showing 5 -->
        <rect x="0" y="0" width="60" height="60" rx="8" fill="url(#blueGrad)" stroke="#2980b9" stroke-width="3" filter="url(#shadow)"/>
        <circle cx="13" cy="13" r="5" fill="white"/>
        <circle cx="47" cy="13" r="5" fill="white"/>
        <circle cx="30" cy="30" r="5" fill="white"/>
        <circle cx="13" cy="47" r="5" fill="white"/>
        <circle cx="47" cy="47" r="5" fill="white"/>
        <text x="30" y="105" text-anchor="middle" class="label" style="font-size: 18px;">Roll 3: 5</text>
      </g>
      
      <g transform="translate(315, 20)">
        <!-- Die showing 3 -->
        <rect x="0" y="0" width="60" height="60" rx="8" fill="url(#blueGrad)" stroke="#2980b9" stroke-width="3" filter="url(#shadow)"/>
        <circle cx="17" cy="17" r="5" fill="white"/>
        <circle cx="30" cy="30" r="5" fill="white"/>
        <circle cx="43" cy="43" r="5" fill="white"/>
        <text x="30" y="105" text-anchor="middle" class="label" style="font-size: 18px;">Roll 4: 3</text>
      </g>
      
      <g transform="translate(390, 20)">
        <!-- Die showing 5 -->
        <rect x="0" y="0" width="60" height="60" rx="8" fill="url(#blueGrad)" stroke="#2980b9" stroke-width="3" filter="url(#shadow)"/>
        <circle cx="13" cy="13" r="5" fill="white"/>
        <circle cx="47" cy="13" r="5" fill="white"/>
        <circle cx="30" cy="30" r="5" fill="white"/>
        <circle cx="13" cy="47" r="5" fill="white"/>
        <circle cx="47" cy="47" r="5" fill="white"/>
        <text x="30" y="105" text-anchor="middle" class="label" style="font-size: 18px;">Roll 5: 5</text>
      </g>
      
      <g transform="translate(465, 20)">
        <!-- Die showing 4 -->
        <rect x="0" y="0" width="60" height="60" rx="8" fill="url(#blueGrad)" stroke="#2980b9" stroke-width="3" filter="url(#shadow)"/>
        <circle cx="17" cy="17" r="5" fill="white"/>
        <circle cx="43" cy="17" r="5" fill="white"/>
        <circle cx="17" cy="43" r="5" fill="white"/>
        <circle cx="43" cy="43" r="5" fill="white"/>
        <text x="30" y="105" text-anchor="middle" class="label" style="font-size: 18px;">Roll 6: 4</text>
      </g>
    </g>
    
    <!-- Arrow down -->
    <path d="M 350 470 L 350 510" stroke="#2980b9" stroke-width="5" fill="none" marker-end="url(#arrow-blue)"/>
    
    <!-- Calculation box -->
    <rect x="150" y="530" width="400" height="140" rx="12" fill="white" stroke="#2980b9" stroke-width="3" filter="url(#shadow)"/>
    <text x="350" y="560" text-anchor="middle" class="calc">6+6+5+3+5+4 = 29</text>
    <line x1="200" y1="590" x2="500" y2="590" stroke="#2c3e50" stroke-width="2"/>
    <text x="350" y="625" text-anchor="middle" class="calc">6 rolls</text>
    <text x="350" y="655" text-anchor="middle" class="calc">= 4.83</text>
    
    <!-- Result -->
    <rect x="200" y="700" width="300" height="80" rx="12" fill="#2980b9" filter="url(#shadow)"/>
    <text x="350" y="750" text-anchor="middle" style="font-size: 36px; fill: white; font-weight: bold;">Mean = 4.83</text>
    
    <!-- Description -->
    <rect x="120" y="810" width="460" height="50" rx="8" fill="#e3f2fd" stroke="#2980b9" stroke-width="2"/>
    <text x="350" y="843" text-anchor="middle" class="label" style="font-weight: bold;">Based on what ACTUALLY occurred</text>
    
    <!-- Detailed explanation box -->
    <rect x="80" y="875" width="540" height="140" rx="10" fill="white" stroke="#2980b9" stroke-width="3" filter="url(#shadow)"/>
    <text x="350" y="910" text-anchor="middle" class="label" style="font-size: 20px;">A die was physically rolled 6 times. Each roll produced</text>
    <text x="350" y="940" text-anchor="middle" class="label" style="font-size: 20px;">one actual result. These 6 numbers (6,6,5,3,5,4)</text>
    <text x="350" y="970" text-anchor="middle" class="label" style="font-size: 20px;">are HISTORICAL DATA - events that already occurred.</text>
    <text x="350" y="1000" text-anchor="middle" class="label" style="font-size: 20px; font-weight: bold; fill: #2980b9;">MEAN = average of actual observations = 4.83</text>
  </g>
  
  <!-- RIGHT SIDE: EXPECTED VALUE -->
  <g id="expected-side">
    <text x="1050" y="130" text-anchor="middle" class="section-title" style="fill: #28b463;">EXPECTED VALUE</text>
    
    <!-- Tag -->
    <rect x="850" y="150" width="400" height="50" rx="25" fill="#d5f4e6" stroke="#28b463" stroke-width="2"/>
    <text x="1050" y="182" text-anchor="middle" class="label" style="font-weight: bold; fill: #28b463;">PROBABLE OUTCOMES (What We Expect)</text>
    
    <!-- Visual: Future possibilities -->
    <g transform="translate(800, 240)">
      <!-- Timeline -->
      <line x1="0" y1="100" x2="500" y2="100" stroke="#95a5a6" stroke-width="3" stroke-dasharray="10,5"/>
      <polygon points="500,100 485,95 485,105" fill="#95a5a6"/>
      
      <!-- Clock icon showing FUTURE -->
      <circle cx="30" cy="50" r="25" fill="none" stroke="#7f8c8d" stroke-width="3"/>
      <line x1="30" y1="50" x2="30" y2="35" stroke="#7f8c8d" stroke-width="3"/>
      <line x1="30" y1="50" x2="40" y2="60" stroke="#7f8c8d" stroke-width="3"/>
      <text x="30" y="15" text-anchor="middle" class="label" style="fill: #7f8c8d; font-size: 16px;">FUTURE</text>
      <text x="30" y="95" text-anchor="middle" class="label" style="fill: #7f8c8d; font-size: 14px;">(Theoretical)</text>
      
      <!-- All possible outcomes -->
      <g transform="translate(110, 25)">
        <rect x="0" y="0" width="50" height="50" rx="6" fill="url(#greenGrad)" stroke="#28b463" stroke-width="2" opacity="0.8"/>
        <circle cx="25" cy="25" r="4" fill="white"/>
        <text x="25" y="75" text-anchor="middle" class="label" style="font-size: 16px;">1</text>
        <text x="25" y="95" text-anchor="middle" class="label" style="font-size: 15px;">1/6</text>
      </g>
      
      <g transform="translate(175, 25)">
        <rect x="0" y="0" width="50" height="50" rx="6" fill="url(#greenGrad)" stroke="#28b463" stroke-width="2" opacity="0.8"/>
        <circle cx="15" cy="15" r="4" fill="white"/>
        <circle cx="35" cy="35" r="4" fill="white"/>
        <text x="25" y="75" text-anchor="middle" class="label" style="font-size: 16px;">2</text>
        <text x="25" y="95" text-anchor="middle" class="label" style="font-size: 15px;">1/6</text>
      </g>
      
      <g transform="translate(240, 25)">
        <rect x="0" y="0" width="50" height="50" rx="6" fill="url(#greenGrad)" stroke="#28b463" stroke-width="2" opacity="0.8"/>
        <circle cx="15" cy="15" r="4" fill="white"/>
        <circle cx="25" cy="25" r="4" fill="white"/>
        <circle cx="35" cy="35" r="4" fill="white"/>
        <text x="25" y="75" text-anchor="middle" class="label" style="font-size: 16px;">3</text>
        <text x="25" y="95" text-anchor="middle" class="label" style="font-size: 15px;">1/6</text>
      </g>
      
      <g transform="translate(305, 25)">
        <rect x="0" y="0" width="50" height="50" rx="6" fill="url(#greenGrad)" stroke="#28b463" stroke-width="2" opacity="0.8"/>
        <circle cx="15" cy="15" r="4" fill="white"/>
        <circle cx="35" cy="15" r="4" fill="white"/>
        <circle cx="15" cy="35" r="4" fill="white"/>
        <circle cx="35" cy="35" r="4" fill="white"/>
        <text x="25" y="75" text-anchor="middle" class="label" style="font-size: 16px;">4</text>
        <text x="25" y="95" text-anchor="middle" class="label" style="font-size: 15px;">1/6</text>
      </g>
      
      <g transform="translate(370, 25)">
        <rect x="0" y="0" width="50" height="50" rx="6" fill="url(#greenGrad)" stroke="#28b463" stroke-width="2" opacity="0.8"/>
        <circle cx="13" cy="13" r="4" fill="white"/>
        <circle cx="37" cy="13" r="4" fill="white"/>
        <circle cx="25" cy="25" r="4" fill="white"/>
        <circle cx="13" cy="37" r="4" fill="white"/>
        <circle cx="37" cy="37" r="4" fill="white"/>
        <text x="25" y="75" text-anchor="middle" class="label" style="font-size: 16px;">5</text>
        <text x="25" y="95" text-anchor="middle" class="label" style="font-size: 15px;">1/6</text>
      </g>
      
      <g transform="translate(435, 25)">
        <rect x="0" y="0" width="50" height="50" rx="6" fill="url(#greenGrad)" stroke="#28b463" stroke-width="2" opacity="0.8"/>
        <circle cx="13" cy="15" r="4" fill="white"/>
        <circle cx="13" cy="25" r="4" fill="white"/>
        <circle cx="13" cy="35" r="4" fill="white"/>
        <circle cx="37" cy="15" r="4" fill="white"/>
        <circle cx="37" cy="25" r="4" fill="white"/>
        <circle cx="37" cy="35" r="4" fill="white"/>
        <text x="25" y="75" text-anchor="middle" class="label" style="font-size: 16px;">6</text>
        <text x="25" y="95" text-anchor="middle" class="label" style="font-size: 15px;">1/6</text>
      </g>
    </g>
    
    <!-- Arrow down -->
    <path d="M 1050 470 L 1050 510" stroke="#28b463" stroke-width="5" fill="none" marker-end="url(#arrow-green)"/>
    
    <!-- Calculation box -->
    <rect x="820" y="530" width="460" height="140" rx="12" fill="white" stroke="#28b463" stroke-width="3" filter="url(#shadow)"/>
    <text x="1050" y="565" text-anchor="middle" class="calc">1+2+3+4+5+6</text>
    <line x1="870" y1="585" x2="1230" y2="585" stroke="#2c3e50" stroke-width="2"/>
    <text x="1050" y="620" text-anchor="middle" class="calc">6</text>
    <text x="1050" y="655" text-anchor="middle" class="calc">= 3.5</text>
    
    <!-- Result -->
    <rect x="875" y="700" width="350" height="80" rx="12" fill="#28b463" filter="url(#shadow)"/>
    <text x="1050" y="750" text-anchor="middle" style="font-size: 36px; fill: white; font-weight: bold;">E[X] = 3.5</text>
    
    <!-- Description -->
    <rect x="820" y="810" width="460" height="50" rx="8" fill="#d5f4e6" stroke="#28b463" stroke-width="2"/>
    <text x="1050" y="843" text-anchor="middle" class="label" style="font-weight: bold;">Based on what we EXPECT to happen</text>
    
    <!-- Detailed explanation box -->
    <rect x="780" y="875" width="540" height="140" rx="10" fill="white" stroke="#28b463" stroke-width="3" filter="url(#shadow)"/>
    <text x="1050" y="910" text-anchor="middle" class="label" style="font-size: 20px;">No die is rolled. Instead, ALL possible outcomes</text>
    <text x="1050" y="940" text-anchor="middle" class="label" style="font-size: 20px;">(1,2,3,4,5,6) and their probabilities (each 1/6) are</text>
    <text x="1050" y="970" text-anchor="middle" class="label" style="font-size: 20px;">considered. This is THEORETICAL - what should happen</text>
    <text x="1050" y="1000" text-anchor="middle" class="label" style="font-size: 20px; font-weight: bold; fill: #28b463;">EXPECTED VALUE = (1+2+3+4+5+6)/6 = 3.5</text>
  </g>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrow-blue" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
      <polygon points="0 0, 12 6, 0 12" fill="#2980b9"/>
    </marker>
    <marker id="arrow-green" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
      <polygon points="0 0, 12 6, 0 12" fill="#28b463"/>
    </marker>
  </defs>
</svg>
        `,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Expected Value od a Die Roll":{
        svg:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
  <defs>
    <style>
      .title { font-family: Arial, sans-serif; font-size: 40px; font-weight: bold; fill: #2c3e50; }
      .calculation { font-family: 'Courier New', monospace; font-size: 32px; fill: #2c3e50; font-weight: bold; }
      .result { font-family: Arial, sans-serif; font-size: 36px; fill: #e74c3c; font-weight: bold; }
      .label { font-family: Arial, sans-serif; font-size: 18px; fill: #555; }
    </style>
    
    <linearGradient id="diceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8e8e8;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1000" height="1000" fill="#ecf0f1"/>
  
  <!-- Title -->
  <text x="500" y="50" text-anchor="middle" class="title">Expected Value of a Die Roll</text>
  
  <!-- DICE ROW -->
  <g id="dice-row">
    <!-- Die 1: one dot -->
    <rect x="70" y="100" width="120" height="120" rx="12" fill="url(#diceGrad)" stroke="#333" stroke-width="4"/>
    <circle cx="130" cy="160" r="10" fill="#333"/>
    <text x="130" y="245" text-anchor="middle" class="label">Value: 1</text>
    
    <!-- Die 2: two dots -->
    <rect x="220" y="100" width="120" height="120" rx="12" fill="url(#diceGrad)" stroke="#333" stroke-width="4"/>
    <circle cx="250" cy="130" r="10" fill="#333"/>
    <circle cx="310" cy="190" r="10" fill="#333"/>
    <text x="280" y="245" text-anchor="middle" class="label">Value: 2</text>
    
    <!-- Die 3: three dots -->
    <rect x="370" y="100" width="120" height="120" rx="12" fill="url(#diceGrad)" stroke="#333" stroke-width="4"/>
    <circle cx="400" cy="130" r="10" fill="#333"/>
    <circle cx="430" cy="160" r="10" fill="#333"/>
    <circle cx="460" cy="190" r="10" fill="#333"/>
    <text x="430" y="245" text-anchor="middle" class="label">Value: 3</text>
    
    <!-- Die 4: four dots -->
    <rect x="520" y="100" width="120" height="120" rx="12" fill="url(#diceGrad)" stroke="#333" stroke-width="4"/>
    <circle cx="550" cy="130" r="10" fill="#333"/>
    <circle cx="610" cy="130" r="10" fill="#333"/>
    <circle cx="550" cy="190" r="10" fill="#333"/>
    <circle cx="610" cy="190" r="10" fill="#333"/>
    <text x="580" y="245" text-anchor="middle" class="label">Value: 4</text>
    
    <!-- Die 5: five dots -->
    <rect x="670" y="100" width="120" height="120" rx="12" fill="url(#diceGrad)" stroke="#333" stroke-width="4"/>
    <circle cx="700" cy="130" r="10" fill="#333"/>
    <circle cx="760" cy="130" r="10" fill="#333"/>
    <circle cx="730" cy="160" r="10" fill="#333"/>
    <circle cx="700" cy="190" r="10" fill="#333"/>
    <circle cx="760" cy="190" r="10" fill="#333"/>
    <text x="730" y="245" text-anchor="middle" class="label">Value: 5</text>
    
    <!-- Die 6: six dots -->
    <rect x="820" y="100" width="120" height="120" rx="12" fill="url(#diceGrad)" stroke="#333" stroke-width="4"/>
    <circle cx="850" cy="125" r="10" fill="#333"/>
    <circle cx="850" cy="160" r="10" fill="#333"/>
    <circle cx="850" cy="195" r="10" fill="#333"/>
    <circle cx="910" cy="125" r="10" fill="#333"/>
    <circle cx="910" cy="160" r="10" fill="#333"/>
    <circle cx="910" cy="195" r="10" fill="#333"/>
    <text x="880" y="245" text-anchor="middle" class="label">Value: 6</text>
  </g>
  
  <!-- CALCULATION BOX -->
  <g id="calculation-box">
    <rect x="100" y="290" width="800" height="180" rx="15" fill="white" stroke="#3498db" stroke-width="4"/>
    
    <text x="500" y="335" text-anchor="middle" class="calculation">1 + 2 + 3 + 4 + 5 + 6 = 21</text>
    
    <line x1="200" y1="360" x2="800" y2="360" stroke="#95a5a6" stroke-width="2"/>
    
    <text x="500" y="405" text-anchor="middle" class="calculation">21 ÷ 6 = 3.5</text>
    
    <text x="500" y="450" text-anchor="middle" class="result">Expected Value = 3.5</text>
  </g>
  
  <!-- BALANCE VISUALIZATION -->
  <g id="balance-visual">
    <!-- Ground -->
    <line x1="50" y1="850" x2="950" y2="850" stroke="#34495e" stroke-width="4"/>
    
    <!-- Fulcrum at 3.5 position -->
    <path d="M 500 850 L 470 800 L 530 800 Z" fill="#e74c3c" stroke="#c0392b" stroke-width="3"/>
    
    <!-- Balance beam -->
    <rect x="100" y="790" width="800" height="20" rx="10" fill="#95a5a6" stroke="#7f8c8d" stroke-width="3"/>
    
    <!-- Dice on the beam (smaller versions) -->
    
    <!-- Die 1 on beam -->
    <g transform="translate(120, 680)">
      <rect x="0" y="0" width="80" height="80" rx="8" fill="url(#diceGrad)" stroke="#333" stroke-width="3"/>
      <circle cx="40" cy="40" r="7" fill="#333"/>
      <line x1="40" y1="80" x2="40" y2="110" stroke="#34495e" stroke-width="2" stroke-dasharray="5,5"/>
    </g>
    
    <!-- Die 2 on beam -->
    <g transform="translate(230, 660)">
      <rect x="0" y="0" width="80" height="80" rx="8" fill="url(#diceGrad)" stroke="#333" stroke-width="3"/>
      <circle cx="20" cy="20" r="7" fill="#333"/>
      <circle cx="60" cy="60" r="7" fill="#333"/>
      <line x1="40" y1="80" x2="40" y2="130" stroke="#34495e" stroke-width="2" stroke-dasharray="5,5"/>
    </g>
    
    <!-- Die 3 on beam -->
    <g transform="translate(340, 640)">
      <rect x="0" y="0" width="80" height="80" rx="8" fill="url(#diceGrad)" stroke="#333" stroke-width="3"/>
      <circle cx="20" cy="20" r="7" fill="#333"/>
      <circle cx="40" cy="40" r="7" fill="#333"/>
      <circle cx="60" cy="60" r="7" fill="#333"/>
      <line x1="40" y1="80" x2="40" y2="150" stroke="#34495e" stroke-width="2" stroke-dasharray="5,5"/>
    </g>
    
    <!-- Die 4 on beam -->
    <g transform="translate(540, 640)">
      <rect x="0" y="0" width="80" height="80" rx="8" fill="url(#diceGrad)" stroke="#333" stroke-width="3"/>
      <circle cx="20" cy="20" r="7" fill="#333"/>
      <circle cx="60" cy="20" r="7" fill="#333"/>
      <circle cx="20" cy="60" r="7" fill="#333"/>
      <circle cx="60" cy="60" r="7" fill="#333"/>
      <line x1="40" y1="80" x2="40" y2="150" stroke="#34495e" stroke-width="2" stroke-dasharray="5,5"/>
    </g>
    
    <!-- Die 5 on beam -->
    <g transform="translate(650, 660)">
      <rect x="0" y="0" width="80" height="80" rx="8" fill="url(#diceGrad)" stroke="#333" stroke-width="3"/>
      <circle cx="20" cy="20" r="7" fill="#333"/>
      <circle cx="60" cy="20" r="7" fill="#333"/>
      <circle cx="40" cy="40" r="7" fill="#333"/>
      <circle cx="20" cy="60" r="7" fill="#333"/>
      <circle cx="60" cy="60" r="7" fill="#333"/>
      <line x1="40" y1="80" x2="40" y2="130" stroke="#34495e" stroke-width="2" stroke-dasharray="5,5"/>
    </g>
    
    <!-- Die 6 on beam -->
    <g transform="translate(760, 680)">
      <rect x="0" y="0" width="80" height="80" rx="8" fill="url(#diceGrad)" stroke="#333" stroke-width="3"/>
      <circle cx="20" cy="20" r="7" fill="#333"/>
      <circle cx="20" cy="40" r="7" fill="#333"/>
      <circle cx="20" cy="60" r="7" fill="#333"/>
      <circle cx="60" cy="20" r="7" fill="#333"/>
      <circle cx="60" cy="40" r="7" fill="#333"/>
      <circle cx="60" cy="60" r="7" fill="#333"/>
      <line x1="40" y1="80" x2="40" y2="110" stroke="#34495e" stroke-width="2" stroke-dasharray="5,5"/>
    </g>
    
    <!-- Expected value marker -->
    <path d="M 500 880 L 480 920 L 520 920 Z" fill="#e74c3c"/>
    <rect x="400" y="920" width="200" height="60" rx="10" fill="#e74c3c" stroke="#c0392b" stroke-width="3"/>
    <text x="500" y="960" text-anchor="middle" class="result" style="fill: white;">E[X] = 3.5</text>
  </g>
  
  <!-- Bottom explanation -->
  <rect x="150" y="520" width="700" height="80" rx="12" fill="#fff9e6" stroke="#f39c12" stroke-width="3"/>
  <text x="500" y="552" text-anchor="middle" class="label" style="font-size: 20px; font-weight: bold;">The balance point is at 3.5</text>
  <text x="500" y="582" text-anchor="middle" class="label" style="font-size: 18px;">All six dice outcomes perfectly balance at this point!</text>
</svg>
        `,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Simple Average vs Expected Value Lottery Example":{
        svg:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1100">
  <defs>
    <style>
      .title { font-family: Arial, sans-serif; font-size: 42px; font-weight: bold; fill: #2c3e50; }
      .section-title { font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; fill: #34495e; }
      .calc { font-family: 'Courier New', monospace; font-size: 24px; fill: #2c3e50; font-weight: bold; }
      .result { font-family: Arial, sans-serif; font-size: 36px; fill: #e74c3c; font-weight: bold; }
      .label { font-family: Arial, sans-serif; font-size: 20px; fill: #555; }
      .big-label { font-family: Arial, sans-serif; font-size: 24px; fill: #333; font-weight: bold; }
      .emphasis { font-family: Arial, sans-serif; font-size: 22px; fill: #e74c3c; font-weight: bold; }
    </style>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="1100" fill="#ecf0f1"/>
  
  <!-- Title -->
  <text x="600" y="60" text-anchor="middle" class="title">Simple Average vs Expected Value</text>
  
  <!-- Example scenario -->
  <rect x="150" y="100" width="900" height="100" rx="12" fill="#fff3cd" stroke="#ffc107" stroke-width="3"/>
  <text x="600" y="135" text-anchor="middle" class="big-label">Lottery Example:</text>
  <text x="600" y="170" text-anchor="middle" class="label">Win $100 (10% chance) or Win $10 (90% chance)</text>
  
  <!-- LEFT SIDE: SIMPLE AVERAGE -->
  <g id="simple-average">
    <rect x="50" y="240" width="520" height="780" rx="15" fill="white" stroke="#3498db" stroke-width="4"/>
    
    <text x="310" y="290" text-anchor="middle" class="section-title" style="fill: #3498db;">SIMPLE AVERAGE</text>
    
    <text x="310" y="340" text-anchor="middle" class="emphasis">ALL VALUES COUNT EQUALLY</text>
    
    <!-- The two outcomes - EQUAL SIZE -->
    <rect x="100" y="380" width="180" height="180" rx="10" fill="#3498db" stroke="#2980b9" stroke-width="4"/>
    <text x="190" y="455" text-anchor="middle" style="font-family: Arial; font-size: 48px; fill: white; font-weight: bold;">$100</text>
    <text x="190" y="495" text-anchor="middle" class="label" style="fill: white; font-size: 18px;">Outcome 1</text>
    
    <text x="310" y="485" text-anchor="middle" style="font-family: Arial; font-size: 36px; fill: #2c3e50; font-weight: bold;">+</text>
    
    <rect x="340" y="380" width="180" height="180" rx="10" fill="#3498db" stroke="#2980b9" stroke-width="4"/>
    <text x="430" y="455" text-anchor="middle" style="font-family: Arial; font-size: 48px; fill: white; font-weight: bold;">$10</text>
    <text x="430" y="495" text-anchor="middle" class="label" style="fill: white; font-size: 18px;">Outcome 2</text>
    
    <!-- Arrow -->
    <path d="M 310 580 L 310 620" stroke="#2c3e50" stroke-width="4" fill="none" marker-end="url(#arrow-simple)"/>
    
    <!-- Calculation box -->
    <rect x="80" y="640" width="460" height="140" rx="10" fill="#e8f6f3" stroke="#3498db" stroke-width="3"/>
    <text x="310" y="685" text-anchor="middle" class="calc">$100 + $10</text>
    <line x1="150" y1="705" x2="470" y2="705" stroke="#2c3e50" stroke-width="2"/>
    <text x="310" y="740" text-anchor="middle" class="calc">2</text>
    <text x="310" y="770" text-anchor="middle" class="calc">= $55</text>
    
    <!-- Result -->
    <rect x="100" y="810" width="420" height="90" rx="12" fill="#3498db"/>
    <text x="310" y="865" text-anchor="middle" class="result" style="fill: white;">Average = $55</text>
    
    <!-- Explanation -->
    <rect x="80" y="920" width="460" height="80" rx="8" fill="#fff9e6" stroke="#f39c12" stroke-width="2"/>
    <text x="310" y="955" text-anchor="middle" class="label" style="font-weight: bold;">Each value weighted equally</text>
    <text x="310" y="985" text-anchor="middle" class="label">Ignores probabilities!</text>
  </g>
  
  <!-- RIGHT SIDE: EXPECTED VALUE -->
  <g id="expected-value">
    <rect x="630" y="240" width="520" height="780" rx="15" fill="white" stroke="#27ae60" stroke-width="4"/>
    
    <text x="890" y="290" text-anchor="middle" class="section-title" style="fill: #27ae60;">EXPECTED VALUE</text>
    
    <text x="890" y="340" text-anchor="middle" class="emphasis">WEIGHTED BY PROBABILITY</text>
    
    <!-- The two outcomes - DIFFERENT SIZES based on probability -->
    <!-- Small box for $100 (10%) -->
    <rect x="680" y="440" width="100" height="100" rx="10" fill="#27ae60" stroke="#28b463" stroke-width="4"/>
    <text x="730" y="480" text-anchor="middle" style="font-family: Arial; font-size: 32px; fill: white; font-weight: bold;">$100</text>
    <text x="730" y="510" text-anchor="middle" class="label" style="fill: white; font-size: 14px;">10%</text>
    <text x="730" y="530" text-anchor="middle" class="label" style="fill: white; font-size: 14px;">chance</text>
    
    <text x="810" y="495" text-anchor="middle" style="font-family: Arial; font-size: 36px; fill: #2c3e50; font-weight: bold;">+</text>
    
    <!-- LARGE box for $10 (90%) -->
    <rect x="840" y="380" width="200" height="200" rx="10" fill="#27ae60" stroke="#28b463" stroke-width="4"/>
    <text x="940" y="465" text-anchor="middle" style="font-family: Arial; font-size: 48px; fill: white; font-weight: bold;">$10</text>
    <text x="940" y="510" text-anchor="middle" class="label" style="fill: white; font-size: 18px;">90%</text>
    <text x="940" y="540" text-anchor="middle" class="label" style="fill: white; font-size: 18px;">chance</text>
    
    <!-- Arrow -->
    <path d="M 890 600 L 890 640" stroke="#2c3e50" stroke-width="4" fill="none" marker-end="url(#arrow-expected)"/>
    
    <!-- Calculation box -->
    <rect x="660" y="660" width="460" height="140" rx="10" fill="#e8f8f5" stroke="#27ae60" stroke-width="3"/>
    <text x="890" y="695" text-anchor="middle" class="calc">($100 × 0.10) + ($10 × 0.90)</text>
    <text x="890" y="730" text-anchor="middle" class="calc">= $10 + $9</text>
    <text x="890" y="765" text-anchor="middle" class="calc">= $19</text>
    
    <!-- Result -->
    <rect x="680" y="810" width="420" height="90" rx="12" fill="#27ae60"/>
    <text x="890" y="865" text-anchor="middle" class="result" style="fill: white;">E[X] = $19</text>
    
    <!-- Explanation -->
    <rect x="660" y="920" width="460" height="80" rx="8" fill="#d5f4e6" stroke="#27ae60" stroke-width="2"/>
    <text x="890" y="955" text-anchor="middle" class="label" style="font-weight: bold;">Each value weighted by probability</text>
    <text x="890" y="985" text-anchor="middle" class="label">More likely = more important!</text>
  </g>
  
  <!-- Bottom summary -->
  <rect x="100" y="1040" width="1000" height="50" rx="10" fill="#e74c3c"/>
  <text x="600" y="1072" text-anchor="middle" class="big-label" style="fill: white;">KEY: Simple Average treats all equal | Expected Value weights by probability</text>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrow-simple" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
      <polygon points="0 0, 10 5, 0 10" fill="#2c3e50"/>
    </marker>
    <marker id="arrow-expected" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
      <polygon points="0 0, 10 5, 0 10" fill="#2c3e50"/>
    </marker>
  </defs>
</svg>
        `,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Simple Average vs Weighted Average":{
        svg:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800">
  <defs>
    <style>
      .title { font-family: Arial, sans-serif; font-size: 36px; font-weight: bold; fill: #2c3e50; }
      .label { font-family: Arial, sans-serif; font-size: 18px; fill: #333; }
      .value { font-family: Arial, sans-serif; font-size: 24px; fill: #2c3e50; font-weight: bold; }
    </style>
    
    <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2E5C8A;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="green" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#52C77A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2D8F52;stop-opacity:1" />
    </linearGradient>
    
    <filter id="shadow">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1400" height="800" fill="#f5f5f5"/>
  
  <!-- Title -->
  <text x="700" y="50" text-anchor="middle" class="title">Simple Average vs Expected Value</text>
  
  <!-- Divider -->
  <line x1="700" y1="80" x2="700" y2="780" stroke="#ccc" stroke-width="3" stroke-dasharray="10,5"/>
  
  <!-- LEFT: SIMPLE AVERAGE -->
  <g id="simple-avg">
    <text x="350" y="110" text-anchor="middle" class="title" style="fill: #4A90E2;">SIMPLE AVERAGE</text>
    
    <!-- Balance scale - equal weights -->
    <g transform="translate(200, 180)">
      <!-- Scale beam -->
      <rect x="0" y="100" width="300" height="8" rx="4" fill="#666" filter="url(#shadow)"/>
      
      <!-- Fulcrum in center -->
      <polygon points="150,108 130,140 170,140" fill="#e74c3c"/>
      
      <!-- Left pan -->
      <line x1="50" y1="100" x2="50" y2="80" stroke="#666" stroke-width="3"/>
      <ellipse cx="50" cy="70" rx="60" ry="12" fill="#999"/>
      <rect x="-10" y="-30" width="120" height="100" rx="8" fill="url(#blue)" filter="url(#shadow)"/>
      <text x="50" y="30" text-anchor="middle" style="font-size: 36px; fill: white; font-weight: bold;">$100</text>
      
      <!-- Right pan -->
      <line x1="250" y1="100" x2="250" y2="80" stroke="#666" stroke-width="3"/>
      <ellipse cx="250" cy="70" rx="60" ry="12" fill="#999"/>
      <rect x="190" y="-30" width="120" height="100" rx="8" fill="url(#blue)" filter="url(#shadow)"/>
      <text x="250" y="30" text-anchor="middle" style="font-size: 36px; fill: white; font-weight: bold;">$10</text>
    </g>
    
    <text x="350" y="360" text-anchor="middle" class="label" style="font-size: 20px; font-weight: bold;">Both outcomes have EQUAL weight</text>
    
    <!-- Visual bars of equal height -->
    <g transform="translate(150, 400)">
      <rect x="0" y="0" width="150" height="200" rx="8" fill="url(#blue)" filter="url(#shadow)"/>
      <text x="75" y="110" text-anchor="middle" style="font-size: 32px; fill: white; font-weight: bold;">$100</text>
      <text x="75" y="230" text-anchor="middle" class="label">Weight: 1</text>
      
      <rect x="250" y="0" width="150" height="200" rx="8" fill="url(#blue)" filter="url(#shadow)"/>
      <text x="325" y="110" text-anchor="middle" style="font-size: 32px; fill: white; font-weight: bold;">$10</text>
      <text x="325" y="230" text-anchor="middle" class="label">Weight: 1</text>
    </g>
    
    <!-- Result -->
    <text x="350" y="680" text-anchor="middle" class="value" style="font-size: 28px;">(100 + 10) ÷ 2</text>
    <rect x="250" y="700" width="200" height="60" rx="10" fill="#4A90E2" filter="url(#shadow)"/>
    <text x="350" y="740" text-anchor="middle" style="font-size: 32px; fill: white; font-weight: bold;">$55</text>
  </g>
  
  <!-- RIGHT: EXPECTED VALUE -->
  <g id="expected-val">
    <text x="1050" y="110" text-anchor="middle" class="title" style="fill: #52C77A;">EXPECTED VALUE</text>
    
    <!-- Balance scale - UNequal weights -->
    <g transform="translate(900, 180)">
      <!-- Scale beam - TILTED -->
      <rect x="0" y="120" width="300" height="8" rx="4" fill="#666" filter="url(#shadow)" transform="rotate(-15 150 124)"/>
      
      <!-- Fulcrum in center -->
      <polygon points="150,128 130,160 170,160" fill="#e74c3c"/>
      
      <!-- Left pan - smaller, higher -->
      <line x1="50" y1="95" x2="50" y2="75" stroke="#666" stroke-width="3"/>
      <ellipse cx="50" cy="65" rx="50" ry="10" fill="#999"/>
      <rect x="0" y="-30" width="100" height="95" rx="8" fill="url(#green)" filter="url(#shadow)"/>
      <text x="50" y="25" text-anchor="middle" style="font-size: 28px; fill: white; font-weight: bold;">$100</text>
      <text x="50" y="50" text-anchor="middle" style="font-size: 14px; fill: white;">10%</text>
      
      <!-- Right pan - MUCH bigger, lower -->
      <line x1="250" y1="150" x2="250" y2="130" stroke="#666" stroke-width="3"/>
      <ellipse cx="250" cy="120" rx="70" ry="14" fill="#999"/>
      <rect x="165" y="-20" width="170" height="140" rx="8" fill="url(#green)" filter="url(#shadow)"/>
      <text x="250" y="50" text-anchor="middle" style="font-size: 42px; fill: white; font-weight: bold;">$10</text>
      <text x="250" y="85" text-anchor="middle" style="font-size: 18px; fill: white;">90%</text>
    </g>
    
    <text x="1050" y="360" text-anchor="middle" class="label" style="font-size: 20px; font-weight: bold;">Weighted by PROBABILITY</text>
    
    <!-- Visual bars of DIFFERENT heights -->
    <g transform="translate(850, 400)">
      <!-- Small bar for 10% -->
      <rect x="0" y="140" width="150" height="60" rx="8" fill="url(#green)" filter="url(#shadow)"/>
      <text x="75" y="178" text-anchor="middle" style="font-size: 24px; fill: white; font-weight: bold;">$100</text>
      <text x="75" y="230" text-anchor="middle" class="label">Weight: 0.1</text>
      <text x="75" y="250" text-anchor="middle" class="value" style="fill: #52C77A;">= $10</text>
      
      <!-- LARGE bar for 90% -->
      <rect x="250" y="20" width="150" height="180" rx="8" fill="url(#green)" filter="url(#shadow)"/>
      <text x="325" y="120" text-anchor="middle" style="font-size: 32px; fill: white; font-weight: bold;">$10</text>
      <text x="325" y="230" text-anchor="middle" class="label">Weight: 0.9</text>
      <text x="325" y="250" text-anchor="middle" class="value" style="fill: #52C77A;">= $9</text>
    </g>
    
    <!-- Result -->
    <text x="1050" y="680" text-anchor="middle" class="value" style="font-size: 28px;">10 + 9</text>
    <rect x="950" y="700" width="200" height="60" rx="10" fill="#52C77A" filter="url(#shadow)"/>
    <text x="1050" y="740" text-anchor="middle" style="font-size: 32px; fill: white; font-weight: bold;">$19</text>
  </g>
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