import React from 'react'
import Section from '@/components/common/Section'

const Career = () => {
  return (
    <Section id="career">
      <div className="career-container">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="section-title">Career</h2>

        </div>

        <div className="career-grid">
          {/* Column 1: Education */}
          <div className="info-card-container">
            <h3 className="container-title">Education</h3>
            <div className="info-items">
              <div className="info-item">
                <span className="item-org">패스트 캠퍼스 (Fast Campus)</span>
                <p className="item-desc">프론트엔드 개발 부트캠프 수료</p>
                <div className="item-badges">
                  <span className="badge-pill">2021.01 - 2021.05</span>
                  <span className="badge-pill">수료</span>
                </div>
              </div>
              <div className="info-item">
                <span className="item-org">대학교 (컴퓨터공학)</span>
                <p className="item-desc">컴퓨터공학 학사 졸업</p>
                <div className="item-badges">
                  <span className="badge-pill">2016.03 - 2021.02</span>
                  <span className="badge-pill">졸업</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Work Experience */}
          <div className="info-card-container">
            <h3 className="container-title">Work Experience</h3>
            <div className="info-items">
              <div className="info-item">
                <span className="item-org">테크 솔루션즈</span>
                <p className="item-desc">프론트엔드 개발자 &bull; 사내 대시보드 구축</p>
                <div className="item-badges">
                  <span className="badge-pill">2023.03 - Present</span>
                  <span className="badge-pill">Frontend</span>
                </div>
              </div>
              <div className="info-item">
                <span className="item-org">크리에이티브 에이전시</span>
                <p className="item-desc">웹 퍼블리셔 &bull; 반응형 웹사이트 제작</p>
                <div className="item-badges">
                  <span className="badge-pill">2021.06 - 2023.02</span>
                  <span className="badge-pill">Publisher</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Career
