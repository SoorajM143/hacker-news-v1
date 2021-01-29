/*
 Function to delay scrolling while next batch of data os fetched from the API
*/

export const debounceScroll = (func, wait, immediate, args) => {
  let timeout;

  return () => {
    const context = this;
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
