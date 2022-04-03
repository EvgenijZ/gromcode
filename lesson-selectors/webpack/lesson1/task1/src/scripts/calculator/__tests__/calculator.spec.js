import { sum, mult } from '../calculator.js';

it('should return sum 3', function () {
    const result = 3;
    expect(sum(1, 2)).toEqual(result);
});


it('should return mult 6', function () {
    const result = 6;
    expect(mult(2, 3)).toEqual(result);
});