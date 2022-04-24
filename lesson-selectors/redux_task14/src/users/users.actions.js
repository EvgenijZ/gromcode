export const QUERY_USERS = 'USERS/QUERY';

export const queryUsers = (query) => {
    return {
        type: QUERY_USERS,
        payload: query
    }
}