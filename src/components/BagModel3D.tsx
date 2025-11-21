import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Mesh } from 'three';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const BagModel = ({ onClick }: { onClick?: () => void }) => {
  const meshRef = useRef<THREE.Group>(null);

  const obj = useLoader(OBJLoader, '/src/assets/models/woman_travel_bag_open.obj');

  const textures = useTexture({
    baseColor: '/src/assets/models/textures/fabric_bag_MAT_baseColor.png',
    normal: '/src/assets/models/textures/fabric_bag_MAT_normal.png',
    roughness: '/src/assets/models/textures/fabric_bag_MAT_roughness.png',
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: textures.baseColor,
        normalMap: textures.normal,
        roughnessMap: textures.roughness,
        metalness: 0.2,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group
      ref={meshRef}
      onClick={onClick}
      scale={0.1}
      position={[0.5, -1.0, 0]}
    >
      <primitive object={obj} />
    </group>
  );
};

interface BagModel3DProps {
  onBagClick?: () => void;
}

const BagModel3D = ({ onBagClick, isZooming }: BagModel3DProps & { isZooming?: boolean }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Canvas
        shadows
        className="bg-transparent cursor-pointer"
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 2, 8], fov: 45 }}
      >
        <PerspectiveCamera makeDefault position={isZooming ? [0, 0, 0.5] : [0, 2, 8]} fov={isZooming ? 90 : 45} />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 3, -5]} intensity={0.5} color="#e63946" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
        />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />

        <Suspense fallback={null}>
          <BagModel onClick={onBagClick} />
        </Suspense>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[var(--white-100)] text-[var(--dark-100)] px-6 py-3 border border-[var(--dark-100)]">
              <p className="text-xs font-light uppercase tracking-widest">
                Ouvrir
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BagModel3D;
