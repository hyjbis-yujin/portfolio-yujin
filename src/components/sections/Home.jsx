import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { smoothScrollTo } from '@/lib/smoothScroll'

// Components
import ProfilePanel from '@/components/features/home/ProfilePanel'
import ToolsPanel from '@/components/features/home/ToolsPanel'
import AboutPanel from '@/components/features/home/AboutPanel'
import ProjectPreviewPanel from '@/components/features/home/ProjectPreviewPanel'

const layoutSpring = {
    type: "spring",
    stiffness: 70,
    damping: 20
}

const titleVariants = {
    initial: {
        scale: 1,
        letterSpacing: 'normal'
    },
    expanded: {
        scale: 1,
        letterSpacing: 'normal',
        transition: { duration: 0.8, ease: "easeInOut" }
    }
}

// Animation Configuration
const PANEL_DURATION = 0.35; // Snappier duration
const PANEL_EASE = "easeOut"; // Keep smooth deceleration
const STAGGER_DELAY = 0.35; // Tighter stagger for faster flow
const BASE_DELAY = 0.4; // Initial wait before panels start

const profileVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: BASE_DELAY
        }
    }
}

// 1. Appears BELOW the first panel (Slide Down - Solid)
const toolsVariant = {
    hidden: { y: -90, opacity: 0, zIndex: 3 },
    visible: {
        y: 0,
        opacity: 1,
        zIndex: 3,
        transition: {
            duration: PANEL_DURATION,
            ease: PANEL_EASE,
            delay: BASE_DELAY + STAGGER_DELAY,
            opacity: { duration: 0.1, delay: BASE_DELAY + STAGGER_DELAY } // Slight fade-in
        }
    }
}

// 2. Moves RIGHT from behind the second panel (Slide Right - Solid)
const aboutVariant = {
    hidden: { x: -90, opacity: 0, zIndex: 2 },
    visible: {
        x: 0,
        opacity: 1,
        zIndex: 2,
        transition: {
            duration: PANEL_DURATION,
            ease: PANEL_EASE,
            delay: BASE_DELAY + (STAGGER_DELAY * 2),
            opacity: { duration: 0.1, delay: BASE_DELAY + (STAGGER_DELAY * 2) } // Slight fade-in
        }
    }
}

// 3. Appears BELOW the 2nd/3rd panels (Slide Down - Solid)
const projectVariant = {
    hidden: { y: -90, opacity: 0, zIndex: 1 },
    visible: {
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: {
            duration: PANEL_DURATION,
            ease: PANEL_EASE,
            delay: BASE_DELAY + (STAGGER_DELAY * 3),
            opacity: { duration: 0.1, delay: BASE_DELAY + (STAGGER_DELAY * 3) } // Slight fade-in
        }
    }
}

const Home = ({ onOpenProject, onScrollTo }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExpanded(true)
        }, 1200) // 1.2s delay as per user request
        return () => clearTimeout(timer)
    }, [])

    return (
        <section id="home" className="home-container">
            <motion.div
                className="home-grid"
                data-expanded={isExpanded}
                layout
                transition={layoutSpring}
            >
                {/* Title Area */}
                <motion.div
                    className="home-title-area"
                    layout
                    transition={layoutSpring}
                    variants={titleVariants}
                    initial="initial"
                    animate={isExpanded ? "expanded" : "initial"}
                >
                    <motion.h1 layout transition={layoutSpring}>
                        프론트-엔드<br />
                        <span className="highlight">포트폴리오</span>
                    </motion.h1>
                </motion.div>

                {/* Panels Area */}
                <motion.div
                    className="home-panels-area"
                    initial="hidden"
                    animate={isExpanded ? "visible" : "hidden"}
                // Stagger removed from container to control manually via delays
                >
                    <motion.div
                        className="profile-panel-wrapper"
                        variants={profileVariant}
                        style={{ zIndex: 4, position: 'relative' }} // Top most
                    >
                        <ProfilePanel />
                    </motion.div>

                    <motion.div
                        className="tools-panel-wrapper"
                        variants={toolsVariant}
                        style={{ zIndex: 3, position: 'relative' }} // Under Profile
                    >
                        <ToolsPanel onScrollTo={onScrollTo} />
                    </motion.div>

                    <motion.div
                        className="about-panel-wrapper"
                        variants={aboutVariant}
                        style={{ zIndex: 2, position: 'relative' }} // Under Tools (slides out)
                    >
                        <AboutPanel onScrollTo={onScrollTo} />
                    </motion.div>

                    <motion.div
                        className="project-panel-wrapper"
                        variants={projectVariant}
                        style={{ zIndex: 1, position: 'relative' }} // Under Row 2
                    >
                        <ProjectPreviewPanel
                            onOpenProject={onOpenProject}
                            onScrollTo={onScrollTo}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Home
