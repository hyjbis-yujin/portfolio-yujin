import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

import { motion, AnimatePresence } from 'framer-motion'

const ProjectModalSlider = ({
    screenshots,
    currentImageIndex,
    setCurrentImageIndex,
    nextImage,
    prevImage
}) => {
    const trackRef = useRef(null)

    // Auto-scroll thumbnails track to keep active item in view
    useEffect(() => {
        if (!trackRef.current) return
        
        const isMobile = window.innerWidth <= 768;
        const threshold = isMobile ? 2 : 3;

        // If the screenshots fit completely within the visible track, freeze the scroll position strictly to 0
        if (screenshots && screenshots.length <= threshold) {
            trackRef.current.scrollLeft = 0;
            return;
        }

        const activeThumb = trackRef.current.children[currentImageIndex]
        if (activeThumb) {
            if (screenshots && screenshots.length > threshold) {
                activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            }
        }
    }, [currentImageIndex, screenshots])

    // Fallback if no screenshots are provided
    if (!screenshots || screenshots.length === 0) {
        return (
            <div className="modal-left-section fallback">
                <div className="modal-main-image-wrapper placeholder">
                    <span>No Images Available</span>
                </div>
            </div>
        )
    }

    const hasMultipleImages = screenshots.length > 1;

    return (
        <div className="modal-left-section">
            <div className="modal-main-image-wrapper">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={screenshots[currentImageIndex]}
                        alt={`Project Screenshot ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="main-screenshot"
                    />
                </AnimatePresence>
            </div>

            {hasMultipleImages && (
                <div className="modal-slider-controls">
                    <button className="btn-slide prev" onClick={prevImage} aria-label="Previous image"></button>
                    <div 
                        className="thumbnails-track" 
                        ref={trackRef}
                        style={{ overflowX: screenshots.length > (window.innerWidth <= 768 ? 2 : 3) ? 'auto' : 'hidden' }}
                        onScroll={(e) => {
                            const isMobile = window.innerWidth <= 768;
                            const threshold = isMobile ? 2 : 3;
                            if (screenshots && screenshots.length <= threshold) {
                                e.target.scrollLeft = 0;
                            }
                        }}
                    >
                        {screenshots.map((img, idx) => (
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
            )}
        </div>
    )
}

export default ProjectModalSlider
