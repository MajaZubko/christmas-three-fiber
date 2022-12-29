import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { SnowGlobeGroup } from "./components/SnowGlobeGroup";
import { HoHoHoText } from "./components/HoHoHoText";

function App() {
  return (
    <Canvas camera={{ position: [2, 3, 25] }}>
      <color attach="background" args={["#31373d"]} />
      <Stars />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 25, 10]} angle={0.3} />
      <EffectComposer multisampling={4}>
        <Bloom mipmapBlur luminenceThreshold />
      </EffectComposer>
      <Physics>
        <SnowGlobeGroup />
        <HoHoHoText />
      </Physics>
    </Canvas>
  );
}

export default App;
