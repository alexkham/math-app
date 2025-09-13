const baseConversionsExplanations = {
  binary: {
    title: "Binary (Base 2)",
    description: "Uses only digits 0 and 1. Each position represents a power of 2.",
    example: "1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀"
  },
  octal: {
    title: "Octal (Base 8)",
    description: "Uses digits 0-7. Each position represents a power of 8.",
    example: "157₈ = 1×8² + 5×8¹ + 7×8⁰ = 64 + 40 + 7 = 111₁₀"
  },
  decimal: {
    title: "Decimal (Base 10)",
    description: "Standard counting system using digits 0-9. Each position represents a power of 10.",
    example: "123₁₀ = 1×10² + 2×10¹ + 3×10⁰ = 100 + 20 + 3 = 123₁₀"
  },
  hexadecimal: {
    title: "Hexadecimal (Base 16)",
    description: "Uses digits 0-9 and letters A-F (A=10, B=11, C=12, D=13, E=14, F=15).",
    example: "1A3₁₆ = 1×16² + 10×16¹ + 3×16⁰ = 256 + 160 + 3 = 419₁₀"
  },
  twosComplement: {
    title: "Two's Complement",
    description: "Method for representing negative numbers in binary. The most significant bit represents the sign.",
    example: "For 8-bit: -5 = 11111011₂ (flip bits of 5 and add 1)"
  },
  conversionToDecimal: {
    title: "Converting to Decimal",
    description: "Multiply each digit by its base raised to the position power, then sum all results.",
    example: "1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀"
  },
  conversionFromDecimal: {
    title: "Converting from Decimal",
    description: "Use repeated division by target base, collecting remainders from bottom to top.",
    example: "25₁₀ to binary: 25÷2=12 r1, 12÷2=6 r0, 6÷2=3 r0, 3÷2=1 r1, 1÷2=0 r1 → 11001₂"
  },
  conversionBetweenBases: {
    title: "Converting Between Non-Decimal Bases",
    description: "Convert to decimal as intermediate step, then convert decimal to target base.",
    example: "1F₁₆ to binary: 1F₁₆ → 31₁₀ → 11111₂"
  }
};

export default baseConversionsExplanations;