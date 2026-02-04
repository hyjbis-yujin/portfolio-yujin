import React from 'react'
import { skills } from '@/data/skills'
import SkillIcon from '@/components/common/SkillIcon'

const ToolsPanel = ({ onScrollTo }) => {
    const featuredSkills = skills.filter(skill => skill.featured)

    const MAX_VISIBLE = 9
    const visibleSkills = featuredSkills.slice(0, MAX_VISIBLE)
    const remainingCount = featuredSkills.length - visibleSkills.length

    return (
        <div className="home-panel tools-panel">
            <div className="panel-header">
                <span className="panel-title">Tools I use</span>
                <button
                    className="shortcut-btn icon-shortcut"
                    aria-label="Go to Skill"
                    onClick={() => onScrollTo('skill')}
                />
            </div>
            <div className="tools-grid">
                {visibleSkills.map((skill, idx) => (
                    <div key={idx} className="tool-box">
                        <SkillIcon
                            icon={skill.icon}
                            hoverIcon={skill.hoverIcon}
                            alt={skill.label}
                            size={40}
                        />
                    </div>
                ))}
                {remainingCount > 0 && (
                    <div className="tool-box more-box">+{remainingCount}</div>
                )}
            </div>
        </div>
    )
}

export default ToolsPanel
