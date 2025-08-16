
export const identitiesData={
    "Coin Flips":{
        svg:`<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1000" height="700" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="500" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Random Variables: Different Ways to "Read" Coin Flips
  </text>
  
  <!-- Sample Space: 3 Coin Flips -->
  <rect x="50" y="70" width="300" height="200" fill="#ecf0f1" stroke="#2c3e50" stroke-width="2" rx="10"/>
  <text x="70" y="100" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Three Coin Flips</text>
  <text x="70" y="120" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Sample Space (8 outcomes)</text>
  
  <!-- Coin flip outcomes -->
  <g transform="translate(80, 140)">
    <rect x="0" y="0" width="35" height="20" fill="white" stroke="#34495e"/>
    <text x="17" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HHH</text>
    
    <rect x="40" y="0" width="35" height="20" fill="white" stroke="#34495e"/>
    <text x="57" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HHT</text>
    
    <rect x="80" y="0" width="35" height="20" fill="white" stroke="#34495e"/>
    <text x="97" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HTH</text>
    
    <rect x="120" y="0" width="35" height="20" fill="white" stroke="#34495e"/>
    <text x="137" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HTT</text>
    
    <rect x="0" y="25" width="35" height="20" fill="white" stroke="#34495e"/>
    <text x="17" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">THH</text>
    
    <rect x="40" y="25" width="35" height="20" fill="white" stroke="#34495e"/>
    <text x="57" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">THT</text>
    
    <rect x="80" y="25" width="35" height="20" fill="white" stroke="#34495e"/>
    <text x="97" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">TTH</text>
    
    <rect x="120" y="25" width="35" height="20" fill="white" stroke="#34495e"/>
    <text x="137" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">TTT</text>
  </g>
  
  <text x="200" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Each outcome equally likely: P = 1/8</text>
  
  <!-- Random Variable X: Number of Heads -->
  <g transform="translate(400, 70)">
    <rect x="0" y="0" width="250" height="200" fill="#e8f5e8" stroke="#27ae60" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#27ae60">Random Variable X</text>
    <text x="20" y="50" font-family="Arial, sans-serif" font-size="14" fill="#27ae60">X = Number of Heads</text>
    
    <!-- Distribution bars -->
    <g transform="translate(40, 80)">
      <rect x="0" y="70" width="40" height="20" fill="#27ae60" opacity="0.7"/>
      <text x="20" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">0</text>
      <text x="20" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">1/8</text>
      <text x="20" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">TTT</text>
      
      <rect x="50" y="40" width="40" height="50" fill="#27ae60" opacity="0.7"/>
      <text x="70" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">1</text>
      <text x="70" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">3/8</text>
      <text x="70" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HTT,THT,TTH</text>
      
      <rect x="100" y="40" width="40" height="50" fill="#27ae60" opacity="0.7"/>
      <text x="120" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">2</text>
      <text x="120" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">3/8</text>
      <text x="120" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HHT,HTH,THH</text>
      
      <rect x="150" y="70" width="40" height="20" fill="#27ae60" opacity="0.7"/>
      <text x="170" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">3</text>
      <text x="170" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">1/8</text>
      <text x="170" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HHH</text>
    </g>
  </g>
  
  <!-- Random Variable Y: First Flip Result -->
  <g transform="translate(700, 70)">
    <rect x="0" y="0" width="250" height="200" fill="#e8f4fd" stroke="#3498db" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#3498db">Random Variable Y</text>
    <text x="20" y="50" font-family="Arial, sans-serif" font-size="14" fill="#3498db">Y = First flip result (1=H, 0=T)</text>
    
    <!-- Distribution bars -->
    <g transform="translate(60, 80)">
      <rect x="0" y="20" width="60" height="70" fill="#3498db" opacity="0.7"/>
      <text x="30" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">0 (T)</text>
      <text x="30" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">4/8</text>
      <text x="30" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">THH,THT,TTH,TTT</text>
      
      <rect x="80" y="20" width="60" height="70" fill="#3498db" opacity="0.7"/>
      <text x="110" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">1 (H)</text>
      <text x="110" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">4/8</text>
      <text x="110" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HHH,HHT,HTH,HTT</text>
    </g>
  </g>
  
  <!-- Random Variable Z: Longest Run -->
  <g transform="translate(225, 320)">
    <rect x="0" y="0" width="250" height="200" fill="#fdf2e8" stroke="#e67e22" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e67e22">Random Variable Z</text>
    <text x="20" y="50" font-family="Arial, sans-serif" font-size="14" fill="#e67e22">Z = Length of longest run</text>
    
    <!-- Distribution bars -->
    <g transform="translate(40, 80)">
      <rect x="0" y="60" width="50" height="30" fill="#e67e22" opacity="0.7"/>
      <text x="25" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">1</text>
      <text x="25" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">2/8</text>
      <text x="25" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HTH,THT</text>
      
      <rect x="70" y="30" width="50" height="60" fill="#e67e22" opacity="0.7"/>
      <text x="95" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">2</text>
      <text x="95" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">4/8</text>
      <text x="95" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HHT,HTT,THH,TTH</text>
      
      <rect x="140" y="60" width="50" height="30" fill="#e67e22" opacity="0.7"/>
      <text x="165" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">3</text>
      <text x="165" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">2/8</text>
      <text x="165" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HHH,TTT</text>
    </g>
  </g>
  
  <!-- Random Variable W: Pattern Matching -->
  <g transform="translate(525, 320)">
    <rect x="0" y="0" width="250" height="200" fill="#f4e8fd" stroke="#9b59b6" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#9b59b6">Random Variable W</text>
    <text x="20" y="50" font-family="Arial, sans-serif" font-size="14" fill="#9b59b6">W = 1 if contains HH, 0 otherwise</text>
    
    <!-- Distribution bars -->
    <g transform="translate(60, 80)">
      <rect x="0" y="20" width="60" height="70" fill="#9b59b6" opacity="0.7"/>
      <text x="30" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">0 (No HH)</text>
      <text x="30" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">5/8</text>
      <text x="30" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HTH,HTT,THT,TTH,TTT</text>
      
      <rect x="80" y="50" width="60" height="40" fill="#9b59b6" opacity="0.7"/>
      <text x="110" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">1 (Has HH)</text>
      <text x="110" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">3/8</text>
      <text x="110" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">HHH,HHT,THH</text>
    </g>
  </g>
  
  <!-- Explanation boxes under each random variable -->
  <g transform="translate(400, 275)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#27ae60" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#27ae60">Binomial distribution B(3, 0.5)</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Symmetric, peaked at middle values</text>
  </g>
  
  <g transform="translate(700, 275)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#3498db" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#3498db">Bernoulli distribution p = 0.5</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Uniform binary distribution</text>
  </g>
  
  <g transform="translate(225, 525)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#e67e22" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e67e22">Custom distribution on {1, 2, 3}</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Peaked at length 2</text>
  </g>
  
  <g transform="translate(525, 525)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#9b59b6" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#9b59b6">Bernoulli distribution p = 3/8</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Biased toward "no consecutive heads"</text>
  </g>
  
  <!-- Key insight box -->
  <rect x="100" y="580" width="800" height="100" fill="white" stroke="#2c3e50" stroke-width="2" rx="10"/>
  <text x="500" y="610" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">
    Same 8 Coin Flip Outcomes → Different Random Variables → Different Distributions
  </text>
  <text x="500" y="635" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
    Each random variable extracts different numerical features from the sequences
  </text>
  <text x="500" y="660" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d" font-style="italic">
    From counting to pattern detection - infinite ways to measure the same experiment
  </text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Dice Roll":{
        svg:`<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1000" height="700" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="500" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Random Variables: Different Ways to "Read" the Same Experiment
  </text>
  
  <!-- Dice Sample Space -->
  <rect x="50" y="70" width="300" height="200" fill="#ecf0f1" stroke="#2c3e50" stroke-width="2" rx="10"/>
  <text x="70" y="100" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Two Dice Roll</text>
  <text x="70" y="120" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Sample Space (36 outcomes)</text>
  
  <!-- Dice outcomes grid -->
  <g transform="translate(80, 140)">
    <!-- Row 1 -->
    <rect x="0" y="0" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="10" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(1,1)</text>
    <rect x="25" y="0" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="35" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(1,2)</text>
    <rect x="50" y="0" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="60" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(1,3)</text>
    <rect x="75" y="0" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="85" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(1,4)</text>
    <rect x="100" y="0" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="110" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(1,5)</text>
    <rect x="125" y="0" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="135" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(1,6)</text>
    
    <!-- Row 2 -->
    <rect x="0" y="25" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="10" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(2,1)</text>
    <rect x="25" y="25" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="35" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(2,2)</text>
    <rect x="50" y="25" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="60" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(2,3)</text>
    <rect x="75" y="25" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="85" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(2,4)</text>
    <rect x="100" y="25" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="110" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(2,5)</text>
    <rect x="125" y="25" width="20" height="20" fill="white" stroke="#34495e"/>
    <text x="135" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">(2,6)</text>
    
    <!-- Abbreviated remaining rows -->
    <text x="75" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">⋮</text>
    <text x="75" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">(36 total outcomes)</text>
  </g>
  
  <!-- Random Variable X: Sum -->
  <g transform="translate(400, 70)">
    <rect x="0" y="0" width="250" height="200" fill="#e8f5e8" stroke="#27ae60" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#27ae60">Random Variable X</text>
    <text x="20" y="50" font-family="Arial, sans-serif" font-size="14" fill="#27ae60">X = Sum of two dice</text>
    
    <!-- Distribution bars -->
    <g transform="translate(30, 80)">
      <rect x="0" y="80" width="15" height="10" fill="#27ae60" opacity="0.7"/>
      <text x="7" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">2</text>
      <text x="7" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">1/36</text>
      
      <rect x="20" y="70" width="15" height="20" fill="#27ae60" opacity="0.7"/>
      <text x="27" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">3</text>
      <text x="27" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">2/36</text>
      
      <rect x="40" y="50" width="15" height="40" fill="#27ae60" opacity="0.7"/>
      <text x="47" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">4</text>
      
      <rect x="60" y="30" width="15" height="60" fill="#27ae60" opacity="0.7"/>
      <text x="67" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">5</text>
      
      <rect x="80" y="10" width="15" height="80" fill="#27ae60" opacity="0.7"/>
      <text x="87" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">6</text>
      
      <rect x="100" y="0" width="15" height="90" fill="#27ae60" opacity="0.7"/>
      <text x="107" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">7</text>
      <text x="107" y="-10" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">6/36</text>
      
      <rect x="120" y="10" width="15" height="80" fill="#27ae60" opacity="0.7"/>
      <text x="127" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">8</text>
      
      <rect x="140" y="30" width="15" height="60" fill="#27ae60" opacity="0.7"/>
      <text x="147" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">9</text>
      
      <rect x="160" y="50" width="15" height="40" fill="#27ae60" opacity="0.7"/>
      <text x="167" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">10</text>
      
      <rect x="180" y="70" width="15" height="20" fill="#27ae60" opacity="0.7"/>
      <text x="187" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">11</text>
      
      <rect x="200" y="80" width="15" height="10" fill="#27ae60" opacity="0.7"/>
      <text x="207" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">12</text>
    </g>
    

  </g>
  
  <!-- Random Variable Y: Maximum -->
  <g transform="translate(700, 70)">
    <rect x="0" y="0" width="250" height="200" fill="#e8f4fd" stroke="#3498db" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#3498db">Random Variable Y</text>
    <text x="20" y="50" font-family="Arial, sans-serif" font-size="14" fill="#3498db">Y = Maximum of two dice</text>
    
    <!-- Distribution bars -->
    <g transform="translate(30, 80)">
      <rect x="0" y="80" width="25" height="10" fill="#3498db" opacity="0.7"/>
      <text x="12" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">1</text>
      <text x="12" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">1/36</text>
      
      <rect x="30" y="70" width="25" height="20" fill="#3498db" opacity="0.7"/>
      <text x="42" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">2</text>
      <text x="42" y="65" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">3/36</text>
      
      <rect x="60" y="55" width="25" height="35" fill="#3498db" opacity="0.7"/>
      <text x="72" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">3</text>
      <text x="72" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">5/36</text>
      
      <rect x="90" y="35" width="25" height="55" fill="#3498db" opacity="0.7"/>
      <text x="102" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">4</text>
      
      <rect x="120" y="10" width="25" height="80" fill="#3498db" opacity="0.7"/>
      <text x="132" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">5</text>
      
      <rect x="150" y="0" width="25" height="90" fill="#3498db" opacity="0.7"/>
      <text x="162" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">6</text>
      <text x="162" y="-10" text-anchor="middle" font-family="Arial, sans-serif" font-size="8">11/36</text>
    </g>
    

  </g>
  
  <!-- Random Variable Z: Even/Odd Sum -->
  <g transform="translate(225, 320)">
    <rect x="0" y="0" width="250" height="200" fill="#fdf2e8" stroke="#e67e22" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e67e22">Random Variable Z</text>
    <text x="20" y="50" font-family="Arial, sans-serif" font-size="14" fill="#e67e22">Z = 1 if sum is even, 0 if odd</text>
    
    <!-- Distribution bars -->
    <g transform="translate(60, 80)">
      <rect x="0" y="10" width="60" height="80" fill="#e67e22" opacity="0.7"/>
      <text x="30" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">0 (Odd)</text>
      <text x="30" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">18/36</text>
      
      <rect x="80" y="10" width="60" height="80" fill="#e67e22" opacity="0.7"/>
      <text x="110" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">1 (Even)</text>
      <text x="110" y="5" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">18/36</text>
    </g>
    

  </g>
  
  <!-- Random Variable W: Number of Sixes -->
  <g transform="translate(525, 320)">
    <rect x="0" y="0" width="250" height="200" fill="#f4e8fd" stroke="#9b59b6" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#9b59b6">Random Variable W</text>
    <text x="20" y="50" font-family="Arial, sans-serif" font-size="14" fill="#9b59b6">W = Number of sixes in the roll</text>
    
    <!-- Distribution bars -->
    <g transform="translate(40, 80)">
      <rect x="0" y="20" width="50" height="70" fill="#9b59b6" opacity="0.7"/>
      <text x="25" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">0 sixes</text>
      <text x="25" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">25/36</text>
      
      <rect x="70" y="50" width="50" height="40" fill="#9b59b6" opacity="0.7"/>
      <text x="95" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">1 six</text>
      <text x="95" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">10/36</text>
      
      <rect x="140" y="80" width="50" height="10" fill="#9b59b6" opacity="0.7"/>
      <text x="165" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">2 sixes</text>
      <text x="165" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="10">1/36</text>
    </g>
    

  </g>
  
  <!-- Explanation boxes under each random variable -->
  <g transform="translate(400, 275)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#27ae60" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#27ae60">Possible values: 2,3,4,...,12</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Different probabilities for each sum</text>
  </g>
  
  <g transform="translate(700, 275)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#3498db" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#3498db">Possible values: 1,2,3,4,5,6</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Completely different distribution!</text>
  </g>
  
  <g transform="translate(225, 525)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#e67e22" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e67e22">Possible values: 0, 1</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Binary distribution (Bernoulli)</text>
  </g>
  
  <g transform="translate(525, 525)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#9b59b6" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#9b59b6">Possible values: 0, 1, 2</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Binomial-like distribution</text>
  </g>
  <!-- Key insight box -->
  <rect x="100" y="580" width="800" height="100" fill="white" stroke="#2c3e50" stroke-width="2" rx="10"/>
  <text x="500" y="610" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">
    Same Sample Space → Different Random Variables → Different Distributions
  </text>
  <text x="500" y="635" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
    Each random variable is a different "lens" that groups and measures the elementary outcomes
  </text>
  <text x="500" y="660" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d" font-style="italic">
    The distribution reflects how that particular measurement "reads" the experiment
  </text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "2 Coins Flip":{
        svg:`<svg viewBox="0 0 1000 900" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1000" height="900" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="500" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2c3e50">
    Random Variables: Two Coin Flips
  </text>
  
  <!-- Sample Space -->
  <rect x="50" y="70" width="300" height="200" fill="#ecf0f1" stroke="#2c3e50" stroke-width="2" rx="10"/>
  <text x="70" y="100" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Two Coin Flips</text>
  <text x="70" y="120" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Sample Space (4 outcomes)</text>
  
  <!-- Outcomes -->
  <g transform="translate(80, 140)">
    <rect x="0" y="0" width="50" height="30" fill="white" stroke="#34495e" stroke-width="2"/>
    <text x="25" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">HH</text>
    
    <rect x="60" y="0" width="50" height="30" fill="white" stroke="#34495e" stroke-width="2"/>
    <text x="85" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">HT</text>
    
    <rect x="120" y="0" width="50" height="30" fill="white" stroke="#34495e" stroke-width="2"/>
    <text x="145" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">TH</text>
    
    <rect x="180" y="0" width="50" height="30" fill="white" stroke="#34495e" stroke-width="2"/>
    <text x="205" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">TT</text>
  </g>
  
  <!-- Random Variable X: Number of Heads -->
  <g transform="translate(400, 70)">
    <rect x="0" y="0" width="250" height="180" fill="#e8f5e8" stroke="#27ae60" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#27ae60">X = Number of Heads</text>
    
    <g transform="translate(30, 50)">
      <rect x="0" y="60" width="50" height="40" fill="#27ae60" opacity="0.8"/>
      <text x="25" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">0</text>
      <text x="25" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">1/4</text>
      <text x="25" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">TT</text>
      
      <rect x="70" y="20" width="50" height="80" fill="#27ae60" opacity="0.8"/>
      <text x="95" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">1</text>
      <text x="95" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">2/4</text>
      <text x="95" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">HT,TH</text>
      
      <rect x="140" y="60" width="50" height="40" fill="#27ae60" opacity="0.8"/>
      <text x="165" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">2</text>
      <text x="165" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">1/4</text>
      <text x="165" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">HH</text>
    </g>
  </g>
  
  <!-- Random Variable Y: First Flip -->
  <g transform="translate(700, 70)">
    <rect x="0" y="0" width="250" height="180" fill="#e8f4fd" stroke="#3498db" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#3498db">Y = First Flip (1=H, 0=T)</text>
    
    <g transform="translate(40, 50)">
      <rect x="0" y="20" width="80" height="80" fill="#3498db" opacity="0.8"/>
      <text x="40" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">0</text>
      <text x="40" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">2/4</text>
      <text x="40" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">TH,TT</text>
      
      <rect x="90" y="20" width="80" height="80" fill="#3498db" opacity="0.8"/>
      <text x="130" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">1</text>
      <text x="130" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">2/4</text>
      <text x="130" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">HH,HT</text>
    </g>
  </g>
  
  <!-- Explanation boxes for top row -->
  <g transform="translate(400, 270)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#27ae60" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#27ae60">Binomial B(2, 0.5)</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Symmetric around 1</text>
  </g>
  
  <g transform="translate(700, 270)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#3498db" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#3498db">Bernoulli p=0.5</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">50/50 split</text>
  </g>
  
  <!-- Random Variable Z: Both Same -->
  <g transform="translate(225, 350)">
    <rect x="0" y="0" width="250" height="180" fill="#fdf2e8" stroke="#e67e22" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e67e22">Z = Both Same (1=Yes, 0=No)</text>
    
    <g transform="translate(40, 50)">
      <rect x="0" y="20" width="80" height="80" fill="#e67e22" opacity="0.8"/>
      <text x="40" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">0</text>
      <text x="40" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">2/4</text>
      <text x="40" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">HT,TH</text>
      
      <rect x="90" y="20" width="80" height="80" fill="#e67e22" opacity="0.8"/>
      <text x="130" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">1</text>
      <text x="130" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">2/4</text>
      <text x="130" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">HH,TT</text>
    </g>
  </g>
  
  <!-- Random Variable W: Sum -->
  <g transform="translate(525, 350)">
    <rect x="0" y="0" width="250" height="180" fill="#f4e8fd" stroke="#9b59b6" stroke-width="2" rx="10"/>
    <text x="20" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#9b59b6">W = Sum (H=1, T=0)</text>
    
    <g transform="translate(30, 50)">
      <rect x="0" y="60" width="50" height="40" fill="#9b59b6" opacity="0.8"/>
      <text x="25" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">0</text>
      <text x="25" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">1/4</text>
      <text x="25" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">TT</text>
      
      <rect x="70" y="20" width="50" height="80" fill="#9b59b6" opacity="0.8"/>
      <text x="95" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">1</text>
      <text x="95" y="0" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">2/4</text>
      <text x="95" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">HT,TH</text>
      
      <rect x="140" y="60" width="50" height="40" fill="#9b59b6" opacity="0.8"/>
      <text x="165" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold">2</text>
      <text x="165" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="14">1/4</text>
      <text x="165" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="12">HH</text>
    </g>
  </g>
  
  <!-- Explanation boxes for bottom row -->
  <g transform="translate(225, 550)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#e67e22" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e67e22">Bernoulli p=0.5</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Equal chance match/different</text>
  </g>
  
  <g transform="translate(525, 550)">
    <rect x="0" y="0" width="250" height="40" fill="white" stroke="#9b59b6" stroke-width="1" rx="5"/>
    <text x="125" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#9b59b6">Same as X</text>
    <text x="125" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">Different concept, same distribution</text>
  </g>
  
  <!-- Key insight -->
  <rect x="100" y="630" width="800" height="100" fill="white" stroke="#2c3e50" stroke-width="2" rx="10"/>
  <text x="500" y="660" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">
    Same 4 Outcomes → Different Random Variables → Different Distributions
  </text>
  <text x="500" y="685" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50">
    Simple experiment, multiple ways to extract numerical information
  </text>
  <text x="500" y="710" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d" font-style="italic">
    X and W have identical distributions but measure different concepts
  </text>
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