
export const complexConjugateData={
    "complex conjugate":{
        svg:``,
        explanation:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 560" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <filter id="soft" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#102050" flood-opacity="0.08"/>
    </filter>
    <marker id="axisArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7" fill="#102050"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="820" height="560" rx="18" fill="#f0f8f8"/>

  <!-- Title -->
  <text x="290" y="40" text-anchor="middle" font-size="24" font-weight="700" fill="#102050">The Complex Conjugate</text>
  <line x1="140" y1="52" x2="440" y2="52" stroke="#b0d0e0" stroke-width="1.5" stroke-linecap="round"/>

  <!-- ========== COMPLEX PLANE (left area) ========== -->
  <!-- origin at (260, 280), 1 unit = 70px -->

  <!-- Light grid -->
  <line x1="50" y1="140" x2="470" y2="140" stroke="#d8e8f0" stroke-width="0.6"/>
  <line x1="50" y1="210" x2="470" y2="210" stroke="#d8e8f0" stroke-width="0.6"/>
  <line x1="50" y1="350" x2="470" y2="350" stroke="#d8e8f0" stroke-width="0.6"/>
  <line x1="50" y1="420" x2="470" y2="420" stroke="#d8e8f0" stroke-width="0.6"/>
  <line x1="120" y1="90" x2="120" y2="470" stroke="#d8e8f0" stroke-width="0.6"/>
  <line x1="190" y1="90" x2="190" y2="470" stroke="#d8e8f0" stroke-width="0.6"/>
  <line x1="330" y1="90" x2="330" y2="470" stroke="#d8e8f0" stroke-width="0.6"/>
  <line x1="400" y1="90" x2="400" y2="470" stroke="#d8e8f0" stroke-width="0.6"/>

  <!-- Reflection zone — subtle highlight on real axis -->
  <rect x="50" y="274" width="420" height="12" rx="2" fill="#f89838" opacity="0.06"/>

  <!-- Axes -->
  <line x1="40" y1="280" x2="478" y2="280" stroke="#f89838" stroke-width="2.5" marker-end="url(#axisArrow)"/>
  <line x1="260" y1="478" x2="260" y2="82" stroke="#304090" stroke-width="2.5" marker-end="url(#axisArrow)"/>

  <!-- Axis labels -->
  <text x="478" y="298" font-size="12" font-weight="600" fill="#f89838">Re</text>
  <text x="270" y="92" font-size="12" font-weight="600" fill="#304090">Im</text>

  <!-- ========== POINT z = a + bi (above real axis) ========== -->
  <!-- Position: a units right, b units up → (260 + a*70, 280 - b*70) -->
  <!-- Using visual position: roughly (380, 160) → a≈1.7, b≈1.7 -->
  <circle cx="380" cy="160" r="6" fill="#4098d8" filter="url(#soft)"/>

  <!-- Dashed projections from z -->
  <line x1="380" y1="160" x2="380" y2="280" stroke="#4098d8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.4"/>
  <line x1="380" y1="160" x2="260" y2="160" stroke="#4098d8" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.4"/>

  <!-- z label -->
  <text x="392" y="152" font-size="16" font-weight="700" fill="#102050"><tspan font-style="italic">z</tspan> = <tspan font-style="italic">a</tspan> + <tspan font-style="italic">bi</tspan></text>

  <!-- +b label on imaginary axis -->
  <text x="275" y="164" font-size="12" font-weight="600" fill="#304090">+<tspan font-style="italic">b</tspan></text>

  <!-- a label below real axis at projection -->
  <text x="380" y="270" text-anchor="middle" font-size="12" font-weight="600" fill="#f89838"><tspan font-style="italic">a</tspan></text>

  <!-- ========== POINT z̄ = a - bi (below real axis, mirror) ========== -->
  <circle cx="380" cy="400" r="6" fill="#f89838" filter="url(#soft)"/>

  <!-- Dashed projections from z̄ -->
  <line x1="380" y1="400" x2="380" y2="280" stroke="#f89838" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.4"/>
  <line x1="380" y1="400" x2="260" y2="400" stroke="#f89838" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.4"/>

  <!-- z̄ label -->
  <text x="392" y="416" font-size="16" font-weight="700" fill="#102050"><tspan font-style="italic" text-decoration="overline">z</tspan> = <tspan font-style="italic">a</tspan> − <tspan font-style="italic">bi</tspan></text>

  <!-- -b label on imaginary axis -->
  <text x="275" y="404" font-size="12" font-weight="600" fill="#304090">−<tspan font-style="italic">b</tspan></text>

  <!-- ========== MIRROR ARROW between z and z̄ ========== -->
  <!-- Vertical double arrow showing reflection -->
  <line x1="380" y1="172" x2="380" y2="392" stroke="#4098d8" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.35"/>

  <!-- Reflection label -->
  <rect x="402" y="268" width="68" height="24" rx="6" fill="#fff" stroke="#4098d8" stroke-width="1" filter="url(#soft)"/>
  <text x="436" y="284" text-anchor="middle" font-size="10" font-weight="600" fill="#4098d8">reflection</text>

  <!-- Small mirror arrows -->
  <line x1="376" y1="220" x2="376" y2="200" stroke="#4098d8" stroke-width="1.2" opacity="0.5"/>
  <path d="M373,204 L376,196 L379,204" fill="none" stroke="#4098d8" stroke-width="1.2" opacity="0.5"/>
  <line x1="376" y1="340" x2="376" y2="360" stroke="#f89838" stroke-width="1.2" opacity="0.5"/>
  <path d="M373,356 L376,364 L379,356" fill="none" stroke="#f89838" stroke-width="1.2" opacity="0.5"/>

  <!-- ========== SAME a label — showing real part unchanged ========== -->
  <text x="380" y="296" text-anchor="middle" font-size="12" font-weight="600" fill="#f89838"><tspan font-style="italic">a</tspan></text>

  <!-- ========== RIGHT SIDE PANELS ========== -->

  <!-- Panel 1: What changes, what stays -->
  <rect x="520" y="80" width="270" height="100" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="655" y="105" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">The Operation</text>
  <line x1="545" y1="114" x2="765" y2="114" stroke="#d8e8f0" stroke-width="1"/>

  <text x="545" y="136" font-size="12" fill="#6080a0">Real part <tspan font-style="italic" fill="#f89838">a</tspan></text>
  <text x="720" y="136" font-size="12" font-weight="700" fill="#4098d8">preserved</text>

  <text x="545" y="158" font-size="12" fill="#6080a0">Imaginary part <tspan font-style="italic" fill="#304090">b</tspan></text>
  <text x="720" y="158" font-size="12" font-weight="700" fill="#f89838">sign flipped</text>

  <!-- Panel 2: Notation -->
  <rect x="520" y="200" width="270" height="100" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="655" y="225" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">Notation</text>
  <line x1="545" y1="234" x2="765" y2="234" stroke="#d8e8f0" stroke-width="1"/>

  <text x="580" y="258" font-size="18" font-weight="700" fill="#304090" text-decoration="overline" font-style="italic">z</text>
  <text x="610" y="258" font-size="12" fill="#6080a0">— mathematics, textbooks</text>

  <text x="580" y="284" font-size="18" font-weight="700" fill="#304090"><tspan font-style="italic">z</tspan>*</text>
  <text x="610" y="284" font-size="12" fill="#6080a0">— physics, engineering</text>

  <!-- Panel 3: Conjugate ≠ Negation -->
  <rect x="520" y="320" width="270" height="145" rx="12" fill="#fff" stroke="#c8dce8" stroke-width="1.2" filter="url(#soft)"/>
  <text x="655" y="345" text-anchor="middle" font-size="13" font-weight="700" fill="#102050">Conjugate ≠ Negation</text>
  <line x1="545" y1="354" x2="765" y2="354" stroke="#d8e8f0" stroke-width="1"/>

  <!-- Conjugate row -->
  <text x="545" y="378" font-size="12" font-weight="600" fill="#4098d8" text-decoration="overline"><tspan font-style="italic">z</tspan></text>
  <text x="570" y="378" font-size="12" fill="#6080a0">= <tspan font-style="italic">a</tspan> − <tspan font-style="italic">bi</tspan></text>
  <text x="545" y="396" font-size="11" fill="#6080a0" font-style="italic">flips only imaginary sign</text>

  <!-- Separator -->
  <line x1="545" y1="410" x2="765" y2="410" stroke="#d8e8f0" stroke-width="0.8"/>

  <!-- Negation row -->
  <text x="545" y="432" font-size="12" font-weight="600" fill="#c05030">−<tspan font-style="italic">z</tspan></text>
  <text x="575" y="432" font-size="12" fill="#6080a0">= −<tspan font-style="italic">a</tspan> − <tspan font-style="italic">bi</tspan></text>
  <text x="545" y="450" font-size="11" fill="#6080a0" font-style="italic">flips both signs</text>

  <!-- Footnote -->
  <text x="290" y="530" text-anchor="middle" font-size="12" fill="#8a9ab0" font-style="italic">The real axis acts as a mirror — conjugation reflects across it</text>
</svg>`,
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