import React from 'react'
import Navigation from './Navigation'
import SectionNav from './SectionNav'
import { Toaster } from 'sonner'

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Navigation />
            <SectionNav />
            <main className="main-content">
                {children}
            </main>
        </div>
    )
}

export default MainLayout
