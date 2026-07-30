import React from 'react'

const AboutPanel = ({ onScrollTo }) => {
    return (
        <div className="home-panel about-panel">
            <div className="panel-header">
                <span className="panel-title">About me</span>
                <button
                    className="shortcut-btn icon-shortcut"
                    aria-label="Go to About"
                    onClick={() => onScrollTo('about')}
                />
            </div>
            <div className="tags-container">
                <span className="tag"># UI/UX</span>
                <span className="tag"># Responsive</span>
                <span className="tag"># Usability</span>
                <span className="tag"># Detail</span>
                <span className="tag"># Growth</span>
                <span className="tag"># UserFirst</span>
            </div>
        </div>
    )
}

export default AboutPanel
