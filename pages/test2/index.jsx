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
