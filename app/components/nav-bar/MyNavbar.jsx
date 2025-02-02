
'use client'
import React, { useState, useEffect } from 'react'
import './MyNavbar.css'
import Link from 'next/link';

function MyNavbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isSequencesExpanded, setIsSequencesExpanded] = useState(false)
  const [isVisualToolsExpanded, setIsVisualToolsExpanded] = useState(false)

  useEffect(() => {
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', fixNav);

    function fixNav() {
      if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    }

    return () => {
      window.removeEventListener('scroll', fixNav);
    };
  }, []);

  const navigateBack = () => {
    window.history.back();
  };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <button
             className="hamburger"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            ☰
          </button>
          <ul className={isNavExpanded ? "expanded" : ""}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tables">Tables</Link></li>
            <li><Link href="/keyboard">Mathematical Keyboard</Link></li>
            <li><Link href="/calculators/statistics-calculator">Statistics Calculator</Link></li>
            <li>
              <a onClick={() => setIsSequencesExpanded(!isSequencesExpanded)}>Sequences ▼</a>
              {isSequencesExpanded && (
                <ul>
                  <li><Link href="/sequences/prime-numbers">Prime Numbers</Link></li>
                  <li><Link href="/sequences/fibonacci-numbers">Fibonacci Numbers</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/logic/truth-tables">Truth Tables Generator</Link></li>
            <li>
              <a onClick={() => setIsVisualToolsExpanded(!isVisualToolsExpanded)}>Visual Tools ▼</a>
              {isVisualToolsExpanded && (
                <ul className='ul'>
                  <li><Link href="/visual-tools/matrix-multiplication">Matrix Multiplication</Link></li>
                  <li><Link href="/visual-tools/gauss-elimination">Gaussian Elimination</Link></li>
                  <li><Link href="/visual-tools/determinant-calculator">Determinant Calculator</Link></li>
                  <li><Link href="/visual-tools/matrix-transposition">Matrix Transposition Calculator</Link></li>
                  <li><Link href="/visual-tools/base-converter">Base Converter Visualizer</Link></li>
                  <li><Link href="/combinatorics/permutations/permutations-visualizer">Permutations Visualizer</Link></li>
                </ul>
              )}
            </li>
            <li onClick={navigateBack} style={{cursor:'pointer'}}><a>Go Back</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MyNavbar