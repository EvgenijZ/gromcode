import { calc } from './calculator'

it('should +', () => {
    let result = calc('1 + 2');
    expect(result).toEqual('1 + 2 = 3');
});

it('should -', () => {
    let result = calc('2 - 1');
    expect(result).toEqual('2 - 1 = 1');
});

it('should *', () => {
    let result = calc('2 * 2');
    expect(result).toEqual('2 * 2 = 4');
});

it('should /', () => {
    let result = calc('4 / 2');
    expect(result).toEqual('4 / 2 = 2');
});

it('should return null', () => {
    let result = calc(2);
    expect(result).toEqual(null);
});
