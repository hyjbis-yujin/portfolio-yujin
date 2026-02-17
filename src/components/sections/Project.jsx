import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import logoBuff from '@/assets/images/projects/logo-buff.png'
import ProjectModal from './ProjectModal'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import { projects } from '@/data/projects'
import Section from '@/components/common/Section'
import SectionHeader from '@/components/ui/SectionHeader'

import { useProjectState } from '@/hooks/useProjectState'

// Animation Variants matching Skill section for consistency
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    }
}

const Project = ({ selectedProject, onClose, onOpenProject }) => {
    const {
        filter,
        setFilter,
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
    } = useProjectState({ onOpenProject })

    return (
        <Section id="project">
            <div className="project-container">
                {/* Prev Arrow */}
                <button
                    className={cn("slider-arrow arrow-prev", isBeginning && "swiper-button-disabled")}
                    onClick={handlePrev}
                    disabled={isBeginning}
                    aria-label="Previous Page"
                />

                <div className="project-center-column">
                    {/* Header Area */}
                    <header className="project-header-area">
                        <div className="header-left">
                            <h2 className="section-title">Project</h2>
                            <p className="section-desc">
                                비즈니스 목표를 달성한 실무 및 개인 프로젝트 경험입니다.
                            </p>
                        </div>

                        {/* Filter Tabs */}
                        <div className="filter-group" role="tablist">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab)}
                                    className={cn("filter-btn", filter === tab && "active")}
                                    role="tab"
                                    aria-selected={filter === tab}
                                >
                                    {tab} <span className="count">{getCount(tab)}</span>
                                </button>
                            ))}
                        </div>
                    </header>

                    {/* === Swiper Area === */}
                    <div className="project-swiper-area">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            allowTouchMove={true}
                            onSwiper={onSwiper}
                            onSlideChange={onSlideChange}
                            className="project-swiper"
                        >
                            {slides.map((_, i) => (
                                <SwiperSlide key={`slide-${i}`}>
                                    <motion.div
                                        className="project-grid"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.4, margin: "-10% 0px -10% 0px" }}
                                        key={filter} // Re-animate on filter change
                                    >
                                        {filteredProjects.slice(i * 4, (i + 1) * 4).map((item) => (
                                            <motion.article
                                                key={item.id}
                                                className="project-card"
                                                onClick={() => handleCardClick(item)}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleCardClick(item)
                                                }}
                                                aria-label={`${item.title} 프로젝트 상세보기`}
                                                variants={cardVariants}
                                            >
                                                {/* Left: Image / Logo */}
                                                <div className="card-image-area">
                                                    <div className="image-overlay-pill">
                                                        <span className="type-pill">{item.type}</span>
                                                    </div>
                                                    <img
                                                        src={logoBuff}
                                                        alt={`${item.title} 로고`}
                                                        className="project-logo"
                                                    />
                                                </div>

                                                {/* Right: Content */}
                                                <div className="card-content-area">
                                                    <h3 className="card-title">{item.title}</h3>
                                                    <p className="card-desc">{item.desc}</p>
                                                    <div className="tags-container" role="list">
                                                        {item.tags.map(tag => (
                                                            <span key={tag} className="tag" role="listitem">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.article>
                                        ))}
                                    </motion.div>
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
                    aria-label="Next Page"
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
