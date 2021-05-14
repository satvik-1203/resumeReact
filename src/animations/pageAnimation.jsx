export const pageAni = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const titleAnim = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const aboutImg = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 5,
    },
  },
};
export const descriptionAbout = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

export const pagesContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

export const pages = {
  initial: {
    x: "-130%",
    skew: "45deg",
  },
  animate: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 5,
    },
  },
};

export const lineAnim = {
  initial: {
    width: "0",
  },
  animate: {
    width: "100%",
    transition: {
      duration: 3,
    },
  },
};

export const workImg = {
  initial: {
    scale: 0.9,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

export const faqQuestionAni = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
