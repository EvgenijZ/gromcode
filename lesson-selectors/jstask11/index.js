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

const clickHandler = function () {
    addSpanToList(...arguments);
}

const removeHandlers = () => {
    divElement.removeEventListener('click', clickHandler);
    pElement.removeEventListener('click', clickHandler);
    spanElement.removeEventListener('click', clickHandler);
}

const attachHandlers = () => {
    divElement.addEventListener('click', clickHandler.bind(null, 'DIV', 'grey', true));
    pElement.addEventListener('click', clickHandler.bind(null, 'P', 'grey', true));
    spanElement.addEventListener('click', clickHandler.bind(null, 'SPAN', 'grey', true));

    divElement.addEventListener('click', clickHandler.bind(null, 'DIV', 'green'));
    pElement.addEventListener('click', clickHandler.bind(null, 'P', 'green'));
    spanElement.addEventListener('click', clickHandler.bind(null, 'SPAN', 'green'));
}

clearBtn.addEventListener('click', () => clearList());
removeHandlersBtn.addEventListener('click', () => removeHandlers());
attachHandlersBtn.addEventListener('click', () => attachHandlers());

attachHandlers();