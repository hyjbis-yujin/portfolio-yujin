import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { gridStagger, gridItemFade } from '@/styles/animations'
import { Code2, Monitor, PenTool } from 'lucide-react'
import { cn } from '@/lib/utils'
import { skills } from '@/data/skills'
import SkillIcon from '@/components/common/SkillIcon'
import Section from '@/components/common/Section'

// Category Config (Labels and Icons)
const CATEGORY_CONFIG = {
    language: { label: 'Language', icon: <Code2 size={16} /> },
    front: { label: 'Front', icon: <Monitor size={16} /> },
    tool: { label: 'Tool', icon: <PenTool size={16} /> }
}

import { useSkillState } from '@/hooks/useSkillState'

const Skill = () => {
    const { activeTab, setActiveTab, filteredSkills, tabs } = useSkillState()

    // Animation Variants
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
        hidden: { opacity: 0, y: 20, scale: 1 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "tween", duration: 0.4, ease: "easeOut" }
        }
    }

    return (
        <Section id="skill">
            <div className="skill-container">
                <div className="skill-header">
                    <h2 className="section-title">Skill</h2>
                    <div className="skill-tabs" role="tablist">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn("tab-btn", tab.isActive && "active")}
                                role="tab"
                                aria-selected={tab.isActive}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="skill-list-wrap">
                    <motion.div
                        className="skill-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        key={activeTab}
                    >
                        {filteredSkills.map((item) => (
                            <motion.div
                                key={item.id}
                                className="skill-card"
                                variants={cardVariants}
                                aria-label={`${item.label}: ${item.desc}`}
                            >
                                <div className="skill-icon-box">
                                    <SkillIcon
                                        icon={item.icon}
                                        hoverIcon={item.hoverIcon}
                                        alt={item.key}
                                        size={24}
                                    />
                                </div>
                                <div className="skill-content">
                                    <h3 className="skill-name">{item.key}</h3>
                                    <p className="skill-text">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}

export default Skill
