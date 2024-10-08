import FormulaWidget from '@/app/components/examples/FormulaWidget';
import React from 'react'
import '../pages.css'
import FormulaAccordion from '@/app/components/examples/FormulaAccordion';
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper';
import StatisticsCalculator from '@/app/components/calculators/statistics/StatisticsCalculator';
import explanations from '@/app/components/calculators/statistics/explanations';

export default function TestPage2() {
    const dummyData = {
        name: "Einstein's Energy-Mass Equivalence",
        formula: "E = mc^2",
        fields: {
          "E": "Total energy",
          "m": "Mass",
          "c": "Speed of light in vacuum (constant)"
        },
        before: "This famous equation expresses the equivalence of mass and energy.",
        after: "This principle is fundamental to modern physics and nuclear technology."
      };

      const gravitationalForce = {
        name: "Newton's Law of Universal Gravitation",
        formula: "F = G * (m1 * m2) / r^2",
        fields: {
          "F": "Gravitational force between the two masses",
          "G": "Gravitational constant",
          "m1": "Mass of the first object",
          "m2": "Mass of the second object",
          "r": "Distance between the centers of the masses"
        },
        before: "This law describes the gravitational attraction between two bodies with mass.",
        after: "It's used to calculate orbital motions and is fundamental in astrophysics."
      };


      const quadraticFormula = {
        name: "Quadratic Formula",
        formula: "x = (-b ± √(b^2 - 4ac)) / (2a)",
        fields: {
          "x": "Solutions to the quadratic equation",
          "a": "Coefficient of x^2",
          "b": "Coefficient of x",
          "c": "Constant term"
        },
        before: "The quadratic formula is used to solve quadratic equations of the form ax^2 + bx + c = 0.",
        after: "This formula gives the roots of a parabola and is widely used in algebra and higher mathematics."
      };
      
      const pythagoreanTheorem = {
        name: "Pythagorean Theorem",
        formula: "a^2 + b^2 = c^2",
        fields: {
          "a": "Length of one side of the right triangle",
          "b": "Length of the other side of the right triangle",
          "c": "Length of the hypotenuse (longest side)"
        },
        before: "The Pythagorean theorem relates the lengths of the sides in a right triangle.",
        after: "This fundamental theorem is the basis for many applications in geometry, trigonometry, and physics."
      };


      const formulaList = [
        {
          name: "Einstein's Energy-Mass Equivalence",
          formula: "E = mc^2",
          fields: {
            "E": "Total energy",
            "m": "Mass",
            "c": "Speed of light in vacuum (constant)"
          },
          category: "Physics",
          before: "This famous equation expresses the equivalence of mass and energy.",
          after: "This principle is fundamental to modern physics and nuclear technology."
        },
        {
          name: "Newton's Second Law of Motion",
          formula: "F = ma",
          fields: {
            "F": "Force",
            "m": "Mass",
            "a": "Acceleration"
          },
          category: "Physics",
          before: "This law describes the relationship between an object's mass and the forces acting upon it.",
          after: "It's one of the fundamental principles in classical mechanics."
        },
        {
          name: "Pythagorean Theorem",
          formula: "a^2 + b^2 = c^2",
          fields: {
            "a": "Length of one side of the right triangle",
            "b": "Length of the other side of the right triangle",
            "c": "Length of the hypotenuse (longest side)"
          },
          category: "Mathematics",
          before: "This theorem relates the lengths of the sides in a right triangle.",
          after: "It's widely used in geometry and has applications in various fields."
        },
        {
          name: "Quadratic Formula",
          formula: "x = (-b ± √(b^2 - 4ac)) / (2a)",
          fields: {
            "x": "Solutions to the quadratic equation",
            "a": "Coefficient of x^2",
            "b": "Coefficient of x",
            "c": "Constant term"
          },
          category: "Mathematics",
          before: "This formula is used to solve quadratic equations of the form ax^2 + bx + c = 0.",
          after: "It's a fundamental tool in algebra with applications in many areas of mathematics and science."
        },
        {
          name: "Ohm's Law",
          formula: "V = IR",
          fields: {
            "V": "Voltage (in volts)",
            "I": "Current (in amperes)",
            "R": "Resistance (in ohms)"
          },
          category: "Electronics",
          before: "Ohm's Law describes the relationship between voltage, current, and resistance in an electrical circuit.",
          after: "It's a cornerstone principle in electrical engineering and circuit analysis."
        }
      ];


  return (
    <>
    <h1>Test Page 2 </h1>
    <br/>
    <br/>
    <FormulaWidget data={dummyData}/>
    <br/>
    <br/>
    <br/>
    <FormulaAccordion data={gravitationalForce}/>
    <br/>
    <br/>
    <br/>
    <FormulaWidget data={pythagoreanTheorem}/>
    <br/>
    <br/>
    <FormulaAccordion data={quadraticFormula}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <p>------------------------------------------------------------------</p>
    <br/>
    <FormulaAccordionWrapper data={formulaList} groupByField={'category'}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <StatisticsCalculator explanations={explanations}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" className="w-full h-auto">
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#0d3d56", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#1a5c7a", stopOpacity:1}} />
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#bg-gradient)"/>
      
      <text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        c₁v₁ + c₂v₂ = c₁[v₁₁ v₁₂] + c₂[v₂₁ v₂₂] = [c₁v₁₁+c₂v₂₁ c₁v₁₂+c₂v₂₂]
      </text>
      
      <path d="M 100 50 L 100 170 M 300 50 L 300 170" stroke="white" strokeWidth="2" fill="none"/>
      
      <text x="80" y="110" fontFamily="Arial, sans-serif" fontSize="14" fill="white" textAnchor="end">A =</text>
      
      <text fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        <tspan x="120" y="70">a₁₁</tspan>
        <tspan x="165" y="70">a₁₂</tspan>
        <tspan x="210" y="70">a₁₃</tspan>
        <tspan x="255" y="70">⋯</tspan>
        <tspan x="280" y="70">a₁ₙ</tspan>
        
        <tspan x="120" y="95">a₂₁</tspan>
        <tspan x="165" y="95">a₂₂</tspan>
        <tspan x="210" y="95">a₂₃</tspan>
        <tspan x="255" y="95">⋯</tspan>
        <tspan x="280" y="95">a₂ₙ</tspan>
        
        <tspan x="120" y="120">a₃₁</tspan>
        <tspan x="165" y="120">a₃₂</tspan>
        <tspan x="210" y="120">a₃₃</tspan>
        <tspan x="255" y="120">⋯</tspan>
        <tspan x="280" y="120">a₃ₙ</tspan>
        
        <tspan x="200" y="145">⋮</tspan>
        
        <tspan x="120" y="170">aₘ₁</tspan>
        <tspan x="165" y="170">aₘ₂</tspan>
        <tspan x="210" y="170">aₘ₃</tspan>
        <tspan x="255" y="170">⋯</tspan>
        <tspan x="280" y="170">aₘₙ</tspan>
      </text>
      
      <text x="210" y="190" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        Ax = [a₁₁x₁+a₁₂x₂; a₂₁x₁+a₂₂x₂]
      </text>
      
      <text x="210" y="210" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        Av = λv
      </text>
      
      {/* <text x="210" y="230" fontFamily="Arial, sans-serif" fontSize="11" fill="white">v = [</text>
      <text x="230" y="245" fontFamily="Arial, sans-serif" fontSize="11" fill="white">v₁</text>
      <text x="230" y="260" fontFamily="Arial, sans-serif" fontSize="11" fill="white">v₂</text>
      <text x="230" y="275" fontFamily="Arial, sans-serif" fontSize="11" fill="white">v₃</text>
      <text x="210" y="290" fontFamily="Arial, sans-serif" fontSize="11" fill="white">]</text> */}

<text x="170" y="260" class="math vector" font-size="18" fill="white" text-anchor="end">v</text>
  <text x="180" y="260" font-size="18" fill="white">=</text>
  

  <path d="M 230 230 L 225 230 Q 222 230 222 233 V 307 Q 222 310 225 310 L 230 310" fill="none" stroke="white" stroke-width="1"/>
  
  <text x="240" y="240" class="math" font-size="16" fill="white">v₁</text>
  <text x="240" y="270" class="math" font-size="16" fill="white">v₂</text>
  <text x="240" y="300" class="math" font-size="16" fill="white">v₃</text>
  
  
  <path d="M 260 230 L 265 230 Q 268 230 268 233 V 307 Q 268 310 265 310 L 260 310" fill="none" stroke="white" stroke-width="1"/>
      
      <text x="10" y="210" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        B = [b₁₁ b₁₂; b₂₁ b₂₂], x = [x₁; x₂]
      </text>
      
      <text x="10" y="235" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        u = [u₁; u₂], v = [v₁; v₂]
      </text>
    </svg>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  )
}
