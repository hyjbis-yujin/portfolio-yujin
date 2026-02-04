import React from 'react'
import { Check } from 'lucide-react'

const ProjectModalContent = ({ project }) => {
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
            <div className="modal-meta-grid">
                <span className="meta-label">메인</span>
                <span className="meta-value">{project.meta?.main || '풀반응형'}</span>

                <span className="meta-label">규모</span>
                <span className="meta-value">{project.meta?.scale || '토이 프로젝트'}</span>

                <span className="meta-label">참여도</span>
                <span className="meta-value">{project.meta?.contribution || '디자인 100% / 프론트 100%'}</span>

                <span className="meta-label">스택</span>
                <span className="meta-value">{project.meta?.stack || 'HTML, CSS3, Javascript'}</span>
            </div>

            <div className="meta-wrapper">
            </div>

            {/* Highlights */}
            <div className="modal-highlights">
                <h3 className="highlight-title">작업 기여도</h3>
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
