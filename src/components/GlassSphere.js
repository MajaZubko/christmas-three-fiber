export function GlassSphere() {
  return (
    <mesh position={[0, 5, 0]}>
      <sphereGeometry args={[10, 40, 20]} />
      <meshPhongMaterial color="lightblue" opacity={0.1} transparent />
    </mesh>
  );
}
