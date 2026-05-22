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

const PortfolioContent = () => {
  const { setActiveSection } = useStore()

  useEffect(() => {
    const sections = ['home', 'about', 'skill', 'career', 'project', 'contact']
    
    // IntersectionObserver is much more performant than scroll event + getBoundingClientRect.
    // rootMargin creates a narrow horizontal trigger line at 33.33% from the top of the viewport.
    // This perfectly matches the exact behavior of `window.scrollY + window.innerHeight / 3`.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, {
      rootMargin: "-33.33% 0px -66.66% 0px",
      threshold: 0
    })

    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [setActiveSection])

  const [selectedProject, setSelectedProject] = React.useState(null)

  const handleOpenProject = (project) => {
    setSelectedProject(project)
    smoothScrollTo('#project')
  }

  const handleCloseProject = () => setSelectedProject(null)

  const handleScrollToSection = (sectionId) => {
    smoothScrollTo(`#${sectionId}`)
  }

  return (
    <MainLayout>
      <Home
        onOpenProject={handleOpenProject}
        onScrollTo={handleScrollToSection}
      />
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

import { ReactLenis } from '@studio-freight/react-lenis'

function App() {
  return (
    <ReactLenis root>
      <PortfolioContent />
    </ReactLenis>
  )
}

export default App
