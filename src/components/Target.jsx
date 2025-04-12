import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    gsap.to(targetRef.current.rotation, {
      y: Math.PI * 2,
      duration: 10,
      repeat: -1,
    });
  }, [targetRef]);

  return (
    <mesh {...props} ref={targetRef} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
