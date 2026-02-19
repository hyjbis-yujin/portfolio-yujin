import React, { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import logoBuff from '@/assets/images/projects/logo-buff.png'
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
    }, [onClose])

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, [project.images.length])

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }, [project.images.length])

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose()
            if (e.key === 'ArrowRight') nextImage()
            if (e.key === 'ArrowLeft') prevImage()
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = 'unset'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleClose, nextImage, prevImage])

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
                            images={project.images}
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
