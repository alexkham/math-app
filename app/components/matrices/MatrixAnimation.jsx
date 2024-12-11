"use client";
import { useEffect, useRef } from "react";

const MatrixAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let p5Instance;

    const sketch = (p5) => {
      const W = 700;
      const H = 500;
      const N = 3; // Matrix dimensions
      const framesPerAnimation = 60;
      const A = [
        [11, 25, 31],
        [14, 5, 97],
        [1, 8, 14],
      ];
      const B = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const C = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => null)
      ); // Result matrix, initially null

      let animationProgress = 0;

      p5.setup = () => {
        p5.createCanvas(W, H).parent(canvasRef.current);
        p5.textSize(20);
        p5.textAlign(p5.CENTER, p5.CENTER);
      };

      p5.draw = () => {
        p5.background(255);

        // Draw matrix A
        drawMatrix(p5, A, 100, 100, "A");

        // Draw matrix B
        drawMatrix(p5, B, 400, 100, "B");

        // Draw matrix C (Result)
        drawMatrix(p5, C, 250, 300, "C");

        // Animate addition
        if (animationProgress < framesPerAnimation) {
          animationProgress++;
          updateResultMatrix(C, A, B, animationProgress / framesPerAnimation);
        }
      };

      const drawMatrix = (p5, matrix, x, y, label) => {
        p5.push();
        p5.translate(x, y);

        // Label the matrix
        p5.fill(0);
        p5.text(`${label} =`, -40, (matrix.length / 2) * 40);

        // Draw the numbers in the matrix
        matrix.forEach((row, i) => {
          row.forEach((value, j) => {
            p5.fill(value === null ? "gray" : "black");
            p5.text(value === null ? "+" : value, j * 40, i * 40);
          });
        });

        p5.pop();
      };

      const updateResultMatrix = (result, matA, matB, progress) => {
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < N; j++) {
            result[i][j] = Math.round(
              matA[i][j] * (1 - progress) + matB[i][j] * progress
            );
          }
        }
      };
    };

    import("p5").then((module) => {
      const P5 = module.default;
      p5Instance = new P5(sketch);
    });

    return () => {
      p5Instance?.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default MatrixAnimation;
