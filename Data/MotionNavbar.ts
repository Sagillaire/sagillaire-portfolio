export const menuVariants = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 40,
        transition: {
            type: "tween",
            duration: 0.5
        }
    }
}
export const navLinksVariants = {
    hidden: {
        display: "none",
        opacity: 0
    },
    visible: {
        opacity: 1,
        y: -30,
        transition: {
            delay: 0.7
        }
    }
}