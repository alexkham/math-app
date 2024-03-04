'use client'
import React, { useState, useEffect } from 'react';
import './sequences.css';
import TableWrapper from './TableWrapper';

const SequenceTable = ({ sequenceData, sequenceTitle }) => {
    const first100Sequence = sequenceData ? sequenceData.slice(0, 100).map((prime, index) => ({ index: index + 1, prime })) : [];

    const titles = ["#", `${sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)} Number`];

    const [startIndex, setStartIndex] = useState('');
    const [endIndex, setEndIndex] = useState('');
    const [filteredSequence, setFilteredSequence] = useState([]);
    const [error, setError] = useState('');
    const [numberCheck, setNumberCheck] = useState('');
    const [numberCheckResult, setNumberCheckResult] = useState('');
    const [numberIndex, setNumberIndex] = useState('');
    const [numberAtIndex, setNumberAtIndex] = useState('');
    const [presentation, setPresentation] = useState(1);

    const filterSequenceByIndexRange = () => {
        if (!startIndex || !endIndex) {
            setError(`Please enter both start and end indexes.`);
            return;
        }

        const start = parseInt(startIndex, 10);
        const end = parseInt(endIndex, 10);

        if (isNaN(start) || isNaN(end)) {
            setError('Both inputs must be numbers.');
            return;
        }
        if (start < 1 || end > sequenceData.length || start >= end) {
            setError(`Ensure the start index is less than the end index and both are between 1 and ${sequenceData.length}.`);
            return;
        }

        const filtered = sequenceData.slice(start - 1, end);
        setFilteredSequence(filtered);
        setError('');
    };

    const resetFields = () => {
        setStartIndex('');
        setEndIndex('');
        setFilteredSequence([]);
        setError('');
    };

    const handleNumberIndexCheck = () => {
        const index = parseInt(numberIndex, 10);
        if (isNaN(index) || index < 1 || index > sequenceData.length) {
            setNumberAtIndex(`Please enter a valid index between 1 and ${sequenceData.length}.`);
            return;
        }
        const number = sequenceData[index - 1]; // Adjust for zero-based indexing
        setNumberAtIndex(`${sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)} number at index ${index} is ${number}.`);
    };

    const handleNumberCheck = () => {
        const num = parseInt(numberCheck, 10);
        if (isNaN(num) || num < 2) {
            setNumberCheckResult('Please enter a valid number greater than 1.');
            return;
        }
        // Assuming `sequenceData` array is sorted and contains unique values
        const isNumberInSequence = sequenceData.includes(num);
        setNumberCheckResult(isNumberInSequence ? `${num} is a ${sequenceTitle} number.` : `${num} is not a ${sequenceTitle} number.`);
    };

    const resetNumberAtIndexSearch = () => {
        setNumberIndex('');
        setNumberAtIndex('');
    };

    const resetAll = () => {
        resetFields();
        resetNumberAtIndexSearch();
        setNumberCheck('');
        setNumberCheckResult('');
    };

    useEffect(() => {
        resetAll();
    }, [presentation, sequenceData, sequenceTitle]);

    return (
        <>
            <div className='button-group'>
                <button onClick={() => setPresentation(1)}>First 100 {sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)} Numbers</button>
                <button onClick={() => setPresentation(2)}>Find {sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)} Numbers by Index Range</button>
                <button onClick={() => setPresentation(3)}>Check if a Number is a {sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)}</button>
                <button onClick={() => setPresentation(4)}>Get {sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)} Number by Index</button>
            </div>
            <div className='main-sequence'>
                {presentation === 1 && (
                    <div className='table-container'>
                        <h3 className='title'>First 100 {sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)} Numbers</h3>
                        <TableWrapper data={first100Sequence} titles={titles} tableStyle="my-table" />
                    </div>
                )}
                {presentation === 2 && (
                    <div>
                        <h3>Find {sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)} Numbers by Index Range</h3>
                        <div className='input-container'>
                            <label>Start Index</label>
                            <input className='my-input' type="number" placeholder="Start index" value={startIndex} onChange={e => setStartIndex(e.target.value)} />
                        </div>
                        <div className='input-container'>
                            <label>End Index</label>
                            <input className='my-input' type="number" placeholder="End index" value={endIndex} onChange={e => setEndIndex(e.target.value)} />
                        </div>
                        <button onClick={filterSequenceByIndexRange}>Filter Numbers</button>
                        {(startIndex || endIndex) && <button onClick={resetFields} style={{ marginLeft: '10px', backgroundColor: 'red' }}>Reset</button>}
                        {error && <div className='error'>{error}</div>}
                        {filteredSequence.length > 0 && (
                            <TableWrapper data={filteredSequence} titles={titles} tableStyle="my-table" />
                        )}
                    </div>
                )}
                {presentation === 3 && (
                    <div className='number-check-container'>
                        <h3>Check if a Number is a {sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)}</h3>
                        <input className='my-input' type="number" placeholder="Enter a number" value={numberCheck} onChange={e => setNumberCheck(e.target.value)} />
                        <button onClick={handleNumberCheck}>Check Number</button>
                        {numberCheck && <button onClick={() => setNumberCheck('')} style={{ backgroundColor: 'red' }}>Reset</button>}
                        {numberCheckResult && <div className='result'>{numberCheckResult}</div>}
                    </div>
                )}
                {presentation === 4 && (
                    <div>
                        <h3>Get {sequenceTitle.charAt(0).toUpperCase() + sequenceTitle.slice(1)} Number by Index</h3>
                        <input className='my-input' type="number" placeholder="Enter index" value={numberIndex} onChange={e => setNumberIndex(e.target.value)} />
                        <button onClick={handleNumberIndexCheck}>Get Number</button>
                        {numberIndex && <button onClick={resetNumberAtIndexSearch} style={{ backgroundColor: 'red' }}>Reset</button>}
                        {numberAtIndex && <div className='result'>{numberAtIndex}</div>}
                    </div>
                )}
            </div>
        </>
    );
};

export default SequenceTable;

