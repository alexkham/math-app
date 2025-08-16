export const functionMap = {
    sin: {
      func: (x) => Math.sin(x),
      type: 'trigonometric',
      domain: [-2 * Math.PI, 2 * Math.PI],
      range: [-1.2, 1.2],
      xAxisType: 'pi',
      color: '#4a7c7e',
      name: 'sin(x)'
    },
    cos: {
      func: (x) => Math.cos(x),
      type: 'trigonometric',
      domain: [-2 * Math.PI, 2 * Math.PI],
      range: [-1.2, 1.2],
      xAxisType: 'pi',
      color: '#a8d8a8',
      name: 'cos(x)'
    },
    tan: {
      func: (x) => Math.tan(x),
      type: 'trigonometric',
      domain: [-Math.PI, Math.PI],
      range: [-5, 5],
      xAxisType: 'pi',
      color: '#ff6b6b',
      name: 'tan(x)'
    },
    quadratic: {
      func: (x) => x * x,
      type: 'polynomial',
      domain: [-5, 5],
      range: [-1, 25],
      xAxisType: 'integer',
      color: '#4a7c7e',
      name: 'x²'
    },
    cubic: {
      func: (x) => x * x * x,
      type: 'polynomial',
      domain: [-3, 3],
      range: [-27, 27],
      xAxisType: 'integer',
      color: '#a8d8a8',
      name: 'x³'
    },
    exponential: {
      func: (x) => Math.exp(x / 2),
      type: 'exponential',
      domain: [-4, 4],
      range: [-1, 8],
      xAxisType: 'integer',
      color: '#ff9f43',
      name: 'e^(x/2)'
    },
    logarithmic: {
      func: (x) => Math.log(Math.abs(x)),
      type: 'logarithmic',
      domain: [-10, 10],
      range: [-3, 3],
      xAxisType: 'integer',
      color: '#6c5ce7',
      name: 'ln(|x|)'
    },
    sqrt: {
      func: (x) => Math.sqrt(Math.abs(x)),
      type: 'root',
      domain: [-10, 10],
      range: [-1, 4],
      xAxisType: 'integer',
      color: '#fd79a8',
      name: '√|x|'
    },
    reciprocal: {
      func: (x) => 1 / x,
      type: 'rational',
      domain: [-10, 10],
      range: [-5, 5],
      xAxisType: 'integer',
      color: '#00b894',
      name: '1/x'
    }
  };