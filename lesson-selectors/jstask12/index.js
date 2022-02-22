'use strict';

const emailInputElement = document.querySelector('#email');
const passwordInputElement = document.querySelector('#password');
const emailErrorElement = document.querySelector('.error-text_email');
const passwordErrorElement = document.querySelector('.error-text_password');
const formElement = document.querySelector('.login-form');
const isRequired = (value) => value ? undefined : 'Required';
const isEmail = (value) => value ? undefined : 'Should be an email';

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired]
}

const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
}

const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrorElement.textContent = errorText;
}

const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    passwordErrorElement.textContent = errorText;
}

const onFormSubmit = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formElement));
    alert(JSON.stringify(formData));
}

emailInputElement.addEventListener('input', onEmailChange);
passwordInputElement.addEventListener('input', onPasswordChange);
formElement.addEventListener('submit', onFormSubmit);

// const loginForm = document.querySelector('.login-form');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const submitButton = document.querySelector('.submit-button');

// const isEmpty = (el) => el.value.length
// const isEmail = (el) => el.value.includes('@')
// const sendData = (data) => alert(JSON.stringify(data))
// const setError = (error) => errors.push(error)
// const isNotEmptyObject = (obj) => obj.email && obj.password

// let errors = [];

// const renderErrors = (elementName) => {
//     errors.map(error => {
//         if (error.name === elementName) {
//             const el = document.querySelector(`#${error.name}`);
//             el.parentNode.querySelector('.error-text').textContent += `${error.message} `;
//         }
//     });
// }

// const clearErrors = (elementName) => {
//     errors = elementName ? errors.filter(({ name }) => {
//         if (elementName === name) {
//             const el = document.querySelector(`#${elementName}`);
//             el.parentNode.querySelector('.error-text').textContent = '';
//         } else {
//             return elementName !== name;
//         }
//     }) : [];
//     return errors;
// }

// const emailHandler = (e) => {
//     clearErrors('email');

//     if (!isEmpty(e.target)) setError({ name: 'email', message: 'Required' });
//     if (!isEmail(e.target)) setError({ name: 'email', message: 'Should be an email' });

//     renderErrors('email');
// }

// const passwordHandler = (e) => {
//     clearErrors('password');

//     if (!isEmpty(e.target)) setError({ name: 'password', message: 'Required' });

//     renderErrors('password');
// }

// const formHandler = (e) => {
//     e.preventDefault();

//     const formData = Object.fromEntries(new FormData(loginForm));
//     if (!errors.length && isNotEmptyObject(formData)) sendData(formData);
// }

// passwordInput.addEventListener('input', passwordHandler);
// emailInput.addEventListener('input', emailHandler);
// loginForm.addEventListener('submit', formHandler);
// submitButton.addEventListener('click', formHandler);