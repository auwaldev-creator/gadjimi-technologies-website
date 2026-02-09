'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

export function BlockchainNodes() {
  const groupRef = useRef<THREE.Group>(null)
  
  // Generate node positions in a network pattern
  const nodes = useMemo(() => {
    const nodePositions: [number, number, number][] = []
    const nodeCount = 8
    const radius = 4
    
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const z = (Math.random() - 0.5) * 2
      nodePositions.push([x, y, z])
    }
    
    return nodePositions
  }, [])

  // Generate connection lines between nodes
  const connections = useMemo(() => {
    const lines: [number, number][] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.6) {
          lines.push([i, j])
        }
      }
    }
    return lines
  }, [nodes])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Connection Lines */}
      {connections.map(([startIdx, endIdx], idx) => (
        <Line
          key={idx}
          points={[nodes[startIdx], nodes[endIdx]]}
          color="#06B6D4"
          lineWidth={1.5}
          transparent
          opacity={0.4}
        />
      ))}
      
      {/* Nodes */}
      {nodes.map((position, idx) => (
        <mesh key={idx} position={position}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={1}
            metalness={0.8}
            roughness={0.2}
          />
          
          {/* Outer glow ring */}
          <mesh scale={[1.5, 1.5, 1.5]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshBasicMaterial
              color="#8B5CF6"
              transparent
              opacity={0.2}
            />
          </mesh>
        </mesh>
      ))}
    </group>
  )
}
  
