export const fadeOut = {
  initial: {
    opacity: 0,
  },
  animate: (delay: number) => ({
    opacity: 1,
    transition: {
      delay: delay,
      duration: 1,
      ease: [0.9, 0.1, 0.3, 0.96],
    },
  }),
};

export const fadeOutY = {
  initial: (distance: number) => ({
    opacity: 0,
    y: distance,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.9, 0.1, 0.3, 0.96],
    },
  },
};

export const fadeOutX = {
  initial: (distance: number) => ({
    x: distance,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      easy: [0.6, 0.01, 0.85, 0.95],
      duration: 1.4,
    },
  },
};

export const fadeOutOriginX = {
  initial: {
    scaleX: 0,
    originX: 0,
    opacity: 0,
  },
  animate: (delay: number) => ({
    scaleX: 1,
    originX: [0, 0, 0, 0, 0, 0, 0.5],
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: [0.9, 0.1, 0.3, 0.96],
    },
  }),
};

export const oddEvenTranslate = {
  initial: (index: number) => ({
    opacity: 0,
    translateY: index % 2 ? 100 : -100,
  }),
  animate: (index: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.8,
      delay: 4 + index * 0.3,
    },
  }),
};

export const widthScale = {
  initial: {
    width: 0,
  },
  animate: {
    width: 100 + "%",
    transition: {
      easy: [0.6, 0.01, 0.85, 0.95],
      duration: 1,
    },
  },
};

export const projectsAnimation = {
  projText: {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (duration: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.5, 0.5, 0.9],
        delay: 3.2 + duration * 0.5,
      },
    }),
  },
};

export const aboutAnimations = {
  sectionText: {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 1 + delay * 0.3,
        duration: 0.7,
        ease: [0.9, 0.1, 0.3, 0.96],
      },
    }),
  },
};
