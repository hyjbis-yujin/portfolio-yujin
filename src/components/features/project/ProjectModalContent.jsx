import React from 'react'
import { Check } from 'lucide-react'
import MetaGrid from '@/components/ui/MetaGrid'

const ProjectModalContent = ({ project }) => {
    // Localized meta items
    const metaItems = [
        { label: 'Type', value: project.meta?.main || 'Fully Responsive' },
        { label: 'Scale', value: project.meta?.scale || 'Toy Project' },
        { label: 'Contribution', value: project.meta?.contribution || 'Design 100% / Frontend 100%' },
        { label: 'Stack', value: project.meta?.stack || 'HTML, CSS3, Javascript' }
    ]

    return (
        <div className="modal-right-section">

            {/* Header */}
            <div className="modal-header-group">
                <h2 id="modal-title" className="modal-title">{project.title}</h2>

                <div className="modal-actions">
                    <a
                        href={project.links?.git || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-action"
                    >
                        Git
                    </a>
                    <a
                        href={project.links?.demo || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-action"
                    >
                        Demo
                    </a>
                </div>
            </div>

            {/* Meta Grid */}
            <MetaGrid items={metaItems} />

            <div className="meta-wrapper">
            </div>

            {/* Highlights */}
            <div className="modal-highlights">
                <h3 className="highlight-title">Contribution</h3>
                <div className="highlight-list">
                    {(project.highlights || []).map((text, idx) => (
                        <div key={idx} className="highlight-item">
                            <Check />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProjectModalContent
