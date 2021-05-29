export function debounce(fn, delay = 300, inmediate) {
  let timeout;
  return (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!inmediate) fn.apply(context, args);
    };
    const callNow = inmediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    if (callNow) fn.apply(context, args);
  };
}
