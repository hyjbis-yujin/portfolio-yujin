import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { User, Code, Zap } from 'lucide-react'
import Section from '@/components/common/Section'

const About = () => {
    return (
        <Section id="about">
            <div className="about-container">

                {/* Header */}
                <div className="text-center">
                    <h2 className="section-title">About me</h2>
                    <p className="about-desc">
                        사용자에게 끊김 없는 경험을 제공하고, 디자인 의도를 완벽하게 구현하는 구조적인 코드를 지향합니다.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid-3">
                    {/* Card 1 */}
                    <Card style={{ textAlign: 'center' }}>
                        <CardHeader className="flex-col items-center gap-4">
                            <div className="icon-box">
                                <User size={32} />
                            </div>
                            <CardTitle>변화에 적응하며 성장하는 개발자</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                새로운 기술 트렌드를 학습하고 적용하여<br />
                                최적의 솔루션을 제공하기 위해 노력합니다.<br />
                                팀원들과 지식을 공유하며 함께 성장하는 것을 즐깁니다.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card style={{ textAlign: 'center' }}>
                        <CardHeader className="flex-col items-center gap-4">
                            <div className="icon-box">
                                <Code size={32} />
                            </div>
                            <CardTitle>유지보수가 용이한 견고한 구조</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                시멘틱 마크업과 재사용 가능한 컴포넌트 설계로<br />
                                유지보수가 용이한 코드를 작성합니다.<br />
                                확장성과 웹 표준을 준수하는 개발을 지향합니다.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card style={{ textAlign: 'center' }}>
                        <CardHeader className="flex-col items-center gap-4">
                            <div className="icon-box">
                                <Zap size={32} />
                            </div>
                            <CardTitle>사용자 경험을 고려한 디테일</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                디자인 시안을 픽셀 단위로 정밀하게 구현하며<br />
                                자연스러운 인터랙션을 더해 완성도를 높입니다.<br />
                                사용자 경험(UX)을 최우선으로 고려하여 개발합니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </Section>
    )
}

export default About
