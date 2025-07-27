import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// Floating Particles Component
function Particles(props) {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Floating Geometric Shapes
function GeometricShapes() {
  return (
    <>
      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={2}
        position={[-4, 2, -2]}
      >
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#a855f7" transparent opacity={0.6} />
        </mesh>
      </Float>

      <Float
        speed={1.5}
        rotationIntensity={2}
        floatIntensity={1}
        position={[4, -2, -1]}
      >
        <mesh>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#ec4899" transparent opacity={0.7} />
        </mesh>
      </Float>

      <Float
        speed={0.8}
        rotationIntensity={1.5}
        floatIntensity={1.5}
        position={[2, 3, -3]}
      >
        <mesh>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} />
        </mesh>
      </Float>

      <Float
        speed={1.2}
        rotationIntensity={0.8}
        floatIntensity={2.5}
        position={[-3, -1, -2]}
      >
        <mesh>
          <icosahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.8} />
        </mesh>
      </Float>
    </>
  );
}

// Main FloatingElements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <Particles />
        <GeometricShapes />
      </Canvas>
    </div>
  );
};

export default FloatingElements;

