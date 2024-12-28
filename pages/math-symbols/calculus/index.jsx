
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';

export default function MathSymbolsCalculusPage({ symbolsData, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.canonical} />
      </Head>
      <GenericNavbar />
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb />
      <OperaSidebar
        side="right"
        topOffset="65px"
        sidebarWidth="45px"
        panelWidth="300px"
        iconColor="white"
        panelBackgroundColor="#f2f2f2"
      />
      <h1 className="title" style={{ marginTop: '0px' }}>
        {meta.pageHeading}
      </h1>
      <br />
      <br />
      <div
        className="title"
        style={{
          margin: 'auto',
          width: '80%',
        }}
      >
        <DataWrapper data={symbolsData} />
      </div>
      <ScrollUpButton />
    </>
  );
}

// Include data and metadata in getStaticProps
export async function getStaticProps() {
 
  const meta = {
    title: 'Calculus Symbols | Calculus Symbols Chart',
    description:
      'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
    keywords: [
      'math symbols',
      'mathematical symbols',
      'LaTeX',
      'LaTeX code',
      'math symbols list',
      'math symbols chart',
       'calculus symbols',
       'calculus math symbols'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/calculus',
    pageHeading: 'Calculus Symbols',
  };
  const symbolsData = {
    "differentiation": [
      {"symbol": "f'(x)", "latex_code": "f'(x)", "explanation": "First derivative of f(x)"},
      {"symbol": "f''(x)", "latex_code": "f''(x)", "explanation": "Second derivative of f(x)"},
      {"symbol": "df/dx", "latex_code": "\\frac{df}{dx}", "explanation": "Derivative of f with respect to x"},
      {"symbol": "∂f/∂x", "latex_code": "\\frac{\\partial f}{\\partial x}", "explanation": "Partial derivative of f with respect to x"},
      {"symbol": "Dⁿf(x)", "latex_code": "D^n f(x)", "explanation": "nth derivative of f(x)"},
      {"symbol": "dy/dx", "latex_code": "\\frac{dy}{dx}", "explanation": "Rate of change of y with respect to x"},
      {"symbol": "∇f", "latex_code": "\\nabla f", "explanation": "Gradient of a scalar field f"}
    ],
    "integration": [
      {"symbol": "∫ f(x) dx", "latex_code": "\\int f(x)\\, dx", "explanation": "Indefinite integral of f(x)"},
      {"symbol": "∫ₐᵇ f(x) dx", "latex_code": "\\int_a^b f(x)\\, dx", "explanation": "Definite integral of f(x) from a to b"},
      {"symbol": "∬ f(x,y) dA", "latex_code": "\\iint f(x,y)\\, dA", "explanation": "Double integral over a region A"},
      {"symbol": "∭ f(x,y,z) dV", "latex_code": "\\iiint f(x,y,z)\\, dV", "explanation": "Triple integral over a volume V"},
      {"symbol": "∮ f(x) dx", "latex_code": "\\oint f(x)\\, dx", "explanation": "Line integral of f(x)"},
      {"symbol": "∫ₓ f ds", "latex_code": "\\int_C f\\, ds", "explanation": "Integral along a curve C"}
    ],
    "limits": [
      {"symbol": "limₓ→c f(x)", "latex_code": "\\lim_{x \\to c} f(x)", "explanation": "Limit of f(x) as x approaches c"},
      {"symbol": "limₓ→∞ f(x)", "latex_code": "\\lim_{x \\to \\infty} f(x)", "explanation": "Limit of f(x) as x approaches infinity"},
      {"symbol": "limₓ→c⁻ f(x)", "latex_code": "\\lim_{x \\to c^-} f(x)", "explanation": "Left-hand limit of f(x) as x approaches c"},
      {"symbol": "limₓ→c⁺ f(x)", "latex_code": "\\lim_{x \\to c^+} f(x)", "explanation": "Right-hand limit of f(x) as x approaches c"}
    ],
    "series": [
      {"symbol": "∑ₙ₌₁ⁿ₌∞ aₙ", "latex_code": "\\sum_{n=1}^\\infty a_n", "explanation": "Infinite series"},
      {"symbol": "∑ₙ₌₀ⁿ₌N aₙ", "latex_code": "\\sum_{n=0}^N a_n", "explanation": "Finite series up to N terms"},
      {"symbol": "Πₙ₌₁ⁿ₌∞ aₙ", "latex_code": "\\prod_{n=1}^\\infty a_n", "explanation": "Infinite product"},
      {"symbol": "a₀ + ∑ₙ₌₁ⁿ₌∞ aₙxⁿ", "latex_code": "a_0 + \\sum_{n=1}^\\infty a_n x^n", "explanation": "Power series representation of a function"}
    ],
    "vector_calculus": [
      {"symbol": "∇⋅F", "latex_code": "\\nabla \\cdot \\mathbf{F}", "explanation": "Divergence of a vector field F"},
      {"symbol": "∇×F", "latex_code": "\\nabla \\times \\mathbf{F}", "explanation": "Curl of a vector field F"},
      {"symbol": "∬ₛ F ⋅ dS", "latex_code": "\\iint_S \\mathbf{F} \\cdot \\mathbf{dS}", "explanation": "Flux of F through a surface S"},
      {"symbol": "∮ₓ F ⋅ dr", "latex_code": "\\oint_C \\mathbf{F} \\cdot \\mathbf{dr}", "explanation": "Line integral of F along a curve C"}
    ],
    "other_notations": [
      {"symbol": "|f(x)|", "latex_code": "|f(x)|", "explanation": "Absolute value of f(x)"},
      {"symbol": "sgn(x)", "latex_code": "\\text{sgn}(x)", "explanation": "Sign function"},
      {"symbol": "∞", "latex_code": "\\infty", "explanation": "Infinity"},
      {"symbol": "dx", "latex_code": "dx", "explanation": "Infinitesimal change in x"},
      {"symbol": "ε", "latex_code": "\\epsilon", "explanation": "Epsilon (small positive quantity in limits)"},
      {"symbol": "δ", "latex_code": "\\delta", "explanation": "Delta (small positive quantity in limits)"}
    ],
    "advanced_integration": [
      {"symbol": "∭ₓ f dV", "latex_code": "\\iiint_V f\\, dV", "explanation": "Triple integral over a volume V"},
      {"symbol": "∯ₓ f dS", "latex_code": "\\iint_S f\\, dS", "explanation": "Surface integral over surface S"},
      {"symbol": "∮ₓ f dx", "latex_code": "\\oint_C f\\, dx", "explanation": "Closed line integral"},
      {"symbol": "∫ₐᵦ |f(x)| dx", "latex_code": "\\int_a^b |f(x)|\\, dx", "explanation": "Integral of absolute value of f(x)"},
      {"symbol": "∫ f(x) δ(x − x₀) dx", "latex_code": "\\int f(x)\\, \\delta(x - x_0)\\, dx", "explanation": "Integral involving Dirac delta function"}
    ],
    "differential_operators": [
      {"symbol": "∇²f", "latex_code": "\\nabla^2 f", "explanation": "Laplacian of f"},
      {"symbol": "∂²f/∂x²", "latex_code": "\\frac{\\partial^2 f}{\\partial x^2}", "explanation": "Second partial derivative of f with respect to x"},
      {"symbol": "∂²f/∂x∂y", "latex_code": "\\frac{\\partial^2 f}{\\partial x \\partial y}", "explanation": "Mixed second partial derivative"},
      {"symbol": "d²y/dx²", "latex_code": "\\frac{d^2y}{dx^2}", "explanation": "Second ordinary derivative of y with respect to x"}
    ],
    "curvature_geometry": [
      {"symbol": "κ", "latex_code": "\\kappa", "explanation": "Curvature of a curve"},
      {"symbol": "τ", "latex_code": "\\tau", "explanation": "Torsion of a curve"},
      {"symbol": "r(t)", "latex_code": "\\mathbf{r}(t)", "explanation": "Parametric curve"},
      {"symbol": "T(t)", "latex_code": "\\mathbf{T}(t)", "explanation": "Unit tangent vector"},
      {"symbol": "N(t)", "latex_code": "\\mathbf{N}(t)", "explanation": "Unit normal vector"},
      {"symbol": "B(t)", "latex_code": "\\mathbf{B}(t)", "explanation": "Unit binormal vector"}
    ],
    "special_functions": [
      {"symbol": "Γ(n)", "latex_code": "\\Gamma(n)", "explanation": "Gamma function"},
      {"symbol": "ζ(s)", "latex_code": "\\zeta(s)", "explanation": "Riemann zeta function"},
      {"symbol": "Li(x)", "latex_code": "\\text{Li}(x)", "explanation": "Logarithmic integral"},
      {"symbol": "erf(x)", "latex_code": "\\text{erf}(x)", "explanation": "Error function"}
    ],
    "differential_equations": [
      {"symbol": "dy/dx = f(x)", "latex_code": "\\frac{dy}{dx} = f(x)", "explanation": "Ordinary differential equation"},
      {"symbol": "∂u/∂t = D∇²u", "latex_code": "\\frac{\\partial u}{\\partial t} = D\\nabla^2 u", "explanation": "Heat equation"},
      {"symbol": "∂²u/∂t² = c²∇²u", "latex_code": "\\frac{\\partial^2 u}{\\partial t^2} = c^2\\nabla^2 u", "explanation": "Wave equation"},
      {"symbol": "∇²φ = ρ", "latex_code": "\\nabla^2 \\phi = \\rho", "explanation": "Poisson's equation"}
    ]
  };
  


  return {
    props: {
      symbolsData,
      meta, // Pass SEO metadata
    },
  };
}
