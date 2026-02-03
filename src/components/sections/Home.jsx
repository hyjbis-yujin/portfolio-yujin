import { skills } from '@/data/skills'
import { projects } from '@/data/projects'
import { smoothScrollTo } from '@/lib/smoothScroll'
import SkillIcon from '@/components/common/SkillIcon'
import Section from '@/components/common/Section'

const Home = ({ onOpenProject }) => {
    // 1. Filter Featured Skills
    const featuredSkills = skills.filter(skill => skill.featured)

    // 2. Slice for Display (Show max 9 items)
    const MAX_VISIBLE = 9
    const visibleSkills = featuredSkills.slice(0, MAX_VISIBLE)
    const remainingCount = featuredSkills.length - visibleSkills.length

    // Scroll Handler
    const handleScrollTo = (id) => {
        smoothScrollTo(`#${id}`)
    }

    return (
        <Section id="home">
            <div className="home-container">
                {/* Center: Hero Grid */}
                <div className="home-grid">

                    {/* Title Area */}
                    <div className="home-title-area">
                        <h1>
                            프론트-엔드<br />
                            <span className="highlight">포트폴리오</span>
                        </h1>
                    </div>

                    {/* Panels Area */}
                    <div className="home-panels-area">

                        {/* Panel 01: Profile */}
                        <div className="home-panel profile-panel">
                            <div className="profile-info">
                                <span className="profile-name">Han Yu Jin</span>
                                <span className="profile-email">frontend-dev@email.com</span>
                            </div>
                            <div className="profile-actions">
                                <button className="panel-btn copy-email">
                                    <span className="btn-icon btn-arrow-icon"></span>
                                    Copy Email
                                </button>
                                <button className="panel-btn placeholder-btn">
                                    <span className="btn-icon btn-arrow-icon"></span>
                                    Resume
                                </button>
                            </div>
                        </div>

                        {/* Panel 02: Tools */}
                        <div className="home-panel tools-panel">
                            <div className="panel-header">
                                <span className="panel-title">Tools I use</span>
                                <button
                                    className="shortcut-btn icon-shortcut"
                                    aria-label="Go to Skill"
                                    onClick={() => handleScrollTo('skill')}
                                />
                            </div>
                            <div className="tools-grid">
                                {visibleSkills.map((skill, idx) => (
                                    <div key={idx} className="tool-box">
                                        <SkillIcon
                                            icon={skill.icon}
                                            hoverIcon={skill.hoverIcon}
                                            alt={skill.label}
                                            size={40} // Default size
                                        />
                                    </div>
                                ))}
                                {remainingCount > 0 && (
                                    <div className="tool-box more-box">+{remainingCount}</div>
                                )}
                            </div>
                        </div>

                        {/* Panel 03: About (Tags) */}
                        <div className="home-panel about-panel">
                            <div className="panel-header">
                                <span className="panel-title">About me</span>
                                <button
                                    className="shortcut-btn icon-shortcut"
                                    aria-label="Go to About"
                                    onClick={() => handleScrollTo('about')}
                                />
                            </div>
                            <div className="tags-container">
                                <span className="tag"># Reliable</span>
                                <span className="tag"># Creative</span>
                                <span className="tag"># Teamwork</span>
                                <span className="tag"># Growth</span>
                                <span className="tag"># Solution</span>
                                <span className="tag"># Detail</span>
                            </div>
                        </div>

                        {/* Panel 04: Project */}
                        <div className="home-panel project-panel">
                            <div className="panel-header project-header">
                                <span className="panel-title">Project</span>
                                <span className="project-desc">기획부터 개발 및 배포까지 전 과정을 주도적으로 수행하며 도전을 해결한 프로젝트</span>
                            </div>
                            <div className="project-stack">
                                {/* Map First 3 Projects */}
                                {projects.slice(0, 3).map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="stack-card project-preview-card"
                                        onClick={() => onOpenProject(project)}
                                        style={{
                                            backgroundImage: `url(${project.images[0]})`,
                                            zIndex: index + 1,
                                            left: `calc((100% - 217px) / 3 * ${index})`
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
                                    onClick={() => handleScrollTo('project')}
                                    style={{
                                        cursor: 'pointer',
                                        zIndex: 4,
                                        left: `calc((100% - 217px) / 3 * 3)`
                                    }}
                                >
                                    <span>MORE +</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Home
