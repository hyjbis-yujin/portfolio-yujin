import React, { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import ProjectModalSlider from '@/components/features/project/ProjectModalSlider'
import ProjectModalContent from '@/components/features/project/ProjectModalContent'

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } }
}

const modalVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { scale: 0.95, opacity: 0, y: 20, transition: { duration: 0.2 } }
}

const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleClose = useCallback(() => {
        if (onClose) onClose()
        // Wait for modal exit animation before resetting
        setTimeout(() => setCurrentImageIndex(0), 200)
    }, [onClose])

    // Reset index when a new project is opened
    useEffect(() => {
        if (project) {
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

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose()
            if (hasScreenshots && screenshotsLength > 1) {
                if (e.key === 'ArrowRight') nextImage()
                if (e.key === 'ArrowLeft') prevImage()
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = 'unset'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleClose, nextImage, prevImage, hasScreenshots, screenshotsLength])

    // Portal to body
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
                        {/* Close Button */}
                        <button className="btn-close-modal" onClick={handleClose}>
                            <X size={24} />
                        </button>

                        <ProjectModalSlider
                            screenshots={project.screenshots} // changed from images
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
