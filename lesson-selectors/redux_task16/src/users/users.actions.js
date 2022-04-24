import fetchUser from './users.gateway';

export const GET_USER = 'USER/GET';
export const USER_DATA_RECEIVED = 'USER/DATA_RECEIVED';
export const SHOW_SPINNER = 'USER/SPINNER_SHOW';

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
}

export const userDataReceived = (user) => {
    return {
        type: USER_DATA_RECEIVED,
        payload: user
    }
}

export const fetchUserData = (userName) => {
    return (dispatch) => {
        dispatch(showSpinner());
        fetchUser(userName).then(userData => dispatch(userDataReceived(userData)));
    }
}