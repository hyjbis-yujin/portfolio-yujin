import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProfilePanel from '@/components/features/home/ProfilePanel'
import ToolsPanel from '@/components/features/home/ToolsPanel'
import AboutPanel from '@/components/features/home/AboutPanel'
import ProjectPreviewPanel from '@/components/features/home/ProjectPreviewPanel'

import {
    layoutSpring,
    titleVariants,
    profileVariant,
    toolsVariant,
    aboutVariant,
    projectVariant
} from '@/lib/animations/home'

const Home = ({ onOpenProject, onScrollTo }) => {
    const isLoadedMidPage = typeof window !== 'undefined' ? window.scrollY > 10 : false;
    const [isExpanded, setIsExpanded] = useState(isLoadedMidPage)

    useEffect(() => {
        if (isExpanded) return;

        const timer = setTimeout(() => {
            setIsExpanded(true)
        }, 1200)
        return () => clearTimeout(timer)
    }, [isExpanded])


    return (
        <section id="home" className="home-container">
            <motion.div
                className="home-grid"
                data-expanded={isExpanded}
                layout={!isLoadedMidPage}
                transition={layoutSpring}
            >
                <motion.div
                    className="home-title-area"
                    layout={!isLoadedMidPage}
                    initial={isLoadedMidPage ? false : "initial"}
                    animate={isExpanded ? "expanded" : "initial"}
                    variants={titleVariants}
                    transition={layoutSpring}
                >
                    <motion.h1
                        layout={!isLoadedMidPage}
                        transition={layoutSpring}
                        initial={isLoadedMidPage ? false : undefined}
                    >
                        웹-디자이너<br />
                        <span className="highlight">포트폴리오</span>
                    </motion.h1>
                </motion.div>

                <motion.div
                    className="home-panels-area"
                    initial={isLoadedMidPage ? false : "hidden"}
                    animate={isExpanded ? "visible" : "hidden"}
                >
                    <motion.div
                        className="profile-panel-wrapper"
                        variants={profileVariant}
                        style={{ zIndex: 4, position: 'relative' }}
                    >
                        <ProfilePanel />
                    </motion.div>

                    <motion.div
                        className="tools-panel-wrapper"
                        variants={toolsVariant}
                        style={{ zIndex: 3, position: 'relative' }}
                    >
                        <ToolsPanel onScrollTo={onScrollTo} />
                    </motion.div>

                    <motion.div
                        className="about-panel-wrapper"
                        variants={aboutVariant}
                        style={{ zIndex: 2, position: 'relative' }}
                    >
                        <AboutPanel onScrollTo={onScrollTo} />
                    </motion.div>

                    <motion.div
                        className="project-panel-wrapper"
                        variants={projectVariant}
                        style={{ zIndex: 1, position: 'relative' }}
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
