import React, { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import ProjectModalSlider from '@/components/features/project/ProjectModalSlider'
import ProjectModalContent from '@/components/features/project/ProjectModalContent'
import { useScrollLock } from '@/hooks/useScrollLock'

import { overlayVariants, modalVariants } from '@/lib/animations/project'

const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleClose = useCallback(() => {
        if (onClose) onClose()
        setTimeout(() => setCurrentImageIndex(0), 200)
    }, [onClose])

    useEffect(() => {
        if (project) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrentImageIndex(0)
        }
    }, [project])

    const hasScreenshots = project?.screenshots && project.screenshots.length > 0;
    const screenshotsLength = hasScreenshots ? project.screenshots.length : 1;

    const nextImage = useCallback(() => {
        if (!hasScreenshots) return;
        setCurrentImageIndex((prev) => (prev + 1) % screenshotsLength)
    }, [hasScreenshots, screenshotsLength])

    const prevImage = useCallback(() => {
        if (!hasScreenshots) return;
        setCurrentImageIndex((prev) => (prev - 1 + screenshotsLength) % screenshotsLength)
    }, [hasScreenshots, screenshotsLength])

    useScrollLock(!!project)

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose()
            if (hasScreenshots && screenshotsLength > 1) {
                if (e.key === 'ArrowRight') nextImage()
                if (e.key === 'ArrowLeft') prevImage()
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleClose, nextImage, prevImage, hasScreenshots, screenshotsLength])

    return createPortal(
        <AnimatePresence>
            {project && (
                <motion.div
                    className="project-modal-overlay"
                    onClick={handleClose}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key="modal-overlay"
                >
                    <motion.div
                        className="project-modal-content"
                        onClick={(e) => e.stopPropagation()}
                        variants={modalVariants}
                    >
                        <button className="btn-close-modal" onClick={handleClose}>
                            <X size={24} />
                        </button>

                        <ProjectModalSlider
                            screenshots={project.screenshots}
                            title={project.title}
                            currentImageIndex={currentImageIndex}
                            setCurrentImageIndex={setCurrentImageIndex}
                            nextImage={nextImage}
                            prevImage={prevImage}
                        />

                        <ProjectModalContent project={project} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default ProjectModal
