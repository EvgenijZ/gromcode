export const OPTION_TOGGLE = 'OPTION/TOGGLE';

export const optionToggle = (optionId) => {
    return {
        type: OPTION_TOGGLE,
        payload: optionId
    }
}