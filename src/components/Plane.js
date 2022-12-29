import { usePlane } from "@react-three/cannon";
import * as THREE from "three";

export function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref}>
      <circleGeometry args={[8.5, 40]} />
      <meshLambertMaterial color="lightblue" side={THREE.DoubleSide} />
    </mesh>
  );
}
