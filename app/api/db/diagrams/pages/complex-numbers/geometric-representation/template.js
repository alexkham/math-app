
export const geometricRepresentationData={
    "complex plane":{
        svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 620" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
    <marker id="axisArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7" fill="#102050"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="800" height="620" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="400" y="40" text-anchor="middle" font-size="24" font-weight="700" fill="#102050">The Complex Plane</text>
  <line x1="260" y1="52" x2="540" y2="52" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- Grid area: origin at (400, 320), 1 unit = 55px -->
  <!-- Light grid lines -->
  <!-- Vertical grid lines -->
  <line x1="125" y1="100" x2="125" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="180" y1="100" x2="180" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="235" y1="100" x2="235" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="290" y1="100" x2="290" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="345" y1="100" x2="345" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="455" y1="100" x2="455" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="510" y1="100" x2="510" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="565" y1="100" x2="565" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="620" y1="100" x2="620" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="675" y1="100" x2="675" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>

  <!-- Horizontal grid lines -->
  <line x1="100" y1="100" x2="700" y2="100" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="100" y1="155" x2="700" y2="155" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="100" y1="210" x2="700" y2="210" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="100" y1="265" x2="700" y2="265" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="100" y1="375" x2="700" y2="375" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="100" y1="430" x2="700" y2="430" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="100" y1="485" x2="700" y2="485" stroke="#d8e8f0" stroke-width="0.7"/>
  <line x1="100" y1="540" x2="700" y2="540" stroke="#d8e8f0" stroke-width="0.7"/>

  <!-- === AXES === -->
  <!-- Real axis (horizontal) — orange -->
  <line x1="90" y1="320" x2="710" y2="320" stroke="#f89838" stroke-width="2.5" marker-end="url(#axisArrow)"/>
  <!-- Imaginary axis (vertical) — navy -->
  <line x1="400" y1="555" x2="400" y2="80" stroke="#304090" stroke-width="2.5" marker-end="url(#axisArrow)"/>

  <!-- Axis labels -->
  <text x="725" y="325" font-size="15" font-weight="700" fill="#f89838">Real Axis</text>
  <text x="405" y="75" font-size="15" font-weight="700" fill="#304090">Imaginary</text>
  <text x="405" y="90" font-size="15" font-weight="700" fill="#304090">Axis</text>

  <!-- === TICK MARKS AND LABELS ON REAL AXIS === -->
  <!-- -5 to 5 range, 1 unit = 55px, origin at x=400 -->
  <!-- Integers: -3, -2, -1, 1, 2, 3 -->
  <!-- -3 at x=235 -->
  <line x1="235" y1="315" x2="235" y2="325" stroke="#f89838" stroke-width="1.5"/>
  <circle cx="235" cy="320" r="3.5" fill="#f89838"/>
  <text x="235" y="340" text-anchor="middle" font-size="13" font-weight="600" fill="#102050">−3</text>

  <!-- -2 at x=290 -->
  <line x1="290" y1="315" x2="290" y2="325" stroke="#f89838" stroke-width="1.5"/>
  <circle cx="290" cy="320" r="3.5" fill="#f89838"/>
  <text x="290" y="340" text-anchor="middle" font-size="13" font-weight="600" fill="#102050">−2</text>

  <!-- -1 at x=345 -->
  <line x1="345" y1="315" x2="345" y2="325" stroke="#f89838" stroke-width="1.5"/>
  <circle cx="345" cy="320" r="3.5" fill="#f89838"/>
  <text x="345" y="340" text-anchor="middle" font-size="13" font-weight="600" fill="#102050">−1</text>

  <!-- 1 at x=455 -->
  <line x1="455" y1="315" x2="455" y2="325" stroke="#f89838" stroke-width="1.5"/>
  <circle cx="455" cy="320" r="3.5" fill="#f89838"/>
  <text x="455" y="340" text-anchor="middle" font-size="13" font-weight="600" fill="#102050">1</text>

  <!-- √2 ≈ 1.414 at x≈478 -->
  <circle cx="478" cy="320" r="3" fill="#f89838" opacity="0.7"/>
  <text x="478" y="355" text-anchor="middle" font-size="11" font-weight="600" fill="#c07028" font-style="italic">√2</text>

  <!-- 2 at x=510 -->
  <line x1="510" y1="315" x2="510" y2="325" stroke="#f89838" stroke-width="1.5"/>
  <circle cx="510" cy="320" r="3.5" fill="#f89838"/>
  <text x="510" y="340" text-anchor="middle" font-size="13" font-weight="600" fill="#102050">2</text>

  <!-- 3 at x=565 -->
  <line x1="565" y1="315" x2="565" y2="325" stroke="#f89838" stroke-width="1.5"/>
  <circle cx="565" cy="320" r="3.5" fill="#f89838"/>
  <text x="565" y="340" text-anchor="middle" font-size="13" font-weight="600" fill="#102050">3</text>

  <!-- π ≈ 3.14 at x≈573 -->
  <circle cx="573" cy="320" r="3" fill="#f89838" opacity="0.7"/>
  <text x="573" y="355" text-anchor="middle" font-size="11" font-weight="600" fill="#c07028" font-style="italic">π</text>

  <!-- === TICK MARKS AND LABELS ON IMAGINARY AXIS === -->
  <!-- i at y=265 (one unit up) -->
  <line x1="395" y1="265" x2="405" y2="265" stroke="#304090" stroke-width="1.5"/>
  <circle cx="400" cy="265" r="3.5" fill="#304090"/>
  <text x="385" y="269" text-anchor="end" font-size="13" font-weight="600" fill="#102050" font-style="italic">i</text>

  <!-- 2i at y=210 -->
  <line x1="395" y1="210" x2="405" y2="210" stroke="#304090" stroke-width="1.5"/>
  <circle cx="400" cy="210" r="3.5" fill="#304090"/>
  <text x="385" y="214" text-anchor="end" font-size="13" font-weight="600" fill="#102050">2<tspan font-style="italic">i</tspan></text>

  <!-- 3i at y=155 -->
  <line x1="395" y1="155" x2="405" y2="155" stroke="#304090" stroke-width="1.5"/>
  <circle cx="400" cy="155" r="3.5" fill="#304090"/>
  <text x="385" y="159" text-anchor="end" font-size="13" font-weight="600" fill="#102050">3<tspan font-style="italic">i</tspan></text>

  <!-- -i at y=375 -->
  <line x1="395" y1="375" x2="405" y2="375" stroke="#304090" stroke-width="1.5"/>
  <circle cx="400" cy="375" r="3.5" fill="#304090"/>
  <text x="385" y="379" text-anchor="end" font-size="13" font-weight="600" fill="#102050">−<tspan font-style="italic">i</tspan></text>

  <!-- -2i at y=430 -->
  <line x1="395" y1="430" x2="405" y2="430" stroke="#304090" stroke-width="1.5"/>
  <circle cx="400" cy="430" r="3.5" fill="#304090"/>
  <text x="385" y="434" text-anchor="end" font-size="13" font-weight="600" fill="#102050">−2<tspan font-style="italic">i</tspan></text>

  <!-- -3i at y=485 -->
  <line x1="395" y1="485" x2="405" y2="485" stroke="#304090" stroke-width="1.5"/>
  <circle cx="400" cy="485" r="3.5" fill="#304090"/>
  <text x="385" y="489" text-anchor="end" font-size="13" font-weight="600" fill="#102050">−3<tspan font-style="italic">i</tspan></text>

  <!-- === ORIGIN === -->
  <!-- Highlighted ring -->
  <circle cx="400" cy="320" r="10" fill="#fff" stroke="#4098d8" stroke-width="2" filter="url(#soft)"/>
  <circle cx="400" cy="320" r="4" fill="#4098d8"/>
  <text x="414" y="340" font-size="13" font-weight="700" fill="#102050">0</text>

  <!-- Origin callout -->
  <line x1="400" y1="332" x2="400" y2="380" stroke="none"/>
  <line x1="420" y1="340" x2="480" y2="380" stroke="#4098d8" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
  <!-- Origin annotation box — positioned bottom right of origin -->
  <rect x="460" y="365" width="180" height="58" rx="10" fill="#fff" stroke="#4098d8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="550" y="384" text-anchor="middle" font-size="11" font-weight="700" fill="#4098d8" letter-spacing="1">THE ORIGIN</text>
  <text x="550" y="399" text-anchor="middle" font-size="12" fill="#6080a0">0 = 0 + 0<tspan font-style="italic">i</tspan></text>
  <text x="550" y="414" text-anchor="middle" font-size="10.5" fill="#6080a0" font-style="italic">on both axes simultaneously</text>

  <!-- === SAMPLE POINT in a quadrant === -->
  <!-- z = 2 + 3i at (510, 155) -->
  <circle cx="510" cy="155" r="5.5" fill="#4098d8" filter="url(#soft)"/>
  <!-- Dashed projection lines -->
  <line x1="510" y1="155" x2="510" y2="320" stroke="#4098d8" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
  <line x1="510" y1="155" x2="400" y2="155" stroke="#4098d8" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/>
  <!-- a=2 label above real axis -->
  <text x="510" y="307" text-anchor="middle" font-size="11" font-weight="600" fill="#f89838"><tspan font-style="italic">a</tspan> = 2</text>
  <!-- b=3 label right of imaginary axis -->
  <text x="415" y="150" font-size="11" font-weight="600" fill="#304090"><tspan font-style="italic">b</tspan> = 3</text>
  <!-- Label -->
  <text x="522" y="148" font-size="13" font-weight="700" fill="#102050"><tspan font-style="italic">z</tspan> = 2 + 3<tspan font-style="italic">i</tspan></text>

  <!-- === Axis description labels === -->
  <!-- Real axis label box -->
  <rect x="100" y="560" width="260" height="42" rx="10" fill="#fff" stroke="#f89838" stroke-width="1.2" filter="url(#soft)"/>
  <text x="230" y="578" text-anchor="middle" font-size="11" font-weight="600" fill="#f89838" letter-spacing="0.5">REAL AXIS</text>
  <text x="230" y="593" text-anchor="middle" font-size="11" fill="#6080a0">points (<tspan font-style="italic">a</tspan>, 0)  →  <tspan font-style="italic">z</tspan> = <tspan font-style="italic">a</tspan></text>

  <!-- Imaginary axis label box -->
  <rect x="440" y="560" width="260" height="42" rx="10" fill="#fff" stroke="#304090" stroke-width="1.2" filter="url(#soft)"/>
  <text x="570" y="578" text-anchor="middle" font-size="11" font-weight="600" fill="#304090" letter-spacing="0.5">IMAGINARY AXIS</text>
  <text x="570" y="593" text-anchor="middle" font-size="11" fill="#6080a0">points (0, <tspan font-style="italic">b</tspan>)  →  <tspan font-style="italic">z</tspan> = <tspan font-style="italic">b</tspan><tspan font-style="italic">i</tspan></text>

  <!-- Quadrant labels (subtle) -->
  <text x="310" y="190" text-anchor="middle" font-size="11" fill="#b0c0d0" font-weight="600">II</text>
  <text x="490" y="190" text-anchor="middle" font-size="11" fill="#b0c0d0" font-weight="600">I</text>
  <text x="310" y="460" text-anchor="middle" font-size="11" fill="#b0c0d0" font-weight="600">III</text>
  <text x="490" y="460" text-anchor="middle" font-size="11" fill="#b0c0d0" font-weight="600">IV</text>
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