'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CoinProps {
  position: [number, number, number]
  delay?: number
}

function Coin({ position, delay = 0 }: CoinProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay
      meshRef.current.rotation.y = time * 0.5
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
      <meshStandardMaterial
        color="#FFD700"
        metalness={1}
        roughness={0.1}
        emissive="#FFD700"
        emissiveIntensity={0.3}
      />
      
      {/* Coin edge */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
        <meshStandardMaterial
          color="#FFA500"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </mesh>
  )
}

export function FloatingCoins() {
  const coinPositions: [number, number, number][] = [
    [-6, 2, -2],
    [6, 3, -3],
    [-5, -2, -1],
    [7, -1, -4],
    [-8, 0, -2],
    [5, 4, -1],
  ]

  return (
    <group>
      {coinPositions.map((pos, idx) => (
        <Coin key={idx} position={pos} delay={idx * 0.5} />
      ))}
    </group>
  )
      }
