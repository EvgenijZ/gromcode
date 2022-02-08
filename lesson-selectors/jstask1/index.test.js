import { getEvenNumbers } from './index.js';

it('should 17 is 17', () => {
    expect(17).toEqual(17);
});

it('should 18 is not equal to 17', () => {
    expect(18).not.toEqual(17);
});

it('should get even numbers', () => {
    const result = getEvenNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 4]);
});