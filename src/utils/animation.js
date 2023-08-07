export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const silderVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
    scale: 1.2,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
    scale: 1.2,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      ease: "easeInOut",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 1,
  },
};

export const thumbVariants = {
  hidden: {
    width: "0%",
    opacity: 0,
    skewX: 50,
  },
  show: {
    width: "100%",
    opacity: 1,
    skewX: 0,
    transition: {
      duration: 0.2,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  exit: {
    width: "0%",
    opacity: 0,
    skewX: 50,
  },
};

export const countAnim = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

export const cartAnim = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

export const githubAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: -50, left: 10 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.1, type: "spring" },
};

export const linkedinAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: -25, left: -35 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.2, type: "spring" },
};

export const twitterAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: 25, left: -45 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.3, type: "spring" },
};

export const sidebarAnim = {
  hidden: { opacity: 0, x: "-100%" },
  show: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.3, stiffness: 100 },
  },
  exit: { x: "-100%", opacity: 0, delay: 0.2 },
};
