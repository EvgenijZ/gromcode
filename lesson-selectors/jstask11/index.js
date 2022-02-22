'use strict';

const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('.submit-button');

const isEmpty = (el) => el.value.length
const isEmail = (el) => el.value.includes('@')
const sendData = (data) => alert(JSON.stringify(data))
const setError = (error) => errors.push(error)
const isNotEmptyObject = (obj) => obj.email && obj.password

let errors = [];

const renderErrors = (elementName) => {
    errors.map(error => {
        if (error.name === elementName) {
            const el = document.querySelector(`#${error.name}`);
            el.parentNode.querySelector('.error-text').textContent += `${error.message} `;
        }
    });
}

const clearErrors = (elementName) => {
    errors = elementName ? errors.filter(({ name }) => {
        if (elementName === name) {
            const el = document.querySelector(`#${elementName}`);
            el.parentNode.querySelector('.error-text').textContent = '';
        } else {
            return elementName !== name;
        }
    }) : [];
    return errors;
}

const emailHandler = (e) => {
    clearErrors('email');

    if (!isEmpty(e.target)) setError({ name: 'email', message: 'Required' });
    if (!isEmail(e.target)) setError({ name: 'email', message: 'Should be an email' });

    renderErrors('email');
}

const passwordHandler = (e) => {
    clearErrors('password');

    if (!isEmpty(e.target)) setError({ name: 'password', message: 'Required' });

    renderErrors('password');
}

const formHandler = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(loginForm));
    if (!errors.length && isNotEmptyObject(formData)) sendData(formData);
}

passwordInput.addEventListener('input', passwordHandler);
emailInput.addEventListener('input', emailHandler);
loginForm.addEventListener('submit', formHandler);
submitButton.addEventListener('click', formHandler);