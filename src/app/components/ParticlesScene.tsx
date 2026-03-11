'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, CameraShake } from '@react-three/drei'
import { Particles } from './Particles'

export default function ParticlesScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 25, position: [0, 0, 6] }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        zoomSpeed={0.1}
        enableZoom={false}
        enablePan={false}
      />
      <CameraShake
        yawFrequency={1}
        maxYaw={0.05}
        pitchFrequency={1}
        maxPitch={0.05}
        rollFrequency={0.5}
        maxRoll={0.5}
        intensity={0.2}
      />
      <Particles
        speed={100}
        fov={20}
        aperture={1.8}
        focus={5.1}
        curl={0.25}
      />
    </Canvas>
  )
}
