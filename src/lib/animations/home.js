// Home section specific animations
export const layoutSpring = {
    type: "spring",
    stiffness: 70,
    damping: 20
}

export const titleVariants = {
    initial: {
        opacity: 0,
        y: 0,
        scale: 0.98
    },
    expanded: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20
        }
    }
}

export const PANEL_DURATION = 0.35;
export const PANEL_EASE = "easeOut";
export const STAGGER_DELAY = 0.35;
export const BASE_DELAY = 0.4;

export const profileVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: BASE_DELAY
        }
    }
}

export const toolsVariant = {
    hidden: { y: -90, opacity: 0, zIndex: 3 },
    visible: {
        y: 0,
        opacity: 1,
        zIndex: 3,
        transition: {
            duration: PANEL_DURATION,
            ease: PANEL_EASE,
            delay: BASE_DELAY + STAGGER_DELAY,
            opacity: { duration: 0.1, delay: BASE_DELAY + STAGGER_DELAY }
        }
    }
}

export const aboutVariant = {
    hidden: { x: -90, opacity: 0, zIndex: 2 },
    visible: {
        x: 0,
        opacity: 1,
        zIndex: 2,
        transition: {
            duration: PANEL_DURATION,
            ease: PANEL_EASE,
            delay: BASE_DELAY + (STAGGER_DELAY * 2),
            opacity: { duration: 0.1, delay: BASE_DELAY + (STAGGER_DELAY * 2) }
        }
    }
}

export const projectVariant = {
    hidden: { y: -90, opacity: 0, zIndex: 1 },
    visible: {
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: {
            duration: PANEL_DURATION,
            ease: PANEL_EASE,
            delay: BASE_DELAY + (STAGGER_DELAY * 3),
            opacity: { duration: 0.1, delay: BASE_DELAY + (STAGGER_DELAY * 3) }
        }
    }
}
