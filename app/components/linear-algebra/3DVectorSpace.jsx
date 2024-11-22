import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const VectorSpace3D = () => {
  return (
    <Canvas style={{ height: "100vh", background: "#f0f0f0" }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Plane Spanned by Vectors */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightblue" transparent opacity={0.5} />
      </mesh>

      {/* Vectors */}
      <arrowHelper
        args={[
          new THREE.Vector3(1, 2, 0).normalize(),
          new THREE.Vector3(0, 0, 0),
          2,
          0x0000ff,
        ]}
      />
      <arrowHelper
        args={[
          new THREE.Vector3(2, 1, 0).normalize(),
          new THREE.Vector3(0, 0, 0),
          2,
          0x00ff00,
        ]}
      />
    </Canvas>
  );
};

export default VectorSpace3D;
