import React from 'react'

const CareerItem = ({ org, desc, badges = [] }) => {
    return (
        <div className="info-item">
            <span className="item-org">{org}</span>
            <p className="item-desc">{desc}</p>
            <div className="item-badges">
                {badges.map((badge, idx) => (
                    <span key={idx} className="badge-pill">{badge}</span>
                ))}
            </div>
        </div>
    )
}

export default CareerItem
