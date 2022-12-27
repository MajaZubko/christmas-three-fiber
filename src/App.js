import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { SnowGlobeGroup } from "./components/SnowGlobeGroup";

function App() {
  return (
    <Canvas camera={{ position: [2, 3, 25] }}>
      <color attach="background" args={["#31373d"]} />
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 25, 10]} angle={0.3} />
      <Physics>
        <SnowGlobeGroup />
      </Physics>
    </Canvas>
  );
}

export default App;
