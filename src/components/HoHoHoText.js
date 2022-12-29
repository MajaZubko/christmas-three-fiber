import { Center, Float, Text3D, useMatcapTexture } from "@react-three/drei";

export function HoHoHoText() {
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  return (
    <group position={[0, 12, -10]}>
      <Center>
        <Float>
          <Text3D
            font={"/fonts/Mountains of Christmas_Bold.json"}
            size={6}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Ho Ho Ho
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </Float>
      </Center>
    </group>
  );
}

// After adding text, extra laggy on Chrome
// https://discourse.threejs.org/t/many-html-elements-from-three-js-fiber-drei-causes-low-framerate-in-chrome/28540
