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
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 1,
      ease: [0.9, 0.1, 0.3, 0.96],
    },
  }),
};

export const fadeOutFromX = {
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
      delay: 2.5 + index * 0.3,
    },
  }),
};

export const navBarAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      easy: [0.6, 0.01, 0.85, 0.95],
      duration: 0.5,
      delay: 2.4,
    },
  },
};

export const introAnimation = {
  title: {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        easy: [0.6, 0.01, 0.85, 0.95],
        duration: 1.4,
      },
    },
  },
  subtitle: {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        easy: [0.6, 0.01, 0.85, 0.95],
        duration: 2.2,
        delay: 0.3,
      },
    },
  },
  toProjects: {
    initial: {
      x: 1200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        easy: [0.6, 0.01, 0.85, 0.95],
        duration: 1,
        delay: 3,
      },
    },
  },
  workplace: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        easy: [0.6, 0.01, 0.85, 0.95],
        duration: 1,
        delay: 4,
      },
    },
  },
};

export const projectsAnimation = {
  sectionHeader: {
    initial: {
      width: 0,
    },
    animate: {
      width: 100 + "%",
      transition: {
        easy: [0.6, 0.01, 0.85, 0.95],
        duration: 1,
        delay: 1,
      },
    },
  },
  titleHeader: {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: (delay: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        easy: [0.6, 0.01, 0.85, 0.95],
        duration: 1,
        delay: delay,
      },
    }),
  },

  textAppearance: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        easy: [0.6, 0.01, 0.85, 0.95],
        duration: 0.5,
        delay: 2,
      },
    },
  },
  toProjects: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        easy: [0.6, 0.01, 0.85, 0.95],
        duration: 0.2,
        delay: 2.8,
      },
    },
  },

  project: {
    initial: {
      scaleX: 0,
      originX: 0,
    },
    animate: (index: number) => ({
      scaleX: 1,
      originX: [0, 0, 0, 0, 0, 0, 0.5],
      opacity: 1,
      transition: {
        delay: 3 + index * 0.3,
        duration: 0.6,
        ease: [0.9, 0.1, 0.3, 0.96],
      },
    }),
  },
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
