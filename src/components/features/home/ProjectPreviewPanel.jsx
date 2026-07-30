import React from 'react'
import { projects } from '@/data/projects'

const ProjectPreviewPanel = ({ onOpenProject, onScrollTo }) => {
    return (
        <div className="home-panel project-panel">
            <div className="panel-header project-header">
                <span className="panel-title">Project</span>
                <span className="project-desc">기획부터 디자인까지 직접 완성하며 사용자 경험과 완성도를 함께 고민한 웹 프로젝트</span>
            </div>
            <div className="project-stack">
                {projects.slice(0, 3).map((project) => (
                    <div
                        key={project.id}
                        className="stack-card project-preview-card"
                        onClick={() => onOpenProject(project)}
                        style={{
                            '--project-bg': `url(${project.screenshots?.[0] || project.logo})`
                        }}
                    />
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
