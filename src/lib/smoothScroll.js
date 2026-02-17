// Custom Smooth Scroll Logic - Simple Wrapper for Native Scroll
export const smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId)
    if (!targetElement) return

    targetElement.scrollIntoView({ behavior: 'smooth' })
}
