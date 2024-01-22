export const homeVariants = {
  initialState: {
    opacity: 0,
    clipPath: 'polygon(0 0,100% 0,100% 100%, 0% 100%)'
  },
  animateState: {
    opacity: 1,
    clipPath: 'polygon(0 0,100% 0,100% 100%, 0% 100%)'
  },
  exitState: {
    opacity: 0,
    clipPath: 'polygon(50% 0,50% 0,50% 100%, 50% 100%)'
  }
}

export const homeTransitions = {
  duration: 0.75
}