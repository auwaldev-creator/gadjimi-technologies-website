'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedLine({ start, end, color, delay = 0 }: { 
  start: [number, number, number]
  end: [number, number, number]
  color: string
  delay?: number
}) {
  const lineRef = useRef<THREE.Line>(null)

  useFrame((state) => {
    if (lineRef.current) {
      const time = state.clock.elapsedTime + delay
      const material = lineRef.current.material as THREE.LineBasicMaterial
      material.opacity = Math.sin(time * 2) * 0.5 + 0.5
    }
  })

  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.8}
    />
  )
}

function TransactionNode({ position, color, size = 0.2 }: {
  position: [number, number, number]
  color: string
  size?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.2)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  const nodes: Array<{ pos: [number, number, number], color: string }> = [
    { pos: [-2, 2, 0], color: '#FFD700' },
    { pos: [2, 2, 0], color: '#8B5CF6' },
    { pos: [-2, -2, 0], color: '#06B6D4' },
    { pos: [2, -2, 0], color: '#3B82F6' },
    { pos: [0, 0, 0], color: '#FFD700' },
  ]

  const connections: Array<{ start: number, end: number, color: string }> = [
    { start: 0, end: 4, color: '#FFD700' },
    { start: 1, end: 4, color: '#8B5CF6' },
    { start: 2, end: 4, color: '#06B6D4' },
    { start: 3, end: 4, color: '#3B82F6' },
  ]

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 5]} intensity={1} color="#FFD700" />

      {/* Connections */}
      {connections.map((conn, idx) => (
        <AnimatedLine
          key={idx}
          start={nodes[conn.start].pos}
          end={nodes[conn.end].pos}
          color={conn.color}
          delay={idx * 0.5}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <TransactionNode
          key={idx}
          position={node.pos}
          color={node.color}
          size={idx === 4 ? 0.3 : 0.2}
        />
      ))}
    </group>
  )
}

export function TransactionFlow() {
  return (
    <div className="w-full h-[400px] relative rounded-2xl overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background border border-neon-purple/20">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene />
      </Canvas>
      
      {/* Overlay Labels */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-gold/30">
          <p className="text-xs font-semibold text-neon-gold">Transaction Network</p>
        </div>
        <div className="absolute bottom-8 right-8 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-cyan/30">
          <p className="text-xs font-semibold text-neon-cyan">Live Data Flow</p>
        </div>
      </div>
    </div>
  )
}
