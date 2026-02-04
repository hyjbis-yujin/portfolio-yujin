import React, { useState, useMemo, useRef } from 'react'
import { cn } from '@/lib/utils'
// import { ChevronLeft, ChevronRight } from 'lucide-react' // Removed
import logoBuff from '@/assets/images/projects/logo-buff.png'
import ProjectModal from './ProjectModal'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import { projects } from '@/data/projects'
import Section from '@/components/common/Section'

const Project = ({ selectedProject, onClose, onOpenProject }) => {
    const [filter, setFilter] = useState('All')

    const swiperRef = useRef(null)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects
        return projects.filter(p => p.type === filter)
    }, [filter])

    const tabs = ['All', 'Company', 'Toy']

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

    return (
        <Section id="project">
            <div className="project-container">
                {/* Prev Arrow */}
                <button
                    className={cn("slider-arrow arrow-prev", isBeginning && "swiper-button-disabled")}
                    onClick={handlePrev}
                    disabled={isBeginning}
                    aria-label="Previous Project"
                />

                {/* Center Column */}
                <div className="project-center-column">

                    {/* Header Area */}
                    <div className="project-header-area">
                        <div className="header-left">
                            <h2 className="section-title">Project</h2>
                            <p className="section-desc">
                                비즈니스 목표를 달성한 실무 및 개인 프로젝트 경험입니다.
                            </p>
                        </div>

                        {/* Filter Tabs */}
                        <div className="filter-group">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setFilter(tab)
                                        // Reset Swiper to start when filter changes
                                        if (swiperRef.current) swiperRef.current.slideTo(0)
                                    }}
                                    className={cn(
                                        "filter-btn",
                                        filter === tab && "active"
                                    )}
                                >
                                    {tab === 'All' ? '전체' : tab === 'Company' ? '실무' : '토이'} <span className="count">{getCount(tab)}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* === Swiper Area === */}
                    <div className="project-swiper-area">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            allowTouchMove={true}

                            onSwiper={(swiper) => {
                                swiperRef.current = swiper
                                setIsBeginning(swiper.isBeginning)
                                setIsEnd(swiper.isEnd)
                            }}
                            onSlideChange={(swiper) => {
                                setIsBeginning(swiper.isBeginning)
                                setIsEnd(swiper.isEnd)
                            }}
                            className="project-swiper"
                        >
                            {/* Chunking: Split into slides of 4 items */}
                            {Array.from({ length: Math.ceil(filteredProjects.length / 4) }).map((_, i) => (
                                <SwiperSlide key={i}>
                                    <div className="project-grid">
                                        {filteredProjects.slice(i * 4, (i + 1) * 4).map((item) => (
                                            <div
                                                key={item.id}
                                                className="project-card"
                                                onClick={() => handleCardClick(item)} // Click trigger
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleCardClick(item)
                                                }}
                                            >
                                                {/* Left: Image / Logo */}
                                                <div className="card-image-area">
                                                    <div className="image-overlay-pill">
                                                        <span className="type-pill">{item.type === 'Company' ? '실무' : '토이'}</span>
                                                    </div>
                                                    {/* Logo Implementation */}
                                                    <img
                                                        src={logoBuff}
                                                        alt="Project Logo"
                                                        className="project-logo"
                                                    />
                                                </div>

                                                {/* Right: Content */}
                                                <div className="card-content-area">
                                                    <h3 className="card-title">{item.title}</h3>
                                                    <p className="card-desc">{item.desc}</p>
                                                    <div className="tags-container">
                                                        {item.tags.map(tag => (
                                                            <span key={tag} className="tag">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>

                {/* Next Arrow */}
                <button
                    className={cn("slider-arrow arrow-next", isEnd && "swiper-button-disabled")}
                    onClick={handleNext}
                    disabled={isEnd}
                    aria-label="Next Project"
                />
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={onClose}
                />
            )}
        </Section>
    )
}

export default Project
