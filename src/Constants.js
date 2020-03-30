export const TOASTS = "Toasts";

export const PAGE_FADE_ANIMATION = {
  timeout: 500,
  classNames: {},
  onEnter(elem) {
    elem.classList.add("opacity-0", "absolute", "left-0", "top-0");
  },
  onEntering(elem) {
    elem.classList.add("transition", "ease-in-out", "duration-500");
    elem.classList.remove("opacity-0");
  },
  onEntered(elem) {
    elem.classList.remove("absolute", "left-0", "top-0");
  },
  onExit(elem) {
    elem.classList.add("opacity-0");
  },
  onExited(elem) {
    elem.classList.add("hidden");
  }
};

export const NOTIFICATION_FADE_ANIMATION = {
  timeout: 1000,
  classNames: {},
  onEnter(elem) {
    elem.classList.add("opacity-0", "scale-0");
  },
  onEntering(elem) {
    elem.classList.add("ease-out", "duration-300");
    elem.classList.remove("opacity-0", "scale-0");
  },
  onExit(elem) {
    elem.classList.add("ease-in", "duration-1000");
  },
  onExiting(elem) {
    elem.classList.add("opacity-0", "scale-0");
  }
};
