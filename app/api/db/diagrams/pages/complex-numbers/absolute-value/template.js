
export const absoluteValueData={
    "absolute value examples":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 520" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
    <marker id="axisArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7" fill="#102050"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="860" height="520" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="430" y="40" text-anchor="middle" font-size="24" font-weight="700" fill="#102050">The Modulus  |<tspan font-style="italic">z</tspan>|</text>
  <line x1="280" y1="52" x2="580" y2="52" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- Subtitle -->
  <text x="430" y="72" text-anchor="middle" font-size="13" fill="#6080a0">Distance from the origin to <tspan font-style="italic">z</tspan> in the complex plane</text>

  <!-- ========== MAIN COMPLEX PLANE ========== -->
  <!-- origin at (240, 310), 1 unit = 50px -->

  <!-- Light grid -->
  <line x1="40" y1="110" x2="480" y2="110" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="40" y1="160" x2="480" y2="160" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="40" y1="210" x2="480" y2="210" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="40" y1="260" x2="480" y2="260" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="40" y1="360" x2="480" y2="360" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="40" y1="410" x2="480" y2="410" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="40" y1="460" x2="480" y2="460" stroke="#d8e8f0" stroke-width="0.5"/>

  <line x1="90" y1="90" x2="90" y2="470" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="140" y1="90" x2="140" y2="470" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="190" y1="90" x2="190" y2="470" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="290" y1="90" x2="290" y2="470" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="340" y1="90" x2="340" y2="470" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="390" y1="90" x2="390" y2="470" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="440" y1="90" x2="440" y2="470" stroke="#d8e8f0" stroke-width="0.5"/>

  <!-- Axes -->
  <line x1="30" y1="310" x2="488" y2="310" stroke="#f89838" stroke-width="2" marker-end="url(#axisArrow)"/>
  <line x1="240" y1="478" x2="240" y2="88" stroke="#304090" stroke-width="2" marker-end="url(#axisArrow)"/>

  <text x="488" y="328" font-size="11" font-weight="600" fill="#f89838">Re</text>
  <text x="250" y="98" font-size="11" font-weight="600" fill="#304090">Im</text>

  <!-- Tick labels on real axis -->
  <text x="140" y="328" text-anchor="middle" font-size="10" fill="#8a9ab0">−2</text>
  <text x="190" y="328" text-anchor="middle" font-size="10" fill="#8a9ab0">−1</text>
  <text x="290" y="328" text-anchor="middle" font-size="10" fill="#8a9ab0">1</text>
  <text x="340" y="328" text-anchor="middle" font-size="10" fill="#8a9ab0">2</text>
  <text x="390" y="328" text-anchor="middle" font-size="10" fill="#8a9ab0">3</text>
  <text x="440" y="328" text-anchor="middle" font-size="10" fill="#8a9ab0">4</text>

  <!-- Tick labels on imaginary axis -->
  <text x="228" y="264" text-anchor="end" font-size="10" fill="#8a9ab0"><tspan font-style="italic">i</tspan></text>
  <text x="228" y="214" text-anchor="end" font-size="10" fill="#8a9ab0">2<tspan font-style="italic">i</tspan></text>
  <text x="228" y="164" text-anchor="end" font-size="10" fill="#8a9ab0">3<tspan font-style="italic">i</tspan></text>
  <text x="228" y="114" text-anchor="end" font-size="10" fill="#8a9ab0">4<tspan font-style="italic">i</tspan></text>
  <text x="222" y="364" text-anchor="end" font-size="10" fill="#8a9ab0">−<tspan font-style="italic">i</tspan></text>

  <!-- Origin -->
  <circle cx="240" cy="310" r="3" fill="#4098d8"/>
  <text x="230" y="328" text-anchor="end" font-size="10" font-weight="600" fill="#102050">0</text>

  <!-- ========== EXAMPLE 1: z = 3 + 4i ========== -->
  <!-- Point at (240 + 3*50, 310 - 4*50) = (390, 110) -->

  <!-- Right triangle -->
  <!-- Horizontal leg: origin to (390, 310) -->
  <line x1="240" y1="310" x2="390" y2="310" stroke="#f89838" stroke-width="2.5" opacity="0.8"/>
  <!-- Vertical leg: (390, 310) to (390, 110) -->
  <line x1="390" y1="310" x2="390" y2="110" stroke="#304090" stroke-width="2.5" opacity="0.8"/>
  <!-- Hypotenuse: origin to point -->
  <line x1="240" y1="310" x2="390" y2="110" stroke="#4098d8" stroke-width="3"/>

  <!-- Right angle marker -->
  <polyline points="375,310 375,295 390,295" fill="none" stroke="#8a9ab0" stroke-width="1"/>

  <!-- Point -->
  <circle cx="390" cy="110" r="6" fill="#4098d8" filter="url(#soft)"/>

  <!-- Point label -->
  <text x="400" y="104" font-size="14" font-weight="700" fill="#102050"><tspan font-style="italic">z</tspan> = 3 + 4<tspan font-style="italic">i</tspan></text>

  <!-- Leg labels -->
  <text x="315" y="340" text-anchor="middle" font-size="13" font-weight="600" fill="#f89838"><tspan font-style="italic">a</tspan> = 3</text>
  <text x="420" y="215" font-size="13" font-weight="600" fill="#304090"><tspan font-style="italic">b</tspan> = 4</text>

  <!-- Hypotenuse label -->
  <text x="290" y="196" font-size="14" font-weight="700" fill="#4098d8" transform="rotate(-53.13, 290, 196)">|<tspan font-style="italic">z</tspan>| = 5</text>

  <!-- ========== EXAMPLE 2: z = -2 + i ========== -->
  <!-- Point at (240 + (-2)*50, 310 - 1*50) = (140, 260) -->

  <!-- Right triangle (thinner, secondary) -->
  <line x1="240" y1="310" x2="140" y2="310" stroke="#f89838" stroke-width="1.5" opacity="0.5" stroke-dasharray="5,3"/>
  <line x1="140" y1="310" x2="140" y2="260" stroke="#304090" stroke-width="1.5" opacity="0.5" stroke-dasharray="5,3"/>
  <line x1="240" y1="310" x2="140" y2="260" stroke="#6080a0" stroke-width="2" stroke-dasharray="6,3"/>

  <!-- Right angle marker -->
  <polyline points="155,310 155,295 140,295" fill="none" stroke="#8a9ab0" stroke-width="0.8"/>

  <!-- Point -->
  <circle cx="140" cy="260" r="5" fill="#6080a0" filter="url(#soft)"/>

  <!-- Label -->
  <text x="72" y="252" font-size="13" font-weight="600" fill="#102050">−2 + <tspan font-style="italic">i</tspan></text>

  <!-- Hypotenuse label -->
  <text x="170" y="278" font-size="12" font-weight="600" fill="#6080a0">√5</text>

  <!-- ========== RIGHT SIDE PANELS ========== -->

  <!-- Formula panel -->
  <rect x="530" y="95" width="300" height="80" rx="12" fill="#fff" stroke="#4098d8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="680" y="120" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">Formula</text>
  <line x1="555" y1="129" x2="805" y2="129" stroke="#d8e8f0" stroke-width="1"/>
  <text x="680" y="155" text-anchor="middle" font-size="18" font-weight="700" fill="#102050">|<tspan font-style="italic">z</tspan>| = √(<tspan font-style="italic" fill="#f89838">a</tspan><tspan font-size="12" baseline-shift="super">2</tspan> + <tspan font-style="italic" fill="#304090">b</tspan><tspan font-size="12" baseline-shift="super">2</tspan>)</text>

  <!-- Example 1 computation -->
  <rect x="530" y="195" width="300" height="130" rx="12" fill="#fff" stroke="#4098d8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="680" y="220" text-anchor="middle" font-size="13" font-weight="700" fill="#102050"><tspan font-style="italic">z</tspan> = 3 + 4<tspan font-style="italic">i</tspan></text>
  <line x1="555" y1="229" x2="805" y2="229" stroke="#d8e8f0" stroke-width="1"/>

  <text x="555" y="252" font-size="13" fill="#6080a0">|<tspan font-style="italic">z</tspan>| = √(<tspan fill="#f89838">3</tspan>² + <tspan fill="#304090">4</tspan>²)</text>
  <text x="575" y="274" font-size="13" fill="#6080a0">= √(9 + 16)</text>
  <text x="575" y="296" font-size="13" fill="#6080a0">= √25</text>
  <text x="575" y="316" font-size="15" font-weight="700" fill="#4098d8">= 5</text>

  <!-- Example 2 computation -->
  <rect x="530" y="345" width="300" height="130" rx="12" fill="#fff" stroke="#6080a0" stroke-width="1.2" filter="url(#soft)"/>
  <text x="680" y="370" text-anchor="middle" font-size="13" font-weight="700" fill="#102050"><tspan font-style="italic">z</tspan> = −2 + <tspan font-style="italic">i</tspan></text>
  <line x1="555" y1="379" x2="805" y2="379" stroke="#d8e8f0" stroke-width="1"/>

  <text x="555" y="402" font-size="13" fill="#6080a0">|<tspan font-style="italic">z</tspan>| = √(<tspan fill="#f89838">(−2)</tspan>² + <tspan fill="#304090">1</tspan>²)</text>
  <text x="575" y="424" font-size="13" fill="#6080a0">= √(4 + 1)</text>
  <text x="575" y="446" font-size="15" font-weight="700" fill="#6080a0">= √5 ≈ 2.236</text>

  <!-- Bottom note -->
  <text x="430" y="502" text-anchor="middle" font-size="12" fill="#8a9ab0" font-style="italic">The modulus generalizes absolute value to two dimensions — distance from zero across a plane</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },

    "absolute value general case":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
    <marker id="axisArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7" fill="#102050"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="720" height="460" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="360" y="38" text-anchor="middle" font-size="24" font-weight="700" fill="#102050">The Modulus  |<tspan font-style="italic">z</tspan>|</text>
  <line x1="220" y1="50" x2="500" y2="50" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- ========== COMPLEX PLANE ========== -->
  <!-- origin at (220, 310), generous space for the triangle -->

  <!-- Light grid -->
  <line x1="60" y1="110" x2="500" y2="110" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="160" x2="500" y2="160" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="210" x2="500" y2="210" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="260" x2="500" y2="260" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="360" x2="500" y2="360" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="410" x2="500" y2="410" stroke="#d8e8f0" stroke-width="0.5"/>

  <line x1="120" y1="80" x2="120" y2="430" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="170" y1="80" x2="170" y2="430" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="270" y1="80" x2="270" y2="430" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="320" y1="80" x2="320" y2="430" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="370" y1="80" x2="370" y2="430" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="420" y1="80" x2="420" y2="430" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="470" y1="80" x2="470" y2="430" stroke="#d8e8f0" stroke-width="0.5"/>

  <!-- Axes -->
  <line x1="45" y1="310" x2="508" y2="310" stroke="#f89838" stroke-width="2" marker-end="url(#axisArrow)"/>
  <line x1="220" y1="438" x2="220" y2="78" stroke="#304090" stroke-width="2" marker-end="url(#axisArrow)"/>

  <text x="510" y="328" font-size="12" font-weight="600" fill="#f89838">Re</text>
  <text x="230" y="88" font-size="12" font-weight="600" fill="#304090">Im</text>

  <!-- Origin -->
  <circle cx="220" cy="310" r="3.5" fill="#102050"/>
  <text x="207" y="328" text-anchor="end" font-size="12" font-weight="600" fill="#102050">0</text>

  <!-- ========== THE TRIANGLE ========== -->
  <!-- z = a + bi at a general position, say (420, 130) -->
  <!-- That means a-leg from (220,310) to (420,310), b-leg from (420,310) to (420,130) -->

  <!-- Horizontal leg: a -->
  <line x1="220" y1="310" x2="420" y2="310" stroke="#f89838" stroke-width="3"/>

  <!-- Vertical leg: b -->
  <line x1="420" y1="310" x2="420" y2="130" stroke="#304090" stroke-width="3"/>

  <!-- Hypotenuse: |z| -->
  <line x1="220" y1="310" x2="420" y2="130" stroke="#4098d8" stroke-width="3.5"/>

  <!-- Right angle marker -->
  <polyline points="402,310 402,292 420,292" fill="none" stroke="#8a9ab0" stroke-width="1.2"/>

  <!-- Point z -->
  <circle cx="420" cy="130" r="7" fill="#4098d8" filter="url(#soft)"/>

  <!-- ========== LABELS ========== -->

  <!-- z label -->
  <text x="436" y="124" font-size="16" font-weight="700" fill="#102050"><tspan font-style="italic">z</tspan> = <tspan font-style="italic">a</tspan> + <tspan font-style="italic">bi</tspan></text>

  <!-- Coordinate label -->
  <text x="436" y="144" font-size="13" fill="#6080a0">(<tspan font-style="italic">a</tspan>, <tspan font-style="italic">b</tspan>)</text>

  <!-- a label — centered under horizontal leg -->
  <text x="320" y="340" text-anchor="middle" font-size="16" font-weight="700" fill="#f89838" font-style="italic">a</text>

  <!-- b label — right of vertical leg -->
  <text x="438" y="225" font-size="16" font-weight="700" fill="#304090" font-style="italic">b</text>

  <!-- |z| label — along hypotenuse -->
  <!-- midpoint of hypotenuse: (320, 220), angle ≈ -42° -->
  <text x="298" y="204" font-size="16" font-weight="700" fill="#4098d8" transform="rotate(-42, 298, 204)">|<tspan font-style="italic">z</tspan>|</text>

  <!-- Dashed projection from z to real axis -->
  <line x1="420" y1="130" x2="420" y2="310" stroke="#304090" stroke-width="1" stroke-dasharray="4,3" opacity="0.25"/>

  <!-- Dashed projection from z to imaginary axis -->
  <line x1="420" y1="130" x2="220" y2="130" stroke="#f89838" stroke-width="1" stroke-dasharray="4,3" opacity="0.25"/>

  <!-- a marker on real axis -->
  <circle cx="420" cy="310" r="3" fill="#f89838" opacity="0.6"/>

  <!-- b marker on imaginary axis -->
  <circle cx="220" cy="130" r="3" fill="#304090" opacity="0.6"/>
  <text x="207" y="134" text-anchor="end" font-size="12" font-weight="600" fill="#304090" font-style="italic">b</text>
  <text x="420" y="355" text-anchor="middle" font-size="12" font-weight="600" fill="#f89838" font-style="italic">a</text>

  <!-- ========== FORMULA PANEL ========== -->
  <rect x="530" y="200" width="170" height="140" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>

  <text x="615" y="228" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">Pythagorean</text>
  <line x1="550" y1="238" x2="680" y2="238" stroke="#d8e8f0" stroke-width="1"/>

  <!-- |z|² = a² + b² -->
  <text x="615" y="266" text-anchor="middle" font-size="15" fill="#102050">|<tspan font-style="italic">z</tspan>|² = <tspan fill="#f89838" font-style="italic">a</tspan>² + <tspan fill="#304090" font-style="italic">b</tspan>²</text>

  <!-- therefore -->
  <text x="615" y="292" text-anchor="middle" font-size="13" fill="#8a9ab0">therefore</text>

  <!-- |z| = √(a² + b²) -->
  <text x="615" y="322" text-anchor="middle" font-size="17" font-weight="700" fill="#4098d8">|<tspan font-style="italic">z</tspan>| = √(<tspan fill="#f89838" font-style="italic">a</tspan>² + <tspan fill="#304090" font-style="italic">b</tspan>²)</text>

  <!-- ========== PROPERTIES NOTE ========== -->
  <rect x="530" y="365" width="170" height="68" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="615" y="390" text-anchor="middle" font-size="11" fill="#6080a0">|<tspan font-style="italic">z</tspan>| ≥ 0    always</text>
  <text x="615" y="410" text-anchor="middle" font-size="11" fill="#6080a0">|<tspan font-style="italic">z</tspan>| = 0  ⟺  <tspan font-style="italic">z</tspan> = 0</text>

  <!-- Footnote -->
  <text x="360" y="450" text-anchor="middle" font-size="12" fill="#8a9ab0" font-style="italic">Modulus generalizes absolute value from a line to a plane</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "always positive":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 600" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
    <marker id="axisArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7" fill="#102050"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="840" height="600" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="320" y="38" text-anchor="middle" font-size="24" font-weight="700" fill="#102050">|<tspan font-style="italic">z</tspan>| Is Always Positive</text>
  <line x1="160" y1="50" x2="480" y2="50" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>
  <text x="320" y="70" text-anchor="middle" font-size="13" fill="#6080a0">The same distance in every quadrant</text>

  <!-- ========== COMPLEX PLANE ========== -->
  <!-- origin at (320, 310), 1 unit = 45px -->

  <!-- Light grid -->
  <line x1="50" y1="130" x2="590" y2="130" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="50" y1="175" x2="590" y2="175" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="50" y1="220" x2="590" y2="220" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="50" y1="265" x2="590" y2="265" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="50" y1="355" x2="590" y2="355" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="50" y1="400" x2="590" y2="400" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="50" y1="445" x2="590" y2="445" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="50" y1="490" x2="590" y2="490" stroke="#d8e8f0" stroke-width="0.5"/>

  <line x1="95" y1="90" x2="95" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="140" y1="90" x2="140" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="185" y1="90" x2="185" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="230" y1="90" x2="230" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="275" y1="90" x2="275" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="365" y1="90" x2="365" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="410" y1="90" x2="410" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="455" y1="90" x2="455" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="500" y1="90" x2="500" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="545" y1="90" x2="545" y2="530" stroke="#d8e8f0" stroke-width="0.5"/>

  <!-- Axes -->
  <line x1="40" y1="310" x2="598" y2="310" stroke="#f89838" stroke-width="2" marker-end="url(#axisArrow)"/>
  <line x1="320" y1="538" x2="320" y2="88" stroke="#304090" stroke-width="2" marker-end="url(#axisArrow)"/>

  <text x="600" y="328" font-size="12" font-weight="600" fill="#f89838">Re</text>
  <text x="330" y="98" font-size="12" font-weight="600" fill="#304090">Im</text>

  <!-- Tick labels real -->
  <text x="185" y="325" text-anchor="middle" font-size="9" fill="#8a9ab0">−3</text>
  <text x="230" y="325" text-anchor="middle" font-size="9" fill="#8a9ab0">−2</text>
  <text x="275" y="325" text-anchor="middle" font-size="9" fill="#8a9ab0">−1</text>
  <text x="365" y="325" text-anchor="middle" font-size="9" fill="#8a9ab0">1</text>
  <text x="410" y="325" text-anchor="middle" font-size="9" fill="#8a9ab0">2</text>
  <text x="455" y="325" text-anchor="middle" font-size="9" fill="#8a9ab0">3</text>
  <text x="500" y="325" text-anchor="middle" font-size="9" fill="#8a9ab0">4</text>

  <!-- Tick labels imaginary -->
  <text x="308" y="269" text-anchor="end" font-size="9" fill="#8a9ab0"><tspan font-style="italic">i</tspan></text>
  <text x="308" y="224" text-anchor="end" font-size="9" fill="#8a9ab0">2<tspan font-style="italic">i</tspan></text>
  <text x="308" y="179" text-anchor="end" font-size="9" fill="#8a9ab0">3<tspan font-style="italic">i</tspan></text>
  <text x="308" y="134" text-anchor="end" font-size="9" fill="#8a9ab0">4<tspan font-style="italic">i</tspan></text>
  <text x="308" y="359" text-anchor="end" font-size="9" fill="#8a9ab0">−<tspan font-style="italic">i</tspan></text>
  <text x="308" y="404" text-anchor="end" font-size="9" fill="#8a9ab0">−2<tspan font-style="italic">i</tspan></text>
  <text x="308" y="449" text-anchor="end" font-size="9" fill="#8a9ab0">−3<tspan font-style="italic">i</tspan></text>
  <text x="308" y="494" text-anchor="end" font-size="9" fill="#8a9ab0">−4<tspan font-style="italic">i</tspan></text>

  <!-- Origin -->
  <circle cx="320" cy="310" r="3.5" fill="#102050"/>
  <text x="328" y="325" font-size="10" font-weight="600" fill="#102050">0</text>

  <!-- ========== CIRCLE of radius 5 (=225px at 45px/unit) ========== -->
  <circle cx="320" cy="310" r="225" fill="none" stroke="#4098d8" stroke-width="1.5" stroke-dasharray="8,5" opacity="0.25"/>

  <!-- ========== QUADRANT I: z₁ = 3 + 4i ========== -->
  <!-- Point at (320+3*45, 310-4*45) = (455, 130) -->

  <!-- Triangle -->
  <line x1="320" y1="310" x2="455" y2="310" stroke="#f89838" stroke-width="2"/>
  <line x1="455" y1="310" x2="455" y2="130" stroke="#304090" stroke-width="2"/>
  <line x1="320" y1="310" x2="455" y2="130" stroke="#4098d8" stroke-width="2.5"/>
  <polyline points="441,310 441,296 455,296" fill="none" stroke="#8a9ab0" stroke-width="0.8"/>

  <!-- Point -->
  <circle cx="455" cy="130" r="6" fill="#4098d8" filter="url(#soft)"/>

  <!-- Labels -->
  <text x="467" y="124" font-size="13" font-weight="700" fill="#102050">3 + 4<tspan font-style="italic">i</tspan></text>
  <text x="387" y="305" text-anchor="middle" font-size="11" font-weight="600" fill="#f89838">3</text>
  <text x="466" y="224" font-size="11" font-weight="600" fill="#304090">4</text>
  <!-- |z| -->
  <text x="372" y="208" font-size="13" font-weight="700" fill="#4098d8" transform="rotate(-53, 372, 208)">|<tspan font-style="italic">z</tspan>| = 5</text>

  <!-- ========== QUADRANT II: z₂ = −3 + 4i ========== -->
  <!-- Point at (320+(-3)*45, 310-4*45) = (185, 130) -->

  <!-- Triangle -->
  <line x1="320" y1="310" x2="185" y2="310" stroke="#f89838" stroke-width="2"/>
  <line x1="185" y1="310" x2="185" y2="130" stroke="#304090" stroke-width="2"/>
  <line x1="320" y1="310" x2="185" y2="130" stroke="#4098d8" stroke-width="2.5"/>
  <polyline points="199,310 199,296 185,296" fill="none" stroke="#8a9ab0" stroke-width="0.8"/>

  <!-- Point -->
  <circle cx="185" cy="130" r="6" fill="#4098d8" filter="url(#soft)"/>

  <!-- Labels -->
  <text x="86" y="124" font-size="13" font-weight="700" fill="#102050">−3 + 4<tspan font-style="italic">i</tspan></text>
  <text x="252" y="305" text-anchor="middle" font-size="11" font-weight="600" fill="#f89838">−3</text>
  <text x="172" y="224" text-anchor="end" font-size="11" font-weight="600" fill="#304090">4</text>
  <!-- |z| -->
  <text x="268" y="208" font-size="13" font-weight="700" fill="#4098d8" transform="rotate(53, 268, 208)">|<tspan font-style="italic">z</tspan>| = 5</text>

  <!-- ========== QUADRANT III: z₃ = −3 − 4i ========== -->
  <!-- Point at (320+(-3)*45, 310+4*45) = (185, 490) -->

  <!-- Triangle -->
  <line x1="320" y1="310" x2="185" y2="310" stroke="#f89838" stroke-width="2"/>
  <line x1="185" y1="310" x2="185" y2="490" stroke="#304090" stroke-width="2"/>
  <line x1="320" y1="310" x2="185" y2="490" stroke="#4098d8" stroke-width="2.5"/>
  <polyline points="199,310 199,324 185,324" fill="none" stroke="#8a9ab0" stroke-width="0.8"/>

  <!-- Point -->
  <circle cx="185" cy="490" r="6" fill="#4098d8" filter="url(#soft)"/>

  <!-- Labels -->
  <text x="82" y="502" font-size="13" font-weight="700" fill="#102050">−3 − 4<tspan font-style="italic">i</tspan></text>
  <text x="252" y="320" text-anchor="middle" font-size="11" font-weight="600" fill="#f89838">−3</text>
  <text x="172" y="404" text-anchor="end" font-size="11" font-weight="600" fill="#304090">−4</text>
  <!-- |z| -->
  <text x="268" y="412" font-size="13" font-weight="700" fill="#4098d8" transform="rotate(-53, 268, 412)">|<tspan font-style="italic">z</tspan>| = 5</text>

  <!-- ========== QUADRANT IV: z₄ = 3 − 4i ========== -->
  <!-- Point at (320+3*45, 310+4*45) = (455, 490) -->

  <!-- Triangle -->
  <line x1="320" y1="310" x2="455" y2="310" stroke="#f89838" stroke-width="2"/>
  <line x1="455" y1="310" x2="455" y2="490" stroke="#304090" stroke-width="2"/>
  <line x1="320" y1="310" x2="455" y2="490" stroke="#4098d8" stroke-width="2.5"/>
  <polyline points="441,310 441,324 455,324" fill="none" stroke="#8a9ab0" stroke-width="0.8"/>

  <!-- Point -->
  <circle cx="455" cy="490" r="6" fill="#4098d8" filter="url(#soft)"/>

  <!-- Labels -->
  <text x="467" y="502" font-size="13" font-weight="700" fill="#102050">3 − 4<tspan font-style="italic">i</tspan></text>
  <text x="387" y="320" text-anchor="middle" font-size="11" font-weight="600" fill="#f89838">3</text>
  <text x="466" y="404" font-size="11" font-weight="600" fill="#304090">−4</text>
  <!-- |z| -->
  <text x="372" y="412" font-size="13" font-weight="700" fill="#4098d8" transform="rotate(53, 372, 412)">|<tspan font-style="italic">z</tspan>| = 5</text>

  <!-- ========== RIGHT SIDE PANELS ========== -->

  <!-- Formula -->
  <rect x="635" y="95" width="185" height="72" rx="12" fill="#fff" stroke="#4098d8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="727" y="118" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">Formula</text>
  <line x1="655" y1="127" x2="800" y2="127" stroke="#d8e8f0" stroke-width="1"/>
  <text x="727" y="152" text-anchor="middle" font-size="16" font-weight="700" fill="#4098d8">|<tspan font-style="italic">z</tspan>| = √(<tspan fill="#f89838" font-style="italic">a</tspan>² + <tspan fill="#304090" font-style="italic">b</tspan>²)</text>

  <!-- All four computations -->
  <rect x="635" y="185" width="185" height="220" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="727" y="208" text-anchor="middle" font-size="12" font-weight="700" fill="#102050">All Four Quadrants</text>
  <line x1="655" y1="217" x2="800" y2="217" stroke="#d8e8f0" stroke-width="1"/>

  <!-- Q1 -->
  <text x="655" y="240" font-size="11" fill="#6080a0">(<tspan fill="#f89838">3</tspan>)² + (<tspan fill="#304090">4</tspan>)²</text>
  <text x="780" y="240" text-anchor="end" font-size="11" fill="#6080a0">= 9 + 16</text>
  <text x="800" y="240" text-anchor="end" font-size="12" font-weight="700" fill="#4098d8">= 25</text>

  <!-- Q2 -->
  <text x="655" y="268" font-size="11" fill="#6080a0">(<tspan fill="#f89838">−3</tspan>)² + (<tspan fill="#304090">4</tspan>)²</text>
  <text x="780" y="268" text-anchor="end" font-size="11" fill="#6080a0">= 9 + 16</text>
  <text x="800" y="268" text-anchor="end" font-size="12" font-weight="700" fill="#4098d8">= 25</text>

  <!-- Q3 -->
  <text x="655" y="296" font-size="11" fill="#6080a0">(<tspan fill="#f89838">−3</tspan>)² + (<tspan fill="#304090">−4</tspan>)²</text>
  <text x="780" y="296" text-anchor="end" font-size="11" fill="#6080a0">= 9 + 16</text>
  <text x="800" y="296" text-anchor="end" font-size="12" font-weight="700" fill="#4098d8">= 25</text>

  <!-- Q4 -->
  <text x="655" y="324" font-size="11" fill="#6080a0">(<tspan fill="#f89838">3</tspan>)² + (<tspan fill="#304090">−4</tspan>)²</text>
  <text x="780" y="324" text-anchor="end" font-size="11" fill="#6080a0">= 9 + 16</text>
  <text x="800" y="324" text-anchor="end" font-size="12" font-weight="700" fill="#4098d8">= 25</text>

  <!-- Separator -->
  <line x1="655" y1="340" x2="800" y2="340" stroke="#d8e8f0" stroke-width="1"/>

  <text x="727" y="362" text-anchor="middle" font-size="14" font-weight="700" fill="#4098d8">√25 = 5</text>
  <text x="727" y="382" text-anchor="middle" font-size="11" fill="#8a9ab0" font-style="italic">every time</text>
  <text x="727" y="398" text-anchor="middle" font-size="10" fill="#8a9ab0" font-style="italic">signs vanish when squared</text>

  <!-- Key insight box -->
  <rect x="635" y="425" width="185" height="90" rx="12" fill="#fff" stroke="#4098d8" stroke-width="1.5" filter="url(#soft)"/>
  <text x="727" y="450" text-anchor="middle" font-size="12" font-weight="700" fill="#4098d8">Why always positive?</text>
  <line x1="655" y1="459" x2="800" y2="459" stroke="#d8e8f0" stroke-width="1"/>
  <text x="727" y="478" text-anchor="middle" font-size="11" fill="#6080a0">(<tspan fill="#f89838">−<tspan font-style="italic">a</tspan></tspan>)² = <tspan fill="#f89838" font-style="italic">a</tspan>²</text>
  <text x="727" y="498" text-anchor="middle" font-size="11" fill="#6080a0">(<tspan fill="#304090">−<tspan font-style="italic">b</tspan></tspan>)² = <tspan fill="#304090" font-style="italic">b</tspan>²</text>
  <text x="727" y="512" text-anchor="middle" font-size="10" fill="#8a9ab0" font-style="italic">sum of squares ≥ 0</text>

  <!-- Footnote -->
  <text x="320" y="570" text-anchor="middle" font-size="12" fill="#8a9ab0" font-style="italic">All four points lie on the same circle — same distance from the origin, regardless of quadrant</text>
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