import React from 'react'
import { Check } from 'lucide-react'
import MetaGrid from '@/components/ui/MetaGrid'

const ProjectModalContent = ({ project }) => {
    // Localized meta items
    const metaItems = [
        { label: '분류', value: project.meta?.main },
        { label: '기여도', value: project.meta?.contribution },
        { label: '규모', value: project.meta?.scale },
        { label: '기술 스택', value: project.meta?.stack },
        { label: '프레임워크', value: project.meta?.framework },
        { label: '라이브러리', value: project.meta?.library }
    ].filter(item => item.value && String(item.value).trim() !== '')

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


            {/* Highlights */}
            <div className="modal-highlights">
                <h3 className="highlight-title">주요 기능</h3>

                <div className="highlight-list">
                    {(project.highlights || []).slice(0, 4).map((text, idx) => (
                        <div key={idx} className="highlight-item">
                            <Check strokeWidth={3} />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProjectModalContent
