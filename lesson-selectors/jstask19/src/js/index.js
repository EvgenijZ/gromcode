const endpointUsers = 'https://623cf2c17efb5abea688e73d.mockapi.io/api/v1/users';

const loginForm = document.querySelector('.login-form');
const submitButton = document.querySelector('.submit-button');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);

    createUser(formData).then(user => {
        alert(JSON.stringify(user));
        clearForm();
        checkDisabledSubmitBtn();
    }).catch(err => new Error(err));
});

loginForm.addEventListener('input', () => {
    if (!checkDisabledSubmitBtn()) return;
});

const createUser = (userData) => {
    return fetch(endpointUsers, {
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(userData))
    }).then(response => response.json());
}

const clearForm = () => loginForm.reset();

const checkDisabledSubmitBtn = () => {
    if (loginForm.reportValidity()) {
        submitButton.removeAttribute('disabled');
        return loginForm.reportValidity();
    }

    submitButton.setAttribute('disabled', true);
    return loginForm.reportValidity();
}