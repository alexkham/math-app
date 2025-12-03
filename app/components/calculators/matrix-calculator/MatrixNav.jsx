// components/MatrixNav.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MatrixNav() {
  const pathname = usePathname();

  const singleOps = [
    { name: 'Determinant', path: '/linear-algebra/calculators/matrices/single/determinant' },
    { name: 'Inverse', path: '/linear-algebra/calculators/matrices/single/inverse' },
    { name: 'Transpose', path: '/linear-algebra/calculators/matrices/single/transpose' },
    { name: 'Trace', path: '/linear-algebra/calculators/matrices/single/trace' },
    { name: 'Rank', path: '/linear-algebra/calculators/matrices/single/rank' },
    { name: 'RREF', path: '/linear-algebra/calculators/matrices/single/rref' },
    { name: 'Norm', path: '/linear-algebra/calculators/matrices/single/norm' }
  ];

  const binaryOps = [
    { name: 'Addition', path: '/linear-algebra/calculators/matrices/binary/addition' },
    { name: 'Subtraction', path: '/linear-algebra/calculators/matrices/binary/subtraction' },
    { name: 'Multiplication', path: '/linear-algebra/calculators/matrices/binary/multiplication' },
    { name: 'Hadamard Product', path: '/linear-algebra/calculators/matrices/binary/hadamard' },
    { name: 'Solve Ax = b', path: '/linear-algebra/calculators/matrices/binary/solve-ax-b' }
  ];

  const isActive = (path) => pathname === path;

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '32px',
      marginBottom: '24px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        Matrix Calculators
      </h2>
      
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: '600',
          color: '#374151',
          marginBottom: '12px'
        }}>
          Single Matrix Operations
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '8px'
        }}>
          {singleOps.map(op => (
            <Link 
              key={op.path} 
              href={op.path}
              style={{
                padding: '12px 16px',
                border: isActive(op.path) ? '2px solid #4285f4' : '2px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: isActive(op.path) ? '#f0f7ff' : 'white',
                color: isActive(op.path) ? '#4285f4' : '#374151',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                display: 'block'
              }}
            >
              {op.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: '600',
          color: '#374151',
          marginBottom: '12px'
        }}>
          Binary Matrix Operations
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '8px'
        }}>
          {binaryOps.map(op => (
            <Link 
              key={op.path} 
              href={op.path}
              style={{
                padding: '12px 16px',
                border: isActive(op.path) ? '2px solid #4285f4' : '2px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: isActive(op.path) ? '#f0f7ff' : 'white',
                color: isActive(op.path) ? '#4285f4' : '#374151',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                display: 'block'
              }}
            >
              {op.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}