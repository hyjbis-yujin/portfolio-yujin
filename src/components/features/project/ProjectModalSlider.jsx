import React from 'react'
import { cn } from '@/lib/utils'

const ProjectModalSlider = ({
    images,
    currentImageIndex,
    setCurrentImageIndex,
    nextImage,
    prevImage
}) => {
    return (
        <div className="modal-left-section">
            <div className="modal-main-image-wrapper">
                <img
                    src={images[currentImageIndex]}
                    alt={`Project Screenshot ${currentImageIndex + 1}`}
                />
            </div>

            <div className="modal-slider-controls">
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
    )
}

export default ProjectModalSlider
