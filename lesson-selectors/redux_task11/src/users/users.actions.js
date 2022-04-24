export const PREV_PAGE = 'PAGE/PREV';
export const NEXT_PAGE = 'PAGE/NEXT';

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
}

export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
}