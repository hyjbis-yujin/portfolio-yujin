// Project section specific animations
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

export const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    }
}

// Project Modal specific animations
export const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } }
}

export const modalVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { scale: 0.95, opacity: 0, y: 20, transition: { duration: 0.2 } }
}
