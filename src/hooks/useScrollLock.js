import { useEffect } from 'react'

export const useScrollLock = (isLocked) => {
    useEffect(() => {
        if (!isLocked) return

        const body = document.body
        const html = document.documentElement

        const prevBodyOverflow = body.style.overflow
        const prevHtmlOverflow = html.style.overflow

        body.style.overflow = 'hidden'
        html.style.overflow = 'hidden'

        return () => {
            body.style.overflow = prevBodyOverflow
            html.style.overflow = prevHtmlOverflow
        }
    }, [isLocked])
}
