'use client'

import dynamic from 'next/dynamic'

const ParticlesScene = dynamic(() => import('./ParticlesScene'), {
  ssr: false,
})

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <ParticlesScene />
    </div>
  )
}
