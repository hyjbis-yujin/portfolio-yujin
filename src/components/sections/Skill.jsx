import React, { useState, useMemo } from 'react'
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

const Skill = () => {
    const [activeTab, setActiveTab] = useState('language')

    // Filter skills based on active tab
    const filteredSkills = useMemo(() => {
        return skills.filter(skill => skill.category === activeTab)
    }, [activeTab])

    return (
        <Section id="skill">
            <div className="skill-container">
                {/* Fixed Header Area */}
                <div className="skill-header">
                    <h2 className="section-title">Skill</h2>

                    {/* Tabs */}
                    <div className="skill-tabs">
                        {Object.keys(CATEGORY_CONFIG).map(catKey => (
                            <button
                                key={catKey}
                                onClick={() => setActiveTab(catKey)}
                                className={cn(
                                    "tab-btn",
                                    activeTab === catKey && "active"
                                )}
                            >
                                {CATEGORY_CONFIG[catKey].label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="skill-list-wrap">
                    <div className="skill-grid">
                        {filteredSkills.map((item) => (
                            <div key={item.id} className="skill-card">
                                {/* Left: Icon Slot */}
                                <div className="skill-icon-box">
                                    <SkillIcon
                                        icon={item.icon}
                                        hoverIcon={item.hoverIcon}
                                        alt={item.key}
                                        size={24} // Adjusted size for skill card
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="skill-content">
                                    <h3 className="skill-name">{item.key}</h3>
                                    <p className="skill-text">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    )
}

export default Skill
