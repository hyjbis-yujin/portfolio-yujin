import React from 'react'
import { motion } from 'framer-motion'

export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

export const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const ScrollReveal = ({
    children,
    variants = fadeUp,
    delay = 0,
    className = "",
    width = "100%", // Fit content or full width
    threshold = 0.2
}) => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: threshold }}
            transition={{ delay: delay }}
            variants={variants}
            style={{ width }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollReveal
