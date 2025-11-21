import { useState, useEffect, useRef, Suspense, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, useTexture, OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Mesh } from 'three';
import * as THREE from 'three';
import familleImg from '../../assets/images/jpeg/famille.jpg';

const ToyBear = ({ onClick, position, isZoomedView }: { onClick?: () => void; position: [number, number, number]; isZoomedView?: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const obj = useLoader(OBJLoader, '/src/assets/models/toy_bear.obj');

  const textures = useTexture({
    baseColor: '/src/assets/models/textures/toy_bear_Mat_baseColor.png',
    normal: '/src/assets/models/textures/toy_bear_Mat_normal.png',
    roughness: '/src/assets/models/textures/toy_bear_Mat_roughness.png',
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: textures.baseColor,
        normalMap: textures.normal,
        roughnessMap: textures.roughness,
        metalness: 0.1,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group
      ref={meshRef}
      position={isZoomedView ? [0, 0, 0] : position}
      scale={isZoomedView ? 0.08 : (hovered ? 0.055 : 0.05)}
      rotation={[-Math.PI / 90, 45, 0]}
      onClick={(e) => {
        e.stopPropagation();
        if (!isZoomedView) onClick?.();
      }}
      onPointerOver={() => !isZoomedView && setHovered(true)}
      onPointerOut={() => !isZoomedView && setHovered(false)}
    >
      <primitive object={obj} />
    </group>
  );
};

const Notebook = ({ onClick, position, rotation, isZoomedView }: { onClick?: () => void; position: [number, number, number]; rotation: [number, number, number]; isZoomedView?: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const obj = useLoader(OBJLoader, '/src/assets/models/Notebook.obj');

  const textures = useTexture({
    paperBase: '/src/assets/models/textures/Paper_Mat_baseColor.png',
    paperRoughness: '/src/assets/models/textures/Paper_Mat_roughness.png',
    fabricBase: '/src/assets/models/textures/Fabric_Mat_baseColor.png',
    fabricRoughness: '/src/assets/models/textures/Fabric_Mat_roughness.png',
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: textures.paperBase,
        roughnessMap: textures.paperRoughness,
        metalness: 0.0,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group
      ref={meshRef}
      position={isZoomedView ? [0, 0, 0] : position}
      scale={isZoomedView ? 0.08 : (hovered ? 0.055 : 0.05)}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        if (!isZoomedView) onClick?.();
      }}
      onPointerOver={() => !isZoomedView && setHovered(true)}
      onPointerOut={() => !isZoomedView && setHovered(false)}
    >
      <primitive object={obj} />
    </group>
  );
};

const Lipstick = ({ onClick, position, rotation, isZoomedView }: { onClick?: () => void; position: [number, number, number]; rotation: [number, number, number]; isZoomedView?: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const obj = useLoader(OBJLoader, '/src/assets/models/Lipstick_STEUXG9.obj');

  const textures = useTexture({
    crayonBase: '/src/assets/models/textures/Crayon_Mat_baseColor.png',
    crayonNormal: '/src/assets/models/textures/Crayon_Mat_normal.png',
    crayonRoughness: '/src/assets/models/textures/Crayon_Mat_roughness.png',
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: textures.crayonBase,
        normalMap: textures.crayonNormal,
        roughnessMap: textures.crayonRoughness,
        metalness: 0.2,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group
      ref={meshRef}
      position={isZoomedView ? [0, 0, 0] : position}
      scale={isZoomedView ? 0.08 : (hovered ? 0.055 : 0.05)}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        if (!isZoomedView) onClick?.();
      }}
      onPointerOver={() => !isZoomedView && setHovered(true)}
      onPointerOut={() => !isZoomedView && setHovered(false)}
    >
      <primitive object={obj} />
    </group>
  );
};

const WeddingRing = ({ onClick, position, rotation, isZoomedView }: { onClick?: () => void; position: [number, number, number]; rotation: [number, number, number]; isZoomedView?: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const obj = useLoader(OBJLoader, '/src/assets/models/wedding_ring_STVXUM8.obj');

  const textures = useTexture({
    baseColor: '/src/assets/models/textures/wedding_ring_Mat_baseColor.png',
    normal: '/src/assets/models/textures/wedding_ring_Mat_normal.png',
    roughness: '/src/assets/models/textures/wedding_ring_Mat_roughness.png',
    metallic: '/src/assets/models/textures/wedding_ring_Mat_metallic.png',
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: textures.baseColor,
        normalMap: textures.normal,
        roughnessMap: textures.roughness,
        metalnessMap: textures.metallic,
        metalness: 0.9,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group
      ref={meshRef}
      position={isZoomedView ? [0, 0, 0] : position}
      scale={isZoomedView ? 0.08 : (hovered ? 0.055 : 0.05)}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        if (!isZoomedView) onClick?.();
      }}
      onPointerOver={() => !isZoomedView && setHovered(true)}
      onPointerOut={() => !isZoomedView && setHovered(false)}
    >
      <primitive object={obj} />
    </group>
  );
};

const Smartphone = ({ onClick, position, rotation }: { onClick?: () => void; position: [number, number, number]; rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const obj = useLoader(OBJLoader, '/src/assets/models/smartphone_STF7C31.obj');

  const textures = useTexture({
    baseColor: '/src/assets/models/textures/aluminium_smartphone_Mat_baseColor.png',
    normal: '/src/assets/models/textures/aluminium_smartphone_Mat_normal.png',
    roughness: '/src/assets/models/textures/aluminium_smartphone_Mat_roughness.png',
    metallic: '/src/assets/models/textures/aluminium_smartphone_Mat_metallic.png',
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: textures.baseColor,
        normalMap: textures.normal,
        roughnessMap: textures.roughness,
        metalnessMap: textures.metallic,
        metalness: 0.8,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      scale={hovered ? 0.055 : 0.05}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={obj} />
    </group>
  );
};

const Lighter = ({ onClick, position, rotation, isZoomedView }: { onClick?: () => void; position: [number, number, number]; rotation: [number, number, number]; isZoomedView?: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const obj = useLoader(OBJLoader, '/src/assets/models/Lighter_STCLU2N.obj');

  const textures = useTexture({
    baseColor: '/src/assets/models/textures/Lighter_baseColor.png',
    normal: '/src/assets/models/textures/Lighter_normal.png',
    roughness: '/src/assets/models/textures/Lighter_roughness.png',
    metallic: '/src/assets/models/textures/Lighter_metallic.png',
  });

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: textures.baseColor,
        normalMap: textures.normal,
        roughnessMap: textures.roughness,
        metalnessMap: textures.metallic,
        metalness: 0.7,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group
      ref={meshRef}
      position={isZoomedView ? [0, 0, 0] : position}
      scale={isZoomedView ? 0.08 : (hovered ? 0.055 : 0.05)}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        if (!isZoomedView) onClick?.();
      }}
      onPointerOver={() => !isZoomedView && setHovered(true)}
      onPointerOut={() => !isZoomedView && setHovered(false)}
    >
      <primitive object={obj} />
    </group>
  );
};

const ZoomedObjectView = ({ objectName }: { objectName: string; onClose: () => void }) => {
  const renderObject = () => {
    switch (objectName) {
      case 'toyBear':
        return <ToyBear position={[0, 0, 0]} isZoomedView />;
      case 'notebook':
        return <Notebook position={[0, 0, 0]} rotation={[0, 0, 0]} isZoomedView />;
      case 'lipstick':
        return <Lipstick position={[0, 0, 0]} rotation={[0, 0, 0]} isZoomedView />;
      case 'weddingRing':
        return <WeddingRing position={[0, 0, 0]} rotation={[0, 0, 0]} isZoomedView />;
      default:
        return null;
    }
  };

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
      <OrbitControls enableZoom={false} enablePan={false} />

      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, 5]} intensity={0.5} />

      <Suspense fallback={null}>
        {renderObject()}
      </Suspense>
    </>
  );
};

const InsideBagScene = ({
  onSmartphoneClick,
  onToyBearClick,
  onNotebookClick,
  onLipstickClick,
  onWeddingRingClick,
  positions,
  rotations,
  zoomedObject
}: {
  onSmartphoneClick?: () => void;
  onToyBearClick?: () => void;
  onNotebookClick?: () => void;
  onLipstickClick?: () => void;
  onWeddingRingClick?: () => void;
  positions: [number, number, number][];
  rotations: [number, number, number][];
  zoomedObject: string | null;
}) => {
  const lightRef = useRef<THREE.SpotLight>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (lightRef.current && !zoomedObject) {
      const targetX = (mousePos.x / window.innerWidth) * 2 - 1;
      const targetY = -(mousePos.y / window.innerHeight) * 2 + 1;

      lightRef.current.target.position.set(targetX * 5, targetY * 5, -5);
      lightRef.current.target.updateMatrixWorld();
    }
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={zoomedObject ? [0, 0, 3] : [0, 0, 0]} fov={90} />

      {zoomedObject && <OrbitControls enableZoom={false} enablePan={false} />}

      <ambientLight intensity={zoomedObject ? 0.8 : 0.3} />

      {!zoomedObject && (
        <spotLight
          ref={lightRef}
          position={[0, 0, 0]}
          angle={0.6}
          penumbra={0.4}
          intensity={10}
          distance={25}
          castShadow
          color="#ffffff"
        />
      )}

      {zoomedObject && (
        <>
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, 5]} intensity={0.5} />
        </>
      )}

      {!zoomedObject && (
        <mesh position={[0, 0, -3]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
      )}

      <Suspense fallback={null}>
        {(!zoomedObject || zoomedObject === 'toyBear') && (
          <ToyBear
            onClick={onToyBearClick}
            position={positions[0]}
            isZoomedView={zoomedObject === 'toyBear'}
          />
        )}
      </Suspense>

      <Suspense fallback={null}>
        {(!zoomedObject || zoomedObject === 'notebook') && (
          <Notebook
            onClick={onNotebookClick}
            position={positions[1]}
            rotation={rotations[1]}
            isZoomedView={zoomedObject === 'notebook'}
          />
        )}
      </Suspense>

      <Suspense fallback={null}>
        {(!zoomedObject || zoomedObject === 'lipstick') && (
          <Lipstick
            onClick={onLipstickClick}
            position={positions[2]}
            rotation={rotations[2]}
            isZoomedView={zoomedObject === 'lipstick'}
          />
        )}
      </Suspense>

      <Suspense fallback={null}>
        {(!zoomedObject || zoomedObject === 'weddingRing') && (
          <WeddingRing
            onClick={onWeddingRingClick}
            position={positions[3]}
            rotation={rotations[3]}
            isZoomedView={zoomedObject === 'weddingRing'}
          />
        )}
      </Suspense>

      <Suspense fallback={null}>
        {!zoomedObject && (
          <Smartphone onClick={onSmartphoneClick} position={positions[4]} rotation={rotations[4]} />
        )}
      </Suspense>

      <Suspense fallback={null}>
        {!zoomedObject && (
          <Lighter
            position={positions[5]}
            rotation={rotations[5]}
          />
        )}
      </Suspense>
    </>
  );
};

const generateNonOverlappingPositions = (count: number, minDistance: number = 1.0) => {
  const positions: [number, number, number][] = [];
  const maxAttempts = 100;

  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let validPosition = false;
    let newPos: [number, number, number] = [0, 0, 0];

    while (!validPosition && attempts < maxAttempts) {
      newPos = [
        Math.random() * 5 - 2.5,
        Math.random() * 3 - 1.5,
        -1.5 - Math.random() * 1.5
      ];

      validPosition = positions.every(existingPos => {
        const dx = newPos[0] - existingPos[0];
        const dy = newPos[1] - existingPos[1];
        const dz = newPos[2] - existingPos[2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        return distance >= minDistance;
      });

      attempts++;
    }

    positions.push(newPos);
  }

  return positions;
};

const objectsData: Record<string, { title: string; description: string }> = {
  toyBear: {
    title: "Ours en peluche",
    description: "“C'est le doudou de mon fils. Il l'a serré très fort le jour où on est partis, et il ne l'a plus lâché. Quand il dormait sur moi, je sentais son petit cœur battre contre ce doudou. Il me rappelait pourquoi je devais continuer, même quand j'avais peur.”"
  },
  notebook: {
    title: "Carnet",
    description: "Dans ce carnet, j'ai écrit tout ce que je n'arrivais pas à dire. Des adresses, des numéros, des listes pour ne rien oublier et des mots pour mon fils, quand il sera assez grand pour comprendre. Les pages sont un peu abîmées, comme moi à ce moment-là, mais elles m'ont tenue debout."
  },
  lipstick: {
    title: "Rouge à lèvres",
    description: "Je l'ai pris sans réfléchir, en partant. Pas pour être belle. Juste pour me rappeler que je suis encore une femme, même quand je dois être forte comme dix. Parfois, le matin, je le mettais un tout petit peu, pour ne pas oublier qui j'étais avant de tout quitter."
  },
  weddingRing: {
    title: "Alliance",
    description: "Cet anneau m'a été offert juste avant que je quitte l'Albanie. Ce n'est pas un bijou de valeur. Mais il me rappelle quelqu'un qui m'a dit : Reviens quand tu seras en sécurité. Je le portais quand j'avais besoin de courage. Comme si je n'étais pas complètement seule."
  },
  lighter: {
    title: "Briquet",
    description: "Une flamme qui a éclairé des moments de partage et de solitude. Symbole de chaleur humaine dans les nuits froides de l'exil."
  }
};

const InsideBag = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPhoneZooming, setIsPhoneZooming] = useState(false);
  const [zoomedObject, setZoomedObject] = useState<string | null>(null);
  const [showVocalPage, setShowVocalPage] = useState(false);
  const [showPhotosPage, setShowPhotosPage] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const objectPositions = useMemo(() => generateNonOverlappingPositions(6, 1.2), []);
  const objectRotations = useMemo(() => [
    [-Math.PI / 90, 45, 0] as [number, number, number],
    [0, Math.random() * Math.PI, 0] as [number, number, number],
    [0, Math.random() * Math.PI, Math.random() * Math.PI / 4] as [number, number, number],
    [Math.random() * Math.PI / 4, Math.random() * Math.PI, Math.random() * Math.PI / 4] as [number, number, number],
    [0, Math.random() * Math.PI, 0] as [number, number, number],
    [Math.random() * Math.PI / 4, Math.random() * Math.PI, Math.random() * Math.PI / 4] as [number, number, number],
  ], []);

  const [currentTime] = useState(() => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  });

  const handleVocalClick = () => {
    setShowVocalPage(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 300);
  };

  const handlePhotosClick = () => {
    setShowPhotosPage(true);
  };

  const apps = [
    { id: 1, name: 'Photos', onClick: handlePhotosClick },
    { id: 2, name: 'Vocal', onClick: handleVocalClick },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showLightbox) {
          setShowLightbox(false);
        } else if (isPhoneZooming) {
          setIsPhoneZooming(false);
        } else if (zoomedObject) {
          setZoomedObject(null);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPhoneZooming, zoomedObject, showLightbox]);

  const handleSmartphoneClick = () => {
    setIsPhoneZooming(true);
  };

  const handleObjectClick = (objectName: string) => {
    setZoomedObject(objectName);
  };

  return (
    <div className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden" style={{ cursor: zoomedObject ? 'auto' : 'none' }}>
      {!zoomedObject && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Canvas shadows>
            <InsideBagScene
              onSmartphoneClick={handleSmartphoneClick}
              onToyBearClick={() => handleObjectClick('toyBear')}
              onNotebookClick={() => handleObjectClick('notebook')}
              onLipstickClick={() => handleObjectClick('lipstick')}
              onWeddingRingClick={() => handleObjectClick('weddingRing')}
              positions={objectPositions}
              rotations={objectRotations}
              zoomedObject={zoomedObject}
            />
          </Canvas>
        </motion.div>
      )}

      <AnimatePresence>
        {zoomedObject && (
          <>
            <motion.div
              className="absolute inset-0 z-30 bg-[#1a1a1a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Canvas>
                <ZoomedObjectView objectName={zoomedObject} onClose={() => setZoomedObject(null)} />
              </Canvas>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {!zoomedObject && (
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.div
            className="relative w-64 h-64"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle, rgba(244,244,231,0.2) 0%, rgba(244,244,231,0.05) 40%, transparent 70%)',
                filter: 'blur(1px)',
              }}
            />
            <div className="absolute inset-0" />
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {zoomedObject && objectsData[zoomedObject] && (
          <motion.div
            className="absolute right-8 top-1/2 -translate-y-1/2 z-50 max-w-md pointer-events-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="border-2 border-[var(--dark-100)] p-8"
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(244, 244, 231, 0.8)',
              }}
            >
              <h2 className="text-4xl font-title text-[var(--dark-100)] mb-4">
                {objectsData[zoomedObject].title}
              </h2>
              <p className="text-base text-[var(--dark-80)] leading-relaxed mb-6">
                {objectsData[zoomedObject].description}
              </p>
              <button
                onClick={() => setZoomedObject(null)}
                className="px-6 py-3 bg-[var(--dark-100)] text-[var(--white-100)] border-2 border-[var(--dark-100)] hover:bg-[var(--white-100)] hover:text-[var(--dark-100)] transition-colors"
              >
                <span className="text-xs uppercase tracking-widest font-light">
                  Fermer
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phone UI Overlay */}
      <AnimatePresence>
        {isPhoneZooming && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center cursor-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            onClick={() => {
              setIsPhoneZooming(false);
              setShowVocalPage(false);
              setShowPhotosPage(false);
              setIsPlaying(false);
              if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
              }
            }}
          >
            <audio ref={audioRef} src="/src/assets/audio/vocal.mp3" />
            <div
              className="w-[300px] h-[90%] relative bg-black rounded-[40px] border-[8px] border-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-[20px] z-50"></div>

              {/* Screen Content */}
              <div className="h-full relative overflow-hidden bg-[#000000] rounded-[32px]">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 pt-8 px-6 pb-2 flex items-center justify-between text-white text-[10px] font-semibold z-40">
                  <span className="tracking-tight">{currentTime}</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-2" viewBox="0 0 16 12" fill="white">
                      <path d="M2 2h1v8H2V2zm3-1h1v10H5V1zm3 2h1v6H8V3zm3-1h1v8h-1V2z"/>
                    </svg>
                    <svg className="w-3 h-2" viewBox="0 0 16 12" fill="white">
                      <path d="M1 4a3 3 0 013-3h8a3 3 0 013 3v4a3 3 0 01-3 3H4a3 3 0 01-3-3V4z"/>
                    </svg>
                    <span className="text-[8px]">100%</span>
                    <svg className="w-4 h-2" viewBox="0 0 24 12" fill="none">
                      <rect x="1" y="1" width="18" height="10" rx="2" stroke="white" strokeWidth="1.5" fill="white"/>
                      <path d="M21 4v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Time Widget */}
                {!showPhotosPage && !showVocalPage && (
                  <div className="absolute top-[50px] left-4 right-4">
                    <div className="text-white text-4xl font-light tracking-tighter">
                      {currentTime}
                    </div>
                    <div className="text-white/70 text-xs font-medium mt-1">
                      {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </div>
                  </div>
                )}

                {/* Content Area */}
                <div className="h-full flex items-center justify-center pt-16 pb-16">
                  {/* Home Page */}
                  {!showVocalPage && !showPhotosPage && (
                    <motion.div
                      initial={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex gap-8">
                        {apps.map((app) => (
                          <div key={app.id} className="flex flex-col items-center gap-2">
                            <motion.button
                              onClick={app.onClick}
                              className="w-[100px] h-[100px] bg-white border-2 border-white shadow-lg rounded flex items-center justify-center"
                              whileTap={{ scale: 0.85 }}
                            >
                            </motion.button>
                            <span className="text-white text-xs font-medium">
                              {app.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Photos Page */}
                  {showPhotosPage && (
                    <motion.div
                      className="w-full h-full flex flex-col relative"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute top-[50px] left-4 right-4 z-10">
                        <button
                          onClick={() => setShowPhotosPage(false)}
                          className="text-white text-sm"
                        >
                          ← Retour
                        </button>
                      </div>
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img
                          src={familleImg}
                          alt="Famille"
                          className="max-w-full max-h-full object-contain rounded cursor-pointer"
                          onClick={() => setShowLightbox(true)}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Vocal Page */}
                  {showVocalPage && (
                    <motion.div
                      className="w-full h-full flex flex-col items-center justify-center relative"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute top-[50px] left-4 right-4 z-10">
                        <button
                          onClick={() => setShowVocalPage(false)}
                          className="text-white text-sm"
                        >
                          ← Retour
                        </button>
                      </div>
                      <div className="flex items-end justify-center gap-1 h-32">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 bg-white rounded-full"
                            animate={{
                              height: isPlaying
                                ? [
                                    Math.random() * 60 + 20,
                                    Math.random() * 80 + 40,
                                    Math.random() * 60 + 20,
                                  ]
                                : 20,
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              delay: i * 0.05,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-white mt-8 text-sm">Message vocal</p>
                    </motion.div>
                  )}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2">
                  <div className="w-[120px] h-[4px] bg-white/80 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for full-screen image */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowLightbox(false)}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={familleImg}
                alt="Famille"
                className="w-full h-full object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLightbox(false);
                }}
                className="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 transition-colors z-10 cursor-pointer bg-black/50 w-12 h-12 flex items-center justify-center rounded-full"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InsideBag;
