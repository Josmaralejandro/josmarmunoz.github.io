'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const layer1Ref = useRef<HTMLSpanElement>(null) // "Josmar"   — slow, forward
  const layer2Ref = useRef<HTMLSpanElement>(null) // "Muñoz"    — fast, backward
  const layer3Ref = useRef<HTMLParagraphElement>(null) // tagline — subtle
  const layer4Ref = useRef<HTMLParagraphElement>(null) // label   — barely moves

  useEffect(() => {
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 … +1 from screen center
      targetX = (e.clientX / window.innerWidth - 0.5) * 2
      targetY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const animate = () => {
      // Smooth lerp — feels organic, not snappy
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06

      const s1x = currentX * 18
      const s1y = currentY * 10
      const s2x = currentX * -28
      const s2y = currentY * -16
      const s3x = currentX * 10
      const s3y = currentY * 6
      const s4x = currentX * 5
      const s4y = currentY * 3

      if (layer1Ref.current)
        layer1Ref.current.style.transform = `translate(${s1x}px, ${s1y}px)`
      if (layer2Ref.current)
        layer2Ref.current.style.transform = `translate(${s2x}px, ${s2y}px)`
      if (layer3Ref.current)
        layer3Ref.current.style.transform = `translate(${s3x}px, ${s3y}px)`
      if (layer4Ref.current)
        layer4Ref.current.style.transform = `translate(${s4x}px, ${s4y}px)`

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <p
          ref={layer4Ref}
          className="text-xs tracking-[0.4em] uppercase text-[#05c898] mb-8 inline-block"
          style={{ willChange: 'transform' }}
        >
          Software Engineer · 8+ Years
        </p>

        <h1
          className="font-bold leading-none tracking-tight"
          style={{ fontSize: 'clamp(4rem, 15vw, 14rem)' }}
        >
          <span
            ref={layer1Ref}
            className="block text-white"
            style={{ willChange: 'transform', display: 'block' }}
          >
            Josmar
          </span>
          <span
            ref={layer2Ref}
            className="block"
            style={{
              display: 'block',
              color: 'transparent',
              WebkitTextStroke: '2px #ffffff',
              willChange: 'transform',
            }}
          >
            Muñoz
          </span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p
            ref={layer3Ref}
            className="text-lg max-w-md leading-relaxed text-[#a3a3a3]"
            style={{ willChange: 'transform' }}
          >
            Software Engineer building scalable web products for UK &amp; US
            companies. Specialised in React, Next.js, and frontend architecture.
          </p>
          <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
            <span className="inline-block h-px w-8 bg-[#05c898]" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  )
}
