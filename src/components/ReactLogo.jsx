import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Float, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const ReactLogo = (props) => {
  const targetRef = useRef(null);
  const { nodes, materials } = useGLTF("/models/react.glb");

  return (
    <Float floatIntensity={1} dispose={null}>
      <group scale={0.4} {...props}>
        <mesh
          ref={targetRef}
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.07935, 0.18102]}
          rotation={[Math.PI / 8, 0, -Math.PI / 2]}
          scale={[0.39166, 0.39166, 0.52734]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;
