import React, { useEffect } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import useStore from '@/store/useStore'
import { smoothScrollTo } from '@/lib/smoothScroll'
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Career from '@/components/sections/Career'
import Skill from '@/components/sections/Skill'
import Project from '@/components/sections/Project'
import Contact from '@/components/sections/Contact'

// Internal component to consume context
const PortfolioContent = () => {
  const { setActiveSection } = useStore()

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skill', 'career', 'project', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const [selectedProject, setSelectedProject] = React.useState(null)

  const handleOpenProject = (project) => {
    setSelectedProject(project)
    smoothScrollTo('#project')
  }

  const handleCloseProject = () => setSelectedProject(null)

  return (
    <MainLayout>
      <Home onOpenProject={handleOpenProject} />
      <About />
      <Skill />
      <Career />
      <Project
        selectedProject={selectedProject}
        onClose={handleCloseProject}
        onOpenProject={handleOpenProject}
      />
      <Contact />
    </MainLayout>
  )
}

function App() {
  return (
    <PortfolioContent />
  )
}

export default App
