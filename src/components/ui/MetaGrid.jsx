import React from 'react'

const MetaGrid = ({ items }) => {
    return (
        <div className="modal-meta-grid">
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    <span className="meta-label">{item.label}</span>
                    <span className="meta-value">{item.value}</span>
                </React.Fragment>
            ))}
        </div>
    )
}

export default MetaGrid
