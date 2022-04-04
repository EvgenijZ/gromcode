import { sum, mult } from '../calculator';

it('should return 4', () => {
    const result = 4;
    expect(sum(2, 2)).toEqual(result);
});

it('should return 6', () => {
    const result = 6;
    expect(mult(3, 2)).toEqual(result);
});
