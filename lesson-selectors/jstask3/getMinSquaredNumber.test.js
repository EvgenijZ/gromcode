import getMinSquaredNumber from './getMinSquaredNumber';

it('should return null from the empty array', () => {
    let result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
})

it('should return null from the string', () => {
    let result = getMinSquaredNumber('');
    expect(result).toEqual(null);
})

it('should get min squared number', () => {
    let result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
})