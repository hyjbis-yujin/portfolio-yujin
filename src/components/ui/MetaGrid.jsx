import React from 'react'

const MetaGrid = ({ items, parentId = 'meta' }) => {
    return (
        <div className="modal-meta-grid" role="group" aria-label="Project Metadata">
            {items.map((item, idx) => (
                <div key={`${parentId}-${item.label}-${idx}`} className="meta-item">
                    <span className="meta-label">{item.label}</span>
                    <span className="meta-value">{item.value}</span>
                </div>
            ))}
        </div>
    )
}

export default MetaGrid
