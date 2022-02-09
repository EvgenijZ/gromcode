import { reverseArray, withdraw, getAdults } from './functions';

it('should return null because of an empty string', () => {
    let result = reverseArray('');
    expect(result).toEqual(null);
})

it('should return null because of an empty argument', () => {
    let result = reverseArray();
    expect(result).toEqual(null);
})

it('should reverse array', () => {
    let result = reverseArray([1, 2, 3, 4]);
    expect(result).toEqual([4, 3, 2, 1]);
})

////////////////////////////////////////////////////////////////

it('should return withdraw 37', () => {
    let result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
    expect(result).toEqual(37);
})

it('should return withdraw -1', () => {
    let result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100);
    expect(result).toEqual(-1);
})

it('should return withdraw null', () => {
    let result = withdraw();
    expect(result).toEqual(null);
})

////////////////////////////////////////////////////////////////

it('should return getAdults', () => {
    let result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should return getAdults', () => {
    let result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should return getAdults null', () => {
    let result = getAdults('');
    expect(result).toEqual(null);
});
