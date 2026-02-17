import { useState, useEffect, useRef } from 'react'
import { aboutData } from '@/data/about'

/**
 * Custom Hook for managing the About section state
 * Handles deck animation index, scroll locking, and navigation.
 */
export const useAboutState = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const sectionRef = useRef(null)

    // Simplified useEffect: Only for cleanup if needed, but wheel lock removed
    useEffect(() => {
        // Scroll lock logic removed to allow natural navigation
    }, [])

    const handleNext = () => {
        if (activeIndex < aboutData.length - 1 && !isAnimating) {
            setIsAnimating(true)
            setActiveIndex(prev => prev + 1)
            setTimeout(() => setIsAnimating(false), 500)
        }
    }

    const handlePrev = () => {
        if (activeIndex > 0 && !isAnimating) {
            setIsAnimating(true)
            setActiveIndex(prev => prev - 1)
            setTimeout(() => setIsAnimating(false), 500)
        }
    }

    const setIndex = (index) => {
        if (!isAnimating) setActiveIndex(index)
    }

    return {
        activeIndex,
        isAnimating,
        sectionRef,
        handleNext,
        handlePrev,
        setIndex,
        aboutData
    }
}
