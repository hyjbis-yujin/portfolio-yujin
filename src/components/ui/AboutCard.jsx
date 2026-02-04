import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const AboutCard = ({ icon: Icon, title, children }) => {
    return (
        <Card className="about-card">
            <CardHeader className="flex-col items-center gap-4">
                <div className="icon-box">
                    <Icon size={32} />
                </div>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default AboutCard
