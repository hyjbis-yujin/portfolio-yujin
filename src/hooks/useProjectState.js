import { useState, useMemo, useRef } from 'react'
import { projects } from '@/data/projects'

/**
 * Custom Hook for managing the Project section state
 * Handles filtering and swiper state.
 */
export const useProjectState = ({ onOpenProject }) => {
    const [filter, setFilter] = useState('All')
    const swiperRef = useRef(null)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects
        return projects.filter(p => p.type === filter)
    }, [filter])

    const tabs = ['All', 'Company', 'Personal']

    const getCount = (type) => {
        if (type === 'All') return projects.length
        return projects.filter(p => p.type === type).length
    }

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev()
    }

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext()
    }

    const handleCardClick = (project) => {
        if (onOpenProject) {
            onOpenProject(project)
        }
    }

    const onSwiper = (swiper) => {
        swiperRef.current = swiper
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    const onSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    const changeFilter = (tab) => {
        setFilter(tab)
        if (swiperRef.current) swiperRef.current.slideTo(0)
    }

    const slides = Array.from({ length: Math.ceil(filteredProjects.length / 4) })

    return {
        filter,
        setFilter: changeFilter,
        filteredProjects,
        tabs,
        getCount,
        handlePrev,
        handleNext,
        handleCardClick,
        onSwiper,
        onSlideChange,
        isBeginning,
        isEnd,
        slides
    }
}
