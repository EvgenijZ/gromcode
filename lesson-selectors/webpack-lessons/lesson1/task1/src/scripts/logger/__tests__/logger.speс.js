import { createLogger } from '../logger.js';

it('should return logs empty array', () => {
    const result = [];
    expect(createLogger('test').getLogs()).toEqual(result);
});

it('should return logs array', () => {
    const result = ['log - ping - success'];
    const test = createLogger('ping');
    test.log('success');
    expect(test.getLogs()).toEqual(result);
});

it('should return logs errors array', () => {
    const result = ['error - ping - fail'];
    const test = createLogger('ping');
    test.error('fail');
    expect(test.getLogs()).toEqual(result);
});