export const PREMIUM_EASE = [0.25, 0.1, 0.25, 1.0]; // Cubic-bezier for weighted, luxury feel.
export const TEXT_EASE = [0.16, 1, 0.3, 1]; // Specifically tuned for text focus.


export const cinematicReveal = {
    hidden: {
        opacity: 0,
        y: 40, // Start slightly lower
        filter: "blur(8px)",
        scale: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 0.6,
            ease: PREMIUM_EASE
        }
    }
};


export const staggerTextContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

export const kineticText = {
    hidden: {
        opacity: 0,
        y: 20,
        rotateX: 30, // 3D rotation hint
        filter: "blur(8px)",
        letterSpacing: "0.1em" // Start wide
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        letterSpacing: "normal", // Resolve to exact design
        transition: {
            duration: 0.7,
            ease: TEXT_EASE
        }
    }
};


export const modalApproach = {
    hidden: {
        opacity: 0,
        scale: 1.05, // Start slightly zoomed in
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: PREMIUM_EASE
        }
    },
    exit: {
        opacity: 0,
        scale: 0.98,
        filter: "blur(5px)",
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    }
};


export const gridStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

export const gridItemFade = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        filter: "blur(4px)"
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: PREMIUM_EASE
        }
    }
};
