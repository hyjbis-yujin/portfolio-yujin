import React from 'react'

const AboutCard = ({ icon: Icon, title, children }) => {
    return (
        <div className="about-card">
            <div className="icon-box">
                <Icon size={40} />
            </div>
            <h3 className="card-title">{title}</h3>
            {children}
        </div>
    )
}

export default AboutCard
