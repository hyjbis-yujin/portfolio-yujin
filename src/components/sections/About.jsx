import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Section from '@/components/common/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { aboutQnA } from '@/data/about'

const About = () => {
    const containerRef = useRef(null)
    const qaRefs = [useRef(null), useRef(null), useRef(null)]
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const [showItem1, setShowItem1] = useState(false)
    const [showItem2, setShowItem2] = useState(false)
    const [showItem3, setShowItem3] = useState(false)
    const setters = [setShowItem1, setShowItem2, setShowItem3]

    useEffect(() => {
        // Detect touch device: matches the inline script in index.html
        const isTouch = document.documentElement.getAttribute('data-touch') === 'true'

        if (!isTouch) {
            // Desktop: Use scroll-jacking progress (200vh track)
            const unsubscribe = scrollYProgress.on("change", (latest) => {
                if (latest > 0.01) setShowItem1(true)
                else setShowItem1(false)

                if (latest > 0.35) setShowItem2(true)
                else setShowItem2(false)

                if (latest > 0.65) setShowItem3(true)
                else setShowItem3(false)
            })
            return () => unsubscribe()
        } else {
            // Touch device (iPad, mobile): Use IntersectionObserver — show each item when it enters the viewport
            const observers = qaRefs.map((ref, index) => {
                if (!ref.current) return null
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setters[index](true)
                        }
                    },
                    { threshold: 0.2 }
                )
                observer.observe(ref.current)
                return observer
            })
            return () => observers.forEach(obs => obs?.disconnect())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollYProgress])

    const variantsItem1 = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1.0, ease: "easeOut" }
        }
    }

    const variantsDefault = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1.0, ease: "easeOut" }
        }
    }

    return (
        <div ref={containerRef} id="about-track" className="about-track">
            <div className="about-sticky-container">
                <Section id="about">
                    <div className="about-content-wrapper">

                        <div className="about-visual">
                            <div className="about-header-group">
                                <SectionHeader
                                    title="About Me"
                                />
                            </div>

                            <div className="profile-image-wrapper">
                                <img src="/images/ui/profile.png" alt="Profile" />
                            </div>
                        </div>

                        <div className="about-content">
                            <div className="qa-list">
                                {aboutQnA.map((item, index) => {
                                    let shouldShow = false;
                                    let itemVariants = variantsDefault;

                                    if (index === 0) {
                                        shouldShow = showItem1;
                                        itemVariants = variantsItem1;
                                    }
                                    if (index === 1) shouldShow = showItem2;
                                    if (index === 2) shouldShow = showItem3;

                                    return (
                                        <motion.div
                                            key={item.id}
                                            ref={qaRefs[index]}
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
