// Custom Smooth Scroll Logic for "Heavy/Smooth" feel (Anchor-only)
export const smoothScrollTo = (targetId, duration = 1500) => {
    // 1. Check for Reduced Motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targetElement = document.querySelector(targetId)

    if (!targetElement) return

    if (prefersReducedMotion) {
        targetElement.scrollIntoView({ behavior: 'auto' })
        return
    }

    // 2. Setup Animation
    const startPosition = window.pageYOffset
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition
    const distance = targetPosition - startPosition
    let startTime = null

    // Easing Function: EaseInOutQuint (Dramatic Heavy/Smooth)
    // t: current time, b: start, c: change, d: duration
    const easeInOutQuint = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t * t * t + 2) + b;
    };

    // Animation Loop
    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime

        const run = easeInOutQuint(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)

        if (timeElapsed < duration) {
            requestAnimationFrame(animation)
        }
    }

    requestAnimationFrame(animation)
}
