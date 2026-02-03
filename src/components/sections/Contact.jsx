import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Mail, Copy, Check } from 'lucide-react'
import { toast } from 'sonner'
import Section from '@/components/common/Section'

const Contact = () => {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("frontend-dev@email.com")
        toast.success("이메일이 복사되었습니다!", {
            description: "frontend-dev@email.com"
        })
    }

    return (
        <Section id="contact" className="contact-section-overflow">
            {/* Decorative Background Removed */}

            <div className="contact-container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <h2 className="section-title" style={{ fontSize: '40px', marginBottom: 0 }}>
                        감사합니다.
                    </h2>
                    <p style={{ fontSize: '18px', color: '#818181', lineHeight: 1.8, margin: '0 auto', width: 'fit-content', wordBreak: 'keep-all' }}>
                        실제 사용 환경을 고려해 구조와 구현을 단계적으로 정리한 프로젝트들입니다.<br />
                        이러한 경험을 바탕으로 더 안정적인 결과를 만들어가고자 합니다.
                    </p>
                </div>

                <div className="contact-buttons">
                    {/* Email Button */}
                    <button
                        onClick={handleCopyEmail}
                        className="btn-contact email"
                    >
                        <span>E-Mail</span>
                    </button>

                    {/* Github Button */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-contact github"
                    >
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            <footer>
                <div className="footer-container">
                    본 사이트는 개인 포트폴리오 목적으로 제작되었으며, 상업적 용도로 사용하지 않습니다.
                    <br /> Copyright ⓒ YUJIN
                </div>
            </footer>
        </Section>
    )
}

export default Contact
