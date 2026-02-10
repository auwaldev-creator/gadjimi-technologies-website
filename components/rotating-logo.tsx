'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Dodecahedron, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function RotatingLogo() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Rotate the logo continuously
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <group>
      {/* Main Logo Shape - Dodecahedron with gold metallic material */}
      <Dodecahedron ref={meshRef} args={[1.5, 0]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.1}
          distort={0.2}
          speed={2}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </Dodecahedron>
      
      {/* Inner Core - Glowing purple sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Outer Ring - Cyan accent */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Ambient glow effect */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#8B5CF6" distance={5} />
    </group>
  )
}
