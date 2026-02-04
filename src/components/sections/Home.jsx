import { smoothScrollTo } from '@/lib/smoothScroll'
import Section from '@/components/common/Section'
import ProfilePanel from '@/components/features/home/ProfilePanel'
import ToolsPanel from '@/components/features/home/ToolsPanel'
import AboutPanel from '@/components/features/home/AboutPanel'
import ProjectPreviewPanel from '@/components/features/home/ProjectPreviewPanel'

const Home = ({ onOpenProject }) => {
    const handleScrollTo = (id) => {
        smoothScrollTo(`#${id}`)
    }

    return (
        <Section id="home">
            <div className="home-container">
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
                        {/* === Profile Panel === */}
                        <ProfilePanel />

                        {/* === Tools Panel === */}
                        <ToolsPanel onScrollTo={handleScrollTo} />

                        {/* === About Panel === */}
                        <AboutPanel onScrollTo={handleScrollTo} />

                        {/* === Project Panel === */}
                        <ProjectPreviewPanel
                            onOpenProject={onOpenProject}
                            onScrollTo={handleScrollTo}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Home
