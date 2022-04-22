export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const deleteUser = (id) => {
    return {
        type: REMOVE_USER,
        payload: id
    }
}