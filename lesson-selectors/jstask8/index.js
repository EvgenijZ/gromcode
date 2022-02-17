'use strict';

export const getTitleElement = () => {
    const titleElement = document.querySelector('.title');
    console.dir(titleElement);
    return titleElement;
}

export const getInputElement = () => {
    const inputElement = document.querySelector('input[type="text"]');
    console.dir(inputElement);
    return inputElement;
}