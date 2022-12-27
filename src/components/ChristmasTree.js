import { useState } from "react";
import { useGLTF } from "@react-three/drei";

export function ChristmasTree() {
  const [isStarHovered, setStarHovered] = useState(false);
  const { nodes, materials } = useGLTF("./models/christmas-tree.gltf");

  return (
    <group>
      <mesh
        geometry={nodes.ChristmasTree.geometry}
        material={materials.Palette}
      ></mesh>
      <mesh
        geometry={nodes.guirlande.geometry}
        material={materials.Palette}
        position={[0, 2.34, 0]}
      />
      <mesh
        geometry={nodes.lights.geometry}
        position={[-0.01, 2.51, -1.23]}
        scale={0.57}
      >
        <meshStandardMaterial
          {...materials.Palette}
          emissive={"red"}
          toneMapped={false}
          emissiveIntensity={4}
        />
      </mesh>
      <mesh
        geometry={nodes.star.geometry}
        material={materials.Palette}
        position={[0, 17.03, -0.02]}
        onPointerOver={() => setStarHovered(true)}
        onPointerOut={() => setStarHovered(false)}
      >
        <meshStandardMaterial
          {...materials.Palette}
          emissive={"orange"}
          toneMapped={false}
          emissiveIntensity={isStarHovered ? 4 : 1}
        />
      </mesh>
    </group>
  );
}
