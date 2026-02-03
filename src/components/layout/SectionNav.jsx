import React from 'react'
import { cn } from '@/lib/utils'
import useStore from '@/store/useStore'
import { smoothScrollTo } from '@/lib/smoothScroll'

const navItems = [
    { id: 'about', label: 'About me' },
    { id: 'skill', label: 'Skill' },
    { id: 'career', label: 'Career' },
    { id: 'project', label: 'Project' },
]

const SectionNav = () => {
    const { activeSection } = useStore()

    const scrollToSection = (id) => {
        smoothScrollTo(`#${id}`)
    }

    // Removed isHomeActive logic to allow interaction always

    return (
        <nav className="section-nav">
            {navItems.map((item) => {
                const isActive = activeSection === item.id

                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        // Removed disabled prop
                        className={cn(
                            "nav-link",
                            isActive ? "active" : "inactive"
                        )}
                    >
                        {item.label}
                    </button>
                )
            })}
        </nav>
    )
}

export default SectionNav
