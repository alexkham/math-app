
export const tautologiesData={
    "Modus Ponens Form":{
        svg:
        `<svg  style="background-color: white;preserveAspectRatio="none";margin-top:"100px";" viewBox="-50 -50 900 650" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
              .super { font-size: 16px; font-weight: bold; }
              .sub { font-size: 16px; font-weight: bold; }
              .true { fill: #27ae60; }
              .false { fill: #e74c3c; }
              .case { font-size: 18px; font-weight: bold; fill: #34495e; }
              .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
              .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
              .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
              .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
              .table-border { stroke: #5a7391; stroke-width: 2; }
              .table-line { stroke: #b8cde6; stroke-width: 1; }
             
            </style>
            <defs>
           
              <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
              </linearGradient>
              <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
              </linearGradient>
            </defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
            </marker>
          </defs>
          
          
          <!-- Case 1: P=T, Q=T -->
          <text x="30" y="60" class="formula">(</text>
          <text x="45" y="60" class="formula">(</text>
          <text x="60" y="60" class="formula">P</text>
          <text x="80" y="60" class="formula">→</text>
          <text x="105" y="60" class="formula">Q</text>
          <text x="125" y="60" class="formula">)</text>
          <text x="145" y="60" class="formula">∧</text>
          <text x="170" y="60" class="formula">P</text>
          <text x="185" y="60" class="formula">)</text>
          <text x="205" y="60" class="formula">→</text>
          <text x="230" y="60" class="formula">Q</text>
          
          <!-- Superscript truth assignments -->
          <text x="60" y="35" class="super true">T</text>
          <text x="105" y="35" class="super true">T</text>
          <text x="170" y="35" class="super true">T</text>
          <text x="230" y="35" class="super true">T</text>
          
          <!-- Subscript intermediate results -->
          <text x="92" y="80" class="sub true">T</text>
          <text x="157" y="80" class="sub true">T</text>
          <text x="217" y="80" class="sub true">T</text>
          
          <!-- Case 2: P=T, Q=F -->
          <text x="30" y="150" class="formula">(</text>
          <text x="45" y="150" class="formula">(</text>
          <text x="60" y="150" class="formula">P</text>
          <text x="80" y="150" class="formula">→</text>
          <text x="105" y="150" class="formula">Q</text>
          <text x="125" y="150" class="formula">)</text>
          <text x="145" y="150" class="formula">∧</text>
          <text x="170" y="150" class="formula">P</text>
          <text x="185" y="150" class="formula">)</text>
          <text x="205" y="150" class="formula">→</text>
          <text x="230" y="150" class="formula">Q</text>
          
          <!-- Superscript truth assignments -->
          <text x="60" y="125" class="super true">T</text>
          <text x="105" y="125" class="super false">F</text>
          <text x="170" y="125" class="super true">T</text>
          <text x="230" y="125" class="super false">F</text>
          
          <!-- Subscript intermediate results -->
          <text x="92" y="170" class="sub false">F</text>
          <text x="157" y="170" class="sub false">F</text>
          <text x="217" y="170" class="sub true">T</text>
          
          <!-- Case 3: P=F, Q=T -->
          <text x="30" y="240" class="formula">(</text>
          <text x="45" y="240" class="formula">(</text>
          <text x="60" y="240" class="formula">P</text>
          <text x="80" y="240" class="formula">→</text>
          <text x="105" y="240" class="formula">Q</text>
          <text x="125" y="240" class="formula">)</text>
          <text x="145" y="240" class="formula">∧</text>
          <text x="170" y="240" class="formula">P</text>
          <text x="185" y="240" class="formula">)</text>
          <text x="205" y="240" class="formula">→</text>
          <text x="230" y="240" class="formula">Q</text>
          
          <!-- Superscript truth assignments -->
          <text x="60" y="215" class="super false">F</text>
          <text x="105" y="215" class="super true">T</text>
          <text x="170" y="215" class="super false">F</text>
          <text x="230" y="215" class="super true">T</text>
          
          <!-- Subscript intermediate results -->
          <text x="92" y="260" class="sub true">T</text>
          <text x="157" y="260" class="sub false">F</text>
          <text x="217" y="260" class="sub true">T</text>
          
          <!-- Case 4: P=F, Q=F -->
          <text x="30" y="330" class="formula">(</text>
          <text x="45" y="330" class="formula">(</text>
          <text x="60" y="330" class="formula">P</text>
          <text x="80" y="330" class="formula">→</text>
          <text x="105" y="330" class="formula">Q</text>
          <text x="125" y="330" class="formula">)</text>
          <text x="145" y="330" class="formula">∧</text>
          <text x="170" y="330" class="formula">P</text>
          <text x="185" y="330" class="formula">)</text>
          <text x="205" y="330" class="formula">→</text>
          <text x="230" y="330" class="formula">Q</text>
          
          <!-- Superscript truth assignments -->
          <text x="60" y="305" class="super false">F</text>
          <text x="105" y="305" class="super false">F</text>
          <text x="170" y="305" class="super false">F</text>
          <text x="230" y="305" class="super false">F</text>
          
          <!-- Subscript intermediate results -->
          <text x="92" y="350" class="sub true">T</text>
          <text x="157" y="350" class="sub false">F</text>
          <text x="217" y="350" class="sub true">T</text>
          
          <!-- Explanation boxes -->
          <rect x="300" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
          <text x="320" y="40" class="case">Case 1: P=T, Q=T</text>
          <text x="320" y="58" class="explanation">1. T → T = T, T ∧ T = T</text>
          <text x="320" y="74" class="explanation">2. T → T = T</text>
          <text x="320" y="90" class="explanation">3. Result: True</text>
          
          <rect x="300" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
          <text x="320" y="130" class="case">Case 2: P=T, Q=F</text>
          <text x="320" y="148" class="explanation">1. T → F = F, F ∧ T = F</text>
          <text x="320" y="164" class="explanation">2. F → F = T</text>
          <text x="320" y="180" class="explanation">3. Result: True</text>
          
          <rect x="300" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
          <text x="320" y="220" class="case">Case 3: P=F, Q=T</text>
          <text x="320" y="238" class="explanation">1. F → T = T, T ∧ F = F</text>
          <text x="320" y="254" class="explanation">2. F → T = T</text>
          <text x="320" y="270" class="explanation">3. Result: True</text>
          
          <rect x="300" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
          <text x="320" y="310" class="case">Case 4: P=F, Q=F</text>
          <text x="320" y="328" class="explanation">1. F → F = T, T ∧ F = F</text>
          <text x="320" y="344" class="explanation">2. F → F = T</text>
          <text x="320" y="360" class="explanation">3. Result: True</text>
          
          <!-- Arrows from explanation boxes to conclusion -->
          <line x1="550" y1="60" x2="600" y2="185" class="arrow"/>
          <line x1="550" y1="150" x2="600" y2="185" class="arrow"/>
          <line x1="550" y1="240" x2="600" y2="185" class="arrow"/>
          <line x1="550" y1="330" x2="600" y2="185" class="arrow"/>
          
          <!-- Conclusion -->
          <rect x="600" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
          <text x="710" y="170" text-anchor="middle" class="case">TAUTOLOGY</text>
          <text x="710" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
          <text x="710" y="210" text-anchor="middle" class="explanation">Modus Ponens</text>
          
          <!-- Truth Table -->
          <rect x="50" y="390" width="580" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
          
          <!-- Table grid lines -->
          <line x1="130" y1="390" x2="130" y2="570" class="table-line"/>
          <line x1="210" y1="390" x2="210" y2="570" class="table-line"/>
          <line x1="320" y1="390" x2="320" y2="570" class="table-line"/>
          <line x1="450" y1="390" x2="450" y2="570" class="table-line"/>
          <line x1="50" y1="420" x2="630" y2="420" class="table-line"/>
          <line x1="50" y1="450" x2="630" y2="450" class="table-line"/>
          <line x1="50" y1="480" x2="630" y2="480" class="table-line"/>
          <line x1="50" y1="510" x2="630" y2="510" class="table-line"/>
          <line x1="50" y1="540" x2="630" y2="540" class="table-line"/>
          
          <!-- Table headers -->
          <text x="90" y="410" text-anchor="middle" class="case">P</text>
          <text x="170" y="410" text-anchor="middle" class="case">Q</text>
          <text x="265" y="410" text-anchor="middle" class="case">P → Q</text>
          <text x="385" y="410" text-anchor="middle" class="case">(P → Q) ∧ P</text>
          <text x="540" y="410" text-anchor="middle" class="case">((P → Q) ∧ P) → Q</text>
          
          <!-- Row 1: P=T, Q=T -->
          <text x="90" y="440" text-anchor="middle" class="super true">T</text>
          <text x="170" y="440" text-anchor="middle" class="super true">T</text>
          <text x="265" y="440" text-anchor="middle" class="super true">T</text>
          <text x="385" y="440" text-anchor="middle" class="super true">T</text>
          <text x="540" y="440" text-anchor="middle" class="super true">T</text>
          
          <!-- Row 2: P=T, Q=F -->
          <text x="90" y="470" text-anchor="middle" class="super true">T</text>
          <text x="170" y="470" text-anchor="middle" class="super false">F</text>
          <text x="265" y="470" text-anchor="middle" class="super false">F</text>
          <text x="385" y="470" text-anchor="middle" class="super false">F</text>
          <text x="540" y="470" text-anchor="middle" class="super true">T</text>
          
          <!-- Row 3: P=F, Q=T -->
          <text x="90" y="500" text-anchor="middle" class="super false">F</text>
          <text x="170" y="500" text-anchor="middle" class="super true">T</text>
          <text x="265" y="500" text-anchor="middle" class="super true">T</text>
          <text x="385" y="500" text-anchor="middle" class="super false">F</text>
          <text x="540" y="500" text-anchor="middle" class="super true">T</text>
          
          <!-- Row 4: P=F, Q=F -->
          <text x="90" y="530" text-anchor="middle" class="super false">F</text>
          <text x="170" y="530" text-anchor="middle" class="super false">F</text>
          <text x="265" y="530" text-anchor="middle" class="super true">T</text>
          <text x="385" y="530" text-anchor="middle" class="super false">F</text>
          <text x="540" y="530" text-anchor="middle" class="super true">T</text>
        </svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "Self-Implication":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 36px; fill: #2c3e50; }
      .super { font-size: 20px; font-weight: bold; }
      .sub { font-size: 20px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 20px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 16px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <defs>
      <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>
  
  <!-- Formula with truth values above -->
  <text x="100" y="100" class="formula">P</text>
  <text x="140" y="100" class="formula">→</text>
  <text x="180" y="100" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="100" y="65" class="super true">T</text>
  <text x="180" y="65" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="160" y="125" class="sub true">T</text>
  
  <!-- Case 1 explanation box -->
  <rect x="320" y="50" width="220" height="90" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="75" class="case">Case 1: P = True</text>
  <text x="340" y="95" class="explanation">1. P is assigned True</text>
  <text x="340" y="113" class="explanation">2. T → T = True</text>
  <text x="340" y="131" class="explanation">3. Result: True</text>
  
  <!-- Formula with truth values above -->
  <text x="100" y="220" class="formula">P</text>
  <text x="140" y="220" class="formula">→</text>
  <text x="180" y="220" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="100" y="185" class="super false">F</text>
  <text x="180" y="185" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="160" y="245" class="sub true">T</text>
  
  <!-- Case 2 explanation box -->
  <rect x="320" y="170" width="220" height="90" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="195" class="case">Case 2: P = False</text>
  <text x="340" y="215" class="explanation">1. P is assigned False</text>
  <text x="340" y="233" class="explanation">2. F → F = True</text>
  <text x="340" y="251" class="explanation">3. Result: True</text>
  
  <!-- Arrows from explanation boxes to conclusion -->
  <line x1="540" y1="95" x2="580" y2="155" class="arrow"/>
  <line x1="540" y1="215" x2="580" y2="155" class="arrow"/>
  
  <!-- Conclusion -->
  <rect x="550" y="115" width="200" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="650" y="140" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="650" y="160" text-anchor="middle" class="sub true">T ∧ T = T</text>
  <text x="650" y="180" text-anchor="middle" class="explanation">Formula is always True</text>
  
  <!-- Truth Table -->
  <rect x="50" y="290" width="400" height="80" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="250" y1="290" x2="250" y2="370" class="table-line"/>
  <line x1="50" y1="320" x2="450" y2="320" class="table-line"/>
  <line x1="50" y1="345" x2="450" y2="345" class="table-line"/>
  
  <!-- Table headers -->
  <text x="150" y="310" text-anchor="middle" class="case">P</text>
  <text x="350" y="310" text-anchor="middle" class="case">P → P</text>
  
  <!-- Row 1 -->
  <text x="150" y="335" text-anchor="middle" class="super true">T</text>
  <text x="350" y="335" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 2 -->
  <text x="150" y="360" text-anchor="middle" class="super false">F</text>
  <text x="350" y="360" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Non-Contradiction":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 36px; fill: #2c3e50; }
      .super { font-size: 20px; font-weight: bold; }
      .sub { font-size: 20px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 20px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 16px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <defs>
      <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>
  
  <!-- Formula with truth values above -->
  <text x="50" y="100" class="formula">¬</text>
  <text x="75" y="100" class="formula">(</text>
  <text x="95" y="100" class="formula">P</text>
  <text x="125" y="100" class="formula">∧</text>
  <text x="155" y="100" class="formula">¬P</text>
  <text x="210" y="100" class="formula">)</text>
  
  <!-- Superscript truth assignments -->
  <text x="95" y="65" class="super true">T</text>
  <text x="175" y="65" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="140" y="125" class="sub false">F</text>
  <text x="65" y="125" class="sub true">T</text>
  
  <!-- Case 1 explanation box -->
  <rect x="320" y="50" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="75" class="case">Case 1: P = True</text>
  <text x="340" y="95" class="explanation">1. P is assigned True</text>
  <text x="340" y="113" class="explanation">2. ¬P becomes False</text>
  <text x="340" y="131" class="explanation">3. T ∧ F = False</text>
  <text x="340" y="149" class="explanation">4. ¬(False) = True</text>
  
  <!-- Formula with truth values above -->
  <text x="50" y="250" class="formula">¬</text>
  <text x="75" y="250" class="formula">(</text>
  <text x="95" y="250" class="formula">P</text>
  <text x="125" y="250" class="formula">∧</text>
  <text x="155" y="250" class="formula">¬P</text>
  <text x="210" y="250" class="formula">)</text>
  
  <!-- Superscript truth assignments -->
  <text x="95" y="215" class="super false">F</text>
  <text x="175" y="215" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="140" y="275" class="sub false">F</text>
  <text x="65" y="275" class="sub true">T</text>
  
  <!-- Case 2 explanation box -->
  <rect x="320" y="200" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="225" class="case">Case 2: P = False</text>
  <text x="340" y="245" class="explanation">1. P is assigned False</text>
  <text x="340" y="263" class="explanation">2. ¬P becomes True</text>
  <text x="340" y="281" class="explanation">3. F ∧ T = False</text>
  <text x="340" y="299" class="explanation">4. ¬(False) = True</text>
  
  <!-- Arrows from explanation boxes to conclusion -->
  <line x1="540" y1="105" x2="580" y2="175" class="arrow"/>
  <line x1="540" y1="255" x2="580" y2="175" class="arrow"/>
  
  <!-- Conclusion -->
  <rect x="550" y="135" width="200" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="650" y="160" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="650" y="180" text-anchor="middle" class="sub true">T ∧ T = T</text>
  <text x="650" y="200" text-anchor="middle" class="explanation">Law of Non-Contradiction</text>
  
  <!-- Truth Table -->
  <rect x="50" y="320" width="500" height="80" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="150" y1="320" x2="150" y2="400" class="table-line"/>
  <line x1="250" y1="320" x2="250" y2="400" class="table-line"/>
  <line x1="400" y1="320" x2="400" y2="400" class="table-line"/>
  <line x1="50" y1="350" x2="550" y2="350" class="table-line"/>
  <line x1="50" y1="375" x2="550" y2="375" class="table-line"/>
  
  <!-- Table headers -->
  <text x="100" y="340" text-anchor="middle" class="case">P</text>
  <text x="200" y="340" text-anchor="middle" class="case">¬P</text>
  <text x="325" y="340" text-anchor="middle" class="case">P ∧ ¬P</text>
  <text x="475" y="340" text-anchor="middle" class="case">¬(P ∧ ¬P)</text>
  
  <!-- Row 1 -->
  <text x="100" y="365" text-anchor="middle" class="super true">T</text>
  <text x="200" y="365" text-anchor="middle" class="super false">F</text>
  <text x="325" y="365" text-anchor="middle" class="super false">F</text>
  <text x="475" y="365" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 2 -->
  <text x="100" y="390" text-anchor="middle" class="super false">F</text>
  <text x="200" y="390" text-anchor="middle" class="super true">T</text>
  <text x="325" y="390" text-anchor="middle" class="super false">F</text>
  <text x="475" y="390" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Self-Equivalence":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 36px; fill: #2c3e50; }
      .super { font-size: 20px; font-weight: bold; }
      .sub { font-size: 20px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 20px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 16px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <defs>
      <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>
  
  <!-- Formula with truth values above -->
  <text x="100" y="100" class="formula">P</text>
  <text x="140" y="100" class="formula">↔</text>
  <text x="180" y="100" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="100" y="65" class="super true">T</text>
  <text x="180" y="65" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="160" y="125" class="sub true">T</text>
  
  <!-- Case 1 explanation box -->
  <rect x="320" y="50" width="220" height="90" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="75" class="case">Case 1: P = True</text>
  <text x="340" y="95" class="explanation">1. P is assigned True</text>
  <text x="340" y="113" class="explanation">2. T ↔ T = True</text>
  <text x="340" y="131" class="explanation">3. Result: True</text>
  
  <!-- Formula with truth values above -->
  <text x="100" y="220" class="formula">P</text>
  <text x="140" y="220" class="formula">↔</text>
  <text x="180" y="220" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="100" y="185" class="super false">F</text>
  <text x="180" y="185" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="160" y="245" class="sub true">T</text>
  
  <!-- Case 2 explanation box -->
  <rect x="320" y="170" width="220" height="90" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="195" class="case">Case 2: P = False</text>
  <text x="340" y="215" class="explanation">1. P is assigned False</text>
  <text x="340" y="233" class="explanation">2. F ↔ F = True</text>
  <text x="340" y="251" class="explanation">3. Result: True</text>
  
  <!-- Arrows from explanation boxes to conclusion -->
  <line x1="540" y1="95" x2="580" y2="155" class="arrow"/>
  <line x1="540" y1="215" x2="580" y2="155" class="arrow"/>
  
  <!-- Conclusion -->
  <rect x="550" y="115" width="200" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="650" y="140" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="650" y="160" text-anchor="middle" class="sub true">T ∧ T = T</text>
  <text x="650" y="180" text-anchor="middle" class="explanation">Self-equivalence</text>
  
  <!-- Truth Table -->
  <rect x="50" y="290" width="500" height="80" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="150" y1="290" x2="150" y2="370" class="table-line"/>
  <line x1="250" y1="290" x2="250" y2="370" class="table-line"/>
  <line x1="400" y1="290" x2="400" y2="370" class="table-line"/>
  <line x1="50" y1="320" x2="550" y2="320" class="table-line"/>
  <line x1="50" y1="345" x2="550" y2="345" class="table-line"/>
  
  <!-- Table headers -->
  <text x="100" y="310" text-anchor="middle" class="case">P</text>
  <text x="200" y="310" text-anchor="middle" class="case">P</text>
  <text x="325" y="310" text-anchor="middle" class="case">P ↔ P</text>
  
  <!-- Row 1 -->
  <text x="100" y="335" text-anchor="middle" class="super true">T</text>
  <text x="200" y="335" text-anchor="middle" class="super true">T</text>
  <text x="325" y="335" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 2 -->
  <text x="100" y="360" text-anchor="middle" class="super false">F</text>
  <text x="200" y="360" text-anchor="middle" class="super false">F</text>
  <text x="325" y="360" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Self-Contradiction Implication":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 36px; fill: #2c3e50; }
      .super { font-size: 20px; font-weight: bold; }
      .sub { font-size: 20px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 20px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 16px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <defs>
      <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>
  
  <!-- Formula with truth values above -->
  <text x="50" y="100" class="formula">(</text>
  <text x="70" y="100" class="formula">P</text>
  <text x="100" y="100" class="formula">→</text>
  <text x="130" y="100" class="formula">¬P</text>
  <text x="180" y="100" class="formula">)</text>
  <text x="200" y="100" class="formula">→</text>
  <text x="230" y="100" class="formula">¬P</text>
  
  <!-- Superscript truth assignments -->
  <text x="70" y="65" class="super true">T</text>
  <text x="150" y="65" class="super false">F</text>
  <text x="250" y="65" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="115" y="125" class="sub false">F</text>
  <text x="215" y="125" class="sub true">T</text>
  
  <!-- Case 1 explanation box -->
  <rect x="320" y="50" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="75" class="case">Case 1: P = True</text>
  <text x="340" y="95" class="explanation">1. P is assigned True</text>
  <text x="340" y="113" class="explanation">2. ¬P becomes False</text>
  <text x="340" y="131" class="explanation">3. T → F = False</text>
  <text x="340" y="149" class="explanation">4. F → F = True</text>
  
  <!-- Formula with truth values above -->
  <text x="50" y="250" class="formula">(</text>
  <text x="70" y="250" class="formula">P</text>
  <text x="100" y="250" class="formula">→</text>
  <text x="130" y="250" class="formula">¬P</text>
  <text x="180" y="250" class="formula">)</text>
  <text x="200" y="250" class="formula">→</text>
  <text x="230" y="250" class="formula">¬P</text>
  
  <!-- Superscript truth assignments -->
  <text x="70" y="215" class="super false">F</text>
  <text x="150" y="215" class="super true">T</text>
  <text x="250" y="215" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="115" y="275" class="sub true">T</text>
  <text x="215" y="275" class="sub true">T</text>
  
  <!-- Case 2 explanation box -->
  <rect x="320" y="200" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="225" class="case">Case 2: P = False</text>
  <text x="340" y="245" class="explanation">1. P is assigned False</text>
  <text x="340" y="263" class="explanation">2. ¬P becomes True</text>
  <text x="340" y="281" class="explanation">3. F → T = True</text>
  <text x="340" y="299" class="explanation">4. T → T = True</text>
  
  <!-- Arrows from explanation boxes to conclusion -->
  <line x1="540" y1="105" x2="580" y2="175" class="arrow"/>
  <line x1="540" y1="255" x2="580" y2="175" class="arrow"/>
  
  <!-- Conclusion -->
  <rect x="550" y="135" width="200" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="650" y="160" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="650" y="180" text-anchor="middle" class="sub true">T ∧ T = T</text>
  <text x="650" y="200" text-anchor="middle" class="explanation">Formula is always True</text>
  
  <!-- Truth Table -->
  <rect x="50" y="320" width="600" height="80" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="150" y1="320" x2="150" y2="400" class="table-line"/>
  <line x1="250" y1="320" x2="250" y2="400" class="table-line"/>
  <line x1="400" y1="320" x2="400" y2="400" class="table-line"/>
  <line x1="50" y1="350" x2="650" y2="350" class="table-line"/>
  <line x1="50" y1="375" x2="650" y2="375" class="table-line"/>
  
  <!-- Table headers -->
  <text x="100" y="340" text-anchor="middle" class="case">P</text>
  <text x="200" y="340" text-anchor="middle" class="case">¬P</text>
  <text x="325" y="340" text-anchor="middle" class="case">(P→¬P)</text>
  <text x="525" y="340" text-anchor="middle" class="case">((P→¬P)→¬P)</text>
  
  <!-- Row 1 -->
  <text x="100" y="365" text-anchor="middle" class="super true">T</text>
  <text x="200" y="365" text-anchor="middle" class="super false">F</text>
  <text x="325" y="365" text-anchor="middle" class="super false">F</text>
  <text x="525" y="365" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 2 -->
  <text x="100" y="390" text-anchor="middle" class="super false">F</text>
  <text x="200" y="390" text-anchor="middle" class="super true">T</text>
  <text x="325" y="390" text-anchor="middle" class="super true">T</text>
  <text x="525" y="390" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Proof by Contradiction Form":{
        svg:`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 36px; fill: #2c3e50; }
      .super { font-size: 20px; font-weight: bold; }
      .sub { font-size: 20px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 20px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 16px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <defs>
      <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>
  
  <!-- Formula with truth values above -->
  <text x="50" y="100" class="formula">(</text>
  <text x="70" y="100" class="formula">¬P</text>
  <text x="110" y="100" class="formula">→</text>
  <text x="150" y="100" class="formula">P</text>
  <text x="180" y="100" class="formula">)</text>
  <text x="200" y="100" class="formula">→</text>
  <text x="250" y="100" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="90" y="65" class="super false">F</text>
  <text x="150" y="65" class="super true">T</text>
  <text x="250" y="65" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="130" y="125" class="sub true">T</text>
  <text x="225" y="125" class="sub true">T</text>
  
  <!-- Case 1 explanation box -->
  <rect x="320" y="50" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="75" class="case">Case 1: P = True</text>
  <text x="340" y="95" class="explanation">1. P is assigned True</text>
  <text x="340" y="113" class="explanation">2. ¬P becomes False</text>
  <text x="340" y="131" class="explanation">3. F → T = True</text>
  <text x="340" y="149" class="explanation">4. T → T = True</text>
  
  <!-- Formula with truth values above -->
  <text x="50" y="250" class="formula">(</text>
  <text x="70" y="250" class="formula">¬P</text>
  <text x="110" y="250" class="formula">→</text>
  <text x="150" y="250" class="formula">P</text>
  <text x="180" y="250" class="formula">)</text>
  <text x="200" y="250" class="formula">→</text>
  <text x="250" y="250" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="90" y="215" class="super true">T</text>
  <text x="150" y="215" class="super false">F</text>
  <text x="250" y="215" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="130" y="275" class="sub false">F</text>
  <text x="225" y="275" class="sub true">T</text>
  
  <!-- Case 2 explanation box -->
  <rect x="320" y="200" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="225" class="case">Case 2: P = False</text>
  <text x="340" y="245" class="explanation">1. P is assigned False</text>
  <text x="340" y="263" class="explanation">2. ¬P becomes True</text>
  <text x="340" y="281" class="explanation">3. T → F = False</text>
  <text x="340" y="299" class="explanation">4. F → F = True</text>
  
  <!-- Arrows from explanation boxes to conclusion -->
  <line x1="540" y1="105" x2="580" y2="175" class="arrow"/>
  <line x1="540" y1="255" x2="580" y2="175" class="arrow"/>
  
  <!-- Conclusion -->
  <rect x="550" y="135" width="200" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="650" y="160" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="650" y="180" text-anchor="middle" class="sub true">T ∧ T = T</text>
  <text x="650" y="200" text-anchor="middle" class="explanation">Formula is always True</text>
  
  <!-- Truth Table -->
  <rect x="50" y="320" width="600" height="80" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="150" y1="320" x2="150" y2="400" class="table-line"/>
  <line x1="250" y1="320" x2="250" y2="400" class="table-line"/>
  <line x1="400" y1="320" x2="400" y2="400" class="table-line"/>
  <line x1="50" y1="350" x2="650" y2="350" class="table-line"/>
  <line x1="50" y1="375" x2="650" y2="375" class="table-line"/>
  
  <!-- Table headers -->
  <text x="100" y="340" text-anchor="middle" class="case">P</text>
  <text x="200" y="340" text-anchor="middle" class="case">¬P</text>
  <text x="325" y="340" text-anchor="middle" class="case">(¬P→P)</text>
  <text x="525" y="340" text-anchor="middle" class="case">((¬P→P)→P)</text>
  
  <!-- Row 1 -->
  <text x="100" y="365" text-anchor="middle" class="super true">T</text>
  <text x="200" y="365" text-anchor="middle" class="super false">F</text>
  <text x="325" y="365" text-anchor="middle" class="super true">T</text>
  <text x="525" y="365" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 2 -->
  <text x="100" y="390" text-anchor="middle" class="super false">F</text>
  <text x="200" y="390" text-anchor="middle" class="super true">T</text>
  <text x="325" y="390" text-anchor="middle" class="super false">F</text>
  <text x="525" y="390" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Weakening":{
        svg:`<svg viewBox="-50 50 900 650" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 36px; fill: #2c3e50; }
      .super { font-size: 20px; font-weight: bold; }
      .sub { font-size: 20px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 20px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 16px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <defs>
      <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>
  
  <!-- Case 1: P=T, Q=T -->
  <text x="50" y="80" class="formula">P</text>
  <text x="80" y="80" class="formula">→</text>
  <text x="110" y="80" class="formula">(</text>
  <text x="130" y="80" class="formula">Q</text>
  <text x="160" y="80" class="formula">→</text>
  <text x="190" y="80" class="formula">P</text>
  <text x="220" y="80" class="formula">)</text>
  
  <!-- Superscript truth assignments -->
  <text x="50" y="45" class="super true">T</text>
  <text x="130" y="45" class="super true">T</text>
  <text x="190" y="45" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="175" y="105" class="sub true">T</text>
  <text x="95" y="105" class="sub true">T</text>
  
  <!-- Case 1 explanation box -->
  <rect x="320" y="50" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="75" class="case">Case 1: P=T, Q=T</text>
  <text x="340" y="95" class="explanation">1. P is True, Q is True</text>
  <text x="340" y="113" class="explanation">2. Q → P = T → T = True</text>
  <text x="340" y="131" class="explanation">3. T → T = True</text>
  
  <!-- Case 2: P=T, Q=F -->
  <text x="50" y="200" class="formula">P</text>
  <text x="80" y="200" class="formula">→</text>
  <text x="110" y="200" class="formula">(</text>
  <text x="130" y="200" class="formula">Q</text>
  <text x="160" y="200" class="formula">→</text>
  <text x="190" y="200" class="formula">P</text>
  <text x="220" y="200" class="formula">)</text>
  
  <!-- Superscript truth assignments -->
  <text x="50" y="165" class="super true">T</text>
  <text x="130" y="165" class="super false">F</text>
  <text x="190" y="165" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="175" y="225" class="sub true">T</text>
  <text x="95" y="225" class="sub true">T</text>
  
  <!-- Case 2 explanation box -->
  <rect x="320" y="170" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="195" class="case">Case 2: P=T, Q=F</text>
  <text x="340" y="215" class="explanation">1. P is True, Q is False</text>
  <text x="340" y="233" class="explanation">2. Q → P = F → T = True</text>
  <text x="340" y="251" class="explanation">3. T → T = True</text>
  
  <!-- Case 3: P=F, Q=T -->
  <text x="50" y="320" class="formula">P</text>
  <text x="80" y="320" class="formula">→</text>
  <text x="110" y="320" class="formula">(</text>
  <text x="130" y="320" class="formula">Q</text>
  <text x="160" y="320" class="formula">→</text>
  <text x="190" y="320" class="formula">P</text>
  <text x="220" y="320" class="formula">)</text>
  
  <!-- Superscript truth assignments -->
  <text x="50" y="285" class="super false">F</text>
  <text x="130" y="285" class="super true">T</text>
  <text x="190" y="285" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="175" y="345" class="sub false">F</text>
  <text x="95" y="345" class="sub true">T</text>
  
  <!-- Case 3 explanation box -->
  <rect x="320" y="290" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="315" class="case">Case 3: P=F, Q=T</text>
  <text x="340" y="335" class="explanation">1. P is False, Q is True</text>
  <text x="340" y="353" class="explanation">2. Q → P = T → F = False</text>
  <text x="340" y="371" class="explanation">3. F → F = True</text>
  
  <!-- Case 4: P=F, Q=F -->
  <text x="50" y="440" class="formula">P</text>
  <text x="80" y="440" class="formula">→</text>
  <text x="110" y="440" class="formula">(</text>
  <text x="130" y="440" class="formula">Q</text>
  <text x="160" y="440" class="formula">→</text>
  <text x="190" y="440" class="formula">P</text>
  <text x="220" y="440" class="formula">)</text>
  
  <!-- Superscript truth assignments -->
  <text x="50" y="405" class="super false">F</text>
  <text x="130" y="405" class="super false">F</text>
  <text x="190" y="405" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="175" y="465" class="sub true">T</text>
  <text x="95" y="465" class="sub true">T</text>
  
  <!-- Case 4 explanation box -->
  <rect x="320" y="410" width="220" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="340" y="435" class="case">Case 4: P=F, Q=F</text>
  <text x="340" y="455" class="explanation">1. P is False, Q is False</text>
  <text x="340" y="473" class="explanation">2. Q → P = F → F = True</text>
  <text x="340" y="491" class="explanation">3. F → T = True</text>
  
  <!-- Arrows from explanation boxes to conclusion -->
  <line x1="540" y1="105" x2="580" y2="295" class="arrow"/>
  <line x1="540" y1="225" x2="580" y2="295" class="arrow"/>
  <line x1="540" y1="345" x2="580" y2="295" class="arrow"/>
  <line x1="540" y1="465" x2="580" y2="295" class="arrow"/>
  
  <!-- Conclusion -->
  <rect x="580" y="255" width="200" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="680" y="280" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="680" y="300" text-anchor="middle" class="sub true">All cases = T</text>
  <text x="680" y="320" text-anchor="middle" class="explanation">Formula is always True</text>
  
  <!-- Truth Table -->
  <rect x="50" y="570" width="700" height="120" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="150" y1="570" x2="150" y2="690" class="table-line"/>
  <line x1="250" y1="570" x2="250" y2="690" class="table-line"/>
  <line x1="400" y1="570" x2="400" y2="690" class="table-line"/>
  <line x1="600" y1="570" x2="600" y2="690" class="table-line"/>
  <line x1="50" y1="600" x2="750" y2="600" class="table-line"/>
  <line x1="50" y1="620" x2="750" y2="620" class="table-line"/>
  <line x1="50" y1="640" x2="750" y2="640" class="table-line"/>
  <line x1="50" y1="660" x2="750" y2="660" class="table-line"/>
  
  <!-- Table headers -->
  <text x="100" y="590" text-anchor="middle" class="case">P</text>
  <text x="200" y="590" text-anchor="middle" class="case">Q</text>
  <text x="325" y="590" text-anchor="middle" class="case">(Q→P)</text>
  <text x="500" y="590" text-anchor="middle" class="case">P→(Q→P)</text>
  <text x="675" y="590" text-anchor="middle" class="case">Result</text>
  
  <!-- Row 1: P=T, Q=T -->
  <text x="100" y="615" text-anchor="middle" class="super true">T</text>
  <text x="200" y="615" text-anchor="middle" class="super true">T</text>
  <text x="325" y="615" text-anchor="middle" class="super true">T</text>
  <text x="500" y="615" text-anchor="middle" class="super true">T</text>
  <text x="675" y="615" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 2: P=T, Q=F -->
  <text x="100" y="635" text-anchor="middle" class="super true">T</text>
  <text x="200" y="635" text-anchor="middle" class="super false">F</text>
  <text x="325" y="635" text-anchor="middle" class="super true">T</text>
  <text x="500" y="635" text-anchor="middle" class="super true">T</text>
  <text x="675" y="635" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 3: P=F, Q=T -->
  <text x="100" y="655" text-anchor="middle" class="super false">F</text>
  <text x="200" y="655" text-anchor="middle" class="super true">T</text>
  <text x="325" y="655" text-anchor="middle" class="super false">F</text>
  <text x="500" y="655" text-anchor="middle" class="super true">T</text>
  <text x="675" y="655" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 4: P=F, Q=F -->
  <text x="100" y="675" text-anchor="middle" class="super false">F</text>
  <text x="200" y="675" text-anchor="middle" class="super false">F</text>
  <text x="325" y="675" text-anchor="middle" class="super true">T</text>
  <text x="500" y="675" text-anchor="middle" class="super true">T</text>
  <text x="675" y="675" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Peirce's Law":{
        svg:`<svg viewBox="-50 0 1200 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 36px; fill: #2c3e50; }
      .super { font-size: 20px; font-weight: bold; }
      .sub { font-size: 20px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 20px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 16px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <defs>
      <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>
  
  <!-- Case 1: P=T, Q=T -->
  <text x="50" y="90" class="formula">((</text>
  <text x="80" y="90" class="formula">P</text>
  <text x="110" y="90" class="formula">→</text>
  <text x="140" y="90" class="formula">Q</text>
  <text x="170" y="90" class="formula">)</text>
  <text x="200" y="90" class="formula">→</text>
  <text x="230" y="90" class="formula">P</text>
  <text x="260" y="90" class="formula">)</text>
  <text x="290" y="90" class="formula">→</text>
  <text x="320" y="90" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="80" y="55" class="super true">T</text>
  <text x="140" y="55" class="super true">T</text>
  <text x="230" y="55" class="super true">T</text>
  <text x="320" y="55" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="125" y="115" class="sub true">T</text>
  <text x="215" y="115" class="sub true">T</text>
  <text x="305" y="115" class="sub true">T</text>
  
  <!-- Case 1 explanation box -->
  <rect x="420" y="50" width="250" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="440" y="75" class="case">Case 1: P=T, Q=T</text>
  <text x="440" y="95" class="explanation">1. P → Q = T → T = True</text>
  <text x="440" y="113" class="explanation">2. (P → Q) → P = T → T = True</text>
  <text x="440" y="131" class="explanation">3. ((P → Q) → P) → P = T → T = True</text>
  
  <!-- Case 2: P=T, Q=F -->
  <text x="50" y="210" class="formula">((</text>
  <text x="80" y="210" class="formula">P</text>
  <text x="110" y="210" class="formula">→</text>
  <text x="140" y="210" class="formula">Q</text>
  <text x="170" y="210" class="formula">)</text>
  <text x="200" y="210" class="formula">→</text>
  <text x="230" y="210" class="formula">P</text>
  <text x="260" y="210" class="formula">)</text>
  <text x="290" y="210" class="formula">→</text>
  <text x="320" y="210" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="80" y="175" class="super true">T</text>
  <text x="140" y="175" class="super false">F</text>
  <text x="230" y="175" class="super true">T</text>
  <text x="320" y="175" class="super true">T</text>
  
  <!-- Subscript intermediate results -->
  <text x="125" y="235" class="sub false">F</text>
  <text x="215" y="235" class="sub true">T</text>
  <text x="305" y="235" class="sub true">T</text>
  
  <!-- Case 2 explanation box -->
  <rect x="420" y="170" width="250" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="440" y="195" class="case">Case 2: P=T, Q=F</text>
  <text x="440" y="215" class="explanation">1. P → Q = T → F = False</text>
  <text x="440" y="233" class="explanation">2. (P → Q) → P = F → T = True</text>
  <text x="440" y="251" class="explanation">3. ((P → Q) → P) → P = T → T = True</text>
  
  <!-- Case 3: P=F, Q=T -->
  <text x="50" y="330" class="formula">((</text>
  <text x="80" y="330" class="formula">P</text>
  <text x="110" y="330" class="formula">→</text>
  <text x="140" y="330" class="formula">Q</text>
  <text x="170" y="330" class="formula">)</text>
  <text x="200" y="330" class="formula">→</text>
  <text x="230" y="330" class="formula">P</text>
  <text x="260" y="330" class="formula">)</text>
  <text x="290" y="330" class="formula">→</text>
  <text x="320" y="330" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="80" y="295" class="super false">F</text>
  <text x="140" y="295" class="super true">T</text>
  <text x="230" y="295" class="super false">F</text>
  <text x="320" y="295" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="125" y="355" class="sub true">T</text>
  <text x="215" y="355" class="sub false">F</text>
  <text x="305" y="355" class="sub true">T</text>
  
  <!-- Case 3 explanation box -->
  <rect x="420" y="290" width="250" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="440" y="315" class="case">Case 3: P=F, Q=T</text>
  <text x="440" y="335" class="explanation">1. P → Q = F → T = True</text>
  <text x="440" y="353" class="explanation">2. (P → Q) → P = T → F = False</text>
  <text x="440" y="371" class="explanation">3. ((P → Q) → P) → P = F → F = True</text>
  
  <!-- Case 4: P=F, Q=F -->
  <text x="50" y="450" class="formula">((</text>
  <text x="80" y="450" class="formula">P</text>
  <text x="110" y="450" class="formula">→</text>
  <text x="140" y="450" class="formula">Q</text>
  <text x="170" y="450" class="formula">)</text>
  <text x="200" y="450" class="formula">→</text>
  <text x="230" y="450" class="formula">P</text>
  <text x="260" y="450" class="formula">)</text>
  <text x="290" y="450" class="formula">→</text>
  <text x="320" y="450" class="formula">P</text>
  
  <!-- Superscript truth assignments -->
  <text x="80" y="415" class="super false">F</text>
  <text x="140" y="415" class="super false">F</text>
  <text x="230" y="415" class="super false">F</text>
  <text x="320" y="415" class="super false">F</text>
  
  <!-- Subscript intermediate results -->
  <text x="125" y="475" class="sub true">T</text>
  <text x="215" y="475" class="sub false">F</text>
  <text x="305" y="475" class="sub true">T</text>
  
  <!-- Case 4 explanation box -->
  <rect x="420" y="410" width="250" height="110" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="440" y="435" class="case">Case 4: P=F, Q=F</text>
  <text x="440" y="455" class="explanation">1. P → Q = F → F = True</text>
  <text x="440" y="473" class="explanation">2. (P → Q) → P = T → F = False</text>
  <text x="440" y="491" class="explanation">3. ((P → Q) → P) → P = F → F = True</text>
  
  <!-- Arrows from explanation boxes to conclusion -->
  <line x1="670" y1="105" x2="720" y2="295" class="arrow"/>
  <line x1="670" y1="225" x2="720" y2="295" class="arrow"/>
  <line x1="670" y1="345" x2="720" y2="295" class="arrow"/>
  <line x1="670" y1="465" x2="720" y2="295" class="arrow"/>
  
  <!-- Conclusion -->
  <rect x="580" y="255" width="200" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="680" y="280" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="680" y="300" text-anchor="middle" class="sub true">All cases = T</text>
  <text x="680" y="320" text-anchor="middle" class="explanation">Peirce's Law</text>
  
  <!-- Truth Table -->
  <rect x="50" y="570" width="700" height="120" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="150" y1="570" x2="150" y2="690" class="table-line"/>
  <line x1="250" y1="570" x2="250" y2="690" class="table-line"/>
  <line x1="400" y1="570" x2="400" y2="690" class="table-line"/>
  <line x1="550" y1="570" x2="550" y2="690" class="table-line"/>
  <line x1="50" y1="600" x2="750" y2="600" class="table-line"/>
  <line x1="50" y1="620" x2="750" y2="620" class="table-line"/>
  <line x1="50" y1="640" x2="750" y2="640" class="table-line"/>
  <line x1="50" y1="660" x2="750" y2="660" class="table-line"/>
  
  <!-- Table headers -->
  <text x="100" y="590" text-anchor="middle" class="case">P</text>
  <text x="200" y="590" text-anchor="middle" class="case">Q</text>
  <text x="325" y="590" text-anchor="middle" class="case">(P→Q)</text>
  <text x="475" y="590" text-anchor="middle" class="case">((P→Q)→P)</text>
  <text x="625" y="590" text-anchor="middle" class="case">Result</text>
  
  <!-- Row 1: P=T, Q=T -->
  <text x="100" y="615" text-anchor="middle" class="super true">T</text>
  <text x="200" y="615" text-anchor="middle" class="super true">T</text>
  <text x="325" y="615" text-anchor="middle" class="super true">T</text>
  <text x="475" y="615" text-anchor="middle" class="super true">T</text>
  <text x="625" y="615" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 2: P=T, Q=F -->
  <text x="100" y="635" text-anchor="middle" class="super true">T</text>
  <text x="200" y="635" text-anchor="middle" class="super false">F</text>
  <text x="325" y="635" text-anchor="middle" class="super false">F</text>
  <text x="475" y="635" text-anchor="middle" class="super true">T</text>
  <text x="625" y="635" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 3: P=F, Q=T -->
  <text x="100" y="655" text-anchor="middle" class="super false">F</text>
  <text x="200" y="655" text-anchor="middle" class="super true">T</text>
  <text x="325" y="655" text-anchor="middle" class="super true">T</text>
  <text x="475" y="655" text-anchor="middle" class="super false">F</text>
  <text x="625" y="655" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 4: P=F, Q=F -->
  <text x="100" y="675" text-anchor="middle" class="super false">F</text>
  <text x="200" y="675" text-anchor="middle" class="super false">F</text>
  <text x="325" y="675" text-anchor="middle" class="super true">T</text>
  <text x="475" y="675" text-anchor="middle" class="super false">F</text>
  <text x="625" y="675" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Self-Contradiction Implication":{
        svg:`<svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 36px; fill: #2c3e50; }
      .super { font-size: 20px; font-weight: bold; }
      .sub { font-size: 20px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 20px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 16px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>
  
  <!-- Formula with truth values above - Case 1 -->
  <text x="40" y="100" class="formula">(</text>
  <text x="60" y="100" class="formula">P</text>
  <text x="100" y="100" class="formula">→</text>
  <text x="140" y="100" class="formula">¬</text>
  <text x="170" y="100" class="formula">P</text>
  <text x="210" y="100" class="formula">)</text>
  <text x="250" y="100" class="formula">→</text>
  <text x="290" y="100" class="formula">¬</text>
  <text x="320" y="100" class="formula">P</text>
  
  <!-- Superscript truth assignments - Case 1 -->
  <text x="60" y="65" class="super true">T</text>
  <text x="170" y="65" class="super false">F</text>
  <text x="320" y="65" class="super false">F</text>
  
  <!-- Subscript intermediate results - Case 1 -->
  <text x="120" y="125" class="sub false">F</text>
  <text x="270" y="125" class="sub true">T</text>
  
  <!-- Case 1 explanation box -->
  <rect x="420" y="40" width="280" height="120" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="440" y="65" class="case">Case 1: P = True</text>
  <text x="440" y="85" class="explanation">1. P = T, ¬P = F</text>
  <text x="440" y="103" class="explanation">2. T → F = F</text>
  <text x="440" y="121" class="explanation">3. F → F = T</text>
  <text x="440" y="139" class="explanation">4. Result: True</text>
  
  <!-- Formula with truth values above - Case 2 -->
  <text x="40" y="220" class="formula">(</text>
  <text x="60" y="220" class="formula">P</text>
  <text x="100" y="220" class="formula">→</text>
  <text x="140" y="220" class="formula">¬</text>
  <text x="170" y="220" class="formula">P</text>
  <text x="210" y="220" class="formula">)</text>
  <text x="250" y="220" class="formula">→</text>
  <text x="290" y="220" class="formula">¬</text>
  <text x="320" y="220" class="formula">P</text>
  
  <!-- Superscript truth assignments - Case 2 -->
  <text x="60" y="185" class="super false">F</text>
  <text x="170" y="185" class="super true">T</text>
  <text x="320" y="185" class="super true">T</text>
  
  <!-- Subscript intermediate results - Case 2 -->
  <text x="120" y="245" class="sub true">T</text>
  <text x="270" y="245" class="sub true">T</text>
  
  <!-- Case 2 explanation box -->
  <rect x="420" y="170" width="280" height="120" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="440" y="195" class="case">Case 2: P = False</text>
  <text x="440" y="215" class="explanation">1. P = F, ¬P = T</text>
  <text x="440" y="233" class="explanation">2. F → T = T</text>
  <text x="440" y="251" class="explanation">3. T → T = T</text>
  <text x="440" y="269" class="explanation">4. Result: True</text>
  
  <!-- Arrows from explanation boxes to conclusion -->
  <line x1="700" y1="100" x2="740" y2="160" class="arrow"/>
  <line x1="700" y1="230" x2="740" y2="160" class="arrow"/>
  
  <!-- Conclusion -->
  <rect x="720" y="120" width="150" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="795" y="145" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="795" y="165" text-anchor="middle" class="sub true">T ∧ T = T</text>
  <text x="795" y="185" text-anchor="middle" class="explanation">Always True</text>
  
  <!-- Truth Table (FIXED: Wider last column) -->
  <rect x="50" y="310" width="500" height="80" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines (adjusted column widths) -->
  <line x1="120" y1="310" x2="120" y2="390" class="table-line"/>  <!-- P -->
  <line x1="220" y1="310" x2="220" y2="390" class="table-line"/>  <!-- ¬P -->
  <line x1="320" y1="310" x2="320" y2="390" class="table-line"/>  <!-- P→¬P -->
  <line x1="50" y1="340" x2="550" y2="340" class="table-line"/>   <!-- Horizontal -->
  <line x1="50" y1="365" x2="550" y2="365" class="table-line"/>   <!-- Horizontal -->
  
  <!-- Table headers (centered in wider columns) -->
  <text x="85" y="330" text-anchor="middle" class="case">P</text>
  <text x="170" y="330" text-anchor="middle" class="case">¬P</text>
  <text x="270" y="330" text-anchor="middle" class="case">P → ¬P</text>
  <text x="435" y="330" text-anchor="middle" class="case">(P → ¬P) → ¬P</text>  <!-- Centered in wide col -->
  
  <!-- Row 1 -->
  <text x="85" y="355" text-anchor="middle" class="super true">T</text>
  <text x="170" y="355" text-anchor="middle" class="super false">F</text>
  <text x="270" y="355" text-anchor="middle" class="super false">F</text>
  <text x="435" y="355" text-anchor="middle" class="super true">T</text>
  
  <!-- Row 2 -->
  <text x="85" y="380" text-anchor="middle" class="super false">F</text>
  <text x="170" y="380" text-anchor="middle" class="super true">T</text>
  <text x="270" y="380" text-anchor="middle" class="super true">T</text>
  <text x="435" y="380" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Disjunctive Weakening":{
        svg:`<svg style="background-color: white;" viewBox="-50 -50 900 650" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
      .super { font-size: 16px; font-weight: bold; }
      .sub { font-size: 16px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 18px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>

  <!-- Case 1: P=T, Q=T -->
  <text x="30" y="60" class="formula">P</text>
  <text x="60" y="60" class="formula">∨</text>
  <text x="90" y="60" class="formula">(</text>
  <text x="105" y="60" class="formula">P</text>
  <text x="125" y="60" class="formula">→</text>
  <text x="150" y="60" class="formula">Q</text>
  <text x="170" y="60" class="formula">)</text>
  
  <!-- Truth values -->
  <text x="30" y="35" class="super true">T</text>
  <text x="105" y="35" class="super true">T</text>
  <text x="150" y="35" class="super true">T</text>
  
  <!-- Intermediate results -->
  <text x="137" y="80" class="sub true">T</text>
  <text x="75" y="80" class="sub true">T</text>

  <!-- Case 2: P=T, Q=F -->
  <text x="30" y="150" class="formula">P</text>
  <text x="60" y="150" class="formula">∨</text>
  <text x="90" y="150" class="formula">(</text>
  <text x="105" y="150" class="formula">P</text>
  <text x="125" y="150" class="formula">→</text>
  <text x="150" y="150" class="formula">Q</text>
  <text x="170" y="150" class="formula">)</text>
  
  <text x="30" y="125" class="super true">T</text>
  <text x="105" y="125" class="super true">T</text>
  <text x="150" y="125" class="super false">F</text>
  
  <text x="137" y="170" class="sub false">F</text>
  <text x="75" y="170" class="sub true">T</text>

  <!-- Case 3: P=F, Q=T -->
  <text x="30" y="240" class="formula">P</text>
  <text x="60" y="240" class="formula">∨</text>
  <text x="90" y="240" class="formula">(</text>
  <text x="105" y="240" class="formula">P</text>
  <text x="125" y="240" class="formula">→</text>
  <text x="150" y="240" class="formula">Q</text>
  <text x="170" y="240" class="formula">)</text>
  
  <text x="30" y="215" class="super false">F</text>
  <text x="105" y="215" class="super false">F</text>
  <text x="150" y="215" class="super true">T</text>
  
  <text x="137" y="260" class="sub true">T</text>
  <text x="75" y="260" class="sub true">T</text>

  <!-- Case 4: P=F, Q=F -->
  <text x="30" y="330" class="formula">P</text>
  <text x="60" y="330" class="formula">∨</text>
  <text x="90" y="330" class="formula">(</text>
  <text x="105" y="330" class="formula">P</text>
  <text x="125" y="330" class="formula">→</text>
  <text x="150" y="330" class="formula">Q</text>
  <text x="170" y="330" class="formula">)</text>
  
  <text x="30" y="305" class="super false">F</text>
  <text x="105" y="305" class="super false">F</text>
  <text x="150" y="305" class="super false">F</text>
  
  <text x="137" y="350" class="sub true">T</text>
  <text x="75" y="350" class="sub true">T</text>

  <!-- Explanation boxes -->
  <rect x="250" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="270" y="40" class="case">Case 1: P=T, Q=T</text>
  <text x="270" y="58" class="explanation">1. T → T = T</text>
  <text x="270" y="74" class="explanation">2. T ∨ T = T</text>
  <text x="270" y="90" class="explanation">3. Result: True</text>
  
  <rect x="250" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="270" y="130" class="case">Case 2: P=T, Q=F</text>
  <text x="270" y="148" class="explanation">1. T → F = F</text>
  <text x="270" y="164" class="explanation">2. T ∨ F = T</text>
  <text x="270" y="180" class="explanation">3. Result: True</text>
  
  <rect x="250" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="270" y="220" class="case">Case 3: P=F, Q=T</text>
  <text x="270" y="238" class="explanation">1. F → T = T</text>
  <text x="270" y="254" class="explanation">2. F ∨ T = T</text>
  <text x="270" y="270" class="explanation">3. Result: True</text>
  
  <rect x="250" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="270" y="310" class="case">Case 4: P=F, Q=F</text>
  <text x="270" y="328" class="explanation">1. F → F = T</text>
  <text x="270" y="344" class="explanation">2. F ∨ T = T</text>
  <text x="270" y="360" class="explanation">3. Result: True</text>

  <!-- Arrows to conclusion -->
  <line x1="500" y1="60" x2="600" y2="185" class="arrow"/>
  <line x1="500" y1="150" x2="600" y2="185" class="arrow"/>
  <line x1="500" y1="240" x2="600" y2="185" class="arrow"/>
  <line x1="500" y1="330" x2="600" y2="185" class="arrow"/>

  <!-- Conclusion -->
  <rect x="600" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="710" y="170" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="710" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
  <text x="710" y="210" text-anchor="middle" class="explanation">Always True</text>

  <!-- Truth Table (FIXED: Removed redundant column) -->
  <rect x="50" y="390" width="450" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="130" y1="390" x2="130" y2="570" class="table-line"/>
  <line x1="210" y1="390" x2="210" y2="570" class="table-line"/>
  <line x1="320" y1="390" x2="320" y2="570" class="table-line"/>
  <line x1="50" y1="420" x2="500" y2="420" class="table-line"/>
  <line x1="50" y1="450" x2="500" y2="450" class="table-line"/>
  <line x1="50" y1="480" x2="500" y2="480" class="table-line"/>
  <line x1="50" y1="510" x2="500" y2="510" class="table-line"/>
  <line x1="50" y1="540" x2="500" y2="540" class="table-line"/>
  
  <!-- Table headers -->
  <text x="90" y="410" text-anchor="middle" class="case">P</text>
  <text x="170" y="410" text-anchor="middle" class="case">Q</text>
  <text x="265" y="410" text-anchor="middle" class="case">P → Q</text>
  <text x="385" y="410" text-anchor="middle" class="case">P ∨ (P → Q)</text>
  
  <!-- Rows -->
  <text x="90" y="440" text-anchor="middle" class="super true">T</text>
  <text x="170" y="440" text-anchor="middle" class="super true">T</text>
  <text x="265" y="440" text-anchor="middle" class="super true">T</text>
  <text x="385" y="440" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="470" text-anchor="middle" class="super true">T</text>
  <text x="170" y="470" text-anchor="middle" class="super false">F</text>
  <text x="265" y="470" text-anchor="middle" class="super false">F</text>
  <text x="385" y="470" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="500" text-anchor="middle" class="super false">F</text>
  <text x="170" y="500" text-anchor="middle" class="super true">T</text>
  <text x="265" y="500" text-anchor="middle" class="super true">T</text>
  <text x="385" y="500" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="530" text-anchor="middle" class="super false">F</text>
  <text x="170" y="530" text-anchor="middle" class="super false">F</text>
  <text x="265" y="530" text-anchor="middle" class="super true">T</text>
  <text x="385" y="530" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Implication Disjunction":{
        svg:`<svg style="background-color: white;" viewBox="-50 -50 900 650" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
      .super { font-size: 16px; font-weight: bold; }
      .sub { font-size: 16px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 18px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>

  <!-- Case 1: P=T, Q=T -->
  <text x="30" y="60" class="formula">(</text>
  <text x="45" y="60" class="formula">P</text>
  <text x="65" y="60" class="formula">→</text>
  <text x="85" y="60" class="formula">Q</text>
  <text x="105" y="60" class="formula">)</text>
  <text x="125" y="60" class="formula">∨</text>
  <text x="145" y="60" class="formula">(</text>
  <text x="160" y="60" class="formula">Q</text>
  <text x="180" y="60" class="formula">→</text>
  <text x="200" y="60" class="formula">P</text>
  <text x="220" y="60" class="formula">)</text>
  
  <!-- Truth values -->
  <text x="45" y="35" class="super true">T</text>
  <text x="85" y="35" class="super true">T</text>
  <text x="160" y="35" class="super true">T</text>
  <text x="200" y="35" class="super true">T</text>
  
  <!-- Intermediate results -->
  <text x="75" y="80" class="sub true">T</text>
  <text x="190" y="80" class="sub true">T</text>
  <text x="135" y="80" class="sub true">T</text>

  <!-- Case 2: P=T, Q=F -->
  <text x="30" y="150" class="formula">(</text>
  <text x="45" y="150" class="formula">P</text>
  <text x="65" y="150" class="formula">→</text>
  <text x="85" y="150" class="formula">Q</text>
  <text x="105" y="150" class="formula">)</text>
  <text x="125" y="150" class="formula">∨</text>
  <text x="145" y="150" class="formula">(</text>
  <text x="160" y="150" class="formula">Q</text>
  <text x="180" y="150" class="formula">→</text>
  <text x="200" y="150" class="formula">P</text>
  <text x="220" y="150" class="formula">)</text>
  
  <text x="45" y="125" class="super true">T</text>
  <text x="85" y="125" class="super false">F</text>
  <text x="160" y="125" class="super false">F</text>
  <text x="200" y="125" class="super true">T</text>
  
  <text x="75" y="170" class="sub false">F</text>
  <text x="190" y="170" class="sub true">T</text>
  <text x="135" y="170" class="sub true">T</text>

  <!-- Case 3: P=F, Q=T -->
  <text x="30" y="240" class="formula">(</text>
  <text x="45" y="240" class="formula">P</text>
  <text x="65" y="240" class="formula">→</text>
  <text x="85" y="240" class="formula">Q</text>
  <text x="105" y="240" class="formula">)</text>
  <text x="125" y="240" class="formula">∨</text>
  <text x="145" y="240" class="formula">(</text>
  <text x="160" y="240" class="formula">Q</text>
  <text x="180" y="240" class="formula">→</text>
  <text x="200" y="240" class="formula">P</text>
  <text x="220" y="240" class="formula">)</text>
  
  <text x="45" y="215" class="super false">F</text>
  <text x="85" y="215" class="super true">T</text>
  <text x="160" y="215" class="super true">T</text>
  <text x="200" y="215" class="super false">F</text>
  
  <text x="75" y="260" class="sub true">T</text>
  <text x="190" y="260" class="sub false">F</text>
  <text x="135" y="260" class="sub true">T</text>

  <!-- Case 4: P=F, Q=F -->
  <text x="30" y="330" class="formula">(</text>
  <text x="45" y="330" class="formula">P</text>
  <text x="65" y="330" class="formula">→</text>
  <text x="85" y="330" class="formula">Q</text>
  <text x="105" y="330" class="formula">)</text>
  <text x="125" y="330" class="formula">∨</text>
  <text x="145" y="330" class="formula">(</text>
  <text x="160" y="330" class="formula">Q</text>
  <text x="180" y="330" class="formula">→</text>
  <text x="200" y="330" class="formula">P</text>
  <text x="220" y="330" class="formula">)</text>
  
  <text x="45" y="305" class="super false">F</text>
  <text x="85" y="305" class="super false">F</text>
  <text x="160" y="305" class="super false">F</text>
  <text x="200" y="305" class="super false">F</text>
  
  <text x="75" y="350" class="sub true">T</text>
  <text x="190" y="350" class="sub true">T</text>
  <text x="135" y="350" class="sub true">T</text>

  <!-- Explanation boxes -->
  <rect x="280" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="300" y="40" class="case">Case 1: P=T, Q=T</text>
  <text x="300" y="58" class="explanation">1. T→T = T, T→T = T</text>
  <text x="300" y="74" class="explanation">2. T ∨ T = T</text>
  <text x="300" y="90" class="explanation">3. Result: True</text>
  
  <rect x="280" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="300" y="130" class="case">Case 2: P=T, Q=F</text>
  <text x="300" y="148" class="explanation">1. T→F = F, F→T = T</text>
  <text x="300" y="164" class="explanation">2. F ∨ T = T</text>
  <text x="300" y="180" class="explanation">3. Result: True</text>
  
  <rect x="280" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="300" y="220" class="case">Case 3: P=F, Q=T</text>
  <text x="300" y="238" class="explanation">1. F→T = T, T→F = F</text>
  <text x="300" y="254" class="explanation">2. T ∨ F = T</text>
  <text x="300" y="270" class="explanation">3. Result: True</text>
  
  <rect x="280" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="300" y="310" class="case">Case 4: P=F, Q=F</text>
  <text x="300" y="328" class="explanation">1. F→F = T, F→F = T</text>
  <text x="300" y="344" class="explanation">2. T ∨ T = T</text>
  <text x="300" y="360" class="explanation">3. Result: True</text>

  <!-- Arrows to conclusion -->
  <line x1="530" y1="60" x2="600" y2="185" class="arrow"/>
  <line x1="530" y1="150" x2="600" y2="185" class="arrow"/>
  <line x1="530" y1="240" x2="600" y2="185" class="arrow"/>
  <line x1="530" y1="330" x2="600" y2="185" class="arrow"/>

  <!-- Conclusion -->
  <rect x="600" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="710" y="170" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="710" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
  <text x="710" y="210" text-anchor="middle" class="explanation">Always True</text>

  <!-- Truth Table -->
  <rect x="50" y="390" width="500" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="130" y1="390" x2="130" y2="570" class="table-line"/>
  <line x1="210" y1="390" x2="210" y2="570" class="table-line"/>
  <line x1="320" y1="390" x2="320" y2="570" class="table-line"/>
  <line x1="420" y1="390" x2="420" y2="570" class="table-line"/>
  <line x1="50" y1="420" x2="550" y2="420" class="table-line"/>
  <line x1="50" y1="450" x2="550" y2="450" class="table-line"/>
  <line x1="50" y1="480" x2="550" y2="480" class="table-line"/>
  <line x1="50" y1="510" x2="550" y2="510" class="table-line"/>
  <line x1="50" y1="540" x2="550" y2="540" class="table-line"/>
  
  <!-- Table headers -->
  <text x="90" y="410" text-anchor="middle" class="case">P</text>
  <text x="170" y="410" text-anchor="middle" class="case">Q</text>
  <text x="265" y="410" text-anchor="middle" class="case">P → Q</text>
  <text x="370" y="410" text-anchor="middle" class="case">Q → P</text>
  <text x="485" y="410" text-anchor="middle" class="case">(P→Q)∨(Q→P)</text>
  
  <!-- Rows -->
  <text x="90" y="440" text-anchor="middle" class="super true">T</text>
  <text x="170" y="440" text-anchor="middle" class="super true">T</text>
  <text x="265" y="440" text-anchor="middle" class="super true">T</text>
  <text x="370" y="440" text-anchor="middle" class="super true">T</text>
  <text x="485" y="440" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="470" text-anchor="middle" class="super true">T</text>
  <text x="170" y="470" text-anchor="middle" class="super false">F</text>
  <text x="265" y="470" text-anchor="middle" class="super false">F</text>
  <text x="370" y="470" text-anchor="middle" class="super true">T</text>
  <text x="485" y="470" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="500" text-anchor="middle" class="super false">F</text>
  <text x="170" y="500" text-anchor="middle" class="super true">T</text>
  <text x="265" y="500" text-anchor="middle" class="super true">T</text>
  <text x="370" y="500" text-anchor="middle" class="super false">F</text>
  <text x="485" y="500" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="530" text-anchor="middle" class="super false">F</text>
  <text x="170" y="530" text-anchor="middle" class="super false">F</text>
  <text x="265" y="530" text-anchor="middle" class="super true">T</text>
  <text x="370" y="530" text-anchor="middle" class="super true">T</text>
  <text x="485" y="530" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Conjunction Introduction Form":{
        svg:`<svg style="background-color: white;" viewBox="-50 -50 900 650" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
      .super { font-size: 16px; font-weight: bold; }
      .sub { font-size: 16px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 18px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>

  <!-- Case 1: P=T, Q=T -->
  <text x="30" y="60" class="formula">P</text>
  <text x="60" y="60" class="formula">→</text>
  <text x="90" y="60" class="formula">(</text>
  <text x="105" y="60" class="formula">Q</text>
  <text x="130" y="60" class="formula">→</text>
  <text x="155" y="60" class="formula">(</text>
  <text x="170" y="60" class="formula">P</text>
  <text x="190" y="60" class="formula">∧</text>
  <text x="210" y="60" class="formula">Q</text>
  <text x="230" y="60" class="formula">)</text>
  <text x="245" y="60" class="formula">)</text>
  
  <!-- Truth values -->
  <text x="30" y="35" class="super true">T</text>
  <text x="105" y="35" class="super true">T</text>
  <text x="170" y="35" class="super true">T</text>
  <text x="210" y="35" class="super true">T</text>
  
  <!-- Intermediate results -->
  <text x="195" y="80" class="sub true">T</text>
  <text x="142" y="80" class="sub true">T</text>
  <text x="75" y="80" class="sub true">T</text>

  <!-- Case 2: P=T, Q=F -->
  <text x="30" y="150" class="formula">P</text>
  <text x="60" y="150" class="formula">→</text>
  <text x="90" y="150" class="formula">(</text>
  <text x="105" y="150" class="formula">Q</text>
  <text x="130" y="150" class="formula">→</text>
  <text x="155" y="150" class="formula">(</text>
  <text x="170" y="150" class="formula">P</text>
  <text x="190" y="150" class="formula">∧</text>
  <text x="210" y="150" class="formula">Q</text>
  <text x="230" y="150" class="formula">)</text>
  <text x="245" y="150" class="formula">)</text>
  
  <text x="30" y="125" class="super true">T</text>
  <text x="105" y="125" class="super false">F</text>
  <text x="170" y="125" class="super true">T</text>
  <text x="210" y="125" class="super false">F</text>
  
  <text x="195" y="170" class="sub false">F</text>
  <text x="142" y="170" class="sub true">T</text>
  <text x="75" y="170" class="sub true">T</text>

  <!-- Case 3: P=F, Q=T -->
  <text x="30" y="240" class="formula">P</text>
  <text x="60" y="240" class="formula">→</text>
  <text x="90" y="240" class="formula">(</text>
  <text x="105" y="240" class="formula">Q</text>
  <text x="130" y="240" class="formula">→</text>
  <text x="155" y="240" class="formula">(</text>
  <text x="170" y="240" class="formula">P</text>
  <text x="190" y="240" class="formula">∧</text>
  <text x="210" y="240" class="formula">Q</text>
  <text x="230" y="240" class="formula">)</text>
  <text x="245" y="240" class="formula">)</text>
  
  <text x="30" y="215" class="super false">F</text>
  <text x="105" y="215" class="super true">T</text>
  <text x="170" y="215" class="super false">F</text>
  <text x="210" y="215" class="super true">T</text>
  
  <text x="195" y="260" class="sub false">F</text>
  <text x="142" y="260" class="sub true">T</text>
  <text x="75" y="260" class="sub true">T</text>

  <!-- Case 4: P=F, Q=F -->
  <text x="30" y="330" class="formula">P</text>
  <text x="60" y="330" class="formula">→</text>
  <text x="90" y="330" class="formula">(</text>
  <text x="105" y="330" class="formula">Q</text>
  <text x="130" y="330" class="formula">→</text>
  <text x="155" y="330" class="formula">(</text>
  <text x="170" y="330" class="formula">P</text>
  <text x="190" y="330" class="formula">∧</text>
  <text x="210" y="330" class="formula">Q</text>
  <text x="230" y="330" class="formula">)</text>
  <text x="245" y="330" class="formula">)</text>
  
  <text x="30" y="305" class="super false">F</text>
  <text x="105" y="305" class="super false">F</text>
  <text x="170" y="305" class="super false">F</text>
  <text x="210" y="305" class="super false">F</text>
  
  <text x="195" y="350" class="sub false">F</text>
  <text x="142" y="350" class="sub true">T</text>
  <text x="75" y="350" class="sub true">T</text>

  <!-- Explanation boxes -->
  <rect x="300" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="40" class="case">Case 1: P=T, Q=T</text>
  <text x="320" y="58" class="explanation">1. T∧T = T</text>
  <text x="320" y="74" class="explanation">2. T→T = T</text>
  <text x="320" y="90" class="explanation">3. T→T = T</text>
  
  <rect x="300" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="130" class="case">Case 2: P=T, Q=F</text>
  <text x="320" y="148" class="explanation">1. T∧F = F</text>
  <text x="320" y="164" class="explanation">2. F→F = T</text>
  <text x="320" y="180" class="explanation">3. T→T = T</text>
  
  <rect x="300" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="220" class="case">Case 3: P=F, Q=T</text>
  <text x="320" y="238" class="explanation">1. F∧T = F</text>
  <text x="320" y="254" class="explanation">2. T→F = F</text>
  <text x="320" y="270" class="explanation">3. F→F = T</text>
  
  <rect x="300" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="310" class="case">Case 4: P=F, Q=F</text>
  <text x="320" y="328" class="explanation">1. F∧F = F</text>
  <text x="320" y="344" class="explanation">2. F→F = T</text>
  <text x="320" y="360" class="explanation">3. F→T = T</text>

  <!-- Arrows to conclusion -->
  <line x1="550" y1="60" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="150" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="240" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="330" x2="600" y2="185" class="arrow"/>

  <!-- Conclusion -->
  <rect x="600" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="710" y="170" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="710" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
  <text x="710" y="210" text-anchor="middle" class="explanation">Always True</text>

  <!-- Truth Table -->
  <rect x="50" y="390" width="550" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="130" y1="390" x2="130" y2="570" class="table-line"/>
  <line x1="210" y1="390" x2="210" y2="570" class="table-line"/>
  <line x1="310" y1="390" x2="310" y2="570" class="table-line"/>
  <line x1="410" y1="390" x2="410" y2="570" class="table-line"/>
  <line x1="50" y1="420" x2="600" y2="420" class="table-line"/>
  <line x1="50" y1="450" x2="600" y2="450" class="table-line"/>
  <line x1="50" y1="480" x2="600" y2="480" class="table-line"/>
  <line x1="50" y1="510" x2="600" y2="510" class="table-line"/>
  <line x1="50" y1="540" x2="600" y2="540" class="table-line"/>
  
  <!-- Table headers -->
  <text x="90" y="410" text-anchor="middle" class="case">P</text>
  <text x="170" y="410" text-anchor="middle" class="case">Q</text>
  <text x="260" y="410" text-anchor="middle" class="case">P ∧ Q</text>
  <text x="360" y="410" text-anchor="middle" class="case">Q → (P ∧ Q)</text>
  <text x="505" y="410" text-anchor="middle" class="case">P → (Q → (P ∧ Q))</text>
  
  <!-- Rows -->
  <text x="90" y="440" text-anchor="middle" class="super true">T</text>
  <text x="170" y="440" text-anchor="middle" class="super true">T</text>
  <text x="260" y="440" text-anchor="middle" class="super true">T</text>
  <text x="360" y="440" text-anchor="middle" class="super true">T</text>
  <text x="505" y="440" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="470" text-anchor="middle" class="super true">T</text>
  <text x="170" y="470" text-anchor="middle" class="super false">F</text>
  <text x="260" y="470" text-anchor="middle" class="super false">F</text>
  <text x="360" y="470" text-anchor="middle" class="super true">T</text>
  <text x="505" y="470" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="500" text-anchor="middle" class="super false">F</text>
  <text x="170" y="500" text-anchor="middle" class="super true">T</text>
  <text x="260" y="500" text-anchor="middle" class="super false">F</text>
  <text x="360" y="500" text-anchor="middle" class="super false">F</text>
  <text x="505" y="500" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="530" text-anchor="middle" class="super false">F</text>
  <text x="170" y="530" text-anchor="middle" class="super false">F</text>
  <text x="260" y="530" text-anchor="middle" class="super false">F</text>
  <text x="360" y="530" text-anchor="middle" class="super true">T</text>
  <text x="505" y="530" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Modus Ponens Alternative Form":{
        svg:`<svg style="background-color: white;" viewBox="-50 -50 900 650" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
      .super { font-size: 16px; font-weight: bold; }
      .sub { font-size: 16px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 18px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>

  <!-- Case 1: P=T, Q=T -->
  <text x="30" y="60" class="formula">(</text>
  <text x="45" y="60" class="formula">P</text>
  <text x="65" y="60" class="formula">∧</text>
  <text x="85" y="60" class="formula">(</text>
  <text x="100" y="60" class="formula">P</text>
  <text x="120" y="60" class="formula">→</text>
  <text x="140" y="60" class="formula">Q</text>
  <text x="160" y="60" class="formula">)</text>
  <text x="175" y="60" class="formula">)</text>
  <text x="195" y="60" class="formula">→</text>
  <text x="215" y="60" class="formula">Q</text>
  
  <!-- Truth values -->
  <text x="45" y="35" class="super true">T</text>
  <text x="100" y="35" class="super true">T</text>
  <text x="140" y="35" class="super true">T</text>
  <text x="215" y="35" class="super true">T</text>
  
  <!-- Intermediate results -->
  <text x="130" y="80" class="sub true">T</text>
  <text x="80" y="80" class="sub true">T</text>
  <text x="205" y="80" class="sub true">T</text>

  <!-- Case 2: P=T, Q=F -->
  <text x="30" y="150" class="formula">(</text>
  <text x="45" y="150" class="formula">P</text>
  <text x="65" y="150" class="formula">∧</text>
  <text x="85" y="150" class="formula">(</text>
  <text x="100" y="150" class="formula">P</text>
  <text x="120" y="150" class="formula">→</text>
  <text x="140" y="150" class="formula">Q</text>
  <text x="160" y="150" class="formula">)</text>
  <text x="175" y="150" class="formula">)</text>
  <text x="195" y="150" class="formula">→</text>
  <text x="215" y="150" class="formula">Q</text>
  
  <text x="45" y="125" class="super true">T</text>
  <text x="100" y="125" class="super true">T</text>
  <text x="140" y="125" class="super false">F</text>
  <text x="215" y="125" class="super false">F</text>
  
  <text x="130" y="170" class="sub false">F</text>
  <text x="80" y="170" class="sub false">F</text>
  <text x="205" y="170" class="sub true">T</text>

  <!-- Case 3: P=F, Q=T -->
  <text x="30" y="240" class="formula">(</text>
  <text x="45" y="240" class="formula">P</text>
  <text x="65" y="240" class="formula">∧</text>
  <text x="85" y="240" class="formula">(</text>
  <text x="100" y="240" class="formula">P</text>
  <text x="120" y="240" class="formula">→</text>
  <text x="140" y="240" class="formula">Q</text>
  <text x="160" y="240" class="formula">)</text>
  <text x="175" y="240" class="formula">)</text>
  <text x="195" y="240" class="formula">→</text>
  <text x="215" y="240" class="formula">Q</text>
  
  <text x="45" y="215" class="super false">F</text>
  <text x="100" y="215" class="super false">F</text>
  <text x="140" y="215" class="super true">T</text>
  <text x="215" y="215" class="super true">T</text>
  
  <text x="130" y="260" class="sub true">T</text>
  <text x="80" y="260" class="sub false">F</text>
  <text x="205" y="260" class="sub true">T</text>

  <!-- Case 4: P=F, Q=F -->
  <text x="30" y="330" class="formula">(</text>
  <text x="45" y="330" class="formula">P</text>
  <text x="65" y="330" class="formula">∧</text>
  <text x="85" y="330" class="formula">(</text>
  <text x="100" y="330" class="formula">P</text>
  <text x="120" y="330" class="formula">→</text>
  <text x="140" y="330" class="formula">Q</text>
  <text x="160" y="330" class="formula">)</text>
  <text x="175" y="330" class="formula">)</text>
  <text x="195" y="330" class="formula">→</text>
  <text x="215" y="330" class="formula">Q</text>
  
  <text x="45" y="305" class="super false">F</text>
  <text x="100" y="305" class="super false">F</text>
  <text x="140" y="305" class="super false">F</text>
  <text x="215" y="305" class="super false">F</text>
  
  <text x="130" y="350" class="sub true">T</text>
  <text x="80" y="350" class="sub false">F</text>
  <text x="205" y="350" class="sub true">T</text>

  <!-- Explanation boxes -->
  <rect x="280" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="300" y="40" class="case">Case 1: P=T, Q=T</text>
  <text x="300" y="58" class="explanation">1. T→T = T</text>
  <text x="300" y="74" class="explanation">2. T∧T = T</text>
  <text x="300" y="90" class="explanation">3. T→T = T</text>
  
  <rect x="280" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="300" y="130" class="case">Case 2: P=T, Q=F</text>
  <text x="300" y="148" class="explanation">1. T→F = F</text>
  <text x="300" y="164" class="explanation">2. T∧F = F</text>
  <text x="300" y="180" class="explanation">3. F→F = T</text>
  
  <rect x="280" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="300" y="220" class="case">Case 3: P=F, Q=T</text>
  <text x="300" y="238" class="explanation">1. F→T = T</text>
  <text x="300" y="254" class="explanation">2. F∧T = F</text>
  <text x="300" y="270" class="explanation">3. F→T = T</text>
  
  <rect x="280" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="300" y="310" class="case">Case 4: P=F, Q=F</text>
  <text x="300" y="328" class="explanation">1. F→F = T</text>
  <text x="300" y="344" class="explanation">2. F∧T = F</text>
  <text x="300" y="360" class="explanation">3. F→F = T</text>

  <!-- Arrows to conclusion -->
  <line x1="530" y1="60" x2="600" y2="185" class="arrow"/>
  <line x1="530" y1="150" x2="600" y2="185" class="arrow"/>
  <line x1="530" y1="240" x2="600" y2="185" class="arrow"/>
  <line x1="530" y1="330" x2="600" y2="185" class="arrow"/>

  <!-- Conclusion -->
  <rect x="600" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="710" y="170" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="710" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
  <text x="710" y="210" text-anchor="middle" class="explanation">Modus Ponens</text>

  <!-- Truth Table -->
  <rect x="50" y="390" width="550" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="130" y1="390" x2="130" y2="570" class="table-line"/>
  <line x1="210" y1="390" x2="210" y2="570" class="table-line"/>
  <line x1="310" y1="390" x2="310" y2="570" class="table-line"/>
  <line x1="410" y1="390" x2="410" y2="570" class="table-line"/>
  <line x1="50" y1="420" x2="600" y2="420" class="table-line"/>
  <line x1="50" y1="450" x2="600" y2="450" class="table-line"/>
  <line x1="50" y1="480" x2="600" y2="480" class="table-line"/>
  <line x1="50" y1="510" x2="600" y2="510" class="table-line"/>
  <line x1="50" y1="540" x2="600" y2="540" class="table-line"/>
  
  <!-- Table headers -->
  <text x="90" y="410" text-anchor="middle" class="case">P</text>
  <text x="170" y="410" text-anchor="middle" class="case">Q</text>
  <text x="260" y="410" text-anchor="middle" class="case">P → Q</text>
  <text x="360" y="410" text-anchor="middle" class="case">P ∧ (P→Q)</text>
  <text x="505" y="410" text-anchor="middle" class="case">(P∧(P→Q))→Q</text>
  
  <!-- Rows -->
  <text x="90" y="440" text-anchor="middle" class="super true">T</text>
  <text x="170" y="440" text-anchor="middle" class="super true">T</text>
  <text x="260" y="440" text-anchor="middle" class="super true">T</text>
  <text x="360" y="440" text-anchor="middle" class="super true">T</text>
  <text x="505" y="440" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="470" text-anchor="middle" class="super true">T</text>
  <text x="170" y="470" text-anchor="middle" class="super false">F</text>
  <text x="260" y="470" text-anchor="middle" class="super false">F</text>
  <text x="360" y="470" text-anchor="middle" class="super false">F</text>
  <text x="505" y="470" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="500" text-anchor="middle" class="super false">F</text>
  <text x="170" y="500" text-anchor="middle" class="super true">T</text>
  <text x="260" y="500" text-anchor="middle" class="super true">T</text>
  <text x="360" y="500" text-anchor="middle" class="super false">F</text>
  <text x="505" y="500" text-anchor="middle" class="super true">T</text>
  
  <text x="90" y="530" text-anchor="middle" class="super false">F</text>
  <text x="170" y="530" text-anchor="middle" class="super false">F</text>
  <text x="260" y="530" text-anchor="middle" class="super true">T</text>
  <text x="360" y="530" text-anchor="middle" class="super false">F</text>
  <text x="505" y="530" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Modus Tollens Form":{
        svg:`<svg style="background-color: white;" viewBox="-50 -50 900 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
      .super { font-size: 16px; font-weight: bold; }
      .sub { font-size: 16px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 18px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>

  <!-- Case 1: P=T, Q=T -->
  <text x="30" y="60" class="formula">(</text>
  <text x="45" y="60" class="formula">¬</text>
  <text x="65" y="60" class="formula">Q</text>
  <text x="85" y="60" class="formula">∧</text>
  <text x="105" y="60" class="formula">(</text>
  <text x="120" y="60" class="formula">P</text>
  <text x="140" y="60" class="formula">→</text>
  <text x="160" y="60" class="formula">Q</text>
  <text x="180" y="60" class="formula">)</text>
  <text x="195" y="60" class="formula">)</text>
  <text x="215" y="60" class="formula">→</text>
  <text x="235" y="60" class="formula">¬</text>
  <text x="255" y="60" class="formula">P</text>
  
  <!-- Truth values -->
  <text x="65" y="35" class="super true">T</text>
  <text x="120" y="35" class="super true">T</text>
  <text x="160" y="35" class="super true">T</text>
  <text x="255" y="35" class="super false">F</text>
  
  <!-- Intermediate results -->
  <text x="70" y="80" class="sub false">F</text>
  <text x="150" y="80" class="sub true">T</text>
  <text x="115" y="80" class="sub false">F</text>
  <text x="225" y="80" class="sub true">T</text>

  <!-- Case 2: P=T, Q=F -->
  <text x="30" y="150" class="formula">(</text>
  <text x="45" y="150" class="formula">¬</text>
  <text x="65" y="150" class="formula">Q</text>
  <text x="85" y="150" class="formula">∧</text>
  <text x="105" y="150" class="formula">(</text>
  <text x="120" y="150" class="formula">P</text>
  <text x="140" y="150" class="formula">→</text>
  <text x="160" y="150" class="formula">Q</text>
  <text x="180" y="150" class="formula">)</text>
  <text x="195" y="150" class="formula">)</text>
  <text x="215" y="150" class="formula">→</text>
  <text x="235" y="150" class="formula">¬</text>
  <text x="255" y="150" class="formula">P</text>
  
  <text x="65" y="125" class="super false">F</text>
  <text x="120" y="125" class="super true">T</text>
  <text x="160" y="125" class="super false">F</text>
  <text x="255" y="125" class="super false">F</text>
  
  <text x="70" y="170" class="sub true">T</text>
  <text x="150" y="170" class="sub false">F</text>
  <text x="115" y="170" class="sub false">F</text>
  <text x="225" y="170" class="sub true">T</text>

  <!-- Case 3: P=F, Q=T -->
  <text x="30" y="240" class="formula">(</text>
  <text x="45" y="240" class="formula">¬</text>
  <text x="65" y="240" class="formula">Q</text>
  <text x="85" y="240" class="formula">∧</text>
  <text x="105" y="240" class="formula">(</text>
  <text x="120" y="240" class="formula">P</text>
  <text x="140" y="240" class="formula">→</text>
  <text x="160" y="240" class="formula">Q</text>
  <text x="180" y="240" class="formula">)</text>
  <text x="195" y="240" class="formula">)</text>
  <text x="215" y="240" class="formula">→</text>
  <text x="235" y="240" class="formula">¬</text>
  <text x="255" y="240" class="formula">P</text>
  
  <text x="65" y="215" class="super true">T</text>
  <text x="120" y="215" class="super false">F</text>
  <text x="160" y="215" class="super true">T</text>
  <text x="255" y="215" class="super true">T</text>
  
  <text x="70" y="260" class="sub false">F</text>
  <text x="150" y="260" class="sub true">T</text>
  <text x="115" y="260" class="sub false">F</text>
  <text x="225" y="260" class="sub true">T</text>

  <!-- Case 4: P=F, Q=F -->
  <text x="30" y="330" class="formula">(</text>
  <text x="45" y="330" class="formula">¬</text>
  <text x="65" y="330" class="formula">Q</text>
  <text x="85" y="330" class="formula">∧</text>
  <text x="105" y="330" class="formula">(</text>
  <text x="120" y="330" class="formula">P</text>
  <text x="140" y="330" class="formula">→</text>
  <text x="160" y="330" class="formula">Q</text>
  <text x="180" y="330" class="formula">)</text>
  <text x="195" y="330" class="formula">)</text>
  <text x="215" y="330" class="formula">→</text>
  <text x="235" y="330" class="formula">¬</text>
  <text x="255" y="330" class="formula">P</text>
  
  <text x="65" y="305" class="super false">F</text>
  <text x="120" y="305" class="super false">F</text>
  <text x="160" y="305" class="super false">F</text>
  <text x="255" y="305" class="super true">T</text>
  
  <text x="70" y="350" class="sub true">T</text>
  <text x="150" y="350" class="sub true">T</text>
  <text x="115" y="350" class="sub true">T</text>
  <text x="225" y="350" class="sub true">T</text>

  <!-- Explanation boxes -->
  <rect x="300" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="40" class="case">Case 1: P=T, Q=T</text>
  <text x="320" y="58" class="explanation">1. ¬T = F, T→T = T</text>
  <text x="320" y="74" class="explanation">2. F∧T = F</text>
  <text x="320" y="90" class="explanation">3. F→F = T</text>
  
  <rect x="300" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="130" class="case">Case 2: P=T, Q=F</text>
  <text x="320" y="148" class="explanation">1. ¬F = T, T→F = F</text>
  <text x="320" y="164" class="explanation">2. T∧F = F</text>
  <text x="320" y="180" class="explanation">3. F→F = T</text>
  
  <rect x="300" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="220" class="case">Case 3: P=F, Q=T</text>
  <text x="320" y="238" class="explanation">1. ¬T = F, F→T = T</text>
  <text x="320" y="254" class="explanation">2. F∧T = F</text>
  <text x="320" y="270" class="explanation">3. F→T = T</text>
  
  <rect x="300" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="310" class="case">Case 4: P=F, Q=F</text>
  <text x="320" y="328" class="explanation">1. ¬F = T, F→F = T</text>
  <text x="320" y="344" class="explanation">2. T∧T = T</text>
  <text x="320" y="360" class="explanation">3. T→T = T</text>

  <!-- Arrows to conclusion -->
  <line x1="550" y1="60" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="150" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="240" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="330" x2="600" y2="185" class="arrow"/>

  <!-- Conclusion -->
  <rect x="600" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="710" y="170" text-anchor="middle" class="case">TAUTOLOGY</text>
  <text x="710" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
  <text x="710" y="210" text-anchor="middle" class="explanation">Modus Tollens</text>

  <!-- NEW FIXED TRUTH TABLE ONLY -->
  <rect x="50" y="390" width="800" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines - Properly spaced -->
  <line x1="120" y1="390" x2="120" y2="570" class="table-line"/>
  <line x1="200" y1="390" x2="200" y2="570" class="table-line"/>
  <line x1="300" y1="390" x2="300" y2="570" class="table-line"/>
  <line x1="450" y1="390" x2="450" y2="570" class="table-line"/>
  <line x1="650" y1="390" x2="650" y2="570" class="table-line"/>
  <line x1="50" y1="420" x2="850" y2="420" class="table-line"/>
  <line x1="50" y1="450" x2="850" y2="450" class="table-line"/>
  <line x1="50" y1="480" x2="850" y2="480" class="table-line"/>
  <line x1="50" y1="510" x2="850" y2="510" class="table-line"/>
  <line x1="50" y1="540" x2="850" y2="540" class="table-line"/>
  
  <!-- Table headers - Better spacing -->
  <text x="85" y="410" text-anchor="middle" class="case">P</text>
  <text x="160" y="410" text-anchor="middle" class="case">Q</text>
  <text x="250" y="410" text-anchor="middle" class="case">¬Q</text>
  <text x="375" y="410" text-anchor="middle" class="case">P → Q</text>
  <text x="550" y="410" text-anchor="middle" class="case">¬Q ∧ (P→Q)</text>
  <text x="750" y="410" text-anchor="middle" class="case">(¬Q ∧ (P → Q)) → ¬P</text>
  
  <!-- Table rows - Perfect alignment -->
  <text x="85" y="440" text-anchor="middle" class="super true">T</text>
  <text x="160" y="440" text-anchor="middle" class="super true">T</text>
  <text x="250" y="440" text-anchor="middle" class="super false">F</text>
  <text x="375" y="440" text-anchor="middle" class="super true">T</text>
  <text x="550" y="440" text-anchor="middle" class="super false">F</text>
  <text x="750" y="440" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="470" text-anchor="middle" class="super true">T</text>
  <text x="160" y="470" text-anchor="middle" class="super false">F</text>
  <text x="250" y="470" text-anchor="middle" class="super true">T</text>
  <text x="375" y="470" text-anchor="middle" class="super false">F</text>
  <text x="550" y="470" text-anchor="middle" class="super false">F</text>
  <text x="750" y="470" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="500" text-anchor="middle" class="super false">F</text>
  <text x="160" y="500" text-anchor="middle" class="super true">T</text>
  <text x="250" y="500" text-anchor="middle" class="super false">F</text>
  <text x="375" y="500" text-anchor="middle" class="super true">T</text>
  <text x="550" y="500" text-anchor="middle" class="super false">F</text>
  <text x="750" y="500" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="530" text-anchor="middle" class="super false">F</text>
  <text x="160" y="530" text-anchor="middle" class="super false">F</text>
  <text x="250" y="530" text-anchor="middle" class="super true">T</text>
  <text x="375" y="530" text-anchor="middle" class="super true">T</text>
  <text x="550" y="530" text-anchor="middle" class="super true">T</text>
  <text x="750" y="530" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Implication Negation Equivalence":{
        svg:`<svg style="background-color: white;" viewBox="-50 -50 900 680" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
      .super { font-size: 16px; font-weight: bold; }
      .sub { font-size: 16px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 18px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>

  <!-- Case 1: P=T, Q=T -->
  <text x="30" y="60" class="formula">¬</text>
  <text x="50" y="60" class="formula">(</text>
  <text x="65" y="60" class="formula">P</text>
  <text x="85" y="60" class="formula">→</text>
  <text x="105" y="60" class="formula">Q</text>
  <text x="125" y="60" class="formula">)</text>
  <text x="145" y="60" class="formula">↔</text>
  <text x="165" y="60" class="formula">(</text>
  <text x="180" y="60" class="formula">P</text>
  <text x="200" y="60" class="formula">∧</text>
  <text x="220" y="60" class="formula">¬</text>
  <text x="240" y="60" class="formula">Q</text>
  <text x="260" y="60" class="formula">)</text>
  
  <!-- Truth values -->
  <text x="65" y="35" class="super true">T</text>
  <text x="105" y="35" class="super true">T</text>
  <text x="180" y="35" class="super true">T</text>
  <text x="240" y="35" class="super true">T</text>
  
  <!-- Intermediate results -->
  <text x="95" y="80" class="sub true">T</text>
  <text x="40" y="80" class="sub false">F</text>
  <text x="230" y="80" class="sub false">F</text>
  <text x="190" y="80" class="sub false">F</text>
  <text x="155" y="80" class="sub true">T</text>

  <!-- Case 2: P=T, Q=F -->
  <text x="30" y="150" class="formula">¬</text>
  <text x="50" y="150" class="formula">(</text>
  <text x="65" y="150" class="formula">P</text>
  <text x="85" y="150" class="formula">→</text>
  <text x="105" y="150" class="formula">Q</text>
  <text x="125" y="150" class="formula">)</text>
  <text x="145" y="150" class="formula">↔</text>
  <text x="165" y="150" class="formula">(</text>
  <text x="180" y="150" class="formula">P</text>
  <text x="200" y="150" class="formula">∧</text>
  <text x="220" y="150" class="formula">¬</text>
  <text x="240" y="150" class="formula">Q</text>
  <text x="260" y="150" class="formula">)</text>
  
  <text x="65" y="125" class="super true">T</text>
  <text x="105" y="125" class="super false">F</text>
  <text x="180" y="125" class="super true">T</text>
  <text x="240" y="125" class="super false">F</text>
  
  <text x="95" y="170" class="sub false">F</text>
  <text x="40" y="170" class="sub true">T</text>
  <text x="230" y="170" class="sub true">T</text>
  <text x="190" y="170" class="sub true">T</text>
  <text x="155" y="170" class="sub true">T</text>

  <!-- Case 3: P=F, Q=T -->
  <text x="30" y="240" class="formula">¬</text>
  <text x="50" y="240" class="formula">(</text>
  <text x="65" y="240" class="formula">P</text>
  <text x="85" y="240" class="formula">→</text>
  <text x="105" y="240" class="formula">Q</text>
  <text x="125" y="240" class="formula">)</text>
  <text x="145" y="240" class="formula">↔</text>
  <text x="165" y="240" class="formula">(</text>
  <text x="180" y="240" class="formula">P</text>
  <text x="200" y="240" class="formula">∧</text>
  <text x="220" y="240" class="formula">¬</text>
  <text x="240" y="240" class="formula">Q</text>
  <text x="260" y="240" class="formula">)</text>
  
  <text x="65" y="215" class="super false">F</text>
  <text x="105" y="215" class="super true">T</text>
  <text x="180" y="215" class="super false">F</text>
  <text x="240" y="215" class="super true">T</text>
  
  <text x="95" y="260" class="sub true">T</text>
  <text x="40" y="260" class="sub false">F</text>
  <text x="230" y="260" class="sub false">F</text>
  <text x="190" y="260" class="sub false">F</text>
  <text x="155" y="260" class="sub true">T</text>

  <!-- Case 4: P=F, Q=F -->
  <text x="30" y="330" class="formula">¬</text>
  <text x="50" y="330" class="formula">(</text>
  <text x="65" y="330" class="formula">P</text>
  <text x="85" y="330" class="formula">→</text>
  <text x="105" y="330" class="formula">Q</text>
  <text x="125" y="330" class="formula">)</text>
  <text x="145" y="330" class="formula">↔</text>
  <text x="165" y="330" class="formula">(</text>
  <text x="180" y="330" class="formula">P</text>
  <text x="200" y="330" class="formula">∧</text>
  <text x="220" y="330" class="formula">¬</text>
  <text x="240" y="330" class="formula">Q</text>
  <text x="260" y="330" class="formula">)</text>
  
  <text x="65" y="305" class="super false">F</text>
  <text x="105" y="305" class="super false">F</text>
  <text x="180" y="305" class="super false">F</text>
  <text x="240" y="305" class="super false">F</text>
  
  <text x="95" y="350" class="sub true">T</text>
  <text x="40" y="350" class="sub false">F</text>
  <text x="230" y="350" class="sub true">T</text>
  <text x="190" y="350" class="sub false">F</text>
  <text x="155" y="350" class="sub true">T</text>

  <!-- Explanation boxes -->
  <rect x="300" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="40" class="case">Case 1: P=T, Q=T</text>
  <text x="320" y="58" class="explanation">1. P→Q = T, ¬T = F</text>
  <text x="320" y="74" class="explanation">2. ¬Q = F, P∧¬Q = F</text>
  <text x="320" y="90" class="explanation">3. ¬(P→Q) ↔ (P∧¬Q) = F↔F = T</text>
  
  <rect x="300" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="130" class="case">Case 2: P=T, Q=F</text>
  <text x="320" y="148" class="explanation">1. P→Q = F, ¬F = T</text>
  <text x="320" y="164" class="explanation">2. ¬Q = T, P∧¬Q = T</text>
  <text x="320" y="180" class="explanation">3. ¬(P→Q) ↔ (P∧¬Q) = T↔T = T</text>
  
  <rect x="300" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="220" class="case">Case 3: P=F, Q=T</text>
  <text x="320" y="238" class="explanation">1. P→Q = T, ¬T = F</text>
  <text x="320" y="254" class="explanation">2. ¬Q = F, P∧¬Q = F</text>
  <text x="320" y="270" class="explanation">3. ¬(P→Q) ↔ (P∧¬Q) = F↔F = T</text>
  
  <rect x="300" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="310" class="case">Case 4: P=F, Q=F</text>
  <text x="320" y="328" class="explanation">1. P→Q = T, ¬T = F</text>
  <text x="320" y="344" class="explanation">2. ¬Q = T, P∧¬Q = F</text>
  <text x="320" y="360" class="explanation">3. ¬(P→Q) ↔ (P∧¬Q) = F↔F = T</text>

  <!-- Arrows to conclusion -->
  <line x1="550" y1="60" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="150" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="240" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="330" x2="600" y2="185" class="arrow"/>

  <!-- Conclusion -->
  <rect x="600" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="710" y="170" text-anchor="middle" class="case">Tautology</text>
  <text x="710" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
  <text x="710" y="210" text-anchor="middle" class="explanation">¬(P→Q) ≡ (P ∧ ¬Q)</text>

  <!-- Truth Table -->
  <rect x="50" y="390" width="800" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="120" y1="390" x2="120" y2="570" class="table-line"/>
  <line x1="200" y1="390" x2="200" y2="570" class="table-line"/>
  <line x1="300" y1="390" x2="300" y2="570" class="table-line"/>
  <line x1="400" y1="390" x2="400" y2="570" class="table-line"/>
  <line x1="550" y1="390" x2="550" y2="570" class="table-line"/>
  <line x1="700" y1="390" x2="700" y2="570" class="table-line"/>
  <line x1="50" y1="420" x2="850" y2="420" class="table-line"/>
  <line x1="50" y1="450" x2="850" y2="450" class="table-line"/>
  <line x1="50" y1="480" x2="850" y2="480" class="table-line"/>
  <line x1="50" y1="510" x2="850" y2="510" class="table-line"/>
  <line x1="50" y1="540" x2="850" y2="540" class="table-line"/>
  
  <!-- Table headers -->
  <text x="85" y="410" text-anchor="middle" class="case">P</text>
  <text x="160" y="410" text-anchor="middle" class="case">Q</text>
  <text x="250" y="410" text-anchor="middle" class="case">P → Q</text>
  <text x="350" y="410" text-anchor="middle" class="case">¬(P→Q)</text>
  <text x="475" y="410" text-anchor="middle" class="case">¬Q</text>
  <text x="625" y="410" text-anchor="middle" class="case">P ∧ ¬Q</text>
  <text x="775" y="410" text-anchor="middle" class="case">¬(P→Q) ↔ (P∧¬Q)</text>
  
  <!-- Table rows -->
  <text x="85" y="440" text-anchor="middle" class="super true">T</text>
  <text x="160" y="440" text-anchor="middle" class="super true">T</text>
  <text x="250" y="440" text-anchor="middle" class="super true">T</text>
  <text x="350" y="440" text-anchor="middle" class="super false">F</text>
  <text x="475" y="440" text-anchor="middle" class="super false">F</text>
  <text x="625" y="440" text-anchor="middle" class="super false">F</text>
  <text x="775" y="440" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="470" text-anchor="middle" class="super true">T</text>
  <text x="160" y="470" text-anchor="middle" class="super false">F</text>
  <text x="250" y="470" text-anchor="middle" class="super false">F</text>
  <text x="350" y="470" text-anchor="middle" class="super true">T</text>
  <text x="475" y="470" text-anchor="middle" class="super true">T</text>
  <text x="625" y="470" text-anchor="middle" class="super true">T</text>
  <text x="775" y="470" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="500" text-anchor="middle" class="super false">F</text>
  <text x="160" y="500" text-anchor="middle" class="super true">T</text>
  <text x="250" y="500" text-anchor="middle" class="super true">T</text>
  <text x="350" y="500" text-anchor="middle" class="super false">F</text>
  <text x="475" y="500" text-anchor="middle" class="super false">F</text>
  <text x="625" y="500" text-anchor="middle" class="super false">F</text>
  <text x="775" y="500" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="530" text-anchor="middle" class="super false">F</text>
  <text x="160" y="530" text-anchor="middle" class="super false">F</text>
  <text x="250" y="530" text-anchor="middle" class="super true">T</text>
  <text x="350" y="530" text-anchor="middle" class="super false">F</text>
  <text x="475" y="530" text-anchor="middle" class="super true">T</text>
  <text x="625" y="530" text-anchor="middle" class="super false">F</text>
  <text x="775" y="530" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Contradiction Implication":{
        svg:`<svg style="background-color: white;" viewBox="-50 -50 900 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
      .super { font-size: 16px; font-weight: bold; }
      .sub { font-size: 16px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 18px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>

  <!-- Case 1: P=T, Q=T -->
  <text x="30" y="60" class="formula">(</text>
  <text x="45" y="60" class="formula">P</text>
  <text x="65" y="60" class="formula">→</text>
  <text x="85" y="60" class="formula">(</text>
  <text x="100" y="60" class="formula">Q</text>
  <text x="120" y="60" class="formula">∧</text>
  <text x="140" y="60" class="formula">¬</text>
  <text x="160" y="60" class="formula">Q</text>
  <text x="180" y="60" class="formula">)</text>
  <text x="195" y="60" class="formula">)</text>
  <text x="215" y="60" class="formula">→</text>
  <text x="235" y="60" class="formula">¬</text>
  <text x="255" y="60" class="formula">P</text>
  
  <!-- Truth values -->
  <text x="45" y="35" class="super true">T</text>
  <text x="100" y="35" class="super true">T</text>
  <text x="160" y="35" class="super true">T</text>
  <text x="255" y="35" class="super false">F</text>
  
  <!-- Intermediate results -->
  <text x="150" y="80" class="sub false">F</text>
  <text x="115" y="80" class="sub false">F</text>
  <text x="80" y="80" class="sub false">F</text>
  <text x="225" y="80" class="sub true">T</text>

  <!-- Case 2: P=T, Q=F -->
  <text x="30" y="150" class="formula">(</text>
  <text x="45" y="150" class="formula">P</text>
  <text x="65" y="150" class="formula">→</text>
  <text x="85" y="150" class="formula">(</text>
  <text x="100" y="150" class="formula">Q</text>
  <text x="120" y="150" class="formula">∧</text>
  <text x="140" y="150" class="formula">¬</text>
  <text x="160" y="150" class="formula">Q</text>
  <text x="180" y="150" class="formula">)</text>
  <text x="195" y="150" class="formula">)</text>
  <text x="215" y="150" class="formula">→</text>
  <text x="235" y="150" class="formula">¬</text>
  <text x="255" y="150" class="formula">P</text>
  
  <text x="45" y="125" class="super true">T</text>
  <text x="100" y="125" class="super false">F</text>
  <text x="160" y="125" class="super false">F</text>
  <text x="255" y="125" class="super false">F</text>
  
  <text x="150" y="170" class="sub false">F</text>
  <text x="115" y="170" class="sub false">F</text>
  <text x="80" y="170" class="sub false">F</text>
  <text x="225" y="170" class="sub true">T</text>

  <!-- Case 3: P=F, Q=T -->
  <text x="30" y="240" class="formula">(</text>
  <text x="45" y="240" class="formula">P</text>
  <text x="65" y="240" class="formula">→</text>
  <text x="85" y="240" class="formula">(</text>
  <text x="100" y="240" class="formula">Q</text>
  <text x="120" y="240" class="formula">∧</text>
  <text x="140" y="240" class="formula">¬</text>
  <text x="160" y="240" class="formula">Q</text>
  <text x="180" y="240" class="formula">)</text>
  <text x="195" y="240" class="formula">)</text>
  <text x="215" y="240" class="formula">→</text>
  <text x="235" y="240" class="formula">¬</text>
  <text x="255" y="240" class="formula">P</text>
  
  <text x="45" y="215" class="super false">F</text>
  <text x="100" y="215" class="super true">T</text>
  <text x="160" y="215" class="super true">T</text>
  <text x="255" y="215" class="super true">T</text>
  
  <text x="150" y="260" class="sub false">F</text>
  <text x="115" y="260" class="sub false">F</text>
  <text x="80" y="260" class="sub true">T</text>
  <text x="225" y="260" class="sub true">T</text>

  <!-- Case 4: P=F, Q=F -->
  <text x="30" y="330" class="formula">(</text>
  <text x="45" y="330" class="formula">P</text>
  <text x="65" y="330" class="formula">→</text>
  <text x="85" y="330" class="formula">(</text>
  <text x="100" y="330" class="formula">Q</text>
  <text x="120" y="330" class="formula">∧</text>
  <text x="140" y="330" class="formula">¬</text>
  <text x="160" y="330" class="formula">Q</text>
  <text x="180" y="330" class="formula">)</text>
  <text x="195" y="330" class="formula">)</text>
  <text x="215" y="330" class="formula">→</text>
  <text x="235" y="330" class="formula">¬</text>
  <text x="255" y="330" class="formula">P</text>
  
  <text x="45" y="305" class="super false">F</text>
  <text x="100" y="305" class="super false">F</text>
  <text x="160" y="305" class="super false">F</text>
  <text x="255" y="305" class="super true">T</text>
  
  <text x="150" y="350" class="sub false">F</text>
  <text x="115" y="350" class="sub false">F</text>
  <text x="80" y="350" class="sub true">T</text>
  <text x="225" y="350" class="sub true">T</text>

  <!-- Explanation boxes -->
  <rect x="300" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="40" class="case">Case 1: P=T, Q=T</text>
  <text x="320" y="58" class="explanation">1. Q∧¬Q = T∧F = F (contradiction)</text>
  <text x="320" y="74" class="explanation">2. P→F = F</text>
  <text x="320" y="90" class="explanation">3. F→F = T</text>
  
  <rect x="300" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="130" class="case">Case 2: P=T, Q=F</text>
  <text x="320" y="148" class="explanation">1. Q∧¬Q = F∧T = F (contradiction)</text>
  <text x="320" y="164" class="explanation">2. P→F = F</text>
  <text x="320" y="180" class="explanation">3. F→F = T</text>
  
  <rect x="300" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="220" class="case">Case 3: P=F, Q=T</text>
  <text x="320" y="238" class="explanation">1. Q∧¬Q = T∧F = F (contradiction)</text>
  <text x="320" y="254" class="explanation">2. F→F = T</text>
  <text x="320" y="270" class="explanation">3. T→T = T</text>
  
  <rect x="300" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="320" y="310" class="case">Case 4: P=F, Q=F</text>
  <text x="320" y="328" class="explanation">1. Q∧¬Q = F∧T = F (contradiction)</text>
  <text x="320" y="344" class="explanation">2. F→F = T</text>
  <text x="320" y="360" class="explanation">3. T→T = T</text>

  <!-- Arrows to conclusion -->
  <line x1="550" y1="60" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="150" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="240" x2="600" y2="185" class="arrow"/>
  <line x1="550" y1="330" x2="600" y2="185" class="arrow"/>

  <!-- Conclusion -->
  <rect x="600" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="710" y="170" text-anchor="middle" class="case">Tautology</text>
  <text x="710" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
  <text x="710" y="210" text-anchor="middle" class="explanation">(P→⊥)→¬P is a tautology</text>

  <!-- Truth Table -->
  <rect x="50" y="390" width="800" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="120" y1="390" x2="120" y2="570" class="table-line"/>
  <line x1="200" y1="390" x2="200" y2="570" class="table-line"/>
  <line x1="300" y1="390" x2="300" y2="570" class="table-line"/>
  <line x1="400" y1="390" x2="400" y2="570" class="table-line"/>
  <line x1="500" y1="390" x2="500" y2="570" class="table-line"/>
  <line x1="650" y1="390" x2="650" y2="570" class="table-line"/>
  <line x1="50" y1="420" x2="850" y2="420" class="table-line"/>
  <line x1="50" y1="450" x2="850" y2="450" class="table-line"/>
  <line x1="50" y1="480" x2="850" y2="480" class="table-line"/>
  <line x1="50" y1="510" x2="850" y2="510" class="table-line"/>
  <line x1="50" y1="540" x2="850" y2="540" class="table-line"/>
  
  <!-- Table headers -->
  <text x="85" y="410" text-anchor="middle" class="case">P</text>
  <text x="160" y="410" text-anchor="middle" class="case">Q</text>
  <text x="250" y="410" text-anchor="middle" class="case">Q ∧ ¬Q</text>
  <text x="350" y="410" text-anchor="middle" class="case">P→(Q∧¬Q)</text>
  <text x="450" y="410" text-anchor="middle" class="case">¬P</text>
  <text x="575" y="410" text-anchor="middle" class="case">(P→(Q∧¬Q))→¬P</text>
  
  <!-- Table rows -->
  <text x="85" y="440" text-anchor="middle" class="super true">T</text>
  <text x="160" y="440" text-anchor="middle" class="super true">T</text>
  <text x="250" y="440" text-anchor="middle" class="super false">F</text>
  <text x="350" y="440" text-anchor="middle" class="super false">F</text>
  <text x="450" y="440" text-anchor="middle" class="super false">F</text>
  <text x="575" y="440" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="470" text-anchor="middle" class="super true">T</text>
  <text x="160" y="470" text-anchor="middle" class="super false">F</text>
  <text x="250" y="470" text-anchor="middle" class="super false">F</text>
  <text x="350" y="470" text-anchor="middle" class="super false">F</text>
  <text x="450" y="470" text-anchor="middle" class="super false">F</text>
  <text x="575" y="470" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="500" text-anchor="middle" class="super false">F</text>
  <text x="160" y="500" text-anchor="middle" class="super true">T</text>
  <text x="250" y="500" text-anchor="middle" class="super false">F</text>
  <text x="350" y="500" text-anchor="middle" class="super true">T</text>
  <text x="450" y="500" text-anchor="middle" class="super true">T</text>
  <text x="575" y="500" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="530" text-anchor="middle" class="super false">F</text>
  <text x="160" y="530" text-anchor="middle" class="super false">F</text>
  <text x="250" y="530" text-anchor="middle" class="super false">F</text>
  <text x="350" y="530" text-anchor="middle" class="super true">T</text>
  <text x="450" y="530" text-anchor="middle" class="super true">T</text>
  <text x="575" y="530" text-anchor="middle" class="super true">T</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "Double Negation Implication":{
        svg:`<svg style="background-color: white;" viewBox="20 -20 900 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .formula { font-family: 'Times New Roman', serif; font-size: 28px; fill: #2c3e50; }
      .super { font-size: 16px; font-weight: bold; }
      .sub { font-size: 16px; font-weight: bold; }
      .true { fill: #27ae60; }
      .false { fill: #e74c3c; }
      .case { font-size: 18px; font-weight: bold; fill: #34495e; }
      .explanation { font-size: 14px; fill: #34495e; font-family: Arial, sans-serif; font-weight: 500; }
      .textbox { fill: #f8fcff; stroke: #a8d0f0; stroke-width: 2; rx: 8; }
      .arrow { stroke: #6c85a8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .conclusion-box { fill: #fff9e6; stroke: #d4a853; stroke-width: 2; }
      .table-border { stroke: #5a7391; stroke-width: 2; }
      .table-line { stroke: #b8cde6; stroke-width: 1; }
    </style>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fcff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8f4fd;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="conclusionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f5edd1;stop-opacity:1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6c85a8" />
    </marker>
  </defs>

  <!-- Case 1: P=T, Q=T -->
  <text x="30" y="60" class="formula">(</text>
  <text x="45" y="60" class="formula">(</text>
  <text x="60" y="60" class="formula">P</text>
  <text x="80" y="60" class="formula">→</text>
  <text x="100" y="60" class="formula">Q</text>
  <text x="120" y="60" class="formula">)</text>
  <text x="135" y="60" class="formula">∧</text>
  <text x="155" y="60" class="formula">(</text>
  <text x="170" y="60" class="formula">P</text>
  <text x="190" y="60" class="formula">→</text>
  <text x="210" y="60" class="formula">¬</text>
  <text x="230" y="60" class="formula">Q</text>
  <text x="250" y="60" class="formula">)</text>
  <text x="265" y="60" class="formula">)</text>
  <text x="280" y="60" class="formula">→</text>
  <text x="300" y="60" class="formula">¬</text>
  <text x="320" y="60" class="formula">P</text>
  
  <!-- Truth values -->
  <text x="60" y="35" class="super true">T</text>
  <text x="100" y="35" class="super true">T</text>
  <text x="170" y="35" class="super true">T</text>
  <text x="230" y="35" class="super true">T</text>
  <text x="320" y="35" class="super false">F</text>
  
  <!-- Intermediate results -->
  <text x="90" y="80" class="sub true">T</text>
  <text x="220" y="80" class="sub false">F</text>
  <text x="145" y="80" class="sub false">F</text>
  <text x="310" y="80" class="sub true">T</text>

  <!-- Case 2: P=T, Q=F -->
  <text x="30" y="150" class="formula">(</text>
  <text x="45" y="150" class="formula">(</text>
  <text x="60" y="150" class="formula">P</text>
  <text x="80" y="150" class="formula">→</text>
  <text x="100" y="150" class="formula">Q</text>
  <text x="120" y="150" class="formula">)</text>
  <text x="135" y="150" class="formula">∧</text>
  <text x="155" y="150" class="formula">(</text>
  <text x="170" y="150" class="formula">P</text>
  <text x="190" y="150" class="formula">→</text>
  <text x="210" y="150" class="formula">¬</text>
  <text x="230" y="150" class="formula">Q</text>
  <text x="250" y="150" class="formula">)</text>
  <text x="265" y="150" class="formula">)</text>
  <text x="280" y="150" class="formula">→</text>
  <text x="300" y="150" class="formula">¬</text>
  <text x="320" y="150" class="formula">P</text>
  
  <text x="60" y="125" class="super true">T</text>
  <text x="100" y="125" class="super false">F</text>
  <text x="170" y="125" class="super true">T</text>
  <text x="230" y="125" class="super false">F</text>
  <text x="320" y="125" class="super false">F</text>
  
  <text x="90" y="170" class="sub false">F</text>
  <text x="220" y="170" class="sub true">T</text>
  <text x="145" y="170" class="sub false">F</text>
  <text x="310" y="170" class="sub true">T</text>

  <!-- Case 3: P=F, Q=T -->
  <text x="30" y="240" class="formula">(</text>
  <text x="45" y="240" class="formula">(</text>
  <text x="60" y="240" class="formula">P</text>
  <text x="80" y="240" class="formula">→</text>
  <text x="100" y="240" class="formula">Q</text>
  <text x="120" y="240" class="formula">)</text>
  <text x="135" y="240" class="formula">∧</text>
  <text x="155" y="240" class="formula">(</text>
  <text x="170" y="240" class="formula">P</text>
  <text x="190" y="240" class="formula">→</text>
  <text x="210" y="240" class="formula">¬</text>
  <text x="230" y="240" class="formula">Q</text>
  <text x="250" y="240" class="formula">)</text>
  <text x="265" y="240" class="formula">)</text>
  <text x="280" y="240" class="formula">→</text>
  <text x="300" y="240" class="formula">¬</text>
  <text x="320" y="240" class="formula">P</text>
  
  <text x="60" y="215" class="super false">F</text>
  <text x="100" y="215" class="super true">T</text>
  <text x="170" y="215" class="super false">F</text>
  <text x="230" y="215" class="super true">T</text>
  <text x="320" y="215" class="super true">T</text>
  
  <text x="90" y="260" class="sub true">T</text>
  <text x="220" y="260" class="sub true">T</text>
  <text x="145" y="260" class="sub true">T</text>
  <text x="310" y="260" class="sub true">T</text>

  <!-- Case 4: P=F, Q=F -->
  <text x="30" y="330" class="formula">(</text>
  <text x="45" y="330" class="formula">(</text>
  <text x="60" y="330" class="formula">P</text>
  <text x="80" y="330" class="formula">→</text>
  <text x="100" y="330" class="formula">Q</text>
  <text x="120" y="330" class="formula">)</text>
  <text x="135" y="330" class="formula">∧</text>
  <text x="155" y="330" class="formula">(</text>
  <text x="170" y="330" class="formula">P</text>
  <text x="190" y="330" class="formula">→</text>
  <text x="210" y="330" class="formula">¬</text>
  <text x="230" y="330" class="formula">Q</text>
  <text x="250" y="330" class="formula">)</text>
  <text x="265" y="330" class="formula">)</text>
  <text x="280" y="330" class="formula">→</text>
  <text x="300" y="330" class="formula">¬</text>
  <text x="320" y="330" class="formula">P</text>
  
  <text x="60" y="305" class="super false">F</text>
  <text x="100" y="305" class="super false">F</text>
  <text x="170" y="305" class="super false">F</text>
  <text x="230" y="305" class="super false">F</text>
  <text x="320" y="305" class="super true">T</text>
  
  <text x="90" y="350" class="sub true">T</text>
  <text x="220" y="350" class="sub true">T</text>
  <text x="145" y="350" class="sub true">T</text>
  <text x="310" y="350" class="sub true">T</text>

  <!-- Explanation boxes -->
  <rect x="350" y="20" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="370" y="40" class="case">Case 1: P=T, Q=T</text>
  <text x="370" y="58" class="explanation">1. P→Q = T, P→¬Q = F</text>
  <text x="370" y="74" class="explanation">2. T∧F = F</text>
  <text x="370" y="90" class="explanation">3. F→F = T</text>
  
  <rect x="350" y="110" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="370" y="130" class="case">Case 2: P=T, Q=F</text>
  <text x="370" y="148" class="explanation">1. P→Q = F, P→¬Q = T</text>
  <text x="370" y="164" class="explanation">2. F∧T = F</text>
  <text x="370" y="180" class="explanation">3. F→F = T</text>
  
  <rect x="350" y="200" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="370" y="220" class="case">Case 3: P=F, Q=T</text>
  <text x="370" y="238" class="explanation">1. P→Q = T, P→¬Q = T</text>
  <text x="370" y="254" class="explanation">2. T∧T = T</text>
  <text x="370" y="270" class="explanation">3. T→T = T</text>
  
  <rect x="350" y="290" width="250" height="80" fill="url(#boxGradient)" stroke="#a8d0f0" stroke-width="2" rx="8"/>
  <text x="370" y="310" class="case">Case 4: P=F, Q=F</text>
  <text x="370" y="328" class="explanation">1. P→Q = T, P→¬Q = T</text>
  <text x="370" y="344" class="explanation">2. T∧T = T</text>
  <text x="370" y="360" class="explanation">3. T→T = T</text>

  <!-- Arrows to conclusion -->
  <line x1="600" y1="60" x2="650" y2="185" class="arrow"/>
  <line x1="600" y1="150" x2="650" y2="185" class="arrow"/>
  <line x1="600" y1="240" x2="650" y2="185" class="arrow"/>
  <line x1="600" y1="330" x2="650" y2="185" class="arrow"/>

  <!-- Conclusion -->
  <rect x="650" y="145" width="220" height="80" fill="url(#conclusionGradient)" stroke="#d4a853" stroke-width="2" rx="8"/>
  <text x="760" y="170" text-anchor="middle" class="case">PROOF BY CONTRADICTION</text>
  <text x="760" y="190" text-anchor="middle" class="sub true">T ∧ T ∧ T ∧ T = T</text>
  <text x="760" y="210" text-anchor="middle" class="explanation">If P leads to both Q and ¬Q, then ¬P</text>

  <!-- Truth Table -->
  <rect x="50" y="390" width="800" height="180" fill="white" stroke="#5a7391" stroke-width="2" rx="6"/>
  
  <!-- Table grid lines -->
  <line x1="120" y1="390" x2="120" y2="570" class="table-line"/>
  <line x1="200" y1="390" x2="200" y2="570" class="table-line"/>
  <line x1="300" y1="390" x2="300" y2="570" class="table-line"/>
  <line x1="400" y1="390" x2="400" y2="570" class="table-line"/>
  <line x1="500" y1="390" x2="500" y2="570" class="table-line"/>
  <line x1="600" y1="390" x2="600" y2="570" class="table-line"/>
  <line x1="700" y1="390" x2="700" y2="570" class="table-line"/>
  <line x1="50" y1="420" x2="850" y2="420" class="table-line"/>
  <line x1="50" y1="450" x2="850" y2="450" class="table-line"/>
  <line x1="50" y1="480" x2="850" y2="480" class="table-line"/>
  <line x1="50" y1="510" x2="850" y2="510" class="table-line"/>
  <line x1="50" y1="540" x2="850" y2="540" class="table-line"/>
  
  <!-- Table headers -->
  <text x="85" y="410" text-anchor="middle" class="case">P</text>
  <text x="160" y="410" text-anchor="middle" class="case">Q</text>
  <text x="250" y="410" text-anchor="middle" class="case">P→Q</text>
  <text x="350" y="410" text-anchor="middle" class="case">P→¬Q</text>
  <text x="450" y="410" text-anchor="middle" class="case">(P→Q)∧(P→¬Q)</text>
  <text x="550" y="410" text-anchor="middle" class="case">¬P</text>
  <text x="775" y="410" text-anchor="middle" class="case">((P→Q)∧(P→¬Q))→¬P</text>
  
  <!-- Table rows -->
  <text x="85" y="440" text-anchor="middle" class="super true">T</text>
  <text x="160" y="440" text-anchor="middle" class="super true">T</text>
  <text x="250" y="440" text-anchor="middle" class="super true">T</text>
  <text x="350" y="440" text-anchor="middle" class="super false">F</text>
  <text x="450" y="440" text-anchor="middle" class="super false">F</text>
  <text x="550" y="440" text-anchor="middle" class="super false">F</text>
  <text x="775" y="440" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="470" text-anchor="middle" class="super true">T</text>
  <text x="160" y="470" text-anchor="middle" class="super false">F</text>
  <text x="250" y="470" text-anchor="middle" class="super false">F</text>
  <text x="350" y="470" text-anchor="middle" class="super true">T</text>
  <text x="450" y="470" text-anchor="middle" class="super false">F</text>
  <text x="550" y="470" text-anchor="middle" class="super false">F</text>
  <text x="775" y="470" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="500" text-anchor="middle" class="super false">F</text>
  <text x="160" y="500" text-anchor="middle" class="super true">T</text>
  <text x="250" y="500" text-anchor="middle" class="super true">T</text>
  <text x="350" y="500" text-anchor="middle" class="super true">T</text>
  <text x="450" y="500" text-anchor="middle" class="super true">T</text>
  <text x="550" y="500" text-anchor="middle" class="super true">T</text>
  <text x="775" y="500" text-anchor="middle" class="super true">T</text>
  
  <text x="85" y="530" text-anchor="middle" class="super false">F</text>
  <text x="160" y="530" text-anchor="middle" class="super false">F</text>
  <text x="250" y="530" text-anchor="middle" class="super true">T</text>
  <text x="350" y="530" text-anchor="middle" class="super true">T</text>
  <text x="450" y="530" text-anchor="middle" class="super true">T</text>
  <text x="550" y="530" text-anchor="middle" class="super true">T</text>
  <text x="775" y="530" text-anchor="middle" class="super true">T</text>
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