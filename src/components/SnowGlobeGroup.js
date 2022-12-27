import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GlassSphere } from "./GlassSphere";
import { ChristmasTree } from "./ChristmasTree";
import { Plane } from "./Plane";

export function SnowGlobeGroup() {
  const group = useRef();

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() / 3;
  });

  return (
    <group ref={group} position={[0, -5, 0]}>
      <GlassSphere />
      <ChristmasTree />
      <Plane />
    </group>
  );
}
