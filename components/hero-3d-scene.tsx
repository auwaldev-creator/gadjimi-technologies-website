'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { RotatingLogo } from './rotating-logo'
import { FloatingParticles } from './floating-particles'
import { BlockchainNodes } from './blockchain-nodes'
import { FloatingCoins } from './floating-coins'

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
          
          {/* Lights */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#FFD700"
          />
          
          {/* 3D Elements */}
          <RotatingLogo />
          <FloatingParticles count={150} />
          <BlockchainNodes />
          <FloatingCoins />
          
          {/* Controls - Limited rotation */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
