import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';

function MagicCard3D() {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Mouse tracking tilt
    const { x, y } = state.pointer;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      x * 0.5 + (clicked ? Math.PI * 2 : 0),
      0.08
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -y * 0.4,
      0.08
    );
  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <Float
      speed={2.2}
      rotationIntensity={0.6}
      floatIntensity={0.8}
      floatingRange={[-0.1, 0.1]}
    >
      <group
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        scale={hovered ? 1.08 : 1}
      >
        {/* Card Body Front & Back */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 3.6, 0.05]} />
          <meshStandardMaterial
            color="#0d0d14"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Gold Frame Border */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[2.25, 3.45]} />
          <meshBasicMaterial
            color={hovered ? '#f3d37a' : '#d4af37'}
            wireframe
          />
        </mesh>

        {/* Center Card Symbol - Club / Clover symbol */}
        <group position={[0, 0.1, 0.035]}>
          {/* Top circle */}
          <mesh position={[0, 0.25, 0]}>
            <circleGeometry args={[0.22, 32]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Left circle */}
          <mesh position={[-0.2, -0.05, 0]}>
            <circleGeometry args={[0.22, 32]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Right circle */}
          <mesh position={[0.2, -0.05, 0]}>
            <circleGeometry args={[0.22, 32]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Stem */}
          <mesh position={[0, -0.3, 0]}>
            <cylinderGeometry args={[0.04, 0.14, 0.35, 16]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* Card Title Text */}
        <Text
          position={[0, -0.9, 0.04]}
          fontSize={0.16}
          color="#f3d37a"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.12}
        >
          EL REY DE TRÉBOL
        </Text>

        <Text
          position={[0, -1.2, 0.04]}
          fontSize={0.11}
          color="#94a3b8"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
        >
          PABLO COSTAS
        </Text>

        {/* Corner K */}
        <Text
          position={[-0.88, 1.4, 0.04]}
          fontSize={0.22}
          color="#d4af37"
          anchorX="center"
          anchorY="middle"
        >
          K
        </Text>

        {/* Opposite Corner K inverted */}
        <Text
          position={[0.88, -1.4, 0.04]}
          fontSize={0.22}
          color="#d4af37"
          anchorX="center"
          anchorY="middle"
          rotation={[0, 0, Math.PI]}
        >
          K
        </Text>
      </group>
    </Float>
  );
}

function OrbitingRunes() {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group ref={ringRef} position={[0, 0, -0.5]}>
      {/* Outer magical ring */}
      <mesh>
        <ringGeometry args={[2.5, 2.53, 64]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.25} />
      </mesh>
      {/* Dashed secondary ring */}
      <mesh>
        <ringGeometry args={[2.8, 2.81, 48]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} wireframe />
      </mesh>
    </group>
  );
}

export const ThreeHeroScene: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[420px] md:min-h-[520px] relative pointer-events-auto">
      <Canvas
        className="w-full h-full cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5.2]} fov={45} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 6, 4]} intensity={1.5} color="#fff6d6" />
        <pointLight position={[-4, -3, 2]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[0, 4, 2]} intensity={2.0} color="#d4af37" />

        <OrbitingRunes />
        <MagicCard3D />

        {/* Ambient Stardust Particles */}
        <Sparkles
          count={70}
          scale={5.5}
          size={2.8}
          speed={0.4}
          opacity={0.65}
          color="#f3d37a"
        />
        <Sparkles
          count={35}
          scale={6}
          size={3.5}
          speed={0.6}
          opacity={0.4}
          color="#c084fc"
        />
      </Canvas>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none text-center">
        <span className="text-[11px] uppercase tracking-widest text-[#d4af37]/70 bg-black/40 px-3 py-1 rounded-full border border-[#d4af37]/20 backdrop-blur-sm">
          ✦ Interactúa con la carta 3D ✦
        </span>
      </div>
    </div>
  );
};
