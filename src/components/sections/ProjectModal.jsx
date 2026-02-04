import React, { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoBuff from '@/assets/images/projects/logo-buff.png'
import ProjectModalSlider from '@/components/features/project/ProjectModalSlider'
import ProjectModalContent from '@/components/features/project/ProjectModalContent'

const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isClosing, setIsClosing] = useState(false)

    const images = project.images || [
        logoBuff,
        logoBuff,
        logoBuff
    ]

    const handleClose = useCallback(() => {
        setIsClosing(true)
        setTimeout(() => {
            onClose()
        }, 300) // Match animation duration
    }, [onClose])

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }, [images.length])

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose()
            if (e.key === 'ArrowLeft') prevImage()
            if (e.key === 'ArrowRight') nextImage()
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = 'unset'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleClose, nextImage, prevImage])

    // Backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    // Portal to body
    return createPortal(
        <div
            className={cn("project-modal-overlay", isClosing && "closing")}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="project-modal-content">
                <button
                    className="btn-close-modal"
                    onClick={handleClose}
                    aria-label="Close modal"
                >
                    <X />
                </button>

                {/* === Image Slider === */}
                <ProjectModalSlider
                    images={images}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    nextImage={nextImage}
                    prevImage={prevImage}
                />

                {/* === Content === */}
                <ProjectModalContent project={project} />
            </div>
        </div>,
        document.body
    )
}

export default ProjectModal
