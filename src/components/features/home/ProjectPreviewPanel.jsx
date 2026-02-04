import React from 'react'
import { projects } from '@/data/projects'

const ProjectPreviewPanel = ({ onOpenProject, onScrollTo }) => {
    return (
        <div className="home-panel project-panel">
            <div className="panel-header project-header">
                <span className="panel-title">Project</span>
                <span className="project-desc">기획부터 개발 및 배포까지 전 과정을 주도적으로 수행하며 도전을 해결한 프로젝트</span>
            </div>
            <div className="project-stack">
                {projects.slice(0, 3).map((project, index) => (
                    <div
                        key={project.id}
                        className="stack-card project-preview-card"
                        onClick={() => onOpenProject(project)}
                        style={{
                            '--project-bg': `url(${project.images[0]})`
                        }}
                    >
                        {/* Hover Overlay Title */}
                        <div className="card-overlay">
                            <span className="preview-title">{project.title}</span>
                        </div>
                    </div>
                ))}

                {/* "MORE +" Card */}
                <div
                    className="stack-card glass-overlay"
                    onClick={() => onScrollTo('project')}
                >
                    <span>MORE +</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectPreviewPanel
