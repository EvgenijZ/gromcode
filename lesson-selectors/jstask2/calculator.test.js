import getSum, { getSquaredArray, getOddNumbers } from './calculator'

it('should squared numbers in array', () => {
    let result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

it('should odd numbers in array', () => {
    let result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5]);
})

it('should sum of the numbers', () => {
    let result = getSum(1, 2);
    expect(result).toEqual(3);
});