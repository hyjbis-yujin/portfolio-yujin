import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Section from '@/components/common/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { aboutQnA } from '@/data/about'
import profileImg from '@/assets/images/ui/profile.png'

const About = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // State to track if animation should play
    const [showItem1, setShowItem1] = useState(false)
    const [showItem2, setShowItem2] = useState(false)
    const [showItem3, setShowItem3] = useState(false)

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Item 1: Trigger immediately (0.01)
            if (latest > 0.01) setShowItem1(true)
            else setShowItem1(false)

            // Item 2: Trigger later (0.35) to prevent overlap with Item 1
            if (latest > 0.35) setShowItem2(true)
            else setShowItem2(false)

            // Item 3: Trigger later (0.65)
            if (latest > 0.65) setShowItem3(true)
            else setShowItem3(false)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    // Specific Variant for Item 1 (Immediate)
    const variantsItem1 = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1.0, ease: "easeOut" }
        }
    }

    // Specific Variant for Item 2/3 (Default)
    const variantsDefault = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1.0, ease: "easeOut" } // Standard speed for 2/3
        }
    }

    return (
        <div ref={containerRef} id="about-track" style={{ height: '200vh', position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                <Section id="about">
                    <div className="about-content-wrapper">

                        {/* Left Column: Title & Image (Static) */}
                        <div className="about-visual">
                            <div className="about-header-group">
                                <SectionHeader
                                    title="About Me"
                                    subtitle="사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다."
                                />
                            </div>

                            <div className="profile-image-wrapper">
                                <img src={profileImg} alt="Profile" />
                            </div>
                        </div>

                        {/* Right Column: Q&A (Animated) */}
                        <div className="about-content">
                            <div className="qa-list">
                                {aboutQnA.map((item, index) => {
                                    // Determine animation state
                                    let shouldShow = false;
                                    let itemVariants = variantsDefault; // Default variants

                                    if (index === 0) {
                                        shouldShow = showItem1;
                                        itemVariants = variantsItem1;
                                    }
                                    if (index === 1) shouldShow = showItem2;
                                    if (index === 2) shouldShow = showItem3;

                                    return (
                                        <motion.div
                                            key={item.id}
                                            className="qa-item"
                                            initial="hidden"
                                            animate={shouldShow ? "visible" : "hidden"}
                                            variants={itemVariants}
                                        >
                                            <h3 className="qa-question">{item.question}</h3>
                                            <p className="qa-answer">{item.answer}</p>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </Section>
            </div>
        </div>
    )
}

export default About
