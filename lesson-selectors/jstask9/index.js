'use strict';

export const getItemsList = () => {
    const elements = document.querySelectorAll('.technology');
    console.dir(elements);
    return elements;
}

export const getItemsArray = () => {
    const elements = Array.from(document.querySelectorAll('.tool'));
    console.dir(elements);
    return elements;
}