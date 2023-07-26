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
