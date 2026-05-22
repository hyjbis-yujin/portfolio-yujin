import React, { useState, useEffect, useRef } from 'react'
import { skills } from '@/data/skills'
import SkillIcon from '@/components/common/SkillIcon'

const ToolsPanel = ({ onScrollTo }) => {
    const featuredSkills = skills.filter(skill => skill.featured)
    const [cols, setCols] = useState(5)
    const gridRef = useRef(null)

    useEffect(() => {
        const handleResize = (entries) => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                if (width === 0) continue;
                
                // Average tool-box width is ~45px, gap is 8px. Total ~53px per column.
                // Divide the actual container width by 53px to find how many fit perfectly
                let calculatedCols = Math.floor((width + 8) / 53);
                
                // Clamp between 3 and 8 columns to keep layout sane
                // On desktop viewports > 1250px, cap at 5. 
                // Between 1024px and 1250px, cap at 4 to reduce icons and increase more-box count.
                let maxCols = 8;
                if (window.innerWidth > 1250) {
                    maxCols = 5;
                } else if (window.innerWidth >= 1024) {
                    maxCols = 4;
                }
                
                calculatedCols = Math.max(3, Math.min(calculatedCols, maxCols));
                
                setCols(calculatedCols);
            }
        }

        const observer = new ResizeObserver(handleResize);
        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => observer.disconnect();
    }, [])

    // Total slots available in 2 rows
    const gridCapacity = cols * 2
    
    let visibleSkills
    let remainingCount = 0

    if (featuredSkills.length <= gridCapacity) {
        // If all skills fit perfectly, show all of them without a more-box
        visibleSkills = featuredSkills
    } else {
        // If they exceed capacity, reserve the last slot for the more-box
        const MAX_VISIBLE = gridCapacity - 1
        visibleSkills = featuredSkills.slice(0, MAX_VISIBLE)
        remainingCount = featuredSkills.length - visibleSkills.length
    }

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
            <div 
                className="tools-grid"
                ref={gridRef}
                style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
            >
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
