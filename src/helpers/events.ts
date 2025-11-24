const throttle = (callback: Function, delay: number) => {
  let lastCall: number = 0;
  return (...args: any[]) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback.apply(this, args);
    }
  };
};

const debounce = (callback: Function, delay: number) => {
  let timeout: NodeJS.Timeout | string | number | undefined;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

export { throttle, debounce };
