import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";

const HeroCamera = ({ children, isMoblie }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    if (!isMoblie) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        0.25
      );
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {children}
    </group>
  );
};

export default HeroCamera;
