import React from 'react'

const SkillIcon = ({ icon, hoverIcon, alt, className }) => {
    return (
        <div className={`skill-icon-wrapper ${className || ''}`}>
            {/* Default Icon */}
            <img
                src={icon}
                alt={alt}
                className="icon-default"
            />
            {/* Hover Icon */}
            <img
                src={hoverIcon}
                alt={`${alt} hover`}
                className="icon-hover"
            />
        </div>
    )
}

export default SkillIcon
