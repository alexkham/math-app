import React from 'react';

// Assuming `primes` is imported or defined elsewhere in your project as an array of prime numbers
import { primes } from '@/app/api/db/sequences/primes';
import './sequences.css'

const PrimeTable = () => {
    // Slice the first 100 prime numbers
    const first100Primes = primes.slice(0, 10000);

    return (
        <div className='main-prime'>
            <div className='table-container'>
        <table className='my-table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Prime Number</th>
                </tr>
            </thead>
            <tbody>
                {first100Primes.map((prime, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{prime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        <div className='right-container'>
            right
        </div>
        </div>
    );
};

export default PrimeTable;
