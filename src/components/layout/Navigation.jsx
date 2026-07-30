import React from 'react'
import { toast } from 'sonner'
import { smoothScrollTo } from '@/lib/smoothScroll'

const Navigation = () => {

    const handleScrollToHome = () => {
        smoothScrollTo('#home')
    }

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('yujin@example.com')
            .then(() => toast.success('Email copied to clipboard!'))
            .catch(() => toast.error('Failed to copy email'))
    }

    return (
        <aside className="left-quick-btn">
            <button
                onClick={handleScrollToHome}
                className="quick-btn btn-home"
                aria-label="Go to Home"
            />

            <button
                onClick={handleEmailCopy}
                className="quick-btn btn-mail"
                aria-label="Copy Email"
            />

            <a
                href="https://github.com/hyjbis-yujin"
                target="_blank"
                rel="noreferrer"
                className="quick-btn btn-github"
                aria-label="Go to GitHub"
            />
        </aside>
    )
}

export default Navigation
