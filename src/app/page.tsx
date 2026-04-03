import Image from 'next/image'
import ProjectCard from './components/ProjectCard'
import HeroSection from './components/HeroSection'

const projects = [
  {
    number: "01",
    title: "Pretty Technical — Platform",
    description:
      "Led frontend architecture and delivery for a platform with thousands of daily active users. Defined standards, owned high-risk releases, and built across multiple concurrent product streams ",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Jest", "React Testing Library"],
    link: "#",
  },
  {
    number: "02",
    title: "Magic Wish — Android App",
    description:
      "Built mobile UI features for an Android application using React Native, collaborating closely with designers and backend developers to ship a polished, production-ready product.",
    tech: ["React Native", "JavaScript"],
    link: "#",
  },
  {
    number: "03",
    title: "FYLD — Blockchain Witnessing",
    description:
      "Built backend services in Golang powering a blockchain-based data witnessing solution. Integrated PostgreSQL and the Bitcoin Cash API, contributing to system reliability and data integrity in a distributed environment.",
    tech: ["Golang", "PostgreSQL", "Bitcoin Cash API", "Docker"],
    link: "#",
  },
]

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "Styled Components",
  "GraphQL",
  "REST APIs",
  "Jest",
  "React Testing Library",
  "Docker",
  "AWS",
  "PostgreSQL",
  "Golang",
  "CI/CD",
]

const socials = [
  { label: "GitHub", href: "https://github.com/josmaralejandro" },
  { label: "GitLab", href: "https://gitlab.com/josmaralejandro" },
  { label: "LinkedIn", href: "https://linkedin.com/in/josmarmunoz" },
]

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-[family-name:var(--font-geist-sans)]">

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <a href="#hero" className="block">
          <Image
            src="/logo.svg"
            alt="Josmar Muñoz"
            width={32}
            height={38}
            className="hover:opacity-80 transition-opacity duration-200"
          />
        </a>
        <div className="flex gap-8 text-xs tracking-widest uppercase text-[#a3a3a3]">
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <HeroSection />

      {/* ── About ── */}
      <section
        id="about"
        className="py-32 px-8 md:px-16 border-t border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[#05c898] mb-16">
            About
          </p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Bio */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Engineering that scales — teams and products alike.
              </h2>
              <p className="leading-relaxed text-[#a3a3a3] mb-6">
                Software Engineer with 8+ years of experience delivering web applications
                for UK and US-based companies in fully remote environments. Currently
                Software Engineer at Pretty Technical, where I define
                architecture, code standards and ship production code daily.
              </p>
              <p className="leading-relaxed text-[#a3a3a3]">
                Frontend-focused at heart — deep expertise in React and Next.js,
                complemented by solid backend and infrastructure experience. AWS Certified
                Cloud Practitioner. Open to relocation.
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-[#a3a3a3] mb-8">
                Stack &amp; Tools
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border border-[#2a2a2a] text-[#a3a3a3] hover:border-[#05c898] hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="py-32 px-8 md:px-16 border-t border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-[#05c898]">
              Projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                number={project.number}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Footer ── */}
      <footer
        id="contact"
        className="py-32 px-8 md:px-16 border-t border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[#05c898] mb-8">
            Contact
          </p>

          <h2
            className="font-bold leading-none mb-16"
            style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
          >
            <span className="block">Let&apos;s build</span>
            <span
              className="block"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #05c898",
              }}
            >
              something.
            </span>
          </h2>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <a
              href="mailto:josmar@josmarmunoz.dev"
              className="text-lg text-[#a3a3a3] hover:text-white transition-colors duration-200"
            >
              josmar@josmarmunoz.dev
            </a>
            <div className="flex gap-6">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-[#a3a3a3] hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex justify-between text-xs text-[#333333]">
            <span>© 2026 Josmar Muñoz</span>
            <span>Software Engineer</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
