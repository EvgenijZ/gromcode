export const createLogger = (loggerName) => {
    const logs = [];

    return {
        getLogs: () => logs,
        log: message => logs.push(`log - ${loggerName} - ${message}`),
        error: error => logs.push(`error - ${loggerName} - ${error}`),
    }
}