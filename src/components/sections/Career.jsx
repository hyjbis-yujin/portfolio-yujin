import React from 'react'
import Section from '@/components/common/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import CareerItem from '@/components/ui/CareerItem'

const Career = () => {
  return (
    <Section id="career">
      <div className="career-container">

        {/* Section Header */}
        <SectionHeader title="Career" />

        <div className="career-grid">
          {/* Column 1: Education */}
          <div className="info-card-container">
            <h3 className="container-title">Education</h3>
            <div className="info-items">
              <CareerItem
                org="패스트 캠퍼스 (Fast Campus)"
                desc="프론트엔드 개발 부트캠프 수료"
                badges={["2021.01 - 2021.05", "Completed"]}
              />
              <CareerItem
                org="대학교 (컴퓨터공학)"
                desc="컴퓨터공학 학사 졸업"
                badges={["2016.03 - 2021.02", "Graduation"]}
              />
            </div>
          </div>

          {/* Column 2: Work Experience */}
          <div className="info-card-container">
            <h3 className="container-title">Work Experience</h3>
            <div className="info-items">
              <CareerItem
                org="테크 솔루션즈"
                desc="프론트엔드 개발자 • 사내 대시보드 구축"
                badges={["2023.03 - Present", "Frontend"]}
              />
              <CareerItem
                org="크리에이티브 에이전시"
                desc="웹 퍼블리셔 • 반응형 웹사이트 제작"
                badges={["2021.06 - 2023.02", "Publisher"]}
              />
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Career
