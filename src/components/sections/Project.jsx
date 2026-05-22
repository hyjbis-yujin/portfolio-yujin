import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
const FALLBACK_LOGO = '/images/projects/logos/logo-buff.png'
import ProjectModal from './ProjectModal'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import Section from '@/components/common/Section'
import SectionHeader from '@/components/ui/SectionHeader'

import { useProjectState } from '@/hooks/useProjectState'

import { containerVariants, cardVariants } from '@/lib/animations/project'

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
        slides,
        itemsPerSlide
    } = useProjectState({ onOpenProject })

    return (
        <Section id="project">
            <div className="project-container">
                <div className="project-center-column">
                    <header className="project-header-area">
                        <div className="header-left">
                            <h2 className="section-title">Project</h2>
                            <p className="section-desc">
                                비즈니스 목표를 달성한 실무 및 개인 프로젝트 경험입니다.
                            </p>
                        </div>

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

                    <div className="project-carousel-wrapper">
                        <button
                            className={cn("slider-arrow arrow-prev", isBeginning && "swiper-button-disabled")}
                            onClick={handlePrev}
                            disabled={isBeginning}
                            aria-label="Previous Page"
                        />

                        <div className="project-swiper-area">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1}
                                allowTouchMove={true}
                                onSwiper={onSwiper}
                                onSlideChange={onSlideChange}
                                className="project-swiper"
                                key={`${filter}-${itemsPerSlide}`}
                            >
                                {slides.map((_, i) => (
                                    <SwiperSlide key={`slide-${i}`}>
                                        <motion.div
                                            className="project-grid"
                                            variants={containerVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.1 }}
                                            key={filter}
                                        >
                                            {filteredProjects.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide).map((item) => (
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
                                                    <div className="card-image-area">
                                                        <div className="image-overlay-pill">
                                                            <span className="type-pill">{item.type}</span>
                                                        </div>
                                                        <img
                                                            src={item.logo || FALLBACK_LOGO}
                                                            alt={`${item.title} 로고`}
                                                            className="project-logo"
                                                        />
                                                    </div>

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

                        <button
                            className={cn("slider-arrow arrow-next", isEnd && "swiper-button-disabled")}
                            onClick={handleNext}
                            disabled={isEnd}
                            aria-label="Next Page"
                        />
                    </div>
                </div>
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
