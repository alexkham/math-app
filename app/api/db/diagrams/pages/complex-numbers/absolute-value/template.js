
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
    "special cases":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 540" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
    <marker id="axisArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7" fill="#102050"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="860" height="540" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="300" y="38" text-anchor="middle" font-size="24" font-weight="700" fill="#102050">Modulus — Special Cases</text>
  <line x1="140" y1="50" x2="460" y2="50" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- ========== COMPLEX PLANE ========== -->
  <!-- origin at (300, 300), 1 unit = 40px -->

  <!-- Light grid -->
  <line x1="60" y1="140" x2="540" y2="140" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="180" x2="540" y2="180" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="220" x2="540" y2="220" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="260" x2="540" y2="260" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="340" x2="540" y2="340" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="380" x2="540" y2="380" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="420" x2="540" y2="420" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="60" y1="460" x2="540" y2="460" stroke="#d8e8f0" stroke-width="0.5"/>

  <line x1="100" y1="90" x2="100" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="140" y1="90" x2="140" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="180" y1="90" x2="180" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="220" y1="90" x2="220" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="260" y1="90" x2="260" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="340" y1="90" x2="340" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="380" y1="90" x2="380" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="420" y1="90" x2="420" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="460" y1="90" x2="460" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>
  <line x1="500" y1="90" x2="500" y2="500" stroke="#d8e8f0" stroke-width="0.5"/>

  <!-- Axes -->
  <line x1="48" y1="300" x2="548" y2="300" stroke="#f89838" stroke-width="2.5" marker-end="url(#axisArrow)"/>
  <line x1="300" y1="508" x2="300" y2="88" stroke="#304090" stroke-width="2.5" marker-end="url(#axisArrow)"/>

  <text x="552" y="296" font-size="12" font-weight="600" fill="#f89838">Re</text>
  <text x="310" y="98" font-size="12" font-weight="600" fill="#304090">Im</text>

  <!-- Tick labels real -->
  <text x="100" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">−5</text>
  <text x="140" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">−4</text>
  <text x="180" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">−3</text>
  <text x="220" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">−2</text>
  <text x="260" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">−1</text>
  <text x="340" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">1</text>
  <text x="380" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">2</text>
  <text x="420" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">3</text>
  <text x="460" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">4</text>
  <text x="500" y="316" text-anchor="middle" font-size="9" fill="#8a9ab0">5</text>

  <!-- Tick labels imaginary -->
  <text x="288" y="264" text-anchor="end" font-size="9" fill="#8a9ab0"><tspan font-style="italic">i</tspan></text>
  <text x="288" y="224" text-anchor="end" font-size="9" fill="#8a9ab0">2<tspan font-style="italic">i</tspan></text>
  <text x="288" y="184" text-anchor="end" font-size="9" fill="#8a9ab0">3<tspan font-style="italic">i</tspan></text>
  <text x="288" y="144" text-anchor="end" font-size="9" fill="#8a9ab0">4<tspan font-style="italic">i</tspan></text>
  <text x="288" y="344" text-anchor="end" font-size="9" fill="#8a9ab0">−<tspan font-style="italic">i</tspan></text>
  <text x="288" y="384" text-anchor="end" font-size="9" fill="#8a9ab0">−2<tspan font-style="italic">i</tspan></text>
  <text x="288" y="424" text-anchor="end" font-size="9" fill="#8a9ab0">−3<tspan font-style="italic">i</tspan></text>

  <!-- ========== PURELY REAL: on horizontal axis ========== -->

  <!-- z = 5 at (500, 300) -->
  <line x1="300" y1="300" x2="500" y2="300" stroke="#f89838" stroke-width="3"/>
  <circle cx="500" cy="300" r="6" fill="#f89838" filter="url(#soft)"/>
  <text x="500" y="290" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">5</text>
  <!-- |z| bracket above -->
  <line x1="300" y1="282" x2="500" y2="282" stroke="#f89838" stroke-width="1" opacity="0.4"/>
  <text x="400" y="276" text-anchor="middle" font-size="11" font-weight="600" fill="#f89838">|5| = 5</text>

  <!-- z = -7 at (300 + (-7)*40, 300) but -7 is off grid, use -5 visible portion -->
  <!-- Actually let's use z = -7 → x = 300 - 7*40 = 20, too far. Use the axis line and a label -->
  <!-- Better: show z = -7 conceptually with arrow going left, point at edge -->
  <!-- Let's use a smaller example that fits: z = -4 at x=140 -->

  <!-- z = -4 at (140, 300) — but let's do -7 as described. Compromise: show -5 -->
  <!-- Actually text says -7. Let's place it at the left edge with a note -->
  <!-- Simplest: use z = -7 label at left, line from origin going left -->
  <line x1="300" y1="300" x2="100" y2="300" stroke="#f89838" stroke-width="3" opacity="0.7"/>
  <circle cx="100" cy="300" r="6" fill="#f89838" filter="url(#soft)" opacity="0.85"/>
  <text x="100" y="290" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">−5</text>
  <!-- |z| bracket below -->
  <line x1="100" y1="332" x2="300" y2="332" stroke="#f89838" stroke-width="1" opacity="0.4"/>
  <text x="200" y="348" text-anchor="middle" font-size="11" font-weight="600" fill="#f89838">|−5| = 5</text>

  <!-- ========== PURE IMAGINARY: on vertical axis ========== -->

  <!-- z = 4i at (300, 140) -->
  <line x1="300" y1="300" x2="300" y2="140" stroke="#304090" stroke-width="3"/>
  <circle cx="300" cy="140" r="6" fill="#304090" filter="url(#soft)"/>
  <text x="315" y="136" font-size="13" font-weight="700" fill="#102050">4<tspan font-style="italic">i</tspan></text>
  <!-- |z| bracket right -->
  <line x1="318" y1="140" x2="318" y2="300" stroke="#304090" stroke-width="1" opacity="0.4"/>
  <text x="330" y="224" font-size="11" font-weight="600" fill="#304090">|4<tspan font-style="italic">i</tspan>| = 4</text>

  <!-- z = -3i at (300, 420) -->
  <line x1="300" y1="300" x2="300" y2="420" stroke="#304090" stroke-width="3" opacity="0.7"/>
  <circle cx="300" cy="420" r="6" fill="#304090" filter="url(#soft)" opacity="0.85"/>
  <text x="315" y="428" font-size="13" font-weight="700" fill="#102050">−3<tspan font-style="italic">i</tspan></text>
  <!-- |z| bracket left -->
  <line x1="282" y1="300" x2="282" y2="420" stroke="#304090" stroke-width="1" opacity="0.4"/>
  <text x="268" y="365" text-anchor="end" font-size="11" font-weight="600" fill="#304090">|−3<tspan font-style="italic">i</tspan>| = 3</text>

  <!-- ========== ZERO: the origin ========== -->
  <circle cx="300" cy="300" r="9" fill="#fff" stroke="#4098d8" stroke-width="2" filter="url(#soft)"/>
  <circle cx="300" cy="300" r="3.5" fill="#4098d8"/>

  <!-- Zero callout -->
  <line x1="300" y1="312" x2="340" y2="370" stroke="#4098d8" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <rect x="325" y="365" width="120" height="42" rx="8" fill="#fff" stroke="#4098d8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="385" y="382" text-anchor="middle" font-size="11" font-weight="700" fill="#4098d8">|0| = 0</text>
  <text x="385" y="398" text-anchor="middle" font-size="10" fill="#8a9ab0" font-style="italic">the only z with |z| = 0</text>

  <!-- ========== RIGHT SIDE PANELS ========== -->

  <!-- Panel 1: Purely Real -->
  <rect x="600" y="82" width="235" height="115" rx="12" fill="#fff" stroke="#f89838" stroke-width="1.2" filter="url(#soft)"/>
  <text x="717" y="106" text-anchor="middle" font-size="13" font-weight="700" fill="#f89838">Purely Real  (<tspan font-style="italic">b</tspan> = 0)</text>
  <line x1="620" y1="115" x2="815" y2="115" stroke="#d8e8f0" stroke-width="1"/>

  <text x="717" y="138" text-anchor="middle" font-size="13" fill="#102050"><tspan font-style="italic">z</tspan> = <tspan font-style="italic">a</tspan> + 0<tspan font-style="italic">i</tspan> = <tspan font-style="italic">a</tspan></text>
  <text x="717" y="160" text-anchor="middle" font-size="14" font-weight="700" fill="#f89838">|<tspan font-style="italic" fill="#102050">z</tspan>| = √(<tspan font-style="italic">a</tspan>² + 0) = |<tspan font-style="italic">a</tspan>|</text>
  <text x="717" y="184" text-anchor="middle" font-size="11" fill="#8a9ab0" font-style="italic">reduces to real absolute value</text>

  <!-- Panel 2: Pure Imaginary -->
  <rect x="600" y="215" width="235" height="115" rx="12" fill="#fff" stroke="#304090" stroke-width="1.2" filter="url(#soft)"/>
  <text x="717" y="239" text-anchor="middle" font-size="13" font-weight="700" fill="#304090">Pure Imaginary  (<tspan font-style="italic">a</tspan> = 0)</text>
  <line x1="620" y1="248" x2="815" y2="248" stroke="#d8e8f0" stroke-width="1"/>

  <text x="717" y="271" text-anchor="middle" font-size="13" fill="#102050"><tspan font-style="italic">z</tspan> = 0 + <tspan font-style="italic">bi</tspan> = <tspan font-style="italic">bi</tspan></text>
  <text x="717" y="293" text-anchor="middle" font-size="14" font-weight="700" fill="#304090">|<tspan font-style="italic" fill="#102050">z</tspan>| = √(0 + <tspan font-style="italic">b</tspan>²) = |<tspan font-style="italic">b</tspan>|</text>
  <text x="717" y="317" text-anchor="middle" font-size="11" fill="#8a9ab0" font-style="italic">distance up or down from origin</text>

  <!-- Panel 3: Zero -->
  <rect x="600" y="348" width="235" height="115" rx="12" fill="#fff" stroke="#4098d8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="717" y="372" text-anchor="middle" font-size="13" font-weight="700" fill="#4098d8">Zero  (<tspan font-style="italic">a</tspan> = 0, <tspan font-style="italic">b</tspan> = 0)</text>
  <line x1="620" y1="381" x2="815" y2="381" stroke="#d8e8f0" stroke-width="1"/>

  <text x="717" y="404" text-anchor="middle" font-size="13" fill="#102050"><tspan font-style="italic">z</tspan> = 0 + 0<tspan font-style="italic">i</tspan> = 0</text>
  <text x="717" y="426" text-anchor="middle" font-size="14" font-weight="700" fill="#4098d8">|<tspan font-style="italic" fill="#102050">z</tspan>| = √(0 + 0) = 0</text>
  <text x="717" y="450" text-anchor="middle" font-size="11" fill="#8a9ab0" font-style="italic">the unique z with |z| = 0</text>

  <!-- Footnote -->
  <text x="300" y="520" text-anchor="middle" font-size="12" fill="#8a9ab0" font-style="italic">Complex modulus and real absolute value agree completely on the real line</text>
</svg>`,
        explanation:``,
        links:[
            {text:``,url:``},
            {text:``,url:``},
            {text:``,url:``},
        ]
    },
    "triangle inequality":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 560" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
    <marker id="axisArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7" fill="#102050"/>
    </marker>
    <!-- Orange arrow for z1 -->
    <marker id="arrowOrange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0.5 L9,3.5 L0,6.5" fill="#f89838"/>
    </marker>
    <!-- Navy arrow for z2 -->
    <marker id="arrowNavy" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0.5 L9,3.5 L0,6.5" fill="#304090"/>
    </marker>
    <!-- Blue arrow for z1+z2 -->
    <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0.5 L9,3.5 L0,6.5" fill="#4098d8"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="860" height="560" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="310" y="38" text-anchor="middle" font-size="24" font-weight="700" fill="#102050">The Triangle Inequality</text>
  <line x1="140" y1="50" x2="480" y2="50" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- ========== COMPLEX PLANE ========== -->
  <!-- origin at (220, 360), generous space -->

  <!-- Light grid -->
  <line x1="60" y1="120" x2="540" y2="120" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="60" y1="170" x2="540" y2="170" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="60" y1="220" x2="540" y2="220" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="60" y1="270" x2="540" y2="270" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="60" y1="320" x2="540" y2="320" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="60" y1="410" x2="540" y2="410" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="60" y1="460" x2="540" y2="460" stroke="#d8e8f0" stroke-width="0.4"/>

  <line x1="120" y1="80" x2="120" y2="500" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="170" y1="80" x2="170" y2="500" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="270" y1="80" x2="270" y2="500" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="320" y1="80" x2="320" y2="500" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="370" y1="80" x2="370" y2="500" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="420" y1="80" x2="420" y2="500" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="470" y1="80" x2="470" y2="500" stroke="#d8e8f0" stroke-width="0.4"/>
  <line x1="520" y1="80" x2="520" y2="500" stroke="#d8e8f0" stroke-width="0.4"/>

  <!-- Axes -->
  <line x1="48" y1="360" x2="548" y2="360" stroke="#c8bfb0" stroke-width="1.5" marker-end="url(#axisArrow)"/>
  <line x1="220" y1="508" x2="220" y2="88" stroke="#c8bfb0" stroke-width="1.5" marker-end="url(#axisArrow)"/>

  <text x="548" y="378" font-size="11" font-weight="600" fill="#c8bfb0">Re</text>
  <text x="230" y="98" font-size="11" font-weight="600" fill="#c8bfb0">Im</text>

  <!-- Origin label -->
  <text x="208" y="378" text-anchor="end" font-size="13" font-weight="700" fill="#102050">0</text>

  <!-- ========== THE TRIANGLE ========== -->
  <!-- 
    Origin: (220, 360)
    z1 = roughly 4 + 1i → tip at (420, 310)  
    z2 = roughly -1 + 4i → as vector from z1 tip: (420-50, 310-200) = (370, 110)
    z1+z2 = 3 + 5i → tip at (370, 110)
  -->

  <!-- Shaded triangle fill -->
  <polygon points="220,360 420,310 370,110" fill="#4098d8" opacity="0.06"/>

  <!-- VECTOR z1: origin → (420, 310) — orange -->
  <line x1="220" y1="360" x2="412" y2="312" stroke="#f89838" stroke-width="3" marker-end="url(#arrowOrange)"/>

  <!-- VECTOR z2: from tip of z1 → z1+z2 — navy -->
  <line x1="420" y1="310" x2="373" y2="118" stroke="#304090" stroke-width="3" marker-end="url(#arrowNavy)"/>

  <!-- RESULTANT z1+z2: origin → (370, 110) — blue (the direct path) -->
  <line x1="220" y1="360" x2="364" y2="117" stroke="#4098d8" stroke-width="3.5" marker-end="url(#arrowBlue)"/>

  <!-- Points -->
  <circle cx="220" cy="360" r="5" fill="#102050"/>
  <circle cx="420" cy="310" r="5.5" fill="#f89838" filter="url(#soft)"/>
  <circle cx="370" cy="110" r="5.5" fill="#4098d8" filter="url(#soft)"/>

  <!-- ========== LABELS ON VECTORS ========== -->

  <!-- z1 label along the vector -->
  <text x="330" y="355" text-anchor="middle" font-size="15" font-weight="700" fill="#f89838" font-style="italic">z</text>
  <text x="340" y="358" font-size="10" font-weight="700" fill="#f89838">₁</text>

  <!-- z2 label along the vector -->
  <text x="410" y="210" font-size="15" font-weight="700" fill="#304090" font-style="italic">z</text>
  <text x="420" y="213" font-size="10" font-weight="700" fill="#304090">₂</text>

  <!-- z1+z2 label along the resultant -->
  <text x="268" y="220" font-size="15" font-weight="700" fill="#4098d8" font-style="italic">z</text>
  <text x="278" y="223" font-size="10" font-weight="700" fill="#4098d8">₁</text>
  <text x="288" y="220" font-size="15" font-weight="700" fill="#4098d8">+</text>
  <text x="300" y="220" font-size="15" font-weight="700" fill="#4098d8" font-style="italic">z</text>
  <text x="310" y="223" font-size="10" font-weight="700" fill="#4098d8">₂</text>

  <!-- Point labels -->
  <text x="434" y="308" font-size="13" font-weight="600" fill="#102050"><tspan font-style="italic">z</tspan>₁</text>
  <text x="378" y="104" font-size="13" font-weight="600" fill="#102050"><tspan font-style="italic">z</tspan>₁ + <tspan font-style="italic">z</tspan>₂</text>

  <!-- ========== LENGTH LABELS ========== -->

  <!-- |z1| along orange vector -->
  <text x="340" y="326" font-size="12" font-weight="600" fill="#f89838">|<tspan font-style="italic">z</tspan>₁|</text>

  <!-- |z2| along navy vector -->
  <text x="408" y="190" font-size="12" font-weight="600" fill="#304090">|<tspan font-style="italic">z</tspan>₂|</text>

  <!-- |z1+z2| along blue resultant -->
  <text x="268" y="246" font-size="12" font-weight="600" fill="#4098d8">|<tspan font-style="italic">z</tspan>₁ + <tspan font-style="italic">z</tspan>₂|</text>

  <!-- ========== DETOUR vs DIRECT annotation ========== -->

  <!-- Curly brace-like path labels -->
  <!-- "detour" label for the two-leg path -->
  <text x="470" y="260" font-size="11" fill="#8a9ab0" font-style="italic">detour</text>
  <line x1="440" y1="310" x2="470" y2="265" stroke="#8a9ab0" stroke-width="0.8" stroke-dasharray="3,2"/>
  <line x1="398" y1="130" x2="470" y2="255" stroke="#8a9ab0" stroke-width="0.8" stroke-dasharray="3,2"/>

  <!-- "direct" label for the resultant -->
  <text x="240" y="262" font-size="11" fill="#8a9ab0" font-style="italic">direct</text>

  <!-- ≤ symbol between them -->
  <text x="130" y="225" font-size="22" font-weight="700" fill="#4098d8">≤</text>
  <text x="108" y="248" font-size="11" fill="#8a9ab0">direct</text>
  <text x="145" y="248" font-size="11" fill="#8a9ab0">detour</text>
  <line x1="140" y1="236" x2="140" y2="210" stroke="#8a9ab0" stroke-width="0.6"/>

  <!-- ========== RIGHT SIDE PANELS ========== -->

  <!-- Main inequality -->
  <rect x="595" y="82" width="240" height="75" rx="12" fill="#fff" stroke="#4098d8" stroke-width="1.5" filter="url(#soft)"/>
  <text x="715" y="108" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">The Inequality</text>
  <line x1="615" y1="117" x2="815" y2="117" stroke="#d8e8f0" stroke-width="1"/>
  <text x="715" y="142" text-anchor="middle" font-size="17" font-weight="700" fill="#102050"><tspan fill="#4098d8">|<tspan font-style="italic">z</tspan>₁ + <tspan font-style="italic">z</tspan>₂|</tspan>  ≤  <tspan fill="#f89838">|<tspan font-style="italic">z</tspan>₁|</tspan> + <tspan fill="#304090">|<tspan font-style="italic">z</tspan>₂|</tspan></text>

  <!-- Geometric meaning -->
  <rect x="595" y="175" width="240" height="130" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="715" y="200" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">Geometric Meaning</text>
  <line x1="615" y1="209" x2="815" y2="209" stroke="#d8e8f0" stroke-width="1"/>

  <text x="625" y="232" font-size="12" fill="#4098d8" font-weight="600">Direct path:</text>
  <text x="625" y="249" font-size="11" fill="#6080a0">0 straight to <tspan font-style="italic">z</tspan>₁ + <tspan font-style="italic">z</tspan>₂</text>
  <text x="625" y="264" font-size="11" fill="#6080a0">length = <tspan fill="#4098d8" font-weight="600">|<tspan font-style="italic">z</tspan>₁ + <tspan font-style="italic">z</tspan>₂|</tspan></text>

  <line x1="625" y1="274" x2="805" y2="274" stroke="#d8e8f0" stroke-width="0.8"/>

  <text x="625" y="290" font-size="12" fill="#8a9ab0" font-weight="600">Detour path:</text>
  <text x="625" y="299" font-size="11" fill="#6080a0">0 → <tspan font-style="italic" fill="#f89838">z</tspan><tspan fill="#f89838">₁</tspan> → <tspan font-style="italic" fill="#304090">z</tspan><tspan fill="#304090">₁</tspan>+<tspan font-style="italic" fill="#304090">z</tspan><tspan fill="#304090">₂</tspan></text>

  <!-- Vector interpretation -->
  <rect x="595" y="323" width="240" height="110" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="715" y="348" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">Vector View</text>
  <line x1="615" y1="357" x2="815" y2="357" stroke="#d8e8f0" stroke-width="1"/>

  <circle cx="630" cy="377" r="4" fill="#f89838"/>
  <text x="642" y="381" font-size="11" fill="#6080a0">walk <tspan fill="#f89838" font-weight="600">|<tspan font-style="italic">z</tspan>₁|</tspan> along <tspan font-style="italic" fill="#f89838">z</tspan><tspan fill="#f89838">₁</tspan></text>

  <circle cx="630" cy="400" r="4" fill="#304090"/>
  <text x="642" y="404" font-size="11" fill="#6080a0">then <tspan fill="#304090" font-weight="600">|<tspan font-style="italic">z</tspan>₂|</tspan> along <tspan font-style="italic" fill="#304090">z</tspan><tspan fill="#304090">₂</tspan></text>

  <circle cx="630" cy="423" r="4" fill="#4098d8"/>
  <text x="642" y="427" font-size="11" fill="#6080a0">straight line ≤ total walk</text>

  <!-- Equality condition -->
  <rect x="595" y="451" width="240" height="55" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="715" y="474" text-anchor="middle" font-size="12" font-weight="700" fill="#102050">Equality when</text>
  <text x="715" y="496" text-anchor="middle" font-size="12" fill="#6080a0"><tspan font-style="italic">z</tspan>₁ and <tspan font-style="italic">z</tspan>₂ point in the <tspan font-weight="600" fill="#4098d8">same direction</tspan></text>

  <!-- Generalization note at bottom of geometric panel -->
  <!-- Rewrite lines 2-4 of geometric meaning panel -->

  <!-- Footnote -->
  <text x="310" y="535" text-anchor="middle" font-size="12" fill="#8a9ab0" font-style="italic">A side of a triangle never exceeds the sum of the other two sides</text>
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
    }
}