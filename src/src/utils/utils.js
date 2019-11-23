export const percentage = (portion, total) => {
  const per = Math.floor((portion / total) * 100);
  return isNaN(per) ? 0 : per;
};

/**
 * Get a random integer between `min` and `max`.
 */
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
