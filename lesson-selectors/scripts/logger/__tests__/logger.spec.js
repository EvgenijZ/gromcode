import { createLogger } from '../logger';

it('should return array logs', () => {
    const result = [];
    expect(createLogger('ping').getLogs()).toEqual(result);
});

it('should return not empty array logs', () => {
    const result = ['log - ping - success'];
    const logger = createLogger('ping');
    logger.log('success');
    expect(logger.getLogs()).toEqual(result);
});

it('should return array error', () => {
    const result = ['error - ping - failed'];
    const logger = createLogger('ping');
    logger.error('failed');
    expect(logger.getLogs()).toEqual(result);
});