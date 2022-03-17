/**
 * Returns the linear function for y = ax + b
 * @param b base value
 * @param y function value at point x
 * @param x point on the line
 */
export default (b: number, y: number, x: number) => {
  return (level) => {
    return ((y - b) / x) * level + b;
  };
};
