'use strict';

const eventsList = document.querySelector('.events-list');
const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const addSpanToList = (text, color) => {
    eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}
const clearList = () => eventsList.innerHTML = '';

const divElementHandler = () => {
    addSpanToList('DIV', 'grey', true);
    addSpanToList('DIV', 'green')
}

const pElementHandler = () => {
    addSpanToList('P', 'grey', true);
    addSpanToList('P', 'green')
}

const spanElementHandler = () => {
    addSpanToList('SPAN', 'grey', true);
    addSpanToList('SPAN', 'green')
}

const removeHandlers = () => {
    divElement.removeEventListener('click', divElementHandler);
    pElement.removeEventListener('click', pElementHandler);
    spanElement.removeEventListener('click', spanElementHandler);
}

const attachHandlers = () => {
    divElement.addEventListener('click', divElementHandler);
    pElement.addEventListener('click', pElementHandler);
    spanElement.addEventListener('click', spanElementHandler);
}

clearBtn.addEventListener('click', () => clearList());
removeHandlersBtn.addEventListener('click', () => removeHandlers());
attachHandlersBtn.addEventListener('click', () => attachHandlers());

attachHandlers();