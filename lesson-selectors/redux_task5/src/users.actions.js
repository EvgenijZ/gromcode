export const ADD = 'USER/ADD';
export const REMOVE = 'USER/REMOVE';

export const add = (user) => {
    return {
        type: ADD,
        payload: user
    }
}

export const remove = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
}