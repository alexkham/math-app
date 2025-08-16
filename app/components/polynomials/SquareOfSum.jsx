import React, { useState } from 'react';

const Card = ({ children, className }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="flex flex-col space-y-1.5 p-6">{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-2xl font-semibold leading-none tracking-tight">{children}</h3>
);

const CardContent = ({ children }) => (
  <div className="p-6 pt-0">{children}</div>
);

const Slider = ({ value, onValueChange, min, max, step, className }) => (
  <input
    type="range"
    value={value}
    onChange={(e) => onValueChange([Number(e.target.value)])}
    min={min}
    max={max}
    step={step}
    className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${className}`}
  />
);

const Input = ({ type, value, onChange, min, max, className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    min={min}
    max={max}
    className={`flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ${className}`}
  />
);

const SquareOfSum = () => {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  
  const scale = 40;
  const total = a + b;

  const handleInputChange = (setter) => (e) => {
    const value = Math.min(5, Math.max(1, Number(e.target.value)));
    if (!isNaN(value)) setter(value);
  };
  
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>(a + b)² = a² + 2ab + b²</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-8">a = </span>
              <Slider
                value={[a]}
                onValueChange={(value) => setA(value[0])}
                min={1}
                max={5}
                step={1}
                className="w-48"
              />
              <Input
                type="number"
                value={a}
                onChange={handleInputChange(setA)}
                min={1}
                max={5}
                className="w-20"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8">b = </span>
              <Slider
                value={[b]}
                onValueChange={(value) => setB(value[0])}
                min={1}
                max={5}
                step={1}
                className="w-48"
              />
              <Input
                type="number"
                value={b}
                onChange={handleInputChange(setB)}
                min={1}
                max={5}
                className="w-20"
              />
            </div>
          </div>
          
          <div className="relative" style={{ width: total * scale, height: total * scale }}>
            {/* a² square */}
            <div 
              className="absolute bg-blue-200 border border-blue-400"
              style={{ 
                width: a * scale,
                height: a * scale,
                left: 0,
                top: 0
              }}
            >
              <div className="flex items-center justify-center h-full">a²</div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm">a = {a}</div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-sm">a = {a}</div>
            </div>
            
            {/* First ab rectangle */}
            <div 
              className="absolute bg-green-200 border border-green-400"
              style={{ 
                width: a * scale,
                height: b * scale,
                left: 0,
                top: a * scale
              }}
            >
              <div className="flex items-center justify-center h-full">ab</div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-sm">b = {b}</div>
            </div>
            
            {/* Second ab rectangle */}
            <div 
              className="absolute bg-green-200 border border-green-400"
              style={{ 
                width: b * scale,
                height: a * scale,
                left: a * scale,
                top: 0
              }}
            >
              <div className="flex items-center justify-center h-full">ab</div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm">b = {b}</div>
            </div>
            
            {/* b² square */}
            <div 
              className="absolute bg-red-200 border border-red-400"
              style={{ 
                width: b * scale,
                height: b * scale,
                left: a * scale,
                top: a * scale
              }}
            >
              <div className="flex items-center justify-center h-full">b²</div>
            </div>
          </div>
          
          <div className="text-lg">
            ({a} + {b})² = {a}² + 2({a})({b}) + {b}² = {Math.pow(a, 2)} + {2*a*b} + {Math.pow(b, 2)} = {Math.pow(a+b, 2)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SquareOfSum;