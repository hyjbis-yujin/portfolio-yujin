import React, { useState, useEffect, useRef } from 'react'
import { User, Code, Zap, MessageSquare, Brain, Rocket } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import AboutCard from '@/components/ui/AboutCard'
import Section from '@/components/common/Section'
import SectionHeader from '@/components/ui/SectionHeader'

import { useAboutState } from '@/hooks/useAboutState'

const About = () => {
    const {
        activeIndex,
        isAnimating,
        sectionRef,
        handleNext,
        handlePrev,
        setIndex,
        aboutData
    } = useAboutState()

    // Variants for Deck Animation
    const variants = {
        active: {
            x: "-50%",
            y: "-50%",
            opacity: 1,
            zIndex: 10,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        prev: {
            x: "calc(-50% - 100px)",
            y: "-50%",
            opacity: 0.5,
            zIndex: 5,
            scale: 0.9,
            transition: { duration: 0.4 }
        },
        next: {
            x: "calc(-50% + 100px)",
            y: "-50%",
            opacity: 0.5,
            zIndex: 5,
            scale: 0.9,
            transition: { duration: 0.4 }
        },
        hiddenLeft: {
            x: "calc(-50% - 300px)",
            y: "-50%",
            opacity: 0,
            zIndex: 0,
            scale: 0.7
        },
        hiddenRight: {
            x: "calc(-50% + 300px)",
            y: "-50%",
            opacity: 0,
            zIndex: 0,
            scale: 0.7
        }
    }

    const getCardVariant = (index) => {
        if (index === activeIndex) return 'active'
        if (index === activeIndex - 1) return 'prev'
        if (index === activeIndex + 1) return 'next'
        if (index < activeIndex - 1) return 'hiddenLeft'
        return 'hiddenRight'
    }

    return (
        <Section id="about" ref={sectionRef}>
            <div className="about-container">
                {/* Header wrapper for positioning */}
                <div className="about-header-wrapper">
                    <SectionHeader
                        title="About Me"
                        subtitle="사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다."
                    />
                </div>

                <div className="about-deck-container" onClick={handleNext}>
                    <AnimatePresence initial={false}>
                        {aboutData.map((item, index) => {
                            const variantState = getCardVariant(index)

                            return (
                                <motion.div
                                    key={index}
                                    className={cn(
                                        "about-card-motion-wrapper", // Fixed class name to match SCSS
                                        index === activeIndex ? "active" : ""
                                    )}
                                    variants={variants}
                                    initial="next"
                                    animate={variantState}
                                >
                                    <AboutCard
                                        icon={item.icon}
                                        title={item.title}
                                    >
                                        <p className={cn(
                                            "card-desc",
                                            index !== activeIndex && "hidden-desc"
                                        )}>
                                            {item.desc}
                                        </p>
                                    </AboutCard>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>

                <div className="deck-indicators">
                    {aboutData.map((_, i) => (
                        <div
                            key={i}
                            className={cn("indicator", i === activeIndex && "active")}
                            onClick={() => {
                                if (!isAnimating) setActiveIndex(i)
                            }}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default About
