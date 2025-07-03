import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Publications from "@/components/sections/publications"
import Certifications from "@/components/sections/certifications"
import Github from "@/components/sections/github"
import Impact from "@/components/sections/impact"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Publications />
      <Certifications />
      <Github />
      <Impact />
      <Contact />
    </div>
  )
}
