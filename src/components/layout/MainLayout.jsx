import React from 'react'
import Navigation from './Navigation'
import SectionNav from './SectionNav'
import { Toaster } from 'sonner'

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            {/* Left Navigation */}
            <Navigation />

            {/* Right Section Navigation */}
            <SectionNav />

            {/* Main Content Area */}
            <main className="main-content">
                {children}
            </main>

            {/* Background/Noise overlay could go here if design needed it */}
            <Toaster position="bottom-right" theme="dark" />
        </div>
    )
}

export default MainLayout
