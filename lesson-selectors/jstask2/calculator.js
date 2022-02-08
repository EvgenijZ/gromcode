export const getSquaredArray = arr => arr.map(item => item * item);
export const getOddNumbers = arr => [...arr].filter(item => item % 2 === 1);
export default (a, b) => a + b;