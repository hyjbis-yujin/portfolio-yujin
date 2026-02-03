import React, { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
// Placeholder images if real ones missing
import logoBuff from '@/assets/images/projects/logo-buff.png'

const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isClosing, setIsClosing] = useState(false)

    // Dummy images if project doesn't have them
    const images = project.images || [
        logoBuff, // Fallback 1
        logoBuff, // Fallback 2
        logoBuff  // Fallback 3
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
        // Lock body scroll
        document.body.style.overflow = 'hidden'

        // ECS Key listener
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

                {/* Left: Image Slider */}
                <div className="modal-left-section">
                    <div className="modal-main-image-wrapper">
                        <img
                            src={images[currentImageIndex]}
                            alt={`Project Screenshot ${currentImageIndex + 1}`}
                        />
                    </div>

                    <div className="modal-slider-controls">
                        {/* 
                            Left/Right buttons are optional if we have thumbnails,
                            but user asked for buttons.
                        */}
                        <button className="btn-slide prev" onClick={prevImage} aria-label="Previous image"></button>
                        <div className="thumbnails-track">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={cn("thumb-item", idx === currentImageIndex && "active")}
                                    onClick={() => setCurrentImageIndex(idx)}
                                >
                                    <img src={img} alt={`Thumb ${idx}`} />
                                </div>
                            ))}
                        </div>
                        <button className="btn-slide next" onClick={nextImage} aria-label="Next image"></button>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="modal-right-section">

                    {/* Header */}
                    <div className="modal-header-group">
                        <h2 id="modal-title" className="modal-title">{project.title}</h2>

                        <div className="modal-actions">
                            <a
                                href={project.links?.git || '#'}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-action"
                            >
                                Git
                            </a>
                            <a
                                href={project.links?.demo || '#'}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-action"
                            >
                                Demo
                            </a>
                        </div>
                    </div>

                    {/* Meta Grid */}
                    <div className="modal-meta-grid">
                        <span className="meta-label">메인</span>
                        <span className="meta-value">{project.meta?.main || '풀반응형'}</span>

                        <span className="meta-label">규모</span>
                        <span className="meta-value">{project.meta?.scale || '토이 프로젝트'}</span>

                        <span className="meta-label">참여도</span>
                        <span className="meta-value">{project.meta?.contribution || '디자인 100% / 프론트 100%'}</span>

                        <span className="meta-label">스택</span>
                        <span className="meta-value">{project.meta?.stack || 'HTML, CSS3, Javascript'}</span>
                    </div>

                    {/* Extra Meta (Framework/Lib) - If needed, user image shows them separately */}
                    <div className="meta-wrapper">
                        {/* We can mix this into the grid above or keep separate. 
                             The design has 2 cols. 
                             Let's stick to the single grid for now as per code structure, 
                             or update if needed. The CSS handles layout.
                         */}
                    </div>

                    {/* Highlights */}
                    <div className="modal-highlights">
                        <h3 className="highlight-title">작업 기여도</h3>
                        <div className="highlight-list">
                            {(project.highlights || []).map((text, idx) => (
                                <div key={idx} className="highlight-item">
                                    <Check />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>,
        document.body
    )
}

export default ProjectModal
