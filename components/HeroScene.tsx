"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";
import { AdditiveBlending, Color } from "three";

function RibbonMark() {
  const group = useRef<Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = pointer.x * 0.22 + Math.sin(clock.elapsedTime * 0.45) * 0.08;
    group.current.rotation.x = -pointer.y * 0.16 + Math.sin(clock.elapsedTime * 0.35) * 0.05;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.05;
  });

  const purple = new Color("#6D28FF");
  const cyan = new Color("#38BDF8");
  const amber = new Color("#F6C85F");

  return (
    <group ref={group} scale={1.35}>
      <Float speed={1.6} rotationIntensity={0.22} floatIntensity={0.18}>
        <mesh rotation={[Math.PI * 0.05, Math.PI * 0.12, Math.PI * 0.16]} position={[-0.42, 0.08, 0]}>
          <torusGeometry args={[0.92, 0.055, 24, 192]} />
          <meshPhysicalMaterial color={purple} emissive={purple} emissiveIntensity={0.82} metalness={0.88} roughness={0.18} clearcoat={1} />
        </mesh>
        <mesh rotation={[Math.PI * 0.06, Math.PI * 0.35, -Math.PI * 0.08]} position={[0.28, -0.08, 0.04]}>
          <torusGeometry args={[0.78, 0.07, 24, 192]} />
          <meshPhysicalMaterial color="#8B5CF6" emissive="#5B21B6" emissiveIntensity={0.62} metalness={0.92} roughness={0.13} clearcoat={1} />
        </mesh>
        <mesh rotation={[Math.PI * 0.18, -Math.PI * 0.28, Math.PI * 0.42]} position={[-0.08, 0.14, 0.1]}>
          <torusGeometry args={[0.62, 0.032, 18, 160]} />
          <meshPhysicalMaterial color={cyan} emissive={cyan} emissiveIntensity={0.35} metalness={0.72} roughness={0.24} transparent opacity={0.72} />
        </mesh>
        <mesh rotation={[Math.PI * 0.6, Math.PI * 0.18, Math.PI * 0.12]} position={[0.02, 0.03, -0.12]}>
          <torusGeometry args={[1.08, 0.018, 12, 160]} />
          <meshBasicMaterial color={amber} transparent opacity={0.22} blending={AdditiveBlending} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 6, 13]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[2.8, 2.2, 3]} color="#8B5CF6" intensity={4} />
      <pointLight position={[-3, -1.8, 2]} color="#38BDF8" intensity={1.6} />
      <pointLight position={[0, 2.2, -3]} color="#F6C85F" intensity={0.8} />
      <RibbonMark />
      <Sparkles count={220} speed={0.25} scale={[7, 4, 5]} size={1.8} color="#C2CAD8" opacity={0.5} />
      <Sparkles count={80} speed={0.42} scale={[5, 3, 3]} size={3.8} color="#8B5CF6" opacity={0.55} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: false }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
