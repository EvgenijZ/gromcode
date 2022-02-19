'use strict';


const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
    const eventsList = document.querySelector('.events-list');
    eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const clearList = () => eventsList.innerHTML = '';

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');

const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreyP = logTarget.bind(null, 'P', 'grey');

const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');


const removeHandlers = () => {
    divElement.removeEventListener('click', divElementHandler);
    pElement.removeEventListener('click', pElementHandler);
    spanElement.removeEventListener('click', spanElementHandler);
}

const attachHandlers = () => {
    divElement.addEventListener('click', logGreyDiv, true);
    pElement.addEventListener('click', logGreyP, true);
    spanElement.addEventListener('click', logGreySpan, true);

    divElement.addEventListener('click', logGreenDiv);
    pElement.addEventListener('click', logGreenP);
    spanElement.addEventListener('click', logGreenSpan);
}

clearBtn.addEventListener('click', () => clearList());
removeHandlersBtn.addEventListener('click', () => removeHandlers());
attachHandlersBtn.addEventListener('click', () => attachHandlers());

attachHandlers();