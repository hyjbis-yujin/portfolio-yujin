import React, { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

import logoBuff from '@/assets/images/projects/logo-buff.png'
import ProjectModalSlider from '@/components/features/project/ProjectModalSlider'
import ProjectModalContent from '@/components/features/project/ProjectModalContent'

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
        <div className="project-modal-overlay" onClick={handleClose}>
            <div
                className="project-modal-content"
                onClick={(e) => e.stopPropagation()}
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
            </div>
        </div>,
        document.body
    )
}

export default ProjectModal
