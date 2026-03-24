

import { useState } from 'react';
import GroupedControls from '../calculators/GroupedControls';
import './VectorCalculator.css';

const VectorCalculator = () => {
  const [vectors, setVectors] = useState([{ id: 'A', x: '', y: '' }]);
  const [result, setResult] = useState({ x: 0, y: 0 });
  const [activeOperation, setActiveOperation] = useState(null);
  const [operationParams, setOperationParams] = useState(null);

  const handleInputChange = (id, field, value) => {
    const numValue = value.replace(/^0+/, '');
    if (/^-?\d*$/.test(numValue)) {
      setVectors(vectors.map(v =>
        v.id === id ? { ...v, [field]: numValue || '0' } : v
      ));
    }
  };

  const handleOperation = (type, op, value = null) => {
    setActiveOperation({ type, op });
    setOperationParams(value ? { value } : null);

    switch(op) {
      case 'scale':
        if (value) {
          setResult({
            x: Number(vectors[0].x || 0) * Number(value),
            y: Number(vectors[0].y || 0) * Number(value)
          });
        }
        break;
      case 'dotProduct':
        setResult({
          x: Number(vectors[0].x || 0) * Number(vectors[1].x || 0) + 
             Number(vectors[0].y || 0) * Number(vectors[1].y || 0),
          y: 0
        });
        break;
      case 'add':
        setResult({
          x: vectors.reduce((sum, v) => sum + Number(v.x || 0), 0),
          y: vectors.reduce((sum, v) => sum + Number(v.y || 0), 0)
        });
        break;
      case 'subtract':
        const first = vectors[0];
        setResult({
          x: vectors.slice(1).reduce((diff, v) => diff - Number(v.x || 0), Number(first.x || 0)),
          y: vectors.slice(1).reduce((diff, v) => diff - Number(v.y || 0), Number(first.y || 0))
        });
        break;
    }
  };

  const addVector = () => {
    const nextId = String.fromCharCode('A'.charCodeAt(0) + vectors.length);
    setVectors([...vectors, { id: nextId, x: '', y: '' }]);
  };

  const removeVector = (id) => {
    if (vectors.length > 1) {
      setVectors(vectors.filter(v => v.id !== id));
    }
  };

  const reset = () => {
    setVectors([{ id: 'A', x: '', y: '' }]);
    setResult({ x: 0, y: 0 });
    setActiveOperation(null);
    setOperationParams(null);
  };

  return (
    <div className="calculator">
      <GroupedControls 
        onOperationSelect={handleOperation}
        numVectors={vectors.length}
        activeOperation={activeOperation}
        operationParams={operationParams}
      />

      <div className="vectors">
        {vectors.map((vector) => (
          <div key={vector.id} className="vector">
            <div className="vector-header">
              <span>Vector {vector.id}</span>
              {vectors.length > 1 && (
                <button 
                  className="remove-btn"
                  onClick={() => removeVector(vector.id)}
                >×</button>
              )}
            </div>
            <div className="input-group">
              <span className="vector-bracket">(</span>
              <input
                type="text"
                value={vector.x}
                onChange={(e) => handleInputChange(vector.id, 'x', e.target.value)}
              />
              <input
                type="text"
                value={vector.y}
                onChange={(e) => handleInputChange(vector.id, 'y', e.target.value)}
              />
              <span className="vector-bracket">)</span>
            </div>
          </div>
        ))}
        <div className="vector-controls">
          <button className="add-vector" onClick={addVector}>Add Vector</button>
          <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
      </div>

      <div className="result">
        <h3>Result</h3>
        <div className="input-group">
          <span className="vector-bracket">(</span>
          <input readOnly value={result.x} />
          <input readOnly value={result.y} />
          <span className="vector-bracket">)</span>
        </div>
      </div>
    </div>
  );
};

export default VectorCalculator;