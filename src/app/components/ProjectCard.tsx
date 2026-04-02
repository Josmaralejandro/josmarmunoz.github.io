'use client'

import { useRef, MouseEvent } from 'react'

interface ProjectCardProps {
  number: string
  title: string
  description: string
  tech: string[]
  link: string
}

export default function ProjectCard({ number, title, description, tech, link }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`

    if (glareRef.current) {
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(249, 115, 22, 0.12) 0%, transparent 65%)`
      glareRef.current.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    if (glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }

  return (
    <a
      ref={cardRef}
      href={link}
      className="group relative bg-[#0a0a0a] p-8 block overflow-hidden"
      style={{
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0, transition: 'opacity 0.2s ease-out' }}
      />

      {/* Orange border on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#f97316]/30 transition-colors duration-300 pointer-events-none" />

      <div className="flex items-start justify-between mb-6">
        <span className="text-xs font-mono text-[#333333]">{number}</span>
        <span className="text-lg text-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-[#f97316] transition-colors duration-200">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-[#a3a3a3] mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        {tech.map((t) => (
          <span key={t} className="text-xs font-mono text-[#555555]">
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}
